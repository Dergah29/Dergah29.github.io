/* Painted Arena layers. Presentation only; shares the match clock and canvas. */
(function(root){'use strict';
let pending;
function load(){
 if(!pending)pending=(async()=>{const image=new Image();image.src='arena-assets/atmosphere-v1.webp';await image.decode();return image})().catch(()=>{pending=null;return null});
 return pending;
}
function sample(time,camera,reduced,out){
 const t=reduced?0:Math.max(0,time);
 out.fog=Math.sin(t*.13)*48;out.water=Math.sin(t*.7)*8;
 out.sway=Math.sin(t*.8)*.018;out.glow=reduced?.9:.88+Math.sin(t*3.1)*.08;
 out.fogCamera=camera*.72;out.foreCamera=camera*.12;
 return out;
}
const pose={};
function draw(ctx,image,view,time,reduced,pass,mode){
 if(!image)return;
 const p=sample(time,view.left,reduced,pose),cw=image.width/2,ch=image.height/2;
 const tile=(id,x,y,w,h)=>ctx.drawImage(image,id%2*cw,Math.floor(id/2)*ch,cw,ch,x,y,w,h);
 ctx.save();
 if(pass==='back'){
  // Distant mist follows less of the world than platforms; water has its own drift.
  ctx.globalAlpha=mode==='puzzle'?.13:.2;
  tile(0,-230+p.fog+p.fogCamera,250,900,145);
  tile(0,570-p.fog*.6+p.fogCamera,280,900,125);
  if(mode!=='puzzle'&&mode!=='race'){
   ctx.globalAlpha=mode==='treasure'?.26:.18;tile(3,100+p.water+view.left*.45,402,700,90);
   if(mode==='treasure'){ctx.globalAlpha=.14;tile(3,440-p.water*.5,490,390,38);ctx.globalAlpha=.09;tile(3,390+p.water*.8,535,470,25)}
  }
 }else{
  // Keep opaque foreground detail at the edges, above platform/hazard space.
  const right=view.left+view.width;
  if(mode!=='puzzle'&&mode!=='cannon'){
   ctx.globalAlpha=.8;ctx.save();ctx.translate(right+20,view.top+56);ctx.rotate(p.sway);tile(1,-170,-24,175,115);ctx.restore();
  }
  ctx.globalAlpha=p.glow;ctx.save();ctx.translate(view.left+30,view.top+110);ctx.rotate(p.sway*.65);tile(2,-38,-32,76,90);ctx.restore();
 }
 ctx.restore();
}
const api={load,sample,draw};if(typeof module!=='undefined')module.exports=api;root.PirateArenaEnvironment=api;
})(typeof window!=='undefined'?window:globalThis);
