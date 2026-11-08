/* Pirate Strike — animated effect art (window.PirateArtFx).
 *
 * Plays authored frame animations from the shared effects atlas (tools/fx_atlas.py: CraftPix coins, cartoon smoke
 * and water effects, graded and resampled) at real gameplay events the engine already has:
 *   coin      — every gold coin (world pickups, chest and enemy drops) spins with the authored 10-frame turn;
 *   splash_*  — water splashes where something actually hits water (FX.splash);
 *   explosion / puff — powder-keg and bomb blasts, cannonball impacts (FX.explosion).
 * Effects are play-once (except the coin), capped, skipped under reduced motion, and never touch gameplay.
 * The atlas loads lazily the first time a level starts; if it is missing or switched off (?artFx=0 or
 * localStorage 'ps-art-fx' = '0') every caller falls back to the engine's existing drawing.
 */
(()=>{'use strict';
if(window.PirateArtFx)return;
const BASE='adventure/levels/assets/fx/';
const MAX=28;
let loading=null,art=null;
/* Colour over the clip's life (k = 0…1): a blast starts as hot fire and cools into dark powder smoke; water is pulled
 * from the pack's bright cartoon blue towards sea green; gun smoke is a warm grey. [r,g,b,strength] or a function. */
const mix=(a,b,k)=>a.map((v,i)=>v+(b[i]-v)*k);
const TINTS={
 explosion:k=>k<.3?mix([255,170,70,.62],[255,120,50,.5],k/.3):mix([255,120,50,.5],[70,62,62,.55],Math.min(1,(k-.3)/.35)),
 puff:[80,72,70,.45],
 splash_big:[120,190,200,.38],splash_column:[120,190,200,.38],splash_small:[130,200,210,.32]};
let scratch=null;
function tinted(c,f,x,y,w,h,t){   // the frame recoloured on a small scratch canvas (source-atop keeps its alpha)
 const W=Math.ceil(w)+2,H=Math.ceil(h)+2;scratch??=document.createElement('canvas');if(scratch.width<W||scratch.height<H){scratch.width=Math.max(W,scratch.width);scratch.height=Math.max(H,scratch.height)}
 const x2=scratch.getContext('2d');x2.clearRect(0,0,W,H);x2.globalCompositeOperation='source-over';x2.imageSmoothingEnabled=true;x2.drawImage(f,0,0,w,h);
 x2.globalCompositeOperation='source-atop';x2.fillStyle=`rgba(${t[0]|0},${t[1]|0},${t[2]|0},${t[3]})`;x2.fillRect(0,0,W,H);c.drawImage(scratch,0,0,w,h,x,y,w,h);
}

function enabled(){try{return new URLSearchParams(location.search).get('artFx')!=='0'&&localStorage.getItem('ps-art-fx')!=='0'}catch{return true}}
async function load(){
 const meta=await fetch(BASE+'fx.json').then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json()});
 const pages=await Promise.all(meta.pages.map(n=>new Promise((ok,fail)=>{const im=new Image();im.onload=()=>(im.decode?im.decode().catch(()=>{}):Promise.resolve()).then(()=>ok(im));im.onerror=()=>fail(Error('page '+n));im.src=BASE+n})));
 // cut every frame into its own small canvas: drawing sub-rects of one large 2048² page costs a full-texture
 // upload per draw on some canvases (measured in Chromium: 14 coins 18 ms/frame from the page, ~0.2 ms from frames)
 for(const c of Object.values(meta.clips))c.frames=c.frames.map(([pg,x,y,w,h])=>{const cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(pages[pg],x,y,w,h,0,0,w,h);return cv});
 return{clips:meta.clips,bytes:meta.bytes};
}
/* Called by the engine after the level's own prepare. Shared across runs; failures leave the old effects in place. */
async function prepare(run){
 if(!enabled()){run.artFx=null;return null}
 try{loading??=load();art=await loading;run.artFx=art;return art}
 catch(err){loading=null;run.warn?.('effect art: '+err.message);run.artFx=null;return null}
}
function frameOf(clip,t){const n=clip.frames.length,i=Math.floor(t*clip.fps);return clip.loop?clip.frames[((i%n)+n)%n]:i<n?clip.frames[i]:null}
function blit(c,f,x,y,w,h){c.drawImage(f,x,y,w,h)}

/* fx: the engine's FX instance. opt: {scale, dir, delay, alpha, rot, flipY} */
function spawn(fx,name,x,y,opt={}){
 if(!art||!fx.run?.artFx||fx.reduced)return false;const clip=art.clips[name];if(!clip)return false;
 const list=fx.sprites??=[];if(list.length>=MAX)list.shift();
 list.push({clip,x,y,t:-(opt.delay||0),scale:opt.scale||1,dir:opt.dir||1,alpha:opt.alpha??1,rot:opt.rot||0,tint:opt.tint??TINTS[name]});return true;
}
function update(fx,dt){if(!fx.sprites?.length)return;for(const s of fx.sprites)s.t+=dt;fx.sprites=fx.sprites.filter(s=>s.t<s.clip.frames.length/s.clip.fps)}
function draw(fx,c){
 if(!art||!fx.sprites?.length)return;
 for(const s of fx.sprites){if(s.t<0)continue;const f=frameOf(s.clip,s.t);if(!f)continue;
  const [ww,wh]=s.clip.world,w=ww*s.scale,h=wh*s.scale,[ax,ay]=s.clip.anchor,fade=Math.min(1,(s.clip.frames.length/s.clip.fps-s.t)*6);
  const life=s.clip.frames.length/s.clip.fps,t=typeof s.tint==='function'?s.tint(Math.min(1,s.t/life)):s.tint;
  c.save();c.globalAlpha*=s.alpha*fade;c.translate(s.x,s.y);if(s.rot)c.rotate(s.rot);c.scale(s.dir,1);c.imageSmoothingEnabled=true;if(t)tinted(c,f,-ax*w,-ay*h,w,h,t);else blit(c,f,-ax*w,-ay*h,w,h);c.restore()}
}
/* Spinning gold coin at (x, y) = its centre. Returns false when the art is not available (caller draws the old coin). */
function coin(run,c,x,y,alpha=1,phase=0){
 if(!art||!run.artFx)return false;const clip=art.clips.coin;const f=run.fx.reduced?clip.frames[0]:frameOf(clip,run.time+phase*.013);
 const [w,h]=clip.world,a0=c.globalAlpha,sm=c.imageSmoothingEnabled;c.globalAlpha=a0*alpha;c.imageSmoothingEnabled=true;   // no save/restore: levels draw a hundred coins
 blit(c,f,x-w/2,y-h/2,w,h);c.globalAlpha=a0;c.imageSmoothingEnabled=sm;return true;
}
/* Treasure presentation: secret and big chests twinkle with the Ruins star sparkle until opened, and release a short
 * rising burst of sparkles when they open (the coins themselves are the engine's real, collectable drops). */
function chest(run,c,ch,w,h){
 if(!art||!run.artFx)return;const clip=art.clips.sparkle;if(!clip)return;const f=clip.frames[0],[sw,sh]=clip.world,t=run.time,a0=c.globalAlpha;
 if(!ch.open&&(ch.secret||ch.big)&&!run.fx.reduced){
  for(let i=0;i<3;i++){const ph=(t*1.3+i*.37+ch.x*.001)%1,k=Math.sin(Math.PI*ph);if(k<.05)continue;
   const x=ch.x+[-.42,.38,.05][i]*w,y=ch.y-h*[.85,.65,1.15][i]-ph*10,s=.45+.55*k;c.globalAlpha=a0*k*.95;c.drawImage(f,x-sw*s/2,y-sh*s/2,sw*s,sh*s)}}
 else if(ch.open&&ch.openT<1&&(ch.secret||ch.big)){
  for(let i=0;i<6;i++){const u=ch.openT,ang=-Math.PI/2+(i-2.5)*.42,d=20+u*70,s=(1-u)*.9;if(s<=0)continue;
   c.globalAlpha=a0*(1-u);c.drawImage(f,ch.x+Math.cos(ang)*d-sw*s/2,ch.y-h*.6+Math.sin(ang)*d-sh*s/2,sw*s,sh*s)}}
 c.globalAlpha=a0;
}
window.PirateArtFx={prepare,spawn,update,draw,coin,chest,enabled,stats:()=>({loaded:!!art,bytes:art?.bytes||0}),
 reset(){art=null;loading=null}};
})();
