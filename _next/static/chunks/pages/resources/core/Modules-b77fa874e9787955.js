(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{7667:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/core/Modules",function(){return n(728)}])},967:function(e,s,n){"use strict";var r=n(1527);n(959);var o=n(6125),t=n(2349);let i={logo:(0,r.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,t.useRouter)(),{frontMatter:s,title:n}=(0,o.ZR)(),i=s.description||"Documentation for the Qbox Project";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{name:"og:title",content:n}),(0,r.jsx)("meta",{name:"og:description",content:i}),(0,r.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,t.useRouter)(),s=e.replace(/[-_]/g," ").split("/"),n="#"!==s[1][0]&&s[1]||"Qbox",r=s[s.length-1],o=/[a-z]/.test(r)&&/[A-Z]/.test(r)?r:"%s";return{titleTemplate:"".concat(o," - ").concat(r===n?"Documentation":n.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};s.Z=i},728:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var r=n(1527),o=n(3630),t=n(6125),i=n(967);n(4552);var l=n(6119);let a=[{depth:2,value:"playerdata",id:"playerdata"},{depth:3,value:"Installation",id:"installation"},{depth:2,value:"utils",id:"utils"},{depth:3,value:"Installation",id:"installation-1"},{depth:2,value:"logger",id:"logger"},{depth:3,value:"Example use",id:"example-use"}];function c(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Modules"}),"\n",(0,r.jsx)(s.p,{children:"Modules are code libraries that can be imported into other scripts to provide additional functionality. They are located in qbx_core/modules folder"}),"\n",(0,r.jsx)(s.h2,{id:"playerdata",children:"playerdata"}),"\n",(0,r.jsxs)(s.p,{children:["Adds global QBX.PlayerData and keeps it updated\n",(0,r.jsx)(s.a,{href:"https://github.com/Qbox-project/qbx_core/blob/14edd8e082b6579ef30a5e34df29f5a26bc29a21/server/player.lua#L3",children:"https://github.com/Qbox-project/qbx_core/blob/14edd8e082b6579ef30a5e34df29f5a26bc29a21/server/player.lua#L3"})]}),"\n",(0,r.jsx)(s.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(s.p,{children:"Add 'qbx_core/modules/playerdata.lua' to client_scripts in fxmanifest.lua"}),"\n",(0,r.jsx)(s.h2,{id:"utils",children:"utils"}),"\n",(0,r.jsx)(s.p,{children:"Adds global utility functions"}),"\n",(0,r.jsx)(s.h3,{id:"installation-1",children:"Installation"}),"\n",(0,r.jsx)(s.p,{children:"Add 'qbx_core/modules/utils.lua' to shared_scripts in fxmanifest.lua"}),"\n",(0,r.jsx)(s.h2,{id:"logger",children:"logger"}),"\n",(0,r.jsx)(s.p,{children:"logs to either discord or ox_lib depending on whether webhook is nil or not"}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" source "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string source of the log. Usually a playerId or name of a resource."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" event "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string the action or "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'event' "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"being logged. Usually a verb describing what the name is doing. Example"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:": "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"SpawnVehicle"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" message "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string the message attached to the log"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" webhook? "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string Discord logs only. url of the webhook this log should send to."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" color? "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string Discord logs only. what color the message should be"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" tags? "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string[] Discord logs only. tags in discord. Example"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:": {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'<@&roleid>'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'<@userid>'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@everyone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"})]})]})}),"\n",(0,r.jsx)(s.h3,{id:"example-use",children:"Example use"}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" logger "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@qbx_core.modules.logger'"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"logger."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"log"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  source "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my source'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  event "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my event'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  message "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my message'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tags "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@everyone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/resources/core/Modules.mdx",route:"/resources/core/Modules",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"MdxPage",name:"Modules",route:"/resources/core/Modules"},{kind:"Meta",data:{functions:"Functions",events:"Events",Modules:"Modules",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"Folder",name:"qbx_ambulancejob",route:"/resources/qbx_ambulancejob",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_ambulancejob/Events",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_ambulancejob/Events/Client"},{kind:"MdxPage",name:"Server",route:"/resources/qbx_ambulancejob/Events/Server"},{kind:"Meta",data:{Client:"Client",Server:"Server"}}]}]},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Modules",headings:a},pageNextRoute:"/resources/core/Modules",nextraLayout:t.ZP,themeConfig:i.Z};s.default=(0,o.j)(d)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=7667)}),_N_E=e.O()}]);