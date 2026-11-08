/* Additional Arena objectives. Deterministic, transport-independent, no storage. */
(function(root){'use strict';
const Puzzle=typeof module!=='undefined'?require('./arena-puzzle.js'):root.PirateArenaPuzzle;
const Race=typeof module!=='undefined'?require('./arena-race.js'):root.PirateArenaRace;
const Territory=typeof module!=='undefined'?require('./arena-territory.js'):root.PirateArenaTerritory;
const DT=1/60,SWITCHES=[280,640,1000];
const INFO={puzzle:{title:'Puzzle Duel',limit:180,description:Puzzle.description}};
INFO.race={title:'Obstacle Race',limit:150,description:'İki dövrə: orta yoxlama nöqtəsindən sağ finişə çat. Alt qapı vaxtla bağlanır: gözlə və ya tullan. Hərəkətli platformalar və tez çökən üst körpü daha sürətli marşrutdur. Başlanğıcdakı ⚙ ling ilk tələyə 6 saniyəlik körpü salır. Dövrə vaxtını yaxşılaşdır.'};
INFO.flag={title:'Capture the Flag',limit:180,description:'Rəqib bayrağını öz bazana qaytar. Öz bayrağın bazada olmalıdır. ⚙ yaxın rəqibi dayandırır və bayrağı salır. Yan platformalarla üst qaçış yoluna qalx. Öz bazanın lingi bayrağı3s qoruyur,9s fasilə ilə. Daşıyıcı yavaşıdır və dash edə bilmir. İlk3tutma qalibdir.'};
INFO.control={title:'Island Control',limit:150,description:'Liman, yuxarı top qülləsi və siqnal mövqeyini tut.3s qalmaq ərazini ələ keçirir; mübahisədə xal dayanır. Mərkəzə platformayla qalx. Sahibi ⚙ ilə0.6s xəbərdarlıqdan sonra qısa məsafəli itələmə atəşi açır. Tullan və ya arxasına keç. İlk100xal qalibdir.'};
const has=m=>typeof m==='string'&&Object.prototype.hasOwnProperty.call(INFO,m);
function init(s){if(!has(s.mode))return;if(s.mode==='race'){Race.init(s);return}if(s.mode==='flag'){s.platforms=[];s.flags=[90,1190].map((x,owner)=>({owner,x,y:580,carrier:null,home:true,droppedAt:0}));s.players.forEach(p=>{p.carryFlag=null;p.tagCool=0});Territory.flagInit(s);return}if(s.mode==='control'){s.platforms=[];s.points=[260,640,1020].map(x=>({x,owner:null,claim:null,progress:0,contested:false,tick:0}));s.players.forEach(p=>p.tagCool=0);Territory.controlInit(s);return}Puzzle.init(s);}
function bot(s,p){if(s.practice)return{};if(s.mode==='race')return Race.bot(s,p);if(s.mode==='flag')return Territory.flagBot(s,p);if(s.mode==='control')return Territory.controlBot(s,p);return Puzzle.bot(s,p);}
function finish(s,w){s.done=true;s.winner=w;}
function before(s){if(s.mode==='flag'||s.mode==='control')s.players.forEach(p=>p.tagCool=Math.max(0,p.tagCool-DT));if(s.mode==='race')Race.before(s)}
function resetFlag(f){f.carrier=null;f.home=true;f.x=f.owner?1190:90;f.y=580;f.droppedAt=0}
function flag(s,inputs){
 Territory.flagInput(s,inputs);
 for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i],a=inputs[i],other=s.players[1-i];
  if(a.interact&&!p.interactHeld&&p.tagCool<=0){p.tagCool=1.2;if((!s.practice||i!==0)&&Math.abs(p.x-other.x)<75&&Math.abs(p.y-other.y)<65&&other.inv<=0){if(other.carryFlag!==null){const f=s.flags[other.carryFlag];f.carrier=null;f.home=false;f.x=other.x;f.y=580;f.droppedAt=s.time;other.carryFlag=null}other.inv=1.3;other.x=Math.max(30,Math.min(1250,other.x+(Math.sign(other.x-p.x)||p.dir)*85))}}
  p.interactHeld=!!a.interact;
 }
 for(const f of s.flags){if(f.carrier!==null){const p=s.players[f.carrier];f.x=p.x;f.y=p.y;continue}if(!f.home&&s.time-f.droppedAt>=10){resetFlag(f);continue}
  for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i];if(Math.abs(p.x-f.x)>35||Math.abs(p.y-f.y)>38)continue;if(i===f.owner){if(!f.home)resetFlag(f)}else if(p.carryFlag===null&&p.inv<=0&&s.baseWardUntil[f.owner]<=s.time){f.carrier=i;f.home=false;p.carryFlag=f.owner;p.dash=0;break}}
 }
 for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i];if(p.carryFlag!==null&&s.flags[i].home&&Math.abs(p.x-(i?1190:90))<45){resetFlag(s.flags[p.carryFlag]);p.carryFlag=null;p.score++}}
 const w=s.players.map((p,i)=>p.score>=3&&(!s.practice||i===0));if(w.some(Boolean))finish(s,w[0]&&w[1]?-1:w[0]?0:1);if(s.time>=180&&!s.done){const a=s.players[0].score,b=s.players[1].score;finish(s,s.practice?0:a===b?-1:a>b?0:1)}
}
function control(s,inputs){
 for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i],a=inputs[i],o=s.players[1-i];if(a.interact&&!p.interactHeld&&p.tagCool<=0){p.tagCool=3;if(Territory.controlActivate(s,i)){}else if(!s.practice&&Math.abs(o.x-p.x)<85&&Math.abs(o.y-p.y)<65&&o.inv<=0){o.x=Math.max(30,Math.min(1250,o.x+(o.x>=p.x?120:-120)));o.inv=1.2}}p.interactHeld=!!a.interact;}
 Territory.controlAfter(s);
 for(const q of s.points){const inside=s.players.map((p,i)=>(!s.practice||i===0)&&Math.abs(p.x-q.x)<70&&Math.abs(p.y-(q.y??580))<65);q.contested=inside[0]&&inside[1];if(q.contested)continue;
  const i=inside[0]?0:inside[1]?1:null;
  if(i!==null&&q.owner!==i){if(q.claim!==i){q.claim=i;q.progress=0}q.progress+=DT;if(q.progress>=3){q.owner=i;q.progress=0;q.claim=null;q.tick=0}}
  else if(i===q.owner&&i!==null){q.progress=0;q.claim=null}
  else if(i===null){q.progress=Math.max(0,q.progress-DT*.5);if(q.progress===0)q.claim=null}
  if(q.owner!==null){q.tick+=DT;if(q.tick>=1){q.tick-=1;s.players[q.owner].score++}}
 }
 const w=s.players.map((p,i)=>p.score>=100&&(!s.practice||i===0));if(w.some(Boolean))finish(s,w[0]&&w[1]?-1:w[0]?0:1);if(s.time>=150&&!s.done){const a=s.players[0].score,b=s.players[1].score;finish(s,s.practice?0:a===b?-1:a>b?0:1)}
}
function after(s,inputs){if(!has(s.mode))return;if(s.mode==='race'){Race.after(s,inputs);return}if(s.mode==='flag'){flag(s,inputs);return}if(s.mode==='control'){control(s,inputs);return}

 Puzzle.after(s,inputs);
}

const api={territory:Territory,race:Race,puzzle:Puzzle,has,info:m=>INFO[m],init,bot,before,after,SWITCHES};if(typeof module!=='undefined')module.exports=api;root.PirateArenaObjectives=api;
})(typeof window!=='undefined'?window:globalThis);
