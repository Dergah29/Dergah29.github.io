/* Pirate Strike — Meyxana room sound and table-game effects (synthesised with WebAudio; no samples).
 * Ambience: a low murmur of voices, the fire crackling, now and then a creaking floorboard or chair and a
 * clink of glass. Effects: checker clicks and captures, dice rattle, knife throw/thunk/clang, chalk, quest-like
 * accept and coin rewards. Everything follows the game's sound switch (pf-sound) and Effects volume
 * (PirateMusic.sfx); music is the 'tavern' track of the shared music director. Stops fully on close. */
(()=>{'use strict';
if(window.PirateTavernAudio)return;
function create(){
 const PM=window.PirateMusic;let ctx=null,out=null,amb=null,nodes=[],timers=[],off=null,alive=true;
 const level=()=>{try{if(PM)return PM.sfx;return localStorage.getItem('pf-sound')==='off'?0:1}catch{return 1}};
 function ensure(){if(ctx)return ctx;try{ctx=PM?.ensure?.()||new (window.AudioContext||window.webkitAudioContext)()}catch{ctx=null}if(!ctx)return null;
  out=ctx.createGain();out.gain.value=level();out.connect(ctx.destination);amb=ctx.createGain();amb.gain.value=.0;amb.connect(out);
  off=PM?.onChange?.(()=>apply())||null;return ctx}
 function apply(){if(!out)return;const t=ctx.currentTime;out.gain.cancelScheduledValues(t);out.gain.setTargetAtTime(level(),t,.1)}
 const poll=setInterval(()=>apply(),500);   // the SOUND switch lives in localStorage; follow it while open
 let noiseBuf=null;function noise(){if(noiseBuf)return noiseBuf;const n=ctx.sampleRate*2,b=ctx.createBuffer(1,n,ctx.sampleRate),d=b.getChannelData(0);let last=0;for(let i=0;i<n;i++){const w=Math.random()*2-1;last=(last+.02*w)/1.02;d[i]=w*.5+last*3}noiseBuf=b;return b}
 function burst({dur=.1,freq=1200,q=1,type='bandpass',gain=.3,at=0,attack=.002,dest=out,rate=1}){const c=ctx,s=c.createBufferSource();s.buffer=noise();s.playbackRate.value=rate;const f=c.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q;const g=c.createGain(),t=c.currentTime+at;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+attack);g.gain.exponentialRampToValueAtTime(.0005,t+dur);s.connect(f);f.connect(g);g.connect(dest);s.start(t,Math.random());s.stop(t+dur+.05)}
 function tone({f=440,f2=null,dur=.2,type='sine',gain=.2,at=0,dest=out,attack=.005}){const c=ctx,o=c.createOscillator(),g=c.createGain(),t=c.currentTime+at;o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+attack);g.gain.exponentialRampToValueAtTime(.0005,t+dur);o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+.05)}
 function startAmbience(){
  if(!ensure()||nodes.length)return;const c=ctx,t=c.currentTime;amb.gain.cancelScheduledValues(t);amb.gain.setValueAtTime(0,t);amb.gain.linearRampToValueAtTime(1,t+1.5);
  // murmur: two band-limited noise layers whose loudness wanders like a room of voices
  for(const [fq,g0] of [[420,.05],[900,.025]]){const s=c.createBufferSource();s.buffer=noise();s.loop=true;s.playbackRate.value=.5;const f=c.createBiquadFilter();f.type='bandpass';f.frequency.value=fq;f.Q.value=.9;const g=c.createGain();g.gain.value=g0;
   const lfo=c.createOscillator(),lg=c.createGain();lfo.frequency.value=.13+Math.random()*.1;lg.gain.value=g0*.6;lfo.connect(lg);lg.connect(g.gain);s.connect(f);f.connect(g);g.connect(amb);s.start();lfo.start();nodes.push(s,lfo)}
  const tick=(fn,min,max)=>{const h=setTimeout(()=>{if(!alive)return;try{fn()}catch{}tick(fn,min,max)},min+Math.random()*(max-min));timers.push(h)};
  tick(()=>{for(let i=0;i<1+Math.floor(Math.random()*3);i++)burst({dur:.03+Math.random()*.05,freq:1800+Math.random()*2500,q:3,gain:.05+Math.random()*.05,at:i*.05,dest:amb})},120,700);   // fire crackle
  tick(()=>{const f=180+Math.random()*120;tone({f,f2:f*(.8+Math.random()*.4),dur:.35+Math.random()*.3,type:'sawtooth',gain:.012,dest:amb})},5000,11000);   // floorboard / chair creak
  tick(()=>{const f=2400+Math.random()*1800;tone({f,dur:.5,gain:.025,dest:amb});tone({f:f*1.51,dur:.35,gain:.012,at:.01,dest:amb})},4000,9000);   // glasses
  tick(()=>{burst({dur:.18,freq:500,q:.7,gain:.05,dest:amb});burst({dur:.12,freq:300,q:1,gain:.05,at:.09,dest:amb})},7000,15000);   // a laugh-like swell / a step
 }
 function sfx(name){
  if(!alive||!ensure())return;if(ctx.state==='suspended')ctx.resume?.().catch(()=>{});
  switch(name){
   case'click':tone({f:900,dur:.05,gain:.08,type:'triangle'});break;
   case'place':burst({dur:.07,freq:1500,q:2,gain:.25});tone({f:320,dur:.08,gain:.08,type:'triangle'});break;
   case'capture':burst({dur:.09,freq:1100,q:2,gain:.3});burst({dur:.08,freq:1900,q:3,gain:.2,at:.06});break;
   case'king':for(let i=0;i<3;i++)tone({f:[660,880,1320][i],dur:.25,gain:.08,at:i*.08,type:'triangle'});break;
   case'chalk':burst({dur:.18,freq:3200,q:.8,gain:.12,type:'highpass'});break;
   case'chalk2':burst({dur:.22,freq:2600,q:.8,gain:.1,type:'highpass'});break;
   case'dice':for(let i=0;i<7;i++)burst({dur:.04,freq:2000+Math.random()*1500,q:4,gain:.18,at:i*.07+Math.random()*.03});break;
   case'diceLand':burst({dur:.06,freq:1400,q:3,gain:.3});burst({dur:.05,freq:1700,q:3,gain:.15,at:.08});break;
   case'diceTable':for(let i=0;i<4;i++)burst({dur:.03,freq:2200,q:4,gain:.05,at:i*.06,dest:amb||out});break;
   case'hold':tone({f:520,f2:780,dur:.18,gain:.08,type:'triangle'});break;
   case'bust':tone({f:300,f2:150,dur:.45,gain:.12,type:'sawtooth'});break;
   case'knifeThrow':burst({dur:.16,freq:2500,q:.6,gain:.12,type:'highpass',rate:1.5});break;
   case'knifeHit':case'thunk':burst({dur:.09,freq:260,q:1.4,gain:name==='thunk'?.15:.45});tone({f:130,f2:90,dur:.12,gain:.18});break;
   case'knifeClash':tone({f:2200,dur:.5,gain:.12,type:'triangle'});tone({f:3300,dur:.35,gain:.07,at:.01});burst({dur:.1,freq:4000,q:2,gain:.15});break;
   case'stage':for(let i=0;i<4;i++)tone({f:[523,659,784,1046][i],dur:.22,gain:.08,at:i*.09,type:'triangle'});break;
   case'start':tone({f:392,dur:.15,gain:.07,type:'triangle'});tone({f:587,dur:.25,gain:.07,at:.12,type:'triangle'});break;
   case'win':for(let i=0;i<5;i++)tone({f:[523,659,784,1046,1318][i],dur:.35,gain:.09,at:i*.1,type:'triangle'});break;
   case'lose':for(let i=0;i<3;i++)tone({f:[392,330,262][i],dur:.4,gain:.09,at:i*.18,type:'triangle'});break;
   case'draw':tone({f:440,dur:.3,gain:.08,type:'triangle'});tone({f:440,dur:.3,gain:.08,at:.2,type:'triangle'});break;
   case'coin':for(let i=0;i<6;i++){tone({f:1800+i*120,dur:.12,gain:.06,at:i*.06});tone({f:2700+i*150,dur:.08,gain:.03,at:i*.06+.02})}break;
   case'open':tone({f:330,f2:220,dur:.5,gain:.04,type:'sawtooth'});burst({dur:.3,freq:400,q:.6,gain:.06});break;
   case'talk':tone({f:600+Math.random()*200,dur:.03,gain:.025,type:'square'});break;
   case'choice':tone({f:740,dur:.08,gain:.06,type:'triangle'});break;
  }
 }
 return{
  start(){startAmbience()},
  sfx,
  pause(){if(amb&&ctx){const t=ctx.currentTime;amb.gain.cancelScheduledValues(t);amb.gain.setTargetAtTime(0,t,.2)}},
  resume(){if(amb&&ctx){const t=ctx.currentTime;amb.gain.cancelScheduledValues(t);amb.gain.setTargetAtTime(1,t,.3)}},
  get running(){return nodes.length>0&&alive},
  stop(){alive=false;clearInterval(poll);for(const h of timers)clearTimeout(h);timers=[];
   if(ctx&&amb){const t=ctx.currentTime;amb.gain.cancelScheduledValues(t);amb.gain.setTargetAtTime(0,t,.08)}
   const ns=nodes;nodes=[];setTimeout(()=>{for(const n of ns)try{n.stop()}catch{}try{amb?.disconnect();out?.disconnect()}catch{}},300);off?.()}
 };
}
window.PirateTavernAudio={create};
})();
