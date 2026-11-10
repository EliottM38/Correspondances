const{url:SB,key:KEY}=window.__CFG||{};
const sb=supabase.createClient(SB||'https://x.invalid',KEY||'x');
// Textes par défaut : tout peut être remplacé depuis la page interne (table site_content)
const D={
'hero.t':'Le trajet, jusqu’à votre porte.','hero.p':'Correspondances vous guide du quai jusqu’à votre porte\u00a0: la bonne sortie, puis la dernière rue.','hero.note':'Un email le jour de l’ouverture, pas d’autre message.','cta':'Être prévenu·e',
'pop.t':'L’app arrive bientôt à Grenoble.','pop.p':'Laissez votre email : nous vous écrivons le jour de l’ouverture.',
'd1.t':'Les prochains passages autour de vous.','d1.p':'À l’ouverture de l’app, les arrêts proches s’affichent avec leurs horaires.',
'd2.t':'Une alerte avant votre arrêt.','d2.p':'Un rappel quand l’arrêt approche, un autre pour descendre.',
'd3.t':'Partagez votre trajet en direct.','d3.p':'Vos proches voient votre ligne et votre heure d’arrivée.',
'shot1':'','shot2':'','shot3':'',
'f1.t':'Le guidage continue à pied','f1.p':'Après le bus ou le tram : la bonne sortie, le bon quai, puis la rue jusqu’à votre porte.',
'f2.t':'Go : la position du bus','f2.p':'Les voyageurs à bord peuvent partager la position du véhicule, sans que leur nom apparaisse.',
'f3.t':'Suivre un proche','f3.p':'Partagez votre trajet avec vos proches, ou suivez celui de votre enfant avec son accord.',
'f4.t':'Des alertes sur vos lignes','f4.p':'Vous êtes prévenu·e des perturbations sur les lignes que vous suivez.',
'a.t':'Fait à Grenoble.','a.p':'Les applications de transport s’arrêtent à l’arrêt de bus. Votre trajet, lui, continue jusqu’à votre porte.',
'q1':'Quand l’app sera-t-elle disponible ?','r1':'Bientôt à Grenoble. Laissez votre email pour être prévenu·e.',
'q2':'L’app est-elle gratuite ?','r2':'Les conditions d’utilisation et les tarifs seront annoncés avant l’ouverture.',
'q3':'Mes données sont-elles protégées ?','r3':'Votre position reste sur votre téléphone, sauf si vous lancez un partage de trajet. Vous choisissez quand et avec qui.',
'q4':'Puis-je suivre le trajet de mon enfant ?','r4':'Oui, avec son accord. Un enfant est informé du partage avec ses parents et peut l’arrêter : ses parents en sont alors prévenus.',
'q5':'Quels réseaux sont couverts ?','r5':'Nous commençons par la région grenobloise. D’autres réseaux viendront ensuite.',
'q6':'Comment vous contacter ?','r6':'Depuis la page Contact : une question, une idée ou un bug.',
'ln.t':'De l’arrêt à votre porte','maj':'10 novembre 2026',
'c.p':'Une question, une idée, un bug ? Écrivez-nous.','c.mail':'a-completer@exemple.fr',
'm.t':'Mentions légales','m.p':'**Éditeur** : Correspondances est un projet édité à titre non professionnel par une personne physique, dont l’identité a été communiquée à l’hébergeur conformément à l’article 6 de la loi pour la confiance dans l’économie numérique.\n\n**Contact** : par le formulaire de la page Contact.\n\n**Hébergement du site** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.\n\n**Hébergement des données** : Supabase.\n\n**Polices, cartes et données utilisées** : voir la page Crédits et licences.\n\n**Données personnelles** : voir la politique de confidentialité. Pour quitter la liste d’attente : page Me désinscrire.',
'p.t':'Politique de confidentialité','p.p':'## Qui est responsable ?\nCorrespondances est édité à titre non professionnel (voir les mentions légales). Pour toute question sur vos données, écrivez-nous depuis la page Contact.\n\n## Les données que nous traitons, et pourquoi\n- **Compte** : prénom, adresse e-mail, mot de passe (conservé sous forme chiffrée, jamais en clair), statut adulte ou enfant, année de naissance pour un enfant, code ami. Cela sert à faire fonctionner votre compte.\n- **Liste d’attente** : l’adresse e-mail laissée sur ce site, la date de votre accord et, si vous avez accepté la mesure de provenance, le lien de campagne par lequel vous êtes arrivé·e. Cela sert uniquement à vous prévenir de l’ouverture de l’app. Base : votre accord.\n- **Messages de contact** : nom (facultatif), adresse e-mail, sujet et message. Cela sert à vous répondre.\n- **Relations** : vos amis, et les liens entre parents et enfants.\n- **Position** : elle sert à afficher les arrêts proches et à vous guider, directement sur votre téléphone. Elle n’est envoyée à nos serveurs que si vous lancez un partage de trajet, partagez anonymement votre véhicule, ou publiez un signalement.\n- **Avis** : réponses aux questions posées à bord, enregistrées sans lien avec votre compte.\n- **Sur votre téléphone uniquement** : favoris, historique des trajets, lignes suivies et réglages.\n\nNous ne demandons rien d’autre. Aucune donnée n’est vendue.\n\n## Cookies et stockage dans votre navigateur\nCe site ne dépose aucun cookie publicitaire ni de suivi. Il garde dans votre navigateur votre choix de thème (clair ou sombre), votre réponse au bandeau cookies et le dernier contenu reçu, pour s’afficher plus vite. Si vous acceptez, nous gardons aussi les paramètres du lien par lequel vous êtes arrivé·e (utm_source, utm_medium, utm_campaign…) pour savoir quelles actions font connaître l’application ; ils peuvent être associés à votre adresse e-mail si vous rejoignez la liste d’attente. Vous pouvez changer d’avis à tout moment avec « Gérer les cookies » en bas de page.\n\n## Le partage de position\nVous choisissez quand et avec qui. Le partage s’arrête à l’arrivée, à la descente, ou quand vous l’arrêtez. Un enfant est informé du partage avec ses parents et peut l’arrêter : ses parents en sont alors prévenus.\n\n## Mineurs\nLe compte est ouvert dès 13 ans. Avant 15 ans, l’accord d’un parent est nécessaire. Cet accord est déclaré dans l’app : nous ne pouvons pas le vérifier nous-mêmes. Un parent peut demander la suppression du compte de son enfant depuis la page Contact.\n\n## Services tiers\nLes horaires et itinéraires viennent des données ouvertes de M (SMMAG), la recherche de lieux et les cartes d’Apple Plans, et la météo (pour choisir les questions) d’Open-Meteo. Ces services reçoivent les coordonnées nécessaires à leur réponse. Nos données sont hébergées par Supabase, et ce site par Vercel. Ce site charge aussi une bibliothèque depuis le réseau de diffusion jsDelivr, qui reçoit votre adresse IP à ce moment. Ces prestataires peuvent traiter des données hors de l’Union européenne, dans le cadre des clauses contractuelles types de la Commission européenne.\n\n## Combien de temps nous gardons vos données\n- **Compte** : jusqu’à sa suppression.\n- **Liste d’attente** : jusqu’à l’ouverture de l’app et l’envoi du message d’ouverture, puis suppression. Vous pouvez partir plus tôt avec la page Me désinscrire.\n- **Messages de contact** : le temps de vous répondre, puis au plus tard 12 mois.\n- **Positions partagées en direct** : pendant le partage seulement.\n- **Signalements** : ils expirent au bout de 2 heures.\n\n## Vos droits\nVous pouvez accéder à vos données, les corriger, les supprimer, vous opposer à leur traitement, retirer votre accord ou demander leur portabilité. Pour quitter la liste d’attente : page Me désinscrire, votre adresse est effacée tout de suite. Pour un compte : Plus > Profil > Supprimer mon compte, dans l’app. Pour tout le reste : page Contact, nous répondons sous un mois. En cas de désaccord, vous pouvez saisir la CNIL (cnil.fr).\n\n## Sécurité\nLes échanges sont chiffrés (HTTPS) et l’identifiant de session est conservé dans le Trousseau sécurisé de l’iPhone.',
'g.t':'Conditions d’utilisation','g.p':'## À quoi s’applique ce texte\nCes conditions s’appliquent à l’app Correspondances et à ce site. En créant un compte ou en utilisant l’app, vous les acceptez.\n\n## Ce que fait l’app\nCorrespondances affiche des horaires, des itinéraires et un guidage à pied pour vos trajets en transports en commun, et permet de partager un trajet avec vos proches.\n\n## Compte et âge\nLe compte est ouvert dès 13 ans. Avant 15 ans, l’accord d’un parent est nécessaire. Gardez votre mot de passe pour vous : vous restez responsable de ce qui est fait avec votre compte.\n\n## Règles d’usage\n- Ne partagez pas la position d’une personne sans qu’elle le sache.\n- Ne publiez pas de faux signalements ni de contenu injurieux ou illégal.\n- Ne cherchez pas à perturber le service ni à accéder aux données des autres.\nUn compte qui ne respecte pas ces règles peut être suspendu.\n\n## Fiabilité des informations\nLes horaires, positions et itinéraires viennent de données fournies par les réseaux de transport et par d’autres voyageurs. Ils peuvent être en retard, incomplets ou faux. Restez attentif·ve à ce qui se passe autour de vous : l’app ne remplace pas votre vigilance, ni les annonces du réseau.\n\n## Prix\nAucune vente n’est proposée sur ce site. Si une offre payante est proposée dans l’app, son prix, sa durée, la façon de la résilier et votre droit de rétractation de 14 jours vous seront présentés avant l’achat.\n\n## Vos données\nVoir la politique de confidentialité. Vous pouvez supprimer votre compte à tout moment dans l’app (Plus > Profil > Supprimer mon compte).\n\n## Propriété\nLe nom, le logo, les textes et le code de Correspondances appartiennent à son éditeur. Les données de tiers restent soumises à leurs propres licences (voir Crédits et licences).\n\n## Responsabilité\nL’éditeur ne peut pas être tenu responsable d’un retard, d’une correspondance manquée ou d’une interruption du service due à une information inexacte ou à un incident technique, dans la limite permise par la loi.\n\n## Changements et loi applicable\nCes conditions peuvent évoluer ; la date de mise à jour figure en bas de page. Elles sont soumises au droit français. En cas de litige, vous pouvez d’abord nous écrire depuis la page Contact.',
'cr.t':'Crédits et licences','cr.p':'## Police de caractères\n**Hanken Grotesk**, par The Hanken Grotesk Project Authors, sous licence SIL Open Font License 1.1. Elle est hébergée sur ce site.\n\n## Données et services\n- **Horaires et itinéraires** : données ouvertes de M (SMMAG) pour le réseau grenoblois, utilisées selon leurs conditions de réutilisation.\n- **Cartes et lieux** : Apple Plans.\n- **Cheminements à pied** : © les contributeurs d’OpenStreetMap, sous licence ODbL (openstreetmap.org/copyright).\n- **Météo** : Open-Meteo.com, sous licence CC BY 4.0.\n\n## Images\nLe logo et les illustrations de ce site sont dessinés pour Correspondances. Les captures d’écran montrent l’app elle-même. Les écrans « Aperçu illustratif » de l’accueil sont des exemples dessinés, pas des données en direct.\n\n## Hébergement\nSite : Vercel. Données : Supabase.',
'u.t':'Me désinscrire','u.p':'Saisissez l’adresse email que vous avez laissée pour être prévenu·e de l’ouverture. Elle sera effacée de la liste tout de suite.'
};
// Texte des articles : **gras**, *italique*, ## titre, - liste, > encadré, [lien](https://…)
const escHtml=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const mdIn=t=>t.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\*(.+?)\*/g,'<i>$1</i>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
const md=s=>escHtml(s).split(/\n{2,}/).map(b=>/^## /.test(b)?`<h2>${mdIn(b.slice(3))}</h2>`:/^(- .*(\n|$))+$/.test(b)?`<ul>${b.trim().split('\n').map(l=>`<li>${mdIn(l.slice(2))}</li>`).join('')}</ul>`:/^&gt; /.test(b)?`<blockquote>${mdIn(b.replace(/^&gt; ?/gm,''))}</blockquote>`:`<p>${mdIn(b).replace(/\n/g,'<br>')}</p>`).join('');
// Pages légales : les titres de section restent modestes
const mdL=s=>md(s).replace(/<h2>/g,'<h3 style="margin-top:30px;font-size:20px">').replace(/<\/h2>/g,'</h3>');

// Tout le reste vit dans cette fonction : aucun nom global de plus pour la page interne
if(document.body.dataset.page!=='admin')(async()=>{
const P=document.body.dataset.page,root=document.documentElement,B=document.body;
const store=n=>{try{const o=window[n];return{g:k=>{try{return o.getItem(k)}catch(e){return null}},s:(k,v)=>{try{o.setItem(k,v)}catch(e){}},d:k=>{try{o.removeItem(k)}catch(e){}}}}catch(e){return{g:()=>null,s(){},d(){}}}};
const ls=store('localStorage'),ss=store('sessionStorage');
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
root.lang='fr';root.dataset.theme=ls.g('theme')==='light'?'light':'dark';
// Logo dessiné en SVG : u = identifiant unique des dégradés, tuile = fond arrondi, anim = tracé animé
const mark=(u,tuile,anim)=>{
const Pa=[['M17 36C21 27 31 22 38.5 26.5','p'],['M82 21C70 20 67 30 66 38C65 45 60 49 53 51','a'],['M46 50C33 50 24.5 57 24.5 69V77.5','ab'],['M28 78.5H48.4','b1'],['M53 51C56 56 62 58.5 70 58.5H82','b2']];
const N=[[16.2,38.2,'np'],[82.9,20.1,'na'],[85.8,57.5,'nb'],[20.8,77.5,'na'],[52.9,51,'#061A3D']];
const T=[[43.7,30.1,'#F4A3C1'],[47.7,35.2,'#F5B84B'],[50.8,40.8,'#A99BF0'],[63.7,64.8,'#E887B0'],[59.7,70.4,'#E48DB6'],[54,75,'#8FC1FF']];
const g=(id,x1,y1,x2,y2,a,b,c)=>`<linearGradient id="${u}${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/>${c?`<stop offset=".5" stop-color="${c}"/>`:''}<stop offset="1" stop-color="${b}"/></linearGradient>`;
const r=(id,a,b)=>`<radialGradient id="${u}${id}" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
// La barre du bas est parfaitement horizontale : son dégradé doit être exprimé en coordonnées absolues, sinon elle disparaît
const bar=`<linearGradient id="${u}b1" gradientUnits="userSpaceOnUse" x1="28" y1="0" x2="48.4" y2="0"><stop offset="0" stop-color="#EEF5FE"/><stop offset=".25" stop-color="#8FC1FF"/><stop offset="1" stop-color="#3677C8"/></linearGradient>`;
const defs=`<defs>${g('p',0,1,1,0,'#E88FB0','#F7B9CE')}${g('a',0,1,1,0,'#F2A93B','#F9C463')}${g('ab',0,0,0,1,'#FBCB6E','#4C93E6','#A8C4F2')}${bar}${g('b2',0,0,1,0,'#3F7FD6','#7DB4F5')}${r('np','#F7B3CB','#DC7DA6')}${r('na','#FFCB66','#D4903C')}${r('nb','#7FB4EF','#2F68B8')}${tuile?`<linearGradient id="${u}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A2557"/><stop offset="1" stop-color="#051532"/></linearGradient><radialGradient id="${u}h" cx=".85" cy=".08" r=".6"><stop offset="0" stop-color="#4C82D8" stop-opacity=".22"/><stop offset="1" stop-color="#4C82D8" stop-opacity="0"/></radialGradient>`:''}</defs>`;
const fill=c=>c[0]==='#'?c:`url(#${u}${c})`;
return`<svg viewBox="0 0 100 100" aria-hidden="true">${defs}${tuile?`<rect x="1" y="1" width="98" height="98" rx="27" fill="url(#${u}t)"/><rect x="1" y="1" width="98" height="98" rx="27" fill="url(#${u}h)" stroke="#173F82" stroke-width="1.2"/>`:''}<g fill="none" stroke-width="5.2" stroke-linecap="round" stroke-linejoin="round">${Pa.map(p=>`<path ${anim?'class="d" pathLength="1" ':''}d="${p[0]}" stroke="url(#${u}${p[1]})"/>`).join('')}</g>${T.map(d=>`<circle ${anim?'class="dt" ':''}cx="${d[0]}" cy="${d[1]}" r="2.4" fill="${d[2]}"/>`).join('')}<g stroke="#fff" stroke-width="2.2">${N.map(d=>`<circle ${anim?'class="nd" ':''}cx="${d[0]}" cy="${d[1]}" r="6" fill="${fill(d[2])}"/>`).join('')}</g></svg>`};
// Écran de chargement (une seule fois par visite)
const first=!calm&&!ss.g('sp'),t0=Date.now();
if(first){ss.s('sp','1');B.insertAdjacentHTML('afterbegin',`<div class="sp" aria-hidden="true">${mark('s',1,1)}</div>`)}
// Contenu modifiable
const C={};
// Dernier contenu reçu, gardé sur l'appareil : si le serveur répond trop lentement, on ne retombe pas sur les textes par défaut
try{Object.assign(C,JSON.parse(ls.g('sc')||'{}'))}catch(e){}
try{const r=await Promise.race([sb.from('site_content').select('key,value'),new Promise((_,j)=>setTimeout(j,4000))]);if(r.data){Object.keys(C).forEach(k=>delete C[k]);r.data.forEach(x=>C[x.key]=x.value);ls.s('sc',JSON.stringify(C))}}catch(e){}
const t=k=>C[k]??D[k]??'',E=k=>escHtml(t(k));
// Icônes
const svg=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const IC={
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
moon:'<path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 012-2h9"/>',
print:'<path d="M6 9V3h12v6M6 18H4a1 1 0 01-1-1v-6a2 2 0 012-2h14a2 2 0 012 2v6a1 1 0 01-1 1h-2"/><rect x="6" y="14" width="12" height="7"/>',
share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-4.2M8.6 13.4l6.8 4.2"/>'};
const tb=(a,i,l)=>`<button type="button" class="tb" ${a}>${svg(IC[i])}<span class="lb">${l}</span></button>`;
const COL=['var(--pink)','var(--amber)','var(--blue)','var(--lav)'];
const links=[['index.html','Accueil','home'],['fonctionnalites.html','Fonctionnalités','fonct'],['a-propos.html','À propos','apropos'],['actualites.html','Actualités','actus'],['aide.html','Aide','aide'],['contact.html','Contact','contact']];
const form=id=>`<form class="wl" novalidate><div class="row"><label class="sr" for="em${id}">Votre email</label><input id="em${id}" type="email" name="email" placeholder="Votre email" autocomplete="email" required><input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="cta" type="submit"><span>${E('cta')}</span></button></div><label class="cc" for="ok${id}"><input id="ok${id}" type="checkbox" name="accord"><span>J’accepte de recevoir un email à l’ouverture de l’app. Je peux me désinscrire à tout moment. <a href="confidentialite.html">Confidentialité</a></span></label><p class="fm" role="alert" aria-live="polite"></p></form>`;
const eb=(l,c)=>`<div class="eb"${c?` style="--c:${c}"`:''}>${l}</div>`;
const LN=P=>`<nav class="legal-nav" aria-label="Pages légales">${[['mentions.html','Mentions légales','mentions'],['confidentialite.html','Confidentialité','confid'],['cgu.html','Conditions d’utilisation','cgu'],['licences.html','Crédits et licences','credits'],['desinscription.html','Me désinscrire','unsub']].map(l=>`<a href="${l[0]}"${l[2]===P?' aria-current="page"':''}>${l[1]}</a>`).join('')}</nav>`;
const maj=()=>`<p class="up">Mis à jour le ${E('maj')}</p>`;
const faq=n=>`<div class="fq">${[1,2,3,4,5,6].filter(i=>i<=n&&t('q'+i)).map(i=>`<div class="qa" id="q${i}"><h3><button type="button" aria-expanded="false" aria-controls="a${i}">${E('q'+i)}<span class="pl"></span></button></h3><div class="an" id="a${i}" role="region"><div><p>${E('r'+i)}</p></div></div></div>`).join('')}</div>`;
const MAP=`<svg class="bgmap" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path class="rv2" d="M-60 690C260 640 560 700 880 570S1300 420 1520 470"/><g><path class="l" pathLength="1" style="stroke:var(--pink);--i:0" d="M0 560C180 560 300 470 470 400S760 330 980 380S1280 470 1460 300"/><path class="l" pathLength="1" style="stroke:var(--blue);--i:1" d="M0 120C200 120 330 260 470 400S700 600 900 590S1250 560 1460 640"/><path class="l" pathLength="1" style="stroke:var(--amber);--i:2" d="M380 780C430 640 560 540 700 470S900 380 980 380S1100 200 1200 120S1340 40 1460 20"/></g><g class="sn"></g><g class="ix"><circle cx="470" cy="400" r="17"/><circle cx="980" cy="380" r="17" style="--i:4"/><circle class="halo" cx="470" cy="400" r="34"/><circle class="halo" cx="980" cy="380" r="34" style="--i:4"/></g></svg>`;
const TRAM=`<svg viewBox="0 0 150 62" aria-hidden="true"><rect x="4" y="14" width="142" height="34" rx="12" fill="#F2F5FB" stroke="#0B1A38" stroke-width="2.5"/><rect x="4" y="34" width="142" height="7" fill="#5B9DEB"/><g fill="#0B1A38">${[16,48,80,112].map(x=>`<rect x="${x}" y="19" width="22" height="13" rx="3"/>`).join('')}</g><path d="M60 14L72 4H92" fill="none" stroke="#0B1A38" stroke-width="2.5" stroke-linecap="round"/><circle cx="30" cy="50" r="5" fill="#0B1A38"/><circle cx="120" cy="50" r="5" fill="#0B1A38"/></svg>`;
const SC={a:'<div class="ut">Autour de vous</div><div class="us">Grenoble · Gare</div><div class="ur"><b style="--c:#F4A3C1">A</b><span>Fontaine La Poya</span><em>2 min</em></div><div class="ur"><b style="--c:#5B9DEB">B</b><span>Gières Plaine des Sports</span><em>5 min</em></div><div class="ur"><b style="--c:#F4A3C1">A</b><span>Échirolles Denis Papin</span><em>7 min</em></div><div class="ur"><b style="--c:#5B9DEB">B</b><span>Presqu’île</span><em>9 min</em></div>',
b:'<div class="ut">Tram A · Fontaine</div><div class="us">En route</div><div class="al"><b>Préparez-vous à descendre</b><span>Votre arrêt est le prochain.</span></div><ol class="mr"><li class="dn">Départ</li><li class="nw">Vous êtes ici</li><li>Prochain arrêt</li><li class="to">Descendez ici<small>Sortie côté parc</small></li></ol>',
c:'<div class="ut">Trajet partagé</div><div class="us">Avec 2 proches</div><svg class="mm" viewBox="0 0 220 130"><path d="M14 100C60 100 70 40 118 52S170 30 206 22" fill="none" stroke="#F5B84B" stroke-width="6" stroke-linecap="round"/><circle cx="14" cy="100" r="7" fill="#061636" stroke="#fff" stroke-width="3"/><circle cx="206" cy="22" r="7" fill="#F4A3C1" stroke="#fff" stroke-width="3"/><circle class="mv" cx="118" cy="52" r="6" fill="#5B9DEB" stroke="#fff" stroke-width="3"/></svg><div class="ur"><b style="--c:#F5B84B">L</b><span>Léa arrive à<small>Tram A · 3 arrêts restants</small></span><em>8 h 42</em></div><div class="bar"><i></i></div>'};
const pages={
home:()=>{const ws=t('hero.t').split(' '),dot=/\.$/.test(ws[ws.length-1]);if(dot)ws[ws.length-1]=ws[ws.length-1].slice(0,-1);
return`<div class="hero">${MAP}<div class="hw w"><div class="ht"><h1>${ws.map((w,i)=>`<span style="animation-delay:${.08+i*.08}s">${escHtml(w)}${dot&&i===ws.length-1?'<i class="pt"></i>':''}</span>`).join(' ')}</h1><p class="lead">${E('hero.p')}</p><div class="pop"><h2>${E('pop.t')}</h2><p>${E('pop.p')}</p>${form('h')}</div></div>
<div class="fc" aria-hidden="true"><div class="ar"><div class="tp"><b>B</b><span>Vers Gières · Plaine des Sports</span></div><div class="mn"><strong>36</strong><span>minutes</span></div><p class="ah">Arrivée <b data-arr>17:20</b></p><div class="tr"><i></i><em></em></div></div><div class="nx"><b>B</b><span>Prochain départ<strong>3 minutes</strong></span></div><div class="tm">${TRAM}</div><div class="gb">GO</div></div></div><p class="cap2 w" style="text-align:right;margin-top:0;position:absolute;right:0;left:0;bottom:6px;pointer-events:none">Aperçu illustratif</p></div>
<section class="demo"><div class="di w"><div class="dc"><h2 id="dt"></h2><p id="dp"></p><div class="pr"><i style="--c:var(--pink)"></i><i style="--c:var(--amber)"></i><i style="--c:var(--blue)"></i></div></div><div class="phw"><div class="ph">${['a','b','c'].map((k,i)=>t('shot'+(i+1))?`<img class="s" src="${E('shot'+(i+1))}" alt="Capture de l’app : ${E('d'+(i+1)+'.t')}">`:`<div class="s ui">${SC[k]}</div>`).join('')}</div><p class="cap2">Aperçu illustratif</p></div></div></section>
<section class="sec w"><h2 class="t rv">${E('ln.t')}</h2><div class="ln">${[1,2,3,4].map(i=>`<article class="st rv" style="--c:${COL[i-1]}"><span class="nd"></span><div class="k">Arrêt ${i}</div><h3>${E('f'+i+'.t')}</h3><p>${E('f'+i+'.p')}</p></article>`).join('')}</div><a class="more" href="fonctionnalites.html">Tout découvrir <span>→</span></a></section>
<section class="sec w say rv"><h2>${E('a.t')}</h2><p>${E('a.p')}</p><a class="more" href="a-propos.html">Notre histoire <span>→</span></a></section>
<section class="sec w"><div class="fqw"><div><h2 class="t rv">Une question ?</h2><a class="more" href="aide.html">Toute l’aide <span>→</span></a></div>${faq(4)}</div></section>
<section class="end rv"><div class="w endi"><h2>${E('hero.t')}</h2><div>${form('b')}<p class="fn">${E('hero.note')}</p></div></div></section>`},
fonct:()=>`<div class="tl">${[1,2,3,4].map(i=>`<section class="fr rv" style="--c:${COL[i-1]}"><span class="nd"></span><div class="k">0${i}</div><h2>${E('f'+i+'.t')}</h2><p>${E('f'+i+'.p')}</p></section>`).join('')}${maj()}<div class="tools">${tb('data-print','print','Imprimer')}</div></div>`,
apropos:()=>`<section class="pg w rv">${eb('À propos')}<h2>${E('a.t')}</h2><p>${E('a.p')}</p>${maj()}</section>`,
aide:()=>`<section class="pg w">${eb('Aide','var(--blue)')}<h2>Questions fréquentes</h2>${faq(6)}<p style="margin-top:36px">Votre question n’y est pas ? <a class="more" style="margin:0" href="contact.html">Écrivez-nous</a></p>${maj()}<div class="tools">${tb('data-print','print','Imprimer')}</div></section>`,
// Tant que l'adresse de contact est la valeur par défaut, on ne l'affiche pas comme un vrai lien
contact:()=>{const m=t('c.mail'),ok=m&&!/exemple\.fr$/.test(m);return`<section class="pg w rv">${eb('Contact')}<h2>Contact</h2><p>${E('c.p')}</p>
<form class="cf" novalidate><div class="g2"><div class="fd"><label for="cn">Nom <span>(facultatif)</span></label><input id="cn" name="nom" autocomplete="name" maxlength="80"><p class="er"></p></div><div class="fd"><label for="ce">Email</label><input id="ce" name="email" type="email" autocomplete="email" required><p class="er"></p></div></div>
<div class="fd"><label for="cs">Sujet</label><select id="cs" name="sujet"><option>Une question</option><option>Une idée</option><option>Un bug</option><option>Autre</option></select></div>
<div class="fd"><label for="cm">Message</label><textarea id="cm" name="message" rows="6" maxlength="4000" required></textarea><p class="er"></p><div class="cnt">0 / 4000</div></div>
<div class="fd"><label class="cc" for="cok"><input id="cok" type="checkbox" name="accord"><span>J’accepte que mon email et mon message servent à me répondre (<a href="confidentialite.html">Confidentialité</a>).</span></label><p class="er"></p></div>
<input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
<div><button class="cta" type="submit"><span>Envoyer le message</span></button></div><p class="fm" role="alert" aria-live="polite"></p></form>
${ok?`<p class="alt">Vous préférez écrire directement ? <a href="mailto:${E('c.mail')}">${E('c.mail')}</a> ${tb(`data-copy="${E('c.mail')}"`,'copy','Copier')}</p>`:''}${maj()}</section>`},
actus:()=>`<section class="pg w">${eb('Actualités','var(--amber)')}<h2>Actualités</h2><div class="cards" id="al"><p>Chargement…</p></div></section>`,
actu:()=>`<section class="pg w art"><div id="ar"><p>Chargement…</p></div></section>`,
mentions:()=>`<section class="pg w art">${eb('Légal')}<h2>${E('m.t')}</h2>${mdL(t('m.p'))}${maj()}${LN('mentions')}<div class="tools">${tb('data-print','print','Imprimer')}</div></section>`,
confid:()=>`<section class="pg w art">${eb('Légal')}<h2>${E('p.t')}</h2>${mdL(t('p.p'))}${/Dernière mise à jour/.test(t('p.p'))?'':maj()}${LN('confid')}<div class="tools">${tb('data-print','print','Imprimer')}</div></section>`
};
pages.cgu=()=>`<section class="pg w art">${eb('Légal')}<h2>${E('g.t')}</h2>${mdL(t('g.p'))}${maj()}${LN('cgu')}<div class="tools">${tb('data-print','print','Imprimer')}</div></section>`;
pages.credits=()=>`<section class="pg w art">${eb('Légal')}<h2>${E('cr.t')}</h2>${mdL(t('cr.p'))}${maj()}${LN('credits')}</section>`;
pages.unsub=()=>`<section class="pg w">${eb('Légal')}<h2>${E('u.t')}</h2><p>${E('u.p')}</p><form class="un" novalidate><div><label for="ue">Votre email</label><input id="ue" name="email" type="email" autocomplete="email" required></div><input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><div><button class="cta" type="submit"><span>Effacer mon adresse</span></button></div><p class="fm" role="alert" aria-live="polite"></p></form>${LN('unsub')}</section>`;
const TIT={cgu:'Conditions d’utilisation',credits:'Crédits et licences',unsub:'Me désinscrire',fonct:'Fonctionnalités',apropos:'À propos',actus:'Actualités',aide:'Aide',contact:'Contact',mentions:'Mentions légales',confid:'Confidentialité'};
document.title=(TIT[P]?TIT[P]+' · ':'')+'Correspondances';
document.head.insertAdjacentHTML('beforeend',`<meta name="description" content="${E('hero.p')}"><meta name="theme-color" content="#071531"><meta property="og:type" content="website"><meta property="og:title" content="Correspondances"><meta property="og:description" content="${E('hero.p')}"><meta name="twitter:card" content="summary"><link rel="icon" href="logo.svg" type="image/svg+xml">`);
B.insertAdjacentHTML('afterbegin',`<a class="skip" href="#main">Aller au contenu</a><header><div class="w nv"><a class="br" href="index.html" aria-label="Correspondances, accueil">${mark('b',1,0)}<span>Correspondances</span></a><nav id="nav" aria-label="Navigation principale">${links.map(l=>`<a href="${l[0]}"${l[2]===P?' aria-current="page"':''}>${l[1]}</a>`).join('')}</nav><div class="hb"><button type="button" class="ib" id="sr" aria-label="Rechercher sur le site">${svg(IC.search)}</button><button type="button" class="ib" id="th"><span class="i-sun">${svg(IC.sun)}</span><span class="i-moon">${svg(IC.moon)}</span></button><button type="button" class="ib bg" id="mn" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav"><span class="i-o">${svg(IC.menu)}</span><span class="i-x">${svg(IC.close)}</span></button></div></div><div class="pgb"><i></i></div></header><main id="main" tabindex="-1">${pages[P]()}</main><footer><div class="w ft"><div class="fb">${mark('f',1,0)}<span>© Correspondances · Fait à Grenoble</span></div><div class="fl2"><a href="confidentialite.html">Confidentialité</a><a href="cgu.html">Conditions d’utilisation</a><a href="mentions.html">Mentions légales</a><a href="licences.html">Crédits et licences</a><a href="desinscription.html">Me désinscrire</a><button type="button" id="ckb">Gérer les cookies</button></div></div></footer>${P==='contact'?'':`<a class="fab" href="contact.html" aria-label="Nous contacter">${svg(IC.mail)}<span>Contact</span></a>`}<div class="toasts" id="ts" aria-live="polite"></div><dialog class="sd" id="sd" aria-label="Rechercher sur le site"><div class="sq">${svg(IC.search)}<input id="sq" type="search" placeholder="Rechercher : fonctionnalités, aide, actualités…" autocomplete="off" aria-label="Rechercher"><kbd>Échap</kbd></div><ul id="sres"></ul></dialog><dialog class="dlg" id="dl" aria-labelledby="dlt"></dialog>`);
const $=s=>document.querySelector(s),header=$('header');
// Notifications
const toast=(m,k)=>{const d=document.createElement('div');d.className='toast'+(k==='err'?' err':'');d.textContent=m;$('#ts').append(d);setTimeout(()=>{d.classList.add('out');setTimeout(()=>d.remove(),320)},3800)};
// Fenêtre de confirmation
const dl=$('#dl');dl.addEventListener('click',e=>{if(e.target===dl)dl.close()});
const confirmDlg=(titre,txt)=>{dl.innerHTML=`<div class="chk"><svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="23" pathLength="1"/><path d="M15 27l8 8 14-16" pathLength="1"/></svg></div><h2 id="dlt">${escHtml(titre)}</h2><p>${escHtml(txt)}</p><form method="dialog" class="ac"><button class="cta">Fermer</button></form>`;dl.showModal()};
// Thème
const th=$('#th');
const setTh=m=>{root.dataset.theme=m;ls.s('theme',m);th.setAttribute('aria-label',m==='light'?'Passer en mode sombre':'Passer en mode clair');const mt=$('meta[name=theme-color]');if(mt)mt.content=m==='light'?'#F7F5F0':'#071531'};
setTh(root.dataset.theme);th.onclick=()=>setTh(root.dataset.theme==='light'?'dark':'light');
// Menu mobile
const mn=$('#mn'),menu=o=>{header.classList.toggle('open',o);mn.setAttribute('aria-expanded',o);mn.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');B.classList.toggle('lock',o&&innerWidth<=860)};
mn.onclick=()=>menu(!header.classList.contains('open'));
$('#nav').addEventListener('click',e=>{if(e.target.closest('a'))menu(false)});
addEventListener('resize',()=>{if(innerWidth>860)menu(false)});
// Paramètres de campagne (UTM) : transmis avec l'inscription uniquement si le visiteur a accepté
const U={};{const q=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(k=>{if(q.get(k))U[k.slice(4)]=q.get(k).slice(0,60)});
if(ls.g('ck')==='1'){try{Object.assign(U,JSON.parse(ls.g('utm')||'{}'),U)}catch(e){}if(Object.keys(U).length)ls.s('utm',JSON.stringify(U))}}
const src=()=>ls.g('ck')==='1'?Object.entries(U).map(([k,v])=>k+'='+v).join('&').slice(0,200):'';
// Bandeau cookies
const ck=()=>{if($('.ck'))return;B.classList.add('ckv');B.insertAdjacentHTML('beforeend',`<div class="ck" role="dialog" aria-labelledby="ckt"><b id="ckt">Cookies</b><p>Ce site ne dépose aucun cookie publicitaire. Avec votre accord, nous retenons seulement le lien de campagne par lequel vous êtes arrivé·e, pour savoir ce qui fait connaître l’app. <a href="confidentialite.html">En savoir plus</a></p><div class="ac"><button type="button" class="cta" data-ck="1">Accepter</button><button type="button" class="tb" data-ck="0">Refuser</button></div></div>`)};
$('#ckb').onclick=ck;
document.addEventListener('click',e=>{const b=e.target.closest('[data-ck]');if(!b)return;const v=b.dataset.ck;ls.s('ck',v);if(v==='1'){if(Object.keys(U).length)ls.s('utm',JSON.stringify(U))}else ls.d('utm');$('.ck').remove();B.classList.remove('ckv');toast(v==='1'?'Préférence enregistrée : mesure acceptée.':'Préférence enregistrée : aucune mesure.')});
if(ls.g('ck')===null)setTimeout(ck,first?2200:900);
// Copier, imprimer, partager
document.addEventListener('click',async e=>{const b=e.target.closest('[data-copy],[data-print],[data-share]');if(!b)return;
if(b.hasAttribute('data-print'))return print();
if(b.hasAttribute('data-share'))return navigator.share({title:document.title,url:location.href}).catch(()=>{});
const v=b.dataset.copy||location.href;let ok=true;
try{await navigator.clipboard.writeText(v)}catch(x){const a=document.createElement('textarea');a.value=v;a.style.cssText='position:fixed;opacity:0';B.append(a);a.select();try{ok=document.execCommand('copy')}catch(y){ok=false}a.remove()}
if(!ok)return toast('Copie impossible : sélectionnez le texte à la main.','err');
const l=b.querySelector('.lb'),o=l.textContent;l.textContent='Copié';b.classList.add('done');toast('Copié dans le presse-papiers.');setTimeout(()=>{l.textContent=o;b.classList.remove('done')},2000)});
const put=async(tb,row,opt)=>{const o={};Object.entries(opt).forEach(([k,x])=>{if(x)o[k]=x});let r=await sb.from(tb).insert({...row,...o});
if(r.error&&Object.keys(o).length&&r.error.code!=='23505'&&/source|consent|column|PGRST204|42703/i.test((r.error.code||'')+(r.error.message||'')))r=await sb.from(tb).insert(row);return r.error};
// Formulaire de liste d'attente
document.querySelectorAll('.wl').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();
const inp=f.elements.email,b=f.querySelector('button'),sp=b.querySelector('span'),m=f.querySelector('.fm'),lab=sp.textContent;
const fail=(s,toastToo)=>{m.textContent=s;m.className='fm err';f.classList.remove('shake');void f.offsetWidth;f.classList.add('shake');inp.setAttribute('aria-invalid','true');if(toastToo)toast(s,'err')};
inp.removeAttribute('aria-invalid');m.className='fm';m.textContent='';
if(f.elements.website.value){f.reset();return}
const v=inp.value.trim().toLowerCase();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){fail('Cette adresse email ne semble pas valide. Vérifiez-la puis réessayez.');inp.focus();return}
if(!f.elements.accord.checked){fail('Cochez la case pour confirmer votre accord.');f.elements.accord.focus();return}
b.classList.add('ld');sp.textContent='Envoi…';
let error;
try{error=await put('waitlist',{email:v},{source:src(),consent_at:new Date().toISOString()})}catch(x){error={code:'net'}}
b.classList.remove('ld');sp.textContent=lab;
if(error&&error.code!=='23505'){fail('L’inscription n’a pas abouti. Vérifiez votre connexion puis réessayez.',1);return}
f.reset();const dup=!!error;
m.textContent=dup?'Vous êtes déjà sur la liste.':'Inscription enregistrée.';m.className='fm good';
confirmDlg(dup?'Vous êtes déjà inscrit·e':'C’est noté !',dup?'Cette adresse est déjà sur la liste. Vous serez prévenu·e dès l’ouverture.':'Vous serez prévenu·e dès l’ouverture. Un seul message, rien d’autre.')}));
// Formulaire de contact
const cf=$('.cf');
if(cf){const ta=cf.elements.message,cnt=$('.cnt');ta.addEventListener('input',()=>cnt.textContent=ta.value.length+' / 4000');
cf.addEventListener('submit',async e=>{e.preventDefault();
const m=cf.querySelector('.fm'),b=cf.querySelector('button.cta'),sp=b.querySelector('span'),lab=sp.textContent;
cf.querySelectorAll('.fd').forEach(d=>{d.classList.remove('bad');d.querySelector('.er')&&(d.querySelector('.er').textContent='');d.querySelectorAll('[aria-invalid]').forEach(i=>i.removeAttribute('aria-invalid'))});
m.className='fm';m.textContent='';
if(cf.elements.website.value){cf.reset();return}
const v={nom:cf.elements.nom.value.trim().slice(0,80),email:cf.elements.email.value.trim().toLowerCase(),sujet:cf.elements.sujet.value,message:ta.value.trim()};
let first=null;const bad=(n,s)=>{const i=cf.elements[n],d=i.closest('.fd');d.classList.add('bad');d.querySelector('.er').textContent=s;i.setAttribute('aria-invalid','true');first=first||i};
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email))bad('email','Cette adresse email ne semble pas valide.');
if(v.message.length<10)bad('message','Votre message est un peu court (10 caractères minimum).');
if(!cf.elements.accord.checked){const i=cf.elements.accord,d=i.closest('.fd');d.classList.add('bad');d.querySelector('.er').textContent='Cochez la case pour que nous puissions vous répondre.';i.setAttribute('aria-invalid','true');first=first||i}
if(first){cf.classList.remove('shake');void cf.offsetWidth;cf.classList.add('shake');first.focus();return}
if(Date.now()-(+ss.g('cft')||0)<30000){m.textContent='Message déjà envoyé à l’instant. Patientez quelques secondes avant d’en envoyer un autre.';m.className='fm err';return}
b.classList.add('ld');sp.textContent='Envoi…';
let error;try{error=await put('messages',v,{source:src(),consent_at:new Date().toISOString()})}catch(x){error={code:'net'}}
b.classList.remove('ld');sp.textContent=lab;
if(error){m.textContent='Le message n’a pas pu être envoyé. Vérifiez votre connexion puis réessayez.';m.className='fm err';cf.classList.remove('shake');void cf.offsetWidth;cf.classList.add('shake');toast('Message non envoyé.','err');return}
ss.s('cft',Date.now());cf.reset();cnt.textContent='0 / 4000';m.textContent='Message envoyé. Merci !';m.className='fm good';
confirmDlg('Message envoyé','Merci ! Nous vous répondons à l’adresse indiquée dès que possible.')})}
// Désinscription : l'adresse est effacée de la liste d'attente
const un=$('.un');
if(un)un.addEventListener('submit',async e=>{e.preventDefault();const m=un.querySelector('.fm'),b=un.querySelector('button'),sp=b.querySelector('span'),lab=sp.textContent,inp=un.elements.email;
m.className='fm';m.textContent='';inp.removeAttribute('aria-invalid');if(un.elements.website.value)return;
const v=inp.value.trim().toLowerCase();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){m.textContent='Cette adresse email ne semble pas valide.';m.className='fm err';inp.setAttribute('aria-invalid','true');inp.focus();return}
b.classList.add('ld');sp.textContent='Envoi…';let error;try{({error}=await sb.rpc('se_desinscrire',{p_email:v}))}catch(x){error={}}
b.classList.remove('ld');sp.textContent=lab;
if(error){m.textContent='La demande n’a pas abouti. Réessayez, ou écrivez-nous depuis la page Contact.';m.className='fm err';return}
un.reset();m.textContent='Demande prise en compte.';m.className='fm good';confirmDlg('C’est fait','Si cette adresse figurait sur la liste d’attente, elle a été effacée.')});
// FAQ dépliable
const toggle=(q,o)=>{q.classList.toggle('open',o);q.querySelector('button').setAttribute('aria-expanded',o)};
document.addEventListener('click',e=>{const b=e.target.closest('.qa button');if(b){const q=b.closest('.qa');toggle(q,!q.classList.contains('open'))}});
const fromHash=()=>{const q=/^#q\d$/.test(location.hash)&&document.querySelector(location.hash);if(q){toggle(q,true);setTimeout(()=>q.scrollIntoView({block:'center'}),60)}};
addEventListener('hashchange',fromHash);fromHash();
// Recherche
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const plain=s=>String(s).replace(/^## /gm,'').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[*>]/g,'').replace(/^- /gm,'').replace(/\s+/g,' ');
const mk=(a,b,c,d)=>({t:a,x:b,u:c,k:d,n:norm(a+' '+b),nt:norm(a)});
let base=[mk('Accueil',t('hero.p'),'index.html','Page'),...[1,2,3,4].map(i=>mk(t('f'+i+'.t'),t('f'+i+'.p'),'fonctionnalites.html','Fonctionnalité')),mk(t('a.t'),t('a.p'),'a-propos.html','À propos'),...[1,2,3,4,5,6].filter(i=>t('q'+i)).map(i=>mk(t('q'+i),t('r'+i),'aide.html#q'+i,'Question')),mk('Contact',t('c.p'),'contact.html','Page'),mk(t('m.t'),plain(t('m.p')),'mentions.html','Légal'),mk(t('p.t'),plain(t('p.p')),'confidentialite.html','Légal'),mk(t('g.t'),plain(t('g.p')),'cgu.html','Légal'),mk(t('cr.t'),plain(t('cr.p')),'licences.html','Légal'),mk(t('u.t'),t('u.p'),'desinscription.html','Légal')];
let news=null,act=0;
const sd=$('#sd'),sq=$('#sq'),sres=$('#sres');
const run=()=>{const ts=norm(sq.value.trim()).split(/\s+/).filter(Boolean);act=0;
if(!ts.length){sres.innerHTML=`<li class="hd">Pages</li>`+links.map(l=>`<li><a href="${l[0]}"><b>${l[1]}</b></a></li>`).join('');sres.querySelector('a').classList.add('on');return}
const r=[...base,...(news||[])].filter(x=>ts.every(w=>x.n.includes(w))).map(x=>[x,ts.reduce((s,w)=>s+(x.nt.includes(w)?3:1),0)]).sort((a,b)=>b[1]-a[1]).slice(0,8).map(a=>a[0]);
sres.innerHTML=r.length?r.map(x=>{const i=norm(x.x).indexOf(ts[0]),s=i>50?i-50:0,sn=x.x?(s?'…':'')+x.x.slice(s,s+140)+(x.x.length>s+140?'…':''):'';return`<li><a href="${escHtml(x.u)}"><b>${escHtml(x.t)}</b><span class="kd">${x.k}</span>${sn?`<small>${escHtml(sn)}</small>`:''}</a></li>`}).join(''):`<li class="none">Aucun résultat pour « ${escHtml(sq.value.trim())} ».</li>`;
const a=sres.querySelector('a');if(a)a.classList.add('on')};
const loadNews=async()=>{if(news)return;news=[];try{const{data}=await sb.from('actualites').select('id,titre,categorie').order('publie_le',{ascending:false}).limit(30);news=(data||[]).map(a=>mk(a.titre,'','actualite.html?id='+a.id,'Actualité'));if(sd.open)run()}catch(e){}};
const openS=()=>{menu(false);if(!sd.open)sd.showModal();sq.value='';run();sq.focus();loadNews()};
$('#sr').onclick=openS;
sd.addEventListener('click',e=>{if(e.target===sd||e.target.closest('a'))sd.close()});
sq.addEventListener('input',run);
sq.addEventListener('keydown',e=>{const a=[...sres.querySelectorAll('a')];if(!a.length)return;
if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();a[act].classList.remove('on');act=(act+(e.key==='ArrowDown'?1:a.length-1))%a.length;a[act].classList.add('on');a[act].scrollIntoView({block:'nearest'})}
if(e.key==='Enter'){e.preventDefault();a[act].click()}});
addEventListener('keydown',e=>{const ed=/^(INPUT|TEXTAREA)$/.test(e.target.tagName);if((e.key==='/'&&!ed&&!e.ctrlKey&&!e.metaKey)||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k')){e.preventDefault();openS()}if(e.key==='Escape')menu(false)});
// Démo du téléphone, barre de progression, en-tête
const pb=$('.pgb i');let up=()=>{};
if(P==='home'){const demo=$('.demo'),sc=[...document.querySelectorAll('.s')],pr=[...document.querySelectorAll('.pr i')],dt=$('#dt'),dp=$('#dp');let cur=-1;
up=()=>{const r=demo.getBoundingClientRect(),tot=demo.offsetHeight-innerHeight;const i=tot>0?Math.min(2,Math.max(0,Math.floor(-r.top/tot*3))):0;if(i===cur)return;cur=i;sc.forEach((s,k)=>s.classList.toggle('on',k===i));pr.forEach((p,k)=>p.classList.toggle('on',k===i));dt.textContent=t('d'+(i+1)+'.t');dp.textContent=t('d'+(i+1)+'.p')}}
const onS=()=>{const m=document.documentElement.scrollHeight-innerHeight;pb.style.transform=`scaleX(${m>0?Math.min(1,scrollY/m):0})`;up()};
addEventListener('scroll',onS,{passive:true});addEventListener('resize',onS);onS();
// Apparition douce au défilement
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
const reveal=()=>document.querySelectorAll('.rv:not(.in)').forEach(n=>io.observe(n));reveal();
// Carte du réseau (accueil) : les stations sont posées le long des tracés ; heure d'arrivée = maintenant + 36 min
const mp=$('.bgmap');if(mp){const g=mp.querySelector('.sn');mp.querySelectorAll('.l').forEach((p,k)=>{const L=p.getTotalLength();[[.08,.28,.64,.9],[.08,.3,.7,.92],[.2,.5,.8,.94]][k].forEach(f=>{const q=p.getPointAtLength(f*L);g.insertAdjacentHTML('beforeend',`<circle cx="${q.x.toFixed(1)}" cy="${q.y.toFixed(1)}" r="9" style="--i:${k}"/>`)})});
const ar=$('[data-arr]');if(ar)ar.textContent=new Date(Date.now()+36*6e4).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}
// Fin du chargement
if(first){const s=$('.sp');let fin=0;const bye=()=>{if(fin)return;fin=1;s.classList.add('out');setTimeout(()=>s.remove(),700)};s.onclick=bye;await wait(Math.max(0,4200-(Date.now()-t0)));bye()}
B.classList.add('go');
// Actualités
const TAGS={nouveaute:'Nouveauté',travaux:'Travaux',info:'Info',version:'Mise à jour'};
const jour=d=>new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
if(P==='actus'){const{data}=await sb.from('actualites').select('id,titre,categorie,version,publie_le').order('publie_le',{ascending:false});
$('#al').innerHTML=(data||[]).map(a=>`<a class="card-a" href="actualite.html?id=${a.id}"><span class="tag">${escHtml(TAGS[a.categorie]||'Info')}${a.version?' '+escHtml(a.version):''}</span><h3>${escHtml(a.titre)}</h3><small>${jour(a.publie_le)}</small></a>`).join('')||'<p>Aucune actualité pour l’instant.</p>'}
if(P==='actu'){const el=$('#ar');const{data:a}=await sb.from('actualites').select('*').eq('id',new URLSearchParams(location.search).get('id')).maybeSingle();
if(!a){el.innerHTML='<p>Article introuvable.</p>';return}
document.title=a.titre+' · Correspondances';
el.innerHTML=`<span class="tag">${escHtml(TAGS[a.categorie]||'Info')}${a.version?' '+escHtml(a.version):''}</span><h2>${escHtml(a.titre)}</h2><small>Publié le ${jour(a.publie_le)}</small>${a.image_url?`<img src="${escHtml(a.image_url)}" alt="Illustration : ${escHtml(a.titre)}">`:''}${md(a.contenu)}${a.testflight?`<p><a class="cta" href="${escHtml(a.testflight)}">Rejoindre la bêta TestFlight</a></p>`:''}<div class="tools">${tb('data-copy','copy','Copier le lien')}${navigator.share?tb('data-share','share','Partager'):''}${tb('data-print','print','Imprimer')}</div><p><a href="actualites.html">← Toutes les actualités</a></p>`;reveal()}
})();
