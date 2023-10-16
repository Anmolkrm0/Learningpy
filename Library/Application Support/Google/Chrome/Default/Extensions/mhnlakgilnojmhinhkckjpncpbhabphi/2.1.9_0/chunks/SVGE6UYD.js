import{A as Vt,B as Ge,C as Ye,D as zt,E as gt,F as Jt,G as qe,H as Ce,I as yt,J as Zt,K as Qt,L as ea,M as J,P as bt,R as ta,a as de,b as Gt,c as V,d as fe,e as P,f as Yt,g as Ie,h as te,i as qt,j as ht,k as Le,l as $t,m as Be,n as $,o as z,p as _,q as se,r as ce,s as jt,t as Ht,u as me,v as Ft,w as Xt,x as H,y as We,z as Ke}from"./LVENEOJP.js";import{G as Bt,I as Wt,P as ie,R as Ae,T as Kt,e as Dt,v as ue,w as ee,y as ne,z as Lt}from"./CIA73AT4.js";import{a as De}from"./64D36THL.js";import{c as Mt,f as q}from"./PQ35KENF.js";var oa=Mt((_t,wt)=>{(function(e,t){typeof _t=="object"&&typeof wt<"u"?wt.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs=t()})(_t,function(){"use strict";var e=1e3,t=6e4,a=36e5,o="millisecond",r="second",n="minute",i="hour",s="day",l="week",p="month",c="quarter",h="year",b="date",m="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(g){var f=["th","st","nd","rd"],u=g%100;return"["+g+(f[(u-20)%10]||f[u]||f[0])+"]"}},I=function(g,f,u){var y=String(g);return!y||y.length>=f?g:""+Array(f+1-y.length).join(u)+g},B={s:I,z:function(g){var f=-g.utcOffset(),u=Math.abs(f),y=Math.floor(u/60),d=u%60;return(f<=0?"+":"-")+I(y,2,"0")+":"+I(d,2,"0")},m:function g(f,u){if(f.date()<u.date())return-g(u,f);var y=12*(u.year()-f.year())+(u.month()-f.month()),d=f.clone().add(y,p),x=u-d<0,T=f.clone().add(y+(x?-1:1),p);return+(-(y+(u-d)/(x?d-T:T-d))||0)},a:function(g){return g<0?Math.ceil(g)||0:Math.floor(g)},p:function(g){return{M:p,y:h,w:l,d:s,D:b,h:i,m:n,s:r,ms:o,Q:c}[g]||String(g||"").toLowerCase().replace(/s$/,"")},u:function(g){return g===void 0}},W="en",U={};U[W]=R;var D=function(g){return g instanceof re},C=function g(f,u,y){var d;if(!f)return W;if(typeof f=="string"){var x=f.toLowerCase();U[x]&&(d=x),u&&(U[x]=u,d=x);var T=f.split("-");if(!d&&T.length>1)return g(T[0])}else{var A=f.name;U[A]=f,d=A}return!y&&d&&(W=d),d||!y&&W},S=function(g,f){if(D(g))return g.clone();var u=typeof f=="object"?f:{};return u.date=g,u.args=arguments,new re(u)},E=B;E.l=C,E.i=D,E.w=function(g,f){return S(g,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var re=function(){function g(u){this.$L=C(u.locale,null,!0),this.parse(u)}var f=g.prototype;return f.parse=function(u){this.$d=function(y){var d=y.date,x=y.utc;if(d===null)return new Date(NaN);if(E.u(d))return new Date;if(d instanceof Date)return new Date(d);if(typeof d=="string"&&!/Z$/i.test(d)){var T=d.match(w);if(T){var A=T[2]-1||0,v=(T[7]||"0").substring(0,3);return x?new Date(Date.UTC(T[1],A,T[3]||1,T[4]||0,T[5]||0,T[6]||0,v)):new Date(T[1],A,T[3]||1,T[4]||0,T[5]||0,T[6]||0,v)}}return new Date(d)}(u),this.$x=u.x||{},this.init()},f.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return this.$d.toString()!==m},f.isSame=function(u,y){var d=S(u);return this.startOf(y)<=d&&d<=this.endOf(y)},f.isAfter=function(u,y){return S(u)<this.startOf(y)},f.isBefore=function(u,y){return this.endOf(y)<S(u)},f.$g=function(u,y,d){return E.u(u)?this[y]:this.set(d,u)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(u,y){var d=this,x=!!E.u(y)||y,T=E.p(u),A=function(pe,K){var Q=E.w(d.$u?Date.UTC(d.$y,K,pe):new Date(d.$y,K,pe),d);return x?Q:Q.endOf(s)},v=function(pe,K){return E.w(d.toDate()[pe].apply(d.toDate("s"),(x?[0,0,0,0]:[23,59,59,999]).slice(K)),d)},O=this.$W,L=this.$M,Z=this.$D,X="set"+(this.$u?"UTC":"");switch(T){case h:return x?A(1,0):A(31,11);case p:return x?A(1,L):A(0,L+1);case l:var we=this.$locale().weekStart||0,Se=(O<we?O+7:O)-we;return A(x?Z-Se:Z+(6-Se),L);case s:case b:return v(X+"Hours",0);case i:return v(X+"Minutes",1);case n:return v(X+"Seconds",2);case r:return v(X+"Milliseconds",3);default:return this.clone()}},f.endOf=function(u){return this.startOf(u,!1)},f.$set=function(u,y){var d,x=E.p(u),T="set"+(this.$u?"UTC":""),A=(d={},d[s]=T+"Date",d[b]=T+"Date",d[p]=T+"Month",d[h]=T+"FullYear",d[i]=T+"Hours",d[n]=T+"Minutes",d[r]=T+"Seconds",d[o]=T+"Milliseconds",d)[x],v=x===s?this.$D+(y-this.$W):y;if(x===p||x===h){var O=this.clone().set(b,1);O.$d[A](v),O.init(),this.$d=O.set(b,Math.min(this.$D,O.daysInMonth())).$d}else A&&this.$d[A](v);return this.init(),this},f.set=function(u,y){return this.clone().$set(u,y)},f.get=function(u){return this[E.p(u)]()},f.add=function(u,y){var d,x=this;u=Number(u);var T=E.p(y),A=function(L){var Z=S(x);return E.w(Z.date(Z.date()+Math.round(L*u)),x)};if(T===p)return this.set(p,this.$M+u);if(T===h)return this.set(h,this.$y+u);if(T===s)return A(1);if(T===l)return A(7);var v=(d={},d[n]=t,d[i]=a,d[r]=e,d)[T]||1,O=this.$d.getTime()+u*v;return E.w(O,this)},f.subtract=function(u,y){return this.add(-1*u,y)},f.format=function(u){var y=this,d=this.$locale();if(!this.isValid())return d.invalidDate||m;var x=u||"YYYY-MM-DDTHH:mm:ssZ",T=E.z(this),A=this.$H,v=this.$m,O=this.$M,L=d.weekdays,Z=d.months,X=function(K,Q,mt,Me){return K&&(K[Q]||K(y,x))||mt[Q].slice(0,Me)},we=function(K){return E.s(A%12||12,K,"0")},Se=d.meridiem||function(K,Q,mt){var Me=K<12?"AM":"PM";return mt?Me.toLowerCase():Me},pe={YY:String(this.$y).slice(-2),YYYY:this.$y,M:O+1,MM:E.s(O+1,2,"0"),MMM:X(d.monthsShort,O,Z,3),MMMM:X(Z,O),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:X(d.weekdaysMin,this.$W,L,2),ddd:X(d.weekdaysShort,this.$W,L,3),dddd:L[this.$W],H:String(A),HH:E.s(A,2,"0"),h:we(1),hh:we(2),a:Se(A,v,!0),A:Se(A,v,!1),m:String(v),mm:E.s(v,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:T};return x.replace(N,function(K,Q){return Q||pe[K]||T.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(u,y,d){var x,T=E.p(y),A=S(u),v=(A.utcOffset()-this.utcOffset())*t,O=this-A,L=E.m(this,A);return L=(x={},x[h]=L/12,x[p]=L,x[c]=L/3,x[l]=(O-v)/6048e5,x[s]=(O-v)/864e5,x[i]=O/a,x[n]=O/t,x[r]=O/e,x)[T]||O,d?L:E.a(L)},f.daysInMonth=function(){return this.endOf(p).$D},f.$locale=function(){return U[this.$L]},f.locale=function(u,y){if(!u)return this.$L;var d=this.clone(),x=C(u,y,!0);return x&&(d.$L=x),d},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},g}(),Ut=re.prototype;return S.prototype=Ut,[["$ms",o],["$s",r],["$m",n],["$H",i],["$W",s],["$M",p],["$y",h],["$D",b]].forEach(function(g){Ut[g[1]]=function(f){return this.$g(f,g[0],g[1])}}),S.extend=function(g,f){return g.$i||(g(f,re,S),g.$i=!0),S},S.locale=C,S.isDayjs=D,S.unix=function(g){return S(1e3*g)},S.en=U[W],S.Ls=U,S.p={},S})});var ra=Mt((St,At)=>{(function(e,t){typeof St=="object"&&typeof At<"u"?At.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_utc=t()})(St,function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(o,r,n){var i=r.prototype;n.utc=function(m){var w={date:m,utc:!0,args:arguments};return new r(w)},i.utc=function(m){var w=n(this.toDate(),{locale:this.$L,utc:!0});return m?w.add(this.utcOffset(),e):w},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var s=i.parse;i.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),s.call(this,m)};var l=i.init;i.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else l.call(this)};var p=i.utcOffset;i.utcOffset=function(m,w){var N=this.$utils().u;if(N(m))return this.$u?0:N(this.$offset)?p.call(this):this.$offset;if(typeof m=="string"&&(m=function(W){W===void 0&&(W="");var U=W.match(t);if(!U)return null;var D=(""+U[0]).match(a)||["-",0,0],C=D[0],S=60*+D[1]+ +D[2];return S===0?0:C==="+"?S:-S}(m),m===null))return this;var R=Math.abs(m)<=16?60*m:m,I=this;if(w)return I.$offset=R,I.$u=m===0,I;if(m!==0){var B=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(I=this.local().add(R+B,e)).$offset=R,I.$x.$localOffset=B}else I=this.utc();return I};var c=i.format;i.format=function(m){var w=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,w)},i.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var h=i.toDate;i.toDate=function(m){return m==="s"&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var b=i.diff;i.diff=function(m,w,N){if(m&&this.$u===m.$u)return b.call(this,m,w,N);var R=this.local(),I=n(m).local();return b.call(R,I,w,N)}}})});var Fo=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Tt={randomUUID:Fo};var $e,Xo=new Uint8Array(16);function xt(){if(!$e&&($e=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $e(Xo)}var M=[];for(let e=0;e<256;++e)M.push((e+256).toString(16).slice(1));function aa(e,t=0){return(M[e[t+0]]+M[e[t+1]]+M[e[t+2]]+M[e[t+3]]+"-"+M[e[t+4]]+M[e[t+5]]+"-"+M[e[t+6]]+M[e[t+7]]+"-"+M[e[t+8]]+M[e[t+9]]+"-"+M[e[t+10]]+M[e[t+11]]+M[e[t+12]]+M[e[t+13]]+M[e[t+14]]+M[e[t+15]]).toLowerCase()}function Vo(e,t,a){if(Tt.randomUUID&&!t&&!e)return Tt.randomUUID();e=e||{};let o=e.random||(e.rng||xt)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){a=a||0;for(let r=0;r<16;++r)t[a+r]=o[r];return t}return aa(o)}var Et=Vo;var na=q(De()),ia=e=>{(0,na.useEffect)(()=>{let t=()=>{e()};return window.addEventListener("focus",t),()=>{window.removeEventListener("focus",t)}},[])};var he=q(De());function zo(e){let t=(0,he.useRef)(),a=(0,he.useRef)(!1),o=(0,he.useRef)(!1);a.current&&(o.current=!0),(0,he.useEffect)(()=>{if(!a.current)return a.current=!0,t.current=e(),()=>{o.current&&t.current&&t.current()}},[])}var sa=zo;var k=q(Ae());var $o=q(De());var jo=q(oa()),Ho=q(ra());var _e=q(Ae());var Jo="[object Symbol]";function Zo(e){return typeof e=="symbol"||$(e)&&fe(e)==Jo}var j=Zo;function Qo(e,t){for(var a=-1,o=e==null?0:e.length,r=Array(o);++a<o;)r[a]=t(e[a],a,e);return r}var ae=Qo;var er=1/0,la=V?V.prototype:void 0,pa=la?la.toString:void 0;function ua(e){if(typeof e=="string")return e;if(_(e))return ae(e,ua)+"";if(j(e))return pa?pa.call(e):"";var t=e+"";return t=="0"&&1/e==-er?"-0":t}var da=ua;var tr=/\s/;function ar(e){for(var t=e.length;t--&&tr.test(e.charAt(t)););return t}var fa=ar;var or=/^\s+/;function rr(e){return e&&e.slice(0,fa(e)+1).replace(or,"")}var ca=rr;var ma=0/0,nr=/^[-+]0x[0-9a-f]+$/i,ir=/^0b[01]+$/i,sr=/^0o[0-7]+$/i,lr=parseInt;function pr(e){if(typeof e=="number")return e;if(j(e))return ma;if(P(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=P(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ca(e);var a=ir.test(e);return a||sr.test(e)?lr(e.slice(2),a?2:8):nr.test(e)?ma:+e}var Oe=pr;var ha=1/0,ur=17976931348623157e292;function dr(e){if(!e)return e===0?e:0;if(e=Oe(e),e===ha||e===-ha){var t=e<0?-1:1;return t*ur}return e===e?e:0}var It=dr;function fr(e){return e}var G=fr;function cr(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var ga=cr;function mr(){}var ya=mr;var hr=800,gr=16,yr=Date.now;function br(e){var t=0,a=0;return function(){var o=yr(),r=gr-(o-a);if(a=o,r>0){if(++t>=hr)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var ba=br;function Tr(e){return function(){return e}}var Ta=Tr;var xr=ht?function(e,t){return ht(e,"toString",{configurable:!0,enumerable:!1,value:Ta(t),writable:!0})}:G,xa=xr;var Er=ba(xa),je=Er;function _r(e,t,a,o){for(var r=e.length,n=a+(o?1:-1);o?n--:++n<r;)if(t(e[n],n,e))return n;return-1}var Ea=_r;function wr(e){return e!==e}var _a=wr;function Sr(e,t,a){for(var o=a-1,r=e.length;++o<r;)if(e[o]===t)return o;return-1}var wa=Sr;function Ar(e,t,a){return t===t?wa(e,t,a):Ea(e,_a,a)}var Sa=Ar;function Ir(e,t){var a=e==null?0:e.length;return!!a&&Sa(e,t,0)>-1}var Aa=Ir;var Ia=Math.max;function Cr(e,t,a){return t=Ia(t===void 0?e.length-1:t,0),function(){for(var o=arguments,r=-1,n=Ia(o.length-t,0),i=Array(n);++r<n;)i[r]=o[t+r];r=-1;for(var s=Array(t+1);++r<t;)s[r]=o[r];return s[t]=a(i),ga(e,this,s)}}var He=Cr;function Or(e,t){return je(He(e,t,G),e+"")}var Fe=Or;function kr(e,t,a){if(!P(a))return!1;var o=typeof t;return(o=="number"?H(a)&&ce(t,a.length):o=="string"&&t in a)?de(a[t],e):!1}var le=kr;function Nr(e){return Fe(function(t,a){var o=-1,r=a.length,n=r>1?a[r-1]:void 0,i=r>2?a[2]:void 0;for(n=e.length>3&&typeof n=="function"?(r--,n):void 0,i&&le(a[0],a[1],i)&&(n=r<3?void 0:n,r=1),t=Object(t);++o<r;){var s=a[o];s&&e(t,s,o,n)}return t})}var Xe=Nr;var vr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rr=/^\w*$/;function Pr(e,t){if(_(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||j(e)?!0:Rr.test(e)||!vr.test(e)||t!=null&&e in Object(t)}var ge=Pr;var Ur="Expected a function";function Ct(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Ur);var a=function(){var o=arguments,r=t?t.apply(this,o):o[0],n=a.cache;if(n.has(r))return n.get(r);var i=e.apply(this,o);return a.cache=n.set(r,i)||n,i};return a.cache=new(Ct.Cache||Ie),a}Ct.Cache=Ie;var Ca=Ct;var Mr=500;function Dr(e){var t=Ca(e,function(o){return a.size===Mr&&a.clear(),o}),a=t.cache;return t}var Oa=Dr;var Lr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Br=/\\(\\)?/g,Wr=Oa(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Lr,function(a,o,r,n){t.push(r?n.replace(Br,"$1"):o||a)}),t}),ka=Wr;function Kr(e){return e==null?"":da(e)}var Na=Kr;function Gr(e,t){return _(e)?e:ge(e,t)?[e]:ka(Na(e))}var F=Gr;var Yr=1/0;function qr(e){if(typeof e=="string"||j(e))return e;var t=e+"";return t=="0"&&1/e==-Yr?"-0":t}var Y=qr;function $r(e,t){t=F(t,e);for(var a=0,o=t.length;e!=null&&a<o;)e=e[Y(t[a++])];return a&&a==o?e:void 0}var oe=$r;function jr(e,t,a){var o=e==null?void 0:oe(e,t);return o===void 0?a:o}var va=jr;var Ra=V?V.isConcatSpreadable:void 0;function Hr(e){return _(e)||z(e)||!!(Ra&&e&&e[Ra])}var Pa=Hr;function Ua(e,t,a,o,r){var n=-1,i=e.length;for(a||(a=Pa),r||(r=[]);++n<i;){var s=e[n];t>0&&a(s)?t>1?Ua(s,t-1,a,o,r):Ye(r,s):o||(r[r.length]=s)}return r}var ye=Ua;function Fr(e){var t=e==null?0:e.length;return t?ye(e,1):[]}var Ma=Fr;function Xr(e){return je(He(e,void 0,Ma),e+"")}var Da=Xr;var Vr="[object Object]",zr=Function.prototype,Jr=Object.prototype,La=zr.toString,Zr=Jr.hasOwnProperty,Qr=La.call(Object);function en(e){if(!$(e)||fe(e)!=Vr)return!1;var t=zt(e);if(t===null)return!0;var a=Zr.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&La.call(a)==Qr}var Ve=en;function tn(e,t,a){var o=-1,r=e.length;t<0&&(t=-t>r?0:r+t),a=a>r?r:a,a<0&&(a+=r),r=t>a?0:a-t>>>0,t>>>=0;for(var n=Array(r);++o<r;)n[o]=e[o+t];return n}var Ba=tn;function an(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),a=arguments[0],o=e;o--;)t[o-1]=arguments[o];return Ye(_(a)?Ge(a):[a],ye(t,1))}var Cp=an;var on="__lodash_hash_undefined__";function rn(e){return this.__data__.set(e,on),this}var Wa=rn;function nn(e){return this.__data__.has(e)}var Ka=nn;function ze(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new Ie;++t<a;)this.add(e[t])}ze.prototype.add=ze.prototype.push=Wa;ze.prototype.has=Ka;var Je=ze;function sn(e,t){for(var a=-1,o=e==null?0:e.length;++a<o;)if(t(e[a],a,e))return!0;return!1}var Ga=sn;function ln(e,t){return e.has(t)}var Ze=ln;var pn=1,un=2;function dn(e,t,a,o,r,n){var i=a&pn,s=e.length,l=t.length;if(s!=l&&!(i&&l>s))return!1;var p=n.get(e),c=n.get(t);if(p&&c)return p==t&&c==e;var h=-1,b=!0,m=a&un?new Je:void 0;for(n.set(e,t),n.set(t,e);++h<s;){var w=e[h],N=t[h];if(o)var R=i?o(N,w,h,t,e,n):o(w,N,h,e,t,n);if(R!==void 0){if(R)continue;b=!1;break}if(m){if(!Ga(t,function(I,B){if(!Ze(m,B)&&(w===I||r(w,I,a,o,n)))return m.push(B)})){b=!1;break}}else if(!(w===N||r(w,N,a,o,n))){b=!1;break}}return n.delete(e),n.delete(t),b}var Qe=dn;function fn(e){var t=-1,a=Array(e.size);return e.forEach(function(o,r){a[++t]=[r,o]}),a}var Ya=fn;function cn(e){var t=-1,a=Array(e.size);return e.forEach(function(o){a[++t]=o}),a}var be=cn;var mn=1,hn=2,gn="[object Boolean]",yn="[object Date]",bn="[object Error]",Tn="[object Map]",xn="[object Number]",En="[object RegExp]",_n="[object Set]",wn="[object String]",Sn="[object Symbol]",An="[object ArrayBuffer]",In="[object DataView]",qa=V?V.prototype:void 0,Ot=qa?qa.valueOf:void 0;function Cn(e,t,a,o,r,n,i){switch(a){case In:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case An:return!(e.byteLength!=t.byteLength||!n(new yt(e),new yt(t)));case gn:case yn:case xn:return de(+e,+t);case bn:return e.name==t.name&&e.message==t.message;case En:case wn:return e==t+"";case Tn:var s=Ya;case _n:var l=o&mn;if(s||(s=be),e.size!=t.size&&!l)return!1;var p=i.get(e);if(p)return p==t;o|=hn,i.set(e,t);var c=Qe(s(e),s(t),o,r,n,i);return i.delete(e),c;case Sn:if(Ot)return Ot.call(e)==Ot.call(t)}return!1}var $a=Cn;var On=1,kn=Object.prototype,Nn=kn.hasOwnProperty;function vn(e,t,a,o,r,n){var i=a&On,s=gt(e),l=s.length,p=gt(t),c=p.length;if(l!=c&&!i)return!1;for(var h=l;h--;){var b=s[h];if(!(i?b in t:Nn.call(t,b)))return!1}var m=n.get(e),w=n.get(t);if(m&&w)return m==t&&w==e;var N=!0;n.set(e,t),n.set(t,e);for(var R=i;++h<l;){b=s[h];var I=e[b],B=t[b];if(o)var W=i?o(B,I,b,t,e,n):o(I,B,b,e,t,n);if(!(W===void 0?I===B||r(I,B,a,o,n):W)){N=!1;break}R||(R=b=="constructor")}if(N&&!R){var U=e.constructor,D=t.constructor;U!=D&&"constructor"in e&&"constructor"in t&&!(typeof U=="function"&&U instanceof U&&typeof D=="function"&&D instanceof D)&&(N=!1)}return n.delete(e),n.delete(t),N}var ja=vn;var Rn=1,Ha="[object Arguments]",Fa="[object Array]",et="[object Object]",Pn=Object.prototype,Xa=Pn.hasOwnProperty;function Un(e,t,a,o,r,n){var i=_(e),s=_(t),l=i?Fa:Ce(e),p=s?Fa:Ce(t);l=l==Ha?et:l,p=p==Ha?et:p;var c=l==et,h=p==et,b=l==p;if(b&&se(e)){if(!se(t))return!1;i=!0,c=!1}if(b&&!c)return n||(n=new te),i||me(e)?Qe(e,t,a,o,r,n):$a(e,t,l,a,o,r,n);if(!(a&Rn)){var m=c&&Xa.call(e,"__wrapped__"),w=h&&Xa.call(t,"__wrapped__");if(m||w){var N=m?e.value():e,R=w?t.value():t;return n||(n=new te),r(N,R,a,o,n)}}return b?(n||(n=new te),ja(e,t,a,o,r,n)):!1}var Va=Un;function za(e,t,a,o,r){return e===t?!0:e==null||t==null||!$(e)&&!$(t)?e!==e&&t!==t:Va(e,t,a,o,za,r)}var Te=za;var Mn=1,Dn=2;function Ln(e,t,a,o){var r=a.length,n=r,i=!o;if(e==null)return!n;for(e=Object(e);r--;){var s=a[r];if(i&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<n;){s=a[r];var l=s[0],p=e[l],c=s[1];if(i&&s[2]){if(p===void 0&&!(l in e))return!1}else{var h=new te;if(o)var b=o(p,c,l,e,t,h);if(!(b===void 0?Te(c,p,Mn|Dn,o,h):b))return!1}}return!0}var Ja=Ln;function Bn(e){return e===e&&!P(e)}var tt=Bn;function Wn(e){for(var t=We(e),a=t.length;a--;){var o=t[a],r=e[o];t[a]=[o,r,tt(r)]}return t}var Za=Wn;function Kn(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==void 0||e in Object(a))}}var at=Kn;function Gn(e){var t=Za(e);return t.length==1&&t[0][2]?at(t[0][0],t[0][1]):function(a){return a===e||Ja(a,e,t)}}var Qa=Gn;function Yn(e,t){return e!=null&&t in Object(e)}var eo=Yn;function qn(e,t,a){t=F(t,e);for(var o=-1,r=t.length,n=!1;++o<r;){var i=Y(t[o]);if(!(n=e!=null&&a(e,i)))break;e=e[i]}return n||++o!=r?n:(r=e==null?0:e.length,!!r&&jt(r)&&ce(i,r)&&(_(e)||z(e)))}var to=qn;function $n(e,t){return e!=null&&to(e,t,eo)}var ao=$n;var jn=1,Hn=2;function Fn(e,t){return ge(e)&&tt(t)?at(Y(e),t):function(a){var o=va(a,e);return o===void 0&&o===t?ao(a,e):Te(t,o,jn|Hn)}}var oo=Fn;function Xn(e){return function(t){return oe(t,e)}}var ro=Xn;function Vn(e){return ge(e)?ta(Y(e)):ro(e)}var no=Vn;function zn(e){return typeof e=="function"?e:e==null?G:typeof e=="object"?_(e)?oo(e[0],e[1]):Qa(e):no(e)}var xe=zn;function Jn(e,t,a,o){for(var r=-1,n=e==null?0:e.length;++r<n;){var i=e[r];t(o,i,a(i),e)}return o}var io=Jn;function Zn(e){return function(t,a,o){for(var r=-1,n=Object(t),i=o(t),s=i.length;s--;){var l=i[e?s:++r];if(a(n[l],l,n)===!1)break}return t}}var so=Zn;var Qn=so(),ot=Qn;function ei(e,t){return e&&ot(e,t,We)}var lo=ei;function ti(e,t){return function(a,o){if(a==null)return a;if(!H(a))return e(a,o);for(var r=a.length,n=t?r:-1,i=Object(a);(t?n--:++n<r)&&o(i[n],n,i)!==!1;);return a}}var po=ti;var ai=po(lo),Ee=ai;function oi(e,t,a,o){return Ee(e,function(r,n,i){t(o,r,a(r),i)}),o}var uo=oi;function ri(e,t){return function(a,o){var r=_(a)?io:uo,n=t?t():{};return r(a,e,xe(o,2),n)}}var fo=ri;var ni=function(){return Gt.Date.now()},rt=ni;var ii="Expected a function",si=Math.max,li=Math.min;function pi(e,t,a){var o,r,n,i,s,l,p=0,c=!1,h=!1,b=!0;if(typeof e!="function")throw new TypeError(ii);t=Oe(t)||0,P(a)&&(c=!!a.leading,h="maxWait"in a,n=h?si(Oe(a.maxWait)||0,t):n,b="trailing"in a?!!a.trailing:b);function m(C){var S=o,E=r;return o=r=void 0,p=C,i=e.apply(E,S),i}function w(C){return p=C,s=setTimeout(I,t),c?m(C):i}function N(C){var S=C-l,E=C-p,re=t-S;return h?li(re,n-E):re}function R(C){var S=C-l,E=C-p;return l===void 0||S>=t||S<0||h&&E>=n}function I(){var C=rt();if(R(C))return B(C);s=setTimeout(I,N(C))}function B(C){return s=void 0,b&&o?m(C):(o=r=void 0,i)}function W(){s!==void 0&&clearTimeout(s),p=0,o=l=r=s=void 0}function U(){return s===void 0?i:B(rt())}function D(){var C=rt(),S=R(C);if(o=arguments,r=this,l=C,S){if(s===void 0)return w(l);if(h)return clearTimeout(s),s=setTimeout(I,t),m(l)}return s===void 0&&(s=setTimeout(I,t)),i}return D.cancel=W,D.flush=U,D}var co=pi;function ui(e,t,a){(a!==void 0&&!de(e[t],a)||a===void 0&&!(t in e))&&Le(e,t,a)}var ke=ui;function di(e){return $(e)&&H(e)}var mo=di;function fi(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Ne=fi;function ci(e){return Be(e,Ke(e))}var ho=ci;function mi(e,t,a,o,r,n,i){var s=Ne(e,a),l=Ne(t,a),p=i.get(l);if(p){ke(e,a,p);return}var c=n?n(s,l,a+"",e,t,i):void 0,h=c===void 0;if(h){var b=_(l),m=!b&&se(l),w=!b&&!m&&me(l);c=l,b||m||w?_(s)?c=s:mo(s)?c=Ge(s):m?(h=!1,c=Vt(l,!0)):w?(h=!1,c=Zt(l,!0)):c=[]:Ve(l)||z(l)?(c=s,z(s)?c=ho(s):(!P(s)||Yt(s))&&(c=Qt(l))):h=!1}h&&(i.set(l,c),r(c,l,o,n,i),i.delete(l)),ke(e,a,c)}var go=mi;function yo(e,t,a,o,r){e!==t&&ot(t,function(n,i){if(r||(r=new te),P(n))go(e,t,i,a,yo,o,r);else{var s=o?o(Ne(e,i),n,i+"",e,t,r):void 0;s===void 0&&(s=n),ke(e,i,s)}},Ke)}var nt=yo;var hi=Xe(function(e,t,a,o){nt(e,t,a,o)}),kt=hi;function gi(e,t,a){for(var o=-1,r=e==null?0:e.length;++o<r;)if(a(t,e[o]))return!0;return!1}var bo=gi;function yi(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var To=yi;function bi(e){return typeof e=="function"?e:G}var xo=bi;function Ti(e,t){var a=_(e)?qt:Ee;return a(e,xo(t))}var bf=Ti;function xi(e,t){var a=-1,o=H(e)?Array(e.length):[];return Ee(e,function(r,n,i){o[++a]=t(r,n,i)}),o}var Eo=xi;var Ei=Object.prototype,_i=Ei.hasOwnProperty,wi=fo(function(e,t,a){_i.call(e,a)?e[a].push(t):Le(e,a,[t])}),Af=wi;function Si(e,t){return t.length<2?e:oe(e,Ba(t,0,-1))}var _o=Si;var Ai="[object Map]",Ii="[object Set]",Ci=Object.prototype,Oi=Ci.hasOwnProperty;function ki(e){if(e==null)return!0;if(H(e)&&(_(e)||typeof e=="string"||typeof e.splice=="function"||se(e)||me(e)||z(e)))return!e.length;var t=Ce(e);if(t==Ai||t==Ii)return!e.size;if(Ft(e))return!Xt(e).length;for(var a in e)if(Oi.call(e,a))return!1;return!0}var Bf=ki;function Ni(e,t){return Te(e,t)}var vi=Ni;var Ri="[object Number]";function Pi(e){return typeof e=="number"||$(e)&&fe(e)==Ri}var $f=Pi;function Ui(e,t){for(var a,o=-1,r=e.length;++o<r;){var n=t(e[o]);n!==void 0&&(a=a===void 0?n:a+n)}return a}var wo=Ui;var Mi=Xe(function(e,t,a){nt(e,t,a)}),Vf=Mi;function Di(e,t){return t=F(t,e),e=_o(e,t),e==null||delete e[Y(To(t))]}var So=Di;function Li(e){return Ve(e)?void 0:e}var Ao=Li;var Bi=1,Wi=2,Ki=4,Gi=Da(function(e,t){var a={};if(e==null)return a;var o=!1;t=ae(t,function(n){return n=F(n,e),o||(o=n.length>1),n}),Be(e,Jt(e),a),o&&(a=ea(a,Bi|Wi|Ki,Ao));for(var r=t.length;r--;)So(a,t[r]);return a}),fc=Gi;function Yi(e,t,a,o){if(!P(e))return e;t=F(t,e);for(var r=-1,n=t.length,i=n-1,s=e;s!=null&&++r<n;){var l=Y(t[r]),p=a;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(r!=i){var c=s[l];p=o?o(c,l,s):void 0,p===void 0&&(p=P(c)?c:ce(t[r+1])?[]:{})}$t(s,l,p),s=s[l]}return e}var Io=Yi;function qi(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}var Co=qi;function $i(e,t){if(e!==t){var a=e!==void 0,o=e===null,r=e===e,n=j(e),i=t!==void 0,s=t===null,l=t===t,p=j(t);if(!s&&!p&&!n&&e>t||n&&i&&l&&!s&&!p||o&&i&&l||!a&&l||!r)return 1;if(!o&&!n&&!p&&e<t||p&&a&&r&&!o&&!n||s&&a&&r||!i&&r||!l)return-1}return 0}var Oo=$i;function ji(e,t,a){for(var o=-1,r=e.criteria,n=t.criteria,i=r.length,s=a.length;++o<i;){var l=Oo(r[o],n[o]);if(l){if(o>=s)return l;var p=a[o];return l*(p=="desc"?-1:1)}}return e.index-t.index}var ko=ji;function Hi(e,t,a){t.length?t=ae(t,function(n){return _(n)?function(i){return oe(i,n.length===1?n[0]:n)}:n}):t=[G];var o=-1;t=ae(t,Ht(xe));var r=Eo(e,function(n,i,s){var l=ae(t,function(p){return p(n)});return{criteria:l,index:++o,value:n}});return Co(r,function(n,i){return ko(n,i,a)})}var it=Hi;function Fi(e,t,a,o){return e==null?[]:(_(t)||(t=t==null?[]:[t]),a=o?void 0:a,_(a)||(a=a==null?[]:[a]),it(e,t,a))}var Nt=Fi;var Xi=Math.floor,Vi=Math.random;function zi(e,t){return e+Xi(Vi()*(t-e+1))}var No=zi;var Ji=parseFloat,Zi=Math.min,Qi=Math.random;function es(e,t,a){if(a&&typeof a!="boolean"&&le(e,t,a)&&(t=a=void 0),a===void 0&&(typeof t=="boolean"?(a=t,t=void 0):typeof e=="boolean"&&(a=e,e=void 0)),e===void 0&&t===void 0?(e=0,t=1):(e=It(e),t===void 0?(t=e,e=0):t=It(t)),e>t){var o=e;e=t,t=o}if(a||e%1||t%1){var r=Qi();return Zi(e+r*(t-e+Ji("1e-"+((r+"").length-1))),t)}return No(e,t)}var Yc=es;var ts=Array.prototype,as=ts.reverse;function os(e){return e==null?e:as.call(e)}var $c=os;function rs(e,t,a){return e==null?e:Io(e,t,a)}var vo=rs;var ns=Fe(function(e,t){if(e==null)return[];var a=t.length;return a>1&&le(e,t[0],t[1])?t=[]:a>2&&le(t[0],t[1],t[2])&&(t=[t[0]]),it(e,ye(t,1),[])}),is=ns;function ss(e){return e&&e.length?wo(e,G):0}var tm=ss;var ls="Expected a function";function ps(e,t,a){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(ls);return P(a)&&(o="leading"in a?!!a.leading:o,r="trailing"in a?!!a.trailing:r),co(e,t,{leading:o,maxWait:t,trailing:r})}var nm=ps;var us=1/0,ds=qe&&1/be(new qe([,-0]))[1]==us?function(e){return new qe(e)}:ya,Ro=ds;var fs=200;function cs(e,t,a){var o=-1,r=Aa,n=e.length,i=!0,s=[],l=s;if(a)i=!1,r=bo;else if(n>=fs){var p=t?null:Ro(e);if(p)return be(p);i=!1,r=Ze,l=new Je}else l=t?[]:s;e:for(;++o<n;){var c=e[o],h=t?t(c):c;if(c=a||c!==0?c:0,i&&h===h){for(var b=l.length;b--;)if(l[b]===h)continue e;t&&l.push(h),s.push(c)}else r(l,h,a)||(l!==s&&l.push(h),s.push(c))}return s}var st=cs;function ms(e){return e&&e.length?st(e):[]}var Tm=ms;function hs(e,t){return e&&e.length?st(e,xe(t,2)):[]}var Po=hs;var Uo=[{id:"c769f823-a073-408a-ac44-00e5bfc333a7",parent:"b83cb482-710d-4e48-9b22-43b8e8ea3a02",droppable:!0,text:"Quick reply",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1},icon:"Reply",searchText:"messaging quick reply"}},{id:"0607ffb9-e0fb-41b5-9e02-afabff22acb6",parent:"c769f823-a073-408a-ac44-00e5bfc333a7",droppable:!0,text:"Like",data:{editable:!1,type:"shortcuts",actions:[{type:"RENDER_TEMPLATE",parameters:{template:`Ignore all previous instructions. You're a highly skilled messaging expert, adept at responding to all types of chat messages and posts in an appropriate manner. Your task is to write a reply to the following text delimited by triple backticks, which is a chat message on {{CURRENT_WEBSITE_DOMAIN}}.

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
\`\`\``}},{type:"INSERT_USER_INPUT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}},{type:"ASK_CHATGPT",parameters:{template:"{{LAST_ACTION_OUTPUT}}"}}],icon:"Autorenew",searchText:"edit or review selection paraphrase"}},{id:"b83cb482-710d-4e48-9b22-43b8e8ea3a02",parent:"root",droppable:!0,text:"Messaging",data:{editable:!1,type:"group",actions:[],visibility:{whitelist:["meet.google.com","teams.microsoft.com","web.skype.com","web.snapchat.com","app.hubspot.com","mp.weixin.qq.com","messenger.com","web.telegram.org","app.slack.com","discord.com","web.whatsapp.com"],blacklist:[],isWhitelistMode:!0},searchText:"messaging"}},{id:"30f27496-1faf-4a00-87cf-b53926d35bfd",parent:"root",droppable:!0,text:"Edit or review selection",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"group",actions:[],searchText:"edit or review selection"}},{id:"80e6d17b-2cf5-456b-944b-5f645f0e12de",parent:"root",droppable:!0,text:"Generate from selection",data:{editable:!1,visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},type:"group",actions:[],searchText:"generate from selection"}},{id:"3cc70e82-29db-45a0-8136-7ba4cf90bf8e",parent:"root",droppable:!0,text:"Write with AI",data:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},editable:!1,type:"group",actions:[],searchText:"write with ai"}}];var gs=["c769f823-a073-408a-ac44-00e5bfc333a7","0607ffb9-e0fb-41b5-9e02-afabff22acb6","2822ad40-9f2c-4db8-961b-50636218edc7","4d59573b-7e84-4fb0-8d55-582bd4a5c948","6325c4b4-5b4c-457b-849a-eacdcb37edfb","32dd4492-4ec4-44a9-ba53-32223bf385fe","5bb90f56-7cae-4662-9d59-dd2c6ff941ec","c4f861da-75ee-4afb-86a7-de234c0c2309","31e2d82e-5176-43a5-af28-33b873f27496","32f31576-0ab8-4fc8-966d-426970abede6","a261c7e0-1a4f-485f-a9e0-9998c45cd08c","5b4fb377-411b-497b-89d8-045603632f08","8a12f88f-9216-4e92-ad41-b4f55c4cfc2b","f20dcaf5-5133-4046-b129-174f49d0d16c","016adb2d-794e-41ae-9da7-b80a2fc146ca","379124bc-8db4-4b62-b453-cd8e8ab3523e","370bca5c-6e3e-4daa-96ac-070ffe8af179","665d4c2f-0f17-43be-9a49-a65ace4ef4e7","5faf9b14-f2c3-4d3c-a43b-ab9f6e4747b1","4f3d7b3b-62e5-4e88-bd79-01efd7ef0bd0","8294f143-2727-4de6-9065-12358f87a7bd","3e4d313f-8a15-48b2-beb9-1f05f93b4d4f","176a963c-849e-4cd7-8bf3-84e4531f0cc0","0486d1dc-b6bd-4c9b-a861-660e1f87f621","93c3fd09-315d-447d-bbdf-052a78511f39","c4ed94fc-d8cc-4633-b563-4a94582ab58c","d426af1d-4055-4ada-b359-648b9ada81e7","6e14fd11-a06e-40b3-97d5-3fc0515288b0","aa4d2d42-28a6-4a2f-a67d-2805f4307fd9","4d7c6a66-1905-43c1-826b-0b8201461d47","c0f7a642-9e34-4b1f-a2ee-1c4c5e93fa23","b517f321-5533-41e5-8ed0-64eb6aa4b7bd","e5a30298-52e9-431d-89d8-6f5431c236c9","0cb5746c-b879-4ac4-86fb-49f366c81542","481f6d4a-9045-4cd0-b5e7-1eec6822bed3","1aabb1d3-f1af-4e81-aab9-fe4d16630cc3","ad6cebdb-c5ab-4db5-8776-95d6381b90de","6de2edc2-019f-4a6c-9051-a15aa11338a0","24766e7e-a419-4992-aaaf-786a37a0e111","2a753c24-a5cb-496a-a34b-1037e366e690","3aca0447-12a5-4453-b4b2-64e45f16598a","8b6f4e3f-7669-44a8-a020-fb88c5c9d592","fee4c3e1-8970-436a-a535-e6085f283973","d1484846-cba5-4b2b-9fef-0a2d0f4b15b7","96248543-4145-4b5c-b4eb-e6398695a24e","f8a45478-0da3-4c34-8306-b922b68fab5b","c78b028f-ae08-4c3b-830b-c71bc03ead25","e361913f-b0af-443f-8122-1affa88478be","d4051326-c55b-4611-944a-3457ff0a8ed7","bf0da9ac-63d5-40f1-a5c5-63f1468ec13c","9b1b232b-c036-4131-bd6c-c2e5e690c4ea","0d6cce80-546b-4b09-8fe5-f84f195d9d2e","7b26a25c-e869-4832-b5bb-b19685f5c3a5","4d226b15-9e21-42ba-8af8-57d6fbae5a3d","1444ae1f-dbb1-4136-8898-98431ee3a1bb","bd4f9e5a-f9d4-4d1c-aab8-43f951739ab0","c93afaf2-080c-4646-a4dc-5e638f9a0cdb","202a7ddd-bea5-46b3-b32c-a0300c7ac1ee","61404250-a6af-41e2-8b9a-4d6fcfefdb95","ce02e42f-e341-4b94-8bbc-095122507bd2","3c3edab4-4125-43ac-89c0-ca95cda06d34","df5768a8-448d-4070-afa1-5307838ed965","4e54395c-5e8b-4bbd-a309-b6057a4737d3","496d1369-941d-49a5-a9ce-68eadd7601de","547b5b2d-4f7b-4b39-8fdc-524a31659238","1f0b58d6-10cb-4e60-bbc9-10912ca6301c","718dae5a-8c58-47a7-9089-5dc02cedbc3c","3ca990dc-b70b-49b5-abfa-eb1dc8e5f271","84060107-e962-412b-afa2-f8134e593320","b83cb482-710d-4e48-9b22-43b8e8ea3a02","30f27496-1faf-4a00-87cf-b53926d35bfd","80e6d17b-2cf5-456b-944b-5f645f0e12de","3cc70e82-29db-45a0-8136-7ba4cf90bf8e","9431ba4b-3e50-4932-a606-4989276ea593","89da7597-3e7d-4368-807e-b7868d9c89d6","a70f5c73-72c4-4fd7-a213-460f6593b225","ffc003e5-816d-4c7b-a7ca-0ff2d1df1aa5","a211146b-a2d9-4c19-8187-e49a14cc54e6","dd803af3-a0b5-4f69-be13-2210fe5eba6e","5c15c9a2-199c-444e-ab13-f7429755b874","cf8b9c91-7b74-4ef0-a5df-facf3623e7cc","6a3e9e6a-e26b-4723-a7c9-e8dedbed2227","211ddeb6-d48d-4840-b384-84b042e31368","d2effba2-f73a-4d71-affc-c5320037aabf","5073e4ce-13f1-4c12-93fe-833ffec3ab8b","2b77210f-4322-450d-a345-275493203750","9a135767-4e4e-45b3-a8dd-7f9150dcb2a9","aafdf878-b383-47f0-bc7f-29695a15cb59","d0176963-2376-4dd8-acfc-95af778195b9","642854aa-71ce-4d67-9a08-f32c483c2626","61ef6871-364e-40eb-9735-6fcae8da7008","e23325bf-68b3-4a27-ab3f-b015b751e752","8faaca24-8a22-47c4-bb9c-eef161471465","5a87719c-4e07-4f74-ba99-d48e1fc4cbfb","c8d5e44b-f311-43aa-b39d-a11a6c9216b1","d0d199ea-82b9-4272-bcb4-76774d90e12d","2d2bebea-3f18-48e7-b676-de813bc4782b","091011cc-9336-4ed1-b1e5-1fdc49021e19","bc291995-b444-4dad-af8a-bc772b20efe1","d9ee098d-c793-448b-b031-2fc6234b97b3","11794df6-834f-4c22-9580-c8c523d24d09","0c6623a5-3fda-4245-9789-7a0ce9d09dfa","37d449f8-1f5d-49ef-8647-ad8e4f9d49d9","e1495485-48ae-46d6-b8fa-a7fe6eb813cb","81343baa-2aa4-4435-afd3-f3501f51b708","120f9cb1-28c9-4ed2-9752-e13d09cab2fd","2423cca6-564a-496d-93da-00ac5ac9bab5","fec0124d-685c-4285-9dfc-b6c230a9161a","0689088d-8eaa-4a1c-b842-0acd6a865066","e98d9fe0-4412-4ead-9799-e4a384ad0c77","80c3e093-99f6-4a31-b7a1-2830772bd8ff","79ce6a91-7bda-4175-b2f9-7f2403fd8dcc","575a2d26-a216-4290-88fc-9121c03097a9","0995b46f-00b0-41c5-8e18-7eac85af8119"],ys=()=>{let e=Uo.map(a=>a.id),t=new Map;return gs.forEach(a=>{t.set(a,a)}),e.forEach(a=>{t.set(a,a)}),t},Mo=ys;var pt=q(Ae());var lt=e=>kt({},...e,(t,a)=>{if(_(a))return a});var vt=()=>({userSettings:{preferredLanguage:"en",chatGPTStableModeDuration:30,colorSchema:"auto",language:Bt,pdf:{enabled:!0},quickAccess:{enabled:!0},inputAssistantButton:{gmail:!0,outlook:!0,linkedIn:!0,twitter:!0,facebook:!0,youtube:!0,instagram:!0,reddit:!0,googleMyBusiness:!0,slack:!0,discord:!0,whatsApp:!0,hubspot:!0,telegram:!0,googleChat:!0,microsoftTeams:!0}},buttonSettings:{inputAssistantComposeReplyButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"},inputAssistantComposeNewButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"},inputAssistantRefineDraftButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"},textSelectPopupButton:{visibility:{isWhitelistMode:!1,whitelist:[],blacklist:[]},contextMenu:[],contextMenuPosition:"start"}}}),ut=async()=>{let e=vt(),t=await pt.default.storage.local.get(ee);try{if(t[ee]){let a=JSON.parse(t[ee]),o=J(e),r=J(a),n=new Map,i=J(o.buttonSettings);i&&Object.keys(i).forEach(c=>{i[c].contextMenu?.length>0&&(n.set(c,J(i[c].contextMenu)),i[c].contextMenu=[])});let s=J(r.buttonSettings);s&&(a.contextMenus?.length>0&&(s.textSelectPopupButton.contextMenu=a.contextMenus,a.contextMenus=[]),a.gmailToolBarContextMenu?.length>0&&(s.gmailButton.contextMenu=a.gmailToolBarContextMenu,a.gmailToolBarContextMenu=[]),Object.keys(s).forEach(c=>{s[c].contextMenu?.length>0&&(n.set(c,J(s[c].contextMenu)),s[c].contextMenu=[])}));let l={textSelectPopupButton:{},inputAssistantComposeReplyButton:{},inputAssistantComposeNewButton:{},inputAssistantRefineDraftButton:{}};Object.keys(l).forEach(c=>{n.has(c)&&(l[c].contextMenu=n.get(c))});let p=lt([o,r,{buttonSettings:i},{buttonSettings:s},{buttonSettings:l}]);return Object.prototype.hasOwnProperty.call(p.userSettings,"selectionButtonVisible")&&(p.userSettings.selectionButtonVisible?p.buttonSettings.textSelectPopupButton.visibility.isWhitelistMode=!1:(p.buttonSettings.textSelectPopupButton.visibility.isWhitelistMode=!0,p.buttonSettings.textSelectPopupButton.visibility.whitelist=[]),delete p.userSettings.selectionButtonVisible),p}else return e}catch{return e}},Rt=async e=>{try{let t=await ut();if(e instanceof Function){let a=e(t);await pt.default.storage.local.set({[ee]:JSON.stringify(a)})}else await pt.default.storage.local.set({[ee]:JSON.stringify({...t,...e})});return!0}catch{return!1}},Do=async e=>(await ut()).buttonSettings?.[e].contextMenu||[];var bs=async()=>{let e=["inputAssistantComposeReplyButton","textSelectPopupButton"],t=async a=>{let o=await Do(a),r=Mo(),n=0,i=o.map(l=>!l.data.editable||r.get(l.id)?null:l).filter(Boolean);i=Po(i,"id"),a==="inputAssistantComposeReplyButton"&&(i=[]);let s={};i.forEach(l=>{s[l.id]=l.id}),i=i.map(l=>(s[l.parent]||(l.parent="root"),l)),await Rt(l=>{let p=J(l);return vo(p,`buttonSettings.${a}.contextMenu`,i),p})};for(let a of e)await t(a)},Ts=bs;var ve="CHROME_EXTENSION_SETTINGS_SNAPSHOT_LIST",Jm=async()=>{let e=Bo(_e.default.runtime.getManifest().version),t=await xs(),a=Nt(t,"timestamp","desc").filter(n=>!n.isDefault&&n.version!==e);a=[{isDefault:!1,settings:await ut(),timestamp:Date.now(),version:e},...a],a=a.slice(0,3),await _e.default.storage.local.set({[ve]:JSON.stringify(a)})},xs=async()=>{let t={isDefault:!0,settings:vt(),timestamp:Date.now(),version:_e.default.runtime.getManifest().version};try{let a=await _e.default.storage.local.get(ve);return a[ve]?JSON.parse(a[ve]).concat(t):[t]}catch{return[t]}},Lo=async()=>{await _e.default.storage.local.remove(ve)};var Re=q(Ae());var ft=q(De());var dt=async()=>{try{let e=await Re.default.storage.local.get(ie);return e[ie]?JSON.parse(e[ie]||"{}"):{}}catch{return{}}},rh=async(e,t)=>{try{let a=await dt();a[e]=t,await Re.default.storage.local.set({[ie]:JSON.stringify(a)})}catch{}},nh=async e=>{try{let t=await dt();delete t[e],await Re.default.storage.local.set({[ie]:JSON.stringify(t)})}catch{}},Wo=async()=>{try{await Re.default.storage.local.remove(ie)}catch{}},ih=()=>{let{userSettings:e}=Dt(Kt),[t,a]=(0,ft.useState)({}),o=(0,ft.useMemo)(()=>e?.preferredLanguage?t[e.preferredLanguage]||{}:{},[e?.preferredLanguage,t]);return ia(()=>{dt().then(a)}),sa(()=>{dt().then(a)}),{contextMenuSearchTextWithCurrentLanguage:o,setContextMenuSearchTextStore:a}};var Es=["[Gmail] ","[Outlook] ","[Twitter] ","[LinkedIn] ","[Facebook] ","[YouTube] ","[YouTube Studio] "],Ko=new RegExp(Es.join("|").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\s/g,"\\s"));var Pt=class{constructor(t,a,o){this.databaseName=t,this.databaseVersion=a,this.objectStoreName=o}openDatabase(){return new Promise((t,a)=>{let o=indexedDB.open(this.databaseName,this.databaseVersion);o.onerror=r=>{a(r.target?.error||"")},o.onsuccess=r=>{let n=r.target?.result;t(n)},o.onupgradeneeded=r=>{let n=r.target?.result;n.objectStoreNames.contains(this.objectStoreName)||n.createObjectStore(this.objectStoreName,{keyPath:"id"}).createIndex("title","title",{unique:!1})}})}addOrUpdateConversation(t){return new Promise(async(a,o)=>{try{let n=(await this.openDatabase()).transaction([this.objectStoreName],"readwrite");n.objectStore(this.objectStoreName).put(t),n.oncomplete=()=>{a()},n.onerror=s=>{o(s.target?.error||"")}}catch(r){o(r)}})}deleteConversation(t){return new Promise(async(a,o)=>{try{let n=(await this.openDatabase()).transaction([this.objectStoreName],"readwrite");n.objectStore(this.objectStoreName).delete(t),n.oncomplete=()=>{a()},n.onerror=s=>{o(s.target?.error||"")}}catch(r){o(r)}})}getConversationById(t){return new Promise(async(a,o)=>{try{let s=(await this.openDatabase()).transaction([this.objectStoreName],"readonly").objectStore(this.objectStoreName).get(t);s.onsuccess=l=>{let p=l.target?.result;a(p)},s.onerror=l=>{o(l.target?.error||"")}}catch(r){o(r)}})}getAllConversations(){return new Promise(async(t,a)=>{try{let i=(await this.openDatabase()).transaction([this.objectStoreName],"readonly").objectStore(this.objectStoreName).getAll();i.onsuccess=s=>{let l=s.target?.result||[];t(l)},i.onerror=s=>{a(s.target?.error||"")}}catch(o){a(o)}})}async removeUnnecessaryConversations(){let t=await this.getAllConversations(),a=[],o=t.filter(r=>{let i=new Date(r.updated_at).getTime();return new Date().getTime()-i<=2592e5?!0:(a.push(r),!1)});o=o.sort((r,n)=>{let i=new Date(r.updated_at).getTime(),s=new Date(n.updated_at).getTime();return i-s});for(let r=0;r<o.length-30;r++)a.push(o[r]);await Promise.all(a.map(r=>this.deleteConversation(r.id)))}async clearAllConversations(){let t=await this.getAllConversations();await Promise.all(t.map(a=>this.deleteConversation(a.id)))}},Pe=class{static{this.conversationDB=new Pt("conversationDB",1,"conversations")}static async createConversation(t){let a={id:Et(),title:"Chat",type:"Chat",created_at:new Date().toISOString(),updated_at:new Date().toISOString(),messages:[],meta:{}},o=lt([a,t]);return await this.conversationDB.addOrUpdateConversation(o),this.conversationDB.removeUnnecessaryConversations().then().catch(),o}static async getClientConversation(t){let a=await this.conversationDB.getConversationById(t);return a&&(a.messages=a.messages.map(o=>{if(o.type==="user"){let r=o;return r.extra.meta?.contextMenu&&(r.text=(r.extra.meta.contextMenu.text||r.text).replace(Ko,""),r.extra.meta.contextMenu.data=void 0),r}return o})),a}static async pushMessages(t,a){let o=await this.conversationDB.getConversationById(t);return o?(o.messages=o.messages.concat(a),await this.conversationDB.addOrUpdateConversation(o),!0):!1}static async deleteMessages(t,a){let o=await this.conversationDB.getConversationById(t);if(!o)return!1;let r=a;return a>o.messages.length&&(r=o.messages.length),o.messages=o.messages.slice(0,o.messages.length-r),await this.conversationDB.addOrUpdateConversation(o),!0}static async clearAllConversations(){await this.conversationDB.clearAllConversations()}};var Ue=q(Ae());var Go={"mail.google.com":{enable:!0,rootSelectors:[".btC"],rootParentDeep:0,rootWrapperTagName:"td",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"GMAIL_DRAFT_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"GMAIL_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"GMAIL_CONTEXT_MENU"},appendPosition:1,CTAButtonStyle:{borderRadius:"18px 0 0 18px",iconSize:18,padding:"9px 12px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0"},InputAssistantBoxSx:{borderRadius:"18px",margin:"0 0 0 12px"}},"outlook.office.com":{enable:!0,rootSelectors:['div[data-testid="ComposeSendButton"]'],rootParentDeep:1,rootStyle:"overflow: unset;",rootParentStyle:"overflow: unset;",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"GMAIL_DRAFT_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"GMAIL_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"GMAIL_CONTEXT_MENU"},appendPosition:1,CTAButtonStyle:{iconSize:16,padding:"8px 20px"},DropdownButtonStyle:{padding:"6px"},InputAssistantBoxSx:{margin:"0 0 0 12px"}},"outlook.live.com":{enable:!0,rootSelectors:['div[data-testid="ComposeSendButton"]'],rootParentDeep:1,rootStyle:"overflow: unset;",rootParentStyle:"overflow: unset;",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"GMAIL_DRAFT_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"GMAIL_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"GMAIL_CONTEXT_MENU"},appendPosition:1,CTAButtonStyle:{padding:"6px 20px"},DropdownButtonStyle:{padding:"6px"},InputAssistantBoxSx:{margin:"0 0 0 12px"}},"outlook.office365.com":{enable:!0,rootSelectors:['div[data-testid="ComposeSendButton"]'],rootParentDeep:1,rootStyle:"overflow: unset;",rootParentStyle:"overflow: unset;",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"OUTLOOK_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"OUTLOOK_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"OUTLOOK_REFINE_DRAFT_BUTTON"},appendPosition:1,CTAButtonStyle:{padding:"6px 20px"},DropdownButtonStyle:{padding:"6px"},InputAssistantBoxSx:{margin:"0 0 0 12px"}},"twitter.com":{enable:!0,rootSelectors:['div[data-testid="toolBar"] > div:nth-child(2) div[role="button"][data-testid]'],rootSelectorStyle:"order:2;",rootParentDeep:1,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"TWITTER_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"TWITTER_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"TWITTER_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{iconSize:16,borderRadius:"18px 0 0 18px",padding:"10px 9px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0",padding:"8px 3px"},InputAssistantBoxSx:{borderRadius:"18px",margin:"0 0 0 12px"},rootWrapperStyle:"order :1;",appendPosition:0},"linkedin.com":{enable:!0,rootSelectors:[".comments-comment-box-comment__text-editor + div > div",".share-box_actions .share-actions__primary-action"],rootStyle:"display:flex;align-items:center;",appendPosition:0,rootParentDeep:1,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"LINKEDIN_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"LINKEDIN_COMPOSE_REPLY_BUTTON",CTAButtonStyle:{padding:"2px 6px"},DropdownButtonStyle:{padding:"0px"}},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"LINKEDIN_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{iconSize:16,borderRadius:"16px 0 0 16px",padding:"8px 10px",transparentHeight:6},DropdownButtonStyle:{borderRadius:"0 16px 16px 0",padding:"6px 3px",transparentHeight:6},InputAssistantBoxSx:{borderRadius:"16px",marginRight:"8px"}},"facebook.com":{enable:!0,rootSelectors:["div > div > div > #focused-state-composer-submit > span > div > i",'form[method="POST"] div > span > div[aria-label="Emoji"]'],rootParentStyle:"padding: 0",rootStyle:"display: flex;align-items: center;flex-direction: row;padding: 0",appendPosition:0,rootParentDeep:5,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"FACEBOOK_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"FACEBOOK_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"FACEBOOK_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{padding:"2px 6px",iconSize:16,borderRadius:"16px 0 0 16px",transparentHeight:6},DropdownButtonStyle:{borderRadius:"0 16px 16px 0",padding:"0px",transparentHeight:6},InputAssistantBoxSx:{borderRadius:"16px",marginRight:"8px"}},"youtube.com":{enable:!0,rootSelectors:["ytd-commentbox ytd-button-renderer button.yt-spec-button-shape-next.yt-spec-button-shape-next--filled"],rootStyle:"",appendPosition:2,rootParentDeep:3,rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"YOUTUBE_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{padding:"10px 9px",iconSize:16,borderRadius:"18px 0 0 18px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0",padding:"8px 3px"},InputAssistantBoxSx:{borderRadius:"18px",marginLeft:"8px"}},"studio.youtube.com":{enable:!0,rootSelectors:["ytcp-commentbox #submit-button"],appendPosition:2,rootParentDeep:2,rootStyle:"display: flex;align-items: center;margin-top: 8px",rootWrapperTagName:"div",composeNewButton:{tooltip:"client:input_assistant_button__compose_new__tooltip",buttonKey:"inputAssistantComposeNewButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_NEW_BUTTON"},composeReplyButton:{tooltip:"client:input_assistant_button__compose_reply__tooltip",buttonKey:"inputAssistantComposeReplyButton",permissionWrapperCardSceneType:"YOUTUBE_COMPOSE_REPLY_BUTTON"},refineDraftButton:{tooltip:"client:input_assistant_button__refine_draft__tooltip",buttonKey:"inputAssistantRefineDraftButton",permissionWrapperCardSceneType:"YOUTUBE_REFINE_DRAFT_BUTTON"},CTAButtonStyle:{padding:"10px 9px",iconSize:16,borderRadius:"18px 0 0 18px"},DropdownButtonStyle:{borderRadius:"0 18px 18px 0",padding:"8px 3px"},InputAssistantBoxSx:{borderRadius:"18px",marginLeft:"8px"}}},Yo=Object.keys(Go),ch=Go;var ct=()=>{let e={ON_BOARDING_RECORD_FIRST_MESSAGE:!1,ON_BOARDING_RECORD_BROWSER_VERSION:!1,ON_BOARDING_RECORD_SUMMARY_FREE_TRIAL_TIMES:2};return Object.keys(Wt).forEach(t=>{e[`ON_BOARDING_RECORD_AI_PROVIDER_HAS_AUTH_${t}`]=!1}),Yo.forEach(t=>{e[`ON_BOARDING_RECORD_INPUT_ASSISTANT_BUTTON_${t}_TIMES`]=5}),e},_s=async(e,t)=>{let a=await qo();a[e]=t,await Ue.default.storage.local.set({[ne]:JSON.stringify(a)})},qo=async()=>{let e=await Ue.default.storage.local.get(ne);return e[ne]?{...ct(),...JSON.parse(e[ne])}:(await Ue.default.storage.local.set({[ne]:JSON.stringify(ct())}),ct())},ws=async()=>{await Ue.default.storage.local.set({[ne]:JSON.stringify(ct())})};jo.default.extend(Ho.default);var Sh=async(e,t)=>{let a=await k.default.tabs.query({}),o=r=>new Promise(n=>setTimeout(n,r));await Promise.race([...a.map(async r=>{if(r.id)try{await k.default.tabs.sendMessage(r.id,{id:ue,event:e,data:t})}catch{}}),o(1e3)])},Ah=async(e,t,a)=>{let o=await Ss(e);if(o&&o.id)try{return await k.default.tabs.sendMessage(o.id,{id:ue,event:t,data:a})}catch{return}},Ih=e=>{let t=(a,o)=>{let{data:{_RUNTIME_:r,...n},event:i,id:s}=a;if(s===ue)return new Promise(l=>{e(r,i,n,o).then(p=>{p&&Object.prototype.hasOwnProperty.call(p,"success")&&l(p)})})};return k.default.runtime.onMessage.addListener(t),()=>{k.default.runtime.onMessage.removeListener(t)}},Ch=e=>{let t=(a,o)=>{let{data:r,event:n,id:i}=a;if(i===ue)return new Promise(s=>{e(n,r,o).then(l=>{l&&Object.prototype.hasOwnProperty.call(l,"success")&&s(l)})})};return k.default.runtime.onMessage.addListener(t),()=>{k.default.runtime.onMessage.removeListener(t)}},Oh=e=>{(0,$o.useEffect)(()=>{let t=(a,o)=>{let{data:r,event:n,id:i}=a;if(i===ue)return new Promise(s=>{e(n,r,o).then(l=>{l&&Object.prototype.hasOwnProperty.call(l,"success")&&s(l)})})};return k.default.runtime.onMessage.addListener(t),()=>{k.default.runtime.onMessage.removeListener(t)}},[])},kh=async()=>{let t=await new bt().postMessage({event:"Client_getChromeExtensionCommands",data:{}});return t.success?t.data:[]},Nh=async(e="",t=!0)=>{let a=k.default.runtime.id,o=await k.default.tabs.query({url:`chrome-extension://${a}/pages/settings/index.html`});return await Promise.all(o.map(async n=>{n.id&&await k.default.tabs.remove(n.id)})),(await k.default.tabs.create({url:`chrome-extension://${a}/pages/settings/index.html${e}`,active:t})).id},vh=async()=>{await k.default.storage.local.remove(Lt),await k.default.storage.local.remove(ee),await Pe.conversationDB.clearAllConversations(),await Lo(),await Wo()},Rh=async(e,t=15*1e3)=>{let a=new bt({runtime:"shortcut"}),o=()=>new Promise(n=>{setTimeout(()=>{n({success:!1,message:"timeout",data:void 0})},t)}),r=a.postMessage({event:"ShortCuts_getContentOfURL",data:{URL:e}});return Promise.race([r,o()]).then(n=>n)},Ph=async()=>{try{let e=await k.default.tabs.query({active:!0,currentWindow:!0});await k.default.runtime.reload(),e.forEach(t=>{t.id&&k.default.tabs.reload(t.id)})}catch{}},Bo=e=>{let[t,a,o]=e.split(".").map(Number);if(o>0)return`${t}.${a}.${o-1}`;if(a>0)return`${t}.${a-1}.99`;if(t>0)return`${t-1}.99.99`;throw new Error("Cannot get previous version for version 0.0.0")},Ss=async e=>{if(e)try{return await k.default.tabs.get(e)}catch{return null}else return null},Uh=async e=>{let t={origins:[e]};return await k.default.permissions.contains(t)?!0:k.default.permissions.request(t)};export{Et as a,Bf as b,oa as c,ra as d,va as e,Cp as f,co as g,bf as h,Af as i,vi as j,$f as k,Vf as l,fc as m,Yc as n,$c as o,vo as p,is as q,tm as r,nm as s,Tm as t,Po as u,Uo as v,lt as w,ut as x,Rt as y,Do as z,Ts as A,Jm as B,xs as C,ia as D,sa as E,rh as F,nh as G,ih as H,Pe as I,ch as J,_s as K,qo as L,ws as M,Sh as N,Ah as O,Ih as P,Ch as Q,Oh as R,kh as S,Nh as T,vh as U,Rh as V,Ph as W,Ss as X,Uh as Y};
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
