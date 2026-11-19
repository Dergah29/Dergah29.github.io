/* Pirate Arena v2 — big scrolling maps (Flag Battle, Treasure Hunt, Grand Race).
 * Deterministic 60 Hz simulation: no DOM, storage, network or randomness outside the seeded generator.
 * World units: y grows downwards, a platform's y is its walkable top. Teams: 0 = blue (the player's), 1 = red. */
(function(root){'use strict';
const DT=1/60,G=2300,FALL_MAX=1250,WATER=1010;
const HERO={scarlet:{speed:350,jump:880,dash:930},sailor:{speed:345,jump:880,dash:920},captain:{speed:325,jump:870,dash:960},shark:{speed:335,jump:860,dash:990},crab:{speed:320,jump:900,dash:940}};
const DIFF={easy:{speed:.84,react:.42,aim:.35,dodge:.1},normal:{speed:.94,react:.24,aim:.62,dodge:.35},hard:{speed:1,react:.1,aim:.88,dodge:.7}};
const MODES=['flag','treasure','race'];
const RULES={flag:{limit:240,target:3},treasure:{limit:210,target:12,hold:15},race:{limit:300}};
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function rng(seed){let s=seed>>>0||1;return()=>{s^=s<<13;s^=s>>>17;s^=s<<5;return(s>>>0)/4294967296}}

/* ---------------------------------------------------------------- maps */
// ground: solid blocks [x0,x1,top]; plats: one-way [x,y,w,kind]; pads: [x,y]; spikes: [x,y,w]
function mirror(m){const W=m.w,g=m.ground.slice(),p=m.plats.slice(),pads=m.pads.slice(),sp=m.spikes.slice();
 for(const [a,b,y] of m.ground)if(a<W/2-1)g.push([W-b,W-a,y]);for(const [x,y,w,k] of m.plats)if(x+w<=W/2+1)p.push([W-x-w,y,w,k]);
 for(const [x,y] of m.pads)if(x<W/2)pads.push([W-x,y]);for(const [x,y,w] of m.spikes)if(x<W/2)sp.push([W-x-w,y,w]);
 return Object.assign({},m,{ground:g,plats:p,pads,spikes:sp})}
const MAPS={
 flag:mirror({id:'flag',w:5200,bg:'bay',biome:'bay',
  ground:[[0,980,760],[1240,1960,800],[2240,2600,800]],  // the right half is mirrored; bridges keep a low route, ledges and a jump pad give the high routes
  plats:[[960,760,300,'bridge'],[1940,800,320,'bridge'],[1320,660,260,'stone'],[1660,540,240,'stone'],[2280,640,240,'wood'],[2060,420,240,'stone'],[2360,300,240,'stone'],[420,600,260,'wood'],[160,470,220,'wood']],
  pads:[[1560,800]],spikes:[],
  bases:[{x:200,y:760},{x:5000,y:760}],spawns:[[150,760],[300,760]],
 }),
 treasure:mirror({id:'treasure',w:4400,bg:'jungle',biome:'jungle',
  ground:[[0,900,780],[1140,1700,820],[1940,2200,860]],
  plats:[[880,780,280,'bridge'],[1680,820,280,'bridge'],[1240,680,260,'stone'],[1560,560,240,'stone'],[1980,720,220,'wood'],[1880,480,280,'stone'],[2060,340,280,'stone'],[380,640,260,'wood'],[640,500,240,'stone']],
  pads:[[1450,820]],spikes:[],
  bases:[{x:220,y:780},{x:4180,y:780}],spawns:[[160,780],[300,780]],
  chests:[{x:2200,y:860},{x:1370,y:680},{x:3030,y:680},{x:2200,y:340}]}),
 race:{id:'race',w:13600,bg:'harbor',biome:'harbor',biomes:[[0,'harbor'],[4600,'jungle'],[9200,'cave']],
  ground:[[0,1300,800],[1520,2300,800],[2600,3300,760],[3650,4400,800],[4600,5300,780],[5900,6600,820],[7000,7400,700],[7700,8600,800],[9200,9900,800],[10500,11200,800],[11650,12300,760],[12300,13600,800]],
  plats:[[1300,720,220,'bridge'],[2300,720,300,'bridge'],[2400,560,240,'wood'],[3300,680,350,'bridge'],[3550,520,220,'wood'],[4400,720,200,'bridge'],[5300,690,200,'stone'],[5560,600,200,'stone'],[5820,700,160,'stone'],[6600,700,180,'stone'],[6820,600,200,'stone'],[7400,620,160,'stone'],[7550,520,160,'stone'],[8600,700,200,'bridge'],[8850,640,200,'bridge'],[9900,700,160,'stone'],[10120,600,180,'stone'],[10330,700,160,'stone'],[11200,700,200,'stone'],[11420,600,220,'stone']],
  movers:[{x:5000,y:600,w:200,ax:0,ay:120,per:3.2},{x:7050,y:520,w:180,ax:160,ay:0,per:3.6},{x:9000,y:700,w:180,ax:160,ay:0,per:3},{x:10950,y:640,w:180,ax:0,ay:140,per:2.8}],
  pads:[[2900,760],[8100,800],[12000,760]],
  spikes:[[4050,800,140],[6250,820,140],[7950,800,140],[9520,800,120],[10620,800,120],[12700,800,160]],
  cps:[60,2700,4700,7100,9300,11700],finish:13300,spawns:[[60,800],[60,800],[60,800],[60,800]]}
};
// Grand Race, longer: a fourth stretch (the deep wilds) between the jungle and the sea cave. It reuses the jungle
// stretch's layout (shifted) with its own spikes, so the course runs harbour -> jungle -> wilds -> cave.
(function extendRace(m){const A=4600,B=9200,D=B-A,shift=x=>x>=B?x+D:x,copy=x=>x+D;
 const inJ=x=>x>=A&&x<B;
 m.ground=[...m.ground.map(([a,b,y])=>[shift(a),shift(b),y]),...m.ground.filter(([a])=>inJ(a)).map(([a,b,y])=>[copy(a),copy(b),y])].sort((p,q)=>p[0]-q[0]);
 m.plats=[...m.plats.map(([x,y,w,k])=>[shift(x),y,w,k]),...m.plats.filter(([x])=>inJ(x)).map(([x,y,w])=>[copy(x),y,w,'wood'])];
 m.movers=[...m.movers.map(o=>Object.assign({},o,{x:shift(o.x)})),...m.movers.filter(o=>inJ(o.x)).map(o=>Object.assign({},o,{x:copy(o.x),per:o.per*.85}))];
 m.pads=[...m.pads.map(([x,y])=>[shift(x),y]),...m.pads.filter(([x])=>inJ(x)).map(([x,y])=>[copy(x),y])];
 m.spikes=[...m.spikes.map(([x,y,w])=>[shift(x),y,w]),...m.spikes.filter(([x])=>inJ(x)).map(([x,y,w])=>[copy(x)+120,y,w-20])];
 m.cps=[...m.cps.filter(x=>x<B),B+100,B+D*.55,...m.cps.filter(x=>x>=B).map(shift)].sort((p,q)=>p-q);
 m.finish=shift(m.finish);m.w=shift(m.w);m.biomes=[[0,'harbor'],[A,'jungle'],[B,'wilds'],[B+D,'cave']];
})(MAPS.race);
function surfaces(map){const out=[];map.ground.forEach(([a,b,y],i)=>out.push({id:'g'+i,x0:a,x1:b,y,ground:true}));map.plats.forEach(([x,y,w],i)=>out.push({id:'p'+i,x0:x,x1:x+w,y}));(map.movers||[]).forEach((m,i)=>out.push({id:'m'+i,x0:m.x-Math.abs(m.ax),x1:m.x+m.w+Math.abs(m.ax),y:m.y,mover:i}));
 for(const a of out){a.links=[];a.pad=map.pads.some(([x,y])=>Math.abs(y-a.y)<2&&x>a.x0-10&&x<a.x1+10);
  for(const b of out){if(a===b)continue;const rise=a.y-b.y,gap=Math.max(0,b.x0-a.x1,a.x0-b.x1);
   const ok=rise<=0?gap<=(rise<-150?380:330):a.pad&&rise<=720?gap<=300:rise<=290&&gap<=(rise>170?190:300);if(ok)a.links.push(b)}}
 return out}
for(const k in MAPS)MAPS[k].surf=surfaces(MAPS[k]);

/* ---------------------------------------------------------------- create */
function create(mode,opts={}){if(!MODES.includes(mode))throw Error('Unknown Arena v2 mode '+mode);const map=MAPS[mode],diff=DIFF[opts.difficulty]?opts.difficulty:'normal';
 const heroes=opts.heroes||[opts.hero||'sailor','captain','shark','crab'],r=rng(opts.seed||7);
 const n=mode==='race'?4:4,players=[];
 for(let i=0;i<n;i++){const team=mode==='race'?i:(i<2?0:1),sp=spawnFor(map,mode,team,i);
  players.push({i,team,hero:heroes[i]||'sailor',bot:i!==0||!!opts.allBots,x:sp[0],y:sp[1],vx:0,vy:0,dir:team===1&&mode!=='race'?-1:1,ground:true,coyote:0,jumps:0,jumpHeld:true,atkHeld:true,dashHeld:true,buffer:0,
   hp:4,inv:0,stun:0,atk:0,atkCd:0,atkHit:false,combo:0,dash:0,dashCd:0,drop:0,ko:0,carry:null,coins:0,cp:0,finish:null,kills:0,caps:0,returns:0,pose:'idle',lastPose:'idle',poseAt:0,role:i%2?'defend':'attack',ai:{t:0,stuckX:0,stuckT:0,want:null}})}
 const s={mode,map:mode,diff,time:0,done:false,winner:null,seed:opts.seed||7,rand:r,players,events:[],score:[0,0],hold:null,
  flags:mode==='flag'?[0,1].map(t=>({team:t,x:map.bases[t].x,y:map.bases[t].y,home:true,carrier:null,droppedAt:0})):null,
  coins:mode==='treasure'?[]:null,nextCoin:2,coinId:0,place:[],limit:RULES[mode].limit,practice:!!opts.practice};
 return s}
function spawnFor(map,mode,team,i){if(mode==='race')return[map.spawns[0][0]+i*40,map.spawns[0][1]];const sp=map.spawns[i%2];return team===0?[sp[0],sp[1]]:[map.w-sp[0],sp[1]]}

/* ---------------------------------------------------------------- physics helpers */
function moverPos(map,m,t){const k=Math.sin(t*2*Math.PI/m.per);return{x:m.x+m.ax*k,y:m.y+m.ay*k}}
function solidAt(map,x,y){for(const [a,b,top] of map.ground)if(x>a&&x<b&&y>top+6)return[a,b,top];return null}
function respawn(s,p){const map=MAPS[s.map];if(s.mode==='race'){const cx=map.cps[p.cp]||60;const g=map.ground.find(([a,b])=>cx>=a&&cx<=b)||map.ground[0];p.x=clamp(cx+(p.i%2)*30,g[0]+20,g[1]-20);p.y=g[2]}else{const sp=spawnFor(map,s.mode,p.team,p.i);p.x=sp[0];p.y=sp[1]}
 p.vx=p.vy=0;p.hp=4;p.inv=1.4;p.stun=0;p.ko=0;p.atk=0;p.dash=0;p.ground=true;p.jumps=0}
function ev(s,type,data){s.events.push(Object.assign({type,t:s.time},data));if(s.events.length>60)s.events.shift()}
function knockOut(s,p,by){if(p.ko>0)return;p.ko=s.mode==='race'?1.1:3;p.vx=p.vy=0;
 if(p.carry!==null&&s.flags){const f=s.flags[p.carry];f.carrier=null;f.home=false;f.x=p.x;f.y=groundBelow(s,p.x,Math.min(p.y,WATER-20));f.droppedAt=s.time;ev(s,'flagDrop',{team:f.team,x:f.x});p.carry=null}
 if(p.coins&&s.coins){const n=p.coins;p.coins=0;for(let k=0;k<n;k++){const a=(k/n-.5)*2.4;s.coins.push({id:s.coinId++,x:clamp(p.x+Math.sin(a)*120,40,MAPS[s.map].w-40),y:p.y-40,vx:Math.sin(a)*260,vy:-420-80*(k%3),born:s.time,rest:false})}ev(s,'coinDrop',{n,x:p.x})}
 if(by){by.kills++;ev(s,'ko',{by:by.i,who:p.i})}else ev(s,'fall',{who:p.i})}
function groundBelow(s,x,y){const map=MAPS[s.map];let best=WATER+200;for(const [a,b,top] of map.ground)if(x>=a&&x<=b&&top>=y-4&&top<best)best=top;for(const [px,py,w] of map.plats)if(x>=px&&x<=px+w&&py>=y-4&&py<best)best=py;return best>WATER?y:best}
function hurt(s,p,from,dmg){if(p.inv>0||p.ko>0||s.done)return false;p.inv=.55;p.stun=.32;const dir=Math.sign(p.x-from.x)||from.dir;p.vx=dir*480;p.vy=-360;p.dash=0;p.atk=0;
 if(s.mode==='race'){ev(s,'hit',{who:p.i,by:from.i,x:p.x,y:p.y});return true}
 p.hp-=dmg;ev(s,'hit',{who:p.i,by:from.i,x:p.x,y:p.y});if(p.carry!==null&&s.flags){const f=s.flags[p.carry];f.carrier=null;f.home=false;f.x=p.x;f.y=groundBelow(s,p.x,p.y);f.droppedAt=s.time;p.carry=null;ev(s,'flagDrop',{team:f.team,x:f.x})}
 if(p.hp<=0)knockOut(s,p,from);return true}

/* ---------------------------------------------------------------- player step */
function stepPlayer(s,p,a){const map=MAPS[s.map],st=HERO[p.hero]||HERO.sailor,boost=p.bot?DIFF[s.diff].speed:1;
 if(p.ko>0){p.ko-=DT;if(p.ko<=0)respawn(s,p);p.pose='death';return}
 if(p.finish!==null){p.vx*=.9;p.pose='victory';return}
 p.inv=Math.max(0,p.inv-DT);p.atkCd=Math.max(0,p.atkCd-DT);p.dashCd=Math.max(0,p.dashCd-DT);p.drop=Math.max(0,p.drop-DT);
 const stunned=p.stun>0;p.stun=Math.max(0,p.stun-DT);
 const axis=stunned?0:(a.right?1:0)-(a.left?1:0);if(axis&&p.atk<=0)p.dir=axis;
 const slow=p.carry!==null?.82:1;
 // attack: three-hit combo, short active window in front
 if(a.attack&&!p.atkHeld&&p.atkCd<=0&&!stunned){p.combo=s.time-(p.lastAtk||-9)<.6?(p.combo+1)%3:0;p.lastAtk=s.time;p.atk=.3;p.atkHit=false;p.atkCd=p.combo===2?.5:.32;ev(s,'swing',{who:p.i})}p.atkHeld=!!a.attack;
 if(p.atk>0){p.atk-=DT;if(!p.atkHit&&p.atk<.22&&p.atk>.08){for(const q of s.players){if(q===p||q.ko>0||(s.mode!=='race'&&q.team===p.team))continue;const dx=(q.x-p.x)*p.dir;if(dx>-20&&dx<110&&Math.abs(q.y-p.y)<95){if(hurt(s,q,p,p.combo===2?2:1))p.atkHit=true}}}}
 // dash
 if(a.dash&&!p.dashHeld&&p.dashCd<=0&&!stunned&&p.carry===null){p.dash=.17;p.dashCd=1.1;ev(s,'dash',{who:p.i})}p.dashHeld=!!a.dash;
 // jump: buffer + coyote + one air jump; drop through a one-way platform with down
 p.buffer=a.jump&&!p.jumpHeld?.12:Math.max(0,p.buffer-DT);p.coyote=p.ground?.09:Math.max(0,p.coyote-DT);
 if(a.down&&p.ground&&!p.onSolid&&p.buffer>0){p.drop=.25;p.buffer=0;p.ground=false}
 if(p.buffer>0&&!stunned){if(p.coyote>0){p.vy=-st.jump;p.coyote=0;p.buffer=0;p.ground=false;p.jumps=0;ev(s,'jump',{who:p.i})}else if(p.jumps<1){p.vy=-st.jump*.86;p.jumps++;p.buffer=0;ev(s,'jump2',{who:p.i})}}
 if(!a.jump&&p.vy<-300)p.vy+=G*.9*DT;p.jumpHeld=!!a.jump;
 // horizontal
 if(p.dash>0){p.dash-=DT;p.vx=p.dir*st.dash;p.vy=Math.min(p.vy,0)*.6}
 else{const target=axis*st.speed*boost*slow,acc=p.ground?3200:2000;p.vx+=clamp(target-p.vx,-acc*DT,acc*DT)}
 // vertical
 if(p.dash<=0)p.vy=Math.min(FALL_MAX,p.vy+G*DT);
 const ox=p.x,oy=p.y;let nx=p.x+p.vx*DT,ny=p.y+p.vy*DT;
 // side walls of ground blocks
 for(const [a0,b0,top] of map.ground){if(ny>top+8&&oy>top+8){if(ox<=a0&&nx>a0-22&&nx<b0)nx=a0-22,p.vx=0;else if(ox>=b0&&nx<b0+22&&nx>a0)nx=b0+22,p.vx=0}}
 nx=clamp(nx,30,map.w-30);
 // landing
 let floor=Infinity,solid=false,carry=null;
 if(p.vy>=0){for(const [a0,b0,top] of map.ground)if(nx>a0-14&&nx<b0+14&&oy<=top+1&&ny>=top&&top<floor){floor=top;solid=true;carry=null}
  if(p.drop<=0){for(const [x,y,w] of map.plats)if(nx>x-12&&nx<x+w+12&&oy<=y+1&&ny>=y&&y<floor){floor=y;solid=false;carry=null}
   (map.movers||[]).forEach((m,k)=>{const q=moverPos(map,m,s.time),q0=moverPos(map,m,s.time-DT);if(nx>q.x-12&&nx<q.x+m.w+12&&oy<=q0.y+2&&ny>=q.y-2&&q.y<floor){floor=q.y;solid=false;carry={dx:q.x-q0.x}}})}}
 if(floor<Infinity){ny=floor;if(!p.ground&&p.vy>500)ev(s,'land',{who:p.i});p.vy=0;p.ground=true;p.jumps=0;p.onSolid=solid;if(carry)nx+=carry.dx}else p.ground=false;
 // ceiling-free world; water and spikes
 p.x=nx;p.y=ny;
 if(p.y>WATER){ev(s,'splash',{who:p.i,x:p.x});knockOut(s,p,null);return}
 if(p.ground){for(const [x,y] of map.pads)if(Math.abs(p.x-x)<44&&Math.abs(p.y-y)<4){p.vy=-1420;p.ground=false;p.jumps=0;ev(s,'pad',{who:p.i,x})}
  for(const [x,y,w] of map.spikes)if(p.x>x&&p.x<x+w&&Math.abs(p.y-y)<4){if(s.mode==='race'){ev(s,'spike',{who:p.i});knockOut(s,p,null);return}else hurt(s,p,{x:p.x-p.dir,dir:-p.dir,i:-1},1)}}
 p.pose=p.ko>0?'death':stunned?'hurt':p.atk>0?['attackA','attackB','attackC'][p.combo]:p.dash>0?'dash':!p.ground?(p.vy<0?'jump':'fall'):Math.abs(p.vx)>40?'run':'idle'}

/* ---------------------------------------------------------------- modes */
function stepFlag(s){const map=MAPS.flag;
 for(const f of s.flags){if(f.carrier!==null){const c=s.players[f.carrier];if(c.ko>0||c.carry!==f.team){f.carrier=null}else{f.x=c.x;f.y=c.y;continue}}
  if(!f.home&&s.time-f.droppedAt>10){f.home=true;f.x=map.bases[f.team].x;f.y=map.bases[f.team].y;ev(s,'flagReturn',{team:f.team})}}
 for(const p of s.players){if(p.ko>0)continue;for(const f of s.flags){if(f.carrier!==null||Math.abs(p.x-f.x)>48||Math.abs(p.y-f.y)>70)continue;
   if(f.team===p.team){if(!f.home){f.home=true;f.x=map.bases[f.team].x;f.y=map.bases[f.team].y;p.returns++;ev(s,'flagReturn',{team:f.team,by:p.i})}}
   else if(p.carry===null){f.carrier=p.i;f.home=false;p.carry=f.team;ev(s,'flagTake',{team:f.team,by:p.i})}}
  if(p.carry!==null){const own=s.flags[p.team],b=map.bases[p.team];if(own.home&&Math.abs(p.x-b.x)<70&&Math.abs(p.y-b.y)<80){const f=s.flags[p.carry];f.home=true;f.carrier=null;f.x=map.bases[f.team].x;f.y=map.bases[f.team].y;p.carry=null;p.caps++;s.score[p.team]++;ev(s,'capture',{team:p.team,by:p.i});if(s.score[p.team]>=RULES.flag.target)finish(s,p.team)}}}
 if(!s.done&&s.time>=s.limit)finish(s,s.score[0]===s.score[1]?-1:s.score[0]>s.score[1]?0:1)}
function stepTreasure(s){const map=MAPS.treasure,R=RULES.treasure;
 if(s.time>=s.nextCoin){if(s.coins.length+s.players.reduce((n,p)=>n+p.coins,0)<22){const c=map.chests[Math.floor(s.rand()*map.chests.length)];s.coins.push({id:s.coinId++,x:c.x,y:c.y-60,vx:(s.rand()-.5)*420,vy:-560,born:s.time,rest:false,from:c});ev(s,'coinSpawn',{x:c.x,y:c.y})}s.nextCoin=s.time+3}
 for(const c of s.coins){if(c.rest)continue;c.vy=Math.min(900,c.vy+G*.8*DT);const ny=c.y+c.vy*DT,nx=clamp(c.x+c.vx*DT,30,map.w-30);const top=groundBelow(s,nx,c.y);if(c.vy>0&&ny>=top&&top>=c.y-4){c.y=top;c.rest=true;c.vx=0}else{c.x=nx;c.y=ny}if(c.y>WATER){c.x=map.chests[0].x;c.y=map.chests[0].y-40;c.vy=-300}}
 for(const p of s.players){if(p.ko>0)continue;for(let k=s.coins.length-1;k>=0;k--){const c=s.coins[k];if(s.time-c.born<.35)continue;if(Math.abs(p.x-c.x)<46&&Math.abs(p.y-20-c.y)<80){s.coins.splice(k,1);p.coins++;ev(s,'coin',{who:p.i})}}}
 s.score=[0,1].map(t=>s.players.filter(p=>p.team===t).reduce((n,p)=>n+p.coins,0));
 const lead=s.score[0]>=R.target&&s.score[0]>s.score[1]?0:s.score[1]>=R.target&&s.score[1]>s.score[0]?1:null;
 if(lead===null)s.hold=null;else if(!s.hold||s.hold.team!==lead){s.hold={team:lead,until:s.time+R.hold};ev(s,'holdStart',{team:lead})}else if(s.time>=s.hold.until)finish(s,lead);
 if(!s.done&&s.time>=s.limit)finish(s,s.score[0]===s.score[1]?-1:s.score[0]>s.score[1]?0:1)}
function stepRace(s){const map=MAPS.race;for(const p of s.players){if(p.finish!==null)continue;
  // stuck bots are carried on to the next checkpoint after 8 s without progress (never the player)
  if(p.bot&&p.ko<=0){if(p.best===undefined||p.x>p.best+60){p.best=p.x;p.bestAt=s.time}else if(s.time-p.bestAt>8&&p.cp+1<map.cps.length){p.cp++;respawn(s,p);p.best=p.x;p.bestAt=s.time;ev(s,'assist',{who:p.i})}}while(p.cp+1<map.cps.length&&p.x>=map.cps[p.cp+1]){p.cp++;if(p.i===0)ev(s,'checkpoint',{cp:p.cp})}
  if(p.x>=map.finish){p.finish=s.time;s.place.push(p.i);ev(s,'finishLine',{who:p.i,place:s.place.length})}}
 s.score=s.players.map(p=>p.x);
 if(!s.done&&(s.players[0].finish!==null&&s.place.length>=2||s.place.length>=3||s.time>=s.limit)){const order=s.players.slice().sort((a,b)=>(a.finish??1e9)-(b.finish??1e9)||b.x-a.x).map(p=>p.i);s.order=order;finish(s,order[0])}}
function finish(s,w){if(s.done)return;s.done=true;s.winner=w;ev(s,'end',{winner:w});
 for(const p of s.players)p.pose=s.mode==='race'?(s.order?.[0]===p.i?'victory':'idle'):w===-1?'idle':p.team===w?'victory':'hurt'}

/* ---------------------------------------------------------------- bots */
function surfaceOf(map,x,y){let best=null,bd=1e9;for(const u of map.surf){if(x<u.x0-20||x>u.x1+20)continue;const d=y-u.y;if(d>=-6&&d<bd){bd=d;best=u}}return best}
function route(map,from,to){if(!from||!to||from===to)return null;const prev=new Map([[from,null]]),q=[from];while(q.length){const u=q.shift();if(u===to)break;for(const v of u.links)if(!prev.has(v)){prev.set(v,u);q.push(v)}}if(!prev.has(to))return null;let n=to;while(prev.get(n)!==from&&prev.get(n))n=prev.get(n);return n}
function goal(s,p){const map=MAPS[s.map],foes=s.players.filter(q=>q.team!==p.team&&q.ko<=0);
 if(s.mode==='race')return{x:map.finish+100,y:800};
 if(s.mode==='flag'){const own=s.flags[p.team],enemy=s.flags[1-p.team],base=map.bases[p.team];
  if(p.carry!==null)return{x:base.x,y:base.y,safe:true};
  if(own.carrier!==null)return{x:own.x,y:own.y,hunt:own.carrier};
  if(!own.home&&own.carrier===null)return{x:own.x,y:own.y};
  if(p.role==='defend'&&s.time-(p.ai.roleAt||0)<25){const intruder=foes.find(q=>Math.abs(q.x-base.x)<1300);if(intruder)return{x:intruder.x,y:intruder.y,hunt:intruder.i};return{x:base.x+(p.team?-260:260),y:base.y}}
  return{x:enemy.x,y:enemy.y}}
 // treasure
 const lead=s.hold&&s.hold.team===p.team;
 if(lead){const near=foes.filter(q=>Math.abs(q.x-p.x)<500);if(near.length&&p.coins>2){const b=map.bases[p.team];return{x:b.x,y:b.y,safe:true}}}
 const richest=foes.filter(q=>q.coins>0).sort((a,b)=>b.coins-a.coins)[0],threat=s.hold&&s.hold.team!==p.team;
 if(richest&&threat&&(p.role==='attack'||richest.coins>=4||s.coins.length<3))return{x:richest.x,y:richest.y,hunt:richest.i};   // they are counting down: knock the coins loose
 const rich=foes.filter(q=>q.coins>=3).sort((a,b)=>Math.abs(a.x-p.x)-Math.abs(b.x-p.x))[0];if(rich&&Math.abs(rich.x-p.x)<900&&!lead)return{x:rich.x,y:rich.y,hunt:rich.i};
 const coin=s.coins.filter(c=>c.rest||s.time-c.born>.6).sort((a,b)=>Math.abs(a.x-p.x)+Math.abs(a.y-p.y)*.7-Math.abs(b.x-p.x)-Math.abs(b.y-p.y)*.7)[0];if(coin)return{x:coin.x,y:coin.y};
 if(richest&&!lead)return{x:richest.x,y:richest.y,hunt:richest.i};const c=map.chests[p.i%map.chests.length];return{x:c.x,y:c.y}}
function bot(s,p){const out={};if(p.ko>0||p.finish!==null||s.practice&&p.i!==0&&p.team!==0)return out;const map=MAPS[s.map],D=DIFF[s.diff],ai=p.ai;
 // decisions refresh at the difficulty's reaction rate (deterministic)
 if(s.time>=ai.t){ai.t=s.time+D.react;ai.want=goal(s,p);if(s.mode==='flag'&&p.role==='defend'&&!ai.roleAt)ai.roleAt=s.time}
 const g=ai.want||{x:p.x,y:p.y};let tx=g.x,jump=false,down=false;
 const here=surfaceOf(map,p.x,p.y),there=surfaceOf(map,g.x,g.y-2);
 if(p.ground&&here&&there&&here!==there){const next=route(map,here,there);if(next){const rise=here.y-next.y,apart=next.x0>here.x1+8||next.x1<here.x0-8,right=next.x0>here.x1,edge=right?here.x1:here.x0;
   ai.next=next;
   if(apart){tx=right?next.x0+80:next.x1-80;const d=Math.abs(edge-p.x),gap=right?next.x0-here.x1:here.x0-next.x1;if(d<(gap>200||rise>100?70:110)&&Math.sign(tx-p.x)===(right?1:-1))jump=true}
   else if(rise>40){const nearX=clamp(p.x,next.x0+50,next.x1-50);tx=nearX;
    if(here.pad&&rise>290){const pad=map.pads.find(([x,y])=>Math.abs(y-here.y)<3&&x>=here.x0&&x<=here.x1);if(pad)tx=pad[0]}
    else if(Math.abs(nearX-p.x)<(rise>170?150:240))jump=true}
   else if(rise<-40){tx=clamp(g.x,next.x0+40,next.x1-40);if(!here.ground&&p.x>next.x0+10&&p.x<next.x1-10&&p.x>here.x0&&p.x<here.x1)down=true;else if(p.x>here.x0+5&&p.x<here.x1-5){tx=Math.abs(here.x1-p.x)<Math.abs(here.x0-p.x)?here.x1+60:here.x0-60;if(tx>next.x1||tx<next.x0)tx=clamp(tx,next.x0+40,next.x1-40)}}
   else tx=clamp(g.x,next.x0+40,next.x1-40)}}
 else ai.next=null;
 // hazards ahead on the ground: spikes or a pit
 if(p.ground){const dir=Math.sign(tx-p.x)||p.dir,land=p.x+dir*250;let spike=false;
  for(const [x,y,w] of map.spikes){const drop=y-p.y;if(drop<-4||drop>260)continue;const d=(dir>0?x-p.x:p.x-(x+w)),lead=95+drop*.55;if(d>0&&d<lead){spike=true}else if(jump&&Math.abs(drop)<4&&land>x-50&&land<x+w+50&&d>0)jump=false}
  if(spike)jump=true;
  const ahead=p.x+dir*60;if(Math.abs(tx-p.x)>50&&groundBelow(s,ahead,p.y)>p.y+180&&!(ai.next&&ai.next.y>p.y+40&&!ai.next.ground))jump=true}
 // in the air: steer and use the air jump at the top of the arc when still below the target ledge
 if(!p.ground){const n=ai.next;if(n){tx=clamp(tx,n.x0+30,n.x1-30);const below=p.y>n.y-20,over=p.x>n.x0&&p.x<n.x1;if(p.vy>-120&&p.jumps<1&&(below&&(n.y<p.y-30||!over)))jump=true}else if(p.vy>-80&&p.jumps<1&&g.y<p.y-60)jump=true;if(groundBelow(s,p.x,p.y)>WATER&&p.jumps<1&&p.vy>0)jump=true;
  for(const [x,y,w] of map.spikes){const fx=p.x+p.vx*.35;if(y>p.y&&y-p.y<420&&fx>x-30&&fx<x+w+30){if(p.vy>0&&p.jumps<1)jump=true;tx=p.x+Math.sign(p.vx||1)*400}}}
 // unstick
 if(Math.abs(p.x-ai.stuckX)<2&&Math.abs(tx-p.x)>40){ai.stuckT+=DT;if(ai.stuckT>.7){jump=true;ai.stuckT=0}}else{ai.stuckT=0;ai.stuckX=p.x}
 const dx=tx-p.x;out.left=dx<-14;out.right=dx>14;out.down=down;out.jump=jump?!p.jumpHeld:p.vy<0&&!p.ground;
 // fight: attack an enemy in reach; race bots shove only now and then
 const foe=s.players.find(q=>q!==p&&q.ko<=0&&(s.mode==='race'||q.team!==p.team)&&Math.abs(q.y-p.y)<80&&(q.x-p.x)*(p.dir)>-10&&Math.abs(q.x-p.x)<105);
 if(foe&&p.atkCd<=0&&s.rand()<D.aim*(s.mode==='race'?.12:1)){out.attack=!p.atkHeld;if(Math.sign(foe.x-p.x))out.left=foe.x<p.x,out.right=foe.x>p.x}
 if(g.hunt!==undefined&&p.ground&&p.dashCd<=0){const q=s.players[g.hunt];if(q&&Math.abs(q.x-p.x)<320&&Math.abs(q.x-p.x)>140&&Math.abs(q.y-p.y)<60&&s.rand()<D.aim*.08)out.dash=true}
 if(s.mode==='race'&&p.ground&&p.dashCd<=0&&Math.abs(dx)>400&&s.rand()<D.dodge*.02&&groundBelow(s,p.x+p.dir*170,p.y)<=p.y+4)out.dash=true;
 return out}

/* ---------------------------------------------------------------- step */
function step(s,input={}){if(s.done)return s;s.time+=DT;const inputs=s.players.map(p=>p.bot?bot(s,p):input);
 s.players.forEach((p,i)=>stepPlayer(s,p,inputs[i]));
 if(s.mode==='flag')stepFlag(s);else if(s.mode==='treasure')stepTreasure(s);else stepRace(s);return s}
function mvp(s){const sc=p=>s.mode==='flag'?p.caps*5+p.returns*2+p.kills:s.mode==='treasure'?p.coins*2+p.kills:-(p.finish??1e5)+p.x/1e4;return s.players.slice().sort((a,b)=>sc(b)-sc(a))[0].i}
const api={DT,MODES,MAPS,RULES,HERO,DIFF,WATER,create,step,bot,mvp,moverPos,surfaceOf,route,groundBelow};
if(typeof module!=='undefined')module.exports=api;root.PirateArena2Core=api;
})(typeof window!=='undefined'?window:globalThis);
