/* Pirate Strike — "Bastion" seaside castle defence: deterministic simulation (no DOM, no three.js).
 * The chosen hero walks the battlements (x) and fires on raiders who land from boats on the beach and run
 * at the wall. Kills drop coins; standing on a build spot with enough coins builds its machine
 * (ballista, fire cauldron, cannon, archer tower). Five waves; the last one brings the Troll Warlord.
 * World: wall face along z=0 for x∈[-WALL,WALL]; beach z∈(0,LAND]; boats come in from the sea (z>LAND).
 * step(s,dt,input) advances one fixed tick; input = {move:-1..1}. Events are pushed to s.events. */
(function(root){'use strict';
const WALL=25,LAND=40,SEA=88,HERO_SPEED=15,HERO_RANGE=30,GATE_HP=100,TICK=1/60;
const HEROES={
 scarlet:{rate:3.2,dmg:1.05,speed:46,shot:'bullet'},   // flintlock: quick shots
 sailor:{rate:3.8,dmg:.85,speed:40,shot:'knife'},
 captain:{rate:1.5,dmg:.72,speed:42,shot:'shot',spread:3},// blunderbuss: three pellets
 shark:{rate:1.7,dmg:1.7,speed:38,shot:'harpoon',pierce:2},
 crab:{rate:2.4,dmg:1.3,speed:34,shot:'bubble'}
};
const KINDS={
 grunt:{hp:2.6,speed:5.2,dps:.68,coins:3,r:1},     // skeleton raider
 runner:{hp:1.8,speed:8.4,dps:.54,coins:3,r:1},   // quick deckhand
 brute:{hp:9,speed:3.4,dps:1.5,coins:8,r:1.3},   // big bruiser
 boss:{hp:180,speed:1.9,dps:7.8,coins:60,r:3.2}    // Troll Warlord
};
const SPOTS=[
 {id:'ballista',x:-19,cost:40},
 {id:'cauldron',x:-7,cost:60},
 {id:'cannon',x:7,cost:85},
 {id:'archer',x:19,cost:110}
];
const TOWERS={
 ballista:{every:2.1,range:44,dmg:4,width:1.7},   // bolt straight out to sea, pierces the lane
 cauldron:{every:2.8,reach:7.5,depth:6,dmg:2.6},   // pours fire at the wall foot
 cannon:{every:2.4,range:42,dmg:4,splash:4.2},
 archer:{every:.55,range:40,dmg:1.15}
};
// waves: [kind,count] groups, sent in boats of up to `per`
const WAVES=[
 {groups:[['grunt',10]],per:5,gap:5},
 {groups:[['grunt',12],['runner',5]],per:6,gap:4.5},
 {groups:[['grunt',14],['runner',6],['brute',2]],per:6,gap:4.2},
 {groups:[['grunt',16],['runner',8],['brute',4]],per:7,gap:3.8},
 {groups:[['grunt',12],['runner',6],['brute',4]],per:7,gap:4,boss:true}
];
function rng(seed){let a=seed>>>0||1;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function create(o={}){
 const hero=HEROES[o.hero]?o.hero:'scarlet';
 const s={hero,w:HEROES[hero],time:0,phase:'intro',introLeft:o.intro??2.5,wave:0,waves:WAVES.length,breakLeft:0,
  gate:GATE_HP,gateMax:GATE_HP,coins:o.coins??0,earned:0,kills:0,combo:0,comboT:0,bestCombo:0,
  heroX:0,heroVX:0,fireCD:.4,aim:null,
  enemies:[],boats:[],shots:[],towers:SPOTS.map(p=>({...p,built:false,cd:0,hold:0})),
  queue:[],nextBoat:0,id:1,events:[],rand:rng(o.seed??7),boss:null,done:false,won:false,result:null,difficulty:o.difficulty??1};
 return s;
}
function ev(s,type,data){s.events.push(Object.assign({type,t:s.time},data))}
function startWave(s){
 const w=WAVES[s.wave];s.phase='wave';s.queue=[];
 const list=[];for(const [k,n] of w.groups)for(let i=0;i<n;i++)list.push(k);
 // interleave kinds so every boat is mixed
 for(let i=list.length-1;i>0;i--){const j=Math.floor(s.rand()*(i+1));[list[i],list[j]]=[list[j],list[i]]}
 for(let i=0;i<list.length;i+=w.per)s.queue.push(list.slice(i,i+w.per));
 if(w.boss)s.queue.splice(Math.min(2,s.queue.length),0,['boss']);
 s.nextBoat=.8;ev(s,'wave',{n:s.wave+1,boss:!!w.boss});
}
function sendBoat(s,crew){
 const big=crew[0]==='boss',x=big?0:(s.rand()*2-1)*(WALL-6);
 const b={id:s.id++,x,z:SEA,landZ:LAND+(big?4:s.rand()*3),crew,speed:big?7:11,landed:false,big,leaveT:0};
 s.boats.push(b);ev(s,'boat',{id:b.id,x,big});if(big)ev(s,'boss',{});
}
function landBoat(s,b){
 b.landed=true;ev(s,'land',{id:b.id,x:b.x});
 b.crew.forEach((k,i)=>{const K=KINDS[k],off=(i-(b.crew.length-1)/2)*1.6;
  const x0=b.x+off,tx=Math.max(-WALL+1.5,Math.min(WALL-1.5,x0*.8+(s.rand()*2-1)*5)),hp=K.hp*(k==='boss'?1:s.difficulty);
  const e={id:s.id++,kind:k,x:x0,z:b.landZ-2-s.rand()*1.5,tx,tz:k==='boss'?3.5:1.2+s.rand()*.8,hp,maxHp:hp,speed:K.speed*(.9+s.rand()*.2),dps:K.dps,r:K.r,state:'run',burn:0,delay:i*.25,atWall:false,hitT:0};
  s.enemies.push(e);ev(s,'spawn',{id:e.id,kind:k,x:e.x,z:e.z});if(k==='boss'){s.boss=e;ev(s,'bossLand',{id:e.id})}});
 b.crew=[];
}
function damage(s,e,amt,src){
 if(e.hp<=0)return;e.hp-=amt;e.hitT=.12;ev(s,'hit',{id:e.id,src,amt});
 if(e.hp<=0){e.state='dead';const K=KINDS[e.kind];s.kills++;s.combo=s.comboT>0?s.combo+1:1;s.comboT=1.4;
  const bonus=s.combo>=10&&s.combo%5===0?5:0;s.coins+=K.coins+bonus;s.earned+=K.coins+bonus;s.bestCombo=Math.max(s.bestCombo,s.combo);
  ev(s,'kill',{id:e.id,kind:e.kind,x:e.x,z:e.z,coins:K.coins,src});
  if(s.combo>=5&&s.combo%5===0)ev(s,'combo',{n:s.combo,bonus});
  if(e.kind==='boss')ev(s,'bossDown',{x:e.x,z:e.z});}
}
const alive=s=>s.enemies.filter(e=>e.state!=='dead'&&e.delay<=0);
function nearest(s,x,z,range,pred){let best=null,bd=range*range;for(const e of alive(s)){if(pred&&!pred(e))continue;const d=(e.x-x)**2+(e.z-z)**2;if(d<bd){bd=d;best=e}}return best}
function shoot(s,from,e,o){
 const dist=Math.hypot(e.x-from.x,e.z-from.z),dur=Math.max(.08,dist/o.speed);
 const sh={id:s.id++,kind:o.kind,x0:from.x,y0:from.y??3.6,z0:from.z,tx:e.x,tz:e.z,target:e.id,t:0,dur,dmg:o.dmg,splash:o.splash||0,pierce:o.pierce||0,src:o.src,arc:o.arc||0};
 s.shots.push(sh);ev(s,'shot',{id:sh.id,kind:sh.kind,x0:sh.x0,z0:sh.z0,tx:sh.tx,tz:sh.tz,dur,arc:sh.arc,src:o.src});
}
function step(s,dt=TICK,input={}){
 if(s.done)return s;s.time+=dt;
 // hero movement (always allowed, also between waves, so the player can walk to a build spot)
 const mv=Math.max(-1,Math.min(1,input.move||0));s.heroVX=mv*HERO_SPEED;s.heroX=Math.max(-WALL+1,Math.min(WALL-1,s.heroX+s.heroVX*dt));
 // building: stand on a spot with enough coins
 for(const t of s.towers){
  if(t.built){continue}
  if(Math.abs(s.heroX-t.x)<2.2&&s.coins>=t.cost){t.hold+=dt;if(t.hold>=.55){t.built=true;t.cd=.8;s.coins-=t.cost;ev(s,'build',{id:t.id,x:t.x})}}else t.hold=0;
 }
 if(s.phase==='intro'){s.introLeft-=dt;if(s.introLeft<=0)startWave(s);return s}
 if(s.phase==='break'){s.breakLeft-=dt;if(s.breakLeft<=0)startWave(s)}
 if(s.comboT>0){s.comboT-=dt;if(s.comboT<=0)s.combo=0}
 // boats
 if(s.phase==='wave'&&s.queue.length){s.nextBoat-=dt;if(s.nextBoat<=0){sendBoat(s,s.queue.shift());s.nextBoat=WAVES[s.wave].gap}}
 for(const b of s.boats){if(!b.landed){b.z=Math.max(b.landZ,b.z-b.speed*dt);if(b.z<=b.landZ)landBoat(s,b)}else b.leaveT+=dt}
 s.boats=s.boats.filter(b=>!b.landed||b.leaveT<6);
 // raiders
 for(const e of s.enemies){
  if(e.state==='dead')continue;if(e.delay>0){e.delay-=dt;continue}
  if(e.hitT>0)e.hitT-=dt;
  if(e.burn>0){e.burn-=dt;damage(s,e,1.1*dt,'burn')}
  if(e.state==='dead')continue;
  if(!e.atWall){const dx=e.tx-e.x,dz=e.tz-e.z,d=Math.hypot(dx,dz),v=e.speed*dt;if(d<=v){e.x=e.tx;e.z=e.tz;e.atWall=true;e.state='attack';ev(s,'reach',{id:e.id})}else{e.x+=dx/d*v;e.z+=dz/d*v}}
  else{const before=s.gate;s.gate=Math.max(0,s.gate-e.dps*dt);if(Math.floor(before/5)!==Math.floor(s.gate/5))ev(s,'gate',{hp:s.gate,by:e.id})}
 }
 // hero fire
 s.fireCD-=dt;const hx={x:s.heroX,z:-.5,y:3.8},w=s.w;
 const tgt=nearest(s,hx.x,hx.z,HERO_RANGE);s.aim=tgt?tgt.id:null;
 if(tgt&&s.fireCD<=0){s.fireCD=1/w.rate;ev(s,'fire',{x:s.heroX,target:tgt.id});
  const n=w.spread||1;for(let i=0;i<n;i++){const others=n>1?alive(s).filter(e=>e!==tgt).sort((a,b)=>Math.abs(a.x-tgt.x)+Math.abs(a.z-tgt.z)-Math.abs(b.x-tgt.x)-Math.abs(b.z-tgt.z)):[];const e=i===0?tgt:(others[i-1]||tgt);
   shoot(s,hx,e,{kind:w.shot,dmg:w.dmg,speed:w.speed,pierce:w.pierce,src:'hero'})}}
 // machines
 for(const t of s.towers){if(!t.built)continue;t.cd-=dt;if(t.cd>0)continue;const T=TOWERS[t.id],from={x:t.x,z:-.5,y:4.2};
  if(t.id==='ballista'){const e=nearest(s,t.x,0,T.range);if(!e)continue;t.cd=T.every;
   const lane=e.x,hit=alive(s).filter(o=>Math.abs(o.x-(t.x+(lane-t.x)*o.z/Math.max(1,e.z)))<T.width&&o.z<=T.range);
   ev(s,'tower',{id:t.id,x:t.x,tx:lane+(lane-t.x)*.4,tz:Math.min(T.range,e.z*1.4)});for(const o of hit)damage(s,o,T.dmg,'ballista')}
  else if(t.id==='cauldron'){const near=alive(s).filter(o=>Math.abs(o.x-t.x)<T.reach&&o.z<T.depth);if(!near.length)continue;t.cd=T.every;
   ev(s,'tower',{id:t.id,x:t.x});for(const o of near){damage(s,o,T.dmg,'cauldron');o.burn=Math.max(o.burn,2.2)}}
  else if(t.id==='cannon'){const e=nearest(s,t.x,0,T.range,o=>o.z>6)||nearest(s,t.x,0,T.range);if(!e)continue;t.cd=T.every;
   ev(s,'tower',{id:t.id,x:t.x});shoot(s,from,e,{kind:'ball',dmg:T.dmg,speed:30,splash:T.splash,src:'cannon',arc:6})}
  else if(t.id==='archer'){const e=nearest(s,t.x,0,T.range);if(!e)continue;t.cd=T.every;ev(s,'tower',{id:t.id,x:t.x});
   shoot(s,{x:t.x,z:-.5,y:7},e,{kind:'arrow',dmg:T.dmg,speed:44,src:'archer',arc:2})}
 }
 // projectiles
 for(const sh of s.shots){sh.t+=dt;const e=s.enemies.find(o=>o.id===sh.target);
  if(e&&e.state!=='dead'){sh.tx=e.x;sh.tz=e.z}
  if(sh.t>=sh.dur){sh.hit=true;
   if(sh.splash){ev(s,'boom',{x:sh.tx,z:sh.tz,r:sh.splash});for(const o of alive(s))if(Math.hypot(o.x-sh.tx,o.z-sh.tz)<sh.splash+o.r*.5)damage(s,o,sh.dmg,sh.src)}
   else if(e&&e.state!=='dead'){damage(s,e,sh.dmg,sh.src);
    if(sh.pierce){let n=sh.pierce;for(const o of alive(s)){if(n<=0)break;if(o!==e&&Math.hypot(o.x-e.x,o.z-e.z)<3){damage(s,o,sh.dmg*.6,sh.src);n--}}}}
   ev(s,'impact',{id:sh.id,kind:sh.kind,x:sh.tx,z:sh.tz})}}
 s.shots=s.shots.filter(sh=>!sh.hit);
 // wave end / result
 if(s.gate<=0){s.done=true;s.won=false;s.phase='lost';s.result='lose';ev(s,'lose',{});return s}
 if(s.phase==='wave'&&!s.queue.length&&s.boats.every(b=>b.landed)&&!alive(s).length&&s.enemies.every(e=>e.delay<=0||e.state==='dead')){
  s.enemies=[];s.wave++;
  if(s.wave>=WAVES.length){s.done=true;s.won=true;s.phase='won';s.result='win';ev(s,'win',{gate:s.gate,kills:s.kills});return s}
  s.phase='break';s.breakLeft=3.2;ev(s,'clear',{n:s.wave})}
 return s;
}
const api={create,step,TICK,WALL,LAND,SEA,SPOTS,TOWERS,KINDS,HEROES,WAVES,GATE_HP};
if(typeof module!=='undefined')module.exports=api;root.PirateBastionCore=api;
})(typeof window!=='undefined'?window:globalThis);
