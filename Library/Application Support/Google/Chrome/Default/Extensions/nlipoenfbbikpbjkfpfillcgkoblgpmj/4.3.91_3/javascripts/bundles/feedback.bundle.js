(()=>{var e,t,r,n={31808:(e,t,r)=>{"use strict";r.d(t,{fk:()=>i});var n,o=r(98924),i=function(){if(!(0,o.Z)()||!window.document.documentElement)return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},83008:(e,t,r)=>{"use strict";r.d(t,{f:()=>a});var n=r(87462),o=r(66805),i=(0,n.Z)({},o.Z.Modal);function a(e){i=e?(0,n.Z)((0,n.Z)({},i),e):(0,n.Z)({},o.Z.Modal)}},9669:(e,t,r)=>{e.exports=r(51609)},28665:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,k:()=>i});var n=r(67294),o=r(80334),i="RC_FORM_INTERNAL_HOOKS",a=function(){(0,o.ZP)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")};const s=n.createContext({getFieldValue:a,getFieldsValue:a,getFieldError:a,getFieldWarning:a,getFieldsError:a,isFieldsTouched:a,isFieldTouched:a,isFieldValidating:a,isFieldsValidating:a,resetFields:a,setFields:a,setFieldsValue:a,validateFields:a,submit:a,getInternalHooks:function(){return a(),{dispatch:a,initEntityValue:a,registerField:a,useSubscribe:a,setInitialValues:a,destroyForm:a,setCallbacks:a,registerWatch:a,getFields:a,setValidateMessages:a,setPreserve:a,getInitialValue:a}}})},82131:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(67294).createContext(null)},6077:(e,t,r)=>{"use strict";r.d(t,{RV:()=>l.R,ZM:()=>c.Z,ZP:()=>p,aV:()=>i.Z,cI:()=>a.Z,gN:()=>o.Z,qo:()=>d.Z,zb:()=>u.Z});var n=r(67294),o=r(61045),i=r(45378),a=r(4294),s=r(5318),l=r(81696),u=r(28665),c=r(82131),d=r(21806),f=n.forwardRef(s.Z);f.FormProvider=l.R,f.Field=o.Z,f.List=i.Z,f.useForm=a.Z,f.useWatch=d.Z;const p=f},72408:(e,t,r)=>{"use strict";var n=r(27418),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function j(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=w.prototype;var S=x.prototype=new j;S.constructor=x,n(S,w.prototype),S.isPureReactComponent=!0;var O={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&!k.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:O.current}}function Z(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,C=[];function E(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function F(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function I(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case a:s=!0}}if(s)return r(n,e,""===t?"."+V(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+V(o=e[l],l);s+=I(o,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)s+=I(o=o.value,u=t+V(o,l++),r,n);else if("object"===o)throw r=""+e,Error(b(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return s}function N(e,t,r){return null==e?0:I(e,"",t,r)}function V(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(Z(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(R,"$&/")+"/"),N(e,q,t=E(t,i,n,o)),F(t)}var B={current:null};function T(){var e=B.current;if(null===e)throw Error(b(321));return e}var U={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,$,t=E(null,null,t,r)),F(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!Z(e))throw Error(b(143));return e}},t.Component=w,t.Fragment=s,t.Profiler=u,t.PureComponent=x,t.StrictMode=l,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(b(267,e));var o=n({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)_.call(t,c)&&!k.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=Z,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return T().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,r){return T().useReducer(e,t,r)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.14.0"},90475:(e,t,r)=>{"use strict";r(57539);var n=r(9676),o=(r(12496),r(45777)),i=(r(53890),r(84391)),a=(r(84968),r(29097)),s=(r(45186),r(71577)),l=(r(69754),r(55026)),u=(r(61241),r(73216)),c=r(67294),d=r(73935),f=r(38819),p=r(1870),m=r(31795),h=r.n(m),y=r(9669),b="https://www.awesomescreenshot.com/api/v1",v=["/premium/stripe/create_plan","/premium/stripe/change_plan","/folder/create","/folder/add_items","/folder/change_name","/trash/throw_into","/image/change_title","/video/update_title","/trash/restore","/trash/delete","/image/upload","/workspace/channel/move_items","/workspace/channel/load_items","/workspace/channel/load_members","/video/websocket/token","/refer/check_accept"],g=r.n(y)().create({baseURL:b});g.interceptors.request.use((function(e){return e}),(function(){return l.ZP.error("Network error, Request timeout!"),Promise.reject()})),g.interceptors.response.use((function(e){if(e&&e.data&&1===e.data.code)return Promise.resolve(e.data.data);if(e.data.code,2001===e.data.code)return Promise.reject(e.data);if(1201===e.data.code)return Promise.reject(e.data);if(e.data.msg){if(-1!==v.indexOf(e.config.url))return Promise.reject(e.data.msg);if(l.ZP.error(e.data.msg),"/pricing"!==window.location.pathname)return Promise.reject(e.data.msg)}}),(function(e){if(e.response){var t=e.response.status;l.ZP.error("Network error! Error Code "+t)}}));var w=r(85893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k=u.Z.Option;function P(e){var t=O((0,c.useState)(!1),2),r=t[0],d=t[1],m=O((0,c.useState)(!1),2),y=m[0],b=m[1],v=O((0,c.useState)("Screenshot Bug"),2),j=v[0],S=v[1],_={"Screenshot Bug":{name:"Bug Report-Screenshot",title:{label:"Bug Summary",tip:"Let us know what went wrong in a few words."},detail:{label:"Bug Details",tip:"Please describe in detail what went wrong, any actions you took, and error messages you got."}},"Video Bug":{name:"Bug Report-Screenshot",title:{label:"Bug Summary",tip:"Let us know what went wrong in a few words."},detail:{label:"Bug Details",tip:"Please describe in detail what went wrong, any actions you took, and error messages you got."}},"Feature Request":{name:"Feature Request",title:{label:"Title",tip:"What's your request about?"},detail:{label:"Description",tip:"Please provide a detailed description of new feature you want."}},"Other Issue":{name:"Other Issue",title:{label:"Title"},detail:{label:"Description",tip:"Let us know your thoughts on Awesome Screenshot. Any questions, comments or suggestions are welcome."}}};return(0,w.jsxs)("div",{className:"main",children:[(0,w.jsx)("div",{className:"top",children:(0,w.jsx)("div",{className:"logo",children:(0,w.jsx)("a",{href:"https://www.awesomescreenshot.com"})})}),(0,w.jsx)("div",{className:"options-container",children:y?(0,w.jsxs)("div",{className:"sent-message",children:[(0,w.jsx)("div",{children:(0,w.jsx)(f.Z,{})}),(0,w.jsx)("div",{className:"title",children:"Thank you"}),(0,w.jsx)("div",{className:"content",children:"The form was submitted successfully. We will contact you shortly."}),(0,w.jsx)(s.Z,{type:"primary",onClick:function(){b(!1)},children:"Submit another issue"})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"main-title",children:"Send Feedback"}),(0,w.jsxs)("div",{className:"title-tip",children:["Please visit our"," ",(0,w.jsx)("a",{href:"https://support.awesomescreenshot.com/hc/en-us",target:"_blank",children:"Help Center"})," ","to find answers to your questions before submitting request form."]}),(0,w.jsxs)(a.Z,{onFinish:function(e){var t={};t["Extension Version"]=chrome.runtime.getManifest().version,localStorage.last_info&&(t=x(x({},t),JSON.parse(localStorage.last_info))),t.Browser||(t.Browser=h().name+" "+h().version),t.OS||(t.OS=h().os.toString()),t["Screen Size"]||(t["Screen Size"]=window.screen.width+"x"+window.screen.height),e.webUrl&&(t["Web URL"]=e.webUrl),e.screenshotVideoUrl&&(t["Screenshot/video URL"]=e.screenshotVideoUrl);var r=!0===e.isSendInfo||void 0===e.isSendInfo?function(e,t){var r="";for(var n in r+=e+"<br/><br/><br/><hr>",t)r+="<b>"+n+"</b>: "+t[n]+"<br/>";return r}(e.content,t):e.content,n={email:e.email,name:e.name,subject:"[".concat(e.type,"] ").concat(e.title),content:r};d(!0),b(!0),function(e){return g({method:"POST",url:"/common/contact_us",data:e})}(n).then((function(e){d(!1),b(!0)})).catch((function(e){d(!1),l.ZP.error("Submission failed. Please retry or copy summary and details to send an email to care@awesomescreenshot.com.")}))},children:[(0,w.jsx)("div",{className:"label required",children:"Issue Type"}),(0,w.jsx)(a.Z.Item,{name:"type",initialValue:j,rules:[{required:!0}],children:(0,w.jsx)(u.Z,{onChange:function(e){S(e)},children:["Screenshot Bug","Video Bug","Feature Request","Other Issue"].map((function(e){return(0,w.jsx)(k,{value:e,children:e},e)}))})}),(0,w.jsx)("div",{className:"label required",children:_[j].title.label}),(0,w.jsx)("div",{className:"label-tip",children:_[j].title.tip}),(0,w.jsx)(a.Z.Item,{name:"title",rules:[{required:!0}],children:(0,w.jsx)(i.Z,{})}),"Screenshot Bug"===j&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"label",children:"Web URL"}),(0,w.jsx)("div",{className:"label-tip",children:"Include the url of page you had trouble capture to help us debug much faster."}),(0,w.jsx)(a.Z.Item,{name:"webUrl",children:(0,w.jsx)(i.Z,{})})]}),(0,w.jsx)("div",{className:"label required",children:_[j].detail.label}),(0,w.jsx)("div",{className:"label-tip",children:_[j].detail.tip}),(0,w.jsx)(a.Z.Item,{name:"content",rules:[{required:!0}],children:(0,w.jsx)(i.Z.TextArea,{autoSize:{minRows:3}})}),("Screenshot Bug"===j||"Video Bug"===j)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"label",children:"Screenshot/video URL"}),(0,w.jsx)("div",{className:"label-tip",children:"Don't feel like writing? Record a video tell us what's go on or send us a snapshot. If a picture is worth a thousand words, then a video is worth a million."}),(0,w.jsx)(a.Z.Item,{name:"screenshotVideoUrl",children:(0,w.jsx)(i.Z,{})})]}),(0,w.jsx)("div",{className:"label required",children:"Your Email Address"}),(0,w.jsx)("div",{className:"label-tip",children:"Enter an email address to receive updates on the issue."}),(0,w.jsx)(a.Z.Item,{name:"email",rules:[{required:!0}],children:(0,w.jsx)(i.Z,{type:"email"})}),(0,w.jsx)("div",{className:"label",children:"Your Name"}),(0,w.jsx)("div",{className:"label-tip",children:"Only for email correspondence."}),(0,w.jsx)(a.Z.Item,{name:"name",children:(0,w.jsx)(i.Z,{})}),(0,w.jsx)(a.Z.Item,{name:"isSendInfo",valuePropName:"checked",initialValue:!0,children:(0,w.jsxs)(n.Z,{children:["Include OS and browser info to help developers debug errors"," ",(0,w.jsx)(o.Z,{title:"Specifically, version number of your OS, browser, extension, and screen size will be included. ",children:(0,w.jsx)(p.Z,{})})]})}),(0,w.jsx)(a.Z.Item,{children:(0,w.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:r,size:"large",block:!0,children:"Submit"})})]})]})})]})}d.render((0,w.jsx)(P,{}),document.getElementById("feedback-page"))}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,e=[],i.O=(t,r,n,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],s=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={656:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,s,l]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var c=l(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},r=self.webpackChunkawesomescreenshot_extension=self.webpackChunkawesomescreenshot_extension||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.O(void 0,[897,769,100,50,83,685,873,882],(()=>i(33505)));var a=i.O(void 0,[897,769,100,50,83,685,873,882],(()=>i(90475)));a=i.O(a)})();