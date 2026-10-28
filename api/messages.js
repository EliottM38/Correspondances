// Messages du formulaire de contact, pour l'espace interne.
// Le jeton de session est vérifié auprès de la fonction « admin » existante (action « moi »).
// Variable à créer dans Vercel : SUPABASE_SERVICE_ROLE_KEY (secrète, jamais envoyée au navigateur).
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.status(405).json({ erreur: 'Méthode non autorisée' }); return; }
  const base = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const sk = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !sk) { res.status(500).json({ erreur: 'Variable SUPABASE_SERVICE_ROLE_KEY manquante dans Vercel.' }); return; }
  const auth = req.headers.authorization || '';
  if (!/^Bearer \S+/.test(auth)) { res.status(401).json({ erreur: 'Non connecté' }); return; }
  let me;
  try {
    const r = await fetch(base + '/functions/v1/admin', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: auth, apikey: process.env.SUPABASE_ANON_KEY || '' }, body: JSON.stringify({ action: 'moi' }) });
    if (!r.ok) { res.status(401).json({ erreur: 'Session expirée' }); return; }
    me = await r.json();
  } catch (e) { res.status(502).json({ erreur: 'Vérification impossible' }); return; }
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const mod = ['proprietaire', 'administrateur', 'moderateur'].includes(me.role);
  const H = { apikey: sk, Authorization: 'Bearer ' + sk, 'Content-Type': 'application/json' };
  const T = base + '/rest/v1/contact_messages';
  try {
    if (b.action === 'lire') {
      const r = await fetch(T + '?select=*&order=created_at.desc&limit=300', { headers: H });
      if (!r.ok) throw new Error('La table contact_messages est-elle créée (fichier SQL) ?');
      res.status(200).json({ messages: await r.json() });
    } else if (b.action === 'lu' && Number.isInteger(+b.id) && me.role !== 'lecture') {
      await fetch(T + '?id=eq.' + (+b.id), { method: 'PATCH', headers: H, body: JSON.stringify({ lu: b.lu !== false }) });
      res.status(200).json({ ok: true });
    } else if (b.action === 'supprimer' && Number.isInteger(+b.id) && mod) {
      await fetch(T + '?id=eq.' + (+b.id), { method: 'DELETE', headers: H });
      res.status(200).json({ ok: true });
    } else res.status(403).json({ erreur: 'Action non autorisée' });
  } catch (e) { res.status(500).json({ erreur: e.message || 'Erreur' }); }
};
