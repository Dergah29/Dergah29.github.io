/* Public tactical geometry/navigation and bounded mechanisms; existing scores stay in objectives. */
(function(root){'use strict';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function flagInit(s){s.platforms=[{x:200,y:500,w:220},{x:510,y:425,w:260},{x:860,y:500,w:220}];s.baseWardUntil=[0,0];s.baseWardReadyAt=[0,0]}
function controlInit(s){s.platforms=[{x:100,y:520,w:160},{x:430,y:535,w:90},{x:540,y:490,w:200},{x:760,y:535,w:90},{x:1050,y:520,w:130}];s.points.forEach((q,i)=>q.y=i===1?490:580);s.controlPulses=[];s.controlHits=[0,0];s.controlLastFire=-10;s.controlLastDirection=1}
function navigate(s,p,target){target={x:target.x,y:target.y??580};
 if(s.mode==='flag'&&target.y<470&&p.y>520){target={x:p.x<640?330:950,y:500}}
 else if(s.mode==='flag'&&target.y<470&&p.y>=499&&p.vy===0)target={x:p.x<640?530:750,y:425};
 if(target.y>p.y+30&&p.vy===0){const b=s.platforms.find(b=>b.solid!==false&&Math.abs(p.y-b.y)<1&&p.x>b.x-10&&p.x<b.x+b.w+10);if(b)target={x:target.x<b.x+b.w/2?b.x-40:b.x+b.w+40,y:580}}
 const dx=target.x-p.x;return{left:dx< -12,right:dx>12,jump:target.y<p.y-30&&Math.abs(dx)<(p.carryFlag!=null?120:160)&&p.vy===0&&!p.jumpHeld,dash:Math.abs(dx)>220&&p.carryFlag==null&&p.cool===0};
}
function flagInput(s,inputs){for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i],a=inputs[i],x=i?1040:240;if(a.interact&&!p.interactHeld&&s.flags[i].home&&s.baseWardReadyAt[i]<=s.time&&Math.abs(p.x-x)<48&&Math.abs(p.y-580)<32){s.baseWardUntil[i]=s.time+3;s.baseWardReadyAt[i]=s.time+9}}}
function flagBot(s,p){const i=s.players.indexOf(p),o=s.players[1-i],own=s.flags[i],enemy=s.flags[1-i],home=i?1190:90,lever=i?1040:240,threat=own.home&&Math.abs(o.x-home)<350;let target=!own.home?(own.carrier!==null?s.players[own.carrier]:own):p.carryFlag!==null?{x:home,y:580}:enemy;
 if(threat&&p.carryFlag===null&&s.baseWardReadyAt[i]<=s.time)target={x:lever,y:580};const input=navigate(s,p,target);
 // A defender between the carrier and home makes the high escape worth its
 // slower loaded jumps. Read public positions; use the very same controls.
 if(p.carryFlag!==null&&own.home&&(o.x-home)*(p.x-o.x)>0&&Math.abs(o.x-p.x)<600&&p.y>499)Object.assign(input,navigate(s,p,{x:640,y:425}));
 input.interact=!p.interactHeld&&((o.carryFlag===i||p.carryFlag!==null)&&Math.abs(o.x-p.x)<70&&Math.abs(o.y-p.y)<65&&p.tagCool<=0||threat&&Math.abs(p.x-lever)<48&&Math.abs(p.y-580)<32&&s.baseWardReadyAt[i]<=s.time);
 if(p.carryFlag!==null&&Math.abs(o.x-p.x)<130&&Math.abs(o.y-p.y)<65&&!p.jumpHeld&&p.vy===0)input.jump=true;return input;
}
function controlBot(s,p){const i=s.players.indexOf(p),other=1-i,o=s.players[other];const target=s.points.map(q=>({q,value:(q.owner!==i?60:0)+(q.claim===i?20:0)+(q.owner===other?12:0)+(q.owner===i&&q.claim===other?110:0)-(q.contested?20:0)-Math.abs(q.x-p.x)*.025})).sort((a,b)=>b.value-a.value)[0].q,input=navigate(s,p,target),tower=s.points[1];
 const cannon=tower.owner===i&&Math.abs(p.x-tower.x)<45&&Math.abs(p.y-tower.y)<32&&Math.abs(o.x-p.x)<240&&Math.abs(o.y-p.y)<65;
 input.interact=!p.interactHeld&&p.tagCool<=0&&(cannon||Math.abs(o.x-p.x)<85&&Math.abs(o.y-p.y)<65);
 if(s.controlPulses.some(q=>q.side!==i&&q.fireAt>s.time&&Math.abs(p.x-q.x)<240&&Math.abs(p.y-q.y)<65)&&!p.jumpHeld&&p.vy===0)input.jump=true;return input;
}
function controlActivate(s,i){const p=s.players[i],q=s.points[1];if(q.owner!==i||Math.abs(p.x-q.x)>=45||Math.abs(p.y-q.y)>=32)return false;s.controlPulses.push({side:i,x:q.x,y:q.y,dir:s.players[1-i].x>=q.x?1:-1,fireAt:s.time+.6});return true}
function controlAfter(s){s.controlPulses=s.controlPulses.filter(q=>{if(s.points[1].owner!==q.side)return false;if(q.fireAt>s.time)return true;s.controlLastFire=s.time;s.controlLastDirection=q.dir;const i=1-q.side,p=s.players[i];if((!s.practice||i===0)&&(p.x-q.x)*q.dir>=0&&Math.abs(p.x-q.x)<240&&Math.abs(p.y-q.y)<65&&p.inv<=0){p.x=clamp(p.x+(p.x>=q.x?120:-120),30,1250);p.inv=1.2;s.controlHits[q.side]++}return false})}
const api={flagInit,controlInit,navigate,flagInput,flagBot,controlBot,controlActivate,controlAfter};if(typeof module!=='undefined')module.exports=api;root.PirateArenaTerritory=api;
})(typeof window!=='undefined'?window:globalThis);
