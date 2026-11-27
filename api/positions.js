// Coordonnées WGS84 publiques, indépendantes du moteur de carte iOS ou Android.
const { get } = require('./_sb');
module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erreur: 'Méthode non autorisée' });
  try {
    const rows = await get('site_content?select=key,value&key=like.app.*&limit=10000');
    const positions = {};
    for (const row of rows) {
      const m = /^app\.(arret|parking|agence)\.([A-Za-z0-9_:-]{1,100})$/.exec(row.key || '');
      if (!m || !row.value) continue;
      try {
        const v = JSON.parse(row.value);
        if (Number.isFinite(v.latitude) && Number.isFinite(v.longitude) && Math.abs(v.latitude) <= 90 && Math.abs(v.longitude) <= 180) {
          positions[`${m[1]}|${m[2]}`] = { latitude: v.latitude, longitude: v.longitude };
        }
      } catch { /* une fiche invalide ne masque pas les autres */ }
    }
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
    return res.status(200).json(positions);
  } catch { return res.status(502).json({ erreur: 'Positions indisponibles' }); }
};
