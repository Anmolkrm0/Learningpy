import{a as ee,b as F}from"./ZB6GXO2V.js";import{a as fe}from"./XL4OWIUW.js";import{a as Q}from"./DLL62XWK.js";import"./N4UDF6UL.js";import"./Q225FROC.js";import"./NOAAR5HV.js";import"./MEUJ2IOP.js";import"./3SJA4ECE.js";import"./GM542M4T.js";import"./6C7YYXIB.js";import"./W6NX3QU6.js";import"./L33QHTPD.js";import"./EYWU5WEI.js";import"./NR3V5KOB.js";import{b as R,s as pe}from"./JD5AR4GV.js";import"./J2TC32MO.js";import{g as Z}from"./FRVVUPC6.js";import"./LCJ6CXNZ.js";import{a as j}from"./ASGB7G5Y.js";import"./I4GVYMN6.js";import{d as Y}from"./N4UUWNH5.js";import{a as x,u as D}from"./6WBNMCV2.js";import"./H3PWEBSP.js";import"./QZNWBGPK.js";import"./QZVUH6Z4.js";import"./6NCLE6FY.js";import"./OL2SPMMG.js";import"./6LS5XNTR.js";import{s as X}from"./R2C2S5UK.js";import"./PQ3LRSVC.js";import"./KALZA75J.js";import{a as z}from"./RTDSIOP5.js";import"./7WZ5TKU2.js";import{a as L,c as me,g as J}from"./SCPIJ7ZW.js";import"./QPPETRF6.js";import{m as $}from"./YUSYB6UW.js";import{M as V,P as y}from"./H676AVPS.js";import{B as k,N as _,n as q,w as W}from"./624UJDNS.js";import{a as H}from"./64D36THL.js";import{a as ue}from"./3JX3VARJ.js";import{f as E}from"./PQ35KENF.js";var o=E(H()),M=E(ue());var ae=E(pe());var ie=E(fe());var N=E(me());var w=E(H());var ge=()=>{let e=document.querySelectorAll("button");return Array.from(e).some(t=>t.textContent==="Log in")},he=()=>{let e=(0,w.useRef)(null),s=(0,w.useCallback)(J(()=>{ge()&&new y({runtime:"daemon_process"}).postMessage({event:"OpenAIDaemonProcess_daemonProcessSessionExpired",data:{}})},1e3),[]),t=(0,w.useCallback)(r=>{if(!r.every(a=>a.addedNodes.length<=0))try{s()}catch{}},[s]);(0,w.useEffect)(()=>{e.current=new MutationObserver(t)},[t]),(0,w.useEffect)(()=>{let r=document.querySelector("body");return e.current&&r&&e.current.observe(r,{childList:!0,subtree:!0}),()=>{e.current&&e.current.disconnect()}},[])},te=he;var S="MAX_AI_CHAT_GPT_MESSAGE_KEY",Ie=()=>document.querySelector('input[type="file"]'),oe=()=>new Promise(e=>{let s=!1,t=!1,r=3*1e3,a=setTimeout(()=>{t||(t=!0,window.removeEventListener("message",f),e(s))},r),d=L();window.postMessage({event:S,type:"ping",data:{taskId:d}});let f=c=>{if(c.data?.event===S&&c.data?.type==="pong"&&c.data?.data?.taskId===d){if(t)return;t=!0,s=c.data?.data?.success||!1,clearTimeout(a),window.removeEventListener("message",f),e(s)}};window.addEventListener("message",f)}),Pe=e=>new Promise(s=>{let t=!1,r=!1,a=3*1e3,d=setTimeout(()=>{r||(r=!0,window.removeEventListener("message",c),s(t))},a),f=L();window.postMessage({event:S,type:"upload",data:{taskId:f,files:e}});let c=l=>{if(l.data?.event===S&&l.data?.type==="upload_result"&&l.data?.data?.taskId===f){if(r)return;t=l.data?.data?.success||!1,r=!0,clearTimeout(d),window.removeEventListener("message",c),s(t)}};window.addEventListener("message",c)}),ne=e=>new Promise(s=>{let t=e[0],r=Ie();if(!r||!t?.blobUrl){s(!1);return}let a=new XMLHttpRequest;a.open("GET",t.blobUrl,!0),a.withCredentials=!0,a.responseType="blob",a.onload=function(){if(this.status===200){let d=this.response,f=new Blob([d],{type:t.fileType}),c=new File([f],t.fileName,{type:t.fileType}),l=new DataTransfer;l.items.add(c);let I=l.files;Pe(e).then(m=>{if(!m){s(!1);return}r.files=I;let n=new Event("change",{bubbles:!0});r.dispatchEvent(n),s(!0)})}else s(!1)},a.send()}),se=e=>{let s=t=>{if(t.data?.event===S&&t.data?.type==="upload_change_result"&&t.data?.data?.files?.length){let r=t.data.data.files;e(r)}};return window.addEventListener("message",s),()=>{window.removeEventListener("message",s)}};var B="MaxAI.me",we=()=>{setInterval(()=>{document.title=`${B} - AI Copilot for the Web`},1e3)},u=new z("ChatGPTDaemonProcessPage"),ce=()=>window.localStorage.getItem("hide_usechatgptai_daemon_process_button")==="false",Ae=()=>{let e=(0,o.useRef)(new Q),[s,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1),d=(0,o.useRef)(!1);te();let f=()=>{let c=document.body.querySelectorAll("h1");for(let n=0;n<c.length;n++){let g=c[n]?.innerText||"";if(g.indexOf("ChatGPT")>-1||g.indexOf("New chat")>-1){a(!0);return}}let l=document.body.querySelectorAll("textarea");for(let n=0;n<l.length;n++)if(l[n]instanceof HTMLTextAreaElement){a(!0);return}let I=document.querySelectorAll("nav a");for(let n=0;n<I.length;n++)if(I[n]?.innerText==="Log out"){a(!0);return}let m=document.querySelectorAll("a");for(let n=0;n<m.length;n++)if(m[n]?.innerText==="New chat"){a(!0);return}a(!1)};return(0,o.useEffect)(()=>{let c=setInterval(()=>{if(d.current){clearInterval(c);return}f()},1e3);return()=>{clearInterval(c)}},[]),(0,o.useEffect)(()=>{if(r){d.current=!0;let c=new y({runtime:"client"}),l=new y({runtime:"daemon_process"});l.postMessage({event:"OpenAIDaemonProcess_daemonProcessExist",data:{}}).then(async n=>{if(u.info(n),n.success&&n.data?.isExist===!1){u.info(`init ${B} chatGPT daemon process`);try{await c.postMessage({event:"Client_updateTabVisible",data:{visible:!1,windowVisible:!1,windowFocus:!1}});let[g=[],A=[]]=await Promise.all([e.current.getAllModels(),e.current.getAllPlugins()]);if(g.length>0){await X(K=>{let i=V(K),p=i.thirdProviderSettings?.OPENAI?.model,b=g.find(h=>h?.title?.includes("Default"))||g[0];return p&&g.find(O=>O?.slug===p)||(p=b?.slug),i.thirdProviderSettings?.OPENAI||(i.thirdProviderSettings.OPENAI={}),i.thirdProviderSettings.OPENAI.modelOptions=g,i.thirdProviderSettings.OPENAI.pluginOptions=A,i.thirdProviderSettings.OPENAI.model=p,u.info("set currentModel model",p),i}),await l.postMessage({event:"OpenAIDaemonProcess_setDaemonProcess"}),we();let T=document.getElementById("__next");T&&!ce()&&T?.classList.add("use-chat-gpt-ai-running"),t(!0),M.default.runtime.onMessage.addListener(m)}}catch(g){await c.postMessage({event:"Client_updateTabVisible",data:{visible:!0,windowVisible:!0,windowFocus:!0}}),u.error(g),setTimeout(()=>{window.location.reload()},1e3)}}else u.info("close listen"),document.getElementById(q)?.remove()});let I=se(n=>{c.postMessage({event:"Client_chatUploadFilesChange",data:{files:n}})}),m=async n=>{let{event:g,data:A}=n;if(!(n?.id&&n.id!==W))return new Promise(T=>{(async()=>{switch(g){case"OpenAIDaemonProcess_ping":return u.info("DaemonProcess_ping"),await l.postMessage({event:"OpenAIDaemonProcess_pong"}),{success:!0,data:{},message:"ok"};case"OpenAIDaemonProcess_createConversation":{let{conversationId:i,model:P}=A;u.info("DaemonProcess_createConversation",i,P);let p=await e.current?.createConversation(i,P);return p?{success:!0,data:{conversationId:p?.conversationId||""},message:"create conversation success"}:{success:!1,data:{conversationId:""},message:"create conversation fail"}}break;case"OpenAIDaemonProcess_askChatGPTQuestion":{let{taskId:i,question:P,options:p}=A;u.info("OpenAIDaemonProcess_askChatGPTQuestion",i,P,p);let{conversationId:b,messageId:h,parentMessageId:O,question:le}=P,v=e.current?.getConversation(b);if(v||(v=await e.current?.createConversation(b),v&&await v.fetchHistoryAndConfig()),v){let U=new AbortController,de=()=>{u.info("AbortFunction exec",h),U.abort()};e.current?.addAbortWithMessageId(h,de),await v.generateAnswer({meta:p.meta,messageId:h,parentMessageId:O,prompt:le,signal:U.signal,onEvent(C){if(C.type==="error"){u.info("error"),u.info("abort Controller remove",h),e.current?.removeAbortWithMessageId(h),l.postMessage({event:"OpenAIDaemonProcess_taskResponse",data:{taskId:i,data:C.data,error:C.data.message||C.data.detail||"",done:!0}});return}if(C.type==="done"){u.info("done"),u.info("abort Controller remove",h),e.current?.removeAbortWithMessageId(h),l.postMessage({event:"OpenAIDaemonProcess_taskResponse",data:{taskId:i,data:{},error:"",done:!0}});return}l.postMessage({event:"OpenAIDaemonProcess_taskResponse",data:{taskId:i,data:C.data,error:"",done:!1}}),u.info(C.data)}},p.regenerate===!0)}}break;case"OpenAIDaemonProcess_removeConversation":{let{conversationId:i}=A;if(u.info("OpenAIDaemonProcess_removeConversation",i),i)return{success:await e.current.closeConversation(i),data:{},message:"ok"}}break;case"OpenAIDaemonProcess_abortAskChatGPTQuestion":{let{messageId:i}=A;return u.info("OpenAIDaemonProcess_abortAskChatGPTQuestion listen",i),i?(e.current?.abortWithMessageId(i),{success:!0,data:{},message:"ok"}):{success:!1,data:{},message:"messageId is empty"}}break;case"OpenAIDaemonProcess_pingFilesUpload":return{success:await oe(),data:{},message:"ok"};case"OpenAIDaemonProcess_filesUpload":{let{files:i}=A;return{success:await ne(i),data:{},message:"ok"}}break;default:break}})().then(i=>{i&&i.data&&T(i)})})};return()=>{I(),M.default.runtime.onMessage.removeListener(m)}}return()=>{}},[r]),{showDaemonProcessBar:s}},Ce=()=>{let{showDaemonProcessBar:e}=Ae(),[s,t]=(0,o.useState)(()=>ce());return e?s?o.default.createElement(o.default.Fragment,null,o.default.createElement(re,null)):o.default.createElement(o.default.Fragment,null,o.default.createElement(x,{sx:{top:0,position:"absolute",height:40,width:"100%",bgcolor:"#7601D3",zIndex:1e3,color:"#fff"},spacing:1,direction:"row",alignItems:"center",justifyContent:"center"},o.default.createElement("div",{className:"use-chat-gpt-ai-setting-icon"},o.default.createElement(ae.default,{sx:{fontSize:16}})),o.default.createElement(D,{variant:"body1",component:"span"},`Please keep this page open to use ${B} extension.`),o.default.createElement(Z,{sx:{position:"absolute",right:16,color:"#fff"},onClick:()=>{if(window.confirm("Once you click 'OK', the ChatGPT.AI top bar won't show up anymore. But please still keep this ChatGPT tab open so you can keep using the MaxAI.me extension without interruption.")){window.localStorage.setItem("hide_usechatgptai_daemon_process_button",JSON.stringify(!1));let a=document.getElementById("__next");a&&a.classList.remove("use-chat-gpt-ai-running"),t(!0)}}},o.default.createElement(ie.default,null))),o.default.createElement(re,null)):null},G=e=>{let s=document.getElementById(_);if(s)s.src=e;else{let t=document.createElement("iframe");t.id=_,t.style.cssText="height: 0px; width: 100%;",t.src=e,t.onload=function(){let a=t.contentWindow&&t.contentWindow.document.documentElement.innerText||"{}";try{JSON.parse(a).expires||a.match(/Please stand by|while we are checking your browser|Please turn JavaScript on|Please enable Cookies|reload the page/)}catch{}};let r=document.querySelector("main");r&&r.lastElementChild&&r.lastElementChild.appendChild(t)}},ve=(e="/api/auth/session")=>new Promise(s=>{fetch(e).then(t=>{t.text().then(r=>{try{let a=t.headers.get("Content-Type");if(a&&a.indexOf("application/json")>-1&&t.status!==403&&r.indexOf('"expires":"')>-1){let d=document.getElementById(_);d&&d.contentWindow?d.contentWindow.document.documentElement.innerHTML=r:G(e),s(!0)}else G(e),s(!1)}catch{G(e),s(!1)}})})}),re=()=>{let e=(0,o.useRef)(!1),[s,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)("");return F(()=>{(async()=>{try{let c=(await M.default.storage.local.get(k)||{})[k];if(c){let{end:l}=JSON.parse(c),I=(0,N.default)().utc(),m=(0,N.default)(l).utc().diff(I,"seconds"),n="";if(m<60?n="1 minute":m<3600?n=`${Math.floor(m/60)} minutes`:m<86400&&(m<7200?n="1 hour":n=`${Math.floor(m/60/60)} hours`),a(n),m>30){e.current=!0,t(!0);return}}t(!1),e.current=!1}catch{e.current=!1}})()},1e3*3),F(()=>{e.current&&ve()},1e3*30),o.default.createElement(o.default.Fragment,null,s&&o.default.createElement(j,{position:"absolute",right:8,top:8,zIndex:1e4},o.default.createElement(ee,{icon:o.default.createElement(o.default.Fragment,null),sx:{p:"16px!important",bgcolor:"#fff",border:"1px solid #7601D3","& > div":{"&:first-of-type":{display:"none"},"&:nth-of-type(2)":{padding:"0!important"},"&:last-of-type":{margin:"0!important",padding:"0!important",position:"absolute",top:4,right:4}},"& *":{color:"#7601D3"}}},o.default.createElement(x,{spacing:1},o.default.createElement(x,{direction:"row",alignItems:"center",spacing:1},o.default.createElement(R,{sx:{fontSize:16}}),o.default.createElement(D,{variant:"body1",fontSize:16,fontWeight:700},"Stable Mode is enabled")),o.default.createElement(D,{variant:"body1",fontSize:16},"Will be disabled automatically in ",r),o.default.createElement(Y,{disableElevation:!0,variant:"contained",sx:{bgcolor:"#7601D3",color:"#fff","&:hover":{bgcolor:"#7601D3"},textTransform:"none"},onClick:async()=>{await $({key:"options",query:"#/chatgpt-stable-mode"})}},"Disable now")))))},Je=Ce;export{Je as default};
