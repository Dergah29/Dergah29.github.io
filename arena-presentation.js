/* Arena-only presentation: authored frames, cached painted props, bounded effects.
 * This module never writes gameplay state, hitboxes, storage or rewards. */
(function(root){'use strict';
function animator(){const actors=new Map();return{reset(){actors.clear()},frame(id,pose,meta,time){const a=meta.animations[pose]||meta.animations.idle;let r=actors.get(id);if(!r||r.pose!==pose||time<r.at){r={pose,at:time};actors.set(id,r)}const fps=(/^attack[ABC]$/.test(pose)||pose==='throw')?Math.max(12,a.fps):a.fps;const n=Math.max(0,Math.floor((time-r.at)*fps+1e-7));return a.frames[['death','jump','fall','land','hurt','dash','dodge','dashAttack'].includes(pose)?Math.min(n,a.frames.length-1):n%a.frames.length]}}}
function effects(limit=48){const particles=[];return{get size(){return particles.length},clear(){particles.length=0},burst(x,y,color,time){for(let k=0;k<8;k++){if(particles.length>=limit)particles.shift();const angle=k*Math.PI/4;particles.push({x,y,color,at:time,vx:Math.cos(angle)*65,vy:Math.sin(angle)*50-35})}},advance(time){for(let i=particles.length-1;i>=0;i--)if(time-particles[i].at>.7)particles.splice(i,1)},draw(ctx,time){this.advance(time);for(const p of particles){const dt=Math.max(0,time-p.at);ctx.globalAlpha=Math.max(0,1-dt/.7);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x+p.vx*dt,p.y+p.vy*dt+50*dt*dt,3*(1-dt/.9),0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1}}}
let propsPromise;
function load(){if(!propsPromise){const read=url=>new Promise((ok,no)=>{const image=new Image();image.onload=()=>ok(image);image.onerror=()=>no(Error('Arena dekor atlası yüklənmədi'));image.src=url});propsPromise=Promise.all([read('arena-assets/props-v1.webp'),read('arena-assets/traps-v1.webp')]).then(([p,t])=>{p.traps=t;return p}).catch(e=>{propsPromise=null;throw e})}return propsPromise}
function trap(ctx,props,x,width,active){const image=props.traps,cw=image.width/2;ctx.drawImage(image,active?0:cw,image.height*.24,cw,image.height*.52,x-width/2,546,width,34);ctx.fillStyle=active?'#f19a69':'#e7c973';ctx.fillRect(x-width/2,579,width,2)}
const banners=new Map();
function banner(ctx,x,y,w,h,color,time){let c=banners.get(color);if(!c){c=document.createElement('canvas');c.width=80;c.height=48;const g=c.getContext('2d'),fill=g.createLinearGradient(0,0,0,48);fill.addColorStop(0,color);fill.addColorStop(.5,color);fill.addColorStop(1,'#203f49');g.fillStyle=fill;g.fillRect(0,0,80,48);g.strokeStyle='#e8c98a';g.lineWidth=2;g.strokeRect(1,1,78,46);g.beginPath();g.arc(27,24,10,0,7);g.stroke();g.beginPath();g.moveTo(27,9);g.lineTo(27,39);g.moveTo(12,24);g.lineTo(42,24);g.stroke();banners.set(color,c)}for(let k=0;k<10;k++){const offset=Math.sin(time*4-k*.5)*k*.25;ctx.drawImage(c,k*8,0,8,48,x+k*w/10,y+offset,w/10+.5,h)}}
function prop(ctx,image,index,x,y,w,h,flip=false){if(!image)return;const boxes=[[8,24,410,385],[425,105,410,295],[834,180,420,155],[24,432,380,375],[411,551,443,258],[881,416,346,395],[24,852,372,375],[476,807,294,420],[915,802,294,429]],b=boxes[index];ctx.save();if(flip){ctx.translate(x+w,y);ctx.scale(-1,1);x=0;y=0}ctx.drawImage(image,b[0],b[1],b[2],b[3],x,y,w,h);ctx.restore()}
const enhanced=new WeakMap();
async function enhance(art){
 if(!['sailor','captain','shark','crab'].includes(art.meta.hero))return art;
 if(art.meta.outfit&&art.meta.outfit!=='outfit-classic'){
  const authored=await root.PirateArenaCostumes?.load(art);if(authored)return authored;
  const required=['idle','run','jump','fall','land','attackA','dash','dashAttack','block','hurt','death','victory'];
  if(required.every(k=>(art.meta.animations[k]?.frames.length||0)>1))return art;
  const base=await root.PirateHeroes.loadIllustration(art.meta.hero,{outfit:'outfit-classic'}),full=await enhance(base);
  return{...full,meta:{...full.meta,animationFallbackFor:art.meta.outfit}};
 }
 let task=enhanced.get(art.image);if(task)return task;
 task=(async()=>{const image=new Image();image.src='arena-assets/'+art.meta.hero+'-supplements-v4.webp';await image.decode();if(image.width!==1024||image.height!==1728)throw Error('Invalid Classic supplemental atlas');const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=3456;const ctx=canvas.getContext('2d');ctx.drawImage(art.image,0,0);ctx.drawImage(image,0,1728);
 const animations=Object.assign({},art.meta.animations,{jump:{frames:[24,25,26,27],fps:12},fall:{frames:[27,28],fps:8},land:{frames:[29,30,31],fps:12},block:{frames:[32,33,34,35],fps:10},hurt:{frames:[36,37],fps:12},dash:{frames:[38,39],fps:12},dodge:{frames:[38,39],fps:12},dashAttack:{frames:[40,41,42,43,44],fps:20}});const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Arena atlas encoding failed')),'image/png'));
 const url=URL.createObjectURL(blob),packed=new Image();try{packed.src=url;await packed.decode()}finally{URL.revokeObjectURL(url)}
 canvas.width=canvas.height=0;
 return{...art,image:packed,meta:{...art.meta,frames:45,animations}}})();enhanced.set(art.image,task);task.catch(()=>enhanced.delete(art.image));return task;
}
const api={animator,effects,load,prop,trap,banner,enhance};if(typeof module!=='undefined')module.exports=api;else root.PirateArenaPresentation=api;
})(typeof window!=='undefined'?window:globalThis);
