# Correspondances : site public et espace interne

## À faire une seule fois
1. **Supabase > SQL Editor** : coller et lancer `site_supabase.sql` (liste d'attente et messages de contact). Relançable sans risque.
2. **Vercel > Settings > Environment Variables** (puis redéployer) :
   - `SUPABASE_URL` et `SUPABASE_ANON_KEY` : déjà en place.
   - `SUPABASE_SERVICE_ROLE_KEY` : pour lire les messages dans l'espace interne (section « Messages reçus »). Clé secrète : uniquement dans Vercel, jamais dans le code.
   - `ANTHROPIC_API_KEY` : pour l'assistant de la page Aide. `ANTHROPIC_MODEL` est facultatif (par défaut `claude-haiku-5-5`).
3. **Espace interne > Textes du site > Assistant de la page Aide** : passer « Assistant » sur « Activé ».
4. Après un déploiement, recharger l'espace interne avec Ctrl+Maj+R.

## Où se modifie quoi (tout est dans Supabase, table `site_content`)
- Textes FR et EN : Textes du site (bouton Français / English).
- Questions de l'aide : Aide (FAQ). Image de partage et captures : Captures d'écran.
- Tant qu'aucune capture n'est envoyée, l'accueil affiche trois écrans d'illustration.
