/* Pirate Strike — Level 6: Stormbreaker Island (Fırtına Adası), first stage of chapter 2.
 * Independent level on PirateLevelEngine. Areas: Storm Beach → Broken Bridges → Ship Graveyard →
 * Lighthouse Cliffs → the abandoned lighthouse (LEVEL-06-BLUEPRINT.md zones in engine units).
 * Storm systems: a wind state machine (calm → 1.2 s warning → gust → calm; flags, streaks, a HUD
 * gauge and a whistle announce every gust; the push is capped and never flips in mid-air; rocks,
 * crates, the grotto and the raft give shelter), lightning rods and storm strikes (IDLE → MARKED
 * ≥ 0.9 s ring + crackle → STRIKE → COOLDOWN, i-frames respected), collapsing rope bridges (one
 * gives way behind you), moving lifts, bobbing barrels, rain, scud, sky lightning and breakers.
 * Combat encounters: the wreck-camp ambush, the battle on the listing wreck, the storm crew at the
 * lighthouse — then the Storm Captain (mini-boss). Puzzles: the sail raft that rides the gusts and
 * the three lighthouse mirrors that lead the keeper's lantern beam to the storm seal. Secrets: the
 * smugglers' grotto under the bridge and the topmast chest. Ending: strike the lamp winch, the
 * lighthouse burns again, story scene, Level 7 unlocked.
 * New pirates: Storm Pirate (cutlass, two-hit combo), Thunder Gunner (musket: aim line + lock,
 * shot, visible reload), Wind Raider (short dashes, dodges, skids). Painted art: tools/level06_art.py,
 * audio: tools/level06_audio.py, layout: tools/level06_layout.py. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A6=BASE+'assets/level-06/',A4=BASE+'assets/level-04/',A2=BASE+'assets/level-02/';
const L={
en:{levelWord:'Level',title:'Level 6 · Stormbreaker Island',blurb:'An abandoned lighthouse in the heart of the storm — broken bridges, wrecks and the Storm Captain',
 beach:'Storm Beach',bridges:'Broken Bridges',wreck:'Ship Graveyard',cliffs:'Lighthouse Cliffs',summit:'The Abandoned Lighthouse',
 objBeach:'Cross the storm beach — shelter behind rocks when a gust comes',objAmbush:'Ambush! Defeat the wreckers · wave {n}/2',objBridges:'Cross the broken bridges — beware of the lightning rods',
 objChase:'The bridge is collapsing — RUN!',objGrotto:'A hidden smugglers’ grotto — the lift takes you back up',objWreck:'Board the sail raft',objRaft:'Strike the winch: raise the sail when the wind blows east, furl it when it turns',
 objDeck:'Hold the wreck · wave {n}/2',objBarrels:'Hop the drifting barrels to the cliffs',objCliffs:'Climb to the lighthouse yard',objMirrors:'Turn the mirrors: lead the lantern beam to the storm seal',
 objGate:'The gate is open — to the lighthouse!',objCrew:'Defeat the storm crew · wave {n}/2',objCaptain:'Defeat the Storm Captain',objMech:'Strike the lighthouse winch · {n}/3',
 ambush:'AMBUSH!',wave:'WAVE {n}',cleared:'The way is clear!',chase:'THE BRIDGE IS GIVING WAY — RUN!',grotto:'Secret: the smugglers’ grotto',raftDone:'The raft reached the wreck — its rope line will ferry you now',
 sailUp:'Sail raised',sailDown:'Sail furled',sealOn:'The beam strikes the storm seal — the gate opens!',captain:'STORM CAPTAIN',capIntro:'The Storm Captain descends!',fury:'The Captain calls the storm!',
 capDown:'The Storm Captain falls!',relit:'THE LIGHTHOUSE BURNS AGAIN',victory:'VICTORY!',tap:'Tap to continue',skip:'SKIP ▶▶',dodge:'DODGE',reload:'RELOAD',
 windWarn:'GUST',windGust:'WIND',calm:'CALM',shelter:'SHELTERED',
 hWind:'Watch the flags and the wind gauge: a gust pushes you. Shelter behind rocks or jump with the wind',hGap:'Jumps against the wind are shorter — double jump, or wait for the calm',
 hBolt:'Lightning rods draw strikes: cross when the ring fades',hGunner:'Thunder Gunners must reload after every shot — close in then',hRaider:'Wind Raiders dash through you — block or jump, strike while they skid',
 hRaft:'Strike the winch: raise the sail when the wind blows east, furl it when the wind turns',hMirror:'Strike a mirror to turn it — lead the lantern beam to the storm seal',hCaptain:'Jump or dash past his charge — he is stunned when he hits the wall',
 s2n:'Storm Captain',s1:'The lighthouse burns again! No ship will break on these rocks tonight.',s2:'You… have only angered the storm. The Storm Crown is already awake…',
 s3:'The beam cuts through the clouds — and far out at sea the outline of another island appears.',s4:'Raise the sails! Next stop — Stage 7!'},
az:{levelWord:'Səviyyə',title:'Səviyyə 6 · Fırtına Adası',blurb:'Fırtınanın qəlbində tərk edilmiş mayak — qırıq körpülər, batmış gəmilər və Fırtına Kapitanı',
 beach:'Fırtına Sahili',bridges:'Qırıq Körpülər',wreck:'Gəmi Qəbiristanlığı',cliffs:'Mayak Qayaları',summit:'Tərk Edilmiş Mayak',
 objBeach:'Fırtınalı sahili keç — külək əsəndə qayaların arxasında gizlən',objAmbush:'Pusqu! Talançıları məğlub et · dalğa {n}/2',objBridges:'Qırıq körpüləri keç — ildırım dirəklərindən qoru',
 objChase:'Körpü çökür — QAÇ!',objGrotto:'Gizli qaçaqmalçı mağarası — lift səni yuxarı qaldırır',objWreck:'Yelkənli sala min',objRaft:'Çarxı vur: külək şərqə əsəndə yelkəni qaldır, dönəndə yığ',
 objDeck:'Batmış gəmini qoru · dalğa {n}/2',objBarrels:'Üzən çəlləklərin üstündən qayalara keç',objCliffs:'Mayakın həyətinə qalx',objMirrors:'Güzgüləri çevir: fənərin şüasını fırtına möhürünə yönəlt',
 objGate:'Qapı açıldı — mayaka!',objCrew:'Fırtına dəstəsini məğlub et · dalğa {n}/2',objCaptain:'Fırtına Kapitanını məğlub et',objMech:'Mayakın çarxını vur · {n}/3',
 ambush:'PUSQU!',wave:'DALĞA {n}',cleared:'Yol açıqdır!',chase:'KÖRPÜ ÇÖKÜR — QAÇ!',grotto:'Sirr: qaçaqmalçı mağarası',raftDone:'Sal batmış gəmiyə çatdı — indi ip xətti səni daşıyacaq',
 sailUp:'Yelkən qaldırıldı',sailDown:'Yelkən yığıldı',sealOn:'Şüa fırtına möhürünə dəydi — qapı açılır!',captain:'FIRTINA KAPİTANI',capIntro:'Fırtına Kapitanı enir!',fury:'Kapitan fırtınanı çağırır!',
 capDown:'Fırtına Kapitanı yıxıldı!',relit:'MAYAK YENİDƏN YANIR',victory:'QƏLƏBƏ!',tap:'Davam etmək üçün toxun',skip:'KEÇ ▶▶',dodge:'YAYINDI',reload:'DOLDURUR',
 windWarn:'KÜLƏK',windGust:'KÜLƏK!',calm:'SAKİT',shelter:'SIĞINACAQ',
 hWind:'Bayraqlara və külək göstəricisinə bax: külək səni itələyir. Qayaların arxasında gizlən və ya küləklə birgə tullan',hGap:'Küləyə qarşı tullanış qısalır — ikiqat tullan və ya sakitliyi gözlə',
 hBolt:'İldırım dirəkləri ildırımı çəkir: halqa sönəndə keç',hGunner:'Göy Gurultusu Atıcıları hər atəşdən sonra doldurmalıdır — o zaman yaxınlaş',hRaider:'Külək Basqınçıları içindən keçib vurur — blok et və ya tullan, sürüşəndə vur',
 hRaft:'Çarxı vur: külək şərqə əsəndə yelkəni qaldır, külək dönəndə yığ',hMirror:'Güzgünü çevirmək üçün vur — fənərin şüasını fırtına möhürünə çatdır',hCaptain:'Onun hücumundan tullan və ya yayın — divara çırpılanda gicəllənir',
 s2n:'Fırtına Kapitanı',s1:'Mayak yenidən yanır! Bu gecə heç bir gəmi bu qayalarda parçalanmayacaq.',s2:'Sən… yalnız fırtınanı qəzəbləndirdin. Fırtına Tacı artıq oyanıb…',
 s3:'Şüa buludları yarır — və uzaqda, dənizin ortasında başqa bir adanın silueti görünür.',s4:'Yelkənləri qaldırın! Növbəti dayanacaq — 7-ci mərhələ!'},
tr:{levelWord:'Bölüm',title:'Bölüm 6 · Fırtınakıran Adası',blurb:'Fırtınanın kalbinde terk edilmiş bir deniz feneri — kırık köprüler, enkazlar ve Fırtına Kaptanı',
 beach:'Fırtına Sahili',bridges:'Kırık Köprüler',wreck:'Gemi Mezarlığı',cliffs:'Fener Kayalıkları',summit:'Terk Edilmiş Fener',
 objBeach:'Fırtınalı sahili geç — rüzgâr gelince kayaların ardına sığın',objAmbush:'Pusu! Yağmacıları yen · dalga {n}/2',objBridges:'Kırık köprüleri geç — paratonerlere dikkat',
 objChase:'Köprü çöküyor — KOŞ!',objGrotto:'Gizli kaçakçı mağarası — asansör seni yukarı çıkarır',objWreck:'Yelkenli sala bin',objRaft:'Çarka vur: rüzgâr doğuya eserken yelkeni aç, dönünce topla',
 objDeck:'Enkazı savun · dalga {n}/2',objBarrels:'Sürüklenen fıçılardan kayalıklara geç',objCliffs:'Fenerin avlusuna tırman',objMirrors:'Aynaları çevir: fener ışığını fırtına mührüne yönlendir',
 objGate:'Kapı açıldı — fenere!',objCrew:'Fırtına tayfasını yen · dalga {n}/2',objCaptain:'Fırtına Kaptanı’nı yen',objMech:'Fenerin çarkına vur · {n}/3',
 ambush:'PUSU!',wave:'DALGA {n}',cleared:'Yol açık!',chase:'KÖPRÜ ÇÖKÜYOR — KOŞ!',grotto:'Sır: kaçakçı mağarası',raftDone:'Sal enkaza ulaştı — artık halat hattı seni taşıyacak',
 sailUp:'Yelken açıldı',sailDown:'Yelken toplandı',sealOn:'Işık fırtına mührüne çarptı — kapı açılıyor!',captain:'FIRTINA KAPTANI',capIntro:'Fırtına Kaptanı iniyor!',fury:'Kaptan fırtınayı çağırıyor!',
 capDown:'Fırtına Kaptanı düştü!',relit:'FENER YENİDEN YANIYOR',victory:'ZAFER!',tap:'Devam için dokun',skip:'GEÇ ▶▶',dodge:'KAÇTI',reload:'DOLDURUYOR',
 windWarn:'RÜZGÂR',windGust:'RÜZGÂR!',calm:'SAKİN',shelter:'KORUNAKLI',
 hWind:'Bayraklara ve rüzgâr göstergesine bak: rüzgâr seni iter. Kayaların ardına sığın ya da rüzgârla birlikte zıpla',hGap:'Rüzgâra karşı zıplayış kısalır — çift zıpla ya da sakinliği bekle',
 hBolt:'Paratonerler yıldırımı çeker: halka sönünce geç',hGunner:'Gök Gürültüsü Nişancıları her atıştan sonra doldurmalı — o an yaklaş',hRaider:'Rüzgâr Akıncıları içinden atılır — blokla ya da zıpla, kayarken vur',
 hRaft:'Çarka vur: rüzgâr doğuya eserken yelkeni aç, rüzgâr dönünce topla',hMirror:'Aynayı çevirmek için vur — fener ışığını fırtına mührüne ulaştır',hCaptain:'Hücumundan zıpla ya da atıl — duvara çarpınca sersemler',
 s2n:'Fırtına Kaptanı',s1:'Fener yeniden yanıyor! Bu gece hiçbir gemi bu kayalarda parçalanmayacak.',s2:'Sen… yalnızca fırtınayı öfkelendirdin. Fırtına Tacı çoktan uyandı…',
 s3:'Işık bulutları yarıyor — ve uzakta, denizin ortasında başka bir adanın silueti beliriyor.',s4:'Yelkenleri açın! Sıradaki durak — 7. bölüm!'},
ru:{levelWord:'Уровень',title:'Уровень 6 · Остров Штормолом',blurb:'Заброшенный маяк в сердце шторма — сломанные мосты, обломки кораблей и Капитан Бури',
 beach:'Штормовой пляж',bridges:'Сломанные мосты',wreck:'Кладбище кораблей',cliffs:'Утёсы маяка',summit:'Заброшенный маяк',
 objBeach:'Пересеките штормовой пляж — при порыве прячьтесь за скалами',objAmbush:'Засада! Победите мародёров · волна {n}/2',objBridges:'Пройдите сломанные мосты — берегитесь громоотводов',
 objChase:'Мост рушится — БЕГИТЕ!',objGrotto:'Тайный грот контрабандистов — лифт поднимет вас наверх',objWreck:'Поднимитесь на парусный плот',objRaft:'Бейте по лебёдке: поднимайте парус при восточном ветре, сворачивайте, когда ветер сменится',
 objDeck:'Удержите обломки корабля · волна {n}/2',objBarrels:'Перепрыгните по плавучим бочкам к утёсам',objCliffs:'Поднимитесь во двор маяка',objMirrors:'Поверните зеркала: направьте луч фонаря на штормовую печать',
 objGate:'Ворота открыты — к маяку!',objCrew:'Победите штормовую команду · волна {n}/2',objCaptain:'Победите Капитана Бури',objMech:'Ударьте по лебёдке маяка · {n}/3',
 ambush:'ЗАСАДА!',wave:'ВОЛНА {n}',cleared:'Путь свободен!',chase:'МОСТ РУШИТСЯ — БЕГИТЕ!',grotto:'Тайник: грот контрабандистов',raftDone:'Плот достиг корабля — теперь канат будет переправлять вас',
 sailUp:'Парус поднят',sailDown:'Парус свёрнут',sealOn:'Луч попал в штормовую печать — ворота открываются!',captain:'КАПИТАН БУРИ',capIntro:'Капитан Бури спускается!',fury:'Капитан призывает бурю!',
 capDown:'Капитан Бури повержен!',relit:'МАЯК СНОВА ГОРИТ',victory:'ПОБЕДА!',tap:'Коснитесь, чтобы продолжить',skip:'ПРОПУСТИТЬ ▶▶',dodge:'УКЛОН',reload:'ПЕРЕЗАРЯДКА',
 windWarn:'ПОРЫВ',windGust:'ВЕТЕР!',calm:'ШТИЛЬ',shelter:'УКРЫТИЕ',
 hWind:'Следите за флагами и указателем ветра: порыв толкает вас. Прячьтесь за скалами или прыгайте по ветру',hGap:'Прыжки против ветра короче — прыгайте дважды или ждите затишья',
 hBolt:'Громоотводы притягивают молнии: проходите, когда кольцо гаснет',hGunner:'Громовым стрелкам нужно перезаряжаться после выстрела — тогда и сближайтесь',hRaider:'Ветряные налётчики делают рывок сквозь вас — блокируйте или прыгайте, бейте, пока они скользят',
 hRaft:'Бейте по лебёдке: поднимайте парус при восточном ветре, сворачивайте, когда он сменится',hMirror:'Ударьте зеркало, чтобы повернуть его — доведите луч фонаря до штормовой печати',hCaptain:'Перепрыгните или проскочите его рывок — ударившись о стену, он оглушён',
 s2n:'Капитан Бури',s1:'Маяк снова горит! Этой ночью ни один корабль не разобьётся об эти скалы.',s2:'Ты… лишь разозлил бурю. Корона Бурь уже пробудилась…',
 s3:'Луч прорезает тучи — и далеко в море проступают очертания другого острова.',s4:'Поднять паруса! Следующая остановка — этап 7!'},
pl:{levelWord:'Poziom',title:'Poziom 6 · Wyspa Łamacza Burz',blurb:'Opuszczona latarnia w sercu burzy — zerwane mosty, wraki i Kapitan Burzy',
 beach:'Burzowa plaża',bridges:'Zerwane mosty',wreck:'Cmentarzysko statków',cliffs:'Klify latarni',summit:'Opuszczona latarnia',
 objBeach:'Przejdź burzową plażę — w podmuchu chowaj się za skałami',objAmbush:'Zasadzka! Pokonaj łupieżców · fala {n}/2',objBridges:'Przejdź zerwane mosty — uważaj na piorunochrony',
 objChase:'Most się zawala — UCIEKAJ!',objGrotto:'Ukryta grota przemytników — winda zabierze cię na górę',objWreck:'Wejdź na tratwę z żaglem',objRaft:'Uderz w kabestan: podnieś żagiel przy wietrze ze wschodu, zwiń, gdy wiatr się zmieni',
 objDeck:'Utrzymaj wrak · fala {n}/2',objBarrels:'Przeskocz po dryfujących beczkach na klify',objCliffs:'Wespnij się na dziedziniec latarni',objMirrors:'Obróć lustra: skieruj promień latarni na pieczęć burzy',
 objGate:'Brama otwarta — do latarni!',objCrew:'Pokonaj burzową załogę · fala {n}/2',objCaptain:'Pokonaj Kapitana Burzy',objMech:'Uderz w kabestan latarni · {n}/3',
 ambush:'ZASADZKA!',wave:'FALA {n}',cleared:'Droga wolna!',chase:'MOST SIĘ ZAWALA — UCIEKAJ!',grotto:'Sekret: grota przemytników',raftDone:'Tratwa dotarła do wraku — teraz lina będzie cię przewozić',
 sailUp:'Żagiel podniesiony',sailDown:'Żagiel zwinięty',sealOn:'Promień trafia w pieczęć burzy — brama się otwiera!',captain:'KAPITAN BURZY',capIntro:'Kapitan Burzy schodzi!',fury:'Kapitan wzywa burzę!',
 capDown:'Kapitan Burzy pokonany!',relit:'LATARNIA ZNÓW PŁONIE',victory:'ZWYCIĘSTWO!',tap:'Dotknij, aby kontynuować',skip:'POMIŃ ▶▶',dodge:'UNIK',reload:'ŁADUJE',
 windWarn:'PODMUCH',windGust:'WIATR!',calm:'CISZA',shelter:'OSŁONA',
 hWind:'Patrz na flagi i wskaźnik wiatru: podmuch cię spycha. Chowaj się za skałami lub skacz z wiatrem',hGap:'Skoki pod wiatr są krótsze — skocz podwójnie albo poczekaj na ciszę',
 hBolt:'Piorunochrony przyciągają pioruny: przechodź, gdy pierścień zgaśnie',hGunner:'Gromowi strzelcy muszą przeładować po każdym strzale — wtedy podejdź',hRaider:'Wietrzni rabusie przelatują przez ciebie — blokuj lub skacz, bij, gdy się ślizgają',
 hRaft:'Uderz w kabestan: podnieś żagiel przy wietrze ze wschodu, zwiń, gdy wiatr się zmieni',hMirror:'Uderz lustro, aby je obrócić — doprowadź promień latarni do pieczęci burzy',hCaptain:'Przeskocz lub przemknij obok jego szarży — po uderzeniu w ścianę jest ogłuszony',
 s2n:'Kapitan Burzy',s1:'Latarnia znów płonie! Tej nocy żaden statek nie rozbije się o te skały.',s2:'Ty… tylko rozgniewałeś burzę. Korona Burz już się przebudziła…',
 s3:'Promień przecina chmury — a daleko na morzu pojawia się zarys kolejnej wyspy.',s4:'Podnieść żagle! Następny przystanek — etap 7!'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k];

/* deterministic pseudo-random (storm and boss choices are reproducible in tests) */
function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}

/* ------------------------------------------------------------------ storm pirates (engine enemy kit) */
Object.assign(E.ENEMY,{
 storm:{hp:78,w:40,h:96,speed:54,chase:112,sight:340,gold:4,flesh:true,name:{en:'Storm Pirate',az:'Fırtına Piratı',tr:'Fırtına Korsanı',ru:'Штормовой пират',pl:'Burzowy pirat'}},
 thunder:{hp:58,w:40,h:96,speed:46,chase:0,sight:640,gold:5,flesh:true,name:{en:'Thunder Gunner',az:'Göy Gurultusu Atıcısı',tr:'Gök Gürültüsü Nişancısı',ru:'Громовой стрелок',pl:'Gromowy strzelec'}},
 raider:{hp:52,w:38,h:92,speed:72,chase:150,sight:400,gold:4,flesh:true,name:{en:'Wind Raider',az:'Külək Basqınçısı',tr:'Rüzgâr Akıncısı',ru:'Ветряной налётчик',pl:'Wietrzny rabuś'}}});
const P=E.Enemy.prototype;
const lohi=e=>[e.range[0]-e.w/2,e.range[1]-e.w/2];
if(!P.__smugglers&&!P.__rise){P.__rise=true;   // drop-in spawn for encounter waves (shared with Levels 4/5 when loaded)
 const bu=P.update,bd=P.damage;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return bu.call(this,dt)};
 P.damage=function(a,d,k){if(this.dead||this.spawnT>0)return'none';return bd.call(this,a,d,k)}}
if(!P.__storm){P.__storm=true;
 const bd=P.damage;
 P.damage=function(amount,dir,kind){
  const run=this.run;
  // Wind Raider: hops back from the first frontal blow, then cannot dodge again for a while
  if(this.type==='raider'&&!this.dead&&!(this.spawnT>0)&&(this.evadeCool||0)<=0&&this.state==='idle'&&(kind==='melee'||kind==='throw')){
   const front=(dir<0&&this.dir>0)||(dir>0&&this.dir<0);if(front){this.evadeCool=3.4;this.state='hop';this.timer=.36;this.hopV=dir*380;run.fx.text(text(run.lang,'dodge'),this.cx,this.y-8,'#bdf3ff');run.audio.at('raiderDash',this.cx,{vol:.6,rate:1.2});return'none'}}
  const st=this.state,r=bd.call(this,amount,dir,kind);
  if(r==='hit'&&!this.dead&&this.type==='thunder'&&(st==='aim'||st==='bashWind')){this.state='recover';this.timer=.45;this.aim=null}
  if(r==='hit'&&!this.dead&&this.type==='raider'&&st==='crouch'){this.state='recover';this.timer=.4}
  return r};
 P.storm=function(dt,dx,dy,near){
  const run=this.run,p=run.p,[lo,hi]=lohi(this);
  switch(this.state){
   case'windup':this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='slash';this.timer=.26;this.hitDone=false;run.audio.at('swingEnemy',this.cx,{rate:this.combo?1.15:.95})}return;
   case'slash':{this.setAnim('slash');this.timer-=dt;this.x=clamp(this.x+this.dir*(this.combo?150:90)*dt,lo,hi);
    if(!this.hitDone&&this.timer<.18){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-66,y:this.y+8,w:66,h:this.h-10};if(overlap(box,p))run.hurtPlayer(this.combo?14:16,this.dir,this,this.combo?260:190)}
    if(this.timer<=0){if(!this.combo&&Math.abs(dx)<120&&Math.abs(dy)<60&&!p.dead){this.combo=1;this.state='windup';this.timer=.24;this.face(p)}else{this.state='recover';this.timer=.62}}return}
   case'recover':this.setAnim('tired');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5;this.combo=0}return}
  if(near&&this.alert){this.face(p);if(Math.abs(dx)<74&&Math.abs(dy)<60&&this.cool<=0){this.state='windup';this.timer=.5;this.combo=0;this.face(p);return}this.walkTo(p.x+p.w/2-Math.sign(dx)*52,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
 P.thunder=function(dt,dx,dy,near){
  const run=this.run,p=run.p;
  switch(this.state){
   case'aim':{this.setAnim('aim');this.timer-=dt;this.face(p);if(this.timer>.32)this.aim={x:p.x+p.w/2+p.vx*.12,y:p.y+p.h*.45};else this.locked=true;
    if(this.timer<=0){run.def.musket(run,this,18);this.state='kick';this.timer=.24;this.locked=false}return}
   case'kick':this.setAnim('kick');this.timer-=dt;if(this.timer<=0){this.state='reload';this.timer=1.6;this.aim=null;run.audio.at('reload',this.cx,{vol:.8})}return;
   case'reload':this.setAnim('reload');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.7}return;
   case'bashWind':this.setAnim('windup');this.timer-=dt;if(this.timer<=0){this.state='bash';this.timer=.2;this.hitDone=false;run.audio.at('bash',this.cx)}return;
   case'bash':{this.setAnim('strike');this.timer-=dt;if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-58,y:this.y+10,w:58,h:this.h-14};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(12,this.dir,this,280)}}if(this.timer<=0){this.state='recover';this.timer=.55}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.6}return}
  this.setAnim('idle');
  if(near&&this.alert){this.face(p);
   if(Math.abs(dx)<84&&Math.abs(dy)<60&&this.cool<=0){this.state='bashWind';this.timer=.45;return}
   if(Math.abs(dx)<170&&Math.abs(dy)<70)this.walkTo(this.cx-Math.sign(dx)*70,this.def.speed,dt);
   this.face(p);
   if(this.cool<=0&&Math.abs(dx)>=96&&Math.abs(dx)<620){this.state='aim';this.timer=1.0;this.locked=false;this.aim={x:p.x+p.w/2,y:p.y+p.h*.45};run.audio.at('cock',this.cx,{vol:.8})}}
  else this.patrol(dt)};
 P.raider=function(dt,dx,dy,near){
  const run=this.run,p=run.p,[lo,hi]=lohi(this);this.evadeCool=Math.max(0,(this.evadeCool||0)-dt);
  switch(this.state){
   case'crouch':this.setAnim('crouch');this.timer-=dt;if(this.timer<=0){this.state='dash';this.timer=.32;this.hitDone=false;run.audio.at('raiderDash',this.cx,{vol:.9})}return;
   case'dash':{this.setAnim('dash');this.timer-=dt;const nx=clamp(this.x+this.dir*640*dt,lo,hi),blocked=nx===this.x;this.x=nx;
    if(!this.hitDone&&overlap({x:this.x-6,y:this.y+12,w:this.w+12,h:this.h-16},p)){this.hitDone=true;run.hurtPlayer(14,this.dir,this,240)}
    if(this.timer<=0||blocked){this.state='skid';this.timer=.72}return}
   case'skid':this.setAnim('skid');this.timer-=dt;this.x=clamp(this.x+this.dir*120*this.timer*dt*2,lo,hi);if(this.timer<=0){this.state='idle';this.cool=1.1}return;
   case'hop':this.setAnim('hop');this.timer-=dt;this.x=clamp(this.x+this.hopV*dt,lo,hi);if(this.timer<=0){this.state='idle';this.cool=Math.min(this.cool,.35)}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.6}return}
  if(near&&this.alert){this.face(p);
   if(this.cool<=0&&Math.abs(dx)>70&&Math.abs(dx)<270&&Math.abs(dy)<60){this.state='crouch';this.timer=.45;this.face(p);run.audio.at('swingEnemy',this.cx,{vol:.5,rate:1.6});return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*170,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
}

/* ------------------------------------------------------------------ painted art helpers */
function recolor(img,{cloth,tint,dark=1}){
 const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);
 const d=x.getImageData(0,0,c.width,c.height),a=d.data,[cr,cg,cb]=cloth,[tr,tg,tb,tk]=tint||[0,0,0,0];
 for(let i=0;i<a.length;i+=4){if(!a[i+3])continue;let r=a[i],g=a[i+1],b=a[i+2];
  if(r>90&&g<r*.5&&b<r*.55){const l=(r*.5+g*.3+b*.2)/150;r=cr*l;g=cg*l;b=cb*l}
  if(tk){r=r*(1-tk)+tr*tk;g=g*(1-tk)+tg*tk;b=b*(1-tk)+tb*tk}
  a[i]=Math.min(255,r*dark);a[i+1]=Math.min(255,g*dark);a[i+2]=Math.min(255,b*dark)}
 x.putImageData(d,0,0);return c}
function whiteOf(img){const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);return c}
// storm crews: the owner's painted pirates re-dyed (storm-blue, thunder-amber, wind-teal), scaled to the existing cast
const LOOKS={
 storm:{src:'pirate-sword.png',hand:[222,186],h:150,cloth:[46,96,150],tint:[20,30,50,.1],weapon:'cutlass'},
 thunder:{src:'pirate-gun.png',hand:[250,136],h:146,cloth:[214,166,52],tint:[30,32,44,.12],weapon:'musket'},
 raider:{src:'pirate-sword.png',hand:[222,186],h:138,cloth:[70,190,200],tint:[18,40,52,.16],dark:.94,weapon:'daggers'}};
function cutlass(c,len,charged){const g=c.createLinearGradient(0,-4,0,4);g.addColorStop(0,'#f4f8ff');g.addColorStop(.5,'#b9c6d6');g.addColorStop(1,'#5d6a7c');c.fillStyle=g;c.beginPath();c.moveTo(4,-3);c.quadraticCurveTo(len*.6,-6,len,-14);c.quadraticCurveTo(len*.55,4,4,4);c.closePath();c.fill();c.strokeStyle='#1e2430';c.lineWidth=1.2;c.stroke();
 c.strokeStyle=charged?'rgba(140,220,255,.9)':'rgba(120,190,255,.45)';c.lineWidth=1.4;c.beginPath();c.moveTo(8,-2);c.quadraticCurveTo(len*.6,-5,len-4,-12);c.stroke();c.fillStyle='#d9a536';c.fillRect(-4,-6,8,12);c.fillStyle='#4a2c16';c.fillRect(-14,-3,11,6)}
function musket(c){c.fillStyle='#4a2c16';c.beginPath();c.moveTo(-26,-3);c.lineTo(10,-4);c.lineTo(12,3);c.lineTo(-10,4);c.lineTo(-30,12);c.lineTo(-36,8);c.closePath();c.fill();
 c.fillStyle='#7d838e';c.fillRect(6,-7,58,5);c.fillStyle='#3a3e46';c.fillRect(62,-8,5,7);c.fillStyle='#d9a536';c.fillRect(-2,-8,8,4);c.fillRect(30,-8,3,6);c.strokeStyle='#2a2a30';c.lineWidth=1.5;c.beginPath();c.moveTo(0,4);c.quadraticCurveTo(4,10,-2,12);c.stroke()}
function dagger(c,len){c.fillStyle='#e8f2fa';c.beginPath();c.moveTo(4,-2);c.lineTo(len,0);c.lineTo(4,3);c.closePath();c.fill();c.strokeStyle='#5a6a7c';c.lineWidth=1;c.stroke();c.fillStyle='#3a8a9a';c.fillRect(-2,-5,5,10);c.fillStyle='#2a1a10';c.fillRect(-11,-2,9,5)}
function scarf(run,c,x,y,dir,len,t){const w=windNow(run);const flow=-dir*(.4+Math.abs(w)*.6)*(w*dir<0?1:.6);c.save();c.strokeStyle='#3ac8d0';c.lineCap='round';c.lineWidth=7;c.beginPath();c.moveTo(x,y);
 for(let k=1;k<=6;k++){const q=k/6;c.lineTo(x+(flow<0?-1:1)*Math.abs(flow)*len*q*1.4-dir*len*q*.3,y+Math.sin(t*14+k)*4*q+q*10)}c.stroke();c.lineWidth=3;c.strokeStyle='#9af4f4';c.stroke();c.restore()}
/* painted cut-out storm crews (tools/enemy_cast.py → assets/enemies/level06, posed by enemy-rig.js) */
const RIG={
 storm:{cast:'level06',char:'storm',grip:.15,windArm:-2.6,swingArm:1.4,fam:{slash:'swing'},extraFlash:e=>e.run.skyFlash>0?e.run.skyFlash*.45:0,stars:e=>e.state==='recover'},
 thunder:{cast:'level06',char:'thunder',weapon:'gun',twoHand:true,fam:{aim:'aim',kick:'fire',reload:'reload',bashWind:'wind',bash:'thrust'},windArm:-1.6,extraFlash:e=>e.run.skyFlash>0?e.run.skyFlash*.45:0},
 raider:{cast:'level06',char:'raider',grip:-.6,fam:{crouch:'crouchWind',dash:'dash',skid:'skidding',hop:'hop'},extraFlash:e=>e.run.skyFlash>0?e.run.skyFlash*.45:0,stars:e=>e.state==='skid'}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — painted fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig;if(!R||!run.rigCast||!Rig)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;const st=e.state,t=run.time;
 c.save();c.globalAlpha=alpha*(e.spawnT>0?clamp(1-e.spawnT*1.5,0,1):1);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 if(!e.dead){
  if(st==='windup'||st==='bashWind')run.fx.glow(c,e.cx+e.dir*26,e.floor-90,52+(e.combo?10:0),'rgba(255,80,50,',.45);
  if(st==='crouch'){const k=1-e.timer/.45;c.strokeStyle='rgba(160,240,255,'+(.25+.5*k)+')';c.lineWidth=3;c.setLineDash([14,8]);c.beginPath();c.moveTo(e.cx,e.floor-30);c.lineTo(e.cx+e.dir*170,e.floor-30);c.stroke();c.setLineDash([]);run.fx.glow(c,e.cx,e.floor-50,40+20*k,'rgba(120,230,255,',.4)}
  if(st==='dash'){c.globalAlpha=.45;c.strokeStyle='#cdf6ff';c.lineWidth=3;for(let i=0;i<4;i++){c.beginPath();c.moveTo(e.cx-e.dir*(30+i*20),e.floor-90+i*18);c.lineTo(e.cx-e.dir*(100+i*24),e.floor-90+i*18);c.stroke()}c.globalAlpha=alpha}}
 const o=Rig.draw(run,c,e,R);
 if(o&&!e.dead){
  if(st==='aim'&&e.aim){const k=1-e.timer/1.0,lk=e.locked;c.strokeStyle=lk?'rgba(255,60,40,'+(.55+.4*Math.sin(t*40))+')':'rgba(255,170,70,'+(.18+.4*k)+')';c.setLineDash(lk?[]:[8,8]);c.lineWidth=lk?2.5:2;
   c.beginPath();c.moveTo(o.muzzle[0],o.muzzle[1]);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.setLineDash([]);c.beginPath();c.arc(e.aim.x,e.aim.y,lk?10:14-6*k,0,TAU);c.stroke();run.fx.glow(c,o.muzzle[0],o.muzzle[1],18+12*k,'rgba(255,200,90,',.5+.3*k)}
  if(st==='kick')run.fx.glow(c,o.muzzle[0],o.muzzle[1],40,'rgba(255,200,120,',.6);
  if(st==='slash'||st==='bash'){const k=1-e.timer/(st==='slash'?.26:.2);c.globalAlpha=alpha*(1-k)*.85;c.strokeStyle=e.combo?'rgba(170,230,255,.95)':'rgba(240,248,255,.9)';c.lineWidth=10;c.lineCap='round';c.beginPath();const ax=e.cx+e.dir*10,ay=e.floor-90;
   if(e.dir>0)c.arc(ax,ay,70,-1.9,-1.9+2.5*Math.min(1,k*2));else c.arc(ax,ay,70,Math.PI+1.9-2.5*Math.min(1,k*2),Math.PI+1.9);c.stroke();c.globalAlpha=alpha}
  Rig.hud(c,run,e,o,{bar:62,barCol:e.type==='raider'?'#5fe0f0':e.type==='thunder'?'#ffbf3a':'#e8484f',stars:R.stars});
  if(st==='reload'){const k=1-e.timer/1.6,by=o.top-34;c.strokeStyle='#0b0f18cc';c.lineWidth=6;c.beginPath();c.arc(e.cx,by,11,0,TAU);c.stroke();c.strokeStyle='#ffd36b';c.lineWidth=4;c.beginPath();c.arc(e.cx,by,11,-Math.PI/2,-Math.PI/2+TAU*k);c.stroke();
   c.font='800 12px Arial';c.textAlign='center';c.fillStyle='#ffe9a8';c.strokeStyle='#0a0f18';c.lineWidth=3;c.strokeText(text(run.lang,'reload'),e.cx,by-18);c.fillText(text(run.lang,'reload'),e.cx,by-18)}}
 c.restore();c.imageSmoothingEnabled=false;return true}

function drawStormFoe(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const sk=run.looks?.[e.type];if(!sk)return false;
 const t=run.time,s=sk.h/sk.img.height,iw=sk.img.width*s,ih=sk.img.height*s;
 const alpha=e.dead?clamp(1-(e.deadT-.55)/.7,0,1):1;if(alpha<=0)return true;
 let rot=0,dx=0,dy=0,sx=1,sy=1,wa=-.9,wb=.6,flash=e.flash>0?.85:0;const st=e.state;
 if(e.spawnT>0){dy=-e.spawnT*420;rot=-.1}
 else if(e.dead){rot=-Math.min(1.35,e.deadT*3.2);dy=-Math.sin(-rot)*iw*.42;dx=-8}
 else if(e.hurtT>0){rot=-.18;dx=-7;wa=-.3}
 else if(st==='windup'||st==='bashWind'){const k=1-e.timer/(st==='windup'?(e.combo?.24:.5):.45);rot=-.1*k;dx=-6*k;wa=-2.3*k-.9*(1-k)}
 else if(st==='slash'||st==='bash'){const k=1-e.timer/(st==='slash'?.26:.2);rot=.15;dx=10+8*k;wa=-2.2+2.9*Math.min(1,k*2.2)}
 else if(st==='aim'){rot=-.03;dx=-3}
 else if(st==='kick'){rot=-.12;dx=-10}
 else if(st==='reload'){const k=Math.sin((1.6-e.timer)*9);dy=Math.abs(k)*2;rot=.05}
 else if(st==='crouch'){const k=1-e.timer/.45;sy=1-.12*k;sx=1+.06*k;rot=.12*k;dx=-8*k}
 else if(st==='dash'){rot=.3;dx=14;sx=1.08}
 else if(st==='skid'||st==='tired'||st==='recover'){rot=-.06;dy=3;sy=.97;wa=.4}
 else if(st==='hop'){const k=1-e.timer/.36;dy=-Math.sin(k*Math.PI)*46;rot=-.25}
 else if(e.anim==='walk'){const b=Math.abs(Math.sin(t*9+e.home));dy=-b*4;rot=Math.sin(t*9+e.home)*.045;sy=1+(1-b)*.03}
 else sy=1+Math.sin(t*2.4+e.home)*.015;
 c.save();c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(e.cx,e.floor+1,sk.h*.22*(st==='hop'?.7:1),7,0,0,TAU);c.fill();c.restore();
 // telegraphs: red wind-up glow, a locked musket line, the raider's dash streak
 if(!e.dead&&(st==='windup'||st==='bashWind'))run.fx.glow(c,e.cx+e.dir*26,e.floor-ih*.55,52+(e.combo?10:0),'rgba(255,80,50,',.45);
 if(!e.dead&&st==='aim'&&e.aim){const k=1-e.timer/1.0,lk=e.locked;c.save();c.strokeStyle=lk?'rgba(255,60,40,'+(.55+.4*Math.sin(t*40))+')':'rgba(255,170,70,'+(.18+.4*k)+')';c.setLineDash(lk?[]:[8,8]);c.lineWidth=lk?2.5:2;
  c.beginPath();c.moveTo(e.cx+e.dir*58,e.y+e.h*.42);c.lineTo(e.aim.x,e.aim.y);c.stroke();c.setLineDash([]);c.beginPath();c.arc(e.aim.x,e.aim.y,lk?10:14-6*k,0,TAU);c.stroke();c.restore();
  run.fx.glow(c,e.cx+e.dir*66,e.y+e.h*.4,18+12*k,'rgba(255,200,90,',.5+.3*k)}
 if(!e.dead&&st==='crouch'){const k=1-e.timer/.45;c.save();c.strokeStyle='rgba(160,240,255,'+(.25+.5*k)+')';c.lineWidth=3;c.setLineDash([14,8]);c.beginPath();c.moveTo(e.cx,e.floor-30);c.lineTo(e.cx+e.dir*170,e.floor-30);c.stroke();c.restore();run.fx.glow(c,e.cx,e.floor-50,40+20*k,'rgba(120,230,255,',.45)}
 if(!e.dead&&st==='dash'){c.save();c.globalAlpha=.45;c.strokeStyle='#cdf6ff';c.lineWidth=3;for(let i=0;i<4;i++){c.beginPath();c.moveTo(e.cx-e.dir*(30+i*20),e.floor-90+i*18);c.lineTo(e.cx-e.dir*(100+i*24),e.floor-90+i*18);c.stroke()}c.restore()}
 const wind=windNow(run);
 c.save();c.translate(Math.round(e.cx+dx*e.dir),Math.round(e.floor+dy));if(e.dir<0)c.scale(-1,1);c.rotate(rot);c.scale(sx,sy);c.globalAlpha=alpha*(e.spawnT>0?clamp(1-e.spawnT*1.5,0,1):1);
 c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const ox=-iw*.5,oy=-ih;
 if(sk.weapon==='daggers'&&!e.dead)scarf(run,c,ox+iw*.46,oy+ih*.3,1,38,t+e.home);
 E.drawPaintedWalk(c,sk.img,ox,oy,iw,ih,e,t);
 if(flash){c.globalAlpha=alpha*flash;c.drawImage(sk.white,ox,oy,iw,ih);c.globalAlpha=alpha}
 // rain sheen and lightning rim on the wet coat
 if(run.skyFlash>0){c.globalAlpha=alpha*run.skyFlash*.5;c.drawImage(sk.white,ox,oy,iw,ih);c.globalAlpha=alpha}
 const hx=ox+sk.hand[0]*s,hy=oy+sk.hand[1]*s;
 c.save();c.translate(hx,hy);
 if(e.dead){c.translate(0,Math.min(60,e.deadT*120));c.rotate(e.deadT*4)}
 if(sk.weapon==='cutlass'){c.rotate(wa);cutlass(c,66,st==='windup')}
 else if(sk.weapon==='musket'){c.rotate(st==='aim'?Math.atan2((e.aim?.y??hy)-(e.y+e.h*.42),Math.abs((e.aim?.x??0)-e.cx)||1)*(1):st==='reload'?-1.35:st==='kick'?-.35:st==='bashWind'?-2.2:st==='bash'?.5:.32);musket(c);
  if(st==='reload'){const k=(1.6-e.timer)*6%2;c.strokeStyle='#cfd4dc';c.lineWidth=2;c.beginPath();c.moveTo(70-k*16,-12);c.lineTo(110-k*16,-12);c.stroke()}}
 else if(sk.weapon==='daggers'){c.rotate(st==='dash'?-.1:st==='crouch'?-.5:wa*.7);dagger(c,34);c.rotate(.9);dagger(c,30)}
 c.restore();
 if((st==='slash'||st==='bash')&&!e.dead){const k=1-e.timer/(st==='slash'?.26:.2);c.globalAlpha=alpha*(1-k)*.9;c.strokeStyle=e.combo?'rgba(170,230,255,.95)':'rgba(240,248,255,.9)';c.lineWidth=11;c.lineCap='round';c.beginPath();c.arc(hx-10,hy-6,74,-1.6,-1.6+2.4*Math.min(1,k*2));c.stroke()}
 c.restore();c.imageSmoothingEnabled=false;
 if(st==='kick'&&!e.dead)run.fx.glow(c,e.cx+e.dir*70,e.y+e.h*.4,40,'rgba(255,200,120,',.6);
 // health bar on top of the visible sprite (not its padding)
 if(!e.dead&&e.hp<e.max&&!(e.spawnT>0)){const bw=62,by=e.floor+dy-ih-14;c.fillStyle='#0b0f18cc';c.beginPath();c.roundRect(e.cx-bw/2-2,by-2,bw+4,10,5);c.fill();c.fillStyle=e.type==='raider'?'#5fe0f0':e.type==='thunder'?'#ffbf3a':'#e8484f';c.beginPath();c.roundRect(e.cx-bw/2,by,bw*e.hp/e.max,6,3);c.fill()}
 // reload clock over the gunner: the window to close in
 if(!e.dead&&st==='reload'){const k=1-e.timer/1.6,by=e.floor-ih-34;c.save();c.strokeStyle='#0b0f18cc';c.lineWidth=6;c.beginPath();c.arc(e.cx,by,11,0,TAU);c.stroke();c.strokeStyle='#ffd36b';c.lineWidth=4;c.beginPath();c.arc(e.cx,by,11,-Math.PI/2,-Math.PI/2+TAU*k);c.stroke();
  c.font='800 12px Arial';c.textAlign='center';c.fillStyle='#ffe9a8';c.strokeStyle='#0a0f18';c.lineWidth=3;c.strokeText(text(run.lang,'reload'),e.cx,by-18);c.fillText(text(run.lang,'reload'),e.cx,by-18);c.restore()}
 if(st==='skid'||st==='recover'&&e.type==='storm')for(let i=0;i<3;i++){const a=t*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,e.floor-ih-8+Math.sin(a)*4,5,5)}
 return true}

/* ------------------------------------------------------------------ wind */
const windNow=run=>{const w=run.wind;if(!w)return 0;return w.dir*w.k+(run.bossGust?run.bossGust.dir*run.bossGust.k:0)};
function zoneAt(run,x){return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones.at(-1)}
function sheltered(run,p){const cx=p.x+p.w/2,fy=p.y+p.h;if(p.platform&&p.platform.id==='raft')return true;for(const s of run.cfg.wind.shelters)if(cx>s.x&&cx<s.x+s.w&&fy>s.y0&&fy<=s.y1)return true;return false}
function updateWind(run,dt){
 const w=run.wind,cfg=run.cfg.wind,p=run.p,z=zoneAt(run,p.x+p.w/2).id,zc=cfg.zones[z];
 if(w.zone!==z){const first=w.zone===null;w.zone=z;w.idx=0;if(!first&&w.phase!=='gust'){w.phase='calm';w.t=Math.min(w.t,zc.calm*.6)}}
 const forced=run.chaseOn||run.cine||run.enc?.id||!zc.pattern.length;   // fights and the collapsing bridge are never fought in a gust
 if(forced){if(w.phase!=='calm'){w.phase='calm';w.t=zc.calm}}
 else{w.t-=dt;
  if(w.phase==='calm'&&w.t<=0){const [d]=zc.pattern[w.idx%zc.pattern.length];w.phase='warn';w.t=cfg.warn;w.next=d;run.audio.play('windWarn',{vol:.7});run.gusts=(run.gusts||0)+1}
  else if(w.phase==='warn'&&w.t<=0){const [d,len]=zc.pattern[w.idx%zc.pattern.length];w.phase='gust';w.t=len;w.dir=d;run.audio.play('gust',{vol:.9})}
  else if(w.phase==='gust'&&w.t<=0){w.phase='calm';w.t=zc.calm;w.idx++}}
 const target=w.phase==='gust'?1:0;w.k+=(target-w.k)*Math.min(1,dt*(target?4:2.4));if(w.k<.01&&!target)w.k=0;
 const g=run.bossGust;if(g){g.t-=dt;if(g.phase==='warn'&&g.t<=0){g.phase='gust';g.t=2.4;run.audio.play('gust',{vol:1})}else if(g.phase==='gust'&&g.t<=0){g.phase='end';g.t=.6}else if(g.phase==='end'&&g.t<=0)run.bossGust=null;
  if(run.bossGust)g.k+=((g.phase==='gust'?1:0)-g.k)*Math.min(1,dt*4)}
}

/* ------------------------------------------------------------------ terrain painters */
function pat(run,c,name){run.l6pat??=new Map();let m=run.l6pat.get(c);if(!m){m={};run.l6pat.set(c,m)}if(!m[name]){const im=run.images[name];m[name]=im?c.createPattern(im,'repeat'):'#30383e'}return m[name]}
function strip(run,c,img,x0,x1,y,tint){const im=run.images[img];if(!im)return;const tw=im.width;let x=x0;while(x<x1){const sx=((x%tw)+tw)%tw,seg=Math.min(x1-x,tw-sx);c.drawImage(im,sx,0,seg,im.height,x,y,seg,im.height);x+=seg}if(tint){c.fillStyle=tint;c.fillRect(x0,y,x1-x0,im.height)}}
const STYLE={sand:[A6+'sand-fill.webp',A6+'sand-cap.png','rgba(8,12,16,.75)'],rock:[A6+'rock-fill.webp',A6+'grass-cap.png','rgba(4,8,14,.8)'],cave:[A6+'rock-fill.webp',A6+'sand-cap.png','rgba(2,4,8,.85)'],stone:[A6+'stone-fill.webp',A6+'stone-cap.png','rgba(6,8,14,.72)'],tower:[A6+'stone-fill.webp',null,'rgba(6,8,14,.6)']};
function paintGround(run,c,s,L,R,T,B){
 const st=STYLE[s.style];if(!st)return false;const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();c.fillStyle=pat(run,c,st[0]);c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 const g=c.createLinearGradient(0,s.y+14,0,s.y+300);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,st[2]);c.fillStyle=g;c.fillRect(x0,s.y,x1-x0,bottom-s.y);
 if(s.style==='cave'){c.fillStyle='rgba(2,6,10,.45)';c.fillRect(x0,s.y,x1-x0,bottom-s.y)}
 if(s.style==='tower'){for(let y=s.y;y<bottom;y+=92){c.fillStyle='rgba(150,50,40,.45)';c.fillRect(x0,y,x1-x0,46)}}
 const rl=c.createLinearGradient(s.x,0,s.x+26,0);rl.addColorStop(0,'rgba(190,220,255,.2)');rl.addColorStop(1,'rgba(190,220,255,0)');c.fillStyle=rl;c.fillRect(s.x,s.y,26,Math.min(s.h,300));
 const rr=c.createLinearGradient(s.x+s.w-30,0,s.x+s.w,0);rr.addColorStop(0,'rgba(0,0,0,0)');rr.addColorStop(1,'rgba(0,0,0,.5)');c.fillStyle=rr;c.fillRect(s.x+s.w-30,s.y,30,Math.min(s.h,300));
 // wet streaks running down the faces
 if(s.style==='rock'||s.style==='stone'){c.fillStyle='rgba(170,200,230,.07)';for(let x=Math.ceil(x0/37)*37;x<x1;x+=37){const h=40+((x*13)%90);c.fillRect(x,s.y+20,2,h)}}
 c.restore();
 if(st[1])strip(run,c,st[1],Math.max(s.x,L-2),Math.min(s.x+s.w,R+2),s.y-3);
 return true}
function paintHull(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2),bottom=Math.min(s.y+s.h,B+40);if(x1<=x0)return true;
 c.save();c.beginPath();c.moveTo(s.x+30,s.y);c.lineTo(s.x+s.w-10,s.y);c.lineTo(s.x+s.w+20,s.y+40);c.lineTo(s.x+s.w,bottom);c.lineTo(s.x,bottom);c.lineTo(s.x-20,s.y+60);c.closePath();c.clip();
 c.fillStyle=pat(run,c,A4+'hull-side.webp');c.fillRect(x0-30,s.y,x1-x0+60,bottom-s.y);
 const g=c.createLinearGradient(0,s.y+30,0,s.y+220);g.addColorStop(0,'rgba(10,16,24,.15)');g.addColorStop(1,'rgba(4,8,14,.85)');c.fillStyle=g;c.fillRect(x0-30,s.y,x1-x0+60,bottom-s.y);
 for(let gx=Math.ceil((s.x+90)/220)*220;gx<s.x+s.w-60;gx+=220){if(gx<L-60||gx>R+60)continue;c.fillStyle='#0c0806';c.fillRect(gx-20,s.y+86,40,30);c.fillStyle='rgba(255,170,70,.35)';c.fillRect(gx-16,s.y+90,32,22);c.strokeStyle='#5a3a1c';c.lineWidth=3;c.strokeRect(gx-20,s.y+86,40,30)}
 c.fillStyle='rgba(0,0,0,.55)';c.beginPath();c.ellipse(s.x+s.w*.62,s.y+150,60,34,.3,0,TAU);c.fill();
 c.restore();
 strip(run,c,A4+'wood-deck.png',x0,x1,s.y,'rgba(10,20,30,.25)');c.fillStyle='#b8946a';c.fillRect(x0,s.y+60,x1-x0,3);
 return true}
function paintDock(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L-2),x1=Math.min(s.x+s.w,R+2);if(x1<=x0)return true;const post=pat(run,c,A4+'wood-post.png');
 for(let px=s.x+10;px<s.x+s.w-10;px+=80){c.save();c.fillStyle=post;c.translate(px,0);c.fillRect(0,s.y+30,26,600);c.restore()}
 strip(run,c,A4+'wood-deck.png',x0,x1,s.y,'rgba(10,20,30,.2)');c.fillStyle='rgba(0,0,0,.35)';c.fillRect(x0,s.y+44,x1-x0,8);return true}
function paintLedge(run,c,l){
 const look=l.look||'rock',x=l.x,y=l.y,w=l.w;
 if(look==='wood'){strip(run,c,A4+'wood-deck.png',x,x+w,y,'rgba(10,20,30,.2)');c.fillStyle='rgba(0,0,0,.3)';c.fillRect(x,y+44,w,5);return true}
 if(look==='crate'){for(let k=0;k<Math.ceil(w/56);k++)drawCrate(c,x+28+k*56,y+56);return true}
 const fill=look==='stone'?A6+'stone-fill.webp':A6+'rock-fill.webp',top=look==='stone'?A6+'stone-cap.png':A6+'grass-cap.png';
 c.save();c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(x+w/2,y+40,w/2,7,0,0,TAU);c.fill();c.beginPath();c.roundRect(x,y+2,w,32,[4,4,14,14]);c.clip();c.fillStyle=pat(run,c,fill);c.fillRect(x,y,w,36);
 const g=c.createLinearGradient(0,y+6,0,y+34);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(4,8,14,.6)');c.fillStyle=g;c.fillRect(x,y,w,36);c.restore();
 strip(run,c,top,x,x+w,y-3);return true}
function drawCrate(c,x,y){const s=56,X=x-28,Y=y-56;const g=c.createLinearGradient(X,Y,X,Y+s);g.addColorStop(0,'#9a6e40');g.addColorStop(1,'#56381c');c.fillStyle=g;c.fillRect(X,Y,s,s);
 c.strokeStyle='#2e1a0a';c.lineWidth=5;c.strokeRect(X+2.5,Y+2.5,s-5,s-5);c.lineWidth=4;c.beginPath();c.moveTo(X+5,Y+5);c.lineTo(X+s-5,Y+s-5);c.stroke();c.fillStyle='rgba(200,230,255,.18)';c.fillRect(X,Y,s,3);c.fillStyle='#8c94a2';for(const[a,b]of[[X+4,Y+4],[X+s-8,Y+4],[X+4,Y+s-8],[X+s-8,Y+s-8]])c.fillRect(a,b,4,4)}
function drawPlank(run,c,b){
 const shake=b.state==='shake'?(Math.random()-.5)*5:0,x=b.x+shake,y=b.y;
 c.save();c.translate(x,y);
 // rope rails (snapped where a plank is gone)
 c.strokeStyle='#8a6a3a';c.lineWidth=3;c.beginPath();c.moveTo(-4,-34);c.lineTo(b.w+4,-34);c.stroke();for(const px of[6,b.w-6]){c.beginPath();c.moveTo(px,-34);c.lineTo(px,4);c.stroke()}
 strip(run,c,A4+'wood-deck.png',0,b.w,0,b.state==='shake'?'rgba(255,90,40,.22)':'rgba(10,20,30,.2)');
 c.strokeStyle='#1a0e06';c.lineWidth=2;c.beginPath();c.moveTo(b.w*.3,2);c.lineTo(b.w*.42,14);c.lineTo(b.w*.35,22);c.moveTo(b.w*.7,0);c.lineTo(b.w*.62,12);c.stroke();c.restore();return true}
function drawMover(run,c,m){
 const x=m.x,y=m.y,w=m.w,t=run.time;
 if(m.look==='raft')return drawRaft(run,c,m);
 if(m.look==='barrels'){for(let i=0;i<2;i++){const bx=x+8+i*(w-16)/2;c.fillStyle='#5a3418';c.beginPath();c.ellipse(bx+20,y+26,20,24,0,0,TAU);c.fill();c.fillStyle='#8a8f96';c.fillRect(bx+2,y+12,36,4);c.fillRect(bx+2,y+36,36,4)}
  strip(run,c,A4+'wood-deck.png',x,x+w,y,'rgba(10,20,30,.25)');c.fillStyle='rgba(220,240,255,.4)';c.fillRect(x-8,run.cfg.sea+Math.sin(t*3+x)*2,w+16,3);return true}
 // cage lift on chains with a pulley above
 const top=Math.min(...m.range)-180;c.strokeStyle='#8c94a2';c.lineWidth=3;c.setLineDash([6,4]);for(const cx of[x+10,x+w-10]){c.beginPath();c.moveTo(cx,top);c.lineTo(cx,y);c.stroke()}c.setLineDash([]);
 c.fillStyle='#2b2f38';c.beginPath();c.arc(x+w/2,top,16,0,TAU);c.fill();c.strokeStyle='#c8a26a';c.lineWidth=3;c.stroke();
 strip(run,c,A4+'wood-deck.png',x,x+w,y,'rgba(10,20,30,.2)');c.fillStyle='rgba(0,0,0,.3)';c.fillRect(x,y+44,w,5);run.fx.glow(c,x+w/2,y+20,24,'rgba(255,200,120,',.25);return true}
function drawRaft(run,c,m){
 const x=m.x,y=m.y,w=m.w,t=run.time,s=run.state,r=run.cfg.raft,sail=run.sail,wd=windNow(run);
 for(let i=0;i<3;i++){const bx=x+10+i*(w-20)/2.6;c.fillStyle='#4a2c14';c.beginPath();c.ellipse(bx+20,y+28,20,22,0,0,TAU);c.fill();c.fillStyle='#7a8088';c.fillRect(bx+2,y+16,36,4);c.fillRect(bx+2,y+36,36,4)}
 strip(run,c,A4+'wood-deck.png',x,x+w,y,'rgba(10,20,30,.2)');
 const mx=x+r.boom;c.fillStyle='#3a220f';c.fillRect(mx-5,y-190,10,190);c.fillRect(mx-60,y-170,120,7);
 // sail: furled bundle or a full sail bellied by the wind
 if(sail>.05){const belly=(wd*30+Math.sin(t*3)*4)*sail,top=y-166,bot=y-40;c.save();const g=c.createLinearGradient(mx-58,0,mx+58,0);g.addColorStop(0,'#c8bca4');g.addColorStop(1,'#8c806c');c.fillStyle=g;c.globalAlpha=.95;
  c.beginPath();c.moveTo(mx-56,top);c.lineTo(mx+56,top);c.quadraticCurveTo(mx+56+belly,(top+bot)/2,mx+52,top+(bot-top)*sail);c.lineTo(mx-52,top+(bot-top)*sail);c.quadraticCurveTo(mx-56+belly,(top+bot)/2,mx-56,top);c.fill();
  c.fillStyle='rgba(40,60,90,.55)';c.font='bold 40px Georgia';c.textAlign='center';c.fillText('⚓',mx+belly*.4,top+(bot-top)*sail*.62);c.restore()}
 else{c.fillStyle='#a89c84';c.beginPath();c.roundRect(mx-58,y-176,116,16,8);c.fill();c.strokeStyle='#5a4a34';c.lineWidth=2;for(let k=-40;k<=40;k+=20){c.beginPath();c.moveTo(mx+k,y-176);c.lineTo(mx+k,y-160);c.stroke()}}
 // winch on deck (strike to raise / furl) with a pulse while the raft still needs the sail
 const wi=run.images[A6+'winch.png'];const wx=mx+34;if(wi){c.save();c.imageSmoothingEnabled=true;c.drawImage(wi,wx-22,y-40,44,40);c.restore()}
 if(!s.raftDone){const k=.5+.5*Math.sin(t*5);run.fx.glow(c,wx,y-24,30,'rgba(255,220,130,',.25+.25*k)}
 // rope line toward the far wreck
 c.strokeStyle='rgba(150,120,80,.8)';c.lineWidth=2;c.beginPath();c.moveTo(r.from,y-60);c.quadraticCurveTo((r.from+r.to+w)/2,y-30,r.to+w+20,y-80);c.stroke();
 c.fillStyle='rgba(220,240,255,.45)';c.fillRect(x-10,run.cfg.sea+Math.sin(t*3+x)*2,w+20,3);return true}

/* ------------------------------------------------------------------ props */
function drawPalm(c,x,y,t,wind){
 const lean=-.25+wind*.25+Math.sin(t*1.6+x)*.04*(1+Math.abs(wind)*2),h=230;c.save();c.strokeStyle='#2a2018';c.lineCap='round';c.lineWidth=14;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+lean*h*.3,y-h*.6,x+lean*h,y-h);c.stroke();
 c.strokeStyle='#3a2c20';c.lineWidth=4;for(let k=1;k<8;k++){const q=k/8;const px=x+lean*h*q*q,py=y-h*q;c.beginPath();c.moveTo(px-7,py);c.lineTo(px+7,py+3);c.stroke()}
 const tx=x+lean*h,ty=y-h;for(let i=0;i<7;i++){const a=-Math.PI+.3+i*.42+wind*.5+Math.sin(t*3+i+x)*.08*(1+Math.abs(wind)*3),L=110+(i%3)*14;c.strokeStyle=i%2?'#14302a':'#1c3c32';c.lineWidth=6;c.beginPath();c.moveTo(tx,ty);const ex=tx+Math.cos(a)*L,ey=ty+Math.sin(a)*L*.55+L*.25;c.quadraticCurveTo(tx+Math.cos(a)*L*.5,ty+Math.sin(a)*L*.3-10,ex,ey);c.stroke();
  c.lineWidth=2;for(let k=2;k<9;k++){const q=k/9,qx=tx+(ex-tx)*q,qy=ty+(ey-ty)*q-Math.sin(q*Math.PI)*8;c.beginPath();c.moveTo(qx,qy);c.lineTo(qx+Math.cos(a+1.2)*14,qy+Math.sin(a+1.2)*14+6);c.stroke()}}
 c.restore()}
function drawFlag(run,c,x,y,t){
 const w=windNow(run),dir=Math.abs(w)>.05?Math.sign(w):1,k=.25+Math.abs(w)*.75,warn=run.wind?.phase==='warn';
 c.fillStyle='#3a2c20';c.fillRect(x-3,y-150,6,150);c.fillStyle='#c8a26a';c.beginPath();c.arc(x,y-152,5,0,TAU);c.fill();
 c.save();c.translate(x,y-146);const L=58*(.55+k*.45);c.beginPath();c.moveTo(0,0);
 for(let i=1;i<=8;i++){const q=i/8;c.lineTo(dir*L*q,Math.sin(t*(6+k*10)-q*4)*6*q*(1+k)+q*(1-k)*22)}
 for(let i=8;i>=1;i--){const q=i/8;c.lineTo(dir*L*q,26-q*14+Math.sin(t*(6+k*10)-q*4)*6*q*(1+k)+q*(1-k)*22)}
 c.lineTo(0,28);c.closePath();c.fillStyle=warn?'#ffb84a':'#b8342a';c.fill();c.strokeStyle='rgba(0,0,0,.4)';c.lineWidth=1.5;c.stroke();c.restore();
 if(warn)run.fx.glow(c,x+dir*30,y-134,30,'rgba(255,190,80,',.35+.25*Math.sin(t*12))}
function drawRod(run,c,x,y,t,charge){
 c.fillStyle='#2a2e36';c.fillRect(x-4,y-170,8,170);c.fillStyle='#5a3a24';c.fillRect(x-14,y-10,28,10);c.strokeStyle='#3a404a';c.lineWidth=3;c.beginPath();c.moveTo(x,y-120);c.lineTo(x-26,y);c.moveTo(x,y-120);c.lineTo(x+26,y);c.stroke();
 c.fillStyle='#c87a3a';c.beginPath();c.moveTo(x-5,y-170);c.lineTo(x,y-196);c.lineTo(x+5,y-170);c.fill();
 if(charge>0){run.fx.glow(c,x,y-190,26+30*charge,'rgba(150,220,255,',.4+.5*charge);c.strokeStyle='rgba(200,240,255,'+charge+')';c.lineWidth=1.5;for(let i=0;i<3;i++){c.beginPath();let px=x,py=y-192;c.moveTo(px,py);for(let k=0;k<4;k++){px+=(Math.random()-.5)*16;py+=6+Math.random()*8;c.lineTo(px,py)}c.stroke()}}}
function drawLantern(run,c,x,y,t){const im=run.images[A6+'lantern.png'];c.fillStyle='#2a2e36';c.fillRect(x-3,y-110,6,110);c.fillRect(x-3,y-110,24,5);if(im){c.save();c.imageSmoothingEnabled=true;const sw=Math.sin(t*2+x)*.08*(1+Math.abs(windNow(run))*3);c.translate(x+18,y-106);c.rotate(sw);c.drawImage(im,-17,0,34,56);c.restore()}run.fx.glow(c,x+18,y-80,52,'rgba(255,190,90,',.45+.08*Math.sin(t*9+x))}
function drawRock(c,x,y){c.save();const g=c.createLinearGradient(0,y-110,0,y);g.addColorStop(0,'#4a5660');g.addColorStop(1,'#1a2228');c.fillStyle=g;c.beginPath();c.moveTo(x-70,y+2);c.lineTo(x-62,y-52);c.lineTo(x-34,y-96);c.lineTo(x+4,y-112);c.lineTo(x+40,y-88);c.lineTo(x+66,y-40);c.lineTo(x+72,y+2);c.closePath();c.fill();
 c.strokeStyle='rgba(200,225,255,.22)';c.lineWidth=3;c.beginPath();c.moveTo(x-62,y-52);c.lineTo(x-34,y-96);c.lineTo(x+4,y-112);c.stroke();c.fillStyle='rgba(60,90,60,.6)';c.beginPath();c.ellipse(x-10,y-104,26,8,-.2,0,TAU);c.fill();c.restore()}
function drawMast(run,c,x,y,t){const g=c.createLinearGradient(x-11,0,x+11,0);g.addColorStop(0,'#2a180a');g.addColorStop(.5,'#5a3a1e');g.addColorStop(1,'#1e1006');c.fillStyle=g;c.fillRect(x-11,y-480,22,480);c.fillStyle='#3a2410';c.fillRect(x-130,y-420,260,10);c.fillRect(x-100,y-270,200,9);
 const w=windNow(run);c.save();c.globalAlpha=.85;for(const [sy,sw] of [[y-410,124],[y-262,96]]){const belly=w*26+Math.sin(t*2+x)*6;c.fillStyle='#7a7060';c.beginPath();c.moveTo(x-sw,sy);c.lineTo(x+sw,sy);c.quadraticCurveTo(x+sw+belly,sy+70,x+sw*.7,sy+120);c.lineTo(x+sw*.2,sy+90);c.lineTo(x-sw*.3,sy+128);c.lineTo(x-sw*.8,sy+104);c.quadraticCurveTo(x-sw+belly,sy+60,x-sw,sy);c.fill()}c.restore();
 c.strokeStyle='rgba(110,90,60,.8)';c.lineWidth=2;for(const s of[-1,1]){c.beginPath();c.moveTo(x,y-470);c.lineTo(x+s*200,y);c.stroke()}}
function drawMirror(run,c,m,o,spin,lit){
 const t=run.time,im=run.images[A6+'mirror.png'],post=run.images[A6+'post.png'];
 if(m.bracket!=null){c.strokeStyle='#3a404a';c.lineWidth=6;c.beginPath();c.moveTo(m.bracket,m.y+50);c.lineTo(m.x,m.y+6);c.stroke();c.fillStyle='#2a2e36';c.fillRect(m.bracket-6,m.y+44,14,10)}
 else if(post){c.save();c.imageSmoothingEnabled=true;c.drawImage(post,m.x-8,m.y,16,m.post-m.y);c.restore()}
 const ang=(o?Math.PI/4:-Math.PI/4)+spin*Math.PI;c.save();c.translate(m.x,m.y);c.rotate(ang);if(im){c.imageSmoothingEnabled=true;c.drawImage(im,-30,-22,60,44)}c.restore();
 if(lit)run.fx.glow(c,m.x,m.y,46,'rgba(255,230,150,',.55);
 // facing hint: a small arrow showing where the beam would go
 c.save();c.globalAlpha=.6;c.fillStyle='#ffe9a8';c.font='800 13px Arial';c.textAlign='center';c.fillText(o?'⟍':'⟋',m.x,m.y-30);c.restore()}

/* ------------------------------------------------------------------ the Storm Captain */
const SC=.56;   // rig draw scale (≈ 1.35× Mari's height)
const ART={body:{a:[120,324],neck:[120,57],sf:[183,78],sb:[57,78]},head:{neck:[84,156]},arm:{s:[39,18],h:[39,141]},sabre:{g:[33,240]}};
function bossHudBox(W){return{x:W-300,y:18,w:208}}
class Captain{
 constructor(run){this.run=run;this.cfg=run.cfg.boss;this.a=run.cfg.arena;this.max=this.cfg.hp;this.rand=rng(6);this.reset()}
 get floor(){return this.a.floor}
 reset(){Object.assign(this,{x:this.a.x1-280,dir:-1,hp:this.max,state:'dormant',t:0,animT:0,flash:0,cool:1.2,airY:0,lean:0,armA:-.5,armB:.35,sabreA:0,crouch:0,fury:false,hitDone:false,shots:0,travel:0,deadT:0,shake:0,aim:null,acts:0,contact:0})}
 box(){return{x:this.x-38,y:this.floor-226-this.airY,w:76,h:226}}
 set(st,t){this.state=st;this.t=t}
 start(){const run=this.run;this.set('intro',1.3);this.airY=520;this.x=this.a.x1-300;run.audio.play('capShout',{vol:1});run.audio.play('thunderFar',{vol:.7});run.banner={t:2.6,text:text(run.lang,'capIntro')};run.skyFlash=1}
 invulnerable(){return['dormant','intro','taunt','roar','dying','dead'].includes(this.state)}
 damage(amount,kind,dir){
  const run=this.run;if(this.state==='dead'||this.state==='dying'||this.state==='dormant')return'none';const bx=this.box(),cy=bx.y+bx.h*.45;
  if(this.invulnerable()){run.fx.spark(this.x-dir*30,cy,'#cfe3ff',8);run.audio.play('clang',{vol:.5,rate:.8});return'blocked'}
  const k=this.state==='stunned'?this.cfg.stunScale:1,dmg=Math.round(amount*k);
  this.hp=Math.max(0,this.hp-dmg);this.flash=.12;this.shake=dir*6;run.audio.play(kind==='dash'?'swing3':'fleshHit',{vol:.7,rate:.8+Math.random()*.1});
  run.fx.text(String(dmg),this.x,bx.y-16,k>1?'#ffd36b':kind==='dash'?'#9fe4ff':'#ffffff',k>1);run.fx.burst(this.x,cy,'#9fd8ff',6);
  if(this.hp<=0){run.def.captainDown(run);return'hit'}
  if(!this.fury&&this.hp<=this.cfg.furyAt)this.enterFury();
  return'hit'}
 enterFury(){const run=this.run,p=run.p;this.fury=true;this.set('roar',1.6);run.audio.play('capShout',{vol:1,rate:.9});run.audio.play('zap',{vol:.8});run.camera.shake=12;run.banner={t:2.6,text:text(run.lang,'fury')};run.skyFlash=1;
  p.vx=(p.x+p.w/2>this.x?1:-1)*460;p.vy=-240;run.fx.ring(this.x,this.floor-120,'rgba(150,220,255,.9)',24,.7);run.healHero(25);run.fx.text('+25',p.x+p.w/2,p.y-20,'#7dfbe0',true);run.save()}
 update(dt){
  const run=this.run,p=run.p,a=this.a,g=this.floor;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);this.shake*=Math.pow(.002,dt);this.contact=Math.max(0,this.contact-dt);
  if(this.state==='dormant')return;if(this.state==='dying'||this.state==='dead'){this.deadT+=dt;if(this.state==='dying'&&this.deadT>2.4)this.state='dead';return}
  this.t-=dt;this.cool-=dt;const f=this.fury?.8:1,px=p.x+p.w/2,dx=px-this.x,dist=Math.abs(dx),lo=a.x0+90,hi=a.x1-90,ease=k=>Math.min(1,dt*k);
  this.lean+=(0-this.lean)*ease(5);this.crouch+=(0-this.crouch)*ease(6);
  const rest=()=>{this.armA+=(-.5-this.armA)*ease(5);this.armB+=(.35-this.armB)*ease(5);this.sabreA+=(0-this.sabreA)*ease(6)};
  switch(this.state){
   case'intro':this.airY=Math.max(0,520*(this.t/1.3)**2);this.armA=-2.4;if(this.t<=0){this.airY=0;run.camera.shake=12;run.fx.debris(this.x,g,26);run.fx.dust(this.x,g,14);run.audio.play('bossSlam',{vol:1});this.set('taunt',1.2);run.audio.play('capShout',{vol:.9,rate:1.1})}return;
   case'taunt':this.armA=-2.9;this.dir=dx>0?1:-1;if(this.t<=0){this.set('idle',.3);this.cool=.8}return;
   case'roar':this.armA=-2.9;this.armB=-2.4;this.lean=-.15;if(this.t<=0){this.set('idle',.2);this.cool=.4}return;
   case'windup':this.armA+=(-2.5-this.armA)*ease(10);this.lean=-.1;this.crouch=.3;if(this.t<=0){this.set('slash1',.22);this.hitDone=false;run.audio.play('capSlash',{vol:.9})}return;
   case'slash1':case'slash2':{const two=this.state==='slash2',k=1-this.t/.22;this.armA=-2.5+3.5*Math.min(1,k*1.6);this.lean=.14;if(two)this.x=clamp(this.x+this.dir*260*dt,lo,hi);
    if(!this.hitDone&&k>.25){const box={x:this.dir>0?this.x-10:this.x-180,y:g-180,w:190,h:180};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(two?20:18,this.dir,this,330)}}
    if(this.t<=0){if(two)this.set('recover',.75*f);else this.set('gap',.18*f)}return}
   case'gap':this.armA+=(-2.2-this.armA)*ease(12);if(this.t<=0){this.set('slash2',.22);this.hitDone=false;run.audio.play('capSlash',{vol:.9,rate:1.12})}return;
   case'chargePrep':this.crouch=1;this.armA=-1.2;this.lean=.25;if(this.t<=0){this.set('charge',2);this.travel=0;this.hitDone=false;run.audio.play('raiderDash',{vol:1,rate:.7});run.audio.play('capShout',{vol:.6,rate:1.25})}return;
   case'charge':{const step=this.dir*640*dt,nx=clamp(this.x+step,lo,hi);this.travel+=Math.abs(nx-this.x);this.x=nx;this.lean=.3;this.armA=-.2;if(Math.random()<.5)run.fx.dust(this.x-this.dir*30,g,2,-this.dir);
    if(!this.hitDone&&overlap({x:this.x-40,y:g-200,w:80,h:200},p)){this.hitDone=true;run.hurtPlayer(22,this.dir,this,400)}
    if(nx===lo||nx===hi){this.set('stunned',1.35);run.camera.shake=10;run.audio.play('bossSlam',{vol:.9});run.fx.debris(this.x+this.dir*40,g-60,16);run.fx.text('!',this.x,g-250,'#ffe38a',true)}
    else if(this.travel>=560||this.t<=0)this.set('recover',.6*f);return}
   case'stunned':this.lean=.2;this.armA=.6;this.crouch=.4;if(this.t<=0){this.set('idle',.2);this.cool=.3}return;
   case'aim':{this.armB=-1.5;this.dir=dx>0?1:-1;if(this.t>.25)this.aim={x:px,y:p.y+p.h*.45};else this.locked=true;if(this.t<=0){this.set('shoot',.5);this.shots=0;this.locked=false}return}
   case'shoot':{this.armB=-1.5;const due=this.t<.42&&this.shots===0||this.t<.18&&this.shots===1;if(due){this.shots++;run.def.musket(run,{cx:this.x,dir:this.dir,y:g-230,h:230,aim:this.aim,captain:true},14);this.armB=-1.8}
    if(this.t<=0){this.set('reload',1.1*f);this.aim=null;run.audio.play('reload',{vol:.8})}return}
   case'reload':this.armB=-.6+Math.sin(this.animT*12)*.3;if(this.t<=0)this.set('idle',.2);return;
   case'call':this.armA=-3.0;this.lean=-.1;if(this.t<=0){run.def.stormStrikes(run,3,1.0);this.set('recover',.7*f)}return;
   case'gustCall':this.armA=-2.8;this.armB=-2.6;if(this.t<=0){const d=px>this.x?1:-1;run.bossGust={dir:d,k:0,phase:'warn',t:1.2};run.audio.play('windWarn',{vol:.9});this.set('recover',.5)}return;
   case'recover':rest();if(this.t<=0)this.set('idle',.2);return}
  // idle: close the distance, keep the body between hero and wall, then pick an attack
  rest();this.dir=dx>0?1:-1;if(dist>200)this.x=clamp(this.x+this.dir*(this.fury?118:92)*dt,lo,hi);
  if(!p.dead&&p.dash<=0&&overlap(p,this.box())){p.x+=(px<this.x?-1:1)*140*dt}
  if(this.cool>0)return;this.acts++;const r=this.rand();
  // every attack books its own recovery plus a short breather, so there is always an opening
  if(dist<200&&r<.65){this.set('windup',.6*f);this.cool=(2.9+this.rand()*.5)*f;run.audio.play('bossWindup',{vol:.8});return}
  const opts=this.fury?['charge','shoot','call','gust','charge']:['charge','shoot','charge'];const pick=opts[Math.floor(this.rand()*opts.length)];
  if(pick==='charge'){this.set('chargePrep',.75*f);this.cool=3.2*f;run.audio.play('capCharge',{vol:.9})}
  else if(pick==='shoot'){this.set('aim',.7);this.cool=3.3*f;this.aim={x:px,y:p.y+p.h*.45};this.locked=false;run.audio.play('cock',{vol:.9})}
  else if(pick==='call'){this.set('call',.7);this.cool=2.7*f;run.audio.play('capCharge',{vol:.9,rate:1.2})}
  else{this.set('gustCall',.8);this.cool=3.0*f;run.audio.play('capShout',{vol:.8,rate:1.05})}}
 draw(c){
  const run=this.run,im=run.capImg;if(!im||this.state==='dormant')return;
  const t=run.time,g=this.floor,dying=this.state==='dying'||this.state==='dead';
  const st=this.state,a=this.a,lo=a.x0+90,hi=a.x1-90;
  // telegraphs on the floor and in the air
  if(st==='chargePrep'){const q=1-this.t/(.75*(this.fury?.8:1));c.save();c.strokeStyle='rgba(255,70,40,'+(.3+.5*q)+')';c.lineWidth=4;c.setLineDash([16,10]);c.beginPath();c.moveTo(this.x,g-20);c.lineTo(clamp(this.x+this.dir*560,lo,hi),g-20);c.stroke();c.setLineDash([]);
   const ax=clamp(this.x+this.dir*560,lo,hi);c.fillStyle='rgba(255,90,60,'+(.4+.5*q)+')';c.beginPath();c.moveTo(ax,g-34);c.lineTo(ax+this.dir*22,g-20);c.lineTo(ax,g-6);c.fill();c.restore()}
  if((st==='aim'||st==='shoot')&&this.aim){c.save();const lk=this.locked||st==='shoot';c.strokeStyle=lk?'rgba(255,60,40,.85)':'rgba(255,170,70,.5)';c.setLineDash(lk?[]:[8,8]);c.lineWidth=2.5;c.beginPath();c.moveTo(this.x+this.dir*60,g-150);c.lineTo(this.aim.x,this.aim.y);c.stroke();c.restore()}
  if(st==='windup'||st==='gap')run.fx.glow(c,this.x+this.dir*40,g-170,80,'rgba(255,90,60,',.45);
  if(st==='call'||this.fury&&!dying)run.fx.glow(c,this.x+this.dir*20,g-300,st==='call'?90:40,'rgba(140,210,255,',st==='call'?.7:.25);
  const s=SC,bob=Math.sin(this.animT*2.2)*2,lean=this.lean+(dying?-Math.min(1.45,Math.max(0,this.deadT-.8)*1.4):0),sq=1-this.crouch*.08;
  const fx=Math.round(this.x+this.shake),fy=Math.round(g-this.airY+(dying?Math.min(20,this.deadT*30):0));
  c.save();c.fillStyle='rgba(0,0,0,.35)';c.beginPath();c.ellipse(this.x,g+1,70*(1-Math.min(.5,this.airY/600)),9,0,0,TAU);c.fill();c.restore();
  const alpha=this.state==='dead'?clamp(1-(this.deadT-2.4)/1.2,.0,1):1;if(alpha<=0)return;
  const realC=c;if(window.PirateEnemyAnim?.drawBoss?.(run,c,this,{floor:g,air:this.airY,h:226}))c=window.PirateEnemyAnim.NULL_CTX;   // animated boss (enemy-anim.js)
  c.save();c.globalAlpha=alpha;c.translate(fx,fy);if(this.dir<0)c.scale(-1,1);c.rotate(lean);c.scale(1,sq);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
  const B=ART.body,bx=-B.a[0]*s,by=-B.a[1]*s+bob;
  const part=(img,wimg,x,y,w,h)=>{c.drawImage(img,x,y,w,h);if(this.flash>0){c.globalAlpha=alpha*.85;c.drawImage(wimg,x,y,w,h);c.globalAlpha=alpha}};
  const arm=(img,wimg,sx,sy,ang,sabre)=>{c.save();c.translate(bx+sx*s,by+sy*s);c.rotate(ang);if(sabre){c.save();c.translate((ART.arm.h[0]-ART.arm.s[0])*s,(ART.arm.h[1]-ART.arm.s[1])*s);c.rotate(this.sabreA+Math.PI*.5+.3);
    if(this.fury||st==='call'){run.fx.glow(c,0,-120*s,60,'rgba(140,210,255,',.55);c.strokeStyle='rgba(200,240,255,.8)';c.lineWidth=1.5;c.beginPath();let qx=0,qy=-40;c.moveTo(qx,qy);for(let i=0;i<5;i++){qx+=(Math.random()-.5)*14;qy-=26;c.lineTo(qx,qy)}c.stroke()}
    if(!dying||this.deadT<.8)c.drawImage(im.sabre,-ART.sabre.g[0]*s,-ART.sabre.g[1]*s,im.sabre.width*s,im.sabre.height*s);c.restore()}
   part(img,wimg,-ART.arm.s[0]*s,-ART.arm.s[1]*s,img.width*s,img.height*s);c.restore()};
  arm(im.armB,im.armBW,B.sb[0],B.sb[1],this.armB,false);
  // the pistol in the back hand while aiming
  if(st==='aim'||st==='shoot'||st==='reload'){c.save();c.translate(bx+B.sb[0]*s,by+B.sb[1]*s);c.rotate(this.armB);c.translate(0,(ART.arm.h[1]-ART.arm.s[1])*s);c.rotate(-this.armB-(this.dir>0?0:0));c.fillStyle='#4a2c16';c.fillRect(-4,-4,10,16);c.fillStyle='#8d8f96';c.fillRect(0,-8,34,6);c.restore()}
  part(im.body,im.bodyW,bx,by,im.body.width*s,im.body.height*s);
  const Hd=ART.head;c.save();c.translate(bx+B.neck[0]*s,by+B.neck[1]*s);c.rotate(Math.sin(this.animT*1.3)*.04+(st==='roar'||st==='taunt'?-.18:0));part(im.head,im.headW,-Hd.neck[0]*s,-Hd.neck[1]*s,im.head.width*s,im.head.height*s);
  if(!dying)run.fx.glow(c,(71-84)*s,(92-156)*s,10,'rgba(80,200,255,',.9);c.restore();
  arm(im.arm,im.armW,B.sf[0],B.sf[1],this.armA,true);
  c.restore();c=realC;
  if(st==='slash1'||st==='slash2'){const q=1-this.t/.22;c.save();c.globalAlpha=(1-q)*.9;c.strokeStyle=this.fury?'rgba(160,230,255,.95)':'rgba(240,248,255,.9)';c.lineWidth=16;c.lineCap='round';c.beginPath();c.arc(this.x+this.dir*30,g-140,120,this.dir>0?-1.8:Math.PI+1.8-2.6*Math.min(1,q*2),this.dir>0?-1.8+2.6*Math.min(1,q*2):Math.PI+1.8);c.stroke();c.restore()}
  if(st==='stunned')for(let i=0;i<3;i++){const an=t*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(this.x+Math.cos(an)*22-3,g-250+Math.sin(an)*5,6,6)}
 }
}

/* ------------------------------------------------------------------ level */
const ZONES=['beach','bridges','wreck','cliffs','summit'],PLATES={beach:'plate-beach.webp',bridges:'plate-bridges.webp',wreck:'plate-wreck.webp',cliffs:'plate-cliffs.webp',summit:'plate-lighthouse.webp'},
 DARK={beach:.32,bridges:.38,wreck:.46,cliffs:.36,summit:.4},SKY={beach:['#05080e','#1c2c3a'],bridges:['#05080e','#1a2a38'],wreck:['#060a0e','#18282e'],cliffs:['#05080e','#1c2c3c'],summit:['#04070c','#18263a']};
const IMAGES=[...Object.values(PLATES),'plate-relit.webp','mid-storm.webp','scud.webp','rock-fill.webp','stone-fill.webp','sand-fill.webp','grass-cap.png','stone-cap.png','sand-cap.png','lighthouse.png','mirror.png','post.png','lantern.png','winch.png',
 'captain-body.png','captain-head.png','captain-arm.png','captain-arm-back.png','captain-sabre.png'].map(n=>A6+n).concat([A4+'wood-deck.png',A4+'wood-post.png',A4+'hull-side.webp',A2+'pirate-sword.png',A2+'pirate-gun.png']);
const SFX={windWarn:'sfx-windWarn.ogg',gust:'sfx-gust.ogg',zapWarn:'sfx-zapWarn.ogg',zap:'sfx-zap.ogg',thunderFar:'sfx-thunderFar.ogg',creak:'sfx-creak.ogg',snap:'sfx-snap.ogg',cock:'sfx-cock.ogg',reload:'sfx-reload.ogg',musket:'sfx-musket.ogg',
 raiderDash:'sfx-raiderDash.ogg',sail:'sfx-sail.ogg',mirror:'sfx-mirror.ogg',beamLock:'sfx-beamLock.ogg',capCharge:'sfx-capCharge.ogg',capSlash:'sfx-capSlash.ogg',capShout:'sfx-capShout.ogg',bell:'sfx-bell.ogg',beacon:'sfx-beacon.ogg',wave:'sfx-wave.ogg',raft:'sfx-raft.ogg',
 rain:'amb-rain.ogg',storm:'amb-storm.ogg',stormMusic:'../music/storm.ogg',captainMusic:'../music/captain.ogg',battleMusic:'../music/cove-battle.ogg',triumph:'../music/triumph.ogg'};
const MUSIC={storm:'stormMusic',captain:'captainMusic',battle:'battleMusic',triumph:'triumph'};
const def={
 id:6,base:BASE,config:BASE+'level-06.json',images:IMAGES,
 text:(lang,k)=>text(lang,k),title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),
 initialState:()=>({enc:{},raftDone:false,mirrors:null,gateOpen:false,captainDown:false,cranks:0,grotto:false}),
 persist(run){const s=run.state;return{enc:{...s.enc},raftDone:s.raftDone,mirrors:[...(s.mirrors||[])],gateOpen:s.gateOpen,captainDown:s.captainDown,cranks:s.captainDown?s.cranks:0,grotto:s.grotto}},
 async prepare(run){
  run.looks={};for(const[k,v]of Object.entries(LOOKS)){const src=run.images[A2+v.src];if(!src)continue;const img=recolor(src,v);run.looks[k]={...v,img,white:whiteOf(img)}}
  const I=n=>run.images[A6+n];const body=I('captain-body.png');
  if(body)run.capImg={body,bodyW:whiteOf(body),head:I('captain-head.png'),headW:whiteOf(I('captain-head.png')),arm:I('captain-arm.png'),armW:whiteOf(I('captain-arm.png')),armB:I('captain-arm-back.png'),armBW:whiteOf(I('captain-arm-back.png')),sabre:I('captain-sabre.png')};
  run.lightBuf=document.createElement('canvas');
  run.audioReady=Promise.all([run.audioReady,run.audio.load(A6,SFX)]);
  // music aliases for the fallback path (no music director): playMusic('storm') -> buffer 'stormMusic'
  const pm=run.audio.playMusic.bind(run.audio);run.audio.playMusic=(name,fade)=>window.PirateMusic?pm(name,fade):pm(MUSIC[name]||name,fade);
  // victory choreography draws the hero through the skin (any hero, not only Mari)
  const sk=run.skin;if(sk&&!sk.__l6){sk.__l6=true;const base=sk.draw.bind(sk);sk.draw=(c,p,r)=>{const cine=r?.cine;if(r?.def===def&&cine&&cine.heroPose)return def.drawCineHero(r,c,p,base);return base(c,p,r)}}
  await loadRig(run,'level06');
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  if(!Array.isArray(s.mirrors)||s.mirrors.length!==c.mirrors.list.length)s.mirrors=c.mirrors.list.map(m=>m.start);
  s.enc=s.enc&&typeof s.enc==='object'?s.enc:{};
  run.banner={t:4.5,text:text(run.lang,'title')};run.rand=rng(61);run.stormT=0;run.marks=[];run.strikes=[];run.debris=[];run.splashes=[];run.skyFlash=0;run.skyBolt=null;run.nextFlash=4;run.thunderQ=[];
  run.wind={zone:null,idx:0,phase:'calm',t:5,dir:-1,next:-1,k:0};run.bossGust=null;run.airWind=null;run.gusts=0;
  run.raftM=run.movers.find(m=>m.id==='raft');run.sail=0;run.sailUp=false;run.ferryT=0;run.ferryDir=1;
  run.chaseOn=false;run.chaseFront=0;run.chase=[];const ch=c.chase,pw=(ch.x1-ch.x0)/ch.n;
  for(let i=0;i<ch.n;i++){const b={id:'ch'+i,x:ch.x0+i*pw,y:ch.y,w:pw,h:16,kind:'crumble',state:'idle',t:0,baseY:ch.y,look:'rope',chase:true};run.crumbles.push(b);run.chase.push(b)}
  run.beam=[];run.beamHit=false;run.sealT=0;run.gateK=s.gateOpen?0:1;run.mirrorSpin=c.mirrors.list.map(()=>0);
  // encounter wave foes wait off-stage until their wave starts
  run.pending={};for(const e of [...run.enemies]){const d=c.enemies.find(q=>q.id===e.id);if(d?.wave){const [enc,w]=d.wave.split(':');(run.pending[enc]??=[]).push({e,w:+w,d});run.enemies=run.enemies.filter(q=>q!==e)}}
  run.enc={id:null,wave:0,delay:0,wall:0};run.walls={};for(const k of c.encounters)run.walls[k.id]=0;
  run.captain=new Captain(run);run.arena={active:false};run.cine=null;
  if(s.captainDown){run.captain.state='dead';run.captain.hp=0;run.captain.deadT=99}
  run.motes=Array.from({length:150},(_,i)=>({x:(i*173)%1280,y:(i*97)%H,s:.6+(i%5)*.12,l:10+(i%4)*5}));
  run.relitK=0;run.rainK=1;
  if(!run.skipBtn&&run.root){const b=document.createElement('button');b.className='pl-skip';b.textContent=text(run.lang,'skip');b.style.cssText='position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:5;padding:8px 14px;border-radius:12px;border:2px solid #d8b56a;background:#0d1a29e6;color:#ffe3a0;font:800 14px Arial;display:none';b.onclick=e=>{e.stopPropagation();def.skipStory(run)};run.root.append(b);run.skipBtn=b;
   run.root.addEventListener('pointerdown',e=>{if(run.cine&&run.cine.stage==='story'&&!e.target.closest('button'))def.advance(run)})}
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hintQueue=resumed?[]:['hWind'];run.hintT=5.5;run.hintsAt={e2:'hRaider',g2:'hGunner'};run.hinted={}},
 music(run){if(run.cine){run.audio.playMusic('triumph',1.2);return}if(run.arena.active&&run.captain.state!=='dormant'&&!run.state.captainDown){run.audio.playMusic('captain',1.0);return}if(run.enc.id){run.audio.playMusic('battle',1.0);return}run.audio.playMusic('storm',1.4)},
 zone(run){return zoneAt(run,run.p.x+run.p.w/2)},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 objectiveHud(run){
  if(run.cine)return'';const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k),p=run.p,cx=p.x+p.w/2;
  if(run.enc.id){const k={e1:'objAmbush',e2:'objDeck',e3:'objCrew'}[run.enc.id];if(run.enc.id==='e3'&&run.captain.state!=='dormant')return t('objCaptain');return t(k).replace('{n}',Math.max(1,run.enc.wave))}
  if(z==='beach')return t('objBeach');
  if(z==='bridges'){if(run.chaseOn)return t('objChase');if(p.y+p.h>760&&cx<4100)return t('objGrotto');return t('objBridges')}
  if(z==='wreck'){if(cx<6900)return s.raftDone||!(p.platform?.id==='raft')?t('objWreck'):t('objRaft');if(cx>7860)return t('objBarrels');return t('objDeck').replace('{n}',2).replace(/ ·.*/,'')}
  if(z==='cliffs'){if(cx>9540&&!s.gateOpen)return t('objMirrors');if(s.gateOpen&&cx>9540)return t('objGate');return t('objCliffs')}
  if(s.captainDown)return t('objMech').replace('{n}',s.cranks);return t('objGate')},
 dynamicSolids(run){const list=[],c=run.cfg,g=c.gate;
  for(const k of c.encounters){const w=run.walls[k.id];if(w>.05){for(const x of[k.wallL,k.wallR])if(x!=null){const fl=k.id==='e3'?k.floor:700;list.push({x:x-15,y:fl-420*w,w:30,h:420*w,style:'net'})}}}
  if(run.gateK>.05)list.push({x:g.x-16,y:g.floor-(g.floor-g.top)*run.gateK,w:32,h:(g.floor-g.top)*run.gateK,style:'gate'});
  return list},
 cameraLock(run){if(!run.arena.active||run.cine?.stage==='story'||run.cine?.stage==='outro')return null;const a=run.cfg.arena,W=E.W,p=run.p;const x=clamp(p.x+p.w/2-W/2,a.x0-60,a.x1+60-W);return{x:x+(W-960)/2,y:a.floor-H*.84}},
 bossHud(run){const st=run.captain.state;return run.arena.active&&!run.cine&&!['dormant','dead','dying'].includes(st)},
 heroDrift(run,dt){
  const p=run.p,cfg=run.cfg.wind;if(p.dead||run.cine||run.phase!=='play')return 0;
  if(p.ground)run.airWind=null;
  if(sheltered(run,p))return 0;
  const w=windNow(run);if(p.ground)return w*cfg.ground;
  if(run.airWind===null)run.airWind=w;   // latched at take-off: a gust never flips in mid-air
  return run.airWind*cfg.air},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg;
  run.stormT+=dt;run.banner.t=Math.max(0,run.banner.t-dt);run.skyFlash=Math.max(0,run.skyFlash-dt*2.2);
  updateWind(run,dt);
  def.updateSky(run,dt);
  if(run.cine){def.updateCine(run,dt);return}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:4.2,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-p.x)<560){def.hint(run,h);delete run.hintsAt[id]}}
  const cx=p.x+p.w/2;
  if(cx>1020&&cx<1140)def.hint(run,'hGap');if(cx>3000&&cx<3300)def.hint(run,'hBolt');if(cx>5900&&cx<6100)def.hint(run,'hRaft');if(cx>9560&&!s.gateOpen)def.hint(run,'hMirror');
  // fixed lightning rods: IDLE -> MARKED -> STRIKE -> COOLDOWN
  for(const b of c.bolts){const ph=(run.stormT+b.offset)%b.cycle,prev=(run.stormT-dt+b.offset)%b.cycle,near=Math.abs(b.x-cx)<900;
   if(near&&prev<b.cycle-b.warn&&ph>=b.cycle-b.warn)run.audio.at('zapWarn',b.x,{vol:.8});
   if(ph<prev){// strike
    if(near){run.audio.at('zap',b.x,{vol:1});run.camera.shake=Math.max(run.camera.shake,Math.abs(b.x-cx)<500?5:2);run.fx.burst(b.x,b.y-10,'#cfefff',16);run.strikes.push({x:b.x,y:b.y,top:b.y-196,t:0,from:run.camera.y-40})}
    b.hitWin=.15}
   if(b.hitWin>0){b.hitWin-=dt;if(!p.dead&&Math.abs(cx-b.x)<b.r&&Math.abs(p.y+p.h-b.y)<50){b.hitWin=0;if(run.hurtPlayer(20,Math.sign(cx-b.x)||1,null,240)){run.fx.spark(cx,p.y+p.h*.4,'#cfefff',14)}}}}
  // storm plaza: strikes chase the hero across the open headland
  const pz=c.plaza;if(cx>pz.x0&&cx<pz.x1&&!p.dead&&!run.enc.id){run.plazaT=(run.plazaT??1.2)-dt;if(run.plazaT<=0){run.plazaT=pz.every;run.marks.push({x:clamp(cx+p.vx*.5,pz.x0+30,pz.x1-30),y:pz.y,t:0,warn:pz.warn,r:pz.r,hit:false});run.audio.play('zapWarn',{vol:.7})}}
  def.updateMarks(run,dt);
  for(const st of run.strikes)st.t+=dt;run.strikes=run.strikes.filter(q=>q.t<.35);
  // collapsing rope bridge (normal crumbles) + the long bridge that gives way behind the hero
  def.updateBridges(run,dt);
  // sail raft (PUZZLE 1)
  def.updateRaft(run,dt);
  // lighthouse mirrors (PUZZLE 2)
  def.updateBeam(run,dt);
  run.gateK+=((s.gateOpen?0:1)-run.gateK)*Math.min(1,dt*(s.gateOpen?1.2:6));
  // secret grotto discovery
  if(!s.grotto&&cx>3380&&cx<3980&&p.y+p.h>790){s.grotto=true;run.banner={t:3,text:text(run.lang,'grotto')};run.audio.play('secret',{vol:.9});run.save()}
  // encounters
  def.updateEncounters(run,dt);
  if(run.arena.active)run.captain.update(dt);
  run.debris=run.debris.filter(d=>{d.vy+=1100*dt;d.y+=d.vy*dt;d.r+=d.vr*dt;return d.y<c.sea+40});
  for(const sp of run.splashes)sp.t+=dt;run.splashes=run.splashes.filter(q=>q.t<.8);
  // crank the lamp winch after the Captain falls
 },
 hint(run,k){if(run.hinted[k])return;run.hinted[k]=true;run.banner={t:4.2,text:text(run.lang,k),small:true}},
 updateSky(run,dt){
  // distant lightning: sky flash + bolt, thunder rolls in a moment later
  run.nextFlash-=dt;if(run.nextFlash<=0&&!run.cine){run.nextFlash=4+run.rand()*6;run.skyFlash=.9;run.skyBolt={x:80+run.rand()*(E.W-160),t:0,seed:Math.floor(run.rand()*1000)};run.thunderQ.push(.5+run.rand()*.9)}
  if(run.skyBolt){run.skyBolt.t+=dt;if(run.skyBolt.t>.32)run.skyBolt=null}
  run.thunderQ=run.thunderQ.filter(q=>q>0);for(let i=0;i<run.thunderQ.length;i++){run.thunderQ[i]-=dt;if(run.thunderQ[i]<=0)run.audio.play('thunderFar',{vol:.55})}
 },
 updateMarks(run,dt){const p=run.p,cx=p.x+p.w/2;
  for(const m of run.marks){m.t+=dt;if(!m.hit&&m.t>=m.warn){m.hit=true;run.audio.at('zap',m.x,{vol:.9});run.camera.shake=Math.max(run.camera.shake,5);run.fx.burst(m.x,m.y-10,'#cfefff',16);run.strikes.push({x:m.x,y:m.y,top:run.camera.y-40,t:0});
    if(!p.dead&&Math.abs(cx-m.x)<m.r&&Math.abs(p.y+p.h-m.y)<60)run.hurtPlayer(18,Math.sign(cx-m.x)||1,null,240)}}
  run.marks=run.marks.filter(m=>m.t<m.warn+.3)},
 stormStrikes(run,n,warn){const p=run.p,a=run.cfg.arena;for(let i=0;i<n;i++){const x=clamp(p.x+p.w/2+(i-(n-1)/2)*150,a.x0+40,a.x1-40);run.marks.push({x,y:a.floor,t:-i*.15,warn,r:56,hit:false})}run.audio.play('zapWarn',{vol:.9})},
 updateBridges(run,dt){
  const p=run.p,ch=run.cfg.chase,cx=p.x+p.w/2;
  for(const b of run.crumbles){if(b.prev==='shake'&&b.state==='fallen'){run.debris.push({x:b.x,y:b.y,w:b.w,vy:-40,r:0,vr:(Math.random()-.5)*3});run.audio.at('snap',b.x+b.w/2,{vol:.7})}if(b.prev!=='shake'&&b.state==='shake')run.audio.at('creak',b.x+b.w/2,{vol:.6});b.prev=b.state}
  if(!run.chaseOn&&!run.chaseDone&&p.platform?.chase&&!p.dead){run.chaseOn=true;run.chaseFront=ch.x0-40;run.banner={t:2.4,text:text(run.lang,'chase')};run.audio.play('snap',{vol:1});run.camera.shake=6}
  if(run.chaseOn){run.chaseFront+=ch.speed*dt;for(const b of run.chase)if(b.state==='idle'&&b.x+b.w<run.chaseFront){b.state='shake';b.t=ch.delay}
   if(cx>ch.x1+30&&p.ground){run.chaseOn=false;run.chaseDone=true}}
  for(const b of run.chase)if(b.state==='fallen')b.t=Math.max(b.t,1);   // the long bridge stays down until it is rebuilt
  // rebuilt (rope-men pull new planks) once the hero is back on the near cliff and the bridge is empty
  if((run.chaseOn||run.chaseDone)&&cx<ch.x0-40&&p.ground&&!p.dead&&run.chase.some(b=>b.state!=='idle')){run.chaseOn=false;run.chaseDone=false;for(const b of run.chase){b.state='idle';b.y=b.baseY;b.t=0}}
 },
 updateRaft(run,dt){
  const s=run.state,m=run.raftM,r=run.cfg.raft,p=run.p,w=run.wind;if(!m)return;
  run.sail+=((run.sailUp?1:0)-run.sail)*Math.min(1,dt*5);
  const on=p.platform===m&&!p.dead;let v=0;
  if(!s.raftDone){
   if(run.sailUp&&w.phase==='gust'&&def.zone(run).id==='wreck')v=w.dir*w.k*r.speed;
   else if(!on&&p.x+p.w/2<r.from&&!run.sailUp)v=-60;   // the rope line hauls an empty, furled raft back to the beach
   if(on&&m.x>=r.to-1){s.raftDone=true;run.sailUp=false;run.banner={t:3.2,text:text(run.lang,'raftDone')};run.audio.play('bell',{vol:.7});run.save()}}
  else{// solved: an automatic rope ferry
   run.ferryT-=dt;if(run.ferryT<=0){v=run.ferryDir*110;if((run.ferryDir>0&&m.x>=r.to-1)||(run.ferryDir<0&&m.x<=r.from+1)){run.ferryDir*=-1;run.ferryT=1.4}}}
  const nx=clamp(m.x+v*dt,r.from,r.to);m.dx=nx-m.x;m.x=nx;
  if(Math.abs(v)>20&&Math.random()<dt*2)run.audio.at('raft',m.x+m.w/2,{vol:.35})},
 updateBeam(run,dt){
  const c=run.cfg.mirrors,s=run.state,p=run.p;if(Math.abs(p.x-9900)>1600&&!run.beam.length&&run.beamOff){return}
  run.beamOff=Math.abs(p.x-9900)>1600;
  for(let i=0;i<run.mirrorSpin.length;i++)run.mirrorSpin[i]=Math.max(0,run.mirrorSpin[i]-dt*3);
  // trace the lantern beam through the mirrors ('/' = 0 turns right→up, '\' = 1 turns right→down)
  let x=c.source.x,y=c.source.y,dx=1,dy=0;const segs=[],used=new Set();let hit=false;
  for(let k=0;k<6;k++){let best=null,bd=1e9;
   for(let i=0;i<c.list.length;i++){const m=c.list[i];if(used.has(i))continue;const ex=m.x-x,ey=m.y-y;let d=null;if(dx&&Math.abs(ey)<4&&Math.sign(ex)===dx)d=Math.abs(ex);else if(dy&&Math.abs(ex)<4&&Math.sign(ey)===dy)d=Math.abs(ey);if(d!==null&&d<bd){bd=d;best=i}}
   const sl=c.seal,sx=sl.x-x,sy=sl.y-y;let sd=null;if(dx&&Math.abs(sy)<4&&Math.sign(sx)===dx)sd=Math.abs(sx);else if(dy&&Math.abs(sx)<4&&Math.sign(sy)===dy)sd=Math.abs(sy);
   if(sd!==null&&sd<bd){segs.push([x,y,sl.x,sl.y]);hit=true;break}
   if(best===null){const L=dy>0?Math.max(0,c.seal.floor-y):dy<0?y+40:dx<0?700:Math.max(60,run.cfg.gate.x-x-20);segs.push([x,y,x+dx*L,y+dy*L]);break}
   const m=c.list[best];segs.push([x,y,m.x,m.y]);used.add(best);x=m.x;y=m.y;const o=s.mirrors[best];if(o===0){[dx,dy]=[-dy,-dx]}else{[dx,dy]=[dy,dx]}}
  run.beam=segs;run.beamHit=hit;
  if(hit&&!s.gateOpen){run.sealT+=dt;if(run.sealT>.6){s.gateOpen=true;run.banner={t:3.2,text:text(run.lang,'sealOn')};run.audio.play('beamLock',{vol:1});run.audio.at('gateOpen',run.cfg.gate.x,{vol:1});run.camera.shake=5;run.save()}}else if(!hit)run.sealT=0},
 updateEncounters(run,dt){
  const c=run.cfg,s=run.state,p=run.p,cx=p.x+p.w/2,en=run.enc;
  for(const k of c.encounters){const on=en.id===k.id;run.walls[k.id]+=((on?1:0)-run.walls[k.id])*Math.min(1,dt*6)}
  if(!en.id){for(const k of c.encounters){if(s.enc[k.id]||p.dead)continue;if(cx>k.trigger&&cx<(k.wallR??c.arena.x1)&&Math.abs(p.y+p.h-k.floor)<160&&p.ground){en.id=k.id;en.wave=0;en.delay=1.1;run.audio.play('gateSlam',{vol:.9});run.camera.shake=6;run.banner={t:2.2,text:text(run.lang,'ambush')};if(k.boss)run.arena.active=true;def.music(run);break}}}
  if(!en.id)return;const k=c.encounters.find(q=>q.id===en.id);
  if(k.boss&&run.captain.state!=='dormant'){if(!run.hinted.hCaptain&&run.captain.state==='idle')def.hint(run,'hCaptain');return}
  if(k.strikes&&!p.dead){run.encStrikeT=(run.encStrikeT??2)-dt;if(run.encStrikeT<=0){run.encStrikeT=k.strikes;run.marks.push({x:clamp(cx+p.vx*.4,c.arena.x0+40,c.arena.x1-40),y:k.floor,t:0,warn:1.0,r:54,hit:false});run.audio.play('zapWarn',{vol:.7})}}
  const alive=run.enemies.filter(e=>!e.dead&&e.encId===k.id);
  if(alive.length)return;en.delay-=dt;if(en.delay>0)return;
  const pend=run.pending[k.id]||[];let next=en.wave+1,foes=[];
  while(next<=k.waves){foes=pend.filter(q=>q.w===next&&!run.killed.has(q.e.id));if(foes.length)break;next++}
  if(next>k.waves){
   if(k.boss){run.captain.reset();run.captain.start();def.music(run);run.marks=[];return}
   s.enc[k.id]=true;en.id=null;run.banner={t:2.6,text:text(run.lang,'cleared')};run.audio.play('gateOpen',{vol:.9});def.music(run);run.save();return}
  en.wave=next;run.banner={t:2,text:text(run.lang,'wave').replace('{n}',next)};run.audio.play('bossIntro',{vol:.5});
  for(const q of foes){const e=q.e;e.encId=k.id;e.spawnT=.8;e.alert=true;e.x=q.d.x-e.w/2;e.state='idle';e.timer=0;e.cool=.6+Math.random()*.4;run.pending[k.id]=run.pending[k.id].filter(z=>z!==q);run.enemies.push(e)}
  en.delay=1.4},
 musket(run,e,dmg){
  const p=run.p,sx=e.cx+e.dir*62,sy=e.y+e.h*.42,aim=e.aim||{x:p.x+p.w/2,y:p.y+p.h*.45};let a=Math.atan2(aim.y-sy,aim.x-sx);const base=e.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.42,.42);a=base+rel;
  run.projectiles.push({kind:'ball',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*560,vy:Math.sin(a)*560,w:12,h:8,dmg,life:1.8});run.fx.muzzle(sx,sy,e.dir);run.audio.at('musket',e.cx,{vol:.9});run.camera.shake=Math.max(run.camera.shake,2)},
 /* -------- strikes on props: sail winch, mirrors, lamp winch; the Captain */
 hitProps(run,box){
  const s=run.state,c=run.cfg;let hit=false;
  const m=run.raftM,r=c.raft;if(m&&!s.raftDone&&overlap(box,{x:m.x+r.boom+10,y:m.y-60,w:52,h:60})&&!(run.sailCool>run.time)){run.sailCool=run.time+.25;run.sailUp=!run.sailUp;hit=true;run.audio.play('sail',{vol:.9});run.fx.text(text(run.lang,run.sailUp?'sailUp':'sailDown'),m.x+r.boom,m.y-200,'#ffe9a8');run.fx.spark(m.x+r.boom+34,m.y-24,'#ffe9a8',8)}
  c.mirrors.list.forEach((mm,i)=>{if(overlap(box,{x:mm.x-28,y:mm.y-28,w:56,h:56})){s.mirrors[i]=1-s.mirrors[i];run.mirrorSpin[i]=1;hit=true;run.audio.at('mirror',mm.x,{vol:.9});run.fx.spark(mm.x,mm.y,'#ffe9a8',10);run.save()}});
  const a=c.arena;if(s.captainDown&&!run.cine&&overlap(box,{x:a.mechanism-40,y:a.floor-120,w:80,h:120})&&!(run.crankCool>run.time)){run.crankCool=run.time+.3;s.cranks=Math.min(3,s.cranks+1);hit=true;run.audio.play('mechanism',{vol:.9});run.audio.play('bell',{vol:.5+s.cranks*.15});run.fx.spark(a.mechanism,a.floor-60,'#ffe9a8',14);run.camera.shake=3;run.save();if(s.cranks>=3)def.beginVictory(run)}
  return hit},
 strike(run,box,dmg){let hit=def.hitProps(run,box);const b=run.captain;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&overlap(box,b.box())){const r=b.damage(dmg,'melee',run.p.dir);if(r!=='none')hit=true}return hit},
 dashStrike(run,box,dmg){const b=run.captain;if(!run.arena.active||run.cine||b.state==='dormant'||!overlap(box,b.box()))return false;const r=b.damage(Math.round(dmg*run.cfg.boss.dashScale),'dash',run.p.dir);if(r==='hit'){run.fx.spark(b.x,run.p.y+run.p.h*.45,'#9fe4ff',16);return true}return false},
 projectileHit(run,q){if(q.owner!=='hero')return false;const box={x:q.x,y:q.y,w:q.w||12,h:q.h||8};if(def.hitProps(run,box))return true;const b=run.captain;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&overlap(q,b.box())){b.damage(Math.round(q.dmg*run.cfg.boss.bulletScale),'bullet',Math.sign(q.vx)||1);return true}return false},
 heroHazards(run,dt){},
 onRespawn(run){
  const s=run.state,c=run.cfg,en=run.enc;run.marks=[];run.strikes=[];run.bossGust=null;run.airWind=null;
  // an encounter in progress restarts from its first remaining wave; killed foes stay down
  if(en.id){const k=c.encounters.find(q=>q.id===en.id);for(const e of run.enemies.filter(q=>q.encId===k.id&&!q.dead)){run.enemies=run.enemies.filter(q=>q!==e);const d=c.enemies.find(q=>q.id===e.id);e.hp=e.max;e.state='idle';e.encId=null;(run.pending[k.id]??=[]).push({e,w:+d.wave.split(':')[1],d})}
   if(k.boss&&run.captain.state!=='dormant'&&!s.captainDown){run.captain.reset()}
   en.id=null;en.wave=0;run.arena.active=false;def.music(run)}
  if(!s.raftDone){run.sailUp=false;const m=run.raftM,r=c.raft;if(m&&run.p.x<r.from+40){m.x=r.from;m.dx=0}}
  if(s.captainDown)run.arena.active=false},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 ambience(run){if(!run.audio.ctx)return;const p=run.p,inCave=p.x>3360&&p.x<4100&&p.y+p.h>720;const k=run.rainK;run.audio.loop('rain',(inCave?.12:.42)*k);run.audio.loop('storm',(inCave?.15:.28+.35*Math.abs(windNow(run)))*Math.max(.3,k));run.audio.loop('water',def.zone(run).id==='wreck'?.35:.15)},
 paintSolid(run,c,s,L,R,T,B){if(s.style==='hull')return paintHull(run,c,s,L,R,T,B);if(s.style==='dock')return paintDock(run,c,s,L,R,T,B);return paintGround(run,c,s,L,R,T,B)},
 paintLedge:(run,c,l)=>paintLedge(run,c,l),
 drawCrumble:(run,c,b)=>drawPlank(run,c,b),
 drawMover:(run,c,m)=>drawMover(run,c,m),
 drawEnemy:(run,c,e)=>drawStormFoe(run,c,e),
 drawProjectile(run,c,q){if(q.kind!=='ball')return;c.rotate(Math.atan2(q.vy,q.vx));run.fx.glow(c,0,0,22,'rgba(255,160,70,',.75);c.fillStyle='rgba(255,190,120,.5)';c.fillRect(-26,-2,22,4);c.fillStyle='#2a2a30';c.beginPath();c.arc(0,0,5,0,TAU);c.fill();c.fillStyle='#ffe0b0';c.beginPath();c.arc(-1.5,-1.5,2,0,TAU);c.fill()},
 /* -------- drawing */
 drawBackground(run,c){
  const W=E.W,cam=run.camera,cx=cam.x+W/2,zs=run.cfg.zones,t=run.time;
  const weights=zs.map(z=>clamp(1-Math.max(z.from-cx,cx-z.to,0)/700,0,1));
  const z0=zs[weights.indexOf(Math.max(...weights))].id,sk=SKY[z0];const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,sk[0]);sky.addColorStop(1,sk[1]);c.fillStyle=sky;c.fillRect(0,0,W,H);
  const ph=H*1.08,py=Math.round(H-ph+18-(cam.y-300)*.08);
  const plate=(im,alpha)=>{if(!im||alpha<=0)return;const pw=im.width*ph/im.height,ox=-((cam.x*.22)%(pw*2));c.save();c.globalAlpha=alpha;for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>W||x+pw<0)continue;if(k%2){c.save();c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph);c.restore()}else c.drawImage(im,x,py,pw,ph)}c.restore()};
  zs.forEach((z,i)=>{if(weights[i]>0)plate(run.images[A6+PLATES[z.id]],weights[i])});
  if(run.relitK>0)plate(run.images[A6+'plate-relit.webp'],run.relitK*weights[4]);
  // sky lightning: the whole backdrop flashes, a bolt forks down behind the clouds
  if(run.skyFlash>0){c.save();c.globalCompositeOperation='lighter';c.fillStyle='rgba(140,180,230,'+(run.skyFlash*.28)+')';c.fillRect(0,0,W,H*.8);c.restore()}
  if(run.skyBolt&&!run.fx.reduced){const b=run.skyBolt,r=rng(b.seed);c.save();c.globalAlpha=1-b.t/.32;c.strokeStyle='#e8f4ff';c.lineWidth=3;c.shadowColor='#9fd0ff';c.shadowBlur=18;c.beginPath();let x=b.x,y=-10;c.moveTo(x,y);while(y<H*.55){y+=24+r()*30;x+=(r()-.5)*46;c.lineTo(x,y)}c.stroke();c.restore()}
  // drifting scud (faster in a gust) and the storm-bent foreground strip
  const scud=run.images[A6+'scud.webp'];if(scud){const sw=scud.width*.9,sh=scud.height*.9,off=((run.stormT*(26+60*Math.abs(windNow(run)))*-(windNow(run)<0?-1:1)+cam.x*.3)%sw+sw)%sw;c.save();c.globalAlpha=.8*(1-run.relitK*.6);for(let x=-off;x<W;x+=sw)c.drawImage(scud,x,30-(cam.y-300)*.05,sw,sh);c.restore()}
  const mid=run.images[A6+'mid-storm.webp'];if(mid){const mh=H*.9,mw=mid.width*mh/mid.height,my=Math.round(H-mh+90-(cam.y-300)*.35),ox=-((cam.x*.5)%mw);c.save();c.globalAlpha=.85;for(let x=ox-mw;x<W;x+=mw)c.drawImage(mid,x,my,mw,mh);c.restore()}
 },
 drawBack(run,c){
  const W=E.W,cam=run.camera,d=run.cfg.decor,t=run.time,vis=(x,m=200)=>x>cam.x-m&&x<cam.x+W+m,wd=windNow(run);
  // the smugglers' grotto: dark wet rock behind the cave, dripping stalactites
  if(vis(3790,420)){c.save();c.fillStyle=pat(run,c,A6+'rock-fill.webp');c.fillRect(3480,690,620,160);c.fillStyle='rgba(2,6,12,.74)';c.fillRect(3480,690,620,160);c.fillStyle='#0a0e12';for(let x=3500;x<4090;x+=38){const h=8+((x*13)%20);c.beginPath();c.moveTo(x,700);c.lineTo(x+7,700+h);c.lineTo(x+14,700);c.fill()}
   for(let i=0;i<5;i++){const x=3520+i*110,yy=700+((t*180+i*60)%120);c.fillStyle='rgba(190,230,255,.55)';c.fillRect(x,yy,2,7)}c.restore()}
  for(const[x,y]of d.masts)if(vis(x,320))drawMast(run,c,x,y,t);
  for(const[x,y]of d.palms)if(vis(x,260))drawPalm(c,x,y,t,wd);
  const a=run.cfg.arena,tw=run.images[A6+'lighthouse.png'];
  if(tw&&vis(a.tower,400)){const sc=.5;c.save();c.imageSmoothingEnabled=true;c.drawImage(tw,a.tower-186*sc,a.floor-900*sc,tw.width*sc,tw.height*sc);c.restore();
   const lx=a.tower,ly=a.floor-(900-129)*sc;const lit=run.relitK;if(lit>0){run.fx.glow(c,lx,ly,180*lit,'rgba(255,220,130,',.9*lit);const ang=run.time*.9;c.save();c.globalCompositeOperation='lighter';c.globalAlpha=.35*lit;for(const s of[-1,1]){const g=c.createLinearGradient(lx,ly,lx+s*900,ly);g.addColorStop(0,'rgba(255,230,160,.9)');g.addColorStop(1,'rgba(255,230,160,0)');c.fillStyle=g;c.beginPath();c.moveTo(lx,ly);c.lineTo(lx+s*900,ly-80+Math.sin(ang)*60);c.lineTo(lx+s*900,ly+70+Math.sin(ang)*60);c.fill()}c.restore()}
   else run.fx.glow(c,lx,ly,30,'rgba(140,200,255,',.15+.1*Math.sin(t*3))}
 },
 drawMid(run,c){
  const W=E.W,cam=run.camera,d=run.cfg.decor,t=run.time,cfg=run.cfg,s=run.state,vis=(x,m=160)=>x>cam.x-m&&x<cam.x+W+m;
  for(const[x,y]of d.posts)if(vis(x)){c.fillStyle='#2a1a0e';c.fillRect(x-6,y-60,12,64);c.fillStyle='#4a3020';c.fillRect(x-8,y-64,16,6)}
  for(const[x,y]of d.lanterns)if(vis(x))drawLantern(run,c,x,y,t);
  for(const[x,y]of d.flags)if(vis(x))drawFlag(run,c,x,y,t);
  for(const b of cfg.bolts)if(vis(b.x)){const ph=(run.stormT+b.offset)%b.cycle,charge=ph>b.cycle-b.warn?(ph-(b.cycle-b.warn))/b.warn:0;drawRod(run,c,b.x,b.y,t,charge);
   if(charge>0){c.save();c.strokeStyle='rgba(150,220,255,'+(.35+.55*charge)+')';c.lineWidth=3;c.beginPath();c.ellipse(b.x,b.y-2,b.r*charge+10,10,0,0,TAU);c.stroke();c.globalAlpha=.22*charge;c.fillStyle='#8ad8ff';c.fill();c.restore();
    c.save();c.strokeStyle='rgba(200,240,255,'+(.2+.4*charge)+')';c.setLineDash([10,12]);c.lineWidth=2;c.beginPath();c.moveTo(b.x,b.y-196);c.lineTo(b.x,cam.y-20);c.stroke();c.restore()}}
  // marked strikes on open ground
  for(const m of run.marks){if(m.hit||m.t<0)continue;const k=clamp(m.t/m.warn,0,1);c.save();c.strokeStyle='rgba(150,220,255,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(m.x,m.y-2,m.r*k+8,10,0,0,TAU);c.stroke();c.globalAlpha=.25*k;c.fillStyle='#8ad8ff';c.fill();c.restore();
   c.save();c.fillStyle='rgba(220,245,255,'+k+')';c.font='800 18px Arial';c.textAlign='center';c.fillText('⚡',m.x,m.y-16);c.restore()}
  // shelters drawn behind the hero (rock outcrop, lashed crates)
  for(const sh of cfg.wind.shelters){if(!vis(sh.x))continue;if(sh.look==='rock')drawRock(c,sh.x+sh.w/2,sh.y1-2);else if(sh.look==='crates'){drawCrate(c,sh.x+30,sh.y1-2);drawCrate(c,sh.x+84,sh.y1-2);drawCrate(c,sh.x+56,sh.y1-58)}}
  for(const[x,y]of d.rocks)if(vis(x)&&!cfg.wind.shelters.some(q=>Math.abs(q.x+q.w/2-x)<80))drawRock(c,x,y);
  for(const[x,y]of d.crates)if(vis(x))drawCrate(c,x,y);
  // the mirror puzzle: lantern, mirrors, beam, storm seal
  const mc=cfg.mirrors;if(vis(9900,1000)){
   const lp=run.images[A6+'lantern.png'],lx=mc.source.x-10;c.fillStyle='#4a4e56';c.fillRect(lx-30,428,60,12);c.fillStyle='#6a707a';c.fillRect(lx-30,428,60,3);if(lp){c.save();c.imageSmoothingEnabled=true;c.drawImage(lp,lx-34,316,68,112);c.restore()}run.fx.glow(c,lx,mc.source.y,70,'rgba(255,210,120,',.6);
   c.save();c.globalCompositeOperation='lighter';for(const [x0,y0,x1,y1] of run.beam){c.strokeStyle='rgba(255,220,140,.35)';c.lineWidth=14;c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke();c.strokeStyle='rgba(255,246,210,.95)';c.lineWidth=3.5;c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke()}c.restore();
   const end=run.beam.at(-1);if(end&&!run.beamHit)run.fx.glow(c,end[2],end[3],30,'rgba(255,200,120,',.6);
   mc.list.forEach((m,i)=>drawMirror(run,c,m,s.mirrors[i],run.mirrorSpin[i],run.beam.some(q=>Math.abs(q[2]-m.x)<2&&Math.abs(q[3]-m.y)<2)));
   const sl=mc.seal,on=run.beamHit||s.gateOpen;c.fillStyle='#3a404a';c.fillRect(sl.x-20,sl.y+14,40,sl.floor-sl.y-14);c.fillStyle='#5a6270';c.fillRect(sl.x-26,sl.floor-10,52,10);
   c.save();c.translate(sl.x,sl.y);c.rotate(t*(on?2:.4));c.fillStyle=on?'#ffe9a8':'#5ac8f0';c.beginPath();for(let i=0;i<6;i++){const an=i*TAU/6;c.lineTo(Math.cos(an)*16,Math.sin(an)*16)}c.fill();c.restore();run.fx.glow(c,sl.x,sl.y,on?90:46,on?'rgba(255,230,150,':'rgba(90,200,240,',.7)}
  // lighthouse yard gate (electrified bars until the seal is lit)
  const g=cfg.gate;if(vis(g.x)){const h=(g.floor-g.top)*run.gateK;c.fillStyle='#2a2e36';c.fillRect(g.x-34,g.top-20,14,g.floor-g.top+20);c.fillRect(g.x+20,g.top-20,14,g.floor-g.top+20);c.fillRect(g.x-40,g.top-30,80,14);
   if(h>2){c.fillStyle='#3a404a';for(let x=g.x-14;x<=g.x+14;x+=7)c.fillRect(x-1.5,g.floor-h,3,h);c.fillRect(g.x-16,g.floor-h,32,5);if(!s.gateOpen){c.save();c.strokeStyle='rgba(150,220,255,'+(.4+.4*Math.random())+')';c.lineWidth=1.5;c.beginPath();let yy=g.floor-h;c.moveTo(g.x-12,yy);while(yy<g.floor){yy+=18;c.lineTo(g.x+(Math.random()-.5)*24,yy)}c.stroke();c.restore();run.fx.glow(c,g.x,g.floor-h/2,60,'rgba(120,200,255,',.3)}}}
  // encounter barriers: cargo nets dropped across the path
  for(const k of cfg.encounters){const w=run.walls[k.id];if(w<=.02)continue;for(const x of[k.wallL,k.wallR]){if(x==null||!vis(x))continue;const fl=k.id==='e3'?k.floor:700,h=420*w;c.save();c.strokeStyle='rgba(170,140,96,.95)';c.lineWidth=2.5;for(let i=0;i<4;i++){c.beginPath();c.moveTo(x-15+i*10,fl-h);c.lineTo(x-15+i*10,fl);c.stroke()}for(let y=fl-h;y<fl;y+=16){c.beginPath();c.moveTo(x-15,y);c.lineTo(x+15,y+8);c.stroke()}c.fillStyle='#4a2c16';c.fillRect(x-20,fl-h-8,40,10);c.restore()}}
  // lamp winch (the lighthouse mechanism)
  const a=cfg.arena,wi=run.images[A6+'winch.png'];if(vis(a.mechanism)&&wi){c.save();c.imageSmoothingEnabled=true;c.translate(a.mechanism,a.floor-54);c.drawImage(wi,-44,-26,88,80);c.translate(0,0);c.rotate(s.cranks*2.1+(run.cine?run.time*3:0));c.strokeStyle='#c8a26a';c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.lineTo(0,-36);c.stroke();c.fillStyle='#8a5a2a';c.beginPath();c.arc(0,-38,6,0,TAU);c.fill();c.restore();
   c.strokeStyle='rgba(140,148,162,.8)';c.lineWidth=2;c.setLineDash([6,4]);c.beginPath();c.moveTo(a.mechanism,a.floor-60);c.lineTo(a.tower,a.floor-380);c.stroke();c.setLineDash([]);
   if(s.captainDown&&!run.cine){const k=.5+.5*Math.sin(t*5);run.fx.glow(c,a.mechanism,a.floor-60,60,'rgba(255,220,130,',.35+.3*k);c.save();c.fillStyle='rgba(255,236,170,'+(.6+.4*k)+')';c.font='800 18px Arial';c.textAlign='center';c.fillText('▼ '+s.cranks+'/3',a.mechanism,a.floor-130-k*6);c.restore()}}
 },
 drawActors(run,c){
  if(run.arena.active||run.state.captainDown||run.cine)run.captain.draw(c);
  for(const st of run.strikes){const k=1-st.t/.35;c.save();c.globalAlpha=k;c.strokeStyle='#eaf8ff';c.lineWidth=5;c.shadowColor='#8ad8ff';c.shadowBlur=16;c.beginPath();let x=st.x,y=Math.min(st.top,run.camera.y-40);c.moveTo(x+(Math.random()-.5)*20,y);while(y<st.y-6){y+=36;x=st.x+(Math.random()-.5)*30;c.lineTo(x,Math.min(y,st.y-6))}c.stroke();c.restore();run.fx.glow(c,st.x,st.y-30,100*k,'rgba(150,220,255,',.9*k)}
  for(const d of run.debris){c.save();c.translate(d.x+d.w/2,d.y);c.rotate(d.r);strip(run,c,A4+'wood-deck.png',-d.w/2,d.w/2,0,'rgba(10,20,30,.3)');c.restore()}
 },
 drawFront(run,c){
  // the storm sea in every gap: swells, foam crests, spray against the cliffs
  const W=E.W,cam=run.camera,t=run.time,sea=run.cfg.sea;
  for(const pt of run.cfg.pits){if(pt.x+pt.w<cam.x-20||pt.x>cam.x+W+20||sea>cam.y+H+40)continue;
   const calm=pt.kind==='lagoon'?.5:1,surf=x=>sea+Math.sin(x*.02+t*2.2)*5*calm+Math.sin(x*.051-t*3.1)*3*calm;
   c.save();c.beginPath();c.moveTo(pt.x,cam.y+H+60);for(let x=pt.x;x<=pt.x+pt.w;x+=8)c.lineTo(x,surf(x));c.lineTo(pt.x+pt.w,cam.y+H+60);c.closePath();
   const g=c.createLinearGradient(0,sea,0,sea+300);g.addColorStop(0,pt.kind==='lagoon'?'rgba(30,70,74,.9)':'rgba(30,64,80,.92)');g.addColorStop(.4,'rgba(10,30,40,.96)');g.addColorStop(1,'rgba(2,8,14,1)');c.fillStyle=g;c.fill();
   c.strokeStyle='rgba(220,240,250,.7)';c.lineWidth=2.5;c.beginPath();for(let x=pt.x;x<=pt.x+pt.w;x+=8){const y=surf(x);x===pt.x?c.moveTo(x,y):c.lineTo(x,y)}c.stroke();
   c.globalCompositeOperation='lighter';for(let i=0;i<Math.max(4,pt.w/40);i++){const fx=pt.x+((i*97+t*40*(1+i%3))%pt.w),fy=sea+8+((i*37)%60);c.fillStyle='rgba(200,230,240,'+(.08+.08*((i*5)%3))+')';c.fillRect(fx,fy,18+(i%4)*8,2)}c.restore();
   if(pt.kind==='sea'&&!run.fx.reduced&&Math.random()<.06){const sx=Math.random()<.5?pt.x+4:pt.x+pt.w-4;for(let i=0;i<8;i++)run.fx.cap(run.fx.parts,{x:sx,y:sea,vx:(Math.random()-.5)*120,vy:-200-Math.random()*220,g:700,life:.8,max:.8,size:3,color:'rgba(220,240,250,.8)'},160)}}
 },
 drawLighting(run,c){
  const W=E.W,cam=run.camera,t=run.time,p=run.p,zs=run.cfg.zones,cx=cam.x+W/2,cfg=run.cfg;
  let dark=0;zs.forEach(z=>{const w=clamp(1-Math.max(z.from-cx,cx-z.to,0)/700,0,1);dark=Math.max(dark,w*DARK[z.id])});
  const inCave=p.x>3360&&p.x<4100&&p.y+p.h>720;if(inCave)dark=Math.max(dark,.62);dark*=1-run.relitK*.55;dark*=1-run.skyFlash*.6;
  const lb=run.lightBuf,q=4,lw=Math.ceil(W/q),lh=Math.ceil(H/q);if(lb.width!==lw){lb.width=lw;lb.height=lh}
  const x=lb.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(4,8,18,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
  const hole=(wx,wy,r,a)=>{const sx=(wx-cam.x)/q,sy=(wy-cam.y)/q,rr=r/q;if(sx<-rr||sx>lw+rr||sy<-rr||sy>lh+rr)return;const g=x.createRadialGradient(sx,sy,0,sx,sy,rr);g.addColorStop(0,'rgba(0,0,0,'+a+')');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(sx-rr,sy-rr,rr*2,rr*2)};
  for(const[lx,ly]of cfg.decor.lanterns)hole(lx+18,ly-80,230+Math.sin(t*9+lx)*6,.92);
  hole(p.x+p.w/2,p.y+p.h*.4,210,.55);for(const st of run.strikes)hole(st.x,st.y-120,320,1);
  for(const b of cfg.bolts){const ph=(run.stormT+b.offset)%b.cycle;if(ph>b.cycle-b.warn)hole(b.x,b.y-150,160,.6)}
  for(const [x0,y0,x1,y1] of run.beam){hole((x0+x1)/2,(y0+y1)/2,Math.max(120,Math.hypot(x1-x0,y1-y0)*.6),.5)}
  hole(cfg.mirrors.source.x,cfg.mirrors.source.y,200,.8);
  if(run.relitK>0)hole(cfg.arena.tower,cfg.arena.floor-385,700*run.relitK,run.relitK);
  for(const qq of run.projectiles)if(qq.kind==='ball')hole(qq.x,qq.y,90,.7);
  c.save();c.imageSmoothingEnabled=true;c.drawImage(lb,0,0,W,H);c.restore();
  // rain (angled by the wind), gust streaks, spray
  if(!inCave&&run.rainK>.02){const w=windNow(run),slant=.18+w*.55,n=run.fx.reduced?50:run.motes.length;c.save();c.strokeStyle='rgba(190,215,240,'+(.32*run.rainK)+')';c.lineWidth=1.2;c.beginPath();
   for(let i=0;i<n;i++){const m=run.motes[i],sp=900*m.s,yy=((m.y+t*sp)%(H+60))-30,xx=((m.x+t*sp*slant-cam.x*.15)%(W+200)+W+200)%(W+200)-100;c.moveTo(xx,yy);c.lineTo(xx-slant*m.l*1.6,yy-m.l*1.6)}c.stroke();c.restore()}
  const gk=Math.abs(windNow(run));if(gk>.1&&!run.fx.reduced&&!inCave){const dir=Math.sign(windNow(run));c.save();c.strokeStyle='rgba(225,240,255,'+(.34*gk)+')';c.lineWidth=2.4;for(let i=0;i<22;i++){const m=run.motes[(i*7)%run.motes.length],len=120+m.l*8,xx=((m.x*1.7+t*900*dir*m.s)%(W+400)+W+400)%(W+400)-200,yy=(m.y*1.3)%H;c.beginPath();c.moveTo(xx,yy);c.quadraticCurveTo(xx-dir*len*.5,yy-6,xx-dir*len,yy+Math.sin(t*3+i)*6);c.stroke()}c.restore()}
  const v=c.createRadialGradient(W/2,H/2,H*.45,W/2,H/2,H);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,4,14,.45)');c.fillStyle=v;c.fillRect(0,0,W,H);
  if(run.relitK>0){c.save();c.globalCompositeOperation='soft-light';c.fillStyle='rgba(255,210,140,'+(.3*run.relitK)+')';c.fillRect(0,0,W,H);c.restore()}
  if(run.skyFlash>.3){c.fillStyle='rgba(220,235,255,'+((run.skyFlash-.3)*.25)+')';c.fillRect(0,0,W,H)}
  if(run.cine?.white>0){c.fillStyle='rgba(255,250,230,'+run.cine.white+')';c.fillRect(0,0,W,H)}
  if(run.phase==='complete'&&run.celebrate>0)for(let i=0;i<4;i++)run.fx.cap(run.fx.parts,{x:cam.x+Math.random()*W,y:cam.y-10,vx:(Math.random()-.5)*60,vy:60+Math.random()*80,g:120,life:2,max:2,size:4,color:['#ffd36b','#9fe4ff','#ff7d6b','#ffffff'][i]},160);
 },
 drawHud(run,c){
  const W=E.W,s=run.state,b=run.captain,t=run.time,wd=run.wind;
  // wind gauge under the objective: arrow, direction, warning countdown (shape + text + sound, not colour alone)
  const zc=run.cfg.wind.zones[wd?.zone]||{pattern:[]},g=run.bossGust,show=!run.cine&&(zc.pattern.length||g);
  if(show){const y=(run.objY||88)+16,x=W/2-20,ph=g?(g.phase==='warn'?'warn':'gust'):wd.phase,dir=g?g.dir:(ph==='warn'?wd.next:wd.dir),k=g?g.k:wd.k;
   c.save();c.fillStyle='rgba(10,18,32,.78)';c.strokeStyle=ph==='warn'?'#ffb84a':ph==='gust'?'#bfe9ff':'rgba(205,220,240,.35)';c.lineWidth=2;c.beginPath();c.roundRect(x-92,y,184,28,12);c.fill();c.stroke();
   const safe=ph!=='calm'&&sheltered(run,run.p);let lab=ph==='warn'?'⚠ '+text(run.lang,'windWarn'):ph==='gust'?text(run.lang,'windGust'):text(run.lang,'calm');if(safe)lab='⛨ '+text(run.lang,'shelter');c.font='800 14px Arial, sans-serif';c.textAlign='center';c.fillStyle=ph==='warn'?'#ffd38a':ph==='gust'?'#e6f6ff':'#9fb4c8';
   if(safe)c.fillStyle='#9ff0b8';   // sheltered: the arrow still shows the wind (the raft puzzle reads it)
   if(ph==='calm'){c.fillText('〰 '+lab,x,y+19)}else{const ax=x+(dir>0?50:-50);c.fillText(lab,x-dir*32,y+19);c.save();c.translate(ax,y+14);c.scale(dir,1);const pulse=ph==='warn'?.6+.4*Math.sin(t*14):1;c.globalAlpha=pulse;c.fillStyle=ph==='warn'?'#ffb84a':'#bfe9ff';
    for(let i=0;i<3;i++){c.beginPath();c.moveTo(-22+i*14,-8);c.lineTo(-12+i*14,0);c.lineTo(-22+i*14,8);c.lineTo(-17+i*14,0);c.closePath();c.fill()}c.restore();
    if(ph==='warn'){const left=g?g.t/1.2:wd.t/run.cfg.wind.warn;c.fillStyle='#ffb84a';c.fillRect(x-84,y+23,168*clamp(left,0,1),3)}else{c.fillStyle='#bfe9ff';c.fillRect(x-84,y+23,168*clamp(k,0,1),3)}}
   c.restore()}
  // boss bar
  if(def.bossHud(run)){const {x,y,w}=bossHudBox(W);run.panel(c,x-10,y-8,w+20,60);c.textAlign='left';c.font='800 13px Georgia, serif';c.fillStyle='#ffffff';c.fillText(text(run.lang,'captain'),x,y+12,150);
   for(let i=0;i<2;i++){c.fillStyle=i<(b.fury?2:1)?(b.fury?'#ff7a4a':'#7ad8ff'):'#3a4050';c.beginPath();c.arc(x+176+i*14,y+7,5,0,TAU);c.fill()}
   c.textAlign='right';c.fillStyle='#ffd36b';c.fillText(Math.ceil(b.hp)+'/'+b.max,x+w,y+29);run.bar(c,x,y+36,w,12,b.hp/b.max,b.fury?'#ff9f43':'#5ec8f0',b.fury?'#a3460f':'#1f5a8a',true);c.fillStyle='#ffffffaa';c.fillRect(x+w*b.cfg.furyAt/b.max-1,y+34,2,16)}
  if(run.banner.t>0&&!run.cine?.stage?.startsWith('story')){const k=Math.min(1,run.banner.t,4.5-run.banner.t+.001);c.save();c.globalAlpha=clamp(k*2,0,1);c.textAlign='center';const y=run.banner.small?(run.objY||88)+86:200;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(run.banner.small?520:640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(10,20,36,.86)';c.beginPath();c.roundRect(W/2-bw/2,y-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#8fc6e8';c.lineWidth=2;c.stroke();
   c.fillStyle='#e6f4ff';let txt=run.banner.text;while(c.measureText(txt).width>bw-30&&txt.length>8)txt=txt.slice(0,-2);if(txt!==run.banner.text)txt+='…';c.fillText(txt,W/2,y+(run.banner.small?-5:6));c.restore()}
  if(run.cine)def.drawCine(run,c);
 },
 /* -------- Captain down, lighthouse lit, story */
 captainDown(run){
  const b=run.captain,s=run.state,p=run.p;if(s.captainDown)return;s.captainDown=true;b.state='dying';b.deadT=0;b.aim=null;run.marks=[];run.bossGust=null;run.projectiles=run.projectiles.filter(q=>q.owner==='hero');
  run.enc.id=null;s.enc.e3=true;run.audio.play('bossDie',{vol:1});run.audio.play('capShout',{vol:.8,rate:.7});run.camera.shake=12;run.hitStop(.25);run.banner={t:3,text:text(run.lang,'capDown')};run.dropCoins(b.x,b.floor-120,10,'captain');
  run.healHero(30);run.audio.stopMusic(1.2);setTimeout(()=>{if(run.phase==='play'&&!run.cine)run.audio.playMusic('storm',1.6)},1600);run.save()},
 beginVictory(run){
  if(run.cine)return;const p=run.p;run.cine={stage:'ignite',t:0,T:0,white:0,letter:0,line:0,chars:0};run.clearInputs();if(run.controls)run.controls.hidden=true;p.inv=99;run.arena.active=true;
  run.audio.stopMusic(.6);run.audio.play('beacon',{vol:1});run.camera.shake=6;run.save()},
 updateCine(run,dt){
  const cn=run.cine,p=run.p,a=run.cfg.arena;cn.t+=dt;cn.T+=dt;p.inv=Math.max(p.inv,2);run.inputs.clear();run.axis=0;
  if(cn.stage==='ignite'){if(cn.t>.8&&cn.white===0&&!cn.flashed){cn.flashed=true;cn.white=1;run.audio.play('bell',{vol:1});run.banner={t:3.2,text:text(run.lang,'relit')};def.music(run)}
   cn.white=Math.max(0,cn.white-dt*.7);if(cn.t>.8)run.relitK=Math.min(1,run.relitK+dt/2.4);run.rainK=Math.max(.2,run.rainK-dt*.35);
   if(cn.t>3.4){cn.stage='pose';cn.t=0;cn.heroPose='pose';p.dir=1;run.audio.play('victory',{vol:1});run.fx.ring(p.x+p.w/2,p.y+p.h-10,'rgba(255,220,120,.95)',20,.8);run.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ffe27a',50,1.8);run.fx.text(text(run.lang,'victory'),p.x+p.w/2,p.y-60,'#ffe27a',true)}return}
  if(cn.stage==='pose'){if(cn.t>2.2)def.startStory(run);return}
  if(cn.stage==='story'){cn.letter=Math.min(1,cn.letter+dt*2.5);const line=def.lines(run)[cn.line];cn.chars=Math.min(line.text.length,cn.chars+dt*42);cn.lineT=(cn.lineT||0)+dt;
   if(run.attackPress||run.jumpBuffer>0){run.attackPress=false;run.jumpBuffer=0;def.advance(run)}
   if(cn.chars>=line.text.length&&cn.lineT>line.text.length/42+3.2)def.advance(run);return}
  if(cn.stage==='outro'){cn.letter=Math.max(0,cn.letter-dt*2.2);if(cn.letter<=0&&run.phase==='play'){if(run.skipBtn)run.skipBtn.style.display='none';run.cine=null;
    run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length})}}
 },
 heroName(run){return window.PirateHeroes?.get?.(run.heroId)?.name||'Captain'},
 lines(run){const t=k=>text(run.lang,k),h=def.heroName(run);return[{who:'hero',name:h,text:t('s1')},{who:'captain',name:t('s2n'),text:t('s2')},{who:'',name:'',text:t('s3')},{who:'hero',name:h,text:t('s4')}]},
 startStory(run){const was=run.cine;run.cine={...(was||{}),stage:'story',t:0,T:was?.T||9,white:0,letter:0,line:0,chars:0,lineT:0,heroPose:'pose'};run.relitK=1;run.rainK=.2;run.clearInputs();if(run.controls)run.controls.hidden=true;if(run.skipBtn)run.skipBtn.style.display='block';run.p.inv=99;def.music(run)},
 advance(run){const cn=run.cine;if(!cn||cn.stage!=='story')return;const lines=def.lines(run),line=lines[cn.line];if(cn.chars<line.text.length){cn.chars=line.text.length;return}cn.line++;cn.chars=0;cn.lineT=0;run.audio.play('coin',{vol:.3,rate:.7});if(cn.line>=lines.length)def.skipStory(run)},
 skipStory(run){const cn=run.cine;if(!cn)return;cn.stage='outro';cn.line=Math.min(cn.line,def.lines(run).length-1);if(run.skipBtn)run.skipBtn.style.display='none'},
 drawCineHero(run,c,p,base){
  const cx=p.x+p.w/2,t=run.time;c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(cx-60,0,cx+60,0);g.addColorStop(0,'rgba(255,220,120,0)');g.addColorStop(.5,'rgba(255,220,120,'+(.22+.08*Math.sin(t*4))+')');g.addColorStop(1,'rgba(255,220,120,0)');c.fillStyle=g;c.fillRect(cx-60,p.y-400,120,400+p.h);c.restore();
  run.fx.glow(c,cx,p.y+p.h*.4,110,'rgba(255,220,120,',.45);base(c,{...p,anim:'attackC',attack:0,dir:p.dir},run)},
 drawCine(run,c){
  const W=E.W,cn=run.cine,hs=run.hudScale||1;const bars=cn.stage==='story'||cn.stage==='outro'?cn.letter:0;if(bars<=0)return;
  const bh=96*bars;c.fillStyle='#000';c.fillRect(0,0,W,bh);c.fillRect(0,H/hs-bh,W,bh);
  if(cn.stage!=='story')return;const lines=def.lines(run),line=lines[Math.min(cn.line,lines.length-1)],shown=line.text.slice(0,Math.floor(cn.chars));
  const pw=Math.min(W-40,760),px=W/2-pw/2,py=bh+14;
  c.save();c.globalAlpha=bars;c.fillStyle='rgba(10,18,32,.9)';c.strokeStyle='#d2a653';c.lineWidth=2;c.beginPath();c.roundRect(px,py,pw,118,16);c.fill();c.stroke();
  let tx=px+22;if(line.who){c.save();c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.clip();c.fillStyle=line.who==='hero'?'#22344a':'#1a2432';c.fillRect(px+14,py+14,90,90);
   if(line.who==='hero'&&run.skin)run.skin.drawPortrait(c,px+14,py+14,90,90);else if(line.who==='captain'&&run.capImg){c.imageSmoothingEnabled=true;c.drawImage(run.capImg.head,px+8,py+6,104,104);run.fx.glow(c,px+52,py+62,30,'rgba(80,200,255,',.4)}c.restore();
   c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.stroke();tx=px+120}
  c.textAlign='left';if(line.name){c.font='800 17px Georgia, serif';c.fillStyle='#ffd98a';c.fillText(line.name,tx,py+32)}
  c.font='600 17px Arial, sans-serif';c.fillStyle='#eef6f8';const maxw=px+pw-tx-20;const words=shown.split(' ');let ln='',y=py+(line.name?58:44);for(const w of words){const test=ln?ln+' '+w:w;if(c.measureText(test).width>maxw&&ln){c.fillText(ln,tx,y);ln=w;y+=24}else ln=test}c.fillText(ln,tx,y);
  if(cn.chars>=line.text.length){c.font='700 13px Arial';c.fillStyle='rgba(255,227,160,'+(.5+.5*Math.sin(run.time*5))+')';c.textAlign='right';c.fillText('▶ '+text(run.lang,'tap'),px+pw-16,py+108)}
  c.restore()}
};
E.register(def);
window.PirateLevel06={def,text,Captain,launch:opts=>E.launch(6,opts)};
})();
