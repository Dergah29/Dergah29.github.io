/* Existing native winner -> existing authored victory frames. No result/rule writes. */
(function(root){'use strict';
function portrait(host,load,makeCanvas){
 let serial=0,art=null,frame=-1,origin=null;
 const canvas=(makeCanvas||(()=>document.createElement('canvas')))();canvas.width=256;canvas.height=288;canvas.setAttribute('aria-hidden','true');canvas.className='arena-winner-portrait';
 const ctx=canvas.getContext('2d');
 return{async show(hero,loadout){const token=++serial;art=null;frame=-1;origin=null;canvas.remove();try{const next=await load(hero,loadout);if(token!==serial||!next||next.meta.hero!==hero||!next.meta.animations.victory?.frames.length)return false;art=next;canvas.dataset.arenaHero=hero;canvas.dataset.arenaOutfit=next.meta.animationFallbackFor||next.meta.outfit||'outfit-classic';host.prepend(canvas);return true}catch{return false}},
 hide(){serial++;art=null;frame=-1;origin=null;canvas.remove()},
 tick(time,hidden,reduced){if(!art||hidden||!ctx)return;if(origin===null)origin=time;const m=art.meta,a=m.animations.victory,index=a.frames[reduced?0:Math.floor(Math.max(0,time-origin)*a.fps)%a.frames.length];if(index===frame)return;frame=index;ctx.clearRect(0,0,256,288);ctx.drawImage(art.image,index%m.columns*m.frameW,Math.floor(index/m.columns)*m.frameH,m.frameW,m.frameH,0,0,256,288);canvas.dataset.arenaFrame=String(index)}
 };
}
function eligible(game){return !game.__adventure?.active&&!game.__ui?.trainingRequested&&(game.__content?.step??-1)<0}
const api={portrait,eligible};if(typeof module!=='undefined')module.exports=api;root.PirateArenaClassicResult=api;
if(!root.gdjs?.registerRuntimeScenePostEventsCallback)return;
const sessions=new WeakMap(),motion=matchMedia('(prefers-reduced-motion: reduce)');
const style=document.createElement('style');style.textContent='#fighter-ui .result-screen .arena-winner-portrait{display:block;width:112px;height:126px;object-fit:contain;margin:0 auto;filter:drop-shadow(0 5px 8px #0008)}@media(max-height:430px){#fighter-ui .result-screen .card:has(.arena-winner-portrait){display:grid;grid-template-columns:112px 1fr;column-gap:16px;align-items:center}#fighter-ui .result-screen .arena-winner-portrait{grid-column:1;grid-row:1/4}#fighter-ui .result-screen .card:has(.arena-winner-portrait)>h2,#fighter-ui .result-screen .card:has(.arena-winner-portrait)>p,#fighter-ui .result-screen .card:has(.arena-winner-portrait)>.actions{grid-column:2}#fighter-ui .result-screen .card:has(.arena-winner-portrait)>.actions{margin-top:8px}}';document.head.append(style);
root.gdjs.registerRuntimeScenePostEventsCallback(scene=>{
 const game=scene.getGame(),u=game.__ui,screen=u?.root?.querySelector('.result-screen'),host=screen?.querySelector('.card');if(!host)return;
 let r=sessions.get(game);if(!r){r={view:portrait(host,async(hero,loadout)=>{const raw=await root.PirateHeroes.loadIllustration(hero,loadout);return root.PirateArenaPresentation.enhance(raw)}),scene:null,shown:false};sessions.set(game,r)}
 if(scene.getName()==='Game'){
  if(r.scene!==scene){r.view.hide();Object.assign(r,{scene,finished:false,identity:null,shown:false,pending:false,epoch:(r.epoch||0)+1,excluded:!eligible(game)})}
  const vars=scene.getVariables();
  if(!r.excluded&&!r.finished&&vars.get('MatchStarted').getAsBoolean()&&vars.get('MatchFinished').getAsBoolean()){
   r.finished=true;const own=game.__online?.role==='guest'?'Player2':'Player1',other=own==='Player2'?'Player1':game.__online?.started?'Player2':'AI1',winner=vars.get(own+'Lives').getAsNumber()>0?own:other;
   const o=scene.getObjects(winner+'BluePirate')[0]||scene.getObjects(winner+'RedPirate')[0],hero=o?.getRendererObject().children.find(c=>c.name==='pirate-illustrated-hero'&&c.visible)?.pirateHero;
   if(hero)r.identity={hero,loadout:winner===own?root.PirateEconomy?.loadout?.(hero):{outfit:'outfit-classic'}};
  }
  return;
 }
 r.scene=null; // Never retain an unloaded native scene just for a portrait.
 if(screen.hidden||game.__adventure?.active){if(r.shown||r.pending){r.epoch++;r.view.hide();r.shown=false;r.pending=false;r.identity=null}return}
 if(!r.identity)return;
 if(!r.shown&&!r.pending&&performance.now()>=(r.retryAt||0)){r.pending=true;const epoch=r.epoch;const id=r.identity;r.view.show(id.hero,id.loadout).then(ok=>{if(epoch!==r.epoch)return;r.pending=false;r.shown=ok;r.retryAt=performance.now()+2000})}
 r.view.tick(performance.now()/1000,document.hidden,motion.matches);
});
})(typeof window!=='undefined'?window:globalThis);
