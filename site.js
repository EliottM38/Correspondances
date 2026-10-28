const{url:SB,key:KEY}=window.__CFG||{};
const sb=supabase.createClient(SB||'https://x.invalid',KEY||'x');
// Textes par défaut : tout peut être remplacé depuis la page interne (table site_content)
const D={
'hero.t':'Le trajet, jusqu’à votre porte.','hero.p':'Correspondances vous guide de bout en bout : le bon quai, la bonne sortie, la dernière rue.','hero.note':'Bientôt à Grenoble. Aucun spam.','cta':'Être prévenu·e',
'd1.t':'Vos prochains passages, sans rien chercher.','d1.p':'Dès l’ouverture, les arrêts autour de vous et les horaires en temps réel.',
'd2.t':'Chaque étape, au bon moment.','d2.p':'Une alerte à l’approche de l’arrêt, une autre pour descendre.',
'd3.t':'Partagez votre trajet en direct.','d3.p':'Vos proches voient votre ligne et votre heure d’arrivée.',
'shot1':'','shot2':'','shot3':'',
'f1.t':'Un guidage qui va jusqu’au bout','f1.p':'Pas seulement l’heure du prochain bus : la bonne sortie, le bon quai, le bon trottoir.',
'f2.t':'Go : la vraie position du bus','f2.p':'La position du véhicule, partagée anonymement par les voyageurs à bord.',
'f3.t':'Les vôtres, en sécurité','f3.p':'Partagez votre trajet avec vos proches ou suivez celui de votre enfant.',
'f4.t':'Fiable, à votre rythme','f4.p':'Alertes en temps réel sur vos lignes et itinéraires adaptés à vos besoins.',
'a.t':'Fait à Grenoble.','a.p':'Correspondances est né d’un constat simple : les applications s’arrêtent à l’arrêt de bus, pas votre trajet.',
'q1':'Quand l’app sera-t-elle disponible ?','r1':'Bientôt à Grenoble. Laissez votre email pour être prévenu·e.',
'q2':'L’app est-elle gratuite ?','r2':'Oui. L’app est gratuite et sans publicité.',
'faq':'','aide.t':'Aide','aide.p':'Une réponse rapide aux questions les plus courantes.',
'seo.desc':'Correspondances vous guide de bout en bout : le bon quai, la bonne sortie, la dernière rue.','og.image':'','foot':'© Correspondances. Fait à Grenoble.',
'dl.on':'','dl.t':'Bientôt sur votre iPhone.','dl.p':'Rejoignez la bêta pour essayer Correspondances en avant-première.','dl.label':'Rejoindre la bêta','dl.url':'',
'ia.on':'','ia.t':'Posez votre question à l’assistant','ia.p':'Il répond à partir des informations de ce site. Pour tout le reste, écrivez-nous.','ia.consigne':'',
'nf.t':'Cette page n’existe pas.','nf.p':'Le lien est peut-être erroné, ou la page a été déplacée.','nf.cta':'Retour à l’accueil',
'c.p':'Une question, une idée, un bug ? Écrivez-nous.','c.mail':'a-completer@exemple.fr',
'm.t':'Mentions légales','m.p':'**Éditeur** : Correspondances est un projet édité à titre non professionnel par une personne physique, dont l’identité a été communiquée à l’hébergeur conformément à l’article 6 de la loi pour la confiance dans l’économie numérique.\n\n**Contact** : via la page Contact.\n\n**Hébergement du site** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.\n\n**Hébergement des données de l’application** : Supabase.\n\n**Données personnelles** : voir la politique de confidentialité.',
'p.t':'Politique de confidentialité','p.p':'Dernière mise à jour : octobre 2026.\n\n## Qui est responsable ?\nCorrespondances est édité à titre non professionnel (voir les mentions légales). Pour toute question sur vos données, écrivez-nous depuis la page Contact.\n\n## Les données que nous traitons\n- **Compte** : prénom, adresse e-mail, mot de passe (conservé sous forme chiffrée, jamais en clair), statut adulte ou enfant, année de naissance pour un enfant, code ami.\n- **Relations** : vos amis, et les liens entre parents et enfants.\n- **Position** : elle sert à afficher les arrêts proches et à vous guider, directement sur votre téléphone. Elle n’est envoyée à nos serveurs que si vous lancez un partage de trajet, partagez anonymement votre véhicule, ou publiez un signalement.\n- **Avis** : réponses aux questions posées à bord, enregistrées sans lien avec votre compte.\n- **Sur votre téléphone uniquement** : favoris, historique des trajets, lignes suivies et réglages.\n\n## Le partage de position\nVous choisissez quand et avec qui. Le partage s’arrête à l’arrivée, à la descente, ou quand vous l’arrêtez. Un enfant est informé du partage avec ses parents et peut l’arrêter : ses parents en sont alors prévenus.\n\n## Mineurs\nLe compte est ouvert dès 13 ans. Avant 15 ans, l’accord d’un parent est nécessaire.\n\n## Services tiers\nLes horaires et itinéraires viennent des données ouvertes de M (SMMAG), la recherche de lieux et les cartes d’Apple Plans, et la météo (pour choisir les questions) d’Open-Meteo. Ces services reçoivent les coordonnées nécessaires à leur réponse. Nos données sont hébergées par Supabase, et ce site par Vercel.\n\n## Conservation\nVotre compte et ses données sont conservés jusqu’à sa suppression. Les positions partagées en direct ne servent que pendant le partage. Les signalements expirent au bout de 2 heures.\n\n## Vos droits\nVous pouvez accéder à vos données, les corriger, les supprimer, vous opposer à leur traitement ou demander leur portabilité. Vous pouvez supprimer votre compte à tout moment dans l’app (Plus > Profil > Supprimer mon compte). En cas de désaccord, vous pouvez saisir la CNIL (cnil.fr).\n\n## Sécurité\nLes échanges sont chiffrés (HTTPS) et l’identifiant de session est conservé dans le Trousseau sécurisé de l’iPhone.'
};
// Clés identiques dans toutes les langues ; les autres ont une version anglaise stockée sous « clé.en »
const NEU=new Set(['c.mail','dl.url','dl.on','ia.on','ia.consigne','og.image','shot1','shot2','shot3']);
// Textes anglais par défaut (modifiables dans l'admin : clé.en)
const DE={
'hero.t':'Your journey, right to your door.','hero.p':'Correspondances guides you all the way: the right platform, the right exit, the last street.','hero.note':'Coming soon to Grenoble. No spam.','cta':'Notify me',
'd1.t':'Your next departures, nothing to search for.','d1.p':'As soon as you open the app: the stops around you and real-time times.',
'd2.t':'Every step, at the right moment.','d2.p':'One alert as your stop approaches, another to get off.',
'd3.t':'Share your journey live.','d3.p':'Your loved ones see your line and your arrival time.',
'f1.t':'Guidance all the way','f1.p':'Not just the time of the next bus: the right exit, the right platform, the right pavement.',
'f2.t':'Go: the bus’s real position','f2.p':'The vehicle’s position, shared anonymously by passengers on board.',
'f3.t':'Your people, safe','f3.p':'Share your journey with family and friends, or follow your child’s.',
'f4.t':'Reliable, at your pace','f4.p':'Real-time alerts on your lines and routes adapted to your needs.',
'a.t':'Made in Grenoble.','a.p':'Correspondances started from a simple observation: apps stop at the bus stop, but your journey doesn’t.',
'q1':'When will the app be available?','r1':'Coming soon to Grenoble. Leave your email to be notified.',
'q2':'Is the app free?','r2':'Yes. The app is free and ad-free.',
'aide.t':'Help','aide.p':'Quick answers to the most common questions.',
'seo.desc':'Correspondances guides you all the way: the right platform, the right exit, the last street.','foot':'© Correspondances. Made in Grenoble.',
'dl.t':'Coming soon to your iPhone.','dl.p':'Join the beta to try Correspondances before everyone else.','dl.label':'Join the beta',
'nf.t':'This page doesn’t exist.','nf.p':'The link may be wrong, or the page may have moved.','nf.cta':'Back to home',
'c.p':'A question, an idea, a bug? Write to us.',
'ia.t':'Ask our assistant','ia.p':'It answers from the information on this site. For anything else, write to us.',
'm.t':'Legal notice','m.p':'**Publisher**: Correspondances is a non-professional project published by a private individual, whose identity has been disclosed to the host in accordance with Article 6 of the French Law for Confidence in the Digital Economy.\n\n**Contact**: via the Contact page.\n\n**Website hosting**: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.\n\n**App data hosting**: Supabase.\n\n**Personal data**: see the privacy policy.',
'p.t':'Privacy policy','p.p':'Last updated: October 2026.\n\n## Who is responsible?\nCorrespondances is published on a non-professional basis (see the legal notice). For any question about your data, write to us from the Contact page.\n\n## The data we process\n- **Account**: first name, email address, password (stored in encrypted form, never in clear), adult or child status, year of birth for a child, friend code.\n- **Relationships**: your friends, and the links between parents and children.\n- **Location**: it is used to show nearby stops and to guide you, directly on your phone. It is only sent to our servers if you start a journey share, anonymously share your vehicle, or publish a report.\n- **Feedback**: answers to the questions asked on board, recorded with no link to your account.\n- **On your phone only**: favourites, journey history, followed lines and settings.\n\n## Location sharing\nYou choose when and with whom. Sharing stops on arrival, when you get off, or when you stop it. A child is informed of the sharing with their parents and can stop it: their parents are then notified.\n\n## Minors\nAn account can be opened from age 13. Under 15, a parent’s consent is required.\n\n## Third-party services\nTimetables and routes come from the open data of M (SMMAG), place search and maps from Apple Maps, and weather (used to choose the questions) from Open-Meteo. These services receive the coordinates needed to answer. Our data is hosted by Supabase, and this site by Vercel.\n\n## Retention\nYour account and its data are kept until you delete it. Live shared positions are only used during the share. Reports expire after 2 hours.\n\n## Your rights\nYou can access, correct or delete your data, object to its processing or request its portability. You can delete your account at any time in the app (More > Profile > Delete my account). In case of disagreement, you can lodge a complaint with the CNIL (cnil.fr).\n\n## Security\nExchanges are encrypted (HTTPS) and the session identifier is stored in the iPhone’s secure Keychain.'
};
// Texte des articles : **gras**, *italique*, ## titre, - liste, > encadré, [lien](https://…)
const escHtml=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const mdIn=t=>t.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\*(.+?)\*/g,'<i>$1</i>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
const md=s=>escHtml(s).split(/\n{2,}/).map(b=>/^## /.test(b)?`<h2>${mdIn(b.slice(3))}</h2>`:/^(- .*(\n|$))+$/.test(b)?`<ul>${b.trim().split('\n').map(l=>`<li>${mdIn(l.slice(2))}</li>`).join('')}</ul>`:/^&gt; /.test(b)?`<blockquote>${mdIn(b.replace(/^&gt; ?/gm,''))}</blockquote>`:`<p>${mdIn(b).replace(/\n/g,'<br>')}</p>`).join('');
// Pages légales : les titres de section restent modestes (les h2 des pages sont très grands)
const mdL=s=>md(s).replace(/<h2>/g,'<h3 style="margin-top:30px;font-size:20px">').replace(/<\/h2>/g,'</h3>');
// FAQ : liste JSON stockée dans site_content (clé « faq »), à défaut les deux questions q1/r1 et q2/r2
const faqParse=v=>{try{const a=JSON.parse(v);if(Array.isArray(a))return a.filter(x=>x&&x.q).map(x=>({q:String(x.q),r:String(x.r||'')}))}catch(e){}return null};
const faqOf=g=>faqParse(g('faq'))||[1,2].map(i=>({q:g('q'+i),r:g('r'+i)})).filter(x=>x.q);
const P=document.body.dataset.page;
if(P!=='admin')(async()=>{
const C={};
try{const r=await Promise.race([sb.from('site_content').select('key,value'),new Promise((_,j)=>setTimeout(j,2500))]);(r.data||[]).forEach(x=>C[x.key]=x.value)}catch(e){}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// Langue : ?lang=en, sinon le choix mémorisé, sinon le français
let LG='fr';try{const q=new URLSearchParams(location.search).get('lang');if(q)localStorage.setItem('lang',q);LG=q||localStorage.getItem('lang')||'fr'}catch(e){}
LG=LG==='en'?'en':'fr';document.documentElement.lang=LG;
const t=k=>NEU.has(k)?(C[k]??D[k]??''):LG==='en'?(C[k+'.en']??DE[k]??D[k]??''):(C[k]??D[k]??''),E=k=>esc(t(k));
const U={fr:{'n.home':'Accueil','n.fonct':'Fonctionnalités','n.apropos':'À propos','n.actus':'Actualités','n.aide':'Aide','n.contact':'Contact','skip':'Aller au contenu','menu':'Menu','theme':'Changer de thème','clair':'Clair','sombre':'Sombre','lang':'Changer de langue','nav':'Navigation principale',
'mail':'Votre email','mail.l':'Votre adresse email','thx':'Merci !','retry':'Réessayer','shot':'Capture {n} de l’application',
'q.s':'Rechercher une question','q.l':'Rechercher dans l’aide','q.none':'Aucune question pour l’instant.','q.nores':'Aucun résultat.','q.ask':'Posez-nous la question.',
'load':'Chargement…','all':'Tout','more':'Voir plus','news.err':'Impossible de charger les actualités.','news.none':'Aucune actualité pour l’instant.','news.fr':'',
'art.no':'Article introuvable.','art.err':'Impossible de charger l’article pour le moment. Réessayez dans un instant.','art.back':'← Toutes les actualités','tf':'Rejoindre la bêta TestFlight',
'priv':'Confidentialité','legal':'Mentions légales','js':'Ce site a besoin de JavaScript pour s’afficher.',
'c.nom':'Votre nom (facultatif)','c.email':'Votre email','c.msg':'Votre message','c.send':'Envoyer','c.ok':'Merci, votre message est bien envoyé.','c.err':'Envoi impossible pour le moment. Réessayez dans un instant.','c.bad':'Indiquez un email valide et un message.',
'ia.ph':'Votre question…','ia.l':'Votre question à l’assistant','ia.send':'Envoyer','ia.wait':'L’assistant réfléchit…','ia.err':'L’assistant est indisponible pour le moment. Écrivez-nous depuis la page Contact.','ia.note':'Réponse automatique, qui peut contenir des erreurs. Elle ne remplace pas un message à l’équipe.',
'tag.nouveaute':'Nouveauté','tag.travaux':'Travaux','tag.info':'Info','tag.version':'Mise à jour','loc':'fr-FR',
'T.fonct':'Fonctionnalités','T.apropos':'À propos','T.actus':'Actualités','T.aide':'Aide','T.contact':'Contact','T.mentions':'Mentions légales','T.confid':'Confidentialité','T.nf':'Page introuvable',
'D.fonct':'Guidage de bout en bout, partage en direct, famille et alertes : les fonctionnalités de Correspondances.','D.actus':'Nouveautés, travaux et mises à jour de Correspondances.','D.mentions':'Mentions légales de Correspondances.','D.confid':'Comment Correspondances traite vos données personnelles.'},
en:{'n.home':'Home','n.fonct':'Features','n.apropos':'About','n.actus':'News','n.aide':'Help','n.contact':'Contact','skip':'Skip to content','menu':'Menu','theme':'Switch theme','clair':'Light','sombre':'Dark','lang':'Change language','nav':'Main navigation',
'mail':'Your email','mail.l':'Your email address','thx':'Thank you!','retry':'Try again','shot':'App screenshot {n}',
'q.s':'Search a question','q.l':'Search the help','q.none':'No questions yet.','q.nores':'No results.','q.ask':'Ask us your question.',
'load':'Loading…','all':'All','more':'Show more','news.err':'Unable to load the news.','news.none':'No news yet.','news.fr':'News articles are currently published in French.',
'art.no':'Article not found.','art.err':'Unable to load the article right now. Please try again in a moment.','art.back':'← All news','tf':'Join the TestFlight beta',
'priv':'Privacy','legal':'Legal notice','js':'This site needs JavaScript to display.',
'c.nom':'Your name (optional)','c.email':'Your email','c.msg':'Your message','c.send':'Send','c.ok':'Thank you, your message has been sent.','c.err':'Unable to send right now. Please try again in a moment.','c.bad':'Please enter a valid email and a message.',
'ia.ph':'Your question…','ia.l':'Your question to the assistant','ia.send':'Send','ia.wait':'The assistant is thinking…','ia.err':'The assistant is unavailable right now. Write to us from the Contact page.','ia.note':'Automatic answer, which may contain mistakes. It does not replace a message to the team.',
'tag.nouveaute':'New','tag.travaux':'Roadworks','tag.info':'Info','tag.version':'Update','loc':'en-GB',
'T.fonct':'Features','T.apropos':'About','T.actus':'News','T.aide':'Help','T.contact':'Contact','T.mentions':'Legal notice','T.confid':'Privacy','T.nf':'Page not found',
'D.fonct':'End-to-end guidance, live sharing, family and alerts: the features of Correspondances.','D.actus':'News, roadworks and updates from Correspondances.','D.mentions':'Legal notice of Correspondances.','D.confid':'How Correspondances handles your personal data.'}};
const u=(k,v)=>String((U[LG][k]??U.fr[k]??k)).replace('{n}',v);
const links=[['/','n.home','home'],['/fonctionnalites.html','n.fonct','fonct'],['/a-propos.html','n.apropos','apropos'],['/actualites.html','n.actus','actus'],['/aide.html','n.aide','aide'],['/contact.html','n.contact','contact']];
const okUrl=u=>/^https?:\/\//.test(u);
// Repère graphique : lignes de couleur et nœuds cerclés de blanc
const MARK='<svg class="mk" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#272B42"/><path d="M5 22c6 0 6-9 11-9s5-4 11-4" fill="none" stroke="#8FA9E8" stroke-width="2.6" stroke-linecap="round"/><path d="M5 12c6 0 6 9 11 9s5 3 11 3" fill="none" stroke="#A99BF0" stroke-width="2.6" stroke-linecap="round"/><path d="M5 17h22" fill="none" stroke="#7FD1B5" stroke-width="2.6" stroke-linecap="round"/><circle cx="16" cy="17" r="3.2" fill="#F2C879" stroke="#fff" stroke-width="1.6"/></svg>';
const NET='<svg class="net" viewBox="0 0 900 150" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path pathLength="1" d="M0 112C130 112 150 40 280 40S430 96 560 96 740 30 900 30" stroke="var(--b)"/><path pathLength="1" d="M0 40C140 40 170 120 300 120S450 60 580 60 760 124 900 124" stroke="var(--v)"/><path pathLength="1" d="M0 76H900" stroke="var(--m)"/><path pathLength="1" d="M0 140C200 140 250 100 450 100S700 140 900 140" stroke="var(--p)"/><g class="nd"><circle cx="280" cy="40"/><circle cx="450" cy="76"/><circle cx="580" cy="60"/><circle cx="300" cy="120"/><circle cx="620" cy="96"/></g></svg>';
// Écrans d'illustration de l'app, utilisés tant qu'aucune vraie capture n'est envoyée depuis l'admin
const bd=(c,n,r)=>`<i class="bd${r?' r':''}" style="background:${c}">${n}</i>`;
const MOCK=[
`<div class="s m"><p class="mt">${LG==='en'?'Around you':'Autour de vous'}</p>${[['#8FA9E8','C1','Chavant',3],['#A99BF0','C5','Victor Hugo',6],['#F2C879','11','Gares',9,1],['#7FD1B5','A','Alsace-Lorraine',12]].map(r=>`<div class="mr">${bd(r[0],r[1],r[4])}<span>${r[2]}</span><b>${r[3]}<small>min</small></b></div>`).join('')}<p class="mt" style="margin-top:20px">${LG==='en'?'Favourites':'Favoris'}</p><div class="mr"><i class="av" style="background:#7FD1B5">D</i><span>${LG==='en'?'Home':'Domicile'}</span></div><div class="mr"><i class="av" style="background:#F2C879">T</i><span>${LG==='en'?'Work':'Travail'}</span></div></div>`,
`<div class="s m"><p class="mt">${LG==='en'?'Your journey':'Votre trajet'}</p><div class="mbig">${LG==='en'?'Take exit 2':'Sortez par la sortie 2'}</div><div class="ms2"><i></i>${LG==='en'?'Cross at the crossing':'Traversez au passage piéton'}</div><div class="ms2"><i></i>${LG==='en'?'Turn right at the next street':'Tournez à droite à la prochaine rue'}</div><div class="mp"><span></span></div><p class="mq">${LG==='en'?'6 min left':'6 min restantes'}</p></div>`,
`<div class="s m"><p class="mt">${LG==='en'?'Shared journey':'Trajet partagé'}</p>${NET.replace('class="net"','class="net mn"').replace('xMidYMid meet','none')}<div class="mch">${LG==='en'?'Arrives at 6:42 pm':'Arrivée à 18:42'}</div><div class="mr">${bd('#8FA9E8','C1')}<span>${LG==='en'?'Chavant to Gares':'Chavant → Gares'}</span><b>18:42</b></div><div class="mr"><i class="av">M</i><span>${LG==='en'?'Mum is following your journey':'Maman suit votre trajet'}</span></div></div>`];
const pages={
home:()=>`<section class="hero"><h1>${E('hero.t').split(' ').map((w,i)=>`<span style="animation-delay:${.1+i*.09}s">${w}</span>`).join(' ')}</h1><p>${E('hero.p')}</p><form class="wl"><input type="email" placeholder="${u('mail')}" aria-label="${u('mail.l')}" autocomplete="email" required><button class="cta">${E('cta')}</button></form><p class="fn" role="status">${E('hero.note')}</p>${NET}</section>
<section class="demo"><div class="di w"><div class="dc"><h2 id="dt"></h2><p id="dp"></p></div><div class="ph">${[1,2,3].map(i=>t('shot'+i)?`<img class="s" src="${E('shot'+i)}" alt="${u('shot',i)}">`:MOCK[i-1]).join('')}</div></div></section>`
+(t('dl.on')==='1'&&okUrl(t('dl.url'))?`<section class="dl w"><h2>${E('dl.t')}</h2><p>${E('dl.p')}</p><a class="cta" href="${E('dl.url')}" rel="noopener">${E('dl.label')}</a></section>`:''),
fonct:()=>`<div class="lgn">`+[1,2,3,4].map(i=>`<section class="fr w l${i}"><h2>${E('f'+i+'.t')}</h2><p>${E('f'+i+'.p')}</p></section>`).join('')+`</div>`,
apropos:()=>`<section class="pg w"><h2>${E('a.t')}</h2><p>${E('a.p')}</p></section>`,
aide:()=>{const f=faqOf(t);return`<section class="pg w"><h2>${E('aide.t')}</h2><p>${E('aide.p')}</p>${f.length>3?`<input class="fq" type="search" id="fq" placeholder="${u('q.s')}" aria-label="${u('q.l')}">`:''}<div id="fl">${f.map(x=>`<details><summary>${esc(x.q)}</summary><div class="fa">${md(x.r)}</div></details>`).join('')||`<p>${u('q.none')}</p>`}</div><p id="fz" hidden>${u('q.nores')} <a href="/contact.html" style="color:var(--ac)">${u('q.ask')}</a></p>`
+(t('ia.on')==='1'?`<div class="ia"><h3>${E('ia.t')}</h3><p>${E('ia.p')}</p><div id="ml" aria-live="polite"></div><form id="mf"><input id="mi" maxlength="500" placeholder="${u('ia.ph')}" aria-label="${u('ia.l')}" autocomplete="off"><button class="cta">${u('ia.send')}</button></form><p class="fn">${u('ia.note')}</p></div>`:'')+`</section>`},
// Tant que l'adresse de contact est la valeur par défaut, on ne l'affiche pas comme un vrai lien
contact:()=>{const m=t('c.mail'),ok=m&&!/exemple\.fr$/.test(m);return`<section class="pg w"><h2>Contact</h2><p>${E('c.p')}</p><form class="cf" id="cf" novalidate><label>${u('c.nom')}<input name="nom" autocomplete="name" maxlength="80"></label><label>${u('c.email')}<input name="email" type="email" required autocomplete="email" maxlength="254"></label><label>${u('c.msg')}<textarea name="message" rows="6" required maxlength="4000"></textarea></label><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="cta">${u('c.send')}</button><p class="fn" id="cs" role="status"></p></form>${ok?`<p class="fn"><a href="mailto:${E('c.mail')}" style="color:var(--ac)">${E('c.mail')}</a></p>`:''}</section>`},
actus:()=>`<section class="pg w"><h2>${u('T.actus')}</h2>${u('news.fr')?`<p class="fn">${u('news.fr')}</p>`:''}<div class="chips" id="ch" role="group"></div><div class="cards" id="al" aria-live="polite"><p role="status">${u('load')}</p></div><p><button class="b2" id="mo" hidden>${u('more')}</button></p></section>`,
actu:()=>`<section class="pg w art"><div id="ar"><p role="status">${u('load')}</p></div></section>`,
mentions:()=>`<section class="pg w art"><h2>${E('m.t')}</h2>${mdL(t('m.p'))}</section>`,
confid:()=>`<section class="pg w art"><h2>${E('p.t')}</h2>${mdL(t('p.p'))}</section>`,
nf:()=>`<section class="pg w"><h2>${E('nf.t')}</h2><p>${E('nf.p')}</p><p><a class="cta" href="/">${E('nf.cta')}</a></p></section>`
};
const TIT=P in {fonct:1,apropos:1,actus:1,aide:1,contact:1,mentions:1,confid:1,nf:1}?u('T.'+P):'';
const DESC={fonct:u('D.fonct'),apropos:t('a.p'),aide:t('aide.p'),contact:t('c.p'),actus:u('D.actus'),mentions:u('D.mentions'),confid:u('D.confid')};
// Balises de référencement et de partage (le titre et la description se mettent à jour pour chaque page)
const O=location.origin,OG=t('og.image')||O+'/api/og',URL_=O+location.pathname+(P==='actu'?location.search:'');
const meta=(n,v,prop)=>{const a=prop?'property':'name';let e=document.head.querySelector(`meta[${a}="${n}"]`);if(!e){e=document.createElement('meta');e.setAttribute(a,n);document.head.appendChild(e)}e.setAttribute('content',v)};
const setSEO=(ti,de,img)=>{document.title=ti;meta('description',de);meta('og:title',ti,1);meta('og:description',de,1);meta('og:type','website',1);meta('og:site_name','Correspondances',1);meta('og:locale',LG==='en'?'en_US':'fr_FR',1);meta('og:url',URL_,1);meta('og:image',img||OG,1);meta('twitter:card','summary_large_image');meta('twitter:title',ti);meta('twitter:description',de);meta('twitter:image',img||OG);
let c=document.head.querySelector('link[rel=canonical]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)}c.href=URL_};
setSEO((TIT?TIT+' · ':'')+'Correspondances',DESC[P]||t('seo.desc'));
if(P==='nf')meta('robots','noindex');
document.head.insertAdjacentHTML('beforeend',`<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%23272B42'/%3E%3Cpath d='M5 22c6 0 6-9 11-9s5-4 11-4' fill='none' stroke='%238FA9E8' stroke-width='2.6' stroke-linecap='round'/%3E%3Cpath d='M5 12c6 0 6 9 11 9s5 3 11 3' fill='none' stroke='%23A99BF0' stroke-width='2.6' stroke-linecap='round'/%3E%3Cpath d='M5 17h22' fill='none' stroke='%237FD1B5' stroke-width='2.6' stroke-linecap='round'/%3E%3Ccircle cx='16' cy='17' r='3.2' fill='%23F2C879' stroke='%23fff' stroke-width='1.6'/%3E%3C/svg%3E"><link rel="alternate" type="application/rss+xml" title="Correspondances" href="/rss.xml">`);
if(P==='aide'){const f=faqOf(t);if(f.length){const s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:f.map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.r}}))});document.head.appendChild(s)}}
document.body.insertAdjacentHTML('afterbegin',`<a class="sk" href="#main">${u('skip')}</a><header><nav class="w" aria-label="${u('nav')}"><a class="br" href="/" aria-label="Correspondances">${MARK}<span>Correspon<i>dances</i></span></a><div class="nl" id="nl">${links.map(l=>`<a href="${l[0]}"${l[2]===P?' class="on" aria-current="page"':''}>${u(l[1])}</a>`).join('')}</div><div class="nr"><button class="pb" id="lg" aria-label="${u('lang')}" lang="${LG==='en'?'fr':'en'}">${LG==='en'?'FR':'EN'}</button><button class="pb" id="th" aria-label="${u('theme')}"></button><button class="mb" id="mb" aria-label="${u('menu')}" aria-expanded="false" aria-controls="nl"><span></span><span></span></button></div></nav></header><main id="main" tabindex="-1">${pages[P]()}</main><footer><div>${E('foot')}</div><div class="fl"><a href="/confidentialite.html">${u('priv')}</a><a href="/mentions.html">${u('legal')}</a><a href="/rss.xml">RSS</a></div></footer>`);
const root=document.documentElement,th=document.getElementById('th');
const setTh=m=>{root.dataset.theme=m;th.textContent=m==='light'?u('clair'):u('sombre');try{localStorage.setItem('theme',m)}catch(e){}};
let sv='dark';try{sv=localStorage.getItem('theme')||'dark'}catch(e){}
setTh(sv);th.onclick=()=>setTh(root.dataset.theme==='light'?'dark':'light');
document.getElementById('lg').onclick=()=>{try{localStorage.setItem('lang',LG==='en'?'fr':'en')}catch(e){}const x=new URL(location.href);x.searchParams.delete('lang');location.href=x.pathname+x.search+x.hash};
// Menu mobile
const nl=document.getElementById('nl'),mb=document.getElementById('mb');
const shut=()=>{nl.classList.remove('open');mb.classList.remove('x');mb.setAttribute('aria-expanded','false')};
mb.onclick=()=>{const o=nl.classList.toggle('open');mb.classList.toggle('x',o);mb.setAttribute('aria-expanded',String(o))};
nl.onclick=e=>{if(e.target.closest('a'))shut()};
addEventListener('keydown',e=>{if(e.key==='Escape')shut()});addEventListener('resize',()=>{if(innerWidth>760)shut()});
document.querySelectorAll('.wl').forEach(f=>f.onsubmit=async e=>{e.preventDefault();const b=f.querySelector('button');b.disabled=true;b.textContent='…';let error=null;
try{({error}=await sb.from('waitlist').insert({email:f.querySelector('input').value.trim().toLowerCase()}))}catch(x){error=x}
const ok=!error||error.code==='23505';b.disabled=false;b.textContent=ok?u('thx'):u('retry');if(ok)f.reset()});
if(P==='contact'){const f=document.getElementById('cf'),st=document.getElementById('cs');f.onsubmit=async e=>{e.preventDefault();const d=new FormData(f),b=f.querySelector('button.cta'),em=String(d.get('email')||'').trim(),m=String(d.get('message')||'').trim();
if(d.get('website')){st.textContent=u('c.ok');return}
if(!f.elements.email.checkValidity()||!em||m.length<3){st.textContent=u('c.bad');return}
b.disabled=true;st.textContent='…';let error=null;try{({error}=await sb.from('contact_messages').insert({nom:String(d.get('nom')||'').trim().slice(0,80)||null,email:em.toLowerCase(),message:m.slice(0,4000)}))}catch(x){error=x}
b.disabled=false;st.textContent=error?u('c.err'):u('c.ok');if(!error)f.reset()}}
if(P==='home'){
const demo=document.querySelector('.demo'),sc=[...document.querySelectorAll('.s')],dt=document.getElementById('dt'),dp=document.getElementById('dp');let cur=-1;
const up=()=>{const r=demo.getBoundingClientRect(),tot=demo.offsetHeight-innerHeight;const i=tot>0?Math.min(2,Math.max(0,Math.floor(-r.top/tot*3))):0;if(i===cur)return;cur=i;sc.forEach((s,k)=>s.classList.toggle('on',k===i));dt.textContent=t('d'+(i+1)+'.t');dp.textContent=t('d'+(i+1)+'.p')};
addEventListener('scroll',up,{passive:true});up()}
if(P==='aide'){const q=document.getElementById('fq');if(q)q.oninput=()=>{const v=q.value.trim().toLowerCase();let n=0;document.querySelectorAll('#fl details').forEach(d=>{const ok=!v||d.textContent.toLowerCase().includes(v);d.hidden=!ok;if(ok)n++});document.getElementById('fz').hidden=!v||n>0}
const mf=document.getElementById('mf');if(mf){const ml=document.getElementById('ml'),mi=document.getElementById('mi'),H=[];const add=(r,x)=>{ml.insertAdjacentHTML('beforeend',`<div class="ib ${r}">${r==='u'?esc(x):md(x)}</div>`);ml.lastElementChild.scrollIntoView({block:'nearest'})};
mf.onsubmit=async e=>{e.preventDefault();const x=mi.value.trim();if(!x)return;mi.value='';H.push({role:'user',content:x});add('u',x);const b=mf.querySelector('button');b.disabled=true;add('w',u('ia.wait'));
try{const r=await fetch('/api/assistant',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:H.slice(-6),lang:LG})});const d=await r.json();ml.lastElementChild.remove();if(!r.ok||!d.reponse)throw 0;H.push({role:'assistant',content:d.reponse});add('a',d.reponse)}catch(x){ml.lastElementChild&&ml.lastElementChild.classList.contains('w')&&ml.lastElementChild.remove();H.pop();add('a',u('ia.err'))}b.disabled=false;mi.focus()}}}
const TAGS={nouveaute:u('tag.nouveaute'),travaux:u('tag.travaux'),info:u('tag.info'),version:u('tag.version')};
const jour=d=>new Date(d).toLocaleDateString(u('loc'),{day:'numeric',month:'long',year:'numeric'});
if(P==='actus'){const el=document.getElementById('al'),ch=document.getElementById('ch'),mo=document.getElementById('mo');let all=[],cat='',n=8;
const draw=()=>{const l=all.filter(a=>!cat||a.categorie===cat);el.innerHTML=l.slice(0,n).map(a=>`<a class="card-a" href="/actualite.html?id=${a.id}"><span class="tag t-${esc(a.categorie||'info')}">${esc(TAGS[a.categorie]||TAGS.info)}${a.version?' '+esc(a.version):''}</span><h3>${esc(a.titre)}</h3><small>${jour(a.publie_le)}</small></a>`).join('')||`<p>${u('news.none')}</p>`;mo.hidden=l.length<=n};
const chips=()=>{const ks=Object.keys(TAGS).filter(k=>all.some(a=>a.categorie===k));ch.innerHTML=ks.length>1?['',...ks].map(k=>`<button class="chip" data-c="${k}" aria-pressed="${k===cat}">${k?TAGS[k]:u('all')}</button>`).join(''):''};
ch.onclick=e=>{const b=e.target.closest('[data-c]');if(!b)return;cat=b.dataset.c;n=8;chips();draw()};
mo.onclick=()=>{n+=8;draw()};
const load=async()=>{el.innerHTML=`<p role="status">${u('load')}</p>`;try{const{data,error}=await sb.from('actualites').select('id,titre,categorie,version,publie_le').order('publie_le',{ascending:false});if(error)throw error;all=data||[];chips();draw()}catch(e){el.innerHTML=`<p>${u('news.err')} <button class="b2" id="rt">${u('retry')}</button></p>`;document.getElementById('rt').onclick=load}};
await load()}
if(P==='actu'){const el=document.getElementById('ar'),back=`<p><a href="/actualites.html" style="color:var(--ac)">${u('art.back')}</a></p>`;let a=null,fail=false;
try{const r=await sb.from('actualites').select('*').eq('id',new URLSearchParams(location.search).get('id')).maybeSingle();if(r.error)throw r.error;a=r.data}catch(e){fail=true}
if(!a){el.innerHTML=`<p>${fail?u('art.err'):u('art.no')}</p>`+back;meta('robots','noindex');return}
setSEO(a.titre+' · Correspondances',String(a.contenu||'').replace(/!?\[([^\]]*)\]\([^)]*\)/g,'$1').replace(/[*#>_`-]/g,'').replace(/\s+/g,' ').trim().slice(0,155)||t('seo.desc'),a.image_url||undefined);
el.innerHTML=`<span class="tag t-${esc(a.categorie||'info')}">${esc(TAGS[a.categorie]||TAGS.info)}${a.version?' '+esc(a.version):''}</span><h2>${esc(a.titre)}</h2><small>${jour(a.publie_le)}</small>${a.image_url?`<img src="${esc(a.image_url)}" alt="">`:''}${md(a.contenu)}${a.testflight&&okUrl(a.testflight)?`<p><a class="cta" href="${esc(a.testflight)}">${u('tf')}</a></p>`:''}`+back}
})();
