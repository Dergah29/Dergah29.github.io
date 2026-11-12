/* Pirate Strike — the Treasury (Xəzinə) on the harbour.
 * A real room, not a shop shortcut. Everything shown comes from saved progress:
 *  - trophy shelf: the six level bosses, lit once beaten (portrait = the boss's own idle frame), with the boss bonus paid;
 *  - wealth: gold now, gold earned in total, chests opened, Endless Sea record, three-star voyages;
 *  - treasure chests: opens the Market's chest counter (the only place chests are sold).
 * Nothing here pays or charges anything by itself. */
(()=>{'use strict';if(window.PirateTreasury)return;
const ANIM='adventure/levels/assets/enemies/animated/';
const BOSSES=[{n:3,id:'boss3d-guardian'},{n:5,id:'boss3d-shaman'},{n:6,id:'boss3d-storm-captain'},{n:7,id:'boss3d-lightkeeper'},{n:8,id:'boss3d-rime'},{n:10,id:'boss3d-admiral'}];
const BOSS_GOLD={3:150,5:300,6:400,7:300,8:350,10:250};
const T={
en:{title:'Treasury',sub:'Trophies and riches of your voyages',back:'Back',trophies:'Trophy shelf',wealth:'Riches',gold:'Gold now',earned:'Gold earned',chests:'Chests opened',endless:'Endless Sea record',stars:'Three-star voyages',none:'—',stage:'stage',locked:'Not beaten yet',bonus:'Boss bonus',open:'Open chests',chestNote:'Chests are opened at the Market counter with gold you earned.',beaten:'{n} of 6 bosses beaten',
 names:{3:'Ancient Guardian',5:'Totem Shaman',6:'Storm Captain',7:'Lightkeeper',8:'Captain Rime',10:'Black Admiral'}},
az:{title:'Xəzinə',sub:'Səfərlərinin kubokları və sərvəti',back:'Geri',trophies:'Kubok rəfi',wealth:'Sərvət',gold:'İndiki qızıl',earned:'Qazanılan qızıl',chests:'Açılan sandıqlar',endless:'Sonsuz Dəniz rekordu',stars:'Üç ulduzlu səfərlər',none:'—',stage:'mərhələ',locked:'Hələ məğlub edilməyib',bonus:'Boss mükafatı',open:'Sandıqları aç',chestNote:'Sandıqlar Bazar piştaxtasında qazandığın qızılla açılır.',beaten:'6 bossdan {n}-i məğlub edilib',
 names:{3:'Qədim Keşikçi',5:'Totem Şamanı',6:'Fırtına Kapitanı',7:'Mayakçı',8:'Kapitan Rime',10:'Qara Admiral'}},
tr:{title:'Hazine',sub:'Seferlerinin kupaları ve serveti',back:'Geri',trophies:'Kupa rafı',wealth:'Servet',gold:'Şu anki altın',earned:'Kazanılan altın',chests:'Açılan sandıklar',endless:'Sonsuz Deniz rekoru',stars:'Üç yıldızlı seferler',none:'—',stage:'aşama',locked:'Henüz yenilmedi',bonus:'Boss ödülü',open:'Sandıkları aç',chestNote:'Sandıklar Pazar tezgâhında kazandığın altınla açılır.',beaten:'6 bosstan {n} tanesi yenildi',
 names:{3:'Kadim Muhafız',5:'Totem Şamanı',6:'Fırtına Kaptanı',7:'Fenerci',8:'Kaptan Rime',10:'Kara Amiral'}},
ru:{title:'Сокровищница',sub:'Трофеи и богатства ваших походов',back:'Назад',trophies:'Полка трофеев',wealth:'Богатство',gold:'Золото сейчас',earned:'Заработано золота',chests:'Открыто сундуков',endless:'Рекорд Бескрайнего моря',stars:'Походы на три звезды',none:'—',stage:'этап',locked:'Ещё не побеждён',bonus:'Награда за босса',open:'Открыть сундуки',chestNote:'Сундуки открываются у прилавка на Рынке за заработанное золото.',beaten:'Побеждено боссов: {n} из 6',
 names:{3:'Древний страж',5:'Шаман тотема',6:'Штормовой капитан',7:'Смотритель маяка',8:'Капитан Райм',10:'Чёрный адмирал'}},
pl:{title:'Skarbiec',sub:'Trofea i bogactwa twoich rejsów',back:'Wróć',trophies:'Półka trofeów',wealth:'Bogactwo',gold:'Złoto teraz',earned:'Zdobyte złoto',chests:'Otwarte skrzynie',endless:'Rekord Bezkresnego Morza',stars:'Rejsy na trzy gwiazdki',none:'—',stage:'etap',locked:'Jeszcze nie pokonany',bonus:'Nagroda za bossa',open:'Otwórz skrzynie',chestNote:'Skrzynie otwiera się przy ladzie na Targu za zdobyte złoto.',beaten:'Pokonani bossowie: {n} z 6',
 names:{3:'Pradawny Strażnik',5:'Szaman Totemu',6:'Kapitan Burzy',7:'Latarnik',8:'Kapitan Rime',10:'Czarny Admirał'}}};
const CSS=`#pirate-treasury{position:fixed;inset:0;z-index:2147482000;display:flex;flex-direction:column;color:#fff3dc;font:14px/1.3 system-ui,sans-serif;
 background:linear-gradient(rgba(18,9,4,.62),rgba(18,9,4,.78)),url(harbor/assets/treasury-vault.webp) center/cover no-repeat,radial-gradient(ellipse at 50% 20%,#5a3818 0,#2a170a 55%,#120904 100%);padding:max(10px,env(safe-area-inset-top)) max(14px,env(safe-area-inset-right)) max(10px,env(safe-area-inset-bottom)) max(14px,env(safe-area-inset-left));box-sizing:border-box;overflow:auto}
#pirate-treasury *{box-sizing:border-box}
#pirate-treasury .tr-top{display:flex;align-items:center;gap:12px;margin-bottom:10px}
#pirate-treasury .tr-back{min-height:44px;padding:0 16px;border-radius:12px;border:2px solid #d9a548;background:linear-gradient(#4a2c16,#24140a);color:#ffe7b0;font:800 16px Georgia,serif;cursor:pointer}
#pirate-treasury h1{margin:0;font:900 clamp(22px,4.2vh,34px) Georgia,serif;color:#ffd77a;text-shadow:0 2px 0 #1d0f05;letter-spacing:.04em}
#pirate-treasury .tr-sub{color:#e3c78f;font-size:13px}
#pirate-treasury .tr-gold{margin-left:auto;display:flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;border:2px solid #d9a548;background:#1d0f05cc;font:800 18px Georgia,serif;color:#ffe08a}
#pirate-treasury .tr-body{flex:1;display:grid;grid-template-columns:1.6fr 1fr;gap:12px;min-height:0}
#pirate-treasury section{border-radius:16px;border:2px solid #d9a548;background:linear-gradient(#4a2c16e6,#24140ae6);box-shadow:inset 0 1px 0 #ffffff22,0 6px 16px #0009;padding:10px 12px;min-height:0}
#pirate-treasury h2{margin:0 0 8px;font:800 16px Georgia,serif;color:#ffd98a;display:flex;justify-content:space-between;gap:8px}
#pirate-treasury h2 small{font:600 12px system-ui;color:#e3c78f}
#pirate-treasury .tr-shelf{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
#pirate-treasury .tr-cup{position:relative;border-radius:12px;padding:6px 6px 8px;text-align:center;background:linear-gradient(#2a170a,#120904);border:1px solid #8a6a3a;overflow:hidden}
#pirate-treasury .tr-cup.won{border-color:#ffd77a;box-shadow:0 0 16px #ffcf6a55 inset}
#pirate-treasury .tr-cup canvas{width:100%;height:clamp(54px,15vh,96px);display:block;object-fit:contain}
#pirate-treasury .tr-cup:not(.won) canvas{filter:brightness(0) opacity(.55)}
#pirate-treasury .tr-cup b{display:block;font:800 13px Georgia,serif;color:#ffe7b0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pirate-treasury .tr-cup span{display:block;font-size:11px;color:#e3c78f}
#pirate-treasury .tr-cup.won span{color:#b6f0a0}
#pirate-treasury .tr-cup i{position:absolute;top:4px;right:6px;font-style:normal;font-size:16px}
#pirate-treasury dl{margin:0;display:grid;grid-template-columns:1fr auto;gap:6px 10px}
#pirate-treasury dt{color:#e3c78f}
#pirate-treasury dd{margin:0;font:800 15px Georgia,serif;color:#ffe7b0;text-align:right}
#pirate-treasury .tr-chest{margin-top:12px;display:flex;flex-direction:column;gap:6px}
#pirate-treasury .tr-chest button{min-height:48px;border-radius:12px;border:2px solid #2d1a0b;background:linear-gradient(#ffe6a6,#d9a948);color:#2a1a08;font:900 17px Georgia,serif;cursor:pointer;box-shadow:0 4px 0 #6a3f12}
#pirate-treasury .tr-chest p{margin:0;font-size:12px;color:#e3c78f}
@media (max-width:640px){#pirate-treasury .tr-body{grid-template-columns:1fr}}
@media (max-height:420px){#pirate-treasury .tr-sub{display:none}#pirate-treasury h2{margin-bottom:5px}}`;
let current=null;
const tx=(lang)=>T[lang]||T.en;
function readStats(){const E=window.PirateEconomy,L=window.PirateLevels;let gold=0,earned=0,chests=0;try{gold=E?.balance?.()??0;const s=E?.stats?.()||{};earned=s.earned||0;chests=s.chests||0}catch{}
 let stars=0;try{for(let n=1;n<=10;n++)if(L?.stars?.(n)===3)stars++}catch{}
 let best=null;try{best=window.PirateEndless?.best?.()||JSON.parse(localStorage.getItem('pf-endless-best')||'null')}catch{}
 const beaten=BOSSES.filter(b=>{try{return !!L?.isCompleted?.(b.n)}catch{return false}}).map(b=>b.n);
 return{gold,earned,chests,stars,best,beaten}}
/* the boss portrait: the first idle frame of its animation atlas */
const imgCache=new Map();
function loadImg(src){if(!imgCache.has(src))imgCache.set(src,new Promise(ok=>{const i=new Image();i.onload=()=>ok(i);i.onerror=()=>ok(null);i.src=src}));return imgCache.get(src)}
async function drawBoss(cv,id){try{const m=await fetch(ANIM+id+'/manifest.json').then(r=>r.json());const clip=m.clips.idle||Object.values(m.clips)[0];const f=clip.frames[0];const img=await loadImg(ANIM+id+'/'+m.pages[f.page]);if(!img)return;
 const [sx,sy,sw,sh]=f.rect,k=Math.min(cv.width/sw,cv.height/sh)*.95,c=cv.getContext('2d');c.imageSmoothingQuality='high';c.drawImage(img,sx,sy,sw,sh,(cv.width-sw*k)/2,cv.height-sh*k,sw*k,sh*k)}catch{}}
function open({lang='en',onClose,onChests}={}){
 current?.close();
 if(!document.getElementById('pirate-treasury-style')){const s=document.createElement('style');s.id='pirate-treasury-style';s.textContent=CSS;document.head.append(s)}
 const w=tx(lang),st=readStats(),root=document.createElement('div');root.id='pirate-treasury';root.setAttribute('role','dialog');root.setAttribute('aria-label',w.title);
 const best=st.best?.stage?w.stage+' '+st.best.stage+' · '+(st.best.score||0):w.none;
 root.innerHTML=`<div class="tr-top"><button class="tr-back" type="button">◀ ${w.back}</button><div><h1>◆ ${w.title}</h1><div class="tr-sub">${w.sub}</div></div><div class="tr-gold" aria-label="${w.gold}">🪙 <span>${st.gold.toLocaleString()}</span></div></div>
 <div class="tr-body"><section aria-label="${w.trophies}"><h2>${w.trophies}<small>${w.beaten.replace('{n}',st.beaten.length)}</small></h2><div class="tr-shelf">${BOSSES.map(b=>{const won=st.beaten.includes(b.n);return`<div class="tr-cup${won?' won':''}" data-boss="${b.n}"><i>${won?'🏆':'🔒'}</i><canvas width="180" height="120"></canvas><b>${w.names[b.n]}</b><span>${won?w.bonus+' +'+BOSS_GOLD[b.n]:w.locked}</span></div>`}).join('')}</div></section>
 <section aria-label="${w.wealth}"><h2>${w.wealth}</h2><dl><dt>${w.gold}</dt><dd>${st.gold.toLocaleString()}</dd><dt>${w.earned}</dt><dd>${st.earned.toLocaleString()}</dd><dt>${w.chests}</dt><dd>${st.chests}</dd><dt>${w.endless}</dt><dd>${best}</dd><dt>${w.stars}</dt><dd>${st.stars} / 10</dd></dl>
 <div class="tr-chest"><button type="button" class="tr-open">🗝 ${w.open}</button><p>${w.chestNote}</p></div></section></div>`;
 document.body.append(root);
 root.querySelectorAll('.tr-cup').forEach(cup=>drawBoss(cup.querySelector('canvas'),BOSSES.find(b=>b.n===+cup.dataset.boss).id));
 const prevBack=window.__pfBack;let closed=false;
 const close=(then)=>{if(closed)return;closed=true;if(window.__pfBack===back)window.__pfBack=prevBack;root.remove();if(current===api)current=null;(then||onClose)?.()};
 const back=()=>{close();return true};window.__pfBack=back;
 root.querySelector('.tr-back').onclick=()=>close();
 root.querySelector('.tr-open').onclick=()=>close(onChests||onClose);
 const api={root,close:()=>close(),stats:st};current=api;root.querySelector('.tr-back').focus?.();return api}
window.PirateTreasury={open,stats:readStats,get current(){return current}};
})();
