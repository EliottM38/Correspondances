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
'c.p':'Une question, une idée, un bug ? Écrivez-nous.','c.mail':'a-completer@exemple.fr',
'm.t':'Mentions légales','m.p':'**Éditeur** : Correspondances est un projet édité à titre non professionnel par une personne physique, dont l’identité a été communiquée à l’hébergeur conformément à l’article 6 de la loi pour la confiance dans l’économie numérique.\n\n**Contact** : via la page Contact.\n\n**Hébergement du site** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.\n\n**Hébergement des données de l’application** : Supabase.\n\n**Données personnelles** : voir la politique de confidentialité.',
'p.t':'Politique de confidentialité','p.p':'Dernière mise à jour : octobre 2026.\n\n## Qui est responsable ?\nCorrespondances est édité à titre non professionnel (voir les mentions légales). Pour toute question sur vos données, écrivez-nous depuis la page Contact.\n\n## Les données que nous traitons\n- **Compte** : prénom, adresse e-mail, mot de passe (conservé sous forme chiffrée, jamais en clair), statut adulte ou enfant, année de naissance pour un enfant, code ami.\n- **Relations** : vos amis, et les liens entre parents et enfants.\n- **Position** : elle sert à afficher les arrêts proches et à vous guider, directement sur votre téléphone. Elle n’est envoyée à nos serveurs que si vous lancez un partage de trajet, partagez anonymement votre véhicule, ou publiez un signalement.\n- **Avis** : réponses aux questions posées à bord, enregistrées sans lien avec votre compte.\n- **Sur votre téléphone uniquement** : favoris, historique des trajets, lignes suivies et réglages.\n\n## Le partage de position\nVous choisissez quand et avec qui. Le partage s’arrête à l’arrivée, à la descente, ou quand vous l’arrêtez. Un enfant est informé du partage avec ses parents et peut l’arrêter : ses parents en sont alors prévenus.\n\n## Mineurs\nLe compte est ouvert dès 13 ans. Avant 15 ans, l’accord d’un parent est nécessaire.\n\n## Services tiers\nLes horaires et itinéraires viennent des données ouvertes de M (SMMAG), la recherche de lieux et les cartes d’Apple Plans, et la météo (pour choisir les questions) d’Open-Meteo. Ces services reçoivent les coordonnées nécessaires à leur réponse. Nos données sont hébergées par Supabase, et ce site par Vercel.\n\n## Conservation\nVotre compte et ses données sont conservés jusqu’à sa suppression. Les positions partagées en direct ne servent que pendant le partage. Les signalements expirent au bout de 2 heures.\n\n## Vos droits\nVous pouvez accéder à vos données, les corriger, les supprimer, vous opposer à leur traitement ou demander leur portabilité. Vous pouvez supprimer votre compte à tout moment dans l’app (Plus > Profil > Supprimer mon compte). En cas de désaccord, vous pouvez saisir la CNIL (cnil.fr).\n\n## Sécurité\nLes échanges sont chiffrés (HTTPS) et l’identifiant de session est conservé dans le Trousseau sécurisé de l’iPhone.'
};
// Texte des articles : **gras**, *italique*, ## titre, - liste, > encadré, [lien](https://…)
const escHtml=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const mdIn=t=>t.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\*(.+?)\*/g,'<i>$1</i>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
const md=s=>escHtml(s).split(/\n{2,}/).map(b=>/^## /.test(b)?`<h2>${mdIn(b.slice(3))}</h2>`:/^(- .*(\n|$))+$/.test(b)?`<ul>${b.trim().split('\n').map(l=>`<li>${mdIn(l.slice(2))}</li>`).join('')}</ul>`:/^&gt; /.test(b)?`<blockquote>${mdIn(b.replace(/^&gt; ?/gm,''))}</blockquote>`:`<p>${mdIn(b).replace(/\n/g,'<br>')}</p>`).join('');
// Pages légales : les titres de section restent modestes (les h2 des pages sont très grands)
const mdL=s=>md(s).replace(/<h2>/g,'<h3 style="margin-top:30px;font-size:20px">').replace(/<\/h2>/g,'</h3>');
// Le logo, dessiné en SVG : u = identifiant unique des dégradés, tuile = fond arrondi, anim = tracé animé (accueil)
const mark=(u,tuile,anim)=>{
const P=[['M17 36C21 27 31 22 38.5 26.5','p'],['M82 21C70 20 67 30 66 38C65 45 60 49 53 51','a'],['M46 50C33 50 24.5 57 24.5 69V77.5','ab'],['M28 78.5H48.4','b1'],['M53 51C56 56 62 58.5 70 58.5H82','b2']];
const N=[[16.2,38.2,'#EE93B3'],[82.9,20.1,'#F5B84B'],[85.8,57.5,'#4C93E6'],[20.8,77.5,'#F5B84B'],[52.9,51,'#061636']];
const T=[[43.7,30.1,'#F4A3C1'],[47.7,35.2,'#F5B84B'],[50.8,40.8,'#A99BF0'],[63.7,64.8,'#F4A3C1'],[59.7,70.4,'#F0A0BE'],[54,75,'#8FC1FF']];
const g=(id,x1,y1,x2,y2,a,b,c)=>`<linearGradient id="${u}${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/>${c?`<stop offset=".5" stop-color="${c}"/>`:''}<stop offset="1" stop-color="${b}"/></linearGradient>`;
return`<svg viewBox="0 0 100 100" aria-hidden="true"><defs>${g('p',0,1,1,0,'#E88FB0','#F7B9CE')}${g('a',0,1,1,0,'#F2A93B','#F9C463')}${g('ab',0,0,0,1,'#FBCB6E','#4C93E6','#A8C4F2')}${g('b1',0,0,1,0,'#8FC1FF','#3F7FD6')}${g('b2',0,0,1,0,'#3F7FD6','#7DB4F5')}</defs>${tuile?'<rect x="1" y="1" width="98" height="98" rx="27" fill="#061636" stroke="#123A7A" stroke-width="1.2"/>':''}<g fill="none" stroke-width="5.2" stroke-linecap="round" stroke-linejoin="round">${P.map(p=>`<path ${anim?'class="d" pathLength="1" ':''}d="${p[0]}" stroke="url(#${u}${p[1]})"/>`).join('')}</g>${T.map(d=>`<circle ${anim?'class="dt" ':''}cx="${d[0]}" cy="${d[1]}" r="2.4" fill="${d[2]}"/>`).join('')}<g stroke="#fff" stroke-width="2.2">${N.map(d=>`<circle ${anim?'class="nd" ':''}cx="${d[0]}" cy="${d[1]}" r="6" fill="${d[2]}"/>`).join('')}</g></svg>`};
const ICO=['<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 000-7h-11a3.5 3.5 0 010-7H15"/><circle cx="18" cy="5" r="3"/>',
'<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>',
'<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
'<path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 003.4 0"/>'];
const COL=['var(--amber)','var(--pink)','var(--blue)','var(--lav)'];
const P=document.body.dataset.page;
if(P!=='admin')(async()=>{
const C={};
try{const r=await Promise.race([sb.from('site_content').select('key,value'),new Promise((_,j)=>setTimeout(j,2500))]);(r.data||[]).forEach(x=>C[x.key]=x.value)}catch(e){}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const t=k=>C[k]??D[k]??'',E=k=>esc(t(k));
const links=[['index.html','Accueil','home'],['fonctionnalites.html','Fonctionnalités','fonct'],['a-propos.html','À propos','apropos'],['actualites.html','Actualités','actus'],['aide.html','Aide','aide'],['contact.html','Contact','contact']];
const form=()=>`<form class="wl"><input type="email" placeholder="Votre email" aria-label="Votre email" required><button class="cta">${E('cta')}</button></form>`;
const bar3=()=>'<div class="bar3"><i style="background:var(--pink)"></i><i style="background:var(--amber)"></i><i style="background:var(--blue)"></i></div>';
const pages={
home:()=>{const ws=t('hero.t').split(' ');
return`<section class="hero"><div class="hm">${mark('h',0,1)}</div><h1>${ws.map((w,i)=>`<span class="${i>=ws.length-2?'g':''}" style="animation-delay:${.1+i*.09}s">${esc(w)}</span>`).join(' ')}</h1><p>${E('hero.p')}</p>${form()}<p class="fn">${E('hero.note')}</p></section>
<section class="demo"><div class="di w"><div class="dc"><h2 id="dt"></h2><p id="dp"></p><div class="pr"><i style="--c:var(--pink)"></i><i style="--c:var(--amber)"></i><i style="--c:var(--blue)"></i></div></div><div class="ph">${[1,2,3].map(i=>t('shot'+i)?`<img class="s" src="${E('shot'+i)}" alt="">`:`<div class="s e">Capture ${i}</div>`).join('')}</div></div></section>
<section class="sec w"><h2 class="t rv">${E('f1.t')}</h2><div class="fg">${[1,2,3,4].map(i=>`<article class="fc rv" style="--c:${COL[i-1]}"><div class="ico"><svg viewBox="0 0 24 24">${ICO[i-1]}</svg></div><h3>${E('f'+i+'.t')}</h3><p>${E('f'+i+'.p')}</p></article>`).join('')}</div><a class="more rv" href="fonctionnalites.html">Tout découvrir <span>→</span></a></section>
<section class="w"><div class="band rv"><h2>${E('hero.t')}</h2>${form()}<p class="fn">${E('hero.note')}</p></div></section>`},
fonct:()=>`<div class="tl">${[1,2,3,4].map(i=>`<section class="fr rv" style="--c:${COL[i-1]}"><span class="nd"></span><div class="k">0${i}</div><h2>${E('f'+i+'.t')}</h2><p>${E('f'+i+'.p')}</p></section>`).join('')}</div>`,
apropos:()=>`<section class="pg w rv">${bar3()}<h2>${E('a.t')}</h2><p>${E('a.p')}</p></section>`,
aide:()=>`<section class="pg w rv">${bar3()}<h2>Aide</h2><div style="margin-top:34px">${[1,2].map(i=>`<details><summary>${E('q'+i)}</summary><p>${E('r'+i)}</p></details>`).join('')}</div></section>`,
// Tant que l'adresse de contact est la valeur par défaut, on ne l'affiche pas comme un vrai lien
contact:()=>{const m=t('c.mail'),ok=m&&!/exemple\.fr$/.test(m);return`<section class="pg w rv">${bar3()}<h2>Contact</h2><p>${E('c.p')}</p><p>${ok?`<a class="mail" href="mailto:${E('c.mail')}">${E('c.mail')}</a>`:'Adresse de contact bientôt disponible.'}</p></section>`},
actus:()=>`<section class="pg w">${bar3()}<h2>Actualités</h2><div class="cards" id="al"><p>Chargement…</p></div></section>`,
actu:()=>`<section class="pg w art"><div id="ar"><p>Chargement…</p></div></section>`,
mentions:()=>`<section class="pg w art">${bar3()}<h2>${E('m.t')}</h2>${mdL(t('m.p'))}</section>`,
confid:()=>`<section class="pg w art">${bar3()}<h2>${E('p.t')}</h2>${mdL(t('p.p'))}</section>`
};
const TIT={fonct:'Fonctionnalités',apropos:'À propos',actus:'Actualités',aide:'Aide',contact:'Contact',mentions:'Mentions légales',confid:'Confidentialité'};
document.title=(TIT[P]?TIT[P]+' · ':'')+'Correspondances';
document.head.insertAdjacentHTML('beforeend',`<meta name="description" content="${E('hero.p')}"><meta name="theme-color" content="#030E26"><link rel="icon" href="logo.svg" type="image/svg+xml">`);
document.body.insertAdjacentHTML('afterbegin',`<header><nav class="w"><a class="br" href="index.html">${mark('b',1,0)}<span>Correspon<i>dances</i></span></a><div class="nl">${links.map(l=>`<a href="${l[0]}" class="${l[2]===P?'on':''}">${l[1]}</a>`).join('')}<button class="pb" id="th"></button></div><button class="bg" id="mn" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></nav></header><main>${pages[P]()}</main><footer><div class="fb">${mark('f',1,0)}<span>© Correspondances. Fait à Grenoble.</span></div><div style="display:flex;gap:18px;flex-wrap:wrap"><a href="confidentialite.html">Confidentialité</a><a href="mentions.html">Mentions légales</a></div></footer>`);
document.getElementById('mn').onclick=()=>document.querySelector('header').classList.toggle('open');
const root=document.documentElement,th=document.getElementById('th');
const setTh=m=>{root.dataset.theme=m;th.textContent=m==='light'?'Clair':'Sombre';localStorage.setItem('theme',m)};
setTh(localStorage.getItem('theme')||'dark');th.onclick=()=>setTh(root.dataset.theme==='light'?'dark':'light');
document.querySelectorAll('.wl').forEach(f=>f.onsubmit=async e=>{e.preventDefault();const b=f.querySelector('button');const{error}=await sb.from('waitlist').insert({email:f.querySelector('input').value.trim().toLowerCase()});b.textContent=error&&error.code!=='23505'?'Réessayer':'Merci !';if(!error||error.code==='23505')f.reset()});
if(P==='home'){
const demo=document.querySelector('.demo'),sc=[...document.querySelectorAll('.s')],pr=[...document.querySelectorAll('.pr i')],dt=document.getElementById('dt'),dp=document.getElementById('dp');let cur=-1;
const up=()=>{const r=demo.getBoundingClientRect(),tot=demo.offsetHeight-innerHeight;const i=tot>0?Math.min(2,Math.max(0,Math.floor(-r.top/tot*3))):0;if(i===cur)return;cur=i;sc.forEach((s,k)=>s.classList.toggle('on',k===i));pr.forEach((p,k)=>p.classList.toggle('on',k===i));dt.textContent=t('d'+(i+1)+'.t');dp.textContent=t('d'+(i+1)+'.p')};
addEventListener('scroll',up,{passive:true});up()}
const TAGS={nouveaute:'Nouveauté',travaux:'Travaux',info:'Info',version:'Mise à jour'};
const jour=d=>new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
if(P==='actus'){const{data}=await sb.from('actualites').select('id,titre,categorie,version,publie_le').order('publie_le',{ascending:false});
document.getElementById('al').innerHTML=(data||[]).map(a=>`<a class="card-a" href="actualite.html?id=${a.id}"><span class="tag">${esc(TAGS[a.categorie]||'Info')}${a.version?' '+esc(a.version):''}</span><h3>${esc(a.titre)}</h3><small>${jour(a.publie_le)}</small></a>`).join('')||'<p>Aucune actualité pour l’instant.</p>'}
if(P==='actu'){const el=document.getElementById('ar');const{data:a}=await sb.from('actualites').select('*').eq('id',new URLSearchParams(location.search).get('id')).maybeSingle();
if(!a){el.innerHTML='<p>Article introuvable.</p>';return}
document.title=a.titre+' · Correspondances';
el.innerHTML=`<span class="tag">${esc(TAGS[a.categorie]||'Info')}${a.version?' '+esc(a.version):''}</span><h2>${esc(a.titre)}</h2><small>${jour(a.publie_le)}</small>${a.image_url?`<img src="${esc(a.image_url)}" alt="">`:''}${md(a.contenu)}${a.testflight?`<p><a class="cta" href="${esc(a.testflight)}">Rejoindre la bêta TestFlight</a></p>`:''}<p><a href="actualites.html">← Toutes les actualités</a></p>`}
// Apparition douce des blocs au défilement
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(n=>io.observe(n));
})();
