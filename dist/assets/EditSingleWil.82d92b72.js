var A=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(t,e,s)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,f=(t,e)=>{for(var s in e||(e={}))E.call(e,s)&&x(t,s,e[s]);if(v)for(var s of v(e))O.call(e,s)&&x(t,s,e[s]);return t},b=(t,e)=>I(t,N(e));import{L as $}from"./Layout.1e1f6178.js";import{r as i,j as a,a as g,m as k,u as H,l as W}from"./vendor.5be3ed47.js";import{A as L,L as M}from"./index.2fc84c23.js";import{g as T,E as P}from"./ErrorContainer.b0c5883e.js";import{I as C,C as Q,T as q}from"./InputPreviewMarkdown.07833790.js";import{a as F,c as z}from"./Heplers.f3e66dae.js";import{u as B}from"./useHttp.aa02af8e.js";import"./Markdown.43c1fea1.js";const w=Number("5"),D=Number("256"),R=Number("512"),G={control:t=>b(f({},t),{boxShadow:t.boxShadow?"0 0 0 1px #1d1b84":void 0})},U=(t,e)=>t.length>0&&e.length<w;function V(t){var{wily:e}=t,s=e.tags?F(e.tags):null;const[n,l]=i.exports.useState(e.question),[c,u]=i.exports.useState(e.answer),[o,d]=i.exports.useState(s),p=r=>{l(r.target.value)},m=r=>{u(r.target.value)};return a("div",{className:"edit-container",children:a("div",{className:"container",children:g("form",{className:"main-inputs bg-dark-darkmode",onSubmit:r=>{r.preventDefault();var h=z(o);t.onEditWily(n,c,!0,h)},children:[g("div",{className:"date-label",children:[e.creator&&e.creator.username," \u2022 ",T(e.updatedAt)]}),a("label",{htmlFor:"",children:"Question"}),a(C,{onChangeInput:p,rows:"8",placeholder:"Question...",maxChars:D,value:n}),a("label",{htmlFor:"",children:"Answer"}),a(C,{onChangeInput:m,rows:"10",placeholder:"Answer...",maxChars:R,value:c}),a("div",{className:"position-relative w-100",children:a(Q,{isMulti:!0,onChange:d,value:o,options:s&&o.length>=w?o:q.tags,styles:G,className:"react-select",classNamePrefix:"react-select-pre",placeholder:"coding, javascript, react, redux, ...",noOptionsMessage:()=>o.length===w?"You have reached the max tags":"No tags available",isValidNewOption:U})}),a("button",{className:"main-btn mr-auto",children:"Edit wily"})]})})})}function ae(){const t=i.exports.useContext(L),{wilId:e}=k(),{isLoading:s,error:n,sendRequest:l}=B(),[c,u]=i.exports.useState({}),o=H(),d=W(),p=r=>{u(r.wily)};i.exports.useEffect(()=>{l({url:`http://127.0.0.1:8080/feed/wily/${e}`,headers:{Authorization:`Bearer ${t.token}`}},p)},[]);const m=r=>{o.show(r.message,{type:"sucess",timeout:3e3}),d.push(`/wil/${e}`)},y=(r,h,j,S)=>{l({url:`http://127.0.0.1:8080/feed/wily/${e}`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.token}`},method:"PUT",body:{question:r,answer:h,isPublic:j,tags:S}},m)};return n&&o.show(n,{type:"error",timeout:5e3}),g($,{children:[n&&a(P,{errorMessage:n}),!n&&s&&a(M,{}),!n&&!s&&a(V,{wily:c,onEditWily:y})]})}export{ae as default};
