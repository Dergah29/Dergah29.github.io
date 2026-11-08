/* Two-lap course extension. All moving/support/gate state is authoritative. */
(function(root){'use strict';
const DT=1/60,gateClosed=t=>t%6<2;
function init(s){s.race=[0,1].map(()=>({checkpoint:false,checkpoints:0,setbacks:0,lapStarted:0,lastLap:null,bestLap:null,checkpointAt:-10}));s.bridgeUntil=0;s.players.forEach(p=>p.x=65);s.platforms=[{x:300,y:490,w:180,base:300,kind:'moving',solid:true},{x:520,y:425,w:200,kind:'crumble',solid:true,stoodAt:null,hiddenUntil:0},{x:800,y:490,w:180,base:800,kind:'moving',solid:true}];s.raceGate={x:790,top:505,closed:true,warning:false}}
function before(s){s.raceGate.closed=gateClosed(s.time);s.raceGate.warning=s.time%6>=5.1;
 for(const b of s.platforms){if(b.kind==='moving'){const old=b.x;b.x=b.base+Math.sin(s.time*1.7)*55;for(let i=0;i<2;i++){const p=s.players[i];if((!s.practice||i===0)&&Math.abs(p.y-b.y)<.1&&p.x>old-10&&p.x<old+b.w+10)p.x+=b.x-old}}
 else{if(!b.solid&&s.time>=b.hiddenUntil){b.solid=true;b.stoodAt=null}if(!b.solid)continue;const occupied=s.players.some((p,i)=>(!s.practice||i===0)&&Math.abs(p.y-b.y)<.1&&p.x>b.x-10&&p.x<b.x+b.w+10);if(occupied&&b.stoodAt===null)b.stoodAt=s.time;if(b.stoodAt!==null&&s.time-b.stoodAt>=.65){b.solid=false;b.hiddenUntil=s.time+3;b.stoodAt=null}}}
}
function bot(s,p){const hazard=[330,930].some(x=>x>p.x&&x-p.x<105),gate=(s.raceGate.closed||s.raceGate.warning)&&s.raceGate.x>p.x&&s.raceGate.x-p.x<115;return{right:true,jump:(hazard||gate)&&!p.jumpHeld&&p.vy===0,dash:!hazard&&!gate&&p.cool===0,interact:Math.abs(p.x-180)<35&&Math.abs(p.y-580)<32&&!p.interactHeld}}
function after(s,inputs){for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i],q=s.race[i],a=inputs[i];if(a.interact&&!p.interactHeld&&Math.abs(p.x-180)<40&&Math.abs(p.y-580)<32)s.bridgeUntil=s.time+6;p.interactHeld=!!a.interact;
 if(s.raceGate.closed&&p.y>s.raceGate.top&&p.x>770&&p.x<814)p.x=p.x<792?770:814;
 if(p.x>600&&p.x<700&&!q.checkpoint){q.checkpoint=true;q.checkpoints++;q.checkpointAt=s.time}
 const hit=[330,930].some(x=>Math.abs(p.x-x)<38&&p.y>548&&s.time%3<1.1&&!(x===330&&s.bridgeUntil>s.time));if(hit&&p.inv<=0){p.x=q.checkpoint?660:65;p.y=580;p.vy=0;p.inv=1.2;q.setbacks++}
 if(p.x>1190&&q.checkpoint){p.score++;q.checkpoint=false;q.lastLap=s.time-q.lapStarted;q.bestLap=q.bestLap===null?q.lastLap:Math.min(q.bestLap,q.lastLap);q.lapStarted=s.time;p.x=65;p.y=580;p.vy=0}
 }
 const wins=s.players.map((p,i)=>p.score>=2&&(!s.practice||i===0));if(wins.some(Boolean)){s.done=true;s.winner=wins[0]&&wins[1]?-1:wins[0]?0:1}
 if(s.time>=150&&!s.done){const a=s.players[0],b=s.players[1],x=a.score*1280+a.x,y=b.score*1280+b.x;s.done=true;s.winner=s.practice?0:x===y?-1:x>y?0:1}
}
const api={init,before,bot,after,gateClosed};if(typeof module!=='undefined')module.exports=api;root.PirateArenaRace=api;
})(typeof window!=='undefined'?window:globalThis);
