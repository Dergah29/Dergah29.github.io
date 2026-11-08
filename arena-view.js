/* Render-only shared objective framing. CSS pixels in, world projection out. */
(function(root){'use strict';
function frame(width,height,players,practice,mode){
 const cannon=mode==='cannon',bodyScale=cannon?.44:.68;
 let top=580,bottom=580,left=Infinity,right=-Infinity;
 for(let i=0;i<players.length;i++){const p=players[i];if(p.hp<=0||practice&&i!==0)continue;top=Math.min(top,p.y-(p.carry?214:p.carryFlag!=null?234:cannon?136:190));bottom=Math.max(bottom,p.y);left=Math.min(left,p.x);right=Math.max(right,p.x)}
 const span=cannon&&Number.isFinite(left)?Math.max(880,right-left+200):1408;
 const scale=Math.min(width/span,Math.max(1,height-38)/Math.max(190,bottom-top));
 const viewWidth=width/scale,center=cannon&&Number.isFinite(left)?Math.max(viewWidth/2-64,Math.min(1344-viewWidth/2,(left+right)/2)):640;
 return{scale,bodyScale,left:center-viewWidth/2,top:bottom-(height-20)/scale};
}
const api={frame};if(typeof module!=='undefined')module.exports=api;else root.PirateArenaView=api;
})(typeof window!=='undefined'?window:globalThis);
