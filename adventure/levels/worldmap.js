/* Pirate Strike — island world map (chapter 1 art supplied by the game owner).
 * Painted island plate + live, tappable stage nodes (1 → 2 → 3 → 4 → BOSS),
 * completed / open / locked states, stars, glowing progress trail, animated
 * sea glints, torches, lava pulse and drifting cloud shadows.
 * Opens when the player enters ADVENTURE. Touch: tap nodes, drag to pan. */
(()=>{'use strict';
if(window.PirateWorldMap)return;
const BASE='adventure/levels/assets/map/';
const T={
 en:{endless:'ENDLESS SEA',endlessBest:'Best: stage {n}',endlessNew:'New islands every voyage',ending:'ENDING',ch1:'CURSED ISLAND',ch1d:'The secret of the ancient totems is hidden on this island. Clear every stage and defeat the final boss!',back:'BACK',hero:'HERO',play:'PLAY',replay:'PLAY AGAIN',close:'CLOSE',locked:'Locked',soon:'Coming soon',needs:'Finish stage {n} first',boss:'BOSS',stage:'Stage',chapter:'Chapter',gold:'Gold',best:'Best',legend:['Completed','Open stage','Locked','Boss'],voyage:'The Blacktide voyage: harbour, cavern and ship',island:'Totem shrine of the Cursed Island',soonChapter:'New islands are on the horizon',ship:'Chapter',ch2:'STORMBREAKER ISLAND',ch2d:'An abandoned lighthouse in an endless storm. Cross the broken bridges, outlast the wind and relight the beacon!'},
 az:{endless:'SONSUZ DƏNİZ',endlessBest:'Rekord: mərhələ {n}',endlessNew:'Hər səfərdə yeni adalar',ending:'FİNAL',ch1:'LƏNƏTLİ ADA',ch1d:'Qədim totemlərin sirri bu adada gizlənir. Bütün mərhələləri keç və son bossu məğlub et!',back:'GERİ',hero:'QƏHRƏMAN',play:'OYNA',replay:'YENİDƏN OYNA',close:'BAĞLA',locked:'Kilidli',soon:'Tezliklə',needs:'Əvvəlcə {n}-ci mərhələni bitir',boss:'BOSS',stage:'Mərhələ',chapter:'Fəsil',gold:'Qızıl',best:'Rekord',legend:['Tamamlandı','Açıq mərhələ','Kilidli','Boss'],voyage:'Qara Dalğa səfəri: liman, mağara və gəmi',island:'Lənətli Adanın totem məbədi',soonChapter:'Yeni adalar üfüqdədir',ship:'Fəsil',ch2:'FIRTINA ADASI',ch2d:'Bitməyən fırtınada tərk edilmiş mayak. Qırıq körpüləri keç, küləyə dözüb mayakı yenidən yandır!'},
 tr:{endless:'SONSUZ DENİZ',endlessBest:'Rekor: aşama {n}',endlessNew:'Her seferde yeni adalar',ending:'FİNAL',ch1:'LANETLİ ADA',ch1d:'Antik totemlerin sırrı bu adada saklı. Tüm bölümleri geç ve son bossu yen!',back:'GERİ',hero:'KAHRAMAN',play:'OYNA',replay:'TEKRAR OYNA',close:'KAPAT',locked:'Kilitli',soon:'Yakında',needs:'Önce {n}. bölümü bitir',boss:'BOSS',stage:'Bölüm',chapter:'Fasıl',gold:'Altın',best:'Rekor',legend:['Tamamlandı','Açık bölüm','Kilitli','Boss'],voyage:'Kara Dalga seferi: liman, mağara ve gemi',island:'Lanetli Ada’nın totem tapınağı',soonChapter:'Yeni adalar ufukta',ship:'Fasıl',ch2:'FIRTINAKIRAN ADASI',ch2d:'Bitmeyen fırtınada terk edilmiş bir fener. Kırık köprüleri geç, rüzgâra dayan ve feneri yeniden yak!'},
 ru:{endless:'БЕСКРАЙНЕЕ МОРЕ',endlessBest:'Рекорд: этап {n}',endlessNew:'Новые острова в каждом походе',ending:'ФИНАЛ',ch1:'ПРОКЛЯТЫЙ ОСТРОВ',ch1d:'Тайна древних тотемов скрыта на этом острове. Пройдите все этапы и победите финального босса!',back:'НАЗАД',hero:'ГЕРОЙ',play:'ИГРАТЬ',replay:'ЕЩЁ РАЗ',close:'ЗАКРЫТЬ',locked:'Закрыто',soon:'Скоро',needs:'Сначала пройдите этап {n}',boss:'БОСС',stage:'Этап',chapter:'Глава',gold:'Золото',best:'Рекорд',legend:['Пройдено','Открыто','Закрыто','Босс'],voyage:'Плавание «Чёрной волны»: гавань, пещера и корабль',island:'Святилище тотемов Проклятого острова',soonChapter:'На горизонте новые острова',ship:'Глава',ch2:'ОСТРОВ ШТОРМОЛОМ',ch2d:'Заброшенный маяк в бесконечном шторме. Пройдите сломанные мосты, выстойте против ветра и зажгите маяк!'},
 pl:{endless:'BEZKRESNE MORZE',endlessBest:'Rekord: etap {n}',endlessNew:'Nowe wyspy w każdym rejsie',ending:'FINAŁ',ch1:'PRZEKLĘTA WYSPA',ch1d:'Sekret starożytnych totemów kryje się na tej wyspie. Przejdź wszystkie etapy i pokonaj ostatniego bossa!',back:'WRÓĆ',hero:'BOHATER',play:'GRAJ',replay:'ZAGRAJ PONOWNIE',close:'ZAMKNIJ',locked:'Zablokowany',soon:'Wkrótce',needs:'Najpierw ukończ etap {n}',boss:'BOSS',stage:'Etap',chapter:'Rozdział',gold:'Złoto',best:'Rekord',legend:['Ukończony','Otwarty','Zablokowany','Boss'],voyage:'Rejs Czarnej Fali: port, jaskinia i statek',island:'Świątynia totemów Przeklętej Wyspy',soonChapter:'Nowe wyspy na horyzoncie',ship:'Rozdział',ch2:'WYSPA ŁAMACZA BURZ',ch2d:'Opuszczona latarnia w niekończącej się burzy. Przejdź zerwane mosty, przetrwaj wiatr i rozpal latarnię!'}};
const CSS=`
#pirate-world-map{position:fixed;inset:0;z-index:22000;overflow:hidden;background:#06243a;font-family:Georgia,'Times New Roman',serif;color:#fff;touch-action:none;user-select:none;-webkit-user-select:none}
#pirate-world-map .wm-stage{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}
#pirate-world-map .wm-plate{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none}
#pirate-world-map canvas.wm-fx{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
#pirate-world-map .wm-node{position:absolute;width:104px;height:104px;margin:-52px 0 0 -52px;border-radius:50%;border:0;padding:0;background:none;cursor:pointer;touch-action:none}
#pirate-world-map .wm-node .ring{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 50% 40%,#fff6c8,#e9b94a 38%,#9c6418 70%,#3d250a 72%);box-shadow:0 6px 10px #0009}
#pirate-world-map .wm-node .core{position:absolute;inset:9px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:900 46px/1 Georgia,serif;color:#fffbe8;text-shadow:0 3px 0 #1f2a12,0 0 6px #0008,-2px 0 0 #1f2a12,2px 0 0 #1f2a12,0 -2px 0 #1f2a12;box-shadow:inset 0 -8px 14px #0007,inset 0 8px 14px #ffffff40}
#pirate-world-map .wm-node.done .core{background:radial-gradient(circle at 40% 30%,#7fe07a,#2f9a3e 55%,#14592a)}
#pirate-world-map .wm-node.open .core{background:radial-gradient(circle at 40% 30%,#ffe27a,#e3a524 55%,#9a5c0e);color:#fff7dc;text-shadow:0 3px 0 #5a3304,-2px 0 0 #5a3304,2px 0 0 #5a3304,0 -2px 0 #5a3304}
#pirate-world-map .wm-node.locked .core{background:radial-gradient(circle at 40% 30%,#8e98a2,#56606b 55%,#2c333b);color:#d9dee2;font-size:40px}
#pirate-world-map .wm-node.boss .ring{background:radial-gradient(circle at 50% 40%,#ffd0c0,#d4553f 40%,#6b1410 70%,#2a0705 72%)}
#pirate-world-map .wm-node.boss .core{background:radial-gradient(circle at 40% 30%,#e8574a,#a3191a 55%,#4e0606);font-size:44px}
#pirate-world-map .wm-node.open .ring{animation:wm-pulse 1.8s ease-in-out infinite}
#pirate-world-map .wm-node.boss.open .ring{animation:wm-pulse-red 1.6s ease-in-out infinite}
#pirate-world-map .wm-node:active .ring{transform:scale(.94)}
#pirate-world-map .wm-stars{position:absolute;left:50%;top:calc(100% - 8px);transform:translateX(-50%);display:flex;gap:2px;padding:3px 9px 5px;border-radius:12px;background:linear-gradient(#3a3027,#1d1712);border:2px solid #6c5130;box-shadow:0 4px 8px #0009}
#pirate-world-map .wm-stars i{width:30px;height:30px;display:block;clip-path:polygon(50% 0,63% 34%,100% 36%,71% 58%,81% 95%,50% 74%,19% 95%,29% 58%,0 36%,37% 34%);background:linear-gradient(#ffe98a,#e3a21c);filter:drop-shadow(0 1px 0 #6b4310)}
#pirate-world-map .wm-stars i.off{background:linear-gradient(#a6a6a6,#5d5d5d)}
#pirate-world-map .wm-plaque{position:absolute;left:50%;top:calc(100% + 34px);transform:translateX(-50%);white-space:nowrap;padding:5px 14px 6px;border-radius:9px;font:700 21px/1.1 Georgia,serif;color:#fbecc8;text-shadow:0 2px 0 #2a1708;background:linear-gradient(#5a3a20,#38220f);border:3px solid #a57a3d;box-shadow:0 5px 10px #000a,inset 0 1px 0 #ffffff30}
#pirate-world-map .wm-node.boss .wm-plaque{top:calc(100% - 4px);font-size:26px;letter-spacing:1px;padding:6px 20px}
#pirate-world-map .wm-lock{position:absolute;right:-8px;top:-10px;width:38px;height:38px;border-radius:50%;background:radial-gradient(circle at 40% 30%,#d4d9de,#7d8690);border:2px solid #2f353c;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 3px 6px #0008}
#pirate-world-map .wm-scroll{position:absolute;left:max(10px,env(safe-area-inset-left));top:max(8px,env(safe-area-inset-top));width:clamp(220px,34vw,420px);pointer-events:none;filter:drop-shadow(0 6px 10px #000a)}
#pirate-world-map .wm-scroll h2{margin:0;padding:clamp(4px,1.2vh,10px) 26px;text-align:center;font:900 clamp(18px,5vh,38px)/1.1 Georgia,serif;letter-spacing:1px;color:#4a2a0e;text-shadow:0 1px 0 #f8e7bd;background:linear-gradient(#f2d9a0,#d9b36d 60%,#c49450);border:3px solid #8a5a2e;border-radius:6px;position:relative}
#pirate-world-map .wm-scroll h2::before,#pirate-world-map .wm-scroll h2::after{content:'';position:absolute;top:-6px;bottom:-6px;width:16px;border-radius:8px;background:linear-gradient(90deg,#b88443,#f0d39a 50%,#a06c32);border:2px solid #6b4520}
#pirate-world-map .wm-scroll h2::before{left:-12px}#pirate-world-map .wm-scroll h2::after{right:-12px}
#pirate-world-map .wm-scroll p{margin:6px 10px 0;padding:clamp(4px,1.2vh,10px) 14px;font:600 clamp(11px,2.6vh,17px)/1.35 Arial,sans-serif;color:#eaf3f7;background:#0b2034cc;border:1px solid #ffffff22;border-radius:8px}
@media (max-height:420px){#pirate-world-map .wm-bottom{background:linear-gradient(#06101c00,#06101ce6 60%)}#pirate-world-map .wm-scroll p{display:none}#pirate-world-map .wm-btn{white-space:nowrap;padding:4px 14px;min-height:44px}#pirate-world-map .wm-legend{flex-wrap:nowrap;white-space:nowrap;padding:5px 10px}}
@media (max-width:700px){#pirate-world-map .wm-legend{display:none!important}}
#pirate-world-map .wm-top{position:absolute;left:0;right:0;top:0;display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:max(8px,env(safe-area-inset-top)) max(12px,env(safe-area-inset-right)) 8px max(12px,env(safe-area-inset-left));background:none;pointer-events:none}
#pirate-world-map .wm-top img.logo{position:absolute;left:58%;top:max(6px,env(safe-area-inset-top));transform:translateX(-50%);height:clamp(34px,8.5vh,58px);filter:drop-shadow(0 4px 6px #0009)}
#pirate-world-map .wm-gold{display:flex;align-items:center;gap:8px;padding:4px 14px 4px 6px;border-radius:12px;background:#0d1a2bd9;border:2px solid #3b5268;font:800 clamp(16px,3.6vh,24px) Arial,sans-serif;color:#fff}
#pirate-world-map .wm-gold img{width:clamp(26px,6vh,38px);height:clamp(26px,6vh,38px)}
#pirate-world-map .wm-bottom{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px max(12px,env(safe-area-inset-right)) max(10px,env(safe-area-inset-bottom)) max(12px,env(safe-area-inset-left));background:none;pointer-events:none}
#pirate-world-map .wm-btn{pointer-events:auto;min-height:48px;padding:6px 22px;border-radius:10px;border:3px solid #2d1a0b;background:linear-gradient(#8a5a2e,#5a3618 55%,#3e240e);color:#ffe7b0;font:900 clamp(16px,3.6vh,24px) Georgia,serif;letter-spacing:1px;text-shadow:0 2px 0 #1d0f05;box-shadow:0 5px 10px #000b,inset 0 2px 0 #ffffff30,inset 0 0 0 2px #b8864866;display:flex;align-items:center;gap:8px;cursor:pointer}
#pirate-world-map .wm-btn:active{transform:translateY(2px)}
#pirate-world-map .wm-btn.hero img{width:clamp(34px,8vh,46px);height:clamp(34px,8vh,46px);border-radius:8px;border:2px solid #e5c27a;object-fit:cover;object-position:50% 10%;background:#21384c}
#pirate-world-map .wm-legend{padding:6px 14px;border-radius:12px;background:#0a1b30d9;border:1px solid #ffffff22;display:flex;gap:clamp(8px,2vw,22px);font:600 clamp(11px,2.6vh,16px) Arial,sans-serif;color:#eef3f6;flex-wrap:wrap;justify-content:center}
#pirate-world-map .wm-legend span{display:flex;align-items:center;gap:6px}
#pirate-world-map .wm-legend b{width:clamp(18px,4vh,26px);height:clamp(18px,4vh,26px);border-radius:50%;border:2px solid #d9b45d;box-shadow:inset 0 -3px 5px #0006}
#pirate-world-map .wm-chap{position:absolute;top:66%;transform:translateY(-50%);width:52px;height:72px;border-radius:12px;border:3px solid #2d1a0b;background:linear-gradient(#8a5a2e,#4a2c12);color:#ffe7b0;font:900 28px Georgia;box-shadow:0 5px 10px #000b;pointer-events:auto}
#pirate-world-map .wm-chap.prev{left:max(8px,env(safe-area-inset-left))}#pirate-world-map .wm-chap.next{right:max(8px,env(safe-area-inset-right))}
#pirate-world-map .wm-chap[disabled]{opacity:.35}
#pirate-world-map .wm-fog{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,#0b2238aa,#050d18ee);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;pointer-events:none}
#pirate-world-map .wm-fog h3{margin:0;font-size:84px;color:#f4dca0;text-shadow:0 3px 0 #2a1708}
#pirate-world-map .wm-fog p{margin:0;font:600 38px Arial;color:#d5e3ea}
#pirate-world-map .wm-sheet{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#02070d99;pointer-events:auto}
#pirate-world-map .wm-card{position:relative;width:min(470px,88vw);max-height:calc(100dvh - 24px);overflow:auto;box-sizing:border-box;padding:clamp(14px,3.5vh,24px) 22px;border-radius:16px;color:#3a2410;text-align:center;background:radial-gradient(ellipse at 30% 20%,#f6e2b0,#e1bf7c 70%,#c99a52);border:4px solid #7b5427;box-shadow:0 18px 50px #000c,inset 0 0 30px #8a5a2e55;animation:wm-pop .22s ease-out}
#pirate-world-map .wm-card h3{margin:0;font-size:clamp(24px,5.4vh,34px);color:#4a2a0e}
#pirate-world-map .wm-card .sub{margin:4px 0 10px;font:600 15px/1.35 Arial;color:#5b3b1c}
#pirate-world-map .wm-card .wm-stars{position:static;transform:none;display:inline-flex;margin:4px 0 10px}
#pirate-world-map .wm-card .row{display:flex;gap:10px;justify-content:center;margin-top:10px}
#pirate-world-map .wm-card .wm-btn{justify-content:center;flex:1}
#pirate-world-map .wm-endless{position:absolute;right:max(12px,env(safe-area-inset-right));bottom:calc(max(10px,env(safe-area-inset-bottom)) + 66px);display:flex;gap:10px;align-items:stretch;pointer-events:none}
#pirate-world-map .wm-endless[hidden]{display:none}
#pirate-world-map .wm-chap:disabled{visibility:hidden}
#pirate-world-map .go-endless{flex-direction:column;gap:0;line-height:1.1;background:linear-gradient(#2f8fb0,#1a5f7c 55%,#0f3d52);border-color:#06202c;box-shadow:0 5px 10px #000b,0 0 18px #4fd0ff88,inset 0 2px 0 #ffffff40}
#pirate-world-map .go-endless small{font:700 clamp(11px,2vh,14px) Arial,sans-serif;color:#cff3ff;letter-spacing:0}
#pirate-world-map .go-ending{font-size:clamp(13px,2.6vh,18px);padding:6px 14px}
#pirate-world-map .wm-card .wm-btn.primary{background:linear-gradient(#ffd56a,#e09a26 55%,#a8631a);color:#3a1d05;text-shadow:0 1px 0 #ffe7a8;border-color:#5a3205}
#pirate-world-map .wm-toast{position:absolute;left:50%;bottom:92px;transform:translateX(-50%);padding:10px 18px;border-radius:10px;background:#0b1726ee;border:2px solid #d9b45d;font:600 16px Arial;pointer-events:none;animation:wm-pop .2s ease-out}
@keyframes wm-pulse{0%,100%{box-shadow:0 6px 10px #0009,0 0 0 0 #ffd96a00}50%{box-shadow:0 6px 10px #0009,0 0 26px 10px #ffd96acc}}
@keyframes wm-pulse-red{0%,100%{box-shadow:0 6px 10px #0009,0 0 0 0 #ff5a4a00}50%{box-shadow:0 6px 10px #0009,0 0 28px 12px #ff5a4acc}}
@keyframes wm-pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){#pirate-world-map .wm-node .ring{animation:none!important}}
`;
const tr=(lang,k)=>(T[lang]||T.en)[k]??T.en[k];
let current=null;

class WorldMap{
 constructor(host){
  this.host=host;this.lang=host?.u?.lang||(()=>{try{return localStorage.getItem('pf-lang')}catch{return null}})()||'en';if(!T[this.lang])this.lang='en';
  this.L=window.PirateLevels;this.chapter=1;this.pan=0;this.alive=true;this.t0=performance.now();
  this.mq=matchMedia('(prefers-reduced-motion: reduce)');
 }
 async open(){
  if(!document.getElementById('pirate-world-map-style')){const s=document.createElement('style');s.id='pirate-world-map-style';s.textContent=CSS;document.head.append(s)}
  const root=this.root=document.createElement('section');root.id='pirate-world-map';root.setAttribute('aria-label','World map');
  root.innerHTML='<div class="wm-stage"><img class="wm-plate" alt="" draggable="false"><canvas class="wm-fx"></canvas></div><div class="wm-scroll"><h2></h2><p></p></div><div class="wm-top"><img class="logo" alt="Pirate Strike" src="'+BASE+'logo.webp"><div class="wm-gold"><img alt="" src="'+BASE+'coin.png"><span></span></div></div><button class="wm-chap prev" aria-label="Previous chapter">‹</button><button class="wm-chap next" aria-label="Next chapter">›</button><div class="wm-bottom"><button class="wm-btn back"></button><div class="wm-legend"></div><button class="wm-btn hero"><img alt=""><span></span></button></div><div class="wm-endless" hidden><button class="wm-btn go-ending" type="button"></button><button class="wm-btn primary go-endless" type="button"><b></b><small></small></button></div>';
  document.body.append(root);
  this.stage=root.querySelector('.wm-stage');this.scrollEl=root.querySelector('.wm-scroll');this.plate=root.querySelector('.wm-plate');this.fx=root.querySelector('canvas');
  root.querySelector('.back').textContent='◀ '+tr(this.lang,'back');root.querySelector('.back').onclick=()=>this.back();
  const hb=root.querySelector('.hero');hb.querySelector('span').textContent=tr(this.lang,'hero');hb.onclick=()=>window.PirateHeroSelect?window.PirateHeroSelect.open({lang:this.lang,onDone:()=>this.refreshHero()}):null;if(!window.PirateHeroSelect)hb.hidden=true;
  root.querySelector('.prev').onclick=()=>this.setChapter(this.chapter-1);root.querySelector('.next').onclick=()=>this.setChapter(this.chapter+1);
  const lg=root.querySelector('.wm-legend');tr(this.lang,'legend').forEach((t,i)=>{const s=document.createElement('span');const b=document.createElement('b');b.style.background=['radial-gradient(circle at 40% 30%,#7fe07a,#2f9a3e 55%,#14592a)','radial-gradient(circle at 40% 30%,#ffe27a,#e3a524 55%,#9a5c0e)','radial-gradient(circle at 40% 30%,#8e98a2,#56606b 55%,#2c333b)','radial-gradient(circle at 40% 30%,#e8574a,#a3191a 55%,#4e0606)'][i];s.append(b,t);lg.append(s)});
  this.layout=await fetch(BASE+'island-chapter1.json').then(r=>r.json());
  await new Promise((ok,fail)=>{this.plate.onload=ok;this.plate.onerror=()=>fail(Error('map image'));this.plate.src=BASE+this.layout.image});
  this.stage.style.width=this.layout.width+'px';this.stage.style.height=this.layout.height+'px';this.fx.width=this.layout.width/2;this.fx.height=this.layout.height/2;
  this.bindPan();this.onResize=()=>this.fit();addEventListener('resize',this.onResize);
  this.prevBack=window.__pfBack;window.__pfBack=()=>{if(this.root.querySelector('.wm-sheet')){this.root.querySelector('.wm-sheet').remove();return true}this.back();return true};
  const firstOpen=[1,2,3,4,5].find(n=>this.L.isUnlocked(n)&&!this.L.isCompleted(n))||1;
  this.setChapter(Math.max(1,Math.ceil(this.nextLevel()/5)),firstOpen);
  this.refreshHero();this.refreshGold();
  root.querySelector('.go-endless').onclick=()=>this.launchEndless();root.querySelector('.go-ending').onclick=()=>this.playEnding();this.refreshEndless();
  this.raf=requestAnimationFrame(this.tick.bind(this));
  // first visit: let the player pick a hero before the first stage
  let chosen=null;try{chosen=localStorage.getItem('pf-hero')}catch{}
  if(!chosen&&window.PirateHeroSelect)window.PirateHeroSelect.open({lang:this.lang,onDone:h=>{if(!h)this.L.setHero(this.L.hero());this.refreshHero()}});
  return this;
 }
 /* chapters shown = those holding an installed level (Levels 1–10 → 2); 'coming soon' chapters are not listed */
 maxChapter(){let last=1;for(let n=1;n<=this.L.TOTAL;n++)if(this.L.isPlayable(n))last=n;return Math.max(1,Math.ceil(last/5))}
 /* after the Admiral (Level 10): the Endless Sea and a replay of the ending */
 refreshEndless(){const box=this.root.querySelector('.wm-endless');if(!box)return;const open=this.L.isCompleted(10)&&!!window.PirateLevelEngine?.get('endless');box.hidden=!open;if(!open)return;
  const b=box.querySelector('.go-endless'),best=window.PirateEndless?.best?.();b.querySelector('b').textContent='⚓ '+tr(this.lang,'endless');b.querySelector('small').textContent=best?.stage?tr(this.lang,'endlessBest').replace('{n}',best.stage):tr(this.lang,'endlessNew');
  const f=box.querySelector('.go-ending');f.hidden=!window.PirateEnding;f.textContent='🎬 '+tr(this.lang,'ending')}
 launchEndless(){const host=this.host,L=this.L;this.close();L.closeMap?.();return window.PirateLevelEngine.launch('endless',{host,hero:L.hero(),onExit:()=>L.openMap(host)})}
 playEnding(){const host=this.host,L=this.L;this.close();window.PirateEnding.play({lang:this.lang,hero:L.hero(),onDone:()=>L.openMap(host)})}
 nextLevel(){for(let n=1;n<=this.L.TOTAL;n++)if(!this.L.isCompleted(n))return n;return this.L.TOTAL}
 refreshGold(){let g=0;try{g=window.PirateEconomy?.balance()??(Number(localStorage.getItem('pf-adventure-gold'))||0)}catch{}this.root.querySelector('.wm-gold span').textContent=g.toLocaleString()}
 refreshHero(){const img=this.root.querySelector('.wm-btn.hero img');const h=this.L.hero();const src=window.PirateHeroes?.portrait?.(h);img.dataset.heroPortrait=h;img.hidden=false;if(src)img.src=src;img.style.objectPosition=h==='scarlet'?'50% 20%':'50% 50%'}
 setChapter(ch){
  const max=this.maxChapter();ch=Math.max(1,Math.min(max,ch));this.chapter=ch;
  const named=ch<=2&&(ch===1||[6,7,8,9,10].some(n=>this.L.isPlayable(n)));   // chapter 2 (Stormbreaker Island) is named once its first stage is built
  this.scrollEl.querySelector('h2').textContent=named?tr(this.lang,'ch'+ch):tr(this.lang,'chapter')+' '+ch;this.scrollEl.querySelector('p').textContent=named?tr(this.lang,'ch'+ch+'d'):tr(this.lang,'soonChapter');
  // chapter 2 reuses the island plate under a storm: darker, colder, with rain and lightning (see tick)
  this.plate.style.filter=ch===2?'brightness(.56) saturate(.42) contrast(1.1) hue-rotate(-10deg)':'';
  this.root.querySelector('.prev').disabled=ch<=1;this.root.querySelector('.next').disabled=ch>=max;
  this.stage.querySelectorAll('.wm-node,.wm-fog').forEach(e=>e.remove());
  const built=[1,2,3,4,5].map(i=>(ch-1)*5+i).some(n=>this.L.isPlayable(n));
  this.layout.nodes.forEach(([x,y],i)=>this.node((ch-1)*5+i+1,x,y));
  if(!built){const f=document.createElement('div');f.className='wm-fog';f.innerHTML='<h3></h3><p></p>';f.querySelector('h3').textContent=tr(this.lang,'chapter')+' '+ch;f.querySelector('p').textContent=tr(this.lang,'soonChapter');this.stage.append(f)
   // the first stage of an unbuilt chapter that the player has unlocked (e.g. Level 6 after the Totem Shaman) is named, but stays 'coming soon'
   const first=(ch-1)*5+1;if(this.L.isUnlocked(first)){const n=document.createElement('p');n.className='wm-new';n.style.cssText='margin-top:18px;font:800 34px Georgia,serif;color:#ffe3a0';n.textContent=({en:'Stage {n} unlocked: {name}',az:'Mərhələ {n} açıldı: {name}',tr:'{n}. bölüm açıldı: {name}',ru:'Этап {n} открыт: {name}',pl:'Etap {n} odblokowany: {name}'}[this.lang]||'Stage {n} unlocked: {name}').replace('{n}',first).replace('{name}',this.L.name(first,this.lang)||'');f.append(n)}}
  this.fit();
 }
 node(n,x,y){
  const L=this.L,boss=L.isBoss(n),done=L.isCompleted(n),open=!done&&L.isUnlocked(n),playable=L.isPlayable(n);
  const b=document.createElement('button');b.type='button';b.className='wm-node '+(done?'done':open?'open':'locked')+(boss?' boss':'');b.dataset.level=n;b.style.left=x+'px';b.style.top=y+'px';
  const ring=document.createElement('span');ring.className='ring';const core=document.createElement('span');core.className='core';core.textContent=boss?(open||done?'☠':'🔒'):(open||done?String(n):'🔒');
  b.append(ring,core);
  if(!boss){const st=this.starsEl(done?L.stars(n):0);b.append(st)}
  const pl=document.createElement('span');pl.className='wm-plaque';pl.textContent=boss?tr(this.lang,'boss'):n+'. '+(L.name(n,this.lang)||tr(this.lang,'stage')+' '+n);b.append(pl);
  if(!open&&!done&&!boss){const lk=document.createElement('span');lk.className='wm-lock';lk.textContent='🔒';b.append(lk);core.textContent=String(n)}
  b.setAttribute('aria-label',(boss?tr(this.lang,'boss')+' ':'')+tr(this.lang,'stage')+' '+n+' · '+(done?tr(this.lang,'legend')[0]:open?tr(this.lang,'legend')[1]:tr(this.lang,'locked'))+(playable?'':' · '+tr(this.lang,'soon')));
  b.addEventListener('click',e=>{if(this.dragged)return;this.select(n)});
  this.stage.append(b);
 }
 starsEl(k){const s=document.createElement('span');s.className='wm-stars';for(let i=0;i<3;i++){const st=document.createElement('i');if(i>=k)st.className='off';s.append(st)}return s}
 toast(m){this.root.querySelector('.wm-toast')?.remove();const t=document.createElement('div');t.className='wm-toast';t.textContent=m;this.root.append(t);setTimeout(()=>t.remove(),1900)}
 select(n){
  const L=this.L;if(!L.isUnlocked(n)){this.toast(tr(this.lang,'needs').replace('{n}',n-1));return}
  if(!L.isPlayable(n)){this.toast(tr(this.lang,'soon'));return}
  this.root.querySelector('.wm-sheet')?.remove();
  const sh=document.createElement('div');sh.className='wm-sheet';const c=document.createElement('div');c.className='wm-card';sh.append(c);
  const h=document.createElement('h3');h.textContent=(L.isBoss(n)?tr(this.lang,'boss')+' · ':n+'. ')+(L.name(n,this.lang)||'');c.append(h);
  const sub=document.createElement('p');sub.className='sub';sub.textContent=n===1?(window.PirateLevelEngine?.get(1)?.blurb?.(this.lang)||tr(this.lang,'voyage')):n===5?tr(this.lang,'island'):window.PirateLevelEngine?.get(n)?.blurb?.(this.lang)||'';c.append(sub);
  const done=L.isCompleted(n);if(!L.isBoss(n))c.append(this.starsEl(done?L.stars(n):0));
  const best=L.data().completed[n]?.best;if(best?.gold){const p=document.createElement('p');p.className='sub';p.textContent='🏆 '+tr(this.lang,'best')+': '+best.gold+' '+tr(this.lang,'gold');c.append(p)}
  const row=document.createElement('div');row.className='row';const cl=document.createElement('button');cl.className='wm-btn';cl.textContent=tr(this.lang,'close');cl.onclick=()=>sh.remove();
  const go=document.createElement('button');go.className='wm-btn primary';go.textContent='▶ '+(done?tr(this.lang,'replay'):tr(this.lang,'play'));go.onclick=async()=>{go.disabled=true;sh.remove();const host=this.host;this.close();if(!await L.launch(n,host))L.openMap(host)};
  row.append(cl,go);c.append(row);sh.addEventListener('pointerdown',e=>{if(e.target===sh)sh.remove()});
  this.root.append(sh);go.focus?.();
 }
 back(){const host=this.host;this.close();if(host&&host.active&&typeof host.leaveAdventure==='function')host.leaveAdventure();else if(host&&host.active&&typeof host.close==='function')host.close()}
 fit(){
  if(!this.layout)return;const vw=innerWidth,vh=innerHeight,W0=this.layout.width,H0=this.layout.height;
  const s=this.scale=Math.max(vw/W0,vh/H0);const sw=W0*s,sh=H0*s;
  this.minPan=Math.min(0,vw-sw);const lowY=Math.max(...this.layout.nodes.map(p=>p[1]))+118;const bar=(this.root.querySelector('.wm-bottom')?.offsetHeight||62)+4;// short phones: the plate may rise up to 70% of the bar height so node 1's label clears the BACK button
this.offY=Math.max(vh-sh-bar*.7,Math.min(0,(vh-bar)-lowY*s));
  // keep the chapter scroll (left) in view when possible, but never cut off the boss node (right)
  const right=(Math.max(...this.layout.nodes.map(p=>p[0]))+130)*s;this.pan=Math.max(this.minPan,Math.min(0,vw-right));
  this.apply();
 }
 apply(){this.stage.style.transform='translate('+this.pan+'px,'+this.offY+'px) scale('+this.scale+')';const r=this.root.querySelector('.wm-chap.next');}
 bindPan(){let sx=0,sp=0,id=null;this.dragged=false;
  this.root.addEventListener('pointerdown',e=>{if(e.target.closest('.wm-btn,.wm-chap,.wm-sheet'))return;id=e.pointerId;sx=e.clientX;sp=this.pan;this.dragged=false});
  this.root.addEventListener('pointermove',e=>{if(e.pointerId!==id)return;const dx=e.clientX-sx;if(Math.abs(dx)>8)this.dragged=true;if(this.minPan<0){this.pan=Math.max(this.minPan,Math.min(0,sp+dx));this.apply()}});
  const end=e=>{if(e.pointerId!==id)return;id=null;setTimeout(()=>this.dragged=false,0)};this.root.addEventListener('pointerup',end);this.root.addEventListener('pointercancel',end)}
 tick(now){
  if(!this.alive)return;this.raf=requestAnimationFrame(this.tick.bind(this));
  if(now-(this.lastFx||0)<33)return;this.lastFx=now;const t=(now-this.t0)/1000,c=this.fx.getContext('2d'),lay=this.layout,reduced=this.mq.matches;
  c.clearRect(0,0,this.fx.width,this.fx.height);c.save();c.scale(.5,.5);
  // progress trail along the painted path up to the furthest unlocked node
  const nodeIdx=lay.nodes.map(([nx,ny])=>lay.path.findIndex(([px,py])=>px===nx&&py===ny));let reach=0;
  for(let i=0;i<5;i++){const n=(this.chapter-1)*5+i+1;if(this.L.isCompleted(n))reach=Math.max(reach,nodeIdx[Math.min(4,i+1)])}
  if(reach>0){c.lineCap='round';c.lineJoin='round';c.beginPath();lay.path.slice(0,reach+1).forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle='rgba(255,214,110,.55)';c.lineWidth=16;c.shadowColor='#ffcf5a';c.shadowBlur=18;c.stroke();c.shadowBlur=0;
   c.setLineDash([18,22]);c.lineDashOffset=reduced?0:-t*40;c.strokeStyle='#fff3c4';c.lineWidth=7;c.stroke();c.setLineDash([])}
  if(!reduced){
   // sea glints
   for(let i=0;i<lay.sea.length;i++){const [x,y]=lay.sea[i];const k=Math.sin(t*1.6+i*1.7);if(k<.7||i%2)continue;const a=(k-.7)/.3;c.fillStyle='rgba(235,250,255,'+(a*.6).toFixed(2)+')';c.fillRect(x-4,y,8+a*6,2);c.fillRect(x,y-1,2,4)}
   // drifting cloud shadows
   for(let i=0;i<4;i++){const x=((t*14+i*420)%(lay.width+500))-250,y=180+i*140;const g=c.createRadialGradient(x,y,10,x,y,170);g.addColorStop(0,'rgba(5,20,40,.16)');g.addColorStop(1,'rgba(5,20,40,0)');c.fillStyle=g;c.fillRect(x-180,y-180,360,360)}
   // torches and lava
   for(const [x,y] of lay.torches){const f=.75+Math.sin(t*9+x)*.15+Math.sin(t*23+y)*.1;const g=c.createRadialGradient(x,y,0,x,y,34*f);g.addColorStop(0,'rgba(255,200,90,.85)');g.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=g;c.fillRect(x-40,y-40,80,80)}
   if(this.chapter===2){// storm over the island: rain, scud and lightning instead of lava
    c.fillStyle='rgba(8,22,40,.28)';c.fillRect(0,0,lay.width,lay.height);
    c.strokeStyle='rgba(190,215,240,.35)';c.lineWidth=2;c.beginPath();for(let i=0;i<120;i++){const x=((i*173+t*260)%(lay.width+200))-100,y=((i*97+t*900)%(lay.height+100))-50;c.moveTo(x,y);c.lineTo(x-10,y-34)}c.stroke();
    const fl=Math.max(0,Math.sin(t*1.1)*Math.sin(t*2.7)-.82)*5;if(fl>0){c.fillStyle='rgba(210,230,255,'+(fl*.35).toFixed(2)+')';c.fillRect(0,0,lay.width,lay.height)}
    c.restore();return}
   const [lx,ly]=lay.lava,lp=.5+.5*Math.sin(t*1.3);const lg=c.createRadialGradient(lx,ly,20,lx,ly,260);lg.addColorStop(0,'rgba(255,80,40,'+(.18+lp*.18).toFixed(2)+')');lg.addColorStop(1,'rgba(255,60,20,0)');c.fillStyle=lg;c.fillRect(lx-270,ly-270,540,540);
   // embers rising from the boss island
   for(let i=0;i<18;i++){const p=(t*.25+i/18)%1;const x=lx-120+((i*67)%240)+Math.sin(t+i)*10,y=ly+160-p*260;c.fillStyle='rgba(255,'+(140+i*5)+',60,'+(1-p).toFixed(2)+')';c.fillRect(x,y,4,4)}
  }
  c.restore();
 }
 close(){if(!this.alive)return;this.alive=false;cancelAnimationFrame(this.raf);removeEventListener('resize',this.onResize);window.__pfBack=this.prevBack;this.root?.remove();if(current===this)current=null}
}
window.PirateWorldMap={
 async open(host){current?.close();const m=new WorldMap(host);current=m;try{await m.open()}catch(e){console.error('[map]',e);m.close();return null}return m},
 close(){current?.close()},
 get current(){return current}
};
})();
