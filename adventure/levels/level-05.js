/* Pirate Strike — Level 5: Cursed Island (chapter 1 boss level).
 * Independent level on PirateLevelEngine, same painted look as Levels 2–4.
 * Areas: Cursed Shore (quicksand, sea inlet, the smugglers' wreck) → Bone Jungle (tree climb,
 * vine lift, rope bridge) → Skull Mountain path (fire geysers, lava chasm, collapsing slabs) →
 * Totem Shrine. Each area hides an ANCESTOR TOTEM: picking it up opens that area's spirit gate,
 * and in the shrine the three totems are ACTIVATED on stone altars to break the boss's shield.
 * Boss — the Totem Shaman, three phases:
 *   1 Spirit shield: floats behind a shield fed by three cursed totem poles; skull orbs, curse
 *     bolts, skeleton summons. Strike an altar to place a totem: its pole turns gold, the shield
 *     loses a layer. All three placed → the shield shatters and he falls.
 *   2 Ground duel: staff combo (telegraphed arc), rune pillars, teleport-behind strike, orb
 *     volley. He is dazed after his combos (more damage). Dash through him: real damage + i-frames.
 *   3 Rage (≤35 % HP): faster; corrupts an altar into a ward (strike it 3× to cleanse), sweeps a
 *     low beam across the plateau (jump it), fire erupts at the arena edges.
 * Victory: the curse lifts (shrine plate cross-fades to dawn), Mari's victory leap, a short
 * story scene (tap to continue / skip), then the level completes and Level 6 unlocks.
 * Painted art and audio: tools/level05_art.py, tools/level05_audio.py; layout: tools/level05_layout.py. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A5=BASE+'assets/level-05/',A4=BASE+'assets/level-04/',A2=BASE+'assets/level-02/',MU=BASE+'assets/music/';
const L={
en:{levelWord:'Level',title:'Level 5 · Cursed Island',blurb:'Lift the curse of the Totem Shaman — the first great boss',shore:'Cursed Shore',jungle:'Bone Jungle',cliffs:'Skull Mountain',shrine:'Totem Shrine',
 objShore:'Find the ancestor totem in the smugglers’ wreck',objJungle:'Climb the great tree for the second totem',objCliffs:'Cross the lava path — the third totem waits above',objGate:'Bring the ancestor totem to the spirit gate',objShrine:'Enter the shrine',
 objAltar:'Strike an altar to activate a totem · {n}/3',objFight:'Defeat the Totem Shaman',objWard:'Strike the cursed altar to break his ward',
 idol:'Ancestor totem found! {n}/3',gateOpen:'The spirits let you pass',gateNeed:'The spirit gate needs this place’s ancestor totem',
 boss:'TOTEM SHAMAN',awake:'The Totem Shaman awakens!',shieldDown:'A totem awakens — the shield cracks!',shieldGone:'The shield shatters!',rage:'The Shaman rages!',ward:'WARD',wardOn:'A cursed altar shields him — strike it!',wardOff:'The ward is broken!',shield:'SHIELD',
 lifted:'THE CURSE IS LIFTED',victory:'VICTORY!',tap:'Tap to continue',skip:'SKIP ▶▶',
 hint1:'Ghost pirates can only be hit while they are solid',hint2:'Jump flowers launch you high — look up!',hint3:'Fire geysers glow before they erupt',hint4:'Strike the altars to activate your ancestor totems',hint5:'DASH through the Shaman — it hurts him and dodges his blows',
 s1n:'Shaman’s spirit',s1:'The curse… is broken. But beyond the sea, the Storm Crown still sleeps…',s2n:'Mari',s2:'Then I’ll wake it myself. Nobody curses my islands!',
 s3n:'',s3:'Behind the shrine, the Skull Rock opens. Inside lies an old sea chart — the way to the Storm Isles.',s4n:'Mari',s4:'Raise the sails! Next stop: the Storm Isles!'},
az:{levelWord:'Səviyyə',title:'Səviyyə 5 · Lənətli Ada',blurb:'Totem Şamanının lənətini qır — ilk böyük boss',shore:'Lənətli Sahil',jungle:'Sümük Cəngəlliyi',cliffs:'Kəllə Dağı',shrine:'Totem Məbədi',
 objShore:'Qaçaqmalçı gəmisinin qalığında əcdad totemini tap',objJungle:'İkinci totem üçün nəhəng ağaca dırman',objCliffs:'Lava yolunu keç — üçüncü totem yuxarıdadır',objGate:'Əcdad totemini ruh qapısına gətir',objShrine:'Məbədə daxil ol',
 objAltar:'Totemi aktivləşdirmək üçün qurbangahı vur · {n}/3',objFight:'Totem Şamanını məğlub et',objWard:'Qoruyucunu qırmaq üçün lənətli qurbangahı vur',
 idol:'Əcdad totemi tapıldı! {n}/3',gateOpen:'Ruhlar səni buraxır',gateNeed:'Ruh qapısı bu yerin əcdad totemini istəyir',
 boss:'TOTEM ŞAMANI',awake:'Totem Şamanı oyanır!',shieldDown:'Totem oyandı — qalxan çatladı!',shieldGone:'Qalxan parçalandı!',rage:'Şaman qəzəbləndi!',ward:'QORUYUCU',wardOn:'Lənətli qurbangah onu qoruyur — vur onu!',wardOff:'Qoruyucu qırıldı!',shield:'QALXAN',
 lifted:'LƏNƏT QALXDI',victory:'QƏLƏBƏ!',tap:'Davam etmək üçün toxun',skip:'KEÇ ▶▶',
 hint1:'Ruh piratları yalnız bərk olanda vurula bilir',hint2:'Tullanma çiçəkləri səni yüksəyə atır — yuxarı bax!',hint3:'Od geyzerləri püskürməzdən əvvəl parlayır',hint4:'Əcdad totemlərini aktivləşdirmək üçün qurbangahları vur',hint5:'Şamanın içindən YAYIN ilə keç — ona zərər verir və zərbədən qoruyur',
 s1n:'Şamanın ruhu',s1:'Lənət… qırıldı. Amma dənizin o tayında Fırtına Tacı hələ yatır…',s2n:'Mari',s2:'Onda onu özüm oyadacağam. Heç kim mənim adalarımı lənətləyə bilməz!',
 s3n:'',s3:'Məbədin arxasında Kəllə Qayası açılır. İçində köhnə dəniz xəritəsi var — Fırtına Adalarına gedən yol.',s4n:'Mari',s4:'Yelkənləri qaldırın! Növbəti dayanacaq: Fırtına Adaları!'},
tr:{levelWord:'Bölüm',title:'Bölüm 5 · Lanetli Ada',blurb:'Totem Şamanı’nın lanetini kır — ilk büyük boss',shore:'Lanetli Sahil',jungle:'Kemik Ormanı',cliffs:'Kafatası Dağı',shrine:'Totem Tapınağı',
 objShore:'Kaçakçı enkazında ata totemini bul',objJungle:'İkinci totem için dev ağaca tırman',objCliffs:'Lav yolunu geç — üçüncü totem yukarıda',objGate:'Ata totemini ruh kapısına getir',objShrine:'Tapınağa gir',
 objAltar:'Totemi etkinleştirmek için sunağa vur · {n}/3',objFight:'Totem Şamanı’nı yen',objWard:'Korumayı kırmak için lanetli sunağa vur',
 idol:'Ata totemi bulundu! {n}/3',gateOpen:'Ruhlar geçmene izin veriyor',gateNeed:'Ruh kapısı bu yerin ata totemini istiyor',
 boss:'TOTEM ŞAMANI',awake:'Totem Şamanı uyanıyor!',shieldDown:'Bir totem uyandı — kalkan çatladı!',shieldGone:'Kalkan parçalandı!',rage:'Şaman öfkelendi!',ward:'KORUMA',wardOn:'Lanetli bir sunak onu koruyor — vur!',wardOff:'Koruma kırıldı!',shield:'KALKAN',
 lifted:'LANET KALKTI',victory:'ZAFER!',tap:'Devam için dokun',skip:'GEÇ ▶▶',
 hint1:'Hayalet korsanlar yalnızca katıyken vurulabilir',hint2:'Zıplama çiçekleri seni yükseğe fırlatır — yukarı bak!',hint3:'Ateş gayzerleri patlamadan önce parlar',hint4:'Ata totemlerini etkinleştirmek için sunaklara vur',hint5:'Şaman’ın içinden ATIL — hem hasar verir hem darbeden kaçırır',
 s1n:'Şaman’ın ruhu',s1:'Lanet… kırıldı. Ama denizin ötesinde Fırtına Tacı hâlâ uyuyor…',s2n:'Mari',s2:'O zaman onu ben uyandırırım. Kimse adalarımı lanetleyemez!',
 s3n:'',s3:'Tapınağın ardında Kafatası Kayası açılıyor. İçinde eski bir deniz haritası var — Fırtına Adaları’nın yolu.',s4n:'Mari',s4:'Yelkenleri açın! Sıradaki durak: Fırtına Adaları!'},
ru:{levelWord:'Уровень',title:'Уровень 5 · Проклятый остров',blurb:'Снимите проклятие Шамана тотемов — первый большой босс',shore:'Проклятый берег',jungle:'Костяные джунгли',cliffs:'Гора-череп',shrine:'Святилище тотемов',
 objShore:'Найдите тотем предков в обломках корабля',objJungle:'Заберитесь на великое дерево за вторым тотемом',objCliffs:'Пройдите лавовую тропу — третий тотем наверху',objGate:'Принесите тотем предков к вратам духов',objShrine:'Войдите в святилище',
 objAltar:'Ударьте алтарь, чтобы пробудить тотем · {n}/3',objFight:'Победите Шамана тотемов',objWard:'Ударьте проклятый алтарь, чтобы снять защиту',
 idol:'Тотем предков найден! {n}/3',gateOpen:'Духи пропускают вас',gateNeed:'Вратам духов нужен тотем предков этого места',
 boss:'ШАМАН ТОТЕМОВ',awake:'Шаман тотемов пробуждается!',shieldDown:'Тотем пробудился — щит треснул!',shieldGone:'Щит разбит!',rage:'Шаман в ярости!',ward:'ЗАЩИТА',wardOn:'Проклятый алтарь защищает его — бейте алтарь!',wardOff:'Защита снята!',shield:'ЩИТ',
 lifted:'ПРОКЛЯТИЕ СНЯТО',victory:'ПОБЕДА!',tap:'Коснитесь, чтобы продолжить',skip:'ПРОПУСТИТЬ ▶▶',
 hint1:'Призрачных пиратов можно ранить, только когда они плотные',hint2:'Цветы-трамплины подбрасывают высоко — смотрите вверх!',hint3:'Огненные гейзеры светятся перед извержением',hint4:'Бейте алтари, чтобы пробудить тотемы предков',hint5:'Проходите сквозь Шамана РЫВКОМ — это ранит его и спасает от ударов',
 s1n:'Дух шамана',s1:'Проклятие… снято. Но за морем всё ещё спит Корона Бурь…',s2n:'Мари',s2:'Тогда я сама её разбужу. Никто не смеет проклинать мои острова!',
 s3n:'',s3:'За святилищем раскрывается Скала-череп. Внутри — старая морская карта: путь к Штормовым островам.',s4n:'Мари',s4:'Поднять паруса! Следующая остановка — Штормовые острова!'},
pl:{levelWord:'Poziom',title:'Poziom 5 · Przeklęta wyspa',blurb:'Zdejmij klątwę Szamana totemów — pierwszy wielki boss',shore:'Przeklęty brzeg',jungle:'Kościana dżungla',cliffs:'Góra czaszki',shrine:'Sanktuarium totemów',
 objShore:'Znajdź totem przodków we wraku przemytników',objJungle:'Wespnij się na wielkie drzewo po drugi totem',objCliffs:'Przejdź lawową ścieżkę — trzeci totem czeka wyżej',objGate:'Przynieś totem przodków do bramy duchów',objShrine:'Wejdź do sanktuarium',
 objAltar:'Uderz ołtarz, by obudzić totem · {n}/3',objFight:'Pokonaj Szamana totemów',objWard:'Uderz przeklęty ołtarz, by złamać osłonę',
 idol:'Znaleziono totem przodków! {n}/3',gateOpen:'Duchy cię przepuszczają',gateNeed:'Brama duchów potrzebuje totemu przodków z tego miejsca',
 boss:'SZAMAN TOTEMÓW',awake:'Szaman totemów się budzi!',shieldDown:'Totem się budzi — tarcza pęka!',shieldGone:'Tarcza roztrzaskana!',rage:'Szaman wpada w szał!',ward:'OSŁONA',wardOn:'Przeklęty ołtarz go chroni — uderz go!',wardOff:'Osłona złamana!',shield:'TARCZA',
 lifted:'KLĄTWA ZDJĘTA',victory:'ZWYCIĘSTWO!',tap:'Dotknij, aby kontynuować',skip:'POMIŃ ▶▶',
 hint1:'Upiorne piraty można trafić tylko, gdy są materialne',hint2:'Kwiaty-trampoliny wyrzucają wysoko — patrz w górę!',hint3:'Gejzery ognia świecą przed wybuchem',hint4:'Uderzaj ołtarze, by obudzić totemy przodków',hint5:'Przejdź ZRYWEM przez Szamana — rani go i unika ciosów',
 s1n:'Duch szamana',s1:'Klątwa… złamana. Lecz za morzem wciąż śpi Korona Burz…',s2n:'Mari',s2:'To sama ją obudzę. Nikt nie będzie przeklinał moich wysp!',
 s3n:'',s3:'Za sanktuarium otwiera się Skała Czaszki. W środku leży stara mapa morska — droga na Wyspy Burz.',s4n:'Mari',s4:'Podnieść żagle! Następny przystanek: Wyspy Burz!'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k];

/* deterministic pseudo-random (boss choices are reproducible in tests) */
function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}

/* ------------------------------------------------------------------ new enemies: ghost pirate, cursed bat */
Object.assign(E.ENEMY,{
 ghost:{hp:60,w:40,h:96,speed:46,chase:92,sight:340,gold:4,flesh:false,name:{en:'Ghost Pirate',az:'Ruh Pirat',tr:'Hayalet Korsan',ru:'Пират-призрак',pl:'Upiorny pirat'}},
 bat:{hp:30,w:44,h:34,speed:90,chase:0,sight:420,gold:2,flesh:false,name:{en:'Cursed Bat',az:'Lənətli Yarasa',tr:'Lanetli Yarasa',ru:'Проклятая летучая мышь',pl:'Przeklęty nietoperz'}}});
const P=E.Enemy.prototype;
if(!P.__smugglers&&!P.__rise){P.__rise=true;   // rising-from-the-ground spawn (shared with Level 4's wave spawn if present)
 const bu=P.update,bd=P.damage;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return bu.call(this,dt)};
 P.damage=function(a,d,k){if(this.dead||this.spawnT>0)return'none';return bd.call(this,a,d,k)}}
if(!P.__cursed){P.__cursed=true;
 const bd=P.damage;
 P.damage=function(amount,dir,kind){
  if(this.type==='ghost'&&(this.mode==='ghost'||this.mode==='fade')){const run=this.run;run.fx.spark(this.cx,this.y+40,'#9ffbe6',6);run.audio.at('ghostHit',this.cx,{vol:.4,rate:1.4});return'none'}
  if(this.type==='ghost'||this.type==='bat'){const ty=this.type;this.type='archer';try{return bd.call(this,amount,dir,kind)}finally{this.type=ty}}   // spirit hit/death sounds
  return bd.call(this,amount,dir,kind)};
 P.ghost=function(dt,dx,dy,near){
  const run=this.run,p=run.p;this.mode??='solid';this.gT=(this.gT||0)+dt;
  const next={solid:2.6,fade:.45,ghost:1.7,form:.5};
  if(this.gT>next[this.mode]&&(this.mode!=='solid'||this.state==='idle')){this.gT=0;this.mode={solid:'fade',fade:'ghost',ghost:'form',form:'solid'}[this.mode];if(this.mode==='form')run.audio.at('teleport',this.cx,{vol:.35,rate:1.3})}
  if(this.mode!=='solid'){this.setAnim('walk');if(near&&this.alert){this.face(p);this.walkTo(p.x+p.w/2-Math.sign(dx)*60,this.def.chase*.8,dt)}else this.patrol(dt);return}
  return this.skeleton(dt,dx,dy,near)};
 P.bat=function(dt,dx,dy,near){
  const run=this.run,p=run.p;this.hy??=this.floor-this.h;this.bt=(this.bt||0)+dt;const [lo,hi]=[this.range[0]-this.w/2,this.range[1]-this.w/2];
  const hero={x:p.x+p.w/2,y:p.y+p.h*.4},close=Math.abs(hero.x-this.cx)<this.def.sight&&Math.abs(hero.y-this.y)<360&&!p.dead;
  switch(this.state){
   case'screech':this.timer-=dt;this.y+=Math.sin(this.bt*40)*.6;if(this.timer<=0){this.state='dive';this.timer=1.0;const tx=hero.x,ty=hero.y,ddx=tx-this.cx,ddy=ty-(this.y+this.h/2),d=Math.hypot(ddx,ddy)||1;this.vx=ddx/d*430;this.vy=ddy/d*430;this.hitDone=false;run.audio.at('batFlap',this.cx,{vol:.7})}break;
   case'dive':this.timer-=dt;this.x=clamp(this.x+this.vx*dt,lo-160,hi+160);this.y+=this.vy*dt;this.dir=this.vx>0?1:-1;
    if(!this.hitDone&&overlap({x:this.x+6,y:this.y+4,w:this.w-12,h:this.h-8},p)){this.hitDone=true;run.hurtPlayer(12,this.dir,this,200)}
    if(this.timer<=0||this.y+this.h>run.cfg.world.ground-4){this.state='rise';this.timer=1.6}break;
   case'rise':this.timer-=dt;this.y+=(this.hy-this.y)*Math.min(1,dt*2.2);this.x+=((clamp(this.x,lo,hi))-this.x)*Math.min(1,dt*1.5);if(this.timer<=0||Math.abs(this.y-this.hy)<6){this.state='idle';this.cool=1.8}break;
   default:{const cx=lo+(hi-lo)*(.5+.5*Math.sin(this.bt*.7+this.home*.01));this.x+=(cx-this.x)*Math.min(1,dt*1.2);this.dir=Math.cos(this.bt*.7+this.home*.01)>0?1:-1;this.y=this.hy+Math.sin(this.bt*2.4)*16;
    if(close&&this.cool<=0){this.alert=true;this.state='screech';this.timer=.55;this.dir=hero.x>this.cx?1:-1;run.audio.at('batScreech',this.cx,{vol:.8})}}}
  this.floor=this.y+this.h;this.setAnim('walk')};
}

/* ------------------------------------------------------------------ painted art helpers */
function recolor(img,cloth,tint){
 const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);
 const d=x.getImageData(0,0,c.width,c.height),a=d.data,[cr,cg,cb]=cloth,[tr,tg,tb,tk]=tint;
 for(let i=0;i<a.length;i+=4){if(!a[i+3])continue;let r=a[i],g=a[i+1],b=a[i+2];
  if(r>90&&g<r*.5&&b<r*.55){const l=(r*.5+g*.3+b*.2)/150;r=cr*l;g=cg*l;b=cb*l}
  const l=(r*.3+g*.55+b*.15)/255;r=r*(1-tk)+tr*l*tk;g=g*(1-tk)+tg*l*tk;b=b*(1-tk)+tb*l*tk;a[i]=Math.min(255,r);a[i+1]=Math.min(255,g);a[i+2]=Math.min(255,b)}
 x.putImageData(d,0,0);return c}
function whiteOf(img){const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);return c}
function tintOf(img,col){const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-atop';x.fillStyle=col;x.fillRect(0,0,c.width,c.height);return c}
function cutlass(c,len){const g=c.createLinearGradient(0,-4,0,4);g.addColorStop(0,'#eafff8');g.addColorStop(1,'#6fb0a0');c.fillStyle=g;c.beginPath();c.moveTo(4,-3);c.quadraticCurveTo(len*.6,-6,len,-14);c.quadraticCurveTo(len*.55,4,4,4);c.closePath();c.fill();c.fillStyle='#9ad8c8';c.fillRect(-4,-6,8,12)}
const ART={body:{a:[135,330],neck:[135,81],sf:[186,102],sb:[84,102]},head:{neck:[96,168],eyes:[[79.5,103.5],[112.5,103.5]]},arm:{s:[51,12],h:[51,135]},staff:{g:[60,228],o:[60,36]},
 altar:{a:[75,114],socket:[75,21]},totem:{a:[75,270],eyes:[[61.5,96],[88.5,96],[61.5,163.5],[88.5,163.5],[61.5,231],[88.5,231]]},idol:{a:[33,96]},post:{a:[36,234],eyes:[[27.6,25.5],[44.4,25.5]]}};
const SC=.78;   // Totem Shaman draw scale (≈ 2× Mari)
const HOVER=150;   // phase 1: hem height above the plateau
// HUD uses the empty top-right enemy-panel area; 80px reserved for the DOM pause control.
function bossHudBox(W){return{x:W-300,y:18,w:208}}

/* the curse's dead as painted cut-out rigs (tools/enemy_cast.py → assets/enemies/level05, posed by enemy-rig.js);
 * Level 3 keeps its own skeleton sheets, Level 5 now has its own cursed cast */
const RIG={
 skeleton:{cast:'level05',char:'skeleton',headScale:1.0,grip:.1,windArm:-2.6,swingArm:1.35,rise:e=>!!e.minion},
 shield:{cast:'level05',char:'shield',headScale:1.0,upright:true,uprightTilt:.05,fam:{windup:'shieldUp',bash:'thrust',stun:'stun'},rise:e=>!!e.minion},
 archer:{cast:'level05',char:'archer',headScale:1.02,upright:true,bow:true,fam:{draw:'bowDraw',release:'bowRelease'},rise:e=>!!e.minion}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — sheet fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig;if(!R||!run.rigCast||!Rig)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;const st=e.state,rising=e.minion&&e.spawnT>0;
 c.save();c.globalAlpha=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 if(rising){c.beginPath();c.rect(e.cx-90,e.floor-260,180,262);c.clip()}
 if(!e.dead&&(st==='windup'||st==='draw')){const k=st==='draw'?1-e.timer/.85:1-e.timer/.6;run.fx.glow(c,e.cx+e.dir*18,e.floor-92,46+20*k,e.type==='archer'?'rgba(98,240,168,':'rgba(255,90,60,',.35+.35*k)}
 const o=Rig.draw(run,c,e,R);
 if(o&&!e.dead){
  if(e.type==='archer'&&st==='draw'&&e.aim){c.strokeStyle='rgba(98,240,168,'+(.18+.35*(1-e.timer/.85))+')';c.setLineDash([6,8]);c.lineWidth=2;c.beginPath();c.moveTo(o.tip[0],o.tip[1]);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.setLineDash([])}
  if(e.type==='skeleton'&&st==='strike'){const k=1-e.timer/.24;c.globalAlpha=alpha*(1-k)*.8;c.strokeStyle='rgba(170,255,210,.85)';c.lineWidth=8;c.lineCap='round';c.beginPath();const ax=e.cx+e.dir*10,ay=e.floor-90;
   if(e.dir>0)c.arc(ax,ay,60,-1.9,-1.9+2.5*Math.min(1,k*2));else c.arc(ax,ay,60,Math.PI+1.9-2.5*Math.min(1,k*2),Math.PI+1.9);c.stroke();c.globalAlpha=alpha}
  Rig.hud(c,run,e,o,{bar:52})}
 c.restore();c.imageSmoothingEnabled=false;
 if(rising)run.fx.glow(c,e.cx,e.floor-10,50,'rgba(98,240,168,',.6);
 return true}
function drawGhost(run,c,e){
 const sk=run.ghostLook;if(!sk)return false;
 const t=run.time,s=sk.h/sk.img.height,iw=sk.img.width*s,ih=sk.img.height*s,mode=e.mode||'solid';
 const k=mode==='solid'?1:mode==='fade'?1-(e.gT||0)/.45:mode==='form'?(e.gT||0)/.5:0;
 let alpha=e.dead?clamp(1-(e.deadT-.3)/.6,0,1):.28+.62*k;if(alpha<=0)return true;
 let rot=0,dx=0,wa=-.9;const st=e.state;
 if(e.dead)rot=-Math.min(1.2,e.deadT*3);else if(e.hurtT>0){rot=-.15;dx=-6}
 else if(st==='windup'){const q=1-e.timer/.48;wa=-2.3*q-.9*(1-q);dx=-6*q}else if(st==='strike'){const q=1-e.timer/.24;rot=.14;dx=12;wa=-2.2+2.9*Math.min(1,q*2.2)}
 const fy=e.floor-8-Math.sin(t*2.2+e.home)*6;
 run.fx.glow(c,e.cx,fy-ih*.5,ih*.55,'rgba(110,255,220,',.22*alpha);
 c.save();c.translate(Math.round(e.cx+dx*e.dir),Math.round(fy));if(e.dir<0)c.scale(-1,1);c.rotate(rot);c.globalAlpha=alpha;c.imageSmoothingEnabled=true;
 c.drawImage(sk.img,-iw/2,-ih,iw,ih);if(e.flash>0){c.globalAlpha=alpha*.85;c.drawImage(sk.white,-iw/2,-ih,iw,ih);c.globalAlpha=alpha}
 c.save();c.translate(-iw/2+sk.hand[0]*s,-ih+sk.hand[1]*s);c.rotate(wa);cutlass(c,66);c.restore();
 // wispy tail instead of legs
 c.globalAlpha=alpha*.5;const g=c.createLinearGradient(0,-ih*.3,0,10);g.addColorStop(0,'rgba(150,255,230,.0)');g.addColorStop(1,'rgba(150,255,230,.55)');c.fillStyle=g;c.beginPath();c.moveTo(-iw*.25,-ih*.3);c.quadraticCurveTo(-iw*.3+Math.sin(t*4)*6,0,0,10);c.quadraticCurveTo(iw*.3+Math.sin(t*4+1)*6,0,iw*.25,-ih*.3);c.fill();
 if(st==='strike'&&!e.dead){const q=1-e.timer/.24;c.globalAlpha=(1-q)*.8;c.strokeStyle='rgba(200,255,240,.9)';c.lineWidth=10;c.lineCap='round';c.beginPath();c.arc(-iw/2+sk.hand[0]*s,-ih+sk.hand[1]*s,70,-1.6,-1.6+2.4*Math.min(1,q*2));c.stroke()}
 c.restore();c.imageSmoothingEnabled=false;
 if(!e.dead&&st==='windup')run.fx.glow(c,e.cx+e.dir*26,fy-ih*.55,60,'rgba(255,80,60,',.4);
 if(!e.dead&&e.hp<e.max){c.fillStyle='#0b0f18cc';c.fillRect(e.cx-30,fy-ih-14,60,7);c.fillStyle='#7af0d0';c.fillRect(e.cx-29,fy-ih-13,58*e.hp/e.max,5)}
 return true}
function drawBat(run,c,e){
 const t=run.time,dead=e.dead,fall=dead?e.deadT*e.deadT*700:0,alpha=dead?clamp(1-(e.deadT-.4)/.6,0,1):1;if(alpha<=0)return true;
 const x=e.cx,y=e.y+e.h/2+fall,flap=Math.sin(t*(e.state==='dive'?30:16)+e.home)*(dead?.2:1),sc=e.state==='screech'?1.12:1;
 c.save();c.globalAlpha=alpha;c.translate(x,y);if(e.dir<0)c.scale(-1,1);c.rotate(dead?e.deadT*6:e.state==='dive'?.35:0);c.scale(sc,sc);
 if(e.state==='dive'&&!dead){c.globalAlpha=.25;c.fillStyle='#7a3a9a';for(let i=1;i<4;i++){c.beginPath();c.ellipse(-i*16,0,22-i*4,8,0,0,TAU);c.fill()}c.globalAlpha=alpha}
 for(const side of[-1,1]){c.save();c.scale(1,1);const wy=-6-flap*16*side*side;c.fillStyle='#2a1636';c.strokeStyle='#120818';c.lineWidth=1.5;c.beginPath();c.moveTo(0,-4);c.quadraticCurveTo(side*18,wy-12,side*36,wy);c.lineTo(side*30,wy+8);c.lineTo(side*24,wy+4);c.lineTo(side*18,wy+12);c.lineTo(side*10,wy+6);c.quadraticCurveTo(side*6,4,0,4);c.closePath();c.fill();c.stroke();
  c.strokeStyle='rgba(180,120,220,.5)';c.lineWidth=1;c.beginPath();c.moveTo(0,-2);c.lineTo(side*30,wy+2);c.stroke();c.restore()}
 const g=c.createRadialGradient(-3,-4,1,0,0,13);g.addColorStop(0,'#6a4a7a');g.addColorStop(1,'#1a0c22');c.fillStyle=g;c.beginPath();c.ellipse(0,0,11,13,0,0,TAU);c.fill();
 c.fillStyle='#1a0c22';c.beginPath();c.moveTo(-8,-10);c.lineTo(-5,-20);c.lineTo(-2,-11);c.moveTo(8,-10);c.lineTo(5,-20);c.lineTo(2,-11);c.fill();
 const eye=e.state==='screech'||e.state==='dive'?'#ff4a3a':'#7affc0';c.fillStyle=eye;c.beginPath();c.arc(-4,-4,2.4,0,TAU);c.arc(4,-4,2.4,0,TAU);c.fill();
 c.fillStyle='#fff';c.beginPath();c.moveTo(-3,3);c.lineTo(-2,7);c.lineTo(-1,3);c.moveTo(1,3);c.lineTo(2,7);c.lineTo(3,3);c.fill();
 c.restore();
 if(!dead){run.fx.glow(c,x,y-4,24,e.state==='screech'?'rgba(255,70,50,':'rgba(120,255,190,',e.state==='screech'?.6:.25);if(e.state==='screech'){c.save();c.strokeStyle='rgba(255,80,60,.7)';c.lineWidth=2;const r=18+(.55-e.timer)*60;c.beginPath();c.arc(x,y,r,0,TAU);c.stroke();c.restore()}}
 if(!dead&&e.hp<e.max){c.fillStyle='#0b0f18cc';c.fillRect(x-22,y-30,44,6);c.fillStyle='#e8484f';c.fillRect(x-21,y-29,42*e.hp/e.max,4)}
 return true}

/* ------------------------------------------------------------------ the Totem Shaman */
class Shaman{
 constructor(run){this.run=run;this.cfg=run.cfg.boss;this.a=run.cfg.arena;this.max=this.cfg.hp;this.rand=rng(5);this.reset(1)}
 get floor(){return this.a.floor}
 reset(phase){
  const a=this.a,s=this.run.state;
  Object.assign(this,{phase,x:a.center,y:a.floor-(phase===1?HOVER:0),hp:phase===3?this.cfg.rageAt:this.max,dir:-1,state:'dormant',t:0,animT:0,flash:0,cool:1.4,actions:0,contactCool:0,deadT:0,dazed:0,fade:phase===1?0:1,
   armA:-.45,armB:.5,staffA:0,lean:0,head:0,lunge:0,airY:0,hitDone:false,beamX:null,beamDir:1,wardCount:phase===3?1:0,eruptT:3,summons:0,intro:0,orbCharge:0,shake:0});
  this.shield=phase===1?3-s.placed.filter(Boolean).length:0;
 }
 box(){if(this.phase===1)return{x:this.x-55,y:this.y-250,w:110,h:250};return{x:this.x-42,y:this.floor-235-this.airY,w:84,h:235}}
 set(st,t){this.state=st;this.t=t}
 start(){const run=this.run;if(this.phase>1){this.fade=1;this.set('roar',1.4);run.audio.play('roar',{vol:.9});run.camera.shake=8;run.banner={t:2.4,text:text(run.lang,'awake')};return}this.set('intro',2.6);this.fade=0;this.intro=0;run.audio.play('chant',{vol:.9});run.audio.play('thunder',{vol:.8});run.camera.shake=8;run.banner={t:2.8,text:text(run.lang,'awake')};run.flashT=.5}
 invulnerable(){return['dormant','intro','roar','fall','vanish','dying','dead'].includes(this.state)}
 damage(amount,kind,dir){
  const run=this.run;if(this.state==='dead'||this.state==='dying')return'none';
  const bx=this.box(),cx=this.x,cy=bx.y+bx.h*.45;
  if(this.phase===1||this.invulnerable()){if(this.phase===1){this.shieldHit=.25;run.fx.spark(cx-dir*60,cy,'#9ffbe6',10);run.fx.text(text(run.lang,'shield'),cx,bx.y-10,'#9ffbe6');run.audio.play('deflect',{vol:.6,rate:.8})}return'blocked'}
  if(run.ward){run.fx.spark(cx-dir*40,cy,'#ff7a6a',10);run.fx.text(text(run.lang,'ward'),cx,bx.y-10,'#ff9a8a');run.audio.play('clang',{vol:.6,rate:.7});return'blocked'}
  const k=this.state==='dazed'?this.cfg.dazedScale:1,dmg=Math.round(amount*k);
  this.hp=Math.max(0,this.hp-dmg);this.flash=.12;this.shake=dir*6;run.audio.play(kind==='dash'?'swing3':'fleshHit',{vol:.7,rate:.75+Math.random()*.1});
  run.fx.text(String(dmg),cx,bx.y-16,k>1?'#ffd36b':kind==='dash'?'#9fe4ff':'#ffffff',k>1);run.fx.burst(cx,cy,'#9ffbe6',6);
  if(this.hp<=0){run.def.beginVictory(run);return'hit'}
  if(this.phase===2&&this.hp<=this.cfg.rageAt)this.enterRage();
  else if(this.phase===3&&this.hp<=this.cfg.secondWardAt&&this.wardCount<2)run.def.corrupt(run);
  return'hit';
 }
 enterRage(){const run=this.run,p=run.p;this.phase=3;this.set('roar',1.8);this.dazed=0;run.audio.play('roar',{vol:1});run.audio.play('thunder',{vol:.8});run.camera.shake=12;run.banner={t:2.6,text:text(run.lang,'rage')};
  p.vx=(p.x+p.w/2>this.x?1:-1)*480;p.vy=-260;run.fx.ring(this.x,this.floor-120,'rgba(255,120,80,.9)',24,.7);
  run.healHero(25);run.fx.text('+25',p.x+p.w/2,p.y-20,'#7dfbe0',true);
  run.def.music(run);run.def.summon(run,2);run.def.corrupt(run);run.save()}
 placeTotem(i){const run=this.run;this.shield=Math.max(0,this.shield-1);this.shieldHit=.6;run.audio.play('shieldBreak',{vol:.8,rate:1.2});run.camera.shake=6;
  if(this.shield<=0){this.set('fall',.9);this.vy=0;run.banner={t:2.6,text:text(run.lang,'shieldGone')};run.audio.play('shieldBreak',{vol:1});run.fx.burst(this.x,this.y-140,'#9ffbe6',40,1.6);run.fx.ring(this.x,this.y-140,'rgba(160,255,220,.9)',30,.8);
   const p=run.p;run.healHero(30);run.fx.text('+30',p.x+p.w/2,p.y-20,'#7dfbe0',true)}
  else{run.banner={t:2.4,text:text(run.lang,'shieldDown')};this.summonsDue=(this.summonsDue||0)+1}}
 update(dt){
  const run=this.run,p=run.p,a=this.a,g=this.floor;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);this.shake*=Math.pow(.002,dt);this.contactCool=Math.max(0,this.contactCool-dt);this.shieldHit=Math.max(0,(this.shieldHit||0)-dt);
  if(this.state==='dormant')return;
  if(this.state==='dying'||this.state==='dead'){this.deadT+=dt;return}
  this.t-=dt;this.cool-=dt;const fast=this.phase===3?.75:1;
  const px=p.x+p.w/2,dx=px-this.x,dist=Math.abs(dx);
  const lo=a.x0+120,hi=a.x1-120;
  // poses ease back to rest
  const ease=k=>Math.min(1,dt*k);this.lean+=(0-this.lean)*ease(5);this.head+=(Math.sin(this.animT*1.3)*.05-this.head)*ease(4);
  if(this.phase===1){
   this.fade=Math.min(1,this.fade+dt*.7);
   if(this.state==='intro'){this.intro+=dt;this.y=g-HOVER+Math.max(0,1-this.intro/2)*120;if(this.t<=0){this.set('hover',0);this.cool=1.2}return}
   if(this.state==='fall'){this.vy=(this.vy||0)+1600*dt;this.y=Math.min(g,this.y+this.vy*dt);this.armA=-2.4;this.armB=-2;if(this.y>=g){this.y=g;run.audio.play('bossFall',{vol:1});run.camera.shake=14;run.fx.debris(this.x,g,30);run.fx.dust(this.x,g,16);this.phase=2;this.set('dazed',2.2);this.dazed=2.2;this.cool=.6;run.def.music(run);run.save()}return}
   // hover above the hero, inside the arena
   const tx=clamp(px,lo+60,hi-60);this.x+=clamp(tx-this.x,-70*dt,70*dt);this.y=g-HOVER+Math.sin(this.animT*1.6)*12;this.dir=dx>0?1:-1;
   this.armA+=(-.5+Math.sin(this.animT*1.6)*.1-this.armA)*ease(4);this.armB+=(.4-this.armB)*ease(4);this.staffA+=(this.armA+.45-this.staffA)*ease(6);
   if(this.state==='castOrbs'){this.armA=-1.7;this.orbCharge=1-this.t/.8;if(this.t<=0){run.def.orbs(run,this,3,true);this.set('hover',0);this.cool=2.3;this.orbCharge=0}return}
   if(this.state==='castRain'){this.armB=-2.2;if(this.t<=0){run.def.rain(run,4);this.set('hover',0);this.cool=2.1}return}
   if(this.state==='castSummon'){this.armB=-2.4;this.armA=-1.9;if(this.t<=0){run.def.summon(run,2);this.summonsDue=Math.max(0,(this.summonsDue||0)-1);this.set('hover',0);this.cool=2.4}return}
   if(this.cool<=0){this.actions++;const minions=run.enemies.filter(e=>e.minion&&!e.dead).length;
    if((this.summonsDue||0)>0&&minions<3){this.set('castSummon',.9);run.audio.play('chant',{vol:.8})}
    else if(this.actions%2){this.set('castOrbs',.8);run.audio.play('crystalCharge',{vol:.8})}
    else{this.set('castRain',.6);run.audio.play('runeWarn',{vol:.7})}}
   return}
  // ---------- phases 2 and 3 (on the ground)
  this.y=g;if(this.state!=='vanish'&&this.state!=='appear')this.fade=Math.min(1,this.fade+dt*3);   // an interrupted teleport never leaves him see-through
  if(this.state==='roar'){this.armA=-2.6;this.armB=-2.6;this.lean=-.15;if(this.t<=0){this.set('idle',.4);this.cool=.6}return}
  if(this.state==='dazed'){this.dazed=this.t;this.lean=.18;this.armA+=(.5-this.armA)*ease(4);this.armB+=(.6-this.armB)*ease(4);this.staffA+=(.9-this.staffA)*ease(4);if(this.t<=0){this.dazed=0;this.set('idle',.25);this.cool=.35*fast}return}
  switch(this.state){
   case'windup':this.armA+=(-2.4-this.armA)*ease(10);this.staffA=this.armA+.4;this.lean=-.1;if(this.t<=0){this.set('swipe1',.22);this.hitDone=false;run.audio.play('bossSwing',{vol:.9})}return;
   case'swipe1':case'swipe2':{const two=this.state==='swipe2',k=1-this.t/.22;this.armA=-2.4+3.4*Math.min(1,k*1.6);this.staffA=this.armA+.5;this.lean=.12;if(two)this.x=clamp(this.x+this.dir*260*dt,lo,hi);
    if(!this.hitDone&&k>.25){const box={x:this.dir>0?this.x-10:this.x-180,y:g-170,w:190,h:170};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(two?20:18,this.dir,this,320)}}
    if(this.t<=0){if(two){this.set('dazed',1.2*fast)}else{this.set('gap',.22*fast)}}return}
   case'gap':this.armA+=(-2-this.armA)*ease(12);this.staffA=this.armA+.4;if(this.t<=0){this.set('swipe2',.22);this.hitDone=false;run.audio.play('bossSwing',{vol:.9,rate:1.1})}return;   // committed: no turning, so dashing behind him is the counter
   case'raise':this.armA=-2.2;this.armB=-2.2;this.lean=-.12;if(this.t<=0){run.def.runes(run,this.phase===3?.8:1.05);this.set('recover',.8*fast)}return;
   case'volleyUp':this.armA=-1.9;this.orbCharge=1-this.t/.6;if(this.t<=0){run.def.orbs(run,this,this.phase===3?4:3,false);this.orbCharge=0;this.set('recover',.7*fast)}return;
   case'vanish':this.fade=Math.max(0,this.t/.45);if(this.t<=0){this.x=clamp(px-p.dir*150,lo,hi);if(Math.abs(this.x-px)<90)this.x=clamp(px+(px<(lo+hi)/2?150:-150),lo,hi);this.dir=px>this.x?1:-1;this.set('appear',.5*fast);run.audio.play('teleport',{vol:.9,rate:.8})}return;
   case'appear':this.fade=1-this.t/(.5*fast);this.armA=-2.3;if(this.t<=0){this.fade=1;this.set('tstrike',.22);this.hitDone=false;run.audio.play('bossSwing',{vol:.9})}return;
   case'tstrike':{const k=1-this.t/.22;this.armA=-2.3+3.2*Math.min(1,k*1.6);this.staffA=this.armA+.5;if(!this.hitDone&&k>.25){const box={x:this.dir>0?this.x-10:this.x-170,y:g-160,w:180,h:160};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(18,this.dir,this,300)}}if(this.t<=0)this.set('dazed',.95*fast);return}
   case'rise':this.airY+=(150-this.airY)*ease(6);this.armB=-2;if(this.t<=0){this.set('beamWarn',1.0);this.beamDir=px>(lo+hi)/2?-1:1;this.beamX=this.beamDir>0?a.x0+20:a.x1-20;run.audio.play('runeWarn',{vol:.9,rate:.8})}return;
   case'beamWarn':this.armB=-2.4;if(this.t<=0){this.set('beam',1.4);run.audio.play('crystalFire',{vol:1,rate:.7})}return;
   case'beam':{this.beamX+=this.beamDir*(a.x1-a.x0)/1.3*dt;if(!p.dead&&Math.abs(px-this.beamX)<36&&p.y+p.h>g-58)run.hurtPlayer(20,this.beamDir,null,260);
    if(this.t<=0){this.beamX=null;this.set('land',.5)}return}
   case'land':this.airY+=(0-this.airY)*ease(8);if(this.t<=0){this.airY=0;run.camera.shake=6;run.fx.dust(this.x,g,10);this.set('dazed',.8)}return;
   case'recover':this.armA+=(-.45-this.armA)*ease(5);this.armB+=(.5-this.armB)*ease(5);if(this.t<=0)this.set('idle',.2);return;
  }
  // idle / walk: keep a striking distance, then pick an attack
  this.dir=dx>0?1:-1;this.armA+=(-.45-this.armA)*ease(5);this.armB+=(.5-this.armB)*ease(5);this.staffA+=(this.armA+.45-this.staffA)*ease(6);
  if(dist>190)this.x=clamp(this.x+this.dir*72*dt*(this.phase===3?1.25:1),lo,hi);
  if(!p.dead&&p.dash<=0&&overlap(p,this.box())){const push=px<this.x?-1:1;p.x+=push*120*dt}   // his body blocks (no damage): dash to pass through
  if(this.phase===3){this.eruptT-=dt;if(this.eruptT<=0){this.eruptT=6.5;run.def.edgeFire(run)}}
  if(this.cool>0)return;
  this.actions++;const r=this.rand();
  if(dist<210&&r<.7){this.set('windup',.65*fast);run.audio.play('bossWindup',{vol:.8});return}
  const opts=this.phase===3?['runes','volley','teleport','storm']:['runes','volley','teleport'];const pick=opts[Math.floor(this.rand()*opts.length)];
  if(pick==='runes'){this.set('raise',.5);run.audio.play('chant',{vol:.6,rate:1.2})}
  else if(pick==='volley'){this.set('volleyUp',.6);run.audio.play('crystalCharge',{vol:.8})}
  else if(pick==='teleport'){this.set('vanish',.45);run.audio.play('teleport',{vol:.9})}
  else{this.set('rise',.6);run.audio.play('roar',{vol:.6,rate:1.3})}
  this.cool=0;
 }
 draw(c){
  const run=this.run,im=run.shamanImg;if(!im||this.state==='dormant'||this.state==='dead')return;
  const t=run.time,g=this.floor,dying=this.state==='dying',k=dying?clamp(1-(this.deadT-1.8)/.8,0,1):this.fade;if(k<=0)return;
  const bob=this.phase===1?0:Math.sin(this.animT*2)*3,fx=this.x+this.shake+(dying?(Math.random()-.5)*8:0),fy=this.y-this.airY+bob;
  const dir=this.dir,rage=this.phase===3,flash=this.flash>0?.85:0;
  // ground shadow + aura
  c.save();c.fillStyle='rgba(0,0,0,'+(.35*k)+')';c.beginPath();c.ellipse(this.x,g+2,90*(this.phase===1?.6:1),12,0,0,TAU);c.fill();c.restore();
  run.fx.glow(c,fx,fy-150,170,rage?'rgba(255,90,60,':'rgba(98,240,168,',(.25+.1*Math.sin(t*3))*k);
  if(this.state==='dazed'){for(let i=0;i<4;i++){const a=t*4+i*TAU/4;c.fillStyle='#ffe38a';c.beginPath();c.arc(fx+Math.cos(a)*34,fy-282+Math.sin(a)*8,4,0,TAU);c.fill()}}
  const realC=c;if(window.PirateEnemyAnim?.drawBoss?.(run,c,this,{floor:this.y,air:this.airY-bob,alpha:k,h:250}))c=window.PirateEnemyAnim.NULL_CTX;   // animated boss: old body runs blind (orbPos stays exact)
  c.save();c.translate(fx,fy);if(dir<0)c.scale(-1,1);c.rotate(this.lean);c.scale(SC,SC);c.globalAlpha=k;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
  const B=ART.body,ax=B.a[0],ay=B.a[1];
  const part=(img,white,px,py,pivot,ang)=>{c.save();c.translate(px-ax,py-ay);c.rotate(ang);c.drawImage(img,-pivot[0],-pivot[1]);if(flash){c.globalAlpha=k*flash;c.drawImage(white,-pivot[0],-pivot[1]);c.globalAlpha=k}c.restore()};
  // back arm, body, head, staff, front arm
  part(im.armB,im.armBW,B.sb[0],B.sb[1],ART.arm.s,this.armB);
  c.drawImage(im.body,-ax,-ay);if(flash){c.globalAlpha=k*flash;c.drawImage(im.bodyW,-ax,-ay);c.globalAlpha=k}
  if(rage){c.globalAlpha=k*(.18+.08*Math.sin(t*9));c.drawImage(im.bodyR,-ax,-ay);c.globalAlpha=k}
  part(im.head,im.headW,B.neck[0],B.neck[1]+14,ART.head.neck,this.head+(this.state==='roar'?-.25:0));
  const ca=Math.cos(this.armA),sa=Math.sin(this.armA),hx=B.sf[0]+(ART.arm.h[0]-ART.arm.s[0])*ca-(ART.arm.h[1]-ART.arm.s[1])*sa,hy=B.sf[1]+(ART.arm.h[0]-ART.arm.s[0])*sa+(ART.arm.h[1]-ART.arm.s[1])*ca;
  part(im.staff,im.staffW,hx,hy,ART.staff.g,this.staffA);
  part(im.arm,im.armW,B.sf[0],B.sf[1],ART.arm.s,this.armA);
  c.restore();c.imageSmoothingEnabled=false;
  // glowing eyes and staff orb (world space)
  const tf=(lx,ly)=>{let x=(lx-ax)*SC,y=(ly-ay)*SC;const cr=Math.cos(this.lean),sr=Math.sin(this.lean);[x,y]=[x*cr-y*sr,x*sr+y*cr];return[fx+(dir<0?-x:x),fy+y]};
  const eyeCol=rage?'rgba(255,80,50,':'rgba(120,255,200,';
  for(const e of ART.head.eyes){const [ex,ey]=tf(B.neck[0]+(e[0]-ART.head.neck[0]),B.neck[1]+14+(e[1]-ART.head.neck[1]));run.fx.glow(c,ex,ey,16,eyeCol,.9*k)}
  c=realC;
  const so=ART.staff,cs=Math.cos(this.staffA),ss=Math.sin(this.staffA),ox=hx+(so.o[0]-so.g[0])*cs-(so.o[1]-so.g[1])*ss,oy=hy+(so.o[0]-so.g[0])*ss+(so.o[1]-so.g[1])*cs;
  const [wx,wy]=tf(ox,oy);this.orbPos={x:wx,y:wy};run.fx.glow(c,wx,wy,26+30*(this.orbCharge||0)+4*Math.sin(t*6),eyeCol,.85*k);
  if(dying){c.save();c.strokeStyle='rgba(230,255,240,'+clamp(this.deadT,0,1)+')';c.lineWidth=3;const[hx2,hy2]=tf(B.neck[0],B.neck[1]-40);c.beginPath();c.moveTo(hx2-10,hy2-30);c.lineTo(hx2+4,hy2-10);c.lineTo(hx2-6,hy2+8);c.lineTo(hx2+10,hy2+26);c.stroke();c.restore()}
  // telegraphs
  if(this.state==='windup'||this.state==='gap'){const q=this.state==='windup'?1-this.t/.65:1;c.save();c.globalAlpha=.16+.3*q;c.fillStyle='#ff4d3a';c.beginPath();c.moveTo(this.x,g-80);c.arc(this.x,g-80,190,dir>0?-1.1:Math.PI-1.1+0,dir>0?.6:Math.PI+.6,false);c.closePath();c.fill();c.restore()}
  if(this.state==='appear'){c.save();c.strokeStyle='rgba(255,90,70,.8)';c.lineWidth=3;c.setLineDash([10,8]);c.beginPath();c.ellipse(this.x,g-4,120,14,0,0,TAU);c.stroke();c.restore()}
  // phase 1: spirit shield bubble, thinner with every placed totem
  if(this.phase===1&&this.shield>0){const cx=fx,cy=fy-140,pulse=1+.03*Math.sin(t*3)+(this.shieldHit||0)*.12;
   for(let i=0;i<this.shield;i++){c.save();c.globalAlpha=(.22+.12*i)*k;c.strokeStyle=i===0?'rgba(160,255,220,.95)':'rgba(98,240,168,.8)';c.lineWidth=5-i;c.beginPath();c.ellipse(cx,cy,(150+i*16)*pulse,(178+i*16)*pulse,0,0,TAU);c.stroke();c.restore()}
   c.save();c.globalAlpha=.12*k+(this.shieldHit||0)*.5;const gr=c.createRadialGradient(cx,cy,40,cx,cy,190);gr.addColorStop(0,'rgba(98,240,168,0)');gr.addColorStop(1,'rgba(98,240,168,.55)');c.fillStyle=gr;c.beginPath();c.ellipse(cx,cy,150*pulse,178*pulse,0,0,TAU);c.fill();c.restore()}
 }
}

/* ------------------------------------------------------------------ terrain painters */
function pat(run,c,name){run.l5pat??=new Map();let m=run.l5pat.get(c);if(!m){m={};run.l5pat.set(c,m)}if(!m[name]){const im=run.images[name];m[name]=im?c.createPattern(im,'repeat'):'#3a3036'}return m[name]}
function strip(run,c,img,x0,x1,y){const im=run.images[img];if(!im)return;const tw=im.width;let x=x0;while(x<x1){const sx=((x%tw)+tw)%tw,seg=Math.min(x1-x,tw-sx);c.drawImage(im,sx,0,seg,im.height,x,y,seg,im.height);x+=seg}}
const STYLE={sand:[A5+'sand-fill.webp',A5+'sand-cap.png','rgba(40,20,30,.7)'],earth:[A5+'earth-fill.webp',A5+'moss-cap.png','rgba(6,16,12,.8)'],basalt:[A5+'basalt-fill.webp',A5+'ash-cap.png','rgba(10,4,6,.8)'],shrine:[A5+'shrine-fill.webp',A5+'shrine-cap.png','rgba(8,8,16,.75)'],rockwall:[A5+'basalt-fill.webp',null,'rgba(6,4,8,.6)']};
function paintGround(run,c,s,L,R,T,B){
 const st=STYLE[s.style];if(!st)return false;const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();c.fillStyle=pat(run,c,st[0]);c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 const g=c.createLinearGradient(0,s.y+14,0,s.y+300);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,st[2]);c.fillStyle=g;c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 const rl=c.createLinearGradient(s.x,0,s.x+26,0);rl.addColorStop(0,'rgba(255,220,190,.22)');rl.addColorStop(1,'rgba(255,220,190,0)');c.fillStyle=rl;c.fillRect(s.x,s.y,26,Math.min(s.h,300));
 const rr=c.createLinearGradient(s.x+s.w-30,0,s.x+s.w,0);rr.addColorStop(0,'rgba(0,0,0,0)');rr.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=rr;c.fillRect(s.x+s.w-30,s.y,30,Math.min(s.h,300));
 c.restore();
 if(st[1])strip(run,c,st[1],Math.max(s.x,L-2),Math.min(s.x+s.w,R+2),s.y-3);
 return true}
function paintHull(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.moveTo(s.x+30,s.y);c.lineTo(s.x+s.w-10,s.y);c.lineTo(s.x+s.w+20,s.y+40);c.lineTo(s.x+s.w,bottom);c.lineTo(s.x,bottom);c.lineTo(s.x-20,s.y+60);c.closePath();c.clip();
 c.fillStyle=pat(run,c,A4+'hull-side.webp');c.fillRect(x0-30,s.y,x1-x0+60,bottom-s.y);
 const g=c.createLinearGradient(0,s.y+30,0,s.y+200);g.addColorStop(0,'rgba(20,6,10,.05)');g.addColorStop(1,'rgba(12,4,8,.8)');c.fillStyle=g;c.fillRect(x0-30,s.y,x1-x0+60,bottom-s.y);
 // broken planks, barnacles, a gaping hole lit from inside
 c.fillStyle='rgba(0,0,0,.55)';c.beginPath();c.ellipse(s.x+330,s.y+70,46,26,.2,0,TAU);c.fill();c.fillStyle='rgba(98,240,168,.25)';c.beginPath();c.ellipse(s.x+330,s.y+72,30,14,.2,0,TAU);c.fill();
 c.restore();
 strip(run,c,A4+'wood-deck.png',x0,x1,s.y);c.fillStyle='#c8a26a';c.fillRect(x0,s.y+60,x1-x0,3);
 return true}
function paintLedge(run,c,l){
 const look=l.look||'rock',x=l.x,y=l.y,w=l.w;
 if(look==='wood'){strip(run,c,A4+'wood-deck.png',x,x+w,y);c.fillStyle='rgba(0,0,0,.3)';c.fillRect(x,y+44,w,5);return true}
 if(look==='branch'){// thick mossy branch with leaf clumps under a plank top
  c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.ellipse(x+w/2,y+40,w/2,8,0,0,TAU);c.fill();
  const g=c.createLinearGradient(0,y,0,y+30);g.addColorStop(0,'#7a5a3a');g.addColorStop(1,'#3a2414');c.fillStyle=g;c.beginPath();c.moveTo(x-8,y+6);c.quadraticCurveTo(x+w/2,y-2,x+w+10,y+8);c.lineTo(x+w+4,y+26);c.quadraticCurveTo(x+w/2,y+32,x-4,y+24);c.closePath();c.fill();
  c.strokeStyle='rgba(30,16,8,.6)';c.lineWidth=2;for(let i=0;i<3;i++){c.beginPath();c.moveTo(x+10+i*w/3,y+10);c.quadraticCurveTo(x+30+i*w/3,y+14,x+50+i*w/3,y+12);c.stroke()}
  strip(run,c,A5+'moss-cap.png',x-4,x+w+4,y-4);
  for(let i=0;i<4;i++){const lx=x+10+i*(w-20)/3;c.fillStyle=i%2?'#2a6a46':'#1e5236';c.beginPath();c.ellipse(lx,y+30,16,9,.4*(i%2?1:-1),0,TAU);c.fill()}
  c.strokeStyle='#2a5a3a';c.lineWidth=3;c.beginPath();c.moveTo(x+w*.7,y+24);c.quadraticCurveTo(x+w*.75,y+70,x+w*.68,y+110);c.stroke();return true}
 // rock / basalt slab
 const top=look==='basalt'?A5+'ash-cap.png':A5+'sand-cap.png',fill=look==='basalt'?A5+'basalt-fill.webp':A5+'basalt-fill.webp';
 c.save();c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(x+w/2,y+40,w/2,7,0,0,TAU);c.fill();c.beginPath();c.roundRect(x,y+2,w,32,[4,4,14,14]);c.clip();c.fillStyle=pat(run,c,fill);c.fillRect(x,y,w,36);
 const g=c.createLinearGradient(0,y+6,0,y+34);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(6,4,10,.6)');c.fillStyle=g;c.fillRect(x,y,w,36);c.restore();
 strip(run,c,top,x,x+w,y-3);return true}
function drawCrumble(run,c,b){
 const shake=b.state==='shake'?(Math.random()-.5)*5:0,x=b.x+shake,y=b.y;
 if(b.look==='slab'){c.save();c.translate(x,y);c.fillStyle=pat(run,c,A5+'basalt-fill.webp');c.beginPath();c.roundRect(0,2,b.w,30,[3,3,10,10]);c.fill();strip(run,c,A5+'ash-cap.png',0,b.w,-3);
  c.strokeStyle=b.state==='shake'?'#ff8a3a':'#1a0c0a';c.lineWidth=2;c.beginPath();c.moveTo(b.w*.3,2);c.lineTo(b.w*.42,16);c.lineTo(b.w*.35,28);c.moveTo(b.w*.7,2);c.lineTo(b.w*.6,20);c.stroke();c.restore();return true}
 // rope bridge plank
 c.save();c.translate(x,y);c.strokeStyle='#8a6a3a';c.lineWidth=3;c.beginPath();c.moveTo(-4,-34);c.lineTo(b.w+4,-34);c.stroke();
 for(const px of[6,b.w-6]){c.beginPath();c.moveTo(px,-34);c.lineTo(px,4);c.stroke()}
 strip(run,c,A4+'wood-deck.png',0,b.w,0);if(b.state==='shake'){c.fillStyle='rgba(255,90,40,.18)';c.fillRect(0,0,b.w,16)}c.restore();return true}
function drawMover(run,c,m){
 const x=m.x,y=m.y,w=m.w,t=run.time;
 if(m.look==='vine'){c.strokeStyle='#2a5a3a';c.lineWidth=4;for(const vx of[x+12,x+w-12]){c.beginPath();c.moveTo(vx,y-420);for(let k=1;k<=10;k++)c.lineTo(vx+Math.sin(k+t*1.5)*3,y-420+k*42);c.stroke();for(let k=0;k<8;k++){c.fillStyle='#2e6a44';c.beginPath();c.ellipse(vx+(k%2?6:-6),y-400+k*50,7,4,k%2?.6:-.6,0,TAU);c.fill()}}
  strip(run,c,A4+'wood-deck.png',x,x+w,y);c.fillStyle='rgba(0,0,0,.3)';c.fillRect(x,y+44,w,5);return true}
 // floating rune stone over lava
 const bob=Math.sin(t*2+x)*2;c.save();c.translate(x,y+bob);c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.ellipse(w/2,48,w/2,8,0,0,TAU);c.fill();
 c.fillStyle=pat(run,c,A5+'shrine-fill.webp');c.beginPath();c.moveTo(0,4);c.lineTo(w,4);c.lineTo(w-14,34);c.lineTo(w/2,52);c.lineTo(14,34);c.closePath();c.fill();
 strip(run,c,A5+'shrine-cap.png',0,w,-3);c.restore();run.fx.glow(c,x+w/2,y+30+bob,34,'rgba(98,240,168,',.5+.2*Math.sin(t*4));return true}

/* ------------------------------------------------------------------ props */
function drawTorch(run,c,x,y,t){c.fillStyle='#3a2414';c.fillRect(x-4,y-88,8,88);c.fillStyle='#d8ccb0';c.beginPath();c.ellipse(x,y-92,9,8,0,0,TAU);c.fill();c.fillStyle='#120a0c';c.beginPath();c.arc(x-3,y-93,2,0,TAU);c.arc(x+3,y-93,2,0,TAU);c.fill();
 const f=Math.sin(t*12+x)*.15;run.fx.glow(c,x,y-108,46,'rgba(110,255,190,',.55);for(let i=0;i<3;i++){const h=(22-i*6)*(1+f),w=8-i*2.4;c.fillStyle=['#2ab88a','#7affc8','#e8fff4'][i];c.beginPath();c.moveTo(x-w,y-98);c.quadraticCurveTo(x-w*.6,y-98-h*.6,x+Math.sin(t*9+i)*2,y-98-h);c.quadraticCurveTo(x+w*.6,y-98-h*.6,x+w,y-98);c.fill()}}
function drawPad(run,c,pd,t){const sq=clamp((pd.squash||0)*3,0,1),x=pd.x,y=pd.y;
 c.fillStyle='#2a5a3a';c.fillRect(x-4,y-26,8,26);
 for(let i=0;i<6;i++){const a=-Math.PI/2+(i-2.5)*.5;c.save();c.translate(x,y-26+sq*8);c.rotate(a+Math.PI/2);c.fillStyle=i%2?'#e05a9a':'#ff7ab8';c.beginPath();c.ellipse(0,-22*(1-sq*.4),11,24*(1-sq*.4),0,0,TAU);c.fill();c.restore()}
 c.fillStyle='#ffe08a';c.beginPath();c.ellipse(x,y-28+sq*8,16,10*(1-sq*.5),0,0,TAU);c.fill();run.fx.glow(c,x,y-34,46,'rgba(255,140,200,',.35+.15*Math.sin(t*4))}
function drawGeyser(run,c,gy,ph){const x=gy.x,y=gy.y,warn=ph>gy.cycle-gy.warn,up=ph<gy.up;
 c.fillStyle='#1a0c0a';c.beginPath();c.ellipse(x,y-2,30,9,0,0,TAU);c.fill();c.fillStyle='#ff6a20';c.beginPath();c.ellipse(x,y-3,20,5,0,0,TAU);c.fill();
 if(warn){const k=1-(gy.cycle-ph)/gy.warn;run.fx.glow(c,x,y-20,40+30*k,'rgba(255,110,40,',.4+.4*k);for(let i=0;i<3;i++){c.fillStyle='rgba(80,60,60,'+(.35*k)+')';c.beginPath();c.arc(x+Math.sin(run.time*5+i)*10,y-20-i*18-k*20,10+i*4,0,TAU);c.fill()}}
 if(up){const k=Math.sin(Math.min(1,ph/gy.up)*Math.PI),h=260*Math.min(1,ph/.12);const g=c.createLinearGradient(0,y,0,y-h);g.addColorStop(0,'rgba(255,240,180,.95)');g.addColorStop(.4,'rgba(255,140,40,.9)');g.addColorStop(1,'rgba(255,60,20,0)');c.fillStyle=g;
  c.beginPath();c.moveTo(x-22,y);for(let i=0;i<=8;i++){const yy=y-h*i/8;c.lineTo(x-22+i*1.2+Math.sin(run.time*30+i)*5,yy)}for(let i=8;i>=0;i--){const yy=y-h*i/8;c.lineTo(x+22-i*1.2+Math.sin(run.time*28+i)*5,yy)}c.closePath();c.fill();run.fx.glow(c,x,y-h*.5,120*k+40,'rgba(255,120,40,',.6)}}
function drawGate(run,c,gt,t){const open=gt.open||0,x=gt.x,y=gt.y,post=run.images[A5+'gate-post.png'];
 for(const s of[-1,1]){if(post)c.drawImage(post,x+s*70-ART.post.a[0]*.9,y-ART.post.a[1]*.9,post.width*.9,post.height*.9);run.fx.glow(c,x+s*70,y-ART.post.a[1]*.9+24,14,'rgba(120,255,200,',.8)}
 c.strokeStyle='#d8ccb0';c.lineWidth=4;c.beginPath();c.moveTo(x-70,y-200);c.quadraticCurveTo(x,y-250,x+70,y-200);c.stroke();
 if(open<1){const a=1-open;c.save();c.globalAlpha=a;const g=c.createLinearGradient(x-50,0,x+50,0);g.addColorStop(0,'rgba(98,240,168,0)');g.addColorStop(.5,'rgba(98,240,168,.55)');g.addColorStop(1,'rgba(98,240,168,0)');c.fillStyle=g;c.fillRect(x-56,y-420,112,420);
  c.strokeStyle='rgba(200,255,235,.7)';c.lineWidth=2;for(let i=0;i<6;i++){const xx=x-40+i*16+Math.sin(t*3+i)*4;c.beginPath();c.moveTo(xx,y);c.quadraticCurveTo(xx+Math.sin(t*2+i)*14,y-200,xx,y-420);c.stroke()}
  c.font='800 26px Georgia';c.textAlign='center';c.fillStyle='rgba(230,255,245,.9)';c.fillText('☠',x,y-150+Math.sin(t*2)*6);c.restore()}}
function drawIdol(run,c,x,y,t,scale=1,glow=true){const im=run.images[A5+'idol.png'];if(!im)return;const s=.62*scale,bob=Math.sin(t*2.4+x)*5;
 if(glow){run.fx.glow(c,x,y-34+bob,52,'rgba(255,214,120,',.55+.15*Math.sin(t*4));for(let i=0;i<3;i++){const a=t*2+i*TAU/3;c.fillStyle='rgba(255,236,170,.8)';c.fillRect(x+Math.cos(a)*30-2,y-40+bob+Math.sin(a)*12-2,4,4)}}
 c.save();c.imageSmoothingEnabled=true;c.drawImage(im,x-ART.idol.a[0]*s,y-ART.idol.a[1]*s+bob-6,im.width*s,im.height*s);c.restore()}
function drawBones(c,x,y){c.fillStyle='#d8ccb0';for(let i=0;i<5;i++){c.save();c.translate(x-26+i*12,y-4-(i%2)*4);c.rotate((i-2)*.5);c.fillRect(-10,-2,20,4);c.beginPath();c.arc(-10,0,3,0,TAU);c.arc(10,0,3,0,TAU);c.fill();c.restore()}c.beginPath();c.ellipse(x+6,y-14,9,8,0,0,TAU);c.fill();c.fillStyle='#1a0e10';c.beginPath();c.arc(x+3,y-15,2,0,TAU);c.arc(x+9,y-15,2,0,TAU);c.fill()}
function drawFetish(run,c,x,y,t){c.fillStyle='#4a3424';c.fillRect(x-4,y-110,8,110);c.fillStyle='#d8ccb0';c.beginPath();c.ellipse(x,y-118,12,11,0,0,TAU);c.fill();c.fillStyle='#120a0c';c.beginPath();c.arc(x-4,y-119,2.5,0,TAU);c.arc(x+4,y-119,2.5,0,TAU);c.fill();run.fx.glow(c,x,y-119,14,'rgba(120,255,200,',.6);
 c.strokeStyle='#c8302a';c.lineWidth=3;for(const s of[-1,1]){c.beginPath();c.moveTo(x,y-96);c.quadraticCurveTo(x+s*18,y-84,x+s*16,y-60+Math.sin(t*2+x)*3);c.stroke()}
 for(const s of[-1,1]){c.strokeStyle='#ffe08a';c.lineWidth=2;c.beginPath();c.moveTo(x+s*6,y-110);c.lineTo(x+s*22,y-136);c.stroke()}}
function drawTree(c,x,y,t){const g=c.createLinearGradient(x-40,0,x+40,0);g.addColorStop(0,'#2a2a1e');g.addColorStop(.5,'#4a4430');g.addColorStop(1,'#1a1a12');c.fillStyle=g;c.beginPath();c.moveTo(x-60,y);c.quadraticCurveTo(x-30,y-40,x-26,y-120);c.lineTo(x-22,y-700);c.lineTo(x+22,y-700);c.lineTo(x+26,y-120);c.quadraticCurveTo(x+30,y-40,x+60,y);c.closePath();c.fill();
 c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=2;for(let i=0;i<5;i++){c.beginPath();c.moveTo(x-16+i*8,y-40);c.lineTo(x-14+i*8,y-680);c.stroke()}
 c.strokeStyle='#2a5a3a';c.lineWidth=3;c.beginPath();c.moveTo(x+20,y-500);c.quadraticCurveTo(x+40,y-300,x+30+Math.sin(t+x)*4,y-180);c.stroke()}
function drawMushroom(run,c,x,y,t){for(const[dx,s]of[[-14,1],[8,1.4],[24,.8]]){c.fillStyle='#d8e8d0';c.fillRect(x+dx-2*s,y-12*s,4*s,12*s);c.fillStyle='#4ae0c0';c.beginPath();c.ellipse(x+dx,y-12*s,10*s,6*s,0,Math.PI,0);c.fill()}run.fx.glow(c,x+4,y-18,40,'rgba(90,240,200,',.4+.15*Math.sin(t*3+x))}
function drawSpikes(run,c,sp){c.fillStyle='#2a1a10';c.fillRect(sp.x,sp.y-6,sp.w,8);for(let x=sp.x+4;x<sp.x+sp.w-6;x+=16){c.fillStyle='#e8dcc0';c.beginPath();c.moveTo(x,sp.y-4);c.lineTo(x+7,sp.y-36);c.lineTo(x+14,sp.y-4);c.fill();c.fillStyle='#8a7a62';c.fillRect(x+8,sp.y-30,2,24)}run.fx.glow(c,sp.x+sp.w/2,sp.y-14,sp.w*.6,'rgba(255,70,40,',.16)}

/* ------------------------------------------------------------------ level */
const ZONES=['shore','jungle','cliffs','shrine'],PLATES={shore:'plate-shore.webp',jungle:'plate-jungle.webp',cliffs:'plate-cliffs.webp',shrine:'plate-shrine.webp'},DARK={shore:.2,jungle:.42,cliffs:.3,shrine:.46},SKY={shore:['#120a26','#5c1f46'],jungle:['#0a1418','#2a5a48'],cliffs:['#0e0814','#3a1020'],shrine:['#06080e','#1a1636']};
const IMAGES=[...Object.values(PLATES),'plate-dawn.webp','mid-jungle.webp','sand-fill.webp','sand-cap.png','earth-fill.webp','moss-cap.png','basalt-fill.webp','ash-cap.png','shrine-fill.webp','shrine-cap.png','altar.png','totem.png','totem-gold.png','idol.png','gate-post.png',
 'shaman-body.png','shaman-head.png','shaman-arm.png','shaman-arm-back.png','shaman-staff.png'].map(n=>A5+n).concat([A4+'wood-deck.png',A4+'hull-side.webp',A2+'pirate-sword.png']);
const SFX={teleport:'sfx-teleport.ogg',orb:'sfx-orb.ogg',orbPop:'sfx-orbPop.ogg',runeErupt:'sfx-runeErupt.ogg',runeWarn:'sfx-runeWarn.ogg',shieldBreak:'sfx-shieldBreak.ogg',totemPlace:'sfx-totemPlace.ogg',totemPickup:'sfx-totemPickup.ogg',chant:'sfx-chant.ogg',thunder:'sfx-thunder.ogg',geyser:'sfx-geyser.ogg',geyserWarn:'sfx-geyserWarn.ogg',batScreech:'sfx-batScreech.ogg',batFlap:'sfx-batFlap.ogg',jumpPad:'sfx-jumpPad.ogg',quicksand:'sfx-quicksand.ogg',spiritGate:'sfx-spiritGate.ogg',curseLifted:'sfx-curseLifted.ogg',bossFall:'sfx-bossFall.ogg',
 cursed:'../music/cursed.ogg',shaman:'../music/island.ogg',rage:'../music/shaman-rage.ogg',triumph:'../music/triumph.ogg'};
const def={
 id:5,base:BASE,config:BASE+'level-05.json',images:IMAGES,
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 initialState:()=>({idols:[],gates:[],placed:[false,false,false],bossDefeated:false}),
 persist(run){const s=run.state;return{idols:[...s.idols],gates:[...s.gates],placed:[...s.placed],bossDefeated:s.bossDefeated}},
 async prepare(run){
  const src=run.images[A2+'pirate-sword.png'];if(src){const img=recolor(src,[60,200,180],[150,255,230,.55]);run.ghostLook={img,white:whiteOf(img),hand:[222,186],h:150}}
  const I=n=>run.images[A5+n];const body=I('shaman-body.png');
  if(body)run.shamanImg={body,bodyW:whiteOf(body),bodyR:tintOf(body,'#ff3a20'),head:I('shaman-head.png'),headW:whiteOf(I('shaman-head.png')),arm:I('shaman-arm.png'),armW:whiteOf(I('shaman-arm.png')),armB:I('shaman-arm-back.png'),armBW:whiteOf(I('shaman-arm-back.png')),staff:I('shaman-staff.png'),staffW:whiteOf(I('shaman-staff.png'))};
  run.lightBuf=document.createElement('canvas');
  run.audioReady=Promise.all([run.audioReady,run.audio.load(A5,SFX)]);
  // victory choreography draws the hero through the skin (any hero, not only Mari)
  const sk=run.skin;if(sk&&!sk.__l5){sk.__l5=true;const base=sk.draw.bind(sk);sk.draw=(c,p,r)=>{const cine=r?.cine;if(cine&&cine.heroPose)return def.drawCineHero(r,c,p,base);return base(c,p,r)}}
  await loadRig(run,'level05');
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  if(!Array.isArray(s.placed)||s.placed.length!==3)s.placed=[false,false,false];
  run.banner={t:4.5,text:text(run.lang,'title')};run.spikeT=0;run.marks=[];run.runeFx=[];run.beams=[];run.fires=[];run.sinkT=0;run.flashT=0;run.dawnK=s.bossDefeated?1:0;run.cine=null;run.ward=null;run.wardHits=0;
  run.gatesO=c.gates.map(g=>({...g,open:s.gates.includes(g.id)?1:0}));
  run.idolsLeft=c.idols.filter(i=>!s.idols.includes(i.id)).map(i=>({...i}));
  run.pads=c.pads.map(p=>({...p,squash:0}));
  run.arena={active:false,gate:0};run.boss=new Shaman(run);run.minionN=0;
  if(s.bossDefeated){run.boss.state='dead';run.boss.hp=0}
  run.motes=Array.from({length:40},(_,i)=>({x:(i*173)%1280,y:(i*97)%H,s:.3+(i%5)*.15}));
  if(!run.skipBtn&&run.root){const b=document.createElement('button');b.className='pl-skip';b.textContent=text(run.lang,'skip');b.style.cssText='position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:5;padding:8px 14px;border-radius:12px;border:2px solid #d8b56a;background:#0d1a29e6;color:#ffe3a0;font:800 14px Arial;display:none';b.onclick=e=>{e.stopPropagation();def.skipStory(run)};run.root.append(b);run.skipBtn=b;
   run.root.addEventListener('pointerdown',e=>{if(run.cine&&run.cine.stage==='story'&&!e.target.closest('button'))def.advance(run)})}
  if(s.bossDefeated)def.startStory(run);
 },
 onStart(run,resumed){if(run.cine){if(run.controls)run.controls.hidden=true;run.banner={t:0,text:''};return}run.banner={t:4.5,text:text(run.lang,'title')};run.hintQueue=resumed?[]:['hint2'];run.hintT=7;run.hintsAt={h1:'hint1'};run.geyserHint=false;run.altarHint=false},
 music(run){if(run.cine){run.audio.playMusic('triumph',1.2);return}if(run.arena?.active&&!run.state.bossDefeated){run.audio.playMusic(run.boss.phase===3?'rage':'shaman',1.0);return}run.audio.playMusic('cursed',1.4)},
 zone(run){const x=run.p.x;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones.at(-1)},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 objectiveHud(run){
  if(run.cine)return'';const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k);const n=s.idols.length;
  const gate=run.gatesO.find(g=>!g.open&&g.x>run.p.x-200);
  if(z==='shrine'){if(!run.arena.active)return t('objShrine');const b=run.boss;if(b.phase===1)return t('objAltar').replace('{n}',s.placed.filter(Boolean).length);if(run.ward)return t('objWard');return t('objFight')}
  const need={shore:1,jungle:2,cliffs:3}[z];
  if(n>=need&&gate&&gate.need<=n)return t('objGate');
  return t({shore:'objShore',jungle:'objJungle',cliffs:'objCliffs'}[z])},
 dynamicSolids(run){const list=[],a=run.cfg.arena;
  for(const g of run.gatesO)if(g.open<.6)list.push({x:g.x-18,y:g.y-460,w:36,h:460,style:'spirit'});
  if(run.arena.gate>.05)list.push({x:a.x0-30,y:a.floor-460*run.arena.gate,w:30,h:460*run.arena.gate,style:'spirit'});
  return list},
 cameraLock(run){if(!run.arena.active||run.state.bossDefeated&&!run.cine)return null;const a=run.cfg.arena,W=E.W,p=run.p;const x=clamp(p.x+p.w/2-W/2,a.x0-60,a.x1+40-W);return{x:x+(W-960)/2,y:a.floor-H*.84}},
 bossHud(run){return run.arena.active&&!run.cine&&!['dormant','dead','dying'].includes(run.boss.state)},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg,a=c.arena,b=run.boss;
  run.spikeT+=dt;run.banner.t=Math.max(0,run.banner.t-dt);run.flashT=Math.max(0,run.flashT-dt);
  if(run.cine){def.updateCine(run,dt);return}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:3.8,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-p.x)<520){run.banner={t:4,text:text(run.lang,h),small:true};delete run.hintsAt[id]}}
  if(!run.geyserHint&&p.x>6150){run.geyserHint=true;run.banner={t:3.6,text:text(run.lang,'hint3'),small:true}}
  for(const pd of run.pads)pd.squash=Math.max(0,pd.squash-dt);
  // ancestor totems: pick up on touch
  for(const i of[...run.idolsLeft])if(!p.dead&&overlap(p,{x:i.x-26,y:i.y-80,w:52,h:80})){run.idolsLeft=run.idolsLeft.filter(q=>q!==i);s.idols.push(i.id);run.audio.play('totemPickup',{vol:1});run.fx.burst(i.x,i.y-40,'#ffe27a',30);run.fx.ring(i.x,i.y-40,'rgba(255,220,120,.9)',12,.6);run.banner={t:3,text:text(run.lang,'idol').replace('{n}',s.idols.length)};run.save()}
  // spirit gates: open when the hero carries enough ancestor totems
  for(const g of run.gatesO){
   if(!g.open&&Math.abs(p.x+p.w/2-g.x)<140&&!p.dead){if(s.idols.length>=g.need){g.open=.001;s.gates.push(g.id);run.audio.at('spiritGate',g.x,{vol:1});run.fx.burst(g.x,g.y-200,'#9ffbe6',36,1.4);run.banner={t:2.6,text:text(run.lang,'gateOpen')};run.save()}else if(!g.told){g.told=true;run.banner={t:3.2,text:text(run.lang,'gateNeed'),small:true}}}
   if(g.open>0&&g.open<1)g.open=Math.min(1,g.open+dt*1.1);if(Math.abs(p.x+p.w/2-g.x)>400)g.told=false}
  // arena: seal and wake the shaman
  if(!s.bossDefeated&&!run.arena.active&&p.x>a.trigger&&!p.dead){run.arena.active=true;b.reset(b.phase>1?b.phase:1);b.start();run.audio.play('gateSlam',{vol:.9});def.music(run);if(!run.altarHint){run.altarHint=true;run.hintQueue=['hint4','hint5'];run.hintT=4}}
  run.arena.gate+=((run.arena.active&&!s.bossDefeated?1:0)-run.arena.gate)*Math.min(1,dt*6);
  if(run.arena.active){b.update(dt);def.updateBossFx(run,dt)}
  // homing skull orbs
  for(const q of run.projectiles)if(q.kind==='orb'&&q.home){const tx=p.x+p.w/2-q.x,ty=p.y+p.h*.45-q.y,want=Math.atan2(ty,tx),cur=Math.atan2(q.vy,q.vx);let d=Math.atan2(Math.sin(want-cur),Math.cos(want-cur));const a2=cur+clamp(d,-1.7*dt,1.7*dt),sp=Math.hypot(q.vx,q.vy);q.vx=Math.cos(a2)*sp;q.vy=Math.sin(a2)*sp}
 },
 updateBossFx(run,dt){
  const p=run.p,a=run.cfg.arena,g=a.floor;
  for(const m of run.marks){m.t+=dt;if(!m.hit&&m.t>=m.warn){m.hit=true;run.audio.at('thunder',m.x,{vol:.5,rate:1.6});run.camera.shake=Math.max(run.camera.shake,4);run.fx.burst(m.x,g-10,'#9ffbe6',14);if(!p.dead&&Math.abs(p.x+p.w/2-m.x)<m.r&&p.y+p.h>g-140)run.hurtPlayer(16,Math.sign(p.x+p.w/2-m.x)||1,null,220)}}
  run.marks=run.marks.filter(m=>m.t<m.warn+.35);
  for(const r of run.runeFx){r.t+=dt;if(!r.hit&&r.t>=r.warn){r.hit=true;run.audio.at('runeErupt',r.x,{vol:.8});run.camera.shake=Math.max(run.camera.shake,5)}
   if(r.hit&&r.t<r.warn+.55&&!r.done&&!p.dead&&Math.abs(p.x+p.w/2-r.x)<46&&p.y+p.h>g-230){r.done=true;run.hurtPlayer(22,Math.sign(p.x+p.w/2-r.x)||1,null,240)}}
  run.runeFx=run.runeFx.filter(r=>r.t<r.warn+.7);
  for(const f of run.fires){f.t+=dt;if(!f.hit&&f.t>=f.warn)f.hit=true;if(f.hit&&f.t<f.warn+.7&&!p.dead&&p.x+p.w>f.x0&&p.x<f.x1&&p.y+p.h>g-200&&!(p.inv>0))run.hurtPlayer(16,f.x0<a.center?1:-1,null,260)}
  run.fires=run.fires.filter(f=>f.t<f.warn+.8);
  for(const bm of run.beams)bm.t+=dt;run.beams=run.beams.filter(bm=>bm.t<bm.dur);
 },
 orbs(run,b,n,home){const o=b.orbPos||{x:b.x,y:b.y-260},p=run.p;run.audio.play('orb',{vol:.9});
  for(let i=0;i<n;i++){const spread=(i-(n-1)/2)*.45,tx=p.x+p.w/2-o.x,ty=p.y+p.h*.4-o.y,ang=Math.atan2(ty,tx)+spread;
   const v=home?200:310;run.projectiles.push({kind:'orb',owner:'enemy',home,x:o.x,y:o.y,vx:Math.cos(ang)*v,vy:home?Math.sin(ang)*v:-320-i*40,g:home?0:700,w:26,h:26,dmg:14,life:home?4.2:3,onEnd:(r,q)=>{r.fx.burst(q.x,q.y,'#9ffbe6',10);r.audio.at('orbPop',q.x,{vol:.6})}})}},
 rain(run,n){const p=run.p,a=run.cfg.arena,r=run.boss.rand;for(let i=0;i<n;i++){const x=clamp(p.x+p.w/2+(i-(n-1)/2)*150+(r()-.5)*60,a.x0+40,a.x1-40);run.marks.push({x,t:-i*.12,warn:1.1,r:52,hit:false})}},
 runes(run,warn){const p=run.p,a=run.cfg.arena;for(const d of[-170,0,170])run.runeFx.push({x:clamp(p.x+p.w/2+d,a.x0+50,a.x1-50),t:0,warn,hit:false});run.audio.play('runeWarn',{vol:.8})},
 edgeFire(run){const a=run.cfg.arena;run.fires.push({x0:a.x0,x1:a.x0+170,t:0,warn:1.0},{x0:a.x1-170,x1:a.x1,t:0,warn:1.0});run.audio.play('geyserWarn',{vol:.8})},
 summon(run,n){const a=run.cfg.arena,p=run.p;for(let i=0;i<n;i++){const left=(i%2===0)===(p.x+p.w/2>a.center);const x=left?a.x0+140+run.minionN*30%120:a.x1-140-run.minionN*30%120;const e=new E.Enemy(run,{id:'m'+(++run.minionN),type:'skeleton',x,y:a.floor,range:[a.x0+40,a.x1-40]});e.minion=true;e.spawnT=.9;e.alert=true;run.enemies.push(e);run.fx.burst(x,a.floor-10,'#9ffbe6',16);run.fx.debris(x,a.floor,8)}run.audio.play('rattle',{vol:.8})},
 corrupt(run){const b=run.boss,s=run.state;b.wardCount++;const idx=b.wardCount===1?1:(run.p.x+run.p.w/2<run.cfg.arena.center?2:0);run.ward={i:idx,hits:3};run.banner={t:3,text:text(run.lang,'wardOn')};run.audio.play('chant',{vol:.9});run.audio.play('thunder',{vol:.6})},
 altarIndexAt(run,box){const a=run.cfg.arena;return a.altars.findIndex(x=>overlap(box,{x:x-46,y:a.floor-110,w:92,h:110}))},
 hitAltar(run,box){
  const s=run.state,b=run.boss;if(!run.arena.active||run.cine)return false;const i=def.altarIndexAt(run,box);if(i<0)return false;const ax=run.cfg.arena.altars[i],g=run.cfg.arena.floor;
  if(run.ward&&run.ward.i===i){run.ward.hits--;run.fx.spark(ax,g-90,'#ff8a7a',12);run.audio.play('stoneHit',{vol:.9,rate:.8});run.camera.shake=3;if(run.ward.hits<=0){run.ward=null;run.banner={t:2.4,text:text(run.lang,'wardOff')};run.audio.play('shieldBreak',{vol:.8});run.beams.push({x:ax,y:g-100,t:0,dur:.9,gold:true})}return true}
  if(b.phase===1&&!s.placed[i]&&s.idols.length>s.placed.filter(Boolean).length&&!['intro','fall','dormant'].includes(b.state)){
   s.placed[i]=true;run.audio.play('totemPlace',{vol:1});run.fx.burst(ax,g-100,'#ffe27a',30);run.fx.ring(ax,g-100,'rgba(255,220,120,.9)',14,.6);run.beams.push({x:ax,y:g-100,t:0,dur:1.1,gold:true});b.placeTotem(i);run.save();return true}
  return false},   // nothing to do at this altar: the blow goes on to the shaman
 strike(run,box,dmg){if(def.hitAltar(run,box))return true;const b=run.boss;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&overlap(box,b.box())){const r=b.damage(dmg,'melee',run.p.dir);return r!=='none'}return false},
 dashStrike(run,box,dmg){const b=run.boss;if(!run.arena.active||run.cine||!overlap(box,b.box()))return false;const r=b.damage(Math.round(dmg*run.cfg.boss.dashScale),'dash',run.p.dir);if(r==='hit'){run.fx.spark(b.x,run.p.y+run.p.h*.45,'#9fe4ff',16);return true}return false},
 projectileHit(run,q){if(q.owner!=='hero')return false;if(def.hitAltar(run,{x:q.x,y:q.y,w:q.w||12,h:q.h||8}))return true;const b=run.boss;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&overlap(q,b.box())){b.damage(Math.round(q.dmg*run.cfg.boss.bulletScale),'bullet',Math.sign(q.vx)||1);return true}return false},
 heroHazards(run,dt){
  const p=run.p,c=run.cfg;if(run.cine)return;
  for(const sp of c.spikes)if(!p.dead&&overlap({x:p.x+4,y:p.y,w:p.w-8,h:p.h},{x:sp.x+4,y:sp.y-36,w:sp.w-8,h:36})){if(run.hurtPlayer(18,0,null,0)){p.vy=-430;run.fx.spark(p.x+p.w/2,sp.y-20,'#e6edf3',8)}}
  for(const gy of c.geysers){const ph=(run.spikeT+gy.offset)%gy.cycle;if(Math.abs(p.x-gy.x)<800){if(ph<dt){run.audio.at('geyser',gy.x,{vol:.8});run.fx.sprite?.('puff',gy.x,gy.y-150,{scale:1.1,delay:.35,alpha:.85})}else if(Math.abs(ph-(gy.cycle-gy.warn))<dt)run.audio.at('geyserWarn',gy.x,{vol:.6})}
   if(ph<gy.up&&!p.dead&&overlap(p,{x:gy.x-24,y:gy.y-260,w:48,h:260}))run.hurtPlayer(18,p.x+p.w/2<gy.x?-1:1,null,260)}
  // jump flowers
  for(const pd of run.pads)if(p.vy>=0&&!p.dead&&p.x+p.w>pd.x-26&&p.x<pd.x+26&&Math.abs(p.y+p.h-pd.y)<8){p.vy=-pd.power;p.ground=false;p.platform=null;p.jumps=1;p.coyote=0;pd.squash=.25;run.audio.play('jumpPad',{vol:.8});run.fx.burst(pd.x,pd.y-30,'#ff9ad0',14)}
  // quicksand: slows and pulls the hero under; jump out
  const qs=c.quicksand.find(q=>p.x+p.w/2>q.x&&p.x+p.w/2<q.x+q.w);
  if(qs&&p.ground&&!p.dead){p.x-=p.vx*dt*.62;run.sinkT+=dt;if(run.sinkT>.3&&Math.floor(run.sinkT*3)!==Math.floor((run.sinkT-dt)*3))run.audio.play('quicksand',{vol:.5});if(run.fx.on&&Math.random()<.3)run.fx.dust(p.x+p.w/2,p.y+p.h,2);if(run.sinkT>1.6){run.sinkT=.6;run.hurtPlayer(10,0,null,0,true);p.vy=-380;p.ground=false}}
  else run.sinkT=Math.max(0,run.sinkT-dt*3)},
 onRespawn(run){
  const s=run.state,b=run.boss;run.marks=[];run.runeFx=[];run.fires=[];run.beams=[];run.sinkT=0;
  run.enemies=run.enemies.filter(e=>!e.minion);
  if(run.arena.active&&!s.bossDefeated){run.arena.active=false;run.ward=null;const ph=b.phase;b.reset(ph);b.state='dormant';def.music(run)}},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 ambience(run){if(!run.audio.ctx)return;const z=def.zone(run).id;run.audio.loop('water',z==='shore'?.5:0);run.audio.loop('jungle',z==='jungle'?.5:0);run.audio.loop('wind',z==='shore'||z==='shrine'?.32:.14);run.audio.loop('cave',z==='cliffs'?.25:0)},
 paintSolid(run,c,s,L,R,T,B){if(s.style==='hull')return paintHull(run,c,s,L,R,T,B);return paintGround(run,c,s,L,R,T,B)},
 paintLedge:(run,c,l)=>paintLedge(run,c,l),
 drawCrumble:(run,c,b)=>drawCrumble(run,c,b),
 drawMover:(run,c,m)=>drawMover(run,c,m),
 drawEnemy(run,c,e){if(e.type==='ghost'){const A=window.PirateEnemyAnim;if(A&&run.enemyAnim?.byType?.get('ghost')){const mode=e.mode||'solid',k=mode==='solid'?1:mode==='fade'?1-(e.gT||0)/.45:mode==='form'?(e.gT||0)/.5:0;e.alpha=.28+.62*k;if(A.draw(run,c,e))return true}return drawGhost(run,c,e)}if(e.type==='bat')return drawBat(run,c,e);if(drawRigFoe(run,c,e))return true;if(e.minion&&e.spawnT>0){const k=clamp(1-e.spawnT/.9,0,1),sh=run.sheets.skeleton;if(sh){c.save();c.beginPath();c.rect(e.cx-60,e.floor-200,120,200);c.clip();sh.draw(c,sh.frame('idle',0),e.cx,e.floor+(1-k)*80,e.dir,{alpha:k});c.restore()}run.fx.glow(c,e.cx,e.floor-10,50,'rgba(98,240,168,',.6);return true}return false},
 drawProjectile(run,c,q){if(q.kind!=='orb')return;const t=run.time;run.fx.glow(c,0,0,30,'rgba(98,240,168,',.9);c.rotate(Math.atan2(q.vy,q.vx));c.fillStyle='rgba(98,240,168,.35)';c.beginPath();c.ellipse(-16,0,18,7,0,0,TAU);c.fill();c.rotate(-Math.atan2(q.vy,q.vx));
  c.fillStyle='#eafff4';c.beginPath();c.arc(0,0,10,0,TAU);c.fill();c.fillStyle='#0e2a20';c.beginPath();c.arc(-3.5,-2,2.6,0,TAU);c.arc(3.5,-2,2.6,0,TAU);c.fill();c.fillRect(-3,4,6,2);run.fx.glow(c,0,0,14,'rgba(200,255,235,',.6+.3*Math.sin(t*20))},
 /* -------- drawing */
 drawBackground(run,c){
  const W=E.W,cam=run.camera,cx=cam.x+W/2,zs=run.cfg.zones;
  const weights=zs.map(z=>clamp(1-Math.max(z.from-cx,cx-z.to,0)/700,0,1));
  const z0=zs[weights.indexOf(Math.max(...weights))].id,sk=SKY[z0];const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,sk[0]);sky.addColorStop(1,sk[1]);c.fillStyle=sky;c.fillRect(0,0,W,H);
  const ph=H*1.08,py=Math.round(H-ph+18-(cam.y-300)*.08);
  const plate=(im,alpha)=>{if(!im||alpha<=0)return;const pw=im.width*ph/im.height,ox=-((cam.x*.22)%(pw*2));c.save();c.globalAlpha=alpha;for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>W||x+pw<0)continue;if(k%2){c.save();c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph);c.restore()}else c.drawImage(im,x,py,pw,ph)}c.restore()};
  zs.forEach((z,i)=>{const w=weights[i];if(w<=0)return;plate(run.images[A5+PLATES[z.id]],w*(z.id==='shrine'?1:1))});
  if(run.dawnK>0)plate(run.images[A5+'plate-dawn.webp'],run.dawnK*weights[3]);
  const jw=weights[1],mid=run.images[A5+'mid-jungle.webp'];
  if(mid&&jw>.02){const mh=H*1.02,mw=mid.width*mh/mid.height,my=Math.round(H-mh+40-(cam.y-300)*.35),ox=-((cam.x*.5)%mw);c.save();c.globalAlpha=jw*.9;for(let x=ox-mw;x<W;x+=mw)c.drawImage(mid,x,my,mw,mh);c.restore()}
 },
 drawBack(run,c){
  const W=E.W,cam=run.camera,d=run.cfg.decor,t=run.time,vis=x=>x>cam.x-160&&x<cam.x+W+160;
  for(const[x,y]of d.trees)if(vis(x))drawTree(c,x,y,t);
  for(const[x,y]of d.totems)if(vis(x))drawFetish(run,c,x,y,t);
  // arena: cursed totem poles behind the altars, feeding the shield (phase 1)
  const a=run.cfg.arena,s=run.state;if(cam.x+W>a.x0-200){const b=run.boss;
   a.poles.forEach((x,i)=>{const gold=s.placed[i]||s.bossDefeated,im=run.images[A5+(gold?'totem-gold.png':'totem.png')];if(!im)return;const sc=.9,crumble=s.bossDefeated&&run.cine?clamp((run.cine.T-2.4)/1.2,0,1):s.bossDefeated?1:0;if(crumble>=1)return;
    c.save();c.globalAlpha=1-crumble;c.imageSmoothingEnabled=true;c.drawImage(im,x-ART.totem.a[0]*sc,a.floor-ART.totem.a[1]*sc+crumble*60,im.width*sc,im.height*sc);c.restore();
    for(const e of ART.totem.eyes)run.fx.glow(c,x+(e[0]-ART.totem.a[0])*sc,a.floor+(e[1]-ART.totem.a[1])*sc,10,gold?'rgba(255,220,120,':run.ward&&run.ward.i===i?'rgba(255,80,50,':'rgba(98,240,168,',.8);
    if(gold)run.fx.glow(c,x,a.floor-130,90,'rgba(255,214,120,',.35);
    if(!gold&&run.arena.active&&b.phase===1&&b.shield>0){c.save();c.strokeStyle='rgba(98,240,168,'+(.35+.2*Math.sin(t*6+i))+')';c.lineWidth=3;c.setLineDash([12,10]);c.lineDashOffset=-t*60;c.beginPath();c.moveTo(x,a.floor-ART.totem.a[1]*sc+30);c.quadraticCurveTo((x+b.x)/2,b.y-420,b.x,b.y-150);c.stroke();c.restore()}})}
 },
 drawMid(run,c){
  const W=E.W,cam=run.camera,d=run.cfg.decor,t=run.time,vis=x=>x>cam.x-160&&x<cam.x+W+160,cfg=run.cfg,s=run.state;
  for(const[x,y]of d.bones)if(vis(x))drawBones(c,x,y);
  for(const[x,y]of d.mushrooms)if(vis(x))drawMushroom(run,c,x,y,t);
  for(const[x,y]of d.torches)if(vis(x))drawTorch(run,c,x,y,t);
  for(const sp of cfg.spikes)if(vis(sp.x))drawSpikes(run,c,sp);
  for(const pd of run.pads)if(vis(pd.x))drawPad(run,c,pd,t);
  for(const q of cfg.quicksand)if(vis(q.x)){c.save();const g=c.createLinearGradient(0,700-6,0,700+30);g.addColorStop(0,'#8a6a3a');g.addColorStop(1,'#4a3418');c.fillStyle=g;c.beginPath();c.moveTo(q.x,702);for(let x=q.x;x<=q.x+q.w;x+=10)c.lineTo(x,698+Math.sin(x*.08+t*2)*3);c.lineTo(q.x+q.w,730);c.lineTo(q.x,730);c.fill();
   for(let i=0;i<4;i++){const bx=q.x+((i*53+t*20)%q.w),k=(t*1.3+i*.4)%1;c.strokeStyle='rgba(60,40,20,'+(1-k)+')';c.lineWidth=2;c.beginPath();c.ellipse(bx,702,4+k*14,2+k*3,0,0,TAU);c.stroke()}c.restore()}
  for(const gy of cfg.geysers)if(vis(gy.x))drawGeyser(run,c,gy,(run.spikeT+gy.offset)%gy.cycle);
  for(const g of run.gatesO)if(vis(g.x))drawGate(run,c,g,t);
  for(const i of run.idolsLeft)if(vis(i.x))drawIdol(run,c,i.x,i.y,t);
  // arena altars (with placed totems), the entry barrier and boss telegraphs on the floor
  const a=cfg.arena;if(cam.x+W>a.x0-200){const im=run.images[A5+'altar.png'];
   a.altars.forEach((x,i)=>{if(!im)return;const sc=.85;c.save();c.imageSmoothingEnabled=true;c.drawImage(im,x-ART.altar.a[0]*sc,a.floor-ART.altar.a[1]*sc,im.width*sc,im.height*sc);c.restore();
    const ty=a.floor-(ART.altar.a[1]-ART.altar.socket[1])*sc;
    if(s.placed[i]||s.bossDefeated){drawIdol(run,c,x,ty+4,t,1,false);run.fx.glow(c,x,ty-30,60,run.ward&&run.ward.i===i?'rgba(255,70,50,':'rgba(255,214,120,',.5)}
    else if(run.arena.active&&run.boss.phase===1){const k=.5+.5*Math.sin(t*4+i);run.fx.glow(c,x,ty,40,'rgba(255,214,120,',.25+.25*k);c.fillStyle='rgba(255,236,170,'+(.5+.4*k)+')';c.font='800 18px Arial';c.textAlign='center';c.fillText('▼',x,ty-30-k*6)}
    if(run.ward&&run.ward.i===i){c.save();c.strokeStyle='rgba(255,80,50,.8)';c.lineWidth=3;c.beginPath();c.ellipse(x,a.floor-60,70,90,0,0,TAU);c.stroke();for(let h=0;h<3;h++){c.fillStyle=h<run.ward.hits?'#ff6a4a':'#3a1a1a';c.beginPath();c.arc(x-16+h*16,a.floor-150,5,0,TAU);c.fill()}c.restore();
     const b=run.boss;c.save();c.strokeStyle='rgba(255,90,60,'+(.5+.3*Math.sin(t*10))+')';c.lineWidth=4;c.beginPath();c.moveTo(x,a.floor-100);c.quadraticCurveTo((x+b.x)/2,a.floor-320,b.x,a.floor-160-b.airY);c.stroke();c.restore()}});
   if(run.arena.gate>.02){const h=460*run.arena.gate,x=a.x0-15;c.save();c.globalAlpha=run.arena.gate;const g=c.createLinearGradient(x-40,0,x+40,0);g.addColorStop(0,'rgba(98,240,168,0)');g.addColorStop(.5,'rgba(98,240,168,.5)');g.addColorStop(1,'rgba(98,240,168,0)');c.fillStyle=g;c.fillRect(x-40,a.floor-h,80,h);c.restore()}
   for(const m of run.marks){const k=clamp(m.t/m.warn,0,1);if(!m.hit){c.save();c.strokeStyle='rgba(255,80,60,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(m.x,a.floor-2,m.r*k+8,10,0,0,TAU);c.stroke();c.globalAlpha=.25*k;c.fillStyle='#ff5a3c';c.fill();c.restore()}}
   for(const r of run.runeFx){if(r.t<r.warn){const k=r.t/r.warn;c.save();c.strokeStyle='rgba(98,240,168,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(r.x,a.floor-2,46,12,0,0,TAU);c.stroke();c.rotate(0);c.fillStyle='rgba(98,240,168,'+(.15+.25*k)+')';c.fill();c.font='800 16px Georgia';c.textAlign='center';c.fillStyle='rgba(200,255,235,'+k+')';c.fillText('ᛟ',r.x,a.floor-6);c.restore()}}
   for(const f of run.fires){const warn=f.t<f.warn,k=warn?f.t/f.warn:1-(f.t-f.warn)/.8;c.save();if(warn){c.fillStyle='rgba(255,90,40,'+(.12+.25*k)+')';c.fillRect(f.x0,a.floor-12,f.x1-f.x0,12)}c.restore()}}
 },
 drawActors(run,c){
  const a=run.cfg.arena,t=run.time,b=run.boss;
  if(run.arena.active||run.cine)b.draw(c);
  for(const m of run.marks)if(m.hit){const k=1-(m.t-m.warn)/.35;c.save();c.globalAlpha=k;c.strokeStyle='#e8fff4';c.lineWidth=5;c.beginPath();let x=m.x,y=a.floor-520;c.moveTo(x,y);while(y<a.floor){y+=40;x=m.x+(Math.random()-.5)*28;c.lineTo(x,y)}c.stroke();c.restore();run.fx.glow(c,m.x,a.floor-20,90*k,'rgba(98,240,168,',.8*k)}
  for(const r of run.runeFx)if(r.hit){const k=clamp(1-(r.t-r.warn)/.7,0,1),h=230*Math.min(1,(r.t-r.warn)/.12);const g=c.createLinearGradient(0,a.floor,0,a.floor-h);g.addColorStop(0,'rgba(220,255,240,.95)');g.addColorStop(.5,'rgba(98,240,168,.8)');g.addColorStop(1,'rgba(98,240,168,0)');c.save();c.globalAlpha=k;c.fillStyle=g;c.fillRect(r.x-30,a.floor-h,60,h);c.restore();run.fx.glow(c,r.x,a.floor-h/2,80,'rgba(98,240,168,',.6*k)}
  for(const f of run.fires)if(f.hit){const k=clamp(1-(f.t-f.warn)/.8,0,1);for(let x=f.x0+14;x<f.x1;x+=28){const h=(140+Math.sin(t*20+x)*30)*k;const g=c.createLinearGradient(0,a.floor,0,a.floor-h);g.addColorStop(0,'rgba(255,240,180,.95)');g.addColorStop(.5,'rgba(255,120,40,.8)');g.addColorStop(1,'rgba(255,60,20,0)');c.fillStyle=g;c.beginPath();c.moveTo(x-14,a.floor);c.quadraticCurveTo(x-6,a.floor-h*.6,x,a.floor-h);c.quadraticCurveTo(x+6,a.floor-h*.6,x+14,a.floor);c.fill()}run.fx.glow(c,(f.x0+f.x1)/2,a.floor-60,140*k,'rgba(255,120,40,',.6*k)}
  if(b.beamX!=null||b.state==='beamWarn'){const g=a.floor;if(b.state==='beamWarn'){const k=1-b.t;c.save();c.strokeStyle='rgba(255,70,50,'+(.3+.5*k)+')';c.lineWidth=3;c.setLineDash([14,10]);c.beginPath();c.moveTo(a.x0,g-30);c.lineTo(a.x1,g-30);c.stroke();c.restore()}
   else{const x=b.beamX;c.save();const gr=c.createLinearGradient(0,g-60,0,g);gr.addColorStop(0,'rgba(98,240,168,0)');gr.addColorStop(.5,'rgba(200,255,235,.95)');gr.addColorStop(1,'rgba(98,240,168,0)');c.fillStyle=gr;const from=b.beamDir>0?a.x0:x,to=b.beamDir>0?x:a.x1;c.globalAlpha=.25;c.fillRect(from,g-58,to-from,56);c.globalAlpha=1;c.fillRect(x-36,g-58,72,56);c.restore();run.fx.glow(c,x,g-30,90,'rgba(98,240,168,',.9);
    c.strokeStyle='rgba(200,255,235,.8)';c.lineWidth=3;c.beginPath();c.moveTo(b.orbPos?.x??b.x,b.orbPos?.y??g-300);c.lineTo(x,g-30);c.stroke()}}
  for(const bm of run.beams){const k=1-bm.t/bm.dur,b2=run.boss;c.save();c.globalAlpha=k;c.strokeStyle=bm.gold?'rgba(255,230,150,.95)':'rgba(98,240,168,.9)';c.lineWidth=8*k+2;c.beginPath();c.moveTo(bm.x,bm.y);c.quadraticCurveTo((bm.x+b2.x)/2,bm.y-260,b2.x,(b2.phase===1?b2.y-140:b2.floor-160));c.stroke();c.restore()}
 },
 drawFront(run,c){
  const W=E.W,cam=run.camera,t=run.time,p=run.p;
  for(const pt of run.cfg.pits){if(pt.x+pt.w<cam.x-20||pt.x>cam.x+W+20)continue;
   if(pt.kind==='lava'){const y=780;c.save();const g=c.createLinearGradient(0,y-6,0,y+260);g.addColorStop(0,'#ffe080');g.addColorStop(.08,'#ff8a20');g.addColorStop(.4,'#b8300c');g.addColorStop(1,'#3a0804');c.fillStyle=g;c.beginPath();c.moveTo(pt.x,y+300);for(let x=pt.x;x<=pt.x+pt.w;x+=10)c.lineTo(x,y+Math.sin(x*.03+t*1.5)*4);c.lineTo(pt.x+pt.w,y+300);c.fill();
    c.globalCompositeOperation='lighter';for(let i=0;i<10;i++){const bx=pt.x+((i*97+t*30)%pt.w);c.fillStyle='rgba(255,200,90,.35)';c.fillRect(bx,y+6+(i%3)*14,22,3)}c.restore();run.fx.glow(c,pt.x+pt.w/2,y-30,Math.min(320,pt.w*.6),'rgba(255,110,30,',.5)}
   else if(pt.kind==='sea'){const y=772;c.save();c.fillStyle='rgba(30,14,40,.85)';c.beginPath();c.moveTo(pt.x,y+300);for(let x=pt.x;x<=pt.x+pt.w;x+=8)c.lineTo(x,y+Math.sin(x*.05+t*2)*3);c.lineTo(pt.x+pt.w,y+300);c.fill();c.strokeStyle='rgba(255,200,170,.5)';c.lineWidth=2;c.beginPath();for(let x=pt.x;x<=pt.x+pt.w;x+=8){const yy=y+Math.sin(x*.05+t*2)*3;x===pt.x?c.moveTo(x,yy):c.lineTo(x,yy)}c.stroke();c.restore()}
   else{const g=c.createLinearGradient(0,700,0,1000);g.addColorStop(0,'rgba(6,14,12,.0)');g.addColorStop(.3,'rgba(6,14,12,.85)');g.addColorStop(1,'rgba(2,6,6,1)');c.fillStyle=g;c.fillRect(pt.x,700,pt.w,400);for(let i=0;i<3;i++){c.fillStyle='rgba(140,200,180,.08)';c.beginPath();c.ellipse(pt.x+pt.w/2+Math.sin(t*.5+i)*40,800+i*30,pt.w*.5,20,0,0,TAU);c.fill()}}}
  // sinking into quicksand: sand climbs over the hero's boots
  if(run.sinkT>.05&&!p.dead){const k=Math.min(1,run.sinkT/1.6),h=10+k*44;c.save();const g=c.createLinearGradient(0,p.y+p.h-h,0,p.y+p.h);g.addColorStop(0,'rgba(140,104,60,.0)');g.addColorStop(.3,'rgba(140,104,60,.95)');g.addColorStop(1,'#6a4a24');c.fillStyle=g;c.beginPath();c.ellipse(p.x+p.w/2,p.y+p.h,40,h,0,Math.PI,0);c.fill();c.restore()}
 },
 drawLighting(run,c){
  const W=E.W,cam=run.camera,t=run.time,p=run.p,zs=run.cfg.zones,cx=cam.x+W/2,cfg=run.cfg;
  let dark=0;zs.forEach(z=>{const w=clamp(1-Math.max(z.from-cx,cx-z.to,0)/700,0,1);dark=Math.max(dark,w*DARK[z.id])});dark*=1-run.dawnK*.9;
  const lb=run.lightBuf,q=4,lw=Math.ceil(W/q),lh=Math.ceil(H/q);if(lb.width!==lw){lb.width=lw;lb.height=lh}
  const x=lb.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(6,4,18,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
  const hole=(wx,wy,r,a)=>{const sx=(wx-cam.x)/q,sy=(wy-cam.y)/q,rr=r/q;if(sx<-rr||sx>lw+rr||sy<-rr||sy>lh+rr)return;const g=x.createRadialGradient(sx,sy,0,sx,sy,rr);g.addColorStop(0,'rgba(0,0,0,'+a+')');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(sx-rr,sy-rr,rr*2,rr*2)};
  for(const[tx,ty]of cfg.decor.torches)hole(tx,ty-108,230+Math.sin(t*9+tx)*6,.9);
  for(const[mx,my]of cfg.decor.mushrooms)hole(mx,my-20,140,.6);
  for(const i of run.idolsLeft)hole(i.x,i.y-40,180,.8);
  for(const g of run.gatesO)if(g.open<1)hole(g.x,g.y-200,220,.7);
  for(const gy of cfg.geysers){const ph=(run.spikeT+gy.offset)%gy.cycle;if(ph<gy.up||ph>gy.cycle-gy.warn)hole(gy.x,gy.y-120,260,.9)}
  for(const pt of cfg.pits)if(pt.kind==='lava')for(let lx=pt.x+60;lx<pt.x+pt.w;lx+=160)hole(lx,760,240,.85);
  hole(p.x+p.w/2,p.y+p.h*.4,210,.55);
  const b=run.boss;if(run.arena.active||run.cine){if(b.orbPos)hole(b.orbPos.x,b.orbPos.y,220,.8);hole(b.x,b.y-150,260,.5);for(const r of run.runeFx)if(r.hit)hole(r.x,cfg.arena.floor-100,200,1);for(const m of run.marks)if(m.hit)hole(m.x,cfg.arena.floor-200,260,1)}
  for(const qq of run.projectiles)if(qq.kind==='orb')hole(qq.x,qq.y,120,.8);
  c.save();c.imageSmoothingEnabled=true;c.drawImage(lb,0,0,W,H);c.restore();
  // colour grade: cursed green in the shrine, golden dawn after victory
  const sw=clamp(1-Math.max(zs[3].from-cx,0)/700,0,1);
  if(sw>0&&run.dawnK<1){c.save();c.globalCompositeOperation='soft-light';c.fillStyle='rgba(60,255,170,'+(.18*sw*(1-run.dawnK))+')';c.fillRect(0,0,W,H);c.restore()}
  if(run.dawnK>0){c.save();c.globalCompositeOperation='soft-light';c.fillStyle='rgba(255,200,120,'+(.35*run.dawnK)+')';c.fillRect(0,0,W,H);c.restore()}
  // drifting spores / embers
  if(!run.fx.reduced){const z=def.zone(run).id;c.save();c.globalCompositeOperation='lighter';c.fillStyle=z==='cliffs'?'rgba(255,150,60,.6)':run.dawnK>.5?'rgba(255,240,200,.6)':'rgba(150,255,210,.45)';for(const m of run.motes){const mx=(((m.x-cam.x*m.s*.3+t*12*m.s)%W)+W)%W,my=(((m.y+(z==='cliffs'?-t*30*m.s:Math.sin(t*.7+m.x)*14)-cam.y*m.s*.2)%H)+H)%H;c.fillRect(mx,my,2,2)}c.restore()}
  const v=c.createRadialGradient(W/2,H/2,H*.45,W/2,H/2,H);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,4,14,.42)');c.fillStyle=v;c.fillRect(0,0,W,H);
  if(run.flashT>0){c.fillStyle='rgba(230,255,245,'+(run.flashT*1.2)+')';c.fillRect(0,0,W,H)}
  if(run.cine?.white>0){c.fillStyle='rgba(255,252,235,'+run.cine.white+')';c.fillRect(0,0,W,H)}
  if(run.phase==='complete'&&run.celebrate>0)for(let i=0;i<4;i++)run.fx.cap(run.fx.parts,{x:cam.x+Math.random()*W,y:cam.y-10,vx:(Math.random()-.5)*60,vy:60+Math.random()*80,g:120,life:2,max:2,size:4,color:['#ffd36b','#7dfbe0','#ff7d6b','#ffffff'][i]},160);
 },
 drawHud(run,c){
  const W=E.W,s=run.state,b=run.boss,t=run.time;
  // ancestor totems carried / placed
  if(!run.cine){const im=run.images[A5+'idol.png'];for(let i=0;i<3;i++){const x=22+i*34,y=100,have=i<s.idols.length,used=i<s.placed.filter(Boolean).length;c.save();c.fillStyle='rgba(10,18,32,.72)';c.beginPath();c.roundRect(x-2,y-2,30,38,8);c.fill();c.globalAlpha=have?(used?.4:1):.22;if(im){c.imageSmoothingEnabled=true;c.drawImage(im,x+1,y,24,im.height*24/im.width)}c.restore()}}
  // boss bar
  if(def.bossHud(run)){const {x,y,w}=bossHudBox(W);
   // Use the vacant enemy-panel slot: keep the floating shaman, objective and touch pause button unobstructed.
   run.panel(c,x-10,y-8,w+20,60);c.textAlign='left';c.font='800 13px Georgia, serif';c.fillStyle='#ffffff';c.fillText(text(run.lang,'boss'),x,y+12,152);
   for(let i=0;i<3;i++){c.fillStyle=i<b.phase?(b.phase===3?'#ff7a4a':'#7dfbe0'):'#3a4050';c.beginPath();c.arc(x+166+i*14,y+7,5,0,TAU);c.fill()}
   c.textAlign='right';c.fillStyle='#ffd36b';
   if(b.phase===1){c.fillText(text(run.lang,'shield')+' '+b.shield+'/3',x+w,y+29);run.bar(c,x,y+36,w,12,b.shield/3,'#9ffbe6','#2a8a78',false)}
   else{c.fillText(Math.ceil(b.hp)+'/'+b.max,x+w,y+29);run.bar(c,x,y+36,w,12,b.hp/b.max,b.phase===3?'#ff9f43':'#5ef0d0',b.phase===3?'#a3460f':'#1f8a78',true);c.fillStyle='#ffffffaa';c.fillRect(x+w*b.cfg.rageAt/b.max-1,y+34,2,16);if(run.ward){c.fillStyle='rgba(255,90,60,.35)';c.fillRect(x,y+36,w,12)}}}
  // banners
  if(run.banner.t>0&&!run.cine?.stage?.startsWith('story')){const k=Math.min(1,run.banner.t,4.5-run.banner.t+.001);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=run.banner.small?150:190;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(10,24,40,.85)';c.beginPath();c.roundRect(W/2-bw/2,y-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#8fe0c8';c.lineWidth=2;c.stroke();
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';c.fillStyle='#e6fff6';c.fillText(run.banner.text,W/2,y+(run.banner.small?-5:6));c.restore()}
  if(run.cine)def.drawCine(run,c);
 },
 /* -------- victory: cinematic + story scene */
 beginVictory(run){
  const b=run.boss,s=run.state,p=run.p;if(run.cine)return;
  s.bossDefeated=true;b.state='dying';b.deadT=0;b.beamX=null;run.ward=null;run.marks=[];run.runeFx=[];run.fires=[];run.projectiles=[];
  for(const e of run.enemies)if(e.minion&&!e.dead)e.die(1);
  run.cine={stage:'dying',t:0,T:0,white:0,letter:0,line:0,chars:0};run.clearInputs();if(run.controls)run.controls.hidden=true;p.inv=99;
  run.audio.stopMusic(.6);run.audio.play('bossDie',{vol:1});run.audio.play('roar',{vol:.9,rate:.7});run.camera.shake=14;run.hitStop(.25);run.save()},
 updateCine(run,dt){
  const cn=run.cine,p=run.p,b=run.boss,a=run.cfg.arena;cn.t+=dt;cn.T+=dt;p.inv=Math.max(p.inv,2);
  const keepInputs=cn.stage==='walk';if(!keepInputs){run.inputs.clear();run.axis=0}
  if(run.arena.active)b.update(dt);
  if(cn.stage==='dying'){if(Math.random()<.5)run.fx.cap(run.fx.parts,{x:b.x+(Math.random()-.5)*120,y:b.y-60-Math.random()*200,vx:(Math.random()-.5)*40,vy:-120-Math.random()*120,g:-40,life:1.2,max:1.2,size:4,color:'rgba(160,255,220,.8)',soft:true},160);
   if(cn.t>2.6){cn.stage='lift';cn.t=0;cn.white=1;run.audio.play('curseLifted',{vol:1});run.audio.play('shieldBreak',{vol:1,rate:.7});run.camera.shake=10;run.fx.burst(b.x,b.y-150,'#fff4c0',60,2);b.state='dead';def.music(run);run.banner={t:3.2,text:text(run.lang,'lifted')}}return}
  cn.white=Math.max(0,cn.white-dt*.8);
  if(cn.stage==='lift'){run.dawnK=Math.min(1,run.dawnK+dt/2.6);if(cn.t>3.0){cn.stage='walk';cn.t=0}return}
  if(cn.stage==='walk'){const tx=a.center,dx=tx-(p.x+p.w/2);if(Math.abs(dx)>24&&cn.t<4){run.axis=Math.sign(dx)*.8;p.dir=Math.sign(dx)}else{run.axis=0;p.vx=0;if(p.ground){cn.stage='leap';cn.t=0;p.vy=-660;p.ground=false;p.platform=null;cn.heroPose='spin';run.audio.play('jump2',{vol:.8});run.audio.play('swing3',{vol:.8,rate:.9})}}return}
  if(cn.stage==='leap'){if(cn.t>.25&&p.ground){cn.stage='pose';cn.t=0;cn.heroPose='pose';run.camera.shake=8;run.audio.play('victory',{vol:1});run.audio.play('land',{vol:.8});
    run.fx.ring(p.x+p.w/2,p.y+p.h-10,'rgba(255,220,120,.95)',20,.8);run.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ffe27a',50,1.8);run.fx.text(text(run.lang,'victory'),p.x+p.w/2,p.y-60,'#ffe27a',true)}return}
  if(cn.stage==='pose'){if(Math.random()<.4)run.fx.cap(run.fx.parts,{x:p.x+p.w/2+(Math.random()-.5)*60,y:p.y+p.h,vx:(Math.random()-.5)*30,vy:-200-Math.random()*160,g:-30,life:1.1,max:1.1,size:3,color:'rgba(255,236,170,.9)'},160);if(cn.t>2.2)def.startStory(run);return}
  if(cn.stage==='story'){cn.letter=Math.min(1,cn.letter+dt*2.5);const line=def.lines(run)[cn.line];cn.chars=Math.min(line.text.length,cn.chars+dt*42);cn.lineT=(cn.lineT||0)+dt;
   if(run.attackPress||run.jumpBuffer>0){run.attackPress=false;run.jumpBuffer=0;def.advance(run)}
   if(cn.chars>=line.text.length&&cn.lineT>line.text.length/42+3.2)def.advance(run);return}
  if(cn.stage==='outro'){cn.letter=Math.max(0,cn.letter-dt*2.2);if(cn.letter<=0&&run.phase==='play'){if(run.skipBtn)run.skipBtn.style.display='none';run.cine=null;run.enemies=run.enemies.filter(e=>!e.minion);for(const k of[...run.killed])if(String(k).startsWith('m'))run.killed.delete(k);
    run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length})}}
 },
 lines(run){const t=k=>text(run.lang,k);return[{who:'shaman',name:t('s1n'),text:t('s1')},{who:'hero',name:t('s2n'),text:t('s2')},{who:'',name:t('s3n'),text:t('s3')},{who:'hero',name:t('s4n'),text:t('s4')}]},
 startStory(run){const was=run.cine;if(!was){const a=run.cfg.arena,p=run.p;p.x=a.center-p.w/2-120;p.y=a.floor-p.h;p.vx=p.vy=0;p.dir=1;run.arena.active=true;run.enemies=run.enemies.filter(e=>e.cx<a.x0-900);run.camera.x=clamp(a.center-E.W/2,0,run.world.width-E.W);run.camera.y=a.floor-H*.84}run.cine={...(was||{}),stage:'story',t:0,T:was?.T||9,white:0,letter:0,line:0,chars:0,lineT:0,heroPose:'pose'};run.dawnK=1;run.boss.state='dead';run.clearInputs();if(run.controls)run.controls.hidden=true;if(run.skipBtn)run.skipBtn.style.display='block';run.p.inv=99;def.music(run)},
 advance(run){const cn=run.cine;if(!cn||cn.stage!=='story')return;const lines=def.lines(run),line=lines[cn.line];if(cn.chars<line.text.length){cn.chars=line.text.length;return}cn.line++;cn.chars=0;cn.lineT=0;run.audio.play('coin',{vol:.3,rate:.7});if(cn.line>=lines.length)def.skipStory(run)},
 skipStory(run){const cn=run.cine;if(!cn)return;cn.stage='outro';cn.line=Math.min(cn.line,def.lines(run).length-1);if(run.skipBtn)run.skipBtn.style.display='none'},
 drawCineHero(run,c,p,base){
  const cn=run.cine;if(cn.heroPose==='spin'){const k=clamp(cn.t/.7,0,1),cx=p.x+p.w/2,cy=p.y+p.h*.5;c.save();c.translate(cx,cy);c.rotate(p.dir*k*TAU);c.translate(-cx,-cy);base(c,{...p,anim:'jump'},run);c.restore();run.fx.glow(c,cx,cy,70,'rgba(255,220,120,',.5);return}
  // victory pose: sword strike held high in a pillar of golden light
  const cx=p.x+p.w/2,t=run.time;c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(cx-60,0,cx+60,0);g.addColorStop(0,'rgba(255,220,120,0)');g.addColorStop(.5,'rgba(255,220,120,'+(.22+.08*Math.sin(t*4))+')');g.addColorStop(1,'rgba(255,220,120,0)');c.fillStyle=g;c.fillRect(cx-60,p.y-400,120,400+p.h);c.restore();
  run.fx.glow(c,cx,p.y+p.h*.4,110,'rgba(255,220,120,',.45);base(c,{...p,anim:'attackC',attack:0,dir:p.dir},run)},
 drawCine(run,c){
  const W=E.W,cn=run.cine,hs=run.hudScale||1;const bars=cn.stage==='story'||cn.stage==='outro'?cn.letter:0;if(bars<=0)return;
  const bh=96*bars;c.fillStyle='#000';c.fillRect(0,0,W,bh);c.fillRect(0,H/hs-bh,W,bh);
  if(cn.stage!=='story')return;const lines=def.lines(run),line=lines[Math.min(cn.line,lines.length-1)],shown=line.text.slice(0,Math.floor(cn.chars));
  const pw=Math.min(W-40,760),px=W/2-pw/2,py=bh+14;   // under the top letterbox, so the hero stays in view
  c.save();c.globalAlpha=bars;c.fillStyle='rgba(10,18,32,.9)';c.strokeStyle='#d2a653';c.lineWidth=2;c.beginPath();c.roundRect(px,py,pw,118,16);c.fill();c.stroke();
  let tx=px+22;if(line.who){c.save();c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.clip();c.fillStyle=line.who==='hero'?'#22344a':'#1a2a24';c.fillRect(px+14,py+14,90,90);
   if(line.who==='hero'&&run.skin)run.skin.drawPortrait(c,px+14,py+14,90,90);else if(line.who==='shaman'&&run.shamanImg){c.globalAlpha=bars*.85;c.imageSmoothingEnabled=true;c.drawImage(run.shamanImg.head,px+10,py+4,100,94);run.fx.glow(c,px+59,py+58,40,'rgba(160,255,220,',.4)}c.restore();
   c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.stroke();tx=px+120}
  c.textAlign='left';if(line.name){c.font='800 17px Georgia, serif';c.fillStyle='#ffd98a';c.fillText(line.name,tx,py+32)}
  c.font='600 17px Arial, sans-serif';c.fillStyle='#eef6f8';const maxw=px+pw-tx-20;const words=shown.split(' ');let ln='',y=py+(line.name?58:44);for(const w of words){const test=ln?ln+' '+w:w;if(c.measureText(test).width>maxw&&ln){c.fillText(ln,tx,y);ln=w;y+=24}else ln=test}c.fillText(ln,tx,y);
  if(cn.chars>=line.text.length){c.font='700 13px Arial';c.fillStyle='rgba(255,227,160,'+(.5+.5*Math.sin(run.time*5))+')';c.textAlign='right';c.fillText('▶ '+text(run.lang,'tap'),px+pw-16,py+108)}
  c.restore()}
};
E.register(def);
window.PirateLevel05={def,text,Shaman,launch:opts=>E.launch(5,opts)};
})();
