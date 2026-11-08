(()=>{var tl="160";var Mf=0,eh=1,Ef=2;var Hu=1,aa=2,Ui=3,Si=0,Pn=1,dn=2;var Ei=0,es=1,Ln=2,th=3,nh=4,Sf=5,Ss=100,wf=101,Tf=102,ih=103,sh=104,Af=200,Rf=201,Cf=202,Pf=203,_c=204,vc=205,Lf=206,If=207,Df=208,Uf=209,Nf=210,Ff=211,Of=212,Bf=213,kf=214,Hf=0,zf=1,Gf=2,ja=3,Vf=4,Wf=5,Xf=6,qf=7,nl=0,jf=1,Yf=2,ts=0,il=1,sl=2,rl=3,Xi=4,Kf=5,al=6,rh="attached",Jf="detached",zu=300,mr=301,gr=302,yc=303,Mc=304,To=306,Vn=1e3,ti=1001,Ps=1002,En=1003,Ya=1004;var Yr=1005;var Sn=1006,ol=1007;var ns=1008;var ai=1009,Zf=1010,Qf=1011,cl=1012,Gu=1013,Qi=1014,Fi=1015,Wn=1016,Vu=1017,Wu=1018,As=1020,$f=1021,kn=1023,ed=1024,td=1025,Rs=1026,br=1027,nd=1028,Xu=1029,id=1030,qu=1031,ju=1033,ko=33776,Ho=33777,zo=33778,Go=33779,ah=35840,oh=35841,ch=35842,lh=35843,Yu=36196,hh=37492,uh=37496,fh=37808,dh=37809,ph=37810,mh=37811,gh=37812,bh=37813,xh=37814,_h=37815,vh=37816,yh=37817,Mh=37818,Eh=37819,Sh=37820,wh=37821,Vo=36492,Th=36494,Ah=36495,sd=36283,Rh=36284,Ch=36285,Ph=36286,ll=2200,Ao=2201,rd=2202,xr=2300,Ls=2301,Wo=2302,lr=2400,hr=2401,Ka=2402,hl=2500,ad=2501,Ku=0,Ro=1,oa=2,Ju=3e3,Cs=3001,od=3200,cd=3201,ul=0,ld=1,ri="",Nt="srgb",wn="srgb-linear",fl="display-p3",Co="display-p3-linear",Ja="linear",sn="srgb",Za="rec709",Qa="p3";var Gs=7680;var Lh=519,hd=512,ud=513,fd=514,Zu=515,dd=516,pd=517,md=518,gd=519,Ec=35044;var Ih="300 es",Sc=1035,Oi=2e3,$a=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=1234567,Kr=Math.PI/180,_r=180/Math.PI;function xi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function Bn(s,e,t){return Math.max(e,Math.min(t,s))}function dl(s,e){return(s%e+e)%e}function bd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function xd(s,e,t){return s!==e?(t-s)/(e-s):0}function Jr(s,e,t){return(1-t)*s+t*e}function _d(s,e,t,n){return Jr(s,e,1-Math.exp(-t*n))}function vd(s,e=1){return e-Math.abs(dl(s,e*2)-e)}function yd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Md(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ed(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sd(s,e){return s+Math.random()*(e-s)}function wd(s){return s*(.5-Math.random())}function Td(s){s!==void 0&&(Dh=s);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ad(s){return s*Kr}function Rd(s){return s*_r}function wc(s){return(s&s-1)===0&&s!==0}function Cd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pd(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ca={DEG2RAD:Kr,RAD2DEG:_r,generateUUID:xi,clamp:Bn,euclideanModulo:dl,mapLinear:bd,inverseLerp:xd,lerp:Jr,damp:_d,pingpong:vd,smoothstep:yd,smootherstep:Md,randInt:Ed,randFloat:Sd,randFloatSpread:wd,seededRandom:Td,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:wc,ceilPowerOfTwo:Cd,floorPowerOfTwo:eo,setQuaternionFromProperEuler:Pd,normalize:tn,denormalize:Mi},Ze=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],b=i[0],m=i[3],d=i[6],_=i[1],x=i[4],S=i[7],P=i[2],T=i[5],y=i[8];return r[0]=a*b+o*_+c*P,r[3]=a*m+o*x+c*T,r[6]=a*d+o*S+c*y,r[1]=l*b+u*_+h*P,r[4]=l*m+u*x+h*T,r[7]=l*d+u*S+h*y,r[2]=f*b+p*_+g*P,r[5]=f*m+p*x+g*T,r[8]=f*d+p*S+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=h*b,e[1]=(i*l-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(u*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new Bt;function Qu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ld(){let s=$r("canvas");return s.style.display="block",s}var Uh={};function Zr(s){s in Uh||(Uh[s]=!0,console.warn(s))}var Nh=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[wn]:{transfer:Ja,primaries:Za,toReference:s=>s,fromReference:s=>s},[Nt]:{transfer:sn,primaries:Za,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Co]:{transfer:Ja,primaries:Qa,toReference:s=>s.applyMatrix3(Fh),fromReference:s=>s.applyMatrix3(Nh)},[fl]:{transfer:sn,primaries:Qa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fh),fromReference:s=>s.applyMatrix3(Nh).convertLinearToSRGB()}},Id=new Set([wn,Co]),Yt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Id.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=ga[e].toReference,i=ga[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ga[s].primaries},getTransfer:function(s){return s===ri?Ja:ga[s].transfer}};function dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vs,to=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=$r("canvas")),Vs.width=e.width,Vs.height=e.height;let n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=dr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dd=0,no=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jo(i[a].image)):r.push(jo(i[a]))}else r=jo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function jo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?to.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,Nn=class s extends Bi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ti,i=ti,r=Sn,a=ns,o=kn,c=ai,l=s.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=xi(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cs?Nt:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Cs:Ju}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cs?Nt:ri}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=zu;Nn.DEFAULT_ANISOTROPY=1;var an=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],b=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,S=(p+1)/2,P=(d+1)/2,T=(u+f)/4,y=(h+b)/4,H=(g+m)/4;return x>S&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=y/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=H/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=y/r,i=H/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-b)/_,this.z=(f-u)/_,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cs?Nt:ri),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},io=class extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ac=class extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==f||l!==p||u!==g){let m=1-o,d=c*f+l*p+u*g+h*b,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),T=Math.atan2(P,d*_);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P}let S=o*_;if(c=c*m+f*S,l=l*m+p*S,u=u*m+g*S,h=h*m+b*S,m===1-o){let P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new L,Oh=new Mn,Xn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),xa.subVectors(this.max,Br),Ws.subVectors(e.a,Br),Xs.subVectors(e.b,Br),qs.subVectors(e.c,Br),ji.subVectors(Xs,Ws),Yi.subVectors(qs,Xs),_s.subVectors(Ws,qs);let t=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-_s.z,_s.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,_s.z,0,-_s.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-_s.y,_s.x,0];return!Ko(t,Ws,Xs,qs,xa)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,Ws,Xs,qs,xa))?!1:(_a.crossVectors(ji,Yi),t=[_a.x,_a.y,_a.z],Ko(t,Ws,Xs,qs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new L,new L,new L,new L,new L,new L,new L,new L],mi=new L,ba=new Xn,Ws=new L,Xs=new L,qs=new L,ji=new L,Yi=new L,_s=new L,Br=new L,xa=new L,_a=new L,vs=new L;function Ko(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){vs.fromArray(s,r);let o=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Nd=new Xn,kr=new L,Jo=new L,ni=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Jo)),this.expandByPoint(kr.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new L,Zo=new L,va=new L,Ki=new L,Qo=new L,ya=new L,$o=new L,Is=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zo.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=Ki.dot(this.direction),c=-Ki.dot(va),l=Ki.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let b=1/u;h*=b,f*=b,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Zo).addScaledVector(va,f),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,r){Qo.subVectors(t,e),ya.subVectors(n,e),$o.crossVectors(Qo,ya);let a=this.direction.dot($o),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);let c=o*this.direction.dot(ya.crossVectors(Ki,ya));if(c<0)return null;let l=o*this.direction.dot(Qo.cross(Ki));if(l<0||c+l>a)return null;let u=-o*Ki.dot($o);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,f,p,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,p,g,b,m)}set(e,t,n,i,r,a,o,c,l,u,h,f,p,g,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,b=l*h;t[0]=f+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,b=l*h;t[0]=f-b*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+b,t[1]=c*h,t[5]=b*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-b*h}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+b,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){let i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ji.crossVectors(n,$n),Ji.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ji.crossVectors(n,$n)),Ji.normalize(),Ma.crossVectors($n,Ji),i[0]=Ji.x,i[4]=Ma.x,i[8]=$n.x,i[1]=Ji.y,i[5]=Ma.y,i[9]=$n.y,i[2]=Ji.z,i[6]=Ma.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],b=n[6],m=n[10],d=n[14],_=n[3],x=n[7],S=n[11],P=n[15],T=i[0],y=i[4],H=i[8],E=i[12],R=i[1],te=i[5],re=i[9],Se=i[13],N=i[2],$=i[6],oe=i[10],he=i[14],ce=i[3],le=i[7],xe=i[11],Te=i[15];return r[0]=a*T+o*R+c*N+l*ce,r[4]=a*y+o*te+c*$+l*le,r[8]=a*H+o*re+c*oe+l*xe,r[12]=a*E+o*Se+c*he+l*Te,r[1]=u*T+h*R+f*N+p*ce,r[5]=u*y+h*te+f*$+p*le,r[9]=u*H+h*re+f*oe+p*xe,r[13]=u*E+h*Se+f*he+p*Te,r[2]=g*T+b*R+m*N+d*ce,r[6]=g*y+b*te+m*$+d*le,r[10]=g*H+b*re+m*oe+d*xe,r[14]=g*E+b*Se+m*he+d*Te,r[3]=_*T+x*R+S*N+P*ce,r[7]=_*y+x*te+S*$+P*le,r[11]=_*H+x*re+S*oe+P*xe,r[15]=_*E+x*Se+S*he+P*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],b=e[7],m=e[11],d=e[15];return g*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*p-n*c*p)+b*(+t*c*p-t*l*f+r*a*f-i*a*p+i*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],b=e[13],m=e[14],d=e[15],_=h*m*l-b*f*l+b*c*p-o*m*p-h*c*d+o*f*d,x=g*f*l-u*m*l-g*c*p+a*m*p+u*c*d-a*f*d,S=u*b*l-g*h*l+g*o*p-a*b*p-u*o*d+a*h*d,P=g*h*c-u*b*c-g*o*f+a*b*f+u*o*m-a*h*m,T=t*_+n*x+i*S+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/T;return e[0]=_*y,e[1]=(b*f*r-h*m*r-b*i*p+n*m*p+h*i*d-n*f*d)*y,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*d+n*c*d)*y,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*p-n*c*p)*y,e[4]=x*y,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*d+t*f*d)*y,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*d-t*c*d)*y,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*p+t*c*p)*y,e[8]=S*y,e[9]=(g*h*r-u*b*r-g*n*p+t*b*p+u*n*d-t*h*d)*y,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*d+t*o*d)*y,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*y,e[12]=P*y,e[13]=(u*b*i-g*h*i+g*n*f-t*b*f-u*n*m+t*h*m)*y,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*y,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*y,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,g=r*h,b=a*u,m=a*h,d=o*h,_=c*l,x=c*u,S=c*h,P=n.x,T=n.y,y=n.z;return i[0]=(1-(b+d))*P,i[1]=(p+S)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(f+d))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+x)*y,i[9]=(m-_)*y,i[10]=(1-(f+b))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=js.set(i[0],i[1],i[2]).length(),a=js.set(i[4],i[5],i[6]).length(),o=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gi.copy(this);let l=1/r,u=1/a,h=1/o;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Oi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),p,g;if(o===Oi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$a)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Oi){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*l,p=(n+i)*u,g,b;if(o===Oi)g=(a+r)*h,b=-2*h;else if(o===$a)g=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},js=new L,gi=new Ft,Fd=new L(0,0,0),Od=new L(1,1,1),Ji=new L,Ma=new L,$n=new L,Bh=new Ft,kh=new Mn,so=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};so.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bd=0,Hh=new L,Ys=new Mn,Pi=new Ft,Ea=new L,Hr=new L,kd=new L,Hd=new Mn,zh=new L(1,0,0),Gh=new L(0,1,0),Vh=new L(0,0,1),zd={type:"added"},Gd={type:"removed"},mn=class s extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new so,n=new Mn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Bt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(zh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Hr,Ea,this.up):Pi.lookAt(Ea,Hr,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mn.DEFAULT_UP=new L(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new L,Li=new L,ec=new L,Ii=new L,Ks=new L,Js=new L,Wh=new L,tc=new L,nc=new L,ic=new L,Sa=!1,Ts=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bi.subVectors(e,t),i.cross(bi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bi.subVectors(i,t),Li.subVectors(n,t),ec.subVectors(e,t);let a=bi.dot(bi),o=bi.dot(Li),c=bi.dot(ec),l=Li.dot(Li),u=Li.dot(ec),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,n,i,r,a,o,c){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ii.x),c.addScaledVector(a,Ii.y),c.addScaledVector(o,Ii.z),c)}static isFrontFacing(e,t,n,i){return bi.subVectors(n,t),Li.subVectors(e,t),bi.cross(Li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),bi.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ks.subVectors(i,n),Js.subVectors(r,n),tc.subVectors(e,n);let c=Ks.dot(tc),l=Js.dot(tc);if(c<=0&&l<=0)return t.copy(n);nc.subVectors(e,i);let u=Ks.dot(nc),h=Js.dot(nc);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ks,a);ic.subVectors(e,r);let p=Ks.dot(ic),g=Js.dot(ic);if(g>=0&&p<=g)return t.copy(r);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Js,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wh.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Wh,o);let d=1/(m+b+f);return a=b*d,o=f*d,t.copy(n).addScaledVector(Ks,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function sc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Yt.workingColorSpace){if(e=dl(e,1),t=Bn(t,0,1),n=Bn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sc(a,r,e+1/3),this.g=sc(a,r,e),this.b=sc(a,r,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Yt.fromWorkingColorSpace(On.copy(this),e),Math.round(Bn(On.r*255,0,255))*65536+Math.round(Bn(On.g*255,0,255))*256+Math.round(Bn(On.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(On.copy(this),t);let n=On.r,i=On.g,r=On.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Nt){Yt.fromWorkingColorSpace(On.copy(this),e);let t=On.r,n=On.g,i=On.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(wa);let n=Jr(Zi.h,wa.h,t),i=Jr(Zi.s,wa.s,t),r=Jr(Zi.l,wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Ne;Ne.NAMES=$u;var Vd=0,qn=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=es,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ln=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yn=new L,Ta=new Ze,Qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}};var ro=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ao=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Wd=0,si=new Ft,rc=new mn,Zs=new L,ei=new Xn,zr=new Xn,Cn=new L,en=class s extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qu(e)?ao:ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(ei.min,zr.min),ei.expandByPoint(Cn),Cn.addVectors(ei.max,zr.max),ei.expandByPoint(Cn)):(ei.expandByPoint(zr.min),ei.expandByPoint(zr.max))}ei.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Cn.fromBufferAttribute(o,l),c&&(Zs.fromBufferAttribute(e,l),Cn.add(Zs)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<o;R++)l[R]=new L,u[R]=new L;let h=new L,f=new L,p=new L,g=new Ze,b=new Ze,m=new Ze,d=new L,_=new L;function x(R,te,re){h.fromArray(i,R*3),f.fromArray(i,te*3),p.fromArray(i,re*3),g.fromArray(a,R*2),b.fromArray(a,te*2),m.fromArray(a,re*2),f.sub(h),p.sub(h),b.sub(g),m.sub(g);let Se=1/(b.x*m.y-m.x*b.y);isFinite(Se)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-b.y).multiplyScalar(Se),_.copy(p).multiplyScalar(b.x).addScaledVector(f,-m.x).multiplyScalar(Se),l[R].add(d),l[te].add(d),l[re].add(d),u[R].add(_),u[te].add(_),u[re].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,te=S.length;R<te;++R){let re=S[R],Se=re.start,N=re.count;for(let $=Se,oe=Se+N;$<oe;$+=3)x(n[$+0],n[$+1],n[$+2])}let P=new L,T=new L,y=new L,H=new L;function E(R){y.fromArray(r,R*3),H.copy(y);let te=l[R];P.copy(te),P.sub(y.multiplyScalar(y.dot(te))).normalize(),T.crossVectors(H,te);let Se=T.dot(u[R])<0?-1:1;c[R*4]=P.x,c[R*4+1]=P.y,c[R*4+2]=P.z,c[R*4+3]=Se}for(let R=0,te=S.length;R<te;++R){let re=S[R],Se=re.start,N=re.count;for(let $=Se,oe=Se+N;$<oe;$+=3)E(n[$+0]),E(n[$+1]),E(n[$+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new Ft,ys=new Is,Aa=new ni,qh=new L,Qs=new L,$s=new L,er=new L,ac=new L,Ra=new L,Ca=new Ze,Pa=new Ze,La=new Ze,jh=new L,Yh=new L,Kh=new L,Ia=new L,Da=new L,dt=class extends mn{constructor(e=new en,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(ac.fromBufferAttribute(h,e),a?Ra.addScaledVector(ac,u):Ra.addScaledVector(ac.sub(t),u))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Aa.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Aa,qh)===null||ys.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Xh.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,P=x;S<P;S+=3){let T=o.getX(S),y=o.getX(S+1),H=o.getX(S+2);i=Ua(this,d,e,n,l,u,h,T,y,H),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);i=Ua(this,a,e,n,l,u,h,_,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,P=x;S<P;S+=3){let T=S,y=S+1,H=S+2;i=Ua(this,d,e,n,l,u,h,T,y,H),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=m,x=m+1,S=m+2;i=Ua(this,a,e,n,l,u,h,_,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Xd(s,e,t,n,i,r,a,o){let c;if(e.side===Pn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Si,o),c===null)return null;Da.copy(o),Da.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Da);return l<t.near||l>t.far?null:{distance:l,point:Da.clone(),object:s}}function Ua(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Qs),s.getVertexPosition(c,$s),s.getVertexPosition(l,er);let u=Xd(s,e,t,n,Qs,$s,er,Ia);if(u){i&&(Ca.fromBufferAttribute(i,o),Pa.fromBufferAttribute(i,c),La.fromBufferAttribute(i,l),u.uv=Ts.getInterpolation(Ia,Qs,$s,er,Ca,Pa,La,new Ze)),r&&(Ca.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,c),La.fromBufferAttribute(r,l),u.uv1=Ts.getInterpolation(Ia,Qs,$s,er,Ca,Pa,La,new Ze),u.uv2=u.uv1),a&&(jh.fromBufferAttribute(a,o),Yh.fromBufferAttribute(a,c),Kh.fromBufferAttribute(a,l),u.normal=Ts.getInterpolation(Ia,Qs,$s,er,jh,Yh,Kh,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new L,materialIndex:0};Ts.getNormal(Qs,$s,er,h.normal),u.face=h}return u}var bn=class s extends en{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(b,m,d,_,x,S,P,T,y,H,E){let R=S/y,te=P/H,re=S/2,Se=P/2,N=T/2,$=y+1,oe=H+1,he=0,ce=0,le=new L;for(let xe=0;xe<oe;xe++){let Te=xe*te-Se;for(let Ve=0;Ve<$;Ve++){let se=Ve*R-re;le[b]=se*_,le[m]=Te*x,le[d]=N,l.push(le.x,le.y,le.z),le[b]=0,le[m]=0,le[d]=T>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ve/y),h.push(1-xe/H),he+=1}}for(let xe=0;xe<H;xe++)for(let Te=0;Te<y;Te++){let Ve=f+Te+$*xe,se=f+Te+$*(xe+1),de=f+(Te+1)+$*(xe+1),Z=f+(Te+1)+$*xe;c.push(Ve,se,Z),c.push(se,de,Z),ce+=6}o.addGroup(p,ce,E),p+=ce,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gn(s){let e={};for(let t=0;t<s.length;t++){let n=vr(s[t]);for(let i in n)e[i]=n[i]}return e}function qd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ef(s){return s.getRenderTarget()===null?s.outputColorSpace:Yt.workingColorSpace}var hi={clone:vr,merge:Gn},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oo=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends oo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tr=-90,nr=1,Rc=class extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(tr,nr,e,t);i.layers=this.layers,this.add(i);let r=new cn(tr,nr,e,t);r.layers=this.layers,this.add(r);let a=new cn(tr,nr,e,t);a.layers=this.layers,this.add(a);let o=new cn(tr,nr,e,t);o.layers=this.layers,this.add(o);let c=new cn(tr,nr,e,t);c.layers=this.layers,this.add(c);let l=new cn(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},co=class extends Nn{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cc=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cs?Nt:ri),this.texture=new co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ei});r.uniforms.tEquirect.value=t;let a=new dt(i,r),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=Sn),new Rc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},oc=new L,Kd=new L,Jd=new Bt,Ni=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=oc.subVectors(n,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jd.getNormalMatrix(e),i=this.coplanarPoint(oc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new ni,Na=new L,ta=class{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,r=new Ni,a=new Ni){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],b=i[10],m=i[11],d=i[12],_=i[13],x=i[14],S=i[15];if(n[0].setComponents(c-r,f-l,m-p,S-d).normalize(),n[1].setComponents(c+r,f+l,m+p,S+d).normalize(),n[2].setComponents(c+a,f+u,m+g,S+_).normalize(),n[3].setComponents(c-a,f-u,m-g,S-_).normalize(),n[4].setComponents(c-o,f-h,m-b,S-x).normalize(),t===Oi)n[5].setComponents(c+o,f+h,m+b,S+x).normalize();else if(t===$a)n[5].setComponents(o,h,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zd(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,p=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,f),l.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,h){let f=u.array,p=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),p.count===-1&&g.length===0&&s.bufferSubData(h,0,f),g.length!==0){for(let b=0,m=g.length;b<m;b++){let d=g[b];t?s.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}var Kt=class s extends en{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],b=[],m=[];for(let d=0;d<u;d++){let _=d*f-a;for(let x=0;x<l;x++){let S=x*h-r;g.push(S,-_,0),b.push(0,0,1),m.push(x/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let x=_+l*d,S=_+l*(d+1),P=_+1+l*(d+1),T=_+1+l*d;p.push(x,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Qd,alphahash_pars_fragment:$d,alphamap_fragment:ep,alphamap_pars_fragment:tp,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:ap,batching_vertex:op,begin_vertex:cp,beginnormal_vertex:lp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:fp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:bp,color_pars_fragment:xp,color_pars_vertex:_p,color_vertex:vp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Sp,displacementmap_vertex:wp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,colorspace_fragment:Rp,colorspace_pars_fragment:Cp,envmap_fragment:Pp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Ip,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Np,fog_pars_vertex:Fp,fog_fragment:Op,fog_pars_fragment:Bp,gradientmap_pars_fragment:kp,lightmap_fragment:Hp,lightmap_pars_fragment:zp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:jp,lights_phong_fragment:Yp,lights_phong_pars_fragment:Kp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Qp,lights_fragment_maps:$p,lights_fragment_end:em,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:am,map_particle_fragment:om,map_particle_pars_fragment:cm,metalnessmap_fragment:lm,metalnessmap_pars_fragment:hm,morphcolor_vertex:um,morphnormal_vertex:fm,morphtarget_pars_vertex:dm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:bm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Sm,opaque_fragment:wm,packing:Tm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Um,shadowmap_vertex:Nm,shadowmask_pars_fragment:Fm,skinbase_vertex:Om,skinning_pars_vertex:Bm,skinning_vertex:km,skinnormal_vertex:Hm,specularmap_fragment:zm,specularmap_pars_fragment:Gm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:qm,uv_pars_fragment:jm,uv_pars_vertex:Ym,uv_vertex:Km,worldpos_vertex:Jm,background_vert:Zm,background_frag:Qm,backgroundCube_vert:$m,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ng,depth_vert:ig,depth_frag:sg,distanceRGBA_vert:rg,distanceRGBA_frag:ag,equirect_vert:og,equirect_frag:cg,linedashed_vert:lg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:fg,meshlambert_vert:dg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:bg,meshnormal_frag:xg,meshphong_vert:_g,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Eg,meshtoon_frag:Sg,points_vert:wg,points_frag:Tg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Pg},ke={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},yi={basic:{uniforms:Gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Gn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Gn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Gn([ke.points,ke.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Gn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Gn([ke.common,ke.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Gn([ke.sprite,ke.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Gn([ke.common,ke.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Gn([ke.lights,ke.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};yi.physical={uniforms:Gn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Fa={r:0,b:0,g:0};function Lg(s,e,t,n,i,r,a){let o=new Ne(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),_=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===To)?(u===void 0&&(u=new dt(new bn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:vr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(x.colorSpace)!==sn,(h!==x||f!==x.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new dt(new Kt(2,2),new gn({name:"BackgroundMaterial",uniforms:vr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(x.colorSpace)!==sn,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function b(m,d){m.getRGB(Fa,ef(s)),n.buffers.color.setClear(Fa.r,Fa.g,Fa.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function Ig(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,u=!1;function h(N,$,oe,he,ce){let le=!1;if(a){let xe=b(he,oe,$);l!==xe&&(l=xe,p(l.object)),le=d(N,he,oe,ce),le&&_(N,he,oe,ce)}else{let xe=$.wireframe===!0;(l.geometry!==he.id||l.program!==oe.id||l.wireframe!==xe)&&(l.geometry=he.id,l.program=oe.id,l.wireframe=xe,le=!0)}ce!==null&&t.update(ce,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,H(N,$,oe,he),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function b(N,$,oe){let he=oe.wireframe===!0,ce=o[N.id];ce===void 0&&(ce={},o[N.id]=ce);let le=ce[$.id];le===void 0&&(le={},ce[$.id]=le);let xe=le[he];return xe===void 0&&(xe=m(f()),le[he]=xe),xe}function m(N){let $=[],oe=[],he=[];for(let ce=0;ce<i;ce++)$[ce]=0,oe[ce]=0,he[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:oe,attributeDivisors:he,object:N,attributes:{},index:null}}function d(N,$,oe,he){let ce=l.attributes,le=$.attributes,xe=0,Te=oe.getAttributes();for(let Ve in Te)if(Te[Ve].location>=0){let de=ce[Ve],Z=le[Ve];if(Z===void 0&&(Ve==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),Ve==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),de===void 0||de.attribute!==Z||Z&&de.data!==Z.data)return!0;xe++}return l.attributesNum!==xe||l.index!==he}function _(N,$,oe,he){let ce={},le=$.attributes,xe=0,Te=oe.getAttributes();for(let Ve in Te)if(Te[Ve].location>=0){let de=le[Ve];de===void 0&&(Ve==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),Ve==="instanceColor"&&N.instanceColor&&(de=N.instanceColor));let Z={};Z.attribute=de,de&&de.data&&(Z.data=de.data),ce[Ve]=Z,xe++}l.attributes=ce,l.attributesNum=xe,l.index=he}function x(){let N=l.newAttributes;for(let $=0,oe=N.length;$<oe;$++)N[$]=0}function S(N){P(N,0)}function P(N,$){let oe=l.newAttributes,he=l.enabledAttributes,ce=l.attributeDivisors;oe[N]=1,he[N]===0&&(s.enableVertexAttribArray(N),he[N]=1),ce[N]!==$&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,$),ce[N]=$)}function T(){let N=l.newAttributes,$=l.enabledAttributes;for(let oe=0,he=$.length;oe<he;oe++)$[oe]!==N[oe]&&(s.disableVertexAttribArray(oe),$[oe]=0)}function y(N,$,oe,he,ce,le,xe){xe===!0?s.vertexAttribIPointer(N,$,oe,ce,le):s.vertexAttribPointer(N,$,oe,he,ce,le)}function H(N,$,oe,he){if(n.isWebGL2===!1&&(N.isInstancedMesh||he.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let ce=he.attributes,le=oe.getAttributes(),xe=$.defaultAttributeValues;for(let Te in le){let Ve=le[Te];if(Ve.location>=0){let se=ce[Te];if(se===void 0&&(Te==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),Te==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),se!==void 0){let de=se.normalized,Z=se.itemSize,Ee=t.get(se);if(Ee===void 0)continue;let it=Ee.buffer,Et=Ee.type,yt=Ee.bytesPerElement,Ce=n.isWebGL2===!0&&(Et===s.INT||Et===s.UNSIGNED_INT||se.gpuType===Gu);if(se.isInterleavedBufferAttribute){let He=se.data,V=He.stride,nn=se.offset;if(He.isInstancedInterleavedBuffer){for(let Qe=0;Qe<Ve.locationSize;Qe++)P(Ve.location+Qe,He.meshPerAttribute);N.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Qe=0;Qe<Ve.locationSize;Qe++)S(Ve.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,it);for(let Qe=0;Qe<Ve.locationSize;Qe++)y(Ve.location+Qe,Z/Ve.locationSize,Et,de,V*yt,(nn+Z/Ve.locationSize*Qe)*yt,Ce)}else{if(se.isInstancedBufferAttribute){for(let He=0;He<Ve.locationSize;He++)P(Ve.location+He,se.meshPerAttribute);N.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let He=0;He<Ve.locationSize;He++)S(Ve.location+He);s.bindBuffer(s.ARRAY_BUFFER,it);for(let He=0;He<Ve.locationSize;He++)y(Ve.location+He,Z/Ve.locationSize,Et,de,Z*yt,Z/Ve.locationSize*He*yt,Ce)}}else if(xe!==void 0){let de=xe[Te];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(Ve.location,de);break;case 3:s.vertexAttrib3fv(Ve.location,de);break;case 4:s.vertexAttrib4fv(Ve.location,de);break;default:s.vertexAttrib1fv(Ve.location,de)}}}}T()}function E(){re();for(let N in o){let $=o[N];for(let oe in $){let he=$[oe];for(let ce in he)g(he[ce].object),delete he[ce];delete $[oe]}delete o[N]}}function R(N){if(o[N.id]===void 0)return;let $=o[N.id];for(let oe in $){let he=$[oe];for(let ce in he)g(he[ce].object),delete he[ce];delete $[oe]}delete o[N.id]}function te(N){for(let $ in o){let oe=o[$];if(oe[N.id]===void 0)continue;let he=oe[N.id];for(let ce in he)g(he[ce].object),delete he[ce];delete oe[N.id]}}function re(){Se(),u=!0,l!==c&&(l=c,p(l.object))}function Se(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:re,resetDefaultState:Se,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:te,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function Dg(s,e,t,n){let i=n.isWebGL2,r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,f),t.update(h,r,f)}function l(u,h,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let b=0;b<f;b++)g+=h[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Ug(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=a||e.has("OES_texture_float"),P=x&&S,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:T}}function Ng(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ni,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let _=r?0:n,x=_*4,S=d.clippingState||null;c.value=S,S=u(g,f,x,p);for(let P=0;P!==x;++P)S[P]=t[P];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let b=h!==null?h.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let d=p+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==b;++x,S+=4)a.copy(h[x]).applyMatrix4(_,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Fg(s){let e=new WeakMap;function t(a,o){return o===yc?a.mapping=mr:o===Mc&&(a.mapping=gr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===yc||o===Mc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Cc(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var is=class extends oo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ur=4,Jh=[.125,.215,.35,.446,.526,.582],ws=20,cc=new is,Zh=new Ne,lc=null,hc=0,uc=0,Es=(1+Math.sqrt(5))/2,ir=1/Es,Qh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Es,ir),new L(0,Es,-ir),new L(ir,0,Es),new L(-ir,0,Es),new L(Es,ir,0),new L(-Es,ir,0)],lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,hc,uc),e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Wn,format:kn,colorSpace:wn,depthBuffer:!1},i=$h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Bg(r,e,t)}return i}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,i){let o=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zh),u.toneMapping=ts,u.autoClear=!1;let p=new ln({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new dt(new bn,p),b=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(Zh),b=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let x=this._cubeSize;Oa(i,_*x,d>2?x:0,x,x),u.setRenderTarget(i),b&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===mr||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Oa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Qh[(i-1)%Qh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ws-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);let d=[],_=0;for(let y=0;y<ws;++y){let H=y/b,E=Math.exp(-H*H/2);d.push(E),y===0?_+=E:y<m&&(_+=2*E)}for(let y=0;y<d.length;y++)d[y]=d[y]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let S=this._sizeLods[i],P=3*S*(i>x-ur?i-x+ur:0),T=4*(this._cubeSize-S);Oa(t,P,T,3*S,2*S),c.setRenderTarget(t),c.render(h,cc)}};function Og(s){let e=[],t=[],n=[],i=s,r=s-ur+1+Jh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ur?c=Jh[a-s+ur-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,b=3,m=2,d=1,_=new Float32Array(b*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let T=0;T<p;T++){let y=T%3*2/3-1,H=T>2?0:-1,E=[y,H,0,y+2/3,H,0,y+2/3,H+1,0,y,H,0,y+2/3,H+1,0,y,H+1,0];_.set(E,b*g*T),x.set(f,m*g*T);let R=[T,T,T,T,T,T];S.set(R,d*g*T)}let P=new en;P.setAttribute("position",new Qt(_,b)),P.setAttribute("uv",new Qt(x,m)),P.setAttribute("faceIndex",new Qt(S,d)),e.push(P),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $h(s,e,t){let n=new _n(s,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bg(s,e,t){let n=new Float32Array(ws),i=new L(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function eu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function tu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===yc||c===Mc,u=c===mr||c===gr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new lo(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new lo(s));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,e,t,n){let i={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let b=f.morphAttributes[g];for(let m=0,d=b.length;m<d;m++)e.remove(b[m])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let b=p[g];for(let m=0,d=b.length;m<d;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,g=h.attributes.position,b=0;if(p!==null){let _=p.array;b=p.version;for(let x=0,S=_.length;x<S;x+=3){let P=_[x+0],T=_[x+1],y=_[x+2];f.push(P,T,T,y,y,P)}}else if(g!==void 0){let _=g.array;b=g.version;for(let x=0,S=_.length/3-1;x<S;x+=3){let P=x+0,T=x+1,y=x+2;f.push(P,T,T,y,y,P)}}else return;let m=new(Qu(f)?ao:ro)(f,1);m.version=b;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Gg(s,e,t,n){let i=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){s.drawElements(r,g,o,p*c),t.update(g,r,1)}function h(p,g,b){if(b===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*c,b),t.update(g,r,b)}function f(p,g,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<b;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,b);let d=0;for(let _=0;_<b;_++)d+=g[_];t.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Vg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wg(s,e){return s[0]-e[0]}function Xg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function qg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new an,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,b=r.get(u);if(b===void 0||b.count!==g){let N=function(){re.dispose(),r.delete(u),u.removeEventListener("dispose",N)};b!==void 0&&b.texture.dispose();let _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],y=u.morphAttributes.color||[],H=0;_===!0&&(H=1),x===!0&&(H=2),S===!0&&(H=3);let E=u.attributes.position.count*H,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let te=new Float32Array(E*R*4*g),re=new io(te,E,R,g);re.type=Fi,re.needsUpdate=!0;let Se=H*4;for(let $=0;$<g;$++){let oe=P[$],he=T[$],ce=y[$],le=E*R*4*$;for(let xe=0;xe<oe.count;xe++){let Te=xe*Se;_===!0&&(a.fromBufferAttribute(oe,xe),te[le+Te+0]=a.x,te[le+Te+1]=a.y,te[le+Te+2]=a.z,te[le+Te+3]=0),x===!0&&(a.fromBufferAttribute(he,xe),te[le+Te+4]=a.x,te[le+Te+5]=a.y,te[le+Te+6]=a.z,te[le+Te+7]=0),S===!0&&(a.fromBufferAttribute(ce,xe),te[le+Te+8]=a.x,te[le+Te+9]=a.y,te[le+Te+10]=a.z,te[le+Te+11]=ce.itemSize===4?a.w:1)}}b={count:g,texture:re,size:new Ze(E,R)},r.set(u,b),u.addEventListener("dispose",N)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];let d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",d),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let p=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<p;x++){let S=g[x];S[0]=x,S[1]=f[x]}g.sort(Xg);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Wg);let b=u.morphAttributes.position,m=u.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let S=o[x],P=S[0],T=S[1];P!==Number.MAX_SAFE_INTEGER&&T?(b&&u.getAttribute("morphTarget"+x)!==b[P]&&u.setAttribute("morphTarget"+x,b[P]),m&&u.getAttribute("morphNormal"+x)!==m[P]&&u.setAttribute("morphNormal"+x,m[P]),i[x]=T,d+=T):(b&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let _=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function jg(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var ho=class extends Nn{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Rs,u!==Rs&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=Qi),n===void 0&&u===br&&(n=As),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nf=new Nn,sf=new ho(1,1);sf.compareFunction=Zu;var rf=new io,af=new Ac,of=new co,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),au=new Float32Array(4);function Ar(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=nu[i];if(r===void 0&&(r=new Float32Array(i),nu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function An(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Po(s,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2fv(this.addr,e),An(t,e)}}function Jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;s.uniform3fv(this.addr,e),An(t,e)}}function Zg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4fv(this.addr,e),An(t,e)}}function Qg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;au.set(n),s.uniformMatrix2fv(this.addr,!1,au),An(t,n)}}function $g(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;ru.set(n),s.uniformMatrix3fv(this.addr,!1,ru),An(t,n)}}function e0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;su.set(n),s.uniformMatrix4fv(this.addr,!1,su),An(t,n)}}function t0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2iv(this.addr,e),An(t,e)}}function i0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3iv(this.addr,e),An(t,e)}}function s0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4iv(this.addr,e),An(t,e)}}function r0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2uiv(this.addr,e),An(t,e)}}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3uiv(this.addr,e),An(t,e)}}function c0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4uiv(this.addr,e),An(t,e)}}function l0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?sf:nf;t.setTexture2D(e||r,i)}function h0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||af,i)}function u0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||of,i)}function f0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rf,i)}function d0(s){switch(s){case 5126:return Yg;case 35664:return Kg;case 35665:return Jg;case 35666:return Zg;case 35674:return Qg;case 35675:return $g;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return f0}}function p0(s,e){s.uniform1fv(this.addr,e)}function m0(s,e){let t=Ar(e,this.size,2);s.uniform2fv(this.addr,t)}function g0(s,e){let t=Ar(e,this.size,3);s.uniform3fv(this.addr,t)}function b0(s,e){let t=Ar(e,this.size,4);s.uniform4fv(this.addr,t)}function x0(s,e){let t=Ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _0(s,e){let t=Ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function v0(s,e){let t=Ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y0(s,e){s.uniform1iv(this.addr,e)}function M0(s,e){s.uniform2iv(this.addr,e)}function E0(s,e){s.uniform3iv(this.addr,e)}function S0(s,e){s.uniform4iv(this.addr,e)}function w0(s,e){s.uniform1uiv(this.addr,e)}function T0(s,e){s.uniform2uiv(this.addr,e)}function A0(s,e){s.uniform3uiv(this.addr,e)}function R0(s,e){s.uniform4uiv(this.addr,e)}function C0(s,e,t){let n=this.cache,i=e.length,r=Po(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||nf,r[a])}function P0(s,e,t){let n=this.cache,i=e.length,r=Po(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||af,r[a])}function L0(s,e,t){let n=this.cache,i=e.length,r=Po(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||of,r[a])}function I0(s,e,t){let n=this.cache,i=e.length,r=Po(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||rf,r[a])}function D0(s){switch(s){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return b0;case 35674:return x0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return y0;case 35667:case 35671:return M0;case 35668:case 35672:return E0;case 35669:case 35673:return S0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return I0}}var Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d0(t.type)}},Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D0(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function ou(s,e){s.seq.push(e),s.map[e.id]=e}function U0(s,e,t){let n=s.name,i=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ou(t,l===void 0?new Pc(o,s,e):new Lc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Ic(o),ou(t,h)),t=h}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);U0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function cu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var N0=37297,F0=0;function O0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function B0(s){let e=Yt.getPrimaries(Yt.workingColorSpace),t=Yt.getPrimaries(s),n;switch(e===t?n="":e===Qa&&t===Za?n="LinearDisplayP3ToLinearSRGB":e===Za&&t===Qa&&(n="LinearSRGBToLinearDisplayP3"),s){case wn:case Co:return[n,"LinearTransferOETF"];case Nt:case fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function lu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+O0(s.getShaderSource(e),a)}else return i}function k0(s,e){let t=B0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function H0(s,e){let t;switch(e){case il:t="Linear";break;case sl:t="Reinhard";break;case rl:t="OptimizedCineon";break;case Xi:t="ACESFilmic";break;case al:t="AgX";break;case Kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function G0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fr).join(`
`)}function V0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function fr(s){return s!==""}function hu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(s){return s.replace(X0,j0)}var q0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function j0(s,e){let t=Dt[e];if(t===void 0){let n=q0.get(e);if(n!==void 0)t=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}var Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(s){return s.replace(Y0,K0)}function K0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function du(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===aa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Yf:e="ENVMAP_BLENDING_ADD";break}return e}function eb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=J0(t),l=Z0(t),u=Q0(t),h=$0(t),f=eb(t),p=t.isWebGL2?"":z0(t),g=G0(t),b=V0(r),m=i.createProgram(),d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(fr).join(`
`),d.length>0&&(d+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(fr).join(`
`),_.length>0&&(_+=`
`)):(d=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),_=[p,du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?Dt.tonemapping_pars_fragment:"",t.toneMapping!==ts?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Dc(a),a=hu(a,t),a=uu(a,t),o=Dc(o),o=hu(o,t),o=uu(o,t),a=fu(a),o=fu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=x+d+a,P=x+_+o,T=cu(i,i.VERTEX_SHADER,S),y=cu(i,i.FRAGMENT_SHADER,P);i.attachShader(m,T),i.attachShader(m,y),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function H(re){if(s.debug.checkShaderErrors){let Se=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(T).trim(),$=i.getShaderInfoLog(y).trim(),oe=!0,he=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,y);else{let ce=lu(i,T,"vertex"),le=lu(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Se+`
`+ce+`
`+le)}else Se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Se):(N===""||$==="")&&(he=!1);he&&(re.diagnostics={runnable:oe,programLog:Se,vertexShader:{log:N,prefix:d},fragmentShader:{log:$,prefix:_}})}i.deleteShader(T),i.deleteShader(y),E=new pr(i,m),R=W0(i,m)}let E;this.getUniforms=function(){return E===void 0&&H(this),E};let R;this.getAttributes=function(){return R===void 0&&H(this),R};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=i.getProgramParameter(m,N0)),te},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=y,this}var nb=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nc(e),t.set(e,n)),n}},Nc=class{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}};function ib(s,e,t,n,i,r,a){let o=new ea,c=new Uc,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return E===0?"uv":`uv${E}`}function m(E,R,te,re,Se){let N=re.fog,$=Se.geometry,oe=E.isMeshStandardMaterial?re.environment:null,he=(E.isMeshStandardMaterial?t:e).get(E.envMap||oe),ce=he&&he.mapping===To?he.image.height:null,le=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Te=xe!==void 0?xe.length:0,Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let se,de,Z,Ee;if(le){let ne=yi[le];se=ne.vertexShader,de=ne.fragmentShader}else se=E.vertexShader,de=E.fragmentShader,c.update(E),Z=c.getVertexShaderID(E),Ee=c.getFragmentShaderID(E);let it=s.getRenderTarget(),Et=Se.isInstancedMesh===!0,yt=Se.isBatchedMesh===!0,Ce=!!E.map,He=!!E.matcap,V=!!he,nn=!!E.aoMap,Qe=!!E.lightMap,ot=!!E.bumpMap,Ke=!!E.normalMap,pt=!!E.displacementMap,I=!!E.emissiveMap,w=!!E.metalnessMap,v=!!E.roughnessMap,K=E.anisotropy>0,fe=E.clearcoat>0,ge=E.iridescence>0,_e=E.sheen>0,Le=E.transmission>0,we=K&&!!E.anisotropyMap,je=fe&&!!E.clearcoatMap,st=fe&&!!E.clearcoatNormalMap,wt=fe&&!!E.clearcoatRoughnessMap,ve=ge&&!!E.iridescenceMap,Ot=ge&&!!E.iridescenceThicknessMap,Ct=_e&&!!E.sheenColorMap,vt=_e&&!!E.sheenRoughnessMap,rt=!!E.specularMap,Ye=!!E.specularColorMap,mt=!!E.specularIntensityMap,Ut=Le&&!!E.transmissionMap,Ht=Le&&!!E.thicknessMap,St=!!E.gradientMap,Pe=!!E.alphaMap,D=E.alphaTest>0,Fe=!!E.alphaHash,Ie=!!E.extensions,ht=!!$.attributes.uv1,ut=!!$.attributes.uv2,zt=!!$.attributes.uv3,jt=ts;return E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:u,shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:de,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:yt,instancing:Et,instancingColor:Et&&Se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:wn,map:Ce,matcap:He,envMap:V,envMapMode:V&&he.mapping,envMapCubeUVHeight:ce,aoMap:nn,lightMap:Qe,bumpMap:ot,normalMap:Ke,displacementMap:f&&pt,emissiveMap:I,normalMapObjectSpace:Ke&&E.normalMapType===ld,normalMapTangentSpace:Ke&&E.normalMapType===ul,metalnessMap:w,roughnessMap:v,anisotropy:K,anisotropyMap:we,clearcoat:fe,clearcoatMap:je,clearcoatNormalMap:st,clearcoatRoughnessMap:wt,iridescence:ge,iridescenceMap:ve,iridescenceThicknessMap:Ot,sheen:_e,sheenColorMap:Ct,sheenRoughnessMap:vt,specularMap:rt,specularColorMap:Ye,specularIntensityMap:mt,transmission:Le,transmissionMap:Ut,thicknessMap:Ht,gradientMap:St,opaque:E.transparent===!1&&E.blending===es,alphaMap:Pe,alphaTest:D,alphaHash:Fe,combine:E.combine,mapUv:Ce&&b(E.map.channel),aoMapUv:nn&&b(E.aoMap.channel),lightMapUv:Qe&&b(E.lightMap.channel),bumpMapUv:ot&&b(E.bumpMap.channel),normalMapUv:Ke&&b(E.normalMap.channel),displacementMapUv:pt&&b(E.displacementMap.channel),emissiveMapUv:I&&b(E.emissiveMap.channel),metalnessMapUv:w&&b(E.metalnessMap.channel),roughnessMapUv:v&&b(E.roughnessMap.channel),anisotropyMapUv:we&&b(E.anisotropyMap.channel),clearcoatMapUv:je&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&b(E.sheenRoughnessMap.channel),specularMapUv:rt&&b(E.specularMap.channel),specularColorMapUv:Ye&&b(E.specularColorMap.channel),specularIntensityMapUv:mt&&b(E.specularIntensityMap.channel),transmissionMapUv:Ut&&b(E.transmissionMap.channel),thicknessMapUv:Ht&&b(E.thicknessMap.channel),alphaMapUv:Pe&&b(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ke||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:ht,vertexUv2s:ut,vertexUv3s:zt,pointsUvs:Se.isPoints===!0&&!!$.attributes.uv&&(Ce||Pe),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Se.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&te.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===sn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ie&&E.extensions.derivatives===!0,extensionFragDepth:Ie&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let te in E.defines)R.push(te),R.push(E.defines[te]);return E.isRawShaderMaterial===!1&&(_(R,E),x(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function _(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function x(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){let R=g[E.type],te;if(R){let re=yi[R];te=hi.clone(re.uniforms)}else te=E.uniforms;return te}function P(E,R){let te;for(let re=0,Se=l.length;re<Se;re++){let N=l[re];if(N.cacheKey===R){te=N,++te.usedTimes;break}}return te===void 0&&(te=new tb(s,R,E,r),l.push(te)),te}function T(E){if(--E.usedTimes===0){let R=l.indexOf(E);l[R]=l[l.length-1],l.pop(),E.destroy()}}function y(E){c.remove(E)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:y,programs:l,dispose:H}}function sb(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,b,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=b,d.group=m),e++,d}function o(h,f,p,g,b,m){let d=a(h,f,p,g,b,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(h,f,p,g,b,m){let d=a(h,f,p,g,b,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||rb),n.length>1&&n.sort(f||pu),i.length>1&&i.sort(f||pu)}function u(){for(let h=e,f=s.length;h<f;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function ab(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new mu,s.set(n,[a])):i>=r.length?(a=new mu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ob(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function cb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var lb=0;function hb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ub(s,e){let t=new ob,n=cb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);let r=new L,a=new Ft,o=new Ft;function c(u,h){let f=0,p=0,g=0;for(let re=0;re<9;re++)i.probe[re].set(0,0,0);let b=0,m=0,d=0,_=0,x=0,S=0,P=0,T=0,y=0,H=0,E=0;u.sort(hb);let R=h===!0?Math.PI:1;for(let re=0,Se=u.length;re<Se;re++){let N=u[re],$=N.color,oe=N.intensity,he=N.distance,ce=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=$.r*oe*R,p+=$.g*oe*R,g+=$.b*oe*R;else if(N.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(N.sh.coefficients[le],oe);E++}else if(N.isDirectionalLight){let le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*R),N.castShadow){let xe=N.shadow,Te=n.get(N);Te.shadowBias=xe.bias,Te.shadowNormalBias=xe.normalBias,Te.shadowRadius=xe.radius,Te.shadowMapSize=xe.mapSize,i.directionalShadow[b]=Te,i.directionalShadowMap[b]=ce,i.directionalShadowMatrix[b]=N.shadow.matrix,S++}i.directional[b]=le,b++}else if(N.isSpotLight){let le=t.get(N);le.position.setFromMatrixPosition(N.matrixWorld),le.color.copy($).multiplyScalar(oe*R),le.distance=he,le.coneCos=Math.cos(N.angle),le.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),le.decay=N.decay,i.spot[d]=le;let xe=N.shadow;if(N.map&&(i.spotLightMap[y]=N.map,y++,xe.updateMatrices(N),N.castShadow&&H++),i.spotLightMatrix[d]=xe.matrix,N.castShadow){let Te=n.get(N);Te.shadowBias=xe.bias,Te.shadowNormalBias=xe.normalBias,Te.shadowRadius=xe.radius,Te.shadowMapSize=xe.mapSize,i.spotShadow[d]=Te,i.spotShadowMap[d]=ce,T++}d++}else if(N.isRectAreaLight){let le=t.get(N);le.color.copy($).multiplyScalar(oe),le.halfWidth.set(N.width*.5,0,0),le.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=le,_++}else if(N.isPointLight){let le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*R),le.distance=N.distance,le.decay=N.decay,N.castShadow){let xe=N.shadow,Te=n.get(N);Te.shadowBias=xe.bias,Te.shadowNormalBias=xe.normalBias,Te.shadowRadius=xe.radius,Te.shadowMapSize=xe.mapSize,Te.shadowCameraNear=xe.camera.near,Te.shadowCameraFar=xe.camera.far,i.pointShadow[m]=Te,i.pointShadowMap[m]=ce,i.pointShadowMatrix[m]=N.shadow.matrix,P++}i.point[m]=le,m++}else if(N.isHemisphereLight){let le=t.get(N);le.skyColor.copy(N.color).multiplyScalar(oe*R),le.groundColor.copy(N.groundColor).multiplyScalar(oe*R),i.hemi[x]=le,x++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;let te=i.hash;(te.directionalLength!==b||te.pointLength!==m||te.spotLength!==d||te.rectAreaLength!==_||te.hemiLength!==x||te.numDirectionalShadows!==S||te.numPointShadows!==P||te.numSpotShadows!==T||te.numSpotMaps!==y||te.numLightProbes!==E)&&(i.directional.length=b,i.spot.length=d,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=T+y-H,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=E,te.directionalLength=b,te.pointLength=m,te.spotLength=d,te.rectAreaLength=_,te.hemiLength=x,te.numDirectionalShadows=S,te.numPointShadows=P,te.numSpotShadows=T,te.numSpotMaps=y,te.numLightProbes=E,i.version=lb++)}function l(u,h){let f=0,p=0,g=0,b=0,m=0,d=h.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){let S=u[_];if(S.isDirectionalLight){let P=i.directional[f];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(S.isSpotLight){let P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let P=i.rectArea[b];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),b++}else if(S.isPointLight){let P=i.point[p];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let P=i.hemi[m];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function gu(s,e){let t=new ub(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function fb(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new gu(s,e),t.set(r,[c])):a>=o.length?(c=new gu(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Fc=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mb(s,e,t){let n=new ta,i=new Ze,r=new Ze,a=new an,o=new Fc({depthPacking:cd}),c=new Oc,l={},u=t.maxTextureSize,h={[Si]:Pn,[Pn]:Si,[dn]:dn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:db,fragmentShader:pb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let d=this.type;this.render=function(T,y,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=s.getRenderTarget(),R=s.getActiveCubeFace(),te=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Ei),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);let Se=d!==Ui&&this.type===Ui,N=d===Ui&&this.type!==Ui;for(let $=0,oe=T.length;$<oe;$++){let he=T[$],ce=he.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;i.copy(ce.mapSize);let le=ce.getFrameExtents();if(i.multiply(le),r.copy(ce.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/le.x),i.x=r.x*le.x,ce.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/le.y),i.y=r.y*le.y,ce.mapSize.y=r.y)),ce.map===null||Se===!0||N===!0){let Te=this.type!==Ui?{minFilter:En,magFilter:En}:{};ce.map!==null&&ce.map.dispose(),ce.map=new _n(i.x,i.y,Te),ce.map.texture.name=he.name+".shadowMap",ce.camera.updateProjectionMatrix()}s.setRenderTarget(ce.map),s.clear();let xe=ce.getViewportCount();for(let Te=0;Te<xe;Te++){let Ve=ce.getViewport(Te);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),re.viewport(a),ce.updateMatrices(he,Te),n=ce.getFrustum(),S(y,H,ce.camera,he,this.type)}ce.isPointLightShadow!==!0&&this.type===Ui&&_(ce,H),ce.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(E,R,te)};function _(T,y){let H=e.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(y,null,H,f,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(y,null,H,p,b,null)}function x(T,y,H,E){let R=null,te=H.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(te!==void 0)R=te;else if(R=H.isPointLight===!0?c:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let re=R.uuid,Se=y.uuid,N=l[re];N===void 0&&(N={},l[re]=N);let $=N[Se];$===void 0&&($=R.clone(),N[Se]=$,y.addEventListener("dispose",P)),R=$}if(R.visible=y.visible,R.wireframe=y.wireframe,E===Ui?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:h[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let re=s.properties.get(R);re.light=H}return R}function S(T,y,H,E,R){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld);let Se=e.update(T),N=T.material;if(Array.isArray(N)){let $=Se.groups;for(let oe=0,he=$.length;oe<he;oe++){let ce=$[oe],le=N[ce.materialIndex];if(le&&le.visible){let xe=x(T,le,E,R);T.onBeforeShadow(s,T,y,H,Se,xe,ce),s.renderBufferDirect(H,null,Se,xe,T,ce),T.onAfterShadow(s,T,y,H,Se,xe,ce)}}}else if(N.visible){let $=x(T,N,E,R);T.onBeforeShadow(s,T,y,H,Se,$,null),s.renderBufferDirect(H,null,Se,$,T,null),T.onAfterShadow(s,T,y,H,Se,$,null)}}let re=T.children;for(let Se=0,N=re.length;Se<N;Se++)S(re[Se],y,H,E,R)}function P(T){T.target.removeEventListener("dispose",P);for(let H in l){let E=l[H],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function gb(s,e,t){let n=t.isWebGL2;function i(){let D=!1,Fe=new an,Ie=null,ht=new an(0,0,0,0);return{setMask:function(ut){Ie!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),Ie=ut)},setLocked:function(ut){D=ut},setClear:function(ut,zt,jt,W,ne){ne===!0&&(ut*=W,zt*=W,jt*=W),Fe.set(ut,zt,jt,W),ht.equals(Fe)===!1&&(s.clearColor(ut,zt,jt,W),ht.copy(Fe))},reset:function(){D=!1,Ie=null,ht.set(-1,0,0,0)}}}function r(){let D=!1,Fe=null,Ie=null,ht=null;return{setTest:function(ut){ut?yt(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(ut){Fe!==ut&&!D&&(s.depthMask(ut),Fe=ut)},setFunc:function(ut){if(Ie!==ut){switch(ut){case Hf:s.depthFunc(s.NEVER);break;case zf:s.depthFunc(s.ALWAYS);break;case Gf:s.depthFunc(s.LESS);break;case ja:s.depthFunc(s.LEQUAL);break;case Vf:s.depthFunc(s.EQUAL);break;case Wf:s.depthFunc(s.GEQUAL);break;case Xf:s.depthFunc(s.GREATER);break;case qf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ht!==ut&&(s.clearDepth(ut),ht=ut)},reset:function(){D=!1,Fe=null,Ie=null,ht=null}}}function a(){let D=!1,Fe=null,Ie=null,ht=null,ut=null,zt=null,jt=null,W=null,ne=null;return{setTest:function(ie){D||(ie?yt(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(ie){Fe!==ie&&!D&&(s.stencilMask(ie),Fe=ie)},setFunc:function(ie,X,pe){(Ie!==ie||ht!==X||ut!==pe)&&(s.stencilFunc(ie,X,pe),Ie=ie,ht=X,ut=pe)},setOp:function(ie,X,pe){(zt!==ie||jt!==X||W!==pe)&&(s.stencilOp(ie,X,pe),zt=ie,jt=X,W=pe)},setLocked:function(ie){D=ie},setClear:function(ie){ne!==ie&&(s.clearStencil(ie),ne=ie)},reset:function(){D=!1,Fe=null,Ie=null,ht=null,ut=null,zt=null,jt=null,W=null,ne=null}}}let o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap,f={},p={},g=new WeakMap,b=[],m=null,d=!1,_=null,x=null,S=null,P=null,T=null,y=null,H=null,E=new Ne(0,0,0),R=0,te=!1,re=null,Se=null,N=null,$=null,oe=null,he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ce=!1,le=0,xe=s.getParameter(s.VERSION);xe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(xe)[1]),ce=le>=1):xe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),ce=le>=2);let Te=null,Ve={},se=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Z=new an().fromArray(se),Ee=new an().fromArray(de);function it(D,Fe,Ie,ht){let ut=new Uint8Array(4),zt=s.createTexture();s.bindTexture(D,zt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<Ie;jt++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(Fe,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(Fe+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return zt}let Et={};Et[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),yt(s.DEPTH_TEST),c.setFunc(ja),I(!1),w(eh),yt(s.CULL_FACE),Ke(Ei);function yt(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function Ce(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function He(D,Fe){return p[D]!==Fe?(s.bindFramebuffer(D,Fe),p[D]=Fe,n&&(D===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Fe),D===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Fe)),!0):!1}function V(D,Fe){let Ie=b,ht=!1;if(D)if(Ie=g.get(Fe),Ie===void 0&&(Ie=[],g.set(Fe,Ie)),D.isWebGLMultipleRenderTargets){let ut=D.texture;if(Ie.length!==ut.length||Ie[0]!==s.COLOR_ATTACHMENT0){for(let zt=0,jt=ut.length;zt<jt;zt++)Ie[zt]=s.COLOR_ATTACHMENT0+zt;Ie.length=ut.length,ht=!0}}else Ie[0]!==s.COLOR_ATTACHMENT0&&(Ie[0]=s.COLOR_ATTACHMENT0,ht=!0);else Ie[0]!==s.BACK&&(Ie[0]=s.BACK,ht=!0);ht&&(t.isWebGL2?s.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function nn(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let Qe={[Ss]:s.FUNC_ADD,[wf]:s.FUNC_SUBTRACT,[Tf]:s.FUNC_REVERSE_SUBTRACT};if(n)Qe[ih]=s.MIN,Qe[sh]=s.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(Qe[ih]=D.MIN_EXT,Qe[sh]=D.MAX_EXT)}let ot={[Af]:s.ZERO,[Rf]:s.ONE,[Cf]:s.SRC_COLOR,[_c]:s.SRC_ALPHA,[Nf]:s.SRC_ALPHA_SATURATE,[Df]:s.DST_COLOR,[Lf]:s.DST_ALPHA,[Pf]:s.ONE_MINUS_SRC_COLOR,[vc]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[If]:s.ONE_MINUS_DST_ALPHA,[Ff]:s.CONSTANT_COLOR,[Of]:s.ONE_MINUS_CONSTANT_COLOR,[Bf]:s.CONSTANT_ALPHA,[kf]:s.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,Fe,Ie,ht,ut,zt,jt,W,ne,ie){if(D===Ei){d===!0&&(Ce(s.BLEND),d=!1);return}if(d===!1&&(yt(s.BLEND),d=!0),D!==Sf){if(D!==_||ie!==te){if((x!==Ss||T!==Ss)&&(s.blendEquation(s.FUNC_ADD),x=Ss,T=Ss),ie)switch(D){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ln:s.blendFunc(s.ONE,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ln:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,P=null,y=null,H=null,E.set(0,0,0),R=0,_=D,te=ie}return}ut=ut||Fe,zt=zt||Ie,jt=jt||ht,(Fe!==x||ut!==T)&&(s.blendEquationSeparate(Qe[Fe],Qe[ut]),x=Fe,T=ut),(Ie!==S||ht!==P||zt!==y||jt!==H)&&(s.blendFuncSeparate(ot[Ie],ot[ht],ot[zt],ot[jt]),S=Ie,P=ht,y=zt,H=jt),(W.equals(E)===!1||ne!==R)&&(s.blendColor(W.r,W.g,W.b,ne),E.copy(W),R=ne),_=D,te=!1}function pt(D,Fe){D.side===dn?Ce(s.CULL_FACE):yt(s.CULL_FACE);let Ie=D.side===Pn;Fe&&(Ie=!Ie),I(Ie),D.blending===es&&D.transparent===!1?Ke(Ei):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let ht=D.stencilWrite;l.setTest(ht),ht&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function I(D){re!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),re=D)}function w(D){D!==Mf?(yt(s.CULL_FACE),D!==Se&&(D===eh?s.cullFace(s.BACK):D===Ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),Se=D}function v(D){D!==N&&(ce&&s.lineWidth(D),N=D)}function K(D,Fe,Ie){D?(yt(s.POLYGON_OFFSET_FILL),($!==Fe||oe!==Ie)&&(s.polygonOffset(Fe,Ie),$=Fe,oe=Ie)):Ce(s.POLYGON_OFFSET_FILL)}function fe(D){D?yt(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function ge(D){D===void 0&&(D=s.TEXTURE0+he-1),Te!==D&&(s.activeTexture(D),Te=D)}function _e(D,Fe,Ie){Ie===void 0&&(Te===null?Ie=s.TEXTURE0+he-1:Ie=Te);let ht=Ve[Ie];ht===void 0&&(ht={type:void 0,texture:void 0},Ve[Ie]=ht),(ht.type!==D||ht.texture!==Fe)&&(Te!==Ie&&(s.activeTexture(Ie),Te=Ie),s.bindTexture(D,Fe||Et[D]),ht.type=D,ht.texture=Fe)}function Le(){let D=Ve[Te];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function we(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(D){Z.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function Ut(D){Ee.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function Ht(D,Fe){let Ie=h.get(Fe);Ie===void 0&&(Ie=new WeakMap,h.set(Fe,Ie));let ht=Ie.get(D);ht===void 0&&(ht=s.getUniformBlockIndex(Fe,D.name),Ie.set(D,ht))}function St(D,Fe){let ht=h.get(Fe).get(D);u.get(Fe)!==ht&&(s.uniformBlockBinding(Fe,ht,D.__bindingPointIndex),u.set(Fe,ht))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Te=null,Ve={},p={},g=new WeakMap,b=[],m=null,d=!1,_=null,x=null,S=null,P=null,T=null,y=null,H=null,E=new Ne(0,0,0),R=0,te=!1,re=null,Se=null,N=null,$=null,oe=null,Z.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:yt,disable:Ce,bindFramebuffer:He,drawBuffers:V,useProgram:nn,setBlending:Ke,setMaterial:pt,setFlipSided:I,setCullFace:w,setLineWidth:v,setPolygonOffset:K,setScissorTest:fe,activeTexture:ge,bindTexture:_e,unbindTexture:Le,compressedTexImage2D:we,compressedTexImage3D:je,texImage2D:rt,texImage3D:Ye,updateUBOMapping:Ht,uniformBlockBinding:St,texStorage2D:Ct,texStorage3D:vt,texSubImage2D:st,texSubImage3D:wt,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ot,scissor:mt,viewport:Ut,reset:Pe}}function bb(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):$r("canvas")}function b(w,v,K,fe){let ge=1;if((w.width>fe||w.height>fe)&&(ge=fe/Math.max(w.width,w.height)),ge<1||v===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let _e=v?eo:Math.floor,Le=_e(ge*w.width),we=_e(ge*w.height);h===void 0&&(h=g(Le,we));let je=K?g(Le,we):h;return je.width=Le,je.height=we,je.getContext("2d").drawImage(w,0,0,Le,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Le+"x"+we+")."),je}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return wc(w.width)&&wc(w.height)}function d(w){return o?!1:w.wrapS!==ti||w.wrapT!==ti||w.minFilter!==En&&w.minFilter!==Sn}function _(w,v){return w.generateMipmaps&&v&&w.minFilter!==En&&w.minFilter!==Sn}function x(w){s.generateMipmap(w)}function S(w,v,K,fe,ge=!1){if(o===!1)return v;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _e=v;if(v===s.RED&&(K===s.FLOAT&&(_e=s.R32F),K===s.HALF_FLOAT&&(_e=s.R16F),K===s.UNSIGNED_BYTE&&(_e=s.R8)),v===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(_e=s.R8UI),K===s.UNSIGNED_SHORT&&(_e=s.R16UI),K===s.UNSIGNED_INT&&(_e=s.R32UI),K===s.BYTE&&(_e=s.R8I),K===s.SHORT&&(_e=s.R16I),K===s.INT&&(_e=s.R32I)),v===s.RG&&(K===s.FLOAT&&(_e=s.RG32F),K===s.HALF_FLOAT&&(_e=s.RG16F),K===s.UNSIGNED_BYTE&&(_e=s.RG8)),v===s.RGBA){let Le=ge?Ja:Yt.getTransfer(fe);K===s.FLOAT&&(_e=s.RGBA32F),K===s.HALF_FLOAT&&(_e=s.RGBA16F),K===s.UNSIGNED_BYTE&&(_e=Le===sn?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function P(w,v,K){return _(w,K)===!0||w.isFramebufferTexture&&w.minFilter!==En&&w.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){return w===En||w===Ya||w===Yr?s.NEAREST:s.LINEAR}function y(w){let v=w.target;v.removeEventListener("dispose",y),E(v),v.isVideoTexture&&u.delete(v)}function H(w){let v=w.target;v.removeEventListener("dispose",H),te(v)}function E(w){let v=n.get(w);if(v.__webglInit===void 0)return;let K=w.source,fe=f.get(K);if(fe){let ge=fe[v.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&R(w),Object.keys(fe).length===0&&f.delete(K)}n.remove(w)}function R(w){let v=n.get(w);s.deleteTexture(v.__webglTexture);let K=w.source,fe=f.get(K);delete fe[v.__cacheKey],a.memory.textures--}function te(w){let v=w.texture,K=n.get(w),fe=n.get(v);if(fe.__webglTexture!==void 0&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(K.__webglFramebuffer[ge]))for(let _e=0;_e<K.__webglFramebuffer[ge].length;_e++)s.deleteFramebuffer(K.__webglFramebuffer[ge][_e]);else s.deleteFramebuffer(K.__webglFramebuffer[ge]);K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[ge])}else{if(Array.isArray(K.__webglFramebuffer))for(let ge=0;ge<K.__webglFramebuffer.length;ge++)s.deleteFramebuffer(K.__webglFramebuffer[ge]);else s.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ge=0;ge<K.__webglColorRenderbuffer.length;ge++)K.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[ge]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ge=0,_e=v.length;ge<_e;ge++){let Le=n.get(v[ge]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(v[ge])}n.remove(v),n.remove(w)}let re=0;function Se(){re=0}function N(){let w=re;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),re+=1,w}function $(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function oe(w,v){let K=n.get(w);if(w.isVideoTexture&&pt(w),w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){let fe=w.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,w,v);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+v)}function he(w,v){let K=n.get(w);if(w.version>0&&K.__version!==w.version){Z(K,w,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+v)}function ce(w,v){let K=n.get(w);if(w.version>0&&K.__version!==w.version){Z(K,w,v);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+v)}function le(w,v){let K=n.get(w);if(w.version>0&&K.__version!==w.version){Ee(K,w,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+v)}let xe={[Vn]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[Ps]:s.MIRRORED_REPEAT},Te={[En]:s.NEAREST,[Ya]:s.NEAREST_MIPMAP_NEAREST,[Yr]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[ol]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},Ve={[hd]:s.NEVER,[gd]:s.ALWAYS,[ud]:s.LESS,[Zu]:s.LEQUAL,[fd]:s.EQUAL,[md]:s.GEQUAL,[dd]:s.GREATER,[pd]:s.NOTEQUAL};function se(w,v,K){if(K?(s.texParameteri(w,s.TEXTURE_WRAP_S,xe[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,xe[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,xe[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Te[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Te[v.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==ti||v.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,T(v.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==En&&v.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===En||v.minFilter!==Yr&&v.minFilter!==ns||v.type===Fi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Wn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(w,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function de(w,v){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",y));let fe=v.source,ge=f.get(fe);ge===void 0&&(ge={},f.set(fe,ge));let _e=$(v);if(_e!==w.__cacheKey){ge[_e]===void 0&&(ge[_e]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ge[_e].usedTimes++;let Le=ge[w.__cacheKey];Le!==void 0&&(ge[w.__cacheKey].usedTimes--,Le.usedTimes===0&&R(v)),w.__cacheKey=_e,w.__webglTexture=ge[_e].texture}return K}function Z(w,v,K){let fe=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(fe=s.TEXTURE_3D);let ge=de(w,v),_e=v.source;t.bindTexture(fe,w.__webglTexture,s.TEXTURE0+K);let Le=n.get(_e);if(_e.version!==Le.__version||ge===!0){t.activeTexture(s.TEXTURE0+K);let we=Yt.getPrimaries(Yt.workingColorSpace),je=v.colorSpace===ri?null:Yt.getPrimaries(v.colorSpace),st=v.colorSpace===ri||we===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let wt=d(v)&&m(v.image)===!1,ve=b(v.image,wt,!1,i.maxTextureSize);ve=I(v,ve);let Ot=m(ve)||o,Ct=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),rt=S(v.internalFormat,Ct,vt,v.colorSpace,v.isVideoTexture);se(fe,v,Ot);let Ye,mt=v.mipmaps,Ut=o&&v.isVideoTexture!==!0&&rt!==Yu,Ht=Le.__version===void 0||ge===!0,St=P(v,ve,Ot);if(v.isDepthTexture)rt=s.DEPTH_COMPONENT,o?v.type===Fi?rt=s.DEPTH_COMPONENT32F:v.type===Qi?rt=s.DEPTH_COMPONENT24:v.type===As?rt=s.DEPTH24_STENCIL8:rt=s.DEPTH_COMPONENT16:v.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Rs&&rt===s.DEPTH_COMPONENT&&v.type!==cl&&v.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Qi,vt=r.convert(v.type)),v.format===br&&rt===s.DEPTH_COMPONENT&&(rt=s.DEPTH_STENCIL,v.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=As,vt=r.convert(v.type))),Ht&&(Ut?t.texStorage2D(s.TEXTURE_2D,1,rt,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,rt,ve.width,ve.height,0,Ct,vt,null));else if(v.isDataTexture)if(mt.length>0&&Ot){Ut&&Ht&&t.texStorage2D(s.TEXTURE_2D,St,rt,mt[0].width,mt[0].height);for(let Pe=0,D=mt.length;Pe<D;Pe++)Ye=mt[Pe],Ut?t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Ye.width,Ye.height,Ct,vt,Ye.data):t.texImage2D(s.TEXTURE_2D,Pe,rt,Ye.width,Ye.height,0,Ct,vt,Ye.data);v.generateMipmaps=!1}else Ut?(Ht&&t.texStorage2D(s.TEXTURE_2D,St,rt,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,Ct,vt,ve.data)):t.texImage2D(s.TEXTURE_2D,0,rt,ve.width,ve.height,0,Ct,vt,ve.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,St,rt,mt[0].width,mt[0].height,ve.depth);for(let Pe=0,D=mt.length;Pe<D;Pe++)Ye=mt[Pe],v.format!==kn?Ct!==null?Ut?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,Ye.width,Ye.height,ve.depth,Ct,Ye.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Pe,rt,Ye.width,Ye.height,ve.depth,0,Ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,Ye.width,Ye.height,ve.depth,Ct,vt,Ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Pe,rt,Ye.width,Ye.height,ve.depth,0,Ct,vt,Ye.data)}else{Ut&&Ht&&t.texStorage2D(s.TEXTURE_2D,St,rt,mt[0].width,mt[0].height);for(let Pe=0,D=mt.length;Pe<D;Pe++)Ye=mt[Pe],v.format!==kn?Ct!==null?Ut?t.compressedTexSubImage2D(s.TEXTURE_2D,Pe,0,0,Ye.width,Ye.height,Ct,Ye.data):t.compressedTexImage2D(s.TEXTURE_2D,Pe,rt,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Ye.width,Ye.height,Ct,vt,Ye.data):t.texImage2D(s.TEXTURE_2D,Pe,rt,Ye.width,Ye.height,0,Ct,vt,Ye.data)}else if(v.isDataArrayTexture)Ut?(Ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,St,rt,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ct,vt,ve.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,ve.width,ve.height,ve.depth,0,Ct,vt,ve.data);else if(v.isData3DTexture)Ut?(Ht&&t.texStorage3D(s.TEXTURE_3D,St,rt,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ct,vt,ve.data)):t.texImage3D(s.TEXTURE_3D,0,rt,ve.width,ve.height,ve.depth,0,Ct,vt,ve.data);else if(v.isFramebufferTexture){if(Ht)if(Ut)t.texStorage2D(s.TEXTURE_2D,St,rt,ve.width,ve.height);else{let Pe=ve.width,D=ve.height;for(let Fe=0;Fe<St;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,rt,Pe,D,0,Ct,vt,null),Pe>>=1,D>>=1}}else if(mt.length>0&&Ot){Ut&&Ht&&t.texStorage2D(s.TEXTURE_2D,St,rt,mt[0].width,mt[0].height);for(let Pe=0,D=mt.length;Pe<D;Pe++)Ye=mt[Pe],Ut?t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Ct,vt,Ye):t.texImage2D(s.TEXTURE_2D,Pe,rt,Ct,vt,Ye);v.generateMipmaps=!1}else Ut?(Ht&&t.texStorage2D(s.TEXTURE_2D,St,rt,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,vt,ve)):t.texImage2D(s.TEXTURE_2D,0,rt,Ct,vt,ve);_(v,Ot)&&x(fe),Le.__version=_e.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ee(w,v,K){if(v.image.length!==6)return;let fe=de(w,v),ge=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+K);let _e=n.get(ge);if(ge.version!==_e.__version||fe===!0){t.activeTexture(s.TEXTURE0+K);let Le=Yt.getPrimaries(Yt.workingColorSpace),we=v.colorSpace===ri?null:Yt.getPrimaries(v.colorSpace),je=v.colorSpace===ri||Le===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let st=v.isCompressedTexture||v.image[0].isCompressedTexture,wt=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let Pe=0;Pe<6;Pe++)!st&&!wt?ve[Pe]=b(v.image[Pe],!1,!0,i.maxCubemapSize):ve[Pe]=wt?v.image[Pe].image:v.image[Pe],ve[Pe]=I(v,ve[Pe]);let Ot=ve[0],Ct=m(Ot)||o,vt=r.convert(v.format,v.colorSpace),rt=r.convert(v.type),Ye=S(v.internalFormat,vt,rt,v.colorSpace),mt=o&&v.isVideoTexture!==!0,Ut=_e.__version===void 0||fe===!0,Ht=P(v,Ot,Ct);se(s.TEXTURE_CUBE_MAP,v,Ct);let St;if(st){mt&&Ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,Ye,Ot.width,Ot.height);for(let Pe=0;Pe<6;Pe++){St=ve[Pe].mipmaps;for(let D=0;D<St.length;D++){let Fe=St[D];v.format!==kn?vt!==null?mt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D,0,0,Fe.width,Fe.height,vt,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D,Ye,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D,0,0,Fe.width,Fe.height,vt,rt,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D,Ye,Fe.width,Fe.height,0,vt,rt,Fe.data)}}}else{St=v.mipmaps,mt&&Ut&&(St.length>0&&Ht++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,Ye,ve[0].width,ve[0].height));for(let Pe=0;Pe<6;Pe++)if(wt){mt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ve[Pe].width,ve[Pe].height,vt,rt,ve[Pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ye,ve[Pe].width,ve[Pe].height,0,vt,rt,ve[Pe].data);for(let D=0;D<St.length;D++){let Ie=St[D].image[Pe].image;mt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D+1,0,0,Ie.width,Ie.height,vt,rt,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D+1,Ye,Ie.width,Ie.height,0,vt,rt,Ie.data)}}else{mt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,vt,rt,ve[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ye,vt,rt,ve[Pe]);for(let D=0;D<St.length;D++){let Fe=St[D];mt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D+1,0,0,vt,rt,Fe.image[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,D+1,Ye,vt,rt,Fe.image[Pe])}}}_(v,Ct)&&x(s.TEXTURE_CUBE_MAP),_e.__version=ge.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function it(w,v,K,fe,ge,_e){let Le=r.convert(K.format,K.colorSpace),we=r.convert(K.type),je=S(K.internalFormat,Le,we,K.colorSpace);if(!n.get(v).__hasExternalTextures){let wt=Math.max(1,v.width>>_e),ve=Math.max(1,v.height>>_e);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,_e,je,wt,ve,v.depth,0,Le,we,null):t.texImage2D(ge,_e,je,wt,ve,0,Le,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),Ke(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ge,n.get(K).__webglTexture,0,ot(v)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ge,n.get(K).__webglTexture,_e),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(w,v,K){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let fe=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(K||Ke(v)){let ge=v.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Fi?fe=s.DEPTH_COMPONENT32F:ge.type===Qi&&(fe=s.DEPTH_COMPONENT24));let _e=ot(v);Ke(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,fe,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,fe,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,fe,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let fe=ot(v);K&&Ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,v.width,v.height):Ke(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let fe=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ge=0;ge<fe.length;ge++){let _e=fe[ge],Le=r.convert(_e.format,_e.colorSpace),we=r.convert(_e.type),je=S(_e.internalFormat,Le,we,_e.colorSpace),st=ot(v);K&&Ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,je,v.width,v.height):Ke(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,je,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,je,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);let fe=n.get(v.depthTexture).__webglTexture,ge=ot(v);if(v.depthTexture.format===Rs)Ke(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(v.depthTexture.format===br)Ke(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Ce(w){let v=n.get(w),K=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");yt(v.__webglFramebuffer,w)}else if(K){v.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[fe]),v.__webglDepthbuffer[fe]=s.createRenderbuffer(),Et(v.__webglDepthbuffer[fe],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Et(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(w,v,K){let fe=n.get(w);v!==void 0&&it(fe.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ce(w)}function V(w){let v=w.texture,K=n.get(w),fe=n.get(v);w.addEventListener("dispose",H),w.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=v.version,a.memory.textures++);let ge=w.isWebGLCubeRenderTarget===!0,_e=w.isWebGLMultipleRenderTargets===!0,Le=m(w)||o;if(ge){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let je=0;je<v.mipmaps.length;je++)K.__webglFramebuffer[we][je]=s.createFramebuffer()}else K.__webglFramebuffer[we]=s.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<v.mipmaps.length;we++)K.__webglFramebuffer[we]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(_e)if(i.drawBuffers){let we=w.texture;for(let je=0,st=we.length;je<st;je++){let wt=n.get(we[je]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Ke(w)===!1){let we=_e?v:[v];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let je=0;je<we.length;je++){let st=we[je];K.__webglColorRenderbuffer[je]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[je]);let wt=r.convert(st.format,st.colorSpace),ve=r.convert(st.type),Ot=S(st.internalFormat,wt,ve,st.colorSpace,w.isXRRenderTarget===!0),Ct=ot(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,Ot,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,K.__webglColorRenderbuffer[je])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(K.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),se(s.TEXTURE_CUBE_MAP,v,Le);for(let we=0;we<6;we++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let je=0;je<v.mipmaps.length;je++)it(K.__webglFramebuffer[we][je],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else it(K.__webglFramebuffer[we],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);_(v,Le)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){let we=w.texture;for(let je=0,st=we.length;je<st;je++){let wt=we[je],ve=n.get(wt);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),se(s.TEXTURE_2D,wt,Le),it(K.__webglFramebuffer,w,wt,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,0),_(wt,Le)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?we=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,fe.__webglTexture),se(we,v,Le),o&&v.mipmaps&&v.mipmaps.length>0)for(let je=0;je<v.mipmaps.length;je++)it(K.__webglFramebuffer[je],w,v,s.COLOR_ATTACHMENT0,we,je);else it(K.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,we,0);_(v,Le)&&x(we),t.unbindTexture()}w.depthBuffer&&Ce(w)}function nn(w){let v=m(w)||o,K=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let fe=0,ge=K.length;fe<ge;fe++){let _e=K[fe];if(_(_e,v)){let Le=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,we=n.get(_e).__webglTexture;t.bindTexture(Le,we),x(Le),t.unbindTexture()}}}function Qe(w){if(o&&w.samples>0&&Ke(w)===!1){let v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],K=w.width,fe=w.height,ge=s.COLOR_BUFFER_BIT,_e=[],Le=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(w),je=w.isWebGLMultipleRenderTargets===!0;if(je)for(let st=0;st<v.length;st++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let st=0;st<v.length;st++){_e.push(s.COLOR_ATTACHMENT0+st),w.depthBuffer&&_e.push(Le);let wt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(wt===!1&&(w.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),je&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[st]),wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Le]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Le])),je){let ve=n.get(v[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,K,fe,0,0,K,fe,ge,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),je)for(let st=0;st<v.length;st++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,we.__webglColorRenderbuffer[st]);let wt=n.get(v[st]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,wt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function ot(w){return Math.min(i.maxSamples,w.samples)}function Ke(w){let v=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(w){let v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function I(w,v){let K=w.colorSpace,fe=w.format,ge=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Sc||K!==wn&&K!==ri&&(Yt.getTransfer(K)===sn?o===!1?e.has("EXT_sRGB")===!0&&fe===kn?(w.format=Sc,w.minFilter=Sn,w.generateMipmaps=!1):v=to.sRGBToLinear(v):(fe!==kn||ge!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),v}this.allocateTextureUnit=N,this.resetTextureUnits=Se,this.setTexture2D=oe,this.setTexture2DArray=he,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=He,this.setupRenderTarget=V,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ke}function xb(s,e,t){let n=t.isWebGL2;function i(r,a=ri){let o,c=Yt.getTransfer(a);if(r===ai)return s.UNSIGNED_BYTE;if(r===Vu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zf)return s.BYTE;if(r===Qf)return s.SHORT;if(r===cl)return s.UNSIGNED_SHORT;if(r===Gu)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Wn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===$f)return s.ALPHA;if(r===kn)return s.RGBA;if(r===ed)return s.LUMINANCE;if(r===td)return s.LUMINANCE_ALPHA;if(r===Rs)return s.DEPTH_COMPONENT;if(r===br)return s.DEPTH_STENCIL;if(r===Sc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===nd)return s.RED;if(r===Xu)return s.RED_INTEGER;if(r===id)return s.RG;if(r===qu)return s.RG_INTEGER;if(r===ju)return s.RGBA_INTEGER;if(r===ko||r===Ho||r===zo||r===Go)if(c===sn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===oh||r===ch||r===lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ch)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hh||r===uh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===hh)return c===sn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fh||r===dh||r===ph||r===mh||r===gh||r===bh||r===xh||r===_h||r===vh||r===yh||r===Mh||r===Eh||r===Sh||r===wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ph)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return c===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vo||r===Th||r===Ah)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Vo)return c===sn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sd||r===Rh||r===Ch||r===Ph)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Vo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Bc=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_b={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),d=this._getHandJoint(l,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_b)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kc=class extends Bi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,b=t.getContextAttributes(),m=null,d=null,_=[],x=[],S=new Ze,P=null,T=new cn;T.layers.enable(1),T.viewport=new an;let y=new cn;y.layers.enable(2),y.viewport=new an;let H=[T,y],E=new Bc;E.layers.enable(1),E.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=_[se];return de===void 0&&(de=new Qr,_[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=_[se];return de===void 0&&(de=new Qr,_[se]=de),de.getGripSpace()},this.getHand=function(se){let de=_[se];return de===void 0&&(de=new Qr,_[se]=de),de.getHandSpace()};function re(se){let de=x.indexOf(se.inputSource);if(de===-1)return;let Z=_[de];Z!==void 0&&(Z.update(se.inputSource,se.frame,l||a),Z.dispatchEvent({type:se.type,data:se.inputSource}))}function Se(){i.removeEventListener("select",re),i.removeEventListener("selectstart",re),i.removeEventListener("selectend",re),i.removeEventListener("squeeze",re),i.removeEventListener("squeezestart",re),i.removeEventListener("squeezeend",re),i.removeEventListener("end",Se),i.removeEventListener("inputsourceschange",N);for(let se=0;se<_.length;se++){let de=x[se];de!==null&&(x[se]=null,_[se].disconnect(de))}R=null,te=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",re),i.addEventListener("selectstart",re),i.addEventListener("selectend",re),i.addEventListener("squeeze",re),i.addEventListener("squeezestart",re),i.addEventListener("squeezeend",re),i.addEventListener("end",Se),i.addEventListener("inputsourceschange",N),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new _n(p.framebufferWidth,p.framebufferHeight,{format:kn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let de=null,Z=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?br:Rs,Z=b.stencil?As:Qi);let it={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(it),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new _n(f.textureWidth,f.textureHeight,{format:kn,type:ai,depthTexture:new ho(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let Et=e.properties.get(d);Et.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(se){for(let de=0;de<se.removed.length;de++){let Z=se.removed[de],Ee=x.indexOf(Z);Ee>=0&&(x[Ee]=null,_[Ee].disconnect(Z))}for(let de=0;de<se.added.length;de++){let Z=se.added[de],Ee=x.indexOf(Z);if(Ee===-1){for(let Et=0;Et<_.length;Et++)if(Et>=x.length){x.push(Z),Ee=Et;break}else if(x[Et]===null){x[Et]=Z,Ee=Et;break}if(Ee===-1)break}let it=_[Ee];it&&it.connect(Z)}}let $=new L,oe=new L;function he(se,de,Z){$.setFromMatrixPosition(de.matrixWorld),oe.setFromMatrixPosition(Z.matrixWorld);let Ee=$.distanceTo(oe),it=de.projectionMatrix.elements,Et=Z.projectionMatrix.elements,yt=it[14]/(it[10]-1),Ce=it[14]/(it[10]+1),He=(it[9]+1)/it[5],V=(it[9]-1)/it[5],nn=(it[8]-1)/it[0],Qe=(Et[8]+1)/Et[0],ot=yt*nn,Ke=yt*Qe,pt=Ee/(-nn+Qe),I=pt*-nn;de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(I),se.translateZ(pt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();let w=yt+pt,v=Ce+pt,K=ot-I,fe=Ke+(Ee-I),ge=He*Ce/v*w,_e=V*Ce/v*w;se.projectionMatrix.makePerspective(K,fe,ge,_e,w,v),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function ce(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;E.near=y.near=T.near=se.near,E.far=y.far=T.far=se.far,(R!==E.near||te!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,te=E.far);let de=se.parent,Z=E.cameras;ce(E,de);for(let Ee=0;Ee<Z.length;Ee++)ce(Z[Ee],de);Z.length===2?he(E,T,y):E.projectionMatrix.copy(T.projectionMatrix),le(se,E,de)};function le(se,de,Z){Z===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Z.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=_r*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(se){c=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)};let xe=null;function Te(se,de){if(u=de.getViewerPose(l||a),g=de,u!==null){let Z=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Ee=!1;Z.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let it=0;it<Z.length;it++){let Et=Z[it],yt=null;if(p!==null)yt=p.getViewport(Et);else{let He=h.getViewSubImage(f,Et);yt=He.viewport,it===0&&(e.setRenderTargetTextures(d,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(d))}let Ce=H[it];Ce===void 0&&(Ce=new cn,Ce.layers.enable(it),Ce.viewport=new an,H[it]=Ce),Ce.matrix.fromArray(Et.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Et.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(yt.x,yt.y,yt.width,yt.height),it===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(Ce)}}for(let Z=0;Z<_.length;Z++){let Ee=x[Z],it=_[Z];Ee!==null&&it!==void 0&&it.update(Ee,de,l||a)}xe&&xe(se,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let Ve=new tf;Ve.setAnimationLoop(Te),this.setAnimationLoop=function(se){xe=se},this.dispose=function(){}}};function vb(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ef(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yb(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){let S=x.program;n.uniformBlockBinding(_,S)}function l(_,x){let S=i[_.id];S===void 0&&(g(_),S=u(_),i[_.id]=S,_.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(_,P);let T=e.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function u(_){let x=h();_.__bindingPointIndex=x;let S=s.createBuffer(),P=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=i[_.id],S=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,y=S.length;T<y;T++){let H=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,R=H.length;E<R;E++){let te=H[E];if(p(te,T,E,P)===!0){let re=te.__offset,Se=Array.isArray(te.value)?te.value:[te.value],N=0;for(let $=0;$<Se.length;$++){let oe=Se[$],he=b(oe);typeof oe=="number"||typeof oe=="boolean"?(te.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,re+N,te.__data)):oe.isMatrix3?(te.__data[0]=oe.elements[0],te.__data[1]=oe.elements[1],te.__data[2]=oe.elements[2],te.__data[3]=0,te.__data[4]=oe.elements[3],te.__data[5]=oe.elements[4],te.__data[6]=oe.elements[5],te.__data[7]=0,te.__data[8]=oe.elements[6],te.__data[9]=oe.elements[7],te.__data[10]=oe.elements[8],te.__data[11]=0):(oe.toArray(te.__data,N),N+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,te.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,x,S,P){let T=_.value,y=x+"_"+S;if(P[y]===void 0)return typeof T=="number"||typeof T=="boolean"?P[y]=T:P[y]=T.clone(),!0;{let H=P[y];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return P[y]=T,!0}else if(H.equals(T)===!1)return H.copy(T),!0}return!1}function g(_){let x=_.uniforms,S=0,P=16;for(let y=0,H=x.length;y<H;y++){let E=Array.isArray(x[y])?x[y]:[x[y]];for(let R=0,te=E.length;R<te;R++){let re=E[R],Se=Array.isArray(re.value)?re.value:[re.value];for(let N=0,$=Se.length;N<$;N++){let oe=Se[N],he=b(oe),ce=S%P;ce!==0&&P-ce<he.boundary&&(S+=P-ce),re.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=S,S+=he.storage}}}let T=S%P;return T>0&&(S+=P-T),_.__size=S,_.__cache={},this}function b(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}var _i=class{constructor(e={}){let{canvas:t=Ld(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;let x=this,S=!1,P=0,T=0,y=null,H=-1,E=null,R=new an,te=new an,re=null,Se=new Ne(0),N=0,$=t.width,oe=t.height,he=1,ce=null,le=null,xe=new an(0,0,$,oe),Te=new an(0,0,$,oe),Ve=!1,se=new ta,de=!1,Z=!1,Ee=null,it=new Ft,Et=new Ze,yt=new L,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return y===null?he:1}let V=n;function nn(M,F){for(let O=0;O<M.length;O++){let q=M[O],J=t.getContext(q,F);if(J!==null)return J}return null}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),V===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),V=nn(F,M),V===null)throw nn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Qe,ot,Ke,pt,I,w,v,K,fe,ge,_e,Le,we,je,st,wt,ve,Ot,Ct,vt,rt,Ye,mt,Ut;function Ht(){Qe=new Hg(V),ot=new Ug(V,Qe,e),Qe.init(ot),Ye=new xb(V,Qe,ot),Ke=new gb(V,Qe,ot),pt=new Vg(V),I=new sb,w=new bb(V,Qe,Ke,I,ot,Ye,pt),v=new Fg(x),K=new kg(x),fe=new Zd(V,ot),mt=new Ig(V,Qe,fe,ot),ge=new zg(V,fe,pt,mt),_e=new jg(V,ge,fe,pt),Ct=new qg(V,ot,w),wt=new Ng(I),Le=new ib(x,v,K,Qe,ot,mt,wt),we=new vb(x,I),je=new ab,st=new fb(Qe,ot),Ot=new Lg(x,v,K,Ke,_e,f,c),ve=new mb(x,_e,ot),Ut=new yb(V,pt,ot,Ke),vt=new Dg(V,Qe,pt,ot),rt=new Gg(V,Qe,pt,ot),pt.programs=Le.programs,x.capabilities=ot,x.extensions=Qe,x.properties=I,x.renderLists=je,x.shadowMap=ve,x.state=Ke,x.info=pt}Ht();let St=new kc(x,V);this.xr=St,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let M=Qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(M){M!==void 0&&(he=M,this.setSize($,oe,!1))},this.getSize=function(M){return M.set($,oe)},this.setSize=function(M,F,O=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,oe=F,t.width=Math.floor(M*he),t.height=Math.floor(F*he),O===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set($*he,oe*he).floor()},this.setDrawingBufferSize=function(M,F,O){$=M,oe=F,he=O,t.width=Math.floor(M*O),t.height=Math.floor(F*O),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(xe)},this.setViewport=function(M,F,O,q){M.isVector4?xe.set(M.x,M.y,M.z,M.w):xe.set(M,F,O,q),Ke.viewport(R.copy(xe).multiplyScalar(he).floor())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,F,O,q){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,F,O,q),Ke.scissor(te.copy(Te).multiplyScalar(he).floor())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){Ke.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){ce=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(M=!0,F=!0,O=!0){let q=0;if(M){let J=!1;if(y!==null){let k=y.texture.format;J=k===ju||k===qu||k===Xu}if(J){let k=y.texture.type,ye=k===ai||k===Qi||k===cl||k===As||k===Vu||k===Wu,Re=Ot.getClearColor(),Oe=Ot.getClearAlpha(),$e=Re.r,gt=Re.g,et=Re.b;ye?(p[0]=$e,p[1]=gt,p[2]=et,p[3]=Oe,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=$e,g[1]=gt,g[2]=et,g[3]=Oe,V.clearBufferiv(V.COLOR,0,g))}else q|=V.COLOR_BUFFER_BIT}F&&(q|=V.DEPTH_BUFFER_BIT),O&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),je.dispose(),st.dispose(),I.dispose(),v.dispose(),K.dispose(),_e.dispose(),mt.dispose(),Ut.dispose(),Le.dispose(),St.dispose(),St.removeEventListener("sessionstart",ne),St.removeEventListener("sessionend",ie),Ee&&(Ee.dispose(),Ee=null),X.stop()};function Pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let M=pt.autoReset,F=ve.enabled,O=ve.autoUpdate,q=ve.needsUpdate,J=ve.type;Ht(),pt.autoReset=M,ve.enabled=F,ve.autoUpdate=O,ve.needsUpdate=q,ve.type=J}function Fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ie(M){let F=M.target;F.removeEventListener("dispose",Ie),ht(F)}function ht(M){ut(M),I.remove(M)}function ut(M){let F=I.get(M).programs;F!==void 0&&(F.forEach(function(O){Le.releaseProgram(O)}),M.isShaderMaterial&&Le.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,O,q,J,k){F===null&&(F=Ce);let ye=J.isMesh&&J.matrixWorld.determinant()<0,Re=un(M,F,O,q,J);Ke.setMaterial(q,ye);let Oe=O.index,$e=1;if(q.wireframe===!0){if(Oe=ge.getWireframeAttribute(O),Oe===void 0)return;$e=2}let gt=O.drawRange,et=O.attributes.position,C=gt.start*$e,B=(gt.start+gt.count)*$e;k!==null&&(C=Math.max(C,k.start*$e),B=Math.min(B,(k.start+k.count)*$e)),Oe!==null?(C=Math.max(C,0),B=Math.min(B,Oe.count)):et!=null&&(C=Math.max(C,0),B=Math.min(B,et.count));let j=B-C;if(j<0||j===1/0)return;mt.setup(J,q,Re,O,Oe);let ee,U=vt;if(Oe!==null&&(ee=fe.get(Oe),U=rt,U.setIndex(ee)),J.isMesh)q.wireframe===!0?(Ke.setLineWidth(q.wireframeLinewidth*He()),U.setMode(V.LINES)):U.setMode(V.TRIANGLES);else if(J.isLine){let z=q.linewidth;z===void 0&&(z=1),Ke.setLineWidth(z*He()),J.isLineSegments?U.setMode(V.LINES):J.isLineLoop?U.setMode(V.LINE_LOOP):U.setMode(V.LINE_STRIP)}else J.isPoints?U.setMode(V.POINTS):J.isSprite&&U.setMode(V.TRIANGLES);if(J.isBatchedMesh)U.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)U.renderInstances(C,j,J.count);else if(O.isInstancedBufferGeometry){let z=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,be=Math.min(O.instanceCount,z);U.renderInstances(C,j,be)}else U.render(C,j)};function zt(M,F,O){M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=Pn,M.needsUpdate=!0,ct(M,F,O),M.side=Si,M.needsUpdate=!0,ct(M,F,O),M.side=dn):ct(M,F,O)}this.compile=function(M,F,O=null){O===null&&(O=M),m=st.get(O),m.init(),_.push(m),O.traverseVisible(function(J){J.isLight&&J.layers.test(F.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),M!==O&&M.traverseVisible(function(J){J.isLight&&J.layers.test(F.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(x._useLegacyLights);let q=new Set;return M.traverse(function(J){let k=J.material;if(k)if(Array.isArray(k))for(let ye=0;ye<k.length;ye++){let Re=k[ye];zt(Re,O,J),q.add(Re)}else zt(k,O,J),q.add(k)}),_.pop(),m=null,q},this.compileAsync=function(M,F,O=null){let q=this.compile(M,F,O);return new Promise(J=>{function k(){if(q.forEach(function(ye){I.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){J(M);return}setTimeout(k,10)}Qe.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let jt=null;function W(M){jt&&jt(M)}function ne(){X.stop()}function ie(){X.start()}let X=new tf;X.setAnimationLoop(W),typeof self!="undefined"&&X.setContext(self),this.setAnimationLoop=function(M){jt=M,St.setAnimationLoop(M),M===null?X.stop():X.start()},St.addEventListener("sessionstart",ne),St.addEventListener("sessionend",ie),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(F),F=St.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,F,y),m=st.get(M,_.length),m.init(),_.push(m),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),se.setFromProjectionMatrix(it),Z=this.localClippingEnabled,de=wt.init(this.clippingPlanes,Z),b=je.get(M,d.length),b.init(),d.push(b),pe(M,F,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(ce,le),this.info.render.frame++,de===!0&&wt.beginShadows();let O=m.state.shadowsArray;if(ve.render(O,M,F),de===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ot.render(b,M),m.setupLights(x._useLegacyLights),F.isArrayCamera){let q=F.cameras;for(let J=0,k=q.length;J<k;J++){let ye=q[J];Ue(b,M,ye,ye.viewport)}}else Ue(b,M,F);y!==null&&(w.updateMultisampleRenderTarget(y),w.updateRenderTargetMipmap(y)),M.isScene===!0&&M.onAfterRender(x,M,F),mt.resetDefaultState(),H=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?b=d[d.length-1]:b=null};function pe(M,F,O,q){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||se.intersectsSprite(M)){q&&yt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(it);let ye=_e.update(M),Re=M.material;Re.visible&&b.push(M,ye,Re,O,yt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||se.intersectsObject(M))){let ye=_e.update(M),Re=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),yt.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),yt.copy(ye.boundingSphere.center)),yt.applyMatrix4(M.matrixWorld).applyMatrix4(it)),Array.isArray(Re)){let Oe=ye.groups;for(let $e=0,gt=Oe.length;$e<gt;$e++){let et=Oe[$e],C=Re[et.materialIndex];C&&C.visible&&b.push(M,ye,C,O,yt.z,et)}}else Re.visible&&b.push(M,ye,Re,O,yt.z,null)}}let k=M.children;for(let ye=0,Re=k.length;ye<Re;ye++)pe(k[ye],F,O,q)}function Ue(M,F,O,q){let J=M.opaque,k=M.transmissive,ye=M.transparent;m.setupLightsView(O),de===!0&&wt.setGlobalState(x.clippingPlanes,O),k.length>0&&We(J,k,F,O),q&&Ke.viewport(R.copy(q)),J.length>0&&Ae(J,F,O),k.length>0&&Ae(k,F,O),ye.length>0&&Ae(ye,F,O),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function We(M,F,O,q){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let k=ot.isWebGL2;Ee===null&&(Ee=new _n(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")?Wn:ai,minFilter:ns,samples:k?4:0})),x.getDrawingBufferSize(Et),k?Ee.setSize(Et.x,Et.y):Ee.setSize(eo(Et.x),eo(Et.y));let ye=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(Se),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();let Re=x.toneMapping;x.toneMapping=ts,Ae(M,O,q),w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee);let Oe=!1;for(let $e=0,gt=F.length;$e<gt;$e++){let et=F[$e],C=et.object,B=et.geometry,j=et.material,ee=et.group;if(j.side===dn&&C.layers.test(q.layers)){let U=j.side;j.side=Pn,j.needsUpdate=!0,xt(C,O,q,B,j,ee),j.side=U,j.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(Ee),w.updateRenderTargetMipmap(Ee)),x.setRenderTarget(ye),x.setClearColor(Se,N),x.toneMapping=Re}function Ae(M,F,O){let q=F.isScene===!0?F.overrideMaterial:null;for(let J=0,k=M.length;J<k;J++){let ye=M[J],Re=ye.object,Oe=ye.geometry,$e=q===null?ye.material:q,gt=ye.group;Re.layers.test(O.layers)&&xt(Re,F,O,Oe,$e,gt)}}function xt(M,F,O,q,J,k){M.onBeforeRender(x,F,O,q,J,k),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),J.onBeforeRender(x,F,O,q,M,k),J.transparent===!0&&J.side===dn&&J.forceSinglePass===!1?(J.side=Pn,J.needsUpdate=!0,x.renderBufferDirect(O,F,q,J,M,k),J.side=Si,J.needsUpdate=!0,x.renderBufferDirect(O,F,q,J,M,k),J.side=dn):x.renderBufferDirect(O,F,q,J,M,k),M.onAfterRender(x,F,O,q,J,k)}function ct(M,F,O){F.isScene!==!0&&(F=Ce);let q=I.get(M),J=m.state.lights,k=m.state.shadowsArray,ye=J.state.version,Re=Le.getParameters(M,J.state,k,F,O),Oe=Le.getProgramCacheKey(Re),$e=q.programs;q.environment=M.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(M.isMeshStandardMaterial?K:v).get(M.envMap||q.environment),$e===void 0&&(M.addEventListener("dispose",Ie),$e=new Map,q.programs=$e);let gt=$e.get(Oe);if(gt!==void 0){if(q.currentProgram===gt&&q.lightsStateVersion===ye)return Jt(M,Re),gt}else Re.uniforms=Le.getUniforms(M),M.onBuild(O,Re,x),M.onBeforeCompile(Re,x),gt=Le.acquireProgram(Re,Oe),$e.set(Oe,gt),q.uniforms=Re.uniforms;let et=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(et.clippingPlanes=wt.uniform),Jt(M,Re),q.needsLights=Zt(M),q.lightsStateVersion=ye,q.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.directionalShadowMap.value=J.state.directionalShadowMap,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotShadowMap.value=J.state.spotShadowMap,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMap.value=J.state.pointShadowMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),q.currentProgram=gt,q.uniformsList=null,gt}function Pt(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=pr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Jt(M,F){let O=I.get(M);O.outputColorSpace=F.outputColorSpace,O.batching=F.batching,O.instancing=F.instancing,O.instancingColor=F.instancingColor,O.skinning=F.skinning,O.morphTargets=F.morphTargets,O.morphNormals=F.morphNormals,O.morphColors=F.morphColors,O.morphTargetsCount=F.morphTargetsCount,O.numClippingPlanes=F.numClippingPlanes,O.numIntersection=F.numClipIntersection,O.vertexAlphas=F.vertexAlphas,O.vertexTangents=F.vertexTangents,O.toneMapping=F.toneMapping}function un(M,F,O,q,J){F.isScene!==!0&&(F=Ce),w.resetTextureUnits();let k=F.fog,ye=q.isMeshStandardMaterial?F.environment:null,Re=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:wn,Oe=(q.isMeshStandardMaterial?K:v).get(q.envMap||ye),$e=q.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,gt=!!O.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),et=!!O.morphAttributes.position,C=!!O.morphAttributes.normal,B=!!O.morphAttributes.color,j=ts;q.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(j=x.toneMapping);let ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,U=ee!==void 0?ee.length:0,z=I.get(q),be=m.state.lights;if(de===!0&&(Z===!0||M!==E)){let Xt=M===E&&q.id===H;wt.setState(q,M,Xt)}let De=!1;q.version===z.__version?(z.needsLights&&z.lightsStateVersion!==be.state.version||z.outputColorSpace!==Re||J.isBatchedMesh&&z.batching===!1||!J.isBatchedMesh&&z.batching===!0||J.isInstancedMesh&&z.instancing===!1||!J.isInstancedMesh&&z.instancing===!0||J.isSkinnedMesh&&z.skinning===!1||!J.isSkinnedMesh&&z.skinning===!0||J.isInstancedMesh&&z.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&z.instancingColor===!1&&J.instanceColor!==null||z.envMap!==Oe||q.fog===!0&&z.fog!==k||z.numClippingPlanes!==void 0&&(z.numClippingPlanes!==wt.numPlanes||z.numIntersection!==wt.numIntersection)||z.vertexAlphas!==$e||z.vertexTangents!==gt||z.morphTargets!==et||z.morphNormals!==C||z.morphColors!==B||z.toneMapping!==j||ot.isWebGL2===!0&&z.morphTargetsCount!==U)&&(De=!0):(De=!0,z.__version=q.version);let tt=z.currentProgram;De===!0&&(tt=ct(q,F,J));let nt=!1,qe=!1,Lt=!1,lt=tt.getUniforms(),Wt=z.uniforms;if(Ke.useProgram(tt.program)&&(nt=!0,qe=!0,Lt=!0),q.id!==H&&(H=q.id,qe=!0),nt||E!==M){lt.setValue(V,"projectionMatrix",M.projectionMatrix),lt.setValue(V,"viewMatrix",M.matrixWorldInverse);let Xt=lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(V,yt.setFromMatrixPosition(M.matrixWorld)),ot.logarithmicDepthBuffer&&lt.setValue(V,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&lt.setValue(V,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,qe=!0,Lt=!0)}if(J.isSkinnedMesh){lt.setOptional(V,J,"bindMatrix"),lt.setOptional(V,J,"bindMatrixInverse");let Xt=J.skeleton;Xt&&(ot.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),lt.setValue(V,"boneTexture",Xt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(lt.setOptional(V,J,"batchingTexture"),lt.setValue(V,"batchingTexture",J._matricesTexture,w));let vn=O.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0&&ot.isWebGL2===!0)&&Ct.update(J,O,tt),(qe||z.receiveShadow!==J.receiveShadow)&&(z.receiveShadow=J.receiveShadow,lt.setValue(V,"receiveShadow",J.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Wt.envMap.value=Oe,Wt.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),qe&&(lt.setValue(V,"toneMappingExposure",x.toneMappingExposure),z.needsLights&&kt(Wt,Lt),k&&q.fog===!0&&we.refreshFogUniforms(Wt,k),we.refreshMaterialUniforms(Wt,q,he,oe,Ee),pr.upload(V,Pt(z),Wt,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(pr.upload(V,Pt(z),Wt,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&lt.setValue(V,"center",J.center),lt.setValue(V,"modelViewMatrix",J.modelViewMatrix),lt.setValue(V,"normalMatrix",J.normalMatrix),lt.setValue(V,"modelMatrix",J.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Xt=q.uniformsGroups;for(let xn=0,Me=Xt.length;xn<Me;xn++)if(ot.isWebGL2){let Xe=Xt[xn];Ut.update(Xe,tt),Ut.bind(Xe,tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tt}function kt(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Zt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(M,F,O){I.get(M.texture).__webglTexture=F,I.get(M.depthTexture).__webglTexture=O;let q=I.get(M);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=O===void 0,q.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){let O=I.get(M);O.__webglFramebuffer=F,O.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,O=0){y=M,P=F,T=O;let q=!0,J=null,k=!1,ye=!1;if(M){let Oe=I.get(M);Oe.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(V.FRAMEBUFFER,null),q=!1):Oe.__webglFramebuffer===void 0?w.setupRenderTarget(M):Oe.__hasExternalTextures&&w.rebindTextures(M,I.get(M.texture).__webglTexture,I.get(M.depthTexture).__webglTexture);let $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ye=!0);let gt=I.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(gt[F])?J=gt[F][O]:J=gt[F],k=!0):ot.isWebGL2&&M.samples>0&&w.useMultisampledRTT(M)===!1?J=I.get(M).__webglMultisampledFramebuffer:Array.isArray(gt)?J=gt[O]:J=gt,R.copy(M.viewport),te.copy(M.scissor),re=M.scissorTest}else R.copy(xe).multiplyScalar(he).floor(),te.copy(Te).multiplyScalar(he).floor(),re=Ve;if(Ke.bindFramebuffer(V.FRAMEBUFFER,J)&&ot.drawBuffers&&q&&Ke.drawBuffers(M,J),Ke.viewport(R),Ke.scissor(te),Ke.setScissorTest(re),k){let Oe=I.get(M.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Oe.__webglTexture,O)}else if(ye){let Oe=I.get(M.texture),$e=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,O||0,$e)}H=-1},this.readRenderTargetPixels=function(M,F,O,q,J,k,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=I.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ke.bindFramebuffer(V.FRAMEBUFFER,Re);try{let Oe=M.texture,$e=Oe.format,gt=Oe.type;if($e!==kn&&Ye.convert($e)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let et=gt===Wn&&(Qe.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Qe.has("EXT_color_buffer_float"));if(gt!==ai&&Ye.convert(gt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(gt===Fi&&(ot.isWebGL2||Qe.has("OES_texture_float")||Qe.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-q&&O>=0&&O<=M.height-J&&V.readPixels(F,O,q,J,Ye.convert($e),Ye.convert(gt),k)}finally{let Oe=y!==null?I.get(y).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(M,F,O=0){let q=Math.pow(2,-O),J=Math.floor(F.image.width*q),k=Math.floor(F.image.height*q);w.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,O,0,0,M.x,M.y,J,k),Ke.unbindTexture()},this.copyTextureToTexture=function(M,F,O,q=0){let J=F.image.width,k=F.image.height,ye=Ye.convert(O.format),Re=Ye.convert(O.type);w.setTexture2D(O,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,q,M.x,M.y,J,k,ye,Re,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,q,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,q,M.x,M.y,ye,Re,F.image),q===0&&O.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(M,F,O,q,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let k=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,Re=M.max.z-M.min.z+1,Oe=Ye.convert(q.format),$e=Ye.convert(q.type),gt;if(q.isData3DTexture)w.setTexture3D(q,0),gt=V.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)w.setTexture2DArray(q,0),gt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);let et=V.getParameter(V.UNPACK_ROW_LENGTH),C=V.getParameter(V.UNPACK_IMAGE_HEIGHT),B=V.getParameter(V.UNPACK_SKIP_PIXELS),j=V.getParameter(V.UNPACK_SKIP_ROWS),ee=V.getParameter(V.UNPACK_SKIP_IMAGES),U=O.isCompressedTexture?O.mipmaps[J]:O.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,U.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,U.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,M.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,M.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?V.texSubImage3D(gt,J,F.x,F.y,F.z,k,ye,Re,Oe,$e,U.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(gt,J,F.x,F.y,F.z,k,ye,Re,Oe,U.data)):V.texSubImage3D(gt,J,F.x,F.y,F.z,k,ye,Re,Oe,$e,U),V.pixelStorei(V.UNPACK_ROW_LENGTH,et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,C),V.pixelStorei(V.UNPACK_SKIP_PIXELS,B),V.pixelStorei(V.UNPACK_SKIP_ROWS,j),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ee),J===0&&q.generateMipmaps&&V.generateMipmap(gt),Ke.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Ke.unbindTexture()},this.resetState=function(){P=0,T=0,y=null,Ke.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===fl?"display-p3":"srgb",t.unpackColorSpace=Yt.workingColorSpace===Co?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Cs:Ju}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cs?Nt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Hc=class extends _i{};Hc.prototype.isWebGL1Renderer=!0;var uo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ss=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vi=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},zn=new L,Ds=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jn=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sr,Gr=new L,rr=new L,ar=new L,or=new Ze,Vr=new Ze,cf=new Ft,Ba=new L,Wr=new L,ka=new L,bu=new Ze,dc=new Ze,xu=new Ze,Yn=class extends mn{constructor(e=new jn){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new en;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yr(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Ds(n,3,0,!1)),sr.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new Ze(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-ar.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ha(Ba.set(-.5,-.5,0),ar,a,rr,i,r),Ha(Wr.set(.5,-.5,0),ar,a,rr,i,r),Ha(ka.set(.5,.5,0),ar,a,rr,i,r),bu.set(0,0),dc.set(1,0),xu.set(1,1);let o=e.ray.intersectTriangle(Ba,Wr,ka,!1,Gr);if(o===null&&(Ha(Wr.set(-.5,.5,0),ar,a,rr,i,r),dc.set(0,1),o=e.ray.intersectTriangle(Ba,ka,Wr,!1,Gr),o===null))return;let c=e.ray.origin.distanceTo(Gr);c<e.near||c>e.far||t.push({distance:c,point:Gr.clone(),uv:Ts.getInterpolation(Gr,Ba,Wr,ka,bu,dc,xu,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ha(s,e,t,n,i,r){or.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Vr.x=r*or.x-i*or.y,Vr.y=i*or.x+r*or.y):Vr.copy(or),s.copy(e),s.x+=Vr.x,s.y+=Vr.y,s.applyMatrix4(cf)}var _u=new L,vu=new an,yu=new an,Mb=new L,Mu=new Ft,za=new L,pc=new ni,Eu=new Ft,mc=new Is,fo=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rh,this.bindMatrix=new Ft,this.bindMatrixInverse=new Ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(i),e.ray.intersectsSphere(pc)!==!1&&(Eu.copy(i).invert(),mc.copy(e.ray).applyMatrix4(Eu),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new an,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;vu.fromBufferAttribute(i.attributes.skinIndex,e),yu.fromBufferAttribute(i.attributes.skinWeight,e),_u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=yu.getComponent(r);if(a!==0){let o=vu.getComponent(r);Mu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mb.copy(_u).applyMatrix4(Mu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},na=class extends mn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Us=class extends Nn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=En,u=En,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Su=new Ft,Eb=new Ft,po=class s{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Eb;Su.multiplyMatrices(o,t[r]),Su.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Us(t,e,e,kn,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new na),this.bones.push(a),this.boneInverses.push(new Ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ns=class extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new Ft,wu=new Ft,Ga=[],Tu=new Xn,Sb=new Ft,Xr=new dt,qr=new ni,mo=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ns(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Tu.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),qr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cr),wu.multiplyMatrices(n,cr),Xr.matrixWorld=wu,Xr.raycast(e,Ga);for(let a=0,o=Ga.length;a<o;a++){let c=Ga[a];c.instanceId=r,c.object=this,t.push(c)}Ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ns(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Fs=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Au=new L,Ru=new L,Cu=new Ft,gc=new Is,Va=new ni,Mr=class extends mn{constructor(e=new en,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Au.fromBufferAttribute(t,i-1),Ru.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Au.distanceTo(Ru);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Cu.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let x=d,S=_-1;x<S;x+=p){let P=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,P),u.fromBufferAttribute(m,T),gc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let H=e.ray.origin.distanceTo(f);H<e.near||H>e.far||t.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=d,S=_-1;x<S;x+=p){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),gc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Pu=new L,Lu=new L,Er=class extends Mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Pu.fromBufferAttribute(t,i),Lu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pu.distanceTo(Lu);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},go=class extends Mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ki=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new Ft,zc=new Is,Wa=new ni,Xa=new L,rs=class extends mn{constructor(e=new en,t=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;Iu.copy(i).invert(),zc.copy(e.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,b=p;g<b;g++){let m=l.getX(g);Xa.fromBufferAttribute(h,m),Du(Xa,m,c,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,b=p;g<b;g++)Xa.fromBufferAttribute(h,g),Du(Xa,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Du(s,e,t,n,i,r,a){let o=zc.distanceSqToPoint(s);if(o<t){let c=new L;zc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var In=class extends Nn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bo=class s extends en{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,u=new Ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$t=class s extends en{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,b=[],m=n/2,d=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function _(){let S=new L,P=new L,T=0,y=(t-e)/n;for(let H=0;H<=r;H++){let E=[],R=H/r,te=R*(t-e)+e;for(let re=0;re<=i;re++){let Se=re/i,N=Se*c+o,$=Math.sin(N),oe=Math.cos(N);P.x=te*$,P.y=-R*n+m,P.z=te*oe,h.push(P.x,P.y,P.z),S.set($,y,oe).normalize(),f.push(S.x,S.y,S.z),p.push(Se,1-R),E.push(g++)}b.push(E)}for(let H=0;H<i;H++)for(let E=0;E<r;E++){let R=b[E][H],te=b[E+1][H],re=b[E+1][H+1],Se=b[E][H+1];u.push(R,te,Se),u.push(te,re,Se),T+=6}l.addGroup(d,T,0),d+=T}function x(S){let P=g,T=new Ze,y=new L,H=0,E=S===!0?e:t,R=S===!0?1:-1;for(let re=1;re<=i;re++)h.push(0,m*R,0),f.push(0,R,0),p.push(.5,.5),g++;let te=g;for(let re=0;re<=i;re++){let N=re/i*c+o,$=Math.cos(N),oe=Math.sin(N);y.x=E*oe,y.y=m*R,y.z=E*$,h.push(y.x,y.y,y.z),f.push(0,R,0),T.x=$*.5+.5,T.y=oe*.5*R+.5,p.push(T.x,T.y),g++}for(let re=0;re<i;re++){let Se=P+re,N=te+re;S===!0?u.push(N,N+1,Se):u.push(N+1,N,Se),H+=3}l.addGroup(d,H,S===!0?1:2),d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class s extends $t{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ia=class s extends en{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,f=(t-e)/i,p=new L,g=new Ze;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let b=0;b<i;b++){let m=b*(n+1);for(let d=0;d<n;d++){let _=d+m,x=_,S=_+n+1,P=_+n+2,T=_+1;o.push(x,S,T),o.push(S,P,T)}}this.setIndex(o),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var wi=class s extends en{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new L,f=new L,p=[],g=[],b=[],m=[];for(let d=0;d<=n;d++){let _=[],x=d/n,S=0;d===0&&a===0?S=.5/t:d===n&&c===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){let T=P/t;h.x=-e*Math.cos(i+T*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+T*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),m.push(T+S,1-x),_.push(l++)}u.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){let x=u[d][_+1],S=u[d][_],P=u[d+1][_],T=u[d+1][_+1];(d!==0||a>0)&&p.push(x,S,T),(d!==n-1||c<Math.PI)&&p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class s extends en{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new L,h=new L,f=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let b=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(b),h.y=(e+t*Math.cos(m))*Math.sin(b),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let b=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,_=(i+1)*p+g;a.push(b,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _o=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},on=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oi=class extends on{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Sr=class extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function wb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Tb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function lf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var as=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends as{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hr:r=e,o=2*t-n;break;case Ka:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hr:a=e,c=2*n-t;break;case Ka:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,d=-f*m+2*f*b-f*g,_=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*b+.5*g,S=p*m-p*b;for(let P=0;P!==o;++P)r[P]=d*a[u+P]+_*a[l+P]+x*a[c+P]+S*a[h+P];return r}},vo=class extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},Vc=class extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&wb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let b=t[h+g];if(b!==t[f+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Ls;var os=class extends ci{};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=xr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends ci{};yo.prototype.ValueTypeName="color";var zi=class extends ci{};zi.prototype.ValueTypeName="number";var Wc=class extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Mn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ti=class extends ci{InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.DefaultInterpolation=Ls;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends ci{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=xr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends ci{};Gi.prototype.ValueTypeName="vector";var wr=class{constructor(e,t=-1,n,i=hl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Rb(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ci.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Tb(c);c=Uu(c,1,u),l=Uu(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new zi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,b){if(p.length!==0){let m=[],d=[];lf(p,m,d,g),m.length!==0&&b.push(new h(f,m,d))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)p[f[g].morphTargets[b]]=-1;for(let b in p){let m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){let x=f[g];m.push(x.time),d.push(x.morphTarget===b?1:0)}i.push(new zi(".morphTargetInfluence["+b+"]",m,d))}c=p.length*a}else{let p=".bones["+t[h].name+"]";n(Gi,p+".position",f,"pos",i),n(Ti,p+".quaternion",f,"rot",i),n(Gi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ab(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return Gi;case"color":return yo;case"quaternion":return Ti;case"bool":case"boolean":return os;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ab(s.type);if(s.times===void 0){let t=[],n=[];lf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var $i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Xc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Cb=new Xc,Vi=class{constructor(e){this.manager=e!==void 0?e:Cb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di={},qc=class extends Error{constructor(e,t){super(e),this.response=t}},sa=class extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:i});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=Di[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0,b=0,m=new ReadableStream({start(d){_();function _(){h.read().then(({done:x,value:S})=>{if(x)d.close();else{b+=S.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let T=0,y=u.length;T<y;T++){let H=u[T];H.onProgress&&H.onProgress(P)}d.enqueue(S),_()}})}}});return new Response(m)}else throw new qc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{$i.add(e,l);let u=Di[e];delete Di[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Di[e];if(u===void 0)throw this.manager.itemError(e),l;delete Di[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jc=class extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=$r("img");function c(){u(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ls=class extends Vi{constructor(e){super(e)}load(e,t,n,i){let r=new Nn,a=new jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Os=class extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},li=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bc=new Ft,Nu=new L,Fu=new L,ra=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yc=class extends ra{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Mo=class extends Os{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ou=new Ft,jr=new L,xc=new L,Kc=class extends ra{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new an(2,1,1,1),new an(0,1,1,1),new an(3,1,1,1),new an(1,1,1,1),new an(3,0,1,1),new an(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),xc.copy(n.position),xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xc),n.updateMatrixWorld(),i.makeTranslation(-jr.x,-jr.y,-jr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},Kn=class extends Os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jc=class extends ra{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rn=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Eo=class extends Os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var hs=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var So=class extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}};var wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Bu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Bu(){return(typeof performance=="undefined"?Date:performance).now()}var Zc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Mn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Mn.multiplyQuaternionsFlat(e,a,e,t,e,n),Mn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},ml="\\[\\]\\.:\\/",Pb=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",Lb="[^"+ml.replace("\\.","")+"]",Ib=/((?:WC+[\/:])*)/.source.replace("WC",gl),Db=/(WCOD+)?/.source.replace("WCOD",Lb),Ub=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),Nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),Fb=new RegExp("^"+Ib+Db+Ub+Nb+"$"),Ob=["material","materials","bones","map"],Qc=class{constructor(e,t,n){let i=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pb,"")}static parseTrackName(e){let t=Fb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ob.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Qc;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $c=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:lr,endingEnd:lr};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ao,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ad:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case hl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===rd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ll){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=hr,i.endingEnd=hr):(e?i.endingStart=this.zeroSlopeAtStart?hr:lr:i.endingStart=Ka,t?i.endingEnd=this.zeroSlopeAtEnd?hr:lr:i.endingEnd=Ka)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Bb=new Float32Array(1),Wi=class extends Bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let f=i[h],p=f.name,g=u[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let b=t&&t._propertyBindings[h].binding.parsedPath;g=new Zc(rn.create(n,p,b),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new vo(new Float32Array(2),new Float32Array(2),1,Bb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?wr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=hl),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new $c(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?wr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Tr=class{constructor(e,t,n=0,i=1/0){this.ray=new Is(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(ku),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)el(e[i],this,n,t);return n.sort(ku),n}};function ku(s,e){return s.distance-e.distance}function el(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)el(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function bl(s,e){if(e===Ku)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===oa||e===Ro){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===oa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ds=class extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Sl(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Ol(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=hs.extractUrlBase(e);a=hs.resolveURL(l,this.path)}else a=hs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pf){try{a[Vt.KHR_BINARY_GLTF]=new Bl(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Xl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Vt.KHR_MATERIALS_UNLIT:a[h]=new Ml;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[h]=new kl(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[h]=new Hl;break;case Vt.KHR_MESH_QUANTIZATION:a[h]=new zl;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function kb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yl=class{constructor(e){this.parser=e,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],wn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Rn(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kn(u),l.distance=h;break;case"spot":l=new Mo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,fs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ml=class{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){let i=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}},El=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Sl=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}},wl=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Tl=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],wn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Al=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Rl=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],wn),Promise.all(r)}},Cl=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Pl=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],wn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(r)}},Ll=class{constructor(e){this.parser=e,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Dl=class{constructor(e){this.parser=e,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ul=class{constructor(e){this.parser=e,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Nl=class{constructor(e){this.parser=e,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fl=class{constructor(e){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}},Ol=class{constructor(e){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(let g of h){let b=new Ft,m=new L,d=new Mn,_=new L(1,1,1),x=new mo(g.geometry,g.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,S),c.SCALE&&_.fromBufferAttribute(c.SCALE,S),x.setMatrixAt(S,b.compose(m,d,_));for(let S in c)if(S==="_COLOR_0"){let P=c[S];x.instanceColor=new Ns(P.array,P.itemSize,P.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);mn.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},pf="glTF",la=12,hf={JSON:1313821514,BIN:5130562},Bl=class{constructor(e){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,la),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-la,r=new DataView(e,la),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===hf.JSON){let l=new Uint8Array(e,la+a,o);this.content=n.decode(l)}else if(c===hf.BIN){let l=la+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Vl[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Vl[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Rr[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(p){for(let g in p.attributes){let b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}h(p)},o,l,wn,f)})})}},Hl=class{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},zl=class{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}},Io=class extends as{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*l,b=g-l,m=-2*p+3*f,d=p-f,_=1-m,x=d-f+h;for(let S=0;S!==o;S++){let P=a[b+S+o],T=a[b+S+c]*u,y=a[g+S+o],H=a[g+S]*u;r[S]=_*P+x*T+m*y+d*H}return r}},Hb=new Mn,Gl=class extends Io{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Hb.fromArray(r).normalize().toArray(r),r}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uf={9728:En,9729:Sn,9984:Ya,9985:ol,9986:Yr,9987:ns},ff={33071:ti,33648:Ps,10497:Vn},xl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zb={CUBICSPLINE:void 0,LINEAR:Ls,STEP:xr},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new on({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),s.DefaultMaterial}function Bs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Wb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xb(s){let e,t=s.extensions&&s.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vl(t.attributes):e=s.indices+":"+vl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+vl(s.targets[n]);return e}function vl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Wl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var jb=new Ft,Xl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new ls(this.options.manager):this.textureLoader=new So(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Bs(r,o,i),fs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(hs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=xl[i.type],o=Rr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Qt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=xl[i.type],l=Rr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(p&&p!==h){let d=Math.floor(f/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,x=t.cache.get(_);x||(b=new l(o,d*p,i.count*p/u),x=new yr(b,p/u),t.cache.add(_,x)),m=new Ds(x,c,f%p/u,g)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),m=new Qt(b,c,g);if(i.sparse!==void 0){let d=xl.SCALAR,_=Rr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,P=new _(a[1],x,i.sparse.count*d),T=new l(a[2],S,i.sparse.count*c);o!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized));for(let y=0,H=P.length;y<H;y++){let E=P[y];if(m.setX(E,T[y*c]),c>=2&&m.setY(E,T[y*c+1]),c>=3&&m.setZ(E,T[y*c+2]),c>=4&&m.setW(E,T[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=uf[f.magFilter]||Sn,u.minFilter=uf[f.minFilter]||ns,u.wrapS=ff[f.wrapS]||Vn,u.wrapT=ff[f.wrapT]||Vn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Nn(b);m.needsUpdate=!0,f(m)}),t.load(hs.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||qb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ki,qn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Fs,qn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return on}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Vt.KHR_MATERIALS_UNLIT]){let h=i[Vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],wn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Nt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dn);let u=r.alphaMode||_l.OPAQUE;if(u===_l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===_l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ln&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ln&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ln){let h=r.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],wn)}return r.emissiveTexture!==void 0&&a!==ln&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),fs(h,r),t.associations.set(h,{materials:e}),r.extensions&&Bs(i,h,r),h})}createUniqueName(e){let t=rn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return df(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Xb(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=df(new en,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Gb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let b=u[p],m=a[p],d,_=l[p];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new fo(b,_):new dt(b,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?d.geometry=bl(d.geometry,Ro):m.mode===ui.TRIANGLE_FAN&&(d.geometry=bl(d.geometry,oa));else if(m.mode===ui.LINES)d=new Er(b,_);else if(m.mode===ui.LINE_STRIP)d=new Mr(b,_);else if(m.mode===ui.LINE_LOOP)d=new go(b,_);else if(m.mode===ui.POINTS)d=new rs(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Wb(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),fs(d,r),m.extensions&&Bs(i,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Bs(i,h[0],r),h[0];let f=new It;r.extensions&&Bs(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(ca.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new is(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new Ft;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new po(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let p=i.channels[h],g=i.samplers[p.sampler],b=p.target,m=b.node,d=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],b=h[3],m=h[4],d=[];for(let _=0,x=f.length;_<x;_++){let S=f[_],P=p[_],T=g[_],y=b[_],H=m[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let E=n._createAnimationTracks(S,P,T,y,H);if(E)for(let R=0;R<E.length;R++)d.push(E[R])}return new wr(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,jb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new na:l.length>1?u=new It:l.length===1?u=l[0]:u=new mn,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),fs(u,r),r.extensions&&Bs(n,u,r),r.matrix!==void 0){let h=new Ft;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new It;n.name&&(r.name=i.createUniqueName(n.name)),fs(r,n),n.extensions&&Bs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,p]of i.associations)(f instanceof qn||f instanceof Nn)&&h.set(f,p);return u.traverse(f=>{let p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];us[r.path]===us.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(us[r.path]){case us.weights:l=zi;break;case us.rotation:l=Ti;break;case us.position:case us.scale:l=Gi;break;default:switch(n.itemSize){case 1:l=zi;break;case 2:case 3:default:l=Gi;break}break}let u=i.interpolation!==void 0?zb[i.interpolation]:Ls,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+us[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Wl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ti?Gl:Io;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yb(s,e,t){let n=e.attributes,i=new Xn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let u=Wl(Rr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let b=Wl(Rr[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new ni;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function df(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Vl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Yt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),fs(s,e),Yb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vb(s,e.targets,t):s})}function ks(s){let e=new Map,t=new Map,n=s.clone();return mf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)mf(s.children[n],e.children[n],t)}var Do={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kb=new is(-1,1,1,-1,0,1),jl=class extends en{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},Jb=new jl,ps=class{constructor(e){this._mesh=new dt(Jb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ms=class extends ii{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ha=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Uo=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Cr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ze);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ms(Do),this.copyPass.material.blending=Ei,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ha!==void 0&&(a instanceof ha?n=!0:a instanceof Uo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pr=class extends ii{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var gf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var gs=class s extends ii{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new _n(r,a,{type:Wn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new _n(r,a,{type:Wn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=gf;this.highPassUniforms=hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ze(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Do;this.copyUniforms=hi.clone(u.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ln,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new ln,this.fsQuad=new ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ze(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};gs.BlurDirectionX=new Ze(1,0);gs.BlurDirectionY=new Ze(0,1);var bf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Lr=class extends ii{constructor(){super();let e=bf;this.uniforms=hi.clone(e.uniforms),this.material=new _o({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===sn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===il?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===al&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var No=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var _=new Uint8Array(d.length),x=0;x<d.length;++x){var S=d.charCodeAt(x);_[x]=S>96?S-97:S>64?S-39:S+4}for(var P=0,x=0;x<d.length;++x)_[P++]=_[x]<60?n[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,P)}function c(d,_,x,S,P,T){var y=r.exports.sbrk,H=x+3&-4,E=y(H*S),R=y(P.length),te=new Uint8Array(r.exports.memory.buffer);te.set(P,R);var re=d(E,x,S,R,P.length);if(re==0&&T&&T(E,H,S),_.set(te.subarray(E,E+x*S)),y(E-y(0)),re!=0)throw new Error("Malformed buffer data: "+re)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function p(d){var _={object:new Worker(d),pending:0,requests:{}};return _.object.onmessage=function(x){var S=x.data;_.pending-=S.count,_.requests[S.id][S.action](S.value),delete _.requests[S.id]},_}function g(d){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([_],{type:"text/javascript"}),S=URL.createObjectURL(x),P=0;P<d;++P)h[P]=p(S);URL.revokeObjectURL(S)}function b(d,_,x,S,P){for(var T=h[0],y=1;y<h.length;++y)h[y].pending<T.pending&&(T=h[y]);return new Promise(function(H,E){var R=new Uint8Array(x),te=f++;T.pending+=d,T.requests[te]={resolve:H,reject:E},T.object.postMessage({id:te,count:d,size:_,source:R,mode:S,filter:P},[R.buffer])})}function m(d){a.then(function(){var _=d.data;try{var x=new Uint8Array(_.count*_.size);c(r.exports[_.mode],x,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(S){self.postMessage({id:_.id,count:_.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,_,x,S,P){c(r.exports.meshopt_decodeVertexBuffer,d,_,x,S,r.exports[l[P]])},decodeIndexBuffer:function(d,_,x,S){c(r.exports.meshopt_decodeIndexBuffer,d,_,x,S)},decodeIndexSequence:function(d,_,x,S){c(r.exports.meshopt_decodeIndexSequence,d,_,x,S)},decodeGltfBuffer:function(d,_,x,S,P,T){c(r.exports[u[P]],d,_,x,S,r.exports[l[T]])},decodeGltfBufferAsync:function(d,_,x,S,P){return h.length>0?b(d,_,x,u[S],l[P]):a.then(function(){var T=new Uint8Array(d*_);return c(r.exports[u[S]],T,d,_,x,r.exports[l[P]]),T})}}}();function Zb(s,e={}){let t=e.base||"harbor/harbor3d/",n=document.createElement("canvas");n.className="h3dCanvas",s.append(n);let i=document.createElement("div");i.className="h3dLabels",s.append(i);let r=document.createElement("div");r.className="h3dHand",r.textContent="\u{1F446}",s.append(r);let a=matchMedia("(pointer:coarse)").matches,o=new _i({canvas:n,antialias:!1,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio||1,a?1.5:1.75)),o.shadowMap.enabled=!0,o.shadowMap.type=aa,o.toneMapping=Xi,o.toneMappingExposure=1;let c=new vi;c.background=new Ne(745352);let l=new Ne(13624562);c.fog=new ss(l,90,260);let u=new cn(40,1,.5,900);function h(C,B){let j=Math.sin(C*127.1+B*311.7)*43758.5453;return j-Math.floor(j)}function f(C,B){let j=Math.floor(C),ee=Math.floor(B),U=C-j,z=B-ee,be=U*U*(3-2*U),De=z*z*(3-2*z),tt=h(j,ee),nt=h(j+1,ee),qe=h(j,ee+1),Lt=h(j+1,ee+1);return tt+(nt-tt)*be+(qe-tt)*De+(tt-nt-qe+Lt)*be*De}function p(C,B,j=4){let ee=0,U=.5,z=1;for(let be=0;be<j;be++)ee+=U*f(C*z,B*z),z*=2.03,U*=.5;return ee}let g=(C,B,j)=>{let ee=Math.max(j-Math.abs(C-B),0)/j;return Math.max(C,B)+ee*ee*j*.25},b=(C,B,j)=>-g(-C,-B,j),m=(C,B,j)=>{let ee=Math.min(1,Math.max(0,(j-C)/(B-C)));return ee*ee*(3-2*ee)},d=[];function _(C,B){let j=1-Math.hypot(C/50,(B+14)/28);j=g(j,1-Math.hypot((C-27)/15,(B-6)/15),.2),j=g(j,1-Math.hypot((C+27)/15,(B-6)/15),.2);let ee=1-Math.hypot(C/15.5,(B-9)/15);return j=b(j,-ee*.9,.25),j+(p(C*.06,B*.06)-.5)*.22}function x(C,B){let j=_(C,B);if(j<0)return Math.max(-9.5,-.25+j*38);let ee=m(-12,-30,B),U=Math.hypot(C/15.5,(B-9)/15),z=m(0,.1,j)*.9+m(.1,.45,j)*1.3*m(1.05,1.6,U)+m(.3,.75,j)*(1.5+p(C*.08+9,B*.08)*6)*ee;return z+=(p(C*.3,B*.3)-.5)*.25*m(.05,.2,j),z}function S(C,B){let j=x(C,B);for(let ee of d){let U=Math.hypot(C-ee.x,B-ee.z);j+=(ee.h-j)*m(ee.r+4,ee.r,U)}return j}function P(C,B,j){let ee={x:C,z:B,r:j,h:Math.max(1.1,x(C,B))};return d.push(ee),ee.h}let T=e.labels||{},y={adventure:{x:0,z:8,label:8,name:T.adventure},tavern:{x:-26,z:2,label:6,name:T.tavern},hq:{x:-13,z:-20,label:6.5,name:T.hq},vault:{x:15,z:-21,label:5,name:T.vault},market:{x:27,z:0,label:5.5,name:T.market},arena:{x:26,z:13,label:4,name:T.arena}};y.tavern.y=P(y.tavern.x,y.tavern.z,8),y.hq.y=P(y.hq.x,y.hq.z,7),y.vault.y=P(y.vault.x,y.vault.z,6),y.market.y=P(y.market.x,y.market.z,7),y.arena.y=P(y.arena.x,y.arena.z,6),y.adventure.y=0;let H={x:-4.5,z:-3};P(0,-10,6);let E=[[[H.x,-4],[-3,-10],[-10,-14],[-13,-15.5]],[[-3,-10],[6,-12],[12,-17],[15,-17.5]],[[-3,-10],[-12,-8],[-20,-3],[-23,0]],[[6,-12],[16,-8],[23,-3],[25,-1]],[[23,-3],[26,4],[26,8.5]],[[-20,-3],[-24,6],[-21,12]]];function R(C,B,j,ee){let U=ee[0]-j[0],z=ee[1]-j[1],be=C-j[0],De=B-j[1],tt=Math.max(0,Math.min(1,(be*U+De*z)/(U*U+z*z)));return Math.hypot(be-U*tt,De-z*tt)}function te(C,B){let j=1e9;for(let ee of E)for(let U=1;U<ee.length;U++)j=Math.min(j,R(C,B,ee[U-1],ee[U]));return j}let re=220,Se=300,N=new Float32Array(Se*Se);{let C=new Kt(re,re,Se-1,Se-1);C.rotateX(-Math.PI/2);let B=C.attributes.position;for(let ft=0;ft<B.count;ft++){let di=B.getX(ft),Jn=B.getZ(ft),Zn=S(di,Jn);B.setY(ft,Zn),N[ft]=Zn}C.computeVertexNormals();let j=new Float32Array(B.count*3),ee=C.attributes.normal,U=ft=>new Ne(ft),z=U(13214826),be=U(15782810),De=U(16245685),tt=U(7182910),nt=U(10204236),qe=U(4617263),Lt=U(9339250),lt=U(7037272),Wt=U(12160604),vn=U(14271630),Xt=new Ne,xn=new Ne;for(let ft=0;ft<B.count;ft++){let di=B.getX(ft),Jn=B.getZ(ft),Zn=B.getY(ft),Un=ee.getY(ft),Nr=p(di*.12,Jn*.12),Hn=p(di*.5+40,Jn*.5);if(Zn<-.05)Xt.copy(vn).lerp(z,m(-3,0,Zn));else{Xt.copy(z).lerp(be,m(0,.45,Zn)).lerp(De,m(.4,.9,Zn)*Hn*.7);let Fr=m(.85+Nr*.5,1.35+Nr*.5,Zn);xn.copy(tt).lerp(nt,m(.35,.7,Nr)).lerp(qe,m(.55,.8,Hn)*.6),Xt.lerp(xn,Fr);let qi=m(.86,.7,Un)*m(.8,1.6,Zn);xn.copy(Lt).lerp(lt,Hn),Xt.lerp(xn,qi);let pa=te(di,Jn);Xt.lerp(Wt,m(1.6,.9,pa)*(Zn>.3?.9:0)*(.8+Hn*.3))}let zs=.9+Hn*.2;j[ft*3]=Xt.r*zs,j[ft*3+1]=Xt.g*zs,j[ft*3+2]=Xt.b*zs}C.setAttribute("color",new Qt(j,3));let Me=document.createElement("canvas");Me.width=Me.height=256;let Xe=Me.getContext("2d"),ze=Xe.createImageData(256,256);for(let ft=0;ft<256*256;ft++){let di=ft%256,Jn=ft/256|0,Zn=200+(p(di*.09,Jn*.09,3)-.5)*70+(h(di,Jn)-.5)*40;ze.data[ft*4]=ze.data[ft*4+1]=ze.data[ft*4+2]=Zn,ze.data[ft*4+3]=255}Xe.putImageData(ze,0,0);let at=new In(Me);at.wrapS=at.wrapT=Vn,at.repeat.set(70,70),at.colorSpace=Nt;let bt=new on({vertexColors:!0,map:at,roughness:.95,metalness:0});bt.onBeforeCompile=ft=>{ft.uniforms.cs={value:he},ft.uniforms.ct=oe,ft.vertexShader=ft.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp=(modelMatrix*vec4(transformed,1.)).xyz;`),ft.fragmentShader=ft.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;uniform sampler2D cs;uniform float ct;`).replace("#include <map_fragment>",`#include <map_fragment>
float cl=texture2D(cs,vWp.xz*.006+vec2(ct*.004,ct*.0025)).r;diffuseColor.rgb*=mix(1.,.62,smoothstep(.5,.66,cl));`)};let Tt=new dt(C,bt);Tt.receiveShadow=!0,c.add(Tt)}let $=new Uint8Array(Se*Se*4);for(let C=0;C<Se*Se;C++)$[C*4]=Math.max(0,Math.min(255,Math.round((N[C]+10)/20*255))),$[C*4+3]=255;let oe={value:0},he=(()=>{let B=document.createElement("canvas");B.width=B.height=128;let j=B.getContext("2d"),ee=j.createImageData(128,128);for(let z=0;z<128*128;z++){let be=z%128,De=z/128|0,tt=p(be*.06,De*.06,4)*255;ee.data[z*4]=ee.data[z*4+1]=ee.data[z*4+2]=tt,ee.data[z*4+3]=255}j.putImageData(ee,0,0);let U=new In(B);return U.wrapS=U.wrapT=Ps,U})(),ce=new Us($,Se,Se,kn,ai);ce.minFilter=ce.magFilter=Sn,ce.needsUpdate=!0;let le=new L(-.55,.22,-1).normalize();{let C=new gn({side:Pn,depthWrite:!1,fog:!1,uniforms:{sun:{value:le}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun;varying vec3 vp;void main(){float h=vp.y;
      vec3 hor=vec3(.84,.92,.98),mid=vec3(.56,.77,.97),top=vec3(.27,.52,.9);
      vec3 c=mix(hor,mid,smoothstep(0.,.1,h));c=mix(c,top,smoothstep(.1,.6,h));
      float d=max(dot(vp,sun),0.);c+=vec3(1.,.95,.8)*pow(d,8.)*.25+vec3(1.,.98,.9)*pow(d,600.)*3.;
      if(h<0.)c=vec3(.84,.92,.98);gl_FragColor=vec4(c,1.);}`});c.add(new dt(new wi(800,32,16),C))}function xe(){let C=document.createElement("canvas");C.width=256,C.height=128;let B=C.getContext("2d");for(let ee=0;ee<26;ee++){let U=40+Math.random()*176,z=50+Math.random()*40,be=18+Math.random()*30,De=B.createRadialGradient(U,z,0,U,z,be);De.addColorStop(0,"rgba(255,255,255,.75)"),De.addColorStop(1,"rgba(235,242,250,0)"),B.fillStyle=De,B.beginPath(),B.arc(U,z,be,0,7),B.fill()}let j=new In(C);return j.colorSpace=Nt,j}let Te=[];{let C=xe();for(let B=0;B<9;B++){let j=new Yn(new jn({map:C,transparent:!0,depthWrite:!1,fog:!1,color:16777215})),ee=-1.2+B*.3;j.position.set(Math.sin(ee)*420,60+B%3*22,-Math.cos(ee)*420),j.scale.set(220+B%3*60,70+B%2*30,1),c.add(j),Te.push({s:j,a:ee,sp:.002+B%3*.001})}}c.add(new li(15923199,6126165,1.05));let Ve=new Rn(16773336,2.9);Ve.position.set(-45,110,-10),Ve.castShadow=!0,Ve.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(Ve.shadow.camera,{left:-60,right:60,top:50,bottom:-50,near:10,far:220}),Ve.shadow.bias=-5e-4,Ve.shadow.normalBias=.03,c.add(Ve);let se=new Rn(12572927,.5);se.position.set(-40,15,-80),c.add(se);let Z=new ls().load(t+"models/waternormals.jpg");Z.wrapS=Z.wrapT=Vn;let Ee=hi.merge([ke.fog,{t:{value:0},hm:{value:null},wn:{value:null},sunDir:{value:new L},TS:{value:re}}]);Ee.hm.value=ce,Ee.cs={value:he},Ee.wn.value=Z,Ee.sunDir.value.set(-.55,.35,-1).normalize();{let C=new Kt(2400,2400,240,240);C.rotateX(-Math.PI/2);let B=new gn({uniforms:Ee,transparent:!0,fog:!0,depthWrite:!1,vertexShader:`uniform float t;varying vec3 wp;
      #include <fog_pars_vertex>
      void main(){vec3 p=position;float d=length(p.xz);float k=smoothstep(30.,90.,d);
        p.y+=(sin(p.x*.18+t*1.1)*.18+sin(p.z*.23-t*.9)*.14)*(.35+k);
        wp=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`uniform float t,TS;uniform sampler2D hm,wn,cs;uniform vec3 sunDir;varying vec3 wp;
      #include <fog_pars_fragment>
      void main(){
        vec2 uv=wp.xz/TS+.5;float g=texture2D(hm,uv).r*20.-10.;
        if(uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)g=-9.;
        float depth=max(-g,0.);
        vec3 n1=texture2D(wn,wp.xz*.035+vec2(t*.012,t*.008)).rgb*2.-1.;
        vec3 n2=texture2D(wn,wp.xz*.09-vec2(t*.02,-t*.015)).rgb*2.-1.;
        vec3 n=normalize(vec3(n1.x+n2.x*.6,3.2,n1.y+n2.y*.6));
        vec3 v=normalize(cameraPosition-wp);
        vec3 shallow=vec3(.25,.86,.80),mid=vec3(.06,.55,.66),deep=vec3(.03,.24,.42);
        vec3 c=mix(shallow,mid,smoothstep(.2,2.2,depth));c=mix(c,deep,smoothstep(2.,8.,depth));
        float fres=pow(1.-max(dot(v,n),0.),4.);
        c=mix(c,vec3(.78,.9,1.),fres*.5);
        vec3 r=reflect(-v,n);float sp=pow(max(dot(r,normalize(sunDir)),0.),180.);
        c+=vec3(1.,.97,.9)*sp*1.3;
        float shore=1.-smoothstep(0.,.3,depth);
        float fn=texture2D(wn,wp.xz*.25+t*.03).r;
        float band=smoothstep(.55,.95,sin(depth*9.-t*2.2+fn*3.)*.5+.5)*smoothstep(.9,.1,depth);
        float foam=clamp(shore*1.1*(.6+fn*.6)+band*.5,0.,1.);
        c=mix(c,vec3(1.,.98,.94),foam*.85);
        float cl=texture2D(cs,wp.xz*.006+vec2(t*.004,t*.0025)).r;c*=mix(1.,.75,smoothstep(.5,.66,cl));
        float a=mix(.55,1.,smoothstep(.1,5.,depth));a=max(a,foam);
        gl_FragColor=vec4(c,a);
        #include <fog_fragment>
      }`}),j=new dt(C,B);j.renderOrder=2,location.search.includes("nowater")||c.add(j)}let it=new ds;it.setMeshoptDecoder(No);let Et={},yt=C=>Et[C]||(Et[C]=it.loadAsync(t+C));async function Ce(C,B,j,ee={}){let U=await yt(C),z=ee.skinned?ks(U.scene):U.scene.clone(!0);return z.traverse(be=>{be.isMesh&&(be.castShadow=ee.shadow!==!1,be.receiveShadow=!0,be.material&&be.material.map&&(be.material.map.anisotropy=4))}),z.position.set(B,ee.y!==void 0?ee.y:S(B,j),j),z.rotation.y=ee.ry||0,ee.s&&z.scale.setScalar(ee.s),(ee.parent||c).add(z),ee.skinned&&(z.userData.clips=U.animations),z}let He=C=>`models/q/${C}.glb`,V=[],nn=[],Qe={};function ot(C,B,j){let ee=new ln({color:16765802,transparent:!0,opacity:.6,depthWrite:!1,fog:!1,blending:Ln}),U=new dt(new ia(B,B+1,72),ee);U.rotation.x=-Math.PI/2,U.position.y=j,C.add(U);let z=U.clone();z.material=ee.clone(),C.add(z),V.push(be=>{let De=be*.5%1;z.scale.setScalar(1+De*.45),z.material.opacity=.6*(1-De),ee.opacity=.45+Math.sin(be*3)*.15})}function Ke(C,B,j,ee){let U=document.createElement("canvas");U.width=U.height=64;let z=U.getContext("2d"),be=z.createRadialGradient(32,32,0,32,32,32);be.addColorStop(0,"rgba(235,230,225,.85)"),be.addColorStop(1,"rgba(235,230,225,0)"),z.fillStyle=be,z.fillRect(0,0,64,64);let De=new In(U),tt=[];for(let nt=0;nt<10;nt++){let qe=new Yn(new jn({map:De,transparent:!0,depthWrite:!1}));C.add(qe),tt.push(qe)}V.push(nt=>tt.forEach((qe,Lt)=>{let lt=(nt*.22+Lt/tt.length)%1;qe.position.set(B+lt*2.4+Math.sin(lt*5+Lt)*.3,j+lt*7,ee-lt),qe.scale.setScalar(.9+lt*3.2),qe.material.opacity=.6*(1-lt)*Math.min(1,lt*6)}))}function pt(C,B,j,ee=c,U=1){let z=new Kn(16752704,6*U,9,1.7);z.position.set(C,B,j),ee.add(z);let be=new dt(new wi(.18,8,6),new ln({color:16769184}));be.position.copy(z.position),ee.add(be);let De=Math.random()*9;V.push(tt=>{let nt=1+Math.sin(tt*11+De)*.12+Math.sin(tt*23+De)*.08;z.intensity=6*U*nt,be.scale.setScalar(nt)})}function I(C,B,j=1,ee=Math.random()*3){let U=new Wi(C),z=C.userData.clips.find(De=>De.name===B)||C.userData.clips[0],be=U.clipAction(z);return be.timeScale=j,be.play(),U.setTime(ee),U.__off=ee,nn.push(U),{mix:U,a:be}}function w(C,B,j,ee){let U=document.createElement("canvas");U.width=C,U.height=B,j(U.getContext("2d"),C,B);let z=new In(U);return z.colorSpace=Nt,z.anisotropy=4,ee&&(z.wrapS=z.wrapT=Vn,z.repeat.set(ee[0],ee[1])),z}let v=w(256,128,(C,B,j)=>{C.fillStyle="#6f6455",C.fillRect(0,0,B,j);for(let ee=0;ee<4;ee++)for(let U=-1;U<6;U++){let z=ee%2*24,be=150+(U*7+ee*13+20)%6*11;C.fillStyle=`rgb(${be},${be-12},${be-32})`,C.fillRect(U*48+z+2,ee*32+2,44,28),C.fillStyle="#ffffff22",C.fillRect(U*48+z+2,ee*32+2,44,4)}},[12,1]),K=w(128,128,(C,B,j)=>{for(let ee=0;ee<8;ee++){let U=120+ee*37%5*12;C.fillStyle=`rgb(${U},${U*.66|0},${U*.4|0})`,C.fillRect(0,ee*16,B,15),C.fillStyle="#2a170a",C.fillRect(0,ee*16+15,B,1),C.fillRect(ee*53%128,ee*16,2,15)}},[1,6]),fe=w(128,64,C=>{for(let B=0;B<8;B++)C.fillStyle=B%2?"#f4e7cb":"#b52a2c",C.fillRect(B*16,0,16,64);C.fillStyle="#00000030",C.fillRect(0,54,128,10)}),ge=w(128,192,(C,B,j)=>{C.fillStyle="#8f1a1d",C.fillRect(0,0,B,j),C.fillStyle="#e9b85e",C.fillRect(0,0,B,8),C.fillRect(0,j-8,B,8),C.fillStyle="#f3ead8",C.beginPath(),C.arc(64,82,30,0,7),C.fill(),C.fillRect(46,100,36,22),C.fillStyle="#8f1a1d",C.beginPath(),C.arc(52,82,8,0,7),C.arc(76,82,8,0,7),C.fill(),C.strokeStyle="#f3ead8",C.lineWidth=9,C.lineCap="round",C.beginPath(),C.moveTo(26,128),C.lineTo(102,168),C.moveTo(102,128),C.lineTo(26,168),C.stroke()}),_e=new on({color:7028770,roughness:.85}),Le=new on({map:v,roughness:.92,side:dn});function we(C,B,j,ee,U,z,be={}){let De=new dt(C,B);return De.position.set(j,ee,U),De.castShadow=be.cast!==!1,De.receiveShadow=!0,be.rx&&(De.rotation.x=be.rx),be.ry&&(De.rotation.y=be.ry),be.rz&&(De.rotation.z=be.rz),z.add(De),De}function je(C,B,j,ee,U,z=1){let be=we(new Kt(.9*z,1.35*z),new on({map:ge,side:dn,roughness:.8}),B,j,ee,C,{ry:U}),De=Math.random()*6;return V.push(tt=>{be.rotation.x=Math.sin(tt*2+De)*.06}),be}function st(C,B=1.05,j=2.1){for(let ee=1;ee<C.length;ee++){let[U,z]=C[ee-1],[be,De]=C[ee],tt=Math.hypot(be-U,De-z),nt=Math.atan2(be-U,De-z),qe=K.clone();qe.needsUpdate=!0,qe.repeat.set(1,tt/1.6),we(new bn(j,.18,tt),new on({map:qe,roughness:.9}),(U+be)/2,B,(z+De)/2,c,{ry:nt});for(let lt=0;lt<=Math.ceil(tt/2.2);lt++){let Wt=lt/Math.ceil(tt/2.2),vn=U+(be-U)*Wt,Xt=z+(De-z)*Wt;for(let xn of[-1,1]){let Me=Math.cos(nt)*xn*(j/2),Xe=-Math.sin(nt)*xn*(j/2);we(new $t(.12,.14,3.2,8),_e,vn+Me,B-1.2,Xt+Xe,c),we(new $t(.1,.1,.9,8),_e,vn+Me,B+.5,Xt+Xe,c)}}let Lt=lt=>we(new bn(.08,.08,tt),_e,(U+be)/2+Math.cos(nt)*lt*(j/2),B+.9,(z+De)/2-Math.sin(nt)*lt*(j/2),c,{ry:nt});Lt(-1),Lt(1)}}async function wt(C,B,j,ee){let U=new It;U.position.set(B,0,j),U.rotation.y=ee,C.add(U);for(let[nt,qe]of[[-1.4,-.8],[1.4,-.8],[-1.4,.8],[1.4,.8]])we(new $t(.08,.09,2.6,6),_e,nt,1.3,qe,U);we(new bn(2.9,.9,1.1),new on({map:K,roughness:.9}),0,.45,.3,U);let z=we(new Kt(3.4,2.2,8,1),new on({map:fe,side:dn,roughness:.8}),0,2.6,0,U,{rx:-Math.PI/2+.32}),be=z.geometry.attributes.position;for(let nt=0;nt<be.count;nt++)be.setZ(nt,Math.sin((be.getX(nt)+1.7)/3.4*Math.PI*4)*.05);be.needsUpdate=!0,z.geometry.computeVertexNormals();let De=we(new Kt(3.4,.35),new on({map:fe,side:dn}),0,2.08,1.15,U),tt=[14698540,15902001,10338874,14169148];for(let nt=0;nt<9;nt++)we(new wi(.16,8,6),new on({color:tt[nt%4],roughness:.6}),-1.1+nt%5*.5,.98,.1+(nt/5|0)*.35,U);return U}async function ve(){let C=new It;C.position.set(y.adventure.x,0,y.adventure.z),c.add(C),Qe.adventure=C;let B=await Ce(He("Ship_Large"),0,0,{parent:C,y:.3,ry:.08,s:1.5});B.traverse(Me=>{if(Me.isMesh&&Me.material.map){let Xe=Me.material.map.image,ze=document.createElement("canvas");ze.width=Xe.width,ze.height=Xe.height;let at=ze.getContext("2d");at.drawImage(Xe,0,0);let bt=ze.width/32;at.fillStyle="#9c1c20",at.fillRect(12*bt,0,bt,bt),at.fillStyle="#6e1216",at.fillRect(5*bt,0,bt,bt);let Tt=new In(ze);Tt.flipY=!1,Tt.colorSpace=Nt,Me.material=Me.material.clone(),Me.material.map=Tt}}),V.push(Me=>{B.position.y=.35+Math.sin(Me*1)*.22,B.rotation.z=Math.sin(Me*.8)*.03,B.rotation.x=Math.sin(Me*.6)*.015}),ot(C,13,.25);let j=new ln({color:16769952,transparent:!0,opacity:.1,depthWrite:!1,side:dn,blending:Ln,fog:!1}),ee=new dt(new $t(4,8,30,40,1,!0),j);ee.position.y=15,V.push(Me=>{j.opacity=.07+Math.sin(Me*2)*.03});for(let[Me,Xe,ze,at,bt]of[["Characters_Captain_Barbarossa",-1.5,.3,.4,"Wave"],["Characters_Anne",3.5,-.6,-.3,"Idle"],["Characters_Mako",-6.2,.2,1.2,"Yes"]]){let Tt=await Ce(He(Me),Xe,ze,{parent:B,skinned:!0,y:2.05,ry:at,s:.8});I(Tt,bt)}st([[H.x,-6],[H.x,3.2]]),st([[-19,1.5],[-12,3.4],[-5.6,3.4]]),st([[19,1.5],[12,3.4],[6,3.4]]);for(let[Me,Xe]of[[-12,3.4],[12,3.4],[H.x,2.5]])we(new $t(.09,.09,2,6),_e,Me+1.05,2.1,Xe+.9,c),pt(Me+1.05,3.2,Xe+.9,c,.6);for(let[Me,Xe]of[[-6,-3.5],[-3,-1]])pt(Me,2.6,Xe);await Ce(He("Prop_Barrel"),-6.2,-2,{y:1.25}),await Ce(He("Prop_Barrel"),-6.6,-1.2,{y:1.25,ry:1}),await Ce(He("Prop_Bucket_Fishes"),-2.6,-4,{y:1.25});let U=new It;U.position.set(y.tavern.x,y.tavern.y,y.tavern.z),c.add(U),Qe.tavern=U,await Ce(He("Environment_House1"),0,0,{parent:U,y:0,ry:.55,s:.9}),Ke(U,-2.5,7.5,-1),pt(3.5,2.2,2.6,U,.8),pt(-4,2.2,3.6,U,.8);for(let[Me,Xe]of[[2.5,5.2],[5.5,3.2],[-.8,6.4]]){we(new $t(.75,.75,.1,16),_e,Me,.95,Xe,U),we(new $t(.12,.2,.9,8),_e,Me,.45,Xe,U),await Ce(He("Prop_Bottle_2"),Me+.2,Xe,{parent:U,y:1,s:.6}),await Ce(He("Prop_Barrel"),Me-1.1,Xe+.3,{parent:U,y:0,s:.8}),await Ce(He("Prop_Barrel"),Me+1.1,Xe-.2,{parent:U,y:0,s:.8});let ze=new Kn(16756832,2.5,4,2);ze.position.set(Me,1.4,Xe),U.add(ze)}{let Me=new It;U.add(Me);let Xe=new L(-3.5,3.2,3.8),ze=new L(7,3.2,1.5);we(new $t(.08,.08,3.3,6),_e,ze.x,1.6,ze.z,U);for(let at=0;at<=14;at++){let bt=at/14,Tt=Xe.clone().lerp(ze,bt);Tt.y-=Math.sin(bt*Math.PI)*.7;let ft=new dt(new wi(.09,6,4),new ln({color:16767120}));ft.position.copy(Tt),Me.add(ft)}}for(let[Me,Xe,ze,at,bt]of[["Characters_Henry",1.4,6.2,"Yes",2.4],["Characters_Mako",6.4,4.2,"Idle",3.9]]){let Tt=await Ce(He(Me),Xe,ze,{parent:U,skinned:!0,y:0,ry:bt,s:1.35});I(Tt,at)}let z=new It;z.position.set(y.hq.x,y.hq.y,y.hq.z),c.add(z),Qe.hq=z,await Ce(He("Environment_House3"),0,0,{parent:z,y:0,ry:.25,s:1.25}),await Ce("models/kenney/pirate/flag-pirate-high.glb",-5.2,2.6,{parent:z,y:0,s:1.2}),await Ce("models/kenney/pirate/flag-pirate-high.glb",5.2,3.4,{parent:z,y:0,s:1.2}),await Ce(He("Prop_Cannon"),-3,4.4,{parent:z,y:.4,ry:.4}),await Ce(He("Prop_Cannon"),3.2,4.8,{parent:z,y:.4,ry:.1}),pt(0,2.5,3.2,z,.8),je(z,-2,2.6,3.4,0),je(z,2.2,2.6,3.6,0);let be=new It;be.position.set(y.vault.x,y.vault.y,y.vault.z),c.add(be),Qe.vault=be,await Ce(He("Environment_Skulls"),0,0,{parent:be,y:1.2,ry:-.35,s:1.3}),await Ce(He("Prop_Chest_Gold"),-.5,4.2,{parent:be,y:0,ry:-.3}),await Ce(He("Prop_GoldBag"),1.6,4.6,{parent:be,y:0}),await Ce(He("Prop_Coins"),-2.2,4.8,{parent:be,y:0}),await Ce(He("Prop_Coins"),.9,5.6,{parent:be,y:0,ry:1});let De=new Kn(16760896,10,10,1.6);De.position.set(0,2,5),be.add(De),V.push(Me=>{De.intensity=9+Math.sin(Me*4)*3}),vt(be,0,1,4.8);let tt=new It;tt.position.set(y.market.x,y.market.y,y.market.z),c.add(tt),Qe.market=tt,await Ce(He("Environment_House2"),3.5,-3,{parent:tt,y:0,ry:-.5,s:.9});for(let[Me,Xe,ze]of[[-4,1.5,.5],[-.3,3.2,.15],[3.6,3.8,-.25]])await wt(tt,Me,Xe,ze);let nt=await Ce(He("Characters_Anne"),-.3,2.2,{parent:tt,skinned:!0,y:0,ry:0,s:1.35});I(nt,"Wave");for(let[Me,Xe,ze]of[["Prop_Bucket_Fishes",-4.6,3],["Prop_Barrel",4.6,2],["Prop_Fish_Tuna",-1.3,4.6]])await Ce(He(Me),Xe,ze,{parent:tt,y:0,ry:Math.random()*6});let qe=new It;qe.position.set(y.arena.x,y.arena.y,y.arena.z),c.add(qe),Qe.arena=qe;{let ze=Math.PI*1.5+.4,at=Math.PI*2-.8;we(new bo(6.6-.3,48),new on({color:14925962,roughness:1}),0,.06,0,qe,{rx:-Math.PI/2,cast:!1}),we(new $t(6.6,6.6+.35,2.6,56,1,!0,ze,at),Le,0,1.3,0,qe),we(new $t(6.6-.55,6.6-.55,1.4,56,1,!0,ze,at),Le,0,.7,0,qe);let bt=we(new ia(6.6-.55,6.6+.02,56,1,ze-Math.PI/2,at),new on({color:10260346,roughness:.9,side:dn}),0,2.6,0,qe,{rx:-Math.PI/2});bt.rotation.z=Math.PI;for(let Tt=0;Tt<30;Tt++){let ft=ze+at*(Tt+.5)/30;we(new bn(.55,.55,.45),Le,Math.sin(ft)*(6.6-.2),2.85,Math.cos(ft)*(6.6-.2),qe,{ry:ft})}for(let Tt of[ze+.05,ze+at-.05])we(new bn(.9,3.6,.9),Le,Math.sin(Tt)*(6.6-.2),1.8,Math.cos(Tt)*(6.6-.2),qe),pt(Math.sin(Tt)*(6.6-.2),3.9,Math.cos(Tt)*(6.6-.2),qe,.9);for(let Tt=0;Tt<6;Tt++){let ft=ze+at*(Tt+.5)/6;je(qe,Math.sin(ft)*(6.6+.4),1.5,Math.cos(ft)*(6.6+.4),ft,1.1)}for(let Tt of[ze+at*.3,ze+at*.7])pt(Math.sin(Tt)*(6.6-.2),3.3,Math.cos(Tt)*(6.6-.2),qe,.6)}let Lt=await Ce(He("Characters_Sharky"),-1.3,0,{parent:qe,skinned:!0,y:.06,ry:Math.PI/2,s:1.35});I(Lt,"Sword",1,0);let lt=await Ce(He("Characters_Henry"),1.3,0,{parent:qe,skinned:!0,y:.06,ry:-Math.PI/2,s:1.35});I(lt,"Sword",1,.45);for(let[Me,Xe,ze]of[["Characters_Skeleton","Yes",1.9],["Characters_Anne","Wave",2.5],["Characters_Mako","Yes",3.6]]){let at=ze,bt=await Ce(He(Me),Math.cos(at)*4.6,Math.sin(at)*4.6,{parent:qe,skinned:!0,y:0,ry:-at-Math.PI/2,s:1.35});I(bt,Xe)}let Wt=(()=>{let Me=7;return()=>(Me=Me*16807%2147483647)/2147483647})(),vn=0;for(let Me=0;Me<400&&vn<46;Me++){let Xe=(Wt()-.5)*110,ze=(Wt()-.5)*70-6,at=S(Xe,ze),bt=_(Xe,ze);if(at<.5||bt>.55||te(Xe,ze)<2.5||Object.values(y).some(ft=>Math.hypot(ft.x-Xe,ft.z-ze)<(ft===y.adventure?15:9)))continue;let Tt=await Ce(He("Environment_PalmTree_"+(1+Me%3)),Xe,ze,{ry:Wt()*6,s:1.1+Wt()*.6});Ct(Tt),vn++}for(let[Me,Xe,ze,at,bt]of[["Environment_Cliff2",-40,-26,.5,1.6],["Environment_Cliff3",38,-28,2,1.7],["Environment_Cliff4",0,-36,1,1.8],["Environment_Cliff1",-48,-6,1,1.4],["Environment_Cliff1",49,-8,3,1.3],["Environment_Cliff4",-60,30,1,1.4],["Environment_Cliff2",64,26,2.4,1.3]])await Ce(He(Me),Xe,ze,{ry:at,s:bt,y:Math.max(-1,S(Xe,ze)-1)});for(let Me=0;Me<26;Me++){let Xe=Wt()*6.28,ze=Math.cos(Xe)*(36+Wt()*18),at=Math.sin(Xe)*(22+Wt()*12)-8,bt=S(ze,at);bt>1||bt<-1.5||await Ce(He("Environment_Rock_"+(1+Me%5)),ze,at,{ry:Wt()*6,s:1.5+Wt()*2.5,y:bt-.2})}await Ce(He("Environment_LargeBones"),-15,13,{ry:.8,s:.8,y:S(-15,13)-.3}),await Ce(He("Environment_Sawmill"),-20,-14,{ry:.5,s:1.6});for(let[Me,Xe]of[[-3,-10],[6,-12],[-12,-8],[16,-8],[-20,-3],[23,-3]]){let ze=S(Me+1.4,Xe);await Ce("models/kenney/town/lantern.glb",Me+1.4,Xe,{s:2.4}),pt(Me+1.4,ze+3.3,Xe,c,.55)}await Ce("models/kenney/town/fountain-round.glb",0,-10,{s:2.2});for(let[Me,Xe,ze,at,bt]of[["Environment_Cliff2",-150,-170,.4,5],["Environment_Cliff3",-60,-210,1.4,4],["Environment_Cliff4",110,-190,2.2,5.5],["Environment_Cliff1",190,-130,.8,4]])await Ce(He(Me),Xe,ze,{ry:at,s:bt,y:-2});for(let[Me,Xe,ze]of[[70,.03,0],[86,.022,2.6]]){let at=await Ce(He("Ship_Small"),0,0,{y:0,s:1.6});V.push(bt=>{let Tt=ze+bt*Xe;at.position.set(Math.cos(Tt)*Me,Math.sin(bt*1.3+ze)*.2,10+Math.sin(Tt)*Me*.5),at.rotation.y=-Tt+Math.PI,at.rotation.z=Math.sin(bt+ze)*.05})}{let Me=await Ce(He("Ship_Large"),0,0,{y:0,s:1.1});V.push(Xe=>{let ze=3.8+Xe*.015;Me.position.set(Math.cos(ze)*110,Math.sin(Xe)*.2-.2,-60+Math.sin(ze)*40),Me.rotation.y=-ze+Math.PI})}for(let[Me,Xe]of[[0,22],[2.7,27]]){let ze=await Ce("models/kenney/pirate/boat-row-small.glb",0,Xe,{y:0,s:1.1});V.push(at=>{let bt=(at*.03+Me*.2)%1;ze.position.x=-45+bt*90,ze.position.y=Math.sin(at*2+Me)*.1-.15,ze.rotation.y=Math.PI/2,ze.rotation.z=Math.sin(at*1.7)*.05})}{let Me=await Ce(He("Characters_Shark"),0,0,{skinned:!0,y:-.6,s:1.2});I(Me,"Swim"),V.push(Xe=>{let ze=Xe*.25;Me.position.set(14+Math.cos(ze)*9,-.55,26+Math.sin(ze)*5),Me.rotation.y=-ze})}for(let Me=0;Me<3;Me++){let Xe=await Ce(He("Prop_Fish_Mackerel"),0,0,{y:-5,s:.7,shadow:!1}),ze=Me*2.3,at=[-14,10,30][Me],bt=[24,30,22][Me];V.push(Tt=>{let ft=(Tt+ze)%5/1.1;if(ft>1){Xe.visible=!1;return}Xe.visible=!0,Xe.position.set(at+ft*3,-.3+Math.sin(ft*Math.PI)*1.8,bt),Xe.rotation.z=(.5-ft)*2.2})}let Xt=["Characters_Henry","Characters_Anne","Characters_Mako","Characters_Sharky","Characters_Captain_Barbarossa","Characters_Skeleton"],xn=0;for(let Me of E)for(let Xe=0;Xe<2;Xe++)await Ot(He(Xt[xn++%Xt.length]),Me,xn);for(let[Me,Xe,ze,at,bt]of[["Characters_Henry",-1.5,-13,"Idle",0],["Characters_Anne",.2,-13.8,"Yes",2.6],["Characters_Mako",-22,4.6,"No",1],["Characters_Sharky",-20.6,5.8,"Idle",3.8],["Characters_Skeleton",13,-15,"Wave",.3]]){let Tt=await Ce(He(Me),Xe,ze,{skinned:!0,ry:bt,s:1.35});I(Tt,at)}rt()}async function Ot(C,B,j){let ee=await Ce(C,B[0][0],B[0][1],{skinned:!0,s:1.35}),{a:U}=I(ee,"Walk",1.15),z=[],be=0;for(let nt=1;nt<B.length;nt++){let qe=B[nt-1],Lt=B[nt],lt=Math.hypot(Lt[0]-qe[0],Lt[1]-qe[1]);z.push({a:qe,b:Lt,l:lt}),be+=lt}let De=1.3+j%3*.2,tt=j*9.7;V.push(nt=>{let qe=(nt*De+tt)%(2*be),Lt=qe>be;Lt&&(qe=2*be-qe);for(let lt of z){if(qe<=lt.l){let Wt=qe/lt.l,vn=lt.a[0]+(lt.b[0]-lt.a[0])*Wt,Xt=lt.a[1]+(lt.b[1]-lt.a[1])*Wt;ee.position.set(vn+(Lt?.7:-.7),S(vn,Xt),Xt);let xn=lt.b[0]-lt.a[0],Me=lt.b[1]-lt.a[1];Lt&&(xn=-xn,Me=-Me),ee.rotation.y=Math.atan2(xn,Me);break}qe-=lt.l}})}function Ct(C){let B=Math.random()*6;V.push(j=>{C.rotation.z=Math.sin(j*.9+B)*.025,C.rotation.x=Math.sin(j*.7+B)*.02})}function vt(C,B,j,ee){let U=new en,z=40,be=new Float32Array(z*3);U.setAttribute("position",new Qt(be,3));let De=new ki({color:16771488,size:.25,transparent:!0,depthWrite:!1,blending:Ln}),tt=new rs(U,De);C.add(tt),V.push(nt=>{for(let qe=0;qe<z;qe++){let Lt=(nt*.35+qe/z)%1,lt=qe*2.4;be[qe*3]=B+Math.cos(lt)*(1+qe%3*.6),be[qe*3+1]=j+Lt*3.5,be[qe*3+2]=ee+Math.sin(lt)*(1+qe%3*.6)}U.attributes.position.needsUpdate=!0,De.opacity=.9})}function rt(){let C=new en;C.setAttribute("position",new qt([-.7,.15,0,-.1,0,.05,.1,0,.05,.7,.15,0,0,0,-.25,0,0,.3],3)),C.setIndex([0,1,4,1,5,4,2,3,4,2,4,5]),C.computeVertexNormals();let B=new Sr({color:15262942,side:dn});for(let j=0;j<9;j++){let ee=new dt(C.clone(),B);ee.scale.setScalar(.9),c.add(ee);let U=14+j*4,z=20+j%3*3,be=j*1.3,De=.2+j%4*.04,tt=ee.geometry.attributes.position;V.push(nt=>{let qe=be+nt*De;ee.position.set(Math.cos(qe)*U,z+Math.sin(nt+j)*1,-4+Math.sin(qe)*U*.6),ee.rotation.y=-qe;let Lt=Math.sin(nt*7+j)*.35;tt.setY(0,.15+Lt),tt.setY(3,.15+Lt),tt.needsUpdate=!0})}}let Ye=new _n(1,1,{samples:4,type:Wn}),mt=new Cr(o,Ye);mt.addPass(new Pr(c,u));let Ut=new gs(new Ze(256,256),.45,.55,.82);mt.addPass(Ut),mt.addPass(new Lr);let Ht=new ms({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;
    float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.16);c=(c-.5)*1.05+.5;
    c*=vec3(1.,1.,1.01);float v=smoothstep(.95,.3,length((vUv-.5)*vec2(1.25,1.)));c*=mix(.7,1.,v);gl_FragColor=vec4(c,1.);}`});mt.addPass(Ht);let St={adventure:"\u2693",hq:"\u2605",vault:"\u25C6",tavern:"\u{1F37A}",market:"$",arena:"\u2694"},Pe={};function D(C){return C==="adventure"?`<i>${St[C]}</i><b>${y[C].name||""}</b><em>\u25B6 ${T.play||"PLAY"}</em>`:`<i>${St[C]}</i><b>${y[C].name||""}</b>`}for(let C in y){let B=document.createElement("button");B.className="lbl"+(C==="adventure"?" main":""),B.dataset.id=C,B.innerHTML=C==="adventure"?`<i>${St[C]}</i><b>${y[C].name||""}</b><em>\u25B6 ${T.play||"PLAY"}</em>`:`<i>${St[C]}</i><b>${y[C].name||""}</b>`,B.setAttribute("aria-label",y[C].name||C),B.onclick=j=>{j.stopPropagation(),ct(C)},i.append(B),Pe[C]=B}let Fe=new L,Ie=1,ht=1;function ut(){var U;let C=((U=e.avoid)==null?void 0:U.call(e))||[],B=Object.keys(Pe).map(z=>({id:z,el:Pe[z],width:Pe[z].offsetWidth||90,height:Pe[z].offsetHeight||30})),j=[];for(let z of B){let be=y[z.id];Fe.set(be.x,(be.y||0)+be.label,be.z).project(u);let De=z.width/2+6,tt=Math.min(Ie-De,Math.max(De,(Fe.x*.5+.5)*Ie)),nt=Math.max(z.height+4,(-Fe.y*.5+.5)*ht),qe=0;for(let Lt of C){let lt=tt-De,Wt=tt+De,vn=nt-z.height,Xt=nt;Wt>Lt.left&&lt<Lt.right&&Xt>Lt.top&&vn<Lt.bottom&&(qe=Lt.bottom-vn+4)}j.push({...z,x:tt,y:nt+qe})}for(let z of j){let be=`translate(${z.x}px,${z.y}px) translate(-50%,-100%)`;z.el.style.transform!==be&&(z.el.style.transform=be)}let ee=j.find(z=>z.id==="adventure");ee&&(r.style.left=ee.x+ee.width/2-24+"px",r.style.top=ee.y-14+"px"),r.style.display=ie?"none":""}let zt=new L(0,0,-13),jt=0,W=0,ne=0,ie=null,X=0,pe=null,Ue=0,We=()=>pe!==null?pe*1e3:performance.now(),Ae=C=>C<.5?4*C*C*C:1-Math.pow(-2*C+2,3)/2;function xt(C){let B=e.skipIntro?1:Math.min(1,C/4.5),j=Ae(B),ee=150-88*j,U=ca.lerp(88,24,j)*Math.PI/180,z=(1-j)*.6+W*.45+(B>=1?Math.sin((C-4.5)*.15)*.06:0),be=zt.x,De=zt.y,tt=zt.z,nt=ee;if(ie){let qe=y[ie],Lt=Ae(Math.min(1,(We()-X)/1e3));be+=(qe.x-be)*Lt*.6,tt+=(qe.z-tt)*Lt*.6,De+=((qe.y||0)-De)*Lt*.6,nt=ee*(1-.3*Lt)}return u.position.set(be+Math.sin(z)*Math.cos(U)*nt,De+Math.sin(U)*nt,tt+Math.cos(z)*Math.cos(U)*nt),u.lookAt(be,De,tt),B}function ct(C){ie=C,X=We(),$e&&(i.querySelectorAll(".lbl").forEach(B=>B.classList.toggle("sel",B.dataset.id===C)),ct.until=We()+1400,clearTimeout(ct.tm),ct.tm=setTimeout(()=>{var B;Oe||(B=e.onSelect)==null||B.call(e,C)},520))}let Pt=new Tr,Jt=new Ze,un=null,kt=C=>{un={x:C.clientX,d:ne}},Zt=C=>{un&&(ne=ca.clamp(un.d-(C.clientX-un.x)/Ie*2,-1,1))},M=C=>{if(un&&Math.abs(C.clientX-un.x)<8){let B=s.getBoundingClientRect();Jt.set((C.clientX-B.left)/Ie*2-1,-(C.clientY-B.top)/ht*2+1),Pt.setFromCamera(Jt,u);let j=Pt.intersectObjects(Object.values(Qe),!0);if(j.length){let ee=j[0].object;for(;ee&&!Object.values(Qe).includes(ee);)ee=ee.parent;let U=Object.keys(Qe).find(z=>Qe[z]===ee);U&&ct(U)}}un=null};n.addEventListener("pointerdown",kt),addEventListener("pointermove",Zt),addEventListener("pointerup",M);function F(C=!1){let B=Math.max(1,s.clientWidth),j=Math.max(1,s.clientHeight);Ie=B,ht=j,o.setSize(B,j,!1),mt.setSize(B,j),Ut.resolution.set(B/2,j/2),u.aspect=B/j,u.fov=B/j>1.6?47:62,u.updateProjectionMatrix(),C&&$e&&ut()}F();let O=()=>{!Oe&&s.clientWidth&&s.clientHeight&&F(!0)};addEventListener("resize",O);let q=typeof ResizeObserver=="function"?new ResizeObserver(O):null;q==null||q.observe(s);function J(){let C=Math.max(0,(We()-jt)/1e3),B=Math.min(Math.max(C-Ue,0),.1);Ue=C,W+=(ne-W)*.08,(s.clientWidth!==Ie||s.clientHeight!==ht)&&F(),ie&&We()>ct.until&&(ie=null,i.querySelectorAll(".lbl").forEach(U=>U.classList.remove("sel")));let j=xt(C);Ee.t.value=C,oe.value=C;let ee=u.position.distanceTo(zt);c.fog.near=ee*2,c.fog.far=ee*7;for(let U of Te)U.a+=U.sp*B,U.s.position.x=Math.sin(U.a)*420,U.s.position.z=-Math.cos(U.a)*420;for(let U of V)U(C);for(let U of nn)pe!==null?U.setTime(C+(U.__off||0)):U.update(B);ut(),s.classList.toggle("h3dReady",$e&&j>=.85),mt.render()}let k={getDelta(){return 0}},ye=0,Re=!1,Oe=!1,$e=!1;function gt(){ye=0,!(Re||Oe)&&(pe===null&&J(),ye=requestAnimationFrame(gt))}return{loaded:ve().then(()=>{Oe||($e=!0,jt=performance.now(),s.classList.add("h3dLoaded"),!ye&&!Re&&(ye=requestAnimationFrame(gt)))}),pause(){Re=!0,cancelAnimationFrame(ye),ye=0},resume(){Oe||(Re=!1,e.skipIntro=!0,O(),k.getDelta(),!ye&&$e&&(ye=requestAnimationFrame(gt)))},select:ct,step(C){pe=C,J()},setLabels(C){Object.assign(T,C||{});for(let B in Pe)y[B].name=T[B],Pe[B].innerHTML=D(B),Pe[B].setAttribute("aria-label",T[B]||B)},get state(){return{ready:$e,paused:Re,disposed:Oe,focus:ie,labels:Object.keys(Pe).length}},dispose(){var C,B;Oe=!0,cancelAnimationFrame(ye),ye=0,clearTimeout(ct.tm),n.removeEventListener("pointerdown",kt),removeEventListener("pointermove",Zt),removeEventListener("pointerup",M),removeEventListener("resize",O),q==null||q.disconnect(),c.traverse(j=>{j.geometry&&j.geometry.dispose();let ee=j.material;ee&&(Array.isArray(ee)?ee:[ee]).forEach(U=>{for(let z in U)U[z]&&U[z].isTexture&&U[z].dispose();U.dispose()})}),(C=mt.dispose)==null||C.call(mt),Ye.dispose(),o.dispose(),(B=o.forceContextLoss)==null||B.call(o),n.remove(),i.remove(),r.remove()}}}function Qb(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}window.PirateHarbor3D={create:Zb,supported:Qb,version:1};function Fo(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function $b(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=Fo(t,n),l=Fo(t+1,n),u=Fo(t,n+1),h=Fo(t+1,n+1);return c+(l-c)*a+(u-c)*o+(c-l-u+h)*a*o}function Ir(s,e,t=4){let n=0,i=.5,r=1;for(let a=0;a<t;a++)n+=i*$b(s*r,e*r),r*=2.03,i*=.5;return n}var bs=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},ua=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Yl=(s,e,t)=>s+(e-s)*t;function Dr(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new In(t);return r.colorSpace=Nt,r}var Hs={sea:[[.06,.9,1.25,1,.2],[.09,-.6,1.05,.45,.35],[.21,.3,1.9,.22,-.8],[.035,.2,.7,1.4,.1]],shore:[[.12,.5,1.1,.12,.2],[.2,-.4,1.4,.07,.9],[.05,.1,.6,.18,.1]]};function Ur(s,e,t,n){let i=0;for(let[r,a,o,c,l]of s)i+=Math.sin((e*a+t*(1-Math.abs(a)))*r*6.283+n*o+l)*c;return i}function ex(s,e={}){let t=e.base||"harbor/harbor3d/",n=matchMedia("(pointer:coarse)").matches,i=document.createElement("canvas");i.className="st3d",i.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",s.prepend(i);let r=new _i({canvas:i,antialias:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,n?1.5:1.75)),r.shadowMap.enabled=!0,r.shadowMap.type=aa,r.toneMapping=Xi,r.toneMappingExposure=1;let a=new vi,o=new cn(42,1,.3,2e3),c=new ds;c.setMeshoptDecoder(No);let l={},u=W=>l[W]||(l[W]=c.loadAsync(t+W)),h=W=>`models/q/${W}.glb`,f=new It;a.add(f);let p=!1,g=[],b=[],m=null,d=0,_=0,x=!1,S=!1,P=0,T=performance.now(),y={pos:new L(0,30,80),look:new L,tpos:new L(0,30,80),tlook:new L,rate:1.4},H=0,E=0,R=[],te=Dr([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),re=Dr([[0,"rgba(200,200,205,.85)"],[.6,"rgba(150,150,160,.35)"],[1,"rgba(120,120,130,0)"]]),Se=Dr([[0,"rgba(40,36,36,.9)"],[.6,"rgba(30,28,28,.4)"],[1,"rgba(20,20,20,0)"]]),N=Dr([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),$=Dr([[0,"rgba(235,245,255,1)"],[1,"rgba(200,225,245,0)"]],32),oe=Dr([[0,"rgba(70,120,70,1)"],[1,"rgba(40,80,50,0)"]],32);async function he(W,ne,ie,X,pe={}){let Ue=await u(W);if(x)return new It;let We=pe.skinned?ks(Ue.scene):Ue.scene.clone(!0);return We.traverse(Ae=>{Ae.isMesh&&(Ae.castShadow=pe.shadow!==!1,Ae.receiveShadow=!0)}),We.position.set(ne,ie,X),We.rotation.y=pe.ry||0,pe.s&&We.scale.setScalar(pe.s),(pe.parent||f).add(We),pe.skinned&&(We.userData.clips=Ue.animations),We}function ce(W,ne,ie=1,X=Math.random()*2){let pe=new Wi(W),Ue=W.userData.clips.find(Ae=>Ae.name===ne)||W.userData.clips[0],We=pe.clipAction(Ue);return We.timeScale=ie,We.play(),pe.setTime(X),b.push(pe),W.userData.mix=pe,W.userData.act=We,We}function le(W,ne,ie=1){let X=W.userData.mix;if(!X)return;let pe=W.userData.clips.find(We=>We.name===ne);if(!pe)return;let Ue=X.clipAction(pe);Ue.timeScale=ie,Ue.reset().play(),W.userData.act&&W.userData.act!==Ue&&W.userData.act.crossFadeTo(Ue,.3,!1),W.userData.act=Ue}function xe(W,ne,ie=0){W.traverse(X=>{if(!X.isMesh||!X.material.map)return;let pe=X.material.map.image,Ue=document.createElement("canvas");Ue.width=pe.width,Ue.height=pe.height;let We=Ue.getContext("2d");We.drawImage(pe,0,0);let Ae=Ue.width/32;for(let[ct,Pt,Jt]of ne)We.fillStyle=Jt,We.fillRect(ct*Ae,Pt*Ae,Ae,Ae);ie&&(We.fillStyle=`rgba(10,10,16,${ie})`,We.globalCompositeOperation="multiply",We.fillRect(0,0,Ue.width,Ue.height));let xt=new In(Ue);xt.flipY=!1,xt.colorSpace=Nt,X.material=X.material.clone(),X.material.map=xt})}let Te=[[12,0,"#9c1c20"],[5,0,"#6e1216"]],Ve=[[12,0,"#1b1b22"],[5,0,"#3a0d10"]];function se(W,ne,ie){var pe;let X=new Yn(new jn({map:W,transparent:!0,depthWrite:!1,blending:ie.add?Ln:es,color:ie.color||16777215,fog:ie.fog!==!1}));return X.position.copy(ne),X.scale.setScalar(ie.size||1),f.add(X),R.push({s:X,v:ie.v?ie.v.clone():new L,g:ie.g||0,life:ie.life||1,age:0,grow:ie.grow||0,size:ie.size||1,a:(pe=ie.a)!=null?pe:1,drag:ie.drag||0}),X}function de(W){var ne;for(let ie=R.length-1;ie>=0;ie--){let X=R[ie];if(X.age+=W,X.age>=X.life||!X.s.parent){(ne=X.s.parent)==null||ne.remove(X.s),X.s.material.dispose(),R.splice(ie,1);continue}X.v.y-=X.g*W,X.drag&&X.v.multiplyScalar(Math.max(0,1-X.drag*W)),X.s.position.addScaledVector(X.v,W);let pe=X.age/X.life;X.s.scale.setScalar(X.size*(1+X.grow*pe)),X.s.material.opacity=X.a*(1-pe)*Math.min(1,X.age*12)}}let Z=(W,ne,ie)=>new L(W,ne,ie);function Ee(W,ne=1){se(te,W,{size:5*ne,life:.3,add:!0,grow:.6,fog:!1});for(let ie=0;ie<16*ne;ie++)se(N,W,{size:.5+Math.random()*.6,life:.5+Math.random()*.5,add:!0,g:9,v:Z((Math.random()-.5)*14,Math.random()*12,(Math.random()-.5)*14)});for(let ie=0;ie<10*ne;ie++){let X=new dt(new bn(.12,.12,.6+Math.random()*.6),Et);X.position.copy(W),f.add(X);let pe=Z((Math.random()-.5)*16,6+Math.random()*10,(Math.random()-.5)*16),Ue=Z(Math.random()*9,Math.random()*9,Math.random()*9),We=0;g.push(Ae=>{X.parent&&(We+=Ae,pe.y-=22*Ae,X.position.addScaledVector(pe,Ae),X.rotation.x+=Ue.x*Ae,X.rotation.y+=Ue.y*Ae,(X.position.y<-1||We>3)&&(X.parent.remove(X),X.geometry.dispose()))})}for(let ie=0;ie<8;ie++)se(re,W.clone().add(Z((Math.random()-.5)*2,0,(Math.random()-.5)*2)),{size:2,life:2.2+Math.random()*1.5,grow:1.8,a:.45,color:6973552,v:Z(-1-Math.random()*2,1.5+Math.random()*1.5,0),drag:.4});H=Math.min(1.2,H+.6*ne),E=Math.max(E,.25)}function it(W,ne=1){for(let ie=0;ie<30*ne;ie++)se($,W,{size:.35+Math.random()*.4,life:1+Math.random()*.5,g:18,v:Z((Math.random()-.5)*6,8+Math.random()*9*ne,(Math.random()-.5)*6)});for(let ie=0;ie<6;ie++)se(re,W,{size:3,life:1.6,grow:1.5,a:.5,v:Z(0,2,0)})}let Et=new on({color:7029800,roughness:.8});function yt(W,ne,ie=1){let X=new Kn(16742954,14*ie,14*ie,1.6);X.position.copy(ne),W.add(X);let pe=[];for(let We=0;We<7;We++){let Ae=new Yn(new jn({map:N,transparent:!0,depthWrite:!1,blending:Ln}));W.add(Ae),pe.push(Ae)}let Ue=[];for(let We=0;We<9;We++){let Ae=new Yn(new jn({map:re,color:4868174,transparent:!0,depthWrite:!1}));W.add(Ae),Ue.push(Ae)}g.push((We,Ae)=>{X.intensity=14*ie*(1+Math.sin(Ae*17)*.2+Math.sin(Ae*7.3)*.15),pe.forEach((xt,ct)=>{let Pt=(Ae*1.6+ct/pe.length)%1;xt.position.set(ne.x+Math.sin(ct*3+Ae*5)*.3*ie,ne.y+Pt*2.2*ie,ne.z+Math.cos(ct*2+Ae*4)*.3*ie),xt.scale.setScalar((1.6-Pt)*ie),xt.material.opacity=(1-Pt)*.9}),Ue.forEach((xt,ct)=>{let Pt=(Ae*.22+ct/Ue.length)%1;xt.position.set(ne.x-Pt*4*ie+Math.sin(ct+Ae)*.4,ne.y+1.5*ie+Pt*10*ie,ne.z+Pt*1.5),xt.scale.setScalar((1.5+Pt*5)*ie),xt.material.opacity=.42*(1-Pt)*Math.min(1,Pt*5)})})}let He=new ls().load(t+"models/waternormals.jpg");He.wrapS=He.wrapT=Vn;function V(W,ne){let ie=Hs[W],X=hi.merge([ke.fog,{t:{value:0},wn:{value:null},moon:{value:new L},deep:{value:new Ne},shal:{value:new Ne},sky:{value:new Ne},spec:{value:new Ne},foamK:{value:1},hm:{value:null},hmOn:{value:0},TS:{value:1},flash:{value:0}}]);X.wn.value=He,X.moon.value.copy(ne.sun).normalize(),X.deep.value.set(ne.deep),X.shal.value.set(ne.shal),X.sky.value.set(ne.sky),X.spec.value.set(ne.spec),X.foamK.value=ne.foam,ne.hm&&(X.hm.value=ne.hm,X.hmOn.value=1,X.TS.value=ne.TS);let pe=ie.map(([xt,ct,Pt,Jt,un])=>`h+=sin((p.x*${ct.toFixed(3)}+p.z*${(1-Math.abs(ct)).toFixed(3)})*${(xt*6.283).toFixed(4)}+t*${Pt.toFixed(3)}+${un.toFixed(3)})*${Jt.toFixed(3)};`).join(""),Ue=new Kt(900,900,300,300);Ue.rotateX(-Math.PI/2);let We=new gn({uniforms:X,fog:!0,transparent:!!ne.hm,depthWrite:!ne.hm,vertexShader:`uniform float t;varying vec3 wp;varying float hh;
        #include <fog_pars_vertex>
        void main(){vec3 p=(modelMatrix*vec4(position,1.)).xyz;float h=0.;${pe}hh=h;p.y+=h;wp=p;vec4 mvPosition=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
        }`,fragmentShader:`uniform float t,foamK,hmOn,TS,flash;uniform sampler2D wn,hm;uniform vec3 moon,deep,shal,sky,spec;varying vec3 wp;varying float hh;
        #include <fog_pars_fragment>
        void main(){vec3 n1=texture2D(wn,wp.xz*.03+vec2(t*.015,t*.01)).rgb*2.-1.,n2=texture2D(wn,wp.xz*.08-vec2(t*.025,-t*.02)).rgb*2.-1.;
          vec3 n=normalize(vec3(n1.x+n2.x*.6,2.6,n1.y+n2.y*.6));vec3 v=normalize(cameraPosition-wp);
          float depth=6.;float a=1.;if(hmOn>.5){vec2 uv=wp.xz/TS+.5;float g=texture2D(hm,uv).r*20.-10.;depth=max(-g,0.);a=mix(.55,1.,smoothstep(.1,4.,depth));}
          vec3 c=mix(shal,deep,smoothstep(.3,5.,depth)+clamp(-hh*.2,0.,.3));
          float fres=pow(1.-max(dot(v,n),0.),4.);c=mix(c,sky,fres*.65);
          vec3 r=reflect(-v,n);c+=spec*pow(max(dot(r,moon),0.),140.)*1.6;
          float fn=texture2D(wn,wp.xz*.2+t*.03).r;
          float fs=texture2D(wn,wp.xz*.05+vec2(t*.01,0.)).g;float crest=smoothstep(1.,1.9,hh+fs*.6)*foamK*smoothstep(.45,.8,fn)*.8;float shore=hmOn*(1.-smoothstep(0.,.35,depth))*(.6+fn*.6);
          float foam=clamp(crest+shore,0.,1.);c=mix(c,vec3(.92,.96,1.),foam*.8);a=max(a,foam);
          c+=vec3(.6,.7,.9)*flash*.12;
          gl_FragColor=vec4(c,a);
          #include <fog_fragment>
        }`}),Ae=new dt(Ue,We);return Ae.renderOrder=2,f.add(Ae),g.push((xt,ct)=>{X.t.value=ct,X.flash.value=E,Ae.position.x=Math.round(o.position.x/7)*7,Ae.position.z=Math.round(o.position.z/7)*7}),{U:X,set:ie}}function nn(W,ne,ie,X,pe,Ue){let We=new gn({side:Pn,depthWrite:!1,fog:!1,uniforms:{sun:{value:X.clone().normalize()},top:{value:new Ne(W)},mid:{value:new Ne(ne)},hor:{value:new Ne(ie)},sc:{value:new Ne(pe)},flash:{value:0},t:{value:0}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun,top,mid,hor,sc;uniform float flash,t;varying vec3 vp;
        float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
        void main(){float h=vp.y;vec3 c=mix(hor,mid,smoothstep(0.,.14,h));c=mix(c,top,smoothstep(.14,.6,h));
          float d=max(dot(vp,sun),0.);c+=sc*(pow(d,10.)*.35+pow(d,${Ue?"900.":"400."})*${Ue?"2.2":"3."});
          vec2 q=vp.xz/(h+.25)*2.+vec2(t*.01,0.);float cl=n2(q*2.)*.5+n2(q*4.3)*.3+n2(q*9.)*.2;cl=smoothstep(.45,.85,cl)*smoothstep(-.02,.25,h);
          c=mix(c,mix(mid*.7,hor*1.1,.4)+sc*pow(d,4.)*.4,cl*.75);c+=vec3(.75,.8,1.)*flash*(.15+cl*.35);
          if(h<0.)c=hor;gl_FragColor=vec4(c,1.);}`}),Ae=new dt(new wi(900,32,16),We);return f.add(Ae),g.push((xt,ct)=>{We.uniforms.flash.value=E,We.uniforms.t.value=ct,Ae.position.copy(o.position)}),We}let Qe=new _n(1,1,{samples:4,type:Wn}),ot=new Cr(r,Qe);ot.addPass(new Pr(a,o));let Ke=new gs(new Ze(256,256),.6,.6,.78);ot.addPass(Ke),ot.addPass(new Lr);let pt=new ms({uniforms:{tDiffuse:{value:null},tint:{value:new L(1,1,1)},vig:{value:.62}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec3 tint;uniform float vig;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.12);c=(c-.5)*1.06+.5;c*=tint;
      float v=smoothstep(.95,.28,length((vUv-.5)*vec2(1.2,1.)));c*=mix(vig,1.,v);gl_FragColor=vec4(c,1.);}`});ot.addPass(pt);let I={};async function w(W){a.fog=new uo(1450543,.0105),a.background=new Ne(726048),pt.uniforms.tint.value.set(.95,1,1.08),pt.uniforms.vig.value=.5,Ke.strength=.7;let ne=Z(.45,.32,-1);nn(330260,1385274,1713976,ne,12375295,!0),f.add(new li(8229816,791584,.55));let ie=new Rn(11060479,1.1);ie.position.set(60,70,-90),ie.castShadow=!0,ie.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(ie.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:10,far:260}),f.add(ie),f.add(ie.target);let X=new Rn(14674175,0);X.position.set(-30,90,-40),f.add(X),I.boltLight=X,I.water=V("sea",{sun:ne,deep:398111,shal:1192777,sky:2900056,spec:13032703,foam:1}),I.ship=new It,f.add(I.ship),I.list=0,I.turn=0,I.heading=0,I.listT=0;let pe=await he(h("Ship_Large"),0,0,0,{parent:I.ship,s:1.4});if(W!==d)return;xe(pe,Te),I.hull=pe;let Ue=new Kn(16756832,10,18,1.5);Ue.position.set(-6,6,0),I.ship.add(Ue),I.crew=[];for(let[kt,Zt,M,F]of[["Characters_Henry",2.5,.8,"Idle"],["Characters_Mako",-4,-.6,"Idle"],["Characters_Sharky",6,.3,"Idle"],["Characters_Anne",-1,-1.2,"Idle"]]){let O=await he(h(kt),Zt,2.9,M,{parent:I.ship,skinned:!0,s:1.05,ry:Math.random()*6});ce(O,F),I.crew.push(O)}I.enemies=[];for(let[kt,Zt,M,F]of[[62,-30,1.45,Math.PI*.85],[96,-62,1.3,Math.PI*.9],[34,-84,1.2,Math.PI*.8]]){let O=new It;f.add(O);let q=await he(h("Ship_Large"),0,0,0,{parent:O,s:M});if(W!==d)return;xe(q,Ve,.35),O.position.set(kt+70,0,Zt-30),O.rotation.y=F,O.userData={to:Z(kt,0,Zt),ry:F,show:0,target:0,turn:F};let J=new Kn(16747066,0,22,1.6);J.position.set(0,2.5,2),O.add(J),O.userData.port=J,I.enemies.push(O)}let We=await he(h("Characters_Captain_Barbarossa"),-2,2.9,1.5,{parent:I.enemies[0],skinned:!0,s:1.25,ry:-Math.PI/2});We.traverse(kt=>{kt.isMesh&&(kt.material=kt.material.clone(),kt.material.color.setRGB(.22,.2,.26))}),ce(We,"Idle"),I.admiral=We;let Ae=new Kn(16728112,0,9,1.6);Ae.position.set(-.5,6,3.5),I.enemies[0].add(Ae),I.admEye=Ae,I.island=new It,I.island.position.set(-160,-2,-120),f.add(I.island);for(let[kt,Zt,M,F,O]of[["Environment_Cliff2",0,0,10,.4],["Environment_Cliff3",45,10,8,1.2],["Environment_Cliff4",-50,5,9,2.3]])await he(h(kt),Zt,0,M,{parent:I.island,s:F,ry:O,shadow:!1});let xt=n?900:1600,ct=new Float32Array(xt*6),Pt=new en;Pt.setAttribute("position",new Qt(ct,3));let Jt=Array.from({length:xt},()=>[Math.random()*90-45,Math.random()*40,Math.random()*90-45]),un=new Er(Pt,new Fs({color:10467030,transparent:!0,opacity:.35,fog:!1}));f.add(un),g.push((kt,Zt)=>{un.position.set(o.position.x,0,o.position.z);for(let M=0;M<xt;M++){let F=Jt[M],O=((F[1]-Zt*38)%40+40)%40;ct[M*6]=F[0],ct[M*6+1]=O+o.position.y-20,ct[M*6+2]=F[2],ct[M*6+3]=F[0]-.5,ct[M*6+4]=O+o.position.y-21.6,ct[M*6+5]=F[2]+.2}Pt.attributes.position.needsUpdate=!0}),g.push((kt,Zt)=>{let M=I.ship;I.listT=Yl(I.listT,I.list,1-Math.pow(.3,kt)),I.turn>0&&(I.turn=Math.min(1,I.turn+kt/3.4),I.heading=-.58*ua(I.turn));let F=I.turn>0?7*ua(I.turn):0;M.position.x+=-Math.cos(I.heading)*F*kt,M.position.z+=Math.sin(I.heading)*F*kt;let O=M.position.x,q=M.position.z,J=Ur(Hs.sea,O,q,Zt),k=Ur(Hs.sea,O+6,q,Zt)-Ur(Hs.sea,O-6,q,Zt),ye=Ur(Hs.sea,O,q+3,Zt)-Ur(Hs.sea,O,q-3,Zt);M.position.y=J*.8-.4-I.listT*4,M.rotation.set(0,I.heading,0),M.rotateZ(-k*.045),M.rotateX(ye*.07+I.listT);for(let Re of I.enemies){let Oe=Re.userData;Oe.show=Yl(Oe.show,Oe.target,1-Math.pow(.45,kt)),Re.position.lerpVectors(Z(Oe.to.x+70,0,Oe.to.z-30),Oe.to,ua(Math.min(1,Oe.show))),Re.rotation.y=Yl(Re.rotation.y,Oe.turn,1-Math.pow(.5,kt));let $e=Ur(Hs.sea,Re.position.x,Re.position.z,Zt);Re.position.y=$e*.8-.4,Re.rotation.z=Math.sin(Zt*.8+Re.position.x)*.04,Re.visible=Oe.show>.02}I.boltLight&&(I.boltLight.intensity=E*2.5),I.admEye&&(I.admEye.intensity=I.admT?9+Math.sin(Zt*9)*3:0)}),Le(Z(-34,9,34),Z(4,4,0),99)}let v=240,K=220,fe=null;function ge(W,ne){let X=(6+Math.sin(W*.05)*4+(Ir(W*.03,3)-.5)*6-ne)*.12;return X>0?X=Math.min(X,.9+(X-.9)*.25+bs(-12,-40,ne)*(4+Ir(W*.04,ne*.04)*10)):X=X*2.2,X+=bs(46,70,Math.abs(W))*bs(-10,10,-ne+5)*6*Ir(W*.05,ne*.05),Math.max(-8,X)+(Ir(W*.3,ne*.3)-.5)*.12}async function _e(W){a.fog=new ss(15975328,110,380),a.background=new Ne(15773840),pt.uniforms.tint.value.set(1.04,1,.97),pt.uniforms.vig.value=.66,Ke.strength=.55;let ne=Z(-.7,.12,-1);nn(5074598,15900794,16765600,ne,16769456,!1),f.add(new li(16770252,5599306,.9));let ie=new Rn(16769732,.9);ie.position.set(40,30,70),f.add(ie);let X=new Rn(16764826,2.3);X.position.set(-70,45,-60),X.castShadow=!0,X.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(X.shadow.camera,{left:-50,right:50,top:40,bottom:-40,near:10,far:240}),f.add(X),f.add(X.target);let pe=new Kt(v,v,K-1,K-1);pe.rotateX(-Math.PI/2);let Ue=pe.attributes.position,We=new Uint8Array(K*K*4);for(let k=0;k<Ue.count;k++){let ye=ge(Ue.getX(k),Ue.getZ(k));Ue.setY(k,ye),We[k*4]=Math.max(0,Math.min(255,Math.round((ye+10)/20*255))),We[k*4+3]=255}pe.computeVertexNormals();let Ae=new Float32Array(Ue.count*3),xt=pe.attributes.normal,ct=new Ne,Pt=new Ne,Jt=new Ne(12096610),un=new Ne(15323032),kt=new Ne(5208626),Zt=new Ne(2377759),M=new Ne(8747628);for(let k=0;k<Ue.count;k++){let ye=Ue.getX(k),Re=Ue.getZ(k),Oe=Ue.getY(k),$e=Ir(ye*.1,Re*.1),gt=Ir(ye*.4+7,Re*.4);ct.copy(Jt).lerp(un,bs(0,.5,Oe)),Pt.copy(kt).lerp(Zt,bs(.3,.8,$e)),ct.lerp(Pt,bs(1+$e,1.8+$e,Oe)),ct.lerp(M,bs(.8,.65,xt.getY(k))*bs(1,2,Oe));let et=.88+gt*.24;Ae[k*3]=ct.r*et,Ae[k*3+1]=ct.g*et,Ae[k*3+2]=ct.b*et}pe.setAttribute("color",new Qt(Ae,3));let F=new dt(pe,new on({vertexColors:!0,roughness:.95}));F.receiveShadow=!0,f.add(F),fe=new Us(We,K,K,kn,ai),fe.minFilter=fe.magFilter=Sn,fe.needsUpdate=!0,I.water=V("shore",{sun:ne,deep:876156,shal:4769730,sky:16041636,spec:16769720,foam:.4,hm:fe,TS:v});let O=(k,ye)=>ge(k,ye),q=(()=>{let k=11;return()=>(k=k*16807%2147483647)/2147483647})();I.bush=[];for(let k=0;k<150;k++){let ye=(q()-.5)*170,Re=-10-q()*46;if(Math.abs(ye-26)<5&&Re>-30)continue;let Oe=await he(h("Environment_PalmTree_"+(1+k%3)),ye,O(ye,Re)-.1,Re,{ry:q()*6,s:(Re>-16?1:1.6)+q()*1.4,shadow:Re>-30});if(W!==d)return;let $e=q()*6;g.push((gt,et)=>{Oe.rotation.z=Math.sin(et*.8+$e)*.02}),Math.abs(ye-30)<12&&Re>-26&&I.bush.push(Oe)}for(let[k,ye,Re,Oe,$e]of[["Environment_Cliff2",-70,-30,3.5,.6],["Environment_Cliff3",75,-25,3,2],["Environment_Cliff1",-50,12,2.2,1.1],["Environment_Cliff4",60,18,2.4,2.8]])await he(h(k),ye,O(ye,Re)-1.5,Re,{s:Oe,ry:$e});for(let k=0;k<18;k++){let ye=(q()-.5)*110,Re=4+q()*10,Oe=O(ye,Re);Oe<-1.2||ye>-14&&ye<24||await he(h("Environment_Rock_"+(1+k%5)),ye,Oe-.2,Re,{s:1.4+q()*2,ry:q()*6})}I.ship=new It,I.ship.position.set(-22,-.9,24),I.ship.rotation.set(0,.5,.13),f.add(I.ship);let J=await he(h("Ship_Large"),0,0,0,{parent:I.ship,s:1.4});if(W===d){xe(J,[[12,0,"#7a2a24"],[5,0,"#4a1412"]]),yt(I.ship,Z(3,3.4,.5),.8),yt(I.ship,Z(-6,3.2,-.5),.6),yt(I.ship,Z(-1,9,0),.5),I.shipBase=I.ship.position.clone(),g.push((k,ye)=>{let Re=I.arrive!=null?ua(Math.min(1,I.arrive)):1;I.arrive!=null&&I.arrive<1&&(I.arrive+=k/3.2),I.ship.position.set(I.shipBase.x-(1-Re)*46,-.9+Math.sin(ye*.9)*.12,I.shipBase.z+(1-Re)*4),I.ship.rotation.z=.13+Math.sin(ye*.7)*.015}),await he("models/kenney/pirate/boat-row-small.glb",-8,O(-8,10)+.1,10,{ry:2.2,s:1.6});for(let[k,ye,Re,Oe]of[["Prop_Barrel",-9,-1,0],["Prop_Barrel",-8,0,1],["Prop_Chest_Closed",-5,-.5,.4],["Prop_Bucket",-2,5,0],["Prop_Anchor",-10,7,1.2]])try{await he(h(k),ye,O(ye,Re),Re,{ry:Oe,s:1.2})}catch{}I.camp=Z(-7,O(-7,-2),-2),yt(f,I.camp.clone().add(Z(0,.2,0)),.45),I.crew=[];for(let[k,ye,Re,Oe,$e]of[["Characters_Henry",-4,9,1,"Idle"],["Characters_Mako",-6,11,.6,"Idle"],["Characters_Sharky",-9,12,2,"Idle"],["Characters_Skeleton",-5,13,1.4,"Idle"]]){let gt=await he(h(k),ye,O(ye,Re),Re,{skinned:!0,s:1.15,ry:Oe});ce(gt,$e),gt.userData.home=Z(ye,0,Re),I.crew.push(gt)}I.slots={sailor:Z(-2,0,2.5),scarlet:Z(2,0,1.8),shark:Z(6,0,2.6),captain:Z(10,0,2),crab:Z(14,0,2.8)};for(let k in I.slots)I.slots[k].y=O(I.slots[k].x,I.slots[k].z);I.heroPos=Z(0,0,0),I.heroPath=null,I.H=O,Le(Z(-60,18,70),Z(-10,2,10),99)}}function Le(W,ne,ie=1.4){y.follow=null,y.tpos.copy(W),y.tlook.copy(ne),y.rate=ie,ie>=99&&(y.pos.copy(W),y.look.copy(ne))}function we(W,ne){if(y.follow){let[We,Ae]=y.follow();y.tpos.copy(We),y.tlook.copy(Ae)}let ie=1-Math.pow(.5,W*y.rate);y.pos.lerp(y.tpos,ie),y.look.lerp(y.tlook,ie);let X=H>0?(Math.sin(ne*61)*.5+Math.sin(ne*37)*.3)*H*H:0,pe=H>0?Math.cos(ne*53)*.4*H*H:0,Ue=m==="sea"?Math.sin(ne*.9)*.5:Math.sin(ne*.4)*.08;o.position.set(y.pos.x+X,y.pos.y+pe+Ue,y.pos.z),o.lookAt(y.look.x,y.look.y+Ue*.5,y.look.z),H=Math.max(0,H-W*1.6),E=Math.max(0,E-W*2.2)}function je(W){return I.ship.localToWorld(W.clone())}let st=(W,ne)=>{let ie=setTimeout(()=>{x||W()},ne);wt.push(ie)},wt=[];function ve(W,ne={}){var X,pe,Ue,We;let ie=I.ship;switch(W){case"establish":Le(Z(-26,7,30),Z(4,5,0),.9);break;case"enemiesEmerge":(X=I.enemies)==null||X.forEach((Ae,xt)=>Ae.userData.target=1-xt*.1),Le(Z(-30,12,44),Z(40,3,-25),.8),Ot();break;case"gunsTurn":if(I.enemies){let Ae=I.enemies[0];Ae.userData.turn=Math.PI*1.02,Ae.userData.port.intensity=6,Le(Z(30,8,8),Z(62,4,-30),1)}break;case"admiral":I.enemies&&(I.admT=1,y.follow=()=>{let Ae=I.admiral.getWorldPosition(Z(0,0,0)).add(Z(0,2.2,0)),xt=I.ship.position.clone().sub(Ae).setY(0).normalize();return[Ae.clone().addScaledVector(xt,15).add(Z(xt.z*4,3,-xt.x*4)),Ae.clone().add(Z(0,.4,0))]},y.rate=1.8,st(()=>{y.follow=null},2400),Ot());break;case"broadside":Le(Z(-14,6,26),Z(2,5,0),1.3),st(()=>Le(Z(-30,11,40),Z(25,4,-12),.9),1900);break;case"listing":I.list=-.11,(pe=I.crew)==null||pe.forEach((Ae,xt)=>le(Ae,"Run",1.2)),Le(Z(-30,8,34),Z(2,5,0),1.1);break;case"cutRigging":st(()=>rt(),900);break;case"nearMiss":break;case"revealLand":Ot(),Le(Z(-24,8,30),Z(-150,14,-110),.8),I.revealT=1.4;break;case"turnToIsland":I.turn=.001,y.rate=.8,y.follow=()=>[I.ship.localToWorld(Z(26,10,18)),I.ship.localToWorld(Z(-30,3,-6))];break;case"arrive":I.arrive=0,Le(Z(-6,8,50),Z(-26,3,18),.6);break;case"crewAshore":Ct(),Le(Z(-4,7,30),Z(0,2,4),.8);break;case"branchSnap":if(I.bush){let Ae=_;for(let ct of I.bush)g.push((Pt,Jt)=>{let un=Jt-Ae;un<2.4&&(ct.rotation.x=Math.sin(un*14)*.08*(1-un/2.4))});let xt=Z(30,5,-16);for(let ct=0;ct<18;ct++)se(oe,xt,{size:.5,life:2.4,g:2,drag:.8,v:Z((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6)});vt(xt),Le(Z(18,5,14),Z(30,4,-14),1.2),st(()=>Le(Z(4,6,24),Z(5,2,2),.8),2600)}break;case"rollCall":{let Ae=["captain","scarlet","shark","sailor","crab"];Ae.forEach((xt,ct)=>st(()=>{var Jt;let Pt=(Jt=I.slots)==null?void 0:Jt[xt];Pt&&Le(Pt.clone().add(Z(-1.5,2.6,8.5)),Pt.clone().add(Z(0,1.6,0)),2.2)},ct*680)),st(()=>Le(Z(4,6,24),Z(5,2,2),1),Ae.length*680+200);break}case"selectFrame":Le(Z(5,9,30),Z(5,3,0),.9);break;case"heroStep":{let Ae=((Ue=I.slots)==null?void 0:Ue[ne.hero])||Z(4,0,2);I.heroPos.copy(Ae),I.heroStep=0,Le(Ae.clone().add(Z(-2,2.6,8)),Ae.clone().add(Z(1,1.5,0)),1.2);break}case"handMap":break;case"heroAshore":{let Ae=I.heroPos.clone();I.heroPath={from:Ae,to:Z(28,((We=I.H)==null?void 0:We.call(I,28,-20))||2,-20),k:0},Le(Z(Ae.x+6,5,Ae.z+14),Z(24,3,-10),.55);break}}}function Ot(){E=1,I.island&&m==="sea"&&(I.revealT=Math.max(I.revealT||0,.8))}function Ct(){I.crew&&I.crew.forEach((W,ne)=>{let ie=W.position.clone(),X=Z(-12+ne*2.4,0,-4-ne%2*1.8);X.y=I.H(X.x,X.z);let pe=-ne*.25;le(W,"Walk",1),g.push(Ue=>{if(pe>=1)return;pe+=Ue/4;let We=Math.max(0,Math.min(1,pe));W.position.lerpVectors(ie,X,We),W.position.y=I.H(W.position.x,W.position.z),W.rotation.y=Math.atan2(X.x-ie.x,X.z-ie.z),pe>=1&&(le(W,ne%2?"Idle":"Yes",1),W.rotation.y=Math.atan2(I.camp.x-X.x,I.camp.z-X.z))})})}function vt(W){let ne=new ln({color:2762272,side:dn});for(let ie=0;ie<7;ie++){let X=new en;X.setAttribute("position",new qt([-.5,.1,0,0,0,0,.5,.1,0,0,0,-.2,0,0,.25],3)),X.setIndex([0,1,3,1,2,3,0,1,4,1,2,4]);let pe=new dt(X,ne);pe.position.copy(W).add(Z((Math.random()-.5)*6,Math.random()*3,(Math.random()-.5)*4)),f.add(pe);let Ue=Z(-3-Math.random()*4,3+Math.random()*2,2+Math.random()*2),We=X.attributes.position,Ae=0;g.push((xt,ct)=>{if(!pe.parent)return;Ae+=xt,pe.position.addScaledVector(Ue,xt),pe.rotation.y=Math.atan2(Ue.x,Ue.z);let Pt=Math.sin(ct*20+ie)*.3;We.setY(0,.1+Pt),We.setY(2,.1+Pt),We.needsUpdate=!0,Ae>5&&(pe.parent.remove(pe),X.dispose())})}}function rt(){if(!I.ship)return;let W=new It,ne=new dt(new $t(.18,.22,8,8),Et);ne.rotation.z=Math.PI/2,W.add(ne);let ie=new dt(new Kt(7,4,6,3),new on({color:9181725,side:dn,roughness:.9}));ie.position.y=-2,W.add(ie);let X=je(Z(1,13,0));W.position.copy(X),f.add(W);let pe=Z(2,0,3),Ue=0,We=!1;Ee(X,.6),g.push(Ae=>{var xt;We||(Ue+=Ae,pe.y-=14*Ae,W.position.addScaledVector(pe,Ae),W.rotation.x+=Ae*1.6,W.rotation.z+=Ae*.7,W.position.y<-2&&(We=!0,it(W.position.clone().setY(0),1.3),(xt=W.parent)==null||xt.remove(W)))})}let Ye=new wi(.35,10,8),mt=new on({color:1447446,roughness:.5,metalness:.4});function Ut(W=0,ne={},ie=.62){var M,F;let X=((M=I.enemies)==null?void 0:M[W])||((F=I.enemies)==null?void 0:F[0]);if(!X||!I.ship)return;let pe=(I.shotN=(I.shotN||0)+1)%5,Ue=X.localToWorld(Z(-6+pe*3,2.6,2.6)),We=Ue.clone().sub(X.position).setY(0).normalize();se(te,Ue,{size:4,life:.25,add:!0,fog:!1});for(let O=0;O<8;O++)se(re,Ue,{size:2,life:2.4+Math.random(),grow:2.4,a:.6,v:We.clone().multiplyScalar(2+Math.random()*2).add(Z(0,1+Math.random(),0)),drag:.6});X.userData.port.intensity=18,st(()=>{X.userData.port.intensity=6},120);let Ae=ne.mast?Z(1,12,0):ne.sail?Z(2,9,.5):Z((ne.lx||0)*.05,2.2+Math.random(),1.5),xt=ne.near,ct=new L;o.getWorldDirection(ct);let Pt=xt?o.position.clone().addScaledVector(ct.setY(0).normalize(),14).add(Z(3,0,0)).setY(0):ne.miss?je(Z(3,0,6)).setY(0):je(Ae),Jt=new dt(Ye,mt);Jt.position.copy(Ue),f.add(Jt);let un=[],kt=0;g.push(()=>{Jt.parent&&(kt+=1/60)});let Zt=_;g.push((O,q)=>{if(!Jt.parent)return;let J=Math.min(1,(q-Zt)/ie),k=Ue.clone().lerp(xt||ne.miss?Pt:je(Ae),J);k.y+=Math.sin(J*Math.PI)*3.5,Jt.position.copy(k),Math.random()<.6&&se(re,k,{size:.6,life:.5,grow:1,a:.35}),J>=1&&(Jt.parent.remove(Jt),ne.miss||xt?it(k.setY(0),xt?1.6:1):(Ee(k,ne.mast?1.3:1),!ne.sail&&!ne.mast&&(I.fires=(I.fires||0)+1)<=3&&yt(I.ship,I.ship.worldToLocal(k.clone()),.7)))})}let Ht=new L,St=new L;function Pe(W){if(m!=="shore"||!I.slots)return null;let ne=W==="hero"?I.heroPos:I.slots[W];if(!ne)return null;Ht.copy(ne).project(o),St.copy(ne).add(Z(0,1.9,0)).project(o);let ie=i.clientWidth,X=i.clientHeight;return Ht.z>1?null:{x:(Ht.x*.5+.5)*ie,y:(-Ht.y*.5+.5)*X,px:Math.abs(St.y-Ht.y)*.5*X}}function D(W){if(m!=="shore"||!I.heroPath)return;let ne=I.heroPath;ne.k=Math.min(1,ne.k+W/4.5),I.heroPos.lerpVectors(ne.from,ne.to,ua(ne.k)),I.heroPos.y=I.H(I.heroPos.x,I.heroPos.z),y.tlook.lerp(I.heroPos.clone().add(Z(0,1.5,0)),.05)}function Fe(){let W=Math.max(1,s.clientWidth),ne=Math.max(1,s.clientHeight);r.setSize(W,ne,!1),ot.setSize(W,ne),Ke.resolution.set(W/2,ne/2),o.aspect=W/ne,o.fov=W/ne>1.6?42:56,o.updateProjectionMatrix()}Fe(),addEventListener("resize",Fe);let Ie=0,ht=0;function ut(W){if(P=0,x||S)return;P=requestAnimationFrame(ut);let ne=Math.min(.05,(W-T)/1e3)||.016;T=W,(s.clientWidth!==Ie||s.clientHeight!==ht)&&(Ie=s.clientWidth,ht=s.clientHeight,Fe()),!p&&(zt(ne),ot.render())}function zt(W){_+=W;for(let ne of g.slice())ne(W,_);for(let ne of b)ne.update(W);de(W),D(W),we(W,_),m==="sea"&&I.island&&(I.revealT=Math.max(0,(I.revealT||0)-W*.35),a.fog.density=.0105-Math.min(1,I.revealT)*.0062)}async function jt(W){var X;if(W===m)return;let ne=++d;m=W;for(let pe of wt)clearTimeout(pe);wt.length=0,f.traverse(pe=>{var Ue,We;pe.geometry&&!pe.isSkinnedMesh&&((We=(Ue=pe.geometry).dispose)==null||We.call(Ue))}),a.remove(f),f=new It,a.add(f),g=[],b=[],R.length=0;for(let pe in I)delete I[pe];p=!0;let ie=W==="sea"?["Ship_Large","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Anne","Characters_Captain_Barbarossa","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4"].map(h):["Ship_Large","Environment_PalmTree_1","Environment_PalmTree_2","Environment_PalmTree_3","Environment_Cliff1","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4","Environment_Rock_1","Environment_Rock_2","Environment_Rock_3","Environment_Rock_4","Environment_Rock_5","Prop_Barrel","Prop_Chest_Closed","Prop_Bucket","Prop_Anchor","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Skeleton"].map(h).concat(["models/kenney/pirate/boat-row-small.glb"]);try{await Promise.all(ie.map(pe=>u(pe).catch(()=>null))),await(W==="sea"?w(ne):_e(ne)),ne===d&&((X=r.compile)==null||X.call(r,a,o))}catch(pe){throw console.warn("Story3D",pe&&pe.message),pe}finally{ne===d&&(p=!1,T=performance.now())}}return P=requestAnimationFrame(ut),{setEnv:jt,cue:ve,shoot:Ut,bolt:Ot,advance(W){let ne=Math.round(W*30);for(let ie=0;ie<ne;ie++)zt(1/30);ot.render()},get ready(){return!!I.ship},anchor:Pe,pause(){S=!0,cancelAnimationFrame(P),P=0},resume(){x||(S=!1,T=performance.now(),P||(P=requestAnimationFrame(ut)))},dispose(){var W,ne;x=!0,cancelAnimationFrame(P);for(let ie of wt)clearTimeout(ie);removeEventListener("resize",Fe),a.traverse(ie=>{ie.geometry&&ie.geometry.dispose();let X=ie.material;X&&(Array.isArray(X)?X:[X]).forEach(pe=>{for(let Ue in pe)pe[Ue]&&pe[Ue].isTexture&&pe[Ue].dispose();pe.dispose()})}),(W=ot.dispose)==null||W.call(ot),Qe.dispose(),r.dispose(),(ne=r.forceContextLoss)==null||ne.call(r),i.remove()},get state(){return{env:m,ready:!!I.ship,fx:R.length,paused:S,cam:o.position.toArray().map(W=>+W.toFixed(1)),follow:!!y.follow,adm:I.admiral?I.admiral.getWorldPosition(new L).toArray().map(W=>+W.toFixed(1)):null}}}}window.PirateStory3D={create:ex,version:1};var fa=new L;function fi(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;fa.copy(e),fa[n]=0,fa.normalize();let l=.5*a/(a+o),u=1-fa.angleTo(s)/c;return Math.sign(fa[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Oo=class extends bn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,g=new L,b=.5/i;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*r,u[m+1]=l.y*Math.sign(o.y)+c.y*r,u[m+2]=l.z*Math.sign(o.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=fi(g,c,"z","y",r,n),f[d+1]=1-fi(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[d+0]=1-fi(g,c,"z","y",r,n),f[d+1]=1-fi(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[d+0]=1-fi(g,c,"x","z",r,e),f[d+1]=fi(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-fi(g,c,"x","z",r,e),f[d+1]=1-fi(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-fi(g,c,"x","y",r,e),f[d+1]=1-fi(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[d+0]=fi(g,c,"x","y",r,e),f[d+1]=1-fi(g,c,"y","x",r,t);break}}};var tx={1:[[.5,.5]],2:[[.27,.27],[.73,.73]],3:[[.27,.27],[.5,.5],[.73,.73]],4:[[.27,.27],[.73,.27],[.27,.73],[.73,.73]],5:[[.27,.27],[.73,.27],[.5,.5],[.27,.73],[.73,.73]],6:[[.27,.25],[.73,.25],[.27,.5],[.73,.5],[.27,.75],[.73,.75]]};function nx(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(46,40,10,64,64,90);n.addColorStop(0,"#fffaf0"),n.addColorStop(1,"#e6d5b0"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let[r,a]of tx[s])t.fillStyle=s===1?"#9a1e16":"#2a1206",t.beginPath(),t.arc(r*128,a*128,s===1?17:12,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.25)",t.beginPath(),t.arc(r*128-3,a*128-3,3,0,7),t.fill();let i=new In(e);return i.colorSpace=Nt,i.anisotropy=4,i}var ix=[3,4,1,6,2,5],sx={3:[1,0,0],4:[-1,0,0],1:[0,1,0],6:[0,-1,0],2:[0,0,1],5:[0,0,-1]};function rx(s){let e=document.createElement("canvas");e.style.cssText="width:100%;height:100%;display:block",s.append(e);let t=new _i({canvas:e,alpha:!0,antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.outputColorSpace=Nt;let n=new vi,i=new cn(32,1,.1,50);i.position.set(0,4.2,4.6),i.lookAt(0,.3,0),n.add(new li(16773596,5911576,1.4));let r=new Rn(16767400,1.6);r.position.set(-2,5,3),n.add(r);let a=ix.map(y=>new on({map:nx(y),roughness:.35})),o=new dt(new Oo(1,1,1,4,.14),a);n.add(o);let c=document.createElement("canvas");c.width=c.height=64;{let y=c.getContext("2d"),H=y.createRadialGradient(32,32,2,32,32,32);H.addColorStop(0,"rgba(0,0,0,.55)"),H.addColorStop(1,"rgba(0,0,0,0)"),y.fillStyle=H,y.fillRect(0,0,64,64)}let l=new dt(new Kt(1.6,1.6),new ln({map:new In(c),transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,n.add(l);let u=new L(0,1,0),h=new Mn,f=new Mn,p=new Mn,g=new L;function b(y){let H=new L(...sx[y]),E=new Mn().setFromUnitVectors(H,u);return new Mn().setFromAxisAngle(u,(Math.random()-.5)*1.2).multiply(E)}let m=null,d=0,_=!1;function x(){let y=Math.max(1,s.clientWidth),H=Math.max(1,s.clientHeight);t.setSize(y,H,!1),i.aspect=y/H,i.updateProjectionMatrix()}function S(){s.clientWidth&&e.width!==Math.round(s.clientWidth*t.getPixelRatio())&&x(),t.render(n,i)}function P(y){o.quaternion.copy(b(y)),o.position.set(0,.5,0),l.position.set(0,.01,0),l.scale.setScalar(1),S()}function T(y){if(d=0,_||!m)return;let H=Math.min(1,(y-m.start)/m.ms),E=1-Math.pow(1-H,3),R=m.from.x*(1-E),te=m.from.z*(1-E),re=Math.abs(Math.sin(H*Math.PI*3.2))*(1-H)*(1-H)*1.6;o.position.set(R,.5+re,te),p.setFromAxisAngle(m.axis,m.turns*(1-E)),o.quaternion.copy(m.q1).premultiply(p),l.position.set(R,.01,te),l.scale.setScalar(1+re*.25),l.material.opacity=1-re*.3,S(),H<1?d=requestAnimationFrame(T):m=null}return x(),P(1),{roll(y,H=850){_||(cancelAnimationFrame(d),g.set(Math.random()-.5,Math.random()*.4,Math.random()-.5).normalize(),m={start:performance.now(),ms:H,from:new L(2.6*(Math.random()<.5?-1:1),0,-1.2+Math.random()*.6),q1:b(y),axis:g.clone(),turns:Math.PI*(5+Math.random()*3)},d=requestAnimationFrame(T))},show(y){_||(cancelAnimationFrame(d),m=null,P(y))},resize(){x(),S()},dispose(){var y;_=!0,cancelAnimationFrame(d),o.geometry.dispose(),a.forEach(H=>{H.map.dispose(),H.dispose()}),l.geometry.dispose(),l.material.map.dispose(),l.material.dispose(),t.dispose(),(y=t.forceContextLoss)==null||y.call(t),e.remove()}}}window.PirateDice3D={create:rx};var pn=Math.PI*2,xf=(s,e,t)=>Math.max(e,Math.min(t,s)),ax=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function Ai(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Dn(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function hn(s,e=1,t=1,n=!0){let i=new In(s);return n&&(i.colorSpace=Nt),i.wrapS=i.wrapT=Vn,i.repeat.set(e,t),i.anisotropy=4,i}function da(s,e,t,n,i,r,a=40){for(let o=0;o<a;o++){let c=n()*t;s.strokeStyle=`rgba(${r},${(.05+n()*.12).toFixed(3)})`,s.lineWidth=.6+n()*1.6,s.beginPath();for(let l=0;l<=e;l+=8){let u=c+Math.sin(l*.012+o)*3+Math.sin(l*.05+o*3)*1.2;l?s.lineTo(l,u):s.moveTo(l,u)}s.stroke()}for(let o=0;o<2;o++){let c=n()*e,l=n()*t,u=s.createRadialGradient(c,l,1,c,l,10+n()*10);u.addColorStop(0,`rgba(${r},.55)`),u.addColorStop(1,`rgba(${r},0)`),s.fillStyle=u,s.fillRect(c-22,l-22,44,44)}}function _f(s,e){let[t,n]=Dn(1024,1024),i=Ai(s),r=1024/8;for(let a=0;a<8;a++){let o=-i()*400;for(;o<1024;){let l=380+i()*420,u=.82+i()*.3,h=e.map(f=>Math.round(f*u));n.fillStyle=`rgb(${h})`,n.fillRect(o,a*r,l,r),n.save(),n.beginPath(),n.rect(o,a*r,l,r),n.clip(),n.translate(o,a*r),da(n,l,r,i,h,"30,16,6",18),n.restore(),n.fillStyle="rgba(20,10,4,.75)",n.fillRect(o,a*r,3,r);for(let f of[r*.22,r*.78])n.fillStyle="rgba(25,20,18,.9)",n.beginPath(),n.arc(o+12,a*r+f,3,0,pn),n.arc(o+l-12,a*r+f,3,0,pn),n.fill();o+=l}n.fillStyle="rgba(15,8,3,.85)",n.fillRect(0,a*r,1024,4);let c=n.createLinearGradient(0,a*r,0,a*r+r);c.addColorStop(0,"rgba(255,220,170,.06)"),c.addColorStop(1,"rgba(0,0,0,.14)"),n.fillStyle=c,n.fillRect(0,a*r,1024,r)}return t}function Kl(s){let[e,t]=Dn(512,1024),n=Ai(s),i=6,r=512/i;for(let o=0;o<i;o++){let c=.78+n()*.3,l=[96,58,32].map(h=>Math.round(h*c));t.fillStyle=`rgb(${l})`,t.fillRect(o*r,0,r,1024),t.save(),t.translate(o*r+r,0),t.rotate(Math.PI/2),da(t,1024,r,n,l,"25,12,5",14),t.restore(),t.fillStyle="rgba(12,6,2,.8)",t.fillRect(o*r,0,3,1024);let u=t.createLinearGradient(o*r,0,o*r+r,0);u.addColorStop(0,"rgba(255,210,150,.05)"),u.addColorStop(1,"rgba(0,0,0,.18)"),t.fillStyle=u,t.fillRect(o*r,0,r,1024)}let a=t.createLinearGradient(0,0,0,1024);return a.addColorStop(0,"rgba(10,5,2,.55)"),a.addColorStop(.35,"rgba(10,5,2,0)"),t.fillStyle=a,t.fillRect(0,0,512,1024),e}function ox(s){let[e,t]=Dn(512,512),n=Ai(s);t.fillStyle="#2a2420",t.fillRect(0,0,512,512);for(let i=0,r=0;r<512;i++){let a=46+n()*26,o=i%2?-30:0;for(;o<512;){let c=60+n()*60,l=.65+n()*.45,u=[118,104,92].map(f=>Math.round(f*l));t.fillStyle=`rgb(${u})`,t.beginPath(),t.roundRect(o+3,r+3,c-6,a-6,9),t.fill();let h=t.createLinearGradient(0,r,0,r+a);h.addColorStop(0,"rgba(255,240,220,.12)"),h.addColorStop(1,"rgba(0,0,0,.3)"),t.fillStyle=h,t.fill(),o+=c}r+=a}return e}function vf(s,e=[120,72,38]){let[t,n]=Dn(512,256),i=Ai(s),r=14,a=512/r;for(let c=0;c<r;c++){let l=.8+i()*.28,u=e.map(h=>Math.round(h*l));n.fillStyle=`rgb(${u})`,n.fillRect(c*a,0,a,256),n.save(),n.translate(c*a+a,0),n.rotate(Math.PI/2),da(n,256,a,i,u,"28,14,5",6),n.restore(),n.fillStyle="rgba(15,8,3,.7)",n.fillRect(c*a,0,2,256)}let o=n.createLinearGradient(0,0,0,256);return o.addColorStop(0,"rgba(0,0,0,.25)"),o.addColorStop(.5,"rgba(255,220,170,.06)"),o.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=o,n.fillRect(0,0,512,256),t}function Jl(s,e){let[t,n]=Dn(512,384),i=Ai(s),r=n.createRadialGradient(256,192,40,256,192,300);r.addColorStop(0,"#ecd7a4"),r.addColorStop(.7,"#d2b077"),r.addColorStop(1,"#8a6232"),n.fillStyle=r,n.fillRect(0,0,512,384);for(let u=0;u<260;u++)n.fillStyle=`rgba(110,70,30,${(i()*.08).toFixed(3)})`,n.fillRect(i()*512,i()*384,2+i()*8,1+i()*3);n.strokeStyle="rgba(90,60,30,.25)",n.lineWidth=1;for(let u=1;u<8;u++)n.beginPath(),n.moveTo(u*64,0),n.lineTo(u*64,384),n.stroke();for(let u=1;u<6;u++)n.beginPath(),n.moveTo(0,u*64),n.lineTo(512,u*64),n.stroke();let a=[];for(let u=0;u<4;u++){let h=70+i()*370,f=60+i()*260,p=22+i()*46;a.push([h,f]),n.beginPath();for(let g=0;g<=40;g++){let b=g/40*pn,m=p*(.7+.3*Math.sin(b*3+u)+.15*Math.sin(b*7+u*2)),d=h+Math.cos(b)*m*1.3,_=f+Math.sin(b)*m;g?n.lineTo(d,_):n.moveTo(d,_)}n.closePath(),n.fillStyle="rgba(150,120,60,.55)",n.fill(),n.strokeStyle="#5a3a1a",n.lineWidth=2.4,n.stroke(),n.strokeStyle="rgba(70,90,110,.35)",n.lineWidth=1;for(let g=1;g<3;g++)n.beginPath(),n.ellipse(h,f,p*1.3+g*8,p+g*8,0,0,pn),n.stroke();n.fillStyle="rgba(60,90,40,.6)";for(let g=0;g<5;g++)n.beginPath(),n.arc(h+(i()-.5)*p,f+(i()-.5)*p*.6,3,0,pn),n.fill()}n.setLineDash([7,7]),n.strokeStyle="#8a1e14",n.lineWidth=2.5,n.beginPath(),a.forEach(([u,h],f)=>f?n.quadraticCurveTo((u+a[f-1][0])/2+30,(h+a[f-1][1])/2-40,u,h):n.moveTo(u,h)),n.stroke(),n.setLineDash([]);let[o,c]=a[a.length-1];n.strokeStyle="#a0170e",n.lineWidth=5,n.beginPath(),n.moveTo(o-10,c-10),n.lineTo(o+10,c+10),n.moveTo(o+10,c-10),n.lineTo(o-10,c+10),n.stroke(),n.save(),n.translate(440,320),n.fillStyle="#5a3a1a";for(let u=0;u<8;u++)n.rotate(pn/8),n.beginPath(),n.moveTo(0,-(u%2?18:34)),n.lineTo(5,0),n.lineTo(-5,0),n.closePath(),n.fill();n.beginPath(),n.arc(0,0,6,0,pn),n.fillStyle="#d9b97a",n.fill(),n.restore(),n.fillStyle="#4b2e12",n.font="italic bold 26px Georgia,serif",n.textAlign="center",n.fillText(e,256,34);let l=n.createRadialGradient(256,192,170,256,192,330);return l.addColorStop(0,"rgba(60,30,10,0)"),l.addColorStop(1,"rgba(50,25,8,.85)"),n.fillStyle=l,n.fillRect(0,0,512,384),t}function cx(s){let[e,t]=Dn(1024,256),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#5b3518"),n.addColorStop(1,"#2e180a"),t.fillStyle=n,t.beginPath(),t.roundRect(8,8,1008,240,40),t.fill(),t.lineWidth=10,t.strokeStyle="#c9963f",t.stroke(),t.font="bold 116px Georgia,serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#1b0d04",t.fillText(s,516,136);let i=t.createLinearGradient(0,70,0,190);return i.addColorStop(0,"#fff0b8"),i.addColorStop(1,"#d69a35"),t.fillStyle=i,t.fillText(s,512,130),e}function Zl(s){let[e,t]=Dn(512,512);if(s==="checkers"){for(let n=0;n<8;n++)for(let i=0;i<8;i++)t.fillStyle=(n+i)%2?"#3a2412":"#d9b77c",t.fillRect(16+n*60,16+i*60,60,60);t.lineWidth=16,t.strokeStyle="#5a3418",t.strokeRect(8,8,496,496)}else if(s==="xo"){let n=Ai(7);t.fillStyle="#8a5a2e",t.fillRect(0,0,512,512),da(t,512,512,n,[138,90,46],"40,20,6",30),t.strokeStyle="rgba(25,12,4,.85)",t.lineWidth=12,t.lineCap="round";for(let a of[190,322])t.beginPath(),t.moveTo(a,70),t.lineTo(a,442),t.stroke(),t.beginPath(),t.moveTo(70,a),t.lineTo(442,a),t.stroke();t.strokeStyle="rgba(245,240,225,.92)",t.lineWidth=11;let i=(a,o)=>{t.beginPath(),t.moveTo(a-38,o-38),t.lineTo(a+38,o+38),t.moveTo(a+38,o-38),t.lineTo(a-38,o+38),t.stroke()},r=(a,o)=>{t.beginPath(),t.arc(a,o,40,0,pn),t.stroke()};i(124,124),r(256,256),i(388,124),r(124,388)}else if(s==="target"){let n=Ai(3);t.fillStyle="#7a4a22",t.beginPath(),t.arc(256,256,250,0,pn),t.fill(),da(t,512,512,n,[122,74,34],"30,14,4",40),["#e8d9b0","#9a1c14","#e8d9b0","#9a1c14","#e8d9b0","#1e1410"].forEach((r,a)=>{t.globalAlpha=.82,t.fillStyle=r,t.beginPath(),t.arc(256,256,210-a*36,0,pn),t.fill()}),t.globalAlpha=1,t.strokeStyle="rgba(20,10,4,.6)",t.lineWidth=3;for(let r=0;r<14;r++)t.beginPath(),t.arc(256,256,30+r*16+n()*4,n()*pn,n()*pn),t.stroke();t.lineWidth=12,t.strokeStyle="#3b2a1c",t.beginPath(),t.arc(256,256,244,0,pn),t.stroke()}return e}function lx(s){let[e,t]=Dn(128,128);t.fillStyle="#f2e8d2",t.beginPath(),t.roundRect(2,2,124,124,22),t.fill(),t.fillStyle="#2a1408";let n={1:[[64,64]],2:[[34,34],[94,94]],3:[[34,34],[64,64],[94,94]],4:[[34,34],[94,34],[34,94],[94,94]],5:[[34,34],[94,34],[64,64],[34,94],[94,94]],6:[[34,30],[94,30],[34,64],[94,64],[34,98],[94,98]]};for(let[i,r]of n[s])t.beginPath(),t.arc(i,r,11,0,pn),t.fill();return e}function hx(){let[s,e]=Dn(512,320);e.fillStyle="#121214",e.fillRect(0,0,512,320);let t=Ai(9);for(let n=0;n<300;n++)e.fillStyle=`rgba(255,255,255,${(t()*.04).toFixed(3)})`,e.fillRect(t()*512,t()*320,3,1);e.fillStyle="#ece4d0",e.beginPath(),e.ellipse(256,130,62,66,0,0,pn),e.fill(),e.beginPath(),e.roundRect(214,160,84,50,14),e.fill(),e.fillStyle="#121214",e.beginPath(),e.ellipse(232,136,17,20,0,0,pn),e.ellipse(280,136,17,20,0,0,pn),e.fill(),e.beginPath(),e.moveTo(256,160),e.lineTo(247,178),e.lineTo(265,178),e.fill();for(let n=0;n<4;n++)e.fillRect(226+n*18,190,6,18);return e.strokeStyle="#ece4d0",e.lineWidth=22,e.lineCap="round",e.beginPath(),e.moveTo(150,220),e.lineTo(362,296),e.moveTo(362,220),e.lineTo(150,296),e.stroke(),s}function ux(){let[s,e]=Dn(512,640),t=e.createLinearGradient(0,0,0,640);t.addColorStop(0,"#0b1a35"),t.addColorStop(.55,"#1d3d66"),t.addColorStop(.56,"#183552"),t.addColorStop(1,"#081626"),e.fillStyle=t,e.fillRect(0,0,512,640);let n=Ai(21);for(let r=0;r<120;r++)e.fillStyle=`rgba(255,255,240,${(.3+n()*.7).toFixed(2)})`,e.fillRect(n()*512,n()*330,1.6,1.6);let i=e.createRadialGradient(360,150,10,360,150,140);i.addColorStop(0,"rgba(230,240,255,.9)"),i.addColorStop(.25,"rgba(160,200,255,.35)"),i.addColorStop(1,"rgba(100,150,220,0)"),e.fillStyle=i,e.fillRect(200,0,312,320),e.fillStyle="#f4f6ff",e.beginPath(),e.arc(360,150,30,0,pn),e.fill();for(let r=0;r<70;r++){let a=360+n()*270,o=20+n()*80;e.fillStyle=`rgba(200,225,255,${(.15+n()*.35).toFixed(2)})`,e.fillRect(330+(n()-.5)*140*(1+(a-360)/200),a,o*.5,1.5)}e.fillStyle="#060c16",e.beginPath(),e.moveTo(60,360),e.lineTo(210,360),e.lineTo(190,385),e.lineTo(80,385),e.closePath(),e.fill(),e.fillRect(130,230,4,130),e.fillRect(95,260,4,100),e.beginPath(),e.moveTo(134,236),e.quadraticCurveTo(175,280,136,330),e.closePath(),e.fill(),e.beginPath(),e.moveTo(99,266),e.quadraticCurveTo(130,300,101,340),e.closePath(),e.fill(),e.fillStyle="#ffc56a";for(let r=0;r<4;r++)e.fillRect(100+r*22,368,6,5);return s}function Ql(s="rgba(255,214,140,1)",e="rgba(255,150,60,.35)"){let[t,n]=Dn(128,128),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,s),i.addColorStop(.25,e),i.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=i,n.fillRect(0,0,128,128),t}function fx(){let[s,e]=Dn(64,128),t=e.createRadialGradient(32,92,2,32,80,60);return t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.25,"rgba(255,210,90,.95)"),t.addColorStop(.6,"rgba(255,110,20,.55)"),t.addColorStop(1,"rgba(200,40,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,4),e.bezierCurveTo(54,50,60,90,32,124),e.bezierCurveTo(4,90,10,50,32,4),e.fill(),s}function dx(){let[s,e]=Dn(128,128),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.62)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),s}function px(){let[s,e]=Dn(64,256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(170,200,255,.5)"),t.addColorStop(1,"rgba(170,200,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=n,e.fillRect(0,0,64,256),s}function mx(){let[s,e]=Dn(256,256);e.strokeStyle="rgba(255,214,120,1)",e.lineWidth=10,e.beginPath(),e.arc(128,128,100,0,pn),e.stroke();let t=e.createRadialGradient(128,128,60,128,128,126);return t.addColorStop(0,"rgba(255,200,90,0)"),t.addColorStop(.75,"rgba(255,200,90,.35)"),t.addColorStop(1,"rgba(255,200,90,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),s}async function yf(s,e={}){let t=e.base||"tavern/",n=e.lang||"en",i=!!e.reducedMotion,r=()=>Math.max(1,s.clientWidth),a=()=>Math.max(1,s.clientHeight),o=new _i({antialias:(devicePixelRatio||1)<2.5,powerPreference:"high-performance",alpha:!1});o.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),o.setSize(r(),a()),o.outputColorSpace=Nt,o.toneMapping=Xi,o.toneMappingExposure=1.02,o.domElement.className="tv-canvas",s.append(o.domElement);let c=new vi;c.background=new Ne("#120a05"),c.fog=new ss("#1a0e06",11,24);let l=new cn(48,r()/a(),.1,60),u=new Set,h=A=>(u.add(A),A),f=A=>h(new on(A)),p=(A,G,Y=0,Q=0,ae=0,ue=c)=>{let Be=new dt(h(A),G);return Be.position.set(Y,Q,ae),ue.add(Be),Be},g=(A,G,Y,Q,ae,ue,Be,me)=>p(new bn(A,G,Y),Q,ae,ue,Be,me),b=(A,G,Y,Q,ae,ue,Be,me,Je=16)=>p(new $t(A,G,Y,Je),Q,ae,ue,Be,me),m={floor:h(hn(_f(11,[112,70,40]),2.2,1.6)),wall:h(hn(Kl(5),3,1)),wallSide:h(hn(Kl(8),3.6,1)),stone:h(hn(ox(4),1.4,1.4)),stave:h(hn(vf(2))),staveDark:h(hn(vf(6,[86,52,28]))),top:h(hn(_f(17,[110,66,34]),.7,.7)),counter:h(hn(Kl(13),4,.5))},d={floor:f({map:m.floor,roughness:.82,metalness:0}),wall:f({map:m.wall,roughness:.9}),wallSide:f({map:m.wallSide,roughness:.9}),beam:f({color:"#3b2210",roughness:.85,map:m.staveDark}),dark:f({color:"#24140a",roughness:.9}),wood:f({color:"#7a4a26",roughness:.75,map:m.stave}),top:f({map:m.top,roughness:.55,color:"#c08a58"}),counter:f({map:m.counter,roughness:.7,color:"#b07848"}),counterTop:f({color:"#4a2812",roughness:.35,metalness:.05,map:m.top}),stone:f({map:m.stone,roughness:.95}),iron:f({color:"#2d2a28",roughness:.45,metalness:.8}),brass:f({color:"#b98a3a",roughness:.35,metalness:.9}),rope:f({color:"#a8875a",roughness:1}),cloth:f({color:"#7c1f1a",roughness:.95}),soot:f({color:"#0c0705",roughness:1}),foam:f({color:"#f6ead0",roughness:.9}),ale:f({color:"#a8641a",roughness:.3,emissive:"#3a1a04"}),candle:f({color:"#efe2c4",roughness:.7,emissive:"#3a2a10"}),glassLamp:f({color:"#ffd28a",emissive:"#ffb04a",emissiveIntensity:2.2,roughness:.2})},_=["#2f6b3a","#6b2a1a","#2a3f6b","#7a6a2a","#3a2a1a","#5a1f4a"].map(A=>f({color:A,roughness:.12,metalness:.1,transparent:!0,opacity:.82,emissive:A,emissiveIntensity:.25})),x=16,S=12,P=4.6,T=-6.2,y=-8,H=8,E=p(new Kt(x,S+2),d.floor,0,0,-.2);E.rotation.x=-Math.PI/2;let R=p(new Kt(x,P),d.wall,0,P/2,T),te=p(new Kt(S+2,P),d.wallSide,y,P/2,-.2);te.rotation.y=Math.PI/2;let re=p(new Kt(S+2,P),d.wallSide,H,P/2,-.2);re.rotation.y=-Math.PI/2;let Se=p(new Kt(x,S+2),d.dark,0,P,-.2);Se.rotation.x=Math.PI/2,g(x,.14,.12,d.beam,0,1.15,T+.06),g(x,.26,.1,d.beam,0,.13,T+.05);for(let A of[-1,1]){let G=g(.12,.14,S+2,d.beam,A*(x/2-.06),1.15,-.2),Y=g(.1,.26,S+2,d.beam,A*(x/2-.05),.13,-.2)}for(let A=-3;A<=3;A++)g(.3,.34,S+2,d.beam,A*2.5,P-.17,-.2);g(x,.34,.34,d.beam,0,P-.5,T+.2),g(x,.3,.3,d.beam,0,P-.45,2.6);for(let[A,G]of[[-7.7,T+.3],[7.7,T+.3],[-7.7,2.6],[7.7,2.6],[-3.9,T+.25],[3.9,T+.25],[-6.2,2.6],[6.2,2.6]])g(.36,P,.36,d.beam,A,P/2,G);for(let A of[-1,1]){let G=g(.14,3.4,.14,d.beam,A*7.9,2.3,1.2);G.rotation.x=.9}let N=h(new ln({map:h(hn(dx(),1,1,!1)),transparent:!0,depthWrite:!1})),$=(A,G,Y,Q=Y,ae=1)=>{let ue=p(new Kt(1,1),N,A,.012,G);return ue.rotation.x=-Math.PI/2,ue.scale.set(Y,Q,1),ue.renderOrder=1,ae!==1&&(ue.material=N.clone(),h(ue.material),ue.material.opacity=ae),ue},oe=new ds,he=A=>t+"models/"+A+".glb",ce=new Map,le=A=>(ce.has(A)||ce.set(A,oe.loadAsync(he(A)).catch(G=>(console.warn("[tavern] model",A,G),null))),ce.get(A)),xe=["Characters_Henry","Characters_Captain_Barbarossa","Characters_Skeleton","Characters_Anne"],Te=["Prop_Barrel","Prop_Bottle_1","Prop_Bottle_2","Potion1_Filled","Potion3_Filled","Potion5_Filled","Potion7_Filled","Candle","Torch_wall","Prop_Coins","Prop_Chest_Gold","Prop_Chest_Closed","Prop_Skull","Prop_Anchor","Weapon_Dagger","Weapon_Cutlass","Weapon_Sword_1","Weapon_Pistol","Weapon_Lute","Prop_Bucket_Fishes","Prop_GoldBag","Prop_Cannon","Prop_CannonBall","Prop_Bomb","Prop_Fish_Mackerel","Ship_Small","Book_Open","Book1_Closed","Book2_Closed","Bread","Plate"],Ve=0,se=xe.length+Te.length,de={};await Promise.all([...xe,...Te].map(A=>le(A).then(G=>{var Y;de[A]=G,Ve++,(Y=e.onProgress)==null||Y.call(e,Ve/se)})));let Z=[...xe,...Te].filter(A=>!de[A]);Z.length&&console.warn("[tavern] missing models",Z);function Ee(A,G,Y,Q,ae={}){let ue=de[A];if(!ue)return null;let Be=ue.scene.clone(!0);if(ae.h){let me=new Xn().setFromObject(ue.scene),Je=me.max.y-me.min.y||1;Be.scale.setScalar(ae.h/Je)}else ae.s&&Be.scale.setScalar(ae.s);return Be.position.set(G,Y,Q),Be.rotation.set(ae.rx||0,ae.ry||0,ae.rz||0),(ae.parent||c).add(Be),Be.traverse(me=>{var Je,At;me.isMesh&&(me.material=me.material.clone(),h(me.material),me.material.metalness>.5&&!ae.metal&&(me.material.metalness=.4),me.material.roughness=Math.max(.35,(Je=me.material.roughness)!=null?Je:.8),ae.emissive&&(me.material.emissive=new Ne(ae.emissive),me.material.emissiveIntensity=(At=ae.emissiveI)!=null?At:.6))}),ae.shadow&&$(G,Q,ae.shadow),Be}let it=h(new jn({map:h(hn(fx(),1,1)),blending:Ln,depthWrite:!1,transparent:!0})),Et=h(new jn({map:h(hn(Ql(),1,1)),blending:Ln,depthWrite:!1,transparent:!0,opacity:.55})),yt=[];function Ce(A,G,Y,Q=.1,ae=c,ue=.5){let Be=new Yn(it);Be.position.set(A,G,Y),Be.scale.set(Q*.6,Q*1.2,1),ae.add(Be);let me=null;Q>=.2&&(me=new Yn(Et),me.position.set(A,G,Y),me.scale.setScalar(Q*6*ue),ae.add(me));let Je={f:Be,g:me,s:Q,glow:ue,seed:Math.random()*100};return yt.push(Je),Je}function He(A,G,Y,Q=c,ae=.2){return Ee("Candle",A,G,Y,{h:ae,parent:Q}),Ce(A,G+ae*1.04,Y,.075,Q)}function V(A,G,Y,Q=c,ae=!0){let ue=new It;ue.position.set(A,G,Y),Q.add(ue);let Be=new dt(h(new $t(.065,.07,.16,12)),d.wood);Be.position.y=.08,ue.add(Be);for(let Je of[.03,.13]){let At=new dt(h(new Hi(.071,.008,4,12)),d.iron);At.rotation.x=Math.PI/2,At.position.y=Je,ue.add(At)}let me=new dt(h(new Hi(.04,.012,6,10,Math.PI)),d.wood);if(me.position.set(.07,.08,0),me.rotation.z=-Math.PI/2,ue.add(me),ae){let Je=new dt(h(new $t(.068,.066,.03,12)),d.foam);Je.position.y=.165,ue.add(Je)}return ue}let nn=.74;function Qe(A,G,Y=0){let Q=new It;Q.position.set(A,0,G),Q.rotation.y=Y,c.add(Q);let ae=new dt(h(new $t(.24,.24,.06,14)),d.top);ae.position.y=.46,Q.add(ae);for(let ue=0;ue<3;ue++){let Be=ue/3*pn,me=new dt(h(new $t(.025,.03,.46,6)),d.beam);me.position.set(Math.cos(Be)*.15,.23,Math.sin(Be)*.15),me.rotation.z=Math.cos(Be)*.12,me.rotation.x=-Math.sin(Be)*.12,Q.add(me)}return $(A,G,.7),Q}function ot(A,G,Y=0){Ee("Prop_Barrel",A,0,G,{h:.5,ry:Y,shadow:.8})}function Ke(A,G,Y=.85){let Q=new It;Q.position.set(A,0,G),c.add(Q);let ae=new dt(h(new $t(Y,Y,.08,28)),d.top);ae.position.y=nn,Q.add(ae);let ue=new dt(h(new Hi(Y,.03,6,28)),d.beam);ue.rotation.x=Math.PI/2,ue.position.y=nn,Q.add(ue);let Be=new dt(h(new $t(.09,.13,nn-.04,10)),d.beam);Be.position.y=(nn-.04)/2,Q.add(Be);for(let me=0;me<2;me++){let Je=new dt(h(new bn(.7,.07,.1)),d.beam);Je.position.y=.04,Je.rotation.y=me*Math.PI/2+.4,Q.add(Je)}return $(A,G,Y*2.6,Y*2.3),Q}let pt=nn+.04,I=new It;c.add(I),g(7.2,1.08,.78,d.counter,0,.54,-4.1,I),g(7.5,.1,.98,d.counterTop,0,1.13,-4.1,I),g(7.3,.12,.1,d.beam,0,.06,-3.68,I);for(let A=-3;A<=3;A++)g(.12,.9,.06,d.beam,A*1.15,.58,-3.69,I);g(.06,.06,7,d.brass,0,.25,-3.6,I).rotation.y=Math.PI/2;let w=f({map:h(hn(cx(e.signText||"BATAN L\xD6VB\u018FR"),1,1)),roughness:.6,emissive:"#2a1404",emissiveIntensity:.4});p(new Kt(2.9,.72),w,0,.64,-3.63);let v=["Prop_Bottle_1","Potion3_Filled","Prop_Bottle_2","Potion1_Filled","Prop_Bottle_1","Potion5_Filled","Prop_Bottle_2","Potion7_Filled"];for(let[A,G]of[[1.75,13],[2.35,12],[2.95,11]]){g(5.6,.07,.42,d.beam,0,A,T+.26,I);for(let Y=0;Y<G;Y++){let Q=-2.55+Y*(5.1/(G-1)),ae=(Y*3+Math.round(A*7))%v.length;Y%6===4?V(Q,A+.035,T+.3,I,!1):A>2.9&&Y%5===2?Ee("Book1_Closed",Q,A+.2,T+.3,{h:.3,rz:.12}):Ee(v[ae],Q,A+.035,T+.3,{h:v[ae].startsWith("Potion")?.3:.34,ry:Y})}}for(let A of[-2.9,2.9])g(.12,1.6,.44,d.beam,A,2.4,T+.26,I);for(let A of[-1,1]){g(1,.14,.9,d.beam,A*3.55,.07,T+.7,I),Ee("Prop_Barrel",A*3.55,.14,T+.7,{h:.95,ry:.4*A}),Ee("Prop_Barrel",A*3.55,1.09,T+.7,{h:.8,ry:-.3*A});let G=b(.03,.03,.16,d.brass,A*3.55,.55,T+1.15,I);G.rotation.x=Math.PI/2}[[-2.8,0],[-1.6,1],[-.9,0],[1.3,1],[2.4,0]].forEach(([A,G],Y)=>V(A,1.18,-4+Y%2*.15,I,!!G)),Ee("Prop_Bottle_1",.95,1.18,-4.15,{h:.34}),Ee("Prop_Coins",1.75,1.18,-3.95,{h:.1,ry:.8}),He(-2.2,1.18,-4.2,I),He(2,1.18,-4.25,I),Ee("Prop_Chest_Gold",-3,0,-3.25,{h:.75,ry:.5,shadow:1.4,emissive:"#3a2400",emissiveI:.35}),Ee("Prop_Bucket_Fishes",2.9,0,-3.35,{h:.5,ry:-.4,shadow:.9});let K=y+.45,fe=-2.6,ge=new It;ge.position.set(K,0,fe),c.add(ge),g(.9,2.2,2.4,d.stone,0,1.1,0,ge),g(.92,1.15,1.3,d.soot,.02,.62,0,ge),g(1.15,.16,2.7,d.beam,.1,2.25,0,ge),g(.7,2.3,1.6,d.stone,-.1,3.4,0,ge);for(let A=0;A<3;A++){let G=b(.08,.08,.9,d.beam,.3,.14+(A===2?.12:0),(A-1)*.18,ge,8);G.rotation.x=Math.PI/2,G.rotation.z=(A-1)*.3}Ce(K+.35,.48,fe-.15,.5,c,.7),Ce(K+.35,.45,fe+.18,.42,c,.6),Ce(K+.4,.42,fe,.6,c,.9);let _e=f({color:"#ff6a1a",emissive:"#ff4a00",emissiveIntensity:2,roughness:1});g(.4,.05,.9,_e,K+.35,.06,fe),Ee("Prop_Skull",K+.15,2.33+.12,fe+.5,{h:.24,ry:Math.PI/2}),Ee("Ship_Small",K+.2,2.33,fe-.55,{h:.55,ry:Math.PI/2}),He(K+.15,2.33,fe+1);let Le=new It;Le.position.set(y+.03,2.25,1),Le.rotation.y=Math.PI/2,c.add(Le);let we=h(hn(ux(),1,1));p(new Kt(1.5,1.85),f({map:we,emissive:"#ffffff",emissiveMap:we,emissiveIntensity:.9,roughness:.1}),0,0,0,Le),g(1.7,.12,.14,d.beam,0,.98,.02,Le),g(1.7,.16,.2,d.beam,0,-.98,.05,Le),g(.12,2,.14,d.beam,-.8,0,.02,Le),g(.12,2,.14,d.beam,.8,0,.02,Le),g(.06,1.85,.08,d.beam,0,0,.03,Le),g(1.5,.06,.08,d.beam,0,.2,.03,Le);let je=h(new ln({map:h(hn(px(),1,1,!1)),transparent:!0,blending:Ln,depthWrite:!1,opacity:.16,side:dn}));p(new Kt(1.6,4.2),je,y+1.6,1.3,1).rotation.set(0,Math.PI/2,-.95),p(new Kt(1.5,1.12),f({map:h(hn(Jl(3,"Mare Incognitum"),1,1)),roughness:.9}),-5.4,2.6,T+.03).rotation.z=.03,p(new Kt(1.2,.9),f({map:h(hn(Jl(12,"Insula"),1,1)),roughness:.9}),5.3,2.75,T+.03).rotation.z=-.05;let wt=p(new Kt(1.4,1.05),f({map:h(hn(Jl(29,"Freeport"),1,1)),roughness:.9}),H-.03,2.85,-4.4);wt.rotation.y=-Math.PI/2;let ve=p(new Kt(1.45,.9,16,4),f({map:h(hn(hx(),1,1)),roughness:1,side:dn}),0,3.72,T+.08),Ot=ve.geometry.attributes.position.array.slice();Ee("Weapon_Cutlass",K+.3,3.15,fe-.25,{h:.9,ry:Math.PI/2,rx:.6}),Ee("Weapon_Cutlass",K+.3,3.15,fe+.25,{h:.9,ry:Math.PI/2,rx:-.6}),Ee("Weapon_Pistol",-2,2.6,T+.07,{h:.22,rz:.2}),Ee("Prop_Anchor",H-.1,2.4,2,{s:1.35,rx:Math.PI/2,ry:-Math.PI/2,metal:!0});for(let[A,G,Y]of[[-3.72,T+.45,0],[3.72,T+.45,Math.PI],[y+.22,2.6,0],[H-.22,2.6,Math.PI]])Ee("Torch_wall",A,2.15,G,{h:.55,ry:Y+(Math.abs(A)>7?(A<0,0):-Math.PI/2)});Ee("Prop_Cannon",-6.6,.32,3.4,{h:.75,ry:-.5,shadow:1.6});for(let[A,G]of[[-6,4],[-5.8,4.2],[-5.95,4.35]])Ee("Prop_CannonBall",A,.1,G,{h:.2});Ee("Prop_Barrel",-7.2,0,-5.2,{h:.9,ry:.3,shadow:1.2}),Ee("Prop_Barrel",-6.5,0,-5.45,{h:.9,ry:1.3,shadow:1.2}),Ee("Prop_Barrel",-6.85,.9,-5.3,{h:.75,ry:2}),Ee("Prop_Bomb",-6,0,-5.3,{h:.35}),Ct(7.2,0,-5.5,.75,.2),Ct(7.2,.75,-5.45,.55,-.3),Ee("Prop_GoldBag",7.15,1.3,-5.45,{h:.3}),Ee("Prop_Barrel",6.3,0,-5.6,{h:.85,ry:.3,shadow:1.1}),Ee("Prop_Chest_Closed",7,0,3.6,{h:.6,ry:-1.2,shadow:1.2}),Ee("Weapon_Lute",-7.6,.5,1.95,{h:.9,ry:Math.PI/2,rx:-.25});for(let[A,G]of[[-6.9,-4.3],[6.95,3]]){let Y=p(new Hi(.32,.09,8,20),d.rope,A,.09,G);Y.rotation.x=Math.PI/2,p(new Hi(.22,.08,8,18),d.rope,A,.24,G).rotation.x=Math.PI/2,$(A,G,1.1)}function Ct(A,G,Y,Q=.6,ae=0){let ue=g(Q,Q,Q,f({map:m.stave,color:"#b4875a",roughness:.85}),A,G+Q/2,Y);ue.rotation.y=ae;for(let Be of[-1,1])g(Q*1.02,.06,.06,d.beam,0,Be*Q*.44,Q*.5,ue),g(.06,Q*1.02,.06,d.beam,Be*Q*.44,0,Q*.5,ue);return $(A,Y,Q*1.8),ue}c.add(new li("#ffcf9a","#2a1406",.5)),c.add(new Eo("#4a2c18",.35));let vt=new Rn("#8fb0ff",.55);vt.position.set(-12,6,2),vt.target.position.set(-3,0,1),c.add(vt,vt.target);let rt=new Rn("#ffcf9a",.55);rt.position.set(3,6,8),rt.target.position.set(0,1,-2),c.add(rt,rt.target);let Ye=[];function mt(A,G,Y,Q,ae,ue,Be=.12){let me=new Kn(Q,ae,ue,1.6);return me.position.set(A,G,Y),c.add(me),Ye.push({l:me,base:ae,flick:Be,seed:Math.random()*50}),me}function Ut(A,G,Y,Q=.8){let ae=new It;ae.position.set(A,G,Y),c.add(ae);let ue=new dt(h(new $t(.012,.012,Q,4)),d.iron);ue.position.y=Q/2,ae.add(ue);let Be=new dt(h(new $t(.12,.14,.3,6,1,!0)),d.glassLamp);ae.add(Be);let me=new dt(h(new xo(.17,.14,6)),d.iron);me.position.y=.22,ae.add(me);let Je=new dt(h(new $t(.15,.12,.05,6)),d.iron);Je.position.y=-.17,ae.add(Je);for(let Mt=0;Mt<6;Mt++){let _t=Mt/6*pn,Ge=new dt(h(new bn(.015,.3,.015)),d.iron);Ge.position.set(Math.cos(_t)*.135,0,Math.sin(_t)*.135),ae.add(Ge)}let At=new Yn(Et);return At.scale.setScalar(1.3),ae.add(At),ae}Ut(-4.2,3.2,-1.2,1.2),Ut(4,3.2,-1.4,1.2),Ut(-1.8,3.3,1.9,1.1),Ut(2.6,3.3,2,1.1),mt(-4.2,3.05,-1.2,"#ffb262",10,10),mt(4,3.05,-1.4,"#ffb262",10,10),mt(0,3.35,.7,"#ffc27a",16,14,.06),mt(K+1,.8,fe,"#ff7a2a",16,8,.35);let Ht=new It;Ht.position.set(0,3.6,.7),c.add(Ht),p(new Hi(.75,.045,6,32),d.beam,0,0,0,Ht).rotation.x=Math.PI/2;for(let A=0;A<4;A++){let G=A/4*pn+.3,Y=p(new $t(.008,.008,1.2,3),d.iron,Math.cos(G)*.37,.55,Math.sin(G)*.37,Ht);Y.rotation.z=-Math.cos(G)*.55,Y.rotation.x=Math.sin(G)*.55}for(let A=0;A<8;A++){let G=A/8*pn;He(Math.cos(G)*.75,.02,Math.sin(G)*.75,Ht,.16)}Ke(-4.7,-.8,.78),ot(-3.85,-.25,.5);let St=p(new bn(.62,.03,.62),f({map:h(hn(Zl("checkers"),1,1)),roughness:.5}),-4.65,pt+.015,-.85);St.rotation.y=.25;let Pe=h(new $t(.03,.03,.018,12)),D=f({color:"#9a1e16",roughness:.4}),Fe=f({color:"#f0e2c4",roughness:.4});for(let A=0;A<8;A++)for(let G=0;G<8;G++){if((A+G)%2===0||G>2&&G<5||Math.sin(A*3.1+G*7.7)>.55)continue;let Y=new dt(Pe,G<3?D:Fe);Y.position.set((A-3.5)*.068,.02,(G-3.5)*.068),St.add(Y)}V(-4.25,pt,-1.15,c,!0),He(-5.05,pt,-1.25),Ke(-1.8,1.7,.8),ot(-1,2.35,1);let Ie=[1,2,3,4,5,6].map(A=>f({map:h(hn(lx(A),1,1)),roughness:.4})),ht=[];for(let[A,G,Y]of[[-1.7,1.55,.4],[-1.52,1.72,1.1]]){let Q=p(new bn(.09,.09,.09),[Ie[0],Ie[5],Ie[1],Ie[4],Ie[2],Ie[3]],A,pt+.045,G);Q.rotation.y=Y,ht.push(Q)}let ut=b(.085,.07,.2,f({color:"#5a2a12",roughness:.8}),-2.05,pt+.09,1.5);ut.rotation.z=1.4,Ee("Prop_Coins",-1.95,pt,1.95,{h:.1,ry:.3}),V(-1.25,pt,1.95),Ee("Plate",-1.45,pt,1.35,{h:.05}),Ee("Bread",-1.45,pt+.03,1.35,{h:.14,ry:.6}),Ke(2.5,1.5,.8),ot(1.65,2.15,.3);let zt=p(new bn(.66,.03,.66),f({map:h(hn(Zl("xo"),1,1)),roughness:.7}),2.45,pt+.015,1.5);zt.rotation.y=-.2;let jt=g(.08,.02,.02,f({color:"#f4f0e6",roughness:1}),2.85,pt+.01,1.85);jt.rotation.y=.6,V(2,pt,1.85),He(2.95,pt,1.2),Ee("Prop_Fish_Mackerel",2.15,pt+.03,1.15,{h:.08,ry:1.2,rz:Math.PI/2});let W=new It;W.position.set(H-.14,1.65,-2.3),W.rotation.y=-Math.PI/2,c.add(W),p(new $t(.62,.62,.14,40),[f({map:m.stave,color:"#8a5a2a"}),f({map:h(hn(Zl("target"),1,1)),roughness:.8}),d.beam],0,0,0,W).rotation.x=Math.PI/2,g(.08,1.8,.08,d.beam,0,-.2,-.1,W);let ne=[];function ie(){let A=de.Weapon_Dagger?de.Weapon_Dagger.scene.clone(!0):new It,G=new It;return A.scale.setScalar(.3),A.rotation.x=-Math.PI/2,A.position.z=.26,G.add(A),G}for(let[A,G]of[[.6,.32],[2.4,.2],[4.1,.42]]){let Y=ie();Y.position.set(Math.cos(A)*G,Math.sin(A)*G,.05),W.add(Y),ne.push(Y)}g(.04,.01,1.4,f({color:"#e8dcc0",roughness:1}),5,.01,-1.8).rotation.y=.5,Ke(4.75,-4.8,.7),Ee("Prop_Barrel",5.45,0,-4.55,{h:.5}),Ee("Prop_Barrel",4.05,0,-4.55,{h:.5}),V(4.65,pt,-4.7),V(4.95,pt,-4.95),Ee("Prop_Bottle_2",4.5,pt,-5.05,{h:.3}),He(4.85,pt,-4.55);for(let[A,G,Y,Q]of[[4.4,2.6,"#5b1712",.006],[4.1,2.3,"#8a5a20",.008],[3.9,2.1,"#6b1a14",.009]]){let ae=p(new Kt(A,G),f({color:Y,roughness:1}),.3,Q,-.6);ae.rotation.x=-Math.PI/2}let X={};function pe(A,G,Y=!0){let Q=A.image,[ae,ue]=Dn(Q.width,Q.height);ue.drawImage(Q,0,0);let Be=ue.getImageData(0,0,Q.width,Q.height),me=Be.data;for(let At=0;At<me.length;At+=4){let Mt=me[At]/255,_t=me[At+1]/255,Ge=me[At+2]/255,Rt=Math.max(Mt,_t,Ge),fn=Math.min(Mt,_t,Ge),Gt=(Rt+fn)/2,pi=0,xs=0;if(Rt!==fn){let Qn=Rt-fn;xs=Gt>.5?Qn/(2-Rt-fn):Qn/(Rt+fn),pi=Rt===Mt?(_t-Ge)/Qn+(_t<Ge?6:0):Rt===_t?(Ge-Mt)/Qn+2:(Mt-_t)/Qn+4,pi/=6}if(Y&&pi>.02&&pi<.12&&xs>.15&&xs<.75&&Gt>.25&&Gt<.85||xs<.12)continue;pi=(pi+G)%1;let ma=Gt<.5?Gt*(1+xs):Gt+xs-Gt*xs,Or=2*Gt-ma,Bo=Qn=>(Qn=(Qn+1)%1,Qn<1/6?Or+(ma-Or)*6*Qn:Qn<.5?ma:Qn<2/3?Or+(ma-Or)*(2/3-Qn)*6:Or);me[At]=Bo(pi+1/3)*255,me[At+1]=Bo(pi)*255,me[At+2]=Bo(pi-1/3)*255}ue.putImageData(Be,0,0);let Je=h(new In(ae));return Je.colorSpace=Nt,Je.flipY=A.flipY,Je.magFilter=A.magFilter,Je.minFilter=A.minFilter,Je}function Ue(A,G,Y,Q,ae,ue={}){let Be=de[G];if(!Be)return null;let me=ks(Be.scene);Be.scene.updateMatrixWorld(!0);let Je=new Xn().setFromObject(Be.scene,!0),At=Je.max.y-Je.min.y||1;me.scale.setScalar((ue.h||1.5)/At),me.position.set(Y,ue.y||0,Q),me.rotation.y=ae,c.add(me);let Mt=null;me.traverse(Gt=>{Gt.isMesh&&!Gt.isSkinnedMesh&&ue.noProp&&(Gt.visible=!1),Gt.isMesh&&(Gt.frustumCulled=!1,Gt.material=Gt.material.clone(),h(Gt.material),Gt.material.roughness=.75,Gt.material.metalness=0,ue.hue!=null&&Gt.material.map&&(Mt=Mt||pe(Gt.material.map,ue.hue),Gt.material.map=Mt),ue.tint&&(Gt.material.color=new Ne(ue.tint)))});let _t=new Wi(me),Ge={};for(let Gt of Be.animations)Ge[Gt.name]=Gt;let Rt=_t.clipAction(Ge.Idle||Be.animations[0]);Rt.play(),Rt.time=Math.random()*2;let fn={id:A,root:me,mixer:_t,clips:Ge,idle:Rt,current:null,height:ue.h||1.5,head:new L,modelH:At};return X[A]=fn,ue.shadow!==!1&&$(Y,Q,.9,.75,.9),fn}function We(A,G,{loop:Y=!1}={}){let Q=X[A];if(!Q||i)return!1;let ae=Q.clips[G];if(!ae)return!1;let ue=Q.mixer.clipAction(ae);Q.current&&Q.current!==ue&&Q.current.fadeOut(.2),ue.reset(),ue.setLoop(Y?Ao:ll,Y?1/0:1),ue.clampWhenFinished=!0,ue.fadeIn(.2).play(),Q.idle.fadeOut(.2),Q.current=ue;let Be=me=>{me.action===ue&&(Q.mixer.removeEventListener("finished",Be),ue.fadeOut(.3),Q.idle.reset().fadeIn(.3).play(),Q.current=null)};return Q.mixer.addEventListener("finished",Be),!0}g(2.2,.32,.7,d.beam,.35,.16,-4.85),Ue("barkeep","Characters_Henry",.35,-4.75,0,{h:1.95,y:.32,hue:.55,shadow:!1,noProp:!0}),Ue("oldsailor","Characters_Captain_Barbarossa",-5.45,-.7,1,{h:1.6}),Ue("dicer","Characters_Henry",-2.7,1.15,.95,{h:1.5}),Ue("xo","Characters_Skeleton",3.35,.95,-.95,{h:1.45}),Ue("knife","Characters_Anne",6.35,-3.5,.95,{h:1.5}),Ue("patronA","Characters_Captain_Barbarossa",4,-4.4,Math.PI/2-.3,{h:1.45,hue:.3}),Ue("patronB","Characters_Skeleton",5.45,-4.45,-Math.PI/2+.3,{h:1.4,tint:"#b8d8c8"}),Ue("patronC","Characters_Henry",-2.6,-3.35,.3,{h:1.5,hue:.8,noProp:!0});let Ae=["patronA","patronB","patronC","barkeep","dicer","xo","oldsailor"],xt=3,ct=(()=>{try{let A=o.getContext(),G=A.getExtension("WEBGL_debug_renderer_info");return String(G?A.getParameter(G.UNMASKED_RENDERER_WEBGL):A.getParameter(A.RENDERER))}catch{return""}})(),Pt=/swiftshader|llvmpipe|software/i.test(ct),Jt=i||Pt?0:120,un=h(new en),kt=new Float32Array(Jt*3),Zt=Ai(77);for(let A=0;A<Jt;A++)kt[A*3]=(Zt()-.5)*14,kt[A*3+1]=.3+Zt()*3.8,kt[A*3+2]=-5+Zt()*8;un.setAttribute("position",new Qt(kt,3)),c.add(new rs(un,h(new ki({size:.035,map:h(hn(Ql("rgba(255,235,200,1)","rgba(255,220,160,.4)"),1,1)),transparent:!0,opacity:.5,depthWrite:!1,blending:Ln}))));let M=h(new ln({map:h(hn(mx(),1,1)),transparent:!0,depthWrite:!1,blending:Ln,opacity:.55})),F=h(new ln({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})),O=[{id:"barkeep",anchor:[.35,2.55,-4.7],ring:[.4,-3.3,1.6],hit:[[.4,1.5,-4.4],[1.6,2.2,1.4]],view:{pos:[.4,2,-.9],target:[.35,1.55,-4.6]}},{id:"oldsailor",anchor:[-5.35,2.25,-.7],ring:[-4.95,-.8,2.3],hit:[[-4.95,.9,-.8],[2.2,1.9,1.9]],view:{pos:[-3,2,2.6],target:[-5,1.05,-.85]}},{id:"dicer",anchor:[-2.7,2.15,1.15],ring:[-1.95,1.65,2.2],hit:[[-2.05,.85,1.6],[2.1,1.7,1.9]],view:{pos:[-.4,1.9,4.1],target:[-2.1,.95,1.4]}},{id:"xo",anchor:[3.35,2.1,.95],ring:[2.7,1.3,2.3],hit:[[2.8,.85,1.3],[2.1,1.8,1.9]],view:{pos:[1.5,1.95,4.3],target:[2.8,1,1.2]}},{id:"knife",anchor:[6.9,2.6,-2.9],ring:[6.3,-1.8,2.6],hit:[[6.4,1.3,-1.9],[3.2,2.6,2.4]],view:{pos:[2.6,2.05,1.6],target:[7,1.45,-2]}}],q=[];for(let A of O){let G=p(new Kt(1,1),M.clone(),A.ring[0],.02,A.ring[1]);h(G.material),G.rotation.x=-Math.PI/2,G.scale.setScalar(A.ring[2]),G.renderOrder=2,A.ringMesh=G;let[[Y,Q,ae],[ue,Be,me]]=A.hit,Je=p(new bn(ue,Be,me),F,Y,Q,ae);Je.visible=!1,Je.userData.spot=A.id,q.push(Je),A.anchorV=new L(...A.anchor)}let J={pos:new L(0,2.75,7.6),target:new L(0,1.3,-1.4)},k={pos:J.pos.clone(),target:J.target.clone(),yaw:0,from:null,to:null,t:1,dur:.9,focus:null,off:0,offGoal:.17};function ye(){let A=r()/a();l.aspect=A,l.fov=xf(2*Math.atan(Math.tan(42*Math.PI/180)/A)*180/Math.PI,40,72),l.updateProjectionMatrix()}ye();function Re(A,G){k.from={pos:k.pos.clone(),target:k.target.clone()},k.to={pos:new L(...A.pos.isVector3?A.pos.toArray():A.pos),target:new L(...A.target.isVector3?A.target.toArray():A.target)},k.t=i?1:0,k.focus=G,i&&(k.pos.copy(k.to.pos),k.target.copy(k.to.target)),G&&(k.yaw=0)}let Oe=new Tr,$e=new Ze;function gt(A,G){let Y=o.domElement.getBoundingClientRect();$e.set((A-Y.left)/Y.width*2-1,-((G-Y.top)/Y.height)*2+1),Oe.setFromCamera($e,l);let Q=Oe.intersectObjects(q,!1)[0];return Q?Q.object.userData.spot:null}let et=null,C=o.domElement;C.style.touchAction="none";let B=A=>{if(!et){et={id:A.pointerId,x:A.clientX,y:A.clientY,yaw:k.yaw,moved:!1};try{C.setPointerCapture(A.pointerId)}catch{}}},j=A=>{if(!et||A.pointerId!==et.id)return;let G=A.clientX-et.x;Math.abs(G)+Math.abs(A.clientY-et.y)>10&&(et.moved=!0),et.moved&&!k.focus&&(k.yaw=xf(et.yaw-G/r()*1.1,-.42,.42))},ee=A=>{var Y;if(!et||A.pointerId!==et.id)return;let G=et;et=null;try{C.releasePointerCapture(A.pointerId)}catch{}G.moved||(Y=e.onTap)==null||Y.call(e,gt(A.clientX,A.clientY))};C.addEventListener("pointerdown",B),C.addEventListener("pointermove",j),C.addEventListener("pointerup",ee),C.addEventListener("pointercancel",ee);let U=null,z=3.5;function be(){let A=ie();c.add(A);let G=Math.random()*pn,Y=.1+Math.random()*.35;U={k:A,start:new L(6.6,1.4,-3.25),end:new L(H-.14-.05,1.65+Math.sin(G)*Y,-2.3+Math.cos(G)*Y),t:0},We("knife","Sword")}let De=[];if(Ue("bard","Characters_Anne",-1.45,-3.55,.35,{h:1.45,hue:.12}),X.bard){let A=X.bard,G=.35,Y=new L(Math.sin(G),0,Math.cos(G)),Q=new L(Math.cos(G),0,-Math.sin(G)),ae=new It;ae.userData.dynamic=!0,c.add(ae),ae.rotation.y=G,Ee("Weapon_Lute",0,0,0,{h:.7,parent:ae,rx:0,ry:Math.PI/2,rz:-1.05});let ue=A.root.position.clone().addScaledVector(Y,.24).addScaledVector(Q,-.05);ue.y=.78;let[Be,me]=Dn(64,64);me.font="bold 50px Georgia, serif",me.textAlign="center",me.textBaseline="middle",me.shadowColor="rgba(0,0,0,.6)",me.shadowBlur=4,me.fillStyle="#ffd77a",me.fillText("\u266A",32,34);let Je=h(new jn({map:h(hn(Be,1,1)),transparent:!0,depthWrite:!1})),At=Array.from({length:4},(Mt,_t)=>{let Ge=new Yn(Je.clone());return h(Ge.material),Ge.scale.setScalar(.16),c.add(Ge),{m:Ge,ph:_t/4}});De.push((Mt,_t)=>{let Ge=Math.sin(_t*7.5);A.root.rotation.y=G+Math.sin(_t*1.1)*.07,A.root.position.y=Math.abs(Math.sin(_t*2.2))*.02,ae.position.copy(ue),ae.position.y+=A.root.position.y,ae.rotation.z=Ge*.025,ae.rotation.y=A.root.rotation.y;for(let Rt of At){let fn=(_t*.32+Rt.ph)%1;Rt.m.position.set(ue.x+Math.sin(fn*6+Rt.ph*9)*.18+Y.x*.2,ue.y+.25+fn*1.3,ue.z+Math.cos(fn*5+Rt.ph*7)*.15),Rt.m.material.opacity=Math.sin(fn*Math.PI)*.9,Rt.m.scale.setScalar(.12+fn*.08)}})}if(Ue("server","Characters_Anne",1.6,-3.2,0,{h:1.42,hue:.62}),X.server&&X.server.clips.Walk){let A=X.server,G=A.mixer.clipAction(A.clips.Walk);G.setLoop(Ao,1/0);let Y=[[1.6,-3.2],[3.4,-.6],[.6,.5],[-2.2,-.4],[-2.4,-2.2],[.2,-2.9]],Q=0,ae=2.5;De.push(ue=>{if(k.focus==="server")return;if(ae>0){ae-=ue,ae<=0&&(A.idle.fadeOut(.25),G.reset().fadeIn(.25).play());return}let[Be,me]=Y[(Q+1)%Y.length],Je=A.root.position,At=Be-Je.x,Mt=me-Je.z,_t=Math.hypot(At,Mt),Rt=Math.atan2(At,Mt)-A.root.rotation.y;Rt=Math.atan2(Math.sin(Rt),Math.cos(Rt)),A.root.rotation.y+=Rt*Math.min(1,ue*6);let fn=Math.min(_t,1.05*ue);_t>1e-4&&(Je.x+=At/_t*fn,Je.z+=Mt/_t*fn),_t<.05&&(Q=(Q+1)%Y.length,ae=1.5+Math.random()*2.5,G.fadeOut(.25),A.idle.reset().fadeIn(.25).play(),Math.random()<.4&&We("server",Math.random()<.5?"Wave":"Yes"))})}{let A=h(new jn({map:h(hn(Ql("rgba(255,230,160,1)","rgba(255,120,30,.5)"),1,1)),blending:Ln,transparent:!0,depthWrite:!1})),G=Array.from({length:Pt?6:22},(Y,Q)=>{let ae=new Yn(A);return ae.scale.setScalar(.05),c.add(ae),{m:ae,ph:Math.random(),sp:.25+Math.random()*.35,sx:(Math.random()-.5)*.6}});De.push((Y,Q)=>{for(let ae of G){let ue=(Q*ae.sp+ae.ph)%1;ae.m.position.set(K+.38+Math.sin(Q*2+ae.ph*20)*.08+ae.sx*ue,.5+ue*1.7,fe+ae.sx*.5),ae.m.scale.setScalar(.06*(1-ue)+.01)}})}let tt=A=>(A.userData.dynamic=!0,A);[ve,...ht,...q,...O.map(A=>A.ringMesh),W,...Object.values(X).map(A=>A.root)].forEach(tt);let nt=new Map;function qe(A){if(!A.isMeshStandardMaterial)return A;if(nt.has(A))return nt.get(A);let G=h(new Sr({map:A.map,color:A.color,emissive:A.emissive,emissiveMap:A.emissiveMap,emissiveIntensity:A.emissiveIntensity,transparent:A.transparent,opacity:A.opacity,side:A.side,alphaTest:A.alphaTest,depthWrite:A.depthWrite}));return nt.set(A,G),G}function Lt(){c.updateMatrixWorld(!0);let A=new Map;c.traverse(Y=>{var ue,Be,me,Je,At,Mt,_t,Ge,Rt,fn;if(!Y.isMesh||Y.isSkinnedMesh||Array.isArray(Y.material)||!Y.geometry)return;for(let Gt=Y;Gt;Gt=Gt.parent)if(Gt.userData.dynamic)return;let Q=Y.material,ae=[Q.type,((ue=Q.map)==null?void 0:ue.uuid)||"",((me=(Be=Q.color)==null?void 0:Be.getHexString)==null?void 0:me.call(Be))||"",((At=(Je=Q.emissive)==null?void 0:Je.getHexString)==null?void 0:At.call(Je))||"",((Mt=Q.emissiveMap)==null?void 0:Mt.uuid)||"",((_t=Q.emissiveIntensity)!=null?_t:0).toFixed(2),Q.transparent?1:0,((Ge=Q.opacity)!=null?Ge:1).toFixed(2),((Rt=Q.roughness)!=null?Rt:0).toFixed(2),((fn=Q.metalness)!=null?fn:0).toFixed(2),Q.side,Q.blending,Q.depthWrite?1:0,Y.renderOrder].join("|");A.has(ae)||A.set(ae,{mat:Q,parts:[],order:Y.renderOrder}),A.get(ae).parts.push(Y)});let G=0;for(let{mat:Y,parts:Q,order:ae}of A.values()){if(Q.length<2)continue;let ue=[],Be=[],me=[];for(let _t of Q){let Ge=_t.geometry.index?_t.geometry.toNonIndexed():_t.geometry.clone();Ge.applyMatrix4(_t.matrixWorld);let Rt=Ge.attributes.position.count;ue.push(Ge.attributes.position.array),Be.push(Ge.attributes.normal?Ge.attributes.normal.array:new Float32Array(Rt*3)),me.push(Ge.attributes.uv?Ge.attributes.uv.array:new Float32Array(Rt*2)),Ge.dispose()}let Je=_t=>{let Ge=_t.reduce((Gt,pi)=>Gt+pi.length,0),Rt=new Float32Array(Ge),fn=0;for(let Gt of _t)Rt.set(Gt,fn),fn+=Gt.length;return Rt},At=h(new en);At.setAttribute("position",new Qt(Je(ue),3)),At.setAttribute("normal",new Qt(Je(Be),3)),At.setAttribute("uv",new Qt(Je(me),2)),At.computeBoundingSphere();let Mt=new dt(At,qe(Y));Mt.renderOrder=ae,Mt.matrixAutoUpdate=!1,c.add(Mt);for(let _t of Q)_t.parent.remove(_t);G+=Q.length}return G}let lt=e.noMerge?0:Lt(),Wt=new vi;Wt.background=new Ne("#3a2210"),Wt.add(new li("#ffe2b8","#3a1d08",1.1));let vn=new Rn("#ffd7a0",2.2);vn.position.set(1.5,2.5,3),Wt.add(vn);let Xt=new Rn("#ff9a4a",1.4);Xt.position.set(-2,1.5,-2),Wt.add(Xt);let xn=new cn(24,1,.05,30),Me={};function Xe(A){if(Me[A])return Me[A];let G=X[A];if(!G)return"";let Y=256,Q=new _n(Y,Y,{colorSpace:Nt}),ae=ks(G.root);ae.position.set(0,0,0),ae.rotation.set(0,-.25,0),Wt.add(ae);let ue=new Wi(ae);G.clips.Idle&&(ue.clipAction(G.clips.Idle).play(),ue.update(.6)),ae.updateMatrixWorld(!0);let Be=G.height;xn.position.set(0,Be*.78,Be*1.25),xn.lookAt(0,Be*.66,0),o.setRenderTarget(Q),o.render(Wt,xn),o.setRenderTarget(null),Wt.remove(ae),ue.stopAllAction();let me=new Uint8Array(Y*Y*4);o.readRenderTargetPixels(Q,0,0,Y,Y,me),Q.dispose();let[Je,At]=Dn(Y,Y),Mt=At.createImageData(Y,Y);for(let _t=0;_t<Y;_t++)Mt.data.set(me.subarray((Y-1-_t)*Y*4,(Y-_t)*Y*4),_t*Y*4);return At.putImageData(Mt,0,0),Me[A]=Je.toDataURL("image/png")}let ze=0,at=0,bt=0,Tt=!1,ft=!1,di=0,Jn=0,Zn=!1,Un=new L,Nr=new L,Hn={n:0,ms:0};function zs(A){var Be,me,Je,At;if(ze=requestAnimationFrame(zs),!Tt)return;let G=at?Math.min(.05,(A-at)/1e3):1/60,Y=Jn?Math.min(.25,(A-Jn)/1e3):1/60;if(at=A,Jn=A,bt+=G,di++,k.t<1){k.t=Math.min(1,k.t+Y/k.dur);let Mt=ax(k.t);k.pos.lerpVectors(k.from.pos,k.to.pos,Mt),k.target.lerpVectors(k.from.target,k.to.target,Mt)}!et&&!k.focus&&(k.yaw*=.985);let Q=i?0:Math.sin(bt*.35)*.04;Un.copy(k.pos).sub(k.target);let ae=k.yaw+(k.focus?0:Q*.3);l.position.set(k.target.x+Un.x*Math.cos(ae)+Un.z*Math.sin(ae),k.pos.y+(i?0:Math.sin(bt*.5)*.03),k.target.z-Un.x*Math.sin(ae)+Un.z*Math.cos(ae)),l.lookAt(k.target);let ue=k.focus?r()*k.offGoal:0;k.off+=(ue-k.off)*Math.min(1,Y*6),Math.abs(k.off-ue)<.5&&(k.off=ue),k.off>.5?l.setViewOffset(r(),a(),k.off,0,r(),a()):(Be=l.view)!=null&&Be.enabled&&l.clearViewOffset();for(let Mt of Object.values(X))Mt.mixer.update(i?0:Y);if(!i){for(let Ge of yt){let Rt=.82+Math.sin(bt*11+Ge.seed)*.1+Math.sin(bt*23.7+Ge.seed*2)*.08;Ge.f.scale.set(Ge.s*.6*(2-Rt),Ge.s*1.2*Rt,1),(me=Ge.g)==null||me.scale.setScalar(Ge.s*6*Ge.glow*(.9+Rt*.15))}for(let Ge of Ye)Ge.l.intensity=Ge.base*(1-Ge.flick+Ge.flick*(.6+.4*Math.sin(bt*9+Ge.seed)*Math.sin(bt*3.3+Ge.seed*1.7)));let Mt=ve.geometry.attributes.position;for(let Ge=0;Ge<Mt.count;Ge++){let Rt=Ot[Ge*3],fn=Ot[Ge*3+1];Mt.array[Ge*3+2]=.02+Math.sin(Rt*3+bt*1.2)*.018*(.45-fn)}Mt.needsUpdate=!0;for(let Ge=0;Ge<Jt;Ge++)kt[Ge*3+1]+=Math.sin(bt*.4+Ge)*8e-4+6e-4,kt[Ge*3]+=Math.cos(bt*.3+Ge*1.3)*9e-4,kt[Ge*3+1]>4.2&&(kt[Ge*3+1]=.3);un.attributes.position.needsUpdate=!0;for(let Ge of De)Ge(G,bt);if(xt-=G,xt<=0){let Ge=Ae[Math.floor(Math.random()*Ae.length)];Ge!==k.focus&&We(Ge,["Yes","No","Wave","Punch"][Math.floor(Math.random()*4)]),xt=2.5+Math.random()*4}if((bt+1.3)%6<G*1.5){for(let Ge of ht)Ge.rotation.y=Math.random()*pn;(Je=e.onSound)==null||Je.call(e,"diceTable")}if(z-=G,z<=0&&!U&&k.focus!=="knife"&&(be(),z=5+Math.random()*4),U){U.t+=G/.34;let Ge=Math.min(1,U.t);if(Ge>.35?(U.k.position.lerpVectors(U.start,U.end,(Ge-.35)/.65),U.k.position.y+=Math.sin((Ge-.35)/.65*Math.PI)*.12,U.k.lookAt(Nr.set(H+2,U.k.position.y,U.k.position.z))):U.k.position.copy(U.start),Ge>=1){(At=e.onSound)==null||At.call(e,"thunk");let Rt=ne.length>6?ne.shift():null;Rt&&Rt.parent.remove(Rt),W.worldToLocal(U.k.position),U.k.position.z=.05,U.k.rotation.set(0,0,0),W.add(U.k),ne.push(U.k),U=null}}}for(let Mt of O)Mt.ringMesh.material.opacity=k.focus===Mt.id?.95:.36+(i?0:Math.sin(bt*2.4+Mt.ring[0])*.14);if(o.render(c,l),Hn.n++,Hn.ms+=Y*1e3,e.adaptive!==!1&&Hn.n>=90){let Mt=Hn.ms/Hn.n;Hn.n=0,Hn.ms=0;let _t=o.getPixelRatio();Mt>38&&_t>.76?(o.setPixelRatio(Math.max(.75,_t-.25)),o.setSize(r(),a())):Mt<20&&_t<Math.min(devicePixelRatio||1,1.5)-.01&&(o.setPixelRatio(Math.min(Math.min(devicePixelRatio||1,1.5),_t+.25)),o.setSize(r(),a()))}if(e.onFrame){let Mt=r(),_t=a(),Ge=[];for(let Rt of O)Un.copy(Rt.anchorV).project(l),Ge.push({id:Rt.id,x:(Un.x*.5+.5)*Mt,y:(-Un.y*.5+.5)*_t,visible:Un.z<1&&Un.z>-1});e.onFrame(Ge)}}let Fr=()=>{o.setSize(r(),a()),ye()};addEventListener("resize",Fr);let qi="ResizeObserver"in window?new ResizeObserver(Fr):null;qi==null||qi.observe(s);let pa=!1,$l=A=>{var G;A.preventDefault(),!pa&&(ft=!0,Tt=!1,(G=e.onContextLost)==null||G.call(e))};C.addEventListener("webglcontextlost",$l),k.pos.copy(J.pos),k.target.copy(J.target),k.t=1,i||(k.pos.set(0,2.4,10.5),k.target.set(0,1.5,-1),Re(J,null),k.dur=1.6,setTimeout(()=>k.dur=.9,1700)),o.compile(c,l);for(let A of["barkeep","oldsailor","dicer","xo","knife"])Xe(A);return Tt=!0,ze=requestAnimationFrame(zs),{spots:O.map(A=>A.id),_debug:{scene:c,renderer:o,npcs:X,camera:l},get focused(){return k.focus},get moving(){return k.t<1},get frames(){return di},get lost(){return ft},get running(){return Tt},info(){return{gpu:ct,software:Pt,heights:Object.fromEntries(Object.values(X).map(A=>[A.id,+A.modelH.toFixed(3)])),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,textures:o.info.memory.textures,geometries:o.info.memory.geometries,lights:Ye.length,merged:lt,npcs:Object.keys(X).length,models:Object.keys(de).filter(A=>de[A]).length,missing:Z,pixelRatio:o.getPixelRatio(),size:[r(),a()]}},portrait:Xe,react(A,G){let Y={Yes:"Yes",No:"No",Wave:"Wave",Punch:"Punch",Think:null,Sword:"Sword",Hit:"HitReact"};return Y[G]===null?!1:We(A,Y[G]||G)},sample(){o.render(c,l);let A=o.getContext(),G=A.drawingBufferWidth,Y=A.drawingBufferHeight,Q=new Uint8Array(4),ae=0,ue=0,Be=0,me=0;for(let Je=1;Je<24;Je++)for(let At=1;At<48;At++){A.readPixels(Math.floor(G*At/48),Math.floor(Y*Je/24),1,1,A.RGBA,A.UNSIGNED_BYTE,Q);let Mt=(Q[0]+Q[1]+Q[2])/3;Be+=Mt,me++,Mt<40&&ae++,Mt>150&&ue++}return{mean:Be/me,lo:ae,hi:ue,n:me}},probe(A,G){var ae,ue,Be;let Y=o.domElement.getBoundingClientRect();$e.set((A-Y.left)/Y.width*2-1,-((G-Y.top)/Y.height)*2+1),Oe.setFromCamera($e,l);let Q=Oe.intersectObjects(c.children,!0).filter(me=>me.object.visible&&!me.object.isSprite&&!me.object.isPoints)[0];return Q&&Q.object.geometry.computeBoundingBox(),Q?{bb:Q.object.geometry.boundingBox?[Q.object.geometry.boundingBox.min.toArray().map(me=>+me.toFixed(2)),Q.object.geometry.boundingBox.max.toArray().map(me=>+me.toFixed(2))]:null,verts:Q.object.geometry.attributes.position.count,map:!!Q.object.material.map,p:Q.point.toArray().map(me=>+me.toFixed(2)),color:(Be=(ue=(ae=Q.object.material)==null?void 0:ae.color)==null?void 0:ue.getHexString)==null?void 0:Be.call(ue),name:(()=>{let me=[];for(let Je=Q.object;Je;Je=Je.parent)me.push(Je.name||Je.type);return me.join("<")})(),skinned:!!Q.object.isSkinnedMesh}:null},hitPoint(A){let G=q.find(Y=>Y.userData.spot===A);return G?(G.geometry.computeBoundingBox(),Un.copy(G.position),Un.y+=G.geometry.boundingBox.max.y*.6,Un.project(l),{x:(Un.x*.5+.5)*r(),y:(-Un.y*.5+.5)*a()}):null},focus(A,G=.17){let Y=O.find(Q=>Q.id===A);return Y?(k.offGoal=G,Re(Y.view,A),!0):!1},sit(A){let G=O.find(ue=>ue.id===A);if(!G)return!1;let Y=G.view.pos,Q=G.view.target,ae=A==="knife"?.35:.55;return k.offGoal=0,Re({pos:[Y[0]+(Q[0]-Y[0])*ae,Y[1]+.35,Y[2]+(Q[2]-Y[2])*ae],target:Q},A),!0},unfocus(){return k.focus?(Re(J,null),!0):!1},pause(){Tt=!1,at=0,Jn=0,Hn.n=0,Hn.ms=0},resume(){ft||(Tt=!0,at=0,Jn=0)},dispose(){var A,G;pa=!0,Tt=!1,cancelAnimationFrame(ze),removeEventListener("resize",Fr),qi==null||qi.disconnect(),C.removeEventListener("webglcontextlost",$l),C.removeEventListener("pointerdown",B),C.removeEventListener("pointermove",j),C.removeEventListener("pointerup",ee),C.removeEventListener("pointercancel",ee);for(let Y of Object.values(X))Y.mixer.stopAllAction();c.traverse(Y=>{Y.geometry&&Y.geometry.dispose();let Q=Y.material;Q&&(Array.isArray(Q)?Q:[Q]).forEach(ae=>{var ue,Be;(ue=ae.map)==null||ue.dispose(),(Be=ae.emissiveMap)==null||Be.dispose(),ae.dispose()})});for(let Y of u)(A=Y.dispose)==null||A.call(Y);for(let Y of Object.values(de))Y==null||Y.scene.traverse(Q=>{var ae,ue,Be,me,Je;(ae=Q.geometry)==null||ae.dispose(),(Be=(ue=Q.material)==null?void 0:ue.map)==null||Be.dispose(),(Je=(me=Q.material)==null?void 0:me.dispose)==null||Je.call(me)});o.dispose(),(G=o.forceContextLoss)==null||G.call(o),C.remove()}}}window.PirateTavern3D={create:yf};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
