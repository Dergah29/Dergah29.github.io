/* Pirate Strike — Captain's Wardrobe cosmetics renderer.
 * Dresses the real hero skins (adventure/levels/heroes.js) used by every engine level, the
 * legacy Blacktide voyage (Mari) and the shop preview, so a bought item looks the same everywhere.
 *  - Outfits / hats / weapon finishes: every animation frame of the hero is re-painted once
 *    at load (idle, run, jump, sword combo, pistol/throw, dash, block, hurt, KO, victory):
 *    Mari: region maps (shop/assets/scarlet*-regions.png) + gradient maps that keep the painted
 *    shading; pixel fighters: exact palette swaps per region (hat / clothes / blade / shell).
 *    Ghost = translucent cyan material with a baked halo; Golden = gold ramps + twinkling glints.
 *  - Hat plumes: painted feathers pinned to the hat of each frame (anchors found per frame).
 *  - Weapon arcs: coloured slash arcs on sword attacks (steel keeps the original look).
 *  - Companions: painted birds that follow the hero. Effects: pooled particles (max 40).
 * Hitboxes, physics, damage and animation timing are untouched: only drawing changes. */
(()=>{'use strict';
if(window.PirateCosmetics)return;
const A='shop/assets/';
const TAU=Math.PI*2,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const hex=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];
const loadImage=src=>new Promise((ok,fail)=>{const i=new Image();i.decoding='async';i.onload=()=>ok(i);i.onerror=()=>fail(Error('image '+src));i.src=src});
const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};

/* ------------------------------------------------------------------ colour ramps (dark → light) */
const R={
 crimson:['#1e0408','#5e0e18','#a82a34','#ff8a7c'],wine:['#120405','#3a0e10','#6a2220','#a8564a'],scarlet:['#2a0406','#86101a','#e0343a','#ffb0a0'],
 brass:['#3e2806','#9a6e1a','#eec25a','#fff4c8'],gold:['#3a2204','#94640e','#e6b432','#fff4b4'],goldCloth:['#3a2606','#94680e','#e2b440','#fff0b0'],
 black:['#050508','#121218','#262632','#55556a'],blackCloth:['#040406','#0e0e14','#22222c','#44445a'],blood:['#160204','#4e0810','#8e1420','#d84a4a'],
 silver:['#262a32','#6e7684','#c4ccd8','#ffffff'],iron:['#16181e','#3a3e48','#7a808c','#c8ccd4'],
 navy:['#050a1a','#122246','#2a4886','#7c9cd6'],white:['#4e5464','#9aa2b2','#e2e8f2','#ffffff'],cream:['#5a4a36','#a8967a','#e8dcc4','#fffaf0'],
 slate:['#0e1a24','#2a4658','#557c90','#b0d2e0'],teal:['#041c1a','#0e4a44','#239086','#8eeadc'],stormBlue:['#06121e','#173a5a','#3a78a8','#a6d8ff'],
 seaGreen:['#04201a','#0c5a46','#2a9a78','#a0f0d0'],greyWhite:['#3a4048','#7e8894','#c8d0d8','#f6f9fc'],
 coral:['#3a0e16','#a8344a','#f07a8a','#ffd0d4'],purple:['#14061e','#3e1858','#7a3a9e','#cc9ae8'],charcoal:['#08080a','#1c1c22','#3a3a44','#70707e'],
 rust:['#1e0806','#5a1a10','#9e3a22','#e48a5a'],ghost:['#03201f','#13625e','#45c7c0','#d8fffb']};
/* Mari regions: 1 hat felt, 2 hat trim, 3 dark clothing, 4 red cloth, 5 metal. Pixel fighters:
   hat, cloth, metal, body (shark skin / crab shell), trim (crab belt). */
const OUTFIT={
 'outfit-red':{scarlet:{hat:R.crimson,trim:R.brass,cloth:R.wine,red:R.scarlet},sailor:{hat:R.crimson,cloth:R.wine},captain:{hat:R.crimson,cloth:R.blackCloth},shark:{body:R.rust,cloth:R.crimson},crab:{body:R.crimson,cloth:R.blackCloth,trim:R.brass}},
 'outfit-black':{scarlet:{hat:R.black,trim:R.iron,cloth:R.blackCloth,red:R.blood},sailor:{hat:R.black,cloth:R.blackCloth},captain:{hat:R.black,cloth:R.blood},shark:{body:R.charcoal,cloth:R.blood},crab:{body:R.charcoal,cloth:R.blood,trim:R.iron}},
 'outfit-ghost':{all:{material:'ghost'}},
 'outfit-gold':{scarlet:{hat:R.gold,trim:R.cream,cloth:R.goldCloth,red:R.brass,material:'gold'},sailor:{hat:R.gold,cloth:R.goldCloth,material:'gold'},captain:{hat:R.gold,cloth:R.goldCloth,material:'gold'},shark:{body:R.gold,cloth:R.cream,material:'gold'},crab:{body:R.gold,cloth:R.goldCloth,trim:R.cream,material:'gold'}},
 'outfit-storm':{scarlet:{hat:R.slate,trim:R.silver,cloth:R.slate,red:R.stormBlue}},
 'outfit-navy':{sailor:{hat:R.navy,cloth:R.white}},
 'outfit-admiral':{captain:{hat:R.navy,cloth:R.navy}},
 'outfit-greatwhite':{shark:{body:R.greyWhite,cloth:R.seaGreen}},
 'outfit-coral':{crab:{body:R.coral,cloth:R.purple,trim:R.gold}}};
const HAT={
 'hat-crimson':{hat:R.crimson,trim:R.brass,plume:0},'hat-midnight':{hat:R.black,trim:R.silver,plume:1},'hat-admiral':{hat:R.navy,trim:R.gold,plume:2},
 'hat-ghost':{hat:R.ghost,trim:R.white,plume:3,glow:'#6ff6ee'},'hat-storm':{hat:R.slate,trim:R.silver,plume:4,spark:true}};
const WEAPON={
 'weapon-crimson':{metal:['#300608','#9a1c26','#ff6458','#ffd2c8'],arc:'#ff4a44'},
 'weapon-obsidian':{metal:['#060408','#1a1424','#46365e','#c8a2ff'],arc:'#a46aff'},
 'weapon-gold':{metal:R.gold,arc:'#ffd25a'},
 'weapon-ghost':{metal:['#06343a','#22989e','#8af2f2','#ecffff'],arc:'#6ff6ff'},
 'weapon-storm':{metal:['#081428','#2858a0','#8ad0ff','#ffffff'],arc:'#9adcff',bolt:true}};
const COMPANION={'acc-gull':{sprite:'gull',size:.5},'acc-macaw':{sprite:'macaw',size:.48},'acc-bluemacaw':{sprite:'bluemacaw',size:.48},'acc-ghostparrot':{sprite:'macaw',size:.48,ghost:true}};
const EFFECT={'fx-spray':{color:'#bfe8ff',core:'#ffffff'},'fx-embers':{color:'#ff8a2a',core:'#ffe0a0'},'fx-wisps':{color:'#62f0e0',core:'#e8fffb'},'fx-storm':{color:'#8ad0ff',core:'#ffffff'},'fx-gold':{color:'#ffd24a',core:'#fff8d0'}};

/* pixel fighters: palette regions (hat colours count as hat only in the top 13 rows of the figure) */
const PIXEL={
 sailor:{hat:['#68538a','#7b7bab'],cloth:['#68538a','#7b7bab'],metal:['#94a2bd']},
 captain:{hat:['#5e1828','#e0ae43'],cloth:['#944b4b','#a62731'],metal:['#f5cc63','#ffe69c']},
 shark:{body:['#68538a','#7b7bab','#94a2bd'],cloth:['#b36aa0','#e39bba']},
 crab:{body:['#d06c63','#de9970'],cloth:['#506db3','#6da8dd'],trim:['#cb9050','#f3d394']}};
const HAT_ROWS=13;

function lookOf(load){
 // merge outfit → hat → weapon into one region→ramp table for one hero
 const hero=load.hero,o=OUTFIT[load.outfit],base=(o&&(o[hero]||o.all))||{};
 const look={hero,regions:{},material:base.material||null,plume:-1,arc:null,bolt:false,glowPlume:null,sparkPlume:false};
 for(const k of ['hat','trim','cloth','red','body','metal'])if(base[k])look.regions[k]=base[k];
 const h=HAT[load.hat];if(h&&['scarlet','sailor','captain'].includes(hero)){look.regions.hat=h.hat;look.regions.trim=h.trim;look.plume=h.plume;look.glowPlume=h.glow||null;look.sparkPlume=!!h.spark;if(hero!=='scarlet')delete look.regions.trim}
 const w=WEAPON[load.weapon];if(w){look.regions.metal=w.metal;look.arc=w.arc;look.bolt=!!w.bolt}
 look.companion=COMPANION[load.accessory]||null;look.effect=EFFECT[load.effect]?Object.assign({id:load.effect},EFFECT[load.effect]):null;
 look.key=[hero,load.outfit,load.hat,load.weapon].join('|');
 look.paints=Object.keys(look.regions).length>0||!!look.material;
 return look;
}
const ramp=(stops,t)=>{t=clamp(t,0,1)*(stops.length-1);const i=Math.min(stops.length-2,Math.floor(t)),f=t-i,a=hex(stops[i]),b=hex(stops[i+1]);return[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f,a[2]+(b[2]-a[2])*f]};
const lum=(r,g,b)=>(r*.299+g*.587+b*.114)/255;

/* ---- Mari: region gradient maps on the painted sheets */
const MARI_REG=['','hat','trim','cloth','red','metal'];
let mariRegions=null;
function loadMariRegions(){mariRegions??=Promise.all([loadImage(A+'scarlet-regions.png'),loadImage(A+'scarlet-run-regions.png')]).then(([a,b])=>({main:pixels(a),run:pixels(b)}));return mariRegions}
function pixels(img){const c=canvas(img.width,img.height),x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0);return x.getImageData(0,0,c.width,c.height)}
function paintMari(img,reg,look,frameW){
 const W=img.width,H=img.height,src=pixels(img),d=src.data,r=reg.data;
 // per-region luminance range of the original art (keeps highlights and shadows where they were)
 const lo=new Float32Array(6).fill(1),hi=new Float32Array(6);
 for(let i=0;i<d.length;i+=4){if(d[i+3]<40)continue;const k=Math.round(r[i]/40);if(!k)continue;const L=lum(d[i],d[i+1],d[i+2]);if(L<lo[k])lo[k]=L;if(L>hi[k])hi[k]=L}
 const lut=MARI_REG.map((n,k)=>k&&look.regions[n]?look.regions[n]:null);
 for(let i=0;i<d.length;i+=4){
  if(d[i+3]===0)continue;const k=Math.round(r[i]/40),stops=lut[k];
  if(stops){const L=lum(d[i],d[i+1],d[i+2]),t=(L-lo[k])/Math.max(.04,hi[k]-lo[k]);const c=ramp(stops,.08+t*.84);d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2]}
 }
 if(look.material)material(d,look.material);
 const out=canvas(W,H);out.getContext('2d').putImageData(src,0,0);
 if(look.material==='ghost')halo(out,frameW,H,'rgba(111,246,238,.55)',5);
 return out;
}
function material(d,kind){
 if(kind==='ghost'){for(let i=0;i<d.length;i+=4){if(!d[i+3])continue;const c=ramp(R.ghost,lum(d[i],d[i+1],d[i+2])*1.05+.04);d[i]=d[i]*.18+c[0]*.82;d[i+1]=d[i+1]*.18+c[1]*.82;d[i+2]=d[i+2]*.18+c[2]*.82;d[i+3]=d[i+3]*.78}}
 else if(kind==='gold'){for(let i=0;i<d.length;i+=4){if(!d[i+3])continue;d[i]=Math.min(255,d[i]*1.04+6);d[i+1]=Math.min(255,d[i+1]*1.0+2)}}
}
function halo(cv,fw,fh,color,blur){
 // soft outer glow baked once per sheet (no per-frame canvas filters on Android)
 const W=cv.width,H=cv.height,g=canvas(W,H),x=g.getContext('2d');
 for(let x0=0;x0<W;x0+=fw){x.save();x.beginPath();x.rect(x0,0,fw,fh);x.clip();x.shadowColor=color;x.shadowBlur=blur*2;x.drawImage(cv,x0,0,fw,fh,x0,0,fw,fh);x.restore()}
 x.globalCompositeOperation='destination-out';x.drawImage(cv,0,0);x.globalCompositeOperation='source-over';
 const out=cv.getContext('2d');out.globalCompositeOperation='destination-over';out.drawImage(g,0,0);out.globalCompositeOperation='source-over';
}
/* hat anchors + glint points per frame (frame-local pixels) */
function mariAnchors(reg,frameW,frames){
 const out=[],W=reg.width,H=reg.height,r=reg.data;
 for(let f=0;f<frames;f++){let x0=1e9,x1=-1,y0=1e9,y1=-1;const pts=[];
  for(let y=0;y<H;y++)for(let x=f*frameW;x<(f+1)*frameW&&x<W;x++){const k=Math.round(r[(y*W+x)*4]/40);if(k===1||k===2){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}if(k>=1&&k<=4&&((x*7+y*13)%97===0))pts.push([x-f*frameW,y])}
  out.push({hat:x1>0?{x0:x0-f*frameW,x1:x1-f*frameW,y0,y1}:null,pts:shuffle(pts).slice(0,28)});
 }
 return out;
}
function shuffle(a){let s=7;for(let i=a.length-1;i>0;i--){s=(s*9301+49297)%233280;const j=Math.floor(s/233280*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

/* ---- pixel fighters: palette swap per frame */
function paintFrame(img,hero,look){
 const def=PIXEL[hero]||{},c=canvas(img.width,img.height),x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0);
 const id=x.getImageData(0,0,c.width,c.height),d=id.data,W=c.width;
 let top=-1;for(let i=3;i<d.length&&top<0;i+=4)if(d[i])top=Math.floor((i>>2)/W);
 const maps={};for(const [reg,cols] of Object.entries(def)){const stops=look.regions[reg];if(!stops)continue;const sorted=cols.slice().sort((a,b)=>lum(...hex(a))-lum(...hex(b)));maps[reg]=new Map(sorted.map((h,i)=>[h,ramp(stops,sorted.length===1?.6:.22+i/(sorted.length-1)*.56)]))}
 const anchor={hat:null,pts:[]};let hx0=1e9,hx1=-1,hy0=1e9,hy1=-1;
 for(let i=0;i<d.length;i+=4){
  if(!d[i+3])continue;const p=i>>2,y=Math.floor(p/W),xx=p%W;
  const h='#'+[d[i],d[i+1],d[i+2]].map(v=>v.toString(16).padStart(2,'0')).join('');
  const hatZone=y<top+HAT_ROWS;let reg=null;
  if(def.hat&&hatZone&&def.hat.includes(h))reg='hat';else if(def.cloth?.includes(h)&&!(def.hat&&hatZone&&def.hat.includes(h)))reg='cloth';
  if(!reg)for(const k of ['metal','body','trim'])if(def[k]?.includes(h)){reg=k;break}
  if(reg==='hat'){if(xx<hx0)hx0=xx;if(xx>hx1)hx1=xx;if(y<hy0)hy0=y;if(y>hy1)hy1=y}
  if(reg&&reg!=='metal'&&(xx*7+y*13)%23===0)anchor.pts.push([xx,y]);
  const m=reg&&maps[reg]?.get(h);if(m){d[i]=m[0];d[i+1]=m[1];d[i+2]=m[2]}
 }
 if(def.hat&&hx1>0)anchor.hat={x0:hx0,x1:hx1,y0:hy0,y1:hy1};
 anchor.pts=shuffle(anchor.pts).slice(0,10);
 if(look.material)material(d,look.material);
 x.putImageData(id,0,0);
 if(look.material==='ghost')halo(c,c.width,c.height,'rgba(111,246,238,.6)',1.5);
 c.__anchor=anchor;return c;
}

/* ---- shared art (painted plumes + companions + particle sprites) */
let art=null;
function loadArt(){art??=Promise.all([fetch(A+'cosmetics.json').then(r=>r.json()),loadImage(A+'plumes.png'),loadImage(A+'companions.png')]).then(([meta,plumes,birds])=>({meta,plumes,birds})).catch(e=>{console.warn('cosmetics art',e);return null});return art}
const dotCache=new Map();
function dot(color,size=32){const k=color+size;if(dotCache.has(k))return dotCache.get(k);const c=canvas(size,size),x=c.getContext('2d'),g=x.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.22,color);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,size,size);dotCache.set(k,c);return c}
function star(color){const k='star'+color;if(dotCache.has(k))return dotCache.get(k);const s=32,c=canvas(s,s),x=c.getContext('2d');x.translate(s/2,s/2);x.drawImage(dot(color,20),-10,-10);x.fillStyle='#fff';x.beginPath();for(let i=0;i<8;i++){const r=i%2?2:15,a=i*Math.PI/4;x.lineTo(Math.cos(a)*r,Math.sin(a)*r)}x.fill();dotCache.set(k,c);return c}

/* ---- per-hero extras: plume, glints, weapon arc, companion, particles (world units) */
class Extras{
 constructor(look,unit){this.look=look;this.unit=unit;this.parts=[];this.pet=null;this.last=null;this.emit=0;this.prev=null;this.wisp=0}
 particle(o){if(this.parts.length>=40)this.parts.shift();this.parts.push(o)}
 update(p,run){
  const t=run.time||0,dt=clamp(this.last==null?0:t-this.last,0,.05);this.last=t;const u=this.unit;
  const on=!run.fx||run.fx.on!==false,reduced=!!run.fx?.reduced;
  // companion follows a point behind the hero's shoulder with a spring
  const L=this.look;
  if(L.companion){const tx=p.x+p.w/2-p.dir*46*u,ty=p.y+p.h-146*u+Math.sin(t*2.2)*6*u;const q=this.pet||(this.pet={x:tx,y:ty,vx:0,vy:0,dir:p.dir});
   const ax=(tx-q.x)*28-q.vx*7.5,ay=(ty-q.y)*28-q.vy*7.5;q.vx+=ax*dt;q.vy+=ay*dt;q.x+=q.vx*dt;q.y+=q.vy*dt;if(Math.hypot(tx-q.x,ty-q.y)>600*u){q.x=tx;q.y=ty;q.vx=q.vy=0}
   if(Math.abs(q.vx)>25*u)q.dir=Math.sign(q.vx);else q.dir=p.dir}
  if(!on||!L.effect||!dt)return this.step(dt);
  const fxid=L.effect.id,feet={x:p.x+p.w/2,y:p.y+p.h},moving=Math.abs(p.vx||0)>40,air=!p.ground,dash=p.dash>0||p.anim==='dash';
  const rate=reduced?.5:1;this.emit-=dt*rate;
  const landed=this.prev&&this.prev.air&&!air;this.prev={air};
  if(fxid==='fx-spray'){if(landed)for(let i=0;i<8;i++)this.particle({k:'drop',x:feet.x+(Math.random()-.5)*20*u,y:feet.y-2*u,vx:(Math.random()-.5)*160*u,vy:(-120-Math.random()*140)*u,life:.6,max:.6,s:7*u,g:600*u});
   if(this.emit<=0&&(moving&&!air||dash)){this.emit=dash?.03:.07;this.particle({k:'drop',x:feet.x-p.dir*10*u,y:feet.y-4*u,vx:-p.dir*(40+Math.random()*60)*u,vy:(-90-Math.random()*90)*u,life:.5,max:.5,s:6*u,g:600*u})}}
  else if(fxid==='fx-embers'){if(this.emit<=0&&(moving||dash||Math.random()<.1)){this.emit=dash?.025:moving?.06:.3;this.particle({k:'ember',x:feet.x-p.dir*8*u+(Math.random()-.5)*16*u,y:feet.y-(6+Math.random()*30)*u,vx:-p.dir*30*u*Math.random(),vy:(-30-Math.random()*50)*u,life:.9,max:.9,s:8*u,g:-20*u})}}
  else if(fxid==='fx-wisps'){this.wisp+=dt;if(this.emit<=0){this.emit=.09;const a=this.wisp*2.2+Math.floor(Math.random()*3)*TAU/3;this.particle({k:'wisp',x:p.x+p.w/2+Math.cos(a)*34*u,y:p.y+p.h*.45+Math.sin(a)*14*u,vx:0,vy:-12*u,life:.5,max:.5,s:9*u,g:0})}}
  else if(fxid==='fx-storm'){const fin=p.anim==='attackC'&&p.attack>.12;if((dash||fin)&&this.emit<=0){this.emit=.05;this.particle({k:'bolt',x:p.x+p.w/2+(Math.random()-.5)*50*u,y:p.y+Math.random()*p.h,len:(26+Math.random()*30)*u,a:Math.random()*TAU,life:.16,max:.16,seed:Math.random()*99})}
   else if(this.emit<=0&&Math.random()<.02){this.emit=.6;this.particle({k:'bolt',x:p.x+p.w/2+(Math.random()-.5)*30*u,y:p.y+Math.random()*p.h*.6,len:16*u,a:Math.random()*TAU,life:.12,max:.12,seed:Math.random()*99})}}
  else if(fxid==='fx-gold'){if(this.emit<=0){this.emit=moving||dash?.06:.16;this.particle({k:'star',x:p.x+p.w/2+(Math.random()-.5)*60*u,y:p.y+Math.random()*p.h,vx:0,vy:-14*u,life:.7,max:.7,s:13*u,g:0})}}
  this.step(dt);
 }
 step(dt){for(const q of this.parts){q.life-=dt;if(q.vx!=null){q.vy+=(q.g||0)*dt;q.x+=q.vx*dt;q.y+=q.vy*dt}}this.parts=this.parts.filter(q=>q.life>0)}
 drawBack(c,p,run){
  const L=this.look,t=run.time||0,u=this.unit;
  if(L.effect?.id==='fx-wisps'&&run.fx?.on!==false){const im=dot(L.effect.color,32);c.save();c.globalCompositeOperation='lighter';for(let i=0;i<3;i++){const a=this.wisp*2.2+i*TAU/3;if(Math.sin(a)>0)continue;c.globalAlpha=.75;const s=18*u;c.drawImage(im,p.x+p.w/2+Math.cos(a)*34*u-s/2,p.y+p.h*.45+Math.sin(a)*14*u-s/2,s,s)}c.restore()}
  if(L.companion&&this.pet&&this.pet.y<p.y+p.h-150*u)this.drawPet(c,t);
 }
 drawFront(c,p,run){
  const L=this.look,t=run.time||0,u=this.unit;
  if(L.arc&&p.anim?.startsWith('attack')&&!p.dead)this.drawArc(c,p,u);
  if(this.parts.length){c.save();c.globalCompositeOperation='lighter';
   for(const q of this.parts){const k=q.life/q.max;
    if(q.k==='bolt'){c.globalAlpha=k;c.strokeStyle=L.effect.color;c.lineWidth=2.2*u;c.shadowColor=L.effect.color;c.shadowBlur=0;c.beginPath();let x=q.x,y=q.y;c.moveTo(x,y);for(let i=1;i<=5;i++){const f=i/5;x=q.x+Math.cos(q.a)*q.len*f+Math.sin(q.seed+i*7.3)*6*u;y=q.y+Math.sin(q.a)*q.len*f+Math.cos(q.seed+i*5.1)*6*u;c.lineTo(x,y)}c.stroke();c.strokeStyle='#fff';c.lineWidth=.9*u;c.stroke();continue}
    const im=q.k==='star'?star(L.effect.color):dot(L.effect.color,32),s=q.s*(q.k==='star'?(.6+.4*Math.sin(k*Math.PI)):(.5+.5*k))*2;c.globalAlpha=q.k==='drop'?.85*k:k;c.drawImage(im,q.x-s/2,q.y-s/2,s,s)}
   c.restore()}
  if(L.effect?.id==='fx-wisps'&&run.fx?.on!==false){const im=dot(L.effect.color,32);c.save();c.globalCompositeOperation='lighter';for(let i=0;i<3;i++){const a=this.wisp*2.2+i*TAU/3;if(Math.sin(a)<=0)continue;c.globalAlpha=.9;const s=20*u;c.drawImage(im,p.x+p.w/2+Math.cos(a)*34*u-s/2,p.y+p.h*.45+Math.sin(a)*14*u-s/2,s,s)}c.restore()}
  if(L.companion&&this.pet&&this.pet.y>=p.y+p.h-150*u)this.drawPet(c,t);
 }
 drawArc(c,p,u){
  const step=p.anim==='attackC'?3:p.anim==='attackB'?2:1,dur=step===3?.3:.22,k=1-clamp((p.attack||0)/dur,0,1);if(k<=0||k>=1)return;
  const L=this.look,cx=p.x+p.w/2+p.dir*10*u,cy=p.y+p.h-58*u,r=(step===3?70:60)*u;
  const a0=step===2?.9:-1.25,a1=step===2?-1.0:1.05,sweep=a0+(a1-a0)*Math.min(1,k*1.6);
  c.save();c.translate(cx,cy);if(p.dir<0)c.scale(-1,1);c.globalCompositeOperation='lighter';
  const tail=step===2?.9:-.9;c.lineCap='round';
  for(let i=0;i<3;i++){c.globalAlpha=(1-k)*(.55-i*.15);c.strokeStyle=i===0?'#ffffff':L.arc;c.lineWidth=(i===0?2.2:5+i*4)*u;c.beginPath();c.arc(0,0,r-i*3*u,Math.min(sweep,sweep-tail*.9),Math.max(sweep,sweep-tail*.9));c.stroke()}
  if(L.bolt&&k<.7){c.globalAlpha=.9*(1-k);c.strokeStyle='#e8f6ff';c.lineWidth=1.6*u;c.beginPath();for(let i=0;i<=6;i++){const a=sweep-tail*.9*(i/6),rr=r+Math.sin(i*2.7+k*30)*7*u;i?c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):c.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}c.stroke()}
  c.restore();
 }
 drawPet(c,t){
  const a=Extras.art;if(!a)return;const L=this.look.companion,m=a.meta.companions[L.sprite];if(!m)return;const q=this.pet,u=this.unit;
  const f=Math.floor(t*(Math.abs(q.vx)>60*u?14:9))%m.frames,fw=m.w,fh=m.h,s=L.size*u;
  c.save();c.translate(q.x,q.y);if(q.dir<0)c.scale(-1,1);c.rotate(clamp(q.vy/(900*u),-.35,.35));
  if(L.ghost){c.globalAlpha=.62;c.globalCompositeOperation='lighter'}
  c.imageSmoothingEnabled=true;c.drawImage(a.birds,m.x+f*fw,m.y,fw,fh,-m.ax*s,-m.ay*s,fw*s,fh*s);
  c.restore();
 }
}
Extras.art=null;

/* plume pinned to a hat; (bx,by) is the hat's top-back point in sprite pixels, scale = sprite px → world */
const plumeCache=new Map();
function plumeImage(a,i,px){
 // pixel fighters get the plume rendered at sprite resolution first, so it matches their pixel art
 const m=a.meta.plumes[i];if(!px)return{img:a.plumes,x:m.x,y:m.y,w:m.w,h:m.h,ax:m.ax,ay:m.ay};
 const k=i+':'+px;if(plumeCache.has(k))return plumeCache.get(k);
 const f=px/m.w,c=canvas(Math.ceil(m.w*f)+2,Math.ceil(m.h*f)+2),x=c.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(a.plumes,m.x,m.y,m.w,m.h,1,1,m.w*f,m.h*f);
 const id=x.getImageData(0,0,c.width,c.height);for(let j=3;j<id.data.length;j+=4)id.data[j]=id.data[j]>110?255:0;x.putImageData(id,0,0);
 const o={img:c,x:0,y:0,w:c.width,h:c.height,ax:1+m.ax*f,ay:1+m.ay*f,scale:1/f};plumeCache.set(k,o);return o;
}
function drawPlume(c,look,anchor,t,{s,ox,oy,pixel}){
 const a=Extras.art;if(!a||look.plume<0||!anchor?.hat)return;const m=a.meta.plumes[look.plume];if(!m)return;
 const h=anchor.hat,hw=h.x1-h.x0,bx=h.x0+hw*.42,by=h.y0+(h.y1-h.y0)*.2;
 const want=hw*(pixel?.78:.62),P=plumeImage(a,look.plume,pixel?Math.max(8,Math.round(want)):0);
 const sway=Math.sin(t*3.1)*.05,k=pixel?1:want/m.w;
 c.save();c.translate(ox+bx*s,oy+by*s);c.rotate(-2.82+sway);c.scale(k*s,k*s);
 if(look.glowPlume){c.shadowColor=look.glowPlume;c.shadowBlur=8}
 c.imageSmoothingEnabled=!pixel;c.drawImage(P.img,P.x,P.y,P.w,P.h,-P.ax,-P.ay,P.w,P.h);
 c.restore();
 if(look.sparkPlume&&Math.sin(t*7.3)>.86){const g=star('#9ad8ff'),z=hw*s*.16;c.save();c.globalCompositeOperation='lighter';c.drawImage(g,ox+(bx-want*.85)*s-z,oy+(by-want*.18)*s-z,z*2,z*2);c.restore()}
}
function drawGlints(c,anchor,t,{s,ox,oy,z:zs=1}){
 if(!anchor?.pts?.length)return;const g=star('#ffe7a0');c.save();c.globalCompositeOperation='lighter';
 for(let i=0;i<anchor.pts.length;i++){const ph=(t*1.3+i*.37)%3;if(ph>.5)continue;const k=Math.sin(ph/.5*Math.PI),[x,y]=anchor.pts[i],z=(5+7*k)*zs;c.globalAlpha=k;c.drawImage(g,ox+x*s-z/2,oy+y*s-z/2,z,z)}
 c.restore();
}

/* ------------------------------------------------------------------ skin dressing */
async function dress(skin,load){
 load=load||window.PirateEconomy?.loadout?.(skin.id)||{hero:skin.id};
 const look=lookOf(Object.assign({hero:skin.id},load));skin.look=look;
 const isMari=skin.id==='scarlet';
 skin.extras=new Extras(look,isMari?(skin.scale||.8)/.8:1);
 if(look.companion||look.plume>=0)Extras.art=await loadArt();
 if(isMari){
  if(look.paints||look.plume>=0){const reg=await loadMariRegions().catch(()=>null);
   if(reg){const fw=skin.meta.frameW;if(look.paints){skin.img=paintMari(skin.orig?.img||skin.img,reg.main,look,fw);if(skin.runImg&&!load.thumb)skin.runImg=paintMari(skin.orig?.runImg||skin.runImg,reg.run,look,fw)}
    skin.anchors={main:mariAnchors(reg.main,fw,Math.round(reg.main.width/fw)),run:skin.runImg&&!load.thumb?mariAnchors(reg.run,fw,Math.round(reg.run.width/fw)):[]}}}
 }else if(skin.images){
  for(const [n,im] of skin.images){const src=skin.orig?.get(n)||im;const c=look.paints||look.plume>=0?paintFrame(src,skin.id,look):null;if(c)skin.images.set(n,c)}
 }
 return skin;
}
function wrapScarlet(S){
 const load=S.prototype.load,blit=S.prototype.blit,draw=S.prototype.draw;
 S.prototype.load=async function(...a){const r=await load.apply(this,a);this.orig={img:this.img,runImg:this.runImg};try{await dress(this,this.loadout)}catch(e){console.warn('cosmetics',e)}return r};
 S.prototype.blit=function(c,pose,fx,fy,dir,o={}){
  const L=this.look,run=pose==='run'&&this.runImg&&o.runFrame>=0,an=L&&this.anchors&&!(o.alpha<.4)?(run?this.anchors.run[o.runFrame]:this.anchors.main[this.frame(pose)]):null;
  const m=this.meta,s=this.scale,t=this.__t||0;
  const local=f=>{c.save();c.translate(Math.round(fx),Math.round(fy+(o.dy||0)*0));if(dir<0)c.scale(-1,1);c.translate(o.dx||0,0);c.rotate(o.rot||0);c.scale((o.sx||1)*s,(o.sy||1)*s);f();c.restore()};
  if(an&&L.plume>=0)local(()=>drawPlume(c,L,an,t,{s:1,ox:-m.anchor[0],oy:-m.anchor[1]}));
  blit.call(this,c,pose,fx,fy,dir,o);
  if(an&&L.material==='gold')local(()=>drawGlints(c,an,t,{s:1,z:1.4,ox:-m.anchor[0],oy:-m.anchor[1]}));
 };
 S.prototype.draw=function(c,p,run){this.__t=run.time||0;const X=this.extras;if(X){X.unit=(this.scale||.8)/.8;X.update(p,run);X.drawBack(c,p,run)}draw.call(this,c,p,run);if(X)X.drawFront(c,p,run)};
}
function wrapFrames(F){
 const load=F.prototype.load,draw=F.prototype.draw;
 F.prototype.load=async function(...a){const r=await load.apply(this,a);this.orig=new Map(this.images);try{await dress(this,this.loadout)}catch(e){console.warn('cosmetics',e)}return r};
 F.prototype.draw=function(c,p,run){
  const X=this.extras;if(X){X.unit=this.scale/4.75;X.update(p,run);X.drawBack(c,p,run)}
  const L=this.look,im=this.pick?.(p,run.time||0),an=!p.dead&&im?.__anchor,s=this.scale;
  const local=f=>{c.save();c.translate(Math.round(p.x+p.w/2),Math.round(p.y+p.h));if(p.dir<0)c.scale(-1,1);f();c.restore()};
  if(L&&an&&L.plume>=0)local(()=>drawPlume(c,L,an,run.time||0,{s,ox:-48*s,oy:-32*s,pixel:true}));
  draw.call(this,c,p,run);
  if(L&&an&&L.material==='gold')local(()=>drawGlints(c,an,run.time||0,{s,z:s*.4,ox:-48*s,oy:-32*s}));
  if(X)X.drawFront(c,p,run);
 };
}
function install(){
 const H=window.PirateHeroes;if(!H||H.__cosmetics)return false;H.__cosmetics=true;
 wrapScarlet(H.ScarletSkin);wrapFrames(H.FrameSkin);
 return true;
}
/* Blacktide voyage (Level 1): Mari already uses ScarletSkin; the four pixel fighters are drawn by
   the voyage runtime itself, so their frames are swapped for dressed copies while the player draws. */
function installVoyage(){
 const Ad=window.PirateAdventure;if(!Ad||Ad.__cosmetics)return false;Ad.__cosmetics=true;const P=Ad.Voyage.prototype,actor=P.actor;
 P.actor=function(a,s){
  if(a!==this.p||s==='scarlet'||!['sailor','captain','shark','crab'].includes(s))return actor.call(this,a,s);
  const load=window.PirateEconomy?.loadout?.(s);const look=load&&lookOf(load);if(!look)return actor.call(this,a,s);
  // Optional illustrated hero, with the same Level1 player/collider and no enemy/network changes.
  if(window.PirateHeroes?.supportsIllustration?.(s,load)){
   const key=[s,load.outfit,load.weapon,load.hat,load.accessory,load.effect].join('|');
   if(this.__illustration?.key!==key||this.__illustration?.retryAt&&performance.now()>=this.__illustration.retryAt){const previous=this.__illustration?.skin;const entry=this.__illustration={key,skin:previous?.id===s?previous:null};window.PirateCosmetics.skin(s,load).then(sk=>{if(this.__illustration===entry&&sk.illustrated){sk.scale=4.75*.525;entry.skin=sk}}).catch(()=>{if(this.__illustration===entry)entry.retryAt=performance.now()+1000})}
   const sk=this.__illustration.skin;
   if(sk){const p=a,anim=p.hp<=0?'ko':p.hit>0?'hurt':this.inputs.has('block')&&p.ground?'block':p.dash>0?(p.attack>0?'dashAttack':'dash'):p.attack>0?'attackA':!p.ground?(p.vy<0?'jump':'fall'):Math.abs(p.vx)>10?'run':'idle';
    sk.draw(this.ctx,{x:p.x,y:p.y,w:p.w,h:p.h,dir:p.dir,anim,attack:p.attack,throwT:0,inv:p.inv,invFx:true,hurtT:p.hit||0,dash:p.dash,dead:p.hp<=0,animT:p.hp<=0?1:0,vx:p.vx,ground:p.ground},{time:this.time,fx:{on:true}});return}
   // Wait for this hero's illustrated identity. Never flash the template pixel fighter while loading.
   return;
  }

  const key=[s,load.outfit,load.weapon,load.hat,load.accessory,load.effect].join('|');if(this.__dressKey!==key){this.__dressKey=key;this.__dressed=new Map();this.__extras=new Extras(look,.32);if(look.companion||look.plume>=0)loadArt().then(x=>Extras.art=x)}
  const orig=this.images,dressed=this.__dressed;
  if(look.paints)this.images={get:k=>{const im=orig.get(k);if(!im||!im.complete&&!(im instanceof HTMLCanvasElement))return im;if(!dressed.has(k))dressed.set(k,paintFrame(im,s,look));return dressed.get(k)}};
  const X=this.__extras,run={time:this.time,fx:{on:true}},q={x:a.x,y:a.y,w:a.w,h:a.h,dir:a.dir,vx:a.vx,ground:a.ground,dash:a.dash,anim:a.attack>0?'attackA':a.dash>0?'dash':'idle',attack:a.attack,dead:a.hp<=0};
  X.update(q,run);X.drawBack(this.ctx,q,run);
  try{return actor.call(this,a,s)}finally{this.images=orig;X.drawFront(this.ctx,q,run)}
 };
 return true;
}
/* ---- art for other screens: the hero-selection cards and the arena fighters */
const artCache=new Map();
const loadoutOf=hero=>{try{return window.PirateEconomy?.loadout?.(hero)||{hero}}catch{return{hero}}};
let cardRegion=null;
/** dressed idle art for a hero card (Mari: the big card painting; others: the idle frame) or null when nothing is worn */
async function cardArt(hero,load){
 load=load||loadoutOf(hero);if(window.PirateHeroes?.supportsIllustration?.(hero,load)){const original=await window.PirateHeroes.illustratedCard(hero,load);if(original)return original}
 const look=lookOf(Object.assign({hero},load||loadoutOf(hero)));if(!look.paints)return null;const key='card|'+look.key;
 if(artCache.has(key))return artCache.get(key);
 const job=(async()=>{const H=window.PirateHeroes;
  if(hero==='scarlet'){cardRegion??=loadImage(A+'scarlet-card-regions.png').then(pixels);const [img,reg]=await Promise.all([loadImage(H.cardArt('scarlet')),cardRegion]);return paintMari(img,reg,look,img.width).toDataURL()}
  const im=await H.frameImage(hero,'Idle',0),fr=paintFrame(im,hero,look),c=canvas(56,34),x=c.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(fr,24,0,56,34,0,0,56,34);return c.toDataURL()})();
 artCache.set(key,job);job.catch(()=>artCache.delete(key));return job;
}
/* Hero selection: each card shows what that hero wears, with the outfit's name. */
function installHeroSelect(){
 const HS=window.PirateHeroSelect;if(!HS||HS.__cosmetics)return false;HS.__cosmetics=true;const open=HS.open;
 HS.open=async function(o={}){const api=await open.call(this,o);if(api?.root)dressCards(api.root,o.lang).catch(e=>console.warn('hero select cosmetics',e));return api};
 return true;
}
async function dressCards(root,lang){
 const C=window.PirateShopCatalog;
 await Promise.all([...root.querySelectorAll('.hs-card[data-hero]')].map(async card=>{
  const hero=card.dataset.hero,load=loadoutOf(hero),url=await cardArt(hero,load);const img=card.querySelector('img');if(!url||!img||!card.isConnected)return;
  const apply=()=>{if(img.src!==url)img.src=url};apply();img.dataset.dressed=load.outfit;
  // the plain pixel art is loaded asynchronously by heroselect.js: keep the dressed art on top
  const mo=new MutationObserver(apply);mo.observe(img,{attributes:true,attributeFilter:['src']});setTimeout(()=>mo.disconnect(),3000);
  const it=C?.get(load.outfit);if(it&&!it.default){let b=card.querySelector('.hs-outfit');if(!b){b=document.createElement('span');b.className='hs-outfit';card.append(b)}b.textContent=C.name(it,lang||document.documentElement.lang||'en');b.style.cssText='position:absolute;left:50%;transform:translateX(-50%);max-width:92%;bottom:clamp(30px,8.4vh,50px);z-index:3;padding:2px 8px;border-radius:999px;background:#2a1608e6;border:1px solid #d8a84a;font:800 11px Arial,sans-serif;color:#ffe7a8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis'}
 }));
}
/* Arena uses a separate resolution-aware illustration adapter. Compatibility
   entry points never recolour/reinstall the old pixel textures. */
function dressArena(scene){return window.PirateArenaHeroes?.refresh(scene)||0}
function installArena(){return window.PirateArenaHeroes?.install()||false}
window.PirateCosmetics={R,OUTFIT,HAT,WEAPON,COMPANION,EFFECT,PIXEL,lookOf,dress,install,installVoyage,installHeroSelect,installArena,dressArena,cardArt,Extras,loadArt,
 /* a dressed skin for previews (shop); load = economy loadout shape */
 async skin(hero,load){const H=window.PirateHeroes;const sk=H.createSkin(hero);sk.loadout=Object.assign({hero},load);await sk.load();return sk}};
install();installVoyage();installHeroSelect();
})();

