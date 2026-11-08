/* Read-only stage mechanisms from authoritative public timers, existing painted art. */
(function(root){'use strict';
function label(ctx,t,x,y,size=19,col='#ffe3a2'){ctx.fillStyle=col;ctx.font='bold '+size+'px Georgia';ctx.textAlign='center';ctx.fillText(t,x,y);ctx.textAlign='left'}
function line(ctx,x,y,x2,y2,color,width=3){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke()}
function cannon(ctx,s,props,V,side){
 for(const y of [550,450,360])for(const right of [false,true]){const firing=s.time-s.lastFire<.2&&s.lastFireFrom===(right?'right':'left')&&s.lastFireLanes?.includes(y),recoil=firing?10:0;V.prop(ctx,props,2,right?1170:0,y+35,110,20);V.prop(ctx,props,1,right?1184+recoil:-14-recoil,y-40,110,76,right)}
 for(const cover of s.covers){if(cover.hp>0){for(let k=0;k<3;k++)V.prop(ctx,props,2,cover.x-20,522+k*19,40,20);for(let k=0;k<3;k++){ctx.fillStyle=k<cover.hp?'#e3c777':'#253d45';ctx.fillRect(cover.x-15+k*11,510,8,5)}}else{V.prop(ctx,props,2,cover.x-25,575,50,7);label(ctx,'↻ '+Math.ceil(cover.repairAt-s.time)+'s',cover.x,515,16,'#b5c9c7')}
  const age=s.time-cover.lastHit;if(age>=0&&age<.35)for(let k=0;k<6;k++){const a=k*Math.PI/3,r=10+age*80;line(ctx,cover.x+Math.cos(a)*r,546+Math.sin(a)*r,cover.x+Math.cos(a)*(r+7),546+Math.sin(a)*(r+7),'#e5b66a',3)}
 }
 for(const d of root.PirateArenaCannon.defenses){V.prop(ctx,props,5,d.x-23,d.y-65,46,65);ctx.strokeStyle='#8ee8e1';ctx.lineWidth=3;ctx.beginPath();ctx.arc(d.x,d.y-43,17,-Math.PI/2,Math.PI*1.5);ctx.stroke()}
 if(s.warning)for(const y of s.warning.lanes){ctx.fillStyle='#f17b4735';ctx.fillRect(0,y-32,1280,64);line(ctx,0,y-32,1280,y-32,'#ffc28499',2);label(ctx,s.warning.from==='left'?'→':'←',s.warning.from==='left'?90:1190,y+9,35)}
 for(const shot of s.shots){ctx.fillStyle='#172934';ctx.beginPath();ctx.arc(shot.x,shot.y,12,0,7);ctx.fill();line(ctx,shot.x-(shot.vx>0?28:-28),shot.y,shot.x,shot.y,'#f4b66d',5)}
 const age=s.time-s.lastFire;if(age>=0&&age<.45)for(const y of s.lastFireLanes||[]){const x=s.lastFireFrom==='left'?78:1202;ctx.fillStyle='#edcf9e'+Math.round((1-age/.45)*105).toString(16).padStart(2,'0');for(let k=0;k<3;k++){ctx.beginPath();ctx.ellipse(x+(k-1)*12,y-10-age*24,10+age*38,8+age*24,0,0,7);ctx.fill()}}
 for(let i=0;i<2;i++){if(s.practice&&i===1)continue;const p=s.players[i];if(p.wardUntil>s.time){ctx.strokeStyle=i===side?'#95f3e3':'#ffc08f';ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(p.x,p.y-42,46,55,0,0,7);ctx.stroke();label(ctx,(p.wardUntil-s.time).toFixed(1)+'s',p.x+78,p.y-40,18)}}
}
function race(ctx,s,props,V,side,time){
 for(const x of [330,930])V.trap(ctx,props,x,80,s.time%3<1.1);
 const g=s.raceGate,color=g.closed?'#f1a071':g.warning?'#f2d280':'#86e3ce';for(const x of [765,813]){ctx.save();ctx.translate(x,505);ctx.rotate(Math.PI/2);V.prop(ctx,props,2,0,-7,75,14);ctx.restore()}V.prop(ctx,props,2,751,496,76,17);if(g.closed)for(const y of [525,550,573])V.prop(ctx,props,2,770,y,42,13);label(ctx,g.closed?'TULLAN':g.warning?'QAPANIR':'AÇIQ',790,475,18,color);
 V.prop(ctx,props,5,155,516,50,65);label(ctx,'⚙ KÖRPÜ',180,503,17);if(s.bridgeUntil>s.time){V.prop(ctx,props,2,290,575,80,12);label(ctx,Math.ceil(s.bridgeUntil-s.time)+'s',330,525,17,'#91e5d6')}
 const bridge=s.platforms.find(b=>b.kind==='crumble');if(!bridge.solid){V.prop(ctx,props,2,bridge.x,bridge.y,42,15);V.prop(ctx,props,2,bridge.x+bridge.w-42,bridge.y,42,15);ctx.strokeStyle='#a78856';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(bridge.x+25,bridge.y+10);ctx.quadraticCurveTo(bridge.x+bridge.w/2,bridge.y+90,bridge.x+bridge.w-25,bridge.y+10);ctx.stroke();label(ctx,'↻ '+Math.ceil(bridge.hiddenUntil-s.time)+'s',620,bridge.y-22,17)}else if(bridge.stoodAt!==null){label(ctx,'⚠ ÇÖKÜR',790,bridge.y-24,19,'#ffc084');line(ctx,bridge.x,bridge.y,bridge.x+bridge.w,bridge.y,'#ffd37c',4)}else label(ctx,'ÜST KƏSİK YOL',790,bridge.y-24,17,'#ccebdc');
 for(const [x,caption]of [[650,'YOXLAMA'],[1190,'FİNİŞ']]){V.prop(ctx,props,8,x-12,482,24,98);V.banner(ctx,x+2,482,45,28,x===650?'#93d8d0':'#e6ce85',time);label(ctx,caption,x,469,17)}
 const q=s.race[side];if(s.time-q.checkpointAt<1)label(ctx,'✓ YOXLAMA ALINDI',650,357,25,'#a5f5d8');
}
root.PirateArenaCourseView={cannon,race};
})(typeof window!=='undefined'?window:globalThis);
