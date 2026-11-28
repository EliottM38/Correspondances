// Catalogue public des lignes pour les repères de plans d'arrêt.
let cache;
module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erreur: 'Méthode non autorisée' });
  try {
    if (!cache || Date.now() - cache.date > 300000) {
      const response = await fetch('https://data.mobilites-m.fr/api/routers/default/index/routes', { signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw Error('Source indisponible');
      const lignes = await response.json();
      if (!Array.isArray(lignes)) throw Error('Réponse invalide');
      const codes = new Set(['SEM','SE2','GSV','TPV','C38','SNC','TGV','INTERCITES']);
      cache = { date: Date.now(), lignes: lignes.filter(x => x && typeof x.id === 'string' && /^[A-Za-z0-9_:-]{1,100}$/.test(x.id) && codes.has(x.id.split(/[:_]/)[0]) && typeof x.shortName === 'string' && x.shortName.trim() && !/scolaire/i.test([x.type,x.longName].join(' '))).map(x => ({ id:x.id, nom:x.shortName.slice(0,30), description:String(x.longName||'').slice(0,200), couleur:/^[0-9a-f]{6}$/i.test(x.color||'') ? x.color : '', couleurTexte:/^[0-9a-f]{6}$/i.test(x.textColor||'') ? x.textColor : '', mode:String(x.mode||'').slice(0,30) })) };
    }
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
    return res.status(200).json({ lignes: cache.lignes });
  } catch { return res.status(502).json({ erreur: 'Lignes indisponibles' }); }
};
