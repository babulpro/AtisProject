(()=>{var e={};e.id=599,e.ids=[599],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9571:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>u,tree:()=>c}),r(7018),r(7893),r(4111),r(1544),r(2169),r(2615),r(7152),r(5866);var t=r(3191),a=r(8716),i=r(7922),l=r.n(i),o=r(5231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(s,n);let c=["",{children:["team",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7018)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\team\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7893)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\team\\layout.jsx"],error:[()=>Promise.resolve().then(r.bind(r,4111)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\team\\error.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,1544)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\team\\loading.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2169)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\layout.jsx"],error:[()=>Promise.resolve().then(r.bind(r,2615)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\error.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,7152)),"F:\\reFresh\\module16\\AtisPac\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["F:\\reFresh\\module16\\AtisPac\\src\\app\\team\\page.jsx"],x="/team/page",m={require:r,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/team/page",pathname:"/team",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9639:(e,s,r)=>{Promise.resolve().then(r.bind(r,734))},734:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(326);let a=()=>t.jsx("div",{})},4111:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>l,__esModule:()=>i,default:()=>o});var t=r(8570);let a=(0,t.createProxy)(String.raw`F:\reFresh\module16\AtisPac\src\app\team\error.jsx`),{__esModule:i,$$typeof:l}=a;a.default;let o=(0,t.createProxy)(String.raw`F:\reFresh\module16\AtisPac\src\app\team\error.jsx#default`)},7893:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i,generateMetadata:()=>a});var t=r(9510);async function a(){return{title:"Team"}}let i=({children:e})=>t.jsx("div",{children:e})},1544:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(9510);r(1159);let a=()=>t.jsx("div",{className:"fixed bg-white inset-0  flex items-center justify-center",children:t.jsx("div",{className:"loader w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"})})},7018:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var t=r(9510);r(1159);var a=r(3471),i=r(1292),l=r(7631);async function o(){return(await fetch("https://agency.teamrabbil.com/api/TeamList")).json()}let n=async()=>{let e=await o();return t.jsx("div",{children:(0,t.jsxs)("section",{children:[t.jsx("div",{className:"skew skew-top mr-for-radius",children:t.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:t.jsx("polygon",{fill:"currentColor",points:"0 0 10 10 0 10"})})}),t.jsx("div",{className:"skew skew-top ml-for-radius",children:t.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:t.jsx("polygon",{fill:"currentColor",points:"0 10 10 0 10 10"})})}),t.jsx("div",{className:"py-20 bg-gray-50 radius-for-skewed",children:(0,t.jsxs)("div",{className:"container mx-auto px-4",children:[(0,t.jsxs)("div",{className:"mb-8 lg:mb-16 text-center mx-auto max-w-xl",children:[t.jsx("span",{className:"text-green-600 font-bold",children:"Dolor sit amet consectutar"}),t.jsx("h2",{className:"text-4xl lg:text-5xl font-bold font-heading",children:"Check our awesome team members"})]}),t.jsx("div",{className:"flex flex-wrap -mx-4",children:e.map(e=>t.jsx("div",{className:"mb-6 w-full lg:w-1/2 px-4",children:(0,t.jsxs)("div",{className:"flex flex-wrap items-center bg-white rounded shadow overflow-hidden",children:[t.jsx("img",{className:"w-full lg:w-1/3 h-80 object-cover",src:e.image,alt:""}),(0,t.jsxs)("div",{className:"w-full lg:w-2/3 lg:pl-6 p-4",children:[t.jsx("h4",{className:"mb-2 text-2xl font-bold font-heading",children:e.name}),t.jsx("p",{className:"mb-4 text-gray-500 leading-loose",children:e.bio}),(0,t.jsxs)("div",{className:"flex",children:[t.jsx("a",{className:"mr-3",href:"#",children:t.jsx("img",{src:e.facebook,alt:""})}),t.jsx("a",{className:"mr-3",href:"#",children:t.jsx("img",{src:e.twitter,alt:""})}),t.jsx("a",{href:"#",children:t.jsx("img",{src:e.instagram,alt:""})})]})]})]})}))})]})}),t.jsx("div",{className:"skew skew-bottom mr-for-radius",children:t.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:t.jsx("polygon",{fill:"currentColor",points:"0 0 10 0 0 10"})})}),t.jsx("div",{className:"skew skew-bottom ml-for-radius",children:t.jsx("svg",{className:"h-8 md:h-12 lg:h-20 w-full text-gray-50",viewBox:"0 0 10 10",preserveAspectRatio:"none",children:t.jsx("polygon",{fill:"currentColor",points:"0 0 10 0 10 10"})})})]})})},c=()=>(0,t.jsxs)(t.Fragment,{children:[t.jsx(n,{}),t.jsx(a.Z,{}),t.jsx(i.ZP,{}),t.jsx(l.Z,{})]})}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[948,876,274,613,519],()=>r(9571));module.exports=t})();