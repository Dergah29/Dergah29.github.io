/* Pirate Strike — CAPTAIN'S WARDROBE (the shop), opened from the main menu SHOP button.
 * Full-screen captain's cabin: painted backdrop (shop/assets/cabin.webp) with live lanterns,
 * candles, dust in the window light, coin glints and the harbour moving behind the stern
 * windows. Left: categories. Centre: the hero, large and animated (idle, run, jump, sword,
 * pistol / sword throw, dash), wearing whatever is selected. Right: item cards with price,
 * rarity and owned / equipped / locked state. Bottom: animation buttons and item details.
 * Gold, ownership and equipment: PirateEconomy (economy.js). Looks: PirateCosmetics.
 * In-game gold only. Landscape, touch first; Android BACK closes dialogs, then the shop. */
(()=>{'use strict';
if(window.PirateShop)return;
const A='shop/assets/',SFX='adventure/levels/assets/level-03/';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),TAU=Math.PI*2;
const loadImage=src=>new Promise((ok,fail)=>{const i=new Image();i.decoding='async';i.onload=()=>ok(i);i.onerror=()=>fail(Error('image '+src));i.src=src});
const HEROES=['scarlet','sailor','captain','shark','crab'];
const T={
 en:{title:'CAPTAIN’S WARDROBE',back:'Back',owned:'Owned',equipped:'Equipped',equip:'Equip',unequip:'Take off',buy:'Buy',open:'Open',locked:'Locked',need:'Need {n} more gold',notFor:'Not for {h}',onlyFor:'Only for {h}',confirm:'Buy {i} for {p} gold?',cancel:'Cancel',yes:'Buy',got:'You found',refund:'Nothing left to find — {n} gold returned',funds:'Not enough gold',bought:'Bought!',equippedMsg:'Equipped',settings:'Settings',sound:'Sound',effects:'Shop effects',on:'On',off:'Off',playAs:'Play as {h}',active:'Your hero',reqLevel:'Complete level {n}: {name}',reqItem:'Requires {i}',active2:'Active',chestInfo:'Gives a {r} item you do not own yet.',close:'Close',wearNow:'Wear it',idle:'Idle',run:'Run',jump:'Jump',sword:'Sword',pistol:'Pistol',throw:'Throw',dash:'Dash',tryOn:'Trying on',free:'Free',hero:'Hero'},
 az:{title:'KAPİTANIN QARDEROBU',back:'Geri',owned:'Səndədir',equipped:'Geyinilib',equip:'Geyin',unequip:'Çıxar',buy:'Al',open:'Aç',locked:'Bağlıdır',need:'Daha {n} qızıl lazımdır',notFor:'{h} üçün deyil',onlyFor:'Yalnız {h} üçün',confirm:'{i} — {p} qızıla alınsın?',cancel:'Ləğv et',yes:'Al',got:'Tapdın',refund:'Tapılacaq bir şey qalmayıb — {n} qızıl qaytarıldı',funds:'Qızıl çatmır',bought:'Alındı!',equippedMsg:'Geyinildi',settings:'Ayarlar',sound:'Səs',effects:'Mağaza effektləri',on:'Açıq',off:'Bağlı',playAs:'{h} ilə oyna',active:'Sənin qəhrəmanın',reqLevel:'{n}. mərhələni keç: {name}',reqItem:'Əvvəlcə {i} lazımdır',active2:'Aktivdir',chestInfo:'Səndə olmayan {r} əşya verir.',close:'Bağla',wearNow:'Geyin',idle:'Dayan',run:'Qaç',jump:'Tullan',sword:'Qılınc',pistol:'Tapança',throw:'At',dash:'Sıçra',tryOn:'Sınayırsan',free:'Pulsuz',hero:'Qəhrəman'},
 tr:{title:'KAPTANIN GARDIROBU',back:'Geri',owned:'Sende',equipped:'Giyildi',equip:'Giy',unequip:'Çıkar',buy:'Satın al',open:'Aç',locked:'Kilitli',need:'{n} altın daha gerekli',notFor:'{h} için değil',onlyFor:'Yalnızca {h} için',confirm:'{i} {p} altına alınsın mı?',cancel:'Vazgeç',yes:'Satın al',got:'Buldun',refund:'Bulunacak bir şey kalmadı — {n} altın iade',funds:'Altın yetmiyor',bought:'Alındı!',equippedMsg:'Giyildi',settings:'Ayarlar',sound:'Ses',effects:'Mağaza efektleri',on:'Açık',off:'Kapalı',playAs:'{h} ile oyna',active:'Kahramanın',reqLevel:'{n}. bölümü bitir: {name}',reqItem:'Önce {i} gerekli',active2:'Etkin',chestInfo:'Sende olmayan {r} bir eşya verir.',close:'Kapat',wearNow:'Giy',idle:'Bekle',run:'Koş',jump:'Zıpla',sword:'Kılıç',pistol:'Tabanca',throw:'Fırlat',dash:'Atıl',tryOn:'Deniyorsun',free:'Ücretsiz',hero:'Kahraman'},
 ru:{title:'ГАРДЕРОБ КАПИТАНА',back:'Назад',owned:'Есть',equipped:'Надето',equip:'Надеть',unequip:'Снять',buy:'Купить',open:'Открыть',locked:'Закрыто',need:'Нужно ещё {n} золота',notFor:'Не для: {h}',onlyFor:'Только для: {h}',confirm:'Купить «{i}» за {p} золота?',cancel:'Отмена',yes:'Купить',got:'Находка',refund:'Больше нечего найти — возвращено {n} золота',funds:'Не хватает золота',bought:'Куплено!',equippedMsg:'Надето',settings:'Настройки',sound:'Звук',effects:'Эффекты магазина',on:'Вкл',off:'Выкл',playAs:'Играть: {h}',active:'Ваш герой',reqLevel:'Пройдите уровень {n}: {name}',reqItem:'Сначала: {i}',active2:'Активно',chestInfo:'Даёт {r} предмет, которого у вас нет.',close:'Закрыть',wearNow:'Надеть',idle:'Стойка',run:'Бег',jump:'Прыжок',sword:'Сабля',pistol:'Пистолет',throw:'Бросок',dash:'Рывок',tryOn:'Примерка',free:'Бесплатно',hero:'Герой'},
 pl:{title:'GARDEROBA KAPITANA',back:'Wróć',owned:'Masz',equipped:'Założone',equip:'Załóż',unequip:'Zdejmij',buy:'Kup',open:'Otwórz',locked:'Zablokowane',need:'Brakuje {n} złota',notFor:'Nie dla: {h}',onlyFor:'Tylko dla: {h}',confirm:'Kupić „{i}” za {p} złota?',cancel:'Anuluj',yes:'Kup',got:'Znalezisko',refund:'Nic już nie zostało — zwrócono {n} złota',funds:'Za mało złota',bought:'Kupione!',equippedMsg:'Założone',settings:'Ustawienia',sound:'Dźwięk',effects:'Efekty sklepu',on:'Wł',off:'Wył',playAs:'Graj jako {h}',active:'Twój bohater',reqLevel:'Ukończ poziom {n}: {name}',reqItem:'Najpierw: {i}',active2:'Aktywne',chestInfo:'Daje {r} przedmiot, którego nie masz.',close:'Zamknij',wearNow:'Załóż',idle:'Postawa',run:'Bieg',jump:'Skok',sword:'Szabla',pistol:'Pistolet',throw:'Rzut',dash:'Zryw',tryOn:'Przymierzasz',free:'Za darmo',hero:'Bohater'}};
const FILTER={en:['Show items','All','Owned','Unowned','No matching items'],az:['Əşyaları süz','Hamısı','Alınmış','Alınmamış','Uyğun əşya yoxdur'],tr:['Eşyaları filtrele','Tümü','Alınan','Alınmayan','Eşleşen eşya yok'],ru:['Фильтр предметов','Все','Куплено','Не куплено','Нет подходящих предметов'],pl:['Filtr przedmiotów','Wszystkie','Posiadane','Nieposiadane','Brak pasujących przedmiotów']};
const AFFORDABLE={en:'Affordable',az:'Qızılım çatır',tr:'Alabilirim',ru:'По карману',pl:'Stać mnie'};
const SAVE_ERROR={en:'Could not save. Please try again.',az:'Saxlamaq alınmadı. Yenidən cəhd et.',tr:'Kaydedilemedi. Lütfen tekrar dene.',ru:'Не удалось сохранить. Попробуйте ещё раз.',pl:'Nie udało się zapisać. Spróbuj ponownie.'};
const CHEST={
 en:{title:'Possible rewards',rules:'Owned and locked items are excluded. Rewards can belong to any hero. Odds change as your collection grows. Percentages are rounded; weight fractions are exact.',changed:'Rewards changed. Review the updated odds, then confirm again.',refund:'100%: {r} gold returned. Opening costs {p}; net cost {n} gold.',skip:'Reveal now',opening:'Unlocking your treasure…',rarity:'Rarity'},
 az:{title:'Mümkün mükafatlar',rules:'Alınmış və bağlı əşyalar daxil edilmir. Mükafat istənilən qəhrəman üçün ola bilər. Kolleksiya böyüdükcə ehtimallar dəyişir. Faizlər yuvarlaqdır; çəki kəsrləri dəqiqdir.',changed:'Mükafatlar dəyişdi. Yeni ehtimallara bax və yenidən təsdiqlə.',refund:'100%: {r} qızıl qaytarılır. Açılış {p}; xalis xərc {n} qızıl.',skip:'İndi göstər',opening:'Xəzinən açılır…',rarity:'Nadirlik'},
 tr:{title:'Olası ödüller',rules:'Alınmış ve kilitli eşyalar hariçtir. Ödül herhangi bir kahramana ait olabilir. Koleksiyon büyüdükçe olasılıklar değişir. Yüzdeler yuvarlanır; ağırlık kesirleri kesindir.',changed:'Ödüller değişti. Yeni olasılıkları incele ve tekrar onayla.',refund:'%100: {r} altın iade. Açılış {p}; net maliyet {n} altın.',skip:'Şimdi göster',opening:'Hazinen açılıyor…',rarity:'Nadirlik'},
 ru:{title:'Возможные награды',rules:'Купленные и закрытые предметы исключены. Награда может быть для любого героя. Шансы меняются с коллекцией. Проценты округлены; доли веса точные.',changed:'Награды изменились. Проверьте новые шансы и подтвердите снова.',refund:'100%: возврат {r} золота. Открытие стоит {p}; чистый расход {n}.',skip:'Показать сейчас',opening:'Открываем сокровища…',rarity:'Редкость'},
 pl:{title:'Możliwe nagrody',rules:'Posiadane i zablokowane przedmioty są wykluczone. Nagroda może być dla dowolnego bohatera. Szanse zmieniają się z kolekcją. Procenty są zaokrąglone; ułamki wag są dokładne.',changed:'Nagrody zmieniły się. Sprawdź nowe szanse i potwierdź ponownie.',refund:'100%: zwrot {r} złota. Otwarcie kosztuje {p}; koszt netto {n}.',skip:'Pokaż teraz',opening:'Otwieranie skarbu…',rarity:'Rzadkość'}};
const fmt=(s,o)=>s.replace(/\{(\w+)\}/g,(_,k)=>o[k]??'');
const CAT_ICON={outfit:'outfit',weapon:'weapon-gold',hat:'hat-crimson',accessory:'acc',effect:'fx-gold',upgrade:'up-magnet-1',chest:'chest-captain'};
const COIN='<svg viewBox="0 0 32 32" aria-hidden="true"><defs><radialGradient id="pfsc" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#fff8d0"/><stop offset=".45" stop-color="#f5c542"/><stop offset="1" stop-color="#9a5e10"/></radialGradient></defs><circle cx="16" cy="16" r="14" fill="url(#pfsc)" stroke="#5a3406" stroke-width="2"/><circle cx="16" cy="16" r="9.5" fill="none" stroke="#a86a14" stroke-width="1.6"/><path d="M12 11h8l-2 5 2 5h-8l2-5z" fill="#b8771a" opacity=".8"/></svg>';
const LOCK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0110 0v3" fill="none" stroke="#e8d6b0" stroke-width="2.4"/><rect x="4.5" y="10" width="15" height="11" rx="2.2" fill="#c8a060" stroke="#4a2e10" stroke-width="1.4"/><circle cx="12" cy="15.2" r="1.8" fill="#4a2e10"/></svg>';
const CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#2f8a4a" stroke="#c8f0c8" stroke-width="1.6"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const GEAR='<svg viewBox="0 0 64 64" aria-hidden="true"><path fill="#f3cf6e" stroke="#3a210b" stroke-width="2.4" d="M28 4h8l1.6 7.2a21 21 0 015.6 2.3l6.3-3.9 5.7 5.7-3.9 6.3a21 21 0 012.3 5.6L60 28v8l-7.2 1.6a21 21 0 01-2.3 5.6l3.9 6.3-5.7 5.7-6.3-3.9a21 21 0 01-5.6 2.3L36 60h-8l-1.6-7.2a21 21 0 01-5.6-2.3l-6.3 3.9-5.7-5.7 3.9-6.3a21 21 0 01-2.3-5.6L4 36v-8l7.2-1.6a21 21 0 012.3-5.6l-3.9-6.3 5.7-5.7 6.3 3.9a21 21 0 015.6-2.3z"/><circle cx="32" cy="32" r="9" fill="#5a3412" stroke="#3a210b" stroke-width="2.4"/></svg>';
const ARROW='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const CSS=`
#pf-shop{position:fixed;inset:0;z-index:23500;overflow:hidden;background:#0b0704;color:#f3e6c8;font-family:"Trebuchet MS","Segoe UI",Roboto,"Noto Sans",Arial,sans-serif;user-select:none;-webkit-user-select:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;--u:7px;--sl:0px;--sr:0px}
#pf-shop *{box-sizing:border-box}
#pf-shop button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}
#pf-shop .sh-plate{position:absolute;left:0;top:0;background:url(${A}cabin.webp) 0 0/100% 100% no-repeat;transform-origin:0 0;will-change:transform}
#pf-shop canvas.sh-fx{position:absolute;left:0;top:0;pointer-events:none}
#pf-shop canvas.sh-hero{position:absolute;pointer-events:none}
#pf-shop .sh-shade{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 60% 70% at 50% 58%,transparent 40%,#0006 100%)}
#pf-shop .sh-ui{position:absolute;inset:0;padding:0 var(--sr) 0 var(--sl)}
#pf-shop .wood{position:absolute;border:calc(var(--u)*1.9) solid transparent;border-image:url(${A}ui-frame.png) 66 fill / calc(var(--u)*1.9) stretch;filter:drop-shadow(0 calc(var(--u)*.5) calc(var(--u)*.9) #000c)}
#pf-shop .wood.thin{border-width:calc(var(--u)*1.2);border-image-width:calc(var(--u)*1.2)}
#pf-shop .gold{background:linear-gradient(180deg,#fffbe6 0%,#ffe596 30%,#f1b44a 58%,#b56a1d 82%,#e8a948 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 1px 0 #2c1404) drop-shadow(0 2px 3px #000c)}
#pf-shop .disp{font-family:Georgia,"Noto Serif","Times New Roman",serif;font-weight:900;letter-spacing:.04em}
/* top bar */
#pf-shop .sh-back{position:absolute;left:calc(var(--sl) + var(--u)*1.2);top:calc(var(--u)*1);height:calc(var(--u)*6);min-height:40px;padding:0 calc(var(--u)*1.6) 0 calc(var(--u)*1);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:max(13px,calc(var(--u)*2));font-weight:800}
#pf-shop .sh-back svg{width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);color:#f6d27a}
#pf-shop .sh-title{position:absolute;left:50%;top:calc(var(--u)*.4);transform:translateX(-50%);padding:calc(var(--u)*1.25) calc(var(--u)*6.4);white-space:nowrap;border:0 solid transparent;border-image:url(${A}ui-banner.png) 0 66 fill / 0 calc(var(--u)*5.6) stretch;filter:drop-shadow(0 calc(var(--u)*.5) calc(var(--u)*.8) #000c)}
#pf-shop .sh-title b{font-size:max(15px,calc(var(--u)*2.9));display:block;line-height:1;overflow:hidden;text-overflow:ellipsis}
#pf-shop .sh-goldchip{position:absolute;right:calc(var(--sr) + var(--u)*9);top:calc(var(--u)*1);height:calc(var(--u)*6);min-height:42px;min-width:calc(var(--u)*15);display:flex;align-items:center;gap:calc(var(--u)*.8);padding:0 calc(var(--u)*1.6) 0 calc(var(--u)*.8);border-radius:999px;background:linear-gradient(180deg,#3a2210ee,#1c0f06ee);border:calc(var(--u)*.3) solid #d8a84a;box-shadow:0 calc(var(--u)*.4) calc(var(--u)*1.2) #000a}
#pf-shop .sh-goldchip svg{width:calc(var(--u)*4);height:calc(var(--u)*4);flex:none}
#pf-shop .sh-goldchip span{font-size:max(15px,calc(var(--u)*2.6));font-weight:900;color:#ffe9a8;text-shadow:0 2px 0 #3a1c04;font-variant-numeric:tabular-nums}
#pf-shop .sh-goldchip.bump{animation:shbump .45s}
#pf-shop .sh-goldchip.short{animation:shshake .4s}
#pf-shop .sh-gear{position:absolute;right:calc(var(--sr) + var(--u)*1.2);top:calc(var(--u)*1);width:max(44px,calc(var(--u)*6.4));height:max(44px,calc(var(--u)*6.4));padding:calc(var(--u)*.9);border-radius:50%}
#pf-shop .sh-gear svg{width:100%;height:100%;transition:transform .5s}#pf-shop .sh-gear:active svg{transform:rotate(60deg)}
/* left: categories */
#pf-shop .sh-cats{left:calc(var(--sl) + var(--u)*1.2);top:max(calc(var(--u)*7.6),calc(var(--u)*1 + 42px));bottom:calc(var(--u)*.8);width:calc(var(--u)*22);padding:calc(var(--u)*.3) calc(var(--u)*.2);display:flex;flex-direction:column;gap:calc(var(--u)*.15)}
#pf-shop .sh-cat{flex:1 1 0;min-height:40px;display:flex;align-items:center;gap:calc(var(--u)*.9);padding:0 calc(var(--u)*.8);border-radius:calc(var(--u)*.8);border:1px solid #c99a4455;background:linear-gradient(180deg,#3a2210,#24140a);text-align:left;font-size:max(11px,calc(var(--u)*1.7));font-weight:800;letter-spacing:-.01em;color:#ecd9b0;position:relative;transition:transform .15s,background .15s}
#pf-shop .sh-cat .md{flex:none;display:grid;place-items:center;width:calc(var(--u)*3.9);height:calc(var(--u)*3.9);background:url(${A}ui-medallion.png) center/contain no-repeat}
#pf-shop .sh-cat i{width:calc(var(--u)*2.7);height:calc(var(--u)*2.7);background-size:cover;filter:drop-shadow(0 2px 2px #000a)}
#pf-shop .sh-cat.on{background:linear-gradient(180deg,#8a5a1e,#4a2a0c);border-color:#ffd76a;color:#fff6d8;box-shadow:inset 0 0 calc(var(--u)*1.4) #ffcf6a55,0 0 calc(var(--u)*1) #ffb84466}
#pf-shop .sh-cat:active{transform:scale(.97)}
#pf-shop .sh-cat span{flex:1;min-width:0;padding-right:max(10px,calc(var(--u)*1.3));line-height:1.05;overflow-wrap:anywhere}
#pf-shop .sh-cat em{position:absolute;right:calc(var(--u)*.5);top:calc(var(--u)*.3);font-style:normal;font-size:max(9px,calc(var(--u)*1.15));font-weight:800;color:#ffd76a;opacity:.9}
/* centre */
#pf-shop .sh-heroes{position:absolute;top:calc(var(--u)*8.2);display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1)}
#pf-shop .sh-arrow{flex:none;width:max(40px,calc(var(--u)*5));height:max(40px,calc(var(--u)*5));border-radius:50%;border:calc(var(--u)*.28) solid #d8a84a;background:radial-gradient(circle at 40% 35%,#6a4220,#2a1608);color:#ffd76a;display:grid;place-items:center;padding:0;box-shadow:0 calc(var(--u)*.3) calc(var(--u)*.8) #000a}
#pf-shop .sh-arrow svg{width:55%;height:55%}#pf-shop .sh-arrow.r svg{transform:scaleX(-1)}
#pf-shop .sh-who{min-width:0;width:calc(var(--u)*17);height:max(40px,calc(var(--u)*5));padding:0 calc(var(--u)*1.4) 0 calc(var(--u)*.5);border-radius:999px;background:#1c0f06d8;border:calc(var(--u)*.24) solid #c99a44;display:flex;align-items:center;gap:calc(var(--u)*.8)}
#pf-shop .sh-who div{min-width:0}#pf-shop .sh-who b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#pf-shop .sh-who img{width:calc(var(--u)*4);height:calc(var(--u)*4);border-radius:50%;object-fit:cover;border:2px solid #d8a84a;background:#21384c;image-rendering:auto}
#pf-shop .sh-who b{font-size:max(14px,calc(var(--u)*2.2))}
#pf-shop .sh-who small{display:block;font-size:max(10px,calc(var(--u)*1.25));color:#9fe0a8;font-weight:700}
#pf-shop .sh-play{flex:none;padding:0 calc(var(--u)*1.2);height:max(40px,calc(var(--u)*4.2));border-radius:999px;border:calc(var(--u)*.22) solid #9fe0a8;background:linear-gradient(180deg,#2f7a44,#184a26);font-size:max(12px,calc(var(--u)*1.6));font-weight:800;color:#effff0;box-shadow:0 calc(var(--u)*.3) calc(var(--u)*.8) #000a}
#pf-shop .sh-try{position:absolute;padding:calc(var(--u)*.35) calc(var(--u)*1.2);border-radius:999px;background:#1c0f06c8;border:1px solid #c99a4499;font-size:max(11px,calc(var(--u)*1.4));color:#ffe9a8;white-space:nowrap;pointer-events:none;transition:opacity .2s}
#pf-shop .sh-anims{position:absolute;bottom:calc(var(--u)*1.2);display:flex;gap:calc(var(--u)*.6);padding:calc(var(--u)*.7);justify-content:center}
#pf-shop .sh-anim{flex:1 1 0;min-width:40px;max-width:calc(var(--u)*7.2);height:max(40px,calc(var(--u)*5.2));padding:0 calc(var(--u)*.6);border-radius:calc(var(--u)*.8);border:1px solid #c99a4466;background:linear-gradient(180deg,#3a2210,#22130a);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:max(11px,calc(var(--u)*1.4));font-weight:800;color:#ecd9b0}
#pf-shop .sh-anim svg{width:calc(var(--u)*2.2);height:calc(var(--u)*2.2)}
#pf-shop .sh-anim.on{background:linear-gradient(180deg,#9a6a22,#5a3410);border-color:#ffd76a;color:#fff;box-shadow:0 0 calc(var(--u)*1) #ffb84466}
/* right: cards */
#pf-shop .sh-shelf{top:calc(var(--u)*8.2);right:calc(var(--sr) + var(--u)*1.2);width:calc(var(--u)*34);bottom:calc(var(--u)*15.4);padding:calc(var(--u)*1.1) calc(var(--u)*.6) calc(var(--u)*1.1) calc(var(--u)*1.1)}
#pf-shop .sh-shelf h3{margin:0 0 calc(var(--u)*.7);font-size:max(13px,calc(var(--u)*2));display:flex;align-items:center;gap:calc(var(--u)*.8)}
#pf-shop .sh-shelf h3 small{font:700 max(10px,calc(var(--u)*1.3)) "Trebuchet MS",sans-serif;color:#c9b48a;-webkit-text-fill-color:#c9b48a}
#pf-shop .sh-filter{position:absolute;right:calc(var(--u)*1.1);top:calc(var(--u)*.7);width:min(55%,150px);min-width:72px;min-height:40px;padding:4px 3px;border:1px solid #d8a84a;border-radius:7px;background:#281708;color:#ffe7a8;font:700 max(11px,calc(var(--u)*1.4)) Arial,sans-serif;cursor:pointer}
#pf-shop .sh-shelf h3{min-height:40px;padding-right:min(60%,158px)}
#pf-shop .sh-shelf h3 b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#pf-shop .sh-shelf h3 small{display:none}
#pf-shop .sh-empty{grid-column:1/-1;margin:12px 4px;color:#ead8af;font:700 13px/1.5 Arial,sans-serif}
#pf-shop .sh-grid{position:absolute;left:calc(var(--u)*1.1);right:calc(var(--u)*.6);top:max(56px,calc(var(--u)*7.2));bottom:calc(var(--u)*1);overflow-y:auto;overflow-x:hidden;display:grid;grid-template-columns:repeat(2,1fr);gap:calc(var(--u)*.8);align-content:start;padding:calc(var(--u)*.3) calc(var(--u)*.6) calc(var(--u)*.6) calc(var(--u)*.2);scrollbar-width:thin;scrollbar-color:#c99a44 transparent;overscroll-behavior:contain}
#pf-shop .sh-card{position:relative;height:calc(var(--u)*11.6);min-height:74px;border:calc(var(--u)*1) solid transparent;border-image:url(${A}ui-card.png) 30 / calc(var(--u)*1) stretch;background:radial-gradient(ellipse 70% 60% at 50% 36%,color-mix(in srgb,var(--rc) 34%,#3a2418),#1a0e06 78%) padding-box;box-shadow:0 calc(var(--u)*.3) calc(var(--u)*.6) #0008;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:0 calc(var(--u)*.2) calc(var(--u)*.2);overflow:hidden;animation:shcard .35s both;animation-delay:calc(var(--i)*35ms);transition:transform .12s}
#pf-shop .sh-card:active{transform:scale(.96)}
#pf-shop .sh-card.sel{box-shadow:0 0 calc(var(--u)*1.4) calc(var(--u)*.2) #ffd76acc,0 0 calc(var(--u)*2.4) var(--rc);animation:shsel 1.8s ease-in-out infinite}
@keyframes shsel{50%{box-shadow:0 0 calc(var(--u)*2) calc(var(--u)*.35) #ffe7a0,0 0 calc(var(--u)*3) var(--rc)}}
#pf-shop .sh-card:before{content:"";position:absolute;left:50%;top:calc(var(--u)*-.55);width:calc(var(--u)*1.5);height:calc(var(--u)*1.5);transform:translateX(-50%) rotate(45deg);background:radial-gradient(circle at 35% 30%,#fff,var(--rc) 45%,#0008 100%);border:1px solid #ffe7a0;z-index:2}
#pf-shop .sh-card.r-epic:after,#pf-shop .sh-card.r-legendary:after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,#fff6d040 50%,transparent 65%);background-size:250% 100%;animation:shshine 3.6s ease-in-out infinite;pointer-events:none}
@keyframes shshine{0%,40%{background-position:120% 0}100%{background-position:-120% 0}}
#pf-shop .sh-card .ic{position:absolute;left:50%;top:calc(var(--u)*.5);width:calc(var(--u)*7.8);height:calc(var(--u)*7.8);transform:translateX(-50%);filter:drop-shadow(0 calc(var(--u)*.3) calc(var(--u)*.4) #000c)}
#pf-shop .sh-card canvas.ic{width:calc(var(--u)*9);height:calc(var(--u)*7.8);top:calc(var(--u)*.6)}
#pf-shop .sh-card .nm{position:relative;width:100%;text-align:center;padding:calc(var(--u)*.25) 0;background:linear-gradient(90deg,transparent,#0009 15%,#0009 85%,transparent);font-size:max(10.5px,calc(var(--u)*1.45));font-weight:800;line-height:1.05;color:#f6e6c0;text-shadow:0 1px 2px #000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pf-shop .sh-card .pr{position:relative;margin-top:calc(var(--u)*.3);display:flex;align-items:center;gap:calc(var(--u)*.35);font-size:max(10.5px,calc(var(--u)*1.45));font-weight:900;color:#ffe08a}
#pf-shop .sh-card .pr svg{width:calc(var(--u)*1.9);height:calc(var(--u)*1.9)}
#pf-shop .sh-card .pr.ok{color:#9fe0a8}#pf-shop .sh-card .pr.no{color:#e0a090}
#pf-shop .sh-card .badge{position:absolute;right:calc(var(--u)*.45);top:calc(var(--u)*.85);width:calc(var(--u)*2.6);height:calc(var(--u)*2.6)}
#pf-shop .sh-card.locked .ic{filter:grayscale(.85) brightness(.55) drop-shadow(0 2px 3px #000c)}
#pf-shop .sh-card.na{opacity:.55}
#pf-shop .sh-card .rar{position:absolute;left:calc(var(--u)*.5);top:calc(var(--u)*.9);font-size:max(9px,calc(var(--u)*1.1));font-weight:900;color:var(--rc);text-transform:uppercase;letter-spacing:.04em;text-shadow:0 1px 1px #000}
/* details */
#pf-shop .sh-info{right:calc(var(--sr) + var(--u)*1.2);width:calc(var(--u)*34);bottom:calc(var(--u)*1.2);height:calc(var(--u)*13.4);padding:calc(var(--u)*1) calc(var(--u)*1.3);display:grid;grid-template-columns:1fr auto;grid-template-rows:auto 1fr auto;column-gap:calc(var(--u)*1)}
#pf-shop .sh-info .t{grid-column:1/3;display:flex;align-items:baseline;gap:calc(var(--u)*.8);min-width:0}
#pf-shop .sh-info .t b{font-size:max(14px,calc(var(--u)*2.2));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pf-shop .sh-info .t i{font-style:normal;font-size:max(10px,calc(var(--u)*1.3));font-weight:900;color:var(--rc);text-transform:uppercase}
#pf-shop .sh-info p{grid-column:1/2;margin:calc(var(--u)*.3) 0 0;font-size:max(11px,calc(var(--u)*1.45));line-height:1.25;color:#e6d4ae;overflow:hidden}
#pf-shop .sh-info .req{grid-column:1/2;font-size:max(10.5px,calc(var(--u)*1.35));color:#f0b080;display:flex;align-items:center;gap:calc(var(--u)*.4);min-height:1em}
#pf-shop .sh-info .req svg{width:calc(var(--u)*1.8);height:calc(var(--u)*1.8);flex:none}
#pf-shop .sh-act{grid-column:2/3;grid-row:2/4;align-self:end;min-width:calc(var(--u)*12);height:max(44px,calc(var(--u)*5.6));padding:0 calc(var(--u)*1.4);border-radius:calc(var(--u)*.9);border:calc(var(--u)*.28) solid #ffe08a;background:linear-gradient(180deg,#f7c552,#c9821c 60%,#8a4e0c);color:#2a1404;font-weight:900;font-size:max(13px,calc(var(--u)*1.9));display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*.5);box-shadow:0 calc(var(--u)*.4) 0 #4a2606,0 calc(var(--u)*.6) calc(var(--u)*1.2) #000a;text-shadow:0 1px 0 #ffe6a0;transition:transform .1s}
#pf-shop .sh-act svg{width:calc(var(--u)*2.4);height:calc(var(--u)*2.4)}
#pf-shop .sh-act:active{transform:translateY(2px);box-shadow:0 calc(var(--u)*.2) 0 #4a2606}
#pf-shop .sh-act.eq{background:linear-gradient(180deg,#5ac878,#2a8a48 60%,#155a2a);border-color:#c8f0c8;color:#f0fff2;text-shadow:0 1px 0 #0a3a1a}
#pf-shop .sh-act.off{background:linear-gradient(180deg,#7a6450,#4a3a2a);border-color:#a89070;color:#e8d8c0;text-shadow:none}
#pf-shop .sh-act[disabled]{filter:grayscale(.7) brightness(.75);cursor:default}
/* dialogs, toast, chest reveal */
#pf-shop .sh-modal{position:absolute;inset:0;display:grid;place-items:center;background:#000a;z-index:20;animation:shfade .2s}
#pf-shop .sh-dlg{position:relative!important;min-width:min(86vw,calc(var(--u)*46));max-width:92vw;padding:calc(var(--u)*2.4) calc(var(--u)*3);text-align:center;animation:shpop .28s cubic-bezier(.2,1.4,.4,1)}
#pf-shop .sh-dlg h4{margin:0 0 calc(var(--u)*1.2);font-size:max(15px,calc(var(--u)*2.4))}
#pf-shop .sh-dlg .row{display:flex;gap:calc(var(--u)*1.2);justify-content:center;margin-top:calc(var(--u)*1.6)}
#pf-shop .sh-dlg .row .sh-act{position:relative;grid-column:auto;grid-row:auto}
#pf-shop .sh-dlg label{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--u)*2);margin:calc(var(--u)*.8) 0;font-size:max(13px,calc(var(--u)*1.9));font-weight:800}
#pf-shop .sh-dlg label button{min-width:calc(var(--u)*9);height:max(40px,calc(var(--u)*4.6));border-radius:999px;border:2px solid #c99a44;background:#2a1608;font-weight:900}
#pf-shop .sh-dlg label button.on{background:linear-gradient(180deg,#5ac878,#2a8a48);border-color:#c8f0c8}
#pf-shop .sh-reveal canvas{display:block;margin:0 auto;width:calc(var(--u)*26);height:calc(var(--u)*20)}
#pf-shop .sh-reveal .got{font-size:max(12px,calc(var(--u)*1.6));color:#c9b48a;min-height:1.3em}
#pf-shop .sh-reveal .it{font-size:max(16px,calc(var(--u)*2.6));min-height:1.2em}
#pf-shop .sh-chest-preview{width:min(92vw,720px);max-height:94vh;display:flex;flex-direction:column;padding:max(12px,calc(var(--u)*1.7)) max(14px,calc(var(--u)*2));text-align:left}
#pf-shop .sh-chest-preview h4{flex:none;margin:0 0 5px}
#pf-shop .sh-odds-rules{font-size:max(11px,calc(var(--u)*1.35));line-height:1.3;color:#dfcba5;margin:0 0 7px}
#pf-shop .sh-odds-summary{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:5px;flex:none;font-size:12px}
#pf-shop .sh-odds-summary span{border:1px solid var(--rc);border-radius:999px;padding:3px 8px;background:#130b07;color:var(--rc)}
#pf-shop .sh-odds-list{min-height:40px;overflow:auto;overscroll-behavior:contain;list-style:none;padding:0 4px 0 0;margin:0;scrollbar-width:thin;scrollbar-color:#c99a44 transparent;max-height:45vh}
#pf-shop .sh-drop{display:flex;align-items:center;gap:9px;padding:6px 8px;border-bottom:1px solid #bc884337;background:linear-gradient(90deg,#d5aa4b0d,transparent);min-height:49px}
#pf-shop .sh-drop .ic{display:block;width:45px;height:39px;flex:none;object-fit:contain;background-repeat:no-repeat}
#pf-shop .sh-drop .sh-drop-name{flex:1;min-width:0;font-size:max(12px,calc(var(--u)*1.5));font-weight:800}
#pf-shop .sh-drop small{display:block;font-size:11px;color:var(--rc);font-weight:700;margin-top:2px}
#pf-shop .sh-drop strong{font-size:14px;color:#ffe7a8;font-variant-numeric:tabular-nums;text-align:right;flex:none}
#pf-shop .sh-drop strong small{color:#cdb98e;font-weight:400}
#pf-shop .sh-odds-notice{color:#ffe08a;font-size:12px;margin:4px 0 0;min-height:0}
#pf-shop .sh-refund-preview{padding:15px;border:1px solid #d8a84a;border-radius:8px;color:#ffe7a8;font-weight:800;line-height:1.5}
#pf-shop .sh-chest-preview .row{flex:none;margin-top:8px;justify-content:flex-end}
#pf-shop .sh-reveal{max-height:94vh;overflow:auto}
#pf-shop .sh-reveal-skip{min-height:40px;min-width:100px;padding:5px 12px;border:1px solid #d8a84a;border-radius:999px;background:#26170c;color:#ffe7a8;font-weight:700}
#pf-shop .sh-reveal .row:empty{display:none}
/* Brass joinery and restrained material detail reuse the existing cabin art. */
#pf-shop .sh-cats,#pf-shop .sh-shelf,#pf-shop .sh-info{box-shadow:inset 0 1px 0 #ffe6a63b,inset 0 -10px 24px #10080466,0 6px 14px #0008}
#pf-shop .sh-cat{background:repeating-linear-gradient(2deg,#efc47c04 0 1px,transparent 1px 7px),linear-gradient(180deg,#4a2c16,#211108);box-shadow:inset 0 1px #efc47c18}
#pf-shop .sh-cat.on{background:linear-gradient(90deg,#bd853638,#bd853600 70%),linear-gradient(180deg,#775022,#3a210d)}
#pf-shop .sh-cat.on:before{content:"";position:absolute;left:1px;top:16%;bottom:16%;width:3px;border-radius:3px;background:#ffe2a0;box-shadow:0 0 8px #ffc96f}
#pf-shop .sh-card .pr.ok{padding:1px 6px;border-radius:999px;background:#11331cba;color:#c5f5cb}
#pf-shop .sh-card.equipped{box-shadow:inset 0 0 0 2px #b3e6ad,0 0 8px #7bd39880}
#pf-shop .sh-card.equipped.sel{box-shadow:inset 0 0 0 2px #b3e6ad,0 0 12px #ffd76acc}
#pf-shop .sh-card:focus-visible,#pf-shop button:focus-visible,#pf-shop select:focus-visible{outline:2px solid #fff4ba;outline-offset:2px}
#pf-shop .sh-loadout{position:absolute;bottom:max(calc(var(--u)*2.6 + 46px),calc(var(--u)*7.8 + 6px));padding:3px 10px;max-width:100%;font-size:max(10.5px,calc(var(--u)*1.35));line-height:1.2;font-weight:800;color:#c7edbb;background:linear-gradient(180deg,#1b291aef,#101b10e8);border:1px solid #a0bd765e;border-radius:999px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
#pf-shop .sh-toast{position:absolute;left:50%;top:calc(var(--u)*15);transform:translate(-50%,-30%);opacity:0;padding:calc(var(--u)*.8) calc(var(--u)*2);border-radius:999px;background:#1c0f06ee;border:2px solid #d8a84a;font-weight:800;font-size:max(13px,calc(var(--u)*1.8));pointer-events:none;transition:opacity .25s,transform .25s;z-index:30;white-space:nowrap}
#pf-shop .sh-toast.show{opacity:1;transform:translate(-50%,0)}
#pf-shop .sh-toast.bad{border-color:#e07a5a;color:#ffd0c0}
/* entrance / exit */
#pf-shop .sh-cats,#pf-shop .sh-shelf,#pf-shop .sh-info,#pf-shop .sh-title,#pf-shop .sh-anims,#pf-shop .sh-heroes,#pf-shop .sh-back,#pf-shop .sh-goldchip,#pf-shop .sh-gear{transition:transform .45s cubic-bezier(.2,.9,.3,1),opacity .35s}
#pf-shop.pre .sh-cats{transform:translateX(-120%);opacity:0}
#pf-shop.pre .sh-shelf,#pf-shop.pre .sh-info{transform:translateX(120%);opacity:0}
#pf-shop.pre .sh-title{transform:translate(-50%,-160%);opacity:0}
#pf-shop.pre .sh-anims{transform:translateY(160%);opacity:0}
#pf-shop.pre .sh-heroes,#pf-shop.pre .sh-back,#pf-shop.pre .sh-goldchip,#pf-shop.pre .sh-gear{opacity:0}
#pf-shop .sh-curtain{position:absolute;inset:0;background:#000;pointer-events:none;transition:opacity .5s;z-index:40}
#pf-shop.pre .sh-curtain{opacity:1}#pf-shop:not(.pre) .sh-curtain{opacity:0}
#pf-shop.out .sh-curtain{opacity:1;transition:opacity .28s}
@keyframes shcard{from{opacity:0;transform:translateY(calc(var(--u)*1.6)) scale(.94)}to{opacity:1;transform:none}}
@keyframes shpop{from{transform:scale(.7);opacity:0}to{transform:none;opacity:1}}
@keyframes shfade{from{opacity:0}}
@keyframes shbump{30%{transform:scale(1.12)}}
@keyframes shshake{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
@media (prefers-reduced-motion:reduce){#pf-shop *{animation:none!important;transition:none!important}}
`;

const ANIM_ICON={
 idle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="6" r="3" fill="currentColor"/><path d="M12 10v7m-4 4l4-4 4 4M7 13h10" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>',
 run:'<svg viewBox="0 0 24 24"><circle cx="15" cy="5" r="2.6" fill="currentColor"/><path d="M8 12l4-4 3 3 3 1M12 8l-1 7-4 5m4-5l4 2 1 4M3 10h4M2 14h4" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>',
 jump:'<svg viewBox="0 0 24 24"><circle cx="12" cy="4.5" r="2.6" fill="currentColor"/><path d="M12 8v6m-5-4l5-2 5 2m-8 9l3-5 3 5M5 22h14" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>',
 sword:'<svg viewBox="0 0 24 24"><path d="M4 20l3-3m-2-2l4 4M7 17L20 4l-1 4-10 11" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 pistol:'<svg viewBox="0 0 24 24"><path d="M3 8h15l2-2v4h-9l-1 2h-3l-2 7H3l2-7z" fill="currentColor"/><path d="M21 7h2" stroke="currentColor" stroke-width="2"/></svg>',
 throw:'<svg viewBox="0 0 24 24"><path d="M3 21L16 8m0 0l-5 1m5-1l-1 5M17 3l4 4" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>',
 dash:'<svg viewBox="0 0 24 24"><circle cx="17" cy="6" r="2.6" fill="currentColor"/><path d="M15 10l-4 3 2 3-2 5m2-8l5 2M2 9h7M1 13h6M3 17h5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>'};

/* ------------------------------------------------------------------ sounds (the game's own sfx) */
const SND={ctx:null,buf:{},on:true,
 async load(){try{this.ctx??=new (window.AudioContext||window.webkitAudioContext)();await Promise.all([['coin','sfx-coin.ogg'],['chest','sfx-chest.ogg'],['secret','sfx-secret.ogg'],['click','sfx-swing1.ogg'],['deny','sfx-block.ogg'],['equip','sfx-checkpoint.ogg']].map(async([k,f])=>{if(this.buf[k])return;const r=await fetch(SFX+f);this.buf[k]=await this.ctx.decodeAudioData(await r.arrayBuffer())}))}catch{}},
 play(k,vol=.5,rate=1){if(!this.on||!this.ctx||!this.buf[k])return;try{this.ctx.resume?.();const s=this.ctx.createBufferSource(),g=this.ctx.createGain();s.buffer=this.buf[k];s.playbackRate.value=rate;g.gain.value=vol;s.connect(g).connect(this.ctx.destination);s.start()}catch{}}};

/* ------------------------------------------------------------------ cabin ambience (canvas) */
class Cabin{
 constructor(meta,ship){this.m=meta;this.ship=ship;this.t=0;this.motes=[];for(let i=0;i<26;i++)this.motes.push({x:Math.random(),y:Math.random(),s:.5+Math.random(),v:.2+Math.random()*.6,p:Math.random()*TAU});this.lite=false}
 draw(c,cover,dt,fxOn){
  this.t+=dt;const t=this.t,m=this.m,{s,ox,oy}=cover;c.clearRect(0,0,c.canvas.width,c.canvas.height);if(!fxOn)return;
  c.save();c.translate(ox,oy);c.scale(s,s);
  // the harbour behind the stern windows: sea glints and a ship slowly rocking
  c.save();c.beginPath();for(const w of m.windows){w.pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}c.clip();
  if(this.ship){const v=m.view,sh=this.ship,k=v.k,bob=Math.sin(t*.9)*2.2,roll=Math.sin(t*.7)*.012,x=v.ox+(888-150)*v.k,y=v.oy+(526-30)*v.k;
   c.save();c.translate(x,y+bob);c.rotate(roll);c.globalAlpha=.98;c.drawImage(sh.img,sh.x,sh.y,sh.w,sh.h,-(sh.px-sh.x)*k,-(sh.py-sh.y)*k,sh.w*k,sh.h*k);c.restore()}
  c.globalCompositeOperation='lighter';
  for(let i=0;i<22;i++){const a=(t*.35+i*.618)%1,x=760+((i*137)%420)+Math.sin(t*.8+i)*8,y=600+((i*53)%80),k=Math.sin(a*Math.PI);c.globalAlpha=k*.55;c.fillStyle='#ffd08a';c.fillRect(x,y,10+k*14,2)}
  c.restore();
  c.globalCompositeOperation='lighter';
  // light shafts from the windows + dust motes drifting in them
  const g=c.createLinearGradient(0,170,0,1080);g.addColorStop(0,'rgba(255,190,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');c.fillStyle=g;
  for(const w of m.windows){const sway=Math.sin(t*.3+w.cx)*.02+1;c.globalAlpha=.6+.25*Math.sin(t*.5+w.cx);c.beginPath();c.moveTo(w.cx-w.w*.42,w.top+w.h*.3);c.lineTo(w.cx+w.w*.42,w.top+w.h*.3);c.lineTo(w.cx+w.w*1.05*sway,1080);c.lineTo(w.cx-w.w*1.05*sway,1080);c.closePath();c.fill()}
  c.globalAlpha=1;
  if(!this.lite)for(const d of this.motes){d.y-=d.v*dt*.02;d.x+=Math.sin(t*.6+d.p)*dt*.004;if(d.y<0){d.y=1;d.x=Math.random()}const x=520+d.x*880,y=220+d.y*760,a=.25+.35*Math.sin(t*1.7+d.p);c.fillStyle=`rgba(255,226,170,${a.toFixed(3)})`;c.beginPath();c.arc(x,y,d.s*1.6,0,TAU);c.fill()}
  // lantern and candle flicker
  for(const [i,[x,y]] of m.lanterns.entries()){const f=.75+.25*Math.sin(t*9+i*2.1)*Math.sin(t*5.3+i);const r=150+20*f,gr=c.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,`rgba(255,190,90,${(.32*f).toFixed(3)})`);gr.addColorStop(1,'rgba(255,140,40,0)');c.fillStyle=gr;c.fillRect(x-r,y-r,r*2,r*2)}
  for(const [i,[x,y]] of m.candles.entries()){const f=.8+.2*Math.sin(t*13+i*3.3)+.1*Math.sin(t*29+i);
   const gr=c.createRadialGradient(x,y-6,0,x,y-6,70);gr.addColorStop(0,`rgba(255,200,110,${(.35*f).toFixed(3)})`);gr.addColorStop(1,'rgba(255,150,60,0)');c.fillStyle=gr;c.fillRect(x-70,y-76,140,140);
   c.save();c.translate(x,y);c.scale(1,f);c.globalCompositeOperation='source-over';const fl=c.createRadialGradient(0,-8,1,0,-6,10);fl.addColorStop(0,'#fffbe0');fl.addColorStop(.4,'#ffd060');fl.addColorStop(1,'rgba(255,120,20,0)');c.fillStyle=fl;c.beginPath();c.moveTo(0,-22+Math.sin(t*17+i)*2);c.quadraticCurveTo(7,-6,0,1);c.quadraticCurveTo(-7,-6,0,-22+Math.sin(t*17+i)*2);c.fill();c.restore()}
  // coin glints
  for(const [i,[x,y]] of m.glints.entries()){const ph=(t*.7+i*.43)%2.4;if(ph>.6)continue;const k=Math.sin(ph/.6*Math.PI),r=6+16*k;c.globalAlpha=k;c.strokeStyle='#fff6d0';c.lineWidth=2;c.beginPath();c.moveTo(x-r,y);c.lineTo(x+r,y);c.moveTo(x,y-r);c.lineTo(x,y+r);c.stroke();const gr=c.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,240,180,.9)');gr.addColorStop(1,'rgba(255,200,80,0)');c.fillStyle=gr;c.fillRect(x-r,y-r,r*2,r*2)}
  c.restore();
 }
}

/* ------------------------------------------------------------------ hero preview */
class Preview{
 constructor(){this.mode='idle';this.t=0;this.p=null;this.skin=null;this.ghosts=[];this.flash=0}
 reset(){const p=this.p={x:-17,y:-78,w:34,h:78,vx:0,vy:0,dir:1,anim:'idle',attack:0,dash:0,throwT:0,landT:0,inv:0,invFx:false,hurtT:0,dead:false,ground:true,animT:0};this.t=0;this.ghosts=[];return p}
 set(mode){this.mode=mode;this.reset()}
 step(dt){
  const p=this.p||this.reset();this.t+=dt;const m=this.mode,t=this.t;
  p.y=-78;p.ground=true;p.vx=0;p.dash=0;p.anim='idle';p.landT=Math.max(0,p.landT-dt);
  if(m==='run'){p.anim='run';p.vx=280}
  else if(m==='jump'){const T=1.5,k=t%T;if(k<.95){const h=k/.95;p.y=-78-Math.sin(h*Math.PI)*90;p.ground=false;p.anim=h<.5?'jump':'fall';p.vy=h<.5?-300:300;this._air=true}else{if(this._air){p.landT=.12;this._air=false}}}
  else if(m==='sword'){const seq=[['attackA',.22],['attackB',.22],['attackC',.3],['idle',.55]];let k=t%seq.reduce((a,b)=>a+b[1],0);for(const [a,d] of seq){if(k<d){p.anim=a;p.attack=a==='idle'?0:d-k;break}k-=d}}
  else if(m==='shoot'){const k=t%1.1;if(k<.32){p.anim='throw';p.throwT=.32-k;if(k<dt+.001)this.flash=.09}else p.throwT=0}
  else if(m==='dash'){const k=t%1.2;if(k<.28){p.anim='dash';p.dash=.28-k;p.vx=700;if(Math.floor(k*60)%3===0)this.ghosts.push({x:-Math.min(.28,k)*260,y:0,dir:1,life:.22,max:.22})}else if(k<.5)p.anim='run'}
  this.flash=Math.max(0,this.flash-dt);for(const g of this.ghosts){g.life-=dt;g.x-=dt*420}this.ghosts=this.ghosts.filter(g=>g.life>0);
 }
 draw(c,run){const sk=this.skin,p=this.p;if(!sk||!p)return;
  for(const g of this.ghosts)sk.ghost?.(c,{x:p.x+p.w/2+g.x,y:p.y+p.h+g.y,dir:1,life:g.life,max:g.max,index:0});
  sk.draw(c,p,run);
  if(this.flash>0&&sk.muzzle){const q=sk.muzzle(p),gr=c.createRadialGradient(q.x+10,q.y,0,q.x+10,q.y,40);gr.addColorStop(0,'rgba(255,250,220,.95)');gr.addColorStop(.3,'rgba(255,190,80,.8)');gr.addColorStop(1,'rgba(255,120,20,0)');c.save();c.globalCompositeOperation='lighter';c.fillStyle=gr;c.fillRect(q.x-30,q.y-40,80,80);c.restore()}
 }
}

/* ------------------------------------------------------------------ the shop */
let current=null,opening=null;
const state={sound:true,fx:true};
try{const s=JSON.parse(localStorage.getItem('pf-shop-ui')||'{}');if(typeof s.sound==='boolean')state.sound=s.sound;if(typeof s.fx==='boolean')state.fx=s.fx}catch{}
const saveUi=()=>{try{localStorage.setItem('pf-shop-ui',JSON.stringify(state));return true}catch{return false}};

async function open(opts={}){
 if(current)return current;if(opening)return opening;
 opening=mount(opts);try{return await opening}catch(e){document.getElementById('pf-shop')?.remove();throw e}finally{opening=null}
}
async function mount(opts={}){
 if(current)return current;
 const E=window.PirateEconomy,C=window.PirateShopCatalog,COS=window.PirateCosmetics,H=window.PirateHeroes,L=window.PirateLevels;
 if(!E||!C||!COS||!H)throw Error('shop modules missing');
 if(!document.getElementById('pf-shop-css')){const st=document.createElement('style');st.id='pf-shop-css';st.textContent=CSS;document.head.append(st)}
 const lang=T[opts.lang]?opts.lang:(T[document.documentElement.lang]?document.documentElement.lang:'en'),w=T[lang];
 const root=document.createElement('div');root.id='pf-shop';root.className='pre';root.setAttribute('role','dialog');root.setAttribute('aria-label',w.title);
 root.innerHTML=`<div class="sh-plate"></div><canvas class="sh-fx"></canvas><div class="sh-shade"></div><canvas class="sh-hero"></canvas>
<div class="sh-ui">
 <button type="button" class="sh-back wood thin" aria-label="${w.back}">${ARROW}<span>${w.back}</span></button>
 <div class="sh-title"><b class="disp gold">${w.title}</b></div>
 <div class="sh-goldchip" aria-live="polite">${COIN}<span>0</span></div>
 <button type="button" class="sh-gear wood thin" aria-label="${w.settings}">${GEAR}</button>
 <nav class="sh-cats wood thin" role="tablist"></nav>
 <div class="sh-heroes"><button type="button" class="sh-arrow l" aria-label="◀">${ARROW}</button><div class="sh-who"><img alt=""><div><b class="disp gold"></b><small></small></div></div><button type="button" class="sh-arrow r" aria-label="▶">${ARROW}</button><button type="button" class="sh-play"></button></div>
<div class="sh-try"></div><div class="sh-loadout" role="status"></div>
 <div class="sh-anims" role="group"></div>
 <section class="sh-shelf wood"><h3><b class="disp gold"></b><small></small></h3><select class="sh-filter"></select><div class="sh-grid" role="listbox"></div></section>
 <section class="sh-info wood"><div class="t"><b class="disp gold"></b><i></i></div><p></p><div class="req"></div><button type="button" class="sh-act"></button></section>
</div><div class="sh-toast" role="status" aria-live="polite"></div><div class="sh-curtain"></div>`;
 document.body.append(root);
 const q=s=>root.querySelector(s);
 const el={plate:q('.sh-plate'),fx:q('.sh-fx'),hero:q('.sh-hero'),cats:q('.sh-cats'),grid:q('.sh-grid'),shelfT:q('.sh-shelf h3 b'),shelfS:q('.sh-shelf h3 small'),info:q('.sh-info'),act:q('.sh-act'),gold:q('.sh-goldchip'),who:q('.sh-who'),heroes:q('.sh-heroes'),play:q('.sh-play'),try:q('.sh-try'),anims:q('.sh-anims'),toast:q('.sh-toast')};
 SND.on=state.sound;SND.load();
 // ---- assets
 const [meta,icons,iconMeta,birds,cosMeta]=await Promise.all([fetch(A+'cabin.json').then(r=>r.json()),loadImage(A+'icons.png'),fetch(A+'icons.json').then(r=>r.json()),loadImage(A+'companions.png').catch(()=>null),fetch(A+'cosmetics.json').then(r=>r.json()).catch(()=>null)]);
 let ship=null;try{const lay=await fetch('menu-v2/assets/layout.json').then(r=>r.json());const sp=lay.sprites.find(s=>s.name==='shipMain');const atlas=await loadImage('menu-v2/assets/sprites.webp');ship={img:atlas,x:sp.ax,y:sp.ay,w:sp.w,h:sp.h,px:sp.ax+(sp.pivot[0]-sp.x),py:sp.ay+(sp.pivot[1]-sp.y)}}catch{}
 const cabin=new Cabin(meta,ship);
 // ---- state
 let hero=L?.hero?.()||'scarlet';if(!HEROES.includes(hero))hero='scarlet';
 const cost={n:0,sum:0,max:0};let filter='all',cat='outfit',selected=null,trying=null,anim='idle',closing=false,raf=0,last=0,fxAcc=0,cover={s:1,ox:0,oy:0},stand={x:0,y:0,k:1},skinKey='',loadSeq=0,skinRetry=0;
 const ownership=q('.sh-filter'),filterText=FILTER[lang];ownership.setAttribute('aria-label',filterText[0]);
 for(const [n,value] of ['all','owned','unowned','affordable'].entries()){const option=document.createElement('option');option.value=value;option.textContent=value==='affordable'?AFFORDABLE[lang]:filterText[n+1];ownership.append(option)}
 ownership.onchange=()=>{filter=ownership.value;selected=null;trying=null;renderGrid();renderInfo();updateLook()};
 const preview=new Preview();
 const run={time:0,fx:{on:true,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches}};
 const iconStyle=id=>{const p=iconMeta.icons[id];return p?`background:url(${A}icons.png) -${p[0]/128*100}% -${p[1]/128*100}%/${icons.width/128*100}% ${icons.height/128*100}%`:''};
 const iconPos=id=>{const p=iconMeta.icons[id];if(!p)return'';return`background-image:url(${A}icons.png);background-size:${icons.width/128*100}% ${icons.height/128*100}%;background-position:${p[0]/(icons.width-128)*100}% ${p[1]/(icons.height-128)*100}%`};
 const heroName=id=>H.get(id).name;
 const levelName=n=>L?.name?.(n,lang)||'';
 const reqText=r=>!r?'':r.level?fmt(w.reqLevel,{n:r.level,name:levelName(r.level)}):r.item?fmt(w.reqItem,{i:C.name(C.get(r.item),lang)}):'';
 const toast=(msg,bad)=>{el.toast.textContent=msg;el.toast.classList.toggle('bad',!!bad);el.toast.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.toast.classList.remove('show'),1800)};
 const failed=r=>{SND.play('deny',.4);toast(r.code==='storage'?SAVE_ERROR[lang]:r.code==='funds'?w.funds:r.code==='owned'?w.owned:w.locked,true)};
 const showGold=(bump)=>{el.gold.querySelector('span').textContent=E.balance().toLocaleString('en-US');fitTitle();if(bump){el.gold.classList.remove('bump');void el.gold.offsetWidth;el.gold.classList.add('bump')}};
 // ---- layout
 function fitTitle(){
  const u=parseFloat(root.style.getPropertyValue('--u'))||7;
  const title=q('.sh-title'),label=title.querySelector('b'),back=q('.sh-back').getBoundingClientRect(),wallet=el.gold.getBoundingClientRect();
  title.style.left=((back.right+wallet.left)/2)+'px';title.style.width=Math.max(120,wallet.left-back.right-u*3)+'px';label.style.fontSize='';
  if(label.scrollWidth>label.clientWidth)label.style.fontSize=Math.max(10.5,parseFloat(getComputedStyle(label).fontSize)*label.clientWidth/label.scrollWidth)+'px';
 }
 function layout(){
  const W=innerWidth,Hh=innerHeight;const u=Math.min(W/100,Hh*16/9/100);root.style.setProperty('--u',u+'px');
  const probe=document.createElement('div');probe.style.cssText='position:absolute;visibility:hidden;padding-left:env(safe-area-inset-left,0px);padding-right:env(safe-area-inset-right,0px)';root.append(probe);const cs=getComputedStyle(probe);const sl=parseFloat(cs.paddingLeft)||0,sr=parseFloat(cs.paddingRight)||0;probe.remove();
  root.style.setProperty('--sl',sl+'px');root.style.setProperty('--sr',sr+'px');
  fitTitle();
  // cabin cover; keep the stern windows and the rug centred between the panels
  const left=sl+u*24.2,right=W-sr-u*36.4,mid=(left+right)/2;
  const s=Math.max(W/meta.w,Hh/meta.h);let ox=mid-960*s;ox=clamp(ox,W-meta.w*s,0);const oy=(Hh-meta.h*s)*.6;cover={s,ox,oy};
  Object.assign(el.plate.style,{width:meta.w+'px',height:meta.h+'px',transform:`translate(${ox}px,${oy}px) scale(${s})`});
  const dpr=Math.min(devicePixelRatio||1,1.5),fx=el.fx;fx.width=Math.round(W*dpr);fx.height=Math.round(Hh*dpr);fx.style.width=W+'px';fx.style.height=Hh+'px';fx.__dpr=dpr;
  // hero stage between the panels
  const top=u*14,bottom=Hh-u*8.2,cw=right-left,ch=bottom-top;const hc=el.hero,hd=Math.min(devicePixelRatio||1,2);hc.width=Math.round(cw*hd);hc.height=Math.round(ch*hd);Object.assign(hc.style,{left:left+'px',top:top+'px',width:cw+'px',height:ch+'px'});hc.__dpr=hd;
  const figure=hero==='scarlet'?176:190;let k=Math.min(ch*.8/figure,cw*.55/120);k=Math.min(k,hero==='scarlet'?1.6:1.25);// feet on the painted dais (cabin.json stand point), kept inside the stage
  // Keep only this shop preview above the equipped badge; game foot anchors and
  // collision boxes are untouched. The badge sits6px above the animation row.
  const badgeBottom=Math.max(u*2.6+46,u*7.8+6),badgeHeight=8+Math.max(10.5,u*1.35)*1.2,maxFeet=Hh-badgeBottom-badgeHeight-8-top;
  const sy=clamp(oy+meta.stand[1]*s-top,ch*.62,Math.min(ch*.97,maxFeet)),sx=clamp(ox+meta.stand[0]*s-left,cw*.3,cw*.7);k=Math.min(k,sy/figure*.98);stand={x:sx,y:sy,k};
  el.heroes.style.left=left+'px';el.heroes.style.width=cw+'px';
  el.anims.style.left=left+'px';el.anims.style.width=cw+'px';
  el.try.style.left=mid+'px';el.try.style.top=(bottom-u*7.5)+'px';el.try.style.transform='translateX(-50%)';
  const loadout=q('.sh-loadout');loadout.style.left=mid+'px';loadout.style.maxWidth=Math.max(0,cw-u*2)+'px';loadout.style.transform='translateX(-50%)';
 }
 // ---- categories
 for(const c of C.CATS){const b=document.createElement('button');b.type='button';b.className='sh-cat';b.dataset.cat=c;b.setAttribute('role','tab');
  const i=document.createElement('i');if(c==='outfit'){i.style.cssText='background:url(adventure/levels/assets/heroes/scarlet-portrait.png) center/cover;border-radius:50%;border:2px solid #d8a84a'}else if(c==='accessory'&&birds&&cosMeta){const m=cosMeta.companions.macaw;const cv=document.createElement('canvas');cv.width=m.w;cv.height=m.h;cv.getContext('2d').drawImage(birds,m.x,m.y,m.w,m.h,0,0,m.w,m.h);i.style.cssText=`background:url(${cv.toDataURL()}) center/contain no-repeat`}else i.style.cssText=iconPos(CAT_ICON[c]);
  const s=document.createElement('span');s.textContent=C.cat(c,lang);const em=document.createElement('em');const md=document.createElement('b');md.className='md';md.append(i);b.append(md,s,em);b.onclick=()=>{if(cat===c)return;SND.play('click',.25,1.4);cat=c;selected=null;trying=null;renderCats();renderGrid();renderInfo();updateLook()};el.cats.append(b)}
 function renderCats(){for(const b of el.cats.children){const c=b.dataset.cat;b.classList.toggle('on',c===cat);b.setAttribute('aria-selected',c===cat);const items=C.inCat(c).filter(i=>C.fits(i,hero)||c==='chest'||c==='upgrade');const own=items.filter(i=>!i.default&&E.owns(i.id)).length,tot=items.filter(i=>!i.default).length;b.querySelector('em').textContent=c==='chest'?'':own+'/'+tot}}
 // ---- animations
 const animList=()=>[['idle',w.idle],['run',w.run],['jump',w.jump],['sword',w.sword],['shoot',hero==='scarlet'?w.pistol:w.throw],['dash',w.dash]];
 function renderAnims(){el.anims.textContent='';for(const [k,label] of animList()){const b=document.createElement('button');b.type='button';b.className='sh-anim'+(k===anim?' on':'');b.dataset.anim=k;b.innerHTML=(ANIM_ICON[k==='shoot'?(hero==='scarlet'?'pistol':'throw'):k]||'')+`<span>${label}</span>`;b.onclick=()=>{anim=k;preview.set(k);renderAnims()};el.anims.append(b)}}
 // ---- hero switch
 function renderHero(){const h=H.get(hero);el.who.querySelector('b').textContent=h.name;const im=el.who.querySelector('img');im.src=H.portrait(hero)||'';im.dataset.heroPortrait=hero;const act=L?.hero?.()===hero;el.who.querySelector('small').textContent=act?'★ '+w.active:'';el.play.hidden=act;el.play.textContent='★ '+fmt(w.playAs,{h:h.name})}
 const switchHero=d=>{const i=HEROES.indexOf(hero);hero=HEROES[(i+d+HEROES.length)%HEROES.length];SND.play('click',.25,1.1);if(selected&&!C.fits(C.get(selected),hero)&&!['chest','upgrade'].includes(cat)){selected=null;trying=null}renderHero();renderAnims();renderCats();renderGrid();renderInfo();layout();updateLook()};
 q('.sh-arrow.l').onclick=()=>switchHero(-1);q('.sh-arrow.r').onclick=()=>switchHero(1);
 el.play.onclick=()=>{L?.setHero?.(hero);SND.play('equip',.35);renderHero();toast('★ '+w.active+': '+H.get(hero).name);opts.onHero?.(hero)};
 // ---- cards
 const thumbs=new Map();
 async function outfitThumb(id,canvasEl){
  const it=C.get(id),who=C.fits(it,hero)?hero:it.heroes[0],key=who+'|'+id;let url=thumbs.get(key);
  if(!url){const sk=await COS.skin(who,{hero:who,outfit:id,weapon:'weapon-steel',hat:'hat-classic',accessory:'acc-none',effect:'fx-none',thumb:true});const cv=document.createElement('canvas');cv.width=180;cv.height=156;const c=cv.getContext('2d');const p={x:-17,y:-78,w:34,h:78,dir:1,anim:'idle',attack:0,dash:0,throwT:0,landT:0,inv:0,hurtT:0,dead:false,ground:true,vx:0};c.translate(90,150);const k=who==='scarlet'?.82:.88;c.scale(k,k);sk.draw(c,p,{time:.5,fx:{on:false}});url=cv;thumbs.set(key,url)}
  canvasEl.width=180;canvasEl.height=156;canvasEl.getContext('2d').drawImage(url,0,0);return url
 }
 function cardIcon(it){
  if(it.cat==='outfit'){const cv=document.createElement('canvas');cv.className='ic';outfitThumb(it.id,cv).catch(()=>{});return cv}
  if(it.cat==='accessory'&&it.id!=='acc-none'&&birds&&cosMeta){const look=COS.COMPANION[it.id],m=cosMeta.companions[look.sprite];const cv=document.createElement('canvas');cv.className='ic';cv.width=m.w;cv.height=m.h;const c=cv.getContext('2d');if(look.ghost){c.globalAlpha=.7;c.filter='hue-rotate(150deg) saturate(.6) brightness(1.3)'}c.drawImage(birds,m.x,m.y,m.w,m.h,0,0,m.w,m.h);return cv}
  const i=document.createElement('i');i.className='ic';i.style.cssText=iconPos(it.id);return i;
 }
 function stateOf(it){return E.status(it.id,hero)}
 function renderGrid(animate=true){
  const focused=el.grid.contains(document.activeElement)?document.activeElement.dataset.id:null,scroll=el.grid.scrollTop;
  el.shelfT.textContent=C.cat(cat,lang);el.shelfS.textContent=['chest','upgrade'].includes(cat)?'':'· '+H.get(hero).name;el.grid.textContent='';
  ownership.hidden=false;for(const option of ownership.options)option.disabled=cat==='chest'&&['owned','unowned'].includes(option.value);
  if(cat==='chest'&&['owned','unowned'].includes(filter)){filter='all';ownership.value='all'}
  const items=C.inCat(cat).filter(it=>filter==='affordable'?stateOf(it).state==='available'&&!E.owns(it.id)&&it.price<=E.balance():cat==='chest'||filter==='all'||(filter==='owned')===E.owns(it.id)).sort((a,b)=>{const fa=C.fits(a,hero)||cat==='chest'?0:1,fb=C.fits(b,hero)||cat==='chest'?0:1;return fa-fb||(a.default?-1:b.default?1:0)||a.price-b.price});
  if(!items.some(it=>it.id===selected)){selected=null;trying=null}
  if(!items.length){const empty=document.createElement('p');empty.className='sh-empty';empty.setAttribute('role','status');empty.textContent=filterText[4];el.grid.append(empty)}
  items.forEach((it,n)=>{
   const st=stateOf(it),r=C.RARITY[it.rarity];const b=document.createElement('button');b.type='button';b.className='sh-card r-'+it.rarity;b.dataset.id=it.id;b.style.setProperty('--rc',r.color);b.style.setProperty('--i',n);b.setAttribute('role','option');
   if(!animate)b.style.animation='none';
   if(st.state==='locked')b.classList.add('locked');if(st.state==='incompatible')b.classList.add('na');if(it.id===selected)b.classList.add('sel');
   b.classList.toggle('equipped',st.state==='equipped'||!!st.active);b.setAttribute('aria-selected',String(it.id===selected));
   const statusLabel=st.state==='equipped'?w.equipped:st.state==='owned'?(st.active?w.active2:w.owned):st.state==='locked'?w.locked:st.state==='incompatible'?fmt(w.notFor,{h:heroName(hero)}):it.price.toLocaleString('en-US');b.setAttribute('aria-label',C.name(it,lang)+' · '+C.rarity(it.rarity,lang)+' · '+statusLabel);
   const rar=document.createElement('span');rar.className='rar';rar.textContent=C.rarity(it.rarity,lang);
   const nm=document.createElement('span');nm.className='nm';nm.textContent=C.name(it,lang);
   const pr=document.createElement('span');pr.className='pr';
   if(st.state==='equipped'){pr.classList.add('ok');pr.textContent=w.equipped;const bd=document.createElement('span');bd.className='badge';bd.innerHTML=CHECK;b.append(bd)}
   else if(st.state==='owned'){pr.classList.add('ok');pr.textContent=st.active?w.active2:w.owned}
   else if(st.state==='locked'){pr.classList.add('no');pr.innerHTML=LOCK+'<span>'+w.locked+'</span>'}
   else if(st.state==='incompatible'){pr.classList.add('no');pr.textContent=it.heroes.length===1?fmt(w.onlyFor,{h:heroName(it.heroes[0])}):fmt(w.notFor,{h:heroName(hero)})}
   else pr.innerHTML=it.price?COIN+'<span>'+it.price.toLocaleString('en-US')+'</span>':w.free;
   b.append(cardIcon(it),rar,nm,pr);
   b.onclick=()=>{selected=it.id;SND.play('click',.2,1.6);trying=['outfit','weapon','hat','accessory','effect'].includes(it.cat)&&C.fits(it,hero)?it.id:null;for(const x of el.grid.children){x.classList.toggle('sel',x===b);x.setAttribute('aria-selected',String(x===b))}renderInfo();updateLook()};
   el.grid.append(b);
  });
  if(!selected){const eq=E.equipped(hero)[cat];selected=items.some(it=>it.id===eq)?eq:items[0]?.id||null;const s=el.grid.querySelector(`[data-id="${selected}"]`);s?.classList.add('sel');s?.setAttribute('aria-selected','true')}
  el.grid.scrollTop=scroll;if(focused)(el.grid.querySelector(`[data-id="${focused}"]`)||el.grid.querySelector('[aria-selected="true"]')||ownership).focus({preventScroll:true});
 }
 // ---- details + action
 function renderInfo(){
  const gear=E.equipped(hero),summary=q('.sh-loadout');summary.textContent='✓ '+w.equipped+': '+C.name(C.get(gear.outfit),lang);summary.title=Object.values(gear).map(id=>C.name(C.get(id),lang)).join(' · ');
  const it=selected&&C.get(selected);const t=el.info.querySelector('.t b'),ri=el.info.querySelector('.t i'),p=el.info.querySelector('p'),rq=el.info.querySelector('.req'),act=el.act;
  if(!it){t.textContent='';ri.textContent='';p.textContent='';rq.textContent='';act.hidden=true;trying=null;el.try.textContent='';el.try.style.opacity=0;return}
  el.info.style.setProperty('--rc',C.RARITY[it.rarity].color);t.textContent=C.name(it,lang);ri.textContent=C.rarity(it.rarity,lang);
  p.textContent=C.desc(it,lang);
  const st=stateOf(it);rq.innerHTML='';act.hidden=false;act.disabled=false;act.className='sh-act';
  if(st.state==='locked'){rq.innerHTML=LOCK+'<span></span>';rq.querySelector('span').textContent=reqText(it.req);act.innerHTML=LOCK+'<span>'+w.locked+'</span>';act.disabled=true}
  else if(st.state==='incompatible'){rq.textContent=it.heroes.length===1?fmt(w.onlyFor,{h:heroName(it.heroes[0])}):fmt(w.notFor,{h:heroName(hero)});act.textContent=w.locked;act.disabled=true}
  else if(st.state==='equipped'){if(it.default){act.textContent=w.equipped;act.classList.add('eq');act.disabled=true}else{act.textContent=w.unequip;act.classList.add('off')}}
  else if(st.state==='owned'){if(it.cat==='upgrade'){act.textContent=w.active2;act.classList.add('eq');act.disabled=true}else{act.textContent=w.equip;act.classList.add('eq')}}
  else{const g=E.balance();act.innerHTML=COIN+'<span>'+(it.cat==='chest'?w.open:w.buy)+' · '+it.price.toLocaleString('en-US')+'</span>';if(g<it.price){rq.textContent=fmt(w.need,{n:(it.price-g).toLocaleString('en-US')})}}
  const tried=trying&&C.get(trying);el.try.textContent=tried&&gear[tried.cat]!==trying?w.tryOn+': '+C.name(tried,lang):'';el.try.style.opacity=el.try.textContent?1:0;
 }
 el.act.onclick=()=>{
  const it=selected&&C.get(selected);if(!it||el.act.disabled||stack.length)return;const st=stateOf(it);
  if(st.state==='equipped'){const r=E.unequip(it.cat,hero);if(!r.ok)return failed(r);SND.play('click',.3,.8);trying=null;refreshAll()}
  else if(st.state==='owned'&&it.cat!=='upgrade'){const r=E.equip(it.id,hero);if(!r.ok)return failed(r);SND.play('equip',.35);toast('✓ '+w.equippedMsg);trying=null;refreshAll()}
  else if(st.state==='available'){
   if(it.cat==='chest')return previewChest(it);
   if(E.balance()<it.price){SND.play('deny',.4);toast(w.funds+' — '+fmt(w.need,{n:(it.price-E.balance()).toLocaleString('en-US')}),true);el.gold.classList.remove('short');void el.gold.offsetWidth;el.gold.classList.add('short');return}
   confirmBuy(it);
  }
 };
 function refreshAll(){showGold();renderCats();renderGrid(false);renderInfo();updateLook()}
 // ---- dialogs (Android BACK closes the top one)
 const stack=[];
 function modal(build){const m=document.createElement('div');m.className='sh-modal';const d=document.createElement('div');d.className='sh-dlg wood';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.tabIndex=-1;m.append(d);m.__locked=false;m.__focus=document.activeElement;build(d,()=>closeModal(m),m);root.append(m);for(const old of stack)old.inert=true;stack.push(m);q('.sh-ui').inert=true;m.addEventListener('pointerdown',e=>{if(e.target===m&&!m.__locked)closeModal(m)});(d.querySelector('button')||d).focus();return m}
 function closeModal(m){const i=stack.indexOf(m);if(i>=0)stack.splice(i,1);m.__cleanup?.();m.remove();q('.sh-ui').inert=stack.length>0;if(stack.length)stack[stack.length-1].inert=false;if(!closing&&m.__focus?.isConnected)m.__focus.focus()}
 function confirmBuy(it){
  modal((d,close)=>{d.innerHTML=`<h4 class="disp gold"></h4><div class="row"><button type="button" class="sh-act off">${w.cancel}</button><button type="button" class="sh-act ok">${COIN}<span>${w.yes} · ${it.price.toLocaleString('en-US')}</span></button></div>`;
   d.querySelector('h4').textContent=fmt(w.confirm,{i:C.name(it,lang),p:it.price.toLocaleString('en-US')});
   d.querySelector('.off').onclick=close;
   d.querySelector('.ok').onclick=()=>{const r=E.buy(it.id,C.SLOT[it.cat]?hero:undefined);close();
    if(r.ok){SND.play('coin',.6);setTimeout(()=>SND.play('secret',.4),120);toast('✓ '+w.bought+' '+C.name(it,lang));trying=null;showGold(true);refreshAll()}
    else failed(r)}});
 }
 function previewChest(it){
  const cw=CHEST[lang],percent=p=>new Intl.NumberFormat(lang,{maximumFractionDigits:2}).format(p*100)+'%';
  const signature=p=>JSON.stringify([p.price,p.refund,p.rewards.map(r=>[r.id,r.weight])]);
  let snapshot=E.chestPreview(it.id),committed=false;
  modal((d,close,m)=>{
   d.classList.add('sh-chest-preview');d.dataset.chest=it.id;
   d.innerHTML=`<h4 class="disp gold"></h4><p class="sh-odds-rules"></p><div class="sh-odds-summary"></div><ul class="sh-odds-list"></ul><p class="sh-odds-notice" role="status"></p><div class="row"><button type="button" class="sh-act off sh-chest-cancel"></button><button type="button" class="sh-act ok sh-chest-open"></button></div>`;
   d.querySelector('h4').textContent=C.name(it,lang)+' · '+cw.title;d.setAttribute('aria-label',C.name(it,lang)+' · '+cw.title);
   d.querySelector('.sh-odds-rules').textContent=cw.rules;
   const cancel=d.querySelector('.sh-chest-cancel'),confirm=d.querySelector('.sh-chest-open');cancel.textContent=w.cancel;cancel.onclick=close;
   confirm.innerHTML=COIN+'<span>'+w.open+' · '+it.price.toLocaleString('en-US')+'</span>';
   function fill(){
    const list=d.querySelector('.sh-odds-list'),summary=d.querySelector('.sh-odds-summary');list.textContent='';summary.textContent='';
    for(const [key,rar] of Object.entries(C.RARITY)){
     const weight=snapshot.rewards.filter(r=>r.rarity===key).reduce((n,r)=>n+r.weight,0);if(!weight)continue;
     const chip=document.createElement('span');chip.style.setProperty('--rc',rar.color);chip.textContent=C.rarity(key,lang)+' '+percent(weight/snapshot.totalWeight);summary.append(chip);
    }
    for(const drop of snapshot.rewards){
     const item=C.get(drop.id),li=document.createElement('li');li.className='sh-drop';li.dataset.id=drop.id;li.dataset.probability=String(drop.probability);li.style.setProperty('--rc',C.RARITY[drop.rarity].color);
     const name=document.createElement('span');name.className='sh-drop-name';name.textContent=C.name(item,lang);
     const rarity=document.createElement('small');rarity.textContent=C.rarity(drop.rarity,lang)+' · '+C.cat(item.cat,lang);name.append(rarity);
     const odds=document.createElement('strong');odds.textContent=percent(drop.probability);const exact=document.createElement('small');exact.textContent=drop.weight+'/'+snapshot.totalWeight;odds.append(exact);
     li.append(cardIcon(item),name,odds);list.append(li);
    }
    if(!snapshot.rewards.length){const refund=document.createElement('li');refund.className='sh-refund-preview';refund.textContent=fmt(cw.refund,{r:snapshot.refund,p:snapshot.price,n:snapshot.price-snapshot.refund});list.append(refund)}
   }
   confirm.onclick=()=>{
    if(committed||closing||!m.isConnected)return;
    const latest=E.chestPreview(it.id);
    if(signature(latest)!==signature(snapshot)){snapshot=latest;fill();d.querySelector('.sh-odds-notice').textContent=cw.changed;return}
    const res=E.openChest(it.id);if(!res.ok){failed(res);return}
    committed=true;confirm.disabled=true;close();showGold(true);revealChest(it,res);refreshAll();
   };
   fill();
  });
 }
 function revealChest(it,res){
  // Reward and payment are already durable. Animation/skip/close never roll again.
  const cw=CHEST[lang],got=res.item?C.get(res.item):null,rc=got?C.RARITY[got.rarity].color:'#ffdc78';SND.play('chest',.6);
  modal((d,close,m)=>{
   d.classList.add('sh-reveal');d.setAttribute('aria-label',C.name(it,lang));
   d.innerHTML=`<canvas width="520" height="400" aria-hidden="true"></canvas><div class="got" role="status"></div><div class="it disp gold"></div><button type="button" class="sh-reveal-skip"></button><div class="row"></div>`;
   d.querySelector('.got').textContent=cw.opening;const cv=d.querySelector('canvas'),c=cv.getContext('2d'),skip=d.querySelector('.sh-reveal-skip');skip.textContent=cw.skip;
   const p0=iconMeta.icons[it.id],itemIcon=got?iconMeta.icons[got.id]:null,companionArt=got?.cat==='accessory'?cardIcon(got):null;
   let started=performance.now(),revealRaf=0,done=false,stopped=false,thumb=null;
   m.__locked=true;m.__cleanup=()=>{stopped=true;cancelAnimationFrame(revealRaf)};
   function draw(t){
    c.clearRect(0,0,520,400);const opening=clamp((t-.55)/.55,0,1),e=1-Math.pow(1-clamp((t-.75)/.6,0,1),3),motion=state.fx&&!run.fx.reduced;
    if(opening){c.save();c.translate(260,210);if(motion)c.rotate(t*.25);c.globalAlpha=opening*.2;c.fillStyle=rc;
     for(let i=0;i<12;i++){c.rotate(TAU/12);c.beginPath();c.moveTo(0,0);c.lineTo(-24,-245);c.lineTo(24,-245);c.fill()}c.restore();
     const glow=c.createRadialGradient(260,210,0,260,210,175);glow.addColorStop(0,rc+'99');glow.addColorStop(1,rc+'00');c.fillStyle=glow;c.fillRect(0,0,520,400);
     if(motion)for(let i=0;i<18;i++){const a=i*2.4,x=260+Math.cos(a)*(40+opening*145),y=230-Math.sin(i*.8)**2*opening*180;c.fillStyle=i%2?rc:'#fff7dc';c.globalAlpha=opening*.8;c.fillRect(x,y,3+i%3,3+i%3)}c.globalAlpha=1;
    }
    // Split the existing chest icon at its lid seam; hinge the top backwards.
    if(p0){const shake=motion&&t<.55?Math.sin(t*48)*4*t/.55:0;c.save();c.translate(150+shake,145);
     c.drawImage(icons,p0[0],p0[1]+60,128,68,0,103,220,117);
     c.save();c.translate(10,103);c.rotate(-opening*.55);c.scale(1,1-opening*.3);c.drawImage(icons,p0[0],p0[1],128,60,-10,-103,220,103);c.restore();c.restore()}
    if(e){c.globalAlpha=e;
     if(thumb)c.drawImage(thumb,170,170-120*e,180,156);
     else if(companionArt instanceof HTMLCanvasElement)c.drawImage(companionArt,260-companionArt.width*.8,190-130*e,companionArt.width*1.6,companionArt.height*1.6);
     else if(itemIcon)c.drawImage(icons,itemIcon[0],itemIcon[1],128,128,180,180-120*e,160,160);
     else if(!got){c.font='bold 64px Georgia';c.fillStyle='#ffe08a';c.textAlign='center';c.fillText('+'+res.gold,260,170-60*e)}
     c.globalAlpha=1;
    }
   }
   function finish(){if(done||stopped)return;done=true;cancelAnimationFrame(revealRaf);m.__locked=false;d.dataset.settled='true';draw(2);skip.remove();SND.play('secret',.5);
    d.querySelector('.got').textContent=got?w.got+' · '+C.rarity(got.rarity,lang):fmt(w.refund,{n:res.gold});d.querySelector('.it').textContent=got?C.name(got,lang):'';
    const row=d.querySelector('.row'),ok=document.createElement('button');ok.type='button';ok.className='sh-act off';ok.textContent=w.close;ok.onclick=close;row.append(ok);
    if(got&&C.fits(got,hero)){const eq=document.createElement('button');eq.type='button';eq.className='sh-act eq';eq.textContent=w.wearNow;eq.onclick=()=>{const r=E.equip(got.id,hero);if(!r.ok)return failed(r);SND.play('equip',.35);close();cat=got.cat;selected=got.id;trying=null;refreshAll()};row.append(eq)}
    ok.focus();
   }
   skip.onclick=finish;
   if(got?.cat==='outfit')outfitThumb(got.id,document.createElement('canvas')).then(th=>{if(stopped)return;thumb=th;if(done)draw(2)}).catch(()=>{});
   const loop=now=>{if(stopped||!cv.isConnected)return;const t=(now-started)/1000;if(run.fx.reduced||!state.fx||t>=1.4){finish();return}draw(t);revealRaf=requestAnimationFrame(loop)};
   revealRaf=requestAnimationFrame(loop);
  });
 }
 q('.sh-gear').onclick=()=>{SND.play('click',.25);modal((d,close)=>{const tog=(label,key,fn)=>{const l=document.createElement('label');const s=document.createElement('span');s.textContent=label;const b=document.createElement('button');b.type='button';const r=()=>{b.textContent=state[key]?w.on:w.off;b.classList.toggle('on',state[key])};r();b.onclick=()=>{state[key]=!state[key];if(!saveUi()){state[key]=!state[key];failed({code:'storage'});r();return}fn?.();r()};l.append(s,b);return l};
  const h=document.createElement('h4');h.className='disp gold';h.textContent=w.settings;d.append(h,tog(w.sound,'sound',()=>{SND.on=state.sound}),tog(w.effects,'fx'));const row=document.createElement('div');row.className='row';const ok=document.createElement('button');ok.type='button';ok.className='sh-act off';ok.textContent=w.close;ok.onclick=close;row.append(ok);d.append(row)})};
 // ---- preview skin (wears the equipped loadout + the item being tried on)
 async function updateLook(){
  clearTimeout(skinRetry);skinRetry=0;if(closing)return;
  if(preview.skin&&preview.skin.id!==hero)preview.skin=null;
  const load=E.loadout(hero);if(trying){const it=C.get(trying);load[it.cat]=trying}
  const key=[hero,load.outfit,load.weapon,load.hat,load.accessory,load.effect].join('|');if(key===skinKey)return;skinKey=key;const seq=++loadSeq;
  try{const sk=await COS.skin(hero,load);if(seq!==loadSeq||closing)return;const old=preview.skin;preview.skin=sk;if(old?.extras&&sk.extras){sk.extras.pet=old.extras.pet}
   if(!preview.p)preview.reset()}catch(e){if(seq!==loadSeq||closing)return;skinKey='';skinRetry=setTimeout(updateLook,1000);console.warn('shop preview',e)}
 }
 // spotlight cone, warm floor pool and a little rising gold dust behind the hero (hero-local units, feet at 0,0)
 const dust=Array.from({length:14},(_,i)=>({x:(i*37%100-50)*1.3,p:i*.71,s:1+i%3}));
 function stage(c,t,fx,top){
  c.save();const timber=c.createLinearGradient(0,-10,0,25);timber.addColorStop(0,'#764b28');timber.addColorStop(1,'#211308');c.fillStyle=timber;c.strokeStyle='#c99a4480';c.lineWidth=1.5;c.beginPath();c.ellipse(0,9,94,20,0,0,TAU);c.fill();c.stroke();c.beginPath();c.ellipse(0,2,94,15,0,0,TAU);c.fillStyle='#3e2818';c.fill();c.stroke();
  c.globalCompositeOperation='lighter';
  const h=Math.min(top,260),cone=c.createLinearGradient(0,-h,0,10);cone.addColorStop(0,'rgba(255,214,150,0)');cone.addColorStop(.35,'rgba(255,210,140,.10)');cone.addColorStop(1,'rgba(255,200,120,.22)');
  c.fillStyle=cone;c.beginPath();c.moveTo(-26,-h);c.lineTo(26,-h);c.lineTo(110,8);c.lineTo(-110,8);c.closePath();c.fill();
  const pool=c.createRadialGradient(0,0,6,0,0,110);pool.addColorStop(0,'rgba(255,222,150,.45)');pool.addColorStop(.6,'rgba(255,190,90,.14)');pool.addColorStop(1,'rgba(255,170,60,0)');c.fillStyle=pool;c.beginPath();c.ellipse(0,0,115,30,0,0,TAU);c.fill();
  if(fx)for(const d of dust){const k=(t*.22+d.p)%1,y=-k*h*.9,x=d.x+Math.sin(t*1.3+d.p*5)*8;c.globalAlpha=Math.sin(k*Math.PI)*.8;c.fillStyle='#ffe7a8';c.beginPath();c.arc(x,y,d.s,0,TAU);c.fill()}
  c.restore();c.save();c.fillStyle='rgba(20,8,2,.45)';c.beginPath();c.ellipse(0,1,40,8,0,0,TAU);c.fill();c.restore();
 }
 // ---- frame loop (30 fps for the cabin, every frame for the hero)
 function frame(now){
  if(closing)return;raf=requestAnimationFrame(frame);if(document.hidden){last=now;return}
  const t0=performance.now(),dt=Math.min(.05,(now-(last||now))/1000);last=now;fxAcc+=dt;
  if(fxAcc>=1/30){const fc=el.fx,c=fc.getContext('2d');c.setTransform(fc.__dpr,0,0,fc.__dpr,0,0);cabin.lite=!state.fx;cabin.draw(c,cover,fxAcc,state.fx&&!run.fx.reduced);fxAcc=0}
  const hc=el.hero,c=hc.getContext('2d');c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,hc.width,hc.height);
  if(preview.skin){preview.step(dt);run.time+=dt;run.fx.on=state.fx;const d=hc.__dpr,k=stand.k;c.setTransform(d*k,0,0,d*k,d*stand.x,d*stand.y);
   stage(c,run.time,state.fx&&!run.fx.reduced,stand.y/k);
   preview.draw(c,run)}
  const ms=performance.now()-t0;cost.n++;cost.sum+=ms;if(ms>cost.max)cost.max=ms;
 }
 // ---- open / close
 function close(){if(closing)return;closing=true;for(const m of [...stack])closeModal(m);clearTimeout(toast.t);clearTimeout(skinRetry);try{off()}catch{}root.classList.add('out');cancelAnimationFrame(raf);removeEventListener('resize',onResize);removeEventListener('keydown',onKey,true);window.__pfBack=prevBack;
  setTimeout(()=>{root.remove();if(current===api)current=null;opts.onClose?.()},280)}
 const onResize=()=>requestAnimationFrame(()=>{layout()});
 const onKey=e=>{
  if(e.key==='Tab'&&stack.length){const m=stack[stack.length-1],buttons=[...m.querySelectorAll('button:not([disabled]),[href],input,select,textarea,[tabindex="0"]')].filter(el=>!el.hidden&&el.getClientRects().length);const first=buttons[0],last=buttons[buttons.length-1];
   if(!first){e.preventDefault();m.querySelector('.sh-dlg').focus()}
   else if(!m.contains(document.activeElement)||(e.shiftKey?document.activeElement===first:document.activeElement===last)){e.preventDefault();(e.shiftKey?last:first).focus()}
  }
  if(e.key==='Escape'){e.preventDefault();if(stack.length){if(!stack[stack.length-1].__locked)closeModal(stack[stack.length-1])}else close()}
 };
 const prevBack=window.__pfBack;window.__pfBack=()=>{if(stack.length){const m=stack[stack.length-1];if(!m.__locked)closeModal(m);return true}close();return true};
 q('.sh-back').onclick=()=>{SND.play('click',.25,.9);close()};
 addEventListener('resize',onResize);addEventListener('keydown',onKey,true);
 const off=E.on(()=>refreshAll());
 layout();showGold();renderHero();renderAnims();renderCats();renderGrid();renderInfo();
 await updateLook();preview.set(anim);
 requestAnimationFrame(()=>root.classList.remove('pre'));raf=requestAnimationFrame(frame);
 const api={root,close,el,get hero(){return hero},get cat(){return cat},get selected(){return selected},get preview(){return preview},
  selectCat:c=>{el.cats.querySelector(`[data-cat="${c}"]`)?.click()},select:id=>{el.grid.querySelector(`[data-id="${id}"]`)?.click()},switchHero,setAnim:k=>{el.anims.querySelector(`[data-anim="${k}"]`)?.click()},
  get modal(){return stack[stack.length-1]||null},state,cost,_off:off};
 current=api;return api;
}
window.PirateShop={open,close(){current?.close()},get current(){return current},T};
})();


