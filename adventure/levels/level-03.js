/* Pirate Strike — Level 3: Ancient Ruins (Qədim Xarabalıqlar).
 * Independent level: own config (level-03.json), own save key, own start and
 * exit. Uses PirateLevelEngine for hero, combat, enemies and flow; this file
 * adds the ruins environment, both puzzles, traps and the Ancient Guardian. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/';

const L={
en:{levelWord:'Level',title:'Level 3 · Ancient Ruins',entrance:'Fortress Entrance',courtyard:'Collapsed Courtyard',temple:'Forgotten Temple',underground:'Underground Treasure Chamber',gate:"Guardian's Gate",
 objEntrance:'Enter the cursed fortress',objCourtyard:'Cross the collapsed courtyard',objTemple:'Light the runes in the mural order',objTempleDone:'The temple gate is open',objUnderground:'Find the hidden mechanism',objUndergroundDone:'Traps disabled · the vault lift is moving',objGate:'Defeat the Ancient Guardian',objExit:'The great gate is open — leave the ruins',
 wrong:'The runes reject that order',runeLit:'Rune awakened',gateOpen:'The temple gate opens!',wallHit:'The wall cracks…',wallBreak:'A hidden passage!',gear:'Mechanism activated — traps disabled',boss:'ANCIENT GUARDIAN',awake:'THE ANCIENT GUARDIAN AWAKENS',rage:'The Guardian is enraged!',beaten:'The Guardian crumbles',hint1:'Hold ATTACK for a three-hit combo',hint2:'Strike levers and cracked walls with your sword',hint3:'Dash through enemies · BLOCK protects from the front'},
az:{levelWord:'Səviyyə',title:'Səviyyə 3 · Qədim Xarabalıqlar',entrance:'Qala Girişi',courtyard:'Uçmuş Həyət',temple:'Unudulmuş Məbəd',underground:'Yeraltı Xəzinə Otağı',gate:'Keşikçinin Qapısı',
 objEntrance:'Lənətli qalaya daxil ol',objCourtyard:'Uçmuş həyəti keç',objTemple:'Runları divar rəsmindəki ardıcıllıqla yandır',objTempleDone:'Məbədin qapısı açıqdır',objUnderground:'Gizli mexanizmi tap',objUndergroundDone:'Tələlər söndü · xəzinə liftı işləyir',objGate:'Qədim Keşikçini məğlub et',objExit:'Böyük qapı açıldı — xarabalıqları tərk et',
 wrong:'Runlar bu ardıcıllığı qəbul etmir',runeLit:'Run oyandı',gateOpen:'Məbədin qapısı açılır!',wallHit:'Divar çatlayır…',wallBreak:'Gizli keçid!',gear:'Mexanizm işə düşdü — tələlər söndü',boss:'QƏDİM KEŞİKÇİ',awake:'QƏDİM KEŞİKÇİ OYANIR',rage:'Keşikçi qəzəbləndi!',beaten:'Keşikçi dağıldı',hint1:'Üç zərbəli kombo üçün VUR düyməsini basılı saxla',hint2:'Qolları və çatlı divarları qılıncla vur',hint3:'Düşmənlərin içindən YAYIN · BLOK önü qoruyur'},
tr:{levelWord:'Bölüm',title:'Bölüm 3 · Antik Harabeler',entrance:'Kale Girişi',courtyard:'Çökmüş Avlu',temple:'Unutulmuş Tapınak',underground:'Yeraltı Hazine Odası',gate:'Muhafızın Kapısı',
 objEntrance:'Lanetli kaleye gir',objCourtyard:'Çökmüş avluyu geç',objTemple:'Rünleri duvar resmindeki sırayla yak',objTempleDone:'Tapınak kapısı açık',objUnderground:'Gizli mekanizmayı bul',objUndergroundDone:'Tuzaklar kapandı · hazine asansörü çalışıyor',objGate:'Antik Muhafızı yen',objExit:'Büyük kapı açıldı — harabeleri terk et',
 wrong:'Rünler bu sırayı reddediyor',runeLit:'Rün uyandı',gateOpen:'Tapınak kapısı açılıyor!',wallHit:'Duvar çatlıyor…',wallBreak:'Gizli geçit!',gear:'Mekanizma çalıştı — tuzaklar kapandı',boss:'ANTİK MUHAFIZ',awake:'ANTİK MUHAFIZ UYANIYOR',rage:'Muhafız öfkelendi!',beaten:'Muhafız yıkıldı',hint1:'Üçlü kombo için VUR tuşunu basılı tut',hint2:'Kolları ve çatlak duvarları kılıçla vur',hint3:'Düşmanların içinden ATIL · BLOK önden korur'},
ru:{levelWord:'Уровень',title:'Уровень 3 · Древние руины',entrance:'Вход в крепость',courtyard:'Разрушенный двор',temple:'Забытый храм',underground:'Подземная сокровищница',gate:'Врата Стража',
 objEntrance:'Войдите в проклятую крепость',objCourtyard:'Пересеките разрушенный двор',objTemple:'Зажгите руны в порядке фрески',objTempleDone:'Врата храма открыты',objUnderground:'Найдите скрытый механизм',objUndergroundDone:'Ловушки отключены · лифт сокровищницы работает',objGate:'Победите Древнего Стража',objExit:'Великие врата открыты — покиньте руины',
 wrong:'Руны отвергают этот порядок',runeLit:'Руна пробудилась',gateOpen:'Врата храма открываются!',wallHit:'Стена трескается…',wallBreak:'Тайный проход!',gear:'Механизм запущен — ловушки отключены',boss:'ДРЕВНИЙ СТРАЖ',awake:'ДРЕВНИЙ СТРАЖ ПРОБУЖДАЕТСЯ',rage:'Страж в ярости!',beaten:'Страж рассыпался',hint1:'Удерживайте УДАР для серии из трёх ударов',hint2:'Бейте рычаги и треснувшие стены мечом',hint3:'РЫВОК сквозь врагов · БЛОК защищает спереди'},
pl:{levelWord:'Poziom',title:'Poziom 3 · Starożytne ruiny',entrance:'Wejście do twierdzy',courtyard:'Zrujnowany dziedziniec',temple:'Zapomniana świątynia',underground:'Podziemny skarbiec',gate:'Brama Strażnika',
 objEntrance:'Wejdź do przeklętej twierdzy',objCourtyard:'Przejdź przez zrujnowany dziedziniec',objTemple:'Zapal runy w kolejności z fresku',objTempleDone:'Brama świątyni jest otwarta',objUnderground:'Znajdź ukryty mechanizm',objUndergroundDone:'Pułapki wyłączone · winda skarbca działa',objGate:'Pokonaj Starożytnego Strażnika',objExit:'Wielka brama otwarta — opuść ruiny',
 wrong:'Runy odrzucają tę kolejność',runeLit:'Runa przebudzona',gateOpen:'Brama świątyni się otwiera!',wallHit:'Ściana pęka…',wallBreak:'Tajne przejście!',gear:'Mechanizm uruchomiony — pułapki wyłączone',boss:'STAROŻYTNY STRAŻNIK',awake:'STAROŻYTNY STRAŻNIK SIĘ BUDZI',rage:'Strażnik wpada w szał!',beaten:'Strażnik się rozpada',hint1:'Przytrzymaj ATAK, by wykonać trzy ciosy',hint2:'Uderzaj dźwignie i pęknięte ściany mieczem',hint3:'ZRYW przez wrogów · BLOK chroni z przodu'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k];

/* ------------------------------------------------------------------ Ancient Guardian miniboss */
class Guardian{
 constructor(run,cfg){this.run=run;this.cfg=cfg;this.home=cfg.x;this.max=cfg.hp;this.reset()}
 reset(){Object.assign(this,{x:this.home,w:96,h:182,hp:this.max,dir:-1,state:'dormant',t:0,anim:'idle',animT:0,flash:0,jiggle:0,rage:false,waves:[],actions:0,contactCool:0,deadT:0,target:0,vy:0,airY:0,hitDone:false,introT:0})}
 get cx(){return this.x}
 box(){return{x:this.x-this.w/2,y:this.run.world.ground-this.h-this.airY,w:this.w,h:this.h}}
 set(state,t,anim){this.state=state;this.t=t;if(anim&&anim!==this.anim){this.anim=anim;this.animT=0}}
 start(){const run=this.run;this.set('intro',2.4,'idle');this.introT=0;run.audio.playMusic('guardian',1.6);run.audio.play('bossIntro',{vol:.9});run.camera.shake=8;run.banner={t:2.6,text:text(run.lang,'awake')}}
 damage(dmg,dir){
  const run=this.run;if(this.state==='dormant'||this.state==='intro'||this.state==='roar'||this.state==='dead')return false;
  this.hp-=dmg;this.flash=.1;this.jiggle=dir*6;run.fx.debris(this.x,run.world.ground-this.h*.55-this.airY,6);run.audio.play('stoneHit',{vol:.85,rate:.9+Math.random()*.2});
  if(!this.rage&&this.hp<=this.cfg.rageAt){this.rage=true;this.waves=[];this.set('roar',1.5,'roar');run.audio.play('roar',{vol:1});run.camera.shake=10;run.banner={t:2.2,text:text(run.lang,'rage')};const p=run.p;p.vx=(p.x+p.w/2>this.x?1:-1)*420;p.vy=-240;run.fx.ring(this.x,run.world.ground-90,'rgba(255,160,70,.9)',20,.6)}
  if(this.hp<=0){this.hp=0;this.set('dead',0,'dead');this.deadT=0;run.audio.play('bossDie',{vol:1});run.camera.shake=14;run.fx.debris(this.x,run.world.ground-80,40);run.fx.burst(this.x,run.world.ground-120,'#7dfbe0',40,1.6);run.dropCoins(this.x,run.world.ground-150,10,'guardian');run.stats.boss=true;run.state.bossDefeated=true;run.fx.text(text(run.lang,'beaten'),this.x,run.world.ground-260,'#ffe3a0',true);run.audio.stopMusic(1.2);run.save()}
  return true;
 }
 update(dt){
  const run=this.run,p=run.p,g=run.world.ground,arena=run.cfg.arena;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);this.jiggle*=Math.pow(.001,dt);this.contactCool=Math.max(0,this.contactCool-dt);
  // shockwaves
  for(const w of this.waves){w.x+=w.dir*w.speed*dt;w.life-=dt;if(w.x<arena.x+20||w.x>arena.x+arena.w-20)w.life=0;if(!p.dead&&w.life>0&&p.x+p.w>w.x-14&&p.x<w.x+14&&p.y+p.h>g-30){w.life=0;run.hurtPlayer(15,w.dir,this,200)}}
  this.waves=this.waves.filter(w=>w.life>0);
  if(this.state==='dormant'||this.state==='dead'){if(this.state==='dead')this.deadT+=dt;return}
  this.t-=dt;const dx=p.x+p.w/2-this.x,dist=Math.abs(dx),fast=this.rage;
  const lo=arena.x+70,hi=arena.x+arena.w-70;
  switch(this.state){
   case'intro':this.introT+=dt;if(this.t<=0)this.set('idle',.8,'idle');return;
   case'roar':if(this.t<=0)this.set('idle',.4,'idle');return;
   case'idle':case'walk':{
    this.dir=dx>0?1:-1;
    if(this.t>0&&this.state==='idle')return;
    if(dist<175){this.actions++;this.set('windup',fast?.62:.82,'windup');run.audio.play('bossWindup',{vol:.8});return}
    if(fast&&this.actions%3===2){this.actions++;this.set('volley',.62,'roar');run.audio.play('crystalCharge',{vol:.8});return}
    if(dist>330||this.state==='walk'&&this.t<-1.6){this.actions++;this.target=clamp(p.x+p.w/2,lo,hi);this.set('crouch',.55,'crouch');run.audio.play('bossWindup',{vol:.6,rate:.8});return}
    this.state='walk';this.anim='walk';this.x=clamp(this.x+this.dir*(fast?78:58)*dt,lo,hi);
    if(Math.floor(this.animT*6)!==Math.floor((this.animT-dt)*6)&&Math.floor(this.animT*6)%2===0){run.audio.play('bossStep',{vol:.55});run.camera.shake=Math.max(run.camera.shake,2)}
    if(!p.dead&&this.contactCool<=0&&overlap(p,this.box())){this.contactCool=1;run.hurtPlayer(12,this.dir,this,320)}
    return}
   case'windup':if(this.t<=0){this.set('slash',.24,'slash');run.audio.play('bossSwing',{vol:.95});this.hitDone=false}return;
   case'slash':{if(!this.hitDone){const box={x:this.dir>0?this.x:this.x-185,y:g-62,w:185,h:62};if(!p.dead&&overlap(p,box)){this.hitDone=true;run.hurtPlayer(22,this.dir,this,300)}}if(this.t<=0){this.set('stuck',fast?.85:1.05,'stuck');run.audio.play('bossSlam',{vol:.6});run.fx.debris(this.x+this.dir*120,g,10);run.camera.shake=5}return}
   case'crouch':if(this.t<=0){this.set('air',.82,'air');this.from=this.x;this.airT=0;run.audio.play('bossLeap',{vol:.8})}return;
   case'air':{this.airT+=dt;const k=clamp(this.airT/.82,0,1);this.x=this.from+(this.target-this.from)*k;this.airY=Math.sin(k*Math.PI)*230;this.dir=this.target>this.from?1:-1;
    if(this.t<=0){this.airY=0;this.x=this.target;this.set('stuck',fast?1.0:1.3,'stuck');run.audio.play('bossSlam',{vol:1});run.camera.shake=12;run.fx.debris(this.x,g,26);run.fx.ring(this.x,g-6,'rgba(125,251,224,.8)',20,.5);
     const sp=fast?360:300;this.waves.push({x:this.x-40,dir:-1,speed:sp,life:3},{x:this.x+40,dir:1,speed:sp,life:3});
     if(!p.dead&&overlap(p,this.box()))run.hurtPlayer(25,dx>0?1:-1,this,380)}
    return}
   case'stuck':if(this.t<=0)this.set('idle',fast?.35:.6,'idle');return;
   case'volley':if(this.t<=0){const sx=this.x,sy=g-200;for(const [i,vx] of [[0,170],[1,260],[2,350]].map(([i,s])=>[i,s])){run.projectiles.push({kind:'crystal',owner:'enemy',x:sx,y:sy,vx:(dx>0?1:-1)*vx,vy:-430+i*30,g:900,w:18,h:18,dmg:15,life:3,onEnd:(r,q)=>{r.fx.burst(q.x,q.y,'#ff9f43',10);r.audio.at('shatter',q.x,{vol:.7})}})}run.audio.play('crystalFire',{vol:.9});this.set('recover',.7,'idle')}return;
   case'recover':if(this.t<=0)this.set('idle',.2,'idle');return;
  }
 }
 draw(c){
  const run=this.run,g=run.world.ground,AB=!!run.enemyAnim?.byType?.get('boss');if(this.state==='dead'&&this.deadT>2.5){if(AB){window.PirateEnemyAnim.drawBoss(run,c,this,{floor:g,dead:true,h:182});return}run.sheets.guardian.draw(c,run.sheets.guardian.frame('dead',0),this.x,g,this.dir);return}
  const sheet=this.rage?run.sheets.guardianRage:run.sheets.guardian;
  // telegraphs: red sweep zone before the cleave, landing ring during a leap
  if(this.state==='windup'){const k=1-this.t/(this.rage?.62:.82);c.save();c.globalAlpha=.18+.32*k;c.fillStyle='#ff4d3a';c.fillRect(this.dir>0?this.x:this.x-185,g-62,185,62);c.restore()}
  if(this.state==='crouch'||this.state==='air'){c.save();c.strokeStyle='rgba(255,90,60,.85)';c.lineWidth=4;c.beginPath();c.ellipse(this.target,g-4,70,12,0,0,TAU);c.stroke();c.globalAlpha=.25;c.fillStyle='#ff5a3c';c.fill();c.restore()}
  // core glow (vulnerable windows glow brighter)
  const open=this.state==='stuck';run.fx.glow(c,this.x+this.dir*4,g-120-this.airY,open?120:80,this.rage?'rgba(255,150,60,':'rgba(110,250,220,',open?.75:.45);
  if(this.state==='dormant'){if(AB){window.PirateEnemyAnim.drawBoss(run,c,this,{floor:g,h:182});return}sheet.draw(c,sheet.frame('idle',0),this.x,g,this.dir);c.save();c.globalAlpha=.55;c.fillStyle='#3a4646';c.globalCompositeOperation='source-atop';c.restore();return}
  const idx=sheet.frame(this.anim,this.animT);
  const intro=this.state==='intro'?clamp(this.introT/1.4,0,1):1;
  if(!(AB&&window.PirateEnemyAnim.drawBoss(run,c,this,{floor:g,air:this.airY,dead:this.state==='dead',h:182})))sheet.draw(c,idx,this.x+this.jiggle,g-this.airY,this.dir,{flash:this.flash>0?.9:intro<1?(1-intro)*.45:0});   // animated boss (enemy-anim.js) when bound
  if(this.state==='stuck'){for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(this.x+Math.cos(a)*30-3,g-200+Math.sin(a)*6,6,6)}}
  for(const w of this.waves){run.fx.glow(c,w.x,g-14,30,this.rage?'rgba(255,150,60,':'rgba(110,250,220,',.8);c.fillStyle=this.rage?'#ffb35a':'#9ffbe6';c.beginPath();c.moveTo(w.x-14,g);c.lineTo(w.x,g-30);c.lineTo(w.x+14,g);c.fill()}
 }
}

/* ------------------------------------------------------------------ level definition */
const def={
 id:3,base:BASE,config:BASE+'level-03.json',
 images:['plate-entrance.webp','plate-courtyard.webp','plate-temple.webp','plate-underground.webp','plate-gate.webp'],
 text:(lang,k)=>text(lang,k),
 title:lang=>text(lang,'title'),
 initialState:()=>({runes:[],gateOpen:false,wallHits:0,wallBroken:false,trapsOff:false,bossDefeated:false,hints:0}),
 persist(run){const s=run.state;return{runes:s.gateOpen?[...run.cfg.runeOrder]:[],gateOpen:s.gateOpen,wallHits:s.wallBroken?3:0,wallBroken:s.wallBroken,trapsOff:s.trapsOff,bossDefeated:s.bossDefeated,hints:s.hints}},
 prepare(run){
  // darker, cooler copy of the prop atlas for background depth
  const src=run.images['props.png'],cv=document.createElement('canvas');cv.width=src.width;cv.height=src.height;const x=cv.getContext('2d');x.drawImage(src,0,0);x.globalCompositeOperation='source-atop';x.fillStyle='rgba(12,26,40,.42)';x.fillRect(0,0,cv.width,cv.height);run.propsBack=cv;
  // fog strip
  const fog=document.createElement('canvas');fog.width=512;fog.height=128;const f=fog.getContext('2d');for(let i=0;i<26;i++){const gx=(i*97)%512,gy=40+(i*53)%60,r=40+(i*31)%50;const gr=f.createRadialGradient(gx,gy,0,gx,gy,r);gr.addColorStop(0,'rgba(190,215,225,.22)');gr.addColorStop(1,'rgba(190,215,225,0)');f.fillStyle=gr;f.fillRect(gx-r,gy-r,r*2,r*2);if(gx+r>512){f.fillStyle=gr;f.save();f.translate(-512,0);f.fillRect(gx-r,gy-r,r*2,r*2);f.restore()}}run.fog=fog;
  // lighting buffer (half resolution)
  run.light=document.createElement('canvas');run.light.width=E.W/4;run.light.height=H/4;run.lightCtx=run.light.getContext('2d');
  const vg=document.createElement('canvas');vg.width=E.W/4;vg.height=H/4;const vx=vg.getContext('2d'),v=vx.createRadialGradient(E.W/8,H/8,H*.35/4,E.W/8,H/8,H*.95/4);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.45)');vx.fillStyle=v;vx.fillRect(0,0,E.W/4,H/4);run.vignette=vg;
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  run.gateRise=s.gateOpen?480:0;run.wallShake=0;run.leverFx={};run.leverCool={};run.wrongT=0;run.runeReset=0;run.banner={t:4.5,text:text(run.lang,'title')};
  run.darts=c.darts.map(d=>({...d,t:d.offset||0,warn:0}));run.spikeT=0;
  for(const m of run.movers)if(m.power==='gear')m.active=s.trapsOff;
  run.boss=new Guardian(run,c.boss);run.arena={active:false,entry:0,exit:s.bossDefeated?1:0};
  if(s.bossDefeated){run.boss.state='dead';run.boss.deadT=9;run.boss.hp=0}
  run.motes=Array.from({length:40},(_,i)=>({x:(i*173)%E.W,y:(i*97)%H,s:.3+(i%5)*.15}));
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};if(!resumed)run.hintQueue=['hint1','hint2','hint3'];else run.hintQueue=[];run.hintT=5},
 music(run){if(run.arena?.active&&!run.state.bossDefeated)run.audio.playMusic('guardian',1.2);else run.audio.playMusic('ruins',1.6)},
 zone(run){const x=run.p.x;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones.at(-1)},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 objectiveHud(run){const z=def.zone(run).id,s=run.state;
  if(z==='temple')return s.gateOpen?text(run.lang,'objTempleDone'):text(run.lang,'objTemple')+' ('+s.runes.length+'/3)';
  if(z==='underground')return s.trapsOff?text(run.lang,'objUndergroundDone'):text(run.lang,'objUnderground');
  if(z==='gate')return s.bossDefeated?text(run.lang,'objExit'):text(run.lang,'objGate');
  return text(run.lang,z==='entrance'?'objEntrance':'objCourtyard')},
 dynamicSolids(run){const c=run.cfg,s=run.state,list=[];
  if(run.gateRise<420){const g=c.runeGate;list.push({x:g.x,y:g.y,w:g.w,h:g.h-run.gateRise,style:'gate'})}
  if(!s.wallBroken){const w=c.crackedWall;list.push({x:w.x,y:w.y,w:w.w,h:w.h,style:'wall'})}
  const a=c.arena;if(run.arena.entry>0)list.push({x:a.entryGate,y:200,w:30,h:500,style:'gate'});if(run.arena.exit<.8)list.push({x:a.exitGate,y:200,w:30,h:500,style:'gate'});
  return list},
 cameraLock(run){if(run.arena.active&&!run.state.bossDefeated)return{x:run.cfg.arena.x};return null},
 bossHud(run){return run.arena.active&&run.boss.state!=='dead'},
 /* -------- per-frame logic */
 update(run,dt){
  const c=run.cfg,s=run.state,p=run.p;
  run.banner.t=Math.max(0,run.banner.t-dt);run.wrongT=Math.max(0,run.wrongT-dt);run.wallShake=Math.max(0,run.wallShake-dt);
  for(const k in run.leverCool)run.leverCool[k]=Math.max(0,run.leverCool[k]-dt);
  if(run.runeReset>0){run.runeReset-=dt;if(run.runeReset<=0&&!s.gateOpen){s.runes=[];run.audio.at('lever',run.cfg.levers[0].x,{vol:.3,rate:.7})}}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:3.6,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=6}}
  // rune gate opening animation
  if(s.gateOpen&&run.gateRise<480){run.gateRise=Math.min(480,run.gateRise+dt*220);if(Math.random()<.5)run.fx.debris(c.runeGate.x+20,c.runeGate.y+c.runeGate.h-run.gateRise,1);run.camera.shake=Math.max(run.camera.shake,2)}
  // darts (disabled by the gear mechanism)
  for(const d of run.darts){if(s.trapsOff){d.warn=0;continue}if(Math.abs(p.x-d.x)>1000||Math.abs(p.y-d.y)>500){continue}d.t+=dt;const phase=d.t%d.period;d.warn=phase>d.period-.55?1-(d.period-phase)/.55:0;
   if(Math.floor((d.t-dt)/d.period)!==Math.floor(d.t/d.period)){const life=Math.abs(d.x-d.toX)/380;run.projectiles.push({kind:'dart',owner:'enemy',x:d.x-12,y:d.y,vx:d.dir*380,vy:0,w:24,h:6,dmg:12,life,high:d.height==='high'});run.audio.at('dart',d.x,{vol:.8})}}
  // spike trap cycle
  run.spikeT+=dt;
  // arena trigger + gates
  const a=c.arena,b=run.boss;
  if(!s.bossDefeated&&!run.arena.active&&p.x>a.trigger&&!p.dead){run.arena.active=true;b.start();run.audio.play('gateSlam',{vol:.9})}
  run.arena.entry=run.arena.active&&!s.bossDefeated?Math.min(1,run.arena.entry+dt*3):Math.max(0,run.arena.entry-dt*1.5);
  if(s.bossDefeated&&run.arena.exit<1){if(b.deadT>1.6){if(run.arena.exit===0){run.audio.play('gateOpen',{vol:1});run.fx.burst(a.exitGate+20,520,'#ffe3a0',30)}run.arena.exit=Math.min(1,run.arena.exit+dt*.6)}}
  b.update(dt);
  if(s.bossDefeated&&run.arena.exit>.8&&p.x+p.w/2>a.exitX&&!p.dead&&run.phase==='play'){run.complete({secrets:(s.wallBroken?1:0)+(run.opened.has('vault')?1:0),secretTotal:2})}
 },
 heroHazards(run,dt){
  const p=run.p;
  for(const sp of run.cfg.spikes){const ph=(run.spikeT+sp.offset)%sp.cycle,up=ph<sp.up;if(up&&!p.dead&&overlap(p,{x:sp.x,y:sp.y-30,w:sp.w,h:30})){if(run.hurtPlayer(18,0,null,0)){p.vy=-420}}
   if(Math.abs(ph-0)<dt&&Math.abs(p.x-sp.x)<700)run.audio.at('spikes',sp.x+sp.w/2,{vol:.8})}
 },
 strike(run,box,dmg,step){
  const c=run.cfg,s=run.state;let hit=false;
  for(const lv of c.levers){if(!overlap(box,{x:lv.x-24,y:lv.y-74,w:48,h:74}))continue;hit=true;def.pullLever(run,lv)}
  const w=c.crackedWall;if(!s.wallBroken&&overlap(box,{x:w.x-6,y:w.y,w:w.w+12,h:w.h})){hit=true;def.hitWall(run)}
  const g=c.gear;if(overlap(box,{x:g.x-30,y:g.y-74,w:60,h:74})){hit=true;def.pullGear(run)}
  const b=run.boss;if(b.state!=='dead'&&b.state!=='dormant'&&overlap(box,b.box())){if(b.damage(dmg,run.p.dir)){hit=true;run.fx.spark(b.x-run.p.dir*30,run.p.y+run.p.h*.4,'#7dfbe0',14);run.fx.text(String(dmg),b.x,run.world.ground-b.h-20-b.airY,step===3?'#ffd36b':'#ffffff',step===3);run.focus(null)}}
  return hit;
 },
 dashStrike(run,box,dmg){
  const b=run.boss;if(b.state==='dead'||b.state==='dormant'||!overlap(box,b.box())||!b.damage(dmg,run.p.dir))return false;
  run.fx.spark(b.x,run.p.y+run.p.h*.45,'#9fe4ff',14);run.fx.text(String(dmg),b.x,run.world.ground-b.h-20-b.airY,'#9fe4ff');return true;
 },
 projectileHit(run,q){
  if(q.owner!=='hero')return false;const c=run.cfg,s=run.state;
  for(const lv of c.levers)if(overlap(q,{x:lv.x-20,y:lv.y-74,w:40,h:74})){def.pullLever(run,lv);return true}
  const w=c.crackedWall;if(!s.wallBroken&&overlap(q,{x:w.x,y:w.y,w:w.w,h:w.h})){def.hitWall(run);return true}
  const g=c.gear;if(overlap(q,{x:g.x-26,y:g.y-70,w:52,h:70})){def.pullGear(run);return true}
  const b=run.boss;if(overlap(q,b.box())&&b.damage(q.dmg,Math.sign(q.vx))){run.fx.spark(q.x,q.y,'#7dfbe0',10);run.fx.text(String(q.dmg),b.x,run.world.ground-b.h-20);return true}
  return false;
 },
 pullLever(run,lv){
  const s=run.state,order=run.cfg.runeOrder;if((run.leverCool[lv.id]||0)>0||run.runeReset>0)return;run.leverCool[lv.id]=.5;
  if(s.gateOpen||s.runes.includes(lv.symbol)){run.audio.at('lever',lv.x,{vol:.4});return}
  s.runes.push(lv.symbol);run.audio.at('lever',lv.x);run.fx.burst(lv.x,lv.y-50,'#72fbe0',12);
  const ok=s.runes.every((r,i)=>r===order[i]);
  if(!ok){run.wrongT=1.2;run.runeReset=.7;run.audio.at('wrong',lv.x);run.fx.text(text(run.lang,'wrong'),lv.x,lv.y-110,'#ff8b7a');return}
  run.fx.text(text(run.lang,'runeLit')+' '+s.runes.length+'/3',lv.x,lv.y-110,'#7dfbe0');run.audio.play('rune',{vol:.8,rate:1+s.runes.length*.12});
  if(s.runes.length===order.length){s.gateOpen=true;run.audio.play('gateOpen',{vol:1});run.audio.at('rumble',run.cfg.runeGate.x,{vol:1});run.banner={t:3,text:text(run.lang,'gateOpen')};run.camera.shake=8;run.save()}
 },
 hitWall(run){const s=run.state,w=run.cfg.crackedWall;if(s.wallBroken)return;s.wallHits++;run.wallShake=.25;run.fx.debris(w.x+w.w/2,w.y+w.h*.5,8);run.audio.at('crack',w.x,{vol:1});
  if(s.wallHits>=w.hits){s.wallBroken=true;run.fx.debris(w.x+w.w/2,w.y+w.h*.4,40);run.audio.at('wallBreak',w.x,{vol:1});run.camera.shake=8;run.banner={t:3,text:text(run.lang,'wallBreak')};run.save()}else run.fx.text(text(run.lang,'wallHit'),w.x,w.y-20,'#ffe3a0')},
 pullGear(run){const s=run.state,g=run.cfg.gear;if(s.trapsOff)return;s.trapsOff=true;for(const m of run.movers)if(m.power==='gear')m.active=true;run.audio.at('mechanism',g.x,{vol:1});run.fx.burst(g.x,g.y-40,'#72fbe0',20);run.banner={t:3.2,text:text(run.lang,'gear')};run.projectiles=run.projectiles.filter(q=>q.kind!=='dart');run.save()},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 onRespawn(run){
  const s=run.state;if(!s.gateOpen)s.runes=[];
  if(!s.bossDefeated){run.boss.reset();run.arena.active=false;run.arena.entry=0;run.audio.playMusic('ruins',1)}
 },
 ambience(run){
  if(!run.audio.ctx)return;const z=def.zone(run).id,p=run.p;const outdoor=z==='entrance'||z==='courtyard'||z==='gate';
  run.audio.loop('wind',outdoor?.55:.12);run.audio.loop('cave',z==='underground'?.6:z==='temple'?.32:0);
  let wv=0;for(const [x,top,bottom,w] of run.cfg.decor.waterfalls){const d=Math.hypot(p.x-x,(p.y+p.h/2)-(top+bottom)/2*.0-(p.y+p.h/2)*0);wv=Math.max(wv,clamp(1-Math.abs(p.x-x)/900,0,1))}
  run.audio.loop('water',wv*.85);
 },
 /* -------- drawing */
 drawBackground(run,c){
  // Painted panoramas per area (tools/scenes.py), cross-faded near area borders, with parallax.
  const cam=run.camera,mid=cam.x+E.W/2,zs=run.cfg.zones;c.fillStyle='#03060d';c.fillRect(0,0,E.W,H);
  const wts=new Map();for(const o of [-240,-120,0,120,240]){const z=zs.find(q=>mid+o>=q.from&&mid+o<q.to)||(mid+o<0?zs[0]:zs.at(-1));wts.set(z,(wts.get(z)||0)+.2)}
  for(const [z,wt] of wts){const im=run.images['plate-'+z.id+'.webp'];if(!im)continue;const span=z.to-z.from,k=Math.min(.32,(im.width-E.W)/(span+E.W));
   const px=-clamp((cam.x-z.from+E.W*.5)*k,0,im.width-E.W),base=(z.camY??(z.ground??700)-400),py=clamp(-150-(cam.y-base)*.22,-(im.height-H),0);
   c.globalAlpha=wt;c.drawImage(im,Math.round(px),Math.round(py));}
  c.globalAlpha=1;
  if(run.fog&&!run.fx.reduced){c.globalAlpha=.25;const fx=-((cam.x*.5+run.time*8)%1024);for(let x=fx;x<E.W;x+=1024)c.drawImage(run.fog,x,300,1024,256);c.globalAlpha=1}
 },
 drawBack(run,c){
  const cam=run.camera,d=run.cfg.decor,img=run.propsBack,env=run.envMeta.props;
  // light rays through broken ceilings / canopy
  for(const [x,w] of d.rays){if(x<cam.x-300||x>cam.x+E.W+300)continue;c.save();c.globalCompositeOperation='lighter';const sway=Math.sin(run.time*.5+x)*14;if(!run.rayGrad){const g=c.createLinearGradient(0,200,0,900);g.addColorStop(0,'rgba(210,235,255,.22)');g.addColorStop(1,'rgba(210,235,255,0)');run.rayGrad=g}c.fillStyle=run.rayGrad;c.beginPath();c.moveTo(x-w/2,200);c.lineTo(x+w/2,200);c.lineTo(x+w*1.6+sway,x>6500?1100:700);c.lineTo(x-w*.7+sway,x>6500?1100:700);c.closePath();c.fill();c.restore()}
  // waterfalls (behind terrain)
  for(const [x,top,bottom,w] of d.waterfalls){if(x+w<cam.x-50||x-w>cam.x+E.W+50)continue;run.fallGrad??={};let g=run.fallGrad[x];if(!g){g=c.createLinearGradient(x-w/2,0,x+w/2,0);g.addColorStop(0,'rgba(60,120,160,.75)');g.addColorStop(.35,'rgba(170,225,240,.9)');g.addColorStop(.7,'rgba(110,180,210,.85)');g.addColorStop(1,'rgba(50,100,140,.7)');run.fallGrad[x]=g}c.fillStyle=g;c.fillRect(x-w/2,top,w,bottom-top);
   c.strokeStyle='rgba(235,250,255,.55)';c.lineWidth=2;for(let i=0;i<8;i++){const sx=x-w/2+4+i*(w-8)/7;const off=((run.time*260+i*57)%120);c.beginPath();for(let y=top-120+off;y<bottom;y+=120){c.moveTo(sx,Math.max(top,y));c.lineTo(sx+Math.sin(y*.05+i)*2,Math.min(bottom,y+60))}c.stroke()}
   run.fx.glow(c,x,bottom-10,w*1.3,'rgba(200,240,255,',.45);if(Math.random()<.3&&!run.fx.reduced)run.fx.splash(x+(Math.random()-.5)*w,bottom-4,1)}
  // back architecture (darkened atlas)
  for(const [name,x,y,s] of d.back){const r=env[name];if(!r)continue;const w=r[2]*2*s,h=r[3]*2*s;if(x+w<cam.x-40||x>cam.x+E.W+40)continue;run.blit(c,img,r,x,y-h,w,h)}
  // murals (puzzle clue), brighter so they read clearly
  for(const key of ['mural','muralGate']){const [x,y]=d[key];const sz=run.propSize('mural',2);if(x<cam.x-200||x>cam.x+E.W+100)continue;run.fx.glow(c,x+sz.w/2,y+sz.h/2,110,'rgba(232,217,164,',.25);run.prop(c,'mural',x,y,2)}
  // torches on walls
  for(const [x,y] of d.torches){if(x<cam.x-80||x>cam.x+E.W+80)continue;run.prop(c,'torch',x-12,y,2);run.fire(c,x,y+2,1,true)}
  for(const [x,y,kind] of d.crystals){if(x<cam.x-80||x>cam.x+E.W+80)continue;const sz=run.propSize(kind);run.fx.glow(c,x,y-sz.h*.5,70+8*Math.sin(run.time*2+x),kind==='crystalTeal'?'rgba(80,240,220,':'rgba(190,120,255,',.5);run.prop(c,kind,x-sz.w/2,y-sz.h)}
  for(const [x,y] of d.lanterns||[]){if(x<cam.x-80||x>cam.x+E.W+80)continue;c.fillStyle='#2b1c12';c.fillRect(x-3,y-84,6,84);c.fillStyle='#4a3020';c.fillRect(x-3,y-84,2,84);c.fillRect(x-9,y-86,18,5);c.fillStyle='#23170f';c.fillRect(x-8,y-80,16,22);c.fillStyle='#ffcf7a';c.fillRect(x-5,y-77,10,16);c.fillStyle='#fff3c4';c.fillRect(x-2,y-73,4,8);run.fx.glow(c,x,y-69,46+4*Math.sin(run.time*6+x),'rgba(255,170,70,',.75)}
  for(const [x,y] of d.flags){if(x<cam.x-80||x>cam.x+E.W+80)continue;const sz=run.propSize('flag');c.save();c.translate(x,y-sz.h);c.transform(1,0,Math.sin(run.time*2+x)*.04,1,0,0);run.prop(c,'flag',0,0,2);c.restore()}
  for(const [x,y] of d.bones){if(x<cam.x-80||x>cam.x+E.W+80)continue;const sz=run.propSize('bones');run.prop(c,'bones',x,y-sz.h+4)}
  for(const [x,y] of d.ferns){if(x<cam.x-120||x>cam.x+E.W+120)continue;const i=Math.abs(Math.round(x/53))%3,r=run.envMeta.props['fern'+i];run.blit(c,run.images['props.png'],r,x-r[2],y-r[3]*2+6,r[2]*2,r[3]*2)}
  for(const [x,y] of d.rubble){if(x<cam.x-100||x>cam.x+E.W+100)continue;const sz=run.propSize('rubble');run.prop(c,'rubble',x-sz.w/2,y-sz.h+4)}
 },
 drawMid(run,c){
  const cfg=run.cfg,s=run.state,cam=run.camera;
  def.drawWater(run,c);
  // spike trap with telegraph
  for(const sp of cfg.spikes){if(sp.x>cam.x+E.W||sp.x+sp.w<cam.x)continue;const ph=(run.spikeT+sp.offset)%sp.cycle,up=ph<sp.up,warn=ph>sp.cycle-sp.warn;const rise=up?Math.min(1,ph/.08):0;
   c.fillStyle='#2a1d1d';c.fillRect(sp.x,sp.y-4,sp.w,6);if(warn){c.fillStyle='rgba(255,90,60,'+(.35+.3*Math.sin(run.time*30))+')';c.fillRect(sp.x,sp.y-6,sp.w,6)}
   if(rise>0)for(let x=sp.x;x<sp.x+sp.w;x+=32)run.tile(c,'spikes',x,sp.y-30*rise,32,30*rise+2)}
  // rune levers
  for(const lv of cfg.levers){if(lv.x<cam.x-100||lv.x>cam.x+E.W+100)continue;const on=s.gateOpen||s.runes.includes(lv.symbol);const name='lever_'+lv.symbol+(on?'_on':'');const sz=run.propSize(name);if(on)run.fx.glow(c,lv.x,lv.y-46,60,'rgba(114,251,224,',.6+.2*Math.sin(run.time*4));if(run.wrongT>0)run.fx.glow(c,lv.x,lv.y-46,60,'rgba(255,90,60,',run.wrongT);run.prop(c,name,lv.x-sz.w/2,lv.y-sz.h)}
  // rune gate (slides up into the ceiling) with order sockets
  const g=cfg.runeGate;if(g.x>cam.x-100&&g.x<cam.x+E.W+100){c.save();c.beginPath();c.rect(g.x-20,g.y,g.w+40,g.h);c.clip();const top=g.y-run.gateRise;const sz=run.propSize('gate');for(let y=top;y<top+g.h;y+=sz.h-12)run.prop(c,'gate',g.x+g.w/2-sz.w/2,y,2);
   cfg.runeOrder.forEach((sym,i)=>{const lit=s.gateOpen||i<s.runes.length;const cy=top+80+i*140;run.fx.glow(c,g.x+g.w/2,cy,lit?46:24,lit?'rgba(114,251,224,':'rgba(120,130,130,',lit?.9:.25);const nm='lever_'+sym+(lit?'_on':'');const r=run.envMeta.props[nm];run.blit(c,run.images['props.png'],[r[0]+5,r[1]+13,16,16],g.x+g.w/2-16,cy-16,32,32)});
   c.restore()}
  // cracked wall (secret)
  const w=cfg.crackedWall;if(!s.wallBroken&&w.x>cam.x-100&&w.x<cam.x+E.W+100){const shake=run.wallShake>0?(Math.random()-.5)*5:0;const nm='crack'+Math.min(2,s.wallHits);const r=run.envMeta.props[nm];run.blit(c,run.images['props.png'],r,w.x+shake-6,w.y,w.w+12,w.h);if(Math.sin(run.time*3)>.7)run.fx.glow(c,w.x+w.w/2,w.y+w.h*.5,22,'rgba(255,211,107,',.5)}
  // gear mechanism
  const gr=cfg.gear;if(gr.x>cam.x-100&&gr.x<cam.x+E.W+100){const nm=s.trapsOff?'gearOn':'gearOff';const sz=run.propSize(nm);c.save();run.fx.glow(c,gr.x,gr.y-50,50,s.trapsOff?'rgba(114,251,224,':'rgba(255,120,80,',.45);run.prop(c,nm,gr.x-sz.w/2,gr.y-sz.h);c.restore()}
  // dart totem + launchers
  const d0=run.darts[0];if(d0&&d0.x>cam.x-200&&d0.x<cam.x+E.W+200){c.fillStyle='#2b3134';c.fillRect(d0.x-10,860,44,180);c.fillStyle='#3a4246';for(let y=870;y<1040;y+=24)c.fillRect(d0.x-8,y,40,4);
   for(const d of run.darts){const nm=d.warn>0?'dartOn':'dartOff';run.prop(c,nm,d.x-12,d.y-24,2);if(d.warn>0)run.fx.glow(c,d.x,d.y,30+30*d.warn,d.height==='low'?'rgba(255,90,60,':'rgba(120,180,255,',.4+.5*d.warn)}}
  // arena gates
  const a=cfg.arena;if(a.entryGate>cam.x-100&&a.entryGate<cam.x+E.W+100&&run.arena.entry>0){c.save();c.beginPath();c.rect(a.entryGate-10,200,50,500);c.clip();const y=200+500*(1-run.arena.entry)-500;for(let k=0;k<4;k++){c.fillStyle=k%2?'#5d6470':'#7b8592';}c.fillStyle='#3a3f48';for(let x=a.entryGate;x<a.entryGate+30;x+=10)c.fillRect(x+2,y,5,500);for(let yy=y+20;yy<y+500;yy+=60)c.fillRect(a.entryGate,yy,30,6);c.restore()}
  if(a.exitGate>cam.x-300&&a.exitGate<cam.x+E.W+300){const sz=run.propSize('bossGate',2);const gx=a.exitGate-70,gy=700-sz.h;const open=run.arena.exit;const door=run.propSize('door',2);
   if(open>0){run.fx.glow(c,gx+sz.w/2,gy+sz.h*.6,160*open,'rgba(255,230,160,',.7*open)}
   c.save();c.beginPath();c.rect(gx+38,gy+50,sz.w-76,sz.h-50);c.clip();const dw=(sz.w-76)/2;run.prop(c,'door',gx+38-dw*open*.95,gy+56,2);run.prop(c,'door',gx+38+dw+dw*open*.95,gy+56,2,{flip:true});c.restore();run.prop(c,'bossGate',gx,gy,2)}
 },
 drawWater(run,c){
  const wcfg=run.cfg.water;if(!wcfg)return;const cam=run.camera,y=wcfg.y,t=run.time;if(y>cam.y+H)return;
  for(const [a,b] of wcfg.spans){const x0=Math.max(a,cam.x-20),x1=Math.min(b,cam.x+E.W+20);if(x1<=x0)continue;
   if(!run.waterGrad){const g=c.createLinearGradient(0,y,0,y+300);g.addColorStop(0,'rgba(10,34,58,.55)');g.addColorStop(1,'rgba(3,10,22,.92)');run.waterGrad=g}
   c.fillStyle=run.waterGrad;c.fillRect(x0,y,x1-x0,run.world.height-y);
   c.fillStyle='rgba(170,215,235,.55)';c.fillRect(x0,y,x1-x0,2);
   // drifting ripple highlights
   c.fillStyle='rgba(150,200,230,.28)';for(let i=0;i<46;i++){const rx=a+((i*197+t*(18+i%5*6))%(b-a)),ry=y+8+((i*53)%150);if(rx<x0||rx>x1)continue;const len=10+(i*7)%26;c.fillRect(rx,ry+Math.sin(t*2+i)*2,len,2)}
   // lantern / torch reflections
   for(const [lx] of run.cfg.decor.lanterns||[]){if(lx<x0-30||lx>x1+30)continue;for(let k=0;k<9;k++){const ry=y+10+k*15,w=6+k*1.5+Math.sin(t*3+k+lx)*3;c.fillStyle='rgba(255,180,90,'+(.5-k*.05)+')';c.fillRect(lx-w/2+Math.sin(t*2.4+k*1.3)*4,ry,w,3)}}
  }
 },
 drawActors(run,c){run.boss.draw(c);
  // vault lift power cable glows once the gear is active
 },
 drawProjectile(run,c,q){
  if(q.kind==='dart'){c.fillStyle='#c9d2dc';c.fillRect(-12,-2,24,4);c.fillStyle=q.high?'#78b4ff':'#ff6a3c';c.beginPath();c.moveTo(-16,0);c.lineTo(-9,-5);c.lineTo(-9,5);c.fill();run.fx.glow(c,0,0,18,q.high?'rgba(120,180,255,':'rgba(255,90,60,',.5)}
  else if(q.kind==='crystal'){c.rotate(run.time*8);run.fx.glow(c,0,0,26,'rgba(255,160,70,',.7);c.fillStyle='#ffcf8a';c.beginPath();c.moveTo(0,-11);c.lineTo(7,0);c.lineTo(0,11);c.lineTo(-7,0);c.fill();c.fillStyle='#ff8a2a';c.fillRect(-2,-6,4,12)}
 },
 drawFront(run,c){
  const cam=run.camera,d=run.cfg.decor;
  for(const [x,y] of d.vines){if(x<cam.x-80||x>cam.x+E.W+80)continue;const i=Math.abs(Math.round(x/37))%3,r=run.envMeta.props['vine'+i];c.save();c.translate(x,y);c.rotate(Math.sin(run.time*1.3+x)*.04);run.blit(c,run.images['props.png'],r,-r[2],0,r[2]*2,r[3]*2);c.restore()}
 },
 drawLighting(run,c){
  const z=run.cfg.zones,cam=run.camera,mid=cam.x+E.W/2;let amb=0;for(const o of [-200,-100,0,100,200]){const zz=z.find(q=>mid+o>=q.from&&mid+o<q.to)||z.at(-1);amb+=zz.ambient/5}
  const L=run.lightCtx,Q=4,lw=E.W/Q,lh=H/Q;L.globalCompositeOperation='source-over';L.globalAlpha=1;L.clearRect(0,0,lw,lh);L.fillStyle='rgba(4,8,18,'+amb.toFixed(3)+')';L.fillRect(0,0,lw,lh);
  L.globalCompositeOperation='destination-out';const spot=run.fx.glowSprite('rgba(255,255,255,');
  const hole=(x,y,r,a=1)=>{const sx=(x-cam.x)/Q,sy=(y-cam.y)/Q,sr=r/Q;if(sx<-sr||sx>lw+sr||sy<-sr||sy>lh+sr)return;L.globalAlpha=a;L.drawImage(spot,sx-sr,sy-sr,sr*2,sr*2)};
  const d=run.cfg.decor,f=Math.sin(run.time*11)*.06;
  for(const [x,y] of d.torches)hole(x,y,300*(1+f),1);
  for(const [x,y] of d.lanterns||[])hole(x,y-69,320*(1+f),1);
  for(const [x,y] of d.crystals)hole(x,y-30,240,.9);
  for(const cp of run.cfg.checkpoints)hole(cp.x,cp.y-40,cp.id<=run.checkpoint?340:160,1);
  for(const [x,top,bottom,w] of d.waterfalls)hole(x,bottom-80,260,.8);
  for(const [x] of d.rays)hole(x+40,520,380,.7);
  for(const ch of run.chests)if(!ch.open)hole(ch.x,ch.y-20,170,.8);
  const p=run.p;hole(p.x+p.w/2,p.y+p.h*.4,300,.85);
  if(run.boss.state!=='dormant'&&run.boss.state!=='dead')hole(run.boss.x,run.world.ground-120,420,.9);
  for(const q of run.projectiles)hole(q.x,q.y,120,.7);
  for(const lv of run.cfg.levers)if(run.state.gateOpen||run.state.runes.includes(lv.symbol))hole(lv.x,lv.y-40,200,.8);
  if(run.arena.exit>0)hole(run.cfg.arena.exitGate,520,520*run.arena.exit,1);
  L.globalAlpha=1;c.save();c.imageSmoothingEnabled=true;c.drawImage(run.light,0,0,E.W,H);c.restore();c.imageSmoothingEnabled=false;
  // floating dust motes in the light (screen space, cheap)
  if(!run.fx.reduced){c.save();c.fillStyle='rgba(255,236,190,.35)';for(const m of run.motes){const x=((m.x-cam.x*m.s*.3+run.time*8*m.s)%E.W+E.W)%E.W,y=((m.y+Math.sin(run.time*.7+m.x)*14-cam.y*m.s*.2)%H+H)%H;c.fillRect(x,y,2,2)}c.restore()}
  // vignette
  c.save();c.imageSmoothingEnabled=true;c.drawImage(run.vignette,0,0,E.W,H);c.restore();c.imageSmoothingEnabled=false;
  if(run.phase==='complete'&&run.celebrate>0){for(let i=0;i<4;i++)run.fx.cap(run.fx.parts,{x:cam.x+Math.random()*E.W,y:cam.y-10,vx:(Math.random()-.5)*60,vy:60+Math.random()*80,g:120,life:2,max:2,size:4,color:['#ffd36b','#7dfbe0','#ff7d6b','#ffffff'][i]},160)}
 },
 drawHud(run,c){
  // big centred banner (level title, hints, events)
  if(run.banner.t>0){const k=Math.min(1,run.banner.t,4.5-run.banner.t+.001);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=run.banner.small?150:190;c.fillStyle='rgba(8,14,24,.72)';c.beginPath();c.roundRect(E.W/2-300,y-34,600,run.banner.small?44:58,14);c.fill();c.strokeStyle='#d9b56c88';c.lineWidth=2;c.stroke();c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';c.fillStyle='#ffe3a6';c.fillText(run.banner.text,E.W/2,y+(run.banner.small?-5:6));c.restore()}
  // boss health bar
  const b=run.boss;if(def.bossHud(run)){const x=E.W/2-210,y=104;run.panel(c,x-12,y-8,444,52);c.textAlign='left';c.font='800 15px Georgia, serif';c.fillStyle='#ffffff';c.fillText(text(run.lang,'boss'),x,y+12);c.textAlign='right';c.fillStyle='#ffd36b';c.fillText(Math.ceil(b.hp)+'/'+b.max,x+420,y+12);run.bar(c,x,y+20,420,14,b.hp/b.max,b.rage?'#ff9f43':'#5ef0d0',b.rage?'#a3460f':'#1f8a78',true);c.fillStyle='#ffffffaa';c.fillRect(x+420*b.cfg.rageAt/b.max-1,y+18,2,18)}
 }
};
E.register(def);
window.PirateLevel03={def,Guardian,text,launch:opts=>E.launch(3,opts)};
})();
