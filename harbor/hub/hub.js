/* Lightweight illustrated harbour hub: one painted background + six building sprites, pure DOM/CSS (no WebGL, no models).
   Same factory contract as PirateHarbor3D.create: {loaded, pause, resume, setLabels, select, state, dispose}. */
(function(){
const SPOTS={ // x/y = anchor (bottom centre) in % of the 16:9 stage, w = sprite width in % of stage width
 arena:{x:20,y:50,w:16,img:'arena.webp',icon:'⚔'},
 vault:{x:83,y:50,w:16,img:'vault.webp',icon:'◆'},
 hq:{x:50,y:44,w:17,img:'hq.webp',icon:'★'},
 tavern:{x:21,y:79,w:16,img:'tavern.webp',icon:'🍺'},
 market:{x:79,y:79,w:16,img:'market.webp',icon:'$'},
 adventure:{x:50,y:81,w:19,img:'empire.webp',icon:'⚓',main:true}
};
const CSS=`.pfhub{position:absolute;inset:0;overflow:hidden;background:#2b8fb0;touch-action:manipulation;user-select:none}
.pfhub .st{position:absolute;left:50%;top:50%;width:177.78vh;height:100vh;min-width:100vw;min-height:56.25vw;transform:translate(-50%,-50%);will-change:transform}
.pfhub .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.pfhub .cl{position:absolute;top:4%;width:30%;height:14%;border-radius:50%;background:radial-gradient(closest-side,#fff8,#fff0);filter:blur(2px);animation:pfc 60s linear infinite}
.pfhub .cl.b{top:12%;width:24%;animation-duration:85s;animation-delay:-30s}
@keyframes pfc{from{transform:translateX(-40vw)}to{transform:translateX(140vw)}}
.pfhub .wv{position:absolute;left:0;right:0;height:3px;border-radius:3px;background:linear-gradient(90deg,#fff0,#fffb,#fff0);animation:pfw 5s ease-in-out infinite}
@keyframes pfw{0%,100%{transform:translateX(-4%);opacity:.2}50%{transform:translateX(4%);opacity:.8}}
.pfhub .bd{position:absolute;transform:translate(-50%,-100%);border:0!important;background:none!important;box-shadow:none!important;outline:0;padding:0!important;cursor:pointer;-webkit-tap-highlight-color:transparent}
.pfhub .bd img{display:block;width:100%;height:auto;filter:drop-shadow(0 .6vh .8vh #0006);pointer-events:none;transition:transform .15s}
.pfhub .bd:active img,.pfhub .bd.pr img{transform:scale(1.07)}
.pfhub .bd.main img{animation:pfb 3.4s ease-in-out infinite}@keyframes pfb{0%,100%{transform:translateY(0) rotate(-.6deg)}50%{transform:translateY(-1.2%) rotate(.6deg)}}
.pfhub .lb{position:absolute;left:50%;bottom:-2%;transform:translate(-50%,100%);white-space:nowrap;display:flex;gap:.4em;align-items:center;font:800 clamp(11px,2.1vh,16px)/1 system-ui,-apple-system,"Segoe UI",sans-serif;color:#ffe9a8;background:#12354bee;border:2px solid #f4c869;border-radius:14px;padding:.4em .8em;text-shadow:0 1px 0 #0008;box-shadow:0 3px 8px #0006}
.pfhub .bd.main .lb{background:linear-gradient(#ffb91f,#e07a00);color:#fff;border-color:#fff2a8;font-size:clamp(13px,2.6vh,20px)}
.pfhub .bd.main .lb em{font-style:normal;background:#0003;border-radius:8px;padding:.1em .5em}
.pfhub .bd.main::after{content:"";position:absolute;left:50%;bottom:6%;width:70%;height:12%;transform:translateX(-50%);border-radius:50%;box-shadow:0 0 0 0 #ffe27a99;animation:pfp 2s ease-out infinite;pointer-events:none}
@keyframes pfp{to{box-shadow:0 0 0 3.5vh #ffe27a00}}
.pfhub .gl{position:absolute;width:1.4%;aspect-ratio:1;border-radius:50%;background:radial-gradient(#fff6c0,#ffb02000 70%);animation:pfg 2.4s ease-in-out infinite;pointer-events:none}
@keyframes pfg{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.3)}}
.pfhub .bi{position:absolute;width:2%;height:1.2%;border-top:2px solid #2a2a35;border-radius:50% 50% 0 0;animation:pff 14s linear infinite}
@keyframes pff{from{transform:translateX(-10vw) translateY(0)}50%{transform:translateX(50vw) translateY(-3vh)}to{transform:translateX(115vw) translateY(1vh)}}
.pfhub.ps *{animation-play-state:paused!important}
@media (prefers-reduced-motion:reduce){.pfhub *{animation:none!important}}`;
function create(host,opts){
 opts=opts||{};const base=opts.base||'harbor/hub/';let N=Object.assign({},opts.labels||{}),paused=false,disposed=false,ready=false;
 if(!document.getElementById('pfhub-css')){const s=document.createElement('style');s.id='pfhub-css';s.textContent=CSS;document.head.append(s)}
 const el=document.createElement('div');el.className='pfhub';const st=document.createElement('div');st.className='st';el.append(st);
 const bg=new Image();bg.className='bg';bg.alt='';bg.decoding='async';bg.src=base+'bg.webp';st.append(bg);
 for(const c of ['cl','cl b']){const d=document.createElement('div');d.className=c;st.append(d)}
 for(let i=0;i<7;i++){const w=document.createElement('div');w.className='wv';w.style.top=(38+i*5.5)+'%';w.style.left=(i*9%30)+'%';w.style.right=(i*7%25)+'%';w.style.animationDelay=(-i*.8)+'s';st.append(w)}
 for(let i=0;i<2;i++){const b=document.createElement('div');b.className='bi';b.style.top=(10+i*6)+'%';b.style.animationDelay=(-i*6)+'s';st.append(b)}
 const btn={};
 const html=id=>{const S=SPOTS[id];return S.main?`<span class="lb"><i>${S.icon}</i><b>${N[id]||''}</b><em>▶ ${N.play||'PLAY'}</em></span>`:`<span class="lb"><i>${S.icon}</i><b>${N[id]||''}</b></span>`};
 for(const id of Object.keys(SPOTS)){const S=SPOTS[id],b=document.createElement('button');b.className='bd'+(S.main?' main':'');b.dataset.id=id;b.style.cssText=`left:${S.x}%;top:${S.y}%;width:${S.w}%`;b.setAttribute('aria-label',N[id]||id);
  const im=new Image();im.src=base+S.img;im.alt='';im.decoding='async';b.append(im);b.insertAdjacentHTML('beforeend',html(id));
  b.addEventListener('click',e=>{e.stopPropagation();select(id)});st.append(b);btn[id]=b}
 for(const [x,y] of [[13,52],[17,55],[29,70],[33,72],[70,72],[74,73],[49,43],[84,52]]){const g=document.createElement('div');g.className='gl';g.style.cssText=`left:${x}%;top:${y}%;animation-delay:${-(x%5)*.5}s`;st.append(g)}
 host.append(el);
 // gentle parallax from pointer / tilt
 let px=0,py=0,tx=0,ty=0,raf=0;
 const move=e=>{const r=el.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*-14;ty=((e.clientY-r.top)/r.height-.5)*-8;kick()};
 const kick=()=>{if(!raf&&!paused&&!disposed)raf=requestAnimationFrame(tick)};
 const tick=()=>{raf=0;px+=(tx-px)*.12;py+=(ty-py)*.12;st.style.transform=`translate(calc(-50% + ${px}px),calc(-50% + ${py}px)) scale(1.03)`;if(Math.abs(tx-px)>.1||Math.abs(ty-py)>.1)kick()};
 el.addEventListener('pointermove',move);
 const loaded=new Promise(res=>{const done=()=>{ready=true;res()};if(bg.complete)done();else{bg.onload=done;bg.onerror=done}});
 // ambience: sea waves + soft music; starts on first touch (autoplay rules), obeys the game SOUND switch (pf-sound)
 const snd={m:null,w:null};
 const soundOn=()=>{try{return localStorage.getItem('pf-sound')!=='off'}catch{return true}};
 const mk=(f,v)=>{const a=new Audio(base+f);a.loop=true;a.volume=v;a.preload='auto';return a};
 const sync=()=>{if(disposed)return;const on=soundOn()&&!paused&&!document.hidden;if(on&&!snd.m){snd.m=mk('music.mp3',.35);snd.w=mk('waves.mp3',.5)}
  for(const k of ['m','w']){const a=snd[k];if(!a)continue;if(on){const p=a.play();if(p&&p.catch)p.catch(()=>{})}else a.pause()}};
 const unlock=()=>sync();
 el.addEventListener('pointerdown',unlock);document.addEventListener('visibilitychange',sync);
 setTimeout(sync,300);
 function select(id){if(disposed||!SPOTS[id])return;const b=btn[id];b.classList.add('pr');setTimeout(()=>b.classList.remove('pr'),180);setTimeout(()=>{if(!disposed)opts.onSelect?.(id)},120)}
 return{loaded,select,pause(){paused=true;el.classList.add('ps');sync()},resume(){if(disposed)return;paused=false;el.classList.remove('ps');sync()},
  setLabels(n){Object.assign(N,n||{});for(const id in btn){btn[id].setAttribute('aria-label',N[id]||id);btn[id].querySelector('.lb').outerHTML=html(id)}},
  get state(){return{ready,paused,disposed,focus:null,labels:Object.keys(btn).length}},
  dispose(){disposed=true;document.removeEventListener('visibilitychange',sync);for(const k of ['m','w']){try{snd[k]?.pause()}catch{}}cancelAnimationFrame(raf);el.remove()}};
}
window.PirateHarborHub={create,supported:()=>true,version:1};
})();
