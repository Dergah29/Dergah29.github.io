/* Meyxana contract chain, after Salman's secret chest (quest.js). Each contract is offered by one tavern regular, is
 * accepted in conversation and is met by finishing a real level AFTER accepting it (the engine reports every finished
 * level through levelComplete). The chain opens one contract at a time: Salman → Kasim → Anna → Yunus → Bonehead.
 * Payment is a wallet receipt (tavern-contract-<id>-v1 / reward), so a contract can never pay twice.
 * State: pf-tavern-contracts-v1 (+ backup), {v:1, rev, stages:{id:'active'|'ready'|'claimed'}}. Unknown future versions
 * are left untouched (read returns null and nothing is written). */
(()=>{'use strict';if(window.PirateTavernContracts)return;
const KEY='pf-tavern-contracts-v1',BACK=KEY+'-backup';
const LIST=[
 {id:'kasim-cove',npc:'dicer',level:4,reward:100},
 {id:'anna-storm',npc:'knife',level:6,reward:150},
 {id:'yunus-light',npc:'barkeep',level:7,reward:180},
 {id:'bonehead-admiral',npc:'xo',level:10,reward:300}];
const TEXT={
 az:{accept:'MÜQAVİLƏNİ QƏBUL ET',map:'XƏRİTƏYƏ GET',claim:'{g} QIZILI AL',locked:'Bu bölüm hələ bağlıdır — əvvəlki bölümləri tamamla.',error:'Saxlama alınmadı. Yenidən cəhd et.',done:'Müqavilə tamamlandı — meyxanaya qayıt!',
  'kasim-cove':{offer:'Qaçaqmalçılar Qasımın zər pulunu aparıblar. Qaçaqmalçı Koyunu (4-cü bölüm) təmizlə. Mükafat: {g} qızıl.',active:'Tapşırıq: 4-cü bölümü — Qaçaqmalçı Koyunu keç, sonra Qasıma qayıt. Mükafat: {g} qızıl.',ready:'Koy təmizdir! Qasım {g} qızılı hazırlayıb.',claimed:'Qasımın müqaviləsi tamamlandı.'},
  'anna-storm':{offer:'Fırtına Kapitanı Annanın gəmisini batırıb. Fırtına Adasında (6-cı bölüm) onu məğlub et. Mükafat: {g} qızıl.',active:'Tapşırıq: 6-cı bölümdə Fırtına Kapitanını məğlub et, sonra Annaya qayıt. Mükafat: {g} qızıl.',ready:'Kapitan düşdü! Anna {g} qızılı verməyə hazırdır.',claimed:'Annanın müqaviləsi tamamlandı.'},
  'yunus-light':{offer:'Mayakçı gəmiləri qayalara çəkir. Qaranlıq Mayakı (7-ci bölüm) yenidən yandır. Mükafat: {g} qızıl.',active:'Tapşırıq: 7-ci bölümü — Qaranlıq Mayakı keç, sonra Yunusa qayıt. Mükafat: {g} qızıl.',ready:'Mayak yenə yanır! Yunus {g} qızılı hazırlayıb.',claimed:'Yunusun müqaviləsi tamamlandı.'},
  'bonehead-admiral':{offer:'Takk-takk! Qara Admiral bütün dənizi qorxudur. Onu məğlub et (10-cu bölüm). Mükafat: {g} qızıl.',active:'Tapşırıq: 10-cu bölümdə Qara Admiralı məğlub et, sonra Sümükbaşa qayıt. Mükafat: {g} qızıl.',ready:'Admiral yıxıldı! Sümükbaş {g} qızılı verir.',claimed:'Sümükbaşın müqaviləsi tamamlandı.'}},
 en:{accept:'ACCEPT CONTRACT',map:'OPEN MAP',claim:'CLAIM {g} GOLD',locked:'That level is still locked — finish the earlier levels first.',error:'Could not save. Please try again.',done:'Contract done — return to the tavern!',
  'kasim-cove':{offer:'Smugglers took Kasim’s dice money. Clear Smugglers’ Cove (Level 4). Reward: {g} gold.',active:'Clear Level 4 — Smugglers’ Cove, then return to Kasim. Reward: {g} gold.',ready:'The cove is clear! Kasim has {g} gold for you.',claimed:'Kasim’s contract complete.'},
  'anna-storm':{offer:'The Storm Captain sank Anna’s ship. Defeat him on Stormbreaker Island (Level 6). Reward: {g} gold.',active:'Defeat the Storm Captain in Level 6, then return to Anna. Reward: {g} gold.',ready:'The captain has fallen! Anna has {g} gold for you.',claimed:'Anna’s contract complete.'},
  'yunus-light':{offer:'The Lightkeeper lures ships onto the rocks. Relight the Dark Lighthouse (Level 7). Reward: {g} gold.',active:'Clear Level 7 — The Dark Lighthouse, then return to Yunus. Reward: {g} gold.',ready:'The lighthouse burns again! Yunus has {g} gold for you.',claimed:'Yunus’s contract complete.'},
  'bonehead-admiral':{offer:'Clack-clack! The Black Admiral terrorises the whole sea. Defeat him (Level 10). Reward: {g} gold.',active:'Defeat the Black Admiral in Level 10, then return to Bonehead. Reward: {g} gold.',ready:'The Admiral is down! Bonehead pays {g} gold.',claimed:'Bonehead’s contract complete.'}},
 tr:{accept:'GÖREVİ KABUL ET',map:'HARİTAYI AÇ',claim:'{g} ALTINI AL',locked:'Bu bölüm hâlâ kilitli — önce önceki bölümleri bitir.',error:'Kaydedilemedi. Tekrar dene.',done:'Görev tamam — meyhaneye dön!',
  'kasim-cove':{offer:'Kaçakçılar Kasım’ın zar parasını aldı. Kaçakçı Koyu’nu (4. bölüm) temizle. Ödül: {g} altın.',active:'4. bölümü — Kaçakçı Koyu’nu geç, sonra Kasım’a dön. Ödül: {g} altın.',ready:'Koy temiz! Kasım’ın {g} altını hazır.',claimed:'Kasım’ın görevi tamamlandı.'},
  'anna-storm':{offer:'Fırtına Kaptanı Anna’nın gemisini batırdı. Fırtınakıran Adası’nda (6. bölüm) onu yen. Ödül: {g} altın.',active:'6. bölümde Fırtına Kaptanı’nı yen, sonra Anna’ya dön. Ödül: {g} altın.',ready:'Kaptan düştü! Anna’nın {g} altını hazır.',claimed:'Anna’nın görevi tamamlandı.'},
  'yunus-light':{offer:'Fenerci gemileri kayalara çekiyor. Karanlık Fener’i (7. bölüm) yeniden yak. Ödül: {g} altın.',active:'7. bölümü — Karanlık Fener’i geç, sonra Yunus’a dön. Ödül: {g} altın.',ready:'Fener yine yanıyor! Yunus’un {g} altını hazır.',claimed:'Yunus’un görevi tamamlandı.'},
  'bonehead-admiral':{offer:'Tak-tak! Kara Amiral tüm denizi korkutuyor. Onu yen (10. bölüm). Ödül: {g} altın.',active:'10. bölümde Kara Amiral’i yen, sonra Kemikkafa’ya dön. Ödül: {g} altın.',ready:'Amiral yenildi! Kemikkafa {g} altın veriyor.',claimed:'Kemikkafa’nın görevi tamamlandı.'}},
 ru:{accept:'ПРИНЯТЬ ЗАДАНИЕ',map:'ОТКРЫТЬ КАРТУ',claim:'ПОЛУЧИТЬ {g} ЗОЛОТА',locked:'Этот уровень ещё закрыт — сначала пройди предыдущие.',error:'Не удалось сохранить. Повторите попытку.',done:'Задание выполнено — вернись в таверну!',
  'kasim-cove':{offer:'Контрабандисты забрали деньги Касыма. Очисти Бухту контрабандистов (уровень 4). Награда: {g} золота.',active:'Пройди уровень 4 — Бухту контрабандистов, затем вернись к Касыму. Награда: {g} золота.',ready:'Бухта свободна! Касым приготовил {g} золота.',claimed:'Задание Касыма выполнено.'},
  'anna-storm':{offer:'Штормовой капитан потопил корабль Анны. Победи его на острове Штормолом (уровень 6). Награда: {g} золота.',active:'Победи Штормового капитана на уровне 6, затем вернись к Анне. Награда: {g} золота.',ready:'Капитан повержен! Анна приготовила {g} золота.',claimed:'Задание Анны выполнено.'},
  'yunus-light':{offer:'Смотритель маяка заманивает корабли на скалы. Зажги Тёмный маяк снова (уровень 7). Награда: {g} золота.',active:'Пройди уровень 7 — Тёмный маяк, затем вернись к Юнусу. Награда: {g} золота.',ready:'Маяк снова горит! Юнус приготовил {g} золота.',claimed:'Задание Юнуса выполнено.'},
  'bonehead-admiral':{offer:'Тук-тук! Чёрный адмирал держит в страхе всё море. Победи его (уровень 10). Награда: {g} золота.',active:'Победи Чёрного адмирала на уровне 10, затем вернись к Костяшке. Награда: {g} золота.',ready:'Адмирал повержен! Костяшка платит {g} золота.',claimed:'Задание Костяшки выполнено.'}},
 pl:{accept:'PRZYJMIJ ZADANIE',map:'OTWÓRZ MAPĘ',claim:'ODBIERZ {g} ZŁOTA',locked:'Ten poziom jest jeszcze zablokowany — najpierw ukończ wcześniejsze.',error:'Nie udało się zapisać. Spróbuj ponownie.',done:'Zadanie wykonane — wróć do tawerny!',
  'kasim-cove':{offer:'Przemytnicy zabrali pieniądze Kasima. Oczyść Zatokę przemytników (poziom 4). Nagroda: {g} złota.',active:'Ukończ poziom 4 — Zatokę przemytników, potem wróć do Kasima. Nagroda: {g} złota.',ready:'Zatoka czysta! Kasim ma dla ciebie {g} złota.',claimed:'Zadanie Kasima ukończone.'},
  'anna-storm':{offer:'Kapitan Burzy zatopił statek Anny. Pokonaj go na Wyspie Łamacza Burz (poziom 6). Nagroda: {g} złota.',active:'Pokonaj Kapitana Burzy na poziomie 6, potem wróć do Anny. Nagroda: {g} złota.',ready:'Kapitan upadł! Anna ma dla ciebie {g} złota.',claimed:'Zadanie Anny ukończone.'},
  'yunus-light':{offer:'Latarnik zwabia statki na skały. Rozpal znów Mroczną latarnię (poziom 7). Nagroda: {g} złota.',active:'Ukończ poziom 7 — Mroczną latarnię, potem wróć do Yunusa. Nagroda: {g} złota.',ready:'Latarnia znów płonie! Yunus ma dla ciebie {g} złota.',claimed:'Zadanie Yunusa ukończone.'},
  'bonehead-admiral':{offer:'Stuk-stuk! Czarny Admirał terroryzuje całe morze. Pokonaj go (poziom 10). Nagroda: {g} złota.',active:'Pokonaj Czarnego Admirała na poziomie 10, potem wróć do Kościanego. Nagroda: {g} złota.',ready:'Admirał pokonany! Kościany płaci {g} złota.',claimed:'Zadanie Kościanego ukończone.'}}
};
const fmt=(s,g)=>String(s).replace(/\{g\}/g,g);
function read(){const valid=[];let present=false;for(const k of[KEY,BACK]){try{const raw=localStorage.getItem(k);if(raw===null)continue;present=true;const s=JSON.parse(raw);if(s?.v>1)return null;if(s?.v===1&&Number.isSafeInteger(s.rev)&&s.rev>=0&&s.stages&&typeof s.stages==='object')valid.push(s)}catch{present=true}}
 return valid.sort((a,b)=>b.rev-a.rev)[0]||(!present?{v:1,rev:0,stages:{}}:null)}
function write(s){const next=JSON.stringify({v:1,rev:s.rev+1,stages:s.stages});let ok=false;for(const k of[KEY,BACK])try{localStorage.setItem(k,next);ok=true}catch{}return ok}
const scope=c=>'tavern-contract-'+c.id+'-v1';
function paid(c){try{return!!window.PirateEconomy?.claimed(scope(c),'reward')}catch{return false}}
function prevDone(i){if(i===0)return window.PirateTavernQuest?.status()==='claimed';return C.status(LIST[i-1].id)==='claimed'}
const C=window.PirateTavernContracts={list:LIST,
 text(lang){return TEXT[lang]||TEXT.en},
 forNpc(npc){return LIST.find(c=>c.npc===npc)||null},
 status(id){const i=LIST.findIndex(c=>c.id===id);if(i<0)return'unavailable';const c=LIST[i],s=read();if(!s)return'unavailable';if(paid(c))return'claimed';
  const st=s.stages[id];if(st==='active'||st==='ready')return st;if(st==='claimed')return'claimed';return prevDone(i)?'available':'locked'},
 lines(npc,lang){const c=this.forNpc(npc);if(!c)return null;const st=this.status(c.id);if(st==='locked'||st==='unavailable')return null;const t=this.text(lang);return{c,st,line:fmt(t[c.id][st==='available'?'offer':st],c.reward),t}},
 accept(id){const s=read();if(!s||this.status(id)!=='available')return false;s.stages[id]='active';return write(s)},
 /* called by the level engine when a level is finished (after its rewards are banked) */
 levelComplete(n){const s=read();if(!s)return[];const done=[];for(const c of LIST)if(c.level===n&&s.stages[c.id]==='active'){s.stages[c.id]='ready';done.push(c.id)}if(done.length&&!write(s))return[];return done},
 claim(id){const c=LIST.find(c=>c.id===id);const s=read();if(!c||!s)return false;if(paid(c)){s.stages[id]='claimed';write(s);return true}if(s.stages[id]!=='ready')return false;
  const E=window.PirateEconomy;if(!E)return false;try{E.earn(scope(c),'reward',c.reward)}catch{return false}if(!paid(c))return false;s.stages[id]='claimed';write(s);return true}
};
})();
