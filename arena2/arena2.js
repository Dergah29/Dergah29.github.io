/* Pirate Arena v2 — lobby, match presentation, controls and result screen for the big-map modes.
 * Rules live in arena2/core.js (deterministic). Art: arena2/assets (Higgsfield, see ASSET_MANIFEST). Bots only for now. */
(()=>{'use strict';if(window.PirateArena2)return;
const C=window.PirateArena2Core,A='arena2/assets/',HEROES=['scarlet','sailor','captain','shark','crab'];
const T={
 az:{arena:'Arena',back:'Geri',hero:'Qəhrəman',diff:'Rəqib',easy:'Asan',normal:'Normal',hard:'Çətin',play:'Oyna',friend:'Dostla duel',training:'Məşq',loading:'Yüklənir…',
  modes:{flag:['Bayraq döyüşü','Rəqib bayrağını öz bazana gətir. 3 xal qazanır.','2 vs 2'],treasure:['Xəzinə ovu','Qızılları topla, 12 qızılı 15 saniyə saxla.','2 vs 2'],race:['Böyük yarış','Liman, cəngəllik, dərinlik və mağara — birinci finişə çat!','4 nəfər'],classic:['Klassik duel','Qılınc, kombo və taktika.','1 vs 1'],naval:['Fırtına duel','3D gəmi döyüşü.','3D']},
  heroes:{scarlet:'Mari',sailor:'Dənizçi',captain:'Kapitan',shark:'Köpəkbalığı',crab:'Yengəc'},you:'SƏN',ally:'DOST',foe:'RƏQİB',go:'BAŞLA!',vs:'VS',
  takeFlag:'Rəqib bayrağını götür!',runHome:'Bayrağı bazana gətir!',saveFlag:'Bayrağını geri al!',captured:'XAL!',lost:'Rəqib xal aldı',flagTaken:'Bayrağın oğurlandı!',flagBack:'Bayraq qayıtdı',
  grab:'Qızılları topla!',holdUs:'Qızılı qoru!',holdThem:'Rəqib qazanır!',dropped:'Qızıllar düşdü!',
  cp:'Yoxlama nöqtəsi',place:n=>n+'-ci yer',fell:'Suya düşdün!',ko:'Yıxıldın!',back3:'Qayıdırsan…',
  win:'QƏLƏBƏ',lose:'MƏĞLUBİYYƏT',draw:'BƏRABƏRƏ',mvp:'Ən yaxşı oyunçu',again:'Yenə oyna',toArena:'Arena',gold:n=>'+'+n+' qızıl',capped:'Bu günün Arena mükafatları alınıb',
  stat:{caps:'Bayraq',kills:'Zərbə',coins:'Qızıl',place:'Yer'},pause:'Fasilə',resume:'Davam et',quit:'Çıx',time:'Vaxt'},
 en:{arena:'Arena',back:'Back',hero:'Hero',diff:'Rivals',easy:'Easy',normal:'Normal',hard:'Hard',play:'Play',friend:'Duel a friend',training:'Training',loading:'Loading…',
  modes:{flag:['Flag Battle','Bring the rival flag to your base. 3 points wins.','2 vs 2'],treasure:['Treasure Hunt','Grab the gold, hold 12 coins for 15 seconds.','2 vs 2'],race:['Grand Race','Harbour, jungle, wilds and sea cave — finish first!','4 players'],classic:['Classic Duel','Swords, combos and tactics.','1 vs 1'],naval:['Storm Duel','3D ship battle.','3D']},
  heroes:{scarlet:'Mari',sailor:'Sailor',captain:'Captain',shark:'Shark',crab:'Crab'},you:'YOU',ally:'ALLY',foe:'RIVAL',go:'GO!',vs:'VS',
  takeFlag:'Grab the rival flag!',runHome:'Run it home!',saveFlag:'Win your flag back!',captured:'POINT!',lost:'Rivals scored',flagTaken:'Your flag was stolen!',flagBack:'Flag returned',
  grab:'Grab the gold!',holdUs:'Hold the gold!',holdThem:'Rivals are winning!',dropped:'Coins dropped!',
  cp:'Checkpoint',place:n=>['','1st','2nd','3rd','4th'][n]+' place',fell:'Splash!',ko:'Knocked out!',back3:'Coming back…',
  win:'VICTORY',lose:'DEFEAT',draw:'DRAW',mvp:'Best player',again:'Play again',toArena:'Arena',gold:n=>'+'+n+' gold',capped:"Today's Arena rewards are collected",
  stat:{caps:'Flags',kills:'Hits',coins:'Gold',place:'Place'},pause:'Paused',resume:'Resume',quit:'Quit',time:'Time'},
 tr:{arena:'Arena',back:'Geri',hero:'Kahraman',diff:'Rakip',easy:'Kolay',normal:'Normal',hard:'Zor',play:'Oyna',friend:'Arkadaşla düello',training:'Antrenman',loading:'Yükleniyor…',
  modes:{flag:['Bayrak Savaşı','Rakip bayrağı üssüne getir. 3 puan kazanır.','2 vs 2'],treasure:['Hazine Avı','Altınları topla, 12 altını 15 saniye tut.','2 vs 2'],race:['Büyük Yarış','Limandan mağaraya — ilk bitiren kazanır!','4 kişi'],classic:['Klasik Düello','Kılıç, kombo ve taktik.','1 vs 1'],naval:['Fırtına Düellosu','3D gemi savaşı.','3D']},
  heroes:{scarlet:'Mari',sailor:'Denizci',captain:'Kaptan',shark:'Köpekbalığı',crab:'Yengeç'},you:'SEN',ally:'DOST',foe:'RAKİP',go:'BAŞLA!',vs:'VS',
  takeFlag:'Rakip bayrağı kap!',runHome:'Üssüne koş!',saveFlag:'Bayrağını geri al!',captured:'PUAN!',lost:'Rakip puan aldı',flagTaken:'Bayrağın çalındı!',flagBack:'Bayrak döndü',
  grab:'Altınları topla!',holdUs:'Altını koru!',holdThem:'Rakip kazanıyor!',dropped:'Altınlar düştü!',
  cp:'Kontrol noktası',place:n=>n+'. sıra',fell:'Suya düştün!',ko:'Yere serildin!',back3:'Geri dönüyorsun…',
  win:'ZAFER',lose:'YENİLGİ',draw:'BERABERE',mvp:'En iyi oyuncu',again:'Tekrar oyna',toArena:'Arena',gold:n=>'+'+n+' altın',capped:'Bugünün Arena ödülleri alındı',
  stat:{caps:'Bayrak',kills:'Vuruş',coins:'Altın',place:'Sıra'},pause:'Duraklatıldı',resume:'Devam',quit:'Çık',time:'Süre'},
 ru:{arena:'Арена',back:'Назад',hero:'Герой',diff:'Соперники',easy:'Легко',normal:'Средне',hard:'Сложно',play:'Играть',friend:'Дуэль с другом',training:'Тренировка',loading:'Загрузка…',
  modes:{flag:['Битва за флаг','Принеси флаг соперника на свою базу. 3 очка — победа.','2 на 2'],treasure:['Охота за сокровищем','Собери золото и удержи 12 монет 15 секунд.','2 на 2'],race:['Большая гонка','Из гавани в морскую пещеру — финишируй первым!','4 игрока'],classic:['Классическая дуэль','Сабли, комбо и тактика.','1 на 1'],naval:['Штормовая дуэль','3D морской бой.','3D']},
  heroes:{scarlet:'Мари',sailor:'Матрос',captain:'Капитан',shark:'Акула',crab:'Краб'},you:'ТЫ',ally:'СОЮЗНИК',foe:'СОПЕРНИК',go:'ВПЕРЁД!',vs:'VS',
  takeFlag:'Захвати флаг соперника!',runHome:'Неси его на базу!',saveFlag:'Верни свой флаг!',captured:'ОЧКО!',lost:'Соперник забил',flagTaken:'Твой флаг украли!',flagBack:'Флаг вернулся',
  grab:'Собирай золото!',holdUs:'Удержи золото!',holdThem:'Соперник побеждает!',dropped:'Монеты выпали!',
  cp:'Чекпоинт',place:n=>n+'-е место',fell:'Плюх!',ko:'Нокаут!',back3:'Возвращаешься…',
  win:'ПОБЕДА',lose:'ПОРАЖЕНИЕ',draw:'НИЧЬЯ',mvp:'Лучший игрок',again:'Ещё раз',toArena:'Арена',gold:n=>'+'+n+' золота',capped:'Награды Арены на сегодня получены',
  stat:{caps:'Флаги',kills:'Удары',coins:'Золото',place:'Место'},pause:'Пауза',resume:'Продолжить',quit:'Выйти',time:'Время'},
 pl:{arena:'Arena',back:'Wróć',hero:'Bohater',diff:'Rywale',easy:'Łatwo',normal:'Normalnie',hard:'Trudno',play:'Graj',friend:'Pojedynek z przyjacielem',training:'Trening',loading:'Wczytywanie…',
  modes:{flag:['Bitwa o flagę','Zanieś flagę rywala do swojej bazy. 3 punkty wygrywają.','2 na 2'],treasure:['Polowanie na skarb','Zbieraj złoto i utrzymaj 12 monet przez 15 sekund.','2 na 2'],race:['Wielki wyścig','Z portu do morskiej jaskini — bądź pierwszy!','4 graczy'],classic:['Klasyczny pojedynek','Szable, kombosy i taktyka.','1 na 1'],naval:['Sztormowy pojedynek','Bitwa statków 3D.','3D']},
  heroes:{scarlet:'Mari',sailor:'Marynarz',captain:'Kapitan',shark:'Rekin',crab:'Krab'},you:'TY',ally:'SOJUSZNIK',foe:'RYWAL',go:'START!',vs:'VS',
  takeFlag:'Zdobądź flagę rywala!',runHome:'Zanieś ją do bazy!',saveFlag:'Odbierz swoją flagę!',captured:'PUNKT!',lost:'Rywale zdobyli punkt',flagTaken:'Twoja flaga skradziona!',flagBack:'Flaga wróciła',
  grab:'Zbieraj złoto!',holdUs:'Utrzymaj złoto!',holdThem:'Rywale wygrywają!',dropped:'Monety wypadły!',
  cp:'Punkt kontrolny',place:n=>n+'. miejsce',fell:'Plusk!',ko:'Powalony!',back3:'Wracasz…',
  win:'ZWYCIĘSTWO',lose:'PORAŻKA',draw:'REMIS',mvp:'Najlepszy gracz',again:'Jeszcze raz',toArena:'Arena',gold:n=>'+'+n+' złota',capped:'Dzisiejsze nagrody Areny odebrane',
  stat:{caps:'Flagi',kills:'Ciosy',coins:'Złoto',place:'Miejsce'},pause:'Pauza',resume:'Wznów',quit:'Wyjdź',time:'Czas'}};
const lang=()=>{let l=window.PirateMenuV2?.u?.lang;try{l=l||localStorage.getItem('pf-lang')}catch{}return T[l]?l:'az'};
const W=()=>T[lang()];
const EXTRA={az:{siege:['Top atəşi 3D','Gəmidən topla qalanı və düşmən gəmisini dağıt.','3D'],runner:['Cəngəllik qaçışı 3D','Qaç, tullan, böcəkləri əz, 3 relikti tap.','3D']},en:{siege:['Cannon Siege 3D','Fire from your ship and smash forts and enemy ships.','3D'],runner:['Jungle Runner 3D','Auto-run, jump, stomp beetles and find 3 jade relics.','3D']},tr:{siege:['Top Kuşatması 3D','Gemiden ateş et, kaleleri ve düşman gemilerini yık.','3D'],runner:['Orman Koşusu 3D','Otomatik koş, zıpla, böcekleri ez, 3 yeşim kalıntı bul.','3D']},ru:{siege:['Осада пушками 3D','Стреляй с корабля и круши форты и корабли.','3D'],runner:['Бег по джунглям 3D','Бегите, прыгайте, давите жуков и ищите 3 реликвии.','3D']},pl:{siege:['Oblężenie 3D','Strzelaj z okrętu i niszcz forty i okręty.','3D'],runner:['Bieg przez dżunglę 3D','Biegnij, skacz, rozdeptuj chrząszcze i znajdź 3 relikwie.','3D']}};
const store={get(k,d){try{return localStorage.getItem(k)||d}catch{return d}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
const REWARD=15,REWARDS_PER_DAY=3;
function payWin(){const E=window.PirateEconomy;if(!E)return 0;const d=new Date(),scope='A2'+d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');for(let k=1;k<=REWARDS_PER_DAY;k++){const id='win:'+k;if(E.claimed(scope,id))continue;try{return E.earn(scope,id,REWARD)||0}catch{return 0}}return -1}

/* ---------------------------------------------------------------- styles */
const CSS=`
.a2{position:absolute;inset:0;background:#0a1824;color:#fff3d6;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;overflow:hidden;user-select:none;-webkit-user-select:none;touch-action:none}
.a2 :where(button){font:inherit;color:inherit;cursor:pointer;min-height:0;border:0;border-radius:0;padding:0;background:none;box-shadow:none}
.a2-lobby{position:absolute;inset:0;display:flex;flex-direction:column;background:linear-gradient(180deg,#07131ccc,#0b1d2aee),url(${A}bg-bay.webp) center/cover;padding:max(10px,env(safe-area-inset-top)) max(14px,env(safe-area-inset-right)) max(10px,env(safe-area-inset-bottom)) max(14px,env(safe-area-inset-left));gap:8px;overflow-y:auto;touch-action:pan-y}
.a2-top{display:flex;align-items:center;gap:12px}
.a2-top h1{margin:0;font:800 clamp(22px,4.4vh,34px) Georgia,serif;color:#ffd77a;text-shadow:0 2px 0 #3a1d08,0 0 18px #000a;letter-spacing:.04em;flex:1}
.a2-btn{background:linear-gradient(#2c4a5c,#17303f);border:2px solid #c99b52;border-radius:12px;padding:8px 14px;font-weight:700;box-shadow:0 3px 0 #0a1822}
.a2-btn:active{transform:translateY(2px);box-shadow:none}
.a2-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.a2-label{font:700 12px system-ui;letter-spacing:.12em;text-transform:uppercase;color:#cfe7ef;opacity:.85;margin-right:4px}
.a2-heroes{display:flex;gap:6px}
.a2-hero{width:clamp(52px,11vh,74px);height:clamp(52px,11vh,74px);border-radius:14px;border:2px solid #6c5532;background:#10232f center/cover;padding:0;position:relative;overflow:hidden}
.a2-hero img{width:100%;height:100%;object-fit:cover;object-position:50% 18%}
.a2-hero[aria-pressed=true]{border-color:#ffd77a;box-shadow:0 0 0 3px #ffd77a55,0 0 18px #ffd77a88}
.a2-hero span{position:absolute;left:0;right:0;bottom:0;font:700 9px system-ui;background:#000a;padding:1px 0;white-space:nowrap;overflow:hidden;text-overflow:clip}
.a2-seg{display:flex;border:2px solid #c99b52;border-radius:12px;overflow:hidden}
.a2-seg button{background:#132a37;border:0;padding:7px 12px;font-weight:700}
.a2-seg button[aria-pressed=true]{background:linear-gradient(#ffd77a,#d49a3c);color:#2a1606}
.a2-cards{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(min(44vw,300px),1fr);gap:12px;overflow-x:auto;padding:4px 2px 8px;scroll-snap-type:x mandatory;flex:1;min-height:0;touch-action:pan-x}
.a2-card{scroll-snap-align:start;position:relative;border-radius:18px;border:3px solid #c99b52;padding:0;overflow:hidden;background:#000 center/cover;min-height:clamp(150px,52vh,320px);text-align:left;box-shadow:0 6px 18px #0009}
.a2-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#0000 35%,#000d)}
.a2-card div{position:absolute;left:12px;right:12px;bottom:10px;z-index:1}
.a2-card b{display:block;font:800 clamp(18px,3.6vh,26px) Georgia,serif;color:#ffe08f;text-shadow:0 2px 0 #000}
.a2-card small{display:block;font:500 clamp(11px,2.2vh,14px) system-ui;color:#f3ead6;margin-top:3px}
.a2-card i{position:absolute;top:10px;right:10px;z-index:1;font:800 12px system-ui;font-style:normal;background:#ffd77a;color:#2a1606;border-radius:999px;padding:3px 9px}
.a2-card:active{transform:scale(.98)}
.a2-foot{display:flex;gap:8px;justify-content:flex-end}
.a2-match{position:absolute;inset:0;background:#000}
.a2-match canvas.a2-view{position:absolute;inset:0;width:100%;height:100%}
.a2-hud{position:absolute;left:0;right:0;top:0;display:flex;justify-content:center;align-items:flex-start;pointer-events:none;padding-top:max(6px,env(safe-area-inset-top))}
.a2-score{display:flex;align-items:stretch;border-radius:14px;overflow:hidden;box-shadow:0 3px 10px #0008;font:800 clamp(16px,3.6vh,24px) Georgia,serif}
.a2-score span{padding:3px 16px;min-width:54px;text-align:center}
.a2-score .b{background:linear-gradient(#2a7fd0,#174d86)} .a2-score .r{background:linear-gradient(#d6463c,#8a2019)} .a2-score .t{background:#0d1d27e6;color:#ffe9b8;font:700 clamp(13px,2.8vh,18px) system-ui;display:flex;align-items:center;padding:0 12px}
.a2-mini{position:absolute;left:50%;top:calc(max(6px,env(safe-area-inset-top)) + clamp(30px,6.4vh,40px));transform:translateX(-50%);width:min(46vw,380px);height:22px;pointer-events:none}
.a2-pause{position:absolute;top:max(6px,env(safe-area-inset-top));left:max(8px,env(safe-area-inset-left));width:44px;height:44px;border-radius:12px;background:#0d1d27cc;border:2px solid #c99b52;font:800 16px system-ui}
.a2-msg{position:absolute;left:50%;top:26%;transform:translate(-50%,-50%);font:800 clamp(22px,6vh,42px) Georgia,serif;color:#ffe08f;text-shadow:0 3px 0 #3a1d08,0 0 24px #000;pointer-events:none;white-space:nowrap;transition:opacity .3s}
.a2-tip{position:absolute;left:50%;bottom:max(8px,env(safe-area-inset-bottom));transform:translateX(-50%);font:700 clamp(12px,2.6vh,15px) system-ui;background:#0d1d27b3;border-radius:999px;padding:4px 14px;pointer-events:none;white-space:nowrap}
.a2-count{position:absolute;inset:0;display:grid;place-items:center;font:900 clamp(60px,22vh,150px) Georgia,serif;color:#ffd77a;text-shadow:0 6px 0 #3a1d08,0 0 40px #000;pointer-events:none}
.a2-stick{position:absolute;left:0;bottom:0;width:45%;height:70%}
.a2-stick .ring{position:absolute;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;border:3px solid #ffffff55;background:#0006;display:none}
.a2-stick .knob{position:absolute;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;background:radial-gradient(#fff9,#cfe7ef55);border:2px solid #fffa;display:none}
.a2-pad{position:absolute;right:max(10px,env(safe-area-inset-right));bottom:max(10px,env(safe-area-inset-bottom));width:min(40vw,250px);height:min(40vw,210px)}
.a2-pad button{position:absolute;border-radius:50%;border:3px solid #ffd77acc;background:#0d1d2799 center/72% no-repeat;box-shadow:0 4px 10px #0008;padding:0}
.a2-pad button.on{background-color:#ffd77a77;transform:scale(.94)}
.a2-pad .atk{right:0;bottom:0;width:96px;height:96px} .a2-pad .jmp{right:104px;bottom:6px;width:74px;height:74px} .a2-pad .dsh{right:20px;bottom:104px;width:64px;height:64px}
.a2-over{position:absolute;inset:0;display:grid;place-items:center;background:#000a;z-index:5}
.a2-panel{background:linear-gradient(#17303f,#0d1d27);border:3px solid #c99b52;border-radius:18px;padding:16px 20px;text-align:center;min-width:min(80vw,320px);box-shadow:0 10px 30px #000c}
.a2-panel h2{margin:0 0 10px;font:800 28px Georgia,serif;color:#ffd77a}
.a2-panel .a2-btn{margin:4px}
.a2-vs{position:absolute;inset:0;background:#000 url(${A}vs.webp) center/cover;display:flex;align-items:center;justify-content:space-between;padding:0 4vw;z-index:6;animation:a2vs 2.4s ease forwards}
.a2-vs .side{display:flex;gap:1vw;align-items:flex-end}
.a2-vs .who{display:flex;flex-direction:column;align-items:center;font:800 clamp(12px,3vh,18px) Georgia,serif;text-shadow:0 2px 0 #000}
.a2-vs img{height:min(46vh,240px);filter:drop-shadow(0 6px 10px #000c)}
.a2-vs .r img{transform:scaleX(-1)}
.a2-vs .mid{font:900 clamp(40px,14vh,90px) Georgia,serif;color:#ffe08f;text-shadow:0 4px 0 #3a1d08,0 0 30px #000;align-self:center}
.a2-vs .sl{animation:a2in .5s ease both} .a2-vs .r.sl{animation-name:a2inr}
@keyframes a2in{from{transform:translateX(-60vw)}} @keyframes a2inr{from{transform:translateX(60vw)}}
@keyframes a2vs{0%,82%{opacity:1}100%{opacity:0;visibility:hidden}}
.a2-res{position:absolute;inset:0;z-index:7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;background:radial-gradient(#132b3acc,#050c12f2)}
.a2-res .ban{position:relative;width:min(70vw,420px);aspect-ratio:637/604;max-height:44vh;background:center/contain no-repeat;display:grid;place-items:center}
.a2-res .ban b{font:900 clamp(22px,6vh,40px) Georgia,serif;color:#fff2c4;text-shadow:0 3px 0 #3a1d08;margin-top:6%}
.a2-res .lose b{color:#e8e4dc;text-shadow:0 3px 0 #000}
.a2-res .mvp{display:flex;align-items:center;gap:10px;font:700 15px system-ui}
.a2-res .mvp img{width:56px;height:56px;border-radius:12px;object-fit:cover;object-position:50% 15%;border:2px solid #ffd77a}
.a2-res table{border-collapse:collapse;font:600 13px system-ui}
.a2-res td{padding:2px 9px} .a2-res tr.me{color:#ffd77a}
.a2-res .gold{font:800 18px Georgia,serif;color:#ffd77a}
@media (max-height:420px){.a2-pad .atk{width:84px;height:84px}.a2-pad .jmp{right:92px;width:64px;height:64px}.a2-pad .dsh{bottom:92px;width:56px;height:56px}}
`;
/* every rule is scoped under the Arena root so the older lobby styles (#pirate-arena-modes button{…}) never win */
const scoped=c=>c.replace(/(^|[{}])(\s*)([^@{}][^{}]*)\{/g,(m,a,ws,sel)=>a+ws+sel.split(',').map(x=>x.trim().startsWith('.')?'#pirate-arena-modes '+x.trim():x).join(',')+'{');
let css=null;function ensureCss(){if(!css){css=document.createElement('style');css.textContent=scoped(CSS)}if(!css.isConnected)document.head.append(css)}

/* ---------------------------------------------------------------- assets */
const IMG={};function img(name){if(!IMG[name]){const i=new Image();i.decoding='async';i.src=A+name+'.webp';IMG[name]=i}return IMG[name]}
const ready=i=>i.complete&&i.naturalWidth>0;
const loadImg=i=>ready(i)?Promise.resolve(i):new Promise((ok,no)=>{i.onload=()=>ok(i);i.onerror=()=>no(Error('img '+i.src))});
const SPRITES=['plat-wood','plat-stone','plat-bridge','ground-sand','flag-blue','flag-red','chest','chest-open','coin','pad','spikes','checkpoint','finish','base-blue','base-red','crates','barrels','palm','anchor','mast','cannon'];
const BG={bay:'bg-bay',jungle:'bg-jungle',harbor:'bg-harbor',wilds:'bg-wilds',cave:'bg-cave'};
const arenaLoad=h=>h==='scarlet'?{outfit:'outfit-classic',arena:true}:undefined;
async function heroArt(h){const a=await window.PirateHeroes.loadIllustration(h,arenaLoad(h));try{return await window.PirateArenaPresentation?.enhance?.(a)||a}catch{return a}}
const portraits={};function portrait(h){if(!portraits[h])portraits[h]=Promise.resolve().then(()=>window.PirateHeroes.illustratedCard(h,arenaLoad(h))).catch(()=>'');return portraits[h]}

/* ---------------------------------------------------------------- sound */
const SFX={swing:'sfx-swing',hit:'sfx-hit',coin:'sfx-coin',capture:'sfx-capture',splash:'sfx-splash',pad:'sfx-pad',flag:'sfx-flag',chest:'sfx-chest',cheer:'sfx-cheer',horn:'sfx-horn'};
class Sound{constructor(on){this.on=on;this.buf={};try{this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.gain=this.ctx.createGain();this.gain.gain.value=.55;this.gain.connect(this.ctx.destination)}catch{this.ctx=null}this.last={};this.legacy=null;try{this.legacy=new window.PirateArenaSound(()=>this.on())}catch{}}
 load(){if(!this.ctx)return;for(const k in SFX){fetch(A+SFX[k]+'.ogg').then(r=>r.ok?r.arrayBuffer():Promise.reject()).then(b=>this.ctx.decodeAudioData(b)).then(b=>{this.buf[k]=b}).catch(()=>{})}}
 play(k,vol=1){if(!this.on()||!this.ctx)return;const now=this.ctx.currentTime;if(this.last[k]&&now-this.last[k]<.06)return;this.last[k]=now;const b=this.buf[k];if(!b){const map={swing:'dash',hit:'hurt',coin:'score',capture:'victory',pad:'jump',flag:'interact',cheer:'victory'};if(map[k])this.legacy?.event(map[k]);return}
  const s=this.ctx.createBufferSource(),g=this.ctx.createGain();g.gain.value=vol;s.buffer=b;s.connect(g).connect(this.gain);s.start()}
 ev(k){if(['jump','land','dash','countdown'].includes(k))this.legacy?.event(k)}
 resume(){this.ctx?.resume?.().catch(()=>{});this.legacy?.resume?.()}
 suspend(){this.ctx?.suspend?.().catch(()=>{});this.legacy?.suspend?.()}
 close(){this.ctx?.close?.().catch(()=>{});this.legacy?.close?.().catch?.(()=>{})}}
const MUSIC={flag:'a2battle',treasure:'a2battle',race:'a2race'};
function music(track){try{window.PirateMusic?.want?.('arena2',track||null)}catch{}}

/* ---------------------------------------------------------------- lobby */
let host=null,hooks={},match=null;
function lobby(root,h){ensureCss();hooks=h||{};host=root;stopMatch();const L=W();let hero=store.get('pf-arena2-hero',null)||store.get('pf-hero','scarlet');if(!HEROES.includes(hero))hero='scarlet';let diff=store.get('pf-arena2-diff','normal');
 root.hidden=false;root.innerHTML='';const el=document.createElement('div');el.className='a2 am-lobby a2-lobby';
 el.innerHTML=`<div class="a2-top"><button class="a2-btn" data-back>← ${L.back}</button><h1>${L.arena}</h1></div>
 <div class="a2-row"><span class="a2-label">${L.hero}</span><div class="a2-heroes">${HEROES.map(h=>`<button class="a2-hero" data-hero="${h}" aria-pressed="${h===hero}" aria-label="${L.heroes[h]}"><img alt=""><span>${L.heroes[h]}</span></button>`).join('')}</div>
 <span style="flex:1"></span><span class="a2-label">${L.diff}</span><div class="a2-seg">${['easy','normal','hard'].map(d=>`<button data-diff="${d}" aria-pressed="${d===diff}">${L[d]}</button>`).join('')}</div></div>
 <div class="a2-cards">${['flag','treasure','race','classic','naval','siege','runner'].map(m=>{const X=EXTRA[lang()]||EXTRA.en,t=L.modes[m]||X[m],art=m==='siege'?'siege/art/sea.webp':m==='runner'?'runner/art/jungle.webp':`${A}card-${m}.webp`;return`<button class="a2-card" data-mode="${m}"${m==='naval'?' data-naval-duel="1"':''} style="background-image:url(${art})"><i>${t[2]}</i><div><b>${t[0]}</b><small>${t[1]}</small></div></button>`}).join('')}</div>
 <div class="a2-foot"><button class="a2-btn" data-classic-friend>⚔ ${L.friend}</button><button class="a2-btn" data-training>${L.training}</button></div>`;
 root.append(el);
 for(const b of el.querySelectorAll('[data-hero]')){portrait(b.dataset.hero).then(src=>{if(src)b.querySelector('img').src=src});b.onclick=()=>{hero=b.dataset.hero;store.set('pf-arena2-hero',hero);for(const x of el.querySelectorAll('[data-hero]'))x.setAttribute('aria-pressed',String(x===b))}}
 for(const b of el.querySelectorAll('[data-diff]'))b.onclick=()=>{diff=b.dataset.diff;store.set('pf-arena2-diff',diff);for(const x of el.querySelectorAll('[data-diff]'))x.setAttribute('aria-pressed',String(x===b))};
 el.querySelector('[data-back]').onclick=()=>hooks.close?.();
 el.querySelector('[data-classic-friend]').onclick=()=>hooks.friend?.();el.querySelector('[data-training]').onclick=()=>hooks.training?.();
 for(const b of el.querySelectorAll('[data-mode]'))b.onclick=()=>{const m=b.dataset.mode;if(m==='classic')return hooks.classic?.();if(m==='naval')return hooks.naval?.();if(m==='siege')return hooks.siege?.();if(m==='runner')return hooks.runner?.();start(m,{hero,difficulty:diff})};
 el.querySelector('[data-back]').focus()}

/* ---------------------------------------------------------------- match */
function pickTeam(hero,mode){const rest=HEROES.filter(h=>h!==hero);for(let i=rest.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[rest[i],rest[j]]=[rest[j],rest[i]]}return[hero,rest[0],rest[1],rest[2]]}
function stopMatch(){if(!match)return;const m=match;match=null;m.stopped=true;cancelAnimationFrame(m.raf);m.cleanup?.();try{m.sound?.close()}catch{}music(null);window.PirateCover?.release('arena2')}
async function start(mode,opts){if(!host)return;stopMatch();ensureCss();const L=W();const heroes=pickTeam(opts.hero||'scarlet',mode);
 const s=C.create(mode,{hero:heroes[0],heroes,difficulty:opts.difficulty||'normal',seed:(Date.now()%100000)+1});
 const m=match={mode,opts,s,heroes,raf:0,arts:[],acc:0,last:0,phase:'load',count:3.6,cam:{x:s.players[0].x,y:s.players[0].y-200},shake:0,fx:[],msgs:[],inputs:{},keys:new Set(),touch:{},paused:false,stopped:false,seen:0,results:null};
 window.PirateCover?.hold('arena2');
 host.innerHTML='';const el=document.createElement('div');el.className='a2 a2-match';
 el.innerHTML=`<canvas class="a2-view"></canvas><div class="a2-hud"><div class="a2-score">${mode==='race'?`<span class="t" data-time></span>`:`<span class="b" data-s0>0</span><span class="t" data-time></span><span class="r" data-s1>0</span>`}</div></div><canvas class="a2-mini"></canvas>
 <button class="a2-pause" data-pause aria-label="${L.pause}">II</button><div class="a2-msg" data-msg></div><div class="a2-tip" data-tip></div>
 <div class="a2-stick" data-stick><div class="ring"></div><div class="knob"></div></div>
 <div class="a2-pad"><button class="dsh" data-k="dash" style="background-image:url(controls/icons/dash.webp)" aria-label="dash"></button><button class="jmp" data-k="jump" style="background-image:url(controls/icons/jump.webp)" aria-label="jump"></button><button class="atk" data-k="attack" style="background-image:url(controls/icons/attack.webp)" aria-label="attack"></button></div>
 <div class="a2-over" data-loading><div class="a2-panel"><h2>${L.modes[mode][0]}</h2><p>${L.loading}</p></div></div>`;
 host.append(el);m.el=el;m.canvas=el.querySelector('.a2-view');m.ctx=m.canvas.getContext('2d');m.mini=el.querySelector('.a2-mini');m.mctx=m.mini.getContext('2d');
 m.sound=new Sound(()=>window.PirateMenuV2?.u?.sound!==false);m.sound.load();
 bindControls(m);
 try{const map=C.MAPS[mode],bgs=[...new Set([map.bg,...(map.biomes||[]).map(b=>b[1])])].map(b=>BG[b]||'bg-bay');
  await Promise.all([...SPRITES,...bgs].map(n=>loadImg(img(n)).catch(()=>null)));m.arts=await Promise.all(heroes.map(h=>heroArt(h).catch(()=>null)));
 }catch(e){console.warn('Arena2 load',e)}
 if(m.stopped)return;el.querySelector('[data-loading]').remove();
 music(MUSIC[mode]);showVs(m);m.phase='vs';m.vsUntil=performance.now()+2300;m.raf=requestAnimationFrame(t=>loop(m,t))}
async function showVs(m){const L=W(),s=m.s,v=document.createElement('div');v.className='a2-vs';
 const team=t=>s.players.filter(p=>m.mode==='race'?(t?p.i>0:p.i===0):p.team===t);
 const side=(t,cls)=>`<div class="side sl ${cls}">${team(t).map(p=>`<div class="who"><img data-h="${p.hero}" alt="">${p.i===0?L.you:m.mode!=='race'&&p.team===0?L.ally:L.heroes[p.hero]}</div>`).join('')}</div>`;
 v.innerHTML=side(0,'l')+`<div class="mid">${L.vs}</div>`+side(1,'r');m.el.append(v);for(const i of v.querySelectorAll('img[data-h]'))portrait(i.dataset.h).then(src=>{if(src)i.src=src});setTimeout(()=>v.remove(),2600);m.sound.play('horn',.6)}

/* ---------------------------------------------------------------- input */
function bindControls(m){const el=m.el,stick=el.querySelector('[data-stick]'),ring=stick.querySelector('.ring'),knob=stick.querySelector('.knob');let sid=null,ox=0,oy=0;
 const setAxis=(dx,dy)=>{m.touch.left=dx<-.28;m.touch.right=dx>.28;m.touch.down=dy>.62;if(dy<-.62&&!m.touch.stickJump){m.touch.stickJump=true}else if(dy>-.4)m.touch.stickJump=false};
 stick.addEventListener('pointerdown',e=>{e.preventDefault();m.sound.resume();sid=e.pointerId;stick.setPointerCapture(sid);const r=stick.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;ring.style.cssText=knob.style.cssText=`display:block;left:${ox}px;top:${oy}px`});
 stick.addEventListener('pointermove',e=>{if(e.pointerId!==sid)return;const r=stick.getBoundingClientRect(),dx=e.clientX-r.left-ox,dy=e.clientY-r.top-oy,len=Math.hypot(dx,dy),k=len>50?50/len:1;knob.style.left=ox+dx*k+'px';knob.style.top=oy+dy*k+'px';setAxis(dx/50,dy/50)});
 const up=e=>{if(e.pointerId!==sid)return;sid=null;ring.style.display=knob.style.display='none';setAxis(0,0)};stick.addEventListener('pointerup',up);stick.addEventListener('pointercancel',up);
 for(const b of el.querySelectorAll('[data-k]')){const k=b.dataset.k;b.addEventListener('pointerdown',e=>{e.preventDefault();m.sound.resume();b.setPointerCapture(e.pointerId);m.touch[k]=true;b.classList.add('on');try{navigator.vibrate?.(8)}catch{}});const off=()=>{m.touch[k]=false;b.classList.remove('on')};b.addEventListener('pointerup',off);b.addEventListener('pointercancel',off);b.addEventListener('lostpointercapture',off)}
 const KEYS={ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',ArrowUp:'jump',KeyW:'jump',Space:'jump',ArrowDown:'down',KeyS:'down',KeyJ:'attack',KeyX:'attack',KeyK:'attack',ShiftLeft:'dash',ShiftRight:'dash',KeyL:'dash'};
 const kd=e=>{if(e.code==='Escape'){togglePause(m);return}const k=KEYS[e.code];if(!k)return;e.preventDefault();m.sound.resume();m.keys.add(k)},ku=e=>{const k=KEYS[e.code];if(k)m.keys.delete(k)};
 const blur=()=>{m.keys.clear();for(const k in m.touch)m.touch[k]=false;if(m.phase==='play')togglePause(m,true)};
 const vis=()=>{if(document.hidden)blur()};
 window.addEventListener('keydown',kd);window.addEventListener('keyup',ku);window.addEventListener('blur',blur);document.addEventListener('visibilitychange',vis);
 el.querySelector('[data-pause]').onclick=()=>togglePause(m);
 m.prevBack=window.__pfBack;m.back=()=>{if(match!==m)return m.prevBack?.()||false;if(m.phase==='result'){toLobby();return true}togglePause(m);return true};window.__pfBack=m.back;
 m.cleanup=()=>{window.removeEventListener('keydown',kd);window.removeEventListener('keyup',ku);window.removeEventListener('blur',blur);document.removeEventListener('visibilitychange',vis);if(window.__pfBack===m.back)window.__pfBack=m.prevBack}}
function input(m){const t=m.touch,k=m.keys;return{left:t.left||k.has('left'),right:t.right||k.has('right'),jump:t.jump||t.stickJump||k.has('jump'),down:t.down||k.has('down'),attack:t.attack||k.has('attack'),dash:t.dash||k.has('dash')}}
function togglePause(m,force){if(m.phase!=='play'&&m.phase!=='count')return;const L=W();if(m.paused&&!force){m.paused=false;m.el.querySelector('[data-pausebox]')?.remove();m.sound.resume();m.last=0;return}if(m.paused)return;m.paused=true;m.sound.suspend();
 const o=document.createElement('div');o.className='a2-over';o.dataset.pausebox='';o.innerHTML=`<div class="a2-panel"><h2>${L.pause}</h2><button class="a2-btn" data-r>▶ ${L.resume}</button><button class="a2-btn" data-q>${L.quit}</button></div>`;o.querySelector('[data-r]').onclick=()=>togglePause(m);o.querySelector('[data-q]').onclick=toLobby;m.el.append(o)}
function toLobby(){stopMatch();if(host)lobby(host,hooks)}

/* ---------------------------------------------------------------- loop */
function loop(m,t){if(m.stopped)return;m.raf=requestAnimationFrame(tt=>loop(m,tt));const dt=m.last?Math.min(.1,(t-m.last)/1000):0;m.last=t;m.vt=(m.vt||0)+dt;
 if(m.phase==='vs'&&t>=m.vsUntil){m.phase='count'}
 if(!m.paused){if(m.phase==='count'){const before=Math.ceil(m.count);m.count-=dt;if(Math.ceil(m.count)!==before&&m.count>0&&m.count<=3)m.sound.ev('countdown');if(m.count<=0){m.phase='play';flash(m,W().go,1);m.sound.play('horn',.8);tipFor(m)}}
  else if(m.phase==='play'){m.acc+=dt;let n=0;while(m.acc>=C.DT&&n++<8){C.step(m.s,input(m));m.acc-=C.DT}if(n>=8)m.acc=0;react(m);if(m.s.done){m.phase='end';m.endAt=t;m.sound.play('cheer',.7)}}
  else if(m.phase==='end'&&t-m.endAt>1400){m.phase='result';showResult(m)}}
 draw(m,dt);hud(m)}
function flash(m,text,secs=1.6){const e=m.el.querySelector('[data-msg]');e.textContent=text;e.style.opacity=1;clearTimeout(m.msgT);m.msgT=setTimeout(()=>{e.style.opacity=0},secs*1000)}
function tip(m,text){const e=m.el.querySelector('[data-tip]');if(e.textContent!==text)e.textContent=text;e.hidden=!text}
function tipFor(m){const L=W(),s=m.s,me=s.players[0];if(s.mode==='flag'){tip(m,me.carry!==null?L.runHome:s.flags[0].carrier!==null?L.saveFlag:L.takeFlag)}else if(s.mode==='treasure'){if(s.hold)tip(m,(s.hold.team===0?L.holdUs:L.holdThem)+' '+Math.ceil(s.hold.until-s.time)+'s');else tip(m,L.grab)}else{const place=1+s.players.filter(p=>p!==me&&(p.finish!==null&&(me.finish===null||p.finish<me.finish)||me.finish===null&&p.finish===null&&p.x>me.x)).length;tip(m,L.place(place))}}
function react(m){const L=W(),s=m.s,ev=s.events;const fresh=ev.filter(e=>e.t>m.seen);if(fresh.length)m.seen=fresh[fresh.length-1].t;
 for(const e of fresh){const p=e.who!==undefined?s.players[e.who]:null,mine=e.who===0;
  switch(e.type){
   case 'swing':m.sound.play('swing',mine?.7:.35);break;
   case 'hit':m.sound.play('hit',e.who===0||e.by===0?.9:.4);burst(m,e.x,e.y-70,'#fff1b0',10);if(e.who===0||e.by===0)m.shake=.25;break;
   case 'jump':case 'jump2':if(mine)m.sound.ev('jump');break;
   case 'land':if(mine)m.sound.ev('land');dust(m,p.x,p.y);break;
   case 'dash':if(mine)m.sound.ev('dash');break;
   case 'pad':m.sound.play('pad',mine?.9:.4);burst(m,e.x,p.y-10,'#ffd77a',8);break;
   case 'splash':m.sound.play('splash',mine?.9:.4);splash(m,e.x);if(mine)flash(m,L.fell);break;
   case 'ko':if(e.who===0)flash(m,L.ko);burst(m,p.x,p.y-60,'#ffb08a',16);break;
   case 'spike':if(mine)flash(m,L.ko);break;
   case 'coin':m.sound.play('coin',mine?.8:.3);break;
   case 'coinSpawn':m.sound.play('chest',.35);break;
   case 'coinDrop':m.sound.play('chest',.5);if(s.players[0]&&Math.abs(e.x-s.players[0].x)<900)flash(m,L.dropped,1.2);break;
   case 'flagTake':m.sound.play('flag',.8);if(e.team===0)flash(m,L.flagTaken);break;
   case 'flagReturn':if(e.team===0)flash(m,L.flagBack,1.2);break;
   case 'capture':m.sound.play('capture',1);flash(m,e.team===0?L.captured:L.lost,2);burst(m,s.players[e.by].x,s.players[e.by].y-80,e.team?'#ff6a5c':'#5cb8ff',30);break;
   case 'holdStart':flash(m,e.team===0?L.holdUs:L.holdThem,1.8);break;
   case 'checkpoint':flash(m,L.cp,1.1);m.sound.play('flag',.5);break;
   case 'finishLine':if(e.who===0){flash(m,L.place(e.place),2);m.sound.play('cheer',.8)}break}}
 if(s.time%0.25<C.DT)tipFor(m)}

/* ---------------------------------------------------------------- effects */
function burst(m,x,y,color,n){for(let i=0;i<n;i++){const a=i/n*6.283+Math.random(),v=180+Math.random()*260;m.fx.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-120,life:.5+Math.random()*.3,t:0,color,r:4+Math.random()*4})}}
function dust(m,x,y){for(let i=0;i<6;i++)m.fx.push({x:x+(i-3)*8,y:y-4,vx:(i-3)*40,vy:-40-Math.random()*40,life:.35,t:0,color:'#e9dcc0',r:6,g:0})}
function splash(m,x){for(let i=0;i<22;i++){const a=-Math.PI/2+(Math.random()-.5)*1.4,v=300+Math.random()*420;m.fx.push({x,y:C.WATER-60,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:.8,t:0,color:'#bff3ff',r:5+Math.random()*5})}}

/* ---------------------------------------------------------------- render */
const VIEW_H=780;
function draw(m,dt){const cv=m.canvas,ctx=m.ctx,dpr=Math.min(window.devicePixelRatio||1,1.5),cw=cv.clientWidth,ch=cv.clientHeight;if(!cw||!ch)return;
 if(cv.width!==Math.round(cw*dpr)||cv.height!==Math.round(ch*dpr)){cv.width=Math.round(cw*dpr);cv.height=Math.round(ch*dpr)}
 const s=m.s,map=C.MAPS[s.mode],me=s.players[0],k=cv.height/VIEW_H,vw=cv.width/k,vh=VIEW_H;
 // camera: follow the hero with a little look-ahead; during the countdown sweep in from the objective
 let tx=me.x+me.dir*vw*.12,ty=me.y-150;if(m.phase==='vs'||m.phase==='count'){const f=Math.max(0,Math.min(1,(m.count-.4)/3));const goal=s.mode==='flag'?map.bases[1]:s.mode==='treasure'?map.chests[0]:{x:map.finish,y:800};tx=goal.x+(me.x-goal.x)*(1-f*f);ty=goal.y-150+(me.y-goal.y)*(1-f*f)}
 const lerp=m.phase==='play'?Math.min(1,dt*6):1;m.cam.x+=(tx-m.cam.x)*lerp;m.cam.y+=(ty-m.cam.y)*lerp;
 const cx=Math.max(vw/2,Math.min(map.w-vw/2,m.cam.x)),cy=Math.max(vh/2-60,Math.min(1080-vh/2,m.cam.y));
 m.shake=Math.max(0,m.shake-dt);const sx=m.shake?(Math.random()-.5)*14*m.shake/.25:0,sy=m.shake?(Math.random()-.5)*10*m.shake/.25:0;
 const left=cx-vw/2+sx,top=cy-vh/2+sy,time=m.vt||0;
 ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#0b1a24';ctx.fillRect(0,0,cv.width,cv.height);
 // parallax backdrop (biome under the camera; race crossfades)
 const biome=(map.biomes||[[0,map.bg]]).filter(b=>b[0]<=cx).pop()[1];const bimg=img(BG[biome]||'bg-bay');
 if(ready(bimg)){const bh=cv.height*1.12,bw=bh*bimg.width/bimg.height;let ox=-((left*.22*k)%(bw*2));if(ox>0)ox-=bw*2;const by=-cv.height*.06-(top-150)*.12*k;
  for(let x=ox,i=0;x<cv.width;x+=bw,i++){ctx.save();if(i%2){ctx.translate(x+bw,by);ctx.scale(-1,1);ctx.drawImage(bimg,0,0,bw,bh)}else ctx.drawImage(bimg,x,by,bw,bh);ctx.restore()}}
 ctx.setTransform(k,0,0,k,-left*k,-top*k);
 // sea
 const sea=ctx.createLinearGradient(0,940,0,1100);sea.addColorStop(0,'#2b8fb0cc');sea.addColorStop(1,'#0b3b55');ctx.fillStyle=sea;ctx.fillRect(left-10,950,vw+20,200);
 ctx.strokeStyle='#d8f6ffaa';ctx.lineWidth=3;ctx.beginPath();for(let x=Math.floor(left/60)*60;x<left+vw+60;x+=60){const y=950+Math.sin(x*.02+time*2)*5;x===Math.floor(left/60)*60?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke();
 // decorations behind
 decor(ctx,map,left,vw);
 // ground blocks
 const gs=img('ground-sand');for(const [a,b,y] of map.ground){if(b<left-50||a>left+vw+50)continue;const grd=ctx.createLinearGradient(0,y,0,1080);grd.addColorStop(0,'#6b4a2c');grd.addColorStop(1,'#2a1a10');ctx.fillStyle=grd;ctx.fillRect(a,y+30,b-a,1080-y);
  if(ready(gs)){const h=110,w=h*gs.width/gs.height,i0=gs.width*.03,iw=gs.width*.94;for(let x=a;x<b;x+=w-2){const cw2=Math.min(w,b-x);ctx.drawImage(gs,i0,0,iw*cw2/w,gs.height,x,y-12,cw2,h)}}}
 // one-way platforms and movers
 const P={wood:'plat-wood',stone:'plat-stone',bridge:'plat-bridge'};
 for(const [x,y,w,kind] of map.plats){if(x+w<left-50||x>left+vw+50)continue;plat(ctx,img(P[kind]||'plat-wood'),x,y,w,kind)}
 (map.movers||[]).forEach(mv=>{const q=C.moverPos(map,mv,s.time);plat(ctx,img('plat-wood'),q.x,q.y,mv.w,'wood')});
 for(const [x,y] of map.pads){const i=img('pad');if(ready(i))ctx.drawImage(i,x-34,y-92,68,98)}
 for(const [x,y,w] of map.spikes){const i=img('spikes');if(ready(i))for(let xx=x;xx<x+w;xx+=70)ctx.drawImage(i,xx,y-34,Math.min(70,x+w-xx),36)}
 // mode objects
 if(s.mode==='flag'){[0,1].forEach(t=>{const b=map.bases[t],i=img(t?'base-red':'base-blue');if(ready(i))ctx.drawImage(i,b.x-95,b.y-150,190,243)});
  for(const f of s.flags){const i=img(f.team?'flag-red':'flag-blue');if(!ready(i))continue;if(f.carrier!==null){const c=s.players[f.carrier];ctx.save();ctx.translate(c.x-c.dir*26,c.y-150);ctx.rotate(-c.dir*.25);ctx.drawImage(i,-20,-30,60,120);ctx.restore()}else{const bob=f.home?0:Math.sin(time*4)*4;ctx.drawImage(i,f.x-30,f.y-150+bob,70,150);if(!f.home){ctx.fillStyle='#fff';ctx.font='bold 20px system-ui';ctx.fillText(Math.ceil(10-(s.time-f.droppedAt))+'',f.x-6,f.y-160)}}}}
 if(s.mode==='treasure'){for(const c of map.chests){const i=img('chest-open');if(ready(i))ctx.drawImage(i,c.x-55,c.y-108,110,122)}const ci=img('coin');if(ready(ci))for(const c of s.coins){const b=c.rest?Math.sin(time*5+c.id)*4:0,sc=.85+.15*Math.cos(time*6+c.id);ctx.drawImage(ci,c.x-17*sc,c.y-40+b,34*sc,36)}}
 if(s.mode==='race'){const cp=img('checkpoint');map.cps.slice(1).forEach((x,i)=>{const y=C.groundBelow(s,x,600);if(ready(cp))ctx.drawImage(cp,x-40,y-150,96,130);if(me.cp>i){ctx.fillStyle='#ffd77a88';ctx.beginPath();ctx.arc(x+28,y-100,18+Math.sin(time*6)*3,0,7);ctx.fill()}});
  const fi=img('finish');if(ready(fi)){const y=C.groundBelow(s,map.finish,600);ctx.drawImage(fi,map.finish-150,y-300,300,170*300/300*1.0+0)}}
 // players
 const order=s.players.slice().sort((a,b)=>(a.i===0)-(b.i===0));for(const p of order)drawHero(ctx,m,p,time);
 // particles
 for(let i=m.fx.length-1;i>=0;i--){const f=m.fx[i];f.t+=dt;if(f.t>=f.life){m.fx.splice(i,1);continue}f.vy+=(f.g??900)*dt;f.x+=f.vx*dt;f.y+=f.vy*dt;ctx.globalAlpha=1-f.t/f.life;ctx.fillStyle=f.color;ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,7);ctx.fill()}ctx.globalAlpha=1;
 // objective arrow at the screen edge
 ctx.setTransform(1,0,0,1,0,0);arrow(m,ctx,left,top,k,vw);
 if(m.phase==='count'){const n=Math.ceil(m.count);ctx.fillStyle='#ffd77a';ctx.strokeStyle='#3a1d08';ctx.lineWidth=10*dpr;ctx.font=`900 ${Math.round(cv.height*.24)}px Georgia`;ctx.textAlign='center';ctx.textBaseline='middle';if(n<=3&&n>0){ctx.strokeText(n,cv.width/2,cv.height*.45);ctx.fillText(n,cv.width/2,cv.height*.45)}ctx.textAlign='left';ctx.textBaseline='alphabetic'}
 minimap(m)}
function plat(ctx,i,x,y,w,kind){if(!ready(i)){ctx.fillStyle='#8a6a40';ctx.fillRect(x,y,w,24);return}const h=Math.min(110,w*i.height/i.width*1.25),top=kind==='bridge'?.38:kind==='stone'?.16:.1;
 // stretch the middle, keep the end caps
 const cap=i.width*.14,ch=h,cwid=Math.min(w/2,ch*cap/i.height*1.0+18);ctx.drawImage(i,0,0,cap,i.height,x,y-h*top,cwid,ch);ctx.drawImage(i,cap,0,i.width-cap*2,i.height,x+cwid,y-h*top,w-cwid*2,ch);ctx.drawImage(i,i.width-cap,0,cap,i.height,x+w-cwid,y-h*top,cwid,ch)}
function decor(ctx,map,left,vw){if(!map.decor){const r=((n)=>()=>(n=(n*16807)%2147483647)/2147483647)(map.w);map.decor=[];const names=['crates','barrels','palm','anchor','mast'];for(const [a,b,y] of map.ground){for(let x=a+120;x<b-120;x+=260+r()*380){const n=names[Math.floor(r()*names.length)];if(map.bases&&map.bases.some(q=>Math.abs(q.x-x)<180))continue;map.decor.push({x,y,n})}}}
 for(const d of map.decor){if(d.x<left-200||d.x>left+vw+200)continue;const i=img(d.n);if(!ready(i))continue;const h=d.n==='palm'?260:d.n==='mast'?190:d.n==='crates'?110:90,w=h*i.width/i.height;ctx.globalAlpha=.92;ctx.drawImage(i,d.x-w/2,d.y-h+8,w,h);ctx.globalAlpha=1}}
const TEAMC=['#3fa9ff','#ff5a4e','#7ee4a0','#ffd25c'];
function drawHero(ctx,m,p,time){const a=m.arts[p.i];const s=m.s,color=s.mode==='race'?TEAMC[p.i]:TEAMC[p.team];
 if(p.ko>0&&s.mode!=='race'&&p.pose==='death'&&p.y>C.WATER)return;
 ctx.save();ctx.fillStyle='#0006';ctx.beginPath();ctx.ellipse(p.x,p.y+2,32,7,0,0,7);ctx.fill();ctx.strokeStyle=color;ctx.lineWidth=p.i===0?5:3;ctx.beginPath();ctx.ellipse(p.x,p.y+2,36,9,0,0,7);ctx.stroke();ctx.restore();
 if(p.ko>0)ctx.globalAlpha=.45;else if(p.inv>0)ctx.globalAlpha=.6+.4*Math.sin(time*30);
 if(a&&a.meta&&a.image){const meta=a.meta,anim=meta.animations[p.pose]||meta.animations[p.pose==='death'?'hurt':'idle']||meta.animations.idle;if(p.pose!==p.lastPose){p.lastPose=p.pose;p.poseAt=time}const loopA=['idle','run'].includes(p.pose),fi=Math.floor((time-p.poseAt)*(anim.fps||10)),idx=anim.frames[loopA?fi%anim.frames.length:Math.min(anim.frames.length-1,fi)];
  const sc=150/meta.frameH*(meta.scale?1/meta.scale*.8:1),anc=Array.isArray(meta.anchor)?meta.anchor:[meta.frameW/2,meta.frameH];
  ctx.save();ctx.translate(p.x,p.y+4);ctx.scale(p.dir<0?-sc:sc,sc);ctx.drawImage(a.image,idx%meta.columns*meta.frameW,Math.floor(idx/meta.columns)*meta.frameH,meta.frameW,meta.frameH,-anc[0],-anc[1],meta.frameW,meta.frameH);ctx.restore()}
 else{ctx.fillStyle=color;ctx.fillRect(p.x-22,p.y-110,44,110)}
 ctx.globalAlpha=1;
 // name tag + health
 const L=W(),label=p.i===0?L.you:(s.mode!=='race'&&p.team===0?L.ally:L.heroes[p.hero]);ctx.font=p.i===0?'800 22px system-ui':'700 17px system-ui';if(s.mode==='race'&&p.i!==0&&Math.abs(p.x-s.players[0].x)<120)ctx.globalAlpha=.55;ctx.textAlign='center';ctx.lineWidth=5;ctx.strokeStyle='#000b';ctx.strokeText(label,p.x,p.y-178);ctx.fillStyle=p.i===0?'#ffe08f':color;ctx.fillText(label,p.x,p.y-178);
 ctx.globalAlpha=1;if(s.mode!=='race'&&p.ko<=0)for(let h=0;h<4;h++){ctx.fillStyle=h<p.hp?color:'#0008';ctx.fillRect(p.x-38+h*20,p.y-170,17,7)}
 if(p.coins>0){const ci=img('coin');if(ready(ci))ctx.drawImage(ci,p.x-34,p.y-226,28,30);ctx.fillStyle='#ffe08f';ctx.textAlign='left';ctx.font='900 26px Georgia';ctx.strokeText(p.coins,p.x-2,p.y-202);ctx.fillText(p.coins,p.x-2,p.y-202)}
 ctx.textAlign='left'}
function arrow(m,ctx,left,top,k,vw){const s=m.s,map=C.MAPS[s.mode],me=s.players[0];let g=null,c='#ffd77a';
 if(s.mode==='flag'){g=me.carry!==null?map.bases[0]:s.flags[0].carrier!==null?s.flags[0]:s.flags[1];c=me.carry!==null?'#5cb8ff':s.flags[0].carrier!==null?'#5cb8ff':'#ff6a5c'}else if(s.mode==='treasure'&&s.coins.length){g=s.coins.slice().sort((a,b)=>Math.abs(a.x-me.x)-Math.abs(b.x-me.x))[0]}
 if(!g)return;const sx=(g.x-left)*k,W2=m.canvas.width;if(sx>40&&sx<W2-40)return;const right=sx>=W2-40,y=Math.max(80,Math.min(m.canvas.height-120,(g.y-80-top)*k)),x=right?W2-26:26,pulse=1+Math.sin((m.vt||0)*6)*.12;
 ctx.save();ctx.translate(x,y);ctx.scale(right?pulse:-pulse,pulse);ctx.fillStyle=c;ctx.strokeStyle='#000a';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(14,0);ctx.lineTo(-12,-16);ctx.lineTo(-12,16);ctx.closePath();ctx.stroke();ctx.fill();ctx.restore()}
function minimap(m){const c=m.mini,ctx=m.mctx,s=m.s,map=C.MAPS[s.mode],w=c.clientWidth,h=c.clientHeight;if(!w)return;if(c.width!==w*2){c.width=w*2;c.height=h*2}ctx.setTransform(2,0,0,2,0,0);ctx.clearRect(0,0,w,h);const X=x=>6+(w-12)*x/map.w;
 ctx.fillStyle='#0d1d27b3';ctx.beginPath();ctx.roundRect?ctx.roundRect(0,0,w,h,8):ctx.rect(0,0,w,h);ctx.fill();ctx.strokeStyle='#c99b5299';ctx.stroke();
 ctx.fillStyle='#c9a46a';for(const [a,b] of map.ground)ctx.fillRect(X(a),h/2+2,Math.max(1,X(b)-X(a)),3);
 if(s.mode==='flag'){[0,1].forEach(t=>{ctx.fillStyle=t?'#ff5a4e':'#3fa9ff';ctx.fillRect(X(map.bases[t].x)-3,3,6,h-6)});for(const f of s.flags){ctx.fillStyle=f.team?'#ffb0a8':'#b8e0ff';ctx.beginPath();ctx.moveTo(X(f.x),2);ctx.lineTo(X(f.x)+7,5);ctx.lineTo(X(f.x),8);ctx.fill();ctx.fillRect(X(f.x)-1,2,2,10)}}
 if(s.mode==='race'){map.cps.forEach(x=>{ctx.fillStyle='#ffd77a88';ctx.fillRect(X(x),4,1.5,h-8)});ctx.fillStyle='#fff';ctx.fillRect(X(map.finish)-2,2,4,h-4)}
 if(s.mode==='treasure'){ctx.fillStyle='#ffd77a';for(const c2 of s.coins)ctx.fillRect(X(c2.x)-1,h/2-5,2,3)}
 for(const p of s.players){if(p.ko>0)continue;ctx.fillStyle=s.mode==='race'?TEAMC[p.i]:TEAMC[p.team];ctx.beginPath();ctx.arc(X(p.x),h/2,p.i===0?5:3.5,0,7);ctx.fill();if(p.i===0){ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.stroke()}}}
function hud(m){const s=m.s,el=m.el;const left=Math.max(0,s.limit-s.time),txt=s.mode==='race'?(s.time<60?s.time.toFixed(1):Math.floor(s.time/60)+':'+String(Math.floor(s.time%60)).padStart(2,'0')):Math.floor(left/60)+':'+String(Math.floor(left%60)).padStart(2,'0');
 const te=el.querySelector('[data-time]');if(te.textContent!==txt)te.textContent=txt;if(s.mode!=='race'){const a=el.querySelector('[data-s0]'),b=el.querySelector('[data-s1]');if(a.textContent!=s.score[0])a.textContent=s.score[0];if(b.textContent!=s.score[1])b.textContent=s.score[1]}}

/* ---------------------------------------------------------------- result */
async function showResult(m){const L=W(),s=m.s;const me=s.players[0];let outcome;
 if(s.mode==='race'){const place=(s.order||[]).indexOf(0)+1;outcome=place===1?'win':'lose';m.place=place}else outcome=s.winner===-1?'draw':s.winner===0?'win':'lose';
 let gold=0;if(outcome==='win')gold=payWin();const mvp=C.mvp(s),mv=s.players[mvp];
 const r=document.createElement('div');r.className='a2-res';
 const rows=s.players.slice().sort((a,b)=>s.mode==='race'?(s.order.indexOf(a.i)-s.order.indexOf(b.i)):(a.team-b.team)).map(p=>`<tr class="${p.i===0?'me':''}"><td style="color:${s.mode==='race'?TEAMC[p.i]:TEAMC[p.team]}">●</td><td>${p.i===0?L.you:L.heroes[p.hero]}</td>${s.mode==='flag'?`<td>${L.stat.caps}: ${p.caps}</td>`:s.mode==='treasure'?`<td>${L.stat.coins}: ${p.coins}</td>`:`<td>${L.stat.place}: ${s.order.indexOf(p.i)+1}</td>`}<td>${s.mode==='race'?(p.finish!==null?p.finish.toFixed(1)+'s':'—'):L.stat.kills+': '+p.kills}</td></tr>`).join('');
 r.innerHTML=`<div class="ban ${outcome==='lose'?'lose':''}" style="background-image:url(${A}${outcome==='lose'?'banner-lose':'banner-win'}.webp)"><b>${s.mode==='race'&&outcome==='lose'?L.place(m.place):L[outcome]}</b></div>
  <div class="mvp"><img data-h="${mv.hero}" alt=""><span>${L.mvp}: <b>${mvp===0?L.you:L.heroes[mv.hero]}</b></span></div><table>${rows}</table>
  ${gold>0?`<div class="gold">${L.gold(gold)}</div>`:gold<0?`<small>${L.capped}</small>`:''}
  <div><button class="a2-btn" data-again>↻ ${L.again}</button><button class="a2-btn" data-lobby>${L.toArena}</button></div>`;
 m.el.append(r);portrait(mv.hero).then(src=>{const i=r.querySelector('img[data-h]');if(src&&i)i.src=src});
 r.querySelector('[data-again]').onclick=()=>start(m.mode,m.opts);r.querySelector('[data-lobby]').onclick=toLobby;r.querySelector('[data-again]').focus();
 m.sound.play(outcome==='win'?'cheer':'hit',outcome==='win'?.9:.3);try{window.PirateAchievements?.note?.('arena',outcome)}catch{}}

window.PirateArena2={lobby,start,stop:stopMatch,toLobby,payWin,REWARD,REWARDS_PER_DAY,get state(){const m=match;return m?{mode:m.mode,phase:m.phase,paused:m.paused,time:m.s.time,score:m.s.score.slice(),done:m.s.done,winner:m.s.winner,players:m.s.players.map(p=>({x:p.x,y:p.y,team:p.team,hero:p.hero,ko:p.ko,coins:p.coins,carry:p.carry}))}:null},get sim(){return match?.s||null}};
})();
