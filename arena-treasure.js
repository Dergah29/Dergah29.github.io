/* Existing Treasure Rush extension: deterministic chambers, cargo and interception. */
(function(root){'use strict';const DT=1/60;
function init(s){if(s.mode!=='treasure')return;s.shipments=[23,53].map(start=>({x:605,y:580,start,end:start+12,value:6,progress:0,claim:null,claimedBy:null,contested:false}));s.platforms=[{x:100,y:535,w:105},{x:225,y:490,w:205},{x:510,y:420,w:260},{x:850,y:490,w:205},{x:1070,y:535,w:105}];s.vaults=[{x:330,y:490,value:4,locked:false},{x:640,y:420,value:8,locked:true},{x:950,y:490,value:4,locked:false}].map(v=>({...v,progress:0,claim:null,contested:false,availableAt:0,openedAt:-10,openedBy:null}));for(const p of s.players)Object.assign(p,{bankTrips:0,chestsOpened:0,steals:0,shipmentsWon:0,stealReadyAt:0,treasureInteractHeld:false,vaultPlanTrip:-1,vaultTarget:null,vaultCompletedTrip:-1})}
function before(s){if(s.mode!=='treasure')return;for(const c of s.coins)if(!c.active&&c.respawnAt!==undefined&&s.time>=c.respawnAt)c.active=true}
function speed(p){return 1/(1+Math.min(12,p.carry)*.045)}
function near(p,v){return Math.abs(p.x-v.x)<44&&Math.abs(p.y-v.y)<32}
function target(s,p){const shipment=s.shipments?.find(v=>s.time>=v.start&&s.time<v.end-2&&v.claimedBy===null);if(shipment&&p.carry<4)return{x:shipment.x,y:shipment.y};const other=s.players[p===s.players[0]?1:0];if(other.carry>=4&&p.carry<3&&Math.abs(other.x-p.x)<240&&p.stealReadyAt<=s.time&&other.inv<=0)return{x:other.x,y:other.y};const centerPlan=p.shipmentsWon>0&&s.vaults[1].openedBy===null&&(p.carry<3||p.centerPlanTrip===p.bankTrips);if(centerPlan){p.centerPlanTrip=p.bankTrips;p.vaultTarget=1;p.vaultPlanTrip=p.bankTrips}if(!centerPlan&&(p.bankTrips%2!==1||p.carry>=8||p.vaultCompletedTrip===p.bankTrips))return null;let best=s.vaults[p.vaultTarget];if(p.vaultPlanTrip!==p.bankTrips||!best||best.availableAt>s.time){best=null;let distance=Infinity;for(const [i,v]of s.vaults.entries()){if(v.availableAt>s.time)continue;const d=(Math.abs(v.x-p.x)+(v.locked?200:0))/v.value;if(d<distance){best=v;distance=d;p.vaultTarget=i}}p.vaultPlanTrip=p.bankTrips}if(!best)return null;if(best.locked&&s.gateUntil<=s.time+(near(p,best)?Math.max(.1,1.65-best.progress):1.8))return{x:430,y:580};return best}
function botInteract(s,p){if(s.shipments?.some(v=>s.time>=v.start&&s.time<v.end&&v.claimedBy===null&&near(p,v)))return true;const other=s.players[p===s.players[0]?1:0];if(other.carry>0&&Math.abs(other.x-p.x)<65&&Math.abs(other.y-p.y)<55&&p.stealReadyAt<=s.time&&other.inv<=0&&!p.treasureInteractHeld)return true;return s.vaults.some(v=>v.availableAt<=s.time&&near(p,v))||Math.abs(p.x-430)<55&&Math.abs(p.y-580)<45&&s.gateUntil<=s.time+2&&!p.interactHeld}
function after(s,inputs){if(s.mode!=='treasure')return;
 const [a,b]=s.players,close=Math.abs(a.x-b.x)<65&&Math.abs(a.y-b.y)<55;
 const can=(i,p,o)=>!s.practice&&close&&inputs[i].interact&&!p.treasureInteractHeld&&p.stealReadyAt<=s.time&&o.inv<=0;
 // Resolve against pre-transfer cargo: simultaneous attempts conserve cargo
 // and cannot steal the opponent's newly stolen cargo again in the same tick.
 const takeA=can(0,a,b)?Math.min(3,b.carry):0,takeB=can(1,b,a)?Math.min(3,a.carry):0;
 a.carry+=takeA-takeB;b.carry+=takeB-takeA;
 if(takeA){a.steals++;a.stealReadyAt=s.time+2.2;b.inv=Math.max(b.inv,.45)}if(takeB){b.steals++;b.stealReadyAt=s.time+2.2;a.inv=Math.max(a.inv,.45)}
 for(const v of s.vaults){if(v.availableAt>s.time){v.progress=0;v.contested=false;continue}const aa=!!inputs[0].interact&&near(a,v),bb=!s.practice&&!!inputs[1].interact&&near(b,v);v.contested=aa&&bb;if(v.contested)continue;
  const i=aa?0:bb?1:null;if(i===null||v.locked&&s.gateUntil<=s.time){v.progress=Math.max(0,v.progress-DT*.8);if(!v.progress)v.claim=null;continue}
  if(v.claim!==i){v.claim=i;v.progress=0}v.progress+=DT;
  if(v.progress>=(v.locked?1.6:1.1)){const p=s.players[i];p.carry+=v.value;p.chestsOpened++;p.vaultCompletedTrip=p.bankTrips;v.openedBy=i;v.openedAt=s.time;v.availableAt=s.time+22;v.progress=0;v.claim=null}
 }
 // Public timed shipment: safe bank now, or expose yourself for six cargo.
 for(const v of s.shipments||[]){
  if(s.time<v.start||s.time>=v.end||v.claimedBy!==null){v.progress=0;v.contested=false;continue}
  const holds=s.players.map((p,i)=>!(s.practice&&i===1)&&!!inputs[i].interact&&near(p,v));
  v.contested=holds[0]&&holds[1];if(v.contested)continue;
  const seat=holds[0]?0:holds[1]?1:null;
  if(seat===null){v.progress=0;v.claim=null;continue}
  if(v.claim!==seat){v.claim=seat;v.progress=0}v.progress+=DT;
  if(v.progress>=1.8){v.claimedBy=seat;v.progress=0;s.players[seat].carry+=v.value;s.players[seat].shipmentsWon++}
 }
 for(let i=0;i<2;i++)s.players[i].treasureInteractHeld=!!inputs[i].interact;
}
const api={init,before,after,speed,target,botInteract};if(typeof module!=='undefined')module.exports=api;else root.PirateArenaTreasure=api;
})(typeof window!=='undefined'?window:globalThis);
