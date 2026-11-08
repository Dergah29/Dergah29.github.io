/* Pirate Strike — opening story: structured script and strings.
 * Text only (no voice, narration or TTS). Strings are keyed so translators can add
 * languages beside `en`; missing keys fall back to English at runtime.
 * Crew speakers are original story NPCs, deliberately distinct from the five playable
 * heroes (the roster already contains a "Captain" and a "Sailor"), so the chosen hero
 * never talks to a copy of themselves. */
(()=>{'use strict';
const root=typeof window==='undefined'?globalThis:window;
if(root.PirateStoryData)return;

/* Speakers are the five PLAYABLE heroes (real roster names + real collection portraits).
 * The background crew on deck/ashore are non-speaking extras. If the scout the player
 * picks also has a speaking role later, `stand-in` speaks that line instead. */
const SPEAKERS={
 captain:{hero:'captain',role:'role.captain',side:'left',accent:'#e7c36f',standIn:'mate'},
 lookout:{hero:'sailor',role:'role.lookout',side:'left',accent:'#8fd0e6'},
 bosun:{hero:'shark',role:'role.bosun',side:'left',accent:'#9fd59a'},
 mate:{hero:'scarlet',role:'role.mate',side:'left',accent:'#f08a7a',standIn:'bosun'},
 cook:{hero:'crab',role:'role.cook',side:'left',accent:'#f4a261'},
 /* resolved at runtime from the confirmed hero */
 hero:{hero:null,role:'role.scout',side:'right',accent:'#f3a35d'}
};

/* Beats run in order. `say` waits for the player; `wait` is timed staging.
 * `cue` fires when the beat starts, so dialogue and action stay staged together. */
const SCENES=[
 {id:'ambush',checkpoint:'ambush',env:'sea',beats:[
  {wait:2.8,cue:'establish',caption:'caption.ambush'},
  {wait:1.8,cue:'enemiesEmerge'},
  {say:'lookout',text:'a.1',mood:'alarm'},
  {say:'captain',text:'a.2',mood:'stern'},
  {say:'lookout',text:'a.3',cue:'gunsTurn',mood:'alarm'},
  {wait:2.4,cue:'admiral',caption:'caption.admiral'},
  {wait:2.6,cue:'broadside'},
  {say:'bosun',text:'a.4',cue:'listing',mood:'alarm'},
  {say:'captain',text:'a.5',cue:'cutRigging',mood:'stern'},
  {wait:1.3,cue:'nearMiss'},
  {say:'lookout',text:'a.6',cue:'revealLand',mood:'alarm'},
  {say:'captain',text:'a.7',mood:'stern'},
  {wait:3.4,cue:'turnToIsland'}
 ]},
 {id:'arrival',checkpoint:'arrival',env:'shore',beats:[
  {wait:3.4,cue:'arrive',caption:'caption.arrival'},
  {say:'mate',text:'b.1',mood:'worried'},
  {say:'captain',text:'b.2',cue:'crewAshore',mood:'stern'},
  {wait:1.7,cue:'branchSnap'},
  {say:'cook',text:'b.3',mood:'worried'},
  {say:'captain',text:'b.4',mood:'stern'},
  {say:'captain',text:'b.5',mood:'neutral'}
 ]},
 {id:'select',checkpoint:'select',env:'shore',beats:[{wait:3.6,cue:'rollCall'},{select:true,cue:'selectFrame'}]},
 {id:'farewell',checkpoint:'confirmed',env:'shore',beats:[
  {say:'hero',text:'c.1',cue:'heroStep'},
  {say:'captain',text:'c.2',mood:'neutral',cue:'handMap'},
  {say:'hero',text:'c.3'}
 ]},
 {id:'shore',checkpoint:'handoff',env:'shore',beats:[
  {wait:4.2,cue:'heroAshore'},
  {handoff:true}
 ]}
];

const STRINGS={
 en:{
  'speaker.captain':'Captain Brask','speaker.lookout':'Pip','speaker.bosun':'Tamsin',
  'role.captain':'Captain','caption.admiral':"The Black Admiral\u2026",'hint.move':"Drag the joystick to move",'hint.attack':"Tap ATTACK to strike",'select.badge':"Scout",'outro.1':"Well done! The coast is safe for the crew.",'outro.2':"The trail continues to the old ruins. Let\u2019s keep moving.",'role.mate':"First mate",'role.cook':"Cook",'role.lookout':'Lookout','role.bosun':'Bosun','role.scout':'Scout',
  'caption.ambush':'Uncharted waters · past midnight','caption.arrival':'A nameless island · before dawn',
  'a.1':'Captain! Ships in the fog!',
  'a.2':'Can you see their colors?',
  'a.3':'No… wait. Their cannons are turning!',
  'a.4':'They’ve breached the hull! We’re taking water!',
  'a.5':'Cut the loose rigging! Keep her afloat!',
  'a.6':'Land to port!',
  'a.7':'Turn toward the island! We won’t survive out here!',
  'b.1':'She won’t make another voyage like this.',
  'b.2':'Get the wounded ashore. Secure the ship.',
  'b.3':'I don’t like this island, Captain.',
  'b.4':'Neither do I. But we need fresh water, timber and supplies.',
  'b.5':'Someone must scout ahead. Stay close to the coast.',
  'c.1':'I’ll go.',
  'c.2':'Start along the shore. If you find trouble, come back.',
  'c.3':'Understood. I’ll find us a way forward.',
  'select.title':'Who will explore the island?',
  'select.hint':'Choose a crew member to scout ahead.',
  'select.confirm':'Send ashore',
  'select.pick':'Choose a hero',
  'select.ranged.pistol':'Pistol','select.ranged.sword':'Thrown sword',
  'objective.label':'Objective',
  'objective.text':'Explore the coast and find a safe route for the crew.',
  'ui.skip':'Skip','ui.skipTitle':'Skip the story?','ui.skipBody':'You can replay it any time from Settings.',
  'ui.skipBodySelect':'You will still choose who goes ashore.',
  'ui.skipYes':'Skip','ui.skipNo':'Keep watching','ui.continue':'Tap to continue',
  'ui.replay':'Replay opening story','ui.loading':'Preparing the voyage…',
  'ui.error':'Level 1 could not start. Your story progress is saved.','ui.retry':'Try again','ui.menu':'Main menu',
  'ui.rotate':'Turn your phone sideways to continue the story.'
 },
 az:{"caption.admiral":"Qara Admiral…","hint.move":"Hərəkət üçün joystiki sürüşdür","hint.attack":"Vurmaq üçün HÜCUM düyməsinə toxun","select.badge":"Kəşfiyyatçı","outro.1":"Əla iş! Sahil ekipaj üçün təhlükəsizdir.","outro.2":"Cığır köhnə xarabalıqlara aparır. Yolumuza davam edək.","role.mate":"Birinci köməkçi","role.cook":"Aşpaz","speaker.captain": "Kapitan Brask", "speaker.lookout": "Pip", "speaker.bosun": "Tamsin", "role.captain": "Kapitan", "role.lookout": "Gözətçi", "role.bosun": "Botsman", "role.scout": "Kəşfiyyatçı", "caption.ambush": "Xəritədə olmayan sular · gecə yarısından sonra", "caption.arrival": "Adsız ada · şəfəqdən əvvəl", "a.1": "Kapitan! Dumanda gəmilər var!", "a.2": "Bayraqlarını görə bilirsən?", "a.3": "Yox… dayan. Topları bizə tərəf dönür!", "a.4": "Gövdəni deşdilər! Gəmiyə su dolur!", "a.5": "Qopmuş kəndirləri kəsin! Gəmini suyun üstündə saxlayın!", "a.6": "Sol tərəfdə quru var!", "a.7": "Adaya tərəf dönün! Burada sağ qalmarıq!", "b.1": "Bu vəziyyətdə bir də səfərə çıxa bilməz.", "b.2": "Yaralıları sahilə çıxarın. Gəmini bərkidin.", "b.3": "Bu ada xoşuma gəlmir, Kapitan.", "b.4": "Mənim də. Amma şirin su, taxta və ərzaq lazımdır.", "b.5": "Kimsə irəli gedib kəşfiyyat aparmalıdır. Sahildən uzaqlaşmayın.", "c.1": "Mən gedərəm.", "c.2": "Sahil boyunca irəlilə. Təhlükə görsən, geri qayıt.", "c.3": "Başa düşdüm. Bizə yol tapacağam.", "select.title": "Adanı kim kəşf edəcək?", "select.hint": "İrəli getmək üçün ekipajdan birini seç.", "select.confirm": "Sahilə göndər", "select.pick": "Qəhrəman seç", "select.ranged.pistol": "Tapança", "select.ranged.sword": "Atılan qılınc", "objective.label": "Tapşırıq", "objective.text": "Sahili kəşf et və ekipaj üçün təhlükəsiz yol tap.", "ui.skip": "Keç", "ui.skipTitle": "Hekayə keçilsin?", "ui.skipBody": "Onu istənilən vaxt Parametrlərdən yenidən izləyə bilərsən.", "ui.skipBodySelect": "Sahilə kimin gedəcəyini yenə də seçəcəksən.", "ui.skipYes": "Keç", "ui.skipNo": "İzləməyə davam et", "ui.continue": "Davam etmək üçün toxun", "ui.replay": "Giriş hekayəsini yenidən izlə", "ui.loading": "Səfər hazırlanır…", "ui.error": "1-ci səviyyə başlaya bilmədi. Hekayədəki irəliləyişin saxlanılıb.", "ui.retry": "Yenidən cəhd et", "ui.menu": "Əsas menyu", "ui.rotate": "Hekayəyə davam etmək üçün telefonu yan çevir."},
 tr:{"caption.admiral":"Kara Amiral…","hint.move":"Hareket için joystick’i kaydır","hint.attack":"Vurmak için SALDIRI’ya dokun","select.badge":"Keşifçi","outro.1":"Aferin! Kıyı tayfa için artık güvenli.","outro.2":"İz eski harabelere devam ediyor. Yola devam edelim.","role.mate":"İkinci kaptan","role.cook":"Aşçı","speaker.captain": "Kaptan Brask", "speaker.lookout": "Pip", "speaker.bosun": "Tamsin", "role.captain": "Kaptan", "role.lookout": "Gözcü", "role.bosun": "Lostromo", "role.scout": "Keşifçi", "caption.ambush": "Haritada olmayan sular · gece yarısından sonra", "caption.arrival": "İsimsiz bir ada · şafaktan önce", "a.1": "Kaptan! Sisin içinde gemiler var!", "a.2": "Bayraklarını görebiliyor musun?", "a.3": "Hayır… bekle. Topları bize dönüyor!", "a.4": "Gövdeyi deldiler! Gemi su alıyor!", "a.5": "Kopan halatları kesin! Gemiyi su üstünde tutun!", "a.6": "İskelede kara var!", "a.7": "Adaya dönün! Burada hayatta kalamayız!", "b.1": "Bu hâliyle bir sefer daha yapamaz.", "b.2": "Yaralıları karaya çıkarın. Gemiyi sağlama alın.", "b.3": "Bu adayı sevmedim, Kaptan.", "b.4": "Ben de. Ama tatlı suya, keresteye ve erzağa ihtiyacımız var.", "b.5": "Biri öne gidip keşif yapmalı. Kıyıdan ayrılmayın.", "c.1": "Ben giderim.", "c.2": "Kıyı boyunca ilerle. Tehlike görürsen geri dön.", "c.3": "Anlaşıldı. Bize bir yol bulacağım.", "select.title": "Adayı kim keşfedecek?", "select.hint": "Öne gidecek bir tayfa seç.", "select.confirm": "Karaya gönder", "select.pick": "Kahraman seç", "select.ranged.pistol": "Tabanca", "select.ranged.sword": "Fırlatılan kılıç", "objective.label": "Görev", "objective.text": "Kıyıyı keşfet ve tayfa için güvenli bir yol bul.", "ui.skip": "Geç", "ui.skipTitle": "Hikâye geçilsin mi?", "ui.skipBody": "İstediğin zaman Ayarlar’dan yeniden izleyebilirsin.", "ui.skipBodySelect": "Karaya kimin çıkacağını yine seçeceksin.", "ui.skipYes": "Geç", "ui.skipNo": "İzlemeye devam et", "ui.continue": "Devam etmek için dokun", "ui.replay": "Açılış hikâyesini yeniden izle", "ui.loading": "Sefer hazırlanıyor…", "ui.error": "Bölüm 1 başlatılamadı. Hikâye ilerlemen kaydedildi.", "ui.retry": "Tekrar dene", "ui.menu": "Ana menü", "ui.rotate": "Hikâyeye devam etmek için telefonunu yan çevir."},
 ru:{"caption.admiral":"Чёрный адмирал…","hint.move":"Двигайте джойстик, чтобы идти","hint.attack":"Нажмите АТАКА, чтобы ударить","select.badge":"Разведчик","outro.1":"Отлично! Берег безопасен для команды.","outro.2":"Тропа ведёт к старым руинам. Идём дальше.","role.mate":"Старпом","role.cook":"Кок","speaker.captain": "Капитан Браск", "speaker.lookout": "Пип", "speaker.bosun": "Тэмсин", "role.captain": "Капитан", "role.lookout": "Впередсмотрящий", "role.bosun": "Боцман", "role.scout": "Разведчик", "caption.ambush": "Неизведанные воды · за полночь", "caption.arrival": "Безымянный остров · перед рассветом", "a.1": "Капитан! В тумане корабли!", "a.2": "Флаги разглядеть можешь?", "a.3": "Нет… постой. Они разворачивают пушки!", "a.4": "Пробит корпус! Мы набираем воду!", "a.5": "Рубите оборванный такелаж! Держите её на плаву!", "a.6": "Земля по левому борту!", "a.7": "Поворачивай к острову! Здесь нам не выжить!", "b.1": "В таком виде она больше не выдержит плавания.", "b.2": "Раненых — на берег. Закрепите корабль.", "b.3": "Не нравится мне этот остров, капитан.", "b.4": "Мне тоже. Но нам нужны пресная вода, древесина и припасы.", "b.5": "Кто-то должен пойти на разведку. Держитесь берега.", "c.1": "Я пойду.", "c.2": "Иди вдоль берега. Если наткнёшься на беду — возвращайся.", "c.3": "Понял. Я найду нам путь.", "select.title": "Кто исследует остров?", "select.hint": "Выберите, кто отправится на разведку.", "select.confirm": "Отправить на берег", "select.pick": "Выберите героя", "select.ranged.pistol": "Пистолет", "select.ranged.sword": "Метание сабли", "objective.label": "Задание", "objective.text": "Исследуйте побережье и найдите безопасный путь для команды.", "ui.skip": "Пропустить", "ui.skipTitle": "Пропустить историю?", "ui.skipBody": "Её можно пересмотреть в любой момент в Настройках.", "ui.skipBodySelect": "Вы всё равно выберете, кто сойдёт на берег.", "ui.skipYes": "Пропустить", "ui.skipNo": "Смотреть дальше", "ui.continue": "Нажмите, чтобы продолжить", "ui.replay": "Пересмотреть вступление", "ui.loading": "Готовим плавание…", "ui.error": "Не удалось запустить уровень 1. Прогресс истории сохранён.", "ui.retry": "Повторить", "ui.menu": "Главное меню", "ui.rotate": "Поверните телефон горизонтально, чтобы продолжить."},
 pl:{"caption.admiral":"Czarny Admirał…","hint.move":"Przesuń joystick, aby się ruszać","hint.attack":"Dotknij ATAK, aby uderzyć","select.badge":"Zwiadowca","outro.1":"Dobra robota! Wybrzeże jest bezpieczne dla załogi.","outro.2":"Szlak prowadzi do starych ruin. Ruszajmy dalej.","role.mate":"Pierwszy oficer","role.cook":"Kucharz","speaker.captain": "Kapitan Brask", "speaker.lookout": "Pip", "speaker.bosun": "Tamsin", "role.captain": "Kapitan", "role.lookout": "Obserwator", "role.bosun": "Bosman", "role.scout": "Zwiadowca", "caption.ambush": "Niezbadane wody · po północy", "caption.arrival": "Bezimienna wyspa · przed świtem", "a.1": "Kapitanie! Statki we mgle!", "a.2": "Widzisz ich bandery?", "a.3": "Nie… czekaj. Obracają działa!", "a.4": "Przebili kadłub! Nabieramy wody!", "a.5": "Odciąć zerwane liny! Utrzymać ją na wodzie!", "a.6": "Ląd na lewej burcie!", "a.7": "Kurs na wyspę! Tu nie przeżyjemy!", "b.1": "W takim stanie nie przetrwa kolejnego rejsu.", "b.2": "Rannych na brzeg. Zabezpieczyć statek.", "b.3": "Nie podoba mi się ta wyspa, kapitanie.", "b.4": "Mnie też. Ale potrzebujemy słodkiej wody, drewna i zapasów.", "b.5": "Ktoś musi iść na zwiad. Trzymajcie się wybrzeża.", "c.1": "Ja pójdę.", "c.2": "Idź wzdłuż brzegu. Jeśli napotkasz kłopoty, wracaj.", "c.3": "Zrozumiałem. Znajdę dla nas drogę.", "select.title": "Kto zbada wyspę?", "select.hint": "Wybierz członka załogi na zwiad.", "select.confirm": "Wyślij na brzeg", "select.pick": "Wybierz bohatera", "select.ranged.pistol": "Pistolet", "select.ranged.sword": "Rzucana szabla", "objective.label": "Cel", "objective.text": "Zbadaj wybrzeże i znajdź bezpieczną drogę dla załogi.", "ui.skip": "Pomiń", "ui.skipTitle": "Pominąć historię?", "ui.skipBody": "Możesz ją obejrzeć ponownie w Ustawieniach.", "ui.skipBodySelect": "Nadal wybierzesz, kto zejdzie na brzeg.", "ui.skipYes": "Pomiń", "ui.skipNo": "Oglądaj dalej", "ui.continue": "Dotknij, aby kontynuować", "ui.replay": "Obejrzyj ponownie wstęp", "ui.loading": "Przygotowujemy rejs…", "ui.error": "Nie udało się uruchomić poziomu 1. Postęp historii jest zapisany.", "ui.retry": "Spróbuj ponownie", "ui.menu": "Menu główne", "ui.rotate": "Obróć telefon poziomo, aby kontynuować."}
};

function text(lang,key){const a=STRINGS[lang],b=STRINGS.en;return(a&&a[key])||b[key]||key}
function validate(){
 const errors=[];const keys=new Set(Object.keys(STRINGS.en));
 for(const [lang,tab] of Object.entries(STRINGS))for(const k of keys)if(!tab[k])errors.push(lang+' missing '+k);
 for(const s of SCENES)for(const b of s.beats){
  if(b.say&&!SPEAKERS[b.say])errors.push('unknown speaker '+b.say);
  if(b.text&&!keys.has(b.text))errors.push('missing text '+b.text);
  if(b.caption&&!keys.has(b.caption))errors.push('missing caption '+b.caption);
 }
 for(const s of Object.values(SPEAKERS))if(s.role&&!keys.has(s.role))errors.push('missing role '+s.role);
 return errors;
}
root.PirateStoryData=Object.freeze({version:1,SPEAKERS,SCENES,STRINGS,text,validate,
 CHECKPOINTS:['pending','ambush','arrival','select','confirmed','handoff','complete']});
})();
