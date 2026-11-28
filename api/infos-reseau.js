// Fiches publiques renseignées dans l'espace interne ; aucune écriture depuis l'app.
const { get } = require('./_sb');
module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erreur: 'Méthode non autorisée' });
  const type = String(req.query.type || '');
  const id = String(req.query.id || '');
  if (!['arret', 'reseau', 'parking', 'agence', 'velobox'].includes(type) || !/^[A-Za-z0-9_:-]{1,100}$/.test(id)) {
    return res.status(400).json({ erreur: 'Identifiant invalide' });
  }
  try {
    const key = `app.${type}.${id}`;
    const rows = await get('site_content?select=value&key=eq.' + encodeURIComponent(key) + '&limit=1');
    let data = {};
    if (rows[0]?.value) {
      const value = JSON.parse(rows[0].value);
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        for (const k of ['nom', 'description', 'lien', 'libelleLien', 'iconeParking', 'iconeAgence', 'annonceTitre', 'annonceTexte', 'annonceDebut', 'annonceFin', 'horaires', 'photo', 'reseau', 'plan', 'planDescription']) {
          if (typeof value[k] === 'string') data[k] = value[k].slice(0, 4000);
        }
        if (['parking', 'agence'].includes(type) && Array.isArray(value.horairesHebdo) && value.horairesHebdo.length === 7) {
          const jours = value.horairesHebdo.map(j => {
            if (!j || !['inconnu','ferme','ouvert'].includes(j.etat) || !Array.isArray(j.plages) || j.plages.length > 2) return null;
            if (!j.plages.every(p => p && /^([01]\d|2[0-3]):[0-5]\d$/.test(p.debut) && /^([01]\d|2[0-3]):[0-5]\d$/.test(p.fin))) return null;
            if ((j.etat === 'ouvert') !== (j.plages.length > 0)) return null;
            return { etat:j.etat, plages:j.plages.map(p=>({debut:p.debut,fin:p.fin})) };
          });
          if (jours.every(Boolean)) data.horairesHebdo = jours;
        }
        if (type === 'arret' && Array.isArray(value.planPoints)) {
          data.planPoints = value.planPoints.slice(0,100).filter(p => p && typeof p.texte === 'string' && p.texte.trim() && Number.isFinite(p.latitude) && Math.abs(p.latitude) <= 90 && Number.isFinite(p.longitude) && Math.abs(p.longitude) <= 180).map(p => ({
            texte:p.texte.slice(0,100), latitude:p.latitude, longitude:p.longitude,
            direction:typeof p.direction === 'string' ? p.direction.slice(0,120) : '',
            lignes:(Array.isArray(p.lignes) ? p.lignes : []).slice(0,30).filter(l => l && typeof l.id === 'string' && /^[A-Za-z0-9_:-]{1,100}$/.test(l.id) && typeof l.nom === 'string' && l.nom.trim()).map(l => ({
              id:l.id, nom:l.nom.slice(0,30), couleur:/^[a-f0-9]{6}$/i.test(l.couleur||'') ? l.couleur : '', couleurTexte:/^[a-f0-9]{6}$/i.test(l.couleurTexte||'') ? l.couleurTexte : '', mode:typeof l.mode === 'string' ? l.mode.slice(0,30) : '', direction:typeof l.direction === 'string' ? l.direction.slice(0,120) : ''
            }))
          }));
        }
        if (type === 'reseau') data.annonceActif = value.annonceActif === true;
        if (Number.isFinite(value.latitude) && Number.isFinite(value.longitude) && Math.abs(value.latitude) <= 90 && Math.abs(value.longitude) <= 180) {
          data.latitude = value.latitude; data.longitude = value.longitude;
        }
      }
    }
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
    return res.status(200).json(data);
  } catch {
    return res.status(502).json({ erreur: 'Fiche indisponible' });
  }
};
