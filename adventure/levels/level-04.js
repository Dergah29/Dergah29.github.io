/* Pirate Strike — Level 4: Smugglers' Cove (moonlit sea cave and harbour).
 * Independent level on PirateLevelEngine. Areas: Moonlit Shore → Smugglers' Harbour →
 * Flooding Grotto (the tide rises until the sluice wheel is struck) → the smugglers' ship
 * deck, a sealed battle arena with three waves (no main boss — that is Level 5).
 * New smugglers: Duelist (parries frontal blows, lunges, then tires), Bomber (lobs fused
 * bombs — strike them back), Brute (super armour, anchor swing, ground slam shockwaves).
 * Mechanics: rolling cargo barrels, red powder kegs (chain explosions), breakable crates
 * hiding treasure, ferry raft, cargo lifts, collapsing jetty, spike traps, rising tide.
 * Painted backdrops/textures: tools/level04_art.py. Smugglers use the painted pirate art. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A4=BASE+'assets/level-04/',A2=BASE+'assets/level-02/';
const L={
en:{levelWord:'Level',title:"Level 4 · Smugglers' Cove",blurb:'A hidden smugglers’ harbour in a moonlit sea cave — and their ship',shore:'Moonlit Shore',dock:"Smugglers' Harbour",grotto:'Flooding Grotto',ship:"Smugglers' Ship",
 objShore:"Follow the shore into the smugglers' cove",objDock:'Cross the harbour — beware of rolling barrels',objGrotto:'Fight through the grotto to the ship',objTide:'The tide is rising! Climb to the high ledge',objWheel:'Strike the sluice wheel to drain the grotto',objShip:'Board the ship',objWave:'Hold the deck · wave {n}/3',objExit:'The gangway is clear — leave the ship',
 tide:'THE TIDE IS RISING!',drained:'The sluice opens — the water drains away',wave:'WAVE {n}',cleared:'The deck is ours!',parry:'PARRY',
 hint1:'Duelists parry from the front — strike after their lunge or DASH through',hint2:'Hit a bomb with your sword to knock it back',hint3:'Red powder kegs explode — lure smugglers close',hint4:'Break crates — some hide treasure',hint5:'Jump the Brute’s shockwaves, strike while his anchor is stuck'},
az:{levelWord:'Səviyyə',title:'Səviyyə 4 · Qaçaqmalçılar Koyu',blurb:'Ay işığında dəniz mağarasında gizli qaçaqmalçı limanı və onların gəmisi',shore:'Ay İşıqlı Sahil',dock:'Qaçaqmalçı Limanı',grotto:'Su Basan Mağara',ship:'Qaçaqmalçı Gəmisi',
 objShore:'Sahil boyu qaçaqmalçı koyuna irəlilə',objDock:'Limanı keç — yuvarlanan çəlləklərdən qoru',objGrotto:'Mağaradan keçib gəmiyə çat',objTide:'Su qalxır! Yuxarı qayaya çıx',objWheel:'Suyu boşaltmaq üçün sədd çarxını vur',objShip:'Gəmiyə min',objWave:'Göyərtəni qoru · dalğa {n}/3',objExit:'Keçid açıldı — gəmini tərk et',
 tide:'SU QALXIR!',drained:'Sədd açıldı — su çəkilir',wave:'DALĞA {n}',cleared:'Göyərtə bizimdir!',parry:'DƏF ETDİ',
 hint1:'Duelçi öndən gələn zərbəni dəf edir — atılışından sonra vur və ya YAYIN ilə keç',hint2:'Bombanı qılıncla vurub geri qaytar',hint3:'Qırmızı barıt çəlləkləri partlayır — düşmənləri yaxına çək',hint4:'Qutuları sındır — bəzisində xəzinə var',hint5:'Zorbanın zərbə dalğalarının üstündən tullan, lövbər ilişəndə vur'},
tr:{levelWord:'Bölüm',title:'Bölüm 4 · Kaçakçılar Koyu',blurb:'Ay ışığında bir deniz mağarasında gizli kaçakçı limanı ve gemileri',shore:'Ay Işıklı Sahil',dock:'Kaçakçı Limanı',grotto:'Su Basan Mağara',ship:'Kaçakçı Gemisi',
 objShore:'Sahili izleyerek kaçakçı koyuna gir',objDock:'Limanı geç — yuvarlanan fıçılara dikkat',objGrotto:'Mağaradan geçip gemiye ulaş',objTide:'Su yükseliyor! Yüksek kayaya tırman',objWheel:'Suyu boşaltmak için savak çarkına vur',objShip:'Gemiye çık',objWave:'Güverteyi tut · dalga {n}/3',objExit:'İskele açık — gemiden in',
 tide:'SU YÜKSELİYOR!',drained:'Savak açıldı — su çekiliyor',wave:'DALGA {n}',cleared:'Güverte bizim!',parry:'SAVUŞTURDU',
 hint1:'Düellocu önden gelen darbeyi savuşturur — hamlesinden sonra vur ya da ATIL',hint2:'Bombaya kılıçla vurup geri gönder',hint3:'Kırmızı barut fıçıları patlar — kaçakçıları yaklaştır',hint4:'Sandıkları kır — bazılarında hazine var',hint5:'Zorbanın şok dalgalarından zıpla, çapası saplanınca vur'},
ru:{levelWord:'Уровень',title:'Уровень 4 · Бухта контрабандистов',blurb:'Тайная гавань контрабандистов в лунной морской пещере и их корабль',shore:'Лунный берег',dock:'Гавань контрабандистов',grotto:'Затопляемый грот',ship:'Корабль контрабандистов',
 objShore:'Идите вдоль берега в бухту',objDock:'Пересеките гавань — берегитесь бочек',objGrotto:'Пробейтесь через грот к кораблю',objTide:'Прилив! Поднимитесь на высокий уступ',objWheel:'Ударьте по колесу шлюза, чтобы спустить воду',objShip:'Поднимитесь на корабль',objWave:'Удержите палубу · волна {n}/3',objExit:'Сходни свободны — покиньте корабль',
 tide:'ПРИЛИВ!',drained:'Шлюз открыт — вода уходит',wave:'ВОЛНА {n}',cleared:'Палуба наша!',parry:'ПАРИРОВАЛ',
 hint1:'Дуэлянт парирует удары спереди — бейте после выпада или РЫВКОМ насквозь',hint2:'Отбейте бомбу саблей обратно',hint3:'Красные бочки с порохом взрываются — заманите врагов',hint4:'Ломайте ящики — в некоторых сокровища',hint5:'Прыгайте через волны Громилы, бейте, пока якорь застрял'},
pl:{levelWord:'Poziom',title:'Poziom 4 · Zatoka przemytników',blurb:'Ukryta przystań przemytników w księżycowej grocie i ich statek',shore:'Księżycowy brzeg',dock:'Przystań przemytników',grotto:'Zalewana grota',ship:'Statek przemytników',
 objShore:'Idź brzegiem do zatoki przemytników',objDock:'Przejdź przystań — uważaj na toczące się beczki',objGrotto:'Przebij się przez grotę do statku',objTide:'Przypływ! Wespnij się na wysoką półkę',objWheel:'Uderz w koło śluzy, by spuścić wodę',objShip:'Wejdź na statek',objWave:'Utrzymaj pokład · fala {n}/3',objExit:'Trap wolny — zejdź ze statku',
 tide:'PRZYPŁYW!',drained:'Śluza otwarta — woda opada',wave:'FALA {n}',cleared:'Pokład jest nasz!',parry:'SPAROWAŁ',
 hint1:'Pojedynkowicz paruje ciosy z przodu — uderz po jego wypadzie albo ZRYW',hint2:'Odbij bombę szablą',hint3:'Czerwone beczki z prochem wybuchają — zwab wrogów',hint4:'Rozbijaj skrzynie — w niektórych są skarby',hint5:'Przeskakuj fale uderzeniowe Osiłka, bij, gdy kotwica utknie'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k];

/* ------------------------------------------------------------------ new smugglers (engine enemy kit) */
Object.assign(E.ENEMY,{
 duelist:{hp:84,w:40,h:96,speed:58,chase:120,sight:360,gold:5,flesh:true,name:{en:'Smuggler Duelist',az:'Qaçaqmalçı Duelçi',tr:'Kaçakçı Düellocu',ru:'Контрабандист-дуэлянт',pl:'Przemytnik pojedynkowicz'}},
 bomber:{hp:56,w:40,h:96,speed:56,chase:0,sight:640,gold:4,flesh:true,name:{en:'Smuggler Bomber',az:'Qaçaqmalçı Bombaçı',tr:'Kaçakçı Bombacı',ru:'Контрабандист-подрывник',pl:'Przemytnik bombiarz'}},
 brute:{hp:220,w:58,h:124,speed:36,chase:60,sight:380,gold:12,flesh:true,name:{en:'Smuggler Brute',az:'Qaçaqmalçı Zorba',tr:'Kaçakçı Zorba',ru:'Громила-контрабандист',pl:'Przemytnik osiłek'}}});
const P=E.Enemy.prototype;
const lohi=e=>[e.range[0]-e.w/2,e.range[1]-e.w/2];
if(!P.__smugglers){P.__smugglers=true;
 const baseDamage=P.damage,baseUpdate=P.update;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return baseUpdate.call(this,dt)};
 P.damage=function(amount,dir,kind){
  if(this.dead||this.spawnT>0)return'none';
  const run=this.run,front=(dir<0&&this.dir>0)||(dir>0&&this.dir<0);
  // Duelist: a raised blade parries frontal sword and thrown blows, then ripostes
  if(this.type==='duelist'&&this.state==='guard'&&front&&kind!=='heavyBack'&&kind!=='dash'&&kind!=='blast'){
   this.flash=.06;this.kb=dir*40;run.fx.spark(this.cx+this.dir*24,this.y+36,'#e9f2ff',12);
   run.fx.text(text(run.lang,'parry'),this.cx,this.y-8,'#cfe3ff');run.audio.at('clang',this.cx,{rate:1.15});run.hitStop(.04);
   this.state='riposte';this.timer=.2;return'blocked'}
  if(this.type==='brute'){const st=this.state,tm=this.timer;if(st==='stuck')amount=Math.round(amount*1.5);
   const r=baseDamage.call(this,amount,dir,kind);
   if(!this.dead&&st!=='stuck'){this.hurtT=0;this.kb*=.2;this.state=st;this.timer=tm}   // super armour: no stagger
   return r}
  return baseDamage.call(this,amount,dir,kind)};
 P.duelist=function(dt,dx,dy,near){
  const run=this.run,p=run.p,[lo,hi]=lohi(this);
  switch(this.state){
   case'guard':this.setAnim('guard');this.face(p);this.timer-=dt;if(this.timer<=0){this.state='windup';this.timer=.42;run.audio.at('swingEnemy',this.cx,{rate:1.35})}return;
   case'windup':this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='lunge';this.timer=.3;this.hitDone=false;run.audio.at('dash',this.cx)}return;
   case'lunge':{this.setAnim('lunge');this.timer-=dt;this.x=clamp(this.x+this.dir*520*dt,lo,hi);
    if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-74,y:this.y+20,w:74,h:this.h-30};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(18,this.dir,this,240)}}
    if(this.timer<=0){this.state='tired';this.timer=1.05}return}
   case'tired':this.setAnim('tired');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.7}return;
   case'riposte':this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='strike';this.timer=.22;this.hitDone=false;run.audio.at('swingEnemy',this.cx)}return;
   case'strike':this.setAnim('strike');this.timer-=dt;if(!this.hitDone&&this.timer<.16){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-70,y:this.y+8,w:70,h:this.h-10};if(overlap(box,p))run.hurtPlayer(14,this.dir,this)}
    if(this.timer<=0){this.state='tired';this.timer=.6}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  if(near&&this.alert){this.face(p);
   if(Math.abs(dx)<200&&Math.abs(dy)<70&&this.cool<=0){this.state='guard';this.timer=.8;return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*150,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
 P.bomber=function(dt,dx,dy,near){
  const run=this.run,p=run.p;
  if(this.state==='windup'){this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='release';this.timer=.35;def.throwBomb(run,this)}return}
  if(this.state==='release'){this.setAnim('release');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=2.7}return}
  if(this.state==='recover'){this.setAnim('idle');this.timer-=dt;if(this.timer<=0)this.state='idle';return}
  if(near&&this.alert){
   if(Math.abs(dx)<170&&Math.abs(dy)<90)this.walkTo(this.cx-Math.sign(dx)*90,this.def.speed,dt);else this.setAnim('idle');
   this.face(p);
   if(this.cool<=0&&Math.abs(dx)<620&&Math.abs(dx)>60){this.state='windup';this.timer=.65;run.audio.at('crystalCharge',this.cx,{vol:.5,rate:1.7})}}
  else this.patrol(dt)};
 P.brute=function(dt,dx,dy,near){
  const run=this.run,p=run.p;
  switch(this.state){
   case'windup':this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='swing';this.timer=.32;this.hitDone=false;run.audio.at('bossSwing',this.cx)}return;
   case'swing':this.setAnim('swing');this.timer-=dt;
    if(!this.hitDone&&this.timer<.24){this.hitDone=true;const box={x:this.dir>0?this.cx-10:this.cx-140,y:this.y+10,w:150,h:this.h-12};if(overlap(box,p))run.hurtPlayer(24,this.dir,this,330);run.camera.shake=Math.max(run.camera.shake,4)}
    if(this.timer<=0){this.state='recover';this.timer=.75}return;
   case'slamUp':this.setAnim('slamUp');this.timer-=dt;if(this.timer<=0){this.state='stuck';this.timer=1.35;def.slam(run,this)}return;
   case'stuck':this.setAnim('stuck');this.timer-=dt;if(this.timer<=0){this.state='recover';this.timer=.4}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.9}return}
  if(near&&this.alert){this.face(p);
   if(this.cool<=0&&Math.abs(dx)<135&&Math.abs(dy)<80){this.state='windup';this.timer=.7;run.audio.at('bossWindup',this.cx);return}
   if(this.cool<=0&&Math.abs(dx)<380&&Math.abs(dy)<100){this.state='slamUp';this.timer=1.0;run.audio.at('roar',this.cx,{vol:.7,rate:1.2});return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*100,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
}

/* ------------------------------------------------------------------ painted smugglers */
// faction recolour of the owner's painted pirates: red cloth -> teal / violet / rust, plus tints
function recolor(img,{cloth,tint,dark=1}){
 const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);
 const d=x.getImageData(0,0,c.width,c.height),a=d.data,[cr,cg,cb]=cloth,[tr,tg,tb,tk]=tint||[0,0,0,0];
 for(let i=0;i<a.length;i+=4){if(!a[i+3])continue;let r=a[i],g=a[i+1],b=a[i+2];
  if(r>90&&g<r*.5&&b<r*.55){const l=(r*.5+g*.3+b*.2)/150;r=cr*l;g=cg*l;b=cb*l}
  if(tk){r=r*(1-tk)+tr*tk;g=g*(1-tk)+tg*tk;b=b*(1-tk)+tb*tk}
  a[i]=Math.min(255,r*dark);a[i+1]=Math.min(255,g*dark);a[i+2]=Math.min(255,b*dark)}
 x.putImageData(d,0,0);return c}
function whiteOf(img){const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);return c}
const LOOKS={
 pirate:{src:'pirate-sword.png',hand:[222,186],h:150,cloth:[38,150,160],weapon:'cutlass'},
 gunner:{src:'pirate-gun.png',hand:[250,136],h:146,cloth:[38,150,160],weapon:'pistol'},
 duelist:{src:'pirate-sword.png',hand:[222,186],h:152,cloth:[120,70,190],tint:[40,30,80,.12],weapon:'rapier'},
 bomber:{src:'pirate-gun.png',hand:[250,136],h:144,cloth:[200,110,40],tint:[60,40,20,.1],weapon:'bomb'},
 brute:{src:'pirate-sword.png',hand:[222,186],h:196,cloth:[70,110,60],tint:[30,40,30,.18],dark:.92,weapon:'anchor'}};
function cutlass(c,len){const g=c.createLinearGradient(0,-4,0,4);g.addColorStop(0,'#f4f8ff');g.addColorStop(.5,'#b9c6d6');g.addColorStop(1,'#6d7a8c');c.fillStyle=g;c.beginPath();c.moveTo(4,-3);c.quadraticCurveTo(len*.6,-6,len,-14);c.quadraticCurveTo(len*.55,4,4,4);c.closePath();c.fill();c.strokeStyle='#2a2f38';c.lineWidth=1.2;c.stroke();c.fillStyle='#d9a536';c.fillRect(-4,-6,8,12);c.fillStyle='#4a2c16';c.fillRect(-16,-3,13,6)}
function rapier(c,len){c.strokeStyle='#dfe8f4';c.lineWidth=3;c.beginPath();c.moveTo(6,0);c.lineTo(len,-2);c.stroke();c.strokeStyle='#7d8a9c';c.lineWidth=1;c.beginPath();c.moveTo(6,1.5);c.lineTo(len,-.5);c.stroke();c.strokeStyle='#d9a536';c.lineWidth=2.5;c.beginPath();c.arc(2,0,8,-1.6,1.6);c.stroke();c.fillStyle='#4a2c16';c.fillRect(-14,-3,13,6)}
function pistol(c){c.fillStyle='#4a2c16';c.beginPath();c.moveTo(-6,-2);c.lineTo(4,-4);c.lineTo(2,14);c.lineTo(-8,14);c.closePath();c.fill();c.fillStyle='#8d8f96';c.fillRect(0,-6,30,6);c.fillStyle='#d9a536';c.fillRect(-2,-7,6,9)}
function bombIn(c,t){c.fillStyle='#16181e';c.beginPath();c.arc(8,-4,11,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.25)';c.beginPath();c.arc(4,-8,4,0,TAU);c.fill();c.strokeStyle='#8a6a3e';c.lineWidth=2;c.beginPath();c.moveTo(14,-12);c.quadraticCurveTo(20,-20,18,-24);c.stroke();c.fillStyle=Math.sin(t*30)>0?'#ffe38a':'#ff8a3a';c.beginPath();c.arc(18,-25,3.5,0,TAU);c.fill()}
function anchor(c){c.strokeStyle='#3d434e';c.lineCap='round';c.lineWidth=9;c.beginPath();c.moveTo(-6,0);c.lineTo(78,0);c.stroke();c.lineWidth=7;c.beginPath();c.arc(70,0,24,-1.2,1.2);c.stroke();c.strokeStyle='#8c94a2';c.lineWidth=2;c.beginPath();c.moveTo(-4,-3);c.lineTo(76,-3);c.stroke();c.fillStyle='#3d434e';for(const s of[-1,1]){c.beginPath();c.moveTo(70+24*Math.cos(1.2*s),24*Math.sin(1.2*s));c.lineTo(62+30*Math.cos(1.2*s),30*Math.sin(1.2*s)*1.15);c.lineTo(80+20*Math.cos(1.2*s),20*Math.sin(1.2*s));c.fill()}c.lineWidth=6;c.strokeStyle='#3d434e';c.beginPath();c.moveTo(0,-14);c.lineTo(0,14);c.stroke()}
/* painted cut-out cast (tools/enemy_cast.py → assets/enemies/level04, posed by enemy-rig.js): five different smugglers */
const RIG={
 pirate:{cast:'level04',char:'pirate',grip:.15,windArm:-2.6,swingArm:1.4},
 gunner:{cast:'level04',char:'gunner',weapon:'gun',twoHand:true,stateOf:e=>e.state==='idle'&&e.cool>1.1&&e.alert?'reload':e.state},
 bomber:{cast:'level04',char:'bomber',fam:{windup:'wind',release:'throwing'},windArm:-2.8,hideWeapon:e=>e.state==='release'||e.state==='idle'&&e.cool>2.2},
 duelist:{cast:'level04',char:'duelist',grip:-.1,fam:{guard:'enGarde',windup:'lungeWind',lunge:'thrust',tired:'stun',riposte:'wind',strike:'swing'},stars:e=>e.state==='tired'},
 brute:{cast:'level04',char:'brute',scale:1.28,twoHand:true,grip:.2,step:30,bar:90,barCol:'#ff9a3a',fam:{windup:'wind',swing:'swing',slamUp:'slamWind',stuck:'planted'},windArm:-2.2,swingArm:1.25,stars:e=>e.state==='stuck'}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — painted fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig;if(!R||!run.rigCast||!Rig)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;const st=e.state,sc=R.scale||1;
 c.save();c.globalAlpha=alpha*(e.spawnT>0?clamp(1-e.spawnT*1.5,0,1):1);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 if(!e.dead){
  if(st==='windup'||st==='riposte')run.fx.glow(c,e.cx+e.dir*26*sc,e.floor-92*sc,46+24*(e.type==='duelist'?1:.8),e.type==='duelist'?'rgba(200,220,255,':'rgba(255,80,50,',.45);
  if(st==='guard'){c.strokeStyle='rgba(205,225,255,.65)';c.lineWidth=3;c.beginPath();c.arc(e.cx+e.dir*18,e.floor-88,46,e.dir>0?-1:Math.PI-1,e.dir>0?1:Math.PI+1);c.stroke()}
  if(st==='slamUp'){const k=clamp(1-e.timer,0,1);c.strokeStyle='rgba(255,70,40,'+(.3+.5*k)+')';c.lineWidth=4;c.setLineDash([12,10]);c.beginPath();c.ellipse(e.cx,e.floor,120+260*k,16,0,0,TAU);c.stroke();c.setLineDash([])}}
 const o=Rig.draw(run,c,e,R);
 if(o&&!e.dead){
  if(st==='draw'&&e.aim){const k=1-e.timer/.85;c.strokeStyle='rgba(255,70,50,'+(.15+.45*k)+')';c.setLineDash([8,8]);c.lineWidth=2;c.beginPath();c.moveTo(o.muzzle[0],o.muzzle[1]);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.setLineDash([]);run.fx.glow(c,o.muzzle[0],o.muzzle[1],16+14*k,'rgba(255,220,120,',.5+.4*k)}
  if(e.type==='bomber'&&st==='windup'){const fl=Math.sin(run.time*30)>0;run.fx.glow(c,o.hand[0],o.hand[1]-14,14,fl?'rgba(255,227,138,':'rgba(255,138,58,',.9)}
  if(st==='strike'||st==='swing'){const sw=st==='swing',k=1-e.timer/(sw?.32:.22);c.globalAlpha=alpha*(1-k)*.85;c.strokeStyle='rgba(255,240,220,.9)';c.lineWidth=sw?16:9;c.lineCap='round';c.beginPath();const r0=sw?110:66,ax=e.cx+e.dir*10,ay=e.floor-(sw?120:90);
   if(e.dir>0)c.arc(ax,ay,r0,-1.9,-1.9+2.5*Math.min(1,k*2));else c.arc(ax,ay,r0,Math.PI+1.9-2.5*Math.min(1,k*2),Math.PI+1.9);c.stroke();c.globalAlpha=alpha}
  if(st==='lunge'){c.globalAlpha=.5;c.strokeStyle='#e8f0ff';c.lineWidth=3;for(let i=0;i<3;i++){const y=e.floor-80+i*12,x0=e.cx-e.dir*(40+i*18);c.beginPath();c.moveTo(x0,y);c.lineTo(x0-e.dir*50,y);c.stroke()}c.globalAlpha=alpha}
  Rig.hud(c,run,e,o,R)}
 c.restore();c.imageSmoothingEnabled=false;return true}

function drawSmuggler(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const sk=run.looks?.[e.type];if(!sk)return false;
 const t=run.time,s=sk.h/sk.img.height,iw=sk.img.width*s,ih=sk.img.height*s;
 const alpha=e.dead?clamp(1-(e.deadT-.5)/.7,0,1):1;if(alpha<=0)return true;
 let rot=0,dx=0,dy=0,sx=1,sy=1,wa=-.9,flash=e.flash>0?.85:0;
 const st=e.state;
 if(e.spawnT>0){dy=-e.spawnT*420;rot=-.1}
 else if(e.dead){rot=-Math.min(1.35,e.deadT*3.2);dy=-Math.sin(-rot)*iw*.42;dx=-8} // keep the toppled body on the floor (pivot is the feet)
 else if(e.hurtT>0){rot=-.16;dx=-6}
 else if(st==='windup'||st==='draw'||st==='slamUp'){const k=st==='slamUp'?1-e.timer:st==='draw'?1-e.timer/.85:1-e.timer/(e.type==='brute'?.7:e.type==='bomber'?.65:.45);rot=-.1*k;dx=-6*k;wa=-2.3*k-.9*(1-k);if(st==='slamUp'){wa=-2.6;dy=-Math.sin(clamp(k,0,1)*Math.PI)*10}}
 else if(st==='strike'||st==='swing'){const k=1-e.timer/(st==='swing'?.32:.22);rot=.14;dx=10+8*k;wa=-2.2+2.9*Math.min(1,k*2.2)}
 else if(st==='lunge'){rot=.22;dx=18;wa=-.05;sx=1.06}
 else if(st==='guard'){rot=-.04;dx=-4;wa=-.35}
 else if(st==='tired'||st==='stuck'){rot=.12;dy=4;wa=st==='stuck'?.9:.5;sy=.97}
 else if(st==='release'){dx=-5;rot=-.05;wa=-.4}
 else if(e.anim==='walk'){const b=Math.abs(Math.sin(t*9+e.home));dy=-b*4;rot=Math.sin(t*9+e.home)*.045;sy=1+(1-b)*.03}
 else sy=1+Math.sin(t*2.4+e.home)*.015;
 c.save();c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(e.cx,e.floor+1,sk.h*.22,7,0,0,TAU);c.fill();c.restore();
 // telegraphs
 if(!e.dead&&(st==='windup'||st==='riposte')){const k=e.type==='duelist'?1:.8;run.fx.glow(c,e.cx+e.dir*26,e.floor-ih*.55,46+24*k,e.type==='duelist'?'rgba(200,220,255,':'rgba(255,80,50,',.45)}
 if(!e.dead&&st==='guard'){c.save();c.strokeStyle='rgba(205,225,255,.65)';c.lineWidth=3;c.beginPath();c.arc(e.cx+e.dir*18,e.floor-ih*.55,46,e.dir>0?-1:Math.PI-1,e.dir>0?1:Math.PI+1);c.stroke();c.restore()}
 if(!e.dead&&st==='slamUp'){const k=clamp(1-e.timer,0,1);c.save();c.strokeStyle='rgba(255,70,40,'+(.3+.5*k)+')';c.lineWidth=4;c.setLineDash([12,10]);c.beginPath();c.ellipse(e.cx,e.floor,120+260*k,16,0,0,TAU);c.stroke();c.restore()}
 if(!e.dead&&st==='draw'&&e.aim){const k=1-e.timer/.85;c.save();c.strokeStyle='rgba(255,70,50,'+(.15+.45*k)+')';c.setLineDash([8,8]);c.lineWidth=2;c.beginPath();c.moveTo(e.cx+e.dir*46,e.y+e.h*.44);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.restore()}
 c.save();c.translate(Math.round(e.cx+dx*e.dir),Math.round(e.floor+dy));if(e.dir<0)c.scale(-1,1);c.rotate(rot);c.scale(sx,sy);c.globalAlpha=alpha*(e.spawnT>0?clamp(1-e.spawnT*1.5,0,1):1);
 c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const ox=-iw*.5,oy=-ih;E.drawPaintedWalk(c,sk.img,ox,oy,iw,ih,e,t);
 if(flash){c.globalAlpha=alpha*flash;c.drawImage(sk.white,ox,oy,iw,ih);c.globalAlpha=alpha}
 const hx=ox+sk.hand[0]*s,hy=oy+sk.hand[1]*s;
 c.save();c.translate(hx,hy);
 if(sk.weapon==='cutlass'){c.rotate(wa);cutlass(c,66)}
 else if(sk.weapon==='rapier'){c.rotate(st==='lunge'?0:st==='guard'?-.7:wa*.8);rapier(c,84)}
 else if(sk.weapon==='pistol'){c.rotate(st==='draw'||st==='release'?0:.35);pistol(c)}
 else if(sk.weapon==='bomb'){if(st!=='release'){c.rotate(st==='windup'?-2.2:-.3);bombIn(c,t)}}
 else if(sk.weapon==='anchor'){c.rotate(st==='swing'?wa+.6:st==='stuck'?1.3:st==='slamUp'?-2.6:wa*.7);anchor(c)}
 c.restore();
 if((st==='strike'||st==='swing')&&!e.dead){const k=1-e.timer/(st==='swing'?.32:.22);c.globalAlpha=alpha*(1-k)*.9;c.strokeStyle='rgba(255,240,220,.9)';c.lineWidth=st==='swing'?16:10;c.lineCap='round';c.beginPath();c.arc(hx-10,hy-6,st==='swing'?110:70,-1.6,-1.6+2.4*Math.min(1,k*2));c.stroke()}
 if(st==='lunge'&&!e.dead){c.globalAlpha=.5;c.strokeStyle='#e8f0ff';c.lineWidth=3;for(let i=0;i<3;i++){c.beginPath();c.moveTo(-40-i*18,-ih*.5+i*12);c.lineTo(-90-i*18,-ih*.5+i*12);c.stroke()}}
 c.restore();c.imageSmoothingEnabled=false;
 if(!e.dead&&e.hp<e.max&&!(e.spawnT>0)){const bw=e.type==='brute'?90:60,by=e.floor-ih-16;c.fillStyle='#0b0f18cc';c.beginPath();c.roundRect(e.cx-bw/2-2,by-2,bw+4,10,5);c.fill();c.fillStyle=e.type==='brute'?'#ff9a3a':'#e8484f';c.beginPath();c.roundRect(e.cx-bw/2,by,bw*e.hp/e.max,6,3);c.fill()}
 if(st==='tired'||st==='stuck')for(let i=0;i<3;i++){const a=t*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,e.floor-ih-8+Math.sin(a)*4,5,5)}
 return true}

/* ------------------------------------------------------------------ terrain painters */
function pat(run,c,name){run.l4pat??=new Map();let m=run.l4pat.get(c);if(!m){m={};run.l4pat.set(c,m)}if(!m[name]){const im=run.images[A4+name];m[name]=im?c.createPattern(im,'repeat'):'#3a4466'}return m[name]}
function deckStrip(run,c,x0,x1,y,tint){
 const im=run.images[A4+'wood-deck.png'];if(!im)return;const tw=im.width;let x=x0;
 while(x<x1){const sx=((x%tw)+tw)%tw,seg=Math.min(x1-x,tw-sx);c.drawImage(im,sx,0,seg,im.height,x,y,seg,im.height);x+=seg}
 if(tint){c.fillStyle=tint;c.fillRect(x0,y,x1-x0,im.height)}}
function paintRock(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();
 c.fillStyle=pat(run,c,'rock-wet.webp');c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 const g=c.createLinearGradient(0,s.y+10,0,s.y+260);g.addColorStop(0,'rgba(10,18,40,0)');g.addColorStop(1,'rgba(4,8,20,.78)');c.fillStyle=g;c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 // moon rim on the left edge, shadow on the right
 const rl=c.createLinearGradient(s.x,0,s.x+26,0);rl.addColorStop(0,'rgba(170,200,255,.35)');rl.addColorStop(1,'rgba(170,200,255,0)');c.fillStyle=rl;c.fillRect(s.x,s.y,26,Math.min(s.h,300));
 const rr=c.createLinearGradient(s.x+s.w-30,0,s.x+s.w,0);rr.addColorStop(0,'rgba(0,0,0,0)');rr.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=rr;c.fillRect(s.x+s.w-30,s.y,30,Math.min(s.h,300));
 c.restore();
 const cap=run.images[A4+'rock-cap.png'];if(cap){const tw=cap.width;let x=Math.max(s.x,L-2);const end=Math.min(s.x+s.w,R+2);while(x<end){const sx=((x%tw)+tw)%tw,seg=Math.min(end-x,tw-sx);c.drawImage(cap,sx,0,seg,cap.height,x,s.y-4,seg,cap.height);x+=seg}}
 return true}
function paintDock(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2);if(x1<=x0)return true;
 const post=pat(run,c,'wood-post.png'),bottom=Math.min(1100,B+40);
 // pilings into the sea, cross braces, then the deck
 for(let px=Math.ceil((s.x+16)/120)*120-14;px<s.x+s.w-10;px+=120){if(px+30<L||px>R)continue;
  c.save();c.translate(px,0);c.fillStyle=post;c.fillRect(0,s.y+30,28,bottom-s.y-30);c.restore();
  const wet=c.createLinearGradient(0,770,0,840);wet.addColorStop(0,'rgba(20,40,40,0)');wet.addColorStop(1,'rgba(14,40,46,.65)');c.fillStyle=wet;c.fillRect(px,770,28,bottom-770);
  c.fillStyle='rgba(200,220,210,.35)';c.fillRect(px,792,28,3)}
 c.strokeStyle='#4a2c16';c.lineWidth=7;for(let px=Math.ceil((s.x+16)/120)*120-14;px+120<s.x+s.w;px+=120){if(px+150<L||px>R)continue;c.beginPath();c.moveTo(px+28,s.y+40);c.lineTo(px+120,s.y+110);c.stroke()}
 deckStrip(run,c,x0,x1,s.y);
 c.fillStyle='rgba(0,0,0,.35)';c.fillRect(x0,s.y+44,x1-x0,8);
 return true}
function paintHull(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();
 c.fillStyle=pat(run,c,'hull-side.webp');c.fillRect(x0,s.y+40,x1-x0,bottom-s.y-40);
 const g=c.createLinearGradient(0,s.y+40,0,s.y+300);g.addColorStop(0,'rgba(0,0,0,.1)');g.addColorStop(1,'rgba(4,8,18,.75)');c.fillStyle=g;c.fillRect(x0,s.y+40,x1-x0,bottom-s.y-40);
 // gunports with a warm glow
 for(let gx=Math.ceil((s.x+100)/260)*260;gx<s.x+s.w-60;gx+=260){if(gx<L-60||gx>R+60)continue;c.fillStyle='#1a0f08';c.fillRect(gx-22,s.y+90,44,34);c.fillStyle='rgba(255,170,70,.55)';c.fillRect(gx-18,s.y+94,36,26);c.strokeStyle='#8a5a2c';c.lineWidth=3;c.strokeRect(gx-22,s.y+90,44,34)}
 c.restore();
 deckStrip(run,c,x0,x1,s.y,'rgba(30,14,6,.28)');
 c.fillStyle='#c8a26a';c.fillRect(x0,s.y+60,x1-x0,4);c.fillStyle='rgba(0,0,0,.4)';c.fillRect(x0,s.y+64,x1-x0,4);
 return true}
function paintScaffold(run,c,l){
 const crow=l.y<420&&l.x>9000;
 if(crow){// crow's nest platform on the mast
  c.fillStyle='#3a220f';c.fillRect(l.x+l.w/2-9,l.y,18,560-l.y);
  const g=c.createLinearGradient(0,l.y,0,l.y+30);g.addColorStop(0,'#a8743f');g.addColorStop(1,'#4a2c16');c.fillStyle=g;c.beginPath();c.moveTo(l.x,l.y);c.lineTo(l.x+l.w,l.y);c.lineTo(l.x+l.w-20,l.y+30);c.lineTo(l.x+20,l.y+30);c.fill();
  deckStrip(run,c,l.x,l.x+l.w,l.y-2,'rgba(0,0,0,.1)');return true}
 const leg=Math.min(240,(run.solids.find(s=>l.x+l.w>s.x&&l.x<s.x+s.w&&s.y>l.y)?.y??l.y+200)-l.y);
 const post=pat(run,c,'wood-post.png');
 for(const px of[l.x+8,l.x+l.w-34]){c.save();c.translate(px,0);c.fillStyle=post;c.fillRect(0,l.y+24,26,leg-24);c.restore()}
 c.strokeStyle='#5a381e';c.lineWidth=6;c.beginPath();c.moveTo(l.x+30,l.y+30);c.lineTo(l.x+l.w-30,l.y+Math.min(leg,100));c.stroke();
 deckStrip(run,c,l.x,l.x+l.w,l.y);c.fillStyle='rgba(0,0,0,.3)';c.fillRect(l.x,l.y+44,l.w,6);return true}
function drawPlank(run,c,b){
 const shake=b.state==='shake'?(Math.random()-.5)*5:0,x=b.x+shake,y=b.y+(b.y-b.baseY);
 c.save();c.translate(x,y);if(b.state==='fall')c.rotate((b.y-b.baseY)*.004);
 deckStrip(run,c,0,b.w,0,b.state==='shake'?'rgba(255,90,40,.18)':null);
 c.strokeStyle='#1a0e06';c.lineWidth=2;c.beginPath();c.moveTo(b.w*.3,2);c.lineTo(b.w*.42,14);c.lineTo(b.w*.35,22);c.moveTo(b.w*.7,0);c.lineTo(b.w*.62,12);c.stroke();
 c.fillStyle='#3a2410';c.fillRect(b.w-8,16,8,28);c.restore();return true}
function drawMover(run,c,m){
 const x=m.x,y=m.y,w=m.w;
 if(m.look==='raft'){// barrel raft bobbing at the waterline
  for(let i=0;i<3;i++){const bx=x+10+i*(w-20)/2.6;c.fillStyle='#5a3418';c.beginPath();c.ellipse(bx+18,y+30,18,22,0,0,TAU);c.fill();c.fillStyle='#8a8f96';c.fillRect(bx+2,y+18,32,4);c.fillRect(bx+2,y+38,32,4)}
  deckStrip(run,c,x,x+w,y);
  c.fillStyle='rgba(220,240,255,.35)';c.fillRect(x-6,792+Math.sin(run.time*3)*2,w+12,3);return true}
 // cargo lift: a slatted pallet hanging from chains to a pulley above
 const top=Math.min(...m.range)-200;c.strokeStyle='#8c94a2';c.lineWidth=3;c.setLineDash([6,4]);
 for(const cx of[x+10,x+w-10]){c.beginPath();c.moveTo(cx,top);c.lineTo(cx,y);c.stroke()}c.setLineDash([]);
 c.fillStyle='#2b2f38';c.beginPath();c.arc(x+w/2,top,16,0,TAU);c.fill();c.strokeStyle='#c8a26a';c.lineWidth=3;c.stroke();
 deckStrip(run,c,x,x+w,y);c.fillStyle='rgba(0,0,0,.3)';c.fillRect(x,y+44,w,5);return true}

/* ------------------------------------------------------------------ props */
function drawCrate(c,x,y,crack){
 const s=56,X=x-28,Y=y-56;const g=c.createLinearGradient(X,Y,X,Y+s);g.addColorStop(0,'#b07a44');g.addColorStop(1,'#6a4220');c.fillStyle=g;c.fillRect(X,Y,s,s);
 c.strokeStyle='#3e2410';c.lineWidth=5;c.strokeRect(X+2.5,Y+2.5,s-5,s-5);c.lineWidth=4;c.beginPath();c.moveTo(X+5,Y+5);c.lineTo(X+s-5,Y+s-5);c.stroke();
 c.fillStyle='rgba(255,230,180,.25)';c.fillRect(X,Y,s,3);c.fillStyle='#8c94a2';for(const[a,b]of[[X+4,Y+4],[X+s-8,Y+4],[X+4,Y+s-8],[X+s-8,Y+s-8]])c.fillRect(a,b,4,4);
 if(crack){c.strokeStyle='#1a0e06';c.lineWidth=2;c.beginPath();c.moveTo(X+18,Y+8);c.lineTo(X+30,Y+26);c.lineTo(X+22,Y+44);c.stroke()}}
function drawKeg(c,x,y,t){
 const X=x-22,Y=y-58;const g=c.createLinearGradient(X,0,X+44,0);g.addColorStop(0,'#5e1a14');g.addColorStop(.5,'#b33a2a');g.addColorStop(1,'#4a120e');c.fillStyle=g;c.beginPath();c.roundRect(X,Y,44,58,10);c.fill();
 c.fillStyle='#8c94a2';c.fillRect(X,Y+10,44,5);c.fillRect(X,Y+43,44,5);c.fillStyle='#f4e4c0';c.font='bold 16px Georgia';c.textAlign='center';c.fillText('☠',x,Y+35);
 c.fillStyle='rgba(255,120,60,'+(.12+.1*Math.sin(t*4))+')';c.beginPath();c.ellipse(x,y-28,34,40,0,0,TAU);c.fill()}
function drawLantern(run,c,x,y,t){
 const sw=Math.sin(t*1.3+x)*.06;c.strokeStyle='#3a2a1a';c.lineWidth=5;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-120);c.lineTo(x+26,y-120);c.stroke();
 c.save();c.translate(x+26,y-120);c.rotate(sw);c.strokeStyle='#2a1e14';c.lineWidth=2;c.beginPath();c.moveTo(0,0);c.lineTo(0,10);c.stroke();
 c.fillStyle='#3c2a1a';c.fillRect(-11,10,22,5);c.fillRect(-11,40,22,5);const f=.85+.15*Math.sin(t*9+x);c.fillStyle='rgba(255,'+Math.round(196*f)+',96,1)';c.fillRect(-9,15,18,25);c.strokeStyle='#2a1e14';c.lineWidth=2;c.strokeRect(-9,15,18,25);c.beginPath();c.moveTo(0,15);c.lineTo(0,40);c.stroke();c.restore();
 run.fx.glow(c,x+26,y-92,46,'rgba(255,190,90,',.42)}
function drawNet(c,x,y){c.save();c.strokeStyle='rgba(150,130,96,.85)';c.lineWidth=1.5;for(let i=0;i<7;i++){c.beginPath();c.moveTo(x+i*12,y-110);c.quadraticCurveTo(x+i*12+8,y-60,x+i*14-6,y-4);c.stroke()}for(let j=0;j<6;j++){c.beginPath();c.moveTo(x-2,y-100+j*18);c.quadraticCurveTo(x+40,y-94+j*18,x+82,y-102+j*18);c.stroke()}c.fillStyle='#4a2c16';c.fillRect(x-6,y-118,96,8);c.restore()}
function drawWheel(run,c,w,t){
 const s=run.state,ang=s.wheelAng||0;c.save();c.fillStyle='#3a2a1a';c.fillRect(w.x-8,w.y-150,16,150);c.translate(w.x,w.y-140);c.rotate(ang);
 c.strokeStyle='#6a4a2a';c.lineWidth=8;c.beginPath();c.arc(0,0,42,0,TAU);c.stroke();c.lineWidth=6;for(let i=0;i<6;i++){c.beginPath();c.moveTo(0,0);c.lineTo(Math.cos(i*TAU/6)*54,Math.sin(i*TAU/6)*54);c.stroke()}
 c.fillStyle='#c8a26a';c.beginPath();c.arc(0,0,9,0,TAU);c.fill();c.restore();
 if(!s.drained){run.fx.glow(c,w.x,w.y-140,70,'rgba(120,230,255,',.25+.15*Math.sin(t*4));c.fillStyle='#ffe3a6';c.font='800 15px Arial';c.textAlign='center';c.fillText('⟳ '+(s.wheel||0)+'/3',w.x,w.y-206)}}
function drawSpikes(run,c,sp){
 let rise=1;if(sp.kind==='trap'){const ph=(run.spikeT+sp.offset)%sp.cycle;rise=ph<sp.up?1:ph>sp.cycle-sp.warn?.25:0;
  if(ph>sp.cycle-sp.warn){c.fillStyle='rgba(255,60,40,.35)';c.fillRect(sp.x,sp.y-6,sp.w,6)}}
 c.fillStyle='#2a1a10';c.fillRect(sp.x,sp.y-6,sp.w,8);
 for(let x=sp.x+4;x<sp.x+sp.w-6;x+=16){const h=30*rise;if(h<2)continue;c.fillStyle='#7e8694';c.beginPath();c.moveTo(x,sp.y-4);c.lineTo(x+7,sp.y-4-h);c.lineTo(x+14,sp.y-4);c.fill();c.fillStyle='#d8dee8';c.fillRect(x+6,sp.y-4-h,2,h*.7)}
 if(rise>.5)run.fx.glow(c,sp.x+sp.w/2,sp.y-14,sp.w*.6,'rgba(255,70,40,',.18)}

/* ------------------------------------------------------------------ level */
const ZONES=['shore','dock','grotto','ship'],PLATES={shore:'plate-shore.webp',dock:'plate-dock.webp',grotto:'plate-grotto.webp',ship:'plate-ship.webp'},DARK={shore:.28,dock:.5,grotto:.62,ship:.34},CAVE={shore:0,dock:.9,grotto:1,ship:.45};
const def={
 id:4,base:BASE,config:BASE+'level-04.json',
 images:[...Object.values(PLATES).map(n=>A4+n),A4+'mid-cave.png',A4+'rock-wet.webp',A4+'rock-cap.png',A4+'wood-deck.png',A4+'wood-post.png',A4+'hull-side.webp',A2+'pirate-sword.png',A2+'pirate-gun.png'],
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 initialState:()=>({broken:[],blown:[],drained:false,wheel:0,wave:0,cleared:false}),
 persist(run){const s=run.state;return{broken:[...s.broken],blown:[...s.blown],drained:s.drained,wheel:s.drained?3:0,wave:0,cleared:s.cleared}},
 async prepare(run){
  run.looks={};for(const[k,v]of Object.entries(LOOKS)){const src=run.images[A2+v.src];if(!src)continue;const img=recolor(src,v);run.looks[k]={...v,img,white:whiteOf(img)}}
  run.lightBuf=document.createElement('canvas');
  await loadRig(run,'level04');
 },
 setup(run){
  const c=run.cfg,s=run.state;
  run.spikeT=0;run.banner={t:4.5,text:text(run.lang,'title')};run.bombs=[];run.rollers=[];run.waves=[];run.rollT=1;run.drownT=0;run.blasts=[];
  run.tideY=c.sea;run.tideOn=false;run.arenaOn=false;run.wall=0;run.gate=s.cleared?0:1;run.waveDelay=0;
  run.crates=c.crates.filter(k=>!s.broken.includes(k.id)).map(k=>({...k,hp:2,shake:0}));
  run.powder=c.powder.filter(k=>!s.blown.includes(k.id)).map(k=>({...k}));
  // wave foes wait off-stage until their wave starts
  run.waveFoes=run.enemies.filter(e=>c.enemies.find(d=>d.id===e.id)?.wave);
  run.enemies=run.enemies.filter(e=>!run.waveFoes.includes(e));
  run.motes=Array.from({length:34},(_,i)=>({x:(i*173)%1280,y:(i*97)%H,s:.3+(i%5)*.15}));
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hintQueue=resumed?[]:['hint4','hint3'];run.hintT=6;run.hintsAt={d1:'hint1',b1:'hint2',a7:'hint5'}},
 music(run){run.audio.playMusic(run.arenaOn&&!run.state.cleared?'battle':'cove',1.4)},
 zone(run){const x=run.p.x;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones.at(-1)},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 objectiveHud(run){const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k);
  if(z==='shore')return t('objShore');if(z==='dock')return t('objDock');
  if(z==='grotto'){if(!s.drained&&run.tideOn)return run.p.x>7100?t('objWheel'):t('objTide');return t('objGrotto')}
  if(s.cleared)return t('objExit');if(run.arenaOn)return t('objWave').replace('{n}',Math.max(1,s.wave));return t('objShip')},
 dynamicSolids(run){const a=run.cfg.arena,list=[];
  for(const k of run.crates)list.push({x:k.x-28,y:k.y-56,w:56,h:56,style:'crate'});
  if(run.wall>.05)list.push({x:a.wallX,y:560-280*run.wall,w:30,h:280*run.wall,style:'gate'});
  if(run.gate>.05)list.push({x:a.gateX,y:560-280*run.gate,w:34,h:280*run.gate,style:'gate'});
  return list},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg,a=c.arena;
  run.spikeT+=dt;run.banner.t=Math.max(0,run.banner.t-dt);
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:3.8,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-p.x)<520){run.banner={t:4,text:text(run.lang,h),small:true};delete run.hintsAt[id]}}
  for(const k of run.crates)k.shake=Math.max(0,k.shake-dt);
  // tide: rises once the hero enters the grotto, until the sluice wheel is struck three times
  if(!s.drained&&!run.tideOn&&p.x>c.tide.from&&p.x<c.tide.wheel.x+600&&!p.dead){run.tideOn=true;run.banner={t:2.6,text:text(run.lang,'tide')};run.audio.play('rumble',{vol:.8});run.camera.shake=5}
  if(run.tideOn&&!s.drained)run.tideY=Math.max(c.tide.top,run.tideY-c.tide.speed*dt);
  else run.tideY=Math.min(c.sea,run.tideY+(s.drained?60:120)*dt);
  s.wheelAng=(s.wheelAng||0)+(s.drained?dt*.4:0);
  // rolling cargo barrels on the harbour quay
  const r=c.rollers;
  if(p.x>r.from&&p.x<r.to&&!p.dead){run.rollT-=dt;if(run.rollT<=0){run.rollT=r.every;run.rollers.push({x:r.spawnX,y:r.y,vy:0,rot:0,alive:true});run.audio.at('rumble',r.spawnX,{vol:.4,rate:1.6})}}
  for(const b of run.rollers){b.x-=r.speed*dt;b.rot-=r.speed*dt/22;if(b.x<r.endX){b.vy+=1300*dt;b.y+=b.vy*dt}
   if(b.alive&&b.y<r.y+5&&!p.dead&&overlap({x:b.x-22,y:b.y-44,w:44,h:44},p)){b.alive=false;run.hurtPlayer(16,-1,null,240);run.fx.burst(b.x,b.y-22,'#c08a50',14);run.audio.at('wallBreak',b.x,{vol:.6,rate:1.4})}
   if(b.alive&&b.y>c.sea&&!b.splashed){b.splashed=true;run.fx.splash?.(b.x,c.sea,5);run.audio.at('fall',b.x,{vol:.4})}}
  run.rollers=run.rollers.filter(b=>b.alive&&b.y<1100);
  // bombs: ballistic, land, fuse, explode; struck bombs fly back
  for(const b of run.bombs){b.t+=dt;
   if(!b.rest){b.vy+=900*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
    const g=def.groundAt(run,b.x,b.y-14,b.y+4);if(g!==null&&b.vy>0){b.y=g;b.rest=true;b.vx=0;b.vy=0;run.audio.at('land',b.x,{vol:.4,rate:1.6})}
    if(b.owner==='hero')for(const e of run.enemies)if(!e.dead&&overlap({x:b.x-12,y:b.y-12,w:24,h:24},e.hurtBox())){b.fuse=0}
    if(b.y>c.sea+20){b.dead=true;run.fx.splash?.(b.x,c.sea,4)}}
   b.fuse-=dt;if(b.fuse<=0&&!b.dead){b.dead=true;def.explode(run,b.x,b.y-10,96,b.owner==='hero'?48:30,22)}}
  run.bombs=run.bombs.filter(b=>!b.dead);
  // brute shockwaves along the ground
  for(const w of run.waves){w.x+=w.vx*dt;w.life-=dt;
   if(!w.hit&&!p.dead&&Math.abs(p.x+p.w/2-w.x)<26&&p.y+p.h>w.y-34&&p.y+p.h<w.y+10){w.hit=true;run.hurtPlayer(18,Math.sign(w.vx),null,260,true)}}
  run.waves=run.waves.filter(w=>w.life>0);
  for(const b of run.blasts)b.t+=dt;run.blasts=run.blasts.filter(b=>b.t<.6);
  // ship arena: seal the deck, three waves, then the gate opens
  if(!s.cleared&&!run.arenaOn&&p.x>a.from+60&&!p.dead&&p.y+p.h<=600){run.arenaOn=true;run.waveDelay=1.2;s.wave=Math.max(s.wave,0);run.audio.play('gateSlam',{vol:.9});run.camera.shake=6;def.music(run)}
  run.wall+=((run.arenaOn&&!s.cleared?1:0)-run.wall)*Math.min(1,dt*6);
  if(run.arenaOn&&!s.cleared){
   const alive=run.enemies.filter(e=>!e.dead&&run.cfg.enemies.find(d=>d.id===e.id)?.wave);
   if(!alive.length){run.waveDelay-=dt;if(run.waveDelay<=0){
    let next=s.wave+1,foes=[];while(next<=3){foes=run.waveFoes.filter(e=>c.enemies.find(d=>d.id===e.id).wave===next&&!run.killed.has(e.id));if(foes.length)break;next++}
    if(next>3){s.cleared=true;run.arenaOn=false;run.banner={t:3,text:text(run.lang,'cleared')};run.audio.play('gateOpen',{vol:1});def.music(run);run.save()}
    else{s.wave=next;run.banner={t:2.2,text:text(run.lang,'wave').replace('{n}',next)};run.audio.play('bossIntro',{vol:.5});
     for(const e of foes){e.spawnT=.8;e.alert=true;run.waveFoes=run.waveFoes.filter(q=>q!==e);run.enemies.push(e)}run.waveDelay=1.6}}}}
  run.gate+=((s.cleared?0:1)-run.gate)*Math.min(1,dt*(s.cleared?1.4:6));
  if(s.cleared&&run.gate<.1&&p.x+p.w/2>a.exitX&&!p.dead&&run.phase==='play')
   run.complete({secrets:['c3','c4'].filter(id=>run.opened.has(id)).length,secretTotal:2});
 },
 groundAt(run,x,y0,y1){let best=null;for(const s of run.solidList().concat(run.surfaces()))if(x>=s.x&&x<=s.x+s.w&&s.y>=y0&&s.y<=y1&&(best===null||s.y<best))best=s.y;return best},
 throwBomb(run,e){
  const p=run.p,sx=e.cx+e.dir*30,sy=e.y+e.h*.3,tx=p.x+p.w/2+p.vx*.35,ty=p.y+p.h,T=clamp(Math.abs(tx-sx)/420,.6,1.15);
  run.bombs.push({x:sx,y:sy,vx:(tx-sx)/T,vy:(ty-sy-.5*900*T*T)/T,t:0,fuse:T+.85,rest:false,owner:'enemy'});run.audio.at('throw',e.cx,{rate:.8})},
 slam(run,e){
  run.camera.shake=10;run.audio.at('bossSlam',e.cx,{vol:1});run.fx.burst(e.cx,e.floor,'#c8b090',20);
  for(const d of[-1,1])run.waves.push({x:e.cx+d*40,y:e.floor,vx:d*360,life:1.1,hit:false})},
 explode(run,x,y,r,dmgFoe,dmgHero){
  const p=run.p;run.blasts.push({x,y,r,t:0});run.camera.shake=Math.max(run.camera.shake,9);
  run.audio.at('wallBreak',x,{vol:1,rate:.8});run.audio.at('rumble',x,{vol:.6,rate:1.3});
  run.fx.explosion?.(x,y,r);run.fx.burst(x,y,'#ffb04a',30);run.fx.burst(x,y,'#ff5a2a',18);run.fx.ring(x,y,'rgba(255,200,120,.9)',14,.5);
  for(const e of run.enemies)if(!e.dead&&!(e.spawnT>0)&&Math.hypot(e.cx-x,e.y+e.h/2-y)<r+e.w/2)e.damage(dmgFoe,Math.sign(e.cx-x)||1,'blast');
  if(!p.dead&&!(p.inv>0)&&Math.hypot(p.x+p.w/2-x,p.y+p.h/2-y)<r+10)run.hurtPlayer(dmgHero,Math.sign(p.x+p.w/2-x)||1,null,320,true);
  for(const k of[...run.crates])if(Math.hypot(k.x-x,k.y-28-y)<r+28)def.breakCrate(run,k);
  for(const k of[...run.powder])if(Math.hypot(k.x-x,k.y-30-y)<r+30)setTimeout(()=>def.blowKeg(run,k),90)},
 blowKeg(run,k){if(!run.powder.includes(k)||run.phase==='closed')return;run.powder=run.powder.filter(q=>q!==k);run.state.blown.push(k.id);def.explode(run,k.x,k.y-30,120,60,20)},
 breakCrate(run,k){if(!run.crates.includes(k))return;run.crates=run.crates.filter(q=>q!==k);run.fx.sprite?.('puff',k.x,k.y-28,{scale:.62});run.state.broken.push(k.id);
  run.fx.burst(k.x,k.y-28,'#c08a50',18);run.audio.at('crumble',k.x,{vol:.7,rate:1.3});if(k.coins)run.dropCoins(k.x,k.y-40,k.coins,'crate-'+k.id);run.save()},
 hitProps(run,box,dmg){
  const s=run.state;let hit=false;
  for(const k of[...run.crates])if(overlap(box,{x:k.x-28,y:k.y-56,w:56,h:56})){hit=true;k.hp--;k.shake=.2;run.audio.at('stoneHit',k.x,{rate:1.5,vol:.6});if(k.hp<=0)def.breakCrate(run,k)}
  for(const k of[...run.powder])if(overlap(box,{x:k.x-22,y:k.y-58,w:44,h:58})){hit=true;def.blowKeg(run,k)}
  for(const b of run.rollers)if(b.alive&&overlap(box,{x:b.x-22,y:b.y-44,w:44,h:44})){hit=true;b.alive=false;run.fx.burst(b.x,b.y-22,'#c08a50',14);run.audio.at('crumble',b.x,{vol:.6})}
  for(const b of run.bombs)if(b.owner!=='hero'&&overlap(box,{x:b.x-16,y:b.y-26,w:32,h:32})){hit=true;b.owner='hero';b.rest=false;b.vx=run.p.dir*480;b.vy=-320;b.fuse=Math.max(b.fuse,.9);run.audio.play('deflect',{vol:.8});run.fx.spark(b.x,b.y-10,'#ffe38a',10)}
  const w=run.cfg.tide.wheel;if(!s.drained&&overlap(box,{x:w.x-56,y:w.y-200,w:112,h:200})){hit=true;s.wheel=(s.wheel||0)+1;s.wheelAng=(s.wheelAng||0)+1.2;run.audio.at('mechanism',w.x);run.fx.spark(w.x,w.y-140,'#bfefff',12);
   if(s.wheel>=3){s.drained=true;run.tideOn=false;run.banner={t:3,text:text(run.lang,'drained')};run.audio.at('gateOpen',w.x,{vol:.9});run.save()}}
  return hit},
 strike(run,box,dmg){return def.hitProps(run,box,dmg)},
 projectileHit(run,q){if(q.owner!=='hero')return false;return def.hitProps(run,{x:q.x,y:q.y,w:q.w||12,h:q.h||8},q.dmg)},
 heroHazards(run,dt){
  const p=run.p;
  for(const sp of run.cfg.spikes){let up=true;if(sp.kind==='trap'){const ph=(run.spikeT+sp.offset)%sp.cycle;up=ph<sp.up;if(Math.abs(ph)<1/60&&Math.abs(p.x-sp.x)<700)run.audio.at('spikes',sp.x+sp.w/2,{vol:.8})}
   if(up&&!p.dead&&overlap({x:p.x+4,y:p.y,w:p.w-8,h:p.h},{x:sp.x+4,y:sp.y-36,w:sp.w-8,h:36})){if(run.hurtPlayer(sp.kind==='trap'?16:18,0,null,0)){p.vy=-430;run.fx.spark(p.x+p.w/2,sp.y-20,'#e6edf3',8)}}}
  // under the tide: slowed, and losing breath
  if(!p.dead&&run.tideY<p.y+p.h*.42){p.vx*=Math.pow(.25,dt);run.drownT+=dt;if(run.drownT>.5){run.drownT=0;run.hurtPlayer(7,0,null,0,true);run.fx.burst(p.x+p.w/2,p.y+10,'#bfe8ff',6)}}
  else run.drownT=0},
 onRespawn(run){const s=run.state;if(!s.drained){run.tideOn=false;run.tideY=run.cfg.sea;s.wheel=0}run.bombs=[];run.rollers=[];run.waves=[];if(run.arenaOn&&!s.cleared){run.arenaOn=false;def.music(run)}},
 ambience(run){if(!run.audio.ctx)return;const z=def.zone(run).id;run.audio.loop('water',z==='grotto'?.7:.55);run.audio.loop('wind',z==='shore'||z==='ship'?.35:.12);run.audio.loop('cave',z==='dock'||z==='grotto'?.4:0)},
 paintSolid(run,c,s,L,R,T,B){if(s.style==='rock')return paintRock(run,c,s,L,R,T,B);if(s.style==='dock')return paintDock(run,c,s,L,R,T,B);if(s.style==='hull')return paintHull(run,c,s,L,R,T,B);return false},
 paintLedge:(run,c,l)=>paintScaffold(run,c,l),
 drawCrumble:(run,c,b)=>drawPlank(run,c,b),
 drawMover:(run,c,m)=>drawMover(run,c,m),
 drawEnemy:(run,c,e)=>drawSmuggler(run,c,e),
 /* -------- drawing */
 drawBackground(run,c){
  const W=E.W,cam=run.camera,cx=cam.x+W/2,zs=run.cfg.zones;
  const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#081128');sky.addColorStop(1,'#1d3a66');c.fillStyle=sky;c.fillRect(0,0,W,H);
  // plates cross-fade over 700px around each area border
  const weights=zs.map(z=>clamp(1-Math.max(z.from-cx,cx-z.to,0)/700,0,1));
  const ph=H*1.08,py=Math.round(H-ph+18-(cam.y-300)*.08);
  zs.forEach((z,i)=>{const w=weights[i];if(w<=0)return;const im=run.images[A4+PLATES[z.id]];if(!im)return;
   const pw=im.width*ph/im.height,ox=-((cam.x*.22)%(pw*2));c.save();c.globalAlpha=w;
   for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>W||x+pw<0)continue;if(k%2){c.save();c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph);c.restore()}else c.drawImage(im,x,py,pw,ph)}c.restore()});
  // middle parallax: cave pillars and stalactites
  let cave=0;zs.forEach((z,i)=>cave=Math.max(cave,weights[i]*CAVE[z.id]));
  const mid=run.images[A4+'mid-cave.png'];
  if(mid&&cave>.02){const mh=H*1.02,mw=mid.width*mh/mid.height,my=Math.round(H-mh+40-(cam.y-300)*.35),ox=-((cam.x*.5)%mw);
   c.save();c.globalAlpha=cave*.92;for(let x=ox-mw;x<W;x+=mw)c.drawImage(mid,x,my,mw,mh);c.restore()}
 },
 drawBack(run,c){
  const W=E.W,cam=run.camera,d=run.cfg.decor,t=run.time;
  for(const[x,y]of d.nets){if(x<cam.x-120||x>cam.x+W+120)continue;drawNet(c,x,y)}
  // masts and rigging on the smugglers' ship
  for(const[x,y]of d.masts){if(x<cam.x-400||x>cam.x+W+400)continue;const g=c.createLinearGradient(x-12,0,x+12,0);g.addColorStop(0,'#3a220f');g.addColorStop(.5,'#6a4424');g.addColorStop(1,'#2a1608');c.fillStyle=g;c.fillRect(x-12,y-560,24,560);
   c.fillStyle='#4a2c16';c.fillRect(x-150,y-470,300,12);c.fillRect(x-120,y-300,240,10);
   c.save();c.globalAlpha=.9;const sail=c.createLinearGradient(0,y-460,0,y-300);sail.addColorStop(0,'#d8ccb0');sail.addColorStop(1,'#8c8068');c.fillStyle=sail;c.beginPath();c.moveTo(x-140,y-458);c.quadraticCurveTo(x,y-440+Math.sin(t*.8+x)*6,x+140,y-458);c.lineTo(x+118,y-302);c.quadraticCurveTo(x,y-282+Math.sin(t*.8+x)*8,x-118,y-302);c.closePath();c.fill();
   c.fillStyle='rgba(40,20,10,.75)';c.font='bold 54px Georgia';c.textAlign='center';c.fillText('☠',x,y-360);c.restore();
   c.strokeStyle='rgba(120,96,64,.85)';c.lineWidth=2;for(const s of[-1,1]){c.beginPath();c.moveTo(x,y-555);c.lineTo(x+s*230,y);c.stroke();c.beginPath();c.moveTo(x+s*150,y-464);c.lineTo(x+s*200,y);c.stroke()}}
  // glowing algae and drips in the grotto
  for(const[x,y]of d.algae){if(x<cam.x-120||x>cam.x+W+120)continue;for(let i=0;i<5;i++){const k=.6+.4*Math.sin(t*2+i+x);c.fillStyle='rgba(90,240,220,'+(.5*k)+')';c.beginPath();c.ellipse(x+i*14-28,y-6-(i%2)*6,6,3,0,0,TAU);c.fill()}run.fx.glow(c,x,y-8,46,'rgba(90,240,220,',.3)}
  for(const[x,y0]of d.drips){if(x<cam.x-60||x>cam.x+W+60)continue;const yy=y0+((t*260+x)%520);c.fillStyle='rgba(190,230,255,.7)';c.fillRect(x,yy,2,8)}
 },
 drawMid(run,c){
  const W=E.W,cam=run.camera,d=run.cfg.decor,t=run.time,a=run.cfg.arena,s=run.state;
  for(const sp of run.cfg.spikes)if(sp.x<cam.x+W+50&&sp.x+sp.w>cam.x-50)drawSpikes(run,c,sp);
  for(const[x,y]of d.lanterns){if(x<cam.x-80||x>cam.x+W+80)continue;drawLantern(run,c,x,y,t)}
  for(const k of run.crates){if(k.x<cam.x-80||k.x>cam.x+W+80)continue;c.save();c.translate((Math.random()-.5)*k.shake*20,0);drawCrate(c,k.x,k.y,k.hp<2);c.restore()}
  for(const k of run.powder){if(k.x<cam.x-80||k.x>cam.x+W+80)continue;drawKeg(c,k.x,k.y,t)}
  const w=run.cfg.tide.wheel;if(w.x>cam.x-200&&w.x<cam.x+W+200)drawWheel(run,c,w,t);
  // arena barriers: a rope net drops behind the hero, an iron grate bars the gangway
  if(run.wall>.05){const h=280*run.wall,x=a.wallX;c.save();c.strokeStyle='rgba(170,140,96,.95)';c.lineWidth=2.5;for(let i=0;i<4;i++){c.beginPath();c.moveTo(x+i*10,560-h);c.lineTo(x+i*10,560);c.stroke()}for(let y=560-h;y<560;y+=16){c.beginPath();c.moveTo(x,y);c.lineTo(x+30,y+8);c.stroke()}c.restore()}
  if(a.gateX>cam.x-200&&a.gateX<cam.x+W+200){const gx=a.gateX,h=280*run.gate;c.fillStyle='#4a2c16';c.fillRect(gx-18,560-320,16,320);c.fillRect(gx+36,560-320,16,320);c.fillRect(gx-24,560-336,82,18);
   if(h>2){c.fillStyle='#2e3038';c.fillRect(gx,560-h,34,h);c.fillStyle='#8a8f96';for(let yy=560-h+10;yy<560;yy+=24)c.fillRect(gx,yy,34,4);for(let xx=gx+4;xx<gx+34;xx+=10)c.fillRect(xx,560-h,3,h)}
   if(s.cleared)run.fx.glow(c,gx+17,460,120,'rgba(255,230,160,',.45)}
 },
 drawActors(run,c){
  const t=run.time;
  for(const b of run.rollers){c.save();c.translate(b.x,b.y-22);c.rotate(b.rot);const g=c.createRadialGradient(0,0,4,0,0,24);g.addColorStop(0,'#a5683b');g.addColorStop(1,'#5a3418');c.fillStyle=g;c.beginPath();c.arc(0,0,22,0,TAU);c.fill();c.strokeStyle='#8c94a2';c.lineWidth=4;c.beginPath();c.arc(0,0,15,0,TAU);c.stroke();c.strokeStyle='#3a2210';c.lineWidth=2;c.beginPath();c.moveTo(-20,0);c.lineTo(20,0);c.moveTo(0,-20);c.lineTo(0,20);c.stroke();c.restore()}
  for(const b of run.bombs){
   if(b.rest){const k=clamp(1-b.fuse/.85,0,1);c.save();c.strokeStyle='rgba(255,60,40,'+(.3+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(b.x,b.y,96,14,0,0,TAU);c.stroke();c.restore()}
   c.save();c.translate(b.x,b.y-12);c.rotate(b.t*(b.rest?0:8));c.fillStyle=b.owner==='hero'?'#2a2a3a':'#16181e';c.beginPath();c.arc(0,0,12,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.3)';c.beginPath();c.arc(-4,-4,4,0,TAU);c.fill();c.restore();
   c.fillStyle=Math.sin(t*40)>0?'#ffe38a':'#ff6a2a';c.beginPath();c.arc(b.x+6,b.y-26,3.5,0,TAU);c.fill();run.fx.glow(c,b.x+6,b.y-26,20,'rgba(255,170,60,',.6)}
  for(const w of run.waves){const k=w.life/1.1;c.save();c.globalAlpha=k;const g=c.createLinearGradient(w.x-30,0,w.x+30,0);g.addColorStop(0,'rgba(220,190,140,0)');g.addColorStop(.5,'rgba(240,210,160,.9)');g.addColorStop(1,'rgba(220,190,140,0)');c.fillStyle=g;c.beginPath();c.moveTo(w.x-30,w.y);c.quadraticCurveTo(w.x,w.y-44,w.x+30,w.y);c.fill();c.restore();run.fx.dust?.(w.x,w.y,1)}
  for(const b of run.blasts){const k=b.t/.6;c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r*(.6+k));g.addColorStop(0,'rgba(255,240,180,'+(1-k)+')');g.addColorStop(.4,'rgba(255,140,50,'+(.8*(1-k))+')');g.addColorStop(1,'rgba(120,40,10,0)');c.fillStyle=g;c.beginPath();c.arc(b.x,b.y,b.r*(.6+k),0,TAU);c.fill();c.restore()}
 },
 drawFront(run,c){
  // the sea (and the rising tide) with moving waves, foam and moonlit glints
  const W=E.W,cam=run.camera,t=run.time,lvl=run.tideY,x0=Math.floor(cam.x/8)*8-16,x1=cam.x+W+16,bottom=cam.y+H+20;
  if(lvl>bottom)return;
  const surf=x=>lvl+Math.sin(x*.018+t*1.7)*4+Math.sin(x*.047-t*2.4)*2.2;
  c.save();c.beginPath();c.moveTo(x0,bottom);for(let x=x0;x<=x1;x+=8)c.lineTo(x,surf(x));c.lineTo(x1,bottom);c.closePath();
  const g=c.createLinearGradient(0,lvl,0,lvl+260);g.addColorStop(0,'rgba(24,70,104,.62)');g.addColorStop(.35,'rgba(10,40,70,.8)');g.addColorStop(1,'rgba(4,16,34,.94)');c.fillStyle=g;c.fill();
  c.strokeStyle='rgba(210,235,255,.55)';c.lineWidth=2.5;c.beginPath();for(let x=x0;x<=x1;x+=8){const y=surf(x);x===x0?c.moveTo(x,y):c.lineTo(x,y)}c.stroke();
  // moving glints (moonlight and lanterns)
  c.globalCompositeOperation='lighter';
  for(let i=0;i<46;i++){const gx=x0+((i*197+t*30*(1+i%3))%(x1-x0)),gy=lvl+8+((i*53)%120);c.fillStyle='rgba(200,225,255,'+(.08+.1*((i*7)%3)/2)+')';c.fillRect(gx,gy,16+(i%4)*8,2)}
  for(const[x,y]of run.cfg.decor.lanterns){if(x<cam.x-60||x>cam.x+W+60||y-120>lvl)continue;for(let k=0;k<6;k++){const yy=lvl+10+k*16+Math.sin(t*3+k)*2;c.fillStyle='rgba(255,180,90,'+(.28-k*.04)+')';c.fillRect(x+26-(10-k)+Math.sin(t*2+k)*4,yy,20-k*2,3)}}
  c.restore();
 },
 drawLighting(run,c){
  const W=E.W,cam=run.camera,t=run.time,p=run.p,zs=run.cfg.zones,cx=cam.x+W/2;
  let dark=0;zs.forEach(z=>{const w=clamp(1-Math.max(z.from-cx,cx-z.to,0)/700,0,1);dark=Math.max(dark,w*DARK[z.id])});
  const lb=run.lightBuf,q=4,lw=Math.ceil(W/q),lh=Math.ceil(H/q);if(lb.width!==lw){lb.width=lw;lb.height=lh}
  const x=lb.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(4,10,26,'+dark+')';x.fillRect(0,0,lw,lh);
  x.globalCompositeOperation='destination-out';
  const hole=(wx,wy,r,a)=>{const sx=(wx-cam.x)/q,sy=(wy-cam.y)/q,rr=r/q;if(sx<-rr||sx>lw+rr||sy<-rr||sy>lh+rr)return;const g=x.createRadialGradient(sx,sy,0,sx,sy,rr);g.addColorStop(0,'rgba(0,0,0,'+a+')');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(sx-rr,sy-rr,rr*2,rr*2)};
  for(const[lx,ly]of run.cfg.decor.lanterns)hole(lx+26,ly-92,240+Math.sin(t*9+lx)*6,.95);
  for(const[lx,ly]of run.cfg.decor.algae)hole(lx,ly-10,150,.6);
  hole(p.x+p.w/2,p.y+p.h*.4,200,.55);
  for(const b of run.bombs)hole(b.x,b.y-20,110,.7);for(const b of run.blasts)hole(b.x,b.y,b.r*3,1);
  c.save();c.imageSmoothingEnabled=true;c.drawImage(lb,0,0,W,H);c.restore();
  // warm lantern bloom
  c.save();c.globalCompositeOperation='lighter';
  for(const[lx,ly]of run.cfg.decor.lanterns){const sx=lx+26-cam.x,sy=ly-92-cam.y;if(sx<-200||sx>W+200)continue;const g=c.createRadialGradient(sx,sy,0,sx,sy,170);g.addColorStop(0,'rgba(255,170,80,.22)');g.addColorStop(1,'rgba(255,140,60,0)');c.fillStyle=g;c.fillRect(sx-170,sy-170,340,340)}
  // drifting sea spray / dust motes
  if(!run.fx.reduced){c.fillStyle='rgba(210,230,255,.4)';for(const m of run.motes){const mx=(((m.x-cam.x*m.s*.3+t*12*m.s)%W)+W)%W,my=(((m.y+Math.sin(t*.7+m.x)*14-cam.y*m.s*.2)%H)+H)%H;c.fillRect(mx,my,2,2)}}
  c.restore();
  const v=c.createRadialGradient(W/2,H/2,H*.45,W/2,H/2,H);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,4,14,.4)');c.fillStyle=v;c.fillRect(0,0,W,H);
  if(run.phase==='complete'&&run.celebrate>0)for(let i=0;i<4;i++)run.fx.cap(run.fx.parts,{x:cam.x+Math.random()*W,y:cam.y-10,vx:(Math.random()-.5)*60,vy:60+Math.random()*80,g:120,life:2,max:2,size:4,color:['#ffd36b','#7dfbe0','#ff7d6b','#ffffff'][i]},160);
 },
 drawHud(run,c){
  const W=E.W,s=run.state;
  if(run.tideOn&&!s.drained&&def.zone(run).id==='grotto'){const k=clamp((run.cfg.sea-run.tideY)/(run.cfg.sea-run.cfg.tide.top),0,1);const ty=(run.objY||88)+10;c.save();c.fillStyle='#0b1a2acc';c.beginPath();c.roundRect(W/2-90,ty,180,14,7);c.fill();c.fillStyle='#5fd0f0';c.beginPath();c.roundRect(W/2-88,ty+2,176*k,10,5);c.fill();c.restore()}
  if(run.banner.t>0){const k=Math.min(1,run.banner.t,4.5-run.banner.t+.001);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=run.banner.small?150:190;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(10,24,40,.85)';c.beginPath();c.roundRect(W/2-bw/2,y-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#8fc6e0';c.lineWidth=2;c.stroke();
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';c.fillStyle='#e6f4ff';c.fillText(run.banner.text,W/2,y+(run.banner.small?-5:6));c.restore()}
 }
};
E.register(def);
window.PirateLevel04={def,text,launch:opts=>E.launch(4,opts)};
})();
