/* Pirate Strike — Endless Sea (opens after Level 10).
 * One run = an endless chain of short stages built in code (seeded): the road (gaps, steps, ledges, ferries,
 * breaking planks) and the enemies change from stage to stage, cycling through the ten islands' biomes, and the
 * enemies grow tougher each stage. Lives, health and gold carry over; a heart waits on every stage.
 * No save (a run starts fresh), no per-coin payout. Records: pf-endless-best {stage,score}. Gold reward: only the
 * improvement over the best paid run (PirateEconomy.earnBest), so replays cannot farm gold.
 * The enemies keep their home level's AI and approved animation (enemyAnimLevel); the few level helpers their AI
 * calls (musket, lob, harpoon…) are borrowed from the home level's definition, one biome per stage. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A=BASE+'assets/',BEST_KEY='pf-endless-best',GOLD_PER_STAGE=15;
const L={
en:{title:'Endless Sea',blurb:'Ever-changing islands, ever-stronger crews',stage:'Stage',best:'Best',score:'Score',reach:'Reach the far shore',next:'Stage clear!',over:'THE SEA WINS THIS TIME',summary:'Stage {s} · score {p}',record:'New record!',bestWas:'Best: stage {s} · score {p}',reward:'Reward: +{g} gold',retry:'NEW RUN',map:'WORLD MAP',
 jungle:'Jungle Coast',ruins:'Sun Ruins',cove:'Smugglers Cove',cursed:'Cursed Shrine',storm:'Storm Beach',lighthouse:'Night Lighthouse',ice:'Frozen Cliffs',fortress:'Chain Fortress',warship:'Black Warship'},
az:{title:'Sonsuz Dəniz',blurb:'Hər dəfə dəyişən adalar, getdikcə güclənən düşmənlər',stage:'Mərhələ',best:'Rekord',score:'Xal',reach:'Uzaq sahilə çat',next:'Mərhələ keçildi!',over:'BU DƏFƏ DƏNİZ QALİB GƏLDİ',summary:'Mərhələ {s} · xal {p}',record:'Yeni rekord!',bestWas:'Rekord: mərhələ {s} · xal {p}',reward:'Mükafat: +{g} qızıl',retry:'YENİ SƏFƏR',map:'DÜNYA XƏRİTƏSİ',
 jungle:'Cəngəllik Sahili',ruins:'Günəş Xarabalığı',cove:'Qaçaqmalçı Körfəzi',cursed:'Lənətli Məbəd',storm:'Fırtına Sahili',lighthouse:'Gecə Mayakı',ice:'Buzlu Qayalar',fortress:'Zəncir Qalası',warship:'Qara Döyüş Gəmisi'},
tr:{title:'Sonsuz Deniz',blurb:'Hep değişen adalar, giderek güçlenen tayfalar',stage:'Aşama',best:'Rekor',score:'Puan',reach:'Uzak kıyıya ulaş',next:'Aşama geçildi!',over:'BU KEZ DENİZ KAZANDI',summary:'Aşama {s} · puan {p}',record:'Yeni rekor!',bestWas:'Rekor: aşama {s} · puan {p}',reward:'Ödül: +{g} altın',retry:'YENİ SEFER',map:'DÜNYA HARİTASI',
 jungle:'Orman Kıyısı',ruins:'Güneş Harabeleri',cove:'Kaçakçı Koyu',cursed:'Lanetli Tapınak',storm:'Fırtına Sahili',lighthouse:'Gece Feneri',ice:'Buzlu Kayalıklar',fortress:'Zincir Kalesi',warship:'Kara Savaş Gemisi'},
ru:{title:'Бескрайнее море',blurb:'Острова меняются, враги становятся сильнее',stage:'Этап',best:'Рекорд',score:'Очки',reach:'Доберитесь до дальнего берега',next:'Этап пройден!',over:'НА ЭТОТ РАЗ ПОБЕДИЛО МОРЕ',summary:'Этап {s} · очки {p}',record:'Новый рекорд!',bestWas:'Рекорд: этап {s} · очки {p}',reward:'Награда: +{g} золота',retry:'НОВЫЙ ПОХОД',map:'КАРТА МИРА',
 jungle:'Берег джунглей',ruins:'Солнечные руины',cove:'Бухта контрабандистов',cursed:'Проклятый храм',storm:'Штормовой пляж',lighthouse:'Ночной маяк',ice:'Ледяные скалы',fortress:'Цепная крепость',warship:'Чёрный линкор'},
pl:{title:'Bezkresne Morze',blurb:'Wciąż inne wyspy, coraz silniejsze załogi',stage:'Etap',best:'Rekord',score:'Wynik',reach:'Dotrzyj na drugi brzeg',next:'Etap zaliczony!',over:'TYM RAZEM WYGRAŁO MORZE',summary:'Etap {s} · wynik {p}',record:'Nowy rekord!',bestWas:'Rekord: etap {s} · wynik {p}',reward:'Nagroda: +{g} złota',retry:'NOWY REJS',map:'MAPA ŚWIATA',
 jungle:'Brzeg dżungli',ruins:'Słoneczne ruiny',cove:'Zatoka przemytników',cursed:'Przeklęta świątynia',storm:'Burzowa plaża',lighthouse:'Nocna latarnia',ice:'Lodowe klify',fortress:'Łańcuchowa twierdza',warship:'Czarny okręt'}};
const text=(lang,k,v)=>{let s=(L[lang]||L.en)[k]??L.en[k]??k;if(v)for(const [a,b] of Object.entries(v))s=s.replace('{'+a+'}',b);return s};

/* biome cycle: plate art, sky, terrain style, music, enemy pool (home level = AI helpers + animation binding) */
const B=(id,home,plate,music,style,sky,tint,pool)=>({id,home,plate,music,style,sky,tint,pool});
const BIOMES=[
 B('jungle',2,A+'level-02/plate-ruins.webp','level2','ground',['#5d9fd8','#bfe0ef'],null,['pirate','gunner']),
 B('ruins',3,A+'level-03/plate-temple.webp','level3','temple',['#d49a62','#f3dcaa'],null,['skeleton','archer','shield']),
 B('cove',4,A+'level-04/plate-dock.webp','level4','rock',['#22344a','#6a8aa2'],null,['pirate','gunner','duelist','brute']),
 B('cursed',5,A+'level-05/plate-shrine.webp','level5','ground',['#2b2244','#86688a'],'rgba(60,20,80,.18)',['skeleton','archer','shield','ghost']),
 B('storm',6,A+'level-06/plate-beach.webp','level6','rock',['#2c3a4a','#8696a0'],null,['storm','thunder','raider']),
 B('lighthouse',7,A+'level-06/plate-lighthouse.webp','level7','stone',['#0e1426','#3a4868'],'rgba(10,16,44,.34)',['wrecker','tideBrute','lookout']),
 B('ice',8,A+'level-06/plate-cliffs.webp','level8','stone',['#7393b4','#dceaf5'],'rgba(160,210,255,.22)',['skater','harpooner','revenant']),
 B('fortress',9,A+'level-03/plate-gate.webp','level9','temple',['#4a2e2a','#c98352'],'rgba(90,34,10,.18)',['shieldguard','halberdier','bombardier']),
 B('warship',10,A+'level-04/plate-ship.webp','level10','stone',['#1c1210','#64301c'],'rgba(70,14,0,.22)',['marine','deckgunner'])];
const HOME={pirate:2,gunner:2,skeleton:3,archer:3,shield:3,duelist:4,brute:4,ghost:5,storm:6,thunder:6,raider:6,wrecker:7,tideBrute:7,lookout:7,skater:8,harpooner:8,revenant:8,shieldguard:9,halberdier:9,bombardier:9,marine:10,deckgunner:10};
/* melee types whose AI needs no level helper: mixed into later stages for variety */
const EXTRAS=['skeleton','duelist','raider','marine','halberdier','storm'];
const RANGED=new Set(['gunner','archer','thunder','lookout','harpooner','bombardier','deckgunner']);
/* level helpers enemy AIs call through run.def (copied from the home level's definition for that biome's stages) */
const HELPERS={6:['musket'],7:['lob','landing','blunder','anchorSlam','lanternLand','groundBelow'],8:['harpoon','chill','revenantDeath','pinCheck'],9:['toss','landing','bombLand','groundBelow'],10:['musket']};
const biomeOf=stage=>BIOMES[(stage-1)%BIOMES.length];

function rng(seed){let a=seed>>>0||1;return()=>{a=a+0x6D2B79F5>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
const pick=(R,list)=>list[Math.floor(R()*list.length)%list.length];

/* ---------------- one stage: a run of flat grounds joined by gaps and steps.
 * Reachability rules (hero: jump ≈100 px high / ≈175 px far, double jump ≈200 px / ≈330 px):
 * plain gaps 110–230 px, a step up after a gap ≤ 60 px, steps without a gap ±40–80 px (up ≤ 70); a wide gap
 * (300–360 px) always carries a ferry (moves across the whole gap) or a row of breaking planks. */
function stagePlan(stage,seed){
 const b=biomeOf(stage),R=rng(seed*7919+stage*104729),G=700,style=b.style;
 const len=4400+360*Math.min(stage,8);
 const solids=[],pits=[],ledges=[],movers=[],crumbles=[],coins=[],flats=[];
 let x=0,y=G;
 const flat=w=>{solids.push({x,y,w,h:1300-y,style});flats.push({x,w,y});
  for(let k=0,n=2+Math.floor(R()*3),cx=x+60+R()*Math.max(0,w-260);k<n&&cx<x+w-40;k++,cx+=44)coins.push([Math.round(cx),y-34]);
  if(w>=520&&R()<.42){const lw=150+Math.round(R()*60),lx=Math.round(x+w*.3+R()*(w*.4-lw)),ly=y-125;ledges.push({x:lx,y:ly,w:lw});for(let cx=lx+30;cx<lx+lw-20;cx+=40)coins.push([cx,ly-34])}
  x+=w};
 flat(900);
 while(x<len-900){
  const r=R();
  if(r<.3){const w=Math.round(110+R()*(stage<3?70:120));pits.push({x,w});for(let k=1;k<4;k++)coins.push([Math.round(x+w*k/4),y-110-Math.round(Math.sin(k/4*Math.PI)*40)]);x+=w;if(R()<.4)y=clamp(y-Math.round(R()*60),580,760)}
  else if(r<.42&&stage>=3){const w=300+Math.round(R()*60);pits.push({x,w});
   if(stage>=4&&R()<.45){for(let k=0;k<w;k+=100)crumbles.push({id:'cr'+crumbles.length,x:x+k,y,w:Math.min(100,w-k)})}
   else movers.push({id:'mv'+movers.length,x,y,w:120,axis:'x',range:[x,x+w-120],period:3.4+R()*1.2});
   x+=w}
  else if(r<.62){const up=R()<.5;y=clamp(y+(up?-1:1)*Math.round(40+R()*(up?30:40)),580,760)}
  flat(Math.round(420+R()*460));
 }
 flat(Math.max(900,len+300-x));
 const width=x;
 // a checkpoint mid-stage, a heart past it, a chest on a ledge, an exit near the end
 const mids=flats.slice(1,-1),mid=mids.reduce((a,f)=>Math.abs(f.x+f.w/2-width/2)<Math.abs(a.x+a.w/2-width/2)?f:a,mids[0]||flats[0]);
 const checkpoints=[{id:1,x:Math.round(mid.x+Math.min(140,mid.w/3)),y:mid.y}];
 const after=mids.find(f=>f.x>mid.x&&f.w>=440)||mid,hearts=[{id:'h1',x:Math.round(after.x+after.w*.55),y:after.y}];
 const L0=ledges.find(l=>l.x>1000)||null,chests=L0?[{id:'k1',x:Math.round(L0.x+L0.w/2),y:L0.y,gold:8+2*Math.min(stage,10)}]:[];
 const last=flats.at(-1),exitX=last.x+Math.min(560,last.w-200);
 // enemies: the biome's pool, plus melee extras from other islands after the first full cycle
 const cycle=Math.floor((stage-1)/BIOMES.length),pool=[...b.pool];
 if(cycle>0)for(const t of EXTRAS)if(!pool.includes(t)&&R()<.35+.15*Math.min(cycle,3))pool.push(t);
 const count=Math.min(16,3+Math.floor(stage*1.3)),spots=mids.filter(f=>f!==mid&&f.w>=420),enemies=[];
 for(let i=0;i<count&&spots.length;i++){const f=spots[i%spots.length],slot=Math.floor(i/spots.length);if(slot>1)break;
  let t=pick(R,pool);if(slot===1&&RANGED.has(t))t=pick(R,pool.filter(k=>!RANGED.has(k)))||t;
  const ex=Math.round(f.x+f.w*(slot?.72:.42));enemies.push({id:'e'+i,type:t,x:ex,y:f.y,range:[f.x+40,f.x+f.w-40]})}
 const anim={};for(const t of new Set(enemies.map(e=>e.type)))anim[t]=b.pool.includes(t)?b.home:HOME[t];
 return{biome:b,anim,exitX,cfg:{id:'endless',key:'endless-'+stage,version:1,type:'normal',assets:A+'level-03/',
  world:{width,height:1300,ground:G},start:{x:160,y:G},zones:[{id:b.id,from:0,to:width,ambient:0}],
  solids,ledges,crumbles,movers,pits,coins,chests,enemies,checkpoints,hearts}};
}

/* ---------------- the definition (one object per stage: the base plus the home level's AI helpers) */
const def={
 id:'endless',base:BASE,noSave:true,noPay:true,
 images:[...new Set(BIOMES.map(b=>b.plate))],
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 plan:stagePlan,biomes:BIOMES,
 initialState:()=>({}),
 generate(run){
  const st=run.endless||(run.endless={stage:1,seed:(Date.now()^Math.floor(Math.random()*1e9))>>>0,score:0,cleared:0});
  const plan=stagePlan(st.stage,st.seed),home=window.PirateLevelEngine.get(plan.biome.home)||{};
  const d=Object.create(def);for(const k of HELPERS[plan.biome.home]||[])if(typeof home[k]==='function')d[k]=home[k];
  d.inside=()=>false;d.enemyAnimLevel=plan.anim;d.biome=plan.biome;d.homeDef=home;
  run.def=d;st.exitX=plan.exitX;return plan.cfg},
 heroStats(run){try{const v=window.PirateEconomy?.heroProgress?.(run.heroId);if(v)return window.PirateHeroProgress.stats(v.level,v.star,'adventure')}catch{}return{hp:100,atk:23,dr:0}},
 setup(run){
  const st=run.endless,b=run.def.biome,scale=1+.08*(st.stage-1);
  for(const e of run.enemies){e.max=e.hp=Math.round(e.max*scale)}
  run.fires=[];run.quakes=[];run.bombs=[];run.bursts=[];run.marks=[];run.waves=[];run.slowT=0;run.pinT=0;
  run.plate=run.images[b.plate];run.banner={t:3.6,text:text(run.lang,'stage')+' '+st.stage+' · '+text(run.lang,b.id)};
  run.motes=Array.from({length:24},(_,i)=>({x:(i*173)%E.W,y:(i*97)%H,s:.3+(i%5)*.15}))},
 onStart(run,resumed){
  // the pause card's RESTART starts a fresh run from stage 1 (never a free retry of a late stage)
  if(!run.stageSwap&&run.endless?.started){def.record(run);run.endless=null;def.advance(run,true);return}
  if(run.endless){run.endless.started=true;if(!run.endless.before){let b=null;try{b=JSON.parse(localStorage.getItem(BEST_KEY)||'null')}catch{}run.endless.before={stage:b?.stage||0,score:b?.score||0}}}},
 music(run){run.audio.playMusic(run.def.biome.music,1.4)},
 async advance(run,fresh){
  if(run.stageSwap)return;run.stageSwap=true;const st=run.endless;
  if(!fresh){st.cleared++;st.stage++;st.score=st.cleared*1000+run.stats.kills*50+run.gold;def.record(run);run.audio.play('checkpoint',{vol:.8})}
  const prev=run.phase;run.phase='loading';
  try{await run.nextStage(def.generate(run))}catch(e){run.warn?.('endless stage '+e.message)}
  run.stageSwap=false;if(run.phase==='closed')return;run.phase=prev==='loading'?'play':prev;run.endless.started=true;
  run.needsRender=true},
 /* ice biome: a revenant's chill halves the hero's speed, a harpoon pins them (as in Level 8) */
 heroDrift(run){const p=run.p;let v=p.vx;if(run.slowT>0)v*=.5;if(run.pinT>0)v*=.1;return v-p.vx},
 zoneLabel(run){return text(run.lang,run.def.biome.id)},
 objectiveHud(run){return text(run.lang,'reach')},
 update(run,dt){
  const st=run.endless,p=run.p,home=run.def.homeDef||{};run.banner.t=Math.max(0,run.banner.t-dt);
  run.slowT=Math.max(0,run.slowT-dt);run.pinT=Math.max(0,run.pinT-dt);
  // the home level's own hazard updaters for what its enemies throw (lantern fires, anchor quakes, ice bursts, bombs)
  try{home.updateHazards?.(run,dt);home.updateBursts?.(run,dt);home.updateBombs?.(run,dt)}catch(e){run.warn?.('endless hazards '+e.message)}
  // brute shockwaves (Level 4's slam)
  for(const w of run.waves){w.x+=w.vx*dt;w.life-=dt;if(!w.hit&&!p.dead&&Math.abs(p.x+p.w/2-w.x)<26&&p.y+p.h>w.y-34&&p.y+p.h<w.y+10){w.hit=true;run.hurtPlayer(18,Math.sign(w.vx),null,260,true)}}
  run.waves=run.waves.filter(w=>w.life>0);
  st.score=st.cleared*1000+run.stats.kills*50+run.gold;
  if(!p.dead&&p.x+p.w/2>st.exitX&&run.phase==='play')def.advance(run,false)},
 /* the record and the gold are kept after every cleared stage, so leaving through the pause menu loses nothing;
  * runBest = the best stored before this run started (to say "new record" at the end) */
 record(run){const st=run.endless;let best={stage:0,score:0};try{best=JSON.parse(localStorage.getItem(BEST_KEY)||'null')||best}catch{}
  st.before??={stage:best.stage||0,score:best.score||0};
  if(st.score>(best.score||0)||st.stage>(best.stage||0))try{localStorage.setItem(BEST_KEY,JSON.stringify({stage:Math.max(st.stage,best.stage||0),score:Math.max(st.score,best.score||0),at:Date.now()}))}catch{}
  try{st.paid=(st.paid||0)+(window.PirateEconomy?.earnBest?.('endless','cleared',st.cleared*GOLD_PER_STAGE)||0)}catch{}},
 onGameOver(run){
  const st=run.endless;def.record(run);const reached=st.stage,score=st.score,best=st.before,gold=st.paid||0;
  const record=score>best.score||reached>best.stage;
  const lines=[text(run.lang,'summary',{s:reached,p:score}),record?text(run.lang,'record'):text(run.lang,'bestWas',{s:best.stage,p:best.score}),gold?text(run.lang,'reward',{g:gold}):''].filter(Boolean);
  run.endlessResult={stage:reached,score,record,gold};
  const opts=run.opts;
  run.showCard(text(run.lang,'over'),lines.join(' · '),[[text(run.lang,'retry'),()=>{run.close();window.PirateLevelEngine.launch('endless',opts)},true],[text(run.lang,'map'),()=>{run.close();opts.onExit?.('map')}]])},
 drawEnemy(run,c,e){if(e.type==='ghost'){const g=window.PirateLevelEngine.get(5);return g?.drawEnemy?.(run,c,e)||false}return false},
 drawProjectile(run,c,q){run.def.homeDef?.drawProjectile?.(run,c,q)},
 drawBackground(run,c){
  const b=run.def.biome,cam=run.camera,sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,b.sky[0]);sky.addColorStop(1,b.sky[1]);c.fillStyle=sky;c.fillRect(0,0,E.W,H);
  const im=run.plate;if(im){const sc=Math.max(1,(H*.9)/im.height),pw=im.width*sc,ph=im.height*sc,py=Math.round(700-cam.y-ph+90+(cam.y-300)*.12),ox=-((cam.x*.3)%(pw*2));
   for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>E.W||x+pw<0)continue;c.save();if(k%2){c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph)}else c.drawImage(im,x,py,pw,ph);c.restore()}
   const top=c.createLinearGradient(0,py,0,py+90);top.addColorStop(0,b.sky[0]);top.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=top;c.fillRect(0,py,E.W,90)}
  if(b.tint){c.fillStyle=b.tint;c.fillRect(0,0,E.W,H)}},
 drawMid(run,c){
  const t=run.time;
  for(const fr of run.fires){const k=fr.t/fr.max;run.fx.glow(c,fr.x,fr.y-14,60,'rgba(255,140,50,',.6*k+.2);for(let i=0;i<5;i++){const fx=fr.x-fr.w/2+10+i*(fr.w-20)/4,h=(18+10*Math.sin(t*14+i*2))*Math.min(1,k*2);c.fillStyle=i%2?'#ff9a3a':'#ffd36b';c.beginPath();c.moveTo(fx-7,fr.y);c.quadraticCurveTo(fx,fr.y-h*1.4,fx+7,fr.y);c.fill()}}
  for(const w of run.waves){c.save();c.globalAlpha=clamp(w.life/1.1,0,1);c.fillStyle='rgba(240,210,160,.85)';c.beginPath();c.moveTo(w.x-30,w.y);c.quadraticCurveTo(w.x,w.y-44,w.x+30,w.y);c.fill();c.restore()}
  for(const w of run.quakes){c.fillStyle='rgba(220,190,140,'+(1-w.t/.85)*.7+')';c.fillRect(w.x-16,w.y-10,32,10)}
  for(const bm of run.bombs){c.strokeStyle='rgba(255,70,40,'+(.4+.5*(1-clamp(bm.t,0,1)))+')';c.lineWidth=3;c.beginPath();c.ellipse(bm.x,bm.y-2,80,11,0,0,TAU);c.stroke();c.fillStyle='#2b2b30';c.beginPath();c.arc(bm.x,bm.y-9,9,0,TAU);c.fill();run.fx.glow(c,bm.x+5,bm.y-20,14,'rgba(255,190,80,',.6+.4*Math.sin(t*20))}
  for(const bu of run.bursts){if(bu.done)continue;const k=bu.t/.8;c.strokeStyle='rgba(127,230,255,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(bu.x,bu.y-3,84*(.5+.5*k),12,0,0,TAU);c.stroke()}
  if(run.slowT>0||run.pinT>0){const p=run.p;run.fx.glow(c,p.x+p.w/2,p.y+p.h*.5,60,'rgba(170,230,255,',.45)}
  // the far shore: a beacon over the exit
  const ex=run.endless.exitX,cam=run.camera;if(ex>cam.x-200&&ex<cam.x+E.W+200){const gy=run.solids.find(s=>ex>=s.x&&ex<=s.x+s.w)?.y??700;
   c.fillStyle='#5a3a1c';c.fillRect(ex-6,gy-170,12,170);c.fillStyle='#e8484f';c.beginPath();c.moveTo(ex+6,gy-168);c.lineTo(ex+70,gy-150+Math.sin(t*3)*4);c.lineTo(ex+6,gy-128);c.fill();run.fx.glow(c,ex,gy-170,70,'rgba(255,220,140,',.55)}},
 drawLighting(run,c){
  const cam=run.camera;
  if(!run.fx.reduced){c.fillStyle='rgba(255,250,220,.4)';for(const m of run.motes){const x=((m.x-cam.x*m.s*.3+run.time*10*m.s)%E.W+E.W)%E.W,y=((m.y+Math.sin(run.time*.7+m.x)*14-cam.y*m.s*.2)%H+H)%H;c.fillRect(x,y,2,2)}}
  const v=c.createRadialGradient(E.W/2,H/2,H*.45,E.W/2,H/2,H);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(10,6,0,.3)');c.fillStyle=v;c.fillRect(0,0,E.W,H)},
 drawHud(run,c){
  const st=run.endless;c.save();c.textAlign='right';c.font='800 17px Georgia, serif';c.lineWidth=4;c.strokeStyle='rgba(10,8,4,.8)';
  const s=text(run.lang,'stage')+' '+st.stage+'   '+text(run.lang,'score')+' '+st.score;c.strokeText(s,E.W-24,128);c.fillStyle='#ffe3a6';c.fillText(s,E.W-24,128);c.restore();
  if(run.banner.t>0){const k=Math.min(1,run.banner.t);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=190,w=E.W;c.fillStyle='rgba(40,24,10,.82)';c.beginPath();c.roundRect(w/2-300,y-34,600,58,14);c.fill();c.strokeStyle='#d9b56c';c.lineWidth=2;c.stroke();c.font='800 28px Georgia, serif';c.fillStyle='#ffe3a6';c.fillText(run.banner.text,w/2,y+6);c.restore()}}
};
E.register(def);
window.PirateEndless={def,plan:stagePlan,biomes:BIOMES,best(){try{return JSON.parse(localStorage.getItem(BEST_KEY)||'null')}catch{return null}}};
})();
