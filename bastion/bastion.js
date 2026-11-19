/* Pirate Strike — "Bastion": the playable seaside castle defence that opens Level 1.
 * Rules: bastion/core.js (PirateBastionCore). 3D stage: harbor/harbor3d/harbor3d.js (PirateBastion3D).
 * This file owns the overlay, HUD, input, fixed-step loop, music and persistence. It is opened from its own
 * node on the island map, before Stage 1 (adventure/levels/worldmap.js); Level 1 is unchanged.
 * Without WebGL2 or if the 3D bundle cannot load, the map simply comes back. */
(function(){'use strict';
const KEY='pf-bastion',BUNDLE='harbor/harbor3d/harbor3d.js';
const T={
 az:{title:'Sahil qalası',intro:'Basqınçılar sahilə çıxır! Qala qapısını qoru.',hint:'Toxun və ya ◀ ▶ — divar boyunca get. Atəş özü açılır. Qızılla tikinti yerində dayan.',wave:'DALĞA',final:'SON DALĞA',boss:'BOSS GƏLİR!',bossName:'Troll Sərkərdə',built:'TİKİLDİ!',combo:'KOMBO!',clear:'Dalğa təmizləndi!',
  ballista:'BALLİSTA',cauldron:'OD QAZANI',cannon:'TOP',archer:'OXÇU QÜLLƏSİ',win:'QALA QORUNDU!',lose:'Qapı düşdü!',skip:'Keç',again:'Yenidən',go:'Xəritəyə',gate:'Qapı',kills:'Məğlub edildi',bossDown:'TROLL YIXILDI!'},
 en:{title:'Seaside Bastion',intro:'Raiders are landing! Keep the castle gate standing.',hint:'Tap or ◀ ▶ to walk the wall. You fire on your own. Stand on a build spot with enough coins.',wave:'WAVE',final:'FINAL WAVE',boss:'BOSS INCOMING!',bossName:'Troll Warlord',built:'BUILT!',combo:'COMBO!',clear:'Wave cleared!',
  ballista:'BALLISTA',cauldron:'FIRE CAULDRON',cannon:'CANNON',archer:'ARCHER TOWER',win:'BASTION HELD!',lose:'The gate fell!',skip:'Skip',again:'Try again',go:'To the map',gate:'Gate',kills:'Defeated',bossDown:'TROLL DOWN!'},
 tr:{title:'Sahil Kalesi',intro:'Akıncılar karaya çıkıyor! Kale kapısını koru.',hint:'Dokun ya da ◀ ▶ ile surda yürü. Ateş kendiliğinden. Yeterli altınla inşa noktasında dur.',wave:'DALGA',final:'SON DALGA',boss:'BOSS GELİYOR!',bossName:'Trol Savaş Beyi',built:'KURULDU!',combo:'KOMBO!',clear:'Dalga temizlendi!',
  ballista:'BALİSTA',cauldron:'ATEŞ KAZANI',cannon:'TOP',archer:'OKÇU KULESİ',win:'KALE SAVUNULDU!',lose:'Kapı düştü!',skip:'Geç',again:'Tekrar',go:'Haritaya',gate:'Kapı',kills:'Yenilen',bossDown:'TROL DÜŞTÜ!'},
 ru:{title:'Прибрежный бастион',intro:'Налётчики высаживаются! Удержи ворота крепости.',hint:'Касание или ◀ ▶ — ходи по стене. Стрельба сама. Встань на место постройки, если хватает монет.',wave:'ВОЛНА',final:'ПОСЛЕДНЯЯ ВОЛНА',boss:'ИДЁТ БОСС!',bossName:'Тролль-военачальник',built:'ПОСТРОЕНО!',combo:'КОМБО!',clear:'Волна отбита!',
  ballista:'БАЛЛИСТА',cauldron:'ОГНЕННЫЙ КОТЁЛ',cannon:'ПУШКА',archer:'БАШНЯ ЛУЧНИКОВ',win:'БАСТИОН УСТОЯЛ!',lose:'Ворота пали!',skip:'Пропустить',again:'Ещё раз',go:'На карту',gate:'Ворота',kills:'Побеждено',bossDown:'ТРОЛЛЬ ПОВЕРЖЕН!'},
 pl:{title:'Nadmorski bastion',intro:'Najeźdźcy lądują! Utrzymaj bramę zamku.',hint:'Dotknij lub ◀ ▶, by chodzić po murze. Strzelasz sam. Stań na miejscu budowy, gdy masz monety.',wave:'FALA',final:'OSTATNIA FALA',boss:'NADCHODZI BOSS!',bossName:'Troll Wódz',built:'ZBUDOWANO!',combo:'KOMBO!',clear:'Fala odparta!',
  ballista:'BALISTA',cauldron:'KOCIOŁ OGNIA',cannon:'ARMATA',archer:'WIEŻA ŁUCZNIKÓW',win:'BASTION OBRONIONY!',lose:'Brama padła!',skip:'Pomiń',again:'Jeszcze raz',go:'Do mapy',gate:'Brama',kills:'Pokonani',bossDown:'TROLL POKONANY!'}};
const lang=()=>{let l=window.gdjs&&window.__pfGame?.__ui?.lang;try{l=l||localStorage.getItem('pf-lang')}catch{}return T[l]?l:'az'};
const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')||{}}catch{return{}}};
const write=v=>{try{localStorage.setItem(KEY,JSON.stringify(Object.assign(read(),v)))}catch{}};
const css=`#pirate-bastion{position:fixed;inset:0;z-index:2147483000;background:#2a1a2a;overflow:hidden;font-family:system-ui,'Segoe UI',sans-serif;user-select:none;-webkit-user-select:none;touch-action:none;color:#fff}
#pirate-bastion .bs-top{position:absolute;left:max(10px,env(safe-area-inset-left));right:max(10px,env(safe-area-inset-right));top:max(8px,env(safe-area-inset-top));display:flex;gap:10px;align-items:center;pointer-events:none}
#pirate-bastion .bs-gate{display:flex;align-items:center;gap:8px;background:#3a2414e6;border:2px solid #e2b764;border-radius:999px;padding:5px 12px 5px 6px;min-width:150px}
#pirate-bastion .bs-gate i{display:block;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 50% 60%,#7a4a26 0 45%,#c9963f 46%)}
#pirate-bastion .bs-bar{flex:1;height:12px;border-radius:8px;background:#1a0e08;overflow:hidden;min-width:90px}#pirate-bastion .bs-bar b{display:block;height:100%;width:100%;background:linear-gradient(#9cf06a,#3fae2a);transition:width .2s}
#pirate-bastion .bs-wave{background:#3a2414e6;border:2px solid #e2b764;border-radius:999px;padding:6px 16px;font-weight:900;letter-spacing:.06em;color:#ffe9b0}
#pirate-bastion .bs-coins{margin-left:auto;display:flex;align-items:center;gap:6px;background:#3a2414e6;border:2px solid #e2b764;border-radius:999px;padding:5px 14px 5px 6px;font-weight:900;font-size:18px;color:#ffd34a}
#pirate-bastion .bs-coins i{width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#fff3a8 0 18%,#ffcf33 19% 72%,#7a4a08 74%)}
#pirate-bastion .bs-skip{pointer-events:auto;background:#00000070;border:2px solid #ffffff60;color:#fff;border-radius:999px;padding:7px 14px;font-weight:800;font-size:14px}
#pirate-bastion .bs-boss{position:absolute;left:50%;top:calc(max(8px,env(safe-area-inset-top)) + 48px);transform:translateX(-50%);width:min(380px,60vw);text-align:center;pointer-events:none}
#pirate-bastion .bs-boss span{font-weight:900;color:#ffdfc0;text-shadow:0 2px 0 #3a1806;letter-spacing:.05em}#pirate-bastion .bs-boss .bs-bar{height:14px;border:2px solid #3a1806}#pirate-bastion .bs-boss .bs-bar b{background:linear-gradient(#ff8a5a,#c22a1a)}
#pirate-bastion .bs-banner{position:absolute;left:0;right:0;top:30%;text-align:center;pointer-events:none;font-weight:1000;font-size:clamp(30px,7vw,64px);color:#ffd34a;-webkit-text-stroke:2px #3a1806;text-shadow:0 5px 0 #3a1806,0 8px 18px #0008;letter-spacing:.03em;opacity:0;transform:scale(.6);transition:opacity .2s,transform .25s cubic-bezier(.3,1.6,.5,1)}
#pirate-bastion .bs-banner.on{opacity:1;transform:scale(1)}#pirate-bastion .bs-banner small{display:block;font-size:.42em;color:#fff;-webkit-text-stroke:1px #3a1806;margin-top:4px}
#pirate-bastion .bs-combo{position:absolute;left:50%;top:56%;transform:translateX(-50%) rotate(-6deg);font-weight:1000;font-size:clamp(22px,5vw,44px);color:#fff;-webkit-text-stroke:2px #3a1806;text-shadow:0 4px 0 #3a1806;pointer-events:none;opacity:0;transition:opacity .3s}
#pirate-bastion .bs-combo.on{opacity:1}
#pirate-bastion .bs-hint{position:absolute;left:50%;top:calc(max(8px,env(safe-area-inset-top)) + 54px);transform:translateX(-50%);max-width:min(620px,86vw);text-align:center;background:#000a;border-radius:14px;padding:8px 14px;font-size:14px;line-height:1.35;pointer-events:none;transition:opacity .6s}
#pirate-bastion .bs-pad{position:absolute;bottom:max(12px,env(safe-area-inset-bottom));width:84px;height:84px;border-radius:50%;background:#3a2414cc;border:3px solid #e2b764;color:#ffe9b0;font-size:34px;font-weight:900;display:grid;place-items:center;pointer-events:auto;box-shadow:0 6px 0 #1a0e08}
#pirate-bastion .bs-pad.on{transform:translateY(4px);box-shadow:0 2px 0 #1a0e08;background:#5a3a1ccc}
#pirate-bastion .bs-l{left:max(14px,env(safe-area-inset-left))}#pirate-bastion .bs-r{right:max(14px,env(safe-area-inset-right))}
#pirate-bastion .bs-end{position:absolute;inset:0;display:grid;place-items:center;background:#0008;opacity:0;pointer-events:none;transition:opacity .4s}#pirate-bastion .bs-end.on{opacity:1;pointer-events:auto}
#pirate-bastion .bs-card{background:linear-gradient(#4a2c16,#2a170a);border:3px solid #e2b764;border-radius:20px;padding:20px 26px;text-align:center;min-width:min(380px,86vw);box-shadow:0 14px 40px #000c}
#pirate-bastion .bs-card h2{margin:0 0 8px;font-size:30px;font-weight:1000;color:#ffd34a;-webkit-text-stroke:1px #3a1806}#pirate-bastion .bs-card p{margin:4px 0;color:#ffe9c8}
#pirate-bastion .bs-card button{margin:14px 6px 0;border:0;border-radius:999px;padding:12px 22px;font-weight:900;font-size:16px;background:linear-gradient(#ffe066,#e8a020);color:#3a1806;box-shadow:0 4px 0 #8a5a10}#pirate-bastion .bs-card button.alt{background:#ffffff22;color:#fff;box-shadow:none;border:2px solid #ffffff55}
#pirate-bastion .bs-fly{position:fixed;left:0;top:0;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#fff3a8 0 18%,#ffcf33 19% 72%,#7a4a08 74%);pointer-events:none;z-index:3;box-shadow:0 0 8px #ffd34a}
#pirate-bastion .bs-coins.pulse{animation:bs-pulse .25s}@keyframes bs-pulse{50%{transform:scale(1.18)}}
#pirate-bastion .bs-load{position:absolute;inset:0;display:grid;place-items:center;background:radial-gradient(#5a2a3a,#1a0e18);font-weight:900;font-size:22px;color:#ffd9a0;transition:opacity .5s}
@media (max-height:430px){#pirate-bastion .bs-pad{width:70px;height:70px;font-size:28px}#pirate-bastion .bs-hint{font-size:12px;max-width:62vw}}`;
let active=null;
function loadBundle(){if(window.PirateBastion3D)return Promise.resolve();return new Promise((ok,no)=>{const prev=document.querySelector('script[data-bastion3d]');const sc=prev||document.createElement('script');sc.src=BUNDLE;sc.dataset.bastion3d='1';sc.addEventListener('load',ok);sc.addEventListener('error',()=>no(Error('bastion bundle')));if(!prev)document.head.append(sc);setTimeout(()=>window.PirateBastion3D?ok():no(Error('bastion bundle timeout')),20000)})}
async function heroArt(hero){try{const H=window.PirateHeroes;if(!H?.loadIllustration)return null;let art=await H.loadIllustration(hero,hero==='scarlet'?{outfit:'outfit-classic',arena:true}:undefined);if(window.PirateArenaPresentation?.enhance)art=await window.PirateArenaPresentation.enhance(art);return art&&art.image&&art.meta?art:null}catch{return null}}
function webgl2(){try{return!!document.createElement('canvas').getContext('webgl2')}catch{return false}}

async function open(o={}){
 if(active)return active.done;const C=window.PirateBastionCore;if(!C||!webgl2())return{result:'unavailable'};
 const L=T[lang()],hero=o.hero||window.PirateLevels?.hero?.()||'scarlet';
 if(!document.getElementById('pirate-bastion-css')){const st=document.createElement('style');st.id='pirate-bastion-css';st.textContent=css;document.head.append(st)}
 const root=document.createElement('section');root.id='pirate-bastion';root.setAttribute('aria-label',L.title);
 root.innerHTML=`<div class="bs-load">${L.title}…</div>
  <div class="bs-top"><div class="bs-gate"><i></i><div class="bs-bar"><b data-gate></b></div></div><div class="bs-wave" data-wave>${L.wave} 1/5</div><div class="bs-coins"><i></i><span data-coins>0</span></div><button class="bs-skip" data-skip>${L.skip} ›</button></div>
  <div class="bs-boss" hidden><span>☠ ${L.bossName}</span><div class="bs-bar"><b data-boss></b></div></div>
  <div class="bs-banner" data-banner></div><div class="bs-combo" data-combo></div>
  <div class="bs-hint" data-hint>${L.intro}<br>${L.hint}</div>
  <button class="bs-pad bs-l" data-dir="-1" aria-label="◀">◀</button><button class="bs-pad bs-r" data-dir="1" aria-label="▶">▶</button>
  <div class="bs-end" data-end><div class="bs-card"><h2 data-endt></h2><p data-ends></p><div><button class="alt" data-again>${L.again}</button><button data-go>${L.go}</button></div></div></div>`;
 document.body.append(root);
 const q=s=>root.querySelector(s);window.PirateCover?.hold?.('bastion');
 let resolve;const done=new Promise(r=>resolve=r);
 const st={root,done,closed:false,s:null,stage:null,raf:0};active=st;
 const prevBack=window.__pfBack;window.__pfBack=()=>{finish('skip');return true};
 window.PirateMusic?.want?.('bastion','a2battle');
 function finish(result){if(st.closed)return;st.closed=true;cancelAnimationFrame(st.raf);removeEventListener('keydown',kd);removeEventListener('keyup',ku);document.removeEventListener('visibilitychange',vis);
  if(result==='win')write({done:true,wins:(read().wins||0)+1,hero,at:Date.now()});
  window.PirateMusic?.want?.('bastion',null);if(window.__pfBack===st.back)window.__pfBack=prevBack;
  try{st.stage?.dispose()}catch{}root.remove();window.PirateCover?.release?.('bastion');active=null;window.PirateBastion.last={result,kills:st.s?.kills,gate:st.s?.gate,wave:st.s?.wave};resolve({result})}
 st.back=window.__pfBack;st.finish=finish;
 q('[data-skip]').onclick=()=>finish('skip');
 // input: pads, keys, and tap/drag on the wall (the hero walks toward the finger)
 const input={move:0,keys:0,pads:0,target:null};st.input=input;
 const kd=e=>{if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){input.keys=-1;e.preventDefault()}else if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){input.keys=1;e.preventDefault()}};
 const ku=e=>{if((e.key==='ArrowLeft'||e.key==='a'||e.key==='A')&&input.keys<0)input.keys=0;if((e.key==='ArrowRight'||e.key==='d'||e.key==='D')&&input.keys>0)input.keys=0};
 addEventListener('keydown',kd);addEventListener('keyup',ku);
 root.querySelectorAll('[data-dir]').forEach(b=>{const d=+b.dataset.dir;const on=e=>{e.preventDefault();e.stopPropagation();input.pads=d;input.target=null;b.classList.add('on');b.setPointerCapture?.(e.pointerId)},off=()=>{if(input.pads===d)input.pads=0;b.classList.remove('on')};
  b.addEventListener('pointerdown',on);b.addEventListener('pointerup',off);b.addEventListener('pointercancel',off);b.addEventListener('lostpointercapture',off)});
 let dragId=null;const toWall=e=>{const r=root.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width*2-1;const C2=window.PirateBastionCore;const s=st.s;if(!s)return null;const span=(r.width/r.height<1.4?.55:.85)*C2.WALL;return Math.max(-C2.WALL+1,Math.min(C2.WALL-1,(s.heroX*.45)+nx*span))};
 root.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;dragId=e.pointerId;input.target=toWall(e)});
 root.addEventListener('pointermove',e=>{if(e.pointerId===dragId)input.target=toWall(e)});
 const up=e=>{if(e.pointerId===dragId){dragId=null}};root.addEventListener('pointerup',up);root.addEventListener('pointercancel',up);
 let hidden=false;const vis=()=>{hidden=document.hidden};document.addEventListener('visibilitychange',vis);
 // load 3D + hero art
 try{await loadBundle()}catch{finish('unavailable');return done}
 if(st.closed)return done;
 const art=await heroArt(hero);if(st.closed)return done;
 let stage;try{stage=window.PirateBastion3D.create(root,{base:'harbor/harbor3d/',art:'bastion/',troll:true,heroArt:art});st.stage=stage;await Promise.race([stage.ready,new Promise(r=>setTimeout(r,15000))])}catch(e){console.warn('Bastion 3D',e);finish('unavailable');return done}
 if(st.closed)return done;
 q('.bs-load').style.opacity='0';setTimeout(()=>q('.bs-load')?.remove(),600);
 // simulation
 const s=st.s=C.create({hero,seed:(Date.now()&0xffff)||7,intro:3.2});
 const gateEl=q('[data-gate]'),waveEl=q('[data-wave]'),coinsEl=q('[data-coins]'),bossBox=q('.bs-boss'),bossEl=q('[data-boss]'),banner=q('[data-banner]'),comboEl=q('[data-combo]'),hint=q('[data-hint]');
 let bannerT=0,comboT=0,hintT=6;
 const show=(txt,sub='',dur=1.8)=>{banner.innerHTML=txt+(sub?`<small>${sub}</small>`:'');banner.classList.add('on');bannerT=dur};
 show(L.title,L.intro,2.8);
 // coins fly from the fallen raider to the counter
 const coinBox=q('.bs-coins');let flying=0;
 function flyCoins(e){const p=stage.project?.(e.x,1.6,e.z);if(!p||!p.on||flying>36)return;const to=coinBox.getBoundingClientRect(),tx=to.left+18,ty=to.top+to.height/2;
  for(let i=0;i<Math.min(3,e.coins);i++){const c=document.createElement('i');c.className='bs-fly';root.append(c);flying++;const sx=p.x+(Math.random()-.5)*30,sy=p.y+(Math.random()-.5)*20,mx=(sx+tx)/2+(Math.random()-.5)*80,my=Math.min(sy,ty)-40-Math.random()*60;
   const a=c.animate([{transform:`translate(${sx}px,${sy}px) scale(.6)`},{transform:`translate(${mx}px,${my}px) scale(1.1)`,offset:.45},{transform:`translate(${tx}px,${ty}px) scale(.8)`}],{duration:620+i*90,easing:'cubic-bezier(.4,0,.6,1)',fill:'forwards'});
   a.onfinish=()=>{c.remove();flying--;coinBox.classList.remove('pulse');void coinBox.offsetWidth;coinBox.classList.add('pulse')}}}
 let last=performance.now(),acc=0,coinsShown=-1;
 function frame(now){if(st.closed)return;st.raf=requestAnimationFrame(frame);let dt=Math.min(.1,(now-last)/1000);last=now;if(hidden)return;
  // movement intent
  let mv=input.keys||input.pads;if(!mv&&input.target!=null){const d=input.target-s.heroX;mv=Math.abs(d)<.35?0:Math.max(-1,Math.min(1,d/1.2))}input.move=mv;
  acc+=dt;let n=0;while(acc>=C.TICK&&n<8){C.step(s,C.TICK,input);acc-=C.TICK;n++}if(n===8)acc=0;
  const evs=s.events;s.events=[];
  for(const e of evs){
   if(e.type==='wave'){waveEl.textContent=e.boss?L.final:`${L.wave} ${e.n}/${s.waves}`;show(e.boss?L.final:`${L.wave} ${e.n}`,'',1.6)}
   else if(e.type==='boss'){show(L.boss,L.bossName,2.2);window.PirateMusic?.want?.('bastion','seaboss')}
   else if(e.type==='bossLand')bossBox.hidden=false;
   else if(e.type==='build')show(L[e.id],L.built,1.6);
   else if(e.type==='combo'){comboEl.textContent=`x${e.n} ${L.combo}`;comboEl.classList.add('on');comboT=1.1}
   else if(e.type==='clear')show(L.clear,'',1.4);
   else if(e.type==='kill')flyCoins(e);
   else if(e.type==='bossDown'){show(L.bossDown,'',2);bossBox.hidden=true}
   else if(e.type==='win'||e.type==='lose'){const win=e.type==='win';setTimeout(()=>{if(st.closed)return;q('[data-endt]').textContent=win?L.win:L.lose;q('[data-ends]').textContent=`${L.gate}: ${Math.round(s.gate)}% · ${L.kills}: ${s.kills}`;
     q('[data-again]').hidden=win;q('[data-end]').classList.add('on');if(win)write({done:true});},win?2200:900)}
  }
  stage.update(s,evs,dt);stage.render(dt);
  gateEl.style.width=(s.gate/s.gateMax*100)+'%';if(s.coins!==coinsShown){coinsShown=s.coins;coinsEl.textContent=s.coins}
  if(s.boss&&s.boss.hp>0)bossEl.style.width=Math.max(0,s.boss.hp/s.boss.maxHp*100)+'%';
  if(bannerT>0){bannerT-=dt;if(bannerT<=0)banner.classList.remove('on')}if(comboT>0){comboT-=dt;if(comboT<=0)comboEl.classList.remove('on')}
  if(hintT>0){hintT-=dt;if(hintT<=0)hint.style.opacity='0'}
 }
 st.raf=requestAnimationFrame(frame);
 q('[data-go]').onclick=()=>finish(s.won?'win':'skip');
 q('[data-again]').onclick=()=>{finish('retry')};
 return done;
}
// Played from its own node on the island map (before Stage 1); Level 1 itself is unchanged. 'retry' reopens a fresh defence.
async function play(o){let r;do{r=await open(o)}while(r?.result==='retry');return r}
window.PirateBastion={open,play,won(){return!!read().done},reset(){try{localStorage.removeItem(KEY)}catch{}},get active(){return active},texts:T,last:null};
})();
