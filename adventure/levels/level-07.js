/* Pirate Strike — Level 7: The Dark Lighthouse (Qaranlıq Mayak), second stage of chapter 2.
 * Independent level on PirateLevelEngine. Areas: Wreckers' Shore → Watchtower Cliffs → Hidden Sea Caves →
 * Lighthouse Interior → the Lamp Gallery (layout: tools/level07_layout.py, audio: tools/level07_audio.py).
 * Night, drizzle and fog; a cursed green lamp lures ships onto the rocks.
 * Mechanics: tide surges on the shore flats (warning → surge; rock shelves are safe), the lighthouse beam that
 * sweeps the cliffs (hide behind cover or be SPOTTED → watchtower mortars; strike a tower lamp to blind that
 * tower for good), dark sea caves (hero light radius), a tide-pool ferry, the rope lift and the gear lift.
 * Puzzles: four linked lanterns (each strike flips a lantern and its neighbours) open the tide gate; two
 * counterweight levers power the gear lift; two moon mirrors lead falling moonlight to the sun seal that opens
 * the lamp room. Secrets: the hidden ledge behind watchtower 2 and the smugglers' alcove behind a cracked wall.
 * New pirates, drawn as articulated rigs (legs walk, arms swing, attack / hurt / death poses, telegraphs):
 * Lantern Wrecker (hook swipe; lobs a burning lantern at a marked spot), Tide Brute (anchor slam with ground
 * shockwaves, then stuck), Beacon Lookout (spyglass; three-pellet blunderbuss spread, visible reload, shove).
 * Encounters: the wreckers' camp (2 waves), the keeper's guards (2 waves). Mini-boss: the Lightkeeper
 * (lantern flail, hook chain that pulls, lens sweep you hide from behind pillars; at half health he calls two
 * wreckers). Ending: shatter the dark lens, the light turns gold, story → Level 8 unlocked. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A7=BASE+'assets/level-07/',A6=BASE+'assets/level-06/',AM=BASE+'assets/music/';
const L={
en:{levelWord:'Level',title:'Level 7 · The Dark Lighthouse',blurb:'A cursed green light lures ships onto the rocks — slip past the watchtowers, through the sea caves and up the dark tower',
 shore:'Wreckers’ Shore',cliffs:'Watchtower Cliffs',caves:'Hidden Sea Caves',tower:'Lighthouse Interior',gallery:'The Lamp Gallery',
 objShore:'Cross the wreckers’ shore — climb a rock shelf when the tide surges',objAmbush:'Wreckers’ camp! Defeat them · wave {n}/2',
 objCliffs:'Pass the watchtowers — hide from the beam or snuff the tower lamps ({n}/2)',objCaves:'Find a way through the sea caves',
 objLanterns:'Light all four linked lanterns to open the tide gate',objGate:'The tide gate is open — into the lighthouse!',objGuards:'The keeper’s guards! · wave {n}/2',
 objLevers:'Pull both counterweight levers to power the gear lift ({n}/2)',objLift:'Ride the gear lift up to the lamp gallery',objMirrors:'Turn the moon mirrors: lead the moonlight to the sun seal',
 objDoor:'The lamp room is open — face the keeper',objKeeper:'Defeat the Lightkeeper',objLens:'Shatter the dark lens!',
 ambush:'AMBUSH!',wave:'WAVE {n}',cleared:'The way is clear!',spotted:'SPOTTED!',snuffed:'Tower lamp snuffed — this watchtower is blind',tideWarn:'TIDE',tide:'The tide surges!',
 gateOpen:'The tide gate rises!',secretWall:'Secret: the smugglers’ alcove',leverDone:'Lever pulled ({n}/2)',liftOn:'The gear lift rumbles to life!',
 sealOn:'Moonlight strikes the sun seal — the lamp room opens!',keeper:'THE LIGHTKEEPER',keeperIntro:'The Lightkeeper steps out of the lamp room!',rage:'The keeper calls his wreckers!',
 keeperDown:'The Lightkeeper falls!',shattered:'THE DARK LIGHT IS BROKEN',victory:'VICTORY!',tap:'Tap to continue',skip:'SKIP ▶▶',hidden:'HIDDEN',lit:'IN THE LIGHT',lamps:'Lamps',blind:'BLIND',secretLedge:'Secret: the watchman’s stash',
 hTide:'Watch the sea: when the water draws back, climb a rock shelf — the surge only washes the flats',
 hBeam:'The lighthouse beam sweeps the cliffs. Hide behind rocks when it comes — if it spots you, the towers fire mortars',
 hLamp:'Strike a watchtower lamp to blind that tower for good',hWrecker:'Lantern Wreckers lob burning lanterns — watch the landing ring and step aside',
 hBrute:'Tide Brutes slam their anchor: jump the shockwaves, then strike while the anchor is stuck',hLookout:'Beacon Lookouts fire a spread: block it, then close in while they reload',
 hLantern:'Each lantern is chained to its neighbours — striking one flips them all',hLevers:'Two counterweight levers power the gear lift — one on each landing',
 hMirror:'Strike a mirror to turn it. Lead the falling moonlight to the sun seal above the door',hKeeper:'Block his flail, dodge the hook — and hide behind a pillar when the lens sweeps!',
 s2n:'The Lightkeeper',s1:'The dark lens is shattered! No ship will be lured onto these rocks again.',s2:'Fool… the Admiral’s fleet already sails north by my light. The ice will take you…',
 s3:'Beyond the fog, the frozen masts of a lost fleet glitter under the moon.',s4:'Then north we sail. Next stop — the Frozen Fleet!'},
az:{levelWord:'Səviyyə',title:'Səviyyə 7 · Qaranlıq Mayak',blurb:'Lənətli yaşıl işıq gəmiləri qayalara çəkir — gözətçi qüllələrindən gizlicə keç, dəniz mağaralarından keçib qaranlıq qülləyə qalx',
 shore:'Talançılar Sahili',cliffs:'Gözətçi Qayaları',caves:'Gizli Dəniz Mağaraları',tower:'Mayakın İçi',gallery:'Fənər Qalereyası',
 objShore:'Talançılar sahilini keç — dalğa gələndə qaya çıxıntısına qalx',objAmbush:'Talançı düşərgəsi! Onları məğlub et · dalğa {n}/2',
 objCliffs:'Gözətçi qüllələrini keç — işıqdan gizlən və ya qüllə fənərlərini söndür ({n}/2)',objCaves:'Dəniz mağaralarından keçid tap',
 objLanterns:'Dalğa qapısını açmaq üçün dörd zəncirli fənərin hamısını yandır',objGate:'Dalğa qapısı açıqdır — mayaka!',objGuards:'Mayakçının mühafizəçiləri! · dalğa {n}/2',
 objLevers:'Dişli lifti işə salmaq üçün hər iki əks-ağırlıq qolunu çək ({n}/2)',objLift:'Dişli liftlə fənər qalereyasına qalx',objMirrors:'Ay güzgülərini çevir: ay işığını günəş möhürünə yönəlt',
 objDoor:'Fənər otağı açıqdır — mayakçı ilə üz-üzə gəl',objKeeper:'Mayakçını məğlub et',objLens:'Qaranlıq linzanı parçala!',
 ambush:'PUSQU!',wave:'DALĞA {n}',cleared:'Yol açıqdır!',spotted:'GÖRÜLDÜN!',snuffed:'Qüllə fənəri söndü — bu gözətçi qülləsi kordur',tideWarn:'DALĞA',tide:'Dalğa gəlir!',
 gateOpen:'Dalğa qapısı qalxır!',secretWall:'Sirr: qaçaqmalçıların gizli oyuğu',leverDone:'Qol çəkildi ({n}/2)',liftOn:'Dişli lift işə düşdü!',
 sealOn:'Ay işığı günəş möhürünə düşdü — fənər otağı açılır!',keeper:'MAYAKÇI',keeperIntro:'Mayakçı fənər otağından çıxır!',rage:'Mayakçı talançılarını çağırır!',
 keeperDown:'Mayakçı yıxıldı!',shattered:'QARANLIQ İŞIQ QIRILDI',victory:'QƏLƏBƏ!',tap:'Davam etmək üçün toxun',skip:'KEÇ ▶▶',hidden:'GİZLİSƏN',lit:'İŞIQDASAN',lamps:'Fənərlər',blind:'KOR',secretLedge:'Sirr: gözətçinin gizli xəzinəsi',
 hTide:'Dənizə bax: su geri çəkiləndə qaya çıxıntısına qalx — dalğa yalnız düzlüyü basır',
 hBeam:'Mayakın işığı qayaları gəzir. Yaxınlaşanda qayaların arxasında gizlən — səni görsə, qüllələr minaatan atəşi açır',
 hLamp:'Gözətçi qülləsinin fənərini vur — o qüllə həmişəlik kor olacaq',hWrecker:'Fənərli Talançılar yanan fənər atır — düşəcəyi halqaya bax və kənara çəkil',
 hBrute:'Dalğa Nəhəngləri lövbəri yerə çırpır: zərbə dalğasının üstündən tullan, lövbər ilişəndə vur',hLookout:'Mayak Gözətçiləri səpmə atəş açır: blokla, sonra doldurarkən yaxınlaş',
 hLantern:'Hər fənər qonşularına zəncirlə bağlıdır — birini vursan, hamısı dəyişir',hLevers:'Dişli lifti iki əks-ağırlıq qolu işə salır — hər meydançada bir qol',
 hMirror:'Güzgünü çevirmək üçün vur. Düşən ay işığını qapının üstündəki günəş möhürünə yönəlt',hKeeper:'Kürəsini blokla, qarmaqdan yayın — linza işıq saçanda sütunun arxasında gizlən!',
 s2n:'Mayakçı',s1:'Qaranlıq linza parçalandı! Daha heç bir gəmi bu qayalara çəkilməyəcək.',s2:'Axmaq… Admiralın donanması artıq mənim işığımla şimala üzür. Buz səni udacaq…',
 s3:'Dumanın o tayında itmiş donanmanın donmuş dor ağacları ay işığında parıldayır.',s4:'Onda şimala üzürük. Növbəti dayanacaq — Donmuş Donanma!'},
tr:{levelWord:'Bölüm',title:'Bölüm 7 · Karanlık Fener',blurb:'Lanetli yeşil ışık gemileri kayalara çekiyor — gözcü kulelerinden gizlice geç, deniz mağaralarından karanlık kuleye tırman',
 shore:'Yağmacılar Kıyısı',cliffs:'Gözcü Kayalıkları',caves:'Gizli Deniz Mağaraları',tower:'Fenerin İçi',gallery:'Fener Galerisi',
 objShore:'Yağmacılar kıyısını geç — dalga gelince kaya çıkıntısına tırman',objAmbush:'Yağmacı kampı! Onları yen · dalga {n}/2',
 objCliffs:'Gözcü kulelerini geç — ışıktan saklan ya da kule fenerlerini söndür ({n}/2)',objCaves:'Deniz mağaralarında bir yol bul',
 objLanterns:'Dalga kapısını açmak için dört zincirli fenerin hepsini yak',objGate:'Dalga kapısı açık — fenere!',objGuards:'Fenerci muhafızları! · dalga {n}/2',
 objLevers:'Dişli asansörü çalıştırmak için iki karşı ağırlık kolunu da çek ({n}/2)',objLift:'Dişli asansörle fener galerisine çık',objMirrors:'Ay aynalarını çevir: ay ışığını güneş mührüne yönlendir',
 objDoor:'Fener odası açık — fenerciyle yüzleş',objKeeper:'Fenerciyi yen',objLens:'Karanlık merceği parçala!',
 ambush:'PUSU!',wave:'DALGA {n}',cleared:'Yol açık!',spotted:'GÖRÜLDÜN!',snuffed:'Kule feneri söndü — bu gözcü kulesi kör',tideWarn:'DALGA',tide:'Dalga geliyor!',
 gateOpen:'Dalga kapısı kalkıyor!',secretWall:'Sır: kaçakçıların gizli oyuğu',leverDone:'Kol çekildi ({n}/2)',liftOn:'Dişli asansör çalıştı!',
 sealOn:'Ay ışığı güneş mührüne vurdu — fener odası açılıyor!',keeper:'FENERCİ',keeperIntro:'Fenerci fener odasından çıkıyor!',rage:'Fenerci yağmacılarını çağırıyor!',
 keeperDown:'Fenerci düştü!',shattered:'KARANLIK IŞIK KIRILDI',victory:'ZAFER!',tap:'Devam için dokun',skip:'GEÇ ▶▶',hidden:'GİZLİ',lit:'IŞIKTASIN',lamps:'Fenerler',blind:'KÖR',secretLedge:'Sır: gözcünün zulası',
 hTide:'Denizi izle: su geri çekilince kaya çıkıntısına tırman — dalga yalnızca düzlüğü basar',hBeam:'Fener ışığı kayalıkları tarıyor. Yaklaşınca kayaların arkasına saklan — seni görürse kuleler havan atar',
 hLamp:'Bir gözcü kulesinin fenerine vur — o kule kalıcı olarak kör olur',hWrecker:'Fenerli Yağmacılar yanan fener fırlatır — düşeceği halkaya bak ve kenara çekil',
 hBrute:'Dalga Devleri çapayı yere vurur: şok dalgasının üstünden zıpla, çapa saplanınca vur',hLookout:'Fener Gözcüleri saçma atar: blokla, dolum yaparken yaklaş',
 hLantern:'Her fener komşularına zincirle bağlı — birine vurursan hepsi değişir',hLevers:'Dişli asansörü iki karşı ağırlık kolu çalıştırır — her sahanlıkta bir kol',
 hMirror:'Aynayı çevirmek için vur. Düşen ay ışığını kapının üstündeki güneş mührüne yönlendir',hKeeper:'Topuzunu blokla, kancadan kaç — mercek tararken sütunun arkasına saklan!',
 s2n:'Fenerci',s1:'Karanlık mercek parçalandı! Artık hiçbir gemi bu kayalara çekilmeyecek.',s2:'Ahmak… Amiralin filosu benim ışığımla çoktan kuzeye yelken açtı. Buz seni yutacak…',
 s3:'Sisin ötesinde kayıp bir filonun donmuş direkleri ay ışığında parlıyor.',s4:'O halde kuzeye! Sonraki durak — Donmuş Filo!'},
ru:{levelWord:'Уровень',title:'Уровень 7 · Тёмный маяк',blurb:'Проклятый зелёный свет заманивает корабли на скалы — проберись мимо дозорных башен, через морские пещеры и вверх по тёмной башне',
 shore:'Берег мародёров',cliffs:'Утёсы дозорных',caves:'Тайные морские пещеры',tower:'Внутри маяка',gallery:'Ламповая галерея',
 objShore:'Пересеки берег — взбирайся на уступ, когда идёт прилив',objAmbush:'Лагерь мародёров! Победи их · волна {n}/2',
 objCliffs:'Пройди башни — прячься от луча или погаси фонари башен ({n}/2)',objCaves:'Найди путь через морские пещеры',
 objLanterns:'Зажги все четыре связанных фонаря, чтобы открыть приливные ворота',objGate:'Ворота открыты — в маяк!',objGuards:'Стража смотрителя! · волна {n}/2',
 objLevers:'Потяни оба рычага противовеса, чтобы запустить подъёмник ({n}/2)',objLift:'Поднимись на подъёмнике к ламповой галерее',objMirrors:'Поверни лунные зеркала: направь лунный свет на солнечную печать',
 objDoor:'Ламповая открыта — сразись со смотрителем',objKeeper:'Победи Смотрителя маяка',objLens:'Разбей тёмную линзу!',
 ambush:'ЗАСАДА!',wave:'ВОЛНА {n}',cleared:'Путь свободен!',spotted:'ТЕБЯ ЗАМЕТИЛИ!',snuffed:'Фонарь башни погашен — башня ослепла',tideWarn:'ПРИЛИВ',tide:'Прилив!',
 gateOpen:'Приливные ворота поднимаются!',secretWall:'Тайник: ниша контрабандистов',leverDone:'Рычаг потянут ({n}/2)',liftOn:'Подъёмник ожил!',
 sealOn:'Лунный свет упал на печать — ламповая открывается!',keeper:'СМОТРИТЕЛЬ МАЯКА',keeperIntro:'Смотритель выходит из ламповой!',rage:'Смотритель зовёт мародёров!',
 keeperDown:'Смотритель повержен!',shattered:'ТЁМНЫЙ СВЕТ РАЗБИТ',victory:'ПОБЕДА!',tap:'Нажми, чтобы продолжить',skip:'ПРОПУСТИТЬ ▶▶',hidden:'В ТЕНИ',lit:'НА СВЕТУ',lamps:'Фонари',blind:'СЛЕП',secretLedge:'Тайник: заначка дозорного',
 hTide:'Следи за морем: когда вода отступает, забирайся на уступ — волна заливает только отмель',hBeam:'Луч маяка обходит утёсы. Прячься за камнями — если он тебя заметит, башни стреляют из мортир',
 hLamp:'Ударь по фонарю башни — она ослепнет навсегда',hWrecker:'Мародёры с фонарями бросают горящие фонари — следи за кругом и отойди',
 hBrute:'Приливные громилы бьют якорем: перепрыгни ударные волны и бей, пока якорь застрял',hLookout:'Дозорные стреляют дробью: блокируй и подходи, пока они перезаряжают',
 hLantern:'Каждый фонарь связан с соседями — удар меняет их все',hLevers:'Подъёмник запускают два рычага противовеса — по одному на каждой площадке',
 hMirror:'Ударь зеркало, чтобы повернуть. Направь лунный свет на печать над дверью',hKeeper:'Блокируй кистень, уклоняйся от крюка — прячься за колонну, когда линза сияет!',
 s2n:'Смотритель',s1:'Тёмная линза разбита! Ни один корабль больше не разобьётся здесь.',s2:'Глупец… флот Адмирала уже идёт на север по моему свету. Лёд поглотит тебя…',
 s3:'За туманом в лунном свете блестят обледенелые мачты пропавшего флота.',s4:'Тогда на север! Следующая остановка — Ледяной флот!'},
pl:{levelWord:'Poziom',title:'Poziom 7 · Mroczna latarnia',blurb:'Przeklęte zielone światło wabi statki na skały — przemknij obok wież, przez morskie jaskinie i w górę mrocznej wieży',
 shore:'Brzeg Łupieżców',cliffs:'Klify Strażnic',caves:'Ukryte Jaskinie',tower:'Wnętrze latarni',gallery:'Galeria Lampy',
 objShore:'Przejdź brzeg — wejdź na skalną półkę, gdy nadchodzi fala',objAmbush:'Obóz łupieżców! Pokonaj ich · fala {n}/2',
 objCliffs:'Miń strażnice — chowaj się przed snopem albo zgaś lampy wież ({n}/2)',objCaves:'Znajdź drogę przez morskie jaskinie',
 objLanterns:'Zapal wszystkie cztery połączone latarnie, by otworzyć wrota',objGate:'Wrota otwarte — do latarni!',objGuards:'Straż latarnika! · fala {n}/2',
 objLevers:'Pociągnij obie dźwignie przeciwwagi, by uruchomić windę ({n}/2)',objLift:'Wjedź windą na galerię lampy',objMirrors:'Obróć księżycowe lustra: skieruj światło na słoneczną pieczęć',
 objDoor:'Komora lampy otwarta — zmierz się z latarnikiem',objKeeper:'Pokonaj Latarnika',objLens:'Rozbij mroczną soczewkę!',
 ambush:'ZASADZKA!',wave:'FALA {n}',cleared:'Droga wolna!',spotted:'ZAUWAŻONO CIĘ!',snuffed:'Lampa wieży zgaszona — ta strażnica jest ślepa',tideWarn:'FALA',tide:'Nadchodzi fala!',
 gateOpen:'Wrota się unoszą!',secretWall:'Sekret: wnęka przemytników',leverDone:'Dźwignia pociągnięta ({n}/2)',liftOn:'Winda ożyła!',
 sealOn:'Księżycowe światło trafia w pieczęć — komora lampy się otwiera!',keeper:'LATARNIK',keeperIntro:'Latarnik wychodzi z komory lampy!',rage:'Latarnik wzywa łupieżców!',
 keeperDown:'Latarnik pokonany!',shattered:'MROCZNE ŚWIATŁO ROZBITE',victory:'ZWYCIĘSTWO!',tap:'Dotknij, by kontynuować',skip:'POMIŃ ▶▶',hidden:'UKRYTY',lit:'W ŚWIETLE',lamps:'Lampy',blind:'ŚLEPA',secretLedge:'Sekret: skrytka wartownika',
 hTide:'Patrz na morze: gdy woda się cofa, wejdź na półkę — fala zalewa tylko płyciznę',hBeam:'Snop latarni omiata klify. Chowaj się za skałami — gdy cię zauważy, wieże strzelają z moździerzy',
 hLamp:'Uderz w lampę strażnicy — wieża oślepnie na dobre',hWrecker:'Łupieżcy rzucają płonące latarnie — patrz na krąg i odsuń się',
 hBrute:'Osiłki uderzają kotwicą: przeskocz fale uderzeniowe i bij, gdy kotwica utknie',hLookout:'Obserwatorzy strzelają śrutem: blokuj i podejdź, gdy ładują',
 hLantern:'Każda latarnia jest połączona z sąsiadkami — uderzenie zmienia wszystkie',hLevers:'Windę uruchamiają dwie dźwignie — po jednej na każdym podeście',
 hMirror:'Uderz lustro, by je obrócić. Skieruj księżycowe światło na pieczęć nad drzwiami',hKeeper:'Blokuj cep, unikaj haka — chowaj się za filarem, gdy soczewka świeci!',
 s2n:'Latarnik',s1:'Mroczna soczewka rozbita! Żaden statek nie rozbije się już na tych skałach.',s2:'Głupcze… flota Admirała już płynie na północ w moim świetle. Lód cię pochłonie…',
 s3:'Za mgłą lśnią w księżycu oszronione maszty zaginionej floty.',s4:'Więc na północ! Następny przystanek — Lodowa Flota!'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k]??k;
function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
const SFX={tideWarn:'sfx-tideWarn.ogg',surge:'sfx-surge.ogg',alarm:'sfx-alarm.ogg',spotted:'sfx-spotted.ogg',shellWhistle:'sfx-shellWhistle.ogg',shellBoom:'sfx-shellBoom.ogg',snuff:'sfx-snuff.ogg',
 lob:'sfx-lob.ogg',fireBurst:'sfx-fireBurst.ogg',hook:'sfx-hook.ogg',grunt:'sfx-grunt.ogg',slam:'sfx-slam.ogg',quake:'sfx-quake.ogg',glint:'sfx-glint.ogg',blunder:'sfx-blunder.ogg',ramrod:'sfx-ramrod.ogg',
 lanternOn:'sfx-lanternOn.ogg',lanternOff:'sfx-lanternOff.ogg',gateGrind:'sfx-gateGrind.ogg',leverPull:'sfx-leverPull.ogg',gears:'sfx-gears.ogg',mirrorTurn:'sfx-mirrorTurn.ogg',seal:'sfx-seal.ogg',
 flailSpin:'sfx-flailSpin.ogg',flail:'sfx-flail.ogg',chain:'sfx-chain.ogg',sweepCharge:'sfx-sweepCharge.ogg',sweep:'sfx-sweep.ogg',laugh:'sfx-laugh.ogg',keeperHurt:'sfx-keeperHurt.ogg',keeperFall:'sfx-keeperFall.ogg',
 lensShatter:'sfx-shatter.ogg',drip:'sfx-drip.ogg',sea:'amb-sea.ogg',drizzle:'amb-drizzle.ogg'};
// fallback music buffers when the music director (music.js) is not loaded (tests, standalone)
const MUSIC={lighthouse:'lighthouse.ogg',keeper:'keeper.ogg',battle:'cove-battle.ogg',triumph:'triumph.ogg'};

/* ------------------------------------------------------------------ the dark-light crews (engine enemy kit) */
Object.assign(E.ENEMY,{
 wrecker:{hp:64,w:40,h:90,speed:46,chase:98,sight:400,gold:4,flesh:true,name:{en:'Lantern Wrecker',az:'Fənərli Talançı',tr:'Fenerli Yağmacı',ru:'Мародёр с фонарём',pl:'Łupieżca z latarnią'}},
 tideBrute:{hp:150,w:58,h:112,speed:30,chase:64,sight:320,gold:7,flesh:true,name:{en:'Tide Brute',az:'Dalğa Nəhəngi',tr:'Dalga Devi',ru:'Приливный громила',pl:'Osiłek przypływu'}},
 lookout:{hp:50,w:34,h:104,speed:40,chase:0,sight:560,gold:5,flesh:true,name:{en:'Beacon Lookout',az:'Mayak Gözətçisi',tr:'Fener Gözcüsü',ru:'Дозорный маяка',pl:'Obserwator latarni'}}});
const P=E.Enemy.prototype;
const lohi=e=>[e.range[0]-e.w/2,e.range[1]-e.w/2];
if(!P.__smugglers&&!P.__rise){P.__rise=true;   // drop-in spawn for encounter waves (shared with Levels 4–6 when loaded)
 const bu=P.update,bd=P.damage;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return bu.call(this,dt)};
 P.damage=function(a,d,k){if(this.dead||this.spawnT>0)return'none';return bd.call(this,a,d,k)}}
if(!P.__dark){P.__dark=true;
 const bd=P.damage;
 P.damage=function(amount,dir,kind){
  const st=this.state;
  if(this.type==='tideBrute'&&st==='stuck')amount=Math.round(amount*1.3);
  const r=bd.call(this,amount,dir,kind);
  if(r!=='hit'||this.dead)return r;
  if(this.type==='tideBrute'){this.kb*=.3;if(st==='raise'||st==='slam'||st==='stuck')this.hurtT=0}   // heavy: barely flinches, never interrupted mid-slam
  if(this.type==='wrecker'&&(st==='lob'||st==='hookWind')){this.state='recover';this.timer=.45;this.aim=null}
  if(this.type==='lookout'&&(st==='aim'||st==='shoveWind')){this.state='recover';this.timer=.5;this.aim=null;this.locked=false}
  return r};
 P.wrecker=function(dt,dx,dy,near){
  const run=this.run,p=run.p,[lo,hi]=lohi(this),d=Math.abs(dx);this.lobCool=Math.max(0,(this.lobCool??1.2)-dt);
  switch(this.state){
   case'hookWind':this.setAnim('hookWind');this.timer-=dt;if(this.timer<=0){this.state='hook';this.timer=.22;this.hitDone=false;run.audio.at('hook',this.cx)}return;
   case'hook':{this.setAnim('hook');this.timer-=dt;this.x=clamp(this.x+this.dir*90*dt,lo,hi);
    if(!this.hitDone&&this.timer<.16){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-66,y:this.y+8,w:66,h:this.h-12};if(overlap(box,p))run.hurtPlayer(14,this.dir,this,210)}
    if(this.timer<=0){this.state='recover';this.timer=.55}return}
   case'lob':this.setAnim('lob');this.timer-=dt;this.face(p);if(this.timer>.22)this.aim=run.def.landing(run,this);if(this.timer<=0){run.def.lob(run,this);this.state='throw';this.timer=.26}return;
   case'throw':this.setAnim('throw');this.timer-=dt;if(this.timer<=0){this.state='recover';this.timer=.5;this.aim=null}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  if(near&&this.alert){this.face(p);
   if(d<72&&Math.abs(dy)<60&&this.cool<=0){this.state='hookWind';this.timer=.45;run.audio.at('swingEnemy',this.cx,{vol:.5,rate:.8});return}
   if(this.lobCool<=0&&d>150&&d<470&&Math.abs(dy)<220){this.state='lob';this.timer=.72;this.lobCool=3.4;this.aim=run.def.landing(run,this);run.audio.at('fireBurst',this.cx,{vol:.25,rate:1.6});return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*56,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
 P.tideBrute=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx);
  switch(this.state){
   case'raise':this.setAnim('raise');this.timer-=dt;if(this.timer<=0){this.state='slam';this.timer=.2;this.hitDone=false}return;
   case'slam':this.setAnim('slam');this.timer-=dt;if(!this.hitDone&&this.timer<.12){this.hitDone=true;run.def.anchorSlam(run,this)}if(this.timer<=0){this.state='stuck';this.timer=1.15;run.fx.text('!',this.cx,this.y-12,'#ffe38a')}return;
   case'stuck':this.setAnim('stuck');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=1.5}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.6}return}
  if(near&&this.alert){this.face(p);
   if(d<150&&Math.abs(dy)<70&&this.cool<=0){this.state='raise';this.timer=.85;run.audio.at('grunt',this.cx,{vol:.9});return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*92,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
 P.lookout=function(dt,dx,dy,near){
  const run=this.run,p=run.p,[lo,hi]=lohi(this),d=Math.abs(dx);
  switch(this.state){
   case'aim':this.setAnim('aim');this.timer-=dt;this.face(p);if(this.timer>.3){this.aim={x:p.x+p.w/2,y:p.y+p.h*.5};this.locked=false}else this.locked=true;
    if(this.timer<=0){run.def.blunder(run,this);this.state='recoil';this.timer=.26;this.locked=false}return;
   case'recoil':this.setAnim('recoil');this.timer-=dt;this.x=clamp(this.x-this.dir*60*dt,lo,hi);if(this.timer<=0){this.state='reload';this.timer=1.4;this.aim=null;run.audio.at('ramrod',this.cx,{vol:.8})}return;
   case'reload':this.setAnim('reload');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return;
   case'shoveWind':this.setAnim('shoveWind');this.timer-=dt;if(this.timer<=0){this.state='shove';this.timer=.18;this.hitDone=false}return;
   case'shove':{this.setAnim('shove');this.timer-=dt;if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-58,y:this.y+20,w:58,h:this.h-30};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(8,this.dir,this,360)}}if(this.timer<=0){this.state='recover';this.timer=.5}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.4}return}
  this.setAnim('idle');
  if(near&&this.alert){this.face(p);
   if(d<84&&Math.abs(dy)<60&&this.cool<=0){this.state='shoveWind';this.timer=.38;return}
   if(d<160&&Math.abs(dy)<60)this.walkTo(this.cx-Math.sign(dx)*60,this.def.speed,dt);
   this.face(p);
   if(this.cool<=0&&d>=96&&d<470&&Math.abs(dy)<260){this.state='aim';this.timer=.9;this.locked=false;this.aim={x:p.x+p.w/2,y:p.y+p.h*.5};run.audio.at('glint',this.cx,{vol:.8})}}
  else this.patrol(dt)};
}

/* ------------------------------------------------------------------ articulated rigs (original vector art) */
const mixCache=new Map();
function mixHex(a,b,k){const key=a+b+k;let v=mixCache.get(key);if(v)return v;const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);const ch=s=>[(s>>16)&255,(s>>8)&255,s&255];const A_=ch(pa),B_=ch(pb);v='rgb('+A_.map((x,i)=>Math.round(x+(B_[i]-x)*k)).join(',')+')';mixCache.set(key,v);return v}
const LOOK={
 wrecker:{hip:40,thigh:22,shin:22,torso:34,lean:.28,head:11,shoulder:15,arm:[17,16],legW:9,armW:7,cadence:10,stride:.55,
  pal:{skin:'#cdb89c',coat:'#56693f',coatD:'#3a4729',hat:'#3e3528',band:'#a8352b',trouser:'#54493f',boot:'#2a221c',metal:'#b4bec6',eye:'#ffcf6b'},scale:1.45},
 tideBrute:{hip:48,thigh:24,shin:26,torso:44,lean:.12,head:12,shoulder:26,arm:[22,21],legW:15,armW:12,cadence:7,stride:.42,
  pal:{skin:'#bf835a',coat:'#3f5788',coatD:'#2a3b5e',hat:'#8a2626',band:'#d9b25a',trouser:'#3a4766',boot:'#2a221a',metal:'#8a929c',eye:'#ffe0a0'},scale:1.4},
 lookout:{hip:60,thigh:31,shin:31,torso:38,lean:.05,head:10,shoulder:13,arm:[18,17],legW:8,armW:6,cadence:9,stride:.5,
  pal:{skin:'#dcc2a4',coat:'#34466b',coatD:'#23304a',hat:'#2a3145',band:'#d9b25a',trouser:'#625244',boot:'#211b16',metal:'#d9b25a',eye:'#bfe9ff'},scale:1.4}};
for(const k in LOOK){const pl=LOOK[k].pal,fl={};for(const c in pl)fl[c]=mixHex(pl[c],'#ffffff',.78);LOOK[k].flashPal=fl}
function limb(c,x0,y0,a1,l1,a2,l2,w,col,boot){
 const kx=x0+Math.sin(a1)*l1,ky=y0+Math.cos(a1)*l1,fx=kx+Math.sin(a2)*l2,fy=ky+Math.cos(a2)*l2;
 c.strokeStyle='#0b0d12';c.lineWidth=w+3;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 c.strokeStyle=col;c.lineWidth=w;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 if(boot){c.fillStyle=boot;c.strokeStyle='#0b0d12';c.lineWidth=1.5;c.beginPath();c.ellipse(fx+w*.45,fy-1,w*.9,w*.5,0,0,TAU);c.fill();c.stroke()}
 return{kx,ky,fx,fy}}
function arm(c,x0,y0,a1,l1,a2,l2,w,col,skin){const r=limb(c,x0,y0,a1,l1,a2,l2,w,col);c.fillStyle=skin;c.beginPath();c.arc(r.fx,r.fy,w*.62,0,TAU);c.fill();return r}
// pose from the enemy state: legs (walk cycle or stance), lean, arm angles (from straight down, + = forward), weapon angle
function pose(e,R,run){
 const st=e.state,t=e.animT,o={lean:R.lean,bob:0,l1:.06,k1:.12,l2:-.08,k2:.1,f1:.2,f2:-.5,b1:-.15,b2:-.3,w:0,crouch:0,glow:0};
 const moving=e.anim==='walk'&&!e.dead&&!(e.hurtT>0);
 if(moving){const ph=t*R.cadence*(e.alert?1.35:1);const s=Math.sin(ph);o.l1=s*R.stride;o.l2=-s*R.stride;o.k1=Math.max(0,Math.cos(ph))*.9+.05;o.k2=Math.max(0,-Math.cos(ph))*.9+.05;o.bob=-Math.abs(Math.cos(ph))*2.6;o.f1+=-s*.35;o.b1+=s*.35}
 else{const br=Math.sin(run.time*2.2+(e.home||0))*.04;o.f1+=br;o.bob=Math.sin(run.time*2.2+(e.home||0))*.8}
 const k=(T)=>clamp(1-e.timer/T,0,1);
 switch(e.type){
  case'wrecker':
   if(st==='hookWind'){const q=k(.45);o.f1=.2-2.4*q;o.f2=-.4-.8*q;o.lean=R.lean-.15*q;o.glow=q;o.l1=.25;o.l2=-.3}
   else if(st==='hook'){const q=k(.22);o.f1=-2.2+3.1*Math.min(1,q*1.8);o.f2=-.2;o.lean=R.lean+.2;o.l1=.45;o.l2=-.35;o.k2=.4}
   else if(st==='lob'){const q=k(.72);o.b1=-.4-2.3*q;o.b2=-.2;o.f1=.6;o.lean=R.lean-.25*q;o.glow=q;o.l1=-.15;o.l2=.3;o.k1=.3}
   else if(st==='throw'){o.b1=1.3;o.b2=.2;o.lean=R.lean+.25;o.l1=.4;o.l2=-.3}
   break;
  case'tideBrute':
   if(st==='raise'){const q=k(.85);o.f1=.3-3.0*q;o.b1=.2-2.9*q;o.f2=-.3;o.b2=-.3;o.lean=R.lean-.22*q;o.crouch=.15*q;o.glow=q;o.l1=.3;o.l2=-.3}
   else if(st==='slam'){o.f1=1.25;o.b1=1.15;o.f2=.1;o.b2=.1;o.lean=.45;o.crouch=.35;o.l1=.5;o.l2=-.45;o.k1=.7;o.k2=.6}
   else if(st==='stuck'){const w=Math.sin(run.time*16)*.05;o.f1=1.2+w;o.b1=1.1-w;o.f2=.15;o.b2=.15;o.lean=.4;o.crouch=.25;o.l1=.45;o.l2=-.4;o.k1=.6;o.k2=.6}
   else{o.f1=-2.5;o.f2=-1.9;o.b1=-.2}   // anchor rests on the shoulder
   break;
  case'lookout':
   if(st==='aim'){o.f1=1.45;o.f2=.05;o.b1=1.35;o.b2=.3;o.lean=-.04;o.l1=.3;o.l2=-.25;o.glow=e.locked?1:.4}
   else if(st==='recoil'){o.f1=1.9;o.f2=.4;o.b1=1.6;o.b2=.6;o.lean=-.25;o.l1=.35;o.l2=-.35}
   else if(st==='reload'){const w=Math.sin(run.time*12);o.f1=.7;o.f2=-1.2;o.b1=-.9+w*.35;o.b2=-1.6;o.w=-1.45}
   else if(st==='shoveWind'){const q=k(.38);o.f1=-.6*q;o.b1=-.4;o.lean=-.12*q;o.glow=q;o.l1=-.2;o.l2=.2}
   else if(st==='shove'){o.f1=1.6;o.f2=.2;o.b1=1.4;o.lean=.25;o.l1=.55;o.l2=-.35;o.k2=.3}
   else{o.f1=-.1;o.f2=-.25;o.b1=.35;o.b2=-.7}
   break}
 if(e.hurtT>0&&!e.dead){o.lean=-.32;o.f1=-.9;o.b1=-1.2;o.f2=-.6;o.l1=.25;o.l2=-.15}
 return o}
/* painted cut-out cast (tools/enemy_cast.py → assets/enemies/level07, posed by enemy-rig.js); the vector rig
 * below stays as the fallback and still provides the telegraph timing (pose().glow) */
const RIG={
 wrecker:{cast:'level07',char:'wrecker',grip:-.2,uprightB:true,fam:{hookWind:'wind',hook:'thrust',lob:'lobBack',throw:'throwBack'},hideWeaponB:e=>e.state==='throw'||e.lobGone>e.run.time},
 tideBrute:{cast:'level07',char:'brute',scale:1.24,grip:.25,step:28,bar:56,fam:{raise:'wind',slam:'slam',stuck:'planted'},windArm:-2.9,stars:e=>e.state==='stuck'},
 lookout:{cast:'level07',char:'lookout',weapon:'gun',twoHand:true,fam:{aim:'aim',recoil:'fire',reload:'reload',shoveWind:'wind',shove:'thrust'},windArm:-1.4}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — vector fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig,V=LOOK[e.type];if(!R||!V||!run.rigCast||!Rig)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;const st=e.state;
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,pose(e,V,run));
 c.save();c.globalAlpha=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const o=Rig.draw(run,c,e,R);
 if(o){
  if(e.type==='wrecker'&&!e.dead&&!R.hideWeaponB(e))run.fx.glow(c,o.handB[0],o.handB[1]+16,30+(st==='lob'?16:0),'rgba(255,170,70,',.55);
  if(e.type==='tideBrute'&&st==='raise')run.fx.glow(c,o.hand[0],o.hand[1],40,'rgba(255,90,60,',.5);
  if(e.type==='lookout'&&st==='aim'&&e.locked)run.fx.glow(c,o.muzzle[0],o.muzzle[1],22,'rgba(255,80,50,',.7);
  if(!e.dead){Rig.hud(c,run,e,o,R);
   if(e.type==='lookout'&&st==='reload'){const k=1-e.timer/1.4,by=o.top-30;c.fillStyle='rgba(10,18,32,.8)';c.beginPath();c.roundRect(e.cx-22,by,44,12,5);c.fill();c.fillStyle='#ffd36b';c.fillRect(e.cx-20,by+2,40*k,8)}}}
 c.restore();c.imageSmoothingEnabled=false;return true}
function drawFoe(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const R=LOOK[e.type];if(!R)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.65)/.6,0,1):1;if(alpha<=0)return true;
 const flash=e.flash>0,pal=flash?R.flashPal:R.pal,o=pose(e,R,run),st=e.state;
 const fx=Math.round(e.cx),fy=e.floor;let dy=0,rot=0;
 if(e.spawnT>0){dy=-e.spawnT*420}
 if(e.dead){rot=-Math.min(1.4,e.deadT*3.4);}
 // telegraphs on the floor / in the air (drawn unrotated, before the body)
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,o);
 c.save();c.globalAlpha=alpha;
 c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(fx,fy+1,R.shoulder+16,5,0,0,TAU);c.fill();
 c.translate(fx,fy+dy);if(e.dir<0)c.scale(-1,1);c.scale(R.scale,R.scale);if(rot){c.translate(-R.hip*.4,0);c.rotate(rot);c.translate(R.hip*.4,0)}
 c.lineCap='round';c.lineJoin='round';
 const hipY=-(R.thigh+R.shin)*(1-o.crouch*.35)+o.bob,hipX=0;
 // back leg, back arm (+ weapon), torso, head, front leg, front arm (+ weapon)
 limb(c,hipX-3,hipY,o.l2,R.thigh,o.l2-o.k2,R.shin,R.legW,mixHex(pal.trouser.startsWith('#')?pal.trouser:'#333333','#000000',.25),pal.boot);
 const lean=o.lean,sx=hipX+Math.sin(lean)*R.torso,sy=hipY-Math.cos(lean)*R.torso;
 armAndWeapon(run,c,e,R,pal,o,sx-3,sy+2,true);
 torso(c,e,R,pal,o,hipX,hipY,sx,sy,run);
 head(c,e,R,pal,o,sx,sy,lean,run);
 limb(c,hipX+3,hipY,o.l1,R.thigh,o.l1-o.k1,R.shin,R.legW,pal.trouser,pal.boot);
 if(e.type==='wrecker'||e.type==='lookout')coatTails(c,e,R,pal,o,hipX,hipY,run);
 armAndWeapon(run,c,e,R,pal,o,sx+2,sy+3,false);
 c.restore();
 if(st==='stuck')for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,e.y-10+Math.sin(a)*4,4,4)}
 if(e.type==='lookout'&&st==='reload'&&!e.dead){c.save();c.font='800 12px Arial';c.textAlign='center';const k=1-e.timer/1.4;c.fillStyle='rgba(10,18,32,.8)';c.beginPath();c.roundRect(e.cx-22,e.y-30,44,12,5);c.fill();c.fillStyle='#ffd36b';c.fillRect(e.cx-20,e.y-28,40*k,8);c.restore()}
 if(!e.dead&&e.hp<e.max&&!(e.spawnT>0)){const w=e.type==='tideBrute'?56:44,by=e.floor-(R.hip+R.torso+R.head*2.6)*R.scale-12;c.fillStyle='#0b0f18cc';c.fillRect(e.cx-w/2,by,w,6);c.fillStyle='#e8484f';c.fillRect(e.cx-w/2+1,by+1,(w-2)*e.hp/e.max,4)}
 return true}
function torso(c,e,R,pal,o,hx,hy,sx,sy,run){
 const w=R.shoulder,ang=o.lean;c.save();c.translate(hx,hy);c.rotate(ang);const T=R.torso;
 if(e.type==='tideBrute'){// barrel chest, bare arms, sash
  c.fillStyle=pal.skin;c.strokeStyle='#0b0d12';c.lineWidth=2.5;c.beginPath();c.moveTo(-w*.7,0);c.quadraticCurveTo(-w*1.05,-T*.6,-w*.85,-T);c.lineTo(w*.85,-T);c.quadraticCurveTo(w*1.15,-T*.55,w*.7,0);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.85,-T);c.lineTo(-w*.2,-T);c.lineTo(-w*.55,-T*.35);c.lineTo(-w*.75,-T*.4);c.closePath();c.fill();
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(w*.85,-T);c.lineTo(w*.2,-T);c.lineTo(w*.55,-T*.35);c.lineTo(w*.78,-T*.4);c.closePath();c.fill();
  c.strokeStyle='rgba(60,30,20,.55)';c.lineWidth=1.5;c.beginPath();c.moveTo(-w*.1,-T*.75);c.quadraticCurveTo(0,-T*.6,w*.12,-T*.75);c.stroke();
  c.strokeStyle='#2b4f6e';c.lineWidth=2;for(let i=0;i<3;i++){c.beginPath();c.arc(w*.35,-T*.45+i*5,3,0,Math.PI);c.stroke()}   // tattoo waves
  c.fillStyle=pal.band;c.fillRect(-w*.72,-8,w*1.44,9);c.fillStyle=mixHex(pal.band.startsWith('#')?pal.band:'#c9a24a','#000000',.3);c.fillRect(w*.3,-6,6,16);
 }else{// long coat with lapels and belt
  c.fillStyle=pal.coat;c.strokeStyle='#0b0d12';c.lineWidth=2;c.beginPath();c.moveTo(-w*.75,4);c.lineTo(-w*.85,-T*.9);c.quadraticCurveTo(0,-T*1.12,w*.85,-T*.9);c.lineTo(w*.75,4);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.coatD;c.beginPath();c.moveTo(-2,-T);c.lineTo(w*.45,-T*.55);c.lineTo(2,-T*.3);c.closePath();c.fill();
  c.fillStyle=e.type==='lookout'?'#e8dcc4':'#6b5a48';c.beginPath();c.moveTo(-3,-T);c.lineTo(3,-T);c.lineTo(1,-T*.6);c.closePath();c.fill();
  c.fillStyle='#1a120c';c.fillRect(-w*.78,-T*.18,w*1.56,5);c.fillStyle=pal.metal;c.fillRect(-3,-T*.19,6,6);
  if(e.type==='lookout'){c.fillStyle=pal.band;for(let i=0;i<3;i++){c.beginPath();c.arc(w*.25,-T*.8+i*8,1.8,0,TAU);c.fill()}}
  if(e.type==='wrecker'){c.strokeStyle=pal.band;c.lineWidth=5;c.beginPath();c.moveTo(-w*.6,-T*.95);c.quadraticCurveTo(0,-T*.82,w*.6,-T*.95);c.stroke()}   // scarf
 }
 c.restore()}
function coatTails(c,e,R,pal,o,hx,hy,run){const sw=Math.sin(run.time*3+(e.home||0))*.08+(e.anim==='walk'?Math.sin(e.animT*R.cadence)*.1:0);const len=e.type==='lookout'?R.thigh*1.05:R.thigh*.95,w=R.shoulder*.8;
 c.save();c.translate(hx,hy-2);c.rotate(o.lean*.4);c.fillStyle=pal.coatD;c.strokeStyle='#0b0d12';c.lineWidth=1.8;
 c.beginPath();c.moveTo(-w,0);c.lineTo(-w-6+sw*30,len);c.lineTo(-w*.1+sw*20,len*.92);c.lineTo(0,4);c.closePath();c.fill();c.stroke();
 c.beginPath();c.moveTo(w*.15,4);c.lineTo(w*.2-sw*20,len*.85);c.lineTo(w+4-sw*24,len*.95);c.lineTo(w,0);c.closePath();c.fill();c.stroke();
 if(e.type==='wrecker'){c.strokeStyle='rgba(0,0,0,.4)';c.lineWidth=1;for(let i=0;i<4;i++){c.beginPath();c.moveTo(-w+i*6+sw*28,len-2);c.lineTo(-w+i*6+3+sw*28,len+5);c.stroke()}}   // tattered hem
 c.restore()}
function head(c,e,R,pal,o,sx,sy,lean,run){
 const r=R.head,hx=sx+Math.sin(lean)*r*.9,hy=sy-Math.cos(lean)*r*.9-2;
 c.save();c.translate(hx,hy);c.rotate(lean*.6+(e.hurtT>0?-.25:0));
 c.fillStyle=pal.skin;c.strokeStyle='#0b0d12';c.lineWidth=2;c.beginPath();c.ellipse(1,0,r*.9,r,0,0,TAU);c.fill();c.stroke();
 c.fillStyle=pal.eye;c.beginPath();c.arc(r*.45,-r*.15,1.9,0,TAU);c.fill();
 if(e.type==='wrecker'){// slouch hat with a wide brim, grey stubble
  c.fillStyle='rgba(70,70,70,.5)';c.beginPath();c.ellipse(r*.3,r*.45,r*.7,r*.4,0,0,Math.PI);c.fill();
  c.fillStyle=pal.hat;c.beginPath();c.ellipse(0,-r*.5,r*2,r*.42,-.08,0,TAU);c.fill();c.stroke();c.beginPath();c.moveTo(-r*.8,-r*.6);c.quadraticCurveTo(-r*.5,-r*1.9,r*.4,-r*1.7);c.quadraticCurveTo(r*.9,-r*1.2,r*.85,-r*.6);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.band;c.fillRect(-r*.75,-r*.85,r*1.6,3)}
 else if(e.type==='tideBrute'){// bald, bandana knot, big beard and earring
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*.95,-r*.2);c.quadraticCurveTo(0,-r*1.45,r*.95,-r*.25);c.lineTo(r*.9,-r*.45);c.quadraticCurveTo(0,-r*1.1,-r*.9,-r*.45);c.closePath();c.fill();
  c.beginPath();c.moveTo(-r*.9,-r*.3);c.lineTo(-r*1.6,-r*.1+Math.sin(run.time*5)*2);c.lineTo(-r*1.3,r*.25);c.closePath();c.fill();
  c.fillStyle='#2a1a12';c.beginPath();c.moveTo(-r*.4,r*.2);c.quadraticCurveTo(r*.3,r*1.9,r*.95,r*.25);c.closePath();c.fill();
  c.fillStyle='#d9b45d';c.beginPath();c.arc(-r*.2,r*.35,2.2,0,TAU);c.fill()}
 else{// bicorne with a feather, long nose, spyglass on the belt is drawn with the arm
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*1.7,-r*.55);c.quadraticCurveTo(0,-r*2.3,r*1.8,-r*.55);c.quadraticCurveTo(0,-r*.95,-r*1.7,-r*.55);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.band;c.beginPath();c.arc(0,-r*1.05,2.4,0,TAU);c.fill();
  c.strokeStyle='#d9e6ee';c.lineWidth=2;c.beginPath();c.moveTo(-r*.3,-r*1.2);c.quadraticCurveTo(-r*1.4,-r*2.4,-r*2.2,-r*1.7);c.stroke();
  c.fillStyle=pal.skin;c.beginPath();c.moveTo(r*.8,-r*.1);c.lineTo(r*1.35,r*.25);c.lineTo(r*.75,r*.35);c.closePath();c.fill()}
 c.restore()}
function armAndWeapon(run,c,e,R,pal,o,x,y,back){
 const col=e.type==='tideBrute'?pal.skin:(back?pal.coatD:pal.coat),[u,f]=R.arm,a1=back?o.b1:o.f1,a2=back?o.b2:o.f2;
 const r=arm(c,x,y,a1,u,a1+a2,f,R.armW,col,pal.skin);const hx=r.fx,hy=r.fy,ha=a1+a2;
 c.save();c.translate(hx,hy);
 if(e.type==='wrecker'){
  if(!back){// boathook in the front hand
   c.rotate(-ha+Math.PI/2+(e.state==='hook'?.2:-.2));c.strokeStyle='#5a3d24';c.lineWidth=4;c.beginPath();c.moveTo(-18,0);c.lineTo(34,0);c.stroke();c.strokeStyle=pal.metal;c.lineWidth=3;c.beginPath();c.moveTo(34,0);c.lineTo(42,0);c.arc(42,-7,7,Math.PI/2,-Math.PI*.6,true);c.stroke()}
  else if(!(e.state==='throw'||e.lobGone>run.time)){// the oil lantern
   const g=o.glow;c.rotate(-ha);c.strokeStyle='#2a221a';c.lineWidth=2;c.beginPath();c.moveTo(0,0);c.lineTo(0,7);c.stroke();
   run.fx.glow(c,0,16,26+20*g,'rgba(255,170,70,',.55+.4*g);c.fillStyle='#3a3026';c.fillRect(-7,6,14,4);c.fillStyle=g>.05?'#fff0b0':'#ffc45e';c.fillRect(-6,10,12,12);c.strokeStyle='#3a3026';c.lineWidth=1.5;c.strokeRect(-6,10,12,12);c.fillStyle='#3a3026';c.fillRect(-7,22,14,3)}}
 else if(e.type==='tideBrute'&&!back){// the anchor
  c.rotate(-ha+Math.PI/2);c.fillStyle=pal.metal;c.strokeStyle='#0b0d12';c.lineWidth=2;
  c.fillRect(-6,-4,52,8);c.strokeRect(-6,-4,52,8);c.beginPath();c.arc(-10,0,7,0,TAU);c.stroke();
  c.beginPath();c.moveTo(46,-22);c.quadraticCurveTo(60,0,46,22);c.lineTo(42,16);c.quadraticCurveTo(52,0,42,-16);c.closePath();c.fill();c.stroke();
  c.beginPath();c.moveTo(46,-22);c.lineTo(38,-30);c.lineTo(40,-18);c.fill();c.beginPath();c.moveTo(46,22);c.lineTo(38,30);c.lineTo(40,18);c.fill();
  c.fillRect(10,-12,6,24);
  if(o.glow>0)run.fx.glow(c,50,0,30+30*o.glow,'rgba(255,90,60,',.3+.4*o.glow)}
 else if(e.type==='lookout'&&!back){// flared blunderbuss
  c.rotate(-ha+Math.PI/2+o.w);c.fillStyle='#4a2c16';c.beginPath();c.moveTo(-20,2);c.lineTo(4,-3);c.lineTo(6,4);c.lineTo(-16,9);c.closePath();c.fill();
  c.fillStyle='#b08a3a';c.fillRect(2,-5,34,6);c.beginPath();c.moveTo(36,-5);c.lineTo(46,-10);c.lineTo(46,7);c.lineTo(36,1);c.closePath();c.fill();c.strokeStyle='#0b0d12';c.lineWidth=1.2;c.stroke();
  if(e.state==='aim'&&e.locked)run.fx.glow(c,46,-2,22,'rgba(255,80,50,',.7)}
 else if(e.type==='lookout'&&back){c.rotate(-ha+Math.PI/2);c.fillStyle='#c9a24a';c.fillRect(-2,-3,18,6);c.fillStyle='#8a6a2a';c.fillRect(14,-4,6,8);c.fillStyle='#bfe9ff';c.fillRect(19,-3,2,6)}   // spyglass
 c.restore()}
function telegraph(run,c,e,o){
 const st=e.state;
 if(e.type==='wrecker'){
  if(st==='hookWind')run.fx.glow(c,e.cx+e.dir*26,e.y+e.h*.35,46+20*o.glow,'rgba(255,90,60,',.35+.35*o.glow);
  if(st==='lob'&&e.aim){const q=o.glow;c.save();c.strokeStyle='rgba(255,150,60,'+(.25+.45*q)+')';c.lineWidth=2;c.setLineDash([6,7]);c.beginPath();const sx=e.cx+e.dir*18,sy=e.y+10,tx=e.aim.x,ty=e.aim.y;c.moveTo(sx,sy);c.quadraticCurveTo((sx+tx)/2,Math.min(sy,ty)-150,tx,ty-6);c.stroke();c.setLineDash([]);
   c.strokeStyle='rgba(255,90,50,'+(.4+.5*q)+')';c.lineWidth=3;c.beginPath();c.ellipse(tx,ty-2,40+10*(1-q),9,0,0,TAU);c.stroke();c.restore()}}
 else if(e.type==='tideBrute'&&st==='raise'){const q=o.glow,ix=e.cx+e.dir*64;c.save();c.fillStyle='rgba(255,70,40,'+(.12+.25*q)+')';c.beginPath();c.ellipse(ix,e.floor-2,60*q+10,10,0,0,TAU);c.fill();c.strokeStyle='rgba(255,90,60,'+(.4+.5*q)+')';c.lineWidth=3;c.stroke();
  c.strokeStyle='rgba(255,170,80,'+(.3*q)+')';c.setLineDash([10,8]);c.beginPath();c.moveTo(ix-300*q,e.floor-6);c.lineTo(ix+300*q,e.floor-6);c.stroke();c.restore()}
 else if(e.type==='lookout'){
  if(st==='aim'&&e.aim){const sx=e.cx+e.dir*44,sy=e.y+e.h*.42,a0=Math.atan2(e.aim.y-sy,e.aim.x-sx);c.save();c.lineWidth=e.locked?2.5:2;c.strokeStyle=e.locked?'rgba(255,60,40,.85)':'rgba(255,170,70,.45)';c.setLineDash(e.locked?[]:[7,8]);
   for(const da of[-.16,0,.16]){const a=aimClamp(e,a0)+da;c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+Math.cos(a)*300,sy+Math.sin(a)*300);c.stroke()}c.restore()}
  if(st==='shoveWind')run.fx.glow(c,e.cx+e.dir*16,e.y+e.h*.45,40,'rgba(255,90,60,',.5)}}
function aimClamp(e,a){const base=e.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.55,.55);return base+rel}

/* ------------------------------------------------------------------ procedural textures (built once per run) */
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function makeTextures(){
 const T={},R=rng(707);
 const stones=(x,base,lite,dark,moss)=>{x.fillStyle=base;x.fillRect(0,0,256,256);
  for(let i=0;i<70;i++){const cx=R()*256,cy=R()*256,r=10+R()*26;x.fillStyle=R()<.5?lite:dark;x.beginPath();for(let k=0;k<7;k++){const a=k/7*TAU,rr=r*(.7+R()*.4);x.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr*.7)}x.closePath();x.fill()}
  x.strokeStyle='rgba(0,0,0,.45)';x.lineWidth=1.5;for(let i=0;i<26;i++){let px=R()*256,py=R()*256;x.beginPath();x.moveTo(px,py);for(let k=0;k<4;k++){px+=(R()-.5)*40;py+=R()*22;x.lineTo(px,py)}x.stroke()}
  if(moss){x.fillStyle=moss;for(let i=0;i<60;i++){x.globalAlpha=.25+R()*.3;x.beginPath();x.arc(R()*256,R()*256,2+R()*5,0,TAU);x.fill()}x.globalAlpha=1}};
 let c=canvas(256,256),x=c.getContext('2d');stones(x,'#1d232b','#28303a','#141920','#2f4a36');T.rock=c;
 c=canvas(256,256);x=c.getContext('2d');stones(x,'#171d26','#202838','#0e131b',null);x.strokeStyle='rgba(120,180,220,.10)';for(let i=0;i<40;i++){x.beginPath();const px=R()*256,py=R()*256;x.moveTo(px,py);x.lineTo(px+R()*6,py+8+R()*12);x.stroke()}T.cave=c;
 c=canvas(256,256);x=c.getContext('2d');stones(x,'#1a2027','#232a33','#11161c','#294233');x.strokeStyle='rgba(0,0,0,.35)';x.lineWidth=3;for(let y=10;y<256;y+=34){x.beginPath();x.moveTo(0,y);for(let k=0;k<=8;k++)x.lineTo(k*32,y+(R()-.5)*8);x.stroke()}T.cliff=c;
 c=canvas(256,256);x=c.getContext('2d');x.fillStyle='#2a2826';x.fillRect(0,0,256,256);for(let i=0;i<900;i++){x.fillStyle=R()<.5?'#34312d':'#201e1c';x.fillRect(R()*256,R()*256,2,2)}for(let i=0;i<14;i++){x.fillStyle='rgba(220,210,190,.25)';x.beginPath();x.ellipse(R()*256,R()*256,3,2,R()*3,0,TAU);x.fill()}T.sand=c;
 c=canvas(256,256);x=c.getContext('2d');x.fillStyle='#1d1a19';x.fillRect(0,0,256,256);
 for(let row=0;row<8;row++){const off=row%2?32:0;for(let col=-1;col<5;col++){const bx=col*64+off,by=row*32;const v=R();x.fillStyle=v<.33?'#3b3632':v<.66?'#45403a':'#332e2b';x.fillRect(bx+2,by+2,60,28);x.fillStyle='rgba(255,255,255,.05)';x.fillRect(bx+2,by+2,60,3);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(bx+2,by+26,60,4);if(R()<.15){x.fillStyle='rgba(60,90,60,.4)';x.fillRect(bx+4,by+20,20+R()*30,8)}}}T.brick=c;
 c=canvas(256,256);x=c.getContext('2d');x.fillStyle='#262c31';x.fillRect(0,0,256,256);for(let py=0;py<256;py+=64)for(let px=0;px<256;px+=64){x.fillStyle=R()<.5?'#2d343a':'#22282d';x.fillRect(px+2,py+2,60,60);x.fillStyle='#4a535b';for(const [a,b] of[[6,6],[56,6],[6,56],[56,56]]){x.beginPath();x.arc(px+a,py+b,2.4,0,TAU);x.fill()}x.fillStyle='rgba(140,80,40,.18)';x.fillRect(px+10,py+40,30,6)}T.deck=c;
 return T}
function pat(run,c,name){run.pats??=new Map();let m=run.pats.get(c);if(!m){m={};run.pats.set(c,m)}return m[name]??=c.createPattern(run.tex[name],'repeat')}
function paintSolid(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L),x1=Math.min(s.x+s.w,R),y0=Math.max(s.y,T),y1=Math.min(s.y+s.h,B);if(x1<=x0||y1<=y0)return true;
 const st=s.style;c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();
 c.fillStyle=pat(run,c,st==='sand'?'sand':st==='cave'?'cave':st==='cliff'?'cliff':st==='brick'?'brick':st==='deck'?'deck':'rock');c.fillRect(x0,y0,x1-x0,y1-y0);
 const g=c.createLinearGradient(0,s.y,0,s.y+300);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(2,4,10,.75)');c.fillStyle=g;c.fillRect(x0,Math.max(y0,s.y+20),x1-x0,y1-Math.max(y0,s.y+20));
 c.restore();
 // surface caps
 const R_=rng(Math.round(s.x*7+s.y));
 if(st==='rock'||st==='cliff'){c.fillStyle='#22382a';c.fillRect(s.x,s.y-2,s.w,8);c.fillStyle='#34573f';for(let x=s.x;x<s.x+s.w;x+=7){const h=4+R_()*9;c.beginPath();c.moveTo(x,s.y+4);c.lineTo(x+3,s.y+4-h);c.lineTo(x+6,s.y+4);c.fill()}c.fillStyle='rgba(180,220,190,.18)';c.fillRect(s.x,s.y+5,s.w,2)}
 else if(st==='sand'){c.fillStyle='#3a3833';c.fillRect(s.x,s.y,s.w,6);c.fillStyle='rgba(200,220,230,.25)';c.fillRect(s.x,s.y,s.w,2);for(let x=s.x+10;x<s.x+s.w;x+=40+R_()*40){c.fillStyle='#4b4741';c.beginPath();c.ellipse(x,s.y+4,6+R_()*6,3,0,0,TAU);c.fill()}}
 else if(st==='cave'){c.fillStyle='#24303d';c.fillRect(s.x,s.y,s.w,5);c.fillStyle='rgba(140,200,255,.22)';c.fillRect(s.x,s.y,s.w,1.5)}
 else if(st==='brick'||st==='deck'){if(s.h>100||st==='deck'){c.fillStyle=st==='deck'?'#3c454c':'#4d4740';c.fillRect(s.x,s.y,s.w,10);c.fillStyle='rgba(255,255,255,.12)';c.fillRect(s.x,s.y,s.w,2);c.fillStyle='rgba(0,0,0,.4)';c.fillRect(s.x,s.y+10,s.w,4)}}
 // the cliff wall: a dark overhang edge where it meets the cave
 if(st==='cliff'){c.fillStyle='#0a0e14';c.fillRect(s.x,s.y+s.h-8,s.w,8);for(let x=s.x+8;x<s.x+s.w;x+=38){const h=10+R_()*26;c.fillStyle='#161c24';c.beginPath();c.moveTo(x,s.y+s.h);c.lineTo(x+8,s.y+s.h+h);c.lineTo(x+16,s.y+s.h);c.fill()}}
 if(st!=='cliff'&&st!=='deck'){c.fillStyle='rgba(0,0,0,.35)';c.fillRect(s.x+s.w-4,s.y+6,4,Math.min(s.h,220));c.fillStyle='rgba(255,255,255,.07)';c.fillRect(s.x,s.y+6,3,Math.min(s.h,220))}
 return true}
function paintLedge(run,c,l){
 const look=l.look||'rock';
 if(look==='wood'){c.fillStyle='rgba(0,0,0,.3)';c.fillRect(l.x+4,l.y+16,l.w-8,5);for(let x=l.x;x<l.x+l.w;x+=24){c.fillStyle=((x/24)|0)%2?'#5a4029':'#4c3522';c.fillRect(x,l.y,Math.min(23,l.x+l.w-x),12)}c.fillStyle='#8a6a44';c.fillRect(l.x,l.y,l.w,2);c.fillStyle='#2a1c10';c.fillRect(l.x,l.y+12,l.w,4);c.fillStyle='#b9b2a6';for(let x=l.x+6;x<l.x+l.w;x+=24)c.fillRect(x,l.y+5,2,2);return true}
 if(look==='iron'){c.fillStyle='#2b3238';c.fillRect(l.x,l.y,l.w,12);c.strokeStyle='#4a545c';c.lineWidth=1;for(let x=l.x+6;x<l.x+l.w;x+=10){c.beginPath();c.moveTo(x,l.y+2);c.lineTo(x,l.y+11);c.stroke()}c.fillStyle='#6b757e';c.fillRect(l.x,l.y,l.w,2);c.fillStyle='#14181c';c.fillRect(l.x,l.y+12,l.w,3);
  for(let x=l.x+14;x<l.x+l.w-10;x+=Math.max(60,l.w/3)){c.strokeStyle='#20262b';c.lineWidth=3;c.beginPath();c.moveTo(x,l.y+14);c.lineTo(x+18,l.y+40);c.stroke()}return true}
 // rock shelf
 c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(l.x+l.w/2,l.y+26,l.w/2,6,0,0,TAU);c.fill();
 c.save();c.beginPath();c.moveTo(l.x,l.y+2);c.lineTo(l.x+l.w,l.y+2);c.lineTo(l.x+l.w-10,l.y+20);c.quadraticCurveTo(l.x+l.w/2,l.y+32,l.x+10,l.y+20);c.closePath();c.clip();c.fillStyle=pat(run,c,'rock');c.fillRect(l.x,l.y,l.w,34);c.restore();
 c.fillStyle='#34573f';c.fillRect(l.x+2,l.y,l.w-4,4);c.fillStyle='rgba(180,220,190,.2)';c.fillRect(l.x+2,l.y+4,l.w-4,1.5);return true}
function drawMover(run,c,m){
 if(m.look==='raft'){c.fillStyle='rgba(0,0,0,.3)';c.fillRect(m.x+4,m.y+14,m.w-8,6);for(let i=0;i<5;i++){c.fillStyle=i%2?'#5b4128':'#4a331f';c.beginPath();c.roundRect(m.x+i*m.w/5,m.y,m.w/5-1,14,5);c.fill()}c.fillStyle='#b99a64';c.fillRect(m.x+8,m.y+3,m.w-16,2);c.fillRect(m.x+8,m.y+9,m.w-16,2);
  run.fx.glow(c,m.x+m.w/2,m.y+16,30,'rgba(140,200,255,',.12);return}
 if(m.look==='basket'){const top=560;c.strokeStyle='#8b7350';c.lineWidth=2;c.beginPath();c.moveTo(m.x+12,m.y);c.lineTo(m.x+m.w/2,top);c.lineTo(m.x+m.w-12,m.y);c.stroke();c.beginPath();c.moveTo(m.x+m.w/2,top);c.lineTo(m.x+m.w/2,top-20);c.stroke();
  c.fillStyle='#3a2d20';c.beginPath();c.arc(m.x+m.w/2,top-22,9,0,TAU);c.fill();c.fillStyle='#6b5536';c.beginPath();c.roundRect(m.x,m.y,m.w,22,[2,2,8,8]);c.fill();c.strokeStyle='#3a2d20';c.lineWidth=1.5;for(let x=m.x+6;x<m.x+m.w;x+=9){c.beginPath();c.moveTo(x,m.y+2);c.lineTo(x+4,m.y+20);c.stroke()}c.fillStyle='#9c7d52';c.fillRect(m.x,m.y,m.w,3);return}
 if(m.look==='cage'){const on=m.active,top=420;c.strokeStyle='#4b5560';c.lineWidth=3;c.beginPath();c.moveTo(m.x+m.w/2,top);c.lineTo(m.x+m.w/2,m.y-90);c.stroke();
  c.fillStyle='#2b3238';c.fillRect(m.x,m.y,m.w,12);c.fillStyle='#6b757e';c.fillRect(m.x,m.y,m.w,2);c.strokeStyle='rgba(120,135,150,.8)';c.lineWidth=2;c.strokeRect(m.x+2,m.y-92,m.w-4,92);for(let x=m.x+14;x<m.x+m.w-4;x+=16){c.beginPath();c.moveTo(x,m.y-92);c.lineTo(x,m.y-60);c.stroke()}
  c.save();c.translate(m.x+m.w/2,top);c.rotate(on?run.time*2:0);c.strokeStyle=on?'#c9a24a':'#5d646c';c.lineWidth=4;c.beginPath();c.arc(0,0,16,0,TAU);c.stroke();for(let k=0;k<8;k++){const a=k/8*TAU;c.beginPath();c.moveTo(Math.cos(a)*16,Math.sin(a)*16);c.lineTo(Math.cos(a)*22,Math.sin(a)*22);c.stroke()}c.restore();
  if(on)run.fx.glow(c,m.x+m.w/2,m.y-40,40,'rgba(255,200,110,',.25)}}

/* ------------------------------------------------------------------ backdrop: sky, moon, clouds, sea, the distant lighthouse */
function makeBack(run){
 const R=rng(77),B={};
 B.cloud=canvas(1024,180);let x=B.cloud.getContext('2d');for(let i=0;i<90;i++){const cx=R()*1024,cy=60+R()*80,r=30+R()*70;const g=x.createRadialGradient(cx,cy,0,cx,cy,r);g.addColorStop(0,'rgba(60,76,92,.55)');g.addColorStop(1,'rgba(60,76,92,0)');x.fillStyle=g;x.fillRect(cx-r,cy-r,r*2,r*2);for(const dx of[-1024,1024]){x.fillStyle=g;x.save();x.translate(dx,0);x.fillRect(cx-r,cy-r,r*2,r*2);x.restore()}}
 // the dark lighthouse on its crag (silhouette, lit windows, lamp housing)
 B.tower=canvas(220,420);x=B.tower.getContext('2d');x.fillStyle='#0a0f16';x.beginPath();x.moveTo(0,420);x.lineTo(20,330);x.lineTo(60,300);x.lineTo(160,300);x.lineTo(200,340);x.lineTo(220,420);x.fill();
 x.fillStyle='#121a24';x.beginPath();x.moveTo(78,305);x.lineTo(88,90);x.lineTo(132,90);x.lineTo(142,305);x.closePath();x.fill();
 x.fillStyle='rgba(255,255,255,.05)';x.beginPath();x.moveTo(78,305);x.lineTo(88,90);x.lineTo(96,90);x.lineTo(88,305);x.fill();
 x.fillStyle='#1a2430';for(let y=120;y<300;y+=46)x.fillRect(80+(y-90)*.05,y,62-(y-90)*.1,5);
 x.fillStyle='#0d131b';x.fillRect(76,78,68,12);x.fillRect(84,40,52,38);x.beginPath();x.moveTo(80,40);x.lineTo(110,14);x.lineTo(140,40);x.fill();x.fillRect(108,4,4,12);
 x.fillStyle='#9dffb0';x.globalAlpha=.85;x.fillRect(90,46,40,26);x.globalAlpha=1;x.fillStyle='rgba(157,255,176,.5)';for(const y of[150,210,260])x.fillRect(106,y,7,10);
 B.ver=1;return B}
function drawBackground(run,c){
 const W=E.W,cam=run.camera,t=run.time,gk=run.goldK||0;
 if(!run.sky||run.skyW!==W){run.skyW=W;run.sky=canvas(W,H);const x=run.sky.getContext('2d'),g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#02050b');g.addColorStop(.45,'#0b1624');g.addColorStop(.75,'#16272f');g.addColorStop(1,'#0b141a');x.fillStyle=g;x.fillRect(0,0,W,H);
  run.skyGold=canvas(W,H);const y=run.skyGold.getContext('2d'),h=y.createLinearGradient(0,0,0,H);h.addColorStop(0,'#0b0a18');h.addColorStop(.5,'#2a2440');h.addColorStop(.8,'#6a4a3a');h.addColorStop(1,'#2a1e1a');y.fillStyle=h;y.fillRect(0,0,W,H)}
 c.drawImage(run.sky,0,0);if(gk>0){c.globalAlpha=gk;c.drawImage(run.skyGold,0,0);c.globalAlpha=1}
 const py=clamp((cam.y-300)*.06,-20,40);
 // moon
 const mx=W*.24-cam.x*.012,my=92-py;run.fx.glow(c,mx,my,150,'rgba(170,200,230,',.35);c.fillStyle='#e9eef2';c.beginPath();c.arc(mx,my,30,0,TAU);c.fill();c.fillStyle='rgba(150,165,180,.5)';c.beginPath();c.arc(mx-8,my-6,7,0,TAU);c.arc(mx+9,my+7,5,0,TAU);c.arc(mx+4,my-12,3,0,TAU);c.fill();
 // lightning sheet behind the clouds
 if(run.skyFlash>0){c.fillStyle='rgba(200,220,255,'+(run.skyFlash*.25)+')';c.fillRect(0,0,W,H*.6)}
 // cloud bands (two speeds)
 const B=run.back;for(const [k,sp,y,a] of[[.03,6,30,.9],[.07,14,110,.7]]){let ox=-((cam.x*k+t*sp)%1024);c.globalAlpha=a;for(let x=ox;x<W;x+=1024)c.drawImage(B.cloud,x,y-py);c.globalAlpha=1}
 // sea and moon glitter
 const sy=330-py*2;c.fillStyle='#0a161d';c.fillRect(0,sy,W,H-sy);const sg=c.createLinearGradient(0,sy,0,sy+60);sg.addColorStop(0,'rgba(120,160,180,.25)');sg.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=sg;c.fillRect(0,sy,W,60);
 c.fillStyle='rgba(220,235,245,.5)';for(let i=0;i<26;i++){const k=Math.sin(t*1.7+i*2.1);if(k<.3)continue;const gx=mx+((i*37)%140)-70,gy=sy+6+i*3.4;c.globalAlpha=(k-.3)*.9;c.fillRect(gx-6-i,gy,12+i*.8,1.5)}c.globalAlpha=1;
 // far crags (parallax .2) and the dark lighthouse (parallax .05) — hidden once you stand on its gallery
 c.fillStyle='#0d161e';c.beginPath();c.moveTo(0,H);for(let x=0;x<=W+40;x+=40){const wx=x+cam.x*.2;c.lineTo(x,sy-18-((Math.sin(wx*.004)+Math.sin(wx*.011+1))*22+24))}c.lineTo(W,H);c.fill();
 const lt=def.lighthouseScreen(run);if(lt.vis>0){c.globalAlpha=lt.vis;c.drawImage(B.tower,lt.x-110,lt.y-50);
  // the rotating cursed beam in the sky (decorative outside the cliffs)
  if(!run.lensBroken){const a=t*.9;c.save();c.globalCompositeOperation='lighter';for(const s of[1,-1]){const ang=a+(s<0?Math.PI:0),dx=Math.cos(ang),k=Math.abs(dx);if(k<.08)continue;const len=600*k,g=c.createLinearGradient(lt.x,lt.y,lt.x+dx*len,lt.y);g.addColorStop(0,'rgba(157,255,176,.35)');g.addColorStop(1,'rgba(157,255,176,0)');c.fillStyle=g;c.beginPath();c.moveTo(lt.x,lt.y);c.lineTo(lt.x+dx*len,lt.y-50*k);c.lineTo(lt.x+dx*len,lt.y+50*k);c.closePath();c.fill()}c.restore()}
  run.fx.glow(c,lt.x,lt.y,60,run.lensBroken?'rgba(255,214,120,':'rgba(157,255,176,',.7);c.globalAlpha=1}
 // near sea stacks (parallax .45)
 c.fillStyle='#0a1118';for(let i=0;i<14;i++){const wx=i*760+200,x=wx-cam.x*.45;if(x<-200||x>W+200)continue;const h=90+(i*53)%110;c.beginPath();c.moveTo(x-60,sy+60);c.lineTo(x-34,sy+40-h);c.lineTo(x+8,sy+30-h*1.1);c.lineTo(x+40,sy+44-h*.8);c.lineTo(x+70,sy+60);c.fill()}
}

/* ------------------------------------------------------------------ world back layer: cave walls, the tower interior, watchtowers, decor */
function drawBack(run,c){
 const cam=run.camera,W=E.W,L=cam.x-60,R=cam.x+W+60,cfg=run.cfg,t=run.time;
 // cave back wall
 if(R>5000&&L<7300){c.save();c.beginPath();c.rect(5000,860,2300,300);c.clip();c.fillStyle=pat(run,c,'cave');c.fillRect(Math.max(5000,L),860,Math.min(7300,R)-Math.max(5000,L),300);c.fillStyle='rgba(2,6,12,.55)';c.fillRect(Math.max(5000,L),860,Math.min(7300,R)-Math.max(5000,L),300);c.restore();
  // waterfall of seawater through the sinkhole, the mural plaque
  const wx=5440;c.fillStyle='rgba(120,170,200,.16)';c.fillRect(wx,860,30,280);c.fillStyle='rgba(220,240,255,.25)';for(let i=0;i<6;i++){const y=860+((t*260+i*47)%280);c.fillRect(wx+4+(i%3)*8,y,3,18)}
  const m=cfg.lanterns.mural;c.fillStyle='#2a2f38';c.fillRect(m-50,1020,100,70);c.strokeStyle='#8a7a5a';c.lineWidth=2;c.strokeRect(m-50,1020,100,70);c.strokeStyle='#c9a24a';c.lineWidth=2;for(let i=0;i<4;i++){c.beginPath();c.arc(m-33+i*22,1050,6,0,TAU);c.stroke();if(i<3){c.beginPath();c.moveTo(m-27+i*22,1050);c.lineTo(m-17+i*22,1050);c.stroke()}}c.fillStyle='#ffd36b';c.font='700 11px Georgia';c.textAlign='center';c.fillText('☀ ☀ ☀ ☀',m,1078)}
 // tower interior back wall, windows with moonlight, the spiral stair silhouette
 if(R>7300&&L<8780){c.save();c.beginPath();c.rect(7300,380,1480,770);c.clip();c.fillStyle=pat(run,c,'brick');c.fillRect(Math.max(7300,L),380,Math.min(8780,R)-Math.max(7300,L),770);c.fillStyle='rgba(4,6,10,.5)';c.fillRect(Math.max(7300,L),380,Math.min(8780,R)-Math.max(7300,L),770);
  for(const [wx,wy] of[[7520,640],[8100,560],[8650,860],[7700,1000]]){c.fillStyle='#0b1622';c.beginPath();c.roundRect(wx-20,wy-40,40,80,[20,20,2,2]);c.fill();c.fillStyle='rgba(170,200,230,.35)';c.fillRect(wx-2,wy-40,4,80);c.fillRect(wx-20,wy-4,40,4);c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(wx,wy,wx+160,wy+260);g.addColorStop(0,'rgba(150,190,230,.16)');g.addColorStop(1,'rgba(150,190,230,0)');c.fillStyle=g;c.beginPath();c.moveTo(wx-20,wy-30);c.lineTo(wx+20,wy+40);c.lineTo(wx+200,wy+300);c.lineTo(wx+110,wy+300);c.closePath();c.fill();c.restore()}
  // great central chain and counterweights
  c.strokeStyle='#3a4148';c.lineWidth=5;c.setLineDash([10,6]);c.beginPath();c.moveTo(8200,380);c.lineTo(8200,700);c.stroke();c.setLineDash([]);c.fillStyle='#2b3238';c.fillRect(8180,700-(run.state.levers?.A&&run.state.levers?.B?120:0),40,50);
  c.restore()}
 // watchtower scaffolds (poles from the cliff top to the platform)
 for(const tw of[{x0:2840,x1:3030,top:600,base:920},{x0:4050,x1:4220,top:600,base:920}]){if(tw.x1<L||tw.x0>R)continue;c.strokeStyle='#3a2a1a';c.lineWidth=7;for(const px of[tw.x0+8,tw.x1-8]){c.beginPath();c.moveTo(px,tw.top);c.lineTo(px,tw.base);c.stroke()}c.lineWidth=3;c.strokeStyle='#2c2014';for(let y=tw.top+30;y<tw.base-20;y+=70){c.beginPath();c.moveTo(tw.x0+8,y);c.lineTo(tw.x1-8,y+60);c.moveTo(tw.x1-8,y);c.lineTo(tw.x0+8,y+60);c.stroke()}
  c.fillStyle='#2a1c10';c.beginPath();c.moveTo(tw.x0-10,tw.top-110);c.lineTo((tw.x0+tw.x1)/2,tw.top-160);c.lineTo(tw.x1+10,tw.top-110);c.closePath();c.fill();c.fillRect(tw.x0+2,tw.top-110,6,110);c.fillRect(tw.x1-8,tw.top-110,6,110)}
 // wreck hulls on the shore
 for(const [wx,wy] of cfg.decor.wrecks){if(wx+200<L||wx-200>R)continue;c.fillStyle='#24190f';c.beginPath();c.moveTo(wx-150,wy);c.quadraticCurveTo(wx-170,wy-90,wx-90,wy-110);c.lineTo(wx+120,wy-80);c.quadraticCurveTo(wx+160,wy-20,wx+130,wy);c.closePath();c.fill();c.strokeStyle='#3d2a18';c.lineWidth=2;for(let i=0;i<5;i++){c.beginPath();c.moveTo(wx-140+i*6,wy-20-i*18);c.lineTo(wx+130-i*4,wy-12-i*15);c.stroke()}c.strokeStyle='#2a1d12';c.lineWidth=6;c.beginPath();c.moveTo(wx-20,wy-100);c.lineTo(wx+30,wy-260);c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(wx+30,wy-260);c.lineTo(wx+130,wy-60);c.stroke()}
 // gallery railing behind the hero and the lamp-room facade
 if(R>8600){const y=cfg.arena.floor;c.strokeStyle='#39424a';c.lineWidth=3;c.beginPath();c.moveTo(Math.max(8610,L),y-50);c.lineTo(Math.min(10960,R),y-50);c.stroke();for(let x=Math.ceil(Math.max(8610,L)/48)*48;x<Math.min(10960,R);x+=48){c.beginPath();c.moveTo(x,y-50);c.lineTo(x,y);c.stroke()}
  if(R>10700){c.fillStyle='#1c2128';c.fillRect(10930,0,170,y);c.fillStyle='#2a3038';c.beginPath();c.moveTo(10900,140);c.lineTo(11100,40);c.lineTo(11100,140);c.fill()}}
}
function drawDecor(run,c){
 const cam=run.camera,W=E.W,L=cam.x-80,R=cam.x+W+80,cfg=run.cfg,t=run.time,d=cfg.decor;
 for(const [x,y] of d.posts){if(x<L||x>R)continue;c.fillStyle='#2d2116';c.fillRect(x-6,y-60,12,160);c.fillStyle='#4a3826';c.fillRect(x-6,y-60,12,4)}
 for(const [x,y] of d.lamps){if(x<L||x>R)continue;c.strokeStyle='#22272d';c.lineWidth=4;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-90);c.lineTo(x+16,y-90);c.stroke();const sway=Math.sin(t*2+x)*2;run.fx.glow(c,x+16+sway,y-70,46,'rgba(255,190,110,',.5);c.fillStyle='#2b2620';c.fillRect(x+9+sway,y-86,14,4);c.fillStyle='#ffd27a';c.fillRect(x+10+sway,y-82,12,14);c.fillStyle='#2b2620';c.fillRect(x+9+sway,y-68,14,3)}
 for(const [x,y] of d.crystals){if(x<L||x>R)continue;const p=.6+.4*Math.sin(t*2+x);run.fx.glow(c,x,y-20,40,'rgba(110,220,255,',.35*p);c.fillStyle='#7fd8ff';c.beginPath();c.moveTo(x-10,y);c.lineTo(x-4,y-36);c.lineTo(x+2,y);c.fill();c.fillStyle='#bdefff';c.beginPath();c.moveTo(x,y);c.lineTo(x+7,y-26);c.lineTo(x+12,y);c.fill()}
 for(const [x,y] of d.bells){if(x<L||x>R)continue;const sw=Math.sin(t*1.4+x)*.08+(run.bellT>t?Math.sin(t*30)*.35:0);c.save();c.translate(x,y-30);c.rotate(sw);c.fillStyle='#7a5c22';c.beginPath();c.moveTo(-12,24);c.quadraticCurveTo(-12,0,0,0);c.quadraticCurveTo(12,0,12,24);c.closePath();c.fill();c.fillStyle='#c9a24a';c.fillRect(-14,22,28,4);c.restore()}
 for(const [x,y] of d.drips){if(x<L||x>R)continue;const k=(t*.9+x*.013)%1;c.fillStyle='rgba(170,210,240,.7)';c.fillRect(x,y+k*250,2,6)}
}
/* rain, sea spray, fog: screen-space, pooled, cheap */
function weather(run,c){
 const W=E.W,cam=run.camera,inside=def.inside(run),t=run.time,k=run.rainK??1;
 if(!inside&&k>0){const n=run.lowFx?40:80;c.save();c.strokeStyle='rgba(180,200,220,'+(.35*k)+')';c.lineWidth=1.2;c.beginPath();for(let i=0;i<n;i++){const x=((i*157+t*40-cam.x*.9)%(W+60)+W+60)%(W+60)-30,y=((i*89+t*720)%(H+40))-20;c.moveTo(x,y);c.lineTo(x-5,y+16)}c.stroke();c.restore()}
 // fog banks drifting low over the ground
 const fogA=inside?.18:.28;for(let i=0;i<3;i++){const x=((i*530-t*(12+i*5)-cam.x*.15)%(W+700)+W+700)%(W+700)-350,y=H*.62+i*40;run.fx.glow(c,x,y,300,inside?'rgba(60,90,110,':'rgba(120,150,160,',fogA)}
}

/* ------------------------------------------------------------------ the Lightkeeper (mini-boss) */
const KR={hip:66,thigh:33,shin:33,torso:58,head:15,shoulder:24,arm:[28,26],legW:12,armW:10,scale:1.32};
class Keeper{
 constructor(run){this.run=run;this.cfg=run.cfg.boss;this.a=run.cfg.arena;this.max=this.cfg.hp;this.rand=rng(7);this.reset()}
 get floor(){return this.a.floor}
 reset(){Object.assign(this,{x:this.a.x1-70,dir:-1,hp:this.max,state:'dormant',t:0,animT:0,flash:0,cool:1.2,rage:false,acts:0,hook:null,sweep:null,aim:null,locked:false,deadT:0,shake:0,walking:false,lean:0,spin:0,hitDone:false})}
 box(){return{x:this.x-38,y:this.floor-196,w:76,h:196}}
 set(s,t){this.state=s;this.t=t}
 get open(){return['recover','dazed','hookBack'].includes(this.state)}
 start(){const run=this.run;this.reset();this.set('intro',2.2);this.x=this.a.x1-40;run.audio.play('laugh',{vol:1});run.banner={t:2.6,text:text(run.lang,'keeperIntro')};run.camera.shake=4}
 damage(amount,kind,dir){
  const run=this.run;if(['dormant','dying','dead'].includes(this.state))return'none';const bx=this.box(),cy=bx.y+bx.h*.45;
  if(this.state==='intro'||this.state==='summon'){run.fx.spark(this.x-dir*24,cy,'#cfe3ff',8);run.audio.play('clang',{vol:.5,rate:.8});return'blocked'}
  const k=this.open?this.cfg.openScale:1,dmg=Math.round(amount*k);
  this.hp=Math.max(0,this.hp-dmg);this.flash=.12;this.shake=dir*5;run.audio.play('keeperHurt',{vol:.6,rate:.9+Math.random()*.2,gap:.22});run.audio.play('fleshHit',{vol:.6,rate:.85});
  run.fx.text(String(dmg),this.x,bx.y-16,k>1?'#ffd36b':kind==='dash'?'#9fe4ff':'#ffffff',k>1);run.fx.burst(this.x,cy,'#b8ffcf',6);
  if(this.hp<=0){run.def.keeperDown(run);return'hit'}
  if(!this.rage&&this.hp<=this.cfg.rageAt)this.enterRage();
  return'hit'}
 enterRage(){const run=this.run;this.rage=true;this.hook=null;this.sweep=null;this.set('summon',1.6);run.audio.play('laugh',{vol:1,rate:.85});run.banner={t:2.6,text:text(run.lang,'rage')};run.camera.shake=8;run.skyFlash=1;run.def.spawnWave(run,'boss',1)}
 update(dt){
  const run=this.run,p=run.p,a=this.a,g=this.floor;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);this.shake*=Math.pow(.002,dt);
  if(this.state==='dormant')return;if(this.state==='dying'||this.state==='dead'){this.deadT+=dt;if(this.state==='dying'&&this.deadT>2.2)this.state='dead';return}
  this.t-=dt;this.cool-=dt;const f=this.rage?.8:1,px=p.x+p.w/2,dx=px-this.x,dist=Math.abs(dx),lo=a.x0+80,hi=a.x1-80;this.walking=false;this.spin=Math.max(0,this.spin-dt*2);
  this.updateHook(dt);this.updateSweep(dt);
  switch(this.state){
   case'intro':this.walking=this.x>a.x1-380;if(this.walking)this.x-=150*dt;this.dir=-1;if(this.t<=0){this.set('idle',.2);this.cool=.6}return;
   case'summon':this.lean=-.2;if(this.t<=0){this.set('idle',.2);this.cool=.5}return;
   case'flailWind':this.spin=1;this.lean=-.12;if(this.t<=0){this.set('flail',.3);this.hitDone=false;run.audio.play('flail',{vol:1})}return;
   case'flail':{const k=1-this.t/.3;this.lean=.2;if(!this.hitDone&&k>.3){const box={x:this.dir>0?this.x:this.x-200,y:g-130,w:200,h:130};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(20,this.dir,this,340)}run.fx.dust(this.x+this.dir*150,g,4,this.dir)}
    if(this.t<=0)this.set('recover',1.0*f);return}
   case'recover':this.lean*=.9;if(this.t<=0){this.set('idle',.2)}return;
   case'hookAim':{this.dir=dx>0?1:-1;if(this.t>.25){this.aim={x:px,y:p.y+p.h*.5};this.locked=false}else this.locked=true;
    if(this.t<=0){const sy=g-120,tt=Math.max(.12,Math.abs(this.aim.x-this.x)/800);this.hook={x:this.x+this.dir*36,y:sy,vx:this.dir*800,vy:clamp((this.aim.y-sy)/tt,-300,300),dist:0,back:false};this.set('hookOut',2);run.audio.play('chain',{vol:.9});run.audio.play('hook',{vol:.8})}return}
   case'hookOut':if(!this.hook){this.set('hookBack',.8*f)}return;
   case'hookBack':if(this.t<=0)this.set('idle',.2);return;
   case'sweepCharge':this.lean=-.25;if(this.t<=0){this.sweep={x:a.x1-30,dir:-1,passes:this.rage?2:1,hit:false};this.set('sweeping',9);run.audio.play('sweep',{vol:1});run.camera.shake=4}return;
   case'sweeping':this.lean=-.25;if(!this.sweep){this.set('dazed',1.3)}return;
   case'dazed':this.lean=.15;if(this.t<=0){this.set('idle',.2);this.cool=.4}return}
  // idle: close the distance, then choose an attack (each one ends in an opening)
  this.dir=dx>0?1:-1;if(dist>180){this.x=clamp(this.x+this.dir*(this.rage?100:78)*dt,lo,hi);this.walking=true}this.lean*=.9;
  if(!p.dead&&p.dash<=0&&overlap(p,this.box())){p.x+=(px<this.x?-1:1)*160*dt}
  if(this.cool>0||p.dead)return;this.acts++;
  const sweepNow=this.rage?this.acts%2===0:this.acts%3===0;
  if(sweepNow){this.set('sweepCharge',1.1);this.cool=1.2;run.audio.play('sweepCharge',{vol:1});run.audio.play('laugh',{vol:.5,rate:1.2});return}
  if(dist<210){this.set('flailWind',.75*f);this.cool=1.4*f;run.audio.play('flailSpin',{vol:.9});return}
  if(dist<600){this.set('hookAim',.65);this.cool=1.3*f;this.aim={x:px,y:p.y+p.h*.5};this.locked=false;run.audio.play('chain',{vol:.5,rate:1.3});return}
  this.cool=.3}
 updateHook(dt){const h=this.hook;if(!h)return;const run=this.run,p=run.p;
  if(!h.back){h.x+=h.vx*dt;h.y+=h.vy*dt;h.dist+=Math.abs(h.vx)*dt;const box={x:h.x-10,y:h.y-10,w:20,h:20};
   if(!p.dead&&overlap(box,p)){h.back=true;const toward=-Math.sign(h.vx)||1;
    if(p.block&&p.dir===toward){run.audio.play('clang',{vol:.8});run.fx.spark(h.x,h.y,'#cfe3ff',10);run.hurtPlayer(4,Math.sign(h.vx),null,60)}
    else{run.hurtPlayer(10,toward,null,480);run.fx.spark(h.x,h.y,'#9dffb0',10);run.fx.text('⟵',p.x+p.w/2,p.y-20,'#9dffb0')}}
   if(h.dist>560||h.x<this.a.x0||h.x>this.a.x1)h.back=true}
  else{const dx=this.x+this.dir*30-h.x,dy=this.floor-120-h.y,d=Math.hypot(dx,dy);if(d<40){this.hook=null;return}h.x+=dx/d*950*dt;h.y+=dy/d*950*dt}}
 updateSweep(dt){const s=this.sweep;if(!s)return;const run=this.run,p=run.p,a=this.a;s.x+=s.dir*540*dt;
  const cx=p.x+p.w/2,cover=a.pillars.some(x=>Math.abs(cx-x)<46);
  if(!s.hit&&!p.dead&&Math.abs(cx-s.x)<44&&p.y+p.h>this.floor-200){if(cover){s.hit=true;run.fx.text(text(run.lang,'hidden'),cx,p.y-20,'#9ff0b8')}else if(p.dash<=0){s.hit=true;if(run.hurtPlayer(20,0,null,0))run.fx.burst(cx,p.y+p.h*.4,'#c8ffd6',14)}}
  if((s.dir<0&&s.x<a.x0+30)||(s.dir>0&&s.x>a.x1-30)){s.passes--;if(s.passes>0){s.dir*=-1;s.hit=false;run.audio.play('sweep',{vol:.9})}else this.sweep=null}}
 draw(c){
  const run=this.run;if(this.state==='dormant')return;const g=this.floor,st=this.state,dying=st==='dying'||st==='dead';
  const alpha=st==='dead'?clamp(1-(this.deadT-2.2)/1,0,1):1;if(alpha<=0)return;
  // telegraphs
  if(st==='flailWind'){const k=1-this.t/(.75*(this.rage?.8:1));c.save();c.fillStyle='rgba(255,80,50,'+(.1+.25*k)+')';c.beginPath();c.moveTo(this.x,g);c.ellipse(this.x+this.dir*100,g-2,100,12,0,0,TAU);c.fill();c.strokeStyle='rgba(255,90,60,'+(.4+.5*k)+')';c.lineWidth=3;c.stroke();c.restore()}
  if(st==='hookAim'&&this.aim){c.save();c.strokeStyle=this.locked?'rgba(255,60,40,.85)':'rgba(157,255,176,.5)';c.lineWidth=this.locked?3:2;c.setLineDash(this.locked?[]:[8,8]);c.beginPath();c.moveTo(this.x+this.dir*36,g-120);c.lineTo(this.aim.x,this.aim.y);c.stroke();c.restore()}
  const realC=c;if(window.PirateEnemyAnim?.drawBoss?.(run,c,this,{floor:g,h:196}))c=window.PirateEnemyAnim.NULL_CTX;   // animated boss (enemy-anim.js)
  c.save();c.globalAlpha=alpha;
  c.fillStyle='rgba(0,0,0,.35)';c.beginPath();c.ellipse(this.x,g+1,52,8,0,0,TAU);c.fill();
  c.translate(Math.round(this.x+this.shake),g+(dying?Math.min(16,this.deadT*20):0));if(this.dir<0)c.scale(-1,1);c.scale(KR.scale,KR.scale);
  if(dying){const r=-Math.min(1.45,Math.max(0,this.deadT-.7)*1.6);c.translate(-30,0);c.rotate(r);c.translate(30,0)}
  c.lineCap='round';c.lineJoin='round';const fl=this.flash>0,col=(a,b)=>fl?mixHex(a,'#ffffff',.75):a;
  const ph=this.animT*7,s=this.walking?Math.sin(ph):0,bob=this.walking?-Math.abs(Math.cos(ph))*3:Math.sin(this.animT*2)*1;
  const hy=-(KR.thigh+KR.shin)+bob;
  limb(c,-4,hy,-s*.45,KR.thigh,-s*.45-(this.walking?Math.max(0,-Math.cos(ph))*.8:.1),KR.shin,KR.legW,col('#2a2622'),col('#14110e'));
  const lean=this.lean+(st==='intro'?.05:0),sx=Math.sin(lean)*KR.torso,sy=hy-Math.cos(lean)*KR.torso;
  // back arm: the hook and chain
  const ha=st==='hookAim'?1.5:st==='hookOut'?1.7:st==='summon'?-2.6:.3+(-s*.3);const hr=arm(c,sx-4,sy+4,ha,KR.arm[0],ha+(st==='hookAim'?.1:-.3),KR.arm[1],KR.armW,col('#5b5340'),col('#cbb89a'));
  if(!this.hook&&!dying){c.save();c.translate(hr.fx,hr.fy);c.strokeStyle='#8a939c';c.lineWidth=3;c.beginPath();c.arc(0,10,9,-Math.PI*.2,Math.PI*1.1);c.stroke();c.restore()}
  // oilskin coat (long, flared) over the hips
  c.save();c.translate(0,hy);c.rotate(lean);c.fillStyle=col('#8a8158');c.strokeStyle='#0b0d12';c.lineWidth=2.5;c.beginPath();c.moveTo(-KR.shoulder*.8,-KR.torso);c.quadraticCurveTo(0,-KR.torso-8,KR.shoulder*.8,-KR.torso);c.lineTo(KR.shoulder+8+s*6,40);c.lineTo(-KR.shoulder-10+s*6,40);c.closePath();c.fill();c.stroke();
  c.fillStyle=col('#6a6342');c.beginPath();c.moveTo(-3,-KR.torso);c.lineTo(8,-KR.torso*.4);c.lineTo(-2,38);c.lineTo(-8,38);c.closePath();c.fill();c.fillStyle='#1a120c';c.fillRect(-KR.shoulder*.8,-12,KR.shoulder*1.6,6);c.fillStyle='#c9a24a';c.fillRect(-4,-13,8,8);
  for(let i=0;i<4;i++){c.fillStyle='#c9a24a';c.beginPath();c.arc(6,-KR.torso*.8+i*12,2,0,TAU);c.fill()}c.restore();
  limb(c,4,hy,s*.45,KR.thigh,s*.45-(this.walking?Math.max(0,Math.cos(ph))*.8:.1),KR.shin,KR.legW,col('#332d27'),col('#14110e'));
  // head: sou'wester hat, grey beard, the green lens monocle
  c.save();c.translate(sx+Math.sin(lean)*14,sy-14);c.rotate(lean*.5);c.fillStyle=col('#cbb89a');c.strokeStyle='#0b0d12';c.lineWidth=2;c.beginPath();c.ellipse(2,0,KR.head*.85,KR.head,0,0,TAU);c.fill();c.stroke();
  c.fillStyle=col('#9a9a96');c.beginPath();c.moveTo(-8,4);c.quadraticCurveTo(2,30,14,4);c.closePath();c.fill();
  c.fillStyle=col('#5e5636');c.beginPath();c.moveTo(-KR.head*1.4,-4);c.quadraticCurveTo(0,-KR.head*2.1,KR.head*1.2,-6);c.lineTo(KR.head*1.7,-2);c.quadraticCurveTo(0,-KR.head*.6,-KR.head*1.9,2);c.closePath();c.fill();c.stroke();
  run.fx.glow(c,8,-3,16,run.lensBroken?'rgba(255,214,120,':'rgba(157,255,176,',.8);c.fillStyle=run.lensBroken?'#ffd98a':'#b8ffcf';c.beginPath();c.arc(8,-3,4.5,0,TAU);c.fill();c.strokeStyle='#c9a24a';c.lineWidth=1.5;c.stroke();c.restore();
  // front arm: the lantern flail
  const fa=st==='flailWind'?-2.4:st==='flail'?1.3:st==='sweepCharge'||st==='sweeping'?-2.9:st==='recover'?.9:.2+s*.3;const fr=arm(c,sx+3,sy+5,fa,KR.arm[0],fa-.2,KR.arm[1],KR.armW,col('#8a8158'),col('#cbb89a'));
  if(!dying||this.deadT<.7){let bx,by;if(st==='flailWind'){const a=this.animT*16;bx=fr.fx+Math.cos(a)*44;by=fr.fy+Math.sin(a)*30}else if(st==='flail'){bx=fr.fx+80;by=fr.fy+30}else if(st==='sweepCharge'||st==='sweeping'){bx=fr.fx;by=fr.fy-34}else{bx=fr.fx+6;by=fr.fy+42+Math.sin(this.animT*3)*3}
   c.strokeStyle='#7a838c';c.lineWidth=2.5;c.setLineDash([4,3]);c.beginPath();c.moveTo(fr.fx,fr.fy);c.lineTo(bx,by);c.stroke();c.setLineDash([]);
   const hot=st==='flailWind'||st==='sweepCharge'||st==='sweeping';run.fx.glow(c,bx,by,hot?70:44,run.lensBroken?'rgba(255,200,110,':'rgba(157,255,176,',hot?.9:.55);
   c.fillStyle='#2b2f33';c.fillRect(bx-11,by-16,22,5);c.fillStyle=run.lensBroken?'#ffe0a0':'#c8ffd6';c.fillRect(bx-10,by-11,20,20);c.strokeStyle='#2b2f33';c.lineWidth=2;c.strokeRect(bx-10,by-11,20,20);c.beginPath();c.moveTo(bx,by-11);c.lineTo(bx,by+9);c.stroke();c.fillStyle='#2b2f33';c.fillRect(bx-11,by+9,22,4)}
  c.restore();c=realC;
  if(st==='dazed'||st==='recover'){for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(this.x+Math.cos(a)*22-2,g-214+Math.sin(a)*5,4,4)}}
  // the hook in flight
  const h=this.hook;if(h){c.save();c.strokeStyle='#8a939c';c.lineWidth=2.5;c.setLineDash([5,4]);c.beginPath();c.moveTo(this.x+this.dir*30,g-120);c.lineTo(h.x,h.y);c.stroke();c.setLineDash([]);c.translate(h.x,h.y);c.scale(h.vx<0?-1:1,1);c.strokeStyle='#cfd6dc';c.lineWidth=4;c.beginPath();c.arc(0,0,10,-Math.PI*.5,Math.PI*.6);c.stroke();c.beginPath();c.moveTo(10,0);c.lineTo(14,-8);c.stroke();c.restore()}}
 drawSweep(c){const s=this.sweep,run=this.run,a=this.a,g=this.floor;
  if(this.state==='sweepCharge'){const k=1-this.t/1.1;c.save();c.strokeStyle='rgba(200,255,214,'+(.3+.5*k)+')';c.lineWidth=2;c.setLineDash([10,8]);c.beginPath();c.moveTo(a.x1-30,g-260);c.lineTo(a.x1-30,g);c.stroke();c.setLineDash([]);
   c.fillStyle='rgba(200,255,214,'+(.12*k)+')';c.fillRect(a.x0,g-6,a.x1-a.x0,6);c.restore()}
  if(!s)return;c.save();c.globalCompositeOperation='lighter';const gr=c.createLinearGradient(s.x-60,0,s.x+60,0);const col=run.lensBroken?'255,214,120':'190,255,205';gr.addColorStop(0,'rgba('+col+',0)');gr.addColorStop(.5,'rgba('+col+',.55)');gr.addColorStop(1,'rgba('+col+',0)');c.fillStyle=gr;c.fillRect(s.x-60,g-300,120,300);c.restore();
  run.fx.glow(c,s.x,g-10,80,'rgba(190,255,205,',.6)}}

/* ------------------------------------------------------------------ the level definition */
const def={
 id:7,name:{en:'The Dark Lighthouse',az:'Qaranlıq Mayak'},config:BASE+'level-07.json',base:BASE,
 images:[],
 rig:{pose,LOOK,KR},   // exposed for the systems test (walk cycle / pose checks)
 title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),text:(lang,k)=>text(lang,k),
 initialState:()=>({enc:{},lamps:{},lanterns:null,gate:false,crack:0,levers:{},mirrors:null,door:false,keeperDown:false,lens:false,ledge:false,alcove:false}),
 persist(run){const s=run.state;return{enc:{...s.enc},lamps:{...s.lamps},lanterns:[...(s.lanterns||[])],gate:s.gate,crack:s.crack,levers:{...s.levers},mirrors:[...(s.mirrors||[])],door:s.door,keeperDown:s.keeperDown,lens:false,ledge:s.ledge,alcove:s.alcove}},
 async prepare(run){
  run.tex=makeTextures();run.back=makeBack(run);
  const extra=window.PirateMusic?{}:Object.fromEntries(Object.entries(MUSIC).map(([k,f])=>['m_'+k,f]));
  run.audioReady=Promise.all([run.audioReady,run.audio.load(A7,SFX),run.audio.load(A6,{thunderFar:'sfx-thunderFar.ogg'}),Object.keys(extra).length?run.audio.load(AM,extra):null]);
  const pm=run.audio.playMusic.bind(run.audio);run.audio.playMusic=(name,fade)=>window.PirateMusic?pm(name,fade):pm(MUSIC[name]?'m_'+name:name,fade);
  run.lightBuf=canvas(8,8);
  const sk=run.skin;if(sk&&!sk.__l7){sk.__l7=true;const base=sk.draw.bind(sk);sk.draw=(c,p,r)=>{const cine=r?.cine;if(r?.def===def&&cine&&cine.heroPose)return def.drawCineHero(r,c,p,base);return base(c,p,r)}}
  await loadRig(run,'level07');
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  if(!Array.isArray(s.lanterns)||s.lanterns.length!==c.lanterns.list.length)s.lanterns=[...c.lanterns.start];
  if(!Array.isArray(s.mirrors)||s.mirrors.length!==c.mirrors.list.length)s.mirrors=c.mirrors.list.map(m=>m.start);
  for(const k of['enc','lamps','levers'])if(!s[k]||typeof s[k]!=='object')s[k]={};s.crack=clamp(+s.crack||0,0,c.crack.hp);
  run.banner={t:4.5,text:text(run.lang,'title')};run.rand=rng(71);
  run.tide={phase:'calm',t:c.tide.calm,front:c.tide.x0,hit:false};run.tides=0;
  run.litT=0;run.alarmCool=0;run.alarms=0;run.marks=[];run.fires=[];run.quakes=[];run.bellT=0;run.skyFlash=0;run.nextFlash=6;
  run.lanCool=c.lanterns.list.map(()=>0);run.lanPresses=0;run.gateK=s.gate?0:1;run.doorK=s.door?0:1;run.sealT=0;run.mirrorSpin=c.mirrors.list.map(()=>0);run.leverK={A:s.levers.A?1:0,B:s.levers.B?1:0};
  const lift=run.movers.find(m=>m.id===c.levers.lift);if(lift)lift.active=!!(s.levers.A&&s.levers.B);
  run.pending={};for(const e of[...run.enemies]){const d=c.enemies.find(q=>q.id===e.id);if(d?.wave){const[enc,w]=d.wave.split(':');(run.pending[enc]??=[]).push({e,w:+w,d});run.enemies=run.enemies.filter(q=>q!==e)}}
  run.enc={id:null,wave:0,delay:0};run.walls={};for(const k of c.encounters)run.walls[k.id]=0;run.walls.boss=0;
  run.keeper=new Keeper(run);run.arena={active:false};run.cine=null;run.lensBroken=false;run.goldK=0;run.rainK=1;
  if(s.keeperDown){run.keeper.state='dead';run.keeper.hp=0;run.keeper.deadT=99;for(const q of run.pending.boss||[])run.killed.add(q.e.id);run.pending.boss=[]}
  def.computeMoon(run);
  if(!run.skipBtn&&run.root){const b=document.createElement('button');b.className='pl-skip';b.textContent=text(run.lang,'skip');b.style.cssText='position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:5;padding:8px 14px;border-radius:12px;border:2px solid #d8b56a;background:#0d1a29e6;color:#ffe3a0;font:800 14px Arial;display:none';b.onclick=e=>{e.stopPropagation();def.skipStory(run)};run.root.append(b);run.skipBtn=b;
   run.root.addEventListener('pointerdown',e=>{if(run.cine&&run.cine.stage==='story'&&!e.target.closest('button'))def.advance(run)})}
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hinted={};run.hintQueue=resumed?[]:['hTide'];run.hintT=5.5;run.hintsAt={w1:'hWrecker',k1:'hLookout',b2:'hBrute'}},
 music(run){if(run.cine){run.audio.playMusic('triumph',1.2);return}if(run.arena.active&&!['dormant','dead','dying'].includes(run.keeper.state)&&!run.state.keeperDown){run.audio.playMusic('keeper',1.0);return}if(run.enc.id){run.audio.playMusic('battle',1.0);return}run.audio.playMusic('lighthouse',1.4)},
 zone(run){const x=run.p.x+run.p.w/2;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones[run.cfg.zones.length-1]},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 inside(run){const p=run.p,x=p.x+p.w/2,f=p.y+p.h;return(x>5000&&x<7300&&f>900)||(x>7300&&x<8780&&f>560)},
 objectiveHud(run){
  if(run.cine)return'';const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k),p=run.p,cx=p.x+p.w/2;
  if(run.enc.id){const k={e1:'objAmbush',e2:'objGuards'}[run.enc.id];return t(k).replace('{n}',Math.max(1,run.enc.wave))}
  if(z==='shore')return t('objShore');
  if(z==='cliffs')return t('objCliffs').replace('{n}',Object.values(s.lamps).filter(Boolean).length);
  if(z==='caves'){if(cx>6200&&!s.gate)return t('objLanterns');if(s.gate&&cx>6200)return t('objGate');return t('objCaves')}
  if(z==='tower'){const n=(s.levers.A?1:0)+(s.levers.B?1:0);if(!s.enc.e2)return t('objGuards').replace('{n}',1);return n<2?t('objLevers').replace('{n}',n):t('objLift')}
  if(s.keeperDown)return t('objLens');if(!s.door)return t('objMirrors');if(run.arena.active)return t('objKeeper');return t('objDoor')},
 dynamicSolids(run){const list=[],c=run.cfg,s=run.state;
  for(const k of c.encounters){const w=run.walls[k.id];if(w>.05)for(const x of[k.wallL,k.wallR])list.push({x:x-15,y:k.floor-420*w,w:30,h:420*w,style:'net'})}
  if(run.walls.boss>.05)list.push({x:c.arena.x0-15,y:c.arena.floor-420*run.walls.boss,w:30,h:420*run.walls.boss,style:'net'});
  const gt=c.lanterns.gate;if(run.gateK>.05)list.push({x:gt.x-15,y:gt.floor-(gt.floor-gt.top)*run.gateK,w:30,h:(gt.floor-gt.top)*run.gateK,style:'gate'});
  const dr=c.mirrors.door;if(run.doorK>.05)list.push({x:dr.x-16,y:dr.floor-(dr.floor-dr.top)*run.doorK,w:32,h:(dr.floor-dr.top)*run.doorK,style:'door'});
  const ck=c.crack;if(s.crack<ck.hp)list.push({x:ck.x,y:ck.y,w:ck.w,h:ck.h,style:'crack'});
  return list},
 cameraLock(run){if(!run.arena.active||run.cine?.stage==='story'||run.cine?.stage==='outro')return null;const a=run.cfg.arena,W=E.W,p=run.p;const x=clamp(p.x+p.w/2-W/2,a.x0-60,a.x1+60-W);return{x:x+(W-960)/2,y:a.floor-H*.84}},
 bossHud(run){const st=run.keeper.state;return run.arena.active&&!run.cine&&!['dormant','dead','dying'].includes(st)},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg,cx=p.x+p.w/2;
  run.banner.t=Math.max(0,run.banner.t-dt);run.skyFlash=Math.max(0,run.skyFlash-dt*2.2);
  run.nextFlash-=dt;if(run.nextFlash<=0&&!def.inside(run)){run.nextFlash=9+run.rand()*8;run.skyFlash=1;setTimeout(()=>run.phase==='play'&&run.audio.play('thunderFar',{vol:.55}),700)}
  if(run.cine){def.updateCine(run,dt);return}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:4.6,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-cx)<520){def.hint(run,h);delete run.hintsAt[id]}}
  if(cx>2540&&cx<2700)def.hint(run,'hBeam');if(cx>2800&&cx<2900&&p.y+p.h<700)def.hint(run,'hLamp');if(cx>6250&&!s.gate)def.hint(run,'hLantern');if(cx>7340&&s.enc.e2)def.hint(run,'hLevers');if(cx>8800&&!s.door)def.hint(run,'hMirror');
  def.updateTide(run,dt);def.updateBeam(run,dt);def.updateMarks(run,dt);def.updateHazards(run,dt);
  // linked lanterns → tide gate; levers → gear lift; mirrors → door
  for(let i=0;i<run.lanCool.length;i++)run.lanCool[i]=Math.max(0,run.lanCool[i]-dt);
  run.gateK+=((s.gate?0:1)-run.gateK)*Math.min(1,dt*(s.gate?1.6:6));
  for(const k of['A','B'])run.leverK[k]+=((s.levers[k]?1:0)-run.leverK[k])*Math.min(1,dt*8);
  def.computeMoon(run);if(run.moon.seal&&!s.door){run.sealT+=dt;if(run.sealT>.6){s.door=true;run.banner={t:3.2,text:text(run.lang,'sealOn')};run.audio.play('seal',{vol:1});run.audio.play('gateGrind',{vol:.8});run.camera.shake=4;run.save()}}else run.sealT=0;
  run.doorK+=((s.door?0:1)-run.doorK)*Math.min(1,dt*(s.door?1.6:6));
  for(let i=0;i<run.mirrorSpin.length;i++)run.mirrorSpin[i]=Math.max(0,run.mirrorSpin[i]-dt*3);
  // secrets: the hidden ledge and the alcove
  if(!s.ledge&&cx>4290&&cx<4420&&p.ground&&Math.abs(p.y+p.h-470)<4){s.ledge=true;run.banner={t:3,text:text(run.lang,'secretLedge')};run.audio.play('secret',{vol:.9})}
  if(!s.alcove&&s.crack>=c.crack.hp&&cx<5380&&cx>5000&&p.y+p.h>1100){s.alcove=true;run.audio.play('secret',{vol:.9})}
  // cave drips
  if(def.inside(run)&&run.rand()<dt*.8)run.audio.play('drip',{vol:.25,rate:.8+run.rand()*.5});
  def.updateEncounters(run,dt);
  if(run.arena.active)run.keeper.update(dt);
  run.walls.boss+=((run.arena.active&&!run.state.keeperDown?1:0)-run.walls.boss)*Math.min(1,dt*6);
 },
 hint(run,k){if(run.hinted[k])return;run.hinted[k]=true;run.banner={t:4.6,text:text(run.lang,k),small:true}},
 /* tide surge on the shore flats: calm → warn (water draws back) → surge (washes inland) → recede */
 updateTide(run,dt){const td=run.tide,c=run.cfg.tide,p=run.p,cx=p.x+p.w/2,near=cx>c.x0-700&&cx<c.x1+500;td.t-=dt;
  if(td.phase==='calm'&&td.t<=0){td.phase='warn';td.t=c.warn;if(near){run.audio.play('tideWarn',{vol:.9});def.hint(run,'hTide')}}
  else if(td.phase==='warn'&&td.t<=0){td.phase='surge';td.t=c.surge;td.hit=false;td.front=c.x0;run.tides++;if(near){run.audio.play('surge',{vol:1});run.camera.shake=Math.max(run.camera.shake,3)}}
  else if(td.phase==='surge'){const k=clamp((1-td.t/c.surge)*1.5,0,1);td.front=c.x0+(c.x1-c.x0)*k;
   if(!td.hit&&!p.dead&&p.ground&&p.y+p.h>=c.y-4&&cx>c.x0&&cx<Math.min(c.x1,td.front)){td.hit=true;if(run.hurtPlayer(c.dmg,1,null,c.push,true))run.fx.splash(cx,p.y+p.h,10)}
   if(td.t<=0){td.phase='recede';td.t=1.0}}
  else if(td.phase==='recede'&&td.t<=0){td.phase='calm';td.t=c.calm}},
 tideLevel(run){const td=run.tide,c=run.cfg.tide;if(td.phase==='warn')return -clamp(1-td.t/c.warn,0,1)*.6;if(td.phase==='surge')return 1;if(td.phase==='recede')return clamp(td.t,0,1);return 0},
 /* the lighthouse beam over the cliffs */
 beamX(run){const b=run.cfg.beam,u=(run.time%(2*b.sweep))/b.sweep,s=u<1?u:2-u,e=(1-Math.cos(Math.PI*s))/2;return b.x0+(b.x1-b.x0)*e},
 towerAt(run,x){return run.cfg.beam.towers.find(t=>x>=t.from&&x<t.to)},
 covered(run){const p=run.p,cx=p.x+p.w/2,f=p.y+p.h;return run.cfg.beam.covers.some(([x,y])=>Math.abs(cx-x)<38&&Math.abs(f-y)<12)},
 updateBeam(run,dt){const b=run.cfg.beam,p=run.p,cx=p.x+p.w/2,s=run.state;run.beam=def.beamX(run);run.alarmCool=Math.max(0,run.alarmCool-dt);
  const tw=def.towerAt(run,cx),inZone=cx>b.x0-40&&cx<b.x1+40&&!p.dead&&!run.enc.id,active=tw&&!s.lamps[tw.id];
  run.inBeam=inZone&&Math.abs(cx-run.beam)<b.half&&!def.covered(run);
  if(run.inBeam&&active)run.litT+=dt;else run.litT=Math.max(0,run.litT-dt*2);
  if(run.litT>=b.notice&&run.alarmCool<=0&&active){run.alarmCool=b.cool;run.litT=0;run.alarms++;run.bellT=run.time+1.2;run.audio.play('alarm',{vol:.9});run.audio.play('spotted',{vol:.7});run.fx.text(text(run.lang,'spotted'),cx,p.y-40,'#ff8a6a',true);
   const fy=def.groundBelow(run,cx,p.y+p.h);for(const off of[p.vx*.55,(run.rand()<.5?-1:1)*130]){const x=clamp(cx+off,b.x0,b.x1);run.marks.push({x,y:def.groundBelow(run,x,fy-40)??fy,t:0,warn:b.shell.warn,r:b.shell.r,dmg:b.shell.dmg,hit:false})}
   run.audio.play('shellWhistle',{vol:.7});for(const e of run.enemies)if(e.type==='lookout'&&Math.abs(e.cx-cx)<900)e.alert=true}},
 groundBelow(run,x,y){let best=null;for(const s of run.solidList().concat(run.surfaces()))if(x>=s.x&&x<=s.x+s.w&&s.y>=y-8&&(best===null||s.y<best))best=s.y;return best},
 updateMarks(run,dt){const p=run.p,cx=p.x+p.w/2;for(const m of run.marks){m.t+=dt;if(!m.hit&&m.t>=m.warn){m.hit=true;run.audio.at('shellBoom',m.x,{vol:1});run.camera.shake=Math.max(run.camera.shake,5);run.fx.burst(m.x,m.y-10,'#ffb46b',18);run.fx.debris(m.x,m.y-6,10);run.fx.ring(m.x,m.y-8,'rgba(255,160,90,.9)',12,.4);
   if(!p.dead&&Math.abs(cx-m.x)<m.r+p.w/2-8&&Math.abs(p.y+p.h-m.y)<60)run.hurtPlayer(m.dmg,Math.sign(cx-m.x)||1,null,240)}}run.marks=run.marks.filter(m=>m.t<m.warn+.4)},
 /* lantern fire, brute shockwaves */
 updateHazards(run,dt){const p=run.p,cx=p.x+p.w/2,f=p.y+p.h;
  for(const q of run.projectiles){if(q.kind!=='lantern'||q.vy<=0||q.life<=0)continue;for(const s of run.surfaces()){if(q.x>s.x&&q.x<s.x+s.w&&q.y+8>=s.y&&q.y+8-q.vy*dt<=s.y+2){q.y=s.y-8;q.life=0;q.onEnd?.(run,q);q.onEnd=null;break}}}
  for(const fr of run.fires){fr.t-=dt;if(!p.dead&&p.ground&&Math.abs(f-fr.y)<8&&Math.abs(cx-fr.x)<fr.w/2+8)run.hurtPlayer(8,Math.sign(cx-fr.x)||1,null,150)}run.fires=run.fires.filter(q=>q.t>0);
  for(const w of run.quakes){w.t+=dt;w.x+=w.dir*400*dt;if(!w.hit&&!p.dead&&p.ground&&Math.abs(f-w.y)<8&&Math.abs(cx-w.x)<24){w.hit=true;run.hurtPlayer(12,w.dir,null,170)}}run.quakes=run.quakes.filter(w=>w.t<.85)},
 landing(run,e){const p=run.p,x=clamp(p.x+p.w/2+p.vx*.35,e.cx-470,e.cx+470),y=def.groundBelow(run,x,p.y+p.h-20)??p.y+p.h;return{x,y}},
 lob(run,e){const sx=e.cx+e.dir*14,sy=e.y+16,a=e.aim||def.landing(run,e),T=clamp(Math.abs(a.x-sx)/360,.6,1.05),g=900;
  run.projectiles.push({kind:'lantern',owner:'enemy',x:sx,y:sy,vx:(a.x-sx)/T,vy:(a.y-8-sy-.5*g*T*T)/T,g,w:14,h:14,dmg:10,life:T+.9,spin:0,onEnd:(r,q)=>def.lanternLand(r,q)});run.audio.at('lob',e.cx,{vol:.8})},
 lanternLand(run,q){const y=def.groundBelow(run,q.x,q.y-14);run.fx.burst(q.x,q.y,'#ffb04a',12);run.audio.at('fireBurst',q.x,{vol:.8});if(y!==null&&y-q.y<36)run.fires.push({x:q.x,y,w:92,t:1.7,max:1.7})},
 anchorSlam(run,e){const p=run.p,ix=e.cx+e.dir*64,box={x:ix-62,y:e.floor-96,w:124,h:96};if(overlap(box,p))run.hurtPlayer(22,e.dir,e,300);
  run.quakes.push({x:ix,y:e.floor,dir:-1,t:0,hit:false},{x:ix,y:e.floor,dir:1,t:0,hit:false});run.audio.at('slam',e.cx,{vol:1});run.audio.at('quake',e.cx,{vol:.8});run.camera.shake=Math.max(run.camera.shake,7);run.fx.debris(ix,e.floor-4,12);run.fx.dust(ix,e.floor,10)},
 blunder(run,e){const p=run.p,sx=e.cx+e.dir*44,sy=e.y+e.h*.42,aim=e.aim||{x:p.x+p.w/2,y:p.y+p.h*.5},a0=aimClamp(e,Math.atan2(aim.y-sy,aim.x-sx));
  for(const da of[-.16,0,.16]){const a=a0+da;run.projectiles.push({kind:'pellet',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*540,vy:Math.sin(a)*540,w:8,h:8,dmg:8,life:.8})}
  run.fx.muzzle(sx,sy,e.dir);run.audio.at('blunder',e.cx,{vol:.9});run.camera.shake=Math.max(run.camera.shake,2)},
 /* moonlight through the mirrors (axis-aligned rays) */
 computeMoon(run){const c=run.cfg.mirrors,s=run.state,ml=c.list;const pts=[[c.moon.x,c.moon.y]];let x=c.moon.x,y=c.moon.y,dx=0,dy=1,seal=false;
  const REF=[{'0,1':[0,-1],'0,-1':[0,1]},{'0,1':[1,0],'1,0':[0,1],'0,-1':[-1,0],'-1,0':[0,-1]},{'1,0':[-1,0],'-1,0':[1,0]},{'0,1':[-1,0],'-1,0':[0,1],'0,-1':[1,0],'1,0':[0,-1]}];
  let last=-1;for(let b=0;b<6;b++){// next mirror along the ray
   let best=null,bd=1e9;ml.forEach((m,i)=>{if(i===last)return;const tx=m.x-x,ty=m.y-y;const along=tx*dx+ty*dy,side=Math.abs(tx*dy-ty*dx);if(along>4&&side<6&&along<bd){bd=along;best=i}});
   const sl=c.seal,st=(sl.x-x)*dx+(sl.y-y)*dy,ss=Math.abs((sl.x-x)*dy-(sl.y-y)*dx);if(st>0&&ss<20&&st<bd){pts.push([sl.x,sl.y]);seal=true;break}
   if(best===null){const far=dy>0?c.door.floor:dy<0?-300:0;let ex=x+dx*700,ey=dy>0?far:y+dy*700;if(dx!==0)ex=dx>0?Math.min(c.door.x-16,x+700):Math.max(8620,x-700);pts.push([dy===0?ex:x,dy===0?y:ey]);break}
   const m=ml[best];x=m.x;y=m.y;pts.push([x,y]);const r=REF[s.mirrors[best]][dx+','+dy];if(!r)break;[dx,dy]=r;last=best}
  run.moon={pts,seal}},
 /* strikes on props: tower lamps, lanterns, cracked wall, levers, mirrors, the lens */
 hitProps(run,box){
  const s=run.state,c=run.cfg;let hit=false;
  for(const tw of c.beam.towers){if(s.lamps[tw.id])continue;if(overlap(box,{x:tw.x-26,y:tw.y-70,w:52,h:68})){s.lamps[tw.id]=true;hit=true;run.audio.at('snuff',tw.x,{vol:1});run.fx.burst(tw.x,tw.y-40,'#c8ffd6',18);run.fx.text(text(run.lang,'blind'),tw.x,tw.y-90,'#c8ffd6',true);run.banner={t:2.8,text:text(run.lang,'snuffed')};run.save()}}
  c.lanterns.list.forEach((l,i)=>{if(run.lanCool[i]>0||s.gate)return;if(overlap(box,{x:l.x-22,y:c.lanterns.y-100,w:44,h:70})){run.lanCool[i]=.3;hit=true;run.lanPresses++;
   for(const j of[i-1,i,i+1])if(j>=0&&j<s.lanterns.length)s.lanterns[j]^=1;run.audio.at(s.lanterns[i]?'lanternOn':'lanternOff',l.x,{vol:.9});run.fx.spark(l.x,c.lanterns.y-66,'#ffd27a',10);
   if(s.lanterns.every(v=>v)){s.gate=true;run.banner={t:3,text:text(run.lang,'gateOpen')};run.audio.play('gateGrind',{vol:1});run.audio.play('lanternOn',{vol:.8,rate:1.25});run.camera.shake=4}run.save()}});
  const ck=c.crack;if(s.crack<ck.hp&&overlap(box,{x:ck.x-6,y:ck.y,w:ck.w+12,h:ck.h})&&!(run.crackCool>run.time)){run.crackCool=run.time+.25;s.crack++;hit=true;run.fx.debris(ck.x+ck.w/2,ck.y+60,8);run.audio.at(s.crack>=ck.hp?'wallBreak':'stoneHit',ck.x,{vol:.9});run.camera.shake=3;if(s.crack>=ck.hp){run.banner={t:3,text:text(run.lang,'secretWall')};run.fx.debris(ck.x+ck.w/2,ck.y+40,22)}run.save()}
  for(const lv of c.levers.list){if(s.levers[lv.id])continue;if(overlap(box,{x:lv.x-24,y:lv.y-80,w:48,h:80})){s.levers[lv.id]=true;hit=true;const n=(s.levers.A?1:0)+(s.levers.B?1:0);run.audio.at('leverPull',lv.x,{vol:1});run.fx.spark(lv.x,lv.y-50,'#ffd27a',10);run.fx.text(text(run.lang,'leverDone').replace('{n}',n),lv.x,lv.y-100,'#ffe9a8');
    if(n===2){const lift=run.movers.find(m=>m.id===c.levers.lift);if(lift)lift.active=true;run.banner={t:3,text:text(run.lang,'liftOn')};run.audio.play('gears',{vol:1});run.camera.shake=4}run.save()}}
  c.mirrors.list.forEach((m,i)=>{if(s.door)return;if(overlap(box,{x:m.x-28,y:m.y-36,w:56,h:60})&&!(run.mirrorCool>run.time)){run.mirrorCool=run.time+.25;s.mirrors[i]=(s.mirrors[i]+1)%4;run.mirrorSpin[i]=1;hit=true;run.audio.at('mirrorTurn',m.x,{vol:.9});run.fx.spark(m.x,m.y,'#dfefff',10);run.save()}});
  const a=c.arena;if(s.keeperDown&&!run.cine&&overlap(box,{x:a.lens-40,y:a.floor-130,w:90,h:130})){hit=true;def.beginVictory(run)}
  return hit},
 strike(run,box,dmg){let hit=def.hitProps(run,box);const k=run.keeper;
  if(k.hook&&!k.hook.back&&overlap(box,{x:k.hook.x-14,y:k.hook.y-14,w:28,h:28})){k.hook.back=true;run.audio.play('clang',{vol:.8});run.fx.spark(k.hook.x,k.hook.y,'#cfe3ff',10);hit=true}
  if(run.arena.active&&!run.cine&&k.state!=='dormant'&&overlap(box,k.box())){const r=k.damage(dmg,'melee',run.p.dir);if(r!=='none')hit=true}return hit},
 dashStrike(run,box,dmg){const k=run.keeper;if(!run.arena.active||run.cine||k.state==='dormant'||!overlap(box,k.box()))return false;const r=k.damage(Math.round(dmg*run.cfg.boss.dashScale),'dash',run.p.dir);if(r==='hit'){run.fx.spark(k.x,run.p.y+run.p.h*.45,'#9fe4ff',16);return true}return false},
 projectileHit(run,q){if(q.owner!=='hero')return false;const box={x:q.x,y:q.y,w:q.w||12,h:q.h||8};if(def.hitProps(run,box))return true;const k=run.keeper;if(run.arena.active&&!run.cine&&k.state!=='dormant'&&overlap(q,k.box())){k.damage(Math.round(q.dmg*run.cfg.boss.bulletScale),'bullet',Math.sign(q.vx)||1);return true}return false},
 /* encounters (net walls, waves dropping in), boss adds */
 spawnWave(run,id,w){const foes=(run.pending[id]||[]).filter(q=>q.w===w&&!run.killed.has(q.e.id));
  for(const q of foes){const e=q.e;e.encId=id;e.spawnT=.8;e.alert=true;e.x=q.d.x-e.w/2;e.hp=e.max;e.dead=false;e.state='idle';e.timer=0;e.cool=.6+run.rand()*.4;run.pending[id]=run.pending[id].filter(z=>z!==q);run.enemies.push(e)}return foes.length},
 updateEncounters(run,dt){
  const c=run.cfg,s=run.state,p=run.p,cx=p.x+p.w/2,en=run.enc;
  for(const k of c.encounters){const on=en.id===k.id;run.walls[k.id]+=((on?1:0)-run.walls[k.id])*Math.min(1,dt*6)}
  if(!en.id&&!p.dead){for(const k of c.encounters){if(s.enc[k.id])continue;if(cx>k.trigger&&cx<k.wallR&&Math.abs(p.y+p.h-k.floor)<160&&p.ground){en.id=k.id;en.wave=0;en.delay=1.1;run.audio.play('gateSlam',{vol:.9});run.camera.shake=6;run.banner={t:2.2,text:text(run.lang,'ambush')};def.music(run);break}}
   const a=c.arena;if(!run.arena.active&&s.door&&!s.keeperDown&&cx>a.x0+120&&Math.abs(p.y+p.h-a.floor)<20&&p.ground){run.arena.active=true;run.keeper.start();def.music(run);run.audio.play('gateSlam',{vol:.9});def.hint(run,'hKeeper')}}
  if(!en.id)return;const k=c.encounters.find(q=>q.id===en.id);
  const alive=run.enemies.filter(e=>!e.dead&&e.encId===k.id);if(alive.length)return;en.delay-=dt;if(en.delay>0)return;
  const pend=run.pending[k.id]||[];let next=en.wave+1;while(next<=k.waves&&!pend.some(q=>q.w===next&&!run.killed.has(q.e.id)))next++;
  if(next>k.waves){s.enc[k.id]=true;en.id=null;run.banner={t:2.6,text:text(run.lang,'cleared')};run.audio.play('gateOpen',{vol:.9});def.music(run);run.save();return}
  en.wave=next;run.banner={t:2,text:text(run.lang,'wave').replace('{n}',next)};run.audio.play('bossIntro',{vol:.5});def.spawnWave(run,k.id,next);en.delay=1.4},
 heroHazards(run,dt){},
 onRespawn(run){
  const s=run.state,c=run.cfg,en=run.enc;run.marks=[];run.fires=[];run.quakes=[];run.litT=0;run.alarmCool=1.5;run.projectiles=[];
  const back=(id)=>{for(const e of run.enemies.filter(q=>q.encId===id&&!q.dead)){run.enemies=run.enemies.filter(q=>q!==e);const d=c.enemies.find(q=>q.id===e.id);e.hp=e.max;e.state='idle';e.encId=null;e.spawnT=0;(run.pending[id]??=[]).push({e,w:+d.wave.split(':')[1],d})}};
  if(en.id){back(en.id);en.id=null;en.wave=0}
  if(run.arena.active&&!s.keeperDown){back('boss');run.keeper.reset();run.arena.active=false}
  if(run.tide.phase!=='calm'){run.tide.phase='calm';run.tide.t=2.5}
  def.music(run)},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 ambience(run){if(!run.audio.ctx)return;const inside=def.inside(run),z=def.zone(run).id,k=run.rainK;
  run.audio.loop('drizzle',inside?0:.32*k);run.audio.loop('sea',inside?(z==='caves'?.16:.06):(z==='gallery'?.22:.4));run.audio.loop('cave',z==='caves'&&inside?.45:z==='tower'&&inside?.18:0);run.audio.loop('wind',inside?.05:.22)},
 paintSolid:(run,c,s,L,R,T,B)=>paintSolid(run,c,s,L,R,T,B),
 paintLedge:(run,c,l)=>paintLedge(run,c,l),
 drawMover:(run,c,m)=>drawMover(run,c,m),
 drawEnemy:(run,c,e)=>drawFoe(run,c,e),
 drawProjectile(run,c,q){
  if(q.kind==='lantern'){q.spin=(q.spin||0);c.rotate(q.spin*.5);run.fx.glow(c,0,0,30,'rgba(255,170,70,',.8);c.fillStyle='#3a3026';c.fillRect(-7,-9,14,3);c.fillStyle='#ffe08a';c.fillRect(-6,-6,12,12);c.strokeStyle='#3a3026';c.lineWidth=1.5;c.strokeRect(-6,-6,12,12);return}
  if(q.kind==='pellet'){run.fx.glow(c,0,0,14,'rgba(255,160,80,',.8);c.fillStyle='#2a2a30';c.beginPath();c.arc(0,0,3.5,0,TAU);c.fill();c.fillStyle='#ffd0a0';c.fillRect(-1,-1,2,2)}},
 lighthouseScreen(run){const W=E.W,cam=run.camera;const py=clamp((cam.y-300)*.06,-20,40);return{x:W*.72+(5000-cam.x)*.04,y:160-py,vis:clamp((8300-cam.x)/600,0,1)}},
 drawBackground:(run,c)=>drawBackground(run,c),
 drawBack(run,c){drawBack(run,c);drawDecor(run,c)},
 drawMid(run,c){
  const cam=run.camera,W=E.W,L=cam.x-120,R=cam.x+W+120,cfg=run.cfg,s=run.state,t=run.time;
  // watchtower lamps (cursed green, snuffed when struck)
  for(const tw of cfg.beam.towers){if(tw.x<L||tw.x>R)continue;const off=s.lamps[tw.id];c.fillStyle='#22272d';c.fillRect(tw.x-3,tw.y-40,6,40);
   if(!off)run.fx.glow(c,tw.x,tw.y-56,70,'rgba(157,255,176,',.7+.15*Math.sin(t*5));c.fillStyle='#2b2f33';c.fillRect(tw.x-15,tw.y-72,30,6);c.fillStyle=off?'#3a4040':'#d8ffe0';c.fillRect(tw.x-13,tw.y-66,26,22);c.strokeStyle='#2b2f33';c.lineWidth=2;c.strokeRect(tw.x-13,tw.y-66,26,22);c.fillStyle='#2b2f33';c.fillRect(tw.x-15,tw.y-44,30,5);
   if(off&&run.fx.on){c.fillStyle='rgba(160,160,160,.25)';c.beginPath();c.arc(tw.x+Math.sin(t*2)*4,tw.y-86-((t*20)%30),6,0,TAU);c.fill()}}
  // linked lanterns with chains, hint pulse after many tries
  const lc=cfg.lanterns,ly=lc.y;let hintI=-1;if(!s.gate&&run.lanPresses>=6)hintI=def.lanternHint(run);
  for(let i=0;i<lc.list.length;i++){const l=lc.list[i];if(l.x<L||l.x>R)continue;const on=s.lanterns[i];
   if(i<lc.list.length-1){const n=lc.list[i+1];c.strokeStyle='#5d646c';c.lineWidth=2;c.setLineDash([5,4]);c.beginPath();c.moveTo(l.x+10,ly-78);c.quadraticCurveTo((l.x+n.x)/2,ly-50,n.x-10,ly-78);c.stroke();c.setLineDash([])}
   c.fillStyle='#22272d';c.fillRect(l.x-4,ly-60,8,60);c.fillRect(l.x-14,ly-4,28,4);
   if(on)run.fx.glow(c,l.x,ly-80,64,'rgba(255,200,110,',.75+.1*Math.sin(t*6+i));if(i===hintI)run.fx.glow(c,l.x,ly-80,50,'rgba(160,220,255,',.4+.4*Math.sin(t*8));
   c.fillStyle='#2b2620';c.fillRect(l.x-12,ly-98,24,5);c.fillStyle=on?'#ffe08a':'#3b3a36';c.fillRect(l.x-10,ly-93,20,24);c.strokeStyle='#2b2620';c.lineWidth=2;c.strokeRect(l.x-10,ly-93,20,24);c.fillStyle='#2b2620';c.fillRect(l.x-12,ly-69,24,5)}
  // tide gate, encounter walls, lamp-room door, cracked wall
  for(const d of def.dynamicSolids(run)){if(d.x+d.w<L||d.x>R)continue;
   if(d.style==='crack'){c.fillStyle=pat(run,c,'cave');c.fillRect(d.x,d.y,d.w,d.h);c.strokeStyle='rgba(0,0,0,.7)';c.lineWidth=2;c.beginPath();c.moveTo(d.x+8,d.y+10);c.lineTo(d.x+24,d.y+40);c.lineTo(d.x+12,d.y+70);c.lineTo(d.x+28,d.y+100);c.moveTo(d.x+24,d.y+40);c.lineTo(d.x+36,d.y+52);c.stroke();
    c.strokeStyle='rgba(255,220,150,'+(.15+.1*Math.sin(t*3))+')';c.lineWidth=1;c.stroke();for(let i=0;i<s.crack;i++){c.fillStyle='rgba(0,0,0,.5)';c.fillRect(d.x+6+i*9,d.y+20+i*30,10,6)}continue}
   const iron=d.style==='gate'?'#3b4249':d.style==='door'?'#3a2b1d':'#2f353b';c.fillStyle=iron;c.fillRect(d.x,d.y,d.w,d.h);c.fillStyle='rgba(255,255,255,.12)';c.fillRect(d.x+2,d.y,3,d.h);
   if(d.style==='door'){c.fillStyle='#5a4230';for(let y=d.y+8;y<d.y+d.h;y+=26)c.fillRect(d.x,y,d.w,4);c.fillStyle='#c9a24a';c.fillRect(d.x+d.w/2-3,d.y+d.h*.5,6,10)}
   else{c.strokeStyle='#14181c';c.lineWidth=2;for(let y=d.y+16;y<d.y+d.h;y+=28){c.beginPath();c.moveTo(d.x,y);c.lineTo(d.x+d.w,y);c.stroke()}c.fillStyle='#14181c';c.beginPath();for(let x=d.x+4;x<d.x+d.w;x+=10){c.moveTo(x,d.y+d.h);c.lineTo(x+5,d.y+d.h+10);c.lineTo(x+10,d.y+d.h)}c.fill()}}
  // counterweight levers
  for(const lv of cfg.levers.list){if(lv.x<L||lv.x>R)continue;const k=run.leverK[lv.id];c.fillStyle='#2b3238';c.fillRect(lv.x-16,lv.y-14,32,14);c.save();c.translate(lv.x,lv.y-12);c.rotate(-.7+1.4*k);c.fillStyle='#5d646c';c.fillRect(-3,-56,6,56);c.fillStyle=k>.5?'#c9a24a':'#8a2a22';c.beginPath();c.arc(0,-58,8,0,TAU);c.fill();c.restore();
   if(!s.levers[lv.id])run.fx.glow(c,lv.x,lv.y-56,30,'rgba(255,210,120,',.25+.15*Math.sin(t*4))}
  // moonlight path, mirrors, the sun seal
  if(R>8700&&L<9400){const mn=run.moon,pts=mn.pts;c.save();c.globalCompositeOperation='lighter';c.lineCap='round';
   for(const [w,a] of[[18,.12],[8,.25],[3,.7]]){c.strokeStyle='rgba(200,225,255,'+a+')';c.lineWidth=w;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.restore();
   const top=pts[0];run.fx.glow(c,top[0],top[1]+30,80,'rgba(190,215,255,',.35);
   cfg.mirrors.list.forEach((m,i)=>{const ang=[0,Math.PI/4,Math.PI/2,-Math.PI/4][s.mirrors[i]]+run.mirrorSpin[i]*-.785;c.fillStyle='#2b3238';c.fillRect(m.x-6,m.y+8,12,cfg.arena.floor-m.y-8);c.fillRect(m.x-16,cfg.arena.floor-6,32,6);
    c.save();c.translate(m.x,m.y);c.rotate(ang);c.fillStyle='#c9a24a';c.fillRect(-28,-5,56,10);c.fillStyle='#dfefff';c.fillRect(-25,-3,50,4);c.restore();if(!s.door)run.fx.glow(c,m.x,m.y,26,'rgba(220,235,255,',.2)});
   const sl=cfg.mirrors.seal,lit=mn.seal||s.door;c.save();c.translate(sl.x,sl.y);c.fillStyle='#2b2620';c.beginPath();c.arc(0,0,24,0,TAU);c.fill();c.strokeStyle='#c9a24a';c.lineWidth=3;c.stroke();c.fillStyle=lit?'#ffe08a':'#6a5a3a';for(let k=0;k<8;k++){c.save();c.rotate(k*Math.PI/4+(lit?t:0));c.fillRect(-2,-20,4,8);c.restore()}c.beginPath();c.arc(0,0,9,0,TAU);c.fill();c.restore();if(lit)run.fx.glow(c,sl.x,sl.y,70,'rgba(255,220,130,',.6);
   c.strokeStyle='#3a3026';c.lineWidth=3;c.beginPath();c.moveTo(sl.x+20,sl.y);c.lineTo(cfg.mirrors.door.x,sl.y);c.lineTo(cfg.mirrors.door.x,cfg.mirrors.door.top);c.stroke()}
  // the great dark lens on its plinth
  const a=cfg.arena;if(a.lens>L&&a.lens<R){const ly=a.floor,k=run.keeper,hot=['sweepCharge','sweeping'].includes(k.state);c.fillStyle='#2b2f33';c.fillRect(a.lens-36,ly-30,72,30);c.fillStyle='#3d444b';c.fillRect(a.lens-30,ly-38,60,8);
   if(!run.lensBroken){run.fx.glow(c,a.lens,ly-90,hot?150:90,'rgba(157,255,176,',hot?.95:.6+.1*Math.sin(t*3));c.fillStyle='#c9a24a';c.beginPath();c.ellipse(a.lens,ly-90,34,52,0,0,TAU);c.fill();c.fillStyle='#2a4a34';c.beginPath();c.ellipse(a.lens,ly-90,28,46,0,0,TAU);c.fill();c.fillStyle='rgba(190,255,205,.75)';for(let i=0;i<4;i++){c.beginPath();c.ellipse(a.lens,ly-90,24-i*6,42-i*10,0,0,TAU);c.strokeStyle='rgba(190,255,205,'+(.6-i*.12)+')';c.lineWidth=2;c.stroke()}
    if(s.keeperDown&&!run.cine){c.save();c.font='900 26px Georgia';c.textAlign='center';c.fillStyle='rgba(255,227,160,'+(.6+.4*Math.sin(t*6))+')';c.fillText('⚔',a.lens,ly-160);c.restore()}}
   else{run.fx.glow(c,a.lens,ly-90,120,'rgba(255,214,120,',.7);c.fillStyle='#c9a24a';c.beginPath();c.ellipse(a.lens,ly-90,34,52,0,0,TAU);c.lineWidth=6;c.strokeStyle='#c9a24a';c.stroke();c.fillStyle='#fff3c0';c.beginPath();c.arc(a.lens,ly-90,14,0,TAU);c.fill()}}
  // pillars in the gallery (cover from the lens sweep)
  for(const x of a.pillars){if(x<L||x>R)continue;c.fillStyle='#2a3036';c.fillRect(x-22,a.floor-230,44,230);c.fillStyle='#3a424a';c.fillRect(x-26,a.floor-236,52,12);c.fillRect(x-26,a.floor-14,52,14);c.fillStyle='rgba(255,255,255,.08)';c.fillRect(x-20,a.floor-226,5,212)}
  // hazards: fire, shockwaves, mortar marks
  for(const fr of run.fires){const k=fr.t/fr.max;run.fx.glow(c,fr.x,fr.y-14,60,'rgba(255,140,50,',.6*k+.2);for(let i=0;i<5;i++){const fx=fr.x-fr.w/2+10+i*(fr.w-20)/4,h=(18+10*Math.sin(t*14+i*2))*Math.min(1,k*2);c.fillStyle=i%2?'#ff9a3a':'#ffd36b';c.beginPath();c.moveTo(fx-7,fr.y);c.quadraticCurveTo(fx,fr.y-h*1.4,fx+7,fr.y);c.fill()}}
  for(const w of run.quakes){const k=1-w.t/.85;c.fillStyle='rgba(200,180,140,'+(.6*k)+')';c.beginPath();c.moveTo(w.x-18*w.dir,w.y);c.quadraticCurveTo(w.x,w.y-30*k,w.x+10*w.dir,w.y);c.fill();c.strokeStyle='rgba(255,120,80,'+(.7*k)+')';c.lineWidth=3;c.beginPath();c.moveTo(w.x,w.y-2);c.lineTo(w.x-w.dir*40,w.y-2);c.stroke()}
  for(const m of run.marks){const k=clamp(m.t/m.warn,0,1);if(m.t<m.warn){c.save();c.strokeStyle='rgba(255,80,50,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(m.x,m.y-3,m.r*(1.4-.4*k),10,0,0,TAU);c.stroke();c.fillStyle='rgba(255,80,50,'+(.1+.2*k)+')';c.fill();
    if(k>.6){const sy=m.y-420*(1-(k-.6)/.4);c.fillStyle='#222';c.beginPath();c.arc(m.x,sy,7,0,TAU);c.fill();run.fx.glow(c,m.x,sy,20,'rgba(255,170,90,',.6)}c.restore()}}
  if(run.arena.active)run.keeper.drawSweep(c)},
 drawActors(run,c){if(run.arena.active||run.state.keeperDown&&run.keeper.state!=='dead')run.keeper.draw(c)},
 drawFront(run,c){
  const cam=run.camera,W=E.W,L=cam.x-100,R=cam.x+W+100,cfg=run.cfg,t=run.time,p=run.p;
  // cover rocks (drawn in front: the hero hides behind them)
  for(const [x,y] of cfg.beam.covers){if(x<L||x>R)continue;const hid=Math.abs(p.x+p.w/2-x)<38&&Math.abs(p.y+p.h-y)<12;c.save();c.globalAlpha=hid?.78:1;c.fillStyle='#161c22';c.beginPath();c.moveTo(x-46,y);c.quadraticCurveTo(x-50,y-62,x-14,y-86);c.quadraticCurveTo(x+22,y-96,x+44,y-58);c.quadraticCurveTo(x+54,y-20,x+46,y);c.closePath();c.fill();c.strokeStyle='#2a3640';c.lineWidth=3;c.stroke();c.fillStyle='#34573f';c.fillRect(x-30,y-86,40,5);c.restore();
   if(hid&&run.inBeam)run.fx.glow(c,x,y-40,40,'rgba(157,255,176,',.15)}
  // sea in the pits and the tide on the flats
  for(const q of cfg.pits){if(q.x+q.w<L||q.x>R)continue;const y0=q.kind==='pool'?1160:1030;c.fillStyle=q.kind==='pool'?'rgba(20,60,80,.85)':'rgba(10,40,55,.9)';c.beginPath();c.moveTo(q.x,y0+30);for(let x=q.x;x<=q.x+q.w;x+=12)c.lineTo(x,y0+Math.sin(t*2.4+x*.05)*4);c.lineTo(q.x+q.w,y0+300);c.lineTo(q.x,y0+300);c.fill();c.fillStyle='rgba(200,230,240,.35)';for(let x=q.x+6;x<q.x+q.w;x+=22)c.fillRect(x,y0-2+Math.sin(t*2.4+x*.05)*4,8,2)}
  const td=cfg.tide,lv=def.tideLevel(run);if(td.x0<R&&td.x1>L){const tide=run.tide,front=tide.phase==='surge'?tide.front:td.x1,h=lv>0?44*lv:0;
   if(lv>0){c.fillStyle='rgba(30,80,100,.55)';c.beginPath();c.moveTo(td.x0-160,td.y);for(let x=td.x0-160;x<=Math.min(front,td.x1);x+=14)c.lineTo(x,td.y-h+Math.sin(t*6+x*.06)*5);c.lineTo(Math.min(front,td.x1),td.y);c.closePath();c.fill();if(tide.phase==='surge'){c.fillStyle='rgba(230,245,250,.7)';c.beginPath();c.ellipse(front,td.y-h*.6,18,h*.6,0,0,TAU);c.fill()}}
   else if(lv<0){c.fillStyle='rgba(230,245,250,'+(-lv*.9)+')';for(let x=td.x0+10;x<td.x0+200;x+=18)c.fillRect(x,td.y-4+Math.sin(t*9+x)*2,10,3)}}
  // the lighthouse beam sweeping the cliffs
  const b=cfg.beam;if(run.beam!==undefined&&R>b.x0-300&&L<b.x1+300){const lt=def.lighthouseScreen(run),ax=cam.x+lt.x,ay=cam.y+lt.y,bx=run.beam,tw=def.towerAt(run,bx),hot=tw&&!run.state.lamps[tw.id],gy=def.groundBelow(run,bx,500)??920;
   c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(ax,ay,bx,gy);const col=hot?'190,255,205':'140,170,160';g.addColorStop(0,'rgba('+col+',.05)');g.addColorStop(1,'rgba('+col+','+(hot?.28:.1)+')');c.fillStyle=g;c.beginPath();c.moveTo(ax,ay);c.lineTo(bx-b.half,gy);c.lineTo(bx+b.half,gy);c.closePath();c.fill();c.restore();
   run.fx.glow(c,bx,gy-10,b.half*1.1,'rgba('+col+',',hot?.5:.2)}
 },
 drawLighting(run,c){
  weather(run,c);
  const W=E.W,cam=run.camera,p=run.p,inside=def.inside(run),z=def.zone(run).id,cfg=run.cfg,s=run.state;
  let dark=z==='caves'&&inside?.56:z==='tower'&&inside?.4:z==='gallery'?.17:.2;   // lifted for phone screens (audit 2026-11-06): the hero and foes must stay readabledark*=1-(run.goldK||0)*.6;if(dark<.05)return;
  const lw=Math.ceil(W/4),lh=Math.ceil(H/4),buf=run.lightBuf;if(buf.width!==lw||buf.height!==lh){buf.width=lw;buf.height=lh}
  const x=buf.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(2,5,12,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
  const spr=run.fx.glowSprite('rgba(255,255,255,');const hole=(wx,wy,r,a=1)=>{const sx=(wx-cam.x)/4,sy=(wy-cam.y)/4,rr=r/4;if(sx+rr<0||sx-rr>lw||sy+rr<0||sy-rr>lh)return;x.globalAlpha=a;x.drawImage(spr,sx-rr,sy-rr,rr*2,rr*2)};
  hole(p.x+p.w/2,p.y+p.h*.45,inside?220:180,1);
  for(const [lx,ly] of cfg.decor.lamps)hole(lx+16,ly-70,170,.9);for(const [lx,ly] of cfg.decor.crystals)hole(lx,ly-20,110,.6);
  cfg.lanterns.list.forEach((l,i)=>{if(s.lanterns[i])hole(l.x,cfg.lanterns.y-80,190,.95)});
  for(const tw of cfg.beam.towers)if(!s.lamps[tw.id])hole(tw.x,tw.y-56,200,.8);
  for(const fr of run.fires)hole(fr.x,fr.y-14,140,.9);for(const cp of cfg.checkpoints)if(cp.id<=run.checkpoint)hole(cp.x,cp.y-40,170,.8);
  for(const ch of run.chests)if(!ch.open)hole(ch.x,ch.y-20,110,.6);
  if(run.beam!==undefined)hole(run.beam,def.groundBelow(run,run.beam,500)??920,240,.9);
  if(z==='gallery'){for(const [px,py] of run.moon.pts)hole(px,py,120,.6);hole(cfg.arena.lens,cfg.arena.floor-90,260,.9);const k=run.keeper;if(run.arena.active)hole(k.x,k.floor-120,200,.7);if(k.sweep)hole(k.sweep.x,k.floor-100,220,1)}
  for(const e of run.enemies)if(!e.dead&&e.cx>cam.x-100&&e.cx<cam.x+W+100)hole(e.cx,e.floor-70,e.type==='wrecker'?170:130,e.type==='wrecker'?.8:.55);   // foes stay readable in the dark
  for(const q of run.projectiles)if(q.kind==='lantern')hole(q.x,q.y,110,.8);
  x.globalAlpha=1;x.globalCompositeOperation='source-over';c.save();c.imageSmoothingEnabled=true;c.drawImage(buf,0,0,lw,lh,0,0,lw*4,lh*4);c.restore()},
 lanternHint(run){// shortest press sequence from the current state (16 states): return its first lantern
  const n=run.state.lanterns.length,enc=a=>a.reduce((v,b,i)=>v|(b<<i),0),goal=(1<<n)-1,start=enc(run.state.lanterns);if(start===goal)return-1;
  const prev=new Map([[start,null]]),q=[start];while(q.length){const v=q.shift();for(let i=0;i<n;i++){let w=v;for(const j of[i-1,i,i+1])if(j>=0&&j<n)w^=1<<j;if(prev.has(w))continue;prev.set(w,[v,i]);if(w===goal){let cur=w,first=i;while(prev.get(cur)){const[pv,pi]=prev.get(cur);first=pi;cur=pv}return first}q.push(w)}}return-1},
 drawHud(run,c){
  const W=E.W,s=run.state,t=run.time,z=def.zone(run).id,k=run.keeper;
  // beam / tide status under the objective (icon + text + bar: never colour alone)
  const y=(run.objY||88)+16,x=W/2-20;
  if(z==='cliffs'&&!run.cine){const tw=def.towerAt(run,run.p.x+run.p.w/2),blind=tw&&s.lamps[tw.id],sp=run.alarmCool>run.cfg.beam.cool-1.2;let lab,col;
   if(blind){lab='◌ '+text(run.lang,'blind');col='#9fb4c8'}else if(sp){lab='◉ '+text(run.lang,'spotted');col='#ff8a6a'}else if(run.inBeam){lab='◉ '+text(run.lang,'lit');col='#ffd38a'}else{lab='◡ '+text(run.lang,'hidden');col='#9ff0b8'}
   c.save();c.fillStyle='rgba(10,18,32,.78)';c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.roundRect(x-110,y,220,28,12);c.fill();c.stroke();c.font='800 14px Arial, sans-serif';c.textAlign='center';c.fillStyle=col;c.fillText(lab+'  ·  '+text(run.lang,'lamps')+' '+Object.values(s.lamps).filter(Boolean).length+'/2',x,y+19);
   if(!blind&&run.litT>0){c.fillStyle='#ffb84a';c.fillRect(x-100,y+23,200*clamp(run.litT/run.cfg.beam.notice,0,1),3)}c.restore()}
  if(z==='shore'&&run.p.x<run.cfg.tide.x1+200&&!run.cine){const td=run.tide,warn=td.phase==='warn',surge=td.phase==='surge';if(warn||surge){c.save();c.fillStyle='rgba(10,18,32,.78)';c.strokeStyle='#8fd0ff';c.lineWidth=2;c.beginPath();c.roundRect(x-80,y,160,28,12);c.fill();c.stroke();c.font='800 14px Arial, sans-serif';c.textAlign='center';c.fillStyle=warn?'#ffd38a':'#bfe9ff';c.fillText((warn?'⚠ ':'≋ ')+text(run.lang,'tideWarn'),x,y+19);if(warn){c.fillStyle='#ffb84a';c.fillRect(x-72,y+23,144*clamp(td.t/run.cfg.tide.warn,0,1),3)}c.restore()}}
  // boss bar
  if(def.bossHud(run)){const bw=Math.min(380,W-560),bx=W/2-bw/2-20,by=(run.objY||88)+18;run.panel(c,bx-10,by-8,bw+20,60);c.textAlign='left';c.font='800 13px Georgia, serif';c.fillStyle='#ffffff';c.fillText(text(run.lang,'keeper'),bx,by+12,bw-60);
   c.fillStyle=k.rage?'#ff7a4a':'#9dffb0';c.beginPath();c.arc(bx+bw-70,by+7,5,0,TAU);c.fill();c.textAlign='right';c.fillStyle='#ffd36b';c.fillText(Math.ceil(k.hp)+'/'+k.max,bx+bw,by+29);run.bar(c,bx,by+36,bw,12,k.hp/k.max,k.rage?'#ff9f43':'#7af0a0',k.rage?'#a3460f':'#1f6a3a',true);c.fillStyle='#ffffffaa';c.fillRect(bx+bw*k.cfg.rageAt/k.max-1,by+34,2,16)}
  if(run.banner.t>0&&!run.cine?.stage?.startsWith('story')){const kk=Math.min(1,run.banner.t,4.6-run.banner.t+.001);c.save();c.globalAlpha=clamp(kk*2,0,1);c.textAlign='center';const by=run.banner.small?(run.objY||88)+(def.bossHud(run)?120:86):200;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(run.banner.small?520:640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(10,20,36,.86)';c.beginPath();c.roundRect(W/2-bw/2,by-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#8fe0b0';c.lineWidth=2;c.stroke();
   c.fillStyle='#e6f4ff';let txt=run.banner.text;while(c.measureText(txt).width>bw-30&&txt.length>8)txt=txt.slice(0,-2);if(txt!==run.banner.text)txt+='…';c.fillText(txt,W/2,by+(run.banner.small?-5:6));c.restore()}
  if(run.cine)def.drawCine(run,c)},
 /* -------- the keeper falls, the dark lens shatters, story */
 keeperDown(run){
  const k=run.keeper,s=run.state,p=run.p;if(s.keeperDown)return;s.keeperDown=true;k.state='dying';k.deadT=0;k.hook=null;k.sweep=null;run.marks=[];run.projectiles=run.projectiles.filter(q=>q.owner==='hero');
  for(const e of run.enemies)if(e.encId==='boss'&&!e.dead)e.die(1);
  run.audio.play('keeperFall',{vol:1});run.audio.play('bossDie',{vol:.8});run.camera.shake=12;run.hitStop(.25);run.banner={t:3,text:text(run.lang,'keeperDown')};run.dropCoins(k.x,k.floor-120,10,'keeper');
  run.healHero(30);run.audio.stopMusic(1.2);setTimeout(()=>{if(run.phase==='play'&&!run.cine)run.audio.playMusic('lighthouse',1.6)},1600);run.save()},
 beginVictory(run){
  if(run.cine)return;const p=run.p;run.cine={stage:'shatter',t:0,T:0,white:0,letter:0,line:0,chars:0};run.clearInputs();if(run.controls)run.controls.hidden=true;p.inv=99;
  run.audio.stopMusic(.6);run.audio.play('lensShatter',{vol:1});run.camera.shake=8;const a=run.cfg.arena;run.fx.burst(a.lens,a.floor-90,'#c8ffd6',40,1.6);run.fx.debris(a.lens,a.floor-90,20);run.save()},
 updateCine(run,dt){
  const cn=run.cine,p=run.p;cn.t+=dt;cn.T+=dt;p.inv=Math.max(p.inv,2);run.inputs.clear();run.axis=0;
  if(cn.stage==='shatter'){if(cn.t>.6&&!cn.flashed){cn.flashed=true;cn.white=1;run.lensBroken=true;run.banner={t:3.2,text:text(run.lang,'shattered')};def.music(run);run.audio.play('seal',{vol:.9})}
   cn.white=Math.max(0,cn.white-dt*.7);if(cn.t>.6)run.goldK=Math.min(1,run.goldK+dt/2.4);run.rainK=Math.max(0,run.rainK-dt*.4);
   if(cn.t>3.4){cn.stage='pose';cn.t=0;cn.heroPose='pose';p.dir=1;run.audio.play('victory',{vol:1});run.fx.ring(p.x+p.w/2,p.y+p.h-10,'rgba(255,220,120,.95)',20,.8);run.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ffe27a',50,1.8);run.fx.text(text(run.lang,'victory'),p.x+p.w/2,p.y-60,'#ffe27a',true)}return}
  if(cn.stage==='pose'){if(cn.t>2.2)def.startStory(run);return}
  if(cn.stage==='story'){cn.letter=Math.min(1,cn.letter+dt*2.5);const line=def.lines(run)[cn.line];cn.chars=Math.min(line.text.length,cn.chars+dt*42);cn.lineT=(cn.lineT||0)+dt;
   if(run.attackPress||run.jumpBuffer>0){run.attackPress=false;run.jumpBuffer=0;def.advance(run)}
   if(cn.chars>=line.text.length&&cn.lineT>line.text.length/42+3.2)def.advance(run);return}
  if(cn.stage==='outro'){cn.letter=Math.max(0,cn.letter-dt*2.2);if(cn.letter<=0&&run.phase==='play'){if(run.skipBtn)run.skipBtn.style.display='none';run.cine=null;
    run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length})}}},
 heroName(run){return window.PirateHeroes?.get?.(run.heroId)?.name||'Captain'},
 lines(run){const t=k=>text(run.lang,k),h=def.heroName(run);return[{who:'hero',name:h,text:t('s1')},{who:'keeper',name:t('s2n'),text:t('s2')},{who:'',name:'',text:t('s3')},{who:'hero',name:h,text:t('s4')}]},
 startStory(run){const was=run.cine;run.cine={...(was||{}),stage:'story',t:0,T:was?.T||9,white:0,letter:0,line:0,chars:0,lineT:0,heroPose:'pose'};run.goldK=1;run.rainK=0;run.lensBroken=true;run.clearInputs();if(run.controls)run.controls.hidden=true;if(run.skipBtn)run.skipBtn.style.display='block';run.p.inv=99;def.music(run)},
 advance(run){const cn=run.cine;if(!cn||cn.stage!=='story')return;const lines=def.lines(run),line=lines[cn.line];if(cn.chars<line.text.length){cn.chars=line.text.length;return}cn.line++;cn.chars=0;cn.lineT=0;run.audio.play('coin',{vol:.3,rate:.7});if(cn.line>=lines.length)def.skipStory(run)},
 skipStory(run){const cn=run.cine;if(!cn)return;cn.stage='outro';cn.line=Math.min(cn.line,def.lines(run).length-1);if(run.skipBtn)run.skipBtn.style.display='none'},
 drawCineHero(run,c,p,base){const cx=p.x+p.w/2,t=run.time;c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(cx-60,0,cx+60,0);g.addColorStop(0,'rgba(255,220,120,0)');g.addColorStop(.5,'rgba(255,220,120,'+(.22+.08*Math.sin(t*4))+')');g.addColorStop(1,'rgba(255,220,120,0)');c.fillStyle=g;c.fillRect(cx-60,p.y-400,120,400+p.h);c.restore();
  run.fx.glow(c,cx,p.y+p.h*.4,110,'rgba(255,220,120,',.45);base(c,{...p,anim:'attackC',attack:0,dir:p.dir},run)},
 drawKeeperPortrait(run,c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#1a2432';c.fillRect(0,0,90,90);c.fillStyle='#cbb89a';c.beginPath();c.ellipse(45,52,22,26,0,0,TAU);c.fill();c.fillStyle='#9a9a96';c.beginPath();c.moveTo(26,58);c.quadraticCurveTo(45,98,64,58);c.closePath();c.fill();
  c.fillStyle='#5e5636';c.beginPath();c.moveTo(10,40);c.quadraticCurveTo(45,0,80,38);c.lineTo(86,46);c.quadraticCurveTo(45,24,4,48);c.closePath();c.fill();run.fx.glow(c,56,48,22,'rgba(157,255,176,',.8);c.fillStyle='#b8ffcf';c.beginPath();c.arc(56,48,6,0,TAU);c.fill();c.strokeStyle='#c9a24a';c.lineWidth=2;c.stroke();c.fillStyle='#ffcf6b';c.beginPath();c.arc(36,48,2.5,0,TAU);c.fill();c.restore()},
 drawCine(run,c){
  const W=E.W,cn=run.cine,hs=run.hudScale||1;if(cn.white>0){c.fillStyle='rgba(255,250,230,'+cn.white+')';c.fillRect(0,0,W,H/hs)}const bars=cn.stage==='story'||cn.stage==='outro'?cn.letter:0;if(bars<=0)return;
  const bh=96*bars;c.fillStyle='#000';c.fillRect(0,0,W,bh);c.fillRect(0,H/hs-bh,W,bh);
  if(cn.stage!=='story')return;const lines=def.lines(run),line=lines[Math.min(cn.line,lines.length-1)],shown=line.text.slice(0,Math.floor(cn.chars));
  const pw=Math.min(W-40,760),px=W/2-pw/2,py=bh+14;
  c.save();c.globalAlpha=bars;c.fillStyle='rgba(10,18,32,.9)';c.strokeStyle='#d2a653';c.lineWidth=2;c.beginPath();c.roundRect(px,py,pw,118,16);c.fill();c.stroke();
  let tx=px+22;if(line.who){c.save();c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.clip();c.fillStyle='#22344a';c.fillRect(px+14,py+14,90,90);
   if(line.who==='hero'&&run.skin)run.skin.drawPortrait(c,px+14,py+14,90,90);else if(line.who==='keeper')def.drawKeeperPortrait(run,c,px+14,py+14,1);c.restore();
   c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.stroke();tx=px+120}
  c.textAlign='left';if(line.name){c.font='800 17px Georgia, serif';c.fillStyle='#ffd98a';c.fillText(line.name,tx,py+32)}
  c.font='600 17px Arial, sans-serif';c.fillStyle='#eef6f8';const maxw=px+pw-tx-20;const words=shown.split(' ');let ln='',yy=py+(line.name?58:44);for(const w of words){const test=ln?ln+' '+w:w;if(c.measureText(test).width>maxw&&ln){c.fillText(ln,tx,yy);ln=w;yy+=24}else ln=test}c.fillText(ln,tx,yy);
  if(cn.chars>=line.text.length){c.font='700 13px Arial';c.fillStyle='rgba(255,227,160,'+(.5+.5*Math.sin(run.time*5))+')';c.textAlign='right';c.fillText('▶ '+text(run.lang,'tap'),px+pw-16,py+108)}
  c.restore()}
};
E.register(def);
})();
