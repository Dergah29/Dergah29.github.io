/* Pirate Strike — Captain's Wardrobe catalogue.
 * Every item: unique id, category, price (in-game gold only), rarity, unlock requirement,
 * hero compatibility and names/descriptions in the game's five languages.
 * How an item looks is defined in cosmetics.js (same ids). Prices assume the gold that
 * Levels 1–6 pay out once (see economy.js); there is no paid currency. */
(()=>{'use strict';
const root=typeof window!=='undefined'?window:globalThis;
if(root.PirateShopCatalog)return;
const ALL=['scarlet','sailor','captain','shark','crab'],HATTED=['scarlet','sailor','captain'];
const CATS=['outfit','weapon','hat','accessory','effect','upgrade','chest'];
const RARITY={common:{rank:0,color:'#c9c2b0'},rare:{rank:1,color:'#5fb4ff'},epic:{rank:2,color:'#c77dff'},legendary:{rank:3,color:'#ffc23a'}};
// req: {level:n} → level n completed (a boss level means its boss is beaten); {item:id} → own that item first
const I=(id,cat,price,rarity,heroes,req,name,desc,extra)=>Object.assign({id,cat,price,rarity,heroes,req,name,desc},extra||{});
const items=[
 /* ---- outfits: palette + material per hero (all animation frames are recoloured, see cosmetics.js) */
 I('outfit-classic','outfit',0,'common',ALL,null,
  {en:'Classic',az:'Klassik',tr:'Klasik',ru:'Классика',pl:'Klasyczny'},
  {en:'The outfit your pirate set sail in.',az:'Piratının yola çıxdığı geyim.',tr:'Korsanının yola çıktığı kıyafet.',ru:'Наряд, в котором ваш пират вышел в море.',pl:'Strój, w którym twój pirat wypłynął.'},{default:true}),
 I('outfit-red','outfit',350,'rare',ALL,null,
  {en:'Red Captain',az:'Qırmızı Kapitan',tr:'Kızıl Kaptan',ru:'Красный капитан',pl:'Czerwony kapitan'},
  {en:'Crimson coat and hat with brass trim.',az:'Mis haşiyəli tünd qırmızı palto və papaq.',tr:'Pirinç süslü kızıl ceket ve şapka.',ru:'Алый камзол и шляпа с латунной отделкой.',pl:'Karmazynowy płaszcz i kapelusz z mosiężnym obszyciem.'}),
 I('outfit-black','outfit',500,'rare',ALL,null,
  {en:'Black Pirate',az:'Qara Pirat',tr:'Kara Korsan',ru:'Чёрный пират',pl:'Czarny pirat'},
  {en:'Pitch-black leathers with blood-red accents.',az:'Qan-qırmızı detallı zil qara dəri geyim.',tr:'Kan kırmızısı detaylı simsiyah deri.',ru:'Чёрная кожа с кроваво-красными акцентами.',pl:'Smoliście czarna skóra z krwistymi akcentami.'}),
 I('outfit-ghost','outfit',900,'epic',ALL,{level:5},
  {en:'Ghost Pirate',az:'Ruh Pirat',tr:'Hayalet Korsan',ru:'Пират-призрак',pl:'Upiorny pirat'},
  {en:'Spectral, see-through and softly glowing — earned by lifting the curse.',az:'Şəffaf, yumşaq parlayan ruh görünüşü — lənəti qaldıranlara.',tr:'Yarı saydam, hafifçe parlayan hayalet görünüm — laneti kaldıranlara.',ru:'Полупрозрачный светящийся призрак — за снятое проклятие.',pl:'Półprzezroczysty, lekko świecący upiór — za zdjęcie klątwy.'}),
 I('outfit-gold','outfit',1600,'legendary',ALL,{level:6},
  {en:'Golden Captain',az:'Qızıl Kapitan',tr:'Altın Kaptan',ru:'Золотой капитан',pl:'Złoty kapitan'},
  {en:'Gilded from hat to boots, with a travelling shine.',az:'Papaqdan çəkməyə qədər qızılı, üzərində axan parıltı.',tr:'Şapkadan çizmeye yaldızlı, üzerinde gezen bir parıltı.',ru:'Позолота от шляпы до сапог с бегущим бликом.',pl:'Złocony od kapelusza po buty, z wędrującym blaskiem.'}),
 I('outfit-storm','outfit',800,'epic',['scarlet'],{level:6},
  {en:'Storm Rider',az:'Fırtına Süvarisi',tr:'Fırtına Süvarisi',ru:'Наездница бури',pl:'Jeźdźczyni burzy'},
  {en:'Mari in slate-blue oilskins from Stormbreaker Island.',az:'Fırtına Adasından tünd-göy yağlı plaşda Mari.',tr:'Fırtınakıran Adası’ndan arduvaz mavisi muşambalı Mari.',ru:'Мари в сине-сером дождевике с Острова Штормолом.',pl:'Mari w łupkowoniebieskim sztormiaku z Wyspy Łamacza Burz.'}),
 I('outfit-navy','outfit',450,'rare',['sailor'],null,
  {en:'Royal Navy',az:'Kral Donanması',tr:'Kraliyet Donanması',ru:'Королевский флот',pl:'Królewska marynarka'},
  {en:'A deserter’s navy-blue uniform with white braid.',az:'Ağ hörüklü tünd-göy dənizçi forması.',tr:'Beyaz kordonlu lacivert denizci üniforması.',ru:'Тёмно-синий мундир дезертира с белым шнуром.',pl:'Granatowy mundur dezertera z białym galonem.'}),
 I('outfit-admiral','outfit',650,'epic',['captain'],null,
  {en:'Royal Admiral',az:'Kral Admiralı',tr:'Kraliyet Amirali',ru:'Королевский адмирал',pl:'Królewski admirał'},
  {en:'Deep-blue admiral’s coat with heavy gold braid.',az:'Ağır qızılı hörüklü tünd-göy admiral paltosu.',tr:'Ağır altın kordonlu koyu mavi amiral ceketi.',ru:'Синий адмиральский мундир с золотым шитьём.',pl:'Granatowy płaszcz admirała ze złotym galonem.'}),
 I('outfit-greatwhite','outfit',550,'rare',['shark'],null,
  {en:'Great White',az:'Ağ Köpəkbalığı',tr:'Büyük Beyaz',ru:'Большая белая',pl:'Żarłacz biały'},
  {en:'Grey-white hide and a sea-green sash.',az:'Boz-ağ dəri və dəniz-yaşıl qurşaq.',tr:'Gri-beyaz deri ve deniz yeşili kuşak.',ru:'Серо-белая шкура и кушак цвета волны.',pl:'Szarobiała skóra i morskozielona szarfa.'}),
 I('outfit-coral','outfit',550,'rare',['crab'],null,
  {en:'Coral King',az:'Mərcan Kralı',tr:'Mercan Kral',ru:'Коралловый король',pl:'Koralowy król'},
  {en:'A pink-coral shell and royal purple breeches.',az:'Çəhrayı mərcan qabıq və bənövşəyi şalvar.',tr:'Pembe mercan kabuk ve mor pantolon.',ru:'Коралловый панцирь и пурпурные бриджи.',pl:'Różowy koralowy pancerz i purpurowe bryczesy.'}),
 /* ---- weapons: blade finish + slash arc (+ Mari's pistol flash) */
 I('weapon-steel','weapon',0,'common',ALL,null,
  {en:'Steel Cutlass',az:'Polad Qılınc',tr:'Çelik Pala',ru:'Стальная сабля',pl:'Stalowy kord'},
  {en:'Plain, honest steel.',az:'Sadə, etibarlı polad.',tr:'Sade, güvenilir çelik.',ru:'Простая честная сталь.',pl:'Prosta, uczciwa stal.'},{default:true}),
 I('weapon-crimson','weapon',300,'rare',ALL,null,
  {en:'Crimson Sabre',az:'Al Qılınc',tr:'Kızıl Kılıç',ru:'Алая сабля',pl:'Karmazynowa szabla'},
  {en:'Red-lacquered blade with a crimson slash arc.',az:'Qırmızı laklı tiyə, qırmızı zərbə izi.',tr:'Kırmızı cilalı ağız, kızıl savuruş izi.',ru:'Лакированный красный клинок и алый след удара.',pl:'Czerwono lakierowana głownia i karmazynowy łuk cięcia.'}),
 I('weapon-obsidian','weapon',450,'rare',ALL,null,
  {en:'Obsidian Blade',az:'Obsidian Tiyə',tr:'Obsidyen Kılıç',ru:'Обсидиановый клинок',pl:'Obsydianowe ostrze'},
  {en:'Volcanic black glass with a violet edge glow.',az:'Bənövşəyi kənarlı vulkanik qara şüşə.',tr:'Mor kenar ışıltılı volkanik siyah cam.',ru:'Вулканическое стекло с фиолетовым отблеском.',pl:'Wulkaniczne szkło z fioletową poświatą.'}),
 I('weapon-gold','weapon',750,'epic',ALL,null,
  {en:'Golden Cutlass',az:'Qızıl Qılınc',tr:'Altın Pala',ru:'Золотая сабля',pl:'Złoty kord'},
  {en:'Polished gold that leaves a warm arc.',az:'İsti iz buraxan cilalı qızıl.',tr:'Sıcak bir iz bırakan cilalı altın.',ru:'Полированное золото с тёплым следом.',pl:'Polerowane złoto zostawiające ciepły łuk.'}),
 I('weapon-ghost','weapon',900,'epic',ALL,{level:5},
  {en:'Phantom Blade',az:'Ruh Tiyəsi',tr:'Hayalet Kılıcı',ru:'Призрачный клинок',pl:'Widmowe ostrze'},
  {en:'A cold cyan blade that hums with spirit light.',az:'Ruh işığı ilə uğuldayan soyuq mavi tiyə.',tr:'Ruh ışığıyla uğuldayan soğuk camgöbeği kılıç.',ru:'Холодный бирюзовый клинок, светящийся духом.',pl:'Zimne, cyjanowe ostrze nucące duchowym światłem.'}),
 I('weapon-storm','weapon',1200,'legendary',ALL,{level:6},
  {en:'Storm Edge',az:'Fırtına Tiyəsi',tr:'Fırtına Ağzı',ru:'Клинок бури',pl:'Ostrze burzy'},
  {en:'Forged in the Storm Captain’s lightning. Crackling arcs.',az:'Fırtına Kapitanının ildırımında döyülüb. Çırtıldayan qığılcımlar.',tr:'Fırtına Kaptanı’nın yıldırımında dövüldü. Çatırdayan arklar.',ru:'Выкован в молниях Штормового капитана. Трещащие разряды.',pl:'Wykute w piorunach Kapitana Burzy. Trzaskające łuki.'}),
 /* ---- hats (heroes that wear one) */
 I('hat-classic','hat',0,'common',HATTED,null,
  {en:'Classic Tricorn',az:'Klassik Papaq',tr:'Klasik Üç Köşe',ru:'Классическая треуголка',pl:'Klasyczny trikorn'},
  {en:'The hat as it was painted.',az:'Papağın orijinal görünüşü.',tr:'Şapkanın orijinal hali.',ru:'Шляпа как на портрете.',pl:'Kapelusz jak z obrazu.'},{default:true}),
 I('hat-crimson','hat',250,'common',HATTED,null,
  {en:'Crimson Plume',az:'Al Lələk',tr:'Kızıl Tüy',ru:'Алый плюмаж',pl:'Karmazynowy pióropusz'},
  {en:'Wine-red felt and a long red feather.',az:'Şərab rəngli keçə və uzun qırmızı lələk.',tr:'Şarap kırmızısı keçe ve uzun kırmızı tüy.',ru:'Винный фетр и длинное красное перо.',pl:'Bordowy filc i długie czerwone pióro.'}),
 I('hat-midnight','hat',350,'rare',HATTED,null,
  {en:'Midnight Tricorn',az:'Gecəyarısı Papağı',tr:'Gece Yarısı Şapkası',ru:'Полуночная треуголка',pl:'Północny trikorn'},
  {en:'Black felt with silver trim and a raven feather.',az:'Gümüş haşiyəli qara keçə və qarğa lələyi.',tr:'Gümüş kenarlı siyah keçe ve kuzgun tüyü.',ru:'Чёрный фетр, серебряный кант и вороново перо.',pl:'Czarny filc, srebrne obszycie i krucze pióro.'}),
 I('hat-admiral','hat',400,'rare',HATTED,null,
  {en:'Admiral’s Trim',az:'Admiral Haşiyəsi',tr:'Amiral Süsü',ru:'Адмиральский кант',pl:'Admiralskie obszycie'},
  {en:'Navy felt, heavy gold trim and a white plume.',az:'Tünd-göy keçə, qızılı haşiyə və ağ lələk.',tr:'Lacivert keçe, altın kenar ve beyaz tüy.',ru:'Синий фетр, золотой кант и белый плюмаж.',pl:'Granatowy filc, złote obszycie i biały pióropusz.'}),
 I('hat-ghost','hat',800,'epic',HATTED,{level:5},
  {en:'Spectral Tricorn',az:'Ruh Papağı',tr:'Hayalet Şapka',ru:'Призрачная треуголка',pl:'Widmowy trikorn'},
  {en:'Translucent teal with a glowing spirit plume.',az:'Parlayan ruh lələkli şəffaf firuzəyi papaq.',tr:'Parlayan ruh tüylü yarı saydam turkuaz.',ru:'Полупрозрачная бирюза и светящееся перо.',pl:'Półprzezroczysty turkus i świecące pióro.'}),
 I('hat-storm','hat',900,'epic',HATTED,{level:6},
  {en:'Stormcaller',az:'Fırtına Çağıran',tr:'Fırtına Çağıran',ru:'Призыватель бури',pl:'Wzywający burzę'},
  {en:'Slate felt and a feather that throws sparks.',az:'Boz-göy keçə və qığılcım saçan lələk.',tr:'Arduvaz keçe ve kıvılcım saçan tüy.',ru:'Сизый фетр и перо, рассыпающее искры.',pl:'Łupkowy filc i pióro sypiące iskrami.'}),
 /* ---- accessories: companions that follow the hero */
 I('acc-none','accessory',0,'common',ALL,null,
  {en:'No companion',az:'Yoldaşsız',tr:'Yoldaş yok',ru:'Без спутника',pl:'Bez towarzysza'},
  {en:'Sail alone.',az:'Tək üz.',tr:'Yalnız yelken aç.',ru:'Плыть в одиночку.',pl:'Płyń samotnie.'},{default:true}),
 I('acc-gull','accessory',300,'common',ALL,null,
  {en:'Harbour Gull',az:'Liman Qağayısı',tr:'Liman Martısı',ru:'Портовая чайка',pl:'Portowa mewa'},
  {en:'A cheeky seagull that glides behind you.',az:'Arxanca süzən dəcəl qağayı.',tr:'Arkandan süzülen haylaz bir martı.',ru:'Нахальная чайка, парящая следом.',pl:'Bezczelna mewa szybująca za tobą.'}),
 I('acc-macaw','accessory',450,'rare',ALL,null,
  {en:'Scarlet Macaw',az:'Qırmızı Ara Tutuquşusu',tr:'Kırmızı Ara Papağanı',ru:'Красный ара',pl:'Ara czerwona'},
  {en:'Every captain needs a parrot.',az:'Hər kapitana tutuquşu lazımdır.',tr:'Her kaptanın bir papağana ihtiyacı var.',ru:'Каждому капитану нужен попугай.',pl:'Każdy kapitan potrzebuje papugi.'}),
 I('acc-bluemacaw','accessory',600,'rare',ALL,null,
  {en:'Blue-and-Gold Macaw',az:'Mavi-Qızılı Ara',tr:'Mavi-Altın Ara',ru:'Сине-жёлтый ара',pl:'Ara niebieskożółta'},
  {en:'A rarer macaw with sky-blue wings.',az:'Səma-mavi qanadlı nadir ara.',tr:'Gök mavisi kanatlı nadir bir ara.',ru:'Редкий ара с небесно-голубыми крыльями.',pl:'Rzadsza ara o błękitnych skrzydłach.'}),
 I('acc-ghostparrot','accessory',1000,'epic',ALL,{level:5},
  {en:'Ghost Parrot',az:'Ruh Tutuquşu',tr:'Hayalet Papağan',ru:'Попугай-призрак',pl:'Upiorna papuga'},
  {en:'A parrot that never quite left the Cursed Island.',az:'Lənətli Adanı heç tərk etməyən tutuquşu.',tr:'Lanetli Ada’dan hiç ayrılmamış bir papağan.',ru:'Попугай, так и не покинувший Проклятый остров.',pl:'Papuga, która nigdy nie opuściła Przeklętej wyspy.'}),
 /* ---- effects: bounded particles (cosmetic only) */
 I('fx-none','effect',0,'common',ALL,null,
  {en:'No effect',az:'Effektsiz',tr:'Efekt yok',ru:'Без эффекта',pl:'Bez efektu'},
  {en:'Clean and simple.',az:'Sadə və təmiz.',tr:'Sade ve temiz.',ru:'Чисто и просто.',pl:'Czysto i prosto.'},{default:true}),
 I('fx-spray','effect',300,'common',ALL,null,
  {en:'Sea Spray',az:'Dəniz Ləpəsi',tr:'Deniz Serpintisi',ru:'Морские брызги',pl:'Morska bryza'},
  {en:'Salt-water droplets when you run, land and dash.',az:'Qaçanda, yerə enəndə və sıçrayanda duzlu su damcıları.',tr:'Koşarken, inerken ve atılırken tuzlu su damlaları.',ru:'Солёные брызги при беге, приземлении и рывке.',pl:'Krople słonej wody przy biegu, lądowaniu i zrywie.'}),
 I('fx-embers','effect',350,'rare',ALL,null,
  {en:'Ember Trail',az:'Köz İzi',tr:'Kor İzi',ru:'След углей',pl:'Ślad żaru'},
  {en:'Glowing embers trail your steps and dashes.',az:'Addımlarını və sıçrayışlarını parlayan közlər izləyir.',tr:'Adımlarını ve atılışlarını parlayan korlar izler.',ru:'Тлеющие угли следуют за шагами и рывками.',pl:'Żarzące się iskry podążają za krokami i zrywami.'}),
 I('fx-wisps','effect',800,'epic',ALL,{level:5},
  {en:'Ghost Wisps',az:'Ruh Alovları',tr:'Hayalet Işıkları',ru:'Блуждающие огни',pl:'Błędne ogniki'},
  {en:'Three spirit lights circle you.',az:'Üç ruh işığı ətrafında fırlanır.',tr:'Üç ruh ışığı etrafında döner.',ru:'Три духа кружат вокруг вас.',pl:'Trzy duchowe światła krążą wokół ciebie.'}),
 I('fx-storm','effect',900,'epic',ALL,{level:6},
  {en:'Storm Sparks',az:'Fırtına Qığılcımları',tr:'Fırtına Kıvılcımları',ru:'Искры бури',pl:'Iskry burzy'},
  {en:'Lightning crackles on dashes and finishers.',az:'Sıçrayışda və son zərbədə ildırım çırtıldayır.',tr:'Atılışlarda ve bitirişlerde şimşek çatırdar.',ru:'Молнии трещат при рывках и добиваниях.',pl:'Błyskawice trzaskają przy zrywach i finiszach.'}),
 I('fx-gold','effect',1100,'legendary',ALL,{level:6},
  {en:'Golden Glitter',az:'Qızıl Parıltı',tr:'Altın Parıltı',ru:'Золотое сияние',pl:'Złoty brokat'},
  {en:'Sparkling gold stars wherever you go.',az:'Getdiyin hər yerdə qızılı ulduzlar.',tr:'Gittiğin her yerde parlayan altın yıldızlar.',ru:'Золотые звёздочки повсюду, где вы проходите.',pl:'Złote gwiazdki wszędzie, gdzie idziesz.'}),
 /* ---- upgrades: small, quality-of-life (no damage, armour or speed changes) */
 I('up-magnet-1','upgrade',400,'rare',ALL,null,
  {en:'Lucky Compass I',az:'Bəxt Kompası I',tr:'Şans Pusulası I',ru:'Счастливый компас I',pl:'Szczęśliwy kompas I'},
  {en:'Coins fly to you from further away (90 → 140).',az:'Sikkələr daha uzaqdan sənə uçur (90 → 140).',tr:'Altınlar daha uzaktan sana uçar (90 → 140).',ru:'Монеты летят к вам издалека (90 → 140).',pl:'Monety lecą do ciebie z dalszej odległości (90 → 140).'},{effect:{magnet:140}}),
 I('up-magnet-2','upgrade',900,'epic',ALL,{item:'up-magnet-1'},
  {en:'Lucky Compass II',az:'Bəxt Kompası II',tr:'Şans Pusulası II',ru:'Счастливый компас II',pl:'Szczęśliwy kompas II'},
  {en:'An even stronger pull (140 → 200).',az:'Daha güclü cazibə (140 → 200).',tr:'Daha da güçlü çekim (140 → 200).',ru:'Ещё сильнее притяжение (140 → 200).',pl:'Jeszcze silniejsze przyciąganie (140 → 200).'},{effect:{magnet:200}}),
 I('up-medic-1','upgrade',500,'rare',ALL,null,
  {en:'Surgeon’s Kit I',az:'Cərrah Çantası I',tr:'Cerrah Çantası I',ru:'Набор лекаря I',pl:'Zestaw cyrulika I'},
  {en:'Checkpoints heal 45 instead of 35.',az:'Yoxlama nöqtələri 35 əvəzinə 45 can bərpa edir.',tr:'Kayıt noktaları 35 yerine 45 can verir.',ru:'Контрольные точки лечат 45 вместо 35.',pl:'Punkty kontrolne leczą 45 zamiast 35.'},{effect:{heal:45}}),
 I('up-medic-2','upgrade',1000,'epic',ALL,{item:'up-medic-1'},
  {en:'Surgeon’s Kit II',az:'Cərrah Çantası II',tr:'Cerrah Çantası II',ru:'Набор лекаря II',pl:'Zestaw cyrulika II'},
  {en:'Checkpoints heal 55.',az:'Yoxlama nöqtələri 55 can bərpa edir.',tr:'Kayıt noktaları 55 can verir.',ru:'Контрольные точки лечат 55.',pl:'Punkty kontrolne leczą 55.'},{effect:{heal:55}}),
 /* ---- treasure chests: spend gold for a random cosmetic you do not own yet */
 I('chest-wood','chest',250,'common',ALL,null,
  {en:'Driftwood Chest',az:'Dalğa Sandığı',tr:'Dalga Sandığı',ru:'Сундук из плавника',pl:'Skrzynia z dryfującego drewna'},
  {en:'A common or rare cosmetic you do not own yet.',az:'Səndə olmayan adi və ya nadir bir əşya.',tr:'Sende olmayan sıradan ya da nadir bir eşya.',ru:'Обычный или редкий предмет, которого у вас нет.',pl:'Zwykły lub rzadki przedmiot, którego nie masz.'},{pool:['common','rare'],refund:125}),
 I('chest-captain','chest',700,'rare',ALL,null,
  {en:'Captain’s Chest',az:'Kapitan Sandığı',tr:'Kaptan Sandığı',ru:'Капитанский сундук',pl:'Skrzynia kapitana'},
  {en:'A rare or epic cosmetic you do not own yet.',az:'Səndə olmayan nadir və ya epik əşya.',tr:'Sende olmayan nadir ya da destansı bir eşya.',ru:'Редкий или эпический предмет, которого у вас нет.',pl:'Rzadki lub epicki przedmiot, którego nie masz.'},{pool:['rare','epic'],refund:350}),
 I('chest-cursed','chest',1400,'epic',ALL,{level:5},
  {en:'Cursed Chest',az:'Lənətli Sandıq',tr:'Lanetli Sandık',ru:'Проклятый сундук',pl:'Przeklęta skrzynia'},
  {en:'An epic or legendary cosmetic you have unlocked but not bought.',az:'Açdığın, amma almadığın epik və ya əfsanəvi əşya.',tr:'Kilidini açtığın ama almadığın destansı ya da efsanevi eşya.',ru:'Эпический или легендарный предмет, открытый, но не купленный.',pl:'Epicki lub legendarny przedmiot odblokowany, ale niekupiony.'},{pool:['epic','legendary'],refund:700})
];
const byId=new Map(items.map(i=>[i.id,i]));
const SLOT={outfit:'outfit',weapon:'weapon',hat:'hat',accessory:'accessory',effect:'effect'};
const DEFAULTS={outfit:'outfit-classic',weapon:'weapon-steel',hat:'hat-classic',accessory:'acc-none',effect:'fx-none'};
const CAT_NAME={
 outfit:{en:'Outfits',az:'Geyimlər',tr:'Kıyafetler',ru:'Наряды',pl:'Stroje'},
 weapon:{en:'Weapons',az:'Silahlar',tr:'Silahlar',ru:'Оружие',pl:'Broń'},
 hat:{en:'Hats',az:'Papaqlar',tr:'Şapkalar',ru:'Шляпы',pl:'Kapelusze'},
 accessory:{en:'Companions',az:'Yoldaşlar',tr:'Yoldaşlar',ru:'Спутники',pl:'Towarzysze'},
 effect:{en:'Effects',az:'Effektlər',tr:'Efektler',ru:'Эффекты',pl:'Efekty'},
 upgrade:{en:'Upgrades',az:'Təkmilləşmələr',tr:'Geliştirmeler',ru:'Улучшения',pl:'Ulepszenia'},
 chest:{en:'Treasure Chests',az:'Xəzinə Sandıqları',tr:'Hazine Sandıkları',ru:'Сундуки',pl:'Skrzynie skarbów'}};
const RARITY_NAME={
 common:{en:'Common',az:'Adi',tr:'Sıradan',ru:'Обычный',pl:'Zwykły'},
 rare:{en:'Rare',az:'Nadir',tr:'Nadir',ru:'Редкий',pl:'Rzadki'},
 epic:{en:'Epic',az:'Epik',tr:'Destansı',ru:'Эпический',pl:'Epicki'},
 legendary:{en:'Legendary',az:'Əfsanəvi',tr:'Efsanevi',ru:'Легендарный',pl:'Legendarny'}};
const tx=(o,lang)=>o?(o[lang]||o.en):'';
const api={CATS,RARITY,RARITY_NAME,CAT_NAME,DEFAULTS,SLOT,items,
 get:id=>byId.get(id)||null,
 inCat:cat=>items.filter(i=>i.cat===cat),
 name:(i,lang)=>tx(i.name,lang),desc:(i,lang)=>tx(i.desc,lang),cat:(c,lang)=>tx(CAT_NAME[c],lang),rarity:(r,lang)=>tx(RARITY_NAME[r],lang),
 fits:(i,hero)=>!!i&&(i.heroes.includes(hero))};
root.PirateShopCatalog=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
