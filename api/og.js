const { get } = require('./_sb');
// Image de partage (réseaux sociaux) : on redirige vers l'image choisie dans l'admin (Captures d'écran > Image de partage).
module.exports = async (req, res) => {
  let url = '';
  try { const r = await get('site_content?select=value&key=eq.og.image&limit=1'); url = (r && r[0] && r[0].value) || ''; } catch (e) {}
  if (!/^https:\/\//.test(url)) { res.status(404).end(); return; }
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600');
  res.redirect(302, url);
};
