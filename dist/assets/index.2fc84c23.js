var A=Object.defineProperty,D=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var I=(s,e,r)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,P=(s,e)=>{for(var r in e||(e={}))T.call(e,r)&&I(s,r,e[r]);if(S)for(var r of S(e))C.call(e,r)&&I(s,r,e[r]);return s},v=(s,e)=>D(s,b(e));import{j as t,r as i,a as j,S as V,R as c,b as z,c as H,p as U,t as N,d as W,P as $,B}from"./vendor.5be3ed47.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};q();const F="modulepreload",L={},K="/",d=function(e,r){return!r||r.length===0?e():Promise.all(r.map(a=>{if(a=`${K}${a}`,a in L)return;L[a]=!0;const o=a.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":F,o||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),o)return new Promise((g,h)=>{l.addEventListener("load",g),l.addEventListener("error",h)})})).then(()=>e())};const G=()=>t("div",{className:"spinner"}),J=i.exports.lazy(()=>d(()=>import("./Home.ef54ef0b.js"),["assets/Home.ef54ef0b.js","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/InputPreviewMarkdown.07833790.js","assets/InputPreviewMarkdown.7f5c8e9c.css","assets/Heplers.f3e66dae.js","assets/Markdown.43c1fea1.js","assets/WiliesCards.42b5cc15.js","assets/WiliesCards.0eb1c38c.css","assets/ErrorContainer.b0c5883e.js","assets/useHttp.aa02af8e.js"])),Q=i.exports.lazy(()=>d(()=>import("./Login.8c4f5d64.js"),["assets/Login.8c4f5d64.js","assets/AuthInputs.538f131c.css","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/useHttp.aa02af8e.js"])),X=i.exports.lazy(()=>d(()=>import("./Signup.5dd1cae2.js"),["assets/Signup.5dd1cae2.js","assets/AuthInputs.538f131c.css","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/useHttp.aa02af8e.js"])),Y=i.exports.lazy(()=>d(()=>import("./Docs.4b5f8cdb.js"),["assets/Docs.4b5f8cdb.js","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js"])),Z=i.exports.lazy(()=>d(()=>import("./ShowSingleWil.2703bb30.js"),["assets/ShowSingleWil.2703bb30.js","assets/ShowSingleWil.10503768.css","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/Markdown.43c1fea1.js","assets/ErrorContainer.b0c5883e.js","assets/useHttp.aa02af8e.js"])),ee=i.exports.lazy(()=>d(()=>import("./EditSingleWil.82d92b72.js"),["assets/EditSingleWil.82d92b72.js","assets/EditSingleWil.a5ba99c0.css","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/ErrorContainer.b0c5883e.js","assets/InputPreviewMarkdown.07833790.js","assets/InputPreviewMarkdown.7f5c8e9c.css","assets/Heplers.f3e66dae.js","assets/Markdown.43c1fea1.js","assets/useHttp.aa02af8e.js"])),te=i.exports.lazy(()=>d(()=>import("./MarkdownPreview.6e96cc48.js"),["assets/MarkdownPreview.6e96cc48.js","assets/MarkdownPreview.da0634af.css","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/Markdown.43c1fea1.js"])),re=i.exports.lazy(()=>d(()=>import("./OtherUserWilies.1e04f2e5.js"),["assets/OtherUserWilies.1e04f2e5.js","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/WiliesCards.42b5cc15.js","assets/WiliesCards.0eb1c38c.css","assets/Markdown.43c1fea1.js","assets/ErrorContainer.b0c5883e.js","assets/Heplers.f3e66dae.js","assets/useHttp.aa02af8e.js"])),oe=i.exports.lazy(()=>d(()=>import("./Community.27b19ab4.js"),["assets/Community.27b19ab4.js","assets/Community.c27fb20d.css","assets/Layout.1e1f6178.js","assets/Layout.5d1d22d2.css","assets/vendor.5be3ed47.js","assets/useHttp.aa02af8e.js"]));function se(){return t(i.exports.Suspense,{fallback:t(G,{}),children:j(V,{children:[t(c,{exact:!0,path:"/",children:t(J,{})}),t(c,{path:"/login",children:t(Q,{})}),t(c,{path:"/signup",children:t(X,{})}),t(c,{path:"/docs",children:t(Y,{})}),t(c,{path:"/wil/:wilId",children:t(Z,{})}),t(c,{path:"/edit/wil/:wilId",children:t(ee,{})}),t(c,{path:"/preview",children:t(te,{})}),t(c,{path:"/community",children:t(oe,{})}),t(c,{path:"/user/:username/wilies",children:t(re,{})}),t(c,{children:t(z,{to:"/"})})]})})}const ne=H.createContext({showParticuler:!1,lightMode:!1,token:"",userId:"",username:"",isLoggedIn:!1,login:s=>{},logout:()=>{},toggleShowParticules:()=>{},toggleLightMode:()=>{}}),ie=()=>{const s=localStorage.getItem("token"),e=localStorage.getItem("userId"),r=localStorage.getItem("username");return{token:s,userId:e,username:r}},le=()=>{const s=localStorage.getItem("showParticuler"),e=localStorage.getItem("lightMode");return{showParticules:s==="true",lightMode:e==="true"}},ae=s=>{const e=ie(),r=le();let a,o,n;e&&(a=e.token,o=e.userId,n=e.username);const[l,g]=i.exports.useState(a),[h,m]=i.exports.useState(o),[w,p]=i.exports.useState(n),[E,y]=i.exports.useState(r.showParticules),[x,k]=i.exports.useState(r.lightMode),O=!!l,M=i.exports.useCallback(()=>{g(null),m(null),p(null),localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("username")},[]),R={token:l,userId:h,username:w,showParticuler:E,lightMode:x,isLoggedIn:O,login:(u,f,_)=>{g(u),m(f),p(_),localStorage.setItem("token",u),localStorage.setItem("userId",f),localStorage.setItem("username",_)},logout:M,toggleShowParticules:()=>{y(u=>(localStorage.setItem("showParticuler",!u),!u))},toggleLightMode:()=>{k(u=>(localStorage.setItem("lightMode",!u),!u))}};return t(ne.Provider,{value:R,children:s.children})},ce={position:U.TOP_CENTER,offset:"50px",transition:N.SCALE},de=({options:s,message:e})=>{let r="alert ";return s.type=="error"?r="error-alert":r="success-alert",t("div",{className:"alert",children:t("div",{className:r,children:e})})};W.render(t(ae,{children:t($,v(P({template:de},ce),{children:t(B,{children:t(se,{})})}))}),document.getElementById("root"));export{ne as A,G as L};
