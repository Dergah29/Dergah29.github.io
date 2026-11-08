/* Public pirate mechanisms; deterministic state only, no DOM or hidden answer. */
(function(root){'use strict';
const DT=1/60,SWITCHES=[280,640,1000],LIT=[true,false,true];
const description='Məbədin üç kilidini aç. Əvvəl daşdakı işıqlı möhürləri linglərlə uyğunlaşdır. Sonra güzgüləri çevirib işığı qəbulediciyə çatdır. Sonda orta təzyiq lingini ⚙ saxlayıb doldur, soldakı açarı götür və vaxt bitmədən sağ qapını aç.';
function board(){return{source:{x:120,y:400,dir:0},mirrors:[{x:280,y:400},{x:280,y:250},{x:1000,y:250}],receiver:{x:1000,y:355}}}
const vectors=[[1,0],[0,1],[-1,0],[0,-1]];
function trace(b,values){let{x,y,dir}=b.source;const segments=[],seen=new Set();for(let n=0;n<12;n++){
 const key=x+','+y+','+dir;if(seen.has(key))break;seen.add(key);const [dx,dy]=vectors[dir];let dist=dx>0?1280-x:dx<0?x:dy>0?580-y:y-160,hit=null;
 for(const [index,m] of [...b.mirrors,b.receiver].entries()){const along=(m.x-x)*dx+(m.y-y)*dy,cross=(m.x-x)*dy-(m.y-y)*dx;if(Math.abs(cross)<.01&&along>.01&&along<dist+.01){dist=along;hit=index}}
 const toX=x+dx*dist,toY=y+dy*dist;segments.push({x,y,toX,toY});if(hit===b.mirrors.length)return{segments,connected:true};if(hit===null)break;x=toX;y=toY;dir=((values[hit]?3:1)-dir+4)%4;
 }return{segments,connected:false}}
function solve(b){for(let mask=0;mask<8;mask++){const values=[mask&1,(mask>>1)&1,(mask>>2)&1];if(trace(b,values).connected)return values}return null}
function init(s){s.platforms=[];s.puzzles=[0,1].map(()=>({round:0,values:[0,0,0],sequence:0,mistakes:0,flash:0,plateCharge:0,gateUntil:0,keyHeld:false}));s.puzzleBoard=board();s.puzzleStencil=LIT.slice();}
function bot(s,p){const q=s.puzzles[s.players.indexOf(p)];if(!q||q.round>=3)return{};let k,hold=false;
 if(q.round===0)k=s.puzzleStencil.findIndex((v,i)=>Number(v)!==q.values[i]);
 else if(q.round===1){const plan=solve(s.puzzleBoard);if(!plan)return{};k=plan.findIndex((v,i)=>v!==q.values[i])}
 else{k=q.gateUntil<=s.time?1:q.keyHeld?2:0;hold=k===1}
 if(k<0)return{};const dx=SWITCHES[k]-p.x,near=Math.abs(dx)<32;return{left:!near&&dx< -12,right:!near&&dx>12,interact:near&&(hold||!p.interactHeld)};
}
function after(s,inputs){for(let i=0;i<2;i++){
 if(s.practice&&i===1)continue;const p=s.players[i],q=s.puzzles[i],a=inputs[i];q.flash=Math.max(0,q.flash-DT);
 if(q.round===2&&q.gateUntil>0&&s.time>=q.gateUntil){q.gateUntil=0;q.keyHeld=false;q.sequence=0;q.plateCharge=0;q.mistakes++}
 const floor=Math.abs(p.y-580)<20,k=floor?SWITCHES.findIndex(x=>Math.abs(p.x-x)<42):-1,edge=a.interact&&!p.interactHeld;
 if(q.round===2){
  if(q.gateUntil<=s.time&&k===1&&a.interact){q.plateCharge=Math.min(1.2,q.plateCharge+DT);if(q.plateCharge>=1.2-1e-8){q.gateUntil=s.time+8;q.sequence=1;q.flash=.35}}
  else if(q.gateUntil<=s.time)q.plateCharge=Math.max(0,q.plateCharge-DT*2);
  if(edge&&q.gateUntil>s.time){if(k===0){q.keyHeld=true;q.sequence=2;q.flash=.35}if(k===2&&q.keyHeld){q.round=3;q.sequence=3;p.score=3;q.flash=.35}}
 }else if(q.round<2&&k>=0&&edge){q.flash=.35;q.values[k]=1-q.values[k];const connected=q.round===0?q.values.every((v,j)=>v===Number(s.puzzleStencil[j])):trace(s.puzzleBoard,q.values).connected;if(connected){q.round++;q.values=q.round===1?[0,0,1]:[0,0,0];p.score=q.round}}
 p.interactHeld=!!a.interact;
 }
 const complete=s.puzzles.map((q,i)=>q.round===3&&(!s.practice||i===0));if(complete.some(Boolean)){s.done=true;s.winner=complete[0]&&complete[1]?-1:complete[0]?0:1}
 if(s.time>=180&&!s.done){s.done=true;const a=s.players[0].score,b=s.players[1].score;s.winner=s.practice?0:a===b?-1:a>b?0:1}
}
const api={description,board,trace,solve,init,bot,after,SWITCHES};if(typeof module!=='undefined')module.exports=api;root.PirateArenaPuzzle=api;
})(typeof window!=='undefined'?window:globalThis);
