/* Original studio presentation. Engine credits remain in Settings/Credits. */
(()=>{
'use strict';
if(window.__dergahSplashInstalled)return;
window.__dergahSplashInstalled=true;
const style=document.createElement('style');
style.textContent=`
#studio-boot{position:fixed;inset:0;background:#000;z-index:2147483647;display:flex;align-items:center;justify-content:center;opacity:1;transition:opacity .32s ease;pointer-events:auto}
#studio-boot.leaving{opacity:0;pointer-events:none}
#studio-boot .studio-mark{position:relative;width:min(76vw,1080px);animation:studio-arrive .7s ease-out both}
#studio-boot img{display:block;width:100%;height:auto;user-select:none;-webkit-user-drag:none}
#studio-boot .studio-sheen{position:absolute;inset:0;overflow:hidden;mix-blend-mode:screen;pointer-events:none;mask-image:url('studio-logo.webp');mask-size:100% 100%;mask-mode:luminance;-webkit-mask-image:url('studio-logo.webp');-webkit-mask-size:100% 100%}
#studio-boot .studio-sheen:after{content:'';position:absolute;top:0;left:-35%;width:20%;height:100%;background:linear-gradient(100deg,transparent,#d4ffffb0,transparent);transform:skewX(-20deg);animation:studio-light 2.6s .5s ease-in-out infinite}
#studio-boot .studio-glow{position:absolute;left:2%;top:12%;width:27%;height:75%;border-radius:50%;background:#00bfff;filter:blur(32px);opacity:.1;animation:studio-breathe 2.1s ease-in-out infinite;z-index:-1}
#studio-boot .studio-track{position:absolute;bottom:max(10%,28px);width:min(32vw,360px);height:4px;border-radius:4px;background:#20252e;overflow:hidden}
#studio-boot .studio-progress{height:100%;width:0;background:#00d9ed;border-radius:4px;box-shadow:0 0 10px #00d9ed;transition:width .15s linear}
@keyframes studio-arrive{from{opacity:0;transform:translateY(5px) scale(.97)}to{opacity:1;transform:none}}
@keyframes studio-light{0%,12%{left:-35%}65%,100%{left:130%}}
@keyframes studio-breathe{0%,100%{opacity:.07}50%{opacity:.2}}
@media(prefers-reduced-motion:reduce){#studio-boot,#studio-boot *{animation:none!important;transition:none!important}#studio-boot .studio-sheen,#studio-boot .studio-glow{display:none}}
`;
document.head.appendChild(style);
const el=document.createElement('div');el.id='studio-boot';el.setAttribute('aria-label','Dergah Aztech');
el.innerHTML='<div class="studio-mark"><span class="studio-glow"></span><img src="studio-logo.webp" alt="Dergah Aztech"><span class="studio-sheen"></span></div><div class="studio-track" role="progressbar" aria-label="Loading" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="studio-progress"></div></div>';
document.body.appendChild(el);
const start=performance.now(),track=el.querySelector('.studio-track'),bar=el.querySelector('.studio-progress');
const base=gdjs.RuntimeGame.prototype.loadAllAssets;
gdjs.RuntimeGame.prototype.loadAllAssets=function(done,progress){
 // Preserve the engine's callback, progress reporting and this binding.
 return base.call(this,()=>{
  update(100);
  setTimeout(()=>{el.classList.add('leaving');setTimeout(()=>{el.remove();style.remove()},350);done()},Math.max(0,1800-(performance.now()-start)));
 },value=>{update(value);if(progress)progress(value)});
};
function update(value){const v=Math.max(0,Math.min(100,Number(value)||0));bar.style.width=v+'%';track.setAttribute('aria-valuenow',String(v))}
})();
