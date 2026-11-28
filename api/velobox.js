// Vélo-box renseignées par l’administration, coordonnées WGS84 utilisables sur iOS et Android.
const { get } = require('./_sb');
module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erreur: 'Méthode non autorisée' });
  try {
    const rows = await get('site_content?select=key,value&key=like.app.velobox.*&limit=10000');
    const points = [];
    for (const row of rows) {
      const m = /^app\.velobox\.([A-Za-z0-9_:-]{1,100})$/.exec(row.key || '');
      if (!m || !row.value) continue;
      try {
        const v = JSON.parse(row.value);
        if (typeof v.nom !== 'string' || !v.nom.trim() || !Number.isFinite(v.latitude) || !Number.isFinite(v.longitude) || Math.abs(v.latitude)>90 || Math.abs(v.longitude)>180 || !/^[A-Za-z0-9_:-]{1,100}$/.test(v.reseau || '')) continue;
        points.push({ id:m[1], nom:v.nom.slice(0,200), reseau:v.reseau, latitude:v.latitude, longitude:v.longitude });
      } catch { /* fiche invalide ignorée */ }
    }
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
    return res.status(200).json(points);
  } catch { return res.status(502).json({ erreur:'Vélo-box indisponibles' }); }
};
