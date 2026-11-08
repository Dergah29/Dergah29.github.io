/* Pirate Strike — Meyxana table games UI: Checkers, X–O, Dice, Knife throwing.
 * Rules and opponents live in rules.js (unit-tested); rewards in state.js. Each game shows its rules and today's
 * reward BEFORE it starts, has Replay and Exit, an opponent portrait with short reactions, and never locks the
 * board while the player is to move. Leaving during a game asks first and ends that game (no penalty).
 * PirateTavernGames.open(id, {host, lang, state, opponent:{name, portrait}, sfx(name), react(kind), onClose()}) */
(()=>{'use strict';
if(window.PirateTavernGames)return;
const RL=()=>window.PirateTavernRules;
const TX={
 az:{play:'OYNAYAQ',back:'Geri',again:'Yenidən oyna',exit:'Çıx',leaveQ:'Oyundan çıxırsan?',leaveT:'Bu partiya bitəcək və nəticə sayılmayacaq.',stay:'Oyuna qayıt',leave:'Çıx',win:'QƏLƏBƏ!',lose:'MƏĞLUBİYYƏT',draw:'HEÇ-HEÇƏ',you:'Sən',turnYou:'Sənin növbən',turnAI:'{n} düşünür…',rules:'Qaydalar',diff:'Çətinlik',easy:'Asan',normal:'Normal',master:'Usta',locked:'{r} nüfuzda açılır',
  reward:'Bugünkü mükafatlı qələbələr: {u}/{l}',rewardWin:'Qələbə: +{g} qızıl · +{r} nüfuz',limit:'Bugünkü mükafat limiti doldu — əyləncə üçün oynaya bilərsən. Yenilənmə: {t}',noFee:'Giriş pulsuzdur. Mərc yoxdur.',
  got:'+{g} qızıl · +{r} nüfuz',gotLimit:'Bugünkü mükafat limiti doldu — bu qələbə əyləncə üçün idi.',storage:'Mükafat saxlanmadı. Yaddaşı yoxla və yenidən cəhd et.',
  checkers:'Şaşki',xo:'X–0',dice:'Zər',knife:'Bıçaq atma',
  checkersRules:['Rus şaşkası: 8×8 lövhə, hər tərəfdə 12 daş. Sən ağlarla aşağıdan başlayırsan.','Daşlar çapraz bir xana irəli gedir; vurma həm irəli, həm geri olur.','Vurmaq məcburidir. Vurma mümkün olduqca eyni gedişdə davam edir.','Son sıraya çatan daş dama olur və istənilən məsafəyə gedə və vura bilir.','Gedişi olmayan tərəf uduzur. Mümkün gedişlər işarələnir.'],
  xoRules:['3×3 lövhə. Sən X, rəqib O ilə oynayır.','Üç işarəni düz, sütun və ya çapraz yığan qalib gəlir.','Lövhə dolub qalib yoxdursa — heç-heçə.','İlk gediş hər partiyada növbələşir.'],
  diceRules:['Növbə ilə bir zər atılır. 2–6 bu növbənin xalına əlavə olunur.','SAXLA — xalı ümumi hesaba keçirir və növbə rəqibə keçir.','1 düşsə, bu növbədə yığılan xal silinir.','İlk 50 xala çatan qalib gəlir.'],
  knifeRules:['Fırlanan hədəfə toxunaraq bıçaq at.','Əvvəlki bıçağa dəysən, cəhd bitir.','Bütün bıçaqları sancsan, növbəti mərhələ başlayır: sürət və istiqamət dəyişir.','3-cü mərhələni keçmək qələbə sayılır. Rekordunu yenilə!'],
  first:'İlk gediş: {w}',firstYou:'sən',roll:'ZƏR AT',hold:'SAXLA',turnTotal:'Bu növbə: {n}',score:'Hesab',goal:'Hədəf: 50',bust:'1 düşdü! Növbə xalı yandı.',
  throwK:'AT',stage:'Mərhələ {n}',knivesLeft:'Bıçaq: {n}',best:'Rekord: mərhələ {n}',cleared:'Mərhələ keçildi!',clash:'Bıçağa dəydi!',reached:'{n}-ci mərhələyə çatdın',forced:'Vurmaq məcburidir!',
  thinking:'…'},
 en:{play:'LET’S PLAY',back:'Back',again:'Play again',exit:'Exit',leaveQ:'Leave the game?',leaveT:'This game will end and will not count.',stay:'Keep playing',leave:'Leave',win:'VICTORY!',lose:'DEFEAT',draw:'DRAW',you:'You',turnYou:'Your move',turnAI:'{n} is thinking…',rules:'Rules',diff:'Difficulty',easy:'Easy',normal:'Normal',master:'Master',locked:'Unlocks at {r} reputation',
  reward:'Rewarded wins today: {u}/{l}',rewardWin:'Win: +{g} gold · +{r} reputation',limit:'Today’s reward limit is reached — you can still play for fun. Resets in {t}',noFee:'Free to play. No stakes.',
  got:'+{g} gold · +{r} reputation',gotLimit:'Today’s reward limit is reached — this win was for fun.',storage:'The reward could not be saved. Check storage and try again.',
  checkers:'Checkers',xo:'X–O',dice:'Dice',knife:'Knife throwing',
  checkersRules:['Russian draughts: 8×8 board, 12 men each. You play white from the bottom.','Men move one square diagonally forward; they capture forward and backward.','Capturing is compulsory and continues in the same move while possible.','A man reaching the last row becomes a king that moves and captures at any distance.','A side with no legal move loses. Legal moves are highlighted.'],
  xoRules:['3×3 board. You are X, the pirate is O.','Three in a row, column or diagonal wins.','A full board with no winner is a draw.','The first move alternates every game.'],
  diceRules:['Take turns rolling one die. 2–6 adds to this turn’s total.','HOLD banks the total and passes the die.','A 1 wipes this turn’s total.','First to 50 wins.'],
  knifeRules:['Tap to throw a knife into the spinning target.','Hitting a knife already in the target ends the run.','Land every knife to reach the next stage: speed and direction change.','Clearing stage 3 counts as a win. Beat your record!'],
  first:'First move: {w}',firstYou:'you',roll:'ROLL',hold:'HOLD',turnTotal:'This turn: {n}',score:'Score',goal:'Goal: 50',bust:'A 1! Turn total lost.',
  throwK:'THROW',stage:'Stage {n}',knivesLeft:'Knives: {n}',best:'Best: stage {n}',cleared:'Stage cleared!',clash:'Hit a knife!',reached:'You reached stage {n}',forced:'You must capture!',
  thinking:'…'},
 tr:{play:'OYNAYALIM',back:'Geri',again:'Tekrar oyna',exit:'Çık',leaveQ:'Oyundan çıkılsın mı?',leaveT:'Bu oyun biter ve sayılmaz.',stay:'Oynamaya devam',leave:'Çık',win:'ZAFER!',lose:'YENİLGİ',draw:'BERABERE',you:'Sen',turnYou:'Senin hamlen',turnAI:'{n} düşünüyor…',rules:'Kurallar',diff:'Zorluk',easy:'Kolay',normal:'Normal',master:'Usta',locked:'{r} itibarda açılır',
  reward:'Bugünkü ödüllü galibiyetler: {u}/{l}',rewardWin:'Galibiyet: +{g} altın · +{r} itibar',limit:'Bugünün ödül sınırına ulaşıldı — yine de eğlencesine oynayabilirsin. {t} sonra yenilenir',noFee:'Ücretsiz. Bahis yok.',
  got:'+{g} altın · +{r} itibar',gotLimit:'Bugünün ödül sınırına ulaşıldı — bu galibiyet eğlencesineydi.',storage:'Ödül kaydedilemedi. Depolamayı kontrol edip tekrar dene.',
  checkers:'Dama',xo:'X–O',dice:'Zar',knife:'Bıçak atma',
  checkersRules:['Rus daması: 8×8 tahta, her tarafta 12 taş. Aşağıdan beyazlarla oynuyorsun.','Taşlar çapraz bir kare ileri gider; ileri ve geri alabilir.','Taş almak zorunludur ve mümkün oldukça aynı hamlede devam eder.','Son sıraya ulaşan taş dama olur ve her uzaklıkta gidip alabilir.','Yasal hamlesi kalmayan taraf kaybeder. Yasal hamleler vurgulanır.'],
  xoRules:['3×3 tahta. Sen X’sin, korsan O.','Satır, sütun veya çaprazda üçlü yapan kazanır.','Kazanan olmadan dolan tahta berabere biter.','İlk hamle her oyunda değişir.'],
  diceRules:['Sırayla bir zar at. 2–6 bu turun toplamına eklenir.','SAKLA toplamı kasaya koyar ve zarı devreder.','1 gelirse bu turun toplamı silinir.','50’ye ilk ulaşan kazanır.'],
  knifeRules:['Dönen hedefe bıçak atmak için dokun.','Hedefteki bir bıçağa çarparsan oyun biter.','Sonraki aşama için tüm bıçakları sapla: hız ve yön değişir.','3. aşamayı geçmek galibiyet sayılır. Rekorunu kır!'],
  first:'İlk hamle: {w}',firstYou:'sen',roll:'ZAR AT',hold:'SAKLA',turnTotal:'Bu tur: {n}',score:'Skor',goal:'Hedef: 50',bust:'1 geldi! Tur toplamı gitti.',
  throwK:'AT',stage:'Aşama {n}',knivesLeft:'Bıçak: {n}',best:'Rekor: aşama {n}',cleared:'Aşama geçildi!',clash:'Bıçağa çarptı!',reached:'{n}. aşamaya ulaştın',forced:'Taş almak zorundasın!',
  thinking:'…'},
 ru:{play:'ИГРАЕМ',back:'Назад',again:'Ещё раз',exit:'Выйти',leaveQ:'Выйти из игры?',leaveT:'Партия закончится и не будет засчитана.',stay:'Играть дальше',leave:'Выйти',win:'ПОБЕДА!',lose:'ПОРАЖЕНИЕ',draw:'НИЧЬЯ',you:'Ты',turnYou:'Твой ход',turnAI:'{n} думает…',rules:'Правила',diff:'Сложность',easy:'Легко',normal:'Нормально',master:'Мастер',locked:'Откроется при {r} репутации',
  reward:'Победы с наградой сегодня: {u}/{l}',rewardWin:'Победа: +{g} золота · +{r} репутации',limit:'Лимит наград на сегодня исчерпан — можно играть для души. Обновится через {t}',noFee:'Бесплатно. Без ставок.',
  got:'+{g} золота · +{r} репутации',gotLimit:'Лимит наград на сегодня исчерпан — эта победа для души.',storage:'Не удалось сохранить награду. Проверь память и повтори.',
  checkers:'Шашки',xo:'Крестики-нолики',dice:'Кости',knife:'Метание ножей',
  checkersRules:['Русские шашки: доска 8×8, по 12 шашек. Ты играешь белыми снизу.','Шашки ходят на одну клетку по диагонали вперёд, бьют вперёд и назад.','Бить обязательно, и взятие продолжается в том же ходу, пока возможно.','Шашка на последнем ряду становится дамкой: ходит и бьёт на любое расстояние.','Кто не может сделать ход — проигрывает. Возможные ходы подсвечены.'],
  xoRules:['Поле 3×3. Ты — X, пират — O.','Три в ряд, в столбец или по диагонали — победа.','Заполненное поле без победителя — ничья.','Первый ход каждую партию переходит.'],
  diceRules:['Бросайте одну кость по очереди. 2–6 прибавляются к сумме хода.','СТОП сохраняет сумму и передаёт кость.','Выпала 1 — сумма хода сгорает.','Первый, кто наберёт 50, побеждает.'],
  knifeRules:['Коснись, чтобы метнуть нож во вращающуюся мишень.','Попал в торчащий нож — забег окончен.','Воткни все ножи, чтобы пройти этап: меняются скорость и направление.','Пройденный 3-й этап — победа. Побей свой рекорд!'],
  first:'Первый ход: {w}',firstYou:'ты',roll:'БРОСИТЬ',hold:'СТОП',turnTotal:'За ход: {n}',score:'Счёт',goal:'Цель: 50',bust:'Единица! Сумма хода сгорела.',
  throwK:'МЕТНУТЬ',stage:'Этап {n}',knivesLeft:'Ножей: {n}',best:'Рекорд: этап {n}',cleared:'Этап пройден!',clash:'Попал в нож!',reached:'Ты дошёл до этапа {n}',forced:'Нужно бить!',
  thinking:'…'},
 pl:{play:'GRAMY',back:'Wstecz',again:'Zagraj ponownie',exit:'Wyjdź',leaveQ:'Wyjść z gry?',leaveT:'Gra się zakończy i nie zostanie zaliczona.',stay:'Graj dalej',leave:'Wyjdź',win:'ZWYCIĘSTWO!',lose:'PORAŻKA',draw:'REMIS',you:'Ty',turnYou:'Twój ruch',turnAI:'{n} myśli…',rules:'Zasady',diff:'Poziom',easy:'Łatwy',normal:'Normalny',master:'Mistrz',locked:'Odblokowanie przy {r} reputacji',
  reward:'Nagrodzone wygrane dzisiaj: {u}/{l}',rewardWin:'Wygrana: +{g} złota · +{r} reputacji',limit:'Dzisiejszy limit nagród osiągnięty — możesz grać dla zabawy. Odnowi się za {t}',noFee:'Za darmo. Bez stawek.',
  got:'+{g} złota · +{r} reputacji',gotLimit:'Dzisiejszy limit nagród osiągnięty — ta wygrana była dla zabawy.',storage:'Nie udało się zapisać nagrody. Sprawdź pamięć i spróbuj ponownie.',
  checkers:'Warcaby',xo:'Kółko i krzyżyk',dice:'Kości',knife:'Rzut nożem',
  checkersRules:['Warcaby rosyjskie: plansza 8×8, po 12 pionów. Grasz białymi od dołu.','Piony idą o jedno pole po skosie do przodu; biją do przodu i do tyłu.','Bicie jest obowiązkowe i trwa w tym samym ruchu, póki to możliwe.','Pion na ostatnim rzędzie staje się damką, która rusza się i bije na dowolną odległość.','Kto nie ma ruchu, przegrywa. Dozwolone ruchy są podświetlone.'],
  xoRules:['Plansza 3×3. Ty grasz X, pirat O.','Trzy w rzędzie, kolumnie lub po skosie wygrywają.','Pełna plansza bez zwycięzcy to remis.','Pierwszy ruch zmienia się co grę.'],
  diceRules:['Rzucajcie po kolei jedną kością. 2–6 dodaje się do sumy tury.','ZACHOWAJ zapisuje sumę i oddaje kość.','Jedynka kasuje sumę tury.','Pierwszy do 50 wygrywa.'],
  knifeRules:['Dotknij, by rzucić nożem w obracającą się tarczę.','Trafienie w wbity nóż kończy próbę.','Wbij wszystkie noże, by przejść etap: zmienia się prędkość i kierunek.','Przejście 3. etapu liczy się jako wygrana. Pobij swój rekord!'],
  first:'Pierwszy ruch: {w}',firstYou:'ty',roll:'RZUĆ',hold:'ZACHOWAJ',turnTotal:'Ta tura: {n}',score:'Wynik',goal:'Cel: 50',bust:'Jedynka! Suma tury przepada.',
  throwK:'RZUĆ',stage:'Etap {n}',knivesLeft:'Noże: {n}',best:'Rekord: etap {n}',cleared:'Etap zaliczony!',clash:'Trafiony nóż!',reached:'Doszedłeś do etapu {n}',forced:'Musisz bić!',
  thinking:'…'}};
const LINES={
 az:{oldsailor:{hi:'Otur, bala. Şaşkını bilirsən?',good:'Hm… pis gediş deyil.',bad:'Tələsmə, dəniz səbirliləri sevir.',aiWin:'Qoca dənizçini asanlıqla yıxmaq olmur!',aiLose:'Bərəkallah! Sənə bir sirr borcluyam.',draw:'Bərabər güc… Yaxşı oyun idi.'},
  dicer:{hi:'Zərlər hazırdır! Cəsarətin var?',good:'Bəxt səndən yanadır…',bad:'Ha-ha! Zər səni sevmədi!',aiWin:'Zərlərin ağası mənəm!',aiLose:'Lənət! Növbəti dəfə qaytaracağam.',draw:'…'},
  xo:{hi:'Təbaşirim hazırdır. Başlayaq!',good:'Takk… yaxşı yerdir.',bad:'Sümüklərim bunu sevdi!',aiWin:'Üçü bir sırada! Takk-takk!',aiLose:'Sümüklərim titrədi… Afərin!',draw:'Heç kim udmadı. Yenə oynayaq?'},
  knife:{hi:'Əlin dəqiqdir? Hədəf fırlanır!',good:'Gözəl atış!',bad:'Diqqət et!',aiWin:'Bıçaq bıçağa dəydi… Yenidən!',aiLose:'Möhtəşəm! Əsl pirat əli!',draw:'…'}},
 en:{oldsailor:{hi:'Sit down, lad. Know your draughts?',good:'Hm… not a bad move.',bad:'Easy now, the sea loves the patient.',aiWin:'An old sailor doesn’t go down easily!',aiLose:'Well played! I owe you a secret.',draw:'Even strength… a fine game.'},
  dicer:{hi:'The dice are ready! Got the nerve?',good:'Luck is on your side…',bad:'Ha-ha! The dice don’t like you!',aiWin:'I’m the master of the dice!',aiLose:'Curses! I’ll win it back.',draw:'…'},
  xo:{hi:'My chalk is ready. Let’s go!',good:'Clack… good spot.',bad:'My bones liked that one!',aiWin:'Three in a row! Clack-clack!',aiLose:'My bones are rattling… well done!',draw:'Nobody won. Again?'},
  knife:{hi:'Steady hand? The target spins!',good:'Nice throw!',bad:'Careful!',aiWin:'Blade hit blade… again!',aiLose:'Magnificent! A true pirate’s hand!',draw:'…'}},
 tr:{oldsailor:{hi:'Otur evlat. Dama bilir misin?',good:'Hm… fena hamle değil.',bad:'Yavaş ol, deniz sabırlıyı sever.',aiWin:'Yaşlı denizci kolay yıkılmaz!',aiLose:'Aferin! Sana bir sır borçluyum.',draw:'Eşit güç… güzel oyundu.'},
  dicer:{hi:'Zarlar hazır! Cesaretin var mı?',good:'Şans senden yana…',bad:'Ha-ha! Zar seni sevmedi!',aiWin:'Zarların efendisi benim!',aiLose:'Lanet! Bir dahakine geri alacağım.',draw:'…'},
  xo:{hi:'Tebeşirim hazır. Başlayalım!',good:'Tak… iyi yer.',bad:'Kemiklerim bunu sevdi!',aiWin:'Üçü bir sırada! Tak-tak!',aiLose:'Kemiklerim titredi… aferin!',draw:'Kimse kazanmadı. Bir daha?'},
  knife:{hi:'Elin sağlam mı? Hedef dönüyor!',good:'Güzel atış!',bad:'Dikkat!',aiWin:'Bıçak bıçağa değdi… yeniden!',aiLose:'Muhteşem! Gerçek korsan eli!',draw:'…'}},
 ru:{oldsailor:{hi:'Садись, малец. В шашки играешь?',good:'Хм… неплохой ход.',bad:'Не спеши, море любит терпеливых.',aiWin:'Старого моряка так просто не свалить!',aiLose:'Молодец! Я должен тебе одну тайну.',draw:'Силы равны… славная партия.'},
  dicer:{hi:'Кости готовы! Хватит духу?',good:'Удача на твоей стороне…',bad:'Ха-ха! Кости тебя не любят!',aiWin:'Я — хозяин костей!',aiLose:'Проклятье! Отыграюсь.',draw:'…'},
  xo:{hi:'Мел готов. Начнём!',good:'Цок… хорошая клетка.',bad:'Моим костям это понравилось!',aiWin:'Три в ряд! Цок-цок!',aiLose:'Кости дрожат… молодец!',draw:'Никто не победил. Ещё?'},
  knife:{hi:'Рука твёрдая? Мишень вращается!',good:'Отличный бросок!',bad:'Осторожно!',aiWin:'Клинок о клинок… ещё раз!',aiLose:'Великолепно! Настоящая пиратская рука!',draw:'…'}},
 pl:{oldsailor:{hi:'Siadaj, chłopcze. Znasz warcaby?',good:'Hm… niezły ruch.',bad:'Spokojnie, morze kocha cierpliwych.',aiWin:'Starego żeglarza nie tak łatwo pokonać!',aiLose:'Brawo! Jestem ci winien sekret.',draw:'Równe siły… piękna partia.'},
  dicer:{hi:'Kości gotowe! Masz odwagę?',good:'Szczęście ci sprzyja…',bad:'Ha-ha! Kości cię nie lubią!',aiWin:'Jestem panem kości!',aiLose:'Do licha! Odegram się.',draw:'…'},
  xo:{hi:'Kreda gotowa. Zaczynajmy!',good:'Stuk… dobre pole.',bad:'Moim kościom się podobało!',aiWin:'Trzy w rzędzie! Stuk-stuk!',aiLose:'Kości mi drżą… brawo!',draw:'Nikt nie wygrał. Jeszcze raz?'},
  knife:{hi:'Pewna ręka? Tarcza się kręci!',good:'Świetny rzut!',bad:'Uwaga!',aiWin:'Ostrze w ostrze… od nowa!',aiLose:'Wspaniale! Prawdziwa piracka ręka!',draw:'…'}}};
const CSS=`
.tg-shade{position:absolute;inset:0;z-index:40;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,rgba(20,10,4,.25),rgba(8,4,2,.72));padding:max(8px,env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) max(8px,env(safe-area-inset-bottom)) max(10px,env(safe-area-inset-left));animation:tg-in .25s ease-out}
@keyframes tg-in{from{opacity:0}}
.tg-frame{position:relative;width:100%;max-width:1100px;height:100%;max-height:640px;display:grid;grid-template-columns:minmax(120px,22%) 1fr minmax(150px,26%);gap:10px;color:#f6e7c6;font-family:Georgia,'Times New Roman',serif}
.tg-panel{align-self:center;max-height:100%;background:linear-gradient(#3b2311f2,#1f1108f2);border:2px solid #c9963f;border-radius:14px;box-shadow:0 8px 24px #000b,inset 0 0 0 1px #00000080;padding:10px;display:flex;flex-direction:column;min-height:0}
.tg-opp{align-items:center;text-align:center;gap:6px}
.tg-face{width:100%;max-width:150px;aspect-ratio:1;border-radius:50%;border:3px solid #e2b764;background:radial-gradient(circle at 50% 35%,#6a4122,#26140a);object-fit:cover;box-shadow:0 0 0 4px #00000060}
.tg-opp b{font-size:16px;color:#ffd98a}
.tg-bubble{position:relative;background:#f4e6c4;color:#2c1808;border-radius:12px;padding:8px 10px;font-size:14px;line-height:1.3;font-style:italic;min-height:2.6em;width:100%;box-shadow:0 3px 8px #0008}
.tg-bubble:before{content:'';position:absolute;top:-8px;left:50%;margin-left:-8px;border:8px solid transparent;border-top:0;border-bottom-color:#f4e6c4}
.tg-bubble.pop{animation:tg-pop .3s}
@keyframes tg-pop{50%{transform:scale(1.06)}}
.tg-center{position:relative;display:flex;align-items:center;justify-content:center;min-width:0;min-height:0}
.tg-side h2{margin:0 0 4px;font-size:20px;color:#ffd98a;letter-spacing:.04em}
.tg-side .tg-status{font-size:15px;margin:4px 0 8px;min-height:1.3em}
.tg-side .tg-info{font-size:13px;color:#e8d3a8;line-height:1.35}
.tg-btn{min-height:46px;margin:5px 0 0;padding:0 14px;border-radius:23px;border:2px solid #c9963f;background:linear-gradient(#6b3f1c,#3e220e);color:#ffe7ae;font:700 15px Georgia,serif;cursor:pointer;touch-action:manipulation;width:100%}
.tg-btn.gold{background:linear-gradient(#ffd977,#c98b25);color:#3a1d04;border-color:#fff1c2;box-shadow:0 0 14px #ffc85a66}
.tg-btn:disabled{opacity:.45}
.tg-btn:active:not(:disabled){transform:scale(.97)}
.tg-x{position:absolute;top:-6px;right:-6px;z-index:3;width:44px;height:44px;border-radius:50%;border:2px solid #c9963f;background:#3e220e;color:#ffe7ae;font:700 20px Arial;cursor:pointer}
.tg-spacer{flex:1}
.tg-setup{position:absolute;inset:0;z-index:5;display:flex;align-items:center;justify-content:center;background:rgba(10,5,2,.72);border-radius:14px}
.tg-frame>.tg-setup{left:var(--tg-left,0)}
.tg-card .tg-cols{display:block}
.tg-card .tg-rew,.tg-card .tg-info{font-size:13px}
.tg-card{width:min(560px,96%);max-height:96%;overflow:auto;background:linear-gradient(#f3e3bd,#e2c993);color:#2c1808;border-radius:12px;border:3px solid #8a5a22;padding:14px 18px;box-shadow:0 10px 30px #000c}
.tg-card h3{margin:0 0 6px;font-size:22px;color:#5a2a0a}
.tg-card ul{margin:4px 0 8px 18px;padding:0;font-size:14px;line-height:1.35}
.tg-card ul.tg-rules{list-style:none;margin:4px 0 8px;display:grid;gap:5px}.tg-rules li{display:flex;align-items:center;gap:9px}.tg-pic{flex:0 0 auto;width:34px;height:34px;border-radius:8px;background:#fff8e6;box-shadow:inset 0 0 0 1px #c9a46a,0 1px 2px #0003;display:grid;place-items:center}.tg-pic svg{width:30px;height:30px}
.tg-card .tg-row{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0}
.tg-card .tg-chip{min-height:44px;padding:0 14px;border-radius:22px;border:2px solid #8a5a22;background:#f8edd2;color:#4a2408;font:700 14px Georgia,serif;cursor:pointer}
.tg-card .tg-chip[aria-pressed=true]{background:#8a5a22;color:#fff3d0}
.tg-card .tg-chip:disabled{opacity:.5}
.tg-card .tg-rew{font-size:14px;background:#fff6dc;border:1px dashed #a9772f;border-radius:8px;padding:6px 8px;margin:6px 0}
.tg-card .tg-btn{width:auto;min-width:150px}
.tg-card .tg-actions{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}
.tg-result{position:absolute;left:0;right:0;top:0;z-index:6;display:flex;justify-content:center;pointer-events:none;animation:tg-drop .35s ease-out}
@keyframes tg-drop{from{transform:translateY(-20px);opacity:0}}
.tg-result.fade{transition:opacity .6s,transform .6s;opacity:0;transform:translateY(-16px)}
.tg-result .tg-card{padding:8px 14px}.tg-result .tg-card p{margin:4px 0}
.tg-result .tg-card{text-align:center}
.tg-result h3{font-size:26px;letter-spacing:.08em;margin:0}
.tg-result.win h3{color:#2f7a1d}.tg-result.lose h3{color:#8a1a12}
.tg-board{touch-action:none;display:block;border-radius:10px;box-shadow:0 10px 30px #000c}
.tg-xo{display:grid;grid-template-columns:repeat(3,1fr);gap:0;background:#2c3a33;border:10px solid #6b4520;border-radius:10px;box-shadow:inset 0 0 30px #000a,0 10px 30px #000c}
.tg-xo button{position:relative;border:0;background:transparent;cursor:pointer;touch-action:manipulation;padding:0}
.tg-xo button:nth-child(-n+6){border-bottom:4px solid rgba(240,235,220,.75)}
.tg-xo button:not(:nth-child(3n)){border-right:4px solid rgba(240,235,220,.75)}
.tg-xo svg{position:absolute;inset:16%;width:68%;height:68%;fill:none;stroke-linecap:round;stroke-width:9}
.tg-xo svg path,.tg-xo svg circle{stroke-dasharray:200;stroke-dashoffset:200;animation:tg-draw .35s forwards}
.tg-xo .x{stroke:#ffffff;filter:drop-shadow(0 0 3px rgba(255,255,255,.55))}.tg-xo .o{stroke:#ffd27a}
.tg-xo button.winline{background:rgba(255,215,110,.22)}
@keyframes tg-draw{to{stroke-dashoffset:0}}
.tg-dice{display:flex;flex-direction:column;align-items:center;gap:14px;width:100%}
.tg-scores{display:flex;gap:12px;width:100%;justify-content:center}
.tg-score{flex:1;max-width:220px;background:#24140a;border:2px solid #8a6230;border-radius:12px;padding:6px 10px;text-align:center}
.tg-score.on{border-color:#ffd27a;box-shadow:0 0 16px #ffcf5a66}
.tg-score b{display:block;font-size:30px;color:#ffd98a}
.tg-score i{display:block;height:8px;border-radius:4px;background:#3a2412;overflow:hidden;margin-top:4px}
.tg-score i span{display:block;height:100%;background:linear-gradient(90deg,#d8a040,#ffe08a);transition:width .4s}
.tg-cube-wrap{perspective:600px;width:110px;height:110px}
.tg-die3d{width:min(300px,46vw);height:min(190px,40vh)}
.tg-cube{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .9s cubic-bezier(.2,.8,.3,1.1)}
.tg-cube>div{position:absolute;inset:0;background:radial-gradient(circle at 35% 30%,#fffaf0,#e9dcc0);border:2px solid #b89a64;border-radius:16px;display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr);padding:12px;box-shadow:inset 0 0 12px #0003}
.tg-cube>div i{width:18px;height:18px;border-radius:50%;background:#3a1606;margin:auto;box-shadow:inset 0 2px 3px #000a}
.tg-turn{font-size:18px;color:#ffe7ae;min-height:1.3em}
.tg-turn.bust{color:#ff8d6a}
.tg-knife{touch-action:none;display:block;border-radius:12px;cursor:pointer}
@media (max-height:440px){.tg-card{width:min(760px,98%);padding:8px 12px}.tg-card ul{margin:2px 0 4px 16px;font-size:12.5px;line-height:1.28}.tg-card ul.tg-rules{margin:2px 0 4px;gap:3px}.tg-pic{width:28px;height:28px}.tg-pic svg{width:24px;height:24px}.tg-card h3{margin:0 0 2px}.tg-card .tg-row{margin:3px 0;gap:6px}.tg-card .tg-rew{margin:4px 0;padding:4px 6px}.tg-card .tg-cols{display:grid;grid-template-columns:1.25fr 1fr;gap:14px;align-items:start}.tg-card .tg-actions{margin-top:6px}.tg-card .tg-chip{min-height:44px;padding:0 11px}}
@media (max-height:420px){.tg-frame{grid-template-columns:minmax(104px,19%) 1fr minmax(138px,25%);gap:7px}.tg-panel{padding:7px}.tg-side h2{font-size:17px}.tg-bubble{font-size:12.5px;padding:6px 8px}.tg-btn{min-height:44px;font-size:14px}.tg-face{max-width:96px}.tg-card{padding:10px 14px}.tg-card ul{font-size:13px}.tg-card h3{font-size:19px}.tg-cube-wrap{width:84px;height:84px}.tg-cube>div i{width:14px;height:14px}.tg-score b{font-size:24px}}
@media (orientation:portrait){.tg-frame{grid-template-columns:1fr;grid-template-rows:auto 1fr auto}.tg-opp{flex-direction:row}.tg-face{width:64px}}
@media (prefers-reduced-motion:reduce){.tg-cube{transition:none}.tg-xo svg path,.tg-xo svg circle{animation:none;stroke-dashoffset:0}}`;
const fmt=(s,o)=>String(s).replace(/\{(\w+)\}/g,(_,k)=>o[k]??'');
const hhmm=ms=>{const m=Math.ceil(ms/60000);return Math.floor(m/60)+':'+String(m%60).padStart(2,'0')};
const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};


/* Picture for every rule line: a small drawn diagram of what the rule means (no new assets; inline SVG). */
const RS='<svg viewBox="0 0 40 40" aria-hidden="true">',RE='</svg>';
const sq=(x,y,c)=>'<rect x="'+x+'" y="'+y+'" width="8" height="8" fill="'+c+'"/>';
const board=()=>{let o='';for(let r=0;r<4;r++)for(let c=0;c<4;c++)o+=sq(4+c*8,4+r*8,(r+c)%2?'#6b3f22':'#f0d9a8');return o};
const man=(x,y,c)=>'<circle cx="'+x+'" cy="'+y+'" r="3.2" fill="'+c+'" stroke="#2a160a" stroke-width="1"/>';
const arrow=(x1,y1,x2,y2,c)=>'<path d="M'+x1+' '+y1+'L'+x2+' '+y2+'" stroke="'+c+'" stroke-width="2.2" stroke-linecap="round"/><circle cx="'+x2+'" cy="'+y2+'" r="2" fill="'+c+'"/>';
const RULE_ICONS={
 checkers:[RS+board()+man(16,32,'#fff')+man(24,8,'#b8302a')+RE, RS+board()+man(12,28,'#fff')+arrow(12,28,20,20,'#2c8a4a')+arrow(12,28,4,20,'#2c8a4a')+RE,
  RS+board()+man(12,28,'#fff')+man(20,20,'#b8302a')+arrow(12,28,28,12,'#d6453d')+RE, RS+board()+man(20,20,'#fff')+'<path d="M15 16l2-5 3 3 3-3 2 5z" fill="#e3b04b" stroke="#2a160a" stroke-width=".8"/>'+RE,
  RS+board()+man(12,28,'#fff')+'<path d="M6 6l28 28M34 6L6 34" stroke="#d6453d" stroke-width="2.6"/>'+RE],
 xo:[RS+'<path d="M15 6v28M25 6v28M6 15h28M6 25h28" stroke="#3a2a1a" stroke-width="2"/>'+RE, RS+'<path d="M15 6v28M25 6v28M6 15h28M6 25h28" stroke="#3a2a1a" stroke-width="1.6"/><path d="M8 8l4 4M12 8l-4 4M18 18l4 4M22 18l-4 4M28 28l4 4M32 28l-4 4" stroke="#b8302a" stroke-width="2"/><path d="M6 6l28 28" stroke="#e3b04b" stroke-width="2.6" opacity=".85"/>'+RE,
  RS+'<path d="M15 6v28M25 6v28M6 15h28M6 25h28" stroke="#3a2a1a" stroke-width="1.6"/><circle cx="10" cy="10" r="3" fill="none" stroke="#2c6f86" stroke-width="2"/><path d="M18 8l4 4M22 8l-4 4" stroke="#b8302a" stroke-width="2"/><circle cx="30" cy="20" r="3" fill="none" stroke="#2c6f86" stroke-width="2"/><text x="20" y="38" font-size="8" text-anchor="middle" fill="#3a2a1a">=</text>'+RE,
  RS+'<path d="M8 14a12 12 0 0 1 22-4M32 26a12 12 0 0 1-22 4" fill="none" stroke="#2c6f86" stroke-width="2.4"/><path d="M30 4v7h-7M10 36v-7h7" fill="none" stroke="#2c6f86" stroke-width="2.4"/>'+RE],
 dice:[  RS+'<rect x="3" y="11" width="16" height="16" rx="3" fill="#fff" stroke="#2a160a"/><circle cx="8" cy="16" r="1.7"/><circle cx="14" cy="22" r="1.7"/><text x="30" y="25" font-size="13" font-weight="700" text-anchor="middle" fill="#2c8a4a">+</text>'+RE,
  RS+'<path d="M8 30h24v6H8z" fill="#c49a4c" stroke="#2a160a"/><path d="M12 30V18h16v12" fill="#e3b04b" stroke="#2a160a"/><path d="M20 4v12M15 11l5 5 5-5" fill="none" stroke="#2c8a4a" stroke-width="2.4"/>'+RE,
  RS+'<rect x="7" y="7" width="26" height="26" rx="5" fill="#fff" stroke="#2a160a" stroke-width="1.6"/><circle cx="20" cy="20" r="3" fill="#d6453d"/><path d="M5 35L35 5" stroke="#d6453d" stroke-width="2.6"/>'+RE,
  RS+'<path d="M8 32l-2-18 9 7 5-13 5 13 9-7-2 18z" fill="#e3b04b" stroke="#5a3a1a" stroke-width="1.6"/><text x="20" y="30" font-size="10" font-weight="700" text-anchor="middle" fill="#5a3a1a">50</text>'+RE],
 knife:[RS+'<circle cx="20" cy="20" r="15" fill="#a8733b" stroke="#5a3a1a" stroke-width="2"/><circle cx="20" cy="20" r="9" fill="none" stroke="#5a3a1a"/><circle cx="20" cy="20" r="3.4" fill="#d6453d"/><path d="M20 39V30" stroke="#cfd6de" stroke-width="2.4"/>'+RE,
  RS+'<circle cx="20" cy="20" r="15" fill="#a8733b" stroke="#5a3a1a" stroke-width="2"/><path d="M20 35V24M23 35V25" stroke="#cfd6de" stroke-width="2.2"/><path d="M14 18l12-6M14 12l12 6" stroke="#d6453d" stroke-width="2.6"/>'+RE,
  RS+'<circle cx="16" cy="20" r="12" fill="#a8733b" stroke="#5a3a1a" stroke-width="2"/><path d="M30 12a10 10 0 0 1 0 16" fill="none" stroke="#2c6f86" stroke-width="2.4"/><path d="M27 26l3 3 3-4" fill="none" stroke="#2c6f86" stroke-width="2.4"/>'+RE,
  RS+'<path d="M8 32l-2-18 9 7 5-13 5 13 9-7-2 18z" fill="#e3b04b" stroke="#5a3a1a" stroke-width="1.6"/><text x="20" y="30" font-size="11" font-weight="700" text-anchor="middle" fill="#5a3a1a">3</text>'+RE]};
class Base{
 constructor(id,o){this.id=id;this.o=o;this.lang=TX[o.lang]?o.lang:'en';this.t=k=>TX[this.lang][k]??TX.en[k];this.timers=new Set();this.holds=new Set();this.suspended=false;this.lifecycle=[];this.playing=false;this.match=null;this.closed=false}
 later(fn,ms){const task={fn,remaining:ms,started:0,handle:null};this.timers.add(task);this.arm(task);return task}
 arm(task){if(this.closed||this.suspended)return;task.started=performance.now();task.handle=setTimeout(()=>{this.timers.delete(task);if(!this.closed&&!this.suspended)task.fn()},task.remaining)}
 setSuspended(reason,value){if(value)this.holds.add(reason);else this.holds.delete(reason);const paused=this.holds.size>0;if(paused===this.suspended)return;this.suspended=paused;if(this.root)this.root.inert=paused;
  for(const task of this.timers){if(paused){clearTimeout(task.handle);task.remaining=Math.max(0,task.remaining-(performance.now()-task.started));task.handle=null}else this.arm(task)}}
 listen(target,type,fn){target.addEventListener(type,fn);this.lifecycle.push([target,type,fn])}
 bindLifecycle(){this.listen(document,'visibilitychange',()=>this.setSuspended('visibility',document.hidden));this.listen(window,'blur',()=>this.setSuspended('blur',true));this.listen(window,'focus',()=>this.setSuspended('blur',false));this.listen(window,'pirate:native-pause',()=>this.setSuspended('native',true));this.listen(window,'pirate:native-resume',()=>{this.setSuspended('blur',false);this.setSuspended('native',false)});this.setSuspended('visibility',document.hidden)}
 line(k){const L=(LINES[this.lang]||LINES.en)[this.o.npc]||LINES.en[this.o.npc]||{};return L[k]||''}
 say(k,text){const b=this.q('.tg-bubble');const s=text||this.line(k);if(!s)return;b.textContent=s;b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');const react={good:'No',bad:'Yes',aiWin:'Yes',aiLose:'No',hi:'Wave',draw:'Wave'}[k];if(react)this.o.react?.(react)}
 sfx(n){try{this.o.sfx?.(n)}catch{}}
 mount(){
  if(!document.getElementById('tg-style')){const s=document.createElement('style');s.id='tg-style';s.textContent=CSS;document.head.append(s)}
  const sh=this.root=el('div','tg-shade');sh.setAttribute('role','dialog');sh.dataset.game=this.id;sh.setAttribute('aria-label',this.t(this.id));
  sh.innerHTML='<div class="tg-frame"><section class="tg-panel tg-opp"><img class="tg-face" alt=""><b></b><div class="tg-bubble" aria-live="polite"></div><div class="tg-spacer"></div></section><section class="tg-center"></section><section class="tg-panel tg-side"><h2></h2><div class="tg-status" aria-live="polite"></div><div class="tg-info"></div><div class="tg-spacer"></div><div class="tg-actions"></div></section><button class="tg-x" aria-label="">✕</button></div>';
  this.q=s=>sh.querySelector(s);this.q('.tg-face').src=this.o.opponent?.portrait||'';this.q('.tg-face').alt=this.o.opponent?.name||'';this.q('.tg-opp b').textContent=this.o.opponent?.name||'';
  this.q('.tg-side h2').textContent=this.t(this.id);this.q('.tg-x').setAttribute('aria-label',this.t('exit'));this.q('.tg-x').onclick=()=>this.requestExit();
  this.o.host.append(sh);this.center=this.q('.tg-center');this.build();this.setup();this.bindLifecycle();
 }
 overlay(s){const f=this.q('.tg-frame'),o=this.q('.tg-opp');f.style.setProperty('--tg-left',(o.offsetWidth+(parseFloat(getComputedStyle(f).columnGap)||10))+'px');f.append(s)}
 status(s){this.q('.tg-status').textContent=s}
 info(s){this.q('.tg-info').textContent=s}
 actions(list){const a=this.q('.tg-side .tg-actions');a.textContent='';for(const [label,fn,cls,id] of list){const b=el('button','tg-btn'+(cls?' '+cls:''),label);if(id)b.dataset.act=id;b.onclick=fn;a.append(b)}return a}
 rewardText(diff){const d=this.o.state?.daily(this.id,diff);if(!d)return this.t('noFee');return d.left>0?fmt(this.t('reward'),{u:d.used,l:d.limit})+' · '+fmt(this.t('rewardWin'),{g:d.amount,r:d.rep}):fmt(this.t('limit'),{t:hhmm(this.o.state.msUntilReset())})}
 diffs(){return null}
 setup(){
  this.playing=false;this.q('.tg-setup')?.remove();this.q('.tg-result')?.remove();this.say('hi');
  const s=el('div','tg-setup'),c=el('div','tg-card');s.append(c);const cols=el('div','tg-cols'),left=el('div'),right=el('div');cols.append(left,right);left.append(el('h3',null,this.t(this.id)));
  const ul=el('ul','tg-rules'),pics=RULE_ICONS[this.id]||[];this.t(this.id+'Rules').forEach((r,i)=>{const li=el('li');if(pics[i]){const fig=el('span','tg-pic');fig.innerHTML=pics[i];li.append(fig)}li.append(el('span',null,r));ul.append(li)});left.append(ul);c.append(cols);
  const ds=this.diffs();let diff=this.diff||'normal';const rew=el('div','tg-rew');
  if(ds){const row=el('div','tg-row');row.append(el('span',null,this.t('diff')+':'));right.append(row);for(const d of ds){const b=el('button','tg-chip',this.t(d.id));b.dataset.diff=d.id;b.setAttribute('aria-pressed',String(d.id===diff));if(d.locked){b.disabled=true;b.title=fmt(this.t('locked'),{r:d.locked});b.textContent+=' 🔒'}b.onclick=()=>{diff=d.id;row.querySelectorAll('.tg-chip').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));rew.textContent=this.rewardText(diff)};row.append(b)}}
  const extra=this.setupExtra?.();if(extra)right.append(el('div','tg-info',extra));
  rew.textContent=this.rewardText(diff);right.append(rew);right.append(el('div','tg-info',this.t('noFee')));
  const act=el('div','tg-actions');const back=el('button','tg-btn',this.t('back'));back.onclick=()=>this.close();const go=el('button','tg-btn gold',this.t('play'));go.dataset.act='start';go.onclick=()=>{this.diff=diff;s.remove();this.start()};act.append(back,go);c.append(act);
  this.overlay(s);this.status('');this.info('');this.actions([]);
 }
 start(){this.match=this.o.state?.begin(this.id,this.diff||'normal')||null;this.playing=true;this.sfx('start');this.begin()}
 finish(outcome,extra){
  if(!this.playing)return;this.playing=false;const res=this.match&&this.o.state?this.o.state.finish(this.match,outcome,extra):null;this.match=null;
  this.say(outcome==='win'?'aiLose':outcome==='lose'||outcome==='loss'?'aiWin':'draw');this.sfx(outcome==='win'?'win':outcome==='draw'?'draw':'lose');
  const r=el('div','tg-result '+(outcome==='win'?'win':outcome==='draw'?'draw':'lose')),c=el('div','tg-card');r.append(c);
  c.append(el('h3',null,this.t(outcome==='win'?'win':outcome==='draw'?'draw':'lose')));if(extra?.text)c.append(el('p',null,extra.text));
  if(res&&outcome==='win'){c.append(el('p','tg-rew',res.code==='storage'?this.t('storage'):res.limited?this.t('gotLimit'):fmt(this.t('got'),{g:res.gold,r:res.rep})));if(res.gold>0)this.later(()=>this.sfx('coin'),450)}
  this.info(res&&outcome==='win'?(res.code==='storage'?this.t('storage'):res.limited?this.t('gotLimit'):fmt(this.t('got'),{g:res.gold,r:res.rep}))+'\n'+this.rewardText(this.diff||'normal'):this.rewardText(this.diff||'normal'));this.q('.tg-info').style.whiteSpace='pre-line';
  this.later(()=>r.classList.add('fade'),2600);
  this.status(this.t(outcome==='win'?'win':outcome==='draw'?'draw':'lose'));this.actions([[this.t('again'),()=>{r.remove();this.reset?.();this.setup()},'gold','again'],[this.t('exit'),()=>this.close(),'','exit']]);
  this.center.append(r);this.lastResult={outcome,res};this.o.onResult?.(this.id,outcome,res);
 }
 requestExit(){
  if(this.q('.tg-confirm'))return;
  if(!this.playing)return this.close();
  const s=el('div','tg-setup tg-confirm'),c=el('div','tg-card');s.append(c);c.append(el('h3',null,this.t('leaveQ')),el('p',null,this.t('leaveT')));
  const act=el('div','tg-actions');const st=el('button','tg-btn gold',this.t('stay'));st.dataset.act='stay';st.onclick=()=>s.remove();const lv=el('button','tg-btn',this.t('leave'));lv.dataset.act='leave';lv.onclick=()=>{this.playing=false;this.close()};act.append(lv,st);c.append(act);this.overlay(s);
 }
 back(){if(this.q('.tg-confirm')){this.q('.tg-confirm').remove();return true}this.requestExit();return true}
 close(){if(this.closed)return;this.closed=true;for(const task of this.timers)clearTimeout(task.handle);this.timers.clear();for(const [target,type,fn] of this.lifecycle)target.removeEventListener(type,fn);this.lifecycle=[];this.stop?.();this.root?.remove();this.o.onClose?.(this.lastResult||null)}
}

/* ------------------------------------------------------------------ checkers */
class Checkers extends Base{
 diffs(){const lock=this.o.state&&!this.o.state.masterUnlocked()?this.o.state.MASTER_REP:0;return[{id:'easy'},{id:'normal'},{id:'master',locked:lock}]}
 build(){this.cv=el('canvas','tg-board');this.center.append(this.cv);this.ctx=this.cv.getContext('2d');this.anim=null;this.sel=null;this.prefix=[];this.raf=0;
  this.cv.addEventListener('pointerdown',e=>this.tap(e));this.ro=new ResizeObserver(()=>this.fit());this.ro.observe(this.center);this.reset();this.fit()}
 reset(){const C=RL().checkers;this.s=C.newCheckers();this.sel=null;this.prefix=[];this.last=null;this.anim=null;this.moves=C.legalMoves(this.s);this.draw()}
 fit(){const r=this.center.getBoundingClientRect(),sz=Math.max(160,Math.floor(Math.min(r.width,r.height)-4)),dpr=Math.min(2,devicePixelRatio||1);this.size=sz;this.cv.style.width=this.cv.style.height=sz+'px';this.cv.width=this.cv.height=Math.round(sz*dpr);this.dpr=dpr;this.draw()}
 begin(){this.reset();this.status(this.t('turnYou'));this.info(fmt(this.t('first'),{w:this.t('firstYou')}));this.actions([[this.t('exit'),()=>this.requestExit(),'', 'exit']]);this.draw()}
 cell(){return this.size*.92/8}
 sqAt(e){const r=this.cv.getBoundingClientRect(),m=this.size*.04,c=this.cell(),x=e.clientX-r.left-m,y=e.clientY-r.top-m;const col=Math.floor(x/c),row=Math.floor(y/c);return col>=0&&col<8&&row>=0&&row<8?row*8+col:-1}
 candidates(){const p=this.prefix,ms=this.moves.filter(m=>m.from===this.sel&&p.every((q,i)=>m.path[i]===q));return ms}
 tap(e){
  if(!this.playing||this.s.turn!==1||this.anim)return;const q=this.sqAt(e);if(q<0)return;
  const movable=new Set(this.moves.map(m=>m.from));
  if(this.prefix.length===0&&movable.has(q)){this.sel=q;this.sfx('click');this.draw();return}
  if(this.sel==null){if(this.s.board[q]>0&&this.moves.some(m=>m.caps.length)){this.status(this.t('forced'));this.say('bad',this.t('forced'))}return}
  const cands=this.candidates(),next=cands.filter(m=>m.path[this.prefix.length]===q);
  if(!next.length){if(this.s.board[q]>0&&this.prefix.length===0){this.sel=null;this.draw()}return}
  this.prefix=[...this.prefix,q];const done=next.find(m=>m.path.length===this.prefix.length);
  if(done&&next.length===1){this.play(done,true)}else if(done&&next.every(m=>m.path.length===this.prefix.length)){this.play(done,true)}else{this.sfx(next[0].caps.length?'capture':'place');this.draw()}
 }
 play(m,player){
  const C=RL().checkers;this.sel=null;this.prefix=[];
  const steps=[m.from,...m.path];const piece=this.s.board[m.from];this.anim={m,steps,i:0,t:0,piece,hidden:new Set(),player};
  const tick=()=>{if(this.closed)return;if(this.suspended){this.raf=requestAnimationFrame(tick);return}const a=this.anim;a.t+=1/60/0.17;if(a.t>=1){a.t=0;a.i++;if(m.caps[a.i-1]!=null){a.hidden.add(m.caps[a.i-1]);this.sfx('capture')}else this.sfx('place')}
   if(a.i>=steps.length-1){this.anim=null;this.s=C.applyMove(this.s,m);this.last=m;if(m.promote)this.sfx('king');this.moves=C.legalMoves(this.s);this.draw();this.after(player,m);return}
   this.draw();this.raf=requestAnimationFrame(tick)};
  this.raf=requestAnimationFrame(tick);
 }
 after(player,m){
  const C=RL().checkers,res=C.result(this.s);
  if(res){this.finish(res==='white'?'win':res==='draw'?'draw':'loss');return}
  if(player){if(m.caps.length>1||m.promote)this.say('good');this.status(fmt(this.t('turnAI'),{n:this.o.opponent?.name||''}));this.o.react?.('Think');
   this.later(()=>{const mv=C.ai(this.s,this.diff,Math.random);if(mv)this.play(mv,false)},520+Math.random()*380)}
  else{if(m.caps.length>=2)this.say('bad');this.status(this.moves.some(x=>x.caps.length)?this.t('forced'):this.t('turnYou'))}
 }
 draw(){
  const x=this.ctx;if(!x||!this.size)return;const d=this.dpr,S=this.size;x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,S,S);
  const m=S*.04,c=this.cell();
  const g=x.createLinearGradient(0,0,S,S);g.addColorStop(0,'#7a4a20');g.addColorStop(1,'#4a2a10');x.fillStyle=g;x.beginPath();x.roundRect(0,0,S,S,10);x.fill();
  for(let r=0;r<8;r++)for(let col=0;col<8;col++){const dark=(r+col)%2===1;x.fillStyle=dark?'#3a2210':'#e8cf9c';x.fillRect(m+col*c,m+r*c,c,c);if(dark){x.fillStyle='rgba(255,255,255,.03)';x.fillRect(m+col*c,m+r*c,c,c*.5)}}
  x.strokeStyle='#2a1406';x.lineWidth=2;x.strokeRect(m,m,c*8,c*8);
  const ctr=i=>[m+(i%8+.5)*c,m+(Math.floor(i/8)+.5)*c];
  if(this.last){x.fillStyle='rgba(255,210,90,.18)';for(const q of [this.last.from,...this.last.path]){const [cx,cy]=ctr(q);x.fillRect(cx-c/2,cy-c/2,c,c)}}
  const myTurn=this.playing&&this.s.turn===1&&!this.anim;
  if(myTurn){const movable=new Set(this.moves.map(mm=>mm.from));for(const q of movable){const [cx,cy]=ctr(q);x.strokeStyle=q===this.sel?'#fff2a8':'rgba(255,214,110,.75)';x.lineWidth=q===this.sel?4:2.5;x.beginPath();x.arc(cx,cy,c*.46,0,Math.PI*2);x.stroke()}
   if(this.sel!=null){const nexts=new Set(this.candidates().map(mm=>mm.path[this.prefix.length]));for(const q of nexts){const [cx,cy]=ctr(q);x.fillStyle='rgba(120,230,120,.85)';x.beginPath();x.arc(cx,cy,c*.17,0,Math.PI*2);x.fill();x.strokeStyle='#0a3a08';x.lineWidth=2;x.stroke()}
    if(this.prefix.length){x.strokeStyle='rgba(120,230,120,.8)';x.lineWidth=4;x.beginPath();const [sx,sy]=ctr(this.sel);x.moveTo(sx,sy);for(const q of this.prefix){const [px,py]=ctr(q);x.lineTo(px,py)}x.stroke()}}}
  const a=this.anim;
  for(let i=0;i<64;i++){const v=this.s.board[i];if(!v)continue;if(a&&(i===a.m.from))continue;let alpha=1;if(a&&a.hidden.has(i))continue;const [cx,cy]=ctr(i);this.piece(cx,cy,c,v,alpha)}
  if(a){const p0=ctr(a.steps[a.i]),p1=ctr(a.steps[Math.min(a.i+1,a.steps.length-1)]),k=a.t,ease=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;const cx=p0[0]+(p1[0]-p0[0])*ease,cy=p0[1]+(p1[1]-p0[1])*ease-Math.sin(k*Math.PI)*c*.25;this.piece(cx,cy,c,a.piece,1,1+Math.sin(k*Math.PI)*.12)}
 }
 piece(cx,cy,c,v,alpha=1,scale=1){const x=this.ctx,r=c*.34*scale,white=v>0;x.globalAlpha=alpha;
  x.fillStyle='rgba(0,0,0,.45)';x.beginPath();x.ellipse(cx+2,cy+4,r,r*.9,0,0,Math.PI*2);x.fill();
  const g=x.createRadialGradient(cx-r*.35,cy-r*.4,r*.1,cx,cy,r);if(white){g.addColorStop(0,'#fffaf0');g.addColorStop(1,'#cbb48a')}else{g.addColorStop(0,'#c0392b');g.addColorStop(1,'#4e0b06')}
  x.fillStyle=g;x.beginPath();x.arc(cx,cy,r,0,Math.PI*2);x.fill();x.strokeStyle=white?'#8a7048':'#2a0503';x.lineWidth=2;x.stroke();x.beginPath();x.arc(cx,cy,r*.62,0,Math.PI*2);x.strokeStyle=white?'rgba(120,90,50,.5)':'rgba(0,0,0,.35)';x.stroke();
  if(Math.abs(v)===2){x.fillStyle=white?'#b8860b':'#ffd25a';x.beginPath();const w=r*.9,h=r*.55,bx=cx-w/2,by=cy+h*.35;x.moveTo(bx,by);x.lineTo(bx,by-h*.7);x.lineTo(bx+w*.25,by-h*.25);x.lineTo(cx,by-h);x.lineTo(bx+w*.75,by-h*.25);x.lineTo(bx+w,by-h*.7);x.lineTo(bx+w,by);x.closePath();x.fill()}
  x.globalAlpha=1}
 stop(){cancelAnimationFrame(this.raf);this.ro?.disconnect()}
}

/* ------------------------------------------------------------------ X–O */
let xoFirstPlayer=true;
class XO extends Base{
 diffs(){return[{id:'easy'},{id:'normal'}]}
 setupExtra(){return fmt(this.t('first'),{w:xoFirstPlayer?this.t('firstYou'):this.o.opponent?.name||'O'})}
 build(){this.grid=el('div','tg-xo');for(let i=0;i<9;i++){const b=el('button');b.dataset.cell=i;b.setAttribute('aria-label',String(i+1));b.onclick=()=>this.tap(i);this.grid.append(b)}this.center.append(this.grid);this.ro=new ResizeObserver(()=>this.fit());this.ro.observe(this.center);this.fit();this.cells=Array(9).fill(null)}
 fit(){const r=this.center.getBoundingClientRect(),s=Math.max(150,Math.floor(Math.min(r.width,r.height)-6));this.grid.style.width=this.grid.style.height=s+'px'}
 begin(){this.cells=Array(9).fill(null);for(const b of this.grid.children){b.textContent='';b.classList.remove('winline');b.disabled=false}this.playerFirst=xoFirstPlayer;xoFirstPlayer=!xoFirstPlayer;
  this.info(fmt(this.t('first'),{w:this.playerFirst?this.t('firstYou'):this.o.opponent?.name||'O'}));this.actions([[this.t('exit'),()=>this.requestExit(),'','exit']]);
  if(this.playerFirst){this.turn='X';this.status(this.t('turnYou'))}else{this.turn='O';this.aiTurn()}}
 mark(i,m){this.cells[i]=m;const b=this.grid.children[i];b.innerHTML=m==='X'?'<svg viewBox="0 0 100 100" class="x"><path d="M18 18 82 82M82 18 18 82"/></svg>':'<svg viewBox="0 0 100 100" class="o"><circle cx="50" cy="50" r="33"/></svg>';this.sfx(m==='X'?'chalk':'chalk2')}
 tap(i){if(!this.playing||this.turn!=='X'||this.cells[i])return;this.mark(i,'X');if(this.check())return;this.turn='O';this.aiTurn()}
 aiTurn(){this.status(fmt(this.t('turnAI'),{n:this.o.opponent?.name||''}));this.o.react?.('Think');this.later(()=>{const i=RL().xo.ai(this.cells,'O',this.diff,Math.random);if(i<0)return;this.mark(i,'O');if(this.check())return;this.turn='X';this.status(this.t('turnYou'))},480+Math.random()*420)}
 check(){const w=RL().xo.winner(this.cells);if(!w){const c=this.cells.filter(Boolean).length;if(this.turn==='X'&&c===3&&Math.random()<.5)this.say('good');return false}
  if(w.line)for(const i of w.line)this.grid.children[i].classList.add('winline');for(const b of this.grid.children)b.disabled=true;this.later(()=>this.finish(w.mark==='X'?'win':w.mark==='O'?'loss':'draw'),550);this.turn=null;return true}
 reset(){for(const b of this.grid.children){b.textContent='';b.classList.remove('winline');b.disabled=false}}
 stop(){this.ro?.disconnect()}
}

/* ------------------------------------------------------------------ dice */
const PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
const FACE_ROT={1:[0,0],2:[0,-90],3:[-90,0],4:[90,0],5:[0,90],6:[0,180]};
class Dice extends Base{
 build(){const w=el('div','tg-dice');w.innerHTML='<div class="tg-scores"><div class="tg-score" data-p="0"><span></span><b>0</b><i><span style="width:0"></span></i></div><div class="tg-score" data-p="1"><span></span><b>0</b><i><span style="width:0"></span></i></div></div><div class="tg-cube-wrap"><div class="tg-cube"></div></div><div class="tg-turn"></div>';
  this.center.append(w);this.w=w;w.querySelector('[data-p="0"] span').textContent=this.t('you');w.querySelector('[data-p="1"] span').textContent=this.o.opponent?.name||'';
  const cube=w.querySelector('.tg-cube');const faces=[[1,'translateZ(55px)'],[2,'rotateY(90deg) translateZ(55px)'],[3,'rotateX(90deg) translateZ(55px)'],[4,'rotateX(-90deg) translateZ(55px)'],[5,'rotateY(-90deg) translateZ(55px)'],[6,'rotateY(180deg) translateZ(55px)']];
  for(const [n,tf] of faces){const f=el('div');f.style.transform=tf;for(let k=0;k<9;k++){const p=el('i');if(!PIPS[n].includes(k))p.style.visibility='hidden';f.append(p)}cube.append(f)}this.cube=cube;this.spins=0;this.fitCube();this.ro=new ResizeObserver(()=>{this.fitCube();this.die3d?.resize()});this.ro.observe(w);
  // a real 3D die (shared 3D bundle) when available; the CSS cube stays as the fallback
  if(window.PirateDice3D){const wrap=w.querySelector('.tg-cube-wrap'),host=el('div','tg-die3d');wrap.after(host);try{this.die3d=window.PirateDice3D.create(host);wrap.remove()}catch(e){host.remove();console.warn('[tavern] 3D die',e);this.die3d=null}}}
 fitCube(){const wrap=this.w.querySelector('.tg-cube-wrap');if(!wrap)return;const s=wrap.clientWidth/2;this.cube.querySelectorAll(':scope>div').forEach((f,i)=>{f.style.transform=f.style.transform.replace(/translateZ\([^)]*\)/,'translateZ('+s+'px)')})}
 begin(){this.d=RL().dice.newDice(0);this.busy=false;this.render();this.say('hi');this.myTurn()}
 render(){const d=this.d;for(const p of [0,1]){const s=this.w.querySelector('[data-p="'+p+'"]');s.querySelector('b').textContent=d.scores[p];s.querySelector('i span').style.width=Math.min(100,d.scores[p]*2)+'%';s.classList.toggle('on',d.turn===p&&d.winner===null)}this.info(this.t('goal'))}
 show(face){if(this.die3d){this.die3d.roll(face,matchMedia('(prefers-reduced-motion: reduce)').matches?1:850);return}this.spins+=2;const [rx,ry]=FACE_ROT[face];this.cube.style.transform='rotateX('+(rx+360*this.spins+(Math.random()*16-8))+'deg) rotateY('+(ry+360*this.spins)+'deg)'}
 myTurn(){this.busy=false;this.status(this.t('turnYou'));this.setTurnText();this.actions([[this.t('roll'),()=>this.roll(),'gold','roll'],[this.t('hold'),()=>this.hold(),'','hold'],[this.t('exit'),()=>this.requestExit(),'','exit']]);this.q('[data-act=hold]').disabled=this.d.turnTotal===0}
 setTurnText(bust){const t=this.w.querySelector('.tg-turn');t.classList.toggle('bust',!!bust);t.textContent=bust?this.t('bust'):fmt(this.t('turnTotal'),{n:this.d.turnTotal})}
 lockButtons(){this.q('.tg-side .tg-actions').querySelectorAll('[data-act=roll],[data-act=hold]').forEach(b=>b.disabled=true)}
 roll(){if(!this.playing||this.busy||this.d.turn!==0)return;this.busy=true;this.lockButtons();const face=1+Math.floor(Math.random()*6);this.sfx('dice');this.show(face);this.later(()=>this.landed(face,0),900)}
 landed(face,p){const D=RL().dice;this.sfx('diceLand');this.d=D.roll(this.d,face);this.render();
  if(this.d.winner!==null){this.setTurnText();this.later(()=>this.finish(this.d.winner===0?'win':'loss'),500);return}
  if(face===1){this.setTurnText(true);this.sfx('bust');this.say(p===0?'bad':'good');this.later(()=>this.d.turn===0?this.myTurn():this.aiTurn(),1100);return}
  this.setTurnText();if(p===0){this.busy=false;this.myTurn()}else this.later(()=>this.aiStep(),650)}
 hold(){if(!this.playing||this.busy||this.d.turn!==0||!this.d.turnTotal)return;this.sfx('hold');this.d=RL().dice.hold(this.d);this.render();if(this.d.winner!==null){this.later(()=>this.finish('win'),400);return}this.aiTurn()}
 aiTurn(){this.busy=true;this.lockButtons();this.status(fmt(this.t('turnAI'),{n:this.o.opponent?.name||''}));this.setTurnText();this.o.react?.('Punch');this.later(()=>this.aiStep(),800)}
 aiStep(){if(!this.playing)return;const D=RL().dice;if(D.ai(this.d,1)){const face=1+Math.floor(Math.random()*6);this.sfx('dice');this.show(face);this.later(()=>this.landed(face,1),900)}else{this.sfx('hold');this.d=D.hold(this.d);this.render();if(this.d.winner!==null){this.later(()=>this.finish('loss'),400);return}this.later(()=>this.myTurn(),500)}}
 stop(){this.ro?.disconnect();try{this.die3d?.dispose()}catch{}this.die3d=null}
}

/* ------------------------------------------------------------------ knives */
class Knife extends Base{
 build(){this.cv=el('canvas','tg-knife');this.center.append(this.cv);this.ctx=this.cv.getContext('2d');this.cv.addEventListener('pointerdown',e=>{e.preventDefault();this.throwK()});this.ro=new ResizeObserver(()=>this.fit());this.ro.observe(this.center);this.raf=0;this.best=this.o.state?.snapshot().stats.best.knife||0;this.idle();this.fit()}
 fit(){const r=this.center.getBoundingClientRect(),h=Math.max(200,Math.floor(r.height-4)),w=Math.max(160,Math.floor(Math.min(r.width-4,h*.82))),dpr=Math.min(2,devicePixelRatio||1);this.W=w;this.H=h;this.cv.style.width=w+'px';this.cv.style.height=h+'px';this.cv.width=Math.round(w*dpr);this.cv.height=Math.round(h*dpr);this.dpr=dpr;this.draw()}
 idle(){this.stopLoop();this.stageN=1;this.stage=RL().knife.stage(1);this.rot=0;this.stuck=[];this.flying=null;this.left=0;this.time=0;this.fx=[];this.pause=false;this.shake=0;this.won=false;this.draw()}
 begin(){this.idle();this.startStage();this.loop()}
 startStage(){const K=RL().knife;this.stage=K.stage(this.stageN);this.stuck=K.preset(this.stage,Math.random).map(a=>({a,preset:true}));this.left=this.stage.throws;this.time=0;this.flying=null;this.status(fmt(this.t('stage'),{n:this.stageN}));this.updateInfo();
  this.actions([[this.t('throwK'),()=>this.throwK(),'gold','throw'],[this.t('exit'),()=>this.requestExit(),'','exit']])}
 updateInfo(){this.info(fmt(this.t('knivesLeft'),{n:this.left})+' · '+fmt(this.t('best'),{n:Math.max(this.best,0)}))}
 throwK(){if(!this.playing||this.flying||this.left<=0||this.pause)return;this.flying={t:0};this.left--;this.sfx('knifeThrow');this.updateInfo()}
 // Each round owns one animation chain; stale callbacks cannot restart it.
 stopLoop(){this.loopGeneration=(this.loopGeneration||0)+1;cancelAnimationFrame(this.raf);this.raf=0}
 loop(){this.stopLoop();const generation=this.loopGeneration;let last=0;const f=now=>{if(this.closed||!this.playing||generation!==this.loopGeneration)return;this.raf=0;const dt=last?Math.min(.05,(now-last)/1000):1/60;last=now;if(!this.suspended){this.step(dt);this.draw()}if(!this.closed&&this.playing&&generation===this.loopGeneration)this.raf=requestAnimationFrame(f)};this.raf=requestAnimationFrame(f)}
 step(dt){
  const K=RL().knife;if(!this.playing)return;if(!this.pause){this.time+=dt;this.rot+=K.spin(this.stage,this.time)*dt}
  if(this.flying){this.flying.t+=dt/.13;if(this.flying.t>=1){const h=K.hit(this.stuck.map(s=>s.a),this.rot);this.flying=null;
    if(h.clash){this.sfx('knifeClash');this.fx.push({type:'bounce',t:0});this.say('aiWin',this.t('clash'));this.pause=true;this.later(()=>{this.pause=false;this.end()},900);return}
    this.stuck.push({a:h.local});this.sfx('knifeHit');this.shake=.12;this.fx.push({type:'chips',t:0});
    if(this.left===0){this.pause=true;this.sfx('stage');this.say('good',this.t('cleared'));const cleared=this.stageN;this.best=Math.max(this.best,cleared);this.later(()=>{this.pause=false;this.stageN++;if(cleared===3&&!this.won){this.won=true}this.startStage()},900)}}}
  this.shake=Math.max(0,(this.shake||0)-dt);for(const f of this.fx)f.t+=dt;this.fx=this.fx.filter(f=>f.t<.8)}
 end(){this.stopLoop();const reached=this.stageN,cleared=reached-1;this.best=Math.max(this.best,cleared);this.finish(cleared>=3?'win':'loss',{best:cleared,text:fmt(this.t('reached'),{n:reached})});this.won=false}
 reset(){this.idle()}
 draw(){
  const x=this.ctx;if(!x||!this.W||!this.stuck)return;const W=this.W,H=this.H,d=this.dpr;x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,W,H);
  const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3a2210');g.addColorStop(1,'#1c0e05');x.fillStyle=g;x.beginPath();x.roundRect(0,0,W,H,12);x.fill();
  for(let i=0;i<7;i++){x.fillStyle='rgba(0,0,0,.18)';x.fillRect(0,i*H/7,W,2)}
  const R=Math.min(W*.36,H*.24),cx=W/2,cy=H*.33+(this.shake?(Math.random()-.5)*6:0);
  // knives (behind the log)
  const knife=(a,len,col)=>{x.save();x.translate(cx,cy);x.rotate(a);x.translate(0,R*.82);x.fillStyle='#d9dee4';x.beginPath();x.moveTo(-R*.05,0);x.lineTo(R*.05,0);x.lineTo(0,-R*.25);x.closePath();x.fill();x.fillStyle='#e6ecf2';x.fillRect(-R*.05,0,R*.1,len*.45);x.fillStyle='#b8862b';x.fillRect(-R*.1,len*.45,R*.2,R*.05);x.fillStyle=col;x.beginPath();x.roundRect(-R*.045,len*.5,R*.09,len*.5,R*.03);x.fill();x.restore()};
  for(const s of this.stuck)knife(s.a+this.rot,R*.95,s.preset?'#555':'#6b2a0c');
  // the log target
  const lg=x.createRadialGradient(cx-R*.2,cy-R*.2,R*.1,cx,cy,R);lg.addColorStop(0,'#c58b4f');lg.addColorStop(.7,'#8a5527');lg.addColorStop(1,'#5a3212');x.fillStyle=lg;x.beginPath();x.arc(cx,cy,R,0,Math.PI*2);x.fill();
  x.save();x.translate(cx,cy);x.rotate(this.rot);x.strokeStyle='rgba(60,30,10,.45)';for(let i=1;i<6;i++){x.lineWidth=1.5;x.beginPath();x.arc(0,0,R*i/6,0,Math.PI*2);x.stroke()}
  x.fillStyle='#9a1c14';x.beginPath();x.arc(0,0,R*.22,0,Math.PI*2);x.fill();x.fillStyle='#e8d9b0';x.beginPath();x.arc(0,0,R*.11,0,Math.PI*2);x.fill();
  x.strokeStyle='rgba(40,20,6,.6)';x.lineWidth=2;x.beginPath();x.moveTo(-R*.7,-R*.2);x.lineTo(-R*.3,R*.1);x.moveTo(R*.2,-R*.6);x.lineTo(R*.45,-R*.3);x.stroke();x.restore();
  x.lineWidth=6;x.strokeStyle='#3b2412';x.beginPath();x.arc(cx,cy,R,0,Math.PI*2);x.stroke();
  // flying / ready knife
  const by=H*.86;let ky=by;if(this.flying){const k=this.flying.t;ky=by+(cy+R+R*.05-by)*k}
  if(this.playing&&(this.left>0||this.flying)){x.save();x.translate(cx,ky);x.fillStyle='#e6ecf2';x.beginPath();x.moveTo(-R*.06,0);x.lineTo(R*.06,0);x.lineTo(0,-R*.3);x.closePath();x.fill();x.fillRect(-R*.06,0,R*.12,R*.42);x.fillStyle='#b8862b';x.fillRect(-R*.12,R*.42,R*.24,R*.06);x.fillStyle='#6b2a0c';x.beginPath();x.roundRect(-R*.05,R*.48,R*.1,R*.45,R*.03);x.fill();x.restore()}
  for(const f of this.fx){if(f.type==='chips'){x.fillStyle='rgba(210,160,90,'+(1-f.t/.8)+')';for(let i=0;i<8;i++){const a=Math.PI/2+(i-3.5)*.25,r=R+f.t*60;x.fillRect(cx+Math.cos(a)*r,cy+Math.sin(a)*r,4,3)}}
   if(f.type==='bounce'){x.save();x.translate(cx+f.t*120,cy+R+20+f.t*f.t*400);x.rotate(f.t*12);x.fillStyle='#e6ecf2';x.fillRect(-4,-20,8,40);x.restore()}}
  // remaining knives
  for(let i=0;i<this.left;i++){x.fillStyle='#e6ecf2';x.fillRect(12,H-24-i*16,22,5);x.fillStyle='#6b2a0c';x.fillRect(34,H-25-i*16,12,7)}
  x.fillStyle='#ffe7ae';x.font='bold 15px Georgia';x.textAlign='right';x.fillText(this.playing?fmt(this.t('stage'),{n:this.stageN}):'',W-10,22);
 }
 stop(){this.stopLoop();this.ro?.disconnect()}
}

const CLASSES={checkers:Checkers,xo:XO,dice:Dice,knife:Knife};
let current=null;
window.PirateTavernGames={
 TEXT:TX,
 open(id,o){if(current)current.close();const C=CLASSES[id];if(!C)throw Error('No game '+id);const g=new C(id,Object.assign({},o,{onClose:r=>{if(current===g)current=null;o.onClose?.(r)}}));current=g;g.mount();return g},
 get current(){return current},
 close(){current?.close()}
};
})();
