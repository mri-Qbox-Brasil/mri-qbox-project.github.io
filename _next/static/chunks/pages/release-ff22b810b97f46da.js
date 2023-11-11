(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{9477:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/release",function(){return r(2056)}])},967:function(e,n,r){"use strict";var t=r(1527);r(959);var i=r(6125),o=r(2349);let s={logo:(0,t.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,o.useRouter)(),{frontMatter:n,title:r}=(0,i.ZR)(),s=n.description||"Documentation for the Qbox Project";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,t.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,t.jsx)("meta",{name:"description",content:s}),(0,t.jsx)("meta",{name:"og:title",content:r}),(0,t.jsx)("meta",{name:"og:description",content:s}),(0,t.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,o.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),r="#"!==n[1][0]&&n[1]||"Qbox",t=n[n.length-1],i=/[a-z]/.test(t)&&/[A-Z]/.test(t)?t:"%s";return{titleTemplate:"".concat(i," - ").concat(t===r?"Documentation":r.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=s},2056:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return d}});var t=r(1527),i=r(3630),o=r(6125),s=r(967);r(4552);var a=r(6119);let d=[{depth:2,value:"Code Quality",id:"code-quality"},{depth:2,value:"Core Practices",id:"core-practices"},{depth:2,value:"Resource Quality",id:"resource-quality"},{depth:2,value:"Stability",id:"stability"},{depth:2,value:"Dependencies",id:"dependencies"}];function c(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",a:"a"},(0,a.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Release Readiness"}),"\n",(0,t.jsx)(n.p,{children:"A resource is release ready when all of the following are true"}),"\n",(0,t.jsx)(n.h2,{id:"code-quality",children:"Code Quality"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"No lint errors"}),"\n",(0,t.jsx)(n.li,{children:"prints replaced with lib.print"}),"\n",(0,t.jsx)(n.li,{children:"ox_lib is used to replace natives where possible"}),"\n",(0,t.jsx)(n.li,{children:"Code has been refactored to use best practices and following style guide"}),"\n",(0,t.jsx)(n.li,{children:"Code is readable and well organized"}),"\n",(0,t.jsx)(n.li,{children:"No deprecated functions are being invoked"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"core-practices",children:"Core Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Client PlayerData is accessed using playerdata module, instead of a core export"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resource-quality",children:"Resource Quality"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Resource features provide a good experience for players/devs/owners/admins"}),"\n",(0,t.jsx)(n.li,{children:"Resource is scoped appropriately (i.e. it shouldn't be split, or combined with another resource)"}),"\n",(0,t.jsx)(n.li,{children:"README is not outdated"}),"\n",(0,t.jsx)(n.li,{children:"No known bugs"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stability",children:"Stability"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"No breaking changes are planned in the near future"}),"\n",(0,t.jsx)(n.li,{children:"Resource has been tested or unchanged for long enough to give confidence that major bugs are not present"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Dependencies are declared and enforced using ",(0,t.jsx)(n.a,{href:"https://overextended.dev/ox_lib/Modules/Version/Shared",children:"lib.checkDependency"}),", NOT fxmanifest dependencies"]}),"\n",(0,t.jsx)(n.li,{children:"Dependencies are stable"}),"\n"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/release.mdx",route:"/release",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Meta",data:{core:"Core"}},{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"Meta",data:{functions:"Functions",events:"Events",import:"Import",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"import",route:"/resources/core/import"},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"MdxPage",name:"core",route:"/resources/core"},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Release Readiness",headings:d},pageNextRoute:"/release",nextraLayout:o.ZP,themeConfig:s.Z};n.default=(0,i.j)(l)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=9477)}),_N_E=e.O()}]);