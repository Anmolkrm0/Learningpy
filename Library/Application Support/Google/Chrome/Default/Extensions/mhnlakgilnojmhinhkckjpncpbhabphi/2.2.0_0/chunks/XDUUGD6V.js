import{b as u,d as i,e as c,f as s}from"./W63VMDM2.js";import{j as I}from"./XNIWJ77D.js";import{P as m}from"./T463YMPS.js";import{c as r,f as g,g as d}from"./LZHALC2F.js";import{a as p}from"./64D36THL.js";import{f as l}from"./PQ35KENF.js";var A=l(p());var E=r({key:"SourcesStatusAtom",default:{loading:!1,sources:[]}}),S=r({key:"SearchWithAISettingsAtom",default:{loaded:!1,...i}}),y=r({key:"AutoTriggerAskEnableAtom",default:!0}),C=r({key:"SearchWithAIProviderLoadingAtom",default:!1}),x=r({key:"SearchWithAIConversationAtom",default:{conversationId:"",loading:!1,writingMessage:"",completedMessage:"",errorMessage:""}});var W=new m({runtime:"client"}),v=()=>{let n=d(S),o=(0,A.useRef)(!0);return(0,A.useEffect)(()=>{let a=async()=>{let t=await c();t&&(o.current?([I.MAXAI_CLAUDE,I.USE_CHAT_GPT_PLUS].includes(t.aiProvider)&&(await u()||(t.aiProvider=i.aiProvider,await s({aiProvider:i.aiProvider}),await W.postMessage({event:"SWAI_switchAIProvider",data:{provider:i.aiProvider}}))),n({...t,loaded:!0}),o.current=!1):n(e=>({...e,...t})))};return a(),window.addEventListener("focus",a),()=>{window.removeEventListener("focus",a)}},[]),null},G=v;var T=()=>{let[n,o]=g(S);return{searchWithAISettings:n,setSearchWithAISettings:async t=>{try{if(t instanceof Function){let e=await c(),h=t(e);o(f=>({...f,...h})),await s(h)}else o(e=>({...e,...t})),await s(t);return!0}catch{return!1}}}},q=T;export{E as a,y as b,C as c,x as d,G as e,q as f};
