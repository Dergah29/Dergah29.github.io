/* Cursed Island: independent playable traversal prototype. Blacktide runtime is unchanged. */
(()=>{'use strict';
const W=960,H=540,GROUND=380,GRAVITY=1200;
const words={
en:{title:'CURSED ISLAND',hint:'Explore the island. Avoid traps and reach the shrine.',back:'BACK TO ADVENTURE',done:'SHRINE REACHED',win:'Totem Shaman defeated! The island is free.',retry:'RETRY',jump:'JUMP',attack:'ATTACK',pause:'PAUSE',continue:'CONTINUE',stop:'BACK'},
az:{title:'LƏNƏTLİ ADA',hint:'Adanı araşdır. Tələlərdən yayın və məbədə çat.',back:'MACƏRAYA QAYIT',done:'MƏBƏDƏ ÇATDIN',win:'Totem Kahini məğlub edildi! Ada azaddır.',retry:'YENİDƏN',jump:'TULLAN',attack:'VUR',pause:'FASİLƏ',continue:'DAVAM ET',stop:'GERİ'},
tr:{title:'LANETLİ ADA',hint:'Adayı keşfet. Tuzaklardan kaç ve tapınağa ulaş.',back:'MACERAYA DÖN',done:'TAPINAĞA ULAŞTIN',win:'Totem Kahini yenildi! Ada kurtuldu.',retry:'TEKRAR',jump:'ZIPLA',attack:'VUR',pause:'DURAKLAT',continue:'DEVAM',stop:'GERİ'},
ru:{title:'ПРОКЛЯТЫЙ ОСТРОВ',hint:'Исследуйте остров и доберитесь до храма.',back:'НАЗАД',done:'ХРАМ НАЙДЕН',win:'Шаман тотемов побеждён! Остров свободен.',retry:'ЗАНОВО',jump:'ПРЫЖОК',attack:'АТАКА',pause:'ПАУЗА',continue:'ДАЛЕЕ',stop:'НАЗАД'},
pl:{title:'PRZEKLĘTA WYSPA',hint:'Odkryj wyspę, unikaj pułapek i dotrzyj do świątyni.',back:'POWRÓT',done:'DOTARŁEŚ DO ŚWIĄTYNI',win:'Szaman totemów pokonany! Wyspa wolna.',retry:'PONÓW',jump:'SKOK',attack:'ATAK',pause:'PAUZA',continue:'DALEJ',stop:'WRÓĆ'}};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const overlaps=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
// Procedural parallax art: no external asset dependency or licensing ambiguity.
function scenery(c,camera,zone,clock){
 const jungle=zone==='jungle',ruins=zone==='ruins';
 const mist=c.createLinearGradient(0,125,0,GROUND);
 mist.addColorStop(0,'#b0bf9a00');mist.addColorStop(1,jungle?'#8ac4a42d':ruins?'#b6b3a331':'#b79ac040');
 c.fillStyle=mist;c.fillRect(0,90,W,GROUND-90);
 // Three layers move at different speeds to establish depth.
 for(let layer=0;layer<3;layer++){
  const speed=[.10,.23,.42][layer],shift=camera*speed;
  const step=[245,184,147][layer],n=Math.ceil(W/step)+3;
  c.fillStyle=layer===0?'#102c34a0':layer===1?'#173e43c9':'#174d49df';
  for(let i=-1;i<n;i++){
   const x=i*step-(shift%step)+(layer*47),height=95+((i*47+layer*81+900)%85);
   if(jungle){
    c.fillRect(x+step*.48,GROUND-height,12+layer*4,height+28);
    for(let b=0;b<3;b++){c.beginPath();c.ellipse(x+step*.5+(b-1)*28,GROUND-height+18+b*9,39-layer*3,20,0,0,Math.PI*2);c.fill()}
    c.fillStyle='#6c9f7a25';c.fillRect(x+step*.48,GROUND-height+10,2,height-10);c.fillStyle=layer===0?'#102c34a0':layer===1?'#173e43c9':'#174d49df';
   }else if(ruins){
    c.fillRect(x+22,GROUND-height,24,height+8);c.fillRect(x+88,GROUND-height+17,23,height);
    c.fillRect(x+15,GROUND-height-9,106,15);
    c.clearRect(x+57,GROUND-height+40,17,Math.max(0,height-40));
    c.fillStyle='#a0ac9d20';c.fillRect(x+20,GROUND-height+20,7,32);c.fillStyle=layer===0?'#102c34a0':layer===1?'#173e43c9':'#174d49df';
   }else{
    c.beginPath();c.moveTo(x,GROUND);c.lineTo(x+step*.52,GROUND-height-65);c.lineTo(x+step,GROUND);c.fill();
    c.fillRect(x+step*.45,GROUND-height-44,18,94);
    c.fillStyle='#75c6c335';c.fillRect(x+step*.49,GROUND-height-38,4,20);c.fillStyle=layer===0?'#102c34a0':layer===1?'#173e43c9':'#174d49df';
   }
  }
 }
 // Atmospheric light shafts add depth to each biome without external assets.
 c.save();c.globalCompositeOperation='screen';
 const shaftColor=jungle?'rgba(167,242,172,0.075)':ruins?'rgba(218,220,171,0.055)':'rgba(129,224,238,0.065)';
 for(let i=0;i<5;i++){
  const anchor=i*247+65-(camera*.12%247);
  const sway=Math.sin(clock*.38+i)*22;
  c.fillStyle=shaftColor;c.beginPath();c.moveTo(anchor+sway,-15);
  c.lineTo(anchor+78+sway,-15);c.lineTo(anchor+225+sway,GROUND);
  c.lineTo(anchor+70+sway,GROUND);c.closePath();c.fill();
 }
 c.restore();
 // Fireflies/distant magic; purely visual and deterministic per frame.
 for(let i=0;i<25;i++){
  const x=((i*197-camera*.34)%1050+1050)%1050;
  const y=75+(i*67)%245+Math.sin(clock*.7+i*2)*7;
  c.fillStyle=i%3===0?'#f3da824d':'#79d2b446';c.beginPath();c.arc(x,y,i%4===0?2.4:1.2,0,Math.PI*2);c.fill();
 }
}

/* Camera-cropped procedural environment. No downloaded image assets or external licenses. */

/* Stage II transition: authored canvas landscape, no external asset dependency. */
function transitionLandscape(c,camera,clock){
 const left=camera-130,right=camera+W+130;
 if(right<1780||left>3820)return;
 c.save();
 // Distant cliff silhouettes and a castle that approaches as the player advances.
 for(let layer=0;layer<3;layer++){
  const shift=camera*[.12,.23,.38][layer],base=GROUND-24+layer*19;
  c.fillStyle=['#233c46','#2a4c50','#345851'][layer];
  c.beginPath();c.moveTo(camera-150,GROUND);
  for(let x=camera-150;x<=camera+W+180;x+=34){
   const wx=x-shift,h=56+Math.sin(wx*.009+layer*2)*34+Math.sin(wx*.021)*16;
   c.lineTo(x,base-h);
  }
  c.lineTo(camera+W+180,GROUND);c.fill();
 }
 // Sunlit haze, distant citadel spires and multi-plane canopy.
 const haze=c.createLinearGradient(0,60,0,GROUND);
 haze.addColorStop(0,'rgba(246,220,155,.17)');haze.addColorStop(1,'rgba(77,139,128,0)');
 c.fillStyle=haze;c.fillRect(camera,60,W,GROUND-60);
 for(const wx of [2080,2660,3190,3700]){
  if(wx<left-180||wx>right+180)continue;
  c.save();c.translate(wx,GROUND-100);
  c.fillStyle='#243c42';c.fillRect(-48,-115,96,115);
  c.fillStyle='#49645d';c.fillRect(-39,-137,78,28);
  for(let i=0;i<3;i++){c.fillStyle='#294449';c.fillRect(-39+i*28,-157,18,26)}
  c.fillStyle='#1a343a';c.beginPath();c.moveTo(-13,-158);c.lineTo(0,-198);c.lineTo(13,-158);c.fill();
  c.fillStyle='#8b9b86';c.fillRect(-3,-181,6,12);
  c.restore();
 }
 for(let i=0;i<13;i++){
  const wx=1800+i*160;if(wx<left-100||wx>right+100)continue;
  c.save();c.translate(wx,70+(i%3)*14);
  c.strokeStyle='#253f32';c.lineWidth=7;c.beginPath();c.moveTo(0,-90);c.bezierCurveTo(-24,0,18,45,Math.sin(clock*.5+i)*13,104);c.stroke();
  c.fillStyle='#254f3d';
  for(let j=0;j<5;j++){c.beginPath();c.ellipse((j%2?1:-1)*20,8+j*19,25,9,(j%2?1:-1)*.5,0,Math.PI*2);c.fill()}
  c.restore();
 }
 // Twin cascades falling between steep, vine-covered cliffs.
 for(const wx of [2220,3370]){
  if(wx<left-140||wx>right+140)continue;
  const waterfall=c.createLinearGradient(wx-32,0,wx+48,0);
  waterfall.addColorStop(0,'#31596c');waterfall.addColorStop(.3,'#b5e7dc');waterfall.addColorStop(.65,'#69b6c2');waterfall.addColorStop(1,'#1d576d');
  c.fillStyle='#253e3c';c.beginPath();c.moveTo(wx-95,GROUND);c.lineTo(wx-72,175);c.lineTo(wx-28,155);c.lineTo(wx+68,187);c.lineTo(wx+110,GROUND);c.fill();
  c.fillStyle=waterfall;c.fillRect(wx-27,185,55,GROUND-172);
  c.strokeStyle='#e7fff1a8';c.lineWidth=2;
  for(let i=0;i<7;i++){const sx=wx-22+i*8+Math.sin(clock*1.5+i)*2;c.beginPath();c.moveTo(sx,195);c.lineTo(sx+Math.sin(clock*3+i)*5,GROUND-10);c.stroke()}
  for(let i=0;i<9;i++){c.fillStyle='#d5f4e47c';c.beginPath();c.arc(wx-36+i*9,GROUND-4+Math.sin(clock*4+i)*4,3+(i%3),0,Math.PI*2);c.fill()}
 }
 // Ancient fallen statues and hanging vegetation identify the transition.
 for(const wx of [2050,2590,3030,3470]){
  if(wx<left-110||wx>right+110)continue;
  const sway=Math.sin(clock*.9+wx)*5;
  c.save();c.translate(wx,GROUND);
  c.fillStyle='#586b61';c.fillRect(-25,-113,50,112);
  c.fillStyle='#839184';c.beginPath();c.ellipse(0,-135,31,37,-.08,0,Math.PI*2);c.fill();
  c.fillStyle='#354b47';c.fillRect(-15,-145,8,6);c.fillRect(9,-145,8,6);
  c.strokeStyle='#263c3d';c.lineWidth=3;c.beginPath();c.moveTo(-12,-118);c.lineTo(5,-109);c.lineTo(19,-119);c.stroke();
  c.fillStyle='#9ba68d';c.fillRect(-34,-13,68,13);
  c.strokeStyle='#4d8663';c.lineWidth=5;c.beginPath();c.moveTo(-20,-167);c.bezierCurveTo(-48+sway,-98,13+sway,-85,-8,0);c.stroke();
  c.restore();
 }
 // The monumental gateway is the visible destination of Stage II.
 const gx=3720;if(gx>left-240&&gx<right+240){
  c.save();c.translate(gx,GROUND);
  c.fillStyle='#26383c';c.fillRect(-165,-215,330,215);
  c.fillStyle='#6b756d';for(let i=0;i<5;i++){const x=-155+i*69;c.fillRect(x,-236,52,24);c.fillRect(x+9,-202,34,202)}
  c.fillStyle='#98a28b';c.fillRect(-176,-210,352,17);
  c.fillStyle='#182d34';c.beginPath();c.moveTo(-71,0);c.lineTo(-71,-122);c.quadraticCurveTo(0,-202,71,-122);c.lineTo(71,0);c.fill();
  c.strokeStyle='#b8a36e';c.lineWidth=6;c.stroke();
  c.fillStyle='#c7ae6e';c.font='bold 20px Georgia';c.textAlign='center';c.fillText('ANCIENT RUINS',0,-248);
  c.fillStyle='#476c55';for(let i=0;i<8;i++)c.fillRect(-165+i*44,-205+(i%3)*14,6,38);
  c.restore();
 }
 // Lit camp lanterns and pirate banners connect the ruins to the voyage.
 for(const wx of [1960,2450,2920,3510]){
  if(wx<left-70||wx>right+70)continue;
  c.save();c.translate(wx,GROUND);
  c.fillStyle='#513b2c';c.fillRect(-3,-110,8,110);c.fillRect(-24,-111,42,7);
  c.fillStyle='#8a2c2f';c.beginPath();c.moveTo(16,-107);c.lineTo(61,-101);c.lineTo(52,-55);c.lineTo(17,-65);c.fill();
  c.fillStyle='#e5c69a';c.beginPath();c.arc(34,-88,8,0,Math.PI*2);c.fill();
  c.fillStyle='#493223';c.fillRect(-28,-97,13,24);
  const glow=c.createRadialGradient(-21,-83,2,-21,-83,49);
  glow.addColorStop(0,'rgba(255,192,91,.58)');glow.addColorStop(1,'rgba(255,192,91,0)');
  c.fillStyle=glow;c.fillRect(-72,-132,102,100);
  c.fillStyle='#ffdb85';c.fillRect(-25,-94,7,12);
  c.restore();
 }
 // Floating motes with a stable world-space pattern.
 for(let i=0;i<24;i++){const wx=1840+i*83;if(wx<left||wx>right)continue;c.fillStyle='#d2e4ad77';c.beginPath();c.arc(wx,125+(i*31)%190+Math.sin(clock*1.4+i)*8,1.7+(i%3)*.5,0,Math.PI*2);c.fill()}
 c.restore();
}

function islandBackdrop(c,camera,d,clock){
 const viewLeft=camera-100,viewRight=camera+W+100;
 const shrine=d.world.width-360;
 // Temple arches and glowing gateway live in world space, behind actors/ground.
 if(shrine+350>viewLeft&&shrine-220<viewRight){
  const x=shrine,y=GROUND-265;
  c.save();c.fillStyle='#1b2c38';c.fillRect(x-154,y+65,315,200);
  c.fillStyle='#354450';for(let i=0;i<4;i++){const px=x-144+i*95;c.fillRect(px,y+35,38,235);c.fillStyle='#65706e';c.fillRect(px-8,y+28,54,11);c.fillStyle='#354450'}
  c.fillStyle='#52616b';c.fillRect(x-160,y+12,335,24);
  c.fillStyle='#223d45';c.fillRect(x-70,y+42,130,213);
  c.fillStyle='#0e1e2a';c.fillRect(x-52,y+76,96,190);
  const glow=c.createRadialGradient(x-5,y+140,8,x-5,y+140,185);glow.addColorStop(0,'#62ffcd8c');glow.addColorStop(.4,'#48e1b840');glow.addColorStop(1,'#38b78b00');c.fillStyle=glow;c.fillRect(x-200,y-45,400,350);
  c.fillStyle='#6df5bd';c.fillRect(x-35,y+96,62,7);c.fillRect(x-26,y+119,44,7);c.fillRect(x-18,y+142,28,7);
  c.strokeStyle='#86f6d3';c.lineWidth=4;c.strokeRect(x-45,y+70,84,136);
  c.fillStyle='#192c35';for(let i=0;i<6;i++)c.fillRect(x-155+i*13,y+240-i*7,300-i*26,9);
  c.restore();
 }
 // Clipped work: vegetation and ruins only around camera; deterministic movement.
 for(let x=Math.floor(viewLeft/170)*170;x<viewRight;x+=170){
  const n=Math.abs(Math.floor(x/170)),height=58+(n*37)%86;
  if(x>shrine-230)continue;
  c.fillStyle=n%3===0?'#193b36':'#204840';c.fillRect(x+44,GROUND-height,9,height);
  c.beginPath();c.ellipse(x+48,GROUND-height+5,42,18,0,0,Math.PI*2);c.fill();
  c.beginPath();c.ellipse(x+27,GROUND-height+27,34,14,-.25,0,Math.PI*2);c.fill();
  c.fillStyle='#315a4d';c.fillRect(x+44,GROUND-height+20,2,25);
 }
 // Hovering emerald spores; time-driven, no object allocation.
 for(let i=0;i<18;i++){const wx=camera-45+((i*137+31)%1050);const y=185+(i*29)%158+Math.sin(clock*1.2+i)*9;c.fillStyle=i%3===0?'#d3dd8d7b':'#74e7bb70';c.beginPath();c.arc(wx,y,1.6,0,Math.PI*2);c.fill()}
}
function islandForeground(c,camera,d,clock){
 const left=Math.floor((camera-45)/46)*46,right=camera+W+55;
 for(let x=left;x<right;x+=46){
  if(x<0||x>=d.world.width||d.gaps.some(g=>x>=g[0]&&x<g[1]))continue;
  const i=Math.abs(Math.floor(x/46));
  c.fillStyle=i%3===0?'#758765':'#476f59';
  for(let k=0;k<3;k++){const h=5+((i+k*7)%8);c.beginPath();c.moveTo(x+k*7,GROUND+2);c.lineTo(x+k*7-3,GROUND-h);c.lineTo(x+k*7+4,GROUND+2);c.fill()}
  c.fillStyle='#b9a78355';c.fillRect(x+27,GROUND+23+(i%3)*21,12,3);
  c.fillStyle='#192d2699';c.fillRect(x+11,GROUND+50+(i%2)*13,18,4);
 }
 // Lit beacons at checkpoint flags, modest radial glows.
 for(const checkpoint of d.checkpoints){const x=checkpoint.x;if(x<left-100||x>right+100)continue;
  const grad=c.createRadialGradient(x+6,GROUND-70,3,x+6,GROUND-70,86);
  grad.addColorStop(0,'#ffc57965');grad.addColorStop(1,'#ffc57900');
  c.fillStyle=grad;c.fillRect(x-85,GROUND-155,180,175);
  c.fillStyle='#c7a37a';c.fillRect(x-4,GROUND-16,16,17);
  c.fillStyle='#ffcb72';c.beginPath();c.ellipse(x+4,GROUND-20+Math.sin(clock*5+x)*2,5,11,0,0,Math.PI*2);c.fill();
 }
 // Mossy edge highlights on raised platforms.
 for(const f of d.platforms){if(f.x+f.w<left||f.x>right)continue;
  c.fillStyle='#526a4a';for(let x=f.x+8;x<f.x+f.w-4;x+=24){c.fillRect(x,f.y-3,15,5);c.fillRect(x+7,f.y+17,3,6)}
 }
}


function islandWater(c,camera,d,t){
 const left=camera-70,right=camera+W+70;
 for(const [a,b] of d.gaps){if(b<left||a>right)continue;
  const x=Math.max(a,left),width=Math.min(b,right)-x;
  c.fillStyle='#164659';c.fillRect(x,GROUND+32,width,H-GROUND);
  for(let layer=0;layer<3;layer++){
   const y=GROUND+38+layer*24;
   c.strokeStyle=['#79b7b568','#63a3bd56','#9adbd345'][layer];c.lineWidth=2+layer;
   c.beginPath();for(let wx=x;wx<=x+width;wx+=7){const yy=y+Math.sin(wx*.055+t*(2.2-layer*.3)+layer)*3;if(wx===x)c.moveTo(wx,yy);else c.lineTo(wx,yy)}c.stroke();
  }
  for(let i=0;i<6;i++){const wx=a+((i*37+t*19)%(b-a));if(wx<left||wx>right)continue;c.fillStyle='#9cdad069';c.fillRect(wx,GROUND+31+Math.sin(t*3+i)*4,8,2)}
 }
 // Waterfall sheets are fixed scenery, not collision geometry.
 for(const zone of d.zones){if(zone.id!=='jungle'&&zone.id!=='ruins')continue;
  const x=zone.start+(zone.id==='jungle'?560:380);
  if(x+88<left||x>right)continue;
  c.fillStyle='#3b9baf3b';c.fillRect(x,130,73,GROUND-116);
  for(let i=0;i<11;i++){const xx=x+4+i*6.2;c.strokeStyle=i%2?'#addfe07c':'#68b7c77a';c.lineWidth=2+i%3;c.beginPath();c.moveTo(xx,133);for(let y=150;y<GROUND+9;y+=17)c.lineTo(xx+Math.sin(y*.03+t*5+i)*3,y);c.stroke()}
  const splash=c.createRadialGradient(x+36,GROUND,5,x+36,GROUND,90);splash.addColorStop(0,'#d6f2de9b');splash.addColorStop(1,'#d6f2de00');c.fillStyle=splash;c.fillRect(x-40,GROUND-60,160,100);
 }
}
function islandCaptain(c,p,t){
 const walk=p.ground&&Math.abs(p.vx)>1,bob=walk?Math.sin(t*16)*1.5:Math.sin(t*2)*.7;
 const stride=walk?Math.sin(t*18)*5:0,air=!p.ground,attacking=p.attack>0;
 c.save();c.translate(p.x+15,p.y+48+bob);c.scale(p.face,1);
 c.fillStyle='#121d25';c.beginPath();c.ellipse(0,-1,17,3,0,0,Math.PI*2);c.fill();
 // Feet follow two independent steps; airborne captain draws boots tucked upward.
 c.fillStyle='#252d3f';c.fillRect(-11,-15+(air?-6:stride),8,16);c.fillRect(4,-15+(air?-6:-stride),8,16);
 c.fillStyle='#53402f';c.fillRect(-13,-5+(air?-6:stride),12,6);c.fillRect(3,-5+(air?-6:-stride),12,6);
 c.fillStyle='#9c343d';c.beginPath();c.moveTo(-13,-30);c.lineTo(13,-30);c.lineTo(17,-13);c.lineTo(-17,-13);c.fill();
 c.fillStyle='#233a55';c.fillRect(-11,-29,22,18);c.fillStyle='#dfbc76';c.fillRect(-2,-30,4,19);
 c.fillStyle='#e1b887';c.fillRect(-8,-39,16,13);
 c.fillStyle='#312728';c.fillRect(-7,-32,14,3);c.fillStyle='#f2d7ac';c.fillRect(3,-36,3,3);
 c.fillStyle='#182437';c.beginPath();c.moveTo(-19,-39);c.lineTo(18,-39);c.lineTo(14,-45);c.lineTo(7,-45);c.lineTo(7,-51);c.lineTo(-8,-51);c.lineTo(-10,-45);c.closePath();c.fill();
 c.fillStyle='#e2b85b';c.fillRect(-10,-45,17,2);
 c.save();c.translate(9,-25);c.rotate(attacking?-.85:walk?Math.sin(t*18)*.21:.1);c.fillStyle='#dcad82';c.fillRect(0,0,7,17);c.fillStyle='#c8dbe2';c.fillRect(4,-24,4,31);c.fillStyle='#7a9ba4';c.fillRect(1,-1,11,3);c.restore();
 if(attacking){
  c.strokeStyle='#88e8f8aa';c.lineWidth=12;c.beginPath();c.arc(5,-26,42,-1.5,.5);c.stroke();
  c.strokeStyle='#f4f7e1';c.lineWidth=4;c.beginPath();c.arc(5,-26,42,-1.45,.4);c.stroke();
  for(let i=0;i<5;i++){const a=-1.4+i*.4;c.fillStyle='#ffe5a0';c.fillRect(5+Math.cos(a)*47,-26+Math.sin(a)*47,4,4)}
 }
 c.restore();
}
function islandBossAura(c,bx,phase,t,shielded){
 const cx=bx+20,cy=GROUND-67,r=phase===2?105:76;
 const g=c.createRadialGradient(cx,cy,8,cx,cy,r);g.addColorStop(0,phase===2?'#ff6baf55':'#55e6d455');g.addColorStop(1,'#00000000');
 c.fillStyle=g;c.fillRect(cx-r,cy-r,r*2,r*2);
 for(let i=0;i<5;i++){const a=t*1.3+i*Math.PI*2/5;c.fillStyle=phase===2?'#ff87cf':'#89f7d9';c.beginPath();c.arc(cx+Math.cos(a)*45,cy+Math.sin(a)*58,2.8,0,Math.PI*2);c.fill()}
 if(shielded){c.strokeStyle='#71eed3bb';c.lineWidth=3;c.beginPath();c.ellipse(cx,cy,42,82,0,0,Math.PI*2);c.stroke()}
}
function islandBossFX(c,bx,phase,t,shielded){
 const cx=bx+22,cy=GROUND-64;
 const pulse=(Math.sin(t*3)+1)*.5;
 const glow=c.createRadialGradient(cx,cy,8,cx,cy,phase===2?120:85);
 glow.addColorStop(0,shielded?'#62e3f760':phase===2?'#ed53d98f':'#9b84d965');
 glow.addColorStop(1,'#00000000');c.fillStyle=glow;c.fillRect(cx-125,cy-125,250,250);
 c.save();c.translate(cx,cy);c.rotate(Math.sin(t*1.7)*.035);
 c.fillStyle=phase===2?'#863364':'#526b87';c.fillRect(-20,-18,40,68);
 c.fillStyle='#c5ac91';c.fillRect(-15,-47,30,33);c.fillStyle='#203542';c.fillRect(-19,-53,38,11);
 c.fillStyle=phase===2?'#ffa1d1':'#79ebd0';c.fillRect(-10,-34,7,5);c.fillRect(5,-34,7,5);
 c.strokeStyle=phase===2?'#f866b9':'#6de3d0';c.lineWidth=3;
 for(let i=0;i<4;i++){const a=t*.65+i*Math.PI/2;c.beginPath();c.arc(Math.cos(a)*25,Math.sin(a)*28,5+pulse*2,0,Math.PI*2);c.stroke()}
 c.restore();
 if(shielded){c.strokeStyle='#79f8e28c';c.lineWidth=3;c.beginPath();c.ellipse(cx,cy,40+pulse*3,84+pulse*4,0,0,Math.PI*2);c.stroke()}
}


const ISLAND_SPRITES={captain:{frames:8},skeleton:{frames:6},plant:{frames:6},shaman:{frames:6}};
function loadIslandSprites(){
 const assets={};
 for(const [name,meta] of Object.entries(ISLAND_SPRITES)){
  const img=new Image();img.decoding='async';img.src='adventure/sprites/'+name+'.svg';
  assets[name]={img,frames:meta.frames};
 }
 return assets;
}
function spriteReady(sprites,name){const v=sprites?.[name];return !!(v&&v.img.complete&&v.img.naturalWidth>0)}
function drawIslandSprite(c,sprites,name,frame,x,y,w,h,flip=false){
 const v=sprites?.[name];if(!v||!spriteReady(sprites,name))return false;
 const index=Math.max(0,Math.min(v.frames-1,Math.floor(frame)));
 c.save();
 if(flip){c.translate(x+w,0);c.scale(-1,1);x=0}
 c.drawImage(v.img,index*72,0,72,96,x,y,w,h);
 c.restore();return true;
}

let session=null;
class Island{
constructor(v,data){this.v=v;this.data=data;this.lang=words[v.u.lang]||words.en;this.keys=new Set();this.held=new Map();this.deadEnemies=new Set();this.collected=new Set();this.frame=0;this.last=0;this.running=true;this.paused=false;this.done=false;this.hp=100;this.lives=3;this.checkpoint=0;this.gold=0;this.clock=0;this.saveKey='pf-cursed-island-v1';this.audio=null;this.lastTone=0;this.sprites=loadIslandSprites();this.reset(80);this.restore();this.makeUI();if(v.__fromMap){this.player.x=Math.max(this.player.x,3780);this.camera=clamp(this.player.x-250,0,this.data.world.width-W)}else this.showStageMap();this.onDown=e=>this.key(e,true);this.onUp=e=>this.key(e,false);this.onBlur=()=>this.pause();window.addEventListener('keydown',this.onDown,true);window.addEventListener('keyup',this.onUp,true);window.addEventListener('blur',this.onBlur);this.loop=this.loop.bind(this);requestAnimationFrame(this.loop)}
reset(x){this.player={x,y:260,w:30,h:48,vx:0,vy:0,ground:false,face:1,inv:1,attack:0};this.camera=clamp(x-250,0,this.data.world.width-W);this.keys.clear();this.deadEnemies.clear();this.collected.clear();this.enemyStates=new Map(this.data.enemies.map(e=>[e.id,{x:e.x,home:e.x,dir:-1,hp:e.type==='shield-guard'?4:2,cool:0,cast:1,shield:e.type==='shield-guard'}]));this.projectiles=[];this.totems=new Set(this.data.boss.totems.map(t=>t.id));this.bossHp=5;this.bossAttack=3.5;this.bossActive=false;this.bridgeTimers=new Map();this.shieldPhase=0;this.done=false}
save(){if(!this.running||this.done)return;const p=this.player;const state={v:1,x:p.ground?p.x:(this.checkpoint||80),hp:this.hp,lives:this.lives,checkpoint:this.checkpoint,gold:this.gold,dead:[...this.deadEnemies],collected:[...this.collected],totems:[...this.totems],bossHp:this.bossHp};try{localStorage.setItem(this.saveKey,JSON.stringify(state))}catch{}}
restore(){try{const s=JSON.parse(localStorage.getItem(this.saveKey)||'null');if(!s||s.v!==1||!Number.isFinite(s.x)||s.x<0||s.x>=this.data.world.width||!Number.isInteger(s.lives)||s.lives<1||s.lives>3)return;this.player.x=s.x;this.player.y=260;this.hp=clamp(+s.hp||100,1,100);this.lives=s.lives;this.checkpoint=this.data.checkpoints.some(c=>c.x===s.checkpoint)?s.checkpoint:0;this.gold=clamp(+s.gold||0,0,100000);this.deadEnemies=new Set((s.dead||[]).filter(id=>this.enemyStates.has(id)));this.collected=new Set((s.collected||[]).filter(id=>this.data.chests.some(c=>c.id===id)));this.totems=new Set((Array.isArray(s.totems)?s.totems:this.data.boss.totems.map(t=>t.id)).filter(id=>this.data.boss.totems.some(t=>t.id===id)));this.bossHp=clamp(+s.bossHp||5,1,5)}catch{}}
sound(kind){try{if(this.v.u.sound===false)return;const Context=window.AudioContext||window.webkitAudioContext;if(!Context)return;this.audio??=new Context();if(this.audio.state==='suspended')this.audio.resume();const now=this.audio.currentTime;if(now-this.lastTone<.055)return;this.lastTone=now;const o=this.audio.createOscillator(),g=this.audio.createGain();const settings={attack:[340,90,.12,'sawtooth'],coin:[780,1160,.14,'sine'],hit:[180,65,.17,'triangle'],checkpoint:[450,800,.25,'sine'],totem:[560,180,.25,'triangle'],boss:[95,210,.35,'sawtooth'],victory:[520,1040,.4,'sine']};const [a,b,d,type]=settings[kind]||settings.attack;o.type=type;o.frequency.setValueAtTime(a,now);o.frequency.exponentialRampToValueAtTime(Math.max(1,b),now+d);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(Math.max(.0001,.06*(window.PirateMusic?.settings.sfx??1)),now+.012);g.gain.exponentialRampToValueAtTime(.0001,now+d);o.connect(g);g.connect(this.audio.destination);o.start(now);o.stop(now+d+.01)}catch{}}
makeUI(){this.v.active=false;this.v.root.hidden=true;this.element=document.createElement('section');this.element.id='cursed-island-prototype';this.element.style.cssText='position:fixed;inset:0;z-index:21000;background:#081b22;color:#ffecc6;font:clamp(12px,2.4vw,16px) Georgia,serif;touch-action:none;overflow:hidden';this.element.innerHTML='<canvas width="960" height="540" style="width:100%;height:100%;object-fit:contain;display:block"></canvas><div class="ci-top" style="position:absolute;top:8px;left:10px;right:10px;display:flex;justify-content:space-between;gap:8px;align-items:flex-start;pointer-events:none;font-size:clamp(10px,1.6vw,14px);text-shadow:1px 2px 3px #000"><strong>'+this.lang.title+'</strong><span class="ci-status" style="max-width:62%;text-align:right;line-height:1.35;overflow-wrap:anywhere"></span></div><div class="ci-buttons" style="position:absolute;bottom:max(8px,env(safe-area-inset-bottom));left:max(6px,env(safe-area-inset-left));right:max(6px,env(safe-area-inset-right));display:flex;justify-content:space-between;align-items:end;gap:4px"><div><button data-key="left" aria-label="Move left">◀</button><button data-key="right" aria-label="Move right">▶</button></div><div><button data-key="attack">'+this.lang.attack+'</button><button data-key="jump">'+this.lang.jump+'</button></div></div><button class="ci-back" style="position:absolute;top:52px;right:max(8px,env(safe-area-inset-right))">'+this.lang.back+'</button><div class="ci-dialog" hidden style="position:absolute;top:35%;left:10%;right:10%;text-align:center;background:#092330ec;border:2px solid #cca66c;padding:16px"></div>';document.body.append(this.element);this.ctx=this.element.querySelector('canvas').getContext('2d');for(const b of this.element.querySelectorAll('[data-key]')){b.style.cssText='min-width:clamp(46px,9vw,62px);min-height:clamp(46px,9vw,56px);margin:2px;border:2px solid #d6b36f;border-radius:9px;background:linear-gradient(145deg,#25485cdd,#0d2638e8);color:#fff;font-weight:bold;box-shadow:0 3px 12px #0008,inset 0 1px 2px #fff3;touch-action:none';b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);this.held.set(e.pointerId,b.dataset.key);this.keys.add(b.dataset.key);if(b.dataset.key==='attack')this.sound('attack');if(b.dataset.key==='jump')this.jump()});for(const evt of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(evt,e=>{const k=this.held.get(e.pointerId);this.held.delete(e.pointerId);if(k&&!Array.from(this.held.values()).includes(k))this.keys.delete(k)})}const mapButton=document.createElement('button');mapButton.textContent='🗺 MAP';mapButton.className='ci-map-button';mapButton.style.cssText='position:absolute;top:52px;left:10px;z-index:3;min-height:40px;border:2px solid #e4bc70;border-radius:12px;background:#1b3946;color:#ffdda1;font-weight:bold';mapButton.onclick=()=>this.showStageMap();if(!this.v.__fromMap)this.element.append(mapButton);this.element.querySelector('.ci-back').onclick=()=>this.close();this.element.querySelector('.ci-back').style.cssText+=';min-height:34px;border:1px solid #d6b36f;background:#183948;color:#fff';}
showStageMap(){
 if(this.done)return;
 this.paused=true;this.keys.clear();
 let overlay=this.element.querySelector('.ci-stage-map');
 if(!overlay){overlay=document.createElement('div');overlay.className='ci-stage-map';overlay.style.cssText='position:absolute;inset:0;z-index:20;overflow:auto;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at 25% 70%,#0b8590,#063c59 55%,#091c2e);font-family:Georgia,serif';this.element.append(overlay)}
 overlay.hidden=false;overlay.replaceChildren();
 const panel=document.createElement('div');panel.style.cssText='width:min(900px,96vw);min-height:340px;border:5px double #a57837;border-radius:22px;padding:18px;box-sizing:border-box;background:radial-gradient(ellipse at 25% 20%,#e5c88a,#b78e50 80%,#75532e);box-shadow:0 16px 55px #000b;color:#342316;text-align:center;position:relative;overflow:hidden';overlay.append(panel);
 const title=document.createElement('h2');title.textContent='🏴‍☠️ CURSED ISLAND';title.style.cssText='margin:0;font-size:clamp(22px,4vw,35px);letter-spacing:3px';panel.append(title);
 const hint=document.createElement('p');hint.textContent='Choose an unlocked stage · Clear checkpoints to advance';hint.style.cssText='font:14px Arial;margin:8px 0 24px';panel.append(hint);
 const route=document.createElement('div');route.style.cssText='display:flex;align-items:center;justify-content:space-around;gap:5px;position:relative;flex-wrap:wrap;padding:35px 0';panel.append(route);
 const starts=[80,1850,3750,5170,this.data.boss.x-190];
 starts.forEach((at,i)=>{
  const complete=i<4?this.checkpoint>=this.data.checkpoints[Math.min(i,2)].x:this.done;
  const unlocked=i===0||this.checkpoint>=this.data.checkpoints[Math.min(i-1,2)].x;
  const btn=document.createElement('button');btn.type='button';btn.disabled=!unlocked;btn.textContent=i===4?'💀 BOSS':String(i+1)+(complete?' ✓':'');
  btn.style.cssText='min-width:clamp(55px,12vw,115px);height:clamp(55px,12vw,100px);border-radius:50%;border:4px solid '+(complete?'#b4efaa':unlocked?'#ffe3a0':'#68717a')+';background:'+(complete?'linear-gradient(#41ac64,#176e41)':unlocked?'linear-gradient(#f5cf69,#b77d22)':'linear-gradient(#344350,#1d2834)')+';color:'+(unlocked?'#fff8d8':'#c6c9cd')+';font:bold clamp(13px,2vw,20px) Georgia;box-shadow:0 6px 13px #3a241e88;cursor:pointer;animation:'+(unlocked&&!complete?'ci-map-pulse 2s ease-in-out infinite':'none');
  btn.onclick=()=>{this.paused=false;overlay.hidden=true;this.keys.clear();this.player.x=at;this.player.y=260;this.player.vx=0;this.player.vy=0;this.player.inv=1;this.camera=clamp(at-250,0,this.data.world.width-W);this.save()};
  route.append(btn);
 });
 const legend=document.createElement('p');legend.textContent='🟢 Completed     🟡 Available     🔒 Locked';legend.style.cssText='font:13px Arial';panel.append(legend);
 const back=document.createElement('button');back.textContent='▶ CONTINUE';back.style.cssText='padding:10px 22px;border-radius:12px;background:#163d4d;color:#fff1c6;border:2px solid #d1a34b;min-height:44px';back.onclick=()=>{overlay.hidden=true;this.paused=false};panel.append(back);
 if(!this.element.querySelector('#ci-map-animations')){const style=document.createElement('style');style.id='ci-map-animations';style.textContent='.ci-stage-map[hidden]{display:none!important}@keyframes ci-map-pulse{0%,100%{box-shadow:0 0 7px #f2d26b}50%{box-shadow:0 0 24px 8px #f5d574}}';this.element.append(style)}
}
key(e,down){const k=({ArrowLeft:'left',a:'left',ArrowRight:'right',d:'right',ArrowUp:'jump',w:'jump',' ':'jump',j:'attack',Escape:'pause'})[e.key];if(!k)return;e.preventDefault();e.stopImmediatePropagation();if(down){if(!this.keys.has(k)&&k==='jump')this.jump();if(k==='pause'&&!e.repeat)this.pause();if(k==='attack'&&!e.repeat)this.sound('attack');this.keys.add(k)}else this.keys.delete(k)}
jump(){if(this.paused||this.done)return;if(this.player.ground){this.player.vy=-485;this.player.ground=false;this.sound('attack')}}
pause(){if(!this.running||this.done)return;this.paused=!this.paused;if(this.paused)this.save();this.keys.clear();this.dialog(this.paused?this.lang.pause:null)}
dialog(title){const d=this.element.querySelector('.ci-dialog');d.hidden=!title;if(!title)return;d.textContent='';const h=document.createElement('h2');h.textContent=title;d.append(h);const btn=(label,fn)=>{const b=document.createElement('button');b.textContent=label;b.style.cssText='min-height:44px;margin:8px;padding:8px 16px';b.onclick=fn;d.append(b)};if(this.paused)btn(this.lang.continue,()=>this.pause());if(this.done)btn(this.lang.retry,()=>{this.hp=100;this.lives=3;this.checkpoint=0;this.gold=0;this.reset(80);try{localStorage.removeItem(this.saveKey)}catch{}this.dialog(null)});btn(this.lang.stop,()=>this.close())}
hit(){if(this.player.inv>0||this.done)return;this.hp-=20;this.sound('hit');this.player.inv=1.2;if(this.hp>0)return;this.lives--;if(this.lives<=0){this.done=true;this.dialog('GAME OVER');return}this.hp=100;this.player.x=this.checkpoint||80;this.player.y=260;this.player.vy=0;this.projectiles=[]}
step(dt){const p=this.player,d=this.data;p.inv=Math.max(0,p.inv-dt);p.attack=Math.max(0,p.attack-dt);let dir=Number(this.keys.has('right'))-Number(this.keys.has('left'));p.vx=dir*225;if(dir)p.face=dir;p.x=clamp(p.x+p.vx*dt,0,d.world.width-p.w);const prevBottom=p.y+p.h;p.vy=Math.min(800,p.vy+GRAVITY*dt);p.y+=p.vy*dt;p.ground=false;
let floors=[];let start=0;for(const [a,b] of d.gaps){floors.push({x:start,y:GROUND,w:a-start,h:160});start=b}floors.push({x:start,y:GROUND,w:d.world.width-start,h:160});
for(const ledge of d.platforms){if(ledge.crumbling&&this.bridgeTimers.get(ledge.x)===0)continue;floors.push({x:ledge.x,y:ledge.y,w:ledge.w,h:18,bridge:ledge});}
if(p.vy>=0)for(const f of floors)if(p.x+p.w>f.x&&p.x<f.x+f.w&&prevBottom<=f.y+6&&p.y+p.h>=f.y){p.y=f.y-p.h;p.vy=0;p.ground=true;if(f.bridge?.crumbling&&!this.bridgeTimers.has(f.bridge.x))this.bridgeTimers.set(f.bridge.x,1.2)}
if(p.y>H+60){this.hit();p.y=260;p.vy=0;p.x=this.checkpoint||80}
this.clock+=dt;for(const [x,t] of this.bridgeTimers){if(t>0)this.bridgeTimers.set(x,Math.max(0,t-dt));}
for(const e of d.enemies){
 const state=this.enemyStates.get(e.id);if(!state||this.deadEnemies.has(e.id))continue;
 state.cool=Math.max(0,state.cool-dt);state.cast-=dt;
 const near=Math.abs(p.x-state.x)<230;
 if(e.type==='skeleton'){state.x=clamp(state.x+state.dir*(near?56:25)*dt,state.home-90,state.home+90);if(state.x===state.home-90||state.x===state.home+90)state.dir*=-1;if(near)state.dir=p.x>state.x?1:-1}
 if(e.type==='shield-guard'&&near)state.dir=p.x>state.x?1:-1;
 if(e.type==='poison-plant'&&near&&state.cast<=0){state.cast=2.2;this.projectiles.push({x:state.x+15,y:GROUND-34,vx:(p.x>state.x?1:-1)*175,vy:-40,life:2.5})}
 if(overlaps(p,{x:state.x,y:GROUND-46,w:30,h:46})&&state.cool<=0){this.hit();state.cool=1.1}
}
if(this.keys.has('attack')&&p.attack<=0){
 p.attack=.34;const reach={x:p.face>0?p.x+12:p.x-60,y:p.y+5,w:78,h:43};
 let hitSomething=false;
 for(const t of d.boss.totems){if(this.totems.has(t.id)&&overlaps(reach,{x:t.x-22,y:GROUND-139,w:68,h:139})){this.totems.delete(t.id);this.sound('totem');hitSomething=true;this.bossAttack=Math.max(this.bossAttack,2.5);break}}
 if(!hitSomething&&this.totems.size===0&&this.bossActive&&overlaps(reach,{x:d.boss.x,y:GROUND-90,w:43,h:90})){this.bossHp=Math.max(0,this.bossHp-1);this.shieldPhase=this.bossHp<=2?2:1;this.sound(this.shieldPhase===2?'boss':'hit');hitSomething=true;if(this.bossHp===0){this.done=true;this.sound('victory');try{localStorage.removeItem(this.saveKey);localStorage.setItem('pf-cursed-island-complete','1');window.PirateLevels?.complete?.(5,{gold:this.gold});localStorage.setItem('pf-adventure-gold',String(clamp((Number(localStorage.getItem('pf-adventure-gold'))||0)+this.gold+100,0,1000000)))}catch{}this.dialog(this.lang.done+' — '+this.lang.win)}}
 if(!hitSomething)for(const e of d.enemies){const state=this.enemyStates.get(e.id);if(!state||this.deadEnemies.has(e.id))continue;if(overlaps(reach,{x:state.x,y:GROUND-46,w:30,h:46})){if(e.type==='shield-guard'&&state.shield&&p.face===-state.dir){state.shield=false;state.cool=.45}else{state.hp--;if(state.hp<=0){this.deadEnemies.add(e.id);this.gold+=5;this.sound('coin')}}break}}
}
for(const h of d.hazards)if(overlaps(p,{...h,h:15}))this.hit();
for(const q of this.projectiles){q.x+=q.vx*dt;q.y+=q.vy*dt;q.life-=dt;if(overlaps(p,{x:q.x,y:q.y,w:12,h:12})){this.hit();q.life=0}}
this.projectiles=this.projectiles.filter(q=>q.life>0&&q.x>=0&&q.x<d.world.width);
this.bossActive=p.x>d.world.width-670;
if(this.bossActive&&!this.totems.size){this.bossAttack-=dt;if(this.bossAttack<=0){this.bossAttack=this.bossHp<=2?2.8:3.5;this.projectiles.push({x:d.boss.x+20,y:GROUND-65,vx:(p.x>d.boss.x?1:-1)*210,vy:-18,life:2.8})}
 if(overlaps(p,{x:d.boss.x,y:GROUND-90,w:43,h:90})&&this.player.inv<=0){this.player.inv=.9;this.hp=Math.max(1,this.hp-8);this.sound('hit')}
}
for(const c of d.chests)if(!this.collected.has(c.id)&&Math.abs(p.x-c.x)<45&&Math.abs(p.y-c.y)<80){this.collected.add(c.id);this.gold+=c.reward;this.sound('coin')}
for(const f of d.checkpoints)if(p.x>=f.x&&f.x>this.checkpoint){this.checkpoint=f.x;this.sound('checkpoint');this.save()}
// Winning requires defeating the Totem Shaman after destroying all totems.
this.camera=clamp(p.x-300,0,d.world.width-W);if(Math.floor(this.clock/5)!==Math.floor((this.clock-dt)/5))this.save();
}
render(){const c=this.ctx,d=this.data,p=this.player;const zone=d.zones.find(z=>p.x>=z.start&&p.x<z.end)||d.zones.at(-1);const palettes={'jungle':['#193b38','#456e52'],'ruins':['#283841','#52605b'],'totem-sanctuary':['#292e42','#56516a']};const pal=palettes[zone.id]||palettes.jungle;const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#081922');sky.addColorStop(1,pal[1]);c.fillStyle=sky;c.fillRect(0,0,W,H);scenery(c,this.camera,zone.id,this.clock);
if(p.x>=1850&&p.x<3750){c.save();c.fillStyle='rgba(9,18,28,.72)';c.fillRect(W/2-185,13,370,49);c.strokeStyle='#d9b775';c.strokeRect(W/2-185,13,370,49);c.fillStyle='#f5e0a3';c.font='bold 18px Georgia';c.textAlign='center';c.fillText('II · PATH TO THE RUINS',W/2,35);c.fillStyle='#d6e2db';c.font='12px sans-serif';c.fillText('Cross the falls · Find the treasure · Reach the gate',W/2,53);c.restore()}
c.save();c.translate(-this.camera,0);islandBackdrop(c,this.camera,d,this.clock);transitionLandscape(c,this.camera,this.clock);islandWater(c,this.camera,d,this.clock);let start=0;const gaps=[...d.gaps,[d.world.width,d.world.width]];for(const [a,b] of gaps){c.fillStyle=zone.id==='totem-sanctuary'?'#3a3345':'#523e32';c.fillRect(start,GROUND,a-start,H-GROUND);c.fillStyle=zone.id==='jungle'?'#80a577':'#8f9277';c.fillRect(start,GROUND,a-start,10);for(let x=start+25;x<a;x+=76){c.fillStyle='#00000020';c.fillRect(x,GROUND+21,35,4);c.fillStyle='#b3b39c21';c.fillRect(x+8,GROUND+47,3,33)}start=b}
// Broken bridge remnants only: the gap remains a real jumping obstacle.
for(const [a,b] of d.gaps)if(a>=1850&&a<3800&&b>=this.camera-50&&a<=this.camera+W+50){
 c.save();c.strokeStyle='#6b4b2f';c.lineWidth=4;
 for(const side of [a,b]){
  const dir=side===a?-1:1;
  c.fillStyle='#795032';c.fillRect(side+dir*18,GROUND-36,7,36);
  c.beginPath();c.moveTo(side+dir*18,GROUND-32);c.lineTo(side-dir*14,GROUND-12);c.stroke();
  c.fillStyle='#9d6c42';c.fillRect(side+dir*10,GROUND-4,dir*22,8);
 }
 c.restore();
}
for(const f of d.platforms){if(f.crumbling&&this.bridgeTimers.get(f.x)===0)continue;c.fillStyle=f.crumbling?'#86523b':'#9b6e45';c.fillRect(f.x,f.y,f.w,18);c.fillStyle='#d0a97a';c.fillRect(f.x,f.y,f.w,5);if(f.crumbling){c.fillStyle='#30261a';c.fillRect(f.x+f.w*.42,f.y+3,3,12)}}
islandForeground(c,this.camera,d,this.clock);
// Stage II: the fallen fortress has its own monumental silhouettes and animated torchlight.
for(const rx of [1980,2380,2820,3260,3630]){
 if(rx<this.camera-120||rx>this.camera+W+120)continue;
 c.save();c.translate(rx,GROUND);
 c.fillStyle='#222b34';c.fillRect(-34,-180,68,180);
 c.fillStyle='#43505a';c.fillRect(-28,-172,56,166);
 for(let k=0;k<4;k++){c.fillStyle=k%2?'#52606a':'#38444e';c.fillRect(-29+k*15,-184,13,20)}
 c.fillStyle='#101f2b';c.fillRect(-13,-108,26,65);
 c.fillStyle='#bd874c';c.fillRect(26,-104,5,38);
 const flicker=8+Math.sin(this.clock*7+rx)*4;
 c.fillStyle='rgba(255,161,57,.15)';c.beginPath();c.arc(29,-111,24+flicker,0,Math.PI*2);c.fill();
 c.fillStyle='#ffcb66';c.beginPath();c.moveTo(29,-124-flicker*.4);c.quadraticCurveTo(42,-105,29,-103);c.quadraticCurveTo(18,-108,29,-124-flicker*.4);c.fill();
 c.restore();
}

for(const h of d.hazards){c.fillStyle='#c476a5';for(let x=h.x;x<h.x+h.w;x+=14){c.beginPath();c.moveTo(x,GROUND);c.lineTo(x+7,GROUND-19);c.lineTo(x+14,GROUND);c.fill()}}
// Distinct vector silhouettes for each enemy type, animated from AI state.
for(const e of d.enemies)if(!this.deadEnemies.has(e.id)){const st=this.enemyStates.get(e.id);const x=st.x,y=GROUND-46;
 const spriteName=e.type==='poison-plant'?'plant':e.type==='skeleton'?'skeleton':null;
 if(spriteName&&spriteReady(this.sprites,spriteName)){
  const frame=e.type==='poison-plant'?Math.floor(this.clock*5)%6:Math.floor(this.clock*(Math.abs(st.dir)?8:3))%6;
  drawIslandSprite(c,this.sprites,spriteName,frame,x-14,y-30,58,80,st.dir>0);continue;
 }
 c.save();c.translate(x,y+Math.sin(this.clock*(e.type==='poison-plant'?2:7)+x)*1.3);
 if(e.type==='skeleton'){c.fillStyle='#e1d8bd';c.fillRect(7,4,17,16);c.fillRect(10,21,11,17);c.fillRect(4,25,4,15);c.fillRect(25,25,4,15);c.fillRect(10,40,4,6);c.fillRect(19,40,4,6);c.fillStyle='#20313b';c.fillRect(10,9,4,5);c.fillRect(19,9,4,5);c.fillStyle='#d2a56e';c.fillRect(9,22,14,3)}
 else if(e.type==='poison-plant'){c.fillStyle='#426a3d';c.fillRect(12,17,6,29);c.beginPath();c.ellipse(8,30,12,7,-.5,0,Math.PI*2);c.ellipse(23,35,12,7,.5,0,Math.PI*2);c.fill();c.fillStyle='#9f4c92';c.beginPath();c.arc(15,13,14,0,Math.PI*2);c.fill();c.fillStyle='#ffe1a1';c.fillRect(9,10,4,4);c.fillRect(19,10,4,4)}
 else{c.fillStyle='#536c85';c.fillRect(7,15,18,29);c.fillStyle='#c9c1a1';c.fillRect(8,2,16,17);c.fillStyle='#324a54';c.fillRect(7,0,19,8);c.fillStyle='#a7c8d1';c.fillRect(st.dir>0?21:-7,16,16,23);c.fillStyle='#d8b66b';c.fillRect(st.dir>0?24:-4,19,10,4)}
 if(e.type==='skeleton'){c.fillStyle='#a13e40';c.fillRect(4,0,23,5);c.fillStyle='#f0d5a6';c.fillRect(26,5,3,3);}
 c.restore();}
for(const q of this.projectiles){c.fillStyle='#ba74d1';c.beginPath();c.arc(q.x,q.y,7,0,Math.PI*2);c.fill();}
for(const a of d.chests)if(!this.collected.has(a.id)){c.fillStyle='#bd823c';c.fillRect(a.x,a.y,40,33);c.fillStyle='#f2cb62';c.fillRect(a.x+17,a.y,6,33)}
for(const f of d.checkpoints){c.fillStyle=f.x<=this.checkpoint?'#80e0b1':'#edc16b';c.fillRect(f.x,310,5,70);c.fillRect(f.x,310,32,18)}
for(const t of d.boss.totems){
 const live=this.totems.has(t.id),x=t.x+12;
 if(live){const aura=c.createRadialGradient(x,GROUND-92,4,x,GROUND-92,115);aura.addColorStop(0,'#67ffc3a0');aura.addColorStop(1,'#67ffc300');c.fillStyle=aura;c.fillRect(x-120,GROUND-215,240,240)}
 c.fillStyle=live?'#998f95':'#44565e';c.fillRect(t.x,250,25,130);
 c.fillStyle=live?'#69ffcc':'#2c4f50';c.fillRect(t.x+7,280,12,12);
 if(live){c.strokeStyle='#adfff1';c.lineWidth=3;c.strokeRect(t.x-6,244,37,91);
 c.fillStyle='#fff5c0';c.font='bold 15px sans-serif';c.fillText('HIT',t.x-3,230);
 c.fillStyle='#8ffff2';c.beginPath();c.moveTo(x,236+Math.sin(this.clock*4)*4);c.lineTo(x-8,224);c.lineTo(x+8,224);c.fill();
 }else{c.fillStyle='#b9c9c5';c.font='bold 15px sans-serif';c.fillText('✓',t.x+3,230)}
}
const bx=d.boss.x;
 if(spriteReady(this.sprites,'shaman')){
  const phase=this.shieldPhase===2?4+(Math.floor(this.clock*3)%2):Math.floor(this.clock*3)%4;
  drawIslandSprite(c,this.sprites,'shaman',phase,bx-21,GROUND-129,82,130);
  islandBossAura(c,bx,this.shieldPhase||1,this.clock,this.totems.size>0);
 }else islandBossFX(c,bx,this.shieldPhase||1,this.clock,this.totems.size>0);
c.fillStyle='#20222b';c.fillRect(bx-10,GROUND-148,65,8);c.fillStyle=this.shieldPhase===2?'#ee61a9':'#e1a657';c.fillRect(bx-10,GROUND-148,65*this.bossHp/5,8);
c.font='bold 18px Georgia';c.fillStyle='#f4d99e';c.fillText('TOTEM SHRINE',d.world.width-240,195);
if(!this.v.__fromMap){// Compact animated island route: green cleared nodes, gold current, dark locked.
c.save();c.setTransform(1,0,0,1,0,0);
const nodes=[80,...d.checkpoints.map(flag=>flag.x),d.boss.x];
const routeX=275,routeY=44,routeStep=94;
c.lineWidth=4;c.strokeStyle='#c5a66a';c.beginPath();c.moveTo(routeX,routeY);c.lineTo(routeX+routeStep*(nodes.length-1),routeY);c.stroke();
nodes.forEach((at,i)=>{
 const cleared=i===0?this.checkpoint>0:i<nodes.length-1?this.checkpoint>=at:this.done;
 const unlocked=i===0||this.checkpoint>=nodes[i-1];
 const x=routeX+i*routeStep,active=unlocked&&!cleared;
 const pulse=active?Math.sin(this.clock*3)*2:0;
 c.beginPath();c.arc(x,routeY,17+pulse,0,Math.PI*2);
 c.fillStyle=cleared?'#298f54':active?'#d6a33f':'#263545';c.fill();
 c.lineWidth=3;c.strokeStyle=cleared?'#a2f5af':active?'#ffe5a2':'#67717a';c.stroke();
 c.fillStyle='#fff6da';c.font='bold 15px sans-serif';c.textAlign='center';c.textBaseline='middle';
 c.fillText(i===nodes.length-1?'B':String(i+1),x,routeY+1);
});
c.restore();}
c.globalAlpha=p.inv>0&&Math.floor(p.inv*12)%2?.5:1;
if(spriteReady(this.sprites,'captain')){
 const frame=p.inv>0?7:p.attack>0?(Math.floor(this.clock*18)%2?3:4):!p.ground?5:Math.abs(p.vx)>2?(Math.floor(this.clock*9)%2?1:2):0;
 drawIslandSprite(c,this.sprites,'captain',frame,p.x-14,p.y-24,62,82,p.face<0);
 if(p.attack>0){c.strokeStyle='#a5ecfcaa';c.lineWidth=5;c.beginPath();const x=p.face>0?p.x+30:p.x;c.arc(x,p.y+25,42,-1.5,.35);c.stroke()}
 }else islandCaptain(c,p,this.clock);
c.globalAlpha=1;c.restore();this.element.querySelector('.ci-status').textContent='HP '+this.hp+' · ♥ '+this.lives+' · GOLD '+this.gold+' · TOTEMS '+this.totems.size+'/'+d.boss.totems.length+' · '+Math.round(p.x/d.world.width*100)+'%'+' · TOTEMS '+this.totems.size+' · BOSS '+this.bossHp}
loop(now){if(!this.running)return;const dt=Math.min((now-this.last)/1000||0,.033);this.last=now;if(!this.paused&&!this.done)this.step(dt);this.render();requestAnimationFrame(this.loop)}
close(){if(!this.running)return;if(!this.done)this.save();this.running=false;this.keys.clear();window.removeEventListener('keydown',this.onDown,true);window.removeEventListener('keyup',this.onUp,true);window.removeEventListener('blur',this.onBlur);this.element.remove();try{this.audio?.close()}catch{}this.v.active=true;this.v.root.hidden=false;this.v.intro();session=null}
}
window.PirateCursedIsland={async open(v){if(session)return;v.card.innerHTML='<h2>CURSED ISLAND</h2><p>Loading prototype map…</p>';try{const response=await fetch('adventure/chapters/cursed-island.json');if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();if(data.id!=='cursed-island')throw Error('Invalid map');session=new Island(v,data)}catch(e){v.card.innerHTML='';const h=document.createElement('h2');h.textContent='Cursed Island could not load';v.card.append(h);v.button(v.t('back'),()=>v.intro())}}};
})();
