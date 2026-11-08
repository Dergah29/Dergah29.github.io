/* Pirate Strike — gold economy for the Captain's Wardrobe.
 * Gold, inventory, equipment and reward receipts commit together in 'pf-shop-v2'.
 * 'pf-adventure-gold' and 'pf-shop-v1' remain compatibility mirrors, never a second authority.
 * Every reward is an event with a stable id (level + coin/enemy/chest/clear/boss id) and
 * is paid at most once: replays, checkpoint reloads and save reloads cannot pay twice.
 * Purchases, ownership and what each hero wears live in 'pf-shop-v1'.
 * In-game gold only: no real-money purchases, adverts or paid currency. */
(()=>{'use strict';
const root=typeof window!=='undefined'?window:globalThis;
if(root.PirateEconomy)return;
const GOLD_KEY='pf-adventure-gold',KEY='pf-shop-v1',STATE_KEY='pf-shop-v2',BACKUP_KEY='pf-shop-v2-backup',MAX=1e7;
const HEROES=['scarlet','sailor','captain','shark','crab'];
// first-clear and boss rewards (the boss must be beaten to finish these levels); Level 1 keeps its original +100
const CLEAR=n=>n===1?100:50+25*n;
const BOSS={3:150,5:300,6:400,7:300,8:350,10:250};
const intOk=v=>Number.isFinite(v)&&v>=0;

function create(opts={}){
 const store=opts.storage===undefined?(()=>{try{return root.localStorage}catch{return null}})():opts.storage;
 const catalog=opts.catalog||root.PirateShopCatalog;
 const levelDone=opts.levelDone||(n=>{try{return!!root.PirateLevels?.isCompleted(n)}catch{return false}});
 const listeners=new Set();
 const get=k=>store?store.getItem(k):null;
 const set=(k,v)=>{try{if(!store)return false;store.setItem(k,v);return true}catch{return false}};
 const gold=v=>Math.max(0,Math.min(MAX,Math.floor(Number(v)||0)));
 const blank=()=>({v:2,gold:0,earned:{},best:{},owned:{},equip:{},stats:{earned:0,spent:0,chests:0},log:[]});
 const dict=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 function decode(raw,version){
  try{const s=JSON.parse(raw);if(!dict(s)||s.v!==version||!dict(s.earned)||!dict(s.owned))return null;
   if(version===2&&(!Number.isInteger(s.gold)||s.gold<0||s.gold>MAX))return null;
   if(Object.values(s.earned).some(v=>!dict(v)))return null;
   for(const k of ['best','equip']){if(s[k]==null&&version===1)s[k]={};else if(!dict(s[k]))return null}
   if(Object.values(s.equip).some(v=>!dict(v)))return null;
   if(Object.values(s.best).some(v=>!Number.isFinite(v)||v<0))return null;
   s.stats=Object.assign({earned:0,spent:0,chests:0},dict(s.stats)?s.stats:{});
   for(const k of ['earned','spent','chests'])if(!Number.isFinite(s.stats[k])||s.stats[k]<0)s.stats[k]=0;
   if(!Array.isArray(s.log))s.log=[];if(s.heroProgress!==undefined&&!validProgress(s.heroProgress))s._blocked=true;return s;
  }catch{return null}
 }
 function read(){
  try{
   const raw=get(STATE_KEY),backup=get(BACKUP_KEY);
   let future=false;try{const p=JSON.parse(raw);future=p&&Number.isInteger(p.v)&&p.v>2}catch{}if(future)return Object.assign(blank(),{_blocked:true});
   const s=decode(raw,2)||decode(backup,2);if(s)return s;
   // Never silently replace damaged/newer-version data with an empty wallet.
   if(raw!==null||backup!==null)return Object.assign(blank(),{_blocked:true});
   const legacy=get(KEY),v1=legacy===null?blank():decode(legacy,1);
   if(!v1)return Object.assign(blank(),{gold:gold(get(GOLD_KEY)),_blocked:true});
   return Object.assign(v1,{v:2,gold:gold(get(GOLD_KEY))});
  }catch{return Object.assign(blank(),{_blocked:true})}
 }
 function write(s){
  if(s._blocked)return false;s.log=s.log.slice(-30);s.gold=gold(s.gold);
  // localStorage.setItem is atomic for ONE key. Only this write decides success.
  const encoded=JSON.stringify(s);if(!set(STATE_KEY,encoded))return false;
  // Best-effort recovery snapshot and downgrade/menu mirrors. A failed mirror cannot
  // grant free gear, lose a reward or roll back the authoritative committed wallet.
  set(BACKUP_KEY,encoded);set(GOLD_KEY,String(s.gold));
  const {gold:ignored,...legacy}=s;legacy.v=1;set(KEY,JSON.stringify(legacy));return true;
 }
 const balance=()=>read().gold;
 const emit=e=>{for(const f of listeners){try{f(e)}catch{}}};
 const logIt=(s,e)=>{s.log.push(Object.assign({t:Date.now()},e))};


 const XP_CAP=4940,STAR_COST=[0,10,20,35,55];
 const nextXP=l=>80+20*(l-1);
 function progressStats(level=1,star=1,mode='arena'){
  if(mode!=='adventure')return{hp:100,atk:23,dr:0};level=Math.max(1,Math.min(20,Math.floor(Number(level)||1)));star=Math.max(1,Math.min(5,Math.floor(Number(star)||1)));
  return{hp:100*(1+.006*(level-1)+.015*(star-1)),atk:23*(1+.004*(level-1)+.01*(star-1)),dr:Math.min(.05,.001*(level-1)+.005*(star-1))};
 }
 function validProgress(p){
  if(!dict(p)||p.schema!==1||!dict(p.heroes)||!dict(p.claims)||!dict(p.runs)||!dict(p.migration)||typeof p.migration.done!=='boolean')return false;
  for(const h of HEROES){const r=p.heroes[h];if(!dict(r)||!Number.isInteger(r.xpTotal)||r.xpTotal<0||r.xpTotal>XP_CAP||!Number.isInteger(r.star)||r.star<1||r.star>5||!Number.isInteger(r.fragments)||r.fragments<0||r.fragments>MAX)return false}
  for(const [key,r] of Object.entries(p.runs))if(!dict(r)||!Number.isInteger(r.level)||String(r.level)!==key||r.level<1||r.level>100||typeof r.id!=='string'||!r.id||r.id.length>160||!HEROES.includes(r.hero)||r.balanceVersion!==1||typeof r.claimed!=='boolean'||typeof r.eligible!=='boolean'||!dict(r.stats)||!Number.isFinite(r.stats.hp)||r.stats.hp<100||r.stats.hp>125||!Number.isFinite(r.stats.atk)||r.stats.atk<23||r.stats.atk>30||!Number.isFinite(r.stats.dr)||r.stats.dr<0||r.stats.dr>.05)return false;
  return true;
 }
 function ensureProgress(s){return s.heroProgress||(s.heroProgress={schema:1,heroes:Object.fromEntries(HEROES.map(h=>[h,{xpTotal:0,star:1,fragments:0}])),claims:{},runs:{},migration:{done:false}})}
 function heroView(s,hero){if(!HEROES.includes(hero))return null;const h=s.heroProgress?.heroes?.[hero]||{xpTotal:0,star:1,fragments:0};let level=1,xp=h.xpTotal;while(level<20&&xp>=nextXP(level)){xp-=nextXP(level);level++}return{owned:true,level,star:h.star,xp:level===20?0:xp,totalXP:h.xpTotal,fragments:h.fragments}}
 function migrationPreview(s){if(s._blocked)return{pending:false,xp:0,fragments:0,code:'storage'};if(s.heroProgress?.migration.done)return{pending:false,xp:0,fragments:0};const claims=s.heroProgress?.claims||{},events=[];let xp=0,fragments=0;
  for(let n=1;n<=10;n++){if((s.earned['L'+n]?.clear||levelDone(n))&&!claims['L'+n]){const a=150+25*(n-1);xp+=a;fragments+=2;events.push(['L'+n,a,2])}if(BOSS[n]&&s.earned['L'+n]?.boss&&!claims['bossL'+n]){xp+=200;fragments+=4;events.push(['bossL'+n,200,4])}}return{pending:xp>0,xp,fragments,events};
 }
 function addHeroReward(p,hero,xp,fragments){const h=p.heroes[hero],before=h.xpTotal,prev=h.fragments;h.xpTotal=Math.min(XP_CAP,h.xpTotal+xp);h.fragments=Math.min(MAX,h.fragments+fragments);return{xp:h.xpTotal-before,fragments:h.fragments-prev}}
 function progressCompletion(s,n,token,first,boss){const p=ensureProgress(s),r=p.runs[n];if(!r||r.id!==token?.id||r.hero!==token?.hero||r.level!==n)return{ok:false,code:'run'};if(r.claimed)return{ok:true,xp:0,fragments:0};let xp=0,fragments=0;
  if(first&&!p.claims['L'+n]){xp+=150+25*(n-1);fragments+=2;p.claims['L'+n]=1}else if(r.eligible){xp+=80;fragments++}if(boss&&!p.claims['bossL'+n]){xp+=200;fragments+=4;p.claims['bossL'+n]=1}const applied=addHeroReward(p,r.hero,xp,fragments);r.claimed=true;return{ok:true,...applied};
 }

 const api={
  CLEAR,BOSS,
  balance,
  on(f){listeners.add(f);return()=>listeners.delete(f)},
  /* ---------- earning ---------- */
  claimed(scope,id){const s=read();return!!s.earned[scope]?.[id]},
  /** every id already paid in a scope (one read for a whole level) */
  claimedIds(scope){return new Set(Object.keys(read().earned[scope]||{}))},
  /** pay `amount` once for event scope/id; returns what was paid (0 when already paid) */
  earn(scope,id,amount){
   amount=Math.floor(Number(amount));if(!scope||id==null||!intOk(amount))return 0;
   const s=read();const g=s.earned[scope]||(s.earned[scope]={});if(g[id])return 0;
   g[id]=1;s.stats.earned+=amount;s.gold+=amount;if(!write(s))return 0;emit({type:'earn',scope,id,amount});return amount;
  },
  /** pay only the improvement over the best amount ever paid for scope/id (used for whole-run totals) */
  earnBest(scope,id,amount){
   amount=Math.floor(Number(amount));if(!scope||id==null||!intOk(amount))return 0;
   const s=read();const k=scope+':'+id,prev=s.best[k]||0;if(amount<=prev)return 0;
   const pay=amount-prev;s.best[k]=amount;s.stats.earned+=pay;s.gold+=pay;if(!write(s))return 0;emit({type:'earn',scope,id,amount:pay});return pay;
  },
  /** first clear of level n (+ boss bonus); safe to call on every completion */
  levelReward(n,opts={}){
   const s=read(),scope='L'+n,g=s.earned[scope]||{},clear=g.clear?0:CLEAR(n),boss=g.boss?0:(BOSS[n]||0),total=clear+boss;
   const failed=()=>({clear:0,boss:0,total:0,code:'storage'});if(s._blocked)return failed();let progress=null;if(opts.heroRun){progress=progressCompletion(s,n,opts.heroRun,!g.clear,!!boss);if(!progress.ok)return{clear:0,boss:0,total:0,code:progress.code}}if(!total&&!progress)return{clear:0,boss:0,total:0};
   g.clear=1;if(boss)g.boss=1;s.earned[scope]=g;s.gold+=total;s.stats.earned+=total;
   if(!write(s))return failed();emit({type:'earn',scope,id:'completion',amount:total});return progress?{clear,boss,total,hero:{xp:progress.xp,fragments:progress.fragments}}:{clear,boss,total};
  },
  /** Called by Level 1 before its result card/map transition. The best-run difference
      and first-clear bonus share one commit; the legacy runtime must not bank first. */
  voyageReward(coins,opts={}){
   coins=Math.max(0,Math.floor(Number(coins)||0));const s=read(),best=s.best['L1:coins']||0;
   const paid=Math.max(0,coins-best),bonus=s.earned.L1?.clear?0:CLEAR(1),total=paid+bonus;
   const failed=()=>({coins,best,paid:0,bonus:0,total:0,balance:s.gold,code:'storage'});
   if(!Number.isFinite(coins)||s._blocked)return failed();
   let progress=null;if(opts.heroRun){progress=progressCompletion(s,1,opts.heroRun,!s.earned.L1?.clear,false);if(!progress.ok)return Object.assign(failed(),{code:progress.code})}
   if(total||progress){s.best['L1:coins']=Math.max(best,coins);(s.earned.L1||(s.earned.L1={})).clear=1;s.stats.earned+=total;s.gold+=total;
    if(!write(s))return Object.assign(failed(),{balance:balance()});emit({type:'earn',scope:'L1',id:'voyage',amount:total})}
   return Object.assign({coins,best,paid,bonus,total,balance:balance()},progress?{hero:{xp:progress.xp,fragments:progress.fragments}}:{});
  },

  progressStats,
  heroProgress(hero){const s=read();if(s._blocked&&s.heroProgress)return null;return heroView(s,hero)},
  heroMigrationPreview(){return migrationPreview(read())},
  migrateHeroes(hero){const s=read();if(s._blocked)return{ok:false,code:'storage'};if(!HEROES.includes(hero))return{ok:false,code:'hero'};const preview=migrationPreview(s),p=ensureProgress(s);if(p.migration.done)return{ok:true,code:'already',xp:0,fragments:0};for(const [key] of preview.events||[])p.claims[key]=1;const applied=addHeroReward(p,hero,preview.xp,preview.fragments);p.migration={done:true,hero,at:Date.now()};if(!write(s))return{ok:false,code:'storage'};emit({type:'hero',hero});return{ok:true,...applied}},
  beginHeroRun(n,hero,resumeToken=null,fromCheckpoint=false){const s=read();if(s._blocked)return{ok:false,code:'storage'};if(!Number.isInteger(n)||n<1||n>100||!HEROES.includes(hero))return{ok:false,code:'hero'};const p=ensureProgress(s);if(resumeToken){const r=p.runs[n];if(!r||r.id!==resumeToken.id||r.hero!==resumeToken.hero)return{ok:false,code:'run'};return{ok:true,run:JSON.parse(JSON.stringify(r))}}const h=heroView(s,hero),id=root.crypto?.randomUUID?.()||('run-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));const r={id,level:n,hero,balanceVersion:1,stats:progressStats(h.level,h.star,'adventure'),eligible:!fromCheckpoint,claimed:false};p.runs[n]=r;if(!write(s))return{ok:false,code:'storage'};return{ok:true,run:JSON.parse(JSON.stringify(r))}},
  upgradeHeroStar(hero,expectedStar){const s=read();if(s._blocked)return{ok:false,code:'storage'};if(!HEROES.includes(hero))return{ok:false,code:'hero'};const p=ensureProgress(s),h=p.heroes[hero];if(expectedStar!==undefined&&expectedStar!==h.star)return{ok:false,code:'stale'};if(h.star===5)return{ok:false,code:'max'};const cost=STAR_COST[h.star];if(h.fragments<cost)return{ok:false,code:'fragments',need:cost-h.fragments};h.fragments-=cost;h.star++;if(!write(s))return{ok:false,code:'storage'};emit({type:'hero',hero});return{ok:true,star:h.star,fragments:h.fragments,cost}},

  /* ---------- items ---------- */
  owns(id){const it=catalog.get(id);if(!it)return false;if(it.default)return true;return!!read().owned[id]},
  reqMet(it){const r=it?.req;if(!r)return true;if(r.level)return levelDone(r.level);if(r.item)return this.owns(r.item);return false},
  equipped(hero){
   const s=read(),e=s.equip[hero]||{},out={};
   for(const slot of Object.keys(catalog.DEFAULTS)){const id=e[slot],it=id&&catalog.get(id);out[slot]=it&&it.cat===slot&&catalog.fits(it,hero)&&(it.default||s.owned[id])?id:catalog.DEFAULTS[slot]}
   return out;
  },
  /** state of an item for a hero: equipped | owned | available | locked | incompatible */
  status(id,hero){
   const it=catalog.get(id);if(!it)return{state:'unknown'};
   if(it.cat==='chest')return this.reqMet(it)?{state:'available'}:{state:'locked',req:it.req};
   if(!catalog.fits(it,hero))return{state:'incompatible'};
   if(it.cat==='upgrade'){if(this.owns(id))return{state:'owned',active:true};return this.reqMet(it)?{state:'available'}:{state:'locked',req:it.req}}
   if(this.owns(id))return{state:this.equipped(hero)[it.cat]===id?'equipped':'owned'};
   return this.reqMet(it)?{state:'available'}:{state:'locked',req:it.req};
  },
  buy(id,hero){
   if(read()._blocked)return{ok:false,code:'storage'};
   const it=catalog.get(id);if(!it)return{ok:false,code:'unknown'};
   if(it.cat==='chest')return{ok:false,code:'chest'};
   if(hero&&!catalog.fits(it,hero))return{ok:false,code:'incompatible'};
   if(this.owns(id))return{ok:false,code:'owned'};
   if(!this.reqMet(it))return{ok:false,code:'locked',req:it.req};
   const g=balance();if(g<it.price)return{ok:false,code:'funds',need:it.price-g};
   if(hero&&!HEROES.includes(hero))return{ok:false,code:'hero'};
   const s=read();s.owned[id]=Date.now();s.stats.spent+=it.price;s.gold=g-it.price;logIt(s,{buy:id,price:it.price});
   if(hero&&catalog.SLOT[it.cat])(s.equip[hero]||(s.equip[hero]={}))[it.cat]=id;
   if(!write(s))return{ok:false,code:'storage'};
   emit({type:'buy',id,hero});
   return{ok:true,code:'ok',balance:balance()};
  },
  equip(id,hero){
   const it=catalog.get(id);if(!it||!catalog.SLOT[it.cat])return{ok:false,code:'unknown'};
   if(!HEROES.includes(hero))return{ok:false,code:'hero'};
   if(!catalog.fits(it,hero))return{ok:false,code:'incompatible'};
   if(!this.owns(id))return{ok:false,code:'notOwned'};
   const s=read();(s.equip[hero]||(s.equip[hero]={}))[it.cat]=id;if(!write(s))return{ok:false,code:'storage'};emit({type:'equip',id,hero});return{ok:true,code:'ok'};
  },
  unequip(slot,hero){
   if(!catalog.DEFAULTS[slot]||!HEROES.includes(hero))return{ok:false,code:'unknown'};
   const s=read();if(s.equip[hero])delete s.equip[hero][slot];if(!write(s))return{ok:false,code:'storage'};emit({type:'equip',id:catalog.DEFAULTS[slot],hero});return{ok:true,code:'ok'};
  },
  /** everything the game needs to dress and (slightly) upgrade a hero */
  loadout(hero){
   const e=this.equipped(hero);let magnet=90,heal=35;
   for(const it of catalog.inCat('upgrade'))if(this.owns(it.id)){if(it.effect.magnet)magnet=Math.max(magnet,it.effect.magnet);if(it.effect.heal)heal=Math.max(heal,it.effect.heal)}
   return Object.assign({hero,magnet,heal},e);
  },
  /** cosmetic pool a chest can still give (unlocked, not owned, any hero) */
  chestPool(id){
   const ch=catalog.get(id);if(!ch||ch.cat!=='chest')return[];
   return catalog.items.filter(i=>catalog.SLOT[i.cat]&&!i.default&&ch.pool.includes(i.rarity)&&!this.owns(i.id)&&this.reqMet(i));
  },
  /** Read-only odds for the current eligible inventory. The draw below consumes
      these same weights; previews never spend, migrate or reserve a reward. */
  chestPreview(id){
   const ch=catalog.get(id);if(!ch||ch.cat!=='chest')return null;
   const rewards=this.chestPool(id).map(it=>({id:it.id,rarity:it.rarity,weight:[6,3,2,1][catalog.RARITY[it.rarity].rank]}));
   const totalWeight=rewards.reduce((n,r)=>n+r.weight,0);
   for(const r of rewards)r.probability=r.weight/totalWeight;
   return{id,price:ch.price,refund:ch.refund,totalWeight,rewards};
  },
  openChest(id,rng=Math.random){
   if(read()._blocked)return{ok:false,code:'storage'};
   const ch=catalog.get(id);if(!ch||ch.cat!=='chest')return{ok:false,code:'unknown'};
   if(!this.reqMet(ch))return{ok:false,code:'locked',req:ch.req};
   const g=balance();if(g<ch.price)return{ok:false,code:'funds',need:ch.price-g};
   const distribution=this.chestPreview(id),pool=distribution.rewards;const s=read();s.stats.spent+=ch.price;s.stats.chests++;s.gold=g-ch.price;
   if(!pool.length){s.gold+=ch.refund;logIt(s,{chest:id,refund:ch.refund});if(!write(s))return{ok:false,code:'storage'};emit({type:'chest',id});return{ok:true,code:'refund',gold:ch.refund,balance:balance()}}
   let r=Math.max(0,Math.min(.999999,Number(rng())||0))*distribution.totalWeight,pick=pool[pool.length-1];
   for(const drop of pool){r-=drop.weight;if(r<0){pick=drop;break}}
   s.owned[pick.id]=Date.now();logIt(s,{chest:id,item:pick.id});if(!write(s))return{ok:false,code:'storage'};
   emit({type:'chest',id,item:pick.id});return{ok:true,code:'item',item:pick.id,balance:balance()};
  },
  stats(){return read().stats},
  _read:read,
  reset(){const old=read();if(old._blocked)return false;const s=blank();s.gold=old.gold;if(old.heroProgress)s.heroProgress=old.heroProgress;return write(s)}
 };
 return api;
}
const eco=create();eco.create=create;eco.KEY=KEY;eco.GOLD_KEY=GOLD_KEY;eco.STATE_KEY=STATE_KEY;eco.BACKUP_KEY=BACKUP_KEY;
const VW={
 en:{newGold:'New gold added',best:'Best run already paid',bonusDone:'First-clear bonus already received',wallet:'Gold in your chest',more:'Beat your best run to earn more gold.'},
 az:{newGold:'Yeni əlavə olunan qızıl',best:'Ən yaxşı turun qızılı artıq ödənilib',bonusDone:'İlk keçid bonusu artıq alınıb',wallet:'Sandığındakı qızıl',more:'Daha çox qızıl üçün ən yaxşı nəticəni keç.'},
 tr:{newGold:'Eklenen yeni altın',best:'En iyi turun altını zaten ödendi',bonusDone:'İlk bitiriş bonusu zaten alındı',wallet:'Sandığındaki altın',more:'Daha fazla altın için en iyi sonucunu geç.'},
 ru:{newGold:'Новое золото',best:'Лучший забег уже оплачен',bonusDone:'Бонус за первое прохождение уже получен',wallet:'Золото в сундуке',more:'Побейте лучший результат, чтобы получить больше золота.'},
 pl:{newGold:'Nowe złoto',best:'Najlepszy bieg już wypłacony',bonusDone:'Premia za pierwsze przejście już odebrana',wallet:'Złoto w skrzyni',more:'Pobij najlepszy wynik, aby zarobić więcej złota.'}};
/* Level 1 result card: show what was really added to the wallet (a replay only pays above the best run). */
function voyageCard(v,r){
 const box=v.card?.querySelector?.('.av-rewards');if(!box)return;
 let lang='en';try{lang=v.g?.__ui?.lang||localStorage.getItem('pf-lang')||document.documentElement.lang||'en'}catch{}const w=VW[lang]||VW.en,t=k=>{try{return v.t(k)}catch{return k}};
 const row=(label,value,cls)=>{const p=document.createElement('p');if(cls)p.className=cls;p.append(label);const b=document.createElement('strong');b.textContent=value;p.append(b);return p};
 box.textContent='';box.dataset.newGold=String(r.total);
 box.append(row(t('earned'),String(r.coins)));
 if(r.best>0)box.append(row(w.best,String(r.best),'av-paid'));
 box.append(r.bonus>0?row(t('bonus'),'+'+r.bonus):row(w.bonusDone,'✓','av-paid'));
 box.append(row(w.newGold,'+'+r.total,'av-earned-total'));
 box.append(row(w.wallet,r.balance.toLocaleString('en-US'),'av-wallet'));
 if(r.hero&&(r.hero.xp||r.hero.fragments))box.append(row('Hero XP / fragments','+'+r.hero.xp+' XP · +'+r.hero.fragments,'av-hero-reward'));
 if(r.total===0){const p=document.createElement('p');p.className='av-more';p.textContent=w.more;box.append(p)}
}
eco.voyageCard=voyageCard;
root.PirateEconomy=eco;
if(typeof module!=='undefined'&&module.exports)module.exports=eco;
})();

