(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},9372:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>u,tree:()=>c}),t(6022),t(2169),t(2615),t(7152),t(5866);var l=t(3191),a=t(8716),r=t(7922),n=t.n(r),i=t(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(s,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6022)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,2169)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\layout.jsx"],error:[()=>Promise.resolve().then(t.bind(t,2615)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\error.jsx"],loading:[()=>Promise.resolve().then(t.bind(t,7152)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["F:\\reFresh\\module16\\AtisPac\\src\\app\\page.jsx"],x="/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5929:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,9404,23)),Promise.resolve().then(t.bind(t,3289))},3289:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var l=t(326),a=t(7577),r=t(4490),n=t(381);let i=()=>{let[e,s]=(0,a.useState)({fName:"",lName:"",email:"",msg:""}),t=(e,t)=>{s(s=>({...s,[e]:t}))},i=async t=>{t.preventDefault(),0===e.fName.length?n.ZP.error("fist name is requires"):0===e.email.length?n.ZP.error("email is require"):200===(await r.Z.post("/api/contact",e)).status&&((0,n.ZP)("send successfully"),s({fName:"",lName:"",email:"",msg:""})),console.log(e)};return(0,l.jsxs)("section",{className:"py-20 bg-gray-50",children:[l.jsx("div",{className:"container mx-auto px-4",children:(0,l.jsxs)("div",{className:"flex flex-wrap items-center justify-center -mx-4",children:[(0,l.jsxs)("div",{className:"mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4",children:[l.jsx("a",{className:"mb-6 inline-block text-3xl font-bold leading-none",href:"#",children:l.jsx("img",{className:"h-12",src:"atis-assets/logo/atis/atis-mono-sign.svg",alt:"",width:"auto"})}),l.jsx("h2",{className:"mb-4 text-4xl md:text-5xl font-bold font-heading",children:"So much more than a business analytics tool"}),l.jsx("p",{className:"mb-8 text-gray-500 leading-loose",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis."}),l.jsx("a",{className:"inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl",href:"#",children:"Get Started"})]}),l.jsx("div",{className:"w-full lg:w-1/2 px-4",children:l.jsx("div",{className:"max-w-sm mx-auto lg:mr-0 lg:ml-auto",children:l.jsx("div",{className:"mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center",children:(0,l.jsxs)("form",{onSubmit:i,children:[(0,l.jsxs)("div",{className:"mb-6",children:[l.jsx("span",{className:"text-sm text-gray-400",children:"Sign Up"}),l.jsx("h4",{className:"text-2xl",children:"Create an account"})]}),(0,l.jsxs)("div",{className:"mb-4 flex flex-wrap -mx-2",children:[l.jsx("div",{className:"mb-4 lg:mb-0 w-full lg:w-1/2 px-2",children:l.jsx("input",{className:"py-2 px-3 w-full bg-gray-50 rounded leading-loose",type:"text",placeholder:"First Name",value:e.fName,onChange:e=>t("fName",e.target.value)})}),l.jsx("div",{className:"w-full lg:w-1/2 px-2",children:l.jsx("input",{className:"py-2 px-3 w-full bg-gray-50 rounded leading-loose",type:"text",placeholder:"Last Name",value:e.lName,onChange:e=>t("lName",e.target.value)})})]}),l.jsx("input",{className:"mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose",type:"email",placeholder:"hello@example.com",value:e.email,onChange:e=>t("email",e.target.value)}),l.jsx("textarea",{className:"mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose",type:"text",value:e.msg,onChange:e=>t("msg",e.target.value),placeholder:"Message"}),l.jsx("button",{type:"submit",className:"mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200",children:"click here"})]})})})})]})}),l.jsx(n.x7,{position:"bottom-center"})]})}},6022:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h});var l=t(9510);async function a(){return(await fetch("https://agency.teamrabbil.com/api/HeroList",{method:"GET"})).json()}t(1159);let r=async()=>{let e=await a();return l.jsx("div",{className:"",children:l.jsx("section",{className:"relative bg-gray-50",children:l.jsx("div",{className:"relative pt-12 lg:pt-20 pb-20 z-10",children:l.jsx("div",{className:"container mx-auto px-4",children:(0,l.jsxs)("div",{className:"flex flex-wrap -mx-4",children:[l.jsx("div",{className:"w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center",children:(0,l.jsxs)("div",{className:"w-full text-center lg:text-left",children:[l.jsx("div",{className:"max-w-md mx-auto lg:mx-0",children:l.jsx("h2",{className:"mb-3 text-4xl lg:text-5xl font-bold font-heading",children:e.title})}),l.jsx("div",{className:"max-w-sm mx-auto lg:mx-0",children:l.jsx("p",{className:"mb-6 text-gray-400 leading-loose",children:e.description})})]})}),(0,l.jsxs)("div",{className:"w-full lg:w-1/2 px-4",children:[(0,l.jsxs)("div",{className:"flex flex-wrap lg:mb-4 lg:ml-6",children:[l.jsx("img",{className:"w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none",src:e.image1,alt:""}),l.jsx("img",{className:"w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none",src:e.image2,alt:""})]}),(0,l.jsxs)("div",{className:"flex flex-wrap lg:mb-4 lg:mr-6",children:[l.jsx("img",{className:"w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none",src:e.image3,alt:""}),l.jsx("img",{className:"w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none",src:e.image4,alt:""})]})]})]})})})})})};async function n(){let e=await fetch("https://agency.teamrabbil.com/api/StatList");if(!e.ok)throw Error("StatList Calling Fail");return e.json()}let i=async()=>{let e=await n();return l.jsx("section",{className:"py-20",children:l.jsx("div",{className:"container mx-auto px-4",children:(0,l.jsxs)("div",{className:"flex flex-wrap",children:[(0,l.jsxs)("div",{className:"mb-8 w-full md:w-1/2 lg:w-1/4 text-center",children:[l.jsx("span",{className:"mb-6 inline-block p-4 rounded bg-green-100",children:l.jsx("svg",{className:"w-6 h-6 text-green-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),l.jsx("h3",{className:"text-2xl font-bold",children:e.followers}),l.jsx("p",{className:"text-gray-500",children:"Followers"})]}),(0,l.jsxs)("div",{className:"mb-8 w-full md:w-1/2 lg:w-1/4 text-center",children:[l.jsx("span",{className:"mb-6 inline-block p-4 rounded bg-green-100",children:l.jsx("svg",{className:"w-6 h-6 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),l.jsx("h3",{className:"text-2xl font-bold",children:e.solved}),l.jsx("p",{className:"text-gray-500",children:"Solved Problems"})]}),(0,l.jsxs)("div",{className:"mb-8 w-full md:w-1/2 lg:w-1/4 text-center",children:[l.jsx("span",{className:"mb-6 inline-block p-4 rounded bg-green-100",children:l.jsx("svg",{className:"w-6 h-6 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),l.jsx("h3",{className:"text-2xl font-bold",children:e.customers}),l.jsx("p",{className:"text-gray-500",children:"Happy Customers"})]}),(0,l.jsxs)("div",{className:"mb-8 w-full md:w-1/2 lg:w-1/4 text-center",children:[l.jsx("span",{className:"mb-6 inline-block p-4 rounded bg-green-100",children:(0,l.jsxs)("svg",{className:"w-6 h-6 text-green-600",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[l.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),l.jsx("path",{d:"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"})]})}),l.jsx("h3",{className:"text-2xl font-bold",children:e.projects}),l.jsx("p",{className:"text-gray-500",children:"Projects"})]})]})})})};var o=t(2871),c=t(7371);async function d(){let e=await fetch("https://agency.teamrabbil.com/api/FeaturedProject");if(!e.ok)throw Error("FeaturedProject Calling Fail");return e.json()}let x=async()=>{let e=await d();return(0,l.jsxs)("section",{children:[l.jsx("div",{className:"skew skew-top mr-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 0 10 10 0 10"})})}),l.jsx("div",{className:"skew skew-top ml-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 10 10 0 10 10"})})}),l.jsx("div",{className:"py-20 bg-gray-50 radius-for-skewed",children:(0,l.jsxs)("div",{className:"container px-4 mx-auto",children:[(0,l.jsxs)("div",{className:"mb-16 flex flex-wrap justify-center md:justify-between items-center",children:[(0,l.jsxs)("div",{className:"text-center lg:text-left",children:[l.jsx("span",{className:"text-green-600 font-bold",children:"Dolor sit amet consectutar"}),l.jsx("h2",{className:"text-4xl lg:text-5xl font-bold font-heading",children:"Featured Projects"})]}),l.jsx(c.default,{className:"hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200",href:"/projects",children:"View More Projects"})]}),l.jsx("div",{className:"flex flex-wrap -mx-4 mb-4",children:e.map((e,s)=>l.jsx("div",{className:"w-full md:w-1/2 lg:w-1/3 mb-8 px-4",children:l.jsx("a",{target:"_blank",href:e.live,children:l.jsx("img",{className:"h-80 w-full mx-auto object-cover rounded",src:e.image,alt:""})})},s))}),l.jsx("div",{className:"text-center",children:l.jsx(c.default,{className:"md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200",href:"/projects",children:"View More Projects"})})]})}),l.jsx("div",{className:"skew skew-bottom mr-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 0 10 0 0 10"})})}),l.jsx("div",{className:"skew skew-bottom ml-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 0 10 0 10 10"})})})]})};var m=t(1292),u=t(7631);let h=()=>(0,l.jsxs)(l.Fragment,{children:[l.jsx(r,{}),l.jsx(i,{}),l.jsx(o.Z,{}),l.jsx(x,{}),l.jsx(m.ZP,{}),l.jsx(u.Z,{})]})},7631:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var l=t(9510);async function a(){return(await fetch("https://agency.teamrabbil.com/api/BrandList")).json()}t(1159);let r=async()=>{let e=await a();return l.jsx("section",{className:"py-20",children:(0,l.jsxs)("div",{className:"container mx-auto px-4 text-center",children:[l.jsx("h3",{className:"mb-16 text-2xl font-heading",children:"Trusted by brands all over the world."}),l.jsx("div",{className:"flex flex-wrap -mx-2",children:e.map((e,s)=>l.jsx("div",{className:"mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2",children:l.jsx("div",{children:l.jsx("img",{className:"mx-auto h-8",src:e.image,alt:""})})},s))})]})})}},1292:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var l=t(8570);let a=(0,l.createProxy)(String.raw`F:\reFresh\module16\AtisPac\src\components\Contacts.jsx`),{__esModule:r,$$typeof:n}=a;a.default;let i=(0,l.createProxy)(String.raw`F:\reFresh\module16\AtisPac\src\components\Contacts.jsx#default`)},2871:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var l=t(9510);async function a(){let e=await fetch("https://agency.teamrabbil.com/api/WorkList");if(!e.ok)throw Error("WorkList List Calling Fail");return e.json()}let r=async()=>(await a(),l.jsx("div",{children:(0,l.jsxs)("section",{children:[l.jsx("div",{className:"skew skew-top mr-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 0 10 10 0 10"})})}),l.jsx("div",{className:"skew skew-top ml-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 10 10 0 10 10"})})}),l.jsx("div",{className:"py-20 bg-gray-50 radius-for-skewed",children:(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsxs)("div",{className:"mb-16 max-w-md text-center mx-auto",children:[l.jsx("span",{className:"text-green-600 font-bold",children:"Dolor sit amet consectutar"}),l.jsx("h2",{className:"text-4xl lg:text-5xl font-bold font-heading",children:"Build & Launch without problems"})]}),(0,l.jsxs)("div",{className:"relative flex flex-wrap -mx-4 z-0",children:[l.jsx("div",{className:"hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600",style:{top:"10%",zIndex:-1}}),(0,l.jsxs)("div",{className:"mb-8 w-full lg:w-1/3 px-4 text-center",children:[l.jsx("span",{className:"relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl",children:"1"}),l.jsx("h3",{className:"mb-4 text-2xl font-bold font-heading",children:"Lorem ipsum dolor sit amet consectutar"}),l.jsx("p",{className:"text-gray-500 leading-loose",children:"Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat."})]}),(0,l.jsxs)("div",{className:"mb-8 w-full lg:w-1/3 px-4 text-center",children:[l.jsx("span",{className:"mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl",children:"2"}),l.jsx("h3",{className:"mb-4 text-2xl font-bold font-heading",children:"Lorem ipsum dolor sit amet consectutar"}),l.jsx("p",{className:"text-gray-500 leading-loose",children:"Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat."})]}),(0,l.jsxs)("div",{className:"w-full lg:w-1/3 px-4 text-center",children:[l.jsx("span",{className:"mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl",children:"3"}),l.jsx("h3",{className:"mb-4 text-2xl font-bold font-heading",children:"Lorem ipsum dolor sit amet consectutar"}),l.jsx("p",{className:"text-gray-500 leading-loose",children:"Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat."})]})]})]})}),l.jsx("div",{className:"skew skew-bottom mr-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 0 10 0 0 10"})})}),l.jsx("div",{className:"skew skew-bottom ml-for-radius",children:l.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:l.jsx("polygon",{fill:"currentColor",points:"0 0 10 0 10 10"})})})]})}))},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var l=t(6621);let a=e=>[{type:"image/x-icon",sizes:"936x952",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),l=s.X(0,[948,876,274,613],()=>t(9372));module.exports=l})();