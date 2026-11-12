/* Pirate Strike — Endless Sea (opens after Level 10).
 * One run = an endless chain of short stages built in code (seeded): the road (gaps, steps, ledges, ferries,
 * breaking planks) and the enemies change from stage to stage, cycling through the ten islands' biomes, and the
 * enemies grow tougher each stage. Lives, health and gold carry over; a heart waits on every stage.
 * No save (a run starts fresh), no per-coin payout. Records: pf-endless-best {stage,score}. Gold reward: only the
 * improvement over the best paid run (PirateEconomy.earnBest), so replays cannot farm gold.
 * The enemies keep their home level's AI and approved animation (enemyAnimLevel); the few level helpers their AI
 * calls (musket, lob, harpoon…) are borrowed from the home level's definition, one biome per stage. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A=BASE+'assets/',BEST_KEY='pf-endless-best',GOLD_PER_STAGE=15;
const L={
en:{title:'Endless Sea',blurb:'Ever-changing islands, ever-stronger crews',stage:'Stage',best:'Best',score:'Score',reach:'Reach the far shore',next:'Stage clear!',over:'THE SEA WINS THIS TIME',summary:'Stage {s} · score {p}',record:'New record!',bestWas:'Best: stage {s} · score {p}',reward:'Reward: +{g} gold',retry:'NEW RUN',map:'WORLD MAP',
 lagoon:'Coral Lagoon',ghostsea:'Phantom Fog',volcano:'Fire Sea',arena:'Maelstrom',miniboss:'MINI-BOSS',bossDown:'Mini-boss defeated! +2500',locked:'Defeat the mini-boss to sail on',mod_wind:'Strong wind',mod_gold:'Gold rain',mod_night:'Moonless night',mod_swarm:'Swarm',jungle:'Jungle Coast',ruins:'Sun Ruins',cove:'Smugglers Cove',cursed:'Cursed Shrine',storm:'Storm Beach',lighthouse:'Night Lighthouse',ice:'Frozen Cliffs',fortress:'Chain Fortress',warship:'Black Warship'},
az:{title:'Sonsuz Dəniz',blurb:'Hər dəfə dəyişən adalar, getdikcə güclənən düşmənlər',stage:'Mərhələ',best:'Rekord',score:'Xal',reach:'Uzaq sahilə çat',next:'Mərhələ keçildi!',over:'BU DƏFƏ DƏNİZ QALİB GƏLDİ',summary:'Mərhələ {s} · xal {p}',record:'Yeni rekord!',bestWas:'Rekord: mərhələ {s} · xal {p}',reward:'Mükafat: +{g} qızıl',retry:'YENİ SƏFƏR',map:'DÜNYA XƏRİTƏSİ',
 lagoon:'Mərcan Laqunu',ghostsea:'Kabus Dumanı',volcano:'Od Dənizi',arena:'Burulğan',miniboss:'MİNİ-BOSS',bossDown:'Mini-boss məğlub oldu! +2500',locked:'Davam etmək üçün mini-bossu məğlub et',mod_wind:'Güclü külək',mod_gold:'Qızıl yağışı',mod_night:'Aysız gecə',mod_swarm:'Dəstə hücumu',jungle:'Cəngəllik Sahili',ruins:'Günəş Xarabalığı',cove:'Qaçaqmalçı Körfəzi',cursed:'Lənətli Məbəd',storm:'Fırtına Sahili',lighthouse:'Gecə Mayakı',ice:'Buzlu Qayalar',fortress:'Zəncir Qalası',warship:'Qara Döyüş Gəmisi'},
tr:{title:'Sonsuz Deniz',blurb:'Hep değişen adalar, giderek güçlenen tayfalar',stage:'Aşama',best:'Rekor',score:'Puan',reach:'Uzak kıyıya ulaş',next:'Aşama geçildi!',over:'BU KEZ DENİZ KAZANDI',summary:'Aşama {s} · puan {p}',record:'Yeni rekor!',bestWas:'Rekor: aşama {s} · puan {p}',reward:'Ödül: +{g} altın',retry:'YENİ SEFER',map:'DÜNYA HARİTASI',
 lagoon:'Mercan Lagünü',ghostsea:'Hayalet Sisi',volcano:'Ateş Denizi',arena:'Girdap',miniboss:'MİNİ BOSS',bossDown:'Mini boss yenildi! +2500',locked:'Devam etmek için mini bossu yen',mod_wind:'Güçlü rüzgâr',mod_gold:'Altın yağmuru',mod_night:'Aysız gece',mod_swarm:'Sürü saldırısı',jungle:'Orman Kıyısı',ruins:'Güneş Harabeleri',cove:'Kaçakçı Koyu',cursed:'Lanetli Tapınak',storm:'Fırtına Sahili',lighthouse:'Gece Feneri',ice:'Buzlu Kayalıklar',fortress:'Zincir Kalesi',warship:'Kara Savaş Gemisi'},
ru:{title:'Бескрайнее море',blurb:'Острова меняются, враги становятся сильнее',stage:'Этап',best:'Рекорд',score:'Очки',reach:'Доберитесь до дальнего берега',next:'Этап пройден!',over:'НА ЭТОТ РАЗ ПОБЕДИЛО МОРЕ',summary:'Этап {s} · очки {p}',record:'Новый рекорд!',bestWas:'Рекорд: этап {s} · очки {p}',reward:'Награда: +{g} золота',retry:'НОВЫЙ ПОХОД',map:'КАРТА МИРА',
 lagoon:'Коралловая лагуна',ghostsea:'Призрачный туман',volcano:'Огненное море',arena:'Мальстрём',miniboss:'МИНИ-БОСС',bossDown:'Мини-босс повержен! +2500',locked:'Победите мини-босса, чтобы плыть дальше',mod_wind:'Сильный ветер',mod_gold:'Золотой дождь',mod_night:'Безлунная ночь',mod_swarm:'Нашествие',jungle:'Берег джунглей',ruins:'Солнечные руины',cove:'Бухта контрабандистов',cursed:'Проклятый храм',storm:'Штормовой пляж',lighthouse:'Ночной маяк',ice:'Ледяные скалы',fortress:'Цепная крепость',warship:'Чёрный линкор'},
pl:{title:'Bezkresne Morze',blurb:'Wciąż inne wyspy, coraz silniejsze załogi',stage:'Etap',best:'Rekord',score:'Wynik',reach:'Dotrzyj na drugi brzeg',next:'Etap zaliczony!',over:'TYM RAZEM WYGRAŁO MORZE',summary:'Etap {s} · wynik {p}',record:'Nowy rekord!',bestWas:'Rekord: etap {s} · wynik {p}',reward:'Nagroda: +{g} złota',retry:'NOWY REJS',map:'MAPA ŚWIATA',
 lagoon:'Koralowa laguna',ghostsea:'Widmowa mgła',volcano:'Ogniste morze',arena:'Wir',miniboss:'MINI-BOSS',bossDown:'Mini-boss pokonany! +2500',locked:'Pokonaj mini-bossa, by płynąć dalej',mod_wind:'Silny wiatr',mod_gold:'Złoty deszcz',mod_night:'Bezksiężycowa noc',mod_swarm:'Rój',jungle:'Brzeg dżungli',ruins:'Słoneczne ruiny',cove:'Zatoka przemytników',cursed:'Przeklęta świątynia',storm:'Burzowa plaża',lighthouse:'Nocna latarnia',ice:'Lodowe klify',fortress:'Łańcuchowa twierdza',warship:'Czarny okręt'}};
const text=(lang,k,v)=>{let s=(L[lang]||L.en)[k]??L.en[k]??k;if(v)for(const [a,b] of Object.entries(v))s=s.replace('{'+a+'}',b);return s};

/* biome cycle: plate art, sky, terrain style, music, enemy pool (home level = AI helpers + animation binding) */
const AE='adventure/levels/assets/endless/';   // painted biome plates (Higgsfield, owner's account — see ASSET_MANIFEST)
const B=(id,home,plate,music,style,sky,tint,pool)=>({id,home,plate,music,style,sky,tint,pool});
const AX=BASE+'assets/endless/';   // Endless-only art and sounds (Higgsfield, see ASSET_MANIFEST)
const BIOMES=[
 B('jungle',2,A+'level-02/plate-ruins.webp','level2','ground',['#5d9fd8','#bfe0ef'],null,['pirate','gunner']),
 B('ruins',3,A+'level-03/plate-temple.webp','level3','temple',['#d49a62','#f3dcaa'],null,['skeleton','archer','shield']),
 B('lagoon',2,AX+'plate-lagoon.webp','level2','ground',['#4fa6d8','#c6ecf5'],null,['pirate','gunner','flyfish','gull']),
 B('cove',4,A+'level-04/plate-dock.webp','level4','rock',['#22344a','#6a8aa2'],null,['pirate','gunner','duelist','brute']),
 B('cursed',5,A+'level-05/plate-shrine.webp','level5','ground',['#2b2244','#86688a'],'rgba(60,20,80,.18)',['skeleton','archer','shield','ghost']),
 B('ghostsea',5,AX+'plate-ghostsea.webp','level5','stone',['#0b1f1c','#3c6a5c'],'rgba(20,60,40,.12)',['skeleton','archer','ghost','jelly']),
 B('storm',6,A+'level-06/plate-beach.webp','level6','rock',['#2c3a4a','#8696a0'],null,['storm','thunder','raider']),
 B('lighthouse',7,AE+'plate-lighthouse.webp','level7','stone',['#0e1426','#3a4868'],'rgba(10,16,44,.12)',['wrecker','tideBrute','lookout']),
 B('volcano',6,AX+'plate-volcano.webp','level6','rock',['#2a1020','#c25a32'],'rgba(80,20,0,.1)',['storm','thunder','raider','gull','flyfish']),
 B('ice',8,AE+'plate-ice.webp','level8','stone',['#7393b4','#dceaf5'],null,['skater','harpooner','revenant']),
 B('fortress',9,A+'level-03/plate-gate.webp','level9','temple',['#4a2e2a','#c98352'],'rgba(90,34,10,.18)',['shieldguard','halberdier','bombardier']),
 B('warship',10,AE+'plate-warship.webp','level10','stone',['#1c1210','#64301c'],'rgba(70,14,0,.08)',['marine','deckgunner'])];
const HOME={pirate:2,gunner:2,skeleton:3,archer:3,shield:3,duelist:4,brute:4,ghost:5,storm:6,thunder:6,raider:6,wrecker:7,tideBrute:7,lookout:7,skater:8,harpooner:8,revenant:8,shieldguard:9,halberdier:9,bombardier:9,marine:10,deckgunner:10};
/* melee types whose AI needs no level helper: mixed into later stages for variety */
const EXTRAS=['skeleton','duelist','raider','marine','halberdier','storm'];
const RANGED=new Set(['gunner','archer','thunder','lookout','harpooner','bombardier','deckgunner']);
/* level helpers enemy AIs call through run.def (copied from the home level's definition for that biome's stages) */
const HELPERS={6:['musket'],7:['lob','landing','blunder','anchorSlam','lanternLand','groundBelow'],8:['harpoon','chill','revenantDeath','pinCheck'],9:['toss','landing','bombLand','groundBelow'],10:['musket']};
const biomeOf=stage=>BIOMES[(stage-1)%BIOMES.length];

/* ---------------- Endless-only enemies (painted 6-frame strips) and the three mini-bosses */
const NM=(en,az,tr,ru,pl)=>({en,az,tr,ru,pl});
Object.assign(E.ENEMY,{
 flyfish:{hp:24,w:54,h:40,speed:0,chase:0,sight:360,gold:2,flesh:true,name:NM('Flying Fish','Uçan Balıq','Uçan Balık','Летучая рыба','Latająca ryba')},
 gull:{hp:26,w:58,h:44,speed:110,chase:0,sight:520,gold:3,flesh:true,name:NM('Bomber Gull','Bombaçı Qağayı','Bombacı Martı','Чайка-бомбардир','Mewa bombowiec')},
 jelly:{hp:46,w:56,h:64,speed:40,chase:0,sight:420,gold:3,flesh:false,name:NM('Storm Jelly','Elektrik Meduza','Elektrikli Denizanası','Электромедуза','Elektryczna meduza')},
 kraken:{hp:420,w:190,h:210,speed:0,chase:0,sight:1400,gold:30,flesh:true,boss:true,name:NM('Kraken','Kraken','Kraken','Кракен','Kraken')},
 ghostcap:{hp:360,w:100,h:160,speed:0,chase:0,sight:1400,gold:30,flesh:false,boss:true,name:NM('Ghost Captain','Kabus Kapitan','Hayalet Kaptan','Капитан-призрак','Kapitan Widmo')},
 serpent:{hp:400,w:160,h:230,speed:0,chase:0,sight:1400,gold:30,flesh:true,boss:true,name:NM('Sea Serpent','Dəniz İlanı','Deniz Yılanı','Морской змей','Wąż morski')}});
const SPRITE={flyfish:{D:104,face:1},gull:{D:118,face:1},jelly:{D:104,face:0},kraken:{D:330,face:-1,base:true},ghostcap:{D:250,face:-1},serpent:{D:350,face:-1,base:true}};
const BOSSES=['kraken','ghostcap','serpent'],BOSS_MUSIC={kraken:'level6boss',ghostcap:'level7boss',serpent:'level8boss'};
const groundAt=(run,x)=>{let y=null;for(const s of run.solids)if(x>=s.x&&x<=s.x+s.w&&(y===null||s.y<y))y=s.y;return y};
function spawn(run,type,x){const g=groundAt(run,x)??run.cfg.world.ground,e=new E.Enemy(run,{id:'sp'+(run.spawnN=(run.spawnN||0)+1),type,x,y:g,range:[x-260,x+260]});
 const sc=1+.08*(run.endless.stage-1);e.max=e.hp=Math.round(e.max*sc);e.alert=true;run.enemies.push(e);run.fx.burst(x,g-40,'#bfe9ff',14,1.2);return e}
function shoot(run,o){(run.bossShots||(run.bossShots=[])).push(Object.assign({g:0,r:16,dmg:12,life:3},o))}
const EP=E.Enemy.prototype;
if(!EP.__endless){EP.__endless=true;
 const bd=EP.damage;EP.damage=function(a,d,k){const r=bd.call(this,a,d,k);if(this.def.boss){this.kb=0;this.hurtT=Math.min(this.hurtT,.05)}return r};
 const hit=(e,box,dmg,kb=220)=>{const p=e.run.p;if(!p.dead&&overlap(box,p))e.run.hurtPlayer(dmg,p.x+p.w/2>e.cx?1:-1,e,kb)};
 EP.flyfish=function(dt,dx){const run=this.run,p=run.p,g=this.floor-this.h;this.bt=(this.bt||0)+dt;
  if(this.state==='leap'){this.vy+=1400*dt;this.x+=this.vx*dt;this.y+=this.vy*dt;this.frame=this.vy<-200?0:this.vy<150?1:3;this.dir=this.vx>0?1:-1;
   if(!this.hitDone&&!p.dead&&overlap({x:this.x+6,y:this.y+6,w:this.w-12,h:this.h-12},p)){this.hitDone=true;run.hurtPlayer(10,this.dir,this,220)}
   if(this.vy>0&&this.y>=g){this.y=g;this.state='idle';this.cool=1.3;this.frame=2}}
  else{this.y=g-Math.abs(Math.sin(this.bt*5))*6;this.frame=(this.bt*4|0)%2?2:1;this.x+=((clamp(this.x,this.range[0]-this.w/2,this.range[1]-this.w/2))-this.x)*Math.min(1,dt*2);
   if(this.alert&&this.cool<=0&&Math.abs(dx)<340&&!p.dead){this.state='leap';this.hitDone=false;this.vx=clamp(dx*1.6,-420,420);this.vy=-660;run.audio.at('fsplash',this.cx,{vol:.7});run.fx.splash?.(this.cx,this.floor,4)}}
  this.setAnim('walk')};
 EP.gull=function(dt,dx){const run=this.run,p=run.p;this.bt=(this.bt||0)+dt;const lo=this.range[0]-this.w/2-220,hi=this.range[1]-this.w/2+220;
  this.hy??=this.floor-190;this.reload=Math.max(0,(this.reload||0)-dt);this.dropT=Math.max(0,(this.dropT||0)-dt);
  if(this.x<=lo)this.dir=1;if(this.x>=hi)this.dir=-1;this.x+=this.dir*this.def.speed*dt;this.y=this.hy+Math.sin(this.bt*2.6)*12-this.h/2;
  this.frame=this.dropT>0?3:[0,1,2,1][(this.bt*8|0)%4];
  if(this.alert&&this.reload<=0&&Math.abs(dx)<36&&!p.dead){this.reload=2.6;this.dropT=.4;shoot(run,{kind:'bomb',x:this.cx,y:this.y+this.h,vx:this.dir*40,vy:40,g:1200,r:14,dmg:14,area:72,life:4});run.audio.at('squawk',this.cx,{vol:.7})}
  this.setAnim('walk')};
 EP.jelly=function(dt,dx){const run=this.run,p=run.p;this.bt=(this.bt||0)+dt;this.hy??=this.floor-150;
  this.y=this.hy+Math.sin(this.bt*1.7)*24-this.h/2;const goal=clamp(this.x+Math.sign(dx)*30,this.range[0]-this.w/2-120,this.range[1]-this.w/2+120);if(this.alert)this.x+=clamp(goal-this.x,-this.def.speed*dt,this.def.speed*dt);
  if(this.state==='charge'){this.timer-=dt;this.frame=3;if(this.timer<=0){this.state='idle';this.cool=2.6;run.audio.at('zap',this.cx,{vol:.8});run.fx.ring(this.cx,this.y+this.h/2,'rgba(190,140,255,.95)',20,.35);run.fx.burst(this.cx,this.y+this.h/2,'#d6b8ff',16,1.3);
    const hx=p.x+p.w/2,hy=p.y+p.h/2;if(!p.dead&&Math.hypot(hx-this.cx,hy-(this.y+this.h/2))<125)run.hurtPlayer(14,Math.sign(hx-this.cx)||1,this,240)}}
  else{this.frame=[0,1,2,1][(this.bt*3|0)%4];if(this.alert&&this.cool<=0&&Math.abs(dx)<260){this.state='charge';this.timer=.75}}
  hit(this,{x:this.x+10,y:this.y+8,w:this.w-20,h:this.h-16},8);this.setAnim('walk')};
 // mini-bosses: idle → wind-up (telegraph) → act → rest; faster below half health
 const bossTick=(e,dt,pick)=>{e.bt=(e.bt||0)+dt;const rage=e.hp<e.max*.5;
  if(e.state==='wind'){e.timer-=dt;e.frame=2;if(e.timer<=0){e.state='act';e.timer=.5;e.frame=3;e.act?.()}}
  else if(e.state==='act'){e.timer-=dt;e.frame=3;if(e.timer<=0){e.state='rest';e.timer=rage?.6:1.05}}
  else if(e.state==='rest'){e.timer-=dt;e.frame=(e.bt*3|0)%2;if(e.timer<=0)e.state='idle'}
  else{e.frame=(e.bt*3|0)%2;if(e.alert&&!e.run.p.dead){e.n=(e.n||0)+1;pick(rage);e.state='wind'}}};
 EP.kraken=function(dt){const run=this.run,p=run.p,g=this.floor,hx=p.x+p.w/2;this.dir=-1;
  bossTick(this,dt,rage=>{const mv=rage&&this.n%3===0?'summon':this.n%2?'slam':'ink';this.move=mv;this.timer=mv==='slam'?(rage?.75:1):.7;
   if(mv==='slam'){this.mark=clamp(hx,this.range[0]-560,this.cx-70);run.audio.at('kroar',this.cx,{vol:.5,rate:1.2})}
   this.act=()=>{if(mv==='slam'){const m=this.mark;run.audio.at('kslam',m,{vol:1});run.camera.shake=Math.max(run.camera.shake,9);run.fx.burst(m,g-12,'#9fe6ff',24,1.7);if(!p.dead&&Math.abs(hx-m)<95&&p.y+p.h>g-70)run.hurtPlayer(22,Math.sign(p.x+p.w/2-m)||-1,this,320)}
    else if(mv==='ink'){for(let i=0;i<3;i++){const tx=p.x+p.w/2+(i-1)*95,sx=this.cx-70;shoot(run,{kind:'water',x:sx,y:this.y+70,vx:(tx-sx)/1.05,vy:-560,g:1060,r:16,dmg:12})}run.audio.at('sbreath',this.cx,{vol:.6,rate:1.2})}
    else{run.audio.at('kroar',this.cx,{vol:1});run.camera.shake=Math.max(run.camera.shake,6);spawn(run,'flyfish',this.cx-420);spawn(run,'flyfish',this.cx-640)}}});
  hit(this,{x:this.x+30,y:this.y+50,w:this.w-60,h:this.h-50},10,320)};
 EP.ghostcap=function(dt){const run=this.run,p=run.p,g=this.floor,hx=p.x+p.w/2;this.bt=(this.bt||0);this.fade=1;
  const lo=Math.max(this.range[0]-this.w/2-500,run.camera.x+20),hi=Math.min(this.range[1]-this.w/2,run.camera.x+E.W-this.w-20);   // dashes stay on screen
  if(this.state==='dash'){this.timer-=dt;this.x=clamp(this.x+this.vx*dt,lo,hi);this.fade=.75;this.frame=3;hit(this,{x:this.x+10,y:this.y+20,w:this.w-20,h:this.h-30},18,320);if(this.timer<=0){this.state='rest';this.timer=.9}}
  else bossTick(this,dt,rage=>{const mv=rage&&this.n%3===0?'summon':this.n%2?'crescent':'dash';this.move=mv;this.timer=mv==='dash'?.85:.7;this.dir=hx>this.cx?1:-1;
   this.act=()=>{if(mv==='crescent'){shoot(run,{kind:'crescent',x:this.cx+this.dir*50,y:g-34,vx:this.dir*520,r:26,dmg:16,life:3.2});run.audio.at('wail',this.cx,{vol:.8})}
    else if(mv==='dash'){this.state='dash';this.timer=.85;this.vx=this.dir*720;run.audio.at('wail',this.cx,{vol:.6,rate:1.3})}
    else{run.audio.at('wail',this.cx,{vol:1,rate:.8});spawn(run,'jelly',this.cx-300);spawn(run,'jelly',this.cx+200)}}});
  if(this.state==='wind'&&this.move==='dash')this.fade=.45+.3*Math.sin(this.bt*30);
  this.y=g-this.h-28+Math.sin((this.bt+=dt)*2)*10;if(this.state!=='dash')this.dir=hx>this.cx?1:-1;hit(this,{x:this.x+20,y:this.y+30,w:this.w-40,h:this.h-50},10,260)};
 EP.serpent=function(dt){const run=this.run,p=run.p,g=this.floor;this.dir=-1;
  bossTick(this,dt,rage=>{const mv=rage&&this.n%3===0?'summon':this.n%2?'breath':'wave';this.move=mv;this.timer=mv==='breath'?(rage?.65:.85):.6;
   this.act=()=>{if(mv==='breath'){const sx=this.cx-110,sy=this.y+60,tx=p.x+p.w/2,ty=p.y+p.h*.5,a=Math.atan2(ty-sy,tx-sx);for(const da of[-.16,0,.16])shoot(run,{kind:'fire',x:sx,y:sy,vx:Math.cos(a+da)*430,vy:Math.sin(a+da)*430,r:18,dmg:14});run.audio.at('sbreath',this.cx,{vol:1})}
    else if(mv==='wave'){run.waves.push({x:this.x+30,vx:-400,y:g,life:4.5,hit:false});if(rage)run.waves.push({x:this.x+30,vx:-300,y:g,life:5.5,hit:false});run.audio.at('kslam',this.cx,{vol:.7});run.camera.shake=Math.max(run.camera.shake,5)}
    else{run.audio.at('kroar',this.cx,{vol:.8,rate:1.3});spawn(run,'gull',this.cx-380);spawn(run,'gull',this.cx-700)}}});
  hit(this,{x:this.x+40,y:this.y+40,w:this.w-60,h:this.h-40},10,320)};
}
function drawSprite(run,c,e){
 const S=SPRITE[e.type],im=S&&run.images[AX+'sprites/'+e.type+'.webp'];if(!im)return false;
 const n=im.height,dead=e.dead,f=dead?5:e.hurtT>0||e.flash>.06?4:(e.frame??0),alpha=(dead?clamp(1-(e.deadT-.7)/.8,0,1):1)*(e.fade??1);if(alpha<=0)return true;
 const D=S.D,flip=S.face!==0&&Math.sign(e.dir||1)!==S.face,cx=e.cx;let cy=S.base?e.y+e.h-D*.36:e.y+e.h/2;if(dead&&!S.base)cy+=e.deadT*e.deadT*500;if(dead&&S.base)cy+=e.deadT*60;
 c.save();c.globalAlpha=alpha;c.translate(cx,cy);if(flip)c.scale(-1,1);c.drawImage(im,f*n,0,n,n,-D/2,-D/2,D,D);
 if(e.flash>0&&!dead){c.globalCompositeOperation='lighter';c.globalAlpha=alpha*Math.min(1,e.flash*6)*.5;c.drawImage(im,f*n,0,n,n,-D/2,-D/2,D,D)}c.restore();
 if(e.type==='jelly'&&e.state==='charge'&&!dead)run.fx.glow(c,cx,e.y+e.h/2,90,'rgba(190,140,255,',.5+.3*Math.sin(run.time*30));
 return true}


function rng(seed){let a=seed>>>0||1;return()=>{a=a+0x6D2B79F5>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
const pick=(R,list)=>list[Math.floor(R()*list.length)%list.length];

/* ---------------- one stage: a run of flat grounds joined by gaps and steps.
 * Reachability rules (hero: jump ≈100 px high / ≈175 px far, double jump ≈200 px / ≈330 px):
 * plain gaps 110–230 px, a step up after a gap ≤ 60 px, steps without a gap ±40–80 px (up ≤ 70); a wide gap
 * (300–360 px) always carries a ferry (moves across the whole gap) or a row of breaking planks. */
function stagePlan(stage,seed){
 if(stage%5===0)return arenaPlan(stage,seed);
 const b=biomeOf(stage),R=rng(seed*7919+stage*104729),G=700,style=b.style;
 const len=4400+360*Math.min(stage,8);
 const solids=[],pits=[],ledges=[],movers=[],crumbles=[],coins=[],flats=[];
 let x=0,y=G;
 const flat=w=>{solids.push({x,y,w,h:1300-y,style});flats.push({x,w,y});
  for(let k=0,n=2+Math.floor(R()*3),cx=x+60+R()*Math.max(0,w-260);k<n&&cx<x+w-40;k++,cx+=44)coins.push([Math.round(cx),y-34]);
  if(w>=520&&R()<.42){const lw=150+Math.round(R()*60),lx=Math.round(x+w*.3+R()*(w*.4-lw)),ly=y-125;ledges.push({x:lx,y:ly,w:lw});for(let cx=lx+30;cx<lx+lw-20;cx+=40)coins.push([cx,ly-34])}
  x+=w};
 flat(900);
 while(x<len-900){
  const r=R();
  if(r<.3){const w=Math.round(110+R()*(stage<3?70:120));pits.push({x,w});for(let k=1;k<4;k++)coins.push([Math.round(x+w*k/4),y-110-Math.round(Math.sin(k/4*Math.PI)*40)]);x+=w;if(R()<.4)y=clamp(y-Math.round(R()*60),580,760)}
  else if(r<.42&&stage>=3){const w=300+Math.round(R()*60);pits.push({x,w});
   if(stage>=4&&R()<.45){for(let k=0;k<w;k+=100)crumbles.push({id:'cr'+crumbles.length,x:x+k,y,w:Math.min(100,w-k)})}
   else movers.push({id:'mv'+movers.length,x,y,w:120,axis:'x',range:[x,x+w-120],period:3.4+R()*1.2});
   x+=w}
  else if(r<.62){const up=R()<.5;y=clamp(y+(up?-1:1)*Math.round(40+R()*(up?30:40)),580,760)}
  flat(Math.round(420+R()*460));
 }
 flat(Math.max(900,len+300-x));
 const width=x;
 // a checkpoint mid-stage, a heart past it, a chest on a ledge, an exit near the end
 const mids=flats.slice(1,-1),mid=mids.reduce((a,f)=>Math.abs(f.x+f.w/2-width/2)<Math.abs(a.x+a.w/2-width/2)?f:a,mids[0]||flats[0]);
 const checkpoints=[{id:1,x:Math.round(mid.x+Math.min(140,mid.w/3)),y:mid.y}];
 const after=mids.find(f=>f.x>mid.x&&f.w>=440)||mid,hearts=[{id:'h1',x:Math.round(after.x+after.w*.55),y:after.y}];
 const L0=ledges.find(l=>l.x>1000)||null,chests=L0?[{id:'k1',x:Math.round(L0.x+L0.w/2),y:L0.y,gold:8+2*Math.min(stage,10)}]:[];
 const last=flats.at(-1),exitX=last.x+Math.min(560,last.w-200);
 // enemies: the biome's pool, plus melee extras from other islands after the first full cycle
 const cycle=Math.floor((stage-1)/BIOMES.length),pool=[...b.pool];
 if(cycle>0)for(const t of EXTRAS)if(!pool.includes(t)&&R()<.35+.15*Math.min(cycle,3))pool.push(t);
 const mR=rng(seed*31+stage*977),mod=stage<3?null:pick(mR,[null,null,'wind','gold','night','swarm']);
 if(stage>=3)for(const t of ['flyfish','gull','jelly'])if(!pool.includes(t)&&mR()<.3+.05*Math.min(cycle,4))pool.push(t);
 if(mod==='gold')for(const [cx,cy] of [...coins])coins.push([cx,cy-44]);
 const count=Math.min(mod==='swarm'?22:16,Math.round((3+Math.floor(stage*1.3))*(mod==='swarm'?1.5:1))),spots=mids.filter(f=>f!==mid&&f.w>=420),enemies=[];
 for(let i=0;i<count&&spots.length;i++){const f=spots[i%spots.length],slot=Math.floor(i/spots.length);if(slot>(mod==='swarm'?2:1))break;
  let t=pick(R,pool);if(slot>=1&&RANGED.has(t))t=pick(R,pool.filter(k=>!RANGED.has(k)))||t;
  const ex=Math.round(f.x+f.w*[.42,.72,.58][slot]);enemies.push({id:'e'+i,type:t,x:ex,y:f.y,range:[f.x+40,f.x+f.w-40]})}
 const anim={};for(const t of new Set(enemies.map(e=>e.type)))if(!SPRITE[t])anim[t]=b.pool.includes(t)?b.home:HOME[t];
 return{biome:b,anim,exitX,mod,cfg:{id:'endless',key:'endless-'+stage,version:1,type:'normal',assets:A+'level-03/',
  world:{width,height:1300,ground:G},start:{x:160,y:G},zones:[{id:b.id,from:0,to:width,ambient:0}],
  solids,ledges,crumbles,movers,pits,coins,chests,enemies,checkpoints,hearts}};
}


/* ---------------- every 5th stage: a short arena with a mini-boss (Kraken → Ghost Captain → Sea Serpent → …);
 * the far shore stays shut until it falls. Two of the current biome's crew guard the way in. */
function arenaPlan(stage,seed){
 const b0=biomeOf(stage),R=rng(seed*7919+stage*104729),G=700,boss=BOSSES[(stage/5-1)%BOSSES.length];
 const b={...b0,id:'arena',plate:AX+'plate-arena.webp',music:BOSS_MUSIC[boss],tint:'rgba(30,10,60,.1)'};
 const width=2900,solids=[{x:0,y:G,w:width,h:1300-G,style:b0.style}],ledges=[{x:760,y:G-125,w:190},{x:1320,y:G-125,w:190}],coins=[];
 for(let x=260;x<1500;x+=90)coins.push([x,G-34]);for(const l of ledges)for(let x=l.x+30;x<l.x+l.w-20;x+=40)coins.push([x,l.y-34]);
 const pool=b0.pool.filter(t=>!RANGED.has(t)),enemies=[{id:'e0',type:boss,x:2240,y:G,range:[2140,2360]}];
 for(let i=0;i<2;i++){const t=pick(R,pool.length?pool:b0.pool);enemies.push({id:'e'+(i+1),type:t,x:900+i*480,y:G,range:[760+i*480,1040+i*480]})}
 const anim={};for(const e of enemies)if(!SPRITE[e.type])anim[e.type]=b0.home;
 return{biome:b,anim,exitX:2560,boss,cfg:{id:'endless',key:'endless-'+stage,version:1,type:'normal',assets:A+'level-03/',
  world:{width,height:1300,ground:G},start:{x:160,y:G},zones:[{id:'arena',from:0,to:width,ambient:0}],
  solids,ledges,crumbles:[],movers:[],pits:[],coins,chests:[],enemies,checkpoints:[{id:1,x:420,y:G}],hearts:[{id:'h1',x:620,y:G}]}};
}

/* ---------------- the definition (one object per stage: the base plus the home level's AI helpers) */
const def={
 id:'endless',base:BASE,noSave:true,noPay:true,
 images:[...new Set(BIOMES.map(b=>b.plate)),AX+'plate-arena.webp',...Object.keys(SPRITE).map(k=>AX+'sprites/'+k+'.webp')],
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 plan:stagePlan,biomes:BIOMES,
 initialState:()=>({}),
 generate(run){
  const st=run.endless||(run.endless={stage:1,seed:(Date.now()^Math.floor(Math.random()*1e9))>>>0,score:0,cleared:0});
  const plan=stagePlan(st.stage,st.seed),home=window.PirateLevelEngine.get(plan.biome.home)||{};
  const d=Object.create(def);for(const k of HELPERS[plan.biome.home]||[])if(typeof home[k]==='function')d[k]=home[k];
  d.inside=()=>false;d.enemyAnimLevel=plan.anim;d.biome=plan.biome;d.homeDef=home;d.mod=plan.mod||null;d.boss=plan.boss||null;
  run.def=d;st.exitX=plan.exitX;return plan.cfg},
 heroStats(run){try{const v=window.PirateEconomy?.heroProgress?.(run.heroId);if(v)return window.PirateHeroProgress.stats(v.level,v.star,'adventure')}catch{}return{hp:100,atk:23,dr:0}},
 setup(run){
  const st=run.endless,b=run.def.biome,scale=1+.08*(st.stage-1);
  for(const e of run.enemies){e.max=e.hp=Math.round(e.max*scale)}
  run.fires=[];run.quakes=[];run.bombs=[];run.bursts=[];run.marks=[];run.waves=[];run.slowT=0;run.pinT=0;
  run.plate=run.images[b.plate];const mod=run.def.mod,boss=run.def.boss;
  run.banner={t:3.6,text:boss?text(run.lang,'miniboss')+' · '+E.ENEMY[boss].name[run.lang]||E.ENEMY[boss].name.en:text(run.lang,'stage')+' '+st.stage+' · '+text(run.lang,b.id)+(mod?' · '+text(run.lang,'mod_'+mod):'')};
  run.bossShots=[];run.wind=mod==='wind'?(st.stage%2?1:-1)*80:0;st.bossDone=!boss;st.introT=boss?.4:0;
  if(!run.endlessSfx){run.endlessSfx=true;run.audio.load(AX+'sfx/',{kroar:'roar.ogg',kslam:'slam.ogg',wail:'wail.ogg',sbreath:'breath.ogg',bossWin:'fanfare.ogg',squawk:'squawk.ogg',fsplash:'splash.ogg',zap:'zap.ogg',horn:'horn.ogg'})}
  run.motes=Array.from({length:24},(_,i)=>({x:(i*173)%E.W,y:(i*97)%H,s:.3+(i%5)*.15}))},
 onStart(run,resumed){
  // the pause card's RESTART starts a fresh run from stage 1 (never a free retry of a late stage)
  if(!run.stageSwap&&run.endless?.started){def.record(run);run.endless=null;def.advance(run,true);return}
  if(run.endless){run.endless.started=true;if(!run.endless.before){let b=null;try{b=JSON.parse(localStorage.getItem(BEST_KEY)||'null')}catch{}run.endless.before={stage:b?.stage||0,score:b?.score||0}}}},
 music(run){run.audio.playMusic(run.def.biome.music,1.4)},
 async advance(run,fresh){
  if(run.stageSwap)return;run.stageSwap=true;const st=run.endless;
  if(!fresh){st.cleared++;st.stage++;st.score=st.cleared*1000+run.stats.kills*50+run.gold+(st.bossBonus||0);def.record(run);run.audio.play('stageClear',{vol:.8})||run.audio.play('checkpoint',{vol:.8})}
  const prev=run.phase;run.phase='loading';
  try{await run.nextStage(def.generate(run))}catch(e){run.warn?.('endless stage '+e.message)}
  run.stageSwap=false;if(run.phase==='closed')return;run.phase=prev==='loading'?'play':prev;run.endless.started=true;
  run.needsRender=true},
 /* ice biome: a revenant's chill halves the hero's speed, a harpoon pins them (as in Level 8) */
 heroDrift(run){const p=run.p;let v=p.vx;if(run.slowT>0)v*=.5;if(run.pinT>0)v*=.1;return v-p.vx+(p.ground?run.wind||0:(run.wind||0)*.6)},
 zoneLabel(run){return text(run.lang,run.def.biome.id)},
 objectiveHud(run){return run.endless&&!run.endless.bossDone?text(run.lang,'locked'):text(run.lang,'reach')},
 update(run,dt){
  const st=run.endless,p=run.p,home=run.def.homeDef||{};run.banner.t=Math.max(0,run.banner.t-dt);
  run.slowT=Math.max(0,run.slowT-dt);run.pinT=Math.max(0,run.pinT-dt);
  // the home level's own hazard updaters for what its enemies throw (lantern fires, anchor quakes, ice bursts, bombs)
  try{home.updateHazards?.(run,dt);home.updateBursts?.(run,dt);home.updateBombs?.(run,dt)}catch(e){run.warn?.('endless hazards '+e.message)}
  // brute shockwaves (Level 4's slam)
  for(const w of run.waves){w.x+=w.vx*dt;w.life-=dt;if(!w.hit&&!p.dead&&Math.abs(p.x+p.w/2-w.x)<26&&p.y+p.h>w.y-34&&p.y+p.h<w.y+10){w.hit=true;run.hurtPlayer(18,Math.sign(w.vx),null,260,true)}}
  run.waves=run.waves.filter(w=>w.life>0);
  def.updateExtra(run,dt);
  st.score=st.cleared*1000+run.stats.kills*50+run.gold+(st.bossBonus||0);
  if(!p.dead&&st.bossDone&&p.x+p.w/2>st.exitX&&run.phase==='play')def.advance(run,false)},
 /* shots (water balls, fire, ghost crescents, gull bombs), the mini-boss lock, intro and victory */
 updateExtra(run,dt){
  const st=run.endless,p=run.p;
  if(st.introT>0){st.introT-=dt;if(st.introT<=0){run.audio.play('horn',{vol:.9});setTimeout(()=>run.audio?.play?.('kroar',{vol:.8}),700)}}
  for(const s of run.bossShots){s.vy+=(s.g||0)*dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.life-=dt;s.age=(s.age||0)+dt;
   const hx=p.x+p.w/2,hy=p.y+p.h*.5,gy=groundAt(run,s.x),touch=!p.dead&&Math.abs(hx-s.x)<s.r+p.w*.4&&Math.abs(hy-s.y)<s.r+p.h*.45,land=s.g&&gy!==null&&s.y>gy-4;
   if(touch||land){s.life=0;const col=s.kind==='fire'?'#ffb347':s.kind==='crescent'?'#7dffb0':s.kind==='bomb'?'#ff9a3a':'#9fe6ff';run.fx.burst(s.x,s.y,col,s.area?22:10,s.area?1.6:1);
    if(s.area){run.audio.at('kslam',s.x,{vol:.5,rate:1.4});run.camera.shake=Math.max(run.camera.shake,4);run.fx.ring(s.x,s.y,'rgba(255,170,80,.9)',12,.35);if(!p.dead&&Math.abs(hx-s.x)<s.area&&Math.abs(hy-s.y)<s.area)run.hurtPlayer(s.dmg,Math.sign(hx-s.x)||1,null,240)}
    else if(touch)run.hurtPlayer(s.dmg,Math.sign(s.vx)||1,null,240)}}
  run.bossShots=run.bossShots.filter(s=>s.life>0);
  if(!st.bossDone){const b=run.enemies.find(e=>e.def.boss);
   if(b&&!b.dead){const wall=b.x+b.w*.55;if(p.x+p.w>wall){p.x=wall-p.w;p.vx=Math.min(0,p.vx)}}
   else{st.bossDone=true;st.bossBonus=(st.bossBonus||0)+2500;st.bossesBeaten=(st.bossesBeaten||0)+1;run.audio.stopMusic?.(.4);run.audio.play('bossWin',{vol:1});setTimeout(()=>{if(run.phase==='play')run.audio.playMusic('level5win',.8)},2600);
    p.hp=Math.min(run.maxHP||100,p.hp+40);run.banner={t:3.2,text:text(run.lang,'bossDown')};run.fx.burst(b?b.cx:p.x,(b?b.y:p.y)+60,'#ffd36b',40,2);run.camera.shake=10}}},
 /* the record and the gold are kept after every cleared stage, so leaving through the pause menu loses nothing;
  * runBest = the best stored before this run started (to say "new record" at the end) */
 record(run){const st=run.endless;let best={stage:0,score:0};try{best=JSON.parse(localStorage.getItem(BEST_KEY)||'null')||best}catch{}
  st.before??={stage:best.stage||0,score:best.score||0};
  if(st.score>(best.score||0)||st.stage>(best.stage||0))try{localStorage.setItem(BEST_KEY,JSON.stringify({stage:Math.max(st.stage,best.stage||0),score:Math.max(st.score,best.score||0),at:Date.now()}))}catch{}
  try{st.paid=(st.paid||0)+(window.PirateEconomy?.earnBest?.('endless','cleared',st.cleared*GOLD_PER_STAGE)||0)}catch{}},
 onGameOver(run){
  const st=run.endless;def.record(run);const reached=st.stage,score=st.score,best=st.before,gold=st.paid||0;
  const record=score>best.score||reached>best.stage;
  const lines=[text(run.lang,'summary',{s:reached,p:score}),record?text(run.lang,'record'):text(run.lang,'bestWas',{s:best.stage,p:best.score}),gold?text(run.lang,'reward',{g:gold}):''].filter(Boolean);
  run.endlessResult={stage:reached,score,record,gold};
  const opts=run.opts;
  run.showCard(text(run.lang,'over'),lines.join(' · '),[[text(run.lang,'retry'),()=>{run.close();window.PirateLevelEngine.launch('endless',opts)},true],[text(run.lang,'map'),()=>{run.close();opts.onExit?.('map')}]])},
 drawEnemy(run,c,e){if(SPRITE[e.type])return drawSprite(run,c,e);if(e.type==='ghost'){const g=window.PirateLevelEngine.get(5);return g?.drawEnemy?.(run,c,e)||false}return false},
 drawProjectile(run,c,q){run.def.homeDef?.drawProjectile?.(run,c,q)},
 drawBackground(run,c){
  const b=run.def.biome,cam=run.camera,sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,b.sky[0]);sky.addColorStop(1,b.sky[1]);c.fillStyle=sky;c.fillRect(0,0,E.W,H);
  const im=run.plate;if(im){const sc=Math.max(1,(H*.9)/im.height),pw=im.width*sc,ph=im.height*sc,py=Math.round(700-cam.y-ph+90+(cam.y-300)*.12),ox=-((cam.x*.3)%(pw*2));
   for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>E.W||x+pw<0)continue;c.save();if(k%2){c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph)}else c.drawImage(im,x,py,pw,ph);c.restore()}
   const top=c.createLinearGradient(0,py,0,py+90);top.addColorStop(0,b.sky[0]);top.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=top;c.fillRect(0,py,E.W,90)}
  if(b.tint){c.fillStyle=b.tint;c.fillRect(0,0,E.W,H)}},
 drawMid(run,c){
  const t=run.time;
  for(const fr of run.fires){const k=fr.t/fr.max;run.fx.glow(c,fr.x,fr.y-14,60,'rgba(255,140,50,',.6*k+.2);for(let i=0;i<5;i++){const fx=fr.x-fr.w/2+10+i*(fr.w-20)/4,h=(18+10*Math.sin(t*14+i*2))*Math.min(1,k*2);c.fillStyle=i%2?'#ff9a3a':'#ffd36b';c.beginPath();c.moveTo(fx-7,fr.y);c.quadraticCurveTo(fx,fr.y-h*1.4,fx+7,fr.y);c.fill()}}
  for(const w of run.waves){c.save();c.globalAlpha=clamp(w.life/1.1,0,1);c.fillStyle='rgba(240,210,160,.85)';c.beginPath();c.moveTo(w.x-30,w.y);c.quadraticCurveTo(w.x,w.y-44,w.x+30,w.y);c.fill();c.restore()}
  for(const w of run.quakes){c.fillStyle='rgba(220,190,140,'+(1-w.t/.85)*.7+')';c.fillRect(w.x-16,w.y-10,32,10)}
  for(const bm of run.bombs){c.strokeStyle='rgba(255,70,40,'+(.4+.5*(1-clamp(bm.t,0,1)))+')';c.lineWidth=3;c.beginPath();c.ellipse(bm.x,bm.y-2,80,11,0,0,TAU);c.stroke();c.fillStyle='#2b2b30';c.beginPath();c.arc(bm.x,bm.y-9,9,0,TAU);c.fill();run.fx.glow(c,bm.x+5,bm.y-20,14,'rgba(255,190,80,',.6+.4*Math.sin(t*20))}
  for(const bu of run.bursts){if(bu.done)continue;const k=bu.t/.8;c.strokeStyle='rgba(127,230,255,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(bu.x,bu.y-3,84*(.5+.5*k),12,0,0,TAU);c.stroke()}
  if(run.slowT>0||run.pinT>0){const p=run.p;run.fx.glow(c,p.x+p.w/2,p.y+p.h*.5,60,'rgba(170,230,255,',.45)}
  // mini-boss telegraphs: the kraken's slam mark, the ghost's dash line, the serpent's glowing throat
  for(const e of run.enemies){if(e.dead||!e.def.boss||e.state!=='wind')continue;const k=.5+.5*Math.sin(t*22);
   if(e.type==='kraken'&&e.move==='slam'){c.save();c.fillStyle='rgba(255,60,40,'+(.25+.25*k)+')';c.strokeStyle='rgba(255,90,60,.9)';c.lineWidth=3;c.beginPath();c.ellipse(e.mark,e.floor-2,95,16,0,0,TAU);c.fill();c.stroke();c.restore()}
   if(e.type==='ghostcap'&&e.move==='dash'){c.save();c.strokeStyle='rgba(125,255,176,'+(.35+.4*k)+')';c.setLineDash([18,12]);c.lineWidth=4;c.beginPath();c.moveTo(e.cx,e.y+e.h*.55);c.lineTo(e.cx+e.dir*900,e.y+e.h*.55);c.stroke();c.restore()}
   if(e.type==='serpent'&&e.move==='breath')run.fx.glow(c,e.cx-110,e.y+60,70,'rgba(255,170,70,',.5+.4*k)}
  // the far shore: a beacon over the exit
  const ex=run.endless.exitX,cam=run.camera;if(ex>cam.x-200&&ex<cam.x+E.W+200){const gy=run.solids.find(s=>ex>=s.x&&ex<=s.x+s.w)?.y??700;
   c.fillStyle='#5a3a1c';c.fillRect(ex-6,gy-170,12,170);c.fillStyle='#e8484f';c.beginPath();c.moveTo(ex+6,gy-168);c.lineTo(ex+70,gy-150+Math.sin(t*3)*4);c.lineTo(ex+6,gy-128);c.fill();run.fx.glow(c,ex,gy-170,70,'rgba(255,220,140,',.55)}},
 drawFront(run,c){
  const t=run.time;for(const s of run.bossShots||[]){c.save();
   if(s.kind==='crescent'){c.translate(s.x,s.y);c.scale(Math.sign(s.vx)||1,1);c.strokeStyle='rgba(125,255,176,.95)';c.lineWidth=8;c.shadowColor='#4dff9a';c.shadowBlur=18;c.beginPath();c.arc(-10,0,30,-1.2,1.2);c.stroke();c.lineWidth=3;c.strokeStyle='#eafff2';c.stroke()}
   else if(s.kind==='bomb'){c.fillStyle='#22222a';c.beginPath();c.arc(s.x,s.y,11,0,TAU);c.fill();c.fillStyle='#ffd36b';c.fillRect(s.x-2,s.y-17,4,6);run.fx.glow(c,s.x,s.y-16,14,'rgba(255,200,90,',.7+.3*Math.sin(t*30))}
   else{const col=s.kind==='fire'?['#fff2c0','#ff9a3a','rgba(255,90,20,0)']:['#ffffff','#7fd8ff','rgba(40,140,255,0)'],g=c.createRadialGradient(s.x,s.y,2,s.x,s.y,s.r*1.6);g.addColorStop(0,col[0]);g.addColorStop(.45,col[1]);g.addColorStop(1,col[2]);c.fillStyle=g;c.beginPath();c.arc(s.x,s.y,s.r*1.6,0,TAU);c.fill()}
   c.restore()}},
 drawLighting(run,c){
  const cam=run.camera;
  if(run.def.mod==='night'){const p=run.p,x=p.x+p.w/2-cam.x,y=p.y+p.h/2-cam.y,g=c.createRadialGradient(x,y,120,x,y,460);g.addColorStop(0,'rgba(4,6,18,0)');g.addColorStop(1,'rgba(4,6,18,.82)');c.fillStyle=g;c.fillRect(0,0,E.W,H)}
  if(run.wind){c.save();c.strokeStyle='rgba(235,245,255,.35)';c.lineWidth=1.5;for(let i=0;i<22;i++){const sp=(260+i*23)*Math.sign(run.wind),x=((i*197+run.time*sp)%(E.W+200)+E.W+200)%(E.W+200)-100,y=(i*61)%H;c.beginPath();c.moveTo(x,y);c.lineTo(x-Math.sign(run.wind)*(40+i%4*12),y+2);c.stroke()}c.restore()}
  if(!run.fx.reduced){c.fillStyle='rgba(255,250,220,.4)';for(const m of run.motes){const x=((m.x-cam.x*m.s*.3+run.time*10*m.s)%E.W+E.W)%E.W,y=((m.y+Math.sin(run.time*.7+m.x)*14-cam.y*m.s*.2)%H+H)%H;c.fillRect(x,y,2,2)}}
  const v=c.createRadialGradient(E.W/2,H/2,H*.45,E.W/2,H/2,H);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(10,6,0,.3)');c.fillStyle=v;c.fillRect(0,0,E.W,H)},
 drawHud(run,c){
  const st=run.endless;c.save();c.textAlign='right';c.font='800 17px Georgia, serif';c.lineWidth=4;c.strokeStyle='rgba(10,8,4,.8)';
  const s=text(run.lang,'stage')+' '+st.stage+'   '+text(run.lang,'score')+' '+st.score;c.strokeText(s,E.W-24,128);c.fillStyle='#ffe3a6';c.fillText(s,E.W-24,128);c.restore();
  const boss=run.enemies.find(e=>e.def.boss&&!e.dead);
  if(boss){const w=Math.min(420,E.W-520),x=E.W/2-w/2,y=Math.round(H/(run.hudScale||1))-30;   // bottom centre, between the stick and the buttonsc.save();c.fillStyle='rgba(20,10,24,.85)';c.beginPath();c.roundRect(x-12,y-26,w+24,48,10);c.fill();c.strokeStyle='#d9b56c';c.lineWidth=2;c.stroke();
   c.textAlign='center';c.font='800 15px Georgia, serif';c.fillStyle='#ffd7a0';c.fillText(text(run.lang,'miniboss')+' · '+(boss.def.name[run.lang]||boss.def.name.en),E.W/2,y-8);
   c.fillStyle='#2a1420';c.fillRect(x,y,w,10);const k=Math.max(0,boss.hp/boss.max);c.fillStyle=k<.5?'#ff5a3a':'#e8484f';c.fillRect(x,y,w*k,10);c.restore()}
  if(run.def.mod&&!run.def.boss){c.save();c.textAlign='right';c.font='700 14px Arial, sans-serif';c.lineWidth=3;c.strokeStyle='rgba(10,8,4,.8)';const m='◆ '+text(run.lang,'mod_'+run.def.mod);c.strokeText(m,E.W-24,150);c.fillStyle='#bfe9ff';c.fillText(m,E.W-24,150);c.restore()}
  if(run.banner.t>0){const k=Math.min(1,run.banner.t);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=190,w=E.W;c.fillStyle='rgba(40,24,10,.82)';c.beginPath();c.roundRect(w/2-300,y-34,600,58,14);c.fill();c.strokeStyle='#d9b56c';c.lineWidth=2;c.stroke();c.font='800 28px Georgia, serif';c.fillStyle='#ffe3a6';c.fillText(run.banner.text,w/2,y+6);c.restore()}}
};
E.register(def);
window.PirateEndless={def,plan:stagePlan,biomes:BIOMES,best(){try{return JSON.parse(localStorage.getItem(BEST_KEY)||'null')}catch{return null}}};
})();
