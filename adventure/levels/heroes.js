/* Pirate Strike — hero roster and in-level hero skins.
 * Mari (id scarlet): painted chibi art cut from the owner's reference sheets (sword + pistol).
 * Sailor / Captain / Shark / Crab: the game's existing animated fighter frames.
 * A skin draws the hero for the level engine (idle, run, jump, fall, sword combo,
 * pistol shot / sword throw, dash, block, hurt, KO, victory) with one consistent look. */
(()=>{'use strict';
if(window.PirateHeroes)return;
const BASE='adventure/levels/assets/heroes/';
const TAU=Math.PI*2;
const D={
 scarlet:{en:'Fearless captain of the Crimson Gull. Sword slashes up close, pistol shots from afar.',az:'Qırmızı Qağayının qorxmaz kapitanı. Yaxında qılınc, uzaqda tapança.',tr:'Kızıl Martı’nın korkusuz kaptanı. Yakında kılıç, uzakta tabanca.',ru:'Бесстрашный капитан «Алой чайки». Сабля вблизи, пистолет издалека.',pl:'Nieustraszona kapitan Szkarłatnej Mewy. Szabla z bliska, pistolet z daleka.'},
 sailor:{en:'Quick deckhand with a reliable cutlass and thrown blades.',az:'Etibarlı qılıncı və atılan bıçaqları olan cəld dənizçi.',tr:'Güvenilir palası ve fırlatma bıçaklarıyla çevik tayfa.',ru:'Ловкий матрос с верной саблей и метательными клинками.',pl:'Zwinny majtek z pewnym kordem i nożami do rzucania.'},
 captain:{en:'Seasoned captain: heavy combo finisher and thrown swords.',az:'Təcrübəli kapitan: güclü kombo zərbəsi və atılan qılınclar.',tr:'Tecrübeli kaptan: güçlü kombo bitirişi ve fırlatılan kılıçlar.',ru:'Опытный капитан: мощный финиш комбо и метание сабель.',pl:'Doświadczony kapitan: mocny finisz combo i rzucane szable.'},
 shark:{en:'Sea brute who bites through shields.',az:'Qalxanları dişləyib keçən dəniz canavarı.',tr:'Kalkanları ısırıp geçen deniz canavarı.',ru:'Морской громила, прокусывающий щиты.',pl:'Morski osiłek, który przegryza tarcze.'},
 crab:{en:'Armoured crab pirate with a tough shell.',az:'Sərt qabıqlı zirehli xərçəng pirat.',tr:'Sert kabuklu zırhlı yengeç korsan.',ru:'Бронированный краб-пират с крепким панцирем.',pl:'Opancerzony krab-pirat z twardą skorupą.'}};
const ROSTER=[
 {id:'scarlet',name:'Mari',ranged:'pistol',art:'painted',tint:['#7a4a12','#3b200a'],stats:{attack:4,ranged:5,speed:4}},
 {id:'sailor',name:'Sailor',ranged:'sword',art:'frames',tint:['#22445e','#0e1d2a'],stats:{attack:3,ranged:3,speed:5}},
 {id:'captain',name:'Captain',ranged:'sword',art:'frames',tint:['#5a1d1d','#250a0a'],stats:{attack:5,ranged:3,speed:3}},
 {id:'shark',name:'Shark',ranged:'sword',art:'frames',tint:['#1e4a52','#0a1e22'],stats:{attack:4,ranged:2,speed:4}},
 {id:'crab',name:'Crab',ranged:'sword',art:'frames',tint:['#5e2a14','#260f06'],stats:{attack:3,ranged:3,speed:3}}];
let animations=null,animLoad=null;
function loadImage(src){return new Promise((ok,fail)=>{const im=new Image();im.decoding='async';im.onload=()=>ok(im);im.onerror=()=>fail(Error('image '+src));im.src=src})}
function loadAnimations(){animLoad??=fetch('adventure/assets/animations.json').then(r=>{if(!r.ok)throw Error('animations');return r.json()}).then(j=>animations=j);return animLoad}
const portraitCache=new Map(),portraitPending=new Set(),portraitRetry=new Map();
// Mercy invulnerability after a hit/respawn: a pulsing gold outline, never transparency or a whitened body
// (a half-transparent hero read as a 'shadow' on screen).
const GLOW='drop-shadow(0 0 3px rgba(255,226,140,.95)) drop-shadow(0 0 7px rgba(255,190,80,.6))';
const shimmer=p=>!!p.invFx&&p.inv>0&&!p.dead&&p.hurtT<=0&&p.dash<=0&&Math.floor(p.inv*8)%2===0;

/* ------------------------------------------------------------- Mari (painted) */
class ScarletSkin{
 constructor(){this.ranged='pistol';this.id='scarlet';this.ready=false}
 async load(){
  const [meta,img,portrait]=await Promise.all([fetch(BASE+'scarlet.json').then(r=>r.json()),loadImage(BASE+'scarlet.png'),loadImage(BASE+'scarlet-portrait.png')]);
  this.meta=meta;this.img=img;this.portraitImg=portrait;this.scale=.8;
  // 8-frame run cycle rigged from the painted run pose (tools/scarlet_run.py); falls back to the single pose
  if(meta.run)this.runImg=await loadImage(BASE+meta.run.image).catch(()=>null);
  const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);this.white=c;
  const r=document.createElement('canvas');r.width=img.width;r.height=img.height;const y=r.getContext('2d');y.drawImage(img,0,0);y.globalCompositeOperation='source-in';y.fillStyle='#ff4a3a';y.fillRect(0,0,r.width,r.height);this.red=r;
  this.ready=true;return this;
 }
 frame(name){return this.meta.poses[name]??0}
 blit(c,pose,fx,fy,dir,{rot=0,sx=1,sy=1,alpha=1,flash=0,flashImg=null,dx=0,glow=false,runFrame=-1}={}){
  const m=this.meta,i=this.frame(pose),s=this.scale,W=m.frameW,H=m.frameH,ax=m.anchor[0],ay=m.anchor[1];
  c.save();c.translate(Math.round(fx),Math.round(fy));if(dir<0)c.scale(-1,1);c.translate(dx,0);c.rotate(rot);c.scale(sx*s,sy*s);c.globalAlpha=alpha;
  c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
  const run=pose==='run'&&this.runImg&&runFrame>=0,src=run?this.runImg:this.img,sx0=(run?runFrame:i)*W;
  if(glow)c.filter=GLOW;c.drawImage(src,sx0,0,W,H,-ax,-ay,W,H);if(glow)c.filter='none';
  if(flash>0){c.globalAlpha=alpha*flash;c.drawImage(flashImg||this.white,i*W,0,W,H,-ax,-ay,W,H)}
  c.restore();c.imageSmoothingEnabled=false;
 }
 pose(p,t){
  const a=p.anim;let pose='idle',o={};
  if(p.dead){pose='jump';o={rot:-1.25,dx:-10,sy:.98}}
  else if(a==='hurt'){pose='idle';o={rot:-.2,dx:-6,flash:.32,flashImg:this.red}}
  else if(a==='throw'){pose='shoot';const k=p.throwT/.32;o={dx:k>.75?-6:0,rot:k>.75?-.04:0}}
  else if(a.startsWith('attack')){pose='attack';const step=a==='attackC'?3:a==='attackB'?2:1;const k=Math.max(0,p.attack)/(step===3?.3:.22);o={dx:(1-k)*(step===3?16:9),rot:step===3?.08*(1-k):step===2?-.05:.02}}
  else if(a==='dash'){pose='dash';o={sx:1.06,sy:.96,rot:.04}}
  else if(a==='block'){pose='idle';o={rot:-.07,sx:.97,dx:-3}}
  else if(a==='jump'){pose='jump';o={rot:-.05}}
  else if(a==='fall'){pose='jump';o={rot:.1,sy:1.03}}
  else if(a==='run'){pose='run';
   if(this.runImg){const n=this.meta.run.frames,ph=t*this.meta.run.fps/n;const f=Math.floor(ph*n)%n;o={runFrame:f,rot:.02}}
   else{const b=Math.abs(Math.sin(t*11));o={dy:-b*5,rot:.03+Math.sin(t*11)*.025,sy:1+(1-b)*.03,sx:1-(1-b)*.02}}}
  else if(a==='victory'){pose='idle';o={dy:-Math.abs(Math.sin(t*6))*14}}
  else{pose='idle';o={sy:1+Math.sin(t*2.6)*.012,sx:1-Math.sin(t*2.6)*.006}}
  if(p.landT>0&&!p.dead&&(a==='idle'||a==='run')){const k=Math.min(1,p.landT/.12);o.sy=(o.sy||1)*(1-.09*k);o.sx=(o.sx||1)*(1+.06*k)}
  return[pose,o];
 }
 draw(c,p,run){
  const t=run.time,[pose,o]=this.pose(p,t),shim=shimmer(p);
  const fx=p.x+p.w/2,fy=p.y+p.h+(o.dy||0)+(p.dead?6:0);
  c.save();c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(p.x+p.w/2,p.y+p.h+1,26,6,0,0,TAU);c.fill();c.restore();
  this.blit(c,pose,fx,fy,p.dir,shim?{...o,alpha:1,glow:true}:{...o,alpha:p.dead?Math.max(.25,1-(p.animT||0)):1});
 }
 ghost(c,g){this.blit(c,'dash',g.x,g.y,g.dir,{alpha:.32*g.life/g.max,sx:1.06,sy:.96})}
 muzzle(p){return{x:p.x+p.w/2+p.dir*24,y:p.y+p.h*.48}}   // where the shot starts (gameplay line)
 barrel(p){return{x:p.x+p.w/2+p.dir*70,y:p.y-24}}   // tip of the raised pistol in the shoot pose: flash and smoke start here
 drawPortrait(c,x,y,w,h){const im=this.portraitImg;if(!im)return;const k=Math.max(w/im.width,h/im.height);c.save();c.beginPath();c.roundRect(x,y,w,h,10);c.clip();c.imageSmoothingEnabled=true;c.drawImage(im,x+(w-im.width*k)/2,y,im.width*k,im.height*k);c.restore();c.imageSmoothingEnabled=false}
}

/* ------------------------------------------------------------- existing fighters (frames) */
const MAP={idle:'Idle',run:'Move',jump:'Jump',fall:'Fall',attackA:'AttackA',attackB:'AttackB',attackC:'AttackC',block:'Block',dash:'Dash',hurt:'Hurt',throw:'ThrowSword',ko:'Hurt',victory:'Idle'};
// High-resolution identity is independent of the equipped cosmetic slots.
// A missing authored costume uses this SAME hero's illustrated Classic art.
// Legacy pixel frames remain available to other engine code, never as a hero-art fallback.
const ILLUSTRATED=new Set(['sailor','captain','shark','crab']);
const OUTFIT_ART={sailor:{'outfit-navy':'sailor-navy'},crab:{'outfit-coral':'crab-coral'}};
const illustratedCache=new Map(),illustratedCards=new Map();
const REQUIRED=['idle','run','jump','fall','land','attackA','attackB','attackC','throw','dash','dashAttack','hurt','block','death','victory'];
function supportsIllustration(id,load){return ILLUSTRATED.has(id)||id==='scarlet'&&!!load?.arena}   // Mari: Arena atlas only (tools/build_mari_arena_atlas.py); levels/shop keep ScarletSkin
function illustratedName(id,load){return OUTFIT_ART[id]?.[load?.outfit]||id}
function validIllustration(m,id,name){
 const outfit=Object.entries(OUTFIT_ART[id]||{}).find(([,n])=>n===name)?.[0];
 return m?.v===1&&m.hero===id&&m.image===name+'-atlas.webp'&&(outfit?m.outfit===outfit:!m.outfit)&&m.frameW===256&&m.frameH===288&&m.columns===4&&m.frames===24&&
 Array.isArray(m.anchor)&&m.anchor[0]===128&&m.anchor[1]===270&&m.scale===.8&&REQUIRED.every(k=>{
  const a=m.animations?.[k];return a&&Number.isFinite(a.fps)&&a.fps>0&&a.fps<=30&&Array.isArray(a.frames)&&a.frames.length>0&&a.frames.every(i=>Number.isInteger(i)&&i>=0&&i<24);
 });
}
function illustrationAsset(id,name){
 if(!illustratedCache.has(name)){
  const job=(async()=>{const r=await fetch(BASE+'illustrated/'+name+'.json');if(!r.ok)return null;const m=await r.json();if(!validIllustration(m,id,name))return null;
   const image=await loadImage(BASE+'illustrated/'+m.image);if(image.width!==1024||image.height!==1728)return null;return{meta:m,image};})();
  const safe=job.catch(()=>null).then(art=>{if(!art)illustratedCache.delete(name);return art});
  illustratedCache.set(name,safe);
 }
 return illustratedCache.get(name);
}
async function loadIllustration(id,load){
 if(!supportsIllustration(id,load))return null;
 load=load||window.PirateEconomy?.loadout?.(id)||{};
 const name=illustratedName(id,load);
 const art=await illustrationAsset(id,name)||(name!==id?await illustrationAsset(id,id):null);
 if(!art)return null;
 return{...art,requestedOutfit:load.outfit||'outfit-classic',renderedOutfit:art.meta.outfit||'outfit-classic',fallback:(load.outfit||'outfit-classic')!==(art.meta.outfit||'outfit-classic')};
}
async function illustratedCard(id,load){
 load=load||window.PirateEconomy?.loadout?.(id);if(!supportsIllustration(id,load))return null;
 const a=await loadIllustration(id,load);if(!a)throw Error('Illustrated hero artwork unavailable: '+id);const name=a.meta.image;
 if(!illustratedCards.has(name))illustratedCards.set(name,(async()=>{
  const cv=document.createElement('canvas');cv.width=256;cv.height=288;const c=cv.getContext('2d',{willReadFrequently:true});c.drawImage(a.image,0,0,256,288,0,0,256,288);
  const d=c.getImageData(0,0,256,288).data;let x0=256,y0=288,x1=0,y1=0;for(let y=0;y<288;y++)for(let x=0;x<256;x++)if(d[(y*256+x)*4+3]>16){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)}
  if(x1<x0)return null;const out=document.createElement('canvas');out.width=x1-x0+1;out.height=y1-y0+1;out.getContext('2d').drawImage(cv,x0,y0,out.width,out.height,0,0,out.width,out.height);return out.toDataURL();})());
 return illustratedCards.get(name);
}
class FrameSkin{
 constructor(id){this.id=id;this.ranged='sword';this.scale=4.75;this.images=new Map()}
 async load(){
  const art=await loadIllustration(this.id,this.loadout);
  if(!art)throw Error('Illustrated hero artwork unavailable: '+this.id);
  this.illustrated=art.meta;this.atlas=art.image;
  this.artStatus={requestedOutfit:art.requestedOutfit,renderedOutfit:art.renderedOutfit,fallback:art.fallback};
  return this;
 }
 pick(p,t){if(this.illustrated)return this.atlas;const key=p.dead?'Hurt':MAP[p.anim]||'Idle',a=this.anim[key]||this.anim.Idle;let i;
  if(p.anim.startsWith('attack')){const k=1-Math.max(0,p.attack)/(p.anim==='attackC'?.3:.22);i=Math.min(a.frames.length-1,Math.floor(k*a.frames.length))}
  else if(p.dead)i=a.frames.length-1;else i=Math.floor(t/Math.max(.05,a.time||.08))%a.frames.length;
  return this.images.get(a.frames[i])}
 illustratedFrame(p,t){
  const m=this.illustrated;let key=p.dead||p.anim==='ko'?'death':(p.anim||'idle');
  if(p.dash>0&&p.attack>0&&key.startsWith('attack'))key='dashAttack';
  if(p.landT>0&&(key==='idle'||key==='run'))key='land';
  if(key==='death'){if(this.deathStarted==null||t<this.deathStarted)this.deathStarted=t}else this.deathStarted=null;
  const a=m.animations[key]||m.animations.idle;let i;
  if(key.startsWith('attack')){const dur=key==='attackC'?.3:.22;i=Math.floor((1-Math.max(0,p.attack||0)/dur)*a.frames.length)}
  else if(key==='throw')i=Math.floor((1-Math.max(0,p.throwT||0)/.32)*a.frames.length);
  else if(key==='death')i=Math.floor(Math.max(p.animT||0,(t||0)-this.deathStarted)*a.fps);
  else if(key==='hurt'||key==='land')i=Math.floor((p.animT||0)*a.fps);
  else i=Math.floor(Math.max(0,t||0)*a.fps)%a.frames.length;
  return a.frames[Math.max(0,Math.min(a.frames.length-1,i))];
 }
 illustratedBlit(c,index,x,y,dir,{alpha=1,glow=false}={}){
  const m=this.illustrated,s=m.scale*this.scale/4.75;
  c.save();c.translate(Math.round(x),Math.round(y));if(dir<0)c.scale(-1,1);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.globalAlpha=alpha;if(glow)c.filter=GLOW;
  c.drawImage(this.atlas,index%4*256,Math.floor(index/4)*288,256,288,-m.anchor[0]*s,-m.anchor[1]*s,256*s,288*s);c.restore();
 }
 draw(c,p,run){
  if(this.illustrated){const unit=this.scale/4.75;c.save();c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(p.x+p.w/2,p.y+p.h+1,24*unit,6*unit,0,0,TAU);c.fill();c.restore();
   this.illustratedBlit(c,this.illustratedFrame(p,run.time),p.x+p.w/2,p.y+p.h,p.dir,{glow:shimmer(p)});return}
  const im=this.pick(p,run.time);if(!im)return;const s=this.scale,shim=shimmer(p);
  c.save();c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(p.x+p.w/2,p.y+p.h+1,24,6,0,0,TAU);c.fill();c.restore();
  c.save();c.translate(Math.round(p.x+p.w/2),Math.round(p.y+p.h+(p.dead?4:0)));if(p.dir<0)c.scale(-1,1);if(p.dead)c.rotate(-1.2);c.globalAlpha=1;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
  c.shadowColor='rgba(4,14,24,.65)';c.shadowBlur=4;c.shadowOffsetY=3;
  if(shim)c.filter=GLOW;c.drawImage(im,0,0,99,40,-48*s,-32*s,99*s,40*s);c.filter='none';
  if(p.hurtT>.18){c.globalCompositeOperation='source-atop';c.globalAlpha=.55;c.fillStyle='#fff';c.fillRect(-48*s,-32*s,99*s,40*s)}
  c.restore();
 }
 ghost(c,g){if(this.illustrated){this.illustratedBlit(c,16,g.x,g.y,g.dir,{alpha:.32*g.life/g.max});return}const im=this.images.get(this.anim.Dash.frames[0]);if(!im)return;const s=this.scale;c.save();c.translate(g.x,g.y);if(g.dir<0)c.scale(-1,1);c.globalAlpha=.32*g.life/g.max;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.drawImage(im,0,0,99,40,-48*s,-32*s,99*s,40*s);c.restore()}
 muzzle(p){return{x:p.x+p.w/2+p.dir*30,y:p.y+p.h*.42}}
 drawPortrait(c,x,y,w,h){if(this.illustrated){c.save();c.beginPath();c.roundRect(x,y,w,h,10);c.clip();c.imageSmoothingEnabled=true;c.drawImage(this.atlas,50,45,156,145,x,y,w,h);c.restore();return}const im=this.portraitImg;if(!im)return;c.save();c.beginPath();c.roundRect(x,y,w,h,10);c.clip();c.fillStyle='#21384c';c.fillRect(x,y,w,h);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';const s=w/26;c.drawImage(im,36,2,30,30,x+w/2-15*s,y+h*.08,30*s,30*s);c.restore()}
}

window.PirateHeroes={
 roster:ROSTER,
 supportsIllustration,illustratedCard,loadIllustration,illustratedName,
 get(id){return ROSTER.find(h=>h.id===id)||ROSTER[0]},
 describe(id,lang){const d=D[id]||D.scarlet;return d[lang]||d.en},
 createSkin(id){return id==='scarlet'?new ScarletSkin():new FrameSkin(ROSTER.some(h=>h.id===id)?id:'captain')},
 voyageSkin(id){return id==='scarlet'?'scarlet':(['sailor','captain','shark','crab'].includes(id)?id:'captain')},
 cardArt(id){return id==='scarlet'?BASE+'scarlet-card.png':null},
 /* small square portrait (data URL) for buttons/HUD */
 portrait(id){
  if(id==='scarlet')return BASE+'scarlet-portrait.png';
  const load=window.PirateEconomy?.loadout?.(id),name=illustratedName(id,load),key=id+'|'+name;
  const previous=portraitCache.get(key)||'',retry=portraitRetry.get(key)||0;
  if(portraitPending.has(key)||portraitCache.has(key)&&(!retry||performance.now()<retry))return previous;
  portraitCache.set(key,previous);portraitPending.add(key);
  const job=(async()=>{const art=await loadIllustration(id,load);if(!art)throw Error('Illustrated hero portrait unavailable: '+id);
   const c=document.createElement('canvas');c.width=c.height=96;const x=c.getContext('2d');x.imageSmoothingEnabled=true;x.drawImage(art.image,56,50,144,144,0,0,96,96);
   return{url:c.toDataURL(),temporary:art.meta.image!==name+'-atlas.webp'};
  })();
  job.then(({url,temporary})=>{portraitCache.set(key,url);if(temporary)portraitRetry.set(key,performance.now()+1000);else portraitRetry.delete(key);
   const now=window.PirateEconomy?.loadout?.(id);if(id+'|'+illustratedName(id,now)!==key)return;
   document.querySelectorAll('img[data-hero-portrait="'+id+'"]').forEach(i=>i.src=url);
  }).catch(()=>portraitRetry.set(key,performance.now()+1000)).finally(()=>portraitPending.delete(key));
  return previous;
 },
 frameImage:async(id,anim='Idle',i=0)=>{await loadAnimations();return loadImage(animations[id][anim].frames[i])},
 ScarletSkin,FrameSkin,
 /* Mari inside the Blacktide voyage: draw her instead of a template fighter. */
 installVoyage(){
  const A=window.PirateAdventure;if(!A||A.heroesHooked)return;A.heroesHooked=true;const P=A.Voyage.prototype;
  const actor=P.actor,render=P.render,launchBoss=P.launchBoss,start=P.start;let skin=null;
  const ensure=v=>{if(v.animations&&!v.animations.scarlet)v.animations.scarlet=v.animations.captain;if(!skin){skin=new ScarletSkin();skin.load().catch(()=>{skin=null})}};
  P.start=function(...a){if(this.skin==='scarlet')ensure(this);return start.apply(this,a)};
  P.actor=function(a,s){if(s==='scarlet'&&skin?.ready&&a===this.p){const p=a,c=this.ctx;const anim=p.hp<=0?'ko':p.shootT>0?'throw':this.inputs.has('block')&&p.ground?'block':p.dash>0?'dash':p.attack>0?'attackA':!p.ground?(p.vy<0?'jump':'fall'):Math.abs(p.vx)>10?'run':'idle';
   const proxy={x:p.x,y:p.y,w:p.w,h:p.h,dir:p.dir,anim,attack:p.attack,throwT:p.shootT||0,inv:p.inv,invFx:true,hurtT:p.inv>.6?.3:0,dash:p.dash,dead:false,animT:0};skin.scale=.42;skin.draw(c,proxy,{time:this.time});return}
   return actor.call(this,a,s)};
  P.render=function(...a){const r=render.apply(this,a);if(this.skin==='scarlet'&&skin?.ready&&this.p){const c=this.ctx;c.save();const hs=this.hudScale||1;c.scale(hs,hs);c.fillStyle='#071420';c.fillRect(21,18,52,56);skin.drawPortrait(c,21,18,52,56);c.restore()}return r};
  P.launchBoss=function(...a){const s=this.skin;if(s==='scarlet')this.skin='captain';try{return launchBoss.apply(this,a)}finally{this.skin=s}};
 }
};
window.PirateHeroes.installVoyage();
})();


