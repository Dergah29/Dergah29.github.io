/* Arena entry (harbour building "Arena"). The one-screen objective modes were removed at the owner's request
 * (2026-11-13); the Arena is now arena2/ (big maps: Flag Battle, Treasure Hunt, Grand Race) plus the native
 * Classic Duel, Classic training, Classic duel with a friend (relay) and the 3D Storm Duel (naval-duel.js).
 * This file only hosts the #pirate-arena-modes root, hands it to PirateArena2, and routes to the native duel. */
(()=>{'use strict';if(window.PirateArenaModes)return;
/* Full-screen games (Arena match, 3D naval duel) cover the harbour 3D scene and the native GDevelop canvas.
 * Those keep drawing underneath and, on phones, cost most of the frame (measured: 2 FPS -> 58 FPS once hidden).
 * PirateCover.hold(id) pauses and hides them; release(id) brings them back when the last holder leaves. */
if(!window.PirateCover){const css=document.createElement('style');css.textContent='html.pf-covered body>canvas,html.pf-covered #h3dCanvas,html.pf-covered #combat-feedback,html.pf-covered .bone-gameplay-fx,html.pf-covered #pirate-harbor{visibility:hidden!important}';
 window.PirateCover={holders:new Set(),hold(id){if(!document.head.contains(css))document.head.append(css);const was=this.holders.size;this.holders.add(id);if(!was){document.documentElement.classList.add('pf-covered');try{window.PirateGdThrottle?.hold('cover')}catch{}window.dispatchEvent(new Event('pirate:native-pause'))}},
  release(id){if(!this.holders.delete(id)||this.holders.size)return;document.documentElement.classList.remove('pf-covered');try{window.PirateGdThrottle?.release('cover')}catch{}window.dispatchEvent(new Event('pirate:native-resume'))}}}
let root=null,menu=null,nativeOpen=null,returnFocus=null,serial=0;
const css=document.createElement('style');css.textContent='#pirate-arena-modes{position:fixed;inset:0;z-index:30000;background:#071b26;color:#ffebbb;overflow:hidden;overscroll-behavior:contain}#pirate-arena-modes *{box-sizing:border-box}#pirate-arena-modes .am-note{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);z-index:9;background:#0d1d27ee;border:2px solid #c99b52;border-radius:12px;padding:10px 16px;font:600 14px system-ui}';
function ensure(){if(root)return;if(!css.isConnected)document.head.append(css);root=document.createElement('section');root.id='pirate-arena-modes';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Pirate Arena');document.body.append(root);
 root.addEventListener('keydown',e=>{if(e.key==='Escape'&&!window.PirateArena2?.state){e.preventDefault();close()}if(e.key==='Tab'){const a=[...root.querySelectorAll('button:not(:disabled)')].filter(n=>n.getClientRects().length);const i=a.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();a.at(-1)?.focus()}else if(!e.shiftKey&&i===a.length-1){e.preventDefault();a[0]?.focus()}}})}
function ownNativeRendering(game){
 const stack=game?.getSceneStack();if(!stack)return;
 const covered=()=>root&&!root.hidden;
 for(const method of ['step','renderWithoutStep']){
  const original=stack[method];
  if(typeof original!=='function')continue;
  const guarded=function(){return covered()?true:original.apply(this,arguments)};
  stack[method]=guarded;
  window.addEventListener('pagehide',e=>{if(!e.persisted&&stack[method]===guarded)stack[method]=original});
 }
}
function install(){if(nativeOpen)return true;menu=window.PirateMenuV2;if(!menu?.state?.ready)return false;ownNativeRendering(menu.g);nativeOpen=menu.openArena;const visible=menu.isVisible;menu.isVisible=function(){return root&&!root.hidden?false:visible.call(this)};menu.toggleArena=()=>open();const back=window.__pfBack;window.__pfBack=()=>root&&!root.hidden&&!window.PirateArena2?.state?(close(),true):back?.()||false;return true}
let installTimer;if(!install())installTimer=setInterval(()=>{if(install())clearInterval(installTimer)},250);
function note(text){root?.querySelector('.am-note')?.remove();const n=document.createElement('div');n.className='am-note';n.setAttribute('role','status');n.textContent=text;root?.append(n);setTimeout(()=>n.remove(),3500)}
/* Cannon Siege 3D and Jungle Runner 3D run full-screen in an iframe and close with a postMessage. */
function openGame(name){const id='pf-'+name;if(document.getElementById(id))return;const f=document.createElement('iframe');f.id=id;f.src=name+'/index.html';f.allow='autoplay';f.title=name;f.style.cssText='position:fixed;inset:0;width:100%;height:100%;border:0;z-index:2147483000;background:#0b1d2a';document.body.appendChild(f);window.PirateCover?.hold(id);const off=e=>{if(e.data&&e.data.type===name+'-exit'){f.remove();window.PirateCover?.release(id);removeEventListener('message',off)}};addEventListener('message',off)}
function close(){serial++;window.PirateArena2?.stop?.();if(root){root.hidden=true;root.replaceChildren()}returnFocus?.focus?.();returnFocus=null}
function open(){if(!nativeOpen)install();ensure();serial++;returnFocus=document.activeElement;root.hidden=false;const A2=window.PirateArena2;if(!A2){note('Arena could not load.');return}
 A2.lobby(root,{close,classic:()=>{A2.stop();legacy(false)},training:()=>{A2.stop();legacy(true)},friend:()=>{A2.stop();close();if(menu?.harbor)menu.harbor.openFriend();else{nativeOpen?.call(menu);menu?.menu?.querySelector('.play-friend')?.click()}},naval:()=>window.PirateNavalArena?.open(),siege:()=>openGame('siege'),runner:()=>openGame('runner')})}
/* Classic Duel / training run in the native game. Keep the lobby until Training's scene assets are ready. */
async function legacy(training){const token=serial;
 if(training&&menu?.g&&!menu.g.areSceneAssetsReady('Game')){try{await menu.g.loadSceneAssets('Game')}catch{if(token===serial)note('Training could not load. Please try again.');return}}
 if(token!==serial)return;close();if(menu?.harbor){menu.harbor.openClassic(training);return}nativeOpen?.call(menu);if(training)menu?.menu?.querySelector('.menu-training')?.click()}
/* a big-map mode can be started directly (tests, deep links) */
function start(mode,hero='scarlet',opts={}){open();return window.PirateArena2?.start(mode,Object.assign({hero},opts))}
window.addEventListener('pagehide',e=>{if(!e.persisted)clearInterval(installTimer);window.PirateArena2?.stop?.()});
window.addEventListener('pageshow',e=>{if(e.persisted&&root&&!root.hidden)open()});
window.PirateArenaModes={open,close,start,get state(){return window.PirateArena2?.state||null}};
})();
