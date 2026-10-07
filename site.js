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
'q2':'L’app est-elle gratuite ?','r2':'À compléter.',
'c.p':'Une question, une idée, un bug ? Écrivez-nous.','c.mail':'a-completer@exemple.fr',
'm.t':'Mentions légales','m.p':'À compléter.'
};
// Texte des articles : **gras**, *italique*, ## titre, - liste, > encadré, [lien](https://…)
const escHtml=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const mdIn=t=>t.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\*(.+?)\*/g,'<i>$1</i>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
const md=s=>escHtml(s).split(/\n{2,}/).map(b=>/^## /.test(b)?`<h2>${mdIn(b.slice(3))}</h2>`:/^(- .*(\n|$))+$/.test(b)?`<ul>${b.trim().split('\n').map(l=>`<li>${mdIn(l.slice(2))}</li>`).join('')}</ul>`:/^&gt; /.test(b)?`<blockquote>${mdIn(b.replace(/^&gt; ?/gm,''))}</blockquote>`:`<p>${mdIn(b).replace(/\n/g,'<br>')}</p>`).join('');
const P=document.body.dataset.page;
if(P!=='admin')(async()=>{
const C={};
try{const r=await Promise.race([sb.from('site_content').select('key,value'),new Promise((_,j)=>setTimeout(j,2500))]);(r.data||[]).forEach(x=>C[x.key]=x.value)}catch(e){}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const t=k=>C[k]??D[k]??'',E=k=>esc(t(k));
const links=[['index.html','Accueil','home'],['fonctionnalites.html','Fonctionnalités','fonct'],['a-propos.html','À propos','apropos'],['actualites.html','Actualités','actus'],['aide.html','Aide','aide'],['contact.html','Contact','contact']];
const pages={
home:()=>`<section class="hero"><h1>${E('hero.t').split(' ').map((w,i)=>`<span style="animation-delay:${.1+i*.09}s">${w}</span>`).join(' ')}</h1><p>${E('hero.p')}</p><form class="wl"><input type="email" placeholder="Votre email" required><button class="cta">${E('cta')}</button></form><p class="fn">${E('hero.note')}</p></section>
<section class="demo"><div class="di w"><div class="dc"><h2 id="dt"></h2><p id="dp"></p></div><div class="ph">${[1,2,3].map(i=>t('shot'+i)?`<img class="s" src="${E('shot'+i)}" alt="">`:`<div class="s e">Capture ${i}</div>`).join('')}</div></div></section>`,
fonct:()=>[1,2,3,4].map(i=>`<section class="fr w"><h2>${E('f'+i+'.t')}</h2><p>${E('f'+i+'.p')}</p></section>`).join(''),
apropos:()=>`<section class="pg w"><h2>${E('a.t')}</h2><p>${E('a.p')}</p></section>`,
aide:()=>`<section class="pg w"><h2>Aide</h2>${[1,2].map(i=>`<details><summary>${E('q'+i)}</summary><p>${E('r'+i)}</p></details>`).join('')}</section>`,
contact:()=>`<section class="pg w"><h2>Contact</h2><p>${E('c.p')}</p><p><a href="mailto:${E('c.mail')}" style="color:var(--ac)">${E('c.mail')}</a></p></section>`,
actus:()=>`<section class="pg w"><h2>Actualités</h2><div class="cards" id="al"><p>Chargement…</p></div></section>`,
actu:()=>`<section class="pg w art"><div id="ar"><p>Chargement…</p></div></section>`,
mentions:()=>`<section class="pg w"><h2>${E('m.t')}</h2><p>${E('m.p')}</p></section>`
};
document.title='Correspondances';
document.body.insertAdjacentHTML('afterbegin',`<header><nav class="w"><a class="br" href="index.html">Correspon<i>dances</i></a><div class="nl">${links.map(l=>`<a href="${l[0]}" class="${l[2]===P?'on':''}">${l[1]}</a>`).join('')}<button class="pb" id="th"></button></div></nav></header><main>${pages[P]()}</main><footer><div>© Correspondances. Fait à Grenoble.</div><a href="mentions.html">Mentions légales</a></footer>`);
const root=document.documentElement,th=document.getElementById('th');
const setTh=m=>{root.dataset.theme=m;th.textContent=m==='light'?'Clair':'Sombre';localStorage.setItem('theme',m)};
setTh(localStorage.getItem('theme')||'dark');th.onclick=()=>setTh(root.dataset.theme==='light'?'dark':'light');
document.querySelectorAll('.wl').forEach(f=>f.onsubmit=async e=>{e.preventDefault();const b=f.querySelector('button');const{error}=await sb.from('waitlist').insert({email:f.querySelector('input').value.trim().toLowerCase()});b.textContent=error&&error.code!=='23505'?'Réessayer':'Merci !';if(!error||error.code==='23505')f.reset()});
if(P==='home'){
const demo=document.querySelector('.demo'),sc=[...document.querySelectorAll('.s')],dt=document.getElementById('dt'),dp=document.getElementById('dp');let cur=-1;
const up=()=>{const r=demo.getBoundingClientRect(),tot=demo.offsetHeight-innerHeight;const i=tot>0?Math.min(2,Math.max(0,Math.floor(-r.top/tot*3))):0;if(i===cur)return;cur=i;sc.forEach((s,k)=>s.classList.toggle('on',k===i));dt.textContent=t('d'+(i+1)+'.t');dp.textContent=t('d'+(i+1)+'.p')};
addEventListener('scroll',up,{passive:true});up()}
const TAGS={nouveaute:'Nouveauté',travaux:'Travaux',info:'Info',version:'Mise à jour'};
const jour=d=>new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
if(P==='actus'){const{data}=await sb.from('actualites').select('id,titre,categorie,version,publie_le').order('publie_le',{ascending:false});
document.getElementById('al').innerHTML=(data||[]).map(a=>`<a class="card-a" href="actualite.html?id=${a.id}"><span class="tag">${esc(TAGS[a.categorie]||'Info')}${a.version?' '+esc(a.version):''}</span><h3>${esc(a.titre)}</h3><small>${jour(a.publie_le)}</small></a>`).join('')||'<p>Aucune actualité pour l’instant.</p>'}
if(P==='actu'){const el=document.getElementById('ar');const{data:a}=await sb.from('actualites').select('*').eq('id',new URLSearchParams(location.search).get('id')).maybeSingle();
if(!a){el.innerHTML='<p>Article introuvable.</p>';return}
document.title=a.titre+' · Correspondances';
el.innerHTML=`<span class="tag">${esc(TAGS[a.categorie]||'Info')}${a.version?' '+esc(a.version):''}</span><h2>${esc(a.titre)}</h2><small>${jour(a.publie_le)}</small>${a.image_url?`<img src="${esc(a.image_url)}" alt="">`:''}${md(a.contenu)}${a.testflight?`<p><a class="cta" href="${esc(a.testflight)}">Rejoindre la bêta TestFlight</a></p>`:''}<p><a href="actualites.html" style="color:var(--ac)">← Toutes les actualités</a></p>`}
})();
