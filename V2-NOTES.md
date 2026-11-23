# Correspondances V2

Cette version renforce la page d’accueil sans changer l’architecture existante.

## Changements

- nouvelle séquence éditoriale « Un vrai trajet, pas une promesse » ;
- message et appel à l’action plus concrets pour l’accès pilote ;
- titre, description, Open Graph et canonical de la page d’accueil améliorés ;
- cache-busting `site.js?v=7` sur toutes les pages.

## Déploiement

Le dossier est autonome. Remplacez le contenu du dépôt par ce dossier (en conservant vos variables d’environnement Vercel et Supabase), puis poussez le changement et déployez.

## Vérification

`node --check site.js` passe sans erreur. Le démarrage d’un serveur local n’était pas autorisé dans l’environnement de livraison, donc la prévisualisation complète reste à vérifier après déploiement Vercel.
