/* Pirate Strike — one background-music director for the whole game.
 * Every screen asks for a track instead of playing its own loop, so two songs never
 * overlap: main menu / island map / hero select → 'menu'; Level 1 Haven Bay (and the
 * standalone Blacktide voyage) → 'level1'; Level 2 → 'level2' and 'ambush'; Level 3 → 'level3' and 'guardian'
 * (Ancient Guardian); Level 4 → 'level4'/'level4battle'; Level 5 Cursed Island → 'level5', the Totem
 * Shaman → 'island' (phase 3: 'level5rage'), victory story → 'level5win'; Level 6 Stormbreaker Island →
 * 'level6', its encounters → 'level4battle', the Storm Captain → 'level6boss', the relit lighthouse →
 * 'level5win'; Meyxana (harbor tavern) → 'tavern'; Level 7 The Dark Lighthouse → 'level7', its ambushes → 'level4battle', the Lightkeeper →
 * 'level7boss', the shattered lens → 'level5win'; Level 8 Frozen Fleet → 'level8', its ambushes → 'level4battle',
 * Captain Rime → 'level8boss', the Admiral's chart → 'level5win'; Level 9 Chain Fortress → 'level9', its ambushes →
 * 'level4battle', the siege of the gate → 'level9siege', the open gate → 'level5win'; online/bot arena → 'arena'.
 * Endless Sea mini-boss arenas → 'seaboss'.
 * Changes cross-fade; loops are sample-seamless. Music and effects volumes are separate,
 * the existing SOUND switch (pf-sound) mutes everything, and the choices are saved
 * (pf-audio-v1). Audio starts on the first touch/key (mobile autoplay rules). */
(()=>{'use strict';
if(window.PirateMusic)return;
const M='adventure/levels/assets/music/',L3='adventure/levels/assets/level-03/';
const TRACKS={
 menu:{src:M+'theme.ogg',gain:.85},   // main theme (Higgsfield / ElevenLabs Music, see ASSET_MANIFEST); the older menu.ogg stays in the repo
 seaboss:{src:M+'sea-boss.ogg',gain:.85},   // Endless Sea mini-boss battle (Higgsfield / ElevenLabs Music)
 level1:{src:M+'harbor.ogg',gain:.9},
 boss1:{src:'adventure/assets/boss.wav',gain:.8},
 level2:{src:L3+'music-jungle.ogg',gain:1},
 ambush:{src:M+'ambush.ogg',gain:.9},
 level3:{src:L3+'music-ruins.ogg',gain:1},
 guardian:{src:L3+'music-guardian.ogg',gain:.95},
 level4:{src:M+'cove.ogg',gain:.95},
 level4battle:{src:M+'cove-battle.ogg',gain:.95},
 island:{src:M+'island.ogg',gain:1.3},
 level5:{src:M+'cursed.ogg',gain:.95},
 level5rage:{src:M+'shaman-rage.ogg',gain:.95},
 level5win:{src:M+'triumph.ogg',gain:.95},
 level6:{src:M+'storm.ogg',gain:.95},
 level6boss:{src:M+'captain.ogg',gain:.95},
 level7:{src:M+'lighthouse.ogg',gain:.95},
 level7boss:{src:M+'keeper.ogg',gain:.95},
 level8:{src:M+'frozen.ogg',gain:.95},
 level8boss:{src:M+'rime.ogg',gain:.95},
 level9:{src:M+'fortress.ogg',gain:.95},
 level9siege:{src:M+'siege.ogg',gain:.95},
 level10:{src:M+'warship.ogg',gain:.95},
 level10boss:{src:M+'admiral.ogg',gain:.95},
 level10inferno:{src:M+'inferno.ogg',gain:.95},
 arena:{src:M+'arena.ogg',gain:1},
 tavern:{src:M+'tavern.ogg',gain:.85}};   // Meyxana interior (v3/tavern/tools/tavern_music.py)   // original (tools/music.py); replaces the template's InGame.ogg (licence unproven)
/* engine level id + the level's own music name → director track */
const LEVEL_MAP={'1:haven':'level1','1:battle':'level4battle','1:ambush':'ambush','1:caves':'level4','1:fortress':'level9','1:boss':'level9siege','1:triumph':'level5win','2:jungle':'level2','2:guardian':'ambush','3:ruins':'level3','3:guardian':'guardian','4:cove':'level4','4:battle':'level4battle','5:cursed':'level5','5:shaman':'island','5:rage':'level5rage','5:triumph':'level5win','6:storm':'level6','6:battle':'level4battle','6:captain':'level6boss','7:lighthouse':'level7','7:battle':'level4battle','7:keeper':'level7boss','7:triumph':'level5win','8:frozen':'level8','8:battle':'level4battle','8:rime':'level8boss','8:triumph':'level5win','9:fortress':'level9','9:battle':'level4battle','9:siege':'level9siege','9:triumph':'level5win','10:warship':'level10','10:battle':'level4battle','10:admiral':'level10boss','10:inferno':'level10inferno','10:triumph':'level5win','6:triumph':'level5win'};
const KEY='pf-audio-v1',FADE=1.4,BASE=.6;
const words={
 en:{music:'Music',sfx:'Effects',on:'ON',off:'OFF'},az:{music:'Musiqi',sfx:'Effektlər',on:'AÇIQ',off:'BAĞLI'},tr:{music:'Müzik',sfx:'Efektler',on:'AÇIK',off:'KAPALI'},
 ru:{music:'Музыка',sfx:'Эффекты',on:'ВКЛ',off:'ВЫКЛ'},pl:{music:'Muzyka',sfx:'Efekty',on:'WŁ.',off:'WYŁ.'}};
const clamp01=v=>Math.max(0,Math.min(1,Number.isFinite(+v)?+v:1));
function readSettings(){try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&typeof s==='object')return{music:clamp01(s.music??.7),sfx:clamp01(s.sfx??1)}}catch{}return{music:.7,sfx:1}}

const D={
 tracks:TRACKS,settings:readSettings(),wants:{},current:null,pending:null,since:0,ctx:null,buffers:new Map(),loading:new Map(),voice:null,rate:1,log:[],
 get muted(){try{return localStorage.getItem('pf-sound')==='off'}catch{return false}},
 /* effects volume multiplier other audio code applies to its own buses (0 when muted) */
 get sfx(){return this.muted?0:this.settings.sfx},
 get music(){return this.settings.music},
 want(owner,track){if(track&&!TRACKS[track])track=null;if(this.wants[owner]===track)return;this.wants[owner]=track;this.tick()},
 levelTrack(id,name){if(!name)return null;if(id==='endless')return TRACKS[name]?name:null;return LEVEL_MAP[id+':'+name]||null},   // Endless Sea names tracks directly
 set(k,v){this.settings[k]=clamp01(v);try{localStorage.setItem(KEY,JSON.stringify(this.settings))}catch{}this.apply();for(const f of this.listeners)try{f(this.settings)}catch{}},
 listeners:new Set(),
 onChange(f){this.listeners.add(f);return()=>this.listeners.delete(f)},
 ensure(){
  if(this.ctx)return this.ctx;const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;
  try{const c=this.ctx=new C();this.out=c.createGain();this.out.gain.value=this.level();this.out.connect(c.destination)}catch{this.ctx=null}
  return this.ctx;
 },
 level(){return this.muted?0:BASE*this.settings.music*(this.duck?.4:1)},
 apply(){if(!this.ctx)return;const t=this.ctx.currentTime;this.out.gain.cancelScheduledValues(t);this.out.gain.setTargetAtTime(this.level(),t,.12)},
 unlock(){const c=this.ensure();if(c&&c.state==='suspended'&&!document.hidden)c.resume().catch(()=>{});this.tick()},
 load(name){
  if(this.buffers.has(name))return Promise.resolve(this.buffers.get(name));
  if(this.loading.has(name))return this.loading.get(name);
  const c=this.ensure();if(!c)return Promise.resolve(null);
  const p=fetch(TRACKS[name].src).then(r=>{if(!r.ok)throw Error(r.status);return r.arrayBuffer()})
   .then(b=>new Promise((ok,fail)=>{const q=c.decodeAudioData(b,ok,fail);q?.then?.(ok,fail)}))
   .then(buf=>{this.buffers.set(name,buf);return buf}).catch(e=>{console.warn('[music]',name,e);return null});
  this.loading.set(name,p);return p;
 },
 /* which track the current screen needs */
 desired(){
  const lv=window.__pirateLevel;
  if(lv&&lv.phase&&lv.phase!=='closed'){this.duck=lv.phase==='pause';return this.wants.level??null}
  this.duck=false;
  if(document.getElementById('cursed-island-prototype'))return this.wants.island??'island';
  if(document.getElementById('pirate-tavern'))return'tavern';   // the Meyxana interior and its table games
  const map=window.PirateWorldMap?.current;if(map&&map.alive!==false&&document.getElementById('pirate-world-map'))return'menu';
  if(document.getElementById('pirate-hero-select'))return'menu';
  const v=this.voyage;if(v&&v.active&&v.root&&!v.root.hidden){if(v.phase==='map')return'menu';if(v.phase==='paused'||v.phase==='pause')this.duck=true;return this.wants.voyage??'level1'}
  // the HTML main menu sits over the GDevelop menu scene; its music is ours too
  if(this.wants.gd!=='arena'){const b=document.querySelector('#fighter-ui .adventure-entry');if(b&&b.offsetParent!==null)return'menu'}
  return this.wants.gd??null;
 },
 tick(){
  const want=this.desired();this.apply();
  if(want===this.current){this.pending=null;return}
  // debounce: scene changes often pass through a frame with no owner (menu → choose screen)
  const now=performance.now();if(this.pending!==want){this.pending=want;this.since=now;return}
  if(now-this.since<350)return;
  this.pending=null;this.switchTo(want);
 },
 async switchTo(name){
  this.current=name;this.log.push(name||'-');if(this.log.length>60)this.log.shift();
  const c=this.ensure();if(!c)return;
  const old=this.voice;this.voice=null;
  if(old){const t=c.currentTime;old.g.gain.cancelScheduledValues(t);old.g.gain.setValueAtTime(old.g.gain.value,t);old.g.gain.linearRampToValueAtTime(0,t+FADE);try{old.src.stop(t+FADE+.05)}catch{}}
  if(!name)return;
  const buf=await this.load(name);
  if(!buf||this.current!==name||this.voice)return;
  const t=c.currentTime,src=c.createBufferSource(),g=c.createGain();
  src.buffer=buf;src.loop=true;src.playbackRate.value=name==='arena'?this.rate:1;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(TRACKS[name].gain,t+(old?FADE:.8));
  src.connect(g);g.connect(this.out);src.start(t+(old?.25:0));
  this.voice={src,g,name};
 },
 setRate(r){this.rate=r;if(this.voice?.name==='arena')try{this.voice.src.playbackRate.setTargetAtTime(r,this.ctx.currentTime,.2)}catch{}},
 /* two sliders (music / effects) for a settings or pause panel */
 sliders(lang){
  const w=words[lang]||words.en,box=document.createElement('div');box.className='pm-sliders';
  box.style.cssText='display:grid;grid-template-columns:auto 1fr auto;gap:6px 10px;align-items:center;margin:8px 0;font:inherit;font-size:.92em;text-align:left';
  for(const k of ['music','sfx']){
   const l=document.createElement('label'),r=document.createElement('input'),v=document.createElement('span');
   l.textContent=(k==='music'?'♫ ':'🔊 ')+w[k];r.type='range';r.min=0;r.max=100;r.step=5;r.value=Math.round(this.settings[k]*100);
   r.setAttribute('aria-label',w[k]);r.style.cssText='width:100%;min-width:110px;accent-color:#e7b54c;height:28px;touch-action:manipulation';
   v.textContent=r.value+'%';v.style.minWidth='3.2em';
   r.oninput=()=>{v.textContent=r.value+'%';this.set(k,r.value/100)};
   r.addEventListener('pointerdown',e=>e.stopPropagation());
   l.htmlFor=r.id='pm-'+k+'-'+Math.random().toString(36).slice(2,7);
   box.append(l,r,v);
  }
  return box;
 }
};

/* --- GDevelop menu/arena music goes through the director instead of channel 0 */
function hookGDevelop(){
 const S=window.gdjs?.evtTools?.sound;if(!S||S.__pirateMusic)return!!S;S.__pirateMusic=true;
 const play=S.playSoundOnChannel,fade=S.fadeSoundVolume,pitch=S.setSoundOnChannelPitch,gv=S.setGlobalVolume;
 S.playSoundOnChannel=function(scene,file,channel,...a){
  if(channel===0&&/^(MainMenu|ChooseCharacter)\.ogg$/.test(file)){D.want('gd','menu');return}
  if(channel===0&&file==='InGame.ogg'){D.want('gd','arena');return}
  return play.call(this,scene,file,channel,...a)};
 S.fadeSoundVolume=function(scene,channel,vol,...a){if(channel===0&&vol===0)D.want('gd',null);return fade.call(this,scene,channel,vol,...a)};
 S.setSoundOnChannelPitch=function(scene,channel,r){if(channel===0)D.setRate(r);return pitch.call(this,scene,channel,r)};
 // the effects slider scales every GDevelop sound (the SOUND switch still sends 0 or 100)
 S.setGlobalVolume=function(scene,v){D.gdScene=scene;D.gdVolume=v;return gv.call(this,scene,v*D.settings.sfx)};
 D.onChange(()=>{if(D.gdScene&&D.gdVolume!=null)try{gv.call(S,D.gdScene,D.gdVolume*D.settings.sfx)}catch{}});
 return true;
}
/* --- Level 1 (Haven Bay and the standalone Blacktide voyage) */
function hookVoyage(){
 const A=window.PirateAdventure;if(!A||A.musicHooked)return!!A;A.musicHooked=true;const P=A.Voyage.prototype;
 const resume=P.audioResume,open=P.open,pause=P.pause;
 // pause card: separate music / effects sliders under the buttons
 P.pause=function(...a){const r=pause.apply(this,a);try{if(this.phase==='pause'&&this.card&&!this.card.querySelector('.pm-sliders')){const w=words[this.u?.lang]||words.en;for(const b of this.card.querySelectorAll('button'))b.textContent=b.textContent.replace(/: (ON|OFF)$/,(m,v)=>': '+w[v==='ON'?'on':'off']);this.card.append(D.sliders(this.u?.lang||'en'))}}catch{}return r};
 P.music=function(k){D.voyage=this;this.track={stop(){}};D.want('voyage',k==='boss'&&!this.__fromMap?'boss1':'level1')};
 P.stopMusic=function(){this.track=null;D.want('voyage',null)};
 P.open=function(...a){D.voyage=this;D.want('voyage',null);return open.apply(this,a)};
 P.audioResume=async function(...a){const r=await resume.apply(this,a);try{if(this.gain){this.gain.gain.value=.65*D.settings.sfx;D.onChange(()=>{if(this.gain)this.gain.gain.value=.65*D.settings.sfx})}}catch{}D.unlock();return r};
 return true;
}
/* --- settings panel of the main menu: sliders under the SOUND switch */
function mountMenuSliders(){
 const t=document.querySelector('#fighter-ui .sound-toggle');if(!t||t.parentElement.parentElement.querySelector('.pm-sliders'))return;
 const row=t.closest('.row')||t.parentElement;let lang='en';try{lang=localStorage.getItem('pf-lang')||'en'}catch{}
 const s=D.sliders(lang);s.style.gridColumn='1 / -1';row.after(s);
}

for(const ev of ['pointerdown','touchend','keydown','click'])addEventListener(ev,()=>D.unlock(),{capture:true,passive:true});
document.addEventListener('visibilitychange',()=>{const c=D.ctx;if(!c)return;if(document.hidden)c.suspend?.().catch(()=>{});else if(D.unlocked!==false)c.resume?.().catch(()=>{})});
let hooks=0;const boot=setInterval(()=>{const a=hookGDevelop(),b=hookVoyage();if((a&&b)||++hooks>120)clearInterval(boot)},250);
hookGDevelop();hookVoyage();
setInterval(()=>{D.tick();mountMenuSliders()},250);
window.PirateMusic=D;
})();
