/* Pirate Strike — illustrated Arena renderer for the four existing fighters.
 * Native GDevelop animations, frame textures, geometry, collision masks, points,
 * timing and behavior remain authoritative. A high-resolution PIXI child draws
 * the authored art; the native sprite's own draw is suppressed while loading.
 * Mari and premium fighters are deliberately outside this Arena adapter. */
(()=>{'use strict';
if(window.PirateArenaHeroes)return;
const FIGHTERS=/^(?:Player[1-4]|AI[1-4])(?:Blue|Red)Pirate$/;
const STATES={Idle:'idle',Move:'run',Jump:'jump',Fall:'fall',Land:'land',Hurt:'hurt',AttackA:'attackA',AttackB:'attackB',AttackC:'attackC',DashAttackRightLeft:'dashAttack',DashAttackUp:'dashAttack',DashAttackDown:'dashAttack',WallSlide:'fall',Block:'block',ThrowSword:'throw',Dash:'dash'};
const hudStyle=document.createElement('style');hudStyle.textContent=`
#fighter-ui[data-arena-scene] .hud{inset:6px 12px auto}
#fighter-ui[data-arena-scene] .score{padding:5px 8px;gap:6px;border-radius:12px;min-width:0;background:#102632d9}
#fighter-ui[data-arena-scene] .score svg{width:34px!important;height:34px!important}
#fighter-ui[data-arena-scene] .score strong{font-size:12px}
#fighter-ui[data-arena-scene] .score small{font-size:10px;margin-top:2px}
#fighter-ui[data-arena-scene] .health-bar{width:clamp(80px,13vw,140px);height:8px;margin-top:3px}
`;document.head.append(hudStyle);
const records=new WeakMap(),atlases=new WeakMap(),displays=new WeakMap(),uiRecords=new WeakMap(),portraits=new WeakMap();let installed=false;
const combatMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
// All four authored Classic idle silhouettes are 210px high, with feet at270.
// Render a44px body anchored at the same feet; native28px colliders stay unchanged.
const ART_SCALE=44/210,FOOT_X=49,FOOT_Y=32;
// GDevelop keeps its native logical scene and stretches its canvas with CSS.
// Give the illustrated sprites physical display pixels without changing that
// scene, its cameras, pointer coordinates or colliders. Cap2 limits the whole
// framebuffer to4pixels per logical pixel, including high-DPR mobile screens.
function releaseDisplay(scene){
 const game=scene.getGame(),d=displays.get(game);if(!d||d.scene!==scene)return;
 window.removeEventListener('resize',d.resize);
 if(d.sceneRenderer.onGameResolutionResized===d.onResize)d.sceneRenderer.onGameResolutionResized=d.nativeResize;
 if(game.getRenderer().convertPageToGameCoords===d.pointer)game.getRenderer().convertPageToGameCoords=d.nativePointer;
 d.pixi.resolution=d.original;d.pixi.resize(game.getGameResolutionWidth(),game.getGameResolutionHeight());
 displays.delete(game);
}
function physicalDisplay(scene){
 const game=scene.getGame(),renderer=game.getRenderer(),pixi=renderer.getPIXIRenderer();
 // This export is2D. Do not alter a shared PIXI/Three WebGL context.
 if(!pixi||renderer.getThreeRenderer?.())return;
 let d=displays.get(game);
 if(d&&d.scene!==scene){releaseDisplay(d.scene);d=null}
 if(!d){
  const sceneRenderer=scene.getRenderer();
  d={scene,sceneRenderer,pixi,original:pixi.resolution,nativeResize:sceneRenderer.onGameResolutionResized,nativePointer:renderer.convertPageToGameCoords};
  // GDevelop caches the full-window canvas size. The Arena-only reserved rail
  // changes its CSS box, so map visible coordinates while that rail is active.
  d.pointer=function(x,y){const canvas=this.getCanvas();if(!canvas?.classList.contains('arena-native-viewport'))return d.nativePointer.call(this,x,y);const box=canvas.getBoundingClientRect();return[(x-window.scrollX-box.left)*game.getGameResolutionWidth()/box.width,(y-window.scrollY-box.top)*game.getGameResolutionHeight()/box.height]};
  renderer.convertPageToGameCoords=d.pointer;
  // This GDevelop version derives stage scale from PIXI's physical width.
  // PIXI already applies resolution, so use its logical screen dimensions.
  d.normalize=()=>sceneRenderer.getPIXIContainer().scale.set(pixi.screen.width/game.getGameResolutionWidth(),pixi.screen.height/game.getGameResolutionHeight());
  d.onResize=function(){const value=d.nativeResize.apply(this,arguments);d.normalize();return value};
  sceneRenderer.onGameResolutionResized=d.onResize;
  d.resize=()=>physicalDisplay(scene);window.addEventListener('resize',d.resize);
  displays.set(game,d);
 }
 const canvas=renderer.getCanvas(),box=canvas?.getBoundingClientRect();
 if(!box?.width||!box.height)return;
 const w=game.getGameResolutionWidth(),h=game.getGameResolutionHeight();
 const ratio=Math.min(2,Math.max(1,Math.min(box.width/w,box.height/h)*(window.devicePixelRatio||1)));
 // Avoid floating-point layout noise reallocating the WebGL framebuffer.
 const resolution=Math.round(ratio*100)/100;
 if(pixi.resolution!==resolution){pixi.resolution=resolution;pixi.resize(w,h)}
 d.normalize();
}
function heroOf(image){
 const name=String(image||'').replace(/^.*[\\/]/,'');
 return /^Captain_/.test(name)?'captain':/^Shark_/.test(name)?'shark':/^Crab_/.test(name)?'crab':/^(?:Pirate|RedPirate|DashAttack(?:3)?\.png$)/.test(name)?'sailor':null;
}
function localSide(game){return game.__online?.role==='guest'?'Player2':'Player1'}
/* Mari plays on the Sailor fighter's native body (moves, colliders, timing) and is drawn with her own Arena atlas.
   Only the local player's fighter can be Mari; arena-mari.js sets window.__pfArenaHero from her selection card. */
function mariSelected(){return window.__pfArenaHero==='scarlet'}
function arenaHero(object,image){const h=heroOf(image);if(h!=='sailor'||!mariSelected()||!object)return h;try{const game=object.getRuntimeScene().getGame();return object.getName().startsWith(localSide(game))?'scarlet':h}catch{return h}}
function classic(hero){return{hero,outfit:'outfit-classic',weapon:'weapon-steel',hat:'hat-classic',...(hero==='scarlet'?{arena:true}:{})}}
function loadout(hero,isLocal){
 if(!isLocal||hero==='scarlet')return classic(hero);
 try{return Object.assign(classic(hero),window.PirateEconomy?.loadout?.(hero)||{},{hero})}catch{return classic(hero)}
}
function textureSet(art){
 let frames=atlases.get(art.image);if(frames)return frames;
 const P=window.PIXI,m=art.meta,base=P.BaseTexture.from(art.image);base.scaleMode=P.SCALE_MODES.LINEAR;
 frames=Array.from({length:m.frames},(_,i)=>new P.Texture(base,new P.Rectangle(i%m.columns*m.frameW,Math.floor(i/m.columns)*m.frameH,m.frameW,m.frameH)));
 atlases.set(art.image,frames);return frames;
}
function restore(record){
 if(!record)return;
 record.ready=false;record.retryAt=0;record.child.visible=false;if(record.fx)record.fx.visible=false;record.sprite.pirateArtStatus='native';
 if(record.sprite._render===record.suppress)record.sprite._render=record.nativeRender;
 if(record.sprite._renderCanvas===record.suppress)record.sprite._renderCanvas=record.nativeRenderCanvas;
}
function combatFeedback(record,pose,phase,x,y){
 const G=window.PIXI.Graphics;if(!G)return;let fx=record.fx;if(!fx){fx=record.fx=new G();fx.name='pirate-arena-combat-feedback';record.sprite.addChildAt(fx,0)}fx.visible=true;fx.clear();fx.beginFill(0x06121a,.22);fx.drawEllipse(x,y,9,2);fx.endFill();
 // The parent sprite already mirrors this child with native facing.
 const facing=1;
 if(record.cuePose!==pose){record.cuePose=pose;record.cueAt=record.time||0}
 const options=record.cueOptions||(record.cueOptions={});options.enabled=record.object.getRuntimeScene().getGame().__ui?.hitEffects!==false;options.reduced=combatMotion.matches;options.frameCount=record.object.getAnimationFrameCount();
 const cue=window.PirateArenaCombatCues?.sample(pose,phase,(record.time||0)-record.cueAt,record.cue||(record.cue={}),options);if(!cue)return;
 if(cue.anticipation){fx.lineStyle(.6,0xffdfa0,cue.anticipation);fx.arc(x+3,y-12,11,-1.4,-.5)}
 if(cue.stroke){const tilt=cue.sweep===2?-.7:cue.sweep===3?.7:0,a=-1.7+phase*2.2+tilt;fx.lineStyle(2.4,0xe7b971,cue.stroke*.25);fx.arc(x+3,y-12,14,a,a+1.35);fx.lineStyle(.7,0xfff5d6,cue.stroke);fx.arc(x+3,y-12,13,a,a+1.15)}
 if(cue.contact){fx.lineStyle(.9,pose==='land'?0xb9a27c:0xffdfac,cue.contact*.65);fx.drawEllipse(x,y-(pose==='land'?0:12),8+(1-cue.contact)*10,pose==='land'?2:8+(1-cue.contact)*5)}
 if(cue.trail){fx.lineStyle(.8,0x9de9e3,cue.trail);for(let i=0;i<3;i++){fx.moveTo(x-facing*5,y-6-i*4);fx.lineTo(x-facing*(17+i*2),y-6-i*4)}}
 if(cue.guard){fx.lineStyle(.7,0x91e9e8,cue.guard);fx.drawEllipse(x+facing*8,y-12,4,10)}
 if(cue.hurt){fx.lineStyle(.7,0xffb27b,cue.hurt);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;fx.moveTo(x+Math.cos(a)*6,y-12+Math.sin(a)*6);fx.lineTo(x+Math.cos(a)*10,y-12+Math.sin(a)*10)}}
}
function update(record){
 const o=record.object,frame=o._animator?.getCurrentFrame();
 if(!frame)return;
 const currentHero=arenaHero(o,frame.image);
 if(currentHero!==record.hero){record.child.visible=false;if(record.fx)record.fx.visible=false;record.sprite._render=currentHero?record.suppress:record.nativeRender;if(record.nativeRenderCanvas)record.sprite._renderCanvas=currentHero?record.suppress:record.nativeRenderCanvas;return}
 if(!record.ready)return;
 const name=o.getAnimationName(),pose=STATES[name]||'idle',a=record.art.meta.animations[pose]||record.art.meta.animations.idle;
 // Advance only when the original animator advances. Native loop/duration,
 // paused state, frame count and combo/dash transition events stay unchanged.
 const count=Math.max(1,o.getAnimationFrameCount());let index=a.frames[Math.min(a.frames.length-1,Math.floor(o.getAnimationFrame()/count*a.frames.length))];
 if(a.frames.some(f=>f>=24)){if(record.pose!==pose){record.pose=pose;record.poseAt=record.time||0;record.visualIndex=0;record.visualTick=record.time}const n=Math.max(0,Math.floor(((record.time||0)-record.poseAt)*a.fps));if(pose==='block')index=a.frames[n%a.frames.length];else{if(record.visualTick!==record.time&&record.presentedFrame===a.frames[record.visualIndex]){record.visualIndex=Math.min(n,record.visualIndex+1,a.frames.length-1);record.visualTick=record.time}index=a.frames[record.visualIndex]}}else record.pose=pose;
 const c=record.child,m=record.art.meta;c.texture=record.textures[index];
 c.anchor.set(m.anchor[0]/m.frameW,m.anchor[1]/m.frameH);c.scale.set(ART_SCALE*(window.PirateArenaCostumes?.scaleFor(m)||1));
 c.position.set(FOOT_X-frame.center.x,FOOT_Y-frame.center.y);
 c.tint=record.sprite.tint;c.blendMode=record.sprite.blendMode;c.visible=true;combatFeedback(record,pose,o.getAnimationFrame()/count,FOOT_X-frame.center.x,FOOT_Y-frame.center.y);
 c.pirateHero=record.hero;c.pirateOutfit=m.animationFallbackFor||m.outfit||'outfit-classic';c.pirateEffectiveOutfit=m.outfit||'outfit-classic';c.piratePose=pose;c.pirateFrame=index;
 record.sprite._render=record.suppress;if(record.nativeRenderCanvas)record.sprite._renderCanvas=record.suppress;record.sprite.pirateArtStatus='ready';
}
function recordFor(object){
 const sprite=object.getRendererObject(),renderer=object._renderer;let record=records.get(object);
 if(record&&record.sprite===sprite)return record;
 const child=new window.PIXI.Sprite();child.name='pirate-illustrated-hero';child.visible=false;sprite.addChild(child);
 record={object,sprite,child,ready:false,key:null,serial:0,nativeRender:sprite._render,nativeRenderCanvas:sprite._renderCanvas,suppress:function(){}};
 // Both PIXI backends must acknowledge presented frames and hide native art.
 for(const method of ['_render','_renderCanvas']){const draw=child[method];if(draw)child[method]=function(){record.presentedFrame=this.pirateFrame;return draw.apply(this,arguments)}}
 records.set(object,record);
 const nativeUpdateFrame=renderer.updateFrame;
 // GDevelop may update the frame after post-events, immediately before render.
 // Observe that update without changing its frame, texture, return or timing.
 renderer.updateFrame=function(frame){const value=nativeUpdateFrame.call(this,frame);update(record);return value};
 return record;
}
function dress(object,hero,load,isLocal){
 const r=recordFor(object),key=JSON.stringify([hero,isLocal,load.outfit,load.weapon,load.hat,load.accessory,load.effect]);
 if(r.key===key&&(!r.retryAt||performance.now()<r.retryAt)){update(r);return}
 r.retryAt=0;
 const serial=++r.serial,keep=r.ready&&r.hero===hero;r.key=key;r.hero=hero;
 if(!keep){r.ready=false;r.child.visible=false}
 // The original fighter remains the collider; even a failed download must not
 // turn an illustrated fighter into a pixel-art fallback.
 r.sprite._render=r.suppress;if(r.nativeRenderCanvas)r.sprite._renderCanvas=r.suppress;r.sprite.pirateArtStatus='loading';
 // Retry transient base-art failures at most once every2seconds. A previous
 // same-hero HQ illustration stays visible throughout a failed outfit load.
 const fail=()=>{if(r.serial!==serial)return;r.retryAt=performance.now()+2000;r.sprite.pirateArtStatus=r.ready?'ready':'unavailable';console.error('Arena hero artwork unavailable: '+hero)};
 const H=window.PirateHeroes;if(!H?.loadIllustration){fail();return}
 Promise.resolve(H.loadIllustration(hero,load)).then(art=>window.PirateArenaPresentation?.enhance?window.PirateArenaPresentation.enhance(art):art).then(art=>{
  if(r.serial!==serial)return;
  if(!art||art.meta?.hero!==hero||!art.image){fail();return}
  r.art=art;r.textures=textureSet(art);r.ready=true;if(!art.meta.animationFallbackFor&&art.meta.image!==H.illustratedName(hero,load)+'-atlas.webp')r.retryAt=performance.now()+2000;update(r);
 }).catch(fail);
}
function restoreUI(native){
 const r=native&&uiRecords.get(native);if(!r)return;
 r.serial++;r.element.remove();native.style.display=r.display;uiRecords.delete(native);
}
function portrait(art){
 let url=portraits.get(art.image);if(url)return url;
 const c=document.createElement('canvas');c.width=c.height=128;
 const k=art.meta.frameW/256;
 c.getContext('2d').drawImage(art.image,56*k,50*k,144*k,144*k,0,0,128,128);
 url=c.toDataURL();portraits.set(art.image,url);return url;
}
function dressUI(host,native,hero,load,head){
 if(!native||!host)return;
 if(!hero){restoreUI(native);return}
 const H=window.PirateHeroes;if(!H?.loadIllustration||!H.illustratedCard)return;
 let r=uiRecords.get(native);
 if(!r){
  const e=head?document.createElementNS('http://www.w3.org/2000/svg','image'):document.createElement('img');
  e.setAttribute('class',head?'pirate-arena-portrait':'pirate-arena-card');e.setAttribute('aria-hidden','true');
  if(head){e.setAttribute('x','35');e.setAttribute('y','2');e.setAttribute('width','42');e.setAttribute('height','34');e.setAttribute('preserveAspectRatio','xMidYMid slice')}
  else{e.alt='';e.style.cssText='width:100%;height:100%;min-height:0;object-fit:contain;flex:1 1 0;filter:drop-shadow(0 5px 4px #0008)'}
  e.style.imageRendering='auto';e.style.visibility='hidden';host.appendChild(e);
  r={element:e,display:native.style.display,key:null,serial:0,hero:null,retryAt:0};uiRecords.set(native,r);native.style.display='none';
 }
 const key=hero+'|'+H.illustratedName(hero,load);
 if(r.key===key&&(!r.retryAt||performance.now()<r.retryAt))return;
 if(r.hero!==hero)r.element.style.visibility='hidden';
 r.key=key;r.hero=hero;r.retryAt=0;const serial=++r.serial;
 Promise.resolve(H.loadIllustration(hero,load)).then(art=>window.PirateArenaPresentation?.enhance?window.PirateArenaPresentation.enhance(art):art).then(async art=>{
  if(!art||art.meta.hero!==hero)throw Error('Arena UI artwork unavailable');
  const url=head?portrait(art):await H.illustratedCard(hero,art.meta.animationFallbackFor?{outfit:'outfit-classic'}:load);
  if(r.serial!==serial||!url)return;
  if(head)r.element.setAttribute('href',url);else r.element.src=url;
  r.element.dataset.arenaHero=hero;r.element.dataset.arenaOutfit=art.meta.animationFallbackFor||art.meta.outfit||'outfit-classic';r.element.dataset.arenaEffectiveOutfit=art.meta.outfit||'outfit-classic';r.element.setAttribute('title',art.meta.animationFallbackFor?'Classic animation fallback — equipped costume preserved':'');r.element.style.visibility='visible';
  if(!art.meta.animationFallbackFor&&art.meta.image!==H.illustratedName(hero,load)+'-atlas.webp')r.retryAt=performance.now()+2000;
 }).catch(()=>{if(r.serial===serial)r.retryAt=performance.now()+2000});
}
function refreshUI(scene){
 const game=scene.getGame(),root=game.__ui?.root;if(!root)return;root.toggleAttribute('data-arena-scene',scene.getName?.()==='Game');
 const heroes=['sailor','captain','shark','crab'];
 for(const button of root.querySelectorAll('.fighter-card[data-fighter]')){
  const hero=heroes[Number(button.dataset.fighter)];if(hero)dressUI(button,button.querySelector('svg'),hero,loadout(hero,true),false);
 }
 // The online lobby is outside fighter-ui; its native network/ready controls
 // remain in charge while these independent images replace only the artwork.
 for(const button of game.__online?.panel?.querySelectorAll('.online-fighter-card[data-fighter]')||[]){
  const hero=heroes[Number(button.dataset.fighter)];if(!hero)continue;
  dressUI(button,button.querySelector('svg'),hero,loadout(hero,true),false);
  const image=button.querySelector('.pirate-arena-card');if(image&&!image.dataset.arenaLobby){image.dataset.arenaLobby='true';image.style.width='60px';image.style.height='58px';image.style.flex='0 0 58px'}
 }
 const selected=root.querySelector('#captain-select')?.value,hero=selected==='original'?(mariSelected()?'scarlet':'sailor'):heroes.includes(selected)?selected:null;
 const preview=root.querySelector('.hero-sprite');if(preview)dressUI(preview,preview.querySelector('svg'),hero,loadout(hero,true),false);
 const setup=root.querySelector('.setup-avatar');if(setup)dressUI(setup.parentNode,setup,hero,loadout(hero,true),true);
 if(scene.getName?.()!=='Game')return;
 const own=localSide(game),other=own==='Player2'?'Player1':game.__online?.started?'Player2':'AI1';
 for(const [css,side]of [['own',own],['other',other]]){
  const native=root.querySelector('.'+css+'-avatar'),o=scene.getObjects(side+'BluePirate')[0]||scene.getObjects(side+'RedPirate')[0];
  const h=o&&!o.getVariables().get('PremiumBone').getAsBoolean()?arenaHero(o,o._animator?.getCurrentFrame()?.image):null;
  if(native)dressUI(native.parentNode,native,h,loadout(h,side===own),true);
 }
}
function refresh(scene){
 const ui=scene.getGame().__ui,rail=scene.getName?.()==='Game'&&ui?.controls!=='large'&&!Object.keys(ui?.controlLayout?.config?.positions||{}).length;ui?.root.toggleAttribute('data-arena-rail',rail);const surface=scene.getGame().getRenderer().getPIXIRenderer()?.view;surface?.classList.toggle('arena-native-viewport',rail);if(rail)surface.style.setProperty('--arena-native-aspect',scene.getGame().getGameResolutionWidth()/scene.getGame().getGameResolutionHeight());
 refreshUI(scene);
 if(!window.PIXI)return;
 if(scene.getName?.()!=='Game'){const active=displays.get(scene.getGame());if(active)releaseDisplay(active.scene);return}
 physicalDisplay(scene);
 const game=scene.getGame(),side=localSide(game);
 for(const o of scene.getAdhocListOfAllInstances()){
  const name=o.getName();if(!FIGHTERS.test(name))continue;
  const frame=o._animator?.getCurrentFrame(),hero=arenaHero(o,frame?.image);
  if(!hero||o.getVariables?.().get('PremiumBone').getAsBoolean?.()){const old=records.get(o);if(old){old.serial++;old.key=null;restore(old)}continue}
  const isLocal=name.startsWith(side);const record=records.get(o);if(record){const nativeTime=scene.getTimeManager().getTimeFromStart()/1000,replica=game.__online?.role==='guest',paused=document.hidden||game.__ui?.paused||game.__online?.suspended||scene.getVariables().get('MobilePaused').getAsNumber()===1;record.time=window.PirateArenaCombatCues?window.PirateArenaCombatCues.clock(record,nativeTime,performance.now()/1000,replica,paused):nativeTime;}dress(o,hero,loadout(hero,isLocal),isLocal);
 }
}
function install(){
 const G=window.gdjs;if(installed)return true;if(!G?.registerRuntimeScenePostEventsCallback)return false;installed=true;
 G.registerRuntimeScenePostEventsCallback(refresh);
 G.registerRuntimeSceneUnloadingCallback?.(releaseDisplay);
 // Resolve the small shared authored set before a match. The hero loader owns
 // validation/fallback and deduplicates these promises with later scene loads.
 const H=window.PirateHeroes;for(const hero of ['sailor','captain','shark','crab']){
  Promise.resolve(H?.loadIllustration?.(hero,classic(hero))).catch(()=>{});
  Promise.resolve(H?.loadIllustration?.(hero,loadout(hero,true))).catch(()=>{});
 }
 return true;
}
window.PirateArenaHeroes={refresh,install};install();
})();
