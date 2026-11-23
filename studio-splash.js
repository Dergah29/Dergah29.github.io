/* Dergah Aztech opening: plain deep-sea backdrop, the studio logo, and a pirate loading bar
   (a little ship sails along the waves as the game loads). Runs before the heavy scripts. */
(()=>{
'use strict';
if(window.__pfBoot)return;
let lang='en';try{lang=localStorage.getItem('pf-lang')||''}catch{}
const W={az:'Yüklənir',en:'Loading',tr:'Yükleniyor',ru:'Загрузка',pl:'Ładowanie'};
if(!W[lang]){const n=(navigator.language||'en').slice(0,2).toLowerCase();lang=W[n]?n:'en'}
const css=document.createElement('style');
css.textContent=`
#studio-boot{position:fixed;inset:0;z-index:2147483646;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(14px,5vh,34px);overflow:hidden;opacity:1;transition:opacity .4s ease;pointer-events:auto;background:radial-gradient(ellipse at 50% 38%,#12395a 0%,#0a2238 45%,#050f1a 100%)}
#studio-boot.leaving{opacity:0;pointer-events:none}
#studio-boot .stars{position:absolute;inset:0;background-image:radial-gradient(1.5px 1.5px at 12% 18%,#fff9,#0000),radial-gradient(1px 1px at 28% 32%,#fff8,#0000),radial-gradient(1.5px 1.5px at 44% 12%,#fff9,#0000),radial-gradient(1px 1px at 63% 24%,#fff8,#0000),radial-gradient(1.5px 1.5px at 78% 14%,#fff9,#0000),radial-gradient(1px 1px at 90% 30%,#fff7,#0000),radial-gradient(1px 1px at 6% 40%,#fff6,#0000),radial-gradient(1.5px 1.5px at 56% 40%,#fff6,#0000);animation:sb-twinkle 4s ease-in-out infinite}
@keyframes sb-twinkle{50%{opacity:.55}}
#studio-boot .waves{position:absolute;left:0;right:0;bottom:0;height:26%;pointer-events:none}
#studio-boot .waves svg{position:absolute;left:0;bottom:0;width:200%;height:100%;animation:sb-drift 9s linear infinite}
#studio-boot .waves svg:nth-child(2){animation-duration:13s;animation-direction:reverse;opacity:.7;bottom:-6%}
#studio-boot .waves svg:nth-child(3){animation-duration:18s;opacity:.5;bottom:-12%}
@keyframes sb-drift{to{transform:translateX(-50%)}}
#studio-boot .mark{position:relative;overflow:hidden;mix-blend-mode:screen;width:min(62vw,820px,70vh);animation:sb-arrive .8s ease-out both}
#studio-boot .mark img{display:block;width:100%;height:auto;user-select:none;-webkit-user-drag:none}
#studio-boot .mark:after{content:'';position:absolute;top:0;left:-35%;width:20%;height:100%;background:linear-gradient(100deg,transparent,#d4ffffa0,transparent);transform:skewX(-20deg);animation:sb-shine 2.8s .6s ease-in-out infinite;}
@keyframes sb-arrive{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}
@keyframes sb-shine{0%,12%{left:-35%}65%,100%{left:130%}}
#studio-boot .load{position:relative;width:min(70vw,460px);z-index:2}
#studio-boot .track{position:relative;height:16px;border-radius:10px;background:#071420;border:2px solid #c99a4a;box-shadow:0 0 0 2px #3a2610,0 6px 16px #0008,inset 0 2px 5px #000a;overflow:visible}
#studio-boot .fill{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:8px;background:linear-gradient(#52e0d0,#139fb3);overflow:hidden;transition:width .25s linear}
#studio-boot .fill:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(115deg,#fff3 0 8px,#fff0 8px 16px);animation:sb-stripe 1s linear infinite}
@keyframes sb-stripe{to{background-position:32px 0}}
#studio-boot .ship{position:absolute;top:-34px;left:0;width:46px;height:46px;margin-left:-23px;transition:left .25s linear;animation:sb-bob 1.4s ease-in-out infinite;filter:drop-shadow(0 3px 3px #0008)}
@keyframes sb-bob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-4px) rotate(3deg)}}
#studio-boot .pct{margin-top:10px;text-align:center;font:700 13px Georgia,serif;letter-spacing:.14em;color:#f0d9a2;text-shadow:0 1px 3px #000}
@media(prefers-reduced-motion:reduce){#studio-boot *{animation:none!important}}
`;
const wave=(c,o)=>`<svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="${c}" fill-opacity="${o}" d="M0 60 Q 75 20 150 60 T 300 60 T 450 60 T 600 60 T 750 60 T 900 60 T 1050 60 T 1200 60 V120 H0Z"/></svg>`;
const ship='<svg class="ship" viewBox="0 0 64 64"><path d="M30 6v34" stroke="#5a3a1a" stroke-width="3" stroke-linecap="round"/><path d="M32 8 L54 34 H32Z" fill="#f4e6c1" stroke="#caa86a" stroke-width="1.5"/><path d="M28 14 L12 36 H28Z" fill="#e9d6a4" stroke="#caa86a" stroke-width="1.5"/><path d="M30 6 L42 9 L30 12Z" fill="#d6372c"/><path d="M6 40 H58 L50 54 Q32 60 14 54Z" fill="#7a4a22" stroke="#3d230d" stroke-width="2" stroke-linejoin="round"/><path d="M10 45 H54" stroke="#d9a755" stroke-width="2"/></svg>';
const el=document.createElement('div');el.id='studio-boot';el.setAttribute('aria-label','Dergah Aztech');
el.innerHTML='<div class="stars"></div><div class="mark"><img src="studio-logo.webp" alt="Dergah Aztech" draggable="false"></div><div class="load"><div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="fill"></div>'+ship+'</div><div class="pct"></div></div><div class="waves">'+wave('#0d4a6b',1)+wave('#13688a',1)+wave('#1c88a8',1)+'</div>';
function mount(){document.head.append(css);document.body.append(el)}
if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount,{once:true});
const start=performance.now();let shown=0,real=0,done=false;
const track=()=>el.querySelector('.track'),fill=()=>el.querySelector('.fill'),shipEl=()=>el.querySelector('.ship'),pct=()=>el.querySelector('.pct');
function paint(){const f=fill();if(!f)return;const v=Math.min(100,shown);f.style.width=v+'%';const s=shipEl();s.style.left=v+'%';track().setAttribute('aria-valuenow',String(Math.round(v)));pct().textContent=W[lang]+'… '+Math.round(v)+'%'}
/* while scripts download we cannot know the real progress: ease towards 55%, the engine then reports the rest */
const iv=setInterval(()=>{if(done){clearInterval(iv);return}const t=performance.now()-start,fake=55*(1-Math.exp(-t/7000));const target=Math.max(fake,real);shown+=(target-shown)*.25;paint()},60);
function leave(){done=true;shown=100;paint();const left=Math.max(0,1400-(performance.now()-start));setTimeout(()=>{el.classList.add('leaving');setTimeout(()=>{el.remove();css.remove()},420)},left+150)}
window.__pfBoot={real(v){real=Math.max(real,55+Math.max(0,Math.min(100,v))*.45)},finish(cb){leave();setTimeout(cb,Math.max(0,1400-(performance.now()-start))+150)}};
})();
