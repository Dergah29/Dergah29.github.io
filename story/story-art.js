/* Pirate Strike — opening story art painters.
 * Everything here is ORIGINAL procedural vector painting rendered once into offscreen
 * layers at load (hull, damage overlay, sail cloth, torn cloth, sky, cloud banks, fog,
 * cove rocks/jungle, crew portraits). Runtime code moves the layers independently.
 * Status: TEMPORARY art (procedural, not final hand-painted illustration). See
 * docs/development/story-intro-20261101/ARTWORK.md for the remaining art list. */
(()=>{'use strict';
const root=typeof window==='undefined'?globalThis:window;
if(root.PirateStoryArt)return;
const TAU=Math.PI*2;
function rng(seed){let s=seed>>>0||1;return()=>{s^=s<<13;s>>>=0;s^=s>>17;s^=s<<5;s>>>=0;return s/4294967296}}
function mk(w,h){const c=document.createElement('canvas');c.width=Math.max(1,Math.ceil(w));c.height=Math.max(1,Math.ceil(h));return[c,c.getContext('2d')]}
function grain(x,w,h,alpha,seed,dark='#000',light='#fff'){const r=rng(seed);x.save();for(let i=0;i<w*h/90;i++){x.globalAlpha=alpha*r();x.fillStyle=r()<.5?dark:light;const px=r()*w,py=r()*h,l=2+r()*7;x.fillRect(px,py,l,1+r()*1.2)}x.restore()}
function blob(x,cx,cy,rx,ry,inner,outer){const g=x.createRadialGradient(cx,cy,0,cx,cy,Math.max(rx,ry));g.addColorStop(0,inner);g.addColorStop(1,outer);x.save();x.translate(cx,cy);x.scale(rx/Math.max(rx,ry),ry/Math.max(rx,ry));x.translate(-cx,-cy);x.fillStyle=g;x.beginPath();x.arc(cx,cy,Math.max(rx,ry),0,TAU);x.fill();x.restore()}

/* ---------------------------------------------------------------- ship */
const PALETTES={
 hero:{hullTop:'#7a4e2b',hullMid:'#563419',hullLow:'#2e1a0d',copper:'#22362f',wale:'#2a170b',trim:'#d1a24c',port:'#8b2e22',rail:'#3a220f',rim:'rgba(196,220,255,.42)',window:'#ffc76a',sail:['#e6e0d0','#b9b4a6','#8d8a80'],sailSeam:'rgba(90,80,60,.25)',flag:'#9c2a22'},
 enemy:{hullTop:'#3a3640',hullMid:'#26232b',hullLow:'#141217',copper:'#141c1a',wale:'#0b0a0d',trim:'#8c2e28',port:'#5d1a16',rail:'#1a171d',rim:'rgba(170,195,225,.5)',window:'#ff7a4a',sail:['#6a6672','#4a4652','#2c2a32'],sailSeam:'rgba(0,0,0,.3)',flag:'#1a1a1a'}
};
/* local units: waterline origin, bow toward +x */
const HULL_BOX={x0:-215,y0:-150,x1:275,y1:60},S=2;
function hullPath(x){x.beginPath();x.moveTo(-192,-104);x.bezierCurveTo(-150,-98,-118,-84,-96,-62);x.bezierCurveTo(-60,-48,40,-42,92,-50);x.bezierCurveTo(125,-56,150,-68,182,-72);x.bezierCurveTo(186,-40,170,4,138,26);x.lineTo(-146,30);x.bezierCurveTo(-170,8,-184,-30,-192,-104);x.closePath()}
function sheer(t){/* deck/rail y for x in [-192,182] */const pts=[[-192,-104],[-96,-62],[-20,-46],[92,-50],[182,-72]];for(let i=0;i<pts.length-1;i++){const [a,b]=[pts[i],pts[i+1]];if(t<=b[0]){const k=(t-a[0])/(b[0]-a[0]);return a[1]+(b[1]-a[1])*k}}return-72}
function paintHull(pal,seed=7){
 const W=(HULL_BOX.x1-HULL_BOX.x0)*S,H=(HULL_BOX.y1-HULL_BOX.y0)*S;const [c,x]=mk(W,H);x.scale(S,S);x.translate(-HULL_BOX.x0,-HULL_BOX.y0);
 // bowsprit and head rails behind the hull edge
 x.strokeStyle=pal.rail;x.lineCap='round';x.lineWidth=6;x.beginPath();x.moveTo(150,-74);x.lineTo(268,-112);x.stroke();x.lineWidth=2.4;x.strokeStyle=pal.hullTop;x.beginPath();x.moveTo(170,-70);x.lineTo(262,-110);x.stroke();
 hullPath(x);const g=x.createLinearGradient(0,-104,0,30);g.addColorStop(0,pal.hullTop);g.addColorStop(.45,pal.hullMid);g.addColorStop(.72,pal.hullLow);g.addColorStop(.73,pal.copper);g.addColorStop(1,'#0c1311');x.fillStyle=g;x.fill();
 x.save();hullPath(x);x.clip();
 // planking follows the sheer
 x.lineWidth=.8;for(let k=6;k<130;k+=7.5){x.strokeStyle=k>78?'rgba(0,0,0,.18)':'rgba(0,0,0,.28)';x.beginPath();for(let t=-195;t<=186;t+=6){const y=sheer(t)+k*(1-Math.abs(t)/420);t===-195?x.moveTo(t,y):x.lineTo(t,y)}x.stroke();x.strokeStyle='rgba(255,220,170,.06)';x.beginPath();for(let t=-195;t<=186;t+=6){const y=sheer(t)+k*(1-Math.abs(t)/420)+1.2;t===-195?x.moveTo(t,y):x.lineTo(t,y)}x.stroke()}
 const r=rng(seed);for(let i=0;i<160;i++){const t=-190+r()*370,y=sheer(t)+6+r()*70;x.strokeStyle='rgba(0,0,0,.25)';x.lineWidth=.7;x.beginPath();x.moveTo(t,y);x.lineTo(t,y+6);x.stroke()}
 // wales
 for(const [k,w] of [[16,4.5],[40,4]]){x.strokeStyle=pal.wale;x.lineWidth=w;x.beginPath();for(let t=-195;t<=186;t+=5){const y=sheer(t)+k*(1-Math.abs(t)/420);t===-195?x.moveTo(t,y):x.lineTo(t,y)}x.stroke();x.strokeStyle='rgba(255,230,190,.14)';x.lineWidth=1;x.beginPath();for(let t=-195;t<=186;t+=5){const y=sheer(t)+k*(1-Math.abs(t)/420)-w/2;t===-195?x.moveTo(t,y):x.lineTo(t,y)}x.stroke()}
 // gold trim under the rail
 x.strokeStyle=pal.trim;x.lineWidth=1.8;x.beginPath();for(let t=-192;t<=182;t+=4){const y=sheer(t)+5;t===-192?x.moveTo(t,y):x.lineTo(t,y)}x.stroke();
 // gun ports with open lids and muzzles
 for(let t=-84;t<=124;t+=29){const y=sheer(t)+26*(1-Math.abs(t)/420);x.fillStyle=pal.port;x.fillRect(t-6.5,y-8.5,13,2.5);x.fillStyle='#0b0705';x.fillRect(t-5.5,y-5.5,11,10);x.fillStyle='#1c1c1e';x.beginPath();x.arc(t,y-.5,2.7,0,TAU);x.fill();x.fillStyle='rgba(255,210,150,.18)';x.fillRect(t-5.5,y-5.5,11,1)}
 // copper sheathing tiles
 x.strokeStyle='rgba(120,170,150,.12)';x.lineWidth=.6;for(let y=2;y<34;y+=5)for(let t=-160;t<150;t+=9){x.strokeRect(t+(y%10?4:0),y,9,5)}
 x.restore();
 // stern castle gallery with lit windows
 x.fillStyle=pal.hullMid;x.beginPath();x.moveTo(-196,-108);x.lineTo(-150,-108);x.lineTo(-146,-60);x.lineTo(-186,-60);x.closePath();x.fill();
 x.strokeStyle=pal.trim;x.lineWidth=1.4;x.strokeRect(-190,-102,40,36);
 for(let i=0;i<3;i++){const wx=-186+i*12,wy=-96;const glow=x.createRadialGradient(wx+4,wy+9,0,wx+4,wy+9,16);glow.addColorStop(0,'rgba(255,190,90,.35)');glow.addColorStop(1,'rgba(255,190,90,0)');x.fillStyle=glow;x.fillRect(wx-12,wy-8,32,36);x.fillStyle=pal.window;x.fillRect(wx,wy,8,16);x.fillStyle='rgba(60,25,5,.7)';x.fillRect(wx+3.5,wy,1,16);x.fillRect(wx,wy+7,8,1)}
 // balustrade rail along the sheer
 x.strokeStyle=pal.rail;x.lineWidth=2.2;x.beginPath();for(let t=-196;t<=184;t+=4){const y=sheer(t)-9;t===-196?x.moveTo(t,y):x.lineTo(t,y)}x.stroke();x.lineWidth=1.2;for(let t=-190;t<=180;t+=7){const y=sheer(t);x.beginPath();x.moveTo(t,y-9);x.lineTo(t,y);x.stroke()}
 // stern lantern and figurehead
 x.fillStyle='#2a1a0e';x.fillRect(-201,-128,6,16);const lg=x.createRadialGradient(-198,-121,0,-198,-121,22);lg.addColorStop(0,'rgba(255,214,130,.85)');lg.addColorStop(.25,'rgba(255,170,70,.35)');lg.addColorStop(1,'rgba(255,170,70,0)');x.fillStyle=lg;x.beginPath();x.arc(-198,-121,22,0,TAU);x.fill();x.fillStyle=pal.window;x.fillRect(-200.5,-125,5,8);
 x.fillStyle=pal.trim;x.beginPath();x.moveTo(178,-70);x.quadraticCurveTo(196,-74,200,-62);x.quadraticCurveTo(190,-58,182,-50);x.closePath();x.fill();
 // moonlit rim on the sheer and transom
 x.strokeStyle=pal.rim;x.lineWidth=1.6;x.beginPath();x.moveTo(-192,-104);x.bezierCurveTo(-150,-98,-118,-84,-96,-62);x.bezierCurveTo(-60,-48,40,-42,92,-50);x.bezierCurveTo(125,-56,150,-68,182,-72);x.stroke();
 x.globalCompositeOperation='source-atop';grain(x,HULL_BOX.x1*2,HULL_BOX.y1*2,.08,seed,'#000','#ffdcb0');x.setTransform(1,0,0,1,0,0);grain(x,W,H,.07,seed+3,'#120a05','#c99a6a');
 return c;
}
function paintDamage(seed=11){
 const W=(HULL_BOX.x1-HULL_BOX.x0)*S,H=(HULL_BOX.y1-HULL_BOX.y0)*S;const [c,x]=mk(W,H);x.scale(S,S);x.translate(-HULL_BOX.x0,-HULL_BOX.y0);const r=rng(seed);
 const hole=(cx,cy,rad)=>{blob(x,cx,cy,rad*2.3,rad*1.7,'rgba(10,6,3,.85)','rgba(10,6,3,0)');x.fillStyle='#050302';x.beginPath();for(let i=0;i<14;i++){const a=i/14*TAU,k=rad*(.55+r()*.6);x.lineTo(cx+Math.cos(a)*k*1.25,cy+Math.sin(a)*k)}x.closePath();x.fill();
  x.strokeStyle='#c49a62';x.lineWidth=1.4;for(let i=0;i<9;i++){const a=r()*TAU,k=rad*(.7+r()*.4);x.beginPath();x.moveTo(cx+Math.cos(a)*k,cy+Math.sin(a)*k*.8);x.lineTo(cx+Math.cos(a)*(k+5+r()*6),cy+Math.sin(a)*(k+3+r()*5)*.8);x.stroke()}};
 hole(34,-22,9);hole(-48,-12,6.5);hole(108,-30,5);
 // scorched planks and a broken rail section
 for(const [cx,cy] of [[-20,-40],[60,-44],[-140,-70]])blob(x,cx,cy,26,12,'rgba(12,8,6,.6)','rgba(12,8,6,0)');
 x.globalCompositeOperation='destination-out';x.fillStyle='#000';x.fillRect(52,-60,20,14);x.globalCompositeOperation='source-over';
 x.strokeStyle='#4a2c15';x.lineWidth=2;x.beginPath();x.moveTo(52,-58);x.lineTo(58,-50);x.moveTo(72,-60);x.lineTo(66,-52);x.stroke();
 return c;
}
/* sail cloth: square sails are drawn as textures and warped at runtime */
function paintSail(w,h,pal,{seed=1,torn=false,gaff=false,jib=false}={}){
 const [c,x]=mk(w*S,h*S);x.scale(S,S);const r=rng(seed);
 const shape=()=>{x.beginPath();if(jib){x.moveTo(0,h);x.lineTo(w,h);x.lineTo(w*.08,0);x.closePath()}else if(gaff){x.moveTo(0,0);x.lineTo(w,h*.22);x.lineTo(w*.96,h);x.lineTo(0,h);x.closePath()}else{x.moveTo(0,0);x.lineTo(w,0);x.quadraticCurveTo(w*1.03,h*.55,w*.97,h);x.quadraticCurveTo(w*.5,h*.92,w*.03,h);x.quadraticCurveTo(-w*.03,h*.55,0,0);x.closePath()}};
 shape();const g=x.createLinearGradient(0,0,w*.3,h);g.addColorStop(0,pal.sail[0]);g.addColorStop(.6,pal.sail[1]);g.addColorStop(1,pal.sail[2]);x.fillStyle=g;x.fill();
 x.save();shape();x.clip();
 // belly shading: lit centre, darker edges
 const b=x.createLinearGradient(0,0,w,0);b.addColorStop(0,'rgba(0,0,0,.28)');b.addColorStop(.35,'rgba(255,255,255,.06)');b.addColorStop(.6,'rgba(255,255,255,.1)');b.addColorStop(1,'rgba(0,0,0,.3)');x.fillStyle=b;x.fillRect(0,0,w,h);
 x.strokeStyle=pal.sailSeam;x.lineWidth=.7;for(let i=1;i<7;i++){const sx=w*i/7;x.beginPath();x.moveTo(sx,0);x.quadraticCurveTo(sx+(i-3.5)*1.5,h*.5,sx,h);x.stroke()}
 if(!jib&&!gaff){x.strokeStyle='rgba(60,50,35,.25)';for(const k of [.2,.34]){x.beginPath();x.moveTo(0,h*k);x.lineTo(w,h*k);x.stroke();for(let t=4;t<w;t+=6){x.beginPath();x.moveTo(t,h*k);x.lineTo(t,h*k+2.2);x.stroke()}}}
 // patches and weathering
 for(let i=0;i<3;i++){x.fillStyle='rgba(120,100,70,.12)';const px=r()*w*.7+w*.1,py=r()*h*.6+h*.2;x.fillRect(px,py,w*.12,h*.1);x.strokeStyle='rgba(80,60,40,.2)';x.strokeRect(px,py,w*.12,h*.1)}
 grain(x,w,h,.12,seed+9,'#3a3020','#ffffff');
 x.restore();
 x.strokeStyle='rgba(40,30,20,.55)';x.lineWidth=1;shape();x.stroke();
 if(torn){x.globalCompositeOperation='destination-out';x.fillStyle='#000';
  const rip=(cx,cy,rw,rh)=>{x.beginPath();for(let i=0;i<18;i++){const a=i/18*TAU,k=.55+r()*.5;x.lineTo(cx+Math.cos(a)*rw*k,cy+Math.sin(a)*rh*k)}x.closePath();x.fill()};
  rip(w*.62,h*.55,w*.2,h*.22);rip(w*.25,h*.82,w*.12,h*.12);
  x.beginPath();x.moveTo(w*.55,h);for(let t=0;t<=10;t++)x.lineTo(w*(.55+t*.045),h*(.68+((t%2)?.12:0)+r()*.06));x.lineTo(w,h);x.closePath();x.fill();
  x.globalCompositeOperation='source-over';x.strokeStyle='rgba(30,20,10,.5)';x.lineWidth=.8;
 }
 return c;
}
function shipModel(kind){
 const pal=PALETTES[kind];const seed=kind==='hero'?7:23;
 const sails={
  mainCourse:paintSail(148,74,pal,{seed:seed+1}),mainCourseTorn:paintSail(148,74,pal,{seed:seed+1,torn:true}),
  mainTop:paintSail(122,70,pal,{seed:seed+2}),mainGallant:paintSail(86,50,pal,{seed:seed+3}),
  foreCourse:paintSail(126,66,pal,{seed:seed+4}),foreTop:paintSail(104,62,pal,{seed:seed+5}),foreTopTorn:paintSail(104,62,pal,{seed:seed+5,torn:true}),
  spanker:paintSail(92,104,pal,{seed:seed+6,gaff:true}),jib:paintSail(96,92,pal,{seed:seed+7,jib:true})
 };
 return{kind,pal,hull:paintHull(pal,seed),damage:kind==='hero'?paintDamage():null,sails};
}

/* ---------------------------------------------------------------- skies */
function paintNightSky(w,h,seed=3){
 const [c,x]=mk(w,h);const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'#03070f');g.addColorStop(.45,'#0a1a2b');g.addColorStop(.78,'#173149');g.addColorStop(1,'#24425a');x.fillStyle=g;x.fillRect(0,0,w,h);
 const r=rng(seed);for(let i=0;i<220;i++){const sy=r()*h*.55;x.globalAlpha=(1-sy/(h*.55))*(.25+r()*.7);x.fillStyle='#e8f0ff';x.fillRect(r()*w,sy,r()<.08?2:1,r()<.08?2:1)}x.globalAlpha=1;
 const mx=w*.74,my=h*.2;blob(x,mx,my,h*.38,h*.38,'rgba(160,190,225,.32)','rgba(160,190,225,0)');blob(x,mx,my,h*.11,h*.11,'rgba(220,232,250,.7)','rgba(220,232,250,0)');
 blob(x,mx,my,h*.2,h*.2,'rgba(200,220,245,.35)','rgba(200,220,245,0)');x.fillStyle='#f2f5f9';x.beginPath();x.arc(mx,my,h*.055,0,TAU);x.fill();x.fillStyle='rgba(150,165,190,.35)';for(const [dx,dy,rr] of [[-.012,-.01,.012],[.015,.012,.009],[.004,.02,.006]]){x.beginPath();x.arc(mx+dx*h*2,my+dy*h*2,rr*h,0,TAU);x.fill()}
 return c;
}
function paintClouds(w,h,seed,{lit='rgba(150,175,205,.55)',body='rgba(22,36,54,.92)',count=26}={}){
 const [c,x]=mk(w,h);const r=rng(seed);
 for(let i=0;i<count;i++){const cx=r()*w,cy=h*(.25+r()*.55),s=40+r()*110;
  for(let k=0;k<7;k++){const ox=cx+(k-3)*s*.42+r()*20,oy=cy-Math.sin(k/6*Math.PI)*s*.35+r()*10;blob(x,ox,oy,s*.55,s*.38,body,'rgba(22,36,54,0)')}
  x.save();x.globalCompositeOperation='source-atop';blob(x,cx+s*.4,cy-s*.35,s*.9,s*.3,lit,'rgba(150,175,205,0)');x.restore()}
 // seamless wrap
 const [o,ox]=mk(w,h);ox.drawImage(c,0,0);ox.globalAlpha=1;ox.drawImage(c,-w,0);ox.drawImage(c,w,0);return o;
}
function paintFog(w,h,seed,color=[190,210,225]){
 const [c,x]=mk(w,h);const r=rng(seed);for(let i=0;i<70;i++){const cx=r()*w,cy=h*(.3+r()*.5),rx=60+r()*160,ry=18+r()*40,a=.05+r()*.12;
  for(const dx of [-w,0,w])blob(x,cx+dx,cy,rx,ry,`rgba(${color[0]},${color[1]},${color[2]},${a})`,`rgba(${color[0]},${color[1]},${color[2]},0)`)}
 return c;
}

/* ---------------------------------------------------------------- island cove */
function palmTrunk(x,bx,by,h,lean,col){x.strokeStyle=col;x.lineCap='round';for(let i=0;i<h;i+=7){const t=i/h,px=bx+lean*t*t*h*.4,py=by-i;x.lineWidth=10-6*t;x.beginPath();x.moveTo(px,py);x.lineTo(bx+lean*((i+7)/h)**2*h*.4,py-7);x.stroke()}return[bx+lean*h*.4,by-h]}
function frond(x,ox,oy,ang,len,col,droop=.7){x.save();x.translate(ox,oy);x.rotate(ang);x.fillStyle=col;x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(len*.5,-len*.22,len,len*droop*.35);x.quadraticCurveTo(len*.5,len*.02,0,4);x.fill();x.strokeStyle='rgba(0,0,0,.25)';x.lineWidth=1;for(let i=1;i<9;i++){const t=i/9;x.beginPath();x.moveTo(len*t,len*droop*.35*t*t-len*.1*t);x.lineTo(len*t+6,len*droop*.35*t*t+6);x.stroke()}x.restore()}
function canopy(x,r,cx,cy,w,h,base,lit,n=26){
 // solid silhouette mass first (no translucent haze), then lit leaf clusters on top
 x.fillStyle=base;for(let i=0;i<n;i++){const a=r()*TAU,d=Math.sqrt(r());const px=cx+Math.cos(a)*d*w*.5,py=cy+Math.sin(a)*d*h*.5,rr=(w+h)*.09*(.6+r()*.6);x.beginPath();x.arc(px,py,rr,0,TAU);x.fill()}
 for(let i=0;i<n*5;i++){const a=r()*TAU,d=Math.sqrt(r());const px=cx+Math.cos(a)*d*w*.48,py=cy+Math.sin(a)*d*h*.46;const up=(cy-py)/(h*.5);x.save();x.translate(px,py);x.rotate(r()*TAU);x.fillStyle=up>-.1&&r()<.55?lit:shade(base,.18+r()*.2);x.globalAlpha=.75;x.beginPath();x.ellipse(0,0,4+r()*5,1.6+r()*1.8,0,0,TAU);x.fill();x.restore()}
}
function rock(x,r,px,py,w,h,base){x.fillStyle=base;x.beginPath();x.moveTo(px-w/2,py);const n=7;for(let i=0;i<=n;i++){const t=i/n;x.lineTo(px-w/2+w*t+(r()-.5)*w*.08,py-h*Math.sin(t*Math.PI)*(.75+r()*.3))}x.lineTo(px+w/2,py);x.closePath();x.fill();
 x.strokeStyle='rgba(170,195,210,.22)';x.lineWidth=1.4;x.beginPath();x.moveTo(px-w*.38,py-h*.55);x.quadraticCurveTo(px-w*.1,py-h*.98,px+w*.2,py-h*.8);x.stroke();x.fillStyle='rgba(0,0,0,.25)';x.beginPath();x.moveTo(px+w*.1,py);x.lineTo(px+w*.45,py);x.lineTo(px+w*.2,py-h*.6);x.closePath();x.fill()}
function paintCoveLeft(seed=31){
 const w=680,h=540;const [c,x]=mk(w,h);const r=rng(seed);
 // headland: layered rock silhouettes with moonlit edges
 const g=x.createLinearGradient(0,80,0,h);g.addColorStop(0,'#14262c');g.addColorStop(1,'#0a1418');x.fillStyle=g;x.beginPath();x.moveTo(0,h);x.lineTo(0,96);x.bezierCurveTo(80,70,150,110,200,160);x.bezierCurveTo(250,205,280,262,330,300);x.bezierCurveTo(390,340,440,356,500,380);x.lineTo(560,396);x.lineTo(560,h);x.closePath();x.fill();
 x.strokeStyle='rgba(160,190,205,.28)';x.lineWidth=2;x.beginPath();x.moveTo(0,96);x.bezierCurveTo(80,70,150,110,200,160);x.bezierCurveTo(250,205,280,262,330,300);x.stroke();
 for(let i=0;i<9;i++){const px=40+r()*300,py=180+r()*220;if(py<130+px*.6)continue;x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=2;x.beginPath();x.moveTo(px,py);x.lineTo(px+20+r()*40,py+30+r()*30);x.stroke()}
 canopy(x,r,120,120,250,110,'#0f2219','#3f6b4c',30);canopy(x,r,260,214,160,80,'#112619','#4a7752',20);canopy(x,r,40,170,120,90,'#0d1d16','#355d43',16);
 for(const [bx,by,hh,ln] of [[230,206,150,.9],[300,268,120,1.1]]){const [tx,ty]=palmTrunk(x,bx,by,hh,ln,'#231a12');for(let k=0;k<8;k++)frond(x,tx,ty,-2.9+k*.62+r()*.2,60+r()*20,k%2?'#183a28':'#21452f')}
 for(let i=0;i<8;i++)rock(x,r,330+r()*230,392+r()*14,40+r()*50,20+r()*26,['#16252b','#1b2c33','#13202a'][i%3]);
 grain(x,w,h,.05,seed,'#000','#9fc');
 return c;
}
function paintJungleRight(seed=41){
 const w=820,h=540;const [c,x]=mk(w,h);const r=rng(seed);
 // back canopy (cooler, lighter = farther), ruined arch, then darker near trees
 canopy(x,r,520,150,600,170,'#16302a','#3c6556',44);
 x.fillStyle='#3a4645';x.fillRect(430,170,34,220);x.fillRect(590,186,30,204);x.beginPath();x.moveTo(430,180);x.quadraticCurveTo(525,86,620,192);x.lineTo(620,212);x.quadraticCurveTo(525,122,464,206);x.closePath();x.fill();
 x.strokeStyle='rgba(205,220,210,.25)';x.lineWidth=1;for(let y=184;y<390;y+=15){x.beginPath();x.moveTo(430,y);x.lineTo(464,y);x.moveTo(590,y+6);x.lineTo(620,y+6);x.stroke()}
 x.fillStyle='#0b1311';x.beginPath();x.moveTo(464,390);x.lineTo(464,212);x.quadraticCurveTo(525,130,590,206);x.lineTo(590,390);x.closePath();x.fill();
 x.strokeStyle='#2e5a3e';x.lineWidth=2;for(let i=0;i<14;i++){const vx=430+r()*190;x.beginPath();x.moveTo(vx,170+r()*30);x.quadraticCurveTo(vx+(r()-.5)*20,240,vx+(r()-.5)*10,280+r()*80);x.stroke()}
 for(let i=0;i<7;i++){const bx=60+r()*720,by=430+r()*20;const [tx,ty]=palmTrunk(x,bx,by,170+r()*90,(r()-.5)*1.3,'#1a140f');for(let k=0;k<8;k++)frond(x,tx,ty,-3+k*.66+r()*.2,58+r()*24,['#15301f','#1d3e29'][k%2])}
 canopy(x,r,140,260,280,200,'#0e2219','#36604a',30);canopy(x,r,740,250,200,220,'#0d2018','#33604a',26);
 // undergrowth reaching the sand: solid ferns, a dark gap where something watches
 canopy(x,r,410,410,820,90,'#0c1c14','#2f5a40',60);
 for(let i=0;i<60;i++){const px=r()*w,py=380+r()*60;x.save();x.translate(px,py);x.rotate(-1.4+r()*1.1);x.fillStyle=r()<.5?'#1f4630':'#2c5a3c';x.beginPath();x.ellipse(0,0,14+r()*8,3.4,0,0,TAU);x.fill();x.restore()}
 // soften the left edge so the jungle meets the bay without a hard cut
 x.globalCompositeOperation='destination-out';const fade=x.createLinearGradient(0,0,90,0);fade.addColorStop(0,'rgba(0,0,0,1)');fade.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=fade;x.fillRect(0,0,90,330);x.globalCompositeOperation='source-over';
 grain(x,w,h,.05,seed,'#000','#9fc');
 return c;
}
function paintBeach(w,seed=51){
 const h=170;const [c,x]=mk(w,h);const r=rng(seed);
 const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'#6f6a5a');g.addColorStop(.18,'#8f8268');g.addColorStop(1,'#4e4334');x.fillStyle=g;x.beginPath();x.moveTo(0,30);for(let t=0;t<=w;t+=20)x.lineTo(t,18+Math.sin(t*.01)*10+Math.sin(t*.037)*4);x.lineTo(w,h);x.lineTo(0,h);x.closePath();x.fill();
 // wet sand sheen at the waterline
 const s=x.createLinearGradient(0,10,0,48);s.addColorStop(0,'rgba(200,215,225,.35)');s.addColorStop(1,'rgba(200,215,225,0)');x.fillStyle=s;x.fillRect(0,10,w,40);
 for(let i=0;i<w*1.2;i++){x.fillStyle=r()<.5?'rgba(40,30,20,.18)':'rgba(255,240,210,.08)';x.fillRect(r()*w,30+r()*(h-30),1+r()*2,1)}
 // pebbles, shells and driftwood
 for(let i=0;i<w/30;i++){const px=r()*w,py=50+r()*100;x.fillStyle='#3c3a36';x.beginPath();x.ellipse(px,py,3+r()*6,2+r()*3,0,0,TAU);x.fill()}
 for(let i=0;i<4;i++){const px=r()*w,py=70+r()*70;x.save();x.translate(px,py);x.rotate((r()-.5)*.5);x.fillStyle='#5b4a37';x.fillRect(-40,-4,80,8);x.fillStyle='rgba(255,240,210,.18)';x.fillRect(-40,-4,80,2);x.restore()}
 return c;
}

/* ---------------------------------------------------------------- crew portraits (temporary) */
function paintPortrait(kind,mood='neutral'){
 const M={neutral:{eye:1,brow:0,mouth:'base'},alarm:{eye:1.22,brow:-7,mouth:'open'},stern:{eye:.9,brow:6,mouth:'firm'},worried:{eye:1.05,brow:-4,mouth:'frown'}}[mood]||{eye:1,brow:0,mouth:'base'};
 const N=256;const [c,x]=mk(N,N);
 const ink='#24150b',skin={captain:'#d9a27a',lookout:'#f0c19a',bosun:'#b97c57'}[kind];
 const line=(w=4)=>{x.lineWidth=w;x.strokeStyle=ink;x.lineJoin='round';x.lineCap='round'};
 // shoulders / coat
 const coat={captain:['#7d1f22','#4a0f12'],lookout:['#2f5a7a','#1a344a'],bosun:['#4e5f2f','#2b3518']}[kind];
 x.beginPath();x.moveTo(30,N);x.bezierCurveTo(36,196,82,178,128,176);x.bezierCurveTo(174,178,220,196,226,N);x.closePath();let g=x.createLinearGradient(0,176,0,N);g.addColorStop(0,coat[0]);g.addColorStop(1,coat[1]);x.fillStyle=g;x.fill();line();x.stroke();
 if(kind==='captain'){x.fillStyle='#e0b04f';for(const sx of [54,202]){x.beginPath();x.ellipse(sx,200,24,9,sx<128?-.3:.3,0,TAU);x.fill();line(3);x.stroke()}x.fillStyle='#f1e6cf';x.beginPath();x.moveTo(108,178);x.lineTo(128,226);x.lineTo(148,178);x.closePath();x.fill();line(3);x.stroke();x.fillStyle='#e0b04f';for(const by of [200,220,240]){x.beginPath();x.arc(98,by,4,0,TAU);x.arc(158,by,4,0,TAU);x.fill()}}
 if(kind==='lookout'){x.fillStyle='#e9e4d6';x.beginPath();x.moveTo(104,178);x.lineTo(128,212);x.lineTo(152,178);x.closePath();x.fill();x.strokeStyle='#a33a32';x.lineWidth=5;for(let y=186;y<212;y+=9){x.beginPath();x.moveTo(110+(y-186)*.6,y);x.lineTo(146-(y-186)*.6,y);x.stroke()}x.save();x.translate(184,214);x.rotate(-.5);x.fillStyle='#8a6a2e';x.fillRect(-40,-9,80,18);x.fillStyle='#d6b25a';x.fillRect(-40,-9,10,18);x.fillRect(16,-9,6,18);line(3);x.strokeRect(-40,-9,80,18);x.restore()}
 if(kind==='bosun'){x.fillStyle='#6b4a2c';x.beginPath();x.moveTo(84,182);x.lineTo(110,N);x.lineTo(146,N);x.lineTo(172,182);x.bezierCurveTo(150,196,106,196,84,182);x.fill();line(3);x.stroke();x.strokeStyle='#3a2414';x.lineWidth=6;x.beginPath();x.moveTo(60,N);x.quadraticCurveTo(110,206,196,N);x.stroke();x.fillStyle='#b8b1a2';x.beginPath();x.arc(150,228,7,0,TAU);x.fill()}
 // neck + head
 x.fillStyle=skin;x.fillRect(112,160,32,24);
 x.beginPath();x.ellipse(128,124,58,60,0,0,TAU);g=x.createRadialGradient(112,104,10,128,124,64);g.addColorStop(0,'#ffe2c8');g.addColorStop(.35,skin);g.addColorStop(1,shade(skin,-.25));x.fillStyle=g;x.fill();line(4.5);x.stroke();
 // hair / headwear behind the face edges
 if(kind==='bosun'){x.fillStyle='#3b2416';x.beginPath();x.moveTo(72,118);x.quadraticCurveTo(62,170,86,186);x.quadraticCurveTo(80,150,84,120);x.fill();x.beginPath();x.moveTo(184,118);x.quadraticCurveTo(204,190,176,214);x.quadraticCurveTo(190,170,174,124);x.fill();x.fillStyle='#d8b04a';x.beginPath();x.arc(184,152,5,0,TAU);x.fill()}
 // eyes (big, readable at small sizes)
 const eye=(ex,ey,closed)=>{if(closed){line(4);x.beginPath();x.moveTo(ex-12,ey);x.quadraticCurveTo(ex,ey+6,ex+12,ey);x.stroke();return}const k=M.eye;x.fillStyle='#fff';x.beginPath();x.ellipse(ex,ey,11*k,13*k,0,0,TAU);x.fill();line(3);x.stroke();x.fillStyle={captain:'#2d4a63',lookout:'#3c6b3a',bosun:'#5a3a1c'}[kind];x.beginPath();x.ellipse(ex+1,ey+2,7*Math.min(k,1),9*Math.min(k,1),0,0,TAU);x.fill();x.fillStyle='#120a05';x.beginPath();x.arc(ex+1,ey+3,(mood==='alarm'?3:4),0,TAU);x.fill();x.fillStyle='#fff';x.beginPath();x.arc(ex-2,ey-2,3,0,TAU);x.fill()};
 eye(106,128,false);eye(150,128,kind==='captain');
 if(kind==='captain'){x.fillStyle='#1d1612';x.beginPath();x.ellipse(150,128,15,12,0,0,TAU);x.fill();x.strokeStyle='#1d1612';x.lineWidth=3;x.beginPath();x.moveTo(80,110);x.lineTo(180,138);x.stroke();
  // beard and scar
  x.fillStyle='#2a1c14';x.beginPath();x.moveTo(78,138);x.quadraticCurveTo(90,196,128,200);x.quadraticCurveTo(166,196,178,138);x.quadraticCurveTo(160,168,128,166);x.quadraticCurveTo(96,168,78,138);x.fill();line(3);x.stroke();x.strokeStyle='#a8574a';x.lineWidth=2.5;x.beginPath();x.moveTo(96,108);x.lineTo(112,146);x.stroke()}
 // brows, nose, mouth
 line(4);const lift=mood==='alarm'?-8:0;x.beginPath();x.moveTo(94,108+lift);x.lineTo(116,104+(kind==='lookout'?-4:2)+M.brow+lift);x.moveTo(140,104+M.brow+lift);x.lineTo(162,110+lift);x.stroke();
 x.strokeStyle=shade(skin,-.4);x.lineWidth=3;x.beginPath();x.moveTo(128,138);x.quadraticCurveTo(122,150,130,152);x.stroke();
 line(3.5);const my=kind==='captain'?178:165;x.beginPath();if(M.mouth==='open'){x.fillStyle='#5a1c14';x.ellipse(128,my+2,9,7,0,0,TAU);x.fill();x.stroke()}else if(M.mouth==='firm'){x.moveTo(114,my);x.lineTo(142,my);x.stroke()}else if(M.mouth==='frown'){x.moveTo(114,my+3);x.quadraticCurveTo(128,my-5,142,my+3);x.stroke()}else{if(kind==='lookout'){x.moveTo(114,164);x.quadraticCurveTo(128,172,142,162)}else if(kind==='bosun'){x.moveTo(116,166);x.lineTo(140,164)}else{x.moveTo(116,180);x.quadraticCurveTo(128,176,140,180)}x.stroke()}
 if(kind==='lookout'){x.fillStyle='rgba(170,90,50,.5)';for(const [fx,fy] of [[96,146],[102,150],[90,150],[156,146],[162,150],[168,146]]){x.beginPath();x.arc(fx,fy,2,0,TAU);x.fill()}}
 // headwear
 if(kind==='captain'){x.fillStyle='#1f2533';x.beginPath();x.moveTo(40,96);x.quadraticCurveTo(128,34,216,96);x.quadraticCurveTo(200,76,184,74);x.quadraticCurveTo(170,18,128,16);x.quadraticCurveTo(86,18,72,74);x.quadraticCurveTo(56,76,40,96);x.closePath();x.fill();line(4.5);x.stroke();x.strokeStyle='#d9ac4f';x.lineWidth=4;x.beginPath();x.moveTo(46,92);x.quadraticCurveTo(128,40,210,92);x.stroke();x.fillStyle='#f3efe4';x.beginPath();x.ellipse(128,52,13,11,0,0,TAU);x.fill();x.fillStyle='#1f2533';x.beginPath();x.arc(123,52,3,0,TAU);x.arc(133,52,3,0,TAU);x.fill();x.fillStyle='#b8452f';x.beginPath();x.moveTo(176,40);x.quadraticCurveTo(220,10,238,34);x.quadraticCurveTo(212,30,186,58);x.fill()}
 if(kind==='lookout'){x.fillStyle='#b8332c';x.beginPath();x.moveTo(66,104);x.quadraticCurveTo(128,40,192,104);x.quadraticCurveTo(170,82,128,80);x.quadraticCurveTo(86,82,66,104);x.fill();line(4);x.stroke();x.beginPath();x.moveTo(186,96);x.quadraticCurveTo(220,110,226,140);x.quadraticCurveTo(206,128,192,112);x.closePath();x.fill();x.stroke();x.fillStyle='#e8d6b0';for(const [dx,dy] of [[100,70],[140,66],[170,84]]){x.beginPath();x.arc(dx,dy,4,0,TAU);x.fill()}x.fillStyle='#6a3b1c';x.beginPath();x.moveTo(74,110);x.quadraticCurveTo(84,96,100,104);x.quadraticCurveTo(90,112,80,122);x.fill()}
 if(kind==='bosun'){x.fillStyle='#3f6d3a';x.beginPath();x.moveTo(66,112);x.quadraticCurveTo(128,30,192,112);x.quadraticCurveTo(160,86,128,84);x.quadraticCurveTo(96,86,66,112);x.fill();line(4);x.stroke();x.strokeStyle='#d4b24a';x.lineWidth=3;x.beginPath();x.moveTo(74,104);x.quadraticCurveTo(128,52,186,104);x.stroke();x.fillStyle='#3b2416';x.beginPath();x.moveTo(84,112);x.quadraticCurveTo(110,96,150,100);x.quadraticCurveTo(120,108,96,122);x.fill()}
 if(mood==='alarm'||mood==='worried'){x.fillStyle='rgba(170,210,240,.85)';x.beginPath();x.ellipse(176,96,4,7,.3,0,TAU);x.fill()}
 grain(x,N,N,.05,kind.length*13,'#000','#fff');
 return c;
}
function shade(hex,k){const n=parseInt(hex.slice(1),16);const f=v=>Math.max(0,Math.min(255,Math.round(v*(1+k))));return'#'+((f(n>>16)<<16)|(f(n>>8&255)<<8)|f(n&255)).toString(16).padStart(6,'0')}


/* ---------------------------------------------------------------- story NPC crew (runtime vector chibi characters)
 * Proportions follow the playable heroes (large head, short body, bold outline). Identities are distinct
 * from the playable roster: Captain Brask, Pip, Tamsin, Rook and Mo. TEMPORARY procedural art. */
const CREW={
 captain:{skin:'#d9a27a',coat:'#7d1f22',coat2:'#4a0f12',pants:'#2b2420',boots:'#1b120c',hat:'tricorn',hatCol:'#1f2533',trim:'#d9ac4f',beard:'#2a1c14',patch:true},
 lookout:{skin:'#f0c19a',coat:'#e9e4d6',coat2:'#c4bca8',stripe:'#a33a32',pants:'#3a4f66',boots:'#3a2414',hat:'bandana',hatCol:'#b8332c',hair:'#6a3b1c'},
 bosun:{skin:'#b97c57',coat:'#6b4a2c',coat2:'#3e2a17',under:'#e8dcc0',pants:'#4a3b2a',boots:'#24170d',hat:'scarf',hatCol:'#3f6d3a',hair:'#3b2416',braid:true},
 rook:{skin:'#e2b08a',coat:'#2f5a7a',coat2:'#1a344a',pants:'#5a4a36',boots:'#22160c',hat:'cap',hatCol:'#6a7b8c',stubble:true},
 mo:{skin:'#8a5a3c',coat:'#5b3a24',coat2:'#3a2414',under:'#c9b9a0',pants:'#3d3328',boots:'#1d130b',hat:'bandage',hatCol:'#efe8dc',sling:true}
};
const INK='#24150b';
function limb(c,x,y,len,ang,w,col,end,endCol){c.save();c.translate(x,y);c.rotate(ang);c.fillStyle=col;c.strokeStyle=INK;c.lineWidth=1.3;c.beginPath();c.roundRect(-w/2,0,w,len,w/2);c.fill();c.stroke();if(end){c.fillStyle=endCol;c.beginPath();if(end==='boot'){c.roundRect(-w/2-.5,len-3.5,w+3.5,5,2)}else c.arc(0,len,w*.62,0,TAU);c.fill();c.stroke()}c.restore()}
function drawCrew(c,x,y,s,id,o={}){
 const C=CREW[id]||CREW.rook,t=o.t||0,pose=o.pose||'idle',dir=o.dir||1;const walk=pose==='walk'||pose==='carry'||pose==='support'||pose==='limp';
 const sp=pose==='limp'?4.5:pose==='carry'?7:8,ph=t*sp,sw=walk?Math.sin(ph)*(pose==='limp'?.35:.55):0,bob=walk?Math.abs(Math.cos(ph))*1.6:Math.sin(t*2.2)*.5;
 c.save();c.translate(x,y);c.scale(s*dir,s);
 c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(0,0,11,2.6,0,0,TAU);c.fill();
 if(pose==='sit'){c.translate(0,7)}
 c.translate(0,-bob);if(pose==='limp')c.rotate(.08);
 const arm=(front)=>{const sx=front?6:-5,sy=-27;let a=front?-sw*.8:sw*.8;let len=11;
  if(pose==='carry')a=front?-1.35:-1.25;else if(pose==='point'&&front)a=-1.9;else if(pose==='scope'&&front)a=-2.6;else if(pose==='support'&&!front)a=-1.75;else if(pose==='sit')a=front?-.6:.4;else if(pose==='wave'&&front)a=-2.6+Math.sin(t*8)*.35;
  if(C.sling&&front&&pose!=='carry'){c.fillStyle=C.hatCol;c.strokeStyle=INK;c.lineWidth=1;c.beginPath();c.roundRect(1,-27,10,7,3);c.fill();c.stroke();return}
  limb(c,sx,sy,len,a,4.2,front?C.coat:C.coat2,'hand',C.skin)};
 const leg=(front)=>{let a=front?sw:-sw;if(pose==='sit')a=front?-1.45:-1.3;limb(c,front?3:-3,-12,11.5,a,5,front?C.pants:shade(C.pants,-.2),'boot',C.boots)};
 arm(false);leg(false);
 // torso
 c.fillStyle=C.coat;c.strokeStyle=INK;c.lineWidth=1.4;c.beginPath();c.roundRect(-8,-31,16,21,6);c.fill();c.stroke();
 if(C.stripe){c.strokeStyle=C.stripe;c.lineWidth=1.6;for(let k=-27;k<-12;k+=4){c.beginPath();c.moveTo(-7,k);c.lineTo(7,k);c.stroke()}}
 if(C.under){c.fillStyle=C.under;c.beginPath();c.moveTo(-3,-31);c.lineTo(3,-31);c.lineTo(2,-14);c.lineTo(-2,-14);c.closePath();c.fill()}
 if(id==='captain'){c.fillStyle=C.trim;c.fillRect(-9,-31,4,2.5);c.fillRect(5,-31,4,2.5);for(const by of [-26,-21,-16]){c.beginPath();c.arc(-2.5,by,1,0,TAU);c.arc(2.5,by,1,0,TAU);c.fill()}}
 c.fillStyle='#2a1a0c';c.fillRect(-8,-15,16,3);c.fillStyle='#d6b25a';c.fillRect(-1.5,-15,3,3);
 leg(true);
 // head
 const hy=-43;c.fillStyle=C.skin;c.strokeStyle=INK;c.lineWidth=1.6;c.beginPath();c.arc(0,hy,12,0,TAU);c.fill();c.stroke();
 if(C.braid){c.fillStyle=C.hair;c.beginPath();c.ellipse(-10,hy+8,3,8,.3,0,TAU);c.fill()}
 if(C.beard){c.fillStyle=C.beard;c.beginPath();c.moveTo(-10,hy+2);c.quadraticCurveTo(-6,hy+15,2,hy+14);c.quadraticCurveTo(10,hy+13,11,hy+2);c.quadraticCurveTo(4,hy+8,-10,hy+2);c.fill()}
 if(C.stubble){c.fillStyle='rgba(60,40,30,.35)';c.beginPath();c.arc(1,hy+5,8,0,Math.PI);c.fill()}
 // face (looks toward travel direction)
 const blink=Math.sin(t*1.7+x)>.985;c.fillStyle='#fff';for(const ex of [-1,6]){if(blink||(C.patch&&ex===6))continue;c.beginPath();c.ellipse(ex,hy-1,2.6,3.2,0,0,TAU);c.fill()}
 c.fillStyle='#120a05';for(const ex of [-1,6]){if(C.patch&&ex===6){c.fillStyle='#120a05';c.beginPath();c.ellipse(ex,hy-1,3,2.6,0,0,TAU);c.fill();c.strokeStyle='#120a05';c.lineWidth=1;c.beginPath();c.moveTo(-11,hy-6);c.lineTo(12,hy+1);c.stroke();continue}if(blink){c.fillRect(ex-2,hy-1,4,1);continue}c.beginPath();c.arc(ex+.8,hy-.4,1.5,0,TAU);c.fill()}
 c.strokeStyle=INK;c.lineWidth=1.1;c.beginPath();if(pose==='limp'||o.mood==='pain'){c.moveTo(0,hy+6);c.lineTo(5,hy+5)}else{c.moveTo(0,hy+6);c.quadraticCurveTo(2.5,hy+7.5,5,hy+6)}c.stroke();
 // headwear
 c.lineWidth=1.5;c.strokeStyle=INK;
 if(C.hat==='tricorn'){c.fillStyle=C.hatCol;c.beginPath();c.moveTo(-16,hy-6);c.quadraticCurveTo(0,hy-14,16,hy-6);c.quadraticCurveTo(10,hy-10,8,hy-12);c.quadraticCurveTo(4,hy-24,-2,hy-23);c.quadraticCurveTo(-9,hy-22,-10,hy-12);c.quadraticCurveTo(-13,hy-10,-16,hy-6);c.fill();c.stroke();c.strokeStyle=C.trim;c.lineWidth=1.3;c.beginPath();c.moveTo(-14,hy-7);c.quadraticCurveTo(0,hy-14,14,hy-7);c.stroke();c.fillStyle='#b8452f';c.beginPath();c.moveTo(4,hy-20);c.quadraticCurveTo(14,hy-28,18,hy-22);c.quadraticCurveTo(12,hy-22,6,hy-16);c.fill()}
 if(C.hat==='bandana'||C.hat==='scarf'){c.fillStyle=C.hatCol;c.beginPath();c.moveTo(-12,hy-3);c.quadraticCurveTo(0,hy-20,12,hy-3);c.quadraticCurveTo(0,hy-9,-12,hy-3);c.fill();c.stroke();c.beginPath();c.moveTo(-11,hy-4);c.quadraticCurveTo(-18,hy-2+Math.sin(t*5)*1.5,-19,hy+4);c.quadraticCurveTo(-15,hy,-10,hy-1);c.fill();c.stroke();if(C.hat==='scarf'){c.strokeStyle='#d4b24a';c.lineWidth=1;c.beginPath();c.moveTo(-10,hy-6);c.quadraticCurveTo(0,hy-15,10,hy-6);c.stroke()}}
 if(C.hat==='cap'){c.fillStyle=C.hatCol;c.beginPath();c.arc(0,hy-4,12,Math.PI,0);c.closePath();c.fill();c.stroke();c.fillStyle=shade(C.hatCol,-.25);c.fillRect(-12,hy-6,24,3);c.beginPath();c.arc(0,hy-17,2.4,0,TAU);c.fill()}
 if(C.hat==='bandage'){c.strokeStyle=C.hatCol;c.lineWidth=3.2;c.beginPath();c.arc(0,hy,11.2,Math.PI*1.05,Math.PI*1.95);c.stroke();c.fillStyle='#b03a2e';c.beginPath();c.arc(-6,hy-9,1.8,0,TAU);c.fill()}
 arm(true);
 if(pose==='carry'){c.fillStyle='#6a4a28';c.strokeStyle=INK;c.lineWidth=1.3;c.beginPath();c.roundRect(4,-44,15,12,1.5);c.fill();c.stroke();c.strokeStyle='#3e2a14';c.beginPath();c.moveTo(4,-38);c.lineTo(19,-38);c.moveTo(11.5,-44);c.lineTo(11.5,-32);c.stroke()}
 if(pose==='scope'){c.fillStyle='#8a6a2e';c.strokeStyle=INK;c.lineWidth=1;c.save();c.translate(8,hy-1);c.rotate(-.12);c.fillRect(0,-2,12,4);c.strokeRect(0,-2,12,4);c.restore()}
 c.restore();
}

let cache=null;
function build(){
 if(cache)return cache;
 const t0=typeof performance!=='undefined'?performance.now():0;
 cache={
  hero:shipModel('hero'),enemy:shipModel('enemy'),HULL_BOX,S,
  sky:paintNightSky(1280,540),cloudsFar:paintClouds(1600,260,5,{count:18,body:'rgba(30,46,66,.55)'}),cloudsNear:paintClouds(1800,300,9,{count:14,body:'rgba(18,28,42,.6)',lit:'rgba(170,190,215,.4)'}),
  fog:paintFog(1400,260,13),fogWarm:paintFog(1400,260,17,[200,190,200]),
  coveLeft:paintCoveLeft(),jungleRight:paintJungleRight(),beach:paintBeach(1700),
  portraits:Object.fromEntries(['captain','lookout','bosun'].flatMap(k=>['neutral','alarm','stern','worried'].map(m=>[k+':'+m,paintPortrait(k,m)])))
 };
 cache.buildMs=(typeof performance!=='undefined'?performance.now():0)-t0;
 return cache;
}
function release(){cache=null}
root.PirateStoryArt={build,release,sheer,PALETTES,HULL_BOX,drawCrew,CREW,paintPortrait,status:'temporary-procedural'};
})();
