/* Full-character frame atlases used by the illustrated Level 1 pirate cast. */
(()=>{'use strict';
if(window.PirateLevelEnemySprites)return;
const cache=new Map(),TAU=Math.PI*2;
const ALIASES={
 idle:'idle',walk:'walk',run:'walk',hurt:'hurt',dead:'death',
 windup:'windup',strike:'attack',lunge:'lunge',aim:'aim',release:'fire',
 reload:'reload',throw:'throw',recover:'recover',slamWind:'slamWind',slam:'slam'
};
async function load(base){
 if(cache.has(base))return cache.get(base);
 const pending=(async()=>{
  const res=await fetch(base+'manifest.json');if(!res.ok)throw Error('illustrated enemy manifest HTTP '+res.status);
  const manifest=await res.json();if(manifest.version!==1||!manifest.characters)throw Error('invalid illustrated enemy manifest');
  const entries=await Promise.all(Object.entries(manifest.characters).map(async([name,file])=>{
   const r=await fetch(base+file);if(!r.ok)throw Error('illustrated enemy metadata HTTP '+r.status);
   const meta=await r.json(),im=new Image();im.src=base+meta.image;
   await new Promise((ok,fail)=>{if(im.complete&&im.naturalWidth)return ok();im.onload=ok;im.onerror=()=>fail(Error('illustrated enemy atlas '+meta.image))});
   if(meta.version!==1||!Array.isArray(meta.frames)||!meta.animations||!meta.frameWidth||!meta.frameHeight||!meta.worldHeight||!meta.artHeight||!meta.anchor)throw Error('invalid illustrated enemy atlas '+name);
   return[name,{meta,img:im}];
  }));
  return new Map(entries);
 })();
 cache.set(base,pending);
 try{return await pending}catch(e){cache.delete(base);throw e}
}
function frameIndex(meta,anim,elapsed){
 const name=ALIASES[anim]||anim,clip=meta.animations[name]||meta.animations.idle;
 if(!clip||!clip.frames?.length)return-1;
 const step=Math.max(0,Math.floor(Math.max(0,elapsed||0)*(clip.fps||1)));
 const n=clip.loop===false?Math.min(step,clip.frames.length-1):step%clip.frames.length;
 return clip.frames[n];
}
function draw(ctx,cast,e){
 const {meta,img}=cast,elapsed=e.dead?e.deadT:e.animT,index=frameIndex(meta,e.dead?'dead':e.anim,elapsed),f=meta.frames[index];
 if(!f)return null;
 const s=meta.worldHeight/meta.artHeight,dir=e.dir<0?-1:1,ax=meta.anchor[0],ay=meta.anchor[1];
 const [sx,sy,sw,sh]=f.rect,[ox,oy]=f.offset;
 const dx=(ox-ax)*s,dy=(oy-ay)*s,dw=sw*s,dh=sh*s;
 ctx.save();ctx.translate(e.cx,e.floor);ctx.scale(dir,1);
 ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
 ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
 if(e.flash>0){ctx.globalAlpha=Math.min(.85,e.flash*5);ctx.filter='brightness(0) invert(1)';ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);ctx.filter='none'}
 ctx.restore();
 const points=meta.points?.[index]||{},anchors={};
 for(const[name,p]of Object.entries(points))anchors[name]={x:e.cx+dir*(p[0]-ax)*s,y:e.floor+(p[1]-ay)*s};
 e.spriteAnchors=anchors;
 return{top:e.floor+(oy-ay)*s,frame:index,anchors};
}
window.PirateLevelEnemySprites={load,draw,frameIndex,cache};
})();
