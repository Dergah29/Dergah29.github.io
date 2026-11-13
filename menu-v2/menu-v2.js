/* Pirate Strike — main menu v2: a living harbour lobby.
 *
 * Presentation layer over the existing menu (ui.js + pirate-menu.js): every visible
 * control is backed by the game's own working element, so all buttons keep their
 * original behaviour —
 *   ADVENTURE  → .adventure-entry  (island world map)
 *   ARENA      → drawer with .play-bot / .play-friend / .menu-training
 *   HEROES     → PirateHeroSelect (existing hero selection)
 *   SETTINGS   → .open-settings (existing settings screen)
 *   SHOP       → PirateShop (shop/shop.js: Captain's Wardrobe, in-game gold only)
 *   language   → .pf-language, sound → .menu-sound, player chip → .menu-profile
 *   next-stage card → the world map, gold → pf-adventure-gold (read only)
 * Art: menu-v2/assets (derived from the existing painting and Mari's card art by
 * menu-v2/tools/build_menu_assets.py). Mari is the approved cut-out rig: body mesh with
 * wind/breath, pistol and sword arms on their own bones, code-drawn effects.
 * Only the menu screen is touched; save data, levels, combat and hero selection are not. */
(()=>{'use strict';
if(window.PirateMenuV2)return;
const BASE='menu-v2/assets/';
const TAU=Math.PI*2,DEG=Math.PI/180;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,k)=>a+(b-a)*k;
const ease=k=>{k=clamp(k,0,1);return k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2};
const noise=a=>(Math.sin(a)+Math.sin(1.71*a+1.3)+Math.sin(2.93*a+2.1))/3;
const loadImage=src=>new Promise((ok,fail)=>{const i=new Image();i.decoding='async';i.onload=()=>ok(i);i.onerror=()=>fail(Error('image '+src));i.src=src});
const rot=(p,pv,a)=>{const s=Math.sin(a),c=Math.cos(a),dx=p[0]-pv[0],dy=p[1]-pv[1];return[pv[0]+dx*c-dy*s,pv[1]+dx*s+dy*c]};
const reduceMQ=matchMedia('(prefers-reduced-motion: reduce)');

const WORDS={
 az:{arena:'ARENA',heroes:'QƏHRƏMAN',next:'NÖVBƏTİ MƏRHƏLƏ',allDone:'BÜTÜN MƏRHƏLƏLƏR KEÇİLDİ',chapter:'Fəsil',stage:'Mərhələ',lang:'Dil',modes:'Döyüş rejimləri',shop:'MAĞAZA'},
 en:{arena:'ARENA',heroes:'HEROES',next:'NEXT STAGE',allDone:'ALL STAGES CLEARED',chapter:'Chapter',stage:'Stage',lang:'Language',modes:'Battle modes',shop:'SHOP'},
 tr:{arena:'ARENA',heroes:'KAHRAMAN',next:'SONRAKİ BÖLÜM',allDone:'TÜM BÖLÜMLER TAMAM',chapter:'Bölüm',stage:'Aşama',lang:'Dil',modes:'Savaş modları',shop:'MAĞAZA'},
 ru:{arena:'АРЕНА',heroes:'ГЕРОИ',next:'СЛЕДУЮЩИЙ ЭТАП',allDone:'ВСЕ ЭТАПЫ ПРОЙДЕНЫ',chapter:'Глава',stage:'Этап',lang:'Язык',modes:'Режимы боя',shop:'МАГАЗИН'},
 pl:{arena:'ARENA',heroes:'POSTACIE',next:'NASTĘPNY ETAP',allDone:'WSZYSTKIE ETAPY',chapter:'Rozdział',stage:'Etap',lang:'Język',modes:'Tryby walki',shop:'SKLEP'}};

/* ------------------------------------------------------------------ icons (inline SVG) */
const ICON={
 wheel:'<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="mvg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".45" stop-color="#f2c45e"/><stop offset="1" stop-color="#9a5a17"/></linearGradient></defs><g fill="none" stroke="url(#mvg)" stroke-linecap="round"><circle cx="32" cy="32" r="17" stroke-width="5"/><circle cx="32" cy="32" r="6" stroke-width="4"/><g stroke-width="4.2"><path d="M32 2v18M32 44v18M2 32h18M44 32h18M10.8 10.8l12.7 12.7M40.5 40.5l12.7 12.7M53.2 10.8L40.5 23.5M23.5 40.5L10.8 53.2"/></g></g><g fill="url(#mvg)"><circle cx="32" cy="3.5" r="3.5"/><circle cx="32" cy="60.5" r="3.5"/><circle cx="3.5" cy="32" r="3.5"/><circle cx="60.5" cy="32" r="3.5"/><circle cx="11.8" cy="11.8" r="3.2"/><circle cx="52.2" cy="52.2" r="3.2"/><circle cx="52.2" cy="11.8" r="3.2"/><circle cx="11.8" cy="52.2" r="3.2"/></g></svg>',
 swords:'<svg viewBox="0 0 64 64" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round"><path d="M10 6l30 30M54 6L24 36" stroke="#e9eef2" stroke-width="5"/><path d="M10 6l30 30M54 6L24 36" stroke="#8d99a3" stroke-width="1.6"/><path d="M33 39l-7 7M31 41l12 12M31 25l8 8M25 39l14-14" stroke="#e7b44e" stroke-width="5"/><path d="M33 33l-12 12M21 41l-9 9M43 41l9 9" stroke="#e7b44e" stroke-width="5"/><circle cx="10" cy="52" r="4.5" fill="#f3cf6e"/><circle cx="54" cy="52" r="4.5" fill="#f3cf6e"/></g></svg>',
 helm:'<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="mvh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0bd"/><stop offset=".5" stop-color="#e5b14f"/><stop offset="1" stop-color="#8f5416"/></linearGradient></defs><path d="M32 4c-13 0-22 10-22 24v14l7 7v9h11V42h-8V30h24v12h-8v16h11v-9l7-7V28C54 14 45 4 32 4z" fill="url(#mvh)" stroke="#3a210b" stroke-width="2"/><path d="M32 4v22" stroke="#3a210b" stroke-width="2"/><path d="M28 2h8v8h-8z" fill="#c2402f"/></svg>',
 gear:'<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="mvs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0bd"/><stop offset=".5" stop-color="#e5b14f"/><stop offset="1" stop-color="#8f5416"/></linearGradient></defs><path fill="url(#mvs)" stroke="#3a210b" stroke-width="2" d="M36.6 4l1.6 7.2a22 22 0 015.6 3.2l7-2.3 4.6 8-5.4 4.9a22 22 0 010 6.4l5.4 4.9-4.6 8-7-2.3a22 22 0 01-5.6 3.2L36.6 60h-9.2l-1.6-7.2a22 22 0 01-5.6-3.2l-7 2.3-4.6-8 5.4-4.9a22 22 0 010-6.4l-5.4-4.9 4.6-8 7 2.3a22 22 0 015.6-3.2L27.4 4zM32 22a10 10 0 100 20 10 10 0 000-20z"/></svg>',
 chest:'<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="mvw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a6232"/><stop offset="1" stop-color="#4a2810"/></linearGradient><linearGradient id="mvb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0b0"/><stop offset=".5" stop-color="#e5b14f"/><stop offset="1" stop-color="#8f5416"/></linearGradient><radialGradient id="mvcg" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#fff6c0"/><stop offset="1" stop-color="#ffb02a" stop-opacity="0"/></radialGradient></defs><ellipse class="glow" cx="32" cy="30" rx="24" ry="14" fill="url(#mvcg)"/><g class="coins"><circle cx="24" cy="28" r="4.5" fill="#f5c542" stroke="#8a5010" stroke-width="1.4"/><circle cx="33" cy="25" r="4.5" fill="#ffd760" stroke="#8a5010" stroke-width="1.4"/><circle cx="41" cy="28.5" r="4.5" fill="#f5c542" stroke="#8a5010" stroke-width="1.4"/></g><rect x="9" y="31" width="46" height="24" rx="3" fill="url(#mvw)" stroke="#2a1406" stroke-width="2.2"/><path d="M9 39h46" stroke="#2a1406" stroke-width="1.4" opacity=".6"/><rect x="14" y="31" width="5" height="24" fill="url(#mvb)" stroke="#3a210b" stroke-width="1.2"/><rect x="45" y="31" width="5" height="24" fill="url(#mvb)" stroke="#3a210b" stroke-width="1.2"/><g class="lid"><path d="M8 32c0-12 10-17 24-17s24 5 24 17z" fill="url(#mvw)" stroke="#2a1406" stroke-width="2.2"/><path d="M14 31.5c0-9 4-13 5-14M45 31.5c0-9-4-13-5-14" stroke="url(#mvb)" stroke-width="4.4" fill="none"/></g><rect x="27" y="33" width="10" height="11" rx="2" fill="url(#mvb)" stroke="#3a210b" stroke-width="1.4"/><circle cx="32" cy="38" r="1.6" fill="#3a210b"/><path class="spark" d="M50 12l1.4 4 4 1.4-4 1.4-1.4 4-1.4-4-4-1.4 4-1.4z" fill="#fff8d8"/></svg>',
 globe:'<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="#f3cf6e" stroke-width="3.4"><circle cx="32" cy="32" r="24"/><ellipse cx="32" cy="32" rx="10.5" ry="24"/><path d="M8 32h48M12 19h40M12 45h40"/></g></svg>',
 soundOn:'<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 24h10l14-12v40L20 40H10z" fill="#f3cf6e" stroke="#3a210b" stroke-width="2" stroke-linejoin="round"/><path d="M42 22c4 5 4 15 0 20M48 16c8 9 8 23 0 32" fill="none" stroke="#f3cf6e" stroke-width="4" stroke-linecap="round"/></svg>',
 soundOff:'<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 24h10l14-12v40L20 40H10z" fill="#c9b48a" stroke="#3a210b" stroke-width="2" stroke-linejoin="round"/><path d="M42 24l14 16M56 24L42 40" stroke="#e0705a" stroke-width="4.5" stroke-linecap="round"/></svg>',
 cloth:'<svg viewBox="0 0 90 120" aria-hidden="true"><defs><linearGradient id="mvc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e2453a"/><stop offset=".55" stop-color="#a51e22"/><stop offset="1" stop-color="#5c0d12"/></linearGradient></defs><path d="M6 10C26 2 52 4 84 12c-2 24 2 52-6 78l-9-8-7 14-8-11-9 12-6-14c6-20 2-44-8-62C20 14 12 14 6 10z" fill="url(#mvc)"/><path d="M14 13c18-4 38-3 64 4" fill="none" stroke="#ff8a6a" stroke-opacity=".5" stroke-width="2"/><path d="M46 24c6 20 8 42 2 66" fill="none" stroke="#3d070b" stroke-opacity=".45" stroke-width="3"/></svg>'};

/* ------------------------------------------------------------------ styles */
const CSS=`
#fighter-ui .menu-screen.mv-on{background:#0b1622!important;overflow:hidden;--u:7px}
#fighter-ui .menu-screen.mv-on>.menu-water,#fighter-ui .menu-screen.mv-on>.menu-glow,#fighter-ui .menu-screen.mv-on>.menu-motes,#fighter-ui .menu-screen.mv-on>.menu-cast,#fighter-ui .menu-screen.mv-on>.menu-backdrop,#fighter-ui .menu-screen.mv-on>.menu-fog,#fighter-ui .menu-screen.mv-on .menu-grid>div:first-child,#fighter-ui .menu-screen.mv-on .open-credits,#fighter-ui .menu-screen.mv-on .menu-head .brand{display:none!important}
#fighter-ui .menu-screen.mv-on .menu-grid{position:absolute!important;inset:0!important;width:auto!important;max-width:none!important;margin:0!important;display:block!important;z-index:6!important;pointer-events:none}
#fighter-ui .menu-screen.mv-on .menu-grid .actions,#fighter-ui .menu-screen.mv-on .menu-grid .actions>.row{position:static!important;display:block!important;height:auto!important;margin:0!important;transform:none!important;animation:none!important;filter:none!important}
#fighter-ui .menu-screen.mv-on .menu-head{position:absolute!important;inset:0!important;display:block!important;z-index:7!important;pointer-events:none}
#fighter-ui .menu-screen.mv-on .menu-tools{position:static!important;display:block!important;margin:0!important}
#fighter-ui .menu-screen.mv-on .mv-hit{position:absolute!important;margin:0!important;padding:0!important;min-height:0!important;max-width:none!important;background:transparent!important;border:0!important;border-radius:calc(var(--u)*1)!important;box-shadow:none!important;color:transparent!important;text-shadow:none!important;font-size:1px!important;overflow:hidden!important;opacity:1;pointer-events:auto;cursor:pointer;animation:none!important;transform:none!important;filter:none!important;-webkit-tap-highlight-color:transparent;outline:none}
#fighter-ui .menu-screen.mv-on.mv-arena-open .mv-hit:not(.mv-arena-btn){pointer-events:none!important}
#fighter-ui .menu-screen.mv-on select.mv-hit{opacity:0!important;appearance:none}
#fighter-ui .menu-screen.mv-on .mv-hit:after,#fighter-ui .menu-screen.mv-on .mv-hit:before{display:none!important}
#fighter-ui .menu-screen.mv-on .bottom-copy{position:absolute!important;left:calc(var(--u)*1.8 + var(--sl,0px))!important;bottom:calc(var(--u)*.9)!important;font-size:calc(var(--u)*1.15)!important;letter-spacing:.12em;color:#e9d7b4cc!important;z-index:8;text-shadow:0 1px 2px #000;pointer-events:none}
.mv-stage{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;contain:strict}
.mv-plate{position:absolute;left:0;top:0;background-repeat:no-repeat;will-change:transform}
.mv-fx,.mv-mari,.mv-mari-fx{position:absolute;left:0;top:0;display:block}
.mv-mari{pointer-events:auto;cursor:pointer;-webkit-tap-highlight-color:transparent}
.mv-mari-fx{pointer-events:none}
.mv-shadow{position:absolute;border-radius:50%;background:radial-gradient(ellipse at 50% 50%,#000a 0%,#0006 45%,transparent 72%)}
.mv-grade{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 75% 70% at 46% 42%,transparent 52%,#0b0412a0 100%),linear-gradient(0deg,#0d0703cc 0%,#0d070366 16%,transparent 34%),linear-gradient(180deg,#0b061266 0%,transparent 16%)}
.mv-ui{position:absolute;inset:0;z-index:5;pointer-events:none;font-family:"Trebuchet MS","Segoe UI",Roboto,"Noto Sans",Arial,sans-serif;color:#fff3d6}
.mv-ui>*{position:absolute}
.mv-display{font-family:Georgia,"Noto Serif","Times New Roman",serif;font-weight:900}
.mv-goldtext{background:linear-gradient(180deg,#fffbe6 0%,#ffe596 30%,#f1b44a 58%,#b56a1d 82%,#e8a948 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 calc(var(--u)*.16) 0 #2c1404) drop-shadow(0 calc(var(--u)*.35) calc(var(--u)*.5) #000c)}
.mv-logo{left:0;top:0;transform-origin:20% 0}
.mv-logo img{display:block;width:100%;height:auto;filter:drop-shadow(0 calc(var(--u)*.6) calc(var(--u)*.8) #000b)}
.mv-logo i{position:absolute;inset:0;-webkit-mask:var(--logo) center/100% 100% no-repeat;mask:var(--logo) center/100% 100% no-repeat;background:linear-gradient(105deg,transparent 40%,#fff8d8cc 50%,transparent 60%) no-repeat;background-size:250% 100%;background-position:150% 0;animation:mv-logo-shine 7s 1.4s ease-in-out infinite;mix-blend-mode:screen}
@keyframes mv-logo-shine{0%{background-position:150% 0}28%,100%{background-position:-60% 0}}
.mv-chip{display:flex;align-items:center;gap:calc(var(--u)*1);padding:calc(var(--u)*.55);padding-right:calc(var(--u)*1.4);border-radius:calc(var(--u)*1.1);background:linear-gradient(180deg,#2a1a0ff0,#140b05f0);box-shadow:inset 0 0 0 calc(var(--u)*.2) #d4a24c,inset 0 0 0 calc(var(--u)*.38) #3a220d,0 calc(var(--u)*.5) calc(var(--u)*1.2) #000b;transition:transform .12s,filter .15s}
.mv-chip .pt{flex:none;width:calc(var(--u)*5.2);height:calc(var(--u)*5.2);border-radius:calc(var(--u)*.8);background:#3a2410 center 22%/cover no-repeat;box-shadow:inset 0 0 0 calc(var(--u)*.22) #f0c868,0 0 0 calc(var(--u)*.12) #2a1606}
.mv-chip .tx{min-width:0;flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.3)}
.mv-chip b{font-size:calc(var(--u)*2.15);line-height:1.05;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mv-chip small{font-size:calc(var(--u)*1.25);color:#f1dcae;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.03em}
.mv-chip .bar{height:calc(var(--u)*.75);border-radius:99px;background:#0a0603;box-shadow:inset 0 0 0 1px #6b4a1f;overflow:hidden}
.mv-chip .bar i{display:block;height:100%;width:0;border-radius:99px;background:linear-gradient(180deg,#ffe28a,#e89a2a 60%,#a45d14);box-shadow:0 0 calc(var(--u)*.6) #ffb84a;transition:width .6s}
.mv-gold{display:flex;align-items:center;gap:calc(var(--u)*.9);padding:0 calc(var(--u)*1.8) 0 calc(var(--u)*.5);border-radius:99px;background:linear-gradient(180deg,#24160cf2,#0f0904f2);box-shadow:inset 0 0 0 calc(var(--u)*.2) #c99645,0 calc(var(--u)*.4) calc(var(--u)*1) #000a}
.mv-gold .coin{flex:none;width:calc(var(--u)*3.3);height:calc(var(--u)*3.3);border-radius:50%;background:radial-gradient(circle at 36% 30%,#fffbe0 0 8%,#ffd65a 22%,#e79d22 58%,#9a5810 100%);box-shadow:inset 0 0 0 calc(var(--u)*.22) #ffe79a,inset 0 0 0 calc(var(--u)*.5) #c27a1b,0 0 calc(var(--u)*.8) #ffb43f88;position:relative}
.mv-gold .coin:after{content:"";position:absolute;inset:28%;border-radius:50%;box-shadow:inset 0 0 0 calc(var(--u)*.18) #a7631499}
.mv-gold span{font-size:calc(var(--u)*2.3);font-weight:800;letter-spacing:.04em;font-variant-numeric:tabular-nums;color:#fff7e2;text-shadow:0 2px 2px #000}
.mv-tool{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.25);transition:transform .12s,filter .15s}
.mv-tool .ic{width:calc(var(--u)*4.6);height:calc(var(--u)*4.6);border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 50% 35%,#4a2d15,#1d1108 70%);box-shadow:inset 0 0 0 calc(var(--u)*.22) #d6a54e,inset 0 0 0 calc(var(--u)*.42) #2a170a,0 calc(var(--u)*.35) calc(var(--u)*.9) #000b;position:relative}
.mv-tool .ic svg{width:62%;height:62%}
.mv-tool .ic em{position:absolute;right:-6%;bottom:-6%;font-style:normal;font-weight:800;font-size:calc(var(--u)*1.05);padding:calc(var(--u)*.1) calc(var(--u)*.35);border-radius:calc(var(--u)*.5);background:#b3262a;color:#fff;box-shadow:0 0 0 calc(var(--u)*.14) #2a1006}
.mv-tool span{font-size:calc(var(--u)*1.38);font-weight:800;color:#fff;letter-spacing:.02em;text-shadow:0 1px 0 #000,0 0 3px #000,0 0 6px #000;white-space:nowrap}
.mv-card{border-radius:calc(var(--u)*1.1);padding:calc(var(--u)*.38);background:linear-gradient(160deg,#fff0b5,#d9a043 35%,#8f5717 70%,#f0c36a);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) #000c;transition:transform .14s,filter .15s}
.mv-card .in{position:relative;width:100%;height:100%;border-radius:calc(var(--u)*.8);overflow:hidden;background:#123 center/cover no-repeat;box-shadow:inset 0 0 0 calc(var(--u)*.16) #3b230c}
.mv-card .in:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,#0b0604e6 92%)}
.mv-card .in:after{content:"";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(100deg,transparent,#fff6d655,transparent);transform:skewX(-16deg);animation:mv-card-shine 6s 2.2s ease-in-out infinite}
@keyframes mv-card-shine{0%{left:-40%}30%,100%{left:130%}}
.mv-card .tt{position:absolute;left:calc(var(--u)*1.2);right:calc(var(--u)*3.4);bottom:calc(var(--u)*.9);display:flex;flex-direction:column;gap:calc(var(--u)*.15)}
.mv-card .tt b{font-size:calc(var(--u)*1.85);line-height:1.15;letter-spacing:.03em;white-space:nowrap;overflow:hidden}
.mv-card .tt small{font-size:calc(var(--u)*1.35);color:#fff1d2;text-shadow:0 1px 2px #000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mv-card .chev{position:absolute;right:calc(var(--u)*.8);bottom:calc(var(--u)*1.1);width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);animation:mv-nudge 1.6s ease-in-out infinite}
.mv-card .chev:before{content:"";position:absolute;inset:22%;border:solid #ffe08a;border-width:0 calc(var(--u)*.45) calc(var(--u)*.45) 0;transform:rotate(-45deg);filter:drop-shadow(0 1px 1px #000)}
@keyframes mv-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(calc(var(--u)*.45))}}
.mv-plank{--pt:calc(var(--u)*3);filter:drop-shadow(0 calc(var(--u)*.7) calc(var(--u)*.9) #000d);transition:transform .12s cubic-bezier(.3,1.6,.5,1),filter .15s}
.mv-plank .fr,.mv-plank .wd{position:absolute;clip-path:polygon(var(--pt) 0,calc(100% - var(--pt)) 0,100% 50%,calc(100% - var(--pt)) 100%,var(--pt) 100%,0 50%)}
.mv-plank .fr{inset:0;background:linear-gradient(180deg,#fff4c2 0%,#f0c45f 22%,#b9761f 55%,#7a4310 78%,#e8b35a 100%)}
.mv-plank .wd{inset:calc(var(--u)*.42);--pt:calc(var(--u)*2.72);background:radial-gradient(ellipse 60% 90% at 50% 0%,#ffcf7a26,transparent 70%),repeating-linear-gradient(90deg,#0000001c 0 2px,transparent 2px 9px),repeating-linear-gradient(90deg,#ffd9a00d 0 1px,transparent 1px 17px),linear-gradient(180deg,#6b4220 0%,#4c2c13 42%,#331c0b 100%);box-shadow:inset 0 0 calc(var(--u)*1.2) #000a}
.mv-plank .wd:after{content:"";position:absolute;inset:calc(var(--u)*.45);clip-path:inherit;box-shadow:inset 0 0 0 calc(var(--u)*.12) #f3c96a55}
.mv-plank .ct{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.6);padding:0 calc(var(--u)*4)}
.mv-plank .wheel{flex:none;width:calc(var(--u)*6.8);height:calc(var(--u)*6.8);animation:mv-spin 16s linear infinite;filter:drop-shadow(0 calc(var(--u)*.25) calc(var(--u)*.2) #000c)}
.mv-plank .wheel svg{width:100%;height:100%;display:block}
.mv-plank .lb{font-size:calc(var(--u)*4.6);letter-spacing:.06em;line-height:1.15;white-space:nowrap;min-width:0;overflow:hidden}
.mv-plank .arr{flex:none;width:calc(var(--u)*3);height:calc(var(--u)*3);position:relative;animation:mv-nudge 1.4s ease-in-out infinite}
.mv-plank .arr:before{content:"";position:absolute;inset:18%;border:solid #ffe08a;border-width:0 calc(var(--u)*.7) calc(var(--u)*.7) 0;transform:rotate(-45deg);filter:drop-shadow(0 calc(var(--u)*.2) 0 #2c1404)}
.mv-plank .stud{position:absolute;top:50%;width:calc(var(--u)*1.1);height:calc(var(--u)*1.1);margin-top:calc(var(--u)*-.55);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff7d0,#e2a83f 50%,#7c4510);box-shadow:0 1px 1px #000a}
.mv-plank .stud.l{left:calc(var(--u)*2.2)}.mv-plank .stud.r{right:calc(var(--u)*2.2)}
.mv-plank .shine{position:absolute;inset:calc(var(--u)*.42);clip-path:polygon(var(--pt) 0,calc(100% - var(--pt)) 0,100% 50%,calc(100% - var(--pt)) 100%,var(--pt) 100%,0 50%);overflow:hidden;--pt:calc(var(--u)*2.72)}
.mv-plank .shine:after{content:"";position:absolute;top:-20%;bottom:-20%;left:-30%;width:22%;background:linear-gradient(100deg,transparent,#fff3c855,transparent);transform:skewX(-20deg);animation:mv-plank-shine 5.2s 1s ease-in-out infinite}
@keyframes mv-plank-shine{0%{left:-30%}32%,100%{left:125%}}
.mv-plank .glow{position:absolute;inset:-6% -2%;border-radius:40%;background:radial-gradient(ellipse at 50% 50%,#ffbf4a55,transparent 70%);animation:mv-glow 2.6s ease-in-out infinite;pointer-events:none}
@keyframes mv-glow{0%,100%{opacity:.35}50%{opacity:.9}}
.mv-plank .cloth{position:absolute;right:calc(var(--u)*-1.6);top:calc(var(--u)*-2.4);width:calc(var(--u)*8);height:calc(var(--u)*10.5);transform-origin:20% 8%;animation:mv-cloth 3.2s ease-in-out infinite;filter:drop-shadow(0 calc(var(--u)*.3) calc(var(--u)*.4) #000b)}
.mv-plank .cloth svg{width:100%;height:100%;display:block}
@keyframes mv-cloth{0%,100%{transform:rotate(0) skewY(0) scaleX(1)}35%{transform:rotate(1.6deg) skewY(2.5deg) scaleX(.97)}70%{transform:rotate(-1.2deg) skewY(-1.5deg) scaleX(1.02)}}
@keyframes mv-spin{to{transform:rotate(360deg)}}
.mv-nav{--pt:calc(var(--u)*.9);filter:drop-shadow(0 calc(var(--u)*.5) calc(var(--u)*.7) #000d);transition:transform .12s cubic-bezier(.3,1.6,.5,1),filter .15s}
.mv-nav .fr,.mv-nav .wd{position:absolute;clip-path:polygon(var(--pt) 0,calc(100% - var(--pt)) 0,100% var(--pt),100% calc(100% - var(--pt)),calc(100% - var(--pt)) 100%,var(--pt) 100%,0 calc(100% - var(--pt)),0 var(--pt))}
.mv-nav .fr{inset:0;background:linear-gradient(180deg,#ffeeb2 0%,#d9a043 30%,#8a5016 70%,#d8a24b 100%)}
.mv-nav .wd{inset:calc(var(--u)*.32);--pt:calc(var(--u)*.7);background:repeating-linear-gradient(90deg,#0000001a 0 2px,transparent 2px 8px),linear-gradient(180deg,#5a361a 0%,#3d230f 50%,#28160a 100%);box-shadow:inset 0 0 calc(var(--u)*.9) #000b}
.mv-nav .ct{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*.8);padding:0 calc(var(--u)*1.1)}
.mv-nav .ic{flex:none;width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);filter:drop-shadow(0 calc(var(--u)*.2) calc(var(--u)*.15) #000)}
.mv-nav .ic svg{width:100%;height:100%;display:block}
.mv-nav .lb{font-size:calc(var(--u)*2.05);letter-spacing:.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.mv-shop .shine{position:absolute;inset:calc(var(--u)*.32);overflow:hidden;clip-path:inset(0 round calc(var(--u)*.6))}
.mv-shop .shine:after{content:"";position:absolute;top:-20%;bottom:-20%;left:-30%;width:26%;background:linear-gradient(100deg,transparent,#fff3c866,transparent);transform:skewX(-20deg);animation:mv-plank-shine 4.6s 2.2s ease-in-out infinite}
.mv-shop .ic{width:calc(var(--u)*4.4);height:calc(var(--u)*4.4)}
.mv-shop .ic .lid{transform-origin:50% 60%;animation:mv-lid 3.2s ease-in-out infinite}
.mv-shop .ic .coins,.mv-shop .ic .glow{animation:mv-coins 3.2s ease-in-out infinite}
.mv-shop .ic .spark{transform-origin:50px 17px;animation:mv-spark 3.2s ease-in-out infinite}
@keyframes mv-lid{0%,55%,100%{transform:none}65%,85%{transform:translateY(-4px) rotate(-7deg)}}
@keyframes mv-coins{0%,55%,100%{opacity:0;transform:translateY(5px)}68%,85%{opacity:1;transform:none}}
@keyframes mv-spark{0%,60%,100%{opacity:0;transform:scale(.3)}72%{opacity:1;transform:scale(1.2) rotate(30deg)}84%{opacity:0;transform:scale(.6)}}
.mv-nav.on .fr{background:linear-gradient(180deg,#fff7d0,#f5c65d 40%,#b4721f)}
.mv-nav.on .wd{background:linear-gradient(180deg,#7a4a22,#4a2a12)}
.mv-press{transform:translateY(calc(var(--u)*.35)) scale(.97)!important;filter:brightness(1.15) drop-shadow(0 calc(var(--u)*.2) calc(var(--u)*.3) #000d)!important}
.mv-hover{filter:brightness(1.1) drop-shadow(0 calc(var(--u)*.5) calc(var(--u)*.9) #000d)}
.mv-focus{outline:calc(var(--u)*.3) solid #fff2b8;outline-offset:calc(var(--u)*.3);border-radius:calc(var(--u)*1)}
.mv-drawer{z-index:2;border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.38);background:linear-gradient(160deg,#fff0b5,#d9a043 35%,#8f5717 70%,#f0c36a);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) #000e;transform-origin:50% 100%;transition:opacity .18s,transform .22s cubic-bezier(.2,1.3,.4,1),visibility 0s .22s;opacity:0;visibility:hidden;transform:translateY(calc(var(--u)*1.2)) scale(.94)}
.mv-drawer .in{width:100%;height:100%;border-radius:calc(var(--u)*.9);background:repeating-linear-gradient(90deg,#0000001a 0 2px,transparent 2px 9px),linear-gradient(180deg,#4a2c14,#24140a);box-shadow:inset 0 0 calc(var(--u)*1.2) #000c;padding:calc(var(--u)*1) calc(var(--u)*1.1)}
.mv-drawer h3{margin:0;font-size:calc(var(--u)*1.55);letter-spacing:.16em;text-align:center}
.menu-screen.mv-arena-open .mv-drawer{opacity:1;visibility:visible;transform:none;transition:opacity .18s,transform .22s cubic-bezier(.2,1.3,.4,1)}
#fighter-ui .menu-screen.mv-on .mv-mode{position:absolute!important;margin:0!important;min-height:0!important;max-width:none!important;padding:0 calc(var(--u)*1)!important;border-radius:calc(var(--u)*.9)!important;font-family:"Trebuchet MS","Segoe UI",Roboto,Arial,sans-serif!important;font-size:calc(var(--u)*1.85*var(--fs,1))!important;font-weight:800!important;letter-spacing:.04em!important;text-transform:uppercase;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:9;opacity:0;visibility:hidden;transform:translateY(calc(var(--u)*1));transition:opacity .18s,transform .22s,visibility 0s .22s,filter .15s;animation:none!important;flex:none!important;line-height:1!important;cursor:pointer}
#fighter-ui .menu-screen.mv-on.mv-arena-open .mv-mode{opacity:1;visibility:visible;transform:none;pointer-events:auto;transition:opacity .18s .04s,transform .22s .04s,filter .15s}
#fighter-ui .menu-screen.mv-on .mv-mode:active{transform:translateY(calc(var(--u)*.3)) scale(.97)!important;filter:brightness(1.15)}
#fighter-ui .menu-screen.mv-on .mv-mode:focus-visible{outline:calc(var(--u)*.25) solid #fff2b8;outline-offset:2px}
#fighter-ui .menu-screen.mv-on .mv-mode.play-bot{background:linear-gradient(180deg,#ffeaa6,#efb247 50%,#b5701e)!important;color:#2a1706!important;border:calc(var(--u)*.2) solid #6b3e10!important;box-shadow:inset 0 calc(var(--u)*.2) 0 #fff5cf88,0 calc(var(--u)*.35) 0 #3a210b!important;text-shadow:0 1px 0 #fff3!important}
#fighter-ui .menu-screen.mv-on .mv-mode.play-friend{background:linear-gradient(180deg,#58d6d2,#178a96 55%,#0e5866)!important;color:#f2ffff!important;border:calc(var(--u)*.2) solid #073b44!important;box-shadow:inset 0 calc(var(--u)*.2) 0 #c8fffd66,0 calc(var(--u)*.35) 0 #062a30!important;text-shadow:0 2px 1px #003843!important}
#fighter-ui .menu-screen.mv-on .mv-mode.menu-training{background:linear-gradient(180deg,#5b3a1d,#36210f)!important;color:#ffe3a0!important;border:calc(var(--u)*.2) solid #c9954a!important;box-shadow:0 calc(var(--u)*.35) 0 #1c0f05!important;text-shadow:0 1px 1px #000!important}
.mv-flash{position:absolute;inset:0;z-index:20;pointer-events:none;background:radial-gradient(ellipse at 50% 60%,#ffd27a66,#0000 60%);opacity:0}
.mv-flash.go{animation:mv-flash .45s ease-out}
@keyframes mv-flash{0%{opacity:0}25%{opacity:1}100%{opacity:0}}
.menu-screen.mv-enter .mv-logo{animation:mv-in-top .7s cubic-bezier(.2,1.2,.3,1) both}
.menu-screen.mv-enter .mv-chip,.menu-screen.mv-enter .mv-tool,.menu-screen.mv-enter .mv-gold{animation:mv-in-fade .6s .15s ease-out both}
.menu-screen.mv-enter .mv-card{animation:mv-in-right .6s .2s cubic-bezier(.2,1,.3,1) both}
.menu-screen.mv-enter .mv-shop{animation:mv-in-right .6s .28s cubic-bezier(.2,1,.3,1) both}
.menu-screen.mv-enter .mv-plank{animation:mv-in-up .6s .25s cubic-bezier(.2,1.2,.3,1) both}
.menu-screen.mv-enter .mv-nav{animation:mv-in-up .55s cubic-bezier(.2,1.2,.3,1) both}
.menu-screen.mv-enter .mv-nav.n1{animation-delay:.32s}.menu-screen.mv-enter .mv-nav.n2{animation-delay:.38s}.menu-screen.mv-enter .mv-nav.n3{animation-delay:.44s}
.menu-screen.mv-enter .mv-stage{animation:mv-in-fade .5s ease-out both}
@keyframes mv-in-top{from{opacity:0;transform:translateY(calc(var(--u)*-3)) scale(.92)}}
@keyframes mv-in-right{from{opacity:0;transform:translateX(calc(var(--u)*4))}}
@keyframes mv-in-up{from{opacity:0;transform:translateY(calc(var(--u)*3))}}
@keyframes mv-in-fade{from{opacity:0}}
.menu-screen.mv-paused .mv-ui *,.menu-screen.mv-paused .mv-ui *:before,.menu-screen.mv-paused .mv-ui *:after,.menu-screen[hidden] .mv-ui *{animation-play-state:paused!important}
@media (prefers-reduced-motion:reduce){.mv-ui *,.mv-ui *:before,.mv-ui *:after,.mv-stage{animation:none!important}}
`;

/* ------------------------------------------------------------------ Mari rig */
const PE=[388,310],SE=[166,424],MUZZLE=[557,240],TIP=[4,628],FEET=[290,712];
const REST_P=30*DEG;
const BOX={x0:-70,y0:-90,x1:760,y1:745};          // card-space canvas bounds (sword arc, smoke, flash)
const ZONES={
 hairL:[[60,210],[120,172],[166,188],[172,262],[160,332],[142,372],[128,420],[96,440],[50,402],[40,352]],
 band:[[86,190],[150,174],[162,214],[142,292],[100,302],[78,250]],
 hairR:[[408,338],[446,330],[458,380],[452,442],[424,448],[404,392]],
 sash:[[392,440],[470,452],[508,520],[504,604],[440,604],[404,544],[384,482]],
 chest:[[246,334],[352,322],[372,398],[322,442],[252,442],[230,384]]};
function inside(p,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const [xi,yi]=poly[i],[xj,yj]=poly[j];if(((yi>p[1])!==(yj>p[1]))&&(p[0]<(xj-xi)*(p[1]-yi)/(yj-yi)+xi))c=!c}return c}
function dseg(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],t=clamp(((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy),0,1);return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy)}
function weight(p,poly,f){if(inside(p,poly))return 1;let d=1e9;for(let i=0;i<poly.length;i++)d=Math.min(d,dseg(p,poly[i],poly[(i+1)%poly.length]));return Math.max(0,1-d/f)}

class MariRig{
 constructor(meta,img){
  this.meta=meta;this.img=img;const CW=meta.w,CH=meta.h,CELL=18;
  this.CW=CW;this.CH=CH;
  const cols=this.cols=Math.ceil(CW/CELL),rows=this.rows=Math.ceil(CH/CELL);
  const V=this.V=[];
  for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++){const u=Math.min(i*CELL,CW),v=Math.min(j*CELL,CH),p=[u,v];
   const w={};let any=false;for(const k in ZONES){const f=k==='chest'?30:k==='band'?20:k==='hairR'?18:k==='sash'?22:26;w[k]=weight(p,ZONES[k],f);if(w[k]>0)any=true}
   V.push({u,v,x:u,y:v,w,dyn:any})}
  const idx=[];this.dynCells=[];
  for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const a=j*(cols+1)+i,b=a+1,c=a+cols+2,d=a+cols+1;idx.push(a,b,c,a,c,d);if(V[a].dyn||V[b].dyn||V[c].dyn||V[d].dyn)this.dynCells.push([a,b,c,d])}
  this.indices=new Uint16Array(idx);
  this.S={wind:1,breath:1,gust:0,pA:REST_P,pX:0,sA:0,lean:0};
  this.act=null;this.next=2.4;this.last='sword';this.clock=0;this.flash=0;this.smoke=[];this.sparks=[];this.trail=[];this.actions=0;
  this.sound=null;
 }
 pose(t){
  const S=this.S,W=S.wind*(1+S.gust);
  for(const p of this.V){let x=p.u,y=p.v;const w=p.w;
   if(w.hairL){const h=Math.pow(clamp((p.v-190)/270,0,1),1.25);x+=w.hairL*h*7*W*Math.sin(t*1.7-p.v*.019);y+=w.hairL*h*1.6*W*Math.cos(t*1.5-p.v*.02)}
   if(w.band){const h=clamp((p.v-182)/120,0,1);x+=w.band*h*6.5*W*Math.sin(t*2.3-p.v*.03+.6);y+=w.band*h*2*W*Math.cos(t*2.1-p.v*.03)}
   if(w.hairR){const h=clamp((p.v-330)/115,0,1);x+=w.hairR*h*4*W*Math.sin(t*1.9-p.v*.025+1.4)}
   if(w.sash){const dd=Math.hypot(p.u-392,p.v-448),h=clamp(dd/190,0,1);x+=w.sash*h*7.5*W*Math.sin(t*2.2-dd*.03);y+=w.sash*h*3.2*W*Math.cos(t*2.4-dd*.03)}
   if(w.chest){const b=Math.sin(t*TAU/3.2);y+=-w.chest*1.5*S.breath*b;x+=w.chest*.4*S.breath*b}
   p.x=x;p.y=y}
 }
 start(n){this.act={n,t0:this.clock};this.last=n;this.actions++}
 end(auto){this.act=null;this.next=this.clock+(auto?4.2+Math.random()*3:1e9)}
 step(dt,{auto=true,still=false}={}){
  this.clock+=dt;const S=this.S,c=this.clock;
  S.pA=still?0:REST_P;S.pX=0;S.sA=0;S.lean=still?0:.3*DEG*Math.sin(c*.55);S.gust=Math.max(0,S.gust-dt*.9);
  this.flash=Math.max(0,this.flash-dt);
  if(still)return;
  if(!this.act){if(auto&&c>this.next)this.start(this.last==='fire'?(Math.random()<.75?'sword':'fire'):(Math.random()<.75?'fire':'sword'));return}
  const k=c-this.act.t0;
  if(this.act.n==='fire'){
   const fire=this.act;
   if(k<.35){S.pA=lerp(REST_P,0,ease(k/.35));S.lean+=1.2*DEG*ease(k/.35)}
   else if(k<.6){S.pA=0;S.lean+=1.2*DEG}
   else if(k<.68){const e=(k-.6)/.08;S.pA=-12*DEG*e;S.pX=-7*e;S.lean+=1.2*DEG-1.6*DEG*e}
   else if(k<1.15){const e=ease((k-.68)/.47);S.pA=-12*DEG*(1-e);S.pX=-7*(1-e);S.lean+=lerp(-.4*DEG,.6*DEG,e)}
   else if(k<1.5){S.pA=0;S.lean+=.6*DEG}
   else if(k<2.1){const e=ease((k-1.5)/.6);S.pA=lerp(0,REST_P,e);S.lean+=.6*DEG*(1-e)}
   else this.end(auto);
   // A 100ms frame can cross the entire 80ms recoil window. Emit the event on
   // the first frame at/after 0.6s, independently of which pose branch it lands in.
   if(k>=.6&&!fire.shot){fire.shot=1;this.shoot()}
  }else{
   let a=0,l=0;
   if(k<.45){const e=ease(k/.45);a=lerp(0,105*DEG,e);l=-2*DEG*e}
   else if(k<.62){a=105*DEG+Math.sin((k-.45)*30)*1.2*DEG;l=-2*DEG}
   else if(k<.8){const e=Math.pow((k-.62)/.18,1.6);a=lerp(105*DEG,-22*DEG,e);l=lerp(-2*DEG,2.8*DEG,e);if(e>.6)S.gust=1.3;if(!this.act.swung){this.act.swung=1;this.sound?.('swing')}}
   else if(k<1.6){const e=ease((k-.8)/.8);a=lerp(-22*DEG,0,e);l=lerp(2.8*DEG,0,e)}
   else{this.end(auto)}
   S.sA=a;S.lean+=l;
   if(k>.55&&k<1){const tip=rot(TIP,SE,a);this.trail.push({x:tip[0],y:tip[1],life:.28})}
  }
 }
 shoot(){this.flash=.12;this.S.gust=.6;this.sound?.('shot');const m=rot(MUZZLE,PE,this.S.pA);m[0]+=this.S.pX;
  for(let i=0;i<14;i++)this.smoke.push({x:m[0]+10+Math.random()*18,y:m[1]-4+Math.random()*8,vx:16+Math.random()*30,vy:-22-Math.random()*26,r:10+Math.random()*10,life:1.8+Math.random()*.7,max:2.5});
  for(let i=0;i<16;i++){const an=(-28+Math.random()*56)*DEG,sp=300+Math.random()*260;this.sparks.push({x:m[0],y:m[1],vx:Math.cos(an)*sp,vy:Math.sin(an)*sp,life:.16+Math.random()*.14})}}
 /* final vertex position with the whole-body lean (around the feet) */
 leanPt(x,y){const a=this.S.lean;if(!a)return[x,y];return rot([x,y],FEET,a)}
 armQuad(name){const L=this.meta.layers[name];const piv=name==='pistol'?PE:SE,ang=name==='pistol'?this.S.pA:this.S.sA,dx=name==='pistol'?this.S.pX:0;
  const pts=[[L.x,L.y],[L.x+L.w,L.y],[L.x+L.w,L.y+L.h],[L.x,L.y+L.h]].map(p=>{const r=rot(p,piv,ang);return this.leanPt(r[0]+dx,r[1])});return pts}
}

/* WebGL renderer for the rig (one textured mesh + two quads); 2D fallback below. */
class MariGL{
 constructor(canvas){
  const gl=canvas.getContext('webgl',{premultipliedAlpha:true,alpha:true,antialias:true})||canvas.getContext('experimental-webgl');
  if(!gl)throw Error('no webgl');this.gl=gl;this.canvas=canvas;
  const vs='attribute vec2 p;attribute vec2 t;uniform vec2 o;uniform vec2 s;varying vec2 v;void main(){v=t;vec2 c=(p-o)*s;gl_Position=vec4(c.x*2.0-1.0,1.0-c.y*2.0,0.0,1.0);}';
  const fs='precision mediump float;uniform sampler2D x;varying vec2 v;void main(){gl_FragColor=texture2D(x,v);}';
  const sh=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
  const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw Error('link');
  this.pr=pr;this.aP=gl.getAttribLocation(pr,'p');this.aT=gl.getAttribLocation(pr,'t');this.uO=gl.getUniformLocation(pr,'o');this.uS=gl.getUniformLocation(pr,'s');
  this.pb=gl.createBuffer();this.tb=gl.createBuffer();this.ib=gl.createBuffer();this.qb=gl.createBuffer();this.qt=gl.createBuffer();
  gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
  this.tex={};this.lost=false;
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.lost=true},false);
 }
 texture(name,img,scale){
  const gl=this.gl;let src=img;
  if(scale<.98){const c=document.createElement('canvas');c.width=Math.max(2,Math.round(img.width*scale));c.height=Math.max(2,Math.round(img.height*scale));const x=c.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(img,0,0,c.width,c.height);src=c}
  const t=this.tex[name]||gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,src);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  this.tex[name]=t;
 }
 setup(rig){
  const gl=this.gl;this.rig=rig;const V=rig.V;
  this.pos=new Float32Array(V.length*2);const uv=new Float32Array(V.length*2);
  V.forEach((p,i)=>{uv[i*2]=p.u/rig.CW;uv[i*2+1]=p.v/rig.CH});
  gl.bindBuffer(gl.ARRAY_BUFFER,this.tb);gl.bufferData(gl.ARRAY_BUFFER,uv,gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER,this.pb);gl.bufferData(gl.ARRAY_BUFFER,this.pos,gl.DYNAMIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,rig.indices,gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER,this.qt);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER,this.qb);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(12),gl.DYNAMIC_DRAW);
 }
 draw(){
  const gl=this.gl,rig=this.rig,c=this.canvas;if(this.lost)return;
  gl.viewport(0,0,c.width,c.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.useProgram(this.pr);
  gl.uniform2f(this.uO,BOX.x0,BOX.y0);gl.uniform2f(this.uS,1/(BOX.x1-BOX.x0),1/(BOX.y1-BOX.y0));
  const P=this.pos;rig.V.forEach((p,i)=>{const q=rig.leanPt(p.x,p.y);P[i*2]=q[0];P[i*2+1]=q[1]});
  gl.bindBuffer(gl.ARRAY_BUFFER,this.pb);gl.bufferSubData(gl.ARRAY_BUFFER,0,P);gl.enableVertexAttribArray(this.aP);gl.vertexAttribPointer(this.aP,2,gl.FLOAT,false,0,0);
  gl.bindBuffer(gl.ARRAY_BUFFER,this.tb);gl.enableVertexAttribArray(this.aT);gl.vertexAttribPointer(this.aT,2,gl.FLOAT,false,0,0);
  gl.bindTexture(gl.TEXTURE_2D,this.tex.body);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ib);gl.drawElements(gl.TRIANGLES,rig.indices.length,gl.UNSIGNED_SHORT,0);
  for(const name of ['sword','pistol']){const q=rig.armQuad(name);
   const a=new Float32Array([q[0][0],q[0][1],q[1][0],q[1][1],q[2][0],q[2][1],q[0][0],q[0][1],q[2][0],q[2][1],q[3][0],q[3][1]]);
   gl.bindBuffer(gl.ARRAY_BUFFER,this.qb);gl.bufferSubData(gl.ARRAY_BUFFER,0,a);gl.vertexAttribPointer(this.aP,2,gl.FLOAT,false,0,0);
   gl.bindBuffer(gl.ARRAY_BUFFER,this.qt);gl.vertexAttribPointer(this.aT,2,gl.FLOAT,false,0,0);
   gl.bindTexture(gl.TEXTURE_2D,this.tex[name]);gl.drawArrays(gl.TRIANGLES,0,6)}
 }
}

/* Canvas 2D renderer: same rig, triangle-mapped body (used without WebGL and by tests). */
class Mari2D{
 constructor(canvas,imgs){this.canvas=canvas;this.imgs=imgs}
 setup(rig){
  this.rig=rig;const b=document.createElement('canvas');b.width=rig.CW;b.height=rig.CH;b.getContext('2d').drawImage(this.imgs.body,0,0);this.body=b;
  const st=document.createElement('canvas');st.width=rig.CW;st.height=rig.CH;const t=st.getContext('2d');t.drawImage(b,0,0);
  for(const q of rig.dynCells){const a=rig.V[q[0]],e=rig.V[q[2]];t.clearRect(a.u,a.v,e.u-a.u,e.v-a.v)}this.stat=st;
 }
 tri(c,a,b,d){
  const su1=b.u-a.u,sv1=b.v-a.v,su2=d.u-a.u,sv2=d.v-a.v,det=su1*sv2-su2*sv1;if(!det)return;
  const dx1=b.x-a.x,dy1=b.y-a.y,dx2=d.x-a.x,dy2=d.y-a.y;
  const A=(dx1*sv2-dx2*sv1)/det,B=(dy1*sv2-dy2*sv1)/det,C=(dx2*su1-dx1*su2)/det,D=(dy2*su1-dy1*su2)/det,E=a.x-A*a.u-C*a.v,F=a.y-B*a.u-D*a.v;
  const cx=(a.x+b.x+d.x)/3,cy=(a.y+b.y+d.y)/3,ex=p=>p.x+(p.x-cx)*.05+Math.sign(p.x-cx)*.45,ey=p=>p.y+(p.y-cy)*.05+Math.sign(p.y-cy)*.45;
  c.save();c.beginPath();c.moveTo(ex(a),ey(a));c.lineTo(ex(b),ey(b));c.lineTo(ex(d),ey(d));c.closePath();c.clip();c.transform(A,B,C,D,E,F);
  const x0=Math.min(a.u,b.u,d.u),y0=Math.min(a.v,b.v,d.v),x1=Math.max(a.u,b.u,d.u),y1=Math.max(a.v,b.v,d.v);
  c.drawImage(this.body,x0,y0,x1-x0,y1-y0,x0,y0,x1-x0,y1-y0);c.restore();
 }
 figure(c){
  const rig=this.rig,S=rig.S;
  c.save();if(S.lean){c.translate(FEET[0],FEET[1]);c.rotate(S.lean);c.translate(-FEET[0],-FEET[1])}
  c.drawImage(this.stat,0,0);for(const q of rig.dynCells){const [a,b,d,e]=q.map(k=>rig.V[k]);this.tri(c,a,b,d);this.tri(c,a,d,e)}
  for(const name of ['sword','pistol']){const L=rig.meta.layers[name],piv=name==='pistol'?PE:SE,ang=name==='pistol'?S.pA:S.sA,dx=name==='pistol'?S.pX:0;
   c.save();c.translate(piv[0]+dx,piv[1]);c.rotate(ang);c.translate(-piv[0],-piv[1]);c.drawImage(this.imgs[name],L.x,L.y);c.restore()}
  c.restore();
 }
 draw(k){const c=this.canvas.getContext('2d');c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,this.canvas.width,this.canvas.height);c.setTransform(k,0,0,k,-BOX.x0*k,-BOX.y0*k);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';this.figure(c)}
}

/* ------------------------------------------------------------------ the harbour */
class Harbour{
 constructor(layout,imgs){
  this.L=layout;this.imgs=imgs;this.PW=layout.plate.w;this.PH=layout.plate.h;
  const W=layout.water;this.wy=W.y;this.wh=this.PH-W.y;
  this.wc=document.createElement('canvas');this.wc.width=this.PW;this.wc.height=this.wh;this.wx=this.wc.getContext('2d');
  this.fc=document.createElement('canvas');this.fc.width=260;this.fc.height=200;this.fx=this.fc.getContext('2d');
  this.spr={};for(const s of layout.sprites)this.spr[s.name]=s;
  this.glow=Harbour.glowSprite(64,[255,196,104]);this.sunGlow=Harbour.glowSprite(128,[255,200,120]);this.mistSpr=Harbour.glowSprite(96,[255,226,196]);
  this.rays=Harbour.raysSprite(512);
  // sparkle points inside the sea mask
  const m=document.createElement('canvas');m.width=imgs.water.width;m.height=imgs.water.height;const mx=m.getContext('2d');mx.drawImage(imgs.water,0,0);
  let data=null;try{data=mx.getImageData(0,0,m.width,m.height).data}catch{}
  this.glints=[];let tries=0;const rnd=mulberry(5);
  while(this.glints.length<150&&tries<6000){tries++;const sun=rnd()<.55;const gx=sun?690+rnd()*120:rnd()*this.PW,gy=this.wy+(sun?rnd()*(this.wh*.55):rnd()*this.wh);
   if(data){const ix=Math.floor(gx/2),iy=Math.floor((gy-this.wy)/2);if(ix<0||iy<0||ix>=m.width||iy>=m.height||data[(iy*m.width+ix)*4+3]<200)continue}
   this.glints.push({x:gx,y:gy,p:rnd()*TAU,f:1.2+rnd()*2.6,s:sun?1.1+rnd()*1.4:.7+rnd(),sun})}
  this.gulls=[0,1,2,3].map(i=>this.newGull(rnd,i*3.5));this.rnd=rnd;
  this.embers=[];
  this.lights=(layout.lights||[]).map((l,i)=>({x:l[0],y:l[1],a:l[2],p:rnd()*TAU,f:.8+rnd()*1.8,big:l[2]>500}));
  this.lite=false;
 }
 static glowSprite(r,[R,G,B]){const c=document.createElement('canvas');c.width=c.height=r*2;const x=c.getContext('2d');const g=x.createRadialGradient(r,r,0,r,r,r);g.addColorStop(0,`rgba(${R},${G},${B},1)`);g.addColorStop(.25,`rgba(${R},${G},${B},.55)`);g.addColorStop(.6,`rgba(${R},${G},${B},.14)`);g.addColorStop(1,`rgba(${R},${G},${B},0)`);x.fillStyle=g;x.fillRect(0,0,r*2,r*2);return c}
 static raysSprite(n){const c=document.createElement('canvas');c.width=c.height=n;const x=c.getContext('2d');const r=n/2;x.translate(r,r);
  for(let i=0;i<14;i++){const a=i/14*TAU+(i%3)*.11,w=.035+(i%4)*.012;const g=x.createLinearGradient(0,0,Math.cos(a)*r,Math.sin(a)*r);g.addColorStop(0,'rgba(255,214,150,.55)');g.addColorStop(1,'rgba(255,214,150,0)');x.fillStyle=g;x.beginPath();x.moveTo(0,0);x.arc(0,0,r,a-w,a+w);x.closePath();x.fill()}
  return c}
 newGull(rnd,delay=0){const dir=rnd()<.5?-1:1;return{x:dir<0?this.PW+40:-40,y:40+rnd()*260,dir,v:38+rnd()*34,s:.75+rnd()*.7,ph:rnd()*TAU,fl:7+rnd()*3,glide:0,delay,dy:rnd()*TAU}}
 /* ---- per-frame drawing in plate coordinates ---- */
 draw(c,t,dt){
  const L=this.L,I=this.imgs;
  // sun glow + slow rays
  const [sx,sy,sr]=L.sun;c.globalCompositeOperation='lighter';
  c.globalAlpha=.20+.05*noise(t*.7);c.drawImage(this.sunGlow,sx-sr*5,sy-sr*5,sr*10,sr*10);
  c.save();c.translate(sx,sy);c.rotate(t*.012);c.globalAlpha=.11+.03*Math.sin(t*.4);c.drawImage(this.rays,-460,-460,920,920);c.restore();
  c.globalAlpha=1;c.globalCompositeOperation='source-over';
  // sea: horizontal ripple of the painted water, masked to the sea
  if(!this.lite||(this.frame=(this.frame||0)+1)%2===0)this.water(t);
  c.drawImage(this.wc,0,this.wy);
  // ships rocking
  this.ship(c,'shipMain',t,.55,1.5,.9,0);this.ship(c,'shipSun',t,.8,1.1,1.15,1.7);
  // flags
  this.flag(c,'roger',t,4.6,4.1,5.2,3);this.pole(c,'rogerPole');
  for(const [n,ph] of [['pennantA',0],['pennantB',1.2],['pennantC',2.1],['pennantT1',.7],['pennantT2',2.6],['pennantT3',1.9]])this.flag(c,n,t+ph,1.7,6.2,7,2);
  // sea glints
  c.globalCompositeOperation='lighter';
  for(const g of this.glints){const a=Math.pow(Math.max(0,Math.sin(t*g.f+g.p)),6);if(a<.04)continue;const s=g.s*(g.sun?2.4:1.6);
   c.fillStyle=g.sun?`rgba(255,226,150,${a*.9})`:`rgba(205,230,255,${a*.55})`;c.fillRect(g.x-s,g.y-.6,s*2,1.2);c.fillRect(g.x-.6,g.y-s*.6,1.2,s*1.2)}
  // lantern and window light
  for(const l of this.lights){const fl=.72+.28*noise(t*l.f*3+l.p);const r=l.big?28+Math.sqrt(l.a)*1.1:8+Math.sqrt(l.a)*1.6;c.globalAlpha=(l.big?.42:.3)*fl;c.drawImage(this.glow,l.x-r,l.y-r,r*2,r*2)}
  // embers rising from the big lanterns
  if(!this.lite){if(this.embers.length<26&&Math.random()<dt*7){const src=this.lights.filter(l=>l.big);if(src.length){const l=src[Math.floor(Math.random()*src.length)];this.embers.push({x:l.x+(Math.random()-.5)*14,y:l.y,vx:(Math.random()-.5)*8,vy:-10-Math.random()*16,life:2+Math.random()*2.5,max:4.5})}}
   for(let i=this.embers.length-1;i>=0;i--){const e=this.embers[i];e.life-=dt;if(e.life<=0){this.embers.splice(i,1);continue}e.x+=e.vx*dt+Math.sin(t*2+i)*.2;e.y+=e.vy*dt;c.globalAlpha=Math.min(1,e.life/e.max*1.4)*.9;c.drawImage(this.glow,e.x-3,e.y-3,6,6)}}
  c.globalAlpha=1;c.globalCompositeOperation='source-over';
  // mist over the horizon and the water
  c.globalCompositeOperation='screen';
  for(let i=0;i<3;i++){const y=[488,520,575][i],w=[900,700,1100][i],x=((t*[9,14,6][i]+i*500)%(this.PW+w))-w/2;c.globalAlpha=[.10,.08,.06][i];c.drawImage(this.mistSpr,x-w/2,y-26,w,52)}
  c.globalAlpha=1;c.globalCompositeOperation='source-over';
  // seagulls
  for(let i=0;i<this.gulls.length;i++){const g=this.gulls[i];if(g.delay>0){g.delay-=dt;continue}
   g.x+=g.dir*g.v*dt;g.dy+=dt*.6;g.y+=Math.sin(g.dy)*6*dt;g.glide-=dt;if(g.glide<-2.5+Math.sin(i+t)*.5)g.glide=1+Math.random()*1.8;
   if(g.x<-60||g.x>this.PW+60){this.gulls[i]=this.newGull(this.rnd,2+this.rnd()*6);continue}
   this.gull(c,g,t)}
 }
 water(t){
  const x=this.wx,img=this.imgs.plate,W=this.PW,H=this.wh,wy=this.wy;
  x.globalCompositeOperation='copy';
  const step=this.lite?6:3;
  for(let y=0;y<H;y+=step){const k=y/H,A=.5+3.2*k*k+1.2*k;const dx=A*Math.sin(t*1.25+y*.085)+.7*A*Math.sin(t*.8-y*.031+1.3);
   x.drawImage(img,0,wy+y,W,step,dx,y,W,step);x.globalCompositeOperation='source-over'}
  x.globalCompositeOperation='destination-in';x.drawImage(this.imgs.water,0,0,W,H);x.globalCompositeOperation='source-over';
 }
 ship(c,name,t,deg,bob,w,ph){const s=this.spr[name];if(!s)return;const [px,py]=s.pivot;const a=(deg*Math.sin(t*w+ph)+.25*deg*Math.sin(t*w*2.3+ph))*DEG,dy=bob*Math.sin(t*w+ph+.7);
  c.save();c.translate(px,py+dy);c.rotate(a);c.drawImage(this.imgs.atlas,s.ax,s.ay,s.w,s.h,s.x-px,s.y-py,s.w,s.h);c.restore()}
 pole(c,name){const s=this.spr[name];if(s)c.drawImage(this.imgs.atlas,s.ax,s.ay,s.w,s.h,s.x,s.y,s.w,s.h)}
 flag(c,name,t,amp,speed,waves,stripW){
  const s=this.spr[name];if(!s)return;const f=this.fx,pad=Math.ceil(amp)+2,pin=s.pivot?s.pivot[0]-s.x:0;
  if(this.fc.width<s.w+4||this.fc.height<s.h+pad*2){this.fc.width=Math.max(this.fc.width,s.w+4);this.fc.height=Math.max(this.fc.height,s.h+pad*2)}
  f.clearRect(0,0,s.w+4,s.h+pad*2);f.globalCompositeOperation='source-over';
  const step=this.lite?stripW*2:stripW;
  for(let x=0;x<s.w;x+=step){const rel=clamp((x-pin)/(s.w-pin),0,1),ph=t*speed-rel*waves;const dy=amp*Math.pow(rel,1.15)*Math.sin(ph);f.drawImage(this.imgs.atlas,s.ax+x,s.ay,step,s.h,x,pad+dy,step,s.h)}
  f.globalCompositeOperation='source-atop';
  for(let x=0;x<s.w;x+=step){const rel=clamp((x-pin)/(s.w-pin),0,1),sh=.22*rel*Math.cos(t*speed-rel*waves);f.fillStyle=sh>0?`rgba(255,226,190,${sh*.55})`:`rgba(0,0,0,${-sh})`;f.fillRect(x,0,step,s.h+pad*2)}
  f.globalCompositeOperation='source-over';
  c.drawImage(this.fc,0,0,s.w,s.h+pad*2,s.x,s.y-pad,s.w,s.h+pad*2);
 }
 gull(c,g,t){
  const s=17*g.s,fl=g.glide>0?.15:Math.sin(t*g.fl+g.ph);
  c.save();c.translate(g.x,g.y);c.scale(g.dir,1);
  c.lineCap='round';c.lineJoin='round';
  const wy=-s*.55*fl,tip=-s*(.25+.55*fl);
  c.strokeStyle='rgba(60,46,58,.9)';c.lineWidth=Math.max(1.4,s*.2);
  c.beginPath();c.moveTo(-s*1.25,tip);c.quadraticCurveTo(-s*.55,wy-s*.2,0,0);c.quadraticCurveTo(s*.55,wy-s*.2,s*1.25,tip);c.stroke();
  c.strokeStyle='rgba(255,244,232,.97)';c.lineWidth=Math.max(1,s*.15);
  c.beginPath();c.moveTo(-s*.95,tip*.85);c.quadraticCurveTo(-s*.45,wy-s*.15,0,0);c.quadraticCurveTo(s*.45,wy-s*.15,s*.95,tip*.85);c.stroke();
  c.fillStyle='rgba(255,236,224,.98)';c.beginPath();c.ellipse(s*.12,s*.05,s*.42,s*.16,0,0,TAU);c.fill();
  c.fillStyle='rgba(240,170,80,.95)';c.fillRect(s*.5,0,s*.2,s*.07);
  c.restore();
 }
}
function mulberry(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* ------------------------------------------------------------------ ambient audio (quiet; follows the game's effects volume) */
const AUD={ctx:null,buf:{},amb:null,next:0,
 vol(){try{if(localStorage.getItem('pf-sound')==='off')return 0}catch{}const s=window.PirateMusic?.sfx;return typeof s==='number'?s:1},
 ensure(){if(this.ctx)return this.ctx;const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;try{this.ctx=new C()}catch{return null}
  for(const [k,src] of [['shot','adventure/levels/assets/level-03/sfx-pistol.ogg'],['swing','adventure/levels/assets/level-03/sfx-swing2.ogg']])fetch(src).then(r=>r.ok?r.arrayBuffer():null).then(b=>b&&this.ctx.decodeAudioData(b)).then(d=>{if(d)this.buf[k]=d}).catch(()=>{});
  return this.ctx},
 play(k,gain){const c=this.ctx,b=this.buf[k];if(!c||!b||c.state!=='running')return;const v=this.vol()*gain;if(v<=0)return;const s=c.createBufferSource();s.buffer=b;const g=c.createGain();g.gain.value=v;s.connect(g).connect(c.destination);s.start()},
 ambient(on){const c=this.ctx;if(!c)return;
  if(!this.amb){const n=c.sampleRate*6,b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);let l=0;for(let i=0;i<n;i++){l=(l+.02*(Math.random()*2-1))/1.02;d[i]=l*3.2}
   const s=c.createBufferSource();s.buffer=b;s.loop=true;const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=520;const g=c.createGain();g.gain.value=0;
   const lfo=c.createOscillator();lfo.frequency.value=.13;const lg=c.createGain();lg.gain.value=.35;lfo.connect(lg);const swell=c.createGain();swell.gain.value=.65;lg.connect(swell.gain);
   s.connect(f).connect(swell).connect(g).connect(c.destination);s.start();lfo.start();this.amb=g}
  const target=on?.055*this.vol():0;this.amb.gain.setTargetAtTime(target,c.currentTime,.6);
  if(on&&c.currentTime>this.next){this.next=c.currentTime+9+Math.random()*12;if(this.vol()>0&&Math.random()<.8)this.gullCall()}},
 gullCall(){const c=this.ctx,t=c.currentTime+.05,v=this.vol()*.028;
  for(let i=0;i<2;i++){const o=c.createOscillator(),g=c.createGain(),f=c.createBiquadFilter();f.type='bandpass';f.frequency.value=1500;f.Q.value=2;o.type='sawtooth';
   const t0=t+i*.32;o.frequency.setValueAtTime(1500,t0);o.frequency.exponentialRampToValueAtTime(1050,t0+.22);g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(v,t0+.03);g.gain.exponentialRampToValueAtTime(.0001,t0+.26);
   o.connect(f).connect(g).connect(c.destination);o.start(t0);o.stop(t0+.3)}}};

/* ------------------------------------------------------------------ the menu */
const M={state:{mounted:false,frames:0,ready:false,renderer:null,arena:false,errors:[]},
 mount(g){
  if(window.PirateHarbor){
   const u=g?.__ui,menu=u?.root.querySelector('.menu-screen');if(!menu)return;
   this.g=g;this.u=u;this.menu=menu;
   if(!this.harbor){this.harbor=window.PirateHarbor;
    Object.defineProperties(this.state,{
     mounted:{enumerable:true,get:()=>!!document.getElementById('pirate-harbor')},
     ready:{enumerable:true,get:()=>this.harbor.state.ready},
     frames:{enumerable:true,get:()=>this.harbor.state.renderFrames},
     renderer:{enumerable:true,get:()=>this.harbor.state.ready?'harbor':null},
     arena:{enumerable:true,get:()=>this.harbor.state.arena}
    });
   }
   this.harbor.mount(g);this.visible=this.isVisible();return this.harbor;
  }
  if(this.g)return this.tick();
  const u=g?.__ui;if(!u)return;const menu=u.root.querySelector('.menu-screen');if(!menu)return;
  this.g=g;this.u=u;this.menu=menu;
  if(!document.getElementById('mv-style')){const s=document.createElement('style');s.id='mv-style';s.textContent=CSS;document.head.append(s)}
  menu.classList.add('mv-on');this.state.mounted=true;
  this.build();this.load();this.tick();
 },
 w(){return WORDS[this.u.lang]||WORDS.en},
 build(){
  const menu=this.menu,u=this.u;
  const stage=this.stage=document.createElement('div');stage.className='mv-stage';stage.setAttribute('aria-hidden','true');
  stage.innerHTML='<div class="mv-plate"></div><canvas class="mv-fx"></canvas><div class="mv-shadow"></div><canvas class="mv-mari"></canvas><canvas class="mv-mari-fx"></canvas><div class="mv-grade"></div>';
  menu.prepend(stage);
  this.plateEl=stage.querySelector('.mv-plate');this.fxCanvas=stage.querySelector('.mv-fx');this.mariCanvas=stage.querySelector('.mv-mari');this.mariFx=stage.querySelector('.mv-mari-fx');this.shadow=stage.querySelector('.mv-shadow');
  this.mariCanvas.setAttribute('aria-hidden','true');
  const ui=this.ui=document.createElement('div');ui.className='mv-ui';
  ui.innerHTML=`
<div class="mv-logo"><img alt="Pirate Strike" src="${BASE}logo.webp" draggable="false"><i></i></div>
<div class="mv-chip" data-for="profile"><div class="pt"></div><div class="tx"><b class="mv-display mv-goldtext nm"></b><small class="pr"></small><div class="bar"><i></i></div></div></div>
<div class="mv-gold" title=""><div class="coin"></div><span>0</span></div>
<div class="mv-tool" data-for="lang"><div class="ic">${ICON.globe}<em>AZ</em></div><span></span></div>
<div class="mv-tool" data-for="sound"><div class="ic"></div><span></span></div>
<div class="mv-card" data-for="card"><div class="in"><div class="tt"><b class="mv-display mv-goldtext"></b><small></small></div><div class="chev"></div></div></div>
<div class="mv-drawer"><div class="in"><h3 class="mv-display mv-goldtext"></h3></div></div>
<div class="mv-plank" data-for="adventure"><div class="glow"></div><div class="fr"></div><div class="wd"></div><div class="shine"></div><i class="stud l"></i><i class="stud r"></i><div class="ct"><div class="wheel">${ICON.wheel}</div><span class="lb mv-display mv-goldtext"></span><div class="arr"></div></div><div class="cloth">${ICON.cloth}</div></div>
<div class="mv-nav n1" data-for="arena"><div class="fr"></div><div class="wd"></div><div class="ct"><div class="ic">${ICON.swords}</div><span class="lb mv-display mv-goldtext"></span></div></div>
<div class="mv-nav n2" data-for="heroes"><div class="fr"></div><div class="wd"></div><div class="ct"><div class="ic">${ICON.helm}</div><span class="lb mv-display mv-goldtext"></span></div></div>
<div class="mv-nav mv-shop" data-for="shop"><div class="fr"></div><div class="wd"></div><div class="shine"></div><div class="ct"><div class="ic">${ICON.chest}</div><span class="lb mv-display mv-goldtext"></span></div></div>
<div class="mv-nav n3" data-for="settings"><div class="fr"></div><div class="wd"></div><div class="ct"><div class="ic">${ICON.gear}</div><span class="lb mv-display mv-goldtext"></span></div></div>`;
  menu.append(ui);
  const flash=this.flashEl=document.createElement('div');flash.className='mv-flash';menu.append(flash);
  const q=s=>ui.querySelector(s);
  this.el={logo:q('.mv-logo'),chip:q('.mv-chip'),gold:q('.mv-gold'),lang:q('[data-for="lang"]'),sound:q('[data-for="sound"]'),card:q('.mv-card'),drawer:q('.mv-drawer'),adventure:q('.mv-plank'),arena:q('[data-for="arena"]'),heroes:q('[data-for="heroes"]'),shop:q('[data-for="shop"]'),settings:q('[data-for="settings"]')};
  this.el.logo.style.setProperty('--logo',`url(${BASE}logo.webp)`);
  // new working buttons (real <button>s): ARENA, HEROES, next-stage card
  const mk=(cls,label,fn)=>{const b=document.createElement('button');b.type='button';b.className='mv-hit '+cls;b.setAttribute('aria-label',label);b.onclick=fn;menu.querySelector('.menu-grid .actions').append(b);return b};
  this.hit={
   adventure:()=>menu.querySelector('.adventure-entry'),profile:()=>menu.querySelector('.menu-profile'),lang:()=>menu.querySelector('.menu-head .pf-language'),sound:()=>menu.querySelector('.menu-sound'),settings:()=>menu.querySelector('.menu-grid .open-settings'),
   arena:null,heroes:null,card:null,shop:null};
  const arenaB=mk('mv-arena-btn','Arena',()=>{this.toggleArena()});arenaB.setAttribute('aria-expanded','false');arenaB.setAttribute('aria-haspopup','true');
  const heroB=mk('mv-heroes-btn','Heroes',()=>{this.closeArena();this.pulse();window.PirateHeroSelect?.open({lang:this.u.lang,onDone:()=>this.refresh(true)})});
  const cardB=mk('mv-card-btn','Next stage',()=>{this.closeArena();this.pulse();this.hit.adventure()?.click()});
  const shopB=mk('mv-shop-btn','Shop',()=>{this.closeArena();this.pulse();window.PirateShop?.open({lang:this.u.lang,onClose:()=>this.refresh(true),onHero:()=>this.refresh(true)}).catch(e=>console.warn('shop',e))});
  this.hit.arena=()=>arenaB;this.hit.heroes=()=>heroB;this.hit.card=()=>cardB;this.hit.shop=()=>shopB;this.arenaBtn=arenaB;
  for(const k of ['adventure','profile','lang','sound','settings','arena','heroes','card','shop'])this.wire(k);
  // arena modes inside the drawer
  for(const sel of ['.play-bot','.play-friend','.menu-training']){const b=menu.querySelector(sel);if(b){b.classList.add('mv-mode');b.addEventListener('click',()=>this.closeArena(),true)}}
  this.hit.settings()?.addEventListener('click',()=>this.closeArena(),true);
  // tap Mari for the next action
  this.mariCanvas.addEventListener('pointerdown',e=>{if(!this.rig)return;if(!this.hitMari(e))return;e.preventDefault();if(!this.rig.act){this.rig.start(this.rig.last==='fire'?'sword':'fire')}});
  // first gesture starts the (quiet) ambience
  const gesture=()=>{AUD.ensure();AUD.ctx?.resume?.()};menu.addEventListener('pointerdown',gesture,{passive:true});addEventListener('keydown',gesture,{passive:true});
  this.onDoc=e=>{if(!this.state.arena)return;const t=e.target;if(this.el.drawer.contains(t)||t===this.arenaBtn||t.closest?.('.mv-mode'))return;this.closeArena()};
  document.addEventListener('pointerdown',this.onDoc,true);
  addEventListener('keydown',e=>{if(e.key==='Escape'&&this.state.arena){this.closeArena();e.preventDefault()}});
  this.ro=new ResizeObserver(()=>this.layout());this.ro.observe(menu);addEventListener('resize',()=>requestAnimationFrame(()=>this.layout()));addEventListener('orientationchange',()=>setTimeout(()=>this.layout(),120));
  this.layout();this.refresh(true);this.enter();document.fonts?.ready?.then(()=>this.fit());
 },
 wire(k){const real=this.hit[k]?.();if(!real||real.__mvWired)return;real.__mvWired=true;real.classList.add('mv-hit');const deco=k==='profile'?this.el.chip:this.el[k];if(!deco)return;
  const on=c=>e=>deco.classList.add(c),off=c=>e=>deco.classList.remove(c);
  real.addEventListener('pointerdown',on('mv-press'));for(const ev of ['pointerup','pointercancel','pointerleave'])real.addEventListener(ev,off('mv-press'));
  real.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')deco.classList.add('mv-hover')});real.addEventListener('pointerleave',off('mv-hover'));
  real.addEventListener('focus',()=>{if(real.matches(':focus-visible'))deco.classList.add('mv-focus')});real.addEventListener('blur',off('mv-focus'));
 },
 fit(){const shrink=el=>{el.style.fontSize='';let n=0;while(el.scrollWidth>el.clientWidth+1&&n++<14){const fs=parseFloat(getComputedStyle(el).fontSize);el.style.fontSize=(fs*.94)+'px'}return parseFloat(getComputedStyle(el).fontSize)};
  for(const el of this.ui.querySelectorAll('.mv-plank .lb,.mv-card .tt b,.mv-chip b,.mv-shop .lb'))shrink(el);
  // the three navigation buttons share one label size (the longest label decides)
  const navs=[...this.ui.querySelectorAll('.mv-nav:not(.mv-shop) .lb')];const size=Math.min(...navs.map(shrink));for(const el of navs)el.style.fontSize=size+'px';
  // arena modes (real buttons; their text comes from the game's translations)
  for(const b of this.menu.querySelectorAll('.mv-mode')){let f=1;b.style.setProperty('--fs','1');while(b.scrollWidth>b.clientWidth+1&&f>.55){f-=.05;b.style.setProperty('--fs',f.toFixed(2))}}},
 pulse(){const f=this.flashEl;f.classList.remove('go');void f.offsetWidth;f.classList.add('go')},
 toggleArena(){if(this.harbor)return this.harbor.toggleArena();this.state.arena?this.closeArena():this.openArena()},
 /* open a classic-menu destination (.play-bot, .play-friend, .menu-training, .menu-profile …): through the harbour when it is mounted, else a plain click */
 native(sel){if(this.harbor?.openNative)return this.harbor.openNative(sel);document.querySelector('#fighter-ui '+sel)?.click()},
 openArena(){if(this.harbor)return this.harbor.openArena();if(this.state.arena)return;this.state.arena=true;this.menu.classList.add('mv-arena-open');this.el.arena.classList.add('on');this.arenaBtn.setAttribute('aria-expanded','true');
  this.prevBack=window.__pfBack;this.backSaved=true;window.__pfBack=()=>{this.closeArena();return true};},
 closeArena(){if(this.harbor)return this.harbor.closeArena();if(!this.state.arena)return;this.state.arena=false;this.menu.classList.remove('mv-arena-open');this.el.arena.classList.remove('on');this.arenaBtn.setAttribute('aria-expanded','false');
  if(this.backSaved){window.__pfBack=this.prevBack;this.backSaved=false;this.prevBack=undefined}},
 enter(){const m=this.menu;m.classList.remove('mv-enter');void m.offsetWidth;m.classList.add('mv-enter');clearTimeout(this.enterT);this.enterT=setTimeout(()=>m.classList.remove('mv-enter'),1400)},
 /* ---- assets + renderers ---- */
 async load(){
  try{
   const L=this.layoutJson=await fetch(BASE+'layout.json').then(r=>{if(!r.ok)throw Error('layout');return r.json()});
   const [plate,atlas,water,body,pistol,sword,island]=await Promise.all(['harbor.webp','sprites.webp','water.webp','mari-body.webp','mari-pistol.webp','mari-sword.webp','island.webp'].map(n=>loadImage(BASE+n)));
   this.plateEl.style.backgroundImage=`url(${BASE}harbor.webp)`;
   this.el.card.querySelector('.in').style.backgroundImage=`url(${BASE}island.webp)`;
   this.harbour=new Harbour(L,{plate,atlas,water});
   this.rig=new MariRig(L.mari,{body,pistol,sword});this.rig.sound=k=>{if(this.visible)AUD.play(k,k==='shot'?.16:.2)};
   this.mariImgs={body,pistol,sword};
   try{this.gl=new MariGL(this.mariCanvas);this.gl.setup(this.rig);this.state.renderer='webgl'}catch(e){this.gl=null;this.r2d=new Mari2D(this.mariCanvas,this.mariImgs);this.r2d.setup(this.rig);this.state.renderer='2d'}
   this.state.ready=true;this.layout();this.loop();
  }catch(e){this.state.errors.push(String(e&&e.message||e));console.warn('menu v2',e)}
 },
 /* ---- layout (px), shared by the art and the real buttons ---- */
 layout(){
  const m=this.menu;if(!m)return;const r=m.getBoundingClientRect();const W=r.width,H=r.height;if(W<10||H<10)return;
  const sl=this.safe('left'),sr=this.safe('right');
  const u=Math.min(W/100,H*16/9/100);this.W=W;this.H=H;this.unit=u;
  m.style.setProperty('--u',u+'px');m.style.setProperty('--sl',sl+'px');
  const place=(el,x,y,w,h)=>{if(!el)return;const s=el.style;s.left=x+'px';s.top=y+'px';s.width=w+'px';if(h!=null)s.height=h+'px'};
  const R={};
  R.logo=[sl+1.8*u,1.1*u,23*u,null];
  R.chip=[sl+1.6*u,22*u,19.5*u,Math.max(6.4*u,46)];
  R.gold=[W/2-8*u,1.7*u,16*u,4.4*u];
  const tw=Math.max(6.4*u,46);R.sound=[W-sr-1.6*u-tw,1.2*u,tw,Math.max(7.2*u,48)];
  R.lang=[R.sound[0]-tw-.4*u,1.2*u,tw,Math.max(7.2*u,48)];
  R.card=[W-sr-2*u-20.5*u,11*u,20.5*u,12.5*u];
  R.shop=[R.card[0],R.card[1]+R.card[3]+1.6*u,20.5*u,Math.max(7*u,48)];
  const navW=17.6*u,navH=Math.max(6*u,46),gap=1.2*u,navY=H-1.8*u-navH;
  R.settings=[W-sr-2*u-navW,navY,navW,navH];R.heroes=[R.settings[0]-gap-navW,navY,navW,navH];R.arena=[R.heroes[0]-gap-navW,navY,navW,navH];
  const advH=10.4*u,advW=R.settings[0]+navW-R.arena[0]-1.2*u;R.adventure=[R.settings[0]+navW-advW-.6*u,navY-1.8*u-advH,advW,advH];
  const mbh=Math.max(4.5*u,42),mgap=.85*u,dW=Math.max(21*u,200),dH=4.2*u+3*mbh+2*mgap+1.5*u;R.drawer=[R.arena[0]+navW/2-dW/2,navY-1*u-dH,dW,dH];this.mbh=mbh;this.mgap=mgap;
  if(R.drawer[0]<sl+u)R.drawer[0]=sl+u;
  this.R=R;
  for(const k of ['logo','chip','gold','sound','lang','card','shop','settings','heroes','arena','adventure','drawer']){const el=k==='chip'?this.el.chip:this.el[k];const v=R[k];place(el,v[0],v[1],v[2],v[3])}
  for(const k of ['adventure','profile','lang','sound','settings','arena','heroes','card','shop']){const real=this.hit[k]?.();const v=R[k==='profile'?'chip':k];if(real&&v)place(real,v[0],v[1],v[2],v[3])}
  // arena modes inside the drawer
  const [dx,dy,dw]=R.drawer,pad=1.5*u,bh=this.mbh,bg=this.mgap;let y=dy+4.2*u;
  for(const sel of ['.play-bot','.play-friend','.menu-training']){const b=m.querySelector(sel);if(b){place(b,dx+pad,y,dw-pad*2,bh);y+=bh+bg}}
  // the harbour plate: cover, keeping the docks and the horizon
  const PW=this.layoutJson?.plate.w||1671,PH=this.layoutJson?.plate.h||941;
  const s=Math.max(W/PW,H/PH),ox=(W-PW*s)/2,oy=(H-PH*s)*.42;this.cover={s,ox,oy};
  const ps=this.plateEl.style;ps.width=PW*s+'px';ps.height=PH*s+'px';ps.transform=`translate(${ox}px,${oy}px)`;ps.backgroundSize='100% 100%';
  const dpr=Math.min(window.devicePixelRatio||1,2);
  const fxScale=Math.min(dpr,PW/(PW*s)*1.05,this.harbour?.lite?1:2);const fc=this.fxCanvas;fc.width=Math.round(W*fxScale);fc.height=Math.round(H*fxScale);fc.style.width=W+'px';fc.style.height=H+'px';this.fxScale=fxScale;
  // Mari: big, in front of the docks, left of the ADVENTURE plank
  const mh=H*.8,k=mh/716,feetY=H-1.4*u;
  const cxMax=R.adventure[0]-(430-290)*k,cxMin=R.chip[0]+R.chip[2]+(290-60)*k*.82;
  const cx=clamp(Math.min(W*.335,cxMax),Math.min(cxMin,cxMax),cxMax);
  const left=cx-(290-BOX.x0)*k,top=feetY-(FEET[1]-BOX.y0)*k,cw=(BOX.x1-BOX.x0)*k,ch=(BOX.y1-BOX.y0)*k;
  this.mari={k,left,top,cw,ch};
  for(const c of [this.mariCanvas,this.mariFx]){c.style.left=left+'px';c.style.top=top+'px';c.style.width=cw+'px';c.style.height=ch+'px'}
  const mdpr=Math.min(dpr,2);this.mariCanvas.width=Math.round(cw*mdpr);this.mariCanvas.height=Math.round(ch*mdpr);this.mariFx.width=Math.round(cw*mdpr);this.mariFx.height=Math.round(ch*mdpr);this.mdpr=mdpr;
  const sh=this.shadow.style;sh.left=(cx-150*k)+'px';sh.width=(330*k)+'px';sh.top=(feetY-22*k)+'px';sh.height=(40*k)+'px';
  cancelAnimationFrame(this.fitRaf);this.fitRaf=requestAnimationFrame(()=>this.fit());
  if(this.gl&&this.mariImgs){const sc=Math.min(1,k*mdpr*1.15);if(Math.abs((this.texScale||0)-sc)>.04){for(const n of ['body','pistol','sword'])this.gl.texture(n,this.mariImgs[n],sc);this.texScale=sc}}
 },
 safe(side){if(!this.probe){const p=this.probe=document.createElement('div');p.style.cssText='position:absolute;visibility:hidden;pointer-events:none;padding-left:env(safe-area-inset-left,0px);padding-right:env(safe-area-inset-right,0px)';this.menu.append(p)}
  const cs=getComputedStyle(this.probe);return parseFloat(side==='left'?cs.paddingLeft:cs.paddingRight)||0},
 hitMari(e){const r=this.mariCanvas.getBoundingClientRect(),k=this.mari.k;const x=(e.clientX-r.left)/k+BOX.x0,y=(e.clientY-r.top)/k+BOX.y0;return x>40&&x<560&&y>0&&y<716},
 /* ---- text + live data, a few times a second ---- */
 refresh(force){
  const u=this.u,w=this.w(),m=this.menu;const lang=u.lang;
  if(force||lang!==this.lang){this.lang=lang;
   this.el.arena.querySelector('.lb').textContent=w.arena;this.el.heroes.querySelector('.lb').textContent=w.heroes;
   this.el.drawer.querySelector('h3').textContent=w.modes;this.el.lang.querySelector('span').textContent=w.lang;this.el.lang.querySelector('em').textContent=(lang||'en').toUpperCase();
   this.arenaBtn.setAttribute('aria-label',w.arena);this.hit.heroes().setAttribute('aria-label',w.heroes);this.hit.card().setAttribute('aria-label',w.next);this.el.shop.querySelector('.lb').textContent=w.shop;this.hit.shop().setAttribute('aria-label',w.shop);
  }
  const adv=(this.hit.adventure()?.textContent||'').replace(/^\s*⚓\s*/,'').trim();if(adv&&adv!==this._adv){this._adv=adv;this.el.adventure.querySelector('.lb').textContent=adv}
  const st=(this.hit.settings()?.textContent||'').trim();if(st!==this._st){this._st=st;this.el.settings.querySelector('.lb').textContent=st}
  const snd=!!u.sound;if(snd!==this._snd||force){this._snd=snd;this.el.sound.querySelector('.ic').innerHTML=snd?ICON.soundOn:ICON.soundOff}
  const sl=u.t?u.t('sound'):'Sound';if(sl!==this._sl){this._sl=sl;this.el.sound.querySelector('span').textContent=sl}
  let name='';try{name=this.g.__profile?.name||''}catch{}name=name||(u.t?u.t('you'):'');if(name!==this._nm){this._nm=name;this.el.chip.querySelector('.nm').textContent=name}
  let gold=0;try{gold=window.PirateEconomy?.balance()??Math.max(0,Math.floor(Number(localStorage.getItem('pf-adventure-gold'))||0))}catch{}if(gold!==this._gold){this._gold=gold;this.el.gold.querySelector('span').textContent=gold.toLocaleString('en-US')}
  // progress (existing 100-level registry; the world map shows chapters of five)
  const P=window.PirateLevels;let next=1,done=0;
  if(P){if(force){try{P.syncLegacy?.()}catch{}}for(let n=1;n<=100;n++){if(!P.isCompleted(n)){next=n;break}if(n===100)next=101}
   const ch=Math.ceil(Math.min(next,100)/5);for(let n=(ch-1)*5+1;n<=ch*5;n++)if(P.isCompleted(n))done++;
   const key=next+':'+done+':'+lang;if(key!==this._prog){this._prog=key;
    this.el.chip.querySelector('.pr').textContent=`${w.chapter} ${ch} · ${w.stage} ${Math.min(next,100)}`;this.el.chip.querySelector('.bar i').style.width=(done/5*100)+'%';
    const all=next>100;this.el.card.querySelector('b').textContent=all?w.allDone:w.next;
    const nm=all?'':(P.name?.(next,lang)||'');this.el.card.querySelector('small').textContent=all?'':`${next}. ${nm||''}`.trim()}}
  let hero='scarlet';try{hero=P?.hero?.()||'scarlet'}catch{}const pt=window.PirateHeroes?.portrait?.(hero)||'adventure/levels/assets/heroes/scarlet-portrait.png';
  if(force||this._fitKey!==this.lang+this.W){this._fitKey=this.lang+this.W;requestAnimationFrame(()=>this.fit())}
  if(pt&&pt!==this._pt){this._pt=pt;this.el.chip.querySelector('.pt').style.backgroundImage=`url("${pt}")`}
 },
 /* ---- visibility: animate only while the menu is really on screen ---- */
 isVisible(){if(this.harbor)return this.harbor.isVisible();const m=this.menu;if(!m||m.hidden||document.hidden||m.offsetParent===null)return false;
  if(document.getElementById('pirate-hero-select')||document.getElementById('pf-shop')||document.getElementById('pirate-world-map')||document.getElementById('pirate-level'))return false;
  const av=document.getElementById('pirate-adventure');if(av&&!av.hidden&&av.offsetParent!==null)return false;
  const ui=this.u.root;for(const s of ui.querySelectorAll('.screen:not(.menu-screen)'))if(!s.hidden&&s.offsetParent!==null)return false;
  return true},
 tick(){
  if(this.harbor){this.harbor.tick();this.visible=this.isVisible();return}
  if(!this.ui)return;let changed=false;
  for(const k of ['adventure','profile','lang','sound','settings']){const r=this.hit[k]?.();if(r&&!r.classList.contains('mv-hit')){this.wire(k);changed=true}}
  for(const sel of ['.play-bot','.play-friend','.menu-training']){const b=this.menu.querySelector(sel);if(b&&!b.classList.contains('mv-mode')){b.classList.add('mv-mode');b.addEventListener('click',()=>this.closeArena(),true);changed=true}}
  const a=this.hit.adventure?.();if(a&&!a.__mvPulse){a.__mvPulse=true;a.addEventListener('click',()=>{this.closeArena();this.pulse()},true)}
  if(changed){this.layout();this.refresh(true)}
 },
 loop(){
  let last=performance.now(),acc=0,info=0,slow=0,frames=0;
  const frame=now=>{
   requestAnimationFrame(frame);
   const vis=this.isVisible();
   if(vis!==this.visible){this.visible=vis;this.menu.classList.toggle('mv-paused',!vis);if(vis){this.enter();this.refresh(true);this.layout()}else this.closeArena();if(AUD.ctx)AUD.ambient(vis)}
   if(!vis){last=now;return}
   info+=now-last;if(info>250){info=0;const r=this.menu.getBoundingClientRect();if(Math.abs(r.width-this.W)>1||Math.abs(r.height-this.H)>1)this.layout();this.refresh(false);if(AUD.ctx)AUD.ambient(true)}
   const reduce=reduceMQ.matches;
   if(this.manual){last=now;return}
   const dtms=now-last;if(dtms<31&&!this.forceFrame)return;this.forceFrame=false;
   const dt=Math.min(.1,dtms/1000);last=now;
   const t0=performance.now();
   this.draw(dt,reduce);
   const cost=performance.now()-t0;this.state.cost=cost;frames++;
   // adapt to slow phones: script cost or a low real frame rate switches to the lighter harbour
   this.ema=this.ema?this.ema*.95+dtms*.05:dtms;
   if(cost>20||this.ema>48)slow++;else slow=Math.max(0,slow-.25);
   if(this.harbour&&!this.harbour.lite&&slow>45&&!this.noLite){this.harbour.lite=true;this.state.lite=true;this.layout()}
   this.state.frames++;
  };
  requestAnimationFrame(frame);
 },
 draw(dt,reduce){
  const H=this.harbour,rig=this.rig;if(!H||!rig)return;
  this.t=(this.t||0)+(reduce?0:dt);const t=this.t;
  // harbour
  const c=this.fxCanvas.getContext('2d'),f=this.fxScale,cv=this.cover;
  c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,this.fxCanvas.width,this.fxCanvas.height);
  c.setTransform(cv.s*f,0,0,cv.s*f,cv.ox*f,cv.oy*f);c.imageSmoothingEnabled=true;
  H.draw(c,t,reduce?0:dt);
  // Mari
  rig.S.wind=reduce?0:1;rig.S.breath=reduce?0:1;
  rig.step(reduce?0:dt,{auto:!reduce,still:false});rig.pose(t);
  if(this.gl&&!this.gl.lost)this.gl.draw();else{if(!this.r2d){this.r2d=new Mari2D(this.mariCanvas,this.mariImgs);this.r2d.setup(rig)}this.r2d.draw(this.mari.k*this.mdpr)}
  this.mariEffects(dt);
  this.state.mari={action:rig.act?.n||'idle',actions:rig.actions,pA:rig.S.pA,sA:rig.S.sA};
 },
 mariEffects(dt){
  const rig=this.rig,c=this.mariFx.getContext('2d'),k=this.mari.k*this.mdpr;
  c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,this.mariFx.width,this.mariFx.height);
  c.setTransform(k,0,0,k,-BOX.x0*k,-BOX.y0*k);
  const S=rig.S;if(S.lean){c.translate(FEET[0],FEET[1]);c.rotate(S.lean);c.translate(-FEET[0],-FEET[1])}
  const tr=rig.trail;for(let i=tr.length-1;i>=0;i--){tr[i].life-=dt;if(tr[i].life<=0)tr.splice(i,1)}
  if(tr.length>1){c.lineCap='round';for(let i=1;i<tr.length;i++){const a=tr[i-1],b=tr[i];c.strokeStyle=`rgba(255,250,236,${Math.min(1,b.life*3.4)*.85})`;c.lineWidth=5+b.life*64;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke()}}
  const sm=rig.smoke;for(let i=sm.length-1;i>=0;i--){const s=sm[i];s.life-=dt;if(s.life<=0){sm.splice(i,1);continue}s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx*=.985;s.r+=20*dt;c.fillStyle=`rgba(226,224,218,${Math.min(.55,s.life/s.max*.65)})`;c.beginPath();c.arc(s.x+Math.sin(rig.clock*2+i)*3,s.y,s.r,0,TAU);c.fill()}
  const sp=rig.sparks;for(let i=sp.length-1;i>=0;i--){const s=sp[i];s.life-=dt;if(s.life<=0){sp.splice(i,1);continue}s.x+=s.vx*dt;s.y+=s.vy*dt;c.fillStyle='rgba(255,214,120,.95)';c.fillRect(s.x-3,s.y-3,6,6)}
  if(rig.flash>0){const m=rot(MUZZLE,PE,S.pA);m[0]+=S.pX;const r=c.createRadialGradient(m[0]+20,m[1],0,m[0]+20,m[1],95);r.addColorStop(0,'rgba(255,255,236,1)');r.addColorStop(.28,'rgba(255,206,96,.95)');r.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=r;c.beginPath();c.moveTo(m[0],m[1]-26);c.lineTo(m[0]+135,m[1]);c.lineTo(m[0],m[1]+26);c.closePath();c.fill();c.beginPath();c.arc(m[0]+20,m[1],42,0,TAU);c.fill()}
 },
 /* ---- test helpers ---- */
 act(n){this.rig?.start(n)},
 /* deterministic frame stepping for recordings: canvas and CSS animations advance by dt only */
 manualStep(dt){this.manual=true;this.draw(dt,false);const ms=this.t*1000;for(const a of this.menu.getAnimations({subtree:true})){try{a.pause();const end=a.effect?.getComputedTiming?.().endTime;a.currentTime=Number.isFinite(end)?Math.min(ms,end):ms}catch{}}return this.t},
 restDiff(){ // rest pose (2D path) against the original card, in percent of mean channel difference
  if(!this.rig||!this.mariImgs)return null;const rig=this.rig,save={...rig.S};rig.S.pA=0;rig.S.pX=0;rig.S.sA=0;rig.S.lean=0;for(const p of rig.V){p.x=p.u;p.y=p.v}
  const c=document.createElement('canvas');c.width=rig.CW;c.height=rig.CH;const r=new Mari2D(c,this.mariImgs);r.setup(rig);const x=c.getContext('2d');r.figure(x);Object.assign(rig.S,save);
  return new Promise(ok=>{const card=new Image();card.onload=()=>{const o=document.createElement('canvas');o.width=rig.CW;o.height=rig.CH;const ox=o.getContext('2d');ox.drawImage(card,0,0);ox.clearRect(492,0,rig.CW-492,213);
   const a=x.getImageData(0,0,rig.CW,rig.CH).data,b=ox.getImageData(0,0,rig.CW,rig.CH).data;let sum=0,n=0;for(let i=0;i<a.length;i+=4){if(a[i+3]<8&&b[i+3]<8)continue;sum+=(Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2])+Math.abs(a[i+3]-b[i+3]))/4;n++}ok(sum/n/255*100)};card.src='adventure/levels/assets/heroes/scarlet-card.png'})}
};
window.PirateMenuV2=M;
})();

