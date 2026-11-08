/* Presentation-only feedback. Currency/HP/drop IDs remain owned by runtime.js. */
(()=>{'use strict';
const A=window.PirateAdventure;if(!A||A.polished)return;A.polished=true;
// Thumb-sized touch controls for the voyage (owner feedback: too small to press). Same sizes as the level engine.
{const st=document.createElement('style');st.id='av-touch-size';st.textContent='#pirate-adventure .av-controls .av-combat{gap:clamp(6px,1.6vh,12px)}'
 +'#pirate-adventure .av-controls .av-combat button{width:clamp(58px,14vh,84px);height:clamp(58px,14vh,84px);font-size:clamp(24px,6vh,34px)}'
 +'#pirate-adventure .av-controls .av-combat button[data-action=attack]{width:clamp(70px,18vh,100px);height:clamp(70px,18vh,100px)}'
 +'#pirate-adventure .av-controls .av-stick{width:clamp(116px,30vh,160px);height:clamp(116px,30vh,160px)}'
 +'#pirate-adventure .av-controls button.av-pause{width:52px;height:52px;border-radius:13px}';document.head.append(st)}
const P=A.Voyage.prototype,TAU=Math.PI*2;
class Feedback{
 constructor(a){this.a=a;this.clock=0;this.slashes=[];this.bursts=[];this.ghosts=[];this.flights=[];this.chests=[];this.freeze=0;this.goldPulse=0;this.audioGate={};this.voices=new Set();this.mq=matchMedia('(prefers-reduced-motion: reduce)')}
 get reduced(){return this.mq.matches}
 get enabled(){return this.a.u.hitEffects!==false}
 cap(list,item,n){list.push(item);if(list.length>n)list.splice(0,list.length-n)}
 burst(x,y,color='#ffe0a0',count=12){if(!this.enabled||this.reduced)return;for(let i=0;i<count;i++){const angle=TAU*i/count;this.cap(this.bursts,{x,y,vx:Math.cos(angle)*(80+i%4*20),vy:Math.sin(angle)*100-50,life:.32+i%3*.07,max:.5,color},100)}}
 swing(){const p=this.a.p;if(this.enabled&&!this.reduced)this.cap(this.slashes,{x:p.x+15,y:p.y+20,dir:p.dir,life:.19,max:.19},8)}
 strike(e){this.burst(e.x+15,e.y+20,'#ffdc86',15);if(this.enabled&&!this.reduced)this.freeze=.032;this.a.g.__combatFeedback?.haptic?.(performance.now())}
 defeat(e){if(this.enabled)this.cap(this.ghosts,{...e,dead:false,fxGhost:true,vx:this.a.p.dir*90,vy:-170,attack:0,hit:.3,life:.48,max:.48,skin:this.a.enemySkin(e)},10);this.burst(e.x+15,e.y+22,'#eed2a3',20)}
 collect(coin){this.goldPulse=1;this.burst(coin.x,coin.y,'#ffe7a1',6);if(!this.reduced)this.cap(this.flights,{x:coin.x-this.a.camera,y:coin.y,age:0,duration:.34+(this.flights.length%3)*.035},24)}
 chest(chest){if(this.enabled)this.cap(this.chests,{x:chest.x+chest.w/2,y:chest.y+25,life:1.2,max:1.2},6);this.burst(chest.x+25,chest.y+18,'#ffdf73',32)}
 bounce(coin,speed){if(speed>100&&Math.abs(coin.x-this.a.p.x)<450)this.a.sfx('coinDrop')}
 tick(dt){this.clock+=dt;this.goldPulse=Math.max(0,this.goldPulse-dt*3);this.a.goldDisplay+=(this.a.gold-this.a.goldDisplay)*Math.min(1,dt*13);if(Math.abs(this.a.gold-this.a.goldDisplay)<.02)this.a.goldDisplay=this.a.gold;
 for(const list of [this.slashes,this.chests])for(const e of list)e.life-=dt;
 for(const e of this.bursts){e.life-=dt;e.x+=e.vx*dt;e.y+=e.vy*dt;e.vy+=340*dt}
 for(const e of this.ghosts){e.life-=dt;if(!this.reduced){e.x+=e.vx*dt;e.y+=e.vy*dt;e.vy+=650*dt}}
 for(const e of this.flights)e.age+=dt;
 for(const k of ['slashes','bursts','ghosts','chests'])this[k]=this[k].filter(e=>e.life>0);this.flights=this.flights.filter(e=>e.age<e.duration);
 if(this.a.ac&&this.lastSound!==this.a.u.sound){this.lastSound=this.a.u.sound;this.a.gain.gain.setTargetAtTime(this.a.u.sound?.65:0,this.a.ac.currentTime,.012)}
 }
 stage(){return this.a.p.x<2500?'harbor':this.a.p.x<5100?'cave':'ship'}
 stageBackdrop(){const c=this.a.ctx,t=this.reduced?0:this.clock,stage=this.stage();c.save();
  if(stage==='harbor'){
   // Distant moored silhouettes and layers of moonlit animated sea, screen space.
   c.fillStyle='#152b32aa';for(let i=0;i<5;i++){let x=80+i*224-(this.a.camera*.035%224);
    c.fillRect(x+28,230,92,8);c.beginPath();c.moveTo(x,238);c.lineTo(x+152,238);c.lineTo(x+126,263);c.lineTo(x+26,263);c.fill();
    c.fillRect(x+70,167,3,73);c.beginPath();c.moveTo(x+76,169);c.lineTo(x+122,222);c.lineTo(x+76,222);c.closePath();c.fill();
   }
   const sheen=c.createLinearGradient(0,300,0,540);sheen.addColorStop(0,'#397e8060');sheen.addColorStop(1,'#081b2b00');c.fillStyle=sheen;c.fillRect(0,300,960,240);
   for(let i=0;i<48;i++){const x=(i*83+Math.sin(t*.6+i)*7+960)%960,y=324+(i*31)%192;
    c.fillStyle=i%3===0?'#b9dcb56b':'#87c3d74a';c.fillRect(x,y,16+i%5*5,1);
   }
  }else if(stage==='cave'){
   // Background stalactites and illuminated geodes, no gameplay collision change.
   for(let i=0;i<20;i++){const x=i*57-(this.a.camera*.04%57),height=24+(i*31)%83;
    c.fillStyle=i%2?'#122b3b9e':'#1b3543b6';c.beginPath();c.moveTo(x,0);c.lineTo(x+31,0);c.lineTo(x+16,height);c.closePath();c.fill();
   }
   for(let i=0;i<7;i++){const x=44+i*152-(this.a.camera*.09%152),y=190+i%3*39;
    const g=c.createRadialGradient(x,y,2,x,y,95);g.addColorStop(0,'#64cce44d');g.addColorStop(1,'#64cce400');c.fillStyle=g;c.fillRect(x-95,y-95,190,190);
    c.fillStyle=i%2?'#6bbed5a6':'#76d6cf9c';c.beginPath();c.moveTo(x-20,y+25);c.lineTo(x-4,y-37);c.lineTo(x+14,y+8);c.lineTo(x+25,y+27);c.closePath();c.fill();
   }
  }else{
   // Ship interiors: timber ribs, rigging, sail and lantern haze.
   c.fillStyle='#12283999';for(let i=0;i<8;i++){const x=i*160-(this.a.camera*.05%160);
    c.fillRect(x+17,58,16,335);c.fillRect(x+9,49,32,10);
    c.strokeStyle='#aa906b46';c.lineWidth=3;c.beginPath();c.moveTo(x+24,58);c.lineTo(x+152,320);c.moveTo(x+152,58);c.lineTo(x+24,320);c.stroke();
   }
   const fog=c.createLinearGradient(0,60,0,450);fog.addColorStop(0,'#eebd6c08');fog.addColorStop(.5,'#e5c16d1f');fog.addColorStop(1,'#1e384100');c.fillStyle=fog;c.fillRect(0,60,960,390);
  }
  c.restore();
 }
 stageWorld(){const a=this.a,c=a.ctx,t=this.reduced?0:this.clock,stage=this.stage(),left=a.camera-70,right=a.camera+1030;
  // All embellishments stay in render space; no changes to damage, physics or objects.
  c.save();
  if(stage==='harbor'){
   for(let x=Math.floor(left/300)*300+110;x<right;x+=300){
    c.fillStyle='#7f644d85';c.fillRect(x,355,9,70);c.fillStyle='#c1a87c99';c.fillRect(x-6,354,21,7);
    c.strokeStyle='#b5d3bd60';c.lineWidth=2;c.beginPath();c.moveTo(x+1,363);c.lineTo(x+53,363+Math.sin(t*2+x)*2);c.stroke();
   }
  }else if(stage==='cave'){
   for(let x=Math.floor(left/240)*240+70;x<right;x+=240){
    const pulse=.45+.15*Math.sin(t*2+x);
    const glow=c.createRadialGradient(x,332,2,x,332,57);glow.addColorStop(0,`rgba(87,233,226,${pulse})`);glow.addColorStop(1,'#60eee800');
    c.fillStyle=glow;c.fillRect(x-57,278,114,112);
    c.fillStyle='#2c6778aa';c.beginPath();c.moveTo(x-16,379);c.lineTo(x,341);c.lineTo(x+13,380);c.fill();
   }
  }else{
   for(let x=Math.floor(left/340)*340+180;x<right;x+=340){
    c.strokeStyle='#bc9f6c90';c.lineWidth=3;c.beginPath();c.moveTo(x,170);c.lineTo(x+32,356);c.stroke();
    c.fillStyle='#956c498c';c.fillRect(x-17,353,42,8);
    const g=c.createRadialGradient(x+17,305,3,x+17,305,75);g.addColorStop(0,'#ffd18366');g.addColorStop(1,'#ffc16d00');c.fillStyle=g;c.fillRect(x-58,230,150,150);
   }
  }
  c.restore();
 }
 drawBackground(){this.stageBackdrop();if(this.reduced)return;const c=this.a.ctx,t=this.clock;c.save();c.globalCompositeOperation='screen';for(let i=0;i<18;i++){const x=(i*137+Math.sin(t*.8+i)*14)%c.canvas.width,y=305+(i%5)*12;c.fillStyle=`rgba(80,188,206,${.045+.045*(.5+.5*Math.sin(t*2+i))})`;c.fillRect(x,y,22+i%4*12,1)}c.restore()}
 drawWorld(){const a=this.a,c=a.ctx,t=this.clock;this.stageWorld();
 // Torchlight is world-anchored. Flames/glows never replace collision surfaces.
 if(!this.reduced){for(let x=Math.floor(a.camera/620)*620+210;x<a.camera+1000;x+=620){const y=309;c.save();const flicker=.85+Math.sin(t*8+x)*.08+Math.sin(t*13+x)*.05;const glow=c.createRadialGradient(x,y,1,x,y,46);glow.addColorStop(0,'#ffd3754f');glow.addColorStop(1,'#ff9d1800');c.fillStyle=glow;c.fillRect(x-46,y-46,92,92);c.fillStyle='#453425';c.fillRect(x-3,y+12,6,58);c.strokeStyle='#c99b59';c.lineWidth=2;c.strokeRect(x-8,y-8,16,23);c.fillStyle='#ffd479';c.beginPath();c.ellipse(x,y+3,4*flicker,9*flicker,0,0,TAU);c.fill();c.restore()}}
 if(!this.enabled)return;
 for(const g of this.ghosts){c.save();c.globalAlpha=Math.max(0,g.life/g.max);if(!this.reduced){c.translate(g.x+15,g.y+24);c.rotate((1-g.life/g.max)*g.dir*.45);c.translate(-g.x-15,-g.y-24)}a.actor(g,g.skin);c.restore()}
 if(this.reduced)return;
 c.save();c.globalCompositeOperation='lighter';
 for(const s of this.slashes){const f=1-s.life/s.max;c.save();c.translate(s.x,s.y);c.scale(s.dir,1);c.globalAlpha=(1-f)*.9;c.strokeStyle='#ffe4a0';c.shadowColor='#ffc668';c.shadowBlur=10;c.lineWidth=7*(1-f)+1;c.beginPath();c.arc(4,-2,49,-1.15+f*.7,.8+f*.6);c.stroke();c.shadowBlur=0;c.strokeStyle='#fff9e5';c.lineWidth=2;c.beginPath();c.arc(4,-2,44,-1.1+f*.7,.75+f*.6);c.stroke();c.restore()}
 for(const chest of this.chests){const f=chest.life/chest.max;const glow=c.createRadialGradient(chest.x,chest.y,0,chest.x,chest.y,95);glow.addColorStop(0,`rgba(255,219,113,${f*.35})`);glow.addColorStop(1,'rgba(255,180,50,0)');c.fillStyle=glow;c.fillRect(chest.x-95,chest.y-95,190,190);c.fillStyle=`rgba(255,226,153,${f*.12})`;for(let i=-2;i<=2;i++){c.beginPath();c.moveTo(chest.x-10,chest.y);c.lineTo(chest.x+i*24-9,chest.y-105);c.lineTo(chest.x+i*24+9,chest.y-105);c.lineTo(chest.x+10,chest.y);c.fill()}}
 for(const e of this.bursts){c.globalAlpha=Math.min(1,e.life/e.max);c.fillStyle=e.color;c.fillRect(e.x-2,e.y-2,4,4)}c.globalAlpha=1;
 for(const coin of a.map.coins){if(a.coinIds.has(coin.id)||coin.delay>0||Math.abs(coin.x-a.camera-480)>540)continue;const shine=(Math.sin(t*5+coin.x)*.5+.5)**10;if(shine>.4){c.globalAlpha=shine*.7;c.strokeStyle='#fff9cc';c.lineWidth=1;c.beginPath();c.moveTo(coin.x-6,coin.y);c.lineTo(coin.x+6,coin.y);c.moveTo(coin.x,coin.y-6);c.lineTo(coin.x,coin.y+6);c.stroke()}}c.restore();
 }
 drawHUD(){const a=this.a,c=a.ctx;c.save();for(const f of this.flights){const t=f.age/f.duration,u=1-(1-t)**3,x=f.x+(476-f.x)*u,y=Math.max(13,f.y+(30-f.y)*u-Math.sin(t*Math.PI)*38);c.globalAlpha=1-t*.6;a.image('coin0.png',x-7,y-7,14,14)}c.globalAlpha=1;if(this.goldPulse>0){c.strokeStyle=`rgba(255,221,129,${this.goldPulse*.8})`;c.lineWidth=2;c.beginPath();c.arc(457,31,14+(1-this.goldPulse)*13,0,TAU);c.stroke()}c.restore()}
 tone(freq,when,duration,gain=.1,type='sine',end=freq){const a=this.a;if(this.voices.size>=24)return;const o=a.ac.createOscillator(),v=a.ac.createGain();o.type=type;o.frequency.setValueAtTime(freq,when);o.frequency.exponentialRampToValueAtTime(Math.max(30,end),when+duration);v.gain.setValueAtTime(.001,when);v.gain.exponentialRampToValueAtTime(gain,when+.005);v.gain.exponentialRampToValueAtTime(.001,when+duration);o.connect(v);v.connect(a.gain);this.voices.add(o);o.onended=()=>{this.voices.delete(o);o.disconnect();v.disconnect()};o.start(when);o.stop(when+duration+.01)}
 sound(k){const a=this.a;if(!['coin','coinDrop','chest','enemy'].includes(k))return false;if(!a.u.sound||!a.ac)return true;const now=a.ac.currentTime,gate=k==='coinDrop'?.075:k==='coin'?.045:.08;if(now-(this.audioGate[k]??-99)<gate)return true;this.audioGate[k]=now;a.soundLog.push(k);if(a.soundLog.length>80)a.soundLog.shift();
 if(k==='coinDrop'){this.tone(900,now,.09,.055,'triangle',520);this.tone(1710,now+.01,.065,.026,'sine',1430)}
 if(k==='coin'){this.tone(1318.51,now,.13,.08,'sine',1567.98);this.tone(1975.53,now+.035,.18,.04,'sine',2093)}
 if(k==='chest')for(const [i,f] of [392,493.88,587.33,783.99].entries())this.tone(f,now+i*.065,.44,.06,'sine',f*1.002);
 if(k==='enemy'){this.tone(155,now,.19,.1,'triangle',48);this.tone(260,now+.015,.13,.04,'sine',90)}return true}
}
const refresh=P.refresh;P.refresh=function(){refresh.call(this);const q=this.polish;if(q&&this.ac&&q.lastSound!==this.u.sound){q.lastSound=this.u.sound;this.gain.gain.setTargetAtTime(this.u.sound?.65:0,this.ac.currentTime,.012)}};
const close=P.close;P.close=function(){for(const voice of this.polish?.voices||[])try{voice.stop()}catch{}close.call(this)};
const reset=P.reset;P.reset=function(s){for(const voice of this.polish?.voices||[])try{voice.stop()}catch{}reset.call(this,s);this.polish=new Feedback(this);this.goldDisplay=this.gold};
const step=P.step;P.step=function(dt){if(!this.polish)this.polish=new Feedback(this);this.polish.tick(dt);if(this.polish.freeze>0){this.polish.freeze=Math.max(0,this.polish.freeze-dt);return}step.call(this,dt)};
const render=P.render;P.render=function(){render.call(this);if(this.map)this.polish?.drawHUD()};
const sfx=P.sfx;P.sfx=function(k){if(this.polish?.sound(k))return;sfx.call(this,k)};
})();
