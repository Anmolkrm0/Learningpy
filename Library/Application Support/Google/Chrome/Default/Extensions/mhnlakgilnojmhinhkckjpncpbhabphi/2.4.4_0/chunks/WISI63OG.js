import{h as o}from"./AAMCXCLO.js";import{a as n}from"./IPAGS25B.js";import{f as d}from"./PQ35KENF.js";var r=d(n());var s=()=>{(0,r.useEffect)(()=>{let t=new o,e=()=>{let a=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;t.postMessage({event:"Client_updateIcon",data:{mode:a?"dark":"light"}})};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),e(),()=>{window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e),t?.destroy()}},[])},i=s;export{i as a};
