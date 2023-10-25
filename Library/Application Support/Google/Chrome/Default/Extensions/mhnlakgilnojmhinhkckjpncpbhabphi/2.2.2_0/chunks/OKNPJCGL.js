import{A as Pa,H as Ua,J as Ma,Q as Pe,T as Da,e as Ra,w as he,x as ge,z as Re}from"./2XMGLZMD.js";import{a as _t}from"./64D36THL.js";import{a as Be}from"./3JX3VARJ.js";import{c as Na,f as z}from"./PQ35KENF.js";var no=Na((ga,ya)=>{(function(e,t){typeof ga=="object"&&typeof ya<"u"?ya.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs=t()})(ga,function(){"use strict";var e=1e3,t=6e4,a=36e5,r="millisecond",o="second",n="minute",i="hour",s="day",l="week",p="month",d="quarter",h="year",g="date",m="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(y){var c=["th","st","nd","rd"],u=y%100;return"["+y+(c[(u-20)%10]||c[u]||c[0])+"]"}},E=function(y,c,u){var b=String(y);return!b||b.length>=c?y:""+Array(c+1-b.length).join(u)+y},$={s:E,z:function(y){var c=-y.utcOffset(),u=Math.abs(c),b=Math.floor(u/60),f=u%60;return(c<=0?"+":"-")+E(b,2,"0")+":"+E(f,2,"0")},m:function y(c,u){if(c.date()<u.date())return-y(u,c);var b=12*(u.year()-c.year())+(u.month()-c.month()),f=c.clone().add(b,p),_=u-f<0,T=c.clone().add(b+(_?-1:1),p);return+(-(b+(u-f)/(_?f-T:T-f))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M:p,y:h,w:l,d:s,D:g,h:i,m:n,s:o,ms:r,Q:d}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},F="en",W={};W[F]=O;var j=function(y){return y instanceof Ne},v=function y(c,u,b){var f;if(!c)return F;if(typeof c=="string"){var _=c.toLowerCase();W[_]&&(f=_),u&&(W[_]=u,f=_);var T=c.split("-");if(!f&&T.length>1)return y(T[0])}else{var C=c.name;W[C]=c,f=C}return!b&&f&&(F=f),f||!b&&F},A=function(y,c){if(j(y))return y.clone();var u=typeof c=="object"?c:{};return u.date=y,u.args=arguments,new Ne(u)},w=$;w.l=v,w.i=j,w.w=function(y,c){return A(y,{locale:c.$L,utc:c.$u,x:c.$x,$offset:c.$offset})};var Ne=function(){function y(u){this.$L=v(u.locale,null,!0),this.parse(u)}var c=y.prototype;return c.parse=function(u){this.$d=function(b){var f=b.date,_=b.utc;if(f===null)return new Date(NaN);if(w.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var T=f.match(S);if(T){var C=T[2]-1||0,L=(T[7]||"0").substring(0,3);return _?new Date(Date.UTC(T[1],C,T[3]||1,T[4]||0,T[5]||0,T[6]||0,L)):new Date(T[1],C,T[3]||1,T[4]||0,T[5]||0,T[6]||0,L)}}return new Date(f)}(u),this.$x=u.x||{},this.init()},c.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},c.$utils=function(){return w},c.isValid=function(){return this.$d.toString()!==m},c.isSame=function(u,b){var f=A(u);return this.startOf(b)<=f&&f<=this.endOf(b)},c.isAfter=function(u,b){return A(u)<this.startOf(b)},c.isBefore=function(u,b){return this.endOf(b)<A(u)},c.$g=function(u,b,f){return w.u(u)?this[b]:this.set(f,u)},c.unix=function(){return Math.floor(this.valueOf()/1e3)},c.valueOf=function(){return this.$d.getTime()},c.startOf=function(u,b){var f=this,_=!!w.u(b)||b,T=w.p(u),C=function(Le,H){var me=w.w(f.$u?Date.UTC(f.$y,H,Le):new Date(f.$y,H,Le),f);return _?me:me.endOf(s)},L=function(Le,H){return w.w(f.toDate()[Le].apply(f.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(H)),f)},U=this.$W,Y=this.$M,ce=this.$D,pe="set"+(this.$u?"UTC":"");switch(T){case h:return _?C(1,0):C(31,11);case p:return _?C(1,Y):C(0,Y+1);case l:var st=this.$locale().weekStart||0,lt=(U<st?U+7:U)-st;return C(_?ce-lt:ce+(6-lt),Y);case s:case g:return L(pe+"Hours",0);case i:return L(pe+"Minutes",1);case n:return L(pe+"Seconds",2);case o:return L(pe+"Milliseconds",3);default:return this.clone()}},c.endOf=function(u){return this.startOf(u,!1)},c.$set=function(u,b){var f,_=w.p(u),T="set"+(this.$u?"UTC":""),C=(f={},f[s]=T+"Date",f[g]=T+"Date",f[p]=T+"Month",f[h]=T+"FullYear",f[i]=T+"Hours",f[n]=T+"Minutes",f[o]=T+"Seconds",f[r]=T+"Milliseconds",f)[_],L=_===s?this.$D+(b-this.$W):b;if(_===p||_===h){var U=this.clone().set(g,1);U.$d[C](L),U.init(),this.$d=U.set(g,Math.min(this.$D,U.daysInMonth())).$d}else C&&this.$d[C](L);return this.init(),this},c.set=function(u,b){return this.clone().$set(u,b)},c.get=function(u){return this[w.p(u)]()},c.add=function(u,b){var f,_=this;u=Number(u);var T=w.p(b),C=function(Y){var ce=A(_);return w.w(ce.date(ce.date()+Math.round(Y*u)),_)};if(T===p)return this.set(p,this.$M+u);if(T===h)return this.set(h,this.$y+u);if(T===s)return C(1);if(T===l)return C(7);var L=(f={},f[n]=t,f[i]=a,f[o]=e,f)[T]||1,U=this.$d.getTime()+u*L;return w.w(U,this)},c.subtract=function(u,b){return this.add(-1*u,b)},c.format=function(u){var b=this,f=this.$locale();if(!this.isValid())return f.invalidDate||m;var _=u||"YYYY-MM-DDTHH:mm:ssZ",T=w.z(this),C=this.$H,L=this.$m,U=this.$M,Y=f.weekdays,ce=f.months,pe=function(H,me,pa,xt){return H&&(H[me]||H(b,_))||pa[me].slice(0,xt)},st=function(H){return w.s(C%12||12,H,"0")},lt=f.meridiem||function(H,me,pa){var xt=H<12?"AM":"PM";return pa?xt.toLowerCase():xt},Le={YY:String(this.$y).slice(-2),YYYY:this.$y,M:U+1,MM:w.s(U+1,2,"0"),MMM:pe(f.monthsShort,U,ce,3),MMMM:pe(ce,U),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:pe(f.weekdaysMin,this.$W,Y,2),ddd:pe(f.weekdaysShort,this.$W,Y,3),dddd:Y[this.$W],H:String(C),HH:w.s(C,2,"0"),h:st(1),hh:st(2),a:lt(C,L,!0),A:lt(C,L,!1),m:String(L),mm:w.s(L,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:T};return _.replace(R,function(H,me){return me||Le[H]||T.replace(":","")})},c.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},c.diff=function(u,b,f){var _,T=w.p(b),C=A(u),L=(C.utcOffset()-this.utcOffset())*t,U=this-C,Y=w.m(this,C);return Y=(_={},_[h]=Y/12,_[p]=Y,_[d]=Y/3,_[l]=(U-L)/6048e5,_[s]=(U-L)/864e5,_[i]=U/a,_[n]=U/t,_[o]=U/e,_)[T]||U,f?Y:w.a(Y)},c.daysInMonth=function(){return this.endOf(p).$D},c.$locale=function(){return W[this.$L]},c.locale=function(u,b){if(!u)return this.$L;var f=this.clone(),_=v(u,b,!0);return _&&(f.$L=_),f},c.clone=function(){return w.w(this.$d,this)},c.toDate=function(){return new Date(this.valueOf())},c.toJSON=function(){return this.isValid()?this.toISOString():null},c.toISOString=function(){return this.$d.toISOString()},c.toString=function(){return this.$d.toUTCString()},y}(),ka=Ne.prototype;return A.prototype=ka,[["$ms",r],["$s",o],["$m",n],["$H",i],["$W",s],["$M",p],["$y",h],["$D",g]].forEach(function(y){ka[y[1]]=function(c){return this.$g(c,y[0],y[1])}}),A.extend=function(y,c){return y.$i||(y(c,Ne,A),y.$i=!0),A},A.locale=v,A.isDayjs=j,A.unix=function(y){return A(1e3*y)},A.en=W[F],A.Ls=W,A.p={},A})});var io=Na((ba,Ta)=>{(function(e,t){typeof ba=="object"&&typeof Ta<"u"?Ta.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_utc=t()})(ba,function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(r,o,n){var i=o.prototype;n.utc=function(m){var S={date:m,utc:!0,args:arguments};return new o(S)},i.utc=function(m){var S=n(this.toDate(),{locale:this.$L,utc:!0});return m?S.add(this.utcOffset(),e):S},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var s=i.parse;i.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),s.call(this,m)};var l=i.init;i.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else l.call(this)};var p=i.utcOffset;i.utcOffset=function(m,S){var R=this.$utils().u;if(R(m))return this.$u?0:R(this.$offset)?p.call(this):this.$offset;if(typeof m=="string"&&(m=function(F){F===void 0&&(F="");var W=F.match(t);if(!W)return null;var j=(""+W[0]).match(a)||["-",0,0],v=j[0],A=60*+j[1]+ +j[2];return A===0?0:v==="+"?A:-A}(m),m===null))return this;var O=Math.abs(m)<=16?60*m:m,E=this;if(S)return E.$offset=O,E.$u=m===0,E;if(m!==0){var $=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(E=this.local().add(O+$,e)).$offset=O,E.$x.$localOffset=$}else E=this.utc();return E};var d=i.format;i.format=function(m){var S=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,S)},i.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var h=i.toDate;i.toDate=function(m){return m==="s"&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var g=i.diff;i.diff=function(m,S,R){if(m&&this.$u===m.$u)return g.call(this,m,S,R);var O=this.local(),E=n(m).local();return g.call(O,E,S,R)}}})});var li=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ua={randomUUID:li};var Et,pi=new Uint8Array(16);function fa(){if(!Et&&(Et=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Et))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Et(pi)}var G=[];for(let e=0;e<256;++e)G.push((e+256).toString(16).slice(1));function La(e,t=0){return(G[e[t+0]]+G[e[t+1]]+G[e[t+2]]+G[e[t+3]]+"-"+G[e[t+4]]+G[e[t+5]]+"-"+G[e[t+6]]+G[e[t+7]]+"-"+G[e[t+8]]+G[e[t+9]]+"-"+G[e[t+10]]+G[e[t+11]]+G[e[t+12]]+G[e[t+13]]+G[e[t+14]]+G[e[t+15]]).toLowerCase()}function ui(e,t,a){if(ua.randomUUID&&!t&&!e)return ua.randomUUID();e=e||{};let r=e.random||(e.rng||fa)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=r[o];return t}return La(r)}var da=ui;function fi(){this.__data__=[],this.size=0}var Ba=fi;function di(e,t){return e===t||e!==e&&t!==t}var oe=di;function ci(e,t){for(var a=e.length;a--;)if(oe(e[a][0],t))return a;return-1}var ye=ci;var mi=Array.prototype,hi=mi.splice;function gi(e){var t=this.__data__,a=ye(t,e);if(a<0)return!1;var r=t.length-1;return a==r?t.pop():hi.call(t,a,1),--this.size,!0}var Wa=gi;function yi(e){var t=this.__data__,a=ye(t,e);return a<0?void 0:t[a][1]}var Ga=yi;function bi(e){return ye(this.__data__,e)>-1}var Ka=bi;function Ti(e,t){var a=this.__data__,r=ye(a,e);return r<0?(++this.size,a.push([e,t])):a[r][1]=t,this}var ja=Ti;function We(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}We.prototype.clear=Ba;We.prototype.delete=Wa;We.prototype.get=Ga;We.prototype.has=Ka;We.prototype.set=ja;var be=We;function xi(){this.__data__=new be,this.size=0}var Ya=xi;function _i(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var qa=_i;function Ei(e){return this.__data__.get(e)}var $a=Ei;function Si(e){return this.__data__.has(e)}var Fa=Si;var wi=typeof global=="object"&&global&&global.Object===Object&&global,St=wi;var Ai=typeof self=="object"&&self&&self.Object===Object&&self,Ii=St||Ai||Function("return this")(),M=Ii;var Oi=M.Symbol,B=Oi;var Ha=Object.prototype,Ci=Ha.hasOwnProperty,vi=Ha.toString,pt=B?B.toStringTag:void 0;function ki(e){var t=Ci.call(e,pt),a=e[pt];try{e[pt]=void 0;var r=!0}catch{}var o=vi.call(e);return r&&(t?e[pt]=a:delete e[pt]),o}var Xa=ki;var Ni=Object.prototype,Ri=Ni.toString;function Pi(e){return Ri.call(e)}var Va=Pi;var Ui="[object Null]",Mi="[object Undefined]",za=B?B.toStringTag:void 0;function Di(e){return e==null?e===void 0?Mi:Ui:za&&za in Object(e)?Xa(e):Va(e)}var K=Di;function Li(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var I=Li;var Bi="[object AsyncFunction]",Wi="[object Function]",Gi="[object GeneratorFunction]",Ki="[object Proxy]";function ji(e){if(!I(e))return!1;var t=K(e);return t==Wi||t==Gi||t==Bi||t==Ki}var Ge=ji;var Yi=M["__core-js_shared__"],wt=Yi;var Ja=function(){var e=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function qi(e){return!!Ja&&Ja in e}var Za=qi;var $i=Function.prototype,Fi=$i.toString;function Hi(e){if(e!=null){try{return Fi.call(e)}catch{}try{return e+""}catch{}}return""}var ue=Hi;var Xi=/[\\^$.*+?()[\]{}|]/g,Vi=/^\[object .+?Constructor\]$/,zi=Function.prototype,Ji=Object.prototype,Zi=zi.toString,Qi=Ji.hasOwnProperty,es=RegExp("^"+Zi.call(Qi).replace(Xi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ts(e){if(!I(e)||Za(e))return!1;var t=Ge(e)?es:Vi;return t.test(ue(e))}var Qa=ts;function as(e,t){return e?.[t]}var er=as;function rs(e,t){var a=er(e,t);return Qa(a)?a:void 0}var X=rs;var os=X(M,"Map"),Te=os;var ns=X(Object,"create"),fe=ns;function is(){this.__data__=fe?fe(null):{},this.size=0}var tr=is;function ss(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ar=ss;var ls="__lodash_hash_undefined__",ps=Object.prototype,us=ps.hasOwnProperty;function fs(e){var t=this.__data__;if(fe){var a=t[e];return a===ls?void 0:a}return us.call(t,e)?t[e]:void 0}var rr=fs;var ds=Object.prototype,cs=ds.hasOwnProperty;function ms(e){var t=this.__data__;return fe?t[e]!==void 0:cs.call(t,e)}var or=ms;var hs="__lodash_hash_undefined__";function gs(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=fe&&t===void 0?hs:t,this}var nr=gs;function Ke(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=tr;Ke.prototype.delete=ar;Ke.prototype.get=rr;Ke.prototype.has=or;Ke.prototype.set=nr;var ca=Ke;function ys(){this.size=0,this.__data__={hash:new ca,map:new(Te||be),string:new ca}}var ir=ys;function bs(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var sr=bs;function Ts(e,t){var a=e.__data__;return sr(t)?a[typeof t=="string"?"string":"hash"]:a.map}var xe=Ts;function xs(e){var t=xe(this,e).delete(e);return this.size-=t?1:0,t}var lr=xs;function _s(e){return xe(this,e).get(e)}var pr=_s;function Es(e){return xe(this,e).has(e)}var ur=Es;function Ss(e,t){var a=xe(this,e),r=a.size;return a.set(e,t),this.size+=a.size==r?0:1,this}var fr=Ss;function je(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=ir;je.prototype.delete=lr;je.prototype.get=pr;je.prototype.has=ur;je.prototype.set=fr;var Ue=je;var ws=200;function As(e,t){var a=this.__data__;if(a instanceof be){var r=a.__data__;if(!Te||r.length<ws-1)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new Ue(r)}return a.set(e,t),this.size=a.size,this}var dr=As;function Ye(e){var t=this.__data__=new be(e);this.size=t.size}Ye.prototype.clear=Ya;Ye.prototype.delete=qa;Ye.prototype.get=$a;Ye.prototype.has=Fa;Ye.prototype.set=dr;var ne=Ye;function Is(e,t){for(var a=-1,r=e==null?0:e.length;++a<r&&t(e[a],a,e)!==!1;);return e}var At=Is;var Os=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}(),qe=Os;function Cs(e,t,a){t=="__proto__"&&qe?qe(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}var _e=Cs;var vs=Object.prototype,ks=vs.hasOwnProperty;function Ns(e,t,a){var r=e[t];(!(ks.call(e,t)&&oe(r,a))||a===void 0&&!(t in e))&&_e(e,t,a)}var $e=Ns;function Rs(e,t,a,r){var o=!a;a||(a={});for(var n=-1,i=t.length;++n<i;){var s=t[n],l=r?r(a[s],e[s],s,a,e):void 0;l===void 0&&(l=e[s]),o?_e(a,s,l):$e(a,s,l)}return a}var J=Rs;function Ps(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}var cr=Ps;function Us(e){return e!=null&&typeof e=="object"}var P=Us;var Ms="[object Arguments]";function Ds(e){return P(e)&&K(e)==Ms}var ma=Ds;var mr=Object.prototype,Ls=mr.hasOwnProperty,Bs=mr.propertyIsEnumerable,Ws=ma(function(){return arguments}())?ma:function(e){return P(e)&&Ls.call(e,"callee")&&!Bs.call(e,"callee")},ee=Ws;var Gs=Array.isArray,x=Gs;function Ks(){return!1}var hr=Ks;var br=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=br&&typeof module=="object"&&module&&!module.nodeType&&module,js=gr&&gr.exports===br,yr=js?M.Buffer:void 0,Ys=yr?yr.isBuffer:void 0,qs=Ys||hr,te=qs;var $s=9007199254740991,Fs=/^(?:0|[1-9]\d*)$/;function Hs(e,t){var a=typeof e;return t=t??$s,!!t&&(a=="number"||a!="symbol"&&Fs.test(e))&&e>-1&&e%1==0&&e<t}var Ee=Hs;var Xs=9007199254740991;function Vs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Xs}var Fe=Vs;var zs="[object Arguments]",Js="[object Array]",Zs="[object Boolean]",Qs="[object Date]",el="[object Error]",tl="[object Function]",al="[object Map]",rl="[object Number]",ol="[object Object]",nl="[object RegExp]",il="[object Set]",sl="[object String]",ll="[object WeakMap]",pl="[object ArrayBuffer]",ul="[object DataView]",fl="[object Float32Array]",dl="[object Float64Array]",cl="[object Int8Array]",ml="[object Int16Array]",hl="[object Int32Array]",gl="[object Uint8Array]",yl="[object Uint8ClampedArray]",bl="[object Uint16Array]",Tl="[object Uint32Array]",N={};N[fl]=N[dl]=N[cl]=N[ml]=N[hl]=N[gl]=N[yl]=N[bl]=N[Tl]=!0;N[zs]=N[Js]=N[pl]=N[Zs]=N[ul]=N[Qs]=N[el]=N[tl]=N[al]=N[rl]=N[ol]=N[nl]=N[il]=N[sl]=N[ll]=!1;function xl(e){return P(e)&&Fe(e.length)&&!!N[K(e)]}var Tr=xl;function _l(e){return function(t){return e(t)}}var Se=_l;var xr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ut=xr&&typeof module=="object"&&module&&!module.nodeType&&module,El=ut&&ut.exports===xr,ha=El&&St.process,Sl=function(){try{var e=ut&&ut.require&&ut.require("util").types;return e||ha&&ha.binding&&ha.binding("util")}catch{}}(),de=Sl;var _r=de&&de.isTypedArray,wl=_r?Se(_r):Tr,we=wl;var Al=Object.prototype,Il=Al.hasOwnProperty;function Ol(e,t){var a=x(e),r=!a&&ee(e),o=!a&&!r&&te(e),n=!a&&!r&&!o&&we(e),i=a||r||o||n,s=i?cr(e.length,String):[],l=s.length;for(var p in e)(t||Il.call(e,p))&&!(i&&(p=="length"||o&&(p=="offset"||p=="parent")||n&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Ee(p,l)))&&s.push(p);return s}var It=Ol;var Cl=Object.prototype;function vl(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Cl;return e===a}var Ae=vl;function kl(e,t){return function(a){return e(t(a))}}var Ot=kl;var Nl=Ot(Object.keys,Object),Er=Nl;var Rl=Object.prototype,Pl=Rl.hasOwnProperty;function Ul(e){if(!Ae(e))return Er(e);var t=[];for(var a in Object(e))Pl.call(e,a)&&a!="constructor"&&t.push(a);return t}var He=Ul;function Ml(e){return e!=null&&Fe(e.length)&&!Ge(e)}var q=Ml;function Dl(e){return q(e)?It(e):He(e)}var ie=Dl;function Ll(e,t){return e&&J(t,ie(t),e)}var Sr=Ll;function Bl(e){var t=[];if(e!=null)for(var a in Object(e))t.push(a);return t}var wr=Bl;var Wl=Object.prototype,Gl=Wl.hasOwnProperty;function Kl(e){if(!I(e))return wr(e);var t=Ae(e),a=[];for(var r in e)r=="constructor"&&(t||!Gl.call(e,r))||a.push(r);return a}var Ar=Kl;function jl(e){return q(e)?It(e,!0):Ar(e)}var se=jl;function Yl(e,t){return e&&J(t,se(t),e)}var Ir=Yl;var kr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Or=kr&&typeof module=="object"&&module&&!module.nodeType&&module,ql=Or&&Or.exports===kr,Cr=ql?M.Buffer:void 0,vr=Cr?Cr.allocUnsafe:void 0;function $l(e,t){if(t)return e.slice();var a=e.length,r=vr?vr(a):new e.constructor(a);return e.copy(r),r}var Ct=$l;function Fl(e,t){var a=-1,r=e.length;for(t||(t=Array(r));++a<r;)t[a]=e[a];return t}var Xe=Fl;function Hl(e,t){for(var a=-1,r=e==null?0:e.length,o=0,n=[];++a<r;){var i=e[a];t(i,a,e)&&(n[o++]=i)}return n}var Nr=Hl;function Xl(){return[]}var vt=Xl;var Vl=Object.prototype,zl=Vl.propertyIsEnumerable,Rr=Object.getOwnPropertySymbols,Jl=Rr?function(e){return e==null?[]:(e=Object(e),Nr(Rr(e),function(t){return zl.call(e,t)}))}:vt,Ve=Jl;function Zl(e,t){return J(e,Ve(e),t)}var Pr=Zl;function Ql(e,t){for(var a=-1,r=t.length,o=e.length;++a<r;)e[o+a]=t[a];return e}var Ie=Ql;var ep=Ot(Object.getPrototypeOf,Object),ze=ep;var tp=Object.getOwnPropertySymbols,ap=tp?function(e){for(var t=[];e;)Ie(t,Ve(e)),e=ze(e);return t}:vt,kt=ap;function rp(e,t){return J(e,kt(e),t)}var Ur=rp;function op(e,t,a){var r=t(e);return x(e)?r:Ie(r,a(e))}var Nt=op;function np(e){return Nt(e,ie,Ve)}var ft=np;function ip(e){return Nt(e,se,kt)}var Rt=ip;var sp=X(M,"DataView"),Pt=sp;var lp=X(M,"Promise"),Ut=lp;var pp=X(M,"Set"),Oe=pp;var up=X(M,"WeakMap"),Mt=up;var Mr="[object Map]",fp="[object Object]",Dr="[object Promise]",Lr="[object Set]",Br="[object WeakMap]",Wr="[object DataView]",dp=ue(Pt),cp=ue(Te),mp=ue(Ut),hp=ue(Oe),gp=ue(Mt),Me=K;(Pt&&Me(new Pt(new ArrayBuffer(1)))!=Wr||Te&&Me(new Te)!=Mr||Ut&&Me(Ut.resolve())!=Dr||Oe&&Me(new Oe)!=Lr||Mt&&Me(new Mt)!=Br)&&(Me=function(e){var t=K(e),a=t==fp?e.constructor:void 0,r=a?ue(a):"";if(r)switch(r){case dp:return Wr;case cp:return Mr;case mp:return Dr;case hp:return Lr;case gp:return Br}return t});var V=Me;var yp=Object.prototype,bp=yp.hasOwnProperty;function Tp(e){var t=e.length,a=new e.constructor(t);return t&&typeof e[0]=="string"&&bp.call(e,"index")&&(a.index=e.index,a.input=e.input),a}var Gr=Tp;var xp=M.Uint8Array,Je=xp;function _p(e){var t=new e.constructor(e.byteLength);return new Je(t).set(new Je(e)),t}var Ze=_p;function Ep(e,t){var a=t?Ze(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}var Kr=Ep;var Sp=/\w*$/;function wp(e){var t=new e.constructor(e.source,Sp.exec(e));return t.lastIndex=e.lastIndex,t}var jr=wp;var Yr=B?B.prototype:void 0,qr=Yr?Yr.valueOf:void 0;function Ap(e){return qr?Object(qr.call(e)):{}}var $r=Ap;function Ip(e,t){var a=t?Ze(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}var Dt=Ip;var Op="[object Boolean]",Cp="[object Date]",vp="[object Map]",kp="[object Number]",Np="[object RegExp]",Rp="[object Set]",Pp="[object String]",Up="[object Symbol]",Mp="[object ArrayBuffer]",Dp="[object DataView]",Lp="[object Float32Array]",Bp="[object Float64Array]",Wp="[object Int8Array]",Gp="[object Int16Array]",Kp="[object Int32Array]",jp="[object Uint8Array]",Yp="[object Uint8ClampedArray]",qp="[object Uint16Array]",$p="[object Uint32Array]";function Fp(e,t,a){var r=e.constructor;switch(t){case Mp:return Ze(e);case Op:case Cp:return new r(+e);case Dp:return Kr(e,a);case Lp:case Bp:case Wp:case Gp:case Kp:case jp:case Yp:case qp:case $p:return Dt(e,a);case vp:return new r;case kp:case Pp:return new r(e);case Np:return jr(e);case Rp:return new r;case Up:return $r(e)}}var Fr=Fp;var Hr=Object.create,Hp=function(){function e(){}return function(t){if(!I(t))return{};if(Hr)return Hr(t);e.prototype=t;var a=new e;return e.prototype=void 0,a}}(),Xr=Hp;function Xp(e){return typeof e.constructor=="function"&&!Ae(e)?Xr(ze(e)):{}}var Lt=Xp;var Vp="[object Map]";function zp(e){return P(e)&&V(e)==Vp}var Vr=zp;var zr=de&&de.isMap,Jp=zr?Se(zr):Vr,Jr=Jp;var Zp="[object Set]";function Qp(e){return P(e)&&V(e)==Zp}var Zr=Qp;var Qr=de&&de.isSet,eu=Qr?Se(Qr):Zr,eo=eu;var tu=1,au=2,ru=4,to="[object Arguments]",ou="[object Array]",nu="[object Boolean]",iu="[object Date]",su="[object Error]",ao="[object Function]",lu="[object GeneratorFunction]",pu="[object Map]",uu="[object Number]",ro="[object Object]",fu="[object RegExp]",du="[object Set]",cu="[object String]",mu="[object Symbol]",hu="[object WeakMap]",gu="[object ArrayBuffer]",yu="[object DataView]",bu="[object Float32Array]",Tu="[object Float64Array]",xu="[object Int8Array]",_u="[object Int16Array]",Eu="[object Int32Array]",Su="[object Uint8Array]",wu="[object Uint8ClampedArray]",Au="[object Uint16Array]",Iu="[object Uint32Array]",k={};k[to]=k[ou]=k[gu]=k[yu]=k[nu]=k[iu]=k[bu]=k[Tu]=k[xu]=k[_u]=k[Eu]=k[pu]=k[uu]=k[ro]=k[fu]=k[du]=k[cu]=k[mu]=k[Su]=k[wu]=k[Au]=k[Iu]=!0;k[su]=k[ao]=k[hu]=!1;function Bt(e,t,a,r,o,n){var i,s=t&tu,l=t&au,p=t&ru;if(a&&(i=o?a(e,r,o,n):a(e)),i!==void 0)return i;if(!I(e))return e;var d=x(e);if(d){if(i=Gr(e),!s)return Xe(e,i)}else{var h=V(e),g=h==ao||h==lu;if(te(e))return Ct(e,s);if(h==ro||h==to||g&&!o){if(i=l||g?{}:Lt(e),!s)return l?Ur(e,Ir(i,e)):Pr(e,Sr(i,e))}else{if(!k[h])return o?e:{};i=Fr(e,h,s)}}n||(n=new ne);var m=n.get(e);if(m)return m;n.set(e,i),eo(e)?e.forEach(function(O){i.add(Bt(O,t,a,O,e,n))}):Jr(e)&&e.forEach(function(O,E){i.set(E,Bt(O,t,a,E,e,n))});var S=p?l?Rt:ft:l?se:ie,R=d?void 0:S(e);return At(R||e,function(O,E){R&&(E=O,O=e[E]),$e(i,E,Bt(O,t,a,E,e,n))}),i}var Wt=Bt;var Ou=1,Cu=4;function vu(e){return Wt(e,Ou|Cu)}var ae=vu;var oo=z(Be());var hx=async()=>(await new Ce().postMessage({event:"Client_checkChatGPTStatus",data:{}})).success,gx=()=>{let e=new Ce;return new Promise(t=>{let a=120,r=n=>new Promise(i=>setTimeout(i,n)),o=async()=>{let n=await e.postMessage({event:"Client_checkChatGPTStatus",data:{}});n.success&&(n?.data?.status!=="success"?(a--,a<=0&&t(!1),await r(1e3),await o()):t(!0))};o()})},Ce=class{constructor(t={}){this.runtime=t.runtime||"client"}async postMessage(t){try{return await oo.default.runtime.sendMessage({id:he,event:t.event,data:{...t.data,_RUNTIME_:this.runtime}})}catch(a){return{success:!1,message:a.message,data:{}}}}destroy(){}},yx=async()=>{let t=await new Ce({runtime:"client"}).postMessage({event:"Client_chatGetFiles",data:{}});return t.success?t.data.map(a=>{let r=ae(a);return delete r.file,r}):[]};var so=z(_t()),lo=e=>{(0,so.useEffect)(()=>{let t=()=>{e()};return window.addEventListener("focus",t),()=>{window.removeEventListener("focus",t)}},[])};var Qe=z(_t());function ku(e){let t=(0,Qe.useRef)(),a=(0,Qe.useRef)(!1),r=(0,Qe.useRef)(!1);a.current&&(r.current=!0),(0,Qe.useEffect)(()=>{if(!a.current)return a.current=!0,t.current=e(),()=>{r.current&&t.current&&t.current()}},[])}var po=ku;var D=z(Be());var ni=z(_t());var ii=z(no()),si=z(io());var it=z(Be());var Nu="[object Symbol]";function Ru(e){return typeof e=="symbol"||P(e)&&K(e)==Nu}var re=Ru;function Pu(e,t){for(var a=-1,r=e==null?0:e.length,o=Array(r);++a<r;)o[a]=t(e[a],a,e);return o}var ve=Pu;var Uu=1/0,uo=B?B.prototype:void 0,fo=uo?uo.toString:void 0;function co(e){if(typeof e=="string")return e;if(x(e))return ve(e,co)+"";if(re(e))return fo?fo.call(e):"";var t=e+"";return t=="0"&&1/e==-Uu?"-0":t}var mo=co;var Mu=/\s/;function Du(e){for(var t=e.length;t--&&Mu.test(e.charAt(t)););return t}var ho=Du;var Lu=/^\s+/;function Bu(e){return e&&e.slice(0,ho(e)+1).replace(Lu,"")}var go=Bu;var yo=0/0,Wu=/^[-+]0x[0-9a-f]+$/i,Gu=/^0b[01]+$/i,Ku=/^0o[0-7]+$/i,ju=parseInt;function Yu(e){if(typeof e=="number")return e;if(re(e))return yo;if(I(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=I(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=go(e);var a=Gu.test(e);return a||Ku.test(e)?ju(e.slice(2),a?2:8):Wu.test(e)?yo:+e}var dt=Yu;var bo=1/0,qu=17976931348623157e292;function $u(e){if(!e)return e===0?e:0;if(e=dt(e),e===bo||e===-bo){var t=e<0?-1:1;return t*qu}return e===e?e:0}var xa=$u;function Fu(e){return e}var Z=Fu;function Hu(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var To=Hu;function Xu(){}var xo=Xu;var Vu=800,zu=16,Ju=Date.now;function Zu(e){var t=0,a=0;return function(){var r=Ju(),o=zu-(r-a);if(a=r,o>0){if(++t>=Vu)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var _o=Zu;function Qu(e){return function(){return e}}var Eo=Qu;var ef=qe?function(e,t){return qe(e,"toString",{configurable:!0,enumerable:!1,value:Eo(t),writable:!0})}:Z,So=ef;var tf=_o(So),Gt=tf;function af(e,t,a,r){for(var o=e.length,n=a+(r?1:-1);r?n--:++n<o;)if(t(e[n],n,e))return n;return-1}var wo=af;function rf(e){return e!==e}var Ao=rf;function of(e,t,a){for(var r=a-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}var Io=of;function nf(e,t,a){return t===t?Io(e,t,a):wo(e,Ao,a)}var Oo=nf;function sf(e,t){var a=e==null?0:e.length;return!!a&&Oo(e,t,0)>-1}var Co=sf;var vo=Math.max;function lf(e,t,a){return t=vo(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,n=vo(r.length-t,0),i=Array(n);++o<n;)i[o]=r[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=r[o];return s[t]=a(i),To(e,this,s)}}var Kt=lf;function pf(e,t){return Gt(Kt(e,t,Z),e+"")}var jt=pf;function uf(e,t,a){if(!I(a))return!1;var r=typeof t;return(r=="number"?q(a)&&Ee(t,a.length):r=="string"&&t in a)?oe(a[t],e):!1}var De=uf;function ff(e){return jt(function(t,a){var r=-1,o=a.length,n=o>1?a[o-1]:void 0,i=o>2?a[2]:void 0;for(n=e.length>3&&typeof n=="function"?(o--,n):void 0,i&&De(a[0],a[1],i)&&(n=o<3?void 0:n,o=1),t=Object(t);++r<o;){var s=a[r];s&&e(t,s,r,n)}return t})}var Yt=ff;var df=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cf=/^\w*$/;function mf(e,t){if(x(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||re(e)?!0:cf.test(e)||!df.test(e)||t!=null&&e in Object(t)}var et=mf;var hf="Expected a function";function _a(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(hf);var a=function(){var r=arguments,o=t?t.apply(this,r):r[0],n=a.cache;if(n.has(o))return n.get(o);var i=e.apply(this,r);return a.cache=n.set(o,i)||n,i};return a.cache=new(_a.Cache||Ue),a}_a.Cache=Ue;var ko=_a;var gf=500;function yf(e){var t=ko(e,function(r){return a.size===gf&&a.clear(),r}),a=t.cache;return t}var No=yf;var bf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tf=/\\(\\)?/g,xf=No(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(bf,function(a,r,o,n){t.push(o?n.replace(Tf,"$1"):r||a)}),t}),Ro=xf;function _f(e){return e==null?"":mo(e)}var Po=_f;function Ef(e,t){return x(e)?e:et(e,t)?[e]:Ro(Po(e))}var le=Ef;var Sf=1/0;function wf(e){if(typeof e=="string"||re(e))return e;var t=e+"";return t=="0"&&1/e==-Sf?"-0":t}var Q=wf;function Af(e,t){t=le(t,e);for(var a=0,r=t.length;e!=null&&a<r;)e=e[Q(t[a++])];return a&&a==r?e:void 0}var ke=Af;function If(e,t,a){var r=e==null?void 0:ke(e,t);return r===void 0?a:r}var Uo=If;var Mo=B?B.isConcatSpreadable:void 0;function Of(e){return x(e)||ee(e)||!!(Mo&&e&&e[Mo])}var Do=Of;function Lo(e,t,a,r,o){var n=-1,i=e.length;for(a||(a=Do),o||(o=[]);++n<i;){var s=e[n];t>0&&a(s)?t>1?Lo(s,t-1,a,r,o):Ie(o,s):r||(o[o.length]=s)}return o}var tt=Lo;function Cf(e){var t=e==null?0:e.length;return t?tt(e,1):[]}var Bo=Cf;function vf(e){return Gt(Kt(e,void 0,Bo),e+"")}var Wo=vf;var kf="[object Object]",Nf=Function.prototype,Rf=Object.prototype,Go=Nf.toString,Pf=Rf.hasOwnProperty,Uf=Go.call(Object);function Mf(e){if(!P(e)||K(e)!=kf)return!1;var t=ze(e);if(t===null)return!0;var a=Pf.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&Go.call(a)==Uf}var qt=Mf;function Df(e,t,a){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),a=a>o?o:a,a<0&&(a+=o),o=t>a?0:a-t>>>0,t>>>=0;for(var n=Array(o);++r<o;)n[r]=e[r+t];return n}var Ko=Df;var Lf="\\ud800-\\udfff",Bf="\\u0300-\\u036f",Wf="\\ufe20-\\ufe2f",Gf="\\u20d0-\\u20ff",Kf=Bf+Wf+Gf,jf="\\ufe0e\\ufe0f",Yf="\\u200d",qf=RegExp("["+Yf+Lf+Kf+jf+"]");function $f(e){return qf.test(e)}var jo=$f;function Ff(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),a=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Ie(x(a)?Xe(a):[a],tt(t,1))}var cE=Ff;var Hf="__lodash_hash_undefined__";function Xf(e){return this.__data__.set(e,Hf),this}var Yo=Xf;function Vf(e){return this.__data__.has(e)}var qo=Vf;function $t(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new Ue;++t<a;)this.add(e[t])}$t.prototype.add=$t.prototype.push=Yo;$t.prototype.has=qo;var Ft=$t;function zf(e,t){for(var a=-1,r=e==null?0:e.length;++a<r;)if(t(e[a],a,e))return!0;return!1}var $o=zf;function Jf(e,t){return e.has(t)}var Ht=Jf;var Zf=1,Qf=2;function ed(e,t,a,r,o,n){var i=a&Zf,s=e.length,l=t.length;if(s!=l&&!(i&&l>s))return!1;var p=n.get(e),d=n.get(t);if(p&&d)return p==t&&d==e;var h=-1,g=!0,m=a&Qf?new Ft:void 0;for(n.set(e,t),n.set(t,e);++h<s;){var S=e[h],R=t[h];if(r)var O=i?r(R,S,h,t,e,n):r(S,R,h,e,t,n);if(O!==void 0){if(O)continue;g=!1;break}if(m){if(!$o(t,function(E,$){if(!Ht(m,$)&&(S===E||o(S,E,a,r,n)))return m.push($)})){g=!1;break}}else if(!(S===R||o(S,R,a,r,n))){g=!1;break}}return n.delete(e),n.delete(t),g}var Xt=ed;function td(e){var t=-1,a=Array(e.size);return e.forEach(function(r,o){a[++t]=[o,r]}),a}var Fo=td;function ad(e){var t=-1,a=Array(e.size);return e.forEach(function(r){a[++t]=r}),a}var at=ad;var rd=1,od=2,nd="[object Boolean]",id="[object Date]",sd="[object Error]",ld="[object Map]",pd="[object Number]",ud="[object RegExp]",fd="[object Set]",dd="[object String]",cd="[object Symbol]",md="[object ArrayBuffer]",hd="[object DataView]",Ho=B?B.prototype:void 0,Ea=Ho?Ho.valueOf:void 0;function gd(e,t,a,r,o,n,i){switch(a){case hd:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case md:return!(e.byteLength!=t.byteLength||!n(new Je(e),new Je(t)));case nd:case id:case pd:return oe(+e,+t);case sd:return e.name==t.name&&e.message==t.message;case ud:case dd:return e==t+"";case ld:var s=Fo;case fd:var l=r&rd;if(s||(s=at),e.size!=t.size&&!l)return!1;var p=i.get(e);if(p)return p==t;r|=od,i.set(e,t);var d=Xt(s(e),s(t),r,o,n,i);return i.delete(e),d;case cd:if(Ea)return Ea.call(e)==Ea.call(t)}return!1}var Xo=gd;var yd=1,bd=Object.prototype,Td=bd.hasOwnProperty;function xd(e,t,a,r,o,n){var i=a&yd,s=ft(e),l=s.length,p=ft(t),d=p.length;if(l!=d&&!i)return!1;for(var h=l;h--;){var g=s[h];if(!(i?g in t:Td.call(t,g)))return!1}var m=n.get(e),S=n.get(t);if(m&&S)return m==t&&S==e;var R=!0;n.set(e,t),n.set(t,e);for(var O=i;++h<l;){g=s[h];var E=e[g],$=t[g];if(r)var F=i?r($,E,g,t,e,n):r(E,$,g,e,t,n);if(!(F===void 0?E===$||o(E,$,a,r,n):F)){R=!1;break}O||(O=g=="constructor")}if(R&&!O){var W=e.constructor,j=t.constructor;W!=j&&"constructor"in e&&"constructor"in t&&!(typeof W=="function"&&W instanceof W&&typeof j=="function"&&j instanceof j)&&(R=!1)}return n.delete(e),n.delete(t),R}var Vo=xd;var _d=1,zo="[object Arguments]",Jo="[object Array]",Vt="[object Object]",Ed=Object.prototype,Zo=Ed.hasOwnProperty;function Sd(e,t,a,r,o,n){var i=x(e),s=x(t),l=i?Jo:V(e),p=s?Jo:V(t);l=l==zo?Vt:l,p=p==zo?Vt:p;var d=l==Vt,h=p==Vt,g=l==p;if(g&&te(e)){if(!te(t))return!1;i=!0,d=!1}if(g&&!d)return n||(n=new ne),i||we(e)?Xt(e,t,a,r,o,n):Xo(e,t,l,a,r,o,n);if(!(a&_d)){var m=d&&Zo.call(e,"__wrapped__"),S=h&&Zo.call(t,"__wrapped__");if(m||S){var R=m?e.value():e,O=S?t.value():t;return n||(n=new ne),o(R,O,a,r,n)}}return g?(n||(n=new ne),Vo(e,t,a,r,o,n)):!1}var Qo=Sd;function en(e,t,a,r,o){return e===t?!0:e==null||t==null||!P(e)&&!P(t)?e!==e&&t!==t:Qo(e,t,a,r,en,o)}var rt=en;var wd=1,Ad=2;function Id(e,t,a,r){var o=a.length,n=o,i=!r;if(e==null)return!n;for(e=Object(e);o--;){var s=a[o];if(i&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<n;){s=a[o];var l=s[0],p=e[l],d=s[1];if(i&&s[2]){if(p===void 0&&!(l in e))return!1}else{var h=new ne;if(r)var g=r(p,d,l,e,t,h);if(!(g===void 0?rt(d,p,wd|Ad,r,h):g))return!1}}return!0}var tn=Id;function Od(e){return e===e&&!I(e)}var zt=Od;function Cd(e){for(var t=ie(e),a=t.length;a--;){var r=t[a],o=e[r];t[a]=[r,o,zt(o)]}return t}var an=Cd;function vd(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==void 0||e in Object(a))}}var Jt=vd;function kd(e){var t=an(e);return t.length==1&&t[0][2]?Jt(t[0][0],t[0][1]):function(a){return a===e||tn(a,e,t)}}var rn=kd;function Nd(e,t){return e!=null&&t in Object(e)}var on=Nd;function Rd(e,t,a){t=le(t,e);for(var r=-1,o=t.length,n=!1;++r<o;){var i=Q(t[r]);if(!(n=e!=null&&a(e,i)))break;e=e[i]}return n||++r!=o?n:(o=e==null?0:e.length,!!o&&Fe(o)&&Ee(i,o)&&(x(e)||ee(e)))}var nn=Rd;function Pd(e,t){return e!=null&&nn(e,t,on)}var sn=Pd;var Ud=1,Md=2;function Dd(e,t){return et(e)&&zt(t)?Jt(Q(e),t):function(a){var r=Uo(a,e);return r===void 0&&r===t?sn(a,e):rt(t,r,Ud|Md)}}var ln=Dd;function Ld(e){return function(t){return t?.[e]}}var Zt=Ld;function Bd(e){return function(t){return ke(t,e)}}var pn=Bd;function Wd(e){return et(e)?Zt(Q(e)):pn(e)}var un=Wd;function Gd(e){return typeof e=="function"?e:e==null?Z:typeof e=="object"?x(e)?ln(e[0],e[1]):rn(e):un(e)}var ot=Gd;function Kd(e,t,a,r){for(var o=-1,n=e==null?0:e.length;++o<n;){var i=e[o];t(r,i,a(i),e)}return r}var fn=Kd;function jd(e){return function(t,a,r){for(var o=-1,n=Object(t),i=r(t),s=i.length;s--;){var l=i[e?s:++o];if(a(n[l],l,n)===!1)break}return t}}var dn=jd;var Yd=dn(),Qt=Yd;function qd(e,t){return e&&Qt(e,t,ie)}var cn=qd;function $d(e,t){return function(a,r){if(a==null)return a;if(!q(a))return e(a,r);for(var o=a.length,n=t?o:-1,i=Object(a);(t?n--:++n<o)&&r(i[n],n,i)!==!1;);return a}}var mn=$d;var Fd=mn(cn),nt=Fd;function Hd(e,t,a,r){return nt(e,function(o,n,i){t(r,o,a(o),i)}),r}var hn=Hd;function Xd(e,t){return function(a,r){var o=x(a)?fn:hn,n=t?t():{};return o(a,e,ot(r,2),n)}}var gn=Xd;var Vd=function(){return M.Date.now()},ea=Vd;var zd="Expected a function",Jd=Math.max,Zd=Math.min;function Qd(e,t,a){var r,o,n,i,s,l,p=0,d=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(zd);t=dt(t)||0,I(a)&&(d=!!a.leading,h="maxWait"in a,n=h?Jd(dt(a.maxWait)||0,t):n,g="trailing"in a?!!a.trailing:g);function m(v){var A=r,w=o;return r=o=void 0,p=v,i=e.apply(w,A),i}function S(v){return p=v,s=setTimeout(E,t),d?m(v):i}function R(v){var A=v-l,w=v-p,Ne=t-A;return h?Zd(Ne,n-w):Ne}function O(v){var A=v-l,w=v-p;return l===void 0||A>=t||A<0||h&&w>=n}function E(){var v=ea();if(O(v))return $(v);s=setTimeout(E,R(v))}function $(v){return s=void 0,g&&r?m(v):(r=o=void 0,i)}function F(){s!==void 0&&clearTimeout(s),p=0,r=l=o=s=void 0}function W(){return s===void 0?i:$(ea())}function j(){var v=ea(),A=O(v);if(r=arguments,o=this,l=v,A){if(s===void 0)return S(l);if(h)return clearTimeout(s),s=setTimeout(E,t),m(l)}return s===void 0&&(s=setTimeout(E,t)),i}return j.cancel=F,j.flush=W,j}var yn=Qd;function ec(e,t,a){(a!==void 0&&!oe(e[t],a)||a===void 0&&!(t in e))&&_e(e,t,a)}var ct=ec;function tc(e){return P(e)&&q(e)}var bn=tc;function ac(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var mt=ac;function rc(e){return J(e,se(e))}var Tn=rc;function oc(e,t,a,r,o,n,i){var s=mt(e,a),l=mt(t,a),p=i.get(l);if(p){ct(e,a,p);return}var d=n?n(s,l,a+"",e,t,i):void 0,h=d===void 0;if(h){var g=x(l),m=!g&&te(l),S=!g&&!m&&we(l);d=l,g||m||S?x(s)?d=s:bn(s)?d=Xe(s):m?(h=!1,d=Ct(l,!0)):S?(h=!1,d=Dt(l,!0)):d=[]:qt(l)||ee(l)?(d=s,ee(s)?d=Tn(s):(!I(s)||Ge(s))&&(d=Lt(l))):h=!1}h&&(i.set(l,d),o(d,l,r,n,i),i.delete(l)),ct(e,a,d)}var xn=oc;function _n(e,t,a,r,o){e!==t&&Qt(t,function(n,i){if(o||(o=new ne),I(n))xn(e,t,i,a,_n,r,o);else{var s=r?r(mt(e,i),n,i+"",e,t,o):void 0;s===void 0&&(s=n),ct(e,i,s)}},se)}var ta=_n;var nc=Yt(function(e,t,a,r){ta(e,t,a,r)}),Sa=nc;function ic(e,t,a){for(var r=-1,o=e==null?0:e.length;++r<o;)if(a(t,e[r]))return!0;return!1}var En=ic;function sc(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var Sn=sc;function lc(e){return typeof e=="function"?e:Z}var wn=lc;function pc(e,t){var a=x(e)?At:nt;return a(e,wn(t))}var oA=pc;function uc(e,t){var a=-1,r=q(e)?Array(e.length):[];return nt(e,function(o,n,i){r[++a]=t(o,n,i)}),r}var An=uc;var fc=Object.prototype,dc=fc.hasOwnProperty,cc=gn(function(e,t,a){dc.call(e,a)?e[a].push(t):_e(e,a,[t])}),fA=cc;var mc="[object String]";function hc(e){return typeof e=="string"||!x(e)&&P(e)&&K(e)==mc}var In=hc;function gc(e,t){return t.length<2?e:ke(e,Ko(t,0,-1))}var On=gc;var yc="[object Map]",bc="[object Set]",Tc=Object.prototype,xc=Tc.hasOwnProperty;function _c(e){if(e==null)return!0;if(q(e)&&(x(e)||typeof e=="string"||typeof e.splice=="function"||te(e)||we(e)||ee(e)))return!e.length;var t=V(e);if(t==yc||t==bc)return!e.size;if(Ae(e))return!He(e).length;for(var a in e)if(xc.call(e,a))return!1;return!0}var CA=_c;function Ec(e,t){return rt(e,t)}var Sc=Ec;var wc="[object Number]";function Ac(e){return typeof e=="number"||P(e)&&K(e)==wc}var UA=Ac;function Ic(e,t){for(var a,r=-1,o=e.length;++r<o;){var n=t(e[r]);n!==void 0&&(a=a===void 0?n:a+n)}return a}var Cn=Ic;var Oc=Yt(function(e,t,a){ta(e,t,a)}),WA=Oc;function Cc(e,t){return t=le(t,e),e=On(e,t),e==null||delete e[Q(Sn(t))]}var vn=Cc;function vc(e){return qt(e)?void 0:e}var kn=vc;var kc=1,Nc=2,Rc=4,Pc=Wo(function(e,t){var a={};if(e==null)return a;var r=!1;t=ve(t,function(n){return n=le(n,e),r||(r=n.length>1),n}),J(e,Rt(e),a),r&&(a=Wt(a,kc|Nc|Rc,kn));for(var o=t.length;o--;)vn(a,t[o]);return a}),aI=Pc;function Uc(e,t,a,r){if(!I(e))return e;t=le(t,e);for(var o=-1,n=t.length,i=n-1,s=e;s!=null&&++o<n;){var l=Q(t[o]),p=a;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(o!=i){var d=s[l];p=r?r(d,l,s):void 0,p===void 0&&(p=I(d)?d:Ee(t[o+1])?[]:{})}$e(s,l,p),s=s[l]}return e}var Nn=Uc;function Mc(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}var Rn=Mc;function Dc(e,t){if(e!==t){var a=e!==void 0,r=e===null,o=e===e,n=re(e),i=t!==void 0,s=t===null,l=t===t,p=re(t);if(!s&&!p&&!n&&e>t||n&&i&&l&&!s&&!p||r&&i&&l||!a&&l||!o)return 1;if(!r&&!n&&!p&&e<t||p&&a&&o&&!r&&!n||s&&a&&o||!i&&o||!l)return-1}return 0}var Pn=Dc;function Lc(e,t,a){for(var r=-1,o=e.criteria,n=t.criteria,i=o.length,s=a.length;++r<i;){var l=Pn(o[r],n[r]);if(l){if(r>=s)return l;var p=a[r];return l*(p=="desc"?-1:1)}}return e.index-t.index}var Un=Lc;function Bc(e,t,a){t.length?t=ve(t,function(n){return x(n)?function(i){return ke(i,n.length===1?n[0]:n)}:n}):t=[Z];var r=-1;t=ve(t,Se(ot));var o=An(e,function(n,i,s){var l=ve(t,function(p){return p(n)});return{criteria:l,index:++r,value:n}});return Rn(o,function(n,i){return Un(n,i,a)})}var aa=Bc;function Wc(e,t,a,r){return e==null?[]:(x(t)||(t=t==null?[]:[t]),a=r?void 0:a,x(a)||(a=a==null?[]:[a]),aa(e,t,a))}var wa=Wc;var Gc=Zt("length"),Mn=Gc;var Ln="\\ud800-\\udfff",Kc="\\u0300-\\u036f",jc="\\ufe20-\\ufe2f",Yc="\\u20d0-\\u20ff",qc=Kc+jc+Yc,$c="\\ufe0e\\ufe0f",Fc="["+Ln+"]",Aa="["+qc+"]",Ia="\\ud83c[\\udffb-\\udfff]",Hc="(?:"+Aa+"|"+Ia+")",Bn="[^"+Ln+"]",Wn="(?:\\ud83c[\\udde6-\\uddff]){2}",Gn="[\\ud800-\\udbff][\\udc00-\\udfff]",Xc="\\u200d",Kn=Hc+"?",jn="["+$c+"]?",Vc="(?:"+Xc+"(?:"+[Bn,Wn,Gn].join("|")+")"+jn+Kn+")*",zc=jn+Kn+Vc,Jc="(?:"+[Bn+Aa+"?",Aa,Wn,Gn,Fc].join("|")+")",Dn=RegExp(Ia+"(?="+Ia+")|"+Jc+zc,"g");function Zc(e){for(var t=Dn.lastIndex=0;Dn.test(e);)++t;return t}var Yn=Zc;function Qc(e){return jo(e)?Yn(e):Mn(e)}var qn=Qc;var em=Math.floor,tm=Math.random;function am(e,t){return e+em(tm()*(t-e+1))}var $n=am;var rm=parseFloat,om=Math.min,nm=Math.random;function im(e,t,a){if(a&&typeof a!="boolean"&&De(e,t,a)&&(t=a=void 0),a===void 0&&(typeof t=="boolean"?(a=t,t=void 0):typeof e=="boolean"&&(a=e,e=void 0)),e===void 0&&t===void 0?(e=0,t=1):(e=xa(e),t===void 0?(t=e,e=0):t=xa(t)),e>t){var r=e;e=t,t=r}if(a||e%1||t%1){var o=nm();return om(e+o*(t-e+rm("1e-"+((o+"").length-1))),t)}return $n(e,t)}var WI=im;var sm=Array.prototype,lm=sm.reverse;function pm(e){return e==null?e:lm.call(e)}var KI=pm;function um(e,t,a){return e==null?e:Nn(e,t,a)}var Fn=um;var fm="[object Map]",dm="[object Set]";function cm(e){if(e==null)return 0;if(q(e))return In(e)?qn(e):e.length;var t=V(e);return t==fm||t==dm?e.size:He(e).length}var zI=cm;var mm=jt(function(e,t){if(e==null)return[];var a=t.length;return a>1&&De(e,t[0],t[1])?t=[]:a>2&&De(t[0],t[1],t[2])&&(t=[t[0]]),aa(e,tt(t,1),[])}),hm=mm;function gm(e){return e&&e.length?Cn(e,Z):0}var nO=gm;var ym="Expected a function";function bm(e,t,a){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(ym);return I(a)&&(r="leading"in a?!!a.leading:r,o="trailing"in a?!!a.trailing:o),yn(e,t,{leading:r,maxWait:t,trailing:o})}var pO=bm;var Tm=1/0,xm=Oe&&1/at(new Oe([,-0]))[1]==Tm?function(e){return new Oe(e)}:xo,Hn=xm;var _m=200;function Em(e,t,a){var r=-1,o=Co,n=e.length,i=!0,s=[],l=s;if(a)i=!1,o=En;else if(n>=_m){var p=t?null:Hn(e);if(p)return at(p);i=!1,o=Ht,l=new Ft}else l=t?[]:s;e:for(;++r<n;){var d=e[r],h=t?t(d):d;if(d=a||d!==0?d:0,i&&h===h){for(var g=l.length;g--;)if(l[g]===h)continue e;t&&l.push(h),s.push(d)}else o(l,h,a)||(l!==s&&l.push(h),s.push(d))}return s}var ra=Em;function Sm(e){return e&&e.length?ra(e):[]}var SO=Sm;function wm(e,t){return e&&e.length?ra(e,ot(t,2)):[]}var Xn=wm;var Vn=[{id:"c769f823-a073-408a-ac44-00e5bfc333a7",parent:"b83cb482-710d-4e48-9b22-43b8e8ea3a02",droppable:!0,text:"Quick reply",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},icon:"Reply",searchText:"messaging quick reply"}},{id:"0607ffb9-e0fb-41b5-9e02-afabff22acb6",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Like",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an agreeable, approving, affirming, positive, supportive, confirming, endorsing, acknowledging, understanding, simple recognition, and liking reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply like"}},{id:"2822ad40-9f2c-4db8-961b-50636218edc7",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Love",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an affectionate, passionate, warm, fond, admiring, adoring, caring, supportive, joyful, grateful, delighted, enamored, and loving reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply love"}},{id:"4d59573b-7e84-4fb0-8d55-582bd4a5c948",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Thanks",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an affectionate, grateful, and delighted reply to the message/post that responds 'thank you' for whatever the message/post is about. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply thanks"}},{id:"6325c4b4-5b4c-457b-849a-eacdcb37edfb",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Care",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a compassionate, empathetic, sympathetic, considerate, supportive, understanding, comforting, consoling, reassuring, concerned, nurturing, and caring reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply care"}},{id:"32dd4492-4ec4-44a9-ba53-32223bf385fe",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Joke",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a humorous, entertaining, playful, and funny reply to the message/post joking about it. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply joke"}},{id:"5bb90f56-7cae-4662-9d59-dd2c6ff941ec",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Wow",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an astonished, amazed, awestruck, shocked, startled, impressed, intrigued, dumbfounded, bewildered, flabbergasted, taken-aback, and surprised reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply wow"}},{id:"c4f861da-75ee-4afb-86a7-de234c0c2309",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Sad",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an unhappy, sorrowful, mournful, grieving, despondent, melancholic, lamenting, hurt, pained, empathetic, downcast, disappointed, depressed, and sad reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply sad"}},{id:"31e2d82e-5176-43a5-af28-33b873f27496",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Dislike",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`
Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a disagreeing, disapproving, rejecting, negative, critical, dissenting, disappointing, unsupportive, refusing, disfavoring, opposing, negating, and disliking reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply dislike"}},{id:"32f31576-0ab8-4fc8-966d-426970abede6",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Reply with key points",data:{icon:"DefaultIcon",editable:!1,type:"shortcuts",actions:[{type:"SET_VARIABLES_MODAL",parameters:{SetVariablesModalConfig:{contextMenuId:"32f31576-0ab8-4fc8-966d-426970abede6",title:"Reply with key points",modelKey:"Sidebar",template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{CONTEXT}}
\`\`\` 

Include the following aspects in the reply:
{{KEY_POINTS}}`,variables:[{label:"Context",VariableName:"CONTEXT",valueType:"Text",placeholder:"Enter context",defaultValue:"{{SELECTED_TEXT}}"},{label:"Key points",VariableName:"KEY_POINTS",valueType:"Text",placeholder:"Enter key points"}],systemVariables:[{VariableName:"AI_RESPONSE_LANGUAGE",defaultValue:"English"},{VariableName:"AI_RESPONSE_TONE",defaultValue:"Default"},{VariableName:"AI_RESPONSE_WRITING_STYLE",defaultValue:"Default"}]}}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply reply with key points"}},{id:"a261c7e0-1a4f-485f-a9e0-9998c45cd08c",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"Yes",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is an email message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an email reply which responds 'yes' to whatever the recipient is asking for in a polite, friendly, professional, and proper way.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Do not include email subject, just output the reply message. Ensure the reply's word count is no more than 100 words.

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply yes"}},{id:"5b4fb377-411b-497b-89d8-045603632f08",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"No",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is an email message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an email reply which responds 'no' to whatever the recipient is asking for in a polite, friendly, professional, and proper way.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Do not include email subject, just output the reply message. Ensure the reply's word count is no more than 100 words.

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply no"}},{id:"8a12f88f-9216-4e92-ad41-b4f55c4cfc2b",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"Thanks",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is an email message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an email reply which responds 'thank you', without confirming or denying whatever the recipient is asking for, in a polite, friendly, professional, and proper way.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Do not include email subject, just output the reply message. Ensure the reply's word count is no more than 100 words.

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply thanks"}},{id:"f20dcaf5-5133-4046-b129-174f49d0d16c",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"Sorry",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is an email message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an email reply which responds 'sorry', without confirming or denying whatever the recipient is asking for, in a polite, friendly, professional, and proper way.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Do not include email subject, just output the reply message. Ensure the reply's word count is no more than 100 words.

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply sorry"}},{id:"016adb2d-794e-41ae-9da7-b80a2fc146ca",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"More info",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is an email message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an email reply which responds 'provide more information and details', without confirming or denying whatever the recipient is asking for, in a polite, friendly, professional, and proper way. 

Specify the additional information you ask for, presenting it in a clear format.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Do not include email subject, just output the reply message. Ensure the reply's word count is no more than 100 words.

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply more info"}},{id:"379124bc-8db4-4b62-b453-cd8e8ab3523e",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"Joke",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is an email message on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a humorous, entertaining, playful, and funny email reply joking about the email message, without confirming or denying whatever the recipient is asking for.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Do not include email subject, just output the reply message. Ensure the reply's word count is no more than 50 words.

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply joke"}},{id:"370bca5c-6e3e-4daa-96ac-070ffe8af179",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"Follow-up",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write a follow-up email message to the following text delimited by triple backticks, which is the last email I sent to the recipient earlier on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a concise follow-up email message to ask for a response in a polite, friendly, professional, and proper way. Make the content sincere, persuasive, and appealing. Also, mention any important numbers and details, if any, from previous emails that are helpful for clarification and making the follow-up compelling.

Make the follow-up clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your follow-up.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the follow-up like a real person would. Keep your tone balanced, not too casual or too formal, to match what the follow-up is meant to do.

Do not include email subject, just output the follow-up message. Ensure the follow-up's word count is no more than 100 words.

Output the follow-up without additional context, explanation, or extra wording, just the follow-up itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply follow-up"}},{id:"0815c986-5bd2-49a7-a62f-eeb2c49907da",parent:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",droppable:!0,text:"Reply with key points",data:{icon:"DefaultIcon",editable:!1,type:"shortcuts",actions:[{type:"SET_VARIABLES_MODAL",parameters:{SetVariablesModalConfig:{contextMenuId:"0815c986-5bd2-49a7-a62f-eeb2c49907da",title:"Reply with key points",modelKey:"Sidebar",template:`Ignore all previous instructions. You're a highly skilled email expert, adept at responding to all types of email messages in an appropriate manner. Your task is to write an email reply to the following text delimited by triple backticks, which is the last email you received from the recipient earlier on {{CURRENT_WEBSITE_DOMAIN}}.

Text:
\`\`\`
{{CONTEXT}}
\`\`\`

Your task requires you to write a concise email reply in a polite, friendly, professional, and proper way.

Make the email reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the email message and the purpose of your email reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the email reply like a real person would. Keep your tone balanced, not too casual or too formal, to match what the email reply is meant to do.

Do not include email subject, just output the email reply message.

Output the email reply without additional context, explanation, or extra wording, just the email reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Now, write the email reply, mentioning these points:
{{KEY_POINTS}}`,variables:[{label:"Email context",VariableName:"CONTEXT",valueType:"Text",placeholder:"Enter email context",defaultValue:"{{SELECTED_TEXT}}"},{label:"Key points",VariableName:"KEY_POINTS",valueType:"Text",placeholder:"Enter key points"}],systemVariables:[{VariableName:"AI_RESPONSE_LANGUAGE",defaultValue:"English"},{VariableName:"AI_RESPONSE_TONE",defaultValue:"Default"},{VariableName:"AI_RESPONSE_WRITING_STYLE",defaultValue:"Default"}]}}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply reply with key points"}},{id:"665d4c2f-0f17-43be-9a49-a65ace4ef4e7",parent:"5faf9b14-f2c3-4d3c-a43b-ab9f6e4747b1",droppable:!0,text:"Quick reply",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"email quick reply",icon:"Reply"}},{id:"5faf9b14-f2c3-4d3c-a43b-ab9f6e4747b1",parent:"root",droppable:!0,text:"Email",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:["mail.yahoo.com","outlook.live.com","outlook.office365.com","outlook.office.com","mail.google.com"],blacklist:[],isWhitelistMode:!0},searchText:"email"}},{id:"4f3d7b3b-62e5-4e88-bd79-01efd7ef0bd0",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Like",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an agreeable, approving, affirming, positive, supportive, confirming, endorsing, acknowledging, understanding, simple recognition, and liking reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply like"}},{id:"8294f143-2727-4de6-9065-12358f87a7bd",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Love",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an affectionate, passionate, warm, fond, admiring, adoring, caring, supportive, joyful, grateful, delighted, enamored, and loving reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply love"}},{id:"3e4d313f-8a15-48b2-beb9-1f05f93b4d4f",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Thanks",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an affectionate, grateful, and delighted reply to the message/post that responds 'thank you' for whatever the message/post is about. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply thanks"}},{id:"176a963c-849e-4cd7-8bf3-84e4531f0cc0",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Care",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a compassionate, empathetic, sympathetic, considerate, supportive, understanding, comforting, consoling, reassuring, concerned, nurturing, and caring reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply care"}},{id:"0486d1dc-b6bd-4c9b-a861-660e1f87f621",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Joke",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a humorous, entertaining, playful, and funny reply to the message/post joking about it. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply joke"}},{id:"93c3fd09-315d-447d-bbdf-052a78511f39",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Wow",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an astonished, amazed, awestruck, shocked, startled, impressed, intrigued, dumbfounded, bewildered, flabbergasted, taken-aback, and surprised reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply wow"}},{id:"c4ed94fc-d8cc-4633-b563-4a94582ab58c",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Sad",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write an unhappy, sorrowful, mournful, grieving, despondent, melancholic, lamenting, hurt, pained, empathetic, downcast, disappointed, depressed, and sad reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply sad"}},{id:"d426af1d-4055-4ada-b359-648b9ada81e7",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Dislike",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled social media expert, adept at responding to all types of social media messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a social media message or post on {{CURRENT_WEBSITE_DOMAIN}}.

Your task requires you to write a disagreeing, disapproving, rejecting, negative, critical, dissenting, disappointing, unsupportive, refusing, disfavoring, opposing, negating, and disliking reply to the message/post. Keep the reply as short as possible.

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the message/post and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the reply is meant to do.

Ensure the reply's word count is no more than 50 words.

Output the answer without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply dislike"}},{id:"6e14fd11-a06e-40b3-97d5-3fc0515288b0",parent:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",droppable:!0,text:"Reply with key points",data:{icon:"DefaultIcon",editable:!1,type:"shortcuts",actions:[{type:"SET_VARIABLES_MODAL",parameters:{SetVariablesModalConfig:{contextMenuId:"6e14fd11-a06e-40b3-97d5-3fc0515288b0",title:"Reply with key points",modelKey:"Sidebar",template:`Ignore all previous instructions. You're a highly skilled social media expert, specialized in {{CURRENT_WEBSITE_DOMAIN}}, adept at responding to all types of {{CURRENT_WEBSITE_DOMAIN}} posts and messages in an appropriate manner. 

Your task is to write a reply to the following post/comment on {{CURRENT_WEBSITE_DOMAIN}}, delimited by triple backticks.

Post/comment:
\`\`\` 
{{CONTEXT}}
\`\`\` 

Make the reply clear, easy to understand, and well put together. Choose the most suitable punctuation marks, selecting the best tone and style based on the topic of the post/comment and the purpose of your reply.

Choose simple words and phrases. Avoid ones that are too hard or confusing.

Do not use hashtags. Write the reply like a real person would. 

Output the reply without additional context, explanation, or extra wording, just the reply itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Now, write a concise reply to the post/comment above by *writing a better version* of the following points:
{{KEY_POINTS}}`,variables:[{label:"Context",VariableName:"CONTEXT",valueType:"Text",placeholder:"Enter context",defaultValue:"{{SELECTED_TEXT}}"},{label:"Key points",VariableName:"KEY_POINTS",valueType:"Text",placeholder:"Enter key points"}],systemVariables:[{VariableName:"AI_RESPONSE_LANGUAGE",defaultValue:"English"},{VariableName:"AI_RESPONSE_TONE",defaultValue:"Default"},{VariableName:"AI_RESPONSE_WRITING_STYLE",defaultValue:"Default"}]}}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"quick reply reply with key points"}},{id:"aa4d2d42-28a6-4a2f-a67d-2805f4307fd9",parent:"4d7c6a66-1905-43c1-826b-0b8201461d47",droppable:!0,text:"Quick reply",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"social media quick reply",icon:"Reply"}},{id:"4d7c6a66-1905-43c1-826b-0b8201461d47",parent:"root",droppable:!0,text:"Social media",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:["tiktok.com","twitch.tv","zhihu.com","zhuanlan.zhihu.com","bilibili.com","quora.com","web.facebook.com","medium.com","studio.youtube.com","reddit.com","fiverr.com","instagram.com","twitter.com","facebook.com","youtube.com","linkedin.com"],blacklist:[],isWhitelistMode:!0},searchText:"social media"}},{id:"c0f7a642-9e34-4b1f-a2ee-1c4c5e93fa23",parent:"3cc70e82-29db-45a0-8136-7ba4cf90bf8e",droppable:!0,text:"Continue writing",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`{{SELECTED_TEXT}}
{{POPUP_DRAFT}}`}},{type:"SLICE_OF_TEXT",parameters:{SliceTextActionTokens:3e3}},{type:"SET_VARIABLE",parameters:{VariableName:"MAXAI_CONTINUE_WRITING_TEXT_DRAFT"}},{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are the original author of the unfinished text delimited by triple backticks. Your task is to continue writing the following unfinished text delimited by triple backticks.

Your task requires you to pick up where the text is left off, making sure to maintain the same tone, writing style, structure, intended audience, and direction of the unfinished text. Continue the writing in a manner consistent with how the original author would have written.

Only write no more than 100 words.

Output the answer without additional context, explanation, or extra wording, just the continued text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{MAXAI_CONTINUE_WRITING_TEXT_DRAFT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},icon:"DefaultIcon",searchText:"write with ai continue writing"}},{id:"b517f321-5533-41e5-8ed0-64eb6aa4b7bd",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"English",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into English.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate english"}},{id:"e5a30298-52e9-431d-89d8-6f5431c236c9",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Chinese (Simplified)",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Chinese (Simplified).

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate chinese (simplified)"}},{id:"0cb5746c-b879-4ac4-86fb-49f366c81542",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Chinese (Traditional)",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Chinese (Traditional).

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate chinese (traditional)"}},{id:"481f6d4a-9045-4cd0-b5e7-1eec6822bed3",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Portuguese",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Portuguese.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate portuguese"}},{id:"1aabb1d3-f1af-4e81-aab9-fe4d16630cc3",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Spanish",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Spanish.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate spanish"}},{id:"ad6cebdb-c5ab-4db5-8776-95d6381b90de",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"French",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into French.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate french"}},{id:"6de2edc2-019f-4a6c-9051-a15aa11338a0",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Korean",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Korean.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate korean"}},{id:"24766e7e-a419-4992-aaaf-786a37a0e111",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Vietnamese",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Vietnamese.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate vietnamese"}},{id:"2a753c24-a5cb-496a-a34b-1037e366e690",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Japanese",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Japanese.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate japanese"}},{id:"3aca0447-12a5-4453-b4b2-64e45f16598a",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Russian",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Russian.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate russian"}},{id:"8b6f4e3f-7669-44a8-a020-fb88c5c9d592",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"German",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into German.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate german"}},{id:"fee4c3e1-8970-436a-a535-e6085f283973",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Turkish",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Turkish.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate turkish"}},{id:"d1484846-cba5-4b2b-9fef-0a2d0f4b15b7",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Italian",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Italian.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate italian"}},{id:"96248543-4145-4b5c-b4eb-e6398695a24e",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Dutch",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Dutch.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate dutch"}},{id:"f8a45478-0da3-4c34-8306-b922b68fab5b",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Polish",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Polish.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate polish"}},{id:"c78b028f-ae08-4c3b-830b-c71bc03ead25",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Arabic",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Arabic.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate arabic"}},{id:"e361913f-b0af-443f-8122-1affa88478be",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Hebrew",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Hebrew.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate hebrew"}},{id:"d4051326-c55b-4611-944a-3457ff0a8ed7",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Indonesian",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Indonesian.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate indonesian"}},{id:"bf0da9ac-63d5-40f1-a5c5-63f1468ec13c",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Danish",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Danish.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate danish"}},{id:"9b1b232b-c036-4131-bd6c-c2e5e690c4ea",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Swedish",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Swedish.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},searchText:"translate swedish"}},{id:"0d6cce80-546b-4b09-8fe5-f84f195d9d2e",parent:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",droppable:!0,text:"Filipino",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are proficient in every language, possessing superior translation skills, enabling you to translate from any language to another seamlessly as a native speaker. Your task is to translate the following text, delimited by triple backticks, into Filipino.

Keep the meaning the same. If possible, retain the structure of the paragraphs.

If the original text is in the same language as the target language, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"translate filipino"}},{id:"7b26a25c-e869-4832-b5bb-b19685f5c3a5",parent:"80e6d17b-2cf5-456b-944b-5f645f0e12de",droppable:!0,text:"Summarize",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a highly proficient researcher that can read and write properly and fluently, and can extract all important information from any text. Your task is to summarize and extract all key takeaways of the following text delimited by triple backticks in all relevant aspects. 

Output a summary and a list of key takeaways respectively. The summary should be a one-liner in at most 100 words. The key takeaways should be in up to seven bulletpoints, the fewer the better.

Use the following format:
### Summary
<summary of the text>

### Key Takeaways
<list of key takeaways>

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"Summarize",searchText:"generate from selection summarize"}},{id:"4d226b15-9e21-42ba-8af8-57d6fbae5a3d",parent:"80e6d17b-2cf5-456b-944b-5f645f0e12de",droppable:!0,text:"Translate",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"group",actions:[],icon:"Translate",searchText:"generate from selection translate"}},{id:"1444ae1f-dbb1-4136-8898-98431ee3a1bb",parent:"80e6d17b-2cf5-456b-944b-5f645f0e12de",droppable:!0,text:"Explain this",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a knowledgeable real human that understands everything. Your task is to explain the following text delimited by triple backticks in a very easy-to-understand way. 

 I want you to pretend to explain the text to a middle school student who has no background knowledge or professional knowledge about the text. You need to output the highest quality explanation possible, including examples and analogies if necessary or helpful.

Choose simple words and phrases to explain. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal.

Make the explanation concise, and keep it under 200 words if possible.

Output the answer without extra wording, just the explanation itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"Question",searchText:"generate from selection explain this"}},{id:"bd4f9e5a-f9d4-4d1c-aab8-43f951739ab0",parent:"80e6d17b-2cf5-456b-944b-5f645f0e12de",droppable:!0,text:"Find action items",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a highly proficient researcher that can thoroughly understand any text and distill all crucial tasks embedded within it. Your task is to carefully review the following text delimited by triple backticks and extract all action items from it for the reader.

Identify only the action items that need the reader to take action, and exclude action items requiring action from anyone other than the reader.

Output the action items in bulletpoints, and pick a good matching emoji for every bullet point.

Use the following format:
### Action Items
<list of action items>

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"Bulleted",searchText:"generate from selection find action items"}},{id:"c93afaf2-080c-4646-a4dc-5e638f9a0cdb",parent:"80e6d17b-2cf5-456b-944b-5f645f0e12de",droppable:!0,text:"Run this prompt",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:"{{SELECTED_TEXT}}"}},{type:"ASK_CHATGPT",parameters:{}}],icon:"PlayArrow",searchText:"generate from selection run this prompt"}},{id:"202a7ddd-bea5-46b3-b32c-a0300c7ac1ee",parent:"718dae5a-8c58-47a7-9089-5dc02cedbc3c",droppable:!0,text:"Professional",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to rewrite the following text, delimited by triple backticks, in a professional and formal tone.

The desired tone should be both professional and formal. To clarify:
- 'Professional' means the language should exude confidence, precision, and clarity, while being devoid of any emotional or casual undertones.
- 'Formal' means utilizing standard language, avoiding colloquialisms or slang, and maintaining a structured and cohesive flow.

Choose the appropriate degree of professionalism and formality in your tone to align with the subject and goal of the text.

Write the text like a real person would. Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the rewritten text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"change tone professional"}},{id:"61404250-a6af-41e2-8b9a-4d6fcfefdb95",parent:"718dae5a-8c58-47a7-9089-5dc02cedbc3c",droppable:!0,text:"Friendly",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to rewrite the following text, delimited by triple backticks, in a friendly and approachable tone.

The desired tone should be both friendly and approachable. To clarify:
- 'Friendly' means the tone should convey warmth, like you're speaking to a friend. It should be inviting, kind, and free from formal or harsh language. It should make the reader feel welcome and understood.
- 'Approachable' means the language should be simple and easy to understand. It shouldn't intimidate or alienate the reader, but rather make them feel welcome and encouraged to engage further.

Choose the appropriate degree of friendliness and approachability in your tone to align with the subject and goal of the text.

Write the text like a real person would. Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the rewritten text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"change tone friendly"}},{id:"ce02e42f-e341-4b94-8bbc-095122507bd2",parent:"718dae5a-8c58-47a7-9089-5dc02cedbc3c",droppable:!0,text:"Straightforward",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to rewrite the following text, delimited by triple backticks, in a straightforward and direct tone.

The desired tone should be both straightforward and direct. To clarify:
- 'Straightforward' means ensuring that the meaning of the text is easily understood. Use simple language, clear structures, and avoid jargon or complex sentences.
- 'Direct' means using clear and simple language that goes straight to the point without any unnecessary embellishments.

Choose the appropriate degree of straightforwardness and directness in your tone to align with the subject and goal of the text.

Write the text like a real person would. Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the rewritten text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"change tone straightforward"}},{id:"3c3edab4-4125-43ac-89c0-ca95cda06d34",parent:"718dae5a-8c58-47a7-9089-5dc02cedbc3c",droppable:!0,text:"Confident",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to rewrite the following text, delimited by triple backticks, in a confident and firm tone.

The desired tone should be both confident and firm. To clarify:
- 'Confident' means displaying certainty, full of assurance, and a clear understanding without any hesitation or doubt. Use clear and direct language.
- 'Firm' means strongly and unwaveringly standing by the message, showcasing decisiveness without being aggressive.

Choose the appropriate degree of confidence and firmness in your tone to align with the subject and goal of the text.

Write the text like a real person would. Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the rewritten text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"change tone confident"}},{id:"df5768a8-448d-4070-afa1-5307838ed965",parent:"718dae5a-8c58-47a7-9089-5dc02cedbc3c",droppable:!0,text:"Casual",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to rewrite the following text, delimited by triple backticks, in a casual and informal tone.

The desired tone should be both casual and informal. To clarify:
- 'Casual' means writing as if you're talking to a friend or someone of the same age in a light-hearted, relaxed, and easy-going tone. Feel free to use contractions, colloquialisms, and idioms.
- 'Informal' means using everyday and conversational language. Avoid complex structures and technical terms or jargon unless it's widely understood. Shorten sentences where possible.

Choose the appropriate degree of casualness and informality in your tone to align with the subject and goal of the text.

Write the text like a real person would. Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the rewritten text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],searchText:"change tone casual"}},{id:"4e54395c-5e8b-4bbd-a309-b6057a4737d3",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Improve writing",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to write a better version of the following text delimited by triple backticks.

Your task means making the text clearer, easier to understand, and well put together, by correcting grammar, spelling, choosing the most suitable punctuation marks, selecting the best tone and style based on the topic and purpose of the text.

Choose simple words and phrases to improve the text. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the text is meant to do. If a word, phrase, or part of the text is already clear and effective, leave it as it is, unchanged.

Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the improved text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"AutoFix",searchText:"edit or review selection improve writing"}},{id:"496d1369-941d-49a5-a9ce-68eadd7601de",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Fix spelling & grammar",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a highly proficient writer that can read and write properly and fluently. Your task is to proofread and correct the spelling and grammar mistakes of the following text delimited by triple backticks.

Make as few changes as possible. Only correct any spelling or grammar mistakes if the original text has spelling or grammar mistakes. Do not make any writing improvements.

Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

If the original text has no spelling or grammar mistakes, simply repeat the original text.

Output the answer without additional context, explanation, or extra wording, just the corrected text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"Done",searchText:"edit or review selection fix spelling & grammar"}},{id:"547b5b2d-4f7b-4b39-8fdc-524a31659238",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Make shorter",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to write a shorter version of the following text delimited by triple backticks.

Your task means making the text shorter, and keeping the text clear, easy to understand, and well put together.

Choose simple words and phrases to write the text. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the text is meant to do.

Keep the meaning the same, if possible. Ensure the re-written text's word count is no more than half the original text.

Output the answer without additional context, explanation, or extra wording, just the shortened text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"ShortText",searchText:"edit or review selection make shorter"}},{id:"1f0b58d6-10cb-4e60-bbc9-10912ca6301c",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Make longer",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to write a longer version of the following text delimited by triple backticks.

Your task means making the text longer, and keeping the text clear, easy to understand, and well put together.

Choose simple words and phrases to write the text. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the text is meant to do.

Keep the meaning the same if possible. Ensure the rewritten text's word count is more than twice the original text but no more than 4 times the original text.

Output the answer without additional context, explanation, or extra wording, just the lengthened text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"LongText",searchText:"edit or review selection make longer"}},{id:"718dae5a-8c58-47a7-9089-5dc02cedbc3c",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Change tone",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"group",actions:[],icon:"Voice",searchText:"edit or review selection change tone"}},{id:"3ca990dc-b70b-49b5-abfa-eb1dc8e5f271",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Simplify language",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to write a simplified and easier-to-understand version of the following text delimited by triple backticks.

Your task means using clear and concise language that is easy for the intended audience to understand. This involves avoiding overly complex sentence structures, technical jargon, or obscure vocabulary, and using familiar words and straightforward expressions. The goal is to make the text more accessible to a wider audience, ensuring that the message is communicated effectively without causing confusion or misunderstanding. Simplifying language can be particularly important when writing for a general audience or when trying to convey complex information or ideas in a more approachable way. It is essential for you to strike a balance between simplifying language and maintaining the tone and voice of the text, so that it remains engaging and informative while being easy to read and understand.

Choose simple words and phrases to write the text. Avoid ones that are too hard or confusing. Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the text is meant to do. If a word, phrase, or part of the text is already clear and effective, leave it as it is, unchanged.

Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the simplified text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"AutoAwesome",searchText:"edit or review selection simplify language"}},{id:"84060107-e962-412b-afa2-f8134e593320",parent:"30f27496-1faf-4a00-87cf-b53926d35bfd",droppable:!0,text:"Paraphrase",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You are a real human that can read and write properly and fluently. Your task is to write a re-worded version of the following text delimited by triple backticks.

Your task means conveying the same meaning using different words and sentence structures. Avoiding plagiarism, improving the flow and readability of the text, and ensuring that the re-written content is unique and original.

Write the text like a real person would. Keep your tone balanced, not too casual or too formal, to match what the text is meant to do.

Keep the meaning the same. If possible, retain the structure of the paragraphs. Ensure the re-written text's word count is near to the original text.

Output the answer without additional context, explanation, or extra wording, just the paraphrased text itself. Don't use any punctuation, especially no quotes or backticks, around the text.

Respond in {{AI_RESPONSE_LANGUAGE}}.

Text:
\`\`\`
{{SELECTED_TEXT}}
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"Autorenew",searchText:"edit or review selection paraphrase"}},{id:"b83cb482-710d-4e48-9b22-43b8e8ea3a02",parent:"root",droppable:!0,text:"Messaging",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:["meet.google.com","teams.microsoft.com","web.skype.com","web.snapchat.com","app.hubspot.com","mp.weixin.qq.com","messenger.com","web.telegram.org","app.slack.com","discord.com","web.whatsapp.com"],blacklist:[],isWhitelistMode:!0},searchText:"messaging"}},{id:"30f27496-1faf-4a00-87cf-b53926d35bfd",parent:"root",droppable:!0,text:"Edit or review selection",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"group",actions:[],searchText:"edit or review selection"}},{id:"80e6d17b-2cf5-456b-944b-5f645f0e12de",parent:"root",droppable:!0,text:"Generate from selection",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"group",actions:[],searchText:"generate from selection"}},{id:"3cc70e82-29db-45a0-8136-7ba4cf90bf8e",parent:"root",droppable:!0,text:"Write with AI",data:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},editable:!1,type:"group",actions:[],searchText:"write with ai"}}];var Am=["c769f823-a073-408a-ac44-00e5bfc333a7","0607ffb9-e0fb-41b5-9e02-afabff22acb6","2822ad40-9f2c-4db8-961b-50636218edc7","4d59573b-7e84-4fb0-8d55-582bd4a5c948","6325c4b4-5b4c-457b-849a-eacdcb37edfb","32dd4492-4ec4-44a9-ba53-32223bf385fe","5bb90f56-7cae-4662-9d59-dd2c6ff941ec","c4f861da-75ee-4afb-86a7-de234c0c2309","31e2d82e-5176-43a5-af28-33b873f27496","32f31576-0ab8-4fc8-966d-426970abede6","a261c7e0-1a4f-485f-a9e0-9998c45cd08c","5b4fb377-411b-497b-89d8-045603632f08","8a12f88f-9216-4e92-ad41-b4f55c4cfc2b","f20dcaf5-5133-4046-b129-174f49d0d16c","016adb2d-794e-41ae-9da7-b80a2fc146ca","379124bc-8db4-4b62-b453-cd8e8ab3523e","370bca5c-6e3e-4daa-96ac-070ffe8af179","665d4c2f-0f17-43be-9a49-a65ace4ef4e7","5faf9b14-f2c3-4d3c-a43b-ab9f6e4747b1","4f3d7b3b-62e5-4e88-bd79-01efd7ef0bd0","8294f143-2727-4de6-9065-12358f87a7bd","3e4d313f-8a15-48b2-beb9-1f05f93b4d4f","176a963c-849e-4cd7-8bf3-84e4531f0cc0","0486d1dc-b6bd-4c9b-a861-660e1f87f621","93c3fd09-315d-447d-bbdf-052a78511f39","c4ed94fc-d8cc-4633-b563-4a94582ab58c","d426af1d-4055-4ada-b359-648b9ada81e7","6e14fd11-a06e-40b3-97d5-3fc0515288b0","aa4d2d42-28a6-4a2f-a67d-2805f4307fd9","4d7c6a66-1905-43c1-826b-0b8201461d47","c0f7a642-9e34-4b1f-a2ee-1c4c5e93fa23","b517f321-5533-41e5-8ed0-64eb6aa4b7bd","e5a30298-52e9-431d-89d8-6f5431c236c9","0cb5746c-b879-4ac4-86fb-49f366c81542","481f6d4a-9045-4cd0-b5e7-1eec6822bed3","1aabb1d3-f1af-4e81-aab9-fe4d16630cc3","ad6cebdb-c5ab-4db5-8776-95d6381b90de","6de2edc2-019f-4a6c-9051-a15aa11338a0","24766e7e-a419-4992-aaaf-786a37a0e111","2a753c24-a5cb-496a-a34b-1037e366e690","3aca0447-12a5-4453-b4b2-64e45f16598a","8b6f4e3f-7669-44a8-a020-fb88c5c9d592","fee4c3e1-8970-436a-a535-e6085f283973","d1484846-cba5-4b2b-9fef-0a2d0f4b15b7","96248543-4145-4b5c-b4eb-e6398695a24e","f8a45478-0da3-4c34-8306-b922b68fab5b","c78b028f-ae08-4c3b-830b-c71bc03ead25","e361913f-b0af-443f-8122-1affa88478be","d4051326-c55b-4611-944a-3457ff0a8ed7","bf0da9ac-63d5-40f1-a5c5-63f1468ec13c","9b1b232b-c036-4131-bd6c-c2e5e690c4ea","0d6cce80-546b-4b09-8fe5-f84f195d9d2e","7b26a25c-e869-4832-b5bb-b19685f5c3a5","4d226b15-9e21-42ba-8af8-57d6fbae5a3d","1444ae1f-dbb1-4136-8898-98431ee3a1bb","bd4f9e5a-f9d4-4d1c-aab8-43f951739ab0","c93afaf2-080c-4646-a4dc-5e638f9a0cdb","202a7ddd-bea5-46b3-b32c-a0300c7ac1ee","61404250-a6af-41e2-8b9a-4d6fcfefdb95","ce02e42f-e341-4b94-8bbc-095122507bd2","3c3edab4-4125-43ac-89c0-ca95cda06d34","df5768a8-448d-4070-afa1-5307838ed965","4e54395c-5e8b-4bbd-a309-b6057a4737d3","496d1369-941d-49a5-a9ce-68eadd7601de","547b5b2d-4f7b-4b39-8fdc-524a31659238","1f0b58d6-10cb-4e60-bbc9-10912ca6301c","718dae5a-8c58-47a7-9089-5dc02cedbc3c","3ca990dc-b70b-49b5-abfa-eb1dc8e5f271","84060107-e962-412b-afa2-f8134e593320","b83cb482-710d-4e48-9b22-43b8e8ea3a02","30f27496-1faf-4a00-87cf-b53926d35bfd","80e6d17b-2cf5-456b-944b-5f645f0e12de","3cc70e82-29db-45a0-8136-7ba4cf90bf8e","9431ba4b-3e50-4932-a606-4989276ea593","89da7597-3e7d-4368-807e-b7868d9c89d6","a70f5c73-72c4-4fd7-a213-460f6593b225","ffc003e5-816d-4c7b-a7ca-0ff2d1df1aa5","a211146b-a2d9-4c19-8187-e49a14cc54e6","dd803af3-a0b5-4f69-be13-2210fe5eba6e","5c15c9a2-199c-444e-ab13-f7429755b874","cf8b9c91-7b74-4ef0-a5df-facf3623e7cc","6a3e9e6a-e26b-4723-a7c9-e8dedbed2227","211ddeb6-d48d-4840-b384-84b042e31368","d2effba2-f73a-4d71-affc-c5320037aabf","5073e4ce-13f1-4c12-93fe-833ffec3ab8b","2b77210f-4322-450d-a345-275493203750","9a135767-4e4e-45b3-a8dd-7f9150dcb2a9","aafdf878-b383-47f0-bc7f-29695a15cb59","d0176963-2376-4dd8-acfc-95af778195b9","642854aa-71ce-4d67-9a08-f32c483c2626","61ef6871-364e-40eb-9735-6fcae8da7008","e23325bf-68b3-4a27-ab3f-b015b751e752","8faaca24-8a22-47c4-bb9c-eef161471465","5a87719c-4e07-4f74-ba99-d48e1fc4cbfb","c8d5e44b-f311-43aa-b39d-a11a6c9216b1","d0d199ea-82b9-4272-bcb4-76774d90e12d","2d2bebea-3f18-48e7-b676-de813bc4782b","091011cc-9336-4ed1-b1e5-1fdc49021e19","bc291995-b444-4dad-af8a-bc772b20efe1","d9ee098d-c793-448b-b031-2fc6234b97b3","11794df6-834f-4c22-9580-c8c523d24d09","0c6623a5-3fda-4245-9789-7a0ce9d09dfa","37d449f8-1f5d-49ef-8647-ad8e4f9d49d9","e1495485-48ae-46d6-b8fa-a7fe6eb813cb","81343baa-2aa4-4435-afd3-f3501f51b708","120f9cb1-28c9-4ed2-9752-e13d09cab2fd","2423cca6-564a-496d-93da-00ac5ac9bab5","fec0124d-685c-4285-9dfc-b6c230a9161a","0689088d-8eaa-4a1c-b842-0acd6a865066","e98d9fe0-4412-4ead-9799-e4a384ad0c77","80c3e093-99f6-4a31-b7a1-2830772bd8ff","79ce6a91-7bda-4175-b2f9-7f2403fd8dcc","575a2d26-a216-4290-88fc-9121c03097a9","0995b46f-00b0-41c5-8e18-7eac85af8119"],Im=()=>{let e=Vn.map(a=>a.id),t=new Map;return Am.forEach(a=>{t.set(a,a)}),e.forEach(a=>{t.set(a,a)}),t},zn=Im;var oa=z(Be());var ht=e=>Sa({},...e,(t,a)=>{if(x(a))return a});var Oa=()=>({userSettings:{preferredLanguage:"en",chatGPTStableModeDuration:30,colorSchema:"auto",language:Ua,pdf:{enabled:!0},quickAccess:{enabled:!0},inputAssistantButton:{gmail:!0,outlook:!0,linkedIn:!0,twitter:!0,facebook:!0,youtube:!0,instagram:!0,reddit:!0,googleMyBusiness:!0,slack:!0,discord:!0,whatsApp:!0,hubspot:!0,telegram:!0,googleChat:!0,microsoftTeams:!0}},buttonSettings:{inputAssistantComposeReplyButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"},inputAssistantComposeNewButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"},inputAssistantRefineDraftButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"},textSelectPopupButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"}}}),na=async()=>{let e=Oa(),t=await oa.default.storage.local.get(ge);try{if(t[ge]){let a=JSON.parse(t[ge]),r=ae(e),o=ae(a),n=new Map,i=ae(r.buttonSettings);i&&Object.keys(i).forEach(d=>{i[d].contextMenu?.length>0&&(n.set(d,ae(i[d].contextMenu)),i[d].contextMenu=[])});let s=ae(o.buttonSettings);s&&(a.contextMenus?.length>0&&(s.textSelectPopupButton.contextMenu=a.contextMenus,a.contextMenus=[]),a.gmailToolBarContextMenu?.length>0&&(s.gmailButton.contextMenu=a.gmailToolBarContextMenu,a.gmailToolBarContextMenu=[]),Object.keys(s).forEach(d=>{s[d].contextMenu?.length>0&&(n.set(d,ae(s[d].contextMenu)),s[d].contextMenu=[])}));let l={textSelectPopupButton:{},inputAssistantComposeReplyButton:{},inputAssistantComposeNewButton:{},inputAssistantRefineDraftButton:{}};Object.keys(l).forEach(d=>{n.has(d)&&(l[d].contextMenu=n.get(d))});let p=ht([r,o,{buttonSettings:i},{buttonSettings:s},{buttonSettings:l}]);return Object.prototype.hasOwnProperty.call(p.userSettings,"selectionButtonVisible")&&(p.userSettings.selectionButtonVisible?p.buttonSettings.textSelectPopupButton.visibility.isWhitelistMode=!1:(p.buttonSettings.textSelectPopupButton.visibility.isWhitelistMode=!0,p.buttonSettings.textSelectPopupButton.visibility.whitelist=[]),delete p.userSettings.selectionButtonVisible),p}else return e}catch{return e}},Ca=async e=>{try{let t=await na();if(e instanceof Function){let a=e(t);await oa.default.storage.local.set({[ge]:JSON.stringify(a)})}else await oa.default.storage.local.set({[ge]:JSON.stringify({...t,...e})});return!0}catch{return!1}},Jn=async e=>(await na()).buttonSettings?.[e].contextMenu||[];var Om=async()=>{let e=["inputAssistantComposeReplyButton","textSelectPopupButton"],t=async a=>{let r=await Jn(a),o=zn(),n=0,i=r.map(l=>!l.data.editable||o.get(l.id)?null:l).filter(Boolean);i=Xn(i,"id"),a==="inputAssistantComposeReplyButton"&&(i=[]);let s={};i.forEach(l=>{s[l.id]=l.id}),i=i.map(l=>(s[l.parent]||(l.parent="root"),l)),await Ca(l=>{let p=ae(l);return Fn(p,`buttonSettings.${a}.contextMenu`,i),p})};for(let a of e)await t(a)},Cm=Om;var gt="CHROME_EXTENSION_SETTINGS_SNAPSHOT_LIST",tC=async()=>{let e=Qn(it.default.runtime.getManifest().version),t=await vm(),a=wa(t,"timestamp","desc").filter(n=>!n.isDefault&&n.version!==e);a=[{isDefault:!1,settings:await na(),timestamp:Date.now(),version:e},...a],a=a.slice(0,3),await it.default.storage.local.set({[gt]:JSON.stringify(a)})},vm=async()=>{let t={isDefault:!0,settings:Oa(),timestamp:Date.now(),version:it.default.runtime.getManifest().version};try{let a=await it.default.storage.local.get(gt);return a[gt]?JSON.parse(a[gt]).concat(t):[t]}catch{return[t]}},Zn=async()=>{await it.default.storage.local.remove(gt)};var yt=z(Be());var sa=z(_t());var ia=async()=>{try{let e=await yt.default.storage.local.get(Pe);return e[Pe]?JSON.parse(e[Pe]||"{}"):{}}catch{return{}}},lC=async(e,t)=>{try{let a=await ia();a[e]=t,await yt.default.storage.local.set({[Pe]:JSON.stringify(a)})}catch{}},pC=async e=>{try{let t=await ia();delete t[e],await yt.default.storage.local.set({[Pe]:JSON.stringify(t)})}catch{}},ei=async()=>{try{await yt.default.storage.local.remove(Pe)}catch{}},uC=()=>{let{userSettings:e}=Ra(Da),[t,a]=(0,sa.useState)({}),r=(0,sa.useMemo)(()=>e?.preferredLanguage?t[e.preferredLanguage]||{}:{},[e?.preferredLanguage,t]);return lo(()=>{ia().then(a)}),po(()=>{ia().then(a)}),{contextMenuSearchTextWithCurrentLanguage:r,setContextMenuSearchTextStore:a}};var km=["[Gmail] ","[Outlook] ","[Twitter] ","[LinkedIn] ","[Facebook] ","[YouTube] ","[YouTube Studio] ","[Instagram] "],ti=new RegExp(km.join("|").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\s/g,"\\s"));var va=class{constructor(t,a,r){this.databaseName=t,this.databaseVersion=a,this.objectStoreName=r}openDatabase(){return new Promise((t,a)=>{let r=indexedDB.open(this.databaseName,this.databaseVersion);r.onerror=o=>{a(o.target?.error||"")},r.onsuccess=o=>{let n=o.target?.result;t(n)},r.onupgradeneeded=o=>{let n=o.target?.result;n.objectStoreNames.contains(this.objectStoreName)||n.createObjectStore(this.objectStoreName,{keyPath:"id"}).createIndex("title","title",{unique:!1})}})}addOrUpdateConversation(t){return new Promise(async(a,r)=>{try{let n=(await this.openDatabase()).transaction([this.objectStoreName],"readwrite");n.objectStore(this.objectStoreName).put(t),n.oncomplete=()=>{a()},n.onerror=s=>{r(s.target?.error||"")}}catch(o){r(o)}})}deleteConversation(t){return new Promise(async(a,r)=>{try{let n=(await this.openDatabase()).transaction([this.objectStoreName],"readwrite");n.objectStore(this.objectStoreName).delete(t),n.oncomplete=()=>{a()},n.onerror=s=>{r(s.target?.error||"")}}catch(o){r(o)}})}getConversationById(t){return new Promise(async(a,r)=>{try{let s=(await this.openDatabase()).transaction([this.objectStoreName],"readonly").objectStore(this.objectStoreName).get(t);s.onsuccess=l=>{let p=l.target?.result;a(p)},s.onerror=l=>{r(l.target?.error||"")}}catch(o){r(o)}})}getAllConversations(){return new Promise(async(t,a)=>{try{let i=(await this.openDatabase()).transaction([this.objectStoreName],"readonly").objectStore(this.objectStoreName).getAll();i.onsuccess=s=>{let l=s.target?.result||[];t(l)},i.onerror=s=>{a(s.target?.error||"")}}catch(r){a(r)}})}async removeUnnecessaryConversations(){let t=await this.getAllConversations(),a=[],r=t.filter(o=>{let i=new Date(o.updated_at).getTime();return new Date().getTime()-i<=2592e5?!0:(a.push(o),!1)});r=r.sort((o,n)=>{let i=new Date(o.updated_at).getTime(),s=new Date(n.updated_at).getTime();return i-s});for(let o=0;o<r.length-30;o++)a.push(r[o]);await Promise.all(a.map(o=>this.deleteConversation(o.id)))}async clearAllConversations(){let t=await this.getAllConversations();await Promise.all(t.map(a=>this.deleteConversation(a.id)))}},bt=class{static{this.conversationDB=new va("conversationDB",1,"conversations")}static async createConversation(t){let a={id:da(),title:"Chat",type:"Chat",created_at:new Date().toISOString(),updated_at:new Date().toISOString(),messages:[],meta:{}},r=ht([a,t]);return await this.conversationDB.addOrUpdateConversation(r),this.conversationDB.removeUnnecessaryConversations().then().catch(),r}static async getClientConversation(t){let a=await this.conversationDB.getConversationById(t);return a&&(a.messages=a.messages.map(r=>{if(r.type==="user"){let o=r;return o.extra.meta?.contextMenu&&(o.text=(o.extra.meta.contextMenu.text||o.text).replace(ti,""),o.extra.meta.contextMenu.data=void 0),o}return r})),a}static async pushMessages(t,a){let r=await this.conversationDB.getConversationById(t);return r?(r.messages=r.messages.concat(a),await this.conversationDB.addOrUpdateConversation(r),!0):!1}static async updateMessage(t,a){let r=await this.conversationDB.getConversationById(t);if(!r)return!1;let o=r.messages.findIndex(n=>n.messageId===a.messageId);return o===-1?!1:(r.messages[o]=ht([r.messages[o],a]),await this.conversationDB.addOrUpdateConversation(r),!0)}static async deleteMessages(t,a){let r=await this.conversationDB.getConversationById(t);if(!r)return!1;let o=a;return a>r.messages.length&&(o=r.messages.length),r.messages=r.messages.slice(0,r.messages.length-o),await this.conversationDB.addOrUpdateConversation(r),!0}static async clearAllConversations(){await this.conversationDB.clearAllConversations()}};var Tt=z(Be());var ai={"mail.google.com":{enable:!0,rootSelectors:[".btC"],rootParentDeep:0,rootWrapperTagName:"td",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"GMAIL_DRAFT_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"GMAIL_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"GMAIL_CONTEXT_MENU"},appendPosition:1,CTAButtonStyle:{borderRadius:"18px 0 0 18px",iconSize:18,padding:"9px 12px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0"},InputAssistantBoxSx:{borderRadius:"18px",margin:"0 0 0 12px"}},"outlook.office.com":{enable:!0,rootSelectors:['div[data-testid="ComposeSendButton"]'],rootParentDeep:1,rootStyle:"overflow: unset;",rootParentStyle:"overflow: unset;",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"GMAIL_DRAFT_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"GMAIL_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"GMAIL_CONTEXT_MENU"},appendPosition:1,CTAButtonStyle:{iconSize:16,padding:"8px 20px"},DropdownButtonStyle:{padding:"6px"},InputAssistantBoxSx:{margin:"0 0 0 12px"}},"outlook.live.com":{enable:!0,rootSelectors:['div[data-testid="ComposeSendButton"]'],rootParentDeep:1,rootStyle:"overflow: unset;",rootParentStyle:"overflow: unset;",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"GMAIL_DRAFT_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"GMAIL_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"GMAIL_CONTEXT_MENU"},appendPosition:1,CTAButtonStyle:{padding:"6px 20px"},DropdownButtonStyle:{padding:"6px"},InputAssistantBoxSx:{margin:"0 0 0 12px"}},"outlook.office365.com":{enable:!0,rootSelectors:['div[data-testid="ComposeSendButton"]'],rootParentDeep:1,rootStyle:"overflow: unset;",rootParentStyle:"overflow: unset;",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"OUTLOOK_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"OUTLOOK_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"OUTLOOK_REFINE_DRAFT_BUTTON"},appendPosition:1,CTAButtonStyle:{padding:"6px 20px"},DropdownButtonStyle:{padding:"6px"},InputAssistantBoxSx:{margin:"0 0 0 12px"}},"twitter.com":{enable:!0,rootSelectors:['div[data-testid="toolBar"] > div:nth-child(2) div[role="button"][data-testid]'],rootSelectorStyle:"order:2;",rootParentDeep:1,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"TWITTER_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"TWITTER_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"TWITTER_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{iconSize:16,borderRadius:"18px 0 0 18px",padding:"10px 9px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0",padding:"8px 3px"},InputAssistantBoxSx:{borderRadius:"18px",margin:"0 0 0 12px"},rootWrapperStyle:"order :1;",appendPosition:0},"linkedin.com":{enable:!0,rootSelectors:[".comments-comment-box-comment__text-editor + div > div",".share-box_actions .share-actions__primary-action"],rootStyle:"display:flex;align-items:center;",appendPosition:0,rootParentDeep:1,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"LINKEDIN_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"LINKEDIN_COMPOSE_REPLY_BUTTON",CTAButtonStyle:{padding:"2px 6px"},DropdownButtonStyle:{padding:"0px"}},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"LINKEDIN_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{iconSize:16,borderRadius:"16px 0 0 16px",padding:"8px 10px",transparentHeight:6},DropdownButtonStyle:{borderRadius:"0 16px 16px 0",padding:"6px 3px",transparentHeight:6},InputAssistantBoxSx:{borderRadius:"16px",marginRight:"8px"}},"facebook.com":{enable:!0,rootSelectors:["div > div > div > #focused-state-composer-submit > span > div > i",'form[method="POST"] div > span > div[aria-label="Emoji"]'],rootParentStyle:"padding: 0",rootPreviousElementSiblingStyle:"right: 100px",rootStyle:"display: flex;align-items: center;flex-direction: row;padding: 0",appendPosition:0,rootParentDeep:5,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"FACEBOOK_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"FACEBOOK_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"FACEBOOK_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{padding:"2px 6px",iconSize:16,borderRadius:"16px 0 0 16px",transparentHeight:6},DropdownButtonStyle:{borderRadius:"0 16px 16px 0",padding:"0px",transparentHeight:6},InputAssistantBoxSx:{borderRadius:"16px",marginRight:"8px"}},"youtube.com":{enable:!0,rootSelectors:["ytd-commentbox ytd-button-renderer button.yt-spec-button-shape-next.yt-spec-button-shape-next--filled"],rootStyle:"",appendPosition:2,rootParentDeep:3,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"YOUTUBE_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{padding:"10px 9px",iconSize:16,borderRadius:"18px 0 0 18px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0",padding:"8px 3px"},InputAssistantBoxSx:{borderRadius:"18px",marginLeft:"8px"}},"studio.youtube.com":{enable:!0,rootSelectors:["ytcp-commentbox #submit-button"],appendPosition:2,rootParentDeep:2,rootStyle:"display: flex;align-items: center;margin-top: 8px",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"YOUTUBE_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{padding:"10px 9px",iconSize:16,borderRadius:"18px 0 0 18px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0",padding:"8px 3px"},InputAssistantBoxSx:{borderRadius:"18px",marginLeft:"8px"}},"instagram.com":{enable:!0,rootSelectors:["form textarea",'div:has( > div[contenteditable="true"]) + div > div:nth-child(1) > button > div'],appendPosition:1,rootParentDeep:1,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"YOUTUBE_REFINE_DRAFT_BUTTON"},rootWrapperStyle:"order:2;margin-right: 8px;margin-left: 8px;",CTAButtonStyle:{padding:"5px 12px",iconSize:14,borderRadius:"12px 0  0 12px"},DropdownButtonStyle:{borderRadius:"0 12px 12px 0",padding:"2px"},InputAssistantBoxSx:{borderRadius:"12px"}}},ri=Object.keys(ai),yC=ai;var la=()=>{let e={ON_BOARDING_RECORD_FIRST_MESSAGE:!1,ON_BOARDING_RECORD_BROWSER_VERSION:!1,ON_BOARDING_RECORD_SUMMARY_FREE_TRIAL_TIMES:0,ON_BOARDING_RECORD_SEARCH_FREE_TRIAL_TIMES:0};return Object.keys(Ma).forEach(t=>{e[`ON_BOARDING_RECORD_AI_PROVIDER_HAS_AUTH_${t}`]=!1}),ri.forEach(t=>{e[`ON_BOARDING_RECORD_INPUT_ASSISTANT_BUTTON_${t}_TIMES`]=0}),e},Nm=async(e,t)=>{let a=await oi();a[e]=t,await Tt.default.storage.local.set({[Re]:JSON.stringify(a)})},oi=async()=>{let e=await Tt.default.storage.local.get(Re);return e[Re]?{...la(),...JSON.parse(e[Re])}:(await Tt.default.storage.local.set({[Re]:JSON.stringify(la())}),la())},Rm=async()=>{await Tt.default.storage.local.set({[Re]:JSON.stringify(la())})};ii.default.extend(si.default);var CC=async(e,t)=>{let a=await D.default.tabs.query({}),r=o=>new Promise(n=>setTimeout(n,o));await Promise.race([...a.map(async o=>{if(o.id)try{await D.default.tabs.sendMessage(o.id,{id:he,event:e,data:t})}catch{}}),r(1e3)])},vC=async(e,t,a)=>{let r=await Pm(e);if(r&&r.id)try{return await D.default.tabs.sendMessage(r.id,{id:he,event:t,data:a})}catch{return}},kC=e=>{let t=(a,r)=>{let{data:{_RUNTIME_:o,...n},event:i,id:s}=a;if(s===he)return new Promise(l=>{e(o,i,n,r).then(p=>{p&&Object.prototype.hasOwnProperty.call(p,"success")&&l(p)})})};return D.default.runtime.onMessage.addListener(t),()=>{D.default.runtime.onMessage.removeListener(t)}},NC=e=>{let t=(a,r)=>{let{data:o,event:n,id:i}=a;if(i===he)return new Promise(s=>{e(n,o,r).then(l=>{l&&Object.prototype.hasOwnProperty.call(l,"success")&&s(l)})})};return D.default.runtime.onMessage.addListener(t),()=>{D.default.runtime.onMessage.removeListener(t)}},RC=e=>{(0,ni.useEffect)(()=>{let t=(a,r)=>{let{data:o,event:n,id:i}=a;if(i===he)return new Promise(s=>{e(n,o,r).then(l=>{l&&Object.prototype.hasOwnProperty.call(l,"success")&&s(l)})})};return D.default.runtime.onMessage.addListener(t),()=>{D.default.runtime.onMessage.removeListener(t)}},[])},PC=async()=>{let t=await new Ce().postMessage({event:"Client_getChromeExtensionCommands",data:{}});return t.success?t.data:[]},UC=async(e="",t=!0)=>{let a=D.default.runtime.id,r=(await D.default.tabs.query({})).filter(n=>n.url?.startsWith(`chrome-extension://${a}/pages/settings/index.html`));return await Promise.all(r.map(async n=>{n.id&&await D.default.tabs.remove(n.id)})),(await D.default.tabs.create({url:`chrome-extension://${a}/pages/settings/index.html${e}`,active:t})).id},MC=async()=>{await D.default.storage.local.remove(Pa),await D.default.storage.local.remove(ge),await bt.conversationDB.clearAllConversations(),await Zn(),await ei()},DC=async(e,t=15*1e3)=>{let a=new Ce({runtime:"shortcut"}),r=()=>new Promise(n=>{setTimeout(()=>{n({success:!1,message:"timeout",data:void 0})},t)}),o=a.postMessage({event:"ShortCuts_getContentOfURL",data:{URL:e}});return Promise.race([o,r()]).then(n=>n)},LC=async()=>{try{let e=await D.default.tabs.query({active:!0,currentWindow:!0});await D.default.runtime.reload(),e.forEach(t=>{t.id&&D.default.tabs.reload(t.id)})}catch{}},Qn=e=>{let[t,a,r]=e.split(".").map(Number);if(r>0)return`${t}.${a}.${r-1}`;if(a>0)return`${t}.${a-1}.99`;if(t>0)return`${t-1}.99.99`;throw new Error("Cannot get previous version for version 0.0.0")},Pm=async e=>{if(e)try{return await D.default.tabs.get(e)}catch{return null}else return null},BC=async e=>{let t={origins:[e]};return await D.default.permissions.contains(t)?!0:D.default.permissions.request(t)};export{da as a,I as b,x as c,CA as d,ae as e,hx as f,gx as g,Ce as h,yx as i,no as j,io as k,Uo as l,cE as m,yn as n,oA as o,fA as p,Sc as q,UA as r,WA as s,aI as t,WI as u,KI as v,Fn as w,zI as x,hm as y,nO as z,pO as A,SO as B,Xn as C,Vn as D,ht as E,na as F,Ca as G,Jn as H,Cm as I,tC as J,vm as K,lo as L,po as M,lC as N,pC as O,uC as P,bt as Q,yC as R,Nm as S,oi as T,Rm as U,CC as V,vC as W,kC as X,NC as Y,RC as Z,PC as _,UC as $,MC as aa,DC as ba,LC as ca,Pm as da,BC as ea};
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
