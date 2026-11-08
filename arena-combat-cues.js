/* Read-only native animation cues. Caller supplies a reusable output record. */
(function(root){'use strict';
function clock(record,nativeTime,wallTime,replica,paused){
 const previous=record.presentationNow;record.presentationNow=wallTime;
 if(!replica)return record.presentationTime=nativeTime;
 if(record.presentationTime===undefined)record.presentationTime=nativeTime;
 if(!paused&&previous!==undefined)record.presentationTime+=Math.max(0,Math.min(.1,wallTime-previous));
 return record.presentationTime;
}
function sample(pose,phase,age,out,options){
 out.anticipation=out.stroke=out.trail=out.guard=out.hurt=out.contact=out.sweep=0;
 if(options.enabled===false)return out;
 if(options.reduced){if(pose==='block')out.guard=.2;return out}
 phase=Math.max(0,Math.min(1,phase));age=Math.max(0,age);
 if(/^attack[ABC]$/.test(pose)){
  // The original four-frame native attacks accept hits on Sprite frame1.
  // Frame/count never reaches1: its final displayed phase is3/4.
  const count=options.frameCount||4,index=Math.min(count-1,Math.floor(phase*count+1e-7));
  out.sweep=pose==='attackA'?1:pose==='attackB'?2:3;
  out.anticipation=index===0?.25:0;
  out.stroke=index===1?1:index===2?.2:0;
 }
 // Native dash attacks have one frame. Do not invent a pre-hit windup.
 if(pose==='dashAttack')out.stroke=.85*Math.max(0,1-age/.18);
 if(pose==='dash'||pose==='dashAttack')out.trail=.55*Math.max(0,1-age/.35);
 if(pose==='block')out.guard=.18+.35*Math.max(0,1-age/.22);
 if(pose==='hurt')out.hurt=.7*Math.max(0,1-age/.16);
 if(pose==='hurt'||pose==='land')out.contact=Math.max(0,1-age/.18);
 return out;
}
const api={sample,clock};if(typeof module!=='undefined')module.exports=api;root.PirateArenaCombatCues=api;
})(typeof window!=='undefined'?window:globalThis);
