/* Pirate Strike — Level 1: Haven Bay, a hand-painted tropical smuggler harbour.
 * Five connected areas (Smugglers' Landing → Coastal Village → Ship Graveyard → Smugglers' Caves →
 * Dockmaster's Fortress) on the PirateLevelEngine. Level systems: village ambush with barricades,
 * breakable boarded door and secret vault wall, breakable cargo crates, powder barrels (strike to
 * light, strike again to kick, shoot to detonate), telegraphed cannon fire, falling stalactites and a
 * two-phase Dockmaster with super-armour, powder kegs that can be knocked back and a cannon barrage. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E,TAU=Math.PI*2;
const BASE='adventure/levels/',ART=BASE+'assets/level-01/',L4=BASE+'assets/level-04/',SPRITES=BASE+'assets/enemies/level01-illustrated/';
const PLATES=['strand','quay','village','graveyard','caves','fortress'];
const TERRAIN={strand:'terrain-strand.webp',quay:'terrain-quay.webp','channel-west':'terrain-channel-west.webp'};
const FACES={street:'face-cobble.webp',hull:'face-hull.webp',cave:'face-cave.webp',ceiling:'face-ceiling.webp',fortress:'face-fortress.webp',house:'face-plaster.webp'};
const PROPS=['cap-roof.webp','prop-powder.webp','prop-crate.webp','prop-cannon.webp','prop-stalactite.webp','prop-crackwall.webp','prop-boards.webp','facade-a.webp','facade-b.webp','facade-c.webp'];
const LEDGES=Object.fromEntries(['cliff','ruin','dock'].map(type=>[type,Array.from({length:4},(_,i)=>'ledge-'+type+'-'+i+'.webp')]));
// Extra sound effects reused from other levels' generated audio (no new recordings).
const SFX={shellWhistle:'level-07/sfx-shellWhistle.ogg',shellBoom:'level-07/sfx-shellBoom.ogg',fuse:'level-09/sfx-fuse.ogg',blast:'level-09/sfx-blast.ogg',cannon:'level-09/sfx-cannon.ogg',warcry:'level-09/sfx-warcry.ogg',horn:'level-09/sfx-horn.ogg',portcullis:'level-09/sfx-portcullis.ogg',creak:'level-06/sfx-creak.ogg',drip:'level-07/sfx-drip.ogg',chop:'level-09/sfx-chop.ogg'};
const L={
 en:{title:"Level 1 · Haven Bay — Smugglers' Landing",blurb:'A sunlit harbour town, a ship graveyard, smugglers’ caves and the Dockmaster’s fortress',
  harbor:'Smugglers’ Landing',village:'Coastal Village',graveyard:'Ship Graveyard',caves:'Smugglers’ Caves',fortress:'Dockmaster’s Fortress',
  objharbor:'Cross the docks — the upper planks hide treasure',objvillage:'Reach the shore through the streets or over the rooftops',objgraveyard:'Cross the wrecks before the warship’s guns find you',objcaves:'Find the way through the smugglers’ caves',objfortress:'Storm the fortress and face the Dockmaster',
  awake:'THE DOCKMASTER ARRIVES',defeated:'The Dockmaster falls — the bay is free!',phase2:'“ALL GUNS — FIRE ON HER!”',
  hint1:'Jump and dash across gaps; the upper ledges hide treasure',hint2:'Face an enemy and tap BLOCK just before a hit to parry',hint3:'Cutthroats strike fast, Brawlers lunge, Gunners aim first — watch the tells',
  hintRoof:'Rooftops and washing lines form a second route through town',hintDoor:'The boarded door won’t hold — hit it three times, or climb over the roof',
  hintPowder:'Powder barrel! Strike it to light the fuse, strike again to kick it — or shoot it',hintAmbush:'AMBUSH! The square is barricaded',ambushClear:'The square is clear',wave:'Wave',
  hintPlanks:'Rotten planks give way under your feet — keep moving',hintCannon:'Cannon fire! Get out of the red circles',hintCave:'Mind the stalactites when the rock shudders',
  hintCrack:'That crack sounds hollow…',secret:'A hidden vault!',hintBoss:'Watch the Dockmaster’s raised blade — dodge, then punish',hintKeg:'Knock his powder kegs back at him!',
  dockmaster:'The Dockmaster',levelWord:'Level'},
 az:{title:'Səviyyə 1 · Sığınacaq Körfəzi — Qaçaqmalçı Limanı',blurb:'Günəşli liman şəhəri, gəmi qəbiristanlığı, qaçaqmalçı mağaraları və Liman Ağasının qalası',
  harbor:'Qaçaqmalçı Limanı',village:'Sahil Kəndi',graveyard:'Gəmi Qəbiristanlığı',caves:'Qaçaqmalçı Mağaraları',fortress:'Liman Ağasının Qalası',
  objharbor:'Limanı keç — yuxarı taxtalarda xəzinə var',objvillage:'Sahilə küçələrdən və ya damların üstündən çat',objgraveyard:'Döyüş gəmisinin topları səni tapmadan batıq gəmiləri keç',objcaves:'Qaçaqmalçı mağaralarından yol tap',objfortress:'Qalaya hücum et və Liman Ağası ilə üzləş',
  awake:'LİMAN AĞASI GƏLİR',defeated:'Liman Ağası yıxıldı — körfəz azaddır!',phase2:'“BÜTÜN TOPLAR — ATƏŞ!”',
  hint1:'Boşluqlardan tullan və yayın; yuxarıda xəzinə var',hint2:'Düşmənə dön və zərbədən bir an əvvəl BLOK bas',hint3:'Qılınclılar sürətli, davakarlar hücumla, atıcılar nişan alaraq vurur — işarələrə bax',
  hintRoof:'Damlar və paltar ipləri şəhərdə ikinci yoldur',hintDoor:'Taxtalı qapı dözməz — üç dəfə vur, ya da damdan keç',
  hintPowder:'Barıt çəlləyi! Vur — fitil yansın, yenə vur — təpiklə, ya da güllə ilə partlat',hintAmbush:'PUSQU! Meydan bağlandı',ambushClear:'Meydan təmizdir',wave:'Dalğa',
  hintPlanks:'Çürük taxtalar ayağının altında çökür — dayanma',hintCannon:'Top atəşi! Qırmızı dairələrdən çıx',hintCave:'Qaya titrəyəndə stalaktitlərə diqqət et',
  hintCrack:'Bu çat boş səslənir…',secret:'Gizli xəzinə otağı!',hintBoss:'Liman Ağasının qaldırılmış qılıncına bax — qaç, sonra vur',hintKeg:'Barıt çəlləklərini ona tərəf geri vur!',
  dockmaster:'Liman Ağası',levelWord:'Səviyyə'},
 tr:{title:'Bölüm 1 · Sığınak Koyu — Kaçakçı İskelesi',blurb:'Güneşli liman kasabası, gemi mezarlığı, kaçakçı mağaraları ve Liman Ustasının kalesi',
  harbor:'Kaçakçı İskelesi',village:'Sahil Köyü',graveyard:'Gemi Mezarlığı',caves:'Kaçakçı Mağaraları',fortress:'Liman Ustasının Kalesi',
  objharbor:'İskeleyi geç — üst kalaslarda hazine var',objvillage:'Kıyıya sokaklardan ya da çatıların üstünden ulaş',objgraveyard:'Savaş gemisinin topları seni bulmadan enkazları geç',objcaves:'Kaçakçı mağaralarından yolu bul',objfortress:'Kaleye saldır ve Liman Ustasıyla yüzleş',
  awake:'LİMAN USTASI GELİYOR',defeated:'Liman Ustası düştü — koy özgür!',phase2:'“BÜTÜN TOPLAR — ATEŞ!”',
  hint1:'Boşluklardan zıpla ve atıl; üst teraslarda hazine var',hint2:'Düşmana dön ve darbeden hemen önce BLOK’a bas',hint3:'Kılıççılar hızlı, kavgacılar atılarak, nişancılar nişan alarak vurur — işaretleri izle',
  hintRoof:'Çatılar ve çamaşır ipleri kasabada ikinci bir yol',hintDoor:'Tahtalı kapı dayanmaz — üç kez vur ya da çatıdan geç',
  hintPowder:'Barut fıçısı! Vur, fitil yansın; tekrar vur, tekmele — ya da ateş et',hintAmbush:'PUSU! Meydan kapatıldı',ambushClear:'Meydan temiz',wave:'Dalga',
  hintPlanks:'Çürük kalaslar çöküyor — durma',hintCannon:'Top ateşi! Kırmızı dairelerden çık',hintCave:'Kaya titrediğinde sarkıtlara dikkat et',
  hintCrack:'Bu çatlak boş ses veriyor…',secret:'Gizli hazine odası!',hintBoss:'Liman Ustasının kalkan kılıcını izle — kaç, sonra vur',hintKeg:'Barut fıçılarını ona geri vur!',
  dockmaster:'Liman Ustası',levelWord:'Bölüm'},
 ru:{title:'Уровень 1 · Тихая бухта — Пристань контрабандистов',blurb:'Солнечный портовый городок, кладбище кораблей, пещеры контрабандистов и крепость Смотрителя',
  harbor:'Пристань контрабандистов',village:'Прибрежная деревня',graveyard:'Кладбище кораблей',caves:'Пещеры контрабандистов',fortress:'Крепость Смотрителя',
  objharbor:'Пересеките причалы — наверху спрятаны сокровища',objvillage:'Доберитесь до берега по улицам или по крышам',objgraveyard:'Пройдите по обломкам, пока пушки фрегата не пристрелялись',objcaves:'Найдите путь через пещеры контрабандистов',objfortress:'Штурмуйте крепость и сразитесь со Смотрителем',
  awake:'СМОТРИТЕЛЬ ПРИБЫЛ',defeated:'Смотритель повержен — бухта свободна!',phase2:'«ВСЕ ПУШКИ — ОГОНЬ ПО НЕЙ!»',
  hint1:'Прыгайте и делайте рывок через разрывы; сокровища наверху',hint2:'Повернитесь к врагу и нажмите БЛОК перед ударом — это парирование',hint3:'Рубаки бьют быстро, громилы бросаются, стрелки сначала целятся — следите за сигналами',
  hintRoof:'Крыши и бельевые верёвки — второй путь через город',hintDoor:'Заколоченная дверь не выдержит — три удара, или пройдите по крыше',
  hintPowder:'Пороховая бочка! Удар — фитиль горит, ещё удар — пинок, или выстрелите',hintAmbush:'ЗАСАДА! Площадь перекрыта',ambushClear:'Площадь зачищена',wave:'Волна',
  hintPlanks:'Гнилые доски проваливаются — не останавливайтесь',hintCannon:'Пушечный огонь! Уходите из красных кругов',hintCave:'Когда скала дрожит — берегитесь сталактитов',
  hintCrack:'Эта трещина звучит пусто…',secret:'Тайная сокровищница!',hintBoss:'Следите за поднятым клинком Смотрителя — уклонитесь и контратакуйте',hintKeg:'Отбивайте его пороховые бочки обратно!',
  dockmaster:'Смотритель',levelWord:'Уровень'},
 pl:{title:'Poziom 1 · Zatoka Przystani — Przystań Przemytników',blurb:'Słoneczne portowe miasteczko, cmentarzysko statków, jaskinie przemytników i forteca Zarządcy',
  harbor:'Przystań Przemytników',village:'Nadmorska Wioska',graveyard:'Cmentarzysko Statków',caves:'Jaskinie Przemytników',fortress:'Forteca Zarządcy',
  objharbor:'Przejdź przez doki — na górnych deskach są skarby',objvillage:'Dotrzyj do brzegu ulicami albo po dachach',objgraveyard:'Przejdź po wrakach, zanim działa okrętu cię namierzą',objcaves:'Znajdź drogę przez jaskinie przemytników',objfortress:'Zdobądź fortecę i zmierz się z Zarządcą',
  awake:'ZARZĄDCA NADCHODZI',defeated:'Zarządca upadł — zatoka jest wolna!',phase2:'„WSZYSTKIE DZIAŁA — OGNIA!”',
  hint1:'Skacz i wykonuj zryw nad przepaściami; skarby są na górze',hint2:'Stań twarzą do wroga i wciśnij BLOK tuż przed ciosem, by sparować',hint3:'Rębajły tną szybko, zabijaki szarżują, strzelcy najpierw celują — obserwuj sygnały',
  hintRoof:'Dachy i sznury na pranie to druga droga przez miasto',hintDoor:'Zabite deskami drzwi nie wytrzymają — trzy ciosy albo przejdź po dachu',
  hintPowder:'Beczka prochu! Uderz, by zapalić lont, uderz znów, by ją kopnąć — albo strzel',hintAmbush:'ZASADZKA! Plac zabarykadowany',ambushClear:'Plac oczyszczony',wave:'Fala',
  hintPlanks:'Zgniłe deski się zapadają — nie zatrzymuj się',hintCannon:'Ogień z dział! Uciekaj z czerwonych kręgów',hintCave:'Gdy skała drży, uważaj na stalaktyty',
  hintCrack:'Ta szczelina brzmi pusto…',secret:'Ukryty skarbiec!',hintBoss:'Patrz na uniesione ostrze Zarządcy — unikaj, potem kontruj',hintKeg:'Odbijaj jego beczki z prochem z powrotem!',
  dockmaster:'Zarządca',levelWord:'Poziom'}
};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k];

Object.assign(E.ENEMY,{
 crab:{hp:82,w:42,h:88,speed:44,chase:92,sight:300,gold:4,flesh:true,name:{en:'Harbour Brawler',az:'Liman Davakarı',tr:'Liman Kavgacısı',ru:'Портовый громила',pl:'Portowy zabijaka'}},
 ranged:{hp:54,w:38,h:92,speed:0,chase:0,sight:600,gold:4,flesh:true,name:{en:'Harbour Lookout',az:'Liman Gözətçisi',tr:'Liman Gözcüsü',ru:'Портовый дозорный',pl:'Portowy wartownik'}},
 dockmaster:{hp:360,w:62,h:126,speed:38,chase:70,sight:460,gold:18,flesh:true,name:{en:'The Dockmaster',az:'Liman Ağası',tr:'Liman Ustası',ru:'Смотритель порта',pl:'Zarządca portu'}}
});
// Level 1 names for the shared kit (Cutthroat / Powder Gunner) without changing other levels' text.
const NAMES={pirate:{en:'Pirate Cutthroat',az:'Pirat Qılınclı',tr:'Korsan Kılıççı',ru:'Пират-рубака',pl:'Pirat rębajło'},gunner:{en:'Powder Gunner',az:'Barıt Atıcısı',tr:'Barut Nişancısı',ru:'Пороховой стрелок',pl:'Prochowy strzelec'}};
const EP=E.Enemy.prototype,sharedPirate=EP.pirate,sharedGunner=EP.gunner;
function fireGunner(run,e){
 const sx=e.cx+e.dir*46,sy=e.y+e.h*.44,target=e.aim||{x:run.p.x+run.p.w/2,y:run.p.y+run.p.h*.5};
 let a=Math.atan2(target.y-sy,target.x-sx);const base=e.dir>0?0:Math.PI;
 const rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));a=base+clamp(rel,-.3,.3);
 run.projectiles.push({kind:'shot',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*430,vy:Math.sin(a)*430,w:12,h:6,dmg:14,life:2});
 run.fx.muzzle(sx,sy,e.dir);run.audio.at('pistol',e.cx,{vol:.7,rate:.9});
}
function supportedAhead(run,e,dir,distance=14){
 const x=e.cx+dir*(e.w*.5+distance);
 return run.solids.concat(run.ledges).some(s=>x>=s.x&&x<=s.x+s.w&&Math.abs(s.y-e.floor)<=14);
}
function safeWalk(e,target,speed,dt){
 const lo=e.range[0]-e.w/2,hi=e.range[1]-e.w/2,goal=clamp(target-e.w/2,lo,hi),dir=Math.sign(goal-e.x);
 if(!dir)return e.walkTo(target,speed,dt);
 if(!supportedAhead(e.run,e,dir,Math.min(18,speed*dt+5))){e.setAnim('idle');return false}
 return e.walkTo(target,speed,dt);
}
function clearRay(run,ax,ay,bx,by){
 const count=Math.ceil(Math.hypot(bx-ax,by-ay)/28),solids=run.solidList();
 for(let i=1;i<count;i++){
  const t=i/count,x=ax+(bx-ax)*t,y=ay+(by-ay)*t;
  if(solids.some(s=>x>s.x&&x<s.x+s.w&&y>s.y&&y<s.y+s.h))return false;
 }
 return true;
}
function enemyHitBoxClear(run,box){return !run.solidList().some(s=>overlap(box,s))}
function canSeePlayer(run,e){
 const ax=e.cx,ay=e.y+e.h*.44,bx=run.p.x+run.p.w/2,by=run.p.y+run.p.h*.48;
 return clearRay(run,ax,ay,bx,by);
}
EP.pirate=function(dt,dx,dy,near){if(this.run.def.id!==1)return sharedPirate.call(this,dt,dx,dy,near);this.pressureOffset=38;return this.skeleton(dt,dx,dy,near)};
EP.crab=function(dt,dx,dy,near){
 const run=this.run,p=run.p;
 if(this.state==='windup'){this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='lunge';this.timer=.34;this.hitDone=false;run.audio.at('swingEnemy',this.cx)}return}
 if(this.state==='lunge'){this.setAnim('lunge');if(supportedAhead(run,this,this.dir,16)){const lo=this.range[0]-this.w/2,hi=this.range[1]-this.w/2;this.x=clamp(this.x+this.dir*275*dt,lo,hi)}if(!this.hitDone){const box={x:this.dir>0?this.x+this.w-8:this.x-48,y:this.floor-this.h+12,w:52,h:this.h-12};if(overlap(box,p)&&enemyHitBoxClear(run,box)&&clearRay(run,this.cx,this.floor-this.h*.5,p.x+p.w/2,p.y+p.h*.5)){this.hitDone=true;run.hurtPlayer(18,this.dir,this,240)}}this.timer-=dt;if(this.timer<=0){this.state='recover';this.timer=.72}return}
 if(this.state==='recover'){this.setAnim('recover');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.65}return}
 if(near&&this.alert){this.face(p);if(Math.abs(dx)<112&&Math.abs(dy)<64&&this.cool<=0&&canSeePlayer(run,this)){this.state='windup';this.timer=.52;this.face(p);run.audio.at('rattle',this.cx,{gap:.5});return}safeWalk(this,p.x+p.w/2-Math.sign(dx)*50,this.def.chase,dt);this.face(p)}else this.patrol(dt);
};
EP.gunner=function(dt,dx,dy,near){
 if(this.run.def.id!==1)return sharedGunner.call(this,dt,dx,dy,near);
 const run=this.run,p=run.p;
 if(this.state==='draw'){this.setAnim('aim');this.timer-=dt;if(this.timer<=0){this.state='release';this.timer=.2;fireGunner(run,this)}return}
 if(this.state==='release'){this.setAnim('release');this.timer-=dt;if(this.timer<=0){this.state='reload';this.timer=.78}return}
 if(this.state==='reload'){this.setAnim('reload');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=1.15}return}
 this.setAnim('idle');if(near&&this.alert){
  this.face(p);
  if(Math.abs(dx)<190)safeWalk(this,p.x+p.w/2-Math.sign(dx)*235,68,dt);
  else if(Math.abs(dx)>320&&Math.abs(dx)<this.def.sight-40)safeWalk(this,p.x+p.w/2-Math.sign(dx)*265,48,dt);
  if(this.cool<=0&&Math.abs(dx)>190&&canSeePlayer(run,this)){this.state='draw';this.timer=.5;this.aim={x:p.x+p.w/2,y:p.y+p.h*.5};run.audio.at('pistol',this.cx,{vol:.25,gap:.5})}
 }
};
EP.ranged=function(dt,dx,dy,near){
 const run=this.run,p=run.p;
 if(this.state==='windup'){this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='throw';this.timer=.28;this.throwReleased=false;this.aim={x:p.x+p.w/2,y:p.y+p.h*.45}}return}
 if(this.state==='throw'){this.setAnim('throw');this.timer-=dt;if(!this.throwReleased&&this.timer<.12){this.throwReleased=true;const sx=this.cx+this.dir*22,sy=this.y+this.h*.42,tx=this.aim?.x??p.x+p.w/2,ty=this.aim?.y??p.y+p.h*.45;let a=Math.atan2(ty-sy,tx-sx);const base=this.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.34,.34);a=base+rel;run.projectiles.push({kind:'knife',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*390,vy:Math.sin(a)*390,w:14,h:5,dmg:13,life:1.9,g:180})}if(this.timer<=0){this.state='recover';this.timer=.42;this.cool=1.65}return}
 if(this.state==='recover'){this.setAnim('recover');this.timer-=dt;if(this.timer<=0)this.state='idle';return}
 this.setAnim('idle');if(near&&this.alert){
  this.face(p);
  if(Math.abs(dx)<190)safeWalk(this,p.x+p.w/2-Math.sign(dx)*250,62,dt);
  if(this.cool<=0&&Math.abs(dx)>105&&canSeePlayer(run,this)){this.state='windup';this.timer=.62;this.aim={x:p.x+p.w/2,y:p.y+p.h*.45};run.audio.at('bowDraw',this.cx,{gap:.6})}
 }
};
/* The Dockmaster: super-armoured (hits hurt but do not interrupt his swings; only a parry, a blast or a
 * kicked keg staggers him). Phase 1 alternates a heavy slam and a short charge. Below half health he
 * adds powder kegs (which Mari can knock back) and a signalled cannon barrage, each followed by a long
 * recovery window. Damage numbers and hitboxes of the existing slam/charge are unchanged. */
const BOSS_ATTACK=['slamWind','slam','chargeWind','charge','signal','kegWind','keg','shoveWind','shove','roar'];
EP.dockmaster=function(dt,dx,dy,near){
 const run=this.run,p=run.p,phase2=this.hp<=this.max*.5;
 if(phase2&&!this.enraged){this.enraged=true;run.def.bossPhase2?.(run,this)}
 if(this.state==='stun'){this.setAnim('stun');this.timer-=dt;if(this.timer<=0){this.state='recover';this.timer=.3}return}
 if(this.state==='slamWind'||this.state==='chargeWind'){const charge=this.state==='chargeWind';this.setAnim('slamWind');this.timer-=dt;if(this.timer<=0){this.state=charge?'charge':'slam';this.timer=.42;this.hitDone=false;run.audio.at(charge?'swingEnemy':'bossSwing',this.cx)}return}
 if(this.state==='slam'||this.state==='charge'){
  const charge=this.state==='charge';this.setAnim('slam');
  if(charge)safeWalk(this,this.cx+this.dir*96,210,dt);
  this.timer-=dt;
  if(!this.hitDone&&this.timer<(charge?.28:.3)){
   if(!charge&&!this.slamFx){this.slamFx=true;run.audio.at('bossSlam',this.cx,{vol:.9});run.camera.shake=Math.max(run.camera.shake,6);run.fx.debris(this.cx+this.dir*60,this.floor-4,10);run.fx.dust(this.cx+this.dir*60,this.floor,10)}
   const box={x:this.dir>0?this.cx:this.cx-132,y:this.floor-88,w:132,h:88};
   if(overlap(box,p)&&enemyHitBoxClear(run,box)&&clearRay(run,this.cx,this.floor-64,p.x+p.w/2,p.y+p.h*.48)){this.hitDone=true;run.hurtPlayer(22,this.dir,this,280)}
  }
  if(this.timer<=0){this.slamFx=false;this.state='recover';this.timer=charge?.92:.72;this.nextCool=charge?1:.7}
  return
 }
 if(this.state==='signal'){this.setAnim('slamWind');this.timer-=dt;if(!this.called&&this.timer<.35){this.called=true;run.def.bossBarrage?.(run,this)}if(this.timer<=0){this.called=false;this.state='recover';this.timer=1.15;this.nextCool=.8}return}
 if(this.state==='kegWind'){this.setAnim('slamWind');this.timer-=dt;if(this.timer<=0){this.state='keg';this.timer=.32;run.def.bossKeg?.(run,this);run.audio.at('swingEnemy',this.cx,{rate:.8})}return}
 if(this.state==='keg'){this.timer-=dt;if(this.timer<=0){this.state='recover';this.timer=.8;this.nextCool=.75}return}
 // shoulder shove: four quick hits in a row make him barge Mari away instead of standing in a combo
 if(this.state==='shoveWind'){this.setAnim('slamWind');this.timer-=dt;if(this.timer<=0){this.state='shove';this.timer=.22;this.hitDone=false;run.audio.at('bash',this.cx)}return}
 if(this.state==='shove'){this.timer-=dt;if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-110,y:this.floor-110,w:110,h:110};if(overlap(box,p)&&!p.dead&&p.dash<=0){this.hitDone=true;run.hurtPlayer(8,this.dir,this,430);run.def.push(run,this.dir*520);if(p.ground)p.vy=-240;run.fx.dust(p.x+p.w/2,p.y+p.h,8,this.dir)}}if(this.timer<=0){this.state='idle';this.cool=0}return}
 if(this.state==='roar'){this.setAnim('slamWind');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.2}return}
 this.poise=Math.max(0,(this.poise||0)-dt*.9);
 if(this.state==='recover'){this.setAnim('recover');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=this.nextCool||.7;this.nextCool=0}return}
 if(near&&this.alert){
  this.face(p);
  const ad=Math.abs(dx);
  if(this.poise>=4&&ad<140){this.poise=0;this.state='shoveWind';this.timer=.32;this.face(p);run.audio.at('rattle',this.cx,{gap:.3});return}
  if(this.cool<=0&&Math.abs(dy)<200&&canSeePlayer(run,this)){
   this.attackCount=(this.attackCount||0)+1;const n=this.attackCount;
   let next=null;
   if(phase2&&n%4===0)next='signal';
   else if(phase2&&ad>170&&n%4===2)next='kegWind';
   else if(ad<280&&Math.abs(dy)<90)next=ad>148&&n%2===0?'chargeWind':'slamWind';
   if(next){this.state=next;this.timer={slamWind:.86,chargeWind:.9,signal:1.05,kegWind:.7}[next];this.face(p);run.audio.at(next==='signal'?'horn':'rattle',this.cx,{gap:.7,vol:next==='signal'?.7:1});return}
  }
  safeWalk(this,p.x+p.w/2-Math.sign(dx)*72,this.def.chase,dt);this.face(p)
 }else this.patrol(dt);
};
const RIG={
 pirate:{cast:'haven-bay',char:'pirate',weapon:'melee',grip:.1,headScale:1.02,scale:.75,windArm:-2.5,swingArm:1.35},
 crab:{cast:'haven-bay',char:'crab',weapon:'melee',grip:.2,headScale:1.02,scale:.78,windArm:-2.7,swingArm:1.45},
 gunner:{cast:'haven-bay',char:'gunner',weapon:'gun',twoHand:true,headScale:1.02,scale:.75},
 ranged:{cast:'haven-bay',char:'ranged',weapon:'melee',grip:.1,headScale:1.02,scale:.75,windArm:-2.1,swingArm:1.1},
 dockmaster:{cast:'haven-bay',char:'brute',weapon:'melee',twoHand:true,headScale:1.02,scale:.68,step:29,bar:90,barCol:'#f4b84b',windArm:-2.7,swingArm:1.35,
  stateOf:e=>({chargeWind:'slamWind',charge:'slam',kegWind:'lobBack',keg:'throwBack',shoveWind:'guard',shove:'thrust'})[e.state]||e.state}
};
async function loadRig(run){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 if(!window.PirateEnemyRig)return;
 try{run.spriteCasts=await window.PirateLevelEnemySprites?.load(SPRITES)||new Map()}catch(e){run.warn?.('illustrated enemy sprites unavailable: '+e.message);run.spriteCasts=new Map()}
 run.hasCompleteSpriteCast=['pirate','crab','ranged','gunner','dockmaster'].every(n=>run.spriteCasts.has(n));
 if(run.hasCompleteSpriteCast)return;
 run.rigCast=await window.PirateEnemyRig.ready(BASE,'haven-bay').catch(()=>null);
 if(!run.rigCast)run.warn?.('Haven Bay painted enemy cast unavailable');
}
function drawFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig,cast=run.hasCompleteSpriteCast?run.spriteCasts.get(e.type):null;if(!R||!Rig||(!cast&&!run.rigCast))return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;
 const fade=e.spawnT>0?clamp(1-e.spawnT*.6,0,1):1;
 c.save();c.globalAlpha=alpha*fade;c.fillStyle='rgba(26,35,27,.28)';c.beginPath();c.ellipse(e.cx,e.floor-2,e.w*.7,7,0,0,TAU);c.fill();c.restore();
 c.save();c.globalAlpha=alpha*fade;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const o=cast?window.PirateLevelEnemySprites.draw(c,cast,e):Rig.draw(run,c,e,R);
 if(!o){c.restore();c.imageSmoothingEnabled=false;return false}
 if(o&&!e.dead){
  if(e.type==='gunner'&&e.state==='draw'&&e.aim){
   const sx=e.cx+e.dir*46,sy=e.y+e.h*.44,base=e.dir>0?0:Math.PI,raw=Math.atan2(e.aim.y-sy,e.aim.x-sx),rel=Math.atan2(Math.sin(raw-base),Math.cos(raw-base)),a=base+clamp(rel,-.3,.3),ex=sx+Math.cos(a)*360,ey=sy+Math.sin(a)*360;
   c.save();c.strokeStyle='rgba(255,215,132,.48)';c.lineWidth=2;c.setLineDash([8,7]);c.beginPath();c.moveTo(sx,sy);c.lineTo(ex,ey);c.stroke();c.restore();
  }
  if(e.state==='windup'||e.state==='slamWind'||e.state==='chargeWind'||e.state==='signal'||e.state==='kegWind'){
   const boss=e.type==='dockmaster';run.fx.glow(c,e.cx+e.dir*30,e.floor-(boss?110:90),boss?66:54,boss?'rgba(246,174,70,':'rgba(255,96,55,',.52);
   if(e.state==='chargeWind'){c.save();c.strokeStyle='rgba(255,206,117,.66)';c.lineWidth=3;c.setLineDash([12,9]);c.beginPath();c.moveTo(e.cx+e.dir*24,e.floor-8);c.lineTo(e.cx+e.dir*190,e.floor-8);c.stroke();c.restore()}
   if(e.state==='slamWind'&&boss){const k=clamp(1-e.timer/.86,0,1);c.save();c.globalAlpha=.25+.45*k;c.fillStyle='rgba(255,120,60,.35)';c.beginPath();c.ellipse(e.cx+e.dir*66,e.floor-3,66,9,0,0,TAU);c.fill();c.restore()}
  }
  if(e.state==='stun'){for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.beginPath();c.arc(e.cx+Math.cos(a)*22,o.top-6+Math.sin(a)*5,3.5,0,TAU);c.fill()}}
  if(e.state==='strike'){const k=1-e.timer/.24;c.globalAlpha=alpha*(1-k)*.9;c.strokeStyle='rgba(255,242,209,.95)';c.lineWidth=9;c.lineCap='round';c.beginPath();c.arc(e.cx+e.dir*10,e.floor-94,67,e.dir>0?-1.85:Math.PI+1.85,e.dir>0?-1.85+2.35*Math.min(1,k*2):Math.PI+1.85-2.35*Math.min(1,k*2));c.stroke();c.globalAlpha=alpha}
  if(e.state==='slam'||e.state==='charge'){const k=1-e.timer/.42;c.globalAlpha=alpha*(1-k)*.85;c.strokeStyle='rgba(255,220,150,.9)';c.lineWidth=7+10*k;c.beginPath();c.ellipse(e.cx+e.dir*28,e.floor-12,44+78*k,12+18*k,0,Math.PI,TAU);c.stroke();if(e.state==='charge'){c.strokeStyle='rgba(255,197,101,.72)';c.lineWidth=5;c.beginPath();c.moveTo(e.cx-e.dir*18,e.floor-6);c.lineTo(e.cx-e.dir*72,e.floor-6);c.stroke()}c.globalAlpha=alpha}
  if(e.hp<e.max&&e.type!=='dockmaster'){const bw=58,by=o.top-13;c.fillStyle='#101820d9';c.fillRect(e.cx-bw/2-2,by-2,bw+4,9);c.fillStyle='#d9493e';c.fillRect(e.cx-bw/2,by,bw*e.hp/e.max,5)}
  Rig.hud(c,run,e,o,R);
 }
 c.restore();c.imageSmoothingEnabled=false;return true;
}

/* ------------------------------------------------------------------ world helpers */
function zoneOf(run,x){return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones.at(-1)}
function isDry(run,x){return (run.cfg.dry||[]).some(([a,b])=>x>=a&&x<b)}
function groundBelow(run,x,y){let best=null;for(const s of run.solidList().concat(run.surfaces())){if(x<s.x||x>s.x+s.w||s.y<y-4)continue;if(best===null||s.y<best)best=s.y}return best}
function img(run,name){return run.images[ART+name]}
function paintPattern(run,c,name){
 run.havenPatterns??=new Map();let cache=run.havenPatterns.get(c);if(!cache){cache={};run.havenPatterns.set(c,cache)}
 if(!cache[name]){const im=run.images[name];cache[name]=im?c.createPattern(im,'repeat'):'#756b53'}
 return cache[name];
}
function cap(run,c,name,x,y,w){
 const im=run.images['paint-caps.png'],row=run.envMeta.painted?.caps?.rows?.[name];if(!im||row===undefined)return;
 const h=run.envMeta.painted.caps.h,tw=im.width;let sx=((Math.floor(x)%tw)+tw)%tw,dx=x,left=w;
 c.save();c.imageSmoothingEnabled=true;while(left>0){const seg=Math.min(left,tw-sx);c.drawImage(im,sx,row*h,seg,h,dx,y-4,seg,h);dx+=seg;left-=seg;sx=0}c.restore();
}
function strip(c,im,x,y,w,h){if(!im)return;const tw=im.width;let sx=((Math.floor(x)%tw)+tw)%tw,dx=x,left=w;while(left>0){const seg=Math.min(left,tw-sx);c.drawImage(im,sx,0,seg,im.height,dx,y,seg,h);dx+=seg;left-=seg;sx=0}}
function shade(c,x,y,w,h,top,bottom){const g=c.createLinearGradient(0,y,0,y+h);g.addColorStop(0,top);g.addColorStop(1,bottom);c.fillStyle=g;c.fillRect(x,y,w,h)}
function paintSolid(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),y0=Math.max(s.y,T-2),bottom=Math.min(s.y+s.h,B+30);if(x1<=x0||bottom<=y0)return true;
 const illustration=s.art&&run.images[ART+TERRAIN[s.art]];
 if(illustration){
  c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.drawImage(illustration,s.x,s.y,s.w,Math.min(s.h,illustration.height*s.w/illustration.width*1.02));c.restore();c.imageSmoothingEnabled=false;return true;
 }
 const face=FACES[s.style]&&run.images[ART+FACES[s.style]];
 if(face){
  if(s.style==='street')for(const l of run.ledges)if(l.look==='roof'&&l.y<T-40&&l.x<R&&l.x+l.w>L)drawFacade(run,c,l);
  c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();c.imageSmoothingEnabled=true;
  c.fillStyle=paintPattern(run,c,ART+FACES[s.style]);c.save();c.translate(s.x,s.y);c.fillRect(x0-s.x,y0-s.y,x1-x0,bottom-y0);c.restore();
  if(s.style==='ceiling'){
   shade(c,x0,Math.max(s.y,s.y+s.h-90),x1-x0,90,'rgba(0,0,0,0)','rgba(10,6,4,.55)');
  }else if(s.style==='house'){
   shade(c,x0,s.y,x1-x0,s.h,'rgba(255,240,200,.08)','rgba(30,20,12,.35)');
  }else{
   // deeper faces fall into shadow so the walkable lip reads clearly
   const g=c.createLinearGradient(0,s.y,0,s.y+260);g.addColorStop(0,'rgba(255,236,190,.06)');g.addColorStop(.25,'rgba(0,0,0,0)');g.addColorStop(1,s.style==='cave'?'rgba(8,5,3,.82)':'rgba(10,18,20,.66)');c.fillStyle=g;c.fillRect(x0,Math.max(s.y,y0),x1-x0,bottom-Math.max(s.y,y0));
  }
  c.restore();
  if(s.style==='ceiling'){
   // ragged rock lips where the cave opens to the sky, and a fringe of small stalactites
   c.save();c.imageSmoothingEnabled=true;for(const [ex,dir] of [[s.x,-1],[s.x+s.w,1]]){if(ex+160<L||ex-160>R)continue;c.beginPath();c.moveTo(ex,s.y);for(let i=0;i<=8;i++){const k=i/8,jag=((i*37+ex)%23)-11;c.lineTo(ex+dir*(150*(1-k*k)+jag),s.y+(s.h+40)*k)}c.lineTo(ex-dir*30,s.y+s.h+40);c.lineTo(ex-dir*30,s.y);c.closePath();c.fillStyle=paintPattern(run,c,ART+FACES.cave);c.fill();c.fillStyle='rgba(15,9,5,.45)';c.fill()}
   const st=img(run,'prop-stalactite.webp');if(st)for(let x=Math.ceil(s.x/37)*37;x<s.x+s.w;x+=37){if(x<L-40||x>R+40)continue;const k=((x*7919)%97)/97,w=12+k*16,h=w*1.4;c.drawImage(st,x-w/2,s.y+s.h-6,w,h)}
   c.restore();
  }
  if(s.style!=='ceiling'&&s.y>=T-4&&s.y<=B){c.fillStyle='rgba(255,236,190,.35)';c.fillRect(x0,s.y,x1-x0,2);c.fillStyle='rgba(20,12,6,.35)';c.fillRect(x0,s.y+5,x1-x0,3)}
  if(s.style==='house'){
   // walkable roof tiles, and the dim interior of the boarded townhouse beneath them
   const roof=img(run,'cap-roof.webp');if(roof){c.save();c.imageSmoothingEnabled=true;strip(c,roof,s.x-8,s.y-10,s.w+16,34);c.restore()}
   const room={x:s.x+28,y:s.y+s.h,w:s.w-40,h:700-s.y-s.h};const wall=paintPattern(run,c,ART+FACES.house);
   c.save();c.fillStyle=wall;c.fillRect(room.x,room.y,room.w,room.h);c.fillStyle='rgba(28,18,12,.62)';c.fillRect(room.x,room.y,room.w,room.h);
   c.fillStyle='rgba(255,190,100,.12)';c.fillRect(room.x+room.w*.55,room.y+20,48,36);c.restore();
   const post=paintPattern(run,c,L4+'wood-deck.png');c.save();c.fillStyle=post;c.fillRect(s.x+s.w-26,s.y+s.h,22,700-s.y-s.h);c.fillStyle='rgba(0,0,0,.35)';c.fillRect(s.x+s.w-8,s.y+s.h,4,700-s.y-s.h);c.restore();
  }
  return true;
 }
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,Math.max(1,s.h));c.clip();
 if(s.style==='dock'){
  const deck=run.images[L4+'wood-deck.png'];
  if(deck){for(let x=x0;x<x1;){const sx=((Math.floor(x)%deck.width)+deck.width)%deck.width,sw=Math.min(x1-x,deck.width-sx);c.drawImage(deck,sx,0,sw,deck.height,x,s.y,sw,deck.height);x+=sw}}
  c.restore();return true;
 }
 const fill=s.style==='ruin'?'paint-rock.webp':'paint-fill2.webp';
 c.fillStyle=paintPattern(run,c,fill);c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 const sh=c.createLinearGradient(0,s.y,0,bottom);sh.addColorStop(0,'rgba(255,240,190,.05)');sh.addColorStop(.17,'rgba(39,44,37,.02)');sh.addColorStop(1,'rgba(15,20,20,.62)');c.fillStyle=sh;c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 c.restore();cap(run,c,s.style==='ruin'?'rockTop':'top',x0,s.y,x1-x0);return true;
}
function woodPosts(run,c,l,texture){
 const supports=run.solids.concat(run.ledges.filter(q=>q!==l));
 for(const x of [l.x+18,l.x+l.w-32]){
  const below=supports.filter(s=>s.x<x+18&&s.x+s.w>x&&s.y>l.y+28).map(s=>s.y),bottom=below.length?Math.min(...below):run.cfg.world.ground+64;
  const px=x-3,top=l.y+22,height=Math.max(0,bottom-top);if(height<8)continue;
  c.save();c.beginPath();c.moveTo(px+5,top);c.lineTo(px+23,top);c.lineTo(px+17,bottom);c.lineTo(px+2,bottom);c.closePath();c.clip();c.fillStyle=texture||'#554b3b';c.fillRect(px,top,25,height);
  const g=c.createLinearGradient(px,0,px+25,0);g.addColorStop(0,'rgba(255,229,178,.28)');g.addColorStop(.38,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(19,15,12,.46)');c.fillStyle=g;c.fillRect(px,top,25,height);c.restore();
  if(height>60){c.strokeStyle='rgba(73,48,29,.92)';c.lineWidth=8;c.beginPath();c.moveTo(px+4,top+42);c.lineTo(px+96,Math.min(bottom-8,top+130));c.moveTo(px+21,top+42);c.lineTo(px-70,Math.min(bottom-8,top+130));c.stroke()}
  for(let yy=top+16;yy<bottom-10;yy+=37){c.strokeStyle='rgba(81,50,29,.9)';c.lineWidth=3;c.beginPath();c.moveTo(px-2,yy);c.quadraticCurveTo(px+11,yy+7,px+22,yy);c.stroke()}
 }
}
function drawFacade(run,c,l){
 const facade=img(run,'facade-'+(l.facade||'a')+'.webp');if(!facade)return;
 const top=l.y+12,h=run.cfg.world.ground-top;c.save();c.imageSmoothingEnabled=true;c.drawImage(facade,l.x,top,l.w,h);shade(c,l.x,top,l.w,h,'rgba(30,20,10,.05)','rgba(30,20,10,.3)');c.restore();
}
function ledgeImage(run,material,l){return run.images[ART+LEDGES[material][Math.abs(Math.floor(l.x/89))%4]]}
function paintLedge(run,c,l){
 const look=l.look,deck=run.images[L4+'wood-deck.png'],wood=paintPattern(run,c,deck?L4+'wood-deck.png':'paint-rock.webp');
 c.save();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 if(look==='roof'){
  drawFacade(run,c,l);
  const roof=img(run,'cap-roof.webp');if(roof)strip(c,roof,l.x-10,l.y-8,l.w+20,34);
  c.restore();return true;
 }
 if(look==='rock'||look==='stone'){
  const im=ledgeImage(run,look==='rock'?'cliff':'ruin',l);if(im){if(look==='rock')c.filter='sepia(.45) brightness(.72)';c.drawImage(im,l.x-6,l.y-4,l.w+12,46);c.filter='none'}
  c.restore();return true;
 }
 if(look==='line'){
  // a plank walkway slung between houses on rope, with drying sails beneath
  c.strokeStyle='rgba(92,66,40,.95)';c.lineWidth=3;c.beginPath();c.moveTo(l.x-30,l.y-40);c.quadraticCurveTo(l.x+l.w/2,l.y+8,l.x+l.w+30,l.y-40);c.stroke();
  const im=ledgeImage(run,'dock',l);if(im)c.drawImage(im,l.x-4,l.y-2,l.w+8,34);
  const cloth=['#d9cfb4','#b9483a','#e2d7ba','#3f6a6e'];for(let i=0;i<3;i++){const x=l.x+18+i*(l.w-40)/2;c.fillStyle=cloth[(Math.floor(l.x/50)+i)%4];c.globalAlpha=.9;c.beginPath();c.moveTo(x-12,l.y+30);c.lineTo(x+12,l.y+30);c.lineTo(x+10,l.y+64);c.lineTo(x-11,l.y+60);c.closePath();c.fill();c.globalAlpha=1}
  c.restore();return true;
 }
 if(look){
  // balconies, decks, yardarms, crow's nests and the attic: painted plank ledges on posts or brackets
  const im=ledgeImage(run,'dock',l);
  if(look==='balcony'||look==='attic'){c.fillStyle=wood;for(const x of [l.x+6,l.x+l.w-12]){c.fillRect(x,l.y+20,6,30)}c.strokeStyle='rgba(70,46,28,.9)';c.lineWidth=4;c.beginPath();c.moveTo(l.x+6,l.y+48);c.lineTo(l.x+l.w/2,l.y+24);c.lineTo(l.x+l.w-6,l.y+48);c.stroke()}
  else if(look==='deck')woodPosts(run,c,l,wood);
  if(im)c.drawImage(im,l.x-6,l.y-4,l.w+12,46);
  if(look==='balcony'){c.strokeStyle='rgba(84,56,34,.95)';c.lineWidth=3;c.beginPath();c.moveTo(l.x,l.y-26);c.lineTo(l.x+l.w,l.y-26);c.stroke();for(let x=l.x+4;x<=l.x+l.w;x+=14){c.beginPath();c.moveTo(x,l.y-26);c.lineTo(x,l.y);c.stroke()}}
  if(look==='nest'){c.strokeStyle='rgba(84,56,34,.95)';c.lineWidth=4;c.beginPath();c.moveTo(l.x+2,l.y-22);c.lineTo(l.x+l.w-2,l.y-22);c.stroke();for(let x=l.x+6;x<=l.x+l.w;x+=20){c.beginPath();c.moveTo(x,l.y-22);c.lineTo(x,l.y);c.stroke()}}
  c.restore();return true;
 }
 // Smugglers' Landing (PR #96): painted cliff ledges on the strand, plank ledges on posts along the quay
 const isWood=l.x>=1920,material=isWood?'dock':'cliff';
 c.fillStyle='rgba(0,0,0,.34)';c.beginPath();c.ellipse(l.x+l.w/2,l.y+38,l.w*.52,8,0,0,TAU);c.fill();
 if(isWood)woodPosts(run,c,l,wood);
 const im=ledgeImage(run,material,l);if(im)c.drawImage(im,l.x-6,l.y-4,l.w+12,46);
 if(!isWood){
  for(let i=0;i<3;i++){const x=l.x+12+i*(l.w-24)/2,len=25+((Math.floor(l.x/17)+i*13)%43);
   c.strokeStyle='rgba(37,66,42,.86)';c.lineWidth=3.4;c.beginPath();c.moveTo(x,l.y+28);c.bezierCurveTo(x-9,l.y+39,x+8,l.y+len*.64,x-3,l.y+len+26);c.stroke();
   for(let j=0;j<2;j++){const yy=l.y+42+j*18+(i%2)*5;c.fillStyle=j?'#667d49':'#7f9257';c.beginPath();c.ellipse(x+(j?5:-5),yy,5,2.2,(j?1:-1)*.52,0,TAU);c.fill()}}
 }
 c.restore();return true
}

/* ------------------------------------------------------------------ interactive props */
function barrelBox(b){return{x:b.x-17,y:b.y-42,w:34,h:42}}
function crateBox(k){return{x:k.x-26,y:k.y-46,w:52,h:46}}
function lightBarrel(run,b,fuse=.9){if(b.state!=='idle')return;b.state='lit';b.fuse=fuse;run.audio.at('fuse',b.x,{vol:.8,gap:.1});run.fx.spark(b.x+4,b.y-44,'#ffcf6b',6);run.def.hint(run,'hintPowder')}
function kickBarrel(run,b,dir){b.state='fly';b.owner='hero';b.vx=dir*470;b.vy=-300;b.fuse=Math.max(b.fuse,.55);run.audio.at('chop',b.x,{vol:.7});run.fx.spark(b.x,b.y-24,'#ffe2a0',8)}
function breakCrate(run,k){if(k.broken)return;k.broken=true;run.state.crates.push(k.id);run.fx.debris(k.x,k.y-20,12);run.audio.at('wallBreak',k.x,{vol:.55,rate:1.3});run.dropCoins(k.x,k.y-30,k.coins||3,'crate-'+k.id)}
function hitBreakable(run,b,n=1){
 if(b.broken)return false;b.hits+=n;b.flash=.14;run.fx.spark(b.x+b.w/2,b.y+b.h*.4,'#f3dfb4',10);run.audio.at(b.look==='boards'?'chop':'stoneHit',b.x,{vol:.8});run.camera.shake=Math.max(run.camera.shake,2);
 if(b.hits>=b.need){b.broken=true;run.state.broken.push(b.id);run.fx.debris(b.x+b.w/2,b.y+b.h/2,18);run.fx.debris(b.x+b.w/2,b.y+20,10);run.audio.at('wallBreak',b.x,{vol:1});run.camera.shake=Math.max(run.camera.shake,5);
  if(b.secret){run.audio.play('secret',{vol:.9});run.banner={t:3,text:text(run.lang,'secret')}}run.save()}
 return true;
}
function blast(run,x,y,r,{hero=20,foe=45,boss=40,source=null}={}){
 const p=run.p,l=run.l1;
 run.audio.at('blast',x,{vol:1});run.audio.at('shellBoom',x,{vol:.6,rate:.9});run.camera.shake=Math.max(run.camera.shake,8);
 run.fx.burst(x,y-16,'#ffb15a',24,1.3);run.fx.burst(x,y-10,'#fff1b8',10,.8);run.fx.debris(x,y-6,14);run.fx.ring(x,y-20,'rgba(255,190,110,.9)',r*.3,.45);
 l.flashes.push({x,y:y-20,r:r*1.6,t:.35,max:.35});
 if(run.fx.on)for(let i=0;i<8;i++)run.fx.cap(run.fx.parts,{x:x+(Math.random()-.5)*r,y:y-20-Math.random()*30,vx:(Math.random()-.5)*50,vy:-40-Math.random()*40,g:-20,life:1.1+Math.random()*.6,max:1.7,size:12+Math.random()*10,color:'rgba(70,62,58,.35)',soft:true},160);
 for(const e of run.enemies){if(e.dead||e.spawnT>0)continue;const d=Math.hypot(e.cx-x,(e.y+e.h/2)-(y-20));if(d>r+e.w/2)continue;
  if(e.type==='dockmaster'){if(source==='bossKeg')continue;e.damage(boss,Math.sign(e.cx-x)||1,'blast');if(!e.dead){e.state='stun';e.timer=1.7;e.hurtT=0;run.fx.text('!',e.cx,e.y-20,'#ffe38a',true)}}
  else e.damage(foe,Math.sign(e.cx-x)||1,'blast');run.fx.text(String(e.type==='dockmaster'?boss:foe),e.cx,e.y-14,'#ffb15a',true)}
 const d=Math.hypot(p.x+p.w/2-x,p.y+p.h/2-(y-20));
 if(source!=='kick'&&!p.dead&&d<r+p.w/2&&p.inv<=0)run.hurtPlayer(hero,Math.sign(p.x+p.w/2-x)||1,null,320,true);
 for(const b of l.barrels)if(b.state==='idle'&&Math.hypot(b.x-x,b.y-y)<r+30){b.state='lit';b.fuse=.18+Math.random()*.12}
 for(const k of l.crates)if(!k.broken&&Math.hypot(k.x-x,k.y-y)<r+30)breakCrate(run,k);
 for(const b of l.breakables)if(!b.broken&&Math.abs(b.x+b.w/2-x)<r+20&&y>b.y-20&&y<b.y+b.h+40)hitBreakable(run,b,b.need);
}
function addMark(run,x,{warn=1.25,r=70,dmg=18,from=null}={}){
 const p=run.p,y=groundBelow(run,x,Math.min(p.y+p.h,run.cfg.world.ground)-120);if(y===null)return false;
 run.l1.marks.push({x,y,t:0,warn,r,dmg,from});run.audio.at('shellWhistle',x,{vol:.7,gap:.15});return true;
}

function lightLayers(run,W,dusk,grave,sunny){
 const key=W+'|'+dusk+'|'+grave+'|'+sunny,cache=run.l1.light??=new Map();let L=cache.get(key);if(L)return L;
 const mk=()=>{const cv=document.createElement('canvas');cv.width=W;cv.height=H;return cv};
 const wash=mk(),glow=mk();let c=wash.getContext('2d');const g=c.createLinearGradient(0,0,0,H);
 g.addColorStop(0,`rgba(255,${244-dusk*40|0},${204-dusk*70-grave*10|0},.96)`);g.addColorStop(.65,`rgba(255,${241-dusk*30|0},${199-dusk*60|0},.99)`);g.addColorStop(1,`rgba(${185+dusk*30|0},${202-grave*8|0},${183+grave*10|0},.92)`);c.fillStyle=g;c.fillRect(0,0,W,H);
 c=glow.getContext('2d');
 if(sunny){const sun=c.createRadialGradient(W*.76,120,5,W*.76,120,320);sun.addColorStop(0,`rgba(255,${230-dusk*50|0},${161-dusk*60|0},${.16+dusk*.08})`);sun.addColorStop(1,'rgba(255,232,180,0)');c.fillStyle=sun;c.fillRect(0,0,W,H)}
 const v=c.createRadialGradient(W/2,H/2,H*.42,W/2,H/2,H*.95);v.addColorStop(0,'rgba(4,26,34,0)');v.addColorStop(1,'rgba(13,32,31,.17)');c.fillStyle=v;c.fillRect(0,0,W,H);
 if(cache.size>12)cache.delete(cache.keys().next().value);L={wash,glow};cache.set(key,L);return L;
}

/* Sparse out-of-focus foreground pieces (posts, rigging timbers, stalagmites, chains) at 1.3× parallax along the
 * bottom edge: pre-blurred once at load, never over the play space above the hero's feet. */
function foreground(run){
 const mk=(w,h,draw)=>{const cv=document.createElement('canvas');cv.width=w;cv.height=h;const x=cv.getContext('2d');x.filter='blur(3px) brightness(.32) saturate(.7)';draw(x,w,h);x.filter='none';return cv};
 const deck=run.images[L4+'wood-deck.png'],crate=img(run,'prop-crate.webp'),powder=img(run,'prop-powder.webp'),st=img(run,'prop-stalactite.webp');
 const wood=(x,px,top,w,h)=>{if(deck){const pat=x.createPattern(deck,'repeat');x.fillStyle=pat}else x.fillStyle='#4a3524';x.fillRect(px,top,w,h)};
 return{
  post:mk(150,260,(x,w,h)=>{wood(x,52,10,40,h);x.strokeStyle='#5b4330';x.lineWidth=7;x.beginPath();x.moveTo(72,40);x.quadraticCurveTo(110,90,150,70);x.stroke();if(crate)x.drawImage(crate,0,h-96,110,96)}),
  cargo:mk(220,200,(x,w,h)=>{if(crate){x.drawImage(crate,10,h-110,120,104);x.drawImage(crate,40,h-190,96,84)}if(powder)x.drawImage(powder,140,h-96,70,86)}),
  rib:mk(220,300,(x,w,h)=>{x.strokeStyle='#3d2a1c';x.lineWidth=26;x.lineCap='round';x.beginPath();x.moveTo(30,h);x.quadraticCurveTo(40,80,170,20);x.stroke();x.lineWidth=16;x.beginPath();x.moveTo(140,h);x.quadraticCurveTo(150,140,210,100);x.stroke()}),
  rock:mk(200,260,(x,w,h)=>{if(st){x.save();x.translate(0,h);x.scale(1,-1);x.drawImage(st,10,0,90,250);x.drawImage(st,90,0,70,190);x.drawImage(st,140,0,50,120);x.restore()}}),
  chain:mk(120,320,(x,w,h)=>{x.strokeStyle='#2d2b2a';x.lineWidth=6;for(let y=0;y<h;y+=22){x.beginPath();x.ellipse(60+(y%44?4:-4),y+11,8,12,0,0,Math.PI*2);x.stroke()}x.fillStyle='#7a2a22';x.fillRect(0,0,40,200)})
 };
}
const FG={harbor:['post','cargo'],village:['cargo','post'],graveyard:['rib','post'],caves:['rock','rock'],fortress:['chain','cargo']};

/* ------------------------------------------------------------------ definition */
const def={
 id:1,base:BASE,config:BASE+'level-01.json',enemyAnimationVisualOnly:true,
 images:PLATES.map(n=>ART+'plate-'+n+'.webp').concat(Object.values(TERRAIN).map(n=>ART+n),Object.values(FACES).map(n=>ART+n),PROPS.map(n=>ART+n),Object.values(LEDGES).flat().map(n=>ART+n),[ART+'arena-frame.webp',L4+'wood-deck.png']),
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 initialState:()=>({arena:false,dockmasterDefeated:false,ambush:0,broken:[],crates:[]}),
 persist(run){const s=run.state;return{arena:!!s.arena,dockmasterDefeated:!!s.dockmasterDefeated,ambush:s.ambush===2?2:0,broken:[...s.broken],crates:[...s.crates]}},
 async prepare(run){
  await loadRig(run);
  // Painted terrain illustrations are authored at 2x; the canvas never zooms, so keep a 1x copy (¼ of the texture memory).
  for(const n of Object.values(TERRAIN).map(n=>ART+n).concat(Object.values(LEDGES).flat().map(n=>ART+n),[ART+'arena-frame.webp'])){const im=run.images[n];if(!im||im.width<200)continue;const cv=document.createElement('canvas');cv.width=Math.round(im.width/2);cv.height=Math.round(im.height/2);const x=cv.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(im,0,0,cv.width,cv.height);run.images[n]=cv}
  // Plates are drawn at 1.08×H every frame: resample them once to that height so the blit is 1:1.
  const ph=Math.round(H*1.08);for(const name of PLATES){const n=ART+'plate-'+name+'.webp',im=run.images[n];if(!im||im.height<=ph)continue;const cv=document.createElement('canvas');cv.height=ph;cv.width=Math.round(im.width*ph/im.height);const x=cv.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';
   // aerial perspective: the far plate is slightly softened and hazed so the playable layer reads in front of it
   x.filter='blur(.8px) saturate(.88)';x.drawImage(im,0,0,cv.width,cv.height);x.filter='none';
   const haze=x.createLinearGradient(0,0,0,ph);if(name==='caves'){haze.addColorStop(0,'rgba(20,12,8,.25)');haze.addColorStop(1,'rgba(20,12,8,.1)')}else{haze.addColorStop(0,'rgba(214,232,226,.06)');haze.addColorStop(.7,'rgba(222,232,214,.24)');haze.addColorStop(1,'rgba(160,200,200,.12)')}x.fillStyle=haze;x.fillRect(0,0,cv.width,ph);run.images[n]=cv}
  run.fg=foreground(run);
  // The shared Level 3 asset pack brings its own enemy and boss sheets; Level 1 draws none of them.
  for(const k of Object.keys(run.sheets))if(k!=='hero'){delete run.images[run.sheets[k].meta.image];delete run.sheets[k]}
  if(run.audio.ctx)run.audio.load(BASE+'assets/',SFX);
  run.spikeT=0;run.lightBuf=document.createElement('canvas');
  run.motes=Array.from({length:44},(_,i)=>({x:(i*173)%1280,y:(i*97)%H,s:.25+(i%6)*.14}));
 },
 setup(run){
  const cfg=run.cfg,s=run.state;
  for(const e of run.enemies)if(e.type==='dockmaster')def.armBoss(run,e);s.broken=[...(s.broken||[])];s.crates=[...(s.crates||[])];if(s.ambush!==2)s.ambush=0;
  run.banner={t:4.5,text:text(run.lang,'title')};run.gate=s.dockmasterDefeated?0:1;run.hinted=new Set();run.prevZone=null;
  s.dockmasterDefeated=s.dockmasterDefeated||run.killed.has('dockmaster');
  for(const e of run.enemies)if(NAMES[e.type])e.def=Object.assign({},e.def,{name:NAMES[e.type]});
  const pool=run.enemies.filter(e=>cfg.enemies.find(q=>q.id===e.id)?.ambush);
  run.enemies=run.enemies.filter(e=>!pool.includes(e));
  run.l1={pool,wave:-1,waveT:0,marks:[],flashes:[],victoryT:0,battery:{},
   barrels:(cfg.barrels||[]).map(b=>({...b,state:'idle',fuse:0,vx:0,vy:0})),
   crates:(cfg.crates||[]).map(k=>({...k,broken:s.crates.includes(k.id)})),
   breakables:(cfg.breakables||[]).map(b=>({...b,need:b.hits,hits:0,flash:0,broken:s.broken.includes(b.id)})),
   falls:(cfg.stalactites||[]).map(q=>({...q,state:'idle',t:0,y:q.top,vy:0}))};
  if(s.ambush===2)run.l1.pool=[];
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hintQueue=resumed?[]:['hint1','hint2','hint3'];run.hintT=5},
 onRespawn(run){const l=run.l1;l.marks=[];for(const b of l.barrels)if(b.state==='fly'&&b.owner==='enemy')b.state='gone';
  // a death mid-ambush resets the square: survivors return to the pool and the barricades lift
  if(run.state.ambush===1){run.state.ambush=0;l.wave=-1;l.pool=l.pool.concat(run.enemies.filter(e=>e.ambushed&&!e.dead).map(e=>{e.spawnT=0;return e}));run.enemies=run.enemies.filter(e=>!e.ambushed||e.dead);def.music(run)}},
 // shoves and shockwaves move Mari through the engine's drift hook so her own input cannot cancel them instantly
 push(run,v){run.l1.push=v},
 heroDrift(run,dt){const l=run.l1;if(!l||!l.push)return 0;const v=l.push;l.push*=Math.pow(.004,dt);if(Math.abs(l.push)<20)l.push=0;return v},
 // guard: from the front while he is not committed to an action, hits glance off the anchor
 armBoss(run,e){const full=e.damage.bind(e);e.damage=(amount,dir,kind)=>{
   const front=(dir<0&&e.dir>0)||(dir>0&&e.dir<0),open=BOSS_ATTACK.includes(e.state)&&e.state!=='shoveWind'||['recover','stun','roar'].includes(e.state);
   if(!e.dead&&front&&!open&&['melee','heavyBack','throw','dash'].includes(kind)){
    const chip=Math.max(1,Math.round(amount*.3));if(e.hp-chip<=0)return full(chip,dir,kind);e.hp-=chip;e.flash=.08;e.kb=dir*40;e.poise=(e.poise||0)+1;e.alert=true;run.focus(e);
    run.fx.spark(e.cx+e.dir*26,e.y+e.h*.45,'#ffd88a',10);run.fx.text(chip+'',e.cx,e.y-14,'#cfe3ff');run.audio.at('clang',e.cx,{rate:.9+Math.random()*.1});run.hitStop(.03);
    if(e.hp<=e.max*.5&&!e.enraged){e.enraged=true;def.bossPhase2(run,e)}return'blocked'}
   return full(amount,dir,kind)}},
 hint(run,key){if(run.hinted.has(key))return;run.hinted.add(key);run.banner={t:3.6,text:text(run.lang,key),small:true}},
 music(run){const s=run.state,z=def.zone(run).id;let m='haven';
  if(s.arena&&!s.dockmasterDefeated)m=run.enemies.find(e=>e.id==='dockmaster')?.enraged?'boss':'battle';
  else if(s.ambush===1)m='ambush';else if(s.dockmasterDefeated)m='triumph';else if(z==='caves')m='caves';else if(z==='fortress')m='fortress';
  run.audio.playMusic(m,1.4)},
 zone(run){return zoneOf(run,run.p.x+run.p.w/2)},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 objectiveHud(run){const z=def.zone(run).id,s=run.state;
  if(s.ambush===1)return text(run.lang,'hintAmbush')+' · '+text(run.lang,'wave')+' '+(run.l1.wave+1)+'/'+run.cfg.ambush.waves.length;
  if(z==='fortress'&&s.dockmasterDefeated)return text(run.lang,'defeated');
  return text(run.lang,'obj'+z)},
 dynamicSolids(run){
  const a=run.cfg.arena,s=run.state,out=[];
  if(s.arena&&!s.dockmasterDefeated){out.push({x:a.wallX,y:410,w:34,h:290,style:'gate'});out.push({x:a.gateX,y:410,w:36,h:290,style:'gate'})}else if(s.arena&&run.gate>.05)out.push({x:a.gateX,y:700-290*run.gate,w:36,h:290*run.gate,style:'gate'});
  if(s.ambush===1){const m=run.cfg.ambush;out.push({x:m.wallX,y:m.top,w:34,h:700-m.top,style:'barricade'});out.push({x:m.gateX,y:m.top,w:36,h:700-m.top,style:'barricade'})}
  for(const b of run.l1?.breakables||[])if(!b.broken)out.push({x:b.x,y:b.y,w:b.w,h:b.h,style:'breakable'});
  return out},
 update(run,dt){
  const p=run.p,a=run.cfg.arena,s=run.state,l=run.l1,cx=p.x+p.w/2,feet=p.y+p.h;run.banner.t=Math.max(0,run.banner.t-dt);run.spikeT+=dt;
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:3.5,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=7}}
  const z=def.zone(run).id;if(z!==run.prevZone){const first=run.prevZone!==null;run.prevZone=z;if(first){run.banner={t:2.6,text:text(run.lang,z)};def.music(run)}}
  // contextual teaching moments, each shown once per visit
  if(!run.hintQueue?.length&&!p.dead){
   if(cx>4180&&cx<4600)def.hint(run,'hintRoof');
   if(cx>6080&&cx<6250&&!l.breakables.find(b=>b.id==='door')?.broken)def.hint(run,'hintDoor');
   if(cx>6860&&cx<7000)def.hint(run,'hintPlanks');
   if(cx>10020&&cx<10400)def.hint(run,'hintCave');
   if(cx>11560&&cx<11780&&feet>860&&!l.breakables.find(b=>b.id==='vault')?.broken)def.hint(run,'hintCrack');
   if(s.arena&&!s.dockmasterDefeated)def.hint(run,'hintBoss');
  }
  // ---- ambush in the village square
  const m=run.cfg.ambush;
  if(m&&s.ambush===0&&l.pool.length&&!p.dead&&cx>m.trigger&&cx<m.gateX&&feet>640){
   s.ambush=1;l.wave=-1;l.waveT=.4;run.banner={t:3,text:text(run.lang,'hintAmbush')};run.audio.play('gateSlam',{vol:.8});run.audio.play('warcry',{vol:.8});run.camera.shake=5;def.music(run);
  }
  if(s.ambush===1){
   const alive=run.enemies.some(e=>e.ambushed&&!e.dead);
   if(!alive){l.waveT-=dt;if(l.waveT<=0){
    l.wave++;const ids=m.waves[l.wave];
    if(!ids){s.ambush=2;l.pool=[];run.banner={t:3,text:text(run.lang,'ambushClear')};run.audio.play('gateOpen',{vol:.9});def.music(run);run.save()}
    else{let n=0;for(const id of ids){const e=l.pool.find(q=>q.id===id);if(!e)continue;l.pool=l.pool.filter(q=>q!==e);Object.assign(e,{ambushed:true,spawnT:.9,alert:true,cool:.9+n*.35,state:'idle',x:e.home});run.enemies.push(e);n++}
     if(n){run.audio.play('warcry',{vol:.6,rate:1.1});run.fx.text(text(run.lang,'wave')+' '+(l.wave+1),cx,p.y-40,'#ffd36b',true)}l.waveT=.8}
   }}
  }
  // ambushers drop in from the rooftops (the shared enemy kit freezes AI and counts spawnT down when installed)
  for(const e of run.enemies){if(e.spawnT>0){e.dropping=true;if(!EP.__smugglers)e.spawnT=Math.max(0,e.spawnT-dt)}else if(e.dropping){e.dropping=false;run.fx.dust(e.cx,e.floor,10);run.audio.at('land',e.cx,{vol:.6})}}
  // ---- arena and Dockmaster
  if(!s.arena&&cx>a.from&&!p.dead){s.arena=true;run.banner={t:3,text:text(run.lang,'awake')};run.audio.play('gateSlam',{vol:.8});run.audio.play('bossIntro',{vol:.8});run.camera.shake=5;def.music(run)}
  if(run.killed.has('dockmaster')&&!s.dockmasterDefeated){
   s.dockmasterDefeated=true;run.banner={t:4,text:text(run.lang,'defeated')};run.audio.play('bossDie',{vol:.9});run.audio.play('gateOpen',{vol:.9});
   run.freeze=Math.max(run.freeze,.45);run.camera.shake=9;l.victoryT=1.6;l.marks=[];for(const b of l.barrels)if(b.owner==='enemy'&&b.state!=='gone')b.state='gone';
   const boss=run.cfg.enemies.find(e=>e.id==='dockmaster');run.dropCoins(boss.x,boss.y-80,12,'boss-rain');def.music(run);run.save();
  }
  if(l.victoryT>0){const before=l.victoryT;l.victoryT-=dt;for(const k of [1.4,1.0,.6])if(before>k&&l.victoryT<=k){const x=a.wallX+120+Math.random()*(a.gateX-a.wallX-240);run.fx.burst(x,420+Math.random()*120,['#ffe19a','#ff9f5a','#a9eaff'][Math.floor(Math.random()*3)],26,1.2);run.audio.play('coinDrop',{vol:.5})}}
  run.gate=Math.max(0,run.gate-dt*1.2*(s.dockmasterDefeated?1:0));
  if(s.dockmasterDefeated&&run.gate<.1&&cx>a.exitX&&!p.dead&&run.phase==='play')run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length});
  // ---- cannon batteries
  for(const b of run.cfg.batteries||[]){
   const inside=cx>b.from&&cx<b.to&&!p.dead&&!(s.arena&&!s.dockmasterDefeated);
   if(!inside){l.battery[b.id]=Math.min(l.battery[b.id]??1.4,1.4);continue}
   l.battery[b.id]=(l.battery[b.id]??1.4)-dt;
   if(l.battery[b.id]<=0){l.battery[b.id]=b.every;
    const lead=clamp(p.vx*.55,-130,130),x=clamp(cx+lead+(Math.random()-.5)*60,b.from,b.to);
    if(addMark(run,x,{warn:b.warn,r:b.r,dmg:b.dmg,from:b.id})){def.hint(run,'hintCannon');run.audio.at('cannon',cx+(b.id==='bastion'?-380:420),{vol:.7});l.lastShot={id:b.id,t:run.time}}}
  }
  // ---- marked shells
  for(const k of l.marks){k.t+=dt;if(!k.hit&&k.t>=k.warn){k.hit=true;
   run.audio.at('shellBoom',k.x,{vol:1});run.camera.shake=Math.max(run.camera.shake,6);run.fx.burst(k.x,k.y-10,'#ffb46b',18);run.fx.debris(k.x,k.y-6,10);run.fx.ring(k.x,k.y-8,'rgba(255,170,90,.9)',10,.4);l.flashes.push({x:k.x,y:k.y-20,r:k.r*1.5,t:.28,max:.28});
   if(!p.dead&&Math.abs(cx-k.x)<k.r+p.w*.3&&Math.abs(feet-k.y)<90&&p.inv<=0)run.hurtPlayer(k.dmg,Math.sign(cx-k.x)||1,null,260,true);
   for(const e of run.enemies)if(!e.dead&&e.type!=='dockmaster'&&!(e.spawnT>0)&&Math.abs(e.cx-k.x)<k.r+e.w*.3&&Math.abs(e.floor-k.y)<90)e.damage(30,Math.sign(e.cx-k.x)||1,'blast');
   for(const b of l.barrels)if(b.state==='idle'&&Math.abs(b.x-k.x)<k.r+20&&Math.abs(b.y-k.y)<60){b.state='lit';b.fuse=.2}
   for(const c of l.crates)if(!c.broken&&Math.abs(c.x-k.x)<k.r+20&&Math.abs(c.y-k.y)<60)breakCrate(run,c);
  }}
  l.marks=l.marks.filter(k=>k.t<k.warn+.3);
  // ---- powder barrels
  for(const b of l.barrels){
   if(b.state==='lit'||b.state==='fly'){b.fuse-=dt;if(run.fx.on&&Math.random()<.5)run.fx.cap(run.fx.parts,{x:b.x+3,y:b.y-46,vx:(Math.random()-.5)*60,vy:-60-Math.random()*60,g:300,life:.25,max:.25,size:2,color:'#ffd27a'},160)}
   if(b.state==='fly'){
    const oy=b.y;b.vy+=1300*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
    if(run.solidList().some(q=>overlap(barrelBox(b),q)&&oy>q.y+2)){b.x-=b.vx*dt;b.vx*=-.3}
    if(b.owner==='hero'){const hit=run.enemies.find(e=>!e.dead&&!(e.spawnT>0)&&overlap(barrelBox(b),e.hurtBox()));if(hit){b.fuse=0}}
    if(b.vy>0){const g=groundBelow(run,b.x,oy);if(g!==null&&b.y>=g){b.y=g;b.vy=0;b.vx=0;b.state='lit';run.audio.at('land',b.x,{vol:.5});run.fx.dust(b.x,b.y,5)}}
    if(b.y>run.cfg.world.height){b.state='gone';continue}
   }
   if((b.state==='lit'||b.state==='fly')&&b.fuse<=0){b.state='gone';blast(run,b.x,b.y,b.r||120,{source:b.owner==='enemy'?'bossKeg':b.kicked?'kick':null})}
  }
  l.barrels=l.barrels.filter(b=>b.state!=='gone'||b.id);
  // ---- stalactites
  for(const q of l.falls){
   if(q.state==='idle'&&!p.dead&&Math.abs(cx-q.x)<90&&feet>q.top&&feet<=q.floor+4){q.state='shake';q.t=.75;run.audio.at('crack',q.x,{vol:.8});run.audio.at('rumble',q.x,{vol:.4,gap:.5})}
   else if(q.state==='shake'){q.t-=dt;if(run.fx.on&&Math.random()<.35)run.fx.cap(run.fx.parts,{x:q.x+(Math.random()-.5)*16,y:q.top+10,vx:0,vy:40,g:600,life:.5,max:.5,size:2,color:'rgba(180,160,130,.7)'},160);if(q.t<=0){q.state='fall';q.vy=0}}
   else if(q.state==='fall'){q.vy+=1900*dt;q.y+=q.vy*dt;const tip={x:q.x-12,y:q.y+70,w:24,h:50};
    if(!p.dead&&p.inv<=0&&overlap(tip,p)){run.hurtPlayer(16,0,null,0,true);q.y=q.floor-120}
    for(const e of run.enemies)if(!e.dead&&overlap(tip,e.hurtBox())){e.damage(40,1,'blast')}
    if(q.y+120>=q.floor){q.state='done';run.audio.at('shatter',q.x,{vol:.8});run.fx.debris(q.x,q.floor-6,14);run.camera.shake=Math.max(run.camera.shake,3)}}
  }
  for(const b of l.breakables)b.flash=Math.max(0,b.flash-dt);
  for(const f of l.flashes)f.t-=dt;l.flashes=l.flashes.filter(f=>f.t>0);
 },
 heroHazards(run){for(const sp of run.cfg.spikes){let up=true;if(sp.kind==='trap'){const ph=(run.spikeT+sp.offset)%sp.cycle;up=ph<sp.up}
  if(up&&!run.p.dead&&overlap(run.p,{x:sp.x+4,y:sp.y-34,w:sp.w-8,h:34})&&run.hurtPlayer(sp.kind==='trap'?15:17,0,null,0))run.p.vy=-420}},
 enemyMove(e,target,speed,dt){return safeWalk(e,target,e.type==='pirate'?speed*1.08:speed,dt)},
 enemyHit(e,kind){
  if(e.dead)return;
  if(e.type==='dockmaster'){
   // super-armour: hits land (damage, flash, small push) but only a parry or a blast breaks his swing
   e.kb*=.25;e.hurtT=BOSS_ATTACK.includes(e.state)||e.state==='stun'?0:Math.min(e.hurtT,.12);if(e.state!=='stun')e.poise=(e.poise||0)+1;
   if(kind==='counter'&&BOSS_ATTACK.includes(e.state)){e.state='stun';e.timer=1.1;e.hurtT=0;e.hitDone=true}
   return;
  }
  if(!['windup','strike','lunge','draw','release','throw'].includes(e.state))return;
  e.state='recover';e.timer=kind==='dash'?.3:.38;e.hitDone=true;
 },
 enemyAttackAllowed(e,box,p){
  const run=e.run;return enemyHitBoxClear(run,box)&&clearRay(run,e.cx,e.y+e.h*.44,p.x+p.w/2,p.y+p.h*.48);
 },
 blockCounter(run,source){
  if(!source?.damage)return;
  if(['strike','lunge'].includes(source.state)){source.state='recover';source.timer=.42;source.hitDone=true}
  run.hitStop(.08);run.fx.ring(run.p.x+run.p.w/2+run.p.dir*20,run.p.y+run.p.h*.4,'rgba(169,234,255,.95)',10,.35);
  if(source.damage(12,run.p.dir,'counter')==='hit'){
   run.fx.spark(source.cx,source.y+source.h*.42,'#a9eaff',12);run.fx.text('12',source.cx,source.y-14,'#a9eaff');
  }
 },
 strike(run,box,dmg,step){
  const l=run.l1,p=run.p;let hit=false;
  for(const b of l.barrels){if(!(b.state==='idle'||b.state==='lit')||!overlap(box,barrelBox(b)))continue;hit=true;
   if(b.state==='idle')lightBarrel(run,b);else{b.kicked=true;kickBarrel(run,b,p.dir)}}
  for(const k of l.crates)if(!k.broken&&overlap(box,crateBox(k))){breakCrate(run,k);hit=true}
  for(const b of l.breakables)if(!b.broken&&overlap(box,b)){hitBreakable(run,b,step===3?2:1);hit=true}
  return hit;
 },
 projectileHit(run,q){
  const l=run.l1;
  for(const b of l.barrels)if((b.state==='idle'||b.state==='lit')&&overlap(q,barrelBox(b))){b.state='lit';b.fuse=Math.min(b.fuse||1,.12);return true}
  for(const k of l.crates)if(!k.broken&&overlap(q,crateBox(k))){breakCrate(run,k);return true}
  for(const b of l.breakables)if(!b.broken&&overlap(q,b)){hitBreakable(run,b,1);return true}
  return false;
 },
 dashStrike(run,box){for(const k of run.l1.crates)if(!k.broken&&overlap(box,crateBox(k)))breakCrate(run,k);return false},
 bossPhase2(run,e){const p=run.p;run.banner={t:3.2,text:text(run.lang,'phase2')};run.audio.play('roar',{vol:.9});run.audio.play('horn',{vol:.8});run.camera.shake=9;e.state='roar';e.timer=1;e.poise=0;run.fx.ring(e.cx,e.floor-60,'rgba(255,200,120,.9)',20,.6);if(!p.dead&&Math.abs(p.x+p.w/2-e.cx)<260){def.push(run,Math.sign(p.x+p.w/2-e.cx||1)*640);p.vy=-300;p.ground=false}def.music(run);setTimeout(()=>{if(run.phase==='play')def.hint(run,'hintKeg')},3300)},
 bossBarrage(run,e){
  const p=run.p,cx=p.x+p.w/2,a=run.cfg.arena,lo=a.wallX+60,hi=a.gateX-40;
  // three marked shells: one on Mari, one each side — always leaves a safe gap between them
  for(const [off,delay] of [[0,1.25],[-150,1.5],[150,1.75]])addMark(run,clamp(cx+off,lo,hi),{warn:delay,r:62,dmg:18,from:'boss'});
  run.audio.play('cannon',{vol:.8});
 },
 bossKeg(run,e){
  const p=run.p,tx=clamp(p.x+p.w/2,e.range[0]+40,e.range[1]-40),T=.95,sx=e.cx+e.dir*30,sy=e.floor-110,ty=e.floor;
  run.l1.barrels.push({x:sx,y:sy,vx:(tx-sx)/T,vy:(ty-sy-.5*1300*T*T)/T,state:'fly',fuse:T+1.35,owner:'enemy',r:105});
 },
 paintSolid,paintLedge,drawEnemy:drawFoe,
 drawCrumble(run,c,b){
  const im=ledgeImage(run,'dock',b);if(!im)return;const j=b.state==='shake'?(Math.random()-.5)*4:0;
  c.save();c.imageSmoothingEnabled=true;c.drawImage(im,b.x-2+j,b.y-4+(b.state==='shake'?2:0),b.w+4,38);
  if(b.state==='shake'){c.strokeStyle='rgba(30,18,10,.9)';c.lineWidth=2;c.beginPath();c.moveTo(b.x+b.w*.3+j,b.y+2);c.lineTo(b.x+b.w*.45+j,b.y+18);c.lineTo(b.x+b.w*.38+j,b.y+30);c.stroke()}
  c.restore();
 },
 drawMover(run,c,m){
  const im=ledgeImage(run,'dock',m),crate=img(run,'prop-crate.webp');if(!im)return;c.save();c.imageSmoothingEnabled=true;
  if(m.look==='cargo'){c.strokeStyle='rgba(60,42,26,.95)';c.lineWidth=3;c.beginPath();c.moveTo(m.x+12,m.y);c.lineTo(m.x+m.w/2,m.y-170);c.lineTo(m.x+m.w-12,m.y);c.moveTo(m.x+m.w/2,m.y-170);c.lineTo(m.x+m.w/2,m.y-420);c.stroke()}
  else{const bob=Math.sin(run.time*2+m.x)*1.5;c.translate(0,bob)}
  c.drawImage(im,m.x-4,m.y-4,m.w+8,40);if(m.look==='cargo'&&crate)c.drawImage(crate,m.x+m.w-40,m.y-36,38,34);
  c.restore();
 },
 drawBackground(run,c){
  const W=E.W,cam=run.camera,cx=cam.x+W/2,ph=H*1.08,py=H-ph+16-(cam.y-300)*.08;
  const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#68a7bd');sky.addColorStop(.58,'#b7d2be');sky.addColorStop(1,'#d7c58d');c.fillStyle=sky;c.fillRect(0,0,W,H);
  for(const z of run.cfg.backdrops){const mid=(z.from+z.to)/2,weight=clamp(1-Math.max(0,Math.abs(cx-mid)-(z.to-z.from)*.4)/420,0,1);if(weight<=0)continue;
   const im=run.images[ART+'plate-'+z.plate+'.webp'];if(!im)continue;const pw=im.width*ph/im.height,ox=-((cam.x*.19+mid*.19)%(pw*2));
   const yy=z.plate==='caves'?H-ph+40-(cam.y-500)*.12:py;
   c.save();c.globalAlpha=weight;for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>W||x+pw<0)continue;if(k%2){c.save();c.translate(x+pw,yy);c.scale(-1,1);c.drawImage(im,0,0,pw,ph);c.restore()}else c.drawImage(im,x,yy,pw,ph)}c.restore();
  }
 },
 drawActors(run,c){const p=run.p;if(p.dead)return;c.save();c.fillStyle='rgba(30,38,28,.26)';c.beginPath();c.ellipse(p.x+p.w/2,p.y+p.h-2,p.w*.48,6,0,0,TAU);c.fill();c.restore()},
 drawBack(run,c){
  const cam=run.camera,W=E.W,t=run.time,cx=cam.x+W/2,dry=isDry(run,cx);
  if(!dry){
   for(let i=0;i<4;i++){const x=((i*397-t*(7+i))*1.3+cam.x*.12)% (W+260)-130+cam.x,y=345+i*37+Math.sin(t*.4+i)*7+cam.y*.0,g=c.createRadialGradient(x,y,4,x,y,120+i*12);g.addColorStop(0,'rgba(243,239,210,.14)');g.addColorStop(1,'rgba(243,239,210,0)');c.fillStyle=g;c.fillRect(x-132,y-64,264,128)}
   for(const[x,y]of run.cfg.decor.gulls){if(Math.abs(x-cx)>1400)continue;const gx=cam.x+((x-cam.x*.32+t*(20+(x%3)*7))% (W+100)+W+100)%(W+100)-50,gy=y+Math.sin(t*2+x)*7,wing=Math.sin(t*8+x)*5;c.save();c.translate(gx,gy);c.strokeStyle='rgba(28,55,54,.68)';c.lineWidth=2;c.beginPath();c.moveTo(-13,wing);c.quadraticCurveTo(-7,-8,0,0);c.quadraticCurveTo(8,-8,14,wing);c.stroke();c.restore()}
  }
  // broken masts of the graveyard wrecks, with rigging and torn flags that move in the wind
  const wood=paintPattern(run,c,L4+'wood-deck.png');
  for(const [x,base,h] of run.cfg.decor.masts){if(x<cam.x-260||x>cam.x+W+260)continue;
   c.save();c.fillStyle=wood;c.fillRect(x-7,base-h,14,h);c.fillStyle='rgba(20,12,8,.4)';c.fillRect(x+3,base-h,4,h);
   c.fillRect(x-60,base-h*.72,120,8);c.fillStyle=wood;c.fillRect(x-60,base-h*.72-1,120,7);
   c.strokeStyle='rgba(60,44,30,.75)';c.lineWidth=1.6;c.beginPath();c.moveTo(x,base-h);c.lineTo(x-150,base);c.moveTo(x,base-h);c.lineTo(x+140,base);c.moveTo(x-60,base-h*.72);c.lineTo(x-110,base);c.moveTo(x+60,base-h*.72);c.lineTo(x+100,base);c.stroke();
   const sw=Math.sin(t*2.2+x)*.5+.5;c.fillStyle='rgba(205,194,165,.85)';c.beginPath();c.moveTo(x-54,base-h*.72+6);c.lineTo(x+52,base-h*.72+6);c.quadraticCurveTo(x+40+sw*8,base-h*.5,x+30,base-h*.38);c.lineTo(x+4,base-h*.44);c.lineTo(x-10,base-h*.36);c.quadraticCurveTo(x-40-sw*6,base-h*.5,x-54,base-h*.72+6);c.fill();
   c.fillStyle='rgba(120,40,32,.9)';c.beginPath();c.moveTo(x+7,base-h+4);for(let i=0;i<=6;i++){const fx=x+7+i*8,fy=base-h+4+Math.sin(t*6+i*.9+x)*3*(i/6);c.lineTo(fx,fy)}for(let i=6;i>=0;i--){const fx=x+7+i*8,fy=base-h+26+Math.sin(t*6+i*.9+x)*3*(i/6);c.lineTo(fx,fy)}c.fill();c.restore()}
 },
 drawMid(run,c){
  const cam=run.camera,t=run.time,d=run.cfg.decor,W=E.W,l=run.l1,inView=(x,m=120)=>x>cam.x-m&&x<cam.x+W+m;
  for(const[x,y]of d.lanterns){if(!inView(x,70))continue;const flick=.86+.14*Math.sin(t*9+x);run.fx.glow(c,x,y-85,70,'rgba(255,183,76,',.16*flick);c.fillStyle='#4b3420';c.fillRect(x-3,y-116,6,34);c.fillStyle='#bd8341';c.fillRect(x-10,y-92,20,15);c.fillStyle='#ffe2a0';c.fillRect(x-5,y-89,10,9)}
  for(const[x,y]of d.torches){if(!inView(x,90))continue;c.fillStyle='#3d2a1b';c.fillRect(x-3,y-18,6,26);c.fillStyle='#6b4a2e';c.fillRect(x-8,y-22,16,6);run.fire(c,x,y-22,.8,true)}
  for(const[x,y]of d.nets){if(!inView(x,160))continue;c.save();c.strokeStyle='rgba(76,51,31,.72)';c.lineWidth=2;for(let k=0;k<5;k++){c.beginPath();c.moveTo(x-76+k*38,y-128);c.lineTo(x-64+k*33,y-8);c.stroke()}for(let yy=y-108;yy<y;yy+=24){c.beginPath();c.moveTo(x-78,yy);c.lineTo(x+78,yy+12);c.stroke()}c.restore()}
  const cannon=img(run,'prop-cannon.webp');
  for(const [x,y,dir] of d.cannons){if(!inView(x,160)||!cannon)continue;c.save();c.imageSmoothingEnabled=true;c.translate(x,y);c.scale(dir,1);c.drawImage(cannon,-56,-56,112,60);c.restore();
   if(l.lastShot?.id==='bastion'&&run.time-l.lastShot.t<.5&&dir>0){const k=1-(run.time-l.lastShot.t)/.5;run.fx.glow(c,x+60,y-38,40*k+10,'rgba(255,170,80,',k)}}
  for(const sp of run.cfg.spikes){if(!inView(sp.x,60))continue;const ph=(run.spikeT+(sp.offset||0))%(sp.cycle||1),rise=sp.kind==='trap'?(ph<sp.up?clamp(ph/.08,0,1):0):1,n=Math.max(3,Math.round(sp.w/23));
   if(sp.kind==='trap'&&rise===0&&ph>sp.cycle-sp.warn){c.fillStyle='rgba(255,90,60,'+(.25+.25*Math.sin(t*30))+')';c.fillRect(sp.x+4,sp.y-5,sp.w-8,4)}
   for(let i=0;i<n;i++){const x=sp.x+8+i*22,top=sp.y-7-rise*34;c.fillStyle='#697578';c.beginPath();c.moveTo(x-7,sp.y-7);c.lineTo(x,top);c.lineTo(x+7,sp.y-7);c.closePath();c.fill();c.fillStyle='rgba(255,255,255,.55)';c.fillRect(x-1,top+4,2,Math.max(0,sp.y-top-12))}}
  c.save();c.imageSmoothingEnabled=true;
  // breakable door / vault wall, crates and powder barrels
  for(const b of l.breakables){if(b.broken||!inView(b.x))continue;const im=img(run,b.look==='boards'?'prop-boards.webp':'prop-crackwall.webp');if(im)c.drawImage(im,b.x-4,b.y,b.w+8,b.h);
   if(b.hits>0){c.strokeStyle='rgba(20,12,8,.85)';c.lineWidth=2;c.beginPath();for(let i=0;i<b.hits;i++){const y=b.y+18+i*28;c.moveTo(b.x+2,y);c.lineTo(b.x+b.w*.6,y+10);c.lineTo(b.x+b.w-2,y+4)}c.stroke()}
   if(b.secret&&!b.hits){const k=.5+.5*Math.sin(t*2.4);c.fillStyle='rgba(255,236,180,'+(.05+.08*k)+')';c.fillRect(b.x,b.y,b.w,b.h)}
   if(b.flash>0){c.fillStyle='rgba(255,255,255,'+b.flash*4+')';c.fillRect(b.x,b.y,b.w,b.h)}}
  const crate=img(run,'prop-crate.webp'),powder=img(run,'prop-powder.webp');
  for(const k of l.crates){if(k.broken||!inView(k.x)||!crate)continue;c.drawImage(crate,k.x-30,k.y-52,62,54)}
  for(const b of l.barrels){if(b.state==='gone'||!inView(b.x)||!powder)continue;const lit=b.state!=='idle',blink=lit&&Math.floor(b.fuse*(b.fuse<.5?16:7))%2===0;
   c.save();c.translate(b.x,b.y);if(b.state==='fly')c.rotate(run.time*9*Math.sign(b.vx||1));c.drawImage(powder,-19,-46,38,46);
   if(blink){c.globalCompositeOperation='lighter';c.globalAlpha=.55;c.drawImage(powder,-19,-46,38,46)}c.restore();
   if(lit){run.fx.glow(c,b.x+3,b.y-48,16+6*Math.sin(t*30),'rgba(255,200,90,',.9);c.save();c.globalAlpha=.45+.25*Math.sin(t*12);c.strokeStyle='rgba(255,110,60,.9)';c.lineWidth=2;c.setLineDash([6,6]);c.beginPath();c.ellipse(b.x,b.y-4,b.r||120,(b.r||120)*.18,0,0,TAU);c.stroke();c.restore()}}
  // stalactites waiting overhead
  const st=img(run,'prop-stalactite.webp');
  for(const q of l.falls){if(q.state==='done'||!inView(q.x)||!st)continue;const j=q.state==='shake'?(Math.random()-.5)*4:0;c.drawImage(st,q.x-22+j,q.y,44,122)}
  c.restore();
  // telegraphed shell impacts: a red ring that fills, then the shell's shadow
  for(const k of l.marks){if(!inView(k.x))continue;const q=clamp(k.t/k.warn,0,1);if(k.hit)continue;
   c.save();c.globalAlpha=.35+.45*q;c.fillStyle='rgba(200,40,30,'+(.12+.25*q)+')';c.beginPath();c.ellipse(k.x,k.y-2,k.r,k.r*.2,0,0,TAU);c.fill();
   c.strokeStyle='rgba(255,90,60,.95)';c.lineWidth=2+2*q;c.beginPath();c.ellipse(k.x,k.y-2,k.r,k.r*.2,0,0,TAU);c.stroke();
   c.fillStyle='rgba(255,120,80,.55)';c.beginPath();c.ellipse(k.x,k.y-2,k.r*q,k.r*.2*q,0,0,TAU);c.fill();
   if(q>.7){const f=(q-.7)/.3,sy=k.y-420*(1-f);c.globalAlpha=1;c.fillStyle='#2b2a2a';c.beginPath();c.arc(k.x,sy-10,9,0,TAU);c.fill();c.fillStyle='rgba(255,200,120,.8)';c.fillRect(k.x-1,sy-34,2,16)}c.restore()}
  // ambush barricades and the Dockmaster's arena
  if(run.state.ambush===1){const m=run.cfg.ambush,boards=img(run,'prop-boards.webp');for(const x of [m.wallX,m.gateX]){if(!inView(x))continue;if(boards){c.save();c.imageSmoothingEnabled=true;c.drawImage(boards,x-6,m.top,48,700-m.top);c.restore()}if(crate){c.drawImage(crate,x-24,648,62,54);c.drawImage(crate,x-10,600,50,46)}}}
  if(run.state.arena){const a=run.cfg.arena,im=run.images[ART+'arena-frame.webp'];if(im&&a.wallX<cam.x+W+40&&a.gateX>cam.x-40)c.drawImage(im,a.wallX-20,370,a.gateX-a.wallX+90,330);
   if(!run.state.dockmasterDefeated){c.fillStyle='#26343a';for(let y=420;y<700;y+=26){c.fillRect(a.gateX,y,36,4);c.fillStyle='#c2b9a2';c.fillRect(a.gateX+2,y,4,1);c.fillStyle='#26343a'}for(let x=a.gateX+4;x<a.gateX+36;x+=10){c.fillRect(x,410,3,290);c.fillStyle='#d2bd85';for(let y=422;y<690;y+=52){c.beginPath();c.arc(x+1.5,y,1.3,0,TAU);c.fill()}c.fillStyle='#26343a'}}
  }
 },
 drawFront(run,c){
  const W=E.W,cam=run.camera,t=run.time,y=run.cfg.sea||780,bottom=cam.y+H+24;
  if(y>bottom)return;
  let segs=[[Math.floor(cam.x/8)*8-16,cam.x+W+16]];
  for(const [a,b] of run.cfg.dry||[])segs=segs.flatMap(([s,e])=>e<=a||s>=b?[[s,e]]:[[s,Math.min(e,a)],[Math.max(s,b),e]].filter(([u,v])=>v-u>8));
  for(const [x0,x1] of segs){
   c.save();c.beginPath();c.moveTo(x0,bottom);
   for(let x=x0;x<=x1;x+=8)c.lineTo(x,y+Math.sin(x*.018+t*1.65)*4+Math.sin(x*.047-t*2.3)*2.1);
   c.lineTo(x1,bottom);c.closePath();const g=c.createLinearGradient(0,y,0,y+280);g.addColorStop(0,'rgba(51,142,160,.76)');g.addColorStop(.25,'rgba(28,104,130,.84)');g.addColorStop(1,'rgba(9,43,61,.96)');c.fillStyle=g;c.fill();
   c.strokeStyle='rgba(220,244,226,.66)';c.lineWidth=2.2;c.beginPath();for(let x=x0;x<=x1;x+=8){const yy=y+Math.sin(x*.018+t*1.65)*4+Math.sin(x*.047-t*2.3)*2.1;x===x0?c.moveTo(x,yy):c.lineTo(x,yy)}c.stroke();
   c.globalCompositeOperation='lighter';for(let i=0;i<24;i++){const gx=x0+((i*197+t*25*(1+i%3))%Math.max(1,x1-x0)),gy=y+11+(i*47)%122;c.fillStyle='rgba(191,232,224,'+(.07+.07*(i%4)/3)+')';c.fillRect(gx,gy,17+(i%5)*7,2)}
   c.restore();
  }
  // depth: blurred foreground pieces drift past faster than the world, kept below the action
  if(run.fg&&!run.fx.reduced){const k=1.3,mid=cam.x+W/2;c.save();c.imageSmoothingEnabled=true;
   for(let i=Math.floor((mid-W)/1150);i<=Math.ceil((mid+W)/1150);i++){const wx=i*1150+((i*7919)%300),z=zoneOf(run,wx),name=FG[z.id]?.[((i%2)+2)%2],im=run.fg[name];if(!im)continue;
    const sx=(wx-mid)*k+W/2+cam.x,sy=cam.y+H-im.height*.82+28;if(sx+im.width<cam.x||sx>cam.x+W)continue;c.drawImage(im,sx,sy)}
   c.restore()}
 },
 drawProjectile(run,c,q){
  if(q.kind!=='knife')return;
  c.rotate(Math.atan2(q.vy,q.vx));c.fillStyle='#59422d';c.fillRect(-8,-1.5,10,3);c.fillStyle='#d9d4c3';c.beginPath();c.moveTo(2,0);c.lineTo(9,-3);c.lineTo(7,0);c.lineTo(9,3);c.closePath();c.fill();
 },
 drawLighting(run,c){
  const W=E.W,t=run.time,cam=run.camera,p=run.p,cx=cam.x+W/2,l=run.l1;
  // cave darkness fades in over 500 px at the cave mouths
  let dark=0;for(const [a,b] of run.cfg.dry||[])dark=Math.max(dark,clamp(Math.min(cx-a,b-cx)/500+.4,0,1)*.8);
  const fort=run.cfg.zones.find(z=>z.id==='fortress'),dusk=fort?clamp((cx-fort.from+400)/900,0,1):0,grave=clamp(1-Math.abs(cx-8530)/1700,0,1);
  // Colour grade and sun/vignette are rasterised once per mood (quantised) and composited as one image each:
  // full-screen gradient fills every frame were half of the frame cost on software-rasterised canvases.
  const grade=lightLayers(run,W,Math.round(dusk*8)/8,Math.round(grave*8)/8,dark<.5);
  c.save();c.globalCompositeOperation='multiply';c.drawImage(grade.wash,0,0);c.restore();
  if(dark>0){
   const lb=run.lightBuf,q=4,lw=Math.ceil(W/q),lh=Math.ceil(H/q);if(lb.width!==lw||lb.height!==lh){lb.width=lw;lb.height=lh}
   const x=lb.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(10,6,4,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
   const hole=(wx,wy,r,a)=>{const sx=(wx-cam.x)/q,sy=(wy-cam.y)/q,rr=r/q;if(sx<-rr||sx>lw+rr||sy<-rr||sy>lh+rr)return;const g=x.createRadialGradient(sx,sy,0,sx,sy,rr);g.addColorStop(0,'rgba(0,0,0,'+a+')');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(sx-rr,sy-rr,rr*2,rr*2)};
   for(const[tx,ty]of run.cfg.decor.torches)hole(tx,ty-24,250+Math.sin(t*9+tx)*8,.95);
   hole(p.x+p.w/2,p.y+p.h*.4,230,.7);
   for(const b of l.barrels)if(b.state!=='idle'&&b.state!=='gone')hole(b.x,b.y-30,110,.7);
   for(const f of l.flashes)hole(f.x,f.y,f.r*2.2,f.t/f.max);
   for(const k of l.marks)hole(k.x,k.y,k.r*1.3,.5);
   for(const ch of run.chests)if(!ch.open)hole(ch.x,ch.y-20,90,.5);
   c.save();c.imageSmoothingEnabled=true;c.drawImage(lb,0,0,W,H);c.restore();
   c.save();c.globalCompositeOperation='lighter';for(const[tx,ty]of run.cfg.decor.torches){const sx=tx-cam.x,sy=ty-24-cam.y;if(sx<-200||sx>W+200)continue;run.fx.glow(c,sx,sy,150,'rgba(255,150,70,',.22)}c.restore();
  }
  c.save();c.globalCompositeOperation='screen';
  for(const f of l.flashes){const k=f.t/f.max;run.fx.glow(c,f.x-cam.x,f.y-cam.y,f.r*1.4,'rgba(255,190,110,',k*.9)}
  c.drawImage(grade.glow,0,0);
  if(!run.fx.reduced)for(const m of run.motes){const x=(((m.x-cam.x*m.s*.35+t*10*m.s)%W)+W)%W,y=((m.y+Math.sin(t*.8+m.x)*12)%H);c.fillStyle=dark>.3?'rgba(255,200,140,.28)':'rgba(255,241,194,.35)';c.fillRect(x,y,2,2)}
  c.restore();
 },
 bossHud(run,c){
  const e=run.enemies.find(q=>q.id==='dockmaster'&&!q.dead);if(!e||!run.state.arena)return false;if(!c)return true;
  const W=E.W,x=W/2-188,y=116;c.save();c.fillStyle='rgba(18,30,36,.91)';c.strokeStyle='rgba(244,192,105,.92)';c.lineWidth=2;c.beginPath();c.roundRect(x,y,376,48,13);c.fill();c.stroke();
  c.strokeStyle='rgba(244,192,105,.35)';c.lineWidth=1;c.beginPath();c.roundRect(x+5,y+5,366,38,10);c.stroke();
  for(const px of [x+12,x+364]){c.fillStyle='#f0d18a';c.beginPath();c.arc(px,y+24,3,0,TAU);c.fill();c.fillStyle='#73542c';c.beginPath();c.arc(px,y+24,1,0,TAU);c.fill()}
  c.textAlign='center';c.font='800 16px Georgia,serif';c.fillStyle='#ffe7ac';c.fillText(text(run.lang,'dockmaster').toUpperCase(),W/2,y+18);c.fillStyle='#28201a';c.fillRect(x+20,y+30,336,9);const g=c.createLinearGradient(x,y,x+336,y);g.addColorStop(0,'#e34739');g.addColorStop(.55,'#f3a342');g.addColorStop(1,'#ffe17b');c.fillStyle=g;c.fillRect(x+20,y+30,336*e.hp/e.max,9);c.strokeStyle='rgba(255,230,174,.6)';c.lineWidth=1;c.strokeRect(x+20,y+30,336,9);
  c.fillStyle='#ffe7ac';c.fillRect(x+20+168-1,y+27,2,15);c.restore();
  return true;
 },
 drawHud(run,c){
  if(run.banner?.t>0){const a=clamp(Math.min(run.banner.t,4.5-run.banner.t+.01)*2,0,1),y=run.banner.small?155:190;c.save();c.globalAlpha=a;c.textAlign='center';c.font=run.banner.small?'700 17px Arial,sans-serif':'800 30px Georgia,serif';const w=Math.min(E.W-32,Math.max(520,c.measureText(run.banner.text).width+56));c.fillStyle='rgba(21,43,48,.84)';c.beginPath();c.roundRect(E.W/2-w/2,y-31,w,run.banner.small?42:58,14);c.fill();c.strokeStyle='#dfbd74';c.lineWidth=2;c.stroke();c.fillStyle='#fff0c4';c.fillText(run.banner.text,E.W/2,y+6);c.restore()}
  def.bossHud(run,c);
 },
 ambience(run){if(!run.audio.ctx)return;const z=def.zone(run).id;run.audio.loop('water',z==='caves'?.1:.48);run.audio.loop('cave',z==='caves'?.55:0);run.audio.loop('wind',z==='harbor'||z==='fortress'?.25:.12)}
};
E.register(def);
window.PirateLevel01={def,text,launch:opts=>E.launch(1,opts)};
})();

