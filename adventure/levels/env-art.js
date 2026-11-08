/* Pirate Strike — illustrated ground and prop sets for Adventure levels (window.PirateEnvArt).
 *
 * A level declares sets: {atlas, ranges:[[x0,x1]], styles:[solid styles], tops:[cap tiles], fills?, depth:[mid,deep],
 * stones:[big,small], props:[[key, x, dy?]]}. Atlases are built by tools/env_atlas.py from the original archives
 * (graded, resampled) and load lazily in the level's prepare. paintTiles() replaces the painting of matching solids
 * (geometry untouched; the engine caches terrain in chunks so it is painted once); drawProps() draws path props
 * behind the actors, standing on the real ground. Everything falls back to the level's own art when the atlas is
 * missing or the player turns it off (?envArt=0, or localStorage 'ps-env-art' / 'ps-env-pilot' = '0').
 */
(()=>{'use strict';
if(window.PirateEnvArt)return;
const TAU=Math.PI*2;
function enabled(){try{const q=new URLSearchParams(location.search);return q.get('envArt')!=='0'&&q.get('envPilot')!=='0'&&localStorage.getItem('ps-env-art')!=='0'&&localStorage.getItem('ps-env-pilot')!=='0'}catch{return true}}
async function loadSet(name,set){
 const meta=await fetch(set.atlas+'.json').then(r=>{if(!r.ok)throw Error(name+' HTTP '+r.status);return r.json()});
 const img=new Image();img.src=set.atlas+'.webp';await img.decode();
 // the walkable top of the cap: first opaque row of the cap tile, so the stones sit exactly on the floor line
 let top=0;const it=set.tops&&meta.items[set.tops[0]];
 if(it){const cv=document.createElement('canvas');cv.width=it.rect[2];cv.height=it.rect[3];const x=cv.getContext('2d');x.drawImage(img,-it.rect[0],-it.rect[1]);
  const a=x.getImageData(cv.width>>1,0,1,cv.height).data;while(top<cv.height&&a[top*4+3]<128)top++}
 // props are drawn every frame: give each its own small canvas (sub-rects of a big page are slow on some canvases)
 const items={};for(const [k,v] of Object.entries(meta.items)){const c=document.createElement('canvas');c.width=v.rect[2];c.height=v.rect[3];c.getContext('2d').drawImage(img,v.rect[0],v.rect[1],v.rect[2],v.rect[3],0,0,v.rect[2],v.rect[3]);items[k]={...v,cv:c}}
 return{...set,name,items,cap:top/meta.scale,bytes:Object.values(items).reduce((n,v)=>n+v.rect[2]*v.rect[3]*4,0)};   // the page image is dropped after slicing
}
/* Load a level's sets. Returns {sets, bytes} or null (art off or failed — the caller keeps its own drawing). */
async function load(run,sets){
 if(!enabled())return null;
 try{const list=await Promise.all(Object.entries(sets).map(([n,s])=>loadSet(n,s)));return{sets:list,bytes:list.reduce((n,s)=>n+s.bytes,0)}}
 catch(err){run.warn?.('environment art: '+err.message);return null}
}
const setFor=(env,s)=>env?.sets.find(t=>t.tops&&(!t.styles||t.styles.includes(s.style))&&t.ranges.some(([a,b])=>s.x>=a&&s.x+s.w<=b));
function item(set,c,key,x,y,w,h){const it=set.items[key];if(!it)return;c.drawImage(it.cv,x,y,w??it.world[0],h??it.world[1])}
function paintTiles(run,c,s,set,L,R,T,B){
 const T0=set.tile||64,n=Math.max(2,Math.round(s.w/T0)),tw=s.w/n,y0=s.y-set.cap,bottom=Math.min(s.y+s.h,B+40),rows=Math.ceil((bottom-y0)/T0),fills=set.fills||['fill'];
 const edgeL=set.edges!==false&&!(set.joinLeft?.(s)),edgeR=set.edges!==false&&!(set.joinRight?.(s));
 c.save();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 for(let i=0;i<n;i++){const x=s.x+i*tw;if(x+tw<L-8||x>R+8)continue;
  for(let r=0;r<rows;r++){const y=y0+r*T0;if(y>B+40||y+T0<T-40)continue;
   const left=i===0&&edgeL,right=i===n-1&&edgeR;
   const key=r===0?(left?'top_left':right?'top_right':set.tops[(i*5+3)%set.tops.length]):(left?'side_left':right?'side_right':fills[(i*7+r*3)%fills.length]);
   item(set,c,key,Math.floor(x),Math.floor(y),Math.ceil(tw)+1,T0+1)}}
 // depth: the ground darkens and cools with depth so the repeating fill never reads as a flat grid
 c.globalCompositeOperation='source-atop';const g=c.createLinearGradient(0,s.y+T0*.8,0,s.y+T0*5);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.55,set.depth[0]);g.addColorStop(1,set.depth[1]);
 c.fillStyle=g;c.fillRect(s.x,s.y+T0*.8,s.w,Math.max(0,bottom-s.y));c.globalCompositeOperation='source-over';
 // a few stones set into the ground below the cap (fixed positions; the chunk cache paints them once)
 if(set.stones){c.globalAlpha=.55;for(let x=s.x+70;x<s.x+s.w-60;x+=137){const k=(x*31)%5;if(k>2)continue;const y=s.y+46+k*34;if(x<L-60||x>R+60)continue;item(set,c,k?set.stones[1]:set.stones[0],x,y,k?24:40,k?16:24)}}
 c.restore();return true;
}
function groundAt(run,x,dflt){let y=Infinity;for(const s of run.solids)if(x>=s.x&&x<=s.x+s.w&&s.style!=='gate'&&s.y<y)y=s.y;return y===Infinity?dflt:y}
/* Props stand on the topmost solid under them (or `dflt`). opts.glow: {key: [dx frac, dy frac, radius]} lit props. */
function drawProps(run,c,env,opts={}){
 const cam=run.camera,W=window.PirateLevelEngine?.W||960;
 for(const set of env.sets)for(const [key,x,dy=0] of set.props||[]){const it=set.items[key];if(!it)continue;const [w,h]=it.world;if(x+w<cam.x-60||x-w>cam.x+W+60)continue;
  const g=groundAt(run,x,opts.ground??700),y=g+dy-h+3;if(!dy){c.fillStyle='rgba(20,14,8,.28)';c.beginPath();c.ellipse(x,g+3,w*.46,5,0,0,TAU);c.fill()}
  item(set,c,key,x-w/2,y,w,h);
  const gl=(set.glow||{})[key];if(gl&&run.fx.on)run.fx.glow(c,x+gl[0]*w,y+gl[1]*h,gl[2],'rgba(255,214,140,',.38+.06*Math.sin(run.time*3.1+x))}
}
window.PirateEnvArt={load,setFor,paintTiles,drawProps,groundAt,enabled};
})();
