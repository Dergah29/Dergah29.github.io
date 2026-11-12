/* Pirate Strike — Level 8: Frozen Fleet (Donmuş Donanma), third stage of chapter 2.
 * Independent level on PirateLevelEngine. Areas: Frozen Bay → the Broken Fleet → Glacier Caves → the Frozen Vault
 * → the Flagship (layout: tools/level08_layout.py, audio: tools/level08_audio.py). Aurora night, snowfall, blizzards.
 * Mechanics: slippery sea ice and frozen decks (the hero's speed follows the input slowly on 'ice'/'frozen' surfaces
 * — predictable, never random; snow, wood and ledges grip normally), falling icicles (they crack and cast a
 * growing shadow before they drop), frost vents (hiss, then a freezing blast that slows), ice spikes in the vault,
 * blizzard gusts (warning, whiteout, a gentle push), a breaking plank bridge, a drifting ice floe, the cargo lift.
 * Puzzles: the ice-block bridge (strike or shoot the hanging ice blocks to drop them into the channel as stepping
 * stones) and the thaw (three heat braziers burn for 9 s each — light all three together to melt the vault door).
 * Secrets: the crow's nest of the second hull, the alcove behind an ice wall under the glacier mouth.
 * New pirates, drawn as articulated rigs (walk cycles with leg swing and knee bend, telegraphs, hurt and death):
 * Frostbite Skater (crouch → long ice slide through you → skid; hatchet chops), Harpooner (aimed harpoon that
 * pins you in place for a moment, visible crank reload, butt bash), Frozen Revenant (slow, frost grasp that slows,
 * shatters into an ice burst when it dies). Encounters: boarding the first hull, the frozen hall. Mini-boss:
 * Captain Rime, the frozen quartermaster (three ice-armour plates halve damage until broken; axe combo, harpoon,
 * frost breath you escape by getting behind him; once his armour is gone, ice stomps bring icicles down from the
 * rigging). Ending: open the Admiral's sea chest, the chart to the Chain Fortress, story → Level 9 unlocked. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A8=BASE+'assets/level-08/',AM=BASE+'assets/music/';
const L={
en:{levelWord:'Level',title:'Level 8 · Frozen Fleet',blurb:'A lost fleet frozen into the northern sea — slippery ice, falling icicles and Captain Rime guarding the Admiral’s chart',
 bay:'Frozen Bay',fleet:'The Broken Fleet',caves:'Glacier Caves',vault:'The Frozen Vault',flagship:'The Flagship',
 objBay:'Cross the frozen bay — the ice is slippery, snow gives grip',objBoard:'Boarders! Clear the deck · wave {n}/2',objFleet:'Cross the broken fleet — watch the icicles on the masts',
 objBlocks:'Strike or shoot the hanging ice blocks to drop them into the channel ({n}/3)',objCaves:'Find a way through the glacier caves',objHall:'The frozen hall! · wave {n}/2',
 objThaw:'Light all three heat braziers at once to thaw the vault door',objVault:'The vault is open — take the lift to the flagship',objRime:'Defeat Captain Rime',objChest:'Open the Admiral’s sea chest',
 ambush:'AMBUSH!',wave:'WAVE {n}',cleared:'The way is clear!',blockDrop:'An ice block drops into the channel',secretWall:'Secret: a smuggler’s cache in the ice',secretNest:'Secret: the crow’s nest stash',
 thawed:'The braziers melt the ice — the vault door gives way!',rime:'CAPTAIN RIME',rimeIntro:'Captain Rime breaks out of the ice!',armorGone:'His ice armour shatters!',plate:'Armour plate broken ({n}/3)',
 rimeDown:'Captain Rime falls!',chart:'THE ADMIRAL’S CHART',chartSub:'The way to the Chain Fortress',victory:'VICTORY!',tap:'Tap to continue',skip:'SKIP ▶▶',
 blizzard:'BLIZZARD',ice:'ICE',frozenHud:'FROZEN',
 hIce:'Sea ice is slippery: you speed up and stop slowly. Snow and wood give grip',hIcicle:'Icicles crack and cast a shadow before they fall — keep moving or stay back',
 hVent:'Frost vents hiss before they blast — a blast slows you down',hSkater:'Skaters crouch before a long slide — jump it or block, then strike while they skid',
 hHarpoon:'Harpooners aim a long line: block or step aside — a hit pins you for a moment',hRevenant:'Frozen Revenants shatter when they die — step away from the ice burst',
 hBlocks:'The hanging ice blocks can be struck or shot down — throw your sword or fire your pistol',hThaw:'Each brazier burns for 9 seconds — light all three before the first goes out',
 hRime:'Break his three ice plates first. Get behind him when he breathes frost!',
 s2n:'Captain Rime',s1:'Captain Rime is beaten — and the Admiral’s own sea chest is ours!',s2:'The chart… leads to the Chain Fortress. No ship has ever broken its chains…',
 s3:'The ice cracks open. A dark sea road leads south, toward a fortress bound in giant chains.',s4:'Then we’ll break them. Next stop — the Chain Fortress!'},
az:{levelWord:'Səviyyə',title:'Səviyyə 8 · Donmuş Donanma',blurb:'Şimal dənizində donub qalmış itkin donanma — sürüşkən buz, düşən buz sarğıları və Admiralın xəritəsini qoruyan Kapitan Rime',
 bay:'Donmuş Körfəz',fleet:'Qırıq Donanma',caves:'Buzlaq Mağaraları',vault:'Donmuş Xəzinə Otağı',flagship:'Flaqman Gəmi',
 objBay:'Donmuş körfəzi keç — buz sürüşkəndir, qar möhkəm tutur',objBoard:'Abordaj! Göyərtəni təmizlə · dalğa {n}/2',objFleet:'Qırıq donanmanı keç — dor ağaclarındakı buz sarğılarına diqqət et',
 objBlocks:'Asılı buz bloklarını vur və ya güllələ — kanala düşsünlər ({n}/3)',objCaves:'Buzlaq mağaralarından keçid tap',objHall:'Donmuş zal! · dalğa {n}/2',
 objThaw:'Xəzinə qapısını əritmək üçün üç isti manqalı eyni anda yandır',objVault:'Xəzinə otağı açıqdır — liftlə flaqman gəmiyə qalx',objRime:'Kapitan Rime-ı məğlub et',objChest:'Admiralın dəniz sandığını aç',
 ambush:'PUSQU!',wave:'DALĞA {n}',cleared:'Yol açıqdır!',blockDrop:'Buz bloku kanala düşdü',secretWall:'Sirr: buzun içində qaçaqmalçı xəzinəsi',secretNest:'Sirr: gözətçi səbətindəki xəzinə',
 thawed:'Manqallar buzu əridir — xəzinə qapısı açılır!',rime:'KAPİTAN RIME',rimeIntro:'Kapitan Rime buzu qırıb çıxır!',armorGone:'Onun buz zirehi parçalandı!',plate:'Zireh lövhəsi qırıldı ({n}/3)',
 rimeDown:'Kapitan Rime yıxıldı!',chart:'ADMİRALIN XƏRİTƏSİ',chartSub:'Zəncirli Qalaya gedən yol',victory:'QƏLƏBƏ!',tap:'Davam etmək üçün toxun',skip:'KEÇ ▶▶',
 blizzard:'ÇOVĞUN',ice:'BUZ',frozenHud:'DONDUN',
 hIce:'Dəniz buzu sürüşkəndir: yavaş sürətlənir və yavaş dayanırsan. Qar və taxta möhkəm tutur',hIcicle:'Buz sarğıları düşməzdən əvvəl çatlayır və kölgə salır — hərəkətdə qal və ya geri dur',
 hVent:'Şaxta ventləri partlamazdan əvvəl fısıldayır — partlayış səni yavaşladır',hSkater:'Konkisürənlər uzun sürüşmədən əvvəl əyilir — tullan və ya blokla, sonra sürüşüb dayananda vur',
 hHarpoon:'Zıpkınçılar uzun xətt nişan alır: blokla və ya kənara çəkil — dəysə, bir anlıq yerində qalırsan',hRevenant:'Donmuş Ruhlar öləndə parçalanır — buz partlayışından uzaq dur',
 hBlocks:'Asılı buz bloklarını vurmaq və ya güllələmək olar — qılıncını at və ya tapançadan atəş aç',hThaw:'Hər manqal 9 saniyə yanır — birincisi sönmədən hər üçünü yandır',
 hRime:'Əvvəlcə üç buz lövhəsini qır. Şaxta nəfəsi zamanı onun arxasına keç!',
 s2n:'Kapitan Rime',s1:'Kapitan Rime məğlub oldu — Admiralın öz dəniz sandığı artıq bizimdir!',s2:'Xəritə… Zəncirli Qalaya aparır. Heç bir gəmi onun zəncirlərini qıra bilməyib…',
 s3:'Buz çatlayır. Qaranlıq dəniz yolu cənuba, nəhəng zəncirlərlə bağlanmış qalaya uzanır.',s4:'Onda biz qıracağıq. Növbəti dayanacaq — Zəncirli Qala!'},
tr:{levelWord:'Bölüm',title:'Bölüm 8 · Donmuş Filo',blurb:'Kuzey denizinde donup kalmış kayıp bir filo — kaygan buz, düşen sarkıtlar ve Amiralin haritasını koruyan Kaptan Rime',
 bay:'Donmuş Koy',fleet:'Kırık Filo',caves:'Buzul Mağaraları',vault:'Donmuş Hazine Odası',flagship:'Amiral Gemisi',
 objBay:'Donmuş koyu geç — buz kaygandır, kar tutar',objBoard:'Rampa! Güverteyi temizle · dalga {n}/2',objFleet:'Kırık filoyu geç — direklerdeki sarkıtlara dikkat',
 objBlocks:'Asılı buz bloklarını vur ya da vur düşür — kanala düşsünler ({n}/3)',objCaves:'Buzul mağaralarından bir yol bul',objHall:'Donmuş salon! · dalga {n}/2',
 objThaw:'Kapıyı eritmek için üç ısı mangalını aynı anda yak',objVault:'Hazine odası açık — asansörle amiral gemisine çık',objRime:'Kaptan Rime’ı yen',objChest:'Amiralin deniz sandığını aç',
 ambush:'PUSU!',wave:'DALGA {n}',cleared:'Yol açık!',blockDrop:'Bir buz bloğu kanala düştü',secretWall:'Sır: buzun içinde kaçakçı zulası',secretNest:'Sır: gözcü sepetindeki zula',
 thawed:'Mangallar buzu eritiyor — hazine kapısı açılıyor!',rime:'KAPTAN RIME',rimeIntro:'Kaptan Rime buzu kırıp çıkıyor!',armorGone:'Buz zırhı parçalandı!',plate:'Zırh plakası kırıldı ({n}/3)',
 rimeDown:'Kaptan Rime düştü!',chart:'AMİRALİN HARİTASI',chartSub:'Zincirli Kale’ye giden yol',victory:'ZAFER!',tap:'Devam için dokun',skip:'GEÇ ▶▶',
 blizzard:'TİPİ',ice:'BUZ',frozenHud:'DONDUN',
 hIce:'Deniz buzu kaygandır: yavaş hızlanır, yavaş durursun. Kar ve tahta tutar',hIcicle:'Sarkıtlar düşmeden önce çatlar ve gölge düşürür — hareket et ya da geri dur',
 hVent:'Ayaz delikleri patlamadan önce tıslar — patlama seni yavaşlatır',hSkater:'Patenciler uzun kaymadan önce çömelir — zıpla ya da blokla, kayıp durunca vur',
 hHarpoon:'Zıpkıncılar uzun bir çizgiyle nişan alır: blokla ya da kenara çekil — isabet seni bir an sabitler',hRevenant:'Donmuş Hortlaklar ölünce parçalanır — buz patlamasından uzaklaş',
 hBlocks:'Asılı buz blokları vurularak ya da ateş edilerek düşürülebilir — kılıcını fırlat ya da tabancayı ateşle',hThaw:'Her mangal 9 saniye yanar — ilki sönmeden üçünü de yak',
 hRime:'Önce üç buz plakasını kır. Ayaz nefesinde arkasına geç!',
 s2n:'Kaptan Rime',s1:'Kaptan Rime yenildi — Amiralin kendi deniz sandığı artık bizim!',s2:'Harita… Zincirli Kale’ye çıkıyor. Hiçbir gemi zincirlerini kıramadı…',
 s3:'Buz yarılıyor. Karanlık bir deniz yolu güneye, dev zincirlerle bağlı bir kaleye uzanıyor.',s4:'O zaman biz kırarız. Sonraki durak — Zincirli Kale!'},
ru:{levelWord:'Уровень',title:'Уровень 8 · Ледяной флот',blurb:'Пропавший флот, вмёрзший в северное море — скользкий лёд, падающие сосульки и капитан Райм, стерегущий карту Адмирала',
 bay:'Ледяная бухта',fleet:'Разбитый флот',caves:'Ледниковые пещеры',vault:'Ледяная сокровищница',flagship:'Флагман',
 objBay:'Пересеки ледяную бухту — лёд скользкий, снег держит',objBoard:'Абордаж! Очисти палубу · волна {n}/2',objFleet:'Пройди разбитый флот — берегись сосулек на мачтах',
 objBlocks:'Сбей висящие ледяные глыбы ударом или выстрелом в канал ({n}/3)',objCaves:'Найди путь через ледниковые пещеры',objHall:'Ледяной зал! · волна {n}/2',
 objThaw:'Зажги все три жаровни одновременно, чтобы растопить дверь',objVault:'Сокровищница открыта — на подъёмнике к флагману',objRime:'Победи капитана Райма',objChest:'Открой морской сундук Адмирала',
 ambush:'ЗАСАДА!',wave:'ВОЛНА {n}',cleared:'Путь свободен!',blockDrop:'Ледяная глыба упала в канал',secretWall:'Тайник: схрон контрабандистов во льду',secretNest:'Тайник: запас в вороньем гнезде',
 thawed:'Жаровни растопили лёд — дверь сокровищницы поддаётся!',rime:'КАПИТАН РАЙМ',rimeIntro:'Капитан Райм вырывается из льда!',armorGone:'Его ледяная броня разбита!',plate:'Пластина брони разбита ({n}/3)',
 rimeDown:'Капитан Райм повержен!',chart:'КАРТА АДМИРАЛА',chartSub:'Путь к Цепной крепости',victory:'ПОБЕДА!',tap:'Нажми, чтобы продолжить',skip:'ПРОПУСТИТЬ ▶▶',
 blizzard:'МЕТЕЛЬ',ice:'ЛЁД',frozenHud:'ЗАМЁРЗ',
 hIce:'Морской лёд скользкий: разгоняешься и тормозишь медленно. Снег и дерево держат',hIcicle:'Сосульки трескаются и отбрасывают тень перед падением — двигайся или отойди',
 hVent:'Морозные отдушины шипят перед выбросом — выброс замедляет',hSkater:'Конькобежцы приседают перед долгим скольжением — прыгай или блокируй и бей, пока они тормозят',
 hHarpoon:'Гарпунщики целятся по длинной линии: блокируй или отойди — попадание на миг пригвождает',hRevenant:'Ледяные мертвецы разлетаются при гибели — отойди от ледяного взрыва',
 hBlocks:'Висящие глыбы можно сбить ударом или выстрелом — брось меч или выстрели из пистолета',hThaw:'Каждая жаровня горит 9 секунд — зажги все три, пока первая не погасла',
 hRime:'Сначала разбей три ледяные пластины. Когда он дышит морозом — зайди за спину!',
 s2n:'Капитан Райм',s1:'Капитан Райм побеждён — и морской сундук самого Адмирала наш!',s2:'Карта… ведёт к Цепной крепости. Ни один корабль не порвал её цепей…',
 s3:'Лёд раскалывается. Тёмный морской путь уходит на юг, к крепости в гигантских цепях.',s4:'Значит, порвём мы. Следующая остановка — Цепная крепость!'},
pl:{levelWord:'Poziom',title:'Poziom 8 · Lodowa Flota',blurb:'Zaginiona flota zamarznięta w północnym morzu — śliski lód, spadające sople i kapitan Rime strzegący mapy Admirała',
 bay:'Zamarznięta Zatoka',fleet:'Rozbita Flota',caves:'Lodowcowe Jaskinie',vault:'Lodowy Skarbiec',flagship:'Okręt Flagowy',
 objBay:'Przejdź zamarzniętą zatokę — lód jest śliski, śnieg trzyma',objBoard:'Abordaż! Oczyść pokład · fala {n}/2',objFleet:'Przejdź rozbitą flotę — uważaj na sople na masztach',
 objBlocks:'Strąć wiszące bloki lodu uderzeniem lub strzałem do kanału ({n}/3)',objCaves:'Znajdź drogę przez lodowcowe jaskinie',objHall:'Lodowa sala! · fala {n}/2',
 objThaw:'Zapal jednocześnie trzy paleniska, by roztopić drzwi skarbca',objVault:'Skarbiec otwarty — windą na okręt flagowy',objRime:'Pokonaj kapitana Rime’a',objChest:'Otwórz morską skrzynię Admirała',
 ambush:'ZASADZKA!',wave:'FALA {n}',cleared:'Droga wolna!',blockDrop:'Blok lodu spada do kanału',secretWall:'Sekret: skrytka przemytników w lodzie',secretNest:'Sekret: skrytka w bocianim gnieździe',
 thawed:'Paleniska topią lód — drzwi skarbca puszczają!',rime:'KAPITAN RIME',rimeIntro:'Kapitan Rime wyrywa się z lodu!',armorGone:'Jego lodowa zbroja pęka!',plate:'Płyta zbroi rozbita ({n}/3)',
 rimeDown:'Kapitan Rime pokonany!',chart:'MAPA ADMIRAŁA',chartSub:'Droga do Łańcuchowej Twierdzy',victory:'ZWYCIĘSTWO!',tap:'Dotknij, by kontynuować',skip:'POMIŃ ▶▶',
 blizzard:'ZAMIEĆ',ice:'LÓD',frozenHud:'ZAMARZNIĘTY',
 hIce:'Lód morski jest śliski: wolno przyspieszasz i wolno hamujesz. Śnieg i drewno trzymają',hIcicle:'Sople pękają i rzucają cień przed upadkiem — ruszaj się albo się cofnij',
 hVent:'Lodowe kominy syczą przed wybuchem — wybuch spowalnia',hSkater:'Łyżwiarze kucają przed długim ślizgiem — skocz lub blokuj, bij gdy hamują',
 hHarpoon:'Harpunnicy celują długą linią: blokuj lub odsuń się — trafienie na chwilę cię przyszpila',hRevenant:'Zamarznięte upiory pękają przy śmierci — odsuń się od lodowego wybuchu',
 hBlocks:'Wiszące bloki można strącić uderzeniem lub strzałem — rzuć mieczem albo strzel z pistoletu',hThaw:'Każde palenisko płonie 9 sekund — zapal wszystkie trzy, zanim pierwsze zgaśnie',
 hRime:'Najpierw rozbij trzy lodowe płyty. Gdy zieje mrozem — zajdź go od tyłu!',
 s2n:'Kapitan Rime',s1:'Kapitan Rime pokonany — morska skrzynia samego Admirała jest nasza!',s2:'Mapa… prowadzi do Łańcuchowej Twierdzy. Żaden statek nie zerwał jej łańcuchów…',
 s3:'Lód pęka. Ciemny morski szlak prowadzi na południe, ku twierdzy spętanej olbrzymimi łańcuchami.',s4:'Więc my je zerwiemy. Następny przystanek — Łańcuchowa Twierdza!'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k]??k;
function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
const SFX={iceCrack:'sfx-iceCrack.ogg',icicleFall:'sfx-icicleFall.ogg',iceShatter:'sfx-shatter.ogg',ventWarn:'sfx-ventWarn.ogg',ventBlast:'sfx-ventBlast.ogg',frozenChime:'sfx-frozen.ogg',skate:'sfx-skate.ogg',
 lunge:'sfx-lunge.ogg',harpoonCock:'sfx-harpoonCock.ogg',harpoon:'sfx-harpoon.ogg',harpoonHit:'sfx-harpoonHit.ogg',moan:'sfx-moan.ogg',grip:'sfx-grip.ogg',revShatter:'sfx-revShatter.ogg',snap:'sfx-snap.ogg',
 bigSplash:'sfx-splash.ogg',iceHit:'sfx-iceHit.ogg',iceBreak:'sfx-iceBreak.ogg',brazier:'sfx-brazier.ogg',brazierOut:'sfx-brazierOut.ogg',thaw:'sfx-thaw.ogg',spikeWarn:'sfx-spikeWarn.ogg',spikeUp:'sfx-spikeUp.ogg',
 stormWarn:'sfx-stormWarn.ogg',stormGust:'sfx-stormGust.ogg',rimeRoar:'sfx-roar.ogg',axe:'sfx-axe.ogg',breathCharge:'sfx-breathCharge.ogg',breath:'sfx-breath.ogg',armorCrack:'sfx-armorCrack.ogg',armorBreak:'sfx-armorBreak.ogg',
 stomp:'sfx-stomp.ogg',rimeFall:'sfx-rimeFall.ogg',chartFanfare:'sfx-chart.ogg',blizzard:'amb-blizzard.ogg',iceAmb:'amb-ice.ogg'};
const MUSIC={frozen:'frozen.ogg',rime:'rime.ogg',battle:'cove-battle.ogg',triumph:'triumph.ogg'};

/* ------------------------------------------------------------------ the frozen crews (engine enemy kit) */
Object.assign(E.ENEMY,{
 skater:{hp:58,w:38,h:90,speed:70,chase:140,sight:420,gold:4,flesh:true,name:{en:'Frostbite Skater',az:'Şaxta Konkisürəni',tr:'Ayaz Patencisi',ru:'Морозный конькобежец',pl:'Mroźny łyżwiarz'}},
 harpooner:{hp:70,w:46,h:96,speed:40,chase:0,sight:600,gold:5,flesh:true,name:{en:'Harpooner',az:'Zıpkınçı',tr:'Zıpkıncı',ru:'Гарпунщик',pl:'Harpunnik'}},
 revenant:{hp:84,w:42,h:96,speed:26,chase:46,sight:300,gold:5,flesh:false,name:{en:'Frozen Revenant',az:'Donmuş Ruh',tr:'Donmuş Hortlak',ru:'Ледяной мертвец',pl:'Zamarznięty upiór'}}});
const P=E.Enemy.prototype;
const lohi=e=>[e.range[0]-e.w/2,e.range[1]-e.w/2];
if(!P.__smugglers&&!P.__rise){P.__rise=true;   // drop-in spawn for encounter waves (shared with Levels 4–7 when loaded)
 const bu=P.update,bd=P.damage;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return bu.call(this,dt)};
 P.damage=function(a,d,k){if(this.dead||this.spawnT>0)return'none';return bd.call(this,a,d,k)}}
if(!P.__frost){P.__frost=true;
 const bd=P.damage,bdie=P.die;
 P.damage=function(amount,dir,kind){
  const st=this.state;if(this.type==='skater'&&st==='skid')amount=Math.round(amount*1.3);
  const r=bd.call(this,amount,dir,kind);if(r!=='hit'||this.dead)return r;
  if(this.type==='revenant'){this.kb=0;if(st==='grasp')this.hurtT=0}                       // frozen solid: no knock-back
  if(this.type==='skater'&&st==='crouch'){this.state='recover';this.timer=.4}
  if(this.type==='harpooner'&&(st==='aim'||st==='bashWind')){this.state='recover';this.timer=.5;this.aim=null;this.locked=false}
  return r};
 // revenants burst into ice when they die (telegraphed ring, then shards)
 P.die=function(dir){bdie.call(this,dir);if(this.type==='revenant'&&this.run.def.revenantDeath)this.run.def.revenantDeath(this.run,this)};
 P.skater=function(dt,dx,dy,near){
  const run=this.run,p=run.p,[lo,hi]=lohi(this),d=Math.abs(dx);
  switch(this.state){
   case'crouch':this.setAnim('crouch');this.timer-=dt;if(this.timer<=0){this.state='slide';this.timer=.48;this.hitDone=false;run.audio.at('lunge',this.cx,{vol:.9})}return;
   case'slide':{this.setAnim('slide');this.timer-=dt;const nx=clamp(this.x+this.dir*560*dt,lo,hi),blocked=nx===this.x;this.x=nx;if(run.fx.on&&Math.random()<.5)run.fx.dust(this.cx-this.dir*12,this.floor,1,-this.dir);
    if(!this.hitDone&&overlap({x:this.x-6,y:this.y+20,w:this.w+12,h:this.h-24},p)){this.hitDone=true;run.hurtPlayer(14,this.dir,this,260)}
    if(this.timer<=0||blocked){this.state='skid';this.timer=.75;run.audio.at('skate',this.cx,{vol:.8})}return}
   case'skid':this.setAnim('skid');this.timer-=dt;this.x=clamp(this.x+this.dir*160*this.timer*dt*2,lo,hi);if(this.timer<=0){this.state='idle';this.cool=1.2}return;
   case'chopWind':this.setAnim('chopWind');this.timer-=dt;if(this.timer<=0){this.state='chop';this.timer=.2;this.hitDone=false;run.audio.at('swingEnemy',this.cx,{rate:1.2})}return;
   case'chop':{this.setAnim('chop');this.timer-=dt;if(!this.hitDone&&this.timer<.14){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-60,y:this.y+10,w:60,h:this.h-14};if(overlap(box,p))run.hurtPlayer(12,this.dir,this,200)}if(this.timer<=0){this.state='recover';this.timer=.5}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  if(near&&this.alert){this.face(p);
   if(d<70&&Math.abs(dy)<60&&this.cool<=0){this.state='chopWind';this.timer=.4;return}
   if(this.cool<=0&&d>110&&d<380&&Math.abs(dy)<50){this.state='crouch';this.timer=.5;this.face(p);run.audio.at('skate',this.cx,{vol:.5,rate:1.4});return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*190,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
 P.harpooner=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx);
  switch(this.state){
   case'aim':this.setAnim('aim');this.timer-=dt;this.face(p);if(this.timer>.3){this.aim={x:p.x+p.w/2,y:p.y+p.h*.45};this.locked=false}else this.locked=true;
    if(this.timer<=0){run.def.harpoon(run,this);this.state='kick';this.timer=.26;this.locked=false}return;
   case'kick':this.setAnim('kick');this.timer-=dt;if(this.timer<=0){this.state='reload';this.timer=1.5;this.aim=null;run.audio.at('harpoonCock',this.cx,{vol:.8,rate:.8})}return;
   case'reload':this.setAnim('reload');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.6;run.audio.at('harpoonCock',this.cx,{vol:.8})}return;
   case'bashWind':this.setAnim('bashWind');this.timer-=dt;if(this.timer<=0){this.state='bash';this.timer=.2;this.hitDone=false;run.audio.at('bash',this.cx)}return;
   case'bash':{this.setAnim('bash');this.timer-=dt;if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-62,y:this.y+12,w:62,h:this.h-16};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(10,this.dir,this,320)}}if(this.timer<=0){this.state='recover';this.timer=.55}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  this.setAnim('idle');
  if(near&&this.alert){this.face(p);
   if(d<86&&Math.abs(dy)<60&&this.cool<=0){this.state='bashWind';this.timer=.45;return}
   if(d<170&&Math.abs(dy)<70)this.walkTo(this.cx-Math.sign(dx)*70,this.def.speed,dt);this.face(p);
   if(this.cool<=0&&d>=110&&d<560&&Math.abs(dy)<200){this.state='aim';this.timer=.95;this.locked=false;this.aim={x:p.x+p.w/2,y:p.y+p.h*.45};run.audio.at('harpoonCock',this.cx,{vol:.9})}}
  else this.patrol(dt)};
 P.revenant=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx);
  switch(this.state){
   case'grasp':this.setAnim('grasp');this.timer-=dt;if(this.timer<=0){this.state='grab';this.timer=.24;this.hitDone=false}return;
   case'grab':{this.setAnim('grab');this.timer-=dt;if(!this.hitDone&&this.timer<.18){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-70,y:this.y+10,w:70,h:this.h-16};if(overlap(box,p)&&run.hurtPlayer(10,this.dir,this,120)){run.def.chill(run,1.5);run.audio.at('grip',this.cx,{vol:.9})}}if(this.timer<=0){this.state='recover';this.timer=.8}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.7}return}
  if(near&&this.alert){this.face(p);if(this.moanT===undefined||run.time>this.moanT){this.moanT=run.time+5+Math.random()*3;run.audio.at('moan',this.cx,{vol:.6})}
   if(d<86&&Math.abs(dy)<60&&this.cool<=0){this.state='grasp';this.timer=.6;return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*56,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
}

/* ------------------------------------------------------------------ articulated rigs (original vector art) */
const mixCache=new Map();
function mixHex(a,b,k){const key=a+b+k;let v=mixCache.get(key);if(v)return v;if(!a.startsWith('#'))return a;const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);const ch=s=>[(s>>16)&255,(s>>8)&255,s&255];const A_=ch(pa),B_=ch(pb);v='rgb('+A_.map((x,i)=>Math.round(x+(B_[i]-x)*k)).join(',')+')';mixCache.set(key,v);return v}
const LOOK={
 skater:{hip:42,thigh:22,shin:23,torso:32,lean:.32,head:10,shoulder:13,arm:[16,15],legW:8,armW:6,cadence:8,stride:.7,scale:1.45,
  pal:{skin:'#e2cbb4',coat:'#3d6f8f',coatD:'#29506a',hat:'#d8e2ea',band:'#c23b3b',trouser:'#3a3f4a',boot:'#2a2620',metal:'#dfe9f2',eye:'#ffcf6b'}},
 harpooner:{hip:44,thigh:22,shin:22,torso:40,lean:.08,head:12,shoulder:22,arm:[19,18],legW:12,armW:10,cadence:7,stride:.45,scale:1.42,
  pal:{skin:'#d6a880',coat:'#6b4a2e',coatD:'#4c321d',hat:'#8a6a48',band:'#e8e0d0',trouser:'#3e3a36',boot:'#241d16',metal:'#8f9aa6',eye:'#bfe9ff'}},
 revenant:{hip:44,thigh:23,shin:23,torso:36,lean:.38,head:11,shoulder:18,arm:[20,19],legW:9,armW:7,cadence:5,stride:.38,scale:1.42,
  pal:{skin:'#9ec4d6',coat:'#3e5566',coatD:'#2a3c49',hat:'#2e3e4a',band:'#7fe6ff',trouser:'#33444f',boot:'#1e2a33',metal:'#c8f2ff',eye:'#7fe6ff'}}};
for(const k in LOOK){const pl=LOOK[k].pal,fl={};for(const c in pl)fl[c]=mixHex(pl[c],'#ffffff',.78);LOOK[k].flashPal=fl}
function limb(c,x0,y0,a1,l1,a2,l2,w,col,boot,skate){
 const kx=x0+Math.sin(a1)*l1,ky=y0+Math.cos(a1)*l1,fx=kx+Math.sin(a2)*l2,fy=ky+Math.cos(a2)*l2;
 c.strokeStyle='#0b0d12';c.lineWidth=w+3;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 c.strokeStyle=col;c.lineWidth=w;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 if(boot){c.fillStyle=boot;c.strokeStyle='#0b0d12';c.lineWidth=1.5;c.beginPath();c.ellipse(fx+w*.45,fy-1,w*.95,w*.55,0,0,TAU);c.fill();c.stroke()}
 if(skate){c.strokeStyle='#dfe9f2';c.lineWidth=2;c.beginPath();c.moveTo(fx-w*.6,fy+3);c.lineTo(fx+w*1.6,fy+3);c.quadraticCurveTo(fx+w*2,fy+2,fx+w*1.8,fy-1);c.stroke()}
 return{kx,ky,fx,fy}}
function arm(c,x0,y0,a1,l1,a2,l2,w,col,skin){const r=limb(c,x0,y0,a1,l1,a2,l2,w,col);c.fillStyle=skin;c.beginPath();c.arc(r.fx,r.fy,w*.62,0,TAU);c.fill();return r}
function pose(e,R,run){
 const st=e.state,t=e.animT,o={lean:R.lean,bob:0,l1:.06,k1:.12,l2:-.08,k2:.1,f1:.2,f2:-.5,b1:-.15,b2:-.3,w:0,crouch:0,glow:0};
 const moving=e.anim==='walk'&&!e.dead&&!(e.hurtT>0);
 if(moving){const ph=t*R.cadence*(e.alert?1.3:1),s=Math.sin(ph);
  if(e.type==='skater'){// skating stride: long push-offs to the side-back, gliding knee
   o.l1=Math.max(0,s)*R.stride*.9-.1;o.l2=-Math.max(0,-s)*R.stride*.9+.1;o.k1=.35+Math.max(0,-s)*.5;o.k2=.35+Math.max(0,s)*.5;o.bob=-Math.abs(s)*2;o.f1=-.4-s*.6;o.b1=.4+s*.6}
  else{o.l1=s*R.stride;o.l2=-s*R.stride;o.k1=Math.max(0,Math.cos(ph))*.9+.05;o.k2=Math.max(0,-Math.cos(ph))*.9+.05;o.bob=-Math.abs(Math.cos(ph))*2.4;o.f1+=-s*.35;o.b1+=s*.35}
  if(e.type==='revenant'){o.f1=.9+Math.sin(ph)*.15;o.b1=.7-Math.sin(ph)*.15;o.f2=.2;o.b2=.2}}   // arms reach forward, stiff
 else{const br=Math.sin(run.time*2.2+(e.home||0))*.04;o.f1+=br;o.bob=Math.sin(run.time*2.2+(e.home||0))*.8;if(e.type==='revenant'){o.f1=.6;o.b1=.4}}
 const k=T=>clamp(1-e.timer/T,0,1);
 switch(e.type){
  case'skater':
   if(st==='crouch'){const q=k(.5);o.crouch=.45*q;o.lean=R.lean+.3*q;o.l1=.6;o.k1=1.2*q+.3;o.l2=-.7;o.k2=.6;o.f1=-1.2;o.b1=.9;o.glow=q}
   else if(st==='slide'){o.crouch=.4;o.lean=.7;o.l1=.9;o.k1=1.0;o.l2=-.9;o.k2=.2;o.f1=1.4;o.f2=.1;o.b1=-1.1}
   else if(st==='skid'){o.crouch=.25;o.lean=-.25;o.l1=.7;o.k1=.4;o.l2=-.2;o.k2=.5;o.f1=-1.6;o.b1=-1.9}
   else if(st==='chopWind'){const q=k(.4);o.f1=.2-2.6*q;o.f2=-.6;o.lean=R.lean-.2*q;o.glow=q}
   else if(st==='chop'){o.f1=1.2;o.f2=0;o.lean=R.lean+.25;o.l1=.4;o.l2=-.3}
   break;
  case'harpooner':
   if(st==='aim'){o.f1=1.5;o.f2=0;o.b1=1.3;o.b2=.2;o.lean=-.05;o.l1=.3;o.l2=-.3;o.glow=e.locked?1:.4}
   else if(st==='kick'){o.f1=1.8;o.f2=.3;o.b1=1.5;o.b2=.4;o.lean=-.25;o.l1=.4;o.l2=-.35}
   else if(st==='reload'){const w=Math.sin(run.time*10);o.f1=1.1;o.f2=.3;o.b1=.4+w*.6;o.b2=-.8-w*.5;o.w=.2}
   else if(st==='bashWind'){const q=k(.45);o.f1=-.4*q+.6;o.b1=-.8*q;o.lean=-.15*q;o.glow=q}
   else if(st==='bash'){o.f1=1.7;o.f2=.2;o.b1=1.3;o.lean=.3;o.l1=.5;o.l2=-.35}
   else{o.f1=.5;o.f2=-.9;o.b1=.2}
   break;
  case'revenant':
   if(st==='grasp'){const q=k(.6);o.f1=.6+.9*q;o.b1=.4+.9*q;o.f2=-.2;o.b2=-.2;o.lean=R.lean-.15*q;o.glow=q}
   else if(st==='grab'){o.f1=1.6;o.b1=1.5;o.f2=.1;o.b2=.1;o.lean=R.lean+.15;o.l1=.4;o.l2=-.3}
   break}
 if(e.hurtT>0&&!e.dead){o.lean=-.32;o.f1=-.9;o.b1=-1.2;o.f2=-.6;o.l1=.25;o.l2=-.15}
 return o}
/* painted cut-out cast (tools/enemy_cast.py → assets/enemies/level08, posed by enemy-rig.js); the vector rig below
 * stays as the fallback and still provides the telegraph timing (pose().glow) */
const RIG={
 skater:{cast:'level08',char:'skater',grip:-.3,fam:{crouch:'crouchWind',slide:'dash',skid:'skidding',chopWind:'wind',chop:'swing'},stars:e=>e.state==='skid'},
 harpooner:{cast:'level08',char:'harpooner',scale:1.07,weapon:'gun',twoHand:true,fam:{aim:'aim',kick:'fire',reload:'reload',bashWind:'wind',bash:'thrust'},windArm:-1.4},
 revenant:{cast:'level08',char:'revenant',grip:.3,baseLean:.3,armSwing:.12,armRest:.75,step:20,fam:{grasp:'reach',grab:'thrust'},stars:e=>e.state==='recover'}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — vector fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig,V=LOOK[e.type];if(!R||!V||!run.rigCast||!Rig)return false;
 const rev=e.type==='revenant';
 const alpha=e.dead?(rev?clamp(1-(e.deadT-.75)*6,0,1):clamp(1-(e.deadT-.9)/.6,0,1)):1;if(alpha<=0)return true;const st=e.state;
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,pose(e,V,run));
 if(rev&&e.dead&&e.deadT<.8){const k=e.deadT/.8;run.fx.glow(c,e.cx,e.floor-70,60+40*k,'rgba(127,230,255,',.4+.5*Math.sin(e.deadT*30)*.5+.3)}
 c.save();c.globalAlpha=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const o=Rig.draw(run,c,e,R);
 if(o&&!e.dead){
  if(e.type==='harpooner'&&st==='aim'&&e.locked)run.fx.glow(c,o.muzzle[0],o.muzzle[1],22,'rgba(255,80,50,',.7);
  Rig.hud(c,run,e,o,R);
  if(e.type==='harpooner'&&st==='reload'){const k=1-e.timer/1.5,by=o.top-28;c.fillStyle='rgba(10,18,32,.8)';c.beginPath();c.roundRect(e.cx-22,by,44,12,5);c.fill();c.fillStyle='#bfe9ff';c.fillRect(e.cx-20,by+2,40*k,8)}}
 c.restore();c.imageSmoothingEnabled=false;return true}
function drawFoe(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const R=LOOK[e.type];if(!R)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.65)/.6,0,1):1;if(alpha<=0)return true;
 const flash=e.flash>0,pal=flash?R.flashPal:R.pal,o=pose(e,R,run),st=e.state;
 const fx=Math.round(e.cx),fy=e.floor;let dy=0,rot=0;
 if(e.spawnT>0)dy=-e.spawnT*420;
 if(e.dead)rot=e.type==='revenant'?0:-Math.min(1.4,e.deadT*3.4);
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,o);
 if(e.type==='revenant'&&e.dead&&e.deadT<.8){const k=e.deadT/.8;run.fx.glow(c,e.cx,e.floor-70,60+40*k,'rgba(127,230,255,',.4+.5*Math.sin(e.deadT*30)*.5+.3)}
 c.save();c.globalAlpha=alpha*(e.type==='revenant'&&e.dead?clamp(1-(e.deadT-.75)*6,0,1):1);
 c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(fx,fy+1,R.shoulder+16,5,0,0,TAU);c.fill();
 c.translate(fx,fy+dy);if(e.dir<0)c.scale(-1,1);c.scale(R.scale,R.scale);if(rot){c.translate(-R.hip*.4,0);c.rotate(rot);c.translate(R.hip*.4,0)}
 c.lineCap='round';c.lineJoin='round';
 const sk=e.type==='skater';
 const hipY=-(R.thigh+R.shin)*(1-o.crouch*.35)+o.bob,hipX=0;
 limb(c,hipX-3,hipY,o.l2,R.thigh,o.l2-o.k2,R.shin,R.legW,mixHex(pal.trouser,'#000000',.25),pal.boot,sk);
 const lean=o.lean,sx=hipX+Math.sin(lean)*R.torso,sy=hipY-Math.cos(lean)*R.torso;
 armAndWeapon(run,c,e,R,pal,o,sx-3,sy+2,true);
 torso(c,e,R,pal,o,hipX,hipY,sx,sy,run);
 head(c,e,R,pal,o,sx,sy,lean,run);
 limb(c,hipX+3,hipY,o.l1,R.thigh,o.l1-o.k1,R.shin,R.legW,pal.trouser,pal.boot,sk);
 if(e.type==='harpooner')coat(c,e,R,pal,o,hipX,hipY,run);
 armAndWeapon(run,c,e,R,pal,o,sx+2,sy+3,false);
 c.restore();
 if(st==='skid'||st==='recover'&&e.type==='revenant')for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,e.floor-(R.hip+R.torso+R.head*2.6)*R.scale-4+Math.sin(a)*4,4,4)}
 if(e.type==='harpooner'&&st==='reload'&&!e.dead){const k=1-e.timer/1.5,by=e.floor-(R.hip+R.torso+R.head*2.6)*R.scale-28;c.save();c.fillStyle='rgba(10,18,32,.8)';c.beginPath();c.roundRect(e.cx-22,by,44,12,5);c.fill();c.fillStyle='#bfe9ff';c.fillRect(e.cx-20,by+2,40*k,8);c.restore()}
 if(!e.dead&&e.hp<e.max&&!(e.spawnT>0)){const w=44,by=e.floor-(R.hip+R.torso+R.head*2.6)*R.scale-12;c.fillStyle='#0b0f18cc';c.fillRect(e.cx-w/2,by,w,6);c.fillStyle='#e8484f';c.fillRect(e.cx-w/2+1,by+1,(w-2)*e.hp/e.max,4)}
 return true}
function torso(c,e,R,pal,o,hx,hy,sx,sy,run){
 const w=R.shoulder,T=R.torso;c.save();c.translate(hx,hy);c.rotate(o.lean);c.strokeStyle='#0b0d12';c.lineWidth=2;
 if(e.type==='skater'){// fitted fur-trimmed jacket, scarf streaming behind
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.7,2);c.lineTo(-w*.8,-T*.92);c.quadraticCurveTo(0,-T*1.08,w*.8,-T*.92);c.lineTo(w*.7,2);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.hat;c.fillRect(-w*.8,-4,w*1.6,6);c.fillStyle=pal.coatD;c.fillRect(-2,-T*.9,4,T*.85);
  const sw=Math.sin(run.time*9+(e.home||0))*4;c.strokeStyle=pal.band;c.lineWidth=5;c.beginPath();c.moveTo(-w*.4,-T*.95);c.quadraticCurveTo(-w*1.4,-T*.95+sw,-w*2.1,-T*.8+sw*1.5);c.stroke()}
 else if(e.type==='harpooner'){// heavy fur coat body (the skirt is drawn by coat())
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.9,4);c.quadraticCurveTo(-w*1.15,-T*.6,-w*.95,-T);c.lineTo(w*.95,-T);c.quadraticCurveTo(w*1.15,-T*.55,w*.9,4);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.hat;c.beginPath();c.ellipse(0,-T*.96,w*.95,7,0,0,TAU);c.fill();c.fillStyle=pal.coatD;for(let i=0;i<3;i++)c.fillRect(-3,-T*.75+i*10,6,4);
  c.strokeStyle='#2a1a10';c.lineWidth=4;c.beginPath();c.moveTo(-w*.8,-T*.9);c.lineTo(w*.7,-T*.2);c.stroke()}   // bandolier
 else{// frozen corpse: torn coat, ribs of ice, crystals growing from the shoulders and back
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.75,4);c.lineTo(-w*.9,-T*.95);c.quadraticCurveTo(0,-T*1.1,w*.85,-T*.9);c.lineTo(w*.7,4);c.lineTo(w*.3,-4);c.lineTo(0,6);c.lineTo(-w*.3,-2);c.closePath();c.fill();c.stroke();
  c.strokeStyle='rgba(200,242,255,.55)';c.lineWidth=2;for(let i=0;i<3;i++){c.beginPath();c.moveTo(-w*.3,-T*.7+i*8);c.quadraticCurveTo(0,-T*.64+i*8,w*.3,-T*.7+i*8);c.stroke()}
  for(const [x,y,s] of[[-w*.9,-T,1],[-w*.5,-T*1.05,.8],[-w*1.05,-T*.6,.7]]){c.fillStyle='rgba(170,235,255,.9)';c.strokeStyle='#5aa8c8';c.lineWidth=1.2;c.beginPath();c.moveTo(x-5*s,y+2);c.lineTo(x-1,y-16*s);c.lineTo(x+5*s,y+2);c.closePath();c.fill();c.stroke()}}
 c.restore()}
function coat(c,e,R,pal,o,hx,hy,run){const w=R.shoulder*.95,len=R.thigh*.95,sw=e.anim==='walk'?Math.sin(e.animT*R.cadence)*.06:0;c.save();c.translate(hx,hy-2);c.rotate(o.lean*.4);c.fillStyle=pal.coatD;c.strokeStyle='#0b0d12';c.lineWidth=1.8;
 c.beginPath();c.moveTo(-w,0);c.lineTo(-w-4+sw*30,len);c.lineTo(w+4-sw*30,len);c.lineTo(w,0);c.closePath();c.fill();c.stroke();c.fillStyle=pal.hat;c.fillRect(-w-4+sw*30,len-5,w*2+8-sw*60,6);c.restore()}
function head(c,e,R,pal,o,sx,sy,lean,run){
 const r=R.head,hx=sx+Math.sin(lean)*r*.9,hy=sy-Math.cos(lean)*r*.9-2;
 c.save();c.translate(hx,hy);c.rotate(lean*.6+(e.hurtT>0?-.25:0));c.strokeStyle='#0b0d12';c.lineWidth=2;
 if(e.type==='skater'){// fur hood with a face mask and goggles
  c.fillStyle=pal.hat;c.beginPath();c.ellipse(0,-1,r*1.25,r*1.2,0,0,TAU);c.fill();c.stroke();c.fillStyle=pal.skin;c.beginPath();c.ellipse(r*.35,0,r*.7,r*.75,0,0,TAU);c.fill();
  c.fillStyle=pal.band;c.fillRect(-r*.1,r*.15,r*1.1,r*.55);c.fillStyle='#2a3a48';c.fillRect(0,-r*.45,r*1.05,r*.42);c.fillStyle='#bfe9ff';c.fillRect(r*.55,-r*.4,r*.4,r*.3)}
 else if(e.type==='harpooner'){// ushanka with earflaps, frosted beard
  c.fillStyle=pal.skin;c.beginPath();c.ellipse(1,0,r*.9,r,0,0,TAU);c.fill();c.stroke();
  c.fillStyle=pal.band;c.beginPath();c.moveTo(-r*.6,r*.2);c.quadraticCurveTo(r*.2,r*2.1,r*1.0,r*.2);c.closePath();c.fill();
  c.fillStyle=pal.eye;c.beginPath();c.arc(r*.45,-r*.15,1.9,0,TAU);c.fill();
  c.fillStyle=pal.hat;c.beginPath();c.roundRect(-r*1.05,-r*1.35,r*2.1,r*.95,5);c.fill();c.stroke();c.beginPath();c.roundRect(-r*1.2,-r*.6,r*.5,r*1.1,4);c.fill();c.stroke();c.fillStyle=pal.band;c.fillRect(-r*.9,-r*.55,r*1.8,3)}
 else{// skull-pale face rimmed with frost, glowing eyes, icy tricorn
  c.fillStyle=pal.skin;c.beginPath();c.ellipse(1,0,r*.85,r,0,0,TAU);c.fill();c.stroke();
  run.fx.glow(c,r*.45,-r*.15,10,'rgba(127,230,255,',.9);c.fillStyle=pal.eye;c.beginPath();c.arc(r*.45,-r*.15,2.2,0,TAU);c.fill();c.fillStyle='#1b2a34';c.fillRect(r*.1,r*.4,r*.7,2);
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*1.4,-r*.5);c.quadraticCurveTo(0,-r*2,r*1.5,-r*.5);c.quadraticCurveTo(0,-r*.95,-r*1.4,-r*.5);c.closePath();c.fill();c.stroke();
  c.fillStyle='rgba(200,242,255,.8)';for(let i=0;i<4;i++){c.beginPath();c.moveTo(-r*1.2+i*r*.8,-r*.55);c.lineTo(-r*1.05+i*r*.8,-r*.1);c.lineTo(-r*.9+i*r*.8,-r*.55);c.fill()}}
 c.restore()}
function armAndWeapon(run,c,e,R,pal,o,x,y,back){
 const col=back?pal.coatD:pal.coat,[u,f]=R.arm,a1=back?o.b1:o.f1,a2=back?o.b2:o.f2;
 const r=arm(c,x,y,a1,u,a1+a2,f,R.armW,col,pal.skin);const ha=a1+a2;
 c.save();c.translate(r.fx,r.fy);
 if(e.type==='skater'){// a hatchet in each hand
  c.rotate(-ha+Math.PI/2+(back?-.3:.2));c.strokeStyle='#5a3d24';c.lineWidth=3;c.beginPath();c.moveTo(-6,0);c.lineTo(20,0);c.stroke();c.fillStyle=pal.metal;c.strokeStyle='#0b0d12';c.lineWidth=1.2;c.beginPath();c.moveTo(16,-2);c.lineTo(26,-9);c.quadraticCurveTo(30,-1,26,7);c.lineTo(16,3);c.closePath();c.fill();c.stroke();
  if(o.glow>0)run.fx.glow(c,24,0,20+14*o.glow,'rgba(160,220,255,',.4+.4*o.glow)}
 else if(e.type==='harpooner'&&!back){// shoulder harpoon gun
  c.rotate(-ha+Math.PI/2+o.w);c.fillStyle='#4a2c16';c.fillRect(-22,-4,26,9);c.fillStyle='#6d7680';c.fillRect(0,-6,44,8);c.fillStyle='#3a3f46';c.beginPath();c.arc(8,6,6,0,TAU);c.fill();
  if(e.state!=='reload'&&e.state!=='kick'){c.fillStyle='#c8d2dc';c.fillRect(40,-4,22,3);c.beginPath();c.moveTo(62,-8);c.lineTo(72,-2.5);c.lineTo(62,3);c.closePath();c.fill()}
  if(e.state==='aim'&&e.locked)run.fx.glow(c,70,-2,22,'rgba(255,80,50,',.7)}
 else if(e.type==='revenant'&&!back){// the arm frozen into a blade of ice
  c.rotate(-ha+Math.PI/2);c.fillStyle='rgba(170,235,255,.9)';c.strokeStyle='#5aa8c8';c.lineWidth=1.5;c.beginPath();c.moveTo(0,-5);c.lineTo(34,-2);c.lineTo(40,1);c.lineTo(0,6);c.closePath();c.fill();c.stroke();
  if(o.glow>0)run.fx.glow(c,20,0,26+20*o.glow,'rgba(127,230,255,',.4+.4*o.glow)}
 c.restore()}
function telegraph(run,c,e,o){
 const st=e.state;
 if(e.type==='skater'){
  if(st==='crouch'){const q=o.glow;c.save();c.strokeStyle='rgba(160,220,255,'+(.25+.55*q)+')';c.lineWidth=3;c.setLineDash([12,9]);c.beginPath();c.moveTo(e.cx,e.floor-8);c.lineTo(e.cx+e.dir*270,e.floor-8);c.stroke();c.setLineDash([]);
   const ax=e.cx+e.dir*270;c.fillStyle='rgba(160,220,255,'+(.4+.5*q)+')';c.beginPath();c.moveTo(ax,e.floor-20);c.lineTo(ax+e.dir*16,e.floor-8);c.lineTo(ax,e.floor+4);c.fill();c.restore()}
  if(st==='chopWind')run.fx.glow(c,e.cx+e.dir*24,e.y+e.h*.35,40,'rgba(255,90,60,',.35+.35*o.glow)}
 else if(e.type==='harpooner'){
  if(st==='aim'&&e.aim){const sx=e.cx+e.dir*60,sy=e.y+e.h*.38;c.save();c.strokeStyle=e.locked?'rgba(255,60,40,.85)':'rgba(255,190,110,.45)';c.lineWidth=e.locked?2.5:2;c.setLineDash(e.locked?[]:[8,8]);c.beginPath();c.moveTo(sx,sy);const a=aimClamp(e,Math.atan2(e.aim.y-sy,e.aim.x-sx));c.lineTo(sx+Math.cos(a)*620,sy+Math.sin(a)*620);c.stroke();c.restore()}
  if(st==='bashWind')run.fx.glow(c,e.cx+e.dir*20,e.y+e.h*.45,40,'rgba(255,90,60,',.5)}
 else if(e.type==='revenant'&&st==='grasp'){const q=o.glow;run.fx.glow(c,e.cx+e.dir*40,e.y+e.h*.4,50+20*q,'rgba(127,230,255,',.3+.4*q);c.save();c.fillStyle='rgba(127,230,255,'+(.08+.18*q)+')';c.beginPath();c.ellipse(e.cx+e.dir*45,e.floor-3,46,8,0,0,TAU);c.fill();c.restore()}}
function aimClamp(e,a){const base=e.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.45,.45);return base+rel}

/* ------------------------------------------------------------------ procedural textures (built once per run) */
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function makeTextures(){
 const T={},R=rng(808);
 let c=canvas(256,256),x=c.getContext('2d');let g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#9fd2e8');g.addColorStop(1,'#4f88a8');x.fillStyle=g;x.fillRect(0,0,256,256);
 x.strokeStyle='rgba(255,255,255,.35)';x.lineWidth=1.2;for(let i=0;i<30;i++){let px=R()*256,py=R()*256;x.beginPath();x.moveTo(px,py);for(let k=0;k<4;k++){px+=(R()-.5)*60;py+=(R()-.5)*30;x.lineTo(px,py)}x.stroke()}
 x.fillStyle='rgba(255,255,255,.18)';for(let i=0;i<40;i++){x.beginPath();x.ellipse(R()*256,R()*256,10+R()*30,2+R()*4,R()*.5,0,TAU);x.fill()}T.ice=c;
 c=canvas(256,256);x=c.getContext('2d');x.fillStyle='#dfe9f2';x.fillRect(0,0,256,256);for(let i=0;i<500;i++){x.fillStyle=R()<.5?'#cfdde9':'#f2f7fb';x.beginPath();x.arc(R()*256,R()*256,1+R()*4,0,TAU);x.fill()}x.fillStyle='rgba(110,150,190,.18)';for(let i=0;i<20;i++){x.beginPath();x.ellipse(R()*256,R()*256,14+R()*20,5,0,0,TAU);x.fill()}T.snow=c;
 c=canvas(256,256);x=c.getContext('2d');x.fillStyle='#4a3a2c';x.fillRect(0,0,256,256);for(let y=0;y<256;y+=24){x.fillStyle=((y/24)|0)%2?'#56442f':'#4b3a28';x.fillRect(0,y,256,22);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(0,y+22,256,2);for(let k=0;k<3;k++){x.fillStyle='rgba(30,20,12,.5)';x.fillRect(R()*256,y+6+R()*10,30+R()*40,1.5)}}
 x.fillStyle='rgba(220,235,245,.22)';for(let i=0;i<50;i++){x.beginPath();x.ellipse(R()*256,R()*256,6+R()*14,2,0,0,TAU);x.fill()}T.deck=c;
 c=canvas(256,256);x=c.getContext('2d');x.drawImage(T.deck,0,0);g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'rgba(170,220,240,.55)');g.addColorStop(1,'rgba(90,150,190,.45)');x.fillStyle=g;x.fillRect(0,0,256,256);x.strokeStyle='rgba(255,255,255,.4)';for(let i=0;i<14;i++){x.beginPath();const px=R()*256,py=R()*256;x.moveTo(px,py);x.lineTo(px+20+R()*40,py+(R()-.5)*10);x.stroke()}T.frozen=c;
 c=canvas(256,256);x=c.getContext('2d');g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#3d7fa8');g.addColorStop(1,'#1c4a6c');x.fillStyle=g;x.fillRect(0,0,256,256);x.strokeStyle='rgba(160,220,255,.25)';x.lineWidth=3;for(let y=12;y<256;y+=30){x.beginPath();x.moveTo(0,y);for(let k=0;k<=8;k++)x.lineTo(k*32,y+(R()-.5)*10);x.stroke()}
 x.fillStyle='rgba(255,255,255,.08)';for(let i=0;i<20;i++){x.beginPath();x.moveTo(R()*256,R()*256);x.lineTo(R()*256,R()*256);x.lineTo(R()*256,R()*256);x.fill()}T.glacier=c;
 return T}
function pat(run,c,name){run.pats??=new Map();let m=run.pats.get(c);if(!m){m={};run.pats.set(c,m)}return m[name]??=c.createPattern(run.tex[name],'repeat')}
function paintSolid(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L),x1=Math.min(s.x+s.w,R),y0=Math.max(s.y,T),y1=Math.min(s.y+s.h,B);if(x1<=x0||y1<=y0)return true;
 const st=s.style;c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();c.fillStyle=pat(run,c,st in run.tex?st:'ice');c.fillRect(x0,y0,x1-x0,y1-y0);
 const g=c.createLinearGradient(0,s.y,0,s.y+300);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,st==='glacier'?'rgba(4,16,34,.7)':'rgba(6,14,28,.6)');c.fillStyle=g;c.fillRect(x0,Math.max(y0,s.y+16),x1-x0,y1-Math.max(y0,s.y+16));c.restore();
 const R_=rng(Math.round(s.x*5+s.y));
 if(st==='ice'||st==='frozen'){c.fillStyle='rgba(235,250,255,.85)';c.fillRect(s.x,s.y,s.w,3);c.fillStyle='rgba(255,255,255,.35)';for(let x=s.x+20;x<s.x+s.w;x+=60+R_()*80)c.fillRect(x,s.y+5,24+R_()*30,2)}
 else if(st==='snow'){c.fillStyle='#f4f8fb';c.beginPath();c.moveTo(s.x,s.y+8);for(let x=s.x;x<=s.x+s.w;x+=16)c.lineTo(x,s.y-3-R_()*5);c.lineTo(s.x+s.w,s.y+8);c.fill()}
 else if(st==='deck'){c.fillStyle='#e8f0f6';c.beginPath();c.moveTo(s.x,s.y+6);for(let x=s.x;x<=s.x+s.w;x+=20)c.lineTo(x,s.y-2-R_()*4);c.lineTo(s.x+s.w,s.y+6);c.fill();c.fillStyle='#2b2018';c.fillRect(s.x,s.y+10,s.w,6);
  if(s.h>300){c.fillStyle='rgba(0,0,0,.3)';for(let x=s.x+40;x<s.x+s.w;x+=140)c.fillRect(x,s.y+40,10,s.h-40)}}
 else if(st==='glacier'){c.fillStyle='rgba(220,245,255,.6)';c.fillRect(s.x,s.y,s.w,3);if(s.y<820&&s.y+s.h<1000){c.fillStyle='#173c58';for(let x=s.x+10;x<s.x+s.w;x+=34){const h=8+R_()*22;c.beginPath();c.moveTo(x,s.y+s.h);c.lineTo(x+7,s.y+s.h+h);c.lineTo(x+14,s.y+s.h);c.fill()}}}
 c.fillStyle='rgba(0,0,0,.28)';c.fillRect(s.x+s.w-4,s.y+6,4,Math.min(s.h,220));c.fillStyle='rgba(255,255,255,.12)';c.fillRect(s.x,s.y+6,3,Math.min(s.h,220));
 return true}
function paintLedge(run,c,l){
 if(l.look==='wood'){c.fillStyle='rgba(0,0,0,.3)';c.fillRect(l.x+4,l.y+16,l.w-8,5);for(let x=l.x;x<l.x+l.w;x+=24){c.fillStyle=((x/24)|0)%2?'#5a4029':'#4c3522';c.fillRect(x,l.y,Math.min(23,l.x+l.w-x),12)}c.fillStyle='#e8f0f6';c.fillRect(l.x,l.y-2,l.w,4);c.fillStyle='#2a1c10';c.fillRect(l.x,l.y+12,l.w,4);return true}
 if(l.look==='snow'){c.fillStyle='#f4f8fb';c.beginPath();c.roundRect(l.x,l.y-4,l.w,22,10);c.fill();c.fillStyle='rgba(110,150,190,.35)';c.fillRect(l.x+6,l.y+12,l.w-12,4);return true}
 // ice shelf with hanging drips
 c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.ellipse(l.x+l.w/2,l.y+26,l.w/2,5,0,0,TAU);c.fill();c.save();c.beginPath();c.moveTo(l.x,l.y);c.lineTo(l.x+l.w,l.y);c.lineTo(l.x+l.w-8,l.y+18);c.lineTo(l.x+8,l.y+18);c.closePath();c.clip();c.fillStyle=pat(run,c,'glacier');c.fillRect(l.x,l.y,l.w,20);c.restore();
 c.fillStyle='rgba(235,250,255,.85)';c.fillRect(l.x,l.y,l.w,3);c.fillStyle='rgba(170,230,255,.8)';for(let x=l.x+10;x<l.x+l.w-6;x+=18){c.beginPath();c.moveTo(x,l.y+18);c.lineTo(x+3,l.y+28);c.lineTo(x+6,l.y+18);c.fill()}return true}
function drawCrumble(run,c,b){const sh=b.state==='shake'?(Math.random()-.5)*4:0;c.save();c.translate(sh,0);c.fillStyle=b.state==='shake'?'#6a4a30':'#5a4029';c.fillRect(b.x+2,b.y,b.w-4,12);c.fillStyle='#e8f0f6';c.fillRect(b.x+2,b.y-2,b.w-4,3);c.fillStyle='#2a1c10';c.fillRect(b.x+2,b.y+12,b.w-4,3);
 c.strokeStyle='#8b7350';c.lineWidth=2;c.beginPath();c.moveTo(b.x,b.y-30);c.lineTo(b.x+b.w,b.y-30);c.stroke();c.beginPath();c.moveTo(b.x+b.w/2,b.y-30);c.lineTo(b.x+b.w/2,b.y);c.stroke();if(b.state==='shake'){c.strokeStyle='rgba(0,0,0,.6)';c.beginPath();c.moveTo(b.x+20,b.y+2);c.lineTo(b.x+34,b.y+10);c.stroke()}c.restore()}
function drawMover(run,c,m){
 if(m.look==='floe'||m.look==='iceblock'){c.fillStyle='rgba(0,0,0,.25)';c.fillRect(m.x+6,m.y+16,m.w-12,6);c.save();c.beginPath();if(m.look==='floe'){c.moveTo(m.x,m.y);c.lineTo(m.x+m.w,m.y);c.lineTo(m.x+m.w-14,m.y+20);c.lineTo(m.x+10,m.y+22);c.closePath()}else c.rect(m.x,m.y,m.w,40);c.clip();c.fillStyle=pat(run,c,'ice');c.fillRect(m.x,m.y,m.w,42);c.restore();
  c.fillStyle='rgba(240,252,255,.9)';c.fillRect(m.x,m.y,m.w,3);if(m.look==='iceblock'){c.strokeStyle='rgba(255,255,255,.5)';c.lineWidth=1.5;c.strokeRect(m.x+1,m.y+1,m.w-2,38)}run.fx.glow(c,m.x+m.w/2,m.y+20,40,'rgba(160,220,255,',.15);return}
 if(m.look==='cargo'){const top=600;c.strokeStyle='#8b7350';c.lineWidth=2;c.beginPath();c.moveTo(m.x+10,m.y);c.lineTo(m.x+m.w/2,top);c.lineTo(m.x+m.w-10,m.y);c.stroke();c.fillStyle='#5a4029';c.fillRect(m.x,m.y,m.w,14);c.fillStyle='#e8f0f6';c.fillRect(m.x,m.y-2,m.w,3);c.fillStyle='#2b2018';c.fillRect(m.x,m.y+14,m.w,3);
  c.fillStyle='#3a2d20';c.beginPath();c.arc(m.x+m.w/2,top,10,0,TAU);c.fill()}}

/* ------------------------------------------------------------------ backdrop: aurora night, frozen sea, ice-bound ships */
function makeBack(run){
 const R=rng(88),B={};
 B.aurora=canvas(1024,220);let x=B.aurora.getContext('2d');
 for(const [col,y0,amp,ph] of[['rgba(90,255,170,',90,30,0],['rgba(80,200,255,',120,24,1.7],['rgba(200,110,255,',70,18,3.1]]){for(let i=0;i<1024;i+=3){const y=y0+Math.sin(i*.012+ph)*amp+Math.sin(i*.031+ph*2)*amp*.4,h=60+Math.sin(i*.02+ph)*30;const g=x.createLinearGradient(0,y-h,0,y+10);g.addColorStop(0,col+'0)');g.addColorStop(.7,col+'.18)');g.addColorStop(1,col+'0)');x.fillStyle=g;x.fillRect(i,y-h,3,h+10)}}
 B.stars=Array.from({length:120},()=>[R(),R()*.55,.4+R()*.6,R()*6]);
 B.ships=canvas(900,240);x=B.ships.getContext('2d');x.fillStyle='#10223a';
 for(const [sx,h] of[[80,150],[330,190],[600,130],[790,170]]){x.beginPath();x.moveTo(sx-70,230);x.quadraticCurveTo(sx-80,200,sx-50,190);x.lineTo(sx+60,195);x.quadraticCurveTo(sx+80,210,sx+70,230);x.fill();x.fillRect(sx-3,230-h,6,h-30);x.fillRect(sx-40,240-h*.8,80,4);x.fillRect(sx+30,230-h*.7,4,h*.5);x.fillStyle='rgba(220,240,255,.25)';x.fillRect(sx-40,236-h*.8,80,3);x.fillStyle='#10223a'}
 return B}
/* painted far plate (Higgsfield, see ASSET_MANIFEST): mirrored tiles with slow parallax; false when the image is missing */
function drawPlate(run,c,src,cam){const im=run.images[src];if(!im)return false;const W=E.W,ph=H*1.08,pw=im.width*ph/im.height,py=H-ph+16-(cam.y-300)*.08,ox=-((cam.x*.15)%(pw*2));for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>W||x+pw<0)continue;if(k%2){c.save();c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph);c.restore()}else c.drawImage(im,x,py,pw,ph)}return true}
function drawBackground(run,c){
 const W=E.W,cam=run.camera,t=run.time,B=run.back;
 if(!run.sky||run.skyW!==W){run.skyW=W;run.sky=canvas(W,H);const x=run.sky.getContext('2d'),g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#030713');g.addColorStop(.5,'#0c1c38');g.addColorStop(.8,'#2a4766');g.addColorStop(1,'#16263c');x.fillStyle=g;x.fillRect(0,0,W,H)}
 c.drawImage(run.sky,0,0);const painted=drawPlate(run,c,BASE+'assets/painted/level08-ice.webp',cam);
 const py=clamp((cam.y-300)*.05,-20,40);
 if(!painted){for(const [sx,sy,b,ph] of B.stars){const k=.6+.4*Math.sin(t*1.5+ph);c.fillStyle='rgba(230,240,255,'+(b*k)+')';c.fillRect(((sx*W*1.4-cam.x*.01)%W+W)%W,sy*H-py,1.6,1.6)}}
 // aurora ribbons drift slowly
 c.save();c.globalCompositeOperation='lighter';const ox=-((cam.x*.02+t*8)%1024);c.globalAlpha=.75+.25*Math.sin(t*.4);for(let x=ox;x<W;x+=1024)c.drawImage(B.aurora,x,10-py);c.globalAlpha=.5;for(let x=ox*1.6%1024-1024;x<W;x+=1024)c.drawImage(B.aurora,x,40-py,1024,180);c.restore();
 // frozen sea to the horizon, cracks and pressure ridges
 const sy=320-py*2;if(!painted){const g=c.createLinearGradient(0,sy,0,H);g.addColorStop(0,'#5b84a8');g.addColorStop(.3,'#3a5f80');g.addColorStop(1,'#1c3450');c.fillStyle=g;c.fillRect(0,sy,W,H-sy);}
 if(!painted){c.strokeStyle='rgba(230,245,255,.25)';c.lineWidth=1;for(let i=0;i<12;i++){const y=sy+8+i*i*2.2,ox2=(i*137-cam.x*(.05+i*.02))%(W+200);c.beginPath();c.moveTo(ox2-100,y);c.lineTo(ox2+80,y+2);c.lineTo(ox2+200,y-1);c.stroke()}}
 // icebergs (parallax .12) and the ice-bound ships (.28)
 if(!painted){c.fillStyle='#8eb4d2';for(let i=0;i<10;i++){const wx=i*1100+300,x=wx-cam.x*.12;if(x<-260||x>W+260)continue;const h=50+(i*37)%60;c.beginPath();c.moveTo(x-120,sy+4);c.lineTo(x-60,sy-h);c.lineTo(x-10,sy-h*.7);c.lineTo(x+40,sy-h*1.1);c.lineTo(x+110,sy+4);c.fill();c.fillStyle='rgba(255,255,255,.35)';c.beginPath();c.moveTo(x-60,sy-h);c.lineTo(x-30,sy-h*.85);c.lineTo(x-50,sy);c.fill();c.fillStyle='#8eb4d2'}}
 if(!painted){const off=-((cam.x*.28)%1800);for(let x=off;x<W;x+=1800)c.drawImage(B.ships,x+200,sy-200);}
 if(run.stormK>0){c.fillStyle='rgba(220,235,245,'+(run.stormK*.25)+')';c.fillRect(0,0,W,H)}
}
function drawBack(run,c){
 const cam=run.camera,W=E.W,L=cam.x-60,R=cam.x+W+60,cfg=run.cfg,t=run.time;
 // glacier cave back wall with crystal veins; the vault walls with frosted treasure
 if(R>5760&&L<9220){c.save();c.beginPath();c.rect(5760,600,3460,520);c.clip();c.fillStyle=pat(run,c,'glacier');c.fillRect(Math.max(5760,L),600,Math.min(9220,R)-Math.max(5760,L),520);c.fillStyle='rgba(2,10,24,.45)';c.fillRect(Math.max(5760,L),600,Math.min(9220,R)-Math.max(5760,L),520);
  c.strokeStyle='rgba(127,230,255,.25)';c.lineWidth=2;for(let x=Math.floor(Math.max(5760,L)/260)*260;x<Math.min(9220,R);x+=260){c.beginPath();c.moveTo(x,820);c.lineTo(x+40,900);c.lineTo(x+20,980);c.lineTo(x+70,1080);c.stroke()}
  if(R>7400){for(let x=7480;x<8800;x+=170){if(x<L-100||x>R+100)continue;c.fillStyle='#8a6a2a';c.beginPath();c.moveTo(x-40,1100);c.quadraticCurveTo(x,1040,x+40,1100);c.fill();c.fillStyle='rgba(255,220,120,.5)';for(let k=0;k<5;k++)c.fillRect(x-24+k*10,1080-((k*7)%14),6,4);c.fillStyle='rgba(200,240,255,.35)';c.beginPath();c.moveTo(x-40,1100);c.quadraticCurveTo(x,1030,x+40,1100);c.fill()}}
  c.restore()}
 // frozen hulls on the bay, masts with yards and frozen sails
 for(const [x,y,dir] of cfg.decor.hulls){if(x+260<L||x-260>R)continue;c.save();c.translate(x,y);c.scale(dir,1);c.fillStyle='#3a2c20';c.beginPath();c.moveTo(-200,0);c.quadraticCurveTo(-210,-70,-150,-90);c.lineTo(150,-70);c.quadraticCurveTo(190,-30,170,0);c.closePath();c.fill();c.fillStyle='#e8f0f6';c.beginPath();c.moveTo(-150,-90);c.lineTo(150,-70);c.lineTo(150,-62);c.lineTo(-150,-82);c.fill();
  c.strokeStyle='#2a1d12';c.lineWidth=6;c.beginPath();c.moveTo(-30,-90);c.lineTo(10,-300);c.stroke();c.fillStyle='rgba(220,235,245,.8)';c.beginPath();c.moveTo(-60,-260);c.lineTo(60,-250);c.lineTo(50,-150);c.lineTo(-40,-160);c.closePath();c.fill();c.restore()}
 for(const [x,y,h] of cfg.decor.masts){if(x+120<L||x-120>R)continue;c.fillStyle='#3a2a1a';c.fillRect(x-6,y-h,12,h);c.fillRect(x-80,y-h+40,160,6);c.fillStyle='#e8f0f6';c.fillRect(x-80,y-h+36,160,4);c.fillRect(x-7,y-h-4,14,6);
  c.fillStyle='rgba(225,238,246,.75)';c.beginPath();c.moveTo(x-76,y-h+46);c.lineTo(x+76,y-h+46);c.lineTo(x+62,y-h+150);c.quadraticCurveTo(x,y-h+130,x-62,y-h+150);c.closePath();c.fill();c.strokeStyle='#8b7350';c.lineWidth=1.5;c.beginPath();c.moveTo(x-80,y-h+42);c.lineTo(x-140,y);c.moveTo(x+80,y-h+42);c.lineTo(x+140,y);c.stroke()}
 // the flagship's stern castle and rigging
 if(R>9300){const y=cfg.arena.floor;c.strokeStyle='#5a4a38';c.lineWidth=3;c.beginPath();c.moveTo(Math.max(9220,L),y-48);c.lineTo(Math.min(11300,R),y-48);c.stroke();for(let x=Math.ceil(Math.max(9220,L)/60)*60;x<Math.min(11300,R);x+=60){c.beginPath();c.moveTo(x,y-48);c.lineTo(x,y);c.stroke()}
  if(R>11000){c.fillStyle='#3a2c20';c.fillRect(11220,y-360,200,360);c.fillStyle='#e8f0f6';c.fillRect(11220,y-364,200,6);c.fillStyle='rgba(255,220,140,.5)';c.fillRect(11250,y-300,30,40);c.fillRect(11320,y-300,30,40)}}
}
function drawDecor(run,c){
 const cam=run.camera,W=E.W,L=cam.x-80,R=cam.x+W+80,d=run.cfg.decor,t=run.time;
 for(const [x,y] of d.lamps){if(x<L||x>R)continue;c.strokeStyle='#22272d';c.lineWidth=4;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-90);c.lineTo(x+16,y-90);c.stroke();const sway=Math.sin(t*2+x)*2;run.fx.glow(c,x+16+sway,y-70,46,'rgba(255,190,110,',.5);c.fillStyle='#2b2620';c.fillRect(x+9+sway,y-86,14,4);c.fillStyle='#ffd27a';c.fillRect(x+10+sway,y-82,12,14);c.fillStyle='#e8f0f6';c.fillRect(x+8+sway,y-89,16,3)}
 for(const [x,y] of d.crystals){if(x<L||x>R)continue;const p=.6+.4*Math.sin(t*2+x);run.fx.glow(c,x,y-20,44,'rgba(127,230,255,',.35*p);c.fillStyle='#8fe4ff';c.beginPath();c.moveTo(x-10,y);c.lineTo(x-4,y-40);c.lineTo(x+2,y);c.fill();c.fillStyle='#d4f6ff';c.beginPath();c.moveTo(x,y);c.lineTo(x+7,y-28);c.lineTo(x+12,y);c.fill()}
 for(const [x,y] of d.banks){if(x<L||x>R)continue;c.fillStyle='#f2f7fb';c.beginPath();c.ellipse(x,y+4,70,22,0,Math.PI,0);c.fill();c.fillStyle='rgba(110,150,190,.25)';c.beginPath();c.ellipse(x+10,y+4,50,10,0,Math.PI,0);c.fill()}
 for(const [x,y] of d.frozen){if(x<L||x>R)continue;// a pirate frozen in a block of ice (set dressing)
  c.fillStyle='rgba(150,210,240,.45)';c.beginPath();c.roundRect(x-26,y-110,52,110,6);c.fill();c.strokeStyle='rgba(255,255,255,.5)';c.lineWidth=2;c.stroke();c.fillStyle='rgba(40,50,60,.55)';c.beginPath();c.ellipse(x,y-84,9,10,0,0,TAU);c.fill();c.fillRect(x-10,y-74,20,40);c.fillRect(x-10,y-34,7,30);c.fillRect(x+3,y-34,7,30);c.fillRect(x+10,y-70,16,5)}
}
function weather(run,c){
 const W=E.W,cam=run.camera,inside=run.def.inside(run),t=run.time,k=run.stormK||0;
 if(!inside){const n=run.lowFx?50:100;c.save();c.fillStyle='rgba(240,248,255,.8)';for(let i=0;i<n;i++){const sp=30+(i%5)*12,drift=k*260;const x=((i*173+t*(14+drift)-cam.x*.8+Math.sin(t*.8+i)*20)%(W+40)+W+40)%(W+40)-20,y=((i*97+t*sp*(1+k*1.5))%(H+20))-10;const s=1.2+(i%3)*.8;c.globalAlpha=.4+(i%4)*.15;c.fillRect(x,y,s,s)}c.restore()}
 else{c.save();c.fillStyle='rgba(200,240,255,.5)';for(let i=0;i<30;i++){const x=((i*211-cam.x*.6+Math.sin(t+i)*10)%(W+20)+W+20)%(W+20),y=((i*67+t*18)%(H+20));c.globalAlpha=.25;c.fillRect(x,y,1.5,1.5)}c.restore()}
 if(k>0){c.fillStyle='rgba(235,244,250,'+(k*.38)+')';c.fillRect(0,0,W,H)}
}

/* ------------------------------------------------------------------ Captain Rime, the frozen quartermaster (mini-boss) */
const RR={hip:70,thigh:35,shin:35,torso:62,head:17,shoulder:30,arm:[30,28],legW:15,armW:12,scale:1.32};
class Rime{
 constructor(run){this.run=run;this.cfg=run.cfg.boss;this.a=run.cfg.arena;this.max=this.cfg.hp;this.rand=rng(8);this.reset()}
 get floor(){return this.a.floor}
 reset(){Object.assign(this,{x:this.a.x1-260,dir:-1,hp:this.max,plates:this.cfg.plates,plateHp:this.cfg.plateHp,state:'dormant',t:0,animT:0,flash:0,cool:1.2,rage:false,acts:0,aim:null,locked:false,deadT:0,shake:0,walking:false,lean:0,hitDone:false,tick:0,shards:[]})}
 box(){return{x:this.x-42,y:this.floor-212,w:84,h:212}}
 set(s,t){this.state=s;this.t=t}
 get open(){return['recover','reload','stagger'].includes(this.state)}
 start(){const run=this.run;this.reset();this.set('intro',2.0);run.audio.play('iceBreak',{vol:1});run.audio.play('rimeRoar',{vol:.9});run.banner={t:2.6,text:text(run.lang,'rimeIntro')};run.camera.shake=8;run.fx.debris(this.x,this.floor-60,26)}
 damage(amount,kind,dir){
  const run=this.run;if(['dormant','dying','dead'].includes(this.state))return'none';const bx=this.box(),cy=bx.y+bx.h*.45;
  if(this.state==='intro'){run.fx.spark(this.x-dir*24,cy,'#cfe3ff',8);run.audio.play('iceHit',{vol:.6});return'blocked'}
  const k=this.open?this.cfg.openScale:1;let dmg=Math.round(amount*k);
  if(this.plates>0){this.plateHp-=dmg;dmg=Math.round(dmg*this.cfg.armorScale);run.audio.play('armorCrack',{vol:.6,rate:.95+Math.random()*.1,gap:.12});run.fx.spark(this.x-dir*10,cy-30,'#bfefff',10);
   if(this.plateHp<=0){this.plates--;this.plateHp=this.cfg.plateHp;run.audio.play('armorBreak',{vol:1});run.camera.shake=6;run.fx.burst(this.x,cy-40,'#cff4ff',28,1.3);run.fx.text(text(run.lang,'plate').replace('{n}',this.cfg.plates-this.plates),this.x,bx.y-40,'#bfefff',true);
    if(this.plates===0){this.rage=true;this.set('stagger',2.0);run.banner={t:2.6,text:text(run.lang,'armorGone')};run.audio.play('rimeRoar',{vol:1,rate:.9})}}}
  this.hp=Math.max(0,this.hp-dmg);this.flash=.12;this.shake=dir*5;run.audio.play('fleshHit',{vol:.6,rate:.8});
  run.fx.text(String(dmg),this.x,bx.y-16,k>1?'#ffd36b':this.plates>0?'#bfefff':'#ffffff',k>1);
  if(this.hp<=0){run.def.rimeDown(run);return'hit'}
  return'hit'}
 update(dt){
  const run=this.run,p=run.p,a=this.a,g=this.floor;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);this.shake*=Math.pow(.002,dt);
  for(const s of this.shards){s.t+=dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.vy+=900*dt}this.shards=this.shards.filter(s=>s.t<1.2);
  if(this.state==='dormant')return;if(this.state==='dying'||this.state==='dead'){this.deadT+=dt;if(this.state==='dying'&&this.deadT>2.4)this.state='dead';return}
  this.t-=dt;this.cool-=dt;const f=this.rage?.8:1,px=p.x+p.w/2,dx=px-this.x,dist=Math.abs(dx),lo=a.x0+90,hi=a.x1-90;this.walking=false;
  switch(this.state){
   case'intro':this.dir=-1;if(this.t<=0){this.set('idle',.2);this.cool=.6}return;
   case'axeWind':this.lean=-.12;if(this.t<=0){this.set('axe1',.22);this.hitDone=false;run.audio.play('axe',{vol:1})}return;
   case'axe1':case'axe2':{const two=this.state==='axe2',k=1-this.t/.22;this.lean=.2;if(two)this.x=clamp(this.x+this.dir*220*dt,lo,hi);
    if(!this.hitDone&&k>.3){const box={x:this.dir>0?this.x-10:this.x-190,y:g-190,w:200,h:190};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(two?20:18,this.dir,this,330)}}
    if(this.t<=0){if(two)this.set('recover',1.0*f);else this.set('gap',.2*f)}return}
   case'gap':if(this.t<=0){this.set('axe2',.22);this.hitDone=false;run.audio.play('axe',{vol:1,rate:1.12})}return;
   case'recover':this.lean*=.9;if(this.t<=0)this.set('idle',.2);return;
   case'harpAim':this.dir=dx>0?1:-1;if(this.t>.3){this.aim={x:px,y:p.y+p.h*.45};this.locked=false}else this.locked=true;if(this.t<=0){run.def.rimeHarpoon(run,this);this.set('reload',1.2*f)}return;
   case'reload':if(this.t<=0)this.set('idle',.2);return;
   case'breathCharge':this.lean=-.15;if(this.t<=0){this.set('breath',1.1);this.tick=0;run.audio.play('breath',{vol:1})}return;
   case'breath':{this.lean=.1;this.tick-=dt;const box={x:this.dir>0?this.x+20:this.x-300,y:g-180,w:280,h:180};
    if(this.tick<=0){this.tick=.3;if(!p.dead&&overlap(box,p)){if(run.hurtPlayer(6,this.dir,null,120))run.def.chill(run,1.0)}}
    if(run.fx.on)run.fx.dust(this.x+this.dir*(60+Math.random()*220),g-40-Math.random()*120,1,this.dir);
    if(this.t<=0)this.set('recover',.9*f);return}
   case'stompWind':this.lean=-.1;if(this.t<=0){this.set('stomp',.25);run.audio.play('stomp',{vol:1});run.camera.shake=9;run.fx.debris(this.x,g,14);run.def.rimeIcicles(run,this)}return;
   case'stomp':if(this.t<=0)this.set('recover',.8*f);return;
   case'stagger':this.lean=.25;if(this.t<=0){this.set('idle',.2);this.cool=.4}return}
  // idle: advance, choose an attack (each one ends in an opening)
  this.dir=dx>0?1:-1;if(dist>190){this.x=clamp(this.x+this.dir*(this.rage?96:70)*dt,lo,hi);this.walking=true}this.lean*=.9;
  if(!p.dead&&p.dash<=0&&overlap(p,this.box())){p.x+=(px<this.x?-1:1)*160*dt}
  if(this.cool>0||p.dead)return;this.acts++;const r=this.rand();
  if(this.rage&&this.acts%3===0){this.set('stompWind',.7);this.cool=1.2;run.audio.play('rimeRoar',{vol:.6,rate:1.2});return}
  if(dist<300&&(this.acts%4===2||r<.3)){this.set('breathCharge',.95);this.cool=1.3*f;run.audio.play('breathCharge',{vol:1});return}
  if(dist<210){this.set('axeWind',.65*f);this.cool=1.5*f;run.audio.play('bossWindup',{vol:.8});return}
  if(dist<640){this.set('harpAim',.8);this.cool=1.4*f;this.aim={x:px,y:p.y+p.h*.45};this.locked=false;run.audio.play('harpoonCock',{vol:1});return}
  this.cool=.3}
 draw(c){
  const run=this.run,st=this.state;const g=this.floor,dying=st==='dying'||st==='dead';
  if(st==='dormant'){// frozen in a block of ice on the deck
   c.save();c.fillStyle='rgba(150,210,240,.5)';c.beginPath();c.roundRect(this.x-70,g-250,140,250,10);c.fill();c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=3;c.stroke();c.fillStyle='rgba(30,40,55,.55)';c.beginPath();c.ellipse(this.x,g-200,22,24,0,0,TAU);c.fill();c.fillRect(this.x-30,g-176,60,110);c.fillRect(this.x-28,g-66,22,66);c.fillRect(this.x+6,g-66,22,66);c.restore();return}
  const alpha=st==='dead'?clamp(1-(this.deadT-2.4)/1,0,1):1;if(alpha<=0)return;
  if((st==='harpAim')&&this.aim){c.save();c.strokeStyle=this.locked?'rgba(255,60,40,.85)':'rgba(190,230,255,.5)';c.lineWidth=this.locked?3:2;c.setLineDash(this.locked?[]:[9,8]);c.beginPath();c.moveTo(this.x+this.dir*60,g-150);c.lineTo(this.aim.x,this.aim.y);c.stroke();c.restore()}
  if(st==='axeWind'||st==='gap')run.fx.glow(c,this.x+this.dir*50,g-180,80,'rgba(255,90,60,',.45);
  if(st==='breathCharge'){const k=1-this.t/.95;c.save();c.strokeStyle='rgba(190,240,255,'+(.3+.5*k)+')';c.lineWidth=3;c.setLineDash([10,8]);c.beginPath();c.moveTo(this.x+this.dir*20,g-170);c.lineTo(this.x+this.dir*300,g-180);c.lineTo(this.x+this.dir*300,g);c.lineTo(this.x+this.dir*20,g);c.stroke();c.setLineDash([]);c.restore();run.fx.glow(c,this.x+this.dir*30,g-200,40+30*k,'rgba(190,240,255,',.6)}
  if(st==='breath'){c.save();c.globalCompositeOperation='lighter';const gr=c.createLinearGradient(this.x,0,this.x+this.dir*300,0);gr.addColorStop(0,'rgba(210,245,255,.6)');gr.addColorStop(1,'rgba(210,245,255,0)');c.fillStyle=gr;c.beginPath();c.moveTo(this.x+this.dir*24,g-200);c.lineTo(this.x+this.dir*300,g-185);c.lineTo(this.x+this.dir*300,g);c.lineTo(this.x+this.dir*24,g-150);c.closePath();c.fill();c.restore()}
  if(st==='stompWind'){const k=1-this.t/.7;c.save();c.strokeStyle='rgba(255,90,60,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(this.x,g-3,60+60*k,10,0,0,TAU);c.stroke();c.restore()}
  const realC=c;if(window.PirateEnemyAnim?.drawBoss?.(run,c,this,{floor:g,h:212}))c=window.PirateEnemyAnim.NULL_CTX;   // animated boss (enemy-anim.js)
  c.save();c.globalAlpha=alpha;c.fillStyle='rgba(0,0,0,.35)';c.beginPath();c.ellipse(this.x,g+1,64,9,0,0,TAU);c.fill();
  c.translate(Math.round(this.x+this.shake),g+(dying?Math.min(18,this.deadT*22):0));if(this.dir<0)c.scale(-1,1);c.scale(RR.scale,RR.scale);
  if(dying){const r=-Math.min(1.45,Math.max(0,this.deadT-.8)*1.5);c.translate(-34,0);c.rotate(r);c.translate(34,0)}
  c.lineCap='round';c.lineJoin='round';const fl=this.flash>0,col=a=>fl?mixHex(a,'#ffffff',.75):a;
  const ph=this.animT*6.5,s=this.walking?Math.sin(ph):0,bob=this.walking?-Math.abs(Math.cos(ph))*3:Math.sin(this.animT*2)*1;const hy=-(RR.thigh+RR.shin)+bob;
  limb(c,-5,hy,-s*.42,RR.thigh,-s*.42-(this.walking?Math.max(0,-Math.cos(ph))*.8:.1),RR.shin,RR.legW,col('#2b3440'),col('#1a1612'));
  const lean=this.lean,sx=Math.sin(lean)*RR.torso,sy=hy-Math.cos(lean)*RR.torso;
  // back arm: the harpoon gun
  const ha=st==='harpAim'?1.5:st==='reload'?.6:-.1+s*.3;const hr=arm(c,sx-5,sy+5,ha,RR.arm[0],ha-.05,RR.arm[1],RR.armW,col('#3c5468'),col('#d4c0aa'));
  c.save();c.translate(hr.fx,hr.fy);c.rotate(-ha+Math.PI/2);c.fillStyle='#4a2c16';c.fillRect(-24,-5,28,10);c.fillStyle='#7d8894';c.fillRect(0,-7,54,10);if(st!=='reload'){c.fillStyle='#d4dde6';c.fillRect(50,-4,26,3);c.beginPath();c.moveTo(76,-9);c.lineTo(88,-2.5);c.lineTo(76,4);c.fill()}c.restore();
  // greatcoat crusted with frost
  c.save();c.translate(0,hy);c.rotate(lean);c.fillStyle=col('#3c5468');c.strokeStyle='#0b0d12';c.lineWidth=2.5;c.beginPath();c.moveTo(-RR.shoulder,-RR.torso);c.quadraticCurveTo(0,-RR.torso-10,RR.shoulder,-RR.torso);c.lineTo(RR.shoulder+10+s*5,44);c.lineTo(-RR.shoulder-12+s*5,44);c.closePath();c.fill();c.stroke();
  c.fillStyle=col('#e8f0f6');c.fillRect(-RR.shoulder-12+s*5,38,RR.shoulder*2+22,7);c.fillStyle='#1a120c';c.fillRect(-RR.shoulder*.9,-14,RR.shoulder*1.8,7);c.fillStyle='#c9a24a';c.fillRect(-5,-15,10,9);
  // ice armour plates (chest, both shoulders) — one disappears per broken plate
  const plates=[[-4,-RR.torso*.62,20,26],[RR.shoulder*.75,-RR.torso*.98,18,14],[-RR.shoulder*.85,-RR.torso*.98,18,14]];
  plates.forEach(([x,y,w,h],i)=>{if(i>=this.plates)return;c.fillStyle='rgba(170,230,255,.85)';c.strokeStyle='#5aa8c8';c.lineWidth=1.5;c.beginPath();c.moveTo(x-w/2,y);c.lineTo(x,y-h*.6);c.lineTo(x+w/2,y);c.lineTo(x+w*.3,y+h*.5);c.lineTo(x-w*.3,y+h*.5);c.closePath();c.fill();c.stroke();c.fillStyle='rgba(255,255,255,.6)';c.fillRect(x-w*.2,y-h*.3,3,h*.5)});
  c.restore();
  limb(c,5,hy,s*.42,RR.thigh,s*.42-(this.walking?Math.max(0,Math.cos(ph))*.8:.1),RR.shin,RR.legW,col('#334050'),col('#1a1612'));
  // head: frozen beard, tricorn hung with icicles, cold eyes
  c.save();c.translate(sx+Math.sin(lean)*16,sy-16);c.rotate(lean*.5);c.fillStyle=col('#d4c0aa');c.strokeStyle='#0b0d12';c.lineWidth=2;c.beginPath();c.ellipse(2,0,RR.head*.85,RR.head,0,0,TAU);c.fill();c.stroke();
  c.fillStyle=col('#e6f2fa');c.beginPath();c.moveTo(-10,4);c.lineTo(-4,34);c.lineTo(4,26);c.lineTo(10,38);c.lineTo(18,4);c.closePath();c.fill();c.stroke();
  run.fx.glow(c,9,-4,12,'rgba(127,230,255,',.8);c.fillStyle='#7fe6ff';c.beginPath();c.arc(9,-4,2.6,0,TAU);c.fill();
  c.fillStyle=col('#1e2a38');c.beginPath();c.moveTo(-RR.head*1.8,-8);c.quadraticCurveTo(0,-RR.head*2.6,RR.head*1.9,-8);c.quadraticCurveTo(0,-RR.head*1.1,-RR.head*1.8,-8);c.closePath();c.fill();c.stroke();
  c.fillStyle='rgba(200,242,255,.85)';for(let i=0;i<5;i++){c.beginPath();c.moveTo(-RR.head*1.5+i*RR.head*.75,-9);c.lineTo(-RR.head*1.35+i*RR.head*.75,-1);c.lineTo(-RR.head*1.2+i*RR.head*.75,-9);c.fill()}c.restore();
  // front arm: the great ice axe
  const fa=st==='axeWind'||st==='gap'?-2.5:st==='axe1'||st==='axe2'?1.0:st==='stompWind'?-2.8:st==='breath'||st==='breathCharge'?.2:.3+s*.25;const fr=arm(c,sx+4,sy+6,fa,RR.arm[0],fa-.15,RR.arm[1],RR.armW,col('#3c5468'),col('#d4c0aa'));
  if(!dying||this.deadT<.8){c.save();c.translate(fr.fx,fr.fy);c.rotate(-fa+Math.PI/2+.25);c.strokeStyle='#4a3020';c.lineWidth=5;c.beginPath();c.moveTo(-20,0);c.lineTo(58,0);c.stroke();
   c.fillStyle='rgba(180,235,255,.92)';c.strokeStyle='#5aa8c8';c.lineWidth=1.8;c.beginPath();c.moveTo(48,-4);c.lineTo(70,-30);c.quadraticCurveTo(86,-6,74,22);c.lineTo(48,6);c.closePath();c.fill();c.stroke();
   if(st==='axeWind'||st==='gap')run.fx.glow(c,66,-4,30,'rgba(255,120,80,',.5);c.restore()}
  c.restore();c=realC;
  if(this.open&&!dying){for(let i=0;i<3;i++){const an=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(this.x+Math.cos(an)*22-2,g-292+Math.sin(an)*5,4,4)}}
  for(const s2 of this.shards){c.fillStyle='rgba(200,242,255,'+(1-s2.t/1.2)+')';c.fillRect(s2.x,s2.y,5,5)}}}

/* ------------------------------------------------------------------ the level definition */
const def={
 id:8,name:{en:'Frozen Fleet',az:'Donmuş Donanma'},config:BASE+'level-08.json',base:BASE,
 images:[BASE+'assets/painted/level08-ice.webp'],
 rig:{pose,LOOK,RR},
 title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),text:(lang,k)=>text(lang,k),
 initialState:()=>({enc:{},blocks:[0,0,0],icewall:0,thawed:false,rimeDown:false,nest:false,cache:false}),
 persist(run){const s=run.state;return{enc:{...s.enc},blocks:[...s.blocks],icewall:s.icewall,thawed:s.thawed,rimeDown:s.rimeDown,nest:s.nest,cache:s.cache}},
 async prepare(run){
  run.tex=makeTextures();run.back=makeBack(run);
  const extra=window.PirateMusic?{}:Object.fromEntries(Object.entries(MUSIC).map(([k,f])=>['m_'+k,f]));
  run.audioReady=Promise.all([run.audioReady,run.audio.load(A8,SFX),Object.keys(extra).length?run.audio.load(AM,extra):null]);
  const pm=run.audio.playMusic.bind(run.audio);run.audio.playMusic=(name,fade)=>window.PirateMusic?pm(name,fade):pm(MUSIC[name]?'m_'+name:name,fade);
  run.lightBuf=canvas(8,8);
  const sk=run.skin;if(sk&&!sk.__l8){sk.__l8=true;const base=sk.draw.bind(sk);sk.draw=(c,p,r)=>{const cine=r?.cine;if(r?.def===def&&cine&&cine.heroPose)return def.drawCineHero(r,c,p,base);return base(c,p,r)}}
  await loadRig(run,'level08');
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  if(!Array.isArray(s.blocks)||s.blocks.length!==c.blocks.list.length)s.blocks=c.blocks.list.map(()=>0);
  if(!s.enc||typeof s.enc!=='object')s.enc={};s.icewall=clamp(+s.icewall||0,0,c.icewall.hp);
  run.banner={t:4.5,text:text(run.lang,'title')};run.rand=rng(81);
  run.slide=0;run.onIce=false;run.slowT=0;run.pinT=0;run.stormK=0;run.storm={phase:'calm',t:c.storm.every*.6};run.storms=0;
  run.icicles=c.icicles.map(([x,top,floor],i)=>({i,x,top,floor,state:'hang',t:0,y:top,grow:1}));run.icicleHits=0;
  run.ventHit=c.vents.map(()=>-1);run.spikeHit=c.spikes.map(()=>-1);run.bursts=[];run.marks=[];
  run.burn=c.braziers.list.map(()=>0);run.doorK=s.thawed?0:1;run.blockFall=c.blocks.list.map(()=>0);
  c.blocks.list.forEach((b,i)=>{if(s.blocks[i])def.addBlock(run,i,true)});
  run.pending={};for(const e of[...run.enemies]){const d=c.enemies.find(q=>q.id===e.id);if(d?.wave){const[enc,w]=d.wave.split(':');(run.pending[enc]??=[]).push({e,w:+w,d});run.enemies=run.enemies.filter(q=>q!==e)}}
  run.enc={id:null,wave:0,delay:0};run.walls={};for(const k of c.encounters)run.walls[k.id]=0;run.walls.boss=0;
  run.rime=new Rime(run);run.arena={active:false};run.cine=null;run.chestOpen=false;
  if(s.rimeDown){run.rime.state='dead';run.rime.hp=0;run.rime.deadT=99}
  if(!run.skipBtn&&run.root){const b=document.createElement('button');b.className='pl-skip';b.textContent=text(run.lang,'skip');b.style.cssText='position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:5;padding:8px 14px;border-radius:12px;border:2px solid #d8b56a;background:#0d1a29e6;color:#ffe3a0;font:800 14px Arial;display:none';b.onclick=e=>{e.stopPropagation();def.skipStory(run)};run.root.append(b);run.skipBtn=b;
   run.root.addEventListener('pointerdown',e=>{if(run.cine&&run.cine.stage==='story'&&!e.target.closest('button'))def.advance(run)})}
 },
 addBlock(run,i,instant){const b=run.cfg.blocks.list[i],y=run.cfg.blocks.float;if(run.movers.some(m=>m.id==='block'+i))return;run.movers.push({id:'block'+i,x:b.x,y,w:b.w,h:18,kind:'mover',dx:0,dy:0,phase:i*.3,active:true,axis:'y',range:[y-4,y],period:2.6,dwell:.2,look:'iceblock'});if(instant)run.blockFall[i]=1},
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hinted={};run.hintQueue=resumed?[]:['hIce'];run.hintT=5.5;run.hintsAt={s1:'hSkater',r1:'hRevenant',h1:'hHarpoon'}},
 music(run){if(run.cine){run.audio.playMusic('triumph',1.2);return}if(run.arena.active&&!['dormant','dead','dying'].includes(run.rime.state)&&!run.state.rimeDown){run.audio.playMusic('rime',1.0);return}if(run.enc.id){run.audio.playMusic('battle',1.0);return}run.audio.playMusic('frozen',1.4)},
 zone(run){const x=run.p.x+run.p.w/2;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones[run.cfg.zones.length-1]},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 inside(run){const p=run.p,x=p.x+p.w/2,f=p.y+p.h;return x>5990&&x<9220&&f>1000},
 objectiveHud(run){
  if(run.cine)return'';const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k),p=run.p,cx=p.x+p.w/2;
  if(run.enc.id){const k={e1:'objBoard',e2:'objHall'}[run.enc.id];return t(k).replace('{n}',Math.max(1,run.enc.wave))}
  if(z==='bay')return t('objBay');
  if(z==='fleet')return cx>5000&&s.blocks.some(v=>!v)?t('objBlocks').replace('{n}',s.blocks.filter(Boolean).length):t('objFleet');
  if(z==='caves'){if(cx<5760&&s.blocks.some(v=>!v))return t('objBlocks').replace('{n}',s.blocks.filter(Boolean).length);return t('objCaves')}
  if(z==='vault')return s.thawed?t('objVault'):t('objThaw');
  if(s.rimeDown)return t('objChest');return t('objRime')},
 dynamicSolids(run){const list=[],c=run.cfg,s=run.state;
  for(const k of c.encounters){const w=run.walls[k.id];if(w>.05)for(const x of[k.wallL,k.wallR])list.push({x:x-15,y:k.floor-420*w,w:30,h:420*w,style:'net'})}
  if(run.walls.boss>.05)list.push({x:c.arena.x0-15,y:c.arena.floor-420*run.walls.boss,w:30,h:420*run.walls.boss,style:'net'});
  const dr=c.braziers.door;if(run.doorK>.05)list.push({x:dr.x-18,y:dr.floor-(dr.floor-dr.top)*run.doorK,w:36,h:(dr.floor-dr.top)*run.doorK,style:'icedoor'});
  const iw=c.icewall;if(s.icewall<iw.hp)list.push({x:iw.x,y:iw.y,w:iw.w,h:iw.h,style:'icewall'});
  return list},
 cameraLock(run){if(!run.arena.active||run.cine?.stage==='story'||run.cine?.stage==='outro')return null;const a=run.cfg.arena,W=E.W,p=run.p;const x=clamp(p.x+p.w/2-W/2,a.x0-60,a.x1+60-W);return{x:x+(W-960)/2,y:a.floor-H*.84}},
 bossHud(run){const st=run.rime.state;return run.arena.active&&!run.cine&&!['dormant','dead','dying'].includes(st)},
 /* -------- ice, chill and the blizzard push (engine drift hook) */
 heroDrift(run,dt){
  const p=run.p;if(p.dead||run.cine||run.phase!=='play'){run.slide=p.vx;return 0}
  const sup=p.platform,icy=!!(p.ground&&sup&&(sup.style==='ice'||sup.style==='frozen'));run.onIce=icy;
  if(icy&&p.dash<=0&&p.hurtT<=0)run.slide+=(p.vx-run.slide)*Math.min(1,dt*run.cfg.ice.grip);else run.slide=p.vx;
  let v=run.slide;if(run.slowT>0)v*=.5;if(run.pinT>0)v*=.1;
  const push=run.storm.phase==='gust'&&!def.inside(run)?-run.cfg.storm.push*run.stormK:0;
  if(icy&&Math.abs(run.slide-p.vx)>80&&run.fx.on&&Math.random()<.4)run.fx.dust(p.x+p.w/2,p.y+p.h,1,Math.sign(run.slide));
  return v-p.vx+push},
 chill(run,t){run.slowT=Math.max(run.slowT,t);run.audio.play('frozenChime',{vol:.6,gap:.3})},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg,cx=p.x+p.w/2;
  run.banner.t=Math.max(0,run.banner.t-dt);run.slowT=Math.max(0,run.slowT-dt);run.pinT=Math.max(0,run.pinT-dt);
  if(run.cine){def.updateCine(run,dt);return}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:4.6,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-cx)<520){def.hint(run,h);delete run.hintsAt[id]}}
  if(cx>1100&&cx<1300)def.hint(run,'hVent');if(cx>2500&&cx<2700)def.hint(run,'hIcicle');if(cx>5000&&cx<5250&&s.blocks.some(v=>!v))def.hint(run,'hBlocks');if(cx>7450&&!s.thawed)def.hint(run,'hThaw');
  def.updateStorm(run,dt);def.updateIcicles(run,dt);def.updateVents(run,dt);def.updateSpikes(run,dt);def.updateBursts(run,dt);def.updateMarks(run,dt);
  // ice blocks falling into the channel
  for(let i=0;i<run.blockFall.length;i++){if(s.blocks[i]&&run.blockFall[i]<1){run.blockFall[i]=Math.min(1,run.blockFall[i]+dt*2.4);if(run.blockFall[i]>=1){def.addBlock(run,i);const b=c.blocks.list[i];run.audio.at('bigSplash',b.x+b.w/2,{vol:1});run.fx.splash(b.x+b.w/2,c.blocks.float,14);run.camera.shake=4}}}
  // braziers burn down; all three at once thaw the vault door
  if(!s.thawed){for(let i=0;i<run.burn.length;i++){const was=run.burn[i];run.burn[i]=Math.max(0,run.burn[i]-dt);if(was>0&&run.burn[i]===0)run.audio.at('brazierOut',c.braziers.list[i].x,{vol:.8})}
   if(run.burn.every(b=>b>0)){s.thawed=true;run.banner={t:3.2,text:text(run.lang,'thawed')};run.audio.play('thaw',{vol:1});run.camera.shake=5;run.save()}}
  run.doorK+=((s.thawed?0:1)-run.doorK)*Math.min(1,dt*(s.thawed?1.4:6));
  // secrets
  if(!s.nest&&cx>3930&&cx<4080&&p.ground&&Math.abs(p.y+p.h-560)<4){s.nest=true;run.banner={t:3,text:text(run.lang,'secretNest')};run.audio.play('secret',{vol:.9})}
  if(!s.cache&&s.icewall>=c.icewall.hp&&cx<5960&&cx>5760&&p.y+p.h>1080){s.cache=true;run.audio.play('secret',{vol:.9})}
  def.updateEncounters(run,dt);
  if(run.arena.active)run.rime.update(dt);else if(s.rimeDown)run.rime.update(dt);
  run.walls.boss+=((run.arena.active&&!s.rimeDown?1:0)-run.walls.boss)*Math.min(1,dt*6);
 },
 hint(run,k){if(run.hinted[k])return;run.hinted[k]=true;run.banner={t:4.6,text:text(run.lang,k),small:true}},
 updateStorm(run,dt){const st=run.storm,c=run.cfg.storm,outdoor=!def.inside(run)&&def.zone(run).id!=='flagship';st.t-=dt;
  if(st.phase==='calm'&&st.t<=0){if(outdoor){st.phase='warn';st.t=c.warn;run.audio.play('stormWarn',{vol:.8})}else st.t=2}
  else if(st.phase==='warn'&&st.t<=0){st.phase='gust';st.t=c.gust;run.storms++;run.audio.play('stormGust',{vol:.9})}
  else if(st.phase==='gust'&&st.t<=0){st.phase='calm';st.t=c.every}
  const target=st.phase==='gust'?1:0;run.stormK+=(target-run.stormK)*Math.min(1,dt*1.6)},
 updateIcicles(run,dt){const p=run.p,cx=p.x+p.w/2,f=p.y+p.h,c=run.cfg.icicle;
  for(const ic of run.icicles){
   if(ic.state==='hang'){ic.grow=Math.min(1,ic.grow+dt*.5);if(ic.grow>=1&&!p.dead&&Math.abs(cx-ic.x)<c.range&&Math.abs(f-ic.floor)<60){ic.state='crack';ic.t=c.warn;run.audio.at('iceCrack',ic.x,{vol:.9})}}
   else if(ic.state==='crack'){ic.t-=dt;if(ic.t<=0){ic.state='fall';ic.vy=0;ic.y=ic.top;run.audio.at('icicleFall',ic.x,{vol:.7})}}
   else if(ic.state==='fall'){ic.vy+=1600*dt;ic.y+=ic.vy*dt;if(ic.y>=ic.floor-40){ic.state='gone';ic.t=c.regrow;ic.grow=0;run.audio.at('iceShatter',ic.x,{vol:.9});run.fx.burst(ic.x,ic.floor-10,'#d4f6ff',16);
     if(!p.dead&&Math.abs(cx-ic.x)<c.r&&Math.abs(f-ic.floor)<40){run.icicleHits++;run.hurtPlayer(c.dmg,Math.sign(cx-ic.x)||1,null,200)}}}
   else if(ic.state==='gone'){ic.t-=dt;if(ic.t<=0){ic.state='hang';ic.grow=0;ic.y=ic.top}}}},
 updateVents(run,dt){const v=run.cfg.vent,p=run.p,cx=p.x+p.w/2,f=p.y+p.h;run.cfg.vents.forEach((q,i)=>{const ph=(run.time+i*1.1)%v.cycle,warnAt=v.cycle-v.blast-v.warn,blastAt=v.cycle-v.blast,prev=(run.time-dt+i*1.1)%v.cycle,near=Math.abs(q.x-cx)<700;
   if(near&&prev<warnAt&&ph>=warnAt)run.audio.at('ventWarn',q.x,{vol:.7});if(near&&prev<blastAt&&ph>=blastAt)run.audio.at('ventBlast',q.x,{vol:.9});
   const cyc=Math.floor((run.time+i*1.1)/v.cycle);if(ph>=blastAt&&run.ventHit[i]!==cyc&&!p.dead&&Math.abs(cx-q.x)<v.w/2+10&&f>q.y-170&&f<=q.y+4){run.ventHit[i]=cyc;if(run.hurtPlayer(v.dmg,0,null,0))def.chill(run,v.slow)}})},
 ventPhase(run,i){const v=run.cfg.vent,ph=(run.time+i*1.1)%v.cycle;return ph>=v.cycle-v.blast?'blast':ph>=v.cycle-v.blast-v.warn?'warn':'idle'},
 updateSpikes(run,dt){const k=run.cfg.spike,p=run.p,cx=p.x+p.w/2,f=p.y+p.h;run.cfg.spikes.forEach((q,i)=>{const ph=(run.time+q.offset)%k.cycle,prev=(run.time-dt+q.offset)%k.cycle,upAt=k.cycle-k.up,warnAt=upAt-k.warn,near=Math.abs(q.x-cx)<700;
   if(near&&prev<warnAt&&ph>=warnAt)run.audio.at('spikeWarn',q.x,{vol:.6});if(near&&prev<upAt&&ph>=upAt)run.audio.at('spikeUp',q.x,{vol:.8});
   const cyc=Math.floor((run.time+q.offset)/k.cycle);if(ph>=upAt&&run.spikeHit[i]!==cyc&&!p.dead&&cx>q.x-q.w/2-10&&cx<q.x+q.w/2+10&&Math.abs(f-q.y)<6){run.spikeHit[i]=cyc;run.hurtPlayer(k.dmg,0,null,0)}})},
 spikePhase(run,i){const k=run.cfg.spike,q=run.cfg.spikes[i],ph=(run.time+q.offset)%k.cycle;return ph>=k.cycle-k.up?'up':ph>=k.cycle-k.up-k.warn?'warn':'down'},
 revenantDeath(run,e){run.bursts.push({x:e.cx,y:e.floor,t:0});run.audio.at('iceCrack',e.cx,{vol:.8})},
 updateBursts(run,dt){const p=run.p,cx=p.x+p.w/2;for(const b of run.bursts){b.t+=dt;if(!b.done&&b.t>=.8){b.done=true;run.audio.at('revShatter',b.x,{vol:1});run.fx.burst(b.x,b.y-60,'#cff4ff',30,1.4);run.camera.shake=Math.max(run.camera.shake,4);
   if(!p.dead&&Math.abs(cx-b.x)<84&&Math.abs(p.y+p.h-b.y)<80)run.hurtPlayer(10,Math.sign(cx-b.x)||1,null,240)}}run.bursts=run.bursts.filter(b=>b.t<1.2)},
 updateMarks(run,dt){const p=run.p,cx=p.x+p.w/2;for(const m of run.marks){m.t+=dt;if(!m.hit&&m.t>=m.warn){m.hit=true;run.audio.at('iceShatter',m.x,{vol:1});run.fx.burst(m.x,m.y-10,'#d4f6ff',16);
   if(!p.dead&&Math.abs(cx-m.x)<m.r+p.w/2-8&&Math.abs(p.y+p.h-m.y)<60)run.hurtPlayer(m.dmg,Math.sign(cx-m.x)||1,null,220)}}run.marks=run.marks.filter(m=>m.t<m.warn+.4)},
 harpoon(run,e){const p=run.p,sx=e.cx+e.dir*60,sy=e.y+e.h*.38,aim=e.aim||{x:p.x+p.w/2,y:p.y+p.h*.45},a=aimClamp(e,Math.atan2(aim.y-sy,aim.x-sx));
  run.projectiles.push({kind:'harpoon',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*620,vy:Math.sin(a)*620,w:26,h:6,dmg:14,life:1.1,pin:.6,onEnd:(r,q)=>def.pinCheck(r,q)});run.audio.at('harpoon',e.cx,{vol:.9});run.camera.shake=Math.max(run.camera.shake,2)},
 rimeHarpoon(run,b){const p=run.p,sx=b.x+b.dir*70,sy=b.floor-150,aim=b.aim||{x:p.x+p.w/2,y:p.y+p.h*.45};let a=Math.atan2(aim.y-sy,aim.x-sx);const base=b.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.5,.5);a=base+rel;
  run.projectiles.push({kind:'harpoon',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*720,vy:Math.sin(a)*720,w:30,h:8,dmg:18,life:1.2,pin:.5,big:true,onEnd:(r,q)=>def.pinCheck(r,q)});run.audio.play('harpoon',{vol:1})},
 // a harpoon that struck the hero unblocked (hurtPlayer just set hurtT) pins them for a moment
 pinCheck(run,q){const p=run.p;if(!p.dead&&p.hurtT>.2&&overlap(q,{x:p.x-6,y:p.y-6,w:p.w+12,h:p.h+12})){run.pinT=Math.max(run.pinT,q.pin);run.audio.play('harpoonHit',{vol:.8})}},
 rimeIcicles(run,b){const p=run.p,a=run.cfg.arena,cx=p.x+p.w/2;const xs=[cx+p.vx*.4,cx-150,cx+150].map(x=>clamp(x,a.x0+40,a.x1-40));for(const x of xs)run.marks.push({x,y:a.floor,t:0,warn:1.0,r:44,dmg:14,hit:false});run.audio.play('iceCrack',{vol:1})},
 /* strikes on props: ice blocks, the ice wall, braziers, the Admiral's chest */
 hitProps(run,box){
  const s=run.state,c=run.cfg;let hit=false;
  c.blocks.list.forEach((b,i)=>{if(s.blocks[i])return;if(overlap(box,{x:b.x,y:c.blocks.hang,w:b.w,h:42})){s.blocks[i]=1;hit=true;run.audio.at('snap',b.x+b.w/2,{vol:1});run.fx.spark(b.x+b.w/2,c.blocks.hang,'#dfefff',12);run.banner={t:2.4,text:text(run.lang,'blockDrop')};run.save()}});
  const iw=c.icewall;if(s.icewall<iw.hp&&overlap(box,{x:iw.x-6,y:iw.y,w:iw.w+12,h:iw.h})&&!(run.iceCool>run.time)){run.iceCool=run.time+.25;s.icewall++;hit=true;run.fx.burst(iw.x+iw.w/2,iw.y+50,'#d4f6ff',10);run.audio.at(s.icewall>=iw.hp?'iceBreak':'iceHit',iw.x,{vol:.9});run.camera.shake=3;if(s.icewall>=iw.hp){run.banner={t:3,text:text(run.lang,'secretWall')};run.fx.burst(iw.x+iw.w/2,iw.y+40,'#d4f6ff',30)}run.save()}
  if(!s.thawed)c.braziers.list.forEach((q,i)=>{if(overlap(box,{x:q.x-26,y:q.y-70,w:52,h:70})&&!(run.brCool?.[i]>run.time)){(run.brCool??=[])[i]=run.time+.3;const was=run.burn[i];run.burn[i]=c.braziers.burn;hit=true;if(!was)run.audio.at('brazier',q.x,{vol:1});run.fx.burst(q.x,q.y-50,'#ffb04a',14)}});
  const a=c.arena;if(s.rimeDown&&!run.cine&&overlap(box,{x:a.chest-44,y:a.floor-80,w:88,h:80})){hit=true;def.beginVictory(run)}
  return hit},
 strike(run,box,dmg){let hit=def.hitProps(run,box);const b=run.rime;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&overlap(box,b.box())){const r=b.damage(dmg,'melee',run.p.dir);if(r!=='none')hit=true}return hit},
 dashStrike(run,box,dmg){const b=run.rime;if(!run.arena.active||run.cine||b.state==='dormant'||!overlap(box,b.box()))return false;const r=b.damage(Math.round(dmg*run.cfg.boss.dashScale),'dash',run.p.dir);if(r==='hit'){run.fx.spark(b.x,run.p.y+run.p.h*.45,'#9fe4ff',16);return true}return false},
 projectileHit(run,q){if(q.owner!=='hero')return false;const box={x:q.x,y:q.y,w:q.w||12,h:q.h||8};if(def.hitProps(run,box))return true;const b=run.rime;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&overlap(q,b.box())){b.damage(Math.round(q.dmg*run.cfg.boss.bulletScale),'bullet',Math.sign(q.vx)||1);return true}return false},
 /* encounters */
 spawnWave(run,id,w){const foes=(run.pending[id]||[]).filter(q=>q.w===w&&!run.killed.has(q.e.id));
  for(const q of foes){const e=q.e;e.encId=id;e.spawnT=.8;e.alert=true;e.x=q.d.x-e.w/2;e.hp=e.max;e.dead=false;e.state='idle';e.timer=0;e.cool=.6+run.rand()*.4;run.pending[id]=run.pending[id].filter(z=>z!==q);run.enemies.push(e)}return foes.length},
 updateEncounters(run,dt){
  const c=run.cfg,s=run.state,p=run.p,cx=p.x+p.w/2,en=run.enc;
  for(const k of c.encounters){const on=en.id===k.id;run.walls[k.id]+=((on?1:0)-run.walls[k.id])*Math.min(1,dt*6)}
  if(!en.id&&!p.dead){for(const k of c.encounters){if(s.enc[k.id])continue;if(cx>k.trigger&&cx<k.wallR&&Math.abs(p.y+p.h-k.floor)<160&&p.ground){en.id=k.id;en.wave=0;en.delay=1.1;run.audio.play('gateSlam',{vol:.9});run.camera.shake=6;run.banner={t:2.2,text:text(run.lang,'ambush')};def.music(run);break}}
   const a=c.arena;if(!run.arena.active&&!s.rimeDown&&cx>a.x0+120&&Math.abs(p.y+p.h-a.floor)<20&&p.ground){run.arena.active=true;run.rime.start();def.music(run);run.audio.play('gateSlam',{vol:.9});def.hint(run,'hRime')}}
  if(!en.id)return;const k=c.encounters.find(q=>q.id===en.id);
  const alive=run.enemies.filter(e=>!e.dead&&e.encId===k.id);if(alive.length)return;en.delay-=dt;if(en.delay>0)return;
  const pend=run.pending[k.id]||[];let next=en.wave+1;while(next<=k.waves&&!pend.some(q=>q.w===next&&!run.killed.has(q.e.id)))next++;
  if(next>k.waves){s.enc[k.id]=true;en.id=null;run.banner={t:2.6,text:text(run.lang,'cleared')};run.audio.play('gateOpen',{vol:.9});def.music(run);run.save();return}
  en.wave=next;run.banner={t:2,text:text(run.lang,'wave').replace('{n}',next)};run.audio.play('bossIntro',{vol:.5});def.spawnWave(run,k.id,next);en.delay=1.4},
 heroHazards(run,dt){},
 onRespawn(run){
  const s=run.state,c=run.cfg,en=run.enc;run.marks=[];run.bursts=[];run.projectiles=[];run.slowT=0;run.pinT=0;run.slide=0;
  const back=id=>{for(const e of run.enemies.filter(q=>q.encId===id&&!q.dead)){run.enemies=run.enemies.filter(q=>q!==e);const d=c.enemies.find(q=>q.id===e.id);e.hp=e.max;e.state='idle';e.encId=null;e.spawnT=0;(run.pending[id]??=[]).push({e,w:+d.wave.split(':')[1],d})}};
  if(en.id){back(en.id);en.id=null;en.wave=0}
  if(run.arena.active&&!s.rimeDown){run.rime.reset();run.arena.active=false}
  if(!s.thawed)run.burn=run.burn.map(()=>0);
  for(const ic of run.icicles)if(ic.state!=='hang'){ic.state='hang';ic.grow=1;ic.y=ic.top}
  def.music(run)},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 ambience(run){if(!run.audio.ctx)return;const inside=def.inside(run),z=def.zone(run).id;run.audio.loop('blizzard',inside?.05:(.18+.4*(run.stormK||0)));run.audio.loop('iceAmb',inside?.35:.22);run.audio.loop('cave',inside?.25:0)},
 paintSolid:(run,c,s,L,R,T,B)=>paintSolid(run,c,s,L,R,T,B),
 paintLedge:(run,c,l)=>paintLedge(run,c,l),
 drawCrumble:(run,c,b)=>drawCrumble(run,c,b),
 drawMover:(run,c,m)=>drawMover(run,c,m),
 drawEnemy:(run,c,e)=>drawFoe(run,c,e),
 drawProjectile(run,c,q){if(q.kind!=='harpoon')return;c.rotate(Math.atan2(q.vy,q.vx));const L_=q.big?44:34;c.strokeStyle='rgba(200,200,200,.6)';c.lineWidth=1.5;c.setLineDash([4,4]);c.beginPath();c.moveTo(-L_-60,0);c.lineTo(-L_,0);c.stroke();c.setLineDash([]);c.fillStyle='#c8d2dc';c.fillRect(-L_,-1.5,L_,3);c.beginPath();c.moveTo(0,-6);c.lineTo(12,0);c.lineTo(0,6);c.closePath();c.fill();c.fillRect(-L_+4,-5,3,10);run.fx.glow(c,0,0,16,'rgba(190,230,255,',.5)},
 drawBackground:(run,c)=>drawBackground(run,c),
 drawBack(run,c){drawBack(run,c);drawDecor(run,c)},
 drawMid(run,c){
  const cam=run.camera,W=E.W,L=cam.x-120,R=cam.x+W+120,cfg=run.cfg,s=run.state,t=run.time;
  // icicles: crack + growing shadow before they fall
  for(const ic of run.icicles){if(ic.x<L||ic.x>R)continue;const len=46*ic.grow;
   if(ic.state==='crack'){const k=1-ic.t/cfg.icicle.warn;c.fillStyle='rgba(20,40,60,'+(.15+.35*k)+')';c.beginPath();c.ellipse(ic.x,ic.floor-2,cfg.icicle.r*(.6+.6*k),7,0,0,TAU);c.fill();c.strokeStyle='rgba(255,90,60,'+(.3+.5*k)+')';c.lineWidth=2;c.stroke()}
   if(ic.state==='gone')continue;const y=ic.state==='fall'?ic.y:ic.top,sh=ic.state==='crack'?(Math.random()-.5)*3:0;c.save();c.translate(ic.x+sh,y);c.fillStyle='rgba(200,242,255,.92)';c.strokeStyle='#6ab8d8';c.lineWidth=1.5;c.beginPath();c.moveTo(-9,0);c.lineTo(0,len);c.lineTo(9,0);c.closePath();c.fill();c.stroke();c.fillStyle='rgba(255,255,255,.7)';c.fillRect(-3,2,2,len*.6);
   if(ic.state==='crack'){c.strokeStyle='rgba(0,0,0,.5)';c.beginPath();c.moveTo(-6,3);c.lineTo(2,8);c.lineTo(-2,13);c.stroke()}c.restore()}
  // frost vents
  cfg.vents.forEach((q,i)=>{if(q.x<L||q.x>R)return;const ph=def.ventPhase(run,i),w=cfg.vent.w;c.fillStyle='#2b3440';c.fillRect(q.x-w/2,q.y-6,w,6);c.fillStyle='#4a5a68';for(let x=q.x-w/2+4;x<q.x+w/2;x+=8)c.fillRect(x,q.y-6,3,6);
   if(ph==='warn'){for(let k=0;k<3;k++){const yy=q.y-10-((t*80+k*20)%40);c.fillStyle='rgba(220,245,255,.5)';c.beginPath();c.arc(q.x+Math.sin(t*9+k)*8,yy,5+k,0,TAU);c.fill()}}
   if(ph==='blast'){c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(0,q.y,0,q.y-180);g.addColorStop(0,'rgba(210,245,255,.75)');g.addColorStop(1,'rgba(210,245,255,0)');c.fillStyle=g;c.fillRect(q.x-w/2-6,q.y-180,w+12,180);c.restore()}});
  // vault ice spikes
  cfg.spikes.forEach((q,i)=>{if(q.x<L||q.x>R)return;const ph=def.spikePhase(run,i);c.fillStyle='#1c3450';c.fillRect(q.x-q.w/2,q.y-4,q.w,4);
   if(ph==='warn'){c.strokeStyle='rgba(255,120,80,'+(.4+.4*Math.sin(t*20))+')';c.lineWidth=2;c.beginPath();for(let x=q.x-q.w/2+6;x<q.x+q.w/2;x+=14){c.moveTo(x,q.y-2);c.lineTo(x+6,q.y-8)}c.stroke()}
   if(ph==='up'){c.fillStyle='rgba(200,242,255,.95)';c.strokeStyle='#6ab8d8';c.lineWidth=1.2;for(let x=q.x-q.w/2+4;x<q.x+q.w/2-4;x+=14){c.beginPath();c.moveTo(x,q.y);c.lineTo(x+7,q.y-52);c.lineTo(x+14,q.y);c.closePath();c.fill();c.stroke()}}});
  // the crane beam with the hanging ice blocks over the channel
  const bl=cfg.blocks;if(R>5150&&L<5800){c.fillStyle='#3a2a1a';c.fillRect(5180,bl.beam-10,600,14);c.fillRect(5180,bl.beam-10,12,280);c.fillRect(5770,bl.beam-10,12,280);c.fillStyle='#e8f0f6';c.fillRect(5180,bl.beam-14,600,5);
   bl.list.forEach((b,i)=>{const k=run.blockFall[i];if(s.blocks[i]&&k>=1)return;const y=bl.hang+(bl.float-bl.hang)*k*k;c.strokeStyle='#7d8894';c.lineWidth=3;c.setLineDash([5,4]);c.beginPath();c.moveTo(b.x+b.w/2,bl.beam+4);c.lineTo(b.x+b.w/2,s.blocks[i]?bl.beam+40:y);c.stroke();c.setLineDash([]);
    c.save();c.beginPath();c.rect(b.x,y,b.w,40);c.clip();c.fillStyle=pat(run,c,'ice');c.fillRect(b.x,y,b.w,40);c.restore();c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=1.5;c.strokeRect(b.x+1,y+1,b.w-2,38);if(!s.blocks[i])run.fx.glow(c,b.x+b.w/2,y+20,40,'rgba(255,220,140,',.15+.1*Math.sin(t*4+i))})}
  // braziers with their burn timers, the frozen vault door, the ice wall, encounter nets
  cfg.braziers.list.forEach((q,i)=>{if(q.x<L||q.x>R)return;const lit=s.thawed||run.burn[i]>0;c.strokeStyle='#2b3038';c.lineWidth=4;c.beginPath();c.moveTo(q.x-18,q.y);c.lineTo(q.x,q.y-40);c.lineTo(q.x+18,q.y);c.moveTo(q.x,q.y-40);c.lineTo(q.x,q.y);c.stroke();c.fillStyle='#3a3f46';c.beginPath();c.moveTo(q.x-24,q.y-48);c.lineTo(q.x+24,q.y-48);c.lineTo(q.x+16,q.y-36);c.lineTo(q.x-16,q.y-36);c.closePath();c.fill();
   if(lit)run.fire(c,q.x,q.y-48,1.1,true);else{c.fillStyle='rgba(200,242,255,.6)';c.fillRect(q.x-18,q.y-52,36,4)}
   if(!s.thawed&&run.burn[i]>0){const k=run.burn[i]/cfg.braziers.burn;c.strokeStyle='rgba(255,200,110,.85)';c.lineWidth=4;c.beginPath();c.arc(q.x,q.y-100,14,-Math.PI/2,-Math.PI/2+TAU*k);c.stroke();c.fillStyle='#ffe3a0';c.font='800 12px Arial';c.textAlign='center';c.fillText(Math.ceil(run.burn[i]),q.x,q.y-96)}});
  for(const d of def.dynamicSolids(run)){if(d.x+d.w<L||d.x>R)continue;
   if(d.style==='icewall'){c.save();c.beginPath();c.rect(d.x,d.y,d.w,d.h);c.clip();c.fillStyle=pat(run,c,'ice');c.fillRect(d.x,d.y,d.w,d.h);c.restore();c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=1.5;c.strokeRect(d.x,d.y,d.w,d.h);c.strokeStyle='rgba(20,40,60,.7)';c.beginPath();for(let i=0;i<=s.icewall;i++){c.moveTo(d.x+8+i*8,d.y+10);c.lineTo(d.x+20+i*6,d.y+50);c.lineTo(d.x+10+i*8,d.y+90)}c.stroke();run.fx.glow(c,d.x+d.w/2,d.y+60,30,'rgba(255,220,140,',.12+.08*Math.sin(t*3));continue}
   if(d.style==='icedoor'){c.fillStyle='#4a3a2c';c.fillRect(d.x+4,d.y,d.w-8,d.h);c.fillStyle='#c9a24a';c.fillRect(d.x+d.w/2-4,d.y+d.h*.55,8,12);c.save();c.globalAlpha=.75;c.beginPath();c.rect(d.x-6,d.y,d.w+12,d.h);c.clip();c.fillStyle=pat(run,c,'ice');c.fillRect(d.x-6,d.y,d.w+12,d.h);c.restore();if(s.thawed&&run.fx.on){c.fillStyle='rgba(230,240,250,.35)';for(let k=0;k<4;k++)c.fillRect(d.x+Math.sin(t*5+k)*10,d.y+d.h-20-((t*60+k*30)%120),10,10)}continue}
   c.fillStyle='#2f353b';c.fillRect(d.x,d.y,d.w,d.h);c.fillStyle='rgba(255,255,255,.12)';c.fillRect(d.x+2,d.y,3,d.h);c.strokeStyle='#14181c';c.lineWidth=2;for(let y=d.y+16;y<d.y+d.h;y+=28){c.beginPath();c.moveTo(d.x,y);c.lineTo(d.x+d.w,y);c.stroke()}}
  // the Admiral's sea chest on the flagship
  const a=cfg.arena;if(a.chest>L&&a.chest<R){const open=run.chestOpen;c.fillStyle='#3a2414';c.fillRect(a.chest-40,a.floor-50,80,50);c.fillStyle='#c9a24a';c.fillRect(a.chest-40,a.floor-50,80,6);c.fillRect(a.chest-4,a.floor-40,8,14);c.fillStyle='rgba(200,242,255,.5)';c.fillRect(a.chest-40,a.floor-8,80,8);
   c.save();c.translate(a.chest-40,a.floor-50);c.rotate(open?-1.1:0);c.fillStyle='#4a2e18';c.beginPath();c.roundRect(0,-22,80,22,[10,10,0,0]);c.fill();c.fillStyle='#c9a24a';c.fillRect(0,-4,80,4);c.restore();
   if(s.rimeDown&&!run.cine){run.fx.glow(c,a.chest,a.floor-40,70,'rgba(255,220,130,',.5+.2*Math.sin(t*4));c.save();c.font='900 26px Georgia';c.textAlign='center';c.fillStyle='rgba(255,227,160,'+(.6+.4*Math.sin(t*6))+')';c.fillText('⚔',a.chest,a.floor-100);c.restore()}}
  // revenant ice bursts and Rime's icicle marks
  for(const b of run.bursts){if(b.done)continue;const k=b.t/.8;c.strokeStyle='rgba(127,230,255,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(b.x,b.y-3,84*(.5+.5*k),12,0,0,TAU);c.stroke()}
  for(const m of run.marks){const k=clamp(m.t/m.warn,0,1);if(m.t>=m.warn)continue;c.strokeStyle='rgba(255,90,60,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(m.x,m.y-3,m.r*(1.4-.4*k),9,0,0,TAU);c.stroke();if(k>.5){const yy=m.y-480*(1-(k-.5)/.5);c.fillStyle='rgba(200,242,255,.95)';c.beginPath();c.moveTo(m.x-8,yy-40);c.lineTo(m.x,yy);c.lineTo(m.x+8,yy-40);c.fill()}}
 },
 drawActors(run,c){if(run.arena.active||run.rime.state==='dormant'||run.state.rimeDown&&run.rime.state!=='dead')run.rime.draw(c)},
 drawFront(run,c){
  const cam=run.camera,W=E.W,L=cam.x-100,R=cam.x+W+100,cfg=run.cfg,t=run.time;
  for(const q of cfg.pits){if(q.x+q.w<L||q.x>R)continue;const y0=1060;c.fillStyle='rgba(16,44,70,.9)';c.beginPath();c.moveTo(q.x,y0+30);for(let x=q.x;x<=q.x+q.w;x+=14)c.lineTo(x,y0+Math.sin(t*1.8+x*.04)*3);c.lineTo(q.x+q.w,y0+400);c.lineTo(q.x,y0+400);c.fill();c.fillStyle='rgba(220,240,255,.55)';for(let x=q.x+10;x<q.x+q.w-10;x+=46){c.beginPath();c.ellipse(x+Math.sin(t*.7+x)*6,y0+2,14,3,0,0,TAU);c.fill()}}
  // the hero's frost while chilled or pinned
  const p=run.p;if(run.slowT>0||run.pinT>0)run.fx.glow(c,p.x+p.w/2,p.y+p.h*.5,60,'rgba(170,230,255,',.45);
 },
 drawLighting(run,c){
  weather(run,c);
  const W=E.W,cam=run.camera,p=run.p,inside=def.inside(run),z=def.zone(run).id,cfg=run.cfg,s=run.state;
  let dark=inside?(z==='vault'?.42:.5):z==='flagship'?.22:.18;if(run.cine)dark*=.6;if(dark<.05)return;
  const lw=Math.ceil(W/4),lh=Math.ceil(H/4),buf=run.lightBuf;if(buf.width!==lw||buf.height!==lh){buf.width=lw;buf.height=lh}
  const x=buf.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(2,8,20,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
  const spr=run.fx.glowSprite('rgba(255,255,255,');const hole=(wx,wy,r,a=1)=>{const sx=(wx-cam.x)/4,sy=(wy-cam.y)/4,rr=r/4;if(sx+rr<0||sx-rr>lw||sy+rr<0||sy-rr>lh)return;x.globalAlpha=a;x.drawImage(spr,sx-rr,sy-rr,rr*2,rr*2)};
  hole(p.x+p.w/2,p.y+p.h*.45,inside?200:150,1);
  for(const [lx,ly] of cfg.decor.lamps)hole(lx+16,ly-70,170,.9);for(const [lx,ly] of cfg.decor.crystals)hole(lx,ly-20,130,.7);
  cfg.braziers.list.forEach((q,i)=>{if(s.thawed||run.burn[i]>0)hole(q.x,q.y-60,220,.95)});for(const cp of cfg.checkpoints)if(cp.id<=run.checkpoint)hole(cp.x,cp.y-40,170,.8);
  for(const ch of run.chests)if(!ch.open)hole(ch.x,ch.y-20,110,.6);
  cfg.vents.forEach((q,i)=>{if(def.ventPhase(run,i)==='blast')hole(q.x,q.y-90,160,.7)});
  for(const e of run.enemies)if(!e.dead&&e.cx>cam.x-100&&e.cx<cam.x+W+100)hole(e.cx,e.floor-70,140,.55);
  if(run.arena.active)hole(run.rime.x,run.rime.floor-120,220,.6);if(run.state.rimeDown)hole(cfg.arena.chest,cfg.arena.floor-40,200,.8);
  x.globalAlpha=1;x.globalCompositeOperation='source-over';c.save();c.imageSmoothingEnabled=true;c.drawImage(buf,0,0,lw,lh,0,0,lw*4,lh*4);c.restore()},
 drawHud(run,c){
  const W=E.W,s=run.state,t=run.time,z=def.zone(run).id,b=run.rime;
  const y=(run.objY||88)+16,x=W/2-20;const chips=[];
  if(run.storm.phase==='warn')chips.push(['⚠ '+text(run.lang,'blizzard'),'#ffd38a',run.storm.t/run.cfg.storm.warn]);else if(run.storm.phase==='gust'&&!def.inside(run))chips.push(['❄ '+text(run.lang,'blizzard'),'#e6f6ff',run.storm.t/run.cfg.storm.gust]);
  if(run.onIce)chips.push(['⛸ '+text(run.lang,'ice'),'#bfe9ff',null]);if(run.slowT>0||run.pinT>0)chips.push(['❄ '+text(run.lang,'frozenHud'),'#9fdcff',run.slowT/1.5]);
  if(z==='vault'&&!s.thawed)chips.push(['🔥 '+run.burn.map(v=>v>0?Math.ceil(v):'·').join('  '),'#ffd38a',null]);
  if(chips.length&&!run.cine){const cw=150,tot=chips.length*cw+(chips.length-1)*8;let x0=x-tot/2;c.save();for(const [lab,col,k] of chips){c.fillStyle='rgba(10,18,32,.78)';c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.roundRect(x0,y,cw,28,12);c.fill();c.stroke();c.font='800 13px Arial, sans-serif';c.textAlign='center';c.fillStyle=col;c.fillText(lab,x0+cw/2,y+19);if(k!==null){c.fillRect(x0+8,y+23,(cw-16)*clamp(k,0,1),3)}x0+=cw+8}c.restore()}
  if(def.bossHud(run)){const bw=Math.min(380,W-560),bx=W/2-bw/2-20,by=(run.objY||88)+(chips.length?52:18);run.panel(c,bx-10,by-8,bw+20,60);c.textAlign='left';c.font='800 13px Georgia, serif';c.fillStyle='#ffffff';c.fillText(text(run.lang,'rime'),bx,by+12,bw-90);
   for(let i=0;i<b.cfg.plates;i++){c.fillStyle=i<b.plates?'#bfefff':'#3a4050';c.beginPath();c.moveTo(bx+bw-90+i*16,by+12);c.lineTo(bx+bw-84+i*16,by+2);c.lineTo(bx+bw-78+i*16,by+12);c.closePath();c.fill()}
   c.textAlign='right';c.fillStyle='#ffd36b';c.fillText(Math.ceil(b.hp)+'/'+b.max,bx+bw,by+29);run.bar(c,bx,by+36,bw,12,b.hp/b.max,b.rage?'#ff9f43':'#7fd4ff',b.rage?'#a3460f':'#1f5a8a',true)}
  if(run.banner.t>0&&!run.cine?.stage?.startsWith('story')){const kk=Math.min(1,run.banner.t,4.6-run.banner.t+.001);c.save();c.globalAlpha=clamp(kk*2,0,1);c.textAlign='center';const by=run.banner.small?(run.objY||88)+(def.bossHud(run)?126:chips.length?92:86):200;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(run.banner.small?520:640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(10,20,36,.86)';c.beginPath();c.roundRect(W/2-bw/2,by-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#9fdcff';c.lineWidth=2;c.stroke();
   c.fillStyle='#e6f4ff';let txt=run.banner.text;while(c.measureText(txt).width>bw-30&&txt.length>8)txt=txt.slice(0,-2);if(txt!==run.banner.text)txt+='…';c.fillText(txt,W/2,by+(run.banner.small?-5:6));c.restore()}
  if(run.cine)def.drawCine(run,c)},
 /* -------- Rime falls, the Admiral's chart, story */
 rimeDown(run){
  const b=run.rime,s=run.state,p=run.p;if(s.rimeDown)return;s.rimeDown=true;b.state='dying';b.deadT=0;run.marks=[];run.projectiles=run.projectiles.filter(q=>q.owner==='hero');
  for(let i=0;i<30;i++)b.shards.push({x:b.x,y:b.floor-120,vx:(Math.random()-.5)*500,vy:-200-Math.random()*300,t:0});
  run.audio.play('rimeFall',{vol:1});run.audio.play('bossDie',{vol:.8});run.camera.shake=12;run.hitStop(.25);run.banner={t:3,text:text(run.lang,'rimeDown')};run.dropCoins(b.x,b.floor-120,10,'rime');
  run.healHero(30);run.audio.stopMusic(1.2);setTimeout(()=>{if(run.phase==='play'&&!run.cine)run.audio.playMusic('frozen',1.6)},1600);run.save()},
 beginVictory(run){
  if(run.cine)return;const p=run.p;run.cine={stage:'chart',t:0,T:0,white:0,letter:0,line:0,chars:0};run.chestOpen=true;run.clearInputs();if(run.controls)run.controls.hidden=true;p.inv=99;
  run.audio.stopMusic(.6);run.audio.play('chest',{vol:1});run.audio.play('chartFanfare',{vol:1});const a=run.cfg.arena;run.fx.burst(a.chest,a.floor-40,'#ffe27a',40,1.6);run.save()},
 updateCine(run,dt){
  const cn=run.cine,p=run.p;cn.t+=dt;cn.T+=dt;p.inv=Math.max(p.inv,2);run.inputs.clear();run.axis=0;
  if(cn.stage==='chart'){if(cn.t>.6&&!cn.flashed){cn.flashed=true;run.banner={t:3.4,text:text(run.lang,'chart')+' — '+text(run.lang,'chartSub')};def.music(run)}
   if(cn.t>3.6){cn.stage='pose';cn.t=0;cn.heroPose='pose';p.dir=1;run.audio.play('victory',{vol:1});run.fx.ring(p.x+p.w/2,p.y+p.h-10,'rgba(255,220,120,.95)',20,.8);run.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ffe27a',50,1.8);run.fx.text(text(run.lang,'victory'),p.x+p.w/2,p.y-60,'#ffe27a',true)}return}
  if(cn.stage==='pose'){if(cn.t>2.2)def.startStory(run);return}
  if(cn.stage==='story'){cn.letter=Math.min(1,cn.letter+dt*2.5);const line=def.lines(run)[cn.line];cn.chars=Math.min(line.text.length,cn.chars+dt*42);cn.lineT=(cn.lineT||0)+dt;
   if(run.attackPress||run.jumpBuffer>0){run.attackPress=false;run.jumpBuffer=0;def.advance(run)}
   if(cn.chars>=line.text.length&&cn.lineT>line.text.length/42+3.2)def.advance(run);return}
  if(cn.stage==='outro'){cn.letter=Math.max(0,cn.letter-dt*2.2);if(cn.letter<=0&&run.phase==='play'){if(run.skipBtn)run.skipBtn.style.display='none';run.cine=null;
    run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length})}}},
 heroName(run){return window.PirateHeroes?.get?.(run.heroId)?.name||'Captain'},
 lines(run){const t=k=>text(run.lang,k),h=def.heroName(run);return[{who:'hero',name:h,text:t('s1')},{who:'rime',name:t('s2n'),text:t('s2')},{who:'',name:'',text:t('s3')},{who:'hero',name:h,text:t('s4')}]},
 startStory(run){const was=run.cine;run.cine={...(was||{}),stage:'story',t:0,T:was?.T||9,white:0,letter:0,line:0,chars:0,lineT:0,heroPose:'pose'};run.clearInputs();if(run.controls)run.controls.hidden=true;if(run.skipBtn)run.skipBtn.style.display='block';run.p.inv=99;def.music(run)},
 advance(run){const cn=run.cine;if(!cn||cn.stage!=='story')return;const lines=def.lines(run),line=lines[cn.line];if(cn.chars<line.text.length){cn.chars=line.text.length;return}cn.line++;cn.chars=0;cn.lineT=0;run.audio.play('coin',{vol:.3,rate:.7});if(cn.line>=lines.length)def.skipStory(run)},
 skipStory(run){const cn=run.cine;if(!cn)return;cn.stage='outro';cn.line=Math.min(cn.line,def.lines(run).length-1);if(run.skipBtn)run.skipBtn.style.display='none'},
 drawCineHero(run,c,p,base){const cx=p.x+p.w/2,t=run.time;c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(cx-60,0,cx+60,0);g.addColorStop(0,'rgba(190,230,255,0)');g.addColorStop(.5,'rgba(190,230,255,'+(.22+.08*Math.sin(t*4))+')');g.addColorStop(1,'rgba(190,230,255,0)');c.fillStyle=g;c.fillRect(cx-60,p.y-400,120,400+p.h);c.restore();
  run.fx.glow(c,cx,p.y+p.h*.4,110,'rgba(255,220,120,',.4);base(c,{...p,anim:'attackC',attack:0,dir:p.dir},run)},
 drawRimePortrait(run,c,x,y){c.save();c.translate(x,y);c.fillStyle='#1a2432';c.fillRect(0,0,90,90);c.fillStyle='#d4c0aa';c.beginPath();c.ellipse(45,50,22,26,0,0,TAU);c.fill();c.fillStyle='#e6f2fa';c.beginPath();c.moveTo(26,56);c.lineTo(34,88);c.lineTo(45,78);c.lineTo(56,90);c.lineTo(66,56);c.closePath();c.fill();
  c.fillStyle='#1e2a38';c.beginPath();c.moveTo(4,36);c.quadraticCurveTo(45,2,86,36);c.quadraticCurveTo(45,22,4,36);c.closePath();c.fill();c.fillStyle='rgba(200,242,255,.85)';for(let i=0;i<5;i++){c.beginPath();c.moveTo(12+i*15,34);c.lineTo(16+i*15,46);c.lineTo(20+i*15,34);c.fill()}
  run.fx.glow(c,56,46,14,'rgba(127,230,255,',.9);c.fillStyle='#7fe6ff';c.beginPath();c.arc(56,46,3,0,TAU);c.arc(36,46,3,0,TAU);c.fill();c.restore()},
 drawCine(run,c){
  const W=E.W,cn=run.cine,hs=run.hudScale||1;
  if(cn.stage==='chart'&&cn.t>.4){const k=clamp((cn.t-.4)/1.2,0,1),pw=380*k,ph=220*k,px=W/2-pw/2,py=236;if(pw>20){c.save();c.globalAlpha=k;c.fillStyle='#e8d6a8';c.strokeStyle='#6a4a2a';c.lineWidth=3;c.beginPath();c.roundRect(px,py,pw,ph,10);c.fill();c.stroke();
   if(k>.9){c.strokeStyle='#8a2a22';c.lineWidth=3;c.setLineDash([8,6]);c.beginPath();c.moveTo(px+40,py+160);c.quadraticCurveTo(px+150,py+60,px+250,py+120);c.quadraticCurveTo(px+300,py+150,px+330,py+70);c.stroke();c.setLineDash([]);
    c.fillStyle='#3a2a1a';c.font='800 16px Georgia';c.textAlign='center';c.fillText(text(run.lang,'chartSub'),px+pw/2,py+30);c.strokeStyle='#3a2a1a';c.lineWidth=2;c.strokeRect(px+310,py+40,40,40);for(let i=0;i<4;i++){c.beginPath();c.arc(px+318+i*8,py+90,4,0,TAU);c.stroke()}c.fillStyle='#8a2a22';c.font='900 22px Georgia';c.fillText('✕',px+330,py+66);c.fillText('☠',px+44,py+176)}c.restore()}}
  const bars=cn.stage==='story'||cn.stage==='outro'?cn.letter:0;if(bars<=0)return;
  const bh=96*bars;c.fillStyle='#000';c.fillRect(0,0,W,bh);c.fillRect(0,H/hs-bh,W,bh);
  if(cn.stage!=='story')return;const lines=def.lines(run),line=lines[Math.min(cn.line,lines.length-1)],shown=line.text.slice(0,Math.floor(cn.chars));
  const pw=Math.min(W-40,760),px=W/2-pw/2,py=bh+14;
  c.save();c.globalAlpha=bars;c.fillStyle='rgba(10,18,32,.9)';c.strokeStyle='#9fdcff';c.lineWidth=2;c.beginPath();c.roundRect(px,py,pw,118,16);c.fill();c.stroke();
  let tx=px+22;if(line.who){c.save();c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.clip();c.fillStyle='#22344a';c.fillRect(px+14,py+14,90,90);
   if(line.who==='hero'&&run.skin)run.skin.drawPortrait(c,px+14,py+14,90,90);else if(line.who==='rime')def.drawRimePortrait(run,c,px+14,py+14);c.restore();
   c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.stroke();tx=px+120}
  c.textAlign='left';if(line.name){c.font='800 17px Georgia, serif';c.fillStyle='#bfe9ff';c.fillText(line.name,tx,py+32)}
  c.font='600 17px Arial, sans-serif';c.fillStyle='#eef6f8';const maxw=px+pw-tx-20;const words=shown.split(' ');let ln='',yy=py+(line.name?58:44);for(const w of words){const test=ln?ln+' '+w:w;if(c.measureText(test).width>maxw&&ln){c.fillText(ln,tx,yy);ln=w;yy+=24}else ln=test}c.fillText(ln,tx,yy);
  if(cn.chars>=line.text.length){c.font='700 13px Arial';c.fillStyle='rgba(255,227,160,'+(.5+.5*Math.sin(run.time*5))+')';c.textAlign='right';c.fillText('▶ '+text(run.lang,'tap'),px+pw-16,py+108)}
  c.restore()}
};
E.register(def);
})();
