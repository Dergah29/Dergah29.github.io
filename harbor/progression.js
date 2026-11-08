/* Adventure-only adapter. PirateEconomy is the sole persistent writer. Never used by Arena. */
(()=>{'use strict';const root=typeof window==='undefined'?globalThis:window;if(root.PirateHeroProgress)return;const E=()=>root.PirateEconomy;
const fail=r=>{if(!r.ok)throw Object.assign(Error(r.code==='storage'?'Hero progress cannot be saved. Free storage and retry.':'Saved hero run is incompatible. Start this level from the beginning.'),{code:r.code});return r.run};
function stats(level,star,mode='arena'){return E()?.progressStats(level,star,mode)||{hp:100,atk:23,dr:0}}
function resolve(run,save){if(save?.heroRun)run.heroId=fail(E().beginHeroRun(run.def.id,save.heroRun.hero,save.heroRun,true)).hero}
function begin(run,save){const r=fail(E().beginHeroRun(run.def.id,run.heroId,save?.heroRun||null,!!save));run.heroRun=r;run.heroRun.stats=Object.freeze({...r.stats});run.maxHP=r.stats.hp;run.attackScale=r.stats.atk/23;run.damageReduction=r.stats.dr}
function beginVoyage(v,save){const r=fail(E().beginHeroRun(1,save?.heroRun?.hero||save?.skin||v.skin||root.PirateLevels?.hero()||'scarlet',save?.heroRun||null,!!save));v.heroRun=r;v.heroRun.stats=Object.freeze({...r.stats});v.skin=r.hero;v.maxHP=r.stats.hp;v.attackScale=r.stats.atk/23;v.damageReduction=r.stats.dr}
root.PirateHeroProgress={stats,resolve,begin,beginVoyage};})();

