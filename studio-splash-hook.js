/* Connects the studio opening (studio-splash.js) to the engine's asset loading. Loaded after the engine. */
(()=>{
'use strict';
if(window.__pfBootHook||!window.gdjs||!gdjs.RuntimeGame)return;
window.__pfBootHook=true;
const base=gdjs.RuntimeGame.prototype.loadAllAssets;
gdjs.RuntimeGame.prototype.loadAllAssets=function(done,progress){
 const boot=window.__pfBoot;
 if(!boot)return base.call(this,done,progress);
 return base.call(this,()=>{boot.real(100);boot.finish(done)},value=>{boot.real(value);if(progress)progress(value)});
};
})();
