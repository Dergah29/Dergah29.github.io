/* Read-only mechanism drawing using the existing painted temple props. */
(function(root){'use strict';
function draw(ctx,s,props,V,side,time){const q=s.puzzles[side],P=root.PirateArenaPuzzle;
 const line=(x,y,x2,y2,color,width=3)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke()};
 const circle=(x,y,r,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill()};
 const label=(str,x,y,size=20,color='#ffe3a2')=>{ctx.fillStyle=color;ctx.font='bold '+size+'px Georgia';ctx.textAlign='center';ctx.fillText(str,x,y)};
 const seal=(x,y,k,color)=>{ctx.save();ctx.translate(x,y);ctx.strokeStyle=color;ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,18,0,7);ctx.stroke();if(k===0){line(0,-12,0,12,color);line(-10,1,10,1,color);ctx.beginPath();ctx.arc(0,2,11,0,Math.PI);ctx.stroke()}else if(k===1){ctx.beginPath();ctx.arc(3,-2,11,.4,5.4);ctx.stroke()}else{for(let n=0;n<8;n++){const a=n*Math.PI/4;line(Math.cos(a)*5,Math.sin(a)*5,Math.cos(a)*14,Math.sin(a)*14,color)}}ctx.restore()};
 ctx.save();
 for(const [k,x]of P.SWITCHES.entries()){V.prop(ctx,props,3,x-40,493,80,87);seal(x,532,k,'#d6be82');label(q.round===1?'ÇEVİR':q.round===2?['AÇAR','SAXLA','QAPI'][k]:'LİNG',x,610,18)}
 if(q.round===0){
  V.prop(ctx,props,4,390,273,500,52);for(let k=0;k<3;k++){const x=450+k*190;seal(x,300,k,s.puzzleStencil[k]?'#ffdf86':'#46626b');label(s.puzzleStencil[k]?'AÇIQ':'BAĞLI',x,345,17);line(P.SWITCHES[k],493,P.SWITCHES[k],405,'#987d47',4);circle(P.SWITCHES[k],405,29,'#102b35');seal(P.SWITCHES[k],405,k,q.values[k]?'#86f5df':'#526871');line(P.SWITCHES[k]-35,440,P.SWITCHES[k]+35,440,q.values[k]?'#83e5cd':'#805a3f',4)}
 }else if(q.round===1){
  const board=s.puzzleBoard,ray=P.trace(board,q.values);for(let k=0;k<3;k++){const m=board.mirrors[k];line(P.SWITCHES[k],493,m.x,m.y,'#b18e5255',2)}
  circle(board.source.x,board.source.y,23,'#624c27');circle(board.source.x,board.source.y,12,'#ffe79b');
  ctx.lineCap='round';for(const seg of ray.segments){line(seg.x,seg.y,seg.toX,seg.toY,'#ffdf9a33',15);line(seg.x,seg.y,seg.toX,seg.toY,'#ffe49a',4)}
  for(let k=0;k<3;k++){const m=board.mirrors[k];V.prop(ctx,props,4,m.x-43,m.y-23,86,46);circle(m.x,m.y,25,'#102631');const flip=q.values[k]?1:-1;line(m.x-17,m.y+17*flip,m.x+17,m.y-17*flip,'#acfff0',7);label(['LÖVBƏ','AY','SÜKAN'][k],m.x,m.y-37,17)}
  circle(board.receiver.x,board.receiver.y,28,ray.connected?'#79edd7':'#14303b');seal(board.receiver.x,board.receiver.y,2,'#e0c986');label('İŞIQ QAPISI',board.receiver.x+80,board.receiver.y+4,17);ctx.lineCap='butt';
 }else{
  const active=q.gateUntil>s.time,left=Math.max(0,q.gateUntil-s.time),color=active?'#84ead5':'#d7ab60';
  V.prop(ctx,props,4,235,534,90,39);if(!q.keyHeld){circle(280,457,25,active?'#e3b45855':'#15333d');ctx.strokeStyle=active?'#ffe3a0':'#66818b';ctx.lineWidth=6;ctx.beginPath();ctx.arc(273,450,8,0,7);ctx.stroke();line(280,456,298,474,active?'#ffe3a0':'#66818b',5);line(290,467,299,460,active?'#ffe3a0':'#66818b',4)}
  V.prop(ctx,props,3,940,398,120,183);for(let n=0;n<4;n++)line(963+n*22,420,963+n*22,active?442:575,active?'#68c9c1':'#84734f',7);
  V.prop(ctx,props,4,576,559,128,25);line(589,567,691,567,'#29464d',12);line(589,567,589+102*q.plateCharge/1.2,567,color,8);
  circle(640,325,43,'#122d3b');ctx.strokeStyle=color;ctx.lineWidth=7;ctx.beginPath();ctx.arc(640,325,38,-Math.PI/2,-Math.PI/2+Math.PI*2*(active?left/8:q.plateCharge/1.2));ctx.stroke();label(active?left.toFixed(1)+'s':'⚙',640,332,25,color);
  label(q.keyHeld?'AÇAR SƏNDƏ • SAĞ QAPIYA GET':active?'SOL AÇAR → SAĞ QAPI':'ORTADA ⚙ SAXLA',640,404,24,color);
 }
 label('MÖHÜR '+Math.min(3,q.round+1)+'/3  •  RƏQİB '+s.puzzles[1-side].round+'/3',640,650,20,'#d0dfda');ctx.restore();
}
root.PirateArenaPuzzleView={draw};
})(typeof window!=='undefined'?window:globalThis);
