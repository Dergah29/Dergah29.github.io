/* Pirate Strike — Meyxana (Pirate Tavern), opened from the Sunset Freeport harbor.
 * Host for the real-time 3D interior (harbor/harbor3d/src/tavern3d.js, in the shared 3D bundle loaded on demand), NPC dialogue (portrait, name,
 * typed text: first tap completes the line, the next advances; choices), the four table games (games/*.js),
 * reputation and daily rewards (games/state.js), tavern sound (audio.js + the 'tavern' music track),
 * Android Back, pause/resume and full disposal. Everything loads only when the player walks in. */
(()=>{'use strict';
if(window.PirateTavern)return;
const BASE='tavern/';
const T={
 az:{title:'MEYXANA',sub:'Batan Lövbər',sign:'BATAN LÖVBƏR',leave:'Limana qayıt',hint:'Personaja və ya masaya toxun · ətrafa baxmaq üçün sürüşdür',loading:'Meyxanaya daxil olursan…',fail:'Meyxananın 3D görünüşü açılmadı.',failGl:'Bu cihaz 3D görünüşü (WebGL) dəstəkləmir.',retry:'Yenidən cəhd et',lost:'Qrafika yaddaşı itdi. Yenidən aç.',
  rep:'Nüfuz',ranks:['Yad qonaq','Daimi müştəri','Etibarlı dənizçi','Meyxana əfsanəsi'],nextRank:'Növbəti rütbəyə {n} nüfuz qalıb.',topRank:'Ən yüksək rütbədəsən!',reset:'Gündəlik mükafatlar {t} sonra yenilənir.',todayWins:'Bu gün mükafatlı qələbələr: {u}/{l}.',limitDone:'Bugünkü mükafatlar alınıb — indi əyləncə üçün oynayırıq.',
  play:'Oynayaq',later:'Sonra gələcəyəm',cont:'Davam et',thanks:'Sağ ol!',news:'Başqa xəbər var?',master:'Usta masası açıldı! Şaşkida «Usta» çətinliyini seç.',
  names:{barkeep:'Meyxanaçı Yunus',oldsailor:'Qoca dənizçi Salman',dicer:'Zərbaz Qasım',xo:'Sümükbaş',knife:'Bıçaqçı Anna'},
  roles:{barkeep:'Piştaxta · xəbərlər',oldsailor:'Şaşki masası',dicer:'Zər masası',xo:'X–0 masası',knife:'Bıçaq hədəfi'},
  intro:['Xoş gəldin «Batan Lövbər»ə, kapitan! Bu limanda hər dənizçinin bir hekayəsi var — çoxu da burada danışılır.','Masalarda bəxtini sına: Salmanla şaşki, Qasımla zər, Sümükbaşla X–0, Anna ilə bıçaq atma.','Hər masada gündə iki qələbə bir az qızıl və meyxana nüfuzu gətirir. Giriş pulsuzdur, mərc yoxdur — sonra da əyləncə üçün oynaya bilərsən.'],
  newsLines:['Deyirlər, Lənətli Adanın totemləri yenə gecələr parıldayır.','Qara Admiralın gəmisi şimal sularında görünüb. Yelkənlərini ehtiyatla aç.','Qoca Salman gizli bir ada haqqında pıçıldayır… Amma əvvəlcə onu şaşkida məğlub etməlisən.','Sümükbaş bir vaxt bu meyxananın aşpazı idi. İndi isə yalnız X–0 oynayır. Takk-takk.','Anna bıçağı elə atır ki, uçan milçəyin qanadını kəsər.','Qasımın zərləri düzdür, and içir. Amma niyə həmişə gülümsəyir?'],
  greet:{oldsailor:'Hə, gənc kapitan… Otur. Dənizdə səbir lazımdır, şaşkida da.',dicer:'Zərlər istidir, cibim boşdur! Bir partiya atırıq?',xo:'Takk-takk! Sümüklərim X–0 üçün darıxıb. Təbaşir səndə, yoxsa məndə?',knife:'Hədəf fırlanır, əlin titrəməsin. Sınayaq?'}},
 en:{title:'TAVERN',sub:'The Sunken Anchor',sign:'THE SUNKEN ANCHOR',leave:'Back to the harbor',hint:'Tap a character or a table · drag to look around',loading:'Stepping into the tavern…',fail:'The 3D tavern could not be opened.',failGl:'This device does not support the 3D view (WebGL).',retry:'Try again',lost:'Graphics memory was lost. Reopen the tavern.',
  rep:'Reputation',ranks:['Stranger','Regular','Trusted sailor','Tavern legend'],nextRank:'{n} reputation to the next rank.',topRank:'You hold the highest rank!',reset:'Daily rewards reset in {t}.',todayWins:'Rewarded wins today: {u}/{l}.',limitDone:'Today’s rewards are claimed — now we play for fun.',
  play:'Let’s play',later:'I’ll come back later',cont:'Continue',thanks:'Thanks!',news:'Any other news?',master:'The Master table is open! Pick “Master” in checkers.',
  names:{barkeep:'Barkeep Yunus',oldsailor:'Old Salman',dicer:'Kasim the Dice-roller',xo:'Bonehead',knife:'Anna the Blade'},
  roles:{barkeep:'The bar · news',oldsailor:'Checkers table',dicer:'Dice table',xo:'X–O table',knife:'Knife target'},
  intro:['Welcome to the Sunken Anchor, captain! Every sailor in this port has a story — most of them get told in here.','Try your luck at the tables: checkers with Salman, dice with Kasim, X–O with Bonehead, knives with Anna.','Two wins a day at each table bring a little gold and tavern reputation. Free to sit, no stakes — and you can keep playing for fun.'],
  newsLines:['They say the totems of the Cursed Island glow again at night.','The Black Admiral’s ship was seen in the northern waters. Mind your sails.','Old Salman whispers about a hidden island… but you’ll have to beat him at checkers first.','Bonehead used to be our cook. Now he only plays X–O. Clack-clack.','Anna can clip a fly’s wing with a thrown blade.','Kasim swears his dice are honest. So why is he always smiling?'],
  greet:{oldsailor:'Ah, young captain… Sit. The sea wants patience, and so do draughts.',dicer:'The dice are hot and my purse is empty! A round?',xo:'Clack-clack! My bones have missed X–O. Your chalk or mine?',knife:'The target spins — keep your hand steady. Shall we?'}},
 tr:{title:'MEYHANE',sub:'Batık Çapa',sign:'BATIK ÇAPA',leave:'Limana dön',hint:'Bir karaktere veya masaya dokun · etrafa bakmak için kaydır',loading:'Meyhaneye giriyorsun…',fail:'3D meyhane açılamadı.',failGl:'Bu cihaz 3D görünümü (WebGL) desteklemiyor.',retry:'Tekrar dene',lost:'Grafik belleği kayboldu. Meyhaneyi yeniden aç.',
  rep:'İtibar',ranks:['Yabancı','Müdavim','Güvenilir denizci','Meyhane efsanesi'],nextRank:'Sonraki rütbeye {n} itibar kaldı.',topRank:'En yüksek rütbedesin!',reset:'Günlük ödüller {t} sonra yenilenir.',todayWins:'Bugünkü ödüllü galibiyetler: {u}/{l}.',limitDone:'Bugünün ödülleri alındı — artık eğlencesine oynuyoruz.',
  play:'Oynayalım',later:'Sonra gelirim',cont:'Devam',thanks:'Sağ ol!',news:'Başka haber var mı?',master:'Usta masası açıldı! Dama’da «Usta» zorluğunu seç.',
  names:{barkeep:'Meyhaneci Yunus',oldsailor:'Yaşlı denizci Salman',dicer:'Zarcı Kasım',xo:'Kemikkafa',knife:'Bıçakçı Anna'},
  roles:{barkeep:'Tezgâh · haberler',oldsailor:'Dama masası',dicer:'Zar masası',xo:'X–O masası',knife:'Bıçak hedefi'},
  intro:['Batık Çapa’ya hoş geldin, kaptan! Bu limandaki her denizcinin bir hikâyesi var — çoğu da burada anlatılır.','Masalarda şansını dene: Salman’la dama, Kasım’la zar, Kemikkafa’yla X–O, Anna’yla bıçak atma.','Her masada günde iki galibiyet biraz altın ve meyhane itibarı getirir. Oturmak ücretsiz, bahis yok — sonra da eğlencesine oynayabilirsin.'],
  newsLines:['Lanetli Ada’nın totemleri geceleri yine parlıyormuş.','Kara Amiral’in gemisi kuzey sularında görülmüş. Yelkenlerine dikkat et.','Yaşlı Salman gizli bir adadan fısıldıyor… ama önce onu damada yenmen gerek.','Kemikkafa bir zamanlar aşçımızdı. Şimdi sadece X–O oynuyor. Tak-tak.','Anna fırlattığı bıçakla uçan sineğin kanadını keser.','Kasım zarlarının dürüst olduğuna yemin ediyor. O zaman neden hep gülümsüyor?'],
  greet:{oldsailor:'Ah, genç kaptan… Otur. Deniz sabır ister, dama da.',dicer:'Zarlar sıcak, kesem boş! Bir el atalım mı?',xo:'Tak-tak! Kemiklerim X–O’yu özlemiş. Tebeşir sende mi bende mi?',knife:'Hedef dönüyor — elini sabit tut. Başlayalım mı?'}},
 ru:{title:'ТАВЕРНА',sub:'Затонувший якорь',sign:'ЗАТОНУВШИЙ ЯКОРЬ',leave:'Вернуться в гавань',hint:'Коснись персонажа или стола · проведи, чтобы осмотреться',loading:'Заходим в таверну…',fail:'Не удалось открыть 3D-таверну.',failGl:'Это устройство не поддерживает 3D (WebGL).',retry:'Повторить',lost:'Видеопамять потеряна. Открой таверну снова.',
  rep:'Репутация',ranks:['Чужак','Завсегдатай','Надёжный моряк','Легенда таверны'],nextRank:'До следующего ранга: {n} репутации.',topRank:'У тебя высший ранг!',reset:'Ежедневные награды обновятся через {t}.',todayWins:'Победы с наградой сегодня: {u}/{l}.',limitDone:'Награды на сегодня получены — теперь играем для души.',
  play:'Сыграем',later:'Зайду позже',cont:'Дальше',thanks:'Спасибо!',news:'Есть ещё новости?',master:'Стол мастера открыт! Выбери «Мастер» в шашках.',
  names:{barkeep:'Трактирщик Юнус',oldsailor:'Старый Салман',dicer:'Касым-игрок',xo:'Костяшка',knife:'Анна-Клинок'},
  roles:{barkeep:'Стойка · новости',oldsailor:'Стол шашек',dicer:'Стол костей',xo:'Стол крестиков-ноликов',knife:'Мишень для ножей'},
  intro:['Добро пожаловать в «Затонувший якорь», капитан! У каждого моряка в этом порту есть история — и большинство рассказывают здесь.','Испытай удачу за столами: шашки с Салманом, кости с Касымом, крестики-нолики с Костяшкой, ножи с Анной.','Две победы в день за каждым столом приносят немного золота и репутации. Садиться бесплатно, без ставок — а потом можно играть просто так.'],
  newsLines:['Говорят, тотемы Проклятого острова снова светятся по ночам.','Корабль Чёрного адмирала видели в северных водах. Береги паруса.','Старый Салман шепчет о тайном острове… но сначала обыграй его в шашки.','Костяшка когда-то был нашим коком. Теперь играет только в крестики-нолики. Цок-цок.','Анна брошенным ножом срежет крыло мухе на лету.','Касым клянётся, что кости у него честные. Почему же он всегда улыбается?'],
  greet:{oldsailor:'А, молодой капитан… Садись. Море любит терпение, и шашки тоже.',dicer:'Кости горячие, а кошель пуст! Партию?',xo:'Цок-цок! Мои кости соскучились по крестикам-ноликам. Чей мел — твой или мой?',knife:'Мишень вращается — держи руку твёрдо. Начнём?'}},
 pl:{title:'TAWERNA',sub:'Zatopiona Kotwica',sign:'ZATOPIONA KOTWICA',leave:'Wróć do portu',hint:'Dotknij postaci lub stołu · przeciągnij, by się rozejrzeć',loading:'Wchodzisz do tawerny…',fail:'Nie udało się otworzyć tawerny 3D.',failGl:'To urządzenie nie obsługuje widoku 3D (WebGL).',retry:'Spróbuj ponownie',lost:'Utracono pamięć grafiki. Otwórz tawernę ponownie.',
  rep:'Reputacja',ranks:['Obcy','Stały bywalec','Zaufany żeglarz','Legenda tawerny'],nextRank:'Do następnej rangi brakuje {n} reputacji.',topRank:'Masz najwyższą rangę!',reset:'Dzienne nagrody odnowią się za {t}.',todayWins:'Nagrodzone wygrane dzisiaj: {u}/{l}.',limitDone:'Dzisiejsze nagrody odebrane — teraz gramy dla zabawy.',
  play:'Zagrajmy',later:'Wrócę później',cont:'Dalej',thanks:'Dzięki!',news:'Masz jeszcze jakieś wieści?',master:'Stół mistrza otwarty! Wybierz «Mistrz» w warcabach.',
  names:{barkeep:'Karczmarz Yunus',oldsailor:'Stary Salman',dicer:'Kasim od kości',xo:'Kostek',knife:'Anna Ostrze'},
  roles:{barkeep:'Bar · wieści',oldsailor:'Stół warcabów',dicer:'Stół kości',xo:'Stół kółka i krzyżyka',knife:'Tarcza na noże'},
  intro:['Witaj w Zatopionej Kotwicy, kapitanie! Każdy żeglarz w tym porcie ma swoją historię — większość opowiada się tutaj.','Spróbuj szczęścia przy stołach: warcaby z Salmanem, kości z Kasimem, kółko i krzyżyk z Kostkiem, noże z Anną.','Dwie wygrane dziennie przy każdym stole dają trochę złota i reputacji. Siadasz za darmo, bez stawek — potem możesz grać dla zabawy.'],
  newsLines:['Mówią, że totemy Przeklętej Wyspy znów świecą nocą.','Statek Czarnego Admirała widziano na północnych wodach. Uważaj na żagle.','Stary Salman szepcze o ukrytej wyspie… ale najpierw musisz go pokonać w warcaby.','Kostek był kiedyś naszym kucharzem. Teraz gra już tylko w kółko i krzyżyk. Stuk-stuk.','Anna rzuconym nożem przytnie skrzydło lecącej muchy.','Kasim przysięga, że jego kości są uczciwe. Czemu więc zawsze się uśmiecha?'],
  greet:{oldsailor:'Ach, młody kapitanie… Siadaj. Morze lubi cierpliwość, warcaby też.',dicer:'Kości są gorące, a sakiewka pusta! Partyjka?',xo:'Stuk-stuk! Moje kości tęskniły za kółkiem i krzyżykiem. Twoja kreda czy moja?',knife:'Tarcza się kręci — trzymaj pewnie rękę. Zaczynamy?'}}};
const L=lang=>T[lang]||T.en;
const tr=(lang,k)=>(T[lang]&&T[lang][k]!=null?T[lang][k]:T.en[k]);
const fmt=(s,o)=>String(s).replace(/\{(\w+)\}/g,(_,k)=>o[k]??'');
const hhmm=ms=>{const m=Math.ceil(ms/60000);return Math.floor(m/60)+':'+String(m%60).padStart(2,'0')};
const GAME={oldsailor:'checkers',dicer:'dice',xo:'xo',knife:'knife'};
const ICON={barkeep:'<path d="M6 4h10v16H6zM16 8h3v8h-3M6 8h10"/>',oldsailor:'<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 12h16M12 4v16"/><circle cx="8" cy="8" r="1.6"/><circle cx="16" cy="16" r="1.6"/>',dicer:'<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.3"/><circle cx="15" cy="15" r="1.3"/><circle cx="15" cy="9" r="1.3"/><circle cx="9" cy="15" r="1.3"/>',xo:'<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',knife:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M21 3l-7 7"/>'};
const CSS=`
#pirate-tavern{position:fixed;inset:0;z-index:23000;background:#120a05;color:#f6e7c6;font-family:Georgia,'Times New Roman',serif;overflow:hidden;user-select:none;-webkit-user-select:none;touch-action:none}
#pirate-tavern .tv-stage{position:absolute;inset:0}
#pirate-tavern .tv-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
#pirate-tavern .tv-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 55%,transparent 55%,rgba(8,4,2,.55) 100%)}
#pirate-tavern .tv-top{position:absolute;left:max(12px,env(safe-area-inset-left));right:max(12px,env(safe-area-inset-right));top:max(10px,env(safe-area-inset-top));display:flex;align-items:center;gap:12px;pointer-events:none;z-index:3}
#pirate-tavern .tv-round{pointer-events:auto;width:48px;height:48px;border-radius:50%;border:2px solid #c9963f;background:radial-gradient(circle at 40% 30%,#5a3418,#2a1608);color:#ffe2a0;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px #0009;cursor:pointer;flex:none}
#pirate-tavern .tv-round svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
#pirate-tavern .tv-round:active{transform:scale(.94)}
#pirate-tavern .tv-title{display:flex;flex-direction:column;line-height:1.05;text-shadow:0 2px 6px #000}
#pirate-tavern .tv-title b{font-size:22px;letter-spacing:.12em;color:#ffd98a}
#pirate-tavern .tv-title small{font-size:13px;letter-spacing:.18em;color:#e9cf9c;text-transform:uppercase}
#pirate-tavern .tv-chips{margin-left:auto;display:flex;gap:8px;pointer-events:none}
#pirate-tavern .tv-chip{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:18px;background:rgba(20,10,4,.78);border:1px solid #8a6230;font-size:14px;white-space:nowrap}
#pirate-tavern .tv-chip b{color:#ffd98a}
#pirate-tavern.gaming .tv-top{display:none}
#pirate-tavern .tv-hint{position:absolute;left:50%;bottom:max(12px,env(safe-area-inset-bottom));transform:translateX(-50%);padding:8px 16px;border-radius:20px;background:rgba(20,10,4,.72);border:1px solid #8a6230;font-size:14px;white-space:nowrap;pointer-events:none;transition:opacity .4s;z-index:2}
#pirate-tavern .tv-markers{position:absolute;inset:0;pointer-events:none;z-index:2}
#pirate-tavern.talking .tv-markers,#pirate-tavern.gaming .tv-markers,#pirate-tavern.gaming .tv-hint,#pirate-tavern.talking .tv-hint{display:none}
#pirate-tavern .tv-marker{position:absolute;left:0;top:0;pointer-events:auto;border:0;padding:0;background:none;color:#ffe7ae;display:flex;flex-direction:column-reverse;align-items:center;gap:3px;transform:translate(-50%,-100%);cursor:pointer;min-width:52px;min-height:52px}
#pirate-tavern .tv-marker i{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 40% 30%,#ffe9a8,#d8a040 50%,#7c4a14);border:2px solid #fff3cf;box-shadow:0 0 0 4px rgba(255,200,90,.25),0 4px 10px #000a;animation:tv-pulse 2.2s ease-in-out infinite}
#pirate-tavern .tv-marker i svg{width:21px;height:21px;fill:none;stroke:#3a1d06;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
#pirate-tavern .tv-marker span{font-size:13px;font-weight:700;padding:2px 8px;border-radius:10px;background:rgba(20,10,4,.8);border:1px solid #8a6230;white-space:nowrap;text-shadow:0 1px 2px #000}
@keyframes tv-pulse{0%,100%{box-shadow:0 0 0 3px rgba(255,200,90,.22),0 4px 10px #000a}50%{box-shadow:0 0 0 9px rgba(255,200,90,.0),0 4px 10px #000a}}
#pirate-tavern .tv-dlg{position:absolute;left:50%;bottom:max(10px,env(safe-area-inset-bottom));transform:translate(-50%,30px);width:min(900px,calc(100% - 24px));display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:12px 16px 12px 12px;border-radius:16px;background:linear-gradient(#3b2311f5,#1f1108f5);border:2px solid #c9963f;box-shadow:0 10px 30px #000c;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:4;cursor:pointer}
#pirate-tavern .tv-dlg.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}
#pirate-tavern .tv-dlg img{width:84px;height:84px;border-radius:50%;border:3px solid #e2b764;background:#2a160a;object-fit:cover;box-shadow:0 0 0 4px #00000060}
#pirate-tavern .tv-dlg h2{margin:0;font-size:19px;color:#ffd98a}
#pirate-tavern .tv-dlg small{display:block;font-size:12px;letter-spacing:.08em;color:#e3c78f;text-transform:uppercase;margin-bottom:4px}
#pirate-tavern .tv-dlg p{margin:0;font-size:16px;line-height:1.38;min-height:2.76em}
#pirate-tavern .tv-dlg .tv-more{position:absolute;right:16px;top:10px;color:#ffd98a;animation:tv-bob 1s ease-in-out infinite;font-size:14px}
@keyframes tv-bob{50%{transform:translateY(3px)}}
#pirate-tavern .tv-choices{display:flex;flex-direction:column;gap:6px;justify-content:center;min-width:150px}
#pirate-tavern .tv-choices button{min-height:46px;padding:0 18px;border-radius:23px;border:2px solid #c9963f;background:linear-gradient(#6b3f1c,#3e220e);color:#ffe7ae;font:700 15px Georgia,serif;cursor:pointer}
#pirate-tavern .tv-choices button.gold{background:linear-gradient(#ffd977,#c98b25);color:#3a1d04;border-color:#fff1c2}
#pirate-tavern .tv-load{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(circle,#2a1608,#0c0603);font-size:18px;text-align:center;padding:24px;z-index:6}
#pirate-tavern .tv-load[hidden]{display:none}
#pirate-tavern .tv-load button{min-height:46px;padding:0 22px;border-radius:23px;border:2px solid #c9963f;background:#5a3418;color:#ffe7ae;font:700 16px Georgia,serif}
#pirate-tavern .tv-bar{width:min(320px,70%);height:10px;border-radius:5px;background:#3a2412;overflow:hidden;border:1px solid #8a6230}
#pirate-tavern .tv-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#d8a040,#ffe08a);transition:width .2s}
#pirate-tavern .tv-games{position:absolute;inset:0;z-index:5;pointer-events:none}
#pirate-tavern .tv-games>*{pointer-events:auto}
@media (max-height:380px){#pirate-tavern .tv-marker span{font-size:12px;padding:1px 6px}#pirate-tavern .tv-title b{font-size:18px}#pirate-tavern .tv-title small{font-size:11px}#pirate-tavern .tv-hint{font-size:12px}#pirate-tavern .tv-chip{font-size:12px;padding:4px 9px}#pirate-tavern .tv-dlg{padding:8px 12px 8px 8px;gap:9px}#pirate-tavern .tv-dlg img{width:58px;height:58px}#pirate-tavern .tv-choices{min-width:128px}#pirate-tavern .tv-dlg p{font-size:14px}#pirate-tavern .tv-choices button{min-height:44px;font-size:14px}}
@media (max-width:560px){#pirate-tavern .tv-dlg{grid-template-columns:auto 1fr}#pirate-tavern .tv-choices{grid-column:1 / -1;flex-direction:row;flex-wrap:wrap;justify-content:flex-end}}
@media (prefers-reduced-motion:reduce){#pirate-tavern .tv-marker i,#pirate-tavern .tv-more{animation:none}}`;
const svg=p=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+p+'</svg>';
const loaded=new Map();
function script(src){if(loaded.has(src))return loaded.get(src);const p=new Promise((ok,fail)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>{loaded.delete(src);s.remove();fail(Error('script '+src))};document.head.append(s)});loaded.set(src,p);return p}
let current=null;

class Tavern{
 constructor(o){this.o=o||{};this.lang=this.o.lang||(()=>{try{return localStorage.getItem('pf-lang')}catch{return null}})()||'en';if(!T[this.lang])this.lang='en';this.focused=null;this.closed=false;this.dlg=null;this.newsI=Math.floor(Math.random()*6)}
 t(k){return tr(this.lang,k)}
 async open(){window.PirateGdThrottle?.hold(this);
  if(!document.getElementById('pirate-tavern-style')){const s=document.createElement('style');s.id='pirate-tavern-style';s.textContent=CSS;document.head.append(s)}
  const r=this.root=document.createElement('section');r.id='pirate-tavern';r.setAttribute('role','dialog');r.setAttribute('aria-label',this.t('title')+' · '+this.t('sub'));
  r.innerHTML='<div class="tv-stage"></div><div class="tv-vignette"></div><div class="tv-markers"></div><div class="tv-top"><button class="tv-round tv-back"></button><div class="tv-title"><b></b><small></small></div><div class="tv-chips"><span class="tv-chip tv-gold">🪙 <b>0</b></span><span class="tv-chip tv-rep">⚓ <b>0</b> <span></span></span></div></div><div class="tv-hint"></div><div class="tv-dlg" aria-live="polite"><img alt=""><div><h2></h2><small></small><p></p></div><span class="tv-more">▼</span><div class="tv-choices"></div></div><div class="tv-games"></div><div class="tv-load"><div class="tv-msg"></div><div class="tv-bar"><i></i></div></div>';
  document.body.append(r);
  const q=s=>r.querySelector(s);this.q=q;
  q('.tv-back').innerHTML=svg('<path d="M15 5 8 12l7 7M8 12h12"/>');q('.tv-back').setAttribute('aria-label',this.t('leave'));q('.tv-back').onclick=()=>this.back();
  q('.tv-title b').textContent=this.t('title');q('.tv-title small').textContent=this.t('sub');q('.tv-hint').textContent=this.t('hint');q('.tv-msg').textContent=this.t('loading');
  q('.tv-dlg').addEventListener('click',e=>{if(e.target.closest('button'))return;this.advance()});
  this.prevBack=window.__pfBack;this.onBackFn=()=>{if(this.closed)return this.prevBack?.()||false;this.back();return true};window.__pfBack=this.onBackFn;
  this.holdReasons=new Set();this.lifecyclePaused=false;this.setLifecycle=(reason,value)=>{if(value)this.holdReasons.add(reason);else this.holdReasons.delete(reason);this.lifecyclePaused=this.holdReasons.size>0;this.game?.setSuspended('host',this.lifecyclePaused);if(this.lifecyclePaused){this.scene?.pause();this.audio?.pause()}else{if(!this.gameOpen)this.scene?.resume();this.audio?.resume()}};
  this.onVis=()=>this.setLifecycle('visibility',document.hidden);this.onNativePause=()=>this.setLifecycle('native',true);this.onNativeResume=()=>{this.setLifecycle('blur',false);this.setLifecycle('native',false)};this.onBlur=()=>this.setLifecycle('blur',true);this.onFocus=()=>this.setLifecycle('blur',false);
  document.addEventListener('visibilitychange',this.onVis);addEventListener('pirate:native-pause',this.onNativePause);addEventListener('pirate:native-resume',this.onNativeResume);addEventListener('blur',this.onBlur);addEventListener('focus',this.onFocus);this.onVis();
  this.onKey=e=>{if(e.key==='Escape'){e.preventDefault();this.back()}};addEventListener('keydown',this.onKey);
  this.offEco=window.PirateEconomy?.on?.(()=>this.chips())||null;
  await this.load();return this;
 }
 async load(){
  const q=this.q;q('.tv-load').hidden=false;q('.tv-msg').textContent=this.t('loading');q('.tv-load').querySelectorAll('button').forEach(b=>b.remove());q('.tv-bar i').style.width='4%';
  const gl=(()=>{try{const c=document.createElement('canvas');return!!(c.getContext('webgl2')||c.getContext('webgl'))}catch{return false}})();
  if(!gl){this.fail(this.t('failGl'),false);return}
  try{
   await Promise.all(['games/rules.js','games/state.js','games/games.js','audio.js'].map(f=>script(BASE+f)));
   this.state=window.PirateTavernState.create();this.chips();
   if(!window.PirateTavern3D)await new Promise((ok,no)=>{const sc=document.createElement('script');sc.src='harbor/harbor3d/harbor3d.js';sc.onload=ok;sc.onerror=()=>no(Error('3D bundle unavailable'));document.head.append(sc)});const mod=window.PirateTavern3D;if(!mod)throw Error('3D bundle unavailable');
   if(this.closed)return;
   this.scene=await mod.create(q('.tv-stage'),{base:BASE,adaptive:!window.__pfTavernFixedQuality,lang:this.lang,signText:this.t('sign'),reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,
    onProgress:p=>{if(this.q)this.q('.tv-bar i').style.width=Math.round(8+p*88)+'%'},
    onTap:id=>{if(this.dlg||this.gameOpen)return;id?this.talk(id):this.focused&&this.unfocus()},onFrame:p=>this.place(p),onContextLost:()=>this.fail(this.t('lost'),true),onSound:n=>this.audio?.sfx(n)});
   if(this.closed){this.scene.dispose();this.scene=null;return}
   this.audio=window.PirateTavernAudio.create();this.audio.start();this.audio.sfx('open');
   this.markers();q('.tv-load').hidden=true;if(document.hidden||this.lifecyclePaused)this.scene.pause();
   this.hintTimer=setTimeout(()=>{if(this.q)this.q('.tv-hint').style.opacity='0'},8000);
   if(!this.state.seen('intro'))this.introTimer=setTimeout(()=>{if(!this.closed&&!this.dlg&&!this.gameOpen)this.talk('barkeep')},1900);
  }catch(e){console.error('[tavern]',e);if(!this.closed)this.fail(this.t('fail'),true)}
 }
 fail(msg,retry){if(this.closed||!this.q)return;const q=this.q;try{this.scene?.dispose()}catch{}this.scene=null;q('.tv-markers').textContent='';q('.tv-load').hidden=false;q('.tv-msg').textContent=msg;q('.tv-load').querySelectorAll('button').forEach(b=>b.remove());
  const b=document.createElement('button');b.textContent=retry?this.t('retry'):this.t('leave');b.onclick=()=>retry?this.load():this.close();q('.tv-load').append(b);if(retry){const l=document.createElement('button');l.textContent=this.t('leave');l.onclick=()=>this.close();q('.tv-load').append(l)}}
 chips(){if(!this.q||!this.state)return;let g=0;try{g=window.PirateEconomy?.balance()??0}catch{}this.q('.tv-gold b').textContent=g.toLocaleString();const r=this.state.rank();this.q('.tv-rep b').textContent=r.rep;this.q('.tv-rep span').textContent=this.t('ranks')[r.i];this.q('.tv-rep').title=this.t('rep')}
 markers(){const box=this.q('.tv-markers');box.textContent='';this.mk={};const names=L(this.lang).names;
  for(const id of this.scene.spots){const b=document.createElement('button');b.className='tv-marker';b.dataset.spot=id;b.setAttribute('aria-label',names[id]);b.innerHTML='<i>'+svg(ICON[id]||'')+'</i><span></span>';b.querySelector('span').textContent=names[id];b.onclick=()=>this.talk(id);box.append(b);this.mk[id]=b}}
 place(points){if(!this.mk||!this.root)return;const W=this.root.clientWidth,H=this.root.clientHeight,box=[];
  for(const p of points){const b=this.mk[p.id];if(!b)continue;b.hidden=!p.visible;if(!p.visible)continue;const w=b.offsetWidth||90,h=b.offsetHeight||60;box.push({b,w,h,x:Math.max(w/2+4,Math.min(W-w/2-4,p.x)),y:Math.max(h+56,Math.min(H-8,p.y))})}
  // keep name tags apart: push the lower of two overlapping tags further down (a few passes are enough for 5 tags)
  box.sort((a,b)=>a.y-b.y);for(let pass=0;pass<4;pass++)for(let i=0;i<box.length;i++)for(let j=i+1;j<box.length;j++){const A=box[i],B=box[j],ox=(A.w+B.w)/2+4-Math.abs(A.x-B.x),oy=B.h-(B.y-A.y)+2;if(ox>0&&oy>0){if(B.y+oy<=H-8)B.y+=oy;else A.y=Math.max(A.h+56,A.y-oy)}}
  for(const q of box)q.b.style.transform='translate('+Math.round(q.x)+'px,'+Math.round(q.y)+'px) translate(-50%,-100%)'}
 /* ---------------- dialogue */
 script(id){
  const D=L(this.lang),st=this.state;
  if(id==='barkeep'){
   if(!st.seen('intro'))return{lines:D.intro,end:[[this.t('thanks'),()=>{st.seen('intro',true);this.endTalk()},'gold']]};
   const r=st.rank(),rk=D.ranks[r.i],lines=[D.newsLines[this.newsI++%D.newsLines.length],this.t('rep')+': '+r.rep+' · '+rk+'. '+(r.next!=null?fmt(this.t('nextRank'),{n:r.next-r.rep}):this.t('topRank'))+' '+fmt(this.t('reset'),{t:hhmm(st.msUntilReset())})];
   if(st.masterUnlocked()&&!st.seen('master')){lines.push(this.t('master'));st.seen('master',true)}
   const end=[[this.t('news'),()=>this.talk('barkeep',true)],[this.t('later'),()=>this.endTalk(),'gold']];this.contractTalk(id,lines,end);return{lines,end};
  }
  const d=st.daily(GAME[id],'normal');
  const lines=[D.greet[id],d.left>0?fmt(this.t('todayWins'),{u:d.used,l:d.limit}):this.t('limitDone')],end=[[this.t('later'),()=>this.endTalk()],[this.t('play'),()=>this.openGame(id),'gold']];
  const Q=window.PirateTavernQuest;if(id==='oldsailor'&&Q){const status=Q.status(),t=Q.text(this.lang);lines.push(t[status==='available'?'offer':status]||t.unavailable);if(this.questError){lines.push(t.error);this.questError=false}
   const refresh=ok=>{this.questError=!ok;this.talk(id,true)};
   if(status==='available')end.push([t.accept,()=>refresh(Q.accept()),'gold']);
   if(status==='active'){if(!window.PirateLevels?.isUnlocked(2))lines.push(t.locked);end.push([t.map,()=>{this.close();window.PirateHarbor?.openDestination('adventure')}])}
   if(status==='ready')end.push([t.claim,()=>refresh(Q.claim()),'gold']);
  }
  this.contractTalk(id,lines,end);return{lines,end};
 }
 talk(id,again){
  if(!this.scene||this.gameOpen)return;clearTimeout(this.introTimer);if(!again){this.scene.focus(id,0);this.focused=id;this.scene.react(id,'Wave')}else this.scene.react(id,'Yes');
  this.audio?.sfx('choice');const s=this.script(id),D=L(this.lang);
  this.dlg={id,lines:s.lines,end:s.end,i:0,typing:false};this.root.classList.add('talking');
  const d=this.q('.tv-dlg');d.dataset.npc=id;d.querySelector('img').src=this.scene.portrait(id)||'';d.querySelector('h2').textContent=D.names[id];d.querySelector('small').textContent=D.roles[id];d.classList.add('on');this.q('.tv-hint').style.opacity='0';
  this.showLine();
 }
 showLine(){
  const d=this.dlg,p=this.q('.tv-dlg p'),txt=d.lines[d.i]||'';clearInterval(this.typer);this.q('.tv-choices').textContent='';this.q('.tv-more').hidden=true;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){p.textContent=txt;this.lineDone();return}
  d.typing=true;let n=0;p.textContent='';this.typer=setInterval(()=>{n+=2;p.textContent=txt.slice(0,n);if(n%6===0)this.audio?.sfx('talk');if(n>=txt.length){clearInterval(this.typer);this.lineDone()}},28);
 }
 lineDone(){const d=this.dlg;if(!d)return;this.q('.tv-dlg p').textContent=d.lines[d.i];d.typing=false;const last=d.i>=d.lines.length-1;this.q('.tv-more').hidden=last;
  const box=this.q('.tv-choices');box.textContent='';
  if(last)for(const [label,fn,cls] of d.end){const b=document.createElement('button');b.textContent=label;if(cls)b.className=cls;b.onclick=e=>{e.stopPropagation();this.audio?.sfx('choice');fn()};box.append(b)}
  else{const b=document.createElement('button');b.textContent=this.t('cont');b.onclick=e=>{e.stopPropagation();this.advance()};box.append(b)}}
 advance(){const d=this.dlg;if(!d)return;if(d.typing){clearInterval(this.typer);this.lineDone();return}if(d.i<d.lines.length-1){d.i++;this.showLine()}}
 /* Meyxana contract chain (contracts.js): the regular who offers one adds its line and buttons */
 contractTalk(id,lines,end){const C=window.PirateTavernContracts,r=C?.lines(id,this.lang);if(!r)return;const {c,st,line,t}=r;lines.push(line);if(this.contractError){lines.push(t.error);this.contractError=false}
  const refresh=ok=>{this.contractError=!ok;this.talk(id,true)};
  if(st==='available')end.push([t.accept,()=>refresh(C.accept(c.id)),'gold']);
  if(st==='active'){if(!window.PirateLevels?.isUnlocked(c.level))lines.push(t.locked);end.push([t.map,()=>{this.close();window.PirateHarbor?.openDestination('adventure')}])}
  if(st==='ready')end.push([t.claim.replace('{g}',c.reward),()=>refresh(C.claim(c.id)),'gold'])}
 endTalk(keepFocus,instant){clearInterval(this.typer);this.dlg=null;const dl=this.q('.tv-dlg');if(instant){dl.style.transition='none';requestAnimationFrame(()=>dl.style.transition='')}dl.classList.remove('on');this.root.classList.remove('talking');if(!keepFocus)this.unfocus()}
 /* ---------------- games */
 openGame(id){
  const game=GAME[id];if(!game||!window.PirateTavernGames||this.gameOpen)return;this.endTalk(true,true);this.gameOpen=true;this.root.classList.add('gaming');
  // the camera sits down at the table first; the board opens over the frozen 3D view
  const sat=this.scene.sit?.(id);clearTimeout(this.sitTimer);this.sitTimer=setTimeout(()=>{if(this.closed||!this.gameOpen)return;this.scene.pause();this.startGame(id,game)},sat&&!matchMedia('(prefers-reduced-motion: reduce)').matches?700:0);
 }
 startGame(id,game){
  try{this.game=window.PirateTavernGames.open(game,{host:this.q('.tv-games'),lang:this.lang,state:this.state,npc:id,opponent:{name:L(this.lang).names[id],portrait:this.scene.portrait(id)},
   sfx:n=>this.audio?.sfx(n),react:k=>this.scene?.react(id,k),onResult:()=>this.chips(),
   onClose:()=>{this.game=null;this.gameOpen=false;this.root?.classList.remove('gaming');this.chips();if(this.scene&&!document.hidden&&!this.lifecyclePaused)this.scene.resume();this.unfocus()}})}
  catch(e){console.error('[tavern] game',e);try{window.PirateTavernGames.close()}catch{}this.q('.tv-games').textContent='';this.game=null;this.gameOpen=false;this.root.classList.remove('gaming');this.scene.resume();this.unfocus()}
 }
 unfocus(){if(this.dlg)this.endTalk(true);if(!this.focused)return false;this.focused=null;this.scene?.unfocus();return true}
 back(){if(this.game){this.game.back();return}if(this.dlg){this.endTalk();return}if(this.unfocus())return;this.close()}
 close(){if(this.closed)return;this.closed=true;window.PirateGdThrottle?.release(this);clearTimeout(this.sitTimer);clearTimeout(this.hintTimer);clearTimeout(this.introTimer);clearInterval(this.typer);document.removeEventListener('visibilitychange',this.onVis);removeEventListener('pirate:native-pause',this.onNativePause);removeEventListener('pirate:native-resume',this.onNativeResume);removeEventListener('blur',this.onBlur);removeEventListener('focus',this.onFocus);removeEventListener('keydown',this.onKey);this.offEco?.();
  try{this.game?.close()}catch{}this.game=null;
  if(window.__pfBack===this.onBackFn)window.__pfBack=this.prevBack;try{this.scene?.dispose()}catch(e){console.warn('[tavern] dispose',e)}this.scene=null;try{this.audio?.stop()}catch{}this.audio=null;this.root?.remove();this.root=null;this.q=null;if(current===this)current=null;
  try{this.o.onClose?.()}catch(e){console.error('[tavern] onClose',e)}}
}
window.PirateTavern={
 async open(o){if(current)current.close();const t=new Tavern(o);current=t;await t.open();return t},
 close(){current?.close()},
 get current(){return current}
};
})();
