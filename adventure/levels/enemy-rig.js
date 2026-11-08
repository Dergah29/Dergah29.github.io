/* Pirate Strike — painted cut-out enemy rigs (shared by the engine levels).
 * Casts are painted part atlases from tools/enemy_cast.py (assets/enemies/<cast>.png + .json): torso, head,
 * upper arm, forearm + hand, thigh, shin + boot and weapons, each with its pivot. This file poses them with real
 * joints every frame:
 *  - walking: the feet are placed by 2-bone IK and driven by the distance the enemy actually moved, so a planted
 *    foot stays on the deck (no sliding), the hips bob and the arms swing against the legs;
 *  - idle breathing, a quick turn when the facing flips, wind-up → swing → recover for melee, aim → recoil →
 *    reload for guns, hit recoil with knock-back lean, stun wobble, a physical fall on death (knees buckle, the
 *    body tips over around the feet) and the drop-in of encounter waves.
 * Gameplay (hitboxes, timings, damage) stays in the level code: this is drawing only, and it returns the world
 * positions of the hand / weapon tip / muzzle so levels can place telegraphs and effects on the weapon.
 * Parts are pre-painted bitmaps (one atlas per cast + a white copy for hit flashes), so a frame costs about a
 * dozen drawImage calls per enemy and allocates nothing. */
(()=>{'use strict';
if(window.PirateEnemyRig)return;
const TAU=Math.PI*2,clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t;
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,out=t=>1-(1-t)*(1-t);
const casts=new Map();   // name -> {img, white, meta} (shared across runs; tiny)

function whiteOf(img){const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);return c}
function loadImage(src){return new Promise(ok=>{const i=new Image();i.onload=()=>ok(i);i.onerror=()=>ok(null);i.src=src})}
async function load(base,name){
 if(casts.has(name))return casts.get(name);
 const [meta,img]=await Promise.all([fetch(base+name+'.json').then(r=>r.ok?r.json():null).catch(()=>null),loadImage(base+name+'.png')]);
 if(!meta||!img)return null;const cast={img,white:whiteOf(img),meta,name};casts.set(name,cast);return cast}

/* 2-bone IK in rig space (y down, angles measured from "straight down", + = toward the facing side) */
function ik(fx,fy,L1,L2,out){let d=Math.hypot(fx,fy);const max=(L1+L2)*.999;if(d>max){fx*=max/d;fy*=max/d;d=max}d=Math.max(d,Math.abs(L1-L2)+.01);
 const al=Math.atan2(fx,fy),be=Math.acos(clamp((L1*L1+d*d-L2*L2)/(2*L1*d),-1,1));const a1=al+be;const kx=Math.sin(a1)*L1,ky=Math.cos(a1)*L1;out.a1=a1;out.a2=Math.atan2(fx-kx,fy-ky);return out}

const P={lean:0,hip:0,rot:0,rx:0,ry:0,head:0,legs:[{a1:0,a2:0},{a1:0,a2:0}],arms:[{a1:0,a2:0},{a1:0,a2:0}],wpn:0,wpnB:0,sx:1,squash:1};
/* state families: what the level's enemy state means for the body */
const FAM={windup:'wind',cutWind:'wind',cut2Wind:'wind',chopWind:'wind',sweepWind:'wind',slashWind:'wind',riposteWind:'wind',bashWind:'wind',lungeWind:'wind',comboWind:'wind',
 strike:'swing',cut1:'swing',cut2:'swing',chop:'swing',sweep:'swing',slash:'swing',riposte:'swing',bash:'swing',lunge:'thrust',thrust:'thrust',bayonet:'thrust',
 draw:'aim',aim:'aim',release:'fire',kick:'fire',fire:'fire',reload:'reload',recover:'recover',stun:'stun',stuck:'stun',skid:'stun',guard:'guard',brace:'guard',
 light:'light',throw:'throwing',toss:'throwing',swat:'swing',swatWind:'wind',grasp:'wind',grab:'swing',slam:'slam',slamWind:'slamWind',charge:'thrust',chargeWind:'wind'};

function pose(run,e,R,ch){
 const b=ch.bones,L1=b.thigh,L2=b.shin,hip0=b.hip,t=run.time,st=R.stateOf?R.stateOf(e):e.state,fam=(R.fam&&R.fam[st])||FAM[st]||null;
 // remember when the state started (for a 0..1 progress through it)
 if(e._rs!==st){e._rs=st;e._rT=Math.max(.05,e.timer||.3);e._rt=t}
 const k=clamp(1-(e.timer||0)/e._rT,0,1);
 const p=P;p.pull=-1;p.lean=.04;p.hip=hip0;p.rot=0;p.rx=0;p.ry=0;p.head=0;p.wpn=R.grip||0;p.wpnB=0;p.squash=1;
 const lg=p.legs,am=p.arms;
 // walking: distance-driven gait (feet planted while in contact)
 const dx=(e.x-(e._rx??e.x))/(R.scale||1);e._rx=e.x;   // rig-space distance, so a scaled body plants its feet too
 const moving=e.anim==='walk'&&!e.dead&&!(e.hurtT>0)&&!(e.spawnT>0);
 if(moving)e._dist=(e._dist||0)+Math.abs(dx);
 const step=R.step||L1*1.25,cycle=step*2;
 const fwd=Math.sign(dx)===e.dir||Math.abs(dx)<.01?1:-1;     // walking backwards (keeping distance) plays the cycle in reverse
 e._gait=lerp(e._gait||0,moving&&Math.abs(dx)>.02?1:0,.25);
 const g=e._gait;
 const ph=((e._dist||0)/cycle*fwd)%1;
 const hipW=Math.sqrt(Math.max(1,(L1+L2)*(L1+L2)*.985*.985-(step*.5)*(step*.5)));
 for(let i=0;i<2;i++){const q=((ph+(i?.5:0))%1+1)%1;let fx,fy;
  if(q<.5){fx=lerp(step*.5,-step*.5,q*2);fy=0}else{const s=(q-.5)*2;fx=lerp(-step*.5,step*.5,ease(s));fy=-Math.sin(s*Math.PI)*L2*.42}
  lg[i].fx=fx*g+(i?-1.6:1.6)*(1-g);lg[i].fy=fy*g}
 const bob=g*Math.abs(Math.cos(ph*TAU))*1.6;
 p.hip=lerp(hip0*.985,hipW,g)-bob;
 const swing=g*Math.sin(ph*TAU);
 const aw=R.armSwing??.5;am[0].a1=(R.armRest??.18)-swing*aw;am[0].a2=.35;am[1].a1=(R.armRest??.18)+swing*aw;am[1].a2=.42;   // [0]=back arm, [1]=front arm
 p.lean=(R.baseLean??.04)+g*.1;
 if(!moving){const br=Math.sin(t*2.3+(e.home||0)*.01);p.hip-=(1+br)*.35;am[0].a1+=br*.03;am[1].a1-=br*.03;p.head=br*.03}
 // actions
 const W=R.weapon||'melee';
 switch(fam){
  case'wind':{const q=ease(k);am[1].a1=lerp(am[1].a1,R.windArm??-2.5,q);am[1].a2=lerp(.4,R.windFore??-.5,q);p.lean=lerp(p.lean,-.16,q);p.wpn+=lerp(0,-.4,q);am[0].a1=lerp(am[0].a1,.7,q);lg[1].fx+=4*q;lg[0].fx-=3*q;p.hip-=3*q;break}
  case'swing':{const q=out(Math.min(1,k*1.8));am[1].a1=lerp(R.windArm??-2.5,R.swingArm??1.35,q);am[1].a2=lerp(R.windFore??-.5,.05,q);p.lean=lerp(-.16,.26,q);am[0].a1=lerp(.7,-.5,q);lg[1].fx+=9*q;lg[0].fx-=6*q;p.hip-=4*q;break}
  case'thrust':{const q=out(Math.min(1,k*2.2));am[1].a1=lerp(.6,1.55,q);am[1].a2=lerp(-.6,0,q);am[0].a1=lerp(.4,1.2,q);am[0].a2=-.2;p.lean=lerp(0,.4,q);lg[1].fx+=12*q;lg[0].fx-=9*q;p.hip-=5*q;break}
  case'recover':{const q=1-k;am[1].a1=lerp(am[1].a1,R.swingArm??1.35,q*.7);p.lean=lerp(p.lean,.2,q*.6);p.hip-=2*q;break}
  case'aim':case'fire':case'reload':{
   const sh=R.shoulderH||hip0+b.torsoH*.9;let aim=Math.PI/2;
   if(e.aim){const ax=(e.aim.x-e.cx)*e.dir,ay=e.aim.y-(e.floor-sh);aim=clamp(Math.atan2(ax,ay),Math.PI/2-.5,Math.PI/2+.45)}
   if(fam==='aim'){const q=out(Math.min(1,k*3));am[1].a1=lerp(am[1].a1,aim,q);am[1].a2=lerp(.3,0,q);if(R.twoHand){am[0].a1=lerp(am[0].a1,aim-.15,q);am[0].a2=-.5}else am[0].a1=lerp(am[0].a1,-.1,q);p.lean=-.02;lg[1].fx+=5;lg[0].fx-=4;p.hip-=2.4}
   else if(fam==='fire'){const kick=Math.max(0,1-k*2.5);am[1].a1=aim+.55*kick;am[1].a2=-.25*kick;if(R.twoHand){am[0].a1=aim-.15+.4*kick;am[0].a2=-.5}p.lean=-.12*kick;p.rx=-4*kick;lg[1].fx+=5;lg[0].fx-=4;p.hip-=2.4}
   else{const w=Math.sin(t*9);am[1].a1=.9;am[1].a2=-1.1+w*.12;am[0].a1=.5+w*.35;am[0].a2=-1.5-w*.3;p.lean=.14;p.head=.18;if(R.twoHand){am[1].a1=.5;am[1].a2=-.4;}}
   break}
  // off-hand pistol (bosses with a sword in the main hand): the back arm aims at the target, kicks on the shot, the sword hand stays low
  case'aimB':case'fireB':{const sh=R.shoulderH||hip0+b.torsoH*.9;let aim=Math.PI/2;if(e.aim){const ax=(e.aim.x-e.cx)*e.dir,ay=e.aim.y-(e.floor-sh);aim=clamp(Math.atan2(ax,ay),Math.PI/2-.5,Math.PI/2+.45)}
   const q=fam==='aimB'?out(Math.min(1,k*3)):1,kick=fam==='fireB'?Math.max(0,1-k*2.5):0;am[0].a1=lerp(am[0].a1,aim,q)+.55*kick;am[0].a2=-.25*kick;am[1].a1=.55;am[1].a2=.25;p.lean=-.04-.1*kick;p.rx=-4*kick;lg[1].fx+=5;lg[0].fx-=4;p.hip-=2.4;break}
  case'signal':{const q=ease(Math.min(1,k*2));am[0].a1=lerp(am[0].a1,-3.0,q);am[0].a2=-.1*q;am[1].a1=lerp(am[1].a1,.5,q);p.lean=-.12*q;p.head=-.25*q;break}
  // yields: drops to one knee, head bowed, arms hanging
  case'kneel':{const q=ease(clamp((e.timer||0)/.6,0,1));p.hip=lerp(hip0,hip0*.56,q);lg[1].fx=lerp(lg[1].fx,L1*.75,q);lg[1].fy=0;lg[0].fx=lerp(lg[0].fx,-L1*1.15,q);lg[0].fy=0;p.lean=.34*q;p.head=.42*q;am[0].a1=.25;am[0].a2=.2;am[1].a1=.6*q;am[1].a2=.1;break}
  case'guard':{am[0].a1=1.3;am[0].a2=-.9;am[1].a1=.6;am[1].a2=-.9;p.lean=-.04;lg[1].fx+=4;lg[0].fx-=4;p.hip-=3;break}
  case'stun':{const w=Math.sin(t*6);p.lean=.32+w*.06;p.head=.4+w*.12;am[0].a1=.2+w*.1;am[1].a1=.25-w*.1;am[0].a2=am[1].a2=.2;p.hip-=4;break}
  case'light':{const q=ease(k);am[1].a1=lerp(am[1].a1,.9,q);am[1].a2=-1.9*q;am[0].a1=lerp(am[0].a1,1.1,q);am[0].a2=-1.3*q;p.lean=lerp(p.lean,-.06,q);p.head=.15*q;break}   // bomb raised to the face, the match brought to the fuse
  case'throwing':{const q=out(Math.min(1,k*2));am[1].a1=lerp(-2.6,1.4,q);am[1].a2=lerp(-.4,0,q);p.lean=lerp(-.2,.24,q);lg[1].fx+=6*q;break}
  case'crouchWind':{const q=ease(k);p.hip-=9*q;p.lean=.45*q;am[1].a1=lerp(am[1].a1,-.6,q);am[1].a2=1.2*q;am[0].a1=lerp(am[0].a1,-1.0,q);am[0].a2=1.0*q;lg[1].fx+=7*q;lg[0].fx-=8*q;break}
  case'dash':{p.hip-=7;p.lean=.62;am[1].a1=1.5;am[1].a2=0;am[0].a1=-1.2;am[0].a2=.6;lg[1].fx+=13;lg[0].fx-=12;lg[0].fy=-4;break}
  case'skidding':{p.hip-=6;p.lean=-.28;am[1].a1=-.8;am[1].a2=.5;am[0].a1=-1.6;am[0].a2=.5;lg[1].fx+=14;lg[0].fx-=4;p.head=-.15;break}
  case'hop':{const q=Math.sin(k*Math.PI);p.ry=-q*46;lg[1].fx=6;lg[1].fy=-9*q;lg[0].fx=-5;lg[0].fy=-6*q;p.lean=-.2;am[0].a1=-1.6;am[1].a1=-1.0;break}
  case'bowDraw':case'bowRelease':{const sh=R.shoulderH||hip0+b.torsoH*.9;let aim=Math.PI/2;if(e.aim){const ax=(e.aim.x-e.cx)*e.dir,ay=e.aim.y-(e.floor-sh);aim=clamp(Math.atan2(ax,ay),Math.PI/2-.5,Math.PI/2+.4)}
   am[1].a1=aim;am[1].a2=0;p.lean=-.04;lg[1].fx+=6;lg[0].fx-=5;p.hip-=2;
   if(fam==='bowDraw'){const q=out(k);am[0].a1=lerp(aim,aim+.1,q);am[0].a2=lerp(0,-2.7,q);p.pull=q}else{const q=out(Math.min(1,k*3));am[0].a1=lerp(aim+.1,aim-.5,q);am[0].a2=lerp(-2.7,-.4,q);p.pull=0}break}
  case'shieldUp':{const q=ease(k);am[1].a1=lerp(am[1].a1,1.25,q);am[1].a2=lerp(.3,-.4,q);am[0].a1=lerp(am[0].a1,-.4,q);p.lean=lerp(p.lean,.18,q);lg[1].fx+=6*q;lg[0].fx-=7*q;p.hip-=5*q;break}
  case'lobBack':{const q=ease(k);am[0].a1=lerp(am[0].a1,-2.7,q);am[0].a2=-.3*q;am[1].a1=lerp(am[1].a1,.9,q);p.lean=lerp(p.lean,-.14,q);lg[1].fx+=4*q;break}
  case'throwBack':{const q=out(Math.min(1,k*2.5));am[0].a1=lerp(-2.7,1.5,q);am[0].a2=0;am[1].a1=.6;p.lean=lerp(-.14,.22,q);lg[1].fx+=6*q;break}
  case'reach':{const q=ease(k);am[1].a1=lerp(am[1].a1,1.55,q);am[0].a1=lerp(am[0].a1,1.4,q);am[1].a2=am[0].a2=-.15;p.lean=lerp(p.lean,.05,q);break}
  case'sweepWindLow':{const q=ease(k);am[1].a1=am[0].a1=lerp(am[1].a1,-1.0,q);am[1].a2=am[0].a2=.4*q;p.lean=lerp(p.lean,-.1,q);p.hip-=6*q;lg[1].fx+=6*q;lg[0].fx-=8*q;p.wpn+=.5*q;break}
  case'sweepLow':{const q=out(Math.min(1,k*2));am[1].a1=am[0].a1=lerp(-1.0,1.7,q);am[1].a2=am[0].a2=lerp(.4,.1,q);p.lean=lerp(-.1,.35,q);p.hip-=7;lg[1].fx+=10*q;lg[0].fx-=8;p.wpn+=.5;break}
  case'shieldOpen':{am[1].a1=.15;am[1].a2=.3;am[0].a1=.3;am[0].a2=.4;p.lean=.16;p.head=.2;p.hip-=2;break}
  case'enGarde':{am[1].a1=1.25;am[1].a2=-.25;am[0].a1=-2.1;am[0].a2=.9;p.lean=-.04;lg[1].fx+=7;lg[0].fx-=6;p.hip-=4;p.wpn+=.25;break}
  case'lungeWind':{const q=ease(k);am[1].a1=lerp(1.25,.25,q);am[1].a2=lerp(-.25,-1.3,q);am[0].a1=-2.1;am[0].a2=.9;p.lean=lerp(-.04,-.22,q);lg[1].fx+=7+3*q;lg[0].fx-=6+4*q;p.hip-=4+3*q;break}
  case'planted':{am[1].a1=am[0].a1=1.05;am[1].a2=am[0].a2=.1;p.lean=.5;p.head=.2;p.hip-=6;lg[1].fx+=8;lg[0].fx-=7;break}
  case'slamWind':{const q=ease(k);am[1].a1=am[0].a1=lerp(.2,-2.9,q);am[1].a2=am[0].a2=-.2;p.lean=-.2*q;p.hip-=2*q;break}
  case'slam':{const q=out(Math.min(1,k*2.4));am[1].a1=am[0].a1=lerp(-2.9,1.2,q);am[1].a2=am[0].a2=0;p.lean=lerp(-.2,.5,q);p.hip-=6*q;break}
 }
 if(R.twoHand&&(fam===null||fam==='recover')&&W!=='gun'){am[0].a1=am[1].a1-.1;am[0].a2=am[1].a2-.3}
 // hit recoil (the engine pushes the body back; the rig sells it)
 if(e.hurtT>0&&!e.dead){const q=clamp(e.hurtT/.22,0,1);p.lean=-.38*q;p.head=-.34*q;am[0].a1=-.9*q+am[0].a1*(1-q);am[1].a1=-.6*q+am[1].a1*(1-q);am[1].a2=-.4;p.rx=-5*q;lg[1].fx-=3*q;lg[0].fx+=2*q;p.hip-=2*q}
 else if(e.flash>0&&!e.dead){p.lean-=.12;p.head-=.12;p.rx-=2}   // super-armoured enemies (no hurt state) still flinch on a hit
 // death: knees buckle, then the body tips over backwards around the feet and settles
 if(e.dead){const d=e.deadT||0,bk=clamp(d/.18,0,1),f=clamp((d-.12)/.42,0,1),fe=f*f;p.hip=lerp(hip0,hip0*.62,bk);lg[0].fx=-2;lg[1].fx=5;lg[0].fy=lg[1].fy=0;
  p.rot=-1.42*fe;p.lean=-.2*bk;p.head=-.5*bk;am[0].a1=lerp(.2,-2.2,fe);am[1].a1=lerp(.3,-1.6,fe);am[0].a2=am[1].a2=.2;if(f>=1){p.ry=Math.sin(Math.min(1,(d-.54)*6)*Math.PI)*-3}}
 // drop-in for encounter waves: legs tucked while falling
 if(e.spawnT>0&&R.rise&&R.rise(e)){p.ry=clamp(e.spawnT/.9,0,1)*(p.hip+60);p.lean=.3;am[0].a1=-2.6;am[1].a1=-2.2}
 else if(e.spawnT>0){p.ry=-e.spawnT*420;lg[1].fx=6;lg[1].fy=-8;lg[0].fx=-3;lg[0].fy=-5;p.hip=hip0*.92;am[0].a1=-2.2;am[1].a1=-2.4}
 return p}

function part(c,cast,flash,pt,x,y,rot){const r=pt.rect;c.save();c.translate(x,y);if(rot)c.rotate(rot);c.drawImage(cast.img,r[0],r[1],r[2],r[3],-pt.pivot[0],-pt.pivot[1],r[2],r[3]);
 if(flash>0){c.globalAlpha*=flash;c.drawImage(cast.white,r[0],r[1],r[2],r[3],-pt.pivot[0],-pt.pivot[1],r[2],r[3])}c.restore()}
const tmp={x:0,y:0},UPB={upright:true};
function rotp(x,y,a){const c=Math.cos(a),s=Math.sin(a);tmp.x=x*c-y*s;tmp.y=x*s+y*c;return tmp}
const OUT={hand:[0,0],tip:[0,0],muzzle:[0,0],top:0,handB:[0,0],neck:[0,0],feet:[[0,0],[0,0]]};

/* draw one enemy. R: per-type look {cast, char, scale, weapon:'melee'|'gun', twoHand, grip, step, windArm, swingArm, offhand}
 * returns OUT (world coords of the weapon hand, tip/muzzle and the head top) or null when the cast is not loaded. */
function draw(run,c,e,R){
 const A=window.PirateEnemyAnim?.draw(run,c,e);if(A){run.lastRig=A;return A}   // approved authored animation replaces the cut-out pose
 const cast=casts.get(R.cast);if(!cast)return null;const ch=cast.meta.chars[R.char];if(!ch)return null;const pt=ch.parts,b=ch.bones;
 if(b.torsoH===undefined){b.torsoH=(pt.torso.pivot[1]-pt.torso.neck[1])}
 const p=pose(run,e,R,ch),sc=R.scale||1;
 // turning: the body narrows through the turn instead of flipping instantly
 if(e._face===undefined)e._face=e.dir;e._face+=clamp(e.dir-e._face,-.22,.22);const face=Math.abs(e._face)<.2?Math.sign(e._face||e.dir)*.2:e._face;
 const flash=Math.max(e.flash>0?.8:0,R.extraFlash?R.extraFlash(e):0);
 c.save();
 const fx=e.cx,fy=e.floor;
 if(!(e.spawnT>0)){c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(fx+(e.dead?-e.dir*20*clamp(((e.deadT||0)-.1)/.4,0,1):0),fy+1,(e.dead?42:26)*sc,6*sc,0,0,TAU);c.fill()}
 c.translate(fx,fy+p.ry);c.scale(face*sc,sc);c.translate(p.rx,0);if(p.rot)c.rotate(p.rot);
 const hx=0,hy=-p.hip,lean=p.lean,T=pt.torso;
 const J=(name)=>{const j=T[name];const v=rotp(j[0]-T.pivot[0],j[1]-T.pivot[1],lean);return[hx+v.x,hy+v.y]};
 const sF=J('shoulderF'),sB=J('shoulderB'),nk=J('neck'),hF=J('hipF'),hB=J('hipB');
 const arm=(i,s,up,fo,wp)=>{const a=p.arms[i],a1=a.a1+lean*.6,a2=a1+a.a2;part(c,cast,flash,up,s[0],s[1],-a1);const ex=s[0]+Math.sin(a1)*b.upper,ey=s[1]+Math.cos(a1)*b.upper;
  part(c,cast,flash,fo,ex,ey,-a2);const hx2=ex+Math.sin(a2)*b.fore,hy2=ey+Math.cos(a2)*b.fore;if(wp&&!(i&&R.hideWeapon&&R.hideWeapon(e)))drawWeapon(c,cast,flash,wp,hx2,hy2,a2,i?p.wpn:p.wpnB,i?R:R.uprightB?(UPB.uprightTilt=R.tiltB?R.tiltB(e):0,UPB):null);return[hx2,hy2,a2]};
 const leg=(i,h,th,sh)=>{const l=p.legs[i];ik(l.fx-h[0],-h[1]+l.fy,b.thigh,b.shin,l);part(c,cast,flash,th,h[0],h[1],-l.a1);const kx=h[0]+Math.sin(l.a1)*b.thigh,ky=h[1]+Math.cos(l.a1)*b.thigh;part(c,cast,flash,sh,kx,ky,-l.a2);l.sx=kx+Math.sin(l.a2)*b.shin;l.sy=ky+Math.cos(l.a2)*b.shin};
 // back arm (+ off-hand weapon), back leg, front leg, torso, head, front arm (+ weapon)
 const hb=arm(0,sB,pt.upperB,pt.foreB,R.hideWeaponB&&R.hideWeaponB(e)?null:pt.weaponB||null);
 leg(0,hB,pt.thighB,pt.shinB);leg(1,hF,pt.thighF,pt.shinF);
 part(c,cast,flash,T,hx,hy,lean);
 {const hs=R.headScale||1.18;c.save();c.translate(nk[0],nk[1]);c.scale(hs,hs);part(c,cast,flash,pt.head,0,0,lean*.5+p.head);c.restore()}
 const hf=arm(1,sF,pt.upperF,pt.foreF,pt.weapon);
 if(R.bow&&pt.weapon&&pt.weapon.top){// bow string: straight between the tips, or pulled to the drawing hand
  const wp=pt.weapon,th=R.upright?(R.uprightTilt||0):Math.PI/2-hf[2]+p.wpn,tp=rotp(wp.top[0]-wp.pivot[0],wp.top[1]-wp.pivot[1],th),tx=hf[0]+tp.x,ty=hf[1]+tp.y,bp=rotp(wp.bottom[0]-wp.pivot[0],wp.bottom[1]-wp.pivot[1],th),bx=hf[0]+bp.x,by=hf[1]+bp.y;
  c.strokeStyle='rgba(235,225,200,.9)';c.lineWidth=1.2;c.beginPath();c.moveTo(tx,ty);if(p.pull>0)c.lineTo(lerp((tx+bx)/2,hb[0],p.pull),lerp((ty+by)/2,hb[1],p.pull));c.lineTo(bx,by);c.stroke()}
 c.restore();
 // world-space anchors for the level's telegraphs / effects
 const toW=(x,y)=>{let X=x+p.rx,Y=y;if(p.rot){const v=rotp(X,Y,p.rot);X=v.x;Y=v.y}return[fx+X*face*sc,fy+p.ry+Y*sc]};
 const w=toW(hf[0],hf[1]);OUT.hand[0]=w[0];OUT.hand[1]=w[1];const wb=toW(hb[0],hb[1]);OUT.handB[0]=wb[0];OUT.handB[1]=wb[1];
 const wp=pt.weapon;if(wp){const th=Math.PI/2-hf[2]+p.wpn,tip=wp.tip||wp.muzzle;if(tip){const v=rotp(tip[0]-wp.pivot[0],tip[1]-wp.pivot[1],th);const q=toW(hf[0]+v.x,hf[1]+v.y);OUT.tip[0]=OUT.muzzle[0]=q[0];OUT.tip[1]=OUT.muzzle[1]=q[1]}}
 for(let i=0;i<2;i++){const q=toW(p.legs[i].sx,p.legs[i].sy);OUT.feet[i][0]=q[0];OUT.feet[i][1]=q[1]}
 {const q=toW(nk[0],nk[1]);OUT.neck[0]=q[0];OUT.neck[1]=q[1]}
 {const q=toW(nk[0],nk[1]-pt.head.pivot[1]*.9*(R.headScale||1.18));OUT.top=Math.min(q[1],fy+p.ry-(e.dead?4:0))}
 run.lastRig=OUT;return OUT}
function drawWeapon(c,cast,flash,wp,x,y,a2,off,R){part(c,cast,flash,wp,x,y,R&&R.upright?(R.uprightTilt||0)+off*.3:Math.PI/2-a2+off)}

/* shared HUD bits for rigged enemies: health bar over the head, stun stars */
function hud(c,run,e,o,R){if(!o||e.dead||e.spawnT>0)return;const t=run.time;
 if(e.hp<e.max){const bw=R.bar||60,by=o.top-14;c.fillStyle='#0b0f18cc';c.beginPath();c.roundRect(e.cx-bw/2-2,by-2,bw+4,10,5);c.fill();c.fillStyle=R.barCol||'#e8484f';c.beginPath();c.roundRect(e.cx-bw/2,by,bw*e.hp/e.max,6,3);c.fill()}
 if(R.stars?R.stars(e):e.state==='stun')for(let i=0;i<3;i++){const a=t*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,o.top-6+Math.sin(a)*4,5,5)}}
/* for level files: make sure the rig script and a cast are loaded (works whether or not enemy-rig.js was listed) */
async function ready(base,name){return load(base+'assets/enemies/',name)}
window.PirateEnemyRig={load,ready,draw,hud,pose,ik,casts,FAM};
})();
