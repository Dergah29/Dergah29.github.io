(()=>{var ol="160";var wd=0,sh=1,Td=2;var Io=1,qs=2,ji=3,Di=0,zn=1,dn=2;var Li=0,Ii=1,An=2,rh=3,ah=4,Ad=5,Ls=100,Rd=101,Cd=102,oh=103,ch=104,Pd=200,Ld=201,Id=202,Dd=203,wc=204,Tc=205,Ud=206,Nd=207,Fd=208,Od=209,kd=210,Hd=211,Bd=212,zd=213,Gd=214,Vd=0,Wd=1,Xd=2,no=3,qd=4,jd=5,Yd=6,Kd=7,cl=0,Jd=1,Zd=2,hs=0,ll=1,hl=2,ul=3,Ai=4,Qd=5,dl=6,lh="attached",$d="detached",Wu=300,Er=301,Sr=302,Ac=303,Rc=304,Do=306,Gn=1e3,ai=1001,Os=1002,Nn=1003,io=1004;var ia=1005;var Fn=1006,fl=1007;var us=1008;var mi=1009,ef=1010,tf=1011,pl=1012,Xu=1013,cs=1014,Ki=1015,Qn=1016,qu=1017,ju=1018,Us=1020,nf=1021,Kn=1023,sf=1024,rf=1025,Ns=1026,wr=1027,af=1028,Yu=1029,of=1030,Ku=1031,Ju=1033,Xo=33776,qo=33777,jo=33778,Yo=33779,hh=35840,uh=35841,dh=35842,fh=35843,Zu=36196,ph=37492,mh=37496,gh=37808,bh=37809,xh=37810,_h=37811,vh=37812,yh=37813,Mh=37814,Eh=37815,Sh=37816,wh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Ko=36492,Ph=36494,Lh=36495,cf=36283,Ih=36284,Dh=36285,Uh=36286,pa=2200,Uo=2201,lf=2202,Tr=2300,ks=2301,Jo=2302,br=2400,xr=2401,so=2402,ml=2500,hf=2501,Qu=0,No=1,ma=2,$u=3e3,Fs=3001,uf=3200,df=3201,gl=0,ff=1,pi="",Dt="srgb",On="srgb-linear",bl="display-p3",Fo="display-p3-linear",ro="linear",xn="srgb",ao="rec709",oo="p3";var Js=7680;var Nh=519,pf=512,mf=513,gf=514,ed=515,bf=516,xf=517,_f=518,vf=519,Cc=35044;var Fh="300 es",Pc=1035,Ji=2e3,co=2001,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,sa=Math.PI/180,Ar=180/Math.PI;function Ti(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Yn(s,e,t){return Math.max(e,Math.min(t,s))}function xl(s,e){return(s%e+e)%e}function yf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Mf(s,e,t){return s!==e?(t-s)/(e-s):0}function ra(s,e,t){return(1-t)*s+t*e}function Ef(s,e,t,n){return ra(s,e,1-Math.exp(-t*n))}function Sf(s,e=1){return e-Math.abs(xl(s,e*2)-e)}function wf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rf(s,e){return s+Math.random()*(e-s)}function Cf(s){return s*(.5-Math.random())}function Pf(s){s!==void 0&&(Oh=s);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(s){return s*sa}function If(s){return s*Ar}function Lc(s){return(s&s-1)===0&&s!==0}function Df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*m,o*l);break;case"YXY":s.set(c*m,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ga={DEG2RAD:sa,RAD2DEG:Ar,generateUUID:Ti,clamp:Yn,euclideanModulo:xl,mapLinear:yf,inverseLerp:Mf,lerp:ra,damp:Ef,pingpong:Sf,smoothstep:wf,smootherstep:Tf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Pf,degToRad:Lf,radToDeg:If,isPowerOfTwo:Lc,ceilPowerOfTwo:Df,floorPowerOfTwo:lo,setQuaternionFromProperEuler:Uf,normalize:gn,denormalize:Pi},lt=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],x=i[0],p=i[3],f=i[6],M=i[1],v=i[4],A=i[7],N=i[2],P=i[5],S=i[8];return r[0]=a*x+o*M+c*N,r[3]=a*p+o*v+c*P,r[6]=a*f+o*A+c*S,r[1]=l*x+u*M+h*N,r[4]=l*p+u*v+h*P,r[7]=l*f+u*A+h*S,r[2]=d*x+m*M+g*N,r[5]=d*p+m*v+g*P,r[8]=d*f+m*A+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new Jt;function td(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){let s=ca("canvas");return s.style.display="block",s}var kh={};function aa(s){s in kh||(kh[s]=!0,console.warn(s))}var Hh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[On]:{transfer:ro,primaries:ao,toReference:s=>s,fromReference:s=>s},[Dt]:{transfer:xn,primaries:ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fo]:{transfer:ro,primaries:oo,toReference:s=>s.applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(Hh)},[bl]:{transfer:xn,primaries:oo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(Hh).convertLinearToSRGB()}},Ff=new Set([On,Fo]),rn={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ff.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=wa[e].toReference,i=wa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wa[s].primaries},getTransfer:function(s){return s===pi?ro:wa[s].transfer}};function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zs,ho=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=ca("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Of=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($o(i[a].image)):r.push($o(i[a]))}else r=$o(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $o(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,Xn=class s extends Zi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ai,i=ai,r=Fn,a=us,o=Kn,c=mi,l=s.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ti(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fs?Dt:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Fs:$u}set encoding(e){aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fs?Dt:pi}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Wu;Xn.DEFAULT_ANISOTROPY=1;var vn=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,A=(m+1)/2,N=(f+1)/2,P=(u+d)/4,S=(h+x)/4,q=(g+p)/4;return v>A&&v>N?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=P/n,r=S/n):A>N?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=P/i,r=q/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=S/r,i=q/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fs?Dt:pi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dc=class extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==m||u!==g){let p=1-o,f=c*d+l*m+u*g+h*x,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let N=Math.sqrt(v),P=Math.atan2(N,f*M);p=Math.sin(p*P)/N,o=Math.sin(o*P)/N}let A=o*M;if(c=c*p+d*A,l=l*p+m*A,u=u*p+g*A,h=h*p+x*A,p===1-o){let N=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=N,l*=N,u*=N,h*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new F,zh=new Dn,Vn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Aa.subVectors(this.max,jr),Qs.subVectors(e.a,jr),$s.subVectors(e.b,jr),er.subVectors(e.c,jr),is.subVectors($s,Qs),ss.subVectors(er,$s),Ts.subVectors(Qs,er);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ts.z,Ts.y,is.z,0,-is.x,ss.z,0,-ss.x,Ts.z,0,-Ts.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ts.y,Ts.x,0];return!tc(t,Qs,$s,er,Aa)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,Qs,$s,er,Aa))?!1:(Ra.crossVectors(is,ss),t=[Ra.x,Ra.y,Ra.z],tc(t,Qs,$s,er,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new F,new F,new F,new F,new F,new F,new F,new F],Ei=new F,Ta=new Vn,Qs=new F,$s=new F,er=new F,is=new F,ss=new F,Ts=new F,jr=new F,Aa=new F,Ra=new F,As=new F;function tc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){As.fromArray(s,r);let o=i.x*Math.abs(As.x)+i.y*Math.abs(As.y)+i.z*Math.abs(As.z),c=e.dot(As),l=t.dot(As),u=n.dot(As);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Hf=new Vn,Yr=new F,nc=new F,oi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(nc)),this.expandByPoint(Yr.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gi=new F,ic=new F,Ca=new F,rs=new F,sc=new F,Pa=new F,rc=new F,Hs=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ic.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=rs.dot(this.direction),c=-rs.dot(Ca),l=rs.lengthSq(),u=Math.abs(1-a*a),h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ic).addScaledVector(Ca,d),m}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,i,r){sc.subVectors(t,e),Pa.subVectors(n,e),rc.crossVectors(sc,Pa);let a=this.direction.dot(rc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rs.subVectors(this.origin,e);let c=o*this.direction.dot(Pa.crossVectors(rs,Pa));if(c<0)return null;let l=o*this.direction.dot(sc.cross(rs));if(l<0||c+l>a)return null;let u=-o*rs.dot(rc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,d,m,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,m,g,x,p)}set(e,t,n,i,r,a,o,c,l,u,h,d,m,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,m=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,m=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,zf)}lookAt(e,t,n){let i=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),as.crossVectors(n,si),as.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),as.crossVectors(n,si)),as.normalize(),La.crossVectors(si,as),i[0]=as.x,i[4]=La.x,i[8]=si.x,i[1]=as.y,i[5]=La.y,i[9]=si.y,i[2]=as.z,i[6]=La.z,i[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],M=n[3],v=n[7],A=n[11],N=n[15],P=i[0],S=i[4],q=i[8],T=i[12],D=i[1],oe=i[5],he=i[9],se=i[13],B=i[2],re=i[6],de=i[10],ge=i[14],pe=i[3],me=i[7],we=i[11],Pe=i[15];return r[0]=a*P+o*D+c*B+l*pe,r[4]=a*S+o*oe+c*re+l*me,r[8]=a*q+o*he+c*de+l*we,r[12]=a*T+o*se+c*ge+l*Pe,r[1]=u*P+h*D+d*B+m*pe,r[5]=u*S+h*oe+d*re+m*me,r[9]=u*q+h*he+d*de+m*we,r[13]=u*T+h*se+d*ge+m*Pe,r[2]=g*P+x*D+p*B+f*pe,r[6]=g*S+x*oe+p*re+f*me,r[10]=g*q+x*he+p*de+f*we,r[14]=g*T+x*se+p*ge+f*Pe,r[3]=M*P+v*D+A*B+N*pe,r[7]=M*S+v*oe+A*re+N*me,r[11]=M*q+v*he+A*de+N*we,r[15]=M*T+v*se+A*ge+N*Pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*m-n*c*m)+x*(+t*c*m-t*l*d+r*a*d-i*a*m+i*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],M=h*p*l-x*d*l+x*c*m-o*p*m-h*c*f+o*d*f,v=g*d*l-u*p*l-g*c*m+a*p*m+u*c*f-a*d*f,A=u*x*l-g*h*l+g*o*m-a*x*m-u*o*f+a*h*f,N=g*h*c-u*x*c-g*o*d+a*x*d+u*o*p-a*h*p,P=t*M+n*v+i*A+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/P;return e[0]=M*S,e[1]=(x*d*r-h*p*r-x*i*m+n*p*m+h*i*f-n*d*f)*S,e[2]=(o*p*r-x*c*r+x*i*l-n*p*l-o*i*f+n*c*f)*S,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*m-n*c*m)*S,e[4]=v*S,e[5]=(u*p*r-g*d*r+g*i*m-t*p*m-u*i*f+t*d*f)*S,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*f-t*c*f)*S,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*m+t*c*m)*S,e[8]=A*S,e[9]=(g*h*r-u*x*r-g*n*m+t*x*m+u*n*f-t*h*f)*S,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*f+t*o*f)*S,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*S,e[12]=N*S,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*p+t*h*p)*S,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*p-t*o*p)*S,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,x=a*u,p=a*h,f=o*h,M=c*l,v=c*u,A=c*h,N=n.x,P=n.y,S=n.z;return i[0]=(1-(x+f))*N,i[1]=(m+A)*N,i[2]=(g-v)*N,i[3]=0,i[4]=(m-A)*P,i[5]=(1-(d+f))*P,i[6]=(p+M)*P,i[7]=0,i[8]=(g+v)*S,i[9]=(p-M)*S,i[10]=(1-(d+x))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=tr.set(i[0],i[1],i[2]).length(),a=tr.set(i[4],i[5],i[6]).length(),o=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Si.copy(this);let l=1/r,u=1/a,h=1/o;return Si.elements[0]*=l,Si.elements[1]*=l,Si.elements[2]*=l,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=h,Si.elements[9]*=h,Si.elements[10]*=h,t.setFromRotationMatrix(Si),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ji){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),m,g;if(o===Ji)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===co)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ji){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*l,m=(n+i)*u,g,x;if(o===Ji)g=(a+r)*h,x=-2*h;else if(o===co)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new F,Si=new Kt,Bf=new F(0,0,0),zf=new F(1,1,1),as=new F,La=new F,si=new F,Gh=new Kt,Vh=new Dn,po=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};po.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gf=0,Wh=new F,nr=new Dn,Vi=new Kt,Ia=new F,Kr=new F,Vf=new F,Wf=new Dn,Xh=new F(1,0,0),qh=new F(0,1,0),jh=new F(0,0,1),Xf={type:"added"},qf={type:"removed"},yn=class s extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new po,n=new Dn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Jt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Kr,Ia,this.up):Vi.lookAt(Ia,Kr,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(Vi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yn.DEFAULT_UP=new F(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new F,Wi=new F,ac=new F,Xi=new F,ir=new F,sr=new F,Yh=new F,oc=new F,cc=new F,lc=new F,Da=!1,Ds=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wi.subVectors(i,t),Wi.subVectors(n,t),ac.subVectors(e,t);let a=wi.dot(wi),o=wi.dot(Wi),c=wi.dot(ac),l=Wi.dot(Wi),u=Wi.dot(ac),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getUV(e,t,n,i,r,a,o,c){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xi.x),c.addScaledVector(a,Xi.y),c.addScaledVector(o,Xi.z),c)}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),Wi.subVectors(e,t),wi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),wi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ir.subVectors(i,n),sr.subVectors(r,n),oc.subVectors(e,n);let c=ir.dot(oc),l=sr.dot(oc);if(c<=0&&l<=0)return t.copy(n);cc.subVectors(e,i);let u=ir.dot(cc),h=sr.dot(cc);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ir,a);lc.subVectors(e,r);let m=ir.dot(lc),g=sr.dot(lc);if(g>=0&&m<=g)return t.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(sr,o);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Yh.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Yh,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(ir,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function hc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rn.workingColorSpace){if(e=xl(e,1),t=Yn(t,0,1),n=Yn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return rn.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return rn.fromWorkingColorSpace(jn.copy(this),e),Math.round(Yn(jn.r*255,0,255))*65536+Math.round(Yn(jn.g*255,0,255))*256+Math.round(Yn(jn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(jn.copy(this),t);let n=jn.r,i=jn.g,r=jn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Dt){rn.fromWorkingColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,i=jn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Ua);let n=ra(os.h,Ua.h,t),i=ra(os.s,Ua.s,t),r=ra(os.l,Ua.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new Ne;Ne.NAMES=nd;var jf=0,$n=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Ii,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var In=new F,Na=new lt,ln=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}};var mo=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var sn=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Yf=0,fi=new Kt,uc=new yn,rr=new F,ri=new Vn,Jr=new Vn,Bn=new F,fn=class s extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?go:mo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bn.addVectors(ri.min,Jr.min),ri.expandByPoint(Bn),Bn.addVectors(ri.max,Jr.max),ri.expandByPoint(Bn)):(ri.expandByPoint(Jr.min),ri.expandByPoint(Jr.max))}ri.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Bn.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),Bn.add(rr)),i=Math.max(i,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<o;D++)l[D]=new F,u[D]=new F;let h=new F,d=new F,m=new F,g=new lt,x=new lt,p=new lt,f=new F,M=new F;function v(D,oe,he){h.fromArray(i,D*3),d.fromArray(i,oe*3),m.fromArray(i,he*3),g.fromArray(a,D*2),x.fromArray(a,oe*2),p.fromArray(a,he*2),d.sub(h),m.sub(h),x.sub(g),p.sub(g);let se=1/(x.x*p.y-p.x*x.y);isFinite(se)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(se),M.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(se),l[D].add(f),l[oe].add(f),l[he].add(f),u[D].add(M),u[oe].add(M),u[he].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let D=0,oe=A.length;D<oe;++D){let he=A[D],se=he.start,B=he.count;for(let re=se,de=se+B;re<de;re+=3)v(n[re+0],n[re+1],n[re+2])}let N=new F,P=new F,S=new F,q=new F;function T(D){S.fromArray(r,D*3),q.copy(S);let oe=l[D];N.copy(oe),N.sub(S.multiplyScalar(S.dot(oe))).normalize(),P.crossVectors(q,oe);let se=P.dot(u[D])<0?-1:1;c[D*4]=N.x,c[D*4+1]=N.y,c[D*4+2]=N.z,c[D*4+3]=se}for(let D=0,oe=A.length;D<oe;++D){let he=A[D],se=he.start,B=he.count;for(let re=se,de=se+B;re<de;re+=3)T(n[re+0]),T(n[re+1]),T(n[re+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new Kt,Rs=new Hs,Fa=new oi,Jh=new F,ar=new F,or=new F,cr=new F,dc=new F,Oa=new F,ka=new lt,Ha=new lt,Ba=new lt,Zh=new F,Qh=new F,$h=new F,za=new F,Ga=new F,ke=class extends yn{constructor(e=new fn,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(dc.fromBufferAttribute(h,e),a?Oa.addScaledVector(dc,u):Oa.addScaledVector(dc.sub(t),u))}t.add(Oa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Fa.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Fa,Jh)===null||Rs.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,N=v;A<N;A+=3){let P=o.getX(A),S=o.getX(A+1),q=o.getX(A+2);i=Va(this,f,e,n,l,u,h,P,S,q),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let M=o.getX(p),v=o.getX(p+1),A=o.getX(p+2);i=Va(this,a,e,n,l,u,h,M,v,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,N=v;A<N;A+=3){let P=A,S=A+1,q=A+2;i=Va(this,f,e,n,l,u,h,P,S,q),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let M=p,v=p+1,A=p+2;i=Va(this,a,e,n,l,u,h,M,v,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Kf(s,e,t,n,i,r,a,o){let c;if(e.side===zn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Di,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:s}}function Va(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ar),s.getVertexPosition(c,or),s.getVertexPosition(l,cr);let u=Kf(s,e,t,n,ar,or,cr,za);if(u){i&&(ka.fromBufferAttribute(i,o),Ha.fromBufferAttribute(i,c),Ba.fromBufferAttribute(i,l),u.uv=Ds.getInterpolation(za,ar,or,cr,ka,Ha,Ba,new lt)),r&&(ka.fromBufferAttribute(r,o),Ha.fromBufferAttribute(r,c),Ba.fromBufferAttribute(r,l),u.uv1=Ds.getInterpolation(za,ar,or,cr,ka,Ha,Ba,new lt),u.uv2=u.uv1),a&&(Zh.fromBufferAttribute(a,o),Qh.fromBufferAttribute(a,c),$h.fromBufferAttribute(a,l),u.normal=Ds.getInterpolation(za,ar,or,cr,Zh,Qh,$h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new F,materialIndex:0};Ds.getNormal(ar,or,cr,h.normal),u.face=h}return u}var Bt=class s extends fn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(h,2));function g(x,p,f,M,v,A,N,P,S,q,T){let D=A/S,oe=N/q,he=A/2,se=N/2,B=P/2,re=S+1,de=q+1,ge=0,pe=0,me=new F;for(let we=0;we<de;we++){let Pe=we*oe-se;for(let Ye=0;Ye<re;Ye++){let le=Ye*D-he;me[x]=le*M,me[p]=Pe*v,me[f]=B,l.push(me.x,me.y,me.z),me[x]=0,me[p]=0,me[f]=P>0?1:-1,u.push(me.x,me.y,me.z),h.push(Ye/S),h.push(1-we/q),ge+=1}}for(let we=0;we<q;we++)for(let Pe=0;Pe<S;Pe++){let Ye=d+Pe+re*we,le=d+Pe+re*(we+1),_e=d+(Pe+1)+re*(we+1),ne=d+(Pe+1)+re*we;c.push(Ye,le,ne),c.push(le,_e,ne),pe+=6}o.addGroup(m,pe,T),m+=pe,d+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zn(s){let e={};for(let t=0;t<s.length;t++){let n=Rr(s[t]);for(let i in n)e[i]=n[i]}return e}function Jf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function id(s){return s.getRenderTarget()===null?s.outputColorSpace:rn.workingColorSpace}var xi={clone:Rr,merge:Zn},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bn=class extends bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,hr=1,Uc=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bn(lr,hr,e,t);i.layers=this.layers,this.add(i);let r=new bn(lr,hr,e,t);r.layers=this.layers,this.add(r);let a=new bn(lr,hr,e,t);a.layers=this.layers,this.add(a);let o=new bn(lr,hr,e,t);o.layers=this.layers,this.add(o);let c=new bn(lr,hr,e,t);c.layers=this.layers,this.add(c);let l=new bn(lr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends Xn{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nc=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fs?Dt:pi),this.texture=new xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Li});r.uniforms.tEquirect.value=t;let a=new ke(i,r),o=t.minFilter;return t.minFilter===us&&(t.minFilter=Fn),new Uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},fc=new F,$f=new F,ep=new Jt,Yi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fc.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cs=new oi,Wa=new F,ha=class{constructor(e=new Yi,t=new Yi,n=new Yi,i=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],x=i[10],p=i[11],f=i[12],M=i[13],v=i[14],A=i[15];if(n[0].setComponents(c-r,d-l,p-m,A-f).normalize(),n[1].setComponents(c+r,d+l,p+m,A+f).normalize(),n[2].setComponents(c+a,d+u,p+g,A+M).normalize(),n[3].setComponents(c-a,d-u,p-g,A-M).normalize(),n[4].setComponents(c-o,d-h,p-x,A-v).normalize(),t===Ji)n[5].setComponents(c+o,d+h,p+x,A+v).normalize();else if(t===co)n[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Wa.x=i.normal.x>0?e.max.x:e.min.x,Wa.y=i.normal.y>0?e.max.y:e.min.y,Wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function tp(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,d=l.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){let d=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),m.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let f=g[x];t?s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}var Zt=class s extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],x=[],p=[];for(let f=0;f<u;f++){let M=f*d-a;for(let v=0;v<l;v++){let A=v*h-r;g.push(A,-M,0),x.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let v=M+l*f,A=M+l*(f+1),N=M+1+l*(f+1),P=M+1+l*f;m.push(v,A,P),m.push(A,N,P)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},np=`#ifdef USE_ALPHAHASH
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
}`,Yt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:vp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:Ep,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Kp,envmap_vertex:kp,fog_vertex:Hp,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:jp,lights_pars_begin:Yp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Qp,lights_phong_pars_fragment:$p,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:bm,morphtarget_vertex:xm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Em,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:km,shadowmap_vertex:Hm,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:jm,tonemapping_pars_fragment:Ym,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Zm,uv_pars_vertex:Qm,uv_vertex:$m,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:bg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:Eg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Ug},We={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Ci={basic:{uniforms:Zn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Zn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Zn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Zn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Zn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Zn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Zn([We.points,We.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Zn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Zn([We.common,We.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Zn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Zn([We.sprite,We.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Zn([We.common,We.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Zn([We.lights,We.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Ci.physical={uniforms:Zn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Xa={r:0,b:0,g:0};function Ng(s,e,t,n,i,r,a){let o=new Ne(0),c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Do)?(u===void 0&&(u=new ke(new Bt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Rr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,P,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=rn.getTransfer(v.colorSpace)!==xn,(h!==v||d!==v.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new Zt(2,2),new Mn({name:"BackgroundMaterial",uniforms:Rr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=rn.getTransfer(v.colorSpace)!==xn,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB(Xa,id(s)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:g}}function Fg(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,u=!1;function h(B,re,de,ge,pe){let me=!1;if(a){let we=x(ge,de,re);l!==we&&(l=we,m(l.object)),me=f(B,ge,de,pe),me&&M(B,ge,de,pe)}else{let we=re.wireframe===!0;(l.geometry!==ge.id||l.program!==de.id||l.wireframe!==we)&&(l.geometry=ge.id,l.program=de.id,l.wireframe=we,me=!0)}pe!==null&&t.update(pe,s.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,q(B,re,de,ge),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function x(B,re,de){let ge=de.wireframe===!0,pe=o[B.id];pe===void 0&&(pe={},o[B.id]=pe);let me=pe[re.id];me===void 0&&(me={},pe[re.id]=me);let we=me[ge];return we===void 0&&(we=p(d()),me[ge]=we),we}function p(B){let re=[],de=[],ge=[];for(let pe=0;pe<i;pe++)re[pe]=0,de[pe]=0,ge[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:de,attributeDivisors:ge,object:B,attributes:{},index:null}}function f(B,re,de,ge){let pe=l.attributes,me=re.attributes,we=0,Pe=de.getAttributes();for(let Ye in Pe)if(Pe[Ye].location>=0){let _e=pe[Ye],ne=me[Ye];if(ne===void 0&&(Ye==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),Ye==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),_e===void 0||_e.attribute!==ne||ne&&_e.data!==ne.data)return!0;we++}return l.attributesNum!==we||l.index!==ge}function M(B,re,de,ge){let pe={},me=re.attributes,we=0,Pe=de.getAttributes();for(let Ye in Pe)if(Pe[Ye].location>=0){let _e=me[Ye];_e===void 0&&(Ye==="instanceMatrix"&&B.instanceMatrix&&(_e=B.instanceMatrix),Ye==="instanceColor"&&B.instanceColor&&(_e=B.instanceColor));let ne={};ne.attribute=_e,_e&&_e.data&&(ne.data=_e.data),pe[Ye]=ne,we++}l.attributes=pe,l.attributesNum=we,l.index=ge}function v(){let B=l.newAttributes;for(let re=0,de=B.length;re<de;re++)B[re]=0}function A(B){N(B,0)}function N(B,re){let de=l.newAttributes,ge=l.enabledAttributes,pe=l.attributeDivisors;de[B]=1,ge[B]===0&&(s.enableVertexAttribArray(B),ge[B]=1),pe[B]!==re&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,re),pe[B]=re)}function P(){let B=l.newAttributes,re=l.enabledAttributes;for(let de=0,ge=re.length;de<ge;de++)re[de]!==B[de]&&(s.disableVertexAttribArray(de),re[de]=0)}function S(B,re,de,ge,pe,me,we){we===!0?s.vertexAttribIPointer(B,re,de,pe,me):s.vertexAttribPointer(B,re,de,ge,pe,me)}function q(B,re,de,ge){if(n.isWebGL2===!1&&(B.isInstancedMesh||ge.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let pe=ge.attributes,me=de.getAttributes(),we=re.defaultAttributeValues;for(let Pe in me){let Ye=me[Pe];if(Ye.location>=0){let le=pe[Pe];if(le===void 0&&(Pe==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),Pe==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),le!==void 0){let _e=le.normalized,ne=le.itemSize,Te=t.get(le);if(Te===void 0)continue;let ht=Te.buffer,Mt=Te.type,je=Te.bytesPerElement,Ie=n.isWebGL2===!0&&(Mt===s.INT||Mt===s.UNSIGNED_INT||le.gpuType===Xu);if(le.isInterleavedBufferAttribute){let Be=le.data,K=Be.stride,cn=le.offset;if(Be.isInstancedInterleavedBuffer){for(let ct=0;ct<Ye.locationSize;ct++)N(Ye.location+ct,Be.meshPerAttribute);B.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let ct=0;ct<Ye.locationSize;ct++)A(Ye.location+ct);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let ct=0;ct<Ye.locationSize;ct++)S(Ye.location+ct,ne/Ye.locationSize,Mt,_e,K*je,(cn+ne/Ye.locationSize*ct)*je,Ie)}else{if(le.isInstancedBufferAttribute){for(let Be=0;Be<Ye.locationSize;Be++)N(Ye.location+Be,le.meshPerAttribute);B.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<Ye.locationSize;Be++)A(Ye.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Be=0;Be<Ye.locationSize;Be++)S(Ye.location+Be,ne/Ye.locationSize,Mt,_e,ne*je,ne/Ye.locationSize*Be*je,Ie)}}else if(we!==void 0){let _e=we[Pe];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(Ye.location,_e);break;case 3:s.vertexAttrib3fv(Ye.location,_e);break;case 4:s.vertexAttrib4fv(Ye.location,_e);break;default:s.vertexAttrib1fv(Ye.location,_e)}}}}P()}function T(){he();for(let B in o){let re=o[B];for(let de in re){let ge=re[de];for(let pe in ge)g(ge[pe].object),delete ge[pe];delete re[de]}delete o[B]}}function D(B){if(o[B.id]===void 0)return;let re=o[B.id];for(let de in re){let ge=re[de];for(let pe in ge)g(ge[pe].object),delete ge[pe];delete re[de]}delete o[B.id]}function oe(B){for(let re in o){let de=o[re];if(de[B.id]===void 0)continue;let ge=de[B.id];for(let pe in ge)g(ge[pe].object),delete ge[pe];delete de[B.id]}}function he(){se(),u=!0,l!==c&&(l=c,m(l.object))}function se(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:he,resetDefaultState:se,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:oe,initAttributes:v,enableAttribute:A,disableUnusedAttributes:P}}function Og(s,e,t,n){let i=n.isWebGL2,r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function kg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||e.has("OES_texture_float"),N=v&&A,P=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:N,maxSamples:P}}function Hg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Yi,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{let M=r?0:n,v=M*4,A=f.clippingState||null;c.value=A,A=u(g,d,v,m);for(let N=0;N!==v;++N)A[N]=t[N];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let f=m+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,A=m;v!==x;++v,A+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Bg(s){let e=new WeakMap;function t(a,o){return o===Ac?a.mapping=Er:o===Rc&&(a.mapping=Sr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ac||o===Rc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Nc(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ds=class extends bo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_r=4,eu=[.125,.215,.35,.446,.526,.582],Is=20,pc=new ds,tu=new Ne,mc=null,gc=0,bc=0,Ps=(1+Math.sqrt(5))/2,ur=1/Ps,nu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ps,ur),new F(0,Ps,-ur),new F(ur,0,Ps),new F(-ur,0,Ps),new F(Ps,ur,0),new F(-Ps,ur,0)],_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,bc),e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Qn,format:Kn,colorSpace:On,depthBuffer:!1},i=iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Gg(r,e,t)}return i}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,i){let o=new bn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tu),u.toneMapping=hs,u.autoClear=!1;let m=new nn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new ke(new Bt,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(tu),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;qa(i,M*v,f>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Er||e.mapping===Sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nu[(i-1)%nu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ke(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Is-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Is;p>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Is}`);let f=[],M=0;for(let S=0;S<Is;++S){let q=S/x,T=Math.exp(-q*q/2);f.push(T),S===0?M+=T:S<p&&(M+=2*T)}for(let S=0;S<f.length;S++)f[S]=f[S]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let A=this._sizeLods[i],N=3*A*(i>v-_r?i-v+_r:0),P=4*(this._cubeSize-A);qa(t,N,P,3*A,2*A),c.setRenderTarget(t),c.render(h,pc)}};function zg(s){let e=[],t=[],n=[],i=s,r=s-_r+1+eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-_r?c=eu[a-s+_r-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,p=2,f=1,M=new Float32Array(x*g*m),v=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let P=0;P<m;P++){let S=P%3*2/3-1,q=P>2?0:-1,T=[S,q,0,S+2/3,q,0,S+2/3,q+1,0,S,q,0,S+2/3,q+1,0,S,q+1,0];M.set(T,x*g*P),v.set(d,p*g*P);let D=[P,P,P,P,P,P];A.set(D,f*g*P)}let N=new fn;N.setAttribute("position",new ln(M,x)),N.setAttribute("uv",new ln(v,p)),N.setAttribute("faceIndex",new ln(A,f)),e.push(N),i>_r&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function iu(s,e,t){let n=new Pn(s,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gg(s,e,t){let n=new Float32Array(Is),i=new F(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function su(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ru(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Vg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ac||c===Rc,u=c===Er||c===Sr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new _o(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new _o(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xg(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete i[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let m=h.morphAttributes;for(let g in m){let x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],s.ARRAY_BUFFER)}}function l(h){let d=[],m=h.index,g=h.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let v=0,A=M.length;v<A;v+=3){let N=M[v+0],P=M[v+1],S=M[v+2];d.push(N,P,P,S,S,N)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,A=M.length/3-1;v<A;v+=3){let N=v+0,P=v+1,S=v+2;d.push(N,P,P,S,S,N)}}else return;let p=new(td(d)?go:mo)(d,1);p.version=x;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function qg(s,e,t,n){let i=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){s.drawElements(r,g,o,m*c),t.update(g,r,1)}function h(m,g,x){if(x===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,x),t.update(g,r,x)}function d(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let f=0;for(let M=0;M<x;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function jg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yg(s,e){return s[0]-e[0]}function Kg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Jg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new vn,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(u);if(x===void 0||x.count!==g){let B=function(){he.dispose(),r.delete(u),u.removeEventListener("dispose",B)};x!==void 0&&x.texture.dispose();let M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],S=u.morphAttributes.color||[],q=0;M===!0&&(q=1),v===!0&&(q=2),A===!0&&(q=3);let T=u.attributes.position.count*q,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let oe=new Float32Array(T*D*4*g),he=new fo(oe,T,D,g);he.type=Ki,he.needsUpdate=!0;let se=q*4;for(let re=0;re<g;re++){let de=N[re],ge=P[re],pe=S[re],me=T*D*4*re;for(let we=0;we<de.count;we++){let Pe=we*se;M===!0&&(a.fromBufferAttribute(de,we),oe[me+Pe+0]=a.x,oe[me+Pe+1]=a.y,oe[me+Pe+2]=a.z,oe[me+Pe+3]=0),v===!0&&(a.fromBufferAttribute(ge,we),oe[me+Pe+4]=a.x,oe[me+Pe+5]=a.y,oe[me+Pe+6]=a.z,oe[me+Pe+7]=0),A===!0&&(a.fromBufferAttribute(pe,we),oe[me+Pe+8]=a.x,oe[me+Pe+9]=a.y,oe[me+Pe+10]=a.z,oe[me+Pe+11]=pe.itemSize===4?a.w:1)}}x={count:g,texture:he,size:new lt(T,D)},r.set(u,x),u.addEventListener("dispose",B)}let p=0;for(let M=0;M<d.length;M++)p+=d[M];let f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",f),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){let A=g[v];A[0]=v,A[1]=d[v]}g.sort(Kg);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Yg);let x=u.morphAttributes.position,p=u.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let A=o[v],N=A[0],P=A[1];N!==Number.MAX_SAFE_INTEGER&&P?(x&&u.getAttribute("morphTarget"+v)!==x[N]&&u.setAttribute("morphTarget"+v,x[N]),p&&u.getAttribute("morphNormal"+v)!==p[N]&&u.setAttribute("morphNormal"+v,p[N]),i[v]=P,f+=P):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}let M=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zg(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var vo=class extends Xn{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Ns,u!==Ns&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ns&&(n=cs),n===void 0&&u===wr&&(n=Us),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rd=new Xn,ad=new vo(1,1);ad.compareFunction=ed;var od=new fo,cd=new Dc,ld=new xo,au=[],ou=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function Fr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=au[i];if(r===void 0&&(r=new Float32Array(i),au[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function kn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Hn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oo(s,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2fv(this.addr,e),Hn(t,e)}}function e0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;s.uniform3fv(this.addr,e),Hn(t,e)}}function t0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4fv(this.addr,e),Hn(t,e)}}function n0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;hu.set(n),s.uniformMatrix2fv(this.addr,!1,hu),Hn(t,n)}}function i0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;lu.set(n),s.uniformMatrix3fv(this.addr,!1,lu),Hn(t,n)}}function s0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;cu.set(n),s.uniformMatrix4fv(this.addr,!1,cu),Hn(t,n)}}function r0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2iv(this.addr,e),Hn(t,e)}}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3iv(this.addr,e),Hn(t,e)}}function c0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4iv(this.addr,e),Hn(t,e)}}function l0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2uiv(this.addr,e),Hn(t,e)}}function u0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3uiv(this.addr,e),Hn(t,e)}}function d0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4uiv(this.addr,e),Hn(t,e)}}function f0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?ad:rd;t.setTexture2D(e||r,i)}function p0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cd,i)}function m0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ld,i)}function g0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||od,i)}function b0(s){switch(s){case 5126:return Qg;case 35664:return $g;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(s,e){s.uniform1fv(this.addr,e)}function _0(s,e){let t=Fr(e,this.size,2);s.uniform2fv(this.addr,t)}function v0(s,e){let t=Fr(e,this.size,3);s.uniform3fv(this.addr,t)}function y0(s,e){let t=Fr(e,this.size,4);s.uniform4fv(this.addr,t)}function M0(s,e){let t=Fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E0(s,e){let t=Fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S0(s,e){let t=Fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w0(s,e){s.uniform1iv(this.addr,e)}function T0(s,e){s.uniform2iv(this.addr,e)}function A0(s,e){s.uniform3iv(this.addr,e)}function R0(s,e){s.uniform4iv(this.addr,e)}function C0(s,e){s.uniform1uiv(this.addr,e)}function P0(s,e){s.uniform2uiv(this.addr,e)}function L0(s,e){s.uniform3uiv(this.addr,e)}function I0(s,e){s.uniform4uiv(this.addr,e)}function D0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,r[a])}function U0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cd,r[a])}function N0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ld,r[a])}function F0(s,e,t){let n=this.cache,i=e.length,r=Oo(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||od,r[a])}function O0(s){switch(s){case 5126:return x0;case 35664:return _0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return E0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}},Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function uu(s,e){s.seq.push(e),s.map[e.id]=e}function k0(s,e,t){let n=s.name,i=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),a=xc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){uu(t,l===void 0?new Fc(o,s,e):new Oc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new kc(o),uu(t,h)),t=h}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);k0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function du(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var H0=37297,B0=0;function z0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function G0(s){let e=rn.getPrimaries(rn.workingColorSpace),t=rn.getPrimaries(s),n;switch(e===t?n="":e===oo&&t===ao?n="LinearDisplayP3ToLinearSRGB":e===ao&&t===oo&&(n="LinearSRGBToLinearDisplayP3"),s){case On:case Fo:return[n,"LinearTransferOETF"];case Dt:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+z0(s.getShaderSource(e),a)}else return i}function V0(s,e){let t=G0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function W0(s,e){let t;switch(e){case ll:t="Linear";break;case hl:t="Reinhard";break;case ul:t="OptimizedCineon";break;case Ai:t="ACESFilmic";break;case dl:t="AgX";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function X0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function q0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vr).join(`
`)}function j0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function vr(s){return s!==""}function pu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(K0,Z0)}var J0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z0(s,e){let t=Yt[e];if(t===void 0){let n=J0.get(e);if(n!==void 0)t=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(s){return s.replace(Q0,$0)}function $0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qs?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Er:case Sr:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function sb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=eb(t),l=tb(t),u=nb(t),h=ib(t),d=sb(t),m=t.isWebGL2?"":X0(t),g=q0(t),x=j0(r),p=i.createProgram(),f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vr).join(`
`),f.length>0&&(f+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vr).join(`
`),M.length>0&&(M+=`
`)):(f=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),M=[m,bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hs?"#define TONE_MAPPING":"",t.toneMapping!==hs?Yt.tonemapping_pars_fragment:"",t.toneMapping!==hs?W0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Hc(a),a=pu(a,t),a=mu(a,t),o=Hc(o),o=pu(o,t),o=mu(o,t),a=gu(a),o=gu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=v+f+a,N=v+M+o,P=du(i,i.VERTEX_SHADER,A),S=du(i,i.FRAGMENT_SHADER,N);i.attachShader(p,P),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function q(he){if(s.debug.checkShaderErrors){let se=i.getProgramInfoLog(p).trim(),B=i.getShaderInfoLog(P).trim(),re=i.getShaderInfoLog(S).trim(),de=!0,ge=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,P,S);else{let pe=fu(i,P,"vertex"),me=fu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+pe+`
`+me)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(B===""||re==="")&&(ge=!1);ge&&(he.diagnostics={runnable:de,programLog:se,vertexShader:{log:B,prefix:f},fragmentShader:{log:re,prefix:M}})}i.deleteShader(P),i.deleteShader(S),T=new Mr(i,p),D=Y0(i,p)}let T;this.getUniforms=function(){return T===void 0&&q(this),T};let D;this.getAttributes=function(){return D===void 0&&q(this),D};let oe=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return oe===!1&&(oe=i.getProgramParameter(p,H0)),oe},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=S,this}var ab=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}};function ob(s,e,t,n,i,r,a){let o=new la,c=new Bc,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function p(T,D,oe,he,se){let B=he.fog,re=se.geometry,de=T.isMeshStandardMaterial?he.environment:null,ge=(T.isMeshStandardMaterial?t:e).get(T.envMap||de),pe=ge&&ge.mapping===Do?ge.image.height:null,me=g[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let we=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pe=we!==void 0?we.length:0,Ye=0;re.morphAttributes.position!==void 0&&(Ye=1),re.morphAttributes.normal!==void 0&&(Ye=2),re.morphAttributes.color!==void 0&&(Ye=3);let le,_e,ne,Te;if(me){let ae=Ci[me];le=ae.vertexShader,_e=ae.fragmentShader}else le=T.vertexShader,_e=T.fragmentShader,c.update(T),ne=c.getVertexShaderID(T),Te=c.getFragmentShaderID(T);let ht=s.getRenderTarget(),Mt=se.isInstancedMesh===!0,je=se.isBatchedMesh===!0,Ie=!!T.map,Be=!!T.matcap,K=!!ge,cn=!!T.aoMap,ct=!!T.lightMap,mt=!!T.bumpMap,tt=!!T.normalMap,vt=!!T.displacementMap,H=!!T.emissiveMap,L=!!T.metalnessMap,E=!!T.roughnessMap,Q=T.anisotropy>0,be=T.clearcoat>0,ye=T.iridescence>0,Ce=T.sheen>0,ze=T.transmission>0,Ge=Q&&!!T.anisotropyMap,et=be&&!!T.clearcoatMap,Qe=be&&!!T.clearcoatNormalMap,yt=be&&!!T.clearcoatRoughnessMap,Me=ye&&!!T.iridescenceMap,zt=ye&&!!T.iridescenceThicknessMap,Ut=Ce&&!!T.sheenColorMap,St=Ce&&!!T.sheenRoughnessMap,ut=!!T.specularMap,it=!!T.specularColorMap,At=!!T.specularIntensityMap,qt=ze&&!!T.transmissionMap,Gt=ze&&!!T.thicknessMap,gt=!!T.gradientMap,Fe=!!T.alphaMap,k=T.alphaTest>0,He=!!T.alphaHash,Re=!!T.extensions,pt=!!re.attributes.uv1,Xe=!!re.attributes.uv2,jt=!!re.attributes.uv3,Lt=hs;return T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Lt=s.toneMapping),{isWebGL2:u,shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:_e,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:je,instancing:Mt,instancingColor:Mt&&se.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:On,map:Ie,matcap:Be,envMap:K,envMapMode:K&&ge.mapping,envMapCubeUVHeight:pe,aoMap:cn,lightMap:ct,bumpMap:mt,normalMap:tt,displacementMap:d&&vt,emissiveMap:H,normalMapObjectSpace:tt&&T.normalMapType===ff,normalMapTangentSpace:tt&&T.normalMapType===gl,metalnessMap:L,roughnessMap:E,anisotropy:Q,anisotropyMap:Ge,clearcoat:be,clearcoatMap:et,clearcoatNormalMap:Qe,clearcoatRoughnessMap:yt,iridescence:ye,iridescenceMap:Me,iridescenceThicknessMap:zt,sheen:Ce,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:ut,specularColorMap:it,specularIntensityMap:At,transmission:ze,transmissionMap:qt,thicknessMap:Gt,gradientMap:gt,opaque:T.transparent===!1&&T.blending===Ii,alphaMap:Fe,alphaTest:k,alphaHash:He,combine:T.combine,mapUv:Ie&&x(T.map.channel),aoMapUv:cn&&x(T.aoMap.channel),lightMapUv:ct&&x(T.lightMap.channel),bumpMapUv:mt&&x(T.bumpMap.channel),normalMapUv:tt&&x(T.normalMap.channel),displacementMapUv:vt&&x(T.displacementMap.channel),emissiveMapUv:H&&x(T.emissiveMap.channel),metalnessMapUv:L&&x(T.metalnessMap.channel),roughnessMapUv:E&&x(T.roughnessMap.channel),anisotropyMapUv:Ge&&x(T.anisotropyMap.channel),clearcoatMapUv:et&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(T.sheenRoughnessMap.channel),specularMapUv:ut&&x(T.specularMap.channel),specularColorMapUv:it&&x(T.specularColorMap.channel),specularIntensityMapUv:At&&x(T.specularIntensityMap.channel),transmissionMapUv:qt&&x(T.transmissionMap.channel),thicknessMapUv:Gt&&x(T.thicknessMap.channel),alphaMapUv:Fe&&x(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(tt||Q),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vertexUv1s:pt,vertexUv2s:Xe,vertexUv3s:jt,pointsUvs:se.isPoints===!0&&!!re.attributes.uv&&(Ie||Fe),fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:se.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ye,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&oe.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ie&&T.map.isVideoTexture===!0&&rn.getTransfer(T.map.colorSpace)===xn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===dn,flipSided:T.side===zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Re&&T.extensions.derivatives===!0,extensionFragDepth:Re&&T.extensions.fragDepth===!0,extensionDrawBuffers:Re&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function f(T){let D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(let oe in T.defines)D.push(oe),D.push(T.defines[oe]);return T.isRawShaderMaterial===!1&&(M(D,T),v(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function M(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function v(T,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.matcap&&o.enable(4),D.envMap&&o.enable(5),D.normalMapObjectSpace&&o.enable(6),D.normalMapTangentSpace&&o.enable(7),D.clearcoat&&o.enable(8),D.iridescence&&o.enable(9),D.alphaTest&&o.enable(10),D.vertexColors&&o.enable(11),D.vertexAlphas&&o.enable(12),D.vertexUv1s&&o.enable(13),D.vertexUv2s&&o.enable(14),D.vertexUv3s&&o.enable(15),D.vertexTangents&&o.enable(16),D.anisotropy&&o.enable(17),D.alphaHash&&o.enable(18),D.batching&&o.enable(19),T.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.useLegacyLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let D=g[T.type],oe;if(D){let he=Ci[D];oe=xi.clone(he.uniforms)}else oe=T.uniforms;return oe}function N(T,D){let oe;for(let he=0,se=l.length;he<se;he++){let B=l[he];if(B.cacheKey===D){oe=B,++oe.usedTimes;break}}return oe===void 0&&(oe=new rb(s,D,T,r),l.push(oe)),oe}function P(T){if(--T.usedTimes===0){let D=l.indexOf(T);l[D]=l[l.length-1],l.pop(),T.destroy()}}function S(T){c.remove(T)}function q(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:N,releaseProgram:P,releaseShaderCache:S,programs:l,dispose:q}}function cb(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _u(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,x,p){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function o(h,d,m,g,x,p){let f=a(h,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(h,d,m,g,x,p){let f=a(h,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||lb),n.length>1&&n.sort(d||xu),i.length>1&&i.sort(d||xu)}function u(){for(let h=e,d=s.length;h<d;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function hb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new _u,s.set(n,[a])):i>=r.length?(a=new _u,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ub(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ne};break;case"SpotLight":t={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function db(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fb=0;function pb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mb(s,e){let t=new ub,n=db(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);let r=new F,a=new Kt,o=new Kt;function c(u,h){let d=0,m=0,g=0;for(let he=0;he<9;he++)i.probe[he].set(0,0,0);let x=0,p=0,f=0,M=0,v=0,A=0,N=0,P=0,S=0,q=0,T=0;u.sort(pb);let D=h===!0?Math.PI:1;for(let he=0,se=u.length;he<se;he++){let B=u[he],re=B.color,de=B.intensity,ge=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=re.r*de*D,m+=re.g*de*D,g+=re.b*de*D;else if(B.isLightProbe){for(let me=0;me<9;me++)i.probe[me].addScaledVector(B.sh.coefficients[me],de);T++}else if(B.isDirectionalLight){let me=t.get(B);if(me.color.copy(B.color).multiplyScalar(B.intensity*D),B.castShadow){let we=B.shadow,Pe=n.get(B);Pe.shadowBias=we.bias,Pe.shadowNormalBias=we.normalBias,Pe.shadowRadius=we.radius,Pe.shadowMapSize=we.mapSize,i.directionalShadow[x]=Pe,i.directionalShadowMap[x]=pe,i.directionalShadowMatrix[x]=B.shadow.matrix,A++}i.directional[x]=me,x++}else if(B.isSpotLight){let me=t.get(B);me.position.setFromMatrixPosition(B.matrixWorld),me.color.copy(re).multiplyScalar(de*D),me.distance=ge,me.coneCos=Math.cos(B.angle),me.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),me.decay=B.decay,i.spot[f]=me;let we=B.shadow;if(B.map&&(i.spotLightMap[S]=B.map,S++,we.updateMatrices(B),B.castShadow&&q++),i.spotLightMatrix[f]=we.matrix,B.castShadow){let Pe=n.get(B);Pe.shadowBias=we.bias,Pe.shadowNormalBias=we.normalBias,Pe.shadowRadius=we.radius,Pe.shadowMapSize=we.mapSize,i.spotShadow[f]=Pe,i.spotShadowMap[f]=pe,P++}f++}else if(B.isRectAreaLight){let me=t.get(B);me.color.copy(re).multiplyScalar(de),me.halfWidth.set(B.width*.5,0,0),me.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=me,M++}else if(B.isPointLight){let me=t.get(B);if(me.color.copy(B.color).multiplyScalar(B.intensity*D),me.distance=B.distance,me.decay=B.decay,B.castShadow){let we=B.shadow,Pe=n.get(B);Pe.shadowBias=we.bias,Pe.shadowNormalBias=we.normalBias,Pe.shadowRadius=we.radius,Pe.shadowMapSize=we.mapSize,Pe.shadowCameraNear=we.camera.near,Pe.shadowCameraFar=we.camera.far,i.pointShadow[p]=Pe,i.pointShadowMap[p]=pe,i.pointShadowMatrix[p]=B.shadow.matrix,N++}i.point[p]=me,p++}else if(B.isHemisphereLight){let me=t.get(B);me.skyColor.copy(B.color).multiplyScalar(de*D),me.groundColor.copy(B.groundColor).multiplyScalar(de*D),i.hemi[v]=me,v++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let oe=i.hash;(oe.directionalLength!==x||oe.pointLength!==p||oe.spotLength!==f||oe.rectAreaLength!==M||oe.hemiLength!==v||oe.numDirectionalShadows!==A||oe.numPointShadows!==N||oe.numSpotShadows!==P||oe.numSpotMaps!==S||oe.numLightProbes!==T)&&(i.directional.length=x,i.spot.length=f,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=P+S-q,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=T,oe.directionalLength=x,oe.pointLength=p,oe.spotLength=f,oe.rectAreaLength=M,oe.hemiLength=v,oe.numDirectionalShadows=A,oe.numPointShadows=N,oe.numSpotShadows=P,oe.numSpotMaps=S,oe.numLightProbes=T,i.version=fb++)}function l(u,h){let d=0,m=0,g=0,x=0,p=0,f=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){let A=u[M];if(A.isDirectionalLight){let N=i.directional[d];N.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(f),d++}else if(A.isSpotLight){let N=i.spot[g];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(f),N.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let N=i.rectArea[x];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let N=i.point[m];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let N=i.hemi[p];N.direction.setFromMatrixPosition(A.matrixWorld),N.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function vu(s,e){let t=new mb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gb(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new vu(s,e),t.set(r,[c])):a>=o.length?(c=new vu(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Gc=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bb=`void main() {
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
}`;function _b(s,e,t){let n=new ha,i=new lt,r=new lt,a=new vn,o=new Gc({depthPacking:df}),c=new Vc,l={},u=t.maxTextureSize,h={[Di]:zn,[zn]:Di,[dn]:dn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:bb,fragmentShader:xb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(P,S,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let T=s.getRenderTarget(),D=s.getActiveCubeFace(),oe=s.getActiveMipmapLevel(),he=s.state;he.setBlending(Li),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);let se=f!==ji&&this.type===ji,B=f===ji&&this.type!==ji;for(let re=0,de=P.length;re<de;re++){let ge=P[re],pe=ge.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;i.copy(pe.mapSize);let me=pe.getFrameExtents();if(i.multiply(me),r.copy(pe.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/me.x),i.x=r.x*me.x,pe.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/me.y),i.y=r.y*me.y,pe.mapSize.y=r.y)),pe.map===null||se===!0||B===!0){let Pe=this.type!==ji?{minFilter:Nn,magFilter:Nn}:{};pe.map!==null&&pe.map.dispose(),pe.map=new Pn(i.x,i.y,Pe),pe.map.texture.name=ge.name+".shadowMap",pe.camera.updateProjectionMatrix()}s.setRenderTarget(pe.map),s.clear();let we=pe.getViewportCount();for(let Pe=0;Pe<we;Pe++){let Ye=pe.getViewport(Pe);a.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),he.viewport(a),pe.updateMatrices(ge,Pe),n=pe.getFrustum(),A(S,q,pe.camera,ge,this.type)}pe.isPointLightShadow!==!0&&this.type===ji&&M(pe,q),pe.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(T,D,oe)};function M(P,S){let q=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pn(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(S,null,q,d,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(S,null,q,m,x,null)}function v(P,S,q,T){let D=null,oe=q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(oe!==void 0)D=oe;else if(D=q.isPointLight===!0?c:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let he=D.uuid,se=S.uuid,B=l[he];B===void 0&&(B={},l[he]=B);let re=B[se];re===void 0&&(re=D.clone(),B[se]=re,S.addEventListener("dispose",N)),D=re}if(D.visible=S.visible,D.wireframe=S.wireframe,T===ji?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:h[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let he=s.properties.get(D);he.light=q}return D}function A(P,S,q,T,D){if(P.visible===!1)return;if(P.layers.test(S.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&D===ji)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld);let se=e.update(P),B=P.material;if(Array.isArray(B)){let re=se.groups;for(let de=0,ge=re.length;de<ge;de++){let pe=re[de],me=B[pe.materialIndex];if(me&&me.visible){let we=v(P,me,T,D);P.onBeforeShadow(s,P,S,q,se,we,pe),s.renderBufferDirect(q,null,se,we,P,pe),P.onAfterShadow(s,P,S,q,se,we,pe)}}}else if(B.visible){let re=v(P,B,T,D);P.onBeforeShadow(s,P,S,q,se,re,null),s.renderBufferDirect(q,null,se,re,P,null),P.onAfterShadow(s,P,S,q,se,re,null)}}let he=P.children;for(let se=0,B=he.length;se<B;se++)A(he[se],S,q,T,D)}function N(P){P.target.removeEventListener("dispose",N);for(let q in l){let T=l[q],D=P.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function vb(s,e,t){let n=t.isWebGL2;function i(){let k=!1,He=new vn,Re=null,pt=new vn(0,0,0,0);return{setMask:function(Xe){Re!==Xe&&!k&&(s.colorMask(Xe,Xe,Xe,Xe),Re=Xe)},setLocked:function(Xe){k=Xe},setClear:function(Xe,jt,Lt,j,ae){ae===!0&&(Xe*=j,jt*=j,Lt*=j),He.set(Xe,jt,Lt,j),pt.equals(He)===!1&&(s.clearColor(Xe,jt,Lt,j),pt.copy(He))},reset:function(){k=!1,Re=null,pt.set(-1,0,0,0)}}}function r(){let k=!1,He=null,Re=null,pt=null;return{setTest:function(Xe){Xe?je(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Xe){He!==Xe&&!k&&(s.depthMask(Xe),He=Xe)},setFunc:function(Xe){if(Re!==Xe){switch(Xe){case Vd:s.depthFunc(s.NEVER);break;case Wd:s.depthFunc(s.ALWAYS);break;case Xd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case qd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Yd:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=Xe}},setLocked:function(Xe){k=Xe},setClear:function(Xe){pt!==Xe&&(s.clearDepth(Xe),pt=Xe)},reset:function(){k=!1,He=null,Re=null,pt=null}}}function a(){let k=!1,He=null,Re=null,pt=null,Xe=null,jt=null,Lt=null,j=null,ae=null;return{setTest:function(ce){k||(ce?je(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(ce){He!==ce&&!k&&(s.stencilMask(ce),He=ce)},setFunc:function(ce,Z,Ee){(Re!==ce||pt!==Z||Xe!==Ee)&&(s.stencilFunc(ce,Z,Ee),Re=ce,pt=Z,Xe=Ee)},setOp:function(ce,Z,Ee){(jt!==ce||Lt!==Z||j!==Ee)&&(s.stencilOp(ce,Z,Ee),jt=ce,Lt=Z,j=Ee)},setLocked:function(ce){k=ce},setClear:function(ce){ae!==ce&&(s.clearStencil(ce),ae=ce)},reset:function(){k=!1,He=null,Re=null,pt=null,Xe=null,jt=null,Lt=null,j=null,ae=null}}}let o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap,d={},m={},g=new WeakMap,x=[],p=null,f=!1,M=null,v=null,A=null,N=null,P=null,S=null,q=null,T=new Ne(0,0,0),D=0,oe=!1,he=null,se=null,B=null,re=null,de=null,ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pe=!1,me=0,we=s.getParameter(s.VERSION);we.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(we)[1]),pe=me>=1):we.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(we)[1]),pe=me>=2);let Pe=null,Ye={},le=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),ne=new vn().fromArray(le),Te=new vn().fromArray(_e);function ht(k,He,Re,pt){let Xe=new Uint8Array(4),jt=s.createTexture();s.bindTexture(k,jt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<Re;Lt++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(He,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Xe):s.texImage2D(He+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Xe);return jt}let Mt={};Mt[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Mt[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),je(s.DEPTH_TEST),c.setFunc(no),H(!1),L(sh),je(s.CULL_FACE),tt(Li);function je(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function Ie(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function Be(k,He){return m[k]!==He?(s.bindFramebuffer(k,He),m[k]=He,n&&(k===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=He),k===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=He)),!0):!1}function K(k,He){let Re=x,pt=!1;if(k)if(Re=g.get(He),Re===void 0&&(Re=[],g.set(He,Re)),k.isWebGLMultipleRenderTargets){let Xe=k.texture;if(Re.length!==Xe.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Lt=Xe.length;jt<Lt;jt++)Re[jt]=s.COLOR_ATTACHMENT0+jt;Re.length=Xe.length,pt=!0}}else Re[0]!==s.COLOR_ATTACHMENT0&&(Re[0]=s.COLOR_ATTACHMENT0,pt=!0);else Re[0]!==s.BACK&&(Re[0]=s.BACK,pt=!0);pt&&(t.isWebGL2?s.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function cn(k){return p!==k?(s.useProgram(k),p=k,!0):!1}let ct={[Ls]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Cd]:s.FUNC_REVERSE_SUBTRACT};if(n)ct[oh]=s.MIN,ct[ch]=s.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(ct[oh]=k.MIN_EXT,ct[ch]=k.MAX_EXT)}let mt={[Pd]:s.ZERO,[Ld]:s.ONE,[Id]:s.SRC_COLOR,[wc]:s.SRC_ALPHA,[kd]:s.SRC_ALPHA_SATURATE,[Fd]:s.DST_COLOR,[Ud]:s.DST_ALPHA,[Dd]:s.ONE_MINUS_SRC_COLOR,[Tc]:s.ONE_MINUS_SRC_ALPHA,[Od]:s.ONE_MINUS_DST_COLOR,[Nd]:s.ONE_MINUS_DST_ALPHA,[Hd]:s.CONSTANT_COLOR,[Bd]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[Gd]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(k,He,Re,pt,Xe,jt,Lt,j,ae,ce){if(k===Li){f===!0&&(Ie(s.BLEND),f=!1);return}if(f===!1&&(je(s.BLEND),f=!0),k!==Ad){if(k!==M||ce!==oe){if((v!==Ls||P!==Ls)&&(s.blendEquation(s.FUNC_ADD),v=Ls,P=Ls),ce)switch(k){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case An:s.blendFunc(s.ONE,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case An:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,N=null,S=null,q=null,T.set(0,0,0),D=0,M=k,oe=ce}return}Xe=Xe||He,jt=jt||Re,Lt=Lt||pt,(He!==v||Xe!==P)&&(s.blendEquationSeparate(ct[He],ct[Xe]),v=He,P=Xe),(Re!==A||pt!==N||jt!==S||Lt!==q)&&(s.blendFuncSeparate(mt[Re],mt[pt],mt[jt],mt[Lt]),A=Re,N=pt,S=jt,q=Lt),(j.equals(T)===!1||ae!==D)&&(s.blendColor(j.r,j.g,j.b,ae),T.copy(j),D=ae),M=k,oe=!1}function vt(k,He){k.side===dn?Ie(s.CULL_FACE):je(s.CULL_FACE);let Re=k.side===zn;He&&(Re=!Re),H(Re),k.blending===Ii&&k.transparent===!1?tt(Li):tt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),o.setMask(k.colorWrite);let pt=k.stencilWrite;l.setTest(pt),pt&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?je(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function H(k){he!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),he=k)}function L(k){k!==wd?(je(s.CULL_FACE),k!==se&&(k===sh?s.cullFace(s.BACK):k===Td?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),se=k}function E(k){k!==B&&(pe&&s.lineWidth(k),B=k)}function Q(k,He,Re){k?(je(s.POLYGON_OFFSET_FILL),(re!==He||de!==Re)&&(s.polygonOffset(He,Re),re=He,de=Re)):Ie(s.POLYGON_OFFSET_FILL)}function be(k){k?je(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function ye(k){k===void 0&&(k=s.TEXTURE0+ge-1),Pe!==k&&(s.activeTexture(k),Pe=k)}function Ce(k,He,Re){Re===void 0&&(Pe===null?Re=s.TEXTURE0+ge-1:Re=Pe);let pt=Ye[Re];pt===void 0&&(pt={type:void 0,texture:void 0},Ye[Re]=pt),(pt.type!==k||pt.texture!==He)&&(Pe!==Re&&(s.activeTexture(Re),Pe=Re),s.bindTexture(k,He||Mt[k]),pt.type=k,pt.texture=He)}function ze(){let k=Ye[Pe];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(k){ne.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ne.copy(k))}function qt(k){Te.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function Gt(k,He){let Re=h.get(He);Re===void 0&&(Re=new WeakMap,h.set(He,Re));let pt=Re.get(k);pt===void 0&&(pt=s.getUniformBlockIndex(He,k.name),Re.set(k,pt))}function gt(k,He){let pt=h.get(He).get(k);u.get(He)!==pt&&(s.uniformBlockBinding(He,pt,k.__bindingPointIndex),u.set(He,pt))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Pe=null,Ye={},m={},g=new WeakMap,x=[],p=null,f=!1,M=null,v=null,A=null,N=null,P=null,S=null,q=null,T=new Ne(0,0,0),D=0,oe=!1,he=null,se=null,B=null,re=null,de=null,ne.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:je,disable:Ie,bindFramebuffer:Be,drawBuffers:K,useProgram:cn,setBlending:tt,setMaterial:vt,setFlipSided:H,setCullFace:L,setLineWidth:E,setPolygonOffset:Q,setScissorTest:be,activeTexture:ye,bindTexture:Ce,unbindTexture:ze,compressedTexImage2D:Ge,compressedTexImage3D:et,texImage2D:ut,texImage3D:it,updateUBOMapping:Gt,uniformBlockBinding:gt,texStorage2D:Ut,texStorage3D:St,texSubImage2D:Qe,texSubImage3D:yt,compressedTexSubImage2D:Me,compressedTexSubImage3D:zt,scissor:At,viewport:qt,reset:Fe}}function yb(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return m?new OffscreenCanvas(L,E):ca("canvas")}function x(L,E,Q,be){let ye=1;if((L.width>be||L.height>be)&&(ye=be/Math.max(L.width,L.height)),ye<1||E===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){let Ce=E?lo:Math.floor,ze=Ce(ye*L.width),Ge=Ce(ye*L.height);h===void 0&&(h=g(ze,Ge));let et=Q?g(ze,Ge):h;return et.width=ze,et.height=Ge,et.getContext("2d").drawImage(L,0,0,ze,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ze+"x"+Ge+")."),et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function p(L){return Lc(L.width)&&Lc(L.height)}function f(L){return o?!1:L.wrapS!==ai||L.wrapT!==ai||L.minFilter!==Nn&&L.minFilter!==Fn}function M(L,E){return L.generateMipmaps&&E&&L.minFilter!==Nn&&L.minFilter!==Fn}function v(L){s.generateMipmap(L)}function A(L,E,Q,be,ye=!1){if(o===!1)return E;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ce=E;if(E===s.RED&&(Q===s.FLOAT&&(Ce=s.R32F),Q===s.HALF_FLOAT&&(Ce=s.R16F),Q===s.UNSIGNED_BYTE&&(Ce=s.R8)),E===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(Ce=s.R8UI),Q===s.UNSIGNED_SHORT&&(Ce=s.R16UI),Q===s.UNSIGNED_INT&&(Ce=s.R32UI),Q===s.BYTE&&(Ce=s.R8I),Q===s.SHORT&&(Ce=s.R16I),Q===s.INT&&(Ce=s.R32I)),E===s.RG&&(Q===s.FLOAT&&(Ce=s.RG32F),Q===s.HALF_FLOAT&&(Ce=s.RG16F),Q===s.UNSIGNED_BYTE&&(Ce=s.RG8)),E===s.RGBA){let ze=ye?ro:rn.getTransfer(be);Q===s.FLOAT&&(Ce=s.RGBA32F),Q===s.HALF_FLOAT&&(Ce=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(Ce=ze===xn?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(Ce=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(Ce=s.RGB5_A1)}return(Ce===s.R16F||Ce===s.R32F||Ce===s.RG16F||Ce===s.RG32F||Ce===s.RGBA16F||Ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function N(L,E,Q){return M(L,Q)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){return L===Nn||L===io||L===ia?s.NEAREST:s.LINEAR}function S(L){let E=L.target;E.removeEventListener("dispose",S),T(E),E.isVideoTexture&&u.delete(E)}function q(L){let E=L.target;E.removeEventListener("dispose",q),oe(E)}function T(L){let E=n.get(L);if(E.__webglInit===void 0)return;let Q=L.source,be=d.get(Q);if(be){let ye=be[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(L),Object.keys(be).length===0&&d.delete(Q)}n.remove(L)}function D(L){let E=n.get(L);s.deleteTexture(E.__webglTexture);let Q=L.source,be=d.get(Q);delete be[E.__cacheKey],a.memory.textures--}function oe(L){let E=L.texture,Q=n.get(L),be=n.get(E);if(be.__webglTexture!==void 0&&(s.deleteTexture(be.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(Q.__webglFramebuffer[ye]))for(let Ce=0;Ce<Q.__webglFramebuffer[ye].length;Ce++)s.deleteFramebuffer(Q.__webglFramebuffer[ye][Ce]);else s.deleteFramebuffer(Q.__webglFramebuffer[ye]);Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer[ye])}else{if(Array.isArray(Q.__webglFramebuffer))for(let ye=0;ye<Q.__webglFramebuffer.length;ye++)s.deleteFramebuffer(Q.__webglFramebuffer[ye]);else s.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ye=0;ye<Q.__webglColorRenderbuffer.length;ye++)Q.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(Q.__webglColorRenderbuffer[ye]);Q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ye=0,Ce=E.length;ye<Ce;ye++){let ze=n.get(E[ye]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),a.memory.textures--),n.remove(E[ye])}n.remove(E),n.remove(L)}let he=0;function se(){he=0}function B(){let L=he;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),he+=1,L}function re(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function de(L,E){let Q=n.get(L);if(L.isVideoTexture&&vt(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){let be=L.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Q,L,E);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+E)}function ge(L,E){let Q=n.get(L);if(L.version>0&&Q.__version!==L.version){ne(Q,L,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+E)}function pe(L,E){let Q=n.get(L);if(L.version>0&&Q.__version!==L.version){ne(Q,L,E);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+E)}function me(L,E){let Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Te(Q,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+E)}let we={[Gn]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Os]:s.MIRRORED_REPEAT},Pe={[Nn]:s.NEAREST,[io]:s.NEAREST_MIPMAP_NEAREST,[ia]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},Ye={[pf]:s.NEVER,[vf]:s.ALWAYS,[mf]:s.LESS,[ed]:s.LEQUAL,[gf]:s.EQUAL,[_f]:s.GEQUAL,[bf]:s.GREATER,[xf]:s.NOTEQUAL};function le(L,E,Q){if(Q?(s.texParameteri(L,s.TEXTURE_WRAP_S,we[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,we[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,we[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Pe[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Pe[E.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==ai||E.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,P(E.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==Nn&&E.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let be=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Nn||E.minFilter!==ia&&E.minFilter!==us||E.type===Ki&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Qn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(L,be.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function _e(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",S));let be=E.source,ye=d.get(be);ye===void 0&&(ye={},d.set(be,ye));let Ce=re(E);if(Ce!==L.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),ye[Ce].usedTimes++;let ze=ye[L.__cacheKey];ze!==void 0&&(ye[L.__cacheKey].usedTimes--,ze.usedTimes===0&&D(E)),L.__cacheKey=Ce,L.__webglTexture=ye[Ce].texture}return Q}function ne(L,E,Q){let be=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(be=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(be=s.TEXTURE_3D);let ye=_e(L,E),Ce=E.source;t.bindTexture(be,L.__webglTexture,s.TEXTURE0+Q);let ze=n.get(Ce);if(Ce.version!==ze.__version||ye===!0){t.activeTexture(s.TEXTURE0+Q);let Ge=rn.getPrimaries(rn.workingColorSpace),et=E.colorSpace===pi?null:rn.getPrimaries(E.colorSpace),Qe=E.colorSpace===pi||Ge===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let yt=f(E)&&p(E.image)===!1,Me=x(E.image,yt,!1,i.maxTextureSize);Me=H(E,Me);let zt=p(Me)||o,Ut=r.convert(E.format,E.colorSpace),St=r.convert(E.type),ut=A(E.internalFormat,Ut,St,E.colorSpace,E.isVideoTexture);le(be,E,zt);let it,At=E.mipmaps,qt=o&&E.isVideoTexture!==!0&&ut!==Zu,Gt=ze.__version===void 0||ye===!0,gt=N(E,Me,zt);if(E.isDepthTexture)ut=s.DEPTH_COMPONENT,o?E.type===Ki?ut=s.DEPTH_COMPONENT32F:E.type===cs?ut=s.DEPTH_COMPONENT24:E.type===Us?ut=s.DEPTH24_STENCIL8:ut=s.DEPTH_COMPONENT16:E.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ns&&ut===s.DEPTH_COMPONENT&&E.type!==pl&&E.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=cs,St=r.convert(E.type)),E.format===wr&&ut===s.DEPTH_COMPONENT&&(ut=s.DEPTH_STENCIL,E.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Us,St=r.convert(E.type))),Gt&&(qt?t.texStorage2D(s.TEXTURE_2D,1,ut,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,ut,Me.width,Me.height,0,Ut,St,null));else if(E.isDataTexture)if(At.length>0&&zt){qt&&Gt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,At[0].width,At[0].height);for(let Fe=0,k=At.length;Fe<k;Fe++)it=At[Fe],qt?t.texSubImage2D(s.TEXTURE_2D,Fe,0,0,it.width,it.height,Ut,St,it.data):t.texImage2D(s.TEXTURE_2D,Fe,ut,it.width,it.height,0,Ut,St,it.data);E.generateMipmaps=!1}else qt?(Gt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,Me.width,Me.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Ut,St,Me.data)):t.texImage2D(s.TEXTURE_2D,0,ut,Me.width,Me.height,0,Ut,St,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&Gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,gt,ut,At[0].width,At[0].height,Me.depth);for(let Fe=0,k=At.length;Fe<k;Fe++)it=At[Fe],E.format!==Kn?Ut!==null?qt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Fe,0,0,0,it.width,it.height,Me.depth,Ut,it.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Fe,ut,it.width,it.height,Me.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Fe,0,0,0,it.width,it.height,Me.depth,Ut,St,it.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Fe,ut,it.width,it.height,Me.depth,0,Ut,St,it.data)}else{qt&&Gt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,At[0].width,At[0].height);for(let Fe=0,k=At.length;Fe<k;Fe++)it=At[Fe],E.format!==Kn?Ut!==null?qt?t.compressedTexSubImage2D(s.TEXTURE_2D,Fe,0,0,it.width,it.height,Ut,it.data):t.compressedTexImage2D(s.TEXTURE_2D,Fe,ut,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage2D(s.TEXTURE_2D,Fe,0,0,it.width,it.height,Ut,St,it.data):t.texImage2D(s.TEXTURE_2D,Fe,ut,it.width,it.height,0,Ut,St,it.data)}else if(E.isDataArrayTexture)qt?(Gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,gt,ut,Me.width,Me.height,Me.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ut,St,Me.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,Me.width,Me.height,Me.depth,0,Ut,St,Me.data);else if(E.isData3DTexture)qt?(Gt&&t.texStorage3D(s.TEXTURE_3D,gt,ut,Me.width,Me.height,Me.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ut,St,Me.data)):t.texImage3D(s.TEXTURE_3D,0,ut,Me.width,Me.height,Me.depth,0,Ut,St,Me.data);else if(E.isFramebufferTexture){if(Gt)if(qt)t.texStorage2D(s.TEXTURE_2D,gt,ut,Me.width,Me.height);else{let Fe=Me.width,k=Me.height;for(let He=0;He<gt;He++)t.texImage2D(s.TEXTURE_2D,He,ut,Fe,k,0,Ut,St,null),Fe>>=1,k>>=1}}else if(At.length>0&&zt){qt&&Gt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,At[0].width,At[0].height);for(let Fe=0,k=At.length;Fe<k;Fe++)it=At[Fe],qt?t.texSubImage2D(s.TEXTURE_2D,Fe,0,0,Ut,St,it):t.texImage2D(s.TEXTURE_2D,Fe,ut,Ut,St,it);E.generateMipmaps=!1}else qt?(Gt&&t.texStorage2D(s.TEXTURE_2D,gt,ut,Me.width,Me.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,St,Me)):t.texImage2D(s.TEXTURE_2D,0,ut,Ut,St,Me);M(E,zt)&&v(be),ze.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Te(L,E,Q){if(E.image.length!==6)return;let be=_e(L,E),ye=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);let Ce=n.get(ye);if(ye.version!==Ce.__version||be===!0){t.activeTexture(s.TEXTURE0+Q);let ze=rn.getPrimaries(rn.workingColorSpace),Ge=E.colorSpace===pi?null:rn.getPrimaries(E.colorSpace),et=E.colorSpace===pi||ze===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let Fe=0;Fe<6;Fe++)!Qe&&!yt?Me[Fe]=x(E.image[Fe],!1,!0,i.maxCubemapSize):Me[Fe]=yt?E.image[Fe].image:E.image[Fe],Me[Fe]=H(E,Me[Fe]);let zt=Me[0],Ut=p(zt)||o,St=r.convert(E.format,E.colorSpace),ut=r.convert(E.type),it=A(E.internalFormat,St,ut,E.colorSpace),At=o&&E.isVideoTexture!==!0,qt=Ce.__version===void 0||be===!0,Gt=N(E,zt,Ut);le(s.TEXTURE_CUBE_MAP,E,Ut);let gt;if(Qe){At&&qt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,it,zt.width,zt.height);for(let Fe=0;Fe<6;Fe++){gt=Me[Fe].mipmaps;for(let k=0;k<gt.length;k++){let He=gt[k];E.format!==Kn?St!==null?At?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k,0,0,He.width,He.height,St,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k,it,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k,0,0,He.width,He.height,St,ut,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k,it,He.width,He.height,0,St,ut,He.data)}}}else{gt=E.mipmaps,At&&qt&&(gt.length>0&&Gt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,it,Me[0].width,Me[0].height));for(let Fe=0;Fe<6;Fe++)if(yt){At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Me[Fe].width,Me[Fe].height,St,ut,Me[Fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,it,Me[Fe].width,Me[Fe].height,0,St,ut,Me[Fe].data);for(let k=0;k<gt.length;k++){let Re=gt[k].image[Fe].image;At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k+1,0,0,Re.width,Re.height,St,ut,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k+1,it,Re.width,Re.height,0,St,ut,Re.data)}}else{At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,St,ut,Me[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,it,St,ut,Me[Fe]);for(let k=0;k<gt.length;k++){let He=gt[k];At?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k+1,0,0,St,ut,He.image[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,k+1,it,St,ut,He.image[Fe])}}}M(E,Ut)&&v(s.TEXTURE_CUBE_MAP),Ce.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ht(L,E,Q,be,ye,Ce){let ze=r.convert(Q.format,Q.colorSpace),Ge=r.convert(Q.type),et=A(Q.internalFormat,ze,Ge,Q.colorSpace);if(!n.get(E).__hasExternalTextures){let yt=Math.max(1,E.width>>Ce),Me=Math.max(1,E.height>>Ce);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,et,yt,Me,E.depth,0,ze,Ge,null):t.texImage2D(ye,Ce,et,yt,Me,0,ze,Ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),tt(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,ye,n.get(Q).__webglTexture,0,mt(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,be,ye,n.get(Q).__webglTexture,Ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(L,E,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let be=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Q||tt(E)){let ye=E.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ki?be=s.DEPTH_COMPONENT32F:ye.type===cs&&(be=s.DEPTH_COMPONENT24));let Ce=mt(E);tt(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,be,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,be,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,be,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){let be=mt(E);Q&&tt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,s.DEPTH24_STENCIL8,E.width,E.height):tt(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{let be=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ye=0;ye<be.length;ye++){let Ce=be[ye],ze=r.convert(Ce.format,Ce.colorSpace),Ge=r.convert(Ce.type),et=A(Ce.internalFormat,ze,Ge,Ce.colorSpace),Qe=mt(E);Q&&tt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,et,E.width,E.height):tt(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);let be=n.get(E.depthTexture).__webglTexture,ye=mt(E);if(E.depthTexture.format===Ns)tt(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0);else if(E.depthTexture.format===wr)tt(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Ie(L){let E=n.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");je(E.__webglFramebuffer,L)}else if(Q){E.__webglDepthbuffer=[];for(let be=0;be<6;be++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[be]),E.__webglDepthbuffer[be]=s.createRenderbuffer(),Mt(E.__webglDepthbuffer[be],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Mt(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(L,E,Q){let be=n.get(L);E!==void 0&&ht(be.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ie(L)}function K(L){let E=L.texture,Q=n.get(L),be=n.get(E);L.addEventListener("dispose",q),L.isWebGLMultipleRenderTargets!==!0&&(be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture()),be.__version=E.version,a.memory.textures++);let ye=L.isWebGLCubeRenderTarget===!0,Ce=L.isWebGLMultipleRenderTargets===!0,ze=p(L)||o;if(ye){Q.__webglFramebuffer=[];for(let Ge=0;Ge<6;Ge++)if(o&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ge]=[];for(let et=0;et<E.mipmaps.length;et++)Q.__webglFramebuffer[Ge][et]=s.createFramebuffer()}else Q.__webglFramebuffer[Ge]=s.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ge=0;Ge<E.mipmaps.length;Ge++)Q.__webglFramebuffer[Ge]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ce)if(i.drawBuffers){let Ge=L.texture;for(let et=0,Qe=Ge.length;et<Qe;et++){let yt=n.get(Ge[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&tt(L)===!1){let Ge=Ce?E:[E];Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let et=0;et<Ge.length;et++){let Qe=Ge[et];Q.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[et]);let yt=r.convert(Qe.format,Qe.colorSpace),Me=r.convert(Qe.type),zt=A(Qe.internalFormat,yt,Me,Qe.colorSpace,L.isXRRenderTarget===!0),Ut=mt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,zt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,Q.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),le(s.TEXTURE_CUBE_MAP,E,ze);for(let Ge=0;Ge<6;Ge++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)ht(Q.__webglFramebuffer[Ge][et],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,et);else ht(Q.__webglFramebuffer[Ge],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0);M(E,ze)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){let Ge=L.texture;for(let et=0,Qe=Ge.length;et<Qe;et++){let yt=Ge[et],Me=n.get(yt);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),le(s.TEXTURE_2D,yt,ze),ht(Q.__webglFramebuffer,L,yt,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,0),M(yt,ze)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ge=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Ge=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ge,be.__webglTexture),le(Ge,E,ze),o&&E.mipmaps&&E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)ht(Q.__webglFramebuffer[et],L,E,s.COLOR_ATTACHMENT0,Ge,et);else ht(Q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Ge,0);M(E,ze)&&v(Ge),t.unbindTexture()}L.depthBuffer&&Ie(L)}function cn(L){let E=p(L)||o,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let be=0,ye=Q.length;be<ye;be++){let Ce=Q[be];if(M(Ce,E)){let ze=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=n.get(Ce).__webglTexture;t.bindTexture(ze,Ge),v(ze),t.unbindTexture()}}}function ct(L){if(o&&L.samples>0&&tt(L)===!1){let E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Q=L.width,be=L.height,ye=s.COLOR_BUFFER_BIT,Ce=[],ze=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=n.get(L),et=L.isWebGLMultipleRenderTargets===!0;if(et)for(let Qe=0;Qe<E.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){Ce.push(s.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&Ce.push(ze);let yt=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(yt===!1&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),et&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Qe]),yt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ze])),et){let Me=n.get(E[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,Q,be,0,0,Q,be,ye,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let Qe=0;Qe<E.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Qe]);let yt=n.get(E[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,yt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function mt(L){return Math.min(i.maxSamples,L.samples)}function tt(L){let E=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(L){let E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function H(L,E){let Q=L.colorSpace,be=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Pc||Q!==On&&Q!==pi&&(rn.getTransfer(Q)===xn?o===!1?e.has("EXT_sRGB")===!0&&be===Kn?(L.format=Pc,L.minFilter=Fn,L.generateMipmaps=!1):E=ho.sRGBToLinear(E):(be!==Kn||ye!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=ge,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Be,this.setupRenderTarget=K,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=tt}function Mb(s,e,t){let n=t.isWebGL2;function i(r,a=pi){let o,c=rn.getTransfer(a);if(r===mi)return s.UNSIGNED_BYTE;if(r===qu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ju)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ef)return s.BYTE;if(r===tf)return s.SHORT;if(r===pl)return s.UNSIGNED_SHORT;if(r===Xu)return s.INT;if(r===cs)return s.UNSIGNED_INT;if(r===Ki)return s.FLOAT;if(r===Qn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nf)return s.ALPHA;if(r===Kn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===rf)return s.LUMINANCE_ALPHA;if(r===Ns)return s.DEPTH_COMPONENT;if(r===wr)return s.DEPTH_STENCIL;if(r===Pc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===af)return s.RED;if(r===Yu)return s.RED_INTEGER;if(r===of)return s.RG;if(r===Ku)return s.RG_INTEGER;if(r===Ju)return s.RGBA_INTEGER;if(r===Xo||r===qo||r===jo||r===Yo)if(c===xn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===uh||r===dh||r===fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ph||r===mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ph)return c===xn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===bh||r===xh||r===_h||r===vh||r===yh||r===Mh||r===Eh||r===Sh||r===wh||r===Th||r===Ah||r===Rh||r===Ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ko||r===Ph||r===Lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ko)return c===xn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ph)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===Ih||r===Dh||r===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Wc=class extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_t=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eb={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xc=class extends Zi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null,x=t.getContextAttributes(),p=null,f=null,M=[],v=[],A=new lt,N=null,P=new bn;P.layers.enable(1),P.viewport=new vn;let S=new bn;S.layers.enable(2),S.viewport=new vn;let q=[P,S],T=new Wc;T.layers.enable(1),T.layers.enable(2);let D=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let _e=M[le];return _e===void 0&&(_e=new oa,M[le]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(le){let _e=M[le];return _e===void 0&&(_e=new oa,M[le]=_e),_e.getGripSpace()},this.getHand=function(le){let _e=M[le];return _e===void 0&&(_e=new oa,M[le]=_e),_e.getHandSpace()};function he(le){let _e=v.indexOf(le.inputSource);if(_e===-1)return;let ne=M[_e];ne!==void 0&&(ne.update(le.inputSource,le.frame,l||a),ne.dispatchEvent({type:le.type,data:le.inputSource}))}function se(){i.removeEventListener("select",he),i.removeEventListener("selectstart",he),i.removeEventListener("selectend",he),i.removeEventListener("squeeze",he),i.removeEventListener("squeezestart",he),i.removeEventListener("squeezeend",he),i.removeEventListener("end",se),i.removeEventListener("inputsourceschange",B);for(let le=0;le<M.length;le++){let _e=v[le];_e!==null&&(v[le]=null,M[le].disconnect(_e))}D=null,oe=null,e.setRenderTarget(p),m=null,d=null,h=null,i=null,f=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(le){if(i=le,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",he),i.addEventListener("selectstart",he),i.addEventListener("selectend",he),i.addEventListener("squeeze",he),i.addEventListener("squeezestart",he),i.addEventListener("squeezeend",he),i.addEventListener("end",se),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let _e={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Pn(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let _e=null,ne=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=x.stencil?wr:Ns,ne=x.stencil?Us:cs);let ht={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ht),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Pn(d.textureWidth,d.textureHeight,{format:Kn,type:mi,depthTexture:new vo(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Mt=e.properties.get(f);Mt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(le){for(let _e=0;_e<le.removed.length;_e++){let ne=le.removed[_e],Te=v.indexOf(ne);Te>=0&&(v[Te]=null,M[Te].disconnect(ne))}for(let _e=0;_e<le.added.length;_e++){let ne=le.added[_e],Te=v.indexOf(ne);if(Te===-1){for(let Mt=0;Mt<M.length;Mt++)if(Mt>=v.length){v.push(ne),Te=Mt;break}else if(v[Mt]===null){v[Mt]=ne,Te=Mt;break}if(Te===-1)break}let ht=M[Te];ht&&ht.connect(ne)}}let re=new F,de=new F;function ge(le,_e,ne){re.setFromMatrixPosition(_e.matrixWorld),de.setFromMatrixPosition(ne.matrixWorld);let Te=re.distanceTo(de),ht=_e.projectionMatrix.elements,Mt=ne.projectionMatrix.elements,je=ht[14]/(ht[10]-1),Ie=ht[14]/(ht[10]+1),Be=(ht[9]+1)/ht[5],K=(ht[9]-1)/ht[5],cn=(ht[8]-1)/ht[0],ct=(Mt[8]+1)/Mt[0],mt=je*cn,tt=je*ct,vt=Te/(-cn+ct),H=vt*-cn;_e.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(H),le.translateZ(vt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();let L=je+vt,E=Ie+vt,Q=mt-H,be=tt+(Te-H),ye=Be*Ie/E*L,Ce=K*Ie/E*L;le.projectionMatrix.makePerspective(Q,be,ye,Ce,L,E),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}function pe(le,_e){_e===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(_e.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(i===null)return;T.near=S.near=P.near=le.near,T.far=S.far=P.far=le.far,(D!==T.near||oe!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,oe=T.far);let _e=le.parent,ne=T.cameras;pe(T,_e);for(let Te=0;Te<ne.length;Te++)pe(ne[Te],_e);ne.length===2?ge(T,P,S):T.projectionMatrix.copy(P.projectionMatrix),me(le,T,_e)};function me(le,_e,ne){ne===null?le.matrix.copy(_e.matrixWorld):(le.matrix.copy(ne.matrixWorld),le.matrix.invert(),le.matrix.multiply(_e.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Ar*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(le){c=le,d!==null&&(d.fixedFoveation=le),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=le)};let we=null;function Pe(le,_e){if(u=_e.getViewerPose(l||a),g=_e,u!==null){let ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Te=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,Te=!0);for(let ht=0;ht<ne.length;ht++){let Mt=ne[ht],je=null;if(m!==null)je=m.getViewport(Mt);else{let Be=h.getViewSubImage(d,Mt);je=Be.viewport,ht===0&&(e.setRenderTargetTextures(f,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(f))}let Ie=q[ht];Ie===void 0&&(Ie=new bn,Ie.layers.enable(ht),Ie.viewport=new vn,q[ht]=Ie),Ie.matrix.fromArray(Mt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Mt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(je.x,je.y,je.width,je.height),ht===0&&(T.matrix.copy(Ie.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Te===!0&&T.cameras.push(Ie)}}for(let ne=0;ne<M.length;ne++){let Te=v[ne],ht=M[ne];Te!==null&&ht!==void 0&&ht.update(Te,_e,l||a)}we&&we(le,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Ye=new sd;Ye.setAnimationLoop(Pe),this.setAnimationLoop=function(le){we=le},this.dispose=function(){}}};function Sb(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,id(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,M,v,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===zn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===zn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wb(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){let A=v.program;n.uniformBlockBinding(M,A)}function l(M,v){let A=i[M.id];A===void 0&&(g(M),A=u(M),i[M.id]=A,M.addEventListener("dispose",p));let N=v.program;n.updateUBOMapping(M,N);let P=e.render.frame;r[M.id]!==P&&(d(M),r[M.id]=P)}function u(M){let v=h();M.__bindingPointIndex=v;let A=s.createBuffer(),N=M.__size,P=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,N,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,A),A}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=i[M.id],A=M.uniforms,N=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let P=0,S=A.length;P<S;P++){let q=Array.isArray(A[P])?A[P]:[A[P]];for(let T=0,D=q.length;T<D;T++){let oe=q[T];if(m(oe,P,T,N)===!0){let he=oe.__offset,se=Array.isArray(oe.value)?oe.value:[oe.value],B=0;for(let re=0;re<se.length;re++){let de=se[re],ge=x(de);typeof de=="number"||typeof de=="boolean"?(oe.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,he+B,oe.__data)):de.isMatrix3?(oe.__data[0]=de.elements[0],oe.__data[1]=de.elements[1],oe.__data[2]=de.elements[2],oe.__data[3]=0,oe.__data[4]=de.elements[3],oe.__data[5]=de.elements[4],oe.__data[6]=de.elements[5],oe.__data[7]=0,oe.__data[8]=de.elements[6],oe.__data[9]=de.elements[7],oe.__data[10]=de.elements[8],oe.__data[11]=0):(de.toArray(oe.__data,B),B+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,he,oe.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,v,A,N){let P=M.value,S=v+"_"+A;if(N[S]===void 0)return typeof P=="number"||typeof P=="boolean"?N[S]=P:N[S]=P.clone(),!0;{let q=N[S];if(typeof P=="number"||typeof P=="boolean"){if(q!==P)return N[S]=P,!0}else if(q.equals(P)===!1)return q.copy(P),!0}return!1}function g(M){let v=M.uniforms,A=0,N=16;for(let S=0,q=v.length;S<q;S++){let T=Array.isArray(v[S])?v[S]:[v[S]];for(let D=0,oe=T.length;D<oe;D++){let he=T[D],se=Array.isArray(he.value)?he.value:[he.value];for(let B=0,re=se.length;B<re;B++){let de=se[B],ge=x(de),pe=A%N;pe!==0&&N-pe<ge.boundary&&(A+=N-pe),he.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=A,A+=ge.storage}}}let P=A%N;return P>0&&(A+=N-P),M.__size=A,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){let v=M.target;v.removeEventListener("dispose",p);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}var ci=class{constructor(e={}){let{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=hs,this.toneMappingExposure=1;let v=this,A=!1,N=0,P=0,S=null,q=-1,T=null,D=new vn,oe=new vn,he=null,se=new Ne(0),B=0,re=t.width,de=t.height,ge=1,pe=null,me=null,we=new vn(0,0,re,de),Pe=new vn(0,0,re,de),Ye=!1,le=new ha,_e=!1,ne=!1,Te=null,ht=new Kt,Mt=new lt,je=new F,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return S===null?ge:1}let K=n;function cn(w,z){for(let G=0;G<w.length;G++){let te=w[G],ee=t.getContext(te,z);if(ee!==null)return ee}return null}try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",He,!1),K===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),K=cn(z,w),K===null)throw cn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ct,mt,tt,vt,H,L,E,Q,be,ye,Ce,ze,Ge,et,Qe,yt,Me,zt,Ut,St,ut,it,At,qt;function Gt(){ct=new Wg(K),mt=new kg(K,ct,e),ct.init(mt),it=new Mb(K,ct,mt),tt=new vb(K,ct,mt),vt=new jg(K),H=new cb,L=new yb(K,ct,tt,H,mt,it,vt),E=new Bg(v),Q=new Vg(v),be=new tp(K,mt),At=new Fg(K,ct,be,mt),ye=new Xg(K,be,vt,At),Ce=new Zg(K,ye,be,vt),Ut=new Jg(K,mt,L),yt=new Hg(H),ze=new ob(v,E,Q,ct,mt,At,yt),Ge=new Sb(v,H),et=new hb,Qe=new gb(ct,mt),zt=new Ng(v,E,Q,tt,Ce,d,c),Me=new _b(v,Ce,mt),qt=new wb(K,vt,mt,tt),St=new Og(K,ct,vt,mt),ut=new qg(K,ct,vt,mt),vt.programs=ze.programs,v.capabilities=mt,v.extensions=ct,v.properties=H,v.renderLists=et,v.shadowMap=Me,v.state=tt,v.info=vt}Gt();let gt=new Xc(v,K);this.xr=gt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(w){w!==void 0&&(ge=w,this.setSize(re,de,!1))},this.getSize=function(w){return w.set(re,de)},this.setSize=function(w,z,G=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,de=z,t.width=Math.floor(w*ge),t.height=Math.floor(z*ge),G===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(re*ge,de*ge).floor()},this.setDrawingBufferSize=function(w,z,G){re=w,de=z,ge=G,t.width=Math.floor(w*G),t.height=Math.floor(z*G),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,z,G,te){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,z,G,te),tt.viewport(D.copy(we).multiplyScalar(ge).floor())},this.getScissor=function(w){return w.copy(Pe)},this.setScissor=function(w,z,G,te){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,z,G,te),tt.scissor(oe.copy(Pe).multiplyScalar(ge).floor())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){tt.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){pe=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,z=!0,G=!0){let te=0;if(w){let ee=!1;if(S!==null){let X=S.texture.format;ee=X===Ju||X===Ku||X===Yu}if(ee){let X=S.texture.type,Le=X===mi||X===cs||X===pl||X===Us||X===qu||X===ju,Ue=zt.getClearColor(),Je=zt.getClearAlpha(),xt=Ue.r,at=Ue.g,nt=Ue.b;Le?(m[0]=xt,m[1]=at,m[2]=nt,m[3]=Je,K.clearBufferuiv(K.COLOR,0,m)):(g[0]=xt,g[1]=at,g[2]=nt,g[3]=Je,K.clearBufferiv(K.COLOR,0,g))}else te|=K.COLOR_BUFFER_BIT}z&&(te|=K.DEPTH_BUFFER_BIT),G&&(te|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",He,!1),et.dispose(),Qe.dispose(),H.dispose(),E.dispose(),Q.dispose(),Ce.dispose(),At.dispose(),qt.dispose(),ze.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ae),gt.removeEventListener("sessionend",ce),Te&&(Te.dispose(),Te=null),Z.stop()};function Fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=vt.autoReset,z=Me.enabled,G=Me.autoUpdate,te=Me.needsUpdate,ee=Me.type;Gt(),vt.autoReset=w,Me.enabled=z,Me.autoUpdate=G,Me.needsUpdate=te,Me.type=ee}function He(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){let z=w.target;z.removeEventListener("dispose",Re),pt(z)}function pt(w){Xe(w),H.remove(w)}function Xe(w){let z=H.get(w).programs;z!==void 0&&(z.forEach(function(G){ze.releaseProgram(G)}),w.isShaderMaterial&&ze.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,G,te,ee,X){z===null&&(z=Ie);let Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ue=hn(w,z,G,te,ee);tt.setMaterial(te,Le);let Je=G.index,xt=1;if(te.wireframe===!0){if(Je=ye.getWireframeAttribute(G),Je===void 0)return;xt=2}let at=G.drawRange,nt=G.attributes.position,Nt=at.start*xt,un=(at.start+at.count)*xt;X!==null&&(Nt=Math.max(Nt,X.start*xt),un=Math.min(un,(X.start+X.count)*xt)),Je!==null?(Nt=Math.max(Nt,0),un=Math.min(un,Je.count)):nt!=null&&(Nt=Math.max(Nt,0),un=Math.min(un,nt.count));let Qt=un-Nt;if(Qt<0||Qt===1/0)return;At.setup(ee,te,Ue,G,Je);let Ln,Pt=St;if(Je!==null&&(Ln=be.get(Je),Pt=ut,Pt.setIndex(Ln)),ee.isMesh)te.wireframe===!0?(tt.setLineWidth(te.wireframeLinewidth*Be()),Pt.setMode(K.LINES)):Pt.setMode(K.TRIANGLES);else if(ee.isLine){let Ot=te.linewidth;Ot===void 0&&(Ot=1),tt.setLineWidth(Ot*Be()),ee.isLineSegments?Pt.setMode(K.LINES):ee.isLineLoop?Pt.setMode(K.LINE_LOOP):Pt.setMode(K.LINE_STRIP)}else ee.isPoints?Pt.setMode(K.POINTS):ee.isSprite&&Pt.setMode(K.TRIANGLES);if(ee.isBatchedMesh)Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Pt.renderInstances(Nt,Qt,ee.count);else if(G.isInstancedBufferGeometry){let Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,b=Math.min(G.instanceCount,Ot);Pt.renderInstances(Nt,Qt,b)}else Pt.render(Nt,Qt)};function jt(w,z,G){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,bt(w,z,G),w.side=Di,w.needsUpdate=!0,bt(w,z,G),w.side=dn):bt(w,z,G)}this.compile=function(w,z,G=null){G===null&&(G=w),p=Qe.get(G),p.init(),M.push(p),G.traverseVisible(function(ee){ee.isLight&&ee.layers.test(z.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),w!==G&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(z.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights(v._useLegacyLights);let te=new Set;return w.traverse(function(ee){let X=ee.material;if(X)if(Array.isArray(X))for(let Le=0;Le<X.length;Le++){let Ue=X[Le];jt(Ue,G,ee),te.add(Ue)}else jt(X,G,ee),te.add(X)}),M.pop(),p=null,te},this.compileAsync=function(w,z,G=null){let te=this.compile(w,z,G);return new Promise(ee=>{function X(){if(te.forEach(function(Le){H.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){ee(w);return}setTimeout(X,10)}ct.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let Lt=null;function j(w){Lt&&Lt(w)}function ae(){Z.stop()}function ce(){Z.start()}let Z=new sd;Z.setAnimationLoop(j),typeof self!="undefined"&&Z.setContext(self),this.setAnimationLoop=function(w){Lt=w,gt.setAnimationLoop(w),w===null?Z.stop():Z.start()},gt.addEventListener("sessionstart",ae),gt.addEventListener("sessionend",ce),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(z),z=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,S),p=Qe.get(w,M.length),p.init(),M.push(p),ht.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),le.setFromProjectionMatrix(ht),ne=this.localClippingEnabled,_e=yt.init(this.clippingPlanes,ne),x=et.get(w,f.length),x.init(),f.push(x),Ee(w,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(pe,me),this.info.render.frame++,_e===!0&&yt.beginShadows();let G=p.state.shadowsArray;if(Me.render(G,w,z),_e===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(x,w),p.setupLights(v._useLegacyLights),z.isArrayCamera){let te=z.cameras;for(let ee=0,X=te.length;ee<X;ee++){let Le=te[ee];De(x,w,Le,Le.viewport)}}else De(x,w,z);S!==null&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(v,w,z),At.resetDefaultState(),q=-1,T=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Ee(w,z,G,te){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||le.intersectsSprite(w)){te&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);let Le=Ce.update(w),Ue=w.material;Ue.visible&&x.push(w,Le,Ue,G,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||le.intersectsObject(w))){let Le=Ce.update(w),Ue=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),je.copy(Le.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(Ue)){let Je=Le.groups;for(let xt=0,at=Je.length;xt<at;xt++){let nt=Je[xt],Nt=Ue[nt.materialIndex];Nt&&Nt.visible&&x.push(w,Le,Nt,G,je.z,nt)}}else Ue.visible&&x.push(w,Le,Ue,G,je.z,null)}}let X=w.children;for(let Le=0,Ue=X.length;Le<Ue;Le++)Ee(X[Le],z,G,te)}function De(w,z,G,te){let ee=w.opaque,X=w.transmissive,Le=w.transparent;p.setupLightsView(G),_e===!0&&yt.setGlobalState(v.clippingPlanes,G),X.length>0&&Ke(ee,X,z,G),te&&tt.viewport(D.copy(te)),ee.length>0&&ve(ee,z,G),X.length>0&&ve(X,z,G),Le.length>0&&ve(Le,z,G),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Ke(w,z,G,te){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let X=mt.isWebGL2;Te===null&&(Te=new Pn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Qn:mi,minFilter:us,samples:X?4:0})),v.getDrawingBufferSize(Mt),X?Te.setSize(Mt.x,Mt.y):Te.setSize(lo(Mt.x),lo(Mt.y));let Le=v.getRenderTarget();v.setRenderTarget(Te),v.getClearColor(se),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let Ue=v.toneMapping;v.toneMapping=hs,ve(w,G,te),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te);let Je=!1;for(let xt=0,at=z.length;xt<at;xt++){let nt=z[xt],Nt=nt.object,un=nt.geometry,Qt=nt.material,Ln=nt.group;if(Qt.side===dn&&Nt.layers.test(te.layers)){let Pt=Qt.side;Qt.side=zn,Qt.needsUpdate=!0,dt(Nt,G,te,un,Qt,Ln),Qt.side=Pt,Qt.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te)),v.setRenderTarget(Le),v.setClearColor(se,B),v.toneMapping=Ue}function ve(w,z,G){let te=z.isScene===!0?z.overrideMaterial:null;for(let ee=0,X=w.length;ee<X;ee++){let Le=w[ee],Ue=Le.object,Je=Le.geometry,xt=te===null?Le.material:te,at=Le.group;Ue.layers.test(G.layers)&&dt(Ue,z,G,Je,xt,at)}}function dt(w,z,G,te,ee,X){w.onBeforeRender(v,z,G,te,ee,X),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(v,z,G,te,w,X),ee.transparent===!0&&ee.side===dn&&ee.forceSinglePass===!1?(ee.side=zn,ee.needsUpdate=!0,v.renderBufferDirect(G,z,te,ee,w,X),ee.side=Di,ee.needsUpdate=!0,v.renderBufferDirect(G,z,te,ee,w,X),ee.side=dn):v.renderBufferDirect(G,z,te,ee,w,X),w.onAfterRender(v,z,G,te,ee,X)}function bt(w,z,G){z.isScene!==!0&&(z=Ie);let te=H.get(w),ee=p.state.lights,X=p.state.shadowsArray,Le=ee.state.version,Ue=ze.getParameters(w,ee.state,X,z,G),Je=ze.getProgramCacheKey(Ue),xt=te.programs;te.environment=w.isMeshStandardMaterial?z.environment:null,te.fog=z.fog,te.envMap=(w.isMeshStandardMaterial?Q:E).get(w.envMap||te.environment),xt===void 0&&(w.addEventListener("dispose",Re),xt=new Map,te.programs=xt);let at=xt.get(Je);if(at!==void 0){if(te.currentProgram===at&&te.lightsStateVersion===Le)return on(w,Ue),at}else Ue.uniforms=ze.getUniforms(w),w.onBuild(G,Ue,v),w.onBeforeCompile(Ue,v),at=ze.acquireProgram(Ue,Je),xt.set(Je,at),te.uniforms=Ue.uniforms;let nt=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(nt.clippingPlanes=yt.uniform),on(w,Ue),te.needsLights=an(w),te.lightsStateVersion=Le,te.needsLights&&(nt.ambientLightColor.value=ee.state.ambient,nt.lightProbe.value=ee.state.probe,nt.directionalLights.value=ee.state.directional,nt.directionalLightShadows.value=ee.state.directionalShadow,nt.spotLights.value=ee.state.spot,nt.spotLightShadows.value=ee.state.spotShadow,nt.rectAreaLights.value=ee.state.rectArea,nt.ltc_1.value=ee.state.rectAreaLTC1,nt.ltc_2.value=ee.state.rectAreaLTC2,nt.pointLights.value=ee.state.point,nt.pointLightShadows.value=ee.state.pointShadow,nt.hemisphereLights.value=ee.state.hemi,nt.directionalShadowMap.value=ee.state.directionalShadowMap,nt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,nt.spotShadowMap.value=ee.state.spotShadowMap,nt.spotLightMatrix.value=ee.state.spotLightMatrix,nt.spotLightMap.value=ee.state.spotLightMap,nt.pointShadowMap.value=ee.state.pointShadowMap,nt.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=at,te.uniformsList=null,at}function Ht(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=Mr.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function on(w,z){let G=H.get(w);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function hn(w,z,G,te,ee){z.isScene!==!0&&(z=Ie),L.resetTextureUnits();let X=z.fog,Le=te.isMeshStandardMaterial?z.environment:null,Ue=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:On,Je=(te.isMeshStandardMaterial?Q:E).get(te.envMap||Le),xt=te.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,at=!!G.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),nt=!!G.morphAttributes.position,Nt=!!G.morphAttributes.normal,un=!!G.morphAttributes.color,Qt=hs;te.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Qt=v.toneMapping);let Ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pt=Ln!==void 0?Ln.length:0,Ot=H.get(te),b=p.state.lights;if(_e===!0&&(ne===!0||w!==T)){let U=w===T&&te.id===q;yt.setState(te,w,U)}let _=!1;te.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==b.state.version||Ot.outputColorSpace!==Ue||ee.isBatchedMesh&&Ot.batching===!1||!ee.isBatchedMesh&&Ot.batching===!0||ee.isInstancedMesh&&Ot.instancing===!1||!ee.isInstancedMesh&&Ot.instancing===!0||ee.isSkinnedMesh&&Ot.skinning===!1||!ee.isSkinnedMesh&&Ot.skinning===!0||ee.isInstancedMesh&&Ot.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ot.instancingColor===!1&&ee.instanceColor!==null||Ot.envMap!==Je||te.fog===!0&&Ot.fog!==X||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==yt.numPlanes||Ot.numIntersection!==yt.numIntersection)||Ot.vertexAlphas!==xt||Ot.vertexTangents!==at||Ot.morphTargets!==nt||Ot.morphNormals!==Nt||Ot.morphColors!==un||Ot.toneMapping!==Qt||mt.isWebGL2===!0&&Ot.morphTargetsCount!==Pt)&&(_=!0):(_=!0,Ot.__version=te.version);let y=Ot.currentProgram;_===!0&&(y=bt(te,z,ee));let C=!1,R=!1,O=!1,Y=y.getUniforms(),fe=Ot.uniforms;if(tt.useProgram(y.program)&&(C=!0,R=!0,O=!0),te.id!==q&&(q=te.id,R=!0),C||T!==w){Y.setValue(K,"projectionMatrix",w.projectionMatrix),Y.setValue(K,"viewMatrix",w.matrixWorldInverse);let U=Y.map.cameraPosition;U!==void 0&&U.setValue(K,je.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&Y.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Y.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,R=!0,O=!0)}if(ee.isSkinnedMesh){Y.setOptional(K,ee,"bindMatrix"),Y.setOptional(K,ee,"bindMatrixInverse");let U=ee.skeleton;U&&(mt.floatVertexTextures?(U.boneTexture===null&&U.computeBoneTexture(),Y.setValue(K,"boneTexture",U.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(Y.setOptional(K,ee,"batchingTexture"),Y.setValue(K,"batchingTexture",ee._matricesTexture,L));let V=G.morphAttributes;if((V.position!==void 0||V.normal!==void 0||V.color!==void 0&&mt.isWebGL2===!0)&&Ut.update(ee,G,y),(R||Ot.receiveShadow!==ee.receiveShadow)&&(Ot.receiveShadow=ee.receiveShadow,Y.setValue(K,"receiveShadow",ee.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(fe.envMap.value=Je,fe.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),R&&(Y.setValue(K,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&rt(fe,O),X&&te.fog===!0&&Ge.refreshFogUniforms(fe,X),Ge.refreshMaterialUniforms(fe,te,ge,de,Te),Mr.upload(K,Ht(Ot),fe,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Mr.upload(K,Ht(Ot),fe,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Y.setValue(K,"center",ee.center),Y.setValue(K,"modelViewMatrix",ee.modelViewMatrix),Y.setValue(K,"normalMatrix",ee.normalMatrix),Y.setValue(K,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let U=te.uniformsGroups;for(let W=0,Oe=U.length;W<Oe;W++)if(mt.isWebGL2){let st=U[W];qt.update(st,y),qt.bind(st,y)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return y}function rt(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function an(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,z,G){H.get(w.texture).__webglTexture=z,H.get(w.depthTexture).__webglTexture=G;let te=H.get(w);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=G===void 0,te.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){let G=H.get(w);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,G=0){S=w,N=z,P=G;let te=!0,ee=null,X=!1,Le=!1;if(w){let Je=H.get(w);Je.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(K.FRAMEBUFFER,null),te=!1):Je.__webglFramebuffer===void 0?L.setupRenderTarget(w):Je.__hasExternalTextures&&L.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);let xt=w.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Le=!0);let at=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(at[z])?ee=at[z][G]:ee=at[z],X=!0):mt.isWebGL2&&w.samples>0&&L.useMultisampledRTT(w)===!1?ee=H.get(w).__webglMultisampledFramebuffer:Array.isArray(at)?ee=at[G]:ee=at,D.copy(w.viewport),oe.copy(w.scissor),he=w.scissorTest}else D.copy(we).multiplyScalar(ge).floor(),oe.copy(Pe).multiplyScalar(ge).floor(),he=Ye;if(tt.bindFramebuffer(K.FRAMEBUFFER,ee)&&mt.drawBuffers&&te&&tt.drawBuffers(w,ee),tt.viewport(D),tt.scissor(oe),tt.setScissorTest(he),X){let Je=H.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+z,Je.__webglTexture,G)}else if(Le){let Je=H.get(w.texture),xt=z||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Je.__webglTexture,G||0,xt)}q=-1},this.readRenderTargetPixels=function(w,z,G,te,ee,X,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){tt.bindFramebuffer(K.FRAMEBUFFER,Ue);try{let Je=w.texture,xt=Je.format,at=Je.type;if(xt!==Kn&&it.convert(xt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=at===Qn&&(ct.has("EXT_color_buffer_half_float")||mt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(at!==mi&&it.convert(at)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===Ki&&(mt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-te&&G>=0&&G<=w.height-ee&&K.readPixels(z,G,te,ee,it.convert(xt),it.convert(at),X)}finally{let Je=S!==null?H.get(S).__webglFramebuffer:null;tt.bindFramebuffer(K.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(w,z,G=0){let te=Math.pow(2,-G),ee=Math.floor(z.image.width*te),X=Math.floor(z.image.height*te);L.setTexture2D(z,0),K.copyTexSubImage2D(K.TEXTURE_2D,G,0,0,w.x,w.y,ee,X),tt.unbindTexture()},this.copyTextureToTexture=function(w,z,G,te=0){let ee=z.image.width,X=z.image.height,Le=it.convert(G.format),Ue=it.convert(G.type);L.setTexture2D(G,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,G.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,G.unpackAlignment),z.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,te,w.x,w.y,ee,X,Le,Ue,z.image.data):z.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,te,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Le,z.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,te,w.x,w.y,Le,Ue,z.image),te===0&&G.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(w,z,G,te,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let X=w.max.x-w.min.x+1,Le=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Je=it.convert(te.format),xt=it.convert(te.type),at;if(te.isData3DTexture)L.setTexture3D(te,0),at=K.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)L.setTexture2DArray(te,0),at=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,te.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,te.unpackAlignment);let nt=K.getParameter(K.UNPACK_ROW_LENGTH),Nt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),un=K.getParameter(K.UNPACK_SKIP_PIXELS),Qt=K.getParameter(K.UNPACK_SKIP_ROWS),Ln=K.getParameter(K.UNPACK_SKIP_IMAGES),Pt=G.isCompressedTexture?G.mipmaps[ee]:G.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Pt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Pt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,w.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,w.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?K.texSubImage3D(at,ee,z.x,z.y,z.z,X,Le,Ue,Je,xt,Pt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(at,ee,z.x,z.y,z.z,X,Le,Ue,Je,Pt.data)):K.texSubImage3D(at,ee,z.x,z.y,z.z,X,Le,Ue,Je,xt,Pt),K.pixelStorei(K.UNPACK_ROW_LENGTH,nt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Nt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,un),K.pixelStorei(K.UNPACK_SKIP_ROWS,Qt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Ln),ee===0&&te.generateMipmaps&&K.generateMipmap(at),tt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),tt.unbindTexture()},this.resetState=function(){N=0,P=0,S=null,tt.reset(),At.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=rn.workingColorSpace===Fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Fs:$u}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fs?Dt:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qc=class extends ci{};qc.prototype.isWebGL1Renderer=!0;var yo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ui=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},li=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jn=new F,Bs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pn=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,Zr=new F,fr=new F,pr=new F,mr=new lt,Qr=new lt,hd=new Kt,ja=new F,$r=new F,Ya=new F,yu=new lt,_c=new lt,Mu=new lt,mn=class extends yn{constructor(e=new pn){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new fn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cr(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Bs(n,3,0,!1)),dr.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new lt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),hd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ka(ja.set(-.5,-.5,0),pr,a,fr,i,r),Ka($r.set(.5,-.5,0),pr,a,fr,i,r),Ka(Ya.set(.5,.5,0),pr,a,fr,i,r),yu.set(0,0),_c.set(1,0),Mu.set(1,1);let o=e.ray.intersectTriangle(ja,$r,Ya,!1,Zr);if(o===null&&(Ka($r.set(-.5,.5,0),pr,a,fr,i,r),_c.set(0,1),o=e.ray.intersectTriangle(ja,Ya,$r,!1,Zr),o===null))return;let c=e.ray.origin.distanceTo(Zr);c<e.near||c>e.far||t.push({distance:c,point:Zr.clone(),uv:Ds.getInterpolation(Zr,ja,$r,Ya,yu,_c,Mu,new lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(s,e,t,n,i,r){mr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qr.x=r*mr.x-i*mr.y,Qr.y=i*mr.x+r*mr.y):Qr.copy(mr),s.copy(e),s.x+=Qr.x,s.y+=Qr.y,s.applyMatrix4(hd)}var Eu=new F,Su=new vn,wu=new vn,Tb=new F,Tu=new Kt,Ja=new F,vc=new oi,Au=new Kt,yc=new Hs,Mo=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ja),this.boundingBox.expandByPoint(Ja)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ja),this.boundingSphere.expandByPoint(Ja)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(i),e.ray.intersectsSphere(vc)!==!1&&(Au.copy(i).invert(),yc.copy(e.ray).applyMatrix4(Au),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Su.fromBufferAttribute(i.attributes.skinIndex,e),wu.fromBufferAttribute(i.attributes.skinWeight,e),Eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=wu.getComponent(r);if(a!==0){let o=Su.getComponent(r);Tu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Tb.copy(Eu).applyMatrix4(Tu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ua=class extends yn{constructor(){super(),this.isBone=!0,this.type="Bone"}},zs=class extends Xn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Nn,u=Nn,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ru=new Kt,Ab=new Kt,Eo=class s{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Kt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ab;Ru.multiplyMatrices(o,t[r]),Ru.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zs(t,e,e,Kn,Ki);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ua),this.bones.push(a),this.boneInverses.push(new Kt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Gs=class extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Kt,Cu=new Kt,Za=[],Pu=new Vn,Rb=new Kt,ea=new ke,ta=new oi,Pr=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Pu.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),ta.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gr),Cu.multiplyMatrices(n,gr),ea.matrixWorld=Cu,ea.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let c=Za[a];c.instanceId=r,c.object=this,t.push(c)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lu=new F,Iu=new F,Du=new Kt,Mc=new Hs,Qa=new oi,Lr=class extends yn{constructor(e=new fn,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lu.fromBufferAttribute(t,i-1),Iu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lu.distanceTo(Iu);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Du.copy(i).invert(),Mc.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new F,u=new F,h=new F,d=new F,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=f,A=M-1;v<A;v+=m){let N=g.getX(v),P=g.getX(v+1);if(l.fromBufferAttribute(p,N),u.fromBufferAttribute(p,P),Mc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(d);q<e.near||q>e.far||t.push({distance:q,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let v=f,A=M-1;v<A;v+=m){if(l.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Mc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Uu=new F,Nu=new F,Ir=class extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Uu.fromBufferAttribute(t,i),Nu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends Lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qi=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fu=new Kt,jc=new Hs,$a=new oi,eo=new F,fs=class extends yn{constructor(e=new fn,t=new Qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Fu.copy(i).invert(),jc.copy(e.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,x=m;g<x;g++){let p=l.getX(g);eo.fromBufferAttribute(h,p),Ou(eo,p,c,i,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,x=m;g<x;g++)eo.fromBufferAttribute(h,g),Ou(eo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ou(s,e,t,n,i,r,a){let o=jc.distanceSqToPoint(s);if(o<t){let c=new F;jc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var En=class extends Xn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ws=class s extends fn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new F,u=new lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new sn(a,3)),this.setAttribute("normal",new sn(o,3)),this.setAttribute("uv",new sn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vt=class s extends fn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],m=[],g=0,x=[],p=n/2,f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(m,2));function M(){let A=new F,N=new F,P=0,S=(t-e)/n;for(let q=0;q<=r;q++){let T=[],D=q/r,oe=D*(t-e)+e;for(let he=0;he<=i;he++){let se=he/i,B=se*c+o,re=Math.sin(B),de=Math.cos(B);N.x=oe*re,N.y=-D*n+p,N.z=oe*de,h.push(N.x,N.y,N.z),A.set(re,S,de).normalize(),d.push(A.x,A.y,A.z),m.push(se,1-D),T.push(g++)}x.push(T)}for(let q=0;q<i;q++)for(let T=0;T<r;T++){let D=x[T][q],oe=x[T+1][q],he=x[T+1][q+1],se=x[T][q+1];u.push(D,oe,se),u.push(oe,he,se),P+=6}l.addGroup(f,P,0),f+=P}function v(A){let N=g,P=new lt,S=new F,q=0,T=A===!0?e:t,D=A===!0?1:-1;for(let he=1;he<=i;he++)h.push(0,p*D,0),d.push(0,D,0),m.push(.5,.5),g++;let oe=g;for(let he=0;he<=i;he++){let B=he/i*c+o,re=Math.cos(B),de=Math.sin(B);S.x=T*de,S.y=p*D,S.z=T*re,h.push(S.x,S.y,S.z),d.push(0,D,0),P.x=re*.5+.5,P.y=de*.5*D+.5,m.push(P.x,P.y),g++}for(let he=0;he<i;he++){let se=N+he,B=oe+he;A===!0?u.push(B,B+1,se):u.push(B+1,B,se),q+=3}l.addGroup(f,q,A===!0?1:2),f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ni=class s extends Vt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fi=class s extends fn{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/i,m=new F,g=new lt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let f=r+p/n*a;m.x=h*Math.cos(f),m.y=h*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let p=x*(n+1);for(let f=0;f<n;f++){let M=f+p,v=M,A=M+n+1,N=M+n+2,P=M+1;o.push(v,A,P),o.push(A,N,P)}}this.setIndex(o),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ei=class s extends fn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new F,d=new F,m=[],g=[],x=[],p=[];for(let f=0;f<=n;f++){let M=[],v=f/n,A=0;f===0&&a===0?A=.5/t:f===n&&c===Math.PI&&(A=-.5/t);for(let N=0;N<=t;N++){let P=N/t;h.x=-e*Math.cos(i+P*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+P*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(P+A,1-v),M.push(l++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let v=u[f][M+1],A=u[f][M],N=u[f+1][M],P=u[f+1][M+1];(f!==0||a>0)&&m.push(v,A,P),(f!==n-1||c<Math.PI)&&m.push(A,N,P)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $i=class s extends fn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new F,h=new F,d=new F;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){let x=g/i*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){let x=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,M=(i+1)*m+g;a.push(x,p,M),a.push(p,f,M)}this.setIndex(a),this.setAttribute("position",new sn(o,3)),this.setAttribute("normal",new sn(c,3)),this.setAttribute("uv",new sn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wo=class extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gi=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Dr=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function to(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ku(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ps=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:br,endingEnd:br}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case xr:r=e,o=2*t-n;break;case so:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xr:a=e,c=2*n-t;break;case so:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,A=m*p-m*x;for(let N=0;N!==o;++N)r[N]=f*a[u+N]+M*a[l+N]+v*a[c+N]+A*a[h+N];return r}},To=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Kc=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Cb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=ks;var ms=class extends bi{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Tr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends bi{};Ao.prototype.ValueTypeName="color";var es=class extends bi{};es.prototype.ValueTypeName="number";var Jc=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Dn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Oi=class extends bi{InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.DefaultInterpolation=ks;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends bi{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Tr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends bi{};ts.prototype.ValueTypeName="vector";var Ur=class{constructor(e,t=-1,n,i=ml){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ti(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ib(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(bi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Pb(c);c=ku(c,1,u),l=ku(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new es(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,g,x){if(m.length!==0){let p=[],f=[];ud(m,p,f,g),p.length!==0&&x.push(new h(d,p,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)m[d[g].morphTargets[x]]=-1;for(let x in m){let p=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){let v=d[g];p.push(v.time),f.push(v.morphTarget===x?1:0)}i.push(new es(".morphTargetInfluence["+x+"]",p,f))}c=m.length*a}else{let m=".bones["+t[h].name+"]";n(ts,m+".position",d,"pos",i),n(Oi,m+".quaternion",d,"rot",i),n(ts,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Lb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return Ao;case"quaternion":return Oi;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ib(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lb(s.type);if(s.times===void 0){let t=[],n=[];ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ls={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Zc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},Db=new Zc,ns=class{constructor(e){this.manager=e!==void 0?e:Db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},Qc=class extends Error{constructor(e,t){super(e),this.response=t}},da=class extends ns{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ls.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:i});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=qi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,x=0,p=new ReadableStream({start(f){M();function M(){h.read().then(({done:v,value:A})=>{if(v)f.close();else{x+=A.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let P=0,S=u.length;P<S;P++){let q=u[P];q.onProgress&&q.onProgress(N)}f.enqueue(A),M()}})}}});return new Response(p)}else throw new Qc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{ls.add(e,l);let u=qi[e];delete qi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=qi[e];if(u===void 0)throw this.manager.itemError(e),l;delete qi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $c=class extends ns{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ls.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ca("img");function c(){u(),ls.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ki=class extends ns{constructor(e){super(e)}load(e,t,n,i){let r=new Xn,a=new $c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Xs=class extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ti=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ec=new Kt,Hu=new F,Bu=new F,fa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=class extends fa{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ro=class extends Xs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new el}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zu=new Kt,na=new F,Sc=new F,tl=class extends fa{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new vn(2,1,1,1),new vn(0,1,1,1),new vn(3,1,1,1),new vn(1,1,1,1),new vn(3,0,1,1),new vn(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),n.position.copy(na),Sc.copy(n.position),Sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sc),n.updateMatrixWorld(),i.makeTranslation(-na.x,-na.y,-na.z),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}},ni=class extends Xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nl=class extends fa{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cn=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Co=class extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var bs=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Po=class extends ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ls.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ls.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ls.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ls.add(e,c),r.manager.itemStart(e)}};var Lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gu(){return(typeof performance=="undefined"?Date:performance).now()}var il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Dn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Dn.multiplyQuaternionsFlat(e,a,e,t,e,n),Dn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},vl="\\[\\]\\.:\\/",Ub=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",Nb="[^"+vl.replace("\\.","")+"]",Fb=/((?:WC+[\/:])*)/.source.replace("WC",yl),Ob=/(WCOD+)?/.source.replace("WCOD",Nb),kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),Hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Bb=new RegExp("^"+Fb+Ob+kb+Hb+"$"),zb=["material","materials","bones","map"],sl=class{constructor(e,t,n){let i=n||_n.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_n=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(e){let t=Bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=sl;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:br,endingEnd:br};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hf:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case ml:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===lf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===pa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=xr,i.endingEnd=xr):(e?i.endingStart=this.zeroSlopeAtStart?xr:br:i.endingStart=so,t?i.endingEnd=this.zeroSlopeAtEnd?xr:br:i.endingEnd=so)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Gb=new Float32Array(1),hi=class extends Zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],m=d.name,g=u[m];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,m));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new il(_n.create(n,m,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,m),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new To(new Float32Array(2),new Float32Array(2),1,Gb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ur.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ml),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new rl(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ur.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Nr=class{constructor(e,t,n=0,i=1/0){this.ray=new Hs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(Vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)al(e[i],this,n,t);return n.sort(Vu),n}};function Vu(s,e){return s.distance-e.distance}function al(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)al(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function Ml(s,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ma||e===No){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ma)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Hi=class extends ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Gl(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=bs.extractUrlBase(e);a=bs.resolveURL(l,this.path)}else a=bs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new da(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gd){try{a[tn.KHR_BINARY_GLTF]=new Vl(e)}catch(h){i&&i(h);return}r=JSON.parse(a[tn.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Jl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case tn.KHR_MATERIALS_UNLIT:a[h]=new Al;break;case tn.KHR_DRACO_MESH_COMPRESSION:a[h]=new Wl(r,this.dracoLoader);break;case tn.KHR_TEXTURE_TRANSFORM:a[h]=new Xl;break;case tn.KHR_MESH_QUANTIZATION:a[h]=new ql;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Vb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var tn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tl=class{constructor(e){this.parser=e,this.name=tn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],On);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Cn(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ni(u),l.distance=h;break;case"spot":l=new Ro(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,_s(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Al=class{constructor(){this.name=tn.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let i=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],On),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(i)}},Rl=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cl=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(o,o)}return Promise.all(r)}},Pl=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Ll=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],On)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Dl=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],On),Promise.all(r)}},Ul=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Nl=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],On),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Dt)),Promise.all(r)}},Fl=class{constructor(e){this.parser=e,this.name=tn.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ol=class{constructor(e){this.parser=e,this.name=tn.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},kl=class{constructor(e){this.parser=e,this.name=tn.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Hl=class{constructor(e){this.parser=e,this.name=tn.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bl=class{constructor(e){this.parser=e,this.name=tn.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zl=class{constructor(e){this.name=tn.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}},Gl=class{constructor(e){this.name=tn.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==_i.TRIANGLES&&l.mode!==_i.TRIANGLE_STRIP&&l.mode!==_i.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(let g of h){let x=new Kt,p=new F,f=new Dn,M=new F(1,1,1),v=new Pr(g.geometry,g.material,d);for(let A=0;A<d;A++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,A),c.SCALE&&M.fromBufferAttribute(c.SCALE,A),v.setMatrixAt(A,x.compose(p,f,M));for(let A in c)if(A==="_COLOR_0"){let N=c[A];v.instanceColor=new Gs(N.array,N.itemSize,N.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,c[A]);yn.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},gd="glTF",xa=12,dd={JSON:1313821514,BIN:5130562},Vl=class{constructor(e){this.name=tn.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-xa,r=new DataView(e,xa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===dd.JSON){let l=new Uint8Array(e,xa+a,o);this.content=n.decode(l)}else if(c===dd.BIN){let l=xa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tn.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Yl[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Yl[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],m=Or[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(m){for(let g in m.attributes){let x=m.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}h(m)},o,l,On,d)})})}},Xl=class{constructor(){this.name=tn.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ql=class{constructor(){this.name=tn.KHR_MESH_QUANTIZATION}},ko=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*l,x=g-l,p=-2*m+3*d,f=m-d,M=1-p,v=f-d+h;for(let A=0;A!==o;A++){let N=a[x+A+o],P=a[x+A+c]*u,S=a[g+A+o],q=a[g+A]*u;r[A]=M*N+v*P+p*S+f*q}return r}},Wb=new Dn,jl=class extends ko{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Wb.fromArray(r).normalize().toArray(r),r}},_i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fd={9728:Nn,9729:Fn,9984:io,9985:fl,9986:ia,9987:us},pd={33071:ai,33648:Os,10497:Gn},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xb={CUBICSPLINE:void 0,LINEAR:ks,STEP:Tr},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function js(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _s(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Yb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kb(s){let e,t=s.extensions&&s.extensions[tn.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wl(t.attributes):e=s.indices+":"+wl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wl(s.targets[n]);return e}function wl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Kl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zb=new Kt,Jl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new ki(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return js(r,o,i),_s(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tn.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(bs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=El[i.type],o=Or[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ln(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=El[i.type],l=Or[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(m&&m!==h){let f=Math.floor(d/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,v=t.cache.get(M);v||(x=new l(o,f*m,i.count*m/u),v=new Cr(x,m/u),t.cache.add(M,v)),p=new Bs(v,c,d%m/u,g)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),p=new ln(x,c,g);if(i.sparse!==void 0){let f=El.SCALAR,M=Or[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,N=new M(a[1],v,i.sparse.count*f),P=new l(a[2],A,i.sparse.count*c);o!==null&&(p=new ln(p.array.slice(),p.itemSize,p.normalized));for(let S=0,q=N.length;S<q;S++){let T=N[S];if(p.setX(T,P[S*c]),c>=2&&p.setY(T,P[S*c+1]),c>=3&&p.setZ(T,P[S*c+2]),c>=4&&p.setW(T,P[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=fd[d.magFilter]||Fn,u.minFilter=fd[d.minFilter]||us,u.wrapS=pd[d.wrapS]||Gn,u.wrapT=pd[d.wrapT]||Gn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new Xn(x);p.needsUpdate=!0,d(p)}),t.load(bs.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||Jb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tn.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tn.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tn.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Qi,$n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Vs,$n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tn.KHR_MATERIALS_UNLIT]){let h=i[tn.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],On),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dn);let u=r.alphaMode||Sl.OPAQUE;if(u===Sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Sl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nn){let h=r.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],On)}return r.emissiveTexture!==void 0&&a!==nn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),_s(h,r),t.associations.set(h,{materials:e}),r.extensions&&js(i,h,r),h})}createUniqueName(e){let t=_n.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return md(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Kb(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[tn.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=md(new fn,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?qb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,g=u.length;m<g;m++){let x=u[m],p=a[m],f,M=l[m];if(p.mode===_i.TRIANGLES||p.mode===_i.TRIANGLE_STRIP||p.mode===_i.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new Mo(x,M):new ke(x,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===_i.TRIANGLE_STRIP?f.geometry=Ml(f.geometry,No):p.mode===_i.TRIANGLE_FAN&&(f.geometry=Ml(f.geometry,ma));else if(p.mode===_i.LINES)f=new Ir(x,M);else if(p.mode===_i.LINE_STRIP)f=new Lr(x,M);else if(p.mode===_i.LINE_LOOP)f=new So(x,M);else if(p.mode===_i.POINTS)f=new fs(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&Yb(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),_s(f,r),p.extensions&&js(i,f,p),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&js(i,h[0],r),h[0];let d=new _t;r.extensions&&js(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bn(ga.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ds(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_s(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Kt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Eo(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let m=i.channels[h],g=i.samplers[m.sampler],x=m.target,p=x.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],m=h[1],g=h[2],x=h[3],p=h[4],f=[];for(let M=0,v=d.length;M<v;M++){let A=d[M],N=m[M],P=g[M],S=x[M],q=p[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let T=n._createAnimationTracks(A,N,P,S,q);if(T)for(let D=0;D<T.length;D++)f.push(T[D])}return new Ur(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Zb)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ua:l.length>1?u=new _t:l.length===1?u=l[0]:u=new yn,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),_s(u,r),r.extensions&&js(n,u,r),r.matrix!==void 0){let h=new Kt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new _t;n.name&&(r.name=i.createUniqueName(n.name)),_s(r,n),n.extensions&&js(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,m]of i.associations)(d instanceof $n||d instanceof Xn)&&h.set(d,m);return u.traverse(d=>{let m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];xs[r.path]===xs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(xs[r.path]){case xs.weights:l=es;break;case xs.rotation:l=Oi;break;case xs.position:case xs.scale:l=ts;break;default:switch(n.itemSize){case 1:l=es;break;case 2:case 3:default:l=ts;break}break}let u=i.interpolation!==void 0?Xb[i.interpolation]:ks,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let g=new l(c[d]+"."+xs[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Kl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Oi?jl:ko;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qb(s,e,t){let n=e.attributes,i=new Vn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){let u=Kl(Or[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,c=new F;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let x=Kl(Or[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new oi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function md(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Yl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return rn.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rn.workingColorSpace}" not supported.`),_s(s,e),Qb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jb(s,e.targets,t):s})}function Ri(s){let e=new Map,t=new Map,n=s.clone();return bd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)bd(s.children[n],e.children[n],t)}var Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$b=new ds(-1,1,1,-1,0,1),Zl=class extends fn{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}},ex=new Zl,vs=class{constructor(e){this._mesh=new ke(ex,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$b)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ys=class extends ui{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xi.clone(e.uniforms),this.material=new Mn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _a=class extends ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},zo=class extends ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new lt);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ys(Bo),this.copyPass.material.blending=Li,this.clock=new Lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(a instanceof _a?n=!0:a instanceof zo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hr=class extends ui{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var xd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ms=class s extends ui{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new lt(e.x,e.y):new lt(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(r,a,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Pn(r,a,{type:Qn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new Pn(r,a,{type:Qn});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=xd;this.highPassUniforms=xi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Bo;this.copyUniforms=xi.clone(u.uniforms),this.blendMaterial=new Mn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new nn,this.fsQuad=new vs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Mn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Mn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ms.BlurDirectionX=new lt(1,0);Ms.BlurDirectionY=new lt(0,1);var _d={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Br=class extends ui{constructor(){super();let e=_d;this.uniforms=xi.clone(e.uniforms),this.material=new wo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rn.getTransfer(this._outputColorSpace)===xn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ll?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ai?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zr=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var M=new Uint8Array(f.length),v=0;v<f.length;++v){var A=f.charCodeAt(v);M[v]=A>96?A-97:A>64?A-39:A+4}for(var N=0,v=0;v<f.length;++v)M[N++]=M[v]<60?n[M[v]]:(M[v]-60)*64+M[++v];return M.buffer.slice(0,N)}function c(f,M,v,A,N,P){var S=r.exports.sbrk,q=v+3&-4,T=S(q*A),D=S(N.length),oe=new Uint8Array(r.exports.memory.buffer);oe.set(N,D);var he=f(T,v,A,D,N.length);if(he==0&&P&&P(T,q,A),M.set(oe.subarray(T,T+v*A)),S(T-S(0)),he!=0)throw new Error("Malformed buffer data: "+he)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function m(f){var M={object:new Worker(f),pending:0,requests:{}};return M.object.onmessage=function(v){var A=v.data;M.pending-=A.count,M.requests[A.id][A.action](A.value),delete M.requests[A.id]},M}function g(f){for(var M="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),v=new Blob([M],{type:"text/javascript"}),A=URL.createObjectURL(v),N=0;N<f;++N)h[N]=m(A);URL.revokeObjectURL(A)}function x(f,M,v,A,N){for(var P=h[0],S=1;S<h.length;++S)h[S].pending<P.pending&&(P=h[S]);return new Promise(function(q,T){var D=new Uint8Array(v),oe=d++;P.pending+=f,P.requests[oe]={resolve:q,reject:T},P.object.postMessage({id:oe,count:f,size:M,source:D,mode:A,filter:N},[D.buffer])})}function p(f){a.then(function(){var M=f.data;try{var v=new Uint8Array(M.count*M.size);c(r.exports[M.mode],v,M.count,M.size,M.source,r.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:v},[v.buffer])}catch(A){self.postMessage({id:M.id,count:M.count,action:"reject",value:A})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,M,v,A,N){c(r.exports.meshopt_decodeVertexBuffer,f,M,v,A,r.exports[l[N]])},decodeIndexBuffer:function(f,M,v,A){c(r.exports.meshopt_decodeIndexBuffer,f,M,v,A)},decodeIndexSequence:function(f,M,v,A){c(r.exports.meshopt_decodeIndexSequence,f,M,v,A)},decodeGltfBuffer:function(f,M,v,A,N,P){c(r.exports[u[N]],f,M,v,A,r.exports[l[P]])},decodeGltfBufferAsync:function(f,M,v,A,N){return h.length>0?x(f,M,v,u[A],l[N]):a.then(function(){var P=new Uint8Array(f*M);return c(r.exports[u[A]],P,f,M,v,r.exports[l[N]]),P})}}}();function tx(s,e={}){let t=e.base||"harbor/harbor3d/",n=document.createElement("canvas");n.className="h3dCanvas",s.append(n);let i=document.createElement("div");i.className="h3dLabels",s.append(i);let r=document.createElement("div");r.className="h3dHand",r.textContent="\u{1F446}",s.append(r);let a=matchMedia("(pointer:coarse)").matches,o=new ci({canvas:n,antialias:!1,powerPreference:"high-performance"});o.debug.checkShaderErrors=!1,o.setPixelRatio(Math.min(devicePixelRatio||1,a?1:1.75)),o.shadowMap.enabled=!0,a&&(o.shadowMap.autoUpdate=!1),o.shadowMap.type=a?Io:qs,o.toneMapping=Ai,o.toneMappingExposure=1;let c=new li;c.background=new Ne(745352);let l=new Ne(13624562);c.fog=new Ui(l,90,260);let u=new bn(40,1,.5,900);function h(b,_){let y=Math.sin(b*127.1+_*311.7)*43758.5453;return y-Math.floor(y)}function d(b,_){let y=Math.floor(b),C=Math.floor(_),R=b-y,O=_-C,Y=R*R*(3-2*R),fe=O*O*(3-2*O),V=h(y,C),U=h(y+1,C),W=h(y,C+1),Oe=h(y+1,C+1);return V+(U-V)*Y+(W-V)*fe+(V-U-W+Oe)*Y*fe}function m(b,_,y=4){let C=0,R=.5,O=1;for(let Y=0;Y<y;Y++)C+=R*d(b*O,_*O),O*=2.03,R*=.5;return C}let g=(b,_,y)=>{let C=Math.max(y-Math.abs(b-_),0)/y;return Math.max(b,_)+C*C*y*.25},x=(b,_,y)=>-g(-b,-_,y),p=(b,_,y)=>{let C=Math.min(1,Math.max(0,(y-b)/(_-b)));return C*C*(3-2*C)},f=[];function M(b,_){let y=1-Math.hypot(b/50,(_+14)/28);y=g(y,1-Math.hypot((b-27)/15,(_-6)/15),.2),y=g(y,1-Math.hypot((b+27)/15,(_-6)/15),.2);let C=1-Math.hypot(b/15.5,(_-9)/15);return y=x(y,-C*.9,.25),y+(m(b*.06,_*.06)-.5)*.22}function v(b,_){let y=M(b,_);if(y<0)return Math.max(-9.5,-.25+y*38);let C=p(-12,-30,_),R=Math.hypot(b/15.5,(_-9)/15),O=p(0,.1,y)*.9+p(.1,.45,y)*1.3*p(1.05,1.6,R)+p(.3,.75,y)*(1.5+m(b*.08+9,_*.08)*6)*C;return O+=(m(b*.3,_*.3)-.5)*.25*p(.05,.2,y),O}function A(b,_){let y=v(b,_);for(let C of f){let R=Math.hypot(b-C.x,_-C.z);y+=(C.h-y)*p(C.r+4,C.r,R)}return y}function N(b,_,y){let C={x:b,z:_,r:y,h:Math.max(1.1,v(b,_))};return f.push(C),C.h}let P=e.labels||{},S={adventure:{x:0,z:8,label:8,name:P.adventure},tavern:{x:-26,z:2,label:6,name:P.tavern},hq:{x:-13,z:-20,label:6.5,name:P.hq},vault:{x:15,z:-21,label:5,name:P.vault},market:{x:27,z:0,label:5.5,name:P.market},arena:{x:26,z:13,label:4,name:P.arena}};S.tavern.y=N(S.tavern.x,S.tavern.z,8),S.hq.y=N(S.hq.x,S.hq.z,7),S.vault.y=N(S.vault.x,S.vault.z,6),S.market.y=N(S.market.x,S.market.z,7),S.arena.y=N(S.arena.x,S.arena.z,6),S.adventure.y=0;let q={x:-4.5,z:-3};N(0,-10,6);let T=[[[q.x,-4],[-3,-10],[-10,-14],[-13,-15.5]],[[-3,-10],[6,-12],[12,-17],[15,-17.5]],[[-3,-10],[-12,-8],[-20,-3],[-23,0]],[[6,-12],[16,-8],[23,-3],[25,-1]],[[23,-3],[26,4],[26,8.5]],[[-20,-3],[-24,6],[-21,12]]];function D(b,_,y,C){let R=C[0]-y[0],O=C[1]-y[1],Y=b-y[0],fe=_-y[1],V=Math.max(0,Math.min(1,(Y*R+fe*O)/(R*R+O*O)));return Math.hypot(Y-R*V,fe-O*V)}function oe(b,_){let y=1e9;for(let C of T)for(let R=1;R<C.length;R++)y=Math.min(y,D(b,_,C[R-1],C[R]));return y}let he=220,se=300,B=new Float32Array(se*se);{let b=new Zt(he,he,se-1,se-1);b.rotateX(-Math.PI/2);let _=b.attributes.position;for(let ft=0;ft<_.count;ft++){let yi=_.getX(ft),di=_.getZ(ft),Un=A(yi,di);_.setY(ft,Un),B[ft]=Un}b.computeVertexNormals();let y=new Float32Array(_.count*3),C=b.attributes.normal,R=ft=>new Ne(ft),O=R(13214826),Y=R(15782810),fe=R(16245685),V=R(7182910),U=R(10204236),W=R(4617263),Oe=R(9339250),st=R(7037272),It=R(12160604),wn=R(14271630),Rt=new Ne,$t=new Ne;for(let ft=0;ft<_.count;ft++){let yi=_.getX(ft),di=_.getZ(ft),Un=_.getY(ft),Ea=C.getY(ft),Ks=m(yi*.12,di*.12),I=m(yi*.5+40,di*.5);if(Un<-.05)Rt.copy(wn).lerp(O,p(-3,0,Un));else{Rt.copy(O).lerp(Y,p(0,.45,Un)).lerp(fe,p(.4,.9,Un)*I*.7);let $=p(.85+Ks*.5,1.35+Ks*.5,Un);$t.copy(V).lerp(U,p(.35,.7,Ks)).lerp(W,p(.55,.8,I)*.6),Rt.lerp($t,$);let ie=p(.86,.7,Ea)*p(.8,1.6,Un);$t.copy(Oe).lerp(st,I),Rt.lerp($t,ie);let ue=oe(yi,di);Rt.lerp(It,p(1.6,.9,ue)*(Un>.3?.9:0)*(.8+I*.3))}let J=.9+I*.2;y[ft*3]=Rt.r*J,y[ft*3+1]=Rt.g*J,y[ft*3+2]=Rt.b*J}b.setAttribute("color",new ln(y,3));let Ae=document.createElement("canvas");Ae.width=Ae.height=256;let $e=Ae.getContext("2d"),Ve=$e.createImageData(256,256);for(let ft=0;ft<256*256;ft++){let yi=ft%256,di=ft/256|0,Un=200+(m(yi*.09,di*.09,3)-.5)*70+(h(yi,di)-.5)*40;Ve.data[ft*4]=Ve.data[ft*4+1]=Ve.data[ft*4+2]=Un,Ve.data[ft*4+3]=255}$e.putImageData(Ve,0,0);let wt=new En(Ae);wt.wrapS=wt.wrapT=Gn,wt.repeat.set(70,70),wt.colorSpace=Dt;let Et=new Xt({vertexColors:!0,map:wt,roughness:.95,metalness:0});Et.onBeforeCompile=ft=>{ft.uniforms.cs={value:ge},ft.uniforms.ct=de,ft.vertexShader=ft.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp=(modelMatrix*vec4(transformed,1.)).xyz;`),ft.fragmentShader=ft.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;uniform sampler2D cs;uniform float ct;`).replace("#include <map_fragment>",`#include <map_fragment>
float cl=texture2D(cs,vWp.xz*.006+vec2(ct*.004,ct*.0025)).r;diffuseColor.rgb*=mix(1.,.62,smoothstep(.5,.66,cl));`)};let Wt=new ke(b,Et);Wt.receiveShadow=!0,c.add(Wt)}let re=new Uint8Array(se*se*4);for(let b=0;b<se*se;b++)re[b*4]=Math.max(0,Math.min(255,Math.round((B[b]+10)/20*255))),re[b*4+3]=255;let de={value:0},ge=(()=>{let _=document.createElement("canvas");_.width=_.height=128;let y=_.getContext("2d"),C=y.createImageData(128,128);for(let O=0;O<128*128;O++){let Y=O%128,fe=O/128|0,V=m(Y*.06,fe*.06,4)*255;C.data[O*4]=C.data[O*4+1]=C.data[O*4+2]=V,C.data[O*4+3]=255}y.putImageData(C,0,0);let R=new En(_);return R.wrapS=R.wrapT=Os,R})(),pe=new zs(re,se,se,Kn,mi);pe.minFilter=pe.magFilter=Fn,pe.needsUpdate=!0;let me=new F(-.55,.22,-1).normalize();{let b=new Mn({side:zn,depthWrite:!1,fog:!1,uniforms:{sun:{value:me}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun;varying vec3 vp;void main(){float h=vp.y;
      vec3 hor=vec3(.84,.92,.98),mid=vec3(.56,.77,.97),top=vec3(.27,.52,.9);
      vec3 c=mix(hor,mid,smoothstep(0.,.1,h));c=mix(c,top,smoothstep(.1,.6,h));
      float d=max(dot(vp,sun),0.);c+=vec3(1.,.95,.8)*pow(d,8.)*.25+vec3(1.,.98,.9)*pow(d,600.)*3.;
      if(h<0.)c=vec3(.84,.92,.98);gl_FragColor=vec4(c,1.);}`});c.add(new ke(new ei(800,32,16),b))}function we(){let b=document.createElement("canvas");b.width=256,b.height=128;let _=b.getContext("2d");for(let C=0;C<26;C++){let R=40+Math.random()*176,O=50+Math.random()*40,Y=18+Math.random()*30,fe=_.createRadialGradient(R,O,0,R,O,Y);fe.addColorStop(0,"rgba(255,255,255,.75)"),fe.addColorStop(1,"rgba(235,242,250,0)"),_.fillStyle=fe,_.beginPath(),_.arc(R,O,Y,0,7),_.fill()}let y=new En(b);return y.colorSpace=Dt,y}let Pe=[];{let b=we();for(let _=0;_<9;_++){let y=new mn(new pn({map:b,transparent:!0,depthWrite:!1,fog:!1,color:16777215})),C=-1.2+_*.3;y.position.set(Math.sin(C)*420,60+_%3*22,-Math.cos(C)*420),y.scale.set(220+_%3*60,70+_%2*30,1),c.add(y),Pe.push({s:y,a:C,sp:.002+_%3*.001})}}c.add(new ti(15923199,6126165,1.15));let Ye=new Cn(16773336,2.9);Ye.position.set(-45,110,-10),Ye.castShadow=!0,Ye.shadow.mapSize.set(a?512:2048,a?512:2048),Object.assign(Ye.shadow.camera,{left:-60,right:60,top:50,bottom:-50,near:10,far:220}),Ye.shadow.bias=-5e-4,Ye.shadow.normalBias=.03,c.add(Ye);let le=new Cn(12572927,.5);le.position.set(-40,15,-80),c.add(le);let ne=new ki().load(t+"models/waternormals.jpg");ne.wrapS=ne.wrapT=Gn;let Te=xi.merge([We.fog,{t:{value:0},hm:{value:null},wn:{value:null},sunDir:{value:new F},TS:{value:he}}]);Te.hm.value=pe,Te.cs={value:ge},Te.wn.value=ne,Te.sunDir.value.set(-.55,.35,-1).normalize();{let b=new Zt(2400,2400,240,240);b.rotateX(-Math.PI/2);let _=new Mn({uniforms:Te,transparent:!0,fog:!0,depthWrite:!1,vertexShader:`uniform float t;varying vec3 wp;
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
      }`}),y=new ke(b,_);y.renderOrder=2,location.search.includes("nowater")||c.add(y)}let ht=new Hi;ht.setMeshoptDecoder(zr);let Mt={},je=b=>Mt[b]||(Mt[b]=ht.loadAsync(t+b));async function Ie(b,_,y,C={}){let R=await je(b),O=C.skinned?Ri(R.scene):R.scene.clone(!0);return O.traverse(Y=>{Y.isMesh&&(Y.castShadow=C.shadow!==!1,Y.receiveShadow=!0,Y.material&&Y.material.map&&(Y.material.map.anisotropy=4))}),O.position.set(_,C.y!==void 0?C.y:A(_,y),y),O.rotation.y=C.ry||0,C.s&&O.scale.setScalar(C.s),(C.parent||c).add(O),C.skinned&&(O.userData.clips=R.animations),O}let Be=b=>`models/q/${b}.glb`,K=[],cn=[],ct={};function mt(b,_,y){let C=new nn({color:16765802,transparent:!0,opacity:.6,depthWrite:!1,fog:!1,blending:An}),R=new ke(new Fi(_,_+1,72),C);R.rotation.x=-Math.PI/2,R.position.y=y,b.add(R);let O=R.clone();O.material=C.clone(),b.add(O),K.push(Y=>{let fe=Y*.5%1;O.scale.setScalar(1+fe*.45),O.material.opacity=.6*(1-fe),C.opacity=.45+Math.sin(Y*3)*.15})}function tt(b,_,y,C){let R=document.createElement("canvas");R.width=R.height=64;let O=R.getContext("2d"),Y=O.createRadialGradient(32,32,0,32,32,32);Y.addColorStop(0,"rgba(235,230,225,.85)"),Y.addColorStop(1,"rgba(235,230,225,0)"),O.fillStyle=Y,O.fillRect(0,0,64,64);let fe=new En(R),V=[];for(let U=0;U<10;U++){let W=new mn(new pn({map:fe,transparent:!0,depthWrite:!1}));b.add(W),V.push(W)}K.push(U=>V.forEach((W,Oe)=>{let st=(U*.22+Oe/V.length)%1;W.position.set(_+st*2.4+Math.sin(st*5+Oe)*.3,y+st*7,C-st),W.scale.setScalar(.9+st*3.2),W.material.opacity=.6*(1-st)*Math.min(1,st*6)}))}let vt=null;function H(b,_,y){if(!vt){let R=document.createElement("canvas");R.width=R.height=64;let O=R.getContext("2d"),Y=O.createRadialGradient(32,32,0,32,32,32);Y.addColorStop(0,"rgba(255,255,255,1)"),Y.addColorStop(.25,"rgba(255,255,255,.55)"),Y.addColorStop(1,"rgba(255,255,255,0)"),O.fillStyle=Y,O.fillRect(0,0,64,64),vt=new En(R),vt.colorSpace=Dt}let C=new mn(new pn({map:vt,color:b,transparent:!0,opacity:y,depthWrite:!1,blending:An,fog:!1}));return C.scale.setScalar(_),C}function L(b,_,y,C=c,R=1){let O=new ke(new ei(.18,8,6),new nn({color:16769184}));O.position.set(b,_,y),C.add(O);let Y=H(16752704,3.4*Math.sqrt(R),.55);Y.position.set(b,_,y),C.add(Y);let fe=Math.random()*9;K.push(V=>{let U=1+Math.sin(V*11+fe)*.12+Math.sin(V*23+fe)*.08;Y.material.opacity=.55*U,O.scale.setScalar(U)})}function E(b,_,y=1,C=Math.random()*3){let R=new hi(b),O=b.userData.clips.find(fe=>fe.name===_)||b.userData.clips[0],Y=R.clipAction(O);return Y.timeScale=y,Y.play(),R.setTime(C),R.__off=C,cn.push(R),{mix:R,a:Y}}function Q(b,_,y,C){let R=document.createElement("canvas");R.width=b,R.height=_,y(R.getContext("2d"),b,_);let O=new En(R);return O.colorSpace=Dt,O.anisotropy=4,C&&(O.wrapS=O.wrapT=Gn,O.repeat.set(C[0],C[1])),O}let be=Q(256,128,(b,_,y)=>{b.fillStyle="#6f6455",b.fillRect(0,0,_,y);for(let C=0;C<4;C++)for(let R=-1;R<6;R++){let O=C%2*24,Y=150+(R*7+C*13+20)%6*11;b.fillStyle=`rgb(${Y},${Y-12},${Y-32})`,b.fillRect(R*48+O+2,C*32+2,44,28),b.fillStyle="#ffffff22",b.fillRect(R*48+O+2,C*32+2,44,4)}},[12,1]),ye=Q(128,128,(b,_,y)=>{for(let C=0;C<8;C++){let R=120+C*37%5*12;b.fillStyle=`rgb(${R},${R*.66|0},${R*.4|0})`,b.fillRect(0,C*16,_,15),b.fillStyle="#2a170a",b.fillRect(0,C*16+15,_,1),b.fillRect(C*53%128,C*16,2,15)}},[1,6]),Ce=Q(128,64,b=>{for(let _=0;_<8;_++)b.fillStyle=_%2?"#f4e7cb":"#b52a2c",b.fillRect(_*16,0,16,64);b.fillStyle="#00000030",b.fillRect(0,54,128,10)}),ze=Q(128,192,(b,_,y)=>{b.fillStyle="#8f1a1d",b.fillRect(0,0,_,y),b.fillStyle="#e9b85e",b.fillRect(0,0,_,8),b.fillRect(0,y-8,_,8),b.fillStyle="#f3ead8",b.beginPath(),b.arc(64,82,30,0,7),b.fill(),b.fillRect(46,100,36,22),b.fillStyle="#8f1a1d",b.beginPath(),b.arc(52,82,8,0,7),b.arc(76,82,8,0,7),b.fill(),b.strokeStyle="#f3ead8",b.lineWidth=9,b.lineCap="round",b.beginPath(),b.moveTo(26,128),b.lineTo(102,168),b.moveTo(102,128),b.lineTo(26,168),b.stroke()}),Ge=new Xt({color:7028770,roughness:.85}),et=new Xt({map:be,roughness:.92,side:dn});function Qe(b,_,y,C,R,O,Y={}){let fe=new ke(b,_);return fe.position.set(y,C,R),fe.castShadow=Y.cast!==!1,fe.receiveShadow=!0,Y.rx&&(fe.rotation.x=Y.rx),Y.ry&&(fe.rotation.y=Y.ry),Y.rz&&(fe.rotation.z=Y.rz),O.add(fe),fe}function yt(b,_,y,C,R,O=1){let Y=Qe(new Zt(.9*O,1.35*O),new Xt({map:ze,side:dn,roughness:.8}),_,y,C,b,{ry:R}),fe=Math.random()*6;return K.push(V=>{Y.rotation.x=Math.sin(V*2+fe)*.06}),Y}function Me(b,_=1.05,y=2.1){for(let C=1;C<b.length;C++){let[R,O]=b[C-1],[Y,fe]=b[C],V=Math.hypot(Y-R,fe-O),U=Math.atan2(Y-R,fe-O),W=ye.clone();W.needsUpdate=!0,W.repeat.set(1,V/1.6),Qe(new Bt(y,.18,V),new Xt({map:W,roughness:.9}),(R+Y)/2,_,(O+fe)/2,c,{ry:U});for(let st=0;st<=Math.ceil(V/2.2);st++){let It=st/Math.ceil(V/2.2),wn=R+(Y-R)*It,Rt=O+(fe-O)*It;for(let $t of[-1,1]){let Ae=Math.cos(U)*$t*(y/2),$e=-Math.sin(U)*$t*(y/2);Qe(new Vt(.12,.14,3.2,8),Ge,wn+Ae,_-1.2,Rt+$e,c),Qe(new Vt(.1,.1,.9,8),Ge,wn+Ae,_+.5,Rt+$e,c)}}let Oe=st=>Qe(new Bt(.08,.08,V),Ge,(R+Y)/2+Math.cos(U)*st*(y/2),_+.9,(O+fe)/2-Math.sin(U)*st*(y/2),c,{ry:U});Oe(-1),Oe(1)}}async function zt(b,_,y,C){let R=new _t;R.position.set(_,0,y),R.rotation.y=C,b.add(R);for(let[U,W]of[[-1.4,-.8],[1.4,-.8],[-1.4,.8],[1.4,.8]])Qe(new Vt(.08,.09,2.6,6),Ge,U,1.3,W,R);Qe(new Bt(2.9,.9,1.1),new Xt({map:ye,roughness:.9}),0,.45,.3,R);let O=Qe(new Zt(3.4,2.2,8,1),new Xt({map:Ce,side:dn,roughness:.8}),0,2.6,0,R,{rx:-Math.PI/2+.32}),Y=O.geometry.attributes.position;for(let U=0;U<Y.count;U++)Y.setZ(U,Math.sin((Y.getX(U)+1.7)/3.4*Math.PI*4)*.05);Y.needsUpdate=!0,O.geometry.computeVertexNormals();let fe=Qe(new Zt(3.4,.35),new Xt({map:Ce,side:dn}),0,2.08,1.15,R),V=[14698540,15902001,10338874,14169148];for(let U=0;U<9;U++)Qe(new ei(.16,8,6),new Xt({color:V[U%4],roughness:.6}),-1.1+U%5*.5,.98,.1+(U/5|0)*.35,R);return R}function Ut(){let b=["Characters_Anne","Characters_Captain_Barbarossa","Characters_Henry","Characters_Mako","Characters_Shark","Characters_Sharky","Characters_Skeleton","Environment_Cliff1","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4","Environment_House1","Environment_House2","Environment_House3","Environment_LargeBones","Environment_PalmTree_1","Environment_PalmTree_2","Environment_PalmTree_3","Environment_Rock_1","Environment_Rock_2","Environment_Rock_3","Environment_Rock_4","Environment_Rock_5","Environment_Sawmill","Environment_Skulls","Prop_Barrel","Prop_Bottle_2","Prop_Bucket_Fishes","Prop_Cannon","Prop_Chest_Gold","Prop_Coins","Prop_Fish_Mackerel","Prop_Fish_Tuna","Prop_GoldBag","Ship_Large","Ship_Small"].map(Be);for(let _ of[...b,"models/kenney/pirate/boat-row-small.glb","models/kenney/pirate/flag-pirate-high.glb","models/kenney/town/fountain-round.glb","models/kenney/town/lantern.glb"])je(_).catch(()=>{delete Mt[_]})}async function St(){Ut();let b=new _t;b.position.set(S.adventure.x,0,S.adventure.z),c.add(b),ct.adventure=b;let _=await Ie(Be("Ship_Large"),0,0,{parent:b,y:.3,ry:.08,s:1.5});_.traverse(Ae=>{if(Ae.isMesh&&Ae.material.map){let $e=Ae.material.map.image,Ve=document.createElement("canvas");Ve.width=$e.width,Ve.height=$e.height;let wt=Ve.getContext("2d");wt.drawImage($e,0,0);let Et=Ve.width/32;wt.fillStyle="#9c1c20",wt.fillRect(12*Et,0,Et,Et),wt.fillStyle="#6e1216",wt.fillRect(5*Et,0,Et,Et);let Wt=new En(Ve);Wt.flipY=!1,Wt.colorSpace=Dt,Ae.material=Ae.material.clone(),Ae.material.map=Wt}}),K.push(Ae=>{_.position.y=.35+Math.sin(Ae*1)*.22,_.rotation.z=Math.sin(Ae*.8)*.03,_.rotation.x=Math.sin(Ae*.6)*.015}),mt(b,13,.25);let y=new nn({color:16769952,transparent:!0,opacity:.1,depthWrite:!1,side:dn,blending:An,fog:!1}),C=new ke(new Vt(4,8,30,40,1,!0),y);C.position.y=15,K.push(Ae=>{y.opacity=.07+Math.sin(Ae*2)*.03});for(let[Ae,$e,Ve,wt,Et]of[["Characters_Captain_Barbarossa",-1.5,.3,.4,"Wave"],["Characters_Anne",3.5,-.6,-.3,"Idle"],["Characters_Mako",-6.2,.2,1.2,"Yes"]]){let Wt=await Ie(Be(Ae),$e,Ve,{parent:_,skinned:!0,y:2.05,ry:wt,s:.8});E(Wt,Et)}Me([[q.x,-6],[q.x,3.2]]),Me([[-19,1.5],[-12,3.4],[-5.6,3.4]]),Me([[19,1.5],[12,3.4],[6,3.4]]);for(let[Ae,$e]of[[-12,3.4],[12,3.4],[q.x,2.5]])Qe(new Vt(.09,.09,2,6),Ge,Ae+1.05,2.1,$e+.9,c),L(Ae+1.05,3.2,$e+.9,c,.6);for(let[Ae,$e]of[[-6,-3.5],[-3,-1]])L(Ae,2.6,$e);await Ie(Be("Prop_Barrel"),-6.2,-2,{y:1.25}),await Ie(Be("Prop_Barrel"),-6.6,-1.2,{y:1.25,ry:1}),await Ie(Be("Prop_Bucket_Fishes"),-2.6,-4,{y:1.25});let R=new _t;R.position.set(S.tavern.x,S.tavern.y,S.tavern.z),c.add(R),ct.tavern=R,await Ie(Be("Environment_House1"),0,0,{parent:R,y:0,ry:.55,s:.9}),tt(R,-2.5,7.5,-1),L(3.5,2.2,2.6,R,.8),L(-4,2.2,3.6,R,.8);for(let[Ae,$e]of[[2.5,5.2],[5.5,3.2],[-.8,6.4]]){Qe(new Vt(.75,.75,.1,16),Ge,Ae,.95,$e,R),Qe(new Vt(.12,.2,.9,8),Ge,Ae,.45,$e,R),await Ie(Be("Prop_Bottle_2"),Ae+.2,$e,{parent:R,y:1,s:.6}),await Ie(Be("Prop_Barrel"),Ae-1.1,$e+.3,{parent:R,y:0,s:.8}),await Ie(Be("Prop_Barrel"),Ae+1.1,$e-.2,{parent:R,y:0,s:.8});let Ve=H(16756832,2.6,.35);Ve.position.set(Ae,1.4,$e),R.add(Ve)}{let Ae=new _t;R.add(Ae);let $e=new F(-3.5,3.2,3.8),Ve=new F(7,3.2,1.5);Qe(new Vt(.08,.08,3.3,6),Ge,Ve.x,1.6,Ve.z,R);for(let wt=0;wt<=14;wt++){let Et=wt/14,Wt=$e.clone().lerp(Ve,Et);Wt.y-=Math.sin(Et*Math.PI)*.7;let ft=new ke(new ei(.09,6,4),new nn({color:16767120}));ft.position.copy(Wt),Ae.add(ft)}}for(let[Ae,$e,Ve,wt,Et]of[["Characters_Henry",1.4,6.2,"Yes",2.4],["Characters_Mako",6.4,4.2,"Idle",3.9]]){let Wt=await Ie(Be(Ae),$e,Ve,{parent:R,skinned:!0,y:0,ry:Et,s:1.35});E(Wt,wt)}let O=new _t;O.position.set(S.hq.x,S.hq.y,S.hq.z),c.add(O),ct.hq=O,await Ie(Be("Environment_House3"),0,0,{parent:O,y:0,ry:.25,s:1.25}),await Ie("models/kenney/pirate/flag-pirate-high.glb",-5.2,2.6,{parent:O,y:0,s:1.2}),await Ie("models/kenney/pirate/flag-pirate-high.glb",5.2,3.4,{parent:O,y:0,s:1.2}),await Ie(Be("Prop_Cannon"),-3,4.4,{parent:O,y:.4,ry:.4}),await Ie(Be("Prop_Cannon"),3.2,4.8,{parent:O,y:.4,ry:.1}),L(0,2.5,3.2,O,.8),yt(O,-2,2.6,3.4,0),yt(O,2.2,2.6,3.6,0);let Y=new _t;Y.position.set(S.vault.x,S.vault.y,S.vault.z),c.add(Y),ct.vault=Y,await Ie(Be("Environment_Skulls"),0,0,{parent:Y,y:1.2,ry:-.35,s:1.3}),await Ie(Be("Prop_Chest_Gold"),-.5,4.2,{parent:Y,y:0,ry:-.3}),await Ie(Be("Prop_GoldBag"),1.6,4.6,{parent:Y,y:0}),await Ie(Be("Prop_Coins"),-2.2,4.8,{parent:Y,y:0}),await Ie(Be("Prop_Coins"),.9,5.6,{parent:Y,y:0,ry:1});let fe=H(16760896,7,.5);fe.position.set(0,2,5),Y.add(fe),K.push(Ae=>{fe.intensity=9+Math.sin(Ae*4)*3}),At(Y,0,1,4.8);let V=new _t;V.position.set(S.market.x,S.market.y,S.market.z),c.add(V),ct.market=V,await Ie(Be("Environment_House2"),3.5,-3,{parent:V,y:0,ry:-.5,s:.9});for(let[Ae,$e,Ve]of[[-4,1.5,.5],[-.3,3.2,.15],[3.6,3.8,-.25]])await zt(V,Ae,$e,Ve);let U=await Ie(Be("Characters_Anne"),-.3,2.2,{parent:V,skinned:!0,y:0,ry:0,s:1.35});E(U,"Wave");for(let[Ae,$e,Ve]of[["Prop_Bucket_Fishes",-4.6,3],["Prop_Barrel",4.6,2],["Prop_Fish_Tuna",-1.3,4.6]])await Ie(Be(Ae),$e,Ve,{parent:V,y:0,ry:Math.random()*6});let W=new _t;W.position.set(S.arena.x,S.arena.y,S.arena.z),c.add(W),ct.arena=W;{let Ve=Math.PI*1.5+.4,wt=Math.PI*2-.8;Qe(new Ws(6.6-.3,48),new Xt({color:14925962,roughness:1}),0,.06,0,W,{rx:-Math.PI/2,cast:!1}),Qe(new Vt(6.6,6.6+.35,2.6,56,1,!0,Ve,wt),et,0,1.3,0,W),Qe(new Vt(6.6-.55,6.6-.55,1.4,56,1,!0,Ve,wt),et,0,.7,0,W);let Et=Qe(new Fi(6.6-.55,6.6+.02,56,1,Ve-Math.PI/2,wt),new Xt({color:10260346,roughness:.9,side:dn}),0,2.6,0,W,{rx:-Math.PI/2});Et.rotation.z=Math.PI;for(let Wt=0;Wt<30;Wt++){let ft=Ve+wt*(Wt+.5)/30;Qe(new Bt(.55,.55,.45),et,Math.sin(ft)*(6.6-.2),2.85,Math.cos(ft)*(6.6-.2),W,{ry:ft})}for(let Wt of[Ve+.05,Ve+wt-.05])Qe(new Bt(.9,3.6,.9),et,Math.sin(Wt)*(6.6-.2),1.8,Math.cos(Wt)*(6.6-.2),W),L(Math.sin(Wt)*(6.6-.2),3.9,Math.cos(Wt)*(6.6-.2),W,.9);for(let Wt=0;Wt<6;Wt++){let ft=Ve+wt*(Wt+.5)/6;yt(W,Math.sin(ft)*(6.6+.4),1.5,Math.cos(ft)*(6.6+.4),ft,1.1)}for(let Wt of[Ve+wt*.3,Ve+wt*.7])L(Math.sin(Wt)*(6.6-.2),3.3,Math.cos(Wt)*(6.6-.2),W,.6)}let Oe=await Ie(Be("Characters_Sharky"),-1.3,0,{parent:W,skinned:!0,y:.06,ry:Math.PI/2,s:1.35});E(Oe,"Sword",1,0);let st=await Ie(Be("Characters_Henry"),1.3,0,{parent:W,skinned:!0,y:.06,ry:-Math.PI/2,s:1.35});E(st,"Sword",1,.45);for(let[Ae,$e,Ve]of[["Characters_Skeleton","Yes",1.9],["Characters_Anne","Wave",2.5],["Characters_Mako","Yes",3.6]]){let wt=Ve,Et=await Ie(Be(Ae),Math.cos(wt)*4.6,Math.sin(wt)*4.6,{parent:W,skinned:!0,y:0,ry:-wt-Math.PI/2,s:1.35});E(Et,$e)}let It=(()=>{let Ae=7;return()=>(Ae=Ae*16807%2147483647)/2147483647})(),wn=0;for(let Ae=0;Ae<400&&wn<46;Ae++){let $e=(It()-.5)*110,Ve=(It()-.5)*70-6,wt=A($e,Ve),Et=M($e,Ve);if(wt<.5||Et>.55||oe($e,Ve)<2.5||Object.values(S).some(ft=>Math.hypot(ft.x-$e,ft.z-Ve)<(ft===S.adventure?15:9)))continue;let Wt=await Ie(Be("Environment_PalmTree_"+(1+Ae%3)),$e,Ve,{ry:It()*6,s:1.1+It()*.6});it(Wt),wn++}for(let[Ae,$e,Ve,wt,Et]of[["Environment_Cliff2",-40,-26,.5,1.6],["Environment_Cliff3",38,-28,2,1.7],["Environment_Cliff4",0,-36,1,1.8],["Environment_Cliff1",-48,-6,1,1.4],["Environment_Cliff1",49,-8,3,1.3],["Environment_Cliff4",-60,30,1,1.4],["Environment_Cliff2",64,26,2.4,1.3]])await Ie(Be(Ae),$e,Ve,{ry:wt,s:Et,y:Math.max(-1,A($e,Ve)-1)});for(let Ae=0;Ae<26;Ae++){let $e=It()*6.28,Ve=Math.cos($e)*(36+It()*18),wt=Math.sin($e)*(22+It()*12)-8,Et=A(Ve,wt);Et>1||Et<-1.5||await Ie(Be("Environment_Rock_"+(1+Ae%5)),Ve,wt,{ry:It()*6,s:1.5+It()*2.5,y:Et-.2})}await Ie(Be("Environment_LargeBones"),-15,13,{ry:.8,s:.8,y:A(-15,13)-.3}),await Ie(Be("Environment_Sawmill"),-20,-14,{ry:.5,s:1.6});for(let[Ae,$e]of[[-3,-10],[6,-12],[-12,-8],[16,-8],[-20,-3],[23,-3]]){let Ve=A(Ae+1.4,$e);await Ie("models/kenney/town/lantern.glb",Ae+1.4,$e,{s:2.4}),L(Ae+1.4,Ve+3.3,$e,c,.55)}await Ie("models/kenney/town/fountain-round.glb",0,-10,{s:2.2});for(let[Ae,$e,Ve,wt,Et]of[["Environment_Cliff2",-150,-170,.4,5],["Environment_Cliff3",-60,-210,1.4,4],["Environment_Cliff4",110,-190,2.2,5.5],["Environment_Cliff1",190,-130,.8,4]])await Ie(Be(Ae),$e,Ve,{ry:wt,s:Et,y:-2});for(let[Ae,$e,Ve]of[[70,.03,0],[86,.022,2.6]]){let wt=await Ie(Be("Ship_Small"),0,0,{y:0,s:1.6});K.push(Et=>{let Wt=Ve+Et*$e;wt.position.set(Math.cos(Wt)*Ae,Math.sin(Et*1.3+Ve)*.2,10+Math.sin(Wt)*Ae*.5),wt.rotation.y=-Wt+Math.PI,wt.rotation.z=Math.sin(Et+Ve)*.05})}{let Ae=await Ie(Be("Ship_Large"),0,0,{y:0,s:1.1});K.push($e=>{let Ve=3.8+$e*.015;Ae.position.set(Math.cos(Ve)*110,Math.sin($e)*.2-.2,-60+Math.sin(Ve)*40),Ae.rotation.y=-Ve+Math.PI})}for(let[Ae,$e]of[[0,22],[2.7,27]]){let Ve=await Ie("models/kenney/pirate/boat-row-small.glb",0,$e,{y:0,s:1.1});K.push(wt=>{let Et=(wt*.03+Ae*.2)%1;Ve.position.x=-45+Et*90,Ve.position.y=Math.sin(wt*2+Ae)*.1-.15,Ve.rotation.y=Math.PI/2,Ve.rotation.z=Math.sin(wt*1.7)*.05})}{let Ae=await Ie(Be("Characters_Shark"),0,0,{skinned:!0,y:-.6,s:1.2});E(Ae,"Swim"),K.push($e=>{let Ve=$e*.25;Ae.position.set(14+Math.cos(Ve)*9,-.55,26+Math.sin(Ve)*5),Ae.rotation.y=-Ve})}for(let Ae=0;Ae<3;Ae++){let $e=await Ie(Be("Prop_Fish_Mackerel"),0,0,{y:-5,s:.7,shadow:!1}),Ve=Ae*2.3,wt=[-14,10,30][Ae],Et=[24,30,22][Ae];K.push(Wt=>{let ft=(Wt+Ve)%5/1.1;if(ft>1){$e.visible=!1;return}$e.visible=!0,$e.position.set(wt+ft*3,-.3+Math.sin(ft*Math.PI)*1.8,Et),$e.rotation.z=(.5-ft)*2.2})}let Rt=["Characters_Henry","Characters_Anne","Characters_Mako","Characters_Sharky","Characters_Captain_Barbarossa","Characters_Skeleton"],$t=0;for(let Ae of T)for(let $e=0;$e<2;$e++)await ut(Be(Rt[$t++%Rt.length]),Ae,$t);for(let[Ae,$e,Ve,wt,Et]of[["Characters_Henry",-1.5,-13,"Idle",0],["Characters_Anne",.2,-13.8,"Yes",2.6],["Characters_Mako",-22,4.6,"No",1],["Characters_Sharky",-20.6,5.8,"Idle",3.8],["Characters_Skeleton",13,-15,"Wave",.3]]){let Wt=await Ie(Be(Ae),$e,Ve,{skinned:!0,ry:Et,s:1.35});E(Wt,wt)}qt()}async function ut(b,_,y){let C=await Ie(b,_[0][0],_[0][1],{skinned:!0,s:1.35}),{a:R}=E(C,"Walk",1.15),O=[],Y=0;for(let U=1;U<_.length;U++){let W=_[U-1],Oe=_[U],st=Math.hypot(Oe[0]-W[0],Oe[1]-W[1]);O.push({a:W,b:Oe,l:st}),Y+=st}let fe=1.3+y%3*.2,V=y*9.7;K.push(U=>{let W=(U*fe+V)%(2*Y),Oe=W>Y;Oe&&(W=2*Y-W);for(let st of O){if(W<=st.l){let It=W/st.l,wn=st.a[0]+(st.b[0]-st.a[0])*It,Rt=st.a[1]+(st.b[1]-st.a[1])*It;C.position.set(wn+(Oe?.7:-.7),A(wn,Rt),Rt);let $t=st.b[0]-st.a[0],Ae=st.b[1]-st.a[1];Oe&&($t=-$t,Ae=-Ae),C.rotation.y=Math.atan2($t,Ae);break}W-=st.l}})}function it(b){let _=Math.random()*6;K.push(y=>{b.rotation.z=Math.sin(y*.9+_)*.025,b.rotation.x=Math.sin(y*.7+_)*.02})}function At(b,_,y,C){let R=new fn,O=40,Y=new Float32Array(O*3);R.setAttribute("position",new ln(Y,3));let fe=new Qi({color:16771488,size:.25,transparent:!0,depthWrite:!1,blending:An}),V=new fs(R,fe);b.add(V),K.push(U=>{for(let W=0;W<O;W++){let Oe=(U*.35+W/O)%1,st=W*2.4;Y[W*3]=_+Math.cos(st)*(1+W%3*.6),Y[W*3+1]=y+Oe*3.5,Y[W*3+2]=C+Math.sin(st)*(1+W%3*.6)}R.attributes.position.needsUpdate=!0,fe.opacity=.9})}function qt(){let b=new fn;b.setAttribute("position",new sn([-.7,.15,0,-.1,0,.05,.1,0,.05,.7,.15,0,0,0,-.25,0,0,.3],3)),b.setIndex([0,1,4,1,5,4,2,3,4,2,4,5]),b.computeVertexNormals();let _=new Dr({color:15262942,side:dn});for(let y=0;y<9;y++){let C=new ke(b.clone(),_);C.scale.setScalar(.9),c.add(C);let R=14+y*4,O=20+y%3*3,Y=y*1.3,fe=.2+y%4*.04,V=C.geometry.attributes.position;K.push(U=>{let W=Y+U*fe;C.position.set(Math.cos(W)*R,O+Math.sin(U+y)*1,-4+Math.sin(W)*R*.6),C.rotation.y=-W;let Oe=Math.sin(U*7+y)*.35;V.setY(0,.15+Oe),V.setY(3,.15+Oe),V.needsUpdate=!0})}}let Gt=new Pn(1,1,{samples:a?0:4,type:Qn}),gt=new kr(o,Gt);gt.addPass(new Hr(c,u));let Fe=new Ms(new lt(256,256),.45,.55,.82);gt.addPass(Fe),Fe.enabled=!a,gt.addPass(new Br);let k=new ys({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;
    float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.16);c=(c-.5)*1.05+.5;
    c*=vec3(1.,1.,1.01);float v=smoothstep(.95,.3,length((vUv-.5)*vec2(1.25,1.)));c*=mix(.7,1.,v);gl_FragColor=vec4(c,1.);}`});gt.addPass(k);let He={adventure:"\u2693",hq:"\u2605",vault:"\u25C6",tavern:"\u{1F37A}",market:"$",arena:"\u2694"},Re={};function pt(b){return b==="adventure"?`<i>${He[b]}</i><b>${S[b].name||""}</b><em>\u25B6 ${P.play||"PLAY"}</em>`:`<i>${He[b]}</i><b>${S[b].name||""}</b>`}for(let b in S){let _=document.createElement("button");_.className="lbl"+(b==="adventure"?" main":""),_.dataset.id=b,_.innerHTML=b==="adventure"?`<i>${He[b]}</i><b>${S[b].name||""}</b><em>\u25B6 ${P.play||"PLAY"}</em>`:`<i>${He[b]}</i><b>${S[b].name||""}</b>`,_.setAttribute("aria-label",S[b].name||b),_.onclick=y=>{y.stopPropagation(),hn(b)},i.append(_),Re[b]=_}let Xe=new F,jt=1,Lt=1;function j(){var fe;let b=Date.now(),_=j.avoid,y=_&&b-_.at<=500?_.list:(j.avoid={at:b,list:((fe=e.avoid)==null?void 0:fe.call(e))||[]}).list,C=j.sizes;if(!C||C.n!==Object.keys(Re).length){C=j.sizes={n:Object.keys(Re).length};for(let V in Re)C[V]=[Re[V].offsetWidth||90,Re[V].offsetHeight||30]}let R=Object.keys(Re).map(V=>({id:V,el:Re[V],width:C[V][0],height:C[V][1]})),O=[];for(let V of R){let U=S[V.id];Xe.set(U.x,(U.y||0)+U.label,U.z).project(u);let W=V.width/2+6,Oe=Math.min(jt-W,Math.max(W,(Xe.x*.5+.5)*jt)),st=Math.max(V.height+4,(-Xe.y*.5+.5)*Lt),It=0;for(let wn of y){let Rt=Oe-W,$t=Oe+W,Ae=st-V.height,$e=st;$t>wn.left&&Rt<wn.right&&$e>wn.top&&Ae<wn.bottom&&(It=wn.bottom-Ae+4)}O.push({...V,x:Oe,y:st+It})}for(let V of O){let U=`translate(${V.x}px,${V.y}px) translate(-50%,-100%)`;V.el.style.transform!==U&&(V.el.style.transform=U)}let Y=O.find(V=>V.id==="adventure");Y&&(r.style.left=Y.x+Y.width/2-24+"px",r.style.top=Y.y-14+"px"),r.style.display=De?"none":""}let ae=new F(0,0,-13),ce=0,Z=0,Ee=0,De=null,Ke=0,ve=null,dt=0,bt=()=>ve!==null?ve*1e3:performance.now(),Ht=b=>b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2;function on(b){let _=e.skipIntro?1:Math.min(1,b/4.5),y=Ht(_),C=150-88*y,R=ga.lerp(88,24,y)*Math.PI/180,O=(1-y)*.6+Z*.45+(_>=1?Math.sin((b-4.5)*.15)*.06:0),Y=ae.x,fe=ae.y,V=ae.z,U=C;if(De){let W=S[De],Oe=Ht(Math.min(1,(bt()-Ke)/1e3));Y+=(W.x-Y)*Oe*.6,V+=(W.z-V)*Oe*.6,fe+=((W.y||0)-fe)*Oe*.6,U=C*(1-.3*Oe)}return u.position.set(Y+Math.sin(O)*Math.cos(R)*U,fe+Math.sin(R)*U,V+Math.cos(O)*Math.cos(R)*U),u.lookAt(Y,fe,V),_}function hn(b){De=b,Ke=bt(),un&&(i.querySelectorAll(".lbl").forEach(_=>_.classList.toggle("sel",_.dataset.id===b)),hn.until=bt()+1400,clearTimeout(hn.tm),hn.tm=setTimeout(()=>{var _;Nt||(_=e.onSelect)==null||_.call(e,b)},520))}let rt=new Nr,an=new lt,w=null,z=b=>{w={x:b.clientX,d:Ee}},G=b=>{w&&(Ee=ga.clamp(w.d-(b.clientX-w.x)/jt*2,-1,1))},te=b=>{if(w&&Math.abs(b.clientX-w.x)<8){let _=s.getBoundingClientRect();an.set((b.clientX-_.left)/jt*2-1,-(b.clientY-_.top)/Lt*2+1),rt.setFromCamera(an,u);let y=rt.intersectObjects(Object.values(ct),!0);if(y.length){let C=y[0].object;for(;C&&!Object.values(ct).includes(C);)C=C.parent;let R=Object.keys(ct).find(O=>ct[O]===C);R&&hn(R)}}w=null};n.addEventListener("pointerdown",z),addEventListener("pointermove",G),addEventListener("pointerup",te);function ee(b=!1){j.sizes=null,j.avoid=null;let _=Math.max(1,s.clientWidth),y=Math.max(1,s.clientHeight);jt=_,Lt=y,o.setSize(_,y,!1),gt.setSize(_,y),Fe.resolution.set(_/2,y/2),u.aspect=_/y,u.fov=_/y>1.6?47:62,u.updateProjectionMatrix(),b&&un&&j()}ee();let X=()=>{!Nt&&s.clientWidth&&s.clientHeight&&ee(!0)};addEventListener("resize",X);let Le=typeof ResizeObserver=="function"?new ResizeObserver(X):null;Le==null||Le.observe(s);let Ue=0;function Je(){let b=Math.max(0,(bt()-ce)/1e3),_=Math.min(Math.max(b-dt,0),.1);dt=b,Z+=(Ee-Z)*.08,(s.clientWidth!==jt||s.clientHeight!==Lt)&&ee(),De&&bt()>hn.until&&(De=null,i.querySelectorAll(".lbl").forEach(R=>R.classList.remove("sel")));let y=on(b);Te.t.value=b,de.value=b;let C=u.position.distanceTo(ae);c.fog.near=C*2,c.fog.far=C*7;for(let R of Pe)R.a+=R.sp*_,R.s.position.x=Math.sin(R.a)*420,R.s.position.z=-Math.cos(R.a)*420;for(let R of K)R(b);for(let R of cn)ve!==null?R.setTime(b+(R.__off||0)):R.update(_);j(),s.classList.toggle("h3dReady",un&&y>=.85),a?(Ue++,o.shadowMap.needsUpdate=Ue%12===1,o.render(c,u)):gt.render()}let xt={getDelta(){return 0}},at=0,nt=!1,Nt=!1,un=!1,Qt={last:0,n:0,ms:0},Ln=a?1e3/30-2:0;function Pt(b=0){if(at=0,nt||Nt||(at=requestAnimationFrame(Pt),ve!==null)||Ln&&Qt.last&&b-Qt.last<Ln)return;let _=bt();Je();let y=bt()-_;if(Qt.last=b,a&&(Qt.n++,Qt.ms+=y,Qt.n>=60)){let C=Qt.ms/Qt.n;Qt.n=0,Qt.ms=0;let R=o.getPixelRatio();C>28&&R>.8&&(o.setPixelRatio(Math.max(.75,R-.25)),ee())}}return{loaded:St().then(()=>{Nt||(un=!0,ce=performance.now(),s.classList.add("h3dLoaded"),!at&&!nt&&(at=requestAnimationFrame(Pt)))}),pause(){nt=!0,cancelAnimationFrame(at),at=0},resume(){Nt||(nt=!1,e.skipIntro=!0,X(),xt.getDelta(),!at&&un&&(at=requestAnimationFrame(Pt)))},select:hn,step(b){ve=b,Je()},setLabels(b){j.sizes=null,Object.assign(P,b||{});for(let _ in Re)S[_].name=P[_],Re[_].innerHTML=pt(_),Re[_].setAttribute("aria-label",P[_]||_)},get state(){return{ready:un,paused:nt,disposed:Nt,focus:De,labels:Object.keys(Re).length}},dispose(){var b,_;Nt=!0,cancelAnimationFrame(at),at=0,clearTimeout(hn.tm),n.removeEventListener("pointerdown",z),removeEventListener("pointermove",G),removeEventListener("pointerup",te),removeEventListener("resize",X),Le==null||Le.disconnect(),c.traverse(y=>{y.geometry&&y.geometry.dispose();let C=y.material;C&&(Array.isArray(C)?C:[C]).forEach(R=>{for(let O in R)R[O]&&R[O].isTexture&&R[O].dispose();R.dispose()})}),(b=gt.dispose)==null||b.call(gt),Gt.dispose(),o.dispose(),(_=o.forceContextLoss)==null||_.call(o),n.remove(),i.remove(),r.remove()}}}function nx(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}window.PirateHarbor3D={create:tx,supported:nx,version:1};function Go(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ix(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=Go(t,n),l=Go(t+1,n),u=Go(t,n+1),h=Go(t+1,n+1);return c+(l-c)*a+(u-c)*o+(c-l-u+h)*a*o}function Gr(s,e,t=4){let n=0,i=.5,r=1;for(let a=0;a<t;a++)n+=i*ix(s*r,e*r),r*=2.03,i*=.5;return n}var Es=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},va=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Ql=(s,e,t)=>s+(e-s)*t;function Vr(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new En(t);return r.colorSpace=Dt,r}var Ys={sea:[[.06,.9,1.25,1,.2],[.09,-.6,1.05,.45,.35],[.21,.3,1.9,.22,-.8],[.035,.2,.7,1.4,.1]],shore:[[.12,.5,1.1,.12,.2],[.2,-.4,1.4,.07,.9],[.05,.1,.6,.18,.1]]};function Wr(s,e,t,n){let i=0;for(let[r,a,o,c,l]of s)i+=Math.sin((e*a+t*(1-Math.abs(a)))*r*6.283+n*o+l)*c;return i}function sx(s,e={}){let t=e.base||"harbor/harbor3d/",n=matchMedia("(pointer:coarse)").matches,i=document.createElement("canvas");i.className="st3d",i.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",s.prepend(i);let r=new ci({canvas:i,antialias:!1,powerPreference:"high-performance"});r.debug.checkShaderErrors=!1,r.setPixelRatio(Math.min(devicePixelRatio||1,n?1.5:1.75)),r.shadowMap.enabled=!0,r.shadowMap.type=qs,r.toneMapping=Ai,r.toneMappingExposure=1;let a=new li,o=new bn(42,1,.3,2e3),c=new Hi;c.setMeshoptDecoder(zr);let l={},u=j=>l[j]||(l[j]=c.loadAsync(t+j)),h=j=>`models/q/${j}.glb`,d=new _t;a.add(d);let m=!1,g=[],x=[],p=null,f=0,M=0,v=!1,A=!1,N=0,P=performance.now(),S={pos:new F(0,30,80),look:new F,tpos:new F(0,30,80),tlook:new F,rate:1.4},q=0,T=0,D=[],oe=Vr([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),he=Vr([[0,"rgba(200,200,205,.85)"],[.6,"rgba(150,150,160,.35)"],[1,"rgba(120,120,130,0)"]]),se=Vr([[0,"rgba(40,36,36,.9)"],[.6,"rgba(30,28,28,.4)"],[1,"rgba(20,20,20,0)"]]),B=Vr([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),re=Vr([[0,"rgba(235,245,255,1)"],[1,"rgba(200,225,245,0)"]],32),de=Vr([[0,"rgba(70,120,70,1)"],[1,"rgba(40,80,50,0)"]],32);async function ge(j,ae,ce,Z,Ee={}){let De=await u(j);if(v)return new _t;let Ke=Ee.skinned?Ri(De.scene):De.scene.clone(!0);return Ke.traverse(ve=>{ve.isMesh&&(ve.castShadow=Ee.shadow!==!1,ve.receiveShadow=!0)}),Ke.position.set(ae,ce,Z),Ke.rotation.y=Ee.ry||0,Ee.s&&Ke.scale.setScalar(Ee.s),(Ee.parent||d).add(Ke),Ee.skinned&&(Ke.userData.clips=De.animations),Ke}function pe(j,ae,ce=1,Z=Math.random()*2){let Ee=new hi(j),De=j.userData.clips.find(ve=>ve.name===ae)||j.userData.clips[0],Ke=Ee.clipAction(De);return Ke.timeScale=ce,Ke.play(),Ee.setTime(Z),x.push(Ee),j.userData.mix=Ee,j.userData.act=Ke,Ke}function me(j,ae,ce=1){let Z=j.userData.mix;if(!Z)return;let Ee=j.userData.clips.find(Ke=>Ke.name===ae);if(!Ee)return;let De=Z.clipAction(Ee);De.timeScale=ce,De.reset().play(),j.userData.act&&j.userData.act!==De&&j.userData.act.crossFadeTo(De,.3,!1),j.userData.act=De}function we(j,ae,ce=0){j.traverse(Z=>{if(!Z.isMesh||!Z.material.map)return;let Ee=Z.material.map.image,De=document.createElement("canvas");De.width=Ee.width,De.height=Ee.height;let Ke=De.getContext("2d");Ke.drawImage(Ee,0,0);let ve=De.width/32;for(let[bt,Ht,on]of ae)Ke.fillStyle=on,Ke.fillRect(bt*ve,Ht*ve,ve,ve);ce&&(Ke.fillStyle=`rgba(10,10,16,${ce})`,Ke.globalCompositeOperation="multiply",Ke.fillRect(0,0,De.width,De.height));let dt=new En(De);dt.flipY=!1,dt.colorSpace=Dt,Z.material=Z.material.clone(),Z.material.map=dt})}let Pe=[[12,0,"#9c1c20"],[5,0,"#6e1216"]],Ye=[[12,0,"#1b1b22"],[5,0,"#3a0d10"]];function le(j,ae,ce){var Ee;let Z=new mn(new pn({map:j,transparent:!0,depthWrite:!1,blending:ce.add?An:Ii,color:ce.color||16777215,fog:ce.fog!==!1}));return Z.position.copy(ae),Z.scale.setScalar(ce.size||1),d.add(Z),D.push({s:Z,v:ce.v?ce.v.clone():new F,g:ce.g||0,life:ce.life||1,age:0,grow:ce.grow||0,size:ce.size||1,a:(Ee=ce.a)!=null?Ee:1,drag:ce.drag||0}),Z}function _e(j){var ae;for(let ce=D.length-1;ce>=0;ce--){let Z=D[ce];if(Z.age+=j,Z.age>=Z.life||!Z.s.parent){(ae=Z.s.parent)==null||ae.remove(Z.s),Z.s.material.dispose(),D.splice(ce,1);continue}Z.v.y-=Z.g*j,Z.drag&&Z.v.multiplyScalar(Math.max(0,1-Z.drag*j)),Z.s.position.addScaledVector(Z.v,j);let Ee=Z.age/Z.life;Z.s.scale.setScalar(Z.size*(1+Z.grow*Ee)),Z.s.material.opacity=Z.a*(1-Ee)*Math.min(1,Z.age*12)}}let ne=(j,ae,ce)=>new F(j,ae,ce);function Te(j,ae=1){le(oe,j,{size:5*ae,life:.3,add:!0,grow:.6,fog:!1});for(let ce=0;ce<16*ae;ce++)le(B,j,{size:.5+Math.random()*.6,life:.5+Math.random()*.5,add:!0,g:9,v:ne((Math.random()-.5)*14,Math.random()*12,(Math.random()-.5)*14)});for(let ce=0;ce<10*ae;ce++){let Z=new ke(new Bt(.12,.12,.6+Math.random()*.6),Mt);Z.position.copy(j),d.add(Z);let Ee=ne((Math.random()-.5)*16,6+Math.random()*10,(Math.random()-.5)*16),De=ne(Math.random()*9,Math.random()*9,Math.random()*9),Ke=0;g.push(ve=>{Z.parent&&(Ke+=ve,Ee.y-=22*ve,Z.position.addScaledVector(Ee,ve),Z.rotation.x+=De.x*ve,Z.rotation.y+=De.y*ve,(Z.position.y<-1||Ke>3)&&(Z.parent.remove(Z),Z.geometry.dispose()))})}for(let ce=0;ce<8;ce++)le(he,j.clone().add(ne((Math.random()-.5)*2,0,(Math.random()-.5)*2)),{size:2,life:2.2+Math.random()*1.5,grow:1.8,a:.45,color:6973552,v:ne(-1-Math.random()*2,1.5+Math.random()*1.5,0),drag:.4});q=Math.min(1.2,q+.6*ae),T=Math.max(T,.25)}function ht(j,ae=1){for(let ce=0;ce<30*ae;ce++)le(re,j,{size:.35+Math.random()*.4,life:1+Math.random()*.5,g:18,v:ne((Math.random()-.5)*6,8+Math.random()*9*ae,(Math.random()-.5)*6)});for(let ce=0;ce<6;ce++)le(he,j,{size:3,life:1.6,grow:1.5,a:.5,v:ne(0,2,0)})}let Mt=new Xt({color:7029800,roughness:.8});function je(j,ae,ce=1){let Z=new ni(16742954,14*ce,14*ce,1.6);Z.position.copy(ae),j.add(Z);let Ee=[];for(let Ke=0;Ke<7;Ke++){let ve=new mn(new pn({map:B,transparent:!0,depthWrite:!1,blending:An}));j.add(ve),Ee.push(ve)}let De=[];for(let Ke=0;Ke<9;Ke++){let ve=new mn(new pn({map:he,color:4868174,transparent:!0,depthWrite:!1}));j.add(ve),De.push(ve)}g.push((Ke,ve)=>{Z.intensity=14*ce*(1+Math.sin(ve*17)*.2+Math.sin(ve*7.3)*.15),Ee.forEach((dt,bt)=>{let Ht=(ve*1.6+bt/Ee.length)%1;dt.position.set(ae.x+Math.sin(bt*3+ve*5)*.3*ce,ae.y+Ht*2.2*ce,ae.z+Math.cos(bt*2+ve*4)*.3*ce),dt.scale.setScalar((1.6-Ht)*ce),dt.material.opacity=(1-Ht)*.9}),De.forEach((dt,bt)=>{let Ht=(ve*.22+bt/De.length)%1;dt.position.set(ae.x-Ht*4*ce+Math.sin(bt+ve)*.4,ae.y+1.5*ce+Ht*10*ce,ae.z+Ht*1.5),dt.scale.setScalar((1.5+Ht*5)*ce),dt.material.opacity=.42*(1-Ht)*Math.min(1,Ht*5)})})}let Be=new ki().load(t+"models/waternormals.jpg");Be.wrapS=Be.wrapT=Gn;function K(j,ae){let ce=Ys[j],Z=xi.merge([We.fog,{t:{value:0},wn:{value:null},moon:{value:new F},deep:{value:new Ne},shal:{value:new Ne},sky:{value:new Ne},spec:{value:new Ne},foamK:{value:1},hm:{value:null},hmOn:{value:0},TS:{value:1},flash:{value:0}}]);Z.wn.value=Be,Z.moon.value.copy(ae.sun).normalize(),Z.deep.value.set(ae.deep),Z.shal.value.set(ae.shal),Z.sky.value.set(ae.sky),Z.spec.value.set(ae.spec),Z.foamK.value=ae.foam,ae.hm&&(Z.hm.value=ae.hm,Z.hmOn.value=1,Z.TS.value=ae.TS);let Ee=ce.map(([dt,bt,Ht,on,hn])=>`h+=sin((p.x*${bt.toFixed(3)}+p.z*${(1-Math.abs(bt)).toFixed(3)})*${(dt*6.283).toFixed(4)}+t*${Ht.toFixed(3)}+${hn.toFixed(3)})*${on.toFixed(3)};`).join(""),De=new Zt(900,900,300,300);De.rotateX(-Math.PI/2);let Ke=new Mn({uniforms:Z,fog:!0,transparent:!!ae.hm,depthWrite:!ae.hm,vertexShader:`uniform float t;varying vec3 wp;varying float hh;
        #include <fog_pars_vertex>
        void main(){vec3 p=(modelMatrix*vec4(position,1.)).xyz;float h=0.;${Ee}hh=h;p.y+=h;wp=p;vec4 mvPosition=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mvPosition;
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
        }`}),ve=new ke(De,Ke);return ve.renderOrder=2,d.add(ve),g.push((dt,bt)=>{Z.t.value=bt,Z.flash.value=T,ve.position.x=Math.round(o.position.x/7)*7,ve.position.z=Math.round(o.position.z/7)*7}),{U:Z,set:ce}}function cn(j,ae,ce,Z,Ee,De){let Ke=new Mn({side:zn,depthWrite:!1,fog:!1,uniforms:{sun:{value:Z.clone().normalize()},top:{value:new Ne(j)},mid:{value:new Ne(ae)},hor:{value:new Ne(ce)},sc:{value:new Ne(Ee)},flash:{value:0},t:{value:0}},vertexShader:"varying vec3 vp;void main(){vp=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`uniform vec3 sun,top,mid,hor,sc;uniform float flash,t;varying vec3 vp;
        float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
        void main(){float h=vp.y;vec3 c=mix(hor,mid,smoothstep(0.,.14,h));c=mix(c,top,smoothstep(.14,.6,h));
          float d=max(dot(vp,sun),0.);c+=sc*(pow(d,10.)*.35+pow(d,${De?"900.":"400."})*${De?"2.2":"3."});
          vec2 q=vp.xz/(h+.25)*2.+vec2(t*.01,0.);float cl=n2(q*2.)*.5+n2(q*4.3)*.3+n2(q*9.)*.2;cl=smoothstep(.45,.85,cl)*smoothstep(-.02,.25,h);
          c=mix(c,mix(mid*.7,hor*1.1,.4)+sc*pow(d,4.)*.4,cl*.75);c+=vec3(.75,.8,1.)*flash*(.15+cl*.35);
          if(h<0.)c=hor;gl_FragColor=vec4(c,1.);}`}),ve=new ke(new ei(900,32,16),Ke);return d.add(ve),g.push((dt,bt)=>{Ke.uniforms.flash.value=T,Ke.uniforms.t.value=bt,ve.position.copy(o.position)}),Ke}let ct=new Pn(1,1,{samples:4,type:Qn}),mt=new kr(r,ct);mt.addPass(new Hr(a,o));let tt=new Ms(new lt(256,256),.6,.6,.78);mt.addPass(tt),mt.addPass(new Br);let vt=new ys({uniforms:{tDiffuse:{value:null},tint:{value:new F(1,1,1)},vig:{value:.62}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec3 tint;uniform float vig;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.12);c=(c-.5)*1.06+.5;c*=tint;
      float v=smoothstep(.95,.28,length((vUv-.5)*vec2(1.2,1.)));c*=mix(vig,1.,v);gl_FragColor=vec4(c,1.);}`});mt.addPass(vt);let H={};async function L(j){a.fog=new yo(1450543,.0105),a.background=new Ne(726048),vt.uniforms.tint.value.set(.95,1,1.08),vt.uniforms.vig.value=.5,tt.strength=.7;let ae=ne(.45,.32,-1);cn(330260,1385274,1713976,ae,12375295,!0),d.add(new ti(8229816,791584,.55));let ce=new Cn(11060479,1.1);ce.position.set(60,70,-90),ce.castShadow=!0,ce.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(ce.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:10,far:260}),d.add(ce),d.add(ce.target);let Z=new Cn(14674175,0);Z.position.set(-30,90,-40),d.add(Z),H.boltLight=Z,H.water=K("sea",{sun:ae,deep:398111,shal:1192777,sky:2900056,spec:13032703,foam:1}),H.ship=new _t,d.add(H.ship),H.list=0,H.turn=0,H.heading=0,H.listT=0;let Ee=await ge(h("Ship_Large"),0,0,0,{parent:H.ship,s:1.4});if(j!==f)return;we(Ee,Pe),H.hull=Ee;let De=new ni(16756832,10,18,1.5);De.position.set(-6,6,0),H.ship.add(De),H.crew=[];for(let[rt,an,w,z]of[["Characters_Henry",2.5,.8,"Idle"],["Characters_Mako",-4,-.6,"Idle"],["Characters_Sharky",6,.3,"Idle"],["Characters_Anne",-1,-1.2,"Idle"]]){let G=await ge(h(rt),an,2.9,w,{parent:H.ship,skinned:!0,s:1.05,ry:Math.random()*6});pe(G,z),H.crew.push(G)}H.enemies=[];for(let[rt,an,w,z]of[[62,-30,1.45,Math.PI*.85],[96,-62,1.3,Math.PI*.9],[34,-84,1.2,Math.PI*.8]]){let G=new _t;d.add(G);let te=await ge(h("Ship_Large"),0,0,0,{parent:G,s:w});if(j!==f)return;we(te,Ye,.35),G.position.set(rt+70,0,an-30),G.rotation.y=z,G.userData={to:ne(rt,0,an),ry:z,show:0,target:0,turn:z};let ee=new ni(16747066,0,22,1.6);ee.position.set(0,2.5,2),G.add(ee),G.userData.port=ee,H.enemies.push(G)}let Ke=await ge(h("Characters_Captain_Barbarossa"),-2,2.9,1.5,{parent:H.enemies[0],skinned:!0,s:1.25,ry:-Math.PI/2});Ke.traverse(rt=>{rt.isMesh&&(rt.material=rt.material.clone(),rt.material.color.setRGB(.22,.2,.26))}),pe(Ke,"Idle"),H.admiral=Ke;let ve=new ni(16728112,0,9,1.6);ve.position.set(-.5,6,3.5),H.enemies[0].add(ve),H.admEye=ve,H.island=new _t,H.island.position.set(-160,-2,-120),d.add(H.island);for(let[rt,an,w,z,G]of[["Environment_Cliff2",0,0,10,.4],["Environment_Cliff3",45,10,8,1.2],["Environment_Cliff4",-50,5,9,2.3]])await ge(h(rt),an,0,w,{parent:H.island,s:z,ry:G,shadow:!1});let dt=n?900:1600,bt=new Float32Array(dt*6),Ht=new fn;Ht.setAttribute("position",new ln(bt,3));let on=Array.from({length:dt},()=>[Math.random()*90-45,Math.random()*40,Math.random()*90-45]),hn=new Ir(Ht,new Vs({color:10467030,transparent:!0,opacity:.35,fog:!1}));d.add(hn),g.push((rt,an)=>{hn.position.set(o.position.x,0,o.position.z);for(let w=0;w<dt;w++){let z=on[w],G=((z[1]-an*38)%40+40)%40;bt[w*6]=z[0],bt[w*6+1]=G+o.position.y-20,bt[w*6+2]=z[2],bt[w*6+3]=z[0]-.5,bt[w*6+4]=G+o.position.y-21.6,bt[w*6+5]=z[2]+.2}Ht.attributes.position.needsUpdate=!0}),g.push((rt,an)=>{let w=H.ship;H.listT=Ql(H.listT,H.list,1-Math.pow(.3,rt)),H.turn>0&&(H.turn=Math.min(1,H.turn+rt/3.4),H.heading=-.58*va(H.turn));let z=H.turn>0?7*va(H.turn):0;w.position.x+=-Math.cos(H.heading)*z*rt,w.position.z+=Math.sin(H.heading)*z*rt;let G=w.position.x,te=w.position.z,ee=Wr(Ys.sea,G,te,an),X=Wr(Ys.sea,G+6,te,an)-Wr(Ys.sea,G-6,te,an),Le=Wr(Ys.sea,G,te+3,an)-Wr(Ys.sea,G,te-3,an);w.position.y=ee*.8-.4-H.listT*4,w.rotation.set(0,H.heading,0),w.rotateZ(-X*.045),w.rotateX(Le*.07+H.listT);for(let Ue of H.enemies){let Je=Ue.userData;Je.show=Ql(Je.show,Je.target,1-Math.pow(.45,rt)),Ue.position.lerpVectors(ne(Je.to.x+70,0,Je.to.z-30),Je.to,va(Math.min(1,Je.show))),Ue.rotation.y=Ql(Ue.rotation.y,Je.turn,1-Math.pow(.5,rt));let xt=Wr(Ys.sea,Ue.position.x,Ue.position.z,an);Ue.position.y=xt*.8-.4,Ue.rotation.z=Math.sin(an*.8+Ue.position.x)*.04,Ue.visible=Je.show>.02}H.boltLight&&(H.boltLight.intensity=T*2.5),H.admEye&&(H.admEye.intensity=H.admT?9+Math.sin(an*9)*3:0)}),ze(ne(-34,9,34),ne(4,4,0),99)}let E=240,Q=220,be=null;function ye(j,ae){let Z=(6+Math.sin(j*.05)*4+(Gr(j*.03,3)-.5)*6-ae)*.12;return Z>0?Z=Math.min(Z,.9+(Z-.9)*.25+Es(-12,-40,ae)*(4+Gr(j*.04,ae*.04)*10)):Z=Z*2.2,Z+=Es(46,70,Math.abs(j))*Es(-10,10,-ae+5)*6*Gr(j*.05,ae*.05),Math.max(-8,Z)+(Gr(j*.3,ae*.3)-.5)*.12}async function Ce(j){a.fog=new Ui(15975328,110,380),a.background=new Ne(15773840),vt.uniforms.tint.value.set(1.04,1,.97),vt.uniforms.vig.value=.66,tt.strength=.55;let ae=ne(-.7,.12,-1);cn(5074598,15900794,16765600,ae,16769456,!1),d.add(new ti(16770252,5599306,.9));let ce=new Cn(16769732,.9);ce.position.set(40,30,70),d.add(ce);let Z=new Cn(16764826,2.3);Z.position.set(-70,45,-60),Z.castShadow=!0,Z.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(Z.shadow.camera,{left:-50,right:50,top:40,bottom:-40,near:10,far:240}),d.add(Z),d.add(Z.target);let Ee=new Zt(E,E,Q-1,Q-1);Ee.rotateX(-Math.PI/2);let De=Ee.attributes.position,Ke=new Uint8Array(Q*Q*4);for(let X=0;X<De.count;X++){let Le=ye(De.getX(X),De.getZ(X));De.setY(X,Le),Ke[X*4]=Math.max(0,Math.min(255,Math.round((Le+10)/20*255))),Ke[X*4+3]=255}Ee.computeVertexNormals();let ve=new Float32Array(De.count*3),dt=Ee.attributes.normal,bt=new Ne,Ht=new Ne,on=new Ne(12096610),hn=new Ne(15323032),rt=new Ne(5208626),an=new Ne(2377759),w=new Ne(8747628);for(let X=0;X<De.count;X++){let Le=De.getX(X),Ue=De.getZ(X),Je=De.getY(X),xt=Gr(Le*.1,Ue*.1),at=Gr(Le*.4+7,Ue*.4);bt.copy(on).lerp(hn,Es(0,.5,Je)),Ht.copy(rt).lerp(an,Es(.3,.8,xt)),bt.lerp(Ht,Es(1+xt,1.8+xt,Je)),bt.lerp(w,Es(.8,.65,dt.getY(X))*Es(1,2,Je));let nt=.88+at*.24;ve[X*3]=bt.r*nt,ve[X*3+1]=bt.g*nt,ve[X*3+2]=bt.b*nt}Ee.setAttribute("color",new ln(ve,3));let z=new ke(Ee,new Xt({vertexColors:!0,roughness:.95}));z.receiveShadow=!0,d.add(z),be=new zs(Ke,Q,Q,Kn,mi),be.minFilter=be.magFilter=Fn,be.needsUpdate=!0,H.water=K("shore",{sun:ae,deep:876156,shal:4769730,sky:16041636,spec:16769720,foam:.4,hm:be,TS:E});let G=(X,Le)=>ye(X,Le),te=(()=>{let X=11;return()=>(X=X*16807%2147483647)/2147483647})();H.bush=[];for(let X=0;X<150;X++){let Le=(te()-.5)*170,Ue=-10-te()*46;if(Math.abs(Le-26)<5&&Ue>-30)continue;let Je=await ge(h("Environment_PalmTree_"+(1+X%3)),Le,G(Le,Ue)-.1,Ue,{ry:te()*6,s:(Ue>-16?1:1.6)+te()*1.4,shadow:Ue>-30});if(j!==f)return;let xt=te()*6;g.push((at,nt)=>{Je.rotation.z=Math.sin(nt*.8+xt)*.02}),Math.abs(Le-30)<12&&Ue>-26&&H.bush.push(Je)}for(let[X,Le,Ue,Je,xt]of[["Environment_Cliff2",-70,-30,3.5,.6],["Environment_Cliff3",75,-25,3,2],["Environment_Cliff1",-50,12,2.2,1.1],["Environment_Cliff4",60,18,2.4,2.8]])await ge(h(X),Le,G(Le,Ue)-1.5,Ue,{s:Je,ry:xt});for(let X=0;X<18;X++){let Le=(te()-.5)*110,Ue=4+te()*10,Je=G(Le,Ue);Je<-1.2||Le>-14&&Le<24||await ge(h("Environment_Rock_"+(1+X%5)),Le,Je-.2,Ue,{s:1.4+te()*2,ry:te()*6})}H.ship=new _t,H.ship.position.set(-22,-.9,24),H.ship.rotation.set(0,.5,.13),d.add(H.ship);let ee=await ge(h("Ship_Large"),0,0,0,{parent:H.ship,s:1.4});if(j===f){we(ee,[[12,0,"#7a2a24"],[5,0,"#4a1412"]]),je(H.ship,ne(3,3.4,.5),.8),je(H.ship,ne(-6,3.2,-.5),.6),je(H.ship,ne(-1,9,0),.5),H.shipBase=H.ship.position.clone(),g.push((X,Le)=>{let Ue=H.arrive!=null?va(Math.min(1,H.arrive)):1;H.arrive!=null&&H.arrive<1&&(H.arrive+=X/3.2),H.ship.position.set(H.shipBase.x-(1-Ue)*46,-.9+Math.sin(Le*.9)*.12,H.shipBase.z+(1-Ue)*4),H.ship.rotation.z=.13+Math.sin(Le*.7)*.015}),await ge("models/kenney/pirate/boat-row-small.glb",-8,G(-8,10)+.1,10,{ry:2.2,s:1.6});for(let[X,Le,Ue,Je]of[["Prop_Barrel",-9,-1,0],["Prop_Barrel",-8,0,1],["Prop_Chest_Closed",-5,-.5,.4],["Prop_Bucket",-2,5,0],["Prop_Anchor",-10,7,1.2]])try{await ge(h(X),Le,G(Le,Ue),Ue,{ry:Je,s:1.2})}catch{}H.camp=ne(-7,G(-7,-2),-2),je(d,H.camp.clone().add(ne(0,.2,0)),.45),H.crew=[];for(let[X,Le,Ue,Je,xt]of[["Characters_Henry",-4,9,1,"Idle"],["Characters_Mako",-6,11,.6,"Idle"],["Characters_Sharky",-9,12,2,"Idle"],["Characters_Skeleton",-5,13,1.4,"Idle"]]){let at=await ge(h(X),Le,G(Le,Ue),Ue,{skinned:!0,s:1.15,ry:Je});pe(at,xt),at.userData.home=ne(Le,0,Ue),H.crew.push(at)}H.slots={sailor:ne(-2,0,2.5),scarlet:ne(2,0,1.8),shark:ne(6,0,2.6),captain:ne(10,0,2),crab:ne(14,0,2.8)};for(let X in H.slots)H.slots[X].y=G(H.slots[X].x,H.slots[X].z);H.heroPos=ne(0,0,0),H.heroPath=null,H.H=G,ze(ne(-60,18,70),ne(-10,2,10),99)}}function ze(j,ae,ce=1.4){S.follow=null,S.tpos.copy(j),S.tlook.copy(ae),S.rate=ce,ce>=99&&(S.pos.copy(j),S.look.copy(ae))}function Ge(j,ae){if(S.follow){let[Ke,ve]=S.follow();S.tpos.copy(Ke),S.tlook.copy(ve)}let ce=1-Math.pow(.5,j*S.rate);S.pos.lerp(S.tpos,ce),S.look.lerp(S.tlook,ce);let Z=q>0?(Math.sin(ae*61)*.5+Math.sin(ae*37)*.3)*q*q:0,Ee=q>0?Math.cos(ae*53)*.4*q*q:0,De=p==="sea"?Math.sin(ae*.9)*.5:Math.sin(ae*.4)*.08;o.position.set(S.pos.x+Z,S.pos.y+Ee+De,S.pos.z),o.lookAt(S.look.x,S.look.y+De*.5,S.look.z),q=Math.max(0,q-j*1.6),T=Math.max(0,T-j*2.2)}function et(j){return H.ship.localToWorld(j.clone())}let Qe=(j,ae)=>{let ce=setTimeout(()=>{v||j()},ae);yt.push(ce)},yt=[];function Me(j,ae={}){var Z,Ee,De,Ke;let ce=H.ship;switch(j){case"establish":ze(ne(-26,7,30),ne(4,5,0),.9);break;case"enemiesEmerge":(Z=H.enemies)==null||Z.forEach((ve,dt)=>ve.userData.target=1-dt*.1),ze(ne(-30,12,44),ne(40,3,-25),.8),zt();break;case"gunsTurn":if(H.enemies){let ve=H.enemies[0];ve.userData.turn=Math.PI*1.02,ve.userData.port.intensity=6,ze(ne(30,8,8),ne(62,4,-30),1)}break;case"admiral":H.enemies&&(H.admT=1,S.follow=()=>{let ve=H.admiral.getWorldPosition(ne(0,0,0)).add(ne(0,2.2,0)),dt=H.ship.position.clone().sub(ve).setY(0).normalize();return[ve.clone().addScaledVector(dt,15).add(ne(dt.z*4,3,-dt.x*4)),ve.clone().add(ne(0,.4,0))]},S.rate=1.8,Qe(()=>{S.follow=null},2400),zt());break;case"broadside":ze(ne(-14,6,26),ne(2,5,0),1.3),Qe(()=>ze(ne(-30,11,40),ne(25,4,-12),.9),1900);break;case"listing":H.list=-.11,(Ee=H.crew)==null||Ee.forEach((ve,dt)=>me(ve,"Run",1.2)),ze(ne(-30,8,34),ne(2,5,0),1.1);break;case"cutRigging":Qe(()=>ut(),900);break;case"nearMiss":break;case"revealLand":zt(),ze(ne(-24,8,30),ne(-150,14,-110),.8),H.revealT=1.4;break;case"turnToIsland":H.turn=.001,S.rate=.8,S.follow=()=>[H.ship.localToWorld(ne(26,10,18)),H.ship.localToWorld(ne(-30,3,-6))];break;case"arrive":H.arrive=0,ze(ne(-6,8,50),ne(-26,3,18),.6);break;case"crewAshore":Ut(),ze(ne(-4,7,30),ne(0,2,4),.8);break;case"branchSnap":if(H.bush){let ve=M;for(let bt of H.bush)g.push((Ht,on)=>{let hn=on-ve;hn<2.4&&(bt.rotation.x=Math.sin(hn*14)*.08*(1-hn/2.4))});let dt=ne(30,5,-16);for(let bt=0;bt<18;bt++)le(de,dt,{size:.5,life:2.4,g:2,drag:.8,v:ne((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6)});St(dt),ze(ne(18,5,14),ne(30,4,-14),1.2),Qe(()=>ze(ne(4,6,24),ne(5,2,2),.8),2600)}break;case"rollCall":{let ve=["captain","scarlet","shark","sailor","crab"];ve.forEach((dt,bt)=>Qe(()=>{var on;let Ht=(on=H.slots)==null?void 0:on[dt];Ht&&ze(Ht.clone().add(ne(-1.5,2.6,8.5)),Ht.clone().add(ne(0,1.6,0)),2.2)},bt*680)),Qe(()=>ze(ne(4,6,24),ne(5,2,2),1),ve.length*680+200);break}case"selectFrame":ze(ne(5,9,30),ne(5,3,0),.9);break;case"heroStep":{let ve=((De=H.slots)==null?void 0:De[ae.hero])||ne(4,0,2);H.heroPos.copy(ve),H.heroStep=0,ze(ve.clone().add(ne(-2,2.6,8)),ve.clone().add(ne(1,1.5,0)),1.2);break}case"handMap":break;case"heroAshore":{let ve=H.heroPos.clone();H.heroPath={from:ve,to:ne(28,((Ke=H.H)==null?void 0:Ke.call(H,28,-20))||2,-20),k:0},ze(ne(ve.x+6,5,ve.z+14),ne(24,3,-10),.55);break}}}function zt(){T=1,H.island&&p==="sea"&&(H.revealT=Math.max(H.revealT||0,.8))}function Ut(){H.crew&&H.crew.forEach((j,ae)=>{let ce=j.position.clone(),Z=ne(-12+ae*2.4,0,-4-ae%2*1.8);Z.y=H.H(Z.x,Z.z);let Ee=-ae*.25;me(j,"Walk",1),g.push(De=>{if(Ee>=1)return;Ee+=De/4;let Ke=Math.max(0,Math.min(1,Ee));j.position.lerpVectors(ce,Z,Ke),j.position.y=H.H(j.position.x,j.position.z),j.rotation.y=Math.atan2(Z.x-ce.x,Z.z-ce.z),Ee>=1&&(me(j,ae%2?"Idle":"Yes",1),j.rotation.y=Math.atan2(H.camp.x-Z.x,H.camp.z-Z.z))})})}function St(j){let ae=new nn({color:2762272,side:dn});for(let ce=0;ce<7;ce++){let Z=new fn;Z.setAttribute("position",new sn([-.5,.1,0,0,0,0,.5,.1,0,0,0,-.2,0,0,.25],3)),Z.setIndex([0,1,3,1,2,3,0,1,4,1,2,4]);let Ee=new ke(Z,ae);Ee.position.copy(j).add(ne((Math.random()-.5)*6,Math.random()*3,(Math.random()-.5)*4)),d.add(Ee);let De=ne(-3-Math.random()*4,3+Math.random()*2,2+Math.random()*2),Ke=Z.attributes.position,ve=0;g.push((dt,bt)=>{if(!Ee.parent)return;ve+=dt,Ee.position.addScaledVector(De,dt),Ee.rotation.y=Math.atan2(De.x,De.z);let Ht=Math.sin(bt*20+ce)*.3;Ke.setY(0,.1+Ht),Ke.setY(2,.1+Ht),Ke.needsUpdate=!0,ve>5&&(Ee.parent.remove(Ee),Z.dispose())})}}function ut(){if(!H.ship)return;let j=new _t,ae=new ke(new Vt(.18,.22,8,8),Mt);ae.rotation.z=Math.PI/2,j.add(ae);let ce=new ke(new Zt(7,4,6,3),new Xt({color:9181725,side:dn,roughness:.9}));ce.position.y=-2,j.add(ce);let Z=et(ne(1,13,0));j.position.copy(Z),d.add(j);let Ee=ne(2,0,3),De=0,Ke=!1;Te(Z,.6),g.push(ve=>{var dt;Ke||(De+=ve,Ee.y-=14*ve,j.position.addScaledVector(Ee,ve),j.rotation.x+=ve*1.6,j.rotation.z+=ve*.7,j.position.y<-2&&(Ke=!0,ht(j.position.clone().setY(0),1.3),(dt=j.parent)==null||dt.remove(j)))})}let it=new ei(.35,10,8),At=new Xt({color:1447446,roughness:.5,metalness:.4});function qt(j=0,ae={},ce=.62){var w,z;let Z=((w=H.enemies)==null?void 0:w[j])||((z=H.enemies)==null?void 0:z[0]);if(!Z||!H.ship)return;let Ee=(H.shotN=(H.shotN||0)+1)%5,De=Z.localToWorld(ne(-6+Ee*3,2.6,2.6)),Ke=De.clone().sub(Z.position).setY(0).normalize();le(oe,De,{size:4,life:.25,add:!0,fog:!1});for(let G=0;G<8;G++)le(he,De,{size:2,life:2.4+Math.random(),grow:2.4,a:.6,v:Ke.clone().multiplyScalar(2+Math.random()*2).add(ne(0,1+Math.random(),0)),drag:.6});Z.userData.port.intensity=18,Qe(()=>{Z.userData.port.intensity=6},120);let ve=ae.mast?ne(1,12,0):ae.sail?ne(2,9,.5):ne((ae.lx||0)*.05,2.2+Math.random(),1.5),dt=ae.near,bt=new F;o.getWorldDirection(bt);let Ht=dt?o.position.clone().addScaledVector(bt.setY(0).normalize(),14).add(ne(3,0,0)).setY(0):ae.miss?et(ne(3,0,6)).setY(0):et(ve),on=new ke(it,At);on.position.copy(De),d.add(on);let hn=[],rt=0;g.push(()=>{on.parent&&(rt+=1/60)});let an=M;g.push((G,te)=>{if(!on.parent)return;let ee=Math.min(1,(te-an)/ce),X=De.clone().lerp(dt||ae.miss?Ht:et(ve),ee);X.y+=Math.sin(ee*Math.PI)*3.5,on.position.copy(X),Math.random()<.6&&le(he,X,{size:.6,life:.5,grow:1,a:.35}),ee>=1&&(on.parent.remove(on),ae.miss||dt?ht(X.setY(0),dt?1.6:1):(Te(X,ae.mast?1.3:1),!ae.sail&&!ae.mast&&(H.fires=(H.fires||0)+1)<=3&&je(H.ship,H.ship.worldToLocal(X.clone()),.7)))})}let Gt=new F,gt=new F;function Fe(j){if(p!=="shore"||!H.slots)return null;let ae=j==="hero"?H.heroPos:H.slots[j];if(!ae)return null;Gt.copy(ae).project(o),gt.copy(ae).add(ne(0,1.9,0)).project(o);let ce=i.clientWidth,Z=i.clientHeight;return Gt.z>1?null:{x:(Gt.x*.5+.5)*ce,y:(-Gt.y*.5+.5)*Z,px:Math.abs(gt.y-Gt.y)*.5*Z}}function k(j){if(p!=="shore"||!H.heroPath)return;let ae=H.heroPath;ae.k=Math.min(1,ae.k+j/4.5),H.heroPos.lerpVectors(ae.from,ae.to,va(ae.k)),H.heroPos.y=H.H(H.heroPos.x,H.heroPos.z),S.tlook.lerp(H.heroPos.clone().add(ne(0,1.5,0)),.05)}function He(){let j=Math.max(1,s.clientWidth),ae=Math.max(1,s.clientHeight);r.setSize(j,ae,!1),mt.setSize(j,ae),tt.resolution.set(j/2,ae/2),o.aspect=j/ae,o.fov=j/ae>1.6?42:56,o.updateProjectionMatrix()}He(),addEventListener("resize",He);let Re=0,pt=0;function Xe(j){if(N=0,v||A)return;N=requestAnimationFrame(Xe);let ae=Math.min(.05,(j-P)/1e3)||.016;P=j,(s.clientWidth!==Re||s.clientHeight!==pt)&&(Re=s.clientWidth,pt=s.clientHeight,He()),!m&&(jt(ae),mt.render())}function jt(j){M+=j;for(let ae of g.slice())ae(j,M);for(let ae of x)ae.update(j);_e(j),k(j),Ge(j,M),p==="sea"&&H.island&&(H.revealT=Math.max(0,(H.revealT||0)-j*.35),a.fog.density=.0105-Math.min(1,H.revealT)*.0062)}async function Lt(j){var Z;if(j===p)return;let ae=++f;p=j;for(let Ee of yt)clearTimeout(Ee);yt.length=0,d.traverse(Ee=>{var De,Ke;Ee.geometry&&!Ee.isSkinnedMesh&&((Ke=(De=Ee.geometry).dispose)==null||Ke.call(De))}),a.remove(d),d=new _t,a.add(d),g=[],x=[],D.length=0;for(let Ee in H)delete H[Ee];m=!0;let ce=j==="sea"?["Ship_Large","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Anne","Characters_Captain_Barbarossa","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4"].map(h):["Ship_Large","Environment_PalmTree_1","Environment_PalmTree_2","Environment_PalmTree_3","Environment_Cliff1","Environment_Cliff2","Environment_Cliff3","Environment_Cliff4","Environment_Rock_1","Environment_Rock_2","Environment_Rock_3","Environment_Rock_4","Environment_Rock_5","Prop_Barrel","Prop_Chest_Closed","Prop_Bucket","Prop_Anchor","Characters_Henry","Characters_Mako","Characters_Sharky","Characters_Skeleton"].map(h).concat(["models/kenney/pirate/boat-row-small.glb"]);try{await Promise.all(ce.map(Ee=>u(Ee).catch(()=>null))),await(j==="sea"?L(ae):Ce(ae)),ae===f&&((Z=r.compile)==null||Z.call(r,a,o))}catch(Ee){throw console.warn("Story3D",Ee&&Ee.message),Ee}finally{ae===f&&(m=!1,P=performance.now())}}return N=requestAnimationFrame(Xe),{setEnv:Lt,cue:Me,shoot:qt,bolt:zt,advance(j){let ae=Math.round(j*30);for(let ce=0;ce<ae;ce++)jt(1/30);mt.render()},get ready(){return!!H.ship},anchor:Fe,pause(){A=!0,cancelAnimationFrame(N),N=0},resume(){v||(A=!1,P=performance.now(),N||(N=requestAnimationFrame(Xe)))},dispose(){var j,ae;v=!0,cancelAnimationFrame(N);for(let ce of yt)clearTimeout(ce);removeEventListener("resize",He),a.traverse(ce=>{ce.geometry&&ce.geometry.dispose();let Z=ce.material;Z&&(Array.isArray(Z)?Z:[Z]).forEach(Ee=>{for(let De in Ee)Ee[De]&&Ee[De].isTexture&&Ee[De].dispose();Ee.dispose()})}),(j=mt.dispose)==null||j.call(mt),ct.dispose(),r.dispose(),(ae=r.forceContextLoss)==null||ae.call(r),i.remove()},get state(){return{env:p,ready:!!H.ship,fx:D.length,paused:A,cam:o.position.toArray().map(j=>+j.toFixed(1)),follow:!!S.follow,adm:H.admiral?H.admiral.getWorldPosition(new F).toArray().map(j=>+j.toFixed(1)):null}}}}window.PirateStory3D={create:sx,version:1};var ya=new F;function vi(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;ya.copy(e),ya[n]=0,ya.normalize();let l=.5*a/(a+o),u=1-ya.angleTo(s)/c;return Math.sign(ya[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Vo=class extends Bt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new F,c=new F,l=new F(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,g=new F,x=.5/i;for(let p=0,f=0;p<u.length;p+=3,f+=2)switch(o.fromArray(u,p),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[p+0]=l.x*Math.sign(o.x)+c.x*r,u[p+1]=l.y*Math.sign(o.y)+c.y*r,u[p+2]=l.z*Math.sign(o.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=vi(g,c,"z","y",r,n),d[f+1]=1-vi(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-vi(g,c,"z","y",r,n),d[f+1]=1-vi(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-vi(g,c,"x","z",r,e),d[f+1]=vi(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-vi(g,c,"x","z",r,e),d[f+1]=1-vi(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-vi(g,c,"x","y",r,e),d[f+1]=1-vi(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=vi(g,c,"x","y",r,e),d[f+1]=1-vi(g,c,"y","x",r,t);break}}};var rx={1:[[.5,.5]],2:[[.27,.27],[.73,.73]],3:[[.27,.27],[.5,.5],[.73,.73]],4:[[.27,.27],[.73,.27],[.27,.73],[.73,.73]],5:[[.27,.27],[.73,.27],[.5,.5],[.27,.73],[.73,.73]],6:[[.27,.25],[.73,.25],[.27,.5],[.73,.5],[.27,.75],[.73,.75]]};function ax(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(46,40,10,64,64,90);n.addColorStop(0,"#fffaf0"),n.addColorStop(1,"#e6d5b0"),t.fillStyle=n,t.fillRect(0,0,128,128);for(let[r,a]of rx[s])t.fillStyle=s===1?"#9a1e16":"#2a1206",t.beginPath(),t.arc(r*128,a*128,s===1?17:12,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.25)",t.beginPath(),t.arc(r*128-3,a*128-3,3,0,7),t.fill();let i=new En(e);return i.colorSpace=Dt,i.anisotropy=4,i}var ox=[3,4,1,6,2,5],cx={3:[1,0,0],4:[-1,0,0],1:[0,1,0],6:[0,-1,0],2:[0,0,1],5:[0,0,-1]};function lx(s){let e=document.createElement("canvas");e.style.cssText="width:100%;height:100%;display:block",s.append(e);let t=new ci({canvas:e,alpha:!0,antialias:!0});t.debug.checkShaderErrors=!1,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.outputColorSpace=Dt;let n=new li,i=new bn(32,1,.1,50);i.position.set(0,4.2,4.6),i.lookAt(0,.3,0),n.add(new ti(16773596,5911576,1.4));let r=new Cn(16767400,1.6);r.position.set(-2,5,3),n.add(r);let a=ox.map(S=>new Xt({map:ax(S),roughness:.35})),o=new ke(new Vo(1,1,1,4,.14),a);n.add(o);let c=document.createElement("canvas");c.width=c.height=64;{let S=c.getContext("2d"),q=S.createRadialGradient(32,32,2,32,32,32);q.addColorStop(0,"rgba(0,0,0,.55)"),q.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=q,S.fillRect(0,0,64,64)}let l=new ke(new Zt(1.6,1.6),new nn({map:new En(c),transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,n.add(l);let u=new F(0,1,0),h=new Dn,d=new Dn,m=new Dn,g=new F;function x(S){let q=new F(...cx[S]),T=new Dn().setFromUnitVectors(q,u);return new Dn().setFromAxisAngle(u,(Math.random()-.5)*1.2).multiply(T)}let p=null,f=0,M=!1;function v(){let S=Math.max(1,s.clientWidth),q=Math.max(1,s.clientHeight);t.setSize(S,q,!1),i.aspect=S/q,i.updateProjectionMatrix()}function A(){s.clientWidth&&e.width!==Math.round(s.clientWidth*t.getPixelRatio())&&v(),t.render(n,i)}function N(S){o.quaternion.copy(x(S)),o.position.set(0,.5,0),l.position.set(0,.01,0),l.scale.setScalar(1),A()}function P(S){if(f=0,M||!p)return;let q=Math.min(1,(S-p.start)/p.ms),T=1-Math.pow(1-q,3),D=p.from.x*(1-T),oe=p.from.z*(1-T),he=Math.abs(Math.sin(q*Math.PI*3.2))*(1-q)*(1-q)*1.6;o.position.set(D,.5+he,oe),m.setFromAxisAngle(p.axis,p.turns*(1-T)),o.quaternion.copy(p.q1).premultiply(m),l.position.set(D,.01,oe),l.scale.setScalar(1+he*.25),l.material.opacity=1-he*.3,A(),q<1?f=requestAnimationFrame(P):p=null}return v(),N(1),{roll(S,q=850){M||(cancelAnimationFrame(f),g.set(Math.random()-.5,Math.random()*.4,Math.random()-.5).normalize(),p={start:performance.now(),ms:q,from:new F(2.6*(Math.random()<.5?-1:1),0,-1.2+Math.random()*.6),q1:x(S),axis:g.clone(),turns:Math.PI*(5+Math.random()*3)},f=requestAnimationFrame(P))},show(S){M||(cancelAnimationFrame(f),p=null,N(S))},resize(){v(),A()},dispose(){var S;M=!0,cancelAnimationFrame(f),o.geometry.dispose(),a.forEach(q=>{q.map.dispose(),q.dispose()}),l.geometry.dispose(),l.material.map.dispose(),l.material.dispose(),t.dispose(),(S=t.forceContextLoss)==null||S.call(t),e.remove()}}}window.PirateDice3D={create:lx};var Xr=(s,e,t)=>s+(e-s)*t;function Ss(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([a,o])=>i.addColorStop(a,o)),n.fillStyle=i,n.fillRect(0,0,e,e);let r=new En(t);return r.colorSpace=Dt,r}function vd(s,e="#ffd34a",t=64){let n=document.createElement("canvas"),i=n.getContext("2d");i.font=`900 ${t}px system-ui,sans-serif`;let r=Math.ceil(i.measureText(s).width)+24;n.width=r,n.height=t+24,i.font=`900 ${t}px system-ui,sans-serif`,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=t/6,i.strokeStyle="#3a1806",i.strokeText(s,12,n.height/2),i.fillStyle=e,i.fillText(s,12,n.height/2);let a=new En(n);return a.colorSpace=Dt,{t:a,aspect:n.width/n.height}}var $l={grunt:3.2,runner:3,brute:4,boss:7.6},hx={grunt:"Characters_Skeleton",runner:"Characters_Sharky",brute:"Characters_Captain_Barbarossa"};function ux(s,e={}){let t=e.base||"harbor/harbor3d/",n=e.art||"bastion/",i=matchMedia("(pointer:coarse)").matches,r=document.createElement("canvas");r.className="bs3d",r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none",s.prepend(r);let a=new ci({canvas:r,antialias:!i,powerPreference:"high-performance"});a.debug.checkShaderErrors=!1,a.setPixelRatio(Math.min(devicePixelRatio||1,i?1.5:1.75)),a.shadowMap.enabled=!0,a.shadowMap.type=qs,a.toneMapping=Ai,a.toneMappingExposure=1.05;let o=new li;o.background=new Ne(15764058),o.fog=new Ui(15966320,120,330);let c=new bn(44,1,.3,1400),l=new Hi;l.setMeshoptDecoder(zr);let u={},h=b=>u[b]||(u[b]=l.loadAsync(b)),d=new ki,m=(b,_)=>{let y=d.load(b);return y.colorSpace=Dt,_&&(y.wrapS=y.wrapT=Gn,y.repeat.set(_[0],_[1]),y.anisotropy=4),y},g=new _t;g.scale.x=-1,o.add(g);let x=[],p=0,f=0,M=!1,v=!1,A=[],N=Ss([[0,"rgba(255,250,220,1)"],[.25,"rgba(255,190,90,.9)"],[1,"rgba(255,120,30,0)"]]),P=Ss([[0,"rgba(210,200,190,.85)"],[.6,"rgba(160,150,140,.35)"],[1,"rgba(120,110,100,0)"]]),S=Ss([[0,"rgba(255,240,180,1)"],[.35,"rgba(255,140,40,.85)"],[1,"rgba(200,40,10,0)"]]),q=Ss([[0,"rgba(235,200,140,.8)"],[1,"rgba(220,180,120,0)"]],32),T=Ss([[0,"rgba(255,255,210,1)"],[.4,"rgba(255,220,120,.7)"],[1,"rgba(255,200,80,0)"]],32),D=Ss([[0,"rgba(255,255,255,1)"],[.3,"rgba(255,214,150,.95)"],[1,"rgba(255,120,40,0)"]],32),oe=(()=>{let b=document.createElement("canvas");b.width=b.height=128;let _=b.getContext("2d");_.strokeStyle="rgba(255,235,200,.9)",_.lineWidth=7,_.beginPath(),_.arc(64,64,54,0,7),_.stroke();let y=new En(b);return y.colorSpace=Dt,y})(),he=(()=>{let b=document.createElement("canvas");b.width=b.height=64;let _=b.getContext("2d");_.fillStyle="#7a4a08",_.beginPath(),_.arc(32,32,30,0,7),_.fill(),_.fillStyle="#ffcf33",_.beginPath(),_.arc(32,30,26,0,7),_.fill(),_.fillStyle="#fff3a8",_.beginPath(),_.arc(25,23,8,0,7),_.fill();let y=new En(b);return y.colorSpace=Dt,y})(),se=(b,_,y)=>new F(b,_,y);o.add(new ti(16773346,8022648,1.2));let B=new Cn(16768184,2.5);B.position.set(-30,40,90),B.target.position.set(0,0,10),o.add(B,B.target),B.castShadow=!0,B.shadow.mapSize.set(i?1024:2048,i?1024:2048),Object.assign(B.shadow.camera,{left:-45,right:45,top:40,bottom:-20,near:10,far:220}),B.shadow.bias=-6e-4,B.shadow.normalBias=.03;let re=new Cn(16747098,.8);re.position.set(20,10,-40),o.add(re);let de=m(n+"sky.webp"),ge=new ke(new Zt(1400,600),new nn({map:de,fog:!1,depthWrite:!1}));ge.rotation.y=Math.PI,ge.position.set(0,130,640),ge.renderOrder=-2,o.add(ge);let pe=new mn(new pn({map:T,color:16756848,transparent:!0,depthWrite:!1,fog:!1,blending:An,opacity:.55}));pe.position.set(0,26,600),pe.scale.setScalar(160),o.add(pe);let me=d.load(t+"models/waternormals.jpg");me.wrapS=me.wrapT=Gn;let we={t:{value:0},wn:{value:me},deep:{value:new Ne(2054778)},shal:{value:new Ne(4176054)},glow:{value:new Ne(16752736)},...We.fog},Pe=new Zt(900,520,160,90);Pe.rotateX(-Math.PI/2),Pe.translate(0,0,330);let Ye=new ke(Pe,new Mn({uniforms:we,fog:!0,vertexShader:`uniform float t;varying vec3 wp;
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
      }`}));Ye.position.y=-.35,g.add(Ye),x.push(()=>{we.t.value=p});let le=Ss([[0,"rgba(255,255,255,.95)"],[.5,"rgba(255,250,240,.5)"],[1,"rgba(255,255,255,0)"]],64),_e=new ke(new Zt(220,3),new nn({map:le,transparent:!0,depthWrite:!1,opacity:.7}));_e.rotation.x=-Math.PI/2,_e.position.set(0,-.05,47),g.add(_e),x.push(()=>{_e.position.z=46.5+Math.sin(p*.9)*1.2,_e.material.opacity=.5+Math.sin(p*.9+1)*.2});let ne=m(n+"sand.webp",[20,8]),Te=new Zt(240,80,60,20);Te.rotateX(-Math.PI/2),Te.translate(0,0,22);{let b=Te.attributes.position;for(let _=0;_<b.count;_++){let y=b.getZ(_),C=b.getX(_);b.setY(_,y>40?-(y-40)*.12:Math.sin(C*.2)*.08+Math.cos(y*.3+C*.1)*.06)}Te.computeVertexNormals()}let ht=new ke(Te,new Xt({map:ne,roughness:.95,color:16774376}));ht.receiveShadow=!0,g.add(ht);let Mt=25,je=3.2,Ie=4.2,Be=(b,_)=>{let y=m(n+"wall.webp",[b,_]);return new Xt({map:y,roughness:.9,color:16773340})},K=Be(9,1.1),cn=Be(9,.9),ct=Be(.5,.5),mt=Be(4,2),tt=new _t;g.add(tt);let vt=new ke(new Bt(Mt*2+4,je,Ie),[K,K,cn,K,K,K]);vt.position.set(0,je/2,-Ie/2),vt.castShadow=vt.receiveShadow=!0,tt.add(vt);let H=new Bt(1.7,1.25,.9);{let b=[];for(let C=-Mt-1;C<=Mt+1;C+=2.6)Math.abs(C)>=3.4&&b.push(C);let _=new Pr(H,ct,b.length),y=new yn;b.forEach((C,R)=>{y.position.set(C,je+.62,-.45),y.updateMatrix(),_.setMatrixAt(R,y.matrix)}),_.castShadow=!0,tt.add(_)}let L=new ke(new Bt(Mt*2+4,.5,.5),cn);L.position.set(0,je+.25,-Ie+.25),tt.add(L);for(let b of[-1,1]){let _=new _t;_.position.set(b*(Mt+4.2),0,-2),tt.add(_);let y=new ke(new Vt(4,4.4,je+3.4,20),mt);y.position.y=(je+3.4)/2,y.castShadow=y.receiveShadow=!0,_.add(y);for(let U=0;U<10;U++){let W=U/10*Math.PI*2,Oe=new ke(H,ct);Oe.position.set(Math.cos(W)*3.7,je+4,Math.sin(W)*3.7),Oe.rotation.y=-W,Oe.castShadow=!0,_.add(Oe)}let C=new ke(new Ni(4.6,4.2,20),new Xt({color:11680042,roughness:.7}));C.position.y=je+6.6,C.castShadow=!0,_.add(C);let R=new ke(new Vt(.07,.07,3),new Xt({color:5913120}));R.position.y=je+9.8,_.add(R);let O=new Zt(2.2,1.3,8,1);O.translate(1.1,0,0);let Y=new ke(O,new Xt({color:2781136,side:dn}));Y.position.y=je+10.6,_.add(Y);let fe=O.attributes.position,V=Float32Array.from(fe.array);x.push(()=>{for(let U=0;U<fe.count;U++){let W=V[U*3];fe.setZ(U,Math.sin(W*2.4-p*6+b)*W*.14)}fe.needsUpdate=!0})}let E=new _t;E.position.set(0,0,.02),tt.add(E);let Q=Be(1.2,1.2);for(let b of[-1,1]){let _=new ke(new Bt(1.4,je+2.4,1.6),Q);_.position.set(b*3.3,(je+2.4)/2,-.2),_.castShadow=!0,E.add(_)}let be=new ke(new Bt(8,1.2,1.6),Q);be.position.set(0,je+1.8,-.2),be.castShadow=!0,E.add(be);let ye=new Xt({color:8014374,roughness:.8}),Ce=new _t;E.add(Ce);for(let b=0;b<5;b++){let _=new ke(new Bt(1.06,je+.6,.35),ye);_.position.set(-2.12+b*1.06,(je+.6)/2,.5),_.castShadow=!0,Ce.add(_)}let ze=new Xt({color:2763312,metalness:.6,roughness:.4});for(let b of[.9,je-.4]){let _=new ke(new Bt(5.4,.26,.12),ze);_.position.set(0,b,.72),Ce.add(_)}let Ge=(()=>{let b=document.createElement("canvas");b.width=b.height=128;let _=b.getContext("2d");_.strokeStyle="rgba(20,10,4,.9)",_.lineWidth=3;for(let C=0;C<7;C++){_.beginPath();let R=64,O=64;_.moveTo(R,O);for(let Y=0;Y<5;Y++)R+=(Math.random()-.5)*40,O+=(Math.random()-.5)*40,_.lineTo(R,O);_.stroke()}return new En(b)})(),et=new ke(new Zt(5.4,je+.6),new nn({map:Ge,transparent:!0,opacity:0,depthWrite:!1}));et.position.set(0,(je+.6)/2,.7),Ce.add(et);for(let b of[-1,1]){let _=new ni(16747066,6,9,1.8);_.position.set(b*3.3,je+.8,1.2),E.add(_);let y=new mn(new pn({map:S,transparent:!0,depthWrite:!1,blending:An}));y.position.copy(_.position),y.scale.setScalar(1.1),E.add(y),x.push(()=>{let C=1+Math.sin(p*13+b)*.15+Math.sin(p*7)*.1;_.intensity=6*C,y.scale.setScalar(1.1*C)})}let Qe=async()=>{let b=async(_,y,C,R,O,Y=0)=>{let fe=await h(t+"models/q/"+_+".glb");if(M)return;let V=fe.scene.clone(!0);return V.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)}),V.position.set(y,C,R),V.scale.setScalar(O),V.rotation.y=Y,g.add(V),V};await Promise.all([b("Environment_PalmTree_1",-40,0,14,2.6,.6),b("Environment_PalmTree_2",41,0,10,2.4,2),b("Environment_PalmTree_3",-47,0,30,2.2,1),b("Environment_PalmTree_1",48,0,27,2.3,3),b("Environment_Rock_1",-36,0,36,2.6),b("Environment_Rock_3",36,0,38,2.2,1),b("Environment_Rock_2",-30,0,5,1.6),b("Environment_Rock_5",31,0,6,1.6),b("Ship_Large",-80,-.6,190,3.2,-.6),b("Ship_Large",95,-.6,230,3,.4)])},yt=new Map,Me=new Map,zt=new Map,Ut=null,St=e.troll?h(n+"troll.glb").then(b=>Ut=b).catch(()=>null):Promise.resolve(null);function ut(b,_){let y=new Vn().setFromObject(b),C=y.getSize(se(0,0,0)),R=_/Math.max(.01,C.y);return b.scale.multiplyScalar(R),R}async function it(b){let _=b.kind==="boss"?Ut||await St:null,y=!!_;if(_||(_=await h(t+"models/q/"+(hx[b.kind]||"Characters_Skeleton")+".glb")),M)return;let C=new _t,R=Ri(_.scene);C.add(R),R.traverse(W=>{W.isMesh&&(W.castShadow=!i||b.kind==="boss",W.receiveShadow=!1,W.material=W.material.clone(),W.material.emissive=new Ne(0),W.userData.hit=!0)}),ut(R,$l[b.kind]||2.5),b.kind==="boss"&&!y&&R.traverse(W=>{W.isMesh&&W.material.color.multiply(new Ne(.55,.9,.5))});let O=new hi(R),Y=_.animations||[],fe=W=>{let Oe=Y.find(st=>st.name===W)||Y.find(st=>/walk|run/i.test(st.name))||Y[0];return Oe?O.clipAction(Oe):null},V={e:b,holder:C,m:R,mix:O,act:fe,cur:null,troll:y,dead:0,x:b.x,z:b.z,hp:1},U=(W,Oe=1,st=!1)=>{let It=fe(W);!It||V.cur===It||(It.reset(),It.timeScale=Oe,st&&(It.setLoop(pa),It.clampWhenFinished=!0),It.play(),V.cur&&V.cur.crossFadeTo(It,.2,!1),V.cur=It)};if(V.play=U,U(y?"walk":"Run",b.kind==="brute"?.8:1.1),O.setTime(Math.random()),b.kind==="boss"){let W=At(4.5);W.g.position.y=$l.boss+1,C.add(W.g),V.bar=W}else if(b.kind==="brute"){let W=At(1.8);W.g.position.y=$l.brute+.5,C.add(W.g),V.bar=W}C.position.set(b.x,0,b.z),g.add(C),yt.set(b.id,V);for(let W=0;W<6;W++)rt(q,se(b.x,.4,b.z),{size:1.2,life:.8,grow:1.5,a:.6,v:se((Math.random()-.5)*3,1,(Math.random()-.5)*3)})}function At(b){let _=new _t,y=new mn(new pn({color:2755848,depthTest:!1}));y.scale.set(b,.32,1);let C=new mn(new pn({color:14830122,depthTest:!1}));return C.scale.set(b,.22,1),C.center.set(0,.5),C.position.x=-b/2,_.add(y,C),_.renderOrder=10,{g:_,fg:C,w:b}}async function qt(b){let _=await h(t+"models/q/Ship_Small.glb");if(M)return;let y=_.scene.clone(!0);y.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),ut(y,b.big?9:5.5);let C=new _t;C.add(y),y.rotation.y=Math.PI/2,C.position.set(b.x,-.4,b.z),g.add(C),Me.set(b.id,{b,h:C,x:b.x,z:b.z,wake:0})}let Gt=document.createElement("canvas");Gt.width=256,Gt.height=288;let gt=Gt.getContext("2d"),Fe=new En(Gt);Fe.colorSpace=Dt;let k=new mn(new pn({map:Fe,transparent:!0,alphaTest:.1}));k.center.set(.5,.06),k.scale.set(4.4,4.4*288/256,1),k.position.set(0,je,-3),g.add(k);let He=new ke(new Ws(.9,20),new nn({color:0,transparent:!0,opacity:.3,depthWrite:!1}));He.rotation.x=-Math.PI/2,He.position.set(0,je+.02,-3),g.add(He);let Re=new ke(new Fi(1.15,1.45,32),new nn({color:16764992,transparent:!0,opacity:.85,depthWrite:!1}));Re.rotation.x=-Math.PI/2,Re.position.set(0,je+.04,-3),g.add(Re);let pt=e.heroArt||null,Xe={name:"idle",t:0,flip:!1,lastFrame:-1};function jt(b){if(!pt)return;let _=pt.meta,y=_.animations[Xe.name]||_.animations.idle;Xe.t+=b;let C=Xe.name==="throw"||Xe.name==="attackA"?12:y.fps||8,R=y.frames[Math.floor(Xe.t*C)%y.frames.length],O=R*2+(Xe.flip?1:0);O!==Xe.lastFrame&&(Xe.lastFrame=O,gt.clearRect(0,0,256,288),gt.save(),Xe.flip&&(gt.translate(256,0),gt.scale(-1,1)),gt.drawImage(pt.image,R%_.columns*_.frameW,Math.floor(R/_.columns)*_.frameH,_.frameW,_.frameH,0,0,256,288),gt.restore(),Fe.needsUpdate=!0)}let Lt=null,j={Run:0,Idle:.75,Shoot:2.7,RunShoot:.55};e.mari3d&&h(t+"models/mari.glb").then(b=>{var W;if(M)return;let _=Ri(b.scene);_.updateMatrixWorld(!0);let y=new Vn().setFromObject(_),C=y.getSize(se(0,0,0)),R=y.getCenter(se(0,0,0)),O=3.9/C.y,Y=new _t,fe=new _t;_.position.set(-R.x,-y.min.y,-R.z),Y.add(_),Y.scale.setScalar(O),fe.add(Y),_.traverse(Oe=>{Oe.isMesh&&(Oe.frustumCulled=!1,Oe.castShadow=!0,Oe.material.map&&(Oe.material.map.colorSpace=Dt),Oe.material.roughness=.8)});let V=new hi(_),U={};for(let Oe of Object.keys(j)){let st=b.animations.find(It=>It.name===Oe);st&&(U[Oe]=V.clipAction(st)),U[Oe]._n=Oe}(W=U.Idle)==null||W.play(),fe.position.set(0,je,-3),g.add(fe),k.visible=!1,Lt={holder:fe,pivot:Y,mx:V,act:U,cur:"Idle",ang:Math.PI/2+.55,yaw:0,lean:0},Xe.mari=Lt}).catch(()=>{});function ae(b,_,y,C){let R=Lt;if(!R)return;let O=_?"Run":"Idle";if(O!==R.cur&&R.act[O]){let U=R.act[O],W=R.act[R.cur];U.reset().play(),U.timeScale=O==="Shoot"?1.8:O==="Run"?1.1:1,W&&(U.crossFadeFrom(W,.15,!1),setTimeout(()=>{R.cur!==W._n&&W.stop()},200)),U._n=O,R.cur=O}R.mx.update(b);let Y=j[R.cur]||0;R.yaw+=(Y-R.yaw)*Math.min(1,b*12),R.pivot.rotation.y=R.yaw*(C?-1:1),R.lean+=((y?.1:0)-R.lean)*Math.min(1,b*18),R.pivot.rotation.x=-R.lean;let V=(C?-1:1)*(Math.PI/2+.55)-R.ang;V=((V+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,R.ang+=V*Math.min(1,b*10),R.holder.rotation.y=R.ang}let ce=new Xt({color:9067054,roughness:.85}),Z=new Bt(.16,je+1.6,.16),Ee=new Bt(1,.1,.1);function De(b,_){let y=new _t;y.position.set(b,0,Math.max(1.4,_+.4));for(let R of[-.5,.5]){let O=new ke(Z,ce);O.position.set(R,(je+1.6)/2,0),O.castShadow=!0,y.add(O)}for(let R=.5;R<je+1.4;R+=.55){let O=new ke(Ee,ce);O.position.set(0,R,0),y.add(O)}y.rotation.x=-.38,y.scale.y=.01,g.add(y);let C=0;return x.push(R=>{C>=1||(C=Math.min(1,C+R*4),y.scale.y=C)}),y}let Ke=new Map,ve=new Xt({color:10117682,roughness:.8}),dt=new Xt({color:2829104,metalness:.5,roughness:.45}),bt=new Xt({color:12728874,roughness:.7});function Ht(b){let _=new _t;_.position.set(b.x,je,-1.05),g.add(_);let y=new ke(new Vt(1.7,1.8,.18,28),new Xt({color:7035464,roughness:.9}));y.position.y=.09,y.receiveShadow=!0,_.add(y);let C=new ke(new Fi(1.5,1.85,36),new nn({color:16764992,transparent:!0,opacity:.8,depthWrite:!1,side:dn}));C.rotation.x=-Math.PI/2,C.position.y=.2,_.add(C);let R=new mn(new pn({map:m(n+b.id+".webp"),transparent:!0,depthWrite:!1}));R.scale.setScalar(2.6),R.position.y=3.1,_.add(R);let{t:O,aspect:Y}=vd(String(b.cost),"#ffd34a",52),fe=new mn(new pn({map:O,transparent:!0,depthWrite:!1}));fe.scale.set(1*Y*.55,.55*1,1),fe.position.set(.3,1.6,0),_.add(fe);let V=new mn(new pn({map:he,transparent:!0,depthWrite:!1}));V.scale.setScalar(.6),V.position.set(-fe.scale.x/2-.1,1.6,0),_.add(V);let U=new ke(new Fi(1.5,1.85,36,1,0,.01),new nn({color:10288992,transparent:!0,opacity:.95,depthWrite:!1,side:dn}));U.rotation.x=-Math.PI/2,U.position.y=.22,_.add(U);let W={t:b,g:_,pad:y,glow:C,icon:R,price:fe,coin:V,fill:U,machine:null,built:!1,recoil:0,fireT:0};return Ke.set(b.id,W),x.push(()=>{W.built||(R.position.y=3.1+Math.sin(p*2.4+b.x)*.18,C.material.opacity=W.afford?.55+Math.sin(p*6)*.35:.25,C.material.color.set(W.afford?10288992:16764992))}),W}function on(b){let _=new _t,y=(C,R,O,Y,fe,V=0,U=0,W=0)=>{let Oe=new ke(C,R);return Oe.position.set(O,Y,fe),Oe.rotation.set(V,U,W),Oe.castShadow=!0,_.add(Oe),Oe};if(b==="ballista"){y(new Bt(1.8,.5,1.8),ve,0,.45,0);let C=new _t;C.position.y=1.4,_.add(C),_.userData.aim=C;let R=(O,Y,fe,V,U,W=0,Oe=0,st=0)=>{let It=new ke(O,Y);return It.position.set(fe,V,U),It.rotation.set(W,Oe,st),It.castShadow=!0,C.add(It),It};R(new Bt(.4,.35,3.4),ve,0,0,.3),R(new Bt(3.6,.25,.3),ve,0,.1,1.3,0,0,0),R(new Vt(.08,.08,3.2),dt,0,.25,.6,Math.PI/2),R(new Ni(.2,.5,8),dt,0,.25,2.3,Math.PI/2),y(new Vt(.18,.18,1,8),ve,0,.9,0)}else if(b==="cauldron"){for(let[Y,fe]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])y(new Vt(.09,.12,1.4,6),dt,Y,.7,fe);let C=y(new ei(1.1,18,12,0,Math.PI*2,0,Math.PI*.62),dt,0,1.9,.2,Math.PI);C.scale.y=.85;let R=y(new Ws(.95,18),new nn({color:16742938}),0,2.5,.2,-Math.PI/2);_.userData.lava=R;let O=new ni(16742954,8,10,1.6);O.position.set(0,2.8,.2),_.add(O),_.userData.light=O;for(let Y=0;Y<5;Y++){let fe=new mn(new pn({map:S,transparent:!0,depthWrite:!1,blending:An}));fe.position.set((Math.random()-.5)*1.2,2.6,.2+(Math.random()-.5)*1.2),fe.scale.setScalar(.9),_.add(fe),x.push(()=>{let V=(p*1.4+Y/5)%1;fe.position.y=2.5+V*1.6,fe.material.opacity=(1-V)*.9,fe.scale.setScalar(1.1-V*.6)})}_.rotation.y=0}else if(b==="cannon"){y(new Bt(1.6,.6,2.2),bt,0,.7,0);for(let O of[-1,1])for(let Y of[-.7,.7])y(new Vt(.55,.55,.25,14),ve,O*.9,.55,Y,0,0,Math.PI/2);let C=new _t;C.position.set(0,1.3,0),_.add(C),_.userData.aim=C;let R=new ke(new Vt(.38,.52,2.8,16),dt);R.rotation.x=Math.PI/2-.25,R.position.z=.9,R.castShadow=!0,C.add(R);for(let O=0;O<3;O++)y(new ei(.28,10,8),dt,-1.1+O*.3,.3,-1)}else if(b==="archer"){for(let[C,R]of[[-1,-1],[1,-1],[-1,1],[1,1]])y(new Bt(.3,4.4,.3),ve,C,2.2,R);y(new Bt(2.6,.3,2.6),ve,0,3.6,0);for(let C of[-1.2,1.2])y(new Bt(2.6,.7,.15),ve,0,4.1,C);y(new Bt(.15,.7,2.6),ve,-1.2,4.1,0),y(new Bt(.15,.7,2.6),ve,1.2,4.1,0),y(new Ni(2.2,1.6,4),bt,0,5.9,0,0,Math.PI/4);for(let C of[-1,1])y(new Bt(.2,1.4,.2),ve,C,4.9,-1);h(t+"models/q/Characters_Henry.glb").then(C=>{if(M)return;let R=Ri(C.scene);ut(R,1.7),R.position.set(0,3.75,.3),R.traverse(V=>{V.isMesh&&(V.castShadow=!0)}),_.add(R);let O=new hi(R),Y=C.animations.find(V=>V.name==="Punch")||C.animations[0];O.clipAction(Y).play(),_.userData.mix=O}).catch(()=>{})}return _.scale.setScalar(.001),_}function hn(b){b.built=!0,[b.icon,b.price,b.coin,b.glow,b.fill].forEach(C=>C.visible=!1);let _=on(b.t.id);b.g.add(_),b.machine=_;let y=0;x.push(C=>{if(y>=1)return;y=Math.min(1,y+C*2.4);let R=1+Math.sin(y*Math.PI)*.35*(1-y);_.scale.setScalar(Math.max(.001,y*R))});for(let C=0;C<18;C++)rt(T,b.g.position.clone().add(se(0,1,0)),{size:.6,life:.9,add:!0,g:6,v:se((Math.random()-.5)*8,4+Math.random()*6,(Math.random()-.5)*8)});for(let C=0;C<8;C++)rt(P,b.g.position.clone().add(se((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),{size:2,life:1.2,grow:1.4,a:.5,v:se(0,1.5,0)})}function rt(b,_,y){var R;let C=new mn(new pn({map:b,transparent:!0,depthWrite:!1,blending:y.add?An:Ii,color:y.color||16777215,fog:y.fog!==!1}));return C.position.copy(_),C.scale.setScalar(y.size||1),g.add(C),A.push({s:C,v:y.v?y.v.clone():se(0,0,0),g:y.g||0,life:y.life||1,age:0,grow:y.grow||0,size:y.size||1,a:(R=y.a)!=null?R:1,drag:y.drag||0,aspect:y.aspect||1}),C}function an(b){for(let _=A.length-1;_>=0;_--){let y=A[_];if(y.age+=b,y.age>=y.life){g.remove(y.s),y.s.material.dispose(),A.splice(_,1);continue}y.v.y-=y.g*b,y.drag&&y.v.multiplyScalar(Math.max(0,1-y.drag*b)),y.s.position.addScaledVector(y.v,b);let C=y.age/y.life,R=y.size*(1+y.grow*C);y.s.scale.set(R*y.aspect,R,1),y.s.material.opacity=y.a*(1-C*C)*Math.min(1,y.age*14)}}function w(b,_=3){rt(N,b.clone().add(se(0,1,0)),{size:_*2.2,life:.35,add:!0,grow:.5,fog:!1});for(let y=0;y<14;y++)rt(S,b.clone().add(se(0,.6,0)),{size:.7,life:.6,add:!0,g:10,v:se((Math.random()-.5)*12,6+Math.random()*8,(Math.random()-.5)*12)});for(let y=0;y<8;y++)rt(P,b.clone().add(se((Math.random()-.5)*_,.5,(Math.random()-.5)*_)),{size:2.4,life:1.6,grow:1.6,a:.55,v:se(0,2,0),drag:.5});f=Math.min(1,f+.35)}function z(b,_){rt(D,b,{size:.7,life:.09,add:!0,grow:.4,color:16773840});for(let y=0;y<7;y++)rt(D,b,{size:.16+Math.random()*.1,life:.22+Math.random()*.12,add:!0,g:9,a:.9,v:se(_*(3+Math.random()*6)+(Math.random()-.5)*2,1+Math.random()*3,(Math.random()-.3)*5),color:16764810});for(let y=0;y<4;y++)rt(P,b,{size:.45,life:.7+Math.random()*.3,grow:2,a:.4,drag:1.5,v:se(_*(1+Math.random()*2),.8+Math.random(),(Math.random()-.3)*1.5)})}function G(b,_){rt(D,b,{size:_?1.3:.8,life:.1,add:!0,grow:.5,color:16777215});for(let y=0;y<(_?12:7);y++)rt(D,b,{size:.2+Math.random()*.14,life:.28+Math.random()*.2,add:!0,g:12,a:.95,v:se((Math.random()-.5)*9,2+Math.random()*5,(Math.random()-.5)*8),color:y%3?16751184:16771504});for(let y=0;y<(_?5:2);y++)rt(q,b,{size:_?1.6:1,life:.55,grow:1.3,a:.5,v:se((Math.random()-.5)*3,1+Math.random()*1.5,(Math.random()-.5)*3)})}function te(b,_){return rt(oe,b,{size:_*.4,life:.45,add:!0,grow:4,a:.7,fog:!1})}function ee(b,_,y){let C=se(b,1.4,_);for(let Y=0;Y<Math.min(5,y);Y++)rt(he,C,{size:.7,life:.9,g:16,v:se((Math.random()-.5)*4,8+Math.random()*3,(Math.random()-.5)*2)});let{t:R,aspect:O}=vd("+"+y,"#ffe066",56);rt(R,C.clone().add(se(0,1.4,0)),{size:.9,aspect:O,life:1,v:se(0,3,0),fog:!1})}let X={bullet:new pn({map:D,color:16777215,blending:An,transparent:!0,depthWrite:!1}),bubble:new pn({map:Ss([[0,"rgba(220,250,255,.2)"],[.75,"rgba(160,230,255,.6)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1})};function Le(b){var R;let _,y=b.kind;if(y==="ball")_=new ke(new ei(.42,12,8),dt);else if(y==="arrow"||y==="knife"||y==="harpoon"){_=new _t;let O=y==="harpoon"?2.2:y==="arrow"?1.3:.8,Y=new ke(new Vt(.05,.05,O,5),y==="knife"?new Xt({color:14212580,metalness:.8,roughness:.2}):ve);Y.rotation.x=Math.PI/2,_.add(Y);let fe=new ke(new Ni(.1,.3,6),dt);fe.rotation.x=Math.PI/2,fe.position.z=O/2,_.add(fe)}else if(y==="bolt"){_=new _t;let O=new ke(new Vt(.09,.09,3,6),ve);O.rotation.x=Math.PI/2,_.add(O)}else _=new mn(X[y]||X.bullet),_.scale.setScalar(y==="bubble"?.9:.55);(y==="shot"||y==="bullet")&&(_=new mn(X.bullet),_.scale.setScalar(.34)),_.castShadow=!0,g.add(_);let C={sh:b,o:_,t:0,prev:se(b.x0,(R=b.y0)!=null?R:3.8,b.z0)};return zt.set(b.id,C),C}function Ue(b){var _;for(let[y,C]of zt){let R=C.sh;C.t+=b;let O=Math.min(1,C.t/R.dur),Y=((_=R.y0)!=null?_:3.8)+1.5,fe=1.4,V=Xr(R.x0,R.tx,O),U=Xr(R.z0,R.tz,O),W=Xr(Y,fe,O)+(R.arc||0)*4*O*(1-O),Oe=se(V,W,U);C.o.isSprite||C.o.lookAt(Oe.clone().add(Oe.clone().sub(C.prev))),C.o.position.copy(Oe),C.prev.copy(Oe),R.kind==="ball"&&Math.random()<.5?rt(P,Oe,{size:.8,life:.5,grow:1,a:.35}):(R.kind==="shot"||R.kind==="bullet")&&O<1&&(rt(D,Oe,{size:.26,life:.16,add:!0,grow:-.6,a:.8,color:16767392}),Math.random()<.3&&rt(P,Oe,{size:.35,life:.45,grow:1.2,a:.18})),O>=1&&C.t>R.dur+.02&&(g.remove(C.o),zt.delete(y))}}function Je(b,_,y){let C=Ke.get("ballista");if(!C)return;let R=C.g.position.clone().add(se(0,1.6,1.5)),O=se(_,1.2,y),Y=new _t,fe=new ke(new Vt(.1,.1,3.2,6),ve);fe.rotation.x=Math.PI/2,Y.add(fe);let V=new ke(new Ni(.2,.55,8),dt);V.rotation.x=Math.PI/2,V.position.z=1.8,Y.add(V),Y.position.copy(R),Y.lookAt(O),g.add(Y);let U=0,W=R.distanceTo(O)/70;x.push(Oe=>{if(!(U>=1)&&(U=Math.min(1,U+Oe/W),Y.position.lerpVectors(R,O,U),Math.random()<.6&&rt(q,Y.position.clone(),{size:.5,life:.3,a:.5}),U>=1)){g.remove(Y);for(let st=0;st<5;st++)rt(q,O,{size:1,life:.6,grow:1,a:.6,v:se((Math.random()-.5)*3,2,(Math.random()-.5)*3)})}})}function xt(b){for(let _=0;_<26;_++){let y=se(b+(Math.random()-.5)*2,je+1.8,.8);rt(S,y,{size:1+Math.random(),life:.9+Math.random()*.4,add:!0,g:14,v:se((Math.random()-.5)*12,2+Math.random()*3,2+Math.random()*4)})}setTimeout(()=>{if(!M){for(let _=0;_<16;_++)rt(S,se(b+(Math.random()-.5)*13,.5,1+Math.random()*5),{size:1.6+Math.random(),life:1.2,add:!0,grow:.4,v:se(0,2.5+Math.random()*2,0)});for(let _=0;_<6;_++)rt(P,se(b+(Math.random()-.5)*12,1,2+Math.random()*4),{size:3,life:1.8,grow:1.4,a:.5,v:se(0,2,0),color:6969936})}},280)}let at={x:0,shakeX:0};function nt(){let b=s.clientWidth||innerWidth,_=s.clientHeight||innerHeight;a.setSize(b,_,!1),c.aspect=b/_,c.updateProjectionMatrix(),c.fov=c.aspect<1.4?56:44,c.updateProjectionMatrix()}nt(),addEventListener("resize",nt);let Nt=0,un=0,Qt=null,Ln=!0;function Pt(b,_,y){var fe;if(M)return;Qt=b,Ln=un<=0;for(let V of _)if(V.type==="boat"){let U=b.boats.find(W=>W.id===V.id);U&&qt(U)}else if(V.type==="spawn"){let U=b.enemies.find(W=>W.id===V.id);U&&it(U)}else if(V.type==="shot"){let U=b.shots.find(W=>W.id===V.id);U&&Le(U)}else if(V.type==="fire"){un=.28;let U=b.w.shot==="knife"||b.w.shot==="harpoon"||pt!=null&&pt.meta.animations.throw?"throw":"attackA";(Xe.name!==U||Ln)&&(Xe.name=U,Xe.t=0),z(se(b.heroX+(Xe.flip?-1.5:1.5),je+2.5,-3.1),Xe.flip?1:-1)}else if(V.type==="kill"){let U=yt.get(V.id);U&&(U.dead=.001,U.play(U.troll?"idle":"Death",1,!0)),ee(V.x,V.z,V.coins)}else if(V.type==="hit"){let U=yt.get(V.id);U&&(U.flash=.14,G(se(U.x,U.troll?3:1.5,U.z-.4),U.troll),U.troll&&(U.kick=.18))}else if(V.type==="impact")V.kind!=="ball"&&G(se(V.x,1.2,V.z),!1);else if(V.type==="boom")w(se(V.x,0,V.z),V.r);else if(V.type==="build"){let U=Ke.get(V.id);U&&hn(U)}else if(V.type==="tower"){let U=Ke.get(V.id);if(!(U!=null&&U.machine))continue;if(U.recoil=.25,V.id==="ballista")Je(V.x,V.tx,V.tz);else if(V.id==="cauldron")xt(V.x);else if(V.id==="cannon"){let W=U.g.position.clone().add(se(0,1.6,2.4));rt(N,W,{size:2.4,life:.2,add:!0});for(let Oe=0;Oe<5;Oe++)rt(P,W,{size:1.6,life:1,grow:1.4,a:.6,v:se((Math.random()-.5)*2,1.5,3)});f=Math.min(1,f+.12)}}else if(V.type==="gate"){f=Math.min(1,f+.08);for(let U=0;U<3;U++)rt(q,se((Math.random()-.5)*40,1,1),{size:1,life:.6,a:.5,v:se(0,1.5,1)})}else if(V.type==="land"){let U=Me.get(V.id);if(U)for(let W=0;W<12;W++)rt(P,se(U.x,.2,U.z-2),{size:1.6,life:1,grow:1,a:.5,color:15267071,v:se((Math.random()-.5)*5,2+Math.random()*2,(Math.random()-.5)*3)})}else if(V.type==="bossLand"){let U=b.enemies.find(W=>W.id===V.id);if(U){te(se(U.x,.3,U.z),8);for(let W=0;W<10;W++)rt(q,se(U.x+(Math.random()-.5)*5,.5,U.z+(Math.random()-.5)*3),{size:3,life:1,grow:1.4,a:.6,v:se((Math.random()-.5)*5,1.5,(Math.random()-.5)*5)});f=Math.min(1,f+.3)}}else if(V.type==="bossDown")w(se(V.x,0,V.z),6),f=1;else if(V.type==="reach"){let U=yt.get(V.id);U&&(U.play(U.troll?"walk":"Sword",1.1),U.troll||(U.ladder=De(U.e.x,U.e.z),U.climb=0))}for(let[V,U]of Me){let W=b.boats.find(Oe=>Oe.id===V);if(!W){U.sink=(U.sink||0)+y,U.h.position.y-=y*.6,U.h.rotation.z+=y*.05,U.sink>4&&(g.remove(U.h),Me.delete(V));continue}U.x=W.x,U.z=W.z,U.h.position.set(W.x,-.4+Math.sin(p*2+V)*.15,W.z),U.h.rotation.z=Math.sin(p*1.6+V)*.04,!W.landed&&Math.random()<.5&&rt(P,se(W.x+(Math.random()-.5)*2,.1,W.z+3),{size:1.4,life:1.2,grow:1.2,a:.45,color:16777215,v:se((Math.random()-.5)*2,.5,2)})}for(let[V,U]of yt){let W=b.enemies.find(Rt=>Rt.id===V);if(U.dead||!W){U.dead+=y,U.holder.position.y>0&&U.dead<1.6&&(U.fallV=(U.fallV||0)+26*y,U.holder.position.y=Math.max(0,U.holder.position.y-U.fallV*y),U.holder.position.z+=y*3),U.ladder&&U.dead>.3&&(U.ladder.rotation.x=Math.min(1.45,U.ladder.rotation.x+y*2.2),U.dead>2.6&&(g.remove(U.ladder),U.ladder=null)),U.dead>(U.troll?2.5:1.6)&&(U.holder.position.y-=y*1.6,U.m.traverse(Rt=>{Rt.isMesh&&(Rt.material.transparent=!0,Rt.material.opacity=Math.max(0,1-(U.dead-1.6)))})),U.troll&&U.dead<2&&(U.holder.rotation.x=Math.min(1.4,U.dead*.9)),U.dead>3.2&&(g.remove(U.holder),U.ladder&&g.remove(U.ladder),yt.delete(V)),U.mix.update(y);continue}if(W.delay>0){U.holder.visible=!1;continue}U.holder.visible=!0;let Oe=W.x-U.x,st=W.z-U.z;if(Math.abs(Oe)+Math.abs(st)>.001?U.holder.rotation.y=Math.atan2(Oe,st):W.atWall&&(U.holder.rotation.y=Math.PI),U.x=W.x,U.z=W.z,U.holder.position.set(W.x,0,W.z),U.ladder){U.climb=Math.min(1,U.climb+y/1.5);let Rt=U.climb;U.holder.position.set(W.x,Rt*(je-1.5),Xr(W.z,.9,Rt)),U.holder.rotation.y=Math.PI}if(W.kind==="boss"&&!W.atWall&&Math.random()<.08&&(f=Math.min(1,f+.05),rt(q,se(W.x+(Math.random()-.5)*3,.3,W.z),{size:2,life:1,grow:1,a:.5})),U.bar){let Rt=Math.max(0,W.hp/W.maxHp);U.bar.fg.scale.x=U.bar.w*Rt,U.bar.g.quaternion.copy(c.quaternion),U.bar.g.quaternion.premultiply(U.holder.quaternion.clone().invert())}U.flash=Math.max(0,(U.flash||0)-y);let It=U.flash>0?.9:0,wn=W.burn>0?.35+Math.sin(p*20)*.15:0;if(U.m.traverse(Rt=>{Rt.isMesh&&Rt.material.emissive&&Rt.material.emissive.setRGB(It+wn,It*.4+wn*.35,It*.3)}),W.burn>0&&Math.random()<.3&&rt(S,se(W.x,1+Math.random()*1.5,W.z),{size:.8,life:.5,add:!0,v:se(0,2,0)}),W.kind==="boss"&&U.troll&&W.atWall){U.atk=(U.atk||0)+y;let Rt=1.25,$t=U.atk%Rt/Rt;U.holder.rotation.y=Math.PI;let Ae=$t<.45?-.2*Math.sin($t/.45*Math.PI/2):$t<.56?-.2+.6*(($t-.45)/.11):.4*(1-($t-.56)/.44);if(U.m.rotation.x=Ae,U.m.position.y=$t<.45?.2*Math.sin($t/.45*Math.PI/2):$t<.56?.2*(1-($t-.45)/.11):0,$t>=.56&&!U.slammed){U.slammed=!0;let $e=se(W.x,2.4,1.2);G($e,!0),te(se(W.x,.4,1.4),9),f=Math.min(1,f+.22);for(let Ve=0;Ve<6;Ve++)rt(q,se(W.x+(Math.random()-.5)*5,.6,1),{size:2.2,life:.9,grow:1.3,a:.6,v:se((Math.random()-.5)*6,2,-1-Math.random()*3)})}$t<.56&&(U.slammed=!1)}else U.m.rotation.x&&(U.m.rotation.x=0,U.m.position.y=0),U.kick>0&&(U.kick-=y,U.holder.position.z-=Math.sin(U.kick/.18*Math.PI)*.35),U.mix.update(y*(W.kind==="boss"&&!U.troll?.6:1))}Ue(y);let C=(b.heroX-Nt)/Math.max(y,.001);Nt=b.heroX,un-=y;let R=b.aim&&b.enemies.find(V=>V.id===b.aim);R?R.x<b.heroX-1.2?Xe.flip=!0:R.x>b.heroX+1.2&&(Xe.flip=!1):Math.abs(C)>.5&&(Xe.flip=C<0);let O=un>0?Xe.name:Math.abs(C)>.5?"run":"idle";O!==Xe.name&&(Xe.name=O,Xe.t=0),k.position.x=b.heroX,He.position.x=Re.position.x=b.heroX,Re.material.opacity=.6+Math.sin(p*5)*.25,jt(y),Lt&&(Lt.holder.position.x=b.heroX,Lt.sp=(Lt.sp||0)+(Math.abs(C)-(Lt.sp||0))*Math.min(1,y*8),Lt.mv=Lt.mv?Lt.sp>.35:Lt.sp>1.2,ae(y,Lt.mv,un>0,Xe.flip));for(let V of b.towers){let U=Ke.get(V.id)||Ht(V);if(V.built&&!U.built&&hn(U),U.afford=!V.built&&b.coins>=V.cost,!U.built){let W=Math.min(1,V.hold/.55);U.fill.geometry.dispose(),U.fill.geometry=new Fi(1.5,1.85,36,1,Math.PI/2,Math.max(.01,W*Math.PI*2))}if(U.machine){U.recoil=Math.max(0,U.recoil-y);let W=U.machine.userData.aim;if(W){let Oe=b.enemies.filter(st=>st.state!=="dead"&&st.delay<=0).sort((st,It)=>Math.hypot(st.x-V.x,st.z)-Math.hypot(It.x-V.x,It.z))[0];Oe&&(W.rotation.y=Xr(W.rotation.y,Math.atan2(Oe.x-V.x,Oe.z+2),.15)),W.position.z=-U.recoil*1.2}(fe=U.machine.userData.mix)==null||fe.update(y)}}let Y=1-b.gate/b.gateMax;et.material.opacity=Math.min(.95,Y*1.3),ye.color.setRGB(.48-Y*.2,.29-Y*.14,.15-Y*.07)}function Ot(b){if(M||v)return;p+=b;for(let O of x)O(b,p);an(b);let _=Qt?Qt.heroX:0;at.x=Xr(at.x,-_*.45,Math.min(1,b*3)),f=Math.max(0,f-b*2.2);let y=c.aspect<1.4,C=(Math.random()-.5)*f*.8,R=(Math.random()-.5)*f*.6;y?(c.position.set(at.x*.5+C,21+R,-30),c.lookAt(at.x*.5,0,34)):(c.position.set(at.x+C,13.5+R,-22),c.lookAt(at.x,0,32)),a.render(o,c)}return Qe(),{canvas:r,update:Pt,render:Ot,resize:nt,setHeroArt(b){pt=b,Xe.lastFrame=-1},project(b,_,y){let C=g.localToWorld(se(b,_,y)).project(c),R=r.getBoundingClientRect();return{x:R.left+(C.x+1)/2*R.width,y:R.top+(1-C.y)/2*R.height,on:C.z<1}},pause(b=!0){v=b},ready:Promise.all([St,h(t+"models/q/Characters_Skeleton.glb"),h(t+"models/q/Characters_Sharky.glb"),h(t+"models/q/Characters_Captain_Barbarossa.glb"),h(t+"models/q/Ship_Small.glb")]).then(()=>!0),sample(){let b=a.getContext(),_=b.drawingBufferWidth,y=b.drawingBufferHeight,C=new Uint8Array(4*64);a.render(o,c);let R=0;for(let O=0;O<8;O++)b.readPixels(Math.floor(_*(O+.5)/8),Math.floor(y*.5),1,1,b.RGBA,b.UNSIGNED_BYTE,C.subarray(O*4));for(let O=0;O<32;O++)R+=C[O];return{mean:R/32,calls:a.info.render.calls,enemies:yt.size}},dispose(){var b;M=!0,removeEventListener("resize",nt),o.traverse(_=>{var C;_.geometry&&_.geometry.dispose();let y=Array.isArray(_.material)?_.material:_.material?[_.material]:[];for(let R of y)(C=R.map)==null||C.dispose(),R.dispose()}),a.dispose(),(b=a.forceContextLoss)==null||b.call(a),r.remove()}}}window.PirateBastion3D={create:ux,version:1};var Rn=Math.PI*2,yd=(s,e,t)=>Math.max(e,Math.min(t,s)),dx=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function Bi(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Wn(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Sn(s,e=1,t=1,n=!0){let i=new En(s);return n&&(i.colorSpace=Dt),i.wrapS=i.wrapT=Gn,i.repeat.set(e,t),i.anisotropy=4,i}function Ma(s,e,t,n,i,r,a=40){for(let o=0;o<a;o++){let c=n()*t;s.strokeStyle=`rgba(${r},${(.05+n()*.12).toFixed(3)})`,s.lineWidth=.6+n()*1.6,s.beginPath();for(let l=0;l<=e;l+=8){let u=c+Math.sin(l*.012+o)*3+Math.sin(l*.05+o*3)*1.2;l?s.lineTo(l,u):s.moveTo(l,u)}s.stroke()}for(let o=0;o<2;o++){let c=n()*e,l=n()*t,u=s.createRadialGradient(c,l,1,c,l,10+n()*10);u.addColorStop(0,`rgba(${r},.55)`),u.addColorStop(1,`rgba(${r},0)`),s.fillStyle=u,s.fillRect(c-22,l-22,44,44)}}function Md(s,e){let[t,n]=Wn(1024,1024),i=Bi(s),r=1024/8;for(let a=0;a<8;a++){let o=-i()*400;for(;o<1024;){let l=380+i()*420,u=.82+i()*.3,h=e.map(d=>Math.round(d*u));n.fillStyle=`rgb(${h})`,n.fillRect(o,a*r,l,r),n.save(),n.beginPath(),n.rect(o,a*r,l,r),n.clip(),n.translate(o,a*r),Ma(n,l,r,i,h,"30,16,6",18),n.restore(),n.fillStyle="rgba(20,10,4,.75)",n.fillRect(o,a*r,3,r);for(let d of[r*.22,r*.78])n.fillStyle="rgba(25,20,18,.9)",n.beginPath(),n.arc(o+12,a*r+d,3,0,Rn),n.arc(o+l-12,a*r+d,3,0,Rn),n.fill();o+=l}n.fillStyle="rgba(15,8,3,.85)",n.fillRect(0,a*r,1024,4);let c=n.createLinearGradient(0,a*r,0,a*r+r);c.addColorStop(0,"rgba(255,220,170,.06)"),c.addColorStop(1,"rgba(0,0,0,.14)"),n.fillStyle=c,n.fillRect(0,a*r,1024,r)}return t}function eh(s){let[e,t]=Wn(512,1024),n=Bi(s),i=6,r=512/i;for(let o=0;o<i;o++){let c=.78+n()*.3,l=[96,58,32].map(h=>Math.round(h*c));t.fillStyle=`rgb(${l})`,t.fillRect(o*r,0,r,1024),t.save(),t.translate(o*r+r,0),t.rotate(Math.PI/2),Ma(t,1024,r,n,l,"25,12,5",14),t.restore(),t.fillStyle="rgba(12,6,2,.8)",t.fillRect(o*r,0,3,1024);let u=t.createLinearGradient(o*r,0,o*r+r,0);u.addColorStop(0,"rgba(255,210,150,.05)"),u.addColorStop(1,"rgba(0,0,0,.18)"),t.fillStyle=u,t.fillRect(o*r,0,r,1024)}let a=t.createLinearGradient(0,0,0,1024);return a.addColorStop(0,"rgba(10,5,2,.55)"),a.addColorStop(.35,"rgba(10,5,2,0)"),t.fillStyle=a,t.fillRect(0,0,512,1024),e}function fx(s){let[e,t]=Wn(512,512),n=Bi(s);t.fillStyle="#2a2420",t.fillRect(0,0,512,512);for(let i=0,r=0;r<512;i++){let a=46+n()*26,o=i%2?-30:0;for(;o<512;){let c=60+n()*60,l=.65+n()*.45,u=[118,104,92].map(d=>Math.round(d*l));t.fillStyle=`rgb(${u})`,t.beginPath(),t.roundRect(o+3,r+3,c-6,a-6,9),t.fill();let h=t.createLinearGradient(0,r,0,r+a);h.addColorStop(0,"rgba(255,240,220,.12)"),h.addColorStop(1,"rgba(0,0,0,.3)"),t.fillStyle=h,t.fill(),o+=c}r+=a}return e}function Ed(s,e=[120,72,38]){let[t,n]=Wn(512,256),i=Bi(s),r=14,a=512/r;for(let c=0;c<r;c++){let l=.8+i()*.28,u=e.map(h=>Math.round(h*l));n.fillStyle=`rgb(${u})`,n.fillRect(c*a,0,a,256),n.save(),n.translate(c*a+a,0),n.rotate(Math.PI/2),Ma(n,256,a,i,u,"28,14,5",6),n.restore(),n.fillStyle="rgba(15,8,3,.7)",n.fillRect(c*a,0,2,256)}let o=n.createLinearGradient(0,0,0,256);return o.addColorStop(0,"rgba(0,0,0,.25)"),o.addColorStop(.5,"rgba(255,220,170,.06)"),o.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=o,n.fillRect(0,0,512,256),t}function th(s,e){let[t,n]=Wn(512,384),i=Bi(s),r=n.createRadialGradient(256,192,40,256,192,300);r.addColorStop(0,"#ecd7a4"),r.addColorStop(.7,"#d2b077"),r.addColorStop(1,"#8a6232"),n.fillStyle=r,n.fillRect(0,0,512,384);for(let u=0;u<260;u++)n.fillStyle=`rgba(110,70,30,${(i()*.08).toFixed(3)})`,n.fillRect(i()*512,i()*384,2+i()*8,1+i()*3);n.strokeStyle="rgba(90,60,30,.25)",n.lineWidth=1;for(let u=1;u<8;u++)n.beginPath(),n.moveTo(u*64,0),n.lineTo(u*64,384),n.stroke();for(let u=1;u<6;u++)n.beginPath(),n.moveTo(0,u*64),n.lineTo(512,u*64),n.stroke();let a=[];for(let u=0;u<4;u++){let h=70+i()*370,d=60+i()*260,m=22+i()*46;a.push([h,d]),n.beginPath();for(let g=0;g<=40;g++){let x=g/40*Rn,p=m*(.7+.3*Math.sin(x*3+u)+.15*Math.sin(x*7+u*2)),f=h+Math.cos(x)*p*1.3,M=d+Math.sin(x)*p;g?n.lineTo(f,M):n.moveTo(f,M)}n.closePath(),n.fillStyle="rgba(150,120,60,.55)",n.fill(),n.strokeStyle="#5a3a1a",n.lineWidth=2.4,n.stroke(),n.strokeStyle="rgba(70,90,110,.35)",n.lineWidth=1;for(let g=1;g<3;g++)n.beginPath(),n.ellipse(h,d,m*1.3+g*8,m+g*8,0,0,Rn),n.stroke();n.fillStyle="rgba(60,90,40,.6)";for(let g=0;g<5;g++)n.beginPath(),n.arc(h+(i()-.5)*m,d+(i()-.5)*m*.6,3,0,Rn),n.fill()}n.setLineDash([7,7]),n.strokeStyle="#8a1e14",n.lineWidth=2.5,n.beginPath(),a.forEach(([u,h],d)=>d?n.quadraticCurveTo((u+a[d-1][0])/2+30,(h+a[d-1][1])/2-40,u,h):n.moveTo(u,h)),n.stroke(),n.setLineDash([]);let[o,c]=a[a.length-1];n.strokeStyle="#a0170e",n.lineWidth=5,n.beginPath(),n.moveTo(o-10,c-10),n.lineTo(o+10,c+10),n.moveTo(o+10,c-10),n.lineTo(o-10,c+10),n.stroke(),n.save(),n.translate(440,320),n.fillStyle="#5a3a1a";for(let u=0;u<8;u++)n.rotate(Rn/8),n.beginPath(),n.moveTo(0,-(u%2?18:34)),n.lineTo(5,0),n.lineTo(-5,0),n.closePath(),n.fill();n.beginPath(),n.arc(0,0,6,0,Rn),n.fillStyle="#d9b97a",n.fill(),n.restore(),n.fillStyle="#4b2e12",n.font="italic bold 26px Georgia,serif",n.textAlign="center",n.fillText(e,256,34);let l=n.createRadialGradient(256,192,170,256,192,330);return l.addColorStop(0,"rgba(60,30,10,0)"),l.addColorStop(1,"rgba(50,25,8,.85)"),n.fillStyle=l,n.fillRect(0,0,512,384),t}function px(s){let[e,t]=Wn(1024,256),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#5b3518"),n.addColorStop(1,"#2e180a"),t.fillStyle=n,t.beginPath(),t.roundRect(8,8,1008,240,40),t.fill(),t.lineWidth=10,t.strokeStyle="#c9963f",t.stroke(),t.font="bold 116px Georgia,serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#1b0d04",t.fillText(s,516,136);let i=t.createLinearGradient(0,70,0,190);return i.addColorStop(0,"#fff0b8"),i.addColorStop(1,"#d69a35"),t.fillStyle=i,t.fillText(s,512,130),e}function nh(s){let[e,t]=Wn(512,512);if(s==="checkers"){for(let n=0;n<8;n++)for(let i=0;i<8;i++)t.fillStyle=(n+i)%2?"#3a2412":"#d9b77c",t.fillRect(16+n*60,16+i*60,60,60);t.lineWidth=16,t.strokeStyle="#5a3418",t.strokeRect(8,8,496,496)}else if(s==="xo"){let n=Bi(7);t.fillStyle="#8a5a2e",t.fillRect(0,0,512,512),Ma(t,512,512,n,[138,90,46],"40,20,6",30),t.strokeStyle="rgba(25,12,4,.85)",t.lineWidth=12,t.lineCap="round";for(let a of[190,322])t.beginPath(),t.moveTo(a,70),t.lineTo(a,442),t.stroke(),t.beginPath(),t.moveTo(70,a),t.lineTo(442,a),t.stroke();t.strokeStyle="rgba(245,240,225,.92)",t.lineWidth=11;let i=(a,o)=>{t.beginPath(),t.moveTo(a-38,o-38),t.lineTo(a+38,o+38),t.moveTo(a+38,o-38),t.lineTo(a-38,o+38),t.stroke()},r=(a,o)=>{t.beginPath(),t.arc(a,o,40,0,Rn),t.stroke()};i(124,124),r(256,256),i(388,124),r(124,388)}else if(s==="target"){let n=Bi(3);t.fillStyle="#7a4a22",t.beginPath(),t.arc(256,256,250,0,Rn),t.fill(),Ma(t,512,512,n,[122,74,34],"30,14,4",40),["#e8d9b0","#9a1c14","#e8d9b0","#9a1c14","#e8d9b0","#1e1410"].forEach((r,a)=>{t.globalAlpha=.82,t.fillStyle=r,t.beginPath(),t.arc(256,256,210-a*36,0,Rn),t.fill()}),t.globalAlpha=1,t.strokeStyle="rgba(20,10,4,.6)",t.lineWidth=3;for(let r=0;r<14;r++)t.beginPath(),t.arc(256,256,30+r*16+n()*4,n()*Rn,n()*Rn),t.stroke();t.lineWidth=12,t.strokeStyle="#3b2a1c",t.beginPath(),t.arc(256,256,244,0,Rn),t.stroke()}return e}function mx(s){let[e,t]=Wn(128,128);t.fillStyle="#f2e8d2",t.beginPath(),t.roundRect(2,2,124,124,22),t.fill(),t.fillStyle="#2a1408";let n={1:[[64,64]],2:[[34,34],[94,94]],3:[[34,34],[64,64],[94,94]],4:[[34,34],[94,34],[34,94],[94,94]],5:[[34,34],[94,34],[64,64],[34,94],[94,94]],6:[[34,30],[94,30],[34,64],[94,64],[34,98],[94,98]]};for(let[i,r]of n[s])t.beginPath(),t.arc(i,r,11,0,Rn),t.fill();return e}function gx(){let[s,e]=Wn(512,320);e.fillStyle="#121214",e.fillRect(0,0,512,320);let t=Bi(9);for(let n=0;n<300;n++)e.fillStyle=`rgba(255,255,255,${(t()*.04).toFixed(3)})`,e.fillRect(t()*512,t()*320,3,1);e.fillStyle="#ece4d0",e.beginPath(),e.ellipse(256,130,62,66,0,0,Rn),e.fill(),e.beginPath(),e.roundRect(214,160,84,50,14),e.fill(),e.fillStyle="#121214",e.beginPath(),e.ellipse(232,136,17,20,0,0,Rn),e.ellipse(280,136,17,20,0,0,Rn),e.fill(),e.beginPath(),e.moveTo(256,160),e.lineTo(247,178),e.lineTo(265,178),e.fill();for(let n=0;n<4;n++)e.fillRect(226+n*18,190,6,18);return e.strokeStyle="#ece4d0",e.lineWidth=22,e.lineCap="round",e.beginPath(),e.moveTo(150,220),e.lineTo(362,296),e.moveTo(362,220),e.lineTo(150,296),e.stroke(),s}function bx(){let[s,e]=Wn(512,640),t=e.createLinearGradient(0,0,0,640);t.addColorStop(0,"#0b1a35"),t.addColorStop(.55,"#1d3d66"),t.addColorStop(.56,"#183552"),t.addColorStop(1,"#081626"),e.fillStyle=t,e.fillRect(0,0,512,640);let n=Bi(21);for(let r=0;r<120;r++)e.fillStyle=`rgba(255,255,240,${(.3+n()*.7).toFixed(2)})`,e.fillRect(n()*512,n()*330,1.6,1.6);let i=e.createRadialGradient(360,150,10,360,150,140);i.addColorStop(0,"rgba(230,240,255,.9)"),i.addColorStop(.25,"rgba(160,200,255,.35)"),i.addColorStop(1,"rgba(100,150,220,0)"),e.fillStyle=i,e.fillRect(200,0,312,320),e.fillStyle="#f4f6ff",e.beginPath(),e.arc(360,150,30,0,Rn),e.fill();for(let r=0;r<70;r++){let a=360+n()*270,o=20+n()*80;e.fillStyle=`rgba(200,225,255,${(.15+n()*.35).toFixed(2)})`,e.fillRect(330+(n()-.5)*140*(1+(a-360)/200),a,o*.5,1.5)}e.fillStyle="#060c16",e.beginPath(),e.moveTo(60,360),e.lineTo(210,360),e.lineTo(190,385),e.lineTo(80,385),e.closePath(),e.fill(),e.fillRect(130,230,4,130),e.fillRect(95,260,4,100),e.beginPath(),e.moveTo(134,236),e.quadraticCurveTo(175,280,136,330),e.closePath(),e.fill(),e.beginPath(),e.moveTo(99,266),e.quadraticCurveTo(130,300,101,340),e.closePath(),e.fill(),e.fillStyle="#ffc56a";for(let r=0;r<4;r++)e.fillRect(100+r*22,368,6,5);return s}function ih(s="rgba(255,214,140,1)",e="rgba(255,150,60,.35)"){let[t,n]=Wn(128,128),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,s),i.addColorStop(.25,e),i.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=i,n.fillRect(0,0,128,128),t}function xx(){let[s,e]=Wn(64,128),t=e.createRadialGradient(32,92,2,32,80,60);return t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.25,"rgba(255,210,90,.95)"),t.addColorStop(.6,"rgba(255,110,20,.55)"),t.addColorStop(1,"rgba(200,40,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,4),e.bezierCurveTo(54,50,60,90,32,124),e.bezierCurveTo(4,90,10,50,32,4),e.fill(),s}function _x(){let[s,e]=Wn(128,128),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.62)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),s}function vx(){let[s,e]=Wn(64,256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(170,200,255,.5)"),t.addColorStop(1,"rgba(170,200,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=n,e.fillRect(0,0,64,256),s}function yx(){let[s,e]=Wn(256,256);e.strokeStyle="rgba(255,214,120,1)",e.lineWidth=10,e.beginPath(),e.arc(128,128,100,0,Rn),e.stroke();let t=e.createRadialGradient(128,128,60,128,128,126);return t.addColorStop(0,"rgba(255,200,90,0)"),t.addColorStop(.75,"rgba(255,200,90,.35)"),t.addColorStop(1,"rgba(255,200,90,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),s}async function Sd(s,e={}){let t=e.base||"tavern/",n=e.lang||"en",i=!!e.reducedMotion,r=()=>Math.max(1,s.clientWidth),a=()=>Math.max(1,s.clientHeight),o=new ci({antialias:(devicePixelRatio||1)<2.5,powerPreference:"high-performance",alpha:!1});o.debug.checkShaderErrors=!1,o.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),o.setSize(r(),a()),o.outputColorSpace=Dt,o.toneMapping=Ai,o.toneMappingExposure=1.02,o.domElement.className="tv-canvas",s.append(o.domElement);let c=new li;c.background=new Ne("#120a05"),c.fog=new Ui("#1a0e06",11,24);let l=new bn(48,r()/a(),.1,60),u=new Set,h=I=>(u.add(I),I),d=I=>h(new Xt(I)),m=(I,J,$=0,ie=0,ue=0,xe=c)=>{let qe=new ke(h(I),J);return qe.position.set($,ie,ue),xe.add(qe),qe},g=(I,J,$,ie,ue,xe,qe,Se)=>m(new Bt(I,J,$),ie,ue,xe,qe,Se),x=(I,J,$,ie,ue,xe,qe,Se,ot=16)=>m(new Vt(I,J,$,ot),ie,ue,xe,qe,Se),p={floor:h(Sn(Md(11,[112,70,40]),2.2,1.6)),wall:h(Sn(eh(5),3,1)),wallSide:h(Sn(eh(8),3.6,1)),stone:h(Sn(fx(4),1.4,1.4)),stave:h(Sn(Ed(2))),staveDark:h(Sn(Ed(6,[86,52,28]))),top:h(Sn(Md(17,[110,66,34]),.7,.7)),counter:h(Sn(eh(13),4,.5))},f={floor:d({map:p.floor,roughness:.82,metalness:0}),wall:d({map:p.wall,roughness:.9}),wallSide:d({map:p.wallSide,roughness:.9}),beam:d({color:"#3b2210",roughness:.85,map:p.staveDark}),dark:d({color:"#24140a",roughness:.9}),wood:d({color:"#7a4a26",roughness:.75,map:p.stave}),top:d({map:p.top,roughness:.55,color:"#c08a58"}),counter:d({map:p.counter,roughness:.7,color:"#b07848"}),counterTop:d({color:"#4a2812",roughness:.35,metalness:.05,map:p.top}),stone:d({map:p.stone,roughness:.95}),iron:d({color:"#2d2a28",roughness:.45,metalness:.8}),brass:d({color:"#b98a3a",roughness:.35,metalness:.9}),rope:d({color:"#a8875a",roughness:1}),cloth:d({color:"#7c1f1a",roughness:.95}),soot:d({color:"#0c0705",roughness:1}),foam:d({color:"#f6ead0",roughness:.9}),ale:d({color:"#a8641a",roughness:.3,emissive:"#3a1a04"}),candle:d({color:"#efe2c4",roughness:.7,emissive:"#3a2a10"}),glassLamp:d({color:"#ffd28a",emissive:"#ffb04a",emissiveIntensity:2.2,roughness:.2})},M=["#2f6b3a","#6b2a1a","#2a3f6b","#7a6a2a","#3a2a1a","#5a1f4a"].map(I=>d({color:I,roughness:.12,metalness:.1,transparent:!0,opacity:.82,emissive:I,emissiveIntensity:.25})),v=16,A=12,N=4.6,P=-6.2,S=-8,q=8,T=m(new Zt(v,A+2),f.floor,0,0,-.2);T.rotation.x=-Math.PI/2;let D=m(new Zt(v,N),f.wall,0,N/2,P),oe=m(new Zt(A+2,N),f.wallSide,S,N/2,-.2);oe.rotation.y=Math.PI/2;let he=m(new Zt(A+2,N),f.wallSide,q,N/2,-.2);he.rotation.y=-Math.PI/2;let se=m(new Zt(v,A+2),f.dark,0,N,-.2);se.rotation.x=Math.PI/2,g(v,.14,.12,f.beam,0,1.15,P+.06),g(v,.26,.1,f.beam,0,.13,P+.05);for(let I of[-1,1]){let J=g(.12,.14,A+2,f.beam,I*(v/2-.06),1.15,-.2),$=g(.1,.26,A+2,f.beam,I*(v/2-.05),.13,-.2)}for(let I=-3;I<=3;I++)g(.3,.34,A+2,f.beam,I*2.5,N-.17,-.2);g(v,.34,.34,f.beam,0,N-.5,P+.2),g(v,.3,.3,f.beam,0,N-.45,2.6);for(let[I,J]of[[-7.7,P+.3],[7.7,P+.3],[-7.7,2.6],[7.7,2.6],[-3.9,P+.25],[3.9,P+.25],[-6.2,2.6],[6.2,2.6]])g(.36,N,.36,f.beam,I,N/2,J);for(let I of[-1,1]){let J=g(.14,3.4,.14,f.beam,I*7.9,2.3,1.2);J.rotation.x=.9}let B=h(new nn({map:h(Sn(_x(),1,1,!1)),transparent:!0,depthWrite:!1})),re=(I,J,$,ie=$,ue=1)=>{let xe=m(new Zt(1,1),B,I,.012,J);return xe.rotation.x=-Math.PI/2,xe.scale.set($,ie,1),xe.renderOrder=1,ue!==1&&(xe.material=B.clone(),h(xe.material),xe.material.opacity=ue),xe},de=new Hi,ge=I=>t+"models/"+I+".glb",pe=new Map,me=I=>(pe.has(I)||pe.set(I,de.loadAsync(ge(I)).catch(J=>(console.warn("[tavern] model",I,J),null))),pe.get(I)),we=["Characters_Henry","Characters_Captain_Barbarossa","Characters_Skeleton","Characters_Anne"],Pe=["Prop_Barrel","Prop_Bottle_1","Prop_Bottle_2","Potion1_Filled","Potion3_Filled","Potion5_Filled","Potion7_Filled","Candle","Torch_wall","Prop_Coins","Prop_Chest_Gold","Prop_Chest_Closed","Prop_Skull","Prop_Anchor","Weapon_Dagger","Weapon_Cutlass","Weapon_Sword_1","Weapon_Pistol","Weapon_Lute","Prop_Bucket_Fishes","Prop_GoldBag","Prop_Cannon","Prop_CannonBall","Prop_Bomb","Prop_Fish_Mackerel","Ship_Small","Book_Open","Book1_Closed","Book2_Closed","Bread","Plate"],Ye=0,le=we.length+Pe.length,_e={};await Promise.all([...we,...Pe].map(I=>me(I).then(J=>{var $;_e[I]=J,Ye++,($=e.onProgress)==null||$.call(e,Ye/le)})));let ne=[...we,...Pe].filter(I=>!_e[I]);ne.length&&console.warn("[tavern] missing models",ne);function Te(I,J,$,ie,ue={}){let xe=_e[I];if(!xe)return null;let qe=xe.scene.clone(!0);if(ue.h){let Se=new Vn().setFromObject(xe.scene),ot=Se.max.y-Se.min.y||1;qe.scale.setScalar(ue.h/ot)}else ue.s&&qe.scale.setScalar(ue.s);return qe.position.set(J,$,ie),qe.rotation.set(ue.rx||0,ue.ry||0,ue.rz||0),(ue.parent||c).add(qe),qe.traverse(Se=>{var ot,Ft;Se.isMesh&&(Se.material=Se.material.clone(),h(Se.material),Se.material.metalness>.5&&!ue.metal&&(Se.material.metalness=.4),Se.material.roughness=Math.max(.35,(ot=Se.material.roughness)!=null?ot:.8),ue.emissive&&(Se.material.emissive=new Ne(ue.emissive),Se.material.emissiveIntensity=(Ft=ue.emissiveI)!=null?Ft:.6))}),ue.shadow&&re(J,ie,ue.shadow),qe}let ht=h(new pn({map:h(Sn(xx(),1,1)),blending:An,depthWrite:!1,transparent:!0})),Mt=h(new pn({map:h(Sn(ih(),1,1)),blending:An,depthWrite:!1,transparent:!0,opacity:.55})),je=[];function Ie(I,J,$,ie=.1,ue=c,xe=.5){let qe=new mn(ht);qe.position.set(I,J,$),qe.scale.set(ie*.6,ie*1.2,1),ue.add(qe);let Se=null;ie>=.2&&(Se=new mn(Mt),Se.position.set(I,J,$),Se.scale.setScalar(ie*6*xe),ue.add(Se));let ot={f:qe,g:Se,s:ie,glow:xe,seed:Math.random()*100};return je.push(ot),ot}function Be(I,J,$,ie=c,ue=.2){return Te("Candle",I,J,$,{h:ue,parent:ie}),Ie(I,J+ue*1.04,$,.075,ie)}function K(I,J,$,ie=c,ue=!0){let xe=new _t;xe.position.set(I,J,$),ie.add(xe);let qe=new ke(h(new Vt(.065,.07,.16,12)),f.wood);qe.position.y=.08,xe.add(qe);for(let ot of[.03,.13]){let Ft=new ke(h(new $i(.071,.008,4,12)),f.iron);Ft.rotation.x=Math.PI/2,Ft.position.y=ot,xe.add(Ft)}let Se=new ke(h(new $i(.04,.012,6,10,Math.PI)),f.wood);if(Se.position.set(.07,.08,0),Se.rotation.z=-Math.PI/2,xe.add(Se),ue){let ot=new ke(h(new Vt(.068,.066,.03,12)),f.foam);ot.position.y=.165,xe.add(ot)}return xe}let cn=.74;function ct(I,J,$=0){let ie=new _t;ie.position.set(I,0,J),ie.rotation.y=$,c.add(ie);let ue=new ke(h(new Vt(.24,.24,.06,14)),f.top);ue.position.y=.46,ie.add(ue);for(let xe=0;xe<3;xe++){let qe=xe/3*Rn,Se=new ke(h(new Vt(.025,.03,.46,6)),f.beam);Se.position.set(Math.cos(qe)*.15,.23,Math.sin(qe)*.15),Se.rotation.z=Math.cos(qe)*.12,Se.rotation.x=-Math.sin(qe)*.12,ie.add(Se)}return re(I,J,.7),ie}function mt(I,J,$=0){Te("Prop_Barrel",I,0,J,{h:.5,ry:$,shadow:.8})}function tt(I,J,$=.85){let ie=new _t;ie.position.set(I,0,J),c.add(ie);let ue=new ke(h(new Vt($,$,.08,28)),f.top);ue.position.y=cn,ie.add(ue);let xe=new ke(h(new $i($,.03,6,28)),f.beam);xe.rotation.x=Math.PI/2,xe.position.y=cn,ie.add(xe);let qe=new ke(h(new Vt(.09,.13,cn-.04,10)),f.beam);qe.position.y=(cn-.04)/2,ie.add(qe);for(let Se=0;Se<2;Se++){let ot=new ke(h(new Bt(.7,.07,.1)),f.beam);ot.position.y=.04,ot.rotation.y=Se*Math.PI/2+.4,ie.add(ot)}return re(I,J,$*2.6,$*2.3),ie}let vt=cn+.04,H=new _t;c.add(H),g(7.2,1.08,.78,f.counter,0,.54,-4.1,H),g(7.5,.1,.98,f.counterTop,0,1.13,-4.1,H),g(7.3,.12,.1,f.beam,0,.06,-3.68,H);for(let I=-3;I<=3;I++)g(.12,.9,.06,f.beam,I*1.15,.58,-3.69,H);g(.06,.06,7,f.brass,0,.25,-3.6,H).rotation.y=Math.PI/2;let L=d({map:h(Sn(px(e.signText||"BATAN L\xD6VB\u018FR"),1,1)),roughness:.6,emissive:"#2a1404",emissiveIntensity:.4});m(new Zt(2.9,.72),L,0,.64,-3.63);let E=["Prop_Bottle_1","Potion3_Filled","Prop_Bottle_2","Potion1_Filled","Prop_Bottle_1","Potion5_Filled","Prop_Bottle_2","Potion7_Filled"];for(let[I,J]of[[1.75,13],[2.35,12],[2.95,11]]){g(5.6,.07,.42,f.beam,0,I,P+.26,H);for(let $=0;$<J;$++){let ie=-2.55+$*(5.1/(J-1)),ue=($*3+Math.round(I*7))%E.length;$%6===4?K(ie,I+.035,P+.3,H,!1):I>2.9&&$%5===2?Te("Book1_Closed",ie,I+.2,P+.3,{h:.3,rz:.12}):Te(E[ue],ie,I+.035,P+.3,{h:E[ue].startsWith("Potion")?.3:.34,ry:$})}}for(let I of[-2.9,2.9])g(.12,1.6,.44,f.beam,I,2.4,P+.26,H);for(let I of[-1,1]){g(1,.14,.9,f.beam,I*3.55,.07,P+.7,H),Te("Prop_Barrel",I*3.55,.14,P+.7,{h:.95,ry:.4*I}),Te("Prop_Barrel",I*3.55,1.09,P+.7,{h:.8,ry:-.3*I});let J=x(.03,.03,.16,f.brass,I*3.55,.55,P+1.15,H);J.rotation.x=Math.PI/2}[[-2.8,0],[-1.6,1],[-.9,0],[1.3,1],[2.4,0]].forEach(([I,J],$)=>K(I,1.18,-4+$%2*.15,H,!!J)),Te("Prop_Bottle_1",.95,1.18,-4.15,{h:.34}),Te("Prop_Coins",1.75,1.18,-3.95,{h:.1,ry:.8}),Be(-2.2,1.18,-4.2,H),Be(2,1.18,-4.25,H),Te("Prop_Chest_Gold",-3,0,-3.25,{h:.75,ry:.5,shadow:1.4,emissive:"#3a2400",emissiveI:.35}),Te("Prop_Bucket_Fishes",2.9,0,-3.35,{h:.5,ry:-.4,shadow:.9});let Q=S+.45,be=-2.6,ye=new _t;ye.position.set(Q,0,be),c.add(ye),g(.9,2.2,2.4,f.stone,0,1.1,0,ye),g(.92,1.15,1.3,f.soot,.02,.62,0,ye),g(1.15,.16,2.7,f.beam,.1,2.25,0,ye),g(.7,2.3,1.6,f.stone,-.1,3.4,0,ye);for(let I=0;I<3;I++){let J=x(.08,.08,.9,f.beam,.3,.14+(I===2?.12:0),(I-1)*.18,ye,8);J.rotation.x=Math.PI/2,J.rotation.z=(I-1)*.3}Ie(Q+.35,.48,be-.15,.5,c,.7),Ie(Q+.35,.45,be+.18,.42,c,.6),Ie(Q+.4,.42,be,.6,c,.9);let Ce=d({color:"#ff6a1a",emissive:"#ff4a00",emissiveIntensity:2,roughness:1});g(.4,.05,.9,Ce,Q+.35,.06,be),Te("Prop_Skull",Q+.15,2.33+.12,be+.5,{h:.24,ry:Math.PI/2}),Te("Ship_Small",Q+.2,2.33,be-.55,{h:.55,ry:Math.PI/2}),Be(Q+.15,2.33,be+1);let ze=new _t;ze.position.set(S+.03,2.25,1),ze.rotation.y=Math.PI/2,c.add(ze);let Ge=h(Sn(bx(),1,1));m(new Zt(1.5,1.85),d({map:Ge,emissive:"#ffffff",emissiveMap:Ge,emissiveIntensity:.9,roughness:.1}),0,0,0,ze),g(1.7,.12,.14,f.beam,0,.98,.02,ze),g(1.7,.16,.2,f.beam,0,-.98,.05,ze),g(.12,2,.14,f.beam,-.8,0,.02,ze),g(.12,2,.14,f.beam,.8,0,.02,ze),g(.06,1.85,.08,f.beam,0,0,.03,ze),g(1.5,.06,.08,f.beam,0,.2,.03,ze);let et=h(new nn({map:h(Sn(vx(),1,1,!1)),transparent:!0,blending:An,depthWrite:!1,opacity:.16,side:dn}));m(new Zt(1.6,4.2),et,S+1.6,1.3,1).rotation.set(0,Math.PI/2,-.95),m(new Zt(1.5,1.12),d({map:h(Sn(th(3,"Mare Incognitum"),1,1)),roughness:.9}),-5.4,2.6,P+.03).rotation.z=.03,m(new Zt(1.2,.9),d({map:h(Sn(th(12,"Insula"),1,1)),roughness:.9}),5.3,2.75,P+.03).rotation.z=-.05;let yt=m(new Zt(1.4,1.05),d({map:h(Sn(th(29,"Freeport"),1,1)),roughness:.9}),q-.03,2.85,-4.4);yt.rotation.y=-Math.PI/2;let Me=m(new Zt(1.45,.9,16,4),d({map:h(Sn(gx(),1,1)),roughness:1,side:dn}),0,3.72,P+.08),zt=Me.geometry.attributes.position.array.slice();Te("Weapon_Cutlass",Q+.3,3.15,be-.25,{h:.9,ry:Math.PI/2,rx:.6}),Te("Weapon_Cutlass",Q+.3,3.15,be+.25,{h:.9,ry:Math.PI/2,rx:-.6}),Te("Weapon_Pistol",-2,2.6,P+.07,{h:.22,rz:.2}),Te("Prop_Anchor",q-.1,2.4,2,{s:1.35,rx:Math.PI/2,ry:-Math.PI/2,metal:!0});for(let[I,J,$]of[[-3.72,P+.45,0],[3.72,P+.45,Math.PI],[S+.22,2.6,0],[q-.22,2.6,Math.PI]])Te("Torch_wall",I,2.15,J,{h:.55,ry:$+(Math.abs(I)>7?(I<0,0):-Math.PI/2)});Te("Prop_Cannon",-6.6,.32,3.4,{h:.75,ry:-.5,shadow:1.6});for(let[I,J]of[[-6,4],[-5.8,4.2],[-5.95,4.35]])Te("Prop_CannonBall",I,.1,J,{h:.2});Te("Prop_Barrel",-7.2,0,-5.2,{h:.9,ry:.3,shadow:1.2}),Te("Prop_Barrel",-6.5,0,-5.45,{h:.9,ry:1.3,shadow:1.2}),Te("Prop_Barrel",-6.85,.9,-5.3,{h:.75,ry:2}),Te("Prop_Bomb",-6,0,-5.3,{h:.35}),Ut(7.2,0,-5.5,.75,.2),Ut(7.2,.75,-5.45,.55,-.3),Te("Prop_GoldBag",7.15,1.3,-5.45,{h:.3}),Te("Prop_Barrel",6.3,0,-5.6,{h:.85,ry:.3,shadow:1.1}),Te("Prop_Chest_Closed",7,0,3.6,{h:.6,ry:-1.2,shadow:1.2}),Te("Weapon_Lute",-7.6,.5,1.95,{h:.9,ry:Math.PI/2,rx:-.25});for(let[I,J]of[[-6.9,-4.3],[6.95,3]]){let $=m(new $i(.32,.09,8,20),f.rope,I,.09,J);$.rotation.x=Math.PI/2,m(new $i(.22,.08,8,18),f.rope,I,.24,J).rotation.x=Math.PI/2,re(I,J,1.1)}function Ut(I,J,$,ie=.6,ue=0){let xe=g(ie,ie,ie,d({map:p.stave,color:"#b4875a",roughness:.85}),I,J+ie/2,$);xe.rotation.y=ue;for(let qe of[-1,1])g(ie*1.02,.06,.06,f.beam,0,qe*ie*.44,ie*.5,xe),g(.06,ie*1.02,.06,f.beam,qe*ie*.44,0,ie*.5,xe);return re(I,$,ie*1.8),xe}c.add(new ti("#ffcf9a","#2a1406",.5)),c.add(new Co("#4a2c18",.35));let St=new Cn("#8fb0ff",.55);St.position.set(-12,6,2),St.target.position.set(-3,0,1),c.add(St,St.target);let ut=new Cn("#ffcf9a",.55);ut.position.set(3,6,8),ut.target.position.set(0,1,-2),c.add(ut,ut.target);let it=[];function At(I,J,$,ie,ue,xe,qe=.12){let Se=new ni(ie,ue,xe,1.6);return Se.position.set(I,J,$),c.add(Se),it.push({l:Se,base:ue,flick:qe,seed:Math.random()*50}),Se}function qt(I,J,$,ie=.8){let ue=new _t;ue.position.set(I,J,$),c.add(ue);let xe=new ke(h(new Vt(.012,.012,ie,4)),f.iron);xe.position.y=ie/2,ue.add(xe);let qe=new ke(h(new Vt(.12,.14,.3,6,1,!0)),f.glassLamp);ue.add(qe);let Se=new ke(h(new Ni(.17,.14,6)),f.iron);Se.position.y=.22,ue.add(Se);let ot=new ke(h(new Vt(.15,.12,.05,6)),f.iron);ot.position.y=-.17,ue.add(ot);for(let Ct=0;Ct<6;Ct++){let Tt=Ct/6*Rn,Ze=new ke(h(new Bt(.015,.3,.015)),f.iron);Ze.position.set(Math.cos(Tt)*.135,0,Math.sin(Tt)*.135),ue.add(Ze)}let Ft=new mn(Mt);return Ft.scale.setScalar(1.3),ue.add(Ft),ue}qt(-4.2,3.2,-1.2,1.2),qt(4,3.2,-1.4,1.2),qt(-1.8,3.3,1.9,1.1),qt(2.6,3.3,2,1.1),At(-4.2,3.05,-1.2,"#ffb262",10,10),At(4,3.05,-1.4,"#ffb262",10,10),At(0,3.35,.7,"#ffc27a",16,14,.06),At(Q+1,.8,be,"#ff7a2a",16,8,.35);let Gt=new _t;Gt.position.set(0,3.6,.7),c.add(Gt),m(new $i(.75,.045,6,32),f.beam,0,0,0,Gt).rotation.x=Math.PI/2;for(let I=0;I<4;I++){let J=I/4*Rn+.3,$=m(new Vt(.008,.008,1.2,3),f.iron,Math.cos(J)*.37,.55,Math.sin(J)*.37,Gt);$.rotation.z=-Math.cos(J)*.55,$.rotation.x=Math.sin(J)*.55}for(let I=0;I<8;I++){let J=I/8*Rn;Be(Math.cos(J)*.75,.02,Math.sin(J)*.75,Gt,.16)}tt(-4.7,-.8,.78),mt(-3.85,-.25,.5);let gt=m(new Bt(.62,.03,.62),d({map:h(Sn(nh("checkers"),1,1)),roughness:.5}),-4.65,vt+.015,-.85);gt.rotation.y=.25;let Fe=h(new Vt(.03,.03,.018,12)),k=d({color:"#9a1e16",roughness:.4}),He=d({color:"#f0e2c4",roughness:.4});for(let I=0;I<8;I++)for(let J=0;J<8;J++){if((I+J)%2===0||J>2&&J<5||Math.sin(I*3.1+J*7.7)>.55)continue;let $=new ke(Fe,J<3?k:He);$.position.set((I-3.5)*.068,.02,(J-3.5)*.068),gt.add($)}K(-4.25,vt,-1.15,c,!0),Be(-5.05,vt,-1.25),tt(-1.8,1.7,.8),mt(-1,2.35,1);let Re=[1,2,3,4,5,6].map(I=>d({map:h(Sn(mx(I),1,1)),roughness:.4})),pt=[];for(let[I,J,$]of[[-1.7,1.55,.4],[-1.52,1.72,1.1]]){let ie=m(new Bt(.09,.09,.09),[Re[0],Re[5],Re[1],Re[4],Re[2],Re[3]],I,vt+.045,J);ie.rotation.y=$,pt.push(ie)}let Xe=x(.085,.07,.2,d({color:"#5a2a12",roughness:.8}),-2.05,vt+.09,1.5);Xe.rotation.z=1.4,Te("Prop_Coins",-1.95,vt,1.95,{h:.1,ry:.3}),K(-1.25,vt,1.95),Te("Plate",-1.45,vt,1.35,{h:.05}),Te("Bread",-1.45,vt+.03,1.35,{h:.14,ry:.6}),tt(2.5,1.5,.8),mt(1.65,2.15,.3);let jt=m(new Bt(.66,.03,.66),d({map:h(Sn(nh("xo"),1,1)),roughness:.7}),2.45,vt+.015,1.5);jt.rotation.y=-.2;let Lt=g(.08,.02,.02,d({color:"#f4f0e6",roughness:1}),2.85,vt+.01,1.85);Lt.rotation.y=.6,K(2,vt,1.85),Be(2.95,vt,1.2),Te("Prop_Fish_Mackerel",2.15,vt+.03,1.15,{h:.08,ry:1.2,rz:Math.PI/2});let j=new _t;j.position.set(q-.14,1.65,-2.3),j.rotation.y=-Math.PI/2,c.add(j),m(new Vt(.62,.62,.14,40),[d({map:p.stave,color:"#8a5a2a"}),d({map:h(Sn(nh("target"),1,1)),roughness:.8}),f.beam],0,0,0,j).rotation.x=Math.PI/2,g(.08,1.8,.08,f.beam,0,-.2,-.1,j);let ae=[];function ce(){let I=_e.Weapon_Dagger?_e.Weapon_Dagger.scene.clone(!0):new _t,J=new _t;return I.scale.setScalar(.3),I.rotation.x=-Math.PI/2,I.position.z=.26,J.add(I),J}for(let[I,J]of[[.6,.32],[2.4,.2],[4.1,.42]]){let $=ce();$.position.set(Math.cos(I)*J,Math.sin(I)*J,.05),j.add($),ae.push($)}g(.04,.01,1.4,d({color:"#e8dcc0",roughness:1}),5,.01,-1.8).rotation.y=.5,tt(4.75,-4.8,.7),Te("Prop_Barrel",5.45,0,-4.55,{h:.5}),Te("Prop_Barrel",4.05,0,-4.55,{h:.5}),K(4.65,vt,-4.7),K(4.95,vt,-4.95),Te("Prop_Bottle_2",4.5,vt,-5.05,{h:.3}),Be(4.85,vt,-4.55);for(let[I,J,$,ie]of[[4.4,2.6,"#5b1712",.006],[4.1,2.3,"#8a5a20",.008],[3.9,2.1,"#6b1a14",.009]]){let ue=m(new Zt(I,J),d({color:$,roughness:1}),.3,ie,-.6);ue.rotation.x=-Math.PI/2}let Z={};function Ee(I,J,$=!0){let ie=I.image,[ue,xe]=Wn(ie.width,ie.height);xe.drawImage(ie,0,0);let qe=xe.getImageData(0,0,ie.width,ie.height),Se=qe.data;for(let Ft=0;Ft<Se.length;Ft+=4){let Ct=Se[Ft]/255,Tt=Se[Ft+1]/255,Ze=Se[Ft+2]/255,kt=Math.max(Ct,Tt,Ze),Tn=Math.min(Ct,Tt,Ze),en=(kt+Tn)/2,Mi=0,ws=0;if(kt!==Tn){let ii=kt-Tn;ws=en>.5?ii/(2-kt-Tn):ii/(kt+Tn),Mi=kt===Ct?(Tt-Ze)/ii+(Tt<Ze?6:0):kt===Tt?(Ze-Ct)/ii+2:(Ct-Tt)/ii+4,Mi/=6}if($&&Mi>.02&&Mi<.12&&ws>.15&&ws<.75&&en>.25&&en<.85||ws<.12)continue;Mi=(Mi+J)%1;let Sa=en<.5?en*(1+ws):en+ws-en*ws,qr=2*en-Sa,Wo=ii=>(ii=(ii+1)%1,ii<1/6?qr+(Sa-qr)*6*ii:ii<.5?Sa:ii<2/3?qr+(Sa-qr)*(2/3-ii)*6:qr);Se[Ft]=Wo(Mi+1/3)*255,Se[Ft+1]=Wo(Mi)*255,Se[Ft+2]=Wo(Mi-1/3)*255}xe.putImageData(qe,0,0);let ot=h(new En(ue));return ot.colorSpace=Dt,ot.flipY=I.flipY,ot.magFilter=I.magFilter,ot.minFilter=I.minFilter,ot}function De(I,J,$,ie,ue,xe={}){let qe=_e[J];if(!qe)return null;let Se=Ri(qe.scene);qe.scene.updateMatrixWorld(!0);let ot=new Vn().setFromObject(qe.scene,!0),Ft=ot.max.y-ot.min.y||1;Se.scale.setScalar((xe.h||1.5)/Ft),Se.position.set($,xe.y||0,ie),Se.rotation.y=ue,c.add(Se);let Ct=null;Se.traverse(en=>{en.isMesh&&!en.isSkinnedMesh&&xe.noProp&&(en.visible=!1),en.isMesh&&(en.frustumCulled=!1,en.material=en.material.clone(),h(en.material),en.material.roughness=.75,en.material.metalness=0,xe.hue!=null&&en.material.map&&(Ct=Ct||Ee(en.material.map,xe.hue),en.material.map=Ct),xe.tint&&(en.material.color=new Ne(xe.tint)))});let Tt=new hi(Se),Ze={};for(let en of qe.animations)Ze[en.name]=en;let kt=Tt.clipAction(Ze.Idle||qe.animations[0]);kt.play(),kt.time=Math.random()*2;let Tn={id:I,root:Se,mixer:Tt,clips:Ze,idle:kt,current:null,height:xe.h||1.5,head:new F,modelH:Ft};return Z[I]=Tn,xe.shadow!==!1&&re($,ie,.9,.75,.9),Tn}function Ke(I,J,{loop:$=!1}={}){let ie=Z[I];if(!ie||i)return!1;let ue=ie.clips[J];if(!ue)return!1;let xe=ie.mixer.clipAction(ue);ie.current&&ie.current!==xe&&ie.current.fadeOut(.2),xe.reset(),xe.setLoop($?Uo:pa,$?1/0:1),xe.clampWhenFinished=!0,xe.fadeIn(.2).play(),ie.idle.fadeOut(.2),ie.current=xe;let qe=Se=>{Se.action===xe&&(ie.mixer.removeEventListener("finished",qe),xe.fadeOut(.3),ie.idle.reset().fadeIn(.3).play(),ie.current=null)};return ie.mixer.addEventListener("finished",qe),!0}g(2.2,.32,.7,f.beam,.35,.16,-4.85),De("barkeep","Characters_Henry",.35,-4.75,0,{h:1.95,y:.32,hue:.55,shadow:!1,noProp:!0}),De("oldsailor","Characters_Captain_Barbarossa",-5.45,-.7,1,{h:1.6}),De("dicer","Characters_Henry",-2.7,1.15,.95,{h:1.5}),De("xo","Characters_Skeleton",3.35,.95,-.95,{h:1.45}),De("knife","Characters_Anne",6.35,-3.5,.95,{h:1.5}),De("patronA","Characters_Captain_Barbarossa",4,-4.4,Math.PI/2-.3,{h:1.45,hue:.3}),De("patronB","Characters_Skeleton",5.45,-4.45,-Math.PI/2+.3,{h:1.4,tint:"#b8d8c8"}),De("patronC","Characters_Henry",-2.6,-3.35,.3,{h:1.5,hue:.8,noProp:!0});let ve=["patronA","patronB","patronC","barkeep","dicer","xo","oldsailor"],dt=3,bt=(()=>{try{let I=o.getContext(),J=I.getExtension("WEBGL_debug_renderer_info");return String(J?I.getParameter(J.UNMASKED_RENDERER_WEBGL):I.getParameter(I.RENDERER))}catch{return""}})(),Ht=/swiftshader|llvmpipe|software/i.test(bt),on=i||Ht?0:120,hn=h(new fn),rt=new Float32Array(on*3),an=Bi(77);for(let I=0;I<on;I++)rt[I*3]=(an()-.5)*14,rt[I*3+1]=.3+an()*3.8,rt[I*3+2]=-5+an()*8;hn.setAttribute("position",new ln(rt,3)),c.add(new fs(hn,h(new Qi({size:.035,map:h(Sn(ih("rgba(255,235,200,1)","rgba(255,220,160,.4)"),1,1)),transparent:!0,opacity:.5,depthWrite:!1,blending:An}))));let w=h(new nn({map:h(Sn(yx(),1,1)),transparent:!0,depthWrite:!1,blending:An,opacity:.55})),z=h(new nn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})),G=[{id:"barkeep",anchor:[.35,2.55,-4.7],ring:[.4,-3.3,1.6],hit:[[.4,1.5,-4.4],[1.6,2.2,1.4]],view:{pos:[.4,2,-.9],target:[.35,1.55,-4.6]}},{id:"oldsailor",anchor:[-5.35,2.25,-.7],ring:[-4.95,-.8,2.3],hit:[[-4.95,.9,-.8],[2.2,1.9,1.9]],view:{pos:[-3,2,2.6],target:[-5,1.05,-.85]}},{id:"dicer",anchor:[-2.7,2.15,1.15],ring:[-1.95,1.65,2.2],hit:[[-2.05,.85,1.6],[2.1,1.7,1.9]],view:{pos:[-.4,1.9,4.1],target:[-2.1,.95,1.4]}},{id:"xo",anchor:[3.35,2.1,.95],ring:[2.7,1.3,2.3],hit:[[2.8,.85,1.3],[2.1,1.8,1.9]],view:{pos:[1.5,1.95,4.3],target:[2.8,1,1.2]}},{id:"knife",anchor:[6.9,2.6,-2.9],ring:[6.3,-1.8,2.6],hit:[[6.4,1.3,-1.9],[3.2,2.6,2.4]],view:{pos:[2.6,2.05,1.6],target:[7,1.45,-2]}}],te=[];for(let I of G){let J=m(new Zt(1,1),w.clone(),I.ring[0],.02,I.ring[1]);h(J.material),J.rotation.x=-Math.PI/2,J.scale.setScalar(I.ring[2]),J.renderOrder=2,I.ringMesh=J;let[[$,ie,ue],[xe,qe,Se]]=I.hit,ot=m(new Bt(xe,qe,Se),z,$,ie,ue);ot.visible=!1,ot.userData.spot=I.id,te.push(ot),I.anchorV=new F(...I.anchor)}let ee={pos:new F(0,2.75,7.6),target:new F(0,1.3,-1.4)},X={pos:ee.pos.clone(),target:ee.target.clone(),yaw:0,from:null,to:null,t:1,dur:.9,focus:null,off:0,offGoal:.17};function Le(){let I=r()/a();l.aspect=I,l.fov=yd(2*Math.atan(Math.tan(42*Math.PI/180)/I)*180/Math.PI,40,72),l.updateProjectionMatrix()}Le();function Ue(I,J){X.from={pos:X.pos.clone(),target:X.target.clone()},X.to={pos:new F(...I.pos.isVector3?I.pos.toArray():I.pos),target:new F(...I.target.isVector3?I.target.toArray():I.target)},X.t=i?1:0,X.focus=J,i&&(X.pos.copy(X.to.pos),X.target.copy(X.to.target)),J&&(X.yaw=0)}let Je=new Nr,xt=new lt;function at(I,J){let $=o.domElement.getBoundingClientRect();xt.set((I-$.left)/$.width*2-1,-((J-$.top)/$.height)*2+1),Je.setFromCamera(xt,l);let ie=Je.intersectObjects(te,!1)[0];return ie?ie.object.userData.spot:null}let nt=null,Nt=o.domElement;Nt.style.touchAction="none";let un=I=>{if(!nt){nt={id:I.pointerId,x:I.clientX,y:I.clientY,yaw:X.yaw,moved:!1};try{Nt.setPointerCapture(I.pointerId)}catch{}}},Qt=I=>{if(!nt||I.pointerId!==nt.id)return;let J=I.clientX-nt.x;Math.abs(J)+Math.abs(I.clientY-nt.y)>10&&(nt.moved=!0),nt.moved&&!X.focus&&(X.yaw=yd(nt.yaw-J/r()*1.1,-.42,.42))},Ln=I=>{var $;if(!nt||I.pointerId!==nt.id)return;let J=nt;nt=null;try{Nt.releasePointerCapture(I.pointerId)}catch{}J.moved||($=e.onTap)==null||$.call(e,at(I.clientX,I.clientY))};Nt.addEventListener("pointerdown",un),Nt.addEventListener("pointermove",Qt),Nt.addEventListener("pointerup",Ln),Nt.addEventListener("pointercancel",Ln);let Pt=null,Ot=3.5;function b(){let I=ce();c.add(I);let J=Math.random()*Rn,$=.1+Math.random()*.35;Pt={k:I,start:new F(6.6,1.4,-3.25),end:new F(q-.14-.05,1.65+Math.sin(J)*$,-2.3+Math.cos(J)*$),t:0},Ke("knife","Sword")}let _=[];if(De("bard","Characters_Anne",-1.45,-3.55,.35,{h:1.45,hue:.12}),Z.bard){let I=Z.bard,J=.35,$=new F(Math.sin(J),0,Math.cos(J)),ie=new F(Math.cos(J),0,-Math.sin(J)),ue=new _t;ue.userData.dynamic=!0,c.add(ue),ue.rotation.y=J,Te("Weapon_Lute",0,0,0,{h:.7,parent:ue,rx:0,ry:Math.PI/2,rz:-1.05});let xe=I.root.position.clone().addScaledVector($,.24).addScaledVector(ie,-.05);xe.y=.78;let[qe,Se]=Wn(64,64);Se.font="bold 50px Georgia, serif",Se.textAlign="center",Se.textBaseline="middle",Se.shadowColor="rgba(0,0,0,.6)",Se.shadowBlur=4,Se.fillStyle="#ffd77a",Se.fillText("\u266A",32,34);let ot=h(new pn({map:h(Sn(qe,1,1)),transparent:!0,depthWrite:!1})),Ft=Array.from({length:4},(Ct,Tt)=>{let Ze=new mn(ot.clone());return h(Ze.material),Ze.scale.setScalar(.16),c.add(Ze),{m:Ze,ph:Tt/4}});_.push((Ct,Tt)=>{let Ze=Math.sin(Tt*7.5);I.root.rotation.y=J+Math.sin(Tt*1.1)*.07,I.root.position.y=Math.abs(Math.sin(Tt*2.2))*.02,ue.position.copy(xe),ue.position.y+=I.root.position.y,ue.rotation.z=Ze*.025,ue.rotation.y=I.root.rotation.y;for(let kt of Ft){let Tn=(Tt*.32+kt.ph)%1;kt.m.position.set(xe.x+Math.sin(Tn*6+kt.ph*9)*.18+$.x*.2,xe.y+.25+Tn*1.3,xe.z+Math.cos(Tn*5+kt.ph*7)*.15),kt.m.material.opacity=Math.sin(Tn*Math.PI)*.9,kt.m.scale.setScalar(.12+Tn*.08)}})}if(De("server","Characters_Anne",1.6,-3.2,0,{h:1.42,hue:.62}),Z.server&&Z.server.clips.Walk){let I=Z.server,J=I.mixer.clipAction(I.clips.Walk);J.setLoop(Uo,1/0);let $=[[1.6,-3.2],[3.4,-.6],[.6,.5],[-2.2,-.4],[-2.4,-2.2],[.2,-2.9]],ie=0,ue=2.5;_.push(xe=>{if(X.focus==="server")return;if(ue>0){ue-=xe,ue<=0&&(I.idle.fadeOut(.25),J.reset().fadeIn(.25).play());return}let[qe,Se]=$[(ie+1)%$.length],ot=I.root.position,Ft=qe-ot.x,Ct=Se-ot.z,Tt=Math.hypot(Ft,Ct),kt=Math.atan2(Ft,Ct)-I.root.rotation.y;kt=Math.atan2(Math.sin(kt),Math.cos(kt)),I.root.rotation.y+=kt*Math.min(1,xe*6);let Tn=Math.min(Tt,1.05*xe);Tt>1e-4&&(ot.x+=Ft/Tt*Tn,ot.z+=Ct/Tt*Tn),Tt<.05&&(ie=(ie+1)%$.length,ue=1.5+Math.random()*2.5,J.fadeOut(.25),I.idle.reset().fadeIn(.25).play(),Math.random()<.4&&Ke("server",Math.random()<.5?"Wave":"Yes"))})}{let I=h(new pn({map:h(Sn(ih("rgba(255,230,160,1)","rgba(255,120,30,.5)"),1,1)),blending:An,transparent:!0,depthWrite:!1})),J=Array.from({length:Ht?6:22},($,ie)=>{let ue=new mn(I);return ue.scale.setScalar(.05),c.add(ue),{m:ue,ph:Math.random(),sp:.25+Math.random()*.35,sx:(Math.random()-.5)*.6}});_.push(($,ie)=>{for(let ue of J){let xe=(ie*ue.sp+ue.ph)%1;ue.m.position.set(Q+.38+Math.sin(ie*2+ue.ph*20)*.08+ue.sx*xe,.5+xe*1.7,be+ue.sx*.5),ue.m.scale.setScalar(.06*(1-xe)+.01)}})}let y=I=>(I.userData.dynamic=!0,I);[Me,...pt,...te,...G.map(I=>I.ringMesh),j,...Object.values(Z).map(I=>I.root)].forEach(y);let C=new Map;function R(I){if(!I.isMeshStandardMaterial)return I;if(C.has(I))return C.get(I);let J=h(new Dr({map:I.map,color:I.color,emissive:I.emissive,emissiveMap:I.emissiveMap,emissiveIntensity:I.emissiveIntensity,transparent:I.transparent,opacity:I.opacity,side:I.side,alphaTest:I.alphaTest,depthWrite:I.depthWrite}));return C.set(I,J),J}function O(){c.updateMatrixWorld(!0);let I=new Map;c.traverse($=>{var xe,qe,Se,ot,Ft,Ct,Tt,Ze,kt,Tn;if(!$.isMesh||$.isSkinnedMesh||Array.isArray($.material)||!$.geometry)return;for(let en=$;en;en=en.parent)if(en.userData.dynamic)return;let ie=$.material,ue=[ie.type,((xe=ie.map)==null?void 0:xe.uuid)||"",((Se=(qe=ie.color)==null?void 0:qe.getHexString)==null?void 0:Se.call(qe))||"",((Ft=(ot=ie.emissive)==null?void 0:ot.getHexString)==null?void 0:Ft.call(ot))||"",((Ct=ie.emissiveMap)==null?void 0:Ct.uuid)||"",((Tt=ie.emissiveIntensity)!=null?Tt:0).toFixed(2),ie.transparent?1:0,((Ze=ie.opacity)!=null?Ze:1).toFixed(2),((kt=ie.roughness)!=null?kt:0).toFixed(2),((Tn=ie.metalness)!=null?Tn:0).toFixed(2),ie.side,ie.blending,ie.depthWrite?1:0,$.renderOrder].join("|");I.has(ue)||I.set(ue,{mat:ie,parts:[],order:$.renderOrder}),I.get(ue).parts.push($)});let J=0;for(let{mat:$,parts:ie,order:ue}of I.values()){if(ie.length<2)continue;let xe=[],qe=[],Se=[];for(let Tt of ie){let Ze=Tt.geometry.index?Tt.geometry.toNonIndexed():Tt.geometry.clone();Ze.applyMatrix4(Tt.matrixWorld);let kt=Ze.attributes.position.count;xe.push(Ze.attributes.position.array),qe.push(Ze.attributes.normal?Ze.attributes.normal.array:new Float32Array(kt*3)),Se.push(Ze.attributes.uv?Ze.attributes.uv.array:new Float32Array(kt*2)),Ze.dispose()}let ot=Tt=>{let Ze=Tt.reduce((en,Mi)=>en+Mi.length,0),kt=new Float32Array(Ze),Tn=0;for(let en of Tt)kt.set(en,Tn),Tn+=en.length;return kt},Ft=h(new fn);Ft.setAttribute("position",new ln(ot(xe),3)),Ft.setAttribute("normal",new ln(ot(qe),3)),Ft.setAttribute("uv",new ln(ot(Se),2)),Ft.computeBoundingSphere();let Ct=new ke(Ft,R($));Ct.renderOrder=ue,Ct.matrixAutoUpdate=!1,c.add(Ct);for(let Tt of ie)Tt.parent.remove(Tt);J+=ie.length}return J}let Y=e.noMerge?0:O(),fe=new li;fe.background=new Ne("#3a2210"),fe.add(new ti("#ffe2b8","#3a1d08",1.1));let V=new Cn("#ffd7a0",2.2);V.position.set(1.5,2.5,3),fe.add(V);let U=new Cn("#ff9a4a",1.4);U.position.set(-2,1.5,-2),fe.add(U);let W=new bn(24,1,.05,30),Oe={};function st(I){if(Oe[I])return Oe[I];let J=Z[I];if(!J)return"";let $=256,ie=new Pn($,$,{colorSpace:Dt}),ue=Ri(J.root);ue.position.set(0,0,0),ue.rotation.set(0,-.25,0),fe.add(ue);let xe=new hi(ue);J.clips.Idle&&(xe.clipAction(J.clips.Idle).play(),xe.update(.6)),ue.updateMatrixWorld(!0);let qe=J.height;W.position.set(0,qe*.78,qe*1.25),W.lookAt(0,qe*.66,0),o.setRenderTarget(ie),o.render(fe,W),o.setRenderTarget(null),fe.remove(ue),xe.stopAllAction();let Se=new Uint8Array($*$*4);o.readRenderTargetPixels(ie,0,0,$,$,Se),ie.dispose();let[ot,Ft]=Wn($,$),Ct=Ft.createImageData($,$);for(let Tt=0;Tt<$;Tt++)Ct.data.set(Se.subarray(($-1-Tt)*$*4,($-Tt)*$*4),Tt*$*4);return Ft.putImageData(Ct,0,0),Oe[I]=ot.toDataURL("image/png")}let It=0,wn=0,Rt=0,$t=!1,Ae=!1,$e=0,Ve=0,wt=!1,Et=new F,Wt=new F,ft={n:0,ms:0};function yi(I){var qe,Se,ot,Ft;if(It=requestAnimationFrame(yi),!$t)return;let J=wn?Math.min(.05,(I-wn)/1e3):1/60,$=Ve?Math.min(.25,(I-Ve)/1e3):1/60;if(wn=I,Ve=I,Rt+=J,$e++,X.t<1){X.t=Math.min(1,X.t+$/X.dur);let Ct=dx(X.t);X.pos.lerpVectors(X.from.pos,X.to.pos,Ct),X.target.lerpVectors(X.from.target,X.to.target,Ct)}!nt&&!X.focus&&(X.yaw*=.985);let ie=i?0:Math.sin(Rt*.35)*.04;Et.copy(X.pos).sub(X.target);let ue=X.yaw+(X.focus?0:ie*.3);l.position.set(X.target.x+Et.x*Math.cos(ue)+Et.z*Math.sin(ue),X.pos.y+(i?0:Math.sin(Rt*.5)*.03),X.target.z-Et.x*Math.sin(ue)+Et.z*Math.cos(ue)),l.lookAt(X.target);let xe=X.focus?r()*X.offGoal:0;X.off+=(xe-X.off)*Math.min(1,$*6),Math.abs(X.off-xe)<.5&&(X.off=xe),X.off>.5?l.setViewOffset(r(),a(),X.off,0,r(),a()):(qe=l.view)!=null&&qe.enabled&&l.clearViewOffset();for(let Ct of Object.values(Z))Ct.mixer.update(i?0:$);if(!i){for(let Ze of je){let kt=.82+Math.sin(Rt*11+Ze.seed)*.1+Math.sin(Rt*23.7+Ze.seed*2)*.08;Ze.f.scale.set(Ze.s*.6*(2-kt),Ze.s*1.2*kt,1),(Se=Ze.g)==null||Se.scale.setScalar(Ze.s*6*Ze.glow*(.9+kt*.15))}for(let Ze of it)Ze.l.intensity=Ze.base*(1-Ze.flick+Ze.flick*(.6+.4*Math.sin(Rt*9+Ze.seed)*Math.sin(Rt*3.3+Ze.seed*1.7)));let Ct=Me.geometry.attributes.position;for(let Ze=0;Ze<Ct.count;Ze++){let kt=zt[Ze*3],Tn=zt[Ze*3+1];Ct.array[Ze*3+2]=.02+Math.sin(kt*3+Rt*1.2)*.018*(.45-Tn)}Ct.needsUpdate=!0;for(let Ze=0;Ze<on;Ze++)rt[Ze*3+1]+=Math.sin(Rt*.4+Ze)*8e-4+6e-4,rt[Ze*3]+=Math.cos(Rt*.3+Ze*1.3)*9e-4,rt[Ze*3+1]>4.2&&(rt[Ze*3+1]=.3);hn.attributes.position.needsUpdate=!0;for(let Ze of _)Ze(J,Rt);if(dt-=J,dt<=0){let Ze=ve[Math.floor(Math.random()*ve.length)];Ze!==X.focus&&Ke(Ze,["Yes","No","Wave","Punch"][Math.floor(Math.random()*4)]),dt=2.5+Math.random()*4}if((Rt+1.3)%6<J*1.5){for(let Ze of pt)Ze.rotation.y=Math.random()*Rn;(ot=e.onSound)==null||ot.call(e,"diceTable")}if(Ot-=J,Ot<=0&&!Pt&&X.focus!=="knife"&&(b(),Ot=5+Math.random()*4),Pt){Pt.t+=J/.34;let Ze=Math.min(1,Pt.t);if(Ze>.35?(Pt.k.position.lerpVectors(Pt.start,Pt.end,(Ze-.35)/.65),Pt.k.position.y+=Math.sin((Ze-.35)/.65*Math.PI)*.12,Pt.k.lookAt(Wt.set(q+2,Pt.k.position.y,Pt.k.position.z))):Pt.k.position.copy(Pt.start),Ze>=1){(Ft=e.onSound)==null||Ft.call(e,"thunk");let kt=ae.length>6?ae.shift():null;kt&&kt.parent.remove(kt),j.worldToLocal(Pt.k.position),Pt.k.position.z=.05,Pt.k.rotation.set(0,0,0),j.add(Pt.k),ae.push(Pt.k),Pt=null}}}for(let Ct of G)Ct.ringMesh.material.opacity=X.focus===Ct.id?.95:.36+(i?0:Math.sin(Rt*2.4+Ct.ring[0])*.14);if(o.render(c,l),ft.n++,ft.ms+=$*1e3,e.adaptive!==!1&&ft.n>=90){let Ct=ft.ms/ft.n;ft.n=0,ft.ms=0;let Tt=o.getPixelRatio();Ct>38&&Tt>.76?(o.setPixelRatio(Math.max(.75,Tt-.25)),o.setSize(r(),a())):Ct<20&&Tt<Math.min(devicePixelRatio||1,1.5)-.01&&(o.setPixelRatio(Math.min(Math.min(devicePixelRatio||1,1.5),Tt+.25)),o.setSize(r(),a()))}if(e.onFrame){let Ct=r(),Tt=a(),Ze=[];for(let kt of G)Et.copy(kt.anchorV).project(l),Ze.push({id:kt.id,x:(Et.x*.5+.5)*Ct,y:(-Et.y*.5+.5)*Tt,visible:Et.z<1&&Et.z>-1});e.onFrame(Ze)}}let di=()=>{o.setSize(r(),a()),Le()};addEventListener("resize",di);let Un="ResizeObserver"in window?new ResizeObserver(di):null;Un==null||Un.observe(s);let Ea=!1,Ks=I=>{var J;I.preventDefault(),!Ea&&(Ae=!0,$t=!1,(J=e.onContextLost)==null||J.call(e))};Nt.addEventListener("webglcontextlost",Ks),X.pos.copy(ee.pos),X.target.copy(ee.target),X.t=1,i||(X.pos.set(0,2.4,10.5),X.target.set(0,1.5,-1),Ue(ee,null),X.dur=1.6,setTimeout(()=>X.dur=.9,1700)),o.compile(c,l);for(let I of["barkeep","oldsailor","dicer","xo","knife"])st(I);return $t=!0,It=requestAnimationFrame(yi),{spots:G.map(I=>I.id),_debug:{scene:c,renderer:o,npcs:Z,camera:l},get focused(){return X.focus},get moving(){return X.t<1},get frames(){return $e},get lost(){return Ae},get running(){return $t},info(){return{gpu:bt,software:Ht,heights:Object.fromEntries(Object.values(Z).map(I=>[I.id,+I.modelH.toFixed(3)])),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,textures:o.info.memory.textures,geometries:o.info.memory.geometries,lights:it.length,merged:Y,npcs:Object.keys(Z).length,models:Object.keys(_e).filter(I=>_e[I]).length,missing:ne,pixelRatio:o.getPixelRatio(),size:[r(),a()]}},portrait:st,react(I,J){let $={Yes:"Yes",No:"No",Wave:"Wave",Punch:"Punch",Think:null,Sword:"Sword",Hit:"HitReact"};return $[J]===null?!1:Ke(I,$[J]||J)},sample(){o.render(c,l);let I=o.getContext(),J=I.drawingBufferWidth,$=I.drawingBufferHeight,ie=new Uint8Array(4),ue=0,xe=0,qe=0,Se=0;for(let ot=1;ot<24;ot++)for(let Ft=1;Ft<48;Ft++){I.readPixels(Math.floor(J*Ft/48),Math.floor($*ot/24),1,1,I.RGBA,I.UNSIGNED_BYTE,ie);let Ct=(ie[0]+ie[1]+ie[2])/3;qe+=Ct,Se++,Ct<40&&ue++,Ct>150&&xe++}return{mean:qe/Se,lo:ue,hi:xe,n:Se}},probe(I,J){var ue,xe,qe;let $=o.domElement.getBoundingClientRect();xt.set((I-$.left)/$.width*2-1,-((J-$.top)/$.height)*2+1),Je.setFromCamera(xt,l);let ie=Je.intersectObjects(c.children,!0).filter(Se=>Se.object.visible&&!Se.object.isSprite&&!Se.object.isPoints)[0];return ie&&ie.object.geometry.computeBoundingBox(),ie?{bb:ie.object.geometry.boundingBox?[ie.object.geometry.boundingBox.min.toArray().map(Se=>+Se.toFixed(2)),ie.object.geometry.boundingBox.max.toArray().map(Se=>+Se.toFixed(2))]:null,verts:ie.object.geometry.attributes.position.count,map:!!ie.object.material.map,p:ie.point.toArray().map(Se=>+Se.toFixed(2)),color:(qe=(xe=(ue=ie.object.material)==null?void 0:ue.color)==null?void 0:xe.getHexString)==null?void 0:qe.call(xe),name:(()=>{let Se=[];for(let ot=ie.object;ot;ot=ot.parent)Se.push(ot.name||ot.type);return Se.join("<")})(),skinned:!!ie.object.isSkinnedMesh}:null},hitPoint(I){let J=te.find($=>$.userData.spot===I);return J?(J.geometry.computeBoundingBox(),Et.copy(J.position),Et.y+=J.geometry.boundingBox.max.y*.6,Et.project(l),{x:(Et.x*.5+.5)*r(),y:(-Et.y*.5+.5)*a()}):null},focus(I,J=.17){let $=G.find(ie=>ie.id===I);return $?(X.offGoal=J,Ue($.view,I),!0):!1},sit(I){let J=G.find(xe=>xe.id===I);if(!J)return!1;let $=J.view.pos,ie=J.view.target,ue=I==="knife"?.35:.55;return X.offGoal=0,Ue({pos:[$[0]+(ie[0]-$[0])*ue,$[1]+.35,$[2]+(ie[2]-$[2])*ue],target:ie},I),!0},unfocus(){return X.focus?(Ue(ee,null),!0):!1},pause(){$t=!1,wn=0,Ve=0,ft.n=0,ft.ms=0},resume(){Ae||($t=!0,wn=0,Ve=0)},dispose(){var I,J;Ea=!0,$t=!1,cancelAnimationFrame(It),removeEventListener("resize",di),Un==null||Un.disconnect(),Nt.removeEventListener("webglcontextlost",Ks),Nt.removeEventListener("pointerdown",un),Nt.removeEventListener("pointermove",Qt),Nt.removeEventListener("pointerup",Ln),Nt.removeEventListener("pointercancel",Ln);for(let $ of Object.values(Z))$.mixer.stopAllAction();c.traverse($=>{$.geometry&&$.geometry.dispose();let ie=$.material;ie&&(Array.isArray(ie)?ie:[ie]).forEach(ue=>{var xe,qe;(xe=ue.map)==null||xe.dispose(),(qe=ue.emissiveMap)==null||qe.dispose(),ue.dispose()})});for(let $ of u)(I=$.dispose)==null||I.call($);for(let $ of Object.values(_e))$==null||$.scene.traverse(ie=>{var ue,xe,qe,Se,ot;(ue=ie.geometry)==null||ue.dispose(),(qe=(xe=ie.material)==null?void 0:xe.map)==null||qe.dispose(),(ot=(Se=ie.material)==null?void 0:Se.dispose)==null||ot.call(Se)});o.dispose(),(J=o.forceContextLoss)==null||J.call(o),Nt.remove()}}}window.PirateTavern3D={create:Sd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
