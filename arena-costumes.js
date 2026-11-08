/* Complete authored Arena costume motion; shared Adventure art is read-only. */
(function(root){'use strict';
const files={'sailor:outfit-navy':'sailor-navy-motion-v1.webp','crab:outfit-coral':'crab-coral-motion-v1.webp'};
const cache=new Map(); // Two supported identities bound this cache.
const extra={jump:{frames:[24,25,26,27],fps:12},fall:{frames:[27,28],fps:8},land:{frames:[29,30,31],fps:12},block:{frames:[32,33,34,35],fps:10},hurt:{frames:[36,37],fps:12},dash:{frames:[38,39],fps:12},dodge:{frames:[38,39],fps:12},dashAttack:{frames:[40,41,42,43,44],fps:20}};
function scaleFor(meta){const h=meta.bodyHeight;return Number.isFinite(h)&&h>0?210/h:1}
function load(art){
 const key=art.meta.hero+':'+art.meta.outfit,file=files[key];if(!file)return Promise.resolve(null);
 if(!cache.has(key)){
  const task=(async()=>{const image=new Image();image.src='arena-assets/'+file;await image.decode();
   if(image.width!==768||image.height!==2592)throw Error('Invalid authored Arena costume atlas');
   const meta={...art.meta,frameW:192,frameH:216,columns:4,frames:45,anchor:[96,202.5],bodyHeight:157.5,animations:{...art.meta.animations,...extra}};
   delete meta.animationFallbackFor;return{...art,image,meta};
  })().catch(()=>{cache.delete(key);return null});cache.set(key,task);
 }
 return cache.get(key);
}
const api={load,scaleFor};if(typeof module!=='undefined')module.exports=api;root.PirateArenaCostumes=api;
})(typeof window!=='undefined'?window:globalThis);
