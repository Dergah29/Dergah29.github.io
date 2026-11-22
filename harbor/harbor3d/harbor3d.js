(()=>{var ol="160";var wd=0,sh=1,Td=2;var Io=1,Xs=2,qi=3,Pi=0,On=1,cn=2;var Ri=0,Ci=1,wn=2,rh=3,ah=4,Ad=5,Ps=100,Rd=101,Cd=102,oh=103,ch=104,Pd=200,Ld=201,Id=202,Dd=203,wc=204,Tc=205,Ud=206,Nd=207,Fd=208,Od=209,Hd=210,kd=211,Bd=212,zd=213,Gd=214,Vd=0,Wd=1,Xd=2,no=3,qd=4,jd=5,Yd=6,Kd=7,cl=0,Jd=1,Zd=2,ls=0,ll=1,hl=2,ul=3,Ei=4,Qd=5,dl=6,lh="attached",$d="detached",Wu=300,Mr=301,Er=302,Ac=303,Rc=304,Do=306,Hn=1e3,ii=1001,Fs=1002,Ln=1003,io=1004;var na=1005;var In=1006,fl=1007;var hs=1008;var ui=1009,ef=1010,tf=1011,pl=1012,Xu=1013,os=1014,Yi=1015,Kn=1016,qu=1017,ju=1018,Ds=1020,nf=1021,qn=1023,sf=1024,rf=1025,Us=1026,Sr=1027,af=1028,Yu=1029,of=1030,Ku=1031,Ju=1033,Xo=33776,qo=33777,jo=33778,Yo=33779,hh=35840,uh=35841,dh=35842,fh=35843,Zu=36196,ph=37492,mh=37496,gh=37808,bh=37809,xh=37810,_h=37811,vh=37812,yh=37813,Mh=37814,Eh=37815,Sh=37816,wh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Ko=36492,Ph=36494,Lh=36495,cf=36283,Ih=36284,Dh=36285,Uh=36286,fa=2200,Uo=2201,lf=2202,wr=2300,Os=2301,Jo=2302,gr=2400,br=2401,so=2402,ml=2500,hf=2501,Qu=0,No=1,pa=2,$u=3e3,Ns=3001,uf=3200,df=3201,gl=0,ff=1,hi="",Ut="srgb",Dn="srgb-linear",bl="display-p3",Fo="display-p3-linear",ro="linear",mn="srgb",ao="rec709",oo="p3";var Ks=7680;var Nh=519,pf=512,mf=513,gf=514,ed=515,bf=516,xf=517,_f=518,vf=519,Cc=35044;var Fh="300 es",Pc=1035,Ki=2e3,co=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,ia=Math.PI/180,Tr=180/Math.PI;function Mi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Xn(s,e,t){return Math.max(e,Math.min(t,s))}function xl(s,e){return(s%e+e)%e}function yf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Mf(s,e,t){return s!==e?(t-s)/(e-s):0}function sa(s,e,t){return(1-t)*s+t*e}function Ef(s,e,t,n){return sa(s,e,1-Math.exp(-t*n))}function Sf(s,e=1){return e-Math.abs(xl(s,e*2)-e)}function wf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rf(s,e){return s+Math.random()*(e-s)}function Cf(s){return s*(.5-Math.random())}function Pf(s){s!==void 0&&(Oh=s);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(s){return s*ia}function If(s){return s*Tr}function Lc(s){return(s&s-1)===0&&s!==0}function Df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*m,o*l);break;case"YXY":s.set(c*m,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ma={DEG2RAD:ia,RAD2DEG:Tr,generateUUID:Mi,clamp:Xn,euclideanModulo:xl,mapLinear:yf,inverseLerp:Mf,lerp:sa,damp:Ef,pingpong:Sf,smoothstep:wf,smootherstep:Tf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Pf,degToRad:Lf,radToDeg:If,isPowerOfTwo:Lc,ceilPowerOfTwo:Df,floorPowerOfTwo:lo,setQuaternionFromProperEuler:Uf,normalize:un,denormalize:Ai},ft=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],b=i[0],p=i[3],f=i[6],v=i[1],x=i[4],A=i[7],I=i[2],R=i[5],E=i[8];return r[0]=a*b+o*v+c*I,r[3]=a*p+o*x+c*R,r[6]=a*f+o*A+c*E,r[1]=l*b+u*v+h*I,r[4]=l*p+u*x+h*R,r[7]=l*f+u*A+h*E,r[2]=d*b+m*v+g*I,r[5]=d*p+m*x+g*R,r[8]=d*f+m*A+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=h*b,e[1]=(i*l-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(u*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=m*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new Jt;function td(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){let s=oa("canvas");return s.style.display="block",s}var Hh={};function ra(s){s in Hh||(Hh[s]=!0,console.warn(s))}var kh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[Dn]:{transfer:ro,primaries:ao,toReference:s=>s,fromReference:s=>s},[Ut]:{transfer:mn,primaries:ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fo]:{transfer:ro,primaries:oo,toReference:s=>s.applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(kh)},[bl]:{transfer:mn,primaries:oo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(kh).convertLinearToSRGB()}},Ff=new Set([Dn,Fo]),nn={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ff.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=wa[e].toReference,i=wa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wa[s].primaries},getTransfer:function(s){return s===hi?ro:wa[s].transfer}};function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Js,ho=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=oa("canvas")),Js.width=e.width,Js.height=e.height;let n=Js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Of=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($o(i[a].image)):r.push($o(i[a]))}else r=$o(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $o(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hf=0,Gn=class s extends Ji{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ii,i=ii,r=In,a=hs,o=qn,c=ui,l=s.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Mi(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ns?Ut:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Ns:$u}set encoding(e){ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ns?Ut:hi}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Wu;Gn.DEFAULT_ANISOTROPY=1;var bn=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],b=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,A=(m+1)/2,I=(f+1)/2,R=(u+d)/4,E=(h+b)/4,j=(g+p)/4;return x>A&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=E/n):A>I?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=R/i,r=j/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=E/r,i=j/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-b)/v,this.z=(d-u)/v,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bn(0,0,e,t),this.scissorTest=!1,this.viewport=new bn(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ns?Ut:hi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends Gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dc=class extends Gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],m=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==d||l!==m||u!==g){let p=1-o,f=c*d+l*m+u*g+h*b,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let I=Math.sqrt(x),R=Math.atan2(I,f*v);p=Math.sin(p*R)/I,o=Math.sin(o*R)/I}let A=o*v;if(c=c*p+d*A,l=l*p+m*A,u=u*p+g*A,h=h*p+b*A,p===1-o){let I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new D,zh=new Pn,kn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Aa.subVectors(this.max,qr),Zs.subVectors(e.a,qr),Qs.subVectors(e.b,qr),$s.subVectors(e.c,qr),ns.subVectors(Qs,Zs),is.subVectors($s,Qs),ws.subVectors(Zs,$s);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ws.z,ws.y,ns.z,0,-ns.x,is.z,0,-is.x,ws.z,0,-ws.x,-ns.y,ns.x,0,-is.y,is.x,0,-ws.y,ws.x,0];return!tc(t,Zs,Qs,$s,Aa)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,Zs,Qs,$s,Aa))?!1:(Ra.crossVectors(ns,is),t=[Ra.x,Ra.y,Ra.z],tc(t,Zs,Qs,$s,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new D,new D,new D,new D,new D,new D,new D,new D],_i=new D,Ta=new kn,Zs=new D,Qs=new D,$s=new D,ns=new D,is=new D,ws=new D,qr=new D,Aa=new D,Ra=new D,Ts=new D;function tc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ts.fromArray(s,r);let o=i.x*Math.abs(Ts.x)+i.y*Math.abs(Ts.y)+i.z*Math.abs(Ts.z),c=e.dot(Ts),l=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var kf=new kn,jr=new D,nc=new D,si=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(nc)),this.expandByPoint(jr.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new D,ic=new D,Ca=new D,ss=new D,sc=new D,Pa=new D,rc=new D,Hs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ic.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=ss.dot(this.direction),c=-ss.dot(Ca),l=ss.lengthSq(),u=Math.abs(1-a*a),h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let b=1/u;h*=b,d*=b,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ic).addScaledVector(Ca,d),m}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),i=zi.dot(zi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,r){sc.subVectors(t,e),Pa.subVectors(n,e),rc.crossVectors(sc,Pa);let a=this.direction.dot(rc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ss.subVectors(this.origin,e);let c=o*this.direction.dot(Pa.crossVectors(ss,Pa));if(c<0)return null;let l=o*this.direction.dot(sc.cross(ss));if(l<0||c+l>a)return null;let u=-o*ss.dot(rc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,d,m,g,b,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,m,g,b,p)}set(e,t,n,i,r,a,o,c,l,u,h,d,m,g,b,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=b,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,m=c*h,g=l*u,b=l*h;t[0]=d+b*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,m=c*h,g=l*u,b=l*h;t[0]=d-b*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,m=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+b,t[1]=c*h,t[5]=b*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-b*h}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+b,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,zf)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),rs.crossVectors(n,ti),rs.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),rs.crossVectors(n,ti)),rs.normalize(),La.crossVectors(ti,rs),i[0]=rs.x,i[4]=La.x,i[8]=ti.x,i[1]=rs.y,i[5]=La.y,i[9]=ti.y,i[2]=rs.z,i[6]=La.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],b=n[6],p=n[10],f=n[14],v=n[3],x=n[7],A=n[11],I=n[15],R=i[0],E=i[4],j=i[8],w=i[12],P=i[1],ce=i[5],pe=i[9],re=i[13],B=i[2],ae=i[6],me=i[10],ve=i[14],xe=i[3],_e=i[7],Le=i[11],Ue=i[15];return r[0]=a*R+o*P+c*B+l*xe,r[4]=a*E+o*ce+c*ae+l*_e,r[8]=a*j+o*pe+c*me+l*Le,r[12]=a*w+o*re+c*ve+l*Ue,r[1]=u*R+h*P+d*B+m*xe,r[5]=u*E+h*ce+d*ae+m*_e,r[9]=u*j+h*pe+d*me+m*Le,r[13]=u*w+h*re+d*ve+m*Ue,r[2]=g*R+b*P+p*B+f*xe,r[6]=g*E+b*ce+p*ae+f*_e,r[10]=g*j+b*pe+p*me+f*Le,r[14]=g*w+b*re+p*ve+f*Ue,r[3]=v*R+x*P+A*B+I*xe,r[7]=v*E+x*ce+A*ae+I*_e,r[11]=v*j+x*pe+A*me+I*Le,r[15]=v*w+x*re+A*ve+I*Ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],b=e[7],p=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*m-n*c*m)+b*(+t*c*m-t*l*d+r*a*d-i*a*m+i*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],b=e[13],p=e[14],f=e[15],v=h*p*l-b*d*l+b*c*m-o*p*m-h*c*f+o*d*f,x=g*d*l-u*p*l-g*c*m+a*p*m+u*c*f-a*d*f,A=u*b*l-g*h*l+g*o*m-a*b*m-u*o*f+a*h*f,I=g*h*c-u*b*c-g*o*d+a*b*d+u*o*p-a*h*p,R=t*v+n*x+i*A+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/R;return e[0]=v*E,e[1]=(b*d*r-h*p*r-b*i*m+n*p*m+h*i*f-n*d*f)*E,e[2]=(o*p*r-b*c*r+b*i*l-n*p*l-o*i*f+n*c*f)*E,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*m-n*c*m)*E,e[4]=x*E,e[5]=(u*p*r-g*d*r+g*i*m-t*p*m-u*i*f+t*d*f)*E,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*f-t*c*f)*E,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*m+t*c*m)*E,e[8]=A*E,e[9]=(g*h*r-u*b*r-g*n*m+t*b*m+u*n*f-t*h*f)*E,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*f+t*o*f)*E,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*E,e[12]=I*E,e[13]=(u*b*i-g*h*i+g*n*d-t*b*d-u*n*p+t*h*p)*E,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*p-t*o*p)*E,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,b=a*u,p=a*h,f=o*h,v=c*l,x=c*u,A=c*h,I=n.x,R=n.y,E=n.z;return i[0]=(1-(b+f))*I,i[1]=(m+A)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(m-A)*R,i[5]=(1-(d+f))*R,i[6]=(p+v)*R,i[7]=0,i[8]=(g+x)*E,i[9]=(p-v)*E,i[10]=(1-(d+b))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=er.set(i[0],i[1],i[2]).length(),a=er.set(i[4],i[5],i[6]).length(),o=er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);let l=1/r,u=1/a,h=1/o;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ki){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),m,g;if(o===Ki)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===co)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ki){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*l,m=(n+i)*u,g,b;if(o===Ki)g=(a+r)*h,b=-2*h;else if(o===co)g=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new D,vi=new Yt,Bf=new D(0,0,0),zf=new D(1,1,1),rs=new D,La=new D,ti=new D,Gh=new Yt,Vh=new Pn,po=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};po.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gf=0,Wh=new D,tr=new Pn,Gi=new Yt,Ia=new D,Yr=new D,Vf=new D,Wf=new Pn,Xh=new D(1,0,0),qh=new D(0,1,0),jh=new D(0,0,1),Xf={type:"added"},qf={type:"removed"},xn=class s extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new po,n=new Pn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Jt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Yr,Ia,this.up):Gi.lookAt(Ia,Yr,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Gi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};xn.DEFAULT_UP=new D(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new D,Vi=new D,ac=new D,Wi=new D,nr=new D,ir=new D,Yh=new D,oc=new D,cc=new D,lc=new D,Da=!1,Is=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yi.subVectors(e,t),i.cross(yi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yi.subVectors(i,t),Vi.subVectors(n,t),ac.subVectors(e,t);let a=yi.dot(yi),o=yi.dot(Vi),c=yi.dot(ac),l=Vi.dot(Vi),u=Vi.dot(ac),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,n,i,r,a,o,c){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wi.x),c.addScaledVector(a,Wi.y),c.addScaledVector(o,Wi.z),c)}static isFrontFacing(e,t,n,i){return yi.subVectors(n,t),Vi.subVectors(e,t),yi.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),yi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;nr.subVectors(i,n),ir.subVectors(r,n),oc.subVectors(e,n);let c=nr.dot(oc),l=ir.dot(oc);if(c<=0&&l<=0)return t.copy(n);cc.subVectors(e,i);let u=nr.dot(cc),h=ir.dot(cc);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(nr,a);lc.subVectors(e,r);let m=nr.dot(lc),g=ir.dot(lc);if(g>=0&&m<=g)return t.copy(r);let b=m*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ir,o);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Yh.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Yh,o);let f=1/(p+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function hc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nn.workingColorSpace){if(e=xl(e,1),t=Xn(t,0,1),n=Xn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return nn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return nn.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Xn(Wn.r*255,0,255))*65536+Math.round(Xn(Wn.g*255,0,255))*256+Math.round(Xn(Wn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(Wn.copy(this),t);let n=Wn.r,i=Wn.g,r=Wn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ut){nn.fromWorkingColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,i=Wn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Ua);let n=sa(as.h,Ua.h,t),i=sa(as.s,Ua.s,t),r=sa(as.l,Ua.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new ze;ze.NAMES=nd;var jf=0,Jn=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Ci,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Cn=new D,Na=new ft,on=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}};var mo=class extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tn=class extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Yf=0,li=new Yt,uc=new xn,sr=new D,ni=new kn,Kr=new kn,Fn=new D,ln=class s extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?go:mo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fn.addVectors(ni.min,Kr.min),ni.expandByPoint(Fn),Fn.addVectors(ni.max,Kr.max),ni.expandByPoint(Fn)):(ni.expandByPoint(Kr.min),ni.expandByPoint(Kr.max))}ni.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Fn.fromBufferAttribute(o,l),c&&(sr.fromBufferAttribute(e,l),Fn.add(sr)),i=Math.max(i,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<o;P++)l[P]=new D,u[P]=new D;let h=new D,d=new D,m=new D,g=new ft,b=new ft,p=new ft,f=new D,v=new D;function x(P,ce,pe){h.fromArray(i,P*3),d.fromArray(i,ce*3),m.fromArray(i,pe*3),g.fromArray(a,P*2),b.fromArray(a,ce*2),p.fromArray(a,pe*2),d.sub(h),m.sub(h),b.sub(g),p.sub(g);let re=1/(b.x*p.y-p.x*b.y);isFinite(re)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-b.y).multiplyScalar(re),v.copy(m).multiplyScalar(b.x).addScaledVector(d,-p.x).multiplyScalar(re),l[P].add(f),l[ce].add(f),l[pe].add(f),u[P].add(v),u[ce].add(v),u[pe].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let P=0,ce=A.length;P<ce;++P){let pe=A[P],re=pe.start,B=pe.count;for(let ae=re,me=re+B;ae<me;ae+=3)x(n[ae+0],n[ae+1],n[ae+2])}let I=new D,R=new D,E=new D,j=new D;function w(P){E.fromArray(r,P*3),j.copy(E);let ce=l[P];I.copy(ce),I.sub(E.multiplyScalar(E.dot(ce))).normalize(),R.crossVectors(j,ce);let re=R.dot(u[P])<0?-1:1;c[P*4]=I.x,c[P*4+1]=I.y,c[P*4+2]=I.z,c[P*4+3]=re}for(let P=0,ce=A.length;P<ce;++P){let pe=A[P],re=pe.start,B=pe.count;for(let ae=re,me=re+B;ae<me;ae+=3)w(n[ae+0]),w(n[ae+1]),w(n[ae+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),b=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),m=0,g=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new Yt,As=new Hs,Fa=new si,Jh=new D,rr=new D,ar=new D,or=new D,dc=new D,Oa=new D,Ha=new ft,ka=new ft,Ba=new ft,Zh=new D,Qh=new D,$h=new D,za=new D,Ga=new D,We=class extends xn{constructor(e=new ln,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(dc.fromBufferAttribute(h,e),a?Oa.addScaledVector(dc,u):Oa.addScaledVector(dc.sub(t),u))}t.add(Oa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Fa.containsPoint(As.origin)===!1&&(As.intersectSphere(Fa,Jh)===null||As.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),As.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let p=d[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=v,I=x;A<I;A+=3){let R=o.getX(A),E=o.getX(A+1),j=o.getX(A+2);i=Va(this,f,e,n,l,u,h,R,E,j),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let p=g,f=b;p<f;p+=3){let v=o.getX(p),x=o.getX(p+1),A=o.getX(p+2);i=Va(this,a,e,n,l,u,h,v,x,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let p=d[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=v,I=x;A<I;A+=3){let R=A,E=A+1,j=A+2;i=Va(this,f,e,n,l,u,h,R,E,j),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let p=g,f=b;p<f;p+=3){let v=p,x=p+1,A=p+2;i=Va(this,a,e,n,l,u,h,v,x,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Kf(s,e,t,n,i,r,a,o){let c;if(e.side===On?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Pi,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:s}}function Va(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,rr),s.getVertexPosition(c,ar),s.getVertexPosition(l,or);let u=Kf(s,e,t,n,rr,ar,or,za);if(u){i&&(Ha.fromBufferAttribute(i,o),ka.fromBufferAttribute(i,c),Ba.fromBufferAttribute(i,l),u.uv=Is.getInterpolation(za,rr,ar,or,Ha,ka,Ba,new ft)),r&&(Ha.fromBufferAttribute(r,o),ka.fromBufferAttribute(r,c),Ba.fromBufferAttribute(r,l),u.uv1=Is.getInterpolation(za,rr,ar,or,Ha,ka,Ba,new ft),u.uv2=u.uv1),a&&(Zh.fromBufferAttribute(a,o),Qh.fromBufferAttribute(a,c),$h.fromBufferAttribute(a,l),u.normal=Is.getInterpolation(za,rr,ar,or,Zh,Qh,$h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};Is.getNormal(rr,ar,or,h.normal),u.face=h}return u}var zt=class s extends ln{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2));function g(b,p,f,v,x,A,I,R,E,j,w){let P=A/E,ce=I/j,pe=A/2,re=I/2,B=R/2,ae=E+1,me=j+1,ve=0,xe=0,_e=new D;for(let Le=0;Le<me;Le++){let Ue=Le*ce-re;for(let $e=0;$e<ae;$e++){let de=$e*P-pe;_e[b]=de*v,_e[p]=Ue*x,_e[f]=B,l.push(_e.x,_e.y,_e.z),_e[b]=0,_e[p]=0,_e[f]=R>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push($e/E),h.push(1-Le/j),ve+=1}}for(let Le=0;Le<j;Le++)for(let Ue=0;Ue<E;Ue++){let $e=d+Ue+ae*Le,de=d+Ue+ae*(Le+1),Ee=d+(Ue+1)+ae*(Le+1),ne=d+(Ue+1)+ae*Le;c.push($e,de,ne),c.push(de,Ee,ne),xe+=6}o.addGroup(m,xe,w),m+=xe,d+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yn(s){let e={};for(let t=0;t<s.length;t++){let n=Ar(s[t]);for(let i in n)e[i]=n[i]}return e}function Jf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function id(s){return s.getRenderTarget()===null?s.outputColorSpace:nn.workingColorSpace}var pi={clone:Ar,merge:Yn},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dn=class extends bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,lr=1,Uc=class extends xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(cr,lr,e,t);i.layers=this.layers,this.add(i);let r=new dn(cr,lr,e,t);r.layers=this.layers,this.add(r);let a=new dn(cr,lr,e,t);a.layers=this.layers,this.add(a);let o=new dn(cr,lr,e,t);o.layers=this.layers,this.add(o);let c=new dn(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new dn(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends Gn{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ns?Ut:hi),this.texture=new xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zt(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Ri});r.uniforms.tEquirect.value=t;let a=new We(i,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=In),new Uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},fc=new D,$f=new D,ep=new Jt,ji=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fc.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new si,Wa=new D,la=class{constructor(e=new ji,t=new ji,n=new ji,i=new ji,r=new ji,a=new ji){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],b=i[10],p=i[11],f=i[12],v=i[13],x=i[14],A=i[15];if(n[0].setComponents(c-r,d-l,p-m,A-f).normalize(),n[1].setComponents(c+r,d+l,p+m,A+f).normalize(),n[2].setComponents(c+a,d+u,p+g,A+v).normalize(),n[3].setComponents(c-a,d-u,p-g,A-v).normalize(),n[4].setComponents(c-o,d-h,p-b,A-x).normalize(),t===Ki)n[5].setComponents(c+o,d+h,p+b,A+x).normalize();else if(t===co)n[5].setComponents(o,h,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Wa.x=i.normal.x>0?e.max.x:e.min.x,Wa.y=i.normal.y>0?e.max.y:e.min.y,Wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function tp(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,d=l.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){let d=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),m.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let b=0,p=g.length;b<p;b++){let f=g[b];t?s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}var Zt=class s extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],b=[],p=[];for(let f=0;f<u;f++){let v=f*d-a;for(let x=0;x<l;x++){let A=x*h-r;g.push(A,-v,0),b.push(0,0,1),p.push(x/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){let x=v+l*f,A=v+l*(f+1),I=v+1+l*(f+1),R=v+1+l*f;m.push(x,A,R),m.push(A,I,R)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(b,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},np=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,jt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:vp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:Ep,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Kp,envmap_vertex:Hp,fog_vertex:kp,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:jp,lights_pars_begin:Yp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Qp,lights_phong_pars_fragment:$p,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:bm,morphtarget_vertex:xm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Em,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Hm,shadowmap_vertex:km,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:jm,tonemapping_pars_fragment:Ym,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Zm,uv_pars_vertex:Qm,uv_vertex:$m,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:bg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:Eg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Ug},Je={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Ti={basic:{uniforms:Yn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Yn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new ze(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Yn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Yn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Yn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new ze(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Yn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Yn([Je.points,Je.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Yn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Yn([Je.common,Je.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Yn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Yn([Je.sprite,Je.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Yn([Je.common,Je.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Yn([Je.lights,Je.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Ti.physical={uniforms:Yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Xa={r:0,b:0,g:0};function Ng(s,e,t,n,i,r,a){let o=new ze(0),c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Do)?(u===void 0&&(u=new We(new zt(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Ar(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nn.getTransfer(x.colorSpace)!==mn,(h!==x||d!==x.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new We(new Zt(2,2),new _n({name:"BackgroundMaterial",uniforms:Ar(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=nn.getTransfer(x.colorSpace)!==mn,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function b(p,f){p.getRGB(Xa,id(s)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,b(o,c)},render:g}}function Fg(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,u=!1;function h(B,ae,me,ve,xe){let _e=!1;if(a){let Le=b(ve,me,ae);l!==Le&&(l=Le,m(l.object)),_e=f(B,ve,me,xe),_e&&v(B,ve,me,xe)}else{let Le=ae.wireframe===!0;(l.geometry!==ve.id||l.program!==me.id||l.wireframe!==Le)&&(l.geometry=ve.id,l.program=me.id,l.wireframe=Le,_e=!0)}xe!==null&&t.update(xe,s.ELEMENT_ARRAY_BUFFER),(_e||u)&&(u=!1,j(B,ae,me,ve),xe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(xe).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function b(B,ae,me){let ve=me.wireframe===!0,xe=o[B.id];xe===void 0&&(xe={},o[B.id]=xe);let _e=xe[ae.id];_e===void 0&&(_e={},xe[ae.id]=_e);let Le=_e[ve];return Le===void 0&&(Le=p(d()),_e[ve]=Le),Le}function p(B){let ae=[],me=[],ve=[];for(let xe=0;xe<i;xe++)ae[xe]=0,me[xe]=0,ve[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:me,attributeDivisors:ve,object:B,attributes:{},index:null}}function f(B,ae,me,ve){let xe=l.attributes,_e=ae.attributes,Le=0,Ue=me.getAttributes();for(let $e in Ue)if(Ue[$e].location>=0){let Ee=xe[$e],ne=_e[$e];if(ne===void 0&&($e==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),$e==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),Ee===void 0||Ee.attribute!==ne||ne&&Ee.data!==ne.data)return!0;Le++}return l.attributesNum!==Le||l.index!==ve}function v(B,ae,me,ve){let xe={},_e=ae.attributes,Le=0,Ue=me.getAttributes();for(let $e in Ue)if(Ue[$e].location>=0){let Ee=_e[$e];Ee===void 0&&($e==="instanceMatrix"&&B.instanceMatrix&&(Ee=B.instanceMatrix),$e==="instanceColor"&&B.instanceColor&&(Ee=B.instanceColor));let ne={};ne.attribute=Ee,Ee&&Ee.data&&(ne.data=Ee.data),xe[$e]=ne,Le++}l.attributes=xe,l.attributesNum=Le,l.index=ve}function x(){let B=l.newAttributes;for(let ae=0,me=B.length;ae<me;ae++)B[ae]=0}function A(B){I(B,0)}function I(B,ae){let me=l.newAttributes,ve=l.enabledAttributes,xe=l.attributeDivisors;me[B]=1,ve[B]===0&&(s.enableVertexAttribArray(B),ve[B]=1),xe[B]!==ae&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,ae),xe[B]=ae)}function R(){let B=l.newAttributes,ae=l.enabledAttributes;for(let me=0,ve=ae.length;me<ve;me++)ae[me]!==B[me]&&(s.disableVertexAttribArray(me),ae[me]=0)}function E(B,ae,me,ve,xe,_e,Le){Le===!0?s.vertexAttribIPointer(B,ae,me,xe,_e):s.vertexAttribPointer(B,ae,me,ve,xe,_e)}function j(B,ae,me,ve){if(n.isWebGL2===!1&&(B.isInstancedMesh||ve.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let xe=ve.attributes,_e=me.getAttributes(),Le=ae.defaultAttributeValues;for(let Ue in _e){let $e=_e[Ue];if($e.location>=0){let de=xe[Ue];if(de===void 0&&(Ue==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),Ue==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),de!==void 0){let Ee=de.normalized,ne=de.itemSize,Ie=t.get(de);if(Ie===void 0)continue;let pt=Ie.buffer,wt=Ie.type,et=Ie.bytesPerElement,Oe=n.isWebGL2===!0&&(wt===s.INT||wt===s.UNSIGNED_INT||de.gpuType===Xu);if(de.isInterleavedBufferAttribute){let je=de.data,Y=je.stride,an=de.offset;if(je.isInstancedInterleavedBuffer){for(let ut=0;ut<$e.locationSize;ut++)I($e.location+ut,je.meshPerAttribute);B.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let ut=0;ut<$e.locationSize;ut++)A($e.location+ut);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let ut=0;ut<$e.locationSize;ut++)E($e.location+ut,ne/$e.locationSize,wt,Ee,Y*et,(an+ne/$e.locationSize*ut)*et,Oe)}else{if(de.isInstancedBufferAttribute){for(let je=0;je<$e.locationSize;je++)I($e.location+je,de.meshPerAttribute);B.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let je=0;je<$e.locationSize;je++)A($e.location+je);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let je=0;je<$e.locationSize;je++)E($e.location+je,ne/$e.locationSize,wt,Ee,ne*et,ne/$e.locationSize*je*et,Oe)}}else if(Le!==void 0){let Ee=Le[Ue];if(Ee!==void 0)switch(Ee.length){case 2:s.vertexAttrib2fv($e.location,Ee);break;case 3:s.vertexAttrib3fv($e.location,Ee);break;case 4:s.vertexAttrib4fv($e.location,Ee);break;default:s.vertexAttrib1fv($e.location,Ee)}}}}R()}function w(){pe();for(let B in o){let ae=o[B];for(let me in ae){let ve=ae[me];for(let xe in ve)g(ve[xe].object),delete ve[xe];delete ae[me]}delete o[B]}}function P(B){if(o[B.id]===void 0)return;let ae=o[B.id];for(let me in ae){let ve=ae[me];for(let xe in ve)g(ve[xe].object),delete ve[xe];delete ae[me]}delete o[B.id]}function ce(B){for(let ae in o){let me=o[ae];if(me[B.id]===void 0)continue;let ve=me[B.id];for(let xe in ve)g(ve[xe].object),delete ve[xe];delete me[B.id]}}function pe(){re(),u=!0,l!==c&&(l=c,m(l.object))}function re(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:pe,resetDefaultState:re,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:ce,initAttributes:x,enableAttribute:A,disableUnusedAttributes:R}}function Og(s,e,t,n){let i=n.isWebGL2,r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let b=0;b<d;b++)g+=h[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Hg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=a||e.has("OES_texture_float"),I=x&&A,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:R}}function kg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new ji,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,b=h.clipIntersection,p=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{let v=r?0:n,x=v*4,A=f.clippingState||null;c.value=A,A=u(g,d,x,m);for(let I=0;I!==x;++I)A[I]=t[I];f.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let b=h!==null?h.length:0,p=null;if(b!==0){if(p=c.value,g!==!0||p===null){let f=m+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,A=m;x!==b;++x,A+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function Bg(s){let e=new WeakMap;function t(a,o){return o===Ac?a.mapping=Mr:o===Rc&&(a.mapping=Er),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ac||o===Rc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Nc(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var us=class extends bo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xr=4,eu=[.125,.215,.35,.446,.526,.582],Ls=20,pc=new us,tu=new ze,mc=null,gc=0,bc=0,Cs=(1+Math.sqrt(5))/2,hr=1/Cs,nu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Cs,hr),new D(0,Cs,-hr),new D(hr,0,Cs),new D(-hr,0,Cs),new D(Cs,hr,0),new D(-Cs,hr,0)],_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,bc),e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Kn,format:qn,colorSpace:Dn,depthBuffer:!1},i=iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Gg(r,e,t)}return i}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,i){let o=new dn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tu),u.toneMapping=ls,u.autoClear=!1;let m=new en({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new We(new zt,m),b=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,b=!0):(m.color.copy(tu),b=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):v===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let x=this._cubeSize;qa(i,v*x,f>2?x:0,x,x),u.setRenderTarget(i),b&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Mr||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nu[(i-1)%nu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new We(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ls-1),b=r/g,p=isFinite(r)?1+Math.floor(u*b):Ls;p>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ls}`);let f=[],v=0;for(let E=0;E<Ls;++E){let j=E/b,w=Math.exp(-j*j/2);f.push(w),E===0?v+=w:E<p&&(v+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let A=this._sizeLods[i],I=3*A*(i>x-xr?i-x+xr:0),R=4*(this._cubeSize-A);qa(t,I,R,3*A,2*A),c.setRenderTarget(t),c.render(h,pc)}};function zg(s){let e=[],t=[],n=[],i=s,r=s-xr+1+eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-xr?c=eu[a-s+xr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,b=3,p=2,f=1,v=new Float32Array(b*g*m),x=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let R=0;R<m;R++){let E=R%3*2/3-1,j=R>2?0:-1,w=[E,j,0,E+2/3,j,0,E+2/3,j+1,0,E,j,0,E+2/3,j+1,0,E,j+1,0];v.set(w,b*g*R),x.set(d,p*g*R);let P=[R,R,R,R,R,R];A.set(P,f*g*R)}let I=new ln;I.setAttribute("position",new on(v,b)),I.setAttribute("uv",new on(x,p)),I.setAttribute("faceIndex",new on(A,f)),e.push(I),i>xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function iu(s,e,t){let n=new Rn(s,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gg(s,e,t){let n=new Float32Array(Ls),i=new D(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function su(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ru(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Vg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ac||c===Rc,u=c===Mr||c===Er;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new _o(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new _o(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xg(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let p=0,f=b.length;p<f;p++)e.remove(b[p])}d.removeEventListener("dispose",a),delete i[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let m=h.morphAttributes;for(let g in m){let b=m[g];for(let p=0,f=b.length;p<f;p++)e.update(b[p],s.ARRAY_BUFFER)}}function l(h){let d=[],m=h.index,g=h.attributes.position,b=0;if(m!==null){let v=m.array;b=m.version;for(let x=0,A=v.length;x<A;x+=3){let I=v[x+0],R=v[x+1],E=v[x+2];d.push(I,R,R,E,E,I)}}else if(g!==void 0){let v=g.array;b=g.version;for(let x=0,A=v.length/3-1;x<A;x+=3){let I=x+0,R=x+1,E=x+2;d.push(I,R,R,E,E,I)}}else return;let p=new(td(d)?go:mo)(d,1);p.version=b;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function qg(s,e,t,n){let i=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){s.drawElements(r,g,o,m*c),t.update(g,r,1)}function h(m,g,b){if(b===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,b),t.update(g,r,b)}function d(m,g,b){if(b===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<b;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,b);let f=0;for(let v=0;v<b;v++)f+=g[v];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function jg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yg(s,e){return s[0]-e[0]}function Kg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Jg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new bn,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,b=r.get(u);if(b===void 0||b.count!==g){let B=function(){pe.dispose(),r.delete(u),u.removeEventListener("dispose",B)};b!==void 0&&b.texture.dispose();let v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],E=u.morphAttributes.color||[],j=0;v===!0&&(j=1),x===!0&&(j=2),A===!0&&(j=3);let w=u.attributes.position.count*j,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let ce=new Float32Array(w*P*4*g),pe=new fo(ce,w,P,g);pe.type=Yi,pe.needsUpdate=!0;let re=j*4;for(let ae=0;ae<g;ae++){let me=I[ae],ve=R[ae],xe=E[ae],_e=w*P*4*ae;for(let Le=0;Le<me.count;Le++){let Ue=Le*re;v===!0&&(a.fromBufferAttribute(me,Le),ce[_e+Ue+0]=a.x,ce[_e+Ue+1]=a.y,ce[_e+Ue+2]=a.z,ce[_e+Ue+3]=0),x===!0&&(a.fromBufferAttribute(ve,Le),ce[_e+Ue+4]=a.x,ce[_e+Ue+5]=a.y,ce[_e+Ue+6]=a.z,ce[_e+Ue+7]=0),A===!0&&(a.fromBufferAttribute(xe,Le),ce[_e+Ue+8]=a.x,ce[_e+Ue+9]=a.y,ce[_e+Ue+10]=a.z,ce[_e+Ue+11]=xe.itemSize===4?a.w:1)}}b={count:g,texture:pe,size:new ft(w,P)},r.set(u,b),u.addEventListener("dispose",B)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];let f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",f),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let m=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<m;x++){let A=g[x];A[0]=x,A[1]=d[x]}g.sort(Kg);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Yg);let b=u.morphAttributes.position,p=u.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let A=o[x],I=A[0],R=A[1];I!==Number.MAX_SAFE_INTEGER&&R?(b&&u.getAttribute("morphTarget"+x)!==b[I]&&u.setAttribute("morphTarget"+x,b[I]),p&&u.getAttribute("morphNormal"+x)!==p[I]&&u.setAttribute("morphNormal"+x,p[I]),i[x]=R,f+=R):(b&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let v=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zg(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var vo=class extends Gn{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Us,u!==Us&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=os),n===void 0&&u===Sr&&(n=Ds),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rd=new Gn,ad=new vo(1,1);ad.compareFunction=ed;var od=new fo,cd=new Dc,ld=new xo,au=[],ou=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function Nr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=au[i];if(r===void 0&&(r=new Float32Array(i),au[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Un(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oo(s,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function e0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function t0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function n0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Un(t,n))return;hu.set(n),s.uniformMatrix2fv(this.addr,!1,hu),Nn(t,n)}}function i0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Un(t,n))return;lu.set(n),s.uniformMatrix3fv(this.addr,!1,lu),Nn(t,n)}}function s0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Un(t,n))return;cu.set(n),s.uniformMatrix4fv(this.addr,!1,cu),Nn(t,n)}}function r0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function c0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function l0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function u0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function d0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function f0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?ad:rd;t.setTexture2D(e||r,i)}function p0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cd,i)}function m0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ld,i)}function g0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||od,i)}function b0(s){switch(s){case 5126:return Qg;case 35664:return $g;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(s,e){s.uniform1fv(this.addr,e)}function _0(s,e){let t=Nr(e,this.size,2);s.uniform2fv(this.addr,t)}function v0(s,e){let t=Nr(e,this.size,3);s.uniform3fv(this.addr,t)}function y0(s,e){let t=Nr(e,this.size,4);s.uniform4fv(this.addr,t)}function M0(s,e){let t=Nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E0(s,e){let t=Nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S0(s,e){let t=Nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w0(s,e){s.uniform1iv(this.addr,e)}function T0(s,e){s.uniform2iv(this.addr,e)}function A0(s,e){s.uniform3iv(this.addr,e)}function R0(s,e){s.uniform4iv(this.addr,e)}function C0(s,e){s.uniform1uiv(this.addr,e)}function P0(s,e){s.uniform2uiv(this.addr,e)}function L0(s,e){s.uniform3uiv(this.addr,e)}function I0(s,e){s.uniform4uiv(this.addr,e)}function D0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);Un(n,r)||(s.uniform1iv(this.addr,r),Nn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,r[a])}function U0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);Un(n,r)||(s.uniform1iv(this.addr,r),Nn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cd,r[a])}function N0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);Un(n,r)||(s.uniform1iv(this.addr,r),Nn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ld,r[a])}function F0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);Un(n,r)||(s.uniform1iv(this.addr,r),Nn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||od,r[a])}function O0(s){switch(s){case 5126:return x0;case 35664:return _0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return E0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}},Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}},Hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function uu(s,e){s.seq.push(e),s.map[e.id]=e}function H0(s,e,t){let n=s.name,i=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),a=xc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){uu(t,l===void 0?new Fc(o,s,e):new Oc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Hc(o),uu(t,h)),t=h}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);H0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function du(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var k0=37297,B0=0;function z0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function G0(s){let e=nn.getPrimaries(nn.workingColorSpace),t=nn.getPrimaries(s),n;switch(e===t?n="":e===oo&&t===ao?n="LinearDisplayP3ToLinearSRGB":e===ao&&t===oo&&(n="LinearSRGBToLinearDisplayP3"),s){case Dn:case Fo:return[n,"LinearTransferOETF"];case Ut:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+z0(s.getShaderSource(e),a)}else return i}function V0(s,e){let t=G0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function W0(s,e){let t;switch(e){case ll:t="Linear";break;case hl:t="Reinhard";break;case ul:t="OptimizedCineon";break;case Ei:t="ACESFilmic";break;case dl:t="AgX";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function X0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function q0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function j0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function _r(s){return s!==""}function pu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(s){return s.replace(K0,Z0)}var J0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z0(s,e){let t=jt[e];if(t===void 0){let n=J0.get(e);if(n!==void 0)t=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(s){return s.replace(Q0,$0)}function $0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xs?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mr:case Er:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function sb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=eb(t),l=tb(t),u=nb(t),h=ib(t),d=sb(t),m=t.isWebGL2?"":X0(t),g=q0(t),b=j0(r),p=i.createProgram(),f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(_r).join(`
`),f.length>0&&(f+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(_r).join(`
`),v.length>0&&(v+=`
`)):(f=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),v=[m,bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?jt.tonemapping_pars_fragment:"",t.toneMapping!==ls?W0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=kc(a),a=pu(a,t),a=mu(a,t),o=kc(o),o=pu(o,t),o=mu(o,t),a=gu(a),o=gu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let A=x+f+a,I=x+v+o,R=du(i,i.VERTEX_SHADER,A),E=du(i,i.FRAGMENT_SHADER,I);i.attachShader(p,R),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function j(pe){if(s.debug.checkShaderErrors){let re=i.getProgramInfoLog(p).trim(),B=i.getShaderInfoLog(R).trim(),ae=i.getShaderInfoLog(E).trim(),me=!0,ve=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,R,E);else{let xe=fu(i,R,"vertex"),_e=fu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+xe+`
`+_e)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(B===""||ae==="")&&(ve=!1);ve&&(pe.diagnostics={runnable:me,programLog:re,vertexShader:{log:B,prefix:f},fragmentShader:{log:ae,prefix:v}})}i.deleteShader(R),i.deleteShader(E),w=new yr(i,p),P=Y0(i,p)}let w;this.getUniforms=function(){return w===void 0&&j(this),w};let P;this.getAttributes=function(){return P===void 0&&j(this),P};let ce=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=i.getProgramParameter(p,k0)),ce},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=E,this}var ab=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}};function ob(s,e,t,n,i,r,a){let o=new ca,c=new Bc,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return w===0?"uv":`uv${w}`}function p(w,P,ce,pe,re){let B=pe.fog,ae=re.geometry,me=w.isMeshStandardMaterial?pe.environment:null,ve=(w.isMeshStandardMaterial?t:e).get(w.envMap||me),xe=ve&&ve.mapping===Do?ve.image.height:null,_e=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let Le=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ue=Le!==void 0?Le.length:0,$e=0;ae.morphAttributes.position!==void 0&&($e=1),ae.morphAttributes.normal!==void 0&&($e=2),ae.morphAttributes.color!==void 0&&($e=3);let de,Ee,ne,Ie;if(_e){let le=Ti[_e];de=le.vertexShader,Ee=le.fragmentShader}else de=w.vertexShader,Ee=w.fragmentShader,c.update(w),ne=c.getVertexShaderID(w),Ie=c.getFragmentShaderID(w);let pt=s.getRenderTarget(),wt=re.isInstancedMesh===!0,et=re.isBatchedMesh===!0,Oe=!!w.map,je=!!w.matcap,Y=!!ve,an=!!w.aoMap,ut=!!w.lightMap,Mt=!!w.bumpMap,st=!!w.normalMap,_t=!!w.displacementMap,O=!!w.emissiveMap,C=!!w.metalnessMap,M=!!w.roughnessMap,$=w.anisotropy>0,ye=w.clearcoat>0,Te=w.iridescence>0,Ce=w.sheen>0,Ge=w.transmission>0,Fe=$&&!!w.anisotropyMap,it=ye&&!!w.clearcoatMap,vt=ye&&!!w.clearcoatNormalMap,Tt=ye&&!!w.clearcoatRoughnessMap,Pe=Te&&!!w.iridescenceMap,Gt=Te&&!!w.iridescenceThicknessMap,Lt=Ce&&!!w.sheenColorMap,Rt=Ce&&!!w.sheenRoughnessMap,gt=!!w.specularMap,at=!!w.specularColorMap,Et=!!w.specularIntensityMap,Vt=Ge&&!!w.transmissionMap,Xt=Ge&&!!w.thicknessMap,At=!!w.gradientMap,Ne=!!w.alphaMap,H=w.alphaTest>0,qe=!!w.alphaHash,Be=!!w.extensions,dt=!!ae.attributes.uv1,Xe=!!ae.attributes.uv2,Kt=!!ae.attributes.uv3,It=ls;return w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(It=s.toneMapping),{isWebGL2:u,shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:de,fragmentShader:Ee,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:Ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:et,instancing:wt,instancingColor:wt&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Dn,map:Oe,matcap:je,envMap:Y,envMapMode:Y&&ve.mapping,envMapCubeUVHeight:xe,aoMap:an,lightMap:ut,bumpMap:Mt,normalMap:st,displacementMap:d&&_t,emissiveMap:O,normalMapObjectSpace:st&&w.normalMapType===ff,normalMapTangentSpace:st&&w.normalMapType===gl,metalnessMap:C,roughnessMap:M,anisotropy:$,anisotropyMap:Fe,clearcoat:ye,clearcoatMap:it,clearcoatNormalMap:vt,clearcoatRoughnessMap:Tt,iridescence:Te,iridescenceMap:Pe,iridescenceThicknessMap:Gt,sheen:Ce,sheenColorMap:Lt,sheenRoughnessMap:Rt,specularMap:gt,specularColorMap:at,specularIntensityMap:Et,transmission:Ge,transmissionMap:Vt,thicknessMap:Xt,gradientMap:At,opaque:w.transparent===!1&&w.blending===Ci,alphaMap:Ne,alphaTest:H,alphaHash:qe,combine:w.combine,mapUv:Oe&&b(w.map.channel),aoMapUv:an&&b(w.aoMap.channel),lightMapUv:ut&&b(w.lightMap.channel),bumpMapUv:Mt&&b(w.bumpMap.channel),normalMapUv:st&&b(w.normalMap.channel),displacementMapUv:_t&&b(w.displacementMap.channel),emissiveMapUv:O&&b(w.emissiveMap.channel),metalnessMapUv:C&&b(w.metalnessMap.channel),roughnessMapUv:M&&b(w.roughnessMap.channel),anisotropyMapUv:Fe&&b(w.anisotropyMap.channel),clearcoatMapUv:it&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:vt&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&b(w.sheenRoughnessMap.channel),specularMapUv:gt&&b(w.specularMap.channel),specularColorMapUv:at&&b(w.specularColorMap.channel),specularIntensityMapUv:Et&&b(w.specularIntensityMap.channel),transmissionMapUv:Vt&&b(w.transmissionMap.channel),thicknessMapUv:Xt&&b(w.thicknessMap.channel),alphaMapUv:Ne&&b(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(st||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:Xe,vertexUv3s:Kt,pointsUvs:re.isPoints===!0&&!!ae.attributes.uv&&(Oe||Ne),fog:!!B,useFog:w.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:re.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:$e,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ce.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&nn.getTransfer(w.map.colorSpace)===mn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===On,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Be&&w.extensions.derivatives===!0,extensionFragDepth:Be&&w.extensions.fragDepth===!0,extensionDrawBuffers:Be&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Be&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Be&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(let ce in w.defines)P.push(ce),P.push(w.defines[ce]);return w.isRawShaderMaterial===!1&&(v(P,w),x(P,w),P.push(s.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function v(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function x(w,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.matcap&&o.enable(4),P.envMap&&o.enable(5),P.normalMapObjectSpace&&o.enable(6),P.normalMapTangentSpace&&o.enable(7),P.clearcoat&&o.enable(8),P.iridescence&&o.enable(9),P.alphaTest&&o.enable(10),P.vertexColors&&o.enable(11),P.vertexAlphas&&o.enable(12),P.vertexUv1s&&o.enable(13),P.vertexUv2s&&o.enable(14),P.vertexUv3s&&o.enable(15),P.vertexTangents&&o.enable(16),P.anisotropy&&o.enable(17),P.alphaHash&&o.enable(18),P.batching&&o.enable(19),w.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function A(w){let P=g[w.type],ce;if(P){let pe=Ti[P];ce=pi.clone(pe.uniforms)}else ce=w.uniforms;return ce}function I(w,P){let ce;for(let pe=0,re=l.length;pe<re;pe++){let B=l[pe];if(B.cacheKey===P){ce=B,++ce.usedTimes;break}}return ce===void 0&&(ce=new rb(s,P,w,r),l.push(ce)),ce}function R(w){if(--w.usedTimes===0){let P=l.indexOf(w);l[P]=l[l.length-1],l.pop(),w.destroy()}}function E(w){c.remove(w)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:I,releaseProgram:R,releaseShaderCache:E,programs:l,dispose:j}}function cb(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _u(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,b,p){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:b,group:p},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=b,f.group=p),e++,f}function o(h,d,m,g,b,p){let f=a(h,d,m,g,b,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(h,d,m,g,b,p){let f=a(h,d,m,g,b,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||lb),n.length>1&&n.sort(d||xu),i.length>1&&i.sort(d||xu)}function u(){for(let h=e,d=s.length;h<d;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function hb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new _u,s.set(n,[a])):i>=r.length?(a=new _u,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ub(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function db(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fb=0;function pb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mb(s,e){let t=new ub,n=db(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);let r=new D,a=new Yt,o=new Yt;function c(u,h){let d=0,m=0,g=0;for(let pe=0;pe<9;pe++)i.probe[pe].set(0,0,0);let b=0,p=0,f=0,v=0,x=0,A=0,I=0,R=0,E=0,j=0,w=0;u.sort(pb);let P=h===!0?Math.PI:1;for(let pe=0,re=u.length;pe<re;pe++){let B=u[pe],ae=B.color,me=B.intensity,ve=B.distance,xe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=ae.r*me*P,m+=ae.g*me*P,g+=ae.b*me*P;else if(B.isLightProbe){for(let _e=0;_e<9;_e++)i.probe[_e].addScaledVector(B.sh.coefficients[_e],me);w++}else if(B.isDirectionalLight){let _e=t.get(B);if(_e.color.copy(B.color).multiplyScalar(B.intensity*P),B.castShadow){let Le=B.shadow,Ue=n.get(B);Ue.shadowBias=Le.bias,Ue.shadowNormalBias=Le.normalBias,Ue.shadowRadius=Le.radius,Ue.shadowMapSize=Le.mapSize,i.directionalShadow[b]=Ue,i.directionalShadowMap[b]=xe,i.directionalShadowMatrix[b]=B.shadow.matrix,A++}i.directional[b]=_e,b++}else if(B.isSpotLight){let _e=t.get(B);_e.position.setFromMatrixPosition(B.matrixWorld),_e.color.copy(ae).multiplyScalar(me*P),_e.distance=ve,_e.coneCos=Math.cos(B.angle),_e.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),_e.decay=B.decay,i.spot[f]=_e;let Le=B.shadow;if(B.map&&(i.spotLightMap[E]=B.map,E++,Le.updateMatrices(B),B.castShadow&&j++),i.spotLightMatrix[f]=Le.matrix,B.castShadow){let Ue=n.get(B);Ue.shadowBias=Le.bias,Ue.shadowNormalBias=Le.normalBias,Ue.shadowRadius=Le.radius,Ue.shadowMapSize=Le.mapSize,i.spotShadow[f]=Ue,i.spotShadowMap[f]=xe,R++}f++}else if(B.isRectAreaLight){let _e=t.get(B);_e.color.copy(ae).multiplyScalar(me),_e.halfWidth.set(B.width*.5,0,0),_e.halfHeight.set(0,B.height*.5,0),i.rectArea[v]=_e,v++}else if(B.isPointLight){let _e=t.get(B);if(_e.color.copy(B.color).multiplyScalar(B.intensity*P),_e.distance=B.distance,_e.decay=B.decay,B.castShadow){let Le=B.shadow,Ue=n.get(B);Ue.shadowBias=Le.bias,Ue.shadowNormalBias=Le.normalBias,Ue.shadowRadius=Le.radius,Ue.shadowMapSize=Le.mapSize,Ue.shadowCameraNear=Le.camera.near,Ue.shadowCameraFar=Le.camera.far,i.pointShadow[p]=Ue,i.pointShadowMap[p]=xe,i.pointShadowMatrix[p]=B.shadow.matrix,I++}i.point[p]=_e,p++}else if(B.isHemisphereLight){let _e=t.get(B);_e.skyColor.copy(B.color).multiplyScalar(me*P),_e.groundColor.copy(B.groundColor).multiplyScalar(me*P),i.hemi[x]=_e,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let ce=i.hash;(ce.directionalLength!==b||ce.pointLength!==p||ce.spotLength!==f||ce.rectAreaLength!==v||ce.hemiLength!==x||ce.numDirectionalShadows!==A||ce.numPointShadows!==I||ce.numSpotShadows!==R||ce.numSpotMaps!==E||ce.numLightProbes!==w)&&(i.directional.length=b,i.spot.length=f,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=R+E-j,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=j,i.numLightProbes=w,ce.directionalLength=b,ce.pointLength=p,ce.spotLength=f,ce.rectAreaLength=v,ce.hemiLength=x,ce.numDirectionalShadows=A,ce.numPointShadows=I,ce.numSpotShadows=R,ce.numSpotMaps=E,ce.numLightProbes=w,i.version=fb++)}function l(u,h){let d=0,m=0,g=0,b=0,p=0,f=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){let A=u[v];if(A.isDirectionalLight){let I=i.directional[d];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(A.isSpotLight){let I=i.spot[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let I=i.rectArea[b];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),b++}else if(A.isPointLight){let I=i.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let I=i.hemi[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function vu(s,e){let t=new mb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gb(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new vu(s,e),t.set(r,[c])):a>=o.length?(c=new vu(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Gc=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bb=`void main() {
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
}`;function _b(s,e,t){let n=new la,i=new ft,r=new ft,a=new bn,o=new Gc({depthPacking:df}),c=new Vc,l={},u=t.maxTextureSize,h={[Pi]:On,[On]:Pi,[cn]:cn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:bb,fragmentShader:xb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new We(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(R,E,j){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let w=s.getRenderTarget(),P=s.getActiveCubeFace(),ce=s.getActiveMipmapLevel(),pe=s.state;pe.setBlending(Ri),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);let re=f!==qi&&this.type===qi,B=f===qi&&this.type!==qi;for(let ae=0,me=R.length;ae<me;ae++){let ve=R[ae],xe=ve.shadow;if(xe===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(xe.autoUpdate===!1&&xe.needsUpdate===!1)continue;i.copy(xe.mapSize);let _e=xe.getFrameExtents();if(i.multiply(_e),r.copy(xe.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/_e.x),i.x=r.x*_e.x,xe.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/_e.y),i.y=r.y*_e.y,xe.mapSize.y=r.y)),xe.map===null||re===!0||B===!0){let Ue=this.type!==qi?{minFilter:Ln,magFilter:Ln}:{};xe.map!==null&&xe.map.dispose(),xe.map=new Rn(i.x,i.y,Ue),xe.map.texture.name=ve.name+".shadowMap",xe.camera.updateProjectionMatrix()}s.setRenderTarget(xe.map),s.clear();let Le=xe.getViewportCount();for(let Ue=0;Ue<Le;Ue++){let $e=xe.getViewport(Ue);a.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),pe.viewport(a),xe.updateMatrices(ve,Ue),n=xe.getFrustum(),A(E,j,xe.camera,ve,this.type)}xe.isPointLightShadow!==!0&&this.type===qi&&v(xe,j),xe.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(w,P,ce)};function v(R,E){let j=e.update(b);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,j,d,b,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,j,m,b,null)}function x(R,E,j,w){let P=null,ce=j.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(ce!==void 0)P=ce;else if(P=j.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let pe=P.uuid,re=E.uuid,B=l[pe];B===void 0&&(B={},l[pe]=B);let ae=B[re];ae===void 0&&(ae=P.clone(),B[re]=ae,E.addEventListener("dispose",I)),P=ae}if(P.visible=E.visible,P.wireframe=E.wireframe,w===qi?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:h[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,j.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let pe=s.properties.get(P);pe.light=j}return P}function A(R,E,j,w,P){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===qi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld);let re=e.update(R),B=R.material;if(Array.isArray(B)){let ae=re.groups;for(let me=0,ve=ae.length;me<ve;me++){let xe=ae[me],_e=B[xe.materialIndex];if(_e&&_e.visible){let Le=x(R,_e,w,P);R.onBeforeShadow(s,R,E,j,re,Le,xe),s.renderBufferDirect(j,null,re,Le,R,xe),R.onAfterShadow(s,R,E,j,re,Le,xe)}}}else if(B.visible){let ae=x(R,B,w,P);R.onBeforeShadow(s,R,E,j,re,ae,null),s.renderBufferDirect(j,null,re,ae,R,null),R.onAfterShadow(s,R,E,j,re,ae,null)}}let pe=R.children;for(let re=0,B=pe.length;re<B;re++)A(pe[re],E,j,w,P)}function I(R){R.target.removeEventListener("dispose",I);for(let j in l){let w=l[j],P=R.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function vb(s,e,t){let n=t.isWebGL2;function i(){let H=!1,qe=new bn,Be=null,dt=new bn(0,0,0,0);return{setMask:function(Xe){Be!==Xe&&!H&&(s.colorMask(Xe,Xe,Xe,Xe),Be=Xe)},setLocked:function(Xe){H=Xe},setClear:function(Xe,Kt,It,K,le){le===!0&&(Xe*=K,Kt*=K,It*=K),qe.set(Xe,Kt,It,K),dt.equals(qe)===!1&&(s.clearColor(Xe,Kt,It,K),dt.copy(qe))},reset:function(){H=!1,Be=null,dt.set(-1,0,0,0)}}}function r(){let H=!1,qe=null,Be=null,dt=null;return{setTest:function(Xe){Xe?et(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(Xe){qe!==Xe&&!H&&(s.depthMask(Xe),qe=Xe)},setFunc:function(Xe){if(Be!==Xe){switch(Xe){case Vd:s.depthFunc(s.NEVER);break;case Wd:s.depthFunc(s.ALWAYS);break;case Xd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case qd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Yd:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=Xe}},setLocked:function(Xe){H=Xe},setClear:function(Xe){dt!==Xe&&(s.clearDepth(Xe),dt=Xe)},reset:function(){H=!1,qe=null,Be=null,dt=null}}}function a(){let H=!1,qe=null,Be=null,dt=null,Xe=null,Kt=null,It=null,K=null,le=null;return{setTest:function(he){H||(he?et(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(he){qe!==he&&!H&&(s.stencilMask(he),qe=he)},setFunc:function(he,Z,we){(Be!==he||dt!==Z||Xe!==we)&&(s.stencilFunc(he,Z,we),Be=he,dt=Z,Xe=we)},setOp:function(he,Z,we){(Kt!==he||It!==Z||K!==we)&&(s.stencilOp(he,Z,we),Kt=he,It=Z,K=we)},setLocked:function(he){H=he},setClear:function(he){le!==he&&(s.clearStencil(he),le=he)},reset:function(){H=!1,qe=null,Be=null,dt=null,Xe=null,Kt=null,It=null,K=null,le=null}}}let o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap,d={},m={},g=new WeakMap,b=[],p=null,f=!1,v=null,x=null,A=null,I=null,R=null,E=null,j=null,w=new ze(0,0,0),P=0,ce=!1,pe=null,re=null,B=null,ae=null,me=null,ve=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),xe=!1,_e=0,Le=s.getParameter(s.VERSION);Le.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(Le)[1]),xe=_e>=1):Le.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(Le)[1]),xe=_e>=2);let Ue=null,$e={},de=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),ne=new bn().fromArray(de),Ie=new bn().fromArray(Ee);function pt(H,qe,Be,dt){let Xe=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(H,Kt),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<Be;It++)n&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(qe,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,Xe):s.texImage2D(qe+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Xe);return Kt}let wt={};wt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(wt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),et(s.DEPTH_TEST),c.setFunc(no),O(!1),C(sh),et(s.CULL_FACE),st(Ri);function et(H){d[H]!==!0&&(s.enable(H),d[H]=!0)}function Oe(H){d[H]!==!1&&(s.disable(H),d[H]=!1)}function je(H,qe){return m[H]!==qe?(s.bindFramebuffer(H,qe),m[H]=qe,n&&(H===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=qe),H===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=qe)),!0):!1}function Y(H,qe){let Be=b,dt=!1;if(H)if(Be=g.get(qe),Be===void 0&&(Be=[],g.set(qe,Be)),H.isWebGLMultipleRenderTargets){let Xe=H.texture;if(Be.length!==Xe.length||Be[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,It=Xe.length;Kt<It;Kt++)Be[Kt]=s.COLOR_ATTACHMENT0+Kt;Be.length=Xe.length,dt=!0}}else Be[0]!==s.COLOR_ATTACHMENT0&&(Be[0]=s.COLOR_ATTACHMENT0,dt=!0);else Be[0]!==s.BACK&&(Be[0]=s.BACK,dt=!0);dt&&(t.isWebGL2?s.drawBuffers(Be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Be))}function an(H){return p!==H?(s.useProgram(H),p=H,!0):!1}let ut={[Ps]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Cd]:s.FUNC_REVERSE_SUBTRACT};if(n)ut[oh]=s.MIN,ut[ch]=s.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(ut[oh]=H.MIN_EXT,ut[ch]=H.MAX_EXT)}let Mt={[Pd]:s.ZERO,[Ld]:s.ONE,[Id]:s.SRC_COLOR,[wc]:s.SRC_ALPHA,[Hd]:s.SRC_ALPHA_SATURATE,[Fd]:s.DST_COLOR,[Ud]:s.DST_ALPHA,[Dd]:s.ONE_MINUS_SRC_COLOR,[Tc]:s.ONE_MINUS_SRC_ALPHA,[Od]:s.ONE_MINUS_DST_COLOR,[Nd]:s.ONE_MINUS_DST_ALPHA,[kd]:s.CONSTANT_COLOR,[Bd]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[Gd]:s.ONE_MINUS_CONSTANT_ALPHA};function st(H,qe,Be,dt,Xe,Kt,It,K,le,he){if(H===Ri){f===!0&&(Oe(s.BLEND),f=!1);return}if(f===!1&&(et(s.BLEND),f=!0),H!==Ad){if(H!==v||he!==ce){if((x!==Ps||R!==Ps)&&(s.blendEquation(s.FUNC_ADD),x=Ps,R=Ps),he)switch(H){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wn:s.blendFunc(s.ONE,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,I=null,E=null,j=null,w.set(0,0,0),P=0,v=H,ce=he}return}Xe=Xe||qe,Kt=Kt||Be,It=It||dt,(qe!==x||Xe!==R)&&(s.blendEquationSeparate(ut[qe],ut[Xe]),x=qe,R=Xe),(Be!==A||dt!==I||Kt!==E||It!==j)&&(s.blendFuncSeparate(Mt[Be],Mt[dt],Mt[Kt],Mt[It]),A=Be,I=dt,E=Kt,j=It),(K.equals(w)===!1||le!==P)&&(s.blendColor(K.r,K.g,K.b,le),w.copy(K),P=le),v=H,ce=!1}function _t(H,qe){H.side===cn?Oe(s.CULL_FACE):et(s.CULL_FACE);let Be=H.side===On;qe&&(Be=!Be),O(Be),H.blending===Ci&&H.transparent===!1?st(Ri):st(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);let dt=H.stencilWrite;l.setTest(dt),dt&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),$(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function O(H){pe!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),pe=H)}function C(H){H!==wd?(et(s.CULL_FACE),H!==re&&(H===sh?s.cullFace(s.BACK):H===Td?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),re=H}function M(H){H!==B&&(xe&&s.lineWidth(H),B=H)}function $(H,qe,Be){H?(et(s.POLYGON_OFFSET_FILL),(ae!==qe||me!==Be)&&(s.polygonOffset(qe,Be),ae=qe,me=Be)):Oe(s.POLYGON_OFFSET_FILL)}function ye(H){H?et(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function Te(H){H===void 0&&(H=s.TEXTURE0+ve-1),Ue!==H&&(s.activeTexture(H),Ue=H)}function Ce(H,qe,Be){Be===void 0&&(Ue===null?Be=s.TEXTURE0+ve-1:Be=Ue);let dt=$e[Be];dt===void 0&&(dt={type:void 0,texture:void 0},$e[Be]=dt),(dt.type!==H||dt.texture!==qe)&&(Ue!==Be&&(s.activeTexture(Be),Ue=Be),s.bindTexture(H,qe||wt[H]),dt.type=H,dt.texture=qe)}function Ge(){let H=$e[Ue];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(H){ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function Vt(H){Ie.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Ie.copy(H))}function Xt(H,qe){let Be=h.get(qe);Be===void 0&&(Be=new WeakMap,h.set(qe,Be));let dt=Be.get(H);dt===void 0&&(dt=s.getUniformBlockIndex(qe,H.name),Be.set(H,dt))}function At(H,qe){let dt=h.get(qe).get(H);u.get(qe)!==dt&&(s.uniformBlockBinding(qe,dt,H.__bindingPointIndex),u.set(qe,dt))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Ue=null,$e={},m={},g=new WeakMap,b=[],p=null,f=!1,v=null,x=null,A=null,I=null,R=null,E=null,j=null,w=new ze(0,0,0),P=0,ce=!1,pe=null,re=null,B=null,ae=null,me=null,ne.set(0,0,s.canvas.width,s.canvas.height),Ie.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:et,disable:Oe,bindFramebuffer:je,drawBuffers:Y,useProgram:an,setBlending:st,setMaterial:_t,setFlipSided:O,setCullFace:C,setLineWidth:M,setPolygonOffset:$,setScissorTest:ye,activeTexture:Te,bindTexture:Ce,unbindTexture:Ge,compressedTexImage2D:Fe,compressedTexImage3D:it,texImage2D:gt,texImage3D:at,updateUBOMapping:Xt,uniformBlockBinding:At,texStorage2D:Lt,texStorage3D:Rt,texSubImage2D:vt,texSubImage3D:Tt,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Gt,scissor:Et,viewport:Vt,reset:Ne}}function yb(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return m?new OffscreenCanvas(C,M):oa("canvas")}function b(C,M,$,ye){let Te=1;if((C.width>ye||C.height>ye)&&(Te=ye/Math.max(C.width,C.height)),Te<1||M===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let Ce=M?lo:Math.floor,Ge=Ce(Te*C.width),Fe=Ce(Te*C.height);h===void 0&&(h=g(Ge,Fe));let it=$?g(Ge,Fe):h;return it.width=Ge,it.height=Fe,it.getContext("2d").drawImage(C,0,0,Ge,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ge+"x"+Fe+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Lc(C.width)&&Lc(C.height)}function f(C){return o?!1:C.wrapS!==ii||C.wrapT!==ii||C.minFilter!==Ln&&C.minFilter!==In}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==Ln&&C.minFilter!==In}function x(C){s.generateMipmap(C)}function A(C,M,$,ye,Te=!1){if(o===!1)return M;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ce=M;if(M===s.RED&&($===s.FLOAT&&(Ce=s.R32F),$===s.HALF_FLOAT&&(Ce=s.R16F),$===s.UNSIGNED_BYTE&&(Ce=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(Ce=s.R8UI),$===s.UNSIGNED_SHORT&&(Ce=s.R16UI),$===s.UNSIGNED_INT&&(Ce=s.R32UI),$===s.BYTE&&(Ce=s.R8I),$===s.SHORT&&(Ce=s.R16I),$===s.INT&&(Ce=s.R32I)),M===s.RG&&($===s.FLOAT&&(Ce=s.RG32F),$===s.HALF_FLOAT&&(Ce=s.RG16F),$===s.UNSIGNED_BYTE&&(Ce=s.RG8)),M===s.RGBA){let Ge=Te?ro:nn.getTransfer(ye);$===s.FLOAT&&(Ce=s.RGBA32F),$===s.HALF_FLOAT&&(Ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(Ce=Ge===mn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(Ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(Ce=s.RGB5_A1)}return(Ce===s.R16F||Ce===s.R32F||Ce===s.RG16F||Ce===s.RG32F||Ce===s.RGBA16F||Ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function I(C,M,$){return v(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==Ln&&C.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){return C===Ln||C===io||C===na?s.NEAREST:s.LINEAR}function E(C){let M=C.target;M.removeEventListener("dispose",E),w(M),M.isVideoTexture&&u.delete(M)}function j(C){let M=C.target;M.removeEventListener("dispose",j),ce(M)}function w(C){let M=n.get(C);if(M.__webglInit===void 0)return;let $=C.source,ye=d.get($);if(ye){let Te=ye[M.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&P(C),Object.keys(ye).length===0&&d.delete($)}n.remove(C)}function P(C){let M=n.get(C);s.deleteTexture(M.__webglTexture);let $=C.source,ye=d.get($);delete ye[M.__cacheKey],a.memory.textures--}function ce(C){let M=C.texture,$=n.get(C),ye=n.get(M);if(ye.__webglTexture!==void 0&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Te=0;Te<6;Te++){if(Array.isArray($.__webglFramebuffer[Te]))for(let Ce=0;Ce<$.__webglFramebuffer[Te].length;Ce++)s.deleteFramebuffer($.__webglFramebuffer[Te][Ce]);else s.deleteFramebuffer($.__webglFramebuffer[Te]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[Te])}else{if(Array.isArray($.__webglFramebuffer))for(let Te=0;Te<$.__webglFramebuffer.length;Te++)s.deleteFramebuffer($.__webglFramebuffer[Te]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let Te=0;Te<$.__webglColorRenderbuffer.length;Te++)$.__webglColorRenderbuffer[Te]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[Te]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Te=0,Ce=M.length;Te<Ce;Te++){let Ge=n.get(M[Te]);Ge.__webglTexture&&(s.deleteTexture(Ge.__webglTexture),a.memory.textures--),n.remove(M[Te])}n.remove(M),n.remove(C)}let pe=0;function re(){pe=0}function B(){let C=pe;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),pe+=1,C}function ae(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function me(C,M){let $=n.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){let ye=C.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne($,C,M);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function ve(C,M){let $=n.get(C);if(C.version>0&&$.__version!==C.version){ne($,C,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function xe(C,M){let $=n.get(C);if(C.version>0&&$.__version!==C.version){ne($,C,M);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function _e(C,M){let $=n.get(C);if(C.version>0&&$.__version!==C.version){Ie($,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}let Le={[Hn]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[Fs]:s.MIRRORED_REPEAT},Ue={[Ln]:s.NEAREST,[io]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},$e={[pf]:s.NEVER,[vf]:s.ALWAYS,[mf]:s.LESS,[ed]:s.LEQUAL,[gf]:s.EQUAL,[_f]:s.GEQUAL,[bf]:s.GREATER,[xf]:s.NOTEQUAL};function de(C,M,$){if($?(s.texParameteri(C,s.TEXTURE_WRAP_S,Le[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Le[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Le[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Ue[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Ue[M.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==ii||M.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,R(M.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Ln&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,$e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ln||M.minFilter!==na&&M.minFilter!==hs||M.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Kn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(C,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ee(C,M){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));let ye=M.source,Te=d.get(ye);Te===void 0&&(Te={},d.set(ye,Te));let Ce=ae(M);if(Ce!==C.__cacheKey){Te[Ce]===void 0&&(Te[Ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),Te[Ce].usedTimes++;let Ge=Te[C.__cacheKey];Ge!==void 0&&(Te[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(M)),C.__cacheKey=Ce,C.__webglTexture=Te[Ce].texture}return $}function ne(C,M,$){let ye=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ye=s.TEXTURE_3D);let Te=Ee(C,M),Ce=M.source;t.bindTexture(ye,C.__webglTexture,s.TEXTURE0+$);let Ge=n.get(Ce);if(Ce.version!==Ge.__version||Te===!0){t.activeTexture(s.TEXTURE0+$);let Fe=nn.getPrimaries(nn.workingColorSpace),it=M.colorSpace===hi?null:nn.getPrimaries(M.colorSpace),vt=M.colorSpace===hi||Fe===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Tt=f(M)&&p(M.image)===!1,Pe=b(M.image,Tt,!1,i.maxTextureSize);Pe=O(M,Pe);let Gt=p(Pe)||o,Lt=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),gt=A(M.internalFormat,Lt,Rt,M.colorSpace,M.isVideoTexture);de(ye,M,Gt);let at,Et=M.mipmaps,Vt=o&&M.isVideoTexture!==!0&&gt!==Zu,Xt=Ge.__version===void 0||Te===!0,At=I(M,Pe,Gt);if(M.isDepthTexture)gt=s.DEPTH_COMPONENT,o?M.type===Yi?gt=s.DEPTH_COMPONENT32F:M.type===os?gt=s.DEPTH_COMPONENT24:M.type===Ds?gt=s.DEPTH24_STENCIL8:gt=s.DEPTH_COMPONENT16:M.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Us&&gt===s.DEPTH_COMPONENT&&M.type!==pl&&M.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=os,Rt=r.convert(M.type)),M.format===Sr&&gt===s.DEPTH_COMPONENT&&(gt=s.DEPTH_STENCIL,M.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ds,Rt=r.convert(M.type))),Xt&&(Vt?t.texStorage2D(s.TEXTURE_2D,1,gt,Pe.width,Pe.height):t.texImage2D(s.TEXTURE_2D,0,gt,Pe.width,Pe.height,0,Lt,Rt,null));else if(M.isDataTexture)if(Et.length>0&&Gt){Vt&&Xt&&t.texStorage2D(s.TEXTURE_2D,At,gt,Et[0].width,Et[0].height);for(let Ne=0,H=Et.length;Ne<H;Ne++)at=Et[Ne],Vt?t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,at.width,at.height,Lt,Rt,at.data):t.texImage2D(s.TEXTURE_2D,Ne,gt,at.width,at.height,0,Lt,Rt,at.data);M.generateMipmaps=!1}else Vt?(Xt&&t.texStorage2D(s.TEXTURE_2D,At,gt,Pe.width,Pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe.width,Pe.height,Lt,Rt,Pe.data)):t.texImage2D(s.TEXTURE_2D,0,gt,Pe.width,Pe.height,0,Lt,Rt,Pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&Xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,At,gt,Et[0].width,Et[0].height,Pe.depth);for(let Ne=0,H=Et.length;Ne<H;Ne++)at=Et[Ne],M.format!==qn?Lt!==null?Vt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,at.width,at.height,Pe.depth,Lt,at.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ne,gt,at.width,at.height,Pe.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,at.width,at.height,Pe.depth,Lt,Rt,at.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ne,gt,at.width,at.height,Pe.depth,0,Lt,Rt,at.data)}else{Vt&&Xt&&t.texStorage2D(s.TEXTURE_2D,At,gt,Et[0].width,Et[0].height);for(let Ne=0,H=Et.length;Ne<H;Ne++)at=Et[Ne],M.format!==qn?Lt!==null?Vt?t.compressedTexSubImage2D(s.TEXTURE_2D,Ne,0,0,at.width,at.height,Lt,at.data):t.compressedTexImage2D(s.TEXTURE_2D,Ne,gt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,at.width,at.height,Lt,Rt,at.data):t.texImage2D(s.TEXTURE_2D,Ne,gt,at.width,at.height,0,Lt,Rt,at.data)}else if(M.isDataArrayTexture)Vt?(Xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,At,gt,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,Lt,Rt,Pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,Pe.width,Pe.height,Pe.depth,0,Lt,Rt,Pe.data);else if(M.isData3DTexture)Vt?(Xt&&t.texStorage3D(s.TEXTURE_3D,At,gt,Pe.width,Pe.height,Pe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,Lt,Rt,Pe.data)):t.texImage3D(s.TEXTURE_3D,0,gt,Pe.width,Pe.height,Pe.depth,0,Lt,Rt,Pe.data);else if(M.isFramebufferTexture){if(Xt)if(Vt)t.texStorage2D(s.TEXTURE_2D,At,gt,Pe.width,Pe.height);else{let Ne=Pe.width,H=Pe.height;for(let qe=0;qe<At;qe++)t.texImage2D(s.TEXTURE_2D,qe,gt,Ne,H,0,Lt,Rt,null),Ne>>=1,H>>=1}}else if(Et.length>0&&Gt){Vt&&Xt&&t.texStorage2D(s.TEXTURE_2D,At,gt,Et[0].width,Et[0].height);for(let Ne=0,H=Et.length;Ne<H;Ne++)at=Et[Ne],Vt?t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,Lt,Rt,at):t.texImage2D(s.TEXTURE_2D,Ne,gt,Lt,Rt,at);M.generateMipmaps=!1}else Vt?(Xt&&t.texStorage2D(s.TEXTURE_2D,At,gt,Pe.width,Pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,Rt,Pe)):t.texImage2D(s.TEXTURE_2D,0,gt,Lt,Rt,Pe);v(M,Gt)&&x(ye),Ge.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ie(C,M,$){if(M.image.length!==6)return;let ye=Ee(C,M),Te=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+$);let Ce=n.get(Te);if(Te.version!==Ce.__version||ye===!0){t.activeTexture(s.TEXTURE0+$);let Ge=nn.getPrimaries(nn.workingColorSpace),Fe=M.colorSpace===hi?null:nn.getPrimaries(M.colorSpace),it=M.colorSpace===hi||Ge===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=M.isCompressedTexture||M.image[0].isCompressedTexture,Tt=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let Ne=0;Ne<6;Ne++)!vt&&!Tt?Pe[Ne]=b(M.image[Ne],!1,!0,i.maxCubemapSize):Pe[Ne]=Tt?M.image[Ne].image:M.image[Ne],Pe[Ne]=O(M,Pe[Ne]);let Gt=Pe[0],Lt=p(Gt)||o,Rt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),at=A(M.internalFormat,Rt,gt,M.colorSpace),Et=o&&M.isVideoTexture!==!0,Vt=Ce.__version===void 0||ye===!0,Xt=I(M,Gt,Lt);de(s.TEXTURE_CUBE_MAP,M,Lt);let At;if(vt){Et&&Vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,at,Gt.width,Gt.height);for(let Ne=0;Ne<6;Ne++){At=Pe[Ne].mipmaps;for(let H=0;H<At.length;H++){let qe=At[H];M.format!==qn?Rt!==null?Et?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H,0,0,qe.width,qe.height,Rt,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H,at,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H,0,0,qe.width,qe.height,Rt,gt,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H,at,qe.width,qe.height,0,Rt,gt,qe.data)}}}else{At=M.mipmaps,Et&&Vt&&(At.length>0&&Xt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,at,Pe[0].width,Pe[0].height));for(let Ne=0;Ne<6;Ne++)if(Tt){Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Pe[Ne].width,Pe[Ne].height,Rt,gt,Pe[Ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,at,Pe[Ne].width,Pe[Ne].height,0,Rt,gt,Pe[Ne].data);for(let H=0;H<At.length;H++){let Be=At[H].image[Ne].image;Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H+1,0,0,Be.width,Be.height,Rt,gt,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H+1,at,Be.width,Be.height,0,Rt,gt,Be.data)}}else{Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Rt,gt,Pe[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,at,Rt,gt,Pe[Ne]);for(let H=0;H<At.length;H++){let qe=At[H];Et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H+1,0,0,Rt,gt,qe.image[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,H+1,at,Rt,gt,qe.image[Ne])}}}v(M,Lt)&&x(s.TEXTURE_CUBE_MAP),Ce.__version=Te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function pt(C,M,$,ye,Te,Ce){let Ge=r.convert($.format,$.colorSpace),Fe=r.convert($.type),it=A($.internalFormat,Ge,Fe,$.colorSpace);if(!n.get(M).__hasExternalTextures){let Tt=Math.max(1,M.width>>Ce),Pe=Math.max(1,M.height>>Ce);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?t.texImage3D(Te,Ce,it,Tt,Pe,M.depth,0,Ge,Fe,null):t.texImage2D(Te,Ce,it,Tt,Pe,0,Ge,Fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),st(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Te,n.get($).__webglTexture,0,Mt(M)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Te,n.get($).__webglTexture,Ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(C,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ye=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||st(M)){let Te=M.depthTexture;Te&&Te.isDepthTexture&&(Te.type===Yi?ye=s.DEPTH_COMPONENT32F:Te.type===os&&(ye=s.DEPTH_COMPONENT24));let Ce=Mt(M);st(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ye,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ye,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ye,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){let ye=Mt(M);$&&st(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,s.DEPTH24_STENCIL8,M.width,M.height):st(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let ye=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Te=0;Te<ye.length;Te++){let Ce=ye[Te],Ge=r.convert(Ce.format,Ce.colorSpace),Fe=r.convert(Ce.type),it=A(Ce.internalFormat,Ge,Fe,Ce.colorSpace),vt=Mt(M);$&&st(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,it,M.width,M.height):st(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,it,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,it,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me(M.depthTexture,0);let ye=n.get(M.depthTexture).__webglTexture,Te=Mt(M);if(M.depthTexture.format===Us)st(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(M.depthTexture.format===Sr)st(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Oe(C){let M=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");et(M.__webglFramebuffer,C)}else if($){M.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ye]),M.__webglDepthbuffer[ye]=s.createRenderbuffer(),wt(M.__webglDepthbuffer[ye],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),wt(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(C,M,$){let ye=n.get(C);M!==void 0&&pt(ye.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Oe(C)}function Y(C){let M=C.texture,$=n.get(C),ye=n.get(M);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=M.version,a.memory.textures++);let Te=C.isWebGLCubeRenderTarget===!0,Ce=C.isWebGLMultipleRenderTargets===!0,Ge=p(C)||o;if(Te){$.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(o&&M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Fe]=[];for(let it=0;it<M.mipmaps.length;it++)$.__webglFramebuffer[Fe][it]=s.createFramebuffer()}else $.__webglFramebuffer[Fe]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Fe=0;Fe<M.mipmaps.length;Fe++)$.__webglFramebuffer[Fe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ce)if(i.drawBuffers){let Fe=C.texture;for(let it=0,vt=Fe.length;it<vt;it++){let Tt=n.get(Fe[it]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&st(C)===!1){let Fe=Ce?M:[M];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let it=0;it<Fe.length;it++){let vt=Fe[it];$.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[it]);let Tt=r.convert(vt.format,vt.colorSpace),Pe=r.convert(vt.type),Gt=A(vt.internalFormat,Tt,Pe,vt.colorSpace,C.isXRRenderTarget===!0),Lt=Mt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,Gt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,$.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),wt($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),de(s.TEXTURE_CUBE_MAP,M,Ge);for(let Fe=0;Fe<6;Fe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)pt($.__webglFramebuffer[Fe][it],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,it);else pt($.__webglFramebuffer[Fe],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);v(M,Ge)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){let Fe=C.texture;for(let it=0,vt=Fe.length;it<vt;it++){let Tt=Fe[it],Pe=n.get(Tt);t.bindTexture(s.TEXTURE_2D,Pe.__webglTexture),de(s.TEXTURE_2D,Tt,Ge),pt($.__webglFramebuffer,C,Tt,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,0),v(Tt,Ge)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Fe,ye.__webglTexture),de(Fe,M,Ge),o&&M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)pt($.__webglFramebuffer[it],C,M,s.COLOR_ATTACHMENT0,Fe,it);else pt($.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,Fe,0);v(M,Ge)&&x(Fe),t.unbindTexture()}C.depthBuffer&&Oe(C)}function an(C){let M=p(C)||o,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ye=0,Te=$.length;ye<Te;ye++){let Ce=$[ye];if(v(Ce,M)){let Ge=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Fe=n.get(Ce).__webglTexture;t.bindTexture(Ge,Fe),x(Ge),t.unbindTexture()}}}function ut(C){if(o&&C.samples>0&&st(C)===!1){let M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,ye=C.height,Te=s.COLOR_BUFFER_BIT,Ce=[],Ge=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(C),it=C.isWebGLMultipleRenderTargets===!0;if(it)for(let vt=0;vt<M.length;vt++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){Ce.push(s.COLOR_ATTACHMENT0+vt),C.depthBuffer&&Ce.push(Ge);let Tt=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(Tt===!1&&(C.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),it&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[vt]),Tt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ge]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ge])),it){let Pe=n.get(M[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,$,ye,0,0,$,ye,Te,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let vt=0;vt<M.length;vt++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[vt]);let Tt=n.get(M[vt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function Mt(C){return Math.min(i.maxSamples,C.samples)}function st(C){let M=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function O(C,M){let $=C.colorSpace,ye=C.format,Te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Pc||$!==Dn&&$!==hi&&(nn.getTransfer($)===mn?o===!1?e.has("EXT_sRGB")===!0&&ye===qn?(C.format=Pc,C.minFilter=In,C.generateMipmaps=!1):M=ho.sRGBToLinear(M):(ye!==qn||Te!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}this.allocateTextureUnit=B,this.resetTextureUnits=re,this.setTexture2D=me,this.setTexture2DArray=ve,this.setTexture3D=xe,this.setTextureCube=_e,this.rebindTextures=je,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=st}function Mb(s,e,t){let n=t.isWebGL2;function i(r,a=hi){let o,c=nn.getTransfer(a);if(r===ui)return s.UNSIGNED_BYTE;if(r===qu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ju)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ef)return s.BYTE;if(r===tf)return s.SHORT;if(r===pl)return s.UNSIGNED_SHORT;if(r===Xu)return s.INT;if(r===os)return s.UNSIGNED_INT;if(r===Yi)return s.FLOAT;if(r===Kn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nf)return s.ALPHA;if(r===qn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===rf)return s.LUMINANCE_ALPHA;if(r===Us)return s.DEPTH_COMPONENT;if(r===Sr)return s.DEPTH_STENCIL;if(r===Pc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===af)return s.RED;if(r===Yu)return s.RED_INTEGER;if(r===of)return s.RG;if(r===Ku)return s.RG_INTEGER;if(r===Ju)return s.RGBA_INTEGER;if(r===Xo||r===qo||r===jo||r===Yo)if(c===mn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===uh||r===dh||r===fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ph||r===mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ph)return c===mn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===bh||r===xh||r===_h||r===vh||r===yh||r===Mh||r===Eh||r===Sh||r===wh||r===Th||r===Ah||r===Rh||r===Ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ko||r===Ph||r===Lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ko)return c===mn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ph)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===Ih||r===Dh||r===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ds?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Wc=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},St=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eb={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,n),f=this._getHandJoint(l,b);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xc=class extends Ji{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null,b=t.getContextAttributes(),p=null,f=null,v=[],x=[],A=new ft,I=null,R=new dn;R.layers.enable(1),R.viewport=new bn;let E=new dn;E.layers.enable(2),E.viewport=new bn;let j=[R,E],w=new Wc;w.layers.enable(1),w.layers.enable(2);let P=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let Ee=v[de];return Ee===void 0&&(Ee=new aa,v[de]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(de){let Ee=v[de];return Ee===void 0&&(Ee=new aa,v[de]=Ee),Ee.getGripSpace()},this.getHand=function(de){let Ee=v[de];return Ee===void 0&&(Ee=new aa,v[de]=Ee),Ee.getHandSpace()};function pe(de){let Ee=x.indexOf(de.inputSource);if(Ee===-1)return;let ne=v[Ee];ne!==void 0&&(ne.update(de.inputSource,de.frame,l||a),ne.dispatchEvent({type:de.type,data:de.inputSource}))}function re(){i.removeEventListener("select",pe),i.removeEventListener("selectstart",pe),i.removeEventListener("selectend",pe),i.removeEventListener("squeeze",pe),i.removeEventListener("squeezestart",pe),i.removeEventListener("squeezeend",pe),i.removeEventListener("end",re),i.removeEventListener("inputsourceschange",B);for(let de=0;de<v.length;de++){let Ee=x[de];Ee!==null&&(x[de]=null,v[de].disconnect(Ee))}P=null,ce=null,e.setRenderTarget(p),m=null,d=null,h=null,i=null,f=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){r=de,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){o=de,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(de){l=de},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(de){if(i=de,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",pe),i.addEventListener("selectstart",pe),i.addEventListener("selectend",pe),i.addEventListener("squeeze",pe),i.addEventListener("squeezestart",pe),i.addEventListener("squeezeend",pe),i.addEventListener("end",re),i.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Ee={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Rn(m.framebufferWidth,m.framebufferHeight,{format:qn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let Ee=null,ne=null,Ie=null;b.depth&&(Ie=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=b.stencil?Sr:Us,ne=b.stencil?Ds:os);let pt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Rn(d.textureWidth,d.textureHeight,{format:qn,type:ui,depthTexture:new vo(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let wt=e.properties.get(f);wt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(de){for(let Ee=0;Ee<de.removed.length;Ee++){let ne=de.removed[Ee],Ie=x.indexOf(ne);Ie>=0&&(x[Ie]=null,v[Ie].disconnect(ne))}for(let Ee=0;Ee<de.added.length;Ee++){let ne=de.added[Ee],Ie=x.indexOf(ne);if(Ie===-1){for(let wt=0;wt<v.length;wt++)if(wt>=x.length){x.push(ne),Ie=wt;break}else if(x[wt]===null){x[wt]=ne,Ie=wt;break}if(Ie===-1)break}let pt=v[Ie];pt&&pt.connect(ne)}}let ae=new D,me=new D;function ve(de,Ee,ne){ae.setFromMatrixPosition(Ee.matrixWorld),me.setFromMatrixPosition(ne.matrixWorld);let Ie=ae.distanceTo(me),pt=Ee.projectionMatrix.elements,wt=ne.projectionMatrix.elements,et=pt[14]/(pt[10]-1),Oe=pt[14]/(pt[10]+1),je=(pt[9]+1)/pt[5],Y=(pt[9]-1)/pt[5],an=(pt[8]-1)/pt[0],ut=(wt[8]+1)/wt[0],Mt=et*an,st=et*ut,_t=Ie/(-an+ut),O=_t*-an;Ee.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(O),de.translateZ(_t),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert();let C=et+_t,M=Oe+_t,$=Mt-O,ye=st+(Ie-O),Te=je*Oe/M*C,Ce=Y*Oe/M*C;de.projectionMatrix.makePerspective($,ye,Te,Ce,C,M),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}function xe(de,Ee){Ee===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(Ee.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(i===null)return;w.near=E.near=R.near=de.near,w.far=E.far=R.far=de.far,(P!==w.near||ce!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,ce=w.far);let Ee=de.parent,ne=w.cameras;xe(w,Ee);for(let Ie=0;Ie<ne.length;Ie++)xe(ne[Ie],Ee);ne.length===2?ve(w,R,E):w.projectionMatrix.copy(R.projectionMatrix),_e(de,w,Ee)};function _e(de,Ee,ne){ne===null?de.matrix.copy(Ee.matrixWorld):(de.matrix.copy(ne.matrixWorld),de.matrix.invert(),de.matrix.multiply(Ee.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Ee.projectionMatrix),de.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=Tr*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(de){c=de,d!==null&&(d.fixedFoveation=de),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=de)};let Le=null;function Ue(de,Ee){if(u=Ee.getViewerPose(l||a),g=Ee,u!==null){let ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Ie=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,Ie=!0);for(let pt=0;pt<ne.length;pt++){let wt=ne[pt],et=null;if(m!==null)et=m.getViewport(wt);else{let je=h.getViewSubImage(d,wt);et=je.viewport,pt===0&&(e.setRenderTargetTextures(f,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let Oe=j[pt];Oe===void 0&&(Oe=new dn,Oe.layers.enable(pt),Oe.viewport=new bn,j[pt]=Oe),Oe.matrix.fromArray(wt.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(wt.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(et.x,et.y,et.width,et.height),pt===0&&(w.matrix.copy(Oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ie===!0&&w.cameras.push(Oe)}}for(let ne=0;ne<v.length;ne++){let Ie=x[ne],pt=v[ne];Ie!==null&&pt!==void 0&&pt.update(Ie,Ee,l||a)}Le&&Le(de,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),g=null}let $e=new sd;$e.setAnimationLoop(Ue),this.setAnimationLoop=function(de){Le=de},this.dispose=function(){}}};function Sb(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,id(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),b(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,v,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===On&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===On&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,v,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===On&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function b(p,f){let v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wb(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){let A=x.program;n.uniformBlockBinding(v,A)}function l(v,x){let A=i[v.id];A===void 0&&(g(v),A=u(v),i[v.id]=A,v.addEventListener("dispose",p));let I=x.program;n.updateUBOMapping(v,I);let R=e.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function u(v){let x=h();v.__bindingPointIndex=x;let A=s.createBuffer(),I=v.__size,R=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,I,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,A),A}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],A=v.uniforms,I=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,E=A.length;R<E;R++){let j=Array.isArray(A[R])?A[R]:[A[R]];for(let w=0,P=j.length;w<P;w++){let ce=j[w];if(m(ce,R,w,I)===!0){let pe=ce.__offset,re=Array.isArray(ce.value)?ce.value:[ce.value],B=0;for(let ae=0;ae<re.length;ae++){let me=re[ae],ve=b(me);typeof me=="number"||typeof me=="boolean"?(ce.__data[0]=me,s.bufferSubData(s.UNIFORM_BUFFER,pe+B,ce.__data)):me.isMatrix3?(ce.__data[0]=me.elements[0],ce.__data[1]=me.elements[1],ce.__data[2]=me.elements[2],ce.__data[3]=0,ce.__data[4]=me.elements[3],ce.__data[5]=me.elements[4],ce.__data[6]=me.elements[5],ce.__data[7]=0,ce.__data[8]=me.elements[6],ce.__data[9]=me.elements[7],ce.__data[10]=me.elements[8],ce.__data[11]=0):(me.toArray(ce.__data,B),B+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,pe,ce.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,x,A,I){let R=v.value,E=x+"_"+A;if(I[E]===void 0)return typeof R=="number"||typeof R=="boolean"?I[E]=R:I[E]=R.clone(),!0;{let j=I[E];if(typeof R=="number"||typeof R=="boolean"){if(j!==R)return I[E]=R,!0}else if(j.equals(R)===!1)return j.copy(R),!0}return!1}function g(v){let x=v.uniforms,A=0,I=16;for(let E=0,j=x.length;E<j;E++){let w=Array.isArray(x[E])?x[E]:[x[E]];for(let P=0,ce=w.length;P<ce;P++){let pe=w[P],re=Array.isArray(pe.value)?pe.value:[pe.value];for(let B=0,ae=re.length;B<ae;B++){let me=re[B],ve=b(me),xe=A%I;xe!==0&&I-xe<ve.boundary&&(A+=I-xe),pe.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=A,A+=ve.storage}}}let R=A%I;return R>0&&(A+=I-R),v.__size=A,v.__cache={},this}function b(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}var ri=class{constructor(e={}){let{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),b=null,p=null,f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;let x=this,A=!1,I=0,R=0,E=null,j=-1,w=null,P=new bn,ce=new bn,pe=null,re=new ze(0),B=0,ae=t.width,me=t.height,ve=1,xe=null,_e=null,Le=new bn(0,0,ae,me),Ue=new bn(0,0,ae,me),$e=!1,de=new la,Ee=!1,ne=!1,Ie=null,pt=new Yt,wt=new ft,et=new D,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return E===null?ve:1}let Y=n;function an(S,z){for(let G=0;G<S.length;G++){let Q=S[G],te=t.getContext(Q,z);if(te!==null)return te}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",qe,!1),Y===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),Y=an(z,S),Y===null)throw an(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ut,Mt,st,_t,O,C,M,$,ye,Te,Ce,Ge,Fe,it,vt,Tt,Pe,Gt,Lt,Rt,gt,at,Et,Vt;function Xt(){ut=new Wg(Y),Mt=new Hg(Y,ut,e),ut.init(Mt),at=new Mb(Y,ut,Mt),st=new vb(Y,ut,Mt),_t=new jg(Y),O=new cb,C=new yb(Y,ut,st,O,Mt,at,_t),M=new Bg(x),$=new Vg(x),ye=new tp(Y,Mt),Et=new Fg(Y,ut,ye,Mt),Te=new Xg(Y,ye,_t,Et),Ce=new Zg(Y,Te,ye,_t),Lt=new Jg(Y,Mt,C),Tt=new kg(O),Ge=new ob(x,M,$,ut,Mt,Et,Tt),Fe=new Sb(x,O),it=new hb,vt=new gb(ut,Mt),Gt=new Ng(x,M,$,st,Ce,d,c),Pe=new _b(x,Ce,Mt),Vt=new wb(Y,_t,Mt,st),Rt=new Og(Y,ut,_t,Mt),gt=new qg(Y,ut,_t,Mt),_t.programs=Ge.programs,x.capabilities=Mt,x.extensions=ut,x.properties=O,x.renderLists=it,x.shadowMap=Pe,x.state=st,x.info=_t}Xt();let At=new Xc(x,Y);this.xr=At,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let S=ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(S){S!==void 0&&(ve=S,this.setSize(ae,me,!1))},this.getSize=function(S){return S.set(ae,me)},this.setSize=function(S,z,G=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=S,me=z,t.width=Math.floor(S*ve),t.height=Math.floor(z*ve),G===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(ae*ve,me*ve).floor()},this.setDrawingBufferSize=function(S,z,G){ae=S,me=z,ve=G,t.width=Math.floor(S*G),t.height=Math.floor(z*G),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Le)},this.setViewport=function(S,z,G,Q){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,z,G,Q),st.viewport(P.copy(Le).multiplyScalar(ve).floor())},this.getScissor=function(S){return S.copy(Ue)},this.setScissor=function(S,z,G,Q){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,z,G,Q),st.scissor(ce.copy(Ue).multiplyScalar(ve).floor())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){st.setScissorTest($e=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(S=!0,z=!0,G=!0){let Q=0;if(S){let te=!1;if(E!==null){let q=E.texture.format;te=q===Ju||q===Ku||q===Yu}if(te){let q=E.texture.type,De=q===ui||q===os||q===pl||q===Ds||q===qu||q===ju,He=Gt.getClearColor(),Ke=Gt.getClearAlpha(),mt=He.r,lt=He.g,ct=He.b;De?(m[0]=mt,m[1]=lt,m[2]=ct,m[3]=Ke,Y.clearBufferuiv(Y.COLOR,0,m)):(g[0]=mt,g[1]=lt,g[2]=ct,g[3]=Ke,Y.clearBufferiv(Y.COLOR,0,g))}else Q|=Y.COLOR_BUFFER_BIT}z&&(Q|=Y.DEPTH_BUFFER_BIT),G&&(Q|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),it.dispose(),vt.dispose(),O.dispose(),M.dispose(),$.dispose(),Ce.dispose(),Et.dispose(),Vt.dispose(),Ge.dispose(),At.dispose(),At.removeEventListener("sessionstart",le),At.removeEventListener("sessionend",he),Ie&&(Ie.dispose(),Ie=null),Z.stop()};function Ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=_t.autoReset,z=Pe.enabled,G=Pe.autoUpdate,Q=Pe.needsUpdate,te=Pe.type;Xt(),_t.autoReset=S,Pe.enabled=z,Pe.autoUpdate=G,Pe.needsUpdate=Q,Pe.type=te}function qe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){let z=S.target;z.removeEventListener("dispose",Be),dt(z)}function dt(S){Xe(S),O.remove(S)}function Xe(S){let z=O.get(S).programs;z!==void 0&&(z.forEach(function(G){Ge.releaseProgram(G)}),S.isShaderMaterial&&Ge.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,G,Q,te,q){z===null&&(z=Oe);let De=te.isMesh&&te.matrixWorld.determinant()<0,He=hn(S,z,G,Q,te);st.setMaterial(Q,De);let Ke=G.index,mt=1;if(Q.wireframe===!0){if(Ke=Te.getWireframeAttribute(G),Ke===void 0)return;mt=2}let lt=G.drawRange,ct=G.attributes.position,Bt=lt.start*mt,Tn=(lt.start+lt.count)*mt;q!==null&&(Bt=Math.max(Bt,q.start*mt),Tn=Math.min(Tn,(q.start+q.count)*mt)),Ke!==null?(Bt=Math.max(Bt,0),Tn=Math.min(Tn,Ke.count)):ct!=null&&(Bt=Math.max(Bt,0),Tn=Math.min(Tn,ct.count));let U=Tn-Bt;if(U<0||U===1/0)return;Et.setup(te,Q,He,G,Ke);let V,W=Rt;if(Ke!==null&&(V=ye.get(Ke),W=gt,W.setIndex(V)),te.isMesh)Q.wireframe===!0?(st.setLineWidth(Q.wireframeLinewidth*je()),W.setMode(Y.LINES)):W.setMode(Y.TRIANGLES);else if(te.isLine){let X=Q.linewidth;X===void 0&&(X=1),st.setLineWidth(X*je()),te.isLineSegments?W.setMode(Y.LINES):te.isLineLoop?W.setMode(Y.LINE_LOOP):W.setMode(Y.LINE_STRIP)}else te.isPoints?W.setMode(Y.POINTS):te.isSprite&&W.setMode(Y.TRIANGLES);if(te.isBatchedMesh)W.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)W.renderInstances(Bt,U,te.count);else if(G.isInstancedBufferGeometry){let X=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_=Math.min(G.instanceCount,X);W.renderInstances(Bt,U,_)}else W.render(Bt,U)};function Kt(S,z,G){S.transparent===!0&&S.side===cn&&S.forceSinglePass===!1?(S.side=On,S.needsUpdate=!0,yt(S,z,G),S.side=Pi,S.needsUpdate=!0,yt(S,z,G),S.side=cn):yt(S,z,G)}this.compile=function(S,z,G=null){G===null&&(G=S),p=vt.get(G),p.init(),v.push(p),G.traverseVisible(function(te){te.isLight&&te.layers.test(z.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),S!==G&&S.traverseVisible(function(te){te.isLight&&te.layers.test(z.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights(x._useLegacyLights);let Q=new Set;return S.traverse(function(te){let q=te.material;if(q)if(Array.isArray(q))for(let De=0;De<q.length;De++){let He=q[De];Kt(He,G,te),Q.add(He)}else Kt(q,G,te),Q.add(q)}),v.pop(),p=null,Q},this.compileAsync=function(S,z,G=null){let Q=this.compile(S,z,G);return new Promise(te=>{function q(){if(Q.forEach(function(De){O.get(De).currentProgram.isReady()&&Q.delete(De)}),Q.size===0){te(S);return}setTimeout(q,10)}ut.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let It=null;function K(S){It&&It(S)}function le(){Z.stop()}function he(){Z.start()}let Z=new sd;Z.setAnimationLoop(K),typeof self!="undefined"&&Z.setContext(self),this.setAnimationLoop=function(S){It=S,At.setAnimationLoop(S),S===null?Z.stop():Z.start()},At.addEventListener("sessionstart",le),At.addEventListener("sessionend",he),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(z),z=At.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,z,E),p=vt.get(S,v.length),p.init(),v.push(p),pt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),de.setFromProjectionMatrix(pt),ne=this.localClippingEnabled,Ee=Tt.init(this.clippingPlanes,ne),b=it.get(S,f.length),b.init(),f.push(b),we(S,z,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(xe,_e),this.info.render.frame++,Ee===!0&&Tt.beginShadows();let G=p.state.shadowsArray;if(Pe.render(G,S,z),Ee===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Gt.render(b,S),p.setupLights(x._useLegacyLights),z.isArrayCamera){let Q=z.cameras;for(let te=0,q=Q.length;te<q;te++){let De=Q[te];Ve(b,S,De,De.viewport)}}else Ve(b,S,z);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(x,S,z),Et.resetDefaultState(),j=-1,w=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?b=f[f.length-1]:b=null};function we(S,z,G,Q){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||de.intersectsSprite(S)){Q&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);let De=Ce.update(S),He=S.material;He.visible&&b.push(S,De,He,G,et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||de.intersectsObject(S))){let De=Ce.update(S),He=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),et.copy(S.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),et.copy(De.boundingSphere.center)),et.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(He)){let Ke=De.groups;for(let mt=0,lt=Ke.length;mt<lt;mt++){let ct=Ke[mt],Bt=He[ct.materialIndex];Bt&&Bt.visible&&b.push(S,De,Bt,G,et.z,ct)}}else He.visible&&b.push(S,De,He,G,et.z,null)}}let q=S.children;for(let De=0,He=q.length;De<He;De++)we(q[De],z,G,Q)}function Ve(S,z,G,Q){let te=S.opaque,q=S.transmissive,De=S.transparent;p.setupLightsView(G),Ee===!0&&Tt.setGlobalState(x.clippingPlanes,G),q.length>0&&Ye(te,q,z,G),Q&&st.viewport(P.copy(Q)),te.length>0&&Se(te,z,G),q.length>0&&Se(q,z,G),De.length>0&&Se(De,z,G),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ye(S,z,G,Q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let q=Mt.isWebGL2;Ie===null&&(Ie=new Rn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?Kn:ui,minFilter:hs,samples:q?4:0})),x.getDrawingBufferSize(wt),q?Ie.setSize(wt.x,wt.y):Ie.setSize(lo(wt.x),lo(wt.y));let De=x.getRenderTarget();x.setRenderTarget(Ie),x.getClearColor(re),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();let He=x.toneMapping;x.toneMapping=ls,Se(S,G,Q),C.updateMultisampleRenderTarget(Ie),C.updateRenderTargetMipmap(Ie);let Ke=!1;for(let mt=0,lt=z.length;mt<lt;mt++){let ct=z[mt],Bt=ct.object,Tn=ct.geometry,U=ct.material,V=ct.group;if(U.side===cn&&Bt.layers.test(Q.layers)){let W=U.side;U.side=On,U.needsUpdate=!0,bt(Bt,G,Q,Tn,U,V),U.side=W,U.needsUpdate=!0,Ke=!0}}Ke===!0&&(C.updateMultisampleRenderTarget(Ie),C.updateRenderTargetMipmap(Ie)),x.setRenderTarget(De),x.setClearColor(re,B),x.toneMapping=He}function Se(S,z,G){let Q=z.isScene===!0?z.overrideMaterial:null;for(let te=0,q=S.length;te<q;te++){let De=S[te],He=De.object,Ke=De.geometry,mt=Q===null?De.material:Q,lt=De.group;He.layers.test(G.layers)&&bt(He,z,G,Ke,mt,lt)}}function bt(S,z,G,Q,te,q){S.onBeforeRender(x,z,G,Q,te,q),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),te.onBeforeRender(x,z,G,Q,S,q),te.transparent===!0&&te.side===cn&&te.forceSinglePass===!1?(te.side=On,te.needsUpdate=!0,x.renderBufferDirect(G,z,Q,te,S,q),te.side=Pi,te.needsUpdate=!0,x.renderBufferDirect(G,z,Q,te,S,q),te.side=cn):x.renderBufferDirect(G,z,Q,te,S,q),S.onAfterRender(x,z,G,Q,te,q)}function yt(S,z,G){z.isScene!==!0&&(z=Oe);let Q=O.get(S),te=p.state.lights,q=p.state.shadowsArray,De=te.state.version,He=Ge.getParameters(S,te.state,q,z,G),Ke=Ge.getProgramCacheKey(He),mt=Q.programs;Q.environment=S.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(S.isMeshStandardMaterial?$:M).get(S.envMap||Q.environment),mt===void 0&&(S.addEventListener("dispose",Be),mt=new Map,Q.programs=mt);let lt=mt.get(Ke);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===De)return sn(S,He),lt}else He.uniforms=Ge.getUniforms(S),S.onBuild(G,He,x),S.onBeforeCompile(He,x),lt=Ge.acquireProgram(He,Ke),mt.set(Ke,lt),Q.uniforms=He.uniforms;let ct=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ct.clippingPlanes=Tt.uniform),sn(S,He),Q.needsLights=rn(S),Q.lightsStateVersion=De,Q.needsLights&&(ct.ambientLightColor.value=te.state.ambient,ct.lightProbe.value=te.state.probe,ct.directionalLights.value=te.state.directional,ct.directionalLightShadows.value=te.state.directionalShadow,ct.spotLights.value=te.state.spot,ct.spotLightShadows.value=te.state.spotShadow,ct.rectAreaLights.value=te.state.rectArea,ct.ltc_1.value=te.state.rectAreaLTC1,ct.ltc_2.value=te.state.rectAreaLTC2,ct.pointLights.value=te.state.point,ct.pointLightShadows.value=te.state.pointShadow,ct.hemisphereLights.value=te.state.hemi,ct.directionalShadowMap.value=te.state.directionalShadowMap,ct.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ct.spotShadowMap.value=te.state.spotShadowMap,ct.spotLightMatrix.value=te.state.spotLightMatrix,ct.spotLightMap.value=te.state.spotLightMap,ct.pointShadowMap.value=te.state.pointShadowMap,ct.pointShadowMatrix.value=te.state.pointShadowMatrix),Q.currentProgram=lt,Q.uniformsList=null,lt}function Ht(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=yr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function sn(S,z){let G=O.get(S);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function hn(S,z,G,Q,te){z.isScene!==!0&&(z=Oe),C.resetTextureUnits();let q=z.fog,De=Q.isMeshStandardMaterial?z.environment:null,He=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Dn,Ke=(Q.isMeshStandardMaterial?$:M).get(Q.envMap||De),mt=Q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,lt=!!G.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ct=!!G.morphAttributes.position,Bt=!!G.morphAttributes.normal,Tn=!!G.morphAttributes.color,U=ls;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(U=x.toneMapping);let V=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,W=V!==void 0?V.length:0,X=O.get(Q),_=p.state.lights;if(Ee===!0&&(ne===!0||S!==w)){let N=S===w&&Q.id===j;Tt.setState(Q,S,N)}let y=!1;Q.version===X.__version?(X.needsLights&&X.lightsStateVersion!==_.state.version||X.outputColorSpace!==He||te.isBatchedMesh&&X.batching===!1||!te.isBatchedMesh&&X.batching===!0||te.isInstancedMesh&&X.instancing===!1||!te.isInstancedMesh&&X.instancing===!0||te.isSkinnedMesh&&X.skinning===!1||!te.isSkinnedMesh&&X.skinning===!0||te.isInstancedMesh&&X.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&X.instancingColor===!1&&te.instanceColor!==null||X.envMap!==Ke||Q.fog===!0&&X.fog!==q||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==Tt.numPlanes||X.numIntersection!==Tt.numIntersection)||X.vertexAlphas!==mt||X.vertexTangents!==lt||X.morphTargets!==ct||X.morphNormals!==Bt||X.morphColors!==Tn||X.toneMapping!==U||Mt.isWebGL2===!0&&X.morphTargetsCount!==W)&&(y=!0):(y=!0,X.__version=Q.version);let T=X.currentProgram;y===!0&&(T=yt(Q,z,te));let k=!1,F=!1,oe=!1,ue=T.getUniforms(),ke=X.uniforms;if(st.useProgram(T.program)&&(k=!0,F=!0,oe=!0),Q.id!==j&&(j=Q.id,F=!0),k||w!==S){ue.setValue(Y,"projectionMatrix",S.projectionMatrix),ue.setValue(Y,"viewMatrix",S.matrixWorldInverse);let N=ue.map.cameraPosition;N!==void 0&&N.setValue(Y,et.setFromMatrixPosition(S.matrixWorld)),Mt.logarithmicDepthBuffer&&ue.setValue(Y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ue.setValue(Y,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,F=!0,oe=!0)}if(te.isSkinnedMesh){ue.setOptional(Y,te,"bindMatrix"),ue.setOptional(Y,te,"bindMatrixInverse");let N=te.skeleton;N&&(Mt.floatVertexTextures?(N.boneTexture===null&&N.computeBoneTexture(),ue.setValue(Y,"boneTexture",N.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(ue.setOptional(Y,te,"batchingTexture"),ue.setValue(Y,"batchingTexture",te._matricesTexture,C));let ie=G.morphAttributes;if((ie.position!==void 0||ie.normal!==void 0||ie.color!==void 0&&Mt.isWebGL2===!0)&&Lt.update(te,G,T),(F||X.receiveShadow!==te.receiveShadow)&&(X.receiveShadow=te.receiveShadow,ue.setValue(Y,"receiveShadow",te.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ke.envMap.value=Ke,ke.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),F&&(ue.setValue(Y,"toneMappingExposure",x.toneMappingExposure),X.needsLights&&ot(ke,oe),q&&Q.fog===!0&&Fe.refreshFogUniforms(ke,q),Fe.refreshMaterialUniforms(ke,Q,ve,me,Ie),yr.upload(Y,Ht(X),ke,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(yr.upload(Y,Ht(X),ke,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ue.setValue(Y,"center",te.center),ue.setValue(Y,"modelViewMatrix",te.modelViewMatrix),ue.setValue(Y,"normalMatrix",te.normalMatrix),ue.setValue(Y,"modelMatrix",te.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let N=Q.uniformsGroups;for(let fe=0,nt=N.length;fe<nt;fe++)if(Mt.isWebGL2){let Ft=N[fe];Vt.update(Ft,T),Vt.bind(Ft,T)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return T}function ot(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function rn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,z,G){O.get(S.texture).__webglTexture=z,O.get(S.depthTexture).__webglTexture=G;let Q=O.get(S);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=G===void 0,Q.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,z){let G=O.get(S);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,G=0){E=S,I=z,R=G;let Q=!0,te=null,q=!1,De=!1;if(S){let Ke=O.get(S);Ke.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(Y.FRAMEBUFFER,null),Q=!1):Ke.__webglFramebuffer===void 0?C.setupRenderTarget(S):Ke.__hasExternalTextures&&C.rebindTextures(S,O.get(S.texture).__webglTexture,O.get(S.depthTexture).__webglTexture);let mt=S.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(De=!0);let lt=O.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(lt[z])?te=lt[z][G]:te=lt[z],q=!0):Mt.isWebGL2&&S.samples>0&&C.useMultisampledRTT(S)===!1?te=O.get(S).__webglMultisampledFramebuffer:Array.isArray(lt)?te=lt[G]:te=lt,P.copy(S.viewport),ce.copy(S.scissor),pe=S.scissorTest}else P.copy(Le).multiplyScalar(ve).floor(),ce.copy(Ue).multiplyScalar(ve).floor(),pe=$e;if(st.bindFramebuffer(Y.FRAMEBUFFER,te)&&Mt.drawBuffers&&Q&&st.drawBuffers(S,te),st.viewport(P),st.scissor(ce),st.setScissorTest(pe),q){let Ke=O.get(S.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ke.__webglTexture,G)}else if(De){let Ke=O.get(S.texture),mt=z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ke.__webglTexture,G||0,mt)}j=-1},this.readRenderTargetPixels=function(S,z,G,Q,te,q,De){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=O.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(He=He[De]),He){st.bindFramebuffer(Y.FRAMEBUFFER,He);try{let Ke=S.texture,mt=Ke.format,lt=Ke.type;if(mt!==qn&&at.convert(mt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ct=lt===Kn&&(ut.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&ut.has("EXT_color_buffer_float"));if(lt!==ui&&at.convert(lt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Yi&&(Mt.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-Q&&G>=0&&G<=S.height-te&&Y.readPixels(z,G,Q,te,at.convert(mt),at.convert(lt),q)}finally{let Ke=E!==null?O.get(E).__webglFramebuffer:null;st.bindFramebuffer(Y.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(S,z,G=0){let Q=Math.pow(2,-G),te=Math.floor(z.image.width*Q),q=Math.floor(z.image.height*Q);C.setTexture2D(z,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,G,0,0,S.x,S.y,te,q),st.unbindTexture()},this.copyTextureToTexture=function(S,z,G,Q=0){let te=z.image.width,q=z.image.height,De=at.convert(G.format),He=at.convert(G.type);C.setTexture2D(G,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,G.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,G.unpackAlignment),z.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Q,S.x,S.y,te,q,De,He,z.image.data):z.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Q,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,Q,S.x,S.y,De,He,z.image),Q===0&&G.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(S,z,G,Q,te=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let q=S.max.x-S.min.x+1,De=S.max.y-S.min.y+1,He=S.max.z-S.min.z+1,Ke=at.convert(Q.format),mt=at.convert(Q.type),lt;if(Q.isData3DTexture)C.setTexture3D(Q,0),lt=Y.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)C.setTexture2DArray(Q,0),lt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment);let ct=Y.getParameter(Y.UNPACK_ROW_LENGTH),Bt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Tn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),U=Y.getParameter(Y.UNPACK_SKIP_ROWS),V=Y.getParameter(Y.UNPACK_SKIP_IMAGES),W=G.isCompressedTexture?G.mipmaps[te]:G.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,W.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,W.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,S.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,S.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,S.min.z),G.isDataTexture||G.isData3DTexture?Y.texSubImage3D(lt,te,z.x,z.y,z.z,q,De,He,Ke,mt,W.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(lt,te,z.x,z.y,z.z,q,De,He,Ke,W.data)):Y.texSubImage3D(lt,te,z.x,z.y,z.z,q,De,He,Ke,mt,W),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ct),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Bt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Tn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,U),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,V),te===0&&Q.generateMipmaps&&Y.generateMipmap(lt),st.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),st.unbindTexture()},this.resetState=function(){I=0,R=0,E=null,st.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=nn.workingColorSpace===Fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Ns:$u}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ns?Ut:Dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qc=class extends ri{};qc.prototype.isWebGL1Renderer=!0;var yo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Li=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ai=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jn=new D,ks=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fn=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,Jr=new D,dr=new D,fr=new D,pr=new ft,Zr=new ft,hd=new Yt,ja=new D,Qr=new D,Ya=new D,yu=new ft,_c=new ft,Mu=new ft,pn=class extends xn{constructor(e=new fn){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new ln;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new ks(n,3,0,!1)),ur.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new ft(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ka(ja.set(-.5,-.5,0),fr,a,dr,i,r),Ka(Qr.set(.5,-.5,0),fr,a,dr,i,r),Ka(Ya.set(.5,.5,0),fr,a,dr,i,r),yu.set(0,0),_c.set(1,0),Mu.set(1,1);let o=e.ray.intersectTriangle(ja,Qr,Ya,!1,Jr);if(o===null&&(Ka(Qr.set(-.5,.5,0),fr,a,dr,i,r),_c.set(0,1),o=e.ray.intersectTriangle(ja,Ya,Qr,!1,Jr),o===null))return;let c=e.ray.origin.distanceTo(Jr);c<e.near||c>e.far||t.push({distance:c,point:Jr.clone(),uv:Is.getInterpolation(Jr,ja,Qr,Ya,yu,_c,Mu,new ft),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(s,e,t,n,i,r){pr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zr.x=r*pr.x-i*pr.y,Zr.y=i*pr.x+r*pr.y):Zr.copy(pr),s.copy(e),s.x+=Zr.x,s.y+=Zr.y,s.applyMatrix4(hd)}var Eu=new D,Su=new bn,wu=new bn,Tb=new D,Tu=new Yt,Ja=new D,vc=new si,Au=new Yt,yc=new Hs,Mo=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ja),this.boundingBox.expandByPoint(Ja)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ja),this.boundingSphere.expandByPoint(Ja)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(i),e.ray.intersectsSphere(vc)!==!1&&(Au.copy(i).invert(),yc.copy(e.ray).applyMatrix4(Au),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Su.fromBufferAttribute(i.attributes.skinIndex,e),wu.fromBufferAttribute(i.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=wu.getComponent(r);if(a!==0){let o=Su.getComponent(r);Tu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Tb.copy(Eu).applyMatrix4(Tu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ha=class extends xn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bs=class extends Gn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ln,u=Ln,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ru=new Yt,Ab=new Yt,Eo=class s{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Yt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ab;Ru.multiplyMatrices(o,t[r]),Ru.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bs(t,e,e,qn,Yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ha),this.bones.push(a),this.boneInverses.push(new Yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},zs=class extends on{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Yt,Cu=new Yt,Za=[],Pu=new kn,Rb=new Yt,$r=new We,ea=new si,Cr=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Pu.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ea.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mr),Cu.multiplyMatrices(n,mr),$r.matrixWorld=Cu,$r.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let c=Za[a];c.instanceId=r,c.object=this,t.push(c)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Gs=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lu=new D,Iu=new D,Du=new Yt,Mc=new Hs,Qa=new si,Pr=class extends xn{constructor(e=new ln,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lu.fromBufferAttribute(t,i-1),Iu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lu.distanceTo(Iu);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Du.copy(i).invert(),Mc.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,u=new D,h=new D,d=new D,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=f,A=v-1;x<A;x+=m){let I=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(p,I),u.fromBufferAttribute(p,R),Mc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let j=e.ray.origin.distanceTo(d);j<e.near||j>e.far||t.push({distance:j,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let x=f,A=v-1;x<A;x+=m){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Mc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Uu=new D,Nu=new D,Lr=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Uu.fromBufferAttribute(t,i),Nu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zi=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fu=new Yt,jc=new Hs,$a=new si,eo=new D,ds=class extends xn{constructor(e=new ln,t=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Fu.copy(i).invert(),jc.copy(e.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,b=m;g<b;g++){let p=l.getX(g);eo.fromBufferAttribute(h,p),Ou(eo,p,c,i,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,b=m;g<b;g++)eo.fromBufferAttribute(h,g),Ou(eo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ou(s,e,t,n,i,r,a){let o=jc.distanceSqToPoint(s);if(o<t){let c=new D;jc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Mn=class extends Gn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vs=class s extends ln{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new D,u=new ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tn(a,3)),this.setAttribute("normal",new tn(o,3)),this.setAttribute("uv",new tn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class s extends ln{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],m=[],g=0,b=[],p=n/2,f=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(m,2));function v(){let A=new D,I=new D,R=0,E=(t-e)/n;for(let j=0;j<=r;j++){let w=[],P=j/r,ce=P*(t-e)+e;for(let pe=0;pe<=i;pe++){let re=pe/i,B=re*c+o,ae=Math.sin(B),me=Math.cos(B);I.x=ce*ae,I.y=-P*n+p,I.z=ce*me,h.push(I.x,I.y,I.z),A.set(ae,E,me).normalize(),d.push(A.x,A.y,A.z),m.push(re,1-P),w.push(g++)}b.push(w)}for(let j=0;j<i;j++)for(let w=0;w<r;w++){let P=b[w][j],ce=b[w+1][j],pe=b[w+1][j+1],re=b[w][j+1];u.push(P,ce,re),u.push(ce,pe,re),R+=6}l.addGroup(f,R,0),f+=R}function x(A){let I=g,R=new ft,E=new D,j=0,w=A===!0?e:t,P=A===!0?1:-1;for(let pe=1;pe<=i;pe++)h.push(0,p*P,0),d.push(0,P,0),m.push(.5,.5),g++;let ce=g;for(let pe=0;pe<=i;pe++){let B=pe/i*c+o,ae=Math.cos(B),me=Math.sin(B);E.x=w*me,E.y=p*P,E.z=w*ae,h.push(E.x,E.y,E.z),d.push(0,P,0),R.x=ae*.5+.5,R.y=me*.5*P+.5,m.push(R.x,R.y),g++}for(let pe=0;pe<i;pe++){let re=I+pe,B=ce+pe;A===!0?u.push(B,B+1,re):u.push(B+1,B,re),j+=3}l.addGroup(f,j,A===!0?1:2),f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class s extends Wt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Di=class s extends ln{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/i,m=new D,g=new ft;for(let b=0;b<=i;b++){for(let p=0;p<=n;p++){let f=r+p/n*a;m.x=h*Math.cos(f),m.y=h*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let b=0;b<i;b++){let p=b*(n+1);for(let f=0;f<n;f++){let v=f+p,x=v,A=v+n+1,I=v+n+2,R=v+1;o.push(x,A,R),o.push(A,I,R)}}this.setIndex(o),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qn=class s extends ln{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new D,d=new D,m=[],g=[],b=[],p=[];for(let f=0;f<=n;f++){let v=[],x=f/n,A=0;f===0&&a===0?A=.5/t:f===n&&c===Math.PI&&(A=-.5/t);for(let I=0;I<=t;I++){let R=I/t;h.x=-e*Math.cos(i+R*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+R*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),p.push(R+A,1-x),v.push(l++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){let x=u[f][v+1],A=u[f][v],I=u[f+1][v],R=u[f+1][v+1];(f!==0||a>0)&&m.push(x,A,R),(f!==n-1||c<Math.PI)&&m.push(A,I,R)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(b,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class s extends ln{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new D,h=new D,d=new D;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){let b=g/i*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(b),h.y=(e+t*Math.cos(p))*Math.sin(b),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){let b=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,v=(i+1)*m+g;a.push(b,p,v),a.push(p,f,v)}this.setIndex(a),this.setAttribute("position",new tn(o,3)),this.setAttribute("normal",new tn(c,3)),this.setAttribute("uv",new tn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wo=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},di=class extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ir=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function to(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var fs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gr,endingEnd:gr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case br:r=e,o=2*t-n;break;case so:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case br:a=e,c=2*n-t;break;case so:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),b=g*g,p=b*g,f=-d*p+2*d*b-d*g,v=(1+d)*p+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-m)*p+(1.5+m)*b+.5*g,A=m*p-m*b;for(let I=0;I!==o;++I)r[I]=f*a[u+I]+v*a[l+I]+x*a[c+I]+A*a[h+I];return r}},To=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Kc=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Cb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let b=t[h+g];if(b!==t[d+g]||b!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Os;var ps=class extends fi{};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=wr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends fi{};Ao.prototype.ValueTypeName="color";var $i=class extends fi{};$i.prototype.ValueTypeName="number";var Jc=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ui=class extends fi{InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=Os;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends fi{};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=wr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends fi{};es.prototype.ValueTypeName="vector";var Dr=class{constructor(e,t=-1,n,i=ml){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ib(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(fi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Pb(c);c=Hu(c,1,u),l=Hu(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new $i(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,g,b){if(m.length!==0){let p=[],f=[];ud(m,p,f,g),p.length!==0&&b.push(new h(d,p,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)m[d[g].morphTargets[b]]=-1;for(let b in m){let p=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];p.push(x.time),f.push(x.morphTarget===b?1:0)}i.push(new $i(".morphTargetInfluence["+b+"]",p,f))}c=m.length*a}else{let m=".bones["+t[h].name+"]";n(es,m+".position",d,"pos",i),n(Ui,m+".quaternion",d,"rot",i),n(es,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Lb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Ao;case"quaternion":return Ui;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ib(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lb(s.type);if(s.times===void 0){let t=[],n=[];ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var cs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Zc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},Db=new Zc,ts=class{constructor(e){this.manager=e!==void 0?e:Db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi={},Qc=class extends Error{constructor(e,t){super(e),this.response=t}},ua=class extends ts{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=cs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=Xi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,b=0,p=new ReadableStream({start(f){v();function v(){h.read().then(({done:x,value:A})=>{if(x)f.close();else{b+=A.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:m});for(let R=0,E=u.length;R<E;R++){let j=u[R];j.onProgress&&j.onProgress(I)}f.enqueue(A),v()}})}}});return new Response(p)}else throw new Qc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{cs.add(e,l);let u=Xi[e];delete Xi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=Xi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Xi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $c=class extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=cs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=oa("img");function c(){u(),cs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ni=class extends ts{constructor(e){super(e)}load(e,t,n,i){let r=new Gn,a=new $c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ws=class extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$n=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ec=new Yt,ku=new D,Bu=new D,da=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=class extends da{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ro=class extends Ws{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new el}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zu=new Yt,ta=new D,Sc=new D,tl=class extends da{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new bn(2,1,1,1),new bn(0,1,1,1),new bn(3,1,1,1),new bn(1,1,1,1),new bn(3,0,1,1),new bn(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),Sc.copy(n.position),Sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sc),n.updateMatrixWorld(),i.makeTranslation(-ta.x,-ta.y,-ta.z),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}},Bn=class extends Ws{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nl=class extends da{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},An=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Co=class extends Ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gs=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Po=class extends ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=cs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return cs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),cs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});cs.add(e,c),r.manager.itemStart(e)}};var Lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gu(){return(typeof performance=="undefined"?Date:performance).now()}var il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Pn.multiplyQuaternionsFlat(e,a,e,t,e,n),Pn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},vl="\\[\\]\\.:\\/",Ub=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",Nb="[^"+vl.replace("\\.","")+"]",Fb=/((?:WC+[\/:])*)/.source.replace("WC",yl),Ob=/(WCOD+)?/.source.replace("WCOD",Nb),Hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),kb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Bb=new RegExp("^"+Fb+Ob+Hb+kb+"$"),zb=["material","materials","bones","map"],sl=class{constructor(e,t,n){let i=n||gn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(e){let t=Bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=sl;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:gr,endingEnd:gr};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hf:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case ml:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===lf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===fa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=br,i.endingEnd=br):(e?i.endingStart=this.zeroSlopeAtStart?br:gr:i.endingStart=so,t?i.endingEnd=this.zeroSlopeAtEnd?br:gr:i.endingEnd=so)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Gb=new Float32Array(1),oi=class extends Ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],m=d.name,g=u[m];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,m));continue}let b=t&&t._propertyBindings[h].binding.parsedPath;g=new il(gn.create(n,m,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,m),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new To(new Float32Array(2),new Float32Array(2),1,Gb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Dr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ml),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new rl(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Dr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ur=class{constructor(e,t,n=0,i=1/0){this.ray=new Hs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(Vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)al(e[i],this,n,t);return n.sort(Vu),n}};function Vu(s,e){return s.distance-e.distance}function al(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)al(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function Ml(s,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===pa||e===No){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===pa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Fi=class extends ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Gl(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=gs.extractUrlBase(e);a=gs.resolveURL(l,this.path)}else a=gs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ua(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gd){try{a[$t.KHR_BINARY_GLTF]=new Vl(e)}catch(h){i&&i(h);return}r=JSON.parse(a[$t.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Jl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $t.KHR_MATERIALS_UNLIT:a[h]=new Al;break;case $t.KHR_DRACO_MESH_COMPRESSION:a[h]=new Wl(r,this.dracoLoader);break;case $t.KHR_TEXTURE_TRANSFORM:a[h]=new Xl;break;case $t.KHR_MESH_QUANTIZATION:a[h]=new ql;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Vb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var $t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tl=class{constructor(e){this.parser=e,this.name=$t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Dn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new An(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bn(u),l.distance=h;break;case"spot":l=new Ro(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,xs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Al=class{constructor(){this.name=$t.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,n){let i=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(i)}},Rl=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cl=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(o,o)}return Promise.all(r)}},Pl=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Ll=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Dl=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],Dn),Promise.all(r)}},Ul=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Nl=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],Dn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}},Fl=class{constructor(e){this.parser=e,this.name=$t.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ol=class{constructor(e){this.parser=e,this.name=$t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Hl=class{constructor(e){this.parser=e,this.name=$t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},kl=class{constructor(e){this.parser=e,this.name=$t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bl=class{constructor(e){this.parser=e,this.name=$t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zl=class{constructor(e){this.name=$t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}},Gl=class{constructor(e){this.name=$t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==mi.TRIANGLES&&l.mode!==mi.TRIANGLE_STRIP&&l.mode!==mi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(let g of h){let b=new Yt,p=new D,f=new Pn,v=new D(1,1,1),x=new Cr(g.geometry,g.material,d);for(let A=0;A<d;A++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,A),c.SCALE&&v.fromBufferAttribute(c.SCALE,A),x.setMatrixAt(A,b.compose(p,f,v));for(let A in c)if(A==="_COLOR_0"){let I=c[A];x.instanceColor=new zs(I.array,I.itemSize,I.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,c[A]);xn.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),m.push(x)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},gd="glTF",ba=12,dd={JSON:1313821514,BIN:5130562},Vl=class{constructor(e){this.name=$t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ba,r=new DataView(e,ba),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===dd.JSON){let l=new Uint8Array(e,ba+a,o);this.content=n.decode(l)}else if(c===dd.BIN){let l=ba+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Yl[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Yl[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],m=Fr[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(m){for(let g in m.attributes){let b=m.attributes[g],p=c[g];p!==void 0&&(b.normalized=p)}h(m)},o,l,Dn,d)})})}},Xl=class{constructor(){this.name=$t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ql=class{constructor(){this.name=$t.KHR_MESH_QUANTIZATION}},Ho=class extends fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*l,b=g-l,p=-2*m+3*d,f=m-d,v=1-p,x=f-d+h;for(let A=0;A!==o;A++){let I=a[b+A+o],R=a[b+A+c]*u,E=a[g+A+o],j=a[g+A]*u;r[A]=v*I+x*R+p*E+f*j}return r}},Wb=new Pn,jl=class extends Ho{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Wb.fromArray(r).normalize().toArray(r),r}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fd={9728:Ln,9729:In,9984:io,9985:fl,9986:na,9987:hs},pd={33071:ii,33648:Fs,10497:Hn},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xb={CUBICSPLINE:void 0,LINEAR:Os,STEP:wr},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),s.DefaultMaterial}function qs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Yb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kb(s){let e,t=s.extensions&&s.extensions[$t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wl(t.attributes):e=s.indices+":"+wl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wl(s.targets[n]);return e}function wl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Kl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zb=new Yt,Jl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new Ni(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ua(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return qs(r,o,i),xs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$t.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(gs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=El[i.type],o=Fr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new on(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=El[i.type],l=Fr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,p;if(m&&m!==h){let f=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,x=t.cache.get(v);x||(b=new l(o,f*m,i.count*m/u),x=new Rr(b,m/u),t.cache.add(v,x)),p=new ks(x,c,d%m/u,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),p=new on(b,c,g);if(i.sparse!==void 0){let f=El.SCALAR,v=Fr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,I=new v(a[1],x,i.sparse.count*f),R=new l(a[2],A,i.sparse.count*c);o!==null&&(p=new on(p.array.slice(),p.itemSize,p.normalized));for(let E=0,j=I.length;E<j;E++){let w=I[E];if(p.setX(w,R[E*c]),c>=2&&p.setY(w,R[E*c+1]),c>=3&&p.setZ(w,R[E*c+2]),c>=4&&p.setW(w,R[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=fd[d.magFilter]||In,u.minFilter=fd[d.minFilter]||hs,u.wrapS=pd[d.wrapS]||Hn,u.wrapT=pd[d.wrapT]||Hn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let p=new Gn(b);p.needsUpdate=!0,d(p)}),t.load(gs.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||Jb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$t.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$t.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[$t.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Zi,Jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gs,Jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return qt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[$t.KHR_MATERIALS_UNLIT]){let h=i[$t.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Dn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);let u=r.alphaMode||Sl.OPAQUE;if(u===Sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Sl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==en&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ft(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==en&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==en){let h=r.emissiveFactor;o.emissive=new ze().setRGB(h[0],h[1],h[2],Dn)}return r.emissiveTexture!==void 0&&a!==en&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),xs(h,r),t.associations.set(h,{materials:e}),r.extensions&&qs(i,h,r),h})}createUniqueName(e){let t=gn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return md(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Kb(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[$t.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=md(new ln,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?qb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,g=u.length;m<g;m++){let b=u[m],p=a[m],f,v=l[m];if(p.mode===mi.TRIANGLES||p.mode===mi.TRIANGLE_STRIP||p.mode===mi.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new Mo(b,v):new We(b,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===mi.TRIANGLE_STRIP?f.geometry=Ml(f.geometry,No):p.mode===mi.TRIANGLE_FAN&&(f.geometry=Ml(f.geometry,pa));else if(p.mode===mi.LINES)f=new Lr(b,v);else if(p.mode===mi.LINE_STRIP)f=new Pr(b,v);else if(p.mode===mi.LINE_LOOP)f=new So(b,v);else if(p.mode===mi.POINTS)f=new ds(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&Yb(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),xs(f,r),p.extensions&&qs(i,f,p),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&qs(i,h[0],r),h[0];let d=new St;r.extensions&&qs(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(ma.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new us(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Yt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Eo(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let m=i.channels[h],g=i.samplers[m.sampler],b=m.target,p=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],m=h[1],g=h[2],b=h[3],p=h[4],f=[];for(let v=0,x=d.length;v<x;v++){let A=d[v],I=m[v],R=g[v],E=b[v],j=p[v];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let w=n._createAnimationTracks(A,I,R,E,j);if(w)for(let P=0;P<w.length;P++)f.push(w[P])}return new Dr(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Zb)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ha:l.length>1?u=new St:l.length===1?u=l[0]:u=new xn,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),xs(u,r),r.extensions&&qs(n,u,r),r.matrix!==void 0){let h=new Yt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new St;n.name&&(r.name=i.createUniqueName(n.name)),xs(r,n),n.extensions&&qs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,m]of i.associations)(d instanceof Jn||d instanceof Gn)&&h.set(d,m);return u.traverse(d=>{let m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];bs[r.path]===bs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(bs[r.path]){case bs.weights:l=$i;break;case bs.rotation:l=Ui;break;case bs.position:case bs.scale:l=es;break;default:switch(n.itemSize){case 1:l=$i;break;case 2:case 3:default:l=es;break}break}let u=i.interpolation!==void 0?Xb[i.interpolation]:Os,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let g=new l(c[d]+"."+bs[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Kl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ui?jl:Ho;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qb(s,e,t){let n=e.attributes,i=new kn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=Kl(Fr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let b=Kl(Fr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new si;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function md(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Yl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return nn.workingColorSpace!==Dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nn.workingColorSpace}" not supported.`),xs(s,e),Qb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jb(s,e.targets,t):s})}function Si(s){let e=new Map,t=new Map,n=s.clone();return bd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)bd(s.children[n],e.children[n],t)}var Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$b=new us(-1,1,1,-1,0,1),Zl=class extends ln{constructor(){super(),this.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tn([0,2,0,0,2,0],2))}},ex=new Zl,_s=class{constructor(e){this._mesh=new We(ex,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$b)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vs=class extends ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _n?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pi.clone(e.uniforms),this.material=new _n({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _s(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xa=class extends ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},zo=class extends ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Or=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ft);this._width=n.width,this._height=n.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vs(Bo),this.copyPass.material.blending=Ri,this.clock=new Lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xa!==void 0&&(a instanceof xa?n=!0:a instanceof zo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hr=class extends ci{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var xd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ys=class s extends ci{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ft(e.x,e.y):new ft(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,a,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Rn(r,a,{type:Kn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new Rn(r,a,{type:Kn});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=xd;this.highPassUniforms=pi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _n({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Bo;this.copyUniforms=pi.clone(u.uniforms),this.blendMaterial=new _n({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new en,this.fsQuad=new _s(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _n({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new _n({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ys.BlurDirectionX=new ft(1,0);ys.BlurDirectionY=new ft(0,1);var _d={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var kr=class extends ci{constructor(){super();let e=_d;this.uniforms=pi.clone(e.uniforms),this.material=new wo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nn.getTransfer(this._outputColorSpace)===mn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ll?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ei?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var v=new Uint8Array(f.length),x=0;x<f.length;++x){var A=f.charCodeAt(x);v[x]=A>96?A-97:A>64?A-39:A+4}for(var I=0,x=0;x<f.length;++x)v[I++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,I)}function c(f,v,x,A,I,R){var E=r.exports.sbrk,j=x+3&-4,w=E(j*A),P=E(I.length),ce=new Uint8Array(r.exports.memory.buffer);ce.set(I,P);var pe=f(w,x,A,P,I.length);if(pe==0&&R&&R(w,j,A),v.set(ce.subarray(w,w+x*A)),E(w-E(0)),pe!=0)throw new Error("Malformed buffer data: "+pe)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function m(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(x){var A=x.data;v.pending-=A.count,v.requests[A.id][A.action](A.value),delete v.requests[A.id]},v}function g(f){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),x=new Blob([v],{type:"text/javascript"}),A=URL.createObjectURL(x),I=0;I<f;++I)h[I]=m(A);URL.revokeObjectURL(A)}function b(f,v,x,A,I){for(var R=h[0],E=1;E<h.length;++E)h[E].pending<R.pending&&(R=h[E]);return new Promise(function(j,w){var P=new Uint8Array(x),ce=d++;R.pending+=f,R.requests[ce]={resolve:j,reject:w},R.object.postMessage({id:ce,count:f,size:v,source:P,mode:A,filter:I},[P.buffer])})}function p(f){a.then(function(){var v=f.data;try{var x=new Uint8Array(v.count*v.size);c(r.exports[v.mode],x,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(A){self.postMessage({id:v.id,count:v.count,action:"reject",value:A})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,v,x,A,I){c(r.exports.meshopt_decodeVertexBuffer,f,v,x,A,r.exports[l[I]])},decodeIndexBuffer:function(f,v,x,A){c(r.exports.meshopt_decodeIndexBuffer,f,v,x,A)},decodeIndexSequence:function(f,v,x,A){c(r.exports.meshopt_decodeIndexSequence,f,v,x,A)},decodeGltfBuffer:function(f,v,x,A,I,R){c(r.exports[u[I]],f,v,x,A,r.exports[l[R]])},decodeGltfBufferAsync:function(f,v,x,A,I){return h.length>0?b(f,v,x,u[A],l[I]):a.then(function(){var R=new Uint8Array(f*v);return c(r.exports[u[A]],R,f,v,x,r.exports[l[I]]),R})}}}();function tx(s,e={}){let t=e.base||"harbor/harbor3d/",n=document.createElement("canvas");n.className="h3dCanvas",s.append(n);let i=document.createElement("div");i.className="h3dLabels",s.append(i);let r=document.createElement("div");r.className="h3dHand",r.textContent="\u{1F446}",s.append(r);let a=matchMedia("(pointer:coarse)").matches,o=new ri({canvas:n,antialias:!1,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio||1,a?1.5:1.75)),o.shadowMap.enabled=!0,o.shadowMap.type=a?Io:Xs,o.toneMapping=Ei,o.toneMappingExposure=1;let c=new ai;c.background=new ze(745352);let l=new ze(13624562);c.fog=new Li(l,90,260);let u=new dn(40,1,.5,900);function h(U,V){let W=Math.sin(U*127.1+V*311.7)*43758.5453;return W-Math.floor(W)}function d(U,V){let W=Math.floor(U),X=Math.floor(V),_=U-W,y=V-X,T=_*_*(3-2*_),k=y*y*(3-2*y),F=h(W,X),oe=h(W+1,X),ue=h(W,X+1),ke=h(W+1,X+1);return F+(oe-F)*T+(ue-F)*k+(F-oe-ue+ke)*T*k}function m(U,V,W=4){let X=0,_=.5,y=1;for(let T=0;T<W;T++)X+=_*d(U*y,V*y),y*=2.03,_*=.5;return X}let g=(U,V,W)=>{let X=Math.max(W-Math.abs(U-V),0)/W;return Math.max(U,V)+X*X*W*.25},b=(U,V,W)=>-g(-U,-V,W),p=(U,V,W)=>{let X=Math.min(1,Math.max(0,(W-U)/(V-U)));return X*X*(3-2*X)},f=[];function v(U,V){let W=1-Math.hypot(U/50,(V+14)/28);W=g(W,1-Math.hypot((U-27)/15,(V-6)/15),.2),W=g(W,1-Math.hypot((U+27)/15,(V-6)/15),.2);let X=1-Math.hypot(U/15.5,(V-9)/15);return W=b(W,-X*.9,.25),W+(m(U*.06,V*.06)-.5)*.22}function x(U,V){let W=v(U,V);if(W<0)return Math.max(-9.5,-.25+W*38);let X=p(-12,-30,V),_=Math.hypot(U/15.5,(V-9)/15),y=p(0,.1,W)*.9+p(.1,.45,W)*1.3*p(1.05,1.6,_)+p(.3,.75,W)*(1.5+m(U*.08+9,V*.08)*6)*X;return y+=(m(U*.3,V*.3)-.5)*.25*p(.05,.2,W),y}function A(U,V){let W=x(U,V);for(let X of f){let _=Math.hypot(U-X.x,V-X.z);W+=(X.h-W)*p(X.r+4,X.r,_)}return W}function I(U,V,W){let X={x:U,z:V,r:W,h:Math.max(1.1,x(U,V))};return f.push(X),X.h}let R=e.labels||{},E={adventure:{x:0,z:8,label:8,name:R.adventure},tavern:{x:-26,z:2,label:6,name:R.tavern},hq:{x:-13,z:-20,label:6.5,name:R.hq},vault:{x:15,z:-21,label:5,name:R.vault},market:{x:27,z:0,label:5.5,name:R.market},arena:{x:26,z:13,label:4,name:R.arena}};E.tavern.y=I(E.tavern.x,E.tavern.z,8),E.hq.y=I(E.hq.x,E.hq.z,7),E.vault.y=I(E.vault.x,E.vault.z,6),E.market.y=I(E.market.x,E.market.z,7),E.arena.y=I(E.arena.x,E.arena.z,6),E.adventure.y=0;let j={x:-4.5,z:-3};I(0,-10,6);let w=[[[j.x,-4],[-3,-10],[-10,-14],[-13,-15.5]],[[-3,-10],[6,-12],[12,-17],[15,-17.5]],[[-3,-10],[-12,-8],[-20,-3],[-23,0]],[[6,-12],[16,-8],[23,-3],[25,-1]],[[23,-3],[26,4],[26,8.5]],[[-20,-3],[-24,6],[-21,12]]];function P(U,V,W,X){let _=X[0]-W[0],y=X[1]-W[1],T=U-W[0],k=V-W[1],F=Math.max(0,Math.min(1,(T*_+k*y)/(_*_+y*y)));return Math.hypot(T-_*F,k-y*F)}function ce(U,V){let W=1e9;for(let X of w)for(let _=1;_<X.length;_++)W=Math.min(W,P(U,V,X[_-1],X[_]));return W}let pe=220,re=300,B=new Float32Array(re*re);{let U=new Zt(pe,pe,re-1,re-1);U.rotateX(-Math.PI/2);let V=U.attributes.position;for(let xt=0;xt<V.count;xt++){let Hi=V.getX(xt),Sn=V.getZ(xt),Zn=A(Hi,Sn);V.setY(xt,Zn),B[xt]=Zn}U.computeVertexNormals();let W=new Float32Array(V.count*3),X=U.attributes.normal,_=xt=>new ze(xt),y=_(13214826),T=_(15782810),k=_(16245685),F=_(7182910),oe=_(10204236),ue=_(4617263),ke=_(9339250),ie=_(7037272),N=_(12160604),fe=_(14271630),nt=new ze,Ft=new ze;for(let xt=0;xt<V.count;xt++){let Hi=V.getX(xt),Sn=V.getZ(xt),Zn=V.getY(xt),bi=X.getY(xt),Ys=m(Hi*.12,Sn*.12),ki=m(Hi*.5+40,Sn*.5);if(Zn<-.05)nt.copy(fe).lerp(y,p(-3,0,Zn));else{nt.copy(y).lerp(T,p(0,.45,Zn)).lerp(k,p(.4,.9,Zn)*ki*.7);let Ma=p(.85+Ys*.5,1.35+Ys*.5,Zn);Ft.copy(F).lerp(oe,p(.35,.7,Ys)).lerp(ue,p(.55,.8,ki)*.6),nt.lerp(Ft,Ma);let Ea=p(.86,.7,bi)*p(.8,1.6,Zn);Ft.copy(ke).lerp(ie,ki),nt.lerp(Ft,Ea);let L=ce(Hi,Sn);nt.lerp(N,p(1.6,.9,L)*(Zn>.3?.9:0)*(.8+ki*.3))}let wi=.9+ki*.2;W[xt*3]=nt.r*wi,W[xt*3+1]=nt.g*wi,W[xt*3+2]=nt.b*wi}U.setAttribute("color",new on(W,3));let ge=document.createElement("canvas");ge.width=ge.height=256;let Qe=ge.getContext("2d"),Ae=Qe.createImageData(256,256);for(let xt=0;xt<256*256;xt++){let Hi=xt%256,Sn=xt/256|0,Zn=200+(m(Hi*.09,Sn*.09,3)-.5)*70+(h(Hi,Sn)-.5)*40;Ae.data[xt*4]=Ae.data[xt*4+1]=Ae.data[xt*4+2]=Zn,Ae.data[xt*4+3]=255}Qe.putImageData(Ae,0,0);let rt=new Mn(ge);rt.wrapS=rt.wrapT=Hn,rt.repeat.set(70,70),rt.colorSpace=Ut;let Dt=new qt({vertexColors:!0,map:rt,roughness:.95,metalness:0});Dt.onBeforeCompile=xt=>{xt.uniforms.cs={value:ve},xt.uniforms.ct=me,xt.vertexShader=xt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp=(modelMatrix*vec4(transformed,1.)).xyz;`),xt.fragmentShader=xt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;uniform sampler2D cs;uniform float ct;`).replace("#include <map_fragment>",`#include <map_fragment>
float cl=texture2D(cs,vWp.xz*.006+vec2(ct*.004,ct*.0025)).r;diffuseColor.rgb*=mix(1.,.62,smoothstep(.5,.66,cl));`)};let kt=new We(U,Dt);kt.receiveShadow=!0,c.add(kt)}let ae=new Uint8Array(re*re*4);for(let U=0;U<re*re;U++)ae[U*4]=Math.max(0,Math.min(255,Math.round((B[U]+10)/20*255))),ae[U*4+3]=255;let me={value:0},ve=(()=>{let V=document.createElement("canvas");V.width=V.height=128;let W=V.getContext("2d"),X=W.createImageData(128,128);for(let y=0;y<128*128;y++){let T=y%128,k=y/128|0,F=m(T*.06,k*.06,4)*255;X.data[y*4]=X.data[y*4+1]=X.data[y*4+2]=F,X.data[y*4+3]=255}W.putImageData(X,0,0);let _=new Mn(V);return _.wrapS=_.wrapT=Fs,_})(),xe=new Bs(ae,re,re,qn,ui);xe.minFilter=xe.magFilter=In,xe.needsUpdate=!0;let _e=new D(-.55,.22,-1).normalize();{let U=new _n({side:On,depthWrite:!1,fog:!1,uniforms:{sun:{value:_e}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun;varying vec3 vp;void main(){float h=vp.y;
      vec3 hor=vec3(.84,.92,.98),mid=vec3(.56,.77,.97),top=vec3(.27,.52,.9);
      vec3 c=mix(hor,mid,smoothstep(0.,.1,h));c=mix(c,top,smoothstep(.1,.6,h));
      float d=max(dot(vp,sun),0.);c+=vec3(1.,.95,.8)*pow(d,8.)*.25+vec3(1.,.98,.9)*pow(d,600.)*3.;
      if(h<0.)c=vec3(.84,.92,.98);gl_FragColor=vec4(c,1.);}`});c.add(new We(new Qn(800,32,16),U))}function Le(){let U=document.createElement("canvas");U.width=256,U.height=128;let V=U.getContext("2d");for(let X=0;X<26;X++){let _=40+Math.random()*176,y=50+Math.random()*40,T=18+Math.random()*30,k=V.createRadialGradient(_,y,0,_,y,T);k.addColorStop(0,"rgba(255,255,255,.75)"),k.addColorStop(1,"rgba(235,242,250,0)"),V.fillStyle=k,V.beginPath(),V.arc(_,y,T,0,7),V.fill()}let W=new Mn(U);return W.colorSpace=Ut,W}let Ue=[];{let U=Le();for(let V=0;V<9;V++){let W=new pn(new fn({map:U,transparent:!0,depthWrite:!1,fog:!1,color:16777215})),X=-1.2+V*.3;W.position.set(Math.sin(X)*420,60+V%3*22,-Math.cos(X)*420),W.scale.set(220+V%3*60,70+V%2*30,1),c.add(W),Ue.push({s:W,a:X,sp:.002+V%3*.001})}}c.add(new $n(15923199,6126165,1.05));let $e=new An(16773336,2.9);$e.position.set(-45,110,-10),$e.castShadow=!0,$e.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign($e.shadow.camera,{left:-60,right:60,top:50,bottom:-50,near:10,far:220}),$e.shadow.bias=-5e-4,$e.shadow.normalBias=.03,c.add($e);let de=new An(12572927,.5);de.position.set(-40,15,-80),c.add(de);let ne=new Ni().load(t+"models/waternormals.jpg");ne.wrapS=ne.wrapT=Hn;let Ie=pi.merge([Je.fog,{t:{value:0},hm:{value:null},wn:{value:null},sunDir:{value:new D},TS:{value:pe}}]);Ie.hm.value=xe,Ie.cs={value:ve},Ie.wn.value=ne,Ie.sunDir.value.set(-.55,.35,-1).normalize();{let U=new Zt(2400,2400,240,240);U.rotateX(-Math.PI/2);let V=new _n({uniforms:Ie,transparent:!0,fog:!0,depthWrite:!1,vertexShader:`uniform float t;varying vec3 wp;
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
      }`}),W=new We(U,V);W.renderOrder=2,location.search.includes("nowater")||c.add(W)}let pt=new Fi;pt.setMeshoptDecoder(Br);let wt={},et=U=>wt[U]||(wt[U]=pt.loadAsync(t+U));async function Oe(U,V,W,X={}){let _=await et(U),y=X.skinned?Si(_.scene):_.scene.clone(!0);return y.traverse(T=>{T.isMesh&&(T.castShadow=X.shadow!==!1,T.receiveShadow=!0,T.material&&T.material.map&&(T.material.map.anisotropy=4))}),y.position.set(V,X.y!==void 0?X.y:A(V,W),W),y.rotation.y=X.ry||0,X.s&&y.scale.setScalar(X.s),(X.parent||c).add(y),X.skinned&&(y.userData.clips=_.animations),y}let je=U=>`models/q/${U}.glb`,Y=[],an=[],ut={};function Mt(U,V,W){let X=new en({color:16765802,transparent:!0,opacity:.6,depthWrite:!1,fog:!1,blending:wn}),_=new We(new Di(V,V+1,72),X);_.rotation.x=-Math.PI/2,_.position.y=W,U.add(_);let y=_.clone();y.material=X.clone(),U.add(y),Y.push(T=>{let k=T*.5%1;y.scale.setScalar(1+k*.45),y.material.opacity=.6*(1-k),X.opacity=.45+Math.sin(T*3)*.15})}function st(U,V,W,X){let _=document.createElement("canvas");_.width=_.height=64;let y=_.getContext("2d"),T=y.createRadialGradient(32,32,0,32,32,32);T.addColorStop(0,"rgba(235,230,225,.85)"),T.addColorStop(1,"rgba(235,230,225,0)"),y.fillStyle=T,y.fillRect(0,0,64,64);let k=new Mn(_),F=[];for(let oe=0;oe<10;oe++){let ue=new pn(new fn({map:k,transparent:!0,depthWrite:!1}));U.add(ue),F.push(ue)}Y.push(oe=>F.forEach((ue,ke)=>{let ie=(oe*.22+ke/F.length)%1;ue.position.set(V+ie*2.4+Math.sin(ie*5+ke)*.3,W+ie*7,X-ie),ue.scale.setScalar(.9+ie*3.2),ue.material.opacity=.6*(1-ie)*Math.min(1,ie*6)}))}function _t(U,V,W,X=c,_=1){let y=new Bn(16752704,6*_,9,1.7);y.position.set(U,V,W),X.add(y);let T=new We(new Qn(.18,8,6),new en({color:16769184}));T.position.copy(y.position),X.add(T);let k=Math.random()*9;Y.push(F=>{let oe=1+Math.sin(F*11+k)*.12+Math.sin(F*23+k)*.08;y.intensity=6*_*oe,T.scale.setScalar(oe)})}function O(U,V,W=1,X=Math.random()*3){let _=new oi(U),y=U.userData.clips.find(k=>k.name===V)||U.userData.clips[0],T=_.clipAction(y);return T.timeScale=W,T.play(),_.setTime(X),_.__off=X,an.push(_),{mix:_,a:T}}function C(U,V,W,X){let _=document.createElement("canvas");_.width=U,_.height=V,W(_.getContext("2d"),U,V);let y=new Mn(_);return y.colorSpace=Ut,y.anisotropy=4,X&&(y.wrapS=y.wrapT=Hn,y.repeat.set(X[0],X[1])),y}let M=C(256,128,(U,V,W)=>{U.fillStyle="#6f6455",U.fillRect(0,0,V,W);for(let X=0;X<4;X++)for(let _=-1;_<6;_++){let y=X%2*24,T=150+(_*7+X*13+20)%6*11;U.fillStyle=`rgb(${T},${T-12},${T-32})`,U.fillRect(_*48+y+2,X*32+2,44,28),U.fillStyle="#ffffff22",U.fillRect(_*48+y+2,X*32+2,44,4)}},[12,1]),$=C(128,128,(U,V,W)=>{for(let X=0;X<8;X++){let _=120+X*37%5*12;U.fillStyle=`rgb(${_},${_*.66|0},${_*.4|0})`,U.fillRect(0,X*16,V,15),U.fillStyle="#2a170a",U.fillRect(0,X*16+15,V,1),U.fillRect(X*53%128,X*16,2,15)}},[1,6]),ye=C(128,64,U=>{for(let V=0;V<8;V++)U.fillStyle=V%2?"#f4e7cb":"#b52a2c",U.fillRect(V*16,0,16,64);U.fillStyle="#00000030",U.fillRect(0,54,128,10)}),Te=C(128,192,(U,V,W)=>{U.fillStyle="#8f1a1d",U.fillRect(0,0,V,W),U.fillStyle="#e9b85e",U.fillRect(0,0,V,8),U.fillRect(0,W-8,V,8),U.fillStyle="#f3ead8",U.beginPath(),U.arc(64,82,30,0,7),U.fill(),U.fillRect(46,100,36,22),U.fillStyle="#8f1a1d",U.beginPath(),U.arc(52,82,8,0,7),U.arc(76,82,8,0,7),U.fill(),U.strokeStyle="#f3ead8",U.lineWidth=9,U.lineCap="round",U.beginPath(),U.moveTo(26,128),U.lineTo(102,168),U.moveTo(102,128),U.lineTo(26,168),U.stroke()}),Ce=new qt({color:7028770,roughness:.85}),Ge=new qt({map:M,roughness:.92,side:cn});function Fe(U,V,W,X,_,y,T={}){let k=new We(U,V);return k.position.set(W,X,_),k.castShadow=T.cast!==!1,k.receiveShadow=!0,T.rx&&(k.rotation.x=T.rx),T.ry&&(k.rotation.y=T.ry),T.rz&&(k.rotation.z=T.rz),y.add(k),k}function it(U,V,W,X,_,y=1){let T=Fe(new Zt(.9*y,1.35*y),new qt({map:Te,side:cn,roughness:.8}),V,W,X,U,{ry:_}),k=Math.random()*6;return Y.push(F=>{T.rotation.x=Math.sin(F*2+k)*.06}),T}function vt(U,V=1.05,W=2.1){for(let X=1;X<U.length;X++){let[_,y]=U[X-1],[T,k]=U[X],F=Math.hypot(T-_,k-y),oe=Math.atan2(T-_,k-y),ue=$.clone();ue.needsUpdate=!0,ue.repeat.set(1,F/1.6),Fe(new zt(W,.18,F),new qt({map:ue,roughness:.9}),(_+T)/2,V,(y+k)/2,c,{ry:oe});for(let ie=0;ie<=Math.ceil(F/2.2);ie++){let N=ie/Math.ceil(F/2.2),fe=_+(T-_)*N,nt=y+(k-y)*N;for(let Ft of[-1,1]){let ge=Math.cos(oe)*Ft*(W/2),Qe=-Math.sin(oe)*Ft*(W/2);Fe(new Wt(.12,.14,3.2,8),Ce,fe+ge,V-1.2,nt+Qe,c),Fe(new Wt(.1,.1,.9,8),Ce,fe+ge,V+.5,nt+Qe,c)}}let ke=ie=>Fe(new zt(.08,.08,F),Ce,(_+T)/2+Math.cos(oe)*ie*(W/2),V+.9,(y+k)/2-Math.sin(oe)*ie*(W/2),c,{ry:oe});ke(-1),ke(1)}}async function Tt(U,V,W,X){let _=new St;_.position.set(V,0,W),_.rotation.y=X,U.add(_);for(let[oe,ue]of[[-1.4,-.8],[1.4,-.8],[-1.4,.8],[1.4,.8]])Fe(new Wt(.08,.09,2.6,6),Ce,oe,1.3,ue,_);Fe(new zt(2.9,.9,1.1),new qt({map:$,roughness:.9}),0,.45,.3,_);let y=Fe(new Zt(3.4,2.2,8,1),new qt({map:ye,side:cn,roughness:.8}),0,2.6,0,_,{rx:-Math.PI/2+.32}),T=y.geometry.attributes.position;for(let oe=0;oe<T.count;oe++)T.setZ(oe,Math.sin((T.getX(oe)+1.7)/3.4*Math.PI*4)*.05);T.needsUpdate=!0,y.geometry.computeVertexNormals();let k=Fe(new Zt(3.4,.35),new qt({map:ye,side:cn}),0,2.08,1.15,_),F=[14698540,15902001,10338874,14169148];for(let oe=0;oe<9;oe++)Fe(new Qn(.16,8,6),new qt({color:F[oe%4],roughness:.6}),-1.1+oe%5*.5,.98,.1+(oe/5|0)*.35,_);return _}async function Pe(){let U=new St;U.position.set(E.adventure.x,0,E.adventure.z),c.add(U),ut.adventure=U;let V=await Oe(je("Ship_Large"),0,0,{parent:U,y:.3,ry:.08,s:1.5});V.traverse(ge=>{if(ge.isMesh&&ge.material.map){let Qe=ge.material.map.image,Ae=document.createElement("canvas");Ae.width=Qe.width,Ae.height=Qe.height;let rt=Ae.getContext("2d");rt.drawImage(Qe,0,0);let Dt=Ae.width/32;rt.fillStyle="#9c1c20",rt.fillRect(12*Dt,0,Dt,Dt),rt.fillStyle="#6e1216",rt.fillRect(5*Dt,0,Dt,Dt);let kt=new Mn(Ae);kt.flipY=!1,kt.colorSpace=Ut,ge.material=ge.material.clone(),ge.material.map=kt}}),Y.push(ge=>{V.position.y=.35+Math.sin(ge*1)*.22,V.rotation.z=Math.sin(ge*.8)*.03,V.rotation.x=Math.sin(ge*.6)*.015}),Mt(U,13,.25);let W=new en({color:16769952,transparent:!0,opacity:.1,depthWrite:!1,side:cn,blending:wn,fog:!1}),X=new We(new Wt(4,8,30,40,1,!0),W);X.position.y=15,Y.push(ge=>{W.opacity=.07+Math.sin(ge*2)*.03});for(let[ge,Qe,Ae,rt,Dt]of[["Characters_Captain_Barbarossa",-1.5,.3,.4,"Wave"],["Characters_Anne",3.5,-.6,-.3,"Idle"],["Characters_Mako",-6.2,.2,1.2,"Yes"]]){let kt=await Oe(je(ge),Qe,Ae,{parent:V,skinned:!0,y:2.05,ry:rt,s:.8});O(kt,Dt)}vt([[j.x,-6],[j.x,3.2]]),vt([[-19,1.5],[-12,3.4],[-5.6,3.4]]),vt([[19,1.5],[12,3.4],[6,3.4]]);for(let[ge,Qe]of[[-12,3.4],[12,3.4],[j.x,2.5]])Fe(new Wt(.09,.09,2,6),Ce,ge+1.05,2.1,Qe+.9,c),_t(ge+1.05,3.2,Qe+.9,c,.6);for(let[ge,Qe]of[[-6,-3.5],[-3,-1]])_t(ge,2.6,Qe);await Oe(je("Prop_Barrel"),-6.2,-2,{y:1.25}),await Oe(je("Prop_Barrel"),-6.6,-1.2,{y:1.25,ry:1}),await Oe(je("Prop_Bucket_Fishes"),-2.6,-4,{y:1.25});let _=new St;_.position.set(E.tavern.x,E.tavern.y,E.tavern.z),c.add(_),ut.tavern=_,await Oe(je("Environment_House1"),0,0,{parent:_,y:0,ry:.55,s:.9}),st(_,-2.5,7.5,-1),_t(3.5,2.2,2.6,_,.8),_t(-4,2.2,3.6,_,.8);for(let[ge,Qe]of[[2.5,5.2],[5.5,3.2],[-.8,6.4]]){Fe(new Wt(.75,.75,.1,16),Ce,ge,.95,Qe,_),Fe(new Wt(.12,.2,.9,8),Ce,ge,.45,Qe,_),await Oe(je("Prop_Bottle_2"),ge+.2,Qe,{parent:_,y:1,s:.6}),await Oe(je("Prop_Barrel"),ge-1.1,Qe+.3,{parent:_,y:0,s:.8}),await Oe(je("Prop_Barrel"),ge+1.1,Qe-.2,{parent:_,y:0,s:.8});let Ae=new Bn(16756832,2.5,4,2);Ae.position.set(ge,1.4,Qe),_.add(Ae)}{let ge=new St;_.add(ge);let Qe=new D(-3.5,3.2,3.8),Ae=new D(7,3.2,1.5);Fe(new Wt(.08,.08,3.3,6),Ce,Ae.x,1.6,Ae.z,_);for(let rt=0;rt<=14;rt++){let Dt=rt/14,kt=Qe.clone().lerp(Ae,Dt);kt.y-=Math.sin(Dt*Math.PI)*.7;let xt=new We(new Qn(.09,6,4),new en({color:16767120}));xt.position.copy(kt),ge.add(xt)}}for(let[ge,Qe,Ae,rt,Dt]of[["Characters_Henry",1.4,6.2,"Yes",2.4],["Characters_Mako",6.4,4.2,"Idle",3.9]]){let kt=await Oe(je(ge),Qe,Ae,{parent:_,skinned:!0,y:0,ry:Dt,s:1.35});O(kt,rt)}let y=new St;y.position.set(E.hq.x,E.hq.y,E.hq.z),c.add(y),ut.hq=y,await Oe(je("Environment_House3"),0,0,{parent:y,y:0,ry:.25,s:1.25}),await Oe("models/kenney/pirate/flag-pirate-high.glb",-5.2,2.6,{parent:y,y:0,s:1.2}),await Oe("models/kenney/pirate/flag-pirate-high.glb",5.2,3.4,{parent:y,y:0,s:1.2}),await Oe(je("Prop_Cannon"),-3,4.4,{parent:y,y:.4,ry:.4}),await Oe(je("Prop_Cannon"),3.2,4.8,{parent:y,y:.4,ry:.1}),_t(0,2.5,3.2,y,.8),it(y,-2,2.6,3.4,0),it(y,2.2,2.6,3.6,0);let T=new St;T.position.set(E.vault.x,E.vault.y,E.vault.z),c.add(T),ut.vault=T,await Oe(je("Environment_Skulls"),0,0,{parent:T,y:1.2,ry:-.35,s:1.3}),await Oe(je("Prop_Chest_Gold"),-.5,4.2,{parent:T,y:0,ry:-.3}),await Oe(je("Prop_GoldBag"),1.6,4.6,{parent:T,y:0}),await Oe(je("Prop_Coins"),-2.2,4.8,{parent:T,y:0}),await Oe(je("Prop_Coins"),.9,5.6,{parent:T,y:0,ry:1});let k=new Bn(16760896,10,10,1.6);k.position.set(0,2,5),T.add(k),Y.push(ge=>{k.intensity=9+Math.sin(ge*4)*3}),Rt(T,0,1,4.8);let F=new St;F.position.set(E.market.x,E.market.y,E.market.z),c.add(F),ut.market=F,await Oe(je("Environment_House2"),3.5,-3,{parent:F,y:0,ry:-.5,s:.9});for(let[ge,Qe,Ae]of[[-4,1.5,.5],[-.3,3.2,.15],[3.6,3.8,-.25]])await Tt(F,ge,Qe,Ae);let oe=await Oe(je("Characters_Anne"),-.3,2.2,{parent:F,skinned:!0,y:0,ry:0,s:1.35});O(oe,"Wave");for(let[ge,Qe,Ae]of[["Prop_Bucket_Fishes",-4.6,3],["Prop_Barrel",4.6,2],["Prop_Fish_Tuna",-1.3,4.6]])await Oe(je(ge),Qe,Ae,{parent:F,y:0,ry:Math.random()*6});let ue=new St;ue.position.set(E.arena.x,E.arena.y,E.arena.z),c.add(ue),ut.arena=ue;{let Ae=Math.PI*1.5+.4,rt=Math.PI*2-.8;Fe(new Vs(6.6-.3,48),new qt({color:14925962,roughness:1}),0,.06,0,ue,{rx:-Math.PI/2,cast:!1}),Fe(new Wt(6.6,6.6+.35,2.6,56,1,!0,Ae,rt),Ge,0,1.3,0,ue),Fe(new Wt(6.6-.55,6.6-.55,1.4,56,1,!0,Ae,rt),Ge,0,.7,0,ue);let Dt=Fe(new Di(6.6-.55,6.6+.02,56,1,Ae-Math.PI/2,rt),new qt({color:10260346,roughness:.9,side:cn}),0,2.6,0,ue,{rx:-Math.PI/2});Dt.rotation.z=Math.PI;for(let kt=0;kt<30;kt++){let xt=Ae+rt*(kt+.5)/30;Fe(new zt(.55,.55,.45),Ge,Math.sin(xt)*(6.6-.2),2.85,Math.cos(xt)*(6.6-.2),ue,{ry:xt})}for(let kt of[Ae+.05,Ae+rt-.05])Fe(new zt(.9,3.6,.9),Ge,Math.sin(kt)*(6.6-.2),1.8,Math.cos(kt)*(6.6-.2),ue),_t(Math.sin(kt)*(6.6-.2),3.9,Math.cos(kt)*(6.6-.2),ue,.9);for(let kt=0;kt<6;kt++){let xt=Ae+rt*(kt+.5)/6;it(ue,Math.sin(xt)*(6.6+.4),1.5,Math.cos(xt)*(6.6+.4),xt,1.1)}for(let kt of[Ae+rt*.3,Ae+rt*.7])_t(Math.sin(kt)*(6.6-.2),3.3,Math.cos(kt)*(6.6-.2),ue,.6)}let ke=await Oe(je("Characters_Sharky"),-1.3,0,{parent:ue,skinned:!0,y:.06,ry:Math.PI/2,s:1.35});O(ke,"Sword",1,0);let ie=await Oe(je("Characters_Henry"),1.3,0,{parent:ue,skinned:!0,y:.06,ry:-Math.PI/2,s:1.35});O(ie,"Sword",1,.45);for(let[ge,Qe,Ae]of[["Characters_Skeleton","Yes",1.9],["Characters_Anne","Wave",2.5],["Characters_Mako","Yes",3.6]]){let rt=Ae,Dt=await Oe(je(ge),Math.cos(rt)*4.6,Math.sin(rt)*4.6,{parent:ue,skinned:!0,y:0,ry:-rt-Math.PI/2,s:1.35});O(Dt,Qe)}let N=(()=>{let ge=7;return()=>(ge=ge*16807%2147483647)/2147483647})(),fe=0;for(let ge=0;ge<400&&fe<46;ge++){let Qe=(N()-.5)*110,Ae=(N()-.5)*70-6,rt=A(Qe,Ae),Dt=v(Qe,Ae);if(rt<.5||Dt>.55||ce(Qe,Ae)<2.5||Object.values(E).some(xt=>Math.hypot(xt.x-Qe,xt.z-Ae)<(xt===E.adventure?15:9)))continue;let kt=await Oe(je("Environment_PalmTree_"+(1+ge%3)),Qe,Ae,{ry:N()*6,s:1.1+N()*.6});Lt(kt),fe++}for(let[ge,Qe,Ae,rt,Dt]of[["Environment_Cliff2",-40,-26,.5,1.6],["Environment_Cliff3",38,-28,2,1.7],["Environment_Cliff4",0,-36,1,1.8],["Environment_Cliff1",-48,-6,1,1.4],["Environment_Cliff1",49,-8,3,1.3],["Environment_Cliff4",-60,30,1,1.4],["Environment_Cliff2",64,26,2.4,1.3]])await Oe(je(ge),Qe,Ae,{ry:rt,s:Dt,y:Math.max(-1,A(Qe,Ae)-1)});for(let ge=0;ge<26;ge++){let Qe=N()*6.28,Ae=Math.cos(Qe)*(36+N()*18),rt=Math.sin(Qe)*(22+N()*12)-8,Dt=A(Ae,rt);Dt>1||Dt<-1.5||await Oe(je("Environment_Rock_"+(1+ge%5)),Ae,rt,{ry:N()*6,s:1.5+N()*2.5,y:Dt-.2})}await Oe(je("Environment_LargeBones"),-15,13,{ry:.8,s:.8,y:A(-15,13)-.3}),await Oe(je("Environment_Sawmill"),-20,-14,{ry:.5,s:1.6});for(let[ge,Qe]of[[-3,-10],[6,-12],[-12,-8],[16,-8],[-20,-3],[23,-3]]){let Ae=A(ge+1.4,Qe);await Oe("models/kenney/town/lantern.glb",ge+1.4,Qe,{s:2.4}),_t(ge+1.4,Ae+3.3,Qe,c,.55)}await Oe("models/kenney/town/fountain-round.glb",0,-10,{s:2.2});for(let[ge,Qe,Ae,rt,Dt]of[["Environment_Cliff2",-150,-170,.4,5],["Environment_Cliff3",-60,-210,1.4,4],["Environment_Cliff4",110,-190,2.2,5.5],["Environment_Cliff1",190,-130,.8,4]])await Oe(je(ge),Qe,Ae,{ry:rt,s:Dt,y:-2});for(let[ge,Qe,Ae]of[[70,.03,0],[86,.022,2.6]]){let rt=await Oe(je("Ship_Small"),0,0,{y:0,s:1.6});Y.push(Dt=>{let kt=Ae+Dt*Qe;rt.position.set(Math.cos(kt)*ge,Math.sin(Dt*1.3+Ae)*.2,10+Math.sin(kt)*ge*.5),rt.rotation.y=-kt+Math.PI,rt.rotation.z=Math.sin(Dt+Ae)*.05})}{let ge=await Oe(je("Ship_Large"),0,0,{y:0,s:1.1});Y.push(Qe=>{let Ae=3.8+Qe*.015;ge.position.set(Math.cos(Ae)*110,Math.sin(Qe)*.2-.2,-60+Math.sin(Ae)*40),ge.rotation.y=-Ae+Math.PI})}for(let[ge,Qe]of[[0,22],[2.7,27]]){let Ae=await Oe("models/kenney/pirate/boat-row-small.glb",0,Qe,{y:0,s:1.1});Y.push(rt=>{let Dt=(rt*.03+ge*.2)%1;Ae.position.x=-45+Dt*90,Ae.position.y=Math.sin(rt*2+ge)*.1-.15,Ae.rotation.y=Math.PI/2,Ae.rotation.z=Math.sin(rt*1.7)*.05})}{let ge=await Oe(je("Characters_Shark"),0,0,{skinned:!0,y:-.6,s:1.2});O(ge,"Swim"),Y.push(Qe=>{let Ae=Qe*.25;ge.position.set(14+Math.cos(Ae)*9,-.55,26+Math.sin(Ae)*5),ge.rotation.y=-Ae})}for(let ge=0;ge<3;ge++){let Qe=await Oe(je("Prop_Fish_Mackerel"),0,0,{y:-5,s:.7,shadow:!1}),Ae=ge*2.3,rt=[-14,10,30][ge],Dt=[24,30,22][ge];Y.push(kt=>{let xt=(kt+Ae)%5/1.1;if(xt>1){Qe.visible=!1;return}Qe.visible=!0,Qe.position.set(rt+xt*3,-.3+Math.sin(xt*Math.PI)*1.8,Dt),Qe.rotation.z=(.5-xt)*2.2})}let nt=["Characters_Henry","Characters_Anne","Characters_Mako","Characters_Sharky","Characters_Captain_Barbarossa","Characters_Skeleton"],Ft=0;for(let ge of w)for(let Qe=0;Qe<2;Qe++)await Gt(je(nt[Ft++%nt.length]),ge,Ft);for(let[ge,Qe,Ae,rt,Dt]of[["Characters_Henry",-1.5,-13,"Idle",0],["Characters_Anne",.2,-13.8,"Yes",2.6],["Characters_Mako",-22,4.6,"No",1],["Characters_Sharky",-20.6,5.8,"Idle",3.8],["Characters_Skeleton",13,-15,"Wave",.3]]){let kt=await Oe(je(ge),Qe,Ae,{skinned:!0,ry:Dt,s:1.35});O(kt,rt)}gt()}async function Gt(U,V,W){let X=await Oe(U,V[0][0],V[0][1],{skinned:!0,s:1.35}),{a:_}=O(X,"Walk",1.15),y=[],T=0;for(let oe=1;oe<V.length;oe++){let ue=V[oe-1],ke=V[oe],ie=Math.hypot(ke[0]-ue[0],ke[1]-ue[1]);y.push({a:ue,b:ke,l:ie}),T+=ie}let k=1.3+W%3*.2,F=W*9.7;Y.push(oe=>{let ue=(oe*k+F)%(2*T),ke=ue>T;ke&&(ue=2*T-ue);for(let ie of y){if(ue<=ie.l){let N=ue/ie.l,fe=ie.a[0]+(ie.b[0]-ie.a[0])*N,nt=ie.a[1]+(ie.b[1]-ie.a[1])*N;X.position.set(fe+(ke?.7:-.7),A(fe,nt),nt);let Ft=ie.b[0]-ie.a[0],ge=ie.b[1]-ie.a[1];ke&&(Ft=-Ft,ge=-ge),X.rotation.y=Math.atan2(Ft,ge);break}ue-=ie.l}})}function Lt(U){let V=Math.random()*6;Y.push(W=>{U.rotation.z=Math.sin(W*.9+V)*.025,U.rotation.x=Math.sin(W*.7+V)*.02})}function Rt(U,V,W,X){let _=new ln,y=40,T=new Float32Array(y*3);_.setAttribute("position",new on(T,3));let k=new Zi({color:16771488,size:.25,transparent:!0,depthWrite:!1,blending:wn}),F=new ds(_,k);U.add(F),Y.push(oe=>{for(let ue=0;ue<y;ue++){let ke=(oe*.35+ue/y)%1,ie=ue*2.4;T[ue*3]=V+Math.cos(ie)*(1+ue%3*.6),T[ue*3+1]=W+ke*3.5,T[ue*3+2]=X+Math.sin(ie)*(1+ue%3*.6)}_.attributes.position.needsUpdate=!0,k.opacity=.9})}function gt(){let U=new ln;U.setAttribute("position",new tn([-.7,.15,0,-.1,0,.05,.1,0,.05,.7,.15,0,0,0,-.25,0,0,.3],3)),U.setIndex([0,1,4,1,5,4,2,3,4,2,4,5]),U.computeVertexNormals();let V=new Ir({color:15262942,side:cn});for(let W=0;W<9;W++){let X=new We(U.clone(),V);X.scale.setScalar(.9),c.add(X);let _=14+W*4,y=20+W%3*3,T=W*1.3,k=.2+W%4*.04,F=X.geometry.attributes.position;Y.push(oe=>{let ue=T+oe*k;X.position.set(Math.cos(ue)*_,y+Math.sin(oe+W)*1,-4+Math.sin(ue)*_*.6),X.rotation.y=-ue;let ke=Math.sin(oe*7+W)*.35;F.setY(0,.15+ke),F.setY(3,.15+ke),F.needsUpdate=!0})}}let at=new Rn(1,1,{samples:a?0:4,type:Kn}),Et=new Or(o,at);Et.addPass(new Hr(c,u));let Vt=new ys(new ft(256,256),.45,.55,.82);Et.addPass(Vt),Vt.enabled=!a,Et.addPass(new kr);let Xt=new vs({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;
    float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.16);c=(c-.5)*1.05+.5;
    c*=vec3(1.,1.,1.01);float v=smoothstep(.95,.3,length((vUv-.5)*vec2(1.25,1.)));c*=mix(.7,1.,v);gl_FragColor=vec4(c,1.);}`});Et.addPass(Xt);let At={adventure:"\u2693",hq:"\u2605",vault:"\u25C6",tavern:"\u{1F37A}",market:"$",arena:"\u2694"},Ne={};function H(U){return U==="adventure"?`<i>${At[U]}</i><b>${E[U].name||""}</b><em>\u25B6 ${R.play||"PLAY"}</em>`:`<i>${At[U]}</i><b>${E[U].name||""}</b>`}for(let U in E){let V=document.createElement("button");V.className="lbl"+(U==="adventure"?" main":""),V.dataset.id=U,V.innerHTML=U==="adventure"?`<i>${At[U]}</i><b>${E[U].name||""}</b><em>\u25B6 ${R.play||"PLAY"}</em>`:`<i>${At[U]}</i><b>${E[U].name||""}</b>`,V.setAttribute("aria-label",E[U].name||U),V.onclick=W=>{W.stopPropagation(),yt(U)},i.append(V),Ne[U]=V}let qe=new D,Be=1,dt=1;function Xe(){var k;let U=Date.now(),V=Xe.avoid,W=V&&U-V.at<=500?V.list:(Xe.avoid={at:U,list:((k=e.avoid)==null?void 0:k.call(e))||[]}).list,X=Xe.sizes;if(!X||X.n!==Object.keys(Ne).length){X=Xe.sizes={n:Object.keys(Ne).length};for(let F in Ne)X[F]=[Ne[F].offsetWidth||90,Ne[F].offsetHeight||30]}let _=Object.keys(Ne).map(F=>({id:F,el:Ne[F],width:X[F][0],height:X[F][1]})),y=[];for(let F of _){let oe=E[F.id];qe.set(oe.x,(oe.y||0)+oe.label,oe.z).project(u);let ue=F.width/2+6,ke=Math.min(Be-ue,Math.max(ue,(qe.x*.5+.5)*Be)),ie=Math.max(F.height+4,(-qe.y*.5+.5)*dt),N=0;for(let fe of W){let nt=ke-ue,Ft=ke+ue,ge=ie-F.height,Qe=ie;Ft>fe.left&&nt<fe.right&&Qe>fe.top&&ge<fe.bottom&&(N=fe.bottom-ge+4)}y.push({...F,x:ke,y:ie+N})}for(let F of y){let oe=`translate(${F.x}px,${F.y}px) translate(-50%,-100%)`;F.el.style.transform!==oe&&(F.el.style.transform=oe)}let T=y.find(F=>F.id==="adventure");T&&(r.style.left=T.x+T.width/2-24+"px",r.style.top=T.y-14+"px"),r.style.display=he?"none":""}let Kt=new D(0,0,-13),It=0,K=0,le=0,he=null,Z=0,we=null,Ve=0,Ye=()=>we!==null?we*1e3:performance.now(),Se=U=>U<.5?4*U*U*U:1-Math.pow(-2*U+2,3)/2;function bt(U){let V=e.skipIntro?1:Math.min(1,U/4.5),W=Se(V),X=150-88*W,_=ma.lerp(88,24,W)*Math.PI/180,y=(1-W)*.6+K*.45+(V>=1?Math.sin((U-4.5)*.15)*.06:0),T=Kt.x,k=Kt.y,F=Kt.z,oe=X;if(he){let ue=E[he],ke=Se(Math.min(1,(Ye()-Z)/1e3));T+=(ue.x-T)*ke*.6,F+=(ue.z-F)*ke*.6,k+=((ue.y||0)-k)*ke*.6,oe=X*(1-.3*ke)}return u.position.set(T+Math.sin(y)*Math.cos(_)*oe,k+Math.sin(_)*oe,F+Math.cos(y)*Math.cos(_)*oe),u.lookAt(T,k,F),V}function yt(U){he=U,Z=Ye(),mt&&(i.querySelectorAll(".lbl").forEach(V=>V.classList.toggle("sel",V.dataset.id===U)),yt.until=Ye()+1400,clearTimeout(yt.tm),yt.tm=setTimeout(()=>{var V;Ke||(V=e.onSelect)==null||V.call(e,U)},520))}let Ht=new Ur,sn=new ft,hn=null,ot=U=>{hn={x:U.clientX,d:le}},rn=U=>{hn&&(le=ma.clamp(hn.d-(U.clientX-hn.x)/Be*2,-1,1))},S=U=>{if(hn&&Math.abs(U.clientX-hn.x)<8){let V=s.getBoundingClientRect();sn.set((U.clientX-V.left)/Be*2-1,-(U.clientY-V.top)/dt*2+1),Ht.setFromCamera(sn,u);let W=Ht.intersectObjects(Object.values(ut),!0);if(W.length){let X=W[0].object;for(;X&&!Object.values(ut).includes(X);)X=X.parent;let _=Object.keys(ut).find(y=>ut[y]===X);_&&yt(_)}}hn=null};n.addEventListener("pointerdown",ot),addEventListener("pointermove",rn),addEventListener("pointerup",S);function z(U=!1){Xe.sizes=null,Xe.avoid=null;let V=Math.max(1,s.clientWidth),W=Math.max(1,s.clientHeight);Be=V,dt=W,o.setSize(V,W,!1),Et.setSize(V,W),Vt.resolution.set(V/2,W/2),u.aspect=V/W,u.fov=V/W>1.6?47:62,u.updateProjectionMatrix(),U&&mt&&Xe()}z();let G=()=>{!Ke&&s.clientWidth&&s.clientHeight&&z(!0)};addEventListener("resize",G);let Q=typeof ResizeObserver=="function"?new ResizeObserver(G):null;Q==null||Q.observe(s);function te(){let U=Math.max(0,(Ye()-It)/1e3),V=Math.min(Math.max(U-Ve,0),.1);Ve=U,K+=(le-K)*.08,(s.clientWidth!==Be||s.clientHeight!==dt)&&z(),he&&Ye()>yt.until&&(he=null,i.querySelectorAll(".lbl").forEach(_=>_.classList.remove("sel")));let W=bt(U);Ie.t.value=U,me.value=U;let X=u.position.distanceTo(Kt);c.fog.near=X*2,c.fog.far=X*7;for(let _ of Ue)_.a+=_.sp*V,_.s.position.x=Math.sin(_.a)*420,_.s.position.z=-Math.cos(_.a)*420;for(let _ of Y)_(U);for(let _ of an)we!==null?_.setTime(U+(_.__off||0)):_.update(V);Xe(),s.classList.toggle("h3dReady",mt&&W>=.85),Et.render()}let q={getDelta(){return 0}},De=0,He=!1,Ke=!1,mt=!1,lt={last:0,n:0,ms:0},ct=a?1e3/30-2:0;function Bt(U=0){if(De=0,He||Ke||(De=requestAnimationFrame(Bt),we!==null)||ct&&lt.last&&U-lt.last<ct)return;let V=Ye();te();let W=Ye()-V;if(lt.last=U,a&&(lt.n++,lt.ms+=W,lt.n>=60)){let X=lt.ms/lt.n;lt.n=0,lt.ms=0;let _=o.getPixelRatio();X>28&&_>.8&&(o.setPixelRatio(Math.max(.75,_-.25)),z())}}return{loaded:Pe().then(()=>{Ke||(mt=!0,It=performance.now(),s.classList.add("h3dLoaded"),!De&&!He&&(De=requestAnimationFrame(Bt)))}),pause(){He=!0,cancelAnimationFrame(De),De=0},resume(){Ke||(He=!1,e.skipIntro=!0,G(),q.getDelta(),!De&&mt&&(De=requestAnimationFrame(Bt)))},select:yt,step(U){we=U,te()},setLabels(U){Xe.sizes=null,Object.assign(R,U||{});for(let V in Ne)E[V].name=R[V],Ne[V].innerHTML=H(V),Ne[V].setAttribute("aria-label",R[V]||V)},get state(){return{ready:mt,paused:He,disposed:Ke,focus:he,labels:Object.keys(Ne).length}},dispose(){var U,V;Ke=!0,cancelAnimationFrame(De),De=0,clearTimeout(yt.tm),n.removeEventListener("pointerdown",ot),removeEventListener("pointermove",rn),removeEventListener("pointerup",S),removeEventListener("resize",G),Q==null||Q.disconnect(),c.traverse(W=>{W.geometry&&W.geometry.dispose();let X=W.material;X&&(Array.isArray(X)?X:[X]).forEach(_=>{for(let y in _)_[y]&&_[y].isTexture&&_[y].dispose();_.dispose()})}),(U=Et.dispose)==null||U.call(Et),at.dispose(),o.dispose(),(V=o.forceContextLoss)==null||V.call(o),n.remove(),i.remove(),r.remove()}}}function nx(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}window.PirateHarbor3D={create:tx,supported:nx,version:1};function Go(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ix(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=Go(t,n),l=Go(t+1,n),u=Go(t,n+1),h=Go(t+1,n+1);return c+(l-c)*a+(u-c)*o+(c-l-u+h)*a*o}function zr(s,e,t=4){let n=0,i=.5,r=1;for(let a=0;a<t;a++)n+=i*ix(s*r,e*r),r*=2.03,i*=.5;return n}var Ms=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},_a=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Ql=(s,e,t)=>s+(e-s)*t;function Gr(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new Mn(t);return r.colorSpace=Ut,r}var js={sea:[[.06,.9,1.25,1,.2],[.09,-.6,1.05,.45,.35],[.21,.3,1.9,.22,-.8],[.035,.2,.7,1.4,.1]],shore:[[.12,.5,1.1,.12,.2],[.2,-.4,1.4,.07,.9],[.05,.1,.6,.18,.1]]};function Vr(s,e,t,n){let i=0;for(let[r,a,o,c,l]of s)i+=Math.sin((e*a+t*(1-Math.abs(a)))*r*6.283+n*o+l)*c;return i}function sx(s,e={}){let t=e.base||"harbor/harbor3d/",n=matchMedia("(pointer:coarse)").matches,i=document.createElement("canvas");i.className="st3d",i.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",s.prepend(i);let r=new ri({canvas:i,antialias:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,n?1.5:1.75)),r.shadowMap.enabled=!0,r.shadowMap.type=Xs,r.toneMapping=Ei,r.toneMappingExposure=1;let a=new ai,o=new dn(42,1,.3,2e3),c=new Fi;c.setMeshoptDecoder(Br);let l={},u=K=>l[K]||(l[K]=c.loadAsync(t+K)),h=K=>`models/q/${K}.glb`,d=new St;a.add(d);let m=!1,g=[],b=[],p=null,f=0,v=0,x=!1,A=!1,I=0,R=performance.now(),E={pos:new D(0,30,80),look:new D,tpos:new D(0,30,80),tlook:new D,rate:1.4},j=0,w=0,P=[],ce=Gr([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),pe=Gr([[0,"rgba(200,200,205,.85)"],[.6,"rgba(150,150,160,.35)"],[1,"rgba(120,120,130,0)"]]),re=Gr([[0,"rgba(40,36,36,.9)"],[.6,"rgba(30,28,28,.4)"],[1,"rgba(20,20,20,0)"]]),B=Gr([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),ae=Gr([[0,"rgba(235,245,255,1)"],[1,"rgba(200,225,245,0)"]],32),me=Gr([[0,"rgba(70,120,70,1)"],[1,"rgba(40,80,50,0)"]],32);async function ve(K,le,he,Z,we={}){let Ve=await u(K);if(x)return new St;let Ye=we.skinned?Si(Ve.scene):Ve.scene.clone(!0);return Ye.traverse(Se=>{Se.isMesh&&(Se.castShadow=we.shadow!==!1,Se.receiveShadow=!0)}),Ye.position.set(le,he,Z),Ye.rotation.y=we.ry||0,we.s&&Ye.scale.setScalar(we.s),(we.parent||d).add(Ye),we.skinned&&(Ye.userData.clips=Ve.animations),Ye}function xe(K,le,he=1,Z=Math.random()*2){let we=new oi(K),Ve=K.userData.clips.find(Se=>Se.name===le)||K.userData.clips[0],Ye=we.clipAction(Ve);return Ye.timeScale=he,Ye.play(),we.setTime(Z),b.push(we),K.userData.mix=we,K.userData.act=Ye,Ye}function _e(K,le,he=1){let Z=K.userData.mix;if(!Z)return;let we=K.userData.clips.find(Ye=>Ye.name===le);if(!we)return;let Ve=Z.clipAction(we);Ve.timeScale=he,Ve.reset().play(),K.userData.act&&K.userData.act!==Ve&&K.userData.act.crossFadeTo(Ve,.3,!1),K.userData.act=Ve}function Le(K,le,he=0){K.traverse(Z=>{if(!Z.isMesh||!Z.material.map)return;let we=Z.material.map.image,Ve=document.createElement("canvas");Ve.width=we.width,Ve.height=we.height;let Ye=Ve.getContext("2d");Ye.drawImage(we,0,0);let Se=Ve.width/32;for(let[yt,Ht,sn]of le)Ye.fillStyle=sn,Ye.fillRect(yt*Se,Ht*Se,Se,Se);he&&(Ye.fillStyle=`rgba(10,10,16,${he})`,Ye.globalCompositeOperation="multiply",Ye.fillRect(0,0,Ve.width,Ve.height));let bt=new Mn(Ve);bt.flipY=!1,bt.colorSpace=Ut,Z.material=Z.material.clone(),Z.material.map=bt})}let Ue=[[12,0,"#9c1c20"],[5,0,"#6e1216"]],$e=[[12,0,"#1b1b22"],[5,0,"#3a0d10"]];function de(K,le,he){var we;let Z=new pn(new fn({map:K,transparent:!0,depthWrite:!1,blending:he.add?wn:Ci,color:he.color||16777215,fog:he.fog!==!1}));return Z.position.copy(le),Z.scale.setScalar(he.size||1),d.add(Z),P.push({s:Z,v:he.v?he.v.clone():new D,g:he.g||0,life:he.life||1,age:0,grow:he.grow||0,size:he.size||1,a:(we=he.a)!=null?we:1,drag:he.drag||0}),Z}function Ee(K){var le;for(let he=P.length-1;he>=0;he--){let Z=P[he];if(Z.age+=K,Z.age>=Z.life||!Z.s.parent){(le=Z.s.parent)==null||le.remove(Z.s),Z.s.material.dispose(),P.splice(he,1);continue}Z.v.y-=Z.g*K,Z.drag&&Z.v.multiplyScalar(Math.max(0,1-Z.drag*K)),Z.s.position.addScaledVector(Z.v,K);let we=Z.age/Z.life;Z.s.scale.setScalar(Z.size*(1+Z.grow*we)),Z.s.material.opacity=Z.a*(1-we)*Math.min(1,Z.age*12)}}let ne=(K,le,he)=>new D(K,le,he);function Ie(K,le=1){de(ce,K,{size:5*le,life:.3,add:!0,grow:.6,fog:!1});for(let he=0;he<16*le;he++)de(B,K,{size:.5+Math.random()*.6,life:.5+Math.random()*.5,add:!0,g:9,v:ne((Math.random()-.5)*14,Math.random()*12,(Math.random()-.5)*14)});for(let he=0;he<10*le;he++){let Z=new We(new zt(.12,.12,.6+Math.random()*.6),wt);Z.position.copy(K),d.add(Z);let we=ne((Math.random()-.5)*16,6+Math.random()*10,(Math.random()-.5)*16),Ve=ne(Math.random()*9,Math.random()*9,Math.random()*9),Ye=0;g.push(Se=>{Z.parent&&(Ye+=Se,we.y-=22*Se,Z.position.addScaledVector(we,Se),Z.rotation.x+=Ve.x*Se,Z.rotation.y+=Ve.y*Se,(Z.position.y<-1||Ye>3)&&(Z.parent.remove(Z),Z.geometry.dispose()))})}for(let he=0;he<8;he++)de(pe,K.clone().add(ne((Math.random()-.5)*2,0,(Math.random()-.5)*2)),{size:2,life:2.2+Math.random()*1.5,grow:1.8,a:.45,color:6973552,v:ne(-1-Math.random()*2,1.5+Math.random()*1.5,0),drag:.4});j=Math.min(1.2,j+.6*le),w=Math.max(w,.25)}function pt(K,le=1){for(let he=0;he<30*le;he++)de(ae,K,{size:.35+Math.random()*.4,life:1+Math.random()*.5,g:18,v:ne((Math.random()-.5)*6,8+Math.random()*9*le,(Math.random()-.5)*6)});for(let he=0;he<6;he++)de(pe,K,{size:3,life:1.6,grow:1.5,a:.5,v:ne(0,2,0)})}let wt=new qt({color:7029800,roughness:.8});function et(K,le,he=1){let Z=new Bn(16742954,14*he,14*he,1.6);Z.position.copy(le),K.add(Z);let we=[];for(let Ye=0;Ye<7;Ye++){let Se=new pn(new fn({map:B,transparent:!0,depthWrite:!1,blending:wn}));K.add(Se),we.push(Se)}let Ve=[];for(let Ye=0;Ye<9;Ye++){let Se=new pn(new fn({map:pe,color:4868174,transparent:!0,depthWrite:!1}));K.add(Se),Ve.push(Se)}g.push((Ye,Se)=>{Z.intensity=14*he*(1+Math.sin(Se*17)*.2+Math.sin(Se*7.3)*.15),we.forEach((bt,yt)=>{let Ht=(Se*1.6+yt/we.length)%1;bt.position.set(le.x+Math.sin(yt*3+Se*5)*.3*he,le.y+Ht*2.2*he,le.z+Math.cos(yt*2+Se*4)*.3*he),bt.scale.setScalar((1.6-Ht)*he),bt.material.opacity=(1-Ht)*.9}),Ve.forEach((bt,yt)=>{let Ht=(Se*.22+yt/Ve.length)%1;bt.position.set(le.x-Ht*4*he+Math.sin(yt+Se)*.4,le.y+1.5*he+Ht*10*he,le.z+Ht*1.5),bt.scale.setScalar((1.5+Ht*5)*he),bt.material.opacity=.42*(1-Ht)*Math.min(1,Ht*5)})})}let je=new Ni().load(t+"models/waternormals.jpg");je.wrapS=je.wrapT=Hn;function Y(K,le){let he=js[K],Z=pi.merge([Je.fog,{t:{value:0},wn:{value:null},moon:{value:new D},deep:{value:new ze},shal:{value:new ze},sky:{value:new ze},spec:{value:new ze},foamK:{value:1},hm:{value:null},hmOn:{value:0},TS:{value:1},flash:{value:0}}]);Z.wn.value=je,Z.moon.value.copy(le.sun).normalize(),Z.deep.value.set(le.deep),Z.shal.value.set(le.shal),Z.sky.value.set(le.sky),Z.spec.value.set(le.spec),Z.foamK.value=le.foam,le.hm&&(Z.hm.value=le.hm,Z.hmOn.value=1,Z.TS.value=le.TS);let we=he.map(([bt,yt,Ht,sn,hn])=>`h+=sin((p.x*${yt.toFixed(3)}+p.z*${(1-Math.abs(yt)).toFixed(3)})*${(bt*6.283).toFixed(4)}+t*${Ht.toFixed(3)}+${hn.toFixed(3)})*${sn.toFixed(3)};`).join(""),Ve=new Zt(900,900,300,300);Ve.rotateX(-Math.PI/2);let Ye=new _n({uniforms:Z,fog:!0,transparent:!!le.hm,depthWrite:!le.hm,vertexShader:`uniform float t;varying vec3 wp;varying float hh;
        #include <fog_pars_vertex>
        void main(){vec3 p=(modelMatrix*vec4(position,1.)).xyz;float h=0.;${we}hh=h;p.y+=h;wp=p;vec4 mvPosition=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mvPosition;
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
        }`}),Se=new We(Ve,Ye);return Se.renderOrder=2,d.add(Se),g.push((bt,yt)=>{Z.t.value=yt,Z.flash.value=w,Se.position.x=Math.round(o.position.x/7)*7,Se.position.z=Math.round(o.position.z/7)*7}),{U:Z,set:he}}function an(K,le,he,Z,we,Ve){let Ye=new _n({side:On,depthWrite:!1,fog:!1,uniforms:{sun:{value:Z.clone().normalize()},top:{value:new ze(K)},mid:{value:new ze(le)},hor:{value:new ze(he)},sc:{value:new ze(we)},flash:{value:0},t:{value:0}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun,top,mid,hor,sc;uniform float flash,t;varying vec3 vp;
        float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
        void main(){float h=vp.y;vec3 c=mix(hor,mid,smoothstep(0.,.14,h));c=mix(c,top,smoothstep(.14,.6,h));
          float d=max(dot(vp,sun),0.);c+=sc*(pow(d,10.)*.35+pow(d,${Ve?"900.":"400."})*${Ve?"2.2":"3."});
          vec2 q=vp.xz/(h+.25)*2.+vec2(t*.01,0.);float cl=n2(q*2.)*.5+n2(q*4.3)*.3+n2(q*9.)*.2;cl=smoothstep(.45,.85,cl)*smoothstep(-.02,.25,h);
          c=mix(c,mix(mid*.7,hor*1.1,.4)+sc*pow(d,4.)*.4,cl*.75);c+=vec3(.75,.8,1.)*flash*(.15+cl*.35);
          if(h<0.)c=hor;gl_FragColor=vec4(c,1.);}`}),Se=new We(new Qn(900,32,16),Ye);return d.add(Se),g.push((bt,yt)=>{Ye.uniforms.flash.value=w,Ye.uniforms.t.value=yt,Se.position.copy(o.position)}),Ye}let ut=new Rn(1,1,{samples:4,type:Kn}),Mt=new Or(r,ut);Mt.addPass(new Hr(a,o));let st=new ys(new ft(256,256),.6,.6,.78);Mt.addPass(st),Mt.addPass(new kr);let _t=new vs({uniforms:{tDiffuse:{value:null},tint:{value:new D(1,1,1)},vig:{value:.62}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec3 tint;uniform float vig;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.12);c=(c-.5)*1.06+.5;c*=tint;
      float v=smoothstep(.95,.28,length((vUv-.5)*vec2(1.2,1.)));c*=mix(vig,1.,v);gl_FragColor=vec4(c,1.);}`});Mt.addPass(_t);let O={};async function C(K){a.fog=new yo(1450543,.0105),a.background=new ze(726048),_t.uniforms.tint.value.set(.95,1,1.08),_t.uniforms.vig.value=.5,st.strength=.7;let le=ne(.45,.32,-1);an(330260,1385274,1713976,le,12375295,!0),d.add(new $n(8229816,791584,.55));let he=new An(11060479,1.1);he.position.set(60,70,-90),he.castShadow=!0,he.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(he.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:10,far:260}),d.add(he),d.add(he.target);let Z=new An(14674175,0);Z.position.set(-30,90,-40),d.add(Z),O.boltLight=Z,O.water=Y("sea",{sun:le,deep:398111,shal:1192777,sky:2900056,spec:13032703,foam:1}),O.ship=new St,d.add(O.ship),O.list=0,O.turn=0,O.heading=0,O.listT=0;let we=await ve(h("Ship_Large"),0,0,0,{parent:O.ship,s:1.4});if(K!==f)return;Le(we,Ue),O.hull=we;let Ve=new Bn(16756832,10,18,1.5);Ve.position.set(-6,6,0),O.ship.add(Ve),O.crew=[];for(let[ot,rn,S,z]of[["Characters_Henry",2.5,.8,"Idle"],["Characters_Mako",-4,-.6,"Idle"],["Characters_Sharky",6,.3,"Idle"],["Characters_Anne",-1,-1.2,"Idle"]]){let G=await ve(h(ot),rn,2.9,S,{parent:O.ship,skinned:!0,s:1.05,ry:Math.random()*6});xe(G,z),O.crew.push(G)}O.enemies=[];for(let[ot,rn,S,z]of[[62,-30,1.45,Math.PI*.85],[96,-62,1.3,Math.PI*.9],[34,-84,1.2,Math.PI*.8]]){let G=new St;d.add(G);let Q=await ve(h("Ship_Large"),0,0,0,{parent:G,s:S});if(K!==f)return;Le(Q,$e,.35),G.position.set(ot+70,0,rn-30),G.rotation.y=z,G.userData={to:ne(ot,0,rn),ry:z,show:0,target:0,turn:z};let te=new Bn(16747066,0,22,1.6);te.position.set(0,2.5,2),G.add(te),G.userData.port=te,O.enemies.push(G)}let Ye=await ve(h("Characters_Captain_Barbarossa"),-2,2.9,1.5,{parent:O.enemies[0],skinned:!0,s:1.25,ry:-Math.PI/2});Ye.traverse(ot=>{ot.isMesh&&(ot.material=ot.material.clone(),ot.material.color.setRGB(.22,.2,.26))}),xe(Ye,"Idle"),O.admiral=Ye;let Se=new Bn(16728112,0,9,1.6);Se.position.set(-.5,6,3.5),O.enemies[0].add(Se),O.admEye=Se,O.island=new St,O.island.position.set(-160,-2,-120),d.add(O.island);for(let[ot,rn,S,z,G]of[["Environment_Cliff2",0,0,10,.4],["Environment_Cliff3",45,10,8,1.2],["Environment_Cliff4",-50,5,9,2.3]])await ve(h(ot),rn,0,S,{parent:O.island,s:z,ry:G,shadow:!1});let bt=n?900:1600,yt=new Float32Array(bt*6),Ht=new ln;Ht.setAttribute("position",new on(yt,3));let sn=Array.from({length:bt},()=>[Math.random()*90-45,Math.random()*40,Math.random()*90-45]),hn=new Lr(Ht,new Gs({color:10467030,transparent:!0,opacity:.35,fog:!1}));d.add(hn),g.push((ot,rn)=>{hn.position.set(o.position.x,0,o.position.z);for(let S=0;S<bt;S++){let z=sn[S],G=((z[1]-rn*38)%40+40)%40;yt[S*6]=z[0],yt[S*6+1]=G+o.position.y-20,yt[S*6+2]=z[2],yt[S*6+3]=z[0]-.5,yt[S*6+4]=G+o.position.y-21.6,yt[S*6+5]=z[2]+.2}Ht.attributes.position.needsUpdate=!0}),g.push((ot,rn)=>{let S=O.ship;O.listT=Ql(O.listT,O.list,1-Math.pow(.3,ot)),O.turn>0&&(O.turn=Math.min(1,O.turn+ot/3.4),O.heading=-.58*_a(O.turn));let z=O.turn>0?7*_a(O.turn):0;S.position.x+=-Math.cos(O.heading)*z*ot,S.position.z+=Math.sin(O.heading)*z*ot;let G=S.position.x,Q=S.position.z,te=Vr(js.sea,G,Q,rn),q=Vr(js.sea,G+6,Q,rn)-Vr(js.sea,G-6,Q,rn),De=Vr(js.sea,G,Q+3,rn)-Vr(js.sea,G,Q-3,rn);S.position.y=te*.8-.4-O.listT*4,S.rotation.set(0,O.heading,0),S.rotateZ(-q*.045),S.rotateX(De*.07+O.listT);for(let He of O.enemies){let Ke=He.userData;Ke.show=Ql(Ke.show,Ke.target,1-Math.pow(.45,ot)),He.position.lerpVectors(ne(Ke.to.x+70,0,Ke.to.z-30),Ke.to,_a(Math.min(1,Ke.show))),He.rotation.y=Ql(He.rotation.y,Ke.turn,1-Math.pow(.5,ot));let mt=Vr(js.sea,He.position.x,He.position.z,rn);He.position.y=mt*.8-.4,He.rotation.z=Math.sin(rn*.8+He.position.x)*.04,He.visible=Ke.show>.02}O.boltLight&&(O.boltLight.intensity=w*2.5),O.admEye&&(O.admEye.intensity=O.admT?9+Math.sin(rn*9)*3:0)}),Ge(ne(-34,9,34),ne(4,4,0),99)}let M=240,$=220,ye=null;function Te(K,le){let Z=(6+Math.sin(K*.05)*4+(zr(K*.03,3)-.5)*6-le)*.12;return Z>0?Z=Math.min(Z,.9+(Z-.9)*.25+Ms(-12,-40,le)*(4+zr(K*.04,le*.04)*10)):Z=Z*2.2,Z+=Ms(46,70,Math.abs(K))*Ms(-10,10,-le+5)*6*zr(K*.05,le*.05),Math.max(-8,Z)+(zr(K*.3,le*.3)-.5)*.12}async function Ce(K){a.fog=new Li(15975328,110,380),a.background=new ze(15773840),_t.uniforms.tint.value.set(1.04,1,.97),_t.uniforms.vig.value=.66,st.strength=.55;let le=ne(-.7,.12,-1);an(5074598,15900794,16765600,le,16769456,!1),d.add(new $n(16770252,5599306,.9));let he=new An(16769732,.9);he.position.set(40,30,70),d.add(he);let Z=new An(16764826,2.3);Z.position.set(-70,45,-60),Z.castShadow=!0,Z.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(Z.shadow.camera,{left:-50,right:50,top:40,bottom:-40,near:10,far:240}),d.add(Z),d.add(Z.target);let we=new Zt(M,M,$-1,$-1);we.rotateX(-Math.PI/2);let Ve=we.attributes.position,Ye=new Uint8Array($*$*4);for(let q=0;q<Ve.count;q++){let De=Te(Ve.getX(q),Ve.getZ(q));Ve.setY(q,De),Ye[q*4]=Math.max(0,Math.min(255,Math.round((De+10)/20*255))),Ye[q*4+3]=255}we.computeVertexNormals();let Se=new Float32Array(Ve.count*3),bt=we.attributes.normal,yt=new ze,Ht=new ze,sn=new ze(12096610),hn=new ze(15323032),ot=new ze(5208626),rn=new ze(2377759),S=new ze(8747628);for(let q=0;q<Ve.count;q++){let De=Ve.getX(q),He=Ve.getZ(q),Ke=Ve.getY(q),mt=zr(De*.1,He*.1),lt=zr(De*.4+7,He*.4);yt.copy(sn).lerp(hn,Ms(0,.5,Ke)),Ht.copy(ot).lerp(rn,Ms(.3,.8,mt)),yt.lerp(Ht,Ms(1+mt,1.8+mt,Ke)),yt.lerp(S,Ms(.8,.65,bt.getY(q))*Ms(1,2,Ke));let ct=.88+lt*.24;Se[q*3]=yt.r*ct,Se[q*3+1]=yt.g*ct,Se[q*3+2]=yt.b*ct}we.setAttribute("color",new on(Se,3));let z=new We(we,new qt({vertexColors:!0,roughness:.95}));z.receiveShadow=!0,d.add(z),ye=new Bs(Ye,$,$,qn,ui),ye.minFilter=ye.magFilter=In,ye.needsUpdate=!0,O.water=Y("shore",{sun:le,deep:876156,shal:4769730,sky:16041636,spec:16769720,foam:.4,hm:ye,TS:M});let G=(q,De)=>Te(q,De),Q=(()=>{let q=11;return()=>(q=q*16807%2147483647)/2147483647})();O.bush=[];for(let q=0;q<150;q++){let De=(Q()-.5)*170,He=-10-Q()*46;if(Math.abs(De-26)<5&&He>-30)continue;let Ke=await ve(h("Environment_PalmTree_"+(1+q%3)),De,G(De,He)-.1,He,{ry:Q()*6,s:(He>-16?1:1.6)+Q()*1.4,shadow:He>-30});if(K!==f)return;let mt=Q()*6;g.push((lt,ct)=>{Ke.rotation.z=Math.sin(ct*.8+mt)*.02}),Math.abs(De-30)<12&&He>-26&&O.bush.push(Ke)}for(let[q,De,He,Ke,mt]of[["Environment_Cliff2",-70,-30,3.5,.6],["Environment_Cliff3",75,-25,3,2],["Environment_Cliff1",-50,12,2.2,1.1],["Environment_Cliff4",60,18,2.4,2.8]])await ve(h(q),De,G(De,He)-1.5,He,{s:Ke,ry:mt});for(let q=0;q<18;q++){let De=(Q()-.5)*110,He=4+Q()*10,Ke=G(De,He);Ke<-1.2||De>-14&&De<24||await ve(h("Environment_Rock_"+(1+q%5)),De,Ke-.2,He,{s:1.4+Q()*2,ry:Q()*6})}O.ship=new St,O.ship.position.set(-22,-.9,24),O.ship.rotation.set(0,.5,.13),d.add(O.ship);let te=await ve(h("Ship_Large"),0,0,0,{parent:O.ship,s:1.4});if(K===f){Le(te,[[12,0,"#7a2a24"],[5,0,"#4a1412"]]),et(O.ship,ne(3,3.4,.5),.8),et(O.ship,ne(-6,3.2,-.5),.6),et(O.ship,ne(-1,9,0),.5),O.shipBase=O.ship.position.clone(),g.push((q,De)=>{let He=O.arrive!=null?_a(Math.min(1,O.arrive)):1;O.arrive!=null&&O.arrive<1&&(O.arrive+=q/3.2),O.ship.position.set(O.shipBase.x-(1-He)*46,-.9+Math.sin(De*.9)*.12,O.shipBase.z+(1-He)*4),O.ship.rotation.z=.13+Math.sin(De*.7)*.015}),await ve("models/kenney/pirate/boat-row-small.glb",-8,G(-8,10)+.1,10,{ry:2.2,s:1.6});for(let[q,De,He,Ke]of[["Prop_Barrel",-9,-1,0],["Prop_Barrel",-8,0,1],["Prop_Chest_Closed",-5,-.5,.4],["Prop_Bucket",-2,5,0],["Prop_Anchor",-10,7,1.2]])try{await ve(h(q),De,G(De,He),He,{ry:Ke,s:1.2})}catch{}O.camp=ne(-7,G(-7,-2),-2),et(d,O.camp.clone().add(ne(0,.2,0)),.45),O.crew=[];for(let[q,De,He,Ke,mt]of[["Characters_Henry",-4,9,1,"Idle"],["Characters_Mako",-6,11,.6,"Idle"],["Characters_Sharky",-9,12,2,"Idle"],["Characters_Skeleton",-5,13,1.4,"Idle"]]){let lt=await ve(h(q),De,G(De,He),He,{skinned:!0,s:1.15,ry:Ke});xe(lt,mt),lt.userData.home=ne(De,0,He),O.crew.push(lt)}O.slots={sailor:ne(-2,0,2.5),scarlet:ne(2,0,1.8),shark:ne(6,0,2.6),captain:ne(10,0,2),crab:ne(14,0,2.8)};for(let q in O.slots)O.slots[q].y=G(O.slots[q].x,O.slots[q].z);O.heroPos=ne(0,0,0),O.heroPath=null,O.H=G,Ge(ne(-60,18,70),ne(-10,2,10),99)}}function Ge(K,le,he=1.4){E.follow=null,E.tpos.copy(K),E.tlook.copy(le),E.rate=he,he>=99&&(E.pos.copy(K),E.look.copy(le))}function Fe(K,le){if(E.follow){let[Ye,Se]=E.follow();E.tpos.copy(Ye),E.tlook.copy(Se)}let he=1-Math.pow(.5,K*E.rate);E.pos.lerp(E.tpos,he),E.look.lerp(E.tlook,he);let Z=j>0?(Math.sin(le*61)*.5+Math.sin(le*37)*.3)*j*j:0,we=j>0?Math.cos(le*53)*.4*j*j:0,Ve=p==="sea"?Math.sin(le*.9)*.5:Math.sin(le*.4)*.08;o.position.set(E.pos.x+Z,E.pos.y+we+Ve,E.pos.z),o.lookAt(E.look.x,E.look.y+Ve*.5,E.look.z),j=Math.max(0,j-K*1.6),w=Math.max(0,w-K*2.2)}function it(K){return O.ship.localToWorld(K.clone())}let vt=(K,le)=>{let he=setTimeout(()=>{x||K()},le);Tt.push(he)},Tt=[];function Pe(K,le={}){var Z,we,Ve,Ye;let he=O.ship;switch(K){case"establish":Ge(ne(-26,7,30),ne(4,5,0),.9);break;case"enemiesEmerge":(Z=O.enemies)==null||Z.forEach((Se,bt)=>Se.userData.target=1-bt*.1),Ge(ne(-30,12,44),ne(40,3,-25),.8),Gt();break;case"gunsTurn":if(O.enemies){let Se=O.enemies[0];Se.userData.turn=Math.PI*1.02,Se.userData.port.intensity=6,Ge(ne(30,8,8),ne(62,4,-30),1)}break;case"admiral":O.enemies&&(O.admT=1,E.follow=()=>{let Se=O.admiral.getWorldPosition(ne(0,0,0)).add(ne(0,2.2,0)),bt=O.ship.position.clone().sub(Se).setY(0).normalize();return[Se.clone().addScaledVector(bt,15).add(ne(bt.z*4,3,-bt.x*4)),Se.clone().add(ne(0,.4,0))]},E.rate=1.8,vt(()=>{E.follow=null},2400),Gt());break;case"broadside":Ge(ne(-14,6,26),ne(2,5,0),1.3),vt(()=>Ge(ne(-30,11,40),ne(25,4,-12),.9),1900);break;case"listing":O.list=-.11,(we=O.crew)==null||we.forEach((Se,bt)=>_e(Se,"Run",1.2)),Ge(ne(-30,8,34),ne(2,5,0),1.1);break;case"cutRigging":vt(()=>gt(),900);break;case"nearMiss":break;case"revealLand":Gt(),Ge(ne(-24,8,30),ne(-150,14,-110),.8),O.revealT=1.4;break;case"turnToIsland":O.turn=.001,E.rate=.8,E.follow=()=>[O.ship.localToWorld(ne(26,10,18)),O.ship.localToWorld(ne(-30,3,-6))];break;case"arrive":O.arrive=0,Ge(ne(-6,8,50),ne(-26,3,18),.6);break;case"crewAshore":Lt(),Ge(ne(-4,7,30),ne(0,2,4),.8);break;case"branchSnap":if(O.bush){let Se=v;for(let yt of O.bush)g.push((Ht,sn)=>{let hn=sn-Se;hn<2.4&&(yt.rotation.x=Math.sin(hn*14)*.08*(1-hn/2.4))});let bt=ne(30,5,-16);for(let yt=0;yt<18;yt++)de(me,bt,{size:.5,life:2.4,g:2,drag:.8,v:ne((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6)});Rt(bt),Ge(ne(18,5,14),ne(30,4,-14),1.2),vt(()=>Ge(ne(4,6,24),ne(5,2,2),.8),2600)}break;case"rollCall":{let Se=["captain","scarlet","shark","sailor","crab"];Se.forEach((bt,yt)=>vt(()=>{var sn;let Ht=(sn=O.slots)==null?void 0:sn[bt];Ht&&Ge(Ht.clone().add(ne(-1.5,2.6,8.5)),Ht.clone().add(ne(0,1.6,0)),2.2)},yt*680)),vt(()=>Ge(ne(4,6,24),ne(5,2,2),1),Se.length*680+200);break}case"selectFrame":Ge(ne(5,9,30),ne(5,3,0),.9);break;case"heroStep":{let Se=((Ve=O.slots)==null?void 0:Ve[le.hero])||ne(4,0,2);O.heroPos.copy(Se),O.heroStep=0,Ge(Se.clone().add(ne(-2,2.6,8)),Se.clone().add(ne(1,1.5,0)),1.2);break}case"handMap":break;case"heroAshore":{let Se=O.heroPos.clone();O.heroPath={from:Se,to:ne(28,((Ye=O.H)==null?void 0:Ye.call(O,28,-20))||2,-20),k:0},Ge(ne(Se.x+6,5,Se.z+14),ne(24,3,-10),.55);break}}}function Gt(){w=1,O.island&&p==="sea"&&(O.revealT=Math.max(O.revealT||0,.8))}function Lt(){O.crew&&O.crew.forEach((K,le)=>{let he=K.position.clone(),Z=ne(-12+le*2.4,0,-4-le%2*1.8);Z.y=O.H(Z.x,Z.z);let we=-le*.25;_e(K,"Walk",1),g.push(Ve=>{if(we>=1)return;we+=Ve/4;let Ye=Math.max(0,Math.min(1,we));K.position.lerpVectors(he,Z,Ye),K.position.y=O.H(K.position.x,K.position.z),K.rotation.y=Math.atan2(Z.x-he.x,Z.z-he.z),we>=1&&(_e(K,le%2?"Idle":"Yes",1),K.rotation.y=Math.atan2(O.camp.x-Z.x,O.camp.z-Z.z))})})}function Rt(K){let le=new en({color:2762272,side:cn});for(let he=0;he<7;he++){let Z=new ln;Z.setAttribute("position",new tn([-.5,.1,0,0,0,0,.5,.1,0,0,0,-.2,0,0,.25],3)),Z.setIndex([0,1,3,1,2,3,0,1,4,1,2,4]);let we=new We(Z,le);we.position.copy(K).add(ne((Math.random()-.5)*6,Math.random()*3,(Math.random()-.5)*4)),d.add(we);let Ve=ne(-3-Math.random()*4,3+Math.random()*2,2+Math.random()*2),Ye=Z.attributes.position,Se=0;g.push((bt,yt)=>{if(!we.parent)return;Se+=bt,we.position.addScaledVector(Ve,bt),we.rotation.y=Math.atan2(Ve.x,Ve.z);let Ht=Math.sin(yt*20+he)*.3;Ye.setY(0,.1+Ht),Ye.setY(2,.1+Ht),Ye.needsUpdate=!0,Se>5&&(we.parent.remove(we),Z.dispose())})}}function gt(){if(!O.ship)return;let K=new St,le=new We(new Wt(.18,.22,8,8),wt);le.rotation.z=Math.PI/2,K.add(le);let he=new We(new Zt(7,4,6,3),new qt({color:9181725,side:cn,roughness:.9}));he.position.y=-2,K.add(he);let Z=it(ne(1,13,0));K.position.copy(Z),d.add(K);let we=ne(2,0,3),Ve=0,Ye=!1;Ie(Z,.6),g.push(Se=>{var bt;Ye||(Ve+=Se,we.y-=14*Se,K.position.addScaledVector(we,Se),K.rotation.x+=Se*1.6,K.rotation.z+=Se*.7,K.position.y<-2&&(Ye=!0,pt(K.position.clone().setY(0),1.3),(bt=K.parent)==null||bt.remove(K)))})}let at=new Qn(.35,10,8),Et=new qt({color:1447446,roughness:.5,metalness:.4});function Vt(K=0,le={},he=.62){var S,z;let Z=((S=O.enemies)==null?void 0:S[K])||((z=O.enemies)==null?void 0:z[0]);if(!Z||!O.ship)return;let we=(O.shotN=(O.shotN||0)+1)%5,Ve=Z.localToWorld(ne(-6+we*3,2.6,2.6)),Ye=Ve.clone().sub(Z.position).setY(0).normalize();de(ce,Ve,{size:4,life:.25,add:!0,fog:!1});for(let G=0;G<8;G++)de(pe,Ve,{size:2,life:2.4+Math.random(),grow:2.4,a:.6,v:Ye.clone().multiplyScalar(2+Math.random()*2).add(ne(0,1+Math.random(),0)),drag:.6});Z.userData.port.intensity=18,vt(()=>{Z.userData.port.intensity=6},120);let Se=le.mast?ne(1,12,0):le.sail?ne(2,9,.5):ne((le.lx||0)*.05,2.2+Math.random(),1.5),bt=le.near,yt=new D;o.getWorldDirection(yt);let Ht=bt?o.position.clone().addScaledVector(yt.setY(0).normalize(),14).add(ne(3,0,0)).setY(0):le.miss?it(ne(3,0,6)).setY(0):it(Se),sn=new We(at,Et);sn.position.copy(Ve),d.add(sn);let hn=[],ot=0;g.push(()=>{sn.parent&&(ot+=1/60)});let rn=v;g.push((G,Q)=>{if(!sn.parent)return;let te=Math.min(1,(Q-rn)/he),q=Ve.clone().lerp(bt||le.miss?Ht:it(Se),te);q.y+=Math.sin(te*Math.PI)*3.5,sn.position.copy(q),Math.random()<.6&&de(pe,q,{size:.6,life:.5,grow:1,a:.35}),te>=1&&(sn.parent.remove(sn),le.miss||bt?pt(q.setY(0),bt?1.6:1):(Ie(q,le.mast?1.3:1),!le.sail&&!le.mast&&(O.fires=(O.fires||0)+1)<=3&&et(O.ship,O.ship.worldToLocal(q.clone()),.7)))})}let Xt=new D,At=new D;function Ne(K){if(p!=="shore"||!O.slots)return null;let le=K==="hero"?O.heroPos:O.slots[K];if(!le)return null;Xt.copy(le).project(o),At.copy(le).add(ne(0,1.9,0)).project(o);let he=i.clientWidth,Z=i.clientHeight;return Xt.z>1?null:{x:(Xt.x*.5+.5)*he,y:(-Xt.y*.5+.5)*Z,px:Math.abs(At.y-Xt.y)*.5*Z}}function H(K){if(p!=="shore"||!O.heroPath)return;let le=O.heroPath;le.k=Math.min(1,le.k+K/4.5),O.heroPos.lerpVectors(le.from,le.to,_a(le.k)),O.heroPos.y=O.H(O.heroPos.x,O.heroPos.z),E.tlook.lerp(O.heroPos.clone().add(ne(0,1.5,0)),.05)}function qe(){let K=Math.max(1,s.clientWidth),le=Math.max(1,s.clientHeight);r.setSize(K,le,!1),Mt.setSize(K,le),st.resolution.set(K/2,le/2),o.aspect=K/le,o.fov=K/le>1.6?42:56,o.updateProjectionMatrix()}qe(),addEventListener("resize",qe);let Be=0,dt=0;function Xe(K){if(I=0,x||A)return;I=requestAnimationFrame(Xe);let le=Math.min(.05,(K-R)/1e3)||.016;R=K,(s.clientWidth!==Be||s.clientHeight!==dt)&&(Be=s.clientWidth,dt=s.clientHeight,qe()),!m&&(Kt(le),Mt.render())}function Kt(K){v+=K;for(let le of g.slice())le(K,v);for(let le of b)le.update(K);Ee(K),H(K),Fe(K,v),p==="sea"&&O.island&&(O.revealT=Math.max(0,(O.revealT||0)-K*.35),a.fog.density=.0105-Math.min(1,O.revealT)*.0062)}async function It(K){var Z;if(K===p)return;let le=++f;p=K;for(let we of Tt)clearTimeout(we);Tt.length=0,d.traverse(we=>{var Ve,Ye;we.geometry&&!we.isSkinnedMesh&&((Ye=(Ve=we.geometry).dispose)==null||Ye.call(Ve))}),a.remove(d),d=new St,a.add(d),g=[],b=[],P.length=0;for(let we in O)delete O[we];m=!0;let he=K==="sea"?["Ship_Large","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Anne","Characters_Captain_Barbarossa","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4"].map(h):["Ship_Large","Environment_PalmTree_1","Environment_PalmTree_2","Environment_PalmTree_3","Environment_Cliff1","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4","Environment_Rock_1","Environment_Rock_2","Environment_Rock_3","Environment_Rock_4","Environment_Rock_5","Prop_Barrel","Prop_Chest_Closed","Prop_Bucket","Prop_Anchor","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Skeleton"].map(h).concat(["models/kenney/pirate/boat-row-small.glb"]);try{await Promise.all(he.map(we=>u(we).catch(()=>null))),await(K==="sea"?C(le):Ce(le)),le===f&&((Z=r.compile)==null||Z.call(r,a,o))}catch(we){throw console.warn("Story3D",we&&we.message),we}finally{le===f&&(m=!1,R=performance.now())}}return I=requestAnimationFrame(Xe),{setEnv:It,cue:Pe,shoot:Vt,bolt:Gt,advance(K){let le=Math.round(K*30);for(let he=0;he<le;he++)Kt(1/30);Mt.render()},get ready(){return!!O.ship},anchor:Ne,pause(){A=!0,cancelAnimationFrame(I),I=0},resume(){x||(A=!1,R=performance.now(),I||(I=requestAnimationFrame(Xe)))},dispose(){var K,le;x=!0,cancelAnimationFrame(I);for(let he of Tt)clearTimeout(he);removeEventListener("resize",qe),a.traverse(he=>{he.geometry&&he.geometry.dispose();let Z=he.material;Z&&(Array.isArray(Z)?Z:[Z]).forEach(we=>{for(let Ve in we)we[Ve]&&we[Ve].isTexture&&we[Ve].dispose();we.dispose()})}),(K=Mt.dispose)==null||K.call(Mt),ut.dispose(),r.dispose(),(le=r.forceContextLoss)==null||le.call(r),i.remove()},get state(){return{env:p,ready:!!O.ship,fx:P.length,paused:A,cam:o.position.toArray().map(K=>+K.toFixed(1)),follow:!!E.follow,adm:O.admiral?O.admiral.getWorldPosition(new D).toArray().map(K=>+K.toFixed(1)):null}}}}window.PirateStory3D={create:sx,version:1};var va=new D;function gi(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;va.copy(e),va[n]=0,va.normalize();let l=.5*a/(a+o),u=1-va.angleTo(s)/c;return Math.sign(va[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Vo=class extends zt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,g=new D,b=.5/i;for(let p=0,f=0;p<u.length;p+=3,f+=2)switch(o.fromArray(u,p),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),u[p+0]=l.x*Math.sign(o.x)+c.x*r,u[p+1]=l.y*Math.sign(o.y)+c.y*r,u[p+2]=l.z*Math.sign(o.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=gi(g,c,"z","y",r,n),d[f+1]=1-gi(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-gi(g,c,"z","y",r,n),d[f+1]=1-gi(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-gi(g,c,"x","z",r,e),d[f+1]=gi(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-gi(g,c,"x","z",r,e),d[f+1]=1-gi(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-gi(g,c,"x","y",r,e),d[f+1]=1-gi(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=gi(g,c,"x","y",r,e),d[f+1]=1-gi(g,c,"y","x",r,t);break}}};var rx={1:[[.5,.5]],2:[[.27,.27],[.73,.73]],3:[[.27,.27],[.5,.5],[.73,.73]],4:[[.27,.27],[.73,.27],[.27,.73],[.73,.73]],5:[[.27,.27],[.73,.27],[.5,.5],[.27,.73],[.73,.73]],6:[[.27,.25],[.73,.25],[.27,.5],[.73,.5],[.27,.75],[.73,.75]]};function ax(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(46,40,10,64,64,90);n.addColorStop(0,"#fffaf0"),n.addColorStop(1,"#e6d5b0"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let[r,a]of rx[s])t.fillStyle=s===1?"#9a1e16":"#2a1206",t.beginPath(),t.arc(r*128,a*128,s===1?17:12,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.25)",t.beginPath(),t.arc(r*128-3,a*128-3,3,0,7),t.fill();let i=new Mn(e);return i.colorSpace=Ut,i.anisotropy=4,i}var ox=[3,4,1,6,2,5],cx={3:[1,0,0],4:[-1,0,0],1:[0,1,0],6:[0,-1,0],2:[0,0,1],5:[0,0,-1]};function lx(s){let e=document.createElement("canvas");e.style.cssText="width:100%;height:100%;display:block",s.append(e);let t=new ri({canvas:e,alpha:!0,antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.outputColorSpace=Ut;let n=new ai,i=new dn(32,1,.1,50);i.position.set(0,4.2,4.6),i.lookAt(0,.3,0),n.add(new $n(16773596,5911576,1.4));let r=new An(16767400,1.6);r.position.set(-2,5,3),n.add(r);let a=ox.map(E=>new qt({map:ax(E),roughness:.35})),o=new We(new Vo(1,1,1,4,.14),a);n.add(o);let c=document.createElement("canvas");c.width=c.height=64;{let E=c.getContext("2d"),j=E.createRadialGradient(32,32,2,32,32,32);j.addColorStop(0,"rgba(0,0,0,.55)"),j.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=j,E.fillRect(0,0,64,64)}let l=new We(new Zt(1.6,1.6),new en({map:new Mn(c),transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,n.add(l);let u=new D(0,1,0),h=new Pn,d=new Pn,m=new Pn,g=new D;function b(E){let j=new D(...cx[E]),w=new Pn().setFromUnitVectors(j,u);return new Pn().setFromAxisAngle(u,(Math.random()-.5)*1.2).multiply(w)}let p=null,f=0,v=!1;function x(){let E=Math.max(1,s.clientWidth),j=Math.max(1,s.clientHeight);t.setSize(E,j,!1),i.aspect=E/j,i.updateProjectionMatrix()}function A(){s.clientWidth&&e.width!==Math.round(s.clientWidth*t.getPixelRatio())&&x(),t.render(n,i)}function I(E){o.quaternion.copy(b(E)),o.position.set(0,.5,0),l.position.set(0,.01,0),l.scale.setScalar(1),A()}function R(E){if(f=0,v||!p)return;let j=Math.min(1,(E-p.start)/p.ms),w=1-Math.pow(1-j,3),P=p.from.x*(1-w),ce=p.from.z*(1-w),pe=Math.abs(Math.sin(j*Math.PI*3.2))*(1-j)*(1-j)*1.6;o.position.set(P,.5+pe,ce),m.setFromAxisAngle(p.axis,p.turns*(1-w)),o.quaternion.copy(p.q1).premultiply(m),l.position.set(P,.01,ce),l.scale.setScalar(1+pe*.25),l.material.opacity=1-pe*.3,A(),j<1?f=requestAnimationFrame(R):p=null}return x(),I(1),{roll(E,j=850){v||(cancelAnimationFrame(f),g.set(Math.random()-.5,Math.random()*.4,Math.random()-.5).normalize(),p={start:performance.now(),ms:j,from:new D(2.6*(Math.random()<.5?-1:1),0,-1.2+Math.random()*.6),q1:b(E),axis:g.clone(),turns:Math.PI*(5+Math.random()*3)},f=requestAnimationFrame(R))},show(E){v||(cancelAnimationFrame(f),p=null,I(E))},resize(){x(),A()},dispose(){var E;v=!0,cancelAnimationFrame(f),o.geometry.dispose(),a.forEach(j=>{j.map.dispose(),j.dispose()}),l.geometry.dispose(),l.material.map.dispose(),l.material.dispose(),t.dispose(),(E=t.forceContextLoss)==null||E.call(t),e.remove()}}}window.PirateDice3D={create:lx};var Wr=(s,e,t)=>s+(e-s)*t;function Es(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new Mn(t);return r.colorSpace=Ut,r}function vd(s,e="#ffd34a",t=64){let n=document.createElement("canvas"),i=n.getContext("2d");i.font=`900 ${t}px system-ui,sans-serif`;let r=Math.ceil(i.measureText(s).width)+24;n.width=r,n.height=t+24,i.font=`900 ${t}px system-ui,sans-serif`,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=t/6,i.strokeStyle="#3a1806",i.strokeText(s,12,n.height/2),i.fillStyle=e,i.fillText(s,12,n.height/2);let a=new Mn(n);return a.colorSpace=Ut,{t:a,aspect:n.width/n.height}}var $l={grunt:3.2,runner:3,brute:4,boss:7.6},hx={grunt:"Characters_Skeleton",runner:"Characters_Sharky",brute:"Characters_Captain_Barbarossa"};function ux(s,e={}){let t=e.base||"harbor/harbor3d/",n=e.art||"bastion/",i=matchMedia("(pointer:coarse)").matches,r=document.createElement("canvas");r.className="bs3d",r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none",s.prepend(r);let a=new ri({canvas:r,antialias:!i,powerPreference:"high-performance"});a.setPixelRatio(Math.min(devicePixelRatio||1,i?1.5:1.75)),a.shadowMap.enabled=!0,a.shadowMap.type=Xs,a.toneMapping=Ei,a.toneMappingExposure=1.05;let o=new ai;o.background=new ze(15764058),o.fog=new Li(15966320,120,330);let c=new dn(44,1,.3,1400),l=new Fi;l.setMeshoptDecoder(Br);let u={},h=_=>u[_]||(u[_]=l.loadAsync(_)),d=new Ni,m=(_,y)=>{let T=d.load(_);return T.colorSpace=Ut,y&&(T.wrapS=T.wrapT=Hn,T.repeat.set(y[0],y[1]),T.anisotropy=4),T},g=new St;g.scale.x=-1,o.add(g);let b=[],p=0,f=0,v=!1,x=!1,A=[],I=Es([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),R=Es([[0,"rgba(210,200,190,.85)"],[.6,"rgba(160,150,140,.35)"],[1,"rgba(120,110,100,0)"]]),E=Es([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),j=Es([[0,"rgba(235,200,140,.8)"],[1,"rgba(220,180,120,0)"]],32),w=Es([[0,"rgba(255,255,210,1)"],[.4,"rgba(255,220,120,.7)"],[1,"rgba(255,200,80,0)"]],32),P=Es([[0,"rgba(255,255,255,1)"],[.3,"rgba(255,214,150,.95)"],[1,"rgba(255,120,40,0)"]],32),ce=(()=>{let _=document.createElement("canvas");_.width=_.height=128;let y=_.getContext("2d");y.strokeStyle="rgba(255,235,200,.9)",y.lineWidth=7,y.beginPath(),y.arc(64,64,54,0,7),y.stroke();let T=new Mn(_);return T.colorSpace=Ut,T})(),pe=(()=>{let _=document.createElement("canvas");_.width=_.height=64;let y=_.getContext("2d");y.fillStyle="#7a4a08",y.beginPath(),y.arc(32,32,30,0,7),y.fill(),y.fillStyle="#ffcf33",y.beginPath(),y.arc(32,30,26,0,7),y.fill(),y.fillStyle="#fff3a8",y.beginPath(),y.arc(25,23,8,0,7),y.fill();let T=new Mn(_);return T.colorSpace=Ut,T})(),re=(_,y,T)=>new D(_,y,T);o.add(new $n(16773346,8022648,1.2));let B=new An(16768184,2.5);B.position.set(-30,40,90),B.target.position.set(0,0,10),o.add(B,B.target),B.castShadow=!0,B.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(B.shadow.camera,{left:-45,right:45,top:40,bottom:-20,near:10,far:220}),B.shadow.bias=-6e-4,B.shadow.normalBias=.03;let ae=new An(16747098,.8);ae.position.set(20,10,-40),o.add(ae);let me=m(n+"sky.webp"),ve=new We(new Zt(1400,600),new en({map:me,fog:!1,depthWrite:!1}));ve.rotation.y=Math.PI,ve.position.set(0,130,640),ve.renderOrder=-2,o.add(ve);let xe=new pn(new fn({map:w,color:16756848,transparent:!0,depthWrite:!1,fog:!1,blending:wn,opacity:.55}));xe.position.set(0,26,600),xe.scale.setScalar(160),o.add(xe);let _e=d.load(t+"models/waternormals.jpg");_e.wrapS=_e.wrapT=Hn;let Le={t:{value:0},wn:{value:_e},deep:{value:new ze(2054778)},shal:{value:new ze(4176054)},glow:{value:new ze(16752736)},...Je.fog},Ue=new Zt(900,520,160,90);Ue.rotateX(-Math.PI/2),Ue.translate(0,0,330);let $e=new We(Ue,new _n({uniforms:Le,fog:!0,vertexShader:`uniform float t;varying vec3 wp;
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
      }`}));$e.position.y=-.35,g.add($e),b.push(()=>{Le.t.value=p});let de=Es([[0,"rgba(255,255,255,.95)"],[.5,"rgba(255,250,240,.5)"],[1,"rgba(255,255,255,0)"]],64),Ee=new We(new Zt(220,3),new en({map:de,transparent:!0,depthWrite:!1,opacity:.7}));Ee.rotation.x=-Math.PI/2,Ee.position.set(0,-.05,47),g.add(Ee),b.push(()=>{Ee.position.z=46.5+Math.sin(p*.9)*1.2,Ee.material.opacity=.5+Math.sin(p*.9+1)*.2});let ne=m(n+"sand.webp",[20,8]),Ie=new Zt(240,80,60,20);Ie.rotateX(-Math.PI/2),Ie.translate(0,0,22);{let _=Ie.attributes.position;for(let y=0;y<_.count;y++){let T=_.getZ(y),k=_.getX(y);_.setY(y,T>40?-(T-40)*.12:Math.sin(k*.2)*.08+Math.cos(T*.3+k*.1)*.06)}Ie.computeVertexNormals()}let pt=new We(Ie,new qt({map:ne,roughness:.95,color:16774376}));pt.receiveShadow=!0,g.add(pt);let wt=25,et=3.2,Oe=4.2,je=(_,y)=>{let T=m(n+"wall.webp",[_,y]);return new qt({map:T,roughness:.9,color:16773340})},Y=je(9,1.1),an=je(9,.9),ut=je(.5,.5),Mt=je(4,2),st=new St;g.add(st);let _t=new We(new zt(wt*2+4,et,Oe),[Y,Y,an,Y,Y,Y]);_t.position.set(0,et/2,-Oe/2),_t.castShadow=_t.receiveShadow=!0,st.add(_t);let O=new zt(1.7,1.25,.9);{let _=[];for(let k=-wt-1;k<=wt+1;k+=2.6)Math.abs(k)>=3.4&&_.push(k);let y=new Cr(O,ut,_.length),T=new xn;_.forEach((k,F)=>{T.position.set(k,et+.62,-.45),T.updateMatrix(),y.setMatrixAt(F,T.matrix)}),y.castShadow=!0,st.add(y)}let C=new We(new zt(wt*2+4,.5,.5),an);C.position.set(0,et+.25,-Oe+.25),st.add(C);for(let _ of[-1,1]){let y=new St;y.position.set(_*(wt+4.2),0,-2),st.add(y);let T=new We(new Wt(4,4.4,et+3.4,20),Mt);T.position.y=(et+3.4)/2,T.castShadow=T.receiveShadow=!0,y.add(T);for(let N=0;N<10;N++){let fe=N/10*Math.PI*2,nt=new We(O,ut);nt.position.set(Math.cos(fe)*3.7,et+4,Math.sin(fe)*3.7),nt.rotation.y=-fe,nt.castShadow=!0,y.add(nt)}let k=new We(new Ii(4.6,4.2,20),new qt({color:11680042,roughness:.7}));k.position.y=et+6.6,k.castShadow=!0,y.add(k);let F=new We(new Wt(.07,.07,3),new qt({color:5913120}));F.position.y=et+9.8,y.add(F);let oe=new Zt(2.2,1.3,8,1);oe.translate(1.1,0,0);let ue=new We(oe,new qt({color:2781136,side:cn}));ue.position.y=et+10.6,y.add(ue);let ke=oe.attributes.position,ie=Float32Array.from(ke.array);b.push(()=>{for(let N=0;N<ke.count;N++){let fe=ie[N*3];ke.setZ(N,Math.sin(fe*2.4-p*6+_)*fe*.14)}ke.needsUpdate=!0})}let M=new St;M.position.set(0,0,.02),st.add(M);let $=je(1.2,1.2);for(let _ of[-1,1]){let y=new We(new zt(1.4,et+2.4,1.6),$);y.position.set(_*3.3,(et+2.4)/2,-.2),y.castShadow=!0,M.add(y)}let ye=new We(new zt(8,1.2,1.6),$);ye.position.set(0,et+1.8,-.2),ye.castShadow=!0,M.add(ye);let Te=new qt({color:8014374,roughness:.8}),Ce=new St;M.add(Ce);for(let _=0;_<5;_++){let y=new We(new zt(1.06,et+.6,.35),Te);y.position.set(-2.12+_*1.06,(et+.6)/2,.5),y.castShadow=!0,Ce.add(y)}let Ge=new qt({color:2763312,metalness:.6,roughness:.4});for(let _ of[.9,et-.4]){let y=new We(new zt(5.4,.26,.12),Ge);y.position.set(0,_,.72),Ce.add(y)}let Fe=(()=>{let _=document.createElement("canvas");_.width=_.height=128;let y=_.getContext("2d");y.strokeStyle="rgba(20,10,4,.9)",y.lineWidth=3;for(let k=0;k<7;k++){y.beginPath();let F=64,oe=64;y.moveTo(F,oe);for(let ue=0;ue<5;ue++)F+=(Math.random()-.5)*40,oe+=(Math.random()-.5)*40,y.lineTo(F,oe);y.stroke()}return new Mn(_)})(),it=new We(new Zt(5.4,et+.6),new en({map:Fe,transparent:!0,opacity:0,depthWrite:!1}));it.position.set(0,(et+.6)/2,.7),Ce.add(it);for(let _ of[-1,1]){let y=new Bn(16747066,6,9,1.8);y.position.set(_*3.3,et+.8,1.2),M.add(y);let T=new pn(new fn({map:E,transparent:!0,depthWrite:!1,blending:wn}));T.position.copy(y.position),T.scale.setScalar(1.1),M.add(T),b.push(()=>{let k=1+Math.sin(p*13+_)*.15+Math.sin(p*7)*.1;y.intensity=6*k,T.scale.setScalar(1.1*k)})}let vt=async()=>{let _=async(y,T,k,F,oe,ue=0)=>{let ke=await h(t+"models/q/"+y+".glb");if(v)return;let ie=ke.scene.clone(!0);return ie.traverse(N=>{N.isMesh&&(N.castShadow=!0,N.receiveShadow=!0)}),ie.position.set(T,k,F),ie.scale.setScalar(oe),ie.rotation.y=ue,g.add(ie),ie};await Promise.all([_("Environment_PalmTree_1",-40,0,14,2.6,.6),_("Environment_PalmTree_2",41,0,10,2.4,2),_("Environment_PalmTree_3",-47,0,30,2.2,1),_("Environment_PalmTree_1",48,0,27,2.3,3),_("Environment_Rock_1",-36,0,36,2.6),_("Environment_Rock_3",36,0,38,2.2,1),_("Environment_Rock_2",-30,0,5,1.6),_("Environment_Rock_5",31,0,6,1.6),_("Ship_Large",-80,-.6,190,3.2,-.6),_("Ship_Large",95,-.6,230,3,.4)])},Tt=new Map,Pe=new Map,Gt=new Map,Lt=null,Rt=e.troll?h(n+"troll.glb").then(_=>Lt=_).catch(()=>null):Promise.resolve(null);function gt(_,y){let T=new kn().setFromObject(_),k=T.getSize(re(0,0,0)),F=y/Math.max(.01,k.y);return _.scale.multiplyScalar(F),F}async function at(_){let y=_.kind==="boss"?Lt||await Rt:null,T=!!y;if(y||(y=await h(t+"models/q/"+(hx[_.kind]||"Characters_Skeleton")+".glb")),v)return;let k=new St,F=Si(y.scene);k.add(F),F.traverse(fe=>{fe.isMesh&&(fe.castShadow=!i||_.kind==="boss",fe.receiveShadow=!1,fe.material=fe.material.clone(),fe.material.emissive=new ze(0),fe.userData.hit=!0)}),gt(F,$l[_.kind]||2.5),_.kind==="boss"&&!T&&F.traverse(fe=>{fe.isMesh&&fe.material.color.multiply(new ze(.55,.9,.5))});let oe=new oi(F),ue=y.animations||[],ke=fe=>{let nt=ue.find(Ft=>Ft.name===fe)||ue.find(Ft=>/walk|run/i.test(Ft.name))||ue[0];return nt?oe.clipAction(nt):null},ie={e:_,holder:k,m:F,mix:oe,act:ke,cur:null,troll:T,dead:0,x:_.x,z:_.z,hp:1},N=(fe,nt=1,Ft=!1)=>{let ge=ke(fe);!ge||ie.cur===ge||(ge.reset(),ge.timeScale=nt,Ft&&(ge.setLoop(fa),ge.clampWhenFinished=!0),ge.play(),ie.cur&&ie.cur.crossFadeTo(ge,.2,!1),ie.cur=ge)};if(ie.play=N,N(T?"walk":"Run",_.kind==="brute"?.8:1.1),oe.setTime(Math.random()),_.kind==="boss"){let fe=Et(4.5);fe.g.position.y=$l.boss+1,k.add(fe.g),ie.bar=fe}else if(_.kind==="brute"){let fe=Et(1.8);fe.g.position.y=$l.brute+.5,k.add(fe.g),ie.bar=fe}k.position.set(_.x,0,_.z),g.add(k),Tt.set(_.id,ie);for(let fe=0;fe<6;fe++)ot(j,re(_.x,.4,_.z),{size:1.2,life:.8,grow:1.5,a:.6,v:re((Math.random()-.5)*3,1,(Math.random()-.5)*3)})}function Et(_){let y=new St,T=new pn(new fn({color:2755848,depthTest:!1}));T.scale.set(_,.32,1);let k=new pn(new fn({color:14830122,depthTest:!1}));return k.scale.set(_,.22,1),k.center.set(0,.5),k.position.x=-_/2,y.add(T,k),y.renderOrder=10,{g:y,fg:k,w:_}}async function Vt(_){let y=await h(t+"models/q/Ship_Small.glb");if(v)return;let T=y.scene.clone(!0);T.traverse(F=>{F.isMesh&&(F.castShadow=!0)}),gt(T,_.big?9:5.5);let k=new St;k.add(T),T.rotation.y=Math.PI/2,k.position.set(_.x,-.4,_.z),g.add(k),Pe.set(_.id,{b:_,h:k,x:_.x,z:_.z,wake:0})}let Xt=document.createElement("canvas");Xt.width=256,Xt.height=288;let At=Xt.getContext("2d"),Ne=new Mn(Xt);Ne.colorSpace=Ut;let H=new pn(new fn({map:Ne,transparent:!0,alphaTest:.1}));H.center.set(.5,.06),H.scale.set(4.4,4.4*288/256,1),H.position.set(0,et,-3),g.add(H);let qe=new We(new Vs(.9,20),new en({color:0,transparent:!0,opacity:.3,depthWrite:!1}));qe.rotation.x=-Math.PI/2,qe.position.set(0,et+.02,-3),g.add(qe);let Be=new We(new Di(1.15,1.45,32),new en({color:16764992,transparent:!0,opacity:.85,depthWrite:!1}));Be.rotation.x=-Math.PI/2,Be.position.set(0,et+.04,-3),g.add(Be);let dt=e.heroArt||null,Xe={name:"idle",t:0,flip:!1,lastFrame:-1};function Kt(_){if(!dt)return;let y=dt.meta,T=y.animations[Xe.name]||y.animations.idle;Xe.t+=_;let k=Xe.name==="throw"||Xe.name==="attackA"?12:T.fps||8,F=T.frames[Math.floor(Xe.t*k)%T.frames.length],oe=F*2+(Xe.flip?1:0);oe!==Xe.lastFrame&&(Xe.lastFrame=oe,At.clearRect(0,0,256,288),At.save(),Xe.flip&&(At.translate(256,0),At.scale(-1,1)),At.drawImage(dt.image,F%y.columns*y.frameW,Math.floor(F/y.columns)*y.frameH,y.frameW,y.frameH,0,0,256,288),At.restore(),Ne.needsUpdate=!0)}let It=null,K={Run:0,Idle:.75,Shoot:2.7,RunShoot:.55};e.mari3d&&h(t+"models/mari.glb").then(_=>{var fe;if(v)return;let y=Si(_.scene);y.updateMatrixWorld(!0);let T=new kn().setFromObject(y),k=T.getSize(re(0,0,0)),F=T.getCenter(re(0,0,0)),oe=3.9/k.y,ue=new St,ke=new St;y.position.set(-F.x,-T.min.y,-F.z),ue.add(y),ue.scale.setScalar(oe),ke.add(ue),y.traverse(nt=>{nt.isMesh&&(nt.frustumCulled=!1,nt.castShadow=!0,nt.material.map&&(nt.material.map.colorSpace=Ut),nt.material.roughness=.8)});let ie=new oi(y),N={};for(let nt of Object.keys(K)){let Ft=_.animations.find(ge=>ge.name===nt);Ft&&(N[nt]=ie.clipAction(Ft)),N[nt]._n=nt}(fe=N.Idle)==null||fe.play(),ke.position.set(0,et,-3),g.add(ke),H.visible=!1,It={holder:ke,pivot:ue,mx:ie,act:N,cur:"Idle",ang:Math.PI/2+.55,yaw:0,lean:0},Xe.mari=It}).catch(()=>{});function le(_,y,T,k){let F=It;if(!F)return;let oe=y?"Run":"Idle";if(oe!==F.cur&&F.act[oe]){let N=F.act[oe],fe=F.act[F.cur];N.reset().play(),N.timeScale=oe==="Shoot"?1.8:oe==="Run"?1.1:1,fe&&(N.crossFadeFrom(fe,.15,!1),setTimeout(()=>{F.cur!==fe._n&&fe.stop()},200)),N._n=oe,F.cur=oe}F.mx.update(_);let ue=K[F.cur]||0;F.yaw+=(ue-F.yaw)*Math.min(1,_*12),F.pivot.rotation.y=F.yaw*(k?-1:1),F.lean+=((T?.1:0)-F.lean)*Math.min(1,_*18),F.pivot.rotation.x=-F.lean;let ie=(k?-1:1)*(Math.PI/2+.55)-F.ang;ie=((ie+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,F.ang+=ie*Math.min(1,_*10),F.holder.rotation.y=F.ang}let he=new qt({color:9067054,roughness:.85}),Z=new zt(.16,et+1.6,.16),we=new zt(1,.1,.1);function Ve(_,y){let T=new St;T.position.set(_,0,Math.max(1.4,y+.4));for(let F of[-.5,.5]){let oe=new We(Z,he);oe.position.set(F,(et+1.6)/2,0),oe.castShadow=!0,T.add(oe)}for(let F=.5;F<et+1.4;F+=.55){let oe=new We(we,he);oe.position.set(0,F,0),T.add(oe)}T.rotation.x=-.38,T.scale.y=.01,g.add(T);let k=0;return b.push(F=>{k>=1||(k=Math.min(1,k+F*4),T.scale.y=k)}),T}let Ye=new Map,Se=new qt({color:10117682,roughness:.8}),bt=new qt({color:2829104,metalness:.5,roughness:.45}),yt=new qt({color:12728874,roughness:.7});function Ht(_){let y=new St;y.position.set(_.x,et,-1.05),g.add(y);let T=new We(new Wt(1.7,1.8,.18,28),new qt({color:7035464,roughness:.9}));T.position.y=.09,T.receiveShadow=!0,y.add(T);let k=new We(new Di(1.5,1.85,36),new en({color:16764992,transparent:!0,opacity:.8,depthWrite:!1,side:cn}));k.rotation.x=-Math.PI/2,k.position.y=.2,y.add(k);let F=new pn(new fn({map:m(n+_.id+".webp"),transparent:!0,depthWrite:!1}));F.scale.setScalar(2.6),F.position.y=3.1,y.add(F);let{t:oe,aspect:ue}=vd(String(_.cost),"#ffd34a",52),ke=new pn(new fn({map:oe,transparent:!0,depthWrite:!1}));ke.scale.set(1*ue*.55,.55*1,1),ke.position.set(.3,1.6,0),y.add(ke);let ie=new pn(new fn({map:pe,transparent:!0,depthWrite:!1}));ie.scale.setScalar(.6),ie.position.set(-ke.scale.x/2-.1,1.6,0),y.add(ie);let N=new We(new Di(1.5,1.85,36,1,0,.01),new en({color:10288992,transparent:!0,opacity:.95,depthWrite:!1,side:cn}));N.rotation.x=-Math.PI/2,N.position.y=.22,y.add(N);let fe={t:_,g:y,pad:T,glow:k,icon:F,price:ke,coin:ie,fill:N,machine:null,built:!1,recoil:0,fireT:0};return Ye.set(_.id,fe),b.push(()=>{fe.built||(F.position.y=3.1+Math.sin(p*2.4+_.x)*.18,k.material.opacity=fe.afford?.55+Math.sin(p*6)*.35:.25,k.material.color.set(fe.afford?10288992:16764992))}),fe}function sn(_){let y=new St,T=(k,F,oe,ue,ke,ie=0,N=0,fe=0)=>{let nt=new We(k,F);return nt.position.set(oe,ue,ke),nt.rotation.set(ie,N,fe),nt.castShadow=!0,y.add(nt),nt};if(_==="ballista"){T(new zt(1.8,.5,1.8),Se,0,.45,0);let k=new St;k.position.y=1.4,y.add(k),y.userData.aim=k;let F=(oe,ue,ke,ie,N,fe=0,nt=0,Ft=0)=>{let ge=new We(oe,ue);return ge.position.set(ke,ie,N),ge.rotation.set(fe,nt,Ft),ge.castShadow=!0,k.add(ge),ge};F(new zt(.4,.35,3.4),Se,0,0,.3),F(new zt(3.6,.25,.3),Se,0,.1,1.3,0,0,0),F(new Wt(.08,.08,3.2),bt,0,.25,.6,Math.PI/2),F(new Ii(.2,.5,8),bt,0,.25,2.3,Math.PI/2),T(new Wt(.18,.18,1,8),Se,0,.9,0)}else if(_==="cauldron"){for(let[ue,ke]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])T(new Wt(.09,.12,1.4,6),bt,ue,.7,ke);let k=T(new Qn(1.1,18,12,0,Math.PI*2,0,Math.PI*.62),bt,0,1.9,.2,Math.PI);k.scale.y=.85;let F=T(new Vs(.95,18),new en({color:16742938}),0,2.5,.2,-Math.PI/2);y.userData.lava=F;let oe=new Bn(16742954,8,10,1.6);oe.position.set(0,2.8,.2),y.add(oe),y.userData.light=oe;for(let ue=0;ue<5;ue++){let ke=new pn(new fn({map:E,transparent:!0,depthWrite:!1,blending:wn}));ke.position.set((Math.random()-.5)*1.2,2.6,.2+(Math.random()-.5)*1.2),ke.scale.setScalar(.9),y.add(ke),b.push(()=>{let ie=(p*1.4+ue/5)%1;ke.position.y=2.5+ie*1.6,ke.material.opacity=(1-ie)*.9,ke.scale.setScalar(1.1-ie*.6)})}y.rotation.y=0}else if(_==="cannon"){T(new zt(1.6,.6,2.2),yt,0,.7,0);for(let oe of[-1,1])for(let ue of[-.7,.7])T(new Wt(.55,.55,.25,14),Se,oe*.9,.55,ue,0,0,Math.PI/2);let k=new St;k.position.set(0,1.3,0),y.add(k),y.userData.aim=k;let F=new We(new Wt(.38,.52,2.8,16),bt);F.rotation.x=Math.PI/2-.25,F.position.z=.9,F.castShadow=!0,k.add(F);for(let oe=0;oe<3;oe++)T(new Qn(.28,10,8),bt,-1.1+oe*.3,.3,-1)}else if(_==="archer"){for(let[k,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])T(new zt(.3,4.4,.3),Se,k,2.2,F);T(new zt(2.6,.3,2.6),Se,0,3.6,0);for(let k of[-1.2,1.2])T(new zt(2.6,.7,.15),Se,0,4.1,k);T(new zt(.15,.7,2.6),Se,-1.2,4.1,0),T(new zt(.15,.7,2.6),Se,1.2,4.1,0),T(new Ii(2.2,1.6,4),yt,0,5.9,0,0,Math.PI/4);for(let k of[-1,1])T(new zt(.2,1.4,.2),Se,k,4.9,-1);h(t+"models/q/Characters_Henry.glb").then(k=>{if(v)return;let F=Si(k.scene);gt(F,1.7),F.position.set(0,3.75,.3),F.traverse(ie=>{ie.isMesh&&(ie.castShadow=!0)}),y.add(F);let oe=new oi(F),ue=k.animations.find(ie=>ie.name==="Punch")||k.animations[0];oe.clipAction(ue).play(),y.userData.mix=oe}).catch(()=>{})}return y.scale.setScalar(.001),y}function hn(_){_.built=!0,[_.icon,_.price,_.coin,_.glow,_.fill].forEach(k=>k.visible=!1);let y=sn(_.t.id);_.g.add(y),_.machine=y;let T=0;b.push(k=>{if(T>=1)return;T=Math.min(1,T+k*2.4);let F=1+Math.sin(T*Math.PI)*.35*(1-T);y.scale.setScalar(Math.max(.001,T*F))});for(let k=0;k<18;k++)ot(w,_.g.position.clone().add(re(0,1,0)),{size:.6,life:.9,add:!0,g:6,v:re((Math.random()-.5)*8,4+Math.random()*6,(Math.random()-.5)*8)});for(let k=0;k<8;k++)ot(R,_.g.position.clone().add(re((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),{size:2,life:1.2,grow:1.4,a:.5,v:re(0,1.5,0)})}function ot(_,y,T){var F;let k=new pn(new fn({map:_,transparent:!0,depthWrite:!1,blending:T.add?wn:Ci,color:T.color||16777215,fog:T.fog!==!1}));return k.position.copy(y),k.scale.setScalar(T.size||1),g.add(k),A.push({s:k,v:T.v?T.v.clone():re(0,0,0),g:T.g||0,life:T.life||1,age:0,grow:T.grow||0,size:T.size||1,a:(F=T.a)!=null?F:1,drag:T.drag||0,aspect:T.aspect||1}),k}function rn(_){for(let y=A.length-1;y>=0;y--){let T=A[y];if(T.age+=_,T.age>=T.life){g.remove(T.s),T.s.material.dispose(),A.splice(y,1);continue}T.v.y-=T.g*_,T.drag&&T.v.multiplyScalar(Math.max(0,1-T.drag*_)),T.s.position.addScaledVector(T.v,_);let k=T.age/T.life,F=T.size*(1+T.grow*k);T.s.scale.set(F*T.aspect,F,1),T.s.material.opacity=T.a*(1-k*k)*Math.min(1,T.age*14)}}function S(_,y=3){ot(I,_.clone().add(re(0,1,0)),{size:y*2.2,life:.35,add:!0,grow:.5,fog:!1});for(let T=0;T<14;T++)ot(E,_.clone().add(re(0,.6,0)),{size:.7,life:.6,add:!0,g:10,v:re((Math.random()-.5)*12,6+Math.random()*8,(Math.random()-.5)*12)});for(let T=0;T<8;T++)ot(R,_.clone().add(re((Math.random()-.5)*y,.5,(Math.random()-.5)*y)),{size:2.4,life:1.6,grow:1.6,a:.55,v:re(0,2,0),drag:.5});f=Math.min(1,f+.35)}function z(_,y){ot(P,_,{size:.7,life:.09,add:!0,grow:.4,color:16773840});for(let T=0;T<7;T++)ot(P,_,{size:.16+Math.random()*.1,life:.22+Math.random()*.12,add:!0,g:9,a:.9,v:re(y*(3+Math.random()*6)+(Math.random()-.5)*2,1+Math.random()*3,(Math.random()-.3)*5),color:16764810});for(let T=0;T<4;T++)ot(R,_,{size:.45,life:.7+Math.random()*.3,grow:2,a:.4,drag:1.5,v:re(y*(1+Math.random()*2),.8+Math.random(),(Math.random()-.3)*1.5)})}function G(_,y){ot(P,_,{size:y?1.3:.8,life:.1,add:!0,grow:.5,color:16777215});for(let T=0;T<(y?12:7);T++)ot(P,_,{size:.2+Math.random()*.14,life:.28+Math.random()*.2,add:!0,g:12,a:.95,v:re((Math.random()-.5)*9,2+Math.random()*5,(Math.random()-.5)*8),color:T%3?16751184:16771504});for(let T=0;T<(y?5:2);T++)ot(j,_,{size:y?1.6:1,life:.55,grow:1.3,a:.5,v:re((Math.random()-.5)*3,1+Math.random()*1.5,(Math.random()-.5)*3)})}function Q(_,y){return ot(ce,_,{size:y*.4,life:.45,add:!0,grow:4,a:.7,fog:!1})}function te(_,y,T){let k=re(_,1.4,y);for(let ue=0;ue<Math.min(5,T);ue++)ot(pe,k,{size:.7,life:.9,g:16,v:re((Math.random()-.5)*4,8+Math.random()*3,(Math.random()-.5)*2)});let{t:F,aspect:oe}=vd("+"+T,"#ffe066",56);ot(F,k.clone().add(re(0,1.4,0)),{size:.9,aspect:oe,life:1,v:re(0,3,0),fog:!1})}let q={bullet:new fn({map:P,color:16777215,blending:wn,transparent:!0,depthWrite:!1}),bubble:new fn({map:Es([[0,"rgba(220,250,255,.2)"],[.75,"rgba(160,230,255,.6)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1})};function De(_){var F;let y,T=_.kind;if(T==="ball")y=new We(new Qn(.42,12,8),bt);else if(T==="arrow"||T==="knife"||T==="harpoon"){y=new St;let oe=T==="harpoon"?2.2:T==="arrow"?1.3:.8,ue=new We(new Wt(.05,.05,oe,5),T==="knife"?new qt({color:14212580,metalness:.8,roughness:.2}):Se);ue.rotation.x=Math.PI/2,y.add(ue);let ke=new We(new Ii(.1,.3,6),bt);ke.rotation.x=Math.PI/2,ke.position.z=oe/2,y.add(ke)}else if(T==="bolt"){y=new St;let oe=new We(new Wt(.09,.09,3,6),Se);oe.rotation.x=Math.PI/2,y.add(oe)}else y=new pn(q[T]||q.bullet),y.scale.setScalar(T==="bubble"?.9:.55);(T==="shot"||T==="bullet")&&(y=new pn(q.bullet),y.scale.setScalar(.34)),y.castShadow=!0,g.add(y);let k={sh:_,o:y,t:0,prev:re(_.x0,(F=_.y0)!=null?F:3.8,_.z0)};return Gt.set(_.id,k),k}function He(_){var y;for(let[T,k]of Gt){let F=k.sh;k.t+=_;let oe=Math.min(1,k.t/F.dur),ue=((y=F.y0)!=null?y:3.8)+1.5,ke=1.4,ie=Wr(F.x0,F.tx,oe),N=Wr(F.z0,F.tz,oe),fe=Wr(ue,ke,oe)+(F.arc||0)*4*oe*(1-oe),nt=re(ie,fe,N);k.o.isSprite||k.o.lookAt(nt.clone().add(nt.clone().sub(k.prev))),k.o.position.copy(nt),k.prev.copy(nt),F.kind==="ball"&&Math.random()<.5?ot(R,nt,{size:.8,life:.5,grow:1,a:.35}):(F.kind==="shot"||F.kind==="bullet")&&oe<1&&(ot(P,nt,{size:.26,life:.16,add:!0,grow:-.6,a:.8,color:16767392}),Math.random()<.3&&ot(R,nt,{size:.35,life:.45,grow:1.2,a:.18})),oe>=1&&k.t>F.dur+.02&&(g.remove(k.o),Gt.delete(T))}}function Ke(_,y,T){let k=Ye.get("ballista");if(!k)return;let F=k.g.position.clone().add(re(0,1.6,1.5)),oe=re(y,1.2,T),ue=new St,ke=new We(new Wt(.1,.1,3.2,6),Se);ke.rotation.x=Math.PI/2,ue.add(ke);let ie=new We(new Ii(.2,.55,8),bt);ie.rotation.x=Math.PI/2,ie.position.z=1.8,ue.add(ie),ue.position.copy(F),ue.lookAt(oe),g.add(ue);let N=0,fe=F.distanceTo(oe)/70;b.push(nt=>{if(!(N>=1)&&(N=Math.min(1,N+nt/fe),ue.position.lerpVectors(F,oe,N),Math.random()<.6&&ot(j,ue.position.clone(),{size:.5,life:.3,a:.5}),N>=1)){g.remove(ue);for(let Ft=0;Ft<5;Ft++)ot(j,oe,{size:1,life:.6,grow:1,a:.6,v:re((Math.random()-.5)*3,2,(Math.random()-.5)*3)})}})}function mt(_){for(let y=0;y<26;y++){let T=re(_+(Math.random()-.5)*2,et+1.8,.8);ot(E,T,{size:1+Math.random(),life:.9+Math.random()*.4,add:!0,g:14,v:re((Math.random()-.5)*12,2+Math.random()*3,2+Math.random()*4)})}setTimeout(()=>{if(!v){for(let y=0;y<16;y++)ot(E,re(_+(Math.random()-.5)*13,.5,1+Math.random()*5),{size:1.6+Math.random(),life:1.2,add:!0,grow:.4,v:re(0,2.5+Math.random()*2,0)});for(let y=0;y<6;y++)ot(R,re(_+(Math.random()-.5)*12,1,2+Math.random()*4),{size:3,life:1.8,grow:1.4,a:.5,v:re(0,2,0),color:6969936})}},280)}let lt={x:0,shakeX:0};function ct(){let _=s.clientWidth||innerWidth,y=s.clientHeight||innerHeight;a.setSize(_,y,!1),c.aspect=_/y,c.updateProjectionMatrix(),c.fov=c.aspect<1.4?56:44,c.updateProjectionMatrix()}ct(),addEventListener("resize",ct);let Bt=0,Tn=0,U=null,V=!0;function W(_,y,T){var ke;if(v)return;U=_,V=Tn<=0;for(let ie of y)if(ie.type==="boat"){let N=_.boats.find(fe=>fe.id===ie.id);N&&Vt(N)}else if(ie.type==="spawn"){let N=_.enemies.find(fe=>fe.id===ie.id);N&&at(N)}else if(ie.type==="shot"){let N=_.shots.find(fe=>fe.id===ie.id);N&&De(N)}else if(ie.type==="fire"){Tn=.28;let N=_.w.shot==="knife"||_.w.shot==="harpoon"||dt!=null&&dt.meta.animations.throw?"throw":"attackA";(Xe.name!==N||V)&&(Xe.name=N,Xe.t=0),z(re(_.heroX+(Xe.flip?-1.5:1.5),et+2.5,-3.1),Xe.flip?1:-1)}else if(ie.type==="kill"){let N=Tt.get(ie.id);N&&(N.dead=.001,N.play(N.troll?"idle":"Death",1,!0)),te(ie.x,ie.z,ie.coins)}else if(ie.type==="hit"){let N=Tt.get(ie.id);N&&(N.flash=.14,G(re(N.x,N.troll?3:1.5,N.z-.4),N.troll),N.troll&&(N.kick=.18))}else if(ie.type==="impact")ie.kind!=="ball"&&G(re(ie.x,1.2,ie.z),!1);else if(ie.type==="boom")S(re(ie.x,0,ie.z),ie.r);else if(ie.type==="build"){let N=Ye.get(ie.id);N&&hn(N)}else if(ie.type==="tower"){let N=Ye.get(ie.id);if(!(N!=null&&N.machine))continue;if(N.recoil=.25,ie.id==="ballista")Ke(ie.x,ie.tx,ie.tz);else if(ie.id==="cauldron")mt(ie.x);else if(ie.id==="cannon"){let fe=N.g.position.clone().add(re(0,1.6,2.4));ot(I,fe,{size:2.4,life:.2,add:!0});for(let nt=0;nt<5;nt++)ot(R,fe,{size:1.6,life:1,grow:1.4,a:.6,v:re((Math.random()-.5)*2,1.5,3)});f=Math.min(1,f+.12)}}else if(ie.type==="gate"){f=Math.min(1,f+.08);for(let N=0;N<3;N++)ot(j,re((Math.random()-.5)*40,1,1),{size:1,life:.6,a:.5,v:re(0,1.5,1)})}else if(ie.type==="land"){let N=Pe.get(ie.id);if(N)for(let fe=0;fe<12;fe++)ot(R,re(N.x,.2,N.z-2),{size:1.6,life:1,grow:1,a:.5,color:15267071,v:re((Math.random()-.5)*5,2+Math.random()*2,(Math.random()-.5)*3)})}else if(ie.type==="bossLand"){let N=_.enemies.find(fe=>fe.id===ie.id);if(N){Q(re(N.x,.3,N.z),8);for(let fe=0;fe<10;fe++)ot(j,re(N.x+(Math.random()-.5)*5,.5,N.z+(Math.random()-.5)*3),{size:3,life:1,grow:1.4,a:.6,v:re((Math.random()-.5)*5,1.5,(Math.random()-.5)*5)});f=Math.min(1,f+.3)}}else if(ie.type==="bossDown")S(re(ie.x,0,ie.z),6),f=1;else if(ie.type==="reach"){let N=Tt.get(ie.id);N&&(N.play(N.troll?"walk":"Sword",1.1),N.troll||(N.ladder=Ve(N.e.x,N.e.z),N.climb=0))}for(let[ie,N]of Pe){let fe=_.boats.find(nt=>nt.id===ie);if(!fe){N.sink=(N.sink||0)+T,N.h.position.y-=T*.6,N.h.rotation.z+=T*.05,N.sink>4&&(g.remove(N.h),Pe.delete(ie));continue}N.x=fe.x,N.z=fe.z,N.h.position.set(fe.x,-.4+Math.sin(p*2+ie)*.15,fe.z),N.h.rotation.z=Math.sin(p*1.6+ie)*.04,!fe.landed&&Math.random()<.5&&ot(R,re(fe.x+(Math.random()-.5)*2,.1,fe.z+3),{size:1.4,life:1.2,grow:1.2,a:.45,color:16777215,v:re((Math.random()-.5)*2,.5,2)})}for(let[ie,N]of Tt){let fe=_.enemies.find(Ae=>Ae.id===ie);if(N.dead||!fe){N.dead+=T,N.holder.position.y>0&&N.dead<1.6&&(N.fallV=(N.fallV||0)+26*T,N.holder.position.y=Math.max(0,N.holder.position.y-N.fallV*T),N.holder.position.z+=T*3),N.ladder&&N.dead>.3&&(N.ladder.rotation.x=Math.min(1.45,N.ladder.rotation.x+T*2.2),N.dead>2.6&&(g.remove(N.ladder),N.ladder=null)),N.dead>(N.troll?2.5:1.6)&&(N.holder.position.y-=T*1.6,N.m.traverse(Ae=>{Ae.isMesh&&(Ae.material.transparent=!0,Ae.material.opacity=Math.max(0,1-(N.dead-1.6)))})),N.troll&&N.dead<2&&(N.holder.rotation.x=Math.min(1.4,N.dead*.9)),N.dead>3.2&&(g.remove(N.holder),N.ladder&&g.remove(N.ladder),Tt.delete(ie)),N.mix.update(T);continue}if(fe.delay>0){N.holder.visible=!1;continue}N.holder.visible=!0;let nt=fe.x-N.x,Ft=fe.z-N.z;if(Math.abs(nt)+Math.abs(Ft)>.001?N.holder.rotation.y=Math.atan2(nt,Ft):fe.atWall&&(N.holder.rotation.y=Math.PI),N.x=fe.x,N.z=fe.z,N.holder.position.set(fe.x,0,fe.z),N.ladder){N.climb=Math.min(1,N.climb+T/1.5);let Ae=N.climb;N.holder.position.set(fe.x,Ae*(et-1.5),Wr(fe.z,.9,Ae)),N.holder.rotation.y=Math.PI}if(fe.kind==="boss"&&!fe.atWall&&Math.random()<.08&&(f=Math.min(1,f+.05),ot(j,re(fe.x+(Math.random()-.5)*3,.3,fe.z),{size:2,life:1,grow:1,a:.5})),N.bar){let Ae=Math.max(0,fe.hp/fe.maxHp);N.bar.fg.scale.x=N.bar.w*Ae,N.bar.g.quaternion.copy(c.quaternion),N.bar.g.quaternion.premultiply(N.holder.quaternion.clone().invert())}N.flash=Math.max(0,(N.flash||0)-T);let ge=N.flash>0?.9:0,Qe=fe.burn>0?.35+Math.sin(p*20)*.15:0;if(N.m.traverse(Ae=>{Ae.isMesh&&Ae.material.emissive&&Ae.material.emissive.setRGB(ge+Qe,ge*.4+Qe*.35,ge*.3)}),fe.burn>0&&Math.random()<.3&&ot(E,re(fe.x,1+Math.random()*1.5,fe.z),{size:.8,life:.5,add:!0,v:re(0,2,0)}),fe.kind==="boss"&&N.troll&&fe.atWall){N.atk=(N.atk||0)+T;let Ae=1.25,rt=N.atk%Ae/Ae;N.holder.rotation.y=Math.PI;let Dt=rt<.45?-.2*Math.sin(rt/.45*Math.PI/2):rt<.56?-.2+.6*((rt-.45)/.11):.4*(1-(rt-.56)/.44);if(N.m.rotation.x=Dt,N.m.position.y=rt<.45?.2*Math.sin(rt/.45*Math.PI/2):rt<.56?.2*(1-(rt-.45)/.11):0,rt>=.56&&!N.slammed){N.slammed=!0;let kt=re(fe.x,2.4,1.2);G(kt,!0),Q(re(fe.x,.4,1.4),9),f=Math.min(1,f+.22);for(let xt=0;xt<6;xt++)ot(j,re(fe.x+(Math.random()-.5)*5,.6,1),{size:2.2,life:.9,grow:1.3,a:.6,v:re((Math.random()-.5)*6,2,-1-Math.random()*3)})}rt<.56&&(N.slammed=!1)}else N.m.rotation.x&&(N.m.rotation.x=0,N.m.position.y=0),N.kick>0&&(N.kick-=T,N.holder.position.z-=Math.sin(N.kick/.18*Math.PI)*.35),N.mix.update(T*(fe.kind==="boss"&&!N.troll?.6:1))}He(T);let k=(_.heroX-Bt)/Math.max(T,.001);Bt=_.heroX,Tn-=T;let F=_.aim&&_.enemies.find(ie=>ie.id===_.aim);F?F.x<_.heroX-1.2?Xe.flip=!0:F.x>_.heroX+1.2&&(Xe.flip=!1):Math.abs(k)>.5&&(Xe.flip=k<0);let oe=Tn>0?Xe.name:Math.abs(k)>.5?"run":"idle";oe!==Xe.name&&(Xe.name=oe,Xe.t=0),H.position.x=_.heroX,qe.position.x=Be.position.x=_.heroX,Be.material.opacity=.6+Math.sin(p*5)*.25,Kt(T),It&&(It.holder.position.x=_.heroX,It.sp=(It.sp||0)+(Math.abs(k)-(It.sp||0))*Math.min(1,T*8),It.mv=It.mv?It.sp>.35:It.sp>1.2,le(T,It.mv,Tn>0,Xe.flip));for(let ie of _.towers){let N=Ye.get(ie.id)||Ht(ie);if(ie.built&&!N.built&&hn(N),N.afford=!ie.built&&_.coins>=ie.cost,!N.built){let fe=Math.min(1,ie.hold/.55);N.fill.geometry.dispose(),N.fill.geometry=new Di(1.5,1.85,36,1,Math.PI/2,Math.max(.01,fe*Math.PI*2))}if(N.machine){N.recoil=Math.max(0,N.recoil-T);let fe=N.machine.userData.aim;if(fe){let nt=_.enemies.filter(Ft=>Ft.state!=="dead"&&Ft.delay<=0).sort((Ft,ge)=>Math.hypot(Ft.x-ie.x,Ft.z)-Math.hypot(ge.x-ie.x,ge.z))[0];nt&&(fe.rotation.y=Wr(fe.rotation.y,Math.atan2(nt.x-ie.x,nt.z+2),.15)),fe.position.z=-N.recoil*1.2}(ke=N.machine.userData.mix)==null||ke.update(T)}}let ue=1-_.gate/_.gateMax;it.material.opacity=Math.min(.95,ue*1.3),Te.color.setRGB(.48-ue*.2,.29-ue*.14,.15-ue*.07)}function X(_){if(v||x)return;p+=_;for(let oe of b)oe(_,p);rn(_);let y=U?U.heroX:0;lt.x=Wr(lt.x,-y*.45,Math.min(1,_*3)),f=Math.max(0,f-_*2.2);let T=c.aspect<1.4,k=(Math.random()-.5)*f*.8,F=(Math.random()-.5)*f*.6;T?(c.position.set(lt.x*.5+k,21+F,-30),c.lookAt(lt.x*.5,0,34)):(c.position.set(lt.x+k,13.5+F,-22),c.lookAt(lt.x,0,32)),a.render(o,c)}return vt(),{canvas:r,update:W,render:X,resize:ct,setHeroArt(_){dt=_,Xe.lastFrame=-1},project(_,y,T){let k=g.localToWorld(re(_,y,T)).project(c),F=r.getBoundingClientRect();return{x:F.left+(k.x+1)/2*F.width,y:F.top+(1-k.y)/2*F.height,on:k.z<1}},pause(_=!0){x=_},ready:Promise.all([Rt,h(t+"models/q/Characters_Skeleton.glb"),h(t+"models/q/Characters_Sharky.glb"),h(t+"models/q/Characters_Captain_Barbarossa.glb"),h(t+"models/q/Ship_Small.glb")]).then(()=>!0),sample(){let _=a.getContext(),y=_.drawingBufferWidth,T=_.drawingBufferHeight,k=new Uint8Array(4*64);a.render(o,c);let F=0;for(let oe=0;oe<8;oe++)_.readPixels(Math.floor(y*(oe+.5)/8),Math.floor(T*.5),1,1,_.RGBA,_.UNSIGNED_BYTE,k.subarray(oe*4));for(let oe=0;oe<32;oe++)F+=k[oe];return{mean:F/32,calls:a.info.render.calls,enemies:Tt.size}},dispose(){var _;v=!0,removeEventListener("resize",ct),o.traverse(y=>{var k;y.geometry&&y.geometry.dispose();let T=Array.isArray(y.material)?y.material:y.material?[y.material]:[];for(let F of T)(k=F.map)==null||k.dispose(),F.dispose()}),a.dispose(),(_=a.forceContextLoss)==null||_.call(a),r.remove()}}}window.PirateBastion3D={create:ux,version:1};var En=Math.PI*2,yd=(s,e,t)=>Math.max(e,Math.min(t,s)),dx=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function Oi(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function zn(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function vn(s,e=1,t=1,n=!0){let i=new Mn(s);return n&&(i.colorSpace=Ut),i.wrapS=i.wrapT=Hn,i.repeat.set(e,t),i.anisotropy=4,i}function ya(s,e,t,n,i,r,a=40){for(let o=0;o<a;o++){let c=n()*t;s.strokeStyle=`rgba(${r},${(.05+n()*.12).toFixed(3)})`,s.lineWidth=.6+n()*1.6,s.beginPath();for(let l=0;l<=e;l+=8){let u=c+Math.sin(l*.012+o)*3+Math.sin(l*.05+o*3)*1.2;l?s.lineTo(l,u):s.moveTo(l,u)}s.stroke()}for(let o=0;o<2;o++){let c=n()*e,l=n()*t,u=s.createRadialGradient(c,l,1,c,l,10+n()*10);u.addColorStop(0,`rgba(${r},.55)`),u.addColorStop(1,`rgba(${r},0)`),s.fillStyle=u,s.fillRect(c-22,l-22,44,44)}}function Md(s,e){let[t,n]=zn(1024,1024),i=Oi(s),r=1024/8;for(let a=0;a<8;a++){let o=-i()*400;for(;o<1024;){let l=380+i()*420,u=.82+i()*.3,h=e.map(d=>Math.round(d*u));n.fillStyle=`rgb(${h})`,n.fillRect(o,a*r,l,r),n.save(),n.beginPath(),n.rect(o,a*r,l,r),n.clip(),n.translate(o,a*r),ya(n,l,r,i,h,"30,16,6",18),n.restore(),n.fillStyle="rgba(20,10,4,.75)",n.fillRect(o,a*r,3,r);for(let d of[r*.22,r*.78])n.fillStyle="rgba(25,20,18,.9)",n.beginPath(),n.arc(o+12,a*r+d,3,0,En),n.arc(o+l-12,a*r+d,3,0,En),n.fill();o+=l}n.fillStyle="rgba(15,8,3,.85)",n.fillRect(0,a*r,1024,4);let c=n.createLinearGradient(0,a*r,0,a*r+r);c.addColorStop(0,"rgba(255,220,170,.06)"),c.addColorStop(1,"rgba(0,0,0,.14)"),n.fillStyle=c,n.fillRect(0,a*r,1024,r)}return t}function eh(s){let[e,t]=zn(512,1024),n=Oi(s),i=6,r=512/i;for(let o=0;o<i;o++){let c=.78+n()*.3,l=[96,58,32].map(h=>Math.round(h*c));t.fillStyle=`rgb(${l})`,t.fillRect(o*r,0,r,1024),t.save(),t.translate(o*r+r,0),t.rotate(Math.PI/2),ya(t,1024,r,n,l,"25,12,5",14),t.restore(),t.fillStyle="rgba(12,6,2,.8)",t.fillRect(o*r,0,3,1024);let u=t.createLinearGradient(o*r,0,o*r+r,0);u.addColorStop(0,"rgba(255,210,150,.05)"),u.addColorStop(1,"rgba(0,0,0,.18)"),t.fillStyle=u,t.fillRect(o*r,0,r,1024)}let a=t.createLinearGradient(0,0,0,1024);return a.addColorStop(0,"rgba(10,5,2,.55)"),a.addColorStop(.35,"rgba(10,5,2,0)"),t.fillStyle=a,t.fillRect(0,0,512,1024),e}function fx(s){let[e,t]=zn(512,512),n=Oi(s);t.fillStyle="#2a2420",t.fillRect(0,0,512,512);for(let i=0,r=0;r<512;i++){let a=46+n()*26,o=i%2?-30:0;for(;o<512;){let c=60+n()*60,l=.65+n()*.45,u=[118,104,92].map(d=>Math.round(d*l));t.fillStyle=`rgb(${u})`,t.beginPath(),t.roundRect(o+3,r+3,c-6,a-6,9),t.fill();let h=t.createLinearGradient(0,r,0,r+a);h.addColorStop(0,"rgba(255,240,220,.12)"),h.addColorStop(1,"rgba(0,0,0,.3)"),t.fillStyle=h,t.fill(),o+=c}r+=a}return e}function Ed(s,e=[120,72,38]){let[t,n]=zn(512,256),i=Oi(s),r=14,a=512/r;for(let c=0;c<r;c++){let l=.8+i()*.28,u=e.map(h=>Math.round(h*l));n.fillStyle=`rgb(${u})`,n.fillRect(c*a,0,a,256),n.save(),n.translate(c*a+a,0),n.rotate(Math.PI/2),ya(n,256,a,i,u,"28,14,5",6),n.restore(),n.fillStyle="rgba(15,8,3,.7)",n.fillRect(c*a,0,2,256)}let o=n.createLinearGradient(0,0,0,256);return o.addColorStop(0,"rgba(0,0,0,.25)"),o.addColorStop(.5,"rgba(255,220,170,.06)"),o.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=o,n.fillRect(0,0,512,256),t}function th(s,e){let[t,n]=zn(512,384),i=Oi(s),r=n.createRadialGradient(256,192,40,256,192,300);r.addColorStop(0,"#ecd7a4"),r.addColorStop(.7,"#d2b077"),r.addColorStop(1,"#8a6232"),n.fillStyle=r,n.fillRect(0,0,512,384);for(let u=0;u<260;u++)n.fillStyle=`rgba(110,70,30,${(i()*.08).toFixed(3)})`,n.fillRect(i()*512,i()*384,2+i()*8,1+i()*3);n.strokeStyle="rgba(90,60,30,.25)",n.lineWidth=1;for(let u=1;u<8;u++)n.beginPath(),n.moveTo(u*64,0),n.lineTo(u*64,384),n.stroke();for(let u=1;u<6;u++)n.beginPath(),n.moveTo(0,u*64),n.lineTo(512,u*64),n.stroke();let a=[];for(let u=0;u<4;u++){let h=70+i()*370,d=60+i()*260,m=22+i()*46;a.push([h,d]),n.beginPath();for(let g=0;g<=40;g++){let b=g/40*En,p=m*(.7+.3*Math.sin(b*3+u)+.15*Math.sin(b*7+u*2)),f=h+Math.cos(b)*p*1.3,v=d+Math.sin(b)*p;g?n.lineTo(f,v):n.moveTo(f,v)}n.closePath(),n.fillStyle="rgba(150,120,60,.55)",n.fill(),n.strokeStyle="#5a3a1a",n.lineWidth=2.4,n.stroke(),n.strokeStyle="rgba(70,90,110,.35)",n.lineWidth=1;for(let g=1;g<3;g++)n.beginPath(),n.ellipse(h,d,m*1.3+g*8,m+g*8,0,0,En),n.stroke();n.fillStyle="rgba(60,90,40,.6)";for(let g=0;g<5;g++)n.beginPath(),n.arc(h+(i()-.5)*m,d+(i()-.5)*m*.6,3,0,En),n.fill()}n.setLineDash([7,7]),n.strokeStyle="#8a1e14",n.lineWidth=2.5,n.beginPath(),a.forEach(([u,h],d)=>d?n.quadraticCurveTo((u+a[d-1][0])/2+30,(h+a[d-1][1])/2-40,u,h):n.moveTo(u,h)),n.stroke(),n.setLineDash([]);let[o,c]=a[a.length-1];n.strokeStyle="#a0170e",n.lineWidth=5,n.beginPath(),n.moveTo(o-10,c-10),n.lineTo(o+10,c+10),n.moveTo(o+10,c-10),n.lineTo(o-10,c+10),n.stroke(),n.save(),n.translate(440,320),n.fillStyle="#5a3a1a";for(let u=0;u<8;u++)n.rotate(En/8),n.beginPath(),n.moveTo(0,-(u%2?18:34)),n.lineTo(5,0),n.lineTo(-5,0),n.closePath(),n.fill();n.beginPath(),n.arc(0,0,6,0,En),n.fillStyle="#d9b97a",n.fill(),n.restore(),n.fillStyle="#4b2e12",n.font="italic bold 26px Georgia,serif",n.textAlign="center",n.fillText(e,256,34);let l=n.createRadialGradient(256,192,170,256,192,330);return l.addColorStop(0,"rgba(60,30,10,0)"),l.addColorStop(1,"rgba(50,25,8,.85)"),n.fillStyle=l,n.fillRect(0,0,512,384),t}function px(s){let[e,t]=zn(1024,256),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#5b3518"),n.addColorStop(1,"#2e180a"),t.fillStyle=n,t.beginPath(),t.roundRect(8,8,1008,240,40),t.fill(),t.lineWidth=10,t.strokeStyle="#c9963f",t.stroke(),t.font="bold 116px Georgia,serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#1b0d04",t.fillText(s,516,136);let i=t.createLinearGradient(0,70,0,190);return i.addColorStop(0,"#fff0b8"),i.addColorStop(1,"#d69a35"),t.fillStyle=i,t.fillText(s,512,130),e}function nh(s){let[e,t]=zn(512,512);if(s==="checkers"){for(let n=0;n<8;n++)for(let i=0;i<8;i++)t.fillStyle=(n+i)%2?"#3a2412":"#d9b77c",t.fillRect(16+n*60,16+i*60,60,60);t.lineWidth=16,t.strokeStyle="#5a3418",t.strokeRect(8,8,496,496)}else if(s==="xo"){let n=Oi(7);t.fillStyle="#8a5a2e",t.fillRect(0,0,512,512),ya(t,512,512,n,[138,90,46],"40,20,6",30),t.strokeStyle="rgba(25,12,4,.85)",t.lineWidth=12,t.lineCap="round";for(let a of[190,322])t.beginPath(),t.moveTo(a,70),t.lineTo(a,442),t.stroke(),t.beginPath(),t.moveTo(70,a),t.lineTo(442,a),t.stroke();t.strokeStyle="rgba(245,240,225,.92)",t.lineWidth=11;let i=(a,o)=>{t.beginPath(),t.moveTo(a-38,o-38),t.lineTo(a+38,o+38),t.moveTo(a+38,o-38),t.lineTo(a-38,o+38),t.stroke()},r=(a,o)=>{t.beginPath(),t.arc(a,o,40,0,En),t.stroke()};i(124,124),r(256,256),i(388,124),r(124,388)}else if(s==="target"){let n=Oi(3);t.fillStyle="#7a4a22",t.beginPath(),t.arc(256,256,250,0,En),t.fill(),ya(t,512,512,n,[122,74,34],"30,14,4",40),["#e8d9b0","#9a1c14","#e8d9b0","#9a1c14","#e8d9b0","#1e1410"].forEach((r,a)=>{t.globalAlpha=.82,t.fillStyle=r,t.beginPath(),t.arc(256,256,210-a*36,0,En),t.fill()}),t.globalAlpha=1,t.strokeStyle="rgba(20,10,4,.6)",t.lineWidth=3;for(let r=0;r<14;r++)t.beginPath(),t.arc(256,256,30+r*16+n()*4,n()*En,n()*En),t.stroke();t.lineWidth=12,t.strokeStyle="#3b2a1c",t.beginPath(),t.arc(256,256,244,0,En),t.stroke()}return e}function mx(s){let[e,t]=zn(128,128);t.fillStyle="#f2e8d2",t.beginPath(),t.roundRect(2,2,124,124,22),t.fill(),t.fillStyle="#2a1408";let n={1:[[64,64]],2:[[34,34],[94,94]],3:[[34,34],[64,64],[94,94]],4:[[34,34],[94,34],[34,94],[94,94]],5:[[34,34],[94,34],[64,64],[34,94],[94,94]],6:[[34,30],[94,30],[34,64],[94,64],[34,98],[94,98]]};for(let[i,r]of n[s])t.beginPath(),t.arc(i,r,11,0,En),t.fill();return e}function gx(){let[s,e]=zn(512,320);e.fillStyle="#121214",e.fillRect(0,0,512,320);let t=Oi(9);for(let n=0;n<300;n++)e.fillStyle=`rgba(255,255,255,${(t()*.04).toFixed(3)})`,e.fillRect(t()*512,t()*320,3,1);e.fillStyle="#ece4d0",e.beginPath(),e.ellipse(256,130,62,66,0,0,En),e.fill(),e.beginPath(),e.roundRect(214,160,84,50,14),e.fill(),e.fillStyle="#121214",e.beginPath(),e.ellipse(232,136,17,20,0,0,En),e.ellipse(280,136,17,20,0,0,En),e.fill(),e.beginPath(),e.moveTo(256,160),e.lineTo(247,178),e.lineTo(265,178),e.fill();for(let n=0;n<4;n++)e.fillRect(226+n*18,190,6,18);return e.strokeStyle="#ece4d0",e.lineWidth=22,e.lineCap="round",e.beginPath(),e.moveTo(150,220),e.lineTo(362,296),e.moveTo(362,220),e.lineTo(150,296),e.stroke(),s}function bx(){let[s,e]=zn(512,640),t=e.createLinearGradient(0,0,0,640);t.addColorStop(0,"#0b1a35"),t.addColorStop(.55,"#1d3d66"),t.addColorStop(.56,"#183552"),t.addColorStop(1,"#081626"),e.fillStyle=t,e.fillRect(0,0,512,640);let n=Oi(21);for(let r=0;r<120;r++)e.fillStyle=`rgba(255,255,240,${(.3+n()*.7).toFixed(2)})`,e.fillRect(n()*512,n()*330,1.6,1.6);let i=e.createRadialGradient(360,150,10,360,150,140);i.addColorStop(0,"rgba(230,240,255,.9)"),i.addColorStop(.25,"rgba(160,200,255,.35)"),i.addColorStop(1,"rgba(100,150,220,0)"),e.fillStyle=i,e.fillRect(200,0,312,320),e.fillStyle="#f4f6ff",e.beginPath(),e.arc(360,150,30,0,En),e.fill();for(let r=0;r<70;r++){let a=360+n()*270,o=20+n()*80;e.fillStyle=`rgba(200,225,255,${(.15+n()*.35).toFixed(2)})`,e.fillRect(330+(n()-.5)*140*(1+(a-360)/200),a,o*.5,1.5)}e.fillStyle="#060c16",e.beginPath(),e.moveTo(60,360),e.lineTo(210,360),e.lineTo(190,385),e.lineTo(80,385),e.closePath(),e.fill(),e.fillRect(130,230,4,130),e.fillRect(95,260,4,100),e.beginPath(),e.moveTo(134,236),e.quadraticCurveTo(175,280,136,330),e.closePath(),e.fill(),e.beginPath(),e.moveTo(99,266),e.quadraticCurveTo(130,300,101,340),e.closePath(),e.fill(),e.fillStyle="#ffc56a";for(let r=0;r<4;r++)e.fillRect(100+r*22,368,6,5);return s}function ih(s="rgba(255,214,140,1)",e="rgba(255,150,60,.35)"){let[t,n]=zn(128,128),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,s),i.addColorStop(.25,e),i.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=i,n.fillRect(0,0,128,128),t}function xx(){let[s,e]=zn(64,128),t=e.createRadialGradient(32,92,2,32,80,60);return t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.25,"rgba(255,210,90,.95)"),t.addColorStop(.6,"rgba(255,110,20,.55)"),t.addColorStop(1,"rgba(200,40,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,4),e.bezierCurveTo(54,50,60,90,32,124),e.bezierCurveTo(4,90,10,50,32,4),e.fill(),s}function _x(){let[s,e]=zn(128,128),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.62)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),s}function vx(){let[s,e]=zn(64,256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(170,200,255,.5)"),t.addColorStop(1,"rgba(170,200,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=n,e.fillRect(0,0,64,256),s}function yx(){let[s,e]=zn(256,256);e.strokeStyle="rgba(255,214,120,1)",e.lineWidth=10,e.beginPath(),e.arc(128,128,100,0,En),e.stroke();let t=e.createRadialGradient(128,128,60,128,128,126);return t.addColorStop(0,"rgba(255,200,90,0)"),t.addColorStop(.75,"rgba(255,200,90,.35)"),t.addColorStop(1,"rgba(255,200,90,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),s}async function Sd(s,e={}){let t=e.base||"tavern/",n=e.lang||"en",i=!!e.reducedMotion,r=()=>Math.max(1,s.clientWidth),a=()=>Math.max(1,s.clientHeight),o=new ri({antialias:(devicePixelRatio||1)<2.5,powerPreference:"high-performance",alpha:!1});o.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),o.setSize(r(),a()),o.outputColorSpace=Ut,o.toneMapping=Ei,o.toneMappingExposure=1.02,o.domElement.className="tv-canvas",s.append(o.domElement);let c=new ai;c.background=new ze("#120a05"),c.fog=new Li("#1a0e06",11,24);let l=new dn(48,r()/a(),.1,60),u=new Set,h=L=>(u.add(L),L),d=L=>h(new qt(L)),m=(L,J,ee=0,se=0,be=0,Me=c)=>{let Ze=new We(h(L),J);return Ze.position.set(ee,se,be),Me.add(Ze),Ze},g=(L,J,ee,se,be,Me,Ze,Re)=>m(new zt(L,J,ee),se,be,Me,Ze,Re),b=(L,J,ee,se,be,Me,Ze,Re,ht=16)=>m(new Wt(L,J,ee,ht),se,be,Me,Ze,Re),p={floor:h(vn(Md(11,[112,70,40]),2.2,1.6)),wall:h(vn(eh(5),3,1)),wallSide:h(vn(eh(8),3.6,1)),stone:h(vn(fx(4),1.4,1.4)),stave:h(vn(Ed(2))),staveDark:h(vn(Ed(6,[86,52,28]))),top:h(vn(Md(17,[110,66,34]),.7,.7)),counter:h(vn(eh(13),4,.5))},f={floor:d({map:p.floor,roughness:.82,metalness:0}),wall:d({map:p.wall,roughness:.9}),wallSide:d({map:p.wallSide,roughness:.9}),beam:d({color:"#3b2210",roughness:.85,map:p.staveDark}),dark:d({color:"#24140a",roughness:.9}),wood:d({color:"#7a4a26",roughness:.75,map:p.stave}),top:d({map:p.top,roughness:.55,color:"#c08a58"}),counter:d({map:p.counter,roughness:.7,color:"#b07848"}),counterTop:d({color:"#4a2812",roughness:.35,metalness:.05,map:p.top}),stone:d({map:p.stone,roughness:.95}),iron:d({color:"#2d2a28",roughness:.45,metalness:.8}),brass:d({color:"#b98a3a",roughness:.35,metalness:.9}),rope:d({color:"#a8875a",roughness:1}),cloth:d({color:"#7c1f1a",roughness:.95}),soot:d({color:"#0c0705",roughness:1}),foam:d({color:"#f6ead0",roughness:.9}),ale:d({color:"#a8641a",roughness:.3,emissive:"#3a1a04"}),candle:d({color:"#efe2c4",roughness:.7,emissive:"#3a2a10"}),glassLamp:d({color:"#ffd28a",emissive:"#ffb04a",emissiveIntensity:2.2,roughness:.2})},v=["#2f6b3a","#6b2a1a","#2a3f6b","#7a6a2a","#3a2a1a","#5a1f4a"].map(L=>d({color:L,roughness:.12,metalness:.1,transparent:!0,opacity:.82,emissive:L,emissiveIntensity:.25})),x=16,A=12,I=4.6,R=-6.2,E=-8,j=8,w=m(new Zt(x,A+2),f.floor,0,0,-.2);w.rotation.x=-Math.PI/2;let P=m(new Zt(x,I),f.wall,0,I/2,R),ce=m(new Zt(A+2,I),f.wallSide,E,I/2,-.2);ce.rotation.y=Math.PI/2;let pe=m(new Zt(A+2,I),f.wallSide,j,I/2,-.2);pe.rotation.y=-Math.PI/2;let re=m(new Zt(x,A+2),f.dark,0,I,-.2);re.rotation.x=Math.PI/2,g(x,.14,.12,f.beam,0,1.15,R+.06),g(x,.26,.1,f.beam,0,.13,R+.05);for(let L of[-1,1]){let J=g(.12,.14,A+2,f.beam,L*(x/2-.06),1.15,-.2),ee=g(.1,.26,A+2,f.beam,L*(x/2-.05),.13,-.2)}for(let L=-3;L<=3;L++)g(.3,.34,A+2,f.beam,L*2.5,I-.17,-.2);g(x,.34,.34,f.beam,0,I-.5,R+.2),g(x,.3,.3,f.beam,0,I-.45,2.6);for(let[L,J]of[[-7.7,R+.3],[7.7,R+.3],[-7.7,2.6],[7.7,2.6],[-3.9,R+.25],[3.9,R+.25],[-6.2,2.6],[6.2,2.6]])g(.36,I,.36,f.beam,L,I/2,J);for(let L of[-1,1]){let J=g(.14,3.4,.14,f.beam,L*7.9,2.3,1.2);J.rotation.x=.9}let B=h(new en({map:h(vn(_x(),1,1,!1)),transparent:!0,depthWrite:!1})),ae=(L,J,ee,se=ee,be=1)=>{let Me=m(new Zt(1,1),B,L,.012,J);return Me.rotation.x=-Math.PI/2,Me.scale.set(ee,se,1),Me.renderOrder=1,be!==1&&(Me.material=B.clone(),h(Me.material),Me.material.opacity=be),Me},me=new Fi,ve=L=>t+"models/"+L+".glb",xe=new Map,_e=L=>(xe.has(L)||xe.set(L,me.loadAsync(ve(L)).catch(J=>(console.warn("[tavern] model",L,J),null))),xe.get(L)),Le=["Characters_Henry","Characters_Captain_Barbarossa","Characters_Skeleton","Characters_Anne"],Ue=["Prop_Barrel","Prop_Bottle_1","Prop_Bottle_2","Potion1_Filled","Potion3_Filled","Potion5_Filled","Potion7_Filled","Candle","Torch_wall","Prop_Coins","Prop_Chest_Gold","Prop_Chest_Closed","Prop_Skull","Prop_Anchor","Weapon_Dagger","Weapon_Cutlass","Weapon_Sword_1","Weapon_Pistol","Weapon_Lute","Prop_Bucket_Fishes","Prop_GoldBag","Prop_Cannon","Prop_CannonBall","Prop_Bomb","Prop_Fish_Mackerel","Ship_Small","Book_Open","Book1_Closed","Book2_Closed","Bread","Plate"],$e=0,de=Le.length+Ue.length,Ee={};await Promise.all([...Le,...Ue].map(L=>_e(L).then(J=>{var ee;Ee[L]=J,$e++,(ee=e.onProgress)==null||ee.call(e,$e/de)})));let ne=[...Le,...Ue].filter(L=>!Ee[L]);ne.length&&console.warn("[tavern] missing models",ne);function Ie(L,J,ee,se,be={}){let Me=Ee[L];if(!Me)return null;let Ze=Me.scene.clone(!0);if(be.h){let Re=new kn().setFromObject(Me.scene),ht=Re.max.y-Re.min.y||1;Ze.scale.setScalar(be.h/ht)}else be.s&&Ze.scale.setScalar(be.s);return Ze.position.set(J,ee,se),Ze.rotation.set(be.rx||0,be.ry||0,be.rz||0),(be.parent||c).add(Ze),Ze.traverse(Re=>{var ht,Nt;Re.isMesh&&(Re.material=Re.material.clone(),h(Re.material),Re.material.metalness>.5&&!be.metal&&(Re.material.metalness=.4),Re.material.roughness=Math.max(.35,(ht=Re.material.roughness)!=null?ht:.8),be.emissive&&(Re.material.emissive=new ze(be.emissive),Re.material.emissiveIntensity=(Nt=be.emissiveI)!=null?Nt:.6))}),be.shadow&&ae(J,se,be.shadow),Ze}let pt=h(new fn({map:h(vn(xx(),1,1)),blending:wn,depthWrite:!1,transparent:!0})),wt=h(new fn({map:h(vn(ih(),1,1)),blending:wn,depthWrite:!1,transparent:!0,opacity:.55})),et=[];function Oe(L,J,ee,se=.1,be=c,Me=.5){let Ze=new pn(pt);Ze.position.set(L,J,ee),Ze.scale.set(se*.6,se*1.2,1),be.add(Ze);let Re=null;se>=.2&&(Re=new pn(wt),Re.position.set(L,J,ee),Re.scale.setScalar(se*6*Me),be.add(Re));let ht={f:Ze,g:Re,s:se,glow:Me,seed:Math.random()*100};return et.push(ht),ht}function je(L,J,ee,se=c,be=.2){return Ie("Candle",L,J,ee,{h:be,parent:se}),Oe(L,J+be*1.04,ee,.075,se)}function Y(L,J,ee,se=c,be=!0){let Me=new St;Me.position.set(L,J,ee),se.add(Me);let Ze=new We(h(new Wt(.065,.07,.16,12)),f.wood);Ze.position.y=.08,Me.add(Ze);for(let ht of[.03,.13]){let Nt=new We(h(new Qi(.071,.008,4,12)),f.iron);Nt.rotation.x=Math.PI/2,Nt.position.y=ht,Me.add(Nt)}let Re=new We(h(new Qi(.04,.012,6,10,Math.PI)),f.wood);if(Re.position.set(.07,.08,0),Re.rotation.z=-Math.PI/2,Me.add(Re),be){let ht=new We(h(new Wt(.068,.066,.03,12)),f.foam);ht.position.y=.165,Me.add(ht)}return Me}let an=.74;function ut(L,J,ee=0){let se=new St;se.position.set(L,0,J),se.rotation.y=ee,c.add(se);let be=new We(h(new Wt(.24,.24,.06,14)),f.top);be.position.y=.46,se.add(be);for(let Me=0;Me<3;Me++){let Ze=Me/3*En,Re=new We(h(new Wt(.025,.03,.46,6)),f.beam);Re.position.set(Math.cos(Ze)*.15,.23,Math.sin(Ze)*.15),Re.rotation.z=Math.cos(Ze)*.12,Re.rotation.x=-Math.sin(Ze)*.12,se.add(Re)}return ae(L,J,.7),se}function Mt(L,J,ee=0){Ie("Prop_Barrel",L,0,J,{h:.5,ry:ee,shadow:.8})}function st(L,J,ee=.85){let se=new St;se.position.set(L,0,J),c.add(se);let be=new We(h(new Wt(ee,ee,.08,28)),f.top);be.position.y=an,se.add(be);let Me=new We(h(new Qi(ee,.03,6,28)),f.beam);Me.rotation.x=Math.PI/2,Me.position.y=an,se.add(Me);let Ze=new We(h(new Wt(.09,.13,an-.04,10)),f.beam);Ze.position.y=(an-.04)/2,se.add(Ze);for(let Re=0;Re<2;Re++){let ht=new We(h(new zt(.7,.07,.1)),f.beam);ht.position.y=.04,ht.rotation.y=Re*Math.PI/2+.4,se.add(ht)}return ae(L,J,ee*2.6,ee*2.3),se}let _t=an+.04,O=new St;c.add(O),g(7.2,1.08,.78,f.counter,0,.54,-4.1,O),g(7.5,.1,.98,f.counterTop,0,1.13,-4.1,O),g(7.3,.12,.1,f.beam,0,.06,-3.68,O);for(let L=-3;L<=3;L++)g(.12,.9,.06,f.beam,L*1.15,.58,-3.69,O);g(.06,.06,7,f.brass,0,.25,-3.6,O).rotation.y=Math.PI/2;let C=d({map:h(vn(px(e.signText||"BATAN L\xD6VB\u018FR"),1,1)),roughness:.6,emissive:"#2a1404",emissiveIntensity:.4});m(new Zt(2.9,.72),C,0,.64,-3.63);let M=["Prop_Bottle_1","Potion3_Filled","Prop_Bottle_2","Potion1_Filled","Prop_Bottle_1","Potion5_Filled","Prop_Bottle_2","Potion7_Filled"];for(let[L,J]of[[1.75,13],[2.35,12],[2.95,11]]){g(5.6,.07,.42,f.beam,0,L,R+.26,O);for(let ee=0;ee<J;ee++){let se=-2.55+ee*(5.1/(J-1)),be=(ee*3+Math.round(L*7))%M.length;ee%6===4?Y(se,L+.035,R+.3,O,!1):L>2.9&&ee%5===2?Ie("Book1_Closed",se,L+.2,R+.3,{h:.3,rz:.12}):Ie(M[be],se,L+.035,R+.3,{h:M[be].startsWith("Potion")?.3:.34,ry:ee})}}for(let L of[-2.9,2.9])g(.12,1.6,.44,f.beam,L,2.4,R+.26,O);for(let L of[-1,1]){g(1,.14,.9,f.beam,L*3.55,.07,R+.7,O),Ie("Prop_Barrel",L*3.55,.14,R+.7,{h:.95,ry:.4*L}),Ie("Prop_Barrel",L*3.55,1.09,R+.7,{h:.8,ry:-.3*L});let J=b(.03,.03,.16,f.brass,L*3.55,.55,R+1.15,O);J.rotation.x=Math.PI/2}[[-2.8,0],[-1.6,1],[-.9,0],[1.3,1],[2.4,0]].forEach(([L,J],ee)=>Y(L,1.18,-4+ee%2*.15,O,!!J)),Ie("Prop_Bottle_1",.95,1.18,-4.15,{h:.34}),Ie("Prop_Coins",1.75,1.18,-3.95,{h:.1,ry:.8}),je(-2.2,1.18,-4.2,O),je(2,1.18,-4.25,O),Ie("Prop_Chest_Gold",-3,0,-3.25,{h:.75,ry:.5,shadow:1.4,emissive:"#3a2400",emissiveI:.35}),Ie("Prop_Bucket_Fishes",2.9,0,-3.35,{h:.5,ry:-.4,shadow:.9});let $=E+.45,ye=-2.6,Te=new St;Te.position.set($,0,ye),c.add(Te),g(.9,2.2,2.4,f.stone,0,1.1,0,Te),g(.92,1.15,1.3,f.soot,.02,.62,0,Te),g(1.15,.16,2.7,f.beam,.1,2.25,0,Te),g(.7,2.3,1.6,f.stone,-.1,3.4,0,Te);for(let L=0;L<3;L++){let J=b(.08,.08,.9,f.beam,.3,.14+(L===2?.12:0),(L-1)*.18,Te,8);J.rotation.x=Math.PI/2,J.rotation.z=(L-1)*.3}Oe($+.35,.48,ye-.15,.5,c,.7),Oe($+.35,.45,ye+.18,.42,c,.6),Oe($+.4,.42,ye,.6,c,.9);let Ce=d({color:"#ff6a1a",emissive:"#ff4a00",emissiveIntensity:2,roughness:1});g(.4,.05,.9,Ce,$+.35,.06,ye),Ie("Prop_Skull",$+.15,2.33+.12,ye+.5,{h:.24,ry:Math.PI/2}),Ie("Ship_Small",$+.2,2.33,ye-.55,{h:.55,ry:Math.PI/2}),je($+.15,2.33,ye+1);let Ge=new St;Ge.position.set(E+.03,2.25,1),Ge.rotation.y=Math.PI/2,c.add(Ge);let Fe=h(vn(bx(),1,1));m(new Zt(1.5,1.85),d({map:Fe,emissive:"#ffffff",emissiveMap:Fe,emissiveIntensity:.9,roughness:.1}),0,0,0,Ge),g(1.7,.12,.14,f.beam,0,.98,.02,Ge),g(1.7,.16,.2,f.beam,0,-.98,.05,Ge),g(.12,2,.14,f.beam,-.8,0,.02,Ge),g(.12,2,.14,f.beam,.8,0,.02,Ge),g(.06,1.85,.08,f.beam,0,0,.03,Ge),g(1.5,.06,.08,f.beam,0,.2,.03,Ge);let it=h(new en({map:h(vn(vx(),1,1,!1)),transparent:!0,blending:wn,depthWrite:!1,opacity:.16,side:cn}));m(new Zt(1.6,4.2),it,E+1.6,1.3,1).rotation.set(0,Math.PI/2,-.95),m(new Zt(1.5,1.12),d({map:h(vn(th(3,"Mare Incognitum"),1,1)),roughness:.9}),-5.4,2.6,R+.03).rotation.z=.03,m(new Zt(1.2,.9),d({map:h(vn(th(12,"Insula"),1,1)),roughness:.9}),5.3,2.75,R+.03).rotation.z=-.05;let Tt=m(new Zt(1.4,1.05),d({map:h(vn(th(29,"Freeport"),1,1)),roughness:.9}),j-.03,2.85,-4.4);Tt.rotation.y=-Math.PI/2;let Pe=m(new Zt(1.45,.9,16,4),d({map:h(vn(gx(),1,1)),roughness:1,side:cn}),0,3.72,R+.08),Gt=Pe.geometry.attributes.position.array.slice();Ie("Weapon_Cutlass",$+.3,3.15,ye-.25,{h:.9,ry:Math.PI/2,rx:.6}),Ie("Weapon_Cutlass",$+.3,3.15,ye+.25,{h:.9,ry:Math.PI/2,rx:-.6}),Ie("Weapon_Pistol",-2,2.6,R+.07,{h:.22,rz:.2}),Ie("Prop_Anchor",j-.1,2.4,2,{s:1.35,rx:Math.PI/2,ry:-Math.PI/2,metal:!0});for(let[L,J,ee]of[[-3.72,R+.45,0],[3.72,R+.45,Math.PI],[E+.22,2.6,0],[j-.22,2.6,Math.PI]])Ie("Torch_wall",L,2.15,J,{h:.55,ry:ee+(Math.abs(L)>7?(L<0,0):-Math.PI/2)});Ie("Prop_Cannon",-6.6,.32,3.4,{h:.75,ry:-.5,shadow:1.6});for(let[L,J]of[[-6,4],[-5.8,4.2],[-5.95,4.35]])Ie("Prop_CannonBall",L,.1,J,{h:.2});Ie("Prop_Barrel",-7.2,0,-5.2,{h:.9,ry:.3,shadow:1.2}),Ie("Prop_Barrel",-6.5,0,-5.45,{h:.9,ry:1.3,shadow:1.2}),Ie("Prop_Barrel",-6.85,.9,-5.3,{h:.75,ry:2}),Ie("Prop_Bomb",-6,0,-5.3,{h:.35}),Lt(7.2,0,-5.5,.75,.2),Lt(7.2,.75,-5.45,.55,-.3),Ie("Prop_GoldBag",7.15,1.3,-5.45,{h:.3}),Ie("Prop_Barrel",6.3,0,-5.6,{h:.85,ry:.3,shadow:1.1}),Ie("Prop_Chest_Closed",7,0,3.6,{h:.6,ry:-1.2,shadow:1.2}),Ie("Weapon_Lute",-7.6,.5,1.95,{h:.9,ry:Math.PI/2,rx:-.25});for(let[L,J]of[[-6.9,-4.3],[6.95,3]]){let ee=m(new Qi(.32,.09,8,20),f.rope,L,.09,J);ee.rotation.x=Math.PI/2,m(new Qi(.22,.08,8,18),f.rope,L,.24,J).rotation.x=Math.PI/2,ae(L,J,1.1)}function Lt(L,J,ee,se=.6,be=0){let Me=g(se,se,se,d({map:p.stave,color:"#b4875a",roughness:.85}),L,J+se/2,ee);Me.rotation.y=be;for(let Ze of[-1,1])g(se*1.02,.06,.06,f.beam,0,Ze*se*.44,se*.5,Me),g(.06,se*1.02,.06,f.beam,Ze*se*.44,0,se*.5,Me);return ae(L,ee,se*1.8),Me}c.add(new $n("#ffcf9a","#2a1406",.5)),c.add(new Co("#4a2c18",.35));let Rt=new An("#8fb0ff",.55);Rt.position.set(-12,6,2),Rt.target.position.set(-3,0,1),c.add(Rt,Rt.target);let gt=new An("#ffcf9a",.55);gt.position.set(3,6,8),gt.target.position.set(0,1,-2),c.add(gt,gt.target);let at=[];function Et(L,J,ee,se,be,Me,Ze=.12){let Re=new Bn(se,be,Me,1.6);return Re.position.set(L,J,ee),c.add(Re),at.push({l:Re,base:be,flick:Ze,seed:Math.random()*50}),Re}function Vt(L,J,ee,se=.8){let be=new St;be.position.set(L,J,ee),c.add(be);let Me=new We(h(new Wt(.012,.012,se,4)),f.iron);Me.position.y=se/2,be.add(Me);let Ze=new We(h(new Wt(.12,.14,.3,6,1,!0)),f.glassLamp);be.add(Ze);let Re=new We(h(new Ii(.17,.14,6)),f.iron);Re.position.y=.22,be.add(Re);let ht=new We(h(new Wt(.15,.12,.05,6)),f.iron);ht.position.y=-.17,be.add(ht);for(let Pt=0;Pt<6;Pt++){let Ct=Pt/6*En,tt=new We(h(new zt(.015,.3,.015)),f.iron);tt.position.set(Math.cos(Ct)*.135,0,Math.sin(Ct)*.135),be.add(tt)}let Nt=new pn(wt);return Nt.scale.setScalar(1.3),be.add(Nt),be}Vt(-4.2,3.2,-1.2,1.2),Vt(4,3.2,-1.4,1.2),Vt(-1.8,3.3,1.9,1.1),Vt(2.6,3.3,2,1.1),Et(-4.2,3.05,-1.2,"#ffb262",10,10),Et(4,3.05,-1.4,"#ffb262",10,10),Et(0,3.35,.7,"#ffc27a",16,14,.06),Et($+1,.8,ye,"#ff7a2a",16,8,.35);let Xt=new St;Xt.position.set(0,3.6,.7),c.add(Xt),m(new Qi(.75,.045,6,32),f.beam,0,0,0,Xt).rotation.x=Math.PI/2;for(let L=0;L<4;L++){let J=L/4*En+.3,ee=m(new Wt(.008,.008,1.2,3),f.iron,Math.cos(J)*.37,.55,Math.sin(J)*.37,Xt);ee.rotation.z=-Math.cos(J)*.55,ee.rotation.x=Math.sin(J)*.55}for(let L=0;L<8;L++){let J=L/8*En;je(Math.cos(J)*.75,.02,Math.sin(J)*.75,Xt,.16)}st(-4.7,-.8,.78),Mt(-3.85,-.25,.5);let At=m(new zt(.62,.03,.62),d({map:h(vn(nh("checkers"),1,1)),roughness:.5}),-4.65,_t+.015,-.85);At.rotation.y=.25;let Ne=h(new Wt(.03,.03,.018,12)),H=d({color:"#9a1e16",roughness:.4}),qe=d({color:"#f0e2c4",roughness:.4});for(let L=0;L<8;L++)for(let J=0;J<8;J++){if((L+J)%2===0||J>2&&J<5||Math.sin(L*3.1+J*7.7)>.55)continue;let ee=new We(Ne,J<3?H:qe);ee.position.set((L-3.5)*.068,.02,(J-3.5)*.068),At.add(ee)}Y(-4.25,_t,-1.15,c,!0),je(-5.05,_t,-1.25),st(-1.8,1.7,.8),Mt(-1,2.35,1);let Be=[1,2,3,4,5,6].map(L=>d({map:h(vn(mx(L),1,1)),roughness:.4})),dt=[];for(let[L,J,ee]of[[-1.7,1.55,.4],[-1.52,1.72,1.1]]){let se=m(new zt(.09,.09,.09),[Be[0],Be[5],Be[1],Be[4],Be[2],Be[3]],L,_t+.045,J);se.rotation.y=ee,dt.push(se)}let Xe=b(.085,.07,.2,d({color:"#5a2a12",roughness:.8}),-2.05,_t+.09,1.5);Xe.rotation.z=1.4,Ie("Prop_Coins",-1.95,_t,1.95,{h:.1,ry:.3}),Y(-1.25,_t,1.95),Ie("Plate",-1.45,_t,1.35,{h:.05}),Ie("Bread",-1.45,_t+.03,1.35,{h:.14,ry:.6}),st(2.5,1.5,.8),Mt(1.65,2.15,.3);let Kt=m(new zt(.66,.03,.66),d({map:h(vn(nh("xo"),1,1)),roughness:.7}),2.45,_t+.015,1.5);Kt.rotation.y=-.2;let It=g(.08,.02,.02,d({color:"#f4f0e6",roughness:1}),2.85,_t+.01,1.85);It.rotation.y=.6,Y(2,_t,1.85),je(2.95,_t,1.2),Ie("Prop_Fish_Mackerel",2.15,_t+.03,1.15,{h:.08,ry:1.2,rz:Math.PI/2});let K=new St;K.position.set(j-.14,1.65,-2.3),K.rotation.y=-Math.PI/2,c.add(K),m(new Wt(.62,.62,.14,40),[d({map:p.stave,color:"#8a5a2a"}),d({map:h(vn(nh("target"),1,1)),roughness:.8}),f.beam],0,0,0,K).rotation.x=Math.PI/2,g(.08,1.8,.08,f.beam,0,-.2,-.1,K);let le=[];function he(){let L=Ee.Weapon_Dagger?Ee.Weapon_Dagger.scene.clone(!0):new St,J=new St;return L.scale.setScalar(.3),L.rotation.x=-Math.PI/2,L.position.z=.26,J.add(L),J}for(let[L,J]of[[.6,.32],[2.4,.2],[4.1,.42]]){let ee=he();ee.position.set(Math.cos(L)*J,Math.sin(L)*J,.05),K.add(ee),le.push(ee)}g(.04,.01,1.4,d({color:"#e8dcc0",roughness:1}),5,.01,-1.8).rotation.y=.5,st(4.75,-4.8,.7),Ie("Prop_Barrel",5.45,0,-4.55,{h:.5}),Ie("Prop_Barrel",4.05,0,-4.55,{h:.5}),Y(4.65,_t,-4.7),Y(4.95,_t,-4.95),Ie("Prop_Bottle_2",4.5,_t,-5.05,{h:.3}),je(4.85,_t,-4.55);for(let[L,J,ee,se]of[[4.4,2.6,"#5b1712",.006],[4.1,2.3,"#8a5a20",.008],[3.9,2.1,"#6b1a14",.009]]){let be=m(new Zt(L,J),d({color:ee,roughness:1}),.3,se,-.6);be.rotation.x=-Math.PI/2}let Z={};function we(L,J,ee=!0){let se=L.image,[be,Me]=zn(se.width,se.height);Me.drawImage(se,0,0);let Ze=Me.getImageData(0,0,se.width,se.height),Re=Ze.data;for(let Nt=0;Nt<Re.length;Nt+=4){let Pt=Re[Nt]/255,Ct=Re[Nt+1]/255,tt=Re[Nt+2]/255,Ot=Math.max(Pt,Ct,tt),yn=Math.min(Pt,Ct,tt),Qt=(Ot+yn)/2,xi=0,Ss=0;if(Ot!==yn){let ei=Ot-yn;Ss=Qt>.5?ei/(2-Ot-yn):ei/(Ot+yn),xi=Ot===Pt?(Ct-tt)/ei+(Ct<tt?6:0):Ot===Ct?(tt-Pt)/ei+2:(Pt-Ct)/ei+4,xi/=6}if(ee&&xi>.02&&xi<.12&&Ss>.15&&Ss<.75&&Qt>.25&&Qt<.85||Ss<.12)continue;xi=(xi+J)%1;let Sa=Qt<.5?Qt*(1+Ss):Qt+Ss-Qt*Ss,Xr=2*Qt-Sa,Wo=ei=>(ei=(ei+1)%1,ei<1/6?Xr+(Sa-Xr)*6*ei:ei<.5?Sa:ei<2/3?Xr+(Sa-Xr)*(2/3-ei)*6:Xr);Re[Nt]=Wo(xi+1/3)*255,Re[Nt+1]=Wo(xi)*255,Re[Nt+2]=Wo(xi-1/3)*255}Me.putImageData(Ze,0,0);let ht=h(new Mn(be));return ht.colorSpace=Ut,ht.flipY=L.flipY,ht.magFilter=L.magFilter,ht.minFilter=L.minFilter,ht}function Ve(L,J,ee,se,be,Me={}){let Ze=Ee[J];if(!Ze)return null;let Re=Si(Ze.scene);Ze.scene.updateMatrixWorld(!0);let ht=new kn().setFromObject(Ze.scene,!0),Nt=ht.max.y-ht.min.y||1;Re.scale.setScalar((Me.h||1.5)/Nt),Re.position.set(ee,Me.y||0,se),Re.rotation.y=be,c.add(Re);let Pt=null;Re.traverse(Qt=>{Qt.isMesh&&!Qt.isSkinnedMesh&&Me.noProp&&(Qt.visible=!1),Qt.isMesh&&(Qt.frustumCulled=!1,Qt.material=Qt.material.clone(),h(Qt.material),Qt.material.roughness=.75,Qt.material.metalness=0,Me.hue!=null&&Qt.material.map&&(Pt=Pt||we(Qt.material.map,Me.hue),Qt.material.map=Pt),Me.tint&&(Qt.material.color=new ze(Me.tint)))});let Ct=new oi(Re),tt={};for(let Qt of Ze.animations)tt[Qt.name]=Qt;let Ot=Ct.clipAction(tt.Idle||Ze.animations[0]);Ot.play(),Ot.time=Math.random()*2;let yn={id:L,root:Re,mixer:Ct,clips:tt,idle:Ot,current:null,height:Me.h||1.5,head:new D,modelH:Nt};return Z[L]=yn,Me.shadow!==!1&&ae(ee,se,.9,.75,.9),yn}function Ye(L,J,{loop:ee=!1}={}){let se=Z[L];if(!se||i)return!1;let be=se.clips[J];if(!be)return!1;let Me=se.mixer.clipAction(be);se.current&&se.current!==Me&&se.current.fadeOut(.2),Me.reset(),Me.setLoop(ee?Uo:fa,ee?1/0:1),Me.clampWhenFinished=!0,Me.fadeIn(.2).play(),se.idle.fadeOut(.2),se.current=Me;let Ze=Re=>{Re.action===Me&&(se.mixer.removeEventListener("finished",Ze),Me.fadeOut(.3),se.idle.reset().fadeIn(.3).play(),se.current=null)};return se.mixer.addEventListener("finished",Ze),!0}g(2.2,.32,.7,f.beam,.35,.16,-4.85),Ve("barkeep","Characters_Henry",.35,-4.75,0,{h:1.95,y:.32,hue:.55,shadow:!1,noProp:!0}),Ve("oldsailor","Characters_Captain_Barbarossa",-5.45,-.7,1,{h:1.6}),Ve("dicer","Characters_Henry",-2.7,1.15,.95,{h:1.5}),Ve("xo","Characters_Skeleton",3.35,.95,-.95,{h:1.45}),Ve("knife","Characters_Anne",6.35,-3.5,.95,{h:1.5}),Ve("patronA","Characters_Captain_Barbarossa",4,-4.4,Math.PI/2-.3,{h:1.45,hue:.3}),Ve("patronB","Characters_Skeleton",5.45,-4.45,-Math.PI/2+.3,{h:1.4,tint:"#b8d8c8"}),Ve("patronC","Characters_Henry",-2.6,-3.35,.3,{h:1.5,hue:.8,noProp:!0});let Se=["patronA","patronB","patronC","barkeep","dicer","xo","oldsailor"],bt=3,yt=(()=>{try{let L=o.getContext(),J=L.getExtension("WEBGL_debug_renderer_info");return String(J?L.getParameter(J.UNMASKED_RENDERER_WEBGL):L.getParameter(L.RENDERER))}catch{return""}})(),Ht=/swiftshader|llvmpipe|software/i.test(yt),sn=i||Ht?0:120,hn=h(new ln),ot=new Float32Array(sn*3),rn=Oi(77);for(let L=0;L<sn;L++)ot[L*3]=(rn()-.5)*14,ot[L*3+1]=.3+rn()*3.8,ot[L*3+2]=-5+rn()*8;hn.setAttribute("position",new on(ot,3)),c.add(new ds(hn,h(new Zi({size:.035,map:h(vn(ih("rgba(255,235,200,1)","rgba(255,220,160,.4)"),1,1)),transparent:!0,opacity:.5,depthWrite:!1,blending:wn}))));let S=h(new en({map:h(vn(yx(),1,1)),transparent:!0,depthWrite:!1,blending:wn,opacity:.55})),z=h(new en({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})),G=[{id:"barkeep",anchor:[.35,2.55,-4.7],ring:[.4,-3.3,1.6],hit:[[.4,1.5,-4.4],[1.6,2.2,1.4]],view:{pos:[.4,2,-.9],target:[.35,1.55,-4.6]}},{id:"oldsailor",anchor:[-5.35,2.25,-.7],ring:[-4.95,-.8,2.3],hit:[[-4.95,.9,-.8],[2.2,1.9,1.9]],view:{pos:[-3,2,2.6],target:[-5,1.05,-.85]}},{id:"dicer",anchor:[-2.7,2.15,1.15],ring:[-1.95,1.65,2.2],hit:[[-2.05,.85,1.6],[2.1,1.7,1.9]],view:{pos:[-.4,1.9,4.1],target:[-2.1,.95,1.4]}},{id:"xo",anchor:[3.35,2.1,.95],ring:[2.7,1.3,2.3],hit:[[2.8,.85,1.3],[2.1,1.8,1.9]],view:{pos:[1.5,1.95,4.3],target:[2.8,1,1.2]}},{id:"knife",anchor:[6.9,2.6,-2.9],ring:[6.3,-1.8,2.6],hit:[[6.4,1.3,-1.9],[3.2,2.6,2.4]],view:{pos:[2.6,2.05,1.6],target:[7,1.45,-2]}}],Q=[];for(let L of G){let J=m(new Zt(1,1),S.clone(),L.ring[0],.02,L.ring[1]);h(J.material),J.rotation.x=-Math.PI/2,J.scale.setScalar(L.ring[2]),J.renderOrder=2,L.ringMesh=J;let[[ee,se,be],[Me,Ze,Re]]=L.hit,ht=m(new zt(Me,Ze,Re),z,ee,se,be);ht.visible=!1,ht.userData.spot=L.id,Q.push(ht),L.anchorV=new D(...L.anchor)}let te={pos:new D(0,2.75,7.6),target:new D(0,1.3,-1.4)},q={pos:te.pos.clone(),target:te.target.clone(),yaw:0,from:null,to:null,t:1,dur:.9,focus:null,off:0,offGoal:.17};function De(){let L=r()/a();l.aspect=L,l.fov=yd(2*Math.atan(Math.tan(42*Math.PI/180)/L)*180/Math.PI,40,72),l.updateProjectionMatrix()}De();function He(L,J){q.from={pos:q.pos.clone(),target:q.target.clone()},q.to={pos:new D(...L.pos.isVector3?L.pos.toArray():L.pos),target:new D(...L.target.isVector3?L.target.toArray():L.target)},q.t=i?1:0,q.focus=J,i&&(q.pos.copy(q.to.pos),q.target.copy(q.to.target)),J&&(q.yaw=0)}let Ke=new Ur,mt=new ft;function lt(L,J){let ee=o.domElement.getBoundingClientRect();mt.set((L-ee.left)/ee.width*2-1,-((J-ee.top)/ee.height)*2+1),Ke.setFromCamera(mt,l);let se=Ke.intersectObjects(Q,!1)[0];return se?se.object.userData.spot:null}let ct=null,Bt=o.domElement;Bt.style.touchAction="none";let Tn=L=>{if(!ct){ct={id:L.pointerId,x:L.clientX,y:L.clientY,yaw:q.yaw,moved:!1};try{Bt.setPointerCapture(L.pointerId)}catch{}}},U=L=>{if(!ct||L.pointerId!==ct.id)return;let J=L.clientX-ct.x;Math.abs(J)+Math.abs(L.clientY-ct.y)>10&&(ct.moved=!0),ct.moved&&!q.focus&&(q.yaw=yd(ct.yaw-J/r()*1.1,-.42,.42))},V=L=>{var ee;if(!ct||L.pointerId!==ct.id)return;let J=ct;ct=null;try{Bt.releasePointerCapture(L.pointerId)}catch{}J.moved||(ee=e.onTap)==null||ee.call(e,lt(L.clientX,L.clientY))};Bt.addEventListener("pointerdown",Tn),Bt.addEventListener("pointermove",U),Bt.addEventListener("pointerup",V),Bt.addEventListener("pointercancel",V);let W=null,X=3.5;function _(){let L=he();c.add(L);let J=Math.random()*En,ee=.1+Math.random()*.35;W={k:L,start:new D(6.6,1.4,-3.25),end:new D(j-.14-.05,1.65+Math.sin(J)*ee,-2.3+Math.cos(J)*ee),t:0},Ye("knife","Sword")}let y=[];if(Ve("bard","Characters_Anne",-1.45,-3.55,.35,{h:1.45,hue:.12}),Z.bard){let L=Z.bard,J=.35,ee=new D(Math.sin(J),0,Math.cos(J)),se=new D(Math.cos(J),0,-Math.sin(J)),be=new St;be.userData.dynamic=!0,c.add(be),be.rotation.y=J,Ie("Weapon_Lute",0,0,0,{h:.7,parent:be,rx:0,ry:Math.PI/2,rz:-1.05});let Me=L.root.position.clone().addScaledVector(ee,.24).addScaledVector(se,-.05);Me.y=.78;let[Ze,Re]=zn(64,64);Re.font="bold 50px Georgia, serif",Re.textAlign="center",Re.textBaseline="middle",Re.shadowColor="rgba(0,0,0,.6)",Re.shadowBlur=4,Re.fillStyle="#ffd77a",Re.fillText("\u266A",32,34);let ht=h(new fn({map:h(vn(Ze,1,1)),transparent:!0,depthWrite:!1})),Nt=Array.from({length:4},(Pt,Ct)=>{let tt=new pn(ht.clone());return h(tt.material),tt.scale.setScalar(.16),c.add(tt),{m:tt,ph:Ct/4}});y.push((Pt,Ct)=>{let tt=Math.sin(Ct*7.5);L.root.rotation.y=J+Math.sin(Ct*1.1)*.07,L.root.position.y=Math.abs(Math.sin(Ct*2.2))*.02,be.position.copy(Me),be.position.y+=L.root.position.y,be.rotation.z=tt*.025,be.rotation.y=L.root.rotation.y;for(let Ot of Nt){let yn=(Ct*.32+Ot.ph)%1;Ot.m.position.set(Me.x+Math.sin(yn*6+Ot.ph*9)*.18+ee.x*.2,Me.y+.25+yn*1.3,Me.z+Math.cos(yn*5+Ot.ph*7)*.15),Ot.m.material.opacity=Math.sin(yn*Math.PI)*.9,Ot.m.scale.setScalar(.12+yn*.08)}})}if(Ve("server","Characters_Anne",1.6,-3.2,0,{h:1.42,hue:.62}),Z.server&&Z.server.clips.Walk){let L=Z.server,J=L.mixer.clipAction(L.clips.Walk);J.setLoop(Uo,1/0);let ee=[[1.6,-3.2],[3.4,-.6],[.6,.5],[-2.2,-.4],[-2.4,-2.2],[.2,-2.9]],se=0,be=2.5;y.push(Me=>{if(q.focus==="server")return;if(be>0){be-=Me,be<=0&&(L.idle.fadeOut(.25),J.reset().fadeIn(.25).play());return}let[Ze,Re]=ee[(se+1)%ee.length],ht=L.root.position,Nt=Ze-ht.x,Pt=Re-ht.z,Ct=Math.hypot(Nt,Pt),Ot=Math.atan2(Nt,Pt)-L.root.rotation.y;Ot=Math.atan2(Math.sin(Ot),Math.cos(Ot)),L.root.rotation.y+=Ot*Math.min(1,Me*6);let yn=Math.min(Ct,1.05*Me);Ct>1e-4&&(ht.x+=Nt/Ct*yn,ht.z+=Pt/Ct*yn),Ct<.05&&(se=(se+1)%ee.length,be=1.5+Math.random()*2.5,J.fadeOut(.25),L.idle.reset().fadeIn(.25).play(),Math.random()<.4&&Ye("server",Math.random()<.5?"Wave":"Yes"))})}{let L=h(new fn({map:h(vn(ih("rgba(255,230,160,1)","rgba(255,120,30,.5)"),1,1)),blending:wn,transparent:!0,depthWrite:!1})),J=Array.from({length:Ht?6:22},(ee,se)=>{let be=new pn(L);return be.scale.setScalar(.05),c.add(be),{m:be,ph:Math.random(),sp:.25+Math.random()*.35,sx:(Math.random()-.5)*.6}});y.push((ee,se)=>{for(let be of J){let Me=(se*be.sp+be.ph)%1;be.m.position.set($+.38+Math.sin(se*2+be.ph*20)*.08+be.sx*Me,.5+Me*1.7,ye+be.sx*.5),be.m.scale.setScalar(.06*(1-Me)+.01)}})}let T=L=>(L.userData.dynamic=!0,L);[Pe,...dt,...Q,...G.map(L=>L.ringMesh),K,...Object.values(Z).map(L=>L.root)].forEach(T);let k=new Map;function F(L){if(!L.isMeshStandardMaterial)return L;if(k.has(L))return k.get(L);let J=h(new Ir({map:L.map,color:L.color,emissive:L.emissive,emissiveMap:L.emissiveMap,emissiveIntensity:L.emissiveIntensity,transparent:L.transparent,opacity:L.opacity,side:L.side,alphaTest:L.alphaTest,depthWrite:L.depthWrite}));return k.set(L,J),J}function oe(){c.updateMatrixWorld(!0);let L=new Map;c.traverse(ee=>{var Me,Ze,Re,ht,Nt,Pt,Ct,tt,Ot,yn;if(!ee.isMesh||ee.isSkinnedMesh||Array.isArray(ee.material)||!ee.geometry)return;for(let Qt=ee;Qt;Qt=Qt.parent)if(Qt.userData.dynamic)return;let se=ee.material,be=[se.type,((Me=se.map)==null?void 0:Me.uuid)||"",((Re=(Ze=se.color)==null?void 0:Ze.getHexString)==null?void 0:Re.call(Ze))||"",((Nt=(ht=se.emissive)==null?void 0:ht.getHexString)==null?void 0:Nt.call(ht))||"",((Pt=se.emissiveMap)==null?void 0:Pt.uuid)||"",((Ct=se.emissiveIntensity)!=null?Ct:0).toFixed(2),se.transparent?1:0,((tt=se.opacity)!=null?tt:1).toFixed(2),((Ot=se.roughness)!=null?Ot:0).toFixed(2),((yn=se.metalness)!=null?yn:0).toFixed(2),se.side,se.blending,se.depthWrite?1:0,ee.renderOrder].join("|");L.has(be)||L.set(be,{mat:se,parts:[],order:ee.renderOrder}),L.get(be).parts.push(ee)});let J=0;for(let{mat:ee,parts:se,order:be}of L.values()){if(se.length<2)continue;let Me=[],Ze=[],Re=[];for(let Ct of se){let tt=Ct.geometry.index?Ct.geometry.toNonIndexed():Ct.geometry.clone();tt.applyMatrix4(Ct.matrixWorld);let Ot=tt.attributes.position.count;Me.push(tt.attributes.position.array),Ze.push(tt.attributes.normal?tt.attributes.normal.array:new Float32Array(Ot*3)),Re.push(tt.attributes.uv?tt.attributes.uv.array:new Float32Array(Ot*2)),tt.dispose()}let ht=Ct=>{let tt=Ct.reduce((Qt,xi)=>Qt+xi.length,0),Ot=new Float32Array(tt),yn=0;for(let Qt of Ct)Ot.set(Qt,yn),yn+=Qt.length;return Ot},Nt=h(new ln);Nt.setAttribute("position",new on(ht(Me),3)),Nt.setAttribute("normal",new on(ht(Ze),3)),Nt.setAttribute("uv",new on(ht(Re),2)),Nt.computeBoundingSphere();let Pt=new We(Nt,F(ee));Pt.renderOrder=be,Pt.matrixAutoUpdate=!1,c.add(Pt);for(let Ct of se)Ct.parent.remove(Ct);J+=se.length}return J}let ue=e.noMerge?0:oe(),ke=new ai;ke.background=new ze("#3a2210"),ke.add(new $n("#ffe2b8","#3a1d08",1.1));let ie=new An("#ffd7a0",2.2);ie.position.set(1.5,2.5,3),ke.add(ie);let N=new An("#ff9a4a",1.4);N.position.set(-2,1.5,-2),ke.add(N);let fe=new dn(24,1,.05,30),nt={};function Ft(L){if(nt[L])return nt[L];let J=Z[L];if(!J)return"";let ee=256,se=new Rn(ee,ee,{colorSpace:Ut}),be=Si(J.root);be.position.set(0,0,0),be.rotation.set(0,-.25,0),ke.add(be);let Me=new oi(be);J.clips.Idle&&(Me.clipAction(J.clips.Idle).play(),Me.update(.6)),be.updateMatrixWorld(!0);let Ze=J.height;fe.position.set(0,Ze*.78,Ze*1.25),fe.lookAt(0,Ze*.66,0),o.setRenderTarget(se),o.render(ke,fe),o.setRenderTarget(null),ke.remove(be),Me.stopAllAction();let Re=new Uint8Array(ee*ee*4);o.readRenderTargetPixels(se,0,0,ee,ee,Re),se.dispose();let[ht,Nt]=zn(ee,ee),Pt=Nt.createImageData(ee,ee);for(let Ct=0;Ct<ee;Ct++)Pt.data.set(Re.subarray((ee-1-Ct)*ee*4,(ee-Ct)*ee*4),Ct*ee*4);return Nt.putImageData(Pt,0,0),nt[L]=ht.toDataURL("image/png")}let ge=0,Qe=0,Ae=0,rt=!1,Dt=!1,kt=0,xt=0,Hi=!1,Sn=new D,Zn=new D,bi={n:0,ms:0};function Ys(L){var Ze,Re,ht,Nt;if(ge=requestAnimationFrame(Ys),!rt)return;let J=Qe?Math.min(.05,(L-Qe)/1e3):1/60,ee=xt?Math.min(.25,(L-xt)/1e3):1/60;if(Qe=L,xt=L,Ae+=J,kt++,q.t<1){q.t=Math.min(1,q.t+ee/q.dur);let Pt=dx(q.t);q.pos.lerpVectors(q.from.pos,q.to.pos,Pt),q.target.lerpVectors(q.from.target,q.to.target,Pt)}!ct&&!q.focus&&(q.yaw*=.985);let se=i?0:Math.sin(Ae*.35)*.04;Sn.copy(q.pos).sub(q.target);let be=q.yaw+(q.focus?0:se*.3);l.position.set(q.target.x+Sn.x*Math.cos(be)+Sn.z*Math.sin(be),q.pos.y+(i?0:Math.sin(Ae*.5)*.03),q.target.z-Sn.x*Math.sin(be)+Sn.z*Math.cos(be)),l.lookAt(q.target);let Me=q.focus?r()*q.offGoal:0;q.off+=(Me-q.off)*Math.min(1,ee*6),Math.abs(q.off-Me)<.5&&(q.off=Me),q.off>.5?l.setViewOffset(r(),a(),q.off,0,r(),a()):(Ze=l.view)!=null&&Ze.enabled&&l.clearViewOffset();for(let Pt of Object.values(Z))Pt.mixer.update(i?0:ee);if(!i){for(let tt of et){let Ot=.82+Math.sin(Ae*11+tt.seed)*.1+Math.sin(Ae*23.7+tt.seed*2)*.08;tt.f.scale.set(tt.s*.6*(2-Ot),tt.s*1.2*Ot,1),(Re=tt.g)==null||Re.scale.setScalar(tt.s*6*tt.glow*(.9+Ot*.15))}for(let tt of at)tt.l.intensity=tt.base*(1-tt.flick+tt.flick*(.6+.4*Math.sin(Ae*9+tt.seed)*Math.sin(Ae*3.3+tt.seed*1.7)));let Pt=Pe.geometry.attributes.position;for(let tt=0;tt<Pt.count;tt++){let Ot=Gt[tt*3],yn=Gt[tt*3+1];Pt.array[tt*3+2]=.02+Math.sin(Ot*3+Ae*1.2)*.018*(.45-yn)}Pt.needsUpdate=!0;for(let tt=0;tt<sn;tt++)ot[tt*3+1]+=Math.sin(Ae*.4+tt)*8e-4+6e-4,ot[tt*3]+=Math.cos(Ae*.3+tt*1.3)*9e-4,ot[tt*3+1]>4.2&&(ot[tt*3+1]=.3);hn.attributes.position.needsUpdate=!0;for(let tt of y)tt(J,Ae);if(bt-=J,bt<=0){let tt=Se[Math.floor(Math.random()*Se.length)];tt!==q.focus&&Ye(tt,["Yes","No","Wave","Punch"][Math.floor(Math.random()*4)]),bt=2.5+Math.random()*4}if((Ae+1.3)%6<J*1.5){for(let tt of dt)tt.rotation.y=Math.random()*En;(ht=e.onSound)==null||ht.call(e,"diceTable")}if(X-=J,X<=0&&!W&&q.focus!=="knife"&&(_(),X=5+Math.random()*4),W){W.t+=J/.34;let tt=Math.min(1,W.t);if(tt>.35?(W.k.position.lerpVectors(W.start,W.end,(tt-.35)/.65),W.k.position.y+=Math.sin((tt-.35)/.65*Math.PI)*.12,W.k.lookAt(Zn.set(j+2,W.k.position.y,W.k.position.z))):W.k.position.copy(W.start),tt>=1){(Nt=e.onSound)==null||Nt.call(e,"thunk");let Ot=le.length>6?le.shift():null;Ot&&Ot.parent.remove(Ot),K.worldToLocal(W.k.position),W.k.position.z=.05,W.k.rotation.set(0,0,0),K.add(W.k),le.push(W.k),W=null}}}for(let Pt of G)Pt.ringMesh.material.opacity=q.focus===Pt.id?.95:.36+(i?0:Math.sin(Ae*2.4+Pt.ring[0])*.14);if(o.render(c,l),bi.n++,bi.ms+=ee*1e3,e.adaptive!==!1&&bi.n>=90){let Pt=bi.ms/bi.n;bi.n=0,bi.ms=0;let Ct=o.getPixelRatio();Pt>38&&Ct>.76?(o.setPixelRatio(Math.max(.75,Ct-.25)),o.setSize(r(),a())):Pt<20&&Ct<Math.min(devicePixelRatio||1,1.5)-.01&&(o.setPixelRatio(Math.min(Math.min(devicePixelRatio||1,1.5),Ct+.25)),o.setSize(r(),a()))}if(e.onFrame){let Pt=r(),Ct=a(),tt=[];for(let Ot of G)Sn.copy(Ot.anchorV).project(l),tt.push({id:Ot.id,x:(Sn.x*.5+.5)*Pt,y:(-Sn.y*.5+.5)*Ct,visible:Sn.z<1&&Sn.z>-1});e.onFrame(tt)}}let ki=()=>{o.setSize(r(),a()),De()};addEventListener("resize",ki);let wi="ResizeObserver"in window?new ResizeObserver(ki):null;wi==null||wi.observe(s);let Ma=!1,Ea=L=>{var J;L.preventDefault(),!Ma&&(Dt=!0,rt=!1,(J=e.onContextLost)==null||J.call(e))};Bt.addEventListener("webglcontextlost",Ea),q.pos.copy(te.pos),q.target.copy(te.target),q.t=1,i||(q.pos.set(0,2.4,10.5),q.target.set(0,1.5,-1),He(te,null),q.dur=1.6,setTimeout(()=>q.dur=.9,1700)),o.compile(c,l);for(let L of["barkeep","oldsailor","dicer","xo","knife"])Ft(L);return rt=!0,ge=requestAnimationFrame(Ys),{spots:G.map(L=>L.id),_debug:{scene:c,renderer:o,npcs:Z,camera:l},get focused(){return q.focus},get moving(){return q.t<1},get frames(){return kt},get lost(){return Dt},get running(){return rt},info(){return{gpu:yt,software:Ht,heights:Object.fromEntries(Object.values(Z).map(L=>[L.id,+L.modelH.toFixed(3)])),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,textures:o.info.memory.textures,geometries:o.info.memory.geometries,lights:at.length,merged:ue,npcs:Object.keys(Z).length,models:Object.keys(Ee).filter(L=>Ee[L]).length,missing:ne,pixelRatio:o.getPixelRatio(),size:[r(),a()]}},portrait:Ft,react(L,J){let ee={Yes:"Yes",No:"No",Wave:"Wave",Punch:"Punch",Think:null,Sword:"Sword",Hit:"HitReact"};return ee[J]===null?!1:Ye(L,ee[J]||J)},sample(){o.render(c,l);let L=o.getContext(),J=L.drawingBufferWidth,ee=L.drawingBufferHeight,se=new Uint8Array(4),be=0,Me=0,Ze=0,Re=0;for(let ht=1;ht<24;ht++)for(let Nt=1;Nt<48;Nt++){L.readPixels(Math.floor(J*Nt/48),Math.floor(ee*ht/24),1,1,L.RGBA,L.UNSIGNED_BYTE,se);let Pt=(se[0]+se[1]+se[2])/3;Ze+=Pt,Re++,Pt<40&&be++,Pt>150&&Me++}return{mean:Ze/Re,lo:be,hi:Me,n:Re}},probe(L,J){var be,Me,Ze;let ee=o.domElement.getBoundingClientRect();mt.set((L-ee.left)/ee.width*2-1,-((J-ee.top)/ee.height)*2+1),Ke.setFromCamera(mt,l);let se=Ke.intersectObjects(c.children,!0).filter(Re=>Re.object.visible&&!Re.object.isSprite&&!Re.object.isPoints)[0];return se&&se.object.geometry.computeBoundingBox(),se?{bb:se.object.geometry.boundingBox?[se.object.geometry.boundingBox.min.toArray().map(Re=>+Re.toFixed(2)),se.object.geometry.boundingBox.max.toArray().map(Re=>+Re.toFixed(2))]:null,verts:se.object.geometry.attributes.position.count,map:!!se.object.material.map,p:se.point.toArray().map(Re=>+Re.toFixed(2)),color:(Ze=(Me=(be=se.object.material)==null?void 0:be.color)==null?void 0:Me.getHexString)==null?void 0:Ze.call(Me),name:(()=>{let Re=[];for(let ht=se.object;ht;ht=ht.parent)Re.push(ht.name||ht.type);return Re.join("<")})(),skinned:!!se.object.isSkinnedMesh}:null},hitPoint(L){let J=Q.find(ee=>ee.userData.spot===L);return J?(J.geometry.computeBoundingBox(),Sn.copy(J.position),Sn.y+=J.geometry.boundingBox.max.y*.6,Sn.project(l),{x:(Sn.x*.5+.5)*r(),y:(-Sn.y*.5+.5)*a()}):null},focus(L,J=.17){let ee=G.find(se=>se.id===L);return ee?(q.offGoal=J,He(ee.view,L),!0):!1},sit(L){let J=G.find(Me=>Me.id===L);if(!J)return!1;let ee=J.view.pos,se=J.view.target,be=L==="knife"?.35:.55;return q.offGoal=0,He({pos:[ee[0]+(se[0]-ee[0])*be,ee[1]+.35,ee[2]+(se[2]-ee[2])*be],target:se},L),!0},unfocus(){return q.focus?(He(te,null),!0):!1},pause(){rt=!1,Qe=0,xt=0,bi.n=0,bi.ms=0},resume(){Dt||(rt=!0,Qe=0,xt=0)},dispose(){var L,J;Ma=!0,rt=!1,cancelAnimationFrame(ge),removeEventListener("resize",ki),wi==null||wi.disconnect(),Bt.removeEventListener("webglcontextlost",Ea),Bt.removeEventListener("pointerdown",Tn),Bt.removeEventListener("pointermove",U),Bt.removeEventListener("pointerup",V),Bt.removeEventListener("pointercancel",V);for(let ee of Object.values(Z))ee.mixer.stopAllAction();c.traverse(ee=>{ee.geometry&&ee.geometry.dispose();let se=ee.material;se&&(Array.isArray(se)?se:[se]).forEach(be=>{var Me,Ze;(Me=be.map)==null||Me.dispose(),(Ze=be.emissiveMap)==null||Ze.dispose(),be.dispose()})});for(let ee of u)(L=ee.dispose)==null||L.call(ee);for(let ee of Object.values(Ee))ee==null||ee.scene.traverse(se=>{var be,Me,Ze,Re,ht;(be=se.geometry)==null||be.dispose(),(Ze=(Me=se.material)==null?void 0:Me.map)==null||Ze.dispose(),(ht=(Re=se.material)==null?void 0:Re.dispose)==null||ht.call(Re)});o.dispose(),(J=o.forceContextLoss)==null||J.call(o),Bt.remove()}}}window.PirateTavern3D={create:Sd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
