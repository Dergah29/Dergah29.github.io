/* Pirate Strike — Level 10: The Black Admiral (Qara Admiral), BOSS chapter, the end of chapter 2.
 * Independent level on PirateLevelEngine (layout: tools/level10_layout.py, audio: tools/level10_audio.py).
 * PHASE 1 — Naval Assault: Our Ship → the Boarding → the Main Deck of the Black Leviathan, at night in a sea battle.
 *   The escort ship fires broadsides (a red mark and a whistle, then the shot lands), boarding planks break under
 *   you, the gun deck is held by elite Black Marines and Deck Gunners, the Admiral's guard waits on the main deck.
 * PHASE 2 — Admiral Duel on the quarterdeck: three-cut sword combo (red flash before each chain), dash lunge along
 *   a red line (he hits the rail and is stunned when you dodge it), double pistol shot with an aim line and a
 *   visible reload, and a parry when you hack at his guard from the front (riposte after a warning).
 * PHASE 3 — Final Battle: at half health the Leviathan catches fire (burning rails, falling mast, storm and
 *   lightning). New abilities: shadow dash (he vanishes; smoke gathers where he will strike), cannon barrage
 *   (marks around you), the fire wave (a jumpable flame running along the deck). Every attack ends in an opening.
 *   The phase is saved: losing a life in Phase 3 brings you back to Phase 3.
 * Ending: the Admiral yields, the war chest holds the boss reward (added to the level's gold), story about the
 *   Storm Crown → Level 10 complete, Level 11 (chapter 3) unlocked through the existing progression. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A10=BASE+'assets/level-10/',AM=BASE+'assets/music/';
const L={
en:{levelWord:'Level',title:'Level 10 · The Black Admiral',blurb:'BOSS — board the Black Leviathan through cannon fire, cut through his marines and duel the Black Admiral on a burning ship',
 ourship:'Our Ship',boarding:'The Boarding',maindeck:'The Main Deck',quarter:'The Quarterdeck',
 objOur:'Cross to the Black Leviathan — watch for broadside marks',objBoard:'Fight across the gun deck to the rigging',objMain:'Climb to the main deck — the quarterdeck is ahead',
 objGuard:'The Admiral’s guard! · wave {n}/2',objDuel:'Defeat the Black Admiral',objFire:'The ship burns — finish the Black Admiral!',objChest:'Claim the Admiral’s war chest',
 ambush:'THE ADMIRAL’S GUARD!',wave:'WAVE {n}',cleared:'The guard is broken — the quarterdeck is open!',secretNest:'Secret: the crow’s nest stash',
 admiral:'THE BLACK ADMIRAL',phase1:'PHASE 1 · NAVAL ASSAULT',phase2:'PHASE 2 · ADMIRAL DUEL',phase3:'PHASE 3 · FINAL BATTLE',broadside:'BROADSIDE',burning:'BURNING',
 intro:'“So the little captain came aboard. Draw your blade!”',introFire:'“You will burn with my ship!”',rage:'The Leviathan is on fire!',parry:'PARRY',stunned:'STUNNED',
 yield:'The Black Admiral yields!',reward:'BOSS REWARD',rewardSub:'+{n} gold · the Storm Crown chart',victory:'VICTORY!',tap:'Tap to continue',skip:'SKIP ▶▶',
 hBroad:'Broadsides: a red mark and a whistle — keep moving out of it',hPlank:'The boarding planks break under you — keep running',
 hMarine:'Black Marines raise a buckler: wait for it to drop, strike from behind or dash through',hGunner:'Deck Gunners aim along a red line: block or step aside, then strike while they reload',
 hDuel:'Every attack ends in an opening (gold sparks). Don’t hack at his guard from the front — he parries',hLunge:'Red line on the deck: he lunges along it. Dodge and he hits the rail',
 hFire:'Smoke gathers where he will strike. Jump the fire wave. Stay off the burning rails',
 s2n:'The Black Admiral',s1:'It’s over, Admiral. Your fleet is burning and your marines have fled.',s2:'Over? Fool… I only served the one who wears the Storm Crown. She is coming for every free ship on this sea.',
 s3:'Among the Admiral’s charts lies a map to a reef no other chart shows — the Reef of the Storm Crown.',s4:'Then that’s our next course. Raise the sails, crew — a new sea awaits!'},
az:{levelWord:'Səviyyə',title:'Səviyyə 10 · Qara Admiral',blurb:'BOSS — top atəşi altında Qara Leviafana çıx, dəniz piyadalarını yar və yanan gəmidə Qara Admiralla duelə gir',
 ourship:'Bizim Gəmi',boarding:'Abordaj',maindeck:'Əsas Göyərtə',quarter:'Komanda Göyərtəsi',
 objOur:'Qara Leviafana keç — yan yaylım nişanlarına diqqət et',objBoard:'Top göyərtəsindən keçib kəndirlərə çat',objMain:'Əsas göyərtəyə qalx — qabaqda komanda göyərtəsidir',
 objGuard:'Admiralın mühafizəsi! · dalğa {n}/2',objDuel:'Qara Admiralı məğlub et',objFire:'Gəmi yanır — Qara Admiralı bitir!',objChest:'Admiralın döyüş sandığını götür',
 ambush:'ADMİRALIN MÜHAFİZƏSİ!',wave:'DALĞA {n}',cleared:'Mühafizə qırıldı — komanda göyərtəsi açıqdır!',secretNest:'Sirr: gözətçi səbətindəki xəzinə',
 admiral:'QARA ADMİRAL',phase1:'FAZA 1 · DƏNİZ HÜCUMU',phase2:'FAZA 2 · ADMİRAL DUELİ',phase3:'FAZA 3 · SON DÖYÜŞ',broadside:'YAN YAYLIM',burning:'YANIR',
 intro:'“Deməli, balaca kapitan gəmiyə çıxıb. Qılıncını çək!”',introFire:'“Gəmimlə birlikdə yanacaqsan!”',rage:'Leviafan alovlanır!',parry:'DƏF ETDİ',stunned:'SƏRSƏM',
 yield:'Qara Admiral təslim oldu!',reward:'BOSS MÜKAFATI',rewardSub:'+{n} qızıl · Fırtına Tacı xəritəsi',victory:'QƏLƏBƏ!',tap:'Davam etmək üçün toxun',skip:'KEÇ ▶▶',
 hBroad:'Yan yaylım: qırmızı nişan və fit səsi — hərəkətdə qal, nişandan çıx',hPlank:'Abordaj taxtaları altında qırılır — qaçmağa davam et',
 hMarine:'Qara Dəniz Piyadaları kiçik qalxan qaldırır: düşməsini gözlə, arxadan vur və ya içindən yayın',hGunner:'Göyərtə Atıcıları qırmızı xətt boyunca nişan alır: blokla və ya kənara çəkil, doldurarkən vur',
 hDuel:'Hər hücum açıqlıqla bitir (qızılı qığılcımlar). Qarşıdan müdafiəsinə vurma — dəf edir',hLunge:'Göyərtədə qırmızı xətt: o xətt boyunca atılır. Yayın — məhəccərə dəyib sərsəmləyəcək',
 hFire:'Tüstü onun vuracağı yerə yığılır. Alov dalğasının üstündən tullan. Yanan məhəccərlərdən uzaq dur',
 s2n:'Qara Admiral',s1:'Bitdi, Admiral. Donanman yanır, dəniz piyadaların qaçıb.',s2:'Bitdi? Axmaq… Mən yalnız Fırtına Tacını taxana xidmət edirdim. O, bu dənizdəki hər azad gəminin dalınca gəlir.',
 s3:'Admiralın xəritələri arasında heç bir başqa xəritədə olmayan rifin yolu var — Fırtına Tacı Rifi.',s4:'Onda növbəti kursumuz budur. Yelkənləri qaldırın — yeni dəniz bizi gözləyir!'},
tr:{levelWord:'Bölüm',title:'Bölüm 10 · Kara Amiral',blurb:'BOSS — top ateşi altında Kara Leviathan’a çık, deniz pivadelerini yar ve yanan gemide Kara Amiral’le düello yap',
 ourship:'Bizim Gemi',boarding:'Rampa',maindeck:'Ana Güverte',quarter:'Kıç Güvertesi',
 objOur:'Kara Leviathan’a geç — borda ateşi işaretlerine dikkat',objBoard:'Top güvertesini geçip halatlara ulaş',objMain:'Ana güverteye tırman — kıç güvertesi ileride',
 objGuard:'Amiralin muhafızları! · dalga {n}/2',objDuel:'Kara Amiral’i yen',objFire:'Gemi yanıyor — Kara Amiral’i bitir!',objChest:'Amiralin savaş sandığını al',
 ambush:'AMİRALİN MUHAFIZLARI!',wave:'DALGA {n}',cleared:'Muhafızlar dağıldı — kıç güvertesi açık!',secretNest:'Sır: gözcü sepetindeki zula',
 admiral:'KARA AMİRAL',phase1:'AŞAMA 1 · DENİZ SALDIRISI',phase2:'AŞAMA 2 · AMİRAL DÜELLOSU',phase3:'AŞAMA 3 · SON SAVAŞ',broadside:'BORDA ATEŞİ',burning:'YANIYOR',
 intro:'“Demek küçük kaptan gemiye çıktı. Kılıcını çek!”',introFire:'“Gemimle birlikte yanacaksın!”',rage:'Leviathan alev aldı!',parry:'SAVUŞTURDU',stunned:'SERSEMLEDİ',
 yield:'Kara Amiral teslim oldu!',reward:'BOSS ÖDÜLÜ',rewardSub:'+{n} altın · Fırtına Tacı haritası',victory:'ZAFER!',tap:'Devam için dokun',skip:'GEÇ ▶▶',
 hBroad:'Borda ateşi: kırmızı işaret ve ıslık — hareket et, işaretten çık',hPlank:'Rampa tahtaları altında kırılıyor — koşmaya devam et',
 hMarine:'Kara Piyadeler küçük kalkan kaldırır: inmesini bekle, arkadan vur ya da atılarak geç',hGunner:'Güverte Nişancıları kırmızı çizgiyle nişan alır: blokla ya da çekil, doldururken vur',
 hDuel:'Her saldırı bir açıklıkla biter (altın kıvılcımlar). Önden savunmasına vurma — savuşturur',hLunge:'Güvertede kırmızı çizgi: o çizgi boyunca atılır. Kaç — küpeşteye çarpıp sersemler',
 hFire:'Duman vuracağı yerde toplanır. Alev dalgasının üstünden zıpla. Yanan küpeştelerden uzak dur',
 s2n:'Kara Amiral',s1:'Bitti, Amiral. Filon yanıyor, piyadelerin kaçtı.',s2:'Bitti mi? Aptal… Ben yalnızca Fırtına Tacı’nı takana hizmet ettim. O, bu denizdeki her özgür geminin peşinde.',
 s3:'Amiralin haritaları arasında başka hiçbir haritada olmayan bir resif var — Fırtına Tacı Resifi.',s4:'O zaman rotamız orası. Yelkenleri açın — yeni bir deniz bizi bekliyor!'},
ru:{levelWord:'Уровень',title:'Уровень 10 · Чёрный адмирал',blurb:'БОСС — возьми на абордаж «Чёрного Левиафана» под огнём пушек, прорубись сквозь морпехов и сразись с Чёрным адмиралом на горящем корабле',
 ourship:'Наш корабль',boarding:'Абордаж',maindeck:'Главная палуба',quarter:'Шканцы',
 objOur:'Переберись на «Левиафан» — следи за метками бортового залпа',objBoard:'Пробейся через пушечную палубу к такелажу',objMain:'Поднимись на главную палубу — впереди шканцы',
 objGuard:'Стража Адмирала! · волна {n}/2',objDuel:'Победи Чёрного адмирала',objFire:'Корабль горит — добей Чёрного адмирала!',objChest:'Забери военный сундук Адмирала',
 ambush:'СТРАЖА АДМИРАЛА!',wave:'ВОЛНА {n}',cleared:'Стража разбита — шканцы открыты!',secretNest:'Тайник: запас в вороньем гнезде',
 admiral:'ЧЁРНЫЙ АДМИРАЛ',phase1:'ФАЗА 1 · МОРСКОЙ ШТУРМ',phase2:'ФАЗА 2 · ДУЭЛЬ С АДМИРАЛОМ',phase3:'ФАЗА 3 · ПОСЛЕДНИЙ БОЙ',broadside:'ЗАЛП',burning:'ГОРИТ',
 intro:'«Значит, капитанишка поднялся на борт. Обнажи клинок!»',introFire:'«Ты сгоришь вместе с моим кораблём!»',rage:'«Левиафан» в огне!',parry:'ПАРИРОВАЛ',stunned:'ОГЛУШЁН',
 yield:'Чёрный адмирал сдаётся!',reward:'НАГРАДА ЗА БОССА',rewardSub:'+{n} золота · карта Штормовой Короны',victory:'ПОБЕДА!',tap:'Нажми, чтобы продолжить',skip:'ПРОПУСТИТЬ ▶▶',
 hBroad:'Бортовой залп: красная метка и свист — двигайся, уходи с метки',hPlank:'Абордажные доски ломаются под ногами — не останавливайся',
 hMarine:'Чёрные морпехи поднимают баклер: дождись, пока опустят, бей со спины или проскочи рывком',hGunner:'Палубные стрелки целятся по красной линии: блокируй или отойди и бей, пока перезаряжают',
 hDuel:'Каждая атака заканчивается окном (золотые искры). Не руби его защиту в лоб — он парирует',hLunge:'Красная линия на палубе: он делает выпад по ней. Уклонись — он врежется в борт',
 hFire:'Дым собирается там, где он ударит. Перепрыгни огненную волну. Держись подальше от горящих бортов',
 s2n:'Чёрный адмирал',s1:'Всё кончено, Адмирал. Твой флот горит, твои морпехи бежали.',s2:'Кончено? Глупец… Я лишь служил той, что носит Штормовую Корону. Она придёт за каждым вольным кораблём этого моря.',
 s3:'Среди карт Адмирала есть путь к рифу, которого нет ни на одной другой карте, — к Рифу Штормовой Короны.',s4:'Значит, это наш новый курс. Поднять паруса — нас ждёт новое море!'},
pl:{levelWord:'Poziom',title:'Poziom 10 · Czarny Admirał',blurb:'BOSS — wejdź na pokład Czarnego Lewiatana pod ogniem dział, przebij się przez marines i stocz pojedynek z Czarnym Admirałem na płonącym okręcie',
 ourship:'Nasz Statek',boarding:'Abordaż',maindeck:'Pokład Główny',quarter:'Pokład Rufowy',
 objOur:'Przejdź na Czarnego Lewiatana — uważaj na znaki salwy burtowej',objBoard:'Przebij się przez pokład działowy do olinowania',objMain:'Wespnij się na pokład główny — przed tobą pokład rufowy',
 objGuard:'Straż Admirała! · fala {n}/2',objDuel:'Pokonaj Czarnego Admirała',objFire:'Okręt płonie — dobij Czarnego Admirała!',objChest:'Zabierz skrzynię wojenną Admirała',
 ambush:'STRAŻ ADMIRAŁA!',wave:'FALA {n}',cleared:'Straż rozbita — pokład rufowy otwarty!',secretNest:'Sekret: skrytka w bocianim gnieździe',
 admiral:'CZARNY ADMIRAŁ',phase1:'FAZA 1 · SZTURM MORSKI',phase2:'FAZA 2 · POJEDYNEK',phase3:'FAZA 3 · OSTATNIA BITWA',broadside:'SALWA',burning:'PŁONIE',
 intro:'„A więc mały kapitan wszedł na pokład. Dobądź ostrza!”',introFire:'„Spłoniesz razem z moim okrętem!”',rage:'Lewiatan stanął w ogniu!',parry:'SPAROWAŁ',stunned:'OGŁUSZONY',
 yield:'Czarny Admirał się poddaje!',reward:'NAGRODA ZA BOSSA',rewardSub:'+{n} złota · mapa Korony Burz',victory:'ZWYCIĘSTWO!',tap:'Dotknij, by kontynuować',skip:'POMIŃ ▶▶',
 hBroad:'Salwa burtowa: czerwony znak i gwizd — ruszaj się, zejdź ze znaku',hPlank:'Deski abordażowe łamią się pod tobą — biegnij dalej',
 hMarine:'Czarni Marines unoszą puklerz: poczekaj, aż opuszczą, uderz od tyłu albo przeskocz zrywem',hGunner:'Strzelcy pokładowi celują po czerwonej linii: blokuj lub odsuń się, bij gdy ładują',
 hDuel:'Każdy atak kończy się otwarciem (złote iskry). Nie rąb jego gardy od przodu — paruje',hLunge:'Czerwona linia na pokładzie: po niej wykona wypad. Unikaj — uderzy w reling',
 hFire:'Dym zbiera się tam, gdzie uderzy. Przeskocz falę ognia. Trzymaj się z dala od płonących relingów',
 s2n:'Czarny Admirał',s1:'To koniec, Admirale. Twoja flota płonie, a twoi marines uciekli.',s2:'Koniec? Głupcze… Służyłem tylko tej, która nosi Koronę Burz. Przyjdzie po każdy wolny statek na tym morzu.',
 s3:'Wśród map Admirała jest droga do rafy, której nie ma na żadnej innej mapie — do Rafy Korony Burz.',s4:'Więc to nasz nowy kurs. Podnieść żagle — czeka nas nowe morze!'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k]??k;
function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
const SFX={broadside:'sfx-broadside.ogg',markWhistle:'sfx-markWhistle.ogg',creak:'sfx-creak.ogg',guard:'sfx-guard.ogg',slash:'sfx-slash.ogg',musket:'sfx-musket.ogg',bayonet:'sfx-bayonet.ogg',
 laugh:'sfx-laugh.ogg',admRoar:'sfx-roar.ogg',combo:'sfx-combo.ogg',heavy:'sfx-heavy.ogg',lungeCharge:'sfx-lungeCharge.ogg',lunge:'sfx-lunge.ogg',cock:'sfx-cock.ogg',pistolShot:'sfx-pistol.ogg',
 vanish:'sfx-vanish.ogg',appear:'sfx-appear.ogg',barrage:'sfx-barrage.ogg',fireWave:'sfx-fireWave.ogg',admiralFall:'sfx-admiralFall.ogg',mastFall:'sfx-mastFall.ogg',ignite:'sfx-ignite.ogg',reward:'sfx-reward.ogg',
 battleAmb:'amb-battle.ogg',fireAmb:'amb-fire.ogg'};
const MUSIC={warship:'warship.ogg',admiral:'admiral.ogg',inferno:'inferno.ogg',battle:'cove-battle.ogg',triumph:'triumph.ogg'};

/* ------------------------------------------------------------------ the Admiral's crew (engine enemy kit) */
Object.assign(E.ENEMY,{
 marine:{hp:92,w:42,h:98,speed:50,chase:112,sight:400,gold:6,flesh:true,name:{en:'Black Marine',az:'Qara Dəniz Piyadası',tr:'Kara Piyade',ru:'Чёрный морпех',pl:'Czarny Marine'}},
 deckgunner:{hp:64,w:40,h:94,speed:42,chase:0,sight:640,gold:6,flesh:true,name:{en:'Deck Gunner',az:'Göyərtə Atıcısı',tr:'Güverte Nişancısı',ru:'Палубный стрелок',pl:'Strzelec pokładowy'}}});
const P=E.Enemy.prototype;
const lohi=e=>[e.range[0]-e.w/2,e.range[1]-e.w/2];
if(!P.__smugglers&&!P.__rise){P.__rise=true;   // drop-in spawn for encounter waves (shared with Levels 4–9 when loaded)
 const bu=P.update,bd=P.damage;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return bu.call(this,dt)};
 P.damage=function(a,d,k){if(this.dead||this.spawnT>0)return'none';return bd.call(this,a,d,k)}}
if(!P.__admiral){P.__admiral=true;
 const bd=P.damage;
 P.damage=function(amount,dir,kind){
  const run=this.run,st=this.state;if(this.dead||this.spawnT>0)return'none';
  // the marine's buckler stops blows from the front while raised; a dash goes through it
  if(this.type==='marine'&&st==='guard'&&kind!=='dash'){const front=(dir<0&&this.dir>0)||(dir>0&&this.dir<0);
   if(front){this.parried=true;this.flash=.06;this.kb=dir*40;run.fx.spark(this.cx+this.dir*22,this.y+40,'#ffd88a',10);run.fx.text(run.t('blocked'),this.cx,this.y-6,'#cfe3ff');run.audio.at('guard',this.cx,{vol:.8,rate:.95+Math.random()*.1});run.hitStop(.03);return'blocked'}}
  if(this.type==='marine'&&(st==='riposte'||st==='recover'))amount=Math.round(amount*1.2);
  if(this.type==='deckgunner'&&st==='reload')amount=Math.round(amount*1.25);
  const r=bd.call(this,amount,dir,kind);if(r!=='hit'||this.dead)return r;
  if(this.type==='marine'){this.kb*=.5;if(['cutWind','cut1','cut2Wind','cut2','riposteWind'].includes(st))this.hurtT=0}
  if(this.type==='deckgunner'&&(st==='aim'||st==='bayonetWind')){this.state='recover';this.timer=.5;this.aim=null;this.locked=false}
  return r};
 P.marine=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx),hb=(w,dmg,kn)=>{const box={x:this.dir>0?this.cx:this.cx-w,y:this.y+10,w,h:this.h-14};if(overlap(box,p))run.hurtPlayer(dmg,this.dir,this,kn)};
  switch(this.state){
   case'cutWind':this.setAnim('cutWind');this.timer-=dt;if(this.timer<=0){this.state='cut1';this.timer=.18;this.hitDone=false;run.audio.at('slash',this.cx,{vol:.8})}return;
   case'cut1':this.setAnim('cut1');this.timer-=dt;if(!this.hitDone&&this.timer<.12){this.hitDone=true;hb(70,12,180)}if(this.timer<=0){this.state='cut2Wind';this.timer=.24}return;
   case'cut2Wind':this.setAnim('cut2Wind');this.timer-=dt;if(this.timer<=0){this.state='cut2';this.timer=.2;this.hitDone=false;run.audio.at('slash',this.cx,{vol:.9,rate:.85})}return;
   case'cut2':{this.setAnim('cut2');this.timer-=dt;const[lo,hi]=lohi(this);this.x=clamp(this.x+this.dir*120*dt,lo,hi);if(!this.hitDone&&this.timer<.14){this.hitDone=true;hb(80,15,260)}if(this.timer<=0){this.state='recover';this.timer=.7}return}
   case'guard':this.setAnim('guard');this.timer-=dt;this.face(p);if(this.timer<=0){if(this.parried){this.parried=false;this.state='riposteWind';this.timer=.32;run.audio.at('guard',this.cx,{vol:.5,rate:1.3})}else{this.state='idle';this.cool=.3}}return;
   case'riposteWind':this.setAnim('riposteWind');this.timer-=dt;if(this.timer<=0){this.state='riposte';this.timer=.18;this.hitDone=false;run.audio.at('slash',this.cx,{vol:.9,rate:1.2})}return;
   case'riposte':{this.setAnim('riposte');this.timer-=dt;const[lo,hi]=lohi(this);this.x=clamp(this.x+this.dir*260*dt,lo,hi);if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-84,y:this.y+20,w:84,h:this.h-40};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(14,this.dir,this,240)}}if(this.timer<=0){this.state='recover';this.timer=.75}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.45}return}
  if(near&&this.alert){this.face(p);
   const facing=(p.x+p.w/2<this.cx)===(this.dir<0);
   // raises the buckler when the hero swings at him from the front
   if(d<130&&Math.abs(dy)<60&&p.attack>0&&p.dir===-this.dir&&facing&&(this.guardCool??0)<=run.time){this.state='guard';this.timer=.75;this.parried=false;this.guardCool=run.time+2.4;run.audio.at('guard',this.cx,{vol:.4,rate:.8});return}
   if(d<88&&Math.abs(dy)<60&&this.cool<=0){this.state='cutWind';this.timer=.42;return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*66,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
 P.deckgunner=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx);
  switch(this.state){
   case'aim':this.setAnim('aim');this.timer-=dt;this.face(p);if(this.timer>.3){this.aim={x:p.x+p.w/2,y:p.y+p.h*.45};this.locked=false}else this.locked=true;
    if(this.timer<=0){run.def.musket(run,this);this.state='kick';this.timer=.24;this.locked=false}return;
   case'kick':this.setAnim('kick');this.timer-=dt;if(this.timer<=0){this.state='reload';this.timer=1.6;this.aim=null;run.audio.at('cock',this.cx,{vol:.6,rate:.8})}return;
   case'reload':this.setAnim('reload');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5;run.audio.at('cock',this.cx,{vol:.8})}return;
   case'bayonetWind':this.setAnim('bayonetWind');this.timer-=dt;if(this.timer<=0){this.state='bayonet';this.timer=.26;this.hitDone=false;run.audio.at('bayonet',this.cx,{vol:.9})}return;
   case'bayonet':{this.setAnim('bayonet');this.timer-=dt;const[lo,hi]=lohi(this);this.x=clamp(this.x+this.dir*300*dt,lo,hi);if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-86,y:this.y+24,w:86,h:30};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(14,this.dir,this,280)}}if(this.timer<=0){this.state='recover';this.timer=.65}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  this.setAnim('idle');
  if(near&&this.alert){this.face(p);
   if(d<100&&Math.abs(dy)<60&&this.cool<=0){this.state='bayonetWind';this.timer=.45;return}
   if(d<180&&Math.abs(dy)<70)this.walkTo(this.cx-Math.sign(dx)*70,this.def.speed,dt);this.face(p);
   if(this.cool<=0&&d>=140&&d<600&&Math.abs(dy)<200){this.state='aim';this.timer=1.0;this.locked=false;this.aim={x:p.x+p.w/2,y:p.y+p.h*.45};run.audio.at('cock',this.cx,{vol:.9})}}
  else this.patrol(dt)};
}

/* ------------------------------------------------------------------ articulated rigs (original vector art) */
const mixCache=new Map();
function mixHex(a,b,k){const key=a+b+k;let v=mixCache.get(key);if(v)return v;if(!a.startsWith('#'))return a;const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);const ch=s=>[(s>>16)&255,(s>>8)&255,s&255];const A_=ch(pa),B_=ch(pb);v='rgb('+A_.map((x,i)=>Math.round(x+(B_[i]-x)*k)).join(',')+')';mixCache.set(key,v);return v}
const LOOK={
 // tall shako, short black coat with white cross-belts, a round buckler and a cutlass
 marine:{hip:46,thigh:24,shin:24,torso:40,lean:.1,head:11,shoulder:19,arm:[18,17],legW:10,armW:8,cadence:7.5,stride:.55,scale:1.42,
  pal:{skin:'#d8ae88',coat:'#2a2f3c',coatD:'#1a1e28',hat:'#14161c',band:'#e8e2d2',trouser:'#e2dccb',boot:'#16140f',metal:'#cfd6dd',eye:'#ffcf6b',brass:'#d9b25a'}},
 // long coat, tricorn with a red cockade, a long musket with a bayonet; crouches to aim
 deckgunner:{hip:42,thigh:22,shin:22,torso:38,lean:.16,head:11,shoulder:17,arm:[18,17],legW:10,armW:8,cadence:6.5,stride:.45,scale:1.42,
  pal:{skin:'#c99a74',coat:'#3a2a24',coatD:'#261a16',hat:'#1c1a18',band:'#b8282a',trouser:'#4a4238',boot:'#1e1812',metal:'#a8b0b8',eye:'#ffd36b',brass:'#c9a24a'}}};
for(const k in LOOK){const pl=LOOK[k].pal,fl={};for(const c in pl)fl[c]=mixHex(pl[c],'#ffffff',.78);LOOK[k].flashPal=fl}
function limb(c,x0,y0,a1,l1,a2,l2,w,col,boot){
 const kx=x0+Math.sin(a1)*l1,ky=y0+Math.cos(a1)*l1,fx=kx+Math.sin(a2)*l2,fy=ky+Math.cos(a2)*l2;
 c.strokeStyle='#0b0d12';c.lineWidth=w+3;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 c.strokeStyle=col;c.lineWidth=w;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 if(boot){c.fillStyle=boot;c.strokeStyle='#0b0d12';c.lineWidth=1.5;c.beginPath();c.ellipse(fx+w*.45,fy-1,w*.95,w*.55,0,0,TAU);c.fill();c.stroke()}
 return{kx,ky,fx,fy}}
function arm(c,x0,y0,a1,l1,a2,l2,w,col,skin){const r=limb(c,x0,y0,a1,l1,a2,l2,w,col);c.fillStyle=skin;c.beginPath();c.arc(r.fx,r.fy,w*.62,0,TAU);c.fill();return r}
function pose(e,R,run){
 const st=e.state,t=e.animT,o={lean:R.lean,bob:0,l1:.06,k1:.12,l2:-.08,k2:.1,f1:.3,f2:-.6,b1:.2,b2:-.5,crouch:0,glow:0};
 const moving=e.anim==='walk'&&!e.dead&&!(e.hurtT>0);
 if(moving){const ph=t*R.cadence*(e.alert?1.3:1),s=Math.sin(ph);
  o.l1=s*R.stride;o.l2=-s*R.stride;o.k1=Math.max(0,Math.cos(ph))*.9+.05;o.k2=Math.max(0,-Math.cos(ph))*.9+.05;o.bob=-Math.abs(Math.cos(ph))*2.4;o.f1+=-s*.35;o.b1+=s*.35}
 else{const br=Math.sin(run.time*2.2+(e.home||0))*.04;o.f1+=br;o.bob=Math.sin(run.time*2.2+(e.home||0))*.8}
 const k=T=>clamp(1-e.timer/T,0,1);
 if(e.type==='marine'){
  if(st==='cutWind'){const q=k(.42);o.f1=.3-2.4*q;o.f2=-.5;o.lean=R.lean-.2*q;o.glow=q}
  else if(st==='cut1'){o.f1=1.3;o.f2=0;o.lean=R.lean+.2;o.l1=.35;o.l2=-.3}
  else if(st==='cut2Wind'){const q=k(.24);o.f1=1.3-2.8*q;o.f2=.2;o.lean=R.lean-.15;o.glow=q}
  else if(st==='cut2'){o.f1=1.6;o.f2=.3;o.lean=R.lean+.35;o.l1=.55;o.l2=-.45;o.k2=.5}
  else if(st==='guard'){o.b1=1.25;o.b2=.3;o.f1=-.2;o.f2=-1.2;o.lean=-.05;o.l1=.3;o.l2=-.35;o.crouch=.12}
  else if(st==='riposteWind'){const q=k(.32);o.b1=1.1;o.f1=-.4-.6*q;o.f2=-.4;o.lean=-.12;o.glow=q;o.crouch=.15}
  else if(st==='riposte'){o.f1=1.55;o.f2=.05;o.b1=.4;o.lean=.38;o.l1=.6;o.l2=-.5}}
 else if(e.type==='deckgunner'){
  if(st==='aim'){o.f1=1.5;o.f2=0;o.b1=1.35;o.b2=.15;o.lean=.02;o.l1=.5;o.k1=.7;o.l2=-.4;o.crouch=.22;o.glow=e.locked?1:.4}
  else if(st==='kick'){o.f1=1.75;o.f2=.3;o.b1=1.55;o.b2=.35;o.lean=-.22;o.l1=.5;o.k1=.6;o.l2=-.4;o.crouch=.18}
  else if(st==='reload'){const w=Math.sin(run.time*9);o.f1=.6;o.f2=.2;o.b1=-.2+w*.5;o.b2=-1.2+w*.4;o.lean=.1}
  else if(st==='bayonetWind'){const q=k(.45);o.f1=1.4;o.f2=0;o.b1=1.3;o.lean=-.2*q;o.glow=q;o.crouch=.15*q}
  else if(st==='bayonet'){o.f1=1.6;o.f2=0;o.b1=1.45;o.lean=.45;o.l1=.7;o.l2=-.55;o.k2=.5}
  else{o.f1=.7;o.f2=-.8;o.b1=.4;o.b2=-.6}}
 if(e.hurtT>0&&!e.dead){o.lean=-.32;o.f1=-.9;o.b1=-1.2;o.f2=-.6;o.l1=.25;o.l2=-.15}
 return o}
/* painted cut-out cast (tools/enemy_cast.py → assets/enemies/level10, posed by enemy-rig.js); the vector rig below
 * stays as the fallback and still provides the telegraph timing (pose().glow) */
const RIG={
 marine:{cast:'level10',char:'marine',grip:.15,uprightB:true,windArm:-2.6,swingArm:1.4,fam:{cutWind:'wind',cut1:'swing',cut2Wind:'wind',cut2:'swing',guard:'guard',riposteWind:'lungeWind',riposte:'thrust'},stars:e=>e.state==='recover'},
 deckgunner:{cast:'level10',char:'deckgunner',weapon:'gun',twoHand:true,fam:{aim:'aim',kick:'fire',reload:'reload',bayonetWind:'lungeWind',bayonet:'thrust'},stars:e=>e.state==='recover'}};
async function loadRig(run,cast){
 if(!window.PirateEnemyRig)await new Promise(ok=>{const s=document.createElement('script');s.src=BASE+'enemy-rig.js';s.onload=s.onerror=ok;document.head.append(s)});
 run.rigCast=await window.PirateEnemyRig?.ready(BASE,cast).catch(()=>null);if(!run.rigCast)run.warn?.('enemy cast '+cast+' not loaded — vector fallback')}
function drawRigFoe(run,c,e){
 const R=RIG[e.type],Rig=window.PirateEnemyRig,V=LOOK[e.type];if(!R||!V||!run.rigCast||!Rig)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.9)/.6,0,1):1;if(alpha<=0)return true;const st=e.state;
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,pose(e,V,run));
 c.save();c.globalAlpha=alpha;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 const o=Rig.draw(run,c,e,R);
 if(o&&!e.dead){
  if(e.type==='marine'&&(st==='guard'||st==='riposteWind'))run.fx.glow(c,o.handB[0],o.handB[1],26,'rgba(255,220,140,',.35);
  if(e.type==='deckgunner'&&st==='aim'&&e.locked)run.fx.glow(c,o.muzzle[0],o.muzzle[1],20,'rgba(255,80,50,',.7);
  Rig.hud(c,run,e,o,R);
  if(e.type==='deckgunner'&&st==='reload'){const k=1-e.timer/1.6,by=o.top-28;c.fillStyle='rgba(10,18,32,.8)';c.beginPath();c.roundRect(e.cx-22,by,44,12,5);c.fill();c.fillStyle='#ffd38a';c.fillRect(e.cx-20,by+2,40*k,8)}}
 c.restore();c.imageSmoothingEnabled=false;return true}
function drawFoe(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const R=LOOK[e.type];if(!R)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.65)/.6,0,1):1;if(alpha<=0)return true;
 const flash=e.flash>0,pal=flash?R.flashPal:R.pal,o=pose(e,R,run),st=e.state;
 const fx=Math.round(e.cx),fy=e.floor;let dy=0,rot=0;
 if(e.spawnT>0)dy=-e.spawnT*420;
 if(e.dead)rot=-Math.min(1.4,e.deadT*3.4);
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,o);
 c.save();c.globalAlpha=alpha;
 c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(fx,fy+1,R.shoulder+16,5,0,0,TAU);c.fill();
 c.translate(fx,fy+dy);if(e.dir<0)c.scale(-1,1);c.scale(R.scale,R.scale);if(rot){c.translate(-R.hip*.4,0);c.rotate(rot);c.translate(R.hip*.4,0)}
 c.lineCap='round';c.lineJoin='round';
 const hipY=-(R.thigh+R.shin)*(1-o.crouch*.35)+o.bob,hipX=0;
 limb(c,hipX-3,hipY,o.l2,R.thigh,o.l2-o.k2,R.shin,R.legW,mixHex(pal.trouser,'#000000',.25),pal.boot);
 const lean=o.lean,sx=hipX+Math.sin(lean)*R.torso,sy=hipY-Math.cos(lean)*R.torso;
 armAndWeapon(run,c,e,R,pal,o,sx-3,sy+2,true);
 torso(c,e,R,pal,o,hipX,hipY,run);
 head(c,e,R,pal,o,sx,sy,lean,run);
 limb(c,hipX+3,hipY,o.l1,R.thigh,o.l1-o.k1,R.shin,R.legW,pal.trouser,pal.boot);
 if(e.type==='deckgunner')coat(c,e,R,pal,o,hipX,hipY);
 armAndWeapon(run,c,e,R,pal,o,sx+2,sy+3,false);
 c.restore();
 const top=e.floor-(R.hip+R.torso+R.head*2.6)*R.scale;
 if(st==='recover'&&!e.dead)for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,top-14+Math.sin(a)*4,4,4)}
 if(e.type==='deckgunner'&&st==='reload'&&!e.dead){const k=1-e.timer/1.6,by=top-28;c.save();c.fillStyle='rgba(10,18,32,.8)';c.beginPath();c.roundRect(e.cx-22,by,44,12,5);c.fill();c.fillStyle='#ffd38a';c.fillRect(e.cx-20,by+2,40*k,8);c.restore()}
 if(!e.dead&&e.hp<e.max&&!(e.spawnT>0)){const w=44,by=top-12;c.fillStyle='#0b0f18cc';c.fillRect(e.cx-w/2,by,w,6);c.fillStyle='#e8484f';c.fillRect(e.cx-w/2+1,by+1,(w-2)*e.hp/e.max,4)}
 return true}
function torso(c,e,R,pal,o,hx,hy,run){
 const w=R.shoulder,T=R.torso;c.save();c.translate(hx,hy);c.rotate(o.lean);c.strokeStyle='#0b0d12';c.lineWidth=2;
 if(e.type==='marine'){// short black coat, white cross-belts with a brass plate, epaulettes
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.8,6);c.lineTo(-w*.9,-T*.95);c.quadraticCurveTo(0,-T*1.08,w*.9,-T*.95);c.lineTo(w*.8,6);c.closePath();c.fill();c.stroke();
  c.strokeStyle=pal.band;c.lineWidth=4;c.beginPath();c.moveTo(-w*.75,-T*.92);c.lineTo(w*.6,-T*.05);c.moveTo(w*.75,-T*.92);c.lineTo(-w*.6,-T*.05);c.stroke();
  c.fillStyle=pal.brass;c.beginPath();c.arc(0,-T*.5,3.6,0,TAU);c.fill();c.fillRect(-w*.95,-T*1.0,w*.5,4);c.fillRect(w*.45,-T*1.0,w*.5,4);
  c.fillStyle=pal.coatD;c.fillRect(-w*.8,-2,w*1.6,6)}
 else{// long coat body with a powder horn and a bandolier of cartridges
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.85,4);c.quadraticCurveTo(-w*1.05,-T*.6,-w*.9,-T);c.lineTo(w*.9,-T);c.quadraticCurveTo(w*1.05,-T*.55,w*.85,4);c.closePath();c.fill();c.stroke();
  c.strokeStyle='#5a3a20';c.lineWidth=4;c.beginPath();c.moveTo(-w*.8,-T*.9);c.lineTo(w*.7,-T*.15);c.stroke();c.fillStyle='#b9a27a';for(let i=0;i<4;i++)c.fillRect(-w*.5+i*w*.32,-T*.7+i*T*.17,4,6);
  c.fillStyle='#d8c8a0';c.beginPath();c.moveTo(w*.5,-T*.25);c.quadraticCurveTo(w*1.1,-T*.1,w*.9,T*.1);c.lineTo(w*.6,-T*.05);c.closePath();c.fill()}
 c.restore()}
function coat(c,e,R,pal,o,hx,hy){const w=R.shoulder*.95,len=R.thigh*1.05,sw=e.anim==='walk'?Math.sin(e.animT*R.cadence)*.06:0;c.save();c.translate(hx,hy-2);c.rotate(o.lean*.4);c.fillStyle=pal.coatD;c.strokeStyle='#0b0d12';c.lineWidth=1.8;
 c.beginPath();c.moveTo(-w,0);c.lineTo(-w-5+sw*30,len);c.lineTo(w+3-sw*30,len);c.lineTo(w,0);c.closePath();c.fill();c.stroke();c.restore()}
function head(c,e,R,pal,o,sx,sy,lean,run){
 const r=R.head,hx=sx+Math.sin(lean)*r*.9,hy=sy-Math.cos(lean)*r*.9-2;
 c.save();c.translate(hx,hy);c.rotate(lean*.6+(e.hurtT>0?-.25:0));c.strokeStyle='#0b0d12';c.lineWidth=2;
 c.fillStyle=pal.skin;c.beginPath();c.ellipse(1,0,r*.88,r,0,0,TAU);c.fill();c.stroke();
 c.fillStyle=pal.eye;c.beginPath();c.arc(r*.45,-r*.15,1.9,0,TAU);c.fill();
 if(e.type==='marine'){// tall shako with a brass plate and a short plume — the tallest silhouette on the deck
  c.fillStyle='#2a1c14';c.fillRect(r*.05,r*.35,r*.75,2.5);
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*.95,-r*.55);c.lineTo(-r*.8,-r*2.6);c.lineTo(r*.95,-r*2.4);c.lineTo(r*1.0,-r*.55);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.brass;c.beginPath();c.moveTo(r*.05,-r*.8);c.lineTo(r*.45,-r*1.6);c.lineTo(r*.85,-r*.8);c.closePath();c.fill();c.fillRect(-r*1.05,-r*.7,r*2.2,3);
  c.fillStyle='#b8282a';c.beginPath();c.ellipse(-r*.2,-r*2.8,r*.3,r*.55,-.2,0,TAU);c.fill();
  c.fillStyle='#14161c';c.fillRect(r*.2,-r*.62,r*1.15,3)}
 else{// tricorn with a red cockade, a stubble jaw and a scarf over the mouth
  c.fillStyle=pal.band;c.fillRect(-r*.2,r*.15,r*1.15,r*.55);
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*1.5,-r*.5);c.quadraticCurveTo(0,-r*2.1,r*1.6,-r*.5);c.quadraticCurveTo(0,-r*1.0,-r*1.5,-r*.5);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.band;c.beginPath();c.arc(r*.9,-r*.9,3,0,TAU);c.fill()}
 c.restore()}
function armAndWeapon(run,c,e,R,pal,o,x,y,back){
 const col=back?pal.coatD:pal.coat,[u,f]=R.arm,a1=back?o.b1:o.f1,a2=back?o.b2:o.f2;
 const r=arm(c,x,y,a1,u,a1+a2,f,R.armW,col,pal.skin);const ha=a1+a2;
 c.save();c.translate(r.fx,r.fy);
 if(e.type==='marine'){
  if(back){// round buckler with a brass boss
   c.rotate(-ha+Math.PI/2);const up=e.state==='guard'||e.state==='riposteWind';c.fillStyle=up?'#4a4f5c':'#3a3f4a';c.strokeStyle=pal.brass;c.lineWidth=2.5;c.beginPath();c.arc(4,0,up?15:13,0,TAU);c.fill();c.stroke();c.fillStyle=pal.brass;c.beginPath();c.arc(4,0,4,0,TAU);c.fill();
   if(up)run.fx.glow(c,4,0,26,'rgba(255,220,140,',.35)}
  else{// cutlass
   c.rotate(-ha+Math.PI/2);c.fillStyle=pal.brass;c.fillRect(-3,-5,5,10);c.fillStyle=pal.metal;c.strokeStyle='#0b0d12';c.lineWidth=1.2;c.beginPath();c.moveTo(2,-2.5);c.quadraticCurveTo(26,-6,40,1);c.lineTo(2,2.5);c.closePath();c.fill();c.stroke();
   if(o.glow>0)run.fx.glow(c,30,0,20+16*o.glow,'rgba(255,90,60,',.35+.4*o.glow)}}
 else if(!back){// long musket with a bayonet
  c.rotate(-ha+Math.PI/2);c.fillStyle='#4a2c16';c.fillRect(-20,-4,26,8);c.fillStyle='#5d6670';c.fillRect(4,-3,52,5);c.fillStyle=pal.metal;c.beginPath();c.moveTo(56,-2);c.lineTo(76,-.5);c.lineTo(56,1.5);c.closePath();c.fill();
  if(e.state==='aim'&&e.locked)run.fx.glow(c,58,0,20,'rgba(255,80,50,',.7);if(o.glow>0&&e.state==='bayonetWind')run.fx.glow(c,70,0,22,'rgba(255,90,60,',.4+.4*o.glow)}
 c.restore()}
function telegraph(run,c,e,o){
 const st=e.state;
 if(e.type==='marine'){
  if(st==='cutWind'||st==='cut2Wind')run.fx.glow(c,e.cx+e.dir*26,e.y+e.h*.3,44,'rgba(255,90,60,',.35+.4*o.glow);
  if(st==='riposteWind'){const q=o.glow;c.save();c.strokeStyle='rgba(255,90,60,'+(.4+.5*q)+')';c.lineWidth=3;c.beginPath();c.moveTo(e.cx,e.y+e.h*.5);c.lineTo(e.cx+e.dir*110,e.y+e.h*.5);c.stroke();c.restore();c.save();c.font='900 22px Arial';c.textAlign='center';c.fillStyle='rgba(255,120,90,'+(.5+.5*q)+')';c.fillText('!',e.cx,e.y-30);c.restore()}}
 else{
  if(st==='aim'&&e.aim){const sx=e.cx+e.dir*58,sy=e.y+e.h*.36;c.save();c.strokeStyle=e.locked?'rgba(255,60,40,.85)':'rgba(255,190,110,.45)';c.lineWidth=e.locked?2.5:2;c.setLineDash(e.locked?[]:[8,8]);c.beginPath();c.moveTo(sx,sy);const a=aimClamp(e,Math.atan2(e.aim.y-sy,e.aim.x-sx));c.lineTo(sx+Math.cos(a)*640,sy+Math.sin(a)*640);c.stroke();c.restore()}
  if(st==='bayonetWind'){const q=o.glow;c.save();c.fillStyle='rgba(255,70,40,'+(.08+.2*q)+')';c.fillRect(e.dir>0?e.cx:e.cx-170,e.floor-10,170,10);c.restore()}}}
function aimClamp(e,a){const base=e.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.45,.45);return base+rel}

/* ------------------------------------------------------------------ procedural textures (built once per run) */
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function planks(R,base,lite,dark){const c=canvas(256,256),x=c.getContext('2d');x.fillStyle=base;x.fillRect(0,0,256,256);
 for(let y=0;y<256;y+=22){x.fillStyle=((y/22)|0)%2?lite:base;x.fillRect(0,y,256,20);x.fillStyle='rgba(0,0,0,.4)';x.fillRect(0,y+20,256,2);const off=R()*200;x.fillRect(off,y,2,20);x.fillRect((off+128)%256,y,2,20);
  for(let k=0;k<3;k++){x.fillStyle=dark;x.fillRect(R()*256,y+5+R()*10,30+R()*50,1.5)}x.fillStyle='rgba(255,255,255,.05)';x.fillRect(0,y,256,2)}
 for(let i=0;i<14;i++){x.fillStyle='#1a120c';x.beginPath();x.arc(R()*256,R()*256,1.6,0,TAU);x.fill()}return c}
function makeTextures(){
 const T={},R=rng(1010);
 T.ourdeck=planks(R,'#7a5534','#86603b','rgba(40,24,12,.5)');
 T.deck=planks(R,'#3c2c24','#45332a','rgba(10,6,4,.55)');
 let c=canvas(256,256),x=c.getContext('2d');x.fillStyle='#231a16';x.fillRect(0,0,256,256);for(let y=0;y<256;y+=32){x.fillStyle=((y/32)|0)%2?'#2b201a':'#251c17';x.fillRect(0,y,256,30)}
 x.fillStyle='#c9a24a';for(let y=16;y<256;y+=64)for(let k=0;k<256;k+=64){x.fillRect(k+10,y-2,44,3)}x.fillStyle='rgba(255,200,120,.2)';x.fillRect(60,60,30,40);x.fillRect(170,60,30,40);T.cabin=c;
 c=canvas(256,256);x=c.getContext('2d');let g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#1c1512');g.addColorStop(1,'#0d0907');x.fillStyle=g;x.fillRect(0,0,256,256);
 for(let y=0;y<256;y+=28){x.fillStyle='rgba(255,255,255,.04)';x.fillRect(0,y,256,2);x.fillStyle='rgba(0,0,0,.4)';x.fillRect(0,y+26,256,2)}T.hull=c;
 return T}
function pat(run,c,name){run.pats??=new Map();let m=run.pats.get(c);if(!m){m={};run.pats.set(c,m)}return m[name]??=c.createPattern(run.tex[name],'repeat')}
function paintSolid(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L),x1=Math.min(s.x+s.w,R),y0=Math.max(s.y,T),y1=Math.min(s.y+s.h,B);if(x1<=x0||y1<=y0)return true;
 const st=s.style;c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();
 if(st==='cabin'){c.fillStyle=pat(run,c,'cabin');c.fillRect(x0,y0,x1-x0,y1-y0)}
 else{// a deck: planks on top, the dark hull below
  c.fillStyle=pat(run,c,st==='ourdeck'?'ourdeck':'deck');c.fillRect(x0,y0,x1-x0,Math.min(y1,s.y+26)-y0);if(y1>s.y+26){c.fillStyle=pat(run,c,'hull');c.fillRect(x0,Math.max(y0,s.y+26),x1-x0,y1-Math.max(y0,s.y+26))}
  const g=c.createLinearGradient(0,s.y+26,0,s.y+340);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(2,4,10,.75)');c.fillStyle=g;c.fillRect(x0,Math.max(y0,s.y+26),x1-x0,y1-Math.max(y0,s.y+26))}
 c.restore();
 if(st!=='cabin'){c.fillStyle=st==='ourdeck'?'#a07a4c':'#5a4636';c.fillRect(s.x,s.y,s.w,3);c.fillStyle='#120c08';c.fillRect(s.x,s.y+24,s.w,4);
  // gun ports along the hull side, glowing with lantern light
  if(s.h>300&&st==='deck'){for(let x=s.x+80;x<s.x+s.w-40;x+=180){if(x<L-40||x>R+40)continue;c.fillStyle='#0a0705';c.fillRect(x,s.y+60,34,26);c.fillStyle='rgba(255,170,80,.22)';c.fillRect(x+3,s.y+63,28,20)}}}
 c.fillStyle='rgba(0,0,0,.3)';c.fillRect(s.x+s.w-4,s.y+6,4,Math.min(s.h,220));
 return true}
function paintLedge(run,c,l){
 if(l.look==='rope'){// a yard spar with a rope net
  c.fillStyle='rgba(0,0,0,.3)';c.fillRect(l.x+4,l.y+14,l.w-8,5);c.fillStyle='#4a3424';c.beginPath();c.roundRect(l.x,l.y,l.w,12,6);c.fill();c.fillStyle='#6a4c32';c.fillRect(l.x+2,l.y+1,l.w-4,3);
  c.strokeStyle='rgba(190,160,110,.7)';c.lineWidth=1.5;c.beginPath();for(let x=l.x+8;x<l.x+l.w;x+=16){c.moveTo(x,l.y+12);c.lineTo(x+8,l.y+44);c.moveTo(x+16,l.y+12);c.lineTo(x+8,l.y+44)}c.stroke();return true}
 for(let x=l.x;x<l.x+l.w;x+=24){c.fillStyle=((x/24)|0)%2?'#5a4029':'#4c3522';c.fillRect(x,l.y,Math.min(23,l.x+l.w-x),12)}c.fillStyle='#2a1c10';c.fillRect(l.x,l.y+12,l.w,4);return true}
function drawCrumble(run,c,b){const sh=b.state==='shake'?(Math.random()-.5)*4:0;c.save();c.translate(sh,0);c.fillStyle=b.state==='shake'?'#8a6038':'#6e4c2c';c.fillRect(b.x+2,b.y,b.w-4,12);c.fillStyle='#a07a4c';c.fillRect(b.x+2,b.y,b.w-4,3);c.fillStyle='#2a1c10';c.fillRect(b.x+2,b.y+12,b.w-4,3);
 c.strokeStyle='#8b7350';c.lineWidth=2;c.beginPath();c.moveTo(b.x,b.y-34);c.lineTo(b.x+b.w,b.y-34);c.stroke();c.beginPath();c.moveTo(b.x+4,b.y-34);c.lineTo(b.x+4,b.y);c.stroke();if(b.state==='shake'){c.strokeStyle='rgba(0,0,0,.6)';c.beginPath();c.moveTo(b.x+16,b.y+2);c.lineTo(b.x+30,b.y+10);c.stroke()}c.restore()}

/* ------------------------------------------------------------------ backdrop: night sea battle, burning ships, the escort ship */
function makeBack(run){
 const R=rng(1001),B={};
 B.stars=Array.from({length:80},()=>[R(),R()*.4,.3+R()*.5,R()*6]);
 B.fleet=canvas(1200,220);let x=B.fleet.getContext('2d');
 for(const [sx,h,burn] of[[100,150,1],[380,120,0],[640,170,1],[930,140,0]]){x.fillStyle='#0b0f18';x.beginPath();x.moveTo(sx-90,210);x.quadraticCurveTo(sx-100,180,sx-60,170);x.lineTo(sx+70,174);x.quadraticCurveTo(sx+100,190,sx+90,210);x.fill();x.fillRect(sx-3,210-h,6,h-36);x.fillRect(sx+36,200-h*.75,5,h*.6);x.fillRect(sx-46,220-h*.85,92,4);
  if(burn){const g=x.createRadialGradient(sx,170,4,sx,170,90);g.addColorStop(0,'rgba(255,150,60,.6)');g.addColorStop(1,'rgba(255,90,30,0)');x.fillStyle=g;x.fillRect(sx-100,80,200,140)}}
 return B}
/* painted far plate (Higgsfield, see ASSET_MANIFEST): mirrored tiles with slow parallax; false when the image is missing */
function drawPlate(run,c,src,cam){const im=run.images[src];if(!im)return false;const W=E.W,ph=H*1.08,pw=im.width*ph/im.height,py=H-ph+16-(cam.y-300)*.08,ox=-((cam.x*.15)%(pw*2));for(let k=-1;k<4;k++){const x=ox+k*pw;if(x>W||x+pw<0)continue;if(k%2){c.save();c.translate(x+pw,py);c.scale(-1,1);c.drawImage(im,0,0,pw,ph);c.restore()}else c.drawImage(im,x,py,pw,ph)}return true}
function drawBackground(run,c){
 const W=E.W,cam=run.camera,t=run.time,B=run.back,fk=run.fireK||0;
 if(!run.sky||run.skyW!==W){run.skyW=W;run.sky=canvas(W,H);const x=run.sky.getContext('2d'),g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#05070e');g.addColorStop(.55,'#161a2a');g.addColorStop(.82,'#3a2a2a');g.addColorStop(1,'#1a1418');x.fillStyle=g;x.fillRect(0,0,W,H)}
 c.drawImage(run.sky,0,0);
const painted=drawPlate(run,c,BASE+'assets/painted/level10-fleet.webp',cam); if(fk>0){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(60,10,6,'+(.5*fk)+')');g.addColorStop(1,'rgba(160,50,16,'+(.35*fk)+')');c.fillStyle=g;c.fillRect(0,0,W,H)}
 const py=clamp((cam.y-300)*.05,-20,40);
 if(!painted){for(const [sx,sy,b,ph] of B.stars){const k=(.6+.4*Math.sin(t*1.5+ph))*(1-fk*.8);c.fillStyle='rgba(230,235,255,'+(b*k)+')';c.fillRect(((sx*W*1.4-cam.x*.01)%W+W)%W,sy*H-py,1.6,1.6)}}
 // storm clouds
 c.fillStyle='rgba(10,12,20,.65)';for(let i=0;i<7;i++){const x=((i*260-cam.x*.04-t*6)%(W+400)+W+400)%(W+400)-200;c.beginPath();c.ellipse(x,40+(i%3)*24-py,180,34,0,0,TAU);c.fill()}
 if(run.flashT>t){c.fillStyle='rgba(220,230,255,'+clamp((run.flashT-t)*2.2,0,.5)+')';c.fillRect(0,0,W,H)}
 // the sea and the burning fleet on the horizon
 const sy=300-py*2;if(!painted){const g=c.createLinearGradient(0,sy,0,H);g.addColorStop(0,fk>0?'#3a2620':'#1e2a3c');g.addColorStop(1,'#070a12');c.fillStyle=g;c.fillRect(0,sy,W,H-sy);}
 if(!painted){c.strokeStyle='rgba(255,170,110,.18)';c.lineWidth=1;for(let i=0;i<10;i++){const y=sy+8+i*i*2.4,o=(i*137-cam.x*(.05+i*.02)+t*10)%(W+200);c.beginPath();c.moveTo(o-100,y);c.lineTo(o+70,y+2);c.lineTo(o+160,y-1);c.stroke()}}
 if(!painted){const off=-((cam.x*.12)%1400);for(let x=off;x<W;x+=1400)c.drawImage(B.fleet,x,sy-190);}
 // the escort ship that fires the broadsides (parallax .3, flashes when a mark appears)
 const ex=1600-cam.x*.3,ey=sy+6;if(ex>-400&&ex<W+400){c.fillStyle='#0a0d16';c.beginPath();c.moveTo(ex-260,ey);c.quadraticCurveTo(ex-280,ey-70,ex-200,ey-80);c.lineTo(ex+220,ey-70);c.quadraticCurveTo(ex+280,ey-40,ex+250,ey);c.fill();
  for(const [mx,h] of[[-120,250],[20,300],[150,220]]){c.fillRect(ex+mx-4,ey-80-h,8,h);c.fillStyle='rgba(30,30,40,.9)';c.fillRect(ex+mx-60,ey-60-h*.9,120,h*.5);c.fillStyle='#0a0d16'}
  const fl=(run.muzzleT||0)>t;for(let i=0;i<6;i++){c.fillStyle=fl?'rgba(255,210,120,.95)':'rgba(255,150,70,.3)';c.fillRect(ex-180+i*70,ey-46,14,9)}if(fl)run.fx.glow(c,ex,ey-46,220,'rgba(255,170,80,',.35)}
 if(fk>0){c.fillStyle='rgba(255,120,40,'+(.08*fk)+')';c.fillRect(0,sy,W,H-sy)}
}
function drawBack(run,c){
 const cam=run.camera,W=E.W,L=cam.x-80,R=cam.x+W+80,cfg=run.cfg,d=cfg.decor,t=run.time,s=run.state;
 // the Black Leviathan's towering stern and the Admiral's flag
 if(R>5200){const y=cfg.arena.floor;c.fillStyle='#120c0a';c.fillRect(6900,y-560,140,560);c.fillStyle='#c9a24a';for(let k=0;k<3;k++)c.fillRect(6900,y-520+k*150,140,4);c.fillStyle='rgba(255,190,110,.35)';for(let k=0;k<3;k++){c.fillRect(6920,y-480+k*150,30,40);c.fillRect(6980,y-480+k*150,30,40)}
  const fx=6960,fy=y-600,wv=Math.sin(t*3)*6;c.strokeStyle='#2a1c14';c.lineWidth=4;c.beginPath();c.moveTo(fx,y-560);c.lineTo(fx,fy-60);c.stroke();c.fillStyle='#0b0b0e';c.beginPath();c.moveTo(fx,fy-60);c.quadraticCurveTo(fx-50,fy-50+wv,fx-100,fy-56+wv);c.lineTo(fx-100,fy-8+wv);c.quadraticCurveTo(fx-50,fy-4+wv,fx,fy-10);c.closePath();c.fill();c.fillStyle='#e8e2d2';c.beginPath();c.arc(fx-50,fy-32+wv*.6,9,0,TAU);c.fill()}
 // rails along the decks
 for(const so of cfg.solids){if(so.style==='cabin'||so.x>R||so.x+so.w<L)continue;c.strokeStyle=so.style==='ourdeck'?'#6a4a2c':'#3a2a20';c.lineWidth=4;c.beginPath();c.moveTo(Math.max(so.x,L),so.y-46);c.lineTo(Math.min(so.x+so.w,R),so.y-46);c.stroke();c.lineWidth=3;for(let x=Math.ceil(Math.max(so.x,L)/50)*50;x<Math.min(so.x+so.w,R);x+=50){c.beginPath();c.moveTo(x,so.y-46);c.lineTo(x,so.y);c.stroke()}}
 // masts with yards and sails (the quarterdeck mast falls in Phase 3)
 for(const [x,y,h] of d.masts){if(x+160<L||x-160>R)continue;const fallen=x===cfg.arena.center&&run.mastK>0;if(fallen)continue;const sail=y===cfg.arena.floor?'rgba(30,26,26,.9)':y===900?'rgba(232,222,196,.85)':'rgba(34,30,32,.92)';
  c.fillStyle='#2e2016';c.fillRect(x-7,y-h,14,h);c.fillRect(x-90,y-h+50,180,7);c.fillRect(x-70,y-h*.55,140,6);
  c.fillStyle=sail;c.beginPath();c.moveTo(x-86,y-h+58);c.quadraticCurveTo(x,y-h+80+Math.sin(t*1.4+x)*6,x+86,y-h+58);c.lineTo(x+70,y-h*.55-2);c.quadraticCurveTo(x,y-h*.5+12,x-70,y-h*.55-2);c.closePath();c.fill();
  if(y!==900){c.fillStyle='rgba(230,226,210,.75)';c.beginPath();c.arc(x,y-h*.75,14,0,TAU);c.fill();c.fillStyle='#0b0b0e';c.fillRect(x-6,y-h*.75-2,12,4)}
  c.strokeStyle='#5a4a38';c.lineWidth=1.5;c.beginPath();c.moveTo(x-90,y-h+54);c.lineTo(x-150,y-46);c.moveTo(x+90,y-h+54);c.lineTo(x+150,y-46);c.stroke()}
 // the fallen mast lying across the quarterdeck, burning
 if(run.mastK>0&&cfg.arena.center>L-400&&cfg.arena.center<R+400){const a=cfg.arena,k=clamp(run.mastK,0,1),ang=-Math.PI/2+(Math.PI/2-.12)*k*k;c.save();c.translate(a.center,a.floor);c.rotate(ang+Math.PI/2);c.fillStyle='#2e2016';c.fillRect(-7,-560,14,560);c.fillRect(-90,-510,180,7);c.restore();
  if(k>=1){run.fire(c,a.center-300,a.floor-40,.6,true);run.fire(c,a.center+120,a.floor-60,.5,true)}}
}
function drawDecor(run,c){
 const cam=run.camera,W=E.W,L=cam.x-80,R=cam.x+W+80,d=run.cfg.decor,t=run.time;
 for(const [x,y] of d.cannons){if(x<L||x>R)continue;c.fillStyle='#3a2a1c';c.fillRect(x-30,y-22,60,16);c.fillStyle='#1a1a1e';c.beginPath();c.arc(x-18,y-6,8,0,TAU);c.arc(x+18,y-6,8,0,TAU);c.fill();c.fillStyle='#24242a';c.beginPath();c.roundRect(x-26,y-40,70,20,8);c.fill();c.fillStyle='#34343c';c.fillRect(x+38,y-42,8,24)}
 for(const [x,y] of d.barrels){if(x<L||x>R)continue;c.fillStyle='#5a3a20';c.beginPath();c.roundRect(x-18,y-46,36,46,8);c.fill();c.fillStyle='#2a2a2e';c.fillRect(x-18,y-38,36,4);c.fillRect(x-18,y-12,36,4);c.fillStyle='#1a1a1e';c.font='900 14px Arial';c.textAlign='center';c.fillText('☠',x,y-20)}
 for(const [x,y] of d.lanterns){if(x<L||x>R)continue;c.strokeStyle='#22272d';c.lineWidth=4;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-96);c.lineTo(x+16,y-96);c.stroke();const sw=Math.sin(t*2+x)*2;run.fx.glow(c,x+16+sw,y-76,46,'rgba(255,190,110,',.5);c.fillStyle='#2b2620';c.fillRect(x+9+sw,y-92,14,4);c.fillStyle='#ffd27a';c.fillRect(x+10+sw,y-88,12,14)}
 // Mari's crew cheering on our ship (set dressing)
 for(const [x,y] of d.crew){if(x<L||x>R)continue;const b=Math.abs(Math.sin(t*4+x))*6;c.fillStyle='#2a1c14';c.fillRect(x-9,y-56-b,18,34);c.fillRect(x-9,y-22,7,22);c.fillRect(x+2,y-22,7,22);c.fillStyle='#d0a07a';c.beginPath();c.arc(x,y-66-b,9,0,TAU);c.fill();c.fillStyle='#8a1f24';c.fillRect(x-10,y-74-b,20,5);c.strokeStyle='#2a1c14';c.lineWidth=5;c.beginPath();c.moveTo(x+8,y-50-b);c.lineTo(x+18,y-80-b);c.stroke();c.strokeStyle='#cfd6dd';c.lineWidth=2;c.beginPath();c.moveTo(x+18,y-80-b);c.lineTo(x+22,y-104-b);c.stroke()}
}
function weather(run,c){
 const W=E.W,cam=run.camera,t=run.time,fk=run.fireK||0,n=run.lowFx?40:90;
 c.save();c.strokeStyle='rgba(190,200,230,.35)';c.lineWidth=1.2;c.beginPath();for(let i=0;i<n;i++){const x=((i*173+t*(60+fk*80)-cam.x*.8)%(W+40)+W+40)%(W+40)-20,y=((i*97+t*620)%(H+40))-20;c.moveTo(x,y);c.lineTo(x-6-fk*6,y+16)}c.stroke();c.restore();
 if(fk>0){c.save();for(let i=0;i<(run.lowFx?14:30);i++){const x=((i*211-cam.x*.6+Math.sin(t+i)*20)%(W+20)+W+20)%(W+20),y=H-((i*67+t*70)%(H+20));c.fillStyle='rgba(255,'+(140+(i%3)*30)+',60,'+(.5*fk)+')';c.fillRect(x,y,2.5,2.5)}c.restore()}
}

/* ------------------------------------------------------------------ the Black Admiral (three-phase boss) */
const AR={hip:72,thigh:36,shin:36,torso:64,head:16,shoulder:30,arm:[30,29],legW:14,armW:11,scale:1.34};
const OPEN=['recover','reload','stunned','winded'];
class Admiral{
 constructor(run){this.run=run;this.cfg=run.cfg.boss;this.a=run.cfg.arena;this.max=this.cfg.hp;this.rand=rng(10);this.reset()}
 get floor(){return this.a.floor}
 reset(){Object.assign(this,{x:this.a.x1-280,dir:-1,hp:this.max,p3:false,state:'dormant',t:0,animT:0,flash:0,cool:1.2,acts:0,aim:null,locked:false,shots:0,deadT:0,shake:0,walking:false,lean:0,hitDone:false,idleHits:0,vis:1,lungeTo:0,hidden:false})}
 box(){return{x:this.x-40,y:this.floor-206,w:80,h:206}}
 // steps in with a cut but never through the hero, so a block in front of him always faces the blow
 advance(px,step,lo,hi){const stop=px-this.dir*64;let nx=this.x+this.dir*step;if(this.dir>0?this.x<=stop:this.x>=stop)nx=this.dir>0?Math.min(nx,stop):Math.max(nx,stop);else nx=this.x;this.x=clamp(nx,lo,hi)}
 set(s,t){this.state=s;this.t=t}
 get open(){return OPEN.includes(this.state)}
 get phase(){return this.p3?3:2}
 start(){const run=this.run,p3=run.state.p3;this.reset();if(p3){this.p3=true;this.hp=this.cfg.phase3At}
  this.set('intro',p3?1.4:2.2);run.audio.play(p3?'admRoar':'laugh',{vol:1});run.banner={t:3.2,text:text(run.lang,p3?'introFire':'intro')};run.camera.shake=5}
 damage(amount,kind,dir){
  const run=this.run,st=this.state;if(['dormant','yield','vanish','lurk'].includes(st))return'none';const bx=this.box(),cy=bx.y+bx.h*.45;
  if(st==='intro'||st==='rage'||st==='parry'){run.fx.spark(this.x-dir*24,cy,'#ffd88a',10);run.audio.play('guard',{vol:.7,rate:.9+Math.random()*.2,gap:.08});if(st==='parry')this.parried=true;return'blocked'}
  // hacking at his guard from the front while he is ready: he parries the third blow and ripostes
  const front=(dir<0&&this.dir>0)||(dir>0&&this.dir<0);
  if(st==='idle'&&kind==='melee'&&front){this.idleHits++;if(this.idleHits>=3){this.idleHits=0;this.set('parry',.5);this.parried=true;run.audio.play('guard',{vol:1});run.fx.text(text(run.lang,'parry'),this.x,bx.y-30,'#cfe3ff',true);run.fx.spark(this.x+this.dir*30,cy,'#ffd88a',14);return'blocked'}}
  const k=this.open?this.cfg.openScale:1;const dmg=Math.round(amount*k);
  this.hp=Math.max(0,this.hp-dmg);this.flash=.12;this.shake=dir*5;run.audio.play('fleshHit',{vol:.6,rate:.8});
  run.fx.text(String(dmg),this.x,bx.y-16,k>1?'#ffd36b':'#ffffff',k>1);
  if(!this.p3&&this.hp<=this.cfg.phase3At){this.hp=this.cfg.phase3At;run.def.ignite(run);return'hit'}
  if(this.hp<=0){run.def.admiralDown(run);return'hit'}
  return'hit'}
 update(dt){
  const run=this.run,p=run.p,a=this.a,g=this.floor;this.animT+=dt;this.flash=Math.max(0,this.flash-dt);this.shake*=Math.pow(.002,dt);
  if(this.state==='dormant')return;if(this.state==='yield'){this.deadT+=dt;this.lean+=(.5-this.lean)*Math.min(1,dt*3);return}
  this.t-=dt;this.cool-=dt;const f=this.p3?.82:1,px=p.x+p.w/2,dx=px-this.x,dist=Math.abs(dx),lo=a.x0+90,hi=a.x1-90;this.walking=false;
  const hit=(box,dmg,kn)=>{if(!this.hitDone&&overlap(box,p)&&run.hurtPlayer(dmg,this.dir,this,kn))this.hitDone=true};   // dodged through with i-frames: no hit
  switch(this.state){
   case'intro':this.dir=dx>0?1:-1;if(this.t<=0){this.set('idle',.2);this.cool=.6}return;
   case'rage':this.lean=-.15;if(this.t<=0){this.set('idle',.2);this.cool=.5}return;
   // three-cut combo: each cut is announced by a red flash on the blade
   case'comboWind':this.lean=-.12;if(this.t<=0){this.combo=1;this.set('cut',.2);this.hitDone=false;run.audio.play('combo',{vol:1})}return;
   case'cut':{const n=this.combo,k=1-this.t/.2;this.lean=.2;this.advance(px,(n===3?260:120)*dt,lo,hi);
    if(k>.3)hit({x:this.dir>0?this.x-10:this.x-(n===3?200:170),y:g-190,w:n===3?210:180,h:190},n===3?20:12,n===3?320:200);
    if(this.t<=0){if(n>=3)this.set('recover',1.05*f);else this.set('cutGap',.3*f)}return}
   case'cutGap':this.lean=-.08;if(this.t<=0){this.combo++;this.set('cut',.2);this.hitDone=false;run.audio.play(this.combo===3?'heavy':'combo',{vol:1,rate:this.combo===2?1.1:1})}return;
   // dash lunge along a red line; dodged, he hits the rail and is stunned
   case'lungeCharge':this.lean=-.2;if(this.t>.25)this.lungeTo=clamp(px+this.dir*40,lo,hi);this.lungeTo=this.dir>0?Math.max(this.lungeTo,this.x+160):Math.min(this.lungeTo,this.x-160);
    if(this.t<=0){this.lungeEnd=this.dir>0?hi:lo;this.set('lunge',Math.abs(this.lungeEnd-this.x)/980+.08);this.hitDone=false;run.audio.play('lunge',{vol:1})}return;
   case'lunge':{this.lean=.4;const nx=this.x+this.dir*980*dt;this.x=clamp(nx,lo,hi);hit({x:this.x-50,y:g-180,w:100,h:180},22,360);
    if(this.hitDone&&Math.abs(this.x-this.lungeTo)<30){this.set('recover',.8*f);return}
    if(this.x<=lo||this.x>=hi||this.t<=0){if(!this.hitDone){this.set('stunned',1.7);run.audio.play('creak',{vol:1});run.audio.play('heavy',{vol:.7,rate:.7});run.camera.shake=7;run.fx.debris(this.x+this.dir*40,g-60,14);run.fx.text(text(run.lang,'stunned'),this.x,g-260,'#ffe38a',true)}else this.set('recover',.8*f)}return}
   case'stunned':this.lean=.3;if(this.t<=0)this.set('idle',.2);return;
   // pistol: two aimed shots (aim line, locks 0.3 s before the shot), then a visible reload
   case'aim':this.dir=dx>0?1:-1;if(this.t>.3){this.aim={x:px,y:p.y+p.h*.45};this.locked=false}else this.locked=true;
    if(this.t<=0){run.def.admiralShot(run,this);this.shots++;if(this.shots>=2){this.set('reload',1.4*f);run.audio.play('cock',{vol:.8,rate:.8})}else{this.set('aim',.6);this.aim={x:px,y:p.y+p.h*.45};this.locked=false}}return;
   case'reload':if(this.t<=0){this.set('idle',.2);run.audio.play('cock',{vol:.9})}return;
   case'parry':this.lean=-.1;if(this.t<=0){this.set('riposteWind',.38)}return;
   case'riposteWind':this.lean=-.2;if(this.t<=0){this.set('riposte',.2);this.hitDone=false;run.audio.play('combo',{vol:1,rate:1.25})}return;
   case'riposte':this.lean=.35;this.advance(px,300*dt,lo,hi);hit({x:this.dir>0?this.x-10:this.x-170,y:g-180,w:180,h:180},14,280);if(this.t<=0)this.set('recover',.9*f);return;
   case'recover':this.lean*=.9;if(this.t<=0){this.set('idle',.2);this.idleHits=0}return;
   case'winded':if(this.t<=0)this.set('idle',.2);return;
   // PHASE 3 — shadow dash: vanish in smoke, smoke gathers behind the hero, he appears and strikes there
   case'vanish':this.vis=Math.max(0,this.t/.45);if(this.t<=0){this.hidden=true;this.lurkX=clamp(px-(p.dir||1)*120,lo,hi);this.set('lurk',.85);run.audio.play('vanish',{vol:.5,rate:1.3})}return;
   case'lurk':if(this.t<=0){this.hidden=false;this.vis=1;this.x=this.lurkX;this.dir=px>this.x?1:-1;this.set('emerge',.22);this.hitDone=false;run.audio.play('appear',{vol:1});run.fx.burst(this.x,g-100,'#3a3040',24,1.2)}return;
   case'emerge':{this.lean=.3;const k=1-this.t/.22;if(k>.25)hit({x:this.dir>0?this.x-20:this.x-160,y:g-190,w:180,h:190},18,300);if(this.t<=0)this.set('recover',1.1)}return;
   // cannon barrage: he signals the guns; marks land around the hero one by one
   case'signal':this.lean=-.2;if(this.t<=0){run.def.barrage(run,this);this.set('winded',1.5)}return;
   // fire wave: the sword is driven into the deck; a flame runs both ways along the planks — jump it
   case'slamWind':this.lean=-.25;if(this.t<=0){run.def.fireWave(run,this);this.set('recover',1.1);run.camera.shake=8;run.fx.debris(this.x,g,14)}return}
  // idle: advance, choose an attack (each one ends in an opening)
  this.dir=dx>0?1:-1;if(dist>190){this.x=clamp(this.x+this.dir*(this.p3?104:82)*dt,lo,hi);this.walking=true}this.lean*=.9;this.vis=1;
  if(!p.dead&&p.dash<=0&&overlap(p,this.box())){p.x+=(px<this.x?-1:1)*160*dt}
  if(this.cool>0||p.dead)return;this.acts++;const r=this.rand();
  if(this.p3){
   if(this.acts%5===0){this.set('signal',.75);this.cool=1.1;run.audio.play('barrage',{vol:.6,rate:1.2});return}
   if(this.acts%5===2){this.set('vanish',.45);this.cool=1.2;run.audio.play('vanish',{vol:1});run.fx.burst(this.x,g-100,'#2a2430',26,1.2);return}
   if(dist<320&&(this.acts%5===4||r<.25)){this.set('slamWind',.8);this.cool=1.2;run.audio.play('ignite',{vol:.8});return}}
  if(dist<210){this.set('comboWind',.62*f);this.cool=1.4*f;run.audio.play('bossWindup',{vol:.8});return}
  if(dist>=260&&dist<900&&(this.acts%3===1||r<.3)){this.set('lungeCharge',.85*f);this.lungeTo=clamp(px,lo,hi);this.cool=1.3*f;run.audio.play('lungeCharge',{vol:1});return}
  if(dist>=230){this.shots=0;this.set('aim',.85);this.cool=1.4*f;this.aim={x:px,y:p.y+p.h*.45};this.locked=false;run.audio.play('cock',{vol:1});return}
  this.cool=.3}
 draw(c){
  const run=this.run,st=this.state,g=this.floor,yielded=st==='yield';
  if(st==='dormant'){// waits on the quarterdeck, back turned, looking at the sea
   if(window.PirateEnemyAnim?.drawBoss?.(run,c,this,{floor:g,dead:false,alpha:.95,h:206}))return;c.save();c.globalAlpha=.95;this.drawBody(c,run,st,g,1);c.restore();return}
  // telegraphs
  if(st==='aim'&&this.aim){c.save();c.strokeStyle=this.locked?'rgba(255,60,40,.9)':'rgba(255,200,140,.5)';c.lineWidth=this.locked?3:2;c.setLineDash(this.locked?[]:[9,8]);c.beginPath();c.moveTo(this.x+this.dir*60,g-150);c.lineTo(this.aim.x,this.aim.y);c.stroke();c.restore()}
  if(st==='comboWind'||st==='cutGap'||st==='riposteWind')run.fx.glow(c,this.x+this.dir*50,g-180,80,'rgba(255,80,50,',.5);
  if(st==='riposteWind'){c.save();c.font='900 30px Arial';c.textAlign='center';c.fillStyle='rgba(255,110,80,.95)';c.fillText('!',this.x,g-300);c.restore()}
  if(st==='lungeCharge'||st==='lunge'){const k=st==='lunge'?1:1-this.t/.85,end=this.dir>0?this.a.x1-90:this.a.x0+90;c.save();c.fillStyle='rgba(255,60,40,'+(.12+.2*k)+')';c.fillRect(Math.min(this.x,end),g-12,Math.abs(end-this.x),12);c.strokeStyle='rgba(255,80,50,'+(.5+.4*k)+')';c.lineWidth=3;c.beginPath();c.moveTo(this.x,g-6);c.lineTo(end,g-6);c.stroke();
   c.fillStyle='rgba(255,90,60,'+(.5+.5*k)+')';c.beginPath();c.moveTo(end,g-22);c.lineTo(end+this.dir*20,g-6);c.lineTo(end,g+10);c.fill();c.restore()}
  if(st==='lurk'){const k=1-this.t/.85;c.save();c.fillStyle='rgba(30,22,36,'+(.3+.5*k)+')';c.beginPath();c.ellipse(this.lurkX,g-90,30+50*k,80+40*k,0,0,TAU);c.fill();c.strokeStyle='rgba(255,80,50,'+(.4+.5*k)+')';c.lineWidth=3;c.beginPath();c.ellipse(this.lurkX,g-3,70+30*k,10,0,0,TAU);c.stroke();
   c.font='900 30px Arial';c.textAlign='center';c.fillStyle='rgba(255,110,80,'+(.5+.5*k)+')';c.fillText('!',this.lurkX,g-230);c.restore()}
  if(st==='slamWind'){const k=1-this.t/.8;c.save();c.strokeStyle='rgba(255,140,50,'+(.4+.5*k)+')';c.lineWidth=4;c.beginPath();c.moveTo(this.a.x0+70,g-4);c.lineTo(this.a.x1-70,g-4);c.stroke();c.restore();run.fx.glow(c,this.x+this.dir*40,g-40,60+40*k,'rgba(255,140,50,',.6)}
  if(st==='signal'){const k=1-this.t/.75;run.fx.glow(c,this.x-this.dir*30,g-300,30+30*k,'rgba(255,90,60,',.8)}
  if(this.hidden)return;
  if(!window.PirateEnemyAnim?.drawBoss?.(run,c,this,{floor:g,dead:false,alpha:this.vis,h:206})){c.save();c.globalAlpha=this.vis;this.drawBody(c,run,st,g,0);c.restore()}   // animated boss (enemy-anim.js) when bound
  if(this.open&&!yielded){for(let i=0;i<3;i++){const an=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(this.x+Math.cos(an)*22-2,g-296+Math.sin(an)*5,4,4)}}}
 drawBody(c,run,st,g,dormant){
  const yielded=st==='yield';c.fillStyle='rgba(0,0,0,.35)';c.beginPath();c.ellipse(this.x,g+1,60,9,0,0,TAU);c.fill();
  c.translate(Math.round(this.x+this.shake),g+(yielded?Math.min(30,this.deadT*40):0));if((dormant?1:this.dir)<0)c.scale(-1,1);c.scale(AR.scale,AR.scale);
  c.lineCap='round';c.lineJoin='round';const fl=this.flash>0,col=a=>fl?mixHex(a,'#ffffff',.75):a;
  const ph=this.animT*6.5,s=this.walking?Math.sin(ph):0,bob=this.walking?-Math.abs(Math.cos(ph))*3:Math.sin(this.animT*2)*1;const kneel=yielded?.6:0;const hy=-(AR.thigh+AR.shin)*(1-kneel*.45)+bob;
  // the cape behind him
  const lean=this.lean,sx=Math.sin(lean)*AR.torso,sy=hy-Math.cos(lean)*AR.torso,wave=Math.sin(run.time*3)*6+(this.walking?8:0)+(st==='lunge'?22:0);
  c.fillStyle=col('#14080a');c.strokeStyle='#0b0d12';c.lineWidth=2;c.beginPath();c.moveTo(sx-AR.shoulder*.9,sy+4);c.quadraticCurveTo(-AR.shoulder*1.6-wave,hy+10,-AR.shoulder*1.4-wave*1.4,22);c.lineTo(AR.shoulder*.2-wave*.6,24);c.lineTo(sx+AR.shoulder*.4,sy+6);c.closePath();c.fill();c.stroke();
  c.fillStyle=col('#7a1418');c.beginPath();c.moveTo(sx-AR.shoulder*.8,sy+8);c.quadraticCurveTo(-AR.shoulder*1.3-wave,hy+14,-AR.shoulder*1.2-wave*1.3,18);c.lineTo(-AR.shoulder*.9-wave,18);c.quadraticCurveTo(-AR.shoulder*.9,hy+6,sx-AR.shoulder*.5,sy+10);c.fill();
  limb(c,-5,hy,yielded?.9:-s*.42,AR.thigh,yielded?-.2:-s*.42-(this.walking?Math.max(0,-Math.cos(ph))*.8:.1),AR.shin,AR.legW,col('#15161c'),col('#0c0b0a'));
  // back arm: the pistol
  const ba=st==='aim'?1.5:st==='reload'?.4+Math.sin(run.time*9)*.3:st==='signal'?3.0:yielded?.3:-.15+s*.3;const br=arm(c,sx-5,sy+5,ba,AR.arm[0],ba-.05,AR.arm[1],AR.armW,col('#1c1d24'),col('#d4b896'));
  if(!yielded){c.save();c.translate(br.fx,br.fy);c.rotate(-ba+Math.PI/2);c.fillStyle='#4a2c16';c.fillRect(-12,-5,16,10);c.fillStyle='#5d6670';c.fillRect(2,-4,30,7);c.fillStyle='#c9a24a';c.fillRect(-2,-6,6,12);if(st==='aim'&&this.locked)run.fx.glow(c,32,0,20,'rgba(255,80,50,',.8);c.restore()}
  // long black coat with gold trim, red sash, epaulettes
  c.save();c.translate(0,hy);c.rotate(lean);c.fillStyle=col('#1c1d24');c.strokeStyle='#0b0d12';c.lineWidth=2.5;c.beginPath();c.moveTo(-AR.shoulder,-AR.torso);c.quadraticCurveTo(0,-AR.torso-10,AR.shoulder,-AR.torso);c.lineTo(AR.shoulder+8+s*5,50);c.lineTo(-AR.shoulder-10+s*5,50);c.closePath();c.fill();c.stroke();
  c.strokeStyle=col('#c9a24a');c.lineWidth=2;c.beginPath();c.moveTo(4,-AR.torso+4);c.lineTo(6,48);c.stroke();c.fillStyle=col('#c9a24a');for(let i=0;i<4;i++){c.beginPath();c.arc(10,-AR.torso+14+i*12,2.4,0,TAU);c.fill()}
  c.fillStyle=col('#8a1418');c.fillRect(-AR.shoulder*.95,-16,AR.shoulder*1.95,10);c.fillStyle=col('#c9a24a');c.fillRect(-AR.shoulder-4,-AR.torso-4,18,7);c.fillRect(AR.shoulder-14,-AR.torso-4,18,7);for(let i=0;i<4;i++){c.fillRect(-AR.shoulder-4+i*4,-AR.torso+3,2,6);c.fillRect(AR.shoulder-14+i*4,-AR.torso+3,2,6)}
  c.restore();
  limb(c,5,hy,yielded?.2:s*.42,AR.thigh,yielded?-1.4:s*.42-(this.walking?Math.max(0,Math.cos(ph))*.8:.1),AR.shin,AR.legW,col('#1d1e26'),col('#0c0b0a'));
  // head: pale scarred face, black beard, bicorne with a gold edge and a white plume
  c.save();c.translate(sx+Math.sin(lean)*15,sy-15);c.rotate(lean*.5+(yielded?.35:0));c.fillStyle=col('#d8c0a4');c.strokeStyle='#0b0d12';c.lineWidth=2;c.beginPath();c.ellipse(2,0,AR.head*.85,AR.head,0,0,TAU);c.fill();c.stroke();
  c.fillStyle=col('#141210');c.beginPath();c.moveTo(-8,5);c.quadraticCurveTo(4,30,16,5);c.lineTo(12,10);c.lineTo(-4,10);c.closePath();c.fill();c.strokeStyle='#a0605a';c.lineWidth=1.5;c.beginPath();c.moveTo(6,-10);c.lineTo(12,2);c.stroke();
  const ey=this.p3?'rgba(255,120,60,':'rgba(255,210,120,';run.fx.glow(c,9,-4,10,ey,.7);c.fillStyle=this.p3?'#ff8a4a':'#ffd36b';c.beginPath();c.arc(9,-4,2.4,0,TAU);c.fill();
  c.fillStyle=col('#0e0e12');c.beginPath();c.moveTo(-AR.head*2.1,-6);c.quadraticCurveTo(0,-AR.head*3.0,AR.head*2.2,-6);c.quadraticCurveTo(0,-AR.head*1.2,-AR.head*2.1,-6);c.closePath();c.fill();c.stroke();
  c.strokeStyle=col('#c9a24a');c.lineWidth=2;c.beginPath();c.moveTo(-AR.head*2.0,-7);c.quadraticCurveTo(0,-AR.head*1.25,AR.head*2.1,-7);c.stroke();
  c.fillStyle=col('#eeeae0');c.beginPath();c.ellipse(-4,-AR.head*2.2,12,5,-.4,0,TAU);c.fill();c.restore();
  // front arm: the cutlass (dropped when he yields)
  const fa=st==='comboWind'||st==='cutGap'||st==='riposteWind'?-2.5:st==='cut'||st==='riposte'||st==='emerge'?1.1:st==='lungeCharge'?.2:st==='lunge'?1.5:st==='slamWind'?-2.9:st==='parry'?-.6:yielded?.4:.35+s*.25;
  const fr=arm(c,sx+4,sy+6,fa,AR.arm[0],fa-.15,AR.arm[1],AR.armW,col('#1c1d24'),col('#d4b896'));
  if(!yielded){c.save();c.translate(fr.fx,fr.fy);c.rotate(-fa+Math.PI/2+(st==='parry'?-1.2:.1));c.fillStyle='#c9a24a';c.fillRect(-4,-7,7,14);c.beginPath();c.arc(-2,0,8,-1.2,1.2);c.strokeStyle='#c9a24a';c.lineWidth=2;c.stroke();
   c.fillStyle=this.p3?'#ffc890':'#dfe6ec';c.strokeStyle='#0b0d12';c.lineWidth=1.4;c.beginPath();c.moveTo(3,-3.5);c.quadraticCurveTo(44,-9,66,1);c.lineTo(3,3.5);c.closePath();c.fill();c.stroke();
   if(this.p3)run.fx.glow(c,40,0,26,'rgba(255,120,50,',.45);if(st==='comboWind'||st==='cutGap'||st==='riposteWind')run.fx.glow(c,54,0,30,'rgba(255,80,50,',.6);c.restore()}}}

/* ------------------------------------------------------------------ the level definition */
const def={
 id:10,name:{en:'The Black Admiral',az:'Qara Admiral'},config:BASE+'level-10.json',base:BASE,boss:true,
 images:[BASE+'assets/painted/level10-fleet.webp'],
 rig:{pose,LOOK,AR},
 title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),text:(lang,k)=>text(lang,k),
 initialState:()=>({enc:{},p3:false,admiralDown:false,nest:false,rewardClaimed:false}),
 persist(run){const s=run.state;return{enc:{...s.enc},p3:!!s.p3,admiralDown:!!s.admiralDown,nest:!!s.nest,rewardClaimed:!!s.rewardClaimed}},
 async prepare(run){
  run.tex=makeTextures();run.back=makeBack(run);
  const extra=window.PirateMusic?{}:Object.fromEntries(Object.entries(MUSIC).map(([k,f])=>['m_'+k,f]));
  run.audioReady=Promise.all([run.audioReady,run.audio.load(A10,SFX),Object.keys(extra).length?run.audio.load(AM,extra):null]);
  const pm=run.audio.playMusic.bind(run.audio);run.audio.playMusic=(name,fade)=>window.PirateMusic?pm(name,fade):pm(MUSIC[name]?'m_'+name:name,fade);
  run.lightBuf=canvas(8,8);
  const sk=run.skin;if(sk&&!sk.__l10){sk.__l10=true;const base=sk.draw.bind(sk);sk.draw=(c,p,r)=>{const cine=r?.cine;if(r?.def===def&&cine&&cine.heroPose)return def.drawCineHero(r,c,p,base);return base(c,p,r)}}
  await loadRig(run,'level10');
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  if(!s.enc||typeof s.enc!=='object')s.enc={};s.p3=!!s.p3;s.admiralDown=!!s.admiralDown;s.nest=!!s.nest;
  run.banner={t:4.5,text:text(run.lang,'title')};run.rand=rng(101);
  run.marks=[];run.waves=[];run.broadT=2.2;run.broadsides=0;run.muzzleT=0;run.railHit=0;run.fireK=s.p3||s.admiralDown?1:0;run.mastK=s.p3||s.admiralDown?1:0;run.mast=null;run.boltT=6;
  run.pending={};for(const e of[...run.enemies]){const d=c.enemies.find(q=>q.id===e.id);if(d?.wave){const[enc,w]=d.wave.split(':');(run.pending[enc]??=[]).push({e,w:+w,d});run.enemies=run.enemies.filter(q=>q!==e)}}
  run.enc={id:null,wave:0,delay:0};run.walls={};for(const k of c.encounters)run.walls[k.id]=0;run.walls.boss=0;
  run.adm=new Admiral(run);run.arena={active:false};run.cine=null;run.chestOpen=!!s.rewardClaimed;
  if(s.admiralDown){run.adm.state='yield';run.adm.hp=0;run.adm.deadT=99;run.adm.x=c.arena.chest-260;run.adm.dir=-1}
  if(!run.skipBtn&&run.root){const b=document.createElement('button');b.className='pl-skip';b.textContent=text(run.lang,'skip');b.style.cssText='position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:5;padding:8px 14px;border-radius:12px;border:2px solid #d8b56a;background:#0d1a29e6;color:#ffe3a0;font:800 14px Arial;display:none';b.onclick=e=>{e.stopPropagation();def.skipStory(run)};run.root.append(b);run.skipBtn=b;
   run.root.addEventListener('pointerdown',e=>{if(run.cine&&run.cine.stage==='story'&&!e.target.closest('button'))def.advance(run)})}
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hinted={};run.hintQueue=resumed?[]:['hBroad'];run.hintT=5.5;run.hintsAt={m1:'hMarine',d1:'hGunner'}},
 music(run){if(run.cine){run.audio.playMusic('triumph',1.2);return}const st=run.adm.state;
  if(run.arena.active&&!['dormant','yield'].includes(st)&&!run.state.admiralDown){run.audio.playMusic(run.adm.p3?'inferno':'admiral',1.0);return}
  if(run.enc.id){run.audio.playMusic('battle',1.0);return}run.audio.playMusic('warship',1.4)},
 zone(run){const x=run.p.x+run.p.w/2;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones[run.cfg.zones.length-1]},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 phase(run){if(run.state.admiralDown)return 0;if(run.arena.active||def.zone(run).id==='quarter')return run.state.p3||run.adm.p3?3:2;return 1},
 objectiveHud(run){
  if(run.cine)return'';const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k);
  if(run.enc.id)return t('objGuard').replace('{n}',Math.max(1,run.enc.wave));
  if(s.admiralDown)return t('objChest');
  if(z==='ourship')return t('objOur');if(z==='boarding')return t('objBoard');if(z==='maindeck')return t('objMain');
  return run.adm.p3||s.p3?t('objFire'):t('objDuel')},
 dynamicSolids(run){const list=[],c=run.cfg;
  for(const k of c.encounters){const w=run.walls[k.id];if(w>.05)for(const x of[k.wallL,k.wallR])list.push({x:x-15,y:k.floor-420*w,w:30,h:420*w,style:'net'})}
  if(run.walls.boss>.05)list.push({x:c.arena.x0-15,y:c.arena.floor-420*run.walls.boss,w:30,h:420*run.walls.boss,style:'net'});
  return list},
 cameraLock(run){if(!run.arena.active&&!run.state.admiralDown||run.cine?.stage==='story'||run.cine?.stage==='outro')return null;if(!run.arena.active&&run.state.admiralDown&&def.zone(run).id!=='quarter')return null;const a=run.cfg.arena,W=E.W,p=run.p;const x=clamp(p.x+p.w/2-W/2,a.x0-60,a.x1+60-W);return{x:x+(W-960)/2,y:a.floor-H*.84}},
 bossHud(run){const st=run.adm.state;return run.arena.active&&!run.cine&&!['dormant','yield'].includes(st)},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg,cx=p.x+p.w/2;
  run.banner.t=Math.max(0,run.banner.t-dt);
  const fireTarget=s.p3||s.admiralDown||run.adm.p3?1:0;run.fireK+=(fireTarget-run.fireK)*Math.min(1,dt*.8);
  if(run.cine){def.updateCine(run,dt);def.updateMarks(run,dt);return}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:4.6,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-cx)<520){def.hint(run,h);delete run.hintsAt[id]}}
  if(cx>1250&&cx<1400)def.hint(run,'hPlank');
  def.updateBroadside(run,dt);def.updateMarks(run,dt);def.updateWaves(run,dt);def.updateMast(run,dt);def.updateStorm(run,dt);
  // secret: the crow's nest above the main deck
  if(!s.nest&&cx>4500&&cx<4640&&p.ground&&Math.abs(p.y+p.h-520)<4){s.nest=true;run.banner={t:3,text:text(run.lang,'secretNest')};run.audio.play('secret',{vol:.9});run.save()}
  def.updateEncounters(run,dt);
  if(run.arena.active||s.admiralDown)run.adm.update(dt);
  run.walls.boss+=((run.arena.active&&!s.admiralDown?1:0)-run.walls.boss)*Math.min(1,dt*6);
  // Phase 3: the rails burn
  if(run.arena.active&&run.adm.p3&&!s.admiralDown&&!p.dead){const a=c.arena,f=p.y+p.h;if(Math.abs(f-a.floor)<6&&(cx<a.x0+70||cx>a.x1-70)){run.railHit-=dt;if(run.railHit<=0){run.railHit=.5;run.hurtPlayer(5,cx<a.x0+70?1:-1,null,160,true)}}else run.railHit=0}
  // the war chest after the Admiral yields
  if(s.admiralDown&&!run.cine&&!p.dead){const a=c.arena;if(overlap(p,{x:a.chest-44,y:a.floor-80,w:88,h:80}))def.beginVictory(run)}
 },
 hint(run,k){if(run.hinted[k])return;run.hinted[k]=true;run.banner={t:4.6,text:text(run.lang,k),small:true}},
 // the escort ship fires on the decks you cross (never inside an encounter or the duel)
 updateBroadside(run,dt){const b=run.cfg.broadside,p=run.p,cx=p.x+p.w/2;const z=b.zones.find(([x0,x1,y])=>cx>x0&&cx<x1&&Math.abs(p.y+p.h-y)<60);if(!z||p.dead||run.enc.id||run.arena.active)return;
  run.broadT-=dt;if(run.broadT>0)return;run.broadT=b.every;run.broadsides++;const x=clamp(cx+p.vx*.6,z[0]+30,z[1]-30);
  run.marks.push({x,y:z[2],t:0,warn:b.warn,r:b.r,dmg:b.dmg,hit:false,shot:true});if(b.pair){const x2=clamp(x+(run.rand()<.5?-1:1)*b.pair,z[0]+30,z[1]-30);if(Math.abs(x2-x)>60)run.marks.push({x:x2,y:z[2],t:-.3,warn:b.warn,r:b.r,dmg:b.dmg,hit:false,shot:true})}
  run.audio.play('broadside',{vol:.8});run.audio.play('markWhistle',{vol:.6});run.muzzleT=run.time+.25;run.flashT=run.time+.15},
 updateMarks(run,dt){const p=run.p,cx=p.x+p.w/2;for(const m of run.marks){m.t+=dt;if(!m.hit&&m.t>=m.warn){m.hit=true;run.fx.explosion?.(m.x,m.y-20,m.r*.9);run.audio.at('heavy',m.x,{vol:.8,rate:.8});run.audio.at('broadside',m.x,{vol:.5,rate:1.3});run.camera.shake=Math.max(run.camera.shake,5);run.fx.burst(m.x,m.y-10,'#ffb46b',18);run.fx.debris(m.x,m.y-6,10);
   if(!p.dead&&!run.cine&&Math.abs(cx-m.x)<m.r+p.w/2-8&&Math.abs(p.y+p.h-m.y)<60)run.hurtPlayer(m.dmg,Math.sign(cx-m.x)||1,null,240)}}run.marks=run.marks.filter(m=>m.t<m.warn+.4)},
 // the fire wave runs along the quarterdeck in both directions from his sword; jump over it
 fireWave(run,b){const a=run.cfg.arena;for(const d of[-1,1])run.waves.push({x:b.x+d*30,dir:d,hit:false});run.audio.play('fireWave',{vol:1})},
 updateWaves(run,dt){const p=run.p,a=run.cfg.arena,cx=p.x+p.w/2;for(const w of run.waves){w.x+=w.dir*430*dt;if(run.fx.on&&Math.random()<.5)run.fx.dust(w.x,a.floor,1,w.dir);
   if(!w.hit&&!p.dead&&Math.abs(cx-w.x)<26&&p.y+p.h>a.floor-54){w.hit=true;run.hurtPlayer(14,w.dir,null,200)}}run.waves=run.waves.filter(w=>w.x>a.x0+40&&w.x<a.x1-40)},
 barrage(run,b){const p=run.p,a=run.cfg.arena,cx=p.x+p.w/2;const xs=[cx,cx-170,cx+170,cx+p.vx*.5+(run.rand()<.5?-80:80)].map(x=>clamp(x,a.x0+60,a.x1-60));
  xs.forEach((x,i)=>run.marks.push({x,y:a.floor,t:-i*.28,warn:1.2,r:56,dmg:16,hit:false,shot:true}));run.audio.play('barrage',{vol:1});run.audio.play('markWhistle',{vol:.7});run.muzzleT=run.time+.3;run.flashT=run.time+.2},
 updateMast(run,dt){const m=run.mast;if(!m)return;m.t+=dt;const a=run.cfg.arena;if(m.t>1.4&&!m.done){m.done=true;run.audio.play('mastFall',{vol:1});run.camera.shake=12;run.fx.debris(a.center,a.floor-20,30);run.fx.burst(a.center,a.floor-30,'#ffb46b',30,1.4);
   const p=run.p,cx=p.x+p.w/2;if(!p.dead&&Math.abs(cx-a.center)<m.w&&Math.abs(p.y+p.h-a.floor)<80)run.hurtPlayer(18,Math.sign(cx-a.center)||1,null,320)}
  if(m.t>.9)run.mastK=Math.min(1,run.mastK+dt*2.2);if(m.t>2)run.mast=null},
 updateStorm(run,dt){if(run.fireK<.3)return;run.boltT-=dt;if(run.boltT<=0){run.boltT=4.5+run.rand()*3;run.flashT=run.time+.35;run.audio.play('creak',{vol:.5,rate:.7})}},
 // Phase 3 begins: fire, a falling mast, the storm
 ignite(run){const b=run.adm,s=run.state;if(b.p3)return;b.p3=true;s.p3=true;b.set('rage',3.0);b.cool=.6;run.marks=[];run.waves=[];run.projectiles=run.projectiles.filter(q=>q.owner==='hero');
  run.mast={t:0,w:150,done:false};run.audio.play('admRoar',{vol:1});run.audio.play('ignite',{vol:1});run.camera.shake=10;run.banner={t:3,text:text(run.lang,'rage')};run.flashT=run.time+.4;
  setTimeout(()=>{if(run.phase==='play')def.hint(run,'hFire')},3200);def.music(run);run.save()},
 musket(run,e){const p=run.p,sx=e.cx+e.dir*58,sy=e.y+e.h*.36,aim=e.aim||{x:p.x+p.w/2,y:p.y+p.h*.45},a=aimClamp(e,Math.atan2(aim.y-sy,aim.x-sx));
  run.projectiles.push({kind:'musket',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*720,vy:Math.sin(a)*720,w:14,h:6,dmg:14,life:1.0});run.audio.at('musket',e.cx,{vol:.9});run.fx.burst(sx+e.dir*20,sy,'#d8d0c0',8);run.camera.shake=Math.max(run.camera.shake,2)},
 admiralShot(run,b){const p=run.p,sx=b.x+b.dir*70,sy=b.floor-150,aim=b.aim||{x:p.x+p.w/2,y:p.y+p.h*.45};let a=Math.atan2(aim.y-sy,aim.x-sx);const base=b.dir>0?0:Math.PI;let rel=Math.atan2(Math.sin(a-base),Math.cos(a-base));rel=clamp(rel,-.5,.5);a=base+rel;
  run.projectiles.push({kind:'musket',owner:'enemy',x:sx,y:sy,vx:Math.cos(a)*780,vy:Math.sin(a)*780,w:16,h:7,dmg:12,life:1.2,big:true});run.audio.play('pistolShot',{vol:1});run.fx.burst(sx+b.dir*16,sy,'#d8d0c0',10)},
 strike(run,box,dmg){const b=run.adm;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&!b.hidden&&overlap(box,b.box())){const r=b.damage(dmg,'melee',run.p.dir);if(r!=='none')return true}return false},
 dashStrike(run,box,dmg){const b=run.adm;if(!run.arena.active||run.cine||b.state==='dormant'||b.hidden||!overlap(box,b.box()))return false;const r=b.damage(Math.round(dmg*run.cfg.boss.dashScale),'dash',run.p.dir);if(r==='hit'){run.fx.spark(b.x,run.p.y+run.p.h*.45,'#ffd36b',16);return true}return false},
 projectileHit(run,q){if(q.owner!=='hero')return false;const b=run.adm;if(run.arena.active&&!run.cine&&b.state!=='dormant'&&!b.hidden&&overlap(q,b.box())){b.damage(Math.round(q.dmg*run.cfg.boss.bulletScale),'bullet',Math.sign(q.vx)||1);return true}return false},
 /* encounters */
 spawnWave(run,id,w){const foes=(run.pending[id]||[]).filter(q=>q.w===w&&!run.killed.has(q.e.id));
  for(const q of foes){const e=q.e;e.encId=id;e.spawnT=.8;e.alert=true;e.x=q.d.x-e.w/2;e.hp=e.max;e.dead=false;e.state='idle';e.timer=0;e.cool=.6+run.rand()*.4;run.pending[id]=run.pending[id].filter(z=>z!==q);run.enemies.push(e)}return foes.length},
 updateEncounters(run,dt){
  const c=run.cfg,s=run.state,p=run.p,cx=p.x+p.w/2,en=run.enc;
  for(const k of c.encounters){const on=en.id===k.id;run.walls[k.id]+=((on?1:0)-run.walls[k.id])*Math.min(1,dt*6)}
  if(!en.id&&!p.dead){for(const k of c.encounters){if(s.enc[k.id])continue;if(cx>k.trigger&&cx<k.wallR&&Math.abs(p.y+p.h-k.floor)<160&&p.ground){en.id=k.id;en.wave=0;en.delay=1.1;run.audio.play('gateSlam',{vol:.9});run.camera.shake=6;run.banner={t:2.2,text:text(run.lang,'ambush')};run.marks=[];def.music(run);break}}
   const a=c.arena;if(!run.arena.active&&!s.admiralDown&&cx>a.x0+120&&Math.abs(p.y+p.h-a.floor)<20&&p.ground){run.arena.active=true;run.marks=[];run.adm.start();def.music(run);run.audio.play('gateSlam',{vol:.9});def.hint(run,'hDuel');setTimeout(()=>{if(run.phase==='play'&&run.arena.active)def.hint(run,'hLunge')},9000)}}
  if(!en.id)return;const k=c.encounters.find(q=>q.id===en.id);
  const alive=run.enemies.filter(e=>!e.dead&&e.encId===k.id);if(alive.length)return;en.delay-=dt;if(en.delay>0)return;
  const pend=run.pending[k.id]||[];let next=en.wave+1;while(next<=k.waves&&!pend.some(q=>q.w===next&&!run.killed.has(q.e.id)))next++;
  if(next>k.waves){s.enc[k.id]=true;en.id=null;run.banner={t:2.6,text:text(run.lang,'cleared')};run.audio.play('gateOpen',{vol:.9});def.music(run);run.save();return}
  en.wave=next;run.banner={t:2,text:text(run.lang,'wave').replace('{n}',next)};run.audio.play('bossIntro',{vol:.5});def.spawnWave(run,k.id,next);en.delay=1.4},
 onRespawn(run){
  const s=run.state,c=run.cfg,en=run.enc;run.marks=[];run.waves=[];run.projectiles=[];run.broadT=2.5;run.railHit=0;
  if(en.id){for(const e of run.enemies.filter(q=>q.encId===en.id&&!q.dead)){run.enemies=run.enemies.filter(q=>q!==e);const d=c.enemies.find(q=>q.id===e.id);e.hp=e.max;e.state='idle';e.encId=null;e.spawnT=0;(run.pending[en.id]??=[]).push({e,w:+d.wave.split(':')[1],d})}en.id=null;en.wave=0}
  // the duel restarts — at Phase 3 once the ship has caught fire
  if(run.arena.active&&!s.admiralDown){run.adm.reset();run.arena.active=false;if(run.mast){run.mast=null;run.mastK=1}}
  def.music(run)},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 ambience(run){if(!run.audio.ctx)return;const q=run.arena.active||def.zone(run).id==='quarter';run.audio.loop('battleAmb',run.cine?.1:q?.18:.32);run.audio.loop('fireAmb',.45*(run.fireK||0))},
 paintSolid:(run,c,s,L,R,T,B)=>paintSolid(run,c,s,L,R,T,B),
 paintLedge:(run,c,l)=>paintLedge(run,c,l),
 drawCrumble:(run,c,b)=>drawCrumble(run,c,b),
 drawEnemy:(run,c,e)=>drawFoe(run,c,e),
 drawProjectile(run,c,q){if(q.kind!=='musket')return;c.rotate(Math.atan2(q.vy,q.vx));c.strokeStyle='rgba(230,220,200,.45)';c.lineWidth=2;c.beginPath();c.moveTo(-40,0);c.lineTo(-6,0);c.stroke();c.fillStyle='#2a2a30';c.beginPath();c.arc(0,0,q.big?5:4,0,TAU);c.fill();run.fx.glow(c,0,0,14,'rgba(255,200,120,',.6)},
 drawBackground:(run,c)=>drawBackground(run,c),
 drawBack(run,c){drawBack(run,c);drawDecor(run,c)},
 drawMid(run,c){
  const cam=run.camera,W=E.W,L=cam.x-120,R=cam.x+W+120,cfg=run.cfg,s=run.state,t=run.time,a=cfg.arena;
  for(const d of def.dynamicSolids(run)){if(d.x+d.w<L||d.x>R)continue;c.strokeStyle='#3a3026';c.lineWidth=3;c.fillStyle='rgba(30,24,18,.35)';c.fillRect(d.x,d.y,d.w,d.h);c.beginPath();for(let y=d.y;y<d.y+d.h;y+=18){c.moveTo(d.x,y);c.lineTo(d.x+d.w,y+9)}for(let x=d.x;x<=d.x+d.w;x+=10){c.moveTo(x,d.y);c.lineTo(x,d.y+d.h)}c.stroke()}
  // Phase 3 burning rails at both ends of the quarterdeck
  if(run.fireK>.05&&R>a.x0-100){const k=run.fireK;for(const x0 of[a.x0,a.x1-70]){if(x0+70<L||x0>R)continue;c.fillStyle='rgba(255,90,30,'+(.18*k)+')';c.fillRect(x0,a.floor-8,70,8);for(let i=0;i<3;i++)run.fire(c,x0+12+i*24,a.floor-4,.42*k+.08*Math.sin(t*5+i),true)}}
  // the Admiral's war chest
  if(a.chest>L&&a.chest<R&&(s.admiralDown||run.chestOpen)){const open=run.chestOpen;c.fillStyle='#2a1810';c.fillRect(a.chest-42,a.floor-52,84,52);c.fillStyle='#c9a24a';c.fillRect(a.chest-42,a.floor-52,84,6);c.fillRect(a.chest-4,a.floor-42,8,14);c.fillRect(a.chest-42,a.floor-8,84,4);
   c.save();c.translate(a.chest-42,a.floor-52);c.rotate(open?-1.1:0);c.fillStyle='#3a2214';c.beginPath();c.roundRect(0,-22,84,22,[10,10,0,0]);c.fill();c.fillStyle='#c9a24a';c.fillRect(0,-4,84,4);c.fillStyle='#0b0b0e';c.font='900 14px Arial';c.textAlign='center';c.fillText('☠',42,-6);c.restore();
   if(!run.cine){run.fx.glow(c,a.chest,a.floor-40,80,'rgba(255,220,130,',.5+.2*Math.sin(t*4));c.save();c.font='900 26px Georgia';c.textAlign='center';c.fillStyle='rgba(255,227,160,'+(.6+.4*Math.sin(t*6))+')';c.fillText('▼',a.chest,a.floor-100);c.restore()}}
  // the falling mast's shadow
  if(run.mast&&!run.mast.done){const k=clamp(run.mast.t/1.4,0,1);c.save();c.fillStyle='rgba(10,6,4,'+(.2+.4*k)+')';c.beginPath();c.ellipse(a.center,a.floor-3,run.mast.w*(.5+.5*k),12,0,0,TAU);c.fill();c.strokeStyle='rgba(255,80,50,'+(.4+.5*k)+')';c.lineWidth=3;c.stroke();c.restore()}
  // broadside and barrage marks: a red ring that tightens, then the ball drops in
  for(const m of run.marks){if(m.t<0||m.t>=m.warn)continue;const q=clamp(m.t/m.warn,0,1);c.save();c.strokeStyle='rgba(255,80,50,'+(.4+.5*q)+')';c.lineWidth=3;c.beginPath();c.ellipse(m.x,m.y-3,m.r*(1.4-.4*q),10,0,0,TAU);c.stroke();c.fillStyle='rgba(255,80,50,'+(.08+.18*q)+')';c.fill();
   c.font='900 18px Arial';c.textAlign='center';c.fillStyle='rgba(255,140,100,'+(.5+.5*q)+')';c.fillText('✕',m.x,m.y-16);if(q>.55){const yy=m.y-520*(1-(q-.55)/.45);c.fillStyle='#1a1a1e';c.beginPath();c.arc(m.x,yy-10,9,0,TAU);c.fill();run.fx.glow(c,m.x,yy-10,22,'rgba(255,170,90,',.6)}c.restore()}
  // fire waves
  for(const w of run.waves){if(w.x<L||w.x>R)continue;c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(0,a.floor-56,0,a.floor);g.addColorStop(0,'rgba(255,120,40,0)');g.addColorStop(.4,'rgba(255,140,50,.7)');g.addColorStop(1,'rgba(255,220,120,.95)');c.fillStyle=g;c.beginPath();c.moveTo(w.x-30,a.floor);c.quadraticCurveTo(w.x-10,a.floor-60-Math.sin(t*20)*6,w.x+w.dir*24,a.floor-30);c.lineTo(w.x+w.dir*30,a.floor);c.closePath();c.fill();c.restore()}
 },
 drawActors(run,c){if(run.arena.active||run.state.admiralDown||run.adm.state==='dormant')run.adm.draw(c)},
 drawFront(run,c){
  const cam=run.camera,W=E.W,L=cam.x-100,R=cam.x+W+100,cfg=run.cfg,t=run.time;
  for(const q of cfg.pits){if(q.x+q.w<L||q.x>R)continue;const y0=cfg.sea;c.fillStyle='rgba(12,20,34,.94)';c.beginPath();c.moveTo(q.x,y0+30);for(let x=q.x;x<=q.x+q.w;x+=12)c.lineTo(x,y0+Math.sin(t*2.4+x*.05)*5);c.lineTo(q.x+q.w,y0+500);c.lineTo(q.x,y0+500);c.fill();c.fillStyle='rgba(255,190,140,.3)';for(let x=q.x+6;x<q.x+q.w;x+=22)c.fillRect(x,y0-2+Math.sin(t*2.4+x*.05)*5,8,2)}
 },
 drawLighting(run,c){
  weather(run,c);
  const W=E.W,cam=run.camera,p=run.p,cfg=run.cfg,s=run.state;let dark=.24-.1*(run.fireK||0);   // lifted for phone screens (audit 2026-11-06)if(run.cine)dark*=.6;if(dark<.05)return;
  const lw=Math.ceil(W/4),lh=Math.ceil(H/4),buf=run.lightBuf;if(buf.width!==lw||buf.height!==lh){buf.width=lw;buf.height=lh}
  const x=buf.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(4,4,12,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
  const spr=run.fx.glowSprite('rgba(255,255,255,');const hole=(wx,wy,r,a=1)=>{const sx=(wx-cam.x)/4,sy=(wy-cam.y)/4,rr=r/4;if(sx+rr<0||sx-rr>lw||sy+rr<0||sy-rr>lh)return;x.globalAlpha=a;x.drawImage(spr,sx-rr,sy-rr,rr*2,rr*2)};
  hole(p.x+p.w/2,p.y+p.h*.45,210,1);for(const [lx,ly] of cfg.decor.lanterns)hole(lx+16,ly-76,180,.9);for(const cp of cfg.checkpoints)if(cp.id<=run.checkpoint)hole(cp.x,cp.y-40,170,.8);
  for(const ch of run.chests)if(!ch.open)hole(ch.x,ch.y-20,110,.6);for(const m of run.marks)if(m.t>=0)hole(m.x,m.y-10,120,.5);
  for(const e of run.enemies)if(!e.dead&&e.cx>cam.x-100&&e.cx<cam.x+W+100)hole(e.cx,e.floor-70,140,.6);
  if(run.arena.active||s.admiralDown)hole(run.adm.x,run.adm.floor-120,240,.7);if(run.fireK>.1){const a=cfg.arena;hole(a.x0+35,a.floor-40,220,.8*run.fireK);hole(a.x1-35,a.floor-40,220,.8*run.fireK)}if(s.admiralDown)hole(cfg.arena.chest,cfg.arena.floor-40,200,.8);
  x.globalAlpha=1;x.globalCompositeOperation='source-over';c.save();c.imageSmoothingEnabled=true;c.drawImage(buf,0,0,lw,lh,0,0,lw*4,lh*4);c.restore()},
 drawHud(run,c){
  const W=E.W,s=run.state,b=run.adm,ph=def.phase(run);
  const y=(run.objY||88)+16,x=W/2-20;const chips=[];
  if(!run.cine&&ph===1){chips.push(['⚓ '+text(run.lang,'phase1'),'#ffd38a',null]);if(run.marks.some(m=>m.t>=0&&m.t<m.warn))chips.push(['💥 '+text(run.lang,'broadside'),'#ff9f7a',null])}
  if(!run.cine&&run.arena.active&&b.p3&&(()=>{const cx=run.p.x+run.p.w/2,a=run.cfg.arena;return cx<a.x0+70||cx>a.x1-70})())chips.push(['🔥 '+text(run.lang,'burning'),'#ff9f43',null]);
  if(chips.length&&!run.cine){const cw=210,tot=chips.length*cw+(chips.length-1)*8;let x0=x-tot/2;c.save();for(const [lab,col] of chips){c.fillStyle='rgba(10,18,32,.78)';c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.roundRect(x0,y,cw,28,12);c.fill();c.stroke();c.font='800 13px Arial, sans-serif';c.textAlign='center';c.fillStyle=col;c.fillText(lab,x0+cw/2,y+19,cw-12);x0+=cw+8}c.restore()}
  if(def.bossHud(run)){const bw=Math.min(400,W-540),bx=W/2-bw/2-20,by=(run.objY||88)+(chips.length?52:18);run.panel(c,bx-10,by-8,bw+20,60);c.textAlign='left';c.font='800 13px Georgia, serif';c.fillStyle='#ffffff';c.fillText(text(run.lang,'admiral'),bx,by+12,bw-150);
   c.textAlign='right';c.font='800 11px Arial';c.fillStyle=b.p3?'#ff9f43':'#ffd36b';c.fillText(text(run.lang,b.p3?'phase3':'phase2'),bx+bw,by+12,150);
   c.fillStyle='#ffd36b';c.font='800 12px Arial';c.fillText(Math.ceil(b.hp)+'/'+b.max,bx+bw,by+29);run.bar(c,bx,by+36,bw,12,b.hp/b.max,b.p3?'#ff7a3a':'#c23b3b',b.p3?'#7a2a0f':'#5a1418',true);
   const mk=bx+bw*b.cfg.phase3At/b.max;c.fillStyle='#ffe3a0';c.fillRect(mk-1,by+33,2,18)}
  if(run.banner.t>0&&!run.cine?.stage?.startsWith('story')){const kk=Math.min(1,run.banner.t,4.6-run.banner.t+.001);c.save();c.globalAlpha=clamp(kk*2,0,1);c.textAlign='center';const by=run.banner.small?(run.objY||88)+(def.bossHud(run)?126:chips.length?92:86):200;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(run.banner.small?520:640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(18,10,10,.86)';c.beginPath();c.roundRect(W/2-bw/2,by-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#d8b56a';c.lineWidth=2;c.stroke();
   c.fillStyle='#fff0d8';let txt=run.banner.text;while(c.measureText(txt).width>bw-30&&txt.length>8)txt=txt.slice(0,-2);if(txt!==run.banner.text)txt+='…';c.fillText(txt,W/2,by+(run.banner.small?-5:6));c.restore()}
  if(run.cine)def.drawCine(run,c)},
 /* -------- the Admiral yields, the war chest (boss reward), story */
 admiralDown(run){
  const b=run.adm,s=run.state,p=run.p;if(s.admiralDown)return;s.admiralDown=true;b.set('yield',0);b.deadT=0;b.hidden=false;b.vis=1;run.marks=[];run.waves=[];run.projectiles=run.projectiles.filter(q=>q.owner==='hero');
  run.audio.play('admiralFall',{vol:1});run.audio.play('bossDie',{vol:.7});run.camera.shake=12;run.hitStop(.3);run.banner={t:3.2,text:text(run.lang,'yield')};run.fx.burst(b.x,b.floor-120,'#ffd08a',30,1.4);
  run.healHero(30);run.audio.stopMusic(1.2);setTimeout(()=>{if(run.phase==='play'&&!run.cine)run.audio.playMusic('warship',1.6)},1800);run.save()},
 beginVictory(run){
  if(run.cine)return;const p=run.p,a=run.cfg.arena,rw=run.cfg.boss.reward,fresh=!run.state.rewardClaimed;
  run.cine={stage:fresh?'reward':'pose',t:0,T:0,letter:0,line:0,chars:0,...(!fresh?{heroPose:'pose'}:{})};run.chestOpen=true;run.clearInputs();if(run.controls)run.controls.hidden=true;p.inv=99;
  // Persist the displayed run reward with run.gold. The shop pays its unique
  // L10/boss receipt at completion; never bank accumulated run.gold a second time.
  if(fresh){run.gold+=rw;run.state.rewardClaimed=true}run.rewardGiven=fresh?rw:0;run.audio.stopMusic(.6);
  if(fresh){run.audio.play('chest',{vol:1});run.audio.play('reward',{vol:1});run.fx.burst(a.chest,a.floor-40,'#ffe27a',50,1.8);run.fx.text('+'+rw,a.chest,a.floor-110,'#ffe27a',true)}else run.audio.play('victory',{vol:1});run.save()},
 updateCine(run,dt){
  const cn=run.cine,p=run.p;cn.t+=dt;cn.T+=dt;p.inv=Math.max(p.inv,2);run.inputs.clear();run.axis=0;
  if(cn.stage==='reward'){if(cn.t>.6&&!cn.flashed){cn.flashed=true;run.banner={t:3.4,text:text(run.lang,'reward')+' — '+text(run.lang,'rewardSub').replace('{n}',run.cfg.boss.reward)};def.music(run)}
   if(cn.t>3.6){cn.stage='pose';cn.t=0;cn.heroPose='pose';p.dir=1;run.audio.play('victory',{vol:1});run.fx.ring(p.x+p.w/2,p.y+p.h-10,'rgba(255,220,120,.95)',20,.8);run.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ffe27a',50,1.8);run.fx.text(text(run.lang,'victory'),p.x+p.w/2,p.y-60,'#ffe27a',true)}return}
  if(cn.stage==='pose'){if(cn.t>2.2)def.startStory(run);return}
  if(cn.stage==='story'){cn.letter=Math.min(1,cn.letter+dt*2.5);const line=def.lines(run)[cn.line];cn.chars=Math.min(line.text.length,cn.chars+dt*42);cn.lineT=(cn.lineT||0)+dt;
   if(run.attackPress||run.jumpBuffer>0){run.attackPress=false;run.jumpBuffer=0;def.advance(run)}
   if(cn.chars>=line.text.length&&cn.lineT>line.text.length/42+3.2)def.advance(run);return}
  if(cn.stage==='outro'){cn.letter=Math.max(0,cn.letter-dt*2.2);if(cn.letter<=0&&run.phase==='play'){if(run.skipBtn)run.skipBtn.style.display='none';run.cine=null;
    run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length})}}},
 heroName(run){return window.PirateHeroes?.get?.(run.heroId)?.name||'Captain'},
 lines(run){const t=k=>text(run.lang,k),h=def.heroName(run);return[{who:'hero',name:h,text:t('s1')},{who:'admiral',name:t('s2n'),text:t('s2')},{who:'',name:'',text:t('s3')},{who:'hero',name:h,text:t('s4')}]},
 startStory(run){const was=run.cine;run.cine={...(was||{}),stage:'story',t:0,T:was?.T||9,letter:0,line:0,chars:0,lineT:0,heroPose:'pose'};run.clearInputs();if(run.controls)run.controls.hidden=true;if(run.skipBtn)run.skipBtn.style.display='block';run.p.inv=99;def.music(run)},
 advance(run){const cn=run.cine;if(!cn||cn.stage!=='story')return;const lines=def.lines(run),line=lines[cn.line];if(cn.chars<line.text.length){cn.chars=line.text.length;return}cn.line++;cn.chars=0;cn.lineT=0;run.audio.play('coin',{vol:.3,rate:.7});if(cn.line>=lines.length)def.skipStory(run)},
 skipStory(run){const cn=run.cine;if(!cn)return;cn.stage='outro';cn.line=Math.min(cn.line,def.lines(run).length-1);if(run.skipBtn)run.skipBtn.style.display='none'},
 drawCineHero(run,c,p,base){const cx=p.x+p.w/2,t=run.time;c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(cx-60,0,cx+60,0);g.addColorStop(0,'rgba(255,200,120,0)');g.addColorStop(.5,'rgba(255,200,120,'+(.2+.08*Math.sin(t*4))+')');g.addColorStop(1,'rgba(255,200,120,0)');c.fillStyle=g;c.fillRect(cx-60,p.y-400,120,400+p.h);c.restore();
  run.fx.glow(c,cx,p.y+p.h*.4,110,'rgba(255,220,120,',.4);base(c,{...p,anim:'attackC',attack:0,dir:p.dir},run)},
 drawAdmiralPortrait(run,c,x,y){c.save();c.translate(x,y);c.fillStyle='#1a1216';c.fillRect(0,0,90,90);c.fillStyle='#d8c0a4';c.beginPath();c.ellipse(45,54,20,24,0,0,TAU);c.fill();c.fillStyle='#141210';c.beginPath();c.moveTo(28,60);c.quadraticCurveTo(45,92,62,60);c.closePath();c.fill();
  c.fillStyle='#0e0e12';c.beginPath();c.moveTo(0,40);c.quadraticCurveTo(45,-4,90,40);c.quadraticCurveTo(45,26,0,40);c.closePath();c.fill();c.strokeStyle='#c9a24a';c.lineWidth=2;c.beginPath();c.moveTo(2,39);c.quadraticCurveTo(45,25,88,39);c.stroke();c.fillStyle='#eeeae0';c.beginPath();c.ellipse(36,14,12,5,-.4,0,TAU);c.fill();
  run.fx.glow(c,54,50,12,'rgba(255,120,60,',.8);c.fillStyle='#ff8a4a';c.beginPath();c.arc(54,50,2.6,0,TAU);c.arc(36,50,2.6,0,TAU);c.fill();c.restore()},
 drawCine(run,c){
  const W=E.W,cn=run.cine,hs=run.hudScale||1;
  if(cn.stage==='reward'&&cn.t>.4){const k=clamp((cn.t-.4)/1.2,0,1),pw=400*k,ph=220*k,px=W/2-pw/2,py=270;if(pw>20){c.save();c.globalAlpha=k;c.fillStyle='#e8d6a8';c.strokeStyle='#6a4a2a';c.lineWidth=3;c.beginPath();c.roundRect(px,py,pw,ph,10);c.fill();c.stroke();
   if(k>.9){c.fillStyle='#3a2a1a';c.font='800 16px Georgia';c.textAlign='center';c.fillText(text(run.lang,'reward'),px+pw/2,py+30);c.font='900 30px Georgia';c.fillStyle='#8a5a10';c.fillText('+'+run.cfg.boss.reward+' ◉',px+pw/2,py+72);
    c.strokeStyle='#8a2a22';c.lineWidth=3;c.setLineDash([8,6]);c.beginPath();c.moveTo(px+40,py+190);c.quadraticCurveTo(px+160,py+110,px+260,py+160);c.quadraticCurveTo(px+310,py+180,px+350,py+120);c.stroke();c.setLineDash([]);
    c.font='900 26px Georgia';c.fillStyle='#8a2a22';c.fillText('♛',px+350,py+116);c.font='700 13px Georgia';c.fillStyle='#3a2a1a';c.fillText(text(run.lang,'rewardSub').replace('{n}',run.cfg.boss.reward),px+pw/2,py+100)}c.restore()}}
  const bars=cn.stage==='story'||cn.stage==='outro'?cn.letter:0;if(bars<=0)return;
  const bh=96*bars;c.fillStyle='#000';c.fillRect(0,0,W,bh);c.fillRect(0,H/hs-bh,W,bh);
  if(cn.stage!=='story')return;const lines=def.lines(run),line=lines[Math.min(cn.line,lines.length-1)],shown=line.text.slice(0,Math.floor(cn.chars));
  const pw=Math.min(W-40,760),px=W/2-pw/2,py=bh+14;
  c.save();c.globalAlpha=bars;c.fillStyle='rgba(18,10,10,.92)';c.strokeStyle='#d8b56a';c.lineWidth=2;c.beginPath();c.roundRect(px,py,pw,118,16);c.fill();c.stroke();
  let tx=px+22;if(line.who){c.save();c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.clip();c.fillStyle='#2a1c1c';c.fillRect(px+14,py+14,90,90);
   if(line.who==='hero'&&run.skin)run.skin.drawPortrait(c,px+14,py+14,90,90);else if(line.who==='admiral')def.drawAdmiralPortrait(run,c,px+14,py+14);c.restore();
   c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.stroke();tx=px+120}
  c.textAlign='left';if(line.name){c.font='800 17px Georgia, serif';c.fillStyle='#ffd38a';c.fillText(line.name,tx,py+32)}
  c.font='600 17px Arial, sans-serif';c.fillStyle='#f6eee4';const maxw=px+pw-tx-20;const words=shown.split(' ');let ln='',yy=py+(line.name?58:44);for(const w of words){const test=ln?ln+' '+w:w;if(c.measureText(test).width>maxw&&ln){c.fillText(ln,tx,yy);ln=w;yy+=24}else ln=test}c.fillText(ln,tx,yy);
  if(cn.chars>=line.text.length){c.font='700 13px Arial';c.fillStyle='rgba(255,227,160,'+(.5+.5*Math.sin(run.time*5))+')';c.textAlign='right';c.fillText('▶ '+text(run.lang,'tap'),px+pw-16,py+108)}
  c.restore()}
};
E.register(def);
})();
