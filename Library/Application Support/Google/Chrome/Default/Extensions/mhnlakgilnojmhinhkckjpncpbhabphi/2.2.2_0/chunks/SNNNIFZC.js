import{a as qe}from"./QPPETRF6.js";import{a as Ve}from"./2XMGLZMD.js";import{a as je}from"./64D36THL.js";import{f as te}from"./PQ35KENF.js";var u=te(je()),Le=te(Ve()),N=te(qe());var $e={data:""},ze=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||$e;var Fe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Be=/\/\*[^]*?\*\/|  +/g,pe=/\n+/g,_=(r,n)=>{let a="",o="",e="";for(let t in r){let i=r[t];t[0]=="@"?t[1]=="i"?a=t+" "+i+";":o+=t[1]=="f"?_(i,t):t+"{"+_(i,t[1]=="k"?"":n)+"}":typeof i=="object"?o+=_(i,n?n.replace(/([^,])+/g,s=>t.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):t):i!=null&&(t=/^--/.test(t)?t:t.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=_.p?_.p(t,i):t+":"+i+";")}return a+(n&&e?n+"{"+e+"}":e)+o},L={},ve=r=>{if(typeof r=="object"){let n="";for(let a in r)n+=a+ve(r[a]);return n}return r},Xe=(r,n,a,o,e)=>{let t=ve(r),i=L[t]||(L[t]=(l=>{let d=0,c=11;for(;d<l.length;)c=101*c+l.charCodeAt(d++)>>>0;return"go"+c})(t));if(!L[i]){let l=t!==r?r:(d=>{let c,p,v=[{}];for(;c=Fe.exec(d.replace(Be,""));)c[4]?v.shift():c[3]?(p=c[3].replace(pe," ").trim(),v.unshift(v[0][p]=v[0][p]||{})):v[0][c[1]]=c[2].replace(pe," ").trim();return v[0]})(r);L[i]=_(e?{["@keyframes "+i]:l}:l,a?"":"."+i)}let s=a&&L.g?L.g:null;return a&&(L.g=L[i]),((l,d,c,p)=>{p?d.data=d.data.replace(p,l):d.data.indexOf(l)===-1&&(d.data=c?l+d.data:d.data+l)})(L[i],n,o,s),i},Ke=(r,n,a)=>r.reduce((o,e,t)=>{let i=n[t];if(i&&i.call){let s=i(a),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=l?"."+l:s&&typeof s=="object"?s.props?"":_(s,""):s===!1?"":s}return o+e+(i??"")},"");function B(r){let n=this||{},a=r.call?r(n.p):r;return Xe(a.unshift?a.raw?Ke(a,[].slice.call(arguments,1),n.p):a.reduce((o,e)=>Object.assign(o,e&&e.call?e(n.p):e),{}):a,ze(n.target),n.g,n.o,n.k)}var xn=B.bind({g:1}),bn=B.bind({k:1});function he(r,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function Oe(r,n,a){return n&&he(r.prototype,n),a&&he(r,a),r}function m(){return m=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},m.apply(this,arguments)}function Ne(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n}function z(r,n){if(r==null)return{};var a={},o=Object.keys(r),e,t;for(t=0;t<o.length;t++)e=o[t],!(n.indexOf(e)>=0)&&(a[e]=r[e]);return a}function me(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var ge=function(){return""},_e=u.default.createContext({enqueueSnackbar:ge,closeSnackbar:ge}),I={downXs:"@media (max-width:599.95px)",upSm:"@media (min-width:600px)"},Ee=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},de=function(n){return""+Ee(n.vertical)+Ee(n.horizontal)},X=function(n){return!!n||n===0},K="unmounted",P="exited",R="entering",j="entered",xe="exiting",fe=function(r){Ne(n,r);function n(o){var e;e=r.call(this,o)||this;var t=o.appear,i;return e.appearStatus=null,o.in?t?(i=P,e.appearStatus=R):i=j:o.unmountOnExit||o.mountOnEnter?i=K:i=P,e.state={status:i},e.nextCallback=null,e}n.getDerivedStateFromProps=function(e,t){var i=e.in;return i&&t.status===K?{status:P}:null};var a=n.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var i=this.state.status;this.props.in?i!==R&&i!==j&&(t=R):(i===R||i===j)&&(t=xe)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e=this.props.timeout,t=e,i=e;return e!=null&&typeof e!="number"&&typeof e!="string"&&(i=e.exit,t=e.enter),{exit:i,enter:t}},a.updateStatus=function(e,t){e===void 0&&(e=!1),t!==null?(this.cancelNextCallback(),t===R?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===P&&this.setState({status:K})},a.performEnter=function(e){var t=this,i=this.props.enter,s=e,l=this.getTimeouts();if(!e&&!i){this.safeSetState({status:j},function(){t.props.onEntered&&t.props.onEntered(t.node,s)});return}this.props.onEnter&&this.props.onEnter(this.node,s),this.safeSetState({status:R},function(){t.props.onEntering&&t.props.onEntering(t.node,s),t.onTransitionEnd(l.enter,function(){t.safeSetState({status:j},function(){t.props.onEntered&&t.props.onEntered(t.node,s)})})})},a.performExit=function(){var e=this,t=this.props.exit,i=this.getTimeouts();if(!t){this.safeSetState({status:P},function(){e.props.onExited&&e.props.onExited(e.node)});return}this.props.onExit&&this.props.onExit(this.node),this.safeSetState({status:xe},function(){e.props.onExiting&&e.props.onExiting(e.node),e.onTransitionEnd(i.exit,function(){e.safeSetState({status:P},function(){e.props.onExited&&e.props.onExited(e.node)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&this.nextCallback.cancel&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,i=!0;return this.nextCallback=function(){i&&(i=!1,t.nextCallback=null,e())},this.nextCallback.cancel=function(){i=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var i=e==null&&!this.props.addEndListener;if(!this.node||i){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(this.node,this.nextCallback),e!=null&&setTimeout(this.nextCallback,e)},a.render=function(){var e=this.state.status;if(e===K)return null;var t=this.props,i=t.children,s=z(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return i(e,s)},Oe(n,[{key:"node",get:function(){var e,t=(e=this.props.nodeRef)===null||e===void 0?void 0:e.current;if(!t)throw new Error("notistack - Custom snackbar is not refForwarding");return t}}]),n}(u.default.Component);function W(){}fe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:W,onEntering:W,onEntered:W,onExit:W,onExiting:W,onExited:W};function be(r,n){typeof r=="function"?r(n):r&&(r.current=n)}function le(r,n){return(0,u.useMemo)(function(){return r==null&&n==null?null:function(a){be(r,a),be(n,a)}},[r,n])}function Y(r){var n=r.timeout,a=r.style,o=a===void 0?{}:a,e=r.mode;return{duration:typeof n=="object"?n[e]||0:n,easing:o.transitionTimingFunction,delay:o.transitionDelay}}var ce={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Ie=function(n){n.scrollTop=n.scrollTop},ke=function(n){return Math.round(n)+"ms"};function H(r,n){r===void 0&&(r=["all"]);var a=n||{},o=a.duration,e=o===void 0?300:o,t=a.easing,i=t===void 0?ce.easeInOut:t,s=a.delay,l=s===void 0?0:s,d=Array.isArray(r)?r:[r];return d.map(function(c){var p=typeof e=="string"?e:ke(e),v=typeof l=="string"?l:ke(l);return c+" "+p+" "+i+" "+v}).join(",")}function Ge(r){return r&&r.ownerDocument||document}function Me(r){var n=Ge(r);return n.defaultView||window}function Ue(r,n){n===void 0&&(n=166);var a;function o(){for(var e=this,t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];var l=function(){r.apply(e,i)};clearTimeout(a),a=setTimeout(l,n)}return o.clear=function(){clearTimeout(a)},o}function Ze(r,n){var a=n.getBoundingClientRect(),o=Me(n),e;if(n.fakeTransform)e=n.fakeTransform;else{var t=o.getComputedStyle(n);e=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("transform")}var i=0,s=0;if(e&&e!=="none"&&typeof e=="string"){var l=e.split("(")[1].split(")")[0].split(",");i=parseInt(l[4],10),s=parseInt(l[5],10)}switch(r){case"left":return"translateX("+(o.innerWidth+i-a.left)+"px)";case"right":return"translateX(-"+(a.left+a.width-i)+"px)";case"up":return"translateY("+(o.innerHeight+s-a.top)+"px)";default:return"translateY(-"+(a.top+a.height-s)+"px)"}}function G(r,n){if(n){var a=Ze(r,n);a&&(n.style.webkitTransform=a,n.style.transform=a)}}var Pe=(0,u.forwardRef)(function(r,n){var a=r.children,o=r.direction,e=o===void 0?"down":o,t=r.in,i=r.style,s=r.timeout,l=s===void 0?0:s,d=r.onEnter,c=r.onEntered,p=r.onExit,v=r.onExited,S=z(r,["children","direction","in","style","timeout","onEnter","onEntered","onExit","onExited"]),f=(0,u.useRef)(null),h=le(a.ref,f),E=le(h,n),b=function(g,T){G(e,g),Ie(g),d&&d(g,T)},k=function(g){var T=i?.transitionTimingFunction||ce.easeOut,D=Y({timeout:l,mode:"enter",style:m({},i,{transitionTimingFunction:T})});g.style.webkitTransition=H("-webkit-transform",D),g.style.transition=H("transform",D),g.style.webkitTransform="none",g.style.transform="none"},x=function(g){var T=i?.transitionTimingFunction||ce.sharp,D=Y({timeout:l,mode:"exit",style:m({},i,{transitionTimingFunction:T})});g.style.webkitTransition=H("-webkit-transform",D),g.style.transition=H("transform",D),G(e,g),p&&p(g)},w=function(g){g.style.webkitTransition="",g.style.transition="",v&&v(g)},C=(0,u.useCallback)(function(){f.current&&G(e,f.current)},[e]);return(0,u.useEffect)(function(){if(!(t||e==="down"||e==="right")){var y=Ue(function(){f.current&&G(e,f.current)}),g=Me(f.current);return g.addEventListener("resize",y),function(){y.clear(),g.removeEventListener("resize",y)}}},[e,t]),(0,u.useEffect)(function(){t||C()},[t,C]),(0,u.createElement)(fe,Object.assign({appear:!0,nodeRef:f,onEnter:b,onEntered:c,onEntering:k,onExit:x,onExited:w,in:t,timeout:l},S),function(y,g){return(0,u.cloneElement)(a,m({ref:E,style:m({visibility:y==="exited"&&!t?"hidden":void 0},i,{},a.props.style)},g))})});Pe.displayName="Slide";var J=function(n){return u.default.createElement("svg",Object.assign({viewBox:"0 0 24 24",focusable:"false",style:{fontSize:20,marginInlineEnd:8,userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0}},n))},Qe=function(){return u.default.createElement(J,null,u.default.createElement("path",{d:`M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`}))},Ye=function(){return u.default.createElement(J,null,u.default.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))},Je=function(){return u.default.createElement(J,null,u.default.createElement("path",{d:`M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`}))},en=function(){return u.default.createElement(J,null,u.default.createElement("path",{d:`M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`}))},nn={default:void 0,success:u.default.createElement(Qe,null),warning:u.default.createElement(Ye,null),error:u.default.createElement(Je,null),info:u.default.createElement(en,null)},M={maxSnack:3,persist:!1,hideIconVariant:!1,disableWindowBlurListener:!1,variant:"default",autoHideDuration:5e3,iconVariant:nn,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:Pe,transitionDuration:{enter:225,exit:195}},tn=function(n,a){var o=function(t){return typeof t=="number"||t===null};return o(n)?n:o(a)?a:M.autoHideDuration},rn=function(n,a){var o=function(t,i){return i.some(function(s){return typeof t===s})};return o(n,["string","number"])?n:o(n,["object"])?m({},M.transitionDuration,{},o(a,["object"])&&a,{},n):o(a,["string","number"])?a:o(a,["object"])?m({},M.transitionDuration,{},a):M.transitionDuration},an=function(n,a){return function(o,e){return e===void 0&&(e=!1),e?m({},M[o],{},a[o],{},n[o]):o==="autoHideDuration"?tn(n.autoHideDuration,a.autoHideDuration):o==="transitionDuration"?rn(n.transitionDuration,a.transitionDuration):n[o]||a[o]||M[o]}};function F(r){return Object.entries(r).reduce(function(n,a){var o,e=a[0],t=a[1];return m({},n,(o={},o[e]=B(t),o))},{})}var A={SnackbarContainer:"notistack-SnackbarContainer",Snackbar:"notistack-Snackbar",CollapseWrapper:"notistack-CollapseWrapper",MuiContent:"notistack-MuiContent",MuiContentVariant:function(n){return"notistack-MuiContent-"+n}},Se=F({root:{height:0},entered:{height:"auto"}}),re="0px",ie=175,Re=(0,u.forwardRef)(function(r,n){var a=r.children,o=r.in,e=r.onExited,t=(0,u.useRef)(null),i=(0,u.useRef)(null),s=le(n,i),l=function(){return t.current?t.current.clientHeight:0},d=function(h){h.style.height=re},c=function(h){var E=l(),b=Y({timeout:ie,mode:"enter"}),k=b.duration,x=b.easing;h.style.transitionDuration=typeof k=="string"?k:k+"ms",h.style.height=E+"px",h.style.transitionTimingFunction=x||""},p=function(h){h.style.height="auto"},v=function(h){h.style.height=l()+"px"},S=function(h){Ie(h);var E=Y({timeout:ie,mode:"exit"}),b=E.duration,k=E.easing;h.style.transitionDuration=typeof b=="string"?b:b+"ms",h.style.height=re,h.style.transitionTimingFunction=k||""};return(0,u.createElement)(fe,{in:o,unmountOnExit:!0,onEnter:d,onEntered:p,onEntering:c,onExit:v,onExited:e,onExiting:S,nodeRef:i,timeout:ie},function(f,h){return(0,u.createElement)("div",Object.assign({ref:s,className:(0,N.default)(Se.root,f==="entered"&&Se.entered),style:m({pointerEvents:"all",overflow:"hidden",minHeight:re,transition:H("height")},f==="entered"&&{overflow:"visible"},{},f==="exited"&&!o&&{visibility:"hidden"})},h),(0,u.createElement)("div",{ref:t,className:A.CollapseWrapper,style:{display:"flex",width:"100%"}},a))})});Re.displayName="Collapse";var Ce={right:"left",left:"right",bottom:"up",top:"down"},on=function(n){return n.horizontal!=="center"?Ce[n.horizontal]:Ce[n.vertical]},sn=function(n){return"anchorOrigin"+de(n)},un=function(n){n===void 0&&(n={});var a={containerRoot:!0,containerAnchorOriginTopCenter:!0,containerAnchorOriginBottomCenter:!0,containerAnchorOriginTopRight:!0,containerAnchorOriginBottomRight:!0,containerAnchorOriginTopLeft:!0,containerAnchorOriginBottomLeft:!0};return Object.keys(n).filter(function(o){return!a[o]}).reduce(function(o,e){var t;return m({},o,(t={},t[e]=n[e],t))},{})},ln=function(){};function $(r,n){return r.reduce(function(a,o){return o==null?a:function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];var l=[].concat(i);n&&l.indexOf(n)===-1&&l.push(n),a.apply(this,l),o.apply(this,l)}},ln)}var cn=typeof window<"u"?u.useLayoutEffect:u.useEffect;function ye(r){var n=(0,u.useRef)(r);return cn(function(){n.current=r}),(0,u.useCallback)(function(){return n.current.apply(void 0,arguments)},[])}var We=(0,u.forwardRef)(function(r,n){var a=r.children,o=r.className,e=r.autoHideDuration,t=r.disableWindowBlurListener,i=t===void 0?!1:t,s=r.onClose,l=r.id,d=r.open,c=r.SnackbarProps,p=c===void 0?{}:c,v=(0,u.useRef)(),S=ye(function(){s&&s.apply(void 0,arguments)}),f=ye(function(x){!s||x==null||(v.current&&clearTimeout(v.current),v.current=setTimeout(function(){S(null,"timeout",l)},x))});(0,u.useEffect)(function(){return d&&f(e),function(){v.current&&clearTimeout(v.current)}},[d,e,f]);var h=function(){v.current&&clearTimeout(v.current)},E=(0,u.useCallback)(function(){e!=null&&f(e*.5)},[e,f]),b=function(w){p.onMouseEnter&&p.onMouseEnter(w),h()},k=function(w){p.onMouseLeave&&p.onMouseLeave(w),E()};return(0,u.useEffect)(function(){if(!i&&d)return window.addEventListener("focus",E),window.addEventListener("blur",h),function(){window.removeEventListener("focus",E),window.removeEventListener("blur",h)}},[i,E,d]),(0,u.createElement)("div",Object.assign({ref:n},p,{className:(0,N.default)(A.Snackbar,o),onMouseEnter:b,onMouseLeave:k}),a)});We.displayName="Snackbar";var ae,dn=F({root:(ae={display:"flex",flexWrap:"wrap",flexGrow:1},ae[I.upSm]={flexGrow:"initial",minWidth:"288px"},ae)}),He=(0,u.forwardRef)(function(r,n){var a=r.className,o=z(r,["className"]);return u.default.createElement("div",Object.assign({ref:n,className:(0,N.default)(dn.root,a)},o))});He.displayName="SnackbarContent";var V=F({root:{backgroundColor:"#313131",fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em",color:"#fff",alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"},lessPadding:{paddingLeft:8*2.5+"px"},default:{backgroundColor:"#313131"},success:{backgroundColor:"#43a047"},error:{backgroundColor:"#d32f2f"},warning:{backgroundColor:"#ff9800"},info:{backgroundColor:"#2196f3"},message:{display:"flex",alignItems:"center",padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:"16px",marginRight:"-8px"}}),we="notistack-snackbar",Ae=(0,u.forwardRef)(function(r,n){var a=r.id,o=r.message,e=r.action,t=r.iconVariant,i=r.variant,s=r.hideIconVariant,l=r.style,d=r.className,c=t[i],p=e;return typeof p=="function"&&(p=p(a)),u.default.createElement(He,{ref:n,role:"alert","aria-describedby":we,style:l,className:(0,N.default)(A.MuiContent,A.MuiContentVariant(i),V.root,V[i],d,!s&&c&&V.lessPadding)},u.default.createElement("div",{id:we,className:V.message},s?null:c,o),p&&u.default.createElement("div",{className:V.action},p))});Ae.displayName="MaterialDesignContent";var fn=(0,u.memo)(Ae),pn=F({wrappedRoot:{width:"100%",position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0,minWidth:"288px"}}),vn=function(n){var a=(0,u.useRef)(),o=(0,u.useState)(!0),e=o[0],t=o[1],i=$([n.snack.onClose,n.onClose]),s=function(){n.snack.requestClose&&i(null,"instructed",n.snack.id)},l=(0,u.useCallback)(function(){a.current=setTimeout(function(){t(function(D){return!D})},125)},[]);(0,u.useEffect)(function(){return function(){a.current&&clearTimeout(a.current)}},[]);var d=n.snack,c=n.classes,p=n.Component,v=p===void 0?fn:p,S=(0,u.useMemo)(function(){return un(c)},[c]),f=d.open,h=d.SnackbarProps,E=d.TransitionComponent,b=d.TransitionProps,k=d.transitionDuration,x=d.disableWindowBlurListener,w=d.content,C=z(d,["open","SnackbarProps","TransitionComponent","TransitionProps","transitionDuration","disableWindowBlurListener","content","entered","requestClose","onEnter","onEntered","onExit","onExited"]),y=m({direction:on(C.anchorOrigin),timeout:k},b),g=w;typeof g=="function"&&(g=g(C.id,C.message));var T=["onEnter","onEntered","onExit","onExited"].reduce(function(D,ee){var ne;return m({},D,(ne={},ne[ee]=$([n.snack[ee],n[ee]],C.id),ne))},{});return u.default.createElement(Re,{in:e,onExited:T.onExited},u.default.createElement(We,{open:f,id:C.id,disableWindowBlurListener:x,autoHideDuration:C.autoHideDuration,className:(0,N.default)(pn.wrappedRoot,S.root,S[sn(C.anchorOrigin)]),SnackbarProps:h,onClose:i},u.default.createElement(E,Object.assign({},y,{appear:!0,in:f,onExit:T.onExit,onExited:l,onEnter:T.onEnter,onEntered:$([T.onEntered,s],C.id)}),g||u.default.createElement(v,Object.assign({},C)))))},q,oe,U,Z,se,O={view:{default:20,dense:4},snackbar:{default:6,dense:2}},Te="."+A.CollapseWrapper,ue=16,Q=F({root:(q={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:1400,height:"auto",width:"auto",transition:H(["top","right","bottom","left","max-width"],{duration:300,easing:"ease"}),pointerEvents:"none"},q[Te]={padding:O.snackbar.default+"px 0px",transition:"padding 300ms ease 0ms"},q.maxWidth="calc(100% - "+O.view.default*2+"px)",q[I.downXs]={width:"100%",maxWidth:"calc(100% - "+ue*2+"px)"},q),rootDense:(oe={},oe[Te]={padding:O.snackbar.dense+"px 0px"},oe),top:{top:O.view.default-O.snackbar.default+"px",flexDirection:"column"},bottom:{bottom:O.view.default-O.snackbar.default+"px",flexDirection:"column-reverse"},left:(U={left:O.view.default+"px"},U[I.upSm]={alignItems:"flex-start"},U[I.downXs]={left:ue+"px"},U),right:(Z={right:O.view.default+"px"},Z[I.upSm]={alignItems:"flex-end"},Z[I.downXs]={right:ue+"px"},Z),center:(se={left:"50%",transform:"translateX(-50%)"},se[I.upSm]={alignItems:"center"},se)}),hn=function(n){var a=n.classes,o=a===void 0?{}:a,e=n.anchorOrigin,t=n.dense,i=n.children,s=(0,N.default)(A.SnackbarContainer,Q[e.vertical],Q[e.horizontal],Q.root,o.containerRoot,o["containerAnchorOrigin"+de(e)],t&&Q.rootDense);return u.default.createElement("div",{className:s},i)},mn=(0,u.memo)(hn);var De=function(n){var a=typeof n=="string"||(0,u.isValidElement)(n);return!a},gn,En,Cn=function(r){Ne(n,r);function n(o){var e;return e=r.call(this,o)||this,e.enqueueSnackbar=function(t,i){if(i===void 0&&(i={}),t==null)throw new Error("enqueueSnackbar called with invalid argument");var s=De(t)?t:i,l=De(t)?t.message:t,d=s.key,c=s.preventDuplicate,p=z(s,["key","preventDuplicate"]),v=X(d),S=v?d:new Date().getTime()+Math.random(),f=an(p,e.props),h=m({id:S},p,{message:l,open:!0,entered:!1,requestClose:!1,persist:f("persist"),action:f("action"),content:f("content"),variant:f("variant"),anchorOrigin:f("anchorOrigin"),disableWindowBlurListener:f("disableWindowBlurListener"),autoHideDuration:f("autoHideDuration"),hideIconVariant:f("hideIconVariant"),TransitionComponent:f("TransitionComponent"),transitionDuration:f("transitionDuration"),TransitionProps:f("TransitionProps",!0),iconVariant:f("iconVariant",!0),style:f("style",!0),SnackbarProps:f("SnackbarProps",!0),className:(0,N.default)(e.props.className,p.className)});return h.persist&&(h.autoHideDuration=void 0),e.setState(function(E){if(c===void 0&&e.props.preventDuplicate||c){var b=function(C){return v?C.id===S:C.message===l},k=E.queue.findIndex(b)>-1,x=E.snacks.findIndex(b)>-1;if(k||x)return E}return e.handleDisplaySnack(m({},E,{queue:[].concat(E.queue,[h])}))}),S},e.handleDisplaySnack=function(t){var i=t.snacks;return i.length>=e.maxSnack?e.handleDismissOldest(t):e.processQueue(t)},e.processQueue=function(t){var i=t.queue,s=t.snacks;return i.length>0?m({},t,{snacks:[].concat(s,[i[0]]),queue:i.slice(1,i.length)}):t},e.handleDismissOldest=function(t){if(t.snacks.some(function(c){return!c.open||c.requestClose}))return t;var i=!1,s=!1,l=t.snacks.reduce(function(c,p){return c+(p.open&&p.persist?1:0)},0);l===e.maxSnack&&(s=!0);var d=t.snacks.map(function(c){return!i&&(!c.persist||s)?(i=!0,c.entered?(c.onClose&&c.onClose(null,"maxsnack",c.id),e.props.onClose&&e.props.onClose(null,"maxsnack",c.id),m({},c,{open:!1})):m({},c,{requestClose:!0})):m({},c)});return m({},t,{snacks:d})},e.handleEnteredSnack=function(t,i,s){if(!X(s))throw new Error("handleEnteredSnack Cannot be called with undefined key");e.setState(function(l){var d=l.snacks;return{snacks:d.map(function(c){return c.id===s?m({},c,{entered:!0}):m({},c)})}})},e.handleCloseSnack=function(t,i,s){e.props.onClose&&e.props.onClose(t,i,s);var l=s===void 0;e.setState(function(d){var c=d.snacks,p=d.queue;return{snacks:c.map(function(v){return!l&&v.id!==s?m({},v):v.entered?m({},v,{open:!1}):m({},v,{requestClose:!0})}),queue:p.filter(function(v){return v.id!==s})}})},e.closeSnackbar=function(t){var i=e.state.snacks.find(function(s){return s.id===t});X(t)&&i&&i.onClose&&i.onClose(null,"instructed",t),e.handleCloseSnack(null,"instructed",t)},e.handleExitedSnack=function(t,i){if(!X(i))throw new Error("handleExitedSnack Cannot be called with undefined key");e.setState(function(s){var l=e.processQueue(m({},s,{snacks:s.snacks.filter(function(d){return d.id!==i})}));return l.queue.length===0?l:e.handleDismissOldest(l)})},gn=e.enqueueSnackbar,En=e.closeSnackbar,e.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:e.enqueueSnackbar.bind(me(e)),closeSnackbar:e.closeSnackbar.bind(me(e))}},e}var a=n.prototype;return a.render=function(){var e=this,t=this.state.contextValue,i=this.props,s=i.domRoot,l=i.children,d=i.dense,c=d===void 0?!1:d,p=i.Components,v=p===void 0?{}:p,S=i.classes,f=this.state.snacks.reduce(function(E,b){var k,x=de(b.anchorOrigin),w=E[x]||[];return m({},E,(k={},k[x]=[].concat(w,[b]),k))},{}),h=Object.keys(f).map(function(E){var b=f[E],k=b[0];return u.default.createElement(mn,{key:E,dense:c,anchorOrigin:k.anchorOrigin,classes:S},b.map(function(x){return u.default.createElement(vn,{key:x.id,snack:x,classes:S,Component:v[x.variant],onClose:e.handleCloseSnack,onEnter:e.props.onEnter,onExit:e.props.onExit,onExited:$([e.handleExitedSnack,e.props.onExited],x.id),onEntered:$([e.handleEnteredSnack,e.props.onEntered],x.id)})}))});return u.default.createElement(_e.Provider,{value:t},l,s?(0,Le.createPortal)(h,s):h)},Oe(n,[{key:"maxSnack",get:function(){return this.props.maxSnack||M.maxSnack}}]),n}(u.Component),yn=function(){return(0,u.useContext)(_e)};export{Cn as a,yn as b};
