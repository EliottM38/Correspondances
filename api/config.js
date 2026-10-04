// Fonction Vercel : lit les variables d'environnement et les donne au navigateur.
// Variables à créer dans Vercel : SUPABASE_URL et SUPABASE_ANON_KEY (jamais la clé service_role).
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).send('window.__CFG=' + JSON.stringify({
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_ANON_KEY || ''
  }) + ';');
};
