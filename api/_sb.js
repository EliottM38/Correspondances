// Outils communs aux fonctions du site (le fichier commençant par _ n'est pas une route).
const base = () => (process.env.SUPABASE_URL || '').replace(/\/$/, '');
const get = async (path) => {
  const u = base();
  if (!u) return [];
  const r = await fetch(u + '/rest/v1/' + path, { headers: { apikey: process.env.SUPABASE_ANON_KEY || '', Authorization: 'Bearer ' + (process.env.SUPABASE_ANON_KEY || '') } });
  if (!r.ok) return [];
  return r.json();
};
const origin = (req) => 'https://' + (req.headers['x-forwarded-host'] || req.headers.host);
const xml = (s) => String(s ?? '').replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
module.exports = { get, origin, xml };
