// Recherche dans les données publiques M réso. Les résultats conservent les identifiants utilisés par l'app.
const sources = { arret: 'clusters', parking: 'parking', agence: 'agenceM' };
const cache = new Map();
const cleNom = s => normaliser(s).replace(/[^a-z0-9]/g, '');
const normaliser = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erreur: 'Méthode non autorisée' });
  const type = String(req.query.type || ''), query = String(req.query.q || '').trim();
  if (!Object.hasOwn(sources, type) || query.length < 2 || query.length > 80) return res.status(400).json({ erreur: 'Recherche invalide' });
  try {
    let entree = cache.get(type);
    if (!entree || Date.now() - entree.date > 300000) {
      const url = 'https://data.mobilites-m.fr/api/points/json?types=' + encodeURIComponent(sources[type]);
      const r = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(15000) });
      if (!r.ok) throw new Error('Source indisponible');
      const data = await r.json();
      if (!Array.isArray(data.features)) throw new Error('Réponse inattendue');
      entree = { date: Date.now(), features: data.features };
      cache.set(type, entree);
    }
    const mots = normaliser(query).split(/\s+/).filter(Boolean);
    const resultats = [];
    for (const feature of entree.features) {
      const p = feature.properties || {}, c = feature.geometry?.coordinates;
      const id = String(type === 'arret' ? (p.code || '') : (p.id || p.CODE || ''));
      const nom = String(p.name || p.nom || p.NOM || '');
      const ville = String(p.city || p.commune || p.COMMUNE || '');
      const adresse = String(p.adresse || p.RUE || '');
      if (!/^[A-Za-z0-9_:-]{1,100}$/.test(id) || !nom || !Array.isArray(c) || c.length < 2 ||
          !Number.isFinite(c[0]) || !Number.isFinite(c[1]) || Math.abs(c[0]) > 180 || Math.abs(c[1]) > 90) continue;
      if (type === 'arret' && /^(BUL|FUN|MCO)[:_]/.test(id)) continue;
      if (type === 'parking' && !(Number(p.nb_pr) > 0)) continue;
      resultats.push({ id, nom, ville, adresse, latitude: c[1], longitude: c[0] });
    }
    if (type === 'arret') {
      const groupes = [], parNom = new Map();
      for (const r of resultats) {
        const cle = cleNom(r.nom) + '|' + cleNom(r.ville), candidats = parNom.get(cle) || [];
        const proche = candidats.find(g => Math.hypot((g.latitude-r.latitude)*111320, (g.longitude-r.longitude)*111320*Math.cos(r.latitude*Math.PI/180)) <= 250);
        if (proche) { if (!proche.ids.includes(r.id)) proche.ids.push(r.id); }
        else { const g = { ...r, ids: [r.id] }; groupes.push(g); candidats.push(g); parNom.set(cle, candidats); }
      }
      resultats.splice(0, resultats.length, ...groupes);
    }
    const correspond = r => { const texte = normaliser([r.nom, r.ville, r.adresse, ...(r.ids || [r.id])].join(' ')); return mots.every(m => texte.includes(m)); };
    resultats.splice(0, resultats.length, ...resultats.filter(correspond));
    resultats.sort((a, b) => {
      const debutA = normaliser(a.nom).startsWith(normaliser(query)), debutB = normaliser(b.nom).startsWith(normaliser(query));
      return debutA !== debutB ? (debutA ? -1 : 1) : a.nom.localeCompare(b.nom, 'fr', { numeric: true }) || a.ville.localeCompare(b.ville, 'fr');
    });
    res.setHeader('Cache-Control', 'public, max-age=60');
    return res.status(200).json({ resultats: resultats.slice(0, 30) });
  } catch { return res.status(502).json({ erreur: 'Recherche temporairement indisponible.' }); }
};
