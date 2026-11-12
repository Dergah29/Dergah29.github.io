/* Pirate Strike — reusable side-scrolling level engine (Level 3 is the first user).
 * Owns: DOM mount, touch/keyboard input, physics, Combat V2-style hero combat
 * (combo attack, block, dash, sword throw, double jump), reusable enemies and
 * mechanisms, camera, lighting, effects, audio buses, HUD, save and the
 * checkpoint / death / completion flow. Level files add content and hooks. */
(()=>{'use strict';
if(window.PirateLevelEngine)return;
// W (view width) follows the phone's aspect ratio inside the safe area (960..1280 at a fixed 540 height), so
// wide screens show more of the level instead of black bars, and nothing is ever stretched.
let W=960;const H=540,DT=1/60,TAU=Math.PI*2;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
const lerp=(a,b,t)=>a+(b-a)*t;
// Physics/combat numbers mirror the Blacktide adventure runtime and Combat V2.
const MAX_LIVES=5,HEART_HEAL=30;   // life hearts: +1 life up to 5; at 5 lives a heart heals instead
const PHYS={gravity:1300,run:225,blockRun:60,jump:510,maxFall:900,coyote:.1,buffer:.13,dash:.17,dashSpeed:550,dashCool:.85};
const COMBAT={damage:[23,23,34],cool:.3,chain:.42,reach:84,throwDamage:18,dashDamage:16,ammo:3,reload:1};

const TEXT={
en:{endlessOpen:'Endless Sea unlocked!',pistol:'PISTOL',pause:'PAUSED',resume:'RESUME',sound:'SOUND',vibration:'VIBRATION',on:'ON',off:'OFF',map:'WORLD MAP',retry:'RETRY FROM CHECKPOINT',restart:'RESTART LEVEL',over:'DEFEATED',overHint:'Your progress in this level is kept at the last checkpoint.',complete:'LEVEL COMPLETE',gold:'Gold',time:'Time',enemies:'Enemies',secrets:'Secrets',chests:'Treasure',next:'CONTINUE',replay:'PLAY AGAIN',lives:'lives',sword:'SWORD',checkpoint:'CHECKPOINT',loading:'Loading level…',failed:'This level could not load. Please try again.',back:'BACK',unlocked:'unlocked',rotate:'Rotate your phone to landscape',block:'BLOCK',dash:'DASH',throw:'THROW',attack:'ATTACK',jump:'JUMP',blocked:'BLOCKED',newLife:'Lives',lifeUp:'+1 LIFE',lifeFull:'LIVES FULL +30'},
az:{endlessOpen:'Sonsuz Dəniz açıldı!',pistol:'TAPANÇA',pause:'FASİLƏ',resume:'DAVAM ET',sound:'SƏS',vibration:'TİTRƏMƏ',on:'AÇIQ',off:'BAĞLI',map:'DÜNYA XƏRİTƏSİ',retry:'YOXLAMA NÖQTƏSİNDƏN',restart:'SƏVİYYƏNİ YENİDƏN BAŞLA',over:'MƏĞLUB OLDUN',overHint:'Bu səviyyədəki irəliləyişin son yoxlama nöqtəsində saxlanılıb.',complete:'SƏVİYYƏ TAMAMLANDI',gold:'Qızıl',time:'Vaxt',enemies:'Düşmənlər',secrets:'Sirlər',chests:'Xəzinə',next:'DAVAM ET',replay:'YENİDƏN OYNA',lives:'can',sword:'QILINC',checkpoint:'YOXLAMA NÖQTƏSİ',loading:'Səviyyə yüklənir…',failed:'Səviyyə yüklənmədi. Yenidən cəhd et.',back:'GERİ',unlocked:'açıldı',rotate:'Telefonu üfüqi vəziyyətə çevir',block:'BLOK',dash:'YAYIN',throw:'AT',attack:'VUR',jump:'TULLAN',blocked:'BLOK',newLife:'Can',lifeUp:'+1 CAN',lifeFull:'CAN DOLU +30'},
tr:{endlessOpen:'Sonsuz Deniz açıldı!',pistol:'TABANCA',pause:'DURAKLATILDI',resume:'DEVAM',sound:'SES',vibration:'TİTREŞİM',on:'AÇIK',off:'KAPALI',map:'DÜNYA HARİTASI',retry:'KAYIT NOKTASINDAN',restart:'BÖLÜMÜ YENİDEN BAŞLAT',over:'YENİLDİN',overHint:'Bu bölümdeki ilerlemen son kayıt noktasında saklandı.',complete:'BÖLÜM TAMAMLANDI',gold:'Altın',time:'Süre',enemies:'Düşmanlar',secrets:'Sırlar',chests:'Hazine',next:'DEVAM',replay:'TEKRAR OYNA',lives:'can',sword:'KILIÇ',checkpoint:'KAYIT NOKTASI',loading:'Bölüm yükleniyor…',failed:'Bölüm yüklenemedi. Tekrar dene.',back:'GERİ',unlocked:'açıldı',rotate:'Telefonu yatay çevir',block:'BLOK',dash:'ATIL',throw:'FIRLAT',attack:'VUR',jump:'ZIPLA',blocked:'BLOK',newLife:'Can',lifeUp:'+1 CAN',lifeFull:'CAN DOLU +30'},
ru:{endlessOpen:'Открыто Бескрайнее море!',pistol:'ПИСТОЛЕТ',pause:'ПАУЗА',resume:'ПРОДОЛЖИТЬ',sound:'ЗВУК',vibration:'ВИБРАЦИЯ',on:'ВКЛ',off:'ВЫКЛ',map:'КАРТА МИРА',retry:'С КОНТРОЛЬНОЙ ТОЧКИ',restart:'ЗАНОВО',over:'ПОРАЖЕНИЕ',overHint:'Прогресс уровня сохранён на последней контрольной точке.',complete:'УРОВЕНЬ ПРОЙДЕН',gold:'Золото',time:'Время',enemies:'Враги',secrets:'Тайники',chests:'Сокровища',next:'ДАЛЕЕ',replay:'ЕЩЁ РАЗ',lives:'жизни',sword:'МЕЧ',checkpoint:'КОНТРОЛЬНАЯ ТОЧКА',loading:'Загрузка уровня…',failed:'Не удалось загрузить уровень.',back:'НАЗАД',unlocked:'открыт',rotate:'Поверните телефон горизонтально',block:'БЛОК',dash:'РЫВОК',throw:'БРОСОК',attack:'УДАР',jump:'ПРЫЖОК',blocked:'БЛОК',newLife:'Жизни',lifeUp:'+1 ЖИЗНЬ',lifeFull:'ЖИЗНИ ПОЛНЫ +30'},
pl:{endlessOpen:'Odblokowano Bezkresne Morze!',pistol:'PISTOLET',pause:'PAUZA',resume:'WZNÓW',sound:'DŹWIĘK',vibration:'WIBRACJE',on:'WŁ',off:'WYŁ',map:'MAPA ŚWIATA',retry:'OD PUNKTU KONTROLNEGO',restart:'OD NOWA',over:'PORAŻKA',overHint:'Postęp poziomu zapisano w ostatnim punkcie kontrolnym.',complete:'POZIOM UKOŃCZONY',gold:'Złoto',time:'Czas',enemies:'Wrogowie',secrets:'Sekrety',chests:'Skarby',next:'DALEJ',replay:'ZAGRAJ PONOWNIE',lives:'życia',sword:'MIECZ',checkpoint:'PUNKT KONTROLNY',loading:'Wczytywanie poziomu…',failed:'Nie udało się wczytać poziomu.',back:'WRÓĆ',unlocked:'odblokowany',rotate:'Obróć telefon poziomo',block:'BLOK',dash:'ZRYW',throw:'RZUT',attack:'ATAK',jump:'SKOK',blocked:'BLOK',newLife:'Życia',lifeUp:'+1 ŻYCIE',lifeFull:'ŻYCIA PEŁNE +30'}};

/* ------------------------------------------------------------------ audio */
class Audio{
 constructor(run){this.run=run;this.ctx=null;this.buffers=new Map();this.loops=new Map();this.log=[];this.music=null;this.musicName=null;this.last=new Map();this.voices=0}
 get enabled(){return this.run.soundOn()}
 ensure(){
  if(this.ctx)return this.ctx;
  const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;
  try{
   const c=this.ctx=new C();
   this.comp=c.createDynamicsCompressor();this.comp.threshold.value=-14;this.comp.knee.value=12;this.comp.ratio.value=6;this.comp.attack.value=.004;this.comp.release.value=.15;
   this.master=c.createGain();this.master.gain.value=this.enabled?.9:0;
   this.analyser=c.createAnalyser();this.analyser.fftSize=512;
   this.master.connect(this.comp);this.comp.connect(this.analyser);this.analyser.connect(c.destination);
   this.bus={music:c.createGain(),amb:c.createGain(),sfx:c.createGain()};
   this.bus.music.gain.value=.34;this.applyVolume();window.PirateMusic?.onChange(()=>this.applyVolume());
   for(const b of Object.values(this.bus))b.connect(this.master);
  }catch{this.ctx=null}
  return this.ctx;
 }
 resume(){const c=this.ensure();if(c&&c.state==='suspended')c.resume().catch(()=>{})}
 async load(base,manifest){
  const c=this.ensure();if(!c)return;
  await Promise.all(Object.entries(manifest).map(async([name,file])=>{
   try{const r=await fetch(base+file);if(!r.ok)throw Error(file);const data=await r.arrayBuffer();
    const buf=await new Promise((ok,fail)=>{const p=c.decodeAudioData(data,ok,fail);if(p&&p.then)p.then(ok,fail)});this.buffers.set(name,buf)}catch(e){this.run.warn('audio '+file+': '+e)}
  }));
 }
 applyVolume(){if(!this.bus)return;const k=window.PirateMusic?.settings.sfx??1;this.bus.amb.gain.value=.42*k;this.bus.sfx.gain.value=.85*k}
 setEnabled(on){if(!this.ctx)return;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t);this.master.gain.setTargetAtTime(on?.9:0,t,.08)}
 play(name,{vol=1,rate=1,pan=0,gap=.03}={}){
  const c=this.ctx;if(!c||!this.enabled)return false;const b=this.buffers.get(name);if(!b)return false;
  const now=c.currentTime;if(now-(this.last.get(name)||-1)<gap)return false;this.last.set(name,now);
  if(this.voices>22)return false;
  const s=c.createBufferSource();s.buffer=b;s.playbackRate.value=rate;const g=c.createGain();g.gain.value=vol;
  let node=g;if(c.createStereoPanner&&pan){const p=c.createStereoPanner();p.pan.value=clamp(pan,-1,1);g.connect(p);node=p}
  s.connect(g);node.connect(this.bus.sfx);this.voices++;s.onended=()=>{this.voices--};s.start();
  this.log.push(name);if(this.log.length>200)this.log.shift();return true;
 }
 at(name,x,opt={}){const d=x-(this.run.camera.x+W/2);const fall=clamp(1-Math.abs(d)/900,0,1);if(fall<=0)return false;return this.play(name,{...opt,vol:(opt.vol??1)*(.35+.65*fall),pan:clamp(d/600,-.8,.8)})}
 playMusic(name,fade=1.2){const D=window.PirateMusic;if(D){this.musicName=name;D.want('level',D.levelTrack(this.run.def.id,name));this.log.push('music:'+name);return}
  const c=this.ctx;if(!c||this.musicName===name)return;const b=this.buffers.get(name);const now=c.currentTime;
  if(this.music){const old=this.music;old.gain.gain.cancelScheduledValues(now);old.gain.gain.setValueAtTime(old.gain.gain.value,now);old.gain.gain.linearRampToValueAtTime(0,now+fade);try{old.src.stop(now+fade+.05)}catch{}}
  this.music=null;this.musicName=name;if(!b)return;
  const src=c.createBufferSource();src.buffer=b;src.loop=true;const g=c.createGain();g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(1,now+fade);src.connect(g);g.connect(this.bus.music);src.start();this.music={src,gain:g};this.log.push('music:'+name);
 }
 stopMusic(fade=.6){if(window.PirateMusic){this.musicName=null;window.PirateMusic.want('level',null);return}if(!this.ctx||!this.music){this.musicName=null;return}const now=this.ctx.currentTime,m=this.music;m.gain.gain.cancelScheduledValues(now);m.gain.gain.setValueAtTime(m.gain.gain.value,now);m.gain.gain.linearRampToValueAtTime(0,now+fade);try{m.src.stop(now+fade+.05)}catch{}this.music=null;this.musicName=null}
 loop(name,vol){
  const c=this.ctx;if(!c)return;let l=this.loops.get(name);
  if(!l){const b=this.buffers.get(name);if(!b)return;const src=c.createBufferSource();src.buffer=b;src.loop=true;const g=c.createGain();g.gain.value=0;src.connect(g);g.connect(this.bus.amb);src.start();l={src,g};this.loops.set(name,l)}
  l.g.gain.setTargetAtTime(this.enabled?vol:0,c.currentTime,.25);
 }
 silenceLoops(){if(!this.ctx)return;for(const l of this.loops.values())l.g.gain.setTargetAtTime(0,this.ctx.currentTime,.15)}
 level(){if(!this.analyser)return 0;const a=new Uint8Array(this.analyser.fftSize);this.analyser.getByteTimeDomainData(a);let s=0;for(const v of a)s+=(v-128)**2;return Math.sqrt(s/a.length)/128}
 close(){this.stopMusic(.2);this.silenceLoops();const c=this.ctx;this.ctx=null;if(c)setTimeout(()=>c.close().catch(()=>{}),400)}
}

/* ------------------------------------------------------------------ sprites */
class Sheet{
 constructor(img,meta){this.img=img;this.meta=meta;this.fw=meta.frameW;this.fh=meta.frameH;this.scale=meta.scale||2;this.white=null}
 frame(anim,t){const a=this.meta.anims[anim]||this.meta.anims.idle;let i=Math.floor(t*a.fps);i=a.loop?i%a.count:Math.min(a.count-1,i);return a.start+i}
 length(anim){const a=this.meta.anims[anim];return a?a.count/a.fps:0}
 whiten(){if(this.white)return this.white;const c=document.createElement('canvas');c.width=this.img.width;c.height=this.img.height;const x=c.getContext('2d');x.drawImage(this.img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#ffffff';x.fillRect(0,0,c.width,c.height);return this.white=c}
 draw(ctx,index,fx,fy,dir,{alpha=1,flash=0,scale=1}={}){
  // fx,fy = feet position in world/screen space. Anchor is the frame's foot point.
  const s=this.scale*scale,ax=this.meta.anchor[0],ay=this.meta.anchor[1];
  ctx.save();ctx.translate(Math.round(fx),Math.round(fy));if(dir<0)ctx.scale(-1,1);ctx.globalAlpha=alpha;if(this.meta.smooth){ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='low'}
  ctx.drawImage(this.img,index*this.fw,0,this.fw,this.fh,-ax*s,-ay*s,this.fw*s,this.fh*s);
  if(flash>0){ctx.globalAlpha=alpha*flash;ctx.drawImage(this.whiten(),index*this.fw,0,this.fw,this.fh,-ax*s,-ay*s,this.fw*s,this.fh*s)}
  ctx.restore();
 }
}

/* ------------------------------------------------------------------ enemies (reusable kit) */
const ENEMY={
 skeleton:{hp:66,w:34,h:76,speed:48,chase:96,sight:300,name:{en:'Skeleton Warrior',az:'Skelet Döyüşçü',tr:'İskelet Savaşçı',ru:'Скелет-воин',pl:'Szkielet wojownik'},gold:3},
 shield:{hp:96,w:40,h:76,speed:38,chase:62,sight:280,name:{en:'Shield Guardian',az:'Qalxanlı Keşikçi',tr:'Kalkanlı Muhafız',ru:'Страж со щитом',pl:'Strażnik z tarczą'},gold:4},
 pirate:{hp:70,w:40,h:96,speed:52,chase:104,sight:320,name:{en:'Pirate Cutthroat',az:'Pirat Qılınclı',tr:'Korsan Kılıççı',ru:'Пират-рубака',pl:'Pirat rębajło'},gold:3,flesh:true},
 gunner:{hp:52,w:40,h:96,speed:0,chase:0,sight:620,name:{en:'Pirate Gunner',az:'Pirat Atıcı',tr:'Korsan Nişancı',ru:'Пират-стрелок',pl:'Pirat strzelec'},gold:4,flesh:true},
 archer:{hp:46,w:32,h:74,speed:0,chase:0,sight:600,name:{en:'Cursed Archer',az:'Lənətli Oxatan',tr:'Lanetli Okçu',ru:'Проклятый лучник',pl:'Przeklęty łucznik'},gold:3}
};
class Enemy{
 constructor(run,d){const t=ENEMY[d.type];this.run=run;this.id=d.id;this.type=d.type;this.def=t;this.w=t.w;this.h=t.h;this.x=d.x-t.w/2;this.floor=d.y;this.y=d.y-t.h;this.range=d.range||[d.x-120,d.x+120];this.hp=t.hp;this.max=t.hp;this.dir=-1;this.state='idle';this.timer=0;this.anim='idle';this.animT=0;this.flash=0;this.hurtT=0;this.dead=false;this.deadT=0;this.cool=1+((d.x*7)%10)/10;this.kb=0;this.alert=false;this.home=this.x}
 get cx(){return this.x+this.w/2}
 setAnim(a){if(this.anim!==a){this.anim=a;this.animT=0}}
 face(p){this.dir=p.x+p.w/2>this.cx?1:-1}
 hurtBox(){return{x:this.x,y:this.y,w:this.w,h:this.h}}
 // returns 'hit' | 'blocked'
 damage(amount,dir,kind){
  const run=this.run;if(this.dead)return'none';
  if(this.type==='shield'&&this.state!=='stun'&&kind!=='heavyBack'){
   const fromFront=(dir<0&&this.dir>0)||(dir>0&&this.dir<0);
   if(fromFront){this.flash=.08;this.kb=dir*60;run.fx.spark(this.cx+this.dir*18,this.y+34,'#ffd88a',10);run.fx.text(run.t('blocked'),this.cx,this.y-6,'#cfe3ff');run.audio.at('clang',this.cx,{rate:.95+Math.random()*.1});run.hitStop(.03);return'blocked'}
  }
  this.hp-=amount;this.flash=.12;this.hurtT=.22;this.kb=dir*(amount>30?260:150);this.alert=true;run.focus(this);run.def.enemyHit?.(this,kind);
  if(this.state==='windup'&&this.type!=='shield'){this.state='recover';this.timer=.35}
  if(this.hp<=0){this.die(dir)}else{this.setAnim('hurt');run.audio.at(this.type==='skeleton'?'boneHit':this.type==='archer'?'ghostHit':this.def.flesh?'fleshHit':'metalHit',this.cx,{rate:.92+Math.random()*.16})}
  return'hit';
 }
 die(dir){const run=this.run;this.dead=true;this.deadT=0;this.setAnim('dead');this.kb=dir*120;run.killed.add(this.id);run.stats.kills++;run.audio.at(this.type==='skeleton'?'boneBreak':this.type==='archer'?'ghostDie':this.def.flesh?'pirateDie':'armorFall',this.cx);run.fx.burst(this.cx,this.y+this.h/2,this.type==='archer'?'#e7a8ff':this.def.flesh?'#ffd08a':'#efe0bf',22);run.dropCoins(this.cx,this.y+20,this.def.gold,'enemy-'+this.id);run.save()}
 update(dt){
  const run=this.run,p=run.p;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);
  if(this.dead){this.deadT+=dt;this.x+=this.kb*dt;this.kb*=.9;return}
  this.hurtT=Math.max(0,this.hurtT-dt);if(Math.abs(this.kb)>1){this.x=clamp(this.x+this.kb*dt,this.range[0]-this.w/2,this.range[1]-this.w/2);this.kb*=Math.pow(.0005,dt)}
  this.cool=Math.max(0,this.cool-dt);
  const dx=p.x+p.w/2-this.cx,dy=(p.y+p.h)-this.floor,near=Math.abs(dx)<this.def.sight&&Math.abs(dy)<160&&!p.dead;
  if(near)this.alert=true;else if(Math.abs(dx)>this.def.sight*1.6)this.alert=false;
  if(this.hurtT>0){this.setAnim('hurt');return}
  this[this.type](dt,dx,dy,near);
 }
 walkTo(target,speed,dt){const lo=this.range[0]-this.w/2,hi=this.range[1]-this.w/2;const goal=clamp(target-this.w/2,lo,hi);const step=clamp(goal-this.x,-speed*dt,speed*dt);this.x+=step;if(Math.abs(step)>.2){this.dir=Math.sign(step);this.setAnim('walk')}else this.setAnim('idle');return Math.abs(goal-this.x)<2}
 patrol(dt){if(this.x<=this.range[0]-this.w/2+1)this.dir=1;if(this.x>=this.range[1]-this.w/2-1)this.dir=-1;const target=this.cx+this.dir*40;if(this.run.def.enemyMove)this.run.def.enemyMove(this,target,this.def.speed,dt);else this.walkTo(target,this.def.speed,dt)}
 pirate(dt,dx,dy,near){return this.skeleton(dt,dx,dy,near)}
 gunner(dt,dx,dy,near){return this.archer(dt,dx,dy,near)}
 skeleton(dt,dx,dy,near){
  const run=this.run,p=run.p,T=this.timing;   // timing: optional per-character attack timing (Enemy Library manifests)
  if(this.state==='windup'){this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='strike';this.timer=T?.strike||.24;run.audio.at('swingEnemy',this.cx);this.hitDone=false}return}
  if(this.state==='strike'){this.setAnim('strike');this.timer-=dt;if(!this.hitDone&&this.timer<(T?(T.strike||.24)*(1-(T.hit??.25)):.18)){this.hitDone=true;const R=this.reach||62,box={x:this.dir>0?this.cx:this.cx-R,y:this.y+8,w:R,h:this.h-10};const hit=overlap(box,p)&&(run.def.enemyAttackAllowed?.(this,box,p)??true)&&run.hurtPlayer(16,this.dir,this);window.PirateEnemyAnim?.impact?.(run,this,hit)}if(this.timer<=0){this.state='recover';this.timer=T?.recover||.55}return}
  if(this.state==='recover'){this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  if(near&&this.alert){this.face(p);if(Math.abs(dx)<(this.reach||62)+2&&Math.abs(dy)<60&&this.cool<=0){this.state='windup';this.timer=T?.windup||.48;this.face(p);run.audio.at('rattle',this.cx,{gap:.4});return}const gap=this.pressureOffset??(this.reach?this.reach*.78:48),target=p.x+p.w/2-Math.sign(dx)*gap;if(run.def.enemyMove)run.def.enemyMove(this,target,this.def.chase,dt);else this.walkTo(target,this.def.chase,dt);this.face(p)}else this.patrol(dt);
 }
 shield(dt,dx,dy,near){
  const run=this.run,p=run.p;
  if(this.state==='windup'){this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='bash';this.timer=.32;run.audio.at('bash',this.cx);this.hitDone=false}return}
  if(this.state==='bash'){this.setAnim('bash');this.timer-=dt;const lo=this.range[0]-this.w/2,hi=this.range[1]-this.w/2;this.x=clamp(this.x+this.dir*240*dt,lo,hi);if(!this.hitDone){const box={x:this.dir>0?this.x+this.w-6:this.x-34,y:this.y+6,w:40,h:this.h-8};if(overlap(box,p)&&(run.def.enemyAttackAllowed?.(this,box,p)??true)){this.hitDone=true;run.hurtPlayer(20,this.dir,this,260)}}if(this.timer<=0){this.state='stun';this.timer=1.15;run.fx.text('!',this.cx,this.y-10,'#ffe38a')}return}
  if(this.state==='stun'){this.setAnim('stun');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=1.2}return}
  if(near&&this.alert){this.face(p);if(Math.abs(dx)<150&&Math.abs(dy)<60&&this.cool<=0){this.state='windup';this.timer=.62;run.audio.at('shieldRaise',this.cx);return}this.walkTo(p.x+p.w/2-Math.sign(dx)*90,this.def.chase,dt);this.face(p);
   // The shield physically blocks the hero unless they dash through.
   if(overlap(p,this)&&p.dash<=0&&!p.dead){const push=dx>0?this.x+this.w-p.x:-(p.x+p.w-this.x);p.x+=push*.5}
  }else this.patrol(dt);
 }
 archer(dt,dx,dy,near){
  const run=this.run,p=run.p;
  if(near&&this.alert)this.face(p);
  if(this.state==='draw'){this.setAnim('draw');this.timer-=dt;if(this.timer<=0){this.state='release';this.timer=.3;this.fire()}return}
  if(this.state==='release'){this.setAnim('release');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=2.1}return}
  this.setAnim('idle');
  if(near&&this.alert&&this.cool<=0&&Math.abs(dx)>70){this.state='draw';this.timer=.85;run.audio.at('bowDraw',this.cx);this.aim={x:p.x+p.w/2,y:p.y+p.h*.45}}
 }
 fire(){const run=this.run,p=run.p;if(this.type==='gunner'){const M=window.PirateEnemyAnim?.point?.(run,this,'muzzle'),sx=M?M[0]:this.cx+this.dir*46,sy=M?M[1]:this.y+this.h*.44,tx=p.x+p.w/2,ty=p.y+p.h*.5;let a=Math.atan2(ty-sy,tx-sx);const base=this.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.3,.3);a=base+rel;run.projectiles.push({kind:'shot',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*430,vy:Math.sin(a)*430,w:12,h:6,dmg:14,life:2,src:this});run.fx.muzzle(sx,sy,this.dir);run.audio.at('pistol',this.cx,{vol:.7,rate:.9});return}const sx=this.cx+this.dir*22,sy=this.y+this.h*.42;const tx=p.x+p.w/2,ty=p.y+p.h*.45;let a=Math.atan2(ty-sy,tx-sx);const base=this.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.42,.42);a=base+rel;const v=330;run.projectiles.push({kind:'arrow',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,w:22,h:6,dmg:15,life:2.6});run.audio.at('bowRelease',this.cx)}
 draw(ctx,run){
  if(run.def.drawEnemy?.(run,ctx,this))return;
  if(window.PirateEnemyAnim?.draw(run,ctx,this))return;   // approved full-body animation (enemy-anim.js), else the sheet below
  const sheet=run.sheets[this.type];if(!sheet)return;
  const alpha=this.dead?clamp(1-(this.deadT-.6)/.6,0,1):1;if(alpha<=0)return;
  const idx=sheet.frame(this.anim,this.animT);
  // Telegraphs: anticipation glow under/around the enemy before it attacks.
  if(this.state==='windup'||this.state==='draw'){const k=this.state==='draw'?1-this.timer/.85:1-this.timer/.6;run.fx.glow(ctx,this.cx+this.dir*14,this.y+this.h*.4,46+20*k,this.type==='archer'?'rgba(240,140,255,':'rgba(255,90,60,',.35+.35*k)}
  if(this.type==='archer'&&this.state==='draw'&&this.aim){ctx.save();ctx.strokeStyle='rgba(240,140,255,'+(0.18+0.3*(1-this.timer/.85))+')';ctx.setLineDash([6,8]);ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(this.cx+this.dir*22,this.y+this.h*.42);ctx.lineTo(this.aim.x,this.aim.y);ctx.stroke();ctx.restore()}
  sheet.draw(ctx,idx,this.cx,this.floor+(this.type==='archer'?Math.sin(run.time*3+this.home)*2:0),this.dir,{alpha,flash:this.flash>0?.85:0});
  if(this.state==='stun'){for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;ctx.fillStyle='#ffe38a';ctx.fillRect(this.cx+Math.cos(a)*14-2,this.y-8+Math.sin(a)*4,4,4)}}
  if(!this.dead&&this.hp<this.max){ctx.fillStyle='#0b0f18cc';ctx.fillRect(this.cx-22,this.y-14,44,6);ctx.fillStyle='#e8484f';ctx.fillRect(this.cx-21,this.y-13,42*this.hp/this.max,4)}
 }
}

/* ------------------------------------------------------------------ effects */
class FX{
 constructor(run){this.run=run;this.parts=[];this.texts=[];this.slashes=[];this.ghosts=[];this.flights=[];this.rings=[];this.glowCache=new Map();this.mq=matchMedia('(prefers-reduced-motion: reduce)')}
 get reduced(){return this.mq.matches}
 get on(){return this.run.effectsOn()&&!this.reduced}
 cap(list,item,n){list.push(item);if(list.length>n)list.splice(0,list.length-n)}
 burst(x,y,color,n=12,speed=1){if(!this.on)n=Math.min(n,4);for(let i=0;i<n;i++){const a=TAU*i/n+Math.random()*.4,s=(90+Math.random()*140)*speed;this.cap(this.parts,{x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-80,g:520,life:.35+Math.random()*.3,max:.6,size:2+Math.random()*3,color},160)}}
 spark(x,y,color='#ffd36b',n=10){for(let i=0;i<n;i++){const a=TAU*i/n+Math.random()*.5,s=160+Math.random()*220;this.cap(this.parts,{x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,g:200,life:.18+Math.random()*.16,max:.3,size:2,color,streak:true},160)}if(this.on)this.cap(this.rings,{x,y,r:4,life:.18,max:.18,color},12)}
 dust(x,y,n=6,dir=0){if(!this.on)return;for(let i=0;i<n;i++)this.cap(this.parts,{x:x+(Math.random()-.5)*20,y:y-2,vx:(Math.random()-.5)*70+dir*40,vy:-30-Math.random()*50,g:-10,life:.4+Math.random()*.3,max:.7,size:3+Math.random()*3,color:'rgba(214,200,170,.55)',soft:true},160)}
 debris(x,y,n=10){for(let i=0;i<n;i++)this.cap(this.parts,{x:x+(Math.random()-.5)*60,y,vx:(Math.random()-.5)*120,vy:-60-Math.random()*120,g:900,life:.7+Math.random()*.4,max:1.1,size:3+Math.random()*4,color:i%2?'#7e8b84':'#4f5b59'},160)}
 splash(x,y,n=8){if(n>=2)this.sprite(n>=12?'splash_column':n>=6?'splash_big':'splash_small',x,y+4,{scale:n>=10&&n<12?1.15:1});if(!this.on)n=2;for(let i=0;i<n;i++)this.cap(this.parts,{x:x+(Math.random()-.5)*40,y,vx:(Math.random()-.5)*90,vy:-80-Math.random()*140,g:700,life:.5+Math.random()*.3,max:.8,size:2+Math.random()*2,color:'#bdeff5'},160)}
 text(t,x,y,color='#ffffff',big=false){this.cap(this.texts,{t,x,y,life:big?1.1:.9,max:big?1.1:.9,color,big},24)}
 slash(x,y,dir,step){if(!this.run.effectsOn())return;this.cap(this.slashes,{x,y,dir,step,life:.16,max:.16},6)}
 ghost(img){if(this.on)this.cap(this.ghosts,img,10)}
 flight(x,y){if(!this.reduced)this.cap(this.flights,{x,y,age:0,dur:.45},24)}
 sprite(name,x,y,o){return window.PirateArtFx?.spawn(this,name,x,y,o)||false}
 explosion(x,y,r=96){if(this.sprite('explosion',x,y+r*.12,{scale:r/96}))this.sprite('puff',x,y-r*.2,{scale:r/110,delay:.28,alpha:.8})}
 /* Black-powder smoke: a short jet of round, soft puffs from the barrel that slows, swells and drifts up (big>1 for cannons). */
 muzzle(x,y,dir,big=1){for(let i=0;i<10;i++){const a=(Math.random()-.5)*.7,v=260+Math.random()*320;this.cap(this.parts,{x,y,vx:Math.cos(a)*v*dir,vy:Math.sin(a)*v,g:120,life:.08+Math.random()*.1,max:.18,size:2,color:i%2?'#fff3b0':'#ffb43c',streak:true},160)}this.cap(this.flashes??=[],{x,y,dir,life:.07,max:.07},6);const n=this.on?9:3;for(let i=0;i<n;i++){const k=i/(n-1);this.cap(this.smoke??=[],{x:x+dir*(2+k*8)*big,y:y+(Math.random()-.5)*4*big,vx:dir*(14+(1-k)*(1-k)*120+Math.random()*16)*big,vy:-(3+Math.random()*12)*big,r0:(5+Math.random()*3)*big,R:(20+k*16+Math.random()*6)*big,lift:10*big,age:0,max:1+k*.6+Math.random()*.3,a:.9-.04*i,shade:i%3},64)}}
 smokePuff(shade){const k='smoke'+shade;let c=this.glowCache.get(k);if(c)return c;c=document.createElement('canvas');c.width=c.height=96;const x=c.getContext('2d');
  // a lumpy cloud: overlapping soft lobes, lit from above, a little darker underneath
  const tone=[[214,210,202],[188,184,178],[164,160,156]][shade];for(const [lx,ly,lr,l] of [[48,56,30,-34],[48,50,28,-6],[34,46,20,10],[62,44,22,14],[46,36,18,24]]){const g=x.createRadialGradient(lx,ly-lr*.25,0,lx,ly,lr);const t=tone.map(v=>Math.max(0,Math.min(255,v+l)));
   g.addColorStop(0,`rgba(${t},.9)`);g.addColorStop(.55,`rgba(${t},.55)`);g.addColorStop(1,`rgba(${t},0)`);x.fillStyle=g;x.fillRect(0,0,96,96)}this.glowCache.set(k,c);return c}
 ring(x,y,color,r=8,max=.4){this.cap(this.rings,{x,y,r,life:max,max,color,grow:220},12)}
 glowSprite(rgbaPrefix){let c=this.glowCache.get(rgbaPrefix);if(c)return c;c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,rgbaPrefix+'1)');g.addColorStop(.45,rgbaPrefix+'.35)');g.addColorStop(1,rgbaPrefix+'0)');x.fillStyle=g;x.fillRect(0,0,64,64);this.glowCache.set(rgbaPrefix,c);return c}
 glow(ctx,x,y,r,rgbaPrefix,alpha=1){ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=clamp(alpha,0,1);ctx.drawImage(this.glowSprite(rgbaPrefix),x-r,y-r,r*2,r*2);ctx.restore()}
 update(dt){
  window.PirateArtFx?.update(this,dt);
  for(const p of this.parts){p.life-=dt;p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt}
  if(this.smoke?.length){for(const m of this.smoke){m.age+=dt;const d=Math.exp(-3.4*dt);m.vx*=d;m.vy=m.vy*d-m.lift*dt;m.x+=m.vx*dt;m.y+=m.vy*dt}this.smoke=this.smoke.filter(m=>m.age<m.max)}
  for(const t of this.texts){t.life-=dt;t.y-=(t.big?34:44)*dt}
  for(const s of this.slashes)s.life-=dt;for(const g of this.ghosts)g.life-=dt;for(const r of this.rings){r.life-=dt;r.r+=(r.grow||160)*dt}
  for(const f of this.flights)f.age+=dt;if(this.flashes){for(const f of this.flashes)f.life-=dt;this.flashes=this.flashes.filter(f=>f.life>0)}
  this.parts=this.parts.filter(p=>p.life>0);this.texts=this.texts.filter(t=>t.life>0);this.slashes=this.slashes.filter(s=>s.life>0);this.ghosts=this.ghosts.filter(g=>g.life>0);this.rings=this.rings.filter(r=>r.life>0);this.flights=this.flights.filter(f=>f.age<f.dur);
 }
 drawWorld(ctx){
  const run=this.run;window.PirateArtFx?.draw(this,ctx);
  for(const g of this.ghosts){if(run.skin)run.skin.ghost(ctx,g);else run.sheets.hero.draw(ctx,g.index,g.x,g.y,g.dir,{alpha:.35*g.life/g.max})}
  for(const f of this.flashes||[]){const k=f.life/f.max;this.glow(ctx,f.x,f.y,40+20*k,'rgba(255,190,80,',k);ctx.save();ctx.translate(f.x,f.y);ctx.scale(f.dir,1);ctx.globalCompositeOperation='lighter';ctx.fillStyle='rgba(255,236,170,'+k+')';ctx.beginPath();ctx.moveTo(0,-7);ctx.lineTo(34,0);ctx.lineTo(0,7);ctx.lineTo(8,0);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(6,-14);ctx.lineTo(16,0);ctx.lineTo(6,14);ctx.closePath();ctx.fill();ctx.restore()}
  for(const s of this.slashes){
   // Wide blue-white crescent, matching the reference swing.
   const k=1-s.life/s.max,rad=58+s.step*8,a0=s.step===1?.9:-1.35,a1=s.step===1?-1.2:s.step===2?1.05:.75;
   ctx.save();ctx.translate(s.x,s.y);if(s.dir<0)ctx.scale(-1,1);ctx.globalAlpha=1-k*.8;
   ctx.lineCap='round';ctx.strokeStyle='rgba(90,160,255,.55)';ctx.lineWidth=20;ctx.beginPath();ctx.arc(0,0,rad,Math.min(a0,a1),Math.max(a0,a1));ctx.stroke();
   ctx.strokeStyle='rgba(200,232,255,.85)';ctx.lineWidth=9;ctx.beginPath();ctx.arc(0,0,rad+3,Math.min(a0,a1)+.08,Math.max(a0,a1)-.04);ctx.stroke();
   ctx.strokeStyle='#ffffff';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,rad+6,Math.min(a0,a1)+.18,Math.max(a0,a1)-.1);ctx.stroke();ctx.restore();
  }
  for(const r of this.rings){ctx.globalAlpha=r.life/r.max;ctx.strokeStyle=r.color;ctx.lineWidth=3;ctx.beginPath();ctx.arc(r.x,r.y,r.r,0,TAU);ctx.stroke();ctx.globalAlpha=1}
  if(this.smoke?.length){for(const m of this.smoke){const u=m.age/m.max,r=m.r0+m.R*(1-Math.exp(-4*m.age));ctx.globalAlpha=m.a*Math.min(1,m.age*30)*Math.pow(1-u,1.4);ctx.drawImage(this.smokePuff(m.shade),m.x-r,m.y-r,r*2,r*2)}ctx.globalAlpha=1}
  for(const p of this.parts){ctx.globalAlpha=clamp(p.life/p.max,0,1);ctx.fillStyle=p.color;if(p.streak){ctx.strokeStyle=p.color;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-p.vx*.03,p.y-p.vy*.03);ctx.stroke()}else ctx.fillRect(p.x-p.size/2,p.y-p.size/2,p.size,p.size)}
  ctx.globalAlpha=1;
  ctx.textAlign='center';ctx.lineJoin='round';
  for(const t of this.texts){const k=t.life/t.max;ctx.globalAlpha=clamp(k*2,0,1);ctx.font=(t.big?'900 34px':'900 26px')+' Georgia, serif';const pop=1+(1-k<.15?(.15-(1-k))*2:0);ctx.save();ctx.translate(t.x,t.y);ctx.scale(pop,pop);ctx.lineWidth=6;ctx.strokeStyle='#120d1d';ctx.strokeText(t.t,0,0);ctx.fillStyle=t.color;ctx.fillText(t.t,0,0);ctx.restore()}
  ctx.globalAlpha=1;
 }
}

/* ------------------------------------------------------------------ run */
class LevelRun{
 constructor(def,opts){
  this.def=def;this.opts=opts||{};this.host=this.opts.host||null;this.lang=(this.host?.u?.lang)||localStorage.getItem('pf-lang')||document.documentElement.lang||'en';if(!TEXT[this.lang])this.lang='en';
  this.audio=new Audio(this);this.fx=new FX(this);this.images={};this.sheets={};this.inputs=new Set();this.axis=0;this.down=false;this.jumpBuffer=0;this.dashRequest=false;this.throwRequest=false;this.attackHeld=false;
  this.phase='loading';this.time=0;this.acc=0;this.last=0;this.camera={x:0,y:0,shake:0};this.freeze=0;this.warnings=[];this.saveKey='pf-level-'+String(def.id).padStart(2,'0')+'-v1';this.enemyFocus=null;this.focusT=0;
  this.raf=this.loop.bind(this);
 }
 t(k){return(TEXT[this.lang]||TEXT.en)[k]||TEXT.en[k]||this.def.text?.(this.lang,k)||k}
 lt(k){return this.def.text?.(this.lang,k)||k}
 warn(m){this.warnings.push(m);console.warn('[level]',m)}
 soundOn(){const u=this.host?.u;if(u&&typeof u.sound==='boolean')return u.sound;try{return localStorage.getItem('pf-sound')!=='off'}catch{return true}}
 effectsOn(){return this.host?.u?.hitEffects!==false}
 /* ---------------- mount / load */
 fitView(){const r=this.canvas.getBoundingClientRect();W=960;if(r.width>r.height&&r.height>0)W=Math.round(Math.min(1280,Math.max(960,H*r.width/r.height))/2)*2;this.hudScale=r.height>0?Math.min(1.3,Math.max(1,430/r.height)):1;this.canvas.width=W;this.canvas.height=H;this.needsRender=true}
 mount(){
  const css=`#pirate-level{position:fixed;inset:0;z-index:21500;background:#02070d;color:#fff;font-family:Georgia,serif;touch-action:none;user-select:none;-webkit-user-select:none;overflow:hidden}
#pirate-level canvas{position:absolute;top:0;bottom:0;left:env(safe-area-inset-left,0px);width:calc(100% - env(safe-area-inset-left,0px) - env(safe-area-inset-right,0px));height:100%;object-fit:contain;display:block}
#pirate-level .pl-controls{position:absolute;inset:0;pointer-events:none}
#pirate-level .pl-zone{position:absolute;left:0;bottom:0;width:44%;height:70%;pointer-events:auto;touch-action:none}
#pirate-level .pl-stick.floating{transition:none}
#pirate-level .pl-stick{position:absolute;left:max(18px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));width:clamp(116px,30vh,160px);height:clamp(116px,30vh,160px);border-radius:50%;border:3px solid #b9cfe066;background:radial-gradient(circle,#1d3a5a66,#0b1a2a99);pointer-events:auto;touch-action:none;box-shadow:inset 0 0 22px #0008}
#pirate-level .pl-knob{position:absolute;left:30%;top:30%;width:40%;height:40%;border-radius:50%;background:radial-gradient(circle at 35% 30%,#e9f4ff,#8fb2d4 55%,#4b6f93);box-shadow:0 4px 10px #0009;pointer-events:none}
#pirate-level .pl-pad{position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));display:grid;grid-template-columns:repeat(3,auto);grid-template-areas:". block dash" "throw attack jump";gap:clamp(6px,1.6vh,12px);align-items:end;pointer-events:auto;touch-action:none}
#pirate-level .pl-pad button{pointer-events:auto;touch-action:none;width:clamp(58px,14vh,84px);height:clamp(58px,14vh,84px);border-radius:50%;border:3px solid #9fb6cc55;background:radial-gradient(circle at 40% 30%,#2b4258b0,#101c2bb8);color:#f2f5ff;font:800 clamp(11px,2.7vh,16px)/1.05 Arial,sans-serif;letter-spacing:.5px;box-shadow:0 5px 14px #000a,inset 0 2px 3px #ffffff18;padding:0}
#pirate-level .pl-pad button.pressed{transform:scale(.93);filter:brightness(1.35)}
#pirate-level .pl-pad [data-k=attack]{grid-area:attack;width:clamp(70px,18vh,100px);height:clamp(70px,18vh,100px);opacity:.92;background:radial-gradient(circle at 40% 30%,#ffd36b,#f0a12b 60%,#b86b12);color:#2a1606;border-color:#ffe6a3}
#pirate-level .pl-pad [data-k=block]{grid-area:block}#pirate-level .pl-pad [data-k=dash]{grid-area:dash}#pirate-level .pl-pad [data-k=throw]{grid-area:throw}#pirate-level .pl-pad [data-k=jump]{grid-area:jump}
#pirate-level .pl-pad [data-k=throw] small{display:block;font-size:.9em;letter-spacing:2px;color:#ffd36b}
#pirate-level .pl-pause{position:absolute;right:max(12px,env(safe-area-inset-right));top:max(10px,env(safe-area-inset-top));width:52px;height:52px;border-radius:13px;border:2px solid #d8b56a;background:#0d1a29e6;color:#fff;font:900 20px Arial;pointer-events:auto}
#pirate-level .pl-modal{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#02070dc4;backdrop-filter:blur(3px)}
#pirate-level .pl-modal[hidden]{display:none}
#pirate-level .pl-card{width:min(560px,92vw);max-height:calc(100dvh - 20px);overflow:auto;box-sizing:border-box;padding:clamp(12px,3vh,26px);border-radius:18px;border:2px solid #d2a653;background:linear-gradient(150deg,#1b3247f7,#08131ef7);box-shadow:0 18px 60px #000c;text-align:center}
#pirate-level .pl-card h2{margin:0 0 10px;color:#ffd98a;font-size:clamp(22px,4.6vh,34px);letter-spacing:1px}
#pirate-level .pl-card p{font:15px/1.45 Arial,sans-serif;color:#cfe0e8;margin:6px 0}
#pirate-level .pl-card button{display:block;width:100%;margin:8px 0;min-height:48px;border-radius:12px;border:1px solid #c79f5a;background:#132b3e;color:#f9e2ac;font:700 16px Georgia,serif}
#pirate-level .pl-card button.primary{background:linear-gradient(#ffdf85,#bd7b25);color:#24170b}
#pirate-level .pl-stats{display:grid;grid-template-columns:1fr auto;gap:6px 18px;margin:12px auto;max-width:340px;font:16px Arial;color:#e7eef2;text-align:left}
#pirate-level .pl-stats b{color:#ffd98a;text-align:right}
#pirate-level .pl-portrait{position:absolute;inset:0;display:none;align-items:center;justify-content:center;background:#02070d;font:18px Arial;text-align:center;padding:20px}
@media (orientation:portrait){#pirate-level .pl-portrait{display:flex}}`;
  if(!document.getElementById('pirate-level-style')){const s=document.createElement('style');s.id='pirate-level-style';s.textContent=css;document.head.append(s)}
  const root=this.root=document.createElement('section');root.id='pirate-level';
  root.innerHTML='<canvas width="960" height="540" aria-label="Level"></canvas><div class="pl-controls"><div class="pl-zone" aria-hidden="true"></div><div class="pl-stick" role="slider" aria-label="Move" aria-valuenow="0"><span class="pl-knob"></span></div><div class="pl-pad"><button data-k="block"></button><button data-k="dash"></button><button data-k="throw"></button><button data-k="attack"></button><button data-k="jump"></button></div><button class="pl-pause" aria-label="Pause">Ⅱ</button></div><div class="pl-modal"><div class="pl-card"></div></div><div class="pl-portrait"></div>';
  document.body.append(root);
  this.canvas=root.querySelector('canvas');this.ctx=this.canvas.getContext('2d');this.ctx.imageSmoothingEnabled=false;
  this.modal=root.querySelector('.pl-modal');this.card=root.querySelector('.pl-card');this.controls=root.querySelector('.pl-controls');
  root.querySelector('.pl-portrait').textContent=this.t('rotate');
  for(const b of root.querySelectorAll('.pl-pad button')){const k=b.dataset.k;b.innerHTML=(k==='throw'&&(this.opts.hero||window.PirateLevels?.hero?.())==='scarlet'?this.t('pistol'):this.t(k))+(k==='throw'?'<small>●●●</small>':'');b.setAttribute('aria-label',this.t(k))}
  this.bindPad(root.querySelector('.pl-pad'));
  this.bindStick(root.querySelector('.pl-stick'));
  root.querySelector('.pl-pause').onclick=()=>this.pause();
  root.addEventListener('contextmenu',e=>e.preventDefault());
  this.onKeyDown=e=>this.key(e,true);this.onKeyUp=e=>this.key(e,false);this.onBlur=()=>{if(this.phase==='play')this.pause()};this.onVis=()=>{if(document.hidden&&this.phase==='play')this.pause()};
  window.addEventListener('keydown',this.onKeyDown,true);window.addEventListener('keyup',this.onKeyUp,true);window.addEventListener('blur',this.onBlur);document.addEventListener('visibilitychange',this.onVis);
  this.prevBack=window.__pfBack;window.__pfBack=()=>{if(this.phase==='play'){this.pause();return true}if(this.phase==='pause'){this.resume();return true}return this.prevBack?.()||false};
 }
 async load(){
  this.phase='loading';this.showCard(this.t('loading'),'',[]);
  const base=this.def.base;
  const json=async u=>{const r=await fetch(u);if(!r.ok)throw Error(u+' HTTP '+r.status);return r.json()};
  this.cfg=this.def.generate?this.def.generate(this):await json(this.def.config);   // Endless Sea builds its stages in code
  const a=this.cfg.assets;
  const [sprites,env]=await Promise.all([json(a+'sprites.json'),json(a+'environment.json')]);this.envMeta=env;
  const pt=env.painted;const names=new Set(['tiles.png','props.png',...(pt?[...Object.values(pt.fills),pt.caps.image]:[]),...(this.def.images||[]),...Object.values(sprites).map(s=>s.image)]);
  await Promise.all([...names].map(n=>new Promise((ok,fail)=>{const im=new Image();im.onload=()=>{this.images[n]=im;ok()};im.onerror=()=>fail(Error('image '+n));im.src=n.includes('/')?n:a+n})));
  // painted art is authored above display size: downscale once here so frames blit 1:1 (cheap on phones)
  const shrink=(im,k)=>{const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);const x=cv.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(im,0,0,cv.width,cv.height);return cv};
  if(env.res>2){for(const n of ['props.png','tiles.png'])this.images[n]=shrink(this.images[n],2/env.res);env.res=2}
  const scaled=new Map();
  for(const [k,m] of Object.entries(sprites)){if(m.smooth&&m.scale<1){const img=scaled.get(m.image)||shrink(this.images[m.image],m.scale);scaled.set(m.image,img);const f=m.scale;this.sheets[k]=new Sheet(img,{...m,frameW:m.frameW*f,frameH:m.frameH*f,anchor:[m.anchor[0]*f,m.anchor[1]*f],scale:1});continue}this.sheets[k]=new Sheet(this.images[m.image],m)}
  this.audioManifest=await json(a+'audio.json').catch(()=>({}));
  this.audio.ensure();
  this.audioReady=Promise.all([this.audio.load(a,this.audioManifest),this.audio.load('adventure/levels/assets/sfx/',{stageClear:'stage-clear.ogg'})]);   // shared jingles (Higgsfield, see ASSET_MANIFEST)
  this.heroId=this.opts.hero||window.PirateLevels?.hero?.()||'captain';
  window.PirateHeroProgress?.resolve(this,this.readSave());
  // Captain's Wardrobe (shop/economy.js): small upgrades only (coin pull radius, checkpoint healing)
  try{this.loadout=window.PirateEconomy?.loadout?.(this.heroId)||null}catch{this.loadout=null}
  if(window.PirateHeroes){try{this.skin=await window.PirateHeroes.createSkin(this.heroId).load()}catch(e){this.warn('hero skin '+e);this.skin=null;throw e}}
  await this.def.prepare?.(this);   // a level may load extra art (e.g. its painted enemy cast) before play starts
  await window.PirateArtFx?.prepare(this);   // shared animated effect art (coins, smoke, water); old effects stay as fallback
  if(window.PirateEnemyAnim)await window.PirateEnemyAnim.prepare(this);   // lazy-load approved animated enemies bound to this level
 }
 /* ---------------- input */
 key(e,down){
  if(!this.root)return;const map={ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right',ArrowDown:'down',s:'down',S:'down',ArrowUp:'jump',w:'jump',W:'jump',' ':'jump',k:'jump',K:'jump',j:'attack',J:'attack',l:'block',L:'block',o:'dash',O:'dash',Shift:'dash',i:'throw',I:'throw',Escape:'pause',p:'pause'};
  const k=map[e.key];if(!k)return;e.preventDefault();e.stopImmediatePropagation();
  if(k==='pause'){if(down&&!e.repeat){this.phase==='play'?this.pause():this.phase==='pause'&&this.resume()}return}
  if(this.phase!=='play'){if(!down)this.inputs.delete(k);return}
  this.audio.resume();
  if(down){if(!e.repeat)this.press(k);this.inputs.add(k)}else this.inputs.delete(k);
 }
 press(k){if(k==='jump')this.jumpBuffer=PHYS.buffer;if(k==='dash')this.dashRequest=true;if(k==='throw')this.throwRequest=true;if(k==='attack')this.attackPress=true}
 /* Controls v2 (touch). Positions never change; only how touches are read.
  * Pad: one controller for the five buttons. A thumb can slide from one button onto another (the first is released,
  * the next pressed), and a tap in the gap between buttons goes to the nearest one within 18 px. */
 bindPad(pad){const held=new Map(),buttons=[...pad.querySelectorAll('button[data-k]')];
  const holding=b=>[...held.values()].includes(b);
  const down=(b,id)=>{held.set(id,b);const k=b.dataset.k;b.classList.add('pressed');if(!this.inputs.has(k)){this.inputs.add(k);this.press(k)}this.haptic()};
  const up=id=>{const b=held.get(id);if(!b)return;held.delete(id);if(!holding(b)){this.inputs.delete(b.dataset.k);b.classList.remove('pressed')}};
  const nearest=(x,y,slack)=>{let best=null,bd=1e9;for(const b of buttons){const r=b.getBoundingClientRect();if(!r.width)continue;const d=Math.hypot(x-(r.left+r.width/2),y-(r.top+r.height/2))-r.width/2;if(d<bd){bd=d;best=b}}return bd<=slack?best:null};
  pad.addEventListener('pointerdown',e=>{if(this.phase!=='play'||held.has(e.pointerId))return;const b=e.target.closest?.('button[data-k]')||nearest(e.clientX,e.clientY,18);if(!b)return;e.preventDefault();e.stopPropagation();try{pad.setPointerCapture(e.pointerId)}catch{}this.audio.resume();down(b,e.pointerId)});
  pad.addEventListener('pointermove',e=>{const b=held.get(e.pointerId);if(!b||this.phase!=='play')return;const r=b.getBoundingClientRect();if(Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2))<=r.width/2+8)return;const n=nearest(e.clientX,e.clientY,4);if(n&&n!==b&&!holding(n)){up(e.pointerId);down(n,e.pointerId)}});
  for(const ev of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(ev,e=>up(e.pointerId));
  (this.releasers??=[]).push(()=>{for(const id of [...held.keys()])up(id);try{for(const id of [...held.keys()])pad.releasePointerCapture(id)}catch{}})}
 /* a short tick on button presses when the player turned vibration on (pf-vibration, shared with the Arena) */
 haptic(){try{if(localStorage.getItem('pf-vibration')==='on')navigator.vibrate?.(8)}catch{}}
 toggleVibration(){let on=false;try{on=localStorage.getItem('pf-vibration')!=='on';localStorage.setItem('pf-vibration',on?'on':'off')}catch{}if(on)try{navigator.vibrate?.(20)}catch{}this.phase='play';this.pause()}
 /* Stick: floating. A touch anywhere in the lower-left zone (or on the stick) puts the stick under the thumb; it
  * follows a thumb that drifts past its rim and springs back to its home position on release. Response curve:
  * 20 % dead zone (≈8 px, as before), full speed at half deflection, so a light push already runs; down = a mostly-downward half push. */
 bindStick(stick){const knob=stick.firstElementChild,zone=this.root.querySelector('.pl-zone');let owner=null,cx=0,cy=0,hx=0,hy=0,R=1,T=1;
  const place=()=>{stick.style.transform=`translate(${cx-hx}px,${cy-hy}px)`};
  const move=e=>{if(e.pointerId!==owner)return;let dx=e.clientX-cx,dy=e.clientY-cy;const d=Math.hypot(dx,dy);
   if(d>R){const k=(d-R)/d;cx+=dx*k;cy+=dy*k;dx-=dx*k;dy-=dy*k;place()}   // drag the stick along with the thumb
   const nx=clamp(dx/T,-1,1),ny=clamp(dy/T,-1,1),ax=Math.abs(nx);
   this.axis=ax<.2?0:Math.sign(nx)*Math.min(1,(ax-.2)/.3);   // same ≈8 px dead zone as before; full speed at half deflection
   this.down=ny>.5&&ny>ax*.8;
   knob.style.transform=`translate(${nx*R*.6}px,${ny*R*.6}px)`;stick.setAttribute('aria-valuenow',String(Math.round(this.axis*100)))};
  const release=()=>{const id=owner;owner=null;this.axis=0;this.down=false;knob.style.transform='';stick.style.transform='';stick.classList.remove('floating');stick.setAttribute('aria-valuenow','0');if(id!==null)for(const el of [stick,zone])try{if(el?.hasPointerCapture(id))el.releasePointerCapture(id)}catch{}};
  const start=(e,el)=>{e.preventDefault();if(this.phase!=='play'||owner!==null)return;stick.style.transform='';const r=stick.getBoundingClientRect();hx=r.left+r.width/2;hy=r.top+r.height/2;R=r.width/2;T=R*.62;
   const inside=Math.hypot(e.clientX-hx,e.clientY-hy)<=R;cx=inside?hx:e.clientX;cy=inside?hy:e.clientY;
   if(!inside){cx=clamp(cx,R,innerWidth-R);cy=clamp(cy,R,innerHeight-R);stick.classList.add('floating');place()}
   owner=e.pointerId;try{el.setPointerCapture(e.pointerId)}catch{}this.audio.resume();move(e)};
  stick.addEventListener('pointerdown',e=>start(e,stick));zone?.addEventListener('pointerdown',e=>start(e,zone));
  for(const el of [stick,zone]){if(!el)continue;el.addEventListener('pointermove',move);for(const ev of ['pointerup','pointercancel','lostpointercapture'])el.addEventListener(ev,e=>{if(e.pointerId===owner)release()})}
  (this.releasers??=[]).push(release)}
 clearInputs(){this.inputs.clear();this.axis=0;this.down=false;this.jumpBuffer=0;this.attackBuffer=0;this.dashRequest=false;this.throwRequest=false;this.attackPress=false;for(const r of this.releasers||[])r();this.root?.querySelectorAll('.pressed').forEach(b=>b.classList.remove('pressed'))}
 /* ---------------- world setup */
 build(save){
  if(this.def.heroStats){const st=this.def.heroStats(this);this.maxHP=st.hp;this.attackScale=st.atk/23;this.damageReduction=st.dr}else window.PirateHeroProgress?.begin(this,save);
  const c=this.cfg;this.world=c.world;
  this.solids=c.solids.map(s=>({...s}));
  this.ledges=c.ledges.map(l=>({...l,h:16,kind:'ledge'}));
  this.crumbles=(c.crumbles||[]).map(b=>({...b,h:16,kind:'crumble',state:'idle',t:0,baseY:b.y}));
  this.movers=(c.movers||[]).map(m=>({...m,h:18,kind:'mover',dx:0,dy:0,phase:0,active:!m.power}));
  this.pits=c.pits||[];
  this.killed=new Set(save?.killed||[]);this.coinIds=new Set(save?.coins||[]);this.heartsTaken=new Set(save?.hearts||[]);this.opened=new Set(save?.chests||[]);
  this.state=Object.assign({},this.def.initialState?.()||{},save?.state||{});
  this.checkpoint=save?.checkpoint||0;this.gold=save?.gold||0;this.elapsed=save?.elapsed||0;
  this.stats={kills:this.killed.size,deaths:save?.deaths||0};
  this.enemies=c.enemies.filter(e=>!this.killed.has(e.id)).map(e=>new Enemy(this,e));
  window.PirateEnemyAnim?.adopt(this);   // animated characters may carry their own hurtbox/reach (sized to the artwork)
  try{this.paid=this.def.noPay?null:window.PirateEconomy?.claimedIds?.('L'+this.def.id)||null}catch{this.paid=null}   // noPay: coins count inside the run only
  this.coins=c.coins.map(([x,y],i)=>({id:'c'+i,x,y,rest:true,vx:0,vy:0,value:1})).filter(k=>!this.coinIds.has(k.id));for(const k of this.coins)k.claimed=!!this.paid?.has(k.id);
  this.chests=(c.chests||[]).map(k=>({...k,open:this.opened.has(k.id),openT:this.opened.has(k.id)?9:0}));
  this.projectiles=[];this.goldShown=this.gold;
  const cp=this.checkpointPos(this.checkpoint);
  const p=this.p={x:cp.x-17,y:cp.y-78,w:34,h:78,vx:0,vy:0,dir:1,ground:false,jumps:0,coyote:0,cool:0,attack:0,combo:0,chain:0,attackAnim:'attackA',dash:0,dashCool:0,blockT:0,inv:1.2,invFx:false,hp:clamp(save?.hp??(this.maxHP||100),1,this.maxHP||100),lives:clamp(save?.lives??3,1,MAX_LIVES),ammo:COMBAT.ammo,reload:0,anim:'idle',animT:0,hurtT:0,dead:false,platform:null,drop:0,lastSafe:{x:cp.x-17,y:cp.y-78},safeT:0,throwT:0,stepT:0,landT:0};
  this.camera.x=clamp(p.x-W*.4,0,this.world.width-W);this.camera.y=clamp(p.y+p.h-H*.78,0,this.world.height-H);
  this.def.setup?.(this,save);window.PirateTavernQuest?.bind(this);
 }
 checkpointPos(id){if(!id)return{x:this.cfg.start.x,y:this.cfg.start.y};const c=this.cfg.checkpoints.find(k=>k.id===id);return c?{x:c.x+60,y:c.y}:{x:this.cfg.start.x,y:this.cfg.start.y}}
 readSave(){if(this.def.noSave)return null;try{const s=JSON.parse(localStorage.getItem(this.saveKey)||'null');if(!s||s.v!==1)return null;if(!Number.isInteger(s.checkpoint)||(s.checkpoint&&!this.cfg.checkpoints.some(c=>c.id===s.checkpoint)))s.checkpoint=0;return s}catch{return null}}
 save(){if(this.phase==='complete'||!this.p||this.def.noSave)return;const s={v:1,level:this.def.id,heroRun:this.heroRun,checkpoint:this.checkpoint,hp:Math.max(1,Math.round(this.p.hp)),lives:Math.max(1,this.p.lives),gold:this.gold,coins:[...this.coinIds],hearts:[...(this.heartsTaken||[])],killed:[...this.killed],chests:[...this.opened],state:this.def.persist?this.def.persist(this):this.state,elapsed:Math.round(this.elapsed),deaths:this.stats.deaths};try{localStorage.setItem(this.saveKey,JSON.stringify(s))}catch{}this.lastSave=s;return s}
 clearSave(){try{localStorage.removeItem(this.saveKey)}catch{}}
 /* ---------------- lifecycle */
 async open(){
  this.mount();window.PirateGdThrottle?.hold(this);this.fitView();this.loopId=requestAnimationFrame(this.raf);
  try{await this.load()}catch(e){if(this.phase!=='closed')this.loadFailure(e);return}
  if(this.phase==='closed')return;
  const save=this.readSave();try{this.build(save)}catch(e){this.loadFailure(e);return}this.hideCard();this.phase='play';this.audio.resume();
  this.audioReady.then(()=>{if(this.phase!=='closed')this.def.music?.(this)});
  this.def.onStart?.(this,!!save);
  if(innerHeight>innerWidth)this.pause();
 }
 loadFailure(error){
  this.warn(String(error));this.phase='error';this.clearInputs();
  const incompatible=['run','hero'].includes(error.code);
  const retry=()=>{const def=this.def,opts=this.opts;if(incompatible)this.clearSave();this.close();return window.PirateLevelEngine.launch(def.id,opts)};
  this.showCard(this.t('failed'),String(error.message||error),[[this.t(incompatible?'restart':'retry'),retry,true],[this.t('back'),()=>{this.close();this.opts.onExit?.('map')}]]);
 }
 pause(){if(this.phase!=='play')return;this.clearInputs();this.save();this.phase='pause';this.audio.silenceLoops();this.audio.ctx?.suspend?.().catch(()=>{});
  const card=this.showCard(this.t('pause'),this.def.title?.(this.lang)||'',[[this.t('resume'),()=>this.resume(),true],[this.t('sound')+': '+(this.soundOn()?this.t('on'):this.t('off')),()=>this.toggleSound()],...('vibrate' in navigator?[[this.t('vibration')+': '+((()=>{try{return localStorage.getItem('pf-vibration')==='on'}catch{return false}})()?this.t('on'):this.t('off')),()=>this.toggleVibration()]]:[]),[this.t('restart'),()=>this.restartLevel()],[this.t('map'),()=>this.exitToMap()]]);
  // separate music / effects volume (saved by music.js)
  if(window.PirateMusic)card.querySelectorAll('button')[1].after(window.PirateMusic.sliders(this.lang))}
 resume(){if(this.phase!=='pause'||innerHeight>innerWidth)return;this.hideCard();this.phase='play';this.audio.ctx?.resume?.().catch(()=>{});this.last=0}
 toggleSound(){const on=!this.soundOn();if(this.host?.u)this.host.u.sound=on;try{localStorage.setItem('pf-sound',on?'on':'off')}catch{}this.audio.setEnabled(on);this.phase='play';this.pause()}
 restartLevel(){try{this.build(null)}catch(e){this.loadFailure(e);return}this.clearSave();this.audio.stopMusic(.3);this.hideCard();this.phase='play';this.def.music?.(this);this.def.onStart?.(this,false);this.save()}
 exitToMap(){if(this.phase!=='complete')this.save();this.close();this.opts.onExit?.('map')}
 close(){if(this.phase==='closed')return;this.phase='closed';window.PirateGdThrottle?.release(this);window.PirateEnemyAnim?.release(this);cancelAnimationFrame(this.loopId);this.clearInputs();this.audio.close();window.removeEventListener('keydown',this.onKeyDown,true);window.removeEventListener('keyup',this.onKeyUp,true);window.removeEventListener('blur',this.onBlur);document.removeEventListener('visibilitychange',this.onVis);window.__pfBack=this.prevBack;this.root?.remove();if(window.__pirateLevel===this)window.__pirateLevel=null}
 showCard(title,text,buttons){this.modal.hidden=false;this.controls.hidden=true;this.card.textContent='';const h=document.createElement('h2');h.textContent=title;this.card.append(h);if(text){const p=document.createElement('p');p.textContent=text;this.card.append(p)}for(const [label,fn,primary] of buttons||[]){const b=document.createElement('button');b.textContent=label;if(primary)b.className='primary';b.onclick=fn;this.card.append(b)}return this.card}
 hideCard(){this.modal.hidden=true;this.controls.hidden=false}
 /* ---------------- loop */
 loop(now){
  if(this.phase==='closed')return;this.loopId=requestAnimationFrame(this.raf);
  const dt=this.last?Math.min(.1,(now-this.last)/1000):DT;this.last=now;
  if(this.phase==='play'&&!this.manual){this.acc+=dt;let n=0;while(this.acc>=DT&&n<6){this.tick(DT);this.acc-=DT;n++}if(n===6)this.acc=0}
  if(this.p&&this.phase!=='loading'){
   window.PirateTouchTheme?.setAmmo?.(this.root.querySelector('.pl-pad [data-k="throw"]'),this.p.ammo,COMBAT.ammo);
   if(this.phase==='play'||this.needsRender||this.paintPhase!==this.phase){this.render();this.needsRender=false;this.paintPhase=this.phase}
  }
 }
 tick(dt){if(this.freeze>0){this.freeze-=dt;this.fx.update(dt*.25);return}this.step(dt)}
 hitStop(t){if(this.fx.on)this.freeze=Math.max(this.freeze,t)}
 /* ---------------- simulation */
 surfaces(){const list=[];for(const l of this.ledges)list.push(l);for(const b of this.crumbles)if(b.state!=='fallen')list.push(b);for(const m of this.movers)list.push(m);return list}
 solidList(){const extra=this.def.dynamicSolids?.(this)||[];return extra.length?this.solids.concat(extra):this.solids}
 step(dt){
  const p=this.p;this.time+=dt;this.elapsed+=dt;this.focusT=Math.max(0,this.focusT-dt);
  this.updateMovers(dt);this.updateCrumbles(dt);
  this.def.update?.(this,dt);
  if(!p.dead)this.updateHero(dt);
  if(this.phase!=='play')return;
  for(const e of this.enemies){if(Math.abs(e.cx-p.x)<1100)e.update(dt)}
  this.enemies=this.enemies.filter(e=>!(e.dead&&e.deadT>1.4));
  this.updateProjectiles(dt);this.updateCoins(dt);this.updateChests(dt);this.updateHearts();this.updateCheckpoints();
  this.updateCamera(dt);this.fx.update(dt);this.updateAudio(dt);
  if(Math.floor(this.time/5)!==Math.floor((this.time-dt)/5))this.save();
 }
 updateMovers(dt){for(const m of this.movers){const ox=m.x,oy=m.y;if(m.active){m.phase+=dt/m.period}const dw=m.dwell??.18,ph=((m.phase%1)+1)%1;let s;if(ph<dw)s=0;else if(ph<.5)s=(1-Math.cos((ph-dw)/(.5-dw)*Math.PI))/2;else if(ph<.5+dw)s=1;else s=(1+Math.cos((ph-.5-dw)/(.5-dw)*Math.PI))/2;if(m.axis==='x')m.x=lerp(m.range[0],m.range[1],s);else m.y=lerp(m.range[1],m.range[0],s);m.dx=m.x-ox;m.dy=m.y-oy}}
 updateCrumbles(dt){for(const b of this.crumbles){if(b.state==='shake'){b.t-=dt;if(b.t<=0){b.state='fallen';b.t=3.2;this.fx.debris(b.x+b.w/2,b.y+8,12);this.audio.at('crumble',b.x+b.w/2)}}else if(b.state==='fallen'){b.t-=dt;if(b.t<=0&&!overlap(this.p,{x:b.x,y:b.baseY-90,w:b.w,h:100})){b.state='idle';b.y=b.baseY}}}}
 updateHero(dt){
  const p=this.p,c=COMBAT;p.animT+=dt;
  for(const k of ['inv','coyote','cool','attack','dash','dashCool','hurtT','chain','throwT','landT','drop'])p[k]=Math.max(0,p[k]-dt);
  this.jumpBuffer=Math.max(0,this.jumpBuffer-dt);
  const axis=this.axis||(Number(this.inputs.has('right'))-Number(this.inputs.has('left')));
  const blocking=this.inputs.has('block')&&p.ground&&p.dash<=0&&p.hurtT<=0;
  if(blocking&&!p.block)p.blockT=.16;else p.blockT=Math.max(0,p.blockT-dt);
  p.block=blocking;
  // reload thrown swords while on the floor (Combat V2: one per second)
  if(p.ammo<c.ammo&&p.ground){p.reload+=dt;if(p.reload>=c.reload){p.reload=0;p.ammo++}}else if(p.ammo>=c.ammo)p.reload=0;
  if(this.jumpBuffer>0&&p.hurtT<=0&&(p.ground||p.coyote>0||p.jumps<2)){const first=p.ground||p.coyote>0;p.vy=-PHYS.jump*(first?1:.92);p.jumps=first?1:2;p.ground=false;p.coyote=0;p.platform=null;this.jumpBuffer=0;this.audio.play(first?'jump':'jump2',{vol:.55,rate:first?1:1.12});this.fx.dust(p.x+p.w/2,p.y+p.h,first?6:3);if(!first)this.fx.ring(p.x+p.w/2,p.y+p.h,'rgba(200,230,255,.6)',6,.25)}
  if(this.dashRequest){if(p.dashCool<=0&&!blocking&&p.hurtT<=0){p.dash=PHYS.dash;p.dashCool=PHYS.dashCool;p.inv=Math.max(p.inv,PHYS.dash+.06);this.dashHits=new Set();this.audio.play('dash',{vol:.7});this.fx.dust(p.x+p.w/2,p.y+p.h,5,-p.dir)}this.dashRequest=false}
  if(p.hurtT>0){p.vx*=Math.pow(.02,dt)}
  else if(p.dash>0){p.vx=p.dir*PHYS.dashSpeed;p.vy=Math.min(p.vy,40);this.dashStrike();if(Math.floor(p.dash*60)%2===0)this.fx.ghost({index:this.sheets.hero.frame('dash',0),x:p.x+p.w/2,y:p.y+p.h,dir:p.dir,life:.22,max:.22})}
  else{const speed=blocking?PHYS.blockRun:PHYS.run;const target=axis*speed;p.vx=lerp(p.vx,target,Math.min(1,dt*(p.ground?18:9)));if(Math.abs(p.vx)<4&&!axis)p.vx=0;if(axis&&!blocking&&p.attack<=0)p.dir=Math.sign(axis)}
  // attack: tap or hold; consecutive presses within the chain window build the A-B-C combo
  if(this.attackPress){this.attackBuffer=p.cool>0&&p.hurtT<=0&&!blocking?Math.max(.16,Math.min(.52,p.cool+.04)):.16;this.attackPress=false}if(blocking)this.attackBuffer=0;this.attackBuffer=Math.max(0,(this.attackBuffer||0)-dt);const wantAttack=(this.attackBuffer>0||this.inputs.has('attack'))&&!blocking&&p.hurtT<=0;
  if(wantAttack&&p.cool<=0){this.attackBuffer=0;p.combo=p.chain>0?(p.combo%3)+1:1;const step=p.combo;p.attack=step===3?.3:.22;p.cool=step===3?.48:c.cool;p.chain=c.chain+p.cool;p.attackAnim=['attackA','attackB','attackC'][step-1];p.animT=0;this.audio.play('swing'+step,{vol:.7,rate:.95+Math.random()*.1});this.fx.slash(p.x+p.w/2+p.dir*16,p.y+p.h*.45,p.dir,step);this.heroStrike(step);if(p.ground)p.vx+=p.dir*(step===3?120:50)}
  if(this.throwRequest){this.throwRequest=false;if(p.ammo>0&&p.throwT<=0&&!blocking&&p.hurtT<=0){p.ammo--;p.reload=0;p.throwT=.32;p.animT=0;if(this.skin?.ranged==='pistol'){const m=this.skin.muzzle(p);const front=this.enemies.filter(e=>!e.dead&&Math.sign(e.cx-m.x)===p.dir&&Math.abs(e.cx-m.x)<570&&Math.abs(e.y+e.h*.5-m.y)<190).sort((a,b)=>Math.abs(a.cx-m.x)-Math.abs(b.cx-m.x))[0];const target=front?front.hurtBox():null;const dx=front?front.cx-m.x:p.dir*500,dy=target?(target.y+target.h*.5-m.y):0;const slope=clamp(dy/Math.max(45,Math.abs(dx)),-.68,.68),rate=980/Math.hypot(1,slope);const b=this.skin.barrel?.(p)||m;this.projectiles.push({kind:'bullet',owner:'hero',x:m.x,y:m.y,vx:p.dir*rate,vy:rate*slope,w:16,h:8,dmg:(c.throwDamage+4)*(this.attackScale||1),life:.68,x0:m.x,barrel:[b.x-m.x,b.y-m.y]});this.fx.muzzle(b.x,b.y,p.dir);p.vx-=p.dir*60;this.camera.shake=Math.max(this.camera.shake,2.5);this.audio.play('pistol',{vol:.8})}else{this.projectiles.push({kind:'sword',owner:'hero',x:p.x+p.w/2+p.dir*20,y:p.y+p.h*.42,vx:p.dir*640,vy:0,w:30,h:10,dmg:c.throwDamage*(this.attackScale||1),life:.62,spin:0});this.audio.play('throw',{vol:.65})}}}
  // gravity + collision
  if(p.dash<=0||!p.ground)p.vy=Math.min(PHYS.maxFall,p.vy+PHYS.gravity*dt*(p.dash>0?.15:1));
  if((this.down||this.inputs.has('down'))&&p.ground&&p.platform&&p.platform.kind!=='solid'&&this.jumpBuffer<=0)p.drop=.25;
  // optional level drift (e.g. Level 6 wind): moves the hero without changing their own velocity
  this.drift=this.def.heroDrift?.(this,dt)||0;
  const wasGround=p.ground,fallSpeed=p.vy;this.moveBody(p,dt,true);
  if(p.ground&&!wasGround){p.landT=.12;if(fallSpeed>380){this.fx.dust(p.x+p.w/2,p.y+p.h,8);this.audio.play('land',{vol:.55})}}
  if(p.ground&&Math.abs(p.vx)>60&&p.dash<=0){p.stepT-=dt;if(p.stepT<=0){p.stepT=.29;this.audio.play('step',{vol:.32,rate:.9+Math.random()*.2,gap:.08});if(this.fx.on&&Math.random()<.4)this.fx.dust(p.x+p.w/2-p.dir*10,p.y+p.h,2,-p.dir)}}else p.stepT=.08;
  // safe position for pit recovery: stable ground away from pits
  if(p.ground&&p.platform&&p.platform.kind==='solid'&&p.hurtT<=0){p.safeT+=dt;if(p.safeT>.25&&!this.pits.some(q=>p.x+p.w>q.x-60&&p.x<q.x+q.w+60)){p.lastSafe={x:p.x,y:p.y}}}else p.safeT=0;
  if(p.y>this.world.height+40||this.pits.some(q=>p.x+p.w/2>q.x&&p.x+p.w/2<q.x+q.w&&p.y>this.world.ground+170)){this.pitFall();return}
  // hazards
  this.def.heroHazards?.(this,dt);
  // animation
  let anim='idle';
  if(p.hurtT>0)anim='hurt';else if(p.throwT>0)anim='throw';else if(p.attack>0)anim=p.attackAnim;else if(p.dash>0)anim='dash';else if(blocking)anim='block';else if(!p.ground)anim=p.vy<0?'jump':'fall';else if(Math.abs(p.vx)>30)anim='run';
  if(anim!==p.anim){p.anim=anim;if(!anim.startsWith('attack')||p.animT>0)p.animT=0}
 }
 // A dash is an attack too: every enemy (and a boss, via def.dashStrike) the hero passes through takes one hit per dash.
 dashStrike(){
  const p=this.p,dmg=COMBAT.dashDamage*(this.attackScale||1),hits=this.dashHits||(this.dashHits=new Set());
  const box={x:p.x-6,y:p.y+4,w:p.w+12,h:p.h-8};let hit=false;
  for(const e of this.enemies){if(e.dead||hits.has(e)||!overlap(box,e.hurtBox()))continue;hits.add(e);const r=e.damage(dmg,p.dir,'dash');if(r==='hit'){hit=true;this.fx.spark(e.cx,p.y+p.h*.45,'#9fe4ff',12);this.fx.text(String(Math.round(dmg)),e.cx,e.y-14,'#9fe4ff')}}
  if(!hits.has('boss')&&this.def.dashStrike?.(this,box,dmg)){hits.add('boss');hit=true}
  if(hit){this.audio.play('swing3',{vol:.6,rate:1.15});this.hitStop(.04)}
  return hit;
 }
 heroStrike(step){
  const p=this.p,dmg=COMBAT.damage[step-1]*(this.attackScale||1);
  const box={x:p.dir>0?p.x+p.w*.4:p.x+p.w*.6-COMBAT.reach,y:p.y-6,w:COMBAT.reach,h:p.h+4};
  let hit=false;
  for(const e of this.enemies){if(e.dead||!overlap(box,e.hurtBox()))continue;const r=e.damage(dmg,p.dir,step===3&&e.dir===p.dir?'heavyBack':'melee');if(r==='hit'){hit=true;this.fx.spark(e.cx-p.dir*6,p.y+p.h*.4,'#ffd36b',12);this.fx.text(String(Math.round(dmg)),e.cx,e.y-14,step===3?'#ffd36b':'#ffffff',step===3)}}
  if(this.def.strike?.(this,box,dmg,step))hit=true;
  for(const q of this.projectiles)if(q.owner==='enemy'&&overlap(box,q)){q.life=0;this.fx.spark(q.x,q.y,'#e9f2ff',8);this.audio.play('deflect',{vol:.6});hit=true}
  if(hit){this.hitStop(step===3?.07:.045);this.camera.shake=Math.max(this.camera.shake,step===3?5:3);this.host?.g?.__combatFeedback?.haptic?.(performance.now())}
 }
 moveBody(b,dt,hero){
  const solids=this.solidList(),prevBottom=b.y+b.h;b.ground=false;
  // carried by moving platform
  if(b.platform&&b.platform.kind==='mover'){b.x+=b.platform.dx;b.y+=b.platform.dy}
  const mv=b.vx+(hero?this.drift||0:0);b.x+=mv*dt;b.x=clamp(b.x,0,this.world.width-b.w);
  for(const s of solids){if(!overlap(b,s))continue;if(mv>0||b.x+b.w/2<s.x+s.w/2&&mv===0)b.x=s.x-b.w;else b.x=s.x+s.w;b.vx=0}
  // step-up onto low one-way surfaces while walking
  if(hero&&b.vy>=0)for(const f of this.surfaces()){const top=f.y;if(b.x+b.w>f.x+4&&b.x<f.x+f.w-4&&prevBottom>top&&prevBottom-top<=14&&b.drop<=0){b.y=top-b.h;b.vy=0}}
  const oldBottom=b.y+b.h;b.y+=b.vy*dt;let support=null;
  for(const s of solids){if(!overlap(b,s))continue;if(b.vy>=0&&oldBottom<=s.y+12){b.y=s.y-b.h;b.vy=0;support={kind:'solid',...s}}else if(b.vy<0&&b.y<s.y+s.h&&oldBottom>s.y+s.h){b.y=s.y+s.h;b.vy=0}else{/* embedded: push up */if(oldBottom<=s.y+20){b.y=s.y-b.h;b.vy=0;support={kind:'solid',...s}}}}
  if(b.vy>=0&&!(b.drop>0))for(const f of this.surfaces()){if(b.x+b.w>f.x+2&&b.x<f.x+f.w-2&&oldBottom<=f.y+Math.max(4,Math.abs(f.dy||0)+4)&&b.y+b.h>=f.y){b.y=f.y-b.h;b.vy=0;support=f}}
  if(support){b.ground=true;b.platform=support;if(hero){b.jumps=0;b.coyote=PHYS.coyote;if(support.kind==='crumble'&&support.state==='idle'){support.state='shake';support.t=.5;this.audio.at('crack',support.x+support.w/2,{vol:.8})}}}
  else{if(hero&&b.platform&&b.coyote<=0)b.coyote=0;b.platform=null}
 }
 pitFall(){const p=this.p;this.audio.play('fall',{vol:.7});this.fx.splash(p.x+p.w/2,Math.min(p.y,this.camera.y+H-20),6);p.x=p.lastSafe.x;p.y=p.lastSafe.y;p.vx=p.vy=0;p.platform=null;p.ground=false;this.camera.shake=6;this.hurtPlayer(20,0,null,0,true)}
 hurtPlayer(amount,dir,source,knock=180,unblockable=false){
  const p=this.p,guarding=!unblockable&&p.block&&dir!==0&&p.dir===-dir,parry=guarding&&p.blockT>0&&this.def.blockCounter;
  if(p.dead||this.phase!=='play')return false;if(!unblockable&&p.inv>0&&!parry)return false;
  if(parry){
   p.blockT=0;p.inv=Math.max(p.inv,.12);this.audio.play('deflect',{vol:.7});this.fx.spark(p.x+p.w/2+p.dir*18,p.y+p.h*.4,'#a9eaff',14);this.fx.text(this.t('blocked'),p.x+p.w/2,p.y-6,'#a9eaff');this.def.blockCounter(this,source);
  }
  else if(guarding){amount=Math.ceil(amount*.2);this.audio.play('block',{vol:.8});this.fx.spark(p.x+p.w/2+p.dir*18,p.y+p.h*.4,'#cfe3ff',10);p.vx=dir*90;p.inv=Math.max(p.inv,.25);this.fx.text('-'+Math.round(amount),p.x+p.w/2,p.y-6,'#cfe3ff')}
  else{this.audio.play('hurt',{vol:.8});p.hurtT=.32;this.attackBuffer=0;this.attackPress=false;p.inv=1;p.invFx=true;p.vx=dir*knock;p.vy=dir?-200:p.vy;this.fx.text('-'+Math.round(amount),p.x+p.w/2,p.y-6,'#ff7d6b');this.camera.shake=Math.max(this.camera.shake,4);this.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ff8b7a',8)}
  if(!parry){amount*=1-(this.damageReduction||0);p.hp-=amount;if(p.hp<=0)this.heroDown()}return true;
 }
 heroDown(){
  const p=this.p;p.hp=0;p.dead=true;p.anim='ko';p.animT=0;p.lives--;this.stats.deaths++;this.clearInputs();this.audio.play('defeat',{vol:.8});
  this.def.onHeroDown?.(this);
  setTimeout(()=>{if(this.phase==='closed')return;if(p.lives<=0&&this.def.onGameOver){this.phase='over';this.audio.stopMusic(.8);this.def.onGameOver(this);return}if(p.lives<=0){this.phase='over';this.save();this.audio.stopMusic(.8);this.showCard(this.t('over'),this.t('overHint'),[[this.t('retry'),()=>this.respawn(true),true],[this.t('map'),()=>this.exitToMap()]])}else this.respawn(false)},1100);
 }
 async nextStage(cfg){const p=this.p,keep={lives:p.lives,hp:p.hp,gold:this.gold,elapsed:this.elapsed,deaths:this.stats.deaths,kills:this.stats.kills};
  this.cfg=cfg;this.chunks=null;this.chunkOrder=null;this.clearInputs();
  if(window.PirateEnemyAnim)await window.PirateEnemyAnim.prepare(this);if(this.phase==='closed')return;
  this.build(null);Object.assign(this.p,{lives:keep.lives,hp:Math.min(this.maxHP||100,keep.hp)});this.gold=this.goldShown=keep.gold;this.elapsed=keep.elapsed;this.stats.deaths=keep.deaths;this.stats.kills=keep.kills;
  window.PirateEnemyAnim?.adopt(this);this.def.onStart?.(this,false);this.def.music?.(this)}
 respawn(full){
  const p=this.p,cp=this.checkpointPos(this.checkpoint);
  Object.assign(p,{x:cp.x-17,y:cp.y-p.h,vx:0,vy:0,dead:false,hp:this.maxHP||100,inv:2,invFx:true,hurtT:0,dash:0,dashCool:0,attack:0,block:false,blockT:0,ammo:COMBAT.ammo,platform:null,lastSafe:{x:cp.x-17,y:cp.y-p.h}});
  if(full)p.lives=3;this.projectiles=[];
  this.def.onRespawn?.(this);
  if(full){this.hideCard();this.phase='play';this.def.music?.(this)}
  this.fx.text(this.t('newLife')+' '+p.lives,p.x+p.w/2,p.y-10,'#ffe3a0');this.save();
 }
 updateProjectiles(dt){
  const p=this.p,solids=this.solidList();
  for(const q of this.projectiles){
   q.life-=dt;q.x+=q.vx*dt;q.y+=q.vy*dt;if(q.g)q.vy+=q.g*dt;q.spin=(q.spin||0)+dt*24;const sea=this.cfg.sea;if(sea&&!q.splashed&&q.y>sea&&q.vy>=0){q.splashed=true;this.fx.splash(q.x,sea,3)}
   if(q.owner==='enemy'){if(!p.dead&&overlap(q,{x:p.x+4,y:p.y+4,w:p.w-8,h:p.h-6})){q.life=0;const hit=this.hurtPlayer(q.dmg,Math.sign(q.vx)||1,q,150);if(q.src)window.PirateEnemyAnim?.shotEnd?.(this,q,hit?'hit':'blocked')}}
   else{for(const e of this.enemies){if(!e.dead&&overlap(q,e.hurtBox())){const r=e.damage(q.dmg,Math.sign(q.vx),'throw');q.life=0;if(r==='hit'){this.fx.spark(q.x,q.y,'#ffd36b',10);this.fx.sprite('puff',q.x,q.y,{scale:.26});this.fx.text(String(Math.round(q.dmg)),e.cx,e.y-14)}break}}
    if(q.life>0&&this.def.projectileHit?.(this,q))q.life=0}
   if(q.life>0)for(const s of solids)if(overlap(q,s)){q.life=0;this.fx.spark(q.x,q.y,'#cfd8e3',5);this.fx.sprite('puff',q.x,q.y,{scale:.24,alpha:.8});if(q.kind!=='crystal')this.audio.at('ricochet',q.x,{vol:.5});break}
   if(q.life<=0&&q.src&&!q.ended)window.PirateEnemyAnim?.shotEnd?.(this,q,'miss');
   if(q.life<=0&&q.onEnd)q.onEnd(this,q);
  }
  this.projectiles=this.projectiles.filter(q=>q.life>0&&q.x>-50&&q.x<this.world.width+50);
 }
 dropCoins(x,y,n,prefix){for(let i=0;i<n;i++){const id=prefix+'-'+i;if(this.coinIds.has(id))continue;this.coins.push({id,x,y,vx:(i-(n-1)/2)*70,vy:-260-i*25,rest:false,value:2,delay:.12+i*.05,claimed:!!this.paid?.has(id)})}}
 updateCoins(dt){
  const p=this.p,surf=this.surfaces(),solids=this.solidList();
  for(const k of this.coins){
   if(k.taken)continue;if(k.delay>0){k.delay-=dt;continue}
   if(!k.rest){const old=k.y;k.vy+=900*dt;k.x+=k.vx*dt;k.y+=k.vy*dt;for(const f of solids.concat(surf))if(k.x>f.x&&k.x<f.x+f.w&&old<=f.y-8&&k.y>=f.y-8&&k.vy>0){k.y=f.y-8;if(k.vy>140){k.vy*=-.38;k.vx*=.6;this.audio.at('coinDrop',k.x,{vol:.4,gap:.06})}else{k.rest=true;k.vx=0;k.vy=0}break}if(k.y>this.world.height){k.rest=true;k.y=this.world.ground-8;k.x=clamp(k.x,0,this.world.width)}}
   const dx=p.x+p.w/2-k.x,dy=p.y+p.h*.5-k.y,d=Math.hypot(dx,dy);
   if(!p.dead&&d<(this.loadout?.magnet||90)&&(k.rest||k.vy>0)){k.x+=dx*Math.min(1,dt*10);k.y+=dy*Math.min(1,dt*10)}
   if(!p.dead&&d<34){k.taken=true;this.coinIds.add(k.id);if(this.paid){if(!k.claimed&&window.PirateEconomy.earn('L'+this.def.id,k.id,k.value)){this.paid.add(k.id);this.gold+=k.value}}else this.gold+=k.value;this.audio.play('coin',{vol:.5,rate:1+Math.random()*.08,gap:.045});this.fx.flight(k.x-this.camera.x,k.y-this.camera.y);if(this.fx.on)this.fx.spark(k.x,k.y,'#ffe7a1',5)}
  }
  this.coins=this.coins.filter(k=>!k.taken);this.goldShown+=(this.gold-this.goldShown)*Math.min(1,dt*10);if(Math.abs(this.gold-this.goldShown)<.05)this.goldShown=this.gold;
 }
 updateChests(dt){const p=this.p;for(const c of this.chests){if(c.open){c.openT+=dt;continue}const box={x:c.x-30,y:c.y-60,w:60,h:60};if(!p.dead&&overlap(p,box)){if(window.PirateTavernQuest?.beforeChest(this,c)===false)continue;c.open=true;c.openT=0;this.opened.add(c.id);this.audio.at('chest',c.x);this.fx.burst(c.x,c.y-20,'#ffe27a',26);this.fx.ring(c.x,c.y-16,'rgba(255,220,120,.8)',10,.5);const n=c.big?12:Math.max(3,Math.round(c.gold/5));for(let i=0;i<n;i++)this.coins.push({id:'chest-'+c.id+'-'+i,x:c.x,y:c.y-24,vx:(i-(n-1)/2)*36,vy:-300-(i%3)*40,rest:false,value:Math.max(1,Math.round(c.gold/n)),delay:.18+i*.035});this.fx.text('+'+c.gold,c.x,c.y-50,'#ffe27a',true);this.def.onChest?.(this,c);this.save()}}}
 healHero(amount){const p=this.p;p.hp=Math.min(this.maxHP||100,p.hp+amount);return p.hp}
 /* ---------------- life hearts (cfg.hearts: [{id,x,y}]; one per level, two in the hard ones) */
 heartPath(c,x,y,s){c.beginPath();c.moveTo(x,y+s*.35);c.bezierCurveTo(x,y-s*.15,x-s*.95,y-s*.2,x-s*.95,y+s*.38);c.bezierCurveTo(x-s*.95,y+s*.85,x-s*.2,y+s*1.05,x,y+s*1.4);c.bezierCurveTo(x+s*.2,y+s*1.05,x+s*.95,y+s*.85,x+s*.95,y+s*.38);c.bezierCurveTo(x+s*.95,y-s*.2,x,y-s*.15,x,y+s*.35);c.closePath()}
 drawLifeHearts(c,x,y,n){c.save();for(let i=0;i<MAX_LIVES;i++){const hx=x+5+i*10.5,on=i<n;this.heartPath(c,hx,y-6,4.8);c.fillStyle=on?'#ff4d5e':'rgba(255,255,255,.14)';c.fill();c.lineWidth=1.2;c.strokeStyle=on?'#7a0f1c':'rgba(255,255,255,.25)';c.stroke()}c.restore()}
 drawHearts(c){const cam=this.camera;for(const h of this.cfg.hearts||[]){if(this.heartsTaken?.has(h.id)||h.x<cam.x-80||h.x>cam.x+W+80)continue;const bob=Math.sin(this.time*3+h.x*.01)*5,y=h.y-22+bob,pulse=1+.06*Math.sin(this.time*6);
  this.fx.glow(c,h.x,y+4,60,'rgba(255,90,110,',.5);c.save();c.translate(h.x,y-6);c.scale(pulse,pulse);this.heartPath(c,0,-14,21);const g=c.createLinearGradient(0,-14,0,12);g.addColorStop(0,'#ff8a96');g.addColorStop(.55,'#e8243f');g.addColorStop(1,'#8f0c22');c.fillStyle=g;c.fill();c.lineWidth=2.4;c.strokeStyle='#4a0610';c.stroke();
  c.beginPath();c.ellipse(-8,-8,4.6,3,-.6,0,Math.PI*2);c.fillStyle='rgba(255,255,255,.75)';c.fill();c.restore()}}
 updateHearts(){const p=this.p;if(p.dead)return;for(const h of this.cfg.hearts||[]){if(this.heartsTaken.has(h.id))continue;if(!overlap(p,{x:h.x-22,y:h.y-50,w:44,h:50}))continue;this.heartsTaken.add(h.id);
  if(p.lives<MAX_LIVES){p.lives++;this.fx.text(this.t('lifeUp'),h.x,h.y-70,'#ff8a96',true)}else{this.healHero(HEART_HEAL);this.fx.text(this.t('lifeFull'),h.x,h.y-70,'#ff8a96',true)}
  this.audio.play('checkpoint',{vol:.7,rate:1.35});this.fx.ring(h.x,h.y-24,'rgba(255,120,140,.9)',10,.5);this.fx.burst(h.x,h.y-24,'#ff8a96',16);this.save()}}
 updateCheckpoints(){const p=this.p;for(const c of this.cfg.checkpoints){if(c.id>this.checkpoint&&p.x+p.w/2>c.x&&Math.abs(p.y+p.h-c.y)<120){this.checkpoint=c.id;this.healHero(this.loadout?.heal||35);this.audio.at('checkpoint',c.x);this.fx.ring(c.x,c.y-40,'rgba(255,190,90,.9)',12,.6);this.fx.burst(c.x,c.y-50,'#ffbf5a',18);this.fx.text(this.t('checkpoint'),c.x,c.y-110,'#ffe3a0',true);this.save()}}}
 updateCamera(dt){
  const p=this.p,lock=this.def.cameraLock?.(this);let tx=p.x+p.w/2-W/2+p.dir*90,ty=p.y+p.h-H*.74;
  if(lock){tx=lock.x-(W-960)/2;ty=lock.y??ty}
  tx=clamp(tx,0,this.world.width-W);ty=clamp(ty,0,this.world.height-H);
  this.camera.x+=(tx-this.camera.x)*Math.min(1,dt*(lock?3:4.5));this.camera.y+=(ty-this.camera.y)*Math.min(1,dt*4);
  this.camera.shake=Math.max(0,this.camera.shake-dt*20);
 }
 updateAudio(){this.def.ambience?.(this)}
 focus(e){this.enemyFocus=e;this.focusT=4}
 complete(extra){
  if(this.phase==='complete')return;const p=this.p;
  const retry=()=>{this.phase='reward-retry';this.clearInputs();this.audio.stopMusic(.4);this.audio.silenceLoops();const msg={en:'Could not save rewards or progress. Please try again.',az:'Mükafatı və ya irəliləyişi saxlamaq alınmadı. Yenidən cəhd et.',tr:'Ödül veya ilerleme kaydedilemedi. Tekrar dene.',ru:'Не удалось сохранить награду или прогресс. Попробуйте ещё раз.',pl:'Nie udało się zapisać nagrody lub postępu. Spróbuj ponownie.'};this.showCard(this.t('retry'),msg[this.lang]||msg.en,[[this.t('retry'),()=>{this.phase='play';this.complete(extra)},true]])};
  let bonus=0;const E=window.PirateEconomy;
  if(E&&this.paid){try{const result=E.levelReward(this.def.id,this.heroRun?{heroRun:this.heroRun}:{});if(result.code)return retry();bonus=result.total;this.lastHeroReward=result.hero}catch(e){this.warn('reward '+e);return retry()}}
  const stats={gold:this.gold,time:Math.round(this.elapsed),kills:this.killed.size,enemies:this.cfg.enemies.length,chests:this.opened.size,chestTotal:this.cfg.chests.length,secrets:extra?.secrets??0,secretTotal:extra?.secretTotal??0,deaths:this.stats.deaths};
  let unlockedNext=null;try{unlockedNext=window.PirateLevels?.complete(this.def.id,stats)}catch(e){this.warn('progress '+e)}
  try{const C=window.PirateTavernContracts,met=C?.levelComplete(this.def.id);if(met?.length)this.fx?.text(C.text(this.lang).done,this.p.x+this.p.w/2,this.p.y-60,'#ffe27a',true)}catch(e){this.warn('tavern contract '+e)}   // Meyxana contracts met by this level
  if(window.PirateLevels&&!window.PirateLevels.isCompleted(this.def.id))return retry();
  this.phase='complete';this.clearInputs();this.audio.stopMusic(.4);this.audio.silenceLoops();this.audio.play('victory',{vol:.9});
  if(!E||!this.paid)try{const total=clamp(Number(localStorage.getItem('pf-adventure-gold'))||0,0,1e7);localStorage.setItem('pf-adventure-gold',String(total+this.gold))}catch{}
  this.clearSave();this.lastStats=stats;
  const mm=Math.floor(stats.time/60),ss=String(stats.time%60).padStart(2,'0');
  const card=this.showCard(this.t('complete'),this.def.title?.(this.lang)||'',[]);
  const grid=document.createElement('div');grid.className='pl-stats';
  for(const [k,v] of [[this.t('gold'),stats.gold],[this.t('time'),mm+':'+ss],[this.t('enemies'),stats.kills+' / '+stats.enemies],[this.t('chests'),stats.chests+' / '+stats.chestTotal],[this.t('secrets'),stats.secrets+' / '+stats.secretTotal]]){const a=document.createElement('span');a.textContent=k;const b=document.createElement('b');b.textContent=v;grid.append(a,b)}
  card.append(grid);
  if(this.lastHeroReward){const n=document.createElement('p');n.textContent='+'+this.lastHeroReward.xp+' XP · +'+this.lastHeroReward.fragments+' hero fragments';card.append(n)}
  if(bonus>0){const n=document.createElement('p');n.className='pl-bonus';n.textContent=({en:'First clear bonus',az:'İlk keçid bonusu',tr:'İlk bitiriş bonusu',ru:'Бонус за первое прохождение',pl:'Premia za pierwsze przejście'}[this.lang]||'First clear bonus')+': +'+bonus;n.style.color='#ffd76a';card.append(n)}
  // past the last installed level (10) the next stop is the Endless Sea, not a "Level 11"
  const nextPlayable=unlockedNext&&(window.PirateLevels?.isPlayable?.(unlockedNext)??true);
  if(unlockedNext&&(nextPlayable||window.PirateEndless)){const n=document.createElement('p');n.textContent=nextPlayable?(this.lt('levelWord')||'Level')+' '+unlockedNext+' '+this.t('unlocked')+'!':'⚓ '+this.t('endlessOpen');n.style.color='#ffe3a0';card.append(n)}
  const ending=window.PirateEnding?.shouldPlay?.(this.def.id);   // first Level 10 clear: the animated ending, then the map
  for(const [label,fn,primary] of [[this.t('next'),()=>{const lang=this.lang,hero=this.heroId,after=()=>this.opts.onExit?.('complete');this.close();if(ending)window.PirateEnding.play({lang,hero,onDone:after});else after()},true],[this.t('replay'),()=>{this.restartLevel()}]]){const b=document.createElement('button');b.textContent=label;if(primary)b.className='primary';b.onclick=fn;card.append(b)}
  this.celebrate=2.5;
 }
 /* ---------------- rendering */
 render(){
  const c=this.ctx,cam=this.camera;c.setTransform(1,0,0,1,0,0);c.imageSmoothingEnabled=false;
  const sx=cam.shake>0?(Math.random()-.5)*cam.shake:0,sy=cam.shake>0?(Math.random()-.5)*cam.shake:0;
  this.def.drawBackground?.(this,c);
  c.save();c.translate(-Math.round(cam.x+sx),-Math.round(cam.y+sy));
  this.def.drawBack?.(this,c);
  this.drawTerrain(c);
  this.def.drawMid?.(this,c);
  this.drawMechanisms(c);
  for(const e of this.enemies)if(e.cx>cam.x-120&&e.cx<cam.x+W+120)e.draw(c,this);
  this.def.drawActors?.(this,c);
  this.drawHero(c);
  this.drawProjectiles(c);
  this.fx.drawWorld(c);
  this.def.drawFront?.(this,c);
  c.restore();
  this.def.drawLighting?.(this,c);
  this.drawHud(c);
  if(this.celebrate>0&&this.phase==='complete'){this.celebrate-=1/60;this.fx.update(1/60)}
 }
 // painted environment (tools/paint_env.py): props/tiles at env.res x, large fill textures and cap strips
 blit(c,img,r,dx,dy,dw,dh){const k=this.envMeta.res||1;if(k>1){c.save();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='low'}c.drawImage(img,r[0]*k,r[1]*k,r[2]*k,r[3]*k,dx,dy,dw,dh);if(k>1)c.restore()}
 tile(c,name,x,y,w=32,h=32){const pc=this.envMeta.painted?.caps,row=pc?.rows[name];
  if(row!==undefined&&h===32){const im=this.images[pc.image],ch=pc.h,tw=im.width;let sx=((x%tw)+tw)%tw,dx=x,left=w;c.save();c.imageSmoothingEnabled=true;while(left>0){const seg=Math.min(left,tw-sx);c.drawImage(im,sx,row*ch,seg,ch,dx,y-4,seg,ch);dx+=seg;left-=seg;sx=0}c.restore();return}
  const i=this.envMeta.tiles[name];this.blit(c,this.images['tiles.png'],[i*16,0,16,16],x,y,w,h)}
 prop(c,name,x,y,scale=2,{flip=false,alpha=1}={}){const r=this.envMeta.props[name];if(!r)return;const w=r[2]*scale,h=r[3]*scale;c.save();c.globalAlpha=alpha;if(flip){c.translate(x+w,y);c.scale(-1,1);this.blit(c,this.images['props.png'],r,0,0,w,h)}else this.blit(c,this.images['props.png'],r,x,y,w,h);c.restore();return{w,h}}
 propSize(name,scale=2){const r=this.envMeta.props[name];return r?{w:r[2]*scale,h:r[3]*scale}:{w:0,h:0}}
 pattern(name,ctx=this.ctx){this.patterns??=new Map();const key=name;let m=this.patterns.get(ctx);if(!m){m={};this.patterns.set(ctx,m)}if(m[key])return m[key];const pf=this.envMeta.painted?.fills?.[name];if(pf&&this.images[pf])return m[key]=ctx.createPattern(this.images[pf],'repeat');const i=this.envMeta.tiles[name],cv=document.createElement('canvas');cv.width=cv.height=32;const x=cv.getContext('2d');x.imageSmoothingEnabled=false;const k=this.envMeta.res||1;if(k>1)x.imageSmoothingEnabled=true;x.drawImage(this.images['tiles.png'],i*16*k,0,16*k,16*k,0,0,32,32);return m[key]=ctx.createPattern(cv,'repeat')}
 paintStatic(c,L,R,T,B){
  const styleTop={ground:'top',temple:'slab',rock:'rockTop',cave:'rock',ceiling:'deep',stone:'slab'},styleFill={ground:'fill',temple:'fill2',rock:'rock',cave:'rock',ceiling:'deep',stone:'fill'};
  for(const s of this.solids){
   if(s.x+s.w<L||s.x>R||s.y+s.h<T||s.y>B)continue;
   if(this.def.paintSolid?.(this,c,s,L,R,T,B))continue;
   if(this.cfg.water&&(s.style==='ground'||s.style==='temple')){this.paintCauseway(c,s,L,R,T,B);continue}
   const x0=Math.max(s.x,Math.floor(L/32)*32),x1=Math.min(s.x+s.w,R),y0=Math.max(s.y+32,T),y1=Math.min(s.y+s.h,B);
   c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();
   const vx0=Math.max(s.x,L),vx1=Math.min(s.x+s.w,R);c.fillStyle=this.pattern(styleFill[s.style]||'fill',c);c.fillRect(vx0,y0,vx1-vx0,y1-y0+32);
   if(s.y>=T-32&&s.style!=='ceiling'&&s.style!=='cave'){for(let x=s.x;x<s.x+s.w;x+=32)if(x+32>=L&&x<=R)this.tile(c,styleTop[s.style]||'top',x,s.y,32,32)}
   if(s.style==='ceiling'||s.style==='cave'){c.fillStyle='#0a0f14';c.fillRect(s.x,s.y+s.h-6,s.w,6);for(let x=s.x+10;x<s.x+s.w;x+=46){const h=10+((x*13)%22);c.fillStyle=s.style==='cave'?'#262a35':'#2c3436';c.beginPath();c.moveTo(x,s.y+s.h);c.lineTo(x+9,s.y+s.h+h);c.lineTo(x+18,s.y+s.h);c.fill()}}
   // darken deeper fill for depth
   if(s.style!=='ceiling'&&s.style!=='cave'){if(!s.shade){s.shade=c.createLinearGradient(0,s.y,0,s.y+260);s.shade.addColorStop(0,'rgba(0,0,0,0)');s.shade.addColorStop(1,'rgba(2,6,12,.72)')}c.fillStyle=s.shade;const top=Math.max(s.y+24,T);c.fillRect(vx0,top,vx1-vx0,Math.max(0,Math.min(s.y+s.h,B)-top))}
   c.restore();
   // edge caps
   if(s.style!=='ceiling'&&s.style!=='cave'){c.fillStyle='rgba(0,0,0,.35)';c.fillRect(s.x+s.w-4,s.y+6,4,Math.min(s.h,200));c.fillStyle='rgba(255,255,255,.08)';c.fillRect(s.x,s.y+6,3,Math.min(s.h,200))}
  }
  for(const l of this.ledges){if(l.x+l.w<L||l.x>R||l.y<T-40||l.y>B)continue;if(this.def.paintLedge?.(this,c,l))continue;
   if(this.envMeta.painted){// painted slab: rounded masonry body, lit cap, soft under-shadow
    c.save();c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(l.x+l.w/2,l.y+36,l.w/2,7,0,0,Math.PI*2);c.fill();
    c.beginPath();c.roundRect(l.x,l.y+4,l.w,28,[4,4,12,12]);c.clip();c.fillStyle=this.pattern('fill2',c);c.fillRect(l.x,l.y,l.w,34);
    const g=c.createLinearGradient(0,l.y+8,0,l.y+32);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(6,10,20,.55)');c.fillStyle=g;c.fillRect(l.x,l.y,l.w,34);c.restore();
    this.tile(c,'slab',l.x,l.y,l.w,32);continue}
   for(let x=l.x;x<l.x+l.w;x+=32){const w=Math.min(32,l.x+l.w-x);c.drawImage(this.images['tiles.png'],this.envMeta.tiles[x===l.x?'slabL':x+32>=l.x+l.w?'slabR':'slab']*16,0,w/2,16,x,l.y,w,32)}c.fillStyle='rgba(0,0,0,.35)';c.fillRect(l.x+6,l.y+32,l.w-12,5)}
 }
 // Causeway over water (Blacktide-dock look): carved top, thick face, pillars and arches standing in the water.
 paintCauseway(c,s,L,R,T,B){
  const top=s.style==='ground'?'top':'slab',face=this.pattern(s.style==='ground'?'fill':'fill2',c),pill=this.pattern('fill',c),FACE=70,ARCH=56,PW=40,STEP=200,bottom=s.y+s.h;
  for(let x=s.x;x<s.x+s.w;x+=32)if(x+32>=L&&x<=R)this.tile(c,top,x,s.y,Math.min(32,s.x+s.w-x),32);
  c.fillStyle=face;c.fillRect(s.x,s.y+32,s.w,FACE-32);
  const g=c.createLinearGradient(0,s.y+20,0,s.y+FACE);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(4,10,20,.5)');c.fillStyle=g;c.fillRect(s.x,s.y+24,s.w,FACE-24);
  c.fillStyle='rgba(205,220,210,.22)';c.fillRect(s.x,s.y+FACE-10,s.w,3);c.fillStyle='rgba(0,0,0,.55)';c.fillRect(s.x,s.y+FACE-7,s.w,5);
  // pillars on a global grid, plus a pillar at each free end so edges look supported
  const xs=[];for(let x=Math.ceil((s.x+36)/STEP)*STEP;x<s.x+s.w-PW-24;x+=STEP)xs.push(x);xs.unshift(s.x);xs.push(s.x+s.w-PW);
  const uniq=[...new Set(xs)].sort((a,b)=>a-b);
  const dark=c.createLinearGradient(0,s.y+FACE,0,s.y+FACE+260);dark.addColorStop(0,'rgba(6,14,28,0)');dark.addColorStop(.5,'rgba(6,14,28,.35)');dark.addColorStop(1,'rgba(4,10,22,.85)');
  for(let i=0;i<uniq.length;i++){const px=uniq[i];c.fillStyle=pill;c.fillRect(px,s.y+FACE-2,PW,bottom-s.y-FACE+2);c.fillStyle='rgba(255,255,255,.09)';c.fillRect(px,s.y+FACE,4,bottom-s.y-FACE);c.fillStyle='rgba(0,0,0,.4)';c.fillRect(px+PW-6,s.y+FACE,6,bottom-s.y-FACE);c.fillStyle=dark;c.fillRect(px,s.y+FACE,PW,bottom-s.y-FACE)
   const nx=uniq[i+1];if(nx===undefined)break;const a0=px+PW,a1=nx;if(a1-a0<20)continue;
   // arch band with a semicircular opening
   c.save();c.beginPath();c.rect(a0,s.y+FACE-2,a1-a0,ARCH);const rx=(a1-a0)/2,cy=s.y+FACE+ARCH;c.ellipse(a0+rx,cy,rx,Math.min(ARCH-12,rx*.6),0,Math.PI,0);c.closePath();c.fillStyle=pill;c.fill('evenodd');c.fillStyle=dark;c.fill('evenodd');c.restore();
   c.strokeStyle='rgba(205,220,210,.18)';c.lineWidth=2;c.beginPath();c.ellipse(a0+rx,cy,rx,Math.min(ARCH-12,rx*.6),0,Math.PI,0);c.stroke();
  }
  c.fillStyle='rgba(0,0,0,.4)';c.fillRect(s.x+s.w-4,s.y+6,4,FACE-6);c.fillStyle='rgba(255,255,255,.1)';c.fillRect(s.x,s.y+6,3,FACE-6);
 }
 chunk(cx,cy){const CH=512,cache=this.chunks??=new Map(),order=this.chunkOrder??=[],key=cx+','+cy;let cv=cache.get(key);if(cv)return cv;cv=document.createElement('canvas');cv.width=cv.height=CH;const x=cv.getContext('2d');x.imageSmoothingEnabled=!!this.envMeta.painted;x.translate(-cx*CH,-cy*CH);this.paintStatic(x,cx*CH-1,cx*CH+CH+1,cy*CH-1,cy*CH+CH+1);cache.set(key,cv);order.push(key);if(order.length>20)cache.delete(order.shift());return cv}
 drawTerrain(c){
  // Static terrain is rasterised once into 512px chunks and blitted (cheap on mobile GPUs and CPUs).
  const cam=this.camera,CH=512,cache=this.chunks??=new Map(),order=this.chunkOrder??=[];
  const L=cam.x-40,R=cam.x+W+40,T=cam.y-40,B=cam.y+H+40;
  for(let cy=Math.floor(Math.max(0,cam.y)/CH);cy*CH<cam.y+H;cy++)for(let cx=Math.floor(Math.max(0,cam.x)/CH);cx*CH<cam.x+W;cx++){
   c.drawImage(this.chunk(cx,cy),cx*CH,cy*CH);
  }
  // Prefetch at most one neighbouring chunk per frame so scrolling never stalls on a big repaint.
  const dir=this.p.dir>0?1:-1;for(const [dx,dy] of [[dir,0],[dir,1],[dir,-1],[0,1],[0,-1]]){const cx=Math.floor((cam.x+W/2)/CH)+dx*2,cy=Math.floor((cam.y+H/2)/CH)+dy;if(cx<0||cy<0||cx*CH>this.world.width||cy*CH>this.world.height)continue;if(!cache.has(cx+','+cy)){this.chunk(cx,cy);break}}
  for(const b of this.crumbles){if(b.state==='fallen')continue;if(this.def.drawCrumble){this.def.drawCrumble(this,c,b);continue}const shake=b.state==='shake'?(Math.random()-.5)*4:0;const sz=this.propSize('slabCracked');for(let x=b.x;x<b.x+b.w;x+=sz.w-6)this.prop(c,b.state==='shake'?'slabCracked':'slab',x+shake,b.y,2)}
  for(const m of this.movers){if(m.x+m.w<L||m.x>R)continue;if(this.def.drawMover){this.def.drawMover(this,c,m);continue}const sz=this.propSize('mover');if(m.axis==='y'){c.fillStyle='rgba(30,22,14,.8)';c.fillRect(m.x+m.w/2-2,Math.min(...m.range)-40,4,m.y-Math.min(...m.range)+40)}this.prop(c,'mover',m.x+(m.w-sz.w)/2,m.y,2);if(m.active){this.fx.glow(c,m.x+m.w/2,m.y+24,22,'rgba(114,251,224,',.45+.2*Math.sin(this.time*5))}}
 }
 drawMechanisms(c){
  const cam=this.camera;this.drawHearts(c);
  for(const ch of this.chests){if(ch.x<cam.x-100||ch.x>cam.x+W+100)continue;const name=ch.big?(ch.open?'bigChestOpen':'bigChest'):(ch.open?'chestOpen':'chest');const sz=this.propSize(name);if(!ch.open)this.fx.glow(c,ch.x,ch.y-sz.h/2,46+6*Math.sin(this.time*3),'rgba(255,214,110,',.38);this.prop(c,name,ch.x-sz.w/2,ch.y-sz.h);window.PirateArtFx?.chest(this,c,ch,sz.w,sz.h);if(ch.open&&ch.openT<1.2){c.save();c.globalCompositeOperation='lighter';c.globalAlpha=1-ch.openT/1.2;for(let i=0;i<6;i++){const a=-Math.PI/2+(i-2.5)*.3;c.strokeStyle='rgba(255,220,120,.6)';c.lineWidth=4;c.beginPath();c.moveTo(ch.x,ch.y-sz.h*.6);c.lineTo(ch.x+Math.cos(a)*90,ch.y-sz.h*.6+Math.sin(a)*90);c.stroke()}c.restore()}}
  const frame=this.fx.reduced?0:Math.floor(this.time*8)%4;
  for(const k of this.coins){if(k.delay>0||k.x<cam.x-30||k.x>cam.x+W+30||k.y<cam.y-30||k.y>cam.y+H+30)continue;const bob=k.rest&&!this.fx.reduced?Math.sin(this.time*4+k.x)*2:0;if(!window.PirateArtFx?.coin(this,c,k.x,k.y+bob,k.claimed?.38:1,k.x))this.prop(c,'coin'+frame,k.x-12,k.y-12+bob,2,{alpha:k.claimed?.38:1})}
  for(const cp of this.cfg.checkpoints){if(cp.x<cam.x-100||cp.x>cam.x+W+100)continue;const lit=cp.id<=this.checkpoint;const sz=this.propSize(lit?'brazierLit':'brazier');this.prop(c,lit?'brazierLit':'brazier',cp.x-sz.w/2,cp.y-sz.h);this.fire(c,cp.x,cp.y-sz.h+8,lit?1.2:.45,lit)}
 }
 fire(c,x,y,size=1,warm=true){size*=1.5;const t=this.time,f=Math.sin(t*13+x)*.15+Math.sin(t*7.3+x*.3)*.1;this.fx.glow(c,x,y-10*size,(46+8*f)*size,warm?'rgba(255,140,50,':'rgba(120,200,255,',.75);c.save();for(let i=0;i<3;i++){const h=(17-i*4.5)*size*(1+f),w=(7-i*2)*size;c.fillStyle=['#e8501c','#ffa53a','#fff0a8'][i];c.beginPath();c.moveTo(x-w,y);c.quadraticCurveTo(x-w*.6,y-h*.6,x+Math.sin(t*9+i)*2*size,y-h);c.quadraticCurveTo(x+w*.6,y-h*.6,x+w,y);c.closePath();c.fill()}c.restore()}
 drawHero(c){
  const p=this.p;if(this.skin){if(p.block)this.fx.glow(c,p.x+p.w/2+p.dir*22,p.y+p.h*.42,44,'rgba(140,200,255,',.4);this.skin.draw(c,{...p,anim:p.dead?'ko':this.phase==='complete'?'victory':p.anim},this);return}
  const s=this.sheets.hero;if(!s)return;
  let idx;if(p.anim.startsWith('attack')){const a=s.meta.anims[p.anim];idx=a.start+(p.attack>(p.anim==='attackC'?.18:.14)?0:1)}else idx=s.frame(p.anim,p.animT);
  const shim=!!p.invFx&&p.inv>0&&!p.dead&&p.hurtT<=0&&p.dash<=0&&Math.floor(p.inv*8)%2===0;
  const squash=p.landT>0?1-p.landT*.6:1;
  if(p.block){this.fx.glow(c,p.x+p.w/2+p.dir*22,p.y+p.h*.42,40,'rgba(140,200,255,',.35)}
  c.save();c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(p.x+p.w/2,p.y+p.h+1,20,5,0,0,TAU);c.fill();c.restore();
  c.save();c.translate(p.x+p.w/2,p.y+p.h);c.scale(1/squash*(p.landT>0?1:1),squash);s.draw(c,idx,0,0,p.dir,{alpha:1,flash:p.hurtT>.2?.8:shim?.3:0});c.restore();
 }
 drawProjectiles(c){
  for(const q of this.projectiles){
   // a shot drawn from the raised barrel eases onto its real (unchanged) flight line over its first ~110 px
   const ease=q.barrel?Math.max(0,1-Math.abs(q.x-q.x0)/110):0;c.save();c.translate(q.x+(q.barrel?q.barrel[0]*ease:0),q.y+(q.barrel?q.barrel[1]*ease:0));
   if(q.kind==='sword'){c.rotate(q.spin*(q.vx>0?1:-1));c.fillStyle='#e8f0f8';c.fillRect(-15,-2,30,4);c.fillStyle='#ffd36b';c.fillRect(-15,-4,5,8);this.fx.glow(c,0,0,16,'rgba(150,200,255,',.3)}
   else if(q.kind==='bullet'){c.rotate(q.vx<0?Math.PI:0);this.fx.glow(c,0,0,18,'rgba(255,200,90,',.7);c.fillStyle='rgba(255,220,140,.45)';c.fillRect(-26,-1.5,22,3);c.fillStyle='#fff6d0';c.beginPath();c.ellipse(0,0,6,3,0,0,TAU);c.fill()}
   else if(q.kind==='shot'){c.rotate(Math.atan2(q.vy,q.vx));this.fx.glow(c,0,0,22,'rgba(255,120,60,',.7);c.fillStyle='rgba(255,170,110,.5)';c.fillRect(-24,-1.5,20,3);c.fillStyle='#ffe2c0';c.beginPath();c.ellipse(0,0,6,3,0,0,TAU);c.fill()}
   else if(q.kind==='arrow'){c.rotate(Math.atan2(q.vy,q.vx));this.fx.glow(c,0,0,22,'rgba(240,140,255,',.55);c.fillStyle='#d9cfb8';c.fillRect(-12,-1,22,3);c.fillStyle='#f08cff';c.beginPath();c.moveTo(14,0);c.lineTo(6,-5);c.lineTo(6,5);c.fill();c.fillStyle='#7b4dbe';c.fillRect(-14,-3,5,6)}
   else this.def.drawProjectile?.(this,c,q);
   c.restore();
  }
 }
 drawHud(c){
  // small phones: the HUD is drawn larger (hudScale) on a narrower logical width so it stays readable
  const hs=this.hudScale||1,w0=W;W=Math.round(W/hs);try{this.drawHudScaled(c,hs)}finally{W=w0}
 }
 drawHudScaled(c,hs){
  const p=this.p;c.save();c.setTransform(hs,0,0,hs,0,0);
  // player panel (top-left), like the reference: portrait, name, HP bar, lives, sword ammo
  this.panel(c,12,10,262,82);
  const hero=this.sheets.hero;if(this.skin){c.save();c.fillStyle='#22344a';c.beginPath();c.roundRect(20,18,60,66,10);c.fill();this.skin.drawPortrait(c,20,18,60,66);c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(20,18,60,66,10);c.stroke();c.restore()}else if(hero){c.save();c.beginPath();c.roundRect(20,18,60,66,10);c.clip();c.fillStyle='#22344a';c.fillRect(20,18,60,66);hero.draw(c,0,50,118,1,{scale:.9});c.restore();c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(20,18,60,66,10);c.stroke()}
  let name=window.PirateHeroes?.get?.(this.heroId)?.name||'Captain';
  c.textAlign='left';c.textBaseline='alphabetic';c.font='800 19px Arial, sans-serif';c.fillStyle='#ffffff';c.fillText(name,92,36);const nw=c.measureText(name).width;c.fillStyle='#ffd36b';c.font='800 17px Arial, sans-serif';c.fillText(Math.ceil(p.hp)+'/'+Math.ceil(this.maxHP||100),98+nw,36);
  this.bar(c,92,44,170,13,p.hp/(this.maxHP||100),'#3bd67a','#1a7a45');
  c.font='600 14px Arial, sans-serif';c.fillStyle='#dfe8ee';this.drawLifeHearts(c,92,73,p.lives);
  const rl=this.skin?.ranged==='pistol'?this.t('pistol'):this.t('sword');c.fillText(rl,156,78);const ax=Math.max(238,164+c.measureText(rl).width);for(let i=0;i<COMBAT.ammo;i++){c.fillStyle=i<p.ammo?'#ffffff':'#ffffff33';c.beginPath();c.arc(ax+i*12,73,4,0,TAU);c.fill()}
  // top centre: zone, gold, objective
  const zone=this.def.zoneLabel?.(this)||'';
  c.textAlign='center';c.font='700 18px Georgia, serif';c.fillStyle='#ffe3a6';c.strokeStyle='#0a0f18';c.lineWidth=4;c.strokeText(zone,W/2-20,28);c.fillText(zone,W/2-20,28);
  const gx=W/2-78,gy=38;this.prop(c,'coin0',gx,gy,2);const pulse=this.fx.flights.length?1.08:1;c.save();c.translate(gx+30,gy+18);c.scale(pulse,pulse);c.textAlign='left';c.font='800 18px Arial, sans-serif';c.strokeText(this.t('gold').toUpperCase()+' '+Math.round(this.goldShown),0,0);c.fillStyle='#ffe9a8';c.fillText(this.t('gold').toUpperCase()+' '+Math.round(this.goldShown),0,0);c.restore();
  const obj=this.def.objectiveHud?.(this);if(obj){c.textAlign='center';c.font='700 15px Arial, sans-serif';const half=c.measureText('◆ '+obj).width/2,ox=W/2-20,oy=ox-half<284||ox+half>W-304?110:88;this.objY=oy;c.strokeText('◆ '+obj,ox,oy);c.fillStyle='#bfe9ff';c.fillText('◆ '+obj,ox,oy)} // drop below the side panels on narrow phones
  for(const f of this.fx.flights){const k=f.age/f.dur,e=k*k*(3-2*k);const x=lerp(f.x,gx+12,e),y=lerp(f.y,gy+12,e)-Math.sin(k*Math.PI)*60;this.prop(c,'coin0',x-10,y-10,2)}
  // enemy panel (top-right): last engaged enemy or the boss
  const foe=this.def.bossHud?.(this)?null:(this.focusT>0&&this.enemyFocus&&!this.enemyFocus.dead?this.enemyFocus:null);
  if(foe){const x=W-296,y=10;this.panel(c,x,y,224,70);const sh=this.sheets[foe.type];if(sh){c.save();c.beginPath();c.roundRect(x+8,y+8,50,54,8);c.clip();c.fillStyle='#2a2236';c.fillRect(x+8,y+8,50,54);sh.draw(c,0,x+33,y+76,1,{scale:.85});c.restore()}c.textAlign='left';c.fillStyle='#fff';const nm=foe.def.name[this.lang]||foe.def.name.en;let fs=15;c.font='800 15px Arial, sans-serif';while(fs>11&&c.measureText(nm).width>150){fs--;c.font='800 '+fs+'px Arial, sans-serif'}c.fillText(nm,x+66,y+24);c.font='800 15px Arial, sans-serif';c.fillStyle='#ffd36b';c.fillText(Math.max(0,Math.ceil(foe.hp))+'/'+foe.max,x+66,y+42);this.bar(c,x+66,y+48,148,10,foe.hp/foe.max,'#3bd67a','#1a7a45',true)}
  this.def.drawHud?.(this,c);
  c.restore();
 }
 panel(c,x,y,w,h){c.save();c.fillStyle='rgba(10,18,32,.82)';c.strokeStyle='rgba(205,220,240,.35)';c.lineWidth=2;c.beginPath();c.roundRect(x,y,w,h,14);c.fill();c.stroke();c.restore()}
 bar(c,x,y,w,h,k,col,dark,danger){k=clamp(k,0,1);c.fillStyle='#0b111b';c.beginPath();c.roundRect(x-1,y-1,w+2,h+2,h/2);c.fill();const g=c.createLinearGradient(0,y,0,y+h);g.addColorStop(0,col);g.addColorStop(1,dark);c.fillStyle=g;c.beginPath();c.roundRect(x,y,Math.max(h,w*k),h,h/2);c.fill();if(danger&&k<1){c.fillStyle='#e8484f';c.fillRect(x+w*k-3,y,3,h)}c.fillStyle='rgba(255,255,255,.25)';c.fillRect(x+4,y+2,Math.max(0,w*k-8),2)}
}

/* Preserve the painted torso, animate each lower-body half around its hip.
 * Keeps the original sprite untouched at rest; no generated replacements. */
function drawPaintedWalk(c,img,ox,oy,iw,ih,e,t){
 if(!img||!e||e.anim!=='walk'||e.dead||e.hurtT>0||e.spawnT>0){c.drawImage(img,ox,oy,iw,ih);return}
 const sw=img.width,sh=img.height,hip=Math.floor(sh*.72),half=Math.floor(sw/2);
 if(!sw||!sh||!hip||!half){c.drawImage(img,ox,oy,iw,ih);return}
 const hipY=oy+ih*hip/sh,phase=Math.sin(t*11+(e.home||0)*.025);
 c.drawImage(img,0,0,sw,hip,ox,oy,iw,ih*hip/sh);
 for(let side=0;side<2;side++){
  const sx=side?half:0,w=side?sw-half:half,pw=iw*w/sw;
  c.save();c.translate(ox+iw*(sx+w/2)/sw,hipY);
  c.rotate((side? -1:1)*phase*.16);
  c.drawImage(img,sx,hip,w,sh-hip,-pw/2,0,pw,ih*(sh-hip)/sh);
  c.restore();
 }
}

const registry=new Map();
window.PirateLevelEngine={get W(){return W},H,PHYS,COMBAT,TEXT,ENEMY,Enemy,LevelRun,overlap,clamp,drawPaintedWalk,
 register(def){registry.set(def.id,def)},
 get(id){return registry.get(id)},
 async launch(id,opts){const def=registry.get(id);if(!def)throw Error('Level '+id+' is not installed');if(window.__pirateLevel)window.__pirateLevel.close();const run=new LevelRun(def,opts);window.__pirateLevel=run;await run.open();return run}};
})();
