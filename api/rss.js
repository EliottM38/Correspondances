const { get, origin, xml } = require('./_sb');
const plain = (s) => String(s || '').replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*#>_`-]/g, '').replace(/\s+/g, ' ').trim();
module.exports = async (req, res) => {
  const o = origin(req);
  let a = [];
  try { a = await get('actualites?select=id,titre,contenu,categorie,publie_le&order=publie_le.desc&limit=30'); } catch (e) {}
  if (!Array.isArray(a)) a = [];
  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600');
  res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Correspondances · Actualités</title><link>' + xml(o) + '/actualites.html</link><description>Nouveautés, travaux et mises à jour de Correspondances.</description><language>fr</language>'
    + a.map((x) => '<item><title>' + xml(x.titre) + '</title><link>' + xml(o + '/actualite.html?id=' + x.id) + '</link><guid isPermaLink="true">' + xml(o + '/actualite.html?id=' + x.id) + '</guid><pubDate>' + new Date(x.publie_le).toUTCString() + '</pubDate><category>' + xml(x.categorie) + '</category><description>' + xml(plain(x.contenu).slice(0, 300)) + '</description></item>').join('')
    + '</channel></rss>');
};
