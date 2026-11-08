/* Pirate Strike — animated opening story, portrait dialogue and hero hand-off.
 * Sea ambush → damaged ship reaches the island → crew discussion → real hero selection
 * → the chosen hero goes ashore → the existing Level 1 (Blacktide "Harbor Bay" voyage)
 * starts with that hero. Text + portraits only: no voice, narration or TTS.
 *
 * Persistence: `pf-story-intro-v1` (versioned JSON, corrupt → safe default) beside the
 * existing localStorage saves. The hero choice is written through the existing
 * PirateLevels.setHero (`pf-hero`). Completion is recorded only after Level 1 is
 * actually playing. No rewards, unlocks, wallet or level progress are written here. */
(()=>{'use strict';
if(window.PirateStory)return;
const KEY='pf-story-intro-v1',VH=540,TAU=Math.PI*2;
const D=()=>window.PirateStoryData,ART=()=>window.PirateStoryArt;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,k)=>a+(b-a)*k;
const ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
const HERO_SCALE={scarlet:.5,frames:2.4};
const SCENE_OF={pending:0,ambush:0,arrival:1,select:2,confirmed:3,handoff:4};

/* ------------------------------------------------------------------ persistence */
const Save={
 storage(){try{return window.localStorage}catch{return null}},
 read(){try{const raw=this.storage()?.getItem(KEY);if(!raw)return null;const s=JSON.parse(raw);
  if(!s||s.v!==1||typeof s.checkpoint!=='string'||!(s.checkpoint in SCENE_OF||s.checkpoint==='complete'||s.checkpoint==='legacy'))return{v:1,checkpoint:'pending',hero:null,done:false,corrupt:true};
  return{v:1,checkpoint:s.checkpoint,hero:typeof s.hero==='string'?s.hero:null,done:!!s.done,outroShown:!!s.outroShown,hintShown:!!s.hintShown,legacy:!!s.legacy,plays:Number.isInteger(s.plays)?s.plays:0,completedAt:Number.isFinite(s.completedAt)?s.completedAt:null,updatedAt:s.updatedAt||null}}
  catch{return{v:1,checkpoint:'pending',hero:null,done:false,corrupt:true}}},
 write(patch){const cur=this.read()||{v:1,checkpoint:'pending',hero:null,done:false,plays:0};const next={...cur,...patch,v:1,updatedAt:Date.now()};delete next.corrupt;
  // never regress a completed story, never mark done without the hand-off checkpoint
  if(cur.done&&!patch.__force){next.done=true;next.checkpoint='complete'}delete next.__force;
  try{this.storage()?.setItem(KEY,JSON.stringify(next));return true}catch{return false}}
};
/* Existing-player detection happens at script load, before the first-start name dialog
 * writes anything, so a fresh install is not mistaken for a returning player. */
function existingProgress(){const ls=Save.storage();if(!ls)return false;const has=k=>{try{return ls.getItem(k)!==null}catch{return false}};
 if(['pf-player-name','pf-adventure-v1','pf-adventure-complete','pf-training-done','pf-stage-progress','pf-cursed-island-v1','pf-hero'].some(has))return true;
 try{const l=JSON.parse(ls.getItem('pf-levels-v1')||'null');if(l&&l.completed&&Object.keys(l.completed).length)return true}catch{}
 for(let i=0;i<ls.length;i++){const k=ls.key(i)||'';if(/^pf-level-\d+-v1$/.test(k))return true}
 try{for(const k of ['pf-shop-v2','pf-shop-v1']){const s=JSON.parse(ls.getItem(k)||'null');if(s&&(s.gold>0||Object.keys(s.earned||{}).length||Object.keys(s.owned||{}).length||s.stats?.earned>0))return true}}catch{}
 return false}
const BOOT=(()=>{const s=Save.read();if(s)return{state:s,fresh:false};const returning=existingProgress();
 // Mark the decision immediately: an app close during the name dialog must not flip a fresh install into "returning".
 Save.write(returning?{checkpoint:'legacy',legacy:true,done:false}:{checkpoint:'pending',done:false});return{state:Save.read(),fresh:!returning}})();

/* ------------------------------------------------------------------ hero eligibility */
function eligibleHeroes(){
 const H=window.PirateHeroes,L=window.PirateLevels,E=window.PirateEconomy;if(!H||!L)return[];
 // Hero Collection (PR #104): the wallet's hero list is authoritative; premium/locked entries are never offered.
 return H.roster.filter(h=>L.heroes.includes(h.id)&&!h.premium&&!h.locked&&(typeof E?.heroProgress!=='function'||E.heroProgress(h.id)!=null)&&(typeof E?.ownsHero!=='function'||E.ownsHero(h.id)!==false));
}
function heroName(id){const h=window.PirateHeroes?.get(id);return h?h.name:id}/* roster display name: the scarlet id is shown as Mari */
/* Same rarity/role/colours as the Sunset Freeport hero collection (harbor.js META). */
const CARD_META={scarlet:['Legendary','Duelist','#edc16b','#d4a44a'],sailor:['Rare','Skirmisher','#81c9df','#388bb4'],captain:['Epic','Combo fighter','#bf9ada','#8d50a7'],shark:['Epic','Breaker','#bf9ada','#8d50a7'],crab:['Rare','Defender','#81c9df','#388bb4']};
function heroArtKey(id){const o=window.PirateEconomy?.equipped?.(id)?.outfit;return id==='sailor'&&o==='outfit-navy'?'sailor-navy':id==='crab'&&o==='outfit-coral'?'crab-coral':id}
function heroPortraitSrc(id){return'harbor/assets/portraits/'+heroArtKey(id)+'.webp'}

/* ------------------------------------------------------------------ styles */
const CSS=`
#pirate-story{position:fixed;inset:0;z-index:24000;background:#02060b;color:#f4ead6;font-family:Georgia,'Times New Roman',serif;user-select:none;-webkit-user-select:none;touch-action:none;overflow:hidden;-webkit-tap-highlight-color:transparent}
#pirate-story canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
#pirate-story .st-bar{position:absolute;left:0;right:0;height:0;background:#000;transition:height .9s cubic-bezier(.6,0,.2,1);z-index:2;pointer-events:none}
#pirate-story .st-bar.top{top:0}#pirate-story .st-bar.bot{bottom:0}
#pirate-story.cine .st-bar{height:7.5vh}
#pirate-story .st-fade{position:absolute;inset:0;background:#000;opacity:1;transition:opacity .8s ease;pointer-events:none;z-index:8}
#pirate-story .st-logo{position:absolute;z-index:3;left:72%;top:14vh;width:min(30vw,250px);transform:translateX(-50%) scale(.92);opacity:0;transition:opacity 1.2s ease,transform 3.2s ease-out;pointer-events:none;filter:drop-shadow(0 6px 14px #000c)}
#pirate-story .st-logo img{width:100%;display:block}
#pirate-story .st-logo.on{opacity:1;transform:translateX(-50%) scale(1)}
#pirate-story .st-wipe{position:absolute;z-index:8;top:0;left:-150%;width:150%;height:100%;pointer-events:none}
#pirate-story .st-wipe.run{animation:st-wipe 1.3s cubic-bezier(.65,0,.35,1) forwards}
@keyframes st-wipe{0%{left:-150%}100%{left:100%}}
#pirate-story .st-caption{position:absolute;left:calc(18px + env(safe-area-inset-left));top:calc(9.5vh + 4px);z-index:3;font:italic 600 clamp(12px,3.4vh,16px)/1.2 Georgia,serif;letter-spacing:.06em;color:#e9dcc0;text-shadow:0 2px 6px #000;opacity:0;transform:translateY(6px);transition:opacity .7s,transform .7s;pointer-events:none}
#pirate-story .st-caption.on{opacity:.92;transform:none}
#pirate-story .st-skip{position:absolute;z-index:6;top:calc(8px + env(safe-area-inset-top));right:calc(10px + env(safe-area-inset-right));min-width:76px;min-height:44px;padding:0 14px;border-radius:22px;border:1px solid #c9a35a88;background:#08121cc4;color:#f1dfb5;font:700 14px/1 Georgia,serif;letter-spacing:.08em;display:flex;align-items:center;gap:6px;justify-content:center;cursor:pointer;backdrop-filter:blur(2px)}
#pirate-story .st-skip svg{width:16px;height:16px}
#pirate-story .st-skip[hidden]{display:none}
#pirate-story .st-dlg{position:absolute;z-index:4;left:50%;bottom:calc(10px + env(safe-area-inset-bottom));width:min(860px,calc(100vw - 28px - env(safe-area-inset-left) - env(safe-area-inset-right)));transform:translate(-50%,18px);opacity:0;transition:opacity .28s ease,transform .28s ease;pointer-events:none;display:flex;align-items:flex-end;gap:0}
#pirate-story .st-dlg.on{opacity:1;transform:translate(-50%,0)}
#pirate-story .st-dlg.right{flex-direction:row-reverse}
#pirate-story .st-por{flex:none;position:relative;width:clamp(70px,22vh,104px);height:clamp(70px,22vh,104px);border-radius:12px;background:radial-gradient(circle at 50% 35%,#36506a,#101c28 72%);border:2px solid #c9a35a;box-shadow:0 0 0 1px #2a1a08,0 8px 18px #000a;overflow:hidden;z-index:2;margin-bottom:6px;transition:transform .25s}
#pirate-story .st-por.swap{transform:scale(.9)}
#pirate-story .st-por canvas,#pirate-story .st-por img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
#pirate-story .st-por img.st-face{object-position:50% 4%;transform:scale(1.75);transform-origin:50% 8%}
#pirate-story .st-por img.st-face.flat{transform:none}
#pirate-story .st-por img.st-face[data-mood=alarm]{animation:st-alarm .45s ease-out 1}
#pirate-story .st-por img.st-face[data-mood=stern]{animation:st-stern .5s ease-out 1 both}
#pirate-story .st-por img.st-face[data-mood=worried]{animation:st-worry 1.6s ease-in-out infinite;filter:saturate(.85) brightness(.95)}
#pirate-story .st-dlg[data-mood=alarm] .st-por{box-shadow:0 0 0 1px #2a1a08,0 0 16px 2px #e0523a99,0 8px 18px #000a;border-color:#e88a5a}
@keyframes st-alarm{0%,100%{translate:0 0}20%{translate:-3px 0}40%{translate:3px -1px}60%{translate:-2px 0}80%{translate:2px 0}}
@keyframes st-stern{from{transform:scale(1.75)}to{transform:scale(1.85)}}
@keyframes st-worry{50%{translate:0 2px}}
#pirate-story .st-panel{flex:1;min-width:0;position:relative;margin:0 0 0 -10px;padding:clamp(8px,2.3vh,12px) clamp(14px,2.4vw,22px) clamp(10px,2.6vh,14px) clamp(20px,3vw,28px);border-radius:12px;background:linear-gradient(180deg,#132433f2,#0a1520f4);border:1px solid #b88f4a;box-shadow:inset 0 1px 0 #ffffff14,inset 0 0 0 3px #0a141e,inset 0 0 0 4px #b88f4a40,0 10px 24px #000b;min-height:clamp(58px,17vh,84px)}
#pirate-story .st-dlg.right .st-panel{margin:0 -10px 0 0;padding-left:clamp(14px,2.4vw,22px);padding-right:clamp(20px,3vw,28px)}
#pirate-story .st-panel::before,#pirate-story .st-panel::after{content:'';position:absolute;top:7px;width:6px;height:6px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#f6d68e,#8a6424);box-shadow:0 1px 1px #000}
#pirate-story .st-panel::before{left:9px}#pirate-story .st-panel::after{right:9px}
#pirate-story .st-name{display:flex;align-items:baseline;gap:8px;margin:0 0 3px;font:700 clamp(13px,3.7vh,17px)/1.1 Georgia,serif;letter-spacing:.04em}
#pirate-story .st-name small{font:600 clamp(10px,2.8vh,12px)/1 Georgia,serif;letter-spacing:.12em;text-transform:uppercase;color:#b9c3c8;opacity:.85}
#pirate-story .st-text{margin:0;font:500 clamp(14px,4.1vh,18px)/1.38 Georgia,serif;color:#f6eedc;text-shadow:0 1px 0 #000;min-height:2.76em}
#pirate-story .st-next{position:absolute;right:12px;bottom:6px;display:flex;align-items:center;gap:6px;font:600 11px/1 Georgia,serif;letter-spacing:.08em;color:#e6c27a;opacity:0;transition:opacity .2s}
#pirate-story .st-next svg{width:14px;height:14px;animation:st-bob 1s ease-in-out infinite}
#pirate-story .st-next.on{opacity:.95}
@keyframes st-bob{50%{transform:translateY(3px)}}
#pirate-story .st-modal{position:absolute;inset:0;z-index:9;display:flex;align-items:center;justify-content:center;background:#02070cb0}
#pirate-story .st-modal[hidden]{display:none}
#pirate-story .st-card{width:min(400px,86vw);padding:18px 20px 16px;border-radius:14px;background:linear-gradient(180deg,#152a3b,#0a1622);border:1px solid #b88f4a;box-shadow:0 18px 40px #000c;text-align:center}
#pirate-story .st-card h3{margin:0 0 6px;font:700 19px Georgia,serif;color:#f3dca8}
#pirate-story .st-card p{margin:0 0 14px;font:500 14px/1.35 Georgia,serif;color:#d5dde2}
#pirate-story .st-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
#pirate-story .st-btn{min-height:44px;min-width:120px;padding:0 18px;border-radius:10px;border:1px solid #6b5126;background:linear-gradient(#3a2a16,#24180b);color:#f1dfb5;font:700 15px Georgia,serif;cursor:pointer}
#pirate-story .st-btn.gold{background:linear-gradient(#f2cf74,#c48c2c);color:#2b1806;border-color:#7a5212}
#pirate-story .st-btn:disabled{opacity:.78;filter:saturate(.25) brightness(.85);cursor:default}
#pirate-story .st-confirm{min-width:min(320px,70vw);min-height:46px}
#pirate-story .st-sel{position:absolute;z-index:5;left:50%;top:50%;transform:translate(-50%,-46%);width:min(900px,calc(100vw - 24px - env(safe-area-inset-left) - env(safe-area-inset-right)));max-height:calc(100vh - 16px);box-sizing:border-box;padding:clamp(8px,2.4vh,14px) clamp(8px,1.4vw,14px);border-radius:16px;background:radial-gradient(ellipse at 50% 40%,#0a1622d9,#050c14b3 70%,#050c1400);opacity:0;transition:opacity .45s,transform .45s;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:clamp(6px,2vh,12px)}
#pirate-story .st-sel.on{opacity:1;transform:translate(-50%,-50%);pointer-events:auto}
#pirate-story .st-sel h2{margin:0;font:700 clamp(18px,5.8vh,30px)/1.1 Georgia,serif;color:#f6e2ae;text-shadow:0 2px 0 #2a1606,0 0 18px #000;letter-spacing:.03em;text-align:center}
#pirate-story .st-sel p.hint{margin:0;font:italic 500 clamp(12px,3.4vh,15px) Georgia,serif;color:#d8e2e6;text-shadow:0 1px 3px #000}
#pirate-story .st-heroes{display:flex;gap:clamp(6px,1.2vw,12px);justify-content:center;width:100%}
#pirate-story .st-hero{position:relative;flex:1 1 0;max-width:168px;min-width:0;height:clamp(176px,58vh,262px);padding:0;border:0;border-radius:6px 6px 12px 12px;background:radial-gradient(ellipse at 50% 32%,color-mix(in srgb,var(--halo),transparent 55%),transparent 66%),linear-gradient(165deg,#193740ee,#06141df7 78%);box-shadow:0 10px 18px #0009;cursor:pointer;overflow:hidden;color:#ffeac6;transition:transform .22s,box-shadow .22s,filter .22s;font-family:Georgia,serif}
#pirate-story .st-hero .halo{position:absolute;inset:10% 6% 34%;background:radial-gradient(ellipse,var(--halo),transparent 68%);opacity:.4;filter:blur(10px)}
#pirate-story .st-hero .frame{position:absolute;inset:0;z-index:4;pointer-events:none;border:2px solid var(--rc);border-radius:6px 6px 12px 12px;box-shadow:inset 0 0 0 1px #03101a,inset 0 0 0 4px color-mix(in srgb,var(--rc),transparent 72%),inset 0 0 18px #000a;clip-path:polygon(10px 0,40% 0,50% 5px,60% 0,calc(100% - 10px) 0,100% 10px,100% calc(100% - 12px),calc(100% - 12px) 100%,60% 100%,50% calc(100% - 5px),40% 100%,12px 100%,0 calc(100% - 12px),0 10px)}
#pirate-story .st-hero[data-rarity=legendary] .frame{border-color:#f2cf7a;box-shadow:inset 0 0 0 1px #03101a,inset 0 0 0 4px #e9b95a55,inset 0 0 22px #f0b84a33}
#pirate-story .st-hero img.art{position:absolute;z-index:1;left:4%;top:10px;width:92%;height:72%;object-fit:contain;object-position:center bottom;filter:drop-shadow(0 7px 4px #0008)}
#pirate-story .st-hero[data-hero=scarlet] img.art{top:2px;height:78%;width:100%;left:0}
#pirate-story .st-hero .lv{position:absolute;z-index:5;left:7px;top:7px;width:30px;padding:2px 0 4px;text-align:center;font:700 17px/1 Georgia,serif;color:#fff0cd;background:linear-gradient(#173540,#0a1d26);border:1px solid #d9b25f;clip-path:polygon(0 0,100% 0,100% 82%,50% 100%,0 82%)}
#pirate-story .st-hero .lv small{display:block;font:700 6px/1.4 system-ui,sans-serif;letter-spacing:.8px;color:#e8c47c}
#pirate-story .st-hero .pennant{position:absolute;z-index:5;left:50%;top:9px;transform:translateX(-50%) scale(.6);opacity:0;padding:2px 10px;font:700 9px/1.4 system-ui,sans-serif;letter-spacing:1.4px;color:#fff3d6;background:linear-gradient(#b0382c,#7c1f17);border:1px solid #e7b860;white-space:nowrap;transition:opacity .2s,transform .25s}
#pirate-story .st-hero .info{position:absolute;z-index:3;left:3px;right:3px;bottom:0;padding:18px 8px 9px;text-align:center;background:linear-gradient(transparent,#0b1b23ed 22%,#07161efc 58%);border-radius:0 0 10px 10px;display:flex;flex-direction:column;align-items:stretch;gap:2px}
#pirate-story .st-hero .rar{font:700 8px/1 system-ui,sans-serif;letter-spacing:1.6px;text-transform:uppercase;color:var(--rc)}
#pirate-story .st-hero .nm{font:600 clamp(17px,5.4vh,24px)/1.05 Georgia,serif;color:#ffeac6;text-shadow:0 2px 3px #000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pirate-story .st-hero .nm{background:linear-gradient(100deg,#ffd98a 38%,#fffaf0 50%,#ffd98a 62%) 0 0/250% 100%;-webkit-background-clip:text;background-clip:text}
#pirate-story .st-hero[aria-checked=true] .nm{background:none;color:#ffd98a;animation:st-glow 1.6s ease-in-out infinite}
@keyframes st-glow{50%{text-shadow:0 2px 3px #000,0 0 12px #ffc855cc}}
@keyframes st-shine{from{background-position:120% 0}to{background-position:-130% 0}}
#pirate-story .st-hero .tg{font:500 clamp(8px,2.6vh,10px)/1.2 system-ui,sans-serif;color:#c5c9b9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pirate-story .st-hero .stars{display:flex;justify-content:center;gap:2px;margin:3px 0 2px}
#pirate-story .st-hero .stars i{width:clamp(10px,3.4vh,14px);height:clamp(10px,3.4vh,14px);background:#edc46d;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);filter:drop-shadow(0 1px 0 #301b09)}
#pirate-story .st-hero .stars i.off{background:#203034}
#pirate-story .st-hero .bar{height:4px;border:1px solid #a4ac8366;background:#020c13;border-radius:3px;overflow:hidden}
#pirate-story .st-hero .bar i{display:block;height:100%;background:linear-gradient(90deg,#427c7a,#a0d6c0);box-shadow:0 0 6px #86cbb666}
#pirate-story .st-hero .frag{font:600 clamp(9px,2.7vh,11px)/1.3 system-ui,sans-serif;color:#d9dccb}
#pirate-story .st-hero .ck{position:absolute;z-index:6;right:7px;top:7px;width:22px;height:22px;border-radius:50%;background:#f2cf74;color:#2b1806;display:none;align-items:center;justify-content:center;box-shadow:0 2px 6px #000a}
#pirate-story .st-hero .ck svg{width:14px;height:14px}
#pirate-story .st-hero{box-shadow:0 0 14px 1px #3a9fd655,0 10px 18px #0009}
#pirate-story .st-hero .frame{animation:st-blue 2.6s ease-in-out infinite}
@keyframes st-blue{50%{box-shadow:inset 0 0 0 1px #03101a,inset 0 0 0 4px #7fc8e866,inset 0 0 26px #4fb3e855}}
#pirate-story .st-hero[aria-checked=true]{--rc:#f2cf7a;--halo:#d9a441;transform:translateY(-5px);box-shadow:0 0 0 2px #fff0c2,0 0 30px 7px #f2b84acc,0 12px 20px #000a}
#pirate-story .st-hero[aria-checked=true] .frame{animation:st-gold 1.6s ease-in-out infinite}
@keyframes st-gold{50%{box-shadow:inset 0 0 0 1px #03101a,inset 0 0 0 4px #ffd98a88,inset 0 0 30px #ffc8554d}}
#pirate-story .st-hero .info{padding-bottom:14px;gap:4px}
#pirate-story .st-hero[aria-checked=true] .ck{display:flex}
#pirate-story .st-hero[aria-checked=true] .pennant{opacity:1;transform:translateX(-50%) scale(1)}
#pirate-story .st-heroes:has([aria-checked=true]) .st-hero[aria-checked=false]{filter:brightness(.72) saturate(.85)}
#pirate-story .st-hero.pop{animation:st-pop .32s ease-out}
#pirate-story .st-hero img.art.act{animation:st-act-hop .55s ease-out}
#pirate-story .st-hero[data-hero=scarlet] img.art.act{animation:st-act-spin .6s ease-out;transform-origin:70% 40%}
#pirate-story .st-hero[data-hero=crab] img.art.act{animation:st-act-clack .5s steps(6)}
#pirate-story .st-hero[data-hero=shark] img.art.act{animation:st-act-chomp .5s ease-out}
#pirate-story .st-hero[data-hero=captain] img.art.act{animation:st-act-salute .7s ease-out;transform-origin:50% 100%}
@keyframes st-act-hop{35%{transform:translateY(-14px)}70%{transform:translateY(2px)}}
@keyframes st-act-spin{30%{transform:rotate(-8deg) translateY(-6px)}60%{transform:rotate(6deg)}}
@keyframes st-act-clack{20%,60%{transform:translateX(-4px) scale(1.03)}40%,80%{transform:translateX(4px) scale(1.03)}}
@keyframes st-act-chomp{30%{transform:scale(1.1,.92)}60%{transform:scale(.96,1.06)}}
@keyframes st-act-salute{40%{transform:scale(1.06) rotate(-3deg)}}
@keyframes st-pop{40%{transform:translateY(-9px) scale(1.04)}}
#pirate-story .st-hero:focus-visible{outline:3px solid #fff}
#pirate-story .st-rotate{position:absolute;inset:0;z-index:12;display:none;align-items:center;justify-content:center;padding:24px;text-align:center;background:#02070cf0;font:600 18px/1.4 Georgia,serif;color:#f1dfb5}
@media (orientation:portrait){#pirate-story .st-rotate{display:flex}}
@media (max-height:380px){#pirate-story .st-hero .pennant{top:auto;bottom:44%}#pirate-story .st-sel p.hint{display:none}#pirate-story .st-hero .tg{display:none}#pirate-story .st-hero .info{padding-top:12px;gap:1px}#pirate-story .st-hero img.art{height:70%}}
@media (prefers-reduced-motion:reduce){#pirate-story .st-next svg{animation:none}#pirate-story .st-bar,#pirate-story .st-dlg,#pirate-story .st-sel{transition:none}}
.pf-story-objective{position:absolute;z-index:30;right:calc(76px + env(safe-area-inset-right));top:calc(12px + env(safe-area-inset-top));transform:translateY(-12px);opacity:0;transition:opacity .5s,transform .5s;padding:9px 18px 10px;border-radius:12px;background:linear-gradient(180deg,#132433f0,#0a1520f0);border:1px solid #b88f4a;box-shadow:0 10px 22px #000a;color:#f6eedc;font:500 clamp(13px,3.6vh,16px)/1.3 Georgia,serif;text-align:center;max-width:min(460px,calc(100vw - 330px));box-sizing:border-box;pointer-events:none}
.pf-story-objective small{display:block;font:700 11px/1 Georgia,serif;letter-spacing:.14em;text-transform:uppercase;color:#e6c27a;margin-bottom:4px}
.pf-story-objective.on{opacity:1;transform:none}
.pf-story-shield{position:fixed;inset:0;z-index:29999;background:transparent}
.pf-story-replay{margin:2px 0 10px;min-height:44px}
`;
const ICON={skip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5l8 7-8 7zM13 5l8 7-8 7z"/></svg>',next:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>'};
function style(){if(document.getElementById('pirate-story-style'))return;const s=document.createElement('style');s.id='pirate-story-style';s.textContent=CSS;document.head.append(s)}

/* ------------------------------------------------------------------ audio (synthesised, optional)
 * No voice. Ambience + environmental + action SFX built from noise/oscillators at runtime:
 * sea swell, wave wash, wind, rain, hull creak and slap (sea); surf lapping, gulls, insects (coast);
 * fire roar + crackle loop scaled by fire intensity; cannon boom (near/far), projectile whoosh,
 * wood-crack impact with splinter ticks, splash, thunder, mast crack, anchor drop, branch snap. */
class Sound{
 constructor(enabled){this.enabled=enabled;this.ac=null;this.loops=[];this.timers={};this.env=null;this.fire=0;this.played=[]}
 note(n){if(this.played[this.played.length-1]!==n){this.played.push(n);if(this.played.length>200)this.played.shift()}}
 ensure(){if(!this.enabled)return null;try{if(!this.ac){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;this.ac=new AC();
   const lim=this.ac.createDynamicsCompressor();lim.threshold.value=-16;lim.ratio.value=6;lim.connect(this.ac.destination);this.out=this.ac.createGain();this.out.gain.value=.6;this.out.connect(lim);
   this.ambBus=this.ac.createGain();this.ambBus.gain.value=.85;this.ambBus.connect(this.out);this.sfxBus=this.ac.createGain();this.sfxBus.gain.value=1.15;this.sfxBus.connect(this.out);
   const n=this.ac.sampleRate*3,b=this.ac.createBuffer(1,n,this.ac.sampleRate),d=b.getChannelData(0);let last=0;for(let i=0;i<n;i++){const w=Math.random()*2-1;d[i]=w}this.noise=b;
   const br=this.ac.createBuffer(1,n,this.ac.sampleRate),bd=br.getChannelData(0);for(let i=0;i<n;i++){last=(last+.02*(Math.random()*2-1))/1.02;bd[i]=last*3.5}this.brown=br;
   if(this.pendingEnv)this.ambience(this.pendingEnv);if(this.musicKind)this.music(this.musicKind)}
  if(this.ac.state==='suspended')this.ac.resume().catch(()=>{})}catch{this.enabled=false;return null}return this.ac}
 src(buf=this.noise,loop=false){const s=this.ac.createBufferSource();s.buffer=buf;s.loop=loop;return s}
 burst({dur=.6,freq=800,to=0,type='lowpass',gain=.6,q=.7,attack=.005,tone=0,toneTo=0,toneGain=0,toneType='sine',delay=0,bus,buf}={}){const ac=this.ensure();if(!ac)return;const t=ac.currentTime+delay;const s=this.src(buf||this.noise);const f=ac.createBiquadFilter();f.type=type;f.frequency.setValueAtTime(freq,t);if(to)f.frequency.exponentialRampToValueAtTime(to,t+dur);f.Q.value=q;const g=ac.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+attack);g.gain.exponentialRampToValueAtTime(.0008,t+dur);s.connect(f);f.connect(g);g.connect(bus||this.sfxBus);s.start(t,Math.random()*2);s.stop(t+dur+.05);
  if(tone){const o=ac.createOscillator(),og=ac.createGain();o.type=toneType;o.frequency.setValueAtTime(tone,t);o.frequency.exponentialRampToValueAtTime(toneTo||tone*.45,t+dur);og.gain.setValueAtTime(0,t);og.gain.linearRampToValueAtTime(toneGain,t+Math.min(.02,dur/4));og.gain.exponentialRampToValueAtTime(.0008,t+dur);o.connect(og);og.connect(bus||this.sfxBus);o.start(t);o.stop(t+dur+.05)}}
 /* action SFX */
 cannon(dist=1,delay=0){this.note('cannon');const far=dist>1;this.burst({dur:far?1.4:1.1,freq:far?900:1600,to:far?120:180,gain:far?.45:.85,tone:far?48:62,toneTo:30,toneGain:far?.4:.75,delay});this.burst({dur:2.2,freq:400,to:90,gain:far?.12:.18,attack:.12,delay:delay+.18,buf:this.brown})}
 whoosh(dur=.6,delay=0){this.note('whoosh');this.burst({dur,freq:500,to:2400,type:'bandpass',q:2.5,gain:.16,attack:dur*.7,delay})}
 impact(){this.note('impact');this.burst({dur:.08,freq:3200,type:'bandpass',q:2,gain:.9});this.burst({dur:.55,freq:700,to:160,gain:.55,tone:95,toneTo:45,toneGain:.45,delay:.01});
  for(let i=0;i<6;i++)this.burst({dur:.04+Math.random()*.05,freq:1800+Math.random()*2600,type:'bandpass',q:4,gain:.22+Math.random()*.2,delay:.05+Math.random()*.35});this.burst({dur:1.2,freq:900,to:300,gain:.1,attack:.1,delay:.2,buf:this.brown})}
 splash(big=1){this.note('splash');this.burst({dur:.9*big,freq:2400,to:900,type:'highpass',gain:.32*big,attack:.03});this.burst({dur:.35,freq:300,to:90,gain:.25*big,tone:120,toneTo:60,toneGain:.12})}
 snap(){this.note('snap');this.burst({dur:.1,freq:2600,type:'bandpass',q:3,gain:.55});this.burst({dur:.5,freq:5200,type:'highpass',gain:.1,attack:.04,delay:.07})}
 mastCrack(){this.note('mastCrack');this.burst({dur:.9,freq:180,to:420,type:'bandpass',q:6,gain:.35,tone:140,toneTo:70,toneGain:.15,toneType:'sawtooth'});this.burst({dur:.12,freq:2400,type:'bandpass',q:2,gain:.8,delay:.75});this.burst({dur:1.3,freq:500,to:120,gain:.5,delay:.9,buf:this.brown})}
 thunder(delay=.35){this.note('thunder');this.burst({dur:2.6,freq:320,to:70,gain:.55,attack:.25,delay,buf:this.brown});this.burst({dur:1.6,freq:900,to:200,gain:.15,attack:.02,delay})}
 creak(){this.note('creak');this.burst({dur:.7+Math.random()*.5,freq:260+Math.random()*120,to:180,type:'bandpass',q:9,gain:.09,attack:.2,tone:95+Math.random()*40,toneTo:80,toneGain:.03,toneType:'sawtooth',bus:this.ambBus})}
 slap(){this.note('slap');this.burst({dur:.45,freq:380,to:110,gain:.16,attack:.02,bus:this.ambBus,buf:this.brown})}
 wash(strong=1){this.note('wash');this.burst({dur:2.4,freq:700,to:1800,type:'bandpass',q:.6,gain:.14*strong,attack:.9,bus:this.ambBus})}
 gull(){this.note('gull');const ac=this.ensure();if(!ac)return;const t=ac.currentTime;for(let k=0;k<2+Math.floor(Math.random()*2);k++){const o=ac.createOscillator(),g=ac.createGain(),s=t+k*.28;o.type='triangle';o.frequency.setValueAtTime(1700,s);o.frequency.exponentialRampToValueAtTime(1050,s+.22);g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.035,s+.03);g.gain.exponentialRampToValueAtTime(.0008,s+.24);o.connect(g);g.connect(this.ambBus);o.start(s);o.stop(s+.26)}}
 anchor(){this.note('anchor');this.burst({dur:.6,freq:2000,type:'bandpass',q:5,gain:.12,tone:820,toneTo:760,toneGain:.05,toneType:'square'});this.splash(.8)}
 /* arrival / shore SFX */
 scrape(){this.note('scrape');this.burst({dur:1.8,freq:240,to:420,type:'bandpass',q:1.2,gain:.32,attack:.3,buf:this.brown});this.burst({dur:1.4,freq:1800,type:'bandpass',q:.8,gain:.08,attack:.4});this.creak()}
 oar(){this.note('oar');this.burst({dur:.5,freq:1600,to:700,type:'bandpass',q:.9,gain:.14,attack:.05,bus:this.ambBus});this.burst({dur:.25,freq:300,to:120,gain:.08,delay:.05,bus:this.ambBus})}
 step(){this.burst({dur:.09,freq:900,to:300,type:'lowpass',gain:.06,attack:.004,bus:this.ambBus})}
 thud(){this.note('thud');this.burst({dur:.3,freq:420,to:110,gain:.28,tone:110,toneTo:60,toneGain:.14})}
 heroCue(id){this.note('hero:'+id);const B=this.burst.bind(this);
  if(id==='scarlet'){B({dur:.05,freq:3000,type:'bandpass',q:5,gain:.3});B({dur:.35,freq:1400,to:300,gain:.5,tone:180,toneTo:70,toneGain:.25,delay:.14})}
  else if(id==='sailor'){B({dur:.28,freq:900,to:4200,type:'bandpass',q:2,gain:.25,attack:.12});B({dur:.6,freq:2600,type:'bandpass',q:30,gain:.08,tone:1760,toneTo:1700,toneGain:.05,toneType:'triangle',delay:.2})}
  else if(id==='captain'){B({dur:1.1,freq:1200,type:'bandpass',q:40,gain:.06,tone:1180,toneTo:1150,toneGain:.08,toneType:'triangle'});B({dur:.9,freq:1850,type:'bandpass',q:40,gain:.04,tone:1850,toneTo:1820,toneGain:.05,toneType:'triangle'})}
  else if(id==='shark'){this.splash(.6);B({dur:.18,freq:500,to:160,gain:.35,tone:140,toneTo:60,toneGain:.25,delay:.18})}
  else if(id==='crab'){for(let k=0;k<3;k++)B({dur:.04,freq:3800,type:'bandpass',q:6,gain:.35,delay:k*.11})}}
 stinger(){this.note('stinger');this.burst({dur:2.2,freq:200,to:60,gain:.5,attack:.05,buf:this.brown,tone:55,toneTo:41,toneGain:.45,toneType:'sawtooth'});this.burst({dur:1.4,freq:700,type:'bandpass',q:8,gain:.06,tone:233,toneTo:220,toneGain:.07,toneType:'triangle',delay:.1})}
 pluck(f){const ac=this.ensure();if(!ac||!this.musicBus){this.burst({dur:.4,freq:f*2,type:'bandpass',q:12,gain:.08});return}this.tone(ac.currentTime+.01,f,.7,'triangle',.08,2600)}
 rustle(){this.note('map');this.burst({dur:.45,freq:3200,to:1600,type:'bandpass',q:1.5,gain:.12,attack:.08})}
 pick(){this.note('pick');this.burst({dur:.12,freq:2600,type:'bandpass',q:4,gain:.18,tone:880,toneTo:1320,toneGain:.06,toneType:'triangle'})}
 /* music: original synthesised motifs, quiet under the effects */
 music(kind){const ac=this.ensure();this.musicKind=kind;if(!ac){return}this.note('music:'+kind);if(!this.musicBus){this.musicBus=ac.createGain();this.musicBus.connect(this.out)}this.musicBus.gain.setTargetAtTime(kind?.22:0,ac.currentTime,.6);this.nextNote=ac.currentTime+.1;this.step16=0}
 musicTick(){const ac=this.ac;if(!ac||!this.musicKind||!this.musicBus)return;const battle=this.musicKind==='battle',spb=battle?60/104/2:60/62/2;
  while(this.nextNote<ac.currentTime+.35){const t=this.nextNote,i=this.step16++;
   if(battle){const bar=Math.floor(i/16)%4,root=[110,98,87.3,98][bar];
    if(i%4===0)this.drum(t,i%8===0?1:.7);if(i%16===14||i%16===15)this.drum(t,.45,140);
    if(i%2===0)this.tone(t,root*(i%4===0?1:[1.5,2,1.2][(i>>1)%3]),spb*1.8,'sawtooth',.05,900);
    if(i%16===0)this.tone(t,root*2,spb*14,'triangle',.05,1500)}
   else{const bar=Math.floor(i/16)%4,ch=[[220,261.6,329.6],[174.6,220,261.6],[196,246.9,293.7],[164.8,196,246.9]][bar];
    if(i%16===0)for(const f of ch)this.tone(t,f/2,spb*16,'sine',.045,700);
    if(i%3===0&&Math.random()<.55)this.tone(t,ch[Math.floor(Math.random()*3)]*2,.6,'triangle',.03,2400)}
   this.nextNote+=spb}}
 tone(t,f,d,type,g,lp){const ac=this.ac,o=ac.createOscillator(),gn=ac.createGain(),fl=ac.createBiquadFilter();o.type=type;o.frequency.value=f;fl.type='lowpass';fl.frequency.value=lp;gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(g,t+Math.min(.08,d*.2));gn.gain.exponentialRampToValueAtTime(.0005,t+d);o.connect(fl);fl.connect(gn);gn.connect(this.musicBus);o.start(t);o.stop(t+d+.05)}
 drum(t,v,f=62){const ac=this.ac,o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(f*2,t);o.frequency.exponentialRampToValueAtTime(f*.6,t+.25);g.gain.setValueAtTime(.55*v,t);g.gain.exponentialRampToValueAtTime(.0005,t+.35);o.connect(g);g.connect(this.musicBus);o.start(t);o.stop(t+.4)}
 crackle(){this.note('crackle');this.burst({dur:.015+Math.random()*.03,freq:2200+Math.random()*3000,type:'bandpass',q:3,gain:(.08+Math.random()*.14)*Math.min(1,this.fire),bus:this.sfxBus})}
 /* layered ambience loops */
 loop(buf,{type='lowpass',freq=500,q=.7,gain=.2,lfo=0,lfoDepth=0,lfoTarget='gain'}={}){const ac=this.ac,s=this.src(buf,true),f=ac.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q;const g=ac.createGain();g.gain.value=gain;s.connect(f);f.connect(g);g.connect(this.ambBus);s.start(0,Math.random()*2);const nodes={s,g,f};
  if(lfo){const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=lfo;lg.gain.value=lfoDepth;l.connect(lg);lg.connect(lfoTarget==='freq'?f.frequency:g.gain);l.start();nodes.l=l}this.loops.push(nodes);return nodes}
 ambience(kind){this.note('ambience:'+kind);this.env=kind;if(!this.ac){this.pendingEnv=kind;this.ensure();return}this.stopAmbience();this.env=kind;
  if(kind==='sea'){this.loop(this.brown,{freq:420,gain:.32,lfo:.13,lfoDepth:.14});this.loop(this.noise,{type:'bandpass',freq:900,q:.5,gain:.05,lfo:.07,lfoDepth:500,lfoTarget:'freq'});this.loop(this.noise,{type:'highpass',freq:5200,gain:.028,lfo:.3,lfoDepth:.008})}
  else{this.loop(this.brown,{freq:300,gain:.2,lfo:.09,lfoDepth:.08});this.loop(this.noise,{type:'highpass',freq:6500,gain:.008,lfo:6,lfoDepth:.004});this.loop(this.noise,{type:'bandpass',freq:650,q:.5,gain:.025,lfo:.05,lfoDepth:200,lfoTarget:'freq'})}
  const r=this.loop(this.brown,{freq:260,gain:0});this.fireLoop=r;this.timers={wash:1,creak:2,slap:.6,gull:4,crackle:0};}
 setFire(level){this.fire=level;if(this.fireLoop&&this.ac)this.fireLoop.g.gain.setTargetAtTime(Math.min(.22,level*.14),this.ac.currentTime,.4)}
 tick(dt,st={}){if(!this.ac||!this.enabled||this.ac.state!=='running')return;const T=this.timers;for(const k in T)T[k]-=dt;
  if(this.env==='sea'){if(T.wash<=0){this.wash(1);T.wash=3+Math.random()*3}if(T.creak<=0){this.creak();T.creak=2.2+Math.random()*2.6}if(T.slap<=0&&st.bobDown){this.slap();T.slap=1.6+Math.random()}}
  else if(this.env){if(T.wash<=0){this.wash(.7);T.wash=4+Math.random()*3}if(T.gull<=0){this.gull();T.gull=7+Math.random()*7}if(T.creak<=0){this.creak();T.creak=5+Math.random()*4}}
  this.musicTick();
  if(this.fire>0&&T.crackle<=0){this.crackle();T.crackle=(.04+Math.random()*.16)/Math.max(.3,this.fire)}}
 stopAmbience(){for(const n of this.loops){try{n.s.stop();n.l?.stop()}catch{}}this.loops=[];this.fireLoop=null}
 suspend(){try{this.ac?.suspend()}catch{}}resume(){if(this.ac&&this.enabled)try{this.ac.resume()}catch{}}
 close(){this.musicKind=null;this.stopAmbience();try{this.ac?.close()}catch{}this.ac=null}
}

/* ------------------------------------------------------------------ particles */
class Particles{
 constructor(max=420){this.list=[];this.max=max}
 add(p){if(this.list.length>=this.max)this.list.shift();this.list.push({age:0,rot:0,vr:0,g:0,drag:0,...p})}
 step(dt){for(const p of this.list){p.age+=dt;p.vy+=p.g*dt;if(p.drag){p.vx*=1-p.drag*dt;p.vy*=1-p.drag*dt}p.x+=p.vx*dt;p.y+=p.vy*dt;p.rot+=p.vr*dt}this.list=this.list.filter(p=>p.age<p.life)}
 draw(c,layer){for(const p of this.list){if(p.layer!==layer)continue;const k=p.age/p.life;c.save();
  if(p.kind==='smoke'){const r=p.r*(1+k*p.grow);c.globalAlpha=p.a*(k<.15?k/.15:1-k)*.9;const g=c.createRadialGradient(p.x,p.y,0,p.x,p.y,r);g.addColorStop(0,p.color);g.addColorStop(1,'rgba(30,30,34,0)');c.fillStyle=g;c.beginPath();c.arc(p.x,p.y,r,0,TAU);c.fill()}
  else if(p.kind==='fire'){c.globalCompositeOperation='lighter';const r=p.r*(1-k*.6);c.globalAlpha=(1-k)*.9;const g=c.createRadialGradient(p.x,p.y,0,p.x,p.y,r);g.addColorStop(0,'rgba(255,236,170,.95)');g.addColorStop(.4,'rgba(255,140,40,.7)');g.addColorStop(1,'rgba(200,40,10,0)');c.fillStyle=g;c.beginPath();c.arc(p.x,p.y,r,0,TAU);c.fill()}
  else if(p.kind==='spark'){c.globalCompositeOperation='lighter';c.globalAlpha=1-k;c.strokeStyle=p.color||'#ffd27a';c.lineWidth=p.w||1.6;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(p.x-p.vx*.03,p.y-p.vy*.03);c.stroke()}
  else if(p.kind==='splinter'){c.globalAlpha=k>.8?(1-k)*5:1;c.translate(p.x,p.y);c.rotate(p.rot);c.fillStyle=p.color||'#7a5230';c.fillRect(-p.r,-p.r*.22,p.r*2,p.r*.44);c.fillStyle='rgba(255,220,170,.35)';c.fillRect(-p.r,-p.r*.22,p.r*2,p.r*.12)}
  else if(p.kind==='drop'){c.globalAlpha=(1-k)*p.a;c.fillStyle=p.color||'#dfeaf2';c.beginPath();c.arc(p.x,p.y,p.r*(1-k*.4),0,TAU);c.fill()}
  else if(p.kind==='flash'){c.globalCompositeOperation='lighter';c.globalAlpha=(1-k)*(1-k);const g=c.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);g.addColorStop(0,'rgba(255,248,220,1)');g.addColorStop(.3,'rgba(255,190,90,.8)');g.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=g;c.beginPath();c.arc(p.x,p.y,p.r,0,TAU);c.fill()}
  else if(p.kind==='leaf'){c.globalAlpha=1-k;c.translate(p.x,p.y);c.rotate(p.rot);c.fillStyle=p.color||'#2f5a3c';c.beginPath();c.ellipse(0,0,p.r,p.r*.4,0,0,TAU);c.fill()}
  else if(p.kind==='bird'){c.globalAlpha=Math.min(1,(1-k)*3);c.strokeStyle='#0d1418';c.lineWidth=1.6;const f=Math.sin(p.age*16+p.seed)*p.r*.6;c.beginPath();c.moveTo(p.x-p.r,p.y-f);c.quadraticCurveTo(p.x-p.r*.4,p.y-p.r*.2,p.x,p.y);c.quadraticCurveTo(p.x+p.r*.4,p.y-p.r*.2,p.x+p.r,p.y-f);c.stroke()}
  else if(p.kind==='mote'){c.globalAlpha=Math.sin(k*Math.PI)*p.a;c.fillStyle=p.color||'#cfe0ea';c.beginPath();c.arc(p.x,p.y,p.r,0,TAU);c.fill()}
  c.restore()}}
}

/* ------------------------------------------------------------------ ship rendering */
const MASTS=[
 {id:'fore',x:100,top:-300,yards:[{y:-124,w:126,h:66,sail:'foreCourse'},{y:-206,w:104,h:62,sail:'foreTop',torn:'foreTopTorn'},{y:-266,w:70,h:0}]},
 {id:'main',x:5,top:-338,nest:-228,yards:[{y:-132,w:148,h:74,sail:'mainCourse',torn:'mainCourseTorn'},{y:-224,w:122,h:70,sail:'mainTop'},{y:-292,w:86,h:50,sail:'mainGallant'}]},
 {id:'mizzen',x:-112,top:-262,yards:[{y:-232,w:72,h:0}]}
];
function shipToWorld(st,lx,ly){const sx=st.scale*st.flip,sy=st.scale,c=Math.cos(st.roll),s=Math.sin(st.roll);const x=lx*sx,y=ly*sy;return{x:st.x+x*c-y*s,y:st.y+x*s+y*c}}
function drawSail(c,img,x,y,w,h,t,wind,phase,shade){
 const N=9,iw=img.width/N;for(let i=0;i<N;i++){const u=(i+.5)/N,bel=Math.sin(Math.PI*u);const hh=h*(1+.045*wind*bel+.018*Math.sin(t*3.1+phase+i*.7)),dx=x+i*w/N+Math.sin(t*2.2+phase+i*.45)*.9*wind;
  c.drawImage(img,i*iw,0,iw+.5,img.height,dx,y,w/N+.6,hh);
  const a=.06+.07*Math.sin(t*2.7+i*.95+phase);if(a>0){c.fillStyle=`rgba(${shade},${a})`;c.fillRect(dx,y+2,w/N+.6,hh-4)}}
}
function drawFigure(c,x,y,s,col,{hat=false,t=0,arm=0,scope=false}={}){c.save();c.translate(x,y);c.scale(s,s);c.fillStyle=col;c.beginPath();c.ellipse(0,-11,4.2,7.5,0,0,TAU);c.fill();c.fillRect(-3.4,-5,2.6,7);c.fillRect(.8,-5,2.6,7);c.beginPath();c.arc(0,-22,3.8,0,TAU);c.fill();
 c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(-3,-15);c.lineTo(-6,-9+Math.sin(t)*2);c.moveTo(3,-15);c.lineTo(7,-14-arm*6);c.stroke();
 if(hat){c.beginPath();c.moveTo(-7,-24);c.quadraticCurveTo(0,-32,7,-24);c.closePath();c.fill()}if(scope){c.lineWidth=2.4;c.beginPath();c.moveTo(4,-22);c.lineTo(12,-24);c.stroke()}c.restore()}
function drawShip(c,m,st,t){
 const P=m.pal,HB=ART().HULL_BOX;c.save();c.translate(st.x,st.y+(st.bob||0));c.rotate(st.roll);c.scale(st.scale*st.flip,st.scale);c.globalAlpha=st.alpha??1;
 const wind=st.wind??1,lw=1/Math.max(.2,st.scale);
 // masts and yards
 for(const ms of MASTS){const broken=ms.id==='fore'&&st.foreBroken>0,mainBroken=ms.id==='main'&&st.mainBroken>0;
  const g=c.createLinearGradient(ms.x-4,0,ms.x+4,0);g.addColorStop(0,'#2a180b');g.addColorStop(.5,P===ART().PALETTES.enemy?'#2e2a30':'#6a4425');g.addColorStop(1,'#1f1208');c.fillStyle=g;
  const cut=broken?-182:mainBroken?-252:ms.top;c.beginPath();c.moveTo(ms.x-4.5,-40);c.lineTo(ms.x+4.5,-40);c.lineTo(ms.x+2.5,cut);c.lineTo(ms.x-2.5,cut);c.closePath();c.fill();
  if(broken){c.save();c.translate(ms.x,-182);c.rotate(st.foreBroken*1.05);c.fillStyle=g;c.fillRect(-2.4,ms.top+182,4.8,-ms.top-182+2);c.fillStyle='#2a180b';c.fillRect(-35,-84,70,3);c.restore()}
  if(mainBroken){c.save();c.translate(ms.x,-252);c.rotate(-st.mainBroken*1.25);c.fillStyle=g;c.fillRect(-2.2,ms.top+252,4.4,-ms.top-252+2);c.fillStyle='#24150a';c.fillRect(-45,-40,90,3.5);c.restore();c.fillStyle='#e9d6b0';c.beginPath();c.moveTo(ms.x-3,-252);c.lineTo(ms.x,-258);c.lineTo(ms.x+3,-252);c.fill()}
  if(ms.nest){c.fillStyle='#2a180b';c.fillRect(ms.x-14,ms.nest,28,6);c.strokeStyle='#1a0e06';c.lineWidth=1.2*lw;c.strokeRect(ms.x-12,ms.nest-9,24,9)}
  for(const y of ms.yards){if(broken&&y.y<-182||mainBroken&&y.y<-252)continue;c.fillStyle='#24150a';c.fillRect(ms.x-y.w/2-3,y.y-2.2,y.w+6,4.4)}}
 // square sails (billowing strips)
 const shade=P===ART().PALETTES.enemy?'0,0,0':'20,26,40';
 for(const ms of MASTS)for(const [i,y] of ms.yards.entries()){if(!y.sail)continue;const broken=ms.id==='fore'&&st.foreBroken>0;
  if(broken&&y.sail==='foreTop'){c.save();c.translate(ms.x,-182);c.rotate(st.foreBroken*1.05);const img=m.sails.foreTopTorn;drawSail(c,img,-y.w/2,y.y+182,y.w,y.h*.85,t,wind*1.6,i+ms.x,shade);c.restore();continue}
  if(ms.id==='main'&&st.mainBroken>0&&y.sail==='mainGallant'){c.save();c.translate(ms.x,-252);c.rotate(-st.mainBroken*1.25);drawSail(c,m.sails.mainCourseTorn,-y.w/2,y.y+252,y.w,y.h*.8,t,wind*1.8,3,shade);c.restore();continue}
  const set=st.reef?.[y.sail]??1;if(set<=0)continue;const img=(st.torn&&y.torn&&m.sails[y.torn])||m.sails[y.sail];drawSail(c,img,ms.x-y.w/2,y.y+2,y.w,y.h*set,t,wind,i*1.7+ms.x*.01,shade)}
 // spanker (gaff sail aft of the mizzen) and jib
 c.save();c.translate(-112,-238);c.scale(-1,1);drawSail(c,m.sails.spanker,0,0,92,168*(.98+.02*Math.sin(t*2.4)),t,wind*.6,4,shade);c.restore();
 c.fillStyle='#24150a';c.save();c.translate(-112,-238);c.rotate(.18);c.fillRect(-94,-2,94,3.5);c.restore();
 const jibSway=Math.sin(t*2.3)*2*wind;c.beginPath();c.moveTo(100,-262);c.quadraticCurveTo(190+jibSway,-170,262,-110);c.lineTo(150,-78);c.quadraticCurveTo(128+jibSway,-170,100,-262);c.closePath();const jg=c.createLinearGradient(100,-262,200,-90);jg.addColorStop(0,P.sail[0]);jg.addColorStop(1,P.sail[2]);c.fillStyle=jg;c.fill();c.strokeStyle='rgba(30,20,10,.5)';c.lineWidth=.8*lw;c.stroke();
 // hull layers
 c.drawImage(m.hull,HB.x0,HB.y0,HB.x1-HB.x0,HB.y1-HB.y0);
 if(m.damage&&st.damage>0){c.globalAlpha=(st.alpha??1)*clamp(st.damage,0,1);c.drawImage(m.damage,HB.x0,HB.y0,HB.x1-HB.x0,HB.y1-HB.y0);c.globalAlpha=st.alpha??1}
 // rigging: shrouds and stays (cut lines dangle after the rigging cue)
 c.strokeStyle=P===ART().PALETTES.enemy?'rgba(10,10,12,.85)':'rgba(24,15,8,.85)';c.lineWidth=.9*lw;c.beginPath();
 const sh=ART().sheer;for(const ms of MASTS){const top=ms.id==='fore'&&st.foreBroken>0?-182:ms.top+18;for(const dx of [-24,-14,14,24]){c.moveTo(ms.x+dx,sh(ms.x+dx)-6);c.lineTo(ms.x+dx*.15,top)}}
 c.moveTo(5,-320);c.lineTo(st.foreBroken>0?100:100,st.foreBroken>0?-182:-282);if(!st.cut){c.moveTo(100,-282);c.lineTo(262,-110)}c.moveTo(-112,-250);c.lineTo(5,-300);c.moveTo(-112,-250);c.lineTo(-196,-112);c.stroke();
 if(st.cut){c.beginPath();const sw=Math.sin(t*2.1)*14;c.moveTo(100,-262);c.quadraticCurveTo(130+sw,-180,118+sw*1.4,-112);c.moveTo(5,-300);c.quadraticCurveTo(46-sw,-240,40-sw,-170);c.stroke()}
 // pennant
 const top=MASTS[1].top;c.fillStyle=P.flag;c.beginPath();c.moveTo(5,top);for(let i=0;i<=6;i++){c.lineTo(5-i*6,top+3+Math.sin(t*6-i*.9)*2.5*wind)}for(let i=6;i>=0;i--){c.lineTo(5-i*6,top+3+Math.sin(t*6-i*.9)*2.5*wind+7-i*.9)}c.closePath();c.fill();
 // story crew on deck (detailed chibi NPCs at ship scale)
 if(st.crew&&P!==ART().PALETTES.enemy){const D=ART().drawCrew,k=.52;D(c,-150,sh(-150)-1,k,'captain',{t,pose:st.panic?'point':'idle',dir:1});
  const run=st.panic?1:0;for(const [i,id,bx] of [[0,'rook',-40],[1,'bosun',44],[2,'mo',118]]){const off=run?Math.sin(t*1.4+i*2.1)*26:Math.sin(t*.4+i)*3;const dir=run?(Math.cos(t*1.4+i*2.1)>=0?1:-1):1;D(c,bx+off,sh(bx+off)-1,k,id,{t:t+i,pose:run?'walk':'idle',dir})}
  D(c,8,MASTS[1].nest+2,.42,'lookout',{t,pose:st.panic?'point':'scope',dir:1})}
 // stern lantern glow (additive)
 if(st.lights!==false){c.globalCompositeOperation='lighter';const lg=c.createRadialGradient(-198,-121,0,-198,-121,46);lg.addColorStop(0,'rgba(255,190,90,.35)');lg.addColorStop(1,'rgba(255,190,90,0)');c.fillStyle=lg;c.beginPath();c.arc(-198,-121,46,0,TAU);c.fill()}
 c.restore();
}
function drawPaintedShip(c,P,kind,st,t){
 const M=P.meta,I=P.img,U=M.unit,[ax,ay]=M.anchor,enemy=kind==='enemy',wind=st.wind??1;
 c.save();c.translate(st.x,st.y+(st.bob||0));c.rotate(st.roll||0);c.scale(st.scale*st.flip*U,st.scale*U);c.translate(-ax,-ay);c.globalAlpha=st.alpha??1;
 const dmg=!enemy&&st.damage>0;
 // hull + rigging (intact or battle-damaged), then billowing sail cloth on top
 c.drawImage(enemy?I['enemy-base']:dmg?I['ship-base-damaged']:I['ship-base'],0,0);
 const sails=enemy?I['enemy-sails']:(st.torn||dmg)?I['ship-sails-torn']:I['ship-sails'];const N=26,sw=sails.width/N;
 for(let i=0;i<N;i++){const x=i*sw,dy=Math.sin(t*2.1+i*.42)*1.6*wind,sy=1+.012*wind*Math.sin(t*1.7+i*.3);c.drawImage(sails,x,0,sw+.6,sails.height,x+Math.sin(t*1.3+i*.25)*.8*wind,dy-(sy-1)*150,sw+.6,sails.height*sy)}
 // topmasts: hang/fall when shot away
 const piece=(img,piv,k,dir)=>{c.save();c.translate(piv[0],piv[1]);c.rotate(dir*k);c.translate(-piv[0]+dir*k*8,-piv[1]+k*14);c.drawImage(img,0,0);c.restore()};
 if(enemy){c.drawImage(I['ship-foretop'],0,0);c.drawImage(I['ship-maintop'],0,0)}
 else{piece((st.torn||dmg)?I['ship-foretop-torn']:I['ship-foretop'],M.foretop.pivot,(st.foreBroken||0)*1.05,1);piece(I['ship-maintop'],M.maintop.pivot,(st.mainBroken||0)*1.2,-1)}
 // flags wave from their poles
 M.flags.forEach((f,i)=>{if(!enemy&&((i===2&&st.foreBroken>0)||(i===1&&st.mainBroken>0)))return;const im=I['flag-'+i],n=10,w=im.width/n;for(let k=0;k<n;k++){const amp=k/n*3.2*wind;c.drawImage(im,k*w,0,w+.5,im.height,f.x+k*w,f.y+Math.sin(t*6.5-k*.8+i)*amp,w+.5,im.height)}});
 // deck crew (story NPCs) and warm lantern pulse
 if(st.crew&&!enemy&&window.PirateStoryArt?.drawCrew){const D=window.PirateStoryArt.drawCrew,k=.62,dk=M.deck;D(c,dk.captain[0],dk.captain[1],k,'captain',{t,pose:st.panic?'point':'idle',dir:1});
  dk.crew.forEach(([x,y],i)=>{const run=st.panic?Math.sin(t*1.4+i*2.1)*26:0;D(c,x+run,y,k,['rook','bosun','mo'][i],{t:t+i,pose:st.panic?'walk':'idle',dir:st.panic&&Math.cos(t*1.4+i*2.1)<0?-1:1})});
  D(c,dk.nest[0],dk.nest[1],.5,'lookout',{t,pose:st.panic?'point':'scope',dir:1})}
 if(st.lights!==false){c.globalCompositeOperation='lighter';const g=c.createRadialGradient(125,232,0,125,232,60);g.addColorStop(0,`rgba(255,180,90,${enemy?.22:.3+.06*Math.sin(t*7)})`);g.addColorStop(1,'rgba(255,160,60,0)');c.fillStyle=g;c.fillRect(65,172,120,120)}
 c.restore();
}
function waveBand(c,{y,amp,len,speed,t,x0,x1,fill,crest,depth=300,phase=0,crestW=1.4}){
 c.beginPath();c.moveTo(x0,y+depth);const step=Math.max(8,len/10);for(let x=x0;x<=x1+step;x+=step){const yy=y+Math.sin(x/len*TAU+t*speed+phase)*amp+Math.sin(x/(len*.37)*TAU-t*speed*1.7+phase)*amp*.35;c.lineTo(x,yy)}c.lineTo(x1+step,y+depth);c.closePath();c.fillStyle=fill;c.fill();
 if(crest){c.strokeStyle=crest;c.lineWidth=crestW;c.beginPath();for(let x=x0;x<=x1+step;x+=step){const yy=y+Math.sin(x/len*TAU+t*speed+phase)*amp+Math.sin(x/(len*.37)*TAU-t*speed*1.7+phase)*amp*.35;x===x0?c.moveTo(x,yy):c.lineTo(x,yy)}c.stroke()}
}

/* ------------------------------------------------------------------ the story player */
class StoryPlayer{
 constructor(game,{mode='first',from=0}={}){this.g=game;this.u=game?.__ui||{lang:'en',sound:false};this.mode=mode;this.sceneIndex=from;this.beatIndex=-1;this.t=0;this.sceneT=0;this.closed=false;this.paused=false;this.cam={x:40,y:270,z:1,tx:40,ty:270,tz:1};this.shake=0;this.fx=new Particles();this.images={};this.listeners=[];this.timers=new Set();this.events=[];
  const s=Save.read();this.hero=(s?.hero&&eligibleHeroes().some(h=>h.id===s.hero))?s.hero:null;if(mode==='replay')this.hero=null;}
 log(e){if(this.events[this.events.length-1]===e)return;this.events.push(e);if(this.events.length>200)this.events.shift()}
 txt(k){return D().text(this.u.lang,k)}
 persist(patch){if(this.mode==='replay')return;Save.write(patch)}
 on(target,type,fn,opts){target.addEventListener(type,fn,opts);this.listeners.push([target,type,fn,opts])}
 later(fn,ms){const id=setTimeout(()=>{this.timers.delete(id);if(!this.closed)fn()},ms);this.timers.add(id);return id}
 /* ---------------- DOM */
 mount(){
  style();const r=document.createElement('section');r.id='pirate-story';r.setAttribute('role','dialog');r.setAttribute('aria-label','Pirate Strike opening story');
  r.innerHTML='<canvas aria-hidden="true"></canvas><div class="st-bar top"></div><div class="st-bar bot"></div><div class="st-caption"></div>'+
   '<button class="st-skip" type="button"></button>'+
   '<div class="st-dlg" aria-live="polite"><div class="st-por"></div><div class="st-panel"><div class="st-name"><span></span><small></small></div><p class="st-text"></p><div class="st-next"></div></div></div>'+
   '<div class="st-sel" role="radiogroup"><h2></h2><p class="hint"></p><div class="st-heroes"></div><button class="st-btn gold st-confirm" type="button" disabled></button></div>'+
   '<div class="st-modal" hidden><div class="st-card"><h3></h3><p></p><div class="st-row"><button class="st-btn st-no" type="button"></button><button class="st-btn gold st-yes" type="button"></button></div></div></div>'+
   '<div class="st-logo"><img alt="Pirate Strike" src="menu-v2/assets/logo.webp"></div><svg class="st-wipe" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H140C128 10 152 20 140 30S128 50 140 60 152 80 140 90 128 100 140 100H0Z" fill="#030a12"/><path d="M140 0C128 10 152 20 140 30S128 50 140 60 152 80 140 90 128 100 140 100" stroke="#9fd3e6" stroke-width="1.2" fill="none" opacity=".55"/></svg><div class="st-fade"></div><div class="st-rotate"></div>';
  document.body.append(r);this.root=r;this.canvas=r.querySelector('canvas');this.ctx=this.canvas.getContext('2d');
  this.el={caption:r.querySelector('.st-caption'),skip:r.querySelector('.st-skip'),dlg:r.querySelector('.st-dlg'),por:r.querySelector('.st-por'),name:r.querySelector('.st-name span'),role:r.querySelector('.st-name small'),text:r.querySelector('.st-text'),next:r.querySelector('.st-next'),sel:r.querySelector('.st-sel'),heroes:r.querySelector('.st-heroes'),confirm:r.querySelector('.st-confirm'),modal:r.querySelector('.st-modal'),fade:r.querySelector('.st-fade')};
  this.el.skip.innerHTML='<span></span>'+ICON.skip;this.el.skip.firstChild.textContent=this.txt('ui.skip');this.el.skip.setAttribute('aria-label',this.txt('ui.skip'));
  this.el.next.innerHTML='<span></span>'+ICON.next;this.el.next.firstChild.textContent=this.txt('ui.continue');
  r.querySelector('.st-rotate').textContent=this.txt('ui.rotate');
  this.on(this.el.skip,'click',e=>{e.stopPropagation();this.askSkip()});
  this.on(r,'pointerdown',e=>{this.sound.ensure();if(e.target.closest('button,.st-sel,.st-modal'))return;e.preventDefault();this.tap()});
  this.on(window,'keydown',e=>{if(this.closed)return;if(e.key===' '||e.key==='Enter'){if(!this.el.modal.hidden||this.selecting)return;e.preventDefault();e.stopImmediatePropagation();this.tap()}else if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();this.el.modal.hidden?this.askSkip():this.closeSkip()}},true);
  this.on(document,'visibilitychange',()=>document.hidden?this.pause():this.resume());
  this.on(window,'pirate:native-pause',()=>this.pause());this.on(window,'pirate:native-resume',()=>{if(!document.hidden)this.resume()});
  this.on(window,'blur',()=>this.pause());this.on(window,'focus',()=>this.resume());this.on(window,'pagehide',()=>this.pause());
  this.on(window,'resize',()=>this.fit());
  // let Sunset Freeport suspend (and hand Back to its predecessor) before the story claims Back
  try{window.PirateHarbor?.tick?.()}catch{}
  this.prevBack=window.__pfBack;this.back=()=>{if(this.closed)return this.prevBack?.()||false;if(!this.el.modal.hidden)this.closeSkip();else if(this.skipAllowed())this.askSkip();return true};window.__pfBack=this.back;
  this.fit();
 }
 fit(){const w=innerWidth,h=innerHeight,dpr=Math.min(window.devicePixelRatio||1,1.5);this.canvas.width=Math.round(w*dpr);this.canvas.height=Math.round(h*dpr);this.k=this.canvas.height/VH;this.W=this.canvas.width/this.k}
 /* ---------------- lifecycle */
 async start(){
  this.sound=new Sound(!!this.u.sound);this.mount();this.g?.__adventure?.nativeMute?.(true);
  try{this.art=ART().build()}catch(e){this.art=null;this.log('art-failed:'+e.message)}
  // optional painted far plate from Level 1 (same environment the hand-off lands in)
  this.loadImage('plate','adventure/assets/harbor.webp');
  this.loadPainted();
  this.loadImage('jungle','story/assets/jungle-edge.webp');
  await this.init3d();if(this.closed)return this;
  this.root.classList.add('cine');this.last=performance.now();this.loop=this.loop.bind(this);this.raf=requestAnimationFrame(this.loop);
  if(!this.s3)this.later(()=>{this.el.fade.style.opacity='0'},60);
  this.enterScene(this.sceneIndex);
  throttle.hold('story');window.PirateStory.active=this;return this;
 }
 /* painted ship layers (derived from the project's painted ship; see story/tools/ship_layers.py) */
 loadPainted(){const B='story/assets/',names=['ship-base','ship-base-damaged','ship-sails','ship-sails-torn','ship-foretop','ship-foretop-torn','ship-maintop','enemy-base','enemy-sails','flag-0','flag-1','flag-2','flag-3'];
  fetch(B+'layers.json').then(r=>{if(!r.ok)throw Error('layers');return r.json()}).then(meta=>Promise.all(names.map(n=>new Promise((ok,no)=>{const im=new Image();im.decoding='async';im.onload=()=>ok([n,im]);im.onerror=()=>no(Error(n));im.src=B+n+'.webp'}))).then(list=>{if(!this.closed)this.painted={meta,img:Object.fromEntries(list)};this.log('painted-ship')})).catch(e=>this.log('missing:painted '+e.message))}
 drawShipAny(c,kind,st,t){if(this.painted)drawPaintedShip(c,this.painted,kind,st,t);else drawShip(c,kind==='enemy'?this.art.enemy:this.art.hero,st,t)}
 loadImage(key,src){const im=new Image();im.decoding='async';im.onload=()=>{if(!this.closed)this.images[key]=im};im.onerror=()=>this.log('missing:'+src);im.src=src;return im}
 /* 3D stage (harbor/harbor3d/harbor3d.js → PirateStory3D): draws both environments in 3D; the script, dialogue, sound,
  * hero selection and hand-off stay here. Falls back to the painted 2D stage without WebGL2, on load errors,
  * or with localStorage pf-story-2d=1. */
 async init3d(){let off=false;try{off=localStorage.getItem('pf-story-2d')==='1'}catch{}if(off)return;
  try{if(!document.createElement('canvas').getContext('webgl2'))return;
   if(!window.PirateStory3D)await new Promise((ok,no)=>{const sc=document.createElement('script');sc.src='harbor/harbor3d/harbor3d.js';sc.onload=ok;sc.onerror=()=>no(Error('story3d script'));document.head.append(sc);setTimeout(()=>no(Error('story3d timeout')),15000)});
   if(this.closed||!window.PirateStory3D)return;this.s3=window.PirateStory3D.create(this.root,{base:'harbor/harbor3d/'});if(this.paused||document.hidden)this.s3.pause();this.log('stage:3d')}catch(e){this.log('stage:2d '+(e?.message||e));this.s3=null}}
 drop3d(e){if(!this.s3)return;this.log('stage:2d '+(e?.message||e));try{this.s3.dispose()}catch{}this.s3=null;this.s3on=false;this.el.fade.style.opacity='0'}
 env3d(env){if(!this.s3)return Promise.resolve();this.s3on=false;this.el.fade.style.transition='opacity .45s ease';this.el.fade.style.opacity='1';
  const p=Promise.race([this.s3.setEnv(env),new Promise((_,no)=>setTimeout(()=>no(Error('env timeout')),20000))]).then(()=>{if(this.closed||!this.s3)return;this.s3on=true;this.el.fade.style.opacity='0'}).catch(e=>this.drop3d(e));this.s3busy=p;return p}
 render3d(){const c=this.ctx,cv=this.canvas;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);if(this.env!=='shore')return;
  const r=cv.width/(cv.clientWidth||innerWidth),s3=this.s3,H0=78;
  const draw=(id,sk,dir,anim,hop)=>{const a=s3.anchor(id);if(!a||!sk)return;const f=a.px*r/H0;c.save();c.setTransform(f,0,0,f,a.x*r,a.y*r-(hop||0)*f);sk.scale=sk.id==='scarlet'?HERO_SCALE.scarlet:HERO_SCALE.frames;
   const p={x:-15,y:-48,w:30,h:48,dir,anim,attack:0,throwT:0,inv:0,hurtT:0,dash:0,dead:false,animT:0,landT:0};try{sk.draw(c,p,{time:this.t+a.x*.001})}catch(e){this.log('cast-draw:'+e.message)}c.restore();return a};
  if(this.cast)for(const m of this.cast){if(this.heroActor?.vis&&m.id===this.hero)continue;const sk=this.castSkins?.[m.id];if(!sk)continue;const focus=this.rollFocus&&this.rollFocus!==m.id?this.rollFocus:null;
   const a=draw(m.id,sk,m.dir,m.hopT>0?'jump':'idle',m.hopT>0?Math.sin(m.hopT/.35*Math.PI)*16:0);
   if(a&&(m.id===this.rollFocus||(this.beat?.say&&this.speaker(this.beat.say).heroId===m.id))){c.save();c.setTransform(1,0,0,1,0,0);c.globalCompositeOperation='lighter';const g=c.createRadialGradient(a.x*r,(a.y-a.px*.5)*r,0,a.x*r,(a.y-a.px*.5)*r,a.px*r*.8);g.addColorStop(0,'rgba(255,210,140,.22)');g.addColorStop(1,'rgba(255,210,140,0)');c.fillStyle=g;c.fillRect(0,0,cv.width,cv.height);c.restore()}}
  const h=this.heroActor;if(h?.vis&&this.heroSkin){let hop=0;if(h.hop>0&&h.hop<1)hop=Math.sin(h.hop*Math.PI)*34;draw('hero',this.heroSkin,h.walk?-1:h.dir,h.anim,hop)}
  if(this.mapProp&&this.cast){const q=this.mapProp,k=ease(Math.min(1,q.t)),g=s3.anchor(this.speaker('captain').heroId),e=s3.anchor('hero');if(g&&e){const x=lerp(g.x,e.x,k)*r,y=(lerp(g.y-g.px*.6,e.y-e.px*.6,k)-Math.sin(k*Math.PI)*g.px*.5)*r,f=g.px*r/H0*1.4;c.save();c.setTransform(f,0,0,f,x,y);c.rotate(k*6);c.fillStyle='#e8d6a8';c.fillRect(-9,-4,18,8);c.fillStyle='#b8452f';c.fillRect(-2,-4,4,8);c.restore()}}}
 pause(){if(this.closed||this.paused)return;this.paused=true;this.sound?.suspend();this.s3?.pause()}
 resume(){if(this.closed||!this.paused||document.hidden)return;this.paused=false;this.last=performance.now();this.sound?.resume();this.s3?.resume()}
 loop(now){if(this.closed)return;this.raf=requestAnimationFrame(this.loop);const elapsed=(now-this.last)/1000||.016;let dt=Math.min(.05,elapsed);this.last=now;
  if(this.paused||innerHeight>innerWidth){return}
  if(this.slowmo>0){this.slowmo-=dt;dt*=.33}this.t+=dt;this.sceneT+=dt;this.perfCheck(elapsed);this.update(dt);try{this.render()}catch(e){this.log('render:'+e.message)}}
 perfCheck(dt){if(this.s3on&&!this.s3checked){(this.ft3??=[]).push(dt);if(this.ft3.length>=45){this.s3checked=true;const m=[...this.ft3].sort((x,y)=>x-y)[22];let force=false;try{force=localStorage.getItem('pf-story-3d-force')==='1'}catch{}if(m>.06&&!force)this.drop3d(Error('slow '+Math.round(1/m)+'fps'))}}
  if(this.low||this.perfDone)return;(this.ft??=[]).push(dt);if(this.ft.length>=120){const a=[...this.ft].sort((x,y)=>x-y)[60];this.perfDone=true;if(a>.03){this.low=true;this.fx.max=160;if(this.rain)this.rain.length=40;this.log('quality:low');const dpr=1;this.canvas.width=Math.round(innerWidth*dpr);this.canvas.height=Math.round(innerHeight*dpr);this.k=this.canvas.height/VH;this.W=this.canvas.width/this.k}}}
 /* ---------------- script runner */
 enterScene(i){
  const sc=D().SCENES[i];if(!sc)return;this.sceneIndex=i;this.scene=sc;this.beatIndex=-1;this.sceneT=0;this.log('scene:'+sc.id);
  if(sc.id==='farewell'||sc.id==='shore'){if(!this.hero){this.enterScene(2);return}}
  if(this.mode!=='replay'){const cp=sc.checkpoint;this.persist({checkpoint:cp,...(this.hero&&(cp==='confirmed'||cp==='handoff')?{hero:this.hero}:{})})}
  if(this.env&&this.env!==sc.env){this.transitioning=true;this.hideDialogue();const w=this.root.querySelector('.st-wipe');w.classList.remove('run');void w.getBoundingClientRect();w.classList.add('run');this.sound.wash(1.3);this.later(()=>{this.setupEnv(sc.env);const go=()=>{if(this.closed)return;this.transitioning=false;this.nextBeat()};this.s3busy?this.s3busy.then(go,go):go()},640);return}
  if(this.env!==sc.env){this.setupEnv(sc.env);if(this.s3busy){this.transitioning=true;const go=()=>{if(this.closed)return;this.transitioning=false;this.enterSceneRest(i,sc)};this.s3busy.then(go,go);return}}
  this.enterSceneRest(i,sc);
 }
 enterSceneRest(i,sc){
  // resuming after the landing: the crew is already ashore
  if(sc.env==='shore'&&i>=2&&!this.crew?.length){const cam={...this.cam};this.cue('crewAshore');Object.assign(this.cam,cam);for(const m of this.crew)m.t=4}
  this.nextBeat();
 }
 nextBeat(){
  if(this.closed)return;this.beatIndex++;const b=this.scene.beats[this.beatIndex];
  if(!b){this.enterScene(this.sceneIndex+1);return}
  if(b.cue==='rollCall'&&this.skipRoll){this.skipRoll=false;this.nextBeat();return}
  this.beat=b;this.beatT=0;this.log('beat:'+this.scene.id+':'+this.beatIndex);
  if(b.cue)this.cue(b.cue);if(b.caption)this.caption(b.caption);
  this.el.skip.hidden=!this.skipAllowed();
  if(b.say)this.say(b);else this.hideDialogue();
  if(b.select)this.openSelect();
  if(b.handoff)this.handoff();
 }
 skipAllowed(){return !this.selecting&&!this.handingOff&&this.scene?.id!=='select'}
 update(dt){
  const b=this.beat;if(b?.wait&&this.el.modal.hidden&&!this.transitioning){this.beatT+=dt;if(this.beatT>=b.wait)this.nextBeat()}
  if(this.typing){this.typed=Math.min(this.full.length,this.typed+dt*this.cps*(/[.,!?…—]/.test(this.full[Math.floor(this.typed)-1]||'')?.35:1));this.el.text.textContent=this.full.slice(0,Math.floor(this.typed));if(this.typed>=this.full.length)this.finishTyping()}
  this.envUpdate(dt);this.fx.step(dt);
  if(this.sound&&this.ship){const fl=this.env==='sea'?Math.min(1.2,(this.fires?.length||0)*.32):.4;if(Math.abs(fl-(this.fireLevel??-1))>.04){this.fireLevel=fl;this.sound.setFire(fl)}const b=this.ship.bob||0;this.sound.tick(dt,{bobDown:this.prevBob!==undefined&&b>this.prevBob&&b>2});this.prevBob=b}
  if(this.env==='shore'&&this.cast&&this.beat?.say&&!this.heroActor?.walk){const id=this.speaker(this.beat.say).heroId,m=this.cast.find(x=>x.id===id)||(this.heroActor?.vis&&id===this.hero?this.heroActor:null);if(m){this.cam.tx=lerp(this.cam.tx,m.x+30,.04);this.cam.tz=lerp(this.cam.tz,1.12,.04);this.cam.ty=lerp(this.cam.ty,388,.04)}}
  const ck=1-Math.pow(.0016,dt);this.cam.x=lerp(this.cam.x,this.cam.tx,ck);this.cam.y=lerp(this.cam.y,this.cam.ty,ck);this.cam.z=lerp(this.cam.z,this.cam.tz,ck);this.shake=Math.max(0,this.shake-dt*1.8);
 }
 /* ---------------- dialogue */
 resolveSpeaker(id){const S=D().SPEAKERS;let k=id;if(k!=='hero'&&this.hero&&S[k]?.hero===this.hero&&this.scene&&['farewell','shore'].includes(this.scene.id))k=S[k].standIn||'captain';return k}
 speaker(id){const k=this.resolveSpeaker(id),s=D().SPEAKERS[k],heroId=k==='hero'?this.hero:s.hero;return{...s,key:k,heroId,name:heroName(heroId),role:this.txt(s.role)}}
 say(b){const sp=this.speaker(b.say);const d=this.el.dlg;const face=sp.heroId+':'+(b.mood||'neutral');const changed=this.lastFace!==face;this.lastFace=face;this.lastSpeaker=b.say;d.dataset.mood=b.mood||'neutral';
  d.classList.toggle('right',sp.side==='right');this.el.name.textContent=sp.name;this.el.name.style.color=sp.accent;this.el.role.textContent=sp.role;d.dataset.speaker=sp.key;d.dataset.hero=sp.heroId;
  if(changed){this.el.por.classList.add('swap');this.later(()=>this.el.por.classList.remove('swap'),140);this.el.por.replaceChildren(this.portraitNode(sp.heroId,b.mood))}else{this.el.por.firstChild&&(this.el.por.firstChild.dataset.mood=b.mood||'neutral')}
  this.full=this.txt(b.text);this.typed=0;this.typing=true;this.cps=matchMedia('(prefers-reduced-motion:reduce)').matches?400:44;this.el.text.textContent='';this.el.next.classList.remove('on');d.classList.add('on');this.lineAt=performance.now()}
 finishTyping(){this.typing=false;this.typed=this.full.length;this.el.text.textContent=this.full;this.el.next.classList.add('on');this.doneAt=performance.now()}
 hideDialogue(){this.el.dlg.classList.remove('on');this.typing=false}
 tap(){if(this.closed||this.paused||!this.el.modal.hidden||this.selecting||this.handingOff)return;const b=this.beat;if(!b?.say)return;const now=performance.now();
  if(this.typing){if(now-this.lineAt<90)return;this.finishTyping();return}
  if(now-(this.doneAt||0)<160)return;this.nextBeat()}
 portraitNode(heroId,mood='neutral'){const im=new Image();im.alt=heroName(heroId);im.draggable=false;im.className='st-face';im.dataset.mood=mood||'neutral';im.src=heroPortraitSrc(heroId);
  im.onerror=()=>{const alt=window.PirateHeroes?.portrait?.(heroId);if(alt&&im.src.indexOf(alt)<0){im.classList.add('flat');im.src=alt}else im.replaceWith(this.fallbackPortrait(heroName(heroId)))};im.dataset.heroPortrait=heroId;return im}
 fallbackPortrait(name){const d=document.createElement('div');d.style.cssText='position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:700 34px Georgia;color:#f2cf74';d.textContent=(name||'?').slice(0,1);return d}
 caption(key){const el=this.el.caption;el.textContent=this.txt(key);el.classList.add('on');this.later(()=>el.classList.remove('on'),3600)}
 /* ---------------- skip */
 askSkip(){if(!this.skipAllowed())return;this.pauseScript=true;const m=this.el.modal;m.querySelector('h3').textContent=this.txt('ui.skipTitle');m.querySelector('p').textContent=this.txt(this.hero||this.mode==='replay'?'ui.skipBody':'ui.skipBodySelect');
  m.querySelector('.st-no').textContent=this.txt('ui.skipNo');m.querySelector('.st-yes').textContent=this.txt('ui.skipYes');m.hidden=false;m.querySelector('.st-no').onclick=()=>this.closeSkip();m.querySelector('.st-yes').onclick=()=>{m.hidden=true;this.skip()};m.querySelector('.st-no').focus()}
 closeSkip(){this.el.modal.hidden=true}
 skip(){this.log('skip');this.hideDialogue();
  if(this.mode==='replay'){this.finishReplay();return}
  if(this.hero){this.scene=D().SCENES[4];this.sceneIndex=4;this.beatIndex=0;this.beat=this.scene.beats[1];this.handoff();return}// straight to the hand-off
  this.skipRoll=true;this.enterScene(2)}
 /* ---------------- hero selection (real roster + ownership) */
 openSelect(){
  const list=eligibleHeroes();this.selecting=true;this.el.skip.hidden=true;const s=this.el.sel;s.querySelector('h2').textContent=this.txt('select.title');s.querySelector('.hint').textContent=this.txt('select.hint');
  const box=this.el.heroes;box.replaceChildren();let pick=null;const confirm=this.el.confirm;confirm.textContent=this.txt('select.pick');confirm.disabled=true;
  const render=()=>{for(const b of box.children){const on=b.dataset.hero===pick;b.setAttribute('aria-checked',String(on));b.tabIndex=on||(!pick&&b===box.firstChild)?0:-1}confirm.disabled=!pick;confirm.textContent=pick?this.txt('select.confirm')+' · '+heroName(pick):this.txt('select.pick')};
  for(const h of list){const meta=CARD_META[h.id]||CARD_META.sailor;
   const b=document.createElement('button');b.type='button';b.className='st-hero';b.dataset.hero=h.id;b.style.setProperty('--rc','#7fc8e8');b.style.setProperty('--halo','#2f7fb0');b.setAttribute('role','radio');b.setAttribute('aria-checked','false');b.setAttribute('aria-label',heroName(h.id));
   // First voyage: no level/stars/fragments here (a new player has none) - just the hero, blue glow, gold when chosen.
   b.innerHTML='<span class="halo"></span><img class="art" alt="" draggable="false"><span class="frame"></span><span class="pennant"></span><span class="info"><span class="nm"></span><span class="tg"></span></span><span class="ck">'+ICON.check+'</span>';
   const im=b.querySelector('.art');im.src=heroPortraitSrc(h.id);im.onerror=()=>{const alt=window.PirateHeroes?.portrait?.(h.id);if(alt&&im.src.indexOf(alt)<0)im.src=alt;else im.remove()};
   b.querySelector('.nm').textContent=heroName(h.id);b.querySelector('.tg').textContent=meta[1]+' · '+this.txt('select.ranged.'+(h.ranged==='pistol'?'pistol':'sword'));b.querySelector('.pennant').textContent=this.txt('select.badge');
   b.onclick=()=>{pick=h.id;render();this.sound?.pick?.();this.sound?.heroCue?.(h.id);const art=b.querySelector('.art');if(art){art.classList.remove('act');void art.offsetWidth;art.classList.add('act')}b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');this.log('pick:'+h.id)};b.onkeydown=e=>{const ids=list.map(x=>x.id),i=ids.indexOf(h.id);if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const n=ids[(i+(e.key==='ArrowRight'?1:ids.length-1))%ids.length];pick=n;render();box.querySelector('[data-hero="'+n+'"]').focus()}};box.append(b)}
  confirm.onclick=()=>{if(!pick||!list.some(h=>h.id===pick))return;this.confirmHero(pick)};
  render();s.classList.add('on');this.selectApi={pick:id=>{if(list.some(h=>h.id===id)){pick=id;render()}},confirm:()=>confirm.click(),list:list.map(h=>h.id)};
  if(!list.length){this.log('no-eligible-heroes');s.querySelector('.hint').textContent='No hero is available.';}
 }
 confirmHero(id){
  this.selecting=false;this.el.sel.classList.remove('on');this.hero=id;this.log('confirm:'+id);
  if(this.mode!=='replay'){window.PirateLevels?.setHero(id);this.persist({checkpoint:'confirmed',hero:id})}
  this.prepareHeroSkin();this.enterScene(3);
 }
 prepareHeroSkin(){const H=window.PirateHeroes,id=this.hero;if(!H||!id)return;this.heroSkin=null;try{const s=H.createSkin(id);s.load().then(()=>{if(!this.closed&&this.hero===id){this.heroSkin=s;this.log('skin:'+id)}}).catch(e=>this.log('skin-failed:'+e.message))}catch(e){this.log('skin-error:'+e.message)}}
 /* ---------------- hand-off to the existing Level 1 */
 async handoff(){
  if(this.handingOff)return;this.handingOff=true;this.el.skip.hidden=true;this.hideDialogue();this.root.classList.remove('cine');
  if(this.mode==='replay'){this.later(()=>this.finishReplay(),700);return}
  this.persist({checkpoint:'handoff',hero:this.hero});
  this.el.fade.style.transition='opacity .7s ease';this.el.fade.style.opacity='1';
  await new Promise(r=>this.later(r,760));
  const ok=await launchLevelOne(this.g,this.hero);
  if(!ok){this.handingOff=false;this.showError();return}
  this.persist({checkpoint:'complete',done:true,hero:this.hero,completedAt:Date.now(),plays:(Save.read()?.plays||0)+1});
  this.log('complete');this.destroy({keepMute:true});showObjective(this.g,this.u);showControlHints(this.g,this.u);
 }
 showError(){const m=this.el.modal;m.querySelector('h3').textContent=this.txt('ui.error');m.querySelector('p').textContent='';m.querySelector('.st-no').textContent=this.txt('ui.menu');m.querySelector('.st-yes').textContent=this.txt('ui.retry');m.hidden=false;
  m.querySelector('.st-yes').onclick=()=>{m.hidden=true;this.handoff()};m.querySelector('.st-no').onclick=()=>{m.hidden=true;this.destroy()};this.el.fade.style.opacity='.6'}
 finishReplay(){this.el.fade.style.opacity='1';this.later(()=>this.destroy(),650)}
 destroy({keepMute=false}={}){
  if(this.closed)return;this.closed=true;cancelAnimationFrame(this.raf);try{this.s3?.dispose()}catch{}this.s3=null;this.s3on=false;
  // leaving an unfinished first-run story (e.g. error → Main menu) must not relaunch it this session; it resumes next launch
  if(this.mode!=='replay'&&!Save.read()?.done)window.PirateStory.suppressed=true;for(const id of this.timers)clearTimeout(id);this.timers.clear();
  for(const [t,ty,fn,o] of this.listeners)t.removeEventListener(ty,fn,o);this.listeners=[];
  if(window.__pfBack===this.back)window.__pfBack=this.prevBack;this.sound?.close();
  if(!keepMute&&this.g?.__adventure&&!this.g.__adventure.active)this.g.__adventure.nativeMute?.(false);
  // swallow the lifting finger so it can never press a control underneath
  shield(380);this.root?.remove();try{window.PirateHarbor?.tick?.()}catch{}this.images={};this.heroSkin=null;this.fx.list=[];ART()?.release?.();
  throttle.release('story');if(window.PirateStory.active===this)window.PirateStory.active=null;window.PirateStory.lastEvents=this.events.slice();
 }
 /* ---------------- environments */
 setupEnv(env){
  this.env=env;this.envT=0;this.fx.list=[];this.env3d(env);
  if(env==='sea'){
   this.ship={x:-40,y:404,scale:.82,flip:1,roll:0,bob:0,damage:0,torn:false,foreBroken:0,cut:false,crew:true,wind:1,heel:0,vx:16,list:0,sink:0};
   this.enemies=[{x:500,y:349,scale:.64,alpha:0,flip:-1,roll:0,ports:0,lit:0,crew:false},{x:800,y:336,scale:.46,alpha:0,flip:-1,roll:0,ports:0,lit:0,crew:false},{x:250,y:322,scale:.32,alpha:0,flip:-1,roll:0,ports:0,lit:0,crew:false}];this.lightning=0;this.nextBolt=2.2;this.debris=[];this.hitFlash=0;this.rain=Array.from({length:110},(_,i)=>({x:Math.random(),y:Math.random(),v:.7+Math.random()*.6}));
   this.island=0;this.projectiles=[];this.fires=[];this.cam.x=this.cam.tx=60;this.cam.y=this.cam.ty=300;this.cam.z=1.06;this.cam.tz=1.04;this.sound.ambience('sea');this.sound.music(null);
  }else{
   this.ship={x:210,y:414,scale:.72,flip:1,roll:.045,bob:0,damage:1,torn:true,foreBroken:1,mainBroken:1,cut:true,crew:false,wind:.35,list:.045,reef:{mainTop:.55,foreCourse:.5}};this.rustle=3;this.fires=[{lx:30,ly:-46,until:1e9,small:true},{lx:-70,ly:-66,until:1e9,small:true},{lx:20,ly:-170,until:1e9,small:true}];this.debris=[];
   this.heroActor={x:438,y:478,dir:1,anim:'idle',vis:false,hop:0,vy:0};this.crew=[];this.lurker=null;this.bush=0;
   this.cam.x=this.cam.tx=420;this.cam.y=this.cam.ty=336;this.cam.z=1.08;this.cam.tz=1;this.sound.ambience('shore');this.sound.music('island');
  }
 }
 cue(name){this.log('cue:'+name);const sh=this.ship;try{this.s3?.cue(name,{hero:this.hero});if(name==='nearMiss')this.s3?.shoot(0,{near:true})}catch(e){this.log('s3-cue:'+e.message)}
  switch(name){
   case'establish':this.cam.tx=30;this.cam.tz=1;{const lg=this.root.querySelector('.st-logo');this.later(()=>lg.classList.add('on'),300);this.later(()=>lg.classList.remove('on'),3300)}break;
   case'enemiesEmerge':this.sound.music('battle');this.enemies.forEach((e,i)=>e.target=1-i*.12);this.cam.tx=200;this.cam.tz=.95;this.bolt();break;
   case'gunsTurn':this.enemies[0].portsT=0.001;this.cam.tx=230;break;
   case'broadside':this.broadside();break;
   case'admiral':{const e=this.enemies[0];this.admiral={t:0};this.sound.stinger();const p=this.toFront(shipToWorld({...e,y:e.y},-120,-90));this.cam.tx=p.x;this.cam.ty=p.y+40;this.cam.tz=1.3;this.bolt();break}
   case'rollCall':{const order=['captain','scarlet','shark','sailor','crab'];this.cam.tz=1.22;this.cam.ty=392;order.forEach((id,i)=>this.later(()=>{const m=this.cast?.find(x=>x.id===id);if(!m)return;this.rollFocus=id;this.cam.tx=m.x;this.sound.pluck([220,262,294,330,392][i]);m.hopT=.35},i*680));this.later(()=>{this.rollFocus=null},order.length*680+200);break}
   case'handMap':{const giver=this.cast?.find(m=>m.id===this.speaker('captain').heroId),h=this.heroActor;if(giver&&h){this.mapProp={x0:giver.x,y0:giver.y-46,x1:h.x,y1:h.y-46,t:0};this.sound.rustle()}break}
   case'listing':sh.list=-.05;sh.panic=true;this.cam.tx=0;this.cam.tz=1.1;break;
   case'cutRigging':this.later(()=>{sh.cut=true;this.sound.snap()},900);this.volley(1,[{lx:10,ly:-262,mast:true},{lx:-110,ly:-40,hit:true},{miss:true,lx:-90}],600);break;
   case'nearMiss':this.fireAt({x:sh.x+170,y:sh.y+6},true,0);break;
   case'revealLand':this.island=.001;this.cam.tx=-160;this.cam.tz=.95;break;
   case'turnToIsland':this.turning=0.001;break;
   case'arrive':this.ship.x=60;this.ship.arrive=.001;this.cam.tx=330;break;
   case'crewAshore':[0,.7,1.4].forEach(d=>this.later(()=>this.sound.oar(),d*1000));this.later(()=>this.sound.thud(),1900);this.cam.tx=640;this.cam.ty=392;this.cam.tz=1.06;this.crew=[
     {id:'bosun',x:430,y:468,route:[430,566],t:-.2,carry:true,dir:1},{id:'rook',x:400,y:472,route:[420,600],t:-1.1,carry:true,dir:1},
     {id:'lookout',x:405,y:474,route:[405,492],t:-.5,helper:true,dir:1},{id:'mo',x:418,y:474,route:[418,505],t:-.5,wounded:true,dir:1},
    ];this.cast=[{id:'sailor',x:500,y:490,dir:1},{id:'scarlet',x:592,y:494,dir:1},{id:'shark',x:686,y:488,dir:-1},{id:'captain',x:778,y:492,dir:-1},{id:'crab',x:866,y:490,dir:-1}];this.loadCast();break;
   case'branchSnap':this.branchSnap();break;
   case'selectFrame':this.cam.tx=660;this.cam.tz=.98;this.cam.ty=320;this.heroActor&&(this.heroActor.vis=false);break;
   case'heroStep':{const me=this.cast?.find(m=>m.id===this.hero);this.heroActor.vis=true;this.heroActor.x=me?me.x:430;this.heroActor.y=me?me.y:478;}this.heroActor.hop=.001;this.heroActor.dir=1;this.cam.tx=this.heroActor.x+40;this.cam.tz=1.12;this.cam.ty=372;break;
   case'heroAshore':this.heroActor.walk=true;this.heroActor.anim='run';this.cam.tz=1.04;this.cam.ty=350;break;
  }
 }
 broadside(){const sh=this.ship;this.cam.tx=sh.x+60;this.cam.tz=1.2;this.cam.ty=290;this.later(()=>{this.cam.tx=170;this.cam.tz=1.02;this.cam.ty=300},1900);this.volley(0,[{lx:140,ly:20,miss:true},{lx:34,ly:-22,hit:true},{lx:-48,ly:-12,hit:true},{lx:20,ly:-200,sail:true},{lx:96,ly:-30,hit:true}],220)}
 volley(ei,targets,delay){const e=this.enemies[ei],sh=this.ship,ports=[[-60,-30],[-2,-28],[56,-30],[110,-36],[-30,-30]];if(!e)return;
  targets.forEach((tgt,i)=>this.later(()=>{try{this.s3?.shoot(ei,tgt)}catch{}const [lx,ly]=ports[i%ports.length];const p=shipToWorld({...e,y:e.y+(e.bob||0)},lx,ly);this.muzzle(p,e);this.sound.cannon(ei?1.7:1);this.sound.whoosh(.55,.15);
   this.fireAt(tgt.miss?{x:sh.x+(tgt.lx||0)*sh.scale+40,y:sh.y+8}:null,!!tgt.miss,0,p,tgt)},delay+i*240))}
 bolt(){try{this.s3?.bolt()}catch{}this.lightning=1;this.boltPath=Array.from({length:9},(_,i)=>[(Math.random()-.5)*60,i*26]);this.boltX=.25+Math.random()*.6;this.sound.thunder(.3+Math.random()*.5)}
 toFront(p,par=.62){const z=this.cam.z,zp=1+(z-1)*par;return{x:this.cam.x+(p.x-this.cam.x*par)*zp/z,y:this.cam.y+(p.y-this.cam.y)*zp/z}}
 muzzle(p,e){this.fx.add({kind:'flash',layer:'mid',x:p.x,y:p.y,r:44,life:.32,vx:0,vy:0});for(let i=0;i<8;i++)this.fx.add({kind:'smoke',layer:'mid',x:p.x-8-Math.random()*10,y:p.y,vx:-30-Math.random()*40,vy:-10-Math.random()*16,r:7+Math.random()*6,grow:2.2,a:.55,color:'rgba(150,150,160,.7)',life:2.2+Math.random(),drag:.6})}
 fireAt(world,miss,delay,from,tgt){const sh=this.ship;const start=this.toFront(from||{x:this.enemies[0].x-60,y:this.enemies[0].y-8});
  const end=world||(()=>{const p=shipToWorld({...sh,y:sh.y+(sh.bob||0)},tgt.lx,tgt.ly);return p})();this.projectiles.push({sx:start.x,sy:start.y,ex:end.x,ey:end.y,t:0,dur:.62,arc:28,miss,tgt})}
 impact(p,tgt){const sh=this.ship;this.sound.impact();this.shake=Math.min(1,this.shake+.55);
  this.fx.add({kind:'flash',layer:'front',x:p.x,y:p.y,r:42,life:.28,vx:0,vy:0});
  for(let i=0;i<22;i++){const a=-Math.PI/2+(Math.random()-.5)*2.6,v=120+Math.random()*260;this.fx.add({kind:'spark',layer:'front',x:p.x,y:p.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:420,life:.4+Math.random()*.4,color:Math.random()<.5?'#ffe3a0':'#ff9a3c'})}
  for(let i=0;i<14;i++){const a=-Math.PI/2+(Math.random()-.5)*2.4,v=80+Math.random()*190;this.fx.add({kind:'splinter',layer:'front',x:p.x,y:p.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:520,vr:(Math.random()-.5)*18,r:2+Math.random()*3.5,life:1.2+Math.random()*.6})}
  for(let i=0;i<6;i++)this.fx.add({kind:'smoke',layer:'front',x:p.x+(Math.random()-.5)*14,y:p.y,vx:-10-Math.random()*20,vy:-26-Math.random()*20,r:8+Math.random()*8,grow:2.6,a:.65,color:'rgba(60,58,60,.85)',life:2.6+Math.random()*1.2,drag:.3});
  this.hitFlash=Math.min(.55,this.hitFlash+.4);this.cam.z+=.03;if(!this.slowmoUsed||tgt?.mast){this.slowmoUsed=true;this.slowmo=.55}sh.jolt=1;for(let i=0;i<2;i++)this.debris.push({x:p.x+(Math.random()-.5)*40,y:sh.y+14+Math.random()*10,w:8+Math.random()*10,a:Math.random()*.6-.3,ph:Math.random()*6,vx:-6-Math.random()*8});
  if(tgt?.mast){sh.mainBroken=.001;this.sound.mastCrack();for(let i=0;i<10;i++)this.fx.add({kind:'splinter',layer:'front',x:p.x,y:p.y,vx:(Math.random()-.5)*160,vy:-60-Math.random()*120,g:520,vr:(Math.random()-.5)*20,r:3+Math.random()*4,life:1.6})}
  if(tgt?.sail||tgt?.mast){sh.torn=true;if(tgt.sail)sh.foreBroken=.001;this.fires.push({lx:tgt.lx,ly:tgt.ly+40,until:this.t+7,small:true});this.later(()=>this.sound.snap(),120)}else{sh.damage=Math.min(1,sh.damage+.4);sh.roll-=.025;sh.sink=Math.min(8,(sh.sink||0)+2.5);this.fires.push({lx:tgt?.lx??0,ly:(tgt?.ly??0)-18,until:this.t+60})}}
 splash(x,y,big=1){this.sound.splash(big);for(let i=0;i<26*big;i++){const a=-Math.PI/2+(Math.random()-.5)*.9,v=120+Math.random()*220*big;this.fx.add({kind:'drop',layer:'front',x:x+(Math.random()-.5)*16,y,vx:Math.cos(a)*v*.5,vy:Math.sin(a)*v,g:520,r:1.6+Math.random()*2.4,a:.9,life:.9+Math.random()*.5})}for(let i=0;i<5;i++)this.fx.add({kind:'smoke',layer:'front',x:x+(Math.random()-.5)*20,y:y-10,vx:0,vy:-20,r:10,grow:1.6,a:.35,color:'rgba(220,235,245,.6)',life:1.4})}
 branchSnap(){this.sound.snap();this.bush=1;this.cam.tx=920;this.cam.tz=1.06;const bx=1060,by=420;
  for(let i=0;i<16;i++)this.fx.add({kind:'leaf',layer:'front',x:bx+(Math.random()-.5)*50,y:by-30-Math.random()*40,vx:(Math.random()-.5)*60,vy:-40-Math.random()*60,g:60,drag:1.2,vr:(Math.random()-.5)*6,r:3+Math.random()*3,life:2+Math.random(),color:Math.random()<.5?'#2f5a3c':'#46704a'});
  for(let i=0;i<7;i++)this.fx.add({kind:'bird',layer:'front',x:bx+40+(Math.random()-.5)*60,y:by-110-Math.random()*40,vx:-70-Math.random()*60,vy:-60-Math.random()*40,r:5+Math.random()*3,life:3.4,seed:Math.random()*9});
  this.lurker={x:1150,y:428,t:0};this.cam.ty=372;this.later(()=>{this.cam.tx=520;this.cam.tz=1.04;this.cam.ty=392},2600)}
 envUpdate(dt){
  const sh=this.ship;if(!sh)return;this.envT+=dt;const t=this.t;
  if(this.env==='sea'){
   sh.bob=Math.sin(t*1.15)*4.2+Math.sin(t*.53)*2+(sh.sink||0);sh.roll=lerp(sh.roll,(sh.list||0)+Math.sin(t*.95)*.03,1-Math.pow(.2,dt));
   if(this.turning){this.turning=Math.min(1,this.turning+dt/2.6);const k=ease(this.turning);const f=Math.cos(k*Math.PI);sh.flip=f>=0?Math.max(.14,f):Math.min(-.14,f);sh.vx=lerp(16,-70,k);this.cam.tx=sh.x-60;this.cam.tz=1-.06*k;if(this.turning>=1&&!this.turnDone){this.turnDone=true}}
   if(this.turning)sh.x+=sh.vx*dt;if(sh.foreBroken>0&&sh.foreBroken<1)sh.foreBroken=Math.min(1,sh.foreBroken+dt/.9);if(sh.mainBroken>0&&sh.mainBroken<1)sh.mainBroken=Math.min(1,sh.mainBroken+dt/1.1);
   this.lightning=Math.max(0,this.lightning-dt*2.4);this.hitFlash=Math.max(0,this.hitFlash-dt*2.2);this.nextBolt-=dt;if(this.nextBolt<=0){this.bolt();this.nextBolt=6+Math.random()*5}this.fires=this.fires.filter(f=>f.until>this.t);
   for(const e of this.enemies){if(e.target!==undefined)e.alpha=lerp(e.alpha,e.target,1-Math.pow(.35,dt));e.bob=Math.sin(t*1.05+e.x)*2.4;e.roll=Math.sin(t*.8+e.x)*.025;e.x-=dt*6;if(e.portsT){e.portsT=Math.min(1,e.portsT+dt/1.4)}}
   if(this.island)this.island=Math.min(1,this.island+dt/2.2);
   sh.jolt=Math.max(0,(sh.jolt||0)-dt*3);if(this.admiral)this.admiral.t+=dt;for(const d of this.debris){d.x+=d.vx*dt}this.debris=this.debris.filter(d=>d.x>this.cam.x-this.W);
   if(Math.random()<dt*7){const wx=this.cam.x+(Math.random()-.4)*this.W,wy=[372,420,466][Math.floor(Math.random()*3)];for(let i=0;i<5;i++)this.fx.add({kind:'drop',layer:'front',x:wx+(Math.random()-.5)*10,y:wy-4,vx:-30+Math.random()*20,vy:-40-Math.random()*50,g:300,r:1+Math.random()*1.4,a:.55,life:.6})}
   for(const p of this.projectiles){p.t+=dt/p.dur;if(p.t>=1&&!p.done){p.done=true;p.miss?this.splash(p.ex,p.ey,1):this.impact({x:p.ex,y:p.ey},p.tgt)}}this.projectiles=this.projectiles.filter(p=>!p.done);
   // fire, smoke and bow spray emitters
   for(const f of this.fires){const p=shipToWorld({...sh,y:sh.y+sh.bob},f.lx,f.ly);if(Math.random()<dt*(f.small?12:34))this.fx.add({kind:'fire',layer:'front',x:p.x+(Math.random()-.5)*8,y:p.y,vx:(Math.random()-.5)*10,vy:-30-Math.random()*30,r:5+Math.random()*5,life:.5+Math.random()*.3});if(Math.random()<dt*7)this.fx.add({kind:'smoke',layer:'front',x:p.x,y:p.y-8,vx:-18-Math.random()*16,vy:-24-Math.random()*12,r:6+Math.random()*5,grow:3,a:.5,color:'rgba(45,44,48,.8)',life:3.4,drag:.2});if(Math.random()<dt*5)this.fx.add({kind:'spark',layer:'front',x:p.x,y:p.y,vx:(Math.random()-.5)*30,vy:-60-Math.random()*60,g:-10,life:1.2,w:1.2,color:'#ffb35a'})}
   const bow=shipToWorld({...sh,y:sh.y+sh.bob},sh.flip>0?175:175,8);if(Math.random()<dt*(Math.abs(sh.vx)>20?26:10))this.fx.add({kind:'drop',layer:'front',x:bow.x,y:bow.y,vx:(sh.flip>0?1:-1)*(20+Math.random()*50),vy:-60-Math.random()*70,g:420,r:1.2+Math.random()*1.6,a:.75,life:.7});
   if(Math.random()<dt*3)this.fx.add({kind:'mote',layer:'front',x:this.cam.x-this.W/2+Math.random()*this.W,y:120+Math.random()*300,vx:-12,vy:4,r:1+Math.random()*1.4,a:.35,life:5});
  }else{
   sh.bob=Math.sin(t*.8)*2.2;sh.roll=sh.list+Math.sin(t*.7)*.012;
   if(sh.arrive){const was=sh.arrive;sh.arrive=Math.min(1,sh.arrive+dt/3.2);sh.x=lerp(60,210,ease(sh.arrive));
    if(sh.arrive<.9&&Math.random()<dt*14){const st=shipToWorld({...sh,y:sh.y+sh.bob},-180,10);this.fx.add({kind:'drop',layer:'mid',x:st.x-Math.random()*20,y:sh.y+12,vx:-20-Math.random()*20,vy:-10-Math.random()*16,g:120,r:1.4+Math.random()*1.6,a:.5,life:.9})}
    if(was<.78&&sh.arrive>=.78)this.sound.scrape();
    if(was<1&&sh.arrive>=1){this.sound.anchor();const bw=shipToWorld({...sh,y:sh.y+sh.bob},178,-30);for(let i=0;i<14;i++)this.fx.add({kind:'drop',layer:'mid',x:bw.x+20,y:sh.y+16,vx:(Math.random()-.5)*60,vy:-60-Math.random()*80,g:420,r:1.4+Math.random()*1.8,a:.8,life:.8})}}
   for(const f of this.fires)if(Math.random()<dt*5){const p=shipToWorld({...sh,y:sh.y+sh.bob},f.lx,f.ly);this.fx.add({kind:'spark',layer:'mid',x:p.x,y:p.y,vx:(Math.random()-.5)*14,vy:-30-Math.random()*30,g:-6,life:1.4,w:1,color:'#ffb35a'})}
   if(Math.random()<dt*.35)for(let i=0;i<3;i++)this.fx.add({kind:'bird',layer:'mid',x:this.cam.x-this.W*.7,y:140+Math.random()*60+i*10,vx:42+Math.random()*12,vy:-3,r:4,life:30,seed:i*2});
   if(Math.random()<dt*2.4)this.fx.add({kind:'mote',layer:'front',x:980+Math.random()*560,y:330+Math.random()*120,vx:(Math.random()-.5)*10,vy:-4,r:1.3,a:.9,color:'#ffe58a',life:2.8});
   for(const [lx,ly,rate] of [[30,-40,5],[-60,-60,3]])if(Math.random()<dt*rate){const p=shipToWorld({...sh,y:sh.y+sh.bob},lx,ly);this.fx.add({kind:'smoke',layer:'mid',x:p.x,y:p.y,vx:-7-Math.random()*6,vy:-16-Math.random()*8,r:5+Math.random()*4,grow:3.6,a:.42,color:'rgba(52,52,58,.8)',life:6,drag:.1})}
   if(Math.random()<dt*6){const p=shipToWorld({...sh,y:sh.y+sh.bob},30,-46);this.fx.add({kind:'fire',layer:'mid',x:p.x+(Math.random()-.5)*6,y:p.y,vx:0,vy:-12,r:2.5+Math.random()*2,life:.45})}
   this.rustle-=dt;if(this.rustle<=0){this.rustle=4+Math.random()*3;this.bushSoft={x:1000+Math.random()*420,t:0};if(Math.random()<.6)this.glint={x:1060+Math.random()*360,y:410+Math.random()*25,t:0}}
   if(this.bushSoft){this.bushSoft.t+=dt;if(this.bushSoft.t>1.1)this.bushSoft=null}if(this.glint){this.glint.t+=dt;if(this.glint.t>.9)this.glint=null}
   if(Math.random()<dt*4)this.fx.add({kind:'mote',layer:'front',x:this.cam.x-this.W/2+Math.random()*this.W,y:200+Math.random()*260,vx:6,vy:-3,r:1+Math.random()*1.6,a:.3,color:'#e8e2d0',life:6});
   for(const m of this.crew){m.t+=dt;if(m.t<0||m.stand)continue;const sp=m.wounded||m.helper?16:34;
    if(m.carry){const goal=m.dir>0?m.route[1]:m.route[0];m.x+=m.dir*sp*dt;if((m.dir>0&&m.x>=goal)||(m.dir<0&&m.x<=goal)){if(m.dir>0)this.sound.thud();m.x=goal;m.dir*=-1}}
    else if(m.x<m.route[1])m.x=Math.min(m.route[1],m.x+sp*dt);else m.done=true}
   this.stepT=(this.stepT||0)-dt;const walking=this.heroActor?.walk||this.crew.some(m=>m.t>0&&!m.stand&&!m.done);if(walking&&this.stepT<=0){this.sound.step();this.stepT=this.heroActor?.walk?.2:.34}
   for(const m of this.cast||[])if(m.hopT>0)m.hopT=Math.max(0,m.hopT-dt);if(this.mapProp){this.mapProp.t+=dt/.85;if(this.mapProp.t>=1){this.mapProp=null;if(this.heroActor)this.heroActor.nod=.5}}if(this.heroActor?.nod>0)this.heroActor.nod=Math.max(0,this.heroActor.nod-dt);
   if(this.bush>0)this.bush=Math.max(0,this.bush-dt*1.4);if(this.lurker){this.lurker.t+=dt;if(this.lurker.t>2.4)this.lurker=null}
   const h=this.heroActor;if(h.vis){if(h.hop>0){h.hop=Math.min(1,h.hop+dt/.45);h.anim=h.hop<1?'jump':'idle'}
    if(h.walk){h.x+=dt*165;h.anim='run';this.cam.tx=Math.min(h.x+120,1040)}}
  }
 }
 /* ---------------- rendering */
 render(){
  if(this.s3on){this.render3d();return}
  const c=this.ctx,k=this.k,W=this.W;c.setTransform(1,0,0,1,0,0);c.fillStyle='#02060b';c.fillRect(0,0,this.canvas.width,this.canvas.height);
  if(!this.art){this.renderFallback();return}
  const sx=this.shake>0?(Math.sin(this.t*61)*7+Math.sin(this.t*37)*4)*this.shake*this.shake:0,sy=this.shake>0?Math.cos(this.t*53)*5*this.shake*this.shake:0;
  this.view=(p,fn)=>{c.save();c.setTransform(k,0,0,k,0,0);const z=1+(this.cam.z-1)*p;c.translate(W/2+sx*p,VH/2+sy*p);c.scale(z,z);const py=this.env==='sea'?1:p;c.translate(-this.cam.x*p,-this.cam.y*py);fn(c);c.restore()};
  this.env==='sea'?this.renderSea():this.renderShore();
  // colour grade + vignette (screen space)
  c.setTransform(k,0,0,k,0,0);const v=c.createRadialGradient(W/2,VH*.52,VH*.35,W/2,VH*.52,W*.75);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,4,10,.62)');c.fillStyle=v;c.fillRect(0,0,W,VH);
 }
 renderFallback(){const c=this.ctx;c.setTransform(this.k,0,0,this.k,0,0);const g=c.createLinearGradient(0,0,0,VH);g.addColorStop(0,'#06101c');g.addColorStop(1,'#16314a');c.fillStyle=g;c.fillRect(0,0,this.W,VH);waveBand(c,{y:360,amp:6,len:220,speed:1.2,t:this.t,x0:0,x1:this.W,fill:'#0b2234',crest:'rgba(170,200,220,.3)'})}
 renderSea(){
  const c=this.ctx,W=this.W,A=this.art,t=this.t,sh=this.ship;
  // sky (screen-anchored) + drifting cloud banks
  c.save();c.setTransform(this.k,0,0,this.k,0,0);c.drawImage(A.sky,0,0,W,VH*.68);
  const cf=A.cloudsFar,cn=A.cloudsNear;const ox=-(t*6+this.cam.x*.05)%cf.width;for(let x=ox-cf.width;x<W;x+=cf.width)c.drawImage(cf,x,30,cf.width,cf.height*.9);
  const ox2=-(t*11+this.cam.x*.09)%cn.width;c.globalAlpha=.9;for(let x=ox2-cn.width;x<W;x+=cn.width)c.drawImage(cn,x,-10,cn.width,cn.height);c.globalAlpha=1;
  // horizon glow and moon path on the water
  if(this.lightning>0){c.globalCompositeOperation='screen';c.fillStyle=`rgba(170,200,240,${this.lightning*.35})`;c.fillRect(0,0,W,VH*.62);if(this.lightning>.55&&this.boltPath){c.strokeStyle=`rgba(235,245,255,${this.lightning})`;c.lineWidth=2;c.beginPath();const bx=W*this.boltX;this.boltPath.forEach(([dx,dy],i)=>i?c.lineTo(bx+dx,dy):c.moveTo(bx+dx,dy));c.stroke()}c.globalCompositeOperation='source-over'}
  const hz=c.createLinearGradient(0,VH*.5,0,VH*.62);hz.addColorStop(0,'rgba(60,90,120,0)');hz.addColorStop(1,'rgba(70,100,130,.35)');c.fillStyle=hz;c.fillRect(0,VH*.5,W,VH*.12);c.restore();
  // far island revealed through the fog ("Land to port")
  if(this.island>0)this.view(.3,c=>{c.globalAlpha=this.island*.85;c.fillStyle='#0c1a24';c.beginPath();const bx=-520;c.moveTo(bx-260,312);c.bezierCurveTo(bx-200,260,bx-130,250,bx-90,262);c.bezierCurveTo(bx-60,220,bx-10,214,bx+30,250);c.bezierCurveTo(bx+80,244,bx+130,272,bx+180,312);c.closePath();c.fill();c.fillStyle='#10222c';for(const px of [-640,-600,-470,-430]){c.fillRect(px,262,3,40);for(let i=0;i<5;i++){c.beginPath();c.ellipse(px+1+Math.cos(i*1.3)*10,262+Math.sin(i*1.3)*4,12,3,i*1.3,0,TAU);c.fill()}}c.globalAlpha=1});
  // far sea
  this.view(.45,c=>{const x0=this.cam.x*.45-W,x1=this.cam.x*.45+W;c.fillStyle='#0c1d2c';c.fillRect(x0,300,x1-x0,400);waveBand(c,{y:302,amp:1.6,len:90,speed:.8,t,x0,x1,fill:'#0e2233',crest:'rgba(150,180,205,.18)',crestW:1});waveBand(c,{y:318,amp:2.4,len:130,speed:1,t,x0,x1,fill:'#0f2538',crest:'rgba(160,190,215,.2)',phase:2})});
  this.moonPath(.45);
  // enemies emerging from the fog
  this.view(.62,c=>{for(const e of this.enemies){if(e.alpha<.02)continue;this.drawShipAny(c,'enemy',{...e,bob:e.bob,wind:.8,lights:true,crew:e.crew},t);if(this.lightning>.45&&!this.low){c.save();c.globalCompositeOperation='lighter';this.drawShipAny(c,'enemy',{...e,bob:e.bob,wind:.8,lights:false,alpha:(this.lightning-.45)*.7},t);c.restore()}if(e.portsT){for(const [i,[lx,ly]] of [[-60,-30],[-2,-28],[56,-30],[110,-36]].entries()){const on=clamp(e.portsT*4-i,0,1);if(on<=0)continue;const p=shipToWorld({...e,y:e.y+(e.bob||0)},lx,ly);c.globalCompositeOperation='lighter';const g=c.createRadialGradient(p.x,p.y,0,p.x,p.y,7);g.addColorStop(0,`rgba(255,170,80,${.9*on*e.alpha})`);g.addColorStop(1,'rgba(255,120,40,0)');c.fillStyle=g;c.fillRect(p.x-8,p.y-8,16,16);c.globalCompositeOperation='source-over'}}}
   if(this.admiral)this.drawAdmiral(c,this.enemies[0],t);
   const f=A.fog;const fx=-(t*14)%f.width;c.globalAlpha=.6;for(let x=fx-f.width+this.cam.x*.62-W;x<this.cam.x*.62+W;x+=f.width)c.drawImage(f,x,190,f.width,f.height);c.globalAlpha=1});
  this.view(.62,c=>this.fx.draw(c,'mid'));
  // mid sea + our ship + front waves
  this.view(1,c=>{const x0=this.cam.x-W,x1=this.cam.x+W;waveBand(c,{y:350,amp:4,len:170,speed:1.1,t,x0,x1,fill:'#0d2131',crest:'rgba(170,200,225,.22)'});waveBand(c,{y:372,amp:5,len:210,speed:1.25,t,x0,x1,fill:'#0c1f2f',crest:'rgba(180,210,230,.25)',phase:1.3});
   // projectiles in flight
   for(const p of this.projectiles){const k=clamp(p.t,0,1),x=lerp(p.sx,p.ex,k),y=lerp(p.sy,p.ey,k)-Math.sin(k*Math.PI)*p.arc;c.save();c.globalCompositeOperation='lighter';for(let i=1;i<6;i++){const kk=Math.max(0,k-i*.035);const tx=lerp(p.sx,p.ex,kk),ty=lerp(p.sy,p.ey,kk)-Math.sin(kk*Math.PI)*p.arc;c.globalAlpha=.5-i*.08;c.fillStyle='#ff9a40';c.beginPath();c.arc(tx,ty,3.4-i*.4,0,TAU);c.fill()}c.restore();c.fillStyle='#121212';c.beginPath();c.arc(x,y,3.6,0,TAU);c.fill()}
   for(const d of this.debris){const y=d.y+Math.sin(t*1.6+d.ph)*2;c.save();c.translate(d.x,y);c.rotate(d.a+Math.sin(t+d.ph)*.08);c.fillStyle='#5a3a1e';c.fillRect(-d.w/2,-1.5,d.w,3);c.fillStyle='rgba(255,220,170,.25)';c.fillRect(-d.w/2,-1.5,d.w,1);c.restore()}
   const jx=(sh.jolt||0)*Math.sin(t*70)*3;
   // reflections of fires and the stern lantern on the water
   c.save();c.globalCompositeOperation='lighter';for(const f of [...(this.fires||[]),{lx:-170,ly:-150,lamp:true}]){const p=shipToWorld({...sh,y:sh.y+sh.bob},f.lx,f.ly);for(let k=0;k<7;k++){const yy=sh.y+16+k*7,w=(f.lamp?10:16)+k*3;c.globalAlpha=(f.lamp?.12:.2)*(1-k/7)*(.6+.4*Math.sin(t*7+k*1.3));c.fillStyle=f.lamp?'#ffd38a':'#ff9a46';c.fillRect(p.x-w/2+Math.sin(t*3+k)*3,yy,w,2)}}c.restore();this.drawShipAny(c,'hero',{...sh,x:sh.x+jx,lights:true,panic:sh.panic},t);this.flames(c,{...sh,x:sh.x+jx},t);
   // waterline wash hides the keel; bow foam
   waveBand(c,{y:sh.y+8+sh.bob*.3,amp:3.5,len:120,speed:1.6,t,x0,x1,fill:'#0b1c2b',crest:'rgba(215,232,242,.45)',crestW:1.8,phase:.5});
   // foam churned around the hull
   {const a=shipToWorld({...sh,y:sh.y+sh.bob},-180,10),b=shipToWorld({...sh,y:sh.y+sh.bob},180,10);c.save();c.strokeStyle='rgba(230,240,248,.55)';c.lineWidth=2;c.setLineDash([10,7]);c.lineDashOffset=-t*40;c.beginPath();for(let k=0;k<=12;k++){const x=lerp(Math.min(a.x,b.x)-10,Math.max(a.x,b.x)+10,k/12);c.lineTo(x,sh.y+12+sh.bob*.3+Math.sin(t*4+k)*2)}c.stroke();c.restore()}
   waveBand(c,{y:420,amp:6,len:240,speed:1.35,t,x0,x1,fill:'#0a1a28',crest:'rgba(190,215,235,.3)',phase:2.6});waveBand(c,{y:466,amp:8,len:300,speed:1.5,t,x0,x1,fill:'#08151f',crest:'rgba(190,215,235,.25)',phase:4});
   this.fx.draw(c,'front')});
  // near fog drifting across the lens
  if(!this.low)this.view(1.35,c=>{const f=A.fogWarm;const fx=-(t*24)%f.width+this.cam.x*1.35-W*1.2;c.globalAlpha=.45;for(let x=fx-f.width;x<this.cam.x*1.35+W;x+=f.width)c.drawImage(f,x,250,f.width,f.height*1.2);c.globalAlpha=1});
  c.save();c.setTransform(this.k,0,0,this.k,0,0);c.strokeStyle='rgba(180,200,220,.28)';c.lineWidth=1;c.beginPath();for(const r of this.rain){const x=((r.x*W-t*90*r.v)%W+W)%W,y=((r.y*VH+t*520*r.v)%VH);c.moveTo(x,y);c.lineTo(x-4,y+14)}c.stroke();
  if(this.hitFlash>0){c.fillStyle=`rgba(255,190,120,${this.hitFlash*.35})`;c.fillRect(0,0,W,VH)}c.restore();
 }
 moonPath(p){const c=this.ctx;c.save();c.setTransform(this.k,0,0,this.k,0,0);c.globalCompositeOperation='lighter';const mx=this.W*.74,t=this.t;for(let i=0;i<46;i++){const y=306+i*i*.11,w=8+i*1.8,x=mx+Math.sin(t*1.6+i*1.7)*w*.7;c.globalAlpha=Math.max(0,.32-i*.006)*(.6+.4*Math.sin(t*3+i));c.fillStyle='#bcd2ea';c.fillRect(x-w/2,y,w*(.4+.6*Math.abs(Math.sin(i*2.3+t))),1.4)}c.restore()}
 renderShore(){
  const c=this.ctx,W=this.W,A=this.art,t=this.t,sh=this.ship;
  // far plate: Level 1's painted harbour (falls back to the procedural night sky)
  const plate=this.images.plate;
  c.save();c.setTransform(this.k,0,0,this.k,0,0);
  if(plate){const s=Math.max(VH*1.14/plate.height,(W+220)/plate.width),pw=plate.width*s,ph=plate.height*s,px=-(this.cam.x-420)*.16-(pw-W)/2,py=-VH*.12;c.drawImage(plate,px,py,pw,ph)}
  else{c.drawImage(A.sky,0,0,W,VH*.7);c.fillStyle='#0c1d2c';c.fillRect(0,VH*.6,W,VH*.4)}
  // pre-dawn grade: cool shadows, warm light rising on the horizon
  c.fillStyle='rgba(8,20,36,.34)';c.fillRect(0,0,W,VH);const dawn=c.createLinearGradient(0,VH*.18,0,VH*.66);dawn.addColorStop(0,'rgba(255,170,120,0)');dawn.addColorStop(.75,'rgba(255,160,110,.16)');dawn.addColorStop(1,'rgba(255,190,140,0)');c.globalCompositeOperation='screen';c.fillStyle=dawn;c.fillRect(0,0,W,VH);c.globalCompositeOperation='source-over';
  const cn=A.cloudsFar;const ox=-(t*4)%cn.width;c.globalAlpha=.35;for(let x=ox-cn.width;x<W;x+=cn.width)c.drawImage(cn,x,-30,cn.width,cn.height*.8);c.globalAlpha=1;c.restore();
  // drifting dawn mist over the bay
  this.view(.5,c=>{const f=A.fog;const fx=-(t*9)%f.width+this.cam.x*.5-W;c.globalAlpha=.55;for(let x=fx-f.width;x<this.cam.x*.5+W;x+=f.width)c.drawImage(f,x,250,f.width,f.height*.9);c.globalAlpha=1});
  // cove cliff (left) and calm water in front of the plate
  this.view(.72,c=>{c.fillStyle='#0c181d';c.fillRect(-1400,92,1072,700);c.drawImage(A.coveLeft,-330,0)});
  this.view(1,c=>{const x0=this.cam.x-W,x1=this.cam.x+W;
   waveBand(c,{y:398,amp:1.6,len:110,speed:.7,t,x0,x1,fill:'rgba(10,28,40,.55)',crest:'rgba(200,215,230,.22)',crestW:1});
   this.fx.draw(c,'mid');
   this.drawShipAny(c,'hero',{...sh,lights:true},t);this.flames(c,sh,t,.55);
   // anchor cable and reflection shimmer
   c.strokeStyle='rgba(20,14,8,.8)';c.lineWidth=1.2;c.beginPath();const bow=shipToWorld({...sh,y:sh.y+sh.bob},170,-40);c.moveTo(bow.x,bow.y);c.quadraticCurveTo(bow.x+20,bow.y+40,bow.x+28,sh.y+18);c.stroke();
   waveBand(c,{y:sh.y+6+sh.bob*.3,amp:2,len:90,speed:1,t,x0,x1,fill:'rgba(9,24,34,.92)',crest:'rgba(215,230,240,.4)',crestW:1.4,phase:.4});
   waveBand(c,{y:438,amp:2.6,len:140,speed:.9,t,x0,x1,fill:'#0b1f2b',crest:'rgba(215,230,240,.35)',phase:2});
   // shore break foam rolling onto the sand
   if(this.images.jungle){const j=this.images.jungle,k=.7,bs=this.bushSoft;c.save();if(this.bush>0){c.translate(1100,460);c.rotate(Math.sin(t*40)*.012*this.bush);c.translate(-1100,-460)}else if(bs){c.translate(bs.x,460);c.rotate(Math.sin(bs.t*26)*.004*(1-bs.t));c.translate(-bs.x,-460)}c.drawImage(j,930,466-j.height*k,j.width*k,j.height*k);c.restore()}
   c.drawImage(A.beach,-100,430);
   {const run=(Math.sin(t*.55)+1)/2;c.save();c.fillStyle='rgba(40,70,85,.35)';c.beginPath();c.moveTo(x0,448);for(let x=x0;x<=x1;x+=18)c.lineTo(x,450+run*16+Math.sin(x*.03+t)*3);c.lineTo(x1,440);c.lineTo(x0,440);c.closePath();c.fill();c.strokeStyle=`rgba(235,245,250,${.35+.3*(1-run)})`;c.lineWidth=2;c.beginPath();for(let x=x0;x<=x1;x+=18){const y=450+run*16+Math.sin(x*.03+t)*3;x===x0?c.moveTo(x,y):c.lineTo(x,y)}c.stroke();c.restore()}
   for(const [i,cx] of [[0,330],[1,760],[2,980]].values()){const x=cx+Math.sin(t*.7+i*2)*26,y=500+i*9;c.save();c.translate(x,y);c.fillStyle='#b8432c';c.beginPath();c.ellipse(0,0,5,3.2,0,0,Math.PI*2);c.fill();c.strokeStyle='#8a2c1c';c.lineWidth=1;for(const s2 of [-1,1]){for(let k=0;k<3;k++){c.beginPath();c.moveTo(s2*4,0);c.lineTo(s2*(7+k),2+k+Math.sin(t*14+k)*1);c.stroke()}c.beginPath();c.arc(s2*6,-3,1.8,0,Math.PI*2);c.stroke()}c.fillStyle='#fff';c.fillRect(-2,-4,1.2,1.2);c.fillRect(1,-4,1.2,1.2);c.restore()}const foam=c.createLinearGradient(0,446,0,462);foam.addColorStop(0,'rgba(230,240,245,.0)');foam.addColorStop(.5,'rgba(230,240,245,.5)');foam.addColorStop(1,'rgba(230,240,245,0)');c.fillStyle=foam;c.beginPath();c.moveTo(x0,452);for(let x=x0;x<=x1;x+=16)c.lineTo(x,452+Math.sin(x*.02+t*1.3)*3+Math.sin(t*.9)*3);c.lineTo(x1,466);c.lineTo(x0,466);c.closePath();c.fill();
   // jungle edge with the ruined arch, a shaking bush and a watcher in the shadows
   c.save();const bs=this.bushSoft;if(this.bush>0){c.translate(1060,430);c.rotate(Math.sin(t*40)*.03*this.bush);c.translate(-1060,-430)}else if(bs){c.translate(bs.x,440);c.rotate(Math.sin(bs.t*26)*.008*(1-bs.t));c.translate(-bs.x,-440)}if(!this.images.jungle)c.drawImage(A.jungleRight,960,150,A.jungleRight.width*.68,A.jungleRight.height*.68);c.restore();
   if(this.glint){const g=this.glint,a=Math.sin(Math.min(1,g.t/.9)*Math.PI);c.fillStyle=`rgba(243,210,122,${a*.85})`;c.fillRect(g.x,g.y,2.2,1.4);c.fillRect(g.x+6,g.y,2.2,1.4)}
   if(this.lurker){const L=this.lurker,k=clamp(L.t/.4,0,1)*clamp((2.4-L.t)/.5,0,1);c.globalAlpha=k*.9;c.fillStyle='#05090a';c.beginPath();c.ellipse(L.x+L.t*12,L.y-30,9,22,0,0,TAU);c.fill();c.beginPath();c.arc(L.x+L.t*12,L.y-58,8,0,TAU);c.fill();c.globalAlpha=k;c.fillStyle='#f3d27a';c.fillRect(L.x+L.t*12-4,L.y-60,2.4,1.6);c.fillRect(L.x+L.t*12+2,L.y-60,2.4,1.6);c.globalAlpha=1}
   // beach props: rowboat, crates, barrels; crew carrying the wounded ashore
   this.props(c);
   const DC=ART().drawCrew;for(const m of [...this.crew].sort((a,b)=>a.y-b.y)){if(m.t<0)continue;let pose='idle',dir=m.dir;
    if(m.stand){pose=this.beat?.say==='captain'&&this.scene?.id==='arrival'?'point':'idle';dir=this.heroActor?.vis?-1:m.dir}
    else if(m.carry)pose=m.dir>0?'carry':'walk';else if(m.wounded)pose=m.done?'sit':'limp';else if(m.helper)pose=m.done?'idle':'support';
    DC(c,m.x,m.y,1.3,m.id,{t:t+m.x*.01,pose,dir,mood:m.wounded?'pain':''})}
   this.drawCast(c);this.drawHero(c);
   this.fx.draw(c,'front')});
  // foreground palms frame the shot and sway (parallax > 1)
  this.view(1.25,c=>{for(const [px,lean] of [[60,.8],[1500,-.6]]){const base=560,top=180,sway=Math.sin(t*.9+px)*.05;c.strokeStyle='#0a0f0c';c.lineCap='round';for(let i=0;i<14;i++){const k1=i/14,k2=(i+1)/14;c.lineWidth=22-12*k1;c.beginPath();c.moveTo(px+lean*k1*k1*160+sway*k1*120,base-(base-top)*k1);c.lineTo(px+lean*k2*k2*160+sway*k2*120,base-(base-top)*k2);c.stroke()}
    const tx=px+lean*160+sway*120,ty=top;c.fillStyle='#08120d';for(let i=0;i<9;i++){const a=-2.9+i*.66+Math.sin(t*1.3+i)*.06;c.save();c.translate(tx,ty);c.rotate(a);c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(70,-26,150,30);c.quadraticCurveTo(70,4,0,6);c.fill();c.restore()}}});
 }
 drawAdmiral(c,e,t){const A=this.admiral,k=Math.min(1,A.t/.6);const p=shipToWorld({...e,y:e.y+(e.bob||0)},-120,-96);c.save();c.translate(p.x,p.y);const sc=e.scale*1.5;c.scale(sc,sc);c.globalAlpha=k;
  c.globalCompositeOperation='lighter';const g=c.createRadialGradient(0,-30,0,0,-30,60);g.addColorStop(0,'rgba(255,60,40,.35)');g.addColorStop(1,'rgba(255,40,20,0)');c.fillStyle=g;c.fillRect(-60,-90,120,120);c.globalCompositeOperation='source-over';
  const rim=c=>{c.strokeStyle=`rgba(160,190,230,${.35+this.lightning*.6})`;c.lineWidth=1.2;c.stroke()};
  c.fillStyle='#0a0b10';c.beginPath();c.moveTo(-15+Math.sin(t*4)*2,2);c.quadraticCurveTo(-24+Math.sin(t*4)*4,-14,-15,-36);c.lineTo(15,-36);c.quadraticCurveTo(24,-14,18+Math.sin(t*4+1)*4,2);c.closePath();c.fill();rim(c);// cape
  c.fillStyle='#14121a';c.beginPath();c.moveTo(-8,0);c.lineTo(-11,-34);c.quadraticCurveTo(0,-41,11,-34);c.lineTo(8,0);c.closePath();c.fill();c.fillStyle='#8c2e28';c.fillRect(-1,-33,2,22);// coat + crimson trim
  c.fillStyle='#c9a24a';c.fillRect(-13,-36,6,3);c.fillRect(7,-36,6,3);// epaulettes
  c.fillStyle='#0a0b10';c.beginPath();c.arc(0,-47,8,0,Math.PI*2);c.fill();rim(c);c.beginPath();c.moveTo(-22,-52);c.quadraticCurveTo(0,-74,22,-52);c.quadraticCurveTo(0,-60,-22,-52);c.fill();rim(c);c.fillStyle='#d9d4c4';c.beginPath();c.arc(0,-60,2.4,0,Math.PI*2);c.fill();// bicorne + skull badge
  const arm=-1.9+Math.sin(Math.min(1,A.t/1.2)*Math.PI/2)*.5;c.save();c.translate(-6,-36);c.rotate(arm);c.fillRect(-2,0,4,16);c.strokeStyle='#c9cbd6';c.lineWidth=1.6;c.beginPath();c.moveTo(0,16);c.lineTo(0,38);c.stroke();c.restore();// sword raised: "Fire!"
  c.fillStyle='#ff4a3a';c.shadowColor='#ff3020';c.shadowBlur=8;c.fillRect(-5,-49,3,1.6);c.fillRect(2,-49,3,1.6);c.restore()}
 flames(c,sh,t,scale=1){const fires=this.fires||[];if(!fires.length)return;c.save();c.globalCompositeOperation='lighter';
  for(const [i,f] of fires.entries()){const p=shipToWorld({...sh,y:sh.y+(sh.bob||0)},f.lx,f.ly),sz=(f.small?9:14)*scale*(.85+.15*Math.sin(t*9+i));
   const glow=c.createRadialGradient(p.x,p.y,0,p.x,p.y,sz*5);glow.addColorStop(0,'rgba(255,150,60,.32)');glow.addColorStop(1,'rgba(255,90,20,0)');c.fillStyle=glow;c.beginPath();c.arc(p.x,p.y,sz*5,0,TAU);c.fill();
   for(let k=0;k<4;k++){const fx=p.x+(k-1.5)*sz*.45,h=sz*(1.6+.6*Math.sin(t*13+k*1.7+i)),w=sz*.5;const g=c.createLinearGradient(fx,p.y,fx,p.y-h);g.addColorStop(0,'rgba(255,230,150,.95)');g.addColorStop(.5,'rgba(255,140,40,.8)');g.addColorStop(1,'rgba(200,40,10,0)');c.fillStyle=g;c.beginPath();c.moveTo(fx-w,p.y);c.quadraticCurveTo(fx-w*.6,p.y-h*.5,fx+Math.sin(t*11+k)*w*.6,p.y-h);c.quadraticCurveTo(fx+w*.6,p.y-h*.5,fx+w,p.y);c.closePath();c.fill()}}
  c.restore()}
 props(c){const t=this.t;c.save();
  // rowboat pulled onto the sand
  c.fillStyle='#3b2817';c.beginPath();c.moveTo(372,470);c.quadraticCurveTo(410,492,470,486);c.lineTo(486,468);c.closePath();c.fill();c.strokeStyle='#6b4a2a';c.lineWidth=2;c.beginPath();c.moveTo(372,470);c.lineTo(486,468);c.stroke();c.fillStyle='#24180c';c.fillRect(398,474,60,3);c.strokeStyle='#4a3420';c.lineWidth=2.5;c.beginPath();c.moveTo(420,472);c.lineTo(392,500);c.stroke();
  for(const [x,y,w,h] of [[548,452,30,24],[574,458,24,18],[612,460,26,22]]){c.fillStyle='#5a3f22';c.fillRect(x,y,w,h);c.strokeStyle='#2b1c0e';c.lineWidth=1.5;c.strokeRect(x,y,w,h);c.beginPath();c.moveTo(x,y);c.lineTo(x+w,y+h);c.stroke()}
  for(const x of [650,672]){c.fillStyle='#4a321a';c.beginPath();c.ellipse(x,466,10,15,0,0,TAU);c.fill();c.strokeStyle='#8a7350';c.lineWidth=1.4;c.beginPath();c.moveTo(x-10,460);c.lineTo(x+10,460);c.moveTo(x-10,472);c.lineTo(x+10,472);c.stroke()}
  // small signal fire for the wounded
  c.globalCompositeOperation='lighter';const g=c.createRadialGradient(520,470,0,520,470,46);g.addColorStop(0,'rgba(255,170,80,.4)');g.addColorStop(1,'rgba(255,140,60,0)');c.fillStyle=g;c.beginPath();c.arc(520,470,46,0,TAU);c.fill();c.restore();
  if(Math.random()<.25)this.fx.add({kind:'fire',layer:'front',x:520+(Math.random()-.5)*6,y:474,vx:(Math.random()-.5)*8,vy:-26-Math.random()*20,r:3+Math.random()*3,life:.5})}
 loadCast(){const H=window.PirateHeroes;if(!H||this.castSkins)return;this.castSkins={};for(const m of this.cast||[]){try{const sk=H.createSkin(m.id);sk.load().then(()=>{if(!this.closed)this.castSkins[m.id]=sk}).catch(()=>{})}catch{}}}
 drawSkin(c,sk,x,y,dir,anim){const p={x:-15,y:-48,w:30,h:48,dir,anim,attack:0,throwT:0,inv:0,hurtT:0,dash:0,dead:false,animT:0,landT:0};c.save();c.translate(x,y);sk.scale=sk.id==='scarlet'?HERO_SCALE.scarlet:HERO_SCALE.frames;try{sk.draw(c,p,{time:this.t+x*.01})}catch(e){this.log('cast-draw:'+e.message)}c.restore()}
 drawCast(c){if(!this.cast)return;const speaking=this.beat?.say?this.speaker(this.beat.say).heroId:null;
  for(const m of [...this.cast].sort((a,b)=>a.y-b.y)){if(this.heroActor?.vis&&m.id===this.hero)continue;const sk=this.castSkins?.[m.id];if(!sk)continue;
   const focus=this.rollFocus&&this.cast.find(x=>x.id===this.rollFocus);const dir=this.heroActor?.vis?(this.heroActor.x<m.x?-1:1):focus&&focus!==m?(focus.x<m.x?-1:1):m.dir;
   if(m.id===speaking||m.id===this.rollFocus){c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(m.x,m.y-40,0,m.x,m.y-40,60);g.addColorStop(0,'rgba(255,210,140,.18)');g.addColorStop(1,'rgba(255,210,140,0)');c.fillStyle=g;c.fillRect(m.x-60,m.y-100,120,120);c.restore()}
   this.drawSkin(c,sk,m.x,m.y-(m.hopT>0?Math.sin(m.hopT/.35*Math.PI)*16:0),dir,m.hopT>0?'jump':'idle')}
  if(this.mapProp){const q=this.mapProp,k=ease(Math.min(1,q.t)),x=lerp(q.x0,q.x1,k),y=lerp(q.y0,q.y1,k)-Math.sin(k*Math.PI)*40;c.save();c.translate(x,y);c.rotate(k*6);c.fillStyle='#e8d6a8';c.fillRect(-9,-4,18,8);c.fillStyle='#b8452f';c.fillRect(-2,-4,4,8);c.strokeStyle='#5a4426';c.lineWidth=1;c.strokeRect(-9,-4,18,8);c.restore()}}
 drawHero(c){const h=this.heroActor;if(!h?.vis)return;let y=h.y;if(h.hop>0&&h.hop<1)y-=Math.sin(h.hop*Math.PI)*34;if(h.nod>0)y+=Math.sin(h.nod/.5*Math.PI*2)*4;
  const p={x:-15,y:-48,w:30,h:48,dir:h.dir,anim:h.anim,attack:0,throwT:0,inv:0,hurtT:0,dash:0,dead:false,animT:0,landT:0};
  c.save();c.translate(h.x,y);const sk=this.heroSkin;
  if(sk){sk.scale=sk.id==='scarlet'?HERO_SCALE.scarlet:HERO_SCALE.frames;try{sk.draw(c,p,{time:this.t})}catch(e){this.log('hero-draw:'+e.message);drawFigure(c,0,0,3,'#141016',{hat:true,t:this.t*8})}}
  else drawFigure(c,0,0,3,'#141016',{hat:true,t:this.t*8});c.restore()}
}

/* ------------------------------------------------------------------ Level 1 launch through the existing systems */
async function launchLevelOne(game,hero){
 try{
  const v=game?.__adventure,L=window.PirateLevels;if(!v||!L)return false;
  if(hero&&L.heroes.includes(hero))L.setHero(hero);
  if(window.PirateLevelEngine?.get(1)){
   v.active=true;v.phase='map';v.__fromMap=false;v.root.hidden=true;v.controls.hidden=true;v.modal.hidden=true;v.clearInputs?.();
   const ok=await L.launch(1,v),run=window.__pirateLevel;
   if(!ok||run?.def?.id!==1||!['play','pause'].includes(run.phase)){if(run?.def?.id===1)run.close();v.close();return false}
   run.clearInputs();return true;
  }
  v.active=true;v.phase='loading';v.root.hidden=false;v.controls.hidden=true;v.modal.hidden=false;v.card.innerHTML='<h2>'+v.t('loading')+'</h2>';
  await v.load();if(!v.active)return false;
  const ok=await L.launch(1,v);if(!ok||v.phase!=='playing'&&v.phase!=='pause'){try{v.close()}catch{}return false}
  v.clearInputs?.();return true;
 }catch(e){console.warn('Story hand-off',e?.message);try{game?.__adventure&&game.__adventure.phase==='loading'&&game.__adventure.close()}catch{}return false}
}
function storyRun(game){return window.__pirateLevel?.def?.id===1?window.__pirateLevel:game?.__adventure}

function showObjective(game,u){const v=storyRun(game);const host=v?.root||document.body;const el=document.createElement('div');el.className='pf-story-objective';el.setAttribute('role','status');
 const sm=document.createElement('small');sm.textContent=D().text(u.lang,'objective.label');const tx=document.createElement('span');tx.textContent=D().text(u.lang,'objective.text');el.append(sm,tx);host.append(el);
 requestAnimationFrame(()=>el.classList.add('on'));setTimeout(()=>el.classList.remove('on'),5200);setTimeout(()=>el.remove(),5900);v?.clearInputs?.()}
function showControlHints(game,u){const st=Save.read();if(!st||st.hintShown)return;Save.write({hintShown:true});const v=storyRun(game);if(!v?.root)return;
 const css='.pf-story-hint{position:absolute;z-index:31;pointer-events:none;padding:7px 12px;border-radius:10px;background:#0a1520e8;border:1px solid #b88f4a;color:#f6eedc;font:600 clamp(12px,3.4vh,15px)/1.25 Georgia,serif;box-shadow:0 8px 18px #000a;transition:opacity .4s;white-space:nowrap}.pf-story-hint:after{content:"";position:absolute;left:24px;bottom:-9px;border:9px solid transparent;border-bottom:0;border-top-color:#b88f4a}.pf-story-ring{position:absolute;z-index:30;pointer-events:none;border-radius:50%;border:3px solid #ffd98a;animation:pf-ring 1.1s ease-out infinite}@keyframes pf-ring{from{transform:scale(.8);opacity:1}to{transform:scale(1.35);opacity:0}}';
 if(!document.getElementById('pf-story-hint-style')){const s=document.createElement('style');s.id='pf-story-hint-style';s.textContent=css;document.head.append(s)}
 const show=(sel,key,done,ms)=>new Promise(ok=>{const t=v.root.querySelector(sel);if(!t||t.hidden){ok();return}const r=t.getBoundingClientRect(),hr=v.root.getBoundingClientRect();const ring=document.createElement('div');ring.className='pf-story-ring';Object.assign(ring.style,{left:r.left-hr.left+'px',top:r.top-hr.top+'px',width:r.width+'px',height:r.height+'px'});const tip=document.createElement('div');tip.className='pf-story-hint';tip.textContent=D().text(u.lang,key);v.root.append(ring,tip);
  const tr=tip.getBoundingClientRect();Object.assign(tip.style,{left:Math.max(8,Math.min(innerWidth-tr.width-8,r.left-hr.left+r.width/2-30))+'px',top:Math.max(8,r.top-hr.top-tr.height-14)+'px'});
  const t0=performance.now();const iv=setInterval(()=>{if(done()||performance.now()-t0>ms||(v.def?v.phase==='closed':!v.active)){clearInterval(iv);ring.remove();tip.style.opacity='0';setTimeout(()=>tip.remove(),400);ok()}},120)});
 const x0=v.p?.x||0;setTimeout(async()=>{await show(v.def?'.pl-stick':'.av-stick','hint.move',()=>Math.abs((v.p?.x||0)-x0)>30,7000);await show(v.def?'[data-k=attack]':'[data-action=attack]','hint.attack',()=>(v.p?.attack||0)>0,5000)},5600)}
function shield(ms){const s=document.createElement('div');s.className='pf-story-shield';const stop=e=>{e.preventDefault();e.stopPropagation()};for(const ty of ['pointerdown','pointerup','click','touchstart','touchend'])s.addEventListener(ty,stop,{capture:true,passive:false});document.body.append(s);setTimeout(()=>s.remove(),ms)}

/* ------------------------------------------------------------------ Level 1 outro (once, no rewards) */
const OUTRO=[{hero:'captain',role:'role.captain',text:'outro.1',side:'left',accent:'#e7c36f'},{hero:'scarlet',role:'role.mate',text:'outro.2',side:'left',accent:'#f08a7a'}];
const OUTRO_CSS=`#pirate-story-outro{position:fixed;inset:0;z-index:26000;background:linear-gradient(transparent 45%,#02070cb8);font-family:Georgia,serif;touch-action:manipulation;user-select:none}
#pirate-story-outro .o-dlg{position:absolute;left:50%;bottom:calc(12px + env(safe-area-inset-bottom));transform:translateX(-50%);width:min(820px,calc(100vw - 28px));display:flex;align-items:flex-end;animation:o-in .3s ease-out}
#pirate-story-outro .o-por{flex:none;width:clamp(70px,22vh,100px);height:clamp(70px,22vh,100px);border-radius:12px;border:2px solid #c9a35a;overflow:hidden;background:radial-gradient(circle at 50% 35%,#36506a,#101c28 72%);position:relative;z-index:2;margin-bottom:6px}
#pirate-story-outro .o-por img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 4%;transform:scale(1.75);transform-origin:50% 8%}
#pirate-story-outro .o-panel{flex:1;margin-left:-10px;padding:10px 18px 12px 24px;border-radius:12px;background:linear-gradient(180deg,#132433f2,#0a1520f4);border:1px solid #b88f4a;color:#f6eedc;min-height:clamp(58px,17vh,80px)}
#pirate-story-outro .o-name{font:700 clamp(13px,3.7vh,17px) Georgia,serif}#pirate-story-outro .o-name small{margin-left:8px;font:600 11px Georgia;letter-spacing:.12em;text-transform:uppercase;color:#b9c3c8}
#pirate-story-outro p{margin:3px 0 0;font:500 clamp(14px,4.1vh,18px)/1.38 Georgia,serif}
@keyframes o-in{from{opacity:0;transform:translate(-50%,14px)}}`;
function showOutro(u){if(document.getElementById('pirate-story-outro'))return;const lang=u?.lang||'en';if(!document.getElementById('pirate-story-outro-style')){const st=document.createElement('style');st.id='pirate-story-outro-style';st.textContent=OUTRO_CSS;document.head.append(st)}
 const r=document.createElement('section');r.id='pirate-story-outro';r.setAttribute('role','dialog');document.body.append(r);let i=0;const prevBack=window.__pfBack;
 const close=()=>{r.remove();if(window.__pfBack===back)window.__pfBack=prevBack;shield(350)};const back=()=>{close();return true};window.__pfBack=back;
 const show=()=>{const L=OUTRO[i];r.innerHTML='<div class="o-dlg"><div class="o-por"><img alt=""></div><div class="o-panel"><div class="o-name"><span></span><small></small></div><p></p></div></div>';
  const im=r.querySelector('img');im.src=heroPortraitSrc(L.hero);im.dataset.heroPortrait=L.hero;r.querySelector('.o-name span').textContent=heroName(L.hero);r.querySelector('.o-name span').style.color=L.accent;r.querySelector('small').textContent=D().text(lang,L.role);r.querySelector('p').textContent=D().text(lang,L.text)};
 r.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(++i>=OUTRO.length)close();else show()});show();return r}
function installOutro(){
 const schedule=u=>{const state=Save.read();if(state&&!state.outroShown){Save.write({outroShown:true});setTimeout(()=>showOutro(u),450)}};
 const A=window.PirateAdventure;if(A?.Voyage&&!A.__storyOutro){A.__storyOutro=true;const P=A.Voyage.prototype,fin=P.finish;P.finish=function(...a){const r=fin.apply(this,a);try{if(this.phase==='map'&&window.PirateLevels?.isCompleted(1))schedule(this.u)}catch(e){console.warn('Story outro',e?.message)}return r}};
 const E=window.PirateLevelEngine;if(E?.LevelRun&&!E.__storyOutro){E.__storyOutro=true;const P=E.LevelRun.prototype,complete=P.complete;P.complete=function(...a){const r=complete.apply(this,a);try{if(this.def.id===1&&this.phase==='complete'&&window.PirateLevels?.isCompleted(1))schedule({lang:this.lang})}catch(e){console.warn('Story outro',e?.message)}return r}};
}

/* The native GDevelop menu keeps rendering under full-screen overlays (story, levels). Cap it to 4 FPS while
 * one is open so phones spend their GPU on what the player sees; restored when the last overlay closes. */
const throttle={holders:new Set(),saved:null,
 hold(id){const g=capturedGame;this.holders.add(id);if(g?.setMaximumFps&&this.saved===null){this.saved=g._maxFPS||0;g.setMaximumFps(4)}},
 release(id){this.holders.delete(id);const g=capturedGame;if(!this.holders.size&&g?.setMaximumFps&&this.saved!==null){g.setMaximumFps(this.saved);this.saved=null}}};
window.PirateGdThrottle=throttle;
/* ------------------------------------------------------------------ startup + replay wiring */
let capturedGame=null;
function captureGame(){const A=window.PirateAdventure;if(!A||A.__storyHooked)return;A.__storyHooked=true;const mount=A.mount;A.mount=function(g,gd){if(g)capturedGame=g;const r=mount.call(this,g,gd);installReplay(g);return r}}
function menuIdle(g){const u=g?.__ui;if(!u||u.screen!=='menu'||document.hidden||innerHeight>innerWidth)return false;
 const boot=document.getElementById('studio-boot');if(boot&&!boot.classList.contains('leaving'))return false;const name=u.root?.querySelector('.name-dialog');if(name&&!name.hidden)return false;
 if(document.querySelector('#pf-shop,#pirate-world-map,#pirate-level,#pirate-cursed-island,#pirate-hero-select,#pirate-story'))return false;
 const v=document.getElementById('pirate-adventure');if(v&&!v.hidden)return false;
 if(window.PirateHarbor&&!window.PirateHarbor.state?.ready)return false;return true}
function shouldAutostart(){if(window.PirateStory?.suppressed)return false;const s=Save.read();if(!s||s.done||s.legacy)return false;return s.checkpoint in SCENE_OF}
function resumeScene(){const s=Save.read();if(!s)return 0;let i=SCENE_OF[s.checkpoint]??0;if(i>=3&&!(s.hero&&eligibleHeroes().some(h=>h.id===s.hero)))i=2;return i}
function play(game,opts){if(window.PirateStory.active)return window.PirateStory.active;const p=new StoryPlayer(game,opts);p.start();return p}
function installReplay(g){const u=g?.__ui;const panel=u?.root?.querySelector('.settings-screen .panel');if(!panel||panel.querySelector('.pf-story-replay'))return;
 const b=document.createElement('button');b.type='button';b.className='minor pf-story-replay';b.textContent=D().text(u.lang,'ui.replay');
 b.onclick=()=>{u.root.querySelector('.close-settings')?.click();setTimeout(()=>window.PirateStory.replay(),60)};const h=panel.querySelector('h2');h?h.after(b):panel.append(b)}
let pollTimer=0;
function poll(){captureGame();installOutro();const g=capturedGame;if(g){installReplay(g);const b=g.__ui?.root?.querySelector('.pf-story-replay');if(b)b.textContent=D().text(g.__ui.lang,'ui.replay')}
 if(g&&shouldAutostart()&&menuIdle(g)){play(g,{mode:'first',from:resumeScene()});}
 pollTimer=setTimeout(poll,shouldAutostart()?350:2000)}

window.PirateStory={
 KEY,Save,Player:StoryPlayer,active:null,suppressed:false,lastEvents:[],boot:BOOT,
 eligibleHeroes,heroName,shouldAutostart,resumeScene,
 replay(){const g=capturedGame;if(!g||window.PirateStory.active)return null;return play(g,{mode:'replay',from:0})},
 start(opts={}){const g=capturedGame;if(!g)return null;return play(g,{mode:opts.mode||'first',from:opts.from??resumeScene()})},
 state(){return Save.read()},showOutro(lang){return showOutro({lang})},
 get game(){return capturedGame}
};
if(typeof document!=='undefined'){captureGame();installOutro();pollTimer=setTimeout(poll,300)}
})();
