/* Pirate Strike — optional performance probe. Open the game with ?perf=1 (remembered) to see a small overlay:
   FPS, long main-thread stalls (>150 ms) with the time they happened and the biggest files. ?perf=0 turns it off. */
(function(){
 try{const q=location.search.match(/[?&]perf=(\d)/);if(q)localStorage.setItem('pf-perf',q[1]);if(localStorage.getItem('pf-perf')!=='1')return}catch(e){return}
 const stalls=[];try{new PerformanceObserver(l=>l.getEntries().forEach(e=>{if(e.duration>=150)stalls.push([e.startTime/1000,e.duration])})).observe({entryTypes:['longtask']})}catch(e){}
 let frames=0,fps=0,last=performance.now(),worst=0,lf=last;
 (function loop(t){frames++;worst=Math.max(worst,t-lf);lf=t;if(t-last>=1000){fps=frames*1000/(t-last);frames=0;last=t}requestAnimationFrame(loop)})(performance.now());
 function mk(){
  const d=document.createElement('div');d.style.cssText='position:fixed;left:4px;top:4px;z-index:2147483647;max-width:46vw;max-height:60vh;overflow:auto;background:#000c;color:#9f9;font:10px/1.25 monospace;padding:4px 6px;border-radius:6px;pointer-events:none;white-space:pre';
  document.body.appendChild(d);
  setInterval(()=>{
   const big=performance.getEntriesByType('resource').filter(r=>r.transferSize>1e6||r.duration>1500).sort((a,b)=>b.duration-a.duration).slice(0,4).map(r=>r.name.split('/').pop().slice(0,22)+' '+Math.round(r.duration)+'ms '+(r.transferSize/1e6).toFixed(1)+'MB');
   const nav=performance.getEntriesByType('navigation')[0];
   d.textContent='FPS '+fps.toFixed(0)+'  worst frame '+Math.round(worst)+'ms  t '+(performance.now()/1000).toFixed(0)+'s\n'+(nav?'DOM ready '+Math.round(nav.domContentLoadedEventEnd)+'ms load '+Math.round(nav.loadEventEnd)+'ms\n':'')+'stalls>150ms ('+stalls.length+'):\n'+stalls.slice(-8).map(s=>' @'+s[0].toFixed(1)+'s  '+Math.round(s[1])+'ms').join('\n')+(big.length?'\nbig:\n '+big.join('\n '):'');
   worst=0},1000)}
 if(document.body)mk();else document.addEventListener('DOMContentLoaded',mk);
})();
