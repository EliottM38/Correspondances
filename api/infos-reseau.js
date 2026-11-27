// Fiches publiques renseignées dans l'espace interne ; aucune écriture depuis l'app.
const { get } = require('./_sb');
module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erreur: 'Méthode non autorisée' });
  const type = String(req.query.type || '');
  const id = String(req.query.id || '');
  if (!['arret', 'reseau', 'parking', 'agence'].includes(type) || !/^[A-Za-z0-9_:-]{1,100}$/.test(id)) {
    return res.status(400).json({ erreur: 'Identifiant invalide' });
  }
  try {
    const key = `app.${type}.${id}`;
    const rows = await get('site_content?select=value&key=eq.' + encodeURIComponent(key) + '&limit=1');
    let data = {};
    if (rows[0]?.value) {
      const value = JSON.parse(rows[0].value);
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        for (const k of ['nom', 'description', 'lien', 'libelleLien']) {
          if (typeof value[k] === 'string') data[k] = value[k].slice(0, 4000);
        }
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
