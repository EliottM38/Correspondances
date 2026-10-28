const { get, origin, xml } = require('./_sb');
const PAGES = ['/', '/fonctionnalites.html', '/a-propos.html', '/actualites.html', '/aide.html', '/contact.html', '/mentions.html', '/confidentialite.html'];
module.exports = async (req, res) => {
  const o = origin(req);
  let actus = [];
  try { actus = await get('actualites?select=id,publie_le&order=publie_le.desc&limit=500'); } catch (e) {}
  const u = (loc, d) => '<url><loc>' + xml(o + loc) + '</loc>' + (d ? '<lastmod>' + new Date(d).toISOString().slice(0, 10) + '</lastmod>' : '') + '</url>';
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600');
  res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + PAGES.map((p) => u(p)).join('') + (Array.isArray(actus) ? actus : []).map((a) => u('/actualite.html?id=' + a.id, a.publie_le)).join('') + '</urlset>');
};
