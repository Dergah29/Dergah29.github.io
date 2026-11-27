(()=>{var ol="160";var wd=0,sh=1,Td=2;var Io=1,fa=2,Yi=3,Ui=0,zn=1,pn=2;var Ii=0,Di=1,Rn=2,rh=3,ah=4,Ad=5,Is=100,Rd=101,Cd=102,oh=103,ch=104,Pd=200,Ld=201,Id=202,Dd=203,wc=204,Tc=205,Ud=206,Nd=207,Fd=208,Od=209,kd=210,Hd=211,Bd=212,zd=213,Gd=214,Vd=0,Wd=1,Xd=2,no=3,qd=4,jd=5,Yd=6,Kd=7,cl=0,Jd=1,Zd=2,us=0,ll=1,hl=2,ul=3,Ri=4,Qd=5,dl=6,lh="attached",$d="detached",Wu=300,Mr=301,Er=302,Ac=303,Rc=304,Do=306,Gn=1e3,ci=1001,ks=1002,Nn=1003,io=1004;var na=1005;var Fn=1006,fl=1007;var ds=1008;var bi=1009,ef=1010,tf=1011,pl=1012,Xu=1013,ls=1014,Ji=1015,ei=1016,qu=1017,ju=1018,Ns=1020,nf=1021,Kn=1023,sf=1024,rf=1025,Fs=1026,Sr=1027,af=1028,Yu=1029,of=1030,Ku=1031,Ju=1033,Xo=33776,qo=33777,jo=33778,Yo=33779,hh=35840,uh=35841,dh=35842,fh=35843,Zu=36196,ph=37492,mh=37496,gh=37808,bh=37809,xh=37810,_h=37811,vh=37812,yh=37813,Mh=37814,Eh=37815,Sh=37816,wh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Ko=36492,Ph=36494,Lh=36495,cf=36283,Ih=36284,Dh=36285,Uh=36286,pa=2200,Uo=2201,lf=2202,wr=2300,Hs=2301,Jo=2302,gr=2400,br=2401,so=2402,ml=2500,hf=2501,Qu=0,No=1,ma=2,$u=3e3,Os=3001,uf=3200,df=3201,gl=0,ff=1,gi="",Ut="srgb",On="srgb-linear",bl="display-p3",Fo="display-p3-linear",ro="linear",vn="srgb",ao="rec709",oo="p3";var Ks=7680;var Nh=519,pf=512,mf=513,gf=514,ed=515,bf=516,xf=517,_f=518,vf=519,Cc=35044;var Fh="300 es",Pc=1035,Zi=2e3,co=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,ia=Math.PI/180,Tr=180/Math.PI;function Ai(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Yn(s,e,t){return Math.max(e,Math.min(t,s))}function xl(s,e){return(s%e+e)%e}function yf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Mf(s,e,t){return s!==e?(t-s)/(e-s):0}function sa(s,e,t){return(1-t)*s+t*e}function Ef(s,e,t,n){return sa(s,e,1-Math.exp(-t*n))}function Sf(s,e=1){return e-Math.abs(xl(s,e*2)-e)}function wf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rf(s,e){return s+Math.random()*(e-s)}function Cf(s){return s*(.5-Math.random())}function Pf(s){s!==void 0&&(Oh=s);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(s){return s*ia}function If(s){return s*Tr}function Lc(s){return(s&s-1)===0&&s!==0}function Df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*m,o*l);break;case"YXY":s.set(c*m,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ga={DEG2RAD:ia,RAD2DEG:Tr,generateUUID:Ai,clamp:Yn,euclideanModulo:xl,mapLinear:yf,inverseLerp:Mf,lerp:sa,damp:Ef,pingpong:Sf,smoothstep:wf,smootherstep:Tf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Pf,degToRad:Lf,radToDeg:If,isPowerOfTwo:Lc,ceilPowerOfTwo:Df,floorPowerOfTwo:lo,setQuaternionFromProperEuler:Uf,normalize:xn,denormalize:Li},lt=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],x=i[0],p=i[3],f=i[6],y=i[1],v=i[4],T=i[7],N=i[2],C=i[5],E=i[8];return r[0]=a*x+o*y+c*N,r[3]=a*p+o*v+c*C,r[6]=a*f+o*T+c*E,r[1]=l*x+u*y+h*N,r[4]=l*p+u*v+h*C,r[7]=l*f+u*T+h*E,r[2]=d*x+m*y+g*N,r[5]=d*p+m*v+g*C,r[8]=d*f+m*T+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new Zt;function td(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){let s=oa("canvas");return s.style.display="block",s}var kh={};function ra(s){s in kh||(kh[s]=!0,console.warn(s))}var Hh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[On]:{transfer:ro,primaries:ao,toReference:s=>s,fromReference:s=>s},[Ut]:{transfer:vn,primaries:ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fo]:{transfer:ro,primaries:oo,toReference:s=>s.applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(Hh)},[bl]:{transfer:vn,primaries:oo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(Hh).convertLinearToSRGB()}},Ff=new Set([On,Fo]),rn={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ff.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=wa[e].toReference,i=wa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wa[s].primaries},getTransfer:function(s){return s===gi?ro:wa[s].transfer}};function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Js,ho=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=oa("canvas")),Js.width=e.width,Js.height=e.height;let n=Js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Of=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($o(i[a].image)):r.push($o(i[a]))}else r=$o(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $o(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,Xn=class s extends Qi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ci,i=ci,r=Fn,a=ds,o=Kn,c=bi,l=s.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ai(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Os?Ut:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Os:$u}set encoding(e){ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Os?Ut:gi}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Wu;Xn.DEFAULT_ANISOTROPY=1;var Mn=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,T=(m+1)/2,N=(f+1)/2,C=(u+d)/4,E=(h+x)/4,q=(g+p)/4;return v>T&&v>N?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=E/n):T>N?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=C/i,r=q/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=E/r,i=q/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mn(0,0,e,t),this.scissorTest=!1,this.viewport=new Mn(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Os?Ut:gi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dc=class extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==m||u!==g){let p=1-o,f=c*d+l*m+u*g+h*x,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let N=Math.sqrt(v),C=Math.atan2(N,f*y);p=Math.sin(p*C)/N,o=Math.sin(o*C)/N}let T=o*y;if(c=c*p+d*T,l=l*p+m*T,u=u*p+g*T,h=h*p+x*T,p===1-o){let N=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=N,l*=N,u*=N,h*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new F,zh=new Un,Vn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Aa.subVectors(this.max,qr),Zs.subVectors(e.a,qr),Qs.subVectors(e.b,qr),$s.subVectors(e.c,qr),ss.subVectors(Qs,Zs),rs.subVectors($s,Qs),As.subVectors(Zs,$s);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-As.z,As.y,ss.z,0,-ss.x,rs.z,0,-rs.x,As.z,0,-As.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-As.y,As.x,0];return!tc(t,Zs,Qs,$s,Aa)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,Zs,Qs,$s,Aa))?!1:(Ra.crossVectors(ss,rs),t=[Ra.x,Ra.y,Ra.z],tc(t,Zs,Qs,$s,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new F,new F,new F,new F,new F,new F,new F,new F],Si=new F,Ta=new Vn,Zs=new F,Qs=new F,$s=new F,ss=new F,rs=new F,As=new F,qr=new F,Aa=new F,Ra=new F,Rs=new F;function tc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Rs.fromArray(s,r);let o=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Hf=new Vn,jr=new F,nc=new F,li=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(nc)),this.expandByPoint(jr.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new F,ic=new F,Ca=new F,as=new F,sc=new F,Pa=new F,rc=new F,Bs=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ic.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),as.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=as.dot(this.direction),c=-as.dot(Ca),l=as.lengthSq(),u=Math.abs(1-a*a),h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ic).addScaledVector(Ca,d),m}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),i=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,i,r){sc.subVectors(t,e),Pa.subVectors(n,e),rc.crossVectors(sc,Pa);let a=this.direction.dot(rc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;as.subVectors(this.origin,e);let c=o*this.direction.dot(Pa.crossVectors(as,Pa));if(c<0)return null;let l=o*this.direction.dot(sc.cross(as));if(l<0||c+l>a)return null;let u=-o*as.dot(rc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,d,m,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,m,g,x,p)}set(e,t,n,i,r,a,o,c,l,u,h,d,m,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,m=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,m=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,zf)}lookAt(e,t,n){let i=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),os.crossVectors(n,ai),os.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),os.crossVectors(n,ai)),os.normalize(),La.crossVectors(ai,os),i[0]=os.x,i[4]=La.x,i[8]=ai.x,i[1]=os.y,i[5]=La.y,i[9]=ai.y,i[2]=os.z,i[6]=La.z,i[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],y=n[3],v=n[7],T=n[11],N=n[15],C=i[0],E=i[4],q=i[8],w=i[12],D=i[1],ce=i[5],ue=i[9],re=i[13],B=i[2],ae=i[6],fe=i[10],be=i[14],me=i[3],ge=i[7],Te=i[11],Le=i[15];return r[0]=a*C+o*D+c*B+l*me,r[4]=a*E+o*ce+c*ae+l*ge,r[8]=a*q+o*ue+c*fe+l*Te,r[12]=a*w+o*re+c*be+l*Le,r[1]=u*C+h*D+d*B+m*me,r[5]=u*E+h*ce+d*ae+m*ge,r[9]=u*q+h*ue+d*fe+m*Te,r[13]=u*w+h*re+d*be+m*Le,r[2]=g*C+x*D+p*B+f*me,r[6]=g*E+x*ce+p*ae+f*ge,r[10]=g*q+x*ue+p*fe+f*Te,r[14]=g*w+x*re+p*be+f*Le,r[3]=y*C+v*D+T*B+N*me,r[7]=y*E+v*ce+T*ae+N*ge,r[11]=y*q+v*ue+T*fe+N*Te,r[15]=y*w+v*re+T*be+N*Le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*m-n*c*m)+x*(+t*c*m-t*l*d+r*a*d-i*a*m+i*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],y=h*p*l-x*d*l+x*c*m-o*p*m-h*c*f+o*d*f,v=g*d*l-u*p*l-g*c*m+a*p*m+u*c*f-a*d*f,T=u*x*l-g*h*l+g*o*m-a*x*m-u*o*f+a*h*f,N=g*h*c-u*x*c-g*o*d+a*x*d+u*o*p-a*h*p,C=t*y+n*v+i*T+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/C;return e[0]=y*E,e[1]=(x*d*r-h*p*r-x*i*m+n*p*m+h*i*f-n*d*f)*E,e[2]=(o*p*r-x*c*r+x*i*l-n*p*l-o*i*f+n*c*f)*E,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*m-n*c*m)*E,e[4]=v*E,e[5]=(u*p*r-g*d*r+g*i*m-t*p*m-u*i*f+t*d*f)*E,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*f-t*c*f)*E,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*m+t*c*m)*E,e[8]=T*E,e[9]=(g*h*r-u*x*r-g*n*m+t*x*m+u*n*f-t*h*f)*E,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*f+t*o*f)*E,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*E,e[12]=N*E,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*p+t*h*p)*E,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*p-t*o*p)*E,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,x=a*u,p=a*h,f=o*h,y=c*l,v=c*u,T=c*h,N=n.x,C=n.y,E=n.z;return i[0]=(1-(x+f))*N,i[1]=(m+T)*N,i[2]=(g-v)*N,i[3]=0,i[4]=(m-T)*C,i[5]=(1-(d+f))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(g+v)*E,i[9]=(p-y)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=er.set(i[0],i[1],i[2]).length(),a=er.set(i[4],i[5],i[6]).length(),o=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wi.copy(this);let l=1/r,u=1/a,h=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=h,wi.elements[9]*=h,wi.elements[10]*=h,t.setFromRotationMatrix(wi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Zi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),m,g;if(o===Zi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===co)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Zi){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*l,m=(n+i)*u,g,x;if(o===Zi)g=(a+r)*h,x=-2*h;else if(o===co)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new F,wi=new Jt,Bf=new F(0,0,0),zf=new F(1,1,1),os=new F,La=new F,ai=new F,Gh=new Jt,Vh=new Un,po=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};po.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gf=0,Wh=new F,tr=new Un,Wi=new Jt,Ia=new F,Yr=new F,Vf=new F,Wf=new Un,Xh=new F(1,0,0),qh=new F(0,1,0),jh=new F(0,0,1),Xf={type:"added"},qf={type:"removed"},En=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new po,n=new Un,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Zt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Yr,Ia,this.up):Wi.lookAt(Ia,Yr,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Wi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};En.DEFAULT_UP=new F(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new F,Xi=new F,ac=new F,qi=new F,nr=new F,ir=new F,Yh=new F,oc=new F,cc=new F,lc=new F,Da=!1,Us=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ti.subVectors(i,t),Xi.subVectors(n,t),ac.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(Xi),c=Ti.dot(ac),l=Xi.dot(Xi),u=Xi.dot(ac),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,n,i,r,a,o,c){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c)}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),Xi.subVectors(e,t),Ti.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),Ti.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;nr.subVectors(i,n),ir.subVectors(r,n),oc.subVectors(e,n);let c=nr.dot(oc),l=ir.dot(oc);if(c<=0&&l<=0)return t.copy(n);cc.subVectors(e,i);let u=nr.dot(cc),h=ir.dot(cc);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(nr,a);lc.subVectors(e,r);let m=nr.dot(lc),g=ir.dot(lc);if(g>=0&&m<=g)return t.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ir,o);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Yh.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Yh,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function hc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rn.workingColorSpace){if(e=xl(e,1),t=Yn(t,0,1),n=Yn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return rn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return rn.fromWorkingColorSpace(jn.copy(this),e),Math.round(Yn(jn.r*255,0,255))*65536+Math.round(Yn(jn.g*255,0,255))*256+Math.round(Yn(jn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(jn.copy(this),t);let n=jn.r,i=jn.g,r=jn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Ut){rn.fromWorkingColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,i=jn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Ua);let n=sa(cs.h,Ua.h,t),i=sa(cs.s,Ua.s,t),r=sa(cs.l,Ua.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new Fe;Fe.NAMES=nd;var jf=0,ti=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Di,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==Is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new F,Na=new lt,un=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}};var mo=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nn=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Yf=0,mi=new Jt,uc=new En,sr=new F,oi=new Vn,Kr=new Vn,Bn=new F,mn=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?go:mo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bn.addVectors(oi.min,Kr.min),oi.expandByPoint(Bn),Bn.addVectors(oi.max,Kr.max),oi.expandByPoint(Bn)):(oi.expandByPoint(Kr.min),oi.expandByPoint(Kr.max))}oi.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Bn.fromBufferAttribute(o,l),c&&(sr.fromBufferAttribute(e,l),Bn.add(sr)),i=Math.max(i,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<o;D++)l[D]=new F,u[D]=new F;let h=new F,d=new F,m=new F,g=new lt,x=new lt,p=new lt,f=new F,y=new F;function v(D,ce,ue){h.fromArray(i,D*3),d.fromArray(i,ce*3),m.fromArray(i,ue*3),g.fromArray(a,D*2),x.fromArray(a,ce*2),p.fromArray(a,ue*2),d.sub(h),m.sub(h),x.sub(g),p.sub(g);let re=1/(x.x*p.y-p.x*x.y);isFinite(re)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(re),y.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(re),l[D].add(f),l[ce].add(f),l[ue].add(f),u[D].add(y),u[ce].add(y),u[ue].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let D=0,ce=T.length;D<ce;++D){let ue=T[D],re=ue.start,B=ue.count;for(let ae=re,fe=re+B;ae<fe;ae+=3)v(n[ae+0],n[ae+1],n[ae+2])}let N=new F,C=new F,E=new F,q=new F;function w(D){E.fromArray(r,D*3),q.copy(E);let ce=l[D];N.copy(ce),N.sub(E.multiplyScalar(E.dot(ce))).normalize(),C.crossVectors(q,ce);let re=C.dot(u[D])<0?-1:1;c[D*4]=N.x,c[D*4+1]=N.y,c[D*4+2]=N.z,c[D*4+3]=re}for(let D=0,ce=T.length;D<ce;++D){let ue=T[D],re=ue.start,B=ue.count;for(let ae=re,fe=re+B;ae<fe;ae+=3)w(n[ae+0]),w(n[ae+1]),w(n[ae+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new Jt,Cs=new Bs,Fa=new li,Jh=new F,rr=new F,ar=new F,or=new F,dc=new F,Oa=new F,ka=new lt,Ha=new lt,Ba=new lt,Zh=new F,Qh=new F,$h=new F,za=new F,Ga=new F,ke=class extends En{constructor(e=new mn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(dc.fromBufferAttribute(h,e),a?Oa.addScaledVector(dc,u):Oa.addScaledVector(dc.sub(t),u))}t.add(Oa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Fa.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Fa,Jh)===null||Cs.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,N=v;T<N;T+=3){let C=o.getX(T),E=o.getX(T+1),q=o.getX(T+2);i=Va(this,f,e,n,l,u,h,C,E,q),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let y=o.getX(p),v=o.getX(p+1),T=o.getX(p+2);i=Va(this,a,e,n,l,u,h,y,v,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,N=v;T<N;T+=3){let C=T,E=T+1,q=T+2;i=Va(this,f,e,n,l,u,h,C,E,q),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let y=p,v=p+1,T=p+2;i=Va(this,a,e,n,l,u,h,y,v,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Kf(s,e,t,n,i,r,a,o){let c;if(e.side===zn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Ui,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:s}}function Va(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,rr),s.getVertexPosition(c,ar),s.getVertexPosition(l,or);let u=Kf(s,e,t,n,rr,ar,or,za);if(u){i&&(ka.fromBufferAttribute(i,o),Ha.fromBufferAttribute(i,c),Ba.fromBufferAttribute(i,l),u.uv=Us.getInterpolation(za,rr,ar,or,ka,Ha,Ba,new lt)),r&&(ka.fromBufferAttribute(r,o),Ha.fromBufferAttribute(r,c),Ba.fromBufferAttribute(r,l),u.uv1=Us.getInterpolation(za,rr,ar,or,ka,Ha,Ba,new lt),u.uv2=u.uv1),a&&(Zh.fromBufferAttribute(a,o),Qh.fromBufferAttribute(a,c),$h.fromBufferAttribute(a,l),u.normal=Us.getInterpolation(za,rr,ar,or,Zh,Qh,$h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new F,materialIndex:0};Us.getNormal(rr,ar,or,h.normal),u.face=h}return u}var zt=class s extends mn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function g(x,p,f,y,v,T,N,C,E,q,w){let D=T/E,ce=N/q,ue=T/2,re=N/2,B=C/2,ae=E+1,fe=q+1,be=0,me=0,ge=new F;for(let Te=0;Te<fe;Te++){let Le=Te*ce-re;for(let Ye=0;Ye<ae;Ye++){let he=Ye*D-ue;ge[x]=he*y,ge[p]=Le*v,ge[f]=B,l.push(ge.x,ge.y,ge.z),ge[x]=0,ge[p]=0,ge[f]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(Ye/E),h.push(1-Te/q),be+=1}}for(let Te=0;Te<q;Te++)for(let Le=0;Le<E;Le++){let Ye=d+Le+ae*Te,he=d+Le+ae*(Te+1),ve=d+(Le+1)+ae*(Te+1),ie=d+(Le+1)+ae*Te;c.push(Ye,he,ie),c.push(he,ve,ie),me+=6}o.addGroup(m,me,w),m+=me,d+=be}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $n(s){let e={};for(let t=0;t<s.length;t++){let n=Ar(s[t]);for(let i in n)e[i]=n[i]}return e}function Jf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function id(s){return s.getRenderTarget()===null?s.outputColorSpace:rn.workingColorSpace}var vi={clone:Ar,merge:$n},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_n=class extends bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,lr=1,Uc=class extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _n(cr,lr,e,t);i.layers=this.layers,this.add(i);let r=new _n(cr,lr,e,t);r.layers=this.layers,this.add(r);let a=new _n(cr,lr,e,t);a.layers=this.layers,this.add(a);let o=new _n(cr,lr,e,t);o.layers=this.layers,this.add(o);let c=new _n(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new _n(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends Xn{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nc=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Os?Ut:gi),this.texture=new xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zt(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Ii});r.uniforms.tEquirect.value=t;let a=new ke(i,r),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Fn),new Uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},fc=new F,$f=new F,ep=new Zt,Ki=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fc.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new li,Wa=new F,la=class{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,r=new Ki,a=new Ki){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],x=i[10],p=i[11],f=i[12],y=i[13],v=i[14],T=i[15];if(n[0].setComponents(c-r,d-l,p-m,T-f).normalize(),n[1].setComponents(c+r,d+l,p+m,T+f).normalize(),n[2].setComponents(c+a,d+u,p+g,T+y).normalize(),n[3].setComponents(c-a,d-u,p-g,T-y).normalize(),n[4].setComponents(c-o,d-h,p-x,T-v).normalize(),t===Zi)n[5].setComponents(c+o,d+h,p+x,T+v).normalize();else if(t===co)n[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Wa.x=i.normal.x>0?e.max.x:e.min.x,Wa.y=i.normal.y>0?e.max.y:e.min.y,Wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function tp(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,d=l.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){let d=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),m.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let f=g[x];t?s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}var Qt=class s extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],x=[],p=[];for(let f=0;f<u;f++){let y=f*d-a;for(let v=0;v<l;v++){let T=v*h-r;g.push(T,-y,0),x.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){let v=y+l*f,T=y+l*(f+1),N=y+1+l*(f+1),C=y+1+l*f;m.push(v,T,C),m.push(T,N,C)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`
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
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,tm=`struct PhysicalMaterial {
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
}`,nm=`
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,hg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:vp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:Ep,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Kp,envmap_vertex:kp,fog_vertex:Hp,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:jp,lights_pars_begin:Yp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Qp,lights_phong_pars_fragment:$p,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:bm,morphtarget_vertex:xm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Em,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:km,shadowmap_vertex:Hm,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:jm,tonemapping_pars_fragment:Ym,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Zm,uv_pars_vertex:Qm,uv_vertex:$m,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:bg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:Eg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Ug},Ve={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Pi={basic:{uniforms:$n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:$n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:$n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:$n([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:$n([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:$n([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:$n([Ve.points,Ve.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:$n([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:$n([Ve.common,Ve.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:$n([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:$n([Ve.sprite,Ve.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:$n([Ve.common,Ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:$n([Ve.lights,Ve.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Pi.physical={uniforms:$n([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Xa={r:0,b:0,g:0};function Ng(s,e,t,n,i,r,a){let o=new Fe(0),c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),y=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Do)?(u===void 0&&(u=new ke(new zt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ar(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=rn.getTransfer(v.colorSpace)!==vn,(h!==v||d!==v.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new Qt(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ar(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=rn.getTransfer(v.colorSpace)!==vn,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB(Xa,id(s)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:g}}function Fg(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,u=!1;function h(B,ae,fe,be,me){let ge=!1;if(a){let Te=x(be,fe,ae);l!==Te&&(l=Te,m(l.object)),ge=f(B,be,fe,me),ge&&y(B,be,fe,me)}else{let Te=ae.wireframe===!0;(l.geometry!==be.id||l.program!==fe.id||l.wireframe!==Te)&&(l.geometry=be.id,l.program=fe.id,l.wireframe=Te,ge=!0)}me!==null&&t.update(me,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,q(B,ae,fe,be),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function x(B,ae,fe){let be=fe.wireframe===!0,me=o[B.id];me===void 0&&(me={},o[B.id]=me);let ge=me[ae.id];ge===void 0&&(ge={},me[ae.id]=ge);let Te=ge[be];return Te===void 0&&(Te=p(d()),ge[be]=Te),Te}function p(B){let ae=[],fe=[],be=[];for(let me=0;me<i;me++)ae[me]=0,fe[me]=0,be[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:fe,attributeDivisors:be,object:B,attributes:{},index:null}}function f(B,ae,fe,be){let me=l.attributes,ge=ae.attributes,Te=0,Le=fe.getAttributes();for(let Ye in Le)if(Le[Ye].location>=0){let ve=me[Ye],ie=ge[Ye];if(ie===void 0&&(Ye==="instanceMatrix"&&B.instanceMatrix&&(ie=B.instanceMatrix),Ye==="instanceColor"&&B.instanceColor&&(ie=B.instanceColor)),ve===void 0||ve.attribute!==ie||ie&&ve.data!==ie.data)return!0;Te++}return l.attributesNum!==Te||l.index!==be}function y(B,ae,fe,be){let me={},ge=ae.attributes,Te=0,Le=fe.getAttributes();for(let Ye in Le)if(Le[Ye].location>=0){let ve=ge[Ye];ve===void 0&&(Ye==="instanceMatrix"&&B.instanceMatrix&&(ve=B.instanceMatrix),Ye==="instanceColor"&&B.instanceColor&&(ve=B.instanceColor));let ie={};ie.attribute=ve,ve&&ve.data&&(ie.data=ve.data),me[Ye]=ie,Te++}l.attributes=me,l.attributesNum=Te,l.index=be}function v(){let B=l.newAttributes;for(let ae=0,fe=B.length;ae<fe;ae++)B[ae]=0}function T(B){N(B,0)}function N(B,ae){let fe=l.newAttributes,be=l.enabledAttributes,me=l.attributeDivisors;fe[B]=1,be[B]===0&&(s.enableVertexAttribArray(B),be[B]=1),me[B]!==ae&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,ae),me[B]=ae)}function C(){let B=l.newAttributes,ae=l.enabledAttributes;for(let fe=0,be=ae.length;fe<be;fe++)ae[fe]!==B[fe]&&(s.disableVertexAttribArray(fe),ae[fe]=0)}function E(B,ae,fe,be,me,ge,Te){Te===!0?s.vertexAttribIPointer(B,ae,fe,me,ge):s.vertexAttribPointer(B,ae,fe,be,me,ge)}function q(B,ae,fe,be){if(n.isWebGL2===!1&&(B.isInstancedMesh||be.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let me=be.attributes,ge=fe.getAttributes(),Te=ae.defaultAttributeValues;for(let Le in ge){let Ye=ge[Le];if(Ye.location>=0){let he=me[Le];if(he===void 0&&(Le==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),Le==="instanceColor"&&B.instanceColor&&(he=B.instanceColor)),he!==void 0){let ve=he.normalized,ie=he.itemSize,Ae=t.get(he);if(Ae===void 0)continue;let ht=Ae.buffer,Et=Ae.type,qe=Ae.bytesPerElement,De=n.isWebGL2===!0&&(Et===s.INT||Et===s.UNSIGNED_INT||he.gpuType===Xu);if(he.isInterleavedBufferAttribute){let Be=he.data,J=Be.stride,ln=he.offset;if(Be.isInstancedInterleavedBuffer){for(let ct=0;ct<Ye.locationSize;ct++)N(Ye.location+ct,Be.meshPerAttribute);B.isInstancedMesh!==!0&&be._maxInstanceCount===void 0&&(be._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let ct=0;ct<Ye.locationSize;ct++)T(Ye.location+ct);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let ct=0;ct<Ye.locationSize;ct++)E(Ye.location+ct,ie/Ye.locationSize,Et,ve,J*qe,(ln+ie/Ye.locationSize*ct)*qe,De)}else{if(he.isInstancedBufferAttribute){for(let Be=0;Be<Ye.locationSize;Be++)N(Ye.location+Be,he.meshPerAttribute);B.isInstancedMesh!==!0&&be._maxInstanceCount===void 0&&(be._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<Ye.locationSize;Be++)T(Ye.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Be=0;Be<Ye.locationSize;Be++)E(Ye.location+Be,ie/Ye.locationSize,Et,ve,ie*qe,ie/Ye.locationSize*Be*qe,De)}}else if(Te!==void 0){let ve=Te[Le];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(Ye.location,ve);break;case 3:s.vertexAttrib3fv(Ye.location,ve);break;case 4:s.vertexAttrib4fv(Ye.location,ve);break;default:s.vertexAttrib1fv(Ye.location,ve)}}}}C()}function w(){ue();for(let B in o){let ae=o[B];for(let fe in ae){let be=ae[fe];for(let me in be)g(be[me].object),delete be[me];delete ae[fe]}delete o[B]}}function D(B){if(o[B.id]===void 0)return;let ae=o[B.id];for(let fe in ae){let be=ae[fe];for(let me in be)g(be[me].object),delete be[me];delete ae[fe]}delete o[B.id]}function ce(B){for(let ae in o){let fe=o[ae];if(fe[B.id]===void 0)continue;let be=fe[B.id];for(let me in be)g(be[me].object),delete be[me];delete fe[B.id]}}function ue(){re(),u=!0,l!==c&&(l=c,m(l.object))}function re(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ue,resetDefaultState:re,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:ce,initAttributes:v,enableAttribute:T,disableUnusedAttributes:C}}function Og(s,e,t,n){let i=n.isWebGL2,r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function kg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,T=a||e.has("OES_texture_float"),N=v&&T,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:N,maxSamples:C}}function Hg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ki,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,v=y*4,T=f.clippingState||null;c.value=T,T=u(g,d,v,m);for(let N=0;N!==v;++N)T[N]=t[N];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let f=m+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,T=m;v!==x;++v,T+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Bg(s){let e=new WeakMap;function t(a,o){return o===Ac?a.mapping=Mr:o===Rc&&(a.mapping=Er),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ac||o===Rc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Nc(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fs=class extends bo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xr=4,eu=[.125,.215,.35,.446,.526,.582],Ds=20,pc=new fs,tu=new Fe,mc=null,gc=0,bc=0,Ls=(1+Math.sqrt(5))/2,hr=1/Ls,nu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ls,hr),new F(0,Ls,-hr),new F(hr,0,Ls),new F(-hr,0,Ls),new F(Ls,hr,0),new F(-Ls,hr,0)],_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,bc),e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ei,format:Kn,colorSpace:On,depthBuffer:!1},i=iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Gg(r,e,t)}return i}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,i){let o=new _n(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tu),u.toneMapping=us,u.autoClear=!1;let m=new tn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new ke(new zt,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(tu),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;qa(i,y*v,f>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Mr||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nu[(i-1)%nu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ke(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ds-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Ds;p>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ds}`);let f=[],y=0;for(let E=0;E<Ds;++E){let q=E/x,w=Math.exp(-q*q/2);f.push(w),E===0?y+=w:E<p&&(y+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let T=this._sizeLods[i],N=3*T*(i>v-xr?i-v+xr:0),C=4*(this._cubeSize-T);qa(t,N,C,3*T,2*T),c.setRenderTarget(t),c.render(h,pc)}};function zg(s){let e=[],t=[],n=[],i=s,r=s-xr+1+eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-xr?c=eu[a-s+xr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,p=2,f=1,y=new Float32Array(x*g*m),v=new Float32Array(p*g*m),T=new Float32Array(f*g*m);for(let C=0;C<m;C++){let E=C%3*2/3-1,q=C>2?0:-1,w=[E,q,0,E+2/3,q,0,E+2/3,q+1,0,E,q,0,E+2/3,q+1,0,E,q+1,0];y.set(w,x*g*C),v.set(d,p*g*C);let D=[C,C,C,C,C,C];T.set(D,f*g*C)}let N=new mn;N.setAttribute("position",new un(y,x)),N.setAttribute("uv",new un(v,p)),N.setAttribute("faceIndex",new un(T,f)),e.push(N),i>xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function iu(s,e,t){let n=new In(s,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gg(s,e,t){let n=new Float32Array(Ds),i=new F(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function su(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ru(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Vg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ac||c===Rc,u=c===Mr||c===Er;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new _o(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new _o(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xg(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete i[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let m=h.morphAttributes;for(let g in m){let x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],s.ARRAY_BUFFER)}}function l(h){let d=[],m=h.index,g=h.attributes.position,x=0;if(m!==null){let y=m.array;x=m.version;for(let v=0,T=y.length;v<T;v+=3){let N=y[v+0],C=y[v+1],E=y[v+2];d.push(N,C,C,E,E,N)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,T=y.length/3-1;v<T;v+=3){let N=v+0,C=v+1,E=v+2;d.push(N,C,C,E,E,N)}}else return;let p=new(td(d)?go:mo)(d,1);p.version=x;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function qg(s,e,t,n){let i=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){s.drawElements(r,g,o,m*c),t.update(g,r,1)}function h(m,g,x){if(x===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,x),t.update(g,r,x)}function d(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let f=0;for(let y=0;y<x;y++)f+=g[y];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function jg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yg(s,e){return s[0]-e[0]}function Kg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Jg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Mn,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(u);if(x===void 0||x.count!==g){let B=function(){ue.dispose(),r.delete(u),u.removeEventListener("dispose",B)};x!==void 0&&x.texture.dispose();let y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],E=u.morphAttributes.color||[],q=0;y===!0&&(q=1),v===!0&&(q=2),T===!0&&(q=3);let w=u.attributes.position.count*q,D=1;w>e.maxTextureSize&&(D=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let ce=new Float32Array(w*D*4*g),ue=new fo(ce,w,D,g);ue.type=Ji,ue.needsUpdate=!0;let re=q*4;for(let ae=0;ae<g;ae++){let fe=N[ae],be=C[ae],me=E[ae],ge=w*D*4*ae;for(let Te=0;Te<fe.count;Te++){let Le=Te*re;y===!0&&(a.fromBufferAttribute(fe,Te),ce[ge+Le+0]=a.x,ce[ge+Le+1]=a.y,ce[ge+Le+2]=a.z,ce[ge+Le+3]=0),v===!0&&(a.fromBufferAttribute(be,Te),ce[ge+Le+4]=a.x,ce[ge+Le+5]=a.y,ce[ge+Le+6]=a.z,ce[ge+Le+7]=0),T===!0&&(a.fromBufferAttribute(me,Te),ce[ge+Le+8]=a.x,ce[ge+Le+9]=a.y,ce[ge+Le+10]=a.z,ce[ge+Le+11]=me.itemSize===4?a.w:1)}}x={count:g,texture:ue,size:new lt(w,D)},r.set(u,x),u.addEventListener("dispose",B)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];let f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",f),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){let T=g[v];T[0]=v,T[1]=d[v]}g.sort(Kg);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Yg);let x=u.morphAttributes.position,p=u.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let T=o[v],N=T[0],C=T[1];N!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+v)!==x[N]&&u.setAttribute("morphTarget"+v,x[N]),p&&u.getAttribute("morphNormal"+v)!==p[N]&&u.setAttribute("morphNormal"+v,p[N]),i[v]=C,f+=C):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zg(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var vo=class extends Xn{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Fs,u!==Fs&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=ls),n===void 0&&u===Sr&&(n=Ns),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rd=new Xn,ad=new vo(1,1);ad.compareFunction=ed;var od=new fo,cd=new Dc,ld=new xo,au=[],ou=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function Nr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=au[i];if(r===void 0&&(r=new Float32Array(i),au[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function kn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Hn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oo(s,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2fv(this.addr,e),Hn(t,e)}}function e0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;s.uniform3fv(this.addr,e),Hn(t,e)}}function t0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4fv(this.addr,e),Hn(t,e)}}function n0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;hu.set(n),s.uniformMatrix2fv(this.addr,!1,hu),Hn(t,n)}}function i0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;lu.set(n),s.uniformMatrix3fv(this.addr,!1,lu),Hn(t,n)}}function s0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;cu.set(n),s.uniformMatrix4fv(this.addr,!1,cu),Hn(t,n)}}function r0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2iv(this.addr,e),Hn(t,e)}}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3iv(this.addr,e),Hn(t,e)}}function c0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4iv(this.addr,e),Hn(t,e)}}function l0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2uiv(this.addr,e),Hn(t,e)}}function u0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3uiv(this.addr,e),Hn(t,e)}}function d0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4uiv(this.addr,e),Hn(t,e)}}function f0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?ad:rd;t.setTexture2D(e||r,i)}function p0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cd,i)}function m0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ld,i)}function g0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||od,i)}function b0(s){switch(s){case 5126:return Qg;case 35664:return $g;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(s,e){s.uniform1fv(this.addr,e)}function _0(s,e){let t=Nr(e,this.size,2);s.uniform2fv(this.addr,t)}function v0(s,e){let t=Nr(e,this.size,3);s.uniform3fv(this.addr,t)}function y0(s,e){let t=Nr(e,this.size,4);s.uniform4fv(this.addr,t)}function M0(s,e){let t=Nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E0(s,e){let t=Nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S0(s,e){let t=Nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w0(s,e){s.uniform1iv(this.addr,e)}function T0(s,e){s.uniform2iv(this.addr,e)}function A0(s,e){s.uniform3iv(this.addr,e)}function R0(s,e){s.uniform4iv(this.addr,e)}function C0(s,e){s.uniform1uiv(this.addr,e)}function P0(s,e){s.uniform2uiv(this.addr,e)}function L0(s,e){s.uniform3uiv(this.addr,e)}function I0(s,e){s.uniform4uiv(this.addr,e)}function D0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,r[a])}function U0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cd,r[a])}function N0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ld,r[a])}function F0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||od,r[a])}function O0(s){switch(s){case 5126:return x0;case 35664:return _0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return E0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}},Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function uu(s,e){s.seq.push(e),s.map[e.id]=e}function k0(s,e,t){let n=s.name,i=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),a=xc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){uu(t,l===void 0?new Fc(o,s,e):new Oc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new kc(o),uu(t,h)),t=h}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);k0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function du(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var H0=37297,B0=0;function z0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function G0(s){let e=rn.getPrimaries(rn.workingColorSpace),t=rn.getPrimaries(s),n;switch(e===t?n="":e===oo&&t===ao?n="LinearDisplayP3ToLinearSRGB":e===ao&&t===oo&&(n="LinearSRGBToLinearDisplayP3"),s){case On:case Fo:return[n,"LinearTransferOETF"];case Ut:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+z0(s.getShaderSource(e),a)}else return i}function V0(s,e){let t=G0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function W0(s,e){let t;switch(e){case ll:t="Linear";break;case hl:t="Reinhard";break;case ul:t="OptimizedCineon";break;case Ri:t="ACESFilmic";break;case dl:t="AgX";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function X0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function q0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function j0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function _r(s){return s!==""}function pu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(K0,Z0)}var J0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z0(s,e){let t=Yt[e];if(t===void 0){let n=J0.get(e);if(n!==void 0)t=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(s){return s.replace(Q0,$0)}function $0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mr:case Er:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function sb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=eb(t),l=tb(t),u=nb(t),h=ib(t),d=sb(t),m=t.isWebGL2?"":X0(t),g=q0(t),x=j0(r),p=i.createProgram(),f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),y.length>0&&(y+=`
`)):(f=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),y=[m,bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?Yt.tonemapping_pars_fragment:"",t.toneMapping!==us?W0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=Hc(a),a=pu(a,t),a=mu(a,t),o=Hc(o),o=pu(o,t),o=mu(o,t),a=gu(a),o=gu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let T=v+f+a,N=v+y+o,C=du(i,i.VERTEX_SHADER,T),E=du(i,i.FRAGMENT_SHADER,N);i.attachShader(p,C),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function q(ue){if(s.debug.checkShaderErrors){let re=i.getProgramInfoLog(p).trim(),B=i.getShaderInfoLog(C).trim(),ae=i.getShaderInfoLog(E).trim(),fe=!0,be=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,C,E);else{let me=fu(i,C,"vertex"),ge=fu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+me+`
`+ge)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(B===""||ae==="")&&(be=!1);be&&(ue.diagnostics={runnable:fe,programLog:re,vertexShader:{log:B,prefix:f},fragmentShader:{log:ae,prefix:y}})}i.deleteShader(C),i.deleteShader(E),w=new yr(i,p),D=Y0(i,p)}let w;this.getUniforms=function(){return w===void 0&&q(this),w};let D;this.getAttributes=function(){return D===void 0&&q(this),D};let ce=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=i.getProgramParameter(p,H0)),ce},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=E,this}var ab=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}};function ob(s,e,t,n,i,r,a){let o=new ca,c=new Bc,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function p(w,D,ce,ue,re){let B=ue.fog,ae=re.geometry,fe=w.isMeshStandardMaterial?ue.environment:null,be=(w.isMeshStandardMaterial?t:e).get(w.envMap||fe),me=be&&be.mapping===Do?be.image.height:null,ge=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let Te=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Le=Te!==void 0?Te.length:0,Ye=0;ae.morphAttributes.position!==void 0&&(Ye=1),ae.morphAttributes.normal!==void 0&&(Ye=2),ae.morphAttributes.color!==void 0&&(Ye=3);let he,ve,ie,Ae;if(ge){let oe=Pi[ge];he=oe.vertexShader,ve=oe.fragmentShader}else he=w.vertexShader,ve=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),Ae=c.getFragmentShaderID(w);let ht=s.getRenderTarget(),Et=re.isInstancedMesh===!0,qe=re.isBatchedMesh===!0,De=!!w.map,Be=!!w.matcap,J=!!be,ln=!!w.aoMap,ct=!!w.lightMap,mt=!!w.bumpMap,nt=!!w.normalMap,yt=!!w.displacementMap,H=!!w.emissiveMap,P=!!w.metalnessMap,M=!!w.roughnessMap,$=w.anisotropy>0,_e=w.clearcoat>0,Me=w.iridescence>0,Pe=w.sheen>0,ze=w.transmission>0,Ge=$&&!!w.anisotropyMap,et=_e&&!!w.clearcoatMap,Qe=_e&&!!w.clearcoatNormalMap,Mt=_e&&!!w.clearcoatRoughnessMap,Ee=Me&&!!w.iridescenceMap,Gt=Me&&!!w.iridescenceThicknessMap,Nt=Pe&&!!w.sheenColorMap,wt=Pe&&!!w.sheenRoughnessMap,ut=!!w.specularMap,it=!!w.specularColorMap,At=!!w.specularIntensityMap,qt=ze&&!!w.transmissionMap,Vt=ze&&!!w.thicknessMap,gt=!!w.gradientMap,Oe=!!w.alphaMap,k=w.alphaTest>0,He=!!w.alphaHash,Ce=!!w.extensions,ft=!!ae.attributes.uv1,We=!!ae.attributes.uv2,jt=!!ae.attributes.uv3,Ct=us;return w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ct=s.toneMapping),{isWebGL2:u,shaderID:ge,shaderType:w.type,shaderName:w.name,vertexShader:he,fragmentShader:ve,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:qe,instancing:Et,instancingColor:Et&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:On,map:De,matcap:Be,envMap:J,envMapMode:J&&be.mapping,envMapCubeUVHeight:me,aoMap:ln,lightMap:ct,bumpMap:mt,normalMap:nt,displacementMap:d&&yt,emissiveMap:H,normalMapObjectSpace:nt&&w.normalMapType===ff,normalMapTangentSpace:nt&&w.normalMapType===gl,metalnessMap:P,roughnessMap:M,anisotropy:$,anisotropyMap:Ge,clearcoat:_e,clearcoatMap:et,clearcoatNormalMap:Qe,clearcoatRoughnessMap:Mt,iridescence:Me,iridescenceMap:Ee,iridescenceThicknessMap:Gt,sheen:Pe,sheenColorMap:Nt,sheenRoughnessMap:wt,specularMap:ut,specularColorMap:it,specularIntensityMap:At,transmission:ze,transmissionMap:qt,thicknessMap:Vt,gradientMap:gt,opaque:w.transparent===!1&&w.blending===Di,alphaMap:Oe,alphaTest:k,alphaHash:He,combine:w.combine,mapUv:De&&x(w.map.channel),aoMapUv:ln&&x(w.aoMap.channel),lightMapUv:ct&&x(w.lightMap.channel),bumpMapUv:mt&&x(w.bumpMap.channel),normalMapUv:nt&&x(w.normalMap.channel),displacementMapUv:yt&&x(w.displacementMap.channel),emissiveMapUv:H&&x(w.emissiveMap.channel),metalnessMapUv:P&&x(w.metalnessMap.channel),roughnessMapUv:M&&x(w.roughnessMap.channel),anisotropyMapUv:Ge&&x(w.anisotropyMap.channel),clearcoatMapUv:et&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(w.sheenRoughnessMap.channel),specularMapUv:ut&&x(w.specularMap.channel),specularColorMapUv:it&&x(w.specularColorMap.channel),specularIntensityMapUv:At&&x(w.specularIntensityMap.channel),transmissionMapUv:qt&&x(w.transmissionMap.channel),thicknessMapUv:Vt&&x(w.thicknessMap.channel),alphaMapUv:Oe&&x(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(nt||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,vertexUv1s:ft,vertexUv2s:We,vertexUv3s:jt,pointsUvs:re.isPoints===!0&&!!ae.attributes.uv&&(De||Oe),fog:!!B,useFog:w.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:re.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ye,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ce.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:De&&w.map.isVideoTexture===!0&&rn.getTransfer(w.map.colorSpace)===vn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pn,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ce&&w.extensions.derivatives===!0,extensionFragDepth:Ce&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(let ce in w.defines)D.push(ce),D.push(w.defines[ce]);return w.isRawShaderMaterial===!1&&(y(D,w),v(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function y(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function v(w,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.matcap&&o.enable(4),D.envMap&&o.enable(5),D.normalMapObjectSpace&&o.enable(6),D.normalMapTangentSpace&&o.enable(7),D.clearcoat&&o.enable(8),D.iridescence&&o.enable(9),D.alphaTest&&o.enable(10),D.vertexColors&&o.enable(11),D.vertexAlphas&&o.enable(12),D.vertexUv1s&&o.enable(13),D.vertexUv2s&&o.enable(14),D.vertexUv3s&&o.enable(15),D.vertexTangents&&o.enable(16),D.anisotropy&&o.enable(17),D.alphaHash&&o.enable(18),D.batching&&o.enable(19),w.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.useLegacyLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function T(w){let D=g[w.type],ce;if(D){let ue=Pi[D];ce=vi.clone(ue.uniforms)}else ce=w.uniforms;return ce}function N(w,D){let ce;for(let ue=0,re=l.length;ue<re;ue++){let B=l[ue];if(B.cacheKey===D){ce=B,++ce.usedTimes;break}}return ce===void 0&&(ce=new rb(s,D,w,r),l.push(ce)),ce}function C(w){if(--w.usedTimes===0){let D=l.indexOf(w);l[D]=l[l.length-1],l.pop(),w.destroy()}}function E(w){c.remove(w)}function q(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:N,releaseProgram:C,releaseShaderCache:E,programs:l,dispose:q}}function cb(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _u(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,x,p){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function o(h,d,m,g,x,p){let f=a(h,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(h,d,m,g,x,p){let f=a(h,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||lb),n.length>1&&n.sort(d||xu),i.length>1&&i.sort(d||xu)}function u(){for(let h=e,d=s.length;h<d;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function hb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new _u,s.set(n,[a])):i>=r.length?(a=new _u,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ub(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function db(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fb=0;function pb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mb(s,e){let t=new ub,n=db(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);let r=new F,a=new Jt,o=new Jt;function c(u,h){let d=0,m=0,g=0;for(let ue=0;ue<9;ue++)i.probe[ue].set(0,0,0);let x=0,p=0,f=0,y=0,v=0,T=0,N=0,C=0,E=0,q=0,w=0;u.sort(pb);let D=h===!0?Math.PI:1;for(let ue=0,re=u.length;ue<re;ue++){let B=u[ue],ae=B.color,fe=B.intensity,be=B.distance,me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=ae.r*fe*D,m+=ae.g*fe*D,g+=ae.b*fe*D;else if(B.isLightProbe){for(let ge=0;ge<9;ge++)i.probe[ge].addScaledVector(B.sh.coefficients[ge],fe);w++}else if(B.isDirectionalLight){let ge=t.get(B);if(ge.color.copy(B.color).multiplyScalar(B.intensity*D),B.castShadow){let Te=B.shadow,Le=n.get(B);Le.shadowBias=Te.bias,Le.shadowNormalBias=Te.normalBias,Le.shadowRadius=Te.radius,Le.shadowMapSize=Te.mapSize,i.directionalShadow[x]=Le,i.directionalShadowMap[x]=me,i.directionalShadowMatrix[x]=B.shadow.matrix,T++}i.directional[x]=ge,x++}else if(B.isSpotLight){let ge=t.get(B);ge.position.setFromMatrixPosition(B.matrixWorld),ge.color.copy(ae).multiplyScalar(fe*D),ge.distance=be,ge.coneCos=Math.cos(B.angle),ge.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ge.decay=B.decay,i.spot[f]=ge;let Te=B.shadow;if(B.map&&(i.spotLightMap[E]=B.map,E++,Te.updateMatrices(B),B.castShadow&&q++),i.spotLightMatrix[f]=Te.matrix,B.castShadow){let Le=n.get(B);Le.shadowBias=Te.bias,Le.shadowNormalBias=Te.normalBias,Le.shadowRadius=Te.radius,Le.shadowMapSize=Te.mapSize,i.spotShadow[f]=Le,i.spotShadowMap[f]=me,C++}f++}else if(B.isRectAreaLight){let ge=t.get(B);ge.color.copy(ae).multiplyScalar(fe),ge.halfWidth.set(B.width*.5,0,0),ge.halfHeight.set(0,B.height*.5,0),i.rectArea[y]=ge,y++}else if(B.isPointLight){let ge=t.get(B);if(ge.color.copy(B.color).multiplyScalar(B.intensity*D),ge.distance=B.distance,ge.decay=B.decay,B.castShadow){let Te=B.shadow,Le=n.get(B);Le.shadowBias=Te.bias,Le.shadowNormalBias=Te.normalBias,Le.shadowRadius=Te.radius,Le.shadowMapSize=Te.mapSize,Le.shadowCameraNear=Te.camera.near,Le.shadowCameraFar=Te.camera.far,i.pointShadow[p]=Le,i.pointShadowMap[p]=me,i.pointShadowMatrix[p]=B.shadow.matrix,N++}i.point[p]=ge,p++}else if(B.isHemisphereLight){let ge=t.get(B);ge.skyColor.copy(B.color).multiplyScalar(fe*D),ge.groundColor.copy(B.groundColor).multiplyScalar(fe*D),i.hemi[v]=ge,v++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let ce=i.hash;(ce.directionalLength!==x||ce.pointLength!==p||ce.spotLength!==f||ce.rectAreaLength!==y||ce.hemiLength!==v||ce.numDirectionalShadows!==T||ce.numPointShadows!==N||ce.numSpotShadows!==C||ce.numSpotMaps!==E||ce.numLightProbes!==w)&&(i.directional.length=x,i.spot.length=f,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=C+E-q,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=w,ce.directionalLength=x,ce.pointLength=p,ce.spotLength=f,ce.rectAreaLength=y,ce.hemiLength=v,ce.numDirectionalShadows=T,ce.numPointShadows=N,ce.numSpotShadows=C,ce.numSpotMaps=E,ce.numLightProbes=w,i.version=fb++)}function l(u,h){let d=0,m=0,g=0,x=0,p=0,f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let T=u[y];if(T.isDirectionalLight){let N=i.directional[d];N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(f),d++}else if(T.isSpotLight){let N=i.spot[g];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(f),N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(f),g++}else if(T.isRectAreaLight){let N=i.rectArea[x];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let N=i.point[m];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(f),m++}else if(T.isHemisphereLight){let N=i.hemi[p];N.direction.setFromMatrixPosition(T.matrixWorld),N.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function vu(s,e){let t=new mb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gb(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new vu(s,e),t.set(r,[c])):a>=o.length?(c=new vu(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Gc=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function _b(s,e,t){let n=new la,i=new lt,r=new lt,a=new Mn,o=new Gc({depthPacking:df}),c=new Vc,l={},u=t.maxTextureSize,h={[Ui]:zn,[zn]:Ui,[pn]:pn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:bb,fragmentShader:xb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new mn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(C,E,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let w=s.getRenderTarget(),D=s.getActiveCubeFace(),ce=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Ii),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);let re=f!==Yi&&this.type===Yi,B=f===Yi&&this.type!==Yi;for(let ae=0,fe=C.length;ae<fe;ae++){let be=C[ae],me=be.shadow;if(me===void 0){console.warn("THREE.WebGLShadowMap:",be,"has no shadow.");continue}if(me.autoUpdate===!1&&me.needsUpdate===!1)continue;i.copy(me.mapSize);let ge=me.getFrameExtents();if(i.multiply(ge),r.copy(me.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ge.x),i.x=r.x*ge.x,me.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ge.y),i.y=r.y*ge.y,me.mapSize.y=r.y)),me.map===null||re===!0||B===!0){let Le=this.type!==Yi?{minFilter:Nn,magFilter:Nn}:{};me.map!==null&&me.map.dispose(),me.map=new In(i.x,i.y,Le),me.map.texture.name=be.name+".shadowMap",me.camera.updateProjectionMatrix()}s.setRenderTarget(me.map),s.clear();let Te=me.getViewportCount();for(let Le=0;Le<Te;Le++){let Ye=me.getViewport(Le);a.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),ue.viewport(a),me.updateMatrices(be,Le),n=me.getFrustum(),T(E,q,me.camera,be,this.type)}me.isPointLightShadow!==!0&&this.type===Yi&&y(me,q),me.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(w,D,ce)};function y(C,E){let q=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(E,null,q,d,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(E,null,q,m,x,null)}function v(C,E,q,w){let D=null,ce=q.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(ce!==void 0)D=ce;else if(D=q.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let ue=D.uuid,re=E.uuid,B=l[ue];B===void 0&&(B={},l[ue]=B);let ae=B[re];ae===void 0&&(ae=D.clone(),B[re]=ae,E.addEventListener("dispose",N)),D=ae}if(D.visible=E.visible,D.wireframe=E.wireframe,w===Yi?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let ue=s.properties.get(D);ue.light=q}return D}function T(C,E,q,w,D){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&D===Yi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld);let re=e.update(C),B=C.material;if(Array.isArray(B)){let ae=re.groups;for(let fe=0,be=ae.length;fe<be;fe++){let me=ae[fe],ge=B[me.materialIndex];if(ge&&ge.visible){let Te=v(C,ge,w,D);C.onBeforeShadow(s,C,E,q,re,Te,me),s.renderBufferDirect(q,null,re,Te,C,me),C.onAfterShadow(s,C,E,q,re,Te,me)}}}else if(B.visible){let ae=v(C,B,w,D);C.onBeforeShadow(s,C,E,q,re,ae,null),s.renderBufferDirect(q,null,re,ae,C,null),C.onAfterShadow(s,C,E,q,re,ae,null)}}let ue=C.children;for(let re=0,B=ue.length;re<B;re++)T(ue[re],E,q,w,D)}function N(C){C.target.removeEventListener("dispose",N);for(let q in l){let w=l[q],D=C.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function vb(s,e,t){let n=t.isWebGL2;function i(){let k=!1,He=new Mn,Ce=null,ft=new Mn(0,0,0,0);return{setMask:function(We){Ce!==We&&!k&&(s.colorMask(We,We,We,We),Ce=We)},setLocked:function(We){k=We},setClear:function(We,jt,Ct,Y,oe){oe===!0&&(We*=Y,jt*=Y,Ct*=Y),He.set(We,jt,Ct,Y),ft.equals(He)===!1&&(s.clearColor(We,jt,Ct,Y),ft.copy(He))},reset:function(){k=!1,Ce=null,ft.set(-1,0,0,0)}}}function r(){let k=!1,He=null,Ce=null,ft=null;return{setTest:function(We){We?qe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(We){He!==We&&!k&&(s.depthMask(We),He=We)},setFunc:function(We){if(Ce!==We){switch(We){case Vd:s.depthFunc(s.NEVER);break;case Wd:s.depthFunc(s.ALWAYS);break;case Xd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case qd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Yd:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=We}},setLocked:function(We){k=We},setClear:function(We){ft!==We&&(s.clearDepth(We),ft=We)},reset:function(){k=!1,He=null,Ce=null,ft=null}}}function a(){let k=!1,He=null,Ce=null,ft=null,We=null,jt=null,Ct=null,Y=null,oe=null;return{setTest:function(le){k||(le?qe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(le){He!==le&&!k&&(s.stencilMask(le),He=le)},setFunc:function(le,Z,Se){(Ce!==le||ft!==Z||We!==Se)&&(s.stencilFunc(le,Z,Se),Ce=le,ft=Z,We=Se)},setOp:function(le,Z,Se){(jt!==le||Ct!==Z||Y!==Se)&&(s.stencilOp(le,Z,Se),jt=le,Ct=Z,Y=Se)},setLocked:function(le){k=le},setClear:function(le){oe!==le&&(s.clearStencil(le),oe=le)},reset:function(){k=!1,He=null,Ce=null,ft=null,We=null,jt=null,Ct=null,Y=null,oe=null}}}let o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap,d={},m={},g=new WeakMap,x=[],p=null,f=!1,y=null,v=null,T=null,N=null,C=null,E=null,q=null,w=new Fe(0,0,0),D=0,ce=!1,ue=null,re=null,B=null,ae=null,fe=null,be=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),me=!1,ge=0,Te=s.getParameter(s.VERSION);Te.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(Te)[1]),me=ge>=1):Te.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(Te)[1]),me=ge>=2);let Le=null,Ye={},he=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),ie=new Mn().fromArray(he),Ae=new Mn().fromArray(ve);function ht(k,He,Ce,ft){let We=new Uint8Array(4),jt=s.createTexture();s.bindTexture(k,jt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<Ce;Ct++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(He,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,We):s.texImage2D(He+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,We);return jt}let Et={};Et[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qe(s.DEPTH_TEST),c.setFunc(no),H(!1),P(sh),qe(s.CULL_FACE),nt(Ii);function qe(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function De(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function Be(k,He){return m[k]!==He?(s.bindFramebuffer(k,He),m[k]=He,n&&(k===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=He),k===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=He)),!0):!1}function J(k,He){let Ce=x,ft=!1;if(k)if(Ce=g.get(He),Ce===void 0&&(Ce=[],g.set(He,Ce)),k.isWebGLMultipleRenderTargets){let We=k.texture;if(Ce.length!==We.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Ct=We.length;jt<Ct;jt++)Ce[jt]=s.COLOR_ATTACHMENT0+jt;Ce.length=We.length,ft=!0}}else Ce[0]!==s.COLOR_ATTACHMENT0&&(Ce[0]=s.COLOR_ATTACHMENT0,ft=!0);else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,ft=!0);ft&&(t.isWebGL2?s.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function ln(k){return p!==k?(s.useProgram(k),p=k,!0):!1}let ct={[Is]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Cd]:s.FUNC_REVERSE_SUBTRACT};if(n)ct[oh]=s.MIN,ct[ch]=s.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(ct[oh]=k.MIN_EXT,ct[ch]=k.MAX_EXT)}let mt={[Pd]:s.ZERO,[Ld]:s.ONE,[Id]:s.SRC_COLOR,[wc]:s.SRC_ALPHA,[kd]:s.SRC_ALPHA_SATURATE,[Fd]:s.DST_COLOR,[Ud]:s.DST_ALPHA,[Dd]:s.ONE_MINUS_SRC_COLOR,[Tc]:s.ONE_MINUS_SRC_ALPHA,[Od]:s.ONE_MINUS_DST_COLOR,[Nd]:s.ONE_MINUS_DST_ALPHA,[Hd]:s.CONSTANT_COLOR,[Bd]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[Gd]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(k,He,Ce,ft,We,jt,Ct,Y,oe,le){if(k===Ii){f===!0&&(De(s.BLEND),f=!1);return}if(f===!1&&(qe(s.BLEND),f=!0),k!==Ad){if(k!==y||le!==ce){if((v!==Is||C!==Is)&&(s.blendEquation(s.FUNC_ADD),v=Is,C=Is),le)switch(k){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.ONE,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,N=null,E=null,q=null,w.set(0,0,0),D=0,y=k,ce=le}return}We=We||He,jt=jt||Ce,Ct=Ct||ft,(He!==v||We!==C)&&(s.blendEquationSeparate(ct[He],ct[We]),v=He,C=We),(Ce!==T||ft!==N||jt!==E||Ct!==q)&&(s.blendFuncSeparate(mt[Ce],mt[ft],mt[jt],mt[Ct]),T=Ce,N=ft,E=jt,q=Ct),(Y.equals(w)===!1||oe!==D)&&(s.blendColor(Y.r,Y.g,Y.b,oe),w.copy(Y),D=oe),y=k,ce=!1}function yt(k,He){k.side===pn?De(s.CULL_FACE):qe(s.CULL_FACE);let Ce=k.side===zn;He&&(Ce=!Ce),H(Ce),k.blending===Di&&k.transparent===!1?nt(Ii):nt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),o.setMask(k.colorWrite);let ft=k.stencilWrite;l.setTest(ft),ft&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function H(k){ue!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),ue=k)}function P(k){k!==wd?(qe(s.CULL_FACE),k!==re&&(k===sh?s.cullFace(s.BACK):k===Td?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),re=k}function M(k){k!==B&&(me&&s.lineWidth(k),B=k)}function $(k,He,Ce){k?(qe(s.POLYGON_OFFSET_FILL),(ae!==He||fe!==Ce)&&(s.polygonOffset(He,Ce),ae=He,fe=Ce)):De(s.POLYGON_OFFSET_FILL)}function _e(k){k?qe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Me(k){k===void 0&&(k=s.TEXTURE0+be-1),Le!==k&&(s.activeTexture(k),Le=k)}function Pe(k,He,Ce){Ce===void 0&&(Le===null?Ce=s.TEXTURE0+be-1:Ce=Le);let ft=Ye[Ce];ft===void 0&&(ft={type:void 0,texture:void 0},Ye[Ce]=ft),(ft.type!==k||ft.texture!==He)&&(Le!==Ce&&(s.activeTexture(Ce),Le=Ce),s.bindTexture(k,He||Et[k]),ft.type=k,ft.texture=He)}function ze(){let k=Ye[Le];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(k){ie.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ie.copy(k))}function qt(k){Ae.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ae.copy(k))}function Vt(k,He){let Ce=h.get(He);Ce===void 0&&(Ce=new WeakMap,h.set(He,Ce));let ft=Ce.get(k);ft===void 0&&(ft=s.getUniformBlockIndex(He,k.name),Ce.set(k,ft))}function gt(k,He){let ft=h.get(He).get(k);u.get(He)!==ft&&(s.uniformBlockBinding(He,ft,k.__bindingPointIndex),u.set(He,ft))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Le=null,Ye={},m={},g=new WeakMap,x=[],p=null,f=!1,y=null,v=null,T=null,N=null,C=null,E=null,q=null,w=new Fe(0,0,0),D=0,ce=!1,ue=null,re=null,B=null,ae=null,fe=null,ie.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:qe,disable:De,bindFramebuffer:Be,drawBuffers:J,useProgram:ln,setBlending:nt,setMaterial:yt,setFlipSided:H,setCullFace:P,setLineWidth:M,setPolygonOffset:$,setScissorTest:_e,activeTexture:Me,bindTexture:Pe,unbindTexture:ze,compressedTexImage2D:Ge,compressedTexImage3D:et,texImage2D:ut,texImage3D:it,updateUBOMapping:Vt,uniformBlockBinding:gt,texStorage2D:Nt,texStorage3D:wt,texSubImage2D:Qe,texSubImage3D:Mt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Gt,scissor:At,viewport:qt,reset:Oe}}function yb(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return m?new OffscreenCanvas(P,M):oa("canvas")}function x(P,M,$,_e){let Me=1;if((P.width>_e||P.height>_e)&&(Me=_e/Math.max(P.width,P.height)),Me<1||M===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){let Pe=M?lo:Math.floor,ze=Pe(Me*P.width),Ge=Pe(Me*P.height);h===void 0&&(h=g(ze,Ge));let et=$?g(ze,Ge):h;return et.width=ze,et.height=Ge,et.getContext("2d").drawImage(P,0,0,ze,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ze+"x"+Ge+")."),et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Lc(P.width)&&Lc(P.height)}function f(P){return o?!1:P.wrapS!==ci||P.wrapT!==ci||P.minFilter!==Nn&&P.minFilter!==Fn}function y(P,M){return P.generateMipmaps&&M&&P.minFilter!==Nn&&P.minFilter!==Fn}function v(P){s.generateMipmap(P)}function T(P,M,$,_e,Me=!1){if(o===!1)return M;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe=M;if(M===s.RED&&($===s.FLOAT&&(Pe=s.R32F),$===s.HALF_FLOAT&&(Pe=s.R16F),$===s.UNSIGNED_BYTE&&(Pe=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(Pe=s.R8UI),$===s.UNSIGNED_SHORT&&(Pe=s.R16UI),$===s.UNSIGNED_INT&&(Pe=s.R32UI),$===s.BYTE&&(Pe=s.R8I),$===s.SHORT&&(Pe=s.R16I),$===s.INT&&(Pe=s.R32I)),M===s.RG&&($===s.FLOAT&&(Pe=s.RG32F),$===s.HALF_FLOAT&&(Pe=s.RG16F),$===s.UNSIGNED_BYTE&&(Pe=s.RG8)),M===s.RGBA){let ze=Me?ro:rn.getTransfer(_e);$===s.FLOAT&&(Pe=s.RGBA32F),$===s.HALF_FLOAT&&(Pe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(Pe=ze===vn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(Pe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(Pe=s.RGB5_A1)}return(Pe===s.R16F||Pe===s.R32F||Pe===s.RG16F||Pe===s.RG32F||Pe===s.RGBA16F||Pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Pe}function N(P,M,$){return y(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){return P===Nn||P===io||P===na?s.NEAREST:s.LINEAR}function E(P){let M=P.target;M.removeEventListener("dispose",E),w(M),M.isVideoTexture&&u.delete(M)}function q(P){let M=P.target;M.removeEventListener("dispose",q),ce(M)}function w(P){let M=n.get(P);if(M.__webglInit===void 0)return;let $=P.source,_e=d.get($);if(_e){let Me=_e[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&D(P),Object.keys(_e).length===0&&d.delete($)}n.remove(P)}function D(P){let M=n.get(P);s.deleteTexture(M.__webglTexture);let $=P.source,_e=d.get($);delete _e[M.__cacheKey],a.memory.textures--}function ce(P){let M=P.texture,$=n.get(P),_e=n.get(M);if(_e.__webglTexture!==void 0&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray($.__webglFramebuffer[Me]))for(let Pe=0;Pe<$.__webglFramebuffer[Me].length;Pe++)s.deleteFramebuffer($.__webglFramebuffer[Me][Pe]);else s.deleteFramebuffer($.__webglFramebuffer[Me]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[Me])}else{if(Array.isArray($.__webglFramebuffer))for(let Me=0;Me<$.__webglFramebuffer.length;Me++)s.deleteFramebuffer($.__webglFramebuffer[Me]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let Me=0;Me<$.__webglColorRenderbuffer.length;Me++)$.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[Me]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let Me=0,Pe=M.length;Me<Pe;Me++){let ze=n.get(M[Me]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),a.memory.textures--),n.remove(M[Me])}n.remove(M),n.remove(P)}let ue=0;function re(){ue=0}function B(){let P=ue;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),ue+=1,P}function ae(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function fe(P,M){let $=n.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){let _e=P.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie($,P,M);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function be(P,M){let $=n.get(P);if(P.version>0&&$.__version!==P.version){ie($,P,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function me(P,M){let $=n.get(P);if(P.version>0&&$.__version!==P.version){ie($,P,M);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function ge(P,M){let $=n.get(P);if(P.version>0&&$.__version!==P.version){Ae($,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}let Te={[Gn]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[ks]:s.MIRRORED_REPEAT},Le={[Nn]:s.NEAREST,[io]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},Ye={[pf]:s.NEVER,[vf]:s.ALWAYS,[mf]:s.LESS,[ed]:s.LEQUAL,[gf]:s.EQUAL,[_f]:s.GEQUAL,[bf]:s.GREATER,[xf]:s.NOTEQUAL};function he(P,M,$){if($?(s.texParameteri(P,s.TEXTURE_WRAP_S,Te[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Te[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Te[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Le[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Le[M.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==ci||M.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,C(M.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==Nn&&M.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let _e=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nn||M.minFilter!==na&&M.minFilter!==ds||M.type===Ji&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===ei&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(P,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ve(P,M){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",E));let _e=M.source,Me=d.get(_e);Me===void 0&&(Me={},d.set(_e,Me));let Pe=ae(M);if(Pe!==P.__cacheKey){Me[Pe]===void 0&&(Me[Pe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),Me[Pe].usedTimes++;let ze=Me[P.__cacheKey];ze!==void 0&&(Me[P.__cacheKey].usedTimes--,ze.usedTimes===0&&D(M)),P.__cacheKey=Pe,P.__webglTexture=Me[Pe].texture}return $}function ie(P,M,$){let _e=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_e=s.TEXTURE_3D);let Me=ve(P,M),Pe=M.source;t.bindTexture(_e,P.__webglTexture,s.TEXTURE0+$);let ze=n.get(Pe);if(Pe.version!==ze.__version||Me===!0){t.activeTexture(s.TEXTURE0+$);let Ge=rn.getPrimaries(rn.workingColorSpace),et=M.colorSpace===gi?null:rn.getPrimaries(M.colorSpace),Qe=M.colorSpace===gi||Ge===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Mt=f(M)&&p(M.image)===!1,Ee=x(M.image,Mt,!1,i.maxTextureSize);Ee=H(M,Ee);let Gt=p(Ee)||o,Nt=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),ut=T(M.internalFormat,Nt,wt,M.colorSpace,M.isVideoTexture);he(_e,M,Gt);let it,At=M.mipmaps,qt=o&&M.isVideoTexture!==!0&&ut!==Zu,Vt=ze.__version===void 0||Me===!0,gt=N(M,Ee,Gt);if(M.isDepthTexture)ut=s.DEPTH_COMPONENT,o?M.type===Ji?ut=s.DEPTH_COMPONENT32F:M.type===ls?ut=s.DEPTH_COMPONENT24:M.type===Ns?ut=s.DEPTH24_STENCIL8:ut=s.DEPTH_COMPONENT16:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fs&&ut===s.DEPTH_COMPONENT&&M.type!==pl&&M.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ls,wt=r.convert(M.type)),M.format===Sr&&ut===s.DEPTH_COMPONENT&&(ut=s.DEPTH_STENCIL,M.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ns,wt=r.convert(M.type))),Vt&&(qt?t.texStorage2D(s.TEXTURE_2D,1,ut,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,ut,Ee.width,Ee.height,0,Nt,wt,null));else if(M.isDataTexture)if(At.length>0&&Gt){qt&&Vt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,At[0].width,At[0].height);for(let Oe=0,k=At.length;Oe<k;Oe++)it=At[Oe],qt?t.texSubImage2D(s.TEXTURE_2D,Oe,0,0,it.width,it.height,Nt,wt,it.data):t.texImage2D(s.TEXTURE_2D,Oe,ut,it.width,it.height,0,Nt,wt,it.data);M.generateMipmaps=!1}else qt?(Vt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,Ee.width,Ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Nt,wt,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,ut,Ee.width,Ee.height,0,Nt,wt,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,gt,ut,At[0].width,At[0].height,Ee.depth);for(let Oe=0,k=At.length;Oe<k;Oe++)it=At[Oe],M.format!==Kn?Nt!==null?qt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Oe,0,0,0,it.width,it.height,Ee.depth,Nt,it.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Oe,ut,it.width,it.height,Ee.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Oe,0,0,0,it.width,it.height,Ee.depth,Nt,wt,it.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Oe,ut,it.width,it.height,Ee.depth,0,Nt,wt,it.data)}else{qt&&Vt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,At[0].width,At[0].height);for(let Oe=0,k=At.length;Oe<k;Oe++)it=At[Oe],M.format!==Kn?Nt!==null?qt?t.compressedTexSubImage2D(s.TEXTURE_2D,Oe,0,0,it.width,it.height,Nt,it.data):t.compressedTexImage2D(s.TEXTURE_2D,Oe,ut,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage2D(s.TEXTURE_2D,Oe,0,0,it.width,it.height,Nt,wt,it.data):t.texImage2D(s.TEXTURE_2D,Oe,ut,it.width,it.height,0,Nt,wt,it.data)}else if(M.isDataArrayTexture)qt?(Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,gt,ut,Ee.width,Ee.height,Ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Nt,wt,Ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,Ee.width,Ee.height,Ee.depth,0,Nt,wt,Ee.data);else if(M.isData3DTexture)qt?(Vt&&t.texStorage3D(s.TEXTURE_3D,gt,ut,Ee.width,Ee.height,Ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Nt,wt,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,ut,Ee.width,Ee.height,Ee.depth,0,Nt,wt,Ee.data);else if(M.isFramebufferTexture){if(Vt)if(qt)t.texStorage2D(s.TEXTURE_2D,gt,ut,Ee.width,Ee.height);else{let Oe=Ee.width,k=Ee.height;for(let He=0;He<gt;He++)t.texImage2D(s.TEXTURE_2D,He,ut,Oe,k,0,Nt,wt,null),Oe>>=1,k>>=1}}else if(At.length>0&&Gt){qt&&Vt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,At[0].width,At[0].height);for(let Oe=0,k=At.length;Oe<k;Oe++)it=At[Oe],qt?t.texSubImage2D(s.TEXTURE_2D,Oe,0,0,Nt,wt,it):t.texImage2D(s.TEXTURE_2D,Oe,ut,Nt,wt,it);M.generateMipmaps=!1}else qt?(Vt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,Ee.width,Ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,wt,Ee)):t.texImage2D(s.TEXTURE_2D,0,ut,Nt,wt,Ee);y(M,Gt)&&v(_e),ze.__version=Pe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ae(P,M,$){if(M.image.length!==6)return;let _e=ve(P,M),Me=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);let Pe=n.get(Me);if(Me.version!==Pe.__version||_e===!0){t.activeTexture(s.TEXTURE0+$);let ze=rn.getPrimaries(rn.workingColorSpace),Ge=M.colorSpace===gi?null:rn.getPrimaries(M.colorSpace),et=M.colorSpace===gi||ze===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Qe=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let Oe=0;Oe<6;Oe++)!Qe&&!Mt?Ee[Oe]=x(M.image[Oe],!1,!0,i.maxCubemapSize):Ee[Oe]=Mt?M.image[Oe].image:M.image[Oe],Ee[Oe]=H(M,Ee[Oe]);let Gt=Ee[0],Nt=p(Gt)||o,wt=r.convert(M.format,M.colorSpace),ut=r.convert(M.type),it=T(M.internalFormat,wt,ut,M.colorSpace),At=o&&M.isVideoTexture!==!0,qt=Pe.__version===void 0||_e===!0,Vt=N(M,Gt,Nt);he(s.TEXTURE_CUBE_MAP,M,Nt);let gt;if(Qe){At&&qt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Vt,it,Gt.width,Gt.height);for(let Oe=0;Oe<6;Oe++){gt=Ee[Oe].mipmaps;for(let k=0;k<gt.length;k++){let He=gt[k];M.format!==Kn?wt!==null?At?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k,0,0,He.width,He.height,wt,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k,it,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k,0,0,He.width,He.height,wt,ut,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k,it,He.width,He.height,0,wt,ut,He.data)}}}else{gt=M.mipmaps,At&&qt&&(gt.length>0&&Vt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Vt,it,Ee[0].width,Ee[0].height));for(let Oe=0;Oe<6;Oe++)if(Mt){At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ee[Oe].width,Ee[Oe].height,wt,ut,Ee[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,it,Ee[Oe].width,Ee[Oe].height,0,wt,ut,Ee[Oe].data);for(let k=0;k<gt.length;k++){let Ce=gt[k].image[Oe].image;At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k+1,0,0,Ce.width,Ce.height,wt,ut,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k+1,it,Ce.width,Ce.height,0,wt,ut,Ce.data)}}else{At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,wt,ut,Ee[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,it,wt,ut,Ee[Oe]);for(let k=0;k<gt.length;k++){let He=gt[k];At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k+1,0,0,wt,ut,He.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,k+1,it,wt,ut,He.image[Oe])}}}y(M,Nt)&&v(s.TEXTURE_CUBE_MAP),Pe.__version=Me.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ht(P,M,$,_e,Me,Pe){let ze=r.convert($.format,$.colorSpace),Ge=r.convert($.type),et=T($.internalFormat,ze,Ge,$.colorSpace);if(!n.get(M).__hasExternalTextures){let Mt=Math.max(1,M.width>>Pe),Ee=Math.max(1,M.height>>Pe);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Pe,et,Mt,Ee,M.depth,0,ze,Ge,null):t.texImage2D(Me,Pe,et,Mt,Ee,0,ze,Ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),nt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Me,n.get($).__webglTexture,0,mt(M)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Me,n.get($).__webglTexture,Pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(P,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let _e=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||nt(M)){let Me=M.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Ji?_e=s.DEPTH_COMPONENT32F:Me.type===ls&&(_e=s.DEPTH_COMPONENT24));let Pe=mt(M);nt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,_e,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,_e,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){let _e=mt(M);$&&nt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,M.width,M.height):nt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{let _e=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Me=0;Me<_e.length;Me++){let Pe=_e[Me],ze=r.convert(Pe.format,Pe.colorSpace),Ge=r.convert(Pe.type),et=T(Pe.internalFormat,ze,Ge,Pe.colorSpace),Qe=mt(M);$&&nt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,et,M.width,M.height):nt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,et,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,et,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe(M.depthTexture,0);let _e=n.get(M.depthTexture).__webglTexture,Me=mt(M);if(M.depthTexture.format===Fs)nt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(M.depthTexture.format===Sr)nt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function De(P){let M=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");qe(M.__webglFramebuffer,P)}else if($){M.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[_e]),M.__webglDepthbuffer[_e]=s.createRenderbuffer(),Et(M.__webglDepthbuffer[_e],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Et(M.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(P,M,$){let _e=n.get(P);M!==void 0&&ht(_e.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&De(P)}function J(P){let M=P.texture,$=n.get(P),_e=n.get(M);P.addEventListener("dispose",q),P.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=M.version,a.memory.textures++);let Me=P.isWebGLCubeRenderTarget===!0,Pe=P.isWebGLMultipleRenderTargets===!0,ze=p(P)||o;if(Me){$.__webglFramebuffer=[];for(let Ge=0;Ge<6;Ge++)if(o&&M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Ge]=[];for(let et=0;et<M.mipmaps.length;et++)$.__webglFramebuffer[Ge][et]=s.createFramebuffer()}else $.__webglFramebuffer[Ge]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ge=0;Ge<M.mipmaps.length;Ge++)$.__webglFramebuffer[Ge]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Pe)if(i.drawBuffers){let Ge=P.texture;for(let et=0,Qe=Ge.length;et<Qe;et++){let Mt=n.get(Ge[et]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&nt(P)===!1){let Ge=Pe?M:[M];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let et=0;et<Ge.length;et++){let Qe=Ge[et];$.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[et]);let Mt=r.convert(Qe.format,Qe.colorSpace),Ee=r.convert(Qe.type),Gt=T(Qe.internalFormat,Mt,Ee,Qe.colorSpace,P.isXRRenderTarget===!0),Nt=mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Gt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,$.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Et($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),he(s.TEXTURE_CUBE_MAP,M,ze);for(let Ge=0;Ge<6;Ge++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)ht($.__webglFramebuffer[Ge][et],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,et);else ht($.__webglFramebuffer[Ge],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0);y(M,ze)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){let Ge=P.texture;for(let et=0,Qe=Ge.length;et<Qe;et++){let Mt=Ge[et],Ee=n.get(Mt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),he(s.TEXTURE_2D,Mt,ze),ht($.__webglFramebuffer,P,Mt,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,0),y(Mt,ze)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ge=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?Ge=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ge,_e.__webglTexture),he(Ge,M,ze),o&&M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)ht($.__webglFramebuffer[et],P,M,s.COLOR_ATTACHMENT0,Ge,et);else ht($.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,Ge,0);y(M,ze)&&v(Ge),t.unbindTexture()}P.depthBuffer&&De(P)}function ln(P){let M=p(P)||o,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let _e=0,Me=$.length;_e<Me;_e++){let Pe=$[_e];if(y(Pe,M)){let ze=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=n.get(Pe).__webglTexture;t.bindTexture(ze,Ge),v(ze),t.unbindTexture()}}}function ct(P){if(o&&P.samples>0&&nt(P)===!1){let M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,_e=P.height,Me=s.COLOR_BUFFER_BIT,Pe=[],ze=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=n.get(P),et=P.isWebGLMultipleRenderTargets===!0;if(et)for(let Qe=0;Qe<M.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Qe=0;Qe<M.length;Qe++){Pe.push(s.COLOR_ATTACHMENT0+Qe),P.depthBuffer&&Pe.push(ze);let Mt=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(Mt===!1&&(P.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),et&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Qe]),Mt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ze])),et){let Ee=n.get(M[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,$,_e,0,0,$,_e,Me,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let Qe=0;Qe<M.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Qe]);let Mt=n.get(M[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,Mt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function mt(P){return Math.min(i.maxSamples,P.samples)}function nt(P){let M=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(P){let M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function H(P,M){let $=P.colorSpace,_e=P.format,Me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Pc||$!==On&&$!==gi&&(rn.getTransfer($)===vn?o===!1?e.has("EXT_sRGB")===!0&&_e===Kn?(P.format=Pc,P.minFilter=Fn,P.generateMipmaps=!1):M=ho.sRGBToLinear(M):(_e!==Kn||Me!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}this.allocateTextureUnit=B,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=be,this.setTexture3D=me,this.setTextureCube=ge,this.rebindTextures=Be,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=nt}function Mb(s,e,t){let n=t.isWebGL2;function i(r,a=gi){let o,c=rn.getTransfer(a);if(r===bi)return s.UNSIGNED_BYTE;if(r===qu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ju)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ef)return s.BYTE;if(r===tf)return s.SHORT;if(r===pl)return s.UNSIGNED_SHORT;if(r===Xu)return s.INT;if(r===ls)return s.UNSIGNED_INT;if(r===Ji)return s.FLOAT;if(r===ei)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nf)return s.ALPHA;if(r===Kn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===rf)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Sr)return s.DEPTH_STENCIL;if(r===Pc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===af)return s.RED;if(r===Yu)return s.RED_INTEGER;if(r===of)return s.RG;if(r===Ku)return s.RG_INTEGER;if(r===Ju)return s.RGBA_INTEGER;if(r===Xo||r===qo||r===jo||r===Yo)if(c===vn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===uh||r===dh||r===fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ph||r===mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ph)return c===vn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===bh||r===xh||r===_h||r===vh||r===yh||r===Mh||r===Eh||r===Sh||r===wh||r===Th||r===Ah||r===Rh||r===Ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ko||r===Ph||r===Lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ko)return c===vn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ph)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===Ih||r===Dh||r===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Wc=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eb={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xc=class extends Qi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null,x=t.getContextAttributes(),p=null,f=null,y=[],v=[],T=new lt,N=null,C=new _n;C.layers.enable(1),C.viewport=new Mn;let E=new _n;E.layers.enable(2),E.viewport=new Mn;let q=[C,E],w=new Wc;w.layers.enable(1),w.layers.enable(2);let D=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let ve=y[he];return ve===void 0&&(ve=new aa,y[he]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(he){let ve=y[he];return ve===void 0&&(ve=new aa,y[he]=ve),ve.getGripSpace()},this.getHand=function(he){let ve=y[he];return ve===void 0&&(ve=new aa,y[he]=ve),ve.getHandSpace()};function ue(he){let ve=v.indexOf(he.inputSource);if(ve===-1)return;let ie=y[ve];ie!==void 0&&(ie.update(he.inputSource,he.frame,l||a),ie.dispatchEvent({type:he.type,data:he.inputSource}))}function re(){i.removeEventListener("select",ue),i.removeEventListener("selectstart",ue),i.removeEventListener("selectend",ue),i.removeEventListener("squeeze",ue),i.removeEventListener("squeezestart",ue),i.removeEventListener("squeezeend",ue),i.removeEventListener("end",re),i.removeEventListener("inputsourceschange",B);for(let he=0;he<y.length;he++){let ve=v[he];ve!==null&&(v[he]=null,y[he].disconnect(ve))}D=null,ce=null,e.setRenderTarget(p),m=null,d=null,h=null,i=null,f=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){r=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(he){if(i=he,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",ue),i.addEventListener("selectstart",ue),i.addEventListener("selectend",ue),i.addEventListener("squeeze",ue),i.addEventListener("squeezestart",ue),i.addEventListener("squeezeend",ue),i.addEventListener("end",re),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ve={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new In(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ve=null,ie=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?Sr:Fs,ie=x.stencil?Ns:ls);let ht={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ht),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new In(d.textureWidth,d.textureHeight,{format:Kn,type:bi,depthTexture:new vo(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Et=e.properties.get(f);Et.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(he){for(let ve=0;ve<he.removed.length;ve++){let ie=he.removed[ve],Ae=v.indexOf(ie);Ae>=0&&(v[Ae]=null,y[Ae].disconnect(ie))}for(let ve=0;ve<he.added.length;ve++){let ie=he.added[ve],Ae=v.indexOf(ie);if(Ae===-1){for(let Et=0;Et<y.length;Et++)if(Et>=v.length){v.push(ie),Ae=Et;break}else if(v[Et]===null){v[Et]=ie,Ae=Et;break}if(Ae===-1)break}let ht=y[Ae];ht&&ht.connect(ie)}}let ae=new F,fe=new F;function be(he,ve,ie){ae.setFromMatrixPosition(ve.matrixWorld),fe.setFromMatrixPosition(ie.matrixWorld);let Ae=ae.distanceTo(fe),ht=ve.projectionMatrix.elements,Et=ie.projectionMatrix.elements,qe=ht[14]/(ht[10]-1),De=ht[14]/(ht[10]+1),Be=(ht[9]+1)/ht[5],J=(ht[9]-1)/ht[5],ln=(ht[8]-1)/ht[0],ct=(Et[8]+1)/Et[0],mt=qe*ln,nt=qe*ct,yt=Ae/(-ln+ct),H=yt*-ln;ve.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(H),he.translateZ(yt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();let P=qe+yt,M=De+yt,$=mt-H,_e=nt+(Ae-H),Me=Be*De/M*P,Pe=J*De/M*P;he.projectionMatrix.makePerspective($,_e,Me,Pe,P,M),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}function me(he,ve){ve===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(ve.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(i===null)return;w.near=E.near=C.near=he.near,w.far=E.far=C.far=he.far,(D!==w.near||ce!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,ce=w.far);let ve=he.parent,ie=w.cameras;me(w,ve);for(let Ae=0;Ae<ie.length;Ae++)me(ie[Ae],ve);ie.length===2?be(w,C,E):w.projectionMatrix.copy(C.projectionMatrix),ge(he,w,ve)};function ge(he,ve,ie){ie===null?he.matrix.copy(ve.matrixWorld):(he.matrix.copy(ie.matrixWorld),he.matrix.invert(),he.matrix.multiply(ve.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(ve.projectionMatrix),he.projectionMatrixInverse.copy(ve.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Tr*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(he){c=he,d!==null&&(d.fixedFoveation=he),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=he)};let Te=null;function Le(he,ve){if(u=ve.getViewerPose(l||a),g=ve,u!==null){let ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Ae=!1;ie.length!==w.cameras.length&&(w.cameras.length=0,Ae=!0);for(let ht=0;ht<ie.length;ht++){let Et=ie[ht],qe=null;if(m!==null)qe=m.getViewport(Et);else{let Be=h.getViewSubImage(d,Et);qe=Be.viewport,ht===0&&(e.setRenderTargetTextures(f,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(f))}let De=q[ht];De===void 0&&(De=new _n,De.layers.enable(ht),De.viewport=new Mn,q[ht]=De),De.matrix.fromArray(Et.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Et.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(qe.x,qe.y,qe.width,qe.height),ht===0&&(w.matrix.copy(De.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ae===!0&&w.cameras.push(De)}}for(let ie=0;ie<y.length;ie++){let Ae=v[ie],ht=y[ie];Ae!==null&&ht!==void 0&&ht.update(Ae,ve,l||a)}Te&&Te(he,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),g=null}let Ye=new sd;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(he){Te=he},this.dispose=function(){}}};function Sb(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,id(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,y,v,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,y,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===zn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===zn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wb(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){let T=v.program;n.uniformBlockBinding(y,T)}function l(y,v){let T=i[y.id];T===void 0&&(g(y),T=u(y),i[y.id]=T,y.addEventListener("dispose",p));let N=v.program;n.updateUBOMapping(y,N);let C=e.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function u(y){let v=h();y.__bindingPointIndex=v;let T=s.createBuffer(),N=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,N,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,T),T}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],T=y.uniforms,N=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,E=T.length;C<E;C++){let q=Array.isArray(T[C])?T[C]:[T[C]];for(let w=0,D=q.length;w<D;w++){let ce=q[w];if(m(ce,C,w,N)===!0){let ue=ce.__offset,re=Array.isArray(ce.value)?ce.value:[ce.value],B=0;for(let ae=0;ae<re.length;ae++){let fe=re[ae],be=x(fe);typeof fe=="number"||typeof fe=="boolean"?(ce.__data[0]=fe,s.bufferSubData(s.UNIFORM_BUFFER,ue+B,ce.__data)):fe.isMatrix3?(ce.__data[0]=fe.elements[0],ce.__data[1]=fe.elements[1],ce.__data[2]=fe.elements[2],ce.__data[3]=0,ce.__data[4]=fe.elements[3],ce.__data[5]=fe.elements[4],ce.__data[6]=fe.elements[5],ce.__data[7]=0,ce.__data[8]=fe.elements[6],ce.__data[9]=fe.elements[7],ce.__data[10]=fe.elements[8],ce.__data[11]=0):(fe.toArray(ce.__data,B),B+=be.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,ce.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,v,T,N){let C=y.value,E=v+"_"+T;if(N[E]===void 0)return typeof C=="number"||typeof C=="boolean"?N[E]=C:N[E]=C.clone(),!0;{let q=N[E];if(typeof C=="number"||typeof C=="boolean"){if(q!==C)return N[E]=C,!0}else if(q.equals(C)===!1)return q.copy(C),!0}return!1}function g(y){let v=y.uniforms,T=0,N=16;for(let E=0,q=v.length;E<q;E++){let w=Array.isArray(v[E])?v[E]:[v[E]];for(let D=0,ce=w.length;D<ce;D++){let ue=w[D],re=Array.isArray(ue.value)?ue.value:[ue.value];for(let B=0,ae=re.length;B<ae;B++){let fe=re[B],be=x(fe),me=T%N;me!==0&&N-me<be.boundary&&(T+=N-me),ue.__data=new Float32Array(be.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=T,T+=be.storage}}}let C=T%N;return C>0&&(T+=N-C),y.__size=T,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){let v=y.target;v.removeEventListener("dispose",p);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}var hi=class{constructor(e={}){let{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let v=this,T=!1,N=0,C=0,E=null,q=-1,w=null,D=new Mn,ce=new Mn,ue=null,re=new Fe(0),B=0,ae=t.width,fe=t.height,be=1,me=null,ge=null,Te=new Mn(0,0,ae,fe),Le=new Mn(0,0,ae,fe),Ye=!1,he=new la,ve=!1,ie=!1,Ae=null,ht=new Jt,Et=new lt,qe=new F,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return E===null?be:1}let J=n;function ln(S,G){for(let V=0;V<S.length;V++){let te=S[V],ee=t.getContext(te,G);if(ee!==null)return ee}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",He,!1),J===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),J=ln(G,S),J===null)throw ln(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ct,mt,nt,yt,H,P,M,$,_e,Me,Pe,ze,Ge,et,Qe,Mt,Ee,Gt,Nt,wt,ut,it,At,qt;function Vt(){ct=new Wg(J),mt=new kg(J,ct,e),ct.init(mt),it=new Mb(J,ct,mt),nt=new vb(J,ct,mt),yt=new jg(J),H=new cb,P=new yb(J,ct,nt,H,mt,it,yt),M=new Bg(v),$=new Vg(v),_e=new tp(J,mt),At=new Fg(J,ct,_e,mt),Me=new Xg(J,_e,yt,At),Pe=new Zg(J,Me,_e,yt),Nt=new Jg(J,mt,P),Mt=new Hg(H),ze=new ob(v,M,$,ct,mt,At,Mt),Ge=new Sb(v,H),et=new hb,Qe=new gb(ct,mt),Gt=new Ng(v,M,$,nt,Pe,d,c),Ee=new _b(v,Pe,mt),qt=new wb(J,yt,mt,nt),wt=new Og(J,ct,yt,mt),ut=new qg(J,ct,yt,mt),yt.programs=ze.programs,v.capabilities=mt,v.extensions=ct,v.properties=H,v.renderLists=et,v.shadowMap=Ee,v.state=nt,v.info=yt}Vt();let gt=new Xc(v,J);this.xr=gt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let S=ct.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ct.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(S){S!==void 0&&(be=S,this.setSize(ae,fe,!1))},this.getSize=function(S){return S.set(ae,fe)},this.setSize=function(S,G,V=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=S,fe=G,t.width=Math.floor(S*be),t.height=Math.floor(G*be),V===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(ae*be,fe*be).floor()},this.setDrawingBufferSize=function(S,G,V){ae=S,fe=G,be=V,t.width=Math.floor(S*V),t.height=Math.floor(G*V),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,G,V,te){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,G,V,te),nt.viewport(D.copy(Te).multiplyScalar(be).floor())},this.getScissor=function(S){return S.copy(Le)},this.setScissor=function(S,G,V,te){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,G,V,te),nt.scissor(ce.copy(Le).multiplyScalar(be).floor())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){nt.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){ge=S},this.getClearColor=function(S){return S.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(S=!0,G=!0,V=!0){let te=0;if(S){let ee=!1;if(E!==null){let W=E.texture.format;ee=W===Ju||W===Ku||W===Yu}if(ee){let W=E.texture.type,Ie=W===bi||W===ls||W===pl||W===Ns||W===qu||W===ju,Ne=Gt.getClearColor(),Je=Gt.getClearAlpha(),xt=Ne.r,_t=Ne.g,$e=Ne.b;Ie?(m[0]=xt,m[1]=_t,m[2]=$e,m[3]=Je,J.clearBufferuiv(J.COLOR,0,m)):(g[0]=xt,g[1]=_t,g[2]=$e,g[3]=Je,J.clearBufferiv(J.COLOR,0,g))}else te|=J.COLOR_BUFFER_BIT}G&&(te|=J.DEPTH_BUFFER_BIT),V&&(te|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",He,!1),et.dispose(),Qe.dispose(),H.dispose(),M.dispose(),$.dispose(),Pe.dispose(),At.dispose(),qt.dispose(),ze.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",oe),gt.removeEventListener("sessionend",le),Ae&&(Ae.dispose(),Ae=null),Z.stop()};function Oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let S=yt.autoReset,G=Ee.enabled,V=Ee.autoUpdate,te=Ee.needsUpdate,ee=Ee.type;Vt(),yt.autoReset=S,Ee.enabled=G,Ee.autoUpdate=V,Ee.needsUpdate=te,Ee.type=ee}function He(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ce(S){let G=S.target;G.removeEventListener("dispose",Ce),ft(G)}function ft(S){We(S),H.remove(S)}function We(S){let G=H.get(S).programs;G!==void 0&&(G.forEach(function(V){ze.releaseProgram(V)}),S.isShaderMaterial&&ze.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,V,te,ee,W){G===null&&(G=De);let Ie=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=dn(S,G,V,te,ee);nt.setMaterial(te,Ie);let Je=V.index,xt=1;if(te.wireframe===!0){if(Je=Me.getWireframeAttribute(V),Je===void 0)return;xt=2}let _t=V.drawRange,$e=V.attributes.position,Ot=_t.start*xt,hn=(_t.start+_t.count)*xt;W!==null&&(Ot=Math.max(Ot,W.start*xt),hn=Math.min(hn,(W.start+W.count)*xt)),Je!==null?(Ot=Math.max(Ot,0),hn=Math.min(hn,Je.count)):$e!=null&&(Ot=Math.max(Ot,0),hn=Math.min(hn,$e.count));let sn=hn-Ot;if(sn<0||sn===1/0)return;At.setup(ee,te,Ne,V,Je);let on,Pt=wt;if(Je!==null&&(on=_e.get(Je),Pt=ut,Pt.setIndex(on)),ee.isMesh)te.wireframe===!0?(nt.setLineWidth(te.wireframeLinewidth*Be()),Pt.setMode(J.LINES)):Pt.setMode(J.TRIANGLES);else if(ee.isLine){let It=te.linewidth;It===void 0&&(It=1),nt.setLineWidth(It*Be()),ee.isLineSegments?Pt.setMode(J.LINES):ee.isLineLoop?Pt.setMode(J.LINE_LOOP):Pt.setMode(J.LINE_STRIP)}else ee.isPoints?Pt.setMode(J.POINTS):ee.isSprite&&Pt.setMode(J.TRIANGLES);if(ee.isBatchedMesh)Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Pt.renderInstances(Ot,sn,ee.count);else if(V.isInstancedBufferGeometry){let It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,O=Math.min(V.instanceCount,It);Pt.renderInstances(Ot,sn,O)}else Pt.render(Ot,sn)};function jt(S,G,V){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=zn,S.needsUpdate=!0,bt(S,G,V),S.side=Ui,S.needsUpdate=!0,bt(S,G,V),S.side=pn):bt(S,G,V)}this.compile=function(S,G,V=null){V===null&&(V=S),p=Qe.get(V),p.init(),y.push(p),V.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),S!==V&&S.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights(v._useLegacyLights);let te=new Set;return S.traverse(function(ee){let W=ee.material;if(W)if(Array.isArray(W))for(let Ie=0;Ie<W.length;Ie++){let Ne=W[Ie];jt(Ne,V,ee),te.add(Ne)}else jt(W,V,ee),te.add(W)}),y.pop(),p=null,te},this.compileAsync=function(S,G,V=null){let te=this.compile(S,G,V);return new Promise(ee=>{function W(){if(te.forEach(function(Ie){H.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){ee(S);return}setTimeout(W,10)}ct.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Ct=null;function Y(S){Ct&&Ct(S)}function oe(){Z.stop()}function le(){Z.start()}let Z=new sd;Z.setAnimationLoop(Y),typeof self!="undefined"&&Z.setContext(self),this.setAnimationLoop=function(S){Ct=S,gt.setAnimationLoop(S),S===null?Z.stop():Z.start()},gt.addEventListener("sessionstart",oe),gt.addEventListener("sessionend",le),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,G,E),p=Qe.get(S,y.length),p.init(),y.push(p),ht.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),he.setFromProjectionMatrix(ht),ie=this.localClippingEnabled,ve=Mt.init(this.clippingPlanes,ie),x=et.get(S,f.length),x.init(),f.push(x),Se(S,G,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(me,ge),this.info.render.frame++,ve===!0&&Mt.beginShadows();let V=p.state.shadowsArray;if(Ee.render(V,S,G),ve===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Gt.render(x,S),p.setupLights(v._useLegacyLights),G.isArrayCamera){let te=G.cameras;for(let ee=0,W=te.length;ee<W;ee++){let Ie=te[ee];Ue(x,S,Ie,Ie.viewport)}}else Ue(x,S,G);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(v,S,G),At.resetDefaultState(),q=-1,w=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Se(S,G,V,te){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||he.intersectsSprite(S)){te&&qe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);let Ie=Pe.update(S),Ne=S.material;Ne.visible&&x.push(S,Ie,Ne,V,qe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||he.intersectsObject(S))){let Ie=Pe.update(S),Ne=S.material;if(te&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),qe.copy(S.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),qe.copy(Ie.boundingSphere.center)),qe.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(Ne)){let Je=Ie.groups;for(let xt=0,_t=Je.length;xt<_t;xt++){let $e=Je[xt],Ot=Ne[$e.materialIndex];Ot&&Ot.visible&&x.push(S,Ie,Ot,V,qe.z,$e)}}else Ne.visible&&x.push(S,Ie,Ne,V,qe.z,null)}}let W=S.children;for(let Ie=0,Ne=W.length;Ie<Ne;Ie++)Se(W[Ie],G,V,te)}function Ue(S,G,V,te){let ee=S.opaque,W=S.transmissive,Ie=S.transparent;p.setupLightsView(V),ve===!0&&Mt.setGlobalState(v.clippingPlanes,V),W.length>0&&Ke(ee,W,G,V),te&&nt.viewport(D.copy(te)),ee.length>0&&ye(ee,G,V),W.length>0&&ye(W,G,V),Ie.length>0&&ye(Ie,G,V),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Ke(S,G,V,te){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let W=mt.isWebGL2;Ae===null&&(Ae=new In(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?ei:bi,minFilter:ds,samples:W?4:0})),v.getDrawingBufferSize(Et),W?Ae.setSize(Et.x,Et.y):Ae.setSize(lo(Et.x),lo(Et.y));let Ie=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(re),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let Ne=v.toneMapping;v.toneMapping=us,ye(S,V,te),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae);let Je=!1;for(let xt=0,_t=G.length;xt<_t;xt++){let $e=G[xt],Ot=$e.object,hn=$e.geometry,sn=$e.material,on=$e.group;if(sn.side===pn&&Ot.layers.test(te.layers)){let Pt=sn.side;sn.side=zn,sn.needsUpdate=!0,dt(Ot,V,te,hn,sn,on),sn.side=Pt,sn.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae)),v.setRenderTarget(Ie),v.setClearColor(re,B),v.toneMapping=Ne}function ye(S,G,V){let te=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,W=S.length;ee<W;ee++){let Ie=S[ee],Ne=Ie.object,Je=Ie.geometry,xt=te===null?Ie.material:te,_t=Ie.group;Ne.layers.test(V.layers)&&dt(Ne,G,V,Je,xt,_t)}}function dt(S,G,V,te,ee,W){S.onBeforeRender(v,G,V,te,ee,W),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ee.onBeforeRender(v,G,V,te,S,W),ee.transparent===!0&&ee.side===pn&&ee.forceSinglePass===!1?(ee.side=zn,ee.needsUpdate=!0,v.renderBufferDirect(V,G,te,ee,S,W),ee.side=Ui,ee.needsUpdate=!0,v.renderBufferDirect(V,G,te,ee,S,W),ee.side=pn):v.renderBufferDirect(V,G,te,ee,S,W),S.onAfterRender(v,G,V,te,ee,W)}function bt(S,G,V){G.isScene!==!0&&(G=De);let te=H.get(S),ee=p.state.lights,W=p.state.shadowsArray,Ie=ee.state.version,Ne=ze.getParameters(S,ee.state,W,G,V),Je=ze.getProgramCacheKey(Ne),xt=te.programs;te.environment=S.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(S.isMeshStandardMaterial?$:M).get(S.envMap||te.environment),xt===void 0&&(S.addEventListener("dispose",Ce),xt=new Map,te.programs=xt);let _t=xt.get(Je);if(_t!==void 0){if(te.currentProgram===_t&&te.lightsStateVersion===Ie)return cn(S,Ne),_t}else Ne.uniforms=ze.getUniforms(S),S.onBuild(V,Ne,v),S.onBeforeCompile(Ne,v),_t=ze.acquireProgram(Ne,Je),xt.set(Je,_t),te.uniforms=Ne.uniforms;let $e=te.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&($e.clippingPlanes=Mt.uniform),cn(S,Ne),te.needsLights=an(S),te.lightsStateVersion=Ie,te.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMap.value=ee.state.directionalShadowMap,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotShadowMap.value=ee.state.spotShadowMap,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMap.value=ee.state.pointShadowMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=_t,te.uniformsList=null,_t}function Ht(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=yr.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function cn(S,G){let V=H.get(S);V.outputColorSpace=G.outputColorSpace,V.batching=G.batching,V.instancing=G.instancing,V.instancingColor=G.instancingColor,V.skinning=G.skinning,V.morphTargets=G.morphTargets,V.morphNormals=G.morphNormals,V.morphColors=G.morphColors,V.morphTargetsCount=G.morphTargetsCount,V.numClippingPlanes=G.numClippingPlanes,V.numIntersection=G.numClipIntersection,V.vertexAlphas=G.vertexAlphas,V.vertexTangents=G.vertexTangents,V.toneMapping=G.toneMapping}function dn(S,G,V,te,ee){G.isScene!==!0&&(G=De),P.resetTextureUnits();let W=G.fog,Ie=te.isMeshStandardMaterial?G.environment:null,Ne=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:On,Je=(te.isMeshStandardMaterial?$:M).get(te.envMap||Ie),xt=te.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,_t=!!V.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!V.morphAttributes.position,Ot=!!V.morphAttributes.normal,hn=!!V.morphAttributes.color,sn=us;te.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(sn=v.toneMapping);let on=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pt=on!==void 0?on.length:0,It=H.get(te),O=p.state.lights;if(ve===!0&&(ie===!0||S!==w)){let L=S===w&&te.id===q;Mt.setState(te,S,L)}let b=!1;te.version===It.__version?(It.needsLights&&It.lightsStateVersion!==O.state.version||It.outputColorSpace!==Ne||ee.isBatchedMesh&&It.batching===!1||!ee.isBatchedMesh&&It.batching===!0||ee.isInstancedMesh&&It.instancing===!1||!ee.isInstancedMesh&&It.instancing===!0||ee.isSkinnedMesh&&It.skinning===!1||!ee.isSkinnedMesh&&It.skinning===!0||ee.isInstancedMesh&&It.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&It.instancingColor===!1&&ee.instanceColor!==null||It.envMap!==Je||te.fog===!0&&It.fog!==W||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Mt.numPlanes||It.numIntersection!==Mt.numIntersection)||It.vertexAlphas!==xt||It.vertexTangents!==_t||It.morphTargets!==$e||It.morphNormals!==Ot||It.morphColors!==hn||It.toneMapping!==sn||mt.isWebGL2===!0&&It.morphTargetsCount!==Pt)&&(b=!0):(b=!0,It.__version=te.version);let _=It.currentProgram;b===!0&&(_=bt(te,G,ee));let A=!1,R=!1,U=!1,z=_.getUniforms(),ne=It.uniforms;if(nt.useProgram(_.program)&&(A=!0,R=!0,U=!0),te.id!==q&&(q=te.id,R=!0),A||w!==S){z.setValue(J,"projectionMatrix",S.projectionMatrix),z.setValue(J,"viewMatrix",S.matrixWorldInverse);let L=z.map.cameraPosition;L!==void 0&&L.setValue(J,qe.setFromMatrixPosition(S.matrixWorld)),mt.logarithmicDepthBuffer&&z.setValue(J,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&z.setValue(J,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,R=!0,U=!0)}if(ee.isSkinnedMesh){z.setOptional(J,ee,"bindMatrix"),z.setOptional(J,ee,"bindMatrixInverse");let L=ee.skeleton;L&&(mt.floatVertexTextures?(L.boneTexture===null&&L.computeBoneTexture(),z.setValue(J,"boneTexture",L.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(z.setOptional(J,ee,"batchingTexture"),z.setValue(J,"batchingTexture",ee._matricesTexture,P));let j=V.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0&&mt.isWebGL2===!0)&&Nt.update(ee,V,_),(R||It.receiveShadow!==ee.receiveShadow)&&(It.receiveShadow=ee.receiveShadow,z.setValue(J,"receiveShadow",ee.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ne.envMap.value=Je,ne.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),R&&(z.setValue(J,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&rt(ne,U),W&&te.fog===!0&&Ge.refreshFogUniforms(ne,W),Ge.refreshMaterialUniforms(ne,te,be,fe,Ae),yr.upload(J,Ht(It),ne,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(yr.upload(J,Ht(It),ne,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&z.setValue(J,"center",ee.center),z.setValue(J,"modelViewMatrix",ee.modelViewMatrix),z.setValue(J,"normalMatrix",ee.normalMatrix),z.setValue(J,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let L=te.uniformsGroups;for(let X=0,pe=L.length;X<pe;X++)if(mt.isWebGL2){let pt=L[X];qt.update(pt,_),qt.bind(pt,_)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _}function rt(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function an(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,G,V){H.get(S.texture).__webglTexture=G,H.get(S.depthTexture).__webglTexture=V;let te=H.get(S);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=V===void 0,te.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){let V=H.get(S);V.__webglFramebuffer=G,V.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,V=0){E=S,N=G,C=V;let te=!0,ee=null,W=!1,Ie=!1;if(S){let Je=H.get(S);Je.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(J.FRAMEBUFFER,null),te=!1):Je.__webglFramebuffer===void 0?P.setupRenderTarget(S):Je.__hasExternalTextures&&P.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);let xt=S.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Ie=!0);let _t=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(_t[G])?ee=_t[G][V]:ee=_t[G],W=!0):mt.isWebGL2&&S.samples>0&&P.useMultisampledRTT(S)===!1?ee=H.get(S).__webglMultisampledFramebuffer:Array.isArray(_t)?ee=_t[V]:ee=_t,D.copy(S.viewport),ce.copy(S.scissor),ue=S.scissorTest}else D.copy(Te).multiplyScalar(be).floor(),ce.copy(Le).multiplyScalar(be).floor(),ue=Ye;if(nt.bindFramebuffer(J.FRAMEBUFFER,ee)&&mt.drawBuffers&&te&&nt.drawBuffers(S,ee),nt.viewport(D),nt.scissor(ce),nt.setScissorTest(ue),W){let Je=H.get(S.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G,Je.__webglTexture,V)}else if(Ie){let Je=H.get(S.texture),xt=G||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Je.__webglTexture,V||0,xt)}q=-1},this.readRenderTargetPixels=function(S,G,V,te,ee,W,Ie){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){nt.bindFramebuffer(J.FRAMEBUFFER,Ne);try{let Je=S.texture,xt=Je.format,_t=Je.type;if(xt!==Kn&&it.convert(xt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=_t===ei&&(ct.has("EXT_color_buffer_half_float")||mt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(_t!==bi&&it.convert(_t)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(_t===Ji&&(mt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-te&&V>=0&&V<=S.height-ee&&J.readPixels(G,V,te,ee,it.convert(xt),it.convert(_t),W)}finally{let Je=E!==null?H.get(E).__webglFramebuffer:null;nt.bindFramebuffer(J.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(S,G,V=0){let te=Math.pow(2,-V),ee=Math.floor(G.image.width*te),W=Math.floor(G.image.height*te);P.setTexture2D(G,0),J.copyTexSubImage2D(J.TEXTURE_2D,V,0,0,S.x,S.y,ee,W),nt.unbindTexture()},this.copyTextureToTexture=function(S,G,V,te=0){let ee=G.image.width,W=G.image.height,Ie=it.convert(V.format),Ne=it.convert(V.type);P.setTexture2D(V,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment),G.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,te,S.x,S.y,ee,W,Ie,Ne,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,te,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,te,S.x,S.y,Ie,Ne,G.image),te===0&&V.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(S,G,V,te,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let W=S.max.x-S.min.x+1,Ie=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Je=it.convert(te.format),xt=it.convert(te.type),_t;if(te.isData3DTexture)P.setTexture3D(te,0),_t=J.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)P.setTexture2DArray(te,0),_t=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,te.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,te.unpackAlignment);let $e=J.getParameter(J.UNPACK_ROW_LENGTH),Ot=J.getParameter(J.UNPACK_IMAGE_HEIGHT),hn=J.getParameter(J.UNPACK_SKIP_PIXELS),sn=J.getParameter(J.UNPACK_SKIP_ROWS),on=J.getParameter(J.UNPACK_SKIP_IMAGES),Pt=V.isCompressedTexture?V.mipmaps[ee]:V.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Pt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Pt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,S.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,S.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?J.texSubImage3D(_t,ee,G.x,G.y,G.z,W,Ie,Ne,Je,xt,Pt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(_t,ee,G.x,G.y,G.z,W,Ie,Ne,Je,Pt.data)):J.texSubImage3D(_t,ee,G.x,G.y,G.z,W,Ie,Ne,Je,xt,Pt),J.pixelStorei(J.UNPACK_ROW_LENGTH,$e),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ot),J.pixelStorei(J.UNPACK_SKIP_PIXELS,hn),J.pixelStorei(J.UNPACK_SKIP_ROWS,sn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,on),ee===0&&te.generateMipmaps&&J.generateMipmap(_t),nt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),nt.unbindTexture()},this.resetState=function(){N=0,C=0,E=null,nt.reset(),At.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=rn.workingColorSpace===Fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Os:$u}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Os?Ut:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qc=class extends hi{};qc.prototype.isWebGL1Renderer=!0;var yo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ni=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ui=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qn=new F,zs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gn=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,Jr=new F,dr=new F,fr=new F,pr=new lt,Zr=new lt,hd=new Jt,ja=new F,Qr=new F,Ya=new F,yu=new lt,_c=new lt,Mu=new lt,bn=class extends En{constructor(e=new gn){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new mn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new zs(n,3,0,!1)),ur.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new lt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ka(ja.set(-.5,-.5,0),fr,a,dr,i,r),Ka(Qr.set(.5,-.5,0),fr,a,dr,i,r),Ka(Ya.set(.5,.5,0),fr,a,dr,i,r),yu.set(0,0),_c.set(1,0),Mu.set(1,1);let o=e.ray.intersectTriangle(ja,Qr,Ya,!1,Jr);if(o===null&&(Ka(Qr.set(-.5,.5,0),fr,a,dr,i,r),_c.set(0,1),o=e.ray.intersectTriangle(ja,Ya,Qr,!1,Jr),o===null))return;let c=e.ray.origin.distanceTo(Jr);c<e.near||c>e.far||t.push({distance:c,point:Jr.clone(),uv:Us.getInterpolation(Jr,ja,Qr,Ya,yu,_c,Mu,new lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(s,e,t,n,i,r){pr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zr.x=r*pr.x-i*pr.y,Zr.y=i*pr.x+r*pr.y):Zr.copy(pr),s.copy(e),s.x+=Zr.x,s.y+=Zr.y,s.applyMatrix4(hd)}var Eu=new F,Su=new Mn,wu=new Mn,Tb=new F,Tu=new Jt,Ja=new F,vc=new li,Au=new Jt,yc=new Bs,Mo=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ja),this.boundingBox.expandByPoint(Ja)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ja),this.boundingSphere.expandByPoint(Ja)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(i),e.ray.intersectsSphere(vc)!==!1&&(Au.copy(i).invert(),yc.copy(e.ray).applyMatrix4(Au),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Su.fromBufferAttribute(i.attributes.skinIndex,e),wu.fromBufferAttribute(i.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=wu.getComponent(r);if(a!==0){let o=Su.getComponent(r);Tu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Tb.copy(Eu).applyMatrix4(Tu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ha=class extends En{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gs=class extends Xn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Nn,u=Nn,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ru=new Jt,Ab=new Jt,Eo=class s{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Jt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ab;Ru.multiplyMatrices(o,t[r]),Ru.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gs(t,e,e,Kn,Ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ha),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Vs=class extends un{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Jt,Cu=new Jt,Za=[],Pu=new Vn,Rb=new Jt,$r=new ke,ea=new li,Cr=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Pu.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ea.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mr),Cu.multiplyMatrices(n,mr),$r.matrixWorld=Cu,$r.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let c=Za[a];c.instanceId=r,c.object=this,t.push(c)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ws=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lu=new F,Iu=new F,Du=new Jt,Mc=new Bs,Qa=new li,Pr=class extends En{constructor(e=new mn,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lu.fromBufferAttribute(t,i-1),Iu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lu.distanceTo(Iu);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Du.copy(i).invert(),Mc.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new F,u=new F,h=new F,d=new F,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=f,T=y-1;v<T;v+=m){let N=g.getX(v),C=g.getX(v+1);if(l.fromBufferAttribute(p,N),u.fromBufferAttribute(p,C),Mc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(d);q<e.near||q>e.far||t.push({distance:q,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=f,T=y-1;v<T;v+=m){if(l.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Mc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Uu=new F,Nu=new F,Lr=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Uu.fromBufferAttribute(t,i),Nu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$i=class extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fu=new Jt,jc=new Bs,$a=new li,eo=new F,ps=class extends En{constructor(e=new mn,t=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Fu.copy(i).invert(),jc.copy(e.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,x=m;g<x;g++){let p=l.getX(g);eo.fromBufferAttribute(h,p),Ou(eo,p,c,i,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,x=m;g<x;g++)eo.fromBufferAttribute(h,g),Ou(eo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ou(s,e,t,n,i,r,a){let o=jc.distanceSqToPoint(s);if(o<t){let c=new F;jc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var wn=class extends Xn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xs=class s extends mn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,u=new lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(o,3)),this.setAttribute("uv",new nn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class s extends mn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],m=[],g=0,x=[],p=n/2,f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(d,3)),this.setAttribute("uv",new nn(m,2));function y(){let T=new F,N=new F,C=0,E=(t-e)/n;for(let q=0;q<=r;q++){let w=[],D=q/r,ce=D*(t-e)+e;for(let ue=0;ue<=i;ue++){let re=ue/i,B=re*c+o,ae=Math.sin(B),fe=Math.cos(B);N.x=ce*ae,N.y=-D*n+p,N.z=ce*fe,h.push(N.x,N.y,N.z),T.set(ae,E,fe).normalize(),d.push(T.x,T.y,T.z),m.push(re,1-D),w.push(g++)}x.push(w)}for(let q=0;q<i;q++)for(let w=0;w<r;w++){let D=x[w][q],ce=x[w+1][q],ue=x[w+1][q+1],re=x[w][q+1];u.push(D,ce,re),u.push(ce,ue,re),C+=6}l.addGroup(f,C,0),f+=C}function v(T){let N=g,C=new lt,E=new F,q=0,w=T===!0?e:t,D=T===!0?1:-1;for(let ue=1;ue<=i;ue++)h.push(0,p*D,0),d.push(0,D,0),m.push(.5,.5),g++;let ce=g;for(let ue=0;ue<=i;ue++){let B=ue/i*c+o,ae=Math.cos(B),fe=Math.sin(B);E.x=w*fe,E.y=p*D,E.z=w*ae,h.push(E.x,E.y,E.z),d.push(0,D,0),C.x=ae*.5+.5,C.y=fe*.5*D+.5,m.push(C.x,C.y),g++}for(let ue=0;ue<i;ue++){let re=N+ue,B=ce+ue;T===!0?u.push(B,B+1,re):u.push(B+1,B,re),q+=3}l.addGroup(f,q,T===!0?1:2),f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fi=class s extends Wt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oi=class s extends mn{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/i,m=new F,g=new lt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let f=r+p/n*a;m.x=h*Math.cos(f),m.y=h*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let p=x*(n+1);for(let f=0;f<n;f++){let y=f+p,v=y,T=y+n+1,N=y+n+2,C=y+1;o.push(v,T,C),o.push(T,N,C)}}this.setIndex(o),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(l,3)),this.setAttribute("uv",new nn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ni=class s extends mn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new F,d=new F,m=[],g=[],x=[],p=[];for(let f=0;f<=n;f++){let y=[],v=f/n,T=0;f===0&&a===0?T=.5/t:f===n&&c===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){let C=N/t;h.x=-e*Math.cos(i+C*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+C*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(C+T,1-v),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let v=u[f][y+1],T=u[f][y],N=u[f+1][y],C=u[f+1][y+1];(f!==0||a>0)&&m.push(v,T,C),(f!==n-1||c<Math.PI)&&m.push(T,N,C)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class s extends mn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new F,h=new F,d=new F;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){let x=g/i*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){let x=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,y=(i+1)*m+g;a.push(x,p,y),a.push(p,f,y)}this.setIndex(a),this.setAttribute("position",new nn(o,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wo=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xi=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ir=class extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function to(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ku(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ms=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gr,endingEnd:gr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case br:r=e,o=2*t-n;break;case so:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case br:a=e,c=2*n-t;break;case so:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,T=m*p-m*x;for(let N=0;N!==o;++N)r[N]=f*a[u+N]+y*a[l+N]+v*a[c+N]+T*a[h+N];return r}},To=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Kc=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_i=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Cb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Hs;var gs=class extends _i{};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=wr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends _i{};Ao.prototype.ValueTypeName="color";var ts=class extends _i{};ts.prototype.ValueTypeName="number";var Jc=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Un.slerpFlat(r,0,a,l-o,a,l,c);return r}},ki=class extends _i{InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.DefaultInterpolation=Hs;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends _i{};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=wr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends _i{};ns.prototype.ValueTypeName="vector";var Dr=class{constructor(e,t=-1,n,i=ml){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ib(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(_i.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Pb(c);c=ku(c,1,u),l=ku(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ts(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,g,x){if(m.length!==0){let p=[],f=[];ud(m,p,f,g),p.length!==0&&x.push(new h(d,p,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)m[d[g].morphTargets[x]]=-1;for(let x in m){let p=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];p.push(v.time),f.push(v.morphTarget===x?1:0)}i.push(new ts(".morphTargetInfluence["+x+"]",p,f))}c=m.length*a}else{let m=".bones["+t[h].name+"]";n(ns,m+".position",d,"pos",i),n(ki,m+".quaternion",d,"rot",i),n(ns,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Lb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Ao;case"quaternion":return ki;case"bool":case"boolean":return gs;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ib(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lb(s.type);if(s.times===void 0){let t=[],n=[];ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var hs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Zc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},Db=new Zc,is=class{constructor(e){this.manager=e!==void 0?e:Db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};is.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Qc=class extends Error{constructor(e,t){super(e),this.response=t}},ua=class extends is{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=ji[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,x=0,p=new ReadableStream({start(f){y();function y(){h.read().then(({done:v,value:T})=>{if(v)f.close();else{x+=T.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let C=0,E=u.length;C<E;C++){let q=u[C];q.onProgress&&q.onProgress(N)}f.enqueue(T),y()}})}}});return new Response(p)}else throw new Qc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{hs.add(e,l);let u=ji[e];delete ji[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=ji[e];if(u===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $c=class extends is{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=oa("img");function c(){u(),hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Hi=class extends is{constructor(e){super(e)}load(e,t,n,i){let r=new Xn,a=new $c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},qs=class extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ii=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ec=new Jt,Hu=new F,Bu=new F,da=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=class extends da{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ro=class extends qs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new el}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zu=new Jt,ta=new F,Sc=new F,tl=class extends da{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Mn(2,1,1,1),new Mn(0,1,1,1),new Mn(3,1,1,1),new Mn(1,1,1,1),new Mn(3,0,1,1),new Mn(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),Sc.copy(n.position),Sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sc),n.updateMatrixWorld(),i.makeTranslation(-ta.x,-ta.y,-ta.z),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}},si=class extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nl=class extends da{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ln=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Co=class extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var xs=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Po=class extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hs.add(e,c),r.manager.itemStart(e)}};var Lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gu(){return(typeof performance=="undefined"?Date:performance).now()}var il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Un.multiplyQuaternionsFlat(e,a,e,t,e,n),Un.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},vl="\\[\\]\\.:\\/",Ub=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",Nb="[^"+vl.replace("\\.","")+"]",Fb=/((?:WC+[\/:])*)/.source.replace("WC",yl),Ob=/(WCOD+)?/.source.replace("WCOD",Nb),kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),Hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Bb=new RegExp("^"+Fb+Ob+kb+Hb+"$"),zb=["material","materials","bones","map"],sl=class{constructor(e,t,n){let i=n||yn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(e){let t=Bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yn.Composite=sl;yn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yn.prototype.GetterByBindingType=[yn.prototype._getValue_direct,yn.prototype._getValue_array,yn.prototype._getValue_arrayElement,yn.prototype._getValue_toArray];yn.prototype.SetterByBindingTypeAndVersioning=[[yn.prototype._setValue_direct,yn.prototype._setValue_direct_setNeedsUpdate,yn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yn.prototype._setValue_array,yn.prototype._setValue_array_setNeedsUpdate,yn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yn.prototype._setValue_arrayElement,yn.prototype._setValue_arrayElement_setNeedsUpdate,yn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yn.prototype._setValue_fromArray,yn.prototype._setValue_fromArray_setNeedsUpdate,yn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:gr,endingEnd:gr};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hf:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case ml:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===lf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===pa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=br,i.endingEnd=br):(e?i.endingStart=this.zeroSlopeAtStart?br:gr:i.endingStart=so,t?i.endingEnd=this.zeroSlopeAtEnd?br:gr:i.endingEnd=so)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Gb=new Float32Array(1),di=class extends Qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],m=d.name,g=u[m];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,m));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new il(yn.create(n,m,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,m),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new To(new Float32Array(2),new Float32Array(2),1,Gb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Dr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ml),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new rl(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Dr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ur=class{constructor(e,t,n=0,i=1/0){this.ray=new Bs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(Vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)al(e[i],this,n,t);return n.sort(Vu),n}};function Vu(s,e){return s.distance-e.distance}function al(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)al(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function Ml(s,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ma||e===No){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ma)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Bi=class extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Gl(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=xs.extractUrlBase(e);a=xs.resolveURL(l,this.path)}else a=xs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ua(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gd){try{a[en.KHR_BINARY_GLTF]=new Vl(e)}catch(h){i&&i(h);return}r=JSON.parse(a[en.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Jl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case en.KHR_MATERIALS_UNLIT:a[h]=new Al;break;case en.KHR_DRACO_MESH_COMPRESSION:a[h]=new Wl(r,this.dracoLoader);break;case en.KHR_TEXTURE_TRANSFORM:a[h]=new Xl;break;case en.KHR_MESH_QUANTIZATION:a[h]=new ql;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Vb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var en={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tl=class{constructor(e){this.parser=e,this.name=en.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Fe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],On);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ln(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new si(u),l.distance=h;break;case"spot":l=new Ro(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,vs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Al=class{constructor(){this.name=en.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let i=[];e.color=new Fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],On),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(i)}},Rl=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cl=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(o,o)}return Promise.all(r)}},Pl=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Ll=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],On)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Dl=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(o[0],o[1],o[2],On),Promise.all(r)}},Ul=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Nl=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(o[0],o[1],o[2],On),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}},Fl=class{constructor(e){this.parser=e,this.name=en.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ol=class{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},kl=class{constructor(e){this.parser=e,this.name=en.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Hl=class{constructor(e){this.parser=e,this.name=en.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bl=class{constructor(e){this.parser=e,this.name=en.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zl=class{constructor(e){this.name=en.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}},Gl=class{constructor(e){this.name=en.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==yi.TRIANGLES&&l.mode!==yi.TRIANGLE_STRIP&&l.mode!==yi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(let g of h){let x=new Jt,p=new F,f=new Un,y=new F(1,1,1),v=new Cr(g.geometry,g.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,T),c.SCALE&&y.fromBufferAttribute(c.SCALE,T),v.setMatrixAt(T,x.compose(p,f,y));for(let T in c)if(T==="_COLOR_0"){let N=c[T];v.instanceColor=new Vs(N.array,N.itemSize,N.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,c[T]);En.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},gd="glTF",xa=12,dd={JSON:1313821514,BIN:5130562},Vl=class{constructor(e){this.name=en.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-xa,r=new DataView(e,xa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===dd.JSON){let l=new Uint8Array(e,xa+a,o);this.content=n.decode(l)}else if(c===dd.BIN){let l=xa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=en.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Yl[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Yl[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],m=Fr[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(m){for(let g in m.attributes){let x=m.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}h(m)},o,l,On,d)})})}},Xl=class{constructor(){this.name=en.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ql=class{constructor(){this.name=en.KHR_MESH_QUANTIZATION}},ko=class extends ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*l,x=g-l,p=-2*m+3*d,f=m-d,y=1-p,v=f-d+h;for(let T=0;T!==o;T++){let N=a[x+T+o],C=a[x+T+c]*u,E=a[g+T+o],q=a[g+T]*u;r[T]=y*N+v*C+p*E+f*q}return r}},Wb=new Un,jl=class extends ko{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Wb.fromArray(r).normalize().toArray(r),r}},yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fd={9728:Nn,9729:Fn,9984:io,9985:fl,9986:na,9987:ds},pd={33071:ci,33648:ks,10497:Gn},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xb={CUBICSPLINE:void 0,LINEAR:Hs,STEP:wr},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),s.DefaultMaterial}function js(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Yb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kb(s){let e,t=s.extensions&&s.extensions[en.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wl(t.attributes):e=s.indices+":"+wl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wl(s.targets[n]);return e}function wl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Kl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zb=new Jt,Jl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new Hi(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ua(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return js(r,o,i),vs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[en.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(xs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=El[i.type],o=Fr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new un(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=El[i.type],l=Fr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(m&&m!==h){let f=Math.floor(d/m),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,v=t.cache.get(y);v||(x=new l(o,f*m,i.count*m/u),v=new Rr(x,m/u),t.cache.add(y,v)),p=new zs(v,c,d%m/u,g)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),p=new un(x,c,g);if(i.sparse!==void 0){let f=El.SCALAR,y=Fr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,N=new y(a[1],v,i.sparse.count*f),C=new l(a[2],T,i.sparse.count*c);o!==null&&(p=new un(p.array.slice(),p.itemSize,p.normalized));for(let E=0,q=N.length;E<q;E++){let w=N[E];if(p.setX(w,C[E*c]),c>=2&&p.setY(w,C[E*c+1]),c>=3&&p.setZ(w,C[E*c+2]),c>=4&&p.setW(w,C[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=fd[d.magFilter]||Fn,u.minFilter=fd[d.minFilter]||ds,u.wrapS=pd[d.wrapS]||Gn,u.wrapT=pd[d.wrapT]||Gn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new Xn(x);p.needsUpdate=!0,d(p)}),t.load(xs.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||Jb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[en.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[en.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[en.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new $i,ti.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ws,ti.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[en.KHR_MATERIALS_UNLIT]){let h=i[en.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],On),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=pn);let u=r.alphaMode||Sl.OPAQUE;if(u===Sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Sl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let h=r.emissiveFactor;o.emissive=new Fe().setRGB(h[0],h[1],h[2],On)}return r.emissiveTexture!==void 0&&a!==tn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),vs(h,r),t.associations.set(h,{materials:e}),r.extensions&&js(i,h,r),h})}createUniqueName(e){let t=yn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[en.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return md(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Kb(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[en.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=md(new mn,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?qb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,g=u.length;m<g;m++){let x=u[m],p=a[m],f,y=l[m];if(p.mode===yi.TRIANGLES||p.mode===yi.TRIANGLE_STRIP||p.mode===yi.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new Mo(x,y):new ke(x,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===yi.TRIANGLE_STRIP?f.geometry=Ml(f.geometry,No):p.mode===yi.TRIANGLE_FAN&&(f.geometry=Ml(f.geometry,ma));else if(p.mode===yi.LINES)f=new Lr(x,y);else if(p.mode===yi.LINE_STRIP)f=new Pr(x,y);else if(p.mode===yi.LINE_LOOP)f=new So(x,y);else if(p.mode===yi.POINTS)f=new ps(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&Yb(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),vs(f,r),p.extensions&&js(i,f,p),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&js(i,h[0],r),h[0];let d=new vt;r.extensions&&js(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(ga.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Jt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Eo(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let m=i.channels[h],g=i.samplers[m.sampler],x=m.target,p=x.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],m=h[1],g=h[2],x=h[3],p=h[4],f=[];for(let y=0,v=d.length;y<v;y++){let T=d[y],N=m[y],C=g[y],E=x[y],q=p[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let w=n._createAnimationTracks(T,N,C,E,q);if(w)for(let D=0;D<w.length;D++)f.push(w[D])}return new Dr(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Zb)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ha:l.length>1?u=new vt:l.length===1?u=l[0]:u=new En,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),vs(u,r),r.extensions&&js(n,u,r),r.matrix!==void 0){let h=new Jt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new vt;n.name&&(r.name=i.createUniqueName(n.name)),vs(r,n),n.extensions&&js(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,m]of i.associations)(d instanceof ti||d instanceof Xn)&&h.set(d,m);return u.traverse(d=>{let m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];_s[r.path]===_s.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(_s[r.path]){case _s.weights:l=ts;break;case _s.rotation:l=ki;break;case _s.position:case _s.scale:l=ns;break;default:switch(n.itemSize){case 1:l=ts;break;case 2:case 3:default:l=ns;break}break}let u=i.interpolation!==void 0?Xb[i.interpolation]:Hs,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let g=new l(c[d]+"."+_s[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Kl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ki?jl:ko;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qb(s,e,t){let n=e.attributes,i=new Vn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){let u=Kl(Fr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,c=new F;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let x=Kl(Fr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new li;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function md(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Yl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return rn.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rn.workingColorSpace}" not supported.`),vs(s,e),Qb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jb(s,e.targets,t):s})}function Ci(s){let e=new Map,t=new Map,n=s.clone();return bd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)bd(s.children[n],e.children[n],t)}var Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$b=new fs(-1,1,1,-1,0,1),Zl=class extends mn{constructor(){super(),this.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nn([0,2,0,0,2,0],2))}},ex=new Zl,ys=class{constructor(e){this._mesh=new ke(ex,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$b)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ms=class extends fi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new Sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _a=class extends fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},zo=class extends fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Or=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new lt);this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(Bo),this.copyPass.material.blending=Ii,this.clock=new Lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(a instanceof _a?n=!0:a instanceof zo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var kr=class extends fi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var xd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Es=class s extends fi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new lt(e.x,e.y):new lt(256,256),this.clearColor=new Fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new In(r,a,{type:ei});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new In(r,a,{type:ei});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=xd;this.highPassUniforms=vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Sn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Bo;this.copyUniforms=vi.clone(u.uniforms),this.blendMaterial=new Sn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Fe,this.oldClearAlpha=1,this.basic=new tn,this.fsQuad=new ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Es.BlurDirectionX=new lt(1,0);Es.BlurDirectionY=new lt(0,1);var _d={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Hr=class extends fi{constructor(){super();let e=_d;this.uniforms=vi.clone(e.uniforms),this.material=new wo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rn.getTransfer(this._outputColorSpace)===vn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ll?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ri?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var y=new Uint8Array(f.length),v=0;v<f.length;++v){var T=f.charCodeAt(v);y[v]=T>96?T-97:T>64?T-39:T+4}for(var N=0,v=0;v<f.length;++v)y[N++]=y[v]<60?n[y[v]]:(y[v]-60)*64+y[++v];return y.buffer.slice(0,N)}function c(f,y,v,T,N,C){var E=r.exports.sbrk,q=v+3&-4,w=E(q*T),D=E(N.length),ce=new Uint8Array(r.exports.memory.buffer);ce.set(N,D);var ue=f(w,v,T,D,N.length);if(ue==0&&C&&C(w,q,T),y.set(ce.subarray(w,w+v*T)),E(w-E(0)),ue!=0)throw new Error("Malformed buffer data: "+ue)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function m(f){var y={object:new Worker(f),pending:0,requests:{}};return y.object.onmessage=function(v){var T=v.data;y.pending-=T.count,y.requests[T.id][T.action](T.value),delete y.requests[T.id]},y}function g(f){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),v=new Blob([y],{type:"text/javascript"}),T=URL.createObjectURL(v),N=0;N<f;++N)h[N]=m(T);URL.revokeObjectURL(T)}function x(f,y,v,T,N){for(var C=h[0],E=1;E<h.length;++E)h[E].pending<C.pending&&(C=h[E]);return new Promise(function(q,w){var D=new Uint8Array(v),ce=d++;C.pending+=f,C.requests[ce]={resolve:q,reject:w},C.object.postMessage({id:ce,count:f,size:y,source:D,mode:T,filter:N},[D.buffer])})}function p(f){a.then(function(){var y=f.data;try{var v=new Uint8Array(y.count*y.size);c(r.exports[y.mode],v,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:v},[v.buffer])}catch(T){self.postMessage({id:y.id,count:y.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,y,v,T,N){c(r.exports.meshopt_decodeVertexBuffer,f,y,v,T,r.exports[l[N]])},decodeIndexBuffer:function(f,y,v,T){c(r.exports.meshopt_decodeIndexBuffer,f,y,v,T)},decodeIndexSequence:function(f,y,v,T){c(r.exports.meshopt_decodeIndexSequence,f,y,v,T)},decodeGltfBuffer:function(f,y,v,T,N,C){c(r.exports[u[N]],f,y,v,T,r.exports[l[C]])},decodeGltfBufferAsync:function(f,y,v,T,N){return h.length>0?x(f,y,v,u[T],l[N]):a.then(function(){var C=new Uint8Array(f*y);return c(r.exports[u[T]],C,f,y,v,r.exports[l[N]]),C})}}}();function tx(s,e={}){let t=e.base||"harbor/harbor3d/",n=document.createElement("canvas");n.className="h3dCanvas",s.append(n);let i=document.createElement("div");i.className="h3dLabels",s.append(i);let r=document.createElement("div");r.className="h3dHand",r.textContent="\u{1F446}",s.append(r);let a=matchMedia("(pointer:coarse)").matches,o=new hi({canvas:n,antialias:!1,powerPreference:"high-performance"});o.debug.checkShaderErrors=!1,o.setPixelRatio(Math.min(devicePixelRatio||1,a?1:1.25)),o.shadowMap.enabled=!0,a&&(o.shadowMap.autoUpdate=!1),o.shadowMap.type=Io,o.toneMapping=Ri,o.toneMappingExposure=1;let c=new ui;c.background=new Fe(745352);let l=new Fe(13624562);c.fog=new Ni(l,90,260);let u=new _n(40,1,.5,900);function h(b,_){let A=Math.sin(b*127.1+_*311.7)*43758.5453;return A-Math.floor(A)}function d(b,_){let A=Math.floor(b),R=Math.floor(_),U=b-A,z=_-R,ne=U*U*(3-2*U),j=z*z*(3-2*z),L=h(A,R),X=h(A+1,R),pe=h(A,R+1),pt=h(A+1,R+1);return L+(X-L)*ne+(pe-L)*j+(L-X-pe+pt)*ne*j}function m(b,_,A=4){let R=0,U=.5,z=1;for(let ne=0;ne<A;ne++)R+=U*d(b*z,_*z),z*=2.03,U*=.5;return R}let g=(b,_,A)=>{let R=Math.max(A-Math.abs(b-_),0)/A;return Math.max(b,_)+R*R*A*.25},x=(b,_,A)=>-g(-b,-_,A),p=(b,_,A)=>{let R=Math.min(1,Math.max(0,(A-b)/(_-b)));return R*R*(3-2*R)},f=[];function y(b,_){let A=1-Math.hypot(b/50,(_+14)/28);A=g(A,1-Math.hypot((b-27)/15,(_-6)/15),.2),A=g(A,1-Math.hypot((b+27)/15,(_-6)/15),.2);let R=1-Math.hypot(b/15.5,(_-9)/15);return A=x(A,-R*.9,.25),A+(m(b*.06,_*.06)-.5)*.22}function v(b,_){let A=y(b,_);if(A<0)return Math.max(-9.5,-.25+A*38);let R=p(-12,-30,_),U=Math.hypot(b/15.5,(_-9)/15),z=p(0,.1,A)*.9+p(.1,.45,A)*1.3*p(1.05,1.6,U)+p(.3,.75,A)*(1.5+m(b*.08+9,_*.08)*6)*R;return z+=(m(b*.3,_*.3)-.5)*.25*p(.05,.2,A),z}function T(b,_){let A=v(b,_);for(let R of f){let U=Math.hypot(b-R.x,_-R.z);A+=(R.h-A)*p(R.r+4,R.r,U)}return A}function N(b,_,A){let R={x:b,z:_,r:A,h:Math.max(1.1,v(b,_))};return f.push(R),R.h}let C=e.labels||{},E={adventure:{x:0,z:8,label:8,name:C.adventure},tavern:{x:-26,z:2,label:6,name:C.tavern},hq:{x:-13,z:-20,label:6.5,name:C.hq},vault:{x:15,z:-21,label:5,name:C.vault},market:{x:27,z:0,label:5.5,name:C.market},arena:{x:26,z:13,label:4,name:C.arena}};E.tavern.y=N(E.tavern.x,E.tavern.z,8),E.hq.y=N(E.hq.x,E.hq.z,7),E.vault.y=N(E.vault.x,E.vault.z,6),E.market.y=N(E.market.x,E.market.z,7),E.arena.y=N(E.arena.x,E.arena.z,6),E.adventure.y=0;let q={x:-4.5,z:-3};N(0,-10,6);let w=[[[q.x,-4],[-3,-10],[-10,-14],[-13,-15.5]],[[-3,-10],[6,-12],[12,-17],[15,-17.5]],[[-3,-10],[-12,-8],[-20,-3],[-23,0]],[[6,-12],[16,-8],[23,-3],[25,-1]],[[23,-3],[26,4],[26,8.5]],[[-20,-3],[-24,6],[-21,12]]];function D(b,_,A,R){let U=R[0]-A[0],z=R[1]-A[1],ne=b-A[0],j=_-A[1],L=Math.max(0,Math.min(1,(ne*U+j*z)/(U*U+z*z)));return Math.hypot(ne-U*L,j-z*L)}function ce(b,_){let A=1e9;for(let R of w)for(let U=1;U<R.length;U++)A=Math.min(A,D(b,_,R[U-1],R[U]));return A}let ue=220,re=300,B=new Float32Array(re*re);{let b=new Qt(ue,ue,re-1,re-1);b.rotateX(-Math.PI/2);let _=b.attributes.position;for(let St=0;St<_.count;St++){let pi=_.getX(St),Jn=_.getZ(St),Zn=T(pi,Jn);_.setY(St,Zn),B[St]=Zn}b.computeVertexNormals();let A=new Float32Array(_.count*3),R=b.attributes.normal,U=St=>new Fe(St),z=U(13214826),ne=U(15782810),j=U(16245685),L=U(7182910),X=U(10204236),pe=U(4617263),pt=U(9339250),st=U(7037272),fn=U(12160604),Dt=U(14271630),Kt=new Fe,Pn=new Fe;for(let St=0;St<_.count;St++){let pi=_.getX(St),Jn=_.getZ(St),Zn=_.getY(St),Ea=R.getY(St),I=m(pi*.12,Jn*.12),K=m(pi*.5+40,Jn*.5);if(Zn<-.05)Kt.copy(Dt).lerp(z,p(-3,0,Zn));else{Kt.copy(z).lerp(ne,p(0,.45,Zn)).lerp(j,p(.4,.9,Zn)*K*.7);let se=p(.85+I*.5,1.35+I*.5,Zn);Pn.copy(L).lerp(X,p(.35,.7,I)).lerp(pe,p(.55,.8,K)*.6),Kt.lerp(Pn,se);let de=p(.86,.7,Ea)*p(.8,1.6,Zn);Pn.copy(pt).lerp(st,K),Kt.lerp(Pn,de);let xe=ce(pi,Jn);Kt.lerp(fn,p(1.6,.9,xe)*(Zn>.3?.9:0)*(.8+K*.3))}let Q=.9+K*.2;A[St*3]=Kt.r*Q,A[St*3+1]=Kt.g*Q,A[St*3+2]=Kt.b*Q}b.setAttribute("color",new un(A,3));let Re=document.createElement("canvas");Re.width=Re.height=256;let je=Re.getContext("2d"),tt=je.createImageData(256,256);for(let St=0;St<256*256;St++){let pi=St%256,Jn=St/256|0,Zn=200+(m(pi*.09,Jn*.09,3)-.5)*70+(h(pi,Jn)-.5)*40;tt.data[St*4]=tt.data[St*4+1]=tt.data[St*4+2]=Zn,tt.data[St*4+3]=255}je.putImageData(tt,0,0);let at=new wn(Re);at.wrapS=at.wrapT=Gn,at.repeat.set(70,70),at.colorSpace=Ut;let Bt=new Xt({vertexColors:!0,map:at,roughness:.95,metalness:0});Bt.onBeforeCompile=St=>{St.uniforms.cs={value:be},St.uniforms.ct=fe,St.vertexShader=St.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp=(modelMatrix*vec4(transformed,1.)).xyz;`),St.fragmentShader=St.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;uniform sampler2D cs;uniform float ct;`).replace("#include <map_fragment>",`#include <map_fragment>
float cl=texture2D(cs,vWp.xz*.006+vec2(ct*.004,ct*.0025)).r;diffuseColor.rgb*=mix(1.,.62,smoothstep(.5,.66,cl));`)};let Lt=new ke(b,Bt);Lt.receiveShadow=!0,c.add(Lt)}let ae=new Uint8Array(re*re*4);for(let b=0;b<re*re;b++)ae[b*4]=Math.max(0,Math.min(255,Math.round((B[b]+10)/20*255))),ae[b*4+3]=255;let fe={value:0},be=(()=>{let _=document.createElement("canvas");_.width=_.height=128;let A=_.getContext("2d"),R=A.createImageData(128,128);for(let z=0;z<128*128;z++){let ne=z%128,j=z/128|0,L=m(ne*.06,j*.06,4)*255;R.data[z*4]=R.data[z*4+1]=R.data[z*4+2]=L,R.data[z*4+3]=255}A.putImageData(R,0,0);let U=new wn(_);return U.wrapS=U.wrapT=ks,U})(),me=new Gs(ae,re,re,Kn,bi);me.minFilter=me.magFilter=Fn,me.needsUpdate=!0;let ge=new F(-.55,.22,-1).normalize();{let b=new Sn({side:zn,depthWrite:!1,fog:!1,uniforms:{sun:{value:ge}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun;varying vec3 vp;void main(){float h=vp.y;
      vec3 hor=vec3(.84,.92,.98),mid=vec3(.56,.77,.97),top=vec3(.27,.52,.9);
      vec3 c=mix(hor,mid,smoothstep(0.,.1,h));c=mix(c,top,smoothstep(.1,.6,h));
      float d=max(dot(vp,sun),0.);c+=vec3(1.,.95,.8)*pow(d,8.)*.25+vec3(1.,.98,.9)*pow(d,600.)*3.;
      if(h<0.)c=vec3(.84,.92,.98);gl_FragColor=vec4(c,1.);}`});c.add(new ke(new ni(800,32,16),b))}function Te(){let b=document.createElement("canvas");b.width=256,b.height=128;let _=b.getContext("2d");for(let R=0;R<26;R++){let U=40+Math.random()*176,z=50+Math.random()*40,ne=18+Math.random()*30,j=_.createRadialGradient(U,z,0,U,z,ne);j.addColorStop(0,"rgba(255,255,255,.75)"),j.addColorStop(1,"rgba(235,242,250,0)"),_.fillStyle=j,_.beginPath(),_.arc(U,z,ne,0,7),_.fill()}let A=new wn(b);return A.colorSpace=Ut,A}let Le=[];{let b=Te();for(let _=0;_<9;_++){let A=new bn(new gn({map:b,transparent:!0,depthWrite:!1,fog:!1,color:16777215})),R=-1.2+_*.3;A.position.set(Math.sin(R)*420,60+_%3*22,-Math.cos(R)*420),A.scale.set(220+_%3*60,70+_%2*30,1),c.add(A),Le.push({s:A,a:R,sp:.002+_%3*.001})}}c.add(new ii(15923199,6126165,1.15));let Ye=new Ln(16773336,2.9);Ye.position.set(-45,110,-10),Ye.castShadow=!0,Ye.shadow.mapSize.set(a?512:1024,a?512:1024),Object.assign(Ye.shadow.camera,{left:-60,right:60,top:50,bottom:-50,near:10,far:220}),Ye.shadow.bias=-5e-4,Ye.shadow.normalBias=.03,c.add(Ye);let he=new Ln(12572927,.5);he.position.set(-40,15,-80),c.add(he);let ie=new Hi().load(t+"models/waternormals.jpg");ie.wrapS=ie.wrapT=Gn;let Ae=vi.merge([Ve.fog,{t:{value:0},hm:{value:null},wn:{value:null},sunDir:{value:new F},TS:{value:ue}}]);Ae.hm.value=me,Ae.cs={value:be},Ae.wn.value=ie,Ae.sunDir.value.set(-.55,.35,-1).normalize();{let b=new Qt(2400,2400,240,240);b.rotateX(-Math.PI/2);let _=new Sn({uniforms:Ae,transparent:!0,fog:!0,depthWrite:!1,vertexShader:`uniform float t;varying vec3 wp;
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
      }`}),A=new ke(b,_);A.renderOrder=2,location.search.includes("nowater")||c.add(A)}let ht=new Bi;ht.setMeshoptDecoder(Br);let Et={},qe=b=>Et[b]||(Et[b]=ht.loadAsync(t+b));async function De(b,_,A,R={}){let U=await qe(b),z=R.skinned?Ci(U.scene):U.scene.clone(!0);return z.traverse(ne=>{ne.isMesh&&(ne.castShadow=R.shadow!==!1,ne.receiveShadow=!0,ne.material&&ne.material.map&&(ne.material.map.anisotropy=4))}),z.position.set(_,R.y!==void 0?R.y:T(_,A),A),z.rotation.y=R.ry||0,R.s&&z.scale.setScalar(R.s),(R.parent||c).add(z),R.skinned&&(z.userData.clips=U.animations),z}let Be=b=>`models/q/${b}.glb`,J=[],ln=[],ct={};function mt(b,_,A){let R=new tn({color:16765802,transparent:!0,opacity:.6,depthWrite:!1,fog:!1,blending:Rn}),U=new ke(new Oi(_,_+1,72),R);U.rotation.x=-Math.PI/2,U.position.y=A,b.add(U);let z=U.clone();z.material=R.clone(),b.add(z),J.push(ne=>{let j=ne*.5%1;z.scale.setScalar(1+j*.45),z.material.opacity=.6*(1-j),R.opacity=.45+Math.sin(ne*3)*.15})}function nt(b,_,A,R){let U=document.createElement("canvas");U.width=U.height=64;let z=U.getContext("2d"),ne=z.createRadialGradient(32,32,0,32,32,32);ne.addColorStop(0,"rgba(235,230,225,.85)"),ne.addColorStop(1,"rgba(235,230,225,0)"),z.fillStyle=ne,z.fillRect(0,0,64,64);let j=new wn(U),L=[];for(let X=0;X<10;X++){let pe=new bn(new gn({map:j,transparent:!0,depthWrite:!1}));b.add(pe),L.push(pe)}J.push(X=>L.forEach((pe,pt)=>{let st=(X*.22+pt/L.length)%1;pe.position.set(_+st*2.4+Math.sin(st*5+pt)*.3,A+st*7,R-st),pe.scale.setScalar(.9+st*3.2),pe.material.opacity=.6*(1-st)*Math.min(1,st*6)}))}let yt=null;function H(b,_,A){if(!yt){let U=document.createElement("canvas");U.width=U.height=64;let z=U.getContext("2d"),ne=z.createRadialGradient(32,32,0,32,32,32);ne.addColorStop(0,"rgba(255,255,255,1)"),ne.addColorStop(.25,"rgba(255,255,255,.55)"),ne.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=ne,z.fillRect(0,0,64,64),yt=new wn(U),yt.colorSpace=Ut}let R=new bn(new gn({map:yt,color:b,transparent:!0,opacity:A,depthWrite:!1,blending:Rn,fog:!1}));return R.scale.setScalar(_),R}function P(b,_,A,R=c,U=1){let z=new ke(new ni(.18,8,6),new tn({color:16769184}));z.position.set(b,_,A),R.add(z);let ne=H(16752704,3.4*Math.sqrt(U),.55);ne.position.set(b,_,A),R.add(ne);let j=Math.random()*9;J.push(L=>{let X=1+Math.sin(L*11+j)*.12+Math.sin(L*23+j)*.08;ne.material.opacity=.55*X,z.scale.setScalar(X)})}function M(b,_,A=1,R=Math.random()*3){let U=new di(b),z=b.userData.clips.find(j=>j.name===_)||b.userData.clips[0],ne=U.clipAction(z);return ne.timeScale=A,ne.play(),U.setTime(R),U.__off=R,ln.push(U),{mix:U,a:ne}}function $(b,_,A,R){let U=document.createElement("canvas");U.width=b,U.height=_,A(U.getContext("2d"),b,_);let z=new wn(U);return z.colorSpace=Ut,z.anisotropy=4,R&&(z.wrapS=z.wrapT=Gn,z.repeat.set(R[0],R[1])),z}let _e=$(256,128,(b,_,A)=>{b.fillStyle="#6f6455",b.fillRect(0,0,_,A);for(let R=0;R<4;R++)for(let U=-1;U<6;U++){let z=R%2*24,ne=150+(U*7+R*13+20)%6*11;b.fillStyle=`rgb(${ne},${ne-12},${ne-32})`,b.fillRect(U*48+z+2,R*32+2,44,28),b.fillStyle="#ffffff22",b.fillRect(U*48+z+2,R*32+2,44,4)}},[12,1]),Me=$(128,128,(b,_,A)=>{for(let R=0;R<8;R++){let U=120+R*37%5*12;b.fillStyle=`rgb(${U},${U*.66|0},${U*.4|0})`,b.fillRect(0,R*16,_,15),b.fillStyle="#2a170a",b.fillRect(0,R*16+15,_,1),b.fillRect(R*53%128,R*16,2,15)}},[1,6]),Pe=$(128,64,b=>{for(let _=0;_<8;_++)b.fillStyle=_%2?"#f4e7cb":"#b52a2c",b.fillRect(_*16,0,16,64);b.fillStyle="#00000030",b.fillRect(0,54,128,10)}),ze=$(128,192,(b,_,A)=>{b.fillStyle="#8f1a1d",b.fillRect(0,0,_,A),b.fillStyle="#e9b85e",b.fillRect(0,0,_,8),b.fillRect(0,A-8,_,8),b.fillStyle="#f3ead8",b.beginPath(),b.arc(64,82,30,0,7),b.fill(),b.fillRect(46,100,36,22),b.fillStyle="#8f1a1d",b.beginPath(),b.arc(52,82,8,0,7),b.arc(76,82,8,0,7),b.fill(),b.strokeStyle="#f3ead8",b.lineWidth=9,b.lineCap="round",b.beginPath(),b.moveTo(26,128),b.lineTo(102,168),b.moveTo(102,128),b.lineTo(26,168),b.stroke()}),Ge=new Xt({color:7028770,roughness:.85}),et=new Xt({map:_e,roughness:.92,side:pn});function Qe(b,_,A,R,U,z,ne={}){let j=new ke(b,_);return j.position.set(A,R,U),j.castShadow=ne.cast!==!1,j.receiveShadow=!0,ne.rx&&(j.rotation.x=ne.rx),ne.ry&&(j.rotation.y=ne.ry),ne.rz&&(j.rotation.z=ne.rz),z.add(j),j}function Mt(b,_,A,R,U,z=1){let ne=Qe(new Qt(.9*z,1.35*z),new Xt({map:ze,side:pn,roughness:.8}),_,A,R,b,{ry:U}),j=Math.random()*6;return J.push(L=>{ne.rotation.x=Math.sin(L*2+j)*.06}),ne}function Ee(b,_=1.05,A=2.1){for(let R=1;R<b.length;R++){let[U,z]=b[R-1],[ne,j]=b[R],L=Math.hypot(ne-U,j-z),X=Math.atan2(ne-U,j-z),pe=Me.clone();pe.needsUpdate=!0,pe.repeat.set(1,L/1.6),Qe(new zt(A,.18,L),new Xt({map:pe,roughness:.9}),(U+ne)/2,_,(z+j)/2,c,{ry:X});for(let st=0;st<=Math.ceil(L/2.2);st++){let fn=st/Math.ceil(L/2.2),Dt=U+(ne-U)*fn,Kt=z+(j-z)*fn;for(let Pn of[-1,1]){let Re=Math.cos(X)*Pn*(A/2),je=-Math.sin(X)*Pn*(A/2);Qe(new Wt(.12,.14,3.2,8),Ge,Dt+Re,_-1.2,Kt+je,c),Qe(new Wt(.1,.1,.9,8),Ge,Dt+Re,_+.5,Kt+je,c)}}let pt=st=>Qe(new zt(.08,.08,L),Ge,(U+ne)/2+Math.cos(X)*st*(A/2),_+.9,(z+j)/2-Math.sin(X)*st*(A/2),c,{ry:X});pt(-1),pt(1)}}async function Gt(b,_,A,R){let U=new vt;U.position.set(_,0,A),U.rotation.y=R,b.add(U);for(let[X,pe]of[[-1.4,-.8],[1.4,-.8],[-1.4,.8],[1.4,.8]])Qe(new Wt(.08,.09,2.6,6),Ge,X,1.3,pe,U);Qe(new zt(2.9,.9,1.1),new Xt({map:Me,roughness:.9}),0,.45,.3,U);let z=Qe(new Qt(3.4,2.2,8,1),new Xt({map:Pe,side:pn,roughness:.8}),0,2.6,0,U,{rx:-Math.PI/2+.32}),ne=z.geometry.attributes.position;for(let X=0;X<ne.count;X++)ne.setZ(X,Math.sin((ne.getX(X)+1.7)/3.4*Math.PI*4)*.05);ne.needsUpdate=!0,z.geometry.computeVertexNormals();let j=Qe(new Qt(3.4,.35),new Xt({map:Pe,side:pn}),0,2.08,1.15,U),L=[14698540,15902001,10338874,14169148];for(let X=0;X<9;X++)Qe(new ni(.16,8,6),new Xt({color:L[X%4],roughness:.6}),-1.1+X%5*.5,.98,.1+(X/5|0)*.35,U);return U}function Nt(){let b=["Characters_Anne","Characters_Captain_Barbarossa","Characters_Henry","Characters_Mako","Characters_Shark","Characters_Sharky","Characters_Skeleton","Environment_Cliff1","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4","Environment_House1","Environment_House2","Environment_House3","Environment_LargeBones","Environment_PalmTree_1","Environment_PalmTree_2","Environment_PalmTree_3","Environment_Rock_1","Environment_Rock_2","Environment_Rock_3","Environment_Rock_4","Environment_Rock_5","Environment_Sawmill","Environment_Skulls","Prop_Barrel","Prop_Bottle_2","Prop_Bucket_Fishes","Prop_Cannon","Prop_Chest_Gold","Prop_Coins","Prop_Fish_Mackerel","Prop_Fish_Tuna","Prop_GoldBag","Ship_Large","Ship_Small"].map(Be);for(let _ of[...b,"models/kenney/pirate/boat-row-small.glb","models/kenney/pirate/flag-pirate-high.glb","models/kenney/town/fountain-round.glb","models/kenney/town/lantern.glb"])qe(_).catch(()=>{delete Et[_]})}async function wt(){Nt();let b=new vt;b.position.set(E.adventure.x,0,E.adventure.z),c.add(b),ct.adventure=b;let _=await De(Be("Ship_Large"),0,0,{parent:b,y:.3,ry:.08,s:1.5});_.traverse(Re=>{if(Re.isMesh&&Re.material.map){let je=Re.material.map.image,tt=document.createElement("canvas");tt.width=je.width,tt.height=je.height;let at=tt.getContext("2d");at.drawImage(je,0,0);let Bt=tt.width/32;at.fillStyle="#9c1c20",at.fillRect(12*Bt,0,Bt,Bt),at.fillStyle="#6e1216",at.fillRect(5*Bt,0,Bt,Bt);let Lt=new wn(tt);Lt.flipY=!1,Lt.colorSpace=Ut,Re.material=Re.material.clone(),Re.material.map=Lt}}),J.push(Re=>{_.position.y=.35+Math.sin(Re*1)*.22,_.rotation.z=Math.sin(Re*.8)*.03,_.rotation.x=Math.sin(Re*.6)*.015}),mt(b,13,.25);let A=new tn({color:16769952,transparent:!0,opacity:.1,depthWrite:!1,side:pn,blending:Rn,fog:!1}),R=new ke(new Wt(4,8,30,40,1,!0),A);R.position.y=15,J.push(Re=>{A.opacity=.07+Math.sin(Re*2)*.03});for(let[Re,je,tt,at,Bt]of[["Characters_Captain_Barbarossa",-1.5,.3,.4,"Wave"],["Characters_Anne",3.5,-.6,-.3,"Idle"],["Characters_Mako",-6.2,.2,1.2,"Yes"]]){let Lt=await De(Be(Re),je,tt,{parent:_,skinned:!0,y:2.05,ry:at,s:.8});M(Lt,Bt)}Ee([[q.x,-6],[q.x,3.2]]),Ee([[-19,1.5],[-12,3.4],[-5.6,3.4]]),Ee([[19,1.5],[12,3.4],[6,3.4]]);for(let[Re,je]of[[-12,3.4],[12,3.4],[q.x,2.5]])Qe(new Wt(.09,.09,2,6),Ge,Re+1.05,2.1,je+.9,c),P(Re+1.05,3.2,je+.9,c,.6);for(let[Re,je]of[[-6,-3.5],[-3,-1]])P(Re,2.6,je);await De(Be("Prop_Barrel"),-6.2,-2,{y:1.25}),await De(Be("Prop_Barrel"),-6.6,-1.2,{y:1.25,ry:1}),await De(Be("Prop_Bucket_Fishes"),-2.6,-4,{y:1.25});let U=new vt;U.position.set(E.tavern.x,E.tavern.y,E.tavern.z),c.add(U),ct.tavern=U,await De(Be("Environment_House1"),0,0,{parent:U,y:0,ry:.55,s:.9}),nt(U,-2.5,7.5,-1),P(3.5,2.2,2.6,U,.8),P(-4,2.2,3.6,U,.8);for(let[Re,je]of[[2.5,5.2],[5.5,3.2],[-.8,6.4]]){Qe(new Wt(.75,.75,.1,16),Ge,Re,.95,je,U),Qe(new Wt(.12,.2,.9,8),Ge,Re,.45,je,U),await De(Be("Prop_Bottle_2"),Re+.2,je,{parent:U,y:1,s:.6}),await De(Be("Prop_Barrel"),Re-1.1,je+.3,{parent:U,y:0,s:.8}),await De(Be("Prop_Barrel"),Re+1.1,je-.2,{parent:U,y:0,s:.8});let tt=H(16756832,2.6,.35);tt.position.set(Re,1.4,je),U.add(tt)}{let Re=new vt;U.add(Re);let je=new F(-3.5,3.2,3.8),tt=new F(7,3.2,1.5);Qe(new Wt(.08,.08,3.3,6),Ge,tt.x,1.6,tt.z,U);for(let at=0;at<=14;at++){let Bt=at/14,Lt=je.clone().lerp(tt,Bt);Lt.y-=Math.sin(Bt*Math.PI)*.7;let St=new ke(new ni(.09,6,4),new tn({color:16767120}));St.position.copy(Lt),Re.add(St)}}for(let[Re,je,tt,at,Bt]of[["Characters_Henry",1.4,6.2,"Yes",2.4],["Characters_Mako",6.4,4.2,"Idle",3.9]]){let Lt=await De(Be(Re),je,tt,{parent:U,skinned:!0,y:0,ry:Bt,s:1.35});M(Lt,at)}let z=new vt;z.position.set(E.hq.x,E.hq.y,E.hq.z),c.add(z),ct.hq=z,await De(Be("Environment_House3"),0,0,{parent:z,y:0,ry:.25,s:1.25}),await De("models/kenney/pirate/flag-pirate-high.glb",-5.2,2.6,{parent:z,y:0,s:1.2}),await De("models/kenney/pirate/flag-pirate-high.glb",5.2,3.4,{parent:z,y:0,s:1.2}),await De(Be("Prop_Cannon"),-3,4.4,{parent:z,y:.4,ry:.4}),await De(Be("Prop_Cannon"),3.2,4.8,{parent:z,y:.4,ry:.1}),P(0,2.5,3.2,z,.8),Mt(z,-2,2.6,3.4,0),Mt(z,2.2,2.6,3.6,0);let ne=new vt;ne.position.set(E.vault.x,E.vault.y,E.vault.z),c.add(ne),ct.vault=ne,await De(Be("Environment_Skulls"),0,0,{parent:ne,y:1.2,ry:-.35,s:1.3}),await De(Be("Prop_Chest_Gold"),-.5,4.2,{parent:ne,y:0,ry:-.3}),await De(Be("Prop_GoldBag"),1.6,4.6,{parent:ne,y:0}),await De(Be("Prop_Coins"),-2.2,4.8,{parent:ne,y:0}),await De(Be("Prop_Coins"),.9,5.6,{parent:ne,y:0,ry:1});let j=H(16760896,7,.5);j.position.set(0,2,5),ne.add(j),J.push(Re=>{j.intensity=9+Math.sin(Re*4)*3}),At(ne,0,1,4.8);let L=new vt;L.position.set(E.market.x,E.market.y,E.market.z),c.add(L),ct.market=L,await De(Be("Environment_House2"),3.5,-3,{parent:L,y:0,ry:-.5,s:.9});for(let[Re,je,tt]of[[-4,1.5,.5],[-.3,3.2,.15],[3.6,3.8,-.25]])await Gt(L,Re,je,tt);let X=await De(Be("Characters_Anne"),-.3,2.2,{parent:L,skinned:!0,y:0,ry:0,s:1.35});M(X,"Wave");for(let[Re,je,tt]of[["Prop_Bucket_Fishes",-4.6,3],["Prop_Barrel",4.6,2],["Prop_Fish_Tuna",-1.3,4.6]])await De(Be(Re),je,tt,{parent:L,y:0,ry:Math.random()*6});let pe=new vt;pe.position.set(E.arena.x,E.arena.y,E.arena.z),c.add(pe),ct.arena=pe;{let tt=Math.PI*1.5+.4,at=Math.PI*2-.8;Qe(new Xs(6.6-.3,48),new Xt({color:14925962,roughness:1}),0,.06,0,pe,{rx:-Math.PI/2,cast:!1}),Qe(new Wt(6.6,6.6+.35,2.6,56,1,!0,tt,at),et,0,1.3,0,pe),Qe(new Wt(6.6-.55,6.6-.55,1.4,56,1,!0,tt,at),et,0,.7,0,pe);let Bt=Qe(new Oi(6.6-.55,6.6+.02,56,1,tt-Math.PI/2,at),new Xt({color:10260346,roughness:.9,side:pn}),0,2.6,0,pe,{rx:-Math.PI/2});Bt.rotation.z=Math.PI;for(let Lt=0;Lt<30;Lt++){let St=tt+at*(Lt+.5)/30;Qe(new zt(.55,.55,.45),et,Math.sin(St)*(6.6-.2),2.85,Math.cos(St)*(6.6-.2),pe,{ry:St})}for(let Lt of[tt+.05,tt+at-.05])Qe(new zt(.9,3.6,.9),et,Math.sin(Lt)*(6.6-.2),1.8,Math.cos(Lt)*(6.6-.2),pe),P(Math.sin(Lt)*(6.6-.2),3.9,Math.cos(Lt)*(6.6-.2),pe,.9);for(let Lt=0;Lt<6;Lt++){let St=tt+at*(Lt+.5)/6;Mt(pe,Math.sin(St)*(6.6+.4),1.5,Math.cos(St)*(6.6+.4),St,1.1)}for(let Lt of[tt+at*.3,tt+at*.7])P(Math.sin(Lt)*(6.6-.2),3.3,Math.cos(Lt)*(6.6-.2),pe,.6)}let pt=await De(Be("Characters_Sharky"),-1.3,0,{parent:pe,skinned:!0,y:.06,ry:Math.PI/2,s:1.35});M(pt,"Sword",1,0);let st=await De(Be("Characters_Henry"),1.3,0,{parent:pe,skinned:!0,y:.06,ry:-Math.PI/2,s:1.35});M(st,"Sword",1,.45);for(let[Re,je,tt]of[["Characters_Skeleton","Yes",1.9],["Characters_Anne","Wave",2.5],["Characters_Mako","Yes",3.6]]){let at=tt,Bt=await De(Be(Re),Math.cos(at)*4.6,Math.sin(at)*4.6,{parent:pe,skinned:!0,y:0,ry:-at-Math.PI/2,s:1.35});M(Bt,je)}let fn=(()=>{let Re=7;return()=>(Re=Re*16807%2147483647)/2147483647})(),Dt=0;for(let Re=0;Re<400&&Dt<46;Re++){let je=(fn()-.5)*110,tt=(fn()-.5)*70-6,at=T(je,tt),Bt=y(je,tt);if(at<.5||Bt>.55||ce(je,tt)<2.5||Object.values(E).some(St=>Math.hypot(St.x-je,St.z-tt)<(St===E.adventure?15:9)))continue;let Lt=await De(Be("Environment_PalmTree_"+(1+Re%3)),je,tt,{ry:fn()*6,s:1.1+fn()*.6});it(Lt),Dt++}for(let[Re,je,tt,at,Bt]of[["Environment_Cliff2",-40,-26,.5,1.6],["Environment_Cliff3",38,-28,2,1.7],["Environment_Cliff4",0,-36,1,1.8],["Environment_Cliff1",-48,-6,1,1.4],["Environment_Cliff1",49,-8,3,1.3],["Environment_Cliff4",-60,30,1,1.4],["Environment_Cliff2",64,26,2.4,1.3]])await De(Be(Re),je,tt,{ry:at,s:Bt,y:Math.max(-1,T(je,tt)-1)});for(let Re=0;Re<26;Re++){let je=fn()*6.28,tt=Math.cos(je)*(36+fn()*18),at=Math.sin(je)*(22+fn()*12)-8,Bt=T(tt,at);Bt>1||Bt<-1.5||await De(Be("Environment_Rock_"+(1+Re%5)),tt,at,{ry:fn()*6,s:1.5+fn()*2.5,y:Bt-.2})}await De(Be("Environment_LargeBones"),-15,13,{ry:.8,s:.8,y:T(-15,13)-.3}),await De(Be("Environment_Sawmill"),-20,-14,{ry:.5,s:1.6});for(let[Re,je]of[[-3,-10],[6,-12],[-12,-8],[16,-8],[-20,-3],[23,-3]]){let tt=T(Re+1.4,je);await De("models/kenney/town/lantern.glb",Re+1.4,je,{s:2.4}),P(Re+1.4,tt+3.3,je,c,.55)}await De("models/kenney/town/fountain-round.glb",0,-10,{s:2.2});for(let[Re,je,tt,at,Bt]of[["Environment_Cliff2",-150,-170,.4,5],["Environment_Cliff3",-60,-210,1.4,4],["Environment_Cliff4",110,-190,2.2,5.5],["Environment_Cliff1",190,-130,.8,4]])await De(Be(Re),je,tt,{ry:at,s:Bt,y:-2});for(let[Re,je,tt]of[[70,.03,0],[86,.022,2.6]]){let at=await De(Be("Ship_Small"),0,0,{y:0,s:1.6});J.push(Bt=>{let Lt=tt+Bt*je;at.position.set(Math.cos(Lt)*Re,Math.sin(Bt*1.3+tt)*.2,10+Math.sin(Lt)*Re*.5),at.rotation.y=-Lt+Math.PI,at.rotation.z=Math.sin(Bt+tt)*.05})}{let Re=await De(Be("Ship_Large"),0,0,{y:0,s:1.1});J.push(je=>{let tt=3.8+je*.015;Re.position.set(Math.cos(tt)*110,Math.sin(je)*.2-.2,-60+Math.sin(tt)*40),Re.rotation.y=-tt+Math.PI})}for(let[Re,je]of[[0,22],[2.7,27]]){let tt=await De("models/kenney/pirate/boat-row-small.glb",0,je,{y:0,s:1.1});J.push(at=>{let Bt=(at*.03+Re*.2)%1;tt.position.x=-45+Bt*90,tt.position.y=Math.sin(at*2+Re)*.1-.15,tt.rotation.y=Math.PI/2,tt.rotation.z=Math.sin(at*1.7)*.05})}{let Re=await De(Be("Characters_Shark"),0,0,{skinned:!0,y:-.6,s:1.2});M(Re,"Swim"),J.push(je=>{let tt=je*.25;Re.position.set(14+Math.cos(tt)*9,-.55,26+Math.sin(tt)*5),Re.rotation.y=-tt})}for(let Re=0;Re<3;Re++){let je=await De(Be("Prop_Fish_Mackerel"),0,0,{y:-5,s:.7,shadow:!1}),tt=Re*2.3,at=[-14,10,30][Re],Bt=[24,30,22][Re];J.push(Lt=>{let St=(Lt+tt)%5/1.1;if(St>1){je.visible=!1;return}je.visible=!0,je.position.set(at+St*3,-.3+Math.sin(St*Math.PI)*1.8,Bt),je.rotation.z=(.5-St)*2.2})}let Kt=["Characters_Henry","Characters_Anne","Characters_Mako","Characters_Sharky","Characters_Captain_Barbarossa","Characters_Skeleton"],Pn=0;for(let Re of w)for(let je=0;je<2;je++)await ut(Be(Kt[Pn++%Kt.length]),Re,Pn);for(let[Re,je,tt,at,Bt]of[["Characters_Henry",-1.5,-13,"Idle",0],["Characters_Anne",.2,-13.8,"Yes",2.6],["Characters_Mako",-22,4.6,"No",1],["Characters_Sharky",-20.6,5.8,"Idle",3.8],["Characters_Skeleton",13,-15,"Wave",.3]]){let Lt=await De(Be(Re),je,tt,{skinned:!0,ry:Bt,s:1.35});M(Lt,at)}qt()}async function ut(b,_,A){let R=await De(b,_[0][0],_[0][1],{skinned:!0,s:1.35}),{a:U}=M(R,"Walk",1.15),z=[],ne=0;for(let X=1;X<_.length;X++){let pe=_[X-1],pt=_[X],st=Math.hypot(pt[0]-pe[0],pt[1]-pe[1]);z.push({a:pe,b:pt,l:st}),ne+=st}let j=1.3+A%3*.2,L=A*9.7;J.push(X=>{let pe=(X*j+L)%(2*ne),pt=pe>ne;pt&&(pe=2*ne-pe);for(let st of z){if(pe<=st.l){let fn=pe/st.l,Dt=st.a[0]+(st.b[0]-st.a[0])*fn,Kt=st.a[1]+(st.b[1]-st.a[1])*fn;R.position.set(Dt+(pt?.7:-.7),T(Dt,Kt),Kt);let Pn=st.b[0]-st.a[0],Re=st.b[1]-st.a[1];pt&&(Pn=-Pn,Re=-Re),R.rotation.y=Math.atan2(Pn,Re);break}pe-=st.l}})}function it(b){let _=Math.random()*6;J.push(A=>{b.rotation.z=Math.sin(A*.9+_)*.025,b.rotation.x=Math.sin(A*.7+_)*.02})}function At(b,_,A,R){let U=new mn,z=40,ne=new Float32Array(z*3);U.setAttribute("position",new un(ne,3));let j=new $i({color:16771488,size:.25,transparent:!0,depthWrite:!1,blending:Rn}),L=new ps(U,j);b.add(L),J.push(X=>{for(let pe=0;pe<z;pe++){let pt=(X*.35+pe/z)%1,st=pe*2.4;ne[pe*3]=_+Math.cos(st)*(1+pe%3*.6),ne[pe*3+1]=A+pt*3.5,ne[pe*3+2]=R+Math.sin(st)*(1+pe%3*.6)}U.attributes.position.needsUpdate=!0,j.opacity=.9})}function qt(){let b=new mn;b.setAttribute("position",new nn([-.7,.15,0,-.1,0,.05,.1,0,.05,.7,.15,0,0,0,-.25,0,0,.3],3)),b.setIndex([0,1,4,1,5,4,2,3,4,2,4,5]),b.computeVertexNormals();let _=new Ir({color:15262942,side:pn});for(let A=0;A<9;A++){let R=new ke(b.clone(),_);R.scale.setScalar(.9),c.add(R);let U=14+A*4,z=20+A%3*3,ne=A*1.3,j=.2+A%4*.04,L=R.geometry.attributes.position;J.push(X=>{let pe=ne+X*j;R.position.set(Math.cos(pe)*U,z+Math.sin(X+A)*1,-4+Math.sin(pe)*U*.6),R.rotation.y=-pe;let pt=Math.sin(X*7+A)*.35;L.setY(0,.15+pt),L.setY(3,.15+pt),L.needsUpdate=!0})}}let Vt=new In(1,1,{samples:a?0:4,type:ei}),gt=new Or(o,Vt);gt.addPass(new kr(c,u));let Oe=new Es(new lt(256,256),.45,.55,.82);gt.addPass(Oe),Oe.enabled=!a,gt.addPass(new Hr);let k=new Ms({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;
    float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.16);c=(c-.5)*1.05+.5;
    c*=vec3(1.,1.,1.01);float v=smoothstep(.95,.3,length((vUv-.5)*vec2(1.25,1.)));c*=mix(.7,1.,v);gl_FragColor=vec4(c,1.);}`});gt.addPass(k);let He={adventure:"\u2693",hq:"\u2605",vault:"\u25C6",tavern:"\u{1F37A}",market:"$",arena:"\u2694"},Ce={};function ft(b){return b==="adventure"?`<i>${He[b]}</i><b>${E[b].name||""}</b><em>\u25B6 ${C.play||"PLAY"}</em>`:`<i>${He[b]}</i><b>${E[b].name||""}</b>`}for(let b in E){let _=document.createElement("button");_.className="lbl"+(b==="adventure"?" main":""),_.dataset.id=b,_.innerHTML=b==="adventure"?`<i>${He[b]}</i><b>${E[b].name||""}</b><em>\u25B6 ${C.play||"PLAY"}</em>`:`<i>${He[b]}</i><b>${E[b].name||""}</b>`,_.setAttribute("aria-label",E[b].name||b),_.onclick=A=>{A.stopPropagation(),dn(b)},i.append(_),Ce[b]=_}let We=new F,jt=1,Ct=1;function Y(){var j;let b=Date.now(),_=Y.avoid,A=_&&b-_.at<=500?_.list:(Y.avoid={at:b,list:((j=e.avoid)==null?void 0:j.call(e))||[]}).list,R=Y.sizes;if(!R||R.n!==Object.keys(Ce).length){R=Y.sizes={n:Object.keys(Ce).length};for(let L in Ce)R[L]=[Ce[L].offsetWidth||90,Ce[L].offsetHeight||30]}let U=Object.keys(Ce).map(L=>({id:L,el:Ce[L],width:R[L][0],height:R[L][1]})),z=[];for(let L of U){let X=E[L.id];We.set(X.x,(X.y||0)+X.label,X.z).project(u);let pe=L.width/2+6,pt=Math.min(jt-pe,Math.max(pe,(We.x*.5+.5)*jt)),st=Math.max(L.height+4,(-We.y*.5+.5)*Ct),fn=0;for(let Dt of A){let Kt=pt-pe,Pn=pt+pe,Re=st-L.height,je=st;Pn>Dt.left&&Kt<Dt.right&&je>Dt.top&&Re<Dt.bottom&&(fn=Dt.bottom-Re+4)}z.push({...L,x:pt,y:st+fn})}for(let L of z){let X=`translate(${L.x}px,${L.y}px) translate(-50%,-100%)`;L.el.style.transform!==X&&(L.el.style.transform=X)}let ne=z.find(L=>L.id==="adventure");ne&&(r.style.left=ne.x+ne.width/2-24+"px",r.style.top=ne.y-14+"px"),r.style.display=Ue?"none":""}let oe=new F(0,0,-13),le=0,Z=0,Se=0,Ue=null,Ke=0,ye=null,dt=0,bt=()=>ye!==null?ye*1e3:performance.now(),Ht=b=>b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2;function cn(b){let _=e.skipIntro?1:Math.min(1,b/4.5),A=Ht(_),R=150-88*A,U=ga.lerp(88,24,A)*Math.PI/180,z=(1-A)*.6+Z*.45+(_>=1?Math.sin((b-4.5)*.15)*.06:0),ne=oe.x,j=oe.y,L=oe.z,X=R;if(Ue){let pe=E[Ue],pt=Ht(Math.min(1,(bt()-Ke)/1e3));ne+=(pe.x-ne)*pt*.6,L+=(pe.z-L)*pt*.6,j+=((pe.y||0)-j)*pt*.6,X=R*(1-.3*pt)}return u.position.set(ne+Math.sin(z)*Math.cos(U)*X,j+Math.sin(U)*X,L+Math.cos(z)*Math.cos(U)*X),u.lookAt(ne,j,L),_}function dn(b){Ue=b,Ke=bt(),sn&&(i.querySelectorAll(".lbl").forEach(_=>_.classList.toggle("sel",_.dataset.id===b)),dn.until=bt()+1400,clearTimeout(dn.tm),dn.tm=setTimeout(()=>{var _;hn||(_=e.onSelect)==null||_.call(e,b)},520))}let rt=new Ur,an=new lt,S=null,G=b=>{S={x:b.clientX,d:Se}},V=b=>{S&&(Se=ga.clamp(S.d-(b.clientX-S.x)/jt*2,-1,1))},te=b=>{if(S&&Math.abs(b.clientX-S.x)<8){let _=s.getBoundingClientRect();an.set((b.clientX-_.left)/jt*2-1,-(b.clientY-_.top)/Ct*2+1),rt.setFromCamera(an,u);let A=rt.intersectObjects(Object.values(ct),!0);if(A.length){let R=A[0].object;for(;R&&!Object.values(ct).includes(R);)R=R.parent;let U=Object.keys(ct).find(z=>ct[z]===R);U&&dn(U)}}S=null};n.addEventListener("pointerdown",G),addEventListener("pointermove",V),addEventListener("pointerup",te);function ee(b=!1){Y.sizes=null,Y.avoid=null;let _=Math.max(1,s.clientWidth),A=Math.max(1,s.clientHeight);jt=_,Ct=A,o.setSize(_,A,!1),gt.setSize(_,A),Oe.resolution.set(_/2,A/2),u.aspect=_/A,u.fov=_/A>1.6?47:62,u.updateProjectionMatrix(),b&&sn&&Y()}ee();let W=()=>{!hn&&s.clientWidth&&s.clientHeight&&ee(!0)};addEventListener("resize",W);let Ie=typeof ResizeObserver=="function"?new ResizeObserver(W):null;Ie==null||Ie.observe(s);let Ne=0,Je=!1;function xt(){let b=Math.max(0,(bt()-le)/1e3),_=Math.min(Math.max(b-dt,0),.1);dt=b,Z+=(Se-Z)*.08,(s.clientWidth!==jt||s.clientHeight!==Ct)&&ee(),Ue&&bt()>dn.until&&(Ue=null,i.querySelectorAll(".lbl").forEach(U=>U.classList.remove("sel")));let A=cn(b);Ae.t.value=b,fe.value=b;let R=u.position.distanceTo(oe);c.fog.near=R*2,c.fog.far=R*7;for(let U of Le)U.a+=U.sp*_,U.s.position.x=Math.sin(U.a)*420,U.s.position.z=-Math.cos(U.a)*420;for(let U of J)U(b);for(let U of ln)ye!==null?U.setTime(b+(U.__off||0)):U.update(_);Y(),s.classList.toggle("h3dReady",sn&&A>=.85),(a||Je)&&(Ne++,o.shadowMap.autoUpdate=!1,o.shadowMap.needsUpdate=Ne%6===1),a?o.render(c,u):gt.render()}let _t={getDelta(){return 0}},$e=0,Ot=!1,hn=!1,sn=!1,on={last:0,n:0,ms:0},Pt=a?1e3/30-2:0;function It(b=0){if($e=0,Ot||hn||($e=requestAnimationFrame(It),ye!==null)||Pt&&on.last&&b-on.last<Pt)return;let _=bt();xt();let A=bt()-_;on.last=b;let R=b-(on.prev||b);if(on.prev=b,R>250){on.n=0,on.ms=0;return}if(on.n++,on.ms+=R,on.n>=45){let U=on.ms/on.n;if(on.n=0,on.ms=0,U>(a?42:25)&&sn)if(!a&&Oe.enabled)Oe.enabled=!1;else{let z=o.getPixelRatio();z>.8?(o.setPixelRatio(Math.max(.75,z-.25)),ee()):Je=!0}}}return{loaded:wt().then(()=>{hn||(sn=!0,le=performance.now(),s.classList.add("h3dLoaded"),!$e&&!Ot&&($e=requestAnimationFrame(It)))}),pause(){Ot=!0,cancelAnimationFrame($e),$e=0},resume(){hn||(Ot=!1,e.skipIntro=!0,W(),_t.getDelta(),!$e&&sn&&($e=requestAnimationFrame(It)))},select:dn,step(b){ye=b,xt()},setLabels(b){Y.sizes=null,Object.assign(C,b||{});for(let _ in Ce)E[_].name=C[_],Ce[_].innerHTML=ft(_),Ce[_].setAttribute("aria-label",C[_]||_)},get state(){return{ready:sn,paused:Ot,disposed:hn,focus:Ue,labels:Object.keys(Ce).length}},dispose(){var b,_;hn=!0,cancelAnimationFrame($e),$e=0,clearTimeout(dn.tm),n.removeEventListener("pointerdown",G),removeEventListener("pointermove",V),removeEventListener("pointerup",te),removeEventListener("resize",W),Ie==null||Ie.disconnect(),c.traverse(A=>{A.geometry&&A.geometry.dispose();let R=A.material;R&&(Array.isArray(R)?R:[R]).forEach(U=>{for(let z in U)U[z]&&U[z].isTexture&&U[z].dispose();U.dispose()})}),(b=gt.dispose)==null||b.call(gt),Vt.dispose(),o.dispose(),(_=o.forceContextLoss)==null||_.call(o),n.remove(),i.remove(),r.remove()}}}function nx(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}window.PirateHarbor3D={create:tx,supported:nx,version:1};function Go(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ix(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=Go(t,n),l=Go(t+1,n),u=Go(t,n+1),h=Go(t+1,n+1);return c+(l-c)*a+(u-c)*o+(c-l-u+h)*a*o}function zr(s,e,t=4){let n=0,i=.5,r=1;for(let a=0;a<t;a++)n+=i*ix(s*r,e*r),r*=2.03,i*=.5;return n}var Ss=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},va=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Ql=(s,e,t)=>s+(e-s)*t;function Gr(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new wn(t);return r.colorSpace=Ut,r}var Ys={sea:[[.06,.9,1.25,1,.2],[.09,-.6,1.05,.45,.35],[.21,.3,1.9,.22,-.8],[.035,.2,.7,1.4,.1]],shore:[[.12,.5,1.1,.12,.2],[.2,-.4,1.4,.07,.9],[.05,.1,.6,.18,.1]]};function Vr(s,e,t,n){let i=0;for(let[r,a,o,c,l]of s)i+=Math.sin((e*a+t*(1-Math.abs(a)))*r*6.283+n*o+l)*c;return i}function sx(s,e={}){let t=e.base||"harbor/harbor3d/",n=matchMedia("(pointer:coarse)").matches,i=document.createElement("canvas");i.className="st3d",i.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",s.prepend(i);let r=new hi({canvas:i,antialias:!1,powerPreference:"high-performance"});r.debug.checkShaderErrors=!1,r.setPixelRatio(Math.min(devicePixelRatio||1,n?1.5:1.75)),r.shadowMap.enabled=!0,r.shadowMap.type=fa,r.toneMapping=Ri,r.toneMappingExposure=1;let a=new ui,o=new _n(42,1,.3,2e3),c=new Bi;c.setMeshoptDecoder(Br);let l={},u=Y=>l[Y]||(l[Y]=c.loadAsync(t+Y)),h=Y=>`models/q/${Y}.glb`,d=new vt;a.add(d);let m=!1,g=[],x=[],p=null,f=0,y=0,v=!1,T=!1,N=0,C=performance.now(),E={pos:new F(0,30,80),look:new F,tpos:new F(0,30,80),tlook:new F,rate:1.4},q=0,w=0,D=[],ce=Gr([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),ue=Gr([[0,"rgba(200,200,205,.85)"],[.6,"rgba(150,150,160,.35)"],[1,"rgba(120,120,130,0)"]]),re=Gr([[0,"rgba(40,36,36,.9)"],[.6,"rgba(30,28,28,.4)"],[1,"rgba(20,20,20,0)"]]),B=Gr([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),ae=Gr([[0,"rgba(235,245,255,1)"],[1,"rgba(200,225,245,0)"]],32),fe=Gr([[0,"rgba(70,120,70,1)"],[1,"rgba(40,80,50,0)"]],32);async function be(Y,oe,le,Z,Se={}){let Ue=await u(Y);if(v)return new vt;let Ke=Se.skinned?Ci(Ue.scene):Ue.scene.clone(!0);return Ke.traverse(ye=>{ye.isMesh&&(ye.castShadow=Se.shadow!==!1,ye.receiveShadow=!0)}),Ke.position.set(oe,le,Z),Ke.rotation.y=Se.ry||0,Se.s&&Ke.scale.setScalar(Se.s),(Se.parent||d).add(Ke),Se.skinned&&(Ke.userData.clips=Ue.animations),Ke}function me(Y,oe,le=1,Z=Math.random()*2){let Se=new di(Y),Ue=Y.userData.clips.find(ye=>ye.name===oe)||Y.userData.clips[0],Ke=Se.clipAction(Ue);return Ke.timeScale=le,Ke.play(),Se.setTime(Z),x.push(Se),Y.userData.mix=Se,Y.userData.act=Ke,Ke}function ge(Y,oe,le=1){let Z=Y.userData.mix;if(!Z)return;let Se=Y.userData.clips.find(Ke=>Ke.name===oe);if(!Se)return;let Ue=Z.clipAction(Se);Ue.timeScale=le,Ue.reset().play(),Y.userData.act&&Y.userData.act!==Ue&&Y.userData.act.crossFadeTo(Ue,.3,!1),Y.userData.act=Ue}function Te(Y,oe,le=0){Y.traverse(Z=>{if(!Z.isMesh||!Z.material.map)return;let Se=Z.material.map.image,Ue=document.createElement("canvas");Ue.width=Se.width,Ue.height=Se.height;let Ke=Ue.getContext("2d");Ke.drawImage(Se,0,0);let ye=Ue.width/32;for(let[bt,Ht,cn]of oe)Ke.fillStyle=cn,Ke.fillRect(bt*ye,Ht*ye,ye,ye);le&&(Ke.fillStyle=`rgba(10,10,16,${le})`,Ke.globalCompositeOperation="multiply",Ke.fillRect(0,0,Ue.width,Ue.height));let dt=new wn(Ue);dt.flipY=!1,dt.colorSpace=Ut,Z.material=Z.material.clone(),Z.material.map=dt})}let Le=[[12,0,"#9c1c20"],[5,0,"#6e1216"]],Ye=[[12,0,"#1b1b22"],[5,0,"#3a0d10"]];function he(Y,oe,le){var Se;let Z=new bn(new gn({map:Y,transparent:!0,depthWrite:!1,blending:le.add?Rn:Di,color:le.color||16777215,fog:le.fog!==!1}));return Z.position.copy(oe),Z.scale.setScalar(le.size||1),d.add(Z),D.push({s:Z,v:le.v?le.v.clone():new F,g:le.g||0,life:le.life||1,age:0,grow:le.grow||0,size:le.size||1,a:(Se=le.a)!=null?Se:1,drag:le.drag||0}),Z}function ve(Y){var oe;for(let le=D.length-1;le>=0;le--){let Z=D[le];if(Z.age+=Y,Z.age>=Z.life||!Z.s.parent){(oe=Z.s.parent)==null||oe.remove(Z.s),Z.s.material.dispose(),D.splice(le,1);continue}Z.v.y-=Z.g*Y,Z.drag&&Z.v.multiplyScalar(Math.max(0,1-Z.drag*Y)),Z.s.position.addScaledVector(Z.v,Y);let Se=Z.age/Z.life;Z.s.scale.setScalar(Z.size*(1+Z.grow*Se)),Z.s.material.opacity=Z.a*(1-Se)*Math.min(1,Z.age*12)}}let ie=(Y,oe,le)=>new F(Y,oe,le);function Ae(Y,oe=1){he(ce,Y,{size:5*oe,life:.3,add:!0,grow:.6,fog:!1});for(let le=0;le<16*oe;le++)he(B,Y,{size:.5+Math.random()*.6,life:.5+Math.random()*.5,add:!0,g:9,v:ie((Math.random()-.5)*14,Math.random()*12,(Math.random()-.5)*14)});for(let le=0;le<10*oe;le++){let Z=new ke(new zt(.12,.12,.6+Math.random()*.6),Et);Z.position.copy(Y),d.add(Z);let Se=ie((Math.random()-.5)*16,6+Math.random()*10,(Math.random()-.5)*16),Ue=ie(Math.random()*9,Math.random()*9,Math.random()*9),Ke=0;g.push(ye=>{Z.parent&&(Ke+=ye,Se.y-=22*ye,Z.position.addScaledVector(Se,ye),Z.rotation.x+=Ue.x*ye,Z.rotation.y+=Ue.y*ye,(Z.position.y<-1||Ke>3)&&(Z.parent.remove(Z),Z.geometry.dispose()))})}for(let le=0;le<8;le++)he(ue,Y.clone().add(ie((Math.random()-.5)*2,0,(Math.random()-.5)*2)),{size:2,life:2.2+Math.random()*1.5,grow:1.8,a:.45,color:6973552,v:ie(-1-Math.random()*2,1.5+Math.random()*1.5,0),drag:.4});q=Math.min(1.2,q+.6*oe),w=Math.max(w,.25)}function ht(Y,oe=1){for(let le=0;le<30*oe;le++)he(ae,Y,{size:.35+Math.random()*.4,life:1+Math.random()*.5,g:18,v:ie((Math.random()-.5)*6,8+Math.random()*9*oe,(Math.random()-.5)*6)});for(let le=0;le<6;le++)he(ue,Y,{size:3,life:1.6,grow:1.5,a:.5,v:ie(0,2,0)})}let Et=new Xt({color:7029800,roughness:.8});function qe(Y,oe,le=1){let Z=new si(16742954,14*le,14*le,1.6);Z.position.copy(oe),Y.add(Z);let Se=[];for(let Ke=0;Ke<7;Ke++){let ye=new bn(new gn({map:B,transparent:!0,depthWrite:!1,blending:Rn}));Y.add(ye),Se.push(ye)}let Ue=[];for(let Ke=0;Ke<9;Ke++){let ye=new bn(new gn({map:ue,color:4868174,transparent:!0,depthWrite:!1}));Y.add(ye),Ue.push(ye)}g.push((Ke,ye)=>{Z.intensity=14*le*(1+Math.sin(ye*17)*.2+Math.sin(ye*7.3)*.15),Se.forEach((dt,bt)=>{let Ht=(ye*1.6+bt/Se.length)%1;dt.position.set(oe.x+Math.sin(bt*3+ye*5)*.3*le,oe.y+Ht*2.2*le,oe.z+Math.cos(bt*2+ye*4)*.3*le),dt.scale.setScalar((1.6-Ht)*le),dt.material.opacity=(1-Ht)*.9}),Ue.forEach((dt,bt)=>{let Ht=(ye*.22+bt/Ue.length)%1;dt.position.set(oe.x-Ht*4*le+Math.sin(bt+ye)*.4,oe.y+1.5*le+Ht*10*le,oe.z+Ht*1.5),dt.scale.setScalar((1.5+Ht*5)*le),dt.material.opacity=.42*(1-Ht)*Math.min(1,Ht*5)})})}let Be=new Hi().load(t+"models/waternormals.jpg");Be.wrapS=Be.wrapT=Gn;function J(Y,oe){let le=Ys[Y],Z=vi.merge([Ve.fog,{t:{value:0},wn:{value:null},moon:{value:new F},deep:{value:new Fe},shal:{value:new Fe},sky:{value:new Fe},spec:{value:new Fe},foamK:{value:1},hm:{value:null},hmOn:{value:0},TS:{value:1},flash:{value:0}}]);Z.wn.value=Be,Z.moon.value.copy(oe.sun).normalize(),Z.deep.value.set(oe.deep),Z.shal.value.set(oe.shal),Z.sky.value.set(oe.sky),Z.spec.value.set(oe.spec),Z.foamK.value=oe.foam,oe.hm&&(Z.hm.value=oe.hm,Z.hmOn.value=1,Z.TS.value=oe.TS);let Se=le.map(([dt,bt,Ht,cn,dn])=>`h+=sin((p.x*${bt.toFixed(3)}+p.z*${(1-Math.abs(bt)).toFixed(3)})*${(dt*6.283).toFixed(4)}+t*${Ht.toFixed(3)}+${dn.toFixed(3)})*${cn.toFixed(3)};`).join(""),Ue=new Qt(900,900,300,300);Ue.rotateX(-Math.PI/2);let Ke=new Sn({uniforms:Z,fog:!0,transparent:!!oe.hm,depthWrite:!oe.hm,vertexShader:`uniform float t;varying vec3 wp;varying float hh;
        #include <fog_pars_vertex>
        void main(){vec3 p=(modelMatrix*vec4(position,1.)).xyz;float h=0.;${Se}hh=h;p.y+=h;wp=p;vec4 mvPosition=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mvPosition;
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
        }`}),ye=new ke(Ue,Ke);return ye.renderOrder=2,d.add(ye),g.push((dt,bt)=>{Z.t.value=bt,Z.flash.value=w,ye.position.x=Math.round(o.position.x/7)*7,ye.position.z=Math.round(o.position.z/7)*7}),{U:Z,set:le}}function ln(Y,oe,le,Z,Se,Ue){let Ke=new Sn({side:zn,depthWrite:!1,fog:!1,uniforms:{sun:{value:Z.clone().normalize()},top:{value:new Fe(Y)},mid:{value:new Fe(oe)},hor:{value:new Fe(le)},sc:{value:new Fe(Se)},flash:{value:0},t:{value:0}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun,top,mid,hor,sc;uniform float flash,t;varying vec3 vp;
        float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
        void main(){float h=vp.y;vec3 c=mix(hor,mid,smoothstep(0.,.14,h));c=mix(c,top,smoothstep(.14,.6,h));
          float d=max(dot(vp,sun),0.);c+=sc*(pow(d,10.)*.35+pow(d,${Ue?"900.":"400."})*${Ue?"2.2":"3."});
          vec2 q=vp.xz/(h+.25)*2.+vec2(t*.01,0.);float cl=n2(q*2.)*.5+n2(q*4.3)*.3+n2(q*9.)*.2;cl=smoothstep(.45,.85,cl)*smoothstep(-.02,.25,h);
          c=mix(c,mix(mid*.7,hor*1.1,.4)+sc*pow(d,4.)*.4,cl*.75);c+=vec3(.75,.8,1.)*flash*(.15+cl*.35);
          if(h<0.)c=hor;gl_FragColor=vec4(c,1.);}`}),ye=new ke(new ni(900,32,16),Ke);return d.add(ye),g.push((dt,bt)=>{Ke.uniforms.flash.value=w,Ke.uniforms.t.value=bt,ye.position.copy(o.position)}),Ke}let ct=new In(1,1,{samples:4,type:ei}),mt=new Or(r,ct);mt.addPass(new kr(a,o));let nt=new Es(new lt(256,256),.6,.6,.78);mt.addPass(nt),mt.addPass(new Hr);let yt=new Ms({uniforms:{tDiffuse:{value:null},tint:{value:new F(1,1,1)},vig:{value:.62}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec3 tint;uniform float vig;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.12);c=(c-.5)*1.06+.5;c*=tint;
      float v=smoothstep(.95,.28,length((vUv-.5)*vec2(1.2,1.)));c*=mix(vig,1.,v);gl_FragColor=vec4(c,1.);}`});mt.addPass(yt);let H={};async function P(Y){a.fog=new yo(1450543,.0105),a.background=new Fe(726048),yt.uniforms.tint.value.set(.95,1,1.08),yt.uniforms.vig.value=.5,nt.strength=.7;let oe=ie(.45,.32,-1);ln(330260,1385274,1713976,oe,12375295,!0),d.add(new ii(8229816,791584,.55));let le=new Ln(11060479,1.1);le.position.set(60,70,-90),le.castShadow=!0,le.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(le.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:10,far:260}),d.add(le),d.add(le.target);let Z=new Ln(14674175,0);Z.position.set(-30,90,-40),d.add(Z),H.boltLight=Z,H.water=J("sea",{sun:oe,deep:398111,shal:1192777,sky:2900056,spec:13032703,foam:1}),H.ship=new vt,d.add(H.ship),H.list=0,H.turn=0,H.heading=0,H.listT=0;let Se=await be(h("Ship_Large"),0,0,0,{parent:H.ship,s:1.4});if(Y!==f)return;Te(Se,Le),H.hull=Se;let Ue=new si(16756832,10,18,1.5);Ue.position.set(-6,6,0),H.ship.add(Ue),H.crew=[];for(let[rt,an,S,G]of[["Characters_Henry",2.5,.8,"Idle"],["Characters_Mako",-4,-.6,"Idle"],["Characters_Sharky",6,.3,"Idle"],["Characters_Anne",-1,-1.2,"Idle"]]){let V=await be(h(rt),an,2.9,S,{parent:H.ship,skinned:!0,s:1.05,ry:Math.random()*6});me(V,G),H.crew.push(V)}H.enemies=[];for(let[rt,an,S,G]of[[62,-30,1.45,Math.PI*.85],[96,-62,1.3,Math.PI*.9],[34,-84,1.2,Math.PI*.8]]){let V=new vt;d.add(V);let te=await be(h("Ship_Large"),0,0,0,{parent:V,s:S});if(Y!==f)return;Te(te,Ye,.35),V.position.set(rt+70,0,an-30),V.rotation.y=G,V.userData={to:ie(rt,0,an),ry:G,show:0,target:0,turn:G};let ee=new si(16747066,0,22,1.6);ee.position.set(0,2.5,2),V.add(ee),V.userData.port=ee,H.enemies.push(V)}let Ke=await be(h("Characters_Captain_Barbarossa"),-2,2.9,1.5,{parent:H.enemies[0],skinned:!0,s:1.25,ry:-Math.PI/2});Ke.traverse(rt=>{rt.isMesh&&(rt.material=rt.material.clone(),rt.material.color.setRGB(.22,.2,.26))}),me(Ke,"Idle"),H.admiral=Ke;let ye=new si(16728112,0,9,1.6);ye.position.set(-.5,6,3.5),H.enemies[0].add(ye),H.admEye=ye,H.island=new vt,H.island.position.set(-160,-2,-120),d.add(H.island);for(let[rt,an,S,G,V]of[["Environment_Cliff2",0,0,10,.4],["Environment_Cliff3",45,10,8,1.2],["Environment_Cliff4",-50,5,9,2.3]])await be(h(rt),an,0,S,{parent:H.island,s:G,ry:V,shadow:!1});let dt=n?900:1600,bt=new Float32Array(dt*6),Ht=new mn;Ht.setAttribute("position",new un(bt,3));let cn=Array.from({length:dt},()=>[Math.random()*90-45,Math.random()*40,Math.random()*90-45]),dn=new Lr(Ht,new Ws({color:10467030,transparent:!0,opacity:.35,fog:!1}));d.add(dn),g.push((rt,an)=>{dn.position.set(o.position.x,0,o.position.z);for(let S=0;S<dt;S++){let G=cn[S],V=((G[1]-an*38)%40+40)%40;bt[S*6]=G[0],bt[S*6+1]=V+o.position.y-20,bt[S*6+2]=G[2],bt[S*6+3]=G[0]-.5,bt[S*6+4]=V+o.position.y-21.6,bt[S*6+5]=G[2]+.2}Ht.attributes.position.needsUpdate=!0}),g.push((rt,an)=>{let S=H.ship;H.listT=Ql(H.listT,H.list,1-Math.pow(.3,rt)),H.turn>0&&(H.turn=Math.min(1,H.turn+rt/3.4),H.heading=-.58*va(H.turn));let G=H.turn>0?7*va(H.turn):0;S.position.x+=-Math.cos(H.heading)*G*rt,S.position.z+=Math.sin(H.heading)*G*rt;let V=S.position.x,te=S.position.z,ee=Vr(Ys.sea,V,te,an),W=Vr(Ys.sea,V+6,te,an)-Vr(Ys.sea,V-6,te,an),Ie=Vr(Ys.sea,V,te+3,an)-Vr(Ys.sea,V,te-3,an);S.position.y=ee*.8-.4-H.listT*4,S.rotation.set(0,H.heading,0),S.rotateZ(-W*.045),S.rotateX(Ie*.07+H.listT);for(let Ne of H.enemies){let Je=Ne.userData;Je.show=Ql(Je.show,Je.target,1-Math.pow(.45,rt)),Ne.position.lerpVectors(ie(Je.to.x+70,0,Je.to.z-30),Je.to,va(Math.min(1,Je.show))),Ne.rotation.y=Ql(Ne.rotation.y,Je.turn,1-Math.pow(.5,rt));let xt=Vr(Ys.sea,Ne.position.x,Ne.position.z,an);Ne.position.y=xt*.8-.4,Ne.rotation.z=Math.sin(an*.8+Ne.position.x)*.04,Ne.visible=Je.show>.02}H.boltLight&&(H.boltLight.intensity=w*2.5),H.admEye&&(H.admEye.intensity=H.admT?9+Math.sin(an*9)*3:0)}),ze(ie(-34,9,34),ie(4,4,0),99)}let M=240,$=220,_e=null;function Me(Y,oe){let Z=(6+Math.sin(Y*.05)*4+(zr(Y*.03,3)-.5)*6-oe)*.12;return Z>0?Z=Math.min(Z,.9+(Z-.9)*.25+Ss(-12,-40,oe)*(4+zr(Y*.04,oe*.04)*10)):Z=Z*2.2,Z+=Ss(46,70,Math.abs(Y))*Ss(-10,10,-oe+5)*6*zr(Y*.05,oe*.05),Math.max(-8,Z)+(zr(Y*.3,oe*.3)-.5)*.12}async function Pe(Y){a.fog=new Ni(15975328,110,380),a.background=new Fe(15773840),yt.uniforms.tint.value.set(1.04,1,.97),yt.uniforms.vig.value=.66,nt.strength=.55;let oe=ie(-.7,.12,-1);ln(5074598,15900794,16765600,oe,16769456,!1),d.add(new ii(16770252,5599306,.9));let le=new Ln(16769732,.9);le.position.set(40,30,70),d.add(le);let Z=new Ln(16764826,2.3);Z.position.set(-70,45,-60),Z.castShadow=!0,Z.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(Z.shadow.camera,{left:-50,right:50,top:40,bottom:-40,near:10,far:240}),d.add(Z),d.add(Z.target);let Se=new Qt(M,M,$-1,$-1);Se.rotateX(-Math.PI/2);let Ue=Se.attributes.position,Ke=new Uint8Array($*$*4);for(let W=0;W<Ue.count;W++){let Ie=Me(Ue.getX(W),Ue.getZ(W));Ue.setY(W,Ie),Ke[W*4]=Math.max(0,Math.min(255,Math.round((Ie+10)/20*255))),Ke[W*4+3]=255}Se.computeVertexNormals();let ye=new Float32Array(Ue.count*3),dt=Se.attributes.normal,bt=new Fe,Ht=new Fe,cn=new Fe(12096610),dn=new Fe(15323032),rt=new Fe(5208626),an=new Fe(2377759),S=new Fe(8747628);for(let W=0;W<Ue.count;W++){let Ie=Ue.getX(W),Ne=Ue.getZ(W),Je=Ue.getY(W),xt=zr(Ie*.1,Ne*.1),_t=zr(Ie*.4+7,Ne*.4);bt.copy(cn).lerp(dn,Ss(0,.5,Je)),Ht.copy(rt).lerp(an,Ss(.3,.8,xt)),bt.lerp(Ht,Ss(1+xt,1.8+xt,Je)),bt.lerp(S,Ss(.8,.65,dt.getY(W))*Ss(1,2,Je));let $e=.88+_t*.24;ye[W*3]=bt.r*$e,ye[W*3+1]=bt.g*$e,ye[W*3+2]=bt.b*$e}Se.setAttribute("color",new un(ye,3));let G=new ke(Se,new Xt({vertexColors:!0,roughness:.95}));G.receiveShadow=!0,d.add(G),_e=new Gs(Ke,$,$,Kn,bi),_e.minFilter=_e.magFilter=Fn,_e.needsUpdate=!0,H.water=J("shore",{sun:oe,deep:876156,shal:4769730,sky:16041636,spec:16769720,foam:.4,hm:_e,TS:M});let V=(W,Ie)=>Me(W,Ie),te=(()=>{let W=11;return()=>(W=W*16807%2147483647)/2147483647})();H.bush=[];for(let W=0;W<150;W++){let Ie=(te()-.5)*170,Ne=-10-te()*46;if(Math.abs(Ie-26)<5&&Ne>-30)continue;let Je=await be(h("Environment_PalmTree_"+(1+W%3)),Ie,V(Ie,Ne)-.1,Ne,{ry:te()*6,s:(Ne>-16?1:1.6)+te()*1.4,shadow:Ne>-30});if(Y!==f)return;let xt=te()*6;g.push((_t,$e)=>{Je.rotation.z=Math.sin($e*.8+xt)*.02}),Math.abs(Ie-30)<12&&Ne>-26&&H.bush.push(Je)}for(let[W,Ie,Ne,Je,xt]of[["Environment_Cliff2",-70,-30,3.5,.6],["Environment_Cliff3",75,-25,3,2],["Environment_Cliff1",-50,12,2.2,1.1],["Environment_Cliff4",60,18,2.4,2.8]])await be(h(W),Ie,V(Ie,Ne)-1.5,Ne,{s:Je,ry:xt});for(let W=0;W<18;W++){let Ie=(te()-.5)*110,Ne=4+te()*10,Je=V(Ie,Ne);Je<-1.2||Ie>-14&&Ie<24||await be(h("Environment_Rock_"+(1+W%5)),Ie,Je-.2,Ne,{s:1.4+te()*2,ry:te()*6})}H.ship=new vt,H.ship.position.set(-22,-.9,24),H.ship.rotation.set(0,.5,.13),d.add(H.ship);let ee=await be(h("Ship_Large"),0,0,0,{parent:H.ship,s:1.4});if(Y===f){Te(ee,[[12,0,"#7a2a24"],[5,0,"#4a1412"]]),qe(H.ship,ie(3,3.4,.5),.8),qe(H.ship,ie(-6,3.2,-.5),.6),qe(H.ship,ie(-1,9,0),.5),H.shipBase=H.ship.position.clone(),g.push((W,Ie)=>{let Ne=H.arrive!=null?va(Math.min(1,H.arrive)):1;H.arrive!=null&&H.arrive<1&&(H.arrive+=W/3.2),H.ship.position.set(H.shipBase.x-(1-Ne)*46,-.9+Math.sin(Ie*.9)*.12,H.shipBase.z+(1-Ne)*4),H.ship.rotation.z=.13+Math.sin(Ie*.7)*.015}),await be("models/kenney/pirate/boat-row-small.glb",-8,V(-8,10)+.1,10,{ry:2.2,s:1.6});for(let[W,Ie,Ne,Je]of[["Prop_Barrel",-9,-1,0],["Prop_Barrel",-8,0,1],["Prop_Chest_Closed",-5,-.5,.4],["Prop_Bucket",-2,5,0],["Prop_Anchor",-10,7,1.2]])try{await be(h(W),Ie,V(Ie,Ne),Ne,{ry:Je,s:1.2})}catch{}H.camp=ie(-7,V(-7,-2),-2),qe(d,H.camp.clone().add(ie(0,.2,0)),.45),H.crew=[];for(let[W,Ie,Ne,Je,xt]of[["Characters_Henry",-4,9,1,"Idle"],["Characters_Mako",-6,11,.6,"Idle"],["Characters_Sharky",-9,12,2,"Idle"],["Characters_Skeleton",-5,13,1.4,"Idle"]]){let _t=await be(h(W),Ie,V(Ie,Ne),Ne,{skinned:!0,s:1.15,ry:Je});me(_t,xt),_t.userData.home=ie(Ie,0,Ne),H.crew.push(_t)}H.slots={sailor:ie(-2,0,2.5),scarlet:ie(2,0,1.8),shark:ie(6,0,2.6),captain:ie(10,0,2),crab:ie(14,0,2.8)};for(let W in H.slots)H.slots[W].y=V(H.slots[W].x,H.slots[W].z);H.heroPos=ie(0,0,0),H.heroPath=null,H.H=V,ze(ie(-60,18,70),ie(-10,2,10),99)}}function ze(Y,oe,le=1.4){E.follow=null,E.tpos.copy(Y),E.tlook.copy(oe),E.rate=le,le>=99&&(E.pos.copy(Y),E.look.copy(oe))}function Ge(Y,oe){if(E.follow){let[Ke,ye]=E.follow();E.tpos.copy(Ke),E.tlook.copy(ye)}let le=1-Math.pow(.5,Y*E.rate);E.pos.lerp(E.tpos,le),E.look.lerp(E.tlook,le);let Z=q>0?(Math.sin(oe*61)*.5+Math.sin(oe*37)*.3)*q*q:0,Se=q>0?Math.cos(oe*53)*.4*q*q:0,Ue=p==="sea"?Math.sin(oe*.9)*.5:Math.sin(oe*.4)*.08;o.position.set(E.pos.x+Z,E.pos.y+Se+Ue,E.pos.z),o.lookAt(E.look.x,E.look.y+Ue*.5,E.look.z),q=Math.max(0,q-Y*1.6),w=Math.max(0,w-Y*2.2)}function et(Y){return H.ship.localToWorld(Y.clone())}let Qe=(Y,oe)=>{let le=setTimeout(()=>{v||Y()},oe);Mt.push(le)},Mt=[];function Ee(Y,oe={}){var Z,Se,Ue,Ke;let le=H.ship;switch(Y){case"establish":ze(ie(-26,7,30),ie(4,5,0),.9);break;case"enemiesEmerge":(Z=H.enemies)==null||Z.forEach((ye,dt)=>ye.userData.target=1-dt*.1),ze(ie(-30,12,44),ie(40,3,-25),.8),Gt();break;case"gunsTurn":if(H.enemies){let ye=H.enemies[0];ye.userData.turn=Math.PI*1.02,ye.userData.port.intensity=6,ze(ie(30,8,8),ie(62,4,-30),1)}break;case"admiral":H.enemies&&(H.admT=1,E.follow=()=>{let ye=H.admiral.getWorldPosition(ie(0,0,0)).add(ie(0,2.2,0)),dt=H.ship.position.clone().sub(ye).setY(0).normalize();return[ye.clone().addScaledVector(dt,15).add(ie(dt.z*4,3,-dt.x*4)),ye.clone().add(ie(0,.4,0))]},E.rate=1.8,Qe(()=>{E.follow=null},2400),Gt());break;case"broadside":ze(ie(-14,6,26),ie(2,5,0),1.3),Qe(()=>ze(ie(-30,11,40),ie(25,4,-12),.9),1900);break;case"listing":H.list=-.11,(Se=H.crew)==null||Se.forEach((ye,dt)=>ge(ye,"Run",1.2)),ze(ie(-30,8,34),ie(2,5,0),1.1);break;case"cutRigging":Qe(()=>ut(),900);break;case"nearMiss":break;case"revealLand":Gt(),ze(ie(-24,8,30),ie(-150,14,-110),.8),H.revealT=1.4;break;case"turnToIsland":H.turn=.001,E.rate=.8,E.follow=()=>[H.ship.localToWorld(ie(26,10,18)),H.ship.localToWorld(ie(-30,3,-6))];break;case"arrive":H.arrive=0,ze(ie(-6,8,50),ie(-26,3,18),.6);break;case"crewAshore":Nt(),ze(ie(-4,7,30),ie(0,2,4),.8);break;case"branchSnap":if(H.bush){let ye=y;for(let bt of H.bush)g.push((Ht,cn)=>{let dn=cn-ye;dn<2.4&&(bt.rotation.x=Math.sin(dn*14)*.08*(1-dn/2.4))});let dt=ie(30,5,-16);for(let bt=0;bt<18;bt++)he(fe,dt,{size:.5,life:2.4,g:2,drag:.8,v:ie((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6)});wt(dt),ze(ie(18,5,14),ie(30,4,-14),1.2),Qe(()=>ze(ie(4,6,24),ie(5,2,2),.8),2600)}break;case"rollCall":{let ye=["captain","scarlet","shark","sailor","crab"];ye.forEach((dt,bt)=>Qe(()=>{var cn;let Ht=(cn=H.slots)==null?void 0:cn[dt];Ht&&ze(Ht.clone().add(ie(-1.5,2.6,8.5)),Ht.clone().add(ie(0,1.6,0)),2.2)},bt*680)),Qe(()=>ze(ie(4,6,24),ie(5,2,2),1),ye.length*680+200);break}case"selectFrame":ze(ie(5,9,30),ie(5,3,0),.9);break;case"heroStep":{let ye=((Ue=H.slots)==null?void 0:Ue[oe.hero])||ie(4,0,2);H.heroPos.copy(ye),H.heroStep=0,ze(ye.clone().add(ie(-2,2.6,8)),ye.clone().add(ie(1,1.5,0)),1.2);break}case"handMap":break;case"heroAshore":{let ye=H.heroPos.clone();H.heroPath={from:ye,to:ie(28,((Ke=H.H)==null?void 0:Ke.call(H,28,-20))||2,-20),k:0},ze(ie(ye.x+6,5,ye.z+14),ie(24,3,-10),.55);break}}}function Gt(){w=1,H.island&&p==="sea"&&(H.revealT=Math.max(H.revealT||0,.8))}function Nt(){H.crew&&H.crew.forEach((Y,oe)=>{let le=Y.position.clone(),Z=ie(-12+oe*2.4,0,-4-oe%2*1.8);Z.y=H.H(Z.x,Z.z);let Se=-oe*.25;ge(Y,"Walk",1),g.push(Ue=>{if(Se>=1)return;Se+=Ue/4;let Ke=Math.max(0,Math.min(1,Se));Y.position.lerpVectors(le,Z,Ke),Y.position.y=H.H(Y.position.x,Y.position.z),Y.rotation.y=Math.atan2(Z.x-le.x,Z.z-le.z),Se>=1&&(ge(Y,oe%2?"Idle":"Yes",1),Y.rotation.y=Math.atan2(H.camp.x-Z.x,H.camp.z-Z.z))})})}function wt(Y){let oe=new tn({color:2762272,side:pn});for(let le=0;le<7;le++){let Z=new mn;Z.setAttribute("position",new nn([-.5,.1,0,0,0,0,.5,.1,0,0,0,-.2,0,0,.25],3)),Z.setIndex([0,1,3,1,2,3,0,1,4,1,2,4]);let Se=new ke(Z,oe);Se.position.copy(Y).add(ie((Math.random()-.5)*6,Math.random()*3,(Math.random()-.5)*4)),d.add(Se);let Ue=ie(-3-Math.random()*4,3+Math.random()*2,2+Math.random()*2),Ke=Z.attributes.position,ye=0;g.push((dt,bt)=>{if(!Se.parent)return;ye+=dt,Se.position.addScaledVector(Ue,dt),Se.rotation.y=Math.atan2(Ue.x,Ue.z);let Ht=Math.sin(bt*20+le)*.3;Ke.setY(0,.1+Ht),Ke.setY(2,.1+Ht),Ke.needsUpdate=!0,ye>5&&(Se.parent.remove(Se),Z.dispose())})}}function ut(){if(!H.ship)return;let Y=new vt,oe=new ke(new Wt(.18,.22,8,8),Et);oe.rotation.z=Math.PI/2,Y.add(oe);let le=new ke(new Qt(7,4,6,3),new Xt({color:9181725,side:pn,roughness:.9}));le.position.y=-2,Y.add(le);let Z=et(ie(1,13,0));Y.position.copy(Z),d.add(Y);let Se=ie(2,0,3),Ue=0,Ke=!1;Ae(Z,.6),g.push(ye=>{var dt;Ke||(Ue+=ye,Se.y-=14*ye,Y.position.addScaledVector(Se,ye),Y.rotation.x+=ye*1.6,Y.rotation.z+=ye*.7,Y.position.y<-2&&(Ke=!0,ht(Y.position.clone().setY(0),1.3),(dt=Y.parent)==null||dt.remove(Y)))})}let it=new ni(.35,10,8),At=new Xt({color:1447446,roughness:.5,metalness:.4});function qt(Y=0,oe={},le=.62){var S,G;let Z=((S=H.enemies)==null?void 0:S[Y])||((G=H.enemies)==null?void 0:G[0]);if(!Z||!H.ship)return;let Se=(H.shotN=(H.shotN||0)+1)%5,Ue=Z.localToWorld(ie(-6+Se*3,2.6,2.6)),Ke=Ue.clone().sub(Z.position).setY(0).normalize();he(ce,Ue,{size:4,life:.25,add:!0,fog:!1});for(let V=0;V<8;V++)he(ue,Ue,{size:2,life:2.4+Math.random(),grow:2.4,a:.6,v:Ke.clone().multiplyScalar(2+Math.random()*2).add(ie(0,1+Math.random(),0)),drag:.6});Z.userData.port.intensity=18,Qe(()=>{Z.userData.port.intensity=6},120);let ye=oe.mast?ie(1,12,0):oe.sail?ie(2,9,.5):ie((oe.lx||0)*.05,2.2+Math.random(),1.5),dt=oe.near,bt=new F;o.getWorldDirection(bt);let Ht=dt?o.position.clone().addScaledVector(bt.setY(0).normalize(),14).add(ie(3,0,0)).setY(0):oe.miss?et(ie(3,0,6)).setY(0):et(ye),cn=new ke(it,At);cn.position.copy(Ue),d.add(cn);let dn=[],rt=0;g.push(()=>{cn.parent&&(rt+=1/60)});let an=y;g.push((V,te)=>{if(!cn.parent)return;let ee=Math.min(1,(te-an)/le),W=Ue.clone().lerp(dt||oe.miss?Ht:et(ye),ee);W.y+=Math.sin(ee*Math.PI)*3.5,cn.position.copy(W),Math.random()<.6&&he(ue,W,{size:.6,life:.5,grow:1,a:.35}),ee>=1&&(cn.parent.remove(cn),oe.miss||dt?ht(W.setY(0),dt?1.6:1):(Ae(W,oe.mast?1.3:1),!oe.sail&&!oe.mast&&(H.fires=(H.fires||0)+1)<=3&&qe(H.ship,H.ship.worldToLocal(W.clone()),.7)))})}let Vt=new F,gt=new F;function Oe(Y){if(p!=="shore"||!H.slots)return null;let oe=Y==="hero"?H.heroPos:H.slots[Y];if(!oe)return null;Vt.copy(oe).project(o),gt.copy(oe).add(ie(0,1.9,0)).project(o);let le=i.clientWidth,Z=i.clientHeight;return Vt.z>1?null:{x:(Vt.x*.5+.5)*le,y:(-Vt.y*.5+.5)*Z,px:Math.abs(gt.y-Vt.y)*.5*Z}}function k(Y){if(p!=="shore"||!H.heroPath)return;let oe=H.heroPath;oe.k=Math.min(1,oe.k+Y/4.5),H.heroPos.lerpVectors(oe.from,oe.to,va(oe.k)),H.heroPos.y=H.H(H.heroPos.x,H.heroPos.z),E.tlook.lerp(H.heroPos.clone().add(ie(0,1.5,0)),.05)}function He(){let Y=Math.max(1,s.clientWidth),oe=Math.max(1,s.clientHeight);r.setSize(Y,oe,!1),mt.setSize(Y,oe),nt.resolution.set(Y/2,oe/2),o.aspect=Y/oe,o.fov=Y/oe>1.6?42:56,o.updateProjectionMatrix()}He(),addEventListener("resize",He);let Ce=0,ft=0;function We(Y){if(N=0,v||T)return;N=requestAnimationFrame(We);let oe=Math.min(.05,(Y-C)/1e3)||.016;C=Y,(s.clientWidth!==Ce||s.clientHeight!==ft)&&(Ce=s.clientWidth,ft=s.clientHeight,He()),!m&&(jt(oe),mt.render())}function jt(Y){y+=Y;for(let oe of g.slice())oe(Y,y);for(let oe of x)oe.update(Y);ve(Y),k(Y),Ge(Y,y),p==="sea"&&H.island&&(H.revealT=Math.max(0,(H.revealT||0)-Y*.35),a.fog.density=.0105-Math.min(1,H.revealT)*.0062)}async function Ct(Y){var Z;if(Y===p)return;let oe=++f;p=Y;for(let Se of Mt)clearTimeout(Se);Mt.length=0,d.traverse(Se=>{var Ue,Ke;Se.geometry&&!Se.isSkinnedMesh&&((Ke=(Ue=Se.geometry).dispose)==null||Ke.call(Ue))}),a.remove(d),d=new vt,a.add(d),g=[],x=[],D.length=0;for(let Se in H)delete H[Se];m=!0;let le=Y==="sea"?["Ship_Large","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Anne","Characters_Captain_Barbarossa","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4"].map(h):["Ship_Large","Environment_PalmTree_1","Environment_PalmTree_2","Environment_PalmTree_3","Environment_Cliff1","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4","Environment_Rock_1","Environment_Rock_2","Environment_Rock_3","Environment_Rock_4","Environment_Rock_5","Prop_Barrel","Prop_Chest_Closed","Prop_Bucket","Prop_Anchor","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Skeleton"].map(h).concat(["models/kenney/pirate/boat-row-small.glb"]);try{await Promise.all(le.map(Se=>u(Se).catch(()=>null))),await(Y==="sea"?P(oe):Pe(oe)),oe===f&&((Z=r.compile)==null||Z.call(r,a,o))}catch(Se){throw console.warn("Story3D",Se&&Se.message),Se}finally{oe===f&&(m=!1,C=performance.now())}}return N=requestAnimationFrame(We),{setEnv:Ct,cue:Ee,shoot:qt,bolt:Gt,advance(Y){let oe=Math.round(Y*30);for(let le=0;le<oe;le++)jt(1/30);mt.render()},get ready(){return!!H.ship},anchor:Oe,pause(){T=!0,cancelAnimationFrame(N),N=0},resume(){v||(T=!1,C=performance.now(),N||(N=requestAnimationFrame(We)))},dispose(){var Y,oe;v=!0,cancelAnimationFrame(N);for(let le of Mt)clearTimeout(le);removeEventListener("resize",He),a.traverse(le=>{le.geometry&&le.geometry.dispose();let Z=le.material;Z&&(Array.isArray(Z)?Z:[Z]).forEach(Se=>{for(let Ue in Se)Se[Ue]&&Se[Ue].isTexture&&Se[Ue].dispose();Se.dispose()})}),(Y=mt.dispose)==null||Y.call(mt),ct.dispose(),r.dispose(),(oe=r.forceContextLoss)==null||oe.call(r),i.remove()},get state(){return{env:p,ready:!!H.ship,fx:D.length,paused:T,cam:o.position.toArray().map(Y=>+Y.toFixed(1)),follow:!!E.follow,adm:H.admiral?H.admiral.getWorldPosition(new F).toArray().map(Y=>+Y.toFixed(1)):null}}}}window.PirateStory3D={create:sx,version:1};var ya=new F;function Mi(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;ya.copy(e),ya[n]=0,ya.normalize();let l=.5*a/(a+o),u=1-ya.angleTo(s)/c;return Math.sign(ya[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Vo=class extends zt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new F,c=new F,l=new F(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,g=new F,x=.5/i;for(let p=0,f=0;p<u.length;p+=3,f+=2)switch(o.fromArray(u,p),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[p+0]=l.x*Math.sign(o.x)+c.x*r,u[p+1]=l.y*Math.sign(o.y)+c.y*r,u[p+2]=l.z*Math.sign(o.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=Mi(g,c,"z","y",r,n),d[f+1]=1-Mi(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-Mi(g,c,"z","y",r,n),d[f+1]=1-Mi(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-Mi(g,c,"x","z",r,e),d[f+1]=Mi(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Mi(g,c,"x","z",r,e),d[f+1]=1-Mi(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Mi(g,c,"x","y",r,e),d[f+1]=1-Mi(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=Mi(g,c,"x","y",r,e),d[f+1]=1-Mi(g,c,"y","x",r,t);break}}};var rx={1:[[.5,.5]],2:[[.27,.27],[.73,.73]],3:[[.27,.27],[.5,.5],[.73,.73]],4:[[.27,.27],[.73,.27],[.27,.73],[.73,.73]],5:[[.27,.27],[.73,.27],[.5,.5],[.27,.73],[.73,.73]],6:[[.27,.25],[.73,.25],[.27,.5],[.73,.5],[.27,.75],[.73,.75]]};function ax(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(46,40,10,64,64,90);n.addColorStop(0,"#fffaf0"),n.addColorStop(1,"#e6d5b0"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let[r,a]of rx[s])t.fillStyle=s===1?"#9a1e16":"#2a1206",t.beginPath(),t.arc(r*128,a*128,s===1?17:12,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.25)",t.beginPath(),t.arc(r*128-3,a*128-3,3,0,7),t.fill();let i=new wn(e);return i.colorSpace=Ut,i.anisotropy=4,i}var ox=[3,4,1,6,2,5],cx={3:[1,0,0],4:[-1,0,0],1:[0,1,0],6:[0,-1,0],2:[0,0,1],5:[0,0,-1]};function lx(s){let e=document.createElement("canvas");e.style.cssText="width:100%;height:100%;display:block",s.append(e);let t=new hi({canvas:e,alpha:!0,antialias:!0});t.debug.checkShaderErrors=!1,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.outputColorSpace=Ut;let n=new ui,i=new _n(32,1,.1,50);i.position.set(0,4.2,4.6),i.lookAt(0,.3,0),n.add(new ii(16773596,5911576,1.4));let r=new Ln(16767400,1.6);r.position.set(-2,5,3),n.add(r);let a=ox.map(E=>new Xt({map:ax(E),roughness:.35})),o=new ke(new Vo(1,1,1,4,.14),a);n.add(o);let c=document.createElement("canvas");c.width=c.height=64;{let E=c.getContext("2d"),q=E.createRadialGradient(32,32,2,32,32,32);q.addColorStop(0,"rgba(0,0,0,.55)"),q.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=q,E.fillRect(0,0,64,64)}let l=new ke(new Qt(1.6,1.6),new tn({map:new wn(c),transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,n.add(l);let u=new F(0,1,0),h=new Un,d=new Un,m=new Un,g=new F;function x(E){let q=new F(...cx[E]),w=new Un().setFromUnitVectors(q,u);return new Un().setFromAxisAngle(u,(Math.random()-.5)*1.2).multiply(w)}let p=null,f=0,y=!1;function v(){let E=Math.max(1,s.clientWidth),q=Math.max(1,s.clientHeight);t.setSize(E,q,!1),i.aspect=E/q,i.updateProjectionMatrix()}function T(){s.clientWidth&&e.width!==Math.round(s.clientWidth*t.getPixelRatio())&&v(),t.render(n,i)}function N(E){o.quaternion.copy(x(E)),o.position.set(0,.5,0),l.position.set(0,.01,0),l.scale.setScalar(1),T()}function C(E){if(f=0,y||!p)return;let q=Math.min(1,(E-p.start)/p.ms),w=1-Math.pow(1-q,3),D=p.from.x*(1-w),ce=p.from.z*(1-w),ue=Math.abs(Math.sin(q*Math.PI*3.2))*(1-q)*(1-q)*1.6;o.position.set(D,.5+ue,ce),m.setFromAxisAngle(p.axis,p.turns*(1-w)),o.quaternion.copy(p.q1).premultiply(m),l.position.set(D,.01,ce),l.scale.setScalar(1+ue*.25),l.material.opacity=1-ue*.3,T(),q<1?f=requestAnimationFrame(C):p=null}return v(),N(1),{roll(E,q=850){y||(cancelAnimationFrame(f),g.set(Math.random()-.5,Math.random()*.4,Math.random()-.5).normalize(),p={start:performance.now(),ms:q,from:new F(2.6*(Math.random()<.5?-1:1),0,-1.2+Math.random()*.6),q1:x(E),axis:g.clone(),turns:Math.PI*(5+Math.random()*3)},f=requestAnimationFrame(C))},show(E){y||(cancelAnimationFrame(f),p=null,N(E))},resize(){v(),T()},dispose(){var E;y=!0,cancelAnimationFrame(f),o.geometry.dispose(),a.forEach(q=>{q.map.dispose(),q.dispose()}),l.geometry.dispose(),l.material.map.dispose(),l.material.dispose(),t.dispose(),(E=t.forceContextLoss)==null||E.call(t),e.remove()}}}window.PirateDice3D={create:lx};var Wr=(s,e,t)=>s+(e-s)*t;function ws(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new wn(t);return r.colorSpace=Ut,r}function vd(s,e="#ffd34a",t=64){let n=document.createElement("canvas"),i=n.getContext("2d");i.font=`900 ${t}px system-ui,sans-serif`;let r=Math.ceil(i.measureText(s).width)+24;n.width=r,n.height=t+24,i.font=`900 ${t}px system-ui,sans-serif`,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=t/6,i.strokeStyle="#3a1806",i.strokeText(s,12,n.height/2),i.fillStyle=e,i.fillText(s,12,n.height/2);let a=new wn(n);return a.colorSpace=Ut,{t:a,aspect:n.width/n.height}}var $l={grunt:3.2,runner:3,brute:4,boss:7.6},hx={grunt:"Characters_Skeleton",runner:"Characters_Sharky",brute:"Characters_Captain_Barbarossa"};function ux(s,e={}){let t=e.base||"harbor/harbor3d/",n=e.art||"bastion/",i=matchMedia("(pointer:coarse)").matches,r=document.createElement("canvas");r.className="bs3d",r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none",s.prepend(r);let a=new hi({canvas:r,antialias:!i,powerPreference:"high-performance"});a.debug.checkShaderErrors=!1,a.setPixelRatio(Math.min(devicePixelRatio||1,i?1.5:1.75)),a.shadowMap.enabled=!0,a.shadowMap.type=fa,a.toneMapping=Ri,a.toneMappingExposure=1.05;let o=new ui;o.background=new Fe(15764058),o.fog=new Ni(15966320,120,330);let c=new _n(44,1,.3,1400),l=new Bi;l.setMeshoptDecoder(Br);let u={},h=O=>u[O]||(u[O]=l.loadAsync(O)),d=new Hi,m=(O,b)=>{let _=d.load(O);return _.colorSpace=Ut,b&&(_.wrapS=_.wrapT=Gn,_.repeat.set(b[0],b[1]),_.anisotropy=4),_},g=new vt;g.scale.x=-1,o.add(g);let x=[],p=0,f=0,y=!1,v=!1,T=[],N=ws([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),C=ws([[0,"rgba(210,200,190,.85)"],[.6,"rgba(160,150,140,.35)"],[1,"rgba(120,110,100,0)"]]),E=ws([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),q=ws([[0,"rgba(235,200,140,.8)"],[1,"rgba(220,180,120,0)"]],32),w=ws([[0,"rgba(255,255,210,1)"],[.4,"rgba(255,220,120,.7)"],[1,"rgba(255,200,80,0)"]],32),D=ws([[0,"rgba(255,255,255,1)"],[.3,"rgba(255,214,150,.95)"],[1,"rgba(255,120,40,0)"]],32),ce=(()=>{let O=document.createElement("canvas");O.width=O.height=128;let b=O.getContext("2d");b.strokeStyle="rgba(255,235,200,.9)",b.lineWidth=7,b.beginPath(),b.arc(64,64,54,0,7),b.stroke();let _=new wn(O);return _.colorSpace=Ut,_})(),ue=(()=>{let O=document.createElement("canvas");O.width=O.height=64;let b=O.getContext("2d");b.fillStyle="#7a4a08",b.beginPath(),b.arc(32,32,30,0,7),b.fill(),b.fillStyle="#ffcf33",b.beginPath(),b.arc(32,30,26,0,7),b.fill(),b.fillStyle="#fff3a8",b.beginPath(),b.arc(25,23,8,0,7),b.fill();let _=new wn(O);return _.colorSpace=Ut,_})(),re=(O,b,_)=>new F(O,b,_);o.add(new ii(16773346,8022648,1.2));let B=new Ln(16768184,2.5);B.position.set(-30,40,90),B.target.position.set(0,0,10),o.add(B,B.target),B.castShadow=!0,B.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(B.shadow.camera,{left:-45,right:45,top:40,bottom:-20,near:10,far:220}),B.shadow.bias=-6e-4,B.shadow.normalBias=.03;let ae=new Ln(16747098,.8);ae.position.set(20,10,-40),o.add(ae);let fe=m(n+"sky.webp"),be=new ke(new Qt(1400,600),new tn({map:fe,fog:!1,depthWrite:!1}));be.rotation.y=Math.PI,be.position.set(0,130,640),be.renderOrder=-2,o.add(be);let me=new bn(new gn({map:w,color:16756848,transparent:!0,depthWrite:!1,fog:!1,blending:Rn,opacity:.55}));me.position.set(0,26,600),me.scale.setScalar(160),o.add(me);let ge=d.load(t+"models/waternormals.jpg");ge.wrapS=ge.wrapT=Gn;let Te={t:{value:0},wn:{value:ge},deep:{value:new Fe(2054778)},shal:{value:new Fe(4176054)},glow:{value:new Fe(16752736)},...Ve.fog},Le=new Qt(900,520,160,90);Le.rotateX(-Math.PI/2),Le.translate(0,0,330);let Ye=new ke(Le,new Sn({uniforms:Te,fog:!0,vertexShader:`uniform float t;varying vec3 wp;
      #include <fog_pars_vertex>
      void main(){vec3 p=(modelMatrix*vec4(position,1.)).xyz;p.y+=sin(p.x*.08+t*1.1)*.25+sin(p.z*.11-t*1.4)*.3;wp=p;vec4 mvPosition=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform float t;uniform sampler2D wn;uniform vec3 deep,shal,glow;varying vec3 wp;
      #include <fog_pars_fragment>
      void main(){vec3 n1=texture2D(wn,wp.xz*.025+vec2(t*.012,t*.02)).rgb*2.-1.,n2=texture2D(wn,wp.xz*.07-vec2(t*.02,-t*.015)).rgb*2.-1.;vec3 n=normalize(vec3(n1.x+n2.x*.6,2.4,n1.y+n2.y*.6));
        float near=smoothstep(40.,75.,wp.z);vec3 c=mix(shal,deep,near);
        vec3 v=normalize(cameraPosition-wp);float fres=pow(1.-max(dot(v,n),0.),3.);c=mix(c,vec3(.98,.62,.45),fres*.55);
        float lane=exp(-pow(wp.x*.03,2.))*smoothstep(60.,300.,wp.z);float sp=pow(max(n.x*.5+.5,0.),6.)*lane;c+=glow*(lane*.35+sp*1.6);
        float foam=smoothstep(.6,1.,texture2D(wn,wp.xz*.12+t*.03).r)*(1.-smoothstep(44.,54.,wp.z));c=mix(c,vec3(1.,.95,.88),foam*.7);
        gl_FragColor=vec4(c,1.);
        #include <fog_fragment>
      }`}));Ye.position.y=-.35,g.add(Ye),x.push(()=>{Te.t.value=p});let he=ws([[0,"rgba(255,255,255,.95)"],[.5,"rgba(255,250,240,.5)"],[1,"rgba(255,255,255,0)"]],64),ve=new ke(new Qt(220,3),new tn({map:he,transparent:!0,depthWrite:!1,opacity:.7}));ve.rotation.x=-Math.PI/2,ve.position.set(0,-.05,47),g.add(ve),x.push(()=>{ve.position.z=46.5+Math.sin(p*.9)*1.2,ve.material.opacity=.5+Math.sin(p*.9+1)*.2});let ie=m(n+"sand.webp",[20,8]),Ae=new Qt(240,80,60,20);Ae.rotateX(-Math.PI/2),Ae.translate(0,0,22);{let O=Ae.attributes.position;for(let b=0;b<O.count;b++){let _=O.getZ(b),A=O.getX(b);O.setY(b,_>40?-(_-40)*.12:Math.sin(A*.2)*.08+Math.cos(_*.3+A*.1)*.06)}Ae.computeVertexNormals()}let ht=new ke(Ae,new Xt({map:ie,roughness:.95,color:16774376}));ht.receiveShadow=!0,g.add(ht);let Et=25,qe=3.2,De=4.2,Be=(O,b)=>{let _=m(n+"wall.webp",[O,b]);return new Xt({map:_,roughness:.9,color:16773340})},J=Be(9,1.1),ln=Be(9,.9),ct=Be(.5,.5),mt=Be(4,2),nt=new vt;g.add(nt);let yt=new ke(new zt(Et*2+4,qe,De),[J,J,ln,J,J,J]);yt.position.set(0,qe/2,-De/2),yt.castShadow=yt.receiveShadow=!0,nt.add(yt);let H=new zt(1.7,1.25,.9);{let O=[];for(let A=-Et-1;A<=Et+1;A+=2.6)Math.abs(A)>=3.4&&O.push(A);let b=new Cr(H,ct,O.length),_=new En;O.forEach((A,R)=>{_.position.set(A,qe+.62,-.45),_.updateMatrix(),b.setMatrixAt(R,_.matrix)}),b.castShadow=!0,nt.add(b)}let P=new ke(new zt(Et*2+4,.5,.5),ln);P.position.set(0,qe+.25,-De+.25),nt.add(P);for(let O of[-1,1]){let b=new vt;b.position.set(O*(Et+4.2),0,-2),nt.add(b);let _=new ke(new Wt(4,4.4,qe+3.4,20),mt);_.position.y=(qe+3.4)/2,_.castShadow=_.receiveShadow=!0,b.add(_);for(let L=0;L<10;L++){let X=L/10*Math.PI*2,pe=new ke(H,ct);pe.position.set(Math.cos(X)*3.7,qe+4,Math.sin(X)*3.7),pe.rotation.y=-X,pe.castShadow=!0,b.add(pe)}let A=new ke(new Fi(4.6,4.2,20),new Xt({color:11680042,roughness:.7}));A.position.y=qe+6.6,A.castShadow=!0,b.add(A);let R=new ke(new Wt(.07,.07,3),new Xt({color:5913120}));R.position.y=qe+9.8,b.add(R);let U=new Qt(2.2,1.3,8,1);U.translate(1.1,0,0);let z=new ke(U,new Xt({color:2781136,side:pn}));z.position.y=qe+10.6,b.add(z);let ne=U.attributes.position,j=Float32Array.from(ne.array);x.push(()=>{for(let L=0;L<ne.count;L++){let X=j[L*3];ne.setZ(L,Math.sin(X*2.4-p*6+O)*X*.14)}ne.needsUpdate=!0})}let M=new vt;M.position.set(0,0,.02),nt.add(M);let $=Be(1.2,1.2);for(let O of[-1,1]){let b=new ke(new zt(1.4,qe+2.4,1.6),$);b.position.set(O*3.3,(qe+2.4)/2,-.2),b.castShadow=!0,M.add(b)}let _e=new ke(new zt(8,1.2,1.6),$);_e.position.set(0,qe+1.8,-.2),_e.castShadow=!0,M.add(_e);let Me=new Xt({color:8014374,roughness:.8}),Pe=new vt;M.add(Pe);for(let O=0;O<5;O++){let b=new ke(new zt(1.06,qe+.6,.35),Me);b.position.set(-2.12+O*1.06,(qe+.6)/2,.5),b.castShadow=!0,Pe.add(b)}let ze=new Xt({color:2763312,metalness:.6,roughness:.4});for(let O of[.9,qe-.4]){let b=new ke(new zt(5.4,.26,.12),ze);b.position.set(0,O,.72),Pe.add(b)}let Ge=(()=>{let O=document.createElement("canvas");O.width=O.height=128;let b=O.getContext("2d");b.strokeStyle="rgba(20,10,4,.9)",b.lineWidth=3;for(let A=0;A<7;A++){b.beginPath();let R=64,U=64;b.moveTo(R,U);for(let z=0;z<5;z++)R+=(Math.random()-.5)*40,U+=(Math.random()-.5)*40,b.lineTo(R,U);b.stroke()}return new wn(O)})(),et=new ke(new Qt(5.4,qe+.6),new tn({map:Ge,transparent:!0,opacity:0,depthWrite:!1}));et.position.set(0,(qe+.6)/2,.7),Pe.add(et);for(let O of[-1,1]){let b=new si(16747066,6,9,1.8);b.position.set(O*3.3,qe+.8,1.2),M.add(b);let _=new bn(new gn({map:E,transparent:!0,depthWrite:!1,blending:Rn}));_.position.copy(b.position),_.scale.setScalar(1.1),M.add(_),x.push(()=>{let A=1+Math.sin(p*13+O)*.15+Math.sin(p*7)*.1;b.intensity=6*A,_.scale.setScalar(1.1*A)})}let Qe=async()=>{let O=async(b,_,A,R,U,z=0)=>{let ne=await h(t+"models/q/"+b+".glb");if(y)return;let j=ne.scene.clone(!0);return j.traverse(L=>{L.isMesh&&(L.castShadow=!0,L.receiveShadow=!0)}),j.position.set(_,A,R),j.scale.setScalar(U),j.rotation.y=z,g.add(j),j};await Promise.all([O("Environment_PalmTree_1",-40,0,14,2.6,.6),O("Environment_PalmTree_2",41,0,10,2.4,2),O("Environment_PalmTree_3",-47,0,30,2.2,1),O("Environment_PalmTree_1",48,0,27,2.3,3),O("Environment_Rock_1",-36,0,36,2.6),O("Environment_Rock_3",36,0,38,2.2,1),O("Environment_Rock_2",-30,0,5,1.6),O("Environment_Rock_5",31,0,6,1.6),O("Ship_Large",-80,-.6,190,3.2,-.6),O("Ship_Large",95,-.6,230,3,.4)])},Mt=new Map,Ee=new Map,Gt=new Map,Nt=null,wt=e.troll?h(n+"troll.glb").then(O=>Nt=O).catch(()=>null):Promise.resolve(null);function ut(O,b){let _=new Vn().setFromObject(O),A=_.getSize(re(0,0,0)),R=b/Math.max(.01,A.y);return O.scale.multiplyScalar(R),R}async function it(O){let b=O.kind==="boss"?Nt||await wt:null,_=!!b;if(b||(b=await h(t+"models/q/"+(hx[O.kind]||"Characters_Skeleton")+".glb")),y)return;let A=new vt,R=Ci(b.scene);A.add(R),R.traverse(X=>{X.isMesh&&(X.castShadow=!i||O.kind==="boss",X.receiveShadow=!1,X.material=X.material.clone(),X.material.emissive=new Fe(0),X.userData.hit=!0)}),ut(R,$l[O.kind]||2.5),O.kind==="boss"&&!_&&R.traverse(X=>{X.isMesh&&X.material.color.multiply(new Fe(.55,.9,.5))});let U=new di(R),z=b.animations||[],ne=X=>{let pe=z.find(pt=>pt.name===X)||z.find(pt=>/walk|run/i.test(pt.name))||z[0];return pe?U.clipAction(pe):null},j={e:O,holder:A,m:R,mix:U,act:ne,cur:null,troll:_,dead:0,x:O.x,z:O.z,hp:1},L=(X,pe=1,pt=!1)=>{let st=ne(X);!st||j.cur===st||(st.reset(),st.timeScale=pe,pt&&(st.setLoop(pa),st.clampWhenFinished=!0),st.play(),j.cur&&j.cur.crossFadeTo(st,.2,!1),j.cur=st)};if(j.play=L,L(_?"walk":"Run",O.kind==="brute"?.8:1.1),U.setTime(Math.random()),O.kind==="boss"){let X=At(4.5);X.g.position.y=$l.boss+1,A.add(X.g),j.bar=X}else if(O.kind==="brute"){let X=At(1.8);X.g.position.y=$l.brute+.5,A.add(X.g),j.bar=X}A.position.set(O.x,0,O.z),g.add(A),Mt.set(O.id,j);for(let X=0;X<6;X++)rt(q,re(O.x,.4,O.z),{size:1.2,life:.8,grow:1.5,a:.6,v:re((Math.random()-.5)*3,1,(Math.random()-.5)*3)})}function At(O){let b=new vt,_=new bn(new gn({color:2755848,depthTest:!1}));_.scale.set(O,.32,1);let A=new bn(new gn({color:14830122,depthTest:!1}));return A.scale.set(O,.22,1),A.center.set(0,.5),A.position.x=-O/2,b.add(_,A),b.renderOrder=10,{g:b,fg:A,w:O}}async function qt(O){let b=await h(t+"models/q/Ship_Small.glb");if(y)return;let _=b.scene.clone(!0);_.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),ut(_,O.big?9:5.5);let A=new vt;A.add(_),_.rotation.y=Math.PI/2,A.position.set(O.x,-.4,O.z),g.add(A),Ee.set(O.id,{b:O,h:A,x:O.x,z:O.z,wake:0})}let Vt=document.createElement("canvas");Vt.width=256,Vt.height=288;let gt=Vt.getContext("2d"),Oe=new wn(Vt);Oe.colorSpace=Ut;let k=new bn(new gn({map:Oe,transparent:!0,alphaTest:.1}));k.center.set(.5,.06),k.scale.set(4.4,4.4*288/256,1),k.position.set(0,qe,-3),g.add(k);let He=new ke(new Xs(.9,20),new tn({color:0,transparent:!0,opacity:.3,depthWrite:!1}));He.rotation.x=-Math.PI/2,He.position.set(0,qe+.02,-3),g.add(He);let Ce=new ke(new Oi(1.15,1.45,32),new tn({color:16764992,transparent:!0,opacity:.85,depthWrite:!1}));Ce.rotation.x=-Math.PI/2,Ce.position.set(0,qe+.04,-3),g.add(Ce);let ft=e.heroArt||null,We={name:"idle",t:0,flip:!1,lastFrame:-1};function jt(O){if(!ft)return;let b=ft.meta,_=b.animations[We.name]||b.animations.idle;We.t+=O;let A=We.name==="throw"||We.name==="attackA"?12:_.fps||8,R=_.frames[Math.floor(We.t*A)%_.frames.length],U=R*2+(We.flip?1:0);U!==We.lastFrame&&(We.lastFrame=U,gt.clearRect(0,0,256,288),gt.save(),We.flip&&(gt.translate(256,0),gt.scale(-1,1)),gt.drawImage(ft.image,R%b.columns*b.frameW,Math.floor(R/b.columns)*b.frameH,b.frameW,b.frameH,0,0,256,288),gt.restore(),Oe.needsUpdate=!0)}let Ct=null,Y={Run:0,Idle:.75,Shoot:2.7,RunShoot:.55};e.mari3d&&h(t+"models/mari.glb").then(O=>{var X;if(y)return;let b=Ci(O.scene);b.updateMatrixWorld(!0);let _=new Vn().setFromObject(b),A=_.getSize(re(0,0,0)),R=_.getCenter(re(0,0,0)),U=3.9/A.y,z=new vt,ne=new vt;b.position.set(-R.x,-_.min.y,-R.z),z.add(b),z.scale.setScalar(U),ne.add(z),b.traverse(pe=>{pe.isMesh&&(pe.frustumCulled=!1,pe.castShadow=!0,pe.material.map&&(pe.material.map.colorSpace=Ut),pe.material.roughness=.8)});let j=new di(b),L={};for(let pe of Object.keys(Y)){let pt=O.animations.find(st=>st.name===pe);pt&&(L[pe]=j.clipAction(pt)),L[pe]._n=pe}(X=L.Idle)==null||X.play(),ne.position.set(0,qe,-3),g.add(ne),k.visible=!1,Ct={holder:ne,pivot:z,mx:j,act:L,cur:"Idle",ang:Math.PI/2+.55,yaw:0,lean:0},We.mari=Ct}).catch(()=>{});function oe(O,b,_,A){let R=Ct;if(!R)return;let U=b?"Run":"Idle";if(U!==R.cur&&R.act[U]){let L=R.act[U],X=R.act[R.cur];L.reset().play(),L.timeScale=U==="Shoot"?1.8:U==="Run"?1.1:1,X&&(L.crossFadeFrom(X,.15,!1),setTimeout(()=>{R.cur!==X._n&&X.stop()},200)),L._n=U,R.cur=U}R.mx.update(O);let z=Y[R.cur]||0;R.yaw+=(z-R.yaw)*Math.min(1,O*12),R.pivot.rotation.y=R.yaw*(A?-1:1),R.lean+=((_?.1:0)-R.lean)*Math.min(1,O*18),R.pivot.rotation.x=-R.lean;let j=(A?-1:1)*(Math.PI/2+.55)-R.ang;j=((j+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,R.ang+=j*Math.min(1,O*10),R.holder.rotation.y=R.ang}let le=new Xt({color:9067054,roughness:.85}),Z=new zt(.16,qe+1.6,.16),Se=new zt(1,.1,.1);function Ue(O,b){let _=new vt;_.position.set(O,0,Math.max(1.4,b+.4));for(let R of[-.5,.5]){let U=new ke(Z,le);U.position.set(R,(qe+1.6)/2,0),U.castShadow=!0,_.add(U)}for(let R=.5;R<qe+1.4;R+=.55){let U=new ke(Se,le);U.position.set(0,R,0),_.add(U)}_.rotation.x=-.38,_.scale.y=.01,g.add(_);let A=0;return x.push(R=>{A>=1||(A=Math.min(1,A+R*4),_.scale.y=A)}),_}let Ke=new Map,ye=new Xt({color:10117682,roughness:.8}),dt=new Xt({color:2829104,metalness:.5,roughness:.45}),bt=new Xt({color:12728874,roughness:.7});function Ht(O){let b=new vt;b.position.set(O.x,qe,-1.05),g.add(b);let _=new ke(new Wt(1.7,1.8,.18,28),new Xt({color:7035464,roughness:.9}));_.position.y=.09,_.receiveShadow=!0,b.add(_);let A=new ke(new Oi(1.5,1.85,36),new tn({color:16764992,transparent:!0,opacity:.8,depthWrite:!1,side:pn}));A.rotation.x=-Math.PI/2,A.position.y=.2,b.add(A);let R=new bn(new gn({map:m(n+O.id+".webp"),transparent:!0,depthWrite:!1}));R.scale.setScalar(2.6),R.position.y=3.1,b.add(R);let{t:U,aspect:z}=vd(String(O.cost),"#ffd34a",52),ne=new bn(new gn({map:U,transparent:!0,depthWrite:!1}));ne.scale.set(1*z*.55,.55*1,1),ne.position.set(.3,1.6,0),b.add(ne);let j=new bn(new gn({map:ue,transparent:!0,depthWrite:!1}));j.scale.setScalar(.6),j.position.set(-ne.scale.x/2-.1,1.6,0),b.add(j);let L=new ke(new Oi(1.5,1.85,36,1,0,.01),new tn({color:10288992,transparent:!0,opacity:.95,depthWrite:!1,side:pn}));L.rotation.x=-Math.PI/2,L.position.y=.22,b.add(L);let X={t:O,g:b,pad:_,glow:A,icon:R,price:ne,coin:j,fill:L,machine:null,built:!1,recoil:0,fireT:0};return Ke.set(O.id,X),x.push(()=>{X.built||(R.position.y=3.1+Math.sin(p*2.4+O.x)*.18,A.material.opacity=X.afford?.55+Math.sin(p*6)*.35:.25,A.material.color.set(X.afford?10288992:16764992))}),X}function cn(O){let b=new vt,_=(A,R,U,z,ne,j=0,L=0,X=0)=>{let pe=new ke(A,R);return pe.position.set(U,z,ne),pe.rotation.set(j,L,X),pe.castShadow=!0,b.add(pe),pe};if(O==="ballista"){_(new zt(1.8,.5,1.8),ye,0,.45,0);let A=new vt;A.position.y=1.4,b.add(A),b.userData.aim=A;let R=(U,z,ne,j,L,X=0,pe=0,pt=0)=>{let st=new ke(U,z);return st.position.set(ne,j,L),st.rotation.set(X,pe,pt),st.castShadow=!0,A.add(st),st};R(new zt(.4,.35,3.4),ye,0,0,.3),R(new zt(3.6,.25,.3),ye,0,.1,1.3,0,0,0),R(new Wt(.08,.08,3.2),dt,0,.25,.6,Math.PI/2),R(new Fi(.2,.5,8),dt,0,.25,2.3,Math.PI/2),_(new Wt(.18,.18,1,8),ye,0,.9,0)}else if(O==="cauldron"){for(let[z,ne]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])_(new Wt(.09,.12,1.4,6),dt,z,.7,ne);let A=_(new ni(1.1,18,12,0,Math.PI*2,0,Math.PI*.62),dt,0,1.9,.2,Math.PI);A.scale.y=.85;let R=_(new Xs(.95,18),new tn({color:16742938}),0,2.5,.2,-Math.PI/2);b.userData.lava=R;let U=new si(16742954,8,10,1.6);U.position.set(0,2.8,.2),b.add(U),b.userData.light=U;for(let z=0;z<5;z++){let ne=new bn(new gn({map:E,transparent:!0,depthWrite:!1,blending:Rn}));ne.position.set((Math.random()-.5)*1.2,2.6,.2+(Math.random()-.5)*1.2),ne.scale.setScalar(.9),b.add(ne),x.push(()=>{let j=(p*1.4+z/5)%1;ne.position.y=2.5+j*1.6,ne.material.opacity=(1-j)*.9,ne.scale.setScalar(1.1-j*.6)})}b.rotation.y=0}else if(O==="cannon"){_(new zt(1.6,.6,2.2),bt,0,.7,0);for(let U of[-1,1])for(let z of[-.7,.7])_(new Wt(.55,.55,.25,14),ye,U*.9,.55,z,0,0,Math.PI/2);let A=new vt;A.position.set(0,1.3,0),b.add(A),b.userData.aim=A;let R=new ke(new Wt(.38,.52,2.8,16),dt);R.rotation.x=Math.PI/2-.25,R.position.z=.9,R.castShadow=!0,A.add(R);for(let U=0;U<3;U++)_(new ni(.28,10,8),dt,-1.1+U*.3,.3,-1)}else if(O==="archer"){for(let[A,R]of[[-1,-1],[1,-1],[-1,1],[1,1]])_(new zt(.3,4.4,.3),ye,A,2.2,R);_(new zt(2.6,.3,2.6),ye,0,3.6,0);for(let A of[-1.2,1.2])_(new zt(2.6,.7,.15),ye,0,4.1,A);_(new zt(.15,.7,2.6),ye,-1.2,4.1,0),_(new zt(.15,.7,2.6),ye,1.2,4.1,0),_(new Fi(2.2,1.6,4),bt,0,5.9,0,0,Math.PI/4);for(let A of[-1,1])_(new zt(.2,1.4,.2),ye,A,4.9,-1);h(t+"models/q/Characters_Henry.glb").then(A=>{if(y)return;let R=Ci(A.scene);ut(R,1.7),R.position.set(0,3.75,.3),R.traverse(j=>{j.isMesh&&(j.castShadow=!0)}),b.add(R);let U=new di(R),z=A.animations.find(j=>j.name==="Punch")||A.animations[0];U.clipAction(z).play(),b.userData.mix=U}).catch(()=>{})}return b.scale.setScalar(.001),b}function dn(O){O.built=!0,[O.icon,O.price,O.coin,O.glow,O.fill].forEach(A=>A.visible=!1);let b=cn(O.t.id);O.g.add(b),O.machine=b;let _=0;x.push(A=>{if(_>=1)return;_=Math.min(1,_+A*2.4);let R=1+Math.sin(_*Math.PI)*.35*(1-_);b.scale.setScalar(Math.max(.001,_*R))});for(let A=0;A<18;A++)rt(w,O.g.position.clone().add(re(0,1,0)),{size:.6,life:.9,add:!0,g:6,v:re((Math.random()-.5)*8,4+Math.random()*6,(Math.random()-.5)*8)});for(let A=0;A<8;A++)rt(C,O.g.position.clone().add(re((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),{size:2,life:1.2,grow:1.4,a:.5,v:re(0,1.5,0)})}function rt(O,b,_){var R;let A=new bn(new gn({map:O,transparent:!0,depthWrite:!1,blending:_.add?Rn:Di,color:_.color||16777215,fog:_.fog!==!1}));return A.position.copy(b),A.scale.setScalar(_.size||1),g.add(A),T.push({s:A,v:_.v?_.v.clone():re(0,0,0),g:_.g||0,life:_.life||1,age:0,grow:_.grow||0,size:_.size||1,a:(R=_.a)!=null?R:1,drag:_.drag||0,aspect:_.aspect||1}),A}function an(O){for(let b=T.length-1;b>=0;b--){let _=T[b];if(_.age+=O,_.age>=_.life){g.remove(_.s),_.s.material.dispose(),T.splice(b,1);continue}_.v.y-=_.g*O,_.drag&&_.v.multiplyScalar(Math.max(0,1-_.drag*O)),_.s.position.addScaledVector(_.v,O);let A=_.age/_.life,R=_.size*(1+_.grow*A);_.s.scale.set(R*_.aspect,R,1),_.s.material.opacity=_.a*(1-A*A)*Math.min(1,_.age*14)}}function S(O,b=3){rt(N,O.clone().add(re(0,1,0)),{size:b*2.2,life:.35,add:!0,grow:.5,fog:!1});for(let _=0;_<14;_++)rt(E,O.clone().add(re(0,.6,0)),{size:.7,life:.6,add:!0,g:10,v:re((Math.random()-.5)*12,6+Math.random()*8,(Math.random()-.5)*12)});for(let _=0;_<8;_++)rt(C,O.clone().add(re((Math.random()-.5)*b,.5,(Math.random()-.5)*b)),{size:2.4,life:1.6,grow:1.6,a:.55,v:re(0,2,0),drag:.5});f=Math.min(1,f+.35)}function G(O,b){rt(D,O,{size:.7,life:.09,add:!0,grow:.4,color:16773840});for(let _=0;_<7;_++)rt(D,O,{size:.16+Math.random()*.1,life:.22+Math.random()*.12,add:!0,g:9,a:.9,v:re(b*(3+Math.random()*6)+(Math.random()-.5)*2,1+Math.random()*3,(Math.random()-.3)*5),color:16764810});for(let _=0;_<4;_++)rt(C,O,{size:.45,life:.7+Math.random()*.3,grow:2,a:.4,drag:1.5,v:re(b*(1+Math.random()*2),.8+Math.random(),(Math.random()-.3)*1.5)})}function V(O,b){rt(D,O,{size:b?1.3:.8,life:.1,add:!0,grow:.5,color:16777215});for(let _=0;_<(b?12:7);_++)rt(D,O,{size:.2+Math.random()*.14,life:.28+Math.random()*.2,add:!0,g:12,a:.95,v:re((Math.random()-.5)*9,2+Math.random()*5,(Math.random()-.5)*8),color:_%3?16751184:16771504});for(let _=0;_<(b?5:2);_++)rt(q,O,{size:b?1.6:1,life:.55,grow:1.3,a:.5,v:re((Math.random()-.5)*3,1+Math.random()*1.5,(Math.random()-.5)*3)})}function te(O,b){return rt(ce,O,{size:b*.4,life:.45,add:!0,grow:4,a:.7,fog:!1})}function ee(O,b,_){let A=re(O,1.4,b);for(let z=0;z<Math.min(5,_);z++)rt(ue,A,{size:.7,life:.9,g:16,v:re((Math.random()-.5)*4,8+Math.random()*3,(Math.random()-.5)*2)});let{t:R,aspect:U}=vd("+"+_,"#ffe066",56);rt(R,A.clone().add(re(0,1.4,0)),{size:.9,aspect:U,life:1,v:re(0,3,0),fog:!1})}let W={bullet:new gn({map:D,color:16777215,blending:Rn,transparent:!0,depthWrite:!1}),bubble:new gn({map:ws([[0,"rgba(220,250,255,.2)"],[.75,"rgba(160,230,255,.6)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1})};function Ie(O){var R;let b,_=O.kind;if(_==="ball")b=new ke(new ni(.42,12,8),dt);else if(_==="arrow"||_==="knife"||_==="harpoon"){b=new vt;let U=_==="harpoon"?2.2:_==="arrow"?1.3:.8,z=new ke(new Wt(.05,.05,U,5),_==="knife"?new Xt({color:14212580,metalness:.8,roughness:.2}):ye);z.rotation.x=Math.PI/2,b.add(z);let ne=new ke(new Fi(.1,.3,6),dt);ne.rotation.x=Math.PI/2,ne.position.z=U/2,b.add(ne)}else if(_==="bolt"){b=new vt;let U=new ke(new Wt(.09,.09,3,6),ye);U.rotation.x=Math.PI/2,b.add(U)}else b=new bn(W[_]||W.bullet),b.scale.setScalar(_==="bubble"?.9:.55);(_==="shot"||_==="bullet")&&(b=new bn(W.bullet),b.scale.setScalar(.34)),b.castShadow=!0,g.add(b);let A={sh:O,o:b,t:0,prev:re(O.x0,(R=O.y0)!=null?R:3.8,O.z0)};return Gt.set(O.id,A),A}function Ne(O){var b;for(let[_,A]of Gt){let R=A.sh;A.t+=O;let U=Math.min(1,A.t/R.dur),z=((b=R.y0)!=null?b:3.8)+1.5,ne=1.4,j=Wr(R.x0,R.tx,U),L=Wr(R.z0,R.tz,U),X=Wr(z,ne,U)+(R.arc||0)*4*U*(1-U),pe=re(j,X,L);A.o.isSprite||A.o.lookAt(pe.clone().add(pe.clone().sub(A.prev))),A.o.position.copy(pe),A.prev.copy(pe),R.kind==="ball"&&Math.random()<.5?rt(C,pe,{size:.8,life:.5,grow:1,a:.35}):(R.kind==="shot"||R.kind==="bullet")&&U<1&&(rt(D,pe,{size:.26,life:.16,add:!0,grow:-.6,a:.8,color:16767392}),Math.random()<.3&&rt(C,pe,{size:.35,life:.45,grow:1.2,a:.18})),U>=1&&A.t>R.dur+.02&&(g.remove(A.o),Gt.delete(_))}}function Je(O,b,_){let A=Ke.get("ballista");if(!A)return;let R=A.g.position.clone().add(re(0,1.6,1.5)),U=re(b,1.2,_),z=new vt,ne=new ke(new Wt(.1,.1,3.2,6),ye);ne.rotation.x=Math.PI/2,z.add(ne);let j=new ke(new Fi(.2,.55,8),dt);j.rotation.x=Math.PI/2,j.position.z=1.8,z.add(j),z.position.copy(R),z.lookAt(U),g.add(z);let L=0,X=R.distanceTo(U)/70;x.push(pe=>{if(!(L>=1)&&(L=Math.min(1,L+pe/X),z.position.lerpVectors(R,U,L),Math.random()<.6&&rt(q,z.position.clone(),{size:.5,life:.3,a:.5}),L>=1)){g.remove(z);for(let pt=0;pt<5;pt++)rt(q,U,{size:1,life:.6,grow:1,a:.6,v:re((Math.random()-.5)*3,2,(Math.random()-.5)*3)})}})}function xt(O){for(let b=0;b<26;b++){let _=re(O+(Math.random()-.5)*2,qe+1.8,.8);rt(E,_,{size:1+Math.random(),life:.9+Math.random()*.4,add:!0,g:14,v:re((Math.random()-.5)*12,2+Math.random()*3,2+Math.random()*4)})}setTimeout(()=>{if(!y){for(let b=0;b<16;b++)rt(E,re(O+(Math.random()-.5)*13,.5,1+Math.random()*5),{size:1.6+Math.random(),life:1.2,add:!0,grow:.4,v:re(0,2.5+Math.random()*2,0)});for(let b=0;b<6;b++)rt(C,re(O+(Math.random()-.5)*12,1,2+Math.random()*4),{size:3,life:1.8,grow:1.4,a:.5,v:re(0,2,0),color:6969936})}},280)}let _t={x:0,shakeX:0};function $e(){let O=s.clientWidth||innerWidth,b=s.clientHeight||innerHeight;a.setSize(O,b,!1),c.aspect=O/b,c.updateProjectionMatrix(),c.fov=c.aspect<1.4?56:44,c.updateProjectionMatrix()}$e(),addEventListener("resize",$e);let Ot=0,hn=0,sn=null,on=!0;function Pt(O,b,_){var ne;if(y)return;sn=O,on=hn<=0;for(let j of b)if(j.type==="boat"){let L=O.boats.find(X=>X.id===j.id);L&&qt(L)}else if(j.type==="spawn"){let L=O.enemies.find(X=>X.id===j.id);L&&it(L)}else if(j.type==="shot"){let L=O.shots.find(X=>X.id===j.id);L&&Ie(L)}else if(j.type==="fire"){hn=.28;let L=O.w.shot==="knife"||O.w.shot==="harpoon"||ft!=null&&ft.meta.animations.throw?"throw":"attackA";(We.name!==L||on)&&(We.name=L,We.t=0),G(re(O.heroX+(We.flip?-1.5:1.5),qe+2.5,-3.1),We.flip?1:-1)}else if(j.type==="kill"){let L=Mt.get(j.id);L&&(L.dead=.001,L.play(L.troll?"idle":"Death",1,!0)),ee(j.x,j.z,j.coins)}else if(j.type==="hit"){let L=Mt.get(j.id);L&&(L.flash=.14,V(re(L.x,L.troll?3:1.5,L.z-.4),L.troll),L.troll&&(L.kick=.18))}else if(j.type==="impact")j.kind!=="ball"&&V(re(j.x,1.2,j.z),!1);else if(j.type==="boom")S(re(j.x,0,j.z),j.r);else if(j.type==="build"){let L=Ke.get(j.id);L&&dn(L)}else if(j.type==="tower"){let L=Ke.get(j.id);if(!(L!=null&&L.machine))continue;if(L.recoil=.25,j.id==="ballista")Je(j.x,j.tx,j.tz);else if(j.id==="cauldron")xt(j.x);else if(j.id==="cannon"){let X=L.g.position.clone().add(re(0,1.6,2.4));rt(N,X,{size:2.4,life:.2,add:!0});for(let pe=0;pe<5;pe++)rt(C,X,{size:1.6,life:1,grow:1.4,a:.6,v:re((Math.random()-.5)*2,1.5,3)});f=Math.min(1,f+.12)}}else if(j.type==="gate"){f=Math.min(1,f+.08);for(let L=0;L<3;L++)rt(q,re((Math.random()-.5)*40,1,1),{size:1,life:.6,a:.5,v:re(0,1.5,1)})}else if(j.type==="land"){let L=Ee.get(j.id);if(L)for(let X=0;X<12;X++)rt(C,re(L.x,.2,L.z-2),{size:1.6,life:1,grow:1,a:.5,color:15267071,v:re((Math.random()-.5)*5,2+Math.random()*2,(Math.random()-.5)*3)})}else if(j.type==="bossLand"){let L=O.enemies.find(X=>X.id===j.id);if(L){te(re(L.x,.3,L.z),8);for(let X=0;X<10;X++)rt(q,re(L.x+(Math.random()-.5)*5,.5,L.z+(Math.random()-.5)*3),{size:3,life:1,grow:1.4,a:.6,v:re((Math.random()-.5)*5,1.5,(Math.random()-.5)*5)});f=Math.min(1,f+.3)}}else if(j.type==="bossDown")S(re(j.x,0,j.z),6),f=1;else if(j.type==="reach"){let L=Mt.get(j.id);L&&(L.play(L.troll?"walk":"Sword",1.1),L.troll||(L.ladder=Ue(L.e.x,L.e.z),L.climb=0))}for(let[j,L]of Ee){let X=O.boats.find(pe=>pe.id===j);if(!X){L.sink=(L.sink||0)+_,L.h.position.y-=_*.6,L.h.rotation.z+=_*.05,L.sink>4&&(g.remove(L.h),Ee.delete(j));continue}L.x=X.x,L.z=X.z,L.h.position.set(X.x,-.4+Math.sin(p*2+j)*.15,X.z),L.h.rotation.z=Math.sin(p*1.6+j)*.04,!X.landed&&Math.random()<.5&&rt(C,re(X.x+(Math.random()-.5)*2,.1,X.z+3),{size:1.4,life:1.2,grow:1.2,a:.45,color:16777215,v:re((Math.random()-.5)*2,.5,2)})}for(let[j,L]of Mt){let X=O.enemies.find(Dt=>Dt.id===j);if(L.dead||!X){L.dead+=_,L.holder.position.y>0&&L.dead<1.6&&(L.fallV=(L.fallV||0)+26*_,L.holder.position.y=Math.max(0,L.holder.position.y-L.fallV*_),L.holder.position.z+=_*3),L.ladder&&L.dead>.3&&(L.ladder.rotation.x=Math.min(1.45,L.ladder.rotation.x+_*2.2),L.dead>2.6&&(g.remove(L.ladder),L.ladder=null)),L.dead>(L.troll?2.5:1.6)&&(L.holder.position.y-=_*1.6,L.m.traverse(Dt=>{Dt.isMesh&&(Dt.material.transparent=!0,Dt.material.opacity=Math.max(0,1-(L.dead-1.6)))})),L.troll&&L.dead<2&&(L.holder.rotation.x=Math.min(1.4,L.dead*.9)),L.dead>3.2&&(g.remove(L.holder),L.ladder&&g.remove(L.ladder),Mt.delete(j)),L.mix.update(_);continue}if(X.delay>0){L.holder.visible=!1;continue}L.holder.visible=!0;let pe=X.x-L.x,pt=X.z-L.z;if(Math.abs(pe)+Math.abs(pt)>.001?L.holder.rotation.y=Math.atan2(pe,pt):X.atWall&&(L.holder.rotation.y=Math.PI),L.x=X.x,L.z=X.z,L.holder.position.set(X.x,0,X.z),L.ladder){L.climb=Math.min(1,L.climb+_/1.5);let Dt=L.climb;L.holder.position.set(X.x,Dt*(qe-1.5),Wr(X.z,.9,Dt)),L.holder.rotation.y=Math.PI}if(X.kind==="boss"&&!X.atWall&&Math.random()<.08&&(f=Math.min(1,f+.05),rt(q,re(X.x+(Math.random()-.5)*3,.3,X.z),{size:2,life:1,grow:1,a:.5})),L.bar){let Dt=Math.max(0,X.hp/X.maxHp);L.bar.fg.scale.x=L.bar.w*Dt,L.bar.g.quaternion.copy(c.quaternion),L.bar.g.quaternion.premultiply(L.holder.quaternion.clone().invert())}L.flash=Math.max(0,(L.flash||0)-_);let st=L.flash>0?.9:0,fn=X.burn>0?.35+Math.sin(p*20)*.15:0;if(L.m.traverse(Dt=>{Dt.isMesh&&Dt.material.emissive&&Dt.material.emissive.setRGB(st+fn,st*.4+fn*.35,st*.3)}),X.burn>0&&Math.random()<.3&&rt(E,re(X.x,1+Math.random()*1.5,X.z),{size:.8,life:.5,add:!0,v:re(0,2,0)}),X.kind==="boss"&&L.troll&&X.atWall){L.atk=(L.atk||0)+_;let Dt=1.25,Kt=L.atk%Dt/Dt;L.holder.rotation.y=Math.PI;let Pn=Kt<.45?-.2*Math.sin(Kt/.45*Math.PI/2):Kt<.56?-.2+.6*((Kt-.45)/.11):.4*(1-(Kt-.56)/.44);if(L.m.rotation.x=Pn,L.m.position.y=Kt<.45?.2*Math.sin(Kt/.45*Math.PI/2):Kt<.56?.2*(1-(Kt-.45)/.11):0,Kt>=.56&&!L.slammed){L.slammed=!0;let Re=re(X.x,2.4,1.2);V(Re,!0),te(re(X.x,.4,1.4),9),f=Math.min(1,f+.22);for(let je=0;je<6;je++)rt(q,re(X.x+(Math.random()-.5)*5,.6,1),{size:2.2,life:.9,grow:1.3,a:.6,v:re((Math.random()-.5)*6,2,-1-Math.random()*3)})}Kt<.56&&(L.slammed=!1)}else L.m.rotation.x&&(L.m.rotation.x=0,L.m.position.y=0),L.kick>0&&(L.kick-=_,L.holder.position.z-=Math.sin(L.kick/.18*Math.PI)*.35),L.mix.update(_*(X.kind==="boss"&&!L.troll?.6:1))}Ne(_);let A=(O.heroX-Ot)/Math.max(_,.001);Ot=O.heroX,hn-=_;let R=O.aim&&O.enemies.find(j=>j.id===O.aim);R?R.x<O.heroX-1.2?We.flip=!0:R.x>O.heroX+1.2&&(We.flip=!1):Math.abs(A)>.5&&(We.flip=A<0);let U=hn>0?We.name:Math.abs(A)>.5?"run":"idle";U!==We.name&&(We.name=U,We.t=0),k.position.x=O.heroX,He.position.x=Ce.position.x=O.heroX,Ce.material.opacity=.6+Math.sin(p*5)*.25,jt(_),Ct&&(Ct.holder.position.x=O.heroX,Ct.sp=(Ct.sp||0)+(Math.abs(A)-(Ct.sp||0))*Math.min(1,_*8),Ct.mv=Ct.mv?Ct.sp>.35:Ct.sp>1.2,oe(_,Ct.mv,hn>0,We.flip));for(let j of O.towers){let L=Ke.get(j.id)||Ht(j);if(j.built&&!L.built&&dn(L),L.afford=!j.built&&O.coins>=j.cost,!L.built){let X=Math.min(1,j.hold/.55);L.fill.geometry.dispose(),L.fill.geometry=new Oi(1.5,1.85,36,1,Math.PI/2,Math.max(.01,X*Math.PI*2))}if(L.machine){L.recoil=Math.max(0,L.recoil-_);let X=L.machine.userData.aim;if(X){let pe=O.enemies.filter(pt=>pt.state!=="dead"&&pt.delay<=0).sort((pt,st)=>Math.hypot(pt.x-j.x,pt.z)-Math.hypot(st.x-j.x,st.z))[0];pe&&(X.rotation.y=Wr(X.rotation.y,Math.atan2(pe.x-j.x,pe.z+2),.15)),X.position.z=-L.recoil*1.2}(ne=L.machine.userData.mix)==null||ne.update(_)}}let z=1-O.gate/O.gateMax;et.material.opacity=Math.min(.95,z*1.3),Me.color.setRGB(.48-z*.2,.29-z*.14,.15-z*.07)}function It(O){if(y||v)return;p+=O;for(let U of x)U(O,p);an(O);let b=sn?sn.heroX:0;_t.x=Wr(_t.x,-b*.45,Math.min(1,O*3)),f=Math.max(0,f-O*2.2);let _=c.aspect<1.4,A=(Math.random()-.5)*f*.8,R=(Math.random()-.5)*f*.6;_?(c.position.set(_t.x*.5+A,21+R,-30),c.lookAt(_t.x*.5,0,34)):(c.position.set(_t.x+A,13.5+R,-22),c.lookAt(_t.x,0,32)),a.render(o,c)}return Qe(),{canvas:r,update:Pt,render:It,resize:$e,setHeroArt(O){ft=O,We.lastFrame=-1},project(O,b,_){let A=g.localToWorld(re(O,b,_)).project(c),R=r.getBoundingClientRect();return{x:R.left+(A.x+1)/2*R.width,y:R.top+(1-A.y)/2*R.height,on:A.z<1}},pause(O=!0){v=O},ready:Promise.all([wt,h(t+"models/q/Characters_Skeleton.glb"),h(t+"models/q/Characters_Sharky.glb"),h(t+"models/q/Characters_Captain_Barbarossa.glb"),h(t+"models/q/Ship_Small.glb")]).then(()=>!0),sample(){let O=a.getContext(),b=O.drawingBufferWidth,_=O.drawingBufferHeight,A=new Uint8Array(4*64);a.render(o,c);let R=0;for(let U=0;U<8;U++)O.readPixels(Math.floor(b*(U+.5)/8),Math.floor(_*.5),1,1,O.RGBA,O.UNSIGNED_BYTE,A.subarray(U*4));for(let U=0;U<32;U++)R+=A[U];return{mean:R/32,calls:a.info.render.calls,enemies:Mt.size}},dispose(){var O;y=!0,removeEventListener("resize",$e),o.traverse(b=>{var A;b.geometry&&b.geometry.dispose();let _=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(let R of _)(A=R.map)==null||A.dispose(),R.dispose()}),a.dispose(),(O=a.forceContextLoss)==null||O.call(a),r.remove()}}}window.PirateBastion3D={create:ux,version:1};var Cn=Math.PI*2,yd=(s,e,t)=>Math.max(e,Math.min(t,s)),dx=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function zi(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Wn(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Tn(s,e=1,t=1,n=!0){let i=new wn(s);return n&&(i.colorSpace=Ut),i.wrapS=i.wrapT=Gn,i.repeat.set(e,t),i.anisotropy=4,i}function Ma(s,e,t,n,i,r,a=40){for(let o=0;o<a;o++){let c=n()*t;s.strokeStyle=`rgba(${r},${(.05+n()*.12).toFixed(3)})`,s.lineWidth=.6+n()*1.6,s.beginPath();for(let l=0;l<=e;l+=8){let u=c+Math.sin(l*.012+o)*3+Math.sin(l*.05+o*3)*1.2;l?s.lineTo(l,u):s.moveTo(l,u)}s.stroke()}for(let o=0;o<2;o++){let c=n()*e,l=n()*t,u=s.createRadialGradient(c,l,1,c,l,10+n()*10);u.addColorStop(0,`rgba(${r},.55)`),u.addColorStop(1,`rgba(${r},0)`),s.fillStyle=u,s.fillRect(c-22,l-22,44,44)}}function Md(s,e){let[t,n]=Wn(1024,1024),i=zi(s),r=1024/8;for(let a=0;a<8;a++){let o=-i()*400;for(;o<1024;){let l=380+i()*420,u=.82+i()*.3,h=e.map(d=>Math.round(d*u));n.fillStyle=`rgb(${h})`,n.fillRect(o,a*r,l,r),n.save(),n.beginPath(),n.rect(o,a*r,l,r),n.clip(),n.translate(o,a*r),Ma(n,l,r,i,h,"30,16,6",18),n.restore(),n.fillStyle="rgba(20,10,4,.75)",n.fillRect(o,a*r,3,r);for(let d of[r*.22,r*.78])n.fillStyle="rgba(25,20,18,.9)",n.beginPath(),n.arc(o+12,a*r+d,3,0,Cn),n.arc(o+l-12,a*r+d,3,0,Cn),n.fill();o+=l}n.fillStyle="rgba(15,8,3,.85)",n.fillRect(0,a*r,1024,4);let c=n.createLinearGradient(0,a*r,0,a*r+r);c.addColorStop(0,"rgba(255,220,170,.06)"),c.addColorStop(1,"rgba(0,0,0,.14)"),n.fillStyle=c,n.fillRect(0,a*r,1024,r)}return t}function eh(s){let[e,t]=Wn(512,1024),n=zi(s),i=6,r=512/i;for(let o=0;o<i;o++){let c=.78+n()*.3,l=[96,58,32].map(h=>Math.round(h*c));t.fillStyle=`rgb(${l})`,t.fillRect(o*r,0,r,1024),t.save(),t.translate(o*r+r,0),t.rotate(Math.PI/2),Ma(t,1024,r,n,l,"25,12,5",14),t.restore(),t.fillStyle="rgba(12,6,2,.8)",t.fillRect(o*r,0,3,1024);let u=t.createLinearGradient(o*r,0,o*r+r,0);u.addColorStop(0,"rgba(255,210,150,.05)"),u.addColorStop(1,"rgba(0,0,0,.18)"),t.fillStyle=u,t.fillRect(o*r,0,r,1024)}let a=t.createLinearGradient(0,0,0,1024);return a.addColorStop(0,"rgba(10,5,2,.55)"),a.addColorStop(.35,"rgba(10,5,2,0)"),t.fillStyle=a,t.fillRect(0,0,512,1024),e}function fx(s){let[e,t]=Wn(512,512),n=zi(s);t.fillStyle="#2a2420",t.fillRect(0,0,512,512);for(let i=0,r=0;r<512;i++){let a=46+n()*26,o=i%2?-30:0;for(;o<512;){let c=60+n()*60,l=.65+n()*.45,u=[118,104,92].map(d=>Math.round(d*l));t.fillStyle=`rgb(${u})`,t.beginPath(),t.roundRect(o+3,r+3,c-6,a-6,9),t.fill();let h=t.createLinearGradient(0,r,0,r+a);h.addColorStop(0,"rgba(255,240,220,.12)"),h.addColorStop(1,"rgba(0,0,0,.3)"),t.fillStyle=h,t.fill(),o+=c}r+=a}return e}function Ed(s,e=[120,72,38]){let[t,n]=Wn(512,256),i=zi(s),r=14,a=512/r;for(let c=0;c<r;c++){let l=.8+i()*.28,u=e.map(h=>Math.round(h*l));n.fillStyle=`rgb(${u})`,n.fillRect(c*a,0,a,256),n.save(),n.translate(c*a+a,0),n.rotate(Math.PI/2),Ma(n,256,a,i,u,"28,14,5",6),n.restore(),n.fillStyle="rgba(15,8,3,.7)",n.fillRect(c*a,0,2,256)}let o=n.createLinearGradient(0,0,0,256);return o.addColorStop(0,"rgba(0,0,0,.25)"),o.addColorStop(.5,"rgba(255,220,170,.06)"),o.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=o,n.fillRect(0,0,512,256),t}function th(s,e){let[t,n]=Wn(512,384),i=zi(s),r=n.createRadialGradient(256,192,40,256,192,300);r.addColorStop(0,"#ecd7a4"),r.addColorStop(.7,"#d2b077"),r.addColorStop(1,"#8a6232"),n.fillStyle=r,n.fillRect(0,0,512,384);for(let u=0;u<260;u++)n.fillStyle=`rgba(110,70,30,${(i()*.08).toFixed(3)})`,n.fillRect(i()*512,i()*384,2+i()*8,1+i()*3);n.strokeStyle="rgba(90,60,30,.25)",n.lineWidth=1;for(let u=1;u<8;u++)n.beginPath(),n.moveTo(u*64,0),n.lineTo(u*64,384),n.stroke();for(let u=1;u<6;u++)n.beginPath(),n.moveTo(0,u*64),n.lineTo(512,u*64),n.stroke();let a=[];for(let u=0;u<4;u++){let h=70+i()*370,d=60+i()*260,m=22+i()*46;a.push([h,d]),n.beginPath();for(let g=0;g<=40;g++){let x=g/40*Cn,p=m*(.7+.3*Math.sin(x*3+u)+.15*Math.sin(x*7+u*2)),f=h+Math.cos(x)*p*1.3,y=d+Math.sin(x)*p;g?n.lineTo(f,y):n.moveTo(f,y)}n.closePath(),n.fillStyle="rgba(150,120,60,.55)",n.fill(),n.strokeStyle="#5a3a1a",n.lineWidth=2.4,n.stroke(),n.strokeStyle="rgba(70,90,110,.35)",n.lineWidth=1;for(let g=1;g<3;g++)n.beginPath(),n.ellipse(h,d,m*1.3+g*8,m+g*8,0,0,Cn),n.stroke();n.fillStyle="rgba(60,90,40,.6)";for(let g=0;g<5;g++)n.beginPath(),n.arc(h+(i()-.5)*m,d+(i()-.5)*m*.6,3,0,Cn),n.fill()}n.setLineDash([7,7]),n.strokeStyle="#8a1e14",n.lineWidth=2.5,n.beginPath(),a.forEach(([u,h],d)=>d?n.quadraticCurveTo((u+a[d-1][0])/2+30,(h+a[d-1][1])/2-40,u,h):n.moveTo(u,h)),n.stroke(),n.setLineDash([]);let[o,c]=a[a.length-1];n.strokeStyle="#a0170e",n.lineWidth=5,n.beginPath(),n.moveTo(o-10,c-10),n.lineTo(o+10,c+10),n.moveTo(o+10,c-10),n.lineTo(o-10,c+10),n.stroke(),n.save(),n.translate(440,320),n.fillStyle="#5a3a1a";for(let u=0;u<8;u++)n.rotate(Cn/8),n.beginPath(),n.moveTo(0,-(u%2?18:34)),n.lineTo(5,0),n.lineTo(-5,0),n.closePath(),n.fill();n.beginPath(),n.arc(0,0,6,0,Cn),n.fillStyle="#d9b97a",n.fill(),n.restore(),n.fillStyle="#4b2e12",n.font="italic bold 26px Georgia,serif",n.textAlign="center",n.fillText(e,256,34);let l=n.createRadialGradient(256,192,170,256,192,330);return l.addColorStop(0,"rgba(60,30,10,0)"),l.addColorStop(1,"rgba(50,25,8,.85)"),n.fillStyle=l,n.fillRect(0,0,512,384),t}function px(s){let[e,t]=Wn(1024,256),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#5b3518"),n.addColorStop(1,"#2e180a"),t.fillStyle=n,t.beginPath(),t.roundRect(8,8,1008,240,40),t.fill(),t.lineWidth=10,t.strokeStyle="#c9963f",t.stroke(),t.font="bold 116px Georgia,serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#1b0d04",t.fillText(s,516,136);let i=t.createLinearGradient(0,70,0,190);return i.addColorStop(0,"#fff0b8"),i.addColorStop(1,"#d69a35"),t.fillStyle=i,t.fillText(s,512,130),e}function nh(s){let[e,t]=Wn(512,512);if(s==="checkers"){for(let n=0;n<8;n++)for(let i=0;i<8;i++)t.fillStyle=(n+i)%2?"#3a2412":"#d9b77c",t.fillRect(16+n*60,16+i*60,60,60);t.lineWidth=16,t.strokeStyle="#5a3418",t.strokeRect(8,8,496,496)}else if(s==="xo"){let n=zi(7);t.fillStyle="#8a5a2e",t.fillRect(0,0,512,512),Ma(t,512,512,n,[138,90,46],"40,20,6",30),t.strokeStyle="rgba(25,12,4,.85)",t.lineWidth=12,t.lineCap="round";for(let a of[190,322])t.beginPath(),t.moveTo(a,70),t.lineTo(a,442),t.stroke(),t.beginPath(),t.moveTo(70,a),t.lineTo(442,a),t.stroke();t.strokeStyle="rgba(245,240,225,.92)",t.lineWidth=11;let i=(a,o)=>{t.beginPath(),t.moveTo(a-38,o-38),t.lineTo(a+38,o+38),t.moveTo(a+38,o-38),t.lineTo(a-38,o+38),t.stroke()},r=(a,o)=>{t.beginPath(),t.arc(a,o,40,0,Cn),t.stroke()};i(124,124),r(256,256),i(388,124),r(124,388)}else if(s==="target"){let n=zi(3);t.fillStyle="#7a4a22",t.beginPath(),t.arc(256,256,250,0,Cn),t.fill(),Ma(t,512,512,n,[122,74,34],"30,14,4",40),["#e8d9b0","#9a1c14","#e8d9b0","#9a1c14","#e8d9b0","#1e1410"].forEach((r,a)=>{t.globalAlpha=.82,t.fillStyle=r,t.beginPath(),t.arc(256,256,210-a*36,0,Cn),t.fill()}),t.globalAlpha=1,t.strokeStyle="rgba(20,10,4,.6)",t.lineWidth=3;for(let r=0;r<14;r++)t.beginPath(),t.arc(256,256,30+r*16+n()*4,n()*Cn,n()*Cn),t.stroke();t.lineWidth=12,t.strokeStyle="#3b2a1c",t.beginPath(),t.arc(256,256,244,0,Cn),t.stroke()}return e}function mx(s){let[e,t]=Wn(128,128);t.fillStyle="#f2e8d2",t.beginPath(),t.roundRect(2,2,124,124,22),t.fill(),t.fillStyle="#2a1408";let n={1:[[64,64]],2:[[34,34],[94,94]],3:[[34,34],[64,64],[94,94]],4:[[34,34],[94,34],[34,94],[94,94]],5:[[34,34],[94,34],[64,64],[34,94],[94,94]],6:[[34,30],[94,30],[34,64],[94,64],[34,98],[94,98]]};for(let[i,r]of n[s])t.beginPath(),t.arc(i,r,11,0,Cn),t.fill();return e}function gx(){let[s,e]=Wn(512,320);e.fillStyle="#121214",e.fillRect(0,0,512,320);let t=zi(9);for(let n=0;n<300;n++)e.fillStyle=`rgba(255,255,255,${(t()*.04).toFixed(3)})`,e.fillRect(t()*512,t()*320,3,1);e.fillStyle="#ece4d0",e.beginPath(),e.ellipse(256,130,62,66,0,0,Cn),e.fill(),e.beginPath(),e.roundRect(214,160,84,50,14),e.fill(),e.fillStyle="#121214",e.beginPath(),e.ellipse(232,136,17,20,0,0,Cn),e.ellipse(280,136,17,20,0,0,Cn),e.fill(),e.beginPath(),e.moveTo(256,160),e.lineTo(247,178),e.lineTo(265,178),e.fill();for(let n=0;n<4;n++)e.fillRect(226+n*18,190,6,18);return e.strokeStyle="#ece4d0",e.lineWidth=22,e.lineCap="round",e.beginPath(),e.moveTo(150,220),e.lineTo(362,296),e.moveTo(362,220),e.lineTo(150,296),e.stroke(),s}function bx(){let[s,e]=Wn(512,640),t=e.createLinearGradient(0,0,0,640);t.addColorStop(0,"#0b1a35"),t.addColorStop(.55,"#1d3d66"),t.addColorStop(.56,"#183552"),t.addColorStop(1,"#081626"),e.fillStyle=t,e.fillRect(0,0,512,640);let n=zi(21);for(let r=0;r<120;r++)e.fillStyle=`rgba(255,255,240,${(.3+n()*.7).toFixed(2)})`,e.fillRect(n()*512,n()*330,1.6,1.6);let i=e.createRadialGradient(360,150,10,360,150,140);i.addColorStop(0,"rgba(230,240,255,.9)"),i.addColorStop(.25,"rgba(160,200,255,.35)"),i.addColorStop(1,"rgba(100,150,220,0)"),e.fillStyle=i,e.fillRect(200,0,312,320),e.fillStyle="#f4f6ff",e.beginPath(),e.arc(360,150,30,0,Cn),e.fill();for(let r=0;r<70;r++){let a=360+n()*270,o=20+n()*80;e.fillStyle=`rgba(200,225,255,${(.15+n()*.35).toFixed(2)})`,e.fillRect(330+(n()-.5)*140*(1+(a-360)/200),a,o*.5,1.5)}e.fillStyle="#060c16",e.beginPath(),e.moveTo(60,360),e.lineTo(210,360),e.lineTo(190,385),e.lineTo(80,385),e.closePath(),e.fill(),e.fillRect(130,230,4,130),e.fillRect(95,260,4,100),e.beginPath(),e.moveTo(134,236),e.quadraticCurveTo(175,280,136,330),e.closePath(),e.fill(),e.beginPath(),e.moveTo(99,266),e.quadraticCurveTo(130,300,101,340),e.closePath(),e.fill(),e.fillStyle="#ffc56a";for(let r=0;r<4;r++)e.fillRect(100+r*22,368,6,5);return s}function ih(s="rgba(255,214,140,1)",e="rgba(255,150,60,.35)"){let[t,n]=Wn(128,128),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,s),i.addColorStop(.25,e),i.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=i,n.fillRect(0,0,128,128),t}function xx(){let[s,e]=Wn(64,128),t=e.createRadialGradient(32,92,2,32,80,60);return t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.25,"rgba(255,210,90,.95)"),t.addColorStop(.6,"rgba(255,110,20,.55)"),t.addColorStop(1,"rgba(200,40,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,4),e.bezierCurveTo(54,50,60,90,32,124),e.bezierCurveTo(4,90,10,50,32,4),e.fill(),s}function _x(){let[s,e]=Wn(128,128),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.62)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),s}function vx(){let[s,e]=Wn(64,256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(170,200,255,.5)"),t.addColorStop(1,"rgba(170,200,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=n,e.fillRect(0,0,64,256),s}function yx(){let[s,e]=Wn(256,256);e.strokeStyle="rgba(255,214,120,1)",e.lineWidth=10,e.beginPath(),e.arc(128,128,100,0,Cn),e.stroke();let t=e.createRadialGradient(128,128,60,128,128,126);return t.addColorStop(0,"rgba(255,200,90,0)"),t.addColorStop(.75,"rgba(255,200,90,.35)"),t.addColorStop(1,"rgba(255,200,90,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),s}async function Sd(s,e={}){let t=e.base||"tavern/",n=e.lang||"en",i=!!e.reducedMotion,r=()=>Math.max(1,s.clientWidth),a=()=>Math.max(1,s.clientHeight),o=new hi({antialias:(devicePixelRatio||1)<2.5,powerPreference:"high-performance",alpha:!1});o.debug.checkShaderErrors=!1,o.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),o.setSize(r(),a()),o.outputColorSpace=Ut,o.toneMapping=Ri,o.toneMappingExposure=1.02,o.domElement.className="tv-canvas",s.append(o.domElement);let c=new ui;c.background=new Fe("#120a05"),c.fog=new Ni("#1a0e06",11,24);let l=new _n(48,r()/a(),.1,60),u=new Set,h=I=>(u.add(I),I),d=I=>h(new Xt(I)),m=(I,K,Q=0,se=0,de=0,xe=c)=>{let Xe=new ke(h(I),K);return Xe.position.set(Q,se,de),xe.add(Xe),Xe},g=(I,K,Q,se,de,xe,Xe,we)=>m(new zt(I,K,Q),se,de,xe,Xe,we),x=(I,K,Q,se,de,xe,Xe,we,ot=16)=>m(new Wt(I,K,Q,ot),se,de,xe,Xe,we),p={floor:h(Tn(Md(11,[112,70,40]),2.2,1.6)),wall:h(Tn(eh(5),3,1)),wallSide:h(Tn(eh(8),3.6,1)),stone:h(Tn(fx(4),1.4,1.4)),stave:h(Tn(Ed(2))),staveDark:h(Tn(Ed(6,[86,52,28]))),top:h(Tn(Md(17,[110,66,34]),.7,.7)),counter:h(Tn(eh(13),4,.5))},f={floor:d({map:p.floor,roughness:.82,metalness:0}),wall:d({map:p.wall,roughness:.9}),wallSide:d({map:p.wallSide,roughness:.9}),beam:d({color:"#3b2210",roughness:.85,map:p.staveDark}),dark:d({color:"#24140a",roughness:.9}),wood:d({color:"#7a4a26",roughness:.75,map:p.stave}),top:d({map:p.top,roughness:.55,color:"#c08a58"}),counter:d({map:p.counter,roughness:.7,color:"#b07848"}),counterTop:d({color:"#4a2812",roughness:.35,metalness:.05,map:p.top}),stone:d({map:p.stone,roughness:.95}),iron:d({color:"#2d2a28",roughness:.45,metalness:.8}),brass:d({color:"#b98a3a",roughness:.35,metalness:.9}),rope:d({color:"#a8875a",roughness:1}),cloth:d({color:"#7c1f1a",roughness:.95}),soot:d({color:"#0c0705",roughness:1}),foam:d({color:"#f6ead0",roughness:.9}),ale:d({color:"#a8641a",roughness:.3,emissive:"#3a1a04"}),candle:d({color:"#efe2c4",roughness:.7,emissive:"#3a2a10"}),glassLamp:d({color:"#ffd28a",emissive:"#ffb04a",emissiveIntensity:2.2,roughness:.2})},y=["#2f6b3a","#6b2a1a","#2a3f6b","#7a6a2a","#3a2a1a","#5a1f4a"].map(I=>d({color:I,roughness:.12,metalness:.1,transparent:!0,opacity:.82,emissive:I,emissiveIntensity:.25})),v=16,T=12,N=4.6,C=-6.2,E=-8,q=8,w=m(new Qt(v,T+2),f.floor,0,0,-.2);w.rotation.x=-Math.PI/2;let D=m(new Qt(v,N),f.wall,0,N/2,C),ce=m(new Qt(T+2,N),f.wallSide,E,N/2,-.2);ce.rotation.y=Math.PI/2;let ue=m(new Qt(T+2,N),f.wallSide,q,N/2,-.2);ue.rotation.y=-Math.PI/2;let re=m(new Qt(v,T+2),f.dark,0,N,-.2);re.rotation.x=Math.PI/2,g(v,.14,.12,f.beam,0,1.15,C+.06),g(v,.26,.1,f.beam,0,.13,C+.05);for(let I of[-1,1]){let K=g(.12,.14,T+2,f.beam,I*(v/2-.06),1.15,-.2),Q=g(.1,.26,T+2,f.beam,I*(v/2-.05),.13,-.2)}for(let I=-3;I<=3;I++)g(.3,.34,T+2,f.beam,I*2.5,N-.17,-.2);g(v,.34,.34,f.beam,0,N-.5,C+.2),g(v,.3,.3,f.beam,0,N-.45,2.6);for(let[I,K]of[[-7.7,C+.3],[7.7,C+.3],[-7.7,2.6],[7.7,2.6],[-3.9,C+.25],[3.9,C+.25],[-6.2,2.6],[6.2,2.6]])g(.36,N,.36,f.beam,I,N/2,K);for(let I of[-1,1]){let K=g(.14,3.4,.14,f.beam,I*7.9,2.3,1.2);K.rotation.x=.9}let B=h(new tn({map:h(Tn(_x(),1,1,!1)),transparent:!0,depthWrite:!1})),ae=(I,K,Q,se=Q,de=1)=>{let xe=m(new Qt(1,1),B,I,.012,K);return xe.rotation.x=-Math.PI/2,xe.scale.set(Q,se,1),xe.renderOrder=1,de!==1&&(xe.material=B.clone(),h(xe.material),xe.material.opacity=de),xe},fe=new Bi,be=I=>t+"models/"+I+".glb",me=new Map,ge=I=>(me.has(I)||me.set(I,fe.loadAsync(be(I)).catch(K=>(console.warn("[tavern] model",I,K),null))),me.get(I)),Te=["Characters_Henry","Characters_Captain_Barbarossa","Characters_Skeleton","Characters_Anne"],Le=["Prop_Barrel","Prop_Bottle_1","Prop_Bottle_2","Potion1_Filled","Potion3_Filled","Potion5_Filled","Potion7_Filled","Candle","Torch_wall","Prop_Coins","Prop_Chest_Gold","Prop_Chest_Closed","Prop_Skull","Prop_Anchor","Weapon_Dagger","Weapon_Cutlass","Weapon_Sword_1","Weapon_Pistol","Weapon_Lute","Prop_Bucket_Fishes","Prop_GoldBag","Prop_Cannon","Prop_CannonBall","Prop_Bomb","Prop_Fish_Mackerel","Ship_Small","Book_Open","Book1_Closed","Book2_Closed","Bread","Plate"],Ye=0,he=Te.length+Le.length,ve={};await Promise.all([...Te,...Le].map(I=>ge(I).then(K=>{var Q;ve[I]=K,Ye++,(Q=e.onProgress)==null||Q.call(e,Ye/he)})));let ie=[...Te,...Le].filter(I=>!ve[I]);ie.length&&console.warn("[tavern] missing models",ie);function Ae(I,K,Q,se,de={}){let xe=ve[I];if(!xe)return null;let Xe=xe.scene.clone(!0);if(de.h){let we=new Vn().setFromObject(xe.scene),ot=we.max.y-we.min.y||1;Xe.scale.setScalar(de.h/ot)}else de.s&&Xe.scale.setScalar(de.s);return Xe.position.set(K,Q,se),Xe.rotation.set(de.rx||0,de.ry||0,de.rz||0),(de.parent||c).add(Xe),Xe.traverse(we=>{var ot,Ft;we.isMesh&&(we.material=we.material.clone(),h(we.material),we.material.metalness>.5&&!de.metal&&(we.material.metalness=.4),we.material.roughness=Math.max(.35,(ot=we.material.roughness)!=null?ot:.8),de.emissive&&(we.material.emissive=new Fe(de.emissive),we.material.emissiveIntensity=(Ft=de.emissiveI)!=null?Ft:.6))}),de.shadow&&ae(K,se,de.shadow),Xe}let ht=h(new gn({map:h(Tn(xx(),1,1)),blending:Rn,depthWrite:!1,transparent:!0})),Et=h(new gn({map:h(Tn(ih(),1,1)),blending:Rn,depthWrite:!1,transparent:!0,opacity:.55})),qe=[];function De(I,K,Q,se=.1,de=c,xe=.5){let Xe=new bn(ht);Xe.position.set(I,K,Q),Xe.scale.set(se*.6,se*1.2,1),de.add(Xe);let we=null;se>=.2&&(we=new bn(Et),we.position.set(I,K,Q),we.scale.setScalar(se*6*xe),de.add(we));let ot={f:Xe,g:we,s:se,glow:xe,seed:Math.random()*100};return qe.push(ot),ot}function Be(I,K,Q,se=c,de=.2){return Ae("Candle",I,K,Q,{h:de,parent:se}),De(I,K+de*1.04,Q,.075,se)}function J(I,K,Q,se=c,de=!0){let xe=new vt;xe.position.set(I,K,Q),se.add(xe);let Xe=new ke(h(new Wt(.065,.07,.16,12)),f.wood);Xe.position.y=.08,xe.add(Xe);for(let ot of[.03,.13]){let Ft=new ke(h(new es(.071,.008,4,12)),f.iron);Ft.rotation.x=Math.PI/2,Ft.position.y=ot,xe.add(Ft)}let we=new ke(h(new es(.04,.012,6,10,Math.PI)),f.wood);if(we.position.set(.07,.08,0),we.rotation.z=-Math.PI/2,xe.add(we),de){let ot=new ke(h(new Wt(.068,.066,.03,12)),f.foam);ot.position.y=.165,xe.add(ot)}return xe}let ln=.74;function ct(I,K,Q=0){let se=new vt;se.position.set(I,0,K),se.rotation.y=Q,c.add(se);let de=new ke(h(new Wt(.24,.24,.06,14)),f.top);de.position.y=.46,se.add(de);for(let xe=0;xe<3;xe++){let Xe=xe/3*Cn,we=new ke(h(new Wt(.025,.03,.46,6)),f.beam);we.position.set(Math.cos(Xe)*.15,.23,Math.sin(Xe)*.15),we.rotation.z=Math.cos(Xe)*.12,we.rotation.x=-Math.sin(Xe)*.12,se.add(we)}return ae(I,K,.7),se}function mt(I,K,Q=0){Ae("Prop_Barrel",I,0,K,{h:.5,ry:Q,shadow:.8})}function nt(I,K,Q=.85){let se=new vt;se.position.set(I,0,K),c.add(se);let de=new ke(h(new Wt(Q,Q,.08,28)),f.top);de.position.y=ln,se.add(de);let xe=new ke(h(new es(Q,.03,6,28)),f.beam);xe.rotation.x=Math.PI/2,xe.position.y=ln,se.add(xe);let Xe=new ke(h(new Wt(.09,.13,ln-.04,10)),f.beam);Xe.position.y=(ln-.04)/2,se.add(Xe);for(let we=0;we<2;we++){let ot=new ke(h(new zt(.7,.07,.1)),f.beam);ot.position.y=.04,ot.rotation.y=we*Math.PI/2+.4,se.add(ot)}return ae(I,K,Q*2.6,Q*2.3),se}let yt=ln+.04,H=new vt;c.add(H),g(7.2,1.08,.78,f.counter,0,.54,-4.1,H),g(7.5,.1,.98,f.counterTop,0,1.13,-4.1,H),g(7.3,.12,.1,f.beam,0,.06,-3.68,H);for(let I=-3;I<=3;I++)g(.12,.9,.06,f.beam,I*1.15,.58,-3.69,H);g(.06,.06,7,f.brass,0,.25,-3.6,H).rotation.y=Math.PI/2;let P=d({map:h(Tn(px(e.signText||"BATAN L\xD6VB\u018FR"),1,1)),roughness:.6,emissive:"#2a1404",emissiveIntensity:.4});m(new Qt(2.9,.72),P,0,.64,-3.63);let M=["Prop_Bottle_1","Potion3_Filled","Prop_Bottle_2","Potion1_Filled","Prop_Bottle_1","Potion5_Filled","Prop_Bottle_2","Potion7_Filled"];for(let[I,K]of[[1.75,13],[2.35,12],[2.95,11]]){g(5.6,.07,.42,f.beam,0,I,C+.26,H);for(let Q=0;Q<K;Q++){let se=-2.55+Q*(5.1/(K-1)),de=(Q*3+Math.round(I*7))%M.length;Q%6===4?J(se,I+.035,C+.3,H,!1):I>2.9&&Q%5===2?Ae("Book1_Closed",se,I+.2,C+.3,{h:.3,rz:.12}):Ae(M[de],se,I+.035,C+.3,{h:M[de].startsWith("Potion")?.3:.34,ry:Q})}}for(let I of[-2.9,2.9])g(.12,1.6,.44,f.beam,I,2.4,C+.26,H);for(let I of[-1,1]){g(1,.14,.9,f.beam,I*3.55,.07,C+.7,H),Ae("Prop_Barrel",I*3.55,.14,C+.7,{h:.95,ry:.4*I}),Ae("Prop_Barrel",I*3.55,1.09,C+.7,{h:.8,ry:-.3*I});let K=x(.03,.03,.16,f.brass,I*3.55,.55,C+1.15,H);K.rotation.x=Math.PI/2}[[-2.8,0],[-1.6,1],[-.9,0],[1.3,1],[2.4,0]].forEach(([I,K],Q)=>J(I,1.18,-4+Q%2*.15,H,!!K)),Ae("Prop_Bottle_1",.95,1.18,-4.15,{h:.34}),Ae("Prop_Coins",1.75,1.18,-3.95,{h:.1,ry:.8}),Be(-2.2,1.18,-4.2,H),Be(2,1.18,-4.25,H),Ae("Prop_Chest_Gold",-3,0,-3.25,{h:.75,ry:.5,shadow:1.4,emissive:"#3a2400",emissiveI:.35}),Ae("Prop_Bucket_Fishes",2.9,0,-3.35,{h:.5,ry:-.4,shadow:.9});let $=E+.45,_e=-2.6,Me=new vt;Me.position.set($,0,_e),c.add(Me),g(.9,2.2,2.4,f.stone,0,1.1,0,Me),g(.92,1.15,1.3,f.soot,.02,.62,0,Me),g(1.15,.16,2.7,f.beam,.1,2.25,0,Me),g(.7,2.3,1.6,f.stone,-.1,3.4,0,Me);for(let I=0;I<3;I++){let K=x(.08,.08,.9,f.beam,.3,.14+(I===2?.12:0),(I-1)*.18,Me,8);K.rotation.x=Math.PI/2,K.rotation.z=(I-1)*.3}De($+.35,.48,_e-.15,.5,c,.7),De($+.35,.45,_e+.18,.42,c,.6),De($+.4,.42,_e,.6,c,.9);let Pe=d({color:"#ff6a1a",emissive:"#ff4a00",emissiveIntensity:2,roughness:1});g(.4,.05,.9,Pe,$+.35,.06,_e),Ae("Prop_Skull",$+.15,2.33+.12,_e+.5,{h:.24,ry:Math.PI/2}),Ae("Ship_Small",$+.2,2.33,_e-.55,{h:.55,ry:Math.PI/2}),Be($+.15,2.33,_e+1);let ze=new vt;ze.position.set(E+.03,2.25,1),ze.rotation.y=Math.PI/2,c.add(ze);let Ge=h(Tn(bx(),1,1));m(new Qt(1.5,1.85),d({map:Ge,emissive:"#ffffff",emissiveMap:Ge,emissiveIntensity:.9,roughness:.1}),0,0,0,ze),g(1.7,.12,.14,f.beam,0,.98,.02,ze),g(1.7,.16,.2,f.beam,0,-.98,.05,ze),g(.12,2,.14,f.beam,-.8,0,.02,ze),g(.12,2,.14,f.beam,.8,0,.02,ze),g(.06,1.85,.08,f.beam,0,0,.03,ze),g(1.5,.06,.08,f.beam,0,.2,.03,ze);let et=h(new tn({map:h(Tn(vx(),1,1,!1)),transparent:!0,blending:Rn,depthWrite:!1,opacity:.16,side:pn}));m(new Qt(1.6,4.2),et,E+1.6,1.3,1).rotation.set(0,Math.PI/2,-.95),m(new Qt(1.5,1.12),d({map:h(Tn(th(3,"Mare Incognitum"),1,1)),roughness:.9}),-5.4,2.6,C+.03).rotation.z=.03,m(new Qt(1.2,.9),d({map:h(Tn(th(12,"Insula"),1,1)),roughness:.9}),5.3,2.75,C+.03).rotation.z=-.05;let Mt=m(new Qt(1.4,1.05),d({map:h(Tn(th(29,"Freeport"),1,1)),roughness:.9}),q-.03,2.85,-4.4);Mt.rotation.y=-Math.PI/2;let Ee=m(new Qt(1.45,.9,16,4),d({map:h(Tn(gx(),1,1)),roughness:1,side:pn}),0,3.72,C+.08),Gt=Ee.geometry.attributes.position.array.slice();Ae("Weapon_Cutlass",$+.3,3.15,_e-.25,{h:.9,ry:Math.PI/2,rx:.6}),Ae("Weapon_Cutlass",$+.3,3.15,_e+.25,{h:.9,ry:Math.PI/2,rx:-.6}),Ae("Weapon_Pistol",-2,2.6,C+.07,{h:.22,rz:.2}),Ae("Prop_Anchor",q-.1,2.4,2,{s:1.35,rx:Math.PI/2,ry:-Math.PI/2,metal:!0});for(let[I,K,Q]of[[-3.72,C+.45,0],[3.72,C+.45,Math.PI],[E+.22,2.6,0],[q-.22,2.6,Math.PI]])Ae("Torch_wall",I,2.15,K,{h:.55,ry:Q+(Math.abs(I)>7?(I<0,0):-Math.PI/2)});Ae("Prop_Cannon",-6.6,.32,3.4,{h:.75,ry:-.5,shadow:1.6});for(let[I,K]of[[-6,4],[-5.8,4.2],[-5.95,4.35]])Ae("Prop_CannonBall",I,.1,K,{h:.2});Ae("Prop_Barrel",-7.2,0,-5.2,{h:.9,ry:.3,shadow:1.2}),Ae("Prop_Barrel",-6.5,0,-5.45,{h:.9,ry:1.3,shadow:1.2}),Ae("Prop_Barrel",-6.85,.9,-5.3,{h:.75,ry:2}),Ae("Prop_Bomb",-6,0,-5.3,{h:.35}),Nt(7.2,0,-5.5,.75,.2),Nt(7.2,.75,-5.45,.55,-.3),Ae("Prop_GoldBag",7.15,1.3,-5.45,{h:.3}),Ae("Prop_Barrel",6.3,0,-5.6,{h:.85,ry:.3,shadow:1.1}),Ae("Prop_Chest_Closed",7,0,3.6,{h:.6,ry:-1.2,shadow:1.2}),Ae("Weapon_Lute",-7.6,.5,1.95,{h:.9,ry:Math.PI/2,rx:-.25});for(let[I,K]of[[-6.9,-4.3],[6.95,3]]){let Q=m(new es(.32,.09,8,20),f.rope,I,.09,K);Q.rotation.x=Math.PI/2,m(new es(.22,.08,8,18),f.rope,I,.24,K).rotation.x=Math.PI/2,ae(I,K,1.1)}function Nt(I,K,Q,se=.6,de=0){let xe=g(se,se,se,d({map:p.stave,color:"#b4875a",roughness:.85}),I,K+se/2,Q);xe.rotation.y=de;for(let Xe of[-1,1])g(se*1.02,.06,.06,f.beam,0,Xe*se*.44,se*.5,xe),g(.06,se*1.02,.06,f.beam,Xe*se*.44,0,se*.5,xe);return ae(I,Q,se*1.8),xe}c.add(new ii("#ffcf9a","#2a1406",.5)),c.add(new Co("#4a2c18",.35));let wt=new Ln("#8fb0ff",.55);wt.position.set(-12,6,2),wt.target.position.set(-3,0,1),c.add(wt,wt.target);let ut=new Ln("#ffcf9a",.55);ut.position.set(3,6,8),ut.target.position.set(0,1,-2),c.add(ut,ut.target);let it=[];function At(I,K,Q,se,de,xe,Xe=.12){let we=new si(se,de,xe,1.6);return we.position.set(I,K,Q),c.add(we),it.push({l:we,base:de,flick:Xe,seed:Math.random()*50}),we}function qt(I,K,Q,se=.8){let de=new vt;de.position.set(I,K,Q),c.add(de);let xe=new ke(h(new Wt(.012,.012,se,4)),f.iron);xe.position.y=se/2,de.add(xe);let Xe=new ke(h(new Wt(.12,.14,.3,6,1,!0)),f.glassLamp);de.add(Xe);let we=new ke(h(new Fi(.17,.14,6)),f.iron);we.position.y=.22,de.add(we);let ot=new ke(h(new Wt(.15,.12,.05,6)),f.iron);ot.position.y=-.17,de.add(ot);for(let Rt=0;Rt<6;Rt++){let Tt=Rt/6*Cn,Ze=new ke(h(new zt(.015,.3,.015)),f.iron);Ze.position.set(Math.cos(Tt)*.135,0,Math.sin(Tt)*.135),de.add(Ze)}let Ft=new bn(Et);return Ft.scale.setScalar(1.3),de.add(Ft),de}qt(-4.2,3.2,-1.2,1.2),qt(4,3.2,-1.4,1.2),qt(-1.8,3.3,1.9,1.1),qt(2.6,3.3,2,1.1),At(-4.2,3.05,-1.2,"#ffb262",10,10),At(4,3.05,-1.4,"#ffb262",10,10),At(0,3.35,.7,"#ffc27a",16,14,.06),At($+1,.8,_e,"#ff7a2a",16,8,.35);let Vt=new vt;Vt.position.set(0,3.6,.7),c.add(Vt),m(new es(.75,.045,6,32),f.beam,0,0,0,Vt).rotation.x=Math.PI/2;for(let I=0;I<4;I++){let K=I/4*Cn+.3,Q=m(new Wt(.008,.008,1.2,3),f.iron,Math.cos(K)*.37,.55,Math.sin(K)*.37,Vt);Q.rotation.z=-Math.cos(K)*.55,Q.rotation.x=Math.sin(K)*.55}for(let I=0;I<8;I++){let K=I/8*Cn;Be(Math.cos(K)*.75,.02,Math.sin(K)*.75,Vt,.16)}nt(-4.7,-.8,.78),mt(-3.85,-.25,.5);let gt=m(new zt(.62,.03,.62),d({map:h(Tn(nh("checkers"),1,1)),roughness:.5}),-4.65,yt+.015,-.85);gt.rotation.y=.25;let Oe=h(new Wt(.03,.03,.018,12)),k=d({color:"#9a1e16",roughness:.4}),He=d({color:"#f0e2c4",roughness:.4});for(let I=0;I<8;I++)for(let K=0;K<8;K++){if((I+K)%2===0||K>2&&K<5||Math.sin(I*3.1+K*7.7)>.55)continue;let Q=new ke(Oe,K<3?k:He);Q.position.set((I-3.5)*.068,.02,(K-3.5)*.068),gt.add(Q)}J(-4.25,yt,-1.15,c,!0),Be(-5.05,yt,-1.25),nt(-1.8,1.7,.8),mt(-1,2.35,1);let Ce=[1,2,3,4,5,6].map(I=>d({map:h(Tn(mx(I),1,1)),roughness:.4})),ft=[];for(let[I,K,Q]of[[-1.7,1.55,.4],[-1.52,1.72,1.1]]){let se=m(new zt(.09,.09,.09),[Ce[0],Ce[5],Ce[1],Ce[4],Ce[2],Ce[3]],I,yt+.045,K);se.rotation.y=Q,ft.push(se)}let We=x(.085,.07,.2,d({color:"#5a2a12",roughness:.8}),-2.05,yt+.09,1.5);We.rotation.z=1.4,Ae("Prop_Coins",-1.95,yt,1.95,{h:.1,ry:.3}),J(-1.25,yt,1.95),Ae("Plate",-1.45,yt,1.35,{h:.05}),Ae("Bread",-1.45,yt+.03,1.35,{h:.14,ry:.6}),nt(2.5,1.5,.8),mt(1.65,2.15,.3);let jt=m(new zt(.66,.03,.66),d({map:h(Tn(nh("xo"),1,1)),roughness:.7}),2.45,yt+.015,1.5);jt.rotation.y=-.2;let Ct=g(.08,.02,.02,d({color:"#f4f0e6",roughness:1}),2.85,yt+.01,1.85);Ct.rotation.y=.6,J(2,yt,1.85),Be(2.95,yt,1.2),Ae("Prop_Fish_Mackerel",2.15,yt+.03,1.15,{h:.08,ry:1.2,rz:Math.PI/2});let Y=new vt;Y.position.set(q-.14,1.65,-2.3),Y.rotation.y=-Math.PI/2,c.add(Y),m(new Wt(.62,.62,.14,40),[d({map:p.stave,color:"#8a5a2a"}),d({map:h(Tn(nh("target"),1,1)),roughness:.8}),f.beam],0,0,0,Y).rotation.x=Math.PI/2,g(.08,1.8,.08,f.beam,0,-.2,-.1,Y);let oe=[];function le(){let I=ve.Weapon_Dagger?ve.Weapon_Dagger.scene.clone(!0):new vt,K=new vt;return I.scale.setScalar(.3),I.rotation.x=-Math.PI/2,I.position.z=.26,K.add(I),K}for(let[I,K]of[[.6,.32],[2.4,.2],[4.1,.42]]){let Q=le();Q.position.set(Math.cos(I)*K,Math.sin(I)*K,.05),Y.add(Q),oe.push(Q)}g(.04,.01,1.4,d({color:"#e8dcc0",roughness:1}),5,.01,-1.8).rotation.y=.5,nt(4.75,-4.8,.7),Ae("Prop_Barrel",5.45,0,-4.55,{h:.5}),Ae("Prop_Barrel",4.05,0,-4.55,{h:.5}),J(4.65,yt,-4.7),J(4.95,yt,-4.95),Ae("Prop_Bottle_2",4.5,yt,-5.05,{h:.3}),Be(4.85,yt,-4.55);for(let[I,K,Q,se]of[[4.4,2.6,"#5b1712",.006],[4.1,2.3,"#8a5a20",.008],[3.9,2.1,"#6b1a14",.009]]){let de=m(new Qt(I,K),d({color:Q,roughness:1}),.3,se,-.6);de.rotation.x=-Math.PI/2}let Z={};function Se(I,K,Q=!0){let se=I.image,[de,xe]=Wn(se.width,se.height);xe.drawImage(se,0,0);let Xe=xe.getImageData(0,0,se.width,se.height),we=Xe.data;for(let Ft=0;Ft<we.length;Ft+=4){let Rt=we[Ft]/255,Tt=we[Ft+1]/255,Ze=we[Ft+2]/255,kt=Math.max(Rt,Tt,Ze),An=Math.min(Rt,Tt,Ze),$t=(kt+An)/2,Ei=0,Ts=0;if(kt!==An){let ri=kt-An;Ts=$t>.5?ri/(2-kt-An):ri/(kt+An),Ei=kt===Rt?(Tt-Ze)/ri+(Tt<Ze?6:0):kt===Tt?(Ze-Rt)/ri+2:(Rt-Tt)/ri+4,Ei/=6}if(Q&&Ei>.02&&Ei<.12&&Ts>.15&&Ts<.75&&$t>.25&&$t<.85||Ts<.12)continue;Ei=(Ei+K)%1;let Sa=$t<.5?$t*(1+Ts):$t+Ts-$t*Ts,Xr=2*$t-Sa,Wo=ri=>(ri=(ri+1)%1,ri<1/6?Xr+(Sa-Xr)*6*ri:ri<.5?Sa:ri<2/3?Xr+(Sa-Xr)*(2/3-ri)*6:Xr);we[Ft]=Wo(Ei+1/3)*255,we[Ft+1]=Wo(Ei)*255,we[Ft+2]=Wo(Ei-1/3)*255}xe.putImageData(Xe,0,0);let ot=h(new wn(de));return ot.colorSpace=Ut,ot.flipY=I.flipY,ot.magFilter=I.magFilter,ot.minFilter=I.minFilter,ot}function Ue(I,K,Q,se,de,xe={}){let Xe=ve[K];if(!Xe)return null;let we=Ci(Xe.scene);Xe.scene.updateMatrixWorld(!0);let ot=new Vn().setFromObject(Xe.scene,!0),Ft=ot.max.y-ot.min.y||1;we.scale.setScalar((xe.h||1.5)/Ft),we.position.set(Q,xe.y||0,se),we.rotation.y=de,c.add(we);let Rt=null;we.traverse($t=>{$t.isMesh&&!$t.isSkinnedMesh&&xe.noProp&&($t.visible=!1),$t.isMesh&&($t.frustumCulled=!1,$t.material=$t.material.clone(),h($t.material),$t.material.roughness=.75,$t.material.metalness=0,xe.hue!=null&&$t.material.map&&(Rt=Rt||Se($t.material.map,xe.hue),$t.material.map=Rt),xe.tint&&($t.material.color=new Fe(xe.tint)))});let Tt=new di(we),Ze={};for(let $t of Xe.animations)Ze[$t.name]=$t;let kt=Tt.clipAction(Ze.Idle||Xe.animations[0]);kt.play(),kt.time=Math.random()*2;let An={id:I,root:we,mixer:Tt,clips:Ze,idle:kt,current:null,height:xe.h||1.5,head:new F,modelH:Ft};return Z[I]=An,xe.shadow!==!1&&ae(Q,se,.9,.75,.9),An}function Ke(I,K,{loop:Q=!1}={}){let se=Z[I];if(!se||i)return!1;let de=se.clips[K];if(!de)return!1;let xe=se.mixer.clipAction(de);se.current&&se.current!==xe&&se.current.fadeOut(.2),xe.reset(),xe.setLoop(Q?Uo:pa,Q?1/0:1),xe.clampWhenFinished=!0,xe.fadeIn(.2).play(),se.idle.fadeOut(.2),se.current=xe;let Xe=we=>{we.action===xe&&(se.mixer.removeEventListener("finished",Xe),xe.fadeOut(.3),se.idle.reset().fadeIn(.3).play(),se.current=null)};return se.mixer.addEventListener("finished",Xe),!0}g(2.2,.32,.7,f.beam,.35,.16,-4.85),Ue("barkeep","Characters_Henry",.35,-4.75,0,{h:1.95,y:.32,hue:.55,shadow:!1,noProp:!0}),Ue("oldsailor","Characters_Captain_Barbarossa",-5.45,-.7,1,{h:1.6}),Ue("dicer","Characters_Henry",-2.7,1.15,.95,{h:1.5}),Ue("xo","Characters_Skeleton",3.35,.95,-.95,{h:1.45}),Ue("knife","Characters_Anne",6.35,-3.5,.95,{h:1.5}),Ue("patronA","Characters_Captain_Barbarossa",4,-4.4,Math.PI/2-.3,{h:1.45,hue:.3}),Ue("patronB","Characters_Skeleton",5.45,-4.45,-Math.PI/2+.3,{h:1.4,tint:"#b8d8c8"}),Ue("patronC","Characters_Henry",-2.6,-3.35,.3,{h:1.5,hue:.8,noProp:!0});let ye=["patronA","patronB","patronC","barkeep","dicer","xo","oldsailor"],dt=3,bt=(()=>{try{let I=o.getContext(),K=I.getExtension("WEBGL_debug_renderer_info");return String(K?I.getParameter(K.UNMASKED_RENDERER_WEBGL):I.getParameter(I.RENDERER))}catch{return""}})(),Ht=/swiftshader|llvmpipe|software/i.test(bt),cn=i||Ht?0:120,dn=h(new mn),rt=new Float32Array(cn*3),an=zi(77);for(let I=0;I<cn;I++)rt[I*3]=(an()-.5)*14,rt[I*3+1]=.3+an()*3.8,rt[I*3+2]=-5+an()*8;dn.setAttribute("position",new un(rt,3)),c.add(new ps(dn,h(new $i({size:.035,map:h(Tn(ih("rgba(255,235,200,1)","rgba(255,220,160,.4)"),1,1)),transparent:!0,opacity:.5,depthWrite:!1,blending:Rn}))));let S=h(new tn({map:h(Tn(yx(),1,1)),transparent:!0,depthWrite:!1,blending:Rn,opacity:.55})),G=h(new tn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})),V=[{id:"barkeep",anchor:[.35,2.55,-4.7],ring:[.4,-3.3,1.6],hit:[[.4,1.5,-4.4],[1.6,2.2,1.4]],view:{pos:[.4,2,-.9],target:[.35,1.55,-4.6]}},{id:"oldsailor",anchor:[-5.35,2.25,-.7],ring:[-4.95,-.8,2.3],hit:[[-4.95,.9,-.8],[2.2,1.9,1.9]],view:{pos:[-3,2,2.6],target:[-5,1.05,-.85]}},{id:"dicer",anchor:[-2.7,2.15,1.15],ring:[-1.95,1.65,2.2],hit:[[-2.05,.85,1.6],[2.1,1.7,1.9]],view:{pos:[-.4,1.9,4.1],target:[-2.1,.95,1.4]}},{id:"xo",anchor:[3.35,2.1,.95],ring:[2.7,1.3,2.3],hit:[[2.8,.85,1.3],[2.1,1.8,1.9]],view:{pos:[1.5,1.95,4.3],target:[2.8,1,1.2]}},{id:"knife",anchor:[6.9,2.6,-2.9],ring:[6.3,-1.8,2.6],hit:[[6.4,1.3,-1.9],[3.2,2.6,2.4]],view:{pos:[2.6,2.05,1.6],target:[7,1.45,-2]}}],te=[];for(let I of V){let K=m(new Qt(1,1),S.clone(),I.ring[0],.02,I.ring[1]);h(K.material),K.rotation.x=-Math.PI/2,K.scale.setScalar(I.ring[2]),K.renderOrder=2,I.ringMesh=K;let[[Q,se,de],[xe,Xe,we]]=I.hit,ot=m(new zt(xe,Xe,we),G,Q,se,de);ot.visible=!1,ot.userData.spot=I.id,te.push(ot),I.anchorV=new F(...I.anchor)}let ee={pos:new F(0,2.75,7.6),target:new F(0,1.3,-1.4)},W={pos:ee.pos.clone(),target:ee.target.clone(),yaw:0,from:null,to:null,t:1,dur:.9,focus:null,off:0,offGoal:.17};function Ie(){let I=r()/a();l.aspect=I,l.fov=yd(2*Math.atan(Math.tan(42*Math.PI/180)/I)*180/Math.PI,40,72),l.updateProjectionMatrix()}Ie();function Ne(I,K){W.from={pos:W.pos.clone(),target:W.target.clone()},W.to={pos:new F(...I.pos.isVector3?I.pos.toArray():I.pos),target:new F(...I.target.isVector3?I.target.toArray():I.target)},W.t=i?1:0,W.focus=K,i&&(W.pos.copy(W.to.pos),W.target.copy(W.to.target)),K&&(W.yaw=0)}let Je=new Ur,xt=new lt;function _t(I,K){let Q=o.domElement.getBoundingClientRect();xt.set((I-Q.left)/Q.width*2-1,-((K-Q.top)/Q.height)*2+1),Je.setFromCamera(xt,l);let se=Je.intersectObjects(te,!1)[0];return se?se.object.userData.spot:null}let $e=null,Ot=o.domElement;Ot.style.touchAction="none";let hn=I=>{if(!$e){$e={id:I.pointerId,x:I.clientX,y:I.clientY,yaw:W.yaw,moved:!1};try{Ot.setPointerCapture(I.pointerId)}catch{}}},sn=I=>{if(!$e||I.pointerId!==$e.id)return;let K=I.clientX-$e.x;Math.abs(K)+Math.abs(I.clientY-$e.y)>10&&($e.moved=!0),$e.moved&&!W.focus&&(W.yaw=yd($e.yaw-K/r()*1.1,-.42,.42))},on=I=>{var Q;if(!$e||I.pointerId!==$e.id)return;let K=$e;$e=null;try{Ot.releasePointerCapture(I.pointerId)}catch{}K.moved||(Q=e.onTap)==null||Q.call(e,_t(I.clientX,I.clientY))};Ot.addEventListener("pointerdown",hn),Ot.addEventListener("pointermove",sn),Ot.addEventListener("pointerup",on),Ot.addEventListener("pointercancel",on);let Pt=null,It=3.5;function O(){let I=le();c.add(I);let K=Math.random()*Cn,Q=.1+Math.random()*.35;Pt={k:I,start:new F(6.6,1.4,-3.25),end:new F(q-.14-.05,1.65+Math.sin(K)*Q,-2.3+Math.cos(K)*Q),t:0},Ke("knife","Sword")}let b=[];if(Ue("bard","Characters_Anne",-1.45,-3.55,.35,{h:1.45,hue:.12}),Z.bard){let I=Z.bard,K=.35,Q=new F(Math.sin(K),0,Math.cos(K)),se=new F(Math.cos(K),0,-Math.sin(K)),de=new vt;de.userData.dynamic=!0,c.add(de),de.rotation.y=K,Ae("Weapon_Lute",0,0,0,{h:.7,parent:de,rx:0,ry:Math.PI/2,rz:-1.05});let xe=I.root.position.clone().addScaledVector(Q,.24).addScaledVector(se,-.05);xe.y=.78;let[Xe,we]=Wn(64,64);we.font="bold 50px Georgia, serif",we.textAlign="center",we.textBaseline="middle",we.shadowColor="rgba(0,0,0,.6)",we.shadowBlur=4,we.fillStyle="#ffd77a",we.fillText("\u266A",32,34);let ot=h(new gn({map:h(Tn(Xe,1,1)),transparent:!0,depthWrite:!1})),Ft=Array.from({length:4},(Rt,Tt)=>{let Ze=new bn(ot.clone());return h(Ze.material),Ze.scale.setScalar(.16),c.add(Ze),{m:Ze,ph:Tt/4}});b.push((Rt,Tt)=>{let Ze=Math.sin(Tt*7.5);I.root.rotation.y=K+Math.sin(Tt*1.1)*.07,I.root.position.y=Math.abs(Math.sin(Tt*2.2))*.02,de.position.copy(xe),de.position.y+=I.root.position.y,de.rotation.z=Ze*.025,de.rotation.y=I.root.rotation.y;for(let kt of Ft){let An=(Tt*.32+kt.ph)%1;kt.m.position.set(xe.x+Math.sin(An*6+kt.ph*9)*.18+Q.x*.2,xe.y+.25+An*1.3,xe.z+Math.cos(An*5+kt.ph*7)*.15),kt.m.material.opacity=Math.sin(An*Math.PI)*.9,kt.m.scale.setScalar(.12+An*.08)}})}if(Ue("server","Characters_Anne",1.6,-3.2,0,{h:1.42,hue:.62}),Z.server&&Z.server.clips.Walk){let I=Z.server,K=I.mixer.clipAction(I.clips.Walk);K.setLoop(Uo,1/0);let Q=[[1.6,-3.2],[3.4,-.6],[.6,.5],[-2.2,-.4],[-2.4,-2.2],[.2,-2.9]],se=0,de=2.5;b.push(xe=>{if(W.focus==="server")return;if(de>0){de-=xe,de<=0&&(I.idle.fadeOut(.25),K.reset().fadeIn(.25).play());return}let[Xe,we]=Q[(se+1)%Q.length],ot=I.root.position,Ft=Xe-ot.x,Rt=we-ot.z,Tt=Math.hypot(Ft,Rt),kt=Math.atan2(Ft,Rt)-I.root.rotation.y;kt=Math.atan2(Math.sin(kt),Math.cos(kt)),I.root.rotation.y+=kt*Math.min(1,xe*6);let An=Math.min(Tt,1.05*xe);Tt>1e-4&&(ot.x+=Ft/Tt*An,ot.z+=Rt/Tt*An),Tt<.05&&(se=(se+1)%Q.length,de=1.5+Math.random()*2.5,K.fadeOut(.25),I.idle.reset().fadeIn(.25).play(),Math.random()<.4&&Ke("server",Math.random()<.5?"Wave":"Yes"))})}{let I=h(new gn({map:h(Tn(ih("rgba(255,230,160,1)","rgba(255,120,30,.5)"),1,1)),blending:Rn,transparent:!0,depthWrite:!1})),K=Array.from({length:Ht?6:22},(Q,se)=>{let de=new bn(I);return de.scale.setScalar(.05),c.add(de),{m:de,ph:Math.random(),sp:.25+Math.random()*.35,sx:(Math.random()-.5)*.6}});b.push((Q,se)=>{for(let de of K){let xe=(se*de.sp+de.ph)%1;de.m.position.set($+.38+Math.sin(se*2+de.ph*20)*.08+de.sx*xe,.5+xe*1.7,_e+de.sx*.5),de.m.scale.setScalar(.06*(1-xe)+.01)}})}let _=I=>(I.userData.dynamic=!0,I);[Ee,...ft,...te,...V.map(I=>I.ringMesh),Y,...Object.values(Z).map(I=>I.root)].forEach(_);let A=new Map;function R(I){if(!I.isMeshStandardMaterial)return I;if(A.has(I))return A.get(I);let K=h(new Ir({map:I.map,color:I.color,emissive:I.emissive,emissiveMap:I.emissiveMap,emissiveIntensity:I.emissiveIntensity,transparent:I.transparent,opacity:I.opacity,side:I.side,alphaTest:I.alphaTest,depthWrite:I.depthWrite}));return A.set(I,K),K}function U(){c.updateMatrixWorld(!0);let I=new Map;c.traverse(Q=>{var xe,Xe,we,ot,Ft,Rt,Tt,Ze,kt,An;if(!Q.isMesh||Q.isSkinnedMesh||Array.isArray(Q.material)||!Q.geometry)return;for(let $t=Q;$t;$t=$t.parent)if($t.userData.dynamic)return;let se=Q.material,de=[se.type,((xe=se.map)==null?void 0:xe.uuid)||"",((we=(Xe=se.color)==null?void 0:Xe.getHexString)==null?void 0:we.call(Xe))||"",((Ft=(ot=se.emissive)==null?void 0:ot.getHexString)==null?void 0:Ft.call(ot))||"",((Rt=se.emissiveMap)==null?void 0:Rt.uuid)||"",((Tt=se.emissiveIntensity)!=null?Tt:0).toFixed(2),se.transparent?1:0,((Ze=se.opacity)!=null?Ze:1).toFixed(2),((kt=se.roughness)!=null?kt:0).toFixed(2),((An=se.metalness)!=null?An:0).toFixed(2),se.side,se.blending,se.depthWrite?1:0,Q.renderOrder].join("|");I.has(de)||I.set(de,{mat:se,parts:[],order:Q.renderOrder}),I.get(de).parts.push(Q)});let K=0;for(let{mat:Q,parts:se,order:de}of I.values()){if(se.length<2)continue;let xe=[],Xe=[],we=[];for(let Tt of se){let Ze=Tt.geometry.index?Tt.geometry.toNonIndexed():Tt.geometry.clone();Ze.applyMatrix4(Tt.matrixWorld);let kt=Ze.attributes.position.count;xe.push(Ze.attributes.position.array),Xe.push(Ze.attributes.normal?Ze.attributes.normal.array:new Float32Array(kt*3)),we.push(Ze.attributes.uv?Ze.attributes.uv.array:new Float32Array(kt*2)),Ze.dispose()}let ot=Tt=>{let Ze=Tt.reduce(($t,Ei)=>$t+Ei.length,0),kt=new Float32Array(Ze),An=0;for(let $t of Tt)kt.set($t,An),An+=$t.length;return kt},Ft=h(new mn);Ft.setAttribute("position",new un(ot(xe),3)),Ft.setAttribute("normal",new un(ot(Xe),3)),Ft.setAttribute("uv",new un(ot(we),2)),Ft.computeBoundingSphere();let Rt=new ke(Ft,R(Q));Rt.renderOrder=de,Rt.matrixAutoUpdate=!1,c.add(Rt);for(let Tt of se)Tt.parent.remove(Tt);K+=se.length}return K}let z=e.noMerge?0:U(),ne=new ui;ne.background=new Fe("#3a2210"),ne.add(new ii("#ffe2b8","#3a1d08",1.1));let j=new Ln("#ffd7a0",2.2);j.position.set(1.5,2.5,3),ne.add(j);let L=new Ln("#ff9a4a",1.4);L.position.set(-2,1.5,-2),ne.add(L);let X=new _n(24,1,.05,30),pe={};function pt(I){if(pe[I])return pe[I];let K=Z[I];if(!K)return"";let Q=256,se=new In(Q,Q,{colorSpace:Ut}),de=Ci(K.root);de.position.set(0,0,0),de.rotation.set(0,-.25,0),ne.add(de);let xe=new di(de);K.clips.Idle&&(xe.clipAction(K.clips.Idle).play(),xe.update(.6)),de.updateMatrixWorld(!0);let Xe=K.height;X.position.set(0,Xe*.78,Xe*1.25),X.lookAt(0,Xe*.66,0),o.setRenderTarget(se),o.render(ne,X),o.setRenderTarget(null),ne.remove(de),xe.stopAllAction();let we=new Uint8Array(Q*Q*4);o.readRenderTargetPixels(se,0,0,Q,Q,we),se.dispose();let[ot,Ft]=Wn(Q,Q),Rt=Ft.createImageData(Q,Q);for(let Tt=0;Tt<Q;Tt++)Rt.data.set(we.subarray((Q-1-Tt)*Q*4,(Q-Tt)*Q*4),Tt*Q*4);return Ft.putImageData(Rt,0,0),pe[I]=ot.toDataURL("image/png")}let st=0,fn=0,Dt=0,Kt=!1,Pn=!1,Re=0,je=0,tt=!1,at=new F,Bt=new F,Lt={n:0,ms:0};function St(I){var Xe,we,ot,Ft;if(st=requestAnimationFrame(St),!Kt)return;let K=fn?Math.min(.05,(I-fn)/1e3):1/60,Q=je?Math.min(.25,(I-je)/1e3):1/60;if(fn=I,je=I,Dt+=K,Re++,W.t<1){W.t=Math.min(1,W.t+Q/W.dur);let Rt=dx(W.t);W.pos.lerpVectors(W.from.pos,W.to.pos,Rt),W.target.lerpVectors(W.from.target,W.to.target,Rt)}!$e&&!W.focus&&(W.yaw*=.985);let se=i?0:Math.sin(Dt*.35)*.04;at.copy(W.pos).sub(W.target);let de=W.yaw+(W.focus?0:se*.3);l.position.set(W.target.x+at.x*Math.cos(de)+at.z*Math.sin(de),W.pos.y+(i?0:Math.sin(Dt*.5)*.03),W.target.z-at.x*Math.sin(de)+at.z*Math.cos(de)),l.lookAt(W.target);let xe=W.focus?r()*W.offGoal:0;W.off+=(xe-W.off)*Math.min(1,Q*6),Math.abs(W.off-xe)<.5&&(W.off=xe),W.off>.5?l.setViewOffset(r(),a(),W.off,0,r(),a()):(Xe=l.view)!=null&&Xe.enabled&&l.clearViewOffset();for(let Rt of Object.values(Z))Rt.mixer.update(i?0:Q);if(!i){for(let Ze of qe){let kt=.82+Math.sin(Dt*11+Ze.seed)*.1+Math.sin(Dt*23.7+Ze.seed*2)*.08;Ze.f.scale.set(Ze.s*.6*(2-kt),Ze.s*1.2*kt,1),(we=Ze.g)==null||we.scale.setScalar(Ze.s*6*Ze.glow*(.9+kt*.15))}for(let Ze of it)Ze.l.intensity=Ze.base*(1-Ze.flick+Ze.flick*(.6+.4*Math.sin(Dt*9+Ze.seed)*Math.sin(Dt*3.3+Ze.seed*1.7)));let Rt=Ee.geometry.attributes.position;for(let Ze=0;Ze<Rt.count;Ze++){let kt=Gt[Ze*3],An=Gt[Ze*3+1];Rt.array[Ze*3+2]=.02+Math.sin(kt*3+Dt*1.2)*.018*(.45-An)}Rt.needsUpdate=!0;for(let Ze=0;Ze<cn;Ze++)rt[Ze*3+1]+=Math.sin(Dt*.4+Ze)*8e-4+6e-4,rt[Ze*3]+=Math.cos(Dt*.3+Ze*1.3)*9e-4,rt[Ze*3+1]>4.2&&(rt[Ze*3+1]=.3);dn.attributes.position.needsUpdate=!0;for(let Ze of b)Ze(K,Dt);if(dt-=K,dt<=0){let Ze=ye[Math.floor(Math.random()*ye.length)];Ze!==W.focus&&Ke(Ze,["Yes","No","Wave","Punch"][Math.floor(Math.random()*4)]),dt=2.5+Math.random()*4}if((Dt+1.3)%6<K*1.5){for(let Ze of ft)Ze.rotation.y=Math.random()*Cn;(ot=e.onSound)==null||ot.call(e,"diceTable")}if(It-=K,It<=0&&!Pt&&W.focus!=="knife"&&(O(),It=5+Math.random()*4),Pt){Pt.t+=K/.34;let Ze=Math.min(1,Pt.t);if(Ze>.35?(Pt.k.position.lerpVectors(Pt.start,Pt.end,(Ze-.35)/.65),Pt.k.position.y+=Math.sin((Ze-.35)/.65*Math.PI)*.12,Pt.k.lookAt(Bt.set(q+2,Pt.k.position.y,Pt.k.position.z))):Pt.k.position.copy(Pt.start),Ze>=1){(Ft=e.onSound)==null||Ft.call(e,"thunk");let kt=oe.length>6?oe.shift():null;kt&&kt.parent.remove(kt),Y.worldToLocal(Pt.k.position),Pt.k.position.z=.05,Pt.k.rotation.set(0,0,0),Y.add(Pt.k),oe.push(Pt.k),Pt=null}}}for(let Rt of V)Rt.ringMesh.material.opacity=W.focus===Rt.id?.95:.36+(i?0:Math.sin(Dt*2.4+Rt.ring[0])*.14);if(o.render(c,l),Lt.n++,Lt.ms+=Q*1e3,e.adaptive!==!1&&Lt.n>=90){let Rt=Lt.ms/Lt.n;Lt.n=0,Lt.ms=0;let Tt=o.getPixelRatio();Rt>38&&Tt>.76?(o.setPixelRatio(Math.max(.75,Tt-.25)),o.setSize(r(),a())):Rt<20&&Tt<Math.min(devicePixelRatio||1,1.5)-.01&&(o.setPixelRatio(Math.min(Math.min(devicePixelRatio||1,1.5),Tt+.25)),o.setSize(r(),a()))}if(e.onFrame){let Rt=r(),Tt=a(),Ze=[];for(let kt of V)at.copy(kt.anchorV).project(l),Ze.push({id:kt.id,x:(at.x*.5+.5)*Rt,y:(-at.y*.5+.5)*Tt,visible:at.z<1&&at.z>-1});e.onFrame(Ze)}}let pi=()=>{o.setSize(r(),a()),Ie()};addEventListener("resize",pi);let Jn="ResizeObserver"in window?new ResizeObserver(pi):null;Jn==null||Jn.observe(s);let Zn=!1,Ea=I=>{var K;I.preventDefault(),!Zn&&(Pn=!0,Kt=!1,(K=e.onContextLost)==null||K.call(e))};Ot.addEventListener("webglcontextlost",Ea),W.pos.copy(ee.pos),W.target.copy(ee.target),W.t=1,i||(W.pos.set(0,2.4,10.5),W.target.set(0,1.5,-1),Ne(ee,null),W.dur=1.6,setTimeout(()=>W.dur=.9,1700)),o.compile(c,l);for(let I of["barkeep","oldsailor","dicer","xo","knife"])pt(I);return Kt=!0,st=requestAnimationFrame(St),{spots:V.map(I=>I.id),_debug:{scene:c,renderer:o,npcs:Z,camera:l},get focused(){return W.focus},get moving(){return W.t<1},get frames(){return Re},get lost(){return Pn},get running(){return Kt},info(){return{gpu:bt,software:Ht,heights:Object.fromEntries(Object.values(Z).map(I=>[I.id,+I.modelH.toFixed(3)])),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,textures:o.info.memory.textures,geometries:o.info.memory.geometries,lights:it.length,merged:z,npcs:Object.keys(Z).length,models:Object.keys(ve).filter(I=>ve[I]).length,missing:ie,pixelRatio:o.getPixelRatio(),size:[r(),a()]}},portrait:pt,react(I,K){let Q={Yes:"Yes",No:"No",Wave:"Wave",Punch:"Punch",Think:null,Sword:"Sword",Hit:"HitReact"};return Q[K]===null?!1:Ke(I,Q[K]||K)},sample(){o.render(c,l);let I=o.getContext(),K=I.drawingBufferWidth,Q=I.drawingBufferHeight,se=new Uint8Array(4),de=0,xe=0,Xe=0,we=0;for(let ot=1;ot<24;ot++)for(let Ft=1;Ft<48;Ft++){I.readPixels(Math.floor(K*Ft/48),Math.floor(Q*ot/24),1,1,I.RGBA,I.UNSIGNED_BYTE,se);let Rt=(se[0]+se[1]+se[2])/3;Xe+=Rt,we++,Rt<40&&de++,Rt>150&&xe++}return{mean:Xe/we,lo:de,hi:xe,n:we}},probe(I,K){var de,xe,Xe;let Q=o.domElement.getBoundingClientRect();xt.set((I-Q.left)/Q.width*2-1,-((K-Q.top)/Q.height)*2+1),Je.setFromCamera(xt,l);let se=Je.intersectObjects(c.children,!0).filter(we=>we.object.visible&&!we.object.isSprite&&!we.object.isPoints)[0];return se&&se.object.geometry.computeBoundingBox(),se?{bb:se.object.geometry.boundingBox?[se.object.geometry.boundingBox.min.toArray().map(we=>+we.toFixed(2)),se.object.geometry.boundingBox.max.toArray().map(we=>+we.toFixed(2))]:null,verts:se.object.geometry.attributes.position.count,map:!!se.object.material.map,p:se.point.toArray().map(we=>+we.toFixed(2)),color:(Xe=(xe=(de=se.object.material)==null?void 0:de.color)==null?void 0:xe.getHexString)==null?void 0:Xe.call(xe),name:(()=>{let we=[];for(let ot=se.object;ot;ot=ot.parent)we.push(ot.name||ot.type);return we.join("<")})(),skinned:!!se.object.isSkinnedMesh}:null},hitPoint(I){let K=te.find(Q=>Q.userData.spot===I);return K?(K.geometry.computeBoundingBox(),at.copy(K.position),at.y+=K.geometry.boundingBox.max.y*.6,at.project(l),{x:(at.x*.5+.5)*r(),y:(-at.y*.5+.5)*a()}):null},focus(I,K=.17){let Q=V.find(se=>se.id===I);return Q?(W.offGoal=K,Ne(Q.view,I),!0):!1},sit(I){let K=V.find(xe=>xe.id===I);if(!K)return!1;let Q=K.view.pos,se=K.view.target,de=I==="knife"?.35:.55;return W.offGoal=0,Ne({pos:[Q[0]+(se[0]-Q[0])*de,Q[1]+.35,Q[2]+(se[2]-Q[2])*de],target:se},I),!0},unfocus(){return W.focus?(Ne(ee,null),!0):!1},pause(){Kt=!1,fn=0,je=0,Lt.n=0,Lt.ms=0},resume(){Pn||(Kt=!0,fn=0,je=0)},dispose(){var I,K;Zn=!0,Kt=!1,cancelAnimationFrame(st),removeEventListener("resize",pi),Jn==null||Jn.disconnect(),Ot.removeEventListener("webglcontextlost",Ea),Ot.removeEventListener("pointerdown",hn),Ot.removeEventListener("pointermove",sn),Ot.removeEventListener("pointerup",on),Ot.removeEventListener("pointercancel",on);for(let Q of Object.values(Z))Q.mixer.stopAllAction();c.traverse(Q=>{Q.geometry&&Q.geometry.dispose();let se=Q.material;se&&(Array.isArray(se)?se:[se]).forEach(de=>{var xe,Xe;(xe=de.map)==null||xe.dispose(),(Xe=de.emissiveMap)==null||Xe.dispose(),de.dispose()})});for(let Q of u)(I=Q.dispose)==null||I.call(Q);for(let Q of Object.values(ve))Q==null||Q.scene.traverse(se=>{var de,xe,Xe,we,ot;(de=se.geometry)==null||de.dispose(),(Xe=(xe=se.material)==null?void 0:xe.map)==null||Xe.dispose(),(ot=(we=se.material)==null?void 0:we.dispose)==null||ot.call(we)});o.dispose(),(K=o.forceContextLoss)==null||K.call(o),Ot.remove()}}}window.PirateTavern3D={create:Sd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
