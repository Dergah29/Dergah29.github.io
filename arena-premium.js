/* Arena presentation only. Existing painted art; no save, collider or rule writes. */
(()=>{'use strict';
const css=document.createElement('style');css.textContent=`
canvas.arena-native-viewport{width:min(100vw,calc((100dvh - 84px)*var(--arena-native-aspect,1.77777778)))!important;height:min(calc(100vw/var(--arena-native-aspect,1.77777778)),calc(100dvh - 84px))!important;max-height:calc(100dvh - 84px)!important;object-fit:contain!important;position:absolute!important;top:0!important;left:50%!important;transform:translateX(-50%)!important}
#fighter-ui[data-arena-rail] .combat{bottom:8px!important;grid-template-columns:repeat(5,58px)!important;grid-template-areas:none!important;gap:8px!important}
#fighter-ui[data-arena-rail] .combat button{grid-area:auto!important;width:58px!important;height:58px!important;min-height:58px!important;font-size:10px!important;backdrop-filter:none;border-color:#b3945e;background:radial-gradient(at 40% 25%,#365964,#102d37)}
#fighter-ui[data-arena-rail] .joystick{width:72px!important;height:72px!important;bottom:8px!important;background:#163641;border-color:#c19d5d}
#fighter-ui .bot-setup .fighter-card{border-radius:4px;border-color:#ab915566;background:linear-gradient(#193b44aa,#09202bee),url(menu-v2/assets/harbor.webp) center/cover}
#fighter-ui .bot-setup .fighter-card[aria-pressed=true]{border-color:#edca83;box-shadow:inset 0 0 0 1px #edca8344}
#fighter-ui .result-screen .card{border-radius:6px;border-color:#bda06c;background:linear-gradient(105deg,#153a43ee,#071b27ee),url(menu-v2/assets/harbor.webp) center/cover}

#pirate-arena-modes{font-family:Georgia,serif}
#pirate-arena-modes .am-lobby{background:linear-gradient(90deg,#071c25f5 0%,#071c25dc 46%,#071c2580),url(menu-v2/assets/harbor.webp) center/cover;padding:18px 24px}
#pirate-arena-modes .am-lobby .am-head h1{font-size:clamp(24px,3.8vw,36px);letter-spacing:-.5px}
#pirate-arena-modes .am-head small{color:#bca16a;letter-spacing:3px;font:10px Arial}
#pirate-arena-modes .am-status{margin:7px 0 12px;color:#aac4c8}
#pirate-arena-modes .am-crew{gap:8px!important;margin:10px 0!important}
#pirate-arena-modes .am-crew button{position:relative;width:112px!important;min-height:114px!important;padding:5px!important;border-radius:4px;background:linear-gradient(#25434a80,#091e27d9);border-color:#8d795247;box-shadow:inset 0 -4px #050f1766}
#pirate-arena-modes .am-crew button[aria-pressed=true]{border-color:#f6d18c!important;background:linear-gradient(#7f674f55,#183c42);box-shadow:0 0 0 1px #e1b86866}
#pirate-arena-modes .am-crew img{width:84px!important;height:84px!important;object-fit:contain}
#pirate-arena-modes .am-crew img[hidden]{display:none}
#pirate-arena-modes .am-crew button:not([data-ready]):before{content:'Hazırlanır…';display:block;height:84px;font:12px/84px Arial;color:#9cb7ba}
#pirate-arena-modes .am-grid{grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin:12px 0}
#pirate-arena-modes .am-mode{position:relative;overflow:hidden;border-radius:4px;border-color:#a48a574a;padding:14px 18px;background:linear-gradient(105deg,#0b2732f0,#123c4380),url(menu-v2/assets/harbor.webp) center 50%/cover;box-shadow:inset 3px 0 #c49b55,inset 0 -1px #e3c68322;min-height:124px!important}
#pirate-arena-modes .am-mode:hover,#pirate-arena-modes .am-mode:focus-visible{border-color:#f3ce87;background-position:center 55%}
#pirate-arena-modes .am-mode b{font-size:23px;margin:3px 0 7px}
#pirate-arena-modes .am-mode span{max-width:300px;font:13px/1.45 Arial;color:#bbd0cf}
#pirate-arena-modes .am-loadout{font:13px Arial;color:#acbfc0}
#pirate-arena-modes .am-loadout select{min-height:44px;background:#102e36}
#pirate-arena-modes .am-match .am-bar{position:relative;inset:auto;flex:0 0 46px;order:0;min-height:46px;padding:0 10px;background:linear-gradient(#193942,#0b222c);border-bottom:1px solid #96774766}
#pirate-arena-modes .am-match .am-bar button{min-height:36px;font-size:12px;padding:5px 10px;border-color:#b8955655;border-radius:4px}
#pirate-arena-modes .am-match .am-bar strong{border:0;background:none;border-radius:0;padding:4px;font-size:clamp(13px,2vw,19px);color:#f9dfaa}
#pirate-arena-modes .am-match .am-objective{position:relative;inset:auto;order:1;flex:0 0 24px;min-height:24px;max-height:24px;overflow:hidden;padding:4px 8px;background:#102e35;color:#d3d8c7;font:11px/16px Arial;text-shadow:none}
#pirate-arena-modes .am-match .am-objective[hidden]{display:block!important;visibility:hidden}
#pirate-arena-modes .am-match .am-field{position:relative;inset:auto;order:2;flex:1;min-height:0}
#pirate-arena-modes .am-match .am-controls{position:relative;inset:auto;order:3;flex:0 0 88px;height:88px;min-height:88px;padding:7px max(12px,env(safe-area-inset-right)) max(7px,env(safe-area-inset-bottom)) max(12px,env(safe-area-inset-left));background:linear-gradient(#17343c,#081e27);border-top:1px solid #c19a5755;pointer-events:auto;align-items:center}
#pirate-arena-modes .am-match .am-stick{width:72px;height:72px;background:radial-gradient(#3c6972,#0e2c37);border:1px solid #bc9d62}
#pirate-arena-modes .am-match .am-stick i{left:18px;top:18px}
#pirate-arena-modes .am-match .am-controls [data-action=left],#pirate-arena-modes .am-match .am-controls [data-action=right]{display:none}
#pirate-arena-modes .am-match .am-controls button{width:66px;height:62px;min-height:62px;border-radius:50%;font:700 11px Arial;background:radial-gradient(at 45% 25%,#38606b,#112e3a);border:1px solid #ac915c;box-shadow:inset 0 -4px #06141c80,0 2px 7px #0004}
#pirate-arena-modes .am-match .am-controls [data-action=interact]{width:78px;border-radius:12px;background:linear-gradient(#a58048,#58452c);color:#fff0c8}
#pirate-arena-modes .am-match .am-controls button.active{background:#b58c4d;color:#071b23}
#pirate-arena-modes .am-match .am-rail-note{display:block!important;color:#b3c8c8;font:11px/1.5 Arial;text-align:center;max-width:240px;pointer-events:none}
#pirate-arena-modes .am-rail-note b{display:block;color:#f3d598;font:17px Georgia}
#pirate-arena-modes .am-match .am-field .am-overlay{background:#061722e8;inset:0;z-index:5}
#pirate-arena-modes .am-card{border-radius:6px;border:1px solid #b8975f;background:linear-gradient(110deg,#173b43f5,#071b29ee),url(menu-v2/assets/harbor.webp) center/cover;box-shadow:inset 0 0 0 4px #b8975f18,0 12px 50px #0008;padding:14px 24px}
#pirate-arena-modes .am-card h2{font-size:26px;letter-spacing:.5px;margin:6px 0;color:#f7dfae}
#pirate-arena-modes .am-card p{font:13px/1.5 Arial;color:#bfd0d0;margin:6px 0}
#pirate-arena-modes .am-card button{min-height:44px;font-size:13px;border-radius:4px;background:#21454b}
#pirate-arena-modes [data-match-result] .am-card{min-width:min(560px,90vw);display:grid;grid-template-columns:100px 1fr;column-gap:14px;align-items:center}
#pirate-arena-modes [data-match-result] .am-card canvas{grid-column:1;grid-row:1/5;width:100px;height:112px;object-fit:contain}
#pirate-arena-modes [data-match-result] .am-card>*:not(canvas){grid-column:2}
#pirate-arena-modes [data-match-result] .am-card button{margin:3px}
#pirate-arena-modes .am-result-detail{font:12px/1.5 Arial;color:#d0b884}
@media(max-width:700px){#pirate-arena-modes .am-lobby{padding:12px}#pirate-arena-modes .am-match .am-controls{height:80px;min-height:80px;flex-basis:80px;padding:5px 8px}#pirate-arena-modes .am-match .am-stick{width:68px;height:68px}#pirate-arena-modes .am-match .am-stick i{left:16px;top:16px}#pirate-arena-modes .am-match .am-controls button{width:58px;height:58px;min-height:58px}#pirate-arena-modes .am-match .am-controls [data-action=interact]{width:72px}#pirate-arena-modes .am-rail-note{font-size:10px!important;max-width:170px!important}#pirate-arena-modes .am-rail-note b{font-size:14px}#pirate-arena-modes .am-grid{grid-template-columns:repeat(2,minmax(0,1fr))}#pirate-arena-modes .am-mode b{font-size:19px}}
`;document.head.append(css);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let observed=[],lastTime=-1,light;
function harbor(ctx,time){if(!light){light=document.createElement('canvas');light.width=light.height=128;const g=light.getContext('2d'),shade=g.createRadialGradient(64,64,1,64,64,64);shade.addColorStop(0,'#ffe0a85c');shade.addColorStop(.4,'#f4b95d20');shade.addColorStop(1,'#f4b95d00');g.fillStyle=shade;g.fillRect(0,0,128,128)}ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=reduced.matches?.65:.65+.04*Math.sin(time*2);for(const x of [65,1210])ctx.drawImage(light,x-95,380,190,200);ctx.restore()}
function reset(){observed=[];lastTime=-1}
function observe(s,time,effects,audio,local,root){if(s.time<lastTime)reset();lastTime=s.time;for(let i=0;i<2;i++){const p=s.players[i],old=observed[i];if(old){if(p.hp<old.hp){effects.burst(p.x,p.y-62,'#ffc586',time);if(i!==local)audio?.event('hurt')}if((p.blocks||0)>old.blocks)audio?.event('interact');if((p.shipmentsWon||0)>old.shipmentsWon)audio?.event('score');if((p.steals||0)>old.steals)effects.burst(p.x,p.y-90,'#8fe3d7',time);if(!reduced.matches&&p.pose==='dash'&&old.pose!=='dash')effects.burst(p.x-p.dir*20,p.y-8,'#bfc1a4',time)}observed[i]={hp:p.hp,steals:p.steals||0,blocks:p.blocks||0,shipmentsWon:p.shipmentsWon||0,pose:p.pose}}
 const note=root?.querySelector('.am-rail-note');if(note){const p=s.players[local],label=s.mode==='treasure'?p.carry?'YÜK · '+p.carry:'XƏZİNƏNİ TOPLA':p.cool>0?'DASH · '+p.cool.toFixed(1)+'s':'DASH HAZIR',detail=s.mode==='treasure'?(p.carry?'Bazaya qaytar · ağır yük yavaşladır':'Təhlükəsiz qızıl / riskli sandıq'):'Joystick + Tullan · Shift: dash',stamp=label+'|'+detail;if(note.dataset.stamp!==stamp){note.dataset.stamp=stamp;note.replaceChildren();const b=document.createElement('b');b.textContent=label;note.append(b,document.createTextNode(detail))}}
}
function shipment(ctx,s,props,V,time){const v=s.shipments?.find(v=>s.time<v.end&&v.claimedBy===null);if(!v||s.time<v.start-5)return;const active=s.time>=v.start;ctx.save();ctx.globalAlpha=active?1:.5;V.prop(ctx,props,0,v.x-43,v.y-68,86,68);ctx.globalAlpha=1;ctx.font='bold 18px Georgia';ctx.textAlign='center';ctx.fillStyle='#ffe0a0';if(!s.players.some(p=>Math.abs(p.x-v.x)<100&&Math.abs(p.y-v.y)<190))ctx.fillText(active?(v.contested?'MÜBAHİSƏLİ':'+6 · YÜKÜ SAXLA'):'YÜK · '+Math.ceil(v.start-s.time)+'s',v.x,v.y-83);if(v.progress>0){ctx.strokeStyle='#a6e4d5';ctx.lineWidth=4;ctx.beginPath();ctx.arc(v.x,v.y-37,48,-Math.PI/2,-Math.PI/2+Math.PI*2*v.progress/1.8);ctx.stroke()}ctx.restore()}
function match(root){const rail=root.querySelector('.am-controls'),note=document.createElement('div');note.className='am-rail-note';rail.insertBefore(note,rail.children[1]);}
function result(root,s,arts,local){const card=root.querySelector('.am-card');if(!card)return;const winner=s.winner>=0?s.winner:local,art=arts[winner];if(art){const m=art.meta,frames=m.animations[s.winner>=0?'victory':'idle']?.frames||m.animations.idle.frames,n=frames[0],c=document.createElement('canvas');c.width=144;c.height=162;c.setAttribute('aria-label',(s.winner>=0?'Qalib: ':'Qəhrəman: ')+m.hero);c.getContext('2d').drawImage(art.image,n%m.columns*m.frameW,Math.floor(n/m.columns)*m.frameH,m.frameW,m.frameH,0,0,144,162);card.prepend(c)}const p=s.players[local],detail=document.createElement('div');detail.className='am-result-detail';detail.textContent=s.mode==='treasure'?`${p.bankTrips||0} çatdırılma · ${p.chestsOpened||0} sandıq · ${p.steals||0} oğurlama · ${p.shipmentsWon||0} yük`:`Məsafə ${Math.floor(p.distance||0)} · ${p.blocks||0} müdafiə`;card.append(detail)}
window.PirateArenaPremium={reset,observe,match,result,shipment,harbor};
})();
