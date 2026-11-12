/* Pirate Strike — the ending after Level 10 (the Admiral is the last boss).
 * A short animated finale drawn on a canvas from the game's own art (story ships, harbour portraits):
 *   1. night: the Admiral's black warship burns and sinks;   2. dawn: Mari's ship sails into the sunrise;
 *   3. the crew together;   4. credits and the Endless Sea teaser.
 * ~28 s, skippable at any time (SKIP / Esc / back). Plays once after the first Level 10 clear (pf-ending-seen);
 * the world map can replay it. No video files: everything is drawn live. */
(()=>{'use strict';if(window.PirateEnding)return;
const SEEN='pf-ending-seen',S='story/assets/',P='harbor/assets/portraits/';
const E='adventure/levels/assets/ending/';   // painted backdrops (Higgsfield, see ASSET_MANIFEST)
const IMG={night:E+'night.webp',dawn:E+'dawn.webp',harbour:E+'harbour.webp',ship:S+'ship-base.webp',sails:S+'ship-sails.webp',fore:S+'ship-foretop.webp',main:S+'ship-maintop.webp',enemy:S+'enemy-base.webp',enemySails:S+'enemy-sails.webp',
 flag0:S+'flag-0.webp',flag1:S+'flag-1.webp',flag2:S+'flag-2.webp',flag3:S+'flag-3.webp',scarlet:P+'scarlet.webp',sailor:P+'sailor.webp',captain:P+'captain.webp',shark:P+'shark.webp',crab:P+'crab.webp'};
const T={
en:{skip:'SKIP',go:'CONTINUE',a1:'The Admiral\'s flagship goes down…',a2:'The seas are free again',a3:'Mari and her crew',a4:'Thank you for playing!',teaser:'⚓ ENDLESS SEA UNLOCKED',teaser2:'New islands and crews every voyage — how far can you sail?',made:'A game by Dergah Aztech',art:'Art and models: original art made for this game · Quaternius (CC0) · Kenney (CC0) · CraftPix · Pixel Frog (CC0)',music:'Engine: GDevelop template + Pirate Strike level engine'},
az:{skip:'KEÇ',go:'DAVAM ET',a1:'Admiralın flaqman gəmisi batır…',a2:'Dənizlər yenidən azaddır',a3:'Mari və heyəti',a4:'Oynadığın üçün təşəkkürlər!',teaser:'⚓ SONSUZ DƏNİZ AÇILDI',teaser2:'Hər səfərdə yeni adalar və yeni düşmənlər — nə qədər uzağa gedə bilərsən?',made:'Dergah Aztech oyunu',art:'Rəsm və modellər: oyun üçün çəkilmiş orijinal rəsmlər · Quaternius (CC0) · Kenney (CC0) · CraftPix · Pixel Frog (CC0)',music:'Mühərrik: GDevelop şablonu + Pirate Strike səviyyə mühərriki'},
tr:{skip:'GEÇ',go:'DEVAM',a1:'Amiralin amiral gemisi batıyor…',a2:'Denizler yeniden özgür',a3:'Mari ve tayfası',a4:'Oynadığın için teşekkürler!',teaser:'⚓ SONSUZ DENİZ AÇILDI',teaser2:'Her seferde yeni adalar ve tayfalar — ne kadar uzağa gidebilirsin?',made:'Bir Dergah Aztech oyunu',art:'Çizim ve modeller: oyun için yapılmış özgün çizimler · Quaternius (CC0) · Kenney (CC0) · CraftPix · Pixel Frog (CC0)',music:'Motor: GDevelop şablonu + Pirate Strike bölüm motoru'},
ru:{skip:'ПРОПУСТИТЬ',go:'ДАЛЕЕ',a1:'Флагман Адмирала идёт ко дну…',a2:'Моря снова свободны',a3:'Мари и её команда',a4:'Спасибо за игру!',teaser:'⚓ ОТКРЫТО БЕСКРАЙНЕЕ МОРЕ',teaser2:'Новые острова и команды в каждом походе — как далеко вы доплывёте?',made:'Игра Dergah Aztech',art:'Графика и модели: оригинальная графика для игры · Quaternius (CC0) · Kenney (CC0) · CraftPix · Pixel Frog (CC0)',music:'Движок: шаблон GDevelop + движок уровней Pirate Strike'},
pl:{skip:'POMIŃ',go:'DALEJ',a1:'Okręt flagowy Admirała idzie na dno…',a2:'Morza znów są wolne',a3:'Mari i jej załoga',a4:'Dziękujemy za grę!',teaser:'⚓ ODBLOKOWANO BEZKRESNE MORZE',teaser2:'Nowe wyspy i załogi w każdym rejsie — jak daleko dopłyniesz?',made:'Gra Dergah Aztech',art:'Grafika i modele: oryginalna grafika do gry · Quaternius (CC0) · Kenney (CC0) · CraftPix · Pixel Frog (CC0)',music:'Silnik: szablon GDevelop + silnik poziomów Pirate Strike'}};
const NAMES={en:{scarlet:'Mari',sailor:'Sailor',captain:'Captain',shark:'Shark',crab:'Crab'},az:{scarlet:'Mari',sailor:'Dənizçi',captain:'Kapitan',shark:'Köpəkbalığı',crab:'Yengəc'},
 tr:{scarlet:'Mari',sailor:'Denizci',captain:'Kaptan',shark:'Köpekbalığı',crab:'Yengeç'},ru:{scarlet:'Mari',sailor:'Матрос',captain:'Капитан',shark:'Акула',crab:'Краб'},pl:{scarlet:'Mari',sailor:'Marynarz',captain:'Kapitan',shark:'Rekin',crab:'Krab'}};
const DUR=28,CSS=`#pirate-ending{position:fixed;inset:0;z-index:2147483000;background:#000;display:flex;align-items:center;justify-content:center;touch-action:none}
#pirate-ending canvas{width:100%;height:100%;object-fit:contain;display:block}
#pirate-ending button{position:absolute;font:800 16px Georgia,serif;letter-spacing:.06em;color:#2a1a08;background:linear-gradient(#ffe6a6,#d9a948);border:2px solid #7a4e1c;border-radius:12px;padding:10px 18px;cursor:pointer;box-shadow:0 4px 0 #6a3f12}
#pirate-ending .skip{top:max(14px,env(safe-area-inset-top));right:max(16px,env(safe-area-inset-right));opacity:.85}
#pirate-ending .go{bottom:max(22px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);font-size:20px;padding:12px 28px}`;
const ease=t=>t<0?0:t>1?1:t*t*(3-2*t),seg=(t,a,b)=>ease((t-a)/(b-a));
let images=null;
function load(){if(images)return images;images=Promise.all(Object.entries(IMG).map(([k,src])=>new Promise(ok=>{const im=new Image();im.onload=()=>ok([k,im]);im.onerror=()=>ok([k,null]);im.src=src}))).then(Object.fromEntries);return images}
function seen(){try{return localStorage.getItem(SEEN)==='1'}catch{return false}}

function drawSea(c,W,H,t,sky,sea,horizon){
 const g=c.createLinearGradient(0,0,0,horizon);sky.forEach((col,i)=>g.addColorStop(i/(sky.length-1),col));c.fillStyle=g;c.fillRect(0,0,W,horizon+2);
 const s=c.createLinearGradient(0,horizon,0,H);s.addColorStop(0,sea[0]);s.addColorStop(1,sea[1]);c.fillStyle=s;c.fillRect(0,horizon,W,H-horizon);
 c.strokeStyle='rgba(255,255,255,.13)';c.lineWidth=2;for(let i=0;i<14;i++){const y=horizon+12+i*i*3.2,off=(t*(20+i*6)+i*97)%120;c.beginPath();for(let x=-120+off;x<W+120;x+=120){c.moveTo(x,y);c.quadraticCurveTo(x+30,y-4-i*.3,x+60,y)}c.stroke()}}
/* a painted backdrop with a slow push-in; returns false when the painting is missing (the drawn sky and sea take over) */
function paint(c,W,H,img,k){if(!img)return false;const z=1.04+.05*k,w=W*z,h=H*z;c.drawImage(img,(W-w)/2,(H-h)*.7,w,h);return true}
function ship(c,im,layers,x,y,s,rock,flag,flip){c.save();c.translate(x,y);c.rotate(rock);if(flip)c.scale(-1,1);const w=619*s,h=500*s;for(const L of layers)if(im[L])c.drawImage(im[L],-w/2,-h,w,h);if(flag&&im[flag])c.drawImage(im[flag],-w*.03,-h*1.0,46*s*1.6,43*s*1.6);c.restore()}

function frame(c,W,H,t,im,tx,hero){
 c.clearRect(0,0,W,H);const hz=H*.62;
 if(t<7.5){// 1. night battle aftermath: the Admiral's ship burns and sinks
  if(!paint(c,W,H,im.night,t/7.5)){drawSea(c,W,H,t,['#05070f','#121a33','#3a1c1c'],['#0c1424','#03060c'],hz);
  for(let i=0;i<40;i++){const x=(i*233)%W,y=(i*71)%(hz*.7);c.fillStyle='rgba(255,255,255,'+(.3+.3*Math.sin(t*2+i))+')';c.fillRect(x,y,2,2)}}
  const sink=seg(t,1.5,7.2),x=W*.58,y=hz+40+sink*220,rock=.05+sink*.35;
  c.save();c.beginPath();c.rect(0,0,W,hz+44);c.clip();ship(c,im,['enemy','enemySails'],x,y,.95,rock,null,true);c.restore();
  c.save();c.globalCompositeOperation='lighter';
  for(let i=0;i<34;i++){const k=(t*1.1+i*.173)%1,base=x-170+((i*61)%330),fx=base+Math.sin(t*3+i)*10*k,fy=y-150-((i*43)%90)-k*230,r=10+(1-k)*26,a=(1-k)*(1-sink*.7);
   const g=c.createRadialGradient(fx,fy,0,fx,fy,r);g.addColorStop(0,`rgba(255,230,150,${.55*a})`);g.addColorStop(.45,`rgba(255,${110+((i*37)%70)},30,${.38*a})`);g.addColorStop(1,'rgba(120,20,0,0)');c.fillStyle=g;c.fillRect(fx-r,fy-r,r*2,r*2)}
  c.restore();
  for(let i=0;i<10;i++){const k=(t*.35+i*.1)%1,sx=x-120+((i*71)%240)+k*60,sy=y-260-k*300,r=30+k*60;c.fillStyle=`rgba(30,26,30,${.45*(1-k)})`;c.beginPath();c.arc(sx,sy,r,0,Math.PI*2);c.fill()}
  const glow=c.createRadialGradient(x,hz,10,x,hz,360);glow.addColorStop(0,'rgba(255,120,40,'+(.45*(1-sink))+')');glow.addColorStop(1,'rgba(255,120,40,0)');c.fillStyle=glow;c.fillRect(0,0,W,H);
  ship(c,im,['ship','sails','fore','main'],W*.2,hz+70,.62,Math.sin(t*1.2)*.02,'flag'+(Math.floor(t*8)%4),false);
  caption(c,W,H,tx.a1,seg(t,.6,1.6)*(1-seg(t,6.6,7.4)))}
 else if(t<15){// 2. dawn: Mari's ship sails into the sunrise
  const k=(t-7.5)/7.5;if(!paint(c,W,H,im.dawn,k)){drawSea(c,W,H,t,['#2b3a6b','#c86a5a','#ffcf86'],['#2f5a7a','#0f2436'],hz);
  const sx=W*.5,sy=hz-30+(1-seg(k,0,.8))*80;const sun=c.createRadialGradient(sx,sy,10,sx,sy,260);sun.addColorStop(0,'rgba(255,240,190,1)');sun.addColorStop(.25,'rgba(255,200,120,.8)');sun.addColorStop(1,'rgba(255,170,90,0)');c.fillStyle=sun;c.fillRect(0,0,W,hz);
  c.fillStyle='rgba(255,226,160,.35)';for(let i=0;i<12;i++){const y=hz+8+i*i*3;c.fillRect(sx-60+i*4-((t*30+i*13)%20),y,120-i*8,3)}}
  const x=W*(.05+.6*ease(k)),s=.82-.32*ease(k);ship(c,im,['ship','sails','fore','main'],x,hz+80-30*ease(k),s,Math.sin(t*1.4)*.025,'flag'+(Math.floor(t*8)%4),false);
  if(!im.dawn)for(let i=0;i<3;i++){const gx=(W*.2+i*W*.25+t*40)%W,gy=hz*.3+i*30+Math.sin(t*2+i)*8;c.strokeStyle='#2a1a14';c.lineWidth=2;c.beginPath();c.moveTo(gx-10,gy);c.quadraticCurveTo(gx-5,gy-6,gx,gy);c.quadraticCurveTo(gx+5,gy-6,gx+10,gy);c.stroke()}
  caption(c,W,H,tx.a2,seg(t,8,9)*(1-seg(t,14.2,15)))}
 else if(t<21.5){// 3. the crew
  const k=t-15;if(paint(c,W,H,im.harbour,k/6.5)){c.fillStyle='rgba(20,12,4,.22)';c.fillRect(0,0,W,H)}else{drawSea(c,W,H,t,['#3d5d9a','#8fb7d8','#ffe6b0'],['#2f6a8a','#123448'],hz);
  c.fillStyle='rgba(20,12,4,.35)';c.fillRect(0,0,W,H)}
  const crew=['sailor','captain',hero==='scarlet'?'scarlet':'scarlet','shark','crab'],n=crew.length;
  crew.forEach((id,i)=>{const img=im[id];if(!img)return;const a=seg(k,.25+i*.35,.85+i*.35),hgt=id==='scarlet'?H*.62:H*.38,w=img.width*hgt/img.height,cx=W*(.14+i*.18),by=H*.86-(id==='scarlet'?0:20)+(1-a)*60;
   c.save();c.globalAlpha=a;c.drawImage(img,cx-w/2,by-hgt,w,hgt);c.font='800 22px Georgia,serif';c.textAlign='center';c.lineWidth=5;c.strokeStyle='rgba(20,10,0,.9)';c.strokeText(tx.names[id],cx,by+28);c.fillStyle='#ffe3a6';c.fillText(tx.names[id],cx,by+28);c.restore()});
  caption(c,W,H,tx.a3,seg(k,.2,1.2)*(1-seg(k,5.8,6.5)),H*.14)}
 else{// 4. credits + teaser
  const k=t-21.5;c.fillStyle='#07090f';c.fillRect(0,0,W,H);const g=c.createRadialGradient(W/2,H*.4,20,W/2,H*.4,W*.6);g.addColorStop(0,'rgba(120,80,30,.45)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,W,H);
  c.textAlign='center';const a=seg(k,0,1);c.globalAlpha=a;
  c.font='900 54px Georgia,serif';c.fillStyle='#ffd77a';c.fillText('PIRATE STRIKE',W/2,H*.2);c.font='700 24px Georgia,serif';c.fillStyle='#ffe9c0';c.fillText(tx.a4,W/2,H*.29);
  c.font='600 18px Arial,sans-serif';c.fillStyle='#d8c8a8';wrap(c,tx.made,W/2,H*.38,W*.8,24);wrap(c,tx.art,W/2,H*.44,W*.8,24);wrap(c,tx.music,W/2,H*.53,W*.8,24);
  const b=seg(k,1.6,2.6);c.globalAlpha=b;c.font='900 38px Georgia,serif';c.fillStyle='#7fe0ff';c.shadowColor='#3ab0ff';c.shadowBlur=18*(.6+.4*Math.sin(t*3));c.fillText(tx.teaser,W/2,H*.68);c.shadowBlur=0;
  c.font='600 20px Arial,sans-serif';c.fillStyle='#cfefff';wrap(c,tx.teaser2,W/2,H*.75,W*.8,26);c.globalAlpha=1}
 const fade=Math.min(seg(t,0,.8),1-seg(t,DT_END-.01,DT_END));if(fade<1){c.fillStyle='rgba(0,0,0,'+(1-fade)+')';c.fillRect(0,0,W,H)}
 for(const cut of [7.5,15,21.5]){const d=Math.abs(t-cut);if(d<.45){c.fillStyle='rgba(0,0,0,'+(1-d/.45)+')';c.fillRect(0,0,W,H)}}}
const DT_END=DUR+60;   // the last card stays until CONTINUE
function caption(c,W,H,s,a,y){if(a<=0)return;c.save();c.globalAlpha=a;c.textAlign='center';c.font='800 34px Georgia,serif';c.lineWidth=6;c.strokeStyle='rgba(10,6,0,.85)';c.strokeText(s,W/2,y||H*.86);c.fillStyle='#ffe3a6';c.fillText(s,W/2,y||H*.86);c.restore()}
function wrap(c,s,x,y,max,lh){const words=s.split(' ');let line='',yy=y;for(const w of words){const t=line?line+' '+w:w;if(c.measureText(t).width>max&&line){c.fillText(line,x,yy);line=w;yy+=lh}else line=t}if(line)c.fillText(line,x,yy)}

async function play({lang='en',hero='scarlet',onDone}={}){
 document.getElementById('pirate-ending')?.remove();
 if(!document.getElementById('pirate-ending-style')){const s=document.createElement('style');s.id='pirate-ending-style';s.textContent=CSS;document.head.append(s)}
 const tx={...(T[lang]||T.en),names:NAMES[lang]||NAMES.en},root=document.createElement('div');root.id='pirate-ending';root.setAttribute('role','dialog');root.setAttribute('aria-label','Ending');
 const cv=document.createElement('canvas');cv.width=1280;cv.height=720;const skip=document.createElement('button');skip.className='skip';skip.type='button';skip.textContent=tx.skip+' ⏭';
 root.append(cv,skip);document.body.append(root);
 try{localStorage.setItem(SEEN,'1')}catch{}
 const im=await load();const c=cv.getContext('2d');let t=0,last=0,done=false,raf=0,go=null;
 const prevBack=window.__pfBack;const music=window.PirateMusic;try{music?.want?.('ending','level5win')}catch{}
 const finish=()=>{if(done)return;done=true;cancelAnimationFrame(raf);removeEventListener('keydown',onKey,true);window.__pfBack=prevBack;try{music?.want?.('ending',null)}catch{}root.remove();onDone?.()};
 const onKey=e=>{if(e.key==='Escape'||(go&&(e.key==='Enter'||e.key===' '))){e.preventDefault();e.stopImmediatePropagation();finish()}};addEventListener('keydown',onKey,true);
 window.__pfBack=()=>{finish();return true};skip.onclick=finish;
 const step=now=>{if(done)return;const dt=last?Math.min(.1,(now-last)/1000):0;last=now;t+=dt;frame(c,cv.width,cv.height,t,im,tx,hero);
  if(t>=DUR&&!go){go=document.createElement('button');go.className='go';go.type='button';go.textContent=tx.go+' ▶';go.onclick=finish;root.append(go);skip.hidden=true}
  raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step);
 window.__pirateEnding={get t(){return t},set t(v){t=v},finish,root};
 return root}
window.PirateEnding={play,seen,shouldPlay:id=>id===10&&!seen(),duration:DUR,frame,load};
})();
