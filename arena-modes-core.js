/* Objective Arena: deterministic60Hz simulation. No DOM, storage or network. */
(function(root){'use strict';
const Extra=typeof module!=='undefined'?require('./arena-objectives.js'):root.PirateArenaObjectives;
const Treasure=typeof module!=='undefined'?require('./arena-treasure.js'):root.PirateArenaTreasure;
const Cannon=typeof module!=='undefined'?require('./arena-cannon.js'):root.PirateArenaCannon;
const DT=1/60,GROUND=580,MODES=['treasure','cannon'];
const STATS={sailor:{speed:245,jump:520,dash:560},captain:{speed:225,jump:510,dash:590},shark:{speed:235,jump:495,dash:620},crab:{speed:215,jump:540,dash:570}};
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function create(mode,hero='sailor',practice=false){if(!MODES.includes(mode)&&!Extra?.has(mode))throw Error('Unavailable Arena mode');const s={mode,practice,time:0,done:false,winner:null,gateUntil:0,salvos:0,nextSalvo:2,warning:null,shots:[],players:[hero,'captain'].map((hero,i)=>({hero,x:i?1150:65,y:GROUND,vy:0,dir:i?-1:1,hp:3,score:0,carry:0,inv:0,cool:0,dash:0,jumpHeld:false,interactHeld:false,distance:0,pose:'idle',lastHit:-10})),coins:Array.from({length:15},(_,i)=>({id:i,x:140+i*70,y:i%3===1?420:GROUND,value:i%3===1?3:1,active:true})),platforms:[{x:240,y:490,w:180},{x:520,y:420,w:240},{x:860,y:490,w:180}]};Extra?.init(s);Treasure.init(s);Cannon.init(s);return s;}
function hit(s,p){if(p.inv>0||s.done)return;p.hp=Math.max(0,p.hp-1);p.carry=0;p.inv=1.5;p.lastHit=s.time;p.pose='hurt';if(s.mode==='treasure'){p.hp=3;p.x=p===s.players[0]?65:1150;p.y=GROUND;p.vy=0}}
function bot(s,p){if(s.mode==='cannon')return Cannon.bot(s,p);if(Extra?.has(s.mode))return Extra.bot(s,p);if(s.practice||p.hp<=0)return{};let target;
 if(s.mode==='treasure'){
  target=p.carry>=3||s.time>85?{x:1150,y:GROUND}:s.coins.filter(c=>c.active).sort((a,b)=>(Math.abs(a.x-p.x)+Math.abs(a.y-p.y)*.4)/(a.value)-(Math.abs(b.x-p.x)+Math.abs(b.y-p.y)*.4)/b.value)[0];
  if(s.time<85)target=Treasure.target(s,p)||target;
  if(!target)target={x:1150,y:GROUND};
 }else{
  // Read the same public warning and shot positions as the human.
  const threat=s.shots.find(b=>Math.abs(b.y-(p.y-32))<55&&Math.abs(b.x-p.x)<260);
  const lane=s.warning?.y;target={x:p.x<640?930:350,y:GROUND};
  if(lane===550||threat)target.y=420;
 }
 if(s.mode==='treasure'&&s.gateUntil<=s.time&&target.y<470&&(target.x>617&&target.x<663||p.x<617&&target.x>617||p.x>663&&target.x<663))target={x:430,y:GROUND};
 if(s.mode==='treasure'&&s.gateUntil<=s.time&&p.y<470&&p.x>=500&&p.x<=780&&(p.x<=640&&target.x>617||p.x>=640&&target.x<663))target={x:p.x<640?470:810,y:GROUND};
 if(s.mode==='treasure'&&target.y>p.y+30&&p.vy===0){const ledge=s.platforms.find(b=>Math.abs(b.y-p.y)<1&&p.x>b.x-10&&p.x<b.x+b.w+10);if(ledge)target={x:target.x<ledge.x+ledge.w/2?ledge.x-40:ledge.x+ledge.w+40,y:GROUND}}
 if(s.mode==='treasure'&&target.y<470&&(p.y>510||p.vy!==0&&p.jumpOrigin===GROUND)){const ramp=s.platforms.filter(b=>b.y===490).sort((a,b)=>Math.abs(a.x+a.w/2-target.x)-Math.abs(b.x+b.w/2-target.x))[0];target={x:ramp.x+ramp.w/2,y:ramp.y}}
 if(s.mode==='treasure'&&target.y<470&&Math.abs(p.y-490)<.1&&target.x>=510&&target.x<=770){const launch=p.x<640?400:880;if(Math.abs(p.x-launch)>18)target={x:launch,y:490}}
 const dx=target.x-p.x,trap=s.mode==='treasure'&&s.time%4<1.3&&(Math.abs(p.x-350)<100||Math.abs(p.x-930)<100);
 return{left:dx<-14,right:dx>14,jump:!p.jumpHeld&&(target.y<p.y-30||trap||s.mode==='cannon'&&s.warning?.y===550),dash:!!s.shots.find(b=>Math.abs(b.x-p.x)<100),interact:s.mode==='treasure'?Treasure.botInteract(s,p):false};
}
function terminal(s){if(s.done)s.players.forEach((p,i)=>p.pose=s.winner===i?'victory':s.winner===-1?'idle':p.hp<=0?'death':'hurt')}
function step(s,input={},remoteInput){if(s.done)return s;s.time+=DT;Extra?.before(s);Treasure.before(s);const inputs=[input,remoteInput===undefined?bot(s,s.players[1]):remoteInput];Cannon.input(s,inputs);
 for(let i=0;i<2;i++){const p=s.players[i],a=inputs[i],st=STATS[p.hero]||STATS.sailor;if(p.hp<=0||s.practice&&i===1)continue;
  p.inv=Math.max(0,p.inv-DT);p.cool=Math.max(0,p.cool-DT);p.dash=Math.max(0,p.dash-DT);
  const axis=(a.right?1:0)-(a.left?1:0);if(axis)p.dir=axis;
  // Deterministic input grace, identical on host and both seats. No hitbox changes.
  const grounded=p.vy===0&&(Math.abs(p.y-GROUND)<.1||s.platforms.some(b=>b.solid!==false&&Math.abs(p.y-b.y)<.1&&p.x>b.x-10&&p.x<b.x+b.w+10));
  p.coyote=grounded?.08:Math.max(0,(p.coyote||0)-DT);
  p.jumpBuffer=a.jump&&!p.jumpHeld?.12:Math.max(0,(p.jumpBuffer||0)-DT);
  if(a.dash&&!p.dashHeld&&p.cool===0&&!(s.mode==='flag'&&p.carryFlag!==null)){p.dash=.16;p.cool=1.4}p.dashHeld=!!a.dash;
  const old=p.y;if(p.jumpBuffer>0&&p.coyote>0){p.jumpOrigin=p.y;p.vy=-st.jump;p.coyote=0;p.jumpBuffer=0}p.jumpHeld=!!a.jump;
  const dx=(p.dash>0?p.dir*st.dash:axis*st.speed*(s.mode==='treasure'?Treasure.speed(p):1)*(s.mode==='flag'&&p.carryFlag!==null?.78:1))*DT;p.x=clamp(p.x+dx,30,1250);p.distance+=Math.abs(dx);
  // Closed center gate blocks the valuable upper route; the lower route stays open.
  if(s.mode==='treasure'&&s.time>s.gateUntil&&p.y<470&&p.x>617&&p.x<663)p.x=dx>0?617:663;
  p.vy+=1200*DT;p.y+=p.vy*DT;
  let floor=GROUND;for(const b of s.platforms)if(b.solid!==false&&p.x>b.x-10&&p.x<b.x+b.w+10&&old<=b.y+.1&&p.y>=b.y&&p.vy>=0)floor=Math.min(floor,b.y);
  if(p.y>=floor&&p.vy>=0){if(p.vy>80)p.landUntil=s.time+.2;p.y=floor;p.vy=0}
  p.pose=p.inv>1.2?'hurt':p.dash?'dash':p.vy<0?'jump':p.vy>50?'fall':axis?'run':s.time<(p.landUntil||0)?'land':'idle';
  if(s.mode==='treasure'){
   if(a.interact&&!p.interactHeld&&Math.abs(p.x-430)<60&&Math.abs(p.y-GROUND)<45)s.gateUntil=s.time+6;p.interactHeld=!!a.interact;
   for(const c of s.coins)if(c.active&&Math.abs(p.x-c.x)<27&&Math.abs(p.y-c.y)<38){c.active=false;c.respawnAt=s.time+14;p.carry+=c.value}
   if(p.carry&&((i===0&&p.x<90)||(i===1&&p.x>1120))){p.score+=p.carry;p.carry=0;p.bankTrips++}
   if(s.time%4<1.3&&p.y>545&&(Math.abs(p.x-350)<28||Math.abs(p.x-930)<28))hit(s,p);
  }else if(s.mode==='cannon')p.score=Math.floor(s.time*10);
 }
 Treasure.after(s,inputs);
 if(Extra?.has(s.mode)){Extra.after(s,inputs);terminal(s);return s}
 if(s.mode==='cannon')Cannon.after(s,hit);
 const limit=s.mode==='treasure'?90:120;
 if(s.time>=limit&&!s.done){s.done=true;const [a,b]=s.players;const av=s.mode==='treasure'?a.score:a.hp,bv=s.mode==='treasure'?b.score:b.hp;s.winner=av===bv?-1:av>bv?0:1}
 terminal(s);return s;
}
const api={cannon:Cannon,objectives:Extra,supports:m=>MODES.includes(m)||!!Extra?.has(m),create,step,bot,hit,STATS,DT};if(typeof module!=='undefined')module.exports=api;root.PirateArenaModesCore=api;
})(typeof window!=='undefined'?window:globalThis);
