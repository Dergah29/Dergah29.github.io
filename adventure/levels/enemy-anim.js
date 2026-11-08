/* Pirate Strike — Enemy Library animation runtime (window.PirateEnemyAnim).
 *
 * Plays authored full-body animation (frames exported from a professionally rigged/painted character,
 * packed by tools/pack_enemy_anim.py) for any engine enemy, without touching gameplay:
 *  - a per-enemy controller maps the enemy's gameplay state to a clip (and, for attacks, to a phase of
 *    the clip), with clean transitions: priorities, interrupt rules, minimum holds, follow-up clips;
 *  - timed gameplay states (wind-up, strike, recover…) are *synced*: the phase is scrubbed by the state's
 *    own timer, so authored anticipation/impact frames always line up with the real hit;
 *  - locomotion clips are scaled by the enemy's measured ground speed (authored `speed`), so planted feet
 *    do not slide; walk ↔ run keep their cycle phase;
 *  - frame events (`step`, `hit`, `whoosh`, custom) fire once per frame entered and reach the level;
 *  - per-frame anchored boxes and points (weapon tip, muzzle, hand, head) are available in world space;
 *  - atlases are loaded lazily per level (only characters bound to enemies that level spawns), decoded
 *    before play, shared across runs and evicted under a texture budget.
 *
 * Nothing here draws a character unless its manifest status is `approved` (or a review session explicitly
 * allows `review`). Until then every enemy keeps its existing renderer — this file adds no puppet art.
 */
(()=>{'use strict';
if(window.PirateEnemyAnim)return;
const ROOT='adventure/levels/assets/enemies/animated/';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const BUDGET=48e6;           // decoded bytes kept warm across levels
const SCHEMA=2;
let CATALOG=ROOT+'catalog.json';

/* Gameplay state → clip (+ phase). Characters may override any entry in manifest.states.
 * sync: the phase is scrubbed by the enemy's state timer (dur = the state's duration in the AI). */
const STATE_CLIPS={
 windup:{clip:'attack',phase:'windup',sync:true},
 strike:{clip:'attack',phase:'strike',sync:true},
 recover:{clip:'attack',phase:'recover',sync:true},
 lunge:{clip:'attack',phase:'strike',sync:true},
 slamWind:{clip:'attack',phase:'windup',sync:true},
 slam:{clip:'attack',phase:'strike',sync:true},
 draw:{clip:'aim',sync:true},aim:{clip:'aim',sync:true},
 release:{clip:'fire',sync:true},fire:{clip:'fire',sync:true},
 reload:{clip:'reload',sync:true},throw:{clip:'throw',sync:true},
 stun:{clip:'stun'}
};
// Clip priorities: higher interrupts lower at any frame; equal/lower waits for `interrupt` frames or the end.
const PRIORITY={death:100,knockback:80,hurt:70,land:40,jump:35,fall:35,attack:30,aim:30,fire:30,reload:30,throw:30,stun:30,run:10,walk:10,idle:0};

/* ------------------------------------------------------------------ manifests */
function validate(m){
 const errs=[];
 if(!m||m.schema!==SCHEMA)errs.push('schema must be '+SCHEMA);
 if(!m?.id)errs.push('missing id');
 if(!Array.isArray(m?.pages)||!m.pages.length)errs.push('no atlas pages');
 if(!(m?.scale>0))errs.push('scale (world units per art pixel) must be > 0');
 if(!Array.isArray(m?.anchor)||m.anchor.length!==2)errs.push('anchor [x,y] required');
 for(const [name,c] of Object.entries(m?.clips||{})){
  if(!Array.isArray(c.frames)||!c.frames.length){errs.push(name+': no frames');continue}
  if(!(c.fps>0))errs.push(name+': fps must be > 0');
  c.frames.forEach((f,i)=>{if(!Array.isArray(f.rect)||f.rect.length!==4||!(f.page>=0&&f.page<(m.pages?.length||0)))errs.push(name+'['+i+']: bad rect/page')});
  for(const [ph,[a,b]] of Object.entries(c.phases||{}))if(!(a>=0&&b>=a&&b<c.frames.length))errs.push(name+': bad phase '+ph);
 }
 if(!m?.clips?.idle)errs.push('idle clip required');
 return errs;
}
const catalogs=new Map();   // url -> Promise<catalog>
async function catalog(url=CATALOG){
 if(!catalogs.has(url))catalogs.set(url,fetch(url).then(r=>r.ok?r.json():{characters:[]}).catch(()=>({characters:[]})));
 return catalogs.get(url);
}
const chars=new Map();      // id -> {manifest, pages:[canvas|img], white:[], bytes, users:Set, lastUse}
let review=false;           // set by review tools only; lets `review` status render
function allowed(status,preview){return status==='approved'||((review||preview)&&status==='review')}
/* A Draft build's catalog may set `preview: true` so `review` characters render for the owner's in-game judgement.
 * ?enemyPreview=0 or localStorage 'ps-enemy-preview' = '0' shows the previous enemies for comparison. */
function previewOn(cat){if(!cat?.preview)return false;try{return new URLSearchParams(location.search).get('enemyPreview')!=='0'&&localStorage.getItem('ps-enemy-preview')!=='0'}catch{return true}}

function loadImage(src){return new Promise((ok,fail)=>{const im=new Image();im.decoding='async';im.onload=()=>{(im.decode?im.decode().catch(()=>{}):Promise.resolve()).then(()=>ok(im))};im.onerror=()=>fail(Error('atlas page '+src));im.src=src})}
async function loadCharacter(entry,base,preview=false){
 if(chars.has(entry.id))return chars.get(entry.id);
 const url=base+entry.manifest,dir=url.slice(0,url.lastIndexOf('/')+1);
 const m=await fetch(url).then(r=>{if(!r.ok)throw Error('manifest HTTP '+r.status);return r.json()});
 if(!allowed(m.status,preview))return null;   // art_pending / review characters never reach players (outside a preview build)
 const errs=validate(m);if(errs.length)throw Error(entry.id+': '+errs.join('; '));
 const pages=await Promise.all(m.pages.map(p=>loadImage(dir+p)));
 // every frame gets its own small canvas: drawing sub-rects of a large atlas page each frame is slow on some
 // canvases (measured in Level 4: 15.7 ms median frame cost from the pages; see test-level-04-systems)
 for(const c of Object.values(m.clips))for(const f of c.frames){const [x,y,w,h]=f.rect,cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(pages[f.page],x,y,w,h,0,0,w,h);f.cv=cv}
 let bytes=0;for(const c of Object.values(m.clips))for(const f of c.frames)bytes+=f.rect[2]*f.rect[3]*4;
 const ch={id:entry.id,manifest:m,pages:[],white:[],bytes,users:new Set(),lastUse:0};   // pages are dropped once cut into frames; bytes = the frame canvases
 chars.set(entry.id,ch);return ch;   // evicted only after prepare has marked this level's users
}
function evict(){
 let total=0;for(const c of chars.values())total+=c.bytes*(c.white.filter(Boolean).length?2:1);
 if(total<=BUDGET)return;
 for(const c of [...chars.values()].filter(c=>!c.users.size).sort((a,b)=>a.lastUse-b.lastUse)){if(total<=BUDGET)break;total-=c.bytes*(c.white.filter(Boolean).length?2:1);chars.delete(c.id)}
}
function whiteFrame(f){if(f.white)return f.white;const src=f.cv,cv=document.createElement('canvas');cv.width=src.width;cv.height=src.height;
 const x=cv.getContext('2d');x.drawImage(src,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,cv.width,cv.height);return f.white=cv}
function bindingFor(cat,levelId,type){
 return (cat.characters||[]).find(c=>(c.binds||[]).some(b=>b.type===type&&(b.level==='*'||b.level===levelId||(Array.isArray(b.levels)&&b.levels.includes(levelId)))));
}

/* ------------------------------------------------------------------ controller */
class Controller{
 constructor(ch,e){this.ch=ch;this.m=ch.manifest;this.clip=null;this.name='';this.t=0;this.frame=0;this.hold=0;this.fired=-1;this.lastX=e.x;this.speed=0;this.airborne=false;this.events=[]}
 clipOf(name){return this.m.clips[name]||null}
 /* choose the clip the enemy *should* show this frame */
 want(e,dt){
  const st=this.m.states?.[e.state]||STATE_CLIPS[e.state];
  if(e.dead)return{name:'death'};
  if(e.spawnT>0)return{name:this.clipOf('fall')?'fall':'idle'};
  if(this.wasSpawning&&!e.spawnT&&this.clipOf('land')){this.wasSpawning=false;return{name:'land',once:true}}
  if(e.hurtT>0)return{name:Math.abs(e.kb||0)>(this.m.knockbackAt||220)&&this.clipOf('knockback')?'knockback':'hurt'};
  const air=e.airborne||(e.vy!==undefined&&Math.abs(e.vy)>1&&e.ground===false);
  if(air)return{name:(e.vy||0)<0&&this.clipOf('jump')?'jump':'fall'};
  if(this.airborne&&!air&&this.clipOf('land'))return{name:'land',once:true};
  if(st&&this.clipOf(st.clip))return{name:st.clip,phase:st.phase,sync:st.sync,state:e.state};
  // ranged characters work the lock while the AI waits out its cooldown after a shot
  if(this.m.class==='ranged'&&e.state==='idle'&&e.alert&&(e.cool||0)>1.1&&this.clipOf('reload'))return{name:'reload'};
  // a knock-back slide is not walking: only real locomotion (AI walk or own movement without push) moves the legs
  if(e.anim==='walk'||this.speed>4&&Math.abs(e.kb||0)<40){const run=this.clipOf('run')&&this.speed>(this.m.runAt||(this.clipOf('walk')?.speed||60)*1.35);return{name:run?'run':(this.clipOf('walk')?'walk':'idle')}}
  return{name:'idle'};
 }
 update(e,dt,run){
  this.speed=dt>0?Math.abs(e.x-this.lastX)/dt:0;this.lastX=e.x;
  if(e.spawnT>0)this.wasSpawning=true;
  let w=this.want(e,dt);const air=w.name==='jump'||w.name==='fall';
  if(w.name==='land'&&this.name==='land'&&!this.done)w=null;   // let the landing finish
  if(w&&w.name!==this.name||w&&w.phase!==this.phase){
   const cur=PRIORITY[this.name]??0,next=PRIORITY[w.name]??0,c=this.clip;
   const canSwitch=!c||next>cur||this.done||this.hold<=0&&(c.interrupt===undefined||c.interrupt.includes(this.frame)||w.name===this.name);
   if(canSwitch)this.set(w,e);
  }else if(w)this.sync=w.sync;
  this.airborne=air;
  this.advance(e,dt,run);
 }
 set(w,e){
  const prev=this.name,c=this.clipOf(w.name);if(!c)return;
  // walk ↔ run keep the stride phase so feet stay planted through the change
  const keep=(prev==='walk'&&w.name==='run'||prev==='run'&&w.name==='walk')&&this.clip?this.t/this.len():0;
  this.name=w.name;this.clip=c;this.phase=w.phase;this.sync=w.sync;this.stateKey=w.state;this.done=false;this.hold=c.hold||0;
  this.t=keep*this.len();this.fired=-1;this.syncDur=0;
 }
 len(){return this.clip.frames.length/this.clip.fps}
 range(){const ph=this.phase&&this.clip.phases?.[this.phase];return ph?ph:[0,this.clip.frames.length-1]}
 advance(e,dt,run){
  const c=this.clip;if(!c)return;const [a,b]=this.range();let f;
  this.hold=Math.max(0,this.hold-dt);
  if(this.sync&&e.timer!==undefined){
   // scrub the phase by the gameplay timer: the AI owns timing, the art follows it
   if(!this.syncDur||e.timer>this.syncLast+1e-6)this.syncDur=Math.max(e.timer,1e-3);
   this.syncLast=e.timer;const k=clamp(1-e.timer/this.syncDur,0,.9999);f=a+Math.floor(k*(b-a+1));
  }else{
   let rate=1;
   if((this.name==='walk'||this.name==='run')&&c.speed>0)rate=clamp(this.speed/c.speed,.55,1.7);
   this.t+=dt*rate;const n=b-a+1,i=Math.floor(this.t*c.fps);
   if(c.loop)f=a+(((i%n)+n)%n);else{f=a+Math.min(n-1,i);if(i>=n){this.done=true;if(c.next&&this.m.clips[c.next]&&!e.dead)this.set({name:c.next},e)}}
  }
  if(f!==this.frame||this.fired<0){
   // fire events of every frame entered since the last update (no skips at low frame rates)
   const from=this.fired<0?f:this.frame,steps=this.fired<0?0:((f-from+(c.frames.length))%c.frames.length);
   for(let k=this.fired<0?0:1;k<=steps;k++){const idx=(from+k)%c.frames.length,ev=c.frames[idx]?.events;if(ev)for(const name of ev)emit(run,e,name,this)}
   this.frame=f;this.fired=f;
  }
 }
 current(){return this.clip?.frames[this.frame]||this.m.clips.idle.frames[0]}
}
function emit(run,e,name,ctl){
 ctl.events.push(name);if(ctl.events.length>16)ctl.events.shift();
 if(run.def?.enemyAnimEvent?.(run,e,name)===true)return;
 if(name==='step')run.audio?.at?.('step',e.cx,{vol:.18,rate:.9+Math.random()*.15,gap:.06});
 else if(name==='whoosh')run.audio?.at?.('swingEnemy',e.cx,{vol:.5,gap:.1});
 else if(name==='land'&&run.fx?.on)run.fx.dust(e.cx,e.floor,6);
}

/* ------------------------------------------------------------------ public API */
function controllerFor(run,e){
 if(e.__anim!==undefined)return e.__anim;
 const lv=run.enemyAnim;const id=lv?.byType?.get(e.type);const ch=id&&chars.get(id);
 e.__anim=ch?new Controller(ch,e):null;if(ch){ch.users.add(run);ch.lastUse=performance.now();if(!run.def?.enemyAnimationVisualOnly)applyGameplay(ch.manifest,e)}return e.__anim;
}
/* A character drawn at hero height needs a matching body: the manifest's gameplay block resizes the hurtbox
 * (feet and centre kept) and the melee reach, so hits land where the artwork is. Only animated characters. */
function applyGameplay(m,e){
 const g=m.gameplay;if(!g||e.__sized)return;e.__sized=true;
 if(Array.isArray(g.hurtbox)){const cx=e.cx;e.w=g.hurtbox[0];e.h=g.hurtbox[1];e.x=cx-e.w/2;e.y=e.floor-e.h;e.home=e.x;if(e.range)e.range=[...e.range]}
 if(g.reach>0)e.reach=g.reach;
 if(g.timing)e.timing=g.timing;   // e.g. a heavy fighter's longer wind-up: {windup,strike,hit,recover} in seconds / fraction
}
function adopt(run){for(const e of run.enemies||[])controllerFor(run,e)}
function frameWorld(e,ctl){
 const m=ctl.m,f=ctl.current(),s=m.scale,face=e.dir<0?-1:1;
 return{f,s,face,toWorld:(px,py)=>[e.cx+(px-m.anchor[0])*s*face,e.floor+(py-m.anchor[1])*s]};
}
/* Draw the enemy's body. Returns null when this enemy has no approved animated character (the caller keeps
 * its existing renderer); otherwise an object compatible with PirateEnemyRig.draw's return value. */
function draw(run,c,e){
 const ctl=controllerFor(run,e);if(!ctl)return null;
 const now=run.time||0,dt=ctl.lastT===undefined?0:clamp(now-ctl.lastT,0,.1);ctl.lastT=now;
 if(dt>0||ctl.fired<0)ctl.update(e,dt,run);
 const {f,s,face,toWorld}=frameWorld(e,ctl),m=ctl.m,ch=ctl.ch,[sx,sy,w,h]=f.rect,[ox,oy]=f.offset||[0,0];
 const alpha=(e.dead?clamp(1-((e.deadT||0)-(m.deathHold??1.1))/.5,0,1):1)*(e.alpha??1);if(alpha<=0)return{top:e.floor-e.h,hand:[e.cx,e.floor-e.h*.5],handB:[e.cx,e.floor-e.h*.5],tip:[e.cx,e.floor-e.h*.5],muzzle:[e.cx,e.floor-e.h*.5]};
 c.save();c.translate(e.cx,e.floor);c.scale(face*s,s);c.globalAlpha*=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='low';   // art is baked at ~1:1, bilinear is enough
 const dx=ox-m.anchor[0],dy=oy-m.anchor[1];if(f.cv)c.drawImage(f.cv,dx,dy,w,h);else c.drawImage(ch.pages[f.page],sx,sy,w,h,dx,dy,w,h);
 if(e.flash>0){c.globalAlpha*=Math.min(1,e.flash*7);c.drawImage(whiteFrame(f),dx,dy,w,h)}
 c.restore();
 if(!e.dead)weaponFx(run,c,e,ctl,toWorld);
 const pt=n=>f.points?.[n]?toWorld(...f.points[n]):null,mid=[e.cx,e.floor-e.h*.55];
 const top=f.points?.head?toWorld(...f.points.head)[1]:e.floor+(oy-m.anchor[1])*s;
 const hand=pt('hand')||mid,tip=pt('tip')||pt('muzzle')||hand;
 return{top,hand,handB:pt('handB')||hand,tip,muzzle:pt('muzzle')||tip,clip:ctl.name,frame:ctl.frame,animated:true};
}
/* Combat readability, drawn from the authored weapon points (never from guessed positions):
 * a glint on the blade at the top of the wind-up, and a fading arc along the tip's real path through the
 * strike and the first frames of the recovery. Effects only — the character art is untouched. */
function weaponFx(run,c,e,ctl,toWorld){
 if(ctl.name!=='attack'||ctl.m.class==='ranged'||!run.effectsOn?.())return;
 const cl=ctl.clip,ph=cl.phases||{},[w0,w1]=ph.windup||[0,0],[s0,s1]=ph.strike||[0,-1],i=ctl.frame,tip=k=>cl.frames[k]?.points?.tip;
 if(ctl.phase==='windup'&&i>=w1-1&&tip(i)){const [x,y]=toWorld(...tip(i)),r=10+6*Math.sin((run.time||0)*40);
  c.save();c.globalCompositeOperation='lighter';run.fx.glow(c,x,y,22,'rgba(255,240,200,',.9);c.strokeStyle='rgba(255,255,240,.9)';c.lineWidth=2;
  c.beginPath();c.moveTo(x-r,y);c.lineTo(x+r,y);c.moveTo(x,y-r);c.lineTo(x,y+r);c.stroke();c.restore()}
 if(i<s0||i>s1+2)return;
 const pts=[];for(let k=Math.max(s0-1,i-5);k<=i;k++){const t=tip(k),h=cl.frames[k]?.points?.hand;if(t&&h)pts.push([toWorld(...t),toWorld(...h)])}
 if(pts.length<2)return;
 const heavy=ctl.m.class==='heavy-melee',fade=i>s1?1-(i-s1)/3:1;
 c.save();c.globalCompositeOperation='lighter';c.beginPath();
 pts.forEach(([t],k)=>k?c.lineTo(t[0],t[1]):c.moveTo(t[0],t[1]));
 for(let k=pts.length-1;k>=0;k--){const [t,h]=pts[k],u=.42+.5*(1-k/(pts.length-1));c.lineTo(t[0]+(h[0]-t[0])*u,t[1]+(h[1]-t[1])*u)}
 c.closePath();const [a]=pts[0],[b]=pts[pts.length-1],g=c.createLinearGradient(a[0],a[1],b[0],b[1]);
 g.addColorStop(0,heavy?'rgba(255,150,70,0)':'rgba(170,215,255,0)');g.addColorStop(1,heavy?'rgba(255,205,140,'+(.75*fade)+')':'rgba(235,248,255,'+(.8*fade)+')');
 c.fillStyle=g;c.fill();c.restore();
}
/* Hit / whiff feedback of an animated melee strike (called by the engine at the hit test). */
function impact(run,e,hit){
 const ctl=e.__anim;if(!ctl)return;const heavy=ctl.m.class==='heavy-melee',f=ctl.current(),p=run.p;
 const tip=f.points?.tip?frameWorld(e,ctl).toWorld(...f.points.tip):[e.cx+e.dir*(e.reach||62),e.y+e.h*.45];
 if(hit){const x=clamp(tip[0],p.x,p.x+p.w),y=clamp(tip[1],p.y+10,p.y+p.h-10);
  run.fx.spark(x,y,heavy?'#ffb35c':'#fff1c4',heavy?18:12);run.fx.ring?.(x,y,heavy?'#ffcf8a':'#ffffff',heavy?12:8,heavy?.32:.22);
  run.camera.shake=Math.max(run.camera.shake||0,heavy?9:4);if(!run.def?.enemyAnimationVisualOnly)run.hitStop?.(heavy?.09:.05);
  if(heavy){run.fx.dust(p.x+p.w/2,p.y+p.h,8,e.dir);run.fx.dust(e.cx+e.dir*20,e.floor,6,e.dir)}}
 else if(heavy)run.fx.dust(tip[0],e.floor,5,e.dir);   // a heavy whiff still lands on the boards
}
/* Gunner shots: impact sparks on a hit, a puff where a miss lands. */
function shotEnd(run,q,kind){
 if(q.ended)return;q.ended=true;if(!q.src?.__anim)return;
 if(kind==='hit'){run.fx.spark(q.x,q.y,'#ffcf7a',12);run.fx.ring?.(q.x,q.y,'#ffd9a0',8,.2)}
 else if(kind==='miss'){run.fx.spark(q.x,q.y,'#c9c2b4',5);run.fx.dust(q.x,q.y+4,4)}
}
function point(run,e,name){const ctl=controllerFor(run,e);if(!ctl)return null;const f=ctl.current();return f.points?.[name]?frameWorld(e,ctl).toWorld(...f.points[name]):null}
/* World-space authored boxes for the current frame: {hurt:[...], hit:[...]} (empty when not authored). */
function boxes(run,e){
 if(run.def?.enemyAnimationVisualOnly)return null;   // art-only integration retains this level's authored gameplay boxes
 const ctl=controllerFor(run,e);if(!ctl)return null;const {f,s,face}=frameWorld(e,ctl),m=ctl.m,out={};
 for(const [k,list] of Object.entries(f.boxes||{}))out[k]=list.map(([x,y,w,h])=>{const X=e.cx+(x-m.anchor[0])*s*face,Y=e.floor+(y-m.anchor[1])*s;return{x:face>0?X:X-w*s,y:Y,w:w*s,h:h*s}});
 return out;
}
/* Load the approved characters this level can spawn. Called by the engine after def.prepare. */
async function prepare(run,{catalogUrl=CATALOG}={}){
 const cat=await catalog(catalogUrl),base=catalogUrl.replace(/[^/]*$/,'');
 const types=new Set((run.cfg?.enemies||[]).map(e=>e.type).concat('boss')),byType=new Map(),loaded=[],skipped=[];   // 'boss': the level's boss, drawn through drawBoss
 for(const type of types){
  const entry=bindingFor(cat,run.def?.enemyAnimLevel?.[type]??run.def?.id,type);if(!entry)continue;   // Endless borrows each type's binding from its home level
  try{const ch=await loadCharacter(entry,base,previewOn(cat));if(ch){byType.set(type,ch.id);ch.users.add(run);loaded.push(ch.id)}else skipped.push(entry.id)}
  catch(err){run.warn?.('enemy animation '+entry.id+': '+err.message);skipped.push(entry.id)}
 }
 evict();   // after the users are set: a level never loses a character it just loaded
 run.enemyAnim={byType,loaded,skipped};return run.enemyAnim;
}
function release(run){for(const ch of chars.values())ch.users.delete(run);evict()}
function stats(){let bytes=0;for(const c of chars.values())bytes+=c.bytes;return{characters:[...chars.keys()],bytes}}

/* ------------------------------------------------------------------ bosses
 * Bosses are their own classes (not run.enemies): state name in b.state, a count-down timer in b.t, x = centre.
 * drawBoss builds a persistent view of the boss in the shape the controller expects and draws the animated body.
 * It returns true when it drew; the boss's draw() then runs its old body code against NULL_CTX, so every position
 * it computes for gameplay (orb, hand, hook origin…) and all telegraphs outside the body stay exactly as before. */
function bossView(b,o){
 const v=b.__animView||(b.__animView={type:'boss',lastAir:0});const air=o.air||0;
 v.x=b.x;v.cx=b.x+(b.shake||0)+(b.jiggle||0);v.floor=o.floor-air;v.dir=b.dir<0?-1:1;v.h=o.h||200;v.w=80;
 v.state=b.state;v.timer=b.t;v.flash=b.flash||0;v.kb=0;v.spawnT=0;v.hurtT=0;v.alert=true;v.cool=b.cool||0;
 v.dead=o.dead??(b.state==='dying'||b.state==='dead');v.deadT=b.deadT||0;
 v.airborne=air>4;v.vy=air>4?(air>v.lastAir?-1:1)*5:0;v.ground=air<=4;v.lastAir=air;
 v.anim=b.walking||b.anim==='walk'||b.state==='walk'?'walk':'';v.alpha=o.alpha??1;
 return v;
}
function drawBoss(run,c,b,o={}){
 if(!run.enemyAnim?.byType?.get('boss'))return false;
 const v=bossView(b,o);if(v.alpha<=0)return true;
 return !!draw(run,c,v);
}
const NULL_CTX=(()=>{const f=new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>0:f,apply:()=>f,set:()=>true});return f})();
window.PirateEnemyAnim={prepare,release,adopt,draw,drawBoss,NULL_CTX,boxes,impact,shotEnd,point,validate,stats,Controller,STATE_CLIPS,PRIORITY,
 setReview(on){review=!!on},
 // test/review helpers: point the runtime at a different catalog and clear caches
 reset(url){chars.clear();catalogs.clear();review=false;CATALOG=url||ROOT+'catalog.json'},
 controller:(run,e)=>controllerFor(run,e)};
})();

