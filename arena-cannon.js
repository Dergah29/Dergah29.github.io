/* Authored public salvos, timber cover and equal-rule defensive mechanisms. */
(function(root){'use strict';
const patterns=[[550],[450],[360],[550,360]],defenses=[{x:330,y:490},{x:950,y:490}];
function init(s){if(s.mode!=='cannon')return;s.covers=[390,890].map(x=>({x,hp:3,repairAt:0,lastHit:-10}));s.lastFire=-10;for(const p of s.players){p.wardUntil=0;p.wardReadyAt=0;p.blocks=0}}
function input(s,inputs){if(s.mode!=='cannon')return;for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i],a=inputs[i];if(a.interact&&!p.interactHeld&&p.wardReadyAt<=s.time&&defenses.some(d=>Math.abs(d.x-p.x)<45&&Math.abs(d.y-p.y)<32)){p.wardUntil=s.time+2.4;p.wardReadyAt=s.time+9}p.interactHeld=!!a.interact}}
function bot(s,p){if(s.practice||p.hp<=0)return{};const lanes=s.warning?.lanes||[],low=lanes.includes(550)||s.shots.some(b=>b.y===550&&Math.abs(b.x-p.x)<300),ledge=p.x<640?330:950;let target={x:650,y:580};if(low)target={x:ledge,y:490};const dx=target.x-p.x,near=Math.abs(dx)<14;return{left:!near&&dx<0,right:!near&&dx>0,jump:target.y<p.y-30&&Math.abs(dx)<190&&!p.jumpHeld&&p.vy===0,interact:!p.interactHeld&&p.wardReadyAt<=s.time&&defenses.some(d=>Math.abs(d.x-p.x)<45&&Math.abs(d.y-p.y)<32)&&!!(s.warning||s.shots.length)}}
function after(s,hit){
 for(const cover of s.covers)if(cover.hp===0&&s.time>=cover.repairAt){cover.hp=3;cover.repairAt=0}
 if(!s.warning&&s.time>=s.nextSalvo){const n=s.salvos,lanes=patterns[n%patterns.length].slice();s.warning={y:lanes[0],lanes,from:n%2?'right':'left',fire:s.time+1.2};s.salvos++}
 if(s.warning&&s.time>=s.warning.fire){const w=s.warning;s.lastFire=s.time;s.lastFireFrom=w.from;s.lastFireLanes=w.lanes.slice();for(const y of w.lanes)for(let k=0;k<3;k++)s.shots.push({x:w.from==='left'?-30-k*150:1310+k*150,y,vx:w.from==='left'?350+s.salvos*4:-350-s.salvos*4,life:6,firedAt:s.time});s.warning=null;s.nextSalvo=s.time+Math.max(.9,2.8-s.salvos*.05)}
 for(const shot of s.shots){const old=shot.x;shot.x+=shot.vx/60;shot.life-=1/60;
  const cover=shot.y>520?s.covers.find(c=>c.hp>0&&Math.min(old,shot.x)<=c.x+32&&Math.max(old,shot.x)>=c.x-32):null;
  if(cover){cover.hp--;cover.lastHit=s.time;if(!cover.hp)cover.repairAt=s.time+12;shot.life=0;continue}
  for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i];if(p.hp<=0||Math.abs(shot.x-p.x)>=26||Math.abs(shot.y-(p.y-32))>=32)continue;if(p.wardUntil>s.time){p.blocks++;shot.life=0;break}hit(s,p)}
 }
 s.shots=s.shots.filter(b=>b.life>0&&b.x>-500&&b.x<1780);
 if(!s.practice&&(s.players[0].hp===0||s.players[1].hp===0)){s.done=true;s.winner=s.players[0].hp===s.players[1].hp?-1:s.players[0].hp>0?0:1}
 if(s.practice&&s.players[0].hp===0){s.done=true;s.winner=1}
}
const api={init,input,bot,after,defenses};if(typeof module!=='undefined')module.exports=api;root.PirateArenaCannon=api;
})(typeof window!=='undefined'?window:globalThis);
