const { origin } = require('./_sb');
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600');
  res.status(200).send('User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ' + origin(req) + '/sitemap.xml\n');
};
