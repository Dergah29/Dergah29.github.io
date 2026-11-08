/* Pirate Strike — SELECT HERO screen (owner reference style): riveted wooden board,
 * ornate title plaque, large hero cards, the chosen hero enlarged and glowing, a detail
 * strip with role and stats, and CONFIRM. Mobile landscape first; touch + keyboard. */
(()=>{'use strict';
if(window.PirateHeroSelect)return;
const BASE='adventure/levels/assets/heroes/';
const T={
 en:{title:'SELECT HERO',confirm:'CONFIRM',back:'BACK',melee:'Sword',ranged:'Ranged',speed:'Speed',pistol:'Pistol shot',sword:'Sword throw',chosen:'Chosen',newHero:'NEW'},
 az:{title:'QƏHRƏMAN SEÇ',confirm:'TƏSDİQLƏ',back:'GERİ',melee:'Qılınc',ranged:'Uzaqdan',speed:'Sürət',pistol:'Tapança atəşi',sword:'Qılınc atma',chosen:'Seçildi',newHero:'YENİ'},
 tr:{title:'KAHRAMAN SEÇ',confirm:'ONAYLA',back:'GERİ',melee:'Kılıç',ranged:'Menzilli',speed:'Hız',pistol:'Tabanca atışı',sword:'Kılıç fırlatma',chosen:'Seçildi',newHero:'YENİ'},
 ru:{title:'ВЫБОР ГЕРОЯ',confirm:'ВЫБРАТЬ',back:'НАЗАД',melee:'Сабля',ranged:'Дальний бой',speed:'Скорость',pistol:'Выстрел',sword:'Бросок сабли',chosen:'Выбран',newHero:'НОВЫЙ'},
 pl:{title:'WYBIERZ BOHATERA',confirm:'POTWIERDŹ',back:'WRÓĆ',melee:'Szabla',ranged:'Dystans',speed:'Szybkość',pistol:'Strzał',sword:'Rzut szablą',chosen:'Wybrany',newHero:'NOWY'}};
const CSS=`
#pirate-hero-select{position:fixed;inset:0;z-index:23000;display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:manipulation;overflow:hidden}
#pirate-hero-select .hs-bg{position:absolute;inset:-20px;background:#0b2a40 center/cover no-repeat;filter:blur(6px) saturate(1.1) brightness(.75);transform:scale(1.04)}
#pirate-hero-select .hs-board{position:relative;width:min(1180px,96vw);height:min(560px,calc(100dvh - 40px));margin-top:clamp(18px,5vh,40px);box-sizing:border-box;padding:clamp(42px,11vh,76px) clamp(14px,2.4vw,30px) clamp(10px,2.4vh,20px);border:clamp(12px,2.2vh,18px) solid transparent;border-image:url(${BASE}select-board.png) 18 fill / clamp(12px,2.2vh,18px) stretch;display:flex;flex-direction:column;gap:clamp(6px,1.6vh,12px);filter:drop-shadow(0 18px 30px #000c)}
#pirate-hero-select .hs-plaque{position:absolute;z-index:5;left:50%;top:clamp(-58px,-10vh,-34px);transform:translateX(-50%);width:clamp(260px,40vw,470px);aspect-ratio:266/84;background:url(${BASE}select-plaque.png) center/100% 100% no-repeat;display:flex;align-items:flex-end;justify-content:center;padding-bottom:clamp(7px,1.9vh,13px);box-sizing:border-box;pointer-events:none}
#pirate-hero-select .hs-plaque h2{margin:0;font:900 clamp(18px,4.8vh,34px)/1 Georgia,serif;letter-spacing:1.5px;color:#f7e2b2;text-shadow:0 2px 0 #3a1f0a,0 0 8px #000a}
#pirate-hero-select .hs-cards{flex:1;min-height:0;display:flex;gap:clamp(6px,1.1vw,14px);align-items:stretch;justify-content:center}
#pirate-hero-select .hs-card{position:relative;flex:1 1 0;max-width:210px;border-radius:10px;border:3px solid #5b4128;background:linear-gradient(170deg,var(--t1),var(--t2));box-shadow:inset 0 0 26px #000c,0 6px 12px #0009;overflow:hidden;cursor:pointer;padding:0;transition:transform .18s,flex-grow .18s,border-color .18s}
#pirate-hero-select .hs-card::after{content:'';position:absolute;inset:0;background:linear-gradient(transparent 62%,#000c);pointer-events:none}
#pirate-hero-select .hs-card img{position:absolute;left:50%;bottom:clamp(26px,7vh,40px);transform:translateX(-50%);height:88%;max-width:none;image-rendering:auto}
#pirate-hero-select .hs-card img:not(.px){width:94%;max-width:94%;object-fit:contain;object-position:center bottom}
#pirate-hero-select .hs-card img.px{image-rendering:pixelated;height:auto;width:min(150%,260px);bottom:clamp(22px,6vh,40px);filter:drop-shadow(0 6px 4px #0009)}
#pirate-hero-select .hs-card .ped{position:absolute;left:12%;right:12%;bottom:clamp(26px,7vh,42px);height:12px;border-radius:50%;background:radial-gradient(#000a,#0000 70%)}
#pirate-hero-select .hs-card span.nm{position:absolute;left:0;right:0;bottom:clamp(5px,1.4vh,10px);z-index:2;text-align:center;font:700 clamp(15px,3.6vh,24px) Georgia,serif;color:#f7e9c9;text-shadow:0 2px 3px #000}
#pirate-hero-select .hs-card .new{position:absolute;left:8px;top:8px;z-index:2;padding:2px 8px;border-radius:6px;font:800 12px Arial;background:#e0452f;color:#fff;box-shadow:0 2px 4px #0008}
#pirate-hero-select .hs-card.sel{flex-grow:1.55;max-width:300px;border-color:#ffd77a;box-shadow:0 0 0 2px #fff3c9,0 0 22px 6px #ffbf4ccc,inset 0 0 30px #ffcf7a55}
#pirate-hero-select .hs-card.sel img{height:96%}
#pirate-hero-select .hs-card img:not(.px),#pirate-hero-select .hs-card.sel img:not(.px){height:calc(100% - clamp(26px,7vh,40px) - 8px)}
#pirate-hero-select .hs-card.sel img.px{width:min(165%,300px)}
#pirate-hero-select .hs-card:focus-visible{outline:3px solid #fff}
#pirate-hero-select .hs-info{display:flex;align-items:center;gap:clamp(8px,2vw,22px);padding:clamp(6px,1.5vh,10px) clamp(10px,1.6vw,18px);border-radius:10px;background:#0c141bcc;border:1px solid #ffffff1c}
#pirate-hero-select .hs-info .tx{flex:1;min-width:0}
#pirate-hero-select .hs-info b{display:block;font:800 clamp(16px,3.8vh,24px) Georgia;color:#ffd98a}
#pirate-hero-select .hs-info p{margin:2px 0 0;font:600 clamp(11px,2.6vh,15px)/1.3 Arial,sans-serif;color:#dfe9ee;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
#pirate-hero-select .hs-stats{display:grid;grid-template-columns:auto auto;gap:2px 8px;font:700 clamp(10px,2.4vh,13px) Arial;color:#cfd8de;white-space:nowrap}
#pirate-hero-select .hs-stats i{display:flex;gap:3px;align-items:center}#pirate-hero-select .hs-stats i s{display:block;width:clamp(9px,1.8vh,13px);height:clamp(6px,1.3vh,9px);border-radius:2px;background:#3b4650}#pirate-hero-select .hs-stats i s.on{background:linear-gradient(#ffe27a,#d99520)}
#pirate-hero-select .hs-btn{min-height:46px;padding:4px 22px;border-radius:10px;border:3px solid #2d1a0b;background:linear-gradient(#8a5a2e,#5a3618 55%,#3e240e);color:#ffe7b0;font:900 clamp(15px,3.4vh,22px) Georgia;text-shadow:0 2px 0 #1d0f05;box-shadow:0 5px 10px #000b,inset 0 2px 0 #ffffff30;cursor:pointer;white-space:nowrap}
#pirate-hero-select .hs-btn.primary{background:linear-gradient(#ffd56a,#e09a26 55%,#a8631a);color:#3a1d05;text-shadow:0 1px 0 #ffe7a8;border-color:#5a3205}
#pirate-hero-select .hs-btn:active{transform:translateY(2px)}
@media (max-height:430px){#pirate-hero-select .hs-stats{display:none}}
@media (prefers-reduced-motion:reduce){#pirate-hero-select .hs-card{transition:none}}
`;
let current=null;
async function pixelArt(id){
 const illustrated=await window.PirateHeroes.illustratedCard?.(id);if(illustrated)return{url:illustrated,illustrated:true};
 // existing fighters: crop the idle frame to the figure and upscale crisply
 const im=await window.PirateHeroes.frameImage(id,'Idle',0);const c=document.createElement('canvas');c.width=56;c.height=34;const x=c.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(im,24,0,56,34,0,0,56,34);return{url:c.toDataURL(),illustrated:false};
}
window.PirateHeroSelect={
 async open({lang='en',onDone}={}){
  current?.close?.();const H=window.PirateHeroes,L=window.PirateLevels;if(!H||!L)return null;
  const w=T[lang]||T.en;if(!document.getElementById('pirate-hero-select-style')){const s=document.createElement('style');s.id='pirate-hero-select-style';s.textContent=CSS;document.head.append(s)}
  const root=document.createElement('section');root.id='pirate-hero-select';root.setAttribute('role','dialog');root.setAttribute('aria-label',w.title);
  root.innerHTML='<div class="hs-bg"></div><div class="hs-board"><div class="hs-plaque"><h2></h2></div><div class="hs-cards" role="listbox"></div><div class="hs-info"><div class="tx"><b></b><p></p></div><div class="hs-stats"></div><button class="hs-btn back"></button><button class="hs-btn primary ok"></button></div></div>';
  root.querySelector('.hs-bg').style.backgroundImage='url(adventure/levels/assets/map/island-chapter1.webp)';
  root.querySelector('h2').textContent=w.title;root.querySelector('.back').textContent='◀ '+w.back;root.querySelector('.ok').textContent='✔ '+w.confirm;
  document.body.append(root);
  let sel=L.hero();const cards=root.querySelector('.hs-cards');
  const render=()=>{for(const c of cards.children){const on=c.dataset.hero===sel;c.classList.toggle('sel',on);c.setAttribute('aria-selected',String(on))}
   const h=H.get(sel);root.querySelector('.hs-info b').textContent=h.name+' · '+(h.ranged==='pistol'?w.pistol:w.sword);root.querySelector('.hs-info p').textContent=H.describe(sel,lang);
   const st=root.querySelector('.hs-stats');st.textContent='';for(const [k,v] of [[w.melee,h.stats.attack],[w.ranged,h.stats.ranged],[w.speed,h.stats.speed]]){const a=document.createElement('span');a.textContent=k;const b=document.createElement('i');for(let i=0;i<5;i++){const s=document.createElement('s');if(i<v)s.className='on';b.append(s)}st.append(a,b)}};
  for(const h of H.roster){
   const c=document.createElement('button');c.type='button';c.className='hs-card';c.dataset.hero=h.id;c.setAttribute('role','option');c.style.setProperty('--t1',h.tint[0]);c.style.setProperty('--t2',h.tint[1]);
   const img=document.createElement('img');img.alt=h.name;img.draggable=false;
   if(h.art==='painted')img.src=H.cardArt(h.id);else{img.className='px';pixelArt(h.id).then(a=>{if(!img.isConnected)return;img.src=a.url;img.classList.toggle('px',!a.illustrated);img.dataset.illustrated=String(a.illustrated)}).catch(()=>{})}
   if(h.art!=='painted'){const ped=document.createElement('span');ped.className='ped';c.append(ped)}
   const nm=document.createElement('span');nm.className='nm';nm.textContent=h.name;c.append(img,nm);
   if(h.id==='scarlet'){const n=document.createElement('span');n.className='new';n.textContent=w.newHero;c.append(n)}
   c.onclick=()=>{sel=h.id;render()};cards.append(c);
  }
  render();
  const close=()=>{root.remove();window.__pfBack=prevBack;removeEventListener('keydown',key,true);if(current===api)current=null};
  const key=e=>{const ids=H.roster.map(h=>h.id);const i=ids.indexOf(sel);if(e.key==='ArrowRight'){sel=ids[(i+1)%ids.length];render();e.preventDefault()}else if(e.key==='ArrowLeft'){sel=ids[(i+ids.length-1)%ids.length];render();e.preventDefault()}else if(e.key==='Enter'){confirm();e.preventDefault()}else if(e.key==='Escape'){close();onDone?.(null);e.preventDefault()}};
  const confirm=()=>{L.setHero(sel);close();onDone?.(sel)};
  root.querySelector('.ok').onclick=confirm;root.querySelector('.back').onclick=()=>{close();onDone?.(null)};
  addEventListener('keydown',key,true);const prevBack=window.__pfBack;window.__pfBack=()=>{close();onDone?.(null);return true};
  const api={root,close,select:id=>{sel=id;render()},confirm};current=api;return api;
 },
 close(){current?.close()},
 get current(){return current}
};
})();

