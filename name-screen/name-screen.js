/* Instant first-run welcome / name screen. Runs before the heavy game engine downloads, so the
   player sees something beautiful immediately and can type a name while the game loads behind it. */
(function(){
 let have='';try{have=(localStorage.getItem('pf-player-name')||'').trim()}catch{}
 if(have)return;
 const LANGS=['az','en','tr','ru','pl'];
 let lang='en';try{lang=localStorage.getItem('pf-lang')||''}catch{}
 if(!LANGS.includes(lang)){const n=(navigator.language||'en').slice(0,2).toLowerCase();lang=LANGS.includes(n)?n:'en'}
 const T={
  az:{hi:'Ahoy, kapitan!',ask:'Adın nədir? Arenada səni bu adla tanıyacaqlar.',ph:'Kapitan adın',go:'Dənizə çıx!',dice:'Təsadüfi ad',err:'Ad 1–16 simvol olmalıdır.',load:'Oyun yüklənir…'},
  en:{hi:'Ahoy, Captain!',ask:'What is your name? This is how the arena will know you.',ph:'Your captain name',go:'Set sail!',dice:'Random name',err:'Use 1–16 characters.',load:'Loading the game…'},
  tr:{hi:'Ahoy, kaptan!',ask:'Adın ne? Arenada seni bu adla tanıyacaklar.',ph:'Kaptan adın',go:'Denize açıl!',dice:'Rastgele ad',err:'1–16 karakter kullan.',load:'Oyun yükleniyor…'},
  ru:{hi:'Эй, капитан!',ask:'Как тебя зовут? Так тебя узнают на арене.',ph:'Имя капитана',go:'В море!',dice:'Случайное имя',err:'От 1 до 16 символов.',load:'Игра загружается…'},
  pl:{hi:'Ahoj, kapitanie!',ask:'Jak masz na imię? Tak poznają cię na arenie.',ph:'Imię kapitana',go:'Wypływamy!',dice:'Losowe imię',err:'Użyj 1–16 znaków.',load:'Wczytywanie gry…'}
 };
 const A=['Red','Storm','Iron','Black','Golden','Salty','Swift','Brave','Wild','Silent','Crimson','Thunder'],B=['Mari','Blade','Wave','Hook','Falcon','Shark','Raven','Fox','Anchor','Dagger','Corsair','Kraken'];
 const rnd=()=>A[Math.random()*A.length|0]+B[Math.random()*B.length|0]+(Math.random()<.5?'':String(10+Math.random()*89|0));
 const clean=v=>Array.from(String(v||'').normalize('NFC').replace(/[\p{C}<>]/gu,'').replace(/\s+/g,' ').trim()).slice(0,16).join('');
 const el=document.createElement('div');el.id='pf-name-early';
 const css=document.createElement('style');css.textContent=`
#pf-name-early{position:fixed;inset:0;z-index:2147483647;overflow:hidden;background:#10202c url(name-screen/bg.webp) center/cover no-repeat;font-family:Georgia,'Times New Roman',serif;color:#3b2206;-webkit-user-select:none;user-select:none;animation:pfne-in .5s ease both}
#pf-name-early.out{animation:pfne-out .45s ease both;pointer-events:none}
@keyframes pfne-in{from{opacity:0}to{opacity:1}}@keyframes pfne-out{to{opacity:0;transform:scale(1.04)}}
#pf-name-early:before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 55%,#0006,#0000 55%),linear-gradient(#0000 60%,#0007)}
#pf-name-early .sun{position:absolute;right:8%;top:6%;width:min(26vw,220px);aspect-ratio:1;border-radius:50%;background:radial-gradient(#ffe9a8aa,#ffb84a44 45%,#0000 70%);animation:pfne-pulse 5s ease-in-out infinite}
@keyframes pfne-pulse{50%{transform:scale(1.12);opacity:.8}}
#pf-name-early .stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:2vmin}
#pf-name-early .mari{position:absolute;left:max(1vw,calc(50% - min(88vw,720px)/2 - min(24vh,180px)));bottom:-2vh;height:min(70vh,520px);filter:drop-shadow(0 10px 24px #0008);animation:pfne-bob 4s ease-in-out infinite;pointer-events:none}
@keyframes pfne-bob{50%{transform:translateY(-8px)}}
#pf-name-early .scroll{position:relative;width:min(92vw,720px,calc(88vh*1.558));aspect-ratio:1011/649;background:url(name-screen/scroll.webp) center/100% 100% no-repeat;filter:drop-shadow(0 18px 30px #000a);animation:pfne-pop .6s cubic-bezier(.2,1.3,.4,1) .1s both}
@keyframes pfne-pop{from{opacity:0;transform:translateY(24px) scale(.92)}}
#pf-name-early .inner{position:absolute;left:14%;right:14%;top:22%;bottom:23%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:1.2vmin}
#pf-name-early h1{margin:0;font:800 clamp(18px,4.6vmin,34px)/1.1 Georgia,serif;color:#5a2a06;text-shadow:0 1px 0 #fff6}
#pf-name-early p{margin:0;font:600 clamp(11px,2.5vmin,16px)/1.25 Georgia,serif;color:#5a3a14}
#pf-name-early .row{display:flex;gap:8px;width:100%;justify-content:center;align-items:stretch}
#pf-name-early input{flex:1;min-width:0;max-width:340px;font:700 clamp(15px,3.4vmin,22px) Georgia,serif;color:#2c1a05;background:#fff8e4d9;border:2px solid #9a6a2a;border-radius:12px;padding:1.2vmin 1.6vmin;text-align:center;outline:0;-webkit-user-select:text;user-select:text;box-shadow:inset 0 2px 5px #0003}
#pf-name-early input:focus{border-color:#d68a14;box-shadow:0 0 0 3px #ffc84a77,inset 0 2px 5px #0003}
#pf-name-early .dice{width:clamp(38px,8vmin,52px);border:2px solid #9a6a2a;border-radius:12px;background:#f1d9a0;font-size:clamp(18px,4vmin,26px);cursor:pointer;color:#5a2a06}
#pf-name-early .dice:active{transform:scale(.94)}
#pf-name-early .go{border:0;border-radius:14px;padding:1.3vmin 4vmin;font:800 clamp(15px,3.6vmin,22px) Georgia,serif;color:#3a1d00;background:linear-gradient(#ffd75a,#f0a21f);box-shadow:0 3px 0 #9a5d0a,0 8px 16px #0005;cursor:pointer;animation:pfne-glow 2.2s ease-in-out infinite}
@keyframes pfne-glow{50%{box-shadow:0 3px 0 #9a5d0a,0 8px 22px #ffb53a99}}
#pf-name-early .go:active{transform:translateY(2px)}
#pf-name-early .err{min-height:1.1em;font:700 12px Georgia,serif;color:#a01c0c}
#pf-name-early .langs{position:absolute;right:10px;top:10px;display:flex;gap:6px;z-index:2}
#pf-name-early .langs button{border:1px solid #f0cf84;background:#0b1c2dcc;color:#ffe9b0;border-radius:9px;padding:6px 9px;font:700 12px sans-serif;cursor:pointer}
#pf-name-early .langs button.on{background:#e2a53a;color:#2b1700}
#pf-name-early .load{position:absolute;left:0;right:0;bottom:10px;text-align:center;font:600 12px sans-serif;color:#ffe9b0cc;text-shadow:0 1px 3px #000}
#pf-name-early .load i{display:inline-block;width:80px;height:4px;border-radius:3px;background:#ffffff33;vertical-align:middle;margin-left:8px;overflow:hidden;position:relative}
#pf-name-early .load i:after{content:'';position:absolute;inset:0;width:40%;background:#ffc84a;border-radius:3px;animation:pfne-load 1.2s ease-in-out infinite}
@keyframes pfne-load{from{left:-40%}to{left:100%}}
@media (max-aspect-ratio:1/1){#pf-name-early .mari{display:none}}
@media (max-height:420px){#pf-name-early .mari{height:62vh}}
`;
 el.innerHTML='<div class="sun"></div><div class="langs"></div><div class="stage"><img class="mari" src="name-screen/mari.webp" alt="" draggable="false"><div class="scroll"><div class="inner"><h1></h1><p class="ask"></p><div class="row"><input maxlength="40" autocomplete="nickname" autocapitalize="words" enterkeyhint="go"><button class="dice" type="button" aria-label="random">🎲</button></div><div class="err" role="alert"></div><button class="go" type="button"></button></div></div></div><div class="load"><span></span><i></i></div>';
 const mount=()=>{if(!document.body){document.addEventListener('DOMContentLoaded',mount,{once:true});return}document.head.append(css);document.body.append(el);paint()};
 const q=s=>el.querySelector(s);
 function paint(){const t=T[lang];q('h1').textContent=t.hi;q('.ask').textContent=t.ask;q('input').placeholder=t.ph;q('.go').textContent=t.go;q('.dice').title=t.dice;q('.load span').textContent=t.load;
  const L=q('.langs');L.innerHTML='';for(const k of LANGS){const b=document.createElement('button');b.textContent=k.toUpperCase();if(k===lang)b.className='on';b.onclick=()=>{lang=k;try{localStorage.setItem('pf-lang',k)}catch{}paint()};L.append(b)}}
 function done(){const v=clean(q('input').value);if(!v){q('.err').textContent=T[lang].err;q('input').focus();return}
  try{localStorage.setItem('pf-player-name',v);localStorage.setItem('pf-lang',lang)}catch{}
  window.dispatchEvent(new CustomEvent('pf-name-saved',{detail:{name:v,lang}}));el.classList.add('out');setTimeout(()=>{el.remove();css.remove()},480)}
 el.addEventListener('click',e=>{if(e.target.closest('.go'))done();else if(e.target.closest('.dice')){q('input').value=rnd();q('.err').textContent=''}});
 el.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Enter')done()},true);
 for(const t of ['keyup','keypress'])el.addEventListener(t,e=>e.stopPropagation(),true);
 el.addEventListener('input',()=>{q('.err').textContent=''});
 window.__pfNameEarly={hide(){el.remove();css.remove()}};
 mount();
 /* hide the "loading" hint once the real game has started */
 const iv=setInterval(()=>{if(!document.body.contains(el)){clearInterval(iv);return}if(document.querySelector('canvas')){const l=q('.load');if(l)l.style.display='none'}},800);
})();
