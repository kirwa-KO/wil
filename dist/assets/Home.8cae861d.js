var L=Object.defineProperty,M=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var C=(s,t,n)=>t in s?L(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,j=(s,t)=>{for(var n in t||(t={}))H.call(t,n)&&C(s,n,t[n]);if(S)for(var n of S(t))R.call(t,n)&&C(s,n,t[n]);return s},k=(s,t)=>M(s,$(t));import{L as T}from"./Layout.7fe6aeda.js";import{r,a,j as e,c as O,u as P,F as E}from"./vendor.b5e3c5d1.js";import{I as W,C as F,R as Q,a as z}from"./publicIcon.dbc84db8.js";import{c as q,a as _}from"./Heplers.eaad7371.js";import{W as B}from"./WiliesCards.28b82713.js";import{A as D,L as G}from"./index.e1ae2df7.js";import{u as V}from"./useHttp.d84abd54.js";import{M as Y}from"./MarkdownEditor.007a4d24.js";import"./MarkdownPreview.0f785546.js";import"./style.938310fd.js";import"./ErrorContainer.bc02799b.js";let N=null;const I=Number("5"),J=Number("256"),K=Number("512"),U={control:s=>k(j({},s),{boxShadow:s.boxShadow?"0 0 0 1px #1d1b84":void 0})},X=(s,t)=>s.length>0&&t.length<I,Z=r.exports.forwardRef((s,t)=>{const[n,l]=r.exports.useState(),[h,d]=r.exports.useState(),[u,m]=r.exports.useState(!0),[c,y]=r.exports.useState([]),[v,w]=r.exports.useState(!1),x=o=>{o.preventDefault();var i=q(c);s.addWilyHandler(n,h,u,i)};r.exports.useImperativeHandle(t,()=>({resetInputs(){l(""),d(""),y([]),w(!1),m(!0)}}));const b=o=>{w(!0),o==""&&w(!1),l(o)},p=r.exports.useRef();return p&&p.current&&N===null&&(N=p.current.scrollHeight),a("form",{className:"main-inputs container bg-dark-darkmode",onSubmit:x,children:[e("label",{htmlFor:"",children:"Question"}),e(W,{onChangeInput:b,placeholder:"Question...",maxChars:J,value:n,height:278,id:"qst-input"}),a("div",{className:"answer",style:v?{minHeight:N+"px",overflow:"visible"}:{height:"0px",overflow:"hidden"},ref:p,children:[e("label",{htmlFor:"",children:"Answer"}),e(W,{onChangeInput:d,height:358,placeholder:"Answer...",maxChars:K,value:h,className:"ml-0",id:"answer-input"}),e("div",{className:"position-relative",children:e(F,{isMulti:!0,onChange:y,options:c.length>=I?c:s.suggestedTags,styles:U,className:"react-select",classNamePrefix:"react-select-pre",placeholder:"coding, javascript, react, redux, ...",noOptionsMessage:()=>c.length===I?"You have reached the max tags":"No tags available",isValidNewOption:X})}),a("div",{className:"row mx-0 mb-3",children:[a("div",{className:`wil-status col-2 ${u?"selected":""}`,onClick:o=>m(!0),children:[e("span",{children:"public"}),e(Q,{})]}),a("div",{className:`wil-status col-2 ${u?"":"selected"}`,onClick:o=>m(!1),children:[e("span",{children:"private"}),e(z,{})]}),e("div",{className:"col-8 d-flex justify-content-end px-0",children:e("button",{className:"main-btn",children:"Add a wily"})})]})]})]})});var ee=O.memo(Z);var se="/assets/ladingImg.0cfcad54.svg";function te(){return e("div",{className:"landing-section",children:a("div",{className:"container",children:[a("div",{className:"row",children:[a("div",{className:"col-md-6 right-section",children:[a("div",{className:"header",children:[e("h1",{children:"What is Wil \u201CWhat I Learned\u201D?"}),e("p",{children:"Imagine if you can remember everything you learn! wil is the tool that helps you do that"})]}),a("div",{className:"content",children:[e("h1",{children:"Easy Steps"}),a("div",{className:"step",children:[e("div",{className:"step-index",children:e("span",{children:"1"})}),e("span",{className:"step-name",children:"Make a wily"})]}),a("div",{className:"desc",children:[e("p",{children:"when you learn something that you want to stick, make a wily a wily consists of:"}),e("p",{children:"- Question  : a question that you ask your future self, or simply a title."}),e("p",{children:"- Answer    : the thing you learned"}),e("p",{children:"- Tags         : a way to categorize your wilies"}),e("a",{href:"#wilies",children:"(see examples of real wilies below)"})]}),a("div",{className:"step",children:[e("div",{className:"step-index",children:e("span",{children:"2"})}),e("span",{className:"step-name",children:"Wil do the rest"})]}),e("div",{className:"desc",children:a("p",{children:["wil will remind you to review it just before you ",e("strong",{children:"forget it"})]})})]}),e("p",{className:"never-forget",children:"Never forget what you learn again."})]}),e("div",{className:"col-md-6 mt-sm-4 mt-0 left-section",children:e("img",{className:"img-fluid",src:se,alt:""})})]}),a("p",{className:"ps",children:["PS: wil is still in development, so for a ",e("strong",{children:"limited period"}),", you can sign up now for ",e("strong",{children:"Free"})," and try it. Also, we would really appreciate you sharing your feedback with us cuz that would make wil improve faster. "]})]})})}function we(){const s=r.exports.useContext(D),{isLoading:t,error:n,sendRequest:l}=V(),[h,d]=r.exports.useState([]),[u,m]=r.exports.useState([]),c=i=>{d(i.wilies)},y=i=>{m(_(i.tags))},v=r.exports.useRef();r.exports.useEffect(()=>{s.isLoggedIn===!1?l({url:"https://www.scraspy.com/feed/wilies/public"},c):l({url:"https://www.scraspy.com/feed/wilies",headers:{Authorization:`Bearer ${s.token}`}},c),l({url:"https://www.scraspy.com/feed/tags"},y)},[]);const w=i=>{o.show(i.message,{type:"sucess",timeout:3e3}),d(g=>g.filter(f=>f._id!==i.wily._id))},x=r.exports.useMemo(()=>i=>{l({url:`https://www.scraspy.com/feed/wily/${i}`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.token}`},method:"DELETE"},w)},[]),b=i=>{v.current.resetInputs(),o.show(i.message,{type:"sucess",timeout:3e3}),d(g=>{var f=[...g,i.wily];return f})},p=r.exports.useMemo(()=>(i,g,f,A)=>{l({url:"https://www.scraspy.com/feed/wily",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.token}`},method:"POST",body:{question:i,answer:g,isPublic:f,tags:A}},b)},[]),o=P();return n&&o.show(n,{type:"error",timeout:5e3}),a(T,{children:[t&&e(G,{}),!s.isLoggedIn&&a(E,{children:[e(te,{}),e(Y,{className:"d-none"})]}),s.isLoggedIn&&e(ee,{ref:v,addWilyHandler:p,suggestedTags:u}),h.length>0&&e(B,{deleteWilyHandler:x,wilies:h,suggestedTags:u})]})}export{we as default};
