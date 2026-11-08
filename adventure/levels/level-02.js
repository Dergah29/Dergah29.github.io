/* Pirate Strike — Level 2: Path to the Ruins (daylight jungle ruins).
 * Independent level on PirateLevelEngine: wooden rope-bridge decks over waterfall
 * chasms, stone ruins, pirate cutthroats and gunners (painted, from the owner's
 * reference), wood/metal spike traps, breaking rope bridge, ferry and lift, two
 * checkpoints, a secret chest and a final ambush that seals the exit gate. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/';const A2=BASE+'assets/level-02/';
const L={
en:{levelWord:'Level',title:'Level 2 · Path to the Ruins',blurb:'Rope bridges, waterfalls and pirate ambushes on the way to the ruins',jungle:'Jungle Gate',bridges:'Rope Bridges',heights:'Ruin Heights',gate:'Ruins Gate',
 objJungle:'Follow the bridges into the jungle',objBridges:'Cross the falls — the old bridge is breaking!',objHeights:'Climb the ruins and find the hidden treasure',objGate:'Defeat the pirate ambush',objExit:'The gate is open — enter the ruins',ambush:'AMBUSH! The gate slams shut',gateOpen:'The ruins gate opens!',hint1:'Hold ATTACK for a sword combo',hint2:'THROW / PISTOL hits enemies from afar',hint3:'Jump over spikes · DASH through attacks'},
az:{levelWord:'Səviyyə',title:'Səviyyə 2 · Xarabalıqlara Yol',blurb:'Kəndir körpülər, şəlalələr və pirat pusquları',jungle:'Cəngəllik Qapısı',bridges:'Kəndir Körpülər',heights:'Xarabalıq Yüksəklikləri',gate:'Xarabalıq Qapısı',
 objJungle:'Körpülərlə cəngəlliyə irəlilə',objBridges:'Şəlaləni keç — köhnə körpü çökür!',objHeights:'Xarabalıqlara dırmaş və gizli xəzinəni tap',objGate:'Pirat pusqusunu məğlub et',objExit:'Qapı açıldı — xarabalıqlara daxil ol',ambush:'PUSQU! Qapı bağlandı',gateOpen:'Xarabalıq qapısı açılır!',hint1:'Kombo üçün VUR düyməsini basılı saxla',hint2:'AT / TAPANÇA uzaqdakı düşmənləri vurur',hint3:'Tikanların üstündən tullan · Hücumdan YAYIN'},
tr:{levelWord:'Bölüm',title:'Bölüm 2 · Harabelere Yol',blurb:'İp köprüler, şelaleler ve korsan pusuları',jungle:'Orman Kapısı',bridges:'İp Köprüler',heights:'Harabe Tepeleri',gate:'Harabe Kapısı',
 objJungle:'Köprüleri izleyerek ormana gir',objBridges:'Şelaleyi geç — eski köprü çöküyor!',objHeights:'Harabelere tırman ve gizli hazineyi bul',objGate:'Korsan pususunu yen',objExit:'Kapı açıldı — harabelere gir',ambush:'PUSU! Kapı kapandı',gateOpen:'Harabe kapısı açılıyor!',hint1:'Kombo için VUR tuşunu basılı tut',hint2:'FIRLAT / TABANCA uzaktaki düşmanları vurur',hint3:'Dikenlerin üstünden zıpla · Saldırılardan ATIL'},
ru:{levelWord:'Уровень',title:'Уровень 2 · Путь к руинам',blurb:'Верёвочные мосты, водопады и пиратские засады',jungle:'Врата джунглей',bridges:'Верёвочные мосты',heights:'Высоты руин',gate:'Врата руин',
 objJungle:'Идите по мостам в джунгли',objBridges:'Пересеките водопад — мост рушится!',objHeights:'Поднимитесь на руины и найдите сокровище',objGate:'Отбейте пиратскую засаду',objExit:'Врата открыты — войдите в руины',ambush:'ЗАСАДА! Врата захлопнулись',gateOpen:'Врата руин открываются!',hint1:'Удерживайте УДАР для комбо',hint2:'БРОСОК / ПИСТОЛЕТ бьёт издалека',hint3:'Прыгайте через шипы · РЫВОК сквозь атаки'},
pl:{levelWord:'Poziom',title:'Poziom 2 · Droga do ruin',blurb:'Mosty linowe, wodospady i pirackie zasadzki',jungle:'Brama dżungli',bridges:'Mosty linowe',heights:'Wzgórza ruin',gate:'Brama ruin',
 objJungle:'Idź mostami w głąb dżungli',objBridges:'Przejdź wodospad — stary most się wali!',objHeights:'Wspinaj się po ruinach i znajdź skarb',objGate:'Pokonaj piracką zasadzkę',objExit:'Brama otwarta — wejdź do ruin',ambush:'ZASADZKA! Brama się zatrzasnęła',gateOpen:'Brama ruin się otwiera!',hint1:'Przytrzymaj ATAK, by zrobić combo',hint2:'RZUT / PISTOLET trafia z daleka',hint3:'Przeskakuj kolce · ZRYW przez ataki'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k];

/* ---------------- painted pirate enemies (cut from the owner's reference) */
const SKINS={pirate:{img:'pirate-sword.png',hand:[222,186],h:150},gunner:{img:'pirate-gun.png',hand:[250,136],h:146}};
function whiteOf(img){const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);return c}
function cutlass(c,len){c.save();c.lineCap='round';c.fillStyle='#4a2c14';c.fillRect(-10,-3,12,6);c.fillStyle='#d5a63c';c.beginPath();c.ellipse(2,0,4,9,0,0,TAU);c.fill();
 const g=c.createLinearGradient(0,-6,0,6);g.addColorStop(0,'#f4f8fb');g.addColorStop(.5,'#b8c4cf');g.addColorStop(1,'#6f7c88');c.fillStyle=g;c.beginPath();c.moveTo(4,-3);c.quadraticCurveTo(len*.6,-8,len,-16);c.quadraticCurveTo(len*.7,4,4,4);c.closePath();c.fill();c.strokeStyle='#2a2f36';c.lineWidth=1.5;c.stroke();c.restore()}
function pistol(c){c.save();c.fillStyle='#4a2c14';c.beginPath();c.moveTo(-6,0);c.lineTo(-14,14);c.lineTo(-6,16);c.lineTo(2,4);c.fill();const g=c.createLinearGradient(0,-4,0,4);g.addColorStop(0,'#c99a45');g.addColorStop(1,'#6b4a1c');c.fillStyle=g;c.fillRect(-4,-4,34,7);c.fillStyle='#2b2b30';c.fillRect(26,-5,6,9);c.strokeStyle='#1a1208';c.lineWidth=1.2;c.strokeRect(-4,-4,34,7);c.restore()}

/* painted cut-out cast (tools/enemy_cast.py, enemy-rig.js): Bandana Cutthroat and Powder Gunner, fully articulated */
const RIG={pirate:{cast:'level02',char:'pirate',weapon:'melee',grip:.15,windArm:-2.6,swingArm:1.4},
 gunner:{cast:'level02',char:'gunner',weapon:'gun',grip:0,stateOf:e=>e.state==='idle'&&e.cool>1.1&&e.alert?'reload':e.state}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — painted fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig;if(!R||!run.rigCast||!Rig)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;const t=run.time;
 c.save();c.globalAlpha=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 // telegraphs first, so the body stays readable on top
 if(!e.dead&&e.state==='windup'){const k=1-e.timer/.48;run.fx.glow(c,e.cx+e.dir*30,e.floor-96,50+24*k,'rgba(255,80,50,',.35+.4*k)}
 const o=Rig.draw(run,c,e,R);
 if(o&&!e.dead){
  if(e.type==='gunner'&&e.state==='draw'&&e.aim){const k=1-e.timer/.85;c.strokeStyle='rgba(255,70,50,'+(.15+.45*k)+')';c.setLineDash([8,8]);c.lineWidth=2;c.beginPath();c.moveTo(o.muzzle[0],o.muzzle[1]);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.setLineDash([]);run.fx.glow(c,o.muzzle[0],o.muzzle[1],16+14*k,'rgba(255,220,120,',.5+.4*k)}
  if(e.type==='pirate'&&e.state==='strike'){const k=1-e.timer/.24;c.globalAlpha=alpha*(1-k)*.85;c.strokeStyle='rgba(255,240,220,.9)';c.lineWidth=9;c.lineCap='round';c.beginPath();const ax=e.cx+e.dir*10,ay=e.floor-90;
   if(e.dir>0)c.arc(ax,ay,62,-1.9,-1.9+2.5*Math.min(1,k*2));else c.arc(ax,ay,62,Math.PI+1.9-2.5*Math.min(1,k*2),Math.PI+1.9);c.stroke();c.globalAlpha=alpha}
  if(e.hp<e.max&&!(e.spawnT>0)){const bw=60,by=o.top-14;c.fillStyle='#0b0f18cc';c.beginPath();c.roundRect(e.cx-bw/2-2,by-2,bw+4,10,5);c.fill();c.fillStyle='#e8484f';c.beginPath();c.roundRect(e.cx-bw/2,by,bw*e.hp/e.max,6,3);c.fill()}
  if(e.state==='stun')for(let i=0;i<3;i++){const a=t*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,o.top-6+Math.sin(a)*4,5,5)}}
 c.restore();c.imageSmoothingEnabled=false;return true}

function drawPirate(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const sk=run.pirateSkins?.[e.type];if(!sk)return false;
 const t=run.time,s=sk.h/sk.img.height,iw=sk.img.width*s,ih=sk.img.height*s;
 const alpha=e.dead?clamp(1-(e.deadT-.5)/.7,0,1):1;if(alpha<=0)return true;
 let rot=0,dx=0,dy=0,sx=1,sy=1,wa=-.9,wl=e.type==='pirate'?66:0,flash=e.flash>0?.85:0;
 if(e.dead){rot=-Math.min(1.35,e.deadT*3.2);dy=Math.min(18,e.deadT*40);dx=-8}
 else if(e.hurtT>0){rot=-.16;dx=-6}
 else if(e.state==='windup'||e.state==='draw'){const k=e.state==='draw'?1-e.timer/.85:1-e.timer/.48;rot=-.1*k;dx=-6*k;wa=-2.3*k-.9*(1-k)}
 else if(e.state==='strike'){const k=1-e.timer/.24;rot=.14;dx=10+8*k;wa=-2.2+2.9*Math.min(1,k*2.2)}
 else if(e.state==='release'){dx=-5;rot=-.05}
 else if(e.anim==='walk'){const b=Math.abs(Math.sin(t*9+e.home));dy=-b*4;rot=Math.sin(t*9+e.home)*.045;sy=1+(1-b)*.03}
 else{sy=1+Math.sin(t*2.4+e.home)*.015}
 c.save();c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(e.cx,e.floor+1,32,7,0,0,TAU);c.fill();c.restore();
 // telegraphs
 if(!e.dead&&(e.state==='windup')){const k=1-e.timer/.48;run.fx.glow(c,e.cx+e.dir*24,e.floor-ih*.55,50+24*k,'rgba(255,80,50,',.35+.4*k)}
 if(!e.dead&&e.state==='draw'&&e.aim){const k=1-e.timer/.85;c.save();c.strokeStyle='rgba(255,70,50,'+(.15+.45*k)+')';c.setLineDash([8,8]);c.lineWidth=2;c.beginPath();c.moveTo(e.cx+e.dir*46,e.y+e.h*.44);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.restore();run.fx.glow(c,e.cx+e.dir*50,e.y+e.h*.44,16+14*k,'rgba(255,220,120,',.5+.4*k)}
 c.save();c.translate(Math.round(e.cx+dx*e.dir),Math.round(e.floor+dy));if(e.dir<0)c.scale(-1,1);c.rotate(rot);c.scale(sx,sy);c.globalAlpha=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const ox=-iw*.5,oy=-ih;
 E.drawPaintedWalk(c,sk.img,ox,oy,iw,ih,e,t);
 if(flash){c.globalAlpha=alpha*flash;c.drawImage(sk.white,ox,oy,iw,ih);c.globalAlpha=alpha}
 // weapon at the front hand
 const hx=ox+sk.hand[0]*s,hy=oy+sk.hand[1]*s;c.save();c.translate(hx,hy);
 if(e.type==='pirate'){c.rotate(wa);cutlass(c,wl)}else{c.rotate(e.state==='draw'||e.state==='release'?0:.35);pistol(c)}
 c.restore();
 // slash arc during strike
 if(e.type==='pirate'&&e.state==='strike'&&!e.dead){const k=1-e.timer/.24;c.globalAlpha=alpha*(1-k)*.9;c.strokeStyle='rgba(255,240,220,.9)';c.lineWidth=10;c.lineCap='round';c.beginPath();c.arc(hx-10,hy-6,70,-1.6,-1.6+2.4*Math.min(1,k*2));c.stroke()}
 c.restore();c.imageSmoothingEnabled=false;
 if(!e.dead&&e.hp<e.max){const bw=60,by=e.floor-ih-16;c.fillStyle='#0b0f18cc';c.beginPath();c.roundRect(e.cx-bw/2-2,by-2,bw+4,10,5);c.fill();c.fillStyle='#e8484f';c.beginPath();c.roundRect(e.cx-bw/2,by,bw*e.hp/e.max,6,3);c.fill()}
 if(e.state==='stun')for(let i=0;i<3;i++){const a=t*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,e.floor-ih-8+Math.sin(a)*4,5,5)}
 return true;
}

/* ---------------- terrain: rope-bridge decks and mossy ruin blocks */
function paintDeck(run,c,s,L,R,T,B){
 const top=s.y,x0=Math.max(s.x,L),x1=Math.min(s.x+s.w,R),bottom=Math.min(s.y+s.h,B+40);
 if(x1<=x0)return true;
 // support posts every 160px down into the chasm, with cross braces
 const step=160;for(let px=Math.ceil((s.x+20)/step)*step-20;px<s.x+s.w-10;px+=step){if(px+40<L||px>R)continue;
  const g=c.createLinearGradient(px,0,px+26,0);g.addColorStop(0,'#6b4426');g.addColorStop(.45,'#8f5d34');g.addColorStop(1,'#4a2c16');c.fillStyle=g;c.fillRect(px,top+30,26,bottom-top-30);
  c.fillStyle='rgba(0,0,0,.25)';for(let y=top+60;y<bottom;y+=46)c.fillRect(px,y,26,3);
  c.strokeStyle='#5a381e';c.lineWidth=7;c.beginPath();c.moveTo(px+26,top+40);c.lineTo(Math.min(px+step,s.x+s.w-10),top+150);c.stroke();
  const dk=c.createLinearGradient(0,top+40,0,bottom);dk.addColorStop(0,'rgba(10,20,25,0)');dk.addColorStop(1,'rgba(10,25,30,.75)');c.fillStyle=dk;c.fillRect(px,top+40,26,bottom-top-40)}
 // under-beam
 c.fillStyle='#4a2c16';c.fillRect(x0,top+22,x1-x0,14);c.fillStyle='#2e1b0d';c.fillRect(x0,top+34,x1-x0,4);
 // planks
 for(let x=Math.floor(x0/34)*34;x<x1;x+=34){const w=Math.min(33,x1-x);if(x+34<s.x)continue;const k=((x/34)|0)%3;
  const g=c.createLinearGradient(0,top,0,top+24);g.addColorStop(0,['#b98552','#a8743f','#c08e5c'][k]);g.addColorStop(.25,['#9a6436','#8f5a2e','#a06a3a'][k]);g.addColorStop(1,'#5c381c');c.fillStyle=g;c.fillRect(Math.max(x,s.x),top,w,24);
  c.fillStyle='rgba(255,230,180,.25)';c.fillRect(Math.max(x,s.x),top,w,2);c.fillStyle='#3a220f';c.fillRect(x+w,top,1.5,24);
  c.fillStyle='#2b1a0c';c.fillRect(x+6,top+9,3,3);c.fillRect(x+24,top+9,3,3)}
 // railing posts + rope
 const rp=160;let prev=null;for(let px=Math.ceil((s.x+12)/rp)*rp-8;px<=s.x+s.w-10;px+=rp){const rx=px,ry=top-56;
  if(prev&&rx>L-200&&prev<R+200){c.strokeStyle='#8a6a3e';c.lineWidth=3;c.beginPath();c.moveTo(prev+8,ry+8);c.quadraticCurveTo((prev+rx)/2+8,ry+30,rx+8,ry+8);c.stroke();c.strokeStyle='#6a4e2a';c.beginPath();c.moveTo(prev+8,ry+30);c.quadraticCurveTo((prev+rx)/2+8,ry+48,rx+8,ry+30);c.stroke()}
  prev=rx;if(rx+20<L||rx>R)continue;
  const g=c.createLinearGradient(rx,0,rx+16,0);g.addColorStop(0,'#7a4e2a');g.addColorStop(.5,'#a06a3c');g.addColorStop(1,'#4e3018');c.fillStyle=g;c.fillRect(rx,ry,16,58);c.fillStyle='#5a3a1e';c.fillRect(rx-3,ry-6,22,8);c.fillStyle='#c8a26a';c.fillRect(rx-3,ry-6,22,2)}
 return true;
}
function paintRuin(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L),x1=Math.min(s.x+s.w,R),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();
 const bh=44;for(let y=s.y;y<bottom;y+=bh){const row=((y-s.y)/bh)|0,off=row%2?36:0;for(let x=s.x-off;x<x1;x+=72){if(x+72<x0)continue;const k=((x*7+y*13)>>4)%4;
  const g=c.createLinearGradient(0,y,0,y+bh);g.addColorStop(0,['#9b9a86','#8f8d78','#a5a18a','#86846f'][k]);g.addColorStop(1,['#6e6c5c','#646250','#77735f','#5d5b4a'][k]);c.fillStyle=g;c.fillRect(x+1,y+1,70,bh-2);
  c.fillStyle='rgba(255,255,240,.18)';c.fillRect(x+1,y+1,70,3);c.fillStyle='rgba(0,0,0,.28)';c.fillRect(x+1,y+bh-5,70,4);
  if((k+row)%7===0){c.fillStyle='rgba(60,95,45,.55)';c.fillRect(x+6,y+2,26,5)}}}
 const dk=c.createLinearGradient(0,s.y+30,0,s.y+300);dk.addColorStop(0,'rgba(0,0,0,0)');dk.addColorStop(1,'rgba(10,15,12,.65)');c.fillStyle=dk;c.fillRect(x0,s.y+30,x1-x0,bottom-s.y-30);
 // mossy grass cap
 for(let x=Math.floor(x0/12)*12;x<x1;x+=12){const h=6+((x*31)%9);c.fillStyle=(x/12)%3?'#5f9b3c':'#7cb84a';c.fillRect(x,s.y-2,12,h);c.fillStyle='#3f6e2a';c.fillRect(x,s.y+h-2,12,3);if((x/12)%5===0){c.fillStyle='#8fd05a';c.fillRect(x+4,s.y-8,3,8)}}
 c.restore();
 return true;
}
function drawPlank(run,c,b){const shake=b.state==='shake'?(Math.random()-.5)*4:0,x=b.x+shake,y=b.y;
 c.strokeStyle='#8a6a3e';c.lineWidth=3;c.beginPath();c.moveTo(b.x,y-40);c.lineTo(b.x+b.w,y-40);c.stroke();
 for(let k=0;k<3;k++){const px=x+k*33+1;const g=c.createLinearGradient(0,y,0,y+18);g.addColorStop(0,b.state==='shake'?'#c49a6a':'#a8743f');g.addColorStop(1,'#5c381c');c.fillStyle=g;c.fillRect(px,y+(k===1&&b.state==='shake'?2:0),31,18);c.fillStyle='#3a220f';c.fillRect(px+31,y,1,18)}
 c.strokeStyle='#6a4e2a';c.lineWidth=2;c.beginPath();c.moveTo(b.x,y+9);c.lineTo(b.x+b.w,y+9);c.stroke();return true}
function drawMover(run,c,m){const x=m.x,y=m.y;
 if(m.axis==='y'){c.strokeStyle='#8a6a3e';c.lineWidth=3;for(const rx of [x+10,x+m.w-10]){c.beginPath();c.moveTo(rx,m.range[0]-160);c.lineTo(rx,y);c.stroke()}c.fillStyle='#5a3a1e';c.fillRect(x-10,m.range[0]-170,m.w+20,14)}
 const g=c.createLinearGradient(0,y,0,y+22);g.addColorStop(0,'#c08e5c');g.addColorStop(1,'#5c381c');c.fillStyle=g;c.fillRect(x,y,m.w,22);c.fillStyle='#3a220f';for(let k=1;k<4;k++)c.fillRect(x+k*m.w/4,y,2,22);
 c.fillStyle='#8a8f96';c.fillRect(x+4,y+4,6,6);c.fillRect(x+m.w-10,y+4,6,6);return true}

/* ---------------- spikes (metal cones on wooden beds; trap spikes rise on a timer) */
function drawSpikes(run,c,sp){const t=run.time;let rise=1,warn=false;
 if(sp.kind==='trap'){const ph=(run.spikeT+sp.offset)%sp.cycle;rise=ph<sp.up?Math.min(1,ph/.08):0;warn=ph>sp.cycle-sp.warn}
 c.fillStyle='#4a2c16';c.fillRect(sp.x-4,sp.y-8,sp.w+8,10);c.fillStyle='#2a180a';c.fillRect(sp.x-4,sp.y,sp.w+8,3);
 if(warn){c.fillStyle='rgba(255,80,40,'+(.35+.3*Math.sin(t*28))+')';c.fillRect(sp.x,sp.y-10,sp.w,4)}
 if(rise<=0)return;const n=Math.round(sp.w/24),hgt=46*rise;
 // on the Ruins stone stretches the cones are the Ruins tileset's stone spikes (same count, height and hit area)
 const art=run.env?.sets.find(s=>s.name==='ruins'&&s.ranges.some(([a,b])=>sp.x>=a&&sp.x+sp.w<=b))?.items.spikes;
 if(art){const cw=art.cv.width/4,base=sp.y-6;c.save();c.beginPath();c.rect(sp.x-6,base-60,sp.w+12,60);c.clip();
  for(let i=0;i<n;i++)c.drawImage(art.cv,(i%4)*cw,0,cw,art.cv.height,sp.x+i*24,base-hgt,24,48);c.restore();return}
 for(let i=0;i<n;i++){const cx=sp.x+12+i*24,base=sp.y-8;const g=c.createLinearGradient(cx-10,0,cx+10,0);g.addColorStop(0,'#5c6670');g.addColorStop(.45,'#e6edf3');g.addColorStop(1,'#4a525c');c.fillStyle=g;c.beginPath();c.moveTo(cx-10,base);c.lineTo(cx,base-hgt);c.lineTo(cx+10,base);c.closePath();c.fill();c.strokeStyle='#2b3038';c.lineWidth=1.2;c.stroke();c.fillStyle='#7a3a2a';c.fillRect(cx-11,base-3,22,3)}}

function drawBarrel(c,x,y){const w=40,h=50;c.save();c.translate(x-w/2,y-h);const g=c.createLinearGradient(0,0,w,0);g.addColorStop(0,'#5a3418');g.addColorStop(.4,'#a8703c');g.addColorStop(1,'#4a2a12');c.fillStyle=g;c.beginPath();c.moveTo(4,0);c.quadraticCurveTo(-3,h/2,4,h);c.lineTo(w-4,h);c.quadraticCurveTo(w+3,h/2,w-4,0);c.closePath();c.fill();
 c.fillStyle='#3a3f46';for(const yy of [7,h-11])c.fillRect(0,yy,w,5);c.fillStyle='rgba(255,255,255,.25)';c.fillRect(8,9,10,2);c.strokeStyle='rgba(30,15,5,.6)';for(let k=1;k<5;k++){c.beginPath();c.moveTo(k*w/5,2);c.lineTo(k*w/5,h-2);c.stroke()}c.restore()}
function drawBanner(c,x,y,t){const w=56,h=120,top=y-230;c.save();c.fillStyle='#4a2c16';c.fillRect(x-36,top-6,72,8);c.fillStyle='#c8a26a';c.fillRect(x-36,top-6,72,2);
 c.beginPath();c.moveTo(x-w/2,top);c.lineTo(x+w/2,top);const sw=Math.sin(t*1.6+x)*4;c.lineTo(x+w/2+sw,top+h);c.lineTo(x+sw,top+h-16);c.lineTo(x-w/2+sw,top+h);c.closePath();const g=c.createLinearGradient(x-w/2,0,x+w/2,0);g.addColorStop(0,'#2a1414');g.addColorStop(.5,'#4a1e1e');g.addColorStop(1,'#241010');c.fillStyle=g;c.fill();
 c.fillStyle='#c9b48a';c.beginPath();c.ellipse(x+sw*.4,top+44,13,12,0,0,TAU);c.fill();c.fillRect(x-8+sw*.4,top+50,16,10);c.fillStyle='#2a1414';c.beginPath();c.ellipse(x-5+sw*.4,top+44,3.5,4,0,0,TAU);c.ellipse(x+5+sw*.4,top+44,3.5,4,0,0,TAU);c.fill();
 c.strokeStyle='#c9b48a';c.lineWidth=4;c.beginPath();c.moveTo(x-16,top+66);c.lineTo(x+16,top+86);c.moveTo(x+16,top+66);c.lineTo(x-16,top+86);c.stroke();c.restore()}

/* ---------------- environment art (asset integration): illustrated ground and path props on Level 2's stretches.
 * Two sets give the level two grounds: Market earth for the Ruin Heights path, Medieval Ruins mossy stone for the
 * ruins (falls crossing and the Ruins Gate). Rendering only — solids, ledges, spikes, checkpoints and enemies are
 * untouched. Atlases are built by tools/env_atlas.py from the original archives (graded, resampled), load lazily with
 * this level, and the painted fallback (paintRuin / drawBarrel) draws when they are missing or off (?envPilot=0). */
const ENV_SETS={
 market:{atlas:A2+'env-market',styles:['ruin'],ranges:[[5560,6600]],tops:['top_stone','top_grass_a','top_stone','top_grass_b','top_grass_c','top_stone','top_grass_b'],
  depth:['rgba(24,16,10,.3)','rgba(30,40,44,.62)'],stones:['rock_a','rock_b'],
  props:[['sign',5598],['barrel',5650],['bucket',5684],['fence_a',5740],['fence_b',5826],['grass_a',5770],['rock_b',5904],
   ['rock_a',6252],['grass_b',6262],['lantern',6326],['crate',6476],['crate',6530],['crate',6503,-58],['grass_a',6566]],glow:{lantern:[-.32,.3,46]}},
 ruins:{atlas:A2+'env-ruins',styles:['ruin'],ranges:[[2900,4200],[7700,9700]],tops:['top'],
  depth:['rgba(14,18,12,.2)','rgba(26,36,40,.5)'],stones:['rock_a','rock_b'],
  props:[['sign',2948],['grass_a',3290],['rock_a',3420],['relief',3700],['grass_b',3880],
   ['ruin_a',7800],['grass_a',7960],['sign_skull',8060],['statue',8380],['wall',8560],['rock_a',8740],['ruin_b',9040],['grass_b',9170],['wall',9600]],glow:{statue:[0,.32,46]}}};
const ENV=window.PirateEnvArt;
const def={
 id:2,base:BASE,config:BASE+'level-02.json',
 images:[A2+'plate-ruins.webp',A2+'pirate-sword.png',A2+'pirate-gun.png'],
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 initialState:()=>({ambush:false,gateOpen:false}),
 async prepare(run){
  run.pirateSkins={};for(const [k,v] of Object.entries(SKINS)){const img=run.images[A2+v.img];if(img)run.pirateSkins[k]={...v,img,white:whiteOf(img)}}
  run.plate=run.images[A2+'plate-ruins.webp'];
  const fog=document.createElement('canvas');fog.width=512;fog.height=160;const f=fog.getContext('2d');for(let i=0;i<30;i++){const gx=(i*97)%512,gy=60+(i*53)%70,r=50+(i*31)%60;const gr=f.createRadialGradient(gx,gy,0,gx,gy,r);gr.addColorStop(0,'rgba(235,245,240,.32)');gr.addColorStop(1,'rgba(235,245,240,0)');f.fillStyle=gr;f.fillRect(gx-r,gy-r,r*2,r*2)}run.mist=fog;
  await loadRig(run,'level02');
  run.env=await ENV?.load(run,ENV_SETS);
 },
 setup(run){run.spikeT=0;run.banner={t:4.5,text:text(run.lang,'title')};run.gate=run.state.gateOpen?0:1;run.motes=Array.from({length:30},(_,i)=>({x:(i*173)%E.W,y:(i*97)%H,s:.3+(i%5)*.15}))},
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hintQueue=resumed?[]:['hint1','hint2','hint3'];run.hintT=5},
 music(run){run.audio.playMusic(run.state.ambush&&!run.state.gateOpen?'guardian':'jungle',1.4)},
 zone(run){const x=run.p.x;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones.at(-1)},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 objectiveHud(run){const z=def.zone(run).id,s=run.state;if(z==='gate')return s.gateOpen?text(run.lang,'objExit'):text(run.lang,'objGate');return text(run.lang,{jungle:'objJungle',bridges:'objBridges',heights:'objHeights'}[z])},
 dynamicSolids(run){const a=run.cfg.arena;return run.gate>.05?[{x:a.gateX,y:700-260*run.gate,w:36,h:260*run.gate,style:'gate'}]:[]},
 arenaFoes(run){return run.enemies.filter(e=>!e.dead&&run.cfg.enemies.find(c=>c.id===e.id).x>=run.cfg.arena.from)},
 update(run,dt){
  const s=run.state,p=run.p,a=run.cfg.arena;run.spikeT+=dt;run.banner.t=Math.max(0,run.banner.t-dt);
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:3.6,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=6}}
  if(!s.ambush&&p.x>a.from+120&&!p.dead){s.ambush=true;run.banner={t:2.6,text:text(run.lang,'ambush')};run.audio.play('gateSlam',{vol:.9});run.camera.shake=6;run.audio.playMusic('guardian',1)}
  if(s.ambush&&!s.gateOpen&&def.arenaFoes(run).length===0){s.gateOpen=true;run.banner={t:3,text:text(run.lang,'gateOpen')};run.audio.play('gateOpen',{vol:1});run.audio.playMusic('jungle',1.6);run.save()}
  const target=s.gateOpen?0:1;run.gate+=(target-run.gate)*Math.min(1,dt*(target?6:1.5));
  if(s.gateOpen&&run.gate<.1&&p.x+p.w/2>a.exitX&&!p.dead&&run.phase==='play')run.complete({secrets:run.opened.has('c2')?1:0,secretTotal:1});
 },
 heroHazards(run){const p=run.p;for(const sp of run.cfg.spikes){let up=true;if(sp.kind==='trap'){const ph=(run.spikeT+sp.offset)%sp.cycle;up=ph<sp.up;if(Math.abs(ph)<1/60&&Math.abs(p.x-sp.x)<700)run.audio.at('spikes',sp.x+sp.w/2,{vol:.8})}
  if(up&&!p.dead&&overlap({x:p.x+4,y:p.y,w:p.w-8,h:p.h},{x:sp.x+4,y:sp.y-40,w:sp.w-8,h:40})){if(run.hurtPlayer(sp.kind==='trap'?18:20,0,null,0)){p.vy=-430;run.fx.spark(p.x+p.w/2,sp.y-20,'#e6edf3',8)}}}},
 onRespawn(run){const s=run.state;if(!s.gateOpen&&s.ambush){s.ambush=false;run.audio.playMusic('jungle',1)}},
 ambience(run){if(!run.audio.ctx)return;const p=run.p;run.audio.loop('wind',.35);let wv=0;for(const [x] of run.cfg.decor.falls)wv=Math.max(wv,clamp(1-Math.abs(p.x-x)/900,0,1));run.audio.loop('water',wv*.8)},
 paintSolid(run,c,s,L,R,T,B){const set=ENV?.setFor(run.env,s);if(set)return ENV.paintTiles(run,c,s,set,L,R,T,B);if(s.style==='deck')return paintDeck(run,c,s,L,R,T,B);if(s.style==='ruin')return paintRuin(run,c,s,L,R,T,B);if(s.style==='gate')return false;return false},
 paintLedge(run,c,l){// wooden scaffold platform on posts
  const g=c.createLinearGradient(0,l.y,0,l.y+22);g.addColorStop(0,'#c08e5c');g.addColorStop(.3,'#9a6436');g.addColorStop(1,'#5c381c');c.fillStyle=g;c.fillRect(l.x,l.y,l.w,22);c.fillStyle='rgba(255,230,180,.3)';c.fillRect(l.x,l.y,l.w,2);c.fillStyle='#3a220f';for(let x=l.x+34;x<l.x+l.w;x+=34)c.fillRect(x,l.y,1.5,22);
  const leg=Math.min(220,(run.solids.find(s=>l.x+l.w>s.x&&l.x<s.x+s.w&&s.y>l.y)?.y??l.y+200)-l.y);for(const px of [l.x+10,l.x+l.w-26]){const pg=c.createLinearGradient(px,0,px+16,0);pg.addColorStop(0,'#6b4426');pg.addColorStop(.5,'#8f5d34');pg.addColorStop(1,'#4a2c16');c.fillStyle=pg;c.fillRect(px,l.y+20,16,leg-20)}
  c.strokeStyle='#5a381e';c.lineWidth=5;c.beginPath();c.moveTo(l.x+26,l.y+24);c.lineTo(l.x+l.w-26,l.y+Math.min(leg,90));c.stroke();return true},
 drawCrumble:(run,c,b)=>drawPlank(run,c,b),drawMover:(run,c,m)=>drawMover(run,c,m),drawEnemy:(run,c,e)=>drawPirate(run,c,e),
 drawBackground(run,c){
  const cam=run.camera,sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#5d9fd8');sky.addColorStop(1,'#bfe0ef');c.fillStyle=sky;c.fillRect(0,0,E.W,H);
  const im=run.plate;if(im){const sc=1.0,pw=im.width*sc,ph=im.height*sc,groundScreen=700-cam.y,py=Math.round(groundScreen-ph+70+(cam.y-300)*.12),ox=-((cam.x*.32)%(pw*2));
   for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>E.W||x+pw<0)continue;c.save();if(k%2){c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph)}else c.drawImage(im,x,py,pw,ph);c.restore()}
   const top=c.createLinearGradient(0,py,0,py+90);top.addColorStop(0,'rgba(93,159,216,1)');top.addColorStop(1,'rgba(93,159,216,0)');c.fillStyle=top;c.fillRect(0,py,E.W,90);
   const haze=c.createLinearGradient(0,py+ph*.55,0,py+ph);haze.addColorStop(0,'rgba(190,225,230,0)');haze.addColorStop(1,'rgba(170,215,225,.55)');c.fillStyle=haze;c.fillRect(0,py+ph*.55,E.W,ph*.45+400)}
  c.fillStyle='rgba(255,236,190,.06)';c.fillRect(0,0,E.W,H);
 },
 drawBack(run,c){
  const cam=run.camera,d=run.cfg.decor,t=run.time;
  // waterfalls pouring into the chasms below the bridges
  for(const [x,bottom] of d.falls){if(x<cam.x-150||x>cam.x+E.W+150)continue;const top=cam.y-20,w=70;
   const g=c.createLinearGradient(x-w/2,0,x+w/2,0);g.addColorStop(0,'rgba(120,180,200,.55)');g.addColorStop(.3,'rgba(235,250,255,.9)');g.addColorStop(.7,'rgba(170,220,235,.85)');g.addColorStop(1,'rgba(110,170,190,.5)');c.fillStyle=g;c.fillRect(x-w/2,top,w,bottom-top);
   c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=2;for(let i=0;i<7;i++){const sx=x-w/2+5+i*(w-10)/6,off=(t*300+i*53)%110;c.beginPath();for(let y=top-110+off;y<bottom;y+=110){c.moveTo(sx,Math.max(top,y));c.lineTo(sx+Math.sin(y*.05+i)*2,Math.min(bottom,y+55))}c.stroke()}
   run.fx.glow(c,x,760,90,'rgba(230,250,255,',.5)}
  // mist rolling through the chasms
  if(run.mist){c.save();c.globalAlpha=.8;const off=-((t*14)%512);for(let x=Math.floor(cam.x/512)*512+off;x<cam.x+E.W+512;x+=512)c.drawImage(run.mist,x,690,512,180);c.restore()}
  for(const [x,y] of d.banners){if(x<cam.x-100||x>cam.x+E.W+100)continue;drawBanner(c,x,y,t)}
  for(const [x,y] of d.ferns){if(x<cam.x-120||x>cam.x+E.W+120)continue;const r=run.envMeta.props['fern'+(Math.abs(Math.round(x/53))%3)];run.blit(c,run.images['props.png'],r,x-r[2],y-r[3]*2+6,r[2]*2,r[3]*2)}
 },
 drawMid(run,c){
  const cam=run.camera,d=run.cfg.decor,a=run.cfg.arena;
  for(const sp of run.cfg.spikes)if(sp.x<cam.x+E.W+50&&sp.x+sp.w>cam.x-50)drawSpikes(run,c,sp);
  for(const [x,y] of d.torches){if(x<cam.x-80||x>cam.x+E.W+80)continue;const g=c.createLinearGradient(x-8,0,x+8,0);g.addColorStop(0,'#5a361a');g.addColorStop(.5,'#946038');g.addColorStop(1,'#4a2a12');c.fillStyle=g;c.fillRect(x-8,y-120,16,120);c.fillStyle='#3a3f46';c.fillRect(x-14,y-128,28,10);c.fillStyle='#6b4a2a';c.fillRect(x-11,y-136,22,10);run.fire(c,x,y-134,1.15,true)}
  for(const [x,y] of d.barrels){if(x<cam.x-60||x>cam.x+E.W+60||ENV?.setFor(run.env,{x,w:0,style:'ruin'})?.name==='market')continue;drawBarrel(c,x,y)}
  if(run.env)ENV.drawProps(run,c,run.env);
  // ruins gate (closes during the ambush)
  if(a.gateX>cam.x-300&&a.gateX<cam.x+E.W+300){const gx=a.gateX;c.save();c.fillStyle='#7d7b68';c.fillRect(gx-60,700-330,40,330);c.fillRect(gx+56,700-330,40,330);c.fillStyle='#8f8d78';c.fillRect(gx-70,700-360,176,40);c.fillStyle='#6a6856';c.fillRect(gx-70,700-326,176,6);
   c.fillStyle='#c9b48a';c.beginPath();c.ellipse(gx+18,700-340,14,13,0,0,TAU);c.fill();c.fillStyle='#2a1414';c.fillRect(gx+10,700-344,5,5);c.fillRect(gx+21,700-344,5,5);
   const h=260*run.gate;if(h>2){c.fillStyle='#3e3a33';c.fillRect(gx,700-h,36,h);c.fillStyle='#8a8f96';for(let yy=700-h+10;yy<700;yy+=24)c.fillRect(gx,yy,36,4);for(let xx=gx+4;xx<gx+36;xx+=10)c.fillRect(xx,700-h,3,h)}
   if(run.state.gateOpen)run.fx.glow(c,gx+18,600,120,'rgba(255,230,160,',.45);c.restore()}
 },
 drawFront(run,c){},
 drawLighting(run,c){
  const cam=run.camera;
  if(!run.fx.reduced){c.save();c.globalCompositeOperation='lighter';for(let i=0;i<3;i++){const x=((i*420-cam.x*.15)%(E.W+400)+E.W+400)%(E.W+400)-200,sway=Math.sin(run.time*.4+i)*20;c.fillStyle='rgba(255,240,200,.05)';c.beginPath();c.moveTo(x+sway,0);c.lineTo(x+90+sway,0);c.lineTo(x+260,H);c.lineTo(x+120,H);c.closePath();c.fill()}c.restore();
   c.fillStyle='rgba(255,250,220,.45)';for(const m of run.motes){const x=((m.x-cam.x*m.s*.3+run.time*10*m.s)%E.W+E.W)%E.W,y=((m.y+Math.sin(run.time*.7+m.x)*14-cam.y*m.s*.2)%H+H)%H;c.fillRect(x,y,2,2)}}
  const v=c.createRadialGradient(E.W/2,H/2,H*.45,E.W/2,H/2,H);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(20,10,0,.28)');c.fillStyle=v;c.fillRect(0,0,E.W,H);
  if(run.phase==='complete'&&run.celebrate>0){for(let i=0;i<4;i++)run.fx.cap(run.fx.parts,{x:cam.x+Math.random()*E.W,y:cam.y-10,vx:(Math.random()-.5)*60,vy:60+Math.random()*80,g:120,life:2,max:2,size:4,color:['#ffd36b','#7dfbe0','#ff7d6b','#ffffff'][i]},160)}
 },
 drawHud(run,c){
  if(run.banner.t>0){const k=Math.min(1,run.banner.t,4.5-run.banner.t+.001);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=run.banner.small?150:190;c.fillStyle='rgba(40,24,10,.82)';c.beginPath();c.roundRect(E.W/2-300,y-34,600,run.banner.small?44:58,14);c.fill();c.strokeStyle='#d9b56c';c.lineWidth=2;c.stroke();c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';c.fillStyle='#ffe3a6';c.fillText(run.banner.text,E.W/2,y+(run.banner.small?-5:6));c.restore()}
 }
};
E.register(def);
window.PirateLevel02={def,text,launch:opts=>E.launch(2,opts)};
})();
