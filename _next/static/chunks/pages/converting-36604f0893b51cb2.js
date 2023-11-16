(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{3951:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converting",function(){return r(1913)}])},967:function(e,o,r){"use strict";var s=r(1527);r(959);var n=r(6125),t=r(2349);let i={logo:(0,s.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,t.useRouter)(),{frontMatter:o,title:r}=(0,n.ZR)(),i=o.description||"Documentation for the Qbox Project";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:i}),(0,s.jsx)("meta",{name:"og:title",content:r}),(0,s.jsx)("meta",{name:"og:description",content:i}),(0,s.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,t.useRouter)(),o=e.replace(/[-_]/g," ").split("/"),r="#"!==o[1][0]&&o[1]||"Qbox",s=o[o.length-1],n=/[a-z]/.test(s)&&/[A-Z]/.test(s)?s:"%s";return{titleTemplate:"".concat(n," - ").concat(s===r?"Documentation":r.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};o.Z=i},1913:function(e,o,r){"use strict";r.r(o),r.d(o,{__toc:function(){return c}});var s=r(1527),n=r(3630),t=r(6125),i=r(967);r(4552);var l=r(6119);let c=[{depth:2,value:"Switching a resource from Qb to Qbox",id:"switching-a-resource-from-qb-to-qbox"},{depth:3,value:"Common replacements",id:"common-replacements"}];function a(e){let o=Object.assign({h1:"h1",ol:"ol",li:"li",code:"code",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{children:"Converting to Qbox from Qb"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Check your job grades in ",(0,s.jsx)(o.code,{children:"qbx_core/shared/jobs.lua"}),". In Qbox, job grades are numbers without quotations, whereas in Qb they are strings."]}),"\n",(0,s.jsxs)(o.li,{children:["Configure ox_inventory and convert your database. Back it up first! ",(0,s.jsx)(o.a,{href:"https://overextended.dev/ox_inventory/Frameworks/qb",children:"https://overextended.dev/ox_inventory/Frameworks/qb"})]}),"\n",(0,s.jsx)(o.li,{children:"Qbox has multicharacter built-in to core. If you want to keep using your own multicharacter resource, disable core's via core config. Otherwise delete your multicharacter resource."}),"\n",(0,s.jsx)(o.li,{children:"Qbox maintains a qb compatibility layer, so you can continue to use exports['qb-core'] and it should have full compatibibility. However, this means you won't get access to all the Qbox features and functions. So consider switching off of exports['qb-core'] when you can. This bridge layer means that qb-core resources should be 100% compatible with Qbox."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"switching-a-resource-from-qb-to-qbox",children:"Switching a resource from Qb to Qbox"}),"\n",(0,s.jsx)(o.p,{children:"Within Qbox the core object no longer exists. Instead the data can be accessed via a combination of export functions and imported modules"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Import the needed modules from qbx_core to supply replacement functions for ones from QBCore"}),"\n",(0,s.jsx)(o.li,{children:"Replace calls to QBCore one by one with calls to the imported modules and exported functions. Both can be used at the same time, so conversion can be done partially, or over time."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"common-replacements",children:"Common replacements"}),"\n",(0,s.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(o.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions. "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerData"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" QBX."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"PlayerData"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" (requires playerdata "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"module"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" import)"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Functions.GetPlate "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlate"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" (requires utils "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"module"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" import)"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Jobs "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetJobs"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Gangs "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetGangs"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Vehicles "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetVehiclesByName"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Weapons "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetWeapons"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Locations "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.qbx_core:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GetLocations"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared.Items "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Items"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsx)(o.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"KeyPressed"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"HideText"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"DrawText"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, position) "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, {position "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" position})"})]}),"\n",(0,s.jsxs)(o.span,{className:"line",children:[(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"ChangeText"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, position) "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"() lib."}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(text, {position "}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" position})"})]})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,l.a)(),e.components);return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/converting.mdx",route:"/converting",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"MdxPage",name:"Modules",route:"/resources/core/Modules"},{kind:"Meta",data:{functions:"Functions",events:"Events",Modules:"Modules",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"Folder",name:"qbx_ambulancejob",route:"/resources/qbx_ambulancejob",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_ambulancejob/Events",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_ambulancejob/Events/Client"},{kind:"MdxPage",name:"Server",route:"/resources/qbx_ambulancejob/Events/Server"},{kind:"Meta",data:{Client:"Client",Server:"Server"}}]}]},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Converting to Qbox from Qb",headings:c},pageNextRoute:"/converting",nextraLayout:t.ZP,themeConfig:i.Z};o.default=(0,n.j)(d)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=3951)}),_N_E=e.O()}]);