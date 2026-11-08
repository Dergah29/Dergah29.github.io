/* Pirate Strike — 100-level progression.
 * Every 5th level (5, 10 … 100) is a boss level; boss levels are part of the 100.
 * A level unlocks only when the previous level is COMPLETED. Only real, installed
 * levels are playable; the rest are shown as "coming soon" and are never faked.
 *
 * Chapter 1 (the island map supplied by the owner):
 *   1 Haven Bay         – engine level (Smugglers' Landing)
 *   2 Path to the Ruins – level engine (level-02)
 *   3 Ancient Ruins     – level engine (level-03)
 *   4 Smugglers' Cove   – level engine (level-04)
 *   5 BOSS Cursed Island – level engine (level-05): the Totem Shaman; its victory unlocks 6
 *   6 Stormbreaker Island – chapter 2, level engine (level-06): wind, lightning, the Storm Captain
 *   7 The Dark Lighthouse – level engine (level-07): tide, the sweeping beam, sea caves, the Lightkeeper;
 *   8 Frozen Fleet        – level engine (level-08): ice, icicles, the ice-block bridge, the thaw, Captain Rime;
 *   9 Chain Fortress      – level engine (level-09): three chains, cannon batteries, the siege of the great gate;
 *                         its ending unlocks 10.
 *  10 BOSS The Black Admiral – level engine (level-10): naval assault, the Admiral duel, the burning ship;
 *                         its victory unlocks 11 (Storm Crown Reef, chapter 3, named, coming soon).
 * The island UI lives in worldmap.js; this file owns progress and launching. */
(()=>{'use strict';
if(window.PirateLevels)return;
const TOTAL=100,KEY='pf-levels-v1',HERO_KEY='pf-hero';
const isBoss=n=>n%5===0;
const NAMES={
 en:{1:'Haven Bay',2:'Path to the Ruins',3:'Ancient Ruins',4:'Smugglers’ Cove',5:'Cursed Island',6:'Stormbreaker Island',7:'The Dark Lighthouse',8:'Frozen Fleet',9:'Chain Fortress',10:'The Black Admiral',11:'Storm Crown Reef'},
 az:{1:'Sığınacaq Körfəzi',2:'Xarabalıqlara Yol',3:'Qədim Xarabalıqlar',4:'Qaçaqmalçı Koyu',5:'Lənətli Ada',6:'Fırtına Adası',7:'Qaranlıq Mayak',8:'Donmuş Donanma',9:'Zəncirli Qala',10:'Qara Admiral',11:'Fırtına Tacı Rifi'},
 tr:{1:'Sığınak Koyu',2:'Harabelere Yol',3:'Antik Harabeler',4:'Kaçakçı Koyu',5:'Lanetli Ada',6:'Fırtınakıran Adası',7:'Karanlık Fener',8:'Donmuş Filo',9:'Zincirli Kale',10:'Kara Amiral',11:'Fırtına Tacı Resifi'},
 ru:{1:'Тихая бухта',2:'Путь к руинам',3:'Древние руины',4:'Бухта контрабандистов',5:'Проклятый остров',6:'Остров Штормолом',7:'Тёмный маяк',8:'Ледяной флот',9:'Цепная крепость',10:'Чёрный адмирал',11:'Риф Штормовой Короны'},
 pl:{1:'Zatoka Przystani',2:'Droga do ruin',3:'Starożytne ruiny',4:'Zatoka przemytników',5:'Przeklęta wyspa',6:'Wyspa Łamacza Burz',7:'Mroczna latarnia',8:'Lodowa Flota',9:'Łańcuchowa Twierdza',10:'Czarny Admirał',11:'Rafa Korony Burz'}};

function read(){try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&s.v===1&&s.completed&&typeof s.completed==='object')return s}catch{}return{v:1,completed:{}}}
function write(s){try{localStorage.setItem(KEY,JSON.stringify(s))}catch{}}

/* Level sources. Only real content is listed; everything else is "coming soon". */
const sources={
 1:{kind:'engine',id:1},
 2:{kind:'engine',id:2},
 3:{kind:'engine',id:3},
 4:{kind:'engine',id:4},
 5:{kind:'engine',id:5},
 6:{kind:'engine',id:6},
 7:{kind:'engine',id:7},
 8:{kind:'engine',id:8},
 9:{kind:'engine',id:9},
 10:{kind:'engine',id:10}
};

const P={
 TOTAL,isBoss,NAMES,
 name(n,lang){return(NAMES[lang]||NAMES.en)[n]||(NAMES.en[n])||null},
 levels(){return Array.from({length:TOTAL},(_,i)=>{const n=i+1;return{n,boss:isBoss(n),chapter:Math.ceil(n/5),source:sources[n]||null}})},
 data:read,
 /* Keep migrating completion from the retired Level 1 voyage save. */
 syncLegacy(){
  const s=read();let changed=false;
  try{if(localStorage.getItem('pf-adventure-complete')==='1'&&!s.completed[1]){s.completed[1]={at:Date.now(),via:'voyage'};changed=true}}catch{}
  if(changed)write(s);return s;
 },
 isCompleted(n){return!!read().completed[n]},
 isUnlocked(n){if(n===1)return true;return this.isCompleted(n-1)},
 isPlayable(n){const src=sources[n];if(!src)return false;if(src.kind==='engine')return!!window.PirateLevelEngine?.get(src.id);if(src.kind==='island')return!!window.PirateCursedIsland;if(src.kind==='voyage')return!!window.PirateAdventure;return false},
 stars(n){const c=read().completed[n];if(!c)return 0;const b=c.best||{};return 1+(b.secrets>0?1:0)+(b.flawless?1:0)},
 complete(n,stats){
  if(!Number.isInteger(n)||n<1||n>TOTAL)return null;if(!this.isUnlocked(n))return null;
  const s=read(),prev=s.completed[n];const best=prev?.best||{};const g=stats||{};
  s.completed[n]={at:prev?.at||Date.now(),last:Date.now(),plays:(prev?.plays||0)+1,best:{gold:Math.max(best.gold||0,g.gold||0),time:best.time?Math.min(best.time,g.time||best.time):(g.time||0),secrets:Math.max(best.secrets||0,g.secrets||0),flawless:!!(best.flawless||g.deaths===0)}};
  write(s);return n<TOTAL?n+1:null;
 },
 reset(){write({v:1,completed:{}})},
 register(n,src){sources[n]=src},
 /* selected hero (shared by hero select, engine levels and the Blacktide voyage) */
 heroes:['scarlet','sailor','captain','shark','crab'],
 hero(){let h=null;try{h=localStorage.getItem(HERO_KEY)}catch{}return this.heroes.includes(h)?h:'scarlet'},
 setHero(h){if(!this.heroes.includes(h))return;try{localStorage.setItem(HERO_KEY,h)}catch{}},
 async launch(n,host){
  const src=sources[n];if(!src||!this.isUnlocked(n)||!this.isPlayable(n))return false;
  this.closeMap();
  if(src.kind==='engine'){await window.PirateLevelEngine.launch(src.id,{host,hero:this.hero(),onExit:()=>this.openMap(host)});return true}
  if(src.kind==='voyage'&&host){host.__fromMap=true;host.skin=window.PirateHeroes?.voyageSkin?.(this.hero())||'captain';host.start(!!host.progress);return true}
  if(src.kind==='island'&&window.PirateCursedIsland&&host){host.__fromMap=true;host.__toMap=true;await window.PirateCursedIsland.open(host);return true}
  return false;
 },
 closeMap(){window.PirateWorldMap?.close()},
 openMap(host){this.syncLegacy();return window.PirateWorldMap?.open(host)},
 /* ADVENTURE opens the island map first; the map's BACK returns to the main menu. */
 installMenuHook(){
  const A=window.PirateAdventure;if(!A||A.levelsHooked)return false;A.levelsHooked=true;
  const proto=A.Voyage.prototype,intro=proto.intro,open=proto.open,close=proto.close,finish=proto.finish,beginBoss=proto.beginBoss,step=proto.step;
  // The Blacktide arena boss belongs to legacy standalone Voyage, NOT map Level 1.
  // Map Level 1 is completed at the harbor's final exit; Level 5 is the first boss.
  proto.beginBoss=function(...a){if(this.__fromMap){this.finish();return}return beginBoss.apply(this,a)};
  proto.step=function(...a){const r=step.apply(this,a);if(this.__fromMap&&this.phase==='playing'&&this.p?.x>=7740)this.finish();return r};
  proto.open=function(...a){this.__toMap=true;return open.apply(this,a)};
  proto.intro=function(...a){if(this.__toMap&&window.PirateWorldMap){this.__toMap=false;this.phase='map';this.modal.hidden=true;this.controls.hidden=true;P.openMap(this);return}return intro.apply(this,a)};
  proto.close=function(...a){const back=this.__fromMap&&!this.__leaving;const r=close.apply(this,a);if(back&&window.PirateWorldMap){this.active=true;this.root.hidden=false;this.phase='map';this.modal.hidden=true;this.controls.hidden=true;P.openMap(this)}return r};
  proto.finish=function(...a){const fromMap=this.__fromMap;const r=finish.apply(this,a);if(this.phase==='reward-retry')return r;try{P.complete(1,{gold:this.gold})}catch{}
   if(fromMap&&window.PirateWorldMap){this.phase='map';this.modal.hidden=true;this.controls.hidden=true;this.clearInputs?.();P.openMap(this)}
   return r};
  // Level 1 opens the chapter: spikes/thorns hurt a little less there (20 -> 14) so a new player can learn blocking and dashing.
  const hurt=proto.hurt;proto.hurt=function(amount,dir){return hurt.call(this,this.__fromMap&&amount>=20?14:amount,dir)};
  proto.leaveAdventure=function(){this.__leaving=true;this.__fromMap=false;try{close.apply(this)}finally{this.__leaving=false}};
  return true;
 }
};
window.PirateLevels=P;
P.installMenuHook();
})();
