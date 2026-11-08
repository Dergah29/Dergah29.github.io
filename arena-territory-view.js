/* Existing painted props, distinct bases and elevated territory; no state writes. */
(function(root){'use strict';
const color=i=>i===0?'#85e6dc':'#f3a181';
function label(c,t,x,y,size=18,col='#ffe2a1'){c.fillStyle=col;c.font='bold '+size+'px Georgia';c.textAlign='center';c.fillText(t,x,y);c.textAlign='left'}
function flag(c,s,props,V,side,time){
 for(let i=0;i<2;i++){const x=i?1190:90,col=color(i),lever=i?1040:240;V.prop(c,props,4,x-70,561,140,31);V.prop(c,props,i?7:6,x+(i?-91:43),506,50,74);V.prop(c,props,5,lever-25,513,50,67);c.fillStyle=col;c.fillRect(x-45,578,90,4);
  if(s.baseWardUntil[i]>s.time){c.strokeStyle=col;c.lineWidth=4;c.beginPath();c.ellipse(x,527,72,93,0,Math.PI,Math.PI*2);c.stroke();label(c,'QORUNUR '+Math.ceil(s.baseWardUntil[i]-s.time)+'s',x,419,18,col)}
 }
 for(const f of s.flags){const carried=f.carrier!==null,y=f.y-(carried?190:100),col=color(f.owner);V.prop(c,props,8,f.x-12,y,24,carried?105:100);V.banner(c,f.x+3,y,carried?41:53,29,col,time);if(!carried)label(c,f.home?(f.owner===side?'ÖZ BAZAN':'RƏQİB BAZASI'):'GERİ QAYTAR',f.x, y-17,16,col)}
}
function control(c,s,props,V,side,time){
 for(const [i,q]of s.points.entries()){const col=q.contested?'#e9d083':q.owner===null?'#9baea9':color(q.owner);c.strokeStyle=col;c.lineWidth=4;c.beginPath();c.ellipse(q.x,q.y-5,70,11,0,0,7);c.stroke();V.prop(c,props,4,q.x-70,q.y-8,140,31);
  if(i===0){V.prop(c,props,0,q.x-83,q.y-57,63,53);V.prop(c,props,6,q.x+47,q.y-69,46,69)}else if(i===1)V.prop(c,props,1,q.x-52,q.y-70,104,75,(s.controlPulses[0]?.dir||s.controlLastDirection||1)<0);else V.prop(c,props,3,q.x+46,q.y-84,68,84);
  V.prop(c,props,8,q.x-88,q.y-132,24,130);V.banner(c,q.x-73,q.y-132,45,29,col,time);label(c,['LİMAN','TOP QÜLLƏSİ','SİQNAL'][i],q.x+132,q.y-89,18,col);label(c,q.contested?'MÜBAHİSƏLİ':q.owner===null?'NEYTRAL':q.owner===side?'SƏNİN':'RƏQİBİN',q.x+132,q.y-62,15,col);
  c.fillStyle='#112b36';c.fillRect(q.x-44,q.y+24,88,8);c.fillStyle=col;c.fillRect(q.x-44,q.y+24,88*q.progress/3,8);
 }
 for(const pulse of s.controlPulses){const x=pulse.dir>0?pulse.x:pulse.x-240;c.fillStyle='#f6b2622b';c.fillRect(x,pulse.y-65,240,130);c.strokeStyle='#ffce8f';c.lineWidth=3;c.setLineDash([9,8]);c.strokeRect(x,pulse.y-65,240,130);c.setLineDash([]);label(c,'⚠ '+Math.max(0,pulse.fireAt-s.time).toFixed(1)+'s',pulse.x+132,pulse.y-128,20,'#ffdf9d')}
 const age=s.time-s.controlLastFire;if(age>=0&&age<.4){c.fillStyle='#f5d5a44d';for(let k=0;k<3;k++){c.beginPath();c.ellipse(640+(s.controlLastDirection||1)*(45+k*12),445-age*60,10+age*45,8+age*35,0,0,7);c.fill()}}
}
root.PirateArenaTerritoryView={flag,control};
})(typeof window!=='undefined'?window:globalThis);
