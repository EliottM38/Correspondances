const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const API=((window.__CFG||{}).url||'')+'/functions/v1/admin';
let T=sessionStorage.getItem('t'),me={},C={},W=[],S={},tm;
const ER={refuse:'Accès refusé : aucun rôle autorisé sur le serveur Discord.',etat:'Connexion expirée, réessayez.',discord:'Discord a refusé la connexion.',base:'Erreur de base de données : le SQL a-t-il été exécuté ?'};
if(location.hash.startsWith('#t=')){T=location.hash.slice(3);sessionStorage.setItem('t',T);history.replaceState(0,'',location.pathname)}
const err=location.hash.startsWith('#e=')?location.hash.slice(3):'';if(err)history.replaceState(0,'',location.pathname);
async function api(action,p={}){const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+T},body:JSON.stringify({action,...p})});
if(r.status===401){sessionStorage.removeItem('t');T=null;location.reload();throw new Error('Session expirée')}const d=await r.json();if(!r.ok)throw new Error(d.erreur||'Erreur');return d}
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2800)};
const can=()=>me.role!=='lecture';
const N=[['home','fa-house','Accueil'],['textes','fa-pen-to-square','Textes du site'],['captures','fa-mobile-screen','Captures d’écran'],['liste','fa-envelope','Liste d’attente']];
const SOON=[['fa-bullhorn','Annonces'],['fa-star','Avis et questions'],['fa-triangle-exclamation','Signalements'],['fa-users','Utilisateurs'],['fa-people-roof','Familles'],['fa-chart-line','Statistiques'],['fa-screwdriver-wrench','Maintenance'],['fa-user-shield','Équipe']];
const lab=k=>{let m;if(m=k.match(/^d(\d)\.(t|p)$/))return`Démo · écran ${m[1]} · ${m[2]=='t'?'titre':'texte'}`;if(m=k.match(/^f(\d)\.(t|p)$/))return`Bloc ${m[1]} · ${m[2]=='t'?'titre':'texte'}`;
if(m=k.match(/^([qr])(\d)$/))return(m[1]=='q'?'Question ':'Réponse ')+m[2];return{'hero.t':'Titre d’accueil','hero.p':'Sous-titre','hero.note':'Note sous le formulaire','cta':'Bouton liste d’attente','a.t':'Titre','a.p':'Texte','c.p':'Texte','c.mail':'Adresse email','m.t':'Titre','m.p':'Texte'}[k]||k};
const grp=k=>/^(hero|cta)/.test(k)?'Accueil':/^d\d/.test(k)?'Démo de l’app':/^f\d/.test(k)?'Fonctionnalités':/^a\./.test(k)?'À propos':/^[qr]\d/.test(k)?'Aide (FAQ)':/^c\./.test(k)?'Contact':/^m\./.test(k)?'Mentions légales':null;
const v=k=>C[k]??D[k]??'';
const row=(i,col,h,g,l)=>`<div class="row"><span class="ic" style="background:${col}"><i class="fa-solid ${i}"></i></span><p>${h}</p><button class="b" data-go="${g}">${l}</button></div>`;
const V={
home(){const hr=new Date().getHours();return`<h1>${hr<18?'Bonjour':'Bonsoir'}, ${esc(me.nom)}</h1><p class="clk"><i class="fa-solid fa-clock"></i>Il est actuellement <b id="clk"></b></p>
${row('fa-envelope','var(--ac)',`<b>${S.inscrits??'…'}</b> inscrit(s) en liste d’attente`,'liste','Voir la liste')}
${row('fa-users','var(--b)',`<b>${S.comptes??'…'}</b> compte(s) dans l’app, <b>${S.avis??'…'}</b> avis reçu(s)`,'home','Actualiser')}
${row('fa-triangle-exclamation','var(--y)',`<b>${S.signalements??'…'}</b> signalement(s) actif(s), <b>${S.annonces??'…'}</b> annonce(s) de ligne`,'home','Actualiser')}
<div class="tiles">${N.slice(1).map(n=>`<button data-go="${n[0]}"><i class="fa-solid ${n[1]}"></i>${n[2].split(' ')[0]}</button>`).join('')}<a href="/" target="_blank"><i class="fa-solid fa-globe"></i>Site</a></div>`},
textes(){const g={};Object.keys(D).forEach(k=>{const n=grp(k);if(n)(g[n]=g[n]||[]).push(k)});
return`<h1>Textes du site</h1><p class="sub">Un champ non modifié garde le texte par défaut.</p>`+Object.entries(g).map(([n,ks])=>`<section class="card"><h3>${n}</h3>${ks.map(k=>`<label>${lab(k)}<textarea data-k="${k}" rows="${v(k).length>70?3:1}" ${can()?'':'disabled'}>${esc(v(k))}</textarea></label>`).join('')}</section>`).join('')+(can()?`<button class="b go" id="sv">Enregistrer les textes</button>`:'')},
captures(){return`<h1>Captures d’écran</h1><p class="sub">Elles défilent dans le téléphone de l’accueil, dans cet ordre. PNG, JPEG ou WebP, 4 Mo maximum.</p><div class="shots">${[1,2,3].map(i=>{const u=C['shot'+i];return`<section class="card"><h3>Capture ${i}</h3><div class="pv">${u?`<img src="${esc(u)}" alt="">`:'<span>Aucune image</span>'}</div>${can()?`<label class="b" style="cursor:pointer">${u?'Remplacer':'Choisir une image'}<input type="file" accept="image/png,image/jpeg,image/webp" data-up="${i}" hidden></label>${u?`<button class="b" data-rm="${i}">Retirer</button>`:''}`:''}</section>`}).join('')}</div>`},
liste(){return`<h1>Liste d’attente</h1><p class="sub">${W.length} inscrit(s)</p><section class="card"><button class="b go" id="csv"><i class="fa-solid fa-download"></i> Exporter en CSV</button><table style="margin-top:14px"><tr><th>Email</th><th>Inscription</th></tr>${W.map(w=>`<tr><td>${esc(w.email)}</td><td>${new Date(w.created_at).toLocaleString('fr-FR')}</td></tr>`).join('')||'<tr><td colspan=2>Personne pour l’instant.</td></tr>'}</table></section>`}};
const b64=f=>new Promise(r=>{const x=new FileReader();x.onload=()=>r(x.result.split(',')[1]);x.readAsDataURL(f)});
async function ecrire(rows){try{await api('contenu_ecrire',{rows});rows.forEach(r=>C[r.key]=r.value);toast('Enregistré.');return true}catch(e){toast('Échec : '+e.message);return false}}
function bind(){
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{$('aside').classList.remove('open');go(b.dataset.go)});
if($('#clk')){const t=()=>$('#clk').textContent=new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});t();clearInterval(tm);tm=setInterval(t,15000)}
if($('#sv'))$('#sv').onclick=()=>ecrire([...document.querySelectorAll('[data-k]')].map(f=>({key:f.dataset.k,value:f.value})));
document.querySelectorAll('[data-up]').forEach(f=>f.onchange=async()=>{try{const x=f.files[0],{url}=await api('capture_envoyer',{type:x.type,donnees:await b64(x)});if(await ecrire([{key:'shot'+f.dataset.up,value:url}]))go('captures')}catch(e){toast('Envoi impossible : '+e.message)}});
document.querySelectorAll('[data-rm]').forEach(b=>b.onclick=async()=>{if(await ecrire([{key:'shot'+b.dataset.rm,value:''}]))go('captures')});
if($('#csv'))$('#csv').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['email,date\n'+W.map(w=>w.email+','+w.created_at).join('\n')],{type:'text/csv'}));a.download='liste-attente.csv';a.click()}}
async function charger(){const[c,w,s]=await Promise.all([api('contenu_lire'),api('waitlist_lire'),api('stats')]);C={};c.forEach(x=>C[x.key]=x.value);W=w;S=s}
async function go(p){if(!V[p])p='home';if(p==='home')try{await charger()}catch(e){toast(e.message)}location.hash=p;
$('#nv').innerHTML=N.map(n=>`<button data-go="${n[0]}" class="${n[0]===p?'on':''}"><i class="fa-solid ${n[1]}"></i><span class="l">${n[2]}</span></button>`).join('')+'<hr>'+SOON.map(n=>`<button class="soon" title="Bientôt"><i class="fa-solid ${n[0]}"></i><span class="l">${n[1]}</span></button>`).join('');
$('#mn').innerHTML=V[p]();bind()}
$('#dc').href=API+'?a=login';$('#bg').onclick=()=>$('aside').classList.toggle('open');
$('#lo').onclick=async()=>{try{await api('deconnexion')}catch{}sessionStorage.removeItem('t');location.reload()};
(async()=>{if(err)$('#lm').textContent=ER[err]||'Connexion impossible.';
if(!T)return;try{me=await api('moi');$('#login').hidden=true;$('#app').hidden=false;$('#who').textContent=me.nom;$('#rl').textContent=me.role;await charger();go(location.hash.slice(1)||'home')}catch(e){$('#lm').textContent=e.message}})();
