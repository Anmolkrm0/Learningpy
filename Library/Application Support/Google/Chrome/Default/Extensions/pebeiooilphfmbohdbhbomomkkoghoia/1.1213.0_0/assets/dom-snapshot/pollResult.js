function __pollResult(){var t=function(){"use strict";return function(){const t=function(t){return function(){function t(t,n=0){const e=t.charCodeAt(n);return e>=55296&&e<56320?1024*(e-55296)+(t.charCodeAt(n+1)-56320)+65536:56320<=e&&e<=57343?-1:e}var n=function(n,e){const r=[];let o=0;for(let u=0;u<n.length;++u){const c=t(n,u);let a=0;c>0&&(a=c<128?1:c<2048?2:c<65536?3:c<2097152?4:c<67108864?5:6),o+a>e?(r.push(u),o=a):o+=a}return r};const e="SUCCESS",r="SUCCESS_CHUNKED",o="ERROR";var u=function(t,u,c={}){const a=function(t,{chunkByteLength:u=0}={}){if(t){if(t.value){if(u){if(!t.chunks){const e=JSON.stringify(t.value);t.chunks=n(e,u),t.chunks.length>0&&(t.from=0,t.value=e)}if(t.from>=0)return{status:r,value:t.value.substring(t.from,t.from=t.chunks.shift()),done:!t.from}}return{status:e,value:t.value}}return t.error?{status:o,error:t.error}:{status:"WIP"}}return{status:o,error:"unexpected poll request received - cannot find state of current operation"}}((t=t||{})[u],c);return(a.status===e||a.status===o||a.status===r&&a.done)&&(t[u]=null),a},c={chunkify:n,pollify:function(t,n,e){return r=>function(){return n[e]||(n[e]={},t.apply(null,arguments).then((t=>n[e].value=t)).catch((t=>n[e].error=t.message))),u(n,e,r)}},poll:u,absolutizeUrl:function(t,n){if(function(t){try{return new URL(t),!0}catch(t){return!1}}(t))return t;let e=!0;try{e=t!==decodeURI(t)}catch(t){e=!0}const r=new URL(t,n).href;return e?r:decodeURI(r)},isInlineFrame:function(t){return t.contentDocument&&t.contentDocument.location&&!/^https?:$/.test(t.contentDocument.location.protocol)},isAccessibleFrame:function(t){try{const n=t.contentDocument;return Boolean(n&&n.defaultView&&n.defaultView.frameElement)}catch(t){return!1}}};const{poll:a}=c,{EYES_NAMESPACE:s,DOM_SNAPSHOT_KEY:l}={EYES_NAMESPACE:"__EYES__APPLITOOLS__",DOM_SNAPSHOT_KEY:"domSnapshotResult"};return function(t){return JSON.stringify(a(window[s],l,t))}}()};let n=!0;try{let e=document.head.querySelector("[data-applitools-sandbox]");e||(e=document.createElement("iframe"),e.setAttribute("data-applitools-sandbox",""),e.setAttribute("data-applitools-skip",""),document.head.appendChild(e));const r=window.crypto.getRandomValues(new Uint32Array(1))[0],o=e.contentDocument.createElement("script");o.textContent=`window['ctor-${r}'] = ${t.toString()};`,e.contentDocument.head.appendChild(o);const u=e.contentWindow["ctor-"+r];return n=!1,u(document).apply(null,arguments)}catch(e){try{return t(document).apply(null,arguments)}catch(t){throw n?t:e}}}}();return t.apply(this,arguments)}