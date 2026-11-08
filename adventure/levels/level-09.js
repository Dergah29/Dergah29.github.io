/* Pirate Strike — Level 9: Chain Fortress (Zəncirli Qala), fourth stage of chapter 2.
 * Independent level on PirateLevelEngine. Areas: the Breakwater → the Outer Walls → the Prison Cells → the Keep →
 * the Great Gate (layout: tools/level09_layout.py, audio: tools/level09_audio.py). A sunset sea fortress whose
 * drawbridge is held up by three giant chains.
 * Mechanics: cannon batteries on the far wall shell marked spots (1.3 s ring + whistle), a counterweight lift and
 * the keep elevator, the moat. Chains: CHAIN 1 — knock the three lock pins out of the winch; CHAIN 2 — pump the
 * furnace bellows until the link glows, then shatter it before it cools; CHAIN 3 — turn the great cannon's wheel to
 * aim it and strike the fuse to fire at the gatehouse anchor. Breaking all three drops the drawbridge. Puzzle: the
 * three-gear lock (each strike turns a gear and its meshed neighbours the other way; all notches up opens the
 * guard-room portcullis). Secrets: the tower above the wall walk, the trapdoor under the torch sconce, the ledge
 * above the battlements. New guards, drawn as articulated rigs (walk cycles, telegraphs, hurt and death):
 * Iron Shieldguard (blocks every frontal blow; braces, spear-thrusts from behind the shield, then lowers it —
 * strike then, or get behind him), Bombardier (lights and lobs a bomb at a marked spot; the bomb sits on a fuse
 * — strike it to kick it away, and its blast hurts guards too), Halberdier (low sweep you jump, overhead chop
 * that sticks in the stones). Encounters: the wall walk, the guard room, the siege on the bridge (3 waves).
 * Ending: the great gate opens on the Black Admiral's black sails, story → Level 10 unlocked. */
(()=>{'use strict';
const E=window.PirateLevelEngine;if(!E)return;
const {H,clamp,overlap}=E;const TAU=Math.PI*2;
const BASE='adventure/levels/',A9=BASE+'assets/level-09/',AM=BASE+'assets/music/';
const L={
en:{levelWord:'Level',title:'Level 9 · Chain Fortress',blurb:'A sea fortress held shut by three giant chains — cannon fire, armoured guards and a siege at the great gate',
 quay:'The Breakwater',walls:'The Outer Walls',cells:'The Prison Cells',keep:'The Keep',gate:'The Great Gate',
 objQuay:'Cross the breakwater — dodge the shells from the batteries',objWalls:'Break the first chain: knock out the winch’s three pins ({n}/3)',objWall:'The walls are held! · wave {n}/2',
 objCourt:'Cross the courtyard into the prison cells',objFurnace:'Pump the bellows until the link glows, then shatter it',objGears:'Turn the three gears until every notch points up',
 objGuard:'The guard room! · wave {n}/2',objKeep:'Ride the elevator to the keep',objCannon:'Aim the great cannon (wheel) and fire it (fuse) at the gatehouse chain',
 objBridge:'The drawbridge is down — storm the gate!',objRaised:'Break all three chains to lower the drawbridge ({n}/3)',objSiege:'Hold the bridge! · wave {n}/3',objThrough:'The great gate is open — through it!',
 ambush:'AMBUSH!',wave:'WAVE {n}',cleared:'The way is clear!',chainOne:'A CHAIN BREAKS! ({n}/3)',pin:'Pin out ({n}/3)',cold:'TOO COLD',hot:'GLOWING!',miss:'MISSED',
 gearsOpen:'The gears lock — the portcullis rises!',trap:'Secret: a trapdoor under the sconce',secretTower:'Secret: the watch tower stash',secretKeep:'Secret: a ledge above the battlements',
 bridgeDown:'All three chains are broken — the drawbridge falls!',gateOpen:'The great gate opens!',victory:'VICTORY!',tap:'Tap to continue',skip:'SKIP ▶▶',
 chains:'Chains',shells:'SHELLS',heat:'HEAT',aim:'AIM',blocked:'BLOCKED',kicked:'KICK!',
 hShell:'The batteries fire at your position: when a red ring appears, step out of it',hShield:'Shieldguards block every frontal blow — strike when they lower the shield after a thrust, or get behind them',
 hBomb:'Bombardiers lob bombs on a fuse: step away from the ring, or strike the bomb to kick it at the guards',hHalberd:'Halberdiers sweep low — jump it. Their overhead chop sticks in the stones: strike then',
 hWinch:'Strike the three lock pins of the winch to free the first chain',hFurnace:'Strike the bellows three times, then shatter the glowing link before it cools',
 hGears:'Each strike turns a gear — and its neighbours the other way. Turn every notch up',hSconce:'That torch sconce looks loose…',hCannon:'Strike the wheel to aim, the fuse to fire. Hit the chain anchor on the gatehouse',
 s2n:'Old Prisoner',s1:'Three chains broken — the Chain Fortress is open!',s2:'Beyond that gate waits the Black Admiral himself. His flagship has never lost a battle…',
 s3:'On the horizon, black sails rise against the blood-red sunset.',s4:'Then he’s about to lose his first. Next stop — the Black Admiral!'},
az:{levelWord:'Səviyyə',title:'Səviyyə 9 · Zəncirli Qala',blurb:'Üç nəhəng zəncirlə bağlanmış dəniz qalası — top atəşi, zirehli keşikçilər və böyük darvazada mühasirə',
 quay:'Dalğaqıran',walls:'Xarici Divarlar',cells:'Zindan Kameraları',keep:'Qala Bürcü',gate:'Böyük Darvaza',
 objQuay:'Dalğaqıranı keç — batareyaların mərmilərindən yayın',objWalls:'Birinci zənciri qır: bucurqadın üç kilid mismarını vur ({n}/3)',objWall:'Divarlar qorunur! · dalğa {n}/2',
 objCourt:'Həyəti keçib zindan kameralarına en',objFurnace:'Halqa közərənə qədər körüyü bas, sonra onu parçala',objGears:'Hər çentik yuxarı baxana qədər üç dişlini çevir',
 objGuard:'Keşikçi otağı! · dalğa {n}/2',objKeep:'Liftlə qala bürcünə qalx',objCannon:'Böyük topu nişana al (çarx) və darvaza zəncirinə atəş aç (fitil)',
 objBridge:'Asma körpü endi — darvazaya hücum!',objRaised:'Asma körpünü endirmək üçün üç zəncirin hamısını qır ({n}/3)',objSiege:'Körpünü saxla! · dalğa {n}/3',objThrough:'Böyük darvaza açıqdır — irəli!',
 ambush:'PUSQU!',wave:'DALĞA {n}',cleared:'Yol açıqdır!',chainOne:'ZƏNCİR QIRILDI! ({n}/3)',pin:'Mismar çıxdı ({n}/3)',cold:'ÇOX SOYUQDUR',hot:'KÖZƏRİR!',miss:'YAYINDI',
 gearsOpen:'Dişlilər bərkidi — barmaqlıq qalxır!',trap:'Sirr: məşəl yuvasının altında gizli qapaq',secretTower:'Sirr: gözətçi qülləsinin xəzinəsi',secretKeep:'Sirr: bürcün üstündə gizli çıxıntı',
 bridgeDown:'Üç zəncir qırıldı — asma körpü enir!',gateOpen:'Böyük darvaza açılır!',victory:'QƏLƏBƏ!',tap:'Davam etmək üçün toxun',skip:'KEÇ ▶▶',
 chains:'Zəncirlər',shells:'MƏRMİLƏR',heat:'İSTİLİK',aim:'NİŞAN',blocked:'BLOK',kicked:'TƏPİK!',
 hShell:'Batareyalar sənin yerini atəşə tutur: qırmızı halqa görünəndə ondan çıx',hShield:'Qalxanlı keşikçilər öndən gələn hər zərbəni bloklayır — nizə zərbəsindən sonra qalxanı endirəndə vur və ya arxasına keç',
 hBomb:'Bombaçılar fitilli bomba atır: halqadan uzaqlaş və ya bombanı vurub keşikçilərə tərəf təpiklə',hHalberd:'Teberzinçilər aşağıdan süpürür — tullan. Yuxarıdan zərbəsi daşa ilişir: onda vur',
 hWinch:'Birinci zənciri azad etmək üçün bucurqadın üç kilid mismarını vur',hFurnace:'Körüyü üç dəfə vur, sonra soyumadan közərən halqanı parçala',
 hGears:'Hər zərbə bir dişlini — qonşularını isə əks tərəfə çevirir. Bütün çentikləri yuxarı çevir',hSconce:'Bu məşəl yuvası boş görünür…',hCannon:'Nişan almaq üçün çarxı, atəş üçün fitili vur. Darvaza qülləsindəki zəncir lövbərini vur',
 s2n:'Qoca Məhbus',s1:'Üç zəncir qırıldı — Zəncirli Qala açıqdır!',s2:'O darvazanın o tayında Qara Admiralın özü gözləyir. Onun flaqmanı heç bir döyüşü uduzmayıb…',
 s3:'Üfüqdə qanlı-qırmızı qürubun fonunda qara yelkənlər yüksəlir.',s4:'Onda ilk məğlubiyyətini yaşayacaq. Növbəti dayanacaq — Qara Admiral!'},
tr:{levelWord:'Bölüm',title:'Bölüm 9 · Zincirli Kale',blurb:'Üç dev zincirle kapalı tutulan bir deniz kalesi — top ateşi, zırhlı muhafızlar ve büyük kapıda kuşatma',
 quay:'Dalgakıran',walls:'Dış Surlar',cells:'Zindan Hücreleri',keep:'İç Kale',gate:'Büyük Kapı',
 objQuay:'Dalgakıranı geç — bataryaların mermilerinden kaç',objWalls:'İlk zinciri kır: vincin üç kilit pimini çıkar ({n}/3)',objWall:'Surlar tutuldu! · dalga {n}/2',
 objCourt:'Avluyu geçip zindan hücrelerine in',objFurnace:'Halka kızarana dek körüğü bas, sonra parçala',objGears:'Her çentik yukarı bakana dek üç dişliyi çevir',
 objGuard:'Muhafız odası! · dalga {n}/2',objKeep:'Asansörle iç kaleye çık',objCannon:'Büyük topu nişanla (çark) ve kapı zincirine ateşle (fitil)',
 objBridge:'Asma köprü indi — kapıya saldır!',objRaised:'Asma köprüyü indirmek için üç zinciri de kır ({n}/3)',objSiege:'Köprüyü tut! · dalga {n}/3',objThrough:'Büyük kapı açık — geç!',
 ambush:'PUSU!',wave:'DALGA {n}',cleared:'Yol açık!',chainOne:'BİR ZİNCİR KIRILDI! ({n}/3)',pin:'Pim çıktı ({n}/3)',cold:'ÇOK SOĞUK',hot:'KIZARDI!',miss:'ISKALADI',
 gearsOpen:'Dişliler kilitlendi — parmaklık kalkıyor!',trap:'Sır: aplik altında gizli kapak',secretTower:'Sır: gözcü kulesi zulası',secretKeep:'Sır: surların üstünde bir çıkıntı',
 bridgeDown:'Üç zincir de kırıldı — asma köprü iniyor!',gateOpen:'Büyük kapı açılıyor!',victory:'ZAFER!',tap:'Devam için dokun',skip:'GEÇ ▶▶',
 chains:'Zincirler',shells:'MERMİLER',heat:'ISI',aim:'NİŞAN',blocked:'BLOK',kicked:'TEKME!',
 hShell:'Bataryalar bulunduğun yere ateş eder: kırmızı halka çıkınca dışına çık',hShield:'Kalkanlı muhafızlar öndeki her darbeyi bloklar — mızrak hamlesinden sonra kalkanı indirince vur ya da arkasına geç',
 hBomb:'Bombacılar fitilli bomba atar: halkadan uzaklaş ya da bombaya vurup muhafızlara tekmele',hHalberd:'Teberciler alçaktan savurur — zıpla. Tepeden darbeleri taşa saplanır: o an vur',
 hWinch:'İlk zinciri serbest bırakmak için vincin üç kilit pimine vur',hFurnace:'Körüğe üç kez vur, sonra soğumadan kızaran halkayı parçala',
 hGears:'Her darbe bir dişliyi — komşularını ters yöne — çevirir. Tüm çentikleri yukarı çevir',hSconce:'Bu meşale apliği gevşek görünüyor…',hCannon:'Nişan için çarka, ateş için fitile vur. Kapı kulesindeki zincir çapasını vur',
 s2n:'Yaşlı Mahkûm',s1:'Üç zincir kırıldı — Zincirli Kale açık!',s2:'O kapının ötesinde bizzat Kara Amiral bekliyor. Amiral gemisi hiç savaş kaybetmedi…',
 s3:'Ufukta, kan kırmızısı gün batımına karşı kara yelkenler yükseliyor.',s4:'O zaman ilkini kaybetmek üzere. Sonraki durak — Kara Amiral!'},
ru:{levelWord:'Уровень',title:'Уровень 9 · Цепная крепость',blurb:'Морская крепость, запертая тремя гигантскими цепями — пушечный огонь, бронированная стража и осада у великих ворот',
 quay:'Волнолом',walls:'Внешние стены',cells:'Тюремные камеры',keep:'Цитадель',gate:'Великие ворота',
 objQuay:'Пересеки волнолом — уклоняйся от снарядов батарей',objWalls:'Разбей первую цепь: выбей три стопорных штыря лебёдки ({n}/3)',objWall:'Стены держат! · волна {n}/2',
 objCourt:'Пересеки двор и спустись к камерам',objFurnace:'Качай мехи, пока звено не раскалится, затем разбей его',objGears:'Поворачивай три шестерни, пока все выемки не смотрят вверх',
 objGuard:'Караульня! · волна {n}/2',objKeep:'Поднимись на лифте в цитадель',objCannon:'Наведи большую пушку (колесо) и выстрели (фитиль) в цепь у надвратной башни',
 objBridge:'Подъёмный мост опущен — на штурм ворот!',objRaised:'Разбей все три цепи, чтобы опустить мост ({n}/3)',objSiege:'Удержи мост! · волна {n}/3',objThrough:'Великие ворота открыты — вперёд!',
 ambush:'ЗАСАДА!',wave:'ВОЛНА {n}',cleared:'Путь свободен!',chainOne:'ЦЕПЬ РАЗОРВАНА! ({n}/3)',pin:'Штырь выбит ({n}/3)',cold:'СЛИШКОМ ХОЛОДНО',hot:'РАСКАЛЁН!',miss:'ПРОМАХ',
 gearsOpen:'Шестерни встали — решётка поднимается!',trap:'Тайник: люк под факельным держателем',secretTower:'Тайник: запас в дозорной башне',secretKeep:'Тайник: уступ над стенами',
 bridgeDown:'Все три цепи разбиты — мост опускается!',gateOpen:'Великие ворота открываются!',victory:'ПОБЕДА!',tap:'Нажми, чтобы продолжить',skip:'ПРОПУСТИТЬ ▶▶',
 chains:'Цепи',shells:'СНАРЯДЫ',heat:'ЖАР',aim:'ПРИЦЕЛ',blocked:'БЛОК',kicked:'ПИНОК!',
 hShell:'Батареи бьют по твоей позиции: увидишь красный круг — выйди из него',hShield:'Щитоносцы блокируют любой удар спереди — бей, когда после выпада они опускают щит, или зайди за спину',
 hBomb:'Бомбардиры бросают бомбы с фитилём: отойди от круга или пни бомбу ударом в стражу',hHalberd:'Алебардщики бьют понизу — прыгай. Удар сверху застревает в камне: тогда бей',
 hWinch:'Выбей три стопорных штыря лебёдки, чтобы освободить первую цепь',hFurnace:'Ударь по мехам трижды, затем разбей раскалённое звено, пока оно не остыло',
 hGears:'Каждый удар поворачивает шестерню, а соседние — в обратную сторону. Поверни все выемки вверх',hSconce:'Этот факельный держатель шатается…',hCannon:'Удар по колесу наводит, по фитилю — стреляет. Попади в якорь цепи на башне',
 s2n:'Старый узник',s1:'Три цепи разбиты — Цепная крепость открыта!',s2:'За этими воротами ждёт сам Чёрный адмирал. Его флагман не проиграл ни одного боя…',
 s3:'На горизонте на фоне кроваво-красного заката поднимаются чёрные паруса.',s4:'Значит, проиграет первый. Следующая остановка — Чёрный адмирал!'},
pl:{levelWord:'Poziom',title:'Poziom 9 · Łańcuchowa Twierdza',blurb:'Morska twierdza zamknięta trzema olbrzymimi łańcuchami — ogień dział, opancerzeni strażnicy i oblężenie wielkiej bramy',
 quay:'Falochron',walls:'Mury zewnętrzne',cells:'Cele więzienne',keep:'Donżon',gate:'Wielka Brama',
 objQuay:'Przejdź falochron — unikaj pocisków baterii',objWalls:'Zerwij pierwszy łańcuch: wybij trzy sworznie kołowrotu ({n}/3)',objWall:'Mury bronią się! · fala {n}/2',
 objCourt:'Przejdź dziedziniec do cel więziennych',objFurnace:'Pompuj miech, aż ogniwo rozżarzy się, potem je rozbij',objGears:'Obracaj trzy koła zębate, aż wszystkie wcięcia będą u góry',
 objGuard:'Wartownia! · fala {n}/2',objKeep:'Wjedź windą na donżon',objCannon:'Wyceluj wielkie działo (koło) i odpal je (lont) w łańcuch bramy',
 objBridge:'Most zwodzony opuszczony — szturm na bramę!',objRaised:'Zerwij wszystkie trzy łańcuchy, by opuścić most ({n}/3)',objSiege:'Utrzymaj most! · fala {n}/3',objThrough:'Wielka brama otwarta — naprzód!',
 ambush:'ZASADZKA!',wave:'FALA {n}',cleared:'Droga wolna!',chainOne:'ŁAŃCUCH PĘKA! ({n}/3)',pin:'Sworzeń wybity ({n}/3)',cold:'ZA ZIMNE',hot:'ROZŻARZONE!',miss:'PUDŁO',
 gearsOpen:'Koła zablokowane — krata się unosi!',trap:'Sekret: klapa pod kinkietem',secretTower:'Sekret: skrytka w baszcie',secretKeep:'Sekret: półka nad blankami',
 bridgeDown:'Wszystkie trzy łańcuchy zerwane — most opada!',gateOpen:'Wielka brama się otwiera!',victory:'ZWYCIĘSTWO!',tap:'Dotknij, by kontynuować',skip:'POMIŃ ▶▶',
 chains:'Łańcuchy',shells:'POCISKI',heat:'ŻAR',aim:'CEL',blocked:'BLOK',kicked:'KOP!',
 hShell:'Baterie strzelają w twoją pozycję: gdy pojawi się czerwony krąg, wyjdź z niego',hShield:'Tarczownicy blokują każdy cios z przodu — bij, gdy po pchnięciu opuszczą tarczę, albo zajdź od tyłu',
 hBomb:'Bombardierzy rzucają bomby z lontem: odsuń się od kręgu albo kopnij bombę w strażników',hHalberd:'Halabardnicy tną nisko — skacz. Cios z góry wbija się w kamień: wtedy bij',
 hWinch:'Wybij trzy sworznie kołowrotu, by uwolnić pierwszy łańcuch',hFurnace:'Uderz w miech trzy razy, potem rozbij rozżarzone ogniwo, zanim ostygnie',
 hGears:'Każdy cios obraca koło — a sąsiednie w drugą stronę. Ustaw wszystkie wcięcia u góry',hSconce:'Ten kinkiet wygląda na luźny…',hCannon:'Uderz w koło, by celować, w lont, by strzelić. Traf w kotwę łańcucha na wieży',
 s2n:'Stary więzień',s1:'Trzy łańcuchy zerwane — Łańcuchowa Twierdza otwarta!',s2:'Za tą bramą czeka sam Czarny Admirał. Jego okręt flagowy nie przegrał żadnej bitwy…',
 s3:'Na horyzoncie, na tle krwistoczerwonego zachodu, wznoszą się czarne żagle.',s4:'Więc zaraz przegra pierwszą. Następny przystanek — Czarny Admirał!'}};
const text=(lang,k)=>(L[lang]||L.en)[k]??L.en[k]??k;
function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
const SFX={battery:'sfx-battery.ogg',shellWhistle:'sfx-whistle.ogg',shellImpact:'sfx-impact.ogg',chainSnap:'sfx-chainSnap.ogg',winch:'sfx-winch.ogg',pin:'sfx-pin.ogg',bellows:'sfx-bellows.ogg',furnace:'sfx-furnace.ogg',
 link:'sfx-link.ogg',gear:'sfx-gear.ogg',portcullis:'sfx-portcullis.ogg',trapdoor:'sfx-trapdoor.ogg',drawbridge:'sfx-drawbridge.ogg',greatGate:'sfx-gate.ogg',shieldBlock:'sfx-shield.ogg',thrust:'sfx-thrust.ogg',
 fuse:'sfx-fuse.ogg',bombBlast:'sfx-blast.ogg',halberdSweep:'sfx-sweep.ogg',chop:'sfx-chop.ogg',armorSteps:'sfx-steps.ogg',wheel:'sfx-wheel.ogg',cannonFire:'sfx-cannon.ogg',horn:'sfx-horn.ogg',warcry:'sfx-warcry.ogg',
 harbour:'amb-harbour.ogg',dungeon:'amb-dungeon.ogg'};
const MUSIC={fortress:'fortress.ogg',siege:'siege.ogg',battle:'cove-battle.ogg',triumph:'triumph.ogg'};

/* ------------------------------------------------------------------ the fortress guard (engine enemy kit) */
Object.assign(E.ENEMY,{
 shieldguard:{hp:90,w:44,h:100,speed:34,chase:62,sight:340,gold:6,flesh:true,name:{en:'Iron Shieldguard',az:'Dəmir Qalxançı',tr:'Demir Kalkancı',ru:'Железный щитоносец',pl:'Żelazny tarczownik'}},
 bombardier:{hp:52,w:36,h:88,speed:44,chase:0,sight:520,gold:5,flesh:true,name:{en:'Bombardier',az:'Bombaçı',tr:'Bombacı',ru:'Бомбардир',pl:'Bombardier'}},
 halberdier:{hp:100,w:42,h:104,speed:40,chase:74,sight:340,gold:6,flesh:true,name:{en:'Halberdier',az:'Teberzinçi',tr:'Teberci',ru:'Алебардщик',pl:'Halabardnik'}}});
const P=E.Enemy.prototype;
const lohi=e=>[e.range[0]-e.w/2,e.range[1]-e.w/2];
if(!P.__smugglers&&!P.__rise){P.__rise=true;   // drop-in spawn for encounter waves (shared with Levels 4–8 when loaded)
 const bu=P.update,bd=P.damage;
 P.update=function(dt){if(this.spawnT>0){this.spawnT=Math.max(0,this.spawnT-dt);this.animT+=dt;return}return bu.call(this,dt)};
 P.damage=function(a,d,k){if(this.dead||this.spawnT>0)return'none';return bd.call(this,a,d,k)}}
if(!P.__chain){P.__chain=true;
 const bd=P.damage;
 P.damage=function(amount,dir,kind){
  const run=this.run,st=this.state;if(this.dead||this.spawnT>0)return'none';
  if(this.type==='shieldguard'&&kind!=='bomb'&&st!=='open'&&st!=='thrust'){const front=(dir<0&&this.dir>0)||(dir>0&&this.dir<0);
   if(front){this.flash=.08;this.kb=dir*50;run.fx.spark(this.cx+this.dir*22,this.y+44,'#ffd88a',10);run.fx.text(text(run.lang,'blocked'),this.cx,this.y-10,'#cfe3ff');run.audio.at('shieldBlock',this.cx,{rate:.95+Math.random()*.1});run.hitStop(.03);return'blocked'}}
  if(this.type==='halberdier')amount=Math.round(amount*(st==='stuck'?1.3:.8));
  if(this.type==='shieldguard'&&st==='open')amount=Math.round(amount*1.2);
  const r=bd.call(this,amount,dir,kind);if(r!=='hit'||this.dead)return r;
  if(this.type==='halberdier'||this.type==='shieldguard'){this.kb*=.4;if(['sweepWind','chopWind','sweep','chop','stuck','brace','thrust'].includes(st))this.hurtT=0}
  if(this.type==='bombardier'&&(st==='light'||st==='swatWind')){this.state='recover';this.timer=.5;this.aim=null}
  return r};
 P.shieldguard=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx),[lo,hi]=lohi(this);
  switch(this.state){
   case'brace':this.setAnim('brace');this.timer-=dt;if(this.timer<=0){this.state='thrust';this.timer=.26;this.hitDone=false;run.audio.at('thrust',this.cx)}return;
   case'thrust':{this.setAnim('thrust');this.timer-=dt;this.x=clamp(this.x+this.dir*120*dt,lo,hi);if(!this.hitDone&&this.timer<.2){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-132,y:this.y+18,w:132,h:40};if(overlap(box,p))run.hurtPlayer(16,this.dir,this,240)}
    if(this.timer<=0){this.state='open';this.timer=.85}return}
   case'open':this.setAnim('open');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=1.0}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.5}return}
  if(near&&this.alert){// turns slowly: a hero standing behind him has a moment to strike
   const want=p.x+p.w/2>this.cx?1:-1;if(want!==this.dir){this.turnT=(this.turnT||0)+dt;if(this.turnT>.6){this.dir=want;this.turnT=0}}else this.turnT=0;
   if(d<128&&Math.abs(dy)<60&&this.cool<=0&&want===this.dir){this.state='brace';this.timer=.55;run.audio.at('armorSteps',this.cx,{vol:.6});return}
   if(want===this.dir)this.walkTo(p.x+p.w/2-Math.sign(dx)*100,this.def.chase,dt);else this.setAnim('idle');
   if(overlap(p,this)&&p.dash<=0&&!p.dead){const push=dx>0?this.x+this.w-p.x:-(p.x+p.w-this.x);p.x+=push*.5}}
  else this.patrol(dt)};
 P.bombardier=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx);this.bombCool=Math.max(0,(this.bombCool??1)-dt);
  switch(this.state){
   case'light':this.setAnim('light');this.timer-=dt;this.face(p);if(this.timer>.2)this.aim=run.def.landing(run,this);if(this.timer<=0){run.def.toss(run,this);this.state='toss';this.timer=.3}return;
   case'toss':this.setAnim('toss');this.timer-=dt;if(this.timer<=0){this.state='recover';this.timer=.6;this.aim=null}return;
   case'swatWind':this.setAnim('swatWind');this.timer-=dt;if(this.timer<=0){this.state='swat';this.timer=.2;this.hitDone=false;run.audio.at('swingEnemy',this.cx)}return;
   case'swat':{this.setAnim('swat');this.timer-=dt;if(!this.hitDone){const box={x:this.dir>0?this.cx:this.cx-58,y:this.y+12,w:58,h:this.h-18};if(overlap(box,p)){this.hitDone=true;run.hurtPlayer(10,this.dir,this,280)}}if(this.timer<=0){this.state='recover';this.timer=.5}return}
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.4}return}
  this.setAnim('idle');
  if(near&&this.alert){this.face(p);
   if(d<80&&Math.abs(dy)<60&&this.cool<=0){this.state='swatWind';this.timer=.4;return}
   if(d<170&&Math.abs(dy)<70)this.walkTo(this.cx-Math.sign(dx)*80,this.def.speed,dt);this.face(p);
   if(this.bombCool<=0&&d>=130&&d<470&&Math.abs(dy)<240){this.state='light';this.timer=.65;this.bombCool=3.2;this.aim=run.def.landing(run,this);run.audio.at('fuse',this.cx,{vol:.6})}}
  else this.patrol(dt)};
 P.halberdier=function(dt,dx,dy,near){
  const run=this.run,p=run.p,d=Math.abs(dx);
  switch(this.state){
   case'sweepWind':this.setAnim('sweepWind');this.timer-=dt;if(this.timer<=0){this.state='sweep';this.timer=.3;this.hitDone=false;run.audio.at('halberdSweep',this.cx)}return;
   case'sweep':{this.setAnim('sweep');this.timer-=dt;if(!this.hitDone&&this.timer<.22){this.hitDone=true;const box={x:this.dir>0?this.cx:this.cx-176,y:this.floor-44,w:176,h:44};if(overlap(box,p))run.hurtPlayer(16,this.dir,this,260)}if(this.timer<=0){this.state='recover';this.timer=.55}return}
   case'chopWind':this.setAnim('chopWind');this.timer-=dt;if(this.timer<=0){this.state='chop';this.timer=.24;this.hitDone=false;run.audio.at('chop',this.cx)}return;
   case'chop':{this.setAnim('chop');this.timer-=dt;if(!this.hitDone&&this.timer<.16){this.hitDone=true;const box={x:this.dir>0?this.cx+40:this.cx-160,y:this.y-30,w:120,h:this.h+30};if(overlap(box,p))run.hurtPlayer(20,this.dir,this,300);run.camera.shake=Math.max(run.camera.shake,4);run.fx.debris(this.cx+this.dir*110,this.floor-4,8)}
    if(this.timer<=0){this.state='stuck';this.timer=.95;run.fx.text('!',this.cx,this.y-14,'#ffe38a')}return}
   case'stuck':this.setAnim('stuck');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=1.0}return;
   case'recover':this.setAnim('idle');this.timer-=dt;if(this.timer<=0){this.state='idle';this.cool=.6}return}
  if(near&&this.alert){this.face(p);
   if(d<180&&Math.abs(dy)<60&&this.cool<=0){this.combo=(this.combo||0)+1;if(this.combo%2){this.state='sweepWind';this.timer=.65}else{this.state='chopWind';this.timer=.7}run.audio.at('warcry',this.cx,{vol:.4,gap:2});return}
   this.walkTo(p.x+p.w/2-Math.sign(dx)*130,this.def.chase,dt);this.face(p)}
  else this.patrol(dt)};
}

/* ------------------------------------------------------------------ articulated rigs (original vector art) */
const mixCache=new Map();
function mixHex(a,b,k){const key=a+b+k;let v=mixCache.get(key);if(v)return v;if(!a.startsWith('#'))return a;const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);const ch=s=>[(s>>16)&255,(s>>8)&255,s&255];const A_=ch(pa),B_=ch(pb);v='rgb('+A_.map((x,i)=>Math.round(x+(B_[i]-x)*k)).join(',')+')';mixCache.set(key,v);return v}
const LOOK={
 shieldguard:{hip:46,thigh:23,shin:23,torso:38,lean:.06,head:11,shoulder:18,arm:[18,17],legW:11,armW:9,cadence:7,stride:.42,scale:1.42,
  pal:{skin:'#d9b08c',coat:'#8a1f24',coatD:'#5f1418',hat:'#9aa3ad',band:'#d9b25a',trouser:'#3a3a40',boot:'#22201e',metal:'#b7c0c8',eye:'#ffcf6b'}},
 bombardier:{hip:40,thigh:20,shin:21,torso:32,lean:.12,head:11,shoulder:15,arm:[16,15],legW:8,armW:7,cadence:9,stride:.5,scale:1.45,
  pal:{skin:'#c99a74',coat:'#6b5038',coatD:'#4a3524',hat:'#c23b2e',band:'#2a2a2a',trouser:'#4c4436',boot:'#221c16',metal:'#8f9aa6',eye:'#ffd36b'}},
 halberdier:{hip:54,thigh:27,shin:27,torso:42,lean:.04,head:11,shoulder:18,arm:[20,19],legW:10,armW:8,cadence:7,stride:.45,scale:1.4,
  pal:{skin:'#e0bc98',coat:'#d9b25a',coatD:'#8a1f24',hat:'#aab3bc',band:'#8a1f24',trouser:'#2e2e36',boot:'#1e1c1a',metal:'#c4ccd4',eye:'#bfe9ff'}}};
for(const k in LOOK){const pl=LOOK[k].pal,fl={};for(const c in pl)fl[c]=mixHex(pl[c],'#ffffff',.78);LOOK[k].flashPal=fl}
function limb(c,x0,y0,a1,l1,a2,l2,w,col,boot,greave){
 const kx=x0+Math.sin(a1)*l1,ky=y0+Math.cos(a1)*l1,fx=kx+Math.sin(a2)*l2,fy=ky+Math.cos(a2)*l2;
 c.strokeStyle='#0b0d12';c.lineWidth=w+3;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 c.strokeStyle=col;c.lineWidth=w;c.beginPath();c.moveTo(x0,y0);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke();
 if(greave){c.strokeStyle=greave;c.lineWidth=w*.8;c.beginPath();c.moveTo(kx+(fx-kx)*.15,ky+(fy-ky)*.15);c.lineTo(kx+(fx-kx)*.8,ky+(fy-ky)*.8);c.stroke();c.fillStyle=greave;c.beginPath();c.arc(kx,ky,w*.55,0,TAU);c.fill()}
 if(boot){c.fillStyle=boot;c.strokeStyle='#0b0d12';c.lineWidth=1.5;c.beginPath();c.ellipse(fx+w*.45,fy-1,w*.95,w*.55,0,0,TAU);c.fill();c.stroke()}
 return{kx,ky,fx,fy}}
function arm(c,x0,y0,a1,l1,a2,l2,w,col,skin){const r=limb(c,x0,y0,a1,l1,a2,l2,w,col);c.fillStyle=skin;c.beginPath();c.arc(r.fx,r.fy,w*.62,0,TAU);c.fill();return r}
function pose(e,R,run){
 const st=e.state,t=e.animT,o={lean:R.lean,bob:0,l1:.06,k1:.12,l2:-.08,k2:.1,f1:.2,f2:-.5,b1:-.15,b2:-.3,w:0,crouch:0,glow:0,shield:0};
 const moving=e.anim==='walk'&&!e.dead&&!(e.hurtT>0);
 if(moving){const ph=t*R.cadence*(e.alert?1.3:1),s=Math.sin(ph);o.l1=s*R.stride;o.l2=-s*R.stride;o.k1=Math.max(0,Math.cos(ph))*.9+.05;o.k2=Math.max(0,-Math.cos(ph))*.9+.05;o.bob=-Math.abs(Math.cos(ph))*2.4;o.f1+=-s*.3;o.b1+=s*.3}
 else{o.bob=Math.sin(run.time*2.2+(e.home||0))*.8}
 const k=T=>clamp(1-e.timer/T,0,1);
 switch(e.type){
  case'shieldguard':o.f1=.9;o.f2=-.2;o.b1=1.3;o.b2=.2;
   if(st==='brace'){const q=k(.55);o.crouch=.2*q;o.lean=.15*q;o.l1=.45;o.l2=-.45;o.k1=.5;o.glow=q;o.b1=1.1-.4*q}
   else if(st==='thrust'){o.lean=.25;o.l1=.6;o.l2=-.5;o.k2=.3;o.b1=1.6;o.b2=0}
   else if(st==='open'){o.shield=1;o.f1=.2;o.f2=-.5;o.lean=-.08}
   break;
  case'bombardier':o.f1=.5;o.f2=-.9;
   if(st==='light'){const q=k(.65);o.b1=-.4-2.2*q;o.b2=-.3;o.lean=R.lean-.2*q;o.glow=q;o.l1=-.15;o.l2=.3;o.k1=.3}
   else if(st==='toss'){o.b1=1.4;o.b2=.2;o.lean=R.lean+.25;o.l1=.4;o.l2=-.3}
   else if(st==='swatWind'){const q=k(.4);o.f1=.5-2.4*q;o.glow=q}else if(st==='swat'){o.f1=1.4;o.f2=0;o.lean=R.lean+.2}
   break;
  case'halberdier':o.f1=.4;o.f2=-.7;o.b1=.8;o.b2=-.4;o.w=0;
   if(st==='sweepWind'){const q=k(.65);o.w=1.1*q;o.lean=-.1*q;o.crouch=.18*q;o.glow=q;o.l1=.4;o.l2=-.4}
   else if(st==='sweep'){o.w=-1.4;o.lean=.25;o.crouch=.2;o.l1=.55;o.l2=-.45}
   else if(st==='chopWind'){const q=k(.7);o.w=-2.3*q;o.f1=-1.8*q+.4*(1-q);o.b1=-1.6*q+.8*(1-q);o.lean=-.15*q;o.glow=q}
   else if(st==='chop'||st==='stuck'){o.w=1.35;o.f1=1.3;o.b1=1.25;o.f2=.1;o.b2=.1;o.lean=.4;o.crouch=.25;o.l1=.5;o.l2=-.4;o.k1=.6}
   break}
 if(e.hurtT>0&&!e.dead){o.lean=-.3;o.f1=-.7;o.b1=-1.0;o.l1=.25;o.l2=-.15}
 return o}
/* painted cut-out cast (tools/enemy_cast.py → assets/enemies/level09, posed by enemy-rig.js); the vector rig below
 * stays as the fallback and still provides the telegraph timing (pose().glow) */
const RIG={
 shieldguard:{cast:'level09',char:'shieldguard',scale:1.04,upright:true,uprightTilt:.04,uprightB:true,tiltB:e=>e.state==='thrust'?1.45:e.state==='brace'?1.1:.12,
  fam:{brace:'guard',thrust:'thrust',open:'shieldOpen'},stars:e=>e.state==='open'},
 bombardier:{cast:'level09',char:'bombardier',uprightB:true,fam:{light:'light',toss:'throwing',swatWind:'wind',swat:'swing'},hideWeapon:e=>e.state==='toss'||e.state==='recover'},
 halberdier:{cast:'level09',char:'halberdier',twoHand:true,grip:-.3,windArm:-2.8,swingArm:1.3,fam:{sweepWind:'sweepWindLow',sweep:'sweepLow',chopWind:'wind',chop:'swing',stuck:'planted'},stars:e=>e.state==='stuck'}};
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
  if(e.type==='bombardier'){run.fx.glow(c,o.handB[0],o.handB[1]-14,20,'rgba(255,170,70,',.55);if(st==='light')run.fx.glow(c,o.hand[0],o.hand[1]-10,14+10*Math.sin(run.time*30),'rgba(255,227,138,',.9)}
  Rig.hud(c,run,e,o,{bar:48,stars:R.stars})}
 c.restore();c.imageSmoothingEnabled=false;return true}
function drawFoe(run,c,e){
 if(drawRigFoe(run,c,e))return true;
 const R=LOOK[e.type];if(!R)return false;
 const alpha=e.dead?clamp(1-(e.deadT-.65)/.6,0,1):1;if(alpha<=0)return true;
 const pal=e.flash>0?R.flashPal:R.pal,o=pose(e,R,run),st=e.state;
 const fx=Math.round(e.cx),fy=e.floor;let dy=0,rot=0;if(e.spawnT>0)dy=-e.spawnT*420;if(e.dead)rot=-Math.min(1.4,e.deadT*3.4);
 if(!e.dead&&!(e.spawnT>0))telegraph(run,c,e,o);
 c.save();c.globalAlpha=alpha;c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(fx,fy+1,R.shoulder+18,5,0,0,TAU);c.fill();
 c.translate(fx,fy+dy);if(e.dir<0)c.scale(-1,1);c.scale(R.scale,R.scale);if(rot){c.translate(-R.hip*.4,0);c.rotate(rot);c.translate(R.hip*.4,0)}
 c.lineCap='round';c.lineJoin='round';
 const armored=e.type!=='bombardier',gv=armored?pal.metal:null,hipY=-(R.thigh+R.shin)*(1-o.crouch*.35)+o.bob;
 limb(c,-3,hipY,o.l2,R.thigh,o.l2-o.k2,R.shin,R.legW,mixHex(pal.trouser,'#000000',.25),pal.boot,gv);
 const lean=o.lean,sx=Math.sin(lean)*R.torso,sy=hipY-Math.cos(lean)*R.torso;
 armAndWeapon(run,c,e,R,pal,o,sx-3,sy+2,true);
 torso(c,e,R,pal,o,0,hipY,run);head(c,e,R,pal,o,sx,sy,lean,run);
 limb(c,3,hipY,o.l1,R.thigh,o.l1-o.k1,R.shin,R.legW,pal.trouser,pal.boot,gv);
 armAndWeapon(run,c,e,R,pal,o,sx+2,sy+3,false);
 c.restore();
 if(st==='stuck'||st==='open'&&e.type==='shieldguard')for(let i=0;i<3;i++){const a=run.time*4+i*TAU/3;c.fillStyle='#ffe38a';c.fillRect(e.cx+Math.cos(a)*16-2,e.floor-(R.hip+R.torso+R.head*2.6)*R.scale-6+Math.sin(a)*4,4,4)}
 if(!e.dead&&e.hp<e.max&&!(e.spawnT>0)){const w=48,by=e.floor-(R.hip+R.torso+R.head*2.6)*R.scale-14;c.fillStyle='#0b0f18cc';c.fillRect(e.cx-w/2,by,w,6);c.fillStyle='#e8484f';c.fillRect(e.cx-w/2+1,by+1,(w-2)*e.hp/e.max,4)}
 return true}
function torso(c,e,R,pal,o,hx,hy,run){
 const w=R.shoulder,T=R.torso;c.save();c.translate(hx,hy);c.rotate(o.lean);c.strokeStyle='#0b0d12';c.lineWidth=2;
 if(e.type==='bombardier'){// leather apron, bandolier of bombs
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.75,4);c.lineTo(-w*.85,-T*.95);c.quadraticCurveTo(0,-T*1.08,w*.85,-T*.95);c.lineTo(w*.8,4);c.closePath();c.fill();c.stroke();
  c.fillStyle=pal.coatD;c.beginPath();c.moveTo(-w*.55,-T*.55);c.lineTo(w*.6,-T*.55);c.lineTo(w*.7,10);c.lineTo(-w*.6,10);c.closePath();c.fill();
  c.strokeStyle='#2a1a10';c.lineWidth=4;c.beginPath();c.moveTo(-w*.8,-T*.9);c.lineTo(w*.7,-T*.25);c.stroke();for(let i=0;i<3;i++){c.fillStyle='#2b2b30';c.beginPath();c.arc(-w*.45+i*w*.45,-T*.72+i*T*.15,4,0,TAU);c.fill()}}
 else{// fortress livery under a breastplate
  c.fillStyle=pal.coat;c.beginPath();c.moveTo(-w*.8,6);c.lineTo(-w*.9,-T*.95);c.quadraticCurveTo(0,-T*1.1,w*.9,-T*.95);c.lineTo(w*.8,6);c.closePath();c.fill();c.stroke();
  const g=c.createLinearGradient(-w,0,w,0);g.addColorStop(0,mixHex(pal.metal,'#000000',.35));g.addColorStop(.5,pal.metal);g.addColorStop(1,mixHex(pal.metal,'#000000',.45));c.fillStyle=g;c.beginPath();c.moveTo(-w*.75,-T*.2);c.quadraticCurveTo(-w*.85,-T*.9,0,-T*.98);c.quadraticCurveTo(w*.85,-T*.9,w*.75,-T*.2);c.quadraticCurveTo(0,-T*.05,-w*.75,-T*.2);c.closePath();c.fill();c.stroke();
  c.strokeStyle=pal.band;c.lineWidth=2;c.beginPath();c.moveTo(0,-T*.9);c.lineTo(0,-T*.25);c.stroke();c.fillStyle=pal.coatD;c.fillRect(-w*.8,-6,w*1.6,8);c.fillStyle=pal.band;c.fillRect(-3,-7,6,9)}
 c.restore()}
function head(c,e,R,pal,o,sx,sy,lean,run){
 const r=R.head,hx=sx+Math.sin(lean)*r*.9,hy=sy-Math.cos(lean)*r*.9-2;c.save();c.translate(hx,hy);c.rotate(lean*.6+(e.hurtT>0?-.25:0));c.strokeStyle='#0b0d12';c.lineWidth=2;
 c.fillStyle=pal.skin;c.beginPath();c.ellipse(1,0,r*.85,r,0,0,TAU);c.fill();c.stroke();c.fillStyle=pal.eye;c.beginPath();c.arc(r*.45,-r*.12,1.9,0,TAU);c.fill();
 if(e.type==='shieldguard'){// morion helmet with a crest
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*1.5,-r*.15);c.quadraticCurveTo(-r*1.1,-r*1.4,0,-r*1.35);c.quadraticCurveTo(r*1.1,-r*1.4,r*1.6,-r*.15);c.quadraticCurveTo(0,-r*.55,-r*1.5,-r*.15);c.closePath();c.fill();c.stroke();
  c.beginPath();c.moveTo(-r*.6,-r*1.3);c.quadraticCurveTo(0,-r*2.1,r*.7,-r*1.3);c.closePath();c.fill();c.stroke();c.fillStyle='#3a2a1a';c.fillRect(-r*.2,r*.45,r*.9,r*.25)}
 else if(e.type==='halberdier'){// sallet with a red plume and visor slit
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*1.2,r*.3);c.quadraticCurveTo(-r*1.3,-r*1.4,0,-r*1.3);c.quadraticCurveTo(r*1.3,-r*1.2,r*1.1,r*.05);c.lineTo(r*.2,r*.05);c.lineTo(r*.2,r*.5);c.lineTo(-r*1.2,r*.5);c.closePath();c.fill();c.stroke();
  c.fillStyle='#111';c.fillRect(r*.1,-r*.3,r*.95,r*.18);const sw=Math.sin(run.time*4+(e.home||0))*2;c.fillStyle=pal.band;c.beginPath();c.moveTo(-r*.3,-r*1.25);c.quadraticCurveTo(-r*1.8,-r*2.2+sw,-r*2.6,-r*.9+sw);c.quadraticCurveTo(-r*1.4,-r*1.3,-r*.3,-r*1.0);c.fill()}
 else{// red bandana, smoke goggles, soot
  c.fillStyle=pal.hat;c.beginPath();c.moveTo(-r*.95,-r*.2);c.quadraticCurveTo(0,-r*1.5,r*.95,-r*.25);c.lineTo(r*.9,-r*.45);c.quadraticCurveTo(0,-r*1.1,-r*.9,-r*.45);c.closePath();c.fill();c.beginPath();c.moveTo(-r*.9,-r*.35);c.lineTo(-r*1.6,-r*.05+Math.sin(run.time*6)*2);c.lineTo(-r*1.25,r*.3);c.closePath();c.fill();
  c.fillStyle='#2a2a2a';c.fillRect(-r*.1,-r*.4,r*1.05,r*.42);c.fillStyle='#ffb04a';c.beginPath();c.arc(r*.6,-r*.2,r*.22,0,TAU);c.fill();c.fillStyle='rgba(40,40,40,.4)';c.beginPath();c.arc(r*.3,r*.5,r*.4,0,TAU);c.fill()}
 c.restore()}
function armAndWeapon(run,c,e,R,pal,o,x,y,back){
 const armored=e.type!=='bombardier',col=back?pal.coatD:(armored?pal.metal:pal.coat),[u,f]=R.arm,a1=back?o.b1:o.f1,a2=back?o.b2:o.f2;
 const r=arm(c,x,y,a1,u,a1+a2,f,R.armW,col,pal.skin);const ha=a1+a2;c.save();c.translate(r.fx,r.fy);
 if(e.type==='shieldguard'){
  if(back){// the spear, held low behind the shield; it juts out on the thrust
   c.rotate(-ha+Math.PI/2+(e.state==='thrust'?0:.1));const ext=e.state==='thrust'?40:0;c.strokeStyle='#5a3d24';c.lineWidth=4;c.beginPath();c.moveTo(-30,0);c.lineTo(50+ext,0);c.stroke();c.fillStyle=pal.metal;c.strokeStyle='#0b0d12';c.lineWidth=1.2;c.beginPath();c.moveTo(48+ext,-6);c.lineTo(66+ext,0);c.lineTo(48+ext,6);c.closePath();c.fill();c.stroke();
   if(o.glow>0)run.fx.glow(c,60+ext,0,24+16*o.glow,'rgba(255,90,60,',.4+.4*o.glow)}
  else{// tower shield with the anchor-and-chain emblem (lowered while open)
   c.rotate(-ha+(o.shield?.9:0));const sw=26,sh=58;c.fillStyle=pal.coat;c.strokeStyle='#0b0d12';c.lineWidth=2.5;c.beginPath();c.roundRect(-4,-sh/2,sw,sh,[4,4,10,10]);c.fill();c.stroke();c.strokeStyle=pal.metal;c.lineWidth=3;c.beginPath();c.roundRect(-1,-sh/2+3,sw-6,sh-6,[3,3,8,8]);c.stroke();
   c.strokeStyle=pal.band;c.lineWidth=2.5;c.beginPath();c.moveTo(sw/2-2,-14);c.lineTo(sw/2-2,12);c.moveTo(sw/2-10,-6);c.lineTo(sw/2+6,-6);c.stroke();c.beginPath();c.arc(sw/2-2,6,8,.2,Math.PI-.2);c.stroke()}}
 else if(e.type==='bombardier'&&back&&!(e.state==='toss'||e.state==='recover'&&e.aim===null&&e.tossT>run.time)){// the bomb, fuse sputtering while lit
  c.fillStyle='#2b2b30';c.strokeStyle='#0b0d12';c.lineWidth=1.5;c.beginPath();c.arc(0,-8,8,0,TAU);c.fill();c.stroke();c.strokeStyle='#8a6a3a';c.lineWidth=2;c.beginPath();c.moveTo(4,-14);c.quadraticCurveTo(8,-20,6,-24);c.stroke();
  if(e.state==='light'){run.fx.glow(c,6,-25,14+10*o.glow,'rgba(255,190,80,',.9);c.fillStyle='#fff3b0';c.fillRect(5+Math.random()*2-1,-26+Math.random()*2-1,2,2)}}
 else if(e.type==='bombardier'&&!back){// a burning torch (swat)
  c.rotate(-ha+Math.PI/2);c.strokeStyle='#5a3d24';c.lineWidth=3;c.beginPath();c.moveTo(-6,0);c.lineTo(20,0);c.stroke();run.fx.glow(c,24,0,16,'rgba(255,170,70,',.6);c.fillStyle='#ffb04a';c.beginPath();c.arc(24,0,4,0,TAU);c.fill()}
 else if(e.type==='halberdier'&&!back){// the halberd: long pole, axe blade, spike
  c.rotate(-ha+Math.PI/2-.9+o.w);c.strokeStyle='#5a3d24';c.lineWidth=4;c.beginPath();c.moveTo(-40,0);c.lineTo(64,0);c.stroke();
  c.fillStyle=pal.metal;c.strokeStyle='#0b0d12';c.lineWidth=1.3;c.beginPath();c.moveTo(54,-2);c.lineTo(62,-18);c.quadraticCurveTo(74,-10,72,4);c.lineTo(54,4);c.closePath();c.fill();c.stroke();c.beginPath();c.moveTo(64,-3);c.lineTo(80,0);c.lineTo(64,3);c.fill();c.stroke();
  if(o.glow>0)run.fx.glow(c,66,-6,26+18*o.glow,'rgba(255,90,60,',.35+.4*o.glow)}
 c.restore()}
function telegraph(run,c,e,o){
 const st=e.state;
 if(e.type==='shieldguard'&&st==='brace'){const q=o.glow;c.save();c.strokeStyle='rgba(255,70,40,'+(.3+.55*q)+')';c.lineWidth=3;c.setLineDash([10,7]);c.beginPath();c.moveTo(e.cx+e.dir*20,e.y+38);c.lineTo(e.cx+e.dir*132,e.y+38);c.stroke();c.restore()}
 else if(e.type==='bombardier'&&st==='light'&&e.aim){const q=o.glow;c.save();c.strokeStyle='rgba(255,150,60,'+(.25+.45*q)+')';c.lineWidth=2;c.setLineDash([6,7]);const sx=e.cx+e.dir*10,sy=e.y+8,tx=e.aim.x,ty=e.aim.y;c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo((sx+tx)/2,Math.min(sy,ty)-160,tx,ty-6);c.stroke();c.setLineDash([]);c.strokeStyle='rgba(255,70,40,'+(.4+.5*q)+')';c.lineWidth=3;c.beginPath();c.ellipse(tx,ty-2,80*(.6+.4*q),11,0,0,TAU);c.stroke();c.restore()}
 else if(e.type==='halberdier'){
  if(st==='sweepWind'){const q=o.glow;c.save();c.fillStyle='rgba(255,70,40,'+(.1+.25*q)+')';c.fillRect(e.dir>0?e.cx:e.cx-176,e.floor-10,176,10);c.strokeStyle='rgba(255,90,60,'+(.4+.5*q)+')';c.lineWidth=2;c.strokeRect(e.dir>0?e.cx:e.cx-176,e.floor-10,176,10);c.restore()}
  if(st==='chopWind'){const q=o.glow,x=e.cx+e.dir*100;c.save();c.fillStyle='rgba(255,70,40,'+(.08+.2*q)+')';c.fillRect(x-40,e.y-30,80,e.h+30);c.strokeStyle='rgba(255,90,60,'+(.4+.5*q)+')';c.lineWidth=2;c.setLineDash([8,6]);c.strokeRect(x-40,e.y-30,80,e.h+30);c.restore()}}}

/* ------------------------------------------------------------------ procedural textures */
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function makeTextures(){
 const T={},R=rng(909);
 const ashlar=(base,lite,dark,bw,bh,moss)=>{const c=canvas(256,256),x=c.getContext('2d');x.fillStyle=dark;x.fillRect(0,0,256,256);
  for(let row=0;row<256/bh;row++){const off=row%2?bw/2:0;for(let col=-1;col<=256/bw;col++){const v=R();x.fillStyle=v<.33?base:v<.66?lite:mixHex(base,'#000000',.12);x.fillRect(col*bw+off+2,row*bh+2,bw-4,bh-4);x.fillStyle='rgba(255,255,255,.06)';x.fillRect(col*bw+off+2,row*bh+2,bw-4,3);x.fillStyle='rgba(0,0,0,.22)';x.fillRect(col*bw+off+2,row*bh+bh-6,bw-4,4);
   if(moss&&R()<.12){x.fillStyle=moss;x.fillRect(col*bw+off+4,row*bh+bh-12,10+R()*20,8)}}}return c};
 T.wall=ashlar('#8a8276','#9a9286','#3a352f',64,40,'rgba(70,90,60,.4)');
 T.quay=ashlar('#7a7368','#857e72','#2e2a25',48,32,'rgba(60,80,70,.45)');
 T.flag=ashlar('#9b8f7c','#a99c88','#4a4238',72,30,null);
 T.dungeon=ashlar('#3c3833','#47423c','#1a1816',56,36,'rgba(50,70,50,.4)');
 return T}
function pat(run,c,name){run.pats??=new Map();let m=run.pats.get(c);if(!m){m={};run.pats.set(c,m)}return m[name]??=c.createPattern(run.tex[name],'repeat')}
/* fortress dressing (asset integration): Market street lanterns on the quays and courtyard, Ruins warning signs,
 * broken walls and a lion relief, graded for the sunset. The painted brick quay is kept — the tilesets' natural rock
 * ground read as earth, not fortification. Rendering only (env-art.js, ?envArt=0). */
const ENV=window.PirateEnvArt;
const ENV_SETS={fort:{atlas:A9+'env-fort',ranges:[[0,11400]],
 props:[['lantern',560],['bucket',600],['rock_a',1010],['lantern',1680],['sign_skull',2240],['wall',3760],['lantern',4120],['anvil',4180],['relief',4470],['lantern',4560],
  ['sign_skull',9960],['lantern',10120],['rock_a',10420],['lantern',10760],['wall',11160]],glow:{lantern:[-.32,.3,50]}}};
function paintSolid(run,c,s,L,R,T,B){
 const x0=Math.max(s.x,L),x1=Math.min(s.x+s.w,R),y0=Math.max(s.y,T),y1=Math.min(s.y+s.h,B);if(x1<=x0||y1<=y0)return true;
 c.save();c.beginPath();c.rect(s.x,s.y,s.w,s.h);c.clip();c.fillStyle=pat(run,c,s.style in run.tex?s.style:'wall');c.fillRect(x0,y0,x1-x0,y1-y0);
 const g=c.createLinearGradient(0,s.y,0,s.y+320);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(10,6,4,.6)');c.fillStyle=g;c.fillRect(x0,Math.max(y0,s.y+16),x1-x0,y1-Math.max(y0,s.y+16));c.restore();
 if(s.style==='wall'&&s.h>200&&s.y<900){// crenellated parapet on wall tops
  c.fillStyle='#6f675c';c.fillRect(s.x,s.y-4,s.w,10);c.fillStyle='rgba(255,240,210,.18)';c.fillRect(s.x,s.y-4,s.w,2)}
 else if(s.style==='quay'){c.fillStyle='#5a5348';c.fillRect(s.x,s.y,s.w,8);c.fillStyle='rgba(255,240,210,.2)';c.fillRect(s.x,s.y,s.w,2);for(let x=s.x+60;x<s.x+s.w-20;x+=260){c.fillStyle='#2b2620';c.fillRect(x,s.y-14,14,14);c.fillStyle='#3d362e';c.fillRect(x-3,s.y-16,20,4)}}   // bollards
 else if(s.style==='flag'){c.fillStyle='#857a68';c.fillRect(s.x,s.y,s.w,6);c.fillStyle='rgba(255,240,210,.22)';c.fillRect(s.x,s.y,s.w,2)}
 else if(s.style==='dungeon'){c.fillStyle='#2a2622';c.fillRect(s.x,s.y,s.w,5);c.fillStyle='rgba(120,160,140,.15)';c.fillRect(s.x,s.y,s.w,1.5)}
 if(s.style==='wall'&&s.y<500){c.fillStyle='#1a1816';c.fillRect(s.x,s.y+s.h-8,s.w,8)}
 c.fillStyle='rgba(0,0,0,.3)';c.fillRect(s.x+s.w-4,s.y+6,4,Math.min(s.h,220));c.fillStyle='rgba(255,255,255,.08)';c.fillRect(s.x,s.y+6,3,Math.min(s.h,220));
 return true}
function paintLedge(run,c,l){
 if(l.look==='wood'){c.fillStyle='rgba(0,0,0,.3)';c.fillRect(l.x+4,l.y+16,l.w-8,5);for(let x=l.x;x<l.x+l.w;x+=24){c.fillStyle=((x/24)|0)%2?'#6a4a30':'#5a3e26';c.fillRect(x,l.y,Math.min(23,l.x+l.w-x),12)}c.fillStyle='#9a7a54';c.fillRect(l.x,l.y,l.w,2);c.fillStyle='#2a1c10';c.fillRect(l.x,l.y+12,l.w,4);return true}
 c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(l.x+l.w/2,l.y+26,l.w/2,5,0,0,TAU);c.fill();c.save();c.beginPath();c.rect(l.x,l.y,l.w,20);c.clip();c.fillStyle=pat(run,c,'wall');c.fillRect(l.x,l.y,l.w,20);c.restore();
 c.fillStyle='#6f675c';c.fillRect(l.x,l.y,l.w,4);c.fillStyle='rgba(255,240,210,.2)';c.fillRect(l.x,l.y,l.w,1.5);c.fillStyle='#3a352f';for(let x=l.x+12;x<l.x+l.w;x+=40){c.beginPath();c.moveTo(x,l.y+20);c.lineTo(x+10,l.y+34);c.lineTo(x+20,l.y+20);c.fill()}return true}
function drawMover(run,c,m){
 if(m.look==='cage'){const top=Math.min(...m.range)-160;c.strokeStyle='#4b4540';c.lineWidth=3;c.beginPath();c.moveTo(m.x+m.w/2,top);c.lineTo(m.x+m.w/2,m.y-90);c.stroke();
  c.fillStyle='#3a332c';c.fillRect(m.x,m.y,m.w,12);c.fillStyle='#8a7d6a';c.fillRect(m.x,m.y,m.w,2);c.strokeStyle='rgba(120,110,95,.85)';c.lineWidth=2;c.strokeRect(m.x+2,m.y-90,m.w-4,90);for(let x=m.x+14;x<m.x+m.w-4;x+=16){c.beginPath();c.moveTo(x,m.y-90);c.lineTo(x,m.y-56);c.stroke()}
  c.save();c.translate(m.x+m.w/2,top);c.rotate(run.time*1.6);c.strokeStyle='#c9a24a';c.lineWidth=4;c.beginPath();c.arc(0,0,16,0,TAU);c.stroke();for(let k=0;k<8;k++){const a=k/8*TAU;c.beginPath();c.moveTo(Math.cos(a)*16,Math.sin(a)*16);c.lineTo(Math.cos(a)*22,Math.sin(a)*22);c.stroke()}c.restore()}}

/* ------------------------------------------------------------------ backdrop: sunset sea, the fortress towers and their chains */
function makeBack(run){
 const R=rng(99),B={};
 B.cloud=canvas(1024,160);let x=B.cloud.getContext('2d');for(let i=0;i<70;i++){const cx=R()*1024,cy=50+R()*70,r=30+R()*60;const g=x.createRadialGradient(cx,cy,0,cx,cy,r);g.addColorStop(0,'rgba(255,190,150,.55)');g.addColorStop(1,'rgba(255,190,150,0)');for(const dx of[-1024,0,1024]){x.fillStyle=g;x.save();x.translate(dx,0);x.fillRect(cx-r,cy-r,r*2,r*2);x.restore()}}
 B.fort=canvas(1400,420);x=B.fort.getContext('2d');x.fillStyle='#3a2a2e';
 for(const [tx,tw,th] of[[60,90,300],[300,70,240],[520,120,360],[800,80,260],[1020,110,330],[1260,90,280]]){x.fillRect(tx,420-th,tw,th);for(let k=0;k<tw;k+=18)x.fillRect(tx+k,420-th-12,10,12);x.fillStyle='rgba(255,180,120,.35)';x.fillRect(tx+tw*.4,420-th+40,8,14);x.fillStyle='#3a2a2e'}
 x.fillRect(0,330,1400,90);for(let k=0;k<1400;k+=20)x.fillRect(k,318,12,12);
 return B}
function drawBackground(run,c){
 const W=E.W,cam=run.camera,t=run.time,B=run.back,s=run.state;
 if(!run.sky||run.skyW!==W){run.skyW=W;run.sky=canvas(W,H);const x=run.sky.getContext('2d'),g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2c3a66');g.addColorStop(.35,'#8a5a78');g.addColorStop(.6,'#e88a5a');g.addColorStop(.75,'#f5c27a');g.addColorStop(1,'#6a5040');x.fillStyle=g;x.fillRect(0,0,W,H)}
 c.drawImage(run.sky,0,0);const py=clamp((cam.y-300)*.05,-20,40);
 // low sun and its path on the sea
 const sx=W*.68-cam.x*.01,sy=300-py;run.fx.glow(c,sx,sy,200,'rgba(255,200,120,',.6);c.fillStyle='#ffe2a0';c.beginPath();c.arc(sx,sy,34,0,TAU);c.fill();
 const off=-((cam.x*.04+t*5)%1024);c.globalAlpha=.85;for(let x=off;x<W;x+=1024)c.drawImage(B.cloud,x,40-py);c.globalAlpha=1;
 const sea=340-py*2;const g=c.createLinearGradient(0,sea,0,H);g.addColorStop(0,'#c9765a');g.addColorStop(.25,'#4a4a6a');g.addColorStop(1,'#1c2236');c.fillStyle=g;c.fillRect(0,sea,W,H-sea);
 c.fillStyle='rgba(255,220,160,.55)';for(let i=0;i<24;i++){const k=Math.sin(t*1.6+i*1.9);if(k<.3)continue;c.globalAlpha=(k-.3)*.8;c.fillRect(sx-30+((i*29)%60)-i,sea+6+i*3.2,14+i,1.6)}c.globalAlpha=1;
 // the fortress skyline (parallax .1) and its three giant chains
 const fx=-(cam.x*.1)%1400-200;for(let x=fx;x<W+1400;x+=1400)c.drawImage(B.fort,x,sea-380);
 const chainX=[W*.3,W*.55,W*.8].map((x,i)=>x+(4000+i*2500-cam.x)*.06);
 chainX.forEach((x,i)=>{if(s.chains[i])return;c.strokeStyle='#2a1e22';c.lineWidth=7;c.setLineDash([14,6]);c.beginPath();c.moveTo(x,sea-300);c.quadraticCurveTo(x+60,sea-150,x+130,sea-20);c.stroke();c.setLineDash([])});
 // gulls
 c.strokeStyle='rgba(40,30,40,.7)';c.lineWidth=1.6;for(let i=0;i<5;i++){const gx=((i*230+t*(30+i*6))%(W+200))-100,gy=110+i*28+Math.sin(t*2+i)*8,f=Math.sin(t*8+i)*4;c.beginPath();c.moveTo(gx-8,gy+f);c.quadraticCurveTo(gx-4,gy-4,gx,gy);c.quadraticCurveTo(gx+4,gy-4,gx+8,gy+f);c.stroke()}
 if(run.goldK>0){c.fillStyle='rgba(255,140,80,'+(run.goldK*.15)+')';c.fillRect(0,0,W,H)}
}
function drawBack(run,c){
 const cam=run.camera,W=E.W,L=cam.x-60,R=cam.x+W+60,cfg=run.cfg,t=run.time;
 // dungeon back wall with cells and chains
 if(R>4800&&L<7200){c.save();c.beginPath();c.rect(4800,880,2400,260);c.clip();c.fillStyle=pat(run,c,'dungeon');c.fillRect(Math.max(4800,L),880,Math.min(7200,R)-Math.max(4800,L),260);c.fillStyle='rgba(4,3,2,.45)';c.fillRect(Math.max(4800,L),880,Math.min(7200,R)-Math.max(4800,L),260);
  for(const [x,y] of cfg.decor.cells){if(x<L-120||x>R+120)continue;c.fillStyle='#120f0d';c.fillRect(x-60,y-150,120,150);c.strokeStyle='#4a4540';c.lineWidth=4;for(let k=x-54;k<=x+54;k+=14){c.beginPath();c.moveTo(k,y-150);c.lineTo(k,y);c.stroke()}c.fillRect(x-60,y-150,120,6);c.fillStyle='rgba(30,26,22,.8)';c.beginPath();c.ellipse(x+10,y-20,14,18,0,0,TAU);c.fill()}
  c.strokeStyle='#3a3530';c.lineWidth=3;for(let x=Math.ceil(Math.max(4800,L)/300)*300;x<Math.min(7200,R);x+=300){c.setLineDash([6,4]);c.beginPath();c.moveTo(x,880);c.quadraticCurveTo(x+40,960,x+80,890);c.stroke();c.setLineDash([])}
  c.restore()}
 // the great winch chain rising to its tower, the gatehouse anchor chain
 const w=cfg.chains.winch,s=run.state;if(!s.chains[0]&&w.x+400>L&&w.x-300<R){c.strokeStyle='#2c2622';c.lineWidth=10;c.setLineDash([16,6]);c.beginPath();c.moveTo(w.x,w.y-60);c.lineTo(w.tower[0],w.tower[1]);c.stroke();c.setLineDash([]);c.fillStyle='#4a4038';c.fillRect(w.tower[0]-30,w.tower[1]-60,80,560)}
 if(R>9200){const a=cfg.chains.cannon.anchor;c.fillStyle='#4a3f38';c.fillRect(a[0]-80,a[1]-160,200,600);for(let k=0;k<200;k+=24)c.fillRect(a[0]-80+k,a[1]-176,14,16);
  if(!s.chains[2]){c.strokeStyle='#2c2622';c.lineWidth=10;c.setLineDash([16,6]);c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(cfg.bridge.x+cfg.bridge.w,cfg.bridge.y-280);c.stroke();c.setLineDash([])}
  c.fillStyle='#2b2420';c.beginPath();c.arc(a[0],a[1],14,0,TAU);c.fill()}
 // the great gate towers
 if(R>10900){const gt=cfg.bridge.gate;c.fillStyle='#5a4e44';c.fillRect(gt.x-120,gt.top-200,320,gt.floor-gt.top+200);for(let k=0;k<320;k+=26)c.fillRect(gt.x-120+k,gt.top-216,16,16);c.fillStyle='#1a1410';c.beginPath();c.roundRect(gt.x-30,gt.top,90,gt.floor-gt.top,[45,45,0,0]);c.fill()}
}
function drawDecor(run,c){
 const cam=run.camera,W=E.W,L=cam.x-80,R=cam.x+W+80,d=run.cfg.decor,t=run.time;
 for(const [x,y] of d.banners){if(x<L||x>R)continue;c.fillStyle='#3a2a1a';c.fillRect(x-3,y-170,6,170);const sw=Math.sin(t*2+x)*4;c.fillStyle='#8a1f24';c.beginPath();c.moveTo(x+3,y-166);c.lineTo(x+50+sw,y-160);c.lineTo(x+46+sw,y-110);c.lineTo(x+3,y-104);c.closePath();c.fill();c.strokeStyle='#d9b25a';c.lineWidth=2;c.beginPath();c.arc(x+26+sw*.5,y-134,9,0,TAU);c.stroke()}
 for(const [x,y] of d.torches){if(x<L||x>R)continue;c.fillStyle='#2b2620';c.fillRect(x-3,y-110,6,26);c.fillRect(x-8,y-114,16,5);run.fire(c,x,y-114,.6,true)}
 for(const [x,y] of d.crates){if(x<L||x>R)continue;c.fillStyle='#6a4a30';c.fillRect(x-24,y-46,48,46);c.strokeStyle='#3a2a1a';c.lineWidth=3;c.strokeRect(x-24,y-46,48,46);c.beginPath();c.moveTo(x-24,y-46);c.lineTo(x+24,y);c.stroke()}
 for(const [x,y] of d.barrels){if(x<L||x>R)continue;c.fillStyle='#5a3e26';c.beginPath();c.roundRect(x-18,y-50,36,50,8);c.fill();c.fillStyle='#2b2b30';c.fillRect(x-18,y-40,36,4);c.fillRect(x-18,y-14,36,4);c.fillStyle='#2b2b30';c.beginPath();c.arc(x+30,y-10,10,0,TAU);c.fill()}   // powder barrel + cannonball
}
function weather(run,c){const W=E.W,t=run.time,inside=run.def.inside(run);if(inside)return;c.save();c.fillStyle='rgba(255,220,170,.35)';for(let i=0;i<24;i++){const x=((i*211+t*10-run.camera.x*.5)%(W+20)+W+20)%(W+20),y=((i*67+Math.sin(t*.7+i)*30)%H+H)%H;c.globalAlpha=.25+.2*Math.sin(t+i);c.fillRect(x,y,2,2)}c.restore()}   // drifting embers / dust in the low sun

/* ------------------------------------------------------------------ the level definition */
const def={
 id:9,name:{en:'Chain Fortress',az:'Zəncirli Qala'},config:BASE+'level-09.json',base:BASE,images:[],
 rig:{pose,LOOK},
 title:lang=>text(lang,'title'),blurb:lang=>text(lang,'blurb'),text:(lang,k)=>text(lang,k),
 initialState:()=>({enc:{},pins:[0,0,0],chains:[0,0,0],gears:null,gearGate:false,trap:false,aim:0,bridge:false,gateOpen:false,tower:false,keepLedge:false}),
 persist(run){const s=run.state;return{enc:{...s.enc},pins:[...s.pins],chains:[...s.chains],gears:[...s.gears],gearGate:s.gearGate,trap:s.trap,aim:s.aim,bridge:s.bridge,gateOpen:s.gateOpen,tower:s.tower,keepLedge:s.keepLedge}},
 async prepare(run){
  run.tex=makeTextures();run.back=makeBack(run);run.env=await ENV?.load(run,ENV_SETS);
  const extra=window.PirateMusic?{}:Object.fromEntries(Object.entries(MUSIC).map(([k,f])=>['m_'+k,f]));
  run.audioReady=Promise.all([run.audioReady,run.audio.load(A9,SFX),Object.keys(extra).length?run.audio.load(AM,extra):null]);
  const pm=run.audio.playMusic.bind(run.audio);run.audio.playMusic=(name,fade)=>window.PirateMusic?pm(name,fade):pm(MUSIC[name]?'m_'+name:name,fade);
  run.lightBuf=canvas(8,8);
  const sk=run.skin;if(sk&&!sk.__l9){sk.__l9=true;const base=sk.draw.bind(sk);sk.draw=(c,p,r)=>{const cine=r?.cine;if(r?.def===def&&cine&&cine.heroPose)return def.drawCineHero(r,c,p,base);return base(c,p,r)}}
  await loadRig(run,'level09');
 },
 setup(run,save){
  const c=run.cfg,s=run.state;
  for(const k of['pins','chains'])if(!Array.isArray(s[k])||s[k].length!==3)s[k]=[0,0,0];
  if(!Array.isArray(s.gears)||s.gears.length!==c.gears.list.length)s.gears=[...c.gears.start];
  if(!s.enc||typeof s.enc!=='object')s.enc={};s.aim=clamp(+s.aim||0,0,c.chains.cannon.aims-1);
  run.banner={t:4.5,text:text(run.lang,'title')};run.rand=rng(91);
  run.marks=[];run.bombs=[];run.batteryT=2;run.shells=0;run.heat=0;run.winchT=s.chains[0]?0:-1;run.shot=null;run.chainFx=[];run.cannonCool=0;run.gearSpin=c.gears.list.map(()=>0);
  run.bridgeK=s.bridge?0:1;run.gateK=s.gateOpen?0:1;run.portK=s.gearGate?0:1;run.trapK=s.trap?0:1;
  run.pending={};for(const e of[...run.enemies]){const d=c.enemies.find(q=>q.id===e.id);if(d?.wave){const[enc,w]=d.wave.split(':');(run.pending[enc]??=[]).push({e,w:+w,d});run.enemies=run.enemies.filter(q=>q!==e)}}
  run.enc={id:null,wave:0,delay:0};run.walls={};for(const k of c.encounters)run.walls[k.id]=0;run.cine=null;run.goldK=0;
  if(!run.skipBtn&&run.root){const b=document.createElement('button');b.className='pl-skip';b.textContent=text(run.lang,'skip');b.style.cssText='position:absolute;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:5;padding:8px 14px;border-radius:12px;border:2px solid #d8b56a;background:#0d1a29e6;color:#ffe3a0;font:800 14px Arial;display:none';b.onclick=e=>{e.stopPropagation();def.skipStory(run)};run.root.append(b);run.skipBtn=b;
   run.root.addEventListener('pointerdown',e=>{if(run.cine&&run.cine.stage==='story'&&!e.target.closest('button'))def.advance(run)})}
 },
 onStart(run,resumed){run.banner={t:4.5,text:text(run.lang,'title')};run.hinted={};run.hintQueue=resumed?[]:['hShell'];run.hintT=5.5;run.hintsAt={g1:'hShield',b1:'hBomb',h1:'hHalberd'}},
 music(run){if(run.cine){run.audio.playMusic('triumph',1.2);return}if(run.enc.id){run.audio.playMusic(run.enc.id==='e3'?'siege':'battle',1.0);return}run.audio.playMusic('fortress',1.4)},
 zone(run){const x=run.p.x+run.p.w/2;return run.cfg.zones.find(z=>x>=z.from&&x<z.to)||run.cfg.zones[run.cfg.zones.length-1]},
 zoneLabel(run){return text(run.lang,def.zone(run).id)},
 inside(run){const p=run.p,x=p.x+p.w/2,f=p.y+p.h;return x>4800&&x<7200&&f>1000},
 chainsDone(run){return run.state.chains.filter(Boolean).length},
 objectiveHud(run){
  if(run.cine)return'';const z=def.zone(run).id,s=run.state,t=k=>text(run.lang,k),cx=run.p.x+run.p.w/2,n=def.chainsDone(run);
  if(run.enc.id){const k={e1:'objWall',e2:'objGuard',e3:'objSiege'}[run.enc.id];return t(k).replace('{n}',Math.max(1,run.enc.wave))}
  if(z==='quay')return t('objQuay');
  if(z==='walls')return!s.chains[0]&&cx<3700?t('objWalls').replace('{n}',s.pins.filter(Boolean).length):t('objCourt');
  if(z==='cells'){if(!s.chains[1]&&cx<6150)return t('objFurnace');if(!s.gearGate)return t('objGears');return t('objKeep')}
  if(z==='keep'){if(!s.chains[2])return t('objCannon');return s.bridge?t('objBridge'):t('objRaised').replace('{n}',n)}
  if(!s.bridge)return t('objRaised').replace('{n}',n);return s.gateOpen?t('objThrough'):t('objBridge')},
 dynamicSolids(run){const list=[],c=run.cfg,s=run.state;
  for(const k of c.encounters){const w=run.walls[k.id];if(w>.05)for(const x of[k.wallL,k.wallR])list.push({x:x-15,y:k.floor-420*w,w:30,h:420*w,style:'net'})}
  const pg=c.gears.gate;if(run.portK>.05)list.push({x:pg.x-16,y:pg.floor-(pg.floor-pg.top)*run.portK,w:32,h:(pg.floor-pg.top)*run.portK,style:'portcullis'});
  const tr=c.sconce.trap;if(run.trapK>.5)list.push({x:tr.x,y:tr.y,w:tr.w,h:18,style:'trapdoor'});
  const b=c.bridge;if(run.bridgeK<.04)list.push({x:b.x,y:b.y,w:b.w,h:26,style:'bridge'});
  const g=b.gate;if(run.gateK>.05)list.push({x:g.x-20,y:g.floor-(g.floor-g.top)*run.gateK,w:40,h:(g.floor-g.top)*run.gateK,style:'gate'});
  return list},
 /* -------- per-frame logic */
 update(run,dt){
  const s=run.state,p=run.p,c=run.cfg,cx=p.x+p.w/2;
  run.banner.t=Math.max(0,run.banner.t-dt);
  if(run.cine){def.updateCine(run,dt);return}
  if(run.hintQueue?.length){run.hintT-=dt;if(run.hintT<=0){run.banner={t:4.6,text:text(run.lang,run.hintQueue.shift()),small:true};run.hintT=8}}
  for(const[id,h]of Object.entries(run.hintsAt||{})){const e=run.enemies.find(q=>q.id===id);if(e&&Math.abs(e.cx-cx)<520){def.hint(run,h);delete run.hintsAt[id]}}
  if(cx>3380&&cx<3500&&!s.chains[0])def.hint(run,'hWinch');if(cx>5520&&cx<5700&&!s.chains[1])def.hint(run,'hFurnace');if(cx>6120&&!s.gearGate)def.hint(run,'hGears');if(cx>5300&&cx<5440&&!s.trap)def.hint(run,'hSconce');if(cx>8100&&cx<8300&&!s.chains[2])def.hint(run,'hCannon');
  def.updateBattery(run,dt);def.updateMarks(run,dt);def.updateBombs(run,dt);
  // chain mechanisms
  if(run.winchT>0){run.winchT-=dt;if(run.winchT<=0){run.winchT=0;def.breakChain(run,0)}}
  run.heat=Math.max(0,run.heat-dt*c.chains.furnace.cool);
  if(run.shot){run.shot.t+=dt;if(run.shot.t>=.9&&!run.shot.done){run.shot.done=true;def.shotLands(run)}if(run.shot.t>1.6)run.shot=null}
  run.cannonCool=Math.max(0,run.cannonCool-dt);for(let i=0;i<run.gearSpin.length;i++)run.gearSpin[i]=Math.max(0,run.gearSpin[i]-dt*3);
  for(const f of run.chainFx)f.t+=dt;run.chainFx=run.chainFx.filter(f=>f.t<2.4);
  run.portK+=((s.gearGate?0:1)-run.portK)*Math.min(1,dt*(s.gearGate?1.6:6));run.trapK+=((s.trap?0:1)-run.trapK)*Math.min(1,dt*4);
  if(s.bridge)run.bridgeK=Math.max(0,run.bridgeK-dt/3);run.gateK+=((s.gateOpen?0:1)-run.gateK)*Math.min(1,dt*(s.gateOpen?1.2:6));
  // secrets
  if(!s.tower&&cx>3080&&cx<3230&&p.ground&&Math.abs(p.y+p.h-540)<4){s.tower=true;run.banner={t:3,text:text(run.lang,'secretTower')};run.audio.play('secret',{vol:.9})}
  if(!s.keepLedge&&cx>8830&&cx<8970&&p.ground&&Math.abs(p.y+p.h-560)<4){s.keepLedge=true;run.banner={t:3,text:text(run.lang,'secretKeep')};run.audio.play('secret',{vol:.9})}
  def.updateEncounters(run,dt);
  // through the open great gate: the ending
  if(s.gateOpen&&run.gateK<.2&&cx>c.bridge.gate.x+40&&!run.cine)def.beginVictory(run);
 },
 hint(run,k){if(run.hinted[k])return;run.hinted[k]=true;run.banner={t:4.6,text:text(run.lang,k),small:true}},
 updateBattery(run,dt){const b=run.cfg.battery,p=run.p,cx=p.x+p.w/2;const z=b.zones.find(([x0,x1,y])=>cx>x0&&cx<x1&&Math.abs(p.y+p.h-y)<60);if(!z||p.dead||run.enc.id)return;
  run.batteryT-=dt;if(run.batteryT>0)return;run.batteryT=b.every;run.shells++;const x=clamp(cx+p.vx*.6,z[0]+30,z[1]-30);run.marks.push({x,y:z[2],t:0,warn:b.warn,r:b.r,dmg:b.dmg,hit:false});
  run.audio.play('battery',{vol:.8});run.audio.play('shellWhistle',{vol:.6});run.flashT=run.time+.2},
 updateMarks(run,dt){const p=run.p,cx=p.x+p.w/2;for(const m of run.marks){m.t+=dt;if(!m.hit&&m.t>=m.warn){m.hit=true;run.fx.explosion?.(m.x,m.y-20,m.r*.9);run.audio.at('shellImpact',m.x,{vol:1});run.camera.shake=Math.max(run.camera.shake,5);run.fx.burst(m.x,m.y-10,'#ffb46b',18);run.fx.debris(m.x,m.y-6,10);
   if(!p.dead&&Math.abs(cx-m.x)<m.r+p.w/2-8&&Math.abs(p.y+p.h-m.y)<60)run.hurtPlayer(m.dmg,Math.sign(cx-m.x)||1,null,240)}}run.marks=run.marks.filter(m=>m.t<m.warn+.4)},
 landing(run,e){const p=run.p,x=clamp(p.x+p.w/2+p.vx*.35,e.cx-470,e.cx+470),y=def.groundBelow(run,x,p.y+p.h-20)??p.y+p.h;return{x,y}},
 groundBelow(run,x,y){let best=null;for(const s of run.solidList().concat(run.surfaces()))if(x>=s.x&&x<=s.x+s.w&&s.y>=y-8&&(best===null||s.y<best))best=s.y;return best},
 toss(run,e){const sx=e.cx-e.dir*6,sy=e.y+12,a=e.aim||def.landing(run,e),T=clamp(Math.abs(a.x-sx)/360,.6,1.05),g=900;
  run.projectiles.push({kind:'bomb',owner:'enemy',x:sx,y:sy,vx:(a.x-sx)/T,vy:(a.y-8-sy-.5*g*T*T)/T,g,w:14,h:14,dmg:8,life:T+.9,spin:0,onEnd:(r,q)=>def.bombLand(r,q)});run.audio.at('throw',e.cx,{vol:.6});run.audio.at('swingEnemy',e.cx,{vol:.5,rate:.8})},
 bombLand(run,q){const y=def.groundBelow(run,q.x,q.y-14);run.bombs.push({x:q.x,y:y??q.y+8,t:1.0,vx:0,kicked:false});run.audio.at('fuse',q.x,{vol:.7})},
 updateBombs(run,dt){const p=run.p,cx=p.x+p.w/2;
  for(const q of run.projectiles){if(q.kind!=='bomb'||q.vy<=0||q.life<=0)continue;for(const s of run.surfaces()){if(q.x>s.x&&q.x<s.x+s.w&&q.y+8>=s.y&&q.y+8-q.vy*dt<=s.y+2){q.y=s.y-8;q.life=0;q.onEnd?.(run,q);q.onEnd=null;break}}}
  for(const b of run.bombs){b.t-=dt;if(b.kicked){const nx=b.x+b.vx*dt;if(!run.solidList().some(s=>nx>s.x&&nx<s.x+s.w&&b.y-10>s.y&&b.y-10<s.y+s.h))b.x=nx;b.vx*=Math.pow(.2,dt)}
   if(b.t<=0&&!b.done){b.done=true;run.fx.explosion?.(b.x,b.y-20,80);run.audio.at('bombBlast',b.x,{vol:1});run.camera.shake=Math.max(run.camera.shake,6);run.fx.burst(b.x,b.y-20,'#ffb46b',26,1.3);run.fx.ring(b.x,b.y-10,'rgba(255,160,90,.9)',14,.4);
    if(!p.dead&&Math.abs(cx-b.x)<80&&Math.abs(p.y+p.h-b.y)<90)run.hurtPlayer(18,Math.sign(cx-b.x)||1,null,280);
    for(const e of run.enemies)if(!e.dead&&!(e.spawnT>0)&&Math.abs(e.cx-b.x)<80&&Math.abs(e.floor-b.y)<90){const r=e.damage(30,Math.sign(e.cx-b.x)||1,'bomb');if(r==='hit')run.fx.text('30',e.cx,e.y-14,'#ffb46b',true)}}}
  run.bombs=run.bombs.filter(b=>!b.done)},
 breakChain(run,i){const s=run.state,c=run.cfg;if(s.chains[i])return;s.chains[i]=1;const n=def.chainsDone(run);run.banner={t:3,text:text(run.lang,'chainOne').replace('{n}',n)};run.audio.play('chainSnap',{vol:1});run.camera.shake=10;run.hitStop(.12);
  const at=i===0?[c.chains.winch.x,c.chains.winch.y-80]:i===1?[c.chains.furnace.link,c.chains.furnace.y-60]:c.chains.cannon.anchor;run.chainFx.push({i,x:at[0],y:at[1],t:0});run.fx.burst(at[0],at[1],'#d8c8a8',30,1.4);run.fx.debris(at[0],at[1],20);
  if(n>=3&&!s.bridge){s.bridge=true;setTimeout(()=>{if(run.phase==='play'){run.banner={t:3.4,text:text(run.lang,'bridgeDown')};run.audio.play('drawbridge',{vol:1})}},900)}run.save()},
 shotLands(run){const s=run.state,c=run.cfg.chains.cannon,sh=run.shot;const hit=sh.aim===c.hit;const tgt=def.shotTarget(run,sh.aim);run.audio.at('shellImpact',tgt[0],{vol:1});run.fx.explosion?.(tgt[0],tgt[1],90);run.fx.burst(tgt[0],tgt[1],'#ffb46b',24,1.3);run.camera.shake=Math.max(run.camera.shake,5);
  if(hit)def.breakChain(run,2);else run.fx.text(text(run.lang,'miss'),tgt[0],tgt[1]-40,'#ffd38a',true)},
 shotTarget(run,aim){const c=run.cfg.chains.cannon;return[[9500,1060],[9760,640],c.anchor][aim]},
 /* strikes on props: lock pins, bellows + link, gears, sconce, cannon wheel + fuse, kicking bombs */
 hitProps(run,box){
  const s=run.state,c=run.cfg,p=run.p;let hit=false;const k=c.chains;
  if(!s.chains[0]&&run.winchT<0)k.winch.pins.forEach((x,i)=>{if(s.pins[i])return;if(overlap(box,{x:x-16,y:k.winch.y-74,w:32,h:64})){s.pins[i]=1;hit=true;const n=s.pins.filter(Boolean).length;run.audio.at('pin',x,{vol:1});run.fx.spark(x,k.winch.y-44,'#ffd88a',12);run.fx.text(text(run.lang,'pin').replace('{n}',n),x,k.winch.y-110,'#ffe9a8');
    if(n===3){run.winchT=1.4;run.audio.at('winch',k.winch.x,{vol:1})}run.save()}});
  const f=k.furnace;if(!s.chains[1]){if(overlap(box,{x:f.bellows-30,y:f.y-70,w:60,h:70})&&!(run.bellCool>run.time)){run.bellCool=run.time+.25;run.heat=Math.min(f.heat+1.2,run.heat+1.25);hit=true;run.audio.at('bellows',f.bellows,{vol:.9});run.audio.at('furnace',f.x,{vol:.6,gap:.5});run.fx.burst(f.x,f.y-60,'#ffb04a',10);if(run.heat>=f.heat)run.fx.text(text(run.lang,'hot'),f.link,f.y-110,'#ffb04a',true)}
   if(overlap(box,{x:f.link-20,y:f.y-84,w:40,h:64})&&!(run.linkCool>run.time)){run.linkCool=run.time+.3;hit=true;if(run.heat>=f.heat)def.breakChain(run,1);else{run.audio.at('clang',f.link,{vol:.8});run.fx.spark(f.link,f.y-50,'#cfe3ff',8);run.fx.text(text(run.lang,'cold'),f.link,f.y-110,'#cfe3ff')}}}
  if(!s.gearGate)c.gears.list.forEach((g,i)=>{if(overlap(box,{x:g.x-30,y:c.gears.y-94,w:60,h:80})&&!(run.gearCool?.[i]>run.time)){(run.gearCool??=[])[i]=run.time+.3;hit=true;
    s.gears[i]=(s.gears[i]+1)%4;for(const j of[i-1,i+1])if(j>=0&&j<s.gears.length){s.gears[j]=(s.gears[j]+3)%4;run.gearSpin[j]=1}run.gearSpin[i]=1;run.audio.at('gear',g.x,{vol:.9});
    if(s.gears.every(v=>v===0)){s.gearGate=true;run.banner={t:3,text:text(run.lang,'gearsOpen')};run.audio.play('portcullis',{vol:1})}run.save()}});
  const sc=c.sconce;if(!s.trap&&overlap(box,{x:sc.x-18,y:sc.y-100,w:36,h:44})){s.trap=true;hit=true;run.audio.at('trapdoor',sc.trap.x+100,{vol:1});run.banner={t:3,text:text(run.lang,'trap')};run.audio.play('secret',{vol:.8});run.save()}
  const cn=k.cannon;if(!s.chains[2]){if(overlap(box,{x:cn.wheel-26,y:cn.y-70,w:52,h:70})&&!(run.wheelCool>run.time)&&!run.shot){run.wheelCool=run.time+.3;s.aim=(s.aim+1)%cn.aims;hit=true;run.audio.at('wheel',cn.wheel,{vol:.9});run.save()}
   if(overlap(box,{x:cn.fuse-16,y:cn.y-60,w:32,h:60})&&run.cannonCool<=0&&!run.shot){run.cannonCool=2;hit=true;run.shot={t:0,aim:s.aim};run.audio.play('cannonFire',{vol:1});run.camera.shake=8;run.fx.muzzle(cn.x+60,cn.y-40,1,3)}}
  for(const b of run.bombs)if(!b.kicked&&overlap(box,{x:b.x-14,y:b.y-26,w:28,h:28})){b.kicked=true;b.vx=p.dir*420;b.t=Math.max(b.t,.6);hit=true;run.fx.text(text(run.lang,'kicked'),b.x,b.y-40,'#ffd38a');run.audio.play('swing3',{vol:.6})}
  return hit},
 strike(run,box){return def.hitProps(run,box)},
 projectileHit(run,q){if(q.owner!=='hero')return false;return def.hitProps(run,{x:q.x,y:q.y,w:q.w||12,h:q.h||8})},
 /* encounters */
 spawnWave(run,id,w){const foes=(run.pending[id]||[]).filter(q=>q.w===w&&!run.killed.has(q.e.id));
  for(const q of foes){const e=q.e;e.encId=id;e.spawnT=.8;e.alert=true;e.x=q.d.x-e.w/2;e.hp=e.max;e.dead=false;e.state='idle';e.timer=0;e.cool=.6+run.rand()*.4;run.pending[id]=run.pending[id].filter(z=>z!==q);run.enemies.push(e)}return foes.length},
 updateEncounters(run,dt){
  const c=run.cfg,s=run.state,p=run.p,cx=p.x+p.w/2,en=run.enc;
  for(const k of c.encounters){const on=en.id===k.id;run.walls[k.id]+=((on?1:0)-run.walls[k.id])*Math.min(1,dt*6)}
  if(!en.id&&!p.dead){for(const k of c.encounters){if(s.enc[k.id])continue;if(cx>k.trigger&&cx<k.wallR&&Math.abs(p.y+p.h-k.floor)<160&&p.ground){en.id=k.id;en.wave=0;en.delay=1.1;run.audio.play('gateSlam',{vol:.9});if(k.final)run.audio.play('horn',{vol:1});run.camera.shake=6;run.banner={t:2.2,text:text(run.lang,'ambush')};run.marks=[];def.music(run);break}}}
  if(!en.id)return;const k=c.encounters.find(q=>q.id===en.id);
  const alive=run.enemies.filter(e=>!e.dead&&e.encId===k.id);if(alive.length)return;en.delay-=dt;if(en.delay>0)return;
  const pend=run.pending[k.id]||[];let next=en.wave+1;while(next<=k.waves&&!pend.some(q=>q.w===next&&!run.killed.has(q.e.id)))next++;
  if(next>k.waves){s.enc[k.id]=true;en.id=null;run.banner={t:2.6,text:text(run.lang,k.final?'gateOpen':'cleared')};run.audio.play(k.final?'greatGate':'gateOpen',{vol:1});if(k.final){s.gateOpen=true;run.camera.shake=6}def.music(run);run.save();return}
  en.wave=next;run.banner={t:2,text:text(run.lang,'wave').replace('{n}',next)};run.audio.play('bossIntro',{vol:.5});def.spawnWave(run,k.id,next);en.delay=1.4},
 heroHazards(run,dt){},
 onRespawn(run){
  const s=run.state,c=run.cfg,en=run.enc;run.marks=[];run.bombs=[];run.projectiles=[];run.heat=0;run.batteryT=2.5;
  if(en.id){for(const e of run.enemies.filter(q=>q.encId===en.id&&!q.dead)){run.enemies=run.enemies.filter(q=>q!==e);const d=c.enemies.find(q=>q.id===e.id);e.hp=e.max;e.state='idle';e.encId=null;e.spawnT=0;(run.pending[en.id]??=[]).push({e,w:+d.wave.split(':')[1],d})}en.id=null;en.wave=0}
  def.music(run)},
 onChest(run,c){if(c.secret)run.audio.play('secret',{vol:.9})},
 ambience(run){if(!run.audio.ctx)return;const inside=def.inside(run);run.audio.loop('harbour',inside?.06:.38);run.audio.loop('dungeon',inside?.4:0);run.audio.loop('wind',inside?0:.12)},
 paintSolid:(run,c,s,L,R,T,B)=>paintSolid(run,c,s,L,R,T,B),
 paintLedge:(run,c,l)=>paintLedge(run,c,l),
 drawMover:(run,c,m)=>drawMover(run,c,m),
 drawEnemy:(run,c,e)=>drawFoe(run,c,e),
 drawProjectile(run,c,q){if(q.kind!=='bomb')return;c.rotate((q.spin||0)*.3);c.fillStyle='#2b2b30';c.beginPath();c.arc(0,0,8,0,TAU);c.fill();c.strokeStyle='#8a6a3a';c.lineWidth=2;c.beginPath();c.moveTo(4,-6);c.quadraticCurveTo(8,-12,6,-15);c.stroke();run.fx.glow(c,6,-16,16,'rgba(255,190,80,',.9)},
 drawBackground:(run,c)=>drawBackground(run,c),
 drawBack(run,c){drawBack(run,c);drawDecor(run,c)},
 drawMid(run,c){
  const cam=run.camera,W=E.W,L=cam.x-140,R=cam.x+W+140,cfg=run.cfg,s=run.state,t=run.time,k=cfg.chains;
  if(run.env)ENV.drawProps(run,c,run.env,{ground:1000});
  // CHAIN 1: the winch with its three lock pins
  const w=k.winch;if(w.x>L-200&&w.x<R+200){c.fillStyle='#3a332c';c.fillRect(w.x-110,w.y-20,220,20);c.save();c.translate(w.x,w.y-70);c.rotate(run.winchT>0?(1.4-run.winchT)*9:s.chains[0]?.6:0);c.strokeStyle='#5a5048';c.lineWidth=10;c.beginPath();c.arc(0,0,46,0,TAU);c.stroke();for(let i=0;i<6;i++){c.save();c.rotate(i*Math.PI/3);c.fillStyle='#4a4038';c.fillRect(-4,-46,8,40);c.restore()}c.fillStyle='#2b2620';c.beginPath();c.arc(0,0,12,0,TAU);c.fill();c.restore();
   w.pins.forEach((x,i)=>{const out=s.pins[i];c.save();c.translate(x,w.y-44);if(out)c.translate(0,24);c.fillStyle=out?'#5a5048':'#c9a24a';c.fillRect(-6,-28,12,40);c.fillStyle='#8a7a5a';c.fillRect(-10,-32,20,8);c.restore();if(!out&&!s.chains[0])run.fx.glow(c,x,w.y-60,24,'rgba(255,210,120,',.25+.15*Math.sin(t*4+i))})}
  // CHAIN 2: furnace, bellows, the link that glows with heat
  const f=k.furnace;if(f.x>L-200&&f.x<R+200){const h=clamp(run.heat/f.heat,0,1.2);c.fillStyle='#3a2f28';c.beginPath();c.roundRect(f.x-50,f.y-120,100,120,[30,30,4,4]);c.fill();c.fillStyle='#120c08';c.fillRect(f.x-26,f.y-60,52,40);run.fx.glow(c,f.x,f.y-40,50+50*h,'rgba(255,120,40,',.4+.5*h);c.fillStyle=h>.95?'#ffd06a':'#ff6a2a';c.fillRect(f.x-22,f.y-50,44,26*Math.min(1,.3+h*.7));
   c.fillStyle='#6a4a30';c.beginPath();c.moveTo(f.bellows-26,f.y-14);c.lineTo(f.bellows+26,f.y-14-6*Math.max(0,Math.sin(t*3)*h));c.lineTo(f.bellows+20,f.y-50);c.lineTo(f.bellows-20,f.y-50);c.closePath();c.fill();c.strokeStyle='#3a2a1a';c.lineWidth=2;c.stroke();
   if(!s.chains[1]){const hot=run.heat>=f.heat;c.strokeStyle='#2c2622';c.lineWidth=8;c.setLineDash([14,6]);c.beginPath();c.moveTo(f.link,f.y-60);c.lineTo(f.link+80,880);c.stroke();c.beginPath();c.moveTo(f.link,f.y-40);c.lineTo(f.link,f.y);c.stroke();c.setLineDash([]);
    c.strokeStyle=hot?'#ffcf5a':mixHex('#5a5048','#ff5a2a',clamp(h,0,1));c.lineWidth=7;c.beginPath();c.ellipse(f.link,f.y-50,12,18,0,0,TAU);c.stroke();if(hot)run.fx.glow(c,f.link,f.y-50,40,'rgba(255,200,90,',.8)}}
  // the three-gear lock, the portcullis
  const gs=cfg.gears;gs.list.forEach((g,i)=>{if(g.x<L||g.x>R)return;const a=(s.gears[i]-run.gearSpin[i]*.3)*Math.PI/2;c.save();c.translate(g.x,gs.y-56);c.rotate(a);c.fillStyle='#5a5048';c.beginPath();for(let k2=0;k2<12;k2++){const an=k2/12*TAU;c.lineTo(Math.cos(an)*34,Math.sin(an)*34);c.lineTo(Math.cos(an+.13)*40,Math.sin(an+.13)*40);c.lineTo(Math.cos(an+.39)*40,Math.sin(an+.39)*40);c.lineTo(Math.cos(an+.52)*34,Math.sin(an+.52)*34)}c.closePath();c.fill();c.strokeStyle='#2b2620';c.lineWidth=2;c.stroke();
   c.fillStyle='#2b2620';c.beginPath();c.arc(0,0,9,0,TAU);c.fill();c.fillStyle=s.gears[i]===0?'#ffd36b':'#c9a24a';c.beginPath();c.moveTo(-8,-30);c.lineTo(8,-30);c.lineTo(0,-16);c.closePath();c.fill();c.restore();
   c.fillStyle=s.gears[i]===0?'rgba(255,211,107,.9)':'rgba(255,255,255,.3)';c.beginPath();c.moveTo(g.x-6,gs.y-112);c.lineTo(g.x+6,gs.y-112);c.lineTo(g.x,gs.y-102);c.closePath();c.fill()});
  // torch sconce (secret)
  const sc=cfg.sconce;if(sc.x>L&&sc.x<R){c.fillStyle='#2b2620';c.save();c.translate(sc.x,sc.y-80);c.rotate(s.trap?-.6:Math.sin(t*1.3)*.03);c.fillRect(-4,-10,8,30);c.fillRect(-10,-14,20,5);c.restore();run.fire(c,sc.x,sc.y-94,.55,true)}
  // CHAIN 3: the great cannon (barrel follows the aim) and the shot in flight
  const cn=k.cannon;if(cn.x>L-200&&cn.x<R+200){const ang=[-.05,-.32,-.6][s.aim];c.fillStyle='#4a3a2c';c.fillRect(cn.x-50,cn.y-30,100,30);c.save();c.translate(cn.x,cn.y-36);c.rotate(ang);c.fillStyle='#2b2b30';c.beginPath();c.roundRect(-20,-14,100,28,10);c.fill();c.fillStyle='#3d3d44';c.fillRect(70,-16,12,32);c.restore();
   c.save();c.translate(cn.wheel,cn.y-34);c.rotate(s.aim*1.2);c.strokeStyle='#6a4a30';c.lineWidth=5;c.beginPath();c.arc(0,0,26,0,TAU);c.stroke();for(let i=0;i<6;i++){c.beginPath();c.moveTo(0,0);c.lineTo(Math.cos(i*Math.PI/3)*26,Math.sin(i*Math.PI/3)*26);c.stroke()}c.restore();
   c.strokeStyle='#8a6a3a';c.lineWidth=3;c.beginPath();c.moveTo(cn.x+10,cn.y-50);c.quadraticCurveTo(cn.fuse-20,cn.y-70,cn.fuse,cn.y-40);c.stroke();c.fillStyle='#3a2a1a';c.fillRect(cn.fuse-8,cn.y-40,16,40);if(!s.chains[2]&&!run.shot)run.fx.glow(c,cn.fuse,cn.y-44,18,'rgba(255,190,80,',.4+.3*Math.sin(t*8));
   if(!s.chains[2]){const tg=def.shotTarget(run,s.aim);c.save();c.strokeStyle='rgba(255,220,140,.35)';c.setLineDash([6,10]);c.lineWidth=2;c.beginPath();c.moveTo(cn.x+80,cn.y-60);c.quadraticCurveTo((cn.x+tg[0])/2,Math.min(cn.y,tg[1])-220,tg[0],tg[1]);c.stroke();c.restore()}}
  if(run.shot){const sh=run.shot,tg=def.shotTarget(run,sh.aim),q=clamp(sh.t/.9,0,1),x0=cn.x+80,y0=cn.y-60,mx=(x0+tg[0])/2,my=Math.min(y0,tg[1])-220;const x=(1-q)*(1-q)*x0+2*(1-q)*q*mx+q*q*tg[0],y=(1-q)*(1-q)*y0+2*(1-q)*q*my+q*q*tg[1];if(q<1){c.fillStyle='#1a1a1e';c.beginPath();c.arc(x,y,9,0,TAU);c.fill();run.fx.glow(c,x,y,24,'rgba(255,170,90,',.6)}}
  // falling chain segments
  for(const fx of run.chainFx){c.save();c.globalAlpha=clamp(1-fx.t/2.4,0,1);c.strokeStyle='#2c2622';c.lineWidth=9;c.setLineDash([14,6]);c.beginPath();c.moveTo(fx.x,fx.y+fx.t*fx.t*260);c.lineTo(fx.x+40+fx.t*30,fx.y-160+fx.t*fx.t*300);c.stroke();c.restore()}
  // the drawbridge (raised against the gatehouse until the chains break), portcullis, trapdoor, gate, nets
  const b=cfg.bridge;if(b.x<R&&b.x+b.w>L){const k2=run.bridgeK,ang=-Math.PI/2*k2;c.save();c.translate(b.x+b.w,b.y);c.rotate(-ang);c.fillStyle='#6a4a30';c.fillRect(-b.w,0,b.w,26);c.strokeStyle='#3a2a1a';c.lineWidth=3;for(let x=-b.w;x<0;x+=40){c.beginPath();c.moveTo(x,0);c.lineTo(x,26);c.stroke()}c.fillStyle='#2b2b30';c.fillRect(-b.w,0,b.w,4);c.restore();
   if(k2>0&&s.chains.filter(Boolean).length<3){c.strokeStyle='#2c2622';c.lineWidth=6;c.setLineDash([10,5]);c.beginPath();c.moveTo(b.x+b.w-b.w*Math.cos(ang),b.y+b.w*Math.sin(ang)*-1);c.lineTo(b.x+b.w+60,b.y-300);c.stroke();c.setLineDash([])}}
  for(const d of def.dynamicSolids(run)){if(d.x+d.w<L||d.x>R||d.style==='bridge')continue;
   if(d.style==='trapdoor'){c.fillStyle='#5a3e26';c.fillRect(d.x,d.y,d.w,d.h);c.strokeStyle='#2a1c10';c.lineWidth=2;for(let x=d.x+20;x<d.x+d.w;x+=40){c.beginPath();c.moveTo(x,d.y);c.lineTo(x,d.y+d.h);c.stroke()}c.fillStyle='#2b2b30';c.fillRect(d.x+d.w/2-10,d.y+4,20,6);continue}
   c.fillStyle=d.style==='gate'?'#3a2a1a':'#2f2b28';c.fillRect(d.x,d.y,d.w,d.h);c.strokeStyle='#14100e';c.lineWidth=2;for(let y=d.y+16;y<d.y+d.h;y+=26){c.beginPath();c.moveTo(d.x,y);c.lineTo(d.x+d.w,y);c.stroke()}c.fillStyle='rgba(255,255,255,.1)';c.fillRect(d.x+2,d.y,3,d.h);
   if(d.style!=='gate'){c.fillStyle='#14100e';c.beginPath();for(let x=d.x+4;x<d.x+d.w;x+=10){c.moveTo(x,d.y+d.h);c.lineTo(x+5,d.y+d.h+10);c.lineTo(x+10,d.y+d.h)}c.fill()}else{c.fillStyle='#c9a24a';for(let y=d.y+30;y<d.y+d.h;y+=60)c.fillRect(d.x+d.w/2-4,y,8,8)}}
  // bombs on their fuse and the battery's marks
  for(const bm of run.bombs){const blink=Math.floor(bm.t*12)%2;c.strokeStyle='rgba(255,70,40,'+(.4+.5*(1-bm.t))+')';c.lineWidth=3;c.beginPath();c.ellipse(bm.x,bm.y-2,80,11,0,0,TAU);c.stroke();c.fillStyle='#2b2b30';c.beginPath();c.arc(bm.x,bm.y-9,9,0,TAU);c.fill();run.fx.glow(c,bm.x+6,bm.y-22,blink?22:12,'rgba(255,190,80,',.9)}
  for(const m of run.marks){const q=clamp(m.t/m.warn,0,1);if(m.t>=m.warn)continue;c.save();c.strokeStyle='rgba(255,80,50,'+(.4+.5*q)+')';c.lineWidth=3;c.beginPath();c.ellipse(m.x,m.y-3,m.r*(1.4-.4*q),10,0,0,TAU);c.stroke();c.fillStyle='rgba(255,80,50,'+(.08+.18*q)+')';c.fill();
   if(q>.6){const yy=m.y-420*(1-(q-.6)/.4);c.fillStyle='#1a1a1e';c.beginPath();c.arc(m.x,yy,8,0,TAU);c.fill();run.fx.glow(c,m.x,yy,22,'rgba(255,170,90,',.6)}c.restore()}
 },
 drawFront(run,c){
  const cam=run.camera,W=E.W,L=cam.x-100,R=cam.x+W+100,cfg=run.cfg,t=run.time;
  for(const q of cfg.pits){if(q.x+q.w<L||q.x>R)continue;const y0=1080;c.fillStyle=q.kind==='moat'?'rgba(30,40,50,.92)':'rgba(30,44,70,.9)';c.beginPath();c.moveTo(q.x,y0+30);for(let x=q.x;x<=q.x+q.w;x+=12)c.lineTo(x,y0+Math.sin(t*2+x*.05)*4);c.lineTo(q.x+q.w,y0+500);c.lineTo(q.x,y0+500);c.fill();c.fillStyle='rgba(255,220,170,.35)';for(let x=q.x+6;x<q.x+q.w;x+=22)c.fillRect(x,y0-2+Math.sin(t*2+x*.05)*4,8,2)}
  if(run.flashT>t){c.fillStyle='rgba(255,220,160,.12)';c.fillRect(cam.x,cam.y,W,H)}
 },
 drawLighting(run,c){
  weather(run,c);
  const W=E.W,cam=run.camera,p=run.p,inside=def.inside(run),cfg=run.cfg;let dark=inside?.55:.0;if(dark<.05)return;
  const lw=Math.ceil(W/4),lh=Math.ceil(H/4),buf=run.lightBuf;if(buf.width!==lw||buf.height!==lh){buf.width=lw;buf.height=lh}
  const x=buf.getContext('2d');x.globalCompositeOperation='source-over';x.clearRect(0,0,lw,lh);x.fillStyle='rgba(6,4,2,'+dark+')';x.fillRect(0,0,lw,lh);x.globalCompositeOperation='destination-out';
  const spr=run.fx.glowSprite('rgba(255,255,255,');const hole=(wx,wy,r,a=1)=>{const sx=(wx-cam.x)/4,sy=(wy-cam.y)/4,rr=r/4;if(sx+rr<0||sx-rr>lw||sy+rr<0||sy-rr>lh)return;x.globalAlpha=a;x.drawImage(spr,sx-rr,sy-rr,rr*2,rr*2)};
  hole(p.x+p.w/2,p.y+p.h*.45,200,1);for(const [tx,ty] of cfg.decor.torches)hole(tx,ty-114,200,.95);hole(cfg.chains.furnace.x,cfg.chains.furnace.y-50,220+run.heat*40,.9);hole(cfg.sconce.x,cfg.sconce.y-94,160,.8);
  for(const cp of cfg.checkpoints)if(cp.id<=run.checkpoint)hole(cp.x,cp.y-40,170,.8);for(const ch of run.chests)if(!ch.open)hole(ch.x,ch.y-20,110,.6);for(const e of run.enemies)if(!e.dead&&e.cx>cam.x-100&&e.cx<cam.x+W+100)hole(e.cx,e.floor-70,140,.55);for(const bm of run.bombs)hole(bm.x,bm.y-20,120,.8);
  x.globalAlpha=1;x.globalCompositeOperation='source-over';c.save();c.imageSmoothingEnabled=true;c.drawImage(buf,0,0,lw,lh,0,0,lw*4,lh*4);c.restore()},
 drawHud(run,c){
  const W=E.W,s=run.state,z=def.zone(run).id,cx=run.p.x+run.p.w/2,cfg=run.cfg;const y=(run.objY||88)+16,x=W/2-20;const chips=[];
  if(!run.cine){chips.push(['⛓ '+text(run.lang,'chains')+' '+def.chainsDone(run)+'/3','#ffd38a',null]);
   const f=cfg.chains.furnace;if(!s.chains[1]&&Math.abs(cx-f.x)<400&&def.inside(run))chips.push(['🔥 '+text(run.lang,'heat'),run.heat>=f.heat?'#ffcf5a':'#ff9a6a',run.heat/f.heat]);
   const cn=cfg.chains.cannon;if(!s.chains[2]&&Math.abs(cx-cn.x)<400)chips.push(['◎ '+text(run.lang,'aim')+' '+(s.aim+1)+'/'+cn.aims,'#bfe9ff',null]);
   if(run.marks.length&&!def.inside(run))chips.push(['⚠ '+text(run.lang,'shells'),'#ff9a6a',null])}
  if(chips.length){const cw=150,tot=chips.length*cw+(chips.length-1)*8;let x0=x-tot/2;c.save();for(const [lab,col,k] of chips){c.fillStyle='rgba(10,18,32,.78)';c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.roundRect(x0,y,cw,28,12);c.fill();c.stroke();c.font='800 13px Arial, sans-serif';c.textAlign='center';c.fillStyle=col;c.fillText(lab,x0+cw/2,y+19);if(k!==null){c.fillRect(x0+8,y+23,(cw-16)*clamp(k,0,1),3)}x0+=cw+8}c.restore()}
  if(run.banner.t>0&&!run.cine?.stage?.startsWith('story')){const kk=Math.min(1,run.banner.t,4.6-run.banner.t+.001);c.save();c.globalAlpha=clamp(kk*2,0,1);c.textAlign='center';const by=run.banner.small?(run.objY||88)+92:200;
   c.font=run.banner.small?'700 17px Arial, sans-serif':'800 30px Georgia, serif';const bw=Math.min(W-40,Math.max(run.banner.small?520:640,c.measureText(run.banner.text).width+60));
   c.fillStyle='rgba(10,20,36,.86)';c.beginPath();c.roundRect(W/2-bw/2,by-34,bw,run.banner.small?44:58,14);c.fill();c.strokeStyle='#ffb46b';c.lineWidth=2;c.stroke();
   c.fillStyle='#fff2e6';let txt=run.banner.text;while(c.measureText(txt).width>bw-30&&txt.length>8)txt=txt.slice(0,-2);if(txt!==run.banner.text)txt+='…';c.fillText(txt,W/2,by+(run.banner.small?-5:6));c.restore()}
  if(run.cine)def.drawCine(run,c)},
 /* -------- the great gate, story */
 beginVictory(run){if(run.cine)return;const p=run.p;run.cine={stage:'gate',t:0,T:0,letter:0,line:0,chars:0};run.clearInputs();if(run.controls)run.controls.hidden=true;p.inv=99;run.audio.stopMusic(.6);run.audio.play('horn',{vol:1});run.save()},
 updateCine(run,dt){
  const cn=run.cine,p=run.p;cn.t+=dt;cn.T+=dt;p.inv=Math.max(p.inv,2);run.inputs.clear();run.axis=0;
  if(cn.stage==='gate'){run.goldK=Math.min(1,run.goldK+dt/2);if(cn.t>.5&&!cn.flashed){cn.flashed=true;def.music(run)}if(cn.t>3.2){cn.stage='pose';cn.t=0;cn.heroPose='pose';p.dir=1;run.audio.play('victory',{vol:1});run.fx.burst(p.x+p.w/2,p.y+p.h*.4,'#ffe27a',50,1.8);run.fx.text(text(run.lang,'victory'),p.x+p.w/2,p.y-60,'#ffe27a',true)}return}
  if(cn.stage==='pose'){if(cn.t>2.2)def.startStory(run);return}
  if(cn.stage==='story'){cn.letter=Math.min(1,cn.letter+dt*2.5);const line=def.lines(run)[cn.line];cn.chars=Math.min(line.text.length,cn.chars+dt*42);cn.lineT=(cn.lineT||0)+dt;
   if(run.attackPress||run.jumpBuffer>0){run.attackPress=false;run.jumpBuffer=0;def.advance(run)}
   if(cn.chars>=line.text.length&&cn.lineT>line.text.length/42+3.2)def.advance(run);return}
  if(cn.stage==='outro'){cn.letter=Math.max(0,cn.letter-dt*2.2);if(cn.letter<=0&&run.phase==='play'){if(run.skipBtn)run.skipBtn.style.display='none';run.cine=null;
    run.complete({secrets:run.cfg.chests.filter(c=>c.secret&&run.opened.has(c.id)).length,secretTotal:run.cfg.chests.filter(c=>c.secret).length})}}},
 heroName(run){return window.PirateHeroes?.get?.(run.heroId)?.name||'Captain'},
 lines(run){const t=k=>text(run.lang,k),h=def.heroName(run);return[{who:'hero',name:h,text:t('s1')},{who:'old',name:t('s2n'),text:t('s2')},{who:'',name:'',text:t('s3')},{who:'hero',name:h,text:t('s4')}]},
 startStory(run){const was=run.cine;run.cine={...(was||{}),stage:'story',t:0,letter:0,line:0,chars:0,lineT:0,heroPose:'pose'};run.clearInputs();if(run.controls)run.controls.hidden=true;if(run.skipBtn)run.skipBtn.style.display='block';run.p.inv=99;def.music(run)},
 advance(run){const cn=run.cine;if(!cn||cn.stage!=='story')return;const lines=def.lines(run),line=lines[cn.line];if(cn.chars<line.text.length){cn.chars=line.text.length;return}cn.line++;cn.chars=0;cn.lineT=0;run.audio.play('coin',{vol:.3,rate:.7});if(cn.line>=lines.length)def.skipStory(run)},
 skipStory(run){const cn=run.cine;if(!cn)return;cn.stage='outro';cn.line=Math.min(cn.line,def.lines(run).length-1);if(run.skipBtn)run.skipBtn.style.display='none'},
 drawCineHero(run,c,p,base){const cx=p.x+p.w/2,t=run.time;run.fx.glow(c,cx,p.y+p.h*.4,110,'rgba(255,200,120,',.4);base(c,{...p,anim:'attackC',attack:0,dir:p.dir},run)},
 drawOldPortrait(run,c,x,y){c.save();c.translate(x,y);c.fillStyle='#2a2220';c.fillRect(0,0,90,90);c.fillStyle='#c9a888';c.beginPath();c.ellipse(45,50,20,24,0,0,TAU);c.fill();c.fillStyle='#d8d8d0';c.beginPath();c.moveTo(25,55);c.quadraticCurveTo(45,96,65,55);c.closePath();c.fill();c.fillStyle='#d8d8d0';c.beginPath();c.ellipse(45,30,22,10,0,0,TAU);c.fill();c.fillStyle='#3a2a1a';c.beginPath();c.arc(37,48,2.5,0,TAU);c.arc(53,48,2.5,0,TAU);c.fill();c.strokeStyle='#4a4540';c.lineWidth=3;for(let i=0;i<4;i++){c.beginPath();c.moveTo(10+i*24,0);c.lineTo(10+i*24,90);c.stroke()}c.restore()},
 drawCine(run,c){
  const W=E.W,cn=run.cine,hs=run.hudScale||1;
  if(cn.stage==='gate'||cn.stage==='pose'){const k=clamp(cn.T/2,0,1);c.save();c.globalAlpha=k;c.fillStyle='#1a1016';const bx=W*.62,by=230;c.beginPath();c.moveTo(bx-120,by+60);c.quadraticCurveTo(bx-130,by+30,bx-90,by+24);c.lineTo(bx+110,by+28);c.quadraticCurveTo(bx+130,by+44,bx+120,by+60);c.closePath();c.fill();
   for(const [mx,mh] of[[-60,120],[0,150],[60,110]]){c.fillRect(bx+mx-2,by+24-mh,4,mh);c.beginPath();c.moveTo(bx+mx-34,by+30-mh*.85);c.quadraticCurveTo(bx+mx,by+40-mh*.6,bx+mx+34,by+30-mh*.85);c.lineTo(bx+mx+28,by+20-mh*.25);c.quadraticCurveTo(bx+mx,by+28-mh*.15,bx+mx-28,by+20-mh*.25);c.closePath();c.fill()}c.restore()}
  const bars=cn.stage==='story'||cn.stage==='outro'?cn.letter:0;if(bars<=0)return;
  const bh=96*bars;c.fillStyle='#000';c.fillRect(0,0,W,bh);c.fillRect(0,H/hs-bh,W,bh);
  if(cn.stage!=='story')return;const lines=def.lines(run),line=lines[Math.min(cn.line,lines.length-1)],shown=line.text.slice(0,Math.floor(cn.chars));
  const pw=Math.min(W-40,760),px=W/2-pw/2,py=bh+14;
  c.save();c.globalAlpha=bars;c.fillStyle='rgba(10,18,32,.9)';c.strokeStyle='#ffb46b';c.lineWidth=2;c.beginPath();c.roundRect(px,py,pw,118,16);c.fill();c.stroke();
  let tx=px+22;if(line.who){c.save();c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.clip();c.fillStyle='#22344a';c.fillRect(px+14,py+14,90,90);
   if(line.who==='hero'&&run.skin)run.skin.drawPortrait(c,px+14,py+14,90,90);else if(line.who==='old')def.drawOldPortrait(run,c,px+14,py+14);c.restore();
   c.strokeStyle='#d9b56c88';c.lineWidth=2;c.beginPath();c.roundRect(px+14,py+14,90,90,12);c.stroke();tx=px+120}
  c.textAlign='left';if(line.name){c.font='800 17px Georgia, serif';c.fillStyle='#ffd98a';c.fillText(line.name,tx,py+32)}
  c.font='600 17px Arial, sans-serif';c.fillStyle='#eef6f8';const maxw=px+pw-tx-20;const words=shown.split(' ');let ln='',yy=py+(line.name?58:44);for(const w of words){const test=ln?ln+' '+w:w;if(c.measureText(test).width>maxw&&ln){c.fillText(ln,tx,yy);ln=w;yy+=24}else ln=test}c.fillText(ln,tx,yy);
  if(cn.chars>=line.text.length){c.font='700 13px Arial';c.fillStyle='rgba(255,227,160,'+(.5+.5*Math.sin(run.time*5))+')';c.textAlign='right';c.fillText('▶ '+text(run.lang,'tap'),px+pw-16,py+108)}
  c.restore()}
};
E.register(def);
})();
